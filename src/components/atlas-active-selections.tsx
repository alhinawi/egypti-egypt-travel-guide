'use client';
import {useEffect, useRef} from 'react';
import {X, SlidersHorizontal} from 'lucide-react';
import {useGuide, t} from './guide-provider';
import {atlasActiveSelections, type AtlasSelectionKey} from '@/lib/atlas-active-selections';
import type {AtlasFilters} from '@/lib/photo-atlas';
const focus = ' tw:focus-visible:outline-[3px]! tw:focus-visible:outline-solid! tw:focus-visible:outline-[var(--ink)]! tw:focus-visible:outline-offset-[3px]!';
const action = 'tw:inline-flex tw:min-h-[48px] tw:max-w-full tw:items-center tw:justify-center tw:gap-[8px] tw:rounded-[10px] tw:border! tw:border-solid! tw:border-[var(--line)]! tw:bg-[var(--paper)] tw:px-[13px] tw:py-[10px] tw:text-start tw:text-[12px] tw:leading-[1.9] tw:text-[var(--ink)]' + focus;
export function AtlasActiveSelections({filters, ready, onRemove, onClear, focusEmpty}: {filters: AtlasFilters; ready: boolean; onRemove: (key: AtlasSelectionKey) => void; onClear: () => void; focusEmpty: () => void}) {
  const {lang} = useGuide(), selections = atlasActiveSelections(filters, lang), root = useRef<HTMLElement>(null), pending = useRef<{key: AtlasSelectionKey; index: number} | null>(null);
  const keys = selections.map(s => s.key).join('|');
  useEffect(() => {
    const previous = pending.current;
    if (!previous || selections.some(s => s.key === previous.key)) return;
    pending.current = null;
    const buttons = root.current?.querySelectorAll<HTMLButtonElement>('[data-filter-key]');
    if (buttons?.length) buttons[Math.min(previous.index, buttons.length - 1)].focus({preventScroll: true});
    else focusEmpty();
  }, [keys, focusEmpty]);
  if (!selections.length) return null;
  return <section ref={root} className="atlas-active-selections tw:my-[20px] tw:rounded-[14px] tw:border tw:border-solid tw:border-[var(--line)] tw:bg-[var(--paper)] tw:p-[18px] tw:text-[var(--ink)] tw:print:hidden" aria-labelledby="atlas-active-title">
    <div className="tw:mb-[12px] tw:flex tw:flex-wrap tw:items-center tw:justify-between tw:gap-[12px]">
      <h2 id="atlas-active-title" className="tw:m-0! tw:flex tw:items-center tw:gap-[8px] tw:text-[16px]! tw:leading-[1.9]!"><SlidersHorizontal size={17} aria-hidden="true"/>{t(lang, 'اختيارات الصور الحالية', 'Current photo selections')}</h2>
      <button disabled={!ready} className={action + ' atlas-active-clear'} onClick={() => {pending.current = null; onClear();}}>{t(lang, 'امسح كل الفلاتر', 'Clear all filters')}</button>
    </div>
    <div role="group" aria-label={t(lang, 'شيل فلتر واحد وسيب الباقي', 'Remove one filter and keep the others')} className="tw:flex tw:flex-wrap tw:gap-[9px]">
      {selections.map((s, index) => <span key={s.key} className={'tw:min-w-0 tw:max-w-full' + (s.key === 'region' ? ' atlas-region-active' : '')}>
        <button data-filter-key={s.key} disabled={!ready} aria-controls="atlas-photo-grid" aria-label={t(lang, 'شيل فلتر ', 'Remove filter ') + s.label + ': ' + s.value} className={action + (s.key === 'region' ? ' atlas-region-clear' : '')} onClick={() => {pending.current = {key: s.key, index}; onRemove(s.key);}}>
          <span className="tw:min-w-0 tw:[overflow-wrap:anywhere]"><span className="tw:text-[var(--muted)]">{s.label}: </span><bdi dir="auto">{s.value}</bdi></span><X size={16} aria-hidden="true" className="tw:shrink-0"/>
        </button>
      </span>)}
    </div>
  </section>;
}
