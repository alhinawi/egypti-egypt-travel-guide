import profiles from'./encyclopedia/governorate-profiles.json';
import{galleryPhotos,type PlacePhoto}from'./photos';
/** Profile's own sourced photographs only, hero first; no borrowed place covers. */
export function governorateGallery(id:string):PlacePhoto[]{const p=profiles[id as keyof typeof profiles];if(!p)return[];const seen=new Set<string>();return[p.hero_photo_id,...p.detail_photo_ids].flatMap(key=>{const photo=galleryPhotos[key];if(!photo||seen.has(photo.file))return[];seen.add(photo.file);return[photo]})}
