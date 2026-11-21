'use client';
import{useEffect,useRef,useState}from'react';
import{BookOpen,MapPin,Palette,Bus,CloudSun,Utensils,Images,CalendarDays,Compass,ArrowUp}from'lucide-react';
import{useGuide,t}from'./guide-provider';
import type{GovernorateSection}from'@/lib/governorate-sections';
const icons={history:BookOpen,map:MapPin,palette:Palette,bus:Bus,climate:CloudSun,food:Utensils,photos:Images,calendar:CalendarDays,places:Compass};
let chapterRequest=0;
function revealChapterLink(e:HTMLElement){const rail=e.parentElement;if(!rail)return;const box=e.getBoundingClientRect(),r=rail.getBoundingClientRect();if(box.left<r.left)rail.scrollLeft+=box.left-r.left-4;else if(box.right>r.right)rail.scrollLeft+=box.right-r.right+4}
function settleProfileSection(id:string){const request=++chapterRequest;void document.fonts.ready.then(()=>requestAnimationFrame(()=>requestAnimationFrame(()=>{if(request!==chapterRequest||location.hash!=='#'+id)return;const target=document.getElementById(id);target?.scrollIntoView({block:'start',behavior:'instant'});target?.focus({preventScroll:true})})))}
export function focusProfileSection(event:React.MouseEvent<HTMLAnchorElement>,id:string){if(event.metaKey||event.ctrlKey||event.shiftKey||event.altKey||event.button!==0)return;if(!document.getElementById(id))return;event.preventDefault();history.replaceState(history.state,'','#'+id);settleProfileSection(id)}
export function GovernorateSectionNavigator({sections}:{sections:GovernorateSection[]}){
 const{lang}=useGuide(),[current,setCurrent]=useState(''),[ready,setReady]=useState(false),nav=useRef<HTMLElement>(null),ids=sections.map(s=>s.id).join('|');
 useEffect(()=>{const root=nav.current;if(!root)return;let frame=0,disposed=false;const entries=ids.split('|');
  const update=()=>{frame=0;if(disposed)return;const bottom=Math.max(190,root.getBoundingClientRect().bottom+20);let active='',top=-Infinity;for(const id of entries){const section=document.getElementById('profile-'+id);if(!section)continue;const y=section.getBoundingClientRect().top;if(y<=bottom&&(y>top+1||(Math.abs(y-top)<=1&&location.hash==='#profile-'+id))){active=id;top=y}}setCurrent(active)};
  const request=()=>{if(disposed)return;if(!frame)frame=requestAnimationFrame(update)};
  const recover=()=>{const id=location.hash.slice(1);if(id==='profile-overview'||entries.some(s=>'profile-'+s===id))settleProfileSection(id);request()};
  // A native link can already hold focus when delayed scripts activate.
  // Reveal it horizontally without stealing focus or moving the document.
  if(document.activeElement instanceof HTMLElement&&root.contains(document.activeElement)&&document.activeElement.classList.contains('profile-nav-link'))revealChapterLink(document.activeElement);
  recover();setReady(true);addEventListener('popstate',recover);addEventListener('hashchange',recover);addEventListener('scroll',request,{passive:true});addEventListener('resize',request);void document.fonts.ready.then(()=>{if(disposed)return;const focused=document.activeElement;if(focused instanceof HTMLElement&&root.contains(focused)&&focused.classList.contains('profile-nav-link'))revealChapterLink(focused);request()});
  const resize=new ResizeObserver(request);resize.observe(document.body);
  return()=>{disposed=true;chapterRequest++;cancelAnimationFrame(frame);resize.disconnect();removeEventListener('popstate',recover);removeEventListener('hashchange',recover);removeEventListener('scroll',request);removeEventListener('resize',request)};
 },[ids]);
 const active=sections.find(s=>s.id===current);
 return <nav ref={nav} id="profile-overview" data-ready={ready?'true':'false'} tabIndex={-1} className="profile-section-navigator tw:sticky tw:top-[70px] tw:[@media(min-width:601px)]:top-[74px] tw:z-10 tw:my-[24px] tw:scroll-mt-[15px] tw:rounded-[13px] tw:border tw:border-solid tw:border-[var(--line)] tw:bg-[var(--paper)] tw:p-[10px] tw:shadow-[0_8px_24px_#0001] tw:print:hidden" aria-label={t(lang,'أقسام ملف المحافظة','Governorate profile sections')}>
  <p className="profile-current-chapter tw:mb-[6px] tw:truncate tw:px-[5px] tw:text-[11px] tw:leading-[1.7] tw:text-[var(--muted)]">{active?<>{t(lang,'بتقرأ دلوقتي: ','Now reading: ')}<span className="tw:font-semibold tw:text-[var(--ink)]">{active.name[lang]}</span></>:t(lang,'اختار جزء من حكاية المحافظة','Choose a chapter of this governorate')}</p>
  <div className="profile-nav-rail tw:flex tw:gap-[8px] tw:overflow-x-auto tw:px-[4px] tw:py-[5px] tw:[overscroll-behavior-inline:contain]">{sections.map(section=>{const Icon=icons[section.icon];return <a key={section.id} href={'#profile-'+section.id} aria-current={current===section.id?'location':undefined} onClick={event=>focusProfileSection(event,'profile-'+section.id)} onFocus={event=>revealChapterLink(event.currentTarget)} className="profile-nav-link tw:inline-flex tw:min-h-[44px] tw:shrink-0 tw:items-center tw:gap-[7px] tw:rounded-full tw:border tw:border-solid tw:border-[var(--line)] tw:bg-[var(--paper)] tw:px-[13px] tw:py-[9px] tw:text-[12px] tw:text-[var(--ink)] tw:[&[aria-current=location]]:border-[var(--ink)] tw:[&[aria-current=location]]:bg-[var(--ink)] tw:[&[aria-current=location]]:text-[var(--paper)]! tw:[&[aria-current=location]]:font-semibold tw:focus-visible:outline-[3px]! tw:focus-visible:outline-solid! tw:focus-visible:outline-[var(--ink)]! tw:focus-visible:outline-offset-[2px]!"><Icon size={16} aria-hidden="true"/>{section.name[lang]}</a>})}</div>
 </nav>
}
export function ProfileOverviewLink(){const{lang}=useGuide();return <a href="#profile-overview" onClick={event=>focusProfileSection(event,'profile-overview')} className="profile-overview-link tw:my-[22px] tw:inline-flex tw:min-h-[44px] tw:items-center tw:gap-[8px] tw:text-[12px] tw:text-[var(--ink)] tw:underline tw:underline-offset-4 tw:print:hidden"><ArrowUp size={16} aria-hidden="true"/>{t(lang,'ارجع لأقسام المحافظة','Back to governorate chapters')}</a>}
