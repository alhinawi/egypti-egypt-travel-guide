import type{Itinerary}from'./data';
export function tripComparisonFacts(trip:Itinerary){return{days:trip.days.length,placeIds:[...new Set(trip.days.flatMap(day=>day.places))],detailed:Boolean(trip.program)}}
export function toggleComparedTrip(selected:string[],id:string){return selected.includes(id)?selected.filter(item=>item!==id):selected.length<2?[...selected,id]:selected}
export function tripStopDifferences(first:Itinerary,second:Itinerary){const a=tripComparisonFacts(first).placeIds,b=tripComparisonFacts(second).placeIds;return{shared:a.filter(id=>b.includes(id)),firstOnly:a.filter(id=>!b.includes(id)),secondOnly:b.filter(id=>!a.includes(id))}}
