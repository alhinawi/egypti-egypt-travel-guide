import{searchGuide,type GuideSearchKind}from'./guide-search';
import{atlasPlaces}from'./photo-atlas';
/** Exact matching place articles only, in search order. Never borrow profile/plan covers. */
export function searchGuidePhotos(query:string,kind:GuideSearchKind='all'){if(kind!=='all'&&kind!=='places')return[];return searchGuide(query).flatMap(entry=>{if(entry.kind!=='places')return[];const place=atlasPlaces.find(p=>p.id===entry.id);return place?[place]:[]})}
