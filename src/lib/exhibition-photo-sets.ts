import type{Place}from'./data';
export const EXHIBITION_SET_SIZE=5;
/** Bounded pages over the existing photo order, no duplication or new ranking. */
export function exhibitionPhotoSet(places:Place[],requested=0){const sets=Math.ceil(places.length/EXHIBITION_SET_SIZE),index=Math.min(Math.max(0,Number.isFinite(requested)?Math.floor(requested):0),Math.max(0,sets-1)),start=index*EXHIBITION_SET_SIZE,picks=places.slice(start,start+EXHIBITION_SET_SIZE);return{index,sets,picks,first:picks.length?start+1:0,last:start+picks.length,total:places.length,hasPrevious:index>0,hasNext:index+1<sets}}
