import {test} from 'node:test';
import assert from 'node:assert/strict';
import {visitingHours} from '../src/lib/visiting-hours';
import {places} from '../src/lib/data';
test('published hours retain valid catalog IDs, sources, dated local sessions and ordered last entry',()=>{
 for(const [id,hours] of Object.entries(visitingHours)){
  assert.ok(places.some(p=>p.id===id));assert.equal(hours.timezone,'Africa/Cairo');assert.match(hours.checkedAt,/^\d{4}-\d{2}-\d{2}$/);
  assert.equal(hours.sources.length,2);
  for(const source of hours.sources)assert.ok(['egymonuments.com','egymonuments.gov.eg'].includes(new URL(source.url).hostname));
  for(const s of hours.sessions){assert.match(s.opens,/^\d{2}:\d{2}$/);assert.ok(s.opens<s.lastEntry);if(s.closes)assert.ok(s.lastEntry<s.closes)}
  assert.doesNotMatch(JSON.stringify(hours),/[٠-٩۰-۹]/);
 }
});
test('Cairo last entry is not converted into an invented closing time',()=>{
 for(const id of ['egyptian-museum','coptic-museum'])assert.deepEqual(visitingHours[id].sessions,[{opens:'09:00',lastEntry:'16:00'}]);
});
test('Hurghada keeps split sessions and Ramadan conflict rather than seamless all-day hours',()=>{
 assert.deepEqual(visitingHours['hurghada-museum'].sessions,[{opens:'10:00',lastEntry:'12:00',closes:'13:00'},{opens:'17:00',lastEntry:'22:00',closes:'23:00'}]);
 assert.match(visitingHours['hurghada-museum'].note.en,/disagree/);
 assert.match(visitingHours['hurghada-museum'].note.ar,/مختلفة/);
});
