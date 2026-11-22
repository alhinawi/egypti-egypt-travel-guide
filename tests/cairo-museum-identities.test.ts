import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {cairoMuseumIdentities, cairoMuseumIdentity, cairoMuseumComparisonPath} from '../src/lib/cairo-museum-identities';
import {places} from '../src/lib/data';
import {placePhotos, photoPath} from '../src/lib/photos';

test('museum identities resolve exactly three different existing place guides', () => {
  assert.deepEqual(cairoMuseumIdentities.map(m => m.id), ['egyptian-museum', 'grand-egyptian-museum', 'national-museum-egyptian-civilization']);
  for (const museum of cairoMuseumIdentities) assert.equal(museum.place, places.find(p => p.id === museum.id));
});
test('identity cards reuse the exact original photographs and derivative paths', () => {
  for (const museum of cairoMuseumIdentities) {
    assert.equal(museum.photo, placePhotos[museum.id]);
    assert.ok(!museum.photo.contextual && museum.photo.heroSuitable !== false);
    for (const width of [420, 780]) assert.ok(readFileSync('public' + photoPath(museum.photo, width)).length > 1000);
  }
  assert.equal(new Set(cairoMuseumIdentities.map(m => photoPath(m.photo, 780))).size, 3);
});
test('collection and location references are the checked official pages', () => {
  assert.deepEqual(cairoMuseumIdentities.map(m => m.sources.map(s => new URL(s).hostname)), [['www.cairo.gov.eg'], ['gem.eg', 'gem.eg'], ['nmec.gov.eg']]);
  assert.match(cairoMuseumIdentity('egyptian-museum')!.area.en, /Tahrir/);
  assert.match(cairoMuseumIdentity('grand-egyptian-museum')!.area.en, /El Remayah/);
  assert.match(cairoMuseumIdentity('national-museum-egyptian-civilization')!.area.en, /Al-Fustat/);
});
test('all facts and names are bilingual without prices or opening-hour fields', () => {
  for (const museum of cairoMuseumIdentities) {
    for (const lang of ['ar', 'en'] as const) for (const text of [museum.area[lang], museum.focus[lang], museum.place.name[lang]]) assert.ok(text.trim().length > 8);
    assert.equal('price' in museum, false); assert.equal('hours' in museum, false); assert.equal('ticket' in museum, false);
  }
});
test('comparison paths are language-bound and native-anchor compatible', () => {
  for (const lang of ['ar', 'en'] as const) assert.equal(cairoMuseumComparisonPath(lang), '/' + lang + '/essentials/#cairo-museums');
});
test('museum notices never select unrelated places', () => {
  for (const id of ['', 'karnak', 'giza-pyramids', 'egyptian-museum-extra', '__proto__']) assert.equal(cairoMuseumIdentity(id), undefined);
});
