import{places}from'./data';
import{placePhotos}from'./photos';
/** Preserve each published difference group's exact place order and photo eligibility. */
export function differencePhotographs(ids:string[]){return ids.flatMap(id=>{const place=places.find(p=>p.id===id),photo=placePhotos[id];return place&&photo&&photo.heroSuitable!==false&&!photo.contextual?[place]:[]})}
