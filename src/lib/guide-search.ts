import{places,itineraries,categoryNames,type Bilingual}from'./data';
import{governorates,placeArea,regions}from'./encyclopedia';
import{placePhotos,galleryPhotos,type PlacePhoto}from'./photos';
import profiles from'./encyclopedia/governorate-profiles.json';
export type GuideSearchKind='all'|'places'|'governorates'|'plans';
export type GuideSearchState={q:string;kind:GuideSearchKind};
export type GuideSearchEntry={id:string;kind:Exclude<GuideSearchKind,'all'>;title:Bilingual;description:Bilingual;path:string;photo?:PlacePhoto;search:string};
export const normalizeGuideSearch=(s:string)=>s.toLowerCase().normalize('NFKD').replace(/[\u064B-\u065F\u0670\u0640]/g,'').replace(/[أإآ]/g,'ا').replace(/ى/g,'ي');
const eligible=(p?:PlacePhoto)=>p&&!p.contextual&&p.heroSuitable!==false?p:undefined;
export const guideSearchEntries:GuideSearchEntry[]=[
 ...places.map(p=>({id:p.id,kind:'places' as const,title:p.name,description:p.description,path:'/places/'+p.id+'/',photo:eligible(placePhotos[p.id]),search:[p.name.ar,p.name.en,p.description.ar,p.description.en,placeArea(p).name.ar,placeArea(p).name.en,categoryNames[p.category].ar,categoryNames[p.category].en].join(' ')})),
 ...governorates.map(g=>{const profile=profiles[g.id as keyof typeof profiles];return{id:g.id,kind:'governorates' as const,title:g.name,description:{ar:profile.overview.ar,en:profile.overview.en},path:'/governorates/'+g.id+'/',photo:eligible(galleryPhotos[profile.hero_photo_id]),search:[g.name.ar,g.name.en,regions[g.region].ar,regions[g.region].en,profile.capital.ar,profile.capital.en,profile.overview.ar,profile.overview.en].join(' ')}}),
 ...itineraries.map(trip=>{const ids=[...new Set(trip.days.flatMap(d=>d.places))],stops=ids.map(id=>places.find(p=>p.id===id)).filter(p=>!!p),cover=stops.map(p=>eligible(placePhotos[p.id])).find(Boolean),days=trip.days.length;return{id:trip.id,kind:'plans' as const,title:trip.title,description:{ar:days+' يوم · '+ids.length+' أماكن مختلفة مسمّاة في الخطة المنشورة',en:days+' days · '+ids.length+' distinct named places in the published plan'},path:'/trips/'+trip.id+'/',photo:cover,search:[trip.title.ar,trip.title.en,...trip.days.flatMap(d=>[d.title.ar,d.title.en]),...stops.flatMap(p=>[p.name.ar,p.name.en,placeArea(p).name.ar,placeArea(p).name.en]),String(days)].join(' ')}})
];
export function readGuideSearch(search:string):GuideSearchState{const p=new URLSearchParams(search),kind=p.get('kind');return{q:(p.get('q')||'').slice(0,120),kind:kind==='places'||kind==='governorates'||kind==='plans'?kind:'all'}}
export function guideSearchQuery(state:GuideSearchState){const p=new URLSearchParams();if(state.q.trim())p.set('q',state.q.trim().slice(0,120));if(state.kind!=='all'&&['places','governorates','plans'].includes(state.kind))p.set('kind',state.kind);return p.size?'?'+p.toString():''}
/** Stable catalog order, not a destination ranking. All query words must match. */
export function searchGuide(query:string){const words=normalizeGuideSearch(query.trim().slice(0,120)).split(/\s+/).filter(Boolean);return words.length?guideSearchEntries.filter(e=>{const text=normalizeGuideSearch(e.search);return words.every(w=>text.includes(w))}):[]}
