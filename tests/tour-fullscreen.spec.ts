import{test,expect}from'@playwright/test';
import tours from'../src/lib/tours.json';
for(const lang of ['ar','en'])for(const api of ['missing','rejected'])test(`tour dialog mobile fallback ${lang} ${api}`,async({browser})=>{
 const context=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true});const page=await context.newPage();
 await page.addInitScript(mode=>{if(mode==='missing')Object.defineProperty(Element.prototype,'requestFullscreen',{value:undefined,configurable:true});else Element.prototype.requestFullscreen=()=>Promise.reject(new Error('unsupported'));},api);
 // Isolate UI behavior from third-party availability. Provider rendering is checked separately.
 await page.route('https://my.matterport.com/**',route=>route.abort());
 await page.goto(`/${lang}/places/abu-simbel/`);const action=page.locator('.virtual-card-head button');await action.tap();
 const dialog=page.getByRole('dialog');await expect(dialog).toBeVisible();const bounds=await dialog.boundingBox();expect(bounds!.width).toBe(390);expect(bounds!.height).toBe(844);
 await expect(dialog.locator('iframe')).toHaveAttribute('src',/my\.matterport\.com/);await expect(page.locator('body')).toHaveCSS('overflow','hidden');
 await page.getByRole('button',{name:lang==='ar'?'اقفل الجولة المكبرة':'Close enlarged visit'}).tap();await expect(dialog).toHaveCount(0);await expect(action).toBeFocused();
 await action.tap();await page.keyboard.press('Escape');await expect(dialog).toHaveCount(0);await context.close();
});
test('every card has a working player action or an external full-page source',async({page})=>{
 await page.route('https://**/*',route=>route.abort());await page.goto('/en/virtual-tours/');const actions=page.locator('.virtual-card-head .virtual-symbol');await expect(actions).toHaveCount(tours.length);
 for(let i=0;i<tours.length;i++){const action=actions.nth(i);if(await action.evaluate(e=>e.tagName)==='A'){await expect(action).toHaveAttribute('target','_blank');await expect(action).toHaveAttribute('href',/^https:\/\//);await expect(action).toHaveAccessibleName(/Open enlarged visit with provider/);}else{await action.click();await expect(page.getByRole('dialog')).toBeVisible();await page.getByRole('button',{name:'Close enlarged visit'}).click();}}
 await page.goto('/en/places/qalawun-complex/');await expect(page.locator('.virtual-card-head a')).toHaveAttribute('href','https://qalawun.aa-ken.jp/vrtour/en/');
});

for(const lang of ['ar','en'])test(`chapter visits preserve their starting points ${lang}`,async({page})=>{
 await page.setViewportSize({width:390,height:844});
 await page.route('https://www.youtube-nocookie.com/**',route=>route.abort());
 for(const [place,seconds,video]of [['bubastis',305,'hnoVXuvIX6o'],['tanis',1433,'hnoVXuvIX6o'],['al-aqmar-mosque',1145,'YVYDz_coSfY'],['bab-al-futuh',1900,'YVYDz_coSfY']] as const){
  await page.goto(`/${lang}/places/${place}/`);
  await expect(page.locator('.virtual-card .primary-button')).toHaveAttribute('href',`https://www.youtube.com/watch?v=${video}&t=${seconds}s`);
  await page.locator('.virtual-card-head button').click();
  await expect(page.getByRole('dialog').locator('iframe')).toHaveAttribute('src',`https://www.youtube-nocookie.com/embed/${video}?start=${seconds}`);
  await page.keyboard.press('Escape');await expect(page.getByRole('dialog')).toHaveCount(0);
 }
});

for(const lang of ['ar','en'])test(`project documentary keeps its own source label ${lang}`,async({page})=>{
 await page.setViewportSize({width:390,height:844});await page.goto(`/${lang}/places/heracleopolis-magna/`);
 const links=page.locator('.virtual-card .recorded-video-links');
 await expect(links.getByRole('link',{name:lang==='ar'?'صفحة المصدر الأصلي':'Original source page'})).toHaveAttribute('href','https://heracleopolismagna.com/blog/2019/01/20/documental-en-busca-de-un-tiempo-olvidado/');
 await expect(links).not.toContainText('Google Arts');
});
