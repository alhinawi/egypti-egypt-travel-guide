import{test,expect}from'@playwright/test';
for(const lang of ['ar','en'])test(`visit checklist persists, isolates places and resets ${lang}`,async({page})=>{
 await page.setViewportSize({width:390,height:1200});await page.goto(`/${lang}/places/menna-tt69/`);const buttons=page.locator('.pack-list>button');await expect(buttons.first()).toBeEnabled();await buttons.nth(0).click();await buttons.nth(3).click();await page.reload();await expect(buttons.nth(0)).toHaveAttribute('aria-pressed','true');await expect(buttons.nth(3)).toHaveAttribute('aria-pressed','true');await expect(page.locator('.pack-count')).toHaveText('2/5');await page.locator('.visit-pack').screenshot({path:`/downloads/egypti-b35-checklist-${lang}-390.png`});
 await page.goto(`/${lang==='ar'?'en':'ar'}/places/menna-tt69/`);await expect(buttons.first()).toHaveAttribute('aria-pressed','true');await page.goto(`/${lang}/places/karnak/`);await expect(buttons.first()).toHaveAttribute('aria-pressed','false');await buttons.nth(1).click();await page.goto(`/${lang}/places/menna-tt69/`);await expect(buttons.first()).toHaveAttribute('aria-pressed','true');await page.locator('.checklist-reset').click();await expect(page.locator('.pack-count')).toHaveText('0/5');await page.reload();await expect(buttons.first()).toHaveAttribute('aria-pressed','false');await expect(page.locator('.checklist-reset')).toBeDisabled();await page.goto(`/${lang}/places/karnak/`);await expect(buttons.nth(1)).toHaveAttribute('aria-pressed','true');
});
test('checklist handles corrupt and blocked storage without breaking controls',async({page})=>{
 await page.addInitScript(()=>{localStorage.setItem('egypti:visit-checklist:menna-tt69','[0,0,4,99,-1,"2",null,{}]')});await page.goto('/en/places/menna-tt69/');await expect(page.locator('.pack-count')).toHaveText('2/5');await page.evaluate(()=>{Storage.prototype.setItem=function(){throw Error('blocked')}});await page.locator('.pack-list>button').nth(1).click();await expect(page.locator('.pack-count')).toHaveText('3/5');await expect(page.locator('.checklist-storage')).toContainText('could not store');await page.locator('.checklist-reset').click();await expect(page.locator('.pack-count')).toHaveText('0/5');
});
test('malformed checklist is ignored',async({page})=>{await page.addInitScript(()=>localStorage.setItem('egypti:visit-checklist:menna-tt69','{bad'));await page.goto('/en/places/menna-tt69/');await expect(page.locator('.pack-count')).toHaveText('0/5');await expect(page.locator('.checklist-storage')).toContainText('could not store');await page.locator('.pack-list>button').first().click();await expect(page.locator('.checklist-storage')).toContainText('saved for this place');});

for(const lang of ['ar','en'])for(const width of [390,1280])test(`Tailwind checklist keeps geometry, keyboard and theme colors ${lang} ${width}`,async({page})=>{
 await page.setViewportSize({width,height:1500});await page.goto(`/${lang}/places/karnak/`);
 const card=page.locator('.visit-pack'),buttons=card.locator('.pack-list>button');await expect(buttons.first()).toBeEnabled();
 await expect(buttons.first()).toHaveCSS('border-top-width','1px');await expect(buttons.first()).toHaveCSS('font-size','13px');
 await expect(card.locator('.checklist-storage')).toHaveCSS('line-height','21.6px');
 await expect(card.locator('h2')).toHaveCSS('font-size',width===390?(lang==='ar'?'21px':'24px'):'27px');
 await buttons.first().focus();await page.keyboard.press('Space');await expect(buttons.first()).toHaveAttribute('aria-pressed','true');
 await expect(card.locator('.pack-count')).toHaveText('1/5');await expect(buttons.first()).toBeFocused();
 const box=await buttons.first().boundingBox();expect(box!.height).toBeGreaterThanOrEqual(50);
 for(const theme of ['midnight','night','sand','nile']){
  await page.evaluate(theme=>document.documentElement.dataset.theme=theme,theme);
  expect(await buttons.first().evaluate(e=>getComputedStyle(e).backgroundColor)).toBe(await card.locator('.pack-count').evaluate(e=>getComputedStyle(e).backgroundColor));
 }
 expect(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth)).toBe(false);
});
