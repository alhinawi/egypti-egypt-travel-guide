'use client';
import{useCallback,useEffect,useMemo,useState}from'react';
import{ShieldCheck,LogOut,ArrowUpRight,Palette,MapPin,Users,Bookmark,Activity,Link2,Check,AlertTriangle,Search,Shuffle,Hotel,Camera,Scan,RefreshCw}from'lucide-react';
import{places,destinations,itineraries,categoryNames,checkedAt}from'@/lib/data';
import{placePhotos,photoPath}from'@/lib/photos';
import{mediaStatus}from'@/lib/media-status';
import maps from'@/lib/maps.json';
import{themes,isTheme,SITE_KEY,ADMIN_KEY,type Theme}from'@/lib/themes';
import'../app/admin.css';
type User={id:string;name:string;email:string;picture:string|null};
type Overview={counts:{users:number;newUsers:number;sessions:number;saves:number;savers:number};topSaved:{item_id:string;n:number}[];recentUsers:{name:string;email:string;createdAt:number}[];health:{database:boolean;google:boolean;authSecret:boolean;origin:string;adminCount:number;assets:boolean};generatedAt:number};
type Gate='loading'|'anon'|'denied'|'ok'|'error';
const day=(ms:number)=>new Date(ms).toISOString().slice(0,10);
const destPhoto=(id:string)=>'/photos/'+(destinations.find(d=>d.id===id)?.photo||'giza')+'-420.webp';
const themeById=(id:string)=>themes.find(t=>t.id===id)||themes[0];
const vars=(t:Theme)=>({'--page':t.page,'--paper':t.paper,'--ink':t.ink,'--muted':t.muted,'--accent':t.accent,'--tint':t.tint,'--line':t.line,'--sun':t.sun,'--deep':t.deep}) as React.CSSProperties;
const read=(k:string,d:string)=>{try{const v=localStorage.getItem(k);return isTheme(v)?v:d}catch{return d}};
const label=(id:string)=>{const[k,v]=id.split(':');if(k==='place'){const p=places.find(x=>x.id===v);return p?p.name.ar:id}const t=itineraries.find(x=>x.id===v);return t?t.title.ar:id};
export function Admin(){
 const[gate,setGate]=useState<Gate>('loading'),[user,setUser]=useState<User|null>(null),[data,setData]=useState<Overview|null>(null),[theme,setTheme]=useState('cairo-night'),[siteTheme,setSiteTheme]=useState('ivory'),[loadErr,setLoadErr]=useState(false);
 useEffect(()=>{setTheme(read(ADMIN_KEY,'cairo-night'));setSiteTheme(read(SITE_KEY,'ivory'))},[]);
 const load=useCallback(async()=>{
  setLoadErr(false);
  try{
   const me=await(await fetch('/api/me')).json();
   if(!me.user){setGate('anon');return}
   setUser(me.user);
   if(!me.admin){setGate('denied');return}
   const res=await fetch('/api/admin/overview');
   if(res.status===401){setGate('anon');return}if(res.status===403){setGate('denied');return}
   if(!res.ok)throw Error();
   setData(await res.json());setGate('ok');
  }catch{setGate('error')}
 },[]);
 useEffect(()=>{load()},[load]);
 const pickAdmin=(id:string)=>{setTheme(id);try{localStorage.setItem(ADMIN_KEY,id)}catch{}};
 const pickSite=(id:string)=>{setSiteTheme(id);try{localStorage.setItem(SITE_KEY,id)}catch{}};
 const logout=async()=>{try{await fetch('/api/auth/logout',{method:'POST',headers:{'Content-Type':'application/json'},body:'{}'})}catch{}location.href='/'};
 return <div className="adm" data-theme={theme} lang="ar" dir="rtl">
  {gate==='loading'&&<Center title="بنجهّز اللوحة…" text="لحظة واحدة."/>}
  {gate==='error'&&<Center title="اللوحة ما فتحتش" text="في مشكلة في الاتصال. جرّب تاني." action={<button className="adm-btn" onClick={()=>{setGate('loading');load()}}><RefreshCw size={16}/>جرّب تاني</button>}/>}
  {gate==='anon'&&<Center title="لوحة التحكم" text="الصفحة دي للأدمن بس. ادخل بحساب Google بتاعك." action={<a className="adm-btn" href="/api/auth/google/start" onClick={()=>{try{sessionStorage.setItem('egypti:to-admin','1')}catch{}}}><img src="/google-signin-icon.svg" alt="" width="22" height="22"/>الدخول بحساب Google</a>}/>}
  {gate==='denied'&&<Center title="مش متاح للحساب ده" text={'الصفحة دي للأدمن بس. إنت داخل بحساب '+(user?.email||'')+'.'} action={<><a className="adm-btn" href="/">ارجع للموقع</a><button className="adm-btn ghost" onClick={logout}><LogOut size={16}/>تسجيل الخروج</button></>} ltrText/>}
  {gate==='ok'&&user&&data&&<Dashboard user={user} data={data} theme={theme} siteTheme={siteTheme} pickAdmin={pickAdmin} pickSite={pickSite} logout={logout} refresh={load}/>}
 </div>
}
function Center({title,text,action,ltrText}:{title:string;text:string;action?:React.ReactNode;ltrText?:boolean}){return <div className="adm-center"><div className="adm-gate"><img className="adm-gate-photo" src="/photos/giza-780.webp" alt="" width="780" height="520"/><div className="adm-gate-body"><span className="adm-emblem"><ShieldCheck size={26}/></span><h1>{title}</h1><p dir={ltrText?'auto':undefined}>{text}</p><div className="adm-actions">{action}</div></div></div></div>}
function Dashboard({user,data,theme,siteTheme,pickAdmin,pickSite,logout,refresh}:{user:User;data:Overview;theme:string;siteTheme:string;pickAdmin:(id:string)=>void;pickSite:(id:string)=>void;logout:()=>void;refresh:()=>void}){
 const tabs=[['overview','نظرة عامة',Activity],['places','الأماكن',MapPin],['themes','الثيمات',Palette],['health','الفحص',ShieldCheck],['links','روابط سريعة',Link2]] as const;
 const[tab,setTab]=useState<string>('overview');
 useEffect(()=>{const h=location.hash.slice(1);if(tabs.some(t=>t[0]===h))setTab(h)},[]);
 const go=(id:string)=>{setTab(id);history.replaceState(null,'','#'+id);window.scrollTo({top:0})};
 return <>
  <header className="adm-top"><div className="adm-top-in"><div className="adm-brand"><span dir="ltr">egypti</span><small>لوحة التحكم</small></div><nav className="adm-tabs" aria-label="أقسام اللوحة">{tabs.map(([id,name,Icon])=><button key={id} onClick={()=>go(id)} aria-current={tab===id?'page':undefined}><Icon size={17}/><span>{name}</span></button>)}</nav><div className="adm-user">{user.picture?<img src={user.picture} alt="" width="36" height="36" referrerPolicy="no-referrer"/>:<span className="adm-avatar">{user.name.slice(0,1)}</span>}<button className="adm-icon" onClick={logout} aria-label="تسجيل الخروج" title="تسجيل الخروج"><LogOut size={18}/></button></div></div></header>
  <main className="adm-main">
   {tab==='overview'&&<Overview data={data} user={user} refresh={refresh}/>}
   {tab==='places'&&<Places/>}
   {tab==='themes'&&<Themes theme={theme} siteTheme={siteTheme} pickAdmin={pickAdmin} pickSite={pickSite}/>}
   {tab==='health'&&<Health data={data} refresh={refresh}/>}
   {tab==='links'&&<Links/>}
  </main>
 </>
}
function Head({eyebrow,title,text,children}:{eyebrow:string;title:string;text?:string;children?:React.ReactNode}){return <div className="adm-head"><div><span className="adm-eyebrow">{eyebrow}</span><h1>{title}</h1>{text&&<p>{text}</p>}</div>{children}</div>}
function Stat({photo,n,label,note}:{photo:string;n:number;label:string;note?:string}){return <article className="adm-stat"><img src={photo} alt="" width="120" height="120" loading="lazy"/><div><b>{n}</b><span>{label}</span>{note&&<small>{note}</small>}</div></article>}
function Overview({data,user,refresh}:{data:Overview;user:User;refresh:()=>void}){
 const c=data.counts,ready=mediaStatus.filter(m=>m.state==='qualifies').length,photos=mediaStatus.filter(m=>m.photo).length,pins=places.filter(p=>(maps as Record<string,unknown>)[p.id]).length;
 return <>
  <Head eyebrow={'أهلًا '+user.name.split(' ')[0]} title="الموقع النهارده" text={'آخر تحديث '+new Date(data.generatedAt).toISOString().slice(11,16)+' UTC. البيانات من الحسابات والمحفوظات الحقيقية.'}><button className="adm-btn ghost" onClick={refresh}><RefreshCw size={16}/>تحديث</button></Head>
  <section className="adm-grid4" aria-label="الأرقام">
   <Stat photo="/photos/giza-420.webp" n={c.users} label="حسابات" note={c.newUsers+' جديد في 7 أيام'}/>
   <Stat photo="/photos/luxor-420.webp" n={c.sessions} label="جلسات شغالة"/>
   <Stat photo="/photos/alexandria-420.webp" n={c.saves} label="عناصر محفوظة" note={c.savers+' حساب بيحفظ'}/>
   <Stat photo="/photos/dahab-420.webp" n={places.length} label="مكان في الدليل" note={destinations.length+' وجهات · '+itineraries.length+' خطط'}/>
  </section>
  <div className="adm-cols">
   <section className="adm-card"><h2><Bookmark size={19}/>الأكتر حفظًا</h2>{data.topSaved.length?<ol className="adm-rank">{data.topSaved.map((r,i)=><li key={r.item_id}><span>{i+1}</span><b>{label(r.item_id)}</b><em>{r.n}</em></li>)}</ol>:<p className="adm-empty">لسه محدش حفظ حاجة.</p>}</section>
   <section className="adm-card"><h2><Users size={19}/>آخر المسجّلين</h2>{data.recentUsers.length?<ul className="adm-list">{data.recentUsers.map((u,i)=><li key={i}><b>{u.name}</b><span dir="ltr">{u.email}</span><small>{day(u.createdAt)}</small></li>)}</ul>:<p className="adm-empty">مفيش حسابات لسه.</p>}<p className="adm-fine">الإيميلات مخفية جزئيًا.</p></section>
  </div>
  <section className="adm-grid3">
   <article className="adm-card adm-media"><img src="/photos/aswan-780.webp" alt="" loading="lazy"/><div><h2><Camera size={19}/>الصور</h2><p><b>{photos}</b> من {places.length} مكان ليه صورة.</p></div></article>
   <article className="adm-card adm-media"><img src="/photos/hurghada-780.webp" alt="" loading="lazy"/><div><h2><Scan size={19}/>جولات افتراضية</h2><p><b>{ready}</b> مكان جاهز (صورة وجولة داخلية متأكد منها).</p></div></article>
   <article className="adm-card adm-media"><img src="/photos/dahab-780.webp" alt="" loading="lazy"/><div><h2><MapPin size={19}/>دبابيس الخرائط</h2><p><b>{pins}</b> مكان بدبوس متأكد منه.</p></div></article>
  </section>
 </>
}
function Places(){
 const[q,setQ]=useState(''),[dest,setDest]=useState('all'),[st,setSt]=useState<'all'|'ready'|'pending'>('all');
 const rows=useMemo(()=>places.map(p=>{const m=mediaStatus.find(x=>x.id===p.id)!;const ph=placePhotos[p.id];return{p,m,ph,pin:Boolean((maps as Record<string,unknown>)[p.id]),ticket:Boolean(p.ticket)}}),[]);
 const shown=rows.filter(r=>(dest==='all'||r.p.destination===dest)&&(st==='all'||(st==='ready')===(r.m.state==='qualifies'))&&(!q||(r.p.name.ar+' '+r.p.name.en+' '+r.p.id).toLowerCase().includes(q.toLowerCase())));
 return <>
  <Head eyebrow="الأماكن" title={places.length+' مكان في الدليل'} text={'عرض للقراءة بس. البيانات جوه كود الموقع، فالتعديل بيتم بـ PR. آخر مراجعة '+checkedAt+'.'}/>
  <div className="adm-filters"><label className="adm-search"><Search size={17}/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="دوّر على مكان" aria-label="بحث"/></label><select value={dest} onChange={e=>setDest(e.target.value)} aria-label="الوجهة"><option value="all">كل الوجهات</option>{destinations.map(d=><option key={d.id} value={d.id}>{d.name.ar}</option>)}</select><div className="adm-seg" role="group" aria-label="الحالة">{([['all','الكل'],['ready','جاهز'],['pending','ناقص']] as const).map(([k,n])=><button key={k} aria-pressed={st===k} onClick={()=>setSt(k)}>{n}</button>)}</div><span className="adm-count">{shown.length} نتيجة</span></div>
  <div className="adm-places">{shown.map(({p,m,ph,pin,ticket})=><article key={p.id} className="adm-place"><img src={ph?photoPath(ph,420):destPhoto(p.destination)} alt="" width="420" height="280" loading="lazy"/><div className="adm-place-body"><h3>{p.name.ar}</h3><small>{destinations.find(d=>d.id===p.destination)?.name.ar} · {categoryNames[p.category].ar}</small><div className="adm-chips"><Chip ok={m.photo} yes="صورة" no="بدون صورة"/><Chip ok={m.interiorEmbed} yes="جولة داخلية" no="بدون جولة"/><Chip ok={pin} yes="دبوس" no="بدون دبوس"/>{ticket&&<span className="adm-chip ok">تذاكر</span>}</div><a className="adm-link" href={'/ar/places/'+p.id+'/'} target="_blank" rel="noreferrer">افتح الصفحة<ArrowUpRight size={15}/></a></div></article>)}{!shown.length&&<p className="adm-empty">مفيش أماكن بالشكل ده.</p>}</div>
  <section className="adm-card adm-hotels"><img src="/photos/luxor-780.webp" alt="" loading="lazy"/><div><h2><Hotel size={19}/>بيانات الفنادق</h2><p><b>0</b> فندق في الموقع. الدليل مفيهوش فنادق أو حجوزات دلوقتي، وأي إضافة محتاجة مصدر وموافقة منك.</p></div></section>
 </>
}
const Chip=({ok,yes,no}:{ok:boolean;yes:string;no:string})=><span className={'adm-chip '+(ok?'ok':'warn')}>{ok?<Check size={13}/>:<AlertTriangle size={13}/>}{ok?yes:no}</span>;
function Mock({t}:{t:Theme}){return <div className="adm-mock" style={vars(t)} aria-hidden="true"><div className="mock-head"><b dir="ltr">egypti</b><i/><i/><i/></div><div className="mock-hero"><img src="/photos/giza-420.webp" alt=""/><div className="mock-hero-t"><b>مصر واسعة</b><span>خد وقتك</span></div></div><div className="mock-row"><div className="mock-card"><img src="/photos/aswan-420.webp" alt=""/><b>أسوان</b><span>النيل على مهلك</span></div><div className="mock-card"><img src="/photos/dahab-420.webp" alt=""/><b>دهب</b><span>بحر وجبل</span></div></div><div className="mock-foot"><span className="mock-btn">اكتشف</span><span className="mock-tag">محفوظ</span></div></div>}
function Themes({theme,siteTheme,pickAdmin,pickSite}:{theme:string;siteTheme:string;pickAdmin:(id:string)=>void;pickSite:(id:string)=>void}){
 const[target,setTarget]=useState<'admin'|'site'>('admin'),[hover,setHover]=useState<string|null>(null);
 const current=target==='admin'?theme:siteTheme,shown=themeById(hover||current),pick=target==='admin'?pickAdmin:pickSite;
 const random=()=>{const pool=themes.filter(t=>t.id!==current);pick(pool[Math.floor(Math.random()*pool.length)].id)};
 return <>
  <Head eyebrow="الثيمات" title={themes.length+' ثيم'} text="اختار ثيم لللوحة، وثيم للموقع. الاختيار بيتحفظ على الجهاز ده."><button className="adm-btn ghost" onClick={random}><Shuffle size={16}/>اختار لي واحد</button></Head>
  <div className="adm-seg adm-target" role="group" aria-label="الهدف"><button aria-pressed={target==='admin'} onClick={()=>setTarget('admin')}>ثيم اللوحة</button><button aria-pressed={target==='site'} onClick={()=>setTarget('site')}>ثيم الموقع</button></div>
  <div className="adm-theme-layout">
   <section className="adm-preview"><Mock t={shown}/><div className="adm-preview-meta"><b>{shown.ar}</b><span>{shown.en} · {shown.dark?'غامق':'فاتح'} · {shown.mood}</span>{target==='site'&&<a className="adm-link" href="/ar/" target="_blank" rel="noreferrer">افتح الموقع بالثيم ده<ArrowUpRight size={15}/></a>}<small>{target==='admin'?'اللوحة بتتغير فورًا.':'الموقع هيفتح بالثيم ده على جهازك. باقي الزوار بيختاروا لنفسهم.'}</small></div></section>
   <section className="adm-theme-grid" aria-label="الثيمات">{themes.map(t=><button key={t.id} className="adm-theme" style={vars(t)} aria-pressed={current===t.id} onClick={()=>pick(t.id)} onMouseEnter={()=>setHover(t.id)} onMouseLeave={()=>setHover(null)} onFocus={()=>setHover(t.id)} onBlur={()=>setHover(null)}><span className="adm-theme-sw"><i style={{background:t.page}}/><i style={{background:t.paper}}/><i style={{background:t.accent}}/><i style={{background:t.sun}}/><i style={{background:t.deep}}/></span><b>{t.ar}</b><small>{t.en}</small>{current===t.id&&<span className="adm-theme-on"><Check size={14}/></span>}</button>)}</section>
  </div>
 </>
}
function Health({data,refresh}:{data:Overview;refresh:()=>void}){
 const h=data.health,[ping,setPing]=useState<null|boolean>(null);
 useEffect(()=>{fetch('/api/health').then(r=>setPing(r.ok)).catch(()=>setPing(false))},[]);
 const rows:[string,boolean|null,string][]=[['خدمة الـ API',ping,'/api/health بترد'],['قاعدة البيانات (D1)',h.database,'الاستعلام اشتغل'],['تسجيل الدخول بجوجل',h.google,h.google?'متضبط':'ناقص مفتاح أو سر'],['سر الجلسات',h.authSecret,h.authSecret?'موجود':'ناقص'],['صفحات الموقع',h.assets,h.assets?'بتفتح':'ما فتحتش'],['حسابات الأدمن',h.adminCount>0,h.adminCount+' حساب في الإعدادات'],['عنوان الموقع',h.origin.startsWith('https://'),h.origin]];
 return <>
  <Head eyebrow="الفحص" title="حالة الموقع"><button className="adm-btn ghost" onClick={refresh}><RefreshCw size={16}/>افحص تاني</button></Head>
  <section className="adm-card"><ul className="adm-health">{rows.map(([n,ok,note])=><li key={n} className={ok===null?'':ok?'ok':'bad'}><span className="adm-dot">{ok===null?'…':ok?<Check size={15}/>:<AlertTriangle size={15}/>}</span><b>{n}</b><span dir="auto">{note}</span></li>)}</ul></section>
 </>
}
function Links(){
 const L:[string,string,string,string][]=[['الموقع (عربي)','/ar/','/photos/giza-420.webp','الصفحة الرئيسية'],['الموقع (English)','/en/','/photos/alexandria-420.webp','Home page'],['اكتشف','/ar/explore/','/photos/luxor-420.webp','كل الأماكن'],['خطط الرحلات','/ar/trips/','/photos/aswan-420.webp','برامج جاهزة'],['جولات افتراضية','/ar/virtual-tours/','/photos/dahab-420.webp','عرض من مصادرها'],['المصادر والصور','/ar/about/','/photos/hurghada-420.webp','التراخيص والتقديرات'],['فحص الـ API','/api/health','/photos/giza-420.webp','JSON'],['الكود على GitHub','https://github.com/alhinawi/egypt-travel-guide','/photos/luxor-420.webp','المستودع']];
 return <><Head eyebrow="روابط سريعة" title="الوصول السريع"/><section className="adm-links">{L.map(([n,u,ph,d])=><a key={u} className="adm-linkcard" href={u} target="_blank" rel="noreferrer"><img src={ph} alt="" loading="lazy"/><div><b>{n}</b><small>{d}</small></div><ArrowUpRight size={18}/></a>)}</section></>
}
