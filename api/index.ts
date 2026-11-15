import {Hono} from 'hono';
import {getCookie,setCookie,deleteCookie} from 'hono/cookie';
import {SignJWT,jwtVerify,createRemoteJWKSet} from 'jose';
import {places,itineraries} from '../src/lib/data';
interface Env {DB:D1Database; ASSETS:Fetcher; APP_ORIGIN:string; GOOGLE_CLIENT_ID:string; GOOGLE_CLIENT_SECRET:string; AUTH_SECRET:string; ADMIN_EMAILS?:string;}
const app=new Hono<{Bindings:Env;Variables:{user:{id:string,name:string,email:string,picture:string|null}|null;sessionHash:string}}>();
const jwks=createRemoteJWKSet(new URL('https://www.googleapis.com/oauth2/v3/certs'));
const itemIds=new Set([...places.map(p=>'place:'+p.id),...itineraries.map(p=>'trip:'+p.id)]);
const SESSION='__Host-eg-session',FLOW='__Host-eg-oauth';
const random=()=>{const a=crypto.getRandomValues(new Uint8Array(32));return btoa(String.fromCharCode(...a)).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'')};
const hash=async(s:string)=>Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s)))).map(b=>b.toString(16).padStart(2,'0')).join('');
const secret=(e:Env)=>new TextEncoder().encode(e.AUTH_SECRET);
const configured=(e:Env)=>Boolean(e.GOOGLE_CLIENT_ID&&e.GOOGLE_CLIENT_SECRET&&e.AUTH_SECRET&&e.DB);
const cookieOptions={httpOnly:true,secure:true,sameSite:'Lax' as const,path:'/'};
app.use('/api/*',async(c,next)=>{c.header('Cache-Control','no-store');c.header('X-Content-Type-Options','nosniff');c.header('Referrer-Policy','no-referrer');await next()});
app.onError((err,c)=>{console.error('api_error',err.name);return c.json({error:'Service temporarily unavailable. Please try again.'},500)});
app.get('/api/health',c=>c.json({ok:true,version:'0.1.0'}));
app.get('/api/config',c=>c.json({google:configured(c.env),country:(c.req.raw.cf as IncomingRequestCfProperties|undefined)?.country??null,translation:{enabled:false,languages:['ar','en']}}));
app.use('/api/*',async(c,next)=>{
 if(!['GET','HEAD','OPTIONS'].includes(c.req.method)){
  const origin=c.req.header('Origin');
  if(origin!==c.env.APP_ORIGIN||c.req.header('Sec-Fetch-Site')==='cross-site')return c.json({error:'Invalid request origin'},403);
  if(c.req.header('Content-Type')?.split(';')[0]!=='application/json')return c.json({error:'JSON required'},415);
  if(Number(c.req.header('Content-Length')||0)>8192)return c.json({error:'Request too large'},413);
 }
 c.set('user',null);
 const token=getCookie(c,SESSION);
 if(token&&c.env.DB){
  const tokenHash=await hash(token);c.set('sessionHash',tokenHash);
  const user=await c.env.DB.prepare('SELECT u.id,u.name,u.email,u.picture FROM users u JOIN sessions s ON s.user_id=u.id WHERE s.token_hash=? AND s.expires_at>?').bind(tokenHash,Date.now()).first<{id:string,name:string,email:string,picture:string|null}>();c.set('user',user);
 }
 await next();
});
app.get('/api/auth/google/start',async c=>{
 if(!configured(c.env))return c.json({error:'Google sign-in is not configured yet'},503);
 const ip=c.req.header('CF-Connecting-IP')||'local',bucket=Math.floor(Date.now()/300000);
 const key='login:'+await hash(ip+':'+bucket);
 const result=await c.env.DB.prepare('INSERT INTO rate_limits(key,count,expires_at) VALUES(?,1,?) ON CONFLICT(key) DO UPDATE SET count=count+1 RETURNING count').bind(key,Date.now()+600000).first<{count:number}>();
 if((result?.count??0)>20){c.header('Retry-After','300');return c.json({error:'Too many attempts. Please try again in a few minutes.'},429)}
 const state=random(),nonce=random(),verifier=random();
 const flow=await new SignJWT({state,nonce,verifier}).setProtectedHeader({alg:'HS256'}).setIssuedAt().setExpirationTime('10m').setAudience('egypt-oauth').setIssuer(c.env.APP_ORIGIN).sign(secret(c.env));
 setCookie(c,FLOW,flow,{...cookieOptions,maxAge:600});
 const challenge=btoa(String.fromCharCode(...new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(verifier))))).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');
 const url=new URL('https://accounts.google.com/o/oauth2/v2/auth');
 url.search=new URLSearchParams({client_id:c.env.GOOGLE_CLIENT_ID,redirect_uri:c.env.APP_ORIGIN+'/api/auth/google/callback',response_type:'code',scope:'openid email profile',state,nonce,code_challenge:challenge,code_challenge_method:'S256',prompt:'select_account'}).toString();
 return c.redirect(url.toString());
});
app.get('/api/auth/google/callback',async c=>{
 const fail=()=>c.redirect(c.env.APP_ORIGIN+'/?auth=failed');
 const flow=getCookie(c,FLOW);deleteCookie(c,FLOW,{...cookieOptions});
 if(!configured(c.env)||!flow||c.req.query('error')||!c.req.query('code'))return fail();
 try{
  const {payload:f}=await jwtVerify(flow,secret(c.env),{algorithms:['HS256'],issuer:c.env.APP_ORIGIN,audience:'egypt-oauth'});
  if(!f.state||f.state!==c.req.query('state')||typeof f.verifier!=='string')return fail();
  const res=await fetch('https://oauth2.googleapis.com/token',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams({client_id:c.env.GOOGLE_CLIENT_ID,client_secret:c.env.GOOGLE_CLIENT_SECRET,code:c.req.query('code')!,grant_type:'authorization_code',redirect_uri:c.env.APP_ORIGIN+'/api/auth/google/callback',code_verifier:f.verifier})});
  if(!res.ok)return fail();const token=await res.json() as {id_token?:string};if(!token.id_token)return fail();
  const {payload:u}=await jwtVerify(token.id_token,jwks,{issuer:['https://accounts.google.com','accounts.google.com'],audience:c.env.GOOGLE_CLIENT_ID,algorithms:['RS256']});
  if(!u.sub||u.nonce!==f.nonce||u.email_verified!==true||typeof u.email!=='string')return fail();
  const id=crypto.randomUUID(),name=typeof u.name==='string'?u.name.slice(0,100):u.email.split('@')[0];
  const picture=typeof u.picture==='string'&&u.picture.startsWith('https://lh3.googleusercontent.com/')?u.picture:null;
  const now=Date.now();
  await c.env.DB.prepare('INSERT INTO users(id,google_sub,email,name,picture,created_at,updated_at) VALUES(?,?,?,?,?,?,?) ON CONFLICT(google_sub) DO UPDATE SET email=excluded.email,name=excluded.name,picture=excluded.picture,updated_at=excluded.updated_at').bind(id,u.sub,u.email,name,picture,now,now).run();
  const user=await c.env.DB.prepare('SELECT id FROM users WHERE google_sub=?').bind(u.sub).first<{id:string}>();if(!user)return fail();
  const session=random();await c.env.DB.prepare('INSERT INTO sessions(token_hash,user_id,expires_at) VALUES(?,?,?)').bind(await hash(session),user.id,now+30*86400000).run();
  await c.env.DB.batch([c.env.DB.prepare('DELETE FROM sessions WHERE expires_at<?').bind(now),c.env.DB.prepare('DELETE FROM rate_limits WHERE expires_at<?').bind(now)]);
  setCookie(c,SESSION,session,{...cookieOptions,maxAge:30*86400});return c.redirect(c.env.APP_ORIGIN+'/?auth=success');
 }catch{return fail()}
});
const isAdmin=(c:{env:Env;get:(k:'user')=>{email:string}|null})=>{const u=c.get('user');if(!u)return false;const list=(c.env.ADMIN_EMAILS||'').split(',').map(x=>x.trim().toLowerCase()).filter(Boolean);return list.includes(u.email.toLowerCase())};
const mask=(e:string)=>{const[a,d]=e.split('@');return (a.slice(0,2)||'*')+'***@'+(d||'')};
app.get('/api/me',c=>c.json({user:c.get('user'),admin:isAdmin(c)}));
app.use('/api/admin/*',async(c,next)=>{if(!c.get('user'))return c.json({error:'Sign in required'},401);if(!isAdmin(c))return c.json({error:'Admin only'},403);await next()});
app.get('/api/admin/overview',async c=>{
 const db=c.env.DB,now=Date.now(),week=now-7*86400000;
 const one=async(sql:string,...b:unknown[])=>(await db.prepare(sql).bind(...b).first<{n:number}>())?.n??0;
 const [users,newUsers,sessions,saves,savers]=await Promise.all([one('SELECT count(*) n FROM users'),one('SELECT count(*) n FROM users WHERE created_at>?',week),one('SELECT count(*) n FROM sessions WHERE expires_at>?',now),one('SELECT count(*) n FROM saved_items'),one('SELECT count(DISTINCT user_id) n FROM saved_items')]);
 const top=await db.prepare('SELECT item_id,count(*) n FROM saved_items GROUP BY item_id ORDER BY n DESC,item_id LIMIT 8').all<{item_id:string;n:number}>();
 const recent=await db.prepare('SELECT name,email,created_at FROM users ORDER BY created_at DESC LIMIT 6').all<{name:string;email:string;created_at:number}>();
 let assets=false;try{assets=(await c.env.ASSETS.fetch(new Request(c.env.APP_ORIGIN+'/ar/'))).ok}catch{}
 return c.json({counts:{users,newUsers,sessions,saves,savers},topSaved:top.results,recentUsers:recent.results.map(r=>({name:r.name,email:mask(r.email),createdAt:r.created_at})),health:{database:true,google:configured(c.env),authSecret:Boolean(c.env.AUTH_SECRET),origin:c.env.APP_ORIGIN,adminCount:(c.env.ADMIN_EMAILS||'').split(',').filter(x=>x.trim()).length,assets},generatedAt:now});
});
app.post('/api/auth/logout',async c=>{if(c.get('sessionHash'))await c.env.DB.prepare('DELETE FROM sessions WHERE token_hash=?').bind(c.get('sessionHash')).run();deleteCookie(c,SESSION,{...cookieOptions});return c.json({ok:true})});
app.get('/api/saved',async c=>{const user=c.get('user');if(!user)return c.json({error:'Sign in required'},401);const result=await c.env.DB.prepare('SELECT item_id FROM saved_items WHERE user_id=? ORDER BY created_at DESC').bind(user.id).all<{item_id:string}>();return c.json({items:result.results.map(r=>r.item_id)})});
app.put('/api/saved',async c=>{
 const user=c.get('user');if(!user)return c.json({error:'Sign in required'},401);
 const text=await c.req.text();if(text.length>8192)return c.json({error:'Request too large'},413);
 let body;try{body=JSON.parse(text)}catch{return c.json({error:'Invalid JSON'},400)}
 if(!Array.isArray(body.items)||body.items.length>100||body.items.some((x:unknown)=>typeof x!=='string'||!itemIds.has(x)))return c.json({error:'Invalid saved items'},422);
 const items=[...new Set(body.items as string[])];
 await c.env.DB.batch([c.env.DB.prepare('DELETE FROM saved_items WHERE user_id=?').bind(user.id),...items.map(item=>c.env.DB.prepare('INSERT INTO saved_items(user_id,item_id,created_at) VALUES(?,?,?)').bind(user.id,item,Date.now()))]);
 return c.json({ok:true,items});
});
app.notFound(c=>c.req.path.startsWith('/api/')?c.json({error:'Not found'},404):c.env.ASSETS.fetch(c.req.raw));
export default app;
