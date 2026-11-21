import{test,expect}from'@playwright/test';
for(const lang of ['ar','en'])test(`gallery preserves page position and restores scrolling ${lang}`,async({page})=>{
 await page.setViewportSize({width:390,height:900});await page.goto(`/${lang}/places/menna-tt69/`);
 const cover=page.locator('.gallery-cover');await cover.scrollIntoViewIfNeeded();await cover.click();
 const dialog=page.locator('.photo-lightbox');await expect(dialog).toBeVisible();const y=await page.evaluate(()=>window.scrollY);
 await page.mouse.move(180,430);await page.mouse.wheel(0,650);await page.waitForTimeout(250);expect(await page.evaluate(()=>window.scrollY)).toBe(y);
 await page.keyboard.press('End');await expect(dialog.locator('.lightbox-bar [role=status]')).toContainText('3 / 3');await page.screenshot({path:`/downloads/egypti-b22-gallery-${lang}-390.png`});
 await page.keyboard.press('Escape');await expect(dialog).not.toBeVisible();await expect(cover).toBeFocused();expect(await page.evaluate(()=>window.scrollY)).toBe(y);
 await page.mouse.move(180,430);await page.mouse.wheel(0,450);await expect.poll(()=>page.evaluate(()=>window.scrollY)).toBeGreaterThan(y+50);
 await cover.click();await expect(dialog).toBeVisible();await dialog.locator('.lightbox-bar button').click();await expect(dialog).not.toBeVisible();await expect(cover).toBeFocused();
 await expect.poll(()=>page.evaluate(()=>document.documentElement.style.overflow)).toBe('');
});
test('gallery restores existing inline scroll styles',async({page})=>{await page.goto('/en/places/menna-tt69/');await page.locator('.gallery-cover').click();await expect(page.locator('.photo-lightbox')).toBeVisible();await page.keyboard.press('Escape');await expect(page.locator('.photo-lightbox')).not.toBeVisible();await page.evaluate(()=>{document.documentElement.style.overflow='clip';document.body.style.overflow='auto'});await page.locator('.gallery-cover').click();await expect.poll(()=>page.evaluate(()=>document.body.style.overflow)).toBe('hidden');await page.keyboard.press('Escape');await expect.poll(()=>page.evaluate(()=>document.documentElement.style.overflow)).toBe('clip');await expect.poll(()=>page.evaluate(()=>document.body.style.overflow)).toBe('auto')});
