import{places,categoryNames,type Category}from'./data';
import{placeIndex,governorates}from'./encyclopedia';
import{placePhotos}from'./photos';
export function categoryEntries(category:string,area=''){return category in categoryNames?places.filter(p=>p.category===category&&(!area||placeIndex[p.id]?.governorate===area)):[]}
export function categoryAreas(category:string){return governorates.flatMap(g=>{const count=categoryEntries(category,g.id).length;return count?[{id:g.id,name:g.name,count}]:[]})}
/** Suitable source-photo reading examples, never a distance or best-of ranking. */
export function categoryPhotoPicks(category:Category,area=''){const candidates=categoryEntries(category,area).filter(p=>placeIndex[p.id]?.governorate!=='north-sinai'&&placePhotos[p.id]&&!placePhotos[p.id].contextual&&placePhotos[p.id].heroSuitable!==false),chosen:typeof places=[];const seen=new Set<string>();for(const p of candidates){const id=placeIndex[p.id]?.governorate;if(!seen.has(id)){chosen.push(p);seen.add(id)}if(chosen.length===3)return chosen}for(const p of candidates){if(!chosen.includes(p))chosen.push(p);if(chosen.length===3)break}return chosen}
