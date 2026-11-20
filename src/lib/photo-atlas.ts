import{places,type Place}from'./data';
import{placeIndex,placeArea,governorates}from'./encyclopedia';
import{placePhotos}from'./photos';
const eligible=places.filter(p=>{const photo=placePhotos[p.id];return placeIndex[p.id]?.governorate!=='north-sinai'&&photo&&!photo.contextual&&photo.heroSuitable!==false});
/** Interleave governorates so the opening is a cross-section,not a ranking. */
export const atlasPlaces:Place[]=[];const queues=governorates.map(g=>eligible.filter(p=>placeIndex[p.id]?.governorate===g.id));for(let i=0;queues.some(q=>q[i]);i++)for(const queue of queues)if(queue[i])atlasPlaces.push(queue[i]);
export const atlasAreas=governorates.filter(g=>atlasPlaces.some(p=>placeIndex[p.id]?.governorate===g.id));
const normalize=(s:string)=>s.toLowerCase().normalize('NFKD').replace(/[\u064B-\u065F\u0670]/g,'').replace(/[أإآ]/g,'ا').replace(/ى/g,'ي');
export function filterAtlas({q='',area='',category=''}:{q?:string;area?:string;category?:string}={}){const search=normalize(q.trim());return atlasPlaces.filter(p=>(!area||placeIndex[p.id]?.governorate===area)&&(!category||p.category===category)&&normalize([p.name.ar,p.name.en,placeArea(p).name.ar,placeArea(p).name.en].join(' ')).includes(search))}
export function atlasPhoto(p:Place){return placePhotos[p.id]}
