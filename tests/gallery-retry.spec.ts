import{test,expect}from'@playwright/test';
for(const lang of ['ar','en'])test(`gallery failed image can retry or navigate ${lang}`,async({page})=>{
 await page.setViewportSize({width:390,height:900});let fail=true;
 await page.route('**/photos/places/*-1400.webp',route=>fail?route.abort():route.continue());
 await page.goto(`/${lang}/places/menna-tt69/`);const cover=page.locator('.gallery-cover');await cover.click();
 const dialog=page.locator('.photo-lightbox'),retry=dialog.getByRole('button',{name:lang==='ar'?'جرّب تحميل الصورة تاني':'Retry photo'});
 await expect(retry).toBeVisible();await expect(dialog.locator('.gallery-image-error')).toContainText(lang==='ar'?'الصورة ما اتحمّلتش':'Photo could not load');
 await page.screenshot({path:`/downloads/egypti-b31-gallery-error-${lang}-390.png`});
 fail=false;await retry.focus();await page.keyboard.press('Enter');await expect(retry).toHaveCount(0);
 await expect(dialog.locator('.lightbox-stage')).toBeFocused();await dialog.locator('.lightbox-stage img').evaluate(async(im:HTMLImageElement)=>{await im.decode()});
 await page.keyboard.press('End');await expect(dialog.locator('.lightbox-bar [role=status]')).toContainText('3 / 3');await expect(retry).toHaveCount(0);
 await page.keyboard.press('Escape');await expect(dialog).not.toBeVisible();await expect(cover).toBeFocused();
});
