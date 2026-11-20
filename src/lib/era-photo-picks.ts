import{places}from'./data';
import{placeIndex,eraNames}from'./encyclopedia';
import{placePhotos}from'./photos';
/** Reading examples drawn only from the existing documented era classification. */
export function eraPhotoPicks(era:string){if(!eraNames[era])return[];const candidates=places.filter(p=>placeIndex[p.id]?.eras.includes(era)&&placeIndex[p.id].governorate!=='north-sinai'&&placePhotos[p.id]&&placePhotos[p.id].heroSuitable!==false&&!placePhotos[p.id].contextual),selected:typeof places=[];const areas=new Set<string>();for(const place of candidates){const area=placeIndex[place.id].governorate;if(!areas.has(area)){selected.push(place);areas.add(area)}if(selected.length===3)return selected}for(const place of candidates){if(!selected.includes(place))selected.push(place);if(selected.length===3)break}return selected}
export function eraEntryCount(era:string){return eraNames[era]?places.filter(p=>placeIndex[p.id]?.eras.includes(era)).length:0}
