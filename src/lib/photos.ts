import added from './place-photos.json';
import{destinations,type Bilingual}from './data';
export interface PlacePhoto{file:string;alt:Bilingual;source:string;author:string;license:string;licenseUrl:string;changes:string;path?:string;contextual?:boolean;}
export const placePhotos:Record<string,PlacePhoto>={...added};
for(const[id,destination]of Object.entries({'giza-pyramids':'cairo',qaitbay:'alexandria',karnak:'luxor','blue-lagoon':'dahab'})){const d=destinations.find(d=>d.id===destination)!;placePhotos[id]={file:d.photo,path:'/photos/'+d.photo,alt:d.photoAlt,source:d.photoSource,author:d.credit,license:d.license,licenseUrl:d.licenseUrl,changes:'resized, WebP; card crop'}}
export const photoPath=(p:PlacePhoto,width:number)=>p.path? p.path+(width===1400?'':width===780?'-780':'-card-420')+'.webp':'/photos/places/'+p.file+'-'+width+'.webp';
