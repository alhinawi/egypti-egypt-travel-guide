import {test} from 'node:test';
import assert from 'node:assert/strict';
import {atlasActiveSelections, removeAtlasSelection, type AtlasSelectionKey} from '../src/lib/atlas-active-selections';
import {emptyAtlasFilters, atlasAreas, type AtlasFilters} from '../src/lib/photo-atlas';
import {itineraries, categoryNames} from '../src/lib/data';
import {regions, eraNames} from '../src/lib/encyclopedia';
const f: AtlasFilters = {q:'Cairo',area:'cairo',category:'culture',region:'greater-cairo',era:'islamic',trip:'cairo-two-days',day:'2'};
const keys: AtlasSelectionKey[] = ['q','area','category','region','era','trip','day'];
for (const lang of ['ar','en'] as const) test('seven labels use their owning published records '+lang, () => {
  const rows=atlasActiveSelections(f,lang),plan=itineraries.find(p=>p.id===f.trip)!;
  assert.deepEqual(rows.map(r=>r.key),keys);
  assert.deepEqual(rows.map(r=>r.value),[f.q,atlasAreas.find(g=>g.id===f.area)!.name[lang],categoryNames.culture[lang],regions[f.region][lang],eraNames.islamic[lang],plan.title[lang],'2 · '+plan.days[1].title[lang]]);
});
test('empty and whitespace-only choices do not create empty chips',()=>{assert.deepEqual(atlasActiveSelections(emptyAtlasFilters,'en'),[]);assert.deepEqual(atlasActiveSelections({...emptyAtlasFilters,q:'   '},'ar'),[])});
test('invalid URL fields are not presented as valid published choices',()=>{const rows=atlasActiveSelections({q:'x'.repeat(150),area:'unknown',category:'unknown',region:'unknown',era:'unknown',trip:'unknown',day:'1'},'en');assert.deepEqual(rows,[{key:'q',label:'Search',value:'x'.repeat(120)}]);assert.equal(atlasActiveSelections({...f,day:'999'},'en').some(r=>r.key==='day'),false)});
for (const key of keys) test('removing '+key+' preserves independent fields and input object',()=>{const frozen=Object.freeze({...f}),next=removeAtlasSelection(frozen,key);assert.deepEqual(frozen,f);assert.notEqual(next,frozen);for(const field of keys)assert.equal(next[field],field===key||(key==='trip'&&field==='day')?'':f[field]);if(key==='trip')assert.equal(atlasActiveSelections(next,'en').some(r=>r.key==='day'),false);if(key==='day')assert.equal(next.trip,f.trip)});
