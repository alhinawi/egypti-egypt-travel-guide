import{places,type Place}from'./data';
import{eraNames,placeIndex}from'./encyclopedia';
import{atlasPlaces}from'./photo-atlas';
/** Cross-governorate reading examples using only existing documented era tags. */
export function placeHistoryCollections(id:string){const current=placeIndex[id];if(!current||current.governorate==='north-sinai')return[];return current.eras.flatMap(era=>{if(!eraNames[era])return[];const candidates=atlasPlaces.filter(p=>p.id!==id&&placeIndex[p.id].governorate!==current.governorate&&placeIndex[p.id].eras.includes(era));const picks:Place[]=[],seen=new Set<string>();for(const p of candidates){const area=placeIndex[p.id].governorate;if(!seen.has(area)){picks.push(p);seen.add(area)}if(picks.length===3)break}if(picks.length<3)for(const p of candidates){if(!picks.includes(p))picks.push(p);if(picks.length===3)break}return picks.length?[{era,name:eraNames[era],picks,total:candidates.length}]:[]})}
