import{filterAtlas}from'./photo-atlas';
import{governorateById}from'./encyclopedia';
/** Existing governorate atlas order, three photographed articles at a time. */
export function governoratePhotographSet(id:string,rawIndex=0){const entries=governorateById(id)?filterAtlas({area:id}):[],sets=Math.ceil(entries.length/3),index=Number.isFinite(rawIndex)?Math.max(0,Math.min(Math.trunc(rawIndex),Math.max(0,sets-1))):0,picks=entries.slice(index*3,index*3+3);return{picks,index,sets,total:entries.length,first:picks.length?index*3+1:0,last:index*3+picks.length,hasPrevious:index>0,hasNext:index+1<sets}}
