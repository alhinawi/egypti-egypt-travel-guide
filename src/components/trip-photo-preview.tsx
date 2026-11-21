'use client';
import {useState} from 'react';
import Link from 'next/link';
import {Camera,ArrowUpRight} from 'lucide-react';
import {useGuide,t} from './guide-provider';
import type {Itinerary} from '@/lib/data';
import {tripPhotoPreview} from '@/lib/trip-photo-preview';
import {photoPath} from '@/lib/photos';
const focus=' tw:focus-visible:outline-[3px]! tw:focus-visible:outline-solid! tw:focus-visible:outline-[var(--ink)]! tw:focus-visible:outline-offset-[3px]!';
export function TripPhotoPreview({trip,ready}:{trip:Itinerary;ready:boolean}) {
  const {lang}=useGuide();
  const [active,setActive]=useState(0);
  const days=tripPhotoPreview(trip),current=days[active];
  const panelId='trip-photo-day-'+trip.id;
  return <details className="trip-photo-preview tw:group tw:my-[14px] tw:rounded-[13px] tw:border tw:border-solid tw:border-[var(--line)] tw:bg-[var(--paper)] tw:text-[var(--ink)] tw:print:hidden">
    <summary className={'trip-photo-summary tw:flex tw:min-h-[48px] tw:cursor-pointer tw:list-none tw:items-center tw:justify-between tw:gap-[10px] tw:rounded-[12px] tw:px-[17px] tw:py-[12px] tw:text-[13px] tw:[&::-webkit-details-marker]:hidden'+focus}>
      <span className="tw:flex tw:items-center tw:gap-[9px]"><Camera size={18} aria-hidden="true"/>{t(lang,'شوف أماكن الخطة بالصور','Preview the plan in photographs')}</span>
      <span aria-hidden="true" className="tw:text-[19px]"><span className="tw:group-open:hidden">+</span><span className="tw:hidden tw:group-open:inline">−</span></span>
    </summary>
    <div className="trip-photo-content tw:border-0 tw:border-t tw:border-solid tw:border-[var(--line)] tw:p-[17px]">
      <p className="tw:mb-[12px] tw:text-[11px] tw:leading-[1.9] tw:text-[var(--muted)]">{t(lang,'الأماكن المذكورة في كل يوم من الخطة المنشورة. دي أفكار للتخطيط، مش حجز أو تأكيد إن المكان متاح.','Places listed in each day of the published plan. Planning ideas, not bookings or confirmation of access.')}</p>
      <div role="group" aria-label={t(lang,'اختار يوم من ','Choose a day from ')+trip.title[lang]} className="trip-photo-day-choices tw:mb-[17px] tw:flex tw:flex-wrap tw:gap-[8px]">{days.map((item,index)=><button key={item.number} disabled={!ready} type="button" aria-pressed={active===index} aria-controls={panelId} onClick={()=>setActive(index)} className={'tw:min-h-[44px] tw:rounded-full tw:border! tw:border-solid! tw:border-[var(--line)]! tw:bg-[var(--paper)] tw:px-[14px] tw:py-[9px] tw:text-[12px] tw:text-[var(--ink)] tw:[&[aria-pressed=true]]:border-[var(--ink)]! tw:[&[aria-pressed=true]]:bg-[var(--ink)] tw:[&[aria-pressed=true]]:text-[var(--paper)]'+focus}>{t(lang,'اليوم ','Day ')}<bdi dir="ltr">{item.number}</bdi></button>)}</div>
      <div id={panelId} className="trip-photo-day-panel">
        <h3 aria-live="polite" aria-atomic="true" className="tw:m-0! tw:mb-[12px]! tw:text-[21px] tw:leading-[1.7]">{t(lang,'اليوم ','Day ')}{current.number}: {current.day.title[lang]}</h3>
        <div className="trip-photo-stops tw:grid tw:grid-cols-2 tw:gap-[14px] tw:[@media(max-width:600px)]:grid-cols-1">{current.stops.map(stop=><Link key={stop.id} href={'/'+lang+'/places/'+stop.id+'/'} className={'trip-photo-stop tw:min-w-0 tw:overflow-hidden tw:rounded-[11px] tw:border tw:border-solid tw:border-[var(--line)] tw:bg-[var(--paper)] tw:text-[var(--ink)]'+focus}>
          {stop.photo?<img src={photoPath(stop.photo,780)} srcSet={[420,780].map(w=>photoPath(stop.photo!,w)+' '+w+'w').join(', ')} sizes="(max-width:600px) 90vw, (max-width:1280px) 45vw, 590px" alt={stop.photo.alt[lang]} width="780" height="520" loading="lazy" className="tw:block tw:h-[190px] tw:w-full tw:object-cover"/>:<span className="trip-photo-no-image tw:flex tw:min-h-[80px] tw:items-center tw:gap-[9px] tw:bg-[var(--tint)] tw:p-[18px] tw:text-[12px] tw:text-[var(--muted)]"><Camera size={21} aria-hidden="true"/>{t(lang,'اقرأ عن المكان','Read about this place')}</span>}
          <span className="tw:flex tw:min-h-[62px] tw:items-center tw:justify-between tw:gap-[12px] tw:p-[14px]"><b className="tw:text-[17px] tw:leading-[1.7]">{stop.place?.name[lang]||stop.id}</b><ArrowUpRight size={17} aria-hidden="true" className="tw:shrink-0"/></span>
        </Link>)}</div>
        <p className="trip-photo-note tw:my-[16px]! tw:text-[12px] tw:leading-[1.95] tw:text-[var(--muted)]">{current.day.note[lang]}</p>
        <Link href={'/'+lang+'/trips/'+trip.id+'/#trip-day-'+current.number} className={'trip-photo-open-day tw:inline-flex tw:min-h-[44px] tw:items-center tw:gap-[9px] tw:text-[13px] tw:text-[var(--ink)] tw:underline tw:underline-offset-4'+focus}>{t(lang,'افتح تفاصيل اليوم','Open this day in the plan')}<ArrowUpRight size={16} aria-hidden="true"/></Link>
      </div>
    </div>
  </details>;
}
