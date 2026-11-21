import {itineraries,places,type Itinerary} from './data';
export const tripPlaceChoices=[...new Set(itineraries.flatMap(trip=>trip.days.flatMap(day=>day.places)))].flatMap(id=>{const place=places.find(p=>p.id===id);return place?[place]:[]});
export function tripPlaceDays(trip:Itinerary,placeId:string){return trip.days.flatMap((day,index)=>day.places.includes(placeId)?[{number:index+1,day}]:[])}
