import{places,itineraries,categoryNames,type Place}from'./data';
import{placeIndex,placeArea,governorates,regions,governorateById,eraNames}from'./encyclopedia';
import{placePhotos}from'./photos';
const eligible=places.filter(p=>{const photo=placePhotos[p.id];return placeIndex[p.id]?.governorate!=='north-sinai'&&photo&&!photo.contextual&&photo.heroSuitable!==false});
/** Interleave governorates so the opening is a cross-section,not a ranking. */
export const atlasPlaces:Place[]=[];const queues=governorates.map(g=>eligible.filter(p=>placeIndex[p.id]?.governorate===g.id));for(let i=0;queues.some(q=>q[i]);i++)for(const queue of queues)if(queue[i])atlasPlaces.push(queue[i]);
export const atlasAreas=governorates.filter(g=>atlasPlaces.some(p=>placeIndex[p.id]?.governorate===g.id));
const normalize=(s:string)=>s.toLowerCase().normalize('NFKD').replace(/[\u064B-\u065F\u0670]/g,'').replace(/[أإآ]/g,'ا').replace(/ى/g,'ي');
export function filterAtlas({q='',area='',category='',region='',era='',trip='',day=''}:{q?:string;area?:string;category?:string;region?:string;era?:string;trip?:string;day?:string}={}){const search=normalize(q.trim()),plan=itineraries.find(t=>t.id===trip),planIds=new Set(plan?.days.flatMap((d,i)=>!day||String(i+1)===day?d.places:[])||[]);return atlasPlaces.filter(p=>(!trip||planIds.has(p.id))&&(!region||governorateById(placeIndex[p.id]?.governorate)?.region===region)&&(!area||placeIndex[p.id]?.governorate===area)&&(!category||p.category===category)&&(!era||placeIndex[p.id]?.eras.includes(era))&&normalize([p.name.ar,p.name.en,placeArea(p).name.ar,placeArea(p).name.en].join(' ')).includes(search))}
export function atlasPhoto(p:Place){return placePhotos[p.id]}

export const atlasRegions=Object.entries(regions).flatMap(([id,name])=>{const entries=filterAtlas({region:id});return entries.length?[{id,name,count:entries.length,cover:entries[0]}]:[]});
export type AtlasFilters={q:string;area:string;category:string;region:string;era?:string;trip?:string;day?:string};
export const emptyAtlasFilters:AtlasFilters={q:'',area:'',category:'',region:''};
export function readAtlasFilters(search:string):AtlasFilters{const p=new URLSearchParams(search);const era=p.get('era')||'',trip=p.get('trip')||'',plan=itineraries.find(t=>t.id===trip),day=p.get('day')||'';const area=p.get('governorate')||'',category=p.get('category')||'',region=p.get('region')||'';return{...(plan?{trip,...(plan.days.some((_,i)=>String(i+1)===day)?{day}:{})}:{}),...(Object.hasOwn(eraNames,era)?{era}:{}),q:(p.get('q')||'').slice(0,120),area:atlasAreas.some(g=>g.id===area)?area:'',category:Object.hasOwn(categoryNames,category)?category:'',region:atlasRegions.some(r=>r.id===region)?region:''}}
export function atlasFilterQuery(filters:AtlasFilters){const p=new URLSearchParams();if(filters.q)p.set('q',filters.q.slice(0,120));if(filters.area)p.set('governorate',filters.area);if(filters.category)p.set('category',filters.category);if(filters.region)p.set('region',filters.region);if(filters.era&&Object.hasOwn(eraNames,filters.era))p.set('era',filters.era);const plan=itineraries.find(t=>t.id===filters.trip);if(plan){p.set('trip',plan.id);if(plan.days.some((_,i)=>String(i+1)===filters.day))p.set('day',filters.day!)}return p.size?'?'+p.toString():''}

export const atlasEras=Object.entries(eraNames).flatMap(([id,name])=>{const entries=filterAtlas({era:id});return entries.length?[{id,name,count:entries.length,cover:entries[0]}]:[]});

export const atlasCategories=Object.entries(categoryNames).flatMap(([id,name])=>{const entries=filterAtlas({category:id});return entries.length?[{id,name,count:entries.length,cover:entries[0]}]:[]});

export const atlasTripCollections=itineraries.flatMap(trip=>{const ids=new Set(trip.days.flatMap(day=>day.places)),photos=atlasPlaces.filter(p=>ids.has(p.id));return photos.length?[{trip,photos,stopCount:ids.size}]:[]});
