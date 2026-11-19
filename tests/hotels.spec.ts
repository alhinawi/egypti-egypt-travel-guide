import{test,expect}from'@playwright/test';
test('hotel-area ideas avoid unsupported proximity claims and keep unpriced external links at 390',async({page})=>{await page.setViewportSize({width:390,height:844});for(const [id,photo]of[['giza-pyramids',true],['abu-simbel',false],['blue-lagoon',true],['philae',true]]as const){await page.goto('/ar/places/'+id+'/');const section=page.locator('.nearby-hotels');await section.scrollIntoViewIfNeeded();await expect(section).toBeVisible();await expect(section.locator('.hotel-card')).toHaveCount(id==='giza-pyramids'||id==='abu-simbel'?2:3);if(photo){for(const img of await section.locator('img').all()){await img.scrollIntoViewIfNeeded();await expect.poll(()=>img.evaluate((x:HTMLImageElement)=>x.complete&&x.naturalWidth>0)).toBe(true)}await expect(section.locator('figcaption')).toHaveCount(0)}else await expect(section.locator('.hotel-photo-unavailable').first()).toBeVisible();await expect(section.locator('.hotel-distance')).toHaveCount(0);await section.locator('h2').scrollIntoViewIfNeeded();expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);await page.screenshot({path:'/downloads/egypti-hotels-'+id+'-390.png'})}await page.goto('/en/places/egyptian-museum/');await expect(page.locator('.nearby-hotels')).toContainText('Hotel ideas in Cairo');await expect(page.locator('.nearby-hotels')).not.toContainText('Dahab Hostel')});

for(const lang of ['ar','en'])for(const width of [390,760,761,1280])test(`Tailwind hotel ideas preserve inclusive breakpoint and honest fallback ${lang} ${width}`,async({page})=>{
 await page.setViewportSize({width,height:1400});
 for(const id of ['giza-pyramids','abu-simbel']){
  await page.goto(`/${lang}/places/${id}/`);const section=page.locator('.nearby-hotels');
  await expect(section.locator('.hotel-card')).toHaveCount(2);
  const columns=await section.locator('.hotel-grid').evaluate(e=>getComputedStyle(e).gridTemplateColumns.split(' ').length);expect(columns).toBe(width<=760?1:3);
  await expect(section).toHaveCSS('margin-top',width<=760?'48px':'64px');
  await expect(section.locator('.hotel-card').first()).toHaveCSS('border-top-width','1px');
  if(id==='giza-pyramids')await expect(section.locator('img').first()).toHaveCSS('height',width<=760?'220px':'190px');
  else{await expect(section.locator('.hotel-photo-unavailable')).toHaveCount(2);await expect(section.locator('.hotel-photo-unavailable').first()).toHaveCSS('height','160px')}
  await expect(section.locator('figcaption,.hotel-distance,form,input,iframe')).toHaveCount(0);
  for(const a of await section.locator('.hotel-links a').all()){await expect(a).toHaveAttribute('target','_blank');await expect(a).toHaveAttribute('rel','noreferrer')}
  for(const theme of ['midnight','night','sand','nile']){await page.evaluate(theme=>document.documentElement.dataset.theme=theme,theme);expect(await section.locator('.hotel-card').first().evaluate(e=>getComputedStyle(e).backgroundColor)).toBe(await page.locator('.header').evaluate(e=>getComputedStyle(e).backgroundColor))}
  expect(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth)).toBe(false);
 }
});
