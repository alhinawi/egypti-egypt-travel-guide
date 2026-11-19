'use client';
import{hoursFallbackClasses}from'./detail-shell-styles';
import {Clock,ExternalLink} from 'lucide-react';
import {useGuide,t} from './guide-provider';
import {visitingHours} from '@/lib/visiting-hours';
export function VisitingHours({placeId}:{placeId:string}){
 const {lang}=useGuide();const hours=visitingHours[placeId];
 if(!hours)return <div className={hoursFallbackClasses}><Clock size={19}/><div><b>{t(lang,'المواعيد وإتاحة الدخول','Hours & access')}</b><p>{t(lang,'مش مؤكدة لحظيًا هنا. اتأكد من المصدر الرسمي قبل ما تتحرك، خصوصًا العطلات والفعاليات.','Not confirmed live here. Check the official source before setting off, especially around holidays and events.')}</p></div></div>;
 return <section className="published-hours tw:my-[20px] tw:rounded-[14px] tw:border tw:border-solid tw:border-[var(--line)] tw:bg-[var(--paper)] tw:p-[20px]" aria-label={t(lang,'المواعيد المنشورة','Published visiting hours')}>
  <h3 className="tw:flex tw:items-center tw:gap-[9px] tw:text-[18px]!"><Clock size={19}/>{t(lang,'المواعيد المنشورة','Published visiting hours')}</h3>
  <p className="tw:my-[8px]! tw:text-[13px]">{t(lang,'بالتوقيت المحلي في مصر · اتراجعت: ','Local Egypt time · Checked: ')}<time dir="ltr" dateTime={hours.checkedAt}>{hours.checkedAt}</time></p>
  <div className="tw:grid tw:gap-[10px]">{hours.sessions.map((session,i)=><dl key={i} className="hours-session tw:m-0 tw:grid tw:grid-cols-2 tw:gap-x-[12px] tw:gap-y-[6px] tw:rounded-[10px] tw:border tw:border-solid tw:border-[var(--line)] tw:p-[14px] tw:text-[14px]">
   {session.label&&<div className="hours-session-label tw:col-span-2 tw:mb-[4px] tw:font-semibold">{session.label[lang]}</div>}
   <dt>{t(lang,'بداية الفترة','Session starts')}</dt><dd className="tw:m-0 tw:font-semibold"><span dir="ltr">{session.opens}</span></dd>
   <dt>{t(lang,'آخر دخول','Last entry')}</dt><dd className="tw:m-0 tw:font-semibold"><span dir="ltr">{session.lastEntry}</span></dd>
   {session.closes&&<><dt>{t(lang,'نهاية الفترة','Session ends')}</dt><dd className="tw:m-0 tw:font-semibold"><span dir="ltr">{session.closes}</span></dd></>}
  </dl>)}</div>
  <p className="hours-note tw:my-[12px]! tw:text-[14px]">{hours.note[lang]}</p>
  <div className="tw:flex tw:flex-wrap tw:gap-x-[18px] tw:gap-y-[6px]">{hours.sources.map(source=><a className="inline-link tw:min-h-[44px]" key={source.url} href={source.url} target="_blank" rel="noreferrer">{source.label[lang]}<ExternalLink size={14}/></a>)}</div>
 </section>;
}
