import{governorates,placesInGovernorate}from'./encyclopedia';
import{categoryNames}from'./data';
import{filterAtlas}from'./photo-atlas';
export type GovernoratePair={left:string;right:string};
export const defaultGovernoratePair:GovernoratePair={left:'cairo',right:'alexandria'};
export function readGovernoratePair(search:string):GovernoratePair{const p=new URLSearchParams(search);const valid=(id:string|null)=>governorates.some(g=>g.id===id);const left=valid(p.get('left'))?p.get('left')!:defaultGovernoratePair.left;let right=valid(p.get('right'))?p.get('right')!:defaultGovernoratePair.right;if(left===right)right=governorates.find(g=>g.id!==left)!.id;return{left,right}}
export function governoratePairQuery(pair:GovernoratePair){const safe=readGovernoratePair(new URLSearchParams(pair).toString());return'?'+new URLSearchParams(safe).toString()}
export function governorateCoverage(id:string){const entries=placesInGovernorate(id),photos=filterAtlas({area:id});return{entries,photos,categories:Object.entries(categoryNames).map(([category,name])=>({id:category,name,count:entries.filter(p=>p.category===category).length})).filter(c=>c.count>0)}}
