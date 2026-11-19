import{test,expect}from'@playwright/test';
import baseline from'./fixtures/magazine-trip-baseline.json';
import{themes}from'../src/lib/themes';
for(const lang of['ar','en'])for(const width of[360,361,390,600,601,900,901,1280])for(const route of[''])test(`magazine-trip Tailwind ${lang} ${width} ${route||'home'}`,async({page})=>{
 await page.setViewportSize({width,height:900});await page.route('**/api/**',r=>r.fulfill({status:503}));await page.goto(`/${lang}/${route}`);await expect(page.locator('html')).toHaveAttribute('lang',lang);await page.evaluate(()=>document.fonts.ready);const card=page.locator('.mag-trip-row');await expect(card).toBeAttached();
 const capture=()=>card.evaluate(e=>[e,...e.querySelectorAll('*')].map(n=>{const c=getComputedStyle(n);return{tag:n.tagName,text:n.children.length?'':n.textContent,href:n.getAttribute('href'),style:Object.fromEntries(['fontSize', 'lineHeight', 'margin', 'padding', 'gap', 'width', 'height', 'gridTemplateColumns', 'overflowX', 'scrollSnapType', 'scrollSnapAlign', 'borderRadius', 'top', 'bottom'].map(k=>[k,c[k as keyof CSSStyleDeclaration]]))}}));
 for(const theme of themes){await page.evaluate(t=>document.documentElement.dataset.theme=t,theme.id);expect(await capture()).toEqual((baseline as Record<string,unknown>)[`${lang}-${width}-${route}`])}
 if(width===390||width===1280){await page.emulateMedia({media:'print'});await page.evaluate(()=>document.fonts.ready);expect(await capture()).toEqual((baseline as Record<string,unknown>)[`${lang}-${width}-${route}-print`])}
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
});
for(const lang of['ar','en'])for(const reducedMotion of['reduce','no-preference']as const)test(`magazine-trip hover ${lang} ${reducedMotion}`,async({page})=>{
 await page.emulateMedia({reducedMotion});await page.setViewportSize({width:1280,height:900});await page.route('**/api/**',r=>r.fulfill({status:503}));await page.goto(`/${lang}/`);await expect(page.locator('html')).toHaveAttribute('lang',lang);const card=page.locator('.mag-trip').first();await card.hover();const image=card.locator('img');
 await expect.poll(()=>image.evaluate(n=>getComputedStyle(n).transform)).toBe(reducedMotion==='reduce'?'none':'matrix(1.035, 0, 0, 1.035, 0, 0)');
 expect(await image.evaluate(n=>getComputedStyle(n).transitionDuration)).toBe(reducedMotion==='reduce'?'0s':'0.7s');
});
for(const lang of['ar','en'])test(`magazine-trip save state ${lang}`,async({page})=>{
 await page.route('**/api/**',r=>r.fulfill({status:503}));await page.goto(`/${lang}/`);await expect(page.locator('html')).toHaveAttribute('lang',lang);const button=page.locator('.mag-trip .save-button').first();await expect(button).toBeEnabled();await button.click();await expect(button).toHaveAttribute('aria-pressed','true');
 expect(await button.evaluate(n=>{const c=getComputedStyle(n),probe=document.createElement('span');probe.style.color='var(--paper)';probe.style.backgroundColor='var(--accent)';document.body.append(probe);const p=getComputedStyle(probe),result=c.color===p.color&&c.backgroundColor===p.backgroundColor;probe.remove();return result})).toBe(true);
 await button.click();await expect(button).toHaveAttribute('aria-pressed','false');expect(await button.evaluate(n=>getComputedStyle(n).backgroundColor)).toBe('rgba(10, 28, 44, 0.91)');
});
