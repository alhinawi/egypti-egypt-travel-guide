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

test('standalone trip list styles stay in Tailwind including generated themes',()=>{
 for(const file of ['src/app/globals.css','src/app/editorial.css','src/app/themes.css','src/app/typography.css','scripts/gen-themes.mjs']){
  assert.doesNotMatch(readFileSync(file,'utf8'),/\.trip-(?:list|card|number|link)(?![\w-])/);
 }
 assert.match(readFileSync('src/components/cards.tsx','utf8'),/className=\{tripCardClasses\}/);
 assert.match(readFileSync('src/components/pages.tsx','utf8'),/className=\{tripListClasses\}/);
});
