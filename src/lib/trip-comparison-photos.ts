import type{Itinerary}from'./data';
import{tripPhotoPreview}from'./trip-photo-preview';
/** Distinct suitable photographs in first listed order, linked to their first published day. */
export function tripComparisonPhotographs(trip:Itinerary){const seen=new Set<string>();return tripPhotoPreview(trip).flatMap(day=>day.stops.flatMap(stop=>{if(seen.has(stop.id))return[];seen.add(stop.id);return stop.place&&stop.photo?[{place:stop.place,photo:stop.photo,day:day.number}]:[]}))}
