import{governorates,regions}from'./encyclopedia';
import{governorateGallery}from'./governorate-gallery';
export type GovernorateDirectoryState={q:string;region:string};
export const normalizeGovernorateName=(s:string)=>s.toLowerCase().normalize('NFKD').replace(/[\u064B-\u065F\u0670\u0640]/g,'').replace(/[أإآ]/g,'ا').replace(/ى/g,'ي');
export function filterGovernorates({q='',region=''}:Partial<GovernorateDirectoryState>={}){return governorates.filter(g=>(!region||g.region===region)&&normalizeGovernorateName(g.name.ar+' '+g.name.en).includes(normalizeGovernorateName(q.trim().slice(0,120))))}
export function readGovernorateDirectory(search:string):GovernorateDirectoryState{const p=new URLSearchParams(search),r=p.get('region')||'';return{q:(p.get('q')||'').slice(0,120),region:Object.hasOwn(regions,r)?r:''}}
export function governorateDirectoryQuery({q,region}:GovernorateDirectoryState){const p=new URLSearchParams();if(q.trim())p.set('q',q.trim().slice(0,120));if(region&&Object.hasOwn(regions,region))p.set('region',region);return p.size?'?'+p.toString():''}
/** One already-published governorate hero illustrates a browsing group, not its full geography. */
export const governorateRegionChoices=Object.entries(regions).map(([id,name])=>{const members=governorates.filter(g=>g.region===id);return{id,name,members,cover:members.find(g=>g.id!=='north-sinai'&&governorateGallery(g.id).length)||members[0]}});
