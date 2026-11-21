import type{Place}from'./data';
import{placePhotos}from'./photos';
import{placeIndex}from'./encyclopedia';
/** A view over already-matched saved places. No catalog expansion or save changes. */
export function savedPhotoPlaces(matched:Place[]){return matched.filter(p=>{const photo=placePhotos[p.id];return placeIndex[p.id]?.governorate!=='north-sinai'&&photo&&!photo.contextual&&photo.heroSuitable!==false})}
