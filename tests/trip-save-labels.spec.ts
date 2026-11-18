import{test,expect}from'@playwright/test';
for(const lang of ['ar','en'])test(`trip save actions name their plan in list detail and saved views ${lang}`,async({page})=>{
 await page.route('**/api/config',r=>r.fulfill({json:{google:false}}));await page.route('**/api/me',r=>r.fulfill({json:{user:null}}));
 await page.setViewportSize({width:390,height:900});await page.goto(`/${lang}/trips/`);
 const card=page.locator('.trip-card').first(),title=await card.locator('h3').innerText(),save=card.locator('.save-button');
 await expect(save).toBeEnabled();await expect(save).toHaveAttribute('aria-label',(lang==='ar'?'حفظ ':'Save ')+title);
 await save.click();await expect(save).toHaveAttribute('aria-label',(lang==='ar'?'إزالة ':'Remove ')+title+(lang==='ar'?' من المحفوظات':' from saved'));
 await card.locator('.trip-link').click();await expect(page.locator('.title-save .save-button')).toHaveAttribute('aria-label',(lang==='ar'?'إزالة ':'Remove ')+title+(lang==='ar'?' من المحفوظات':' from saved'));
 await page.goto(`/${lang}/saved/`);const saved=page.locator('.trip-card').first();await expect(saved.locator('h3')).toHaveText(title);await saved.scrollIntoViewIfNeeded();await page.screenshot({path:`/downloads/egypti-b32-trip-save-${lang}-390.png`});
 await saved.locator('.save-button').click();await expect(page.locator('.trip-card')).toHaveCount(0);
});
