import {readdir,readFile} from 'node:fs/promises';
import {join} from 'node:path';
import assert from 'node:assert/strict';
async function htmlFiles(dir){const entries=await readdir(dir,{withFileTypes:true});return(await Promise.all(entries.map(e=>e.isDirectory()?htmlFiles(join(dir,e.name)):e.name.endsWith('.html')?[join(dir,e.name)]:[]))).flat()}
let pages=0,embedded=0;
for(const lang of ['ar','en'])for(const path of await htmlFiles('out/'+lang)){
 const html=await readFile(path,'utf8');
 assert.match(html,new RegExp('<html\\b[^>]*lang="'+lang+'"[^>]*dir="'+(lang==='ar'?'rtl':'ltr')+'"'),path+' document language/direction');
 assert.equal((html.match(/<h1(?:\s|>)/g)||[]).length,1,path+' must have one H1');
 if(/\/governorates\/(?!compare\/)[^/]+\/index.html$/.test(path)){assert.match(html,/<header[^>]*encyclopedia-heading[^>]*>[^]*?<h2\b/,path+' embedded heading');embedded++}
 pages++;
}
for(const path of ['out/index.html','out/admin/index.html','out/404.html'])assert.match(await readFile(path,'utf8'),/<html\b[^>]*lang="ar"[^>]*dir="rtl"/,path+' default Arabic shell');
assert.match(await readFile('out/credits/index.html','utf8'),/NEXT_REDIRECT;replace;\/ar\/credits\/;307;/,'legacy credits redirect');
assert.ok(pages>500);assert.equal(embedded,54);
console.log(JSON.stringify({pages,embedded,defaultDocuments:3,legacyCreditsRedirect:true}));
