'use client';
import{hoursFallbackClasses}from'./detail-shell-styles';
import {Clock,ExternalLink} from 'lucide-react';
import {useGuide,t} from './guide-provider';
import {visitingHours} from '@/lib/visiting-hours';
const focus=' tw:focus-visible:outline-[3px]! tw:focus-visible:outline-solid! tw:focus-visible:outline-[var(--ink)]! tw:focus-visible:outline-offset-[3px]!';
const cell='tw:min-w-0 tw:rounded-[10px] tw:border tw:border-solid tw:border-[var(--line)] tw:p-[15px] tw:[@media(max-width:600px)]:p-[12px]';
const label='tw:mb-[8px] tw:text-[12px] tw:leading-[1.8] tw:text-[var(--ink)]';
const value='tw:m-0 tw:text-[32px] tw:leading-[1.3] tw:text-[var(--ink)] tw:[font-family:Arial,sans-serif] tw:tabular-nums tw:[@media(max-width:600px)]:text-[27px]';
export function VisitingHours({placeId}:{placeId:string}){
 const {lang}=useGuide();const hours=visitingHours[placeId];
 if(!hours)return <div className={hoursFallbackClasses}><Clock size={19}/><div><b>{t(lang,'المواعيد وإتاحة الدخول','Hours & access')}</b><p>{t(lang,'مش مؤكدة لحظيًا هنا. اتأكد من المصدر الرسمي قبل ما تتحرك، خصوصًا العطلات والفعاليات.','Not confirmed live here. Check the official source before setting off, especially around holidays and events.')}</p></div></div>;
 return <section className="published-hours tw:my-[20px] tw:rounded-[16px] tw:border tw:border-solid tw:border-[var(--line)] tw:bg-[var(--paper)] tw:p-[24px] tw:text-[var(--ink)] tw:[@media(max-width:600px)]:p-[17px]" aria-label={t(lang,'المواعيد المنشورة','Published visiting hours')}>
  <h3 className="tw:m-0! tw:flex tw:items-center tw:gap-[9px] tw:text-[20px]! tw:leading-[1.7]!"><Clock size={21} aria-hidden="true" className="tw:shrink-0"/>{t(lang,'المواعيد المنشورة','Published visiting hours')}</h3>
  <p className="hours-review tw:mt-[10px]! tw:mb-[20px]! tw:text-[12px]! tw:leading-[1.9]! tw:text-[var(--muted)]">{t(lang,'بالتوقيت المحلي في مصر · اتراجعت: ','Local Egypt time · Checked: ')}<time dir="ltr" dateTime={hours.checkedAt}>{hours.checkedAt}</time></p>
  <div className="hours-sessions tw:grid tw:gap-[18px]">{hours.sessions.map((session,i)=><div key={i} className="hours-session tw:min-w-0 tw:rounded-[12px] tw:border tw:border-solid tw:border-[var(--line)] tw:p-[16px] tw:[@media(max-width:600px)]:p-[12px]">
   {session.label&&<h4 className="hours-session-label tw:m-0! tw:mb-[14px]! tw:text-[16px]! tw:leading-[1.85]!">{session.label[lang]}</h4>}
   <dl className={'hours-measures tw:m-0 tw:grid tw:grid-cols-2 tw:gap-[10px] '+(session.closes?'tw:[@media(min-width:601px)]:grid-cols-3':'')}>
    <div className={'hours-start '+cell}><dt className={label}>{t(lang,'بداية الفترة','Session starts')}</dt><dd className={value}><span dir="ltr">{session.opens}</span></dd></div>
    <div className={'hours-last-entry tw:bg-[var(--tint)] '+cell}><dt className={label+' tw:font-semibold'}>{t(lang,'آخر دخول','Last entry')}</dt><dd className={value}><span dir="ltr">{session.lastEntry}</span></dd></div>
    {session.closes&&<div className={'hours-end tw:col-span-2 tw:[@media(min-width:601px)]:col-span-1 '+cell}><dt className={label}>{t(lang,'نهاية الفترة','Session ends')}</dt><dd className={value}><span dir="ltr">{session.closes}</span></dd></div>}
   </dl>
  </div>)}</div>
  <p className="hours-note tw:mt-[20px]! tw:mb-[16px]! tw:text-[13px]! tw:leading-[2]!">{hours.note[lang]}</p>
  <div className="hours-sources tw:flex tw:flex-wrap tw:gap-[10px]">{hours.sources.map(source=><a className={'tw:inline-flex tw:min-h-[46px] tw:items-center tw:gap-[9px] tw:rounded-[9px] tw:border tw:border-solid tw:border-[var(--line)] tw:bg-[var(--paper)] tw:px-[14px] tw:py-[10px] tw:text-[12px] tw:leading-[1.9] tw:text-[var(--ink)] tw:underline tw:underline-offset-4'+focus} key={source.url} href={source.url} target="_blank" rel="noreferrer">{source.label[lang]}<ExternalLink size={14} aria-hidden="true" className="tw:shrink-0"/></a>)}</div>
 </section>;
}
