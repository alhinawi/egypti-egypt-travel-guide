import {places,itineraries,categoryNames,type Bilingual} from './data';
import {governorates,placeArea,regions} from './encyclopedia';
import profiles from './encyclopedia/governorate-profiles.json';
import {normalizeGuideSearch,type GuideSearchEntry} from './guide-search';
export type MatchFieldKind='title'|'description'|'governorate'|'category'|'region'|'capital'|'day'|'place'|'duration';
export type MatchField={kind:MatchFieldKind;lang:'ar'|'en';text:string};
export type MatchExcerpt=MatchField&{parts:{text:string;match:boolean}[];before:boolean;after:boolean};
/** These are exactly the fields already indexed by guide-search, in the same order. */
export function guideSearchFields(entry:GuideSearchEntry):MatchField[]{
 const fields:MatchField[]=[];
 const add=(kind:MatchFieldKind,value:Bilingual)=>{for(const lang of ['ar','en'] as const)fields.push({kind,lang,text:value[lang]})};
 if(entry.kind==='places'){
  const p=places.find(p=>p.id===entry.id);if(!p)return fields;
  add('title',p.name);add('description',p.description);add('governorate',placeArea(p).name);add('category',categoryNames[p.category]);
 }else if(entry.kind==='governorates'){
  const g=governorates.find(g=>g.id===entry.id);if(!g)return fields;
  const p=profiles[g.id as keyof typeof profiles];
  add('title',g.name);add('region',regions[g.region]);add('capital',p.capital);add('description',p.overview);
 }else{
  const trip=itineraries.find(t=>t.id===entry.id);if(!trip)return fields;
  add('title',trip.title);for(const day of trip.days)add('day',day.title);
  for(const id of new Set(trip.days.flatMap(d=>d.places))){const p=places.find(p=>p.id===id);if(p){add('place',p.name);add('governorate',placeArea(p).name)}}
  fields.push({kind:'duration',lang:'en',text:String(trip.days.length)});
 }
 return fields;
}
/** Map normalized matches back to original spelling. Never interpret a query as markup or a regular expression. */
export function guideSearchExcerpt(field:MatchField,words:string[]):MatchExcerpt|undefined{
 let normalized='';const map:{start:number;end:number}[]=[];let offset=0;
 for(const char of field.text){const n=normalizeGuideSearch(char);normalized+=n;for(let i=0;i<n.length;i++)map.push({start:offset,end:offset+char.length});offset+=char.length}
 const ranges:{start:number;end:number}[]=[];
 for(const word of words){if(!word)continue;let from=0,index=-1;while((index=normalized.indexOf(word,from))!==-1){ranges.push({start:map[index].start,end:map[index+word.length-1].end});from=index+Math.max(1,word.length)}}
 ranges.sort((a,b)=>a.start-b.start||b.end-a.end);if(!ranges.length)return;
 let start=Math.max(0,ranges[0].start-32),end=Math.min(field.text.length,Math.max(start+180,ranges[0].end));
 if(start>0&&/[\uDC00-\uDFFF]/.test(field.text[start]))start--;
 if(end<field.text.length&&/[\uDC00-\uDFFF]/.test(field.text[end]))end++;
 const merged:{start:number;end:number}[]=[];
 for(const range of ranges.filter(r=>r.start>=start&&r.end<=end)){const last=merged.at(-1);if(last&&range.start<=last.end)last.end=Math.max(last.end,range.end);else merged.push({...range})}
 const parts:{text:string;match:boolean}[]=[];let cursor=start;
 for(const range of merged){if(range.start>cursor)parts.push({text:field.text.slice(cursor,range.start),match:false});parts.push({text:field.text.slice(range.start,range.end),match:true});cursor=range.end}
 if(cursor<end)parts.push({text:field.text.slice(cursor,end),match:false});
 return {...field,text:field.text.slice(start,end),parts,before:start>0,after:end<field.text.length};
}
/** At most three literal evidence excerpts, preferring the reader's language. Search results themselves never change. */
export function guideSearchMatches(entry:GuideSearchEntry,query:string,lang:'ar'|'en'):MatchExcerpt[]{
 const remaining=new Set(normalizeGuideSearch(query.trim().slice(0,120)).split(/\s+/).filter(Boolean)),result:MatchExcerpt[]=[];
 const fields=guideSearchFields(entry).sort((a,b)=>Number(b.lang===lang)-Number(a.lang===lang));
 for(const field of fields){if(!remaining.size||result.length===3)break;const excerpt=guideSearchExcerpt(field,[...remaining]);if(!excerpt)continue;result.push(excerpt);
  const shown=normalizeGuideSearch(excerpt.text);for(const word of remaining)if(shown.includes(word))remaining.delete(word);
 }
 return result;
}
