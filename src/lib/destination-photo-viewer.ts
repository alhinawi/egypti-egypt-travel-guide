import type{Place}from'./data';
import{placePhotos}from'./photos';
import{placeIndex}from'./encyclopedia';
/** Keep only suitable photographs from the caller's exact, already-filtered destination results. */
export function destinationPhotoPlaces(matched:Place[]){return matched.filter(place=>{const photo=placePhotos[place.id];return placeIndex[place.id]?.governorate!=='north-sinai'&&photo&&!photo.contextual&&photo.heroSuitable!==false})}
