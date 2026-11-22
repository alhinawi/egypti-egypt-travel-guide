import{destinations,places,type Bilingual}from'./data';
import{placePhotos,galleryPhotos,type PlacePhoto}from'./photos';
import galleries from'./place-galleries.json';
import profiles from'./encyclopedia/governorate-profiles.json';
import{governorates}from'./encyclopedia';

export type CreditGuideContext={kind:'place'|'destination'|'governorate';path:string;name:Bilingual};
export function creditSourceKey(source:string){try{return decodeURIComponent(source)}catch{return source}}
const contexts=new Map<string,CreditGuideContext[]>();
function add(source:string,context:CreditGuideContext){if(!source)return;const key=creditSourceKey(source),rows=contexts.get(key)||[];if(!rows.some(row=>row.path===context.path))rows.push(context);contexts.set(key,rows)}
for(const place of places){const context:CreditGuideContext={kind:'place',path:'/places/'+place.id+'/',name:place.name};const photos:PlacePhoto[]=[placePhotos[place.id],...((galleries as Record<string,string[]>)[place.id]||[]).map(id=>galleryPhotos[id])].filter(Boolean);for(const photo of photos)add(photo.source,context)}
for(const destination of destinations)add(destination.photoSource,{kind:'destination',path:'/destinations/'+destination.id+'/',name:destination.name});
for(const governorate of governorates){const profile=profiles[governorate.id as keyof typeof profiles];if(!profile)continue;const context:CreditGuideContext={kind:'governorate',path:'/governorates/'+governorate.id+'/',name:governorate.name};for(const id of[profile.hero_photo_id,...profile.detail_photo_ids]){const photo=galleryPhotos[id];if(photo)add(photo.source,context)}}
/** Exact source membership in published cover/gallery records, not every use on the site. */
export function creditGuideContexts(source:string):readonly CreditGuideContext[]{return contexts.get(creditSourceKey(source))||[]}
