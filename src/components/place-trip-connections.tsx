'use client';
import Link from'next/link';
import{Route,ArrowUpRight,CalendarDays}from'lucide-react';
import{useGuide,t}from'./guide-provider';
import{tripsIncludingPlace}from'@/lib/place-trip-connections';
import{tripPhotoPreview,tripDayPhotographs}from'@/lib/trip-photo-preview';
import{placePhotos,photoPath}from'@/lib/photos';
const focus=' tw:focus-visible:outline-[3px]! tw:focus-visible:outline-solid! tw:focus-visible:outline-[var(--ink)]! tw:focus-visible:outline-offset-[3px]!';
export function PlaceTripConnections({placeId}:{placeId:string}){
 const{lang}=useGuide(),items=tripsIncludingPlace(placeId);if(!items.length)return null;
 return <section className="place-trip-connections tw:mt-[38px] tw:mb-[32px] tw:print:hidden" aria-labelledby="place-trip-connections-title">
  <div className="tw:mb-[12px] tw:flex tw:items-center tw:gap-[10px] tw:text-[var(--ink)]"><Route size={23} aria-hidden="true" className="tw:shrink-0"/><h2 id="place-trip-connections-title" className="tw:text-[25px] tw:leading-[1.6]">{t(lang,'المكان ده في خططنا','Find this place in a trip plan')}</h2></div>
  <p className="tw:mb-[20px] tw:text-[13px] tw:leading-[1.9] tw:text-[var(--muted)]">{t(lang,'شوف اليوم اللي فيه المكان جوّه خططنا المنشورة. دي اقتراحات للتخطيط، مش حجوزات أو تأكيد لإتاحة الزيارة.','Open the day that includes this place in our published plans. Planning suggestions, not bookings or confirmation of access.')}</p>
  <div className="place-trip-layout"><div className={'place-trip-grid tw:grid tw:items-start tw:gap-[20px] '+(items.length===1?'tw:grid-cols-1':'tw:grid-cols-2 tw:[@media(max-width:700px)]:grid-cols-1')}>{items.map(({trip,days})=>{
   const previews=tripPhotoPreview(trip);
   return <article key={trip.id} data-trip={trip.id} className="place-trip-card tw:min-w-0 tw:overflow-hidden tw:rounded-[16px] tw:border tw:border-solid tw:border-[var(--line)] tw:bg-[var(--paper)] tw:text-[var(--ink)]">
    <header className="place-trip-identity tw:p-[22px] tw:[@media(max-width:600px)]:p-[17px]"><p className="tw:mb-[9px] tw:flex tw:items-center tw:gap-[7px] tw:text-[12px] tw:leading-[1.9] tw:text-[var(--muted)]"><CalendarDays size={16} aria-hidden="true" className="tw:shrink-0"/>{trip.days.length} {t(lang,trip.days.length===1?'يوم':'أيام',trip.days.length===1?'day':'days')} · {trip.program?t(lang,'برنامج يوم بيوم','Day-by-day programme'):t(lang,'فكرة مختصرة','Short outline')}</p><h3 className="tw:m-0! tw:text-[23px]! tw:leading-[1.65]! tw:text-[var(--ink)]">{trip.title[lang]}</h3></header>
    <div className="place-trip-day-links tw:flex tw:flex-col tw:gap-[18px] tw:px-[22px] tw:pb-[22px] tw:[@media(max-width:600px)]:px-[17px] tw:[@media(max-width:600px)]:pb-[17px]">{days.map(({number,day})=>{
     const photographs=tripDayPhotographs(previews[number-1]).slice(0,3);
     return <Link key={number} data-day={number} className={'place-trip-day-entry tw:block tw:min-h-[48px] tw:overflow-hidden tw:rounded-[11px] tw:border tw:border-solid tw:border-[var(--line)] tw:bg-[var(--paper)] tw:text-[var(--ink)]'+focus} aria-label={t(lang,'افتح اليوم ','Open day ')+number+': '+day.title[lang]+' · '+trip.title[lang]} href={'/'+lang+'/trips/'+trip.id+'/#trip-day-'+number}>
      <div className="place-trip-day-heading tw:flex tw:min-h-[64px] tw:items-center tw:justify-between tw:gap-[12px] tw:p-[15px] tw:text-[14px] tw:leading-[1.9]"><span><b className="tw:me-[7px]">{t(lang,'اليوم ','Day ')}{number}</b>{day.title[lang]}</span><ArrowUpRight size={18} aria-hidden="true" className="tw:shrink-0"/></div>
      {photographs.length>0&&<div role="group" aria-label={t(lang,'صور من الأماكن المذكورة في اليوم ده','Photographs from places named in this day')} className={'place-trip-day-photos tw:grid tw:h-[220px] tw:gap-[6px] '+(photographs.length===3?'tw:grid-cols-[1.3fr_1fr] tw:grid-rows-2':photographs.length===2?'tw:grid-cols-2':'tw:grid-cols-1')}>{photographs.map((place,index)=>{const photo=placePhotos[place.id];return <div key={place.id} data-place={place.id} className={'place-trip-day-scene tw:min-w-0 tw:overflow-hidden '+(photographs.length===3&&index===0?'tw:row-span-2':'')}><img src={photoPath(photo,780)} srcSet={[420,780,1400].map(w=>photoPath(photo,w)+' '+w+'w').join(', ')} sizes={photographs.length===1?(items.length===1?'(max-width:1280px) 100vw, 1160px':'(max-width:700px) 100vw, (max-width:1280px) 50vw, 550px'):(items.length===1?'(max-width:1280px) 55vw, 640px':'(max-width:700px) 55vw, (max-width:1280px) 28vw, 320px')} alt={photo.alt[lang]} width="780" height="520" loading="lazy" className="tw:block tw:h-full tw:w-full tw:object-cover"/></div>})}</div>}
     </Link>;
    })}</div>
   </article>;
  })}</div></div>
 </section>;
}
