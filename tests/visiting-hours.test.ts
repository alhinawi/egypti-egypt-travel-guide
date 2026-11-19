import {test} from 'node:test';
import assert from 'node:assert/strict';
import {visitingHours} from '../src/lib/visiting-hours';
import {places} from '../src/lib/data';
test('published hours retain valid catalog IDs, sources, dated local sessions and ordered last entry',()=>{
 for(const [id,hours] of Object.entries(visitingHours)){
  assert.ok(places.some(p=>p.id===id));assert.equal(hours.timezone,'Africa/Cairo');assert.match(hours.checkedAt,/^\d{4}-\d{2}-\d{2}$/);
  assert.ok(hours.sources.length>=1);
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

test('Luxor seasons stay explicit without invented closing times or automatic changeover dates',()=>{
 const h=visitingHours['luxor-museum'];
 assert.equal(h.sessions.length,4);
 assert.deepEqual(h.sessions.map(s=>s.lastEntry),['12:00','19:00','13:00','20:00']);
 assert.ok(h.sessions.every(s=>s.label&&!s.closes));
 assert.match(h.note.en,/no season is selected automatically/);
});
test('Nubian evening hours remain Thursday and Friday only, with Ramadan conflict',()=>{
 const h=visitingHours['nubian-museum'];
 assert.match(h.sessions[1].label!.en,/Thursday and Friday only/);
 assert.match(h.sessions[1].label!.ar,/الخميس والجمعة بس/);
 assert.match(h.note.en,/disagree on Ramadan hours/);
});

test('major-site admission cutoffs are not closing times or interior/show admission',()=>{
 for(const [id,opens,lastEntry] of [['giza-pyramids','07:00','16:00'],['saqqara','08:00','16:00'],['karnak','06:00','16:00'],['luxor-temple','06:00','19:00']])assert.deepEqual(visitingHours[id].sessions,[{opens,lastEntry}]);
 assert.match(visitingHours['giza-pyramids'].note.en,/pyramid interior/);
 assert.match(visitingHours['saqqara'].note.en,/add-on tickets/);
 assert.match(visitingHours['karnak'].note.en,/not a sound-and-light/);
 assert.match(visitingHours['luxor-temple'].note.en,/not Luxor Museum or Karnak/);
});


test('West Bank seasonal cutoffs stay explicit without automatic season or all-tomb promises',()=>{
 for(const id of ['valley-kings','hatshepsut']){
  const h=visitingHours[id];assert.equal(h.sessions.length,2);
  assert.deepEqual(h.sessions.map(s=>[s.opens,s.lastEntry,s.closes]),[['06:00','17:00',undefined],['06:00','16:00',undefined]]);
  assert.match(h.sessions[1].label!.en,/Winter and Ramadan/);assert.match(h.note.en,/no season is selected automatically/);
 }
 assert.match(visitingHours['valley-kings'].note.en,/every tomb/);
});
test('Aswan site cutoffs do not claim transport, event or show arrangements',()=>{
 for(const [id,opens,lastEntry] of [['philae','07:00','15:00'],['unfinished-obelisk','07:00','15:00'],['abu-simbel','06:00','16:00']])assert.deepEqual(visitingHours[id].sessions,[{opens,lastEntry}]);
 assert.match(visitingHours.philae.note.en,/not boat departure/);assert.match(visitingHours['abu-simbel'].note.en,/sun-alignment/);
});
