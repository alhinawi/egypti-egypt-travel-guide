import{places,categoryNames,type Category}from'./data';
import{placePhotos}from'./photos';
const normalize=(text:string)=>text.toLowerCase().normalize('NFKD').replace(/[\u064B-\u065F\u0670]/g,'').replace(/[أإآ]/g,'ا').replace(/ى/g,'ي').trim();
export function destinationPlaceResults(destination:string,category='',query=''){const q=normalize(query);return places.filter(p=>p.destination===destination&&(!category||p.category===category)&&normalize([p.name.ar,p.name.en,p.description.ar,p.description.en].join(' ')).includes(q))}
export function destinationCategoryChoices(destination:string){const entries=destinationPlaceResults(destination);return(Object.keys(categoryNames)as Category[]).flatMap(category=>{const matches=entries.filter(p=>p.category===category);if(!matches.length)return[];const cover=matches.find(p=>placePhotos[p.id]&&placePhotos[p.id].heroSuitable!==false&&!placePhotos[p.id].contextual);return[{category,count:matches.length,cover}]})}
