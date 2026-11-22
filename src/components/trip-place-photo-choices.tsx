'use client';
import{useEffect,useRef,useState}from'react';
import{Camera,Check,ChevronDown,MapPin}from'lucide-react';
import{useGuide,t}from'./guide-provider';
import{tripPlaceChoices}from'@/lib/trip-place-finder';
import{placePhotos,photoPath,type PlacePhoto}from'@/lib/photos';
const focus=' tw:focus-visible:outline-[3px]! tw:focus-visible:outline-solid! tw:focus-visible:outline-[var(--ink)]! tw:focus-visible:outline-offset-[3px]!';
const photographed=tripPlaceChoices.filter(place=>{const photo=placePhotos[place.id];return photo&&photo.heroSuitable!==false&&!photo.contextual});
export function TripPlacePhotoChoices({placeId,ready,onChange}:{placeId:string;ready:boolean;onChange:(id:string)=>void}){
 const{lang}=useGuide(),[expanded,setExpanded]=useState(false),expander=useRef<HTMLButtonElement>(null),initial=photographed.slice(0,6),selected=photographed.find(place=>place.id===placeId),outside=!!selected&&!initial.some(place=>place.id===placeId),visible=expanded?photographed:outside?[...initial.slice(0,5),selected!]:initial;
 if(!photographed.length)return null;
 return <section className="trip-place-photo-choices tw:mt-[19px] tw:text-[var(--ink)]" aria-labelledby="trip-place-photo-title">
  <h3 id="trip-place-photo-title" className="tw:m-0! tw:flex tw:items-center tw:gap-[8px] tw:text-[20px]! tw:leading-[1.7]!"><Camera size={19} aria-hidden="true"/>{t(lang,'ابدأ من صورة مكان','Start with a place photograph')}</h3>
  <p className="trip-place-photo-coverage tw:mt-[8px]! tw:mb-[14px]! tw:text-[11px] tw:leading-[1.9] tw:text-[var(--muted)]"><bdi dir="ltr">{photographed.length} / {tripPlaceChoices.length}</bdi> {t(lang,'من الأماكن المكتوبة في الخطط ليها صور مناسبة. اختار صورة لفلترة الخطط، أو استخدم القائمة فوق لكل الأماكن.','places listed in the plans have suitable photographs. Choose a photograph to filter plans, or use the list above for every place.')}</p>
  <div id="trip-place-photo-grid" className="trip-place-photo-grid tw:grid tw:grid-cols-3 tw:items-stretch tw:gap-[12px] tw:px-[4px] tw:pt-[4px] tw:pb-[5px] tw:[@media(max-width:600px)]:grid-cols-2! tw:[@media(max-width:600px)]:gap-[10px]!">
   {visible.map(place=><button key={place.id} type="button" data-place={place.id} disabled={!ready} aria-pressed={placeId===place.id} aria-controls="trip-finder-results" aria-label={t(lang,'اعرض الخطط اللي فيها ','Find plans including ')+place.name[lang]} onClick={()=>{const clear=placeId===place.id;onChange(clear?'':place.id);if(clear&&!expanded&&outside)requestAnimationFrame(()=>expander.current?.focus({preventScroll:true}))}} className={'trip-place-photo-choice tw:flex tw:min-w-0 tw:flex-col tw:overflow-hidden tw:rounded-[11px] tw:border! tw:border-solid! tw:border-[var(--line)]! tw:bg-[var(--paper)] tw:p-0! tw:text-start tw:text-[var(--ink)] tw:[&[aria-pressed=true]]:border-[var(--ink)]! tw:[&[aria-pressed=true]]:[box-shadow:0_0_0_1px_var(--ink)] tw:disabled:cursor-wait'+focus}>
    <ChoicePhotograph photo={placePhotos[place.id]}/>
    <span className="tw:flex tw:w-full tw:flex-1 tw:items-center tw:justify-between tw:gap-[8px] tw:px-[12px] tw:py-[11px] tw:text-[12px] tw:leading-[1.8] tw:[@media(max-width:600px)]:px-[9px]!">{place.name[lang]}{placeId===place.id&&<Check size={17} aria-hidden="true" className="tw:shrink-0"/>}</span>
   </button>)}
  </div>
  <div className="tw:mt-[10px] tw:flex tw:flex-wrap tw:items-center tw:justify-between tw:gap-[10px]">
   <p className="trip-place-photo-count tw:m-0! tw:text-[11px] tw:leading-[1.8] tw:text-[var(--muted)]"><bdi dir="ltr">{visible.length} / {photographed.length}</bdi> {t(lang,'صور معروضة','photographs shown')}</p>
   {photographed.length>6&&<button ref={expander} className={'trip-place-photo-expand tw:inline-flex tw:min-h-[44px] tw:items-center tw:gap-[8px] tw:rounded-[9px] tw:border! tw:border-solid! tw:border-[var(--line)]! tw:bg-[var(--paper)] tw:px-[13px] tw:py-[9px] tw:text-[12px] tw:leading-[1.8] tw:text-[var(--ink)]'+focus} type="button" disabled={!ready} aria-expanded={expanded} aria-controls="trip-place-photo-grid" onClick={()=>setExpanded(!expanded)}>{expanded?t(lang,'صور أقل','Show fewer photographs'):t(lang,'اعرض كل الصور (','Show all photographs (')+photographed.length+')'}<ChevronDown size={17} aria-hidden="true" className={expanded?'tw:rotate-180':''}/></button>}
  </div>
 </section>
}
function ChoicePhotograph({photo}:{photo:PlacePhoto}){const{lang}=useGuide(),[failed,setFailed]=useState(false),image=useRef<HTMLImageElement>(null);useEffect(()=>{const node=image.current;if(node?.complete&&!node.naturalWidth)setFailed(true)},[]);return failed?<span className="trip-place-photo-failed tw:flex tw:h-[130px] tw:w-full tw:items-center tw:justify-center tw:bg-[var(--tint)] tw:text-[var(--muted)] tw:[@media(max-width:600px)]:h-[110px]!" aria-hidden="true"><MapPin size={28}/></span>:<img ref={image} src={photoPath(photo,420)} alt={photo.alt[lang]} width="420" height="280" loading="lazy" onError={()=>setFailed(true)} className="tw:block tw:h-[130px] tw:w-full tw:object-cover tw:[@media(max-width:600px)]:h-[110px]!"/>}
