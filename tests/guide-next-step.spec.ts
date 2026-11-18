import{test,expect}from'@playwright/test';
for(const lang of ['ar','en'])test(`Heba selection opens the next step at390px ${lang}`,async({page})=>{
 await page.setViewportSize({width:390,height:900});await page.route('**/api/demo-status',r=>r.fulfill({json:{enabled:true}}));await page.goto(`/${lang}/guides/`);
 await page.locator('.guide-profile').filter({has:page.getByRole('heading',{name:lang==='ar'?'هبة':'Heba',exact:true})}).getByRole('button').click();
 await expect(page.locator('.guide-profile-grid')).toHaveCount(0);await expect(page.locator('.guide-selection')).toBeFocused();await expect(page.locator('.guide-selection .place-card')).toHaveCount(3);
 const start=page.locator('.guide-selection a.primary-button');await expect(start).toHaveAttribute('href',`/${lang}/places/nubian-museum/`);await expect(start).toBeInViewport();
 await page.evaluate(()=>document.fonts.ready);await page.screenshot({path:`/downloads/egypti-b70-next-step-${lang}-390.png`});expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 await start.click();await expect(page).toHaveURL(new RegExp('/'+lang+'/places/nubian-museum/'));await page.goBack();await page.getByRole('button',{name:lang==='ar'?'غيّر رفيق الحكاية':'Change companion'}).click();await expect(page.locator('.guide-profile')).toHaveCount(12);
});
