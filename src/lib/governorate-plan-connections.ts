import{itineraries,places}from'./data';
import{governorateById,placeIndex}from'./encyclopedia';
import{placePhotos}from'./photos';
/** Published membership only. Original plan/day/stop order is not a route calculation. */
export function governoratePlanConnections(id:string){
 if(!governorateById(id))return[];
 const usedCovers=new Set<string>();
 return itineraries.flatMap(trip=>{
  const days=trip.days.flatMap((day,index)=>{const matching=day.places.filter(placeId=>placeIndex[placeId]?.governorate===id&&places.some(p=>p.id===placeId));return matching.length?[{number:index+1,day,placeIds:[...new Set(matching)]}]:[]});
  if(!days.length)return[];
  const placeIds=[...new Set(days.flatMap(day=>day.placeIds))],matchedPlaces=placeIds.map(placeId=>places.find(p=>p.id===placeId)!);
  const covers=matchedPlaces.filter(p=>{const photo=placePhotos[p.id];return photo&&photo.heroSuitable!==false&&!photo.contextual});
  const cover=covers.find(p=>!usedCovers.has(p.id))||covers[0];if(cover)usedCovers.add(cover.id);
  return[{trip,days,placeIds,places:matchedPlaces,cover}];
 });
}
