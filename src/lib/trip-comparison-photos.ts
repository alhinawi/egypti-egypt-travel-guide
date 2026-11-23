import type{Itinerary}from'./data';
import{tripPhotoPreview}from'./trip-photo-preview';
/** Distinct suitable photographs in first listed order, linked to their first published day. */
export function tripComparisonPhotographs(trip:Itinerary){const seen=new Set<string>();return tripPhotoPreview(trip).flatMap(day=>day.stops.flatMap(stop=>{if(seen.has(stop.id))return[];seen.add(stop.id);return stop.place&&stop.photo?[{place:stop.place,photo:stop.photo,day:day.number}]:[]}))}

/** Preserve first-listed distinct order, bounded to three photographed articles per set. */
export function tripComparisonPhotographSet(trip:Itinerary,rawIndex=0){const entries=tripComparisonPhotographs(trip),sets=Math.ceil(entries.length/3),index=Number.isFinite(rawIndex)?Math.max(0,Math.min(Math.trunc(rawIndex),Math.max(0,sets-1))):0,picks=entries.slice(index*3,index*3+3);return{picks,index,sets,total:entries.length,first:picks.length?index*3+1:0,last:index*3+picks.length,hasPrevious:index>0,hasNext:index+1<sets}}
