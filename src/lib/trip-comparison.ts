import type{Itinerary}from'./data';
export function tripComparisonFacts(trip:Itinerary){return{days:trip.days.length,placeIds:[...new Set(trip.days.flatMap(day=>day.places))],detailed:Boolean(trip.program)}}
export function toggleComparedTrip(selected:string[],id:string){return selected.includes(id)?selected.filter(item=>item!==id):selected.length<2?[...selected,id]:selected}
