import{test,expect}from'@playwright/test';
import baseline from'./fixtures/toast-baseline.json';
import{themes}from'../src/lib/themes';
const properties=['width','height','padding','margin','gap','display','alignItems','justifyContent','maxWidth','fontWeight','letterSpacing','color','fontSize','lineHeight','fontFamily','direction','borderRadius','border','boxShadow','position','top','bottom','insetInlineStart','insetInlineEnd','backgroundColor','minWidth','minHeight','outline','outlineOffset','zIndex','cursor','whiteSpace'];
for(const state of['message','storage','account'])for(const width of[360,361,390,600,601,900,901,1280])for(const lang of['ar','en'])test(`toast Tailwind ${state} ${lang} ${width}`,async({page})=>{
 await page.setViewportSize({width,height:900});await page.clock.install();await page.route('**/api/**',r=>{const path=new URL(r.request().url()).pathname;if(path==='/api/config')return r.fulfill({json:{google:false}});if(path==='/api/me')return r.fulfill({json:{user:state==='account'?{id:'fixture-only',name:'Fixture',email:'fixture@example.invalid'}:null}});return r.fulfill({status:503})});
 if(state==='storage')await page.addInitScript(()=>{const old=Storage.prototype.setItem;Storage.prototype.setItem=function(k,v){if(k==='egypt:saved')throw Error('fixture');return old.call(this,k,v)}});
 await page.goto(`/${lang}/places/menna-tt69/${state==='message'?'?auth=failed':''}`);await expect(page.locator('html')).toHaveAttribute('lang',lang);await page.evaluate(()=>document.fonts.ready);
 if(state==='storage'){await expect(page.locator('.save-button').first()).toBeEnabled();await page.locator('.save-button').first().click()}
 const root=page.locator(state==='message'?'.toast[role=status]':state==='storage'?'.save-storage-warning':'.account-saves-warning');await expect(root).toBeVisible();
 const capture=()=>root.evaluateAll((es,props)=>es.flatMap(e=>[e,...e.querySelectorAll('*')].map(n=>{const c=getComputedStyle(n);return{tag:n.tagName,text:n.children.length?'':n.textContent,role:n.getAttribute('role'),aria:n.getAttribute('aria-label'),style:Object.fromEntries(props.map(k=>[k,c[k as keyof CSSStyleDeclaration]]))}})),properties);
 const expected=(key:string)=>(baseline.cases as Record<string,number[]>)[key].map(i=>baseline.elements[i]);
 for(const theme of themes){await page.evaluate(t=>document.documentElement.dataset.theme=t,theme.id);expect(await capture()).toEqual(expected(`${lang}-${width}-${state}-${theme.id}`));if(width===390||width===1280){await page.emulateMedia({media:'print'});expect(await capture()).toEqual(expected(`${lang}-${width}-${state}-${theme.id}-print`));await page.emulateMedia({media:'screen'})}}
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
});
for(const lang of['ar','en'])test(`toast keyboard dismiss and expiry ${lang}`,async({page})=>{
 await page.clock.install();await page.route('**/api/**',r=>r.fulfill({json:{google:false,user:null}}));await page.goto(`/${lang}/places/menna-tt69/?auth=failed`);const toast=page.locator('.toast[role=status]');await expect(toast).toBeVisible();const dismiss=toast.getByRole('button',{name:lang==='ar'?'إغلاق':'Dismiss'});await dismiss.focus();await page.keyboard.press('Enter');await expect(toast).toHaveCount(0);await page.reload();await expect(toast).toBeVisible();await page.clock.fastForward(6001);await expect(toast).toHaveCount(0);
});
