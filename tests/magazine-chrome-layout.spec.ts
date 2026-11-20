import{test,expect}from'@playwright/test';
import baseline from'./fixtures/magazine-chrome-baseline.json';
import{themes}from'../src/lib/themes';
const properties=["fontSize", "lineHeight", "letterSpacing", "margin", "padding", "gap", "width", "height", "minHeight", "minWidth", "borderRadius", "color", "backgroundColor", "alignItems", "display"];
for(const lang of['ar','en'])for(const width of[360,361,390,600,601,900,901,1280])test(`magazine-chrome Tailwind ${lang} ${width}`,async({page})=>{
 await page.setViewportSize({width,height:900});await page.route('**/api/**',r=>r.fulfill({status:503}));await page.goto(`/${lang}/`);await expect(page.locator('html')).toHaveAttribute('lang',lang);await page.evaluate(()=>document.fonts.ready);const card=page.locator('.mag-kicker:not(.region-discovery *),.mag-text-link:not(.region-discovery *),.mag-promise');await expect(card.first()).toBeAttached();
 const capture=()=>card.evaluateAll((es,props)=>es.flatMap(e=>[e,...e.querySelectorAll('*')].map(n=>{const c=getComputedStyle(n);return{tag:n.tagName,text:n.children.length?'':n.textContent?.replace(/^05 \/ /,'04 / '),href:n.getAttribute('href'),style:Object.fromEntries(props.map(k=>[k,c[k as keyof CSSStyleDeclaration]] ))}})),properties);
 for(const theme of themes){await page.evaluate(t=>document.documentElement.dataset.theme=t,theme.id);await page.mouse.move(0,0);await page.waitForTimeout(180);expect(await capture()).toEqual((baseline as Record<string,unknown>)[`${lang}-${width}--${theme.id}`]);if(width===390||width===1280){await page.emulateMedia({media:'print'});await page.evaluate(()=>document.fonts.ready);expect(await capture()).toEqual((baseline as Record<string,unknown>)[`${lang}-${width}--${theme.id}-print`]);await page.emulateMedia({media:'screen'});await page.evaluate(()=>document.fonts.ready)}}
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
});
for(const lang of['ar','en'])test(`magazine-chrome promise keyboard ${lang}`,async({page})=>{
 await page.route('**/api/**',r=>r.fulfill({status:503}));await page.goto(`/${lang}/`);await expect(page.locator('html')).toHaveAttribute('lang',lang);const link=page.locator('.mag-promise>a');await link.focus();await page.keyboard.press('Tab');await page.keyboard.press('Shift+Tab');await expect(link).toBeFocused();expect(await link.evaluate(n=>{const c=getComputedStyle(n);return{visible:n.matches(':focus-visible'),width:c.outlineWidth,style:c.outlineStyle}})).toEqual({visible:true,width:'3px',style:'solid'});await page.keyboard.press('Enter');await expect(page).toHaveURL(new RegExp(`/${lang}/about/`));
});
for(const lang of['ar','en'])for(const kind of['section','trip'])test(`magazine-chrome ${kind} link ${lang}`,async({page})=>{
 await page.route('**/api/**',r=>r.fulfill({status:503}));await page.goto(`/${lang}/`);await expect(page.locator('html')).toHaveAttribute('lang',lang);const link=page.locator(kind==='section'?'.mag-section-head>.mag-text-link':'.mag-trip-copy>.mag-text-link').first();const href=await link.getAttribute('href');expect(href).toMatch(new RegExp(`^/${lang}/`));await link.click();await expect(page).toHaveURL(new RegExp(href!));
});
