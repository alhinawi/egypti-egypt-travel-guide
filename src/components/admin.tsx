'use client';
import{createContext,useContext,useCallback,useEffect,useMemo,useRef,useState}from'react';
import{ShieldCheck,LogOut,ArrowUpRight,Palette,MapPin,Users,Bookmark,Activity,Link2,Check,AlertTriangle,Search,Shuffle,Hotel,Camera,Scan,RefreshCw,Trash2,Download,Undo2}from'lucide-react';
import{places,destinations,itineraries,categoryNames,checkedAt}from'@/lib/data';
import{placePhotos,photoPath}from'@/lib/photos';
import{mediaStatus}from'@/lib/media-status';
import maps from'@/lib/maps.json';
import{governorates,placeIndex,governorateById}from'@/lib/encyclopedia';
import{catalogCoverage,governorateCoverage}from'@/lib/catalog-coverage';
import hotelData from'@/lib/hotels.json';
const hotelCount=new Set(Object.values(hotelData.places).flatMap(x=>x.hotels.map(h=>h.wikidata_id))).size;
import{themes,isTheme,SITE_KEY,ADMIN_KEY,DEFAULT_THEME,type Theme}from'@/lib/themes';
import'../app/admin.css';
import adminCopy from '@/lib/admin-copy.json';
const AdminLanguage=createContext<'ar'|'en'>('ar');
function useAdminCopy(){const lang=useContext(AdminLanguage);return Object.assign((text:string)=>lang==='en'?(adminCopy as Record<string,string>)[text]||text:text,{lang})}
export function Admin(){const[lang,setLang]=useState<'ar'|'en'>('ar');useEffect(()=>{document.title=(lang==='ar'?'لوحة التحكم':'Dashboard')+' | egypti'},[lang]);useEffect(()=>{try{const saved=new URLSearchParams(location.search).get('lang')||localStorage.getItem('egypti:admin-language');if(saved==='en')setLang('en')}catch{}},[]);const toggle=()=>{const next=lang==='ar'?'en':'ar';setLang(next);try{localStorage.setItem('egypti:admin-language',next)}catch{}const url=new URL(location.href);url.searchParams.set('lang',next);history.replaceState(null,'',url)};return <AdminLanguage.Provider value={lang}><AdminContent toggleLanguage={toggle}/></AdminLanguage.Provider>}

type User={id:string;name:string;email:string;picture:string|null};
type Overview={demo?:{enabled:boolean;count:number};counts:{users:number;newUsers:number;sessions:number;saves:number;savers:number};topSaved:{item_id:string;n:number}[];recentUsers:{name:string;email:string;createdAt:number}[];health:{database:boolean;google:boolean;authSecret:boolean;origin:string;adminCount:number;assets:boolean};generatedAt:number};
type Gate='loading'|'anon'|'denied'|'ok'|'error';
const day=(ms:number)=>new Date(ms).toISOString().slice(0,10);
const destPhoto=(id:string)=>'/photos/'+(destinations.find(d=>d.id===id)?.photo||'giza')+'-420.webp';
const themeById=(id:string)=>themes.find(t=>t.id===id)||themes[0];
const vars=(t:Theme)=>({'--page':t.page,'--paper':t.paper,'--ink':t.ink,'--muted':t.muted,'--accent':t.accent,'--tint':t.tint,'--line':t.line,'--sun':t.sun,'--deep':t.deep}) as React.CSSProperties;
const read=(k:string,d:string)=>{try{const v=localStorage.getItem(k);return isTheme(v)?v:d}catch{return d}};
const label=(id:string,lang:'ar'|'en'='ar')=>{const[k,v]=id.split(':');if(k==='place'){const p=places.find(x=>x.id===v);return p?p.name[lang]:id}const t=itineraries.find(x=>x.id===v);return t?t.title[lang]:id};
function AdminContent({toggleLanguage}:{toggleLanguage:()=>void}){
 const copy=useAdminCopy();
 const[gate,setGate]=useState<Gate>('loading'),[user,setUser]=useState<User|null>(null),[data,setData]=useState<Overview|null>(null),[theme,setTheme]=useState('cairo-night'),[siteTheme,setSiteTheme]=useState(DEFAULT_THEME),[loadErr,setLoadErr]=useState(false);
 useEffect(()=>{setTheme(read(ADMIN_KEY,'cairo-night'));setSiteTheme(read(SITE_KEY,DEFAULT_THEME))},[]);
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
 return <div className="adm" data-theme={theme} lang={copy.lang} dir={copy.lang==='ar'?'rtl':'ltr'}>
  <button className="adm-language" onClick={toggleLanguage} aria-label={copy.lang==='ar'?'Switch to English':'التبديل للعربية'}>{copy.lang==='ar'?'EN':'عربي'}</button>
  {gate==='loading'&&<Center title={copy("بنجهّز اللوحة…")} text={copy("لحظة واحدة.")}/>}
  {gate==='error'&&<Center title={copy("اللوحة ما فتحتش")} text={copy("في مشكلة في الاتصال. جرّب تاني.")} action={<button className="adm-btn" onClick={()=>{setGate('loading');load()}}><RefreshCw size={16}/>{copy("جرّب تاني")}</button>}/>}
  {gate==='anon'&&<Center title={copy("لوحة التحكم")} text={copy("الصفحة دي للأدمن بس. ادخل بحساب Google بتاعك.")} action={<a className="adm-btn" href="/api/auth/google/start" onClick={()=>{try{sessionStorage.setItem('egypti:to-admin','1')}catch{}}}><img src="/google-signin-icon.svg" alt="" width="22" height="22"/>{copy("الدخول بحساب Google")}</a>}/>}
  {gate==='denied'&&<Center title={copy("مش متاح للحساب ده")} text={copy("الصفحة دي للأدمن بس. إنت داخل بحساب ")+(user?.email||'')+'.'} action={<><a className="adm-btn" href="/">{copy("ارجع للموقع")}</a><button className="adm-btn ghost" onClick={logout}><LogOut size={16}/>{copy("تسجيل الخروج")}</button></>} ltrText/>}
  {gate==='ok'&&user&&data&&<Dashboard user={user} data={data} theme={theme} siteTheme={siteTheme} pickAdmin={pickAdmin} pickSite={pickSite} logout={logout} refresh={load}/>}
 </div>
}
function Center({title,text,action,ltrText}:{title:string;text:string;action?:React.ReactNode;ltrText?:boolean}){
 const copy=useAdminCopy();return <div className="adm-center"><div className="adm-gate"><img className="adm-gate-photo" src="/photos/giza-780.webp" alt="" width="780" height="520"/><div className="adm-gate-body"><span className="adm-emblem"><ShieldCheck size={26}/></span><h1>{title}</h1><p dir={ltrText?'auto':undefined}>{text}</p><div className="adm-actions">{action}</div></div></div></div>}
function Dashboard({user,data,theme,siteTheme,pickAdmin,pickSite,logout,refresh}:{user:User;data:Overview;theme:string;siteTheme:string;pickAdmin:(id:string)=>void;pickSite:(id:string)=>void;logout:()=>void;refresh:()=>void}){
 const copy=useAdminCopy();
 const tabs=[['overview',copy("نظرة عامة"),Activity],['places',copy("الأماكن"),MapPin],['coverage',copy.lang==='ar'?'التغطية':'Coverage',Camera],['themes',copy("الثيمات"),Palette],['health',copy("الفحص"),ShieldCheck],['links',copy("روابط سريعة"),Link2]] as const;
 const[tab,setTab]=useState<string>('overview');
 useEffect(()=>{const h=location.hash.slice(1);if(tabs.some(t=>t[0]===h))setTab(h)},[]);
 const go=(id:string)=>{setTab(id);history.replaceState(null,'','#'+id);window.scrollTo({top:0})};
 return <>
  <header className="adm-top"><div className="adm-top-in"><div className="adm-brand"><span dir="ltr">egypti</span><small>{copy("لوحة التحكم")}</small></div><nav className="adm-tabs" aria-label={copy("أقسام اللوحة")}>{tabs.map(([id,name,Icon])=><button key={id} onClick={()=>go(id)} aria-current={tab===id?'page':undefined}><Icon size={17}/><span>{name}</span></button>)}</nav><div className="adm-user">{user.picture?<img src={user.picture} alt="" width="36" height="36" referrerPolicy="no-referrer"/>:<span className="adm-avatar">{user.name.slice(0,1)}</span>}<button className="adm-icon" onClick={logout} aria-label={copy("تسجيل الخروج")} title={copy("تسجيل الخروج")}><LogOut size={18}/></button></div></div></header>
  <main className="adm-main">
   {tab==='overview'&&<Overview data={data} user={user} refresh={refresh}/>}
   {tab==='places'&&<Places/>}{tab==='coverage'&&<Coverage/>}
   {tab==='themes'&&<Themes theme={theme} siteTheme={siteTheme} pickAdmin={pickAdmin} pickSite={pickSite}/>}
   {tab==='health'&&<Health data={data} refresh={refresh}/>}
   {tab==='links'&&<Links/>}
  </main>
 </>
}
function Head({eyebrow,title,text,children}:{eyebrow:string;title:string;text?:string;children?:React.ReactNode}){
 const copy=useAdminCopy();return <div className="adm-head"><div><span className="adm-eyebrow">{eyebrow}</span><h1>{title}</h1>{text&&<p>{text}</p>}</div>{children}</div>}
function Stat({photo,n,label,note}:{photo:string;n:number;label:string;note?:string}){
 const copy=useAdminCopy();return <article className="adm-stat"><img src={photo} alt="" width="120" height="120" loading="lazy"/><div><b>{n}</b><span>{label}</span>{note&&<small>{note}</small>}</div></article>}
function Overview({data,user,refresh}:{data:Overview;user:User;refresh:()=>void}){
 const copy=useAdminCopy();
 const c=data.counts,ready=mediaStatus.filter(m=>m.state==='qualifies').length,photos=mediaStatus.filter(m=>m.photo).length,pins=places.filter(p=>(maps as Record<string,unknown>)[p.id]).length;
 return <>
  <Head eyebrow={copy("أهلًا ")+user.name.split(' ')[0]} title={copy("الموقع النهارده")} text={copy("آخر تحديث ")+new Date(data.generatedAt).toISOString().slice(11,16)+copy(" UTC. البيانات من الحسابات والمحفوظات الحقيقية.")}><button className="adm-btn ghost" onClick={refresh}><RefreshCw size={16}/>{copy("تحديث")}</button></Head>
  <section className="adm-grid4" aria-label={copy("الأرقام")}>
   <Stat photo="/photos/giza-420.webp" n={c.users} label={copy("حسابات")} note={c.newUsers+copy(" جديد في 7 أيام")}/>
   <Stat photo="/photos/luxor-420.webp" n={c.sessions} label={copy("جلسات شغالة")}/>
   <Stat photo="/photos/alexandria-420.webp" n={c.saves} label={copy("عناصر محفوظة")} note={c.savers+copy(" حساب بيحفظ")}/>
   <Stat photo="/photos/dahab-420.webp" n={places.length} label={copy("مكان في الدليل")} note={destinations.length+copy(" وجهات · ")+itineraries.length+copy(" خطط")}/>
  </section>
  <div className="adm-cols">
   <section className="adm-card"><h2><Bookmark size={19}/>{copy("الأكتر حفظًا")}</h2>{data.topSaved.length?<ol className="adm-rank">{data.topSaved.map((r,i)=><li key={r.item_id}><span>{i+1}</span><b>{label(r.item_id,copy.lang)}</b><em>{r.n}</em></li>)}</ol>:<p className="adm-empty">{copy("لسه محدش حفظ حاجة.")}</p>}</section>
   <section className="adm-card"><h2><Users size={19}/>{copy("آخر المسجّلين")}</h2>{data.recentUsers.length?<ul className="adm-list">{data.recentUsers.map((u,i)=><li key={i}><b>{u.name}</b><span dir="ltr">{u.email}</span><small>{day(u.createdAt)}</small></li>)}</ul>:<p className="adm-empty">{copy("مفيش حسابات لسه.")}</p>}<p className="adm-fine">{copy("الإيميلات مخفية جزئيًا.")}</p></section>
  </div>
  <section className="adm-grid3">
   <article className="adm-card adm-media"><img src="/photos/aswan-780.webp" alt="" loading="lazy"/><div><h2><Camera size={19}/>{copy("الصور")}</h2><p><b>{photos}</b>{' '}{copy("من")}{' '}{places.length}{' '}{copy("مكان ليه صورة.")}</p></div></article>
   <article className="adm-card adm-media"><img src="/photos/hurghada-780.webp" alt="" loading="lazy"/><div><h2><Scan size={19}/>{copy("جولات افتراضية")}</h2><p><b>{ready}</b>{copy("مكان جاهز (صورة وجولة داخلية متأكد منها).")}</p></div></article>
   <article className="adm-card adm-media"><img src="/photos/dahab-780.webp" alt="" loading="lazy"/><div><h2><MapPin size={19}/>{copy("دبابيس الخرائط")}</h2><p><b>{pins}</b>{copy("مكان بدبوس متأكد منه.")}</p></div></article>
  </section>
  {data.demo&&<DemoCard demo={data.demo} refresh={refresh}/>}
 </>
}
const postJson=async(url:string,body:unknown)=>{const r=await fetch(url,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});let j:{error?:string}={};try{j=await r.json()}catch{}return{ok:r.ok,error:j.error}};
function DemoCard({demo,refresh}:{demo:{enabled:boolean;count:number};refresh:()=>void}){
 const copy=useAdminCopy();
 const[open,setOpen]=useState(false),[token,setToken]=useState(''),[word,setWord]=useState(''),[busy,setBusy]=useState(false),[msg,setMsg]=useState(''),ref=useRef<HTMLDialogElement>(null);
 useEffect(()=>{const el=ref.current;if(!el)return;if(open&&!el.open)el.showModal();if(!open&&el.open)el.close()},[open]);
 const download=async()=>{setBusy(true);setMsg('');try{const r=await fetch('/api/admin/demo/export');if(!r.ok)throw Error();const j=await r.json();const blob=new Blob([JSON.stringify(j.backup,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='egypti-demo-backup-'+new Date().toISOString().slice(0,10)+'.json';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),4000);setToken(j.backupToken);setMsg(copy("النسخة الاحتياطية اتنزّلت."))}catch{setMsg(copy("النسخة ما اتنزّلتش. جرّب تاني."))}setBusy(false)};
 const remove=async()=>{setBusy(true);const r=await postJson('/api/admin/demo/remove',{confirm:'REMOVE_DEMO',backupToken:token});setBusy(false);if(r.ok){setOpen(false);setToken('');setWord('');refresh()}else setMsg(r.error==='Settings storage is not ready yet'?copy("التخزين لسه مش جاهز. جرّب بعد شوية."):copy("ما اتمسحش. نزّل النسخة الاحتياطية تاني وجرّب."))};
 const restore=async()=>{setBusy(true);const r=await postJson('/api/admin/demo/restore',{});setBusy(false);if(r.ok)refresh();else setMsg(copy("الرجوع ما تمّش. جرّب تاني."))};
 const close=()=>{setOpen(false);setMsg('');setWord('')};
 return <section className="adm-card adm-demo"><img src="/photos/luxor-780.webp" alt="" loading="lazy"/><div><h2><Trash2 size={19}/>{copy("البيانات التجريبية")}</h2><p>{demo.enabled?(demo.count+copy(" دليل تجريبي ظاهر في الموقع دلوقتي. لو مسحتهم بيختفوا من الموقع كله، وحساباتك ومحفوظاتك الحقيقية ما بتتأثرش.")):copy("البيانات التجريبية مخفية من الموقع. تقدر ترجّعها في أي وقت.")}</p>{msg&&!open&&<p className="adm-fine" role="status">{msg}</p>}<div className="adm-actions">{demo.enabled?<button className="adm-btn" onClick={()=>setOpen(true)}><Trash2 size={16}/>{copy("امسح البيانات التجريبية")}</button>:<button className="adm-btn" disabled={busy} onClick={restore}><Undo2 size={16}/>{copy("رجّع البيانات التجريبية")}</button>}</div></div>
  <dialog ref={ref} className="adm-dialog" onCancel={close} onClose={()=>setOpen(false)} aria-labelledby="demo-dlg-t"><h2 id="demo-dlg-t">{copy("مسح البيانات التجريبية؟")}</h2><p>{copy("الأدلة التجريبية هتختفي من الموقع للكل. الحسابات والمحفوظات والجلسات الحقيقية ما بتتلمسش، وتقدر ترجّع التجريبي بعد كده.")}</p><ol className="adm-steps"><li><b>{copy("1. نزّل نسخة احتياطية")}</b><button className="adm-btn ghost" disabled={busy} onClick={download}><Download size={16}/>{copy("نزّل النسخة")}</button>{token&&<span className="adm-ok"><Check size={14}/>{copy("اتنزّلت")}</span>}</li><li><b>{copy("2. اكتب كلمة «امسح» للتأكيد")}</b><input value={word} onChange={e=>setWord(e.target.value)} aria-label={copy("اكتب امسح")} autoComplete="off"/></li></ol>{msg&&<p className="adm-fine" role="status">{msg}</p>}<div className="adm-actions"><button className="adm-btn" disabled={busy||!token||word.trim()!==copy("امسح")} onClick={remove}>{copy("امسح دلوقتي")}</button><button className="adm-btn ghost" onClick={close}>{copy("إلغاء")}</button></div></dialog></section>
}
function Places(){
 const copy=useAdminCopy();
 const[q,setQ]=useState(''),[dest,setDest]=useState('all'),[st,setSt]=useState<'all'|'ready'|'pending'>('all');
 const rows=useMemo(()=>places.map(p=>{const m=mediaStatus.find(x=>x.id===p.id)!;const ph=placePhotos[p.id];return{p,m,ph,pin:Boolean((maps as Record<string,unknown>)[p.id]),ticket:Boolean(p.ticket)}}),[]);
 const shown=rows.filter(r=>(dest==='all'||placeIndex[r.p.id]?.governorate===dest)&&(st==='all'||(st==='ready')===(r.m.state==='qualifies'))&&(!q||(r.p.name.ar+' '+r.p.name.en+' '+r.p.id).toLowerCase().includes(q.toLowerCase())));
 return <>
  <Head eyebrow={copy("الأماكن")} title={places.length+copy(" مكان في الدليل")} text={copy("عرض للقراءة بس. البيانات جوه كود الموقع، فالتعديل بيتم بـ PR. آخر مراجعة ")+checkedAt+'.'}/>
  <div className="adm-filters"><label className="adm-search"><Search size={17}/><input value={q} onChange={e=>setQ(e.target.value)} placeholder={copy("دوّر على مكان")} aria-label={copy("بحث")}/></label><select value={dest} onChange={e=>setDest(e.target.value)} aria-label={copy.lang==='ar'?'المحافظة':'Governorate'}><option value="all">{copy.lang==='ar'?'كل المحافظات':'All governorates'}</option>{governorates.map(d=><option key={d.id} value={d.id}>{d.name[copy.lang]}</option>)}</select><div className="adm-seg" role="group" aria-label={copy("الحالة")}>{([['all',copy("الكل")],['ready',copy.lang==='ar'?'بجولة داخلية':'Interior tour'],['pending',copy.lang==='ar'?'بدون جولة':'No interior tour']] as const).map(([k,n])=><button key={k} aria-pressed={st===k} onClick={()=>setSt(k)}>{n}</button>)}</div><span className="adm-count">{shown.length}{' '}{copy("نتيجة")}</span></div>
  <div className="adm-places">{shown.map(({p,m,ph,pin,ticket})=><article key={p.id} className="adm-place"><img src={ph?photoPath(ph,420):destPhoto(p.destination)} alt="" width="420" height="280" loading="lazy"/><div className="adm-place-body"><h3>{p.name[copy.lang]}</h3><small>{governorateById(placeIndex[p.id]?.governorate)?.name[copy.lang]} · {categoryNames[p.category][copy.lang]}</small><div className="adm-chips"><Chip ok={m.photo} yes={copy("صورة")} no={copy("بدون صورة")}/><Chip ok={m.interiorEmbed} yes={copy("جولة داخلية")} no={copy("بدون جولة")}/><Chip ok={pin} yes={copy("دبوس")} no={copy("بدون دبوس")}/>{ticket&&<span className="adm-chip ok">{copy("تذاكر")}</span>}</div><a className="adm-link" href={'/'+copy.lang+'/places/'+p.id+'/'} target="_blank" rel="noreferrer">{copy("افتح الصفحة")}<ArrowUpRight size={15}/></a></div></article>)}{!shown.length&&<p className="adm-empty">{copy("مفيش أماكن بالشكل ده.")}</p>}</div>
  <section className="adm-card adm-hotels"><img src="/photos/luxor-780.webp" alt="" loading="lazy"/><div><h2><Hotel size={19}/>{copy("بيانات الفنادق")}</h2><p><b>{hotelCount}</b>{copy("فندق في دليل الإقامة، موزّعين على صفحات الأماكن. المسافات خط مستقيم وليست طرق وصول. لا أسعار أو حجز أو دفع؛ مصادر البيانات وحقوق الصور مع كل فندق.")}</p></div></section>
 </>
}
const Chip=({ok,yes,no}:{ok:boolean;yes:string;no:string})=><span className={'adm-chip '+(ok?'ok':'warn')}>{ok?<Check size={13}/>:<AlertTriangle size={13}/>}{ok?yes:no}</span>;
function Mock({t}:{t:Theme}){
 const copy=useAdminCopy();return <div className="adm-mock" style={vars(t)} aria-hidden="true"><div className="mock-head"><b dir="ltr">egypti</b><i/><i/><i/></div><div className="mock-hero"><img src="/photos/giza-420.webp" alt=""/><div className="mock-hero-t"><b>{copy("مصر واسعة")}</b><span>{copy("خد وقتك")}</span></div></div><div className="mock-row"><div className="mock-card"><img src="/photos/aswan-420.webp" alt=""/><b>{copy("أسوان")}</b><span>{copy("النيل على مهلك")}</span></div><div className="mock-card"><img src="/photos/dahab-420.webp" alt=""/><b>{copy("دهب")}</b><span>{copy("بحر وجبل")}</span></div></div><div className="mock-foot"><span className="mock-btn">{copy("اكتشف")}</span><span className="mock-tag">{copy("محفوظ")}</span></div></div>}
function Themes({theme,siteTheme,pickAdmin,pickSite}:{theme:string;siteTheme:string;pickAdmin:(id:string)=>void;pickSite:(id:string)=>void}){
 const copy=useAdminCopy();
 const[target,setTarget]=useState<'admin'|'site'>('admin'),[hover,setHover]=useState<string|null>(null);
 const current=target==='admin'?theme:siteTheme,shown=themeById(hover||current),pick=target==='admin'?pickAdmin:pickSite;
 const random=()=>{const pool=themes.filter(t=>t.id!==current);pick(pool[Math.floor(Math.random()*pool.length)].id)};
 return <>
  <Head eyebrow={copy("الثيمات")} title={themes.length+copy(" ثيم")} text={copy("اختار ثيم لللوحة، وثيم للموقع. الاختيار بيتحفظ على الجهاز ده.")}><button className="adm-btn ghost" onClick={random}><Shuffle size={16}/>{copy("اختار لي واحد")}</button></Head>
  <div className="adm-seg adm-target" role="group" aria-label={copy("الهدف")}><button aria-pressed={target==='admin'} onClick={()=>setTarget('admin')}>{copy("ثيم اللوحة")}</button><button aria-pressed={target==='site'} onClick={()=>setTarget('site')}>{copy("ثيم الموقع")}</button></div>
  <div className="adm-theme-layout">
   <section className="adm-preview"><Mock t={shown}/><div className="adm-preview-meta"><b>{shown[copy.lang]}</b><span>{copy.lang==='ar'?shown.en:shown.ar} · {shown.dark?copy("غامق"):copy("فاتح")}{copy.lang==='ar'?' · '+shown.mood:''}</span>{target==='site'&&<a className="adm-link" href={'/'+copy.lang+'/'} target="_blank" rel="noreferrer">{copy("افتح الموقع بالثيم ده")}<ArrowUpRight size={15}/></a>}<small>{target==='admin'?copy("اللوحة بتتغير فورًا."):copy("الموقع هيفتح بالثيم ده على جهازك. باقي الزوار بيختاروا لنفسهم.")}</small></div></section>
   <section className="adm-theme-grid" aria-label={copy("الثيمات")}>{themes.map(t=><button key={t.id} className="adm-theme" style={vars(t)} aria-pressed={current===t.id} onClick={()=>pick(t.id)} onMouseEnter={()=>setHover(t.id)} onMouseLeave={()=>setHover(null)} onFocus={()=>setHover(t.id)} onBlur={()=>setHover(null)}><span className="adm-theme-sw"><i style={{background:t.page}}/><i style={{background:t.paper}}/><i style={{background:t.accent}}/><i style={{background:t.sun}}/><i style={{background:t.deep}}/></span><b>{t[copy.lang]}</b><small>{copy.lang==='ar'?t.en:t.ar}</small>{current===t.id&&<span className="adm-theme-on"><Check size={14}/></span>}</button>)}</section>
  </div>
 </>
}
function Health({data,refresh}:{data:Overview;refresh:()=>void}){
 const copy=useAdminCopy();
 const h=data.health,[ping,setPing]=useState<null|boolean>(null);
 useEffect(()=>{fetch('/api/health').then(r=>setPing(r.ok)).catch(()=>setPing(false))},[]);
 const rows:[string,boolean|null,string][]=[[copy("خدمة الـ API"),ping,copy("/api/health بترد")],[copy("قاعدة البيانات (D1)"),h.database,copy("الاستعلام اشتغل")],[copy("تسجيل الدخول بجوجل"),h.google,h.google?copy("متضبط"):copy("ناقص مفتاح أو سر")],[copy("سر الجلسات"),h.authSecret,h.authSecret?copy("موجود"):copy("ناقص")],[copy("صفحات الموقع"),h.assets,h.assets?copy("بتفتح"):copy("ما فتحتش")],[copy("حسابات الأدمن"),h.adminCount>0,h.adminCount+copy(" حساب في الإعدادات")],[copy("عنوان الموقع"),h.origin.startsWith('https://'),h.origin]];
 return <>
  <Head eyebrow={copy("الفحص")} title={copy("حالة الموقع")}><button className="adm-btn ghost" onClick={refresh}><RefreshCw size={16}/>{copy("افحص تاني")}</button></Head>
  <section className="adm-card"><ul className="adm-health">{rows.map(([n,ok,note])=><li key={n} className={ok===null?'':ok?'ok':'bad'}><span className="adm-dot">{ok===null?'…':ok?<Check size={15}/>:<AlertTriangle size={15}/>}</span><b>{n}</b><span dir="auto">{note}</span></li>)}</ul></section>
 </>
}
function Links(){
 const copy=useAdminCopy();
 const L:[string,string,string,string][]=[[copy("الموقع (عربي)"),'/ar/','/photos/giza-420.webp',copy("الصفحة الرئيسية")],[copy("الموقع (English)"),'/en/','/photos/alexandria-420.webp','Home page'],[copy("اكتشف"),'/ar/explore/','/photos/luxor-420.webp',copy("كل الأماكن")],[copy("خطط الرحلات"),'/ar/trips/','/photos/aswan-420.webp',copy("برامج جاهزة")],[copy("جولات افتراضية"),'/ar/virtual-tours/','/photos/dahab-420.webp',copy("عرض من مصادرها")],[copy("المصادر والصور"),'/ar/credits/','/photos/hurghada-420.webp',copy("التراخيص والتقديرات")],[copy("فحص الـ API"),'/api/health','/photos/giza-420.webp','JSON'],[copy("الكود على GitHub"),'https://github.com/alhinawi/egypt-travel-guide','/photos/luxor-420.webp',copy("المستودع")]];
 return <><Head eyebrow={copy("روابط سريعة")} title={copy("الوصول السريع")}/><section className="adm-links">{L.map(([n,u,ph,d])=><a key={u} className="adm-linkcard" href={u.startsWith('/ar/')&&u!=='/ar/'?u.replace('/ar/','/'+copy.lang+'/'):u} target="_blank" rel="noreferrer"><img src={ph} alt="" loading="lazy"/><div><b>{n}</b><small>{d}</small></div><ArrowUpRight size={18}/></a>)}</section></>
}

function Coverage(){
 const copy=useAdminCopy(),lang=copy.lang;
 const [q,setQ]=useState(''),[gaps,setGaps]=useState(false);
 const txt=(ar:string,en:string)=>lang==='ar'?ar:en;
 const visible=governorateCoverage.filter(x=>(!q||(x.governorate.name.ar+' '+x.governorate.name.en).toLowerCase().includes(q.toLowerCase()))&&(!gaps||x.histories<x.entries.length));
 return <><Head eyebrow={txt('الموسوعة','Encyclopedia')} title={txt('التغطية التحريرية','Editorial coverage')} text={txt('متابعة المقالات والصور في 27 محافظة. الجولة الداخلية إضافة اختيارية، مش شرط لاكتمال المقال.','Track articles and photos across all 27 governorates. An interior tour is optional and is not an editorial requirement.')}/><section className="adm-grid3 adm-coverage-stats"><Stat photo="/photos/giza-420.webp" n={catalogCoverage.length} label={txt('مقال منشور','Published entries')}/><Stat photo="/photos/aswan-420.webp" n={catalogCoverage.filter(x=>x.photo).length} label={txt('بصورة حقيقية','With a real photo')}/><Stat photo="/photos/luxor-420.webp" n={catalogCoverage.filter(x=>x.sections.includes('history')).length} label={txt('بحكاية باللغتين','With bilingual history')}/></section><div className="adm-filters"><label className="adm-search"><Search size={17}/><input type="search" value={q} onChange={e=>setQ(e.target.value)} aria-label={txt('بحث المحافظات','Search governorates')} placeholder={txt('اسم المحافظة','Governorate name')}/></label><button className="adm-btn ghost" aria-pressed={gaps} onClick={()=>setGaps(x=>!x)}>{txt('مقالات محتاجة تاريخ','Missing history sections')}</button><span role="status">{visible.length} / 27</span></div><section className="adm-coverage-grid">{visible.map(({governorate:g,entries,photos,histories})=><article className="adm-card" key={g.id}><h2>{g.name[lang]}</h2><div className="adm-coverage-numbers"><span><b>{entries.length}</b>{txt('مقالات','Entries')}</span><span><b>{photos}</b>{txt('صور','Photos')}</span><span><b>{histories}</b>{txt('تاريخ باللغتين','Bilingual history')}</span></div><ul className="adm-coverage-entries">{entries.map(e=><li key={e.place.id}><a href={'/'+lang+'/places/'+e.place.id+'/'} target="_blank" rel="noreferrer">{e.place.name[lang]}</a><small>{e.sections.length} / 7</small></li>)}</ul><a className="adm-link" href={'/'+lang+'/governorates/'+g.id+'/'} target="_blank" rel="noreferrer">{txt('افتح ملف المحافظة','Open governorate profile')}<ArrowUpRight size={15}/></a></article>)}</section><p className="adm-fine">{txt('العدد من 7 بيحسب الأقسام المكتوبة بالعربي والإنجليزي: التاريخ، المشاهدة، القريب، الشراء، الأكل، اللبس والطقس. البيانات دي عن المحتوى المنشور، مش مواعيد تشغيل الأماكن.','The score out of 7 counts sections written in both languages: history, sights, nearby, shopping, food, clothing and weather. These are editorial counts, not venue operating hours.')}</p></>;
}
