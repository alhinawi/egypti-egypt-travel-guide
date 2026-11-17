import{test,expect}from'@playwright/test';
for(const lang of ['ar','en'])test(`show more continues keyboard browsing ${lang}`,async({page})=>{
 await page.setViewportSize({width:390,height:900});await page.emulateMedia({reducedMotion:'reduce'});await page.goto(`/${lang}/encyclopedia/`);
 const cards=page.locator('.places-grid .place-card'),more=page.getByRole('button',{name:lang==='ar'?/شوف أماكن أكتر/:/Show more places/});
 await expect(cards).toHaveCount(24);await expect(more).toBeEnabled();await more.focus();await page.keyboard.press('Enter');await expect(cards).toHaveCount(48);await expect(cards.nth(24).locator('.place-link')).toBeFocused();
 await expect(page.locator('.browse-progress')).toContainText('48 / 154');await cards.nth(24).locator('.place-link').scrollIntoViewIfNeeded();await cards.nth(24).locator('img').first().evaluate(async(im:HTMLImageElement)=>{await im.decode()});await page.screenshot({path:`/downloads/egypti-b23-more-${lang}-390.png`});
 await page.getByRole('searchbox').fill(lang==='ar'?'مننا':'Menna');await expect(cards).toHaveCount(1);await expect(page.getByRole('searchbox')).toBeFocused();await expect(page.locator('.browse-progress')).toContainText('1 / 1');
 await page.getByRole('button',{name:lang==='ar'?'مسح الفلاتر':'Reset filters'}).click();await expect(cards).toHaveCount(24);
 for(let count=48;count<=168;count+=24){const first=count-24;await more.focus();await page.keyboard.press('Enter');await expect(cards).toHaveCount(Math.min(count,154));await expect(cards.nth(first).locator('.place-link')).toBeFocused()}
 await expect(more).toHaveCount(0);await expect(page.locator('.browse-progress')).toContainText('154 / 154');
});
