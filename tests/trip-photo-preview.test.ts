import {test} from 'node:test';
import assert from 'node:assert/strict';
import {itineraries} from '../src/lib/data';
import {tripPhotoPreview} from '../src/lib/trip-photo-preview';
import {placePhotos} from '../src/lib/photos';
test('trip photo previews preserve exact day order, repeated stops and published notes',()=>{
 for(const trip of itineraries){const rows=tripPhotoPreview(trip);assert.equal(rows.length,trip.days.length);rows.forEach((row,index)=>{assert.equal(row.number,index+1);assert.equal(row.day,trip.days[index]);assert.deepEqual(row.stops.map(p=>p.id),trip.days[index].places);for(const stop of row.stops){assert.equal(stop.place?.id,stop.id);if(stop.photo){assert.equal(stop.photo,placePhotos[stop.id]);assert.notEqual(stop.photo.heroSuitable,false);assert.notEqual(stop.photo.contextual,true)}}})}
});
test('preview does not repurpose detail-only or contextual imagery as a place cover',()=>{
 const key=Object.keys(placePhotos)[0],old=placePhotos[key];
 try{for(const extra of [{heroSuitable:false},{contextual:true}]){placePhotos[key]={...old,...extra};const rows=tripPhotoPreview({...itineraries[0],days:[{...itineraries[0].days[0],places:[key]}]});assert.equal(rows[0].stops[0].photo,undefined)}}finally{placePhotos[key]=old}
});
