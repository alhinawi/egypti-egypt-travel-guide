import{test,expect}from'@playwright/test';
for(const lang of ['ar','en']){
 test(`blocked storage reads do not break navigation ${lang}`,async({page})=>{
  await page.setViewportSize({width:390,height:900});
  const errors:string[]=[];page.on('pageerror',error=>errors.push(error.message));
  await page.addInitScript(()=>{Storage.prototype.getItem=function(){throw new DOMException('Storage blocked','SecurityError')}});
  await page.goto(`/${lang}/`);
  const menu=page.getByRole('button',{name:lang==='ar'?'القائمة':'Menu',exact:true});
  await menu.click();await expect(page.locator('.site-drawer')).toBeVisible();
  await page.locator('.themes-trigger').click();await expect(page.locator('.theme-picker')).toBeVisible();
  await page.keyboard.press('Escape');await expect(page.locator('.theme-picker')).not.toBeVisible();
  await page.keyboard.press('Escape');await expect(page.locator('.site-drawer')).not.toBeVisible();
  await expect(page.locator('main')).toBeVisible();expect(errors).toEqual([]);
 });
 test(`theme storage is unavailable ${lang}`,async({page})=>{
  await page.setViewportSize({width:390,height:900});
  const errors:string[]=[];page.on('pageerror',error=>errors.push(error.message));
  await page.addInitScript(()=>{const original=Storage.prototype.setItem;(window as unknown as {restoreThemeStorage:()=>void}).restoreThemeStorage=()=>{Storage.prototype.setItem=original};Storage.prototype.setItem=function(key,value){if(key==='egypti:theme')throw new DOMException('Storage full','QuotaExceededError');return original.call(this,key,value)}});
  await page.goto(`/${lang}/`);await page.getByRole('button',{name:lang==='ar'?'القائمة':'Menu',exact:true}).click();await page.locator('.themes-trigger').click();
  const options=page.locator('.theme-options button');const chosen=await options.nth(1).getAttribute('data-swatch');await options.nth(1).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme',chosen!);
  await page.locator('.themes-trigger').click();
  const notice=page.locator('.theme-picker .theme-storage-notice');await expect(notice).toBeVisible();
  await expect(notice).toContainText(lang==='ar'?'ما نقدرش':'unavailable');
  await page.screenshot({path:`/downloads/egypti-b28-theme-${lang}-390.png`});
  await page.evaluate(()=>(window as unknown as {restoreThemeStorage:()=>void}).restoreThemeStorage());
  await options.nth(2).click();await page.locator('.themes-trigger').click();await expect(notice).toHaveCount(0);expect(errors).toEqual([]);
  await expect.poll(()=>page.evaluate(()=>localStorage.getItem('egypti:theme'))).toBe('sand');
 });
}

for(const lang of ['ar','en'])test(`normal theme choice survives reload ${lang}`,async({page})=>{
 await page.setViewportSize({width:390,height:900});await page.goto(`/${lang}/`);
 await page.getByRole('button',{name:lang==='ar'?'القائمة':'Menu',exact:true}).click();await page.locator('.themes-trigger').click();
 await page.locator('.theme-options button[data-swatch="night"]').click();await expect(page.locator('html')).toHaveAttribute('data-theme','night');
 await page.reload();await expect(page.locator('html')).toHaveAttribute('data-theme','night');
 await page.getByRole('button',{name:lang==='ar'?'القائمة':'Menu',exact:true}).click();await page.locator('.themes-trigger').click();
 await expect(page.locator('.theme-options button[data-swatch="night"]')).toHaveAttribute('aria-pressed','true');await expect(page.locator('.theme-picker .theme-storage-notice')).toHaveCount(0);
});
