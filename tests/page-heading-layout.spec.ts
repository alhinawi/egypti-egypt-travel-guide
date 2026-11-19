import{test,expect}from'@playwright/test';
import baseline from'./fixtures/page-heading-baseline.json';
import{themes}from'../src/lib/themes';
for(const lang of['ar','en'])for(const width of[390,600,601,1280])for(const route of['destinations/','places/giza-pyramids/','trips/','trips/cairo-four-day-program/','saved/','virtual-tours/','encyclopedia/','governorates/','guides/'])test(`page-heading Tailwind ${lang} ${width} ${route}`,async({page})=>{
 await page.setViewportSize({width,height:900});await page.route('**/api/**',r=>r.fulfill({status:503}));await page.goto(`/${lang}/${route}`);await expect(page.locator('html')).toHaveAttribute('lang',lang);await page.evaluate(()=>document.fonts.ready);const heading=page.locator('.page-heading');await expect(heading).toHaveCount(1);await expect(heading.locator('h1')).toBeVisible();const capture=()=>heading.evaluate(e=>[e,...e.querySelectorAll('*')].filter(n=>['HEADER','H1','P'].includes(n.tagName)).map(n=>{const c=getComputedStyle(n);return Object.fromEntries(['fontSize','lineHeight','margin','maxWidth'].map(k=>[k,c[k as keyof CSSStyleDeclaration]]))}));
 for(const theme of themes){await page.evaluate(t=>document.documentElement.dataset.theme=t,theme.id);expect(await capture()).toEqual((baseline as Record<string,unknown>)[`${lang}-${width}-${route}`])}
 if(width===390||width===1280){await page.emulateMedia({media:'print'});await page.evaluate(()=>document.fonts.ready);expect(await capture()).toEqual((baseline as Record<string,unknown>)[`${lang}-${width}-${route}-print`])}
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
});
