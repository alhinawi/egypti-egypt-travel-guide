import {test} from 'node:test';
import assert from 'node:assert/strict';
import {places} from '../src/lib/data';
import {placeIndex} from '../src/lib/encyclopedia';
import {placePhotos} from '../src/lib/photos';
import tours from '../src/lib/tours.json';
import {emptyVirtualVisitFilters, filterVirtualVisits, readVirtualVisitFilters, virtualVisitEntries, virtualVisitGovernorates, virtualVisitKindChoices, virtualVisitKindNames, virtualVisitLink, virtualVisitQuery} from '../src/lib/virtual-visit-browser';

test('virtual browser is the unchanged published source inventory in catalog order', () => {
  assert.equal(new Set(tours.map(tour => tour.placeId)).size, tours.length);
  assert.deepEqual(virtualVisitEntries.map(entry => entry.place.id), places.filter(place => tours.some(tour => tour.placeId === place.id)).map(place => place.id));
  assert.equal(virtualVisitEntries.length, tours.length);
  for (const entry of virtualVisitEntries) {
    assert.equal(entry.tour, tours.find(tour => tour.placeId === entry.place.id));
    assert.equal(entry.place, places.find(place => place.id === entry.place.id));
    assert.equal(entry.governorate, placeIndex[entry.place.id].governorate);
  }
});
test('four photo choices have exact catalog counts and same-type licensed place covers', () => {
  assert.deepEqual(new Set(virtualVisitKindChoices.map(choice => choice.id)), new Set(tours.map(tour => tour.kind)));
  assert.equal(virtualVisitKindChoices.reduce((total, choice) => total + choice.count, 0), tours.length);
  for (const choice of virtualVisitKindChoices) {
    assert.equal(choice.count, tours.filter(tour => tour.kind === choice.id).length);
    assert.ok(choice.cover);
    assert.equal(choice.cover.tour.kind, choice.id);
    const photo = placePhotos[choice.cover.place.id];
    assert.ok(photo.author && photo.license && photo.source);
    assert.notEqual(photo.heroSuitable, false);
    assert.notEqual(photo.contextual, true);
  }
  assert.equal(virtualVisitKindChoices.find(choice => choice.id === 'archive')!.cover.tour.kind, 'archive');
});
test('governorate choices include exactly the areas represented by published links', () => {
  assert.deepEqual(new Set(virtualVisitGovernorates.map(area => area.id)), new Set(virtualVisitEntries.map(entry => entry.governorate)));
  assert.equal(new Set(virtualVisitGovernorates.map(area => area.id)).size, virtualVisitGovernorates.length);
});
test('all media and governorate combinations intersect without changing catalog order', () => {
  for (const kind of ['', ...Object.keys(virtualVisitKindNames)]) for (const governorate of ['', ...virtualVisitGovernorates.map(area => area.id)]) {
    const expected = places.filter(place => tours.some(tour => tour.placeId === place.id && (!kind || tour.kind === kind)) && (!governorate || placeIndex[place.id].governorate === governorate));
    assert.deepEqual(filterVirtualVisits({q: '', kind, governorate}).map(entry => entry.place), expected);
  }
  assert.deepEqual(filterVirtualVisits(), virtualVisitEntries);
});
test('search matches all normalized words across names, source labels and governorates', () => {
  assert.ok(filterVirtualVisits({q: 'قَايتباي', governorate: '', kind: ''}).some(entry => entry.place.id === 'qaitbay'));
  assert.ok(filterVirtualVisits({q: 'abu simbel', governorate: 'aswan', kind: 'model'}).some(entry => entry.place.id === 'abu-simbel'));
  assert.deepEqual(filterVirtualVisits({q: 'abu simbel', governorate: 'cairo', kind: 'model'}), []);
  assert.deepEqual(filterVirtualVisits({q: 'zzzx-no-such-source', governorate: '', kind: ''}), []);
  assert.equal(filterVirtualVisits({q: ' ', governorate: '', kind: ''}).length, tours.length);
});
test('URL state is bounded, validated and excludes unknown account or saved-item parameters', () => {
  assert.deepEqual(readVirtualVisitFilters('?kind=__proto__&governorate=unknown&account=private&saved=place:x'), emptyVirtualVisitFilters);
  assert.deepEqual(readVirtualVisitFilters('?kind=model&governorate=aswan&q=abu%20simbel&saved=1'), {kind: 'model', governorate: 'aswan', q: 'abu simbel'});
  assert.equal(readVirtualVisitFilters('?q=' + 'x'.repeat(180)).q.length, 120);
  for (const kind of Object.keys(virtualVisitKindNames)) {
    const state = {q: 'دهب & sea + "view"', kind, governorate: 'south-sinai'};
    assert.deepEqual(readVirtualVisitFilters(virtualVisitQuery(state)), state);
    const url = new URL(virtualVisitLink('https://example.test', 'ar', state));
    assert.equal(url.pathname, '/ar/virtual-tours/');
    assert.deepEqual(readVirtualVisitFilters(url.search), state);
    assert.deepEqual([...url.searchParams.keys()], ['q', 'governorate', 'kind']);
  }
  assert.equal(virtualVisitQuery(emptyVirtualVisitFilters), '');
  assert.equal(virtualVisitQuery({q: '   ', governorate: '', kind: ''}), '');
});
