import{places,categoryNames,type Place}from'./data';
import{placeIndex,placeArea}from'./encyclopedia';
import{placePhotos}from'./photos';
/** Reference-only North Sinai articles are not promoted as ordinary trip choices. */
export const placeComparisonChoices=places.filter(place=>placeIndex[place.id]?.governorate!=='north-sinai');
const allowed=new Set(placeComparisonChoices.map(place=>place.id));
export function cleanPlaceComparison(ids:string[]){return [...new Set(ids)].filter(id=>allowed.has(id)).slice(0,2)}
export function readPlaceComparison(search:string){return cleanPlaceComparison(new URLSearchParams(search).getAll('place'))}
export function placeComparisonQuery(ids:string[]){const query=new URLSearchParams(cleanPlaceComparison(ids).map(id=>['place',id]));return query.size?'?'+query.toString():''}
export function chooseComparedPlace(ids:string[],id:string,slot:number){const current=cleanPlaceComparison(ids),target=Math.min(Math.max(0,Math.floor(slot)||0),current.length,1);if(!allowed.has(id)||current.some((other,index)=>other===id&&index!==target))return current;const next=current.slice();next[target]=id;return cleanPlaceComparison(next)}
export function comparisonPhoto(place:Place){const photo=placePhotos[place.id];return photo&&!photo.contextual&&photo.heroSuitable!==false?photo:undefined}
const normalize=(value:string)=>value.toLowerCase().normalize('NFKD').replace(/[\u064B-\u065F\u0670\u0640]/g,'').replace(/[أإآ]/g,'ا').replace(/ى/g,'ي');
/** Stable catalogue order, not a best-of, distance or recommendation ranking. */
export function findComparisonPlaces(query:string){const words=normalize(query.trim().slice(0,120)).split(/\s+/).filter(Boolean);return placeComparisonChoices.filter(place=>{const area=placeArea(place),text=normalize([place.name.ar,place.name.en,area.name.ar,area.name.en,categoryNames[place.category].ar,categoryNames[place.category].en].join(' '));return words.every(word=>text.includes(word))})}
