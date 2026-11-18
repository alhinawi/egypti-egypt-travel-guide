import{test,before,after}from'node:test';import assert from'node:assert/strict';import{readFileSync}from'node:fs';import{Miniflare}from'miniflare';
let mf:Miniflare;const origin='https://password.test';const headers={Origin:origin,'Content-Type':'application/json'};
const request=(path:string,body:unknown,extra:Record<string,string>={})=>mf.dispatchFetch(origin+path,{method:'POST',headers:{...headers,...extra},body:JSON.stringify(body)});
const account={email:'visitor@example.test',password:'test-fixture-only-not-a-real-password',name:'Test Visitor'};
before(async()=>{mf=new Miniflare({modules:true,scriptPath:'out/_worker.js',compatibilityDate:'2026-08-01',compatibilityFlags:['nodejs_compat'],bindings:{APP_ORIGIN:origin,AUTH_SECRET:'test-only-pepper-for-automated-tests',ADMIN_EMAILS:account.email},d1Databases:['DB']});const db=await mf.getD1Database('DB');for(const file of ['0001_initial.sql','0003_password_credentials.sql'])for(const q of readFileSync('migrations/'+file,'utf8').split(';').map(x=>x.trim()).filter(Boolean))await db.prepare(q).run()});
after(async()=>{await mf?.dispose()});
test('real signup, secure cookie, persisted salted hash, logout and sign in',async()=>{
 const r=await request('/api/auth/password/signup',account);assert.equal(r.status,201);const cookie=r.headers.get('set-cookie')!;assert.match(cookie,/Secure/);assert.match(cookie,/HttpOnly/);assert.match(cookie,/SameSite=Lax/);const session=cookie.split(';')[0];
 const b=await(await mf.dispatchFetch(origin+'/api/me',{headers:{Cookie:session}})).json()as any;assert.equal(b.user.email,account.email);assert.equal(b.admin,false);
 const row=await(await mf.getD1Database('DB')).prepare('SELECT * FROM password_credentials').first()as any;assert.equal(row.password_hash.length,64);assert.equal(row.salt.length,64);assert.equal(row.email_verified,0);assert.ok(!JSON.stringify(row).includes(account.password));
 assert.equal((await request('/api/auth/logout',{}, {Cookie:session})).status,200);assert.equal((await(await mf.dispatchFetch(origin+'/api/me',{headers:{Cookie:session}})).json()as any).user,null);
 const wrong=await request('/api/auth/password/signin',{...account,password:'a-completely-wrong-password'});assert.equal(wrong.status,401);assert.equal(wrong.headers.get('set-cookie'),null);
 const right=await request('/api/auth/password/signin',{...account,email:'VISITOR@EXAMPLE.TEST'});assert.equal(right.status,200);const token=right.headers.get('set-cookie')!.split(';')[0];assert.equal((await(await mf.dispatchFetch(origin+'/api/me',{headers:{Cookie:token}})).json()as any).user.name,account.name);
 const put=await mf.dispatchFetch(origin+'/api/saved',{method:'PUT',headers:{...headers,Cookie:token},body:JSON.stringify({items:['place:qaitbay']})});assert.equal(put.status,200);
 assert.deepEqual((await(await mf.dispatchFetch(origin+'/api/saved',{headers:{Cookie:token}})).json()as any).items,['place:qaitbay']);
 assert.equal((await request('/api/auth/password/signup',account)).status,409);
});
test('validation, origin restrictions and bounded request sizes',async()=>{
 assert.equal((await request('/api/auth/password/signup',{...account,email:'bad'})).status,422);
 assert.equal((await request('/api/auth/password/signup',{...account,password:'short'})).status,422);
 assert.equal((await request('/api/auth/password/signup',{...account,password:'a'.repeat(129)})).status,422);
 assert.equal((await request('/api/auth/password/signup',account,{Origin:'https://elsewhere.test'})).status,403);
});
test('Google identities cannot be linked by claiming their email',async()=>{
 const db=await mf.getD1Database('DB');await db.prepare('INSERT INTO users(id,google_sub,email,name,created_at,updated_at) VALUES(?,?,?,?,?,?)').bind('google-user','actual-google-sub','google@example.test','Google User',Date.now(),Date.now()).run();
 assert.equal((await request('/api/auth/password/signup',{...account,email:'google@example.test'})).status,409);
 assert.equal((await request('/api/auth/password/signin',{...account,email:'google@example.test'})).status,401);
 assert.equal((await db.prepare('SELECT count(*) n FROM password_credentials WHERE email=?').bind('google@example.test').first()as any).n,0);
});
test('per-email throttling prevents repeated guesses without session issuance',async()=>{
 let last;for(let i=0;i<10;i++)last=await request('/api/auth/password/signin',{email:'unknown@example.test',password:account.password});assert.equal(last!.status,429);assert.equal(last!.headers.get('set-cookie'),null);assert.equal(last!.headers.get('retry-after'),'900');
});
