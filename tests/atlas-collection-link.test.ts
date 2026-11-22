import test from 'node:test';
import assert from 'node:assert/strict';
import {atlasCollectionLink} from '../src/lib/atlas-collection-link';
import {atlasFilterQuery, readAtlasFilters, filterAtlas, atlasRegions, atlasEras, type AtlasFilters} from '../src/lib/photo-atlas';
const origin = 'https://egypti.pages.dev';
const empty: AtlasFilters = {q: '', area: '', category: '', region: ''};

test('empty collection links use the current language and no query', () => {
  for (const lang of ['ar', 'en'] as const) assert.equal(atlasCollectionLink(origin, lang, empty), origin + '/' + lang + '/photos/');
});
test('all seven public filters survive the existing canonical round trip', () => {
  const filters = {q: 'Cairo', area: 'cairo', category: 'culture', region: atlasRegions[0].id, era: atlasEras[0].id, trip: 'cairo-two-days', day: '2'};
  const safe = readAtlasFilters(atlasFilterQuery(filters));
  assert.equal(new URL(atlasCollectionLink(origin, 'en', filters)).search, atlasFilterQuery(safe));
  assert.equal(new URL(atlasCollectionLink(origin, 'en', filters)).searchParams.size, 7); assert.equal(safe.trip, filters.trip); assert.equal(safe.day, filters.day);
});
test('shared state reproduces the exact current eligible collection and order', () => {
  for (const query of ['', '?governorate=cairo', '?trip=cairo-two-days&day=2', '?region=upper-egypt&category=culture', '?q=غيرموجود']) {
    const filters = readAtlasFilters(query), copy = readAtlasFilters(new URL(atlasCollectionLink(origin, 'ar', filters)).search);
    assert.deepEqual(filterAtlas(copy).map(p => p.id), filterAtlas(filters).map(p => p.id));
  }
});
test('unrelated address data and local-only state cannot enter a collection link', () => {
  const filters = {...empty, account: 'private', saved: 'place:karnak', comparison: ['philae'], active: 'karnak', layout: 'sheet', limit: 72};
  const url = new URL(atlasCollectionLink(origin + '/account/?private=example#secret', 'en', filters));
  assert.equal(url.href, origin + '/en/photos/');
});
test('invalid public choices and orphan plan days are dropped by existing validators', () => {
  const filters = {...empty, area: 'unknown', category: 'unknown', region: 'unknown', era: 'unknown', trip: 'unknown', day: '3'};
  assert.equal(atlasCollectionLink(origin, 'en', filters), origin + '/en/photos/');
  assert.equal(new URL(atlasCollectionLink(origin, 'ar', {...empty, trip: 'cairo-two-days', day: '99'})).searchParams.has('day'), false);
});
test('Arabic search and punctuation are encoded once and bounded at 120 characters', () => {
  const q = 'أسوان & river? '.repeat(20), url = new URL(atlasCollectionLink(origin, 'ar', {...empty, q}));
  assert.equal(url.searchParams.get('q'), q.slice(0, 120)); assert.deepEqual([...url.searchParams.keys()], ['q']);
});
