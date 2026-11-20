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

test('all live empty-state consumers use shared Tailwind presentation',()=>{
 assert.doesNotMatch(readFileSync('src/app/globals.css','utf8'),/\.empty-state(?![\w-])/);
 for(const file of ['src/components/pages.tsx','src/components/encyclopedia.tsx']){
  const source=readFileSync(file,'utf8');
  assert.match(source,/emptyStateClasses/);
  assert.doesNotMatch(source,/className="empty-state/);
 }
});

test('place and trip detail shells use shared Tailwind presentation',()=>{
 for(const file of ['src/app/globals.css','src/app/editorial.css'])assert.doesNotMatch(readFileSync(file,'utf8'),/\.(?:title-save|detail-section|fact-row)(?![\w-])/);
 assert.match(readFileSync('src/components/pages.tsx','utf8'),/className=\{titleSaveClasses\}/);
 assert.match(readFileSync('src/components/visiting-hours.tsx','utf8'),/className=\{hoursFallbackClasses\}/);
});

test('place-card shell and copy use shared Tailwind presentation',()=>{
 for(const file of ['src/app/globals.css','src/app/editorial.css','src/app/typography.css']){
  assert.doesNotMatch(readFileSync(file,'utf8'),/\.place-card\s*\{/);
  assert.doesNotMatch(readFileSync(file,'utf8'),/\.card-topline(?![\w-])/);
  assert.doesNotMatch(readFileSync(file,'utf8'),/\.place-link(?![\w-])/);
 }
 const source=readFileSync('src/components/cards.tsx','utf8');
 for(const name of ['placeCardClasses','cardToplineClasses','placeLinkClasses','placeTitleClasses','placeDescriptionClasses'])assert.match(source,new RegExp('className=\\{'+name+'\\}'));
});

test('breadcrumb variants use shared Tailwind presentation',()=>{
 for(const file of ['src/app/globals.css','src/app/editorial.css'])assert.doesNotMatch(readFileSync(file,'utf8'),/\.(?:breadcrumb|crumb)(?![\w-])/);
 for(const file of ['src/components/pages.tsx','src/components/virtual-tours.tsx'])assert.match(readFileSync(file,'utf8'),/className=\{breadcrumbClasses\}/);
 assert.match(readFileSync('src/components/encyclopedia.tsx','utf8'),/className=\{catalogCrumbClasses\}/);
});

test('all page-heading consumers use shared Tailwind presentation',()=>{
 for(const file of ['src/app/globals.css','src/app/editorial.css','src/app/typography.css'])assert.doesNotMatch(readFileSync(file,'utf8'),/\.page-heading(?![\w-])/);
 for(const file of ['pages.tsx','guides.tsx','virtual-tours.tsx','encyclopedia.tsx']){
  const source=readFileSync('src/components/'+file,'utf8');assert.match(source,/className=\{pageHeadingClasses/);assert.doesNotMatch(source,/className="page-heading/);
 }
});

test('magazine and destination section headings use shared Tailwind presentation',()=>{
 for(const file of ['src/app/globals.css','src/app/editorial.css'])assert.doesNotMatch(readFileSync(file,'utf8'),/\.(?:section-heading|mag-section-head)(?![\w-])/);
 assert.match(readFileSync('src/components/pages.tsx','utf8'),/className=\{sectionHeadingClasses\}/);
 assert.equal((readFileSync('src/components/magazine-home.tsx','utf8').match(/className=\{magazineSectionHeadingClasses\}/g)||[]).length,4);
});

test('destination cards use shared Tailwind presentation',()=>{
 for(const file of ['src/app/globals.css','src/app/editorial.css'])assert.doesNotMatch(readFileSync(file,'utf8'),/\.(?:destination-card|destination-image|destination-text|destination-arrow)(?![\w-])/);
 const source=readFileSync('src/components/cards.tsx','utf8');
 for(const name of ['destinationCardClasses','destinationImageClasses','destinationTextClasses','destinationArrowClasses'])assert.match(source,new RegExp('className=\\{'+name+'\\}'));
});

test('homepage mood cards use shared Tailwind presentation',()=>{
 for(const file of ['src/app/globals.css','src/app/editorial.css'])assert.doesNotMatch(readFileSync(file,'utf8'),/\.mag-mood(?:-grid|-shade)?(?![\w-])/);
 const source=readFileSync('src/components/magazine-home.tsx','utf8');
 for(const name of ['moodGridClasses','moodCardClasses','moodShadeClasses'])assert.match(source,new RegExp('className=\\{'+name+'\\}'));
});

test('homepage magazine trip cards use shared Tailwind presentation',()=>{
 for(const file of ['src/app/globals.css','src/app/editorial.css'])assert.doesNotMatch(readFileSync(file,'utf8'),/\.mag-trip(?:-row|-photo|-days|-copy)?(?![\w-])/);
 const source=readFileSync('src/components/magazine-home.tsx','utf8');
 for(const name of ['magazineTripRowClasses','magazineTripClasses','magazineTripPhotoClasses','magazineTripDayClasses','magazineTripCopyClasses'])assert.match(source,new RegExp('className=\\{'+name+'\\}'));
});

test('homepage editorial promo uses shared Tailwind presentation',()=>{
 for(const file of ['src/app/globals.css','src/app/editorial.css'])assert.doesNotMatch(readFileSync(file,'utf8'),/\.mag-(?:editorial(?:-image|-stamp|-copy|-note)?|button)(?![\w-])/);
 const source=readFileSync('src/components/magazine-home.tsx','utf8');
 for(const name of ['magazineEditorialClasses','magazineEditorialImageClasses','magazineEditorialStampClasses','magazineEditorialCopyClasses','magazineEditorialNoteClasses','magazineButtonClasses'])assert.match(source,new RegExp('className=\\{'+name+'\\}'));
});
