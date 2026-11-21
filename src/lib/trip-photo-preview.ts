import {places, type Itinerary} from './data';
import {placePhotos} from './photos';
export function tripPhotoPreview(trip:Itinerary) {
  return trip.days.map((day,index)=>({
    number:index+1,day,
    stops:day.places.map(id=>{
      const place=places.find(p=>p.id===id);
      const candidate=placePhotos[id];
      return {id,place,photo:candidate&&candidate.heroSuitable!==false&&!candidate.contextual?candidate:undefined};
    })
  }));
}
