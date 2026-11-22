import {test} from 'node:test';import assert from 'node:assert/strict';
import {guideSearchEntries,searchGuide,normalizeGuideSearch} from '../src/lib/guide-search';
import {guideSearchFields,guideSearchExcerpt,guideSearchMatches} from '../src/lib/guide-search-matches';
test('evidence sources reproduce every indexed string exactly without changing membership or order',()=>{
 for(const entry of guideSearchEntries){
  assert.equal(guideSearchFields(entry).map(f=>f.text).join(' '),entry.search,entry.kind+':'+entry.id);
  for(const lang of ['ar','en'] as const){
   for(const e of searchGuide(entry.title[lang])){
    const before=JSON.stringify(e),rows=guideSearchMatches(e,entry.title[lang],lang);
    assert.ok(rows.length>0);assert.ok(rows.length<=3);assert.equal(JSON.stringify(e),before);
    for(const row of rows){
     assert.equal(row.parts.map(p=>p.text).join(''),row.text);
     assert.ok(guideSearchFields(e).some(f=>f.kind===row.kind&&f.lang===row.lang&&f.text.includes(row.text)));
     assert.ok(row.parts.some(p=>p.match));
     for(const part of row.parts.filter(p=>p.match))assert.ok(normalizeGuideSearch(entry.title[lang]).split(/\s+/).some(w=>normalizeGuideSearch(part.text).includes(w)||w.includes(normalizeGuideSearch(part.text))));
    }
   }
  }
 }
});
test('Arabic normalized hamza/diacritics/yaa/tatweel retain original spelling in highlights',()=>{for(const text of ['إِسْكَنْدَرِيَّة','أَسْوَان','مُتْحَف القاهرة','المتحف الـمصري','موسى']){const q=normalizeGuideSearch(text),row=guideSearchExcerpt({text,lang:'ar',kind:'title'},[q]);assert.ok(row,text);assert.equal(row.parts.map(p=>p.text).join(''),text);assert.equal(normalizeGuideSearch(row.parts.filter(p=>p.match).map(p=>p.text).join('')),q)}});
test('English case, literal punctuation, overlapping terms and repeated matches use plain text',()=>{for(const text of ['CAIRO Cairo cairo','a+b [museum] <script>','Cairo Museum']){const words=text==='Cairo Museum'?['cairo','air','museum']:normalizeGuideSearch(text).split(/\s+/),row=guideSearchExcerpt({text,kind:'description',lang:'en'},words);assert.ok(row);assert.equal(row.parts.map(p=>p.text).join(''),text);assert.ok(row.parts.some(p=>p.match))}assert.equal(guideSearchExcerpt({text:'Cairo',kind:'title',lang:'en'},[]),undefined);assert.equal(guideSearchExcerpt({text:'Cairo',kind:'title',lang:'en'},['<script>']),undefined)});
test('long source excerpts show exact bounded context and honest omitted-text markers',()=>{const text='A '.repeat(150)+'museum'+' B'.repeat(150),row=guideSearchExcerpt({text,kind:'description',lang:'en'},['museum']);assert.ok(row);assert.ok(row.before&&row.after);assert.ok(row.text.length<=181);assert.ok(text.includes(row.text));assert.deepEqual(row.parts.filter(p=>p.match).map(p=>p.text),['museum']);const emoji=guideSearchExcerpt({text:'😀'.repeat(160)+'museum'+'😀'.repeat(160),kind:'description',lang:'en'},['museum']);assert.ok(emoji);assert.ok(!/^[\uDC00-\uDFFF]|[\uD800-\uDBFF]$/.test(emoji.text));assert.ok(emoji.text.includes('museum'))});
test('hidden plan stop, governorate, category, day, duration and foreign-language evidence is labeled by its actual source',()=>{const plan=guideSearchEntries.find(e=>e.kind==='plans'&&e.id==='aswan-three-days')!;assert.equal(guideSearchMatches(plan,'Unfinished Obelisk','ar')[0].kind,'place');assert.equal(guideSearchMatches(plan,'Unfinished Obelisk','ar')[0].lang,'en');assert.ok(guideSearchFields(plan).some(r=>r.kind==='duration'&&r.text==='3'));assert.equal(guideSearchMatches(plan,'Philae','ar')[0].kind,'day');const place=guideSearchEntries.find(e=>e.id==='saqqara'&&e.kind==='places')!;assert.ok(guideSearchMatches(place,'الجيزة','ar').some(r=>r.kind==='governorate'));const g=guideSearchEntries.find(e=>e.id==='dakahlia'&&e.kind==='governorates')!;assert.ok(guideSearchMatches(g,'Mansoura','ar').some(r=>r.kind==='capital'));assert.deepEqual(guideSearchMatches(plan,'','en'),[]);assert.deepEqual(guideSearchMatches(plan,'zzunknown','en'),[])});
test('locale preference is deterministic and never swaps translated text into a literal match',()=>{for(const q of ['Cairo museum','الجيزة','Philae','الْقَاهِرَة','Aswan','3'])for(const entry of searchGuide(q))for(const lang of ['ar','en'] as const){const rows=guideSearchMatches(entry,q,lang);assert.deepEqual(rows,guideSearchMatches(entry,q,lang));for(const row of rows)for(const part of row.parts.filter(p=>p.match))assert.ok(normalizeGuideSearch(q).split(/\s+/).some(w=>normalizeGuideSearch(part.text).includes(w)))}});
