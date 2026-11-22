import{itineraries,type Itinerary,type Lang}from'./data';
import{tripPhotoPreview}from'./trip-photo-preview';
export function focusedTripDay(trip:Itinerary|undefined,raw:string){
 if(!trip||!/^\d+$/.test(raw))return null;
 const number=Number(raw);if(!Number.isSafeInteger(number)||String(number)!==raw||number<1||number>trip.days.length)return null;
 const preview=tripPhotoPreview(trip)[number-1];
 return{...preview,cover:preview.stops.find(stop=>stop.photo)?.photo,sources:[...new Set([...(trip.program?.sources||[]),...preview.stops.flatMap(stop=>stop.place?.source?[stop.place.source]:[])])]};
}
export const focusedTripDayParams=()=>itineraries.flatMap(trip=>trip.days.map((_,index)=>({id:trip.id,day:String(index+1)})));
export const focusedTripDayPath=(lang:Lang,id:string,number:number)=>'/'+lang+'/trips/'+id+'/days/'+number+'/';
