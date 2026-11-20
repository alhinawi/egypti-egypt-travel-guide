import{itineraries}from'./data';
export function tripsIncludingPlace(placeId:string){return itineraries.flatMap(trip=>{const days=trip.days.flatMap((day,index)=>day.places.includes(placeId)?[{number:index+1,day}]:[]);return days.length?[{trip,days}]:[]})}
