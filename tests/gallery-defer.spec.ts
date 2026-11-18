import{test,expect}from'@playwright/test';
for(const lang of ['ar','en'])test(`hidden lightbox does not request full-size photo ${lang}`,async({page})=>{
 await page.setViewportSize({width:390,height:900});const full:string[]=[];
 page.on('request',r=>{if(/\/photos\/places\/.*-1400\.webp/.test(r.url()))full.push(r.url())});
 await page.goto(`/${lang}/places/menna-tt69/`);await page.locator('.gallery-cover img').evaluate(async(im:HTMLImageElement)=>{await im.decode()});
 await expect(page.locator('.photo-lightbox img')).toHaveCount(0);expect(full).toEqual([]);
 await page.locator('.gallery-cover').click();await expect(page.locator('.photo-lightbox img')).toHaveCount(1);await page.locator('.photo-lightbox img').evaluate(async(im:HTMLImageElement)=>{await im.decode()});expect(full.length).toBeGreaterThan(0);
 await page.keyboard.press('Escape');await expect(page.locator('.photo-lightbox img')).toHaveCount(0);
 await page.locator('.gallery-cover').click();await page.locator('.photo-lightbox img').evaluate(async(im:HTMLImageElement)=>{await im.decode()});await expect(page.locator('.photo-lightbox')).toBeVisible();
});
