import{test,expect}from'@playwright/test';
import baseline from'./fixtures/magazine-editorial-baseline.json';
import{themes}from'../src/lib/themes';
const properties=['fontSize','lineHeight','margin','padding','gap','width','height','minHeight','minWidth','gridTemplateColumns','borderRadius','top','insetInlineStart','objectPosition','transform','color','backgroundColor','border','backdropFilter','zIndex'];
for(const lang of['ar','en'])for(const width of[360,361,390,600,601,900,901,1280])test(`magazine-editorial Tailwind ${lang} ${width}`,async({page})=>{
 await page.setViewportSize({width,height:900});await page.route('**/api/**',r=>r.fulfill({status:503}));await page.goto(`/${lang}/`);await expect(page.locator('html')).toHaveAttribute('lang',lang);await page.evaluate(()=>document.fonts.ready);const card=page.locator('.mag-editorial');await expect(card).toBeAttached();
 const capture=()=>card.evaluate((e,props)=>[e,...e.querySelectorAll('*')].map(n=>{const c=getComputedStyle(n);return{tag:n.tagName,text:n.children.length?'':n.textContent,href:n.getAttribute('href'),style:Object.fromEntries(props.map(k=>[k,c[k as keyof CSSStyleDeclaration]]))}}),properties);
 for(const theme of themes){await page.evaluate(t=>document.documentElement.dataset.theme=t,theme.id);await page.mouse.move(0,0);await page.waitForTimeout(180);expect(await capture()).toEqual((baseline as Record<string,unknown>)[`${lang}-${width}--${theme.id}`]);if(width===390||width===1280){await page.emulateMedia({media:'print'});await page.evaluate(()=>document.fonts.ready);expect(await capture()).toEqual((baseline as Record<string,unknown>)[`${lang}-${width}--${theme.id}-print`]);await page.emulateMedia({media:'screen'});await page.evaluate(()=>document.fonts.ready)}}
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
});
for(const lang of['ar','en'])for(const reducedMotion of['reduce','no-preference']as const)test(`magazine-editorial stamp hover ${lang} ${reducedMotion}`,async({page})=>{
 await page.emulateMedia({reducedMotion});await page.route('**/api/**',r=>r.fulfill({status:503}));await page.goto(`/${lang}/`);await expect(page.locator('html')).toHaveAttribute('lang',lang);const stamp=page.locator('.mag-editorial-stamp');await stamp.hover();
 await expect.poll(()=>stamp.evaluate(n=>{const p=document.createElement('span');p.style.backgroundColor='var(--paper)';document.body.append(p);const same=getComputedStyle(n).backgroundColor===getComputedStyle(p).backgroundColor;p.remove();return same})).toBe(true);
 expect(await stamp.evaluate(n=>getComputedStyle(n).transitionDuration)).toBe(reducedMotion==='reduce'?'0s':'0.15s');
});
for(const lang of['ar','en'])test(`magazine-editorial stamp keyboard ${lang}`,async({page})=>{
 await page.route('**/api/**',r=>r.fulfill({status:503}));await page.goto(`/${lang}/`);await expect(page.locator('html')).toHaveAttribute('lang',lang);const stamp=page.locator('.mag-editorial-stamp');await stamp.focus();await page.keyboard.press('Tab');await expect(page.locator('.mag-editorial .mag-button')).toBeFocused();await page.keyboard.press('Shift+Tab');await expect(stamp).toBeFocused();
 expect(await stamp.evaluate(n=>{const c=getComputedStyle(n);return{visible:n.matches(':focus-visible'),width:c.outlineWidth,style:c.outlineStyle,offset:c.outlineOffset}})).toEqual({visible:true,width:'3px',style:'solid',offset:'4px'});
 await page.keyboard.press('Enter');await expect(page).toHaveURL(new RegExp(`/${lang}/virtual-tours/`));
});
for(const lang of['ar','en'])test(`magazine-editorial call to action ${lang}`,async({page})=>{
 await page.route('**/api/**',r=>r.fulfill({status:503}));await page.goto(`/${lang}/`);await expect(page.locator('html')).toHaveAttribute('lang',lang);const note=page.locator('.mag-editorial-note');await expect(note).toBeVisible();await expect(note).toContainText(lang==='ar'?'مش معاينة':'not a preview');await page.locator('.mag-editorial .mag-button').click();await expect(page).toHaveURL(new RegExp(`/${lang}/virtual-tours/`));
});
