'use client';
import {useEffect, useRef, useState, type ReactNode} from 'react';
import {Archive, Box, Check, Copy, MapPin, Play, RotateCcw, Scan, Search} from 'lucide-react';
import {useGuide, t} from './guide-provider';
import {placePhotos, photoPath} from '@/lib/photos';
import {emptyVirtualVisitFilters, filterVirtualVisits, readVirtualVisitFilters, virtualVisitEntries, virtualVisitGovernorates, virtualVisitKindChoices, virtualVisitLink, type VirtualVisitEntry, type VirtualVisitFilters} from '@/lib/virtual-visit-browser';

const focus = ' tw:focus-visible:outline-[3px]! tw:focus-visible:outline-solid! tw:focus-visible:outline-[var(--ink)]! tw:focus-visible:outline-offset-[3px]!';
const button = 'tw:inline-flex tw:min-h-[46px] tw:items-center tw:justify-center tw:gap-[8px] tw:rounded-full tw:border! tw:border-solid! tw:border-[var(--line)]! tw:bg-[var(--paper)] tw:px-[16px] tw:py-[10px] tw:text-[12px] tw:text-[var(--ink)]' + focus;
const kindIcons = {video: Play, panorama: Scan, model: Box, archive: Archive};

export function VirtualVisitBrowser({renderVisit, notice}: {renderVisit: (entry: VirtualVisitEntry) => ReactNode; notice: ReactNode}) {
  const {lang} = useGuide();
  const [filters, setFilters] = useState<VirtualVisitFilters>(emptyVirtualVisitFilters);
  const [ready, setReady] = useState(false), [url, setUrl] = useState('');
  const [copyStatus, setCopyStatus] = useState<'' | 'copied' | 'fallback'>('');
  const search = useRef<HTMLInputElement>(null), fallback = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const read = () => {setFilters(readVirtualVisitFilters(location.search)); setReady(true)};
    read(); addEventListener('popstate', read);
    return () => removeEventListener('popstate', read);
  }, []);
  useEffect(() => {
    if (!ready) return;
    const next = virtualVisitLink(location.origin, lang, filters), parsed = new URL(next);
    setUrl(next); history.replaceState(history.state, '', parsed.pathname + parsed.search + location.hash);
  }, [ready, lang, filters]);
  useEffect(() => {setCopyStatus('')}, [url]);
  useEffect(() => {if (copyStatus === 'fallback') {fallback.current?.focus(); fallback.current?.select()}}, [copyStatus]);
  const update = (patch: Partial<VirtualVisitFilters>) => setFilters(current => ({...current, ...patch}));
  const reset = () => {setFilters({...emptyVirtualVisitFilters}); search.current?.focus()};
  const copy = async () => {
    try {await navigator.clipboard.writeText(url); setCopyStatus('copied')}
    catch {setCopyStatus('fallback')}
  };
  const matches = filterVirtualVisits(filters), active = Boolean(filters.q || filters.kind || filters.governorate);
  return <div className="virtual-browser tw:min-w-0" data-ready={ready ? 'true' : 'false'}>
    <section className="virtual-browser-controls tw:my-[26px] tw:min-w-0 tw:text-[var(--ink)] tw:print:hidden" aria-labelledby="virtual-browser-title">
      <h2 id="virtual-browser-title" className="tw:m-0! tw:mb-[9px]! tw:text-[27px]! tw:leading-[1.7]!">{t(lang, 'اختار الشباك اللي يفتح لك مصر', 'Choose your window into Egypt')}</h2>
      <p className="tw:m-0! tw:mb-[18px]! tw:text-[12px]! tw:leading-[1.9]! tw:text-[var(--muted)]">{t(lang, 'اختار نوع الجولة، وبعدها ضيّق البحث بالمحافظة أو الاسم. الأعداد على كروت الصور لكل المكتبة، قبل باقي الاختيارات.', 'Choose a visit type, then narrow by governorate or name. Picture-card counts cover the full library, before other choices.')}</p>
      <div className="virtual-kind-choices tw:mb-[20px] tw:grid tw:grid-cols-4 tw:gap-[14px] tw:[@media(max-width:700px)]:grid-cols-2" role="group" aria-label={t(lang, 'نوع الجولة الافتراضية', 'Virtual visit type')}>
        {virtualVisitKindChoices.map(choice => {
          const photo = choice.cover && placePhotos[choice.cover.place.id], Icon = kindIcons[choice.id];
          return <button key={choice.id} type="button" data-kind={choice.id} disabled={!ready} aria-pressed={filters.kind === choice.id} aria-controls="virtual-browser-results" onClick={() => update({kind: filters.kind === choice.id ? '' : choice.id})} className={'virtual-kind-choice tw:min-w-0 tw:overflow-hidden tw:rounded-[14px] tw:border! tw:border-solid! tw:border-[var(--line)]! tw:bg-[var(--paper)] tw:p-0 tw:text-start tw:text-[var(--ink)] tw:[&[aria-pressed=true]]:border-[var(--ink)]! tw:[&[aria-pressed=true]]:[box-shadow:0_0_0_1px_var(--ink)]' + focus}>
            {photo && <img src={photoPath(photo, 420)} srcSet={[420, 780].map(width => photoPath(photo, width) + ' ' + width + 'w').join(', ')} sizes="(max-width:700px) 45vw, 25vw" alt={photo.alt[lang]} width="420" height="280" loading="lazy" className="tw:block tw:h-[138px] tw:w-full tw:object-cover tw:[@media(max-width:600px)]:h-[112px]"/>}
            <span className="tw:flex tw:min-h-[104px] tw:items-center tw:justify-between tw:gap-[7px] tw:p-[14px] tw:[@media(max-width:600px)]:p-[11px]">
              <span className="tw:min-w-0"><b className="tw:flex tw:items-center tw:gap-[7px] tw:text-[17px] tw:leading-[1.8] tw:[@media(max-width:600px)]:text-[15px]"><Icon size={16} aria-hidden="true" className="tw:shrink-0"/>{choice.name[lang]}</b><span className="virtual-kind-count tw:mt-[5px] tw:block tw:text-[11px] tw:leading-[1.9] tw:text-[var(--muted)]">{t(lang, 'روابط منشورة: ', 'Published links: ')}<bdi dir="ltr">{choice.count}</bdi></span></span>
              {filters.kind === choice.id && <Check size={18} aria-hidden="true" className="tw:shrink-0"/>}
            </span>
          </button>;
        })}
      </div>
      <form role="search" aria-label={t(lang, 'دور في مكتبة الجولات', 'Search the visit library')} onSubmit={event => event.preventDefault()} className="tw:grid tw:min-w-0 tw:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] tw:gap-[14px] tw:rounded-[15px] tw:border tw:border-solid tw:border-[var(--line)] tw:bg-[var(--paper)] tw:p-[19px] tw:[@media(max-width:700px)]:grid-cols-1 tw:[@media(max-width:600px)]:p-[15px]">
        <label className="tw:grid tw:min-w-0 tw:gap-[8px] tw:text-[12px]"><span className="tw:flex tw:items-center tw:gap-[7px]"><Search size={16} aria-hidden="true"/>{t(lang, 'اسم المكان أو المصدر', 'Place or source name')}</span><input ref={search} type="search" maxLength={120} value={filters.q} disabled={!ready} onChange={event => update({q: event.target.value})} placeholder={t(lang, 'جرّب اسم مكان أو محافظة', 'Try a place or governorate')} className={'virtual-visit-search tw:min-h-[48px] tw:w-full tw:min-w-0 tw:rounded-[9px] tw:border tw:border-solid tw:border-[var(--line)] tw:bg-[var(--paper)] tw:px-[12px] tw:py-[10px] tw:text-[16px] tw:text-[var(--ink)] tw:placeholder:text-[var(--muted)] tw:placeholder:opacity-100' + focus}/></label>
        <label className="tw:grid tw:min-w-0 tw:gap-[8px] tw:text-[12px]"><span className="tw:flex tw:items-center tw:gap-[7px]"><MapPin size={16} aria-hidden="true"/>{t(lang, 'المحافظة', 'Governorate')}</span><select value={filters.governorate} disabled={!ready} onChange={event => update({governorate: event.target.value})} className={'virtual-visit-governorate tw:min-h-[48px] tw:w-full tw:min-w-0 tw:rounded-[9px] tw:border tw:border-solid tw:border-[var(--line)] tw:bg-[var(--paper)] tw:px-[12px] tw:py-[10px] tw:text-[14px] tw:text-[var(--ink)]' + focus}><option value="">{t(lang, 'كل المحافظات', 'All governorates')}</option>{virtualVisitGovernorates.map(area => <option key={area.id} value={area.id}>{area.name[lang]}</option>)}</select></label>
        <div className="tw:col-span-full tw:flex tw:flex-wrap tw:items-center tw:gap-[10px]">
          <button type="button" disabled={!ready} aria-pressed={!filters.kind} aria-controls="virtual-browser-results" onClick={() => update({kind: ''})} className={button + ' virtual-all-kinds tw:[&[aria-pressed=true]]:border-[var(--ink)]!'}>{t(lang, 'كل الأنواع', 'All visit types')}</button>
          {active && <button type="button" onClick={reset} className={button + ' virtual-visit-reset'}><RotateCcw size={15} aria-hidden="true"/>{t(lang, 'امسح الاختيارات', 'Reset choices')}</button>}
          <button type="button" disabled={!ready || !url} onClick={copy} className={button + ' virtual-visit-copy'}><Copy size={15} aria-hidden="true"/>{t(lang, 'انسخ رابط الاختيارات', 'Copy choices link')}</button>
        </div>
        <p className="tw:col-span-full tw:m-0! tw:text-[11px]! tw:leading-[1.9]! tw:text-[var(--muted)]">{t(lang, 'الرابط فيه البحث والمحافظة والنوع بس، من غير حسابك أو محفوظاتك. انسخه وشاركه بنفسك؛ مفيش حاجة بتتبعت تلقائي.', 'The link contains search terms, governorate and type, not your account or saved items. Copy it to share yourself; nothing is sent automatically.')}</p>
        {copyStatus === 'fallback' && <label className="tw:col-span-full tw:grid tw:min-w-0 tw:gap-[7px] tw:text-[12px]">{t(lang, 'رابط الاختيارات', 'Choices link')}<input ref={fallback} readOnly dir="ltr" value={url} onFocus={event => event.currentTarget.select()} className={'virtual-visit-copy-fallback tw:min-h-[46px] tw:w-full tw:min-w-0 tw:rounded-[8px] tw:border tw:border-solid tw:border-[var(--line)] tw:bg-[var(--paper)] tw:px-[10px] tw:py-[9px] tw:text-[14px] tw:text-[var(--ink)]' + focus}/></label>}
        <p className="virtual-visit-copy-status tw:col-span-full tw:m-0! tw:text-[12px]! tw:leading-[1.9]!" role="status" aria-live="polite" aria-atomic="true">{copyStatus === 'copied' ? t(lang, 'الرابط اتنسخ.', 'Link copied.') : copyStatus === 'fallback' ? t(lang, 'النسخ التلقائي ما اشتغلش. انسخ الرابط من الخانة.', 'Automatic copy did not work. Copy the link from the field.') : ''}</p>
      </form>
    </section>
    <noscript><p className="tw:my-[18px]! tw:text-[13px]! tw:leading-[1.9]! tw:text-[var(--muted)]">{t(lang, 'كل روابط المكتبة موجودة تحت. الفلاتر محتاجة JavaScript.', 'The full library is listed below. Filters need JavaScript.')}</p></noscript>
    {notice}
    <p className="virtual-visit-count tw:my-[20px]! tw:text-[13px]! tw:leading-[1.9]! tw:text-[var(--muted)]" role="status" aria-live="polite" aria-atomic="true">{t(lang, 'روابط الزيارة المعروضة: ', 'Published visit links shown: ')}<bdi dir="ltr">{matches.length} / {virtualVisitEntries.length}</bdi></p>
    <div id="virtual-browser-results" className="virtual-grid tw:grid tw:grid-cols-2 tw:gap-[20px] tw:[@media(max-width:600px)]:grid-cols-1">
      {matches.map(renderVisit)}
      {!matches.length && <div className="virtual-visit-empty tw:col-span-full tw:rounded-[16px] tw:border tw:border-solid tw:border-[var(--line)] tw:bg-[var(--paper)] tw:p-[26px] tw:text-[var(--ink)]"><h2 className="tw:m-0! tw:mb-[12px]! tw:text-[24px]! tw:leading-[1.7]!">{t(lang, 'مفيش روابط مطابقة للاختيارات دي', 'No published links match these choices')}</h2><p className="tw:m-0! tw:mb-[17px]! tw:text-[13px]! tw:leading-[1.9]! tw:text-[var(--muted)]">{t(lang, 'جرّب اسم أو محافظة أو نوع تاني، أو ارجع لكل المكتبة.', 'Try another name, governorate or type, or return to the full library.')}</p><button type="button" onClick={reset} className={button + ' virtual-visit-empty-reset'}>{t(lang, 'اعرض كل الجولات', 'Show all visits')}</button></div>}
    </div>
  </div>;
}
