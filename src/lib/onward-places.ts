import{places,type Place}from'./data';
import{placeIndex}from'./encyclopedia';
import{placePhotos}from'./photos';
/** Editorial reading links, not a distance ranking or a suggested route. */
export function onwardPlaces(place:Place):Place[]{const current=placeIndex[place.id];if(!current||current.governorate==='north-sinai')return[];return places.filter(p=>p.id!==place.id&&placeIndex[p.id]?.governorate===current.governorate&&placePhotos[p.id]&&placePhotos[p.id].heroSuitable!==false&&!placePhotos[p.id].contextual).map((p,index)=>({p,index,score:placeIndex[p.id].vibes.filter(v=>current.vibes.includes(v)).length})).sort((a,b)=>b.score-a.score||a.index-b.index).slice(0,6).map(x=>x.p)}
