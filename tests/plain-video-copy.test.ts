import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import tours from '../src/lib/tours.json';

test('video cards use plain labels in both languages without changing source links', () => {
  for (const tour of tours.filter(item => item.kind === 'video')) {
    assert.doesNotMatch(JSON.stringify(tour), /فيديو\s+مسج[ّ]?ل|\brecorded\b/i);
    assert.match(tour.url, /^https:\/\//);
    assert.ok(tour.scope.ar && tour.scope.en);
  }
  const component = readFileSync('src/components/virtual-tours.tsx', 'utf8');
  assert.doesNotMatch(component, /فيديو\s+مسج[ّ]?ل|Recorded video|A recorded video/);
});
