import{places}from'./data';
import{placeIndex,vibeNames}from'./encyclopedia';
import{placePhotos}from'./photos';
/** Photographic reading examples, not rankings or a travel route. */
export function vibePhotoPicks(vibe:string){if(!vibeNames[vibe])return[];const candidates=places.filter(p=>placeIndex[p.id]?.vibes.includes(vibe)&&placeIndex[p.id].governorate!=='north-sinai'&&placePhotos[p.id]&&placePhotos[p.id].heroSuitable!==false&&!placePhotos[p.id].contextual),selected:typeof places=[];const regions=new Set<string>();for(const place of candidates){const governorate=placeIndex[place.id].governorate;if(!regions.has(governorate)){selected.push(place);regions.add(governorate)}if(selected.length===3)return selected}for(const place of candidates){if(!selected.includes(place))selected.push(place);if(selected.length===3)break}return selected}
