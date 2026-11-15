import {places} from './data';
import {governorates,placeIndex} from './encyclopedia';
import articles from './encyclopedia/articles.json';
import {placePhotos} from './photos';

type Section={ar?:string;en?:string;text?:{ar?:string;en?:string};items?:Section[]};
export const articleSections=['history','see','nearby','buy','eat','wear','weather'] as const;
export function hasBilingualSection(section:unknown):boolean{
 if(!section||typeof section!=='object')return false;
 if(Array.isArray(section))return section.length>0&&section.every(hasBilingualSection);
 const s=section as Section;
 return Boolean((s.ar?.trim()&&s.en?.trim())||(s.text?.ar?.trim()&&s.text?.en?.trim())||(s.items?.length&&s.items.every(hasBilingualSection)));
}
export const catalogCoverage=places.map(place=>{
 const article=(articles as Record<string,Record<string,unknown>>)[place.id]||{};
 const sections=articleSections.filter(key=>hasBilingualSection(article[key]));
 return {place,governorate:placeIndex[place.id]?.governorate,photo:Boolean(placePhotos[place.id]),sections,missing:articleSections.filter(key=>!sections.includes(key))};
});
export const governorateCoverage=governorates.map(governorate=>{
 const entries=catalogCoverage.filter(x=>x.governorate===governorate.id);
 return {governorate,entries,photos:entries.filter(x=>x.photo).length,histories:entries.filter(x=>x.sections.includes('history')).length};
});
