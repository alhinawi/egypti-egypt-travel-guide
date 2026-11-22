'use client';
import {useEffect, useRef, useState} from 'react';
import {Copy, Link as LinkIcon} from 'lucide-react';
import {useGuide, t} from './guide-provider';
import {atlasCollectionLink} from '@/lib/atlas-collection-link';
import type {AtlasFilters} from '@/lib/photo-atlas';

const focus = ' tw:focus-visible:outline-[3px]! tw:focus-visible:outline-solid! tw:focus-visible:outline-[var(--ink)]! tw:focus-visible:outline-offset-[3px]!';
export function AtlasShareLink({filters, ready}: {filters: AtlasFilters; ready: boolean}) {
  const {lang} = useGuide(), [origin, setOrigin] = useState('');
  const [feedback, setFeedback] = useState<{url: string; kind: 'copied' | 'fallback'} | null>(null);
  const input = useRef<HTMLInputElement>(null), latest = useRef('');
  useEffect(() => {setOrigin(location.origin)}, []);
  const url = origin && ready ? atlasCollectionLink(origin, lang, filters) : '';
  latest.current = url;
  const status = feedback?.url === url ? feedback.kind : '';
  useEffect(() => {setFeedback(null)}, [url]);
  useEffect(() => {if (status === 'fallback') {input.current?.focus(); input.current?.select()}}, [status]);
  const copy = async () => {
    const target = url;
    if (!target) return;
    try {await navigator.clipboard.writeText(target); if (latest.current === target) setFeedback({url: target, kind: 'copied'})}
    catch {if (latest.current === target) setFeedback({url: target, kind: 'fallback'})}
  };
  return <aside className="atlas-share-link tw:mb-[22px] tw:min-w-0 tw:rounded-[12px] tw:border tw:border-solid tw:border-[var(--line)] tw:bg-[var(--paper)] tw:p-[17px] tw:text-[var(--ink)] tw:print:hidden" aria-labelledby="atlas-share-title">
    <div className="tw:flex tw:flex-wrap tw:items-center tw:justify-between tw:gap-[14px]">
      <div className="tw:min-w-0 tw:flex-1 tw:[@media(max-width:600px)]:basis-full">
        <h2 id="atlas-share-title" className="tw:m-0! tw:mb-[8px]! tw:flex tw:items-center tw:gap-[8px] tw:text-[20px]! tw:leading-[1.7]!"><LinkIcon size={18} className="tw:shrink-0" aria-hidden="true"/>{t(lang, 'ارجع لنفس اختيارات الصور', 'Keep these photograph filters')}</h2>
        <p className="atlas-link-note tw:m-0! tw:text-[12px]! tw:leading-[1.9]! tw:text-[var(--muted)]">{t(lang, 'الرابط فيه البحث والفلاتر بس، من غير حسابك أو محفوظاتك أو المقارنة أو الصورة المفتوحة. طريقة العرض وعدد الصور المعروضة بيرجعوا للأصل. انسخه وشاركه بنفسك؛ مفيش حاجة بتتبعت تلقائي.', 'The link contains search terms and filters, not your account, saved items, comparison or open photograph. Layout and the number shown reset when reopened. Copy it to share yourself; nothing is sent automatically.')}</p>
      </div>
      <button type="button" disabled={!url} onClick={copy} className={'atlas-share-copy tw:inline-flex tw:min-h-[48px] tw:min-w-0 tw:items-center tw:justify-center tw:gap-[8px] tw:rounded-full tw:border! tw:border-solid! tw:border-[var(--line)]! tw:bg-[var(--page)] tw:px-[16px] tw:py-[10px] tw:text-[13px] tw:leading-[1.8] tw:text-[var(--ink)]' + focus}><Copy size={16} className="tw:shrink-0" aria-hidden="true"/>{t(lang, 'انسخ رابط مجموعة الصور', 'Copy photo collection link')}</button>
    </div>
    {status === 'fallback' && <label className="tw:mt-[15px] tw:grid tw:min-w-0 tw:gap-[8px] tw:text-[12px]">{t(lang, 'رابط مجموعة الصور', 'Photo collection link')}<input ref={input} readOnly dir="ltr" value={url} onFocus={event => event.currentTarget.select()} className={'atlas-share-fallback tw:min-h-[48px] tw:w-full tw:min-w-0 tw:rounded-[8px] tw:border tw:border-solid tw:border-[var(--line)] tw:bg-[var(--page)] tw:px-[11px] tw:py-[10px] tw:text-[14px] tw:text-[var(--ink)]' + focus}/></label>}
    <p className="atlas-share-status tw:m-0! tw:mt-[10px]! tw:text-[12px]! tw:leading-[1.9]!" role="status" aria-live="polite" aria-atomic="true">{status === 'copied' ? t(lang, 'الرابط اتنسخ بالفلاتر الحالية.', 'Link copied with the current filters.') : status === 'fallback' ? t(lang, 'النسخ التلقائي ما اشتغلش. انسخ الرابط من الخانة.', 'Automatic copy did not work. Copy the link from the field.') : ''}</p>
  </aside>;
}
