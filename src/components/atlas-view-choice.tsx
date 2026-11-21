'use client';
import {LayoutGrid,Grid2X2} from 'lucide-react';
import {useGuide,t} from './guide-provider';
export function AtlasViewChoice({compact,onChange,ready}:{compact:boolean;onChange:(compact:boolean)=>void;ready:boolean}) {
 const {lang}=useGuide();
 return <div className="atlas-view-choice tw:mb-[20px] tw:rounded-[13px] tw:border tw:border-solid tw:border-[var(--line)] tw:bg-[var(--paper)] tw:p-[16px] tw:text-[var(--ink)] tw:print:hidden">
  <div className="tw:flex tw:flex-wrap tw:items-center tw:justify-between tw:gap-[14px]">
   <p id="atlas-view-choice-label" className="tw:m-0! tw:text-[14px] tw:font-semibold">{t(lang,'تحب تشوف الصور إزاي؟','How would you like to browse?')}</p>
   <div role="group" aria-labelledby="atlas-view-choice-label" className="tw:flex tw:flex-wrap tw:gap-[8px]">{[false,true].map(value=>{const Icon=value?Grid2X2:LayoutGrid;return <button key={String(value)} type="button" disabled={!ready} aria-pressed={compact===value} aria-controls="atlas-photo-grid" onClick={()=>onChange(value)} className="tw:inline-flex tw:min-h-[44px] tw:items-center tw:gap-[8px] tw:rounded-[9px] tw:border! tw:border-solid! tw:border-[var(--line)]! tw:bg-[var(--paper)] tw:px-[13px] tw:py-[9px] tw:text-[12px] tw:text-[var(--ink)] tw:[&[aria-pressed=true]]:border-[var(--ink)]! tw:[&[aria-pressed=true]]:bg-[var(--ink)] tw:[&[aria-pressed=true]]:text-[var(--paper)] tw:focus-visible:outline-[3px]! tw:focus-visible:outline-solid! tw:focus-visible:outline-[var(--ink)]! tw:focus-visible:outline-offset-[3px]!"><Icon size={17} aria-hidden="true"/>{value?t(lang,'صور جنب بعض','Contact sheet'):t(lang,'كروت بالتفاصيل','Detailed cards')}</button>})}</div>
  </div>
  <p className="tw:m-0! tw:mt-[10px]! tw:text-[11px] tw:leading-[1.9] tw:text-[var(--muted)]">{t(lang,'نفس النتائج والاختيارات. اضغط الصورة لتكبيرها، أو اسم المكان لقراءة حكايته. طريقة العرض للصفحة دي بس.','The same results and choices. Select a photograph to enlarge it, or a place name to read its story. This view lasts only on this page.')}</p>
 </div>;
}
