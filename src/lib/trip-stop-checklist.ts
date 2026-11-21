import{type Itinerary,places}from'./data';
export function tripChecklistStops(trip:Itinerary){return trip.days.flatMap((day,dayIndex)=>day.places.map(id=>({key:`${dayIndex+1}:${id}`,day:dayIndex+1,dayTitle:day.title,id,place:places.find(p=>p.id===id)})))}
export function tripChecklistKey(trip:Itinerary){return 'egypti:trip-stop-checklist:'+trip.id}
export function readTripChecklist(raw:string|null,trip:Itinerary):string[]{let value:unknown;try{value=JSON.parse(raw||'[]')}catch{return[]}if(!Array.isArray(value))return[];const valid=new Set(tripChecklistStops(trip).map(s=>s.key));return[...new Set(value.filter((key):key is string=>typeof key==='string'&&valid.has(key)))]}
