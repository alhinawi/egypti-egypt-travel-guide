import{test,expect}from'@playwright/test';
import{themes}from'../src/lib/themes';
import{itineraries}from'../src/lib/data';
for(const lang of['ar','en'])for(const width of[390,1280])test(`all programme-card titles print black across themes ${lang} ${width}`,async({page})=>{
 test.setTimeout(120000);await page.setViewportSize({width,height:900});await page.route('**/api/**',r=>r.fulfill({status:503}));
 for(const trip of itineraries){await page.goto(`/${lang}/trips/${trip.id}/`);await expect(page.locator('html')).toHaveAttribute('lang',lang);await page.evaluate(()=>document.fonts.ready);await page.emulateMedia({media:'print'});await page.evaluate(()=>document.fonts.ready);
 for(const theme of themes){await page.evaluate(t=>document.documentElement.dataset.theme=t,theme.id);const cards=page.locator('.day .place-card');expect(await cards.count()).toBeGreaterThan(0);for(const card of await cards.all()){await expect(card).toHaveCSS('background-color','rgb(255, 255, 255)');await expect(card.locator('.place-link h3')).toHaveCSS('color','rgb(0, 0, 0)');await expect(card.locator('.place-link h3')).toHaveCSS('font-size','15px');await expect(card.locator('.place-link h3')).toHaveCSS('margin','4px 0px');await expect(card.locator('.place-link>p')).toHaveCSS('color','rgb(0, 0, 0)')}}
 await page.emulateMedia({media:'screen'});
 }
});
