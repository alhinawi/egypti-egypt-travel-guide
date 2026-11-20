import{places}from'./data';
import{governorates,placeIndex}from'./encyclopedia';
import{placePhotos}from'./photos';
/** Counts include only known saved places, not trip plans or all catalog entries. */
export function savedPlaceAreas(saved:string[]){const savedIds=new Set(saved.filter(id=>id.startsWith('place:')).map(id=>id.slice(6)));return governorates.flatMap(area=>{const entries=places.filter(p=>savedIds.has(p.id)&&placeIndex[p.id]?.governorate===area.id);if(!entries.length)return[];const cover=entries.find(p=>placePhotos[p.id]&&placePhotos[p.id].heroSuitable!==false&&!placePhotos[p.id].contextual&&area.id!=='north-sinai');return[{id:area.id,name:area.name,count:entries.length,cover}]})}
