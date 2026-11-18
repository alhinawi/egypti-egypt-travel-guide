import {test} from 'node:test';
import assert from 'node:assert/strict';
import{readFileSync}from'node:fs';
test('Tailwind migration uses utilities without introducing a global reset',()=>{
 const css=readFileSync('src/app/tailwind.css','utf8');
 assert.match(css,/tailwindcss\/utilities\.css/);
 assert.doesNotMatch(css,/preflight/);
 assert.match(readFileSync('src/components/virtual-tours.tsx','utf8'),/tw:grid-cols-3/);
 assert.doesNotMatch(readFileSync('src/app/globals.css','utf8'),/\.virtual-stats[^{}]*\{/);
});
