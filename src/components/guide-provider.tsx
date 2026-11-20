'use client';
import{createContext,useContext,useEffect,useRef,useState,useCallback}from'react';
import{toastClasses,toastDismissClasses,toastReloadClasses}from'./toast-styles';
import{usePathname}from'next/navigation';
import type{Lang}from'@/lib/data';
type User={id:string;name:string;email:string;picture:string|null};
type State={lang:Lang;user:User|null;admin:boolean;google:boolean|null;ready:boolean;saved:string[];message:string;setMessage:(s:string)=>void;toggleSave:(id:string)=>void;logout:()=>Promise<void>};
const Context=createContext<State|null>(null);
export const t=(lang:Lang,ar:string,en:string)=>lang==='ar'?ar:en;
export function GuideProvider({children,lang:explicit}:{children:React.ReactNode;lang?:Lang}){
 const[lang,setLang]=useState<Lang>(explicit||'ar'),[user,setUser]=useState<User|null>(null),[admin,setAdmin]=useState(false),[google,setGoogle]=useState<boolean|null>(null),[ready,setReady]=useState(false),[saved,setSaved]=useState<string[]>([]),[message,setMessage]=useState(''),[storageFailed,setStorageFailed]=useState(false),[accountReadFailed,setAccountReadFailed]=useState(false);
 const savedRef=useRef<string[]>([]),queue=useRef(Promise.resolve()),accountLoaded=useRef(true);
 const pathname=usePathname();
 useEffect(()=>{document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr'},[lang]);
 useEffect(()=>{
  let cancelled=false;
  async function init(){
   let local:string[]=[];try{const value=JSON.parse(localStorage.getItem('egypt:saved')||'[]');if(Array.isArray(value))local=value.filter((x:unknown)=>typeof x==='string').slice(0,100)}catch{}
   setSaved(local);savedRef.current=local;
   if(explicit){setLang(explicit);try{localStorage.setItem('egypt:lang',explicit)}catch{}}
   try{
    const[configRes,meRes]=await Promise.all([fetch('/api/config'),fetch('/api/me')]);
    const config=configRes.ok?await configRes.json():null,me=meRes.ok?await meRes.json():null;
    if(cancelled)return;setGoogle(Boolean(config?.google));setUser(me?.user||null);setAdmin(Boolean(me?.admin));try{if(me?.admin&&sessionStorage.getItem('egypti:to-admin')){sessionStorage.removeItem('egypti:to-admin');window.location.replace('/admin/');return}}catch{}
    if(!explicit){
     let preferred:string|null=null;try{preferred=localStorage.getItem('egypt:lang')}catch{}
     const browser=navigator.languages?.find(x=>/^ar\b|^en\b/i.test(x));
     const pick=preferred==='ar'||preferred==='en'?preferred:browser?.toLowerCase().startsWith('ar')?'ar':browser?'en':config?.country==='EG'?'ar':'en';
     window.location.replace('/'+pick+'/');return;
    }
    if(me?.user){
     let accountLocal:string[]=[];try{accountLocal=JSON.parse(localStorage.getItem('egypt:saved:user:'+me.user.id)||'[]');if(!Array.isArray(accountLocal))accountLocal=[]}catch{}
     accountLoaded.current=false;let data:{items:string[]};try{const res=await fetch('/api/saved');if(!res.ok)throw Error();data=await res.json();if(!Array.isArray(data.items)||data.items.some(x=>typeof x!=='string'))throw Error()}catch{setAccountReadFailed(true);return}if(cancelled)return;accountLoaded.current=true;setAccountReadFailed(false);{const merged=Array.from(new Set<string>([...data.items,...accountLocal,...local])).slice(0,100);setSaved(merged);savedRef.current=merged;try{localStorage.setItem('egypt:saved:user:'+me.user.id,JSON.stringify(merged));localStorage.removeItem('egypt:saved')}catch{};if([...local,...accountLocal].some(x=>!data.items.includes(x))){const sync=await fetch('/api/saved',{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify({items:merged})});if(!sync.ok)setMessage(t(explicit||'ar','المحفوظات موجودة على جهازك، لكن المزامنة ما اكتملتش.','Your items are on this device, but sync did not complete.'))}}
    }
   }catch{setGoogle(false);if(!explicit){const b=navigator.language.toLowerCase().startsWith('ar')?'ar':'en';window.location.replace('/'+b+'/');return}}
   finally{if(!cancelled)setReady(true)}
  }
  init();return()=>{cancelled=true};
 },[explicit]);
 useEffect(()=>{if(new URLSearchParams(location.search).get('auth')==='failed')setMessage(t(lang,'الدخول ما اكتملش. جرّب تاني، أو كمل التصفح من غير حساب.','Sign-in did not complete. Try again, or keep browsing as a guest.'));},[lang]);
 useEffect(()=>{if(!message)return;const timer=setTimeout(()=>setMessage(''),6000);return()=>clearTimeout(timer)},[message]);
 const toggleSave=useCallback((id:string)=>{
  if(!accountLoaded.current)return;
  const next=savedRef.current.includes(id)?savedRef.current.filter(x=>x!==id):[...savedRef.current,id];
  if(next.length>100){setMessage(t(lang,'تقدر تحفظ لحد 100 مكان وخطة.','You can save up to 100 places and plans.'));return}
  savedRef.current=next;setSaved(next);try{localStorage.setItem(user?'egypt:saved:user:'+user.id:'egypt:saved',JSON.stringify(next));setStorageFailed(false)}catch{setStorageFailed(true)}
  if(user){queue.current=queue.current.then(async()=>{try{const res=await fetch('/api/saved',{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify({items:next})});if(!res.ok)throw Error();}catch{setMessage(t(lang,'التغييرات لسه ما اتزامنتش. هنحاول لما الاتصال يرجع أو الصفحة تتحمّل تاني.','Your changes have not synced. We’ll retry when you reconnect or reload.'))}})}
 },[user,lang]);
 useEffect(()=>{const retry=()=>{if(!user||!accountLoaded.current)return;queue.current=queue.current.then(async()=>{try{const res=await fetch('/api/saved',{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify({items:savedRef.current})});if(!res.ok)throw Error();setMessage(t(lang,'المحفوظات اتزامنت.','Your saved items are synced.'))}catch{setMessage(t(lang,'المزامنة ما اكتملتش. لو نسخة الجهاز ما اتحفظتش، إعادة التحميل ممكن تضيّع تغييراتك.','Sync did not complete. Reloading may lose changes if the device copy could not be stored.'))}})};window.addEventListener('online',retry);return()=>window.removeEventListener('online',retry)},[user,lang]);
 const logout=async()=>{try{const r=await fetch('/api/auth/logout',{method:'POST',headers:{'Content-Type':'application/json'},body:'{}'});if(!r.ok)throw Error();setUser(null);setAdmin(false);accountLoaded.current=true;setAccountReadFailed(false);setSaved([]);savedRef.current=[];setMessage(t(lang,'تم تسجيل الخروج. محفوظات الحساب هترجع لما تدخل تاني.','Signed out. Your account saves will return when you sign in again.'))}catch{setMessage(t(lang,'الخروج ما تمش. جرّب تاني.','Could not sign out. Please try again.'))}};
 return <Context.Provider value={{lang,user,admin,google,ready:ready&&!accountReadFailed,saved,message,setMessage,toggleSave,logout}}>{children}{accountReadFailed&&<div className={`${toastClasses} account-saves-warning`} role="alert">{t(lang,'محفوظات الحساب ما اتحمّلتش. وقفنا تعديلها والمزامنة عشان ما نستبدلش نسخة ما شفناهاش. جرّب تحميل الصفحة تاني.','Account saves could not load. Editing and sync are paused to avoid replacing a list we could not read. Reload to try again.')}<button className={toastReloadClasses} onClick={()=>location.reload()}>{t(lang,'حمّل تاني','Reload')}</button></div>}{storageFailed&&<div className={`${toastClasses} save-storage-warning`} role="alert">{t(lang,'نسخة المحفوظات على الجهاز ما اتحفظتش. تغييرات لسه ما اتزامنتش ممكن تضيع لو قفلت أو حمّلت الصفحة تاني.','Could not store a copy of your saved items on this device. Unsynced changes may be lost if you leave or reload.')}</div>}{message&&<div className={toastClasses} role="status">{message}<button className={toastDismissClasses} onClick={()=>setMessage('')} aria-label={t(lang,'إغلاق','Dismiss')}>×</button></div>}</Context.Provider>
}
export const useGuide=()=>{const s=useContext(Context);if(!s)throw Error('GuideProvider required');return s};
