import{test,expect}from'@playwright/test';
import baseline from'./fixtures/section-heading-baseline.json';
import{themes}from'../src/lib/themes';
for(const lang of['ar','en'])for(const width of[360,361,390,600,601,1280])for(const route of['','destinations/cairo/'])test(`section-heading Tailwind ${lang} ${width} ${route||'home'}`,async({page})=>{
 await page.setViewportSize({width,height:900});await page.route('**/api/**',r=>r.fulfill({status:503}));await page.goto(`/${lang}/${route}`);await expect(page.locator('html')).toHaveAttribute('lang',lang);await page.evaluate(()=>document.fonts.ready);const heading=page.locator('.section-heading,.mag-section-head');await expect(heading).toHaveCount(route?2:4);
 const capture=()=>heading.evaluateAll(es=>es.flatMap(e=>[e,...e.querySelectorAll('*')].map(n=>{const c=getComputedStyle(n);return{tag:n.tagName,text:n.children.length?'':n.textContent,href:n.getAttribute('href'),style:Object.fromEntries(['fontSize','lineHeight','margin','maxWidth','gap','letterSpacing'].map(k=>[k,c[k as keyof CSSStyleDeclaration]]))}})));
 for(const theme of themes){await page.evaluate(t=>document.documentElement.dataset.theme=t,theme.id);expect(await capture()).toEqual((baseline as Record<string,unknown>)[`${lang}-${width}-${route}`])}
 if(width===390||width===1280){await page.emulateMedia({media:'print'});await page.evaluate(()=>document.fonts.ready);expect(await capture()).toEqual((baseline as Record<string,unknown>)[`${lang}-${width}-${route}-print`])}
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
});
