import{test,expect}from'@playwright/test';
import baseline from'./fixtures/magazine-layout-baseline.json';
import{themes}from'../src/lib/themes';
const properties=["width", "height", "maxWidth", "padding", "margin", "gap", "display", "gridTemplateColumns", "overflowX", "scrollSnapType", "scrollbarWidth", "objectFit", "transform", "transition"];
for(const lang of['ar','en'])for(const width of[360,361,390,600,601,900,901,1280])test(`magazine-layout Tailwind ${lang} ${width}`,async({page})=>{
 await page.setViewportSize({width,height:900});await page.route('**/api/**',r=>r.fulfill({status:503}));await page.goto(`/${lang}/`);await expect(page.locator('html')).toHaveAttribute('lang',lang);await page.evaluate(()=>document.fonts.ready);const card=page.locator('.mag-content');await expect(card).toBeAttached();
 const capture=()=>card.evaluate((e,props)=>[e,...e.querySelectorAll('*')].filter(n=>n.matches('.mag-content,.mag-section,.mag-destinations,.mag-place-grid,.mag-destinations img,.mag-destinations a,.mag-place-grid img')).map(n=>{const c=getComputedStyle(n);return{tag:n.tagName,text:n.children.length?'':n.textContent,href:n.getAttribute('href'),style:Object.fromEntries(props.map(k=>[k,c[k as keyof CSSStyleDeclaration]]))}}),properties);
 for(const theme of themes){await page.evaluate(t=>document.documentElement.dataset.theme=t,theme.id);await page.mouse.move(0,0);await page.waitForTimeout(180);expect(await capture()).toEqual((baseline as Record<string,unknown>)[`${lang}-${width}--${theme.id}`]);if(width===390||width===1280){await page.emulateMedia({media:'print'});await page.evaluate(()=>document.fonts.ready);expect(await capture()).toEqual((baseline as Record<string,unknown>)[`${lang}-${width}--${theme.id}-print`]);await page.emulateMedia({media:'screen'});await page.evaluate(()=>document.fonts.ready)}}
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
});
for(const lang of['ar','en'])for(const reducedMotion of['reduce','no-preference']as const)test(`magazine destination hover ${lang} ${reducedMotion}`,async({page})=>{
 await page.emulateMedia({reducedMotion});await page.setViewportSize({width:1280,height:900});await page.route('**/api/**',r=>r.fulfill({status:503}));await page.goto(`/${lang}/`);await expect(page.locator('html')).toHaveAttribute('lang',lang);const card=page.locator('.mag-destinations a').first();await card.hover();const image=card.locator('img');
 await expect.poll(()=>image.evaluate(n=>getComputedStyle(n).transform)).toBe(reducedMotion==='reduce'?'none':'matrix(1.035, 0, 0, 1.035, 0, 0)');
 expect(await image.evaluate(n=>getComputedStyle(n).transitionDuration)).toBe(reducedMotion==='reduce'?'0s':'0.7s');
});
for(const lang of['ar','en'])test(`magazine destination mobile carousel ${lang}`,async({page})=>{
 await page.setViewportSize({width:390,height:900});await page.route('**/api/**',r=>r.fulfill({status:503}));await page.goto(`/${lang}/`);await expect(page.locator('html')).toHaveAttribute('lang',lang);const row=page.locator('.mag-destinations');expect(await row.evaluate(e=>e.scrollWidth>e.clientWidth)).toBe(true);const last=row.locator('a').last();await last.scrollIntoViewIfNeeded();await expect(last).toBeInViewport();expect(await row.evaluate(e=>Math.abs(e.scrollLeft))).toBeGreaterThan(0);await expect(row).toHaveCSS('scroll-snap-type','x mandatory');const href=await last.getAttribute('href');await last.click();await expect(page).toHaveURL(new RegExp(href!));
});
