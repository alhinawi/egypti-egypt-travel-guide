import {test} from 'node:test';
import assert from 'node:assert/strict';
import {places} from '../src/lib/data';
import tours from '../src/lib/tours.json';

test('every current catalog place has a distinct media record, including archives',()=>{
  const ids=tours.map(t=>t.placeId);
  assert.equal(new Set(ids).size,ids.length);
  assert.deepEqual(places.filter(p=>!ids.includes(p.id)).map(p=>p.id),[]);
  assert.deepEqual(ids.filter(id=>!places.some(p=>p.id===id)),[]);
});
test('Qift closes catalog coverage with a dated street film, not a temple visit',()=>{
  const tour=tours.find(t=>t.placeId==='qift')!;
  assert.equal(tour.kind,'video');
  assert.equal(tour.url,'https://www.youtube.com/watch?v=62VPg94Qjt4');
  assert.match(tour.scope.en,/2 April 2021/);
  assert.match(tour.scope.en,/not the whole city or a visit to the temples/);
  assert.match(tour.scope.ar,/مش جولة لكل المدينة ولا زيارة لمعابد/);
});
