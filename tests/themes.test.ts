import{test}from'node:test';import assert from'node:assert/strict';import{readFileSync}from'node:fs';import{themes,themeIds,isTheme}from'../src/lib/themes';
const lum=(h:string)=>{const v=[1,3,5].map(i=>parseInt(h.slice(i,i+2),16)/255).map(c=>c<=.03928?c/12.92:((c+.055)/1.055)**2.4);return .2126*v[0]+.7152*v[1]+.0722*v[2]};
const ratio=(a:string,b:string)=>{const[x,y]=[lum(a),lum(b)].sort((p,q)=>q-p);return(x+.05)/(y+.05)};
test('theme ids are unique and validated',()=>{assert.equal(new Set(themeIds).size,themeIds.length);assert.ok(themes.length>=16);assert.ok(isTheme('night'));assert.ok(!isTheme('x'));assert.ok(!isTheme('"><script>'))});
for(const t of themes)test('contrast '+t.id,()=>{
 const old=['ivory','night','sand','nile'].includes(t.id),floor=4.5;const checks:[string,string,string,number][]=[['ink/page',t.ink,t.page,7],['ink/paper',t.ink,t.paper,7],['ink/tint',t.ink,t.tint,7],['muted/page',t.muted,t.page,floor],['muted/paper',t.muted,t.paper,floor],['muted/tint',t.muted,t.tint,floor],['accent/paper',t.accent,t.paper,4.5],['accent/page',t.accent,t.page,4.5],['accent/tint',t.accent,t.tint,3],['sun/deep',t.sun,t.deep,4.5]];
 for(const[n,a,b,min]of checks)assert.ok(ratio(a,b)>=min,t.id+' '+n+' '+ratio(a,b).toFixed(2)+' < '+min);
 assert.equal(lum(t.page)<.2,t.dark,t.id+' dark flag')});
test('generated css covers every theme',()=>{const css=readFileSync('src/app/themes.css','utf8')+readFileSync('src/app/globals.css','utf8');for(const t of themes)if(t.id!=='ivory')assert.ok(css.includes('data-theme='+t.id+']'),t.id)});
