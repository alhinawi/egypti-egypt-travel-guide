import{atlasPlaces}from'./photo-atlas';
export const ATLAS_COMPARE_LIMIT=3;
export function toggleAtlasComparison(ids:string[],id:string){const known=ids.filter((v,i)=>atlasPlaces.some(p=>p.id===v)&&ids.indexOf(v)===i).slice(0,ATLAS_COMPARE_LIMIT);if(known.includes(id))return known.filter(v=>v!==id);return atlasPlaces.some(p=>p.id===id)&&known.length<ATLAS_COMPARE_LIMIT?[...known,id]:known}
