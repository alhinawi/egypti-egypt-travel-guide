import{test,expect}from'@playwright/test';
import tours from'../src/lib/tours.json';
const newVideos=tours.filter(t=>t.kind==='video'&&'checkedAt'in t);
for(const lang of ['ar','en'])test(`recorded videos use real external routes and exact scope ${lang}`,async({browser})=>{const c=await browser.newContext({viewport:{width:390,height:900},hasTouch:true,isMobile:true});const p=await c.newPage();await p.goto(`http://127.0.0.1:8787/${lang}/virtual-tours/`);await expect(p.locator('.recorded-video-links')).toHaveCount(tours.filter(t=>t.kind==='video').length);for(const tour of newVideos){const card=p.locator('.virtual-card').filter({has:p.locator(`.recorded-video-links .primary-button[href="${tour.url}"]`)});await expect(card.locator('.virtual-title')).toHaveText(tour.title[lang]);await expect(card.locator('iframe')).toHaveCount(0);await expect(card.locator('time')).toHaveText('2026-11-18');await expect(card.locator('.recorded-video-links')).not.toContainText('Original source on Google');await expect(card.locator('.recorded-video-links .primary-button')).toHaveAttribute('target','_blank');}await p.goto(`http://127.0.0.1:8787/${lang}/places/marsa-alam/`);const card=p.locator('.virtual-card');const watch=card.locator('.recorded-video-links .primary-button');const url=await watch.getAttribute('href');const request=c.waitForEvent('request',r=>r.url()===url);const popup=c.waitForEvent('page');await watch.tap();await request;await(await popup).close();await card.scrollIntoViewIfNeeded();await p.screenshot({path:`/downloads/egypti-b45-marsa-alam-${lang}-390.png`});await c.close()});

for(const lang of ['ar','en'])test(`Arish film stays screen-only with linked advisory ${lang}`,async({page})=>{
  await page.goto(`http://127.0.0.1:8787/${lang}/places/arish/`);
  await expect(page.locator('.travel-caution')).toBeVisible();
  const card=page.locator('.virtual-card');
  await expect(card.locator('.virtual-title')).toHaveText(lang==='ar'?'شاطئ وشوارع العريش في 2023':'Arish beach and streets in 2023');
  await expect(card.locator('.tour-advisory a')).toHaveAttribute('href','https://www.gov.uk/foreign-travel-advice/egypt/regional-risks');
  await expect(card.locator('.tour-advisory')).toContainText('2026');
  await expect(card.locator('.recorded-video-links .primary-button')).toHaveAttribute('href','https://www.youtube.com/watch?v=UKiEpQ2ARnM');
  await expect(page.locator('.ticket-box,.location-box')).toHaveCount(0);
  await expect(page.locator('iframe')).toHaveCount(0);
});
