'use client';
import Link from 'next/link';
import {ArrowUpRight, BookOpen, ExternalLink, Landmark, MapPin} from 'lucide-react';
import {useGuide, t} from './guide-provider';
import {cairoMuseumIdentities, cairoMuseumIdentity, cairoMuseumComparisonPath} from '@/lib/cairo-museum-identities';
import {photoPath} from '@/lib/photos';

const focus = ' tw:focus-visible:outline-[3px]! tw:focus-visible:outline-solid! tw:focus-visible:outline-[var(--ink)]! tw:focus-visible:outline-offset-[3px]!';
const sourceLink = 'tw:inline-flex tw:min-h-[46px] tw:items-center tw:gap-[6px] tw:text-[12px] tw:leading-[1.8] tw:text-[var(--ink)]! tw:underline! tw:underline-offset-4' + focus;
export function CairoMuseumComparison() {
  const {lang} = useGuide();
  return <section id="cairo-museums" tabIndex={-1} className={'cairo-museum-comparison tw:my-[30px] tw:min-w-0 tw:scroll-mt-[105px] tw:text-[var(--ink)]' + focus} aria-labelledby="cairo-museums-title">
    <div className="tw:mb-[20px]">
      <h2 id="cairo-museums-title" className="tw:m-0! tw:mb-[12px]! tw:flex tw:items-start tw:gap-[9px] tw:text-[25px]! tw:leading-[1.7]!"><Landmark size={23} className="tw:mt-[9px] tw:shrink-0" aria-hidden="true"/>{t(lang, '3 متاحف مختلفة، اختار المكان الصح', 'Three museums. Three different places.')}</h2>
      <p className="tw:m-0! tw:text-[14px]! tw:leading-[2]! tw:text-[var(--muted)]">{t(lang, 'الاسم ممكن يتشابه، لكن دي أماكن منفصلة. قارن الاسم والمنطقة وطبيعة المجموعة قبل ما تفتح موقع التذاكر، واتأكد إن الاسم والعنوان على التذكرة هما اللي تقصدهم.', 'The names can sound similar, but these are separate places. Compare the name, area and collection focus before opening a ticket site. Check that the ticket names the museum and address you intend to visit.')}</p>
    </div>
    <div className="cairo-museum-grid tw:grid tw:grid-cols-3 tw:items-stretch tw:gap-[16px] tw:[@media(max-width:800px)]:grid-cols-1">
      {cairoMuseumIdentities.map(museum => <article data-museum={museum.id} key={museum.id} className="cairo-museum-card tw:flex tw:min-w-0 tw:flex-col tw:overflow-hidden tw:rounded-[15px] tw:border tw:border-solid tw:border-[var(--line)] tw:bg-[var(--paper)]">
        <img src={photoPath(museum.photo, 780)} srcSet={[420, 780].map(width => photoPath(museum.photo, width) + ' ' + width + 'w').join(', ')} sizes="(max-width:800px) 90vw, 31vw" alt={museum.photo.alt[lang]} width="780" height="520" loading="lazy" className="tw:block tw:h-[190px] tw:w-full tw:object-cover tw:[@media(max-width:800px)]:h-[230px] tw:[@media(max-width:450px)]:h-[210px]"/>
        <div className="tw:flex tw:flex-1 tw:flex-col tw:p-[17px]">
          <h3 className="tw:m-0! tw:mb-[13px]! tw:text-[21px]! tw:leading-[1.65]!">{museum.place.name[lang]}</h3>
          <dl className="tw:m-0 tw:mb-[19px] tw:text-[13px] tw:leading-[2]">
            <dt className="tw:mb-[5px] tw:flex tw:items-center tw:gap-[6px] tw:font-bold"><MapPin size={15} aria-hidden="true"/>{t(lang, 'المنطقة', 'Area')}</dt>
            <dd className="museum-area tw:m-0 tw:mb-[14px] tw:text-[var(--muted)]">{museum.area[lang]}</dd>
            <dt className="tw:mb-[5px] tw:flex tw:items-center tw:gap-[6px] tw:font-bold"><BookOpen size={15} aria-hidden="true"/>{t(lang, 'طبيعة المجموعة', 'Collection focus')}</dt>
            <dd className="museum-focus tw:m-0 tw:text-[var(--muted)]">{museum.focus[lang]}</dd>
          </dl>
          <div className="tw:mt-auto tw:grid tw:gap-[6px]">
            <Link className={'museum-guide-link tw:inline-flex tw:min-h-[48px] tw:items-center tw:justify-between tw:gap-[8px] tw:rounded-[9px] tw:border tw:border-solid tw:border-[var(--line)] tw:bg-[var(--page)] tw:px-[12px] tw:py-[10px] tw:text-[13px] tw:leading-[1.8] tw:text-[var(--ink)]!' + focus} href={'/' + lang + '/places/' + museum.id + '/'} aria-label={t(lang, 'دليل زيارة ', 'Visit guide: ') + museum.place.name[lang]}>{t(lang, 'دليل زيارة المكان', 'Read the visit guide')}<ArrowUpRight size={16} className="tw:shrink-0" aria-hidden="true"/></Link>
            <div className="museum-official-sources tw:flex tw:flex-wrap tw:gap-x-[12px]">{museum.sources.map((source, index) => <a className={sourceLink} href={source} key={source} target="_blank" rel="noreferrer" aria-label={(museum.sources.length === 1 ? t(lang, 'المصدر الرسمي: ', 'Official source: ') : index === 0 ? t(lang, 'مصدر المجموعة: ', 'Collection source: ') : t(lang, 'مصدر العنوان: ', 'Location source: ')) + museum.place.name[lang]}>{museum.sources.length === 1 ? t(lang, 'المصدر الرسمي', 'Official source') : index === 0 ? t(lang, 'المجموعة', 'Collection') : t(lang, 'العنوان', 'Location')}<ExternalLink size={13} aria-hidden="true"/></a>)}</div>
          </div>
        </div>
      </article>)}
    </div>
    <p className="tw:mt-[17px]! tw:mb-0! tw:text-[12px]! tw:leading-[2]! tw:text-[var(--muted)]">{t(lang, 'دي مقارنة تعريفية، مش خط سير أو تذكرة مجمعة أو ضمان إتاحة. راجع المواعيد وفئة التذكرة والمكان مباشرة قبل الحجز.', 'This identifies the museums. It is not a route, combined ticket or availability guarantee. Check hours, ticket eligibility and the venue directly before booking.')}</p>
  </section>;
}

export function MuseumIdentityNotice({placeId}: {placeId: string}) {
  const {lang} = useGuide(), museum = cairoMuseumIdentity(placeId);
  if (!museum) return null;
  return <aside className="museum-identity-notice tw:mb-[22px] tw:rounded-[10px] tw:border tw:border-solid tw:border-[var(--line)] tw:bg-[var(--page)] tw:p-[16px] tw:text-[var(--ink)]" aria-label={t(lang, 'اتأكد من اسم المتحف', 'Check the museum identity')}>
    <b className="tw:flex tw:items-start tw:gap-[8px] tw:text-[14px] tw:leading-[1.9]"><Landmark size={18} className="tw:mt-[4px] tw:shrink-0" aria-hidden="true"/>{t(lang, 'إنت على صفحة ', 'You are viewing: ') + museum.place.name[lang]}</b>
    <p className="museum-identity-area tw:my-[9px]! tw:text-[13px]! tw:leading-[2]! tw:text-[var(--muted)]!">{museum.area[lang]}</p>
    <Link href={cairoMuseumComparisonPath(lang)} className={sourceLink}>{t(lang, 'قارن المتاحف الـ3 قبل ما تختار التذكرة', 'Compare the three museums before choosing a ticket')}<ArrowUpRight size={15} className="tw:shrink-0" aria-hidden="true"/></Link>
  </aside>;
}
