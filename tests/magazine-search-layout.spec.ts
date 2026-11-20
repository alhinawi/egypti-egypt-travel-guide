import{test,expect}from'@playwright/test';
import baseline from'./fixtures/magazine-search-baseline.json';
import{themes}from'../src/lib/themes';
const properties=["fontSize", "fontFamily", "lineHeight", "letterSpacing", "margin", "padding", "gap", "width", "height", "minHeight", "minWidth", "maxWidth", "borderRadius", "color", "backgroundColor", "alignItems", "display", "border", "outline"];
for(const lang of['ar','en'])for(const width of[360,361,390,600,601,900,901,1280])test(`magazine-search Tailwind ${lang} ${width}`,async({page})=>{
 await page.setViewportSize({width,height:900});await page.route('**/api/**',r=>r.fulfill({status:503}));await page.goto(`/${lang}/`);await expect(page.locator('html')).toHaveAttribute('lang',lang);await page.evaluate(()=>document.fonts.ready);const card=page.locator('.mag-search-wrap');await expect(card).toBeAttached();
 const capture=()=>card.evaluate((e,props)=>[e,...e.querySelectorAll('*')].map(n=>{const c=getComputedStyle(n);return{tag:n.tagName,text:n.children.length?'':n.textContent,href:n.getAttribute('href'),style:Object.fromEntries(props.map(k=>[k,c[k as keyof CSSStyleDeclaration]]))}}),properties);
 for(const theme of themes){await page.evaluate(t=>document.documentElement.dataset.theme=t,theme.id);await page.mouse.move(0,0);await page.waitForTimeout(180);expect(await capture()).toEqual((baseline as Record<string,unknown>)[`${lang}-${width}--${theme.id}`]);if(width===390||width===1280){await page.emulateMedia({media:'print'});await page.evaluate(()=>document.fonts.ready);expect(await capture()).toEqual((baseline as Record<string,unknown>)[`${lang}-${width}--${theme.id}-print`]);await page.emulateMedia({media:'screen'});await page.evaluate(()=>document.fonts.ready)}}
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
});
for(const lang of['ar','en'])for(const method of['keyboard','button'])test(`magazine-search submit ${lang} ${method}`,async({page})=>{
 await page.route('**/api/**',r=>r.fulfill({status:503}));await page.setViewportSize({width:390,height:900});await page.goto(`/${lang}/`);await expect(page.locator('html')).toHaveAttribute('lang',lang);const input=page.locator('.mag-search input');await input.fill(lang==='ar'?'الأقصر':'Luxor');if(method==='keyboard')await input.press('Enter');else await page.locator('.mag-search>button').click();await expect(page).toHaveURL(new RegExp(`/${lang}/explore/\\?q=`));expect(new URL(page.url()).searchParams.get('q')).toBe(lang==='ar'?'الأقصر':'Luxor');
});
for(const lang of['ar','en'])for(const [index,category]of['culture','sea','nature'].entries())test(`magazine-search category ${lang} ${category}`,async({page})=>{
 await page.route('**/api/**',r=>r.fulfill({status:503}));await page.goto(`/${lang}/`);await expect(page.locator('html')).toHaveAttribute('lang',lang);await page.locator('.mag-search-tags a').nth(index).click();await expect(page).toHaveURL(new RegExp(`/${lang}/explore/\\?category=${category}`));
});
