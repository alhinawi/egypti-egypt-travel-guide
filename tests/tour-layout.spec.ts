import{test,expect}from'@playwright/test';
import tours from'../src/lib/tours.json';
for(const lang of ['ar','en'])for(const width of [390,600,601,1280])test(`tour utilities preserve ${lang} layout at ${width}px`,async({browser})=>{
 const page=await browser.newPage({viewport:{width,height:1000}});
 await page.goto(`/${lang}/virtual-tours/`);
 const card=page.locator('.virtual-card').first();
 await expect(page.locator('.virtual-card')).toHaveCount(tours.length);
 await expect(card).toHaveCSS('padding',width<=600?'22px':'26px');
 await expect(card).toHaveCSS('gap','14px');
 await expect(card).toHaveCSS('border-radius','18px');
 await expect(card.locator('h3')).toHaveCSS('font-size','22px');
 await expect(card.locator('.virtual-title')).toHaveCSS('line-height',lang==='ar'?'30px':width<=600?'25.9px':'27.75px');
 await expect(card.locator('.virtual-symbol')).toHaveCSS('width','50px');
 await expect(card.locator('img')).toHaveCSS('height',width<=600?'215px':'220px');
 const columns=await page.locator('.virtual-grid').evaluate(e=>getComputedStyle(e).gridTemplateColumns.split(' ').length);
 expect(columns).toBe(width<=600?1:2);
 expect(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth)).toBe(false);
 await page.close();
});
