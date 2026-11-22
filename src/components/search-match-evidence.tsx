'use client';
import {useGuide,t} from './guide-provider';
import {guideSearchMatches,type MatchFieldKind} from '@/lib/guide-search-matches';
import type {GuideSearchEntry} from '@/lib/guide-search';
const labels:Record<MatchFieldKind,{ar:string;en:string}>={title:{ar:'العنوان',en:'Title'},description:{ar:'المقدمة',en:'Introduction'},governorate:{ar:'المحافظة',en:'Governorate'},category:{ar:'نوع المكان',en:'Place category'},region:{ar:'المنطقة',en:'Region'},capital:{ar:'العاصمة الإدارية',en:'Administrative capital'},day:{ar:'عنوان يوم في الخطة',en:'Published day title'},place:{ar:'مكان مذكور في الخطة',en:'Listed place'},duration:{ar:'عدد أيام الخطة',en:'Plan day count'}};
export function SearchMatchEvidence({entry,query}:{entry:GuideSearchEntry;query:string}){
 const {lang}=useGuide(),matches=guideSearchMatches(entry,query,lang);if(!matches.length)return null;
 return <div className="guide-search-evidence tw:mt-[16px] tw:rounded-[10px] tw:border tw:border-solid tw:border-[var(--line)] tw:bg-[var(--tint)] tw:p-[12px] tw:[overflow-wrap:anywhere]">
  <p className="tw:mb-[12px] tw:text-[11px] tw:leading-[1.9] tw:text-[var(--muted)]">{t(lang,'نصوص مطابقة من الدليل','Matching catalog text')}</p>
  <dl className="tw:m-0 tw:grid tw:gap-[12px]">{matches.map((match,index)=><div key={index} data-field={match.kind} data-language={match.lang}>
   <dt className="tw:mb-[4px] tw:text-[10px] tw:leading-[1.8] tw:text-[var(--muted)]">{labels[match.kind][lang]}{match.lang!==lang&&<span className="guide-search-evidence-language">{' · '}{match.lang==='ar'?t(lang,'بالعربي','Arabic'):t(lang,'بالإنجليزي','English')}</span>}</dt>
   <dd className="tw:m-0 tw:text-[12px] tw:leading-[2] tw:text-[var(--ink)]"><bdi dir="auto" lang={match.lang}>{match.before&&'…'}{match.parts.map((part,i)=>part.match?<mark key={i} className="tw:rounded-[2px] tw:bg-[var(--ink)] tw:px-[1px] tw:text-[var(--paper)] tw:[box-decoration-break:clone] tw:print:bg-transparent tw:print:font-bold tw:print:text-black">{part.text}</mark>:part.text)}{match.after&&'…'}</bdi></dd>
  </div>)}</dl>
 </div>;
}
