'use client';
import {ExternalLink,Compass,ShieldCheck} from 'lucide-react';
import {useGuide,t} from './guide-provider';
import {PlacePhoto} from './place-photo';
import {operatorLeads,operatorsForPlace} from '@/lib/operators';
export function OperatorLeads({placeId}:{placeId?:string}){
 const {lang}=useGuide();const leads=placeId?operatorsForPlace(placeId):operatorLeads;
 if(!leads.length)return null;
 return <section className="operator-leads tw:my-[36px]" aria-labelledby="operator-leads-title">
  <div className="tw:mb-[18px]"><span className="eyebrow">{t(lang,'مصادر لخطوتك الجاية','SOURCES FOR YOUR NEXT STEP')}</span><h2 id="operator-leads-title" className="tw:flex tw:items-center tw:gap-[10px]"><Compass size={23}/>{t(lang,'مراكز غطس حقيقية تسألها','Real dive centres to ask')}</h2>
  <p className="tw:mt-[12px]!">{t(lang,'دي روابط لمراكز موجودة في دليل غرفة سياحة الغوص والأنشطة البحرية CDWS وقت المراجعة، ومطابقة بمواقعها. مش شخصيات رفقاء الحكاية، ومش قائمة أفضل مراكز أو ضمان أمان أو حجز متاح. الصور للمناطق، مش لفريق المركز أو معداته.','These centres appeared in the Chamber of Diving and Water Sports (CDWS) directory at review time and were matched to their own websites. They are separate from the fictional story companions. Not a best-centres ranking, safety guarantee or live availability. Photos show the areas, not centre staff or equipment.')}</p></div>
  <div className="tw:grid tw:gap-[20px] tw:md:grid-cols-2">{leads.map(lead=><article className="operator-lead tw:min-w-0 tw:overflow-hidden tw:rounded-[18px] tw:border tw:border-solid tw:border-[var(--line)] tw:bg-[var(--paper)]" key={lead.id}>
   <PlacePhoto id={lead.photoPlaceId} card/>
   <div className="tw:p-[22px]"><p className="eyebrow">{lead.area[lang]}</p><h3 className="tw:my-[8px]!" dir="ltr">{lead.name}</h3><p>{lead.summary[lang]}</p>
    <p className="tw:my-[12px]! tw:text-[13px]">CDWS · {t(lang,'رقم القيد في الدليل: ','Directory listing: ')}<span dir="ltr">{lead.directoryNumber}</span><br/>{t(lang,'اتراجع: ','Checked: ')}<time dir="ltr" dateTime={lead.checkedAt}>{lead.checkedAt}</time></p>
    <div className="tw:flex tw:flex-wrap tw:items-center tw:gap-[12px]"><a className="primary-button" href={lead.websiteUrl} target="_blank" rel="noreferrer">{t(lang,'موقع المركز','Centre website')}<ExternalLink size={15}/></a><a className="inline-link tw:min-h-[44px]" href={lead.directoryUrl} target="_blank" rel="noreferrer">{t(lang,'راجع دليل CDWS','Check CDWS directory')}<ExternalLink size={14}/></a></div>
   </div>
  </article>)}</div>
  <div className="operator-checks tw:mt-[18px] tw:rounded-[14px] tw:border tw:border-solid tw:border-[var(--line)] tw:p-[20px]"><h3 className="tw:flex tw:items-center tw:gap-[9px]"><ShieldCheck size={20}/>{t(lang,'قبل أي اتفاق','Before agreeing')}</h3><p className="tw:mt-[10px]!">{t(lang,'راجع القيد الحالي مع CDWS وترخيص المدرب أو المرشد للنشاط، ومتطلبات الشهادة والخبرة والتقييم الطبي. اتفق على اللغة، مستوى النشاط، حالة البحر والتصاريح، التأمين والطوارئ، نقطة التحرك والرجوع، الإجمالي وكل الإضافات والإلغاء. ما تفترضش إن مركز غطس بيقدم إرشاد آثار. إحنا مش بنحجز أو بناخد عمولة، ومفيش بيانات بتتبعت للمراكز من هنا.','Recheck the current CDWS listing and the instructor or guide credentials for the activity, plus certification, experience and medical-screening requirements. Agree on language, activity level, sea conditions and permits, insurance and emergency arrangements, departure and return points, total cost, all extras and cancellation. Do not assume a dive centre provides archaeological guiding. We do not book or take commission, and no personal details are sent to centres here.')}</p></div>
 </section>;
}
