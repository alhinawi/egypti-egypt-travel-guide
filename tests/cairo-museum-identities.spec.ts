import {test, expect} from '@playwright/test';
import {cairoMuseumIdentities} from '../src/lib/cairo-museum-identities';

const langs = ['ar', 'en'] as const;
for (const lang of langs) for (const width of [360, 390, 600, 801, 900, 1280]) test(`museum identity cards ${lang} ${width}`, async ({page}) => {
  await page.setViewportSize({width, height: 1100}); await page.route('**/api/**', r => r.fulfill({status: 503}));
  await page.goto('/' + lang + '/essentials/'); const root = page.locator('.cairo-museum-comparison');
  await expect(root).toBeVisible(); await expect(root.locator('.cairo-museum-card')).toHaveCount(3);
  for (const museum of cairoMuseumIdentities) {
    const card = root.locator(`[data-museum="${museum.id}"]`); await expect(card.locator('h3')).toHaveText(museum.place.name[lang]);
    await expect(card.locator('.museum-area')).toHaveText(museum.area[lang]); await expect(card.locator('.museum-focus')).toHaveText(museum.focus[lang]);
    const image = card.locator('img'); await image.evaluate(async e => {const img = e as HTMLImageElement; img.loading = 'eager'; await img.decode()});
    expect(await image.evaluate(e => (e as HTMLImageElement).naturalWidth)).toBeGreaterThan(0); await expect(image).toHaveAttribute('alt', museum.photo.alt[lang]);
    await expect(card.locator('.museum-guide-link')).toHaveAttribute('href', '/' + lang + '/places/' + museum.id + '/');
    const refs = card.locator('.museum-official-sources a'); expect(await refs.evaluateAll(es => es.map(e => e.getAttribute('href')))).toEqual(museum.sources);
    for (const a of await refs.all()) {await expect(a).toHaveAttribute('target', '_blank'); await expect(a).toHaveAttribute('rel', 'noreferrer')}
  }
  for (const link of await root.locator('a').all()) {const box = await link.boundingBox(); expect(box!.height).toBeGreaterThanOrEqual(44)}
  const first = root.locator('.museum-guide-link').first(); await first.focus(); expect(await first.evaluate(e => parseFloat(getComputedStyle(e).outlineWidth))).toBeGreaterThanOrEqual(3);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  expect(await root.locator('.cairo-museum-grid').evaluate(e => getComputedStyle(e).gridTemplateColumns.split(' ').length)).toBe(width > 800 ? 3 : 1);
});
for (const lang of langs) for (const museum of cairoMuseumIdentities) test(`ticket identity and comparison navigation ${museum.id} ${lang}`, async ({page}) => {
  await page.setViewportSize({width: 390, height: 1000}); await page.route('**/api/**', r => r.fulfill({status: 503}));
  await page.goto('/' + lang + '/places/' + museum.id + '/'); const notice = page.locator('.museum-identity-notice');
  await expect(notice).toHaveCount(1); await expect(notice.locator('b')).toContainText(museum.place.name[lang]); await expect(notice.locator('.museum-identity-area')).toHaveText(museum.area[lang]);
  expect(await notice.evaluate(e => !!e.closest('.ticket-box'))).toBe(true); await expect(page.locator('.ticket-box > a.primary-button')).toHaveAttribute('href', museum.place.source);
  await notice.locator('a').click(); await expect(page).toHaveURL(new RegExp('/' + lang + '/essentials/#cairo-museums$'));
  await expect(page.locator('#cairo-museums')).toBeInViewport();
  await page.goBack(); await expect(page).toHaveURL(new RegExp('/' + lang + '/places/' + museum.id + '/$'));
});
for (const lang of langs) test(`unrelated place keeps its ticket content without museum notice ${lang}`, async ({page}) => {
  await page.route('**/api/**', r => r.fulfill({status: 503})); await page.goto('/' + lang + '/places/karnak/');
  await expect(page.locator('.museum-identity-notice')).toHaveCount(0); await expect(page.locator('.ticket-box')).toBeVisible();
});
for (const lang of langs) test(`museum comparison works without JavaScript ${lang}`, async ({browser, baseURL}) => {
  const context = await browser.newContext({javaScriptEnabled: false, baseURL, viewport: {width: 390, height: 1000}}), page = await context.newPage();
  try {await page.goto('/' + lang + '/essentials/#cairo-museums'); await expect(page.locator('.cairo-museum-card')).toHaveCount(3);
    await page.locator('.museum-guide-link').first().click(); await expect(page).toHaveURL(new RegExp('/' + lang + '/places/egyptian-museum/$'));
    await page.locator('.museum-identity-notice a').click(); await expect(page.locator('#cairo-museums')).toBeInViewport();
  } finally {await context.close()}
});
for (const lang of langs) test(`comparison does not change saved identities or send account writes ${lang}`, async ({page}) => {
  const writes: string[] = []; await page.route('**/api/**', r => {if (r.request().method() !== 'GET') writes.push(r.request().url()); return r.fulfill({status: 503})});
  await page.addInitScript(() => {if (localStorage.getItem('egypt:saved') === null) localStorage.setItem('egypt:saved', JSON.stringify(['place:egyptian-museum', 'trip:cairo-two-days']))});
  const before = JSON.stringify(['place:egyptian-museum', 'trip:cairo-two-days']);
  await page.goto('/' + lang + '/essentials/#cairo-museums'); expect(await page.evaluate(() => localStorage.getItem('egypt:saved'))).toBe(before);
  await page.locator('.museum-guide-link').nth(1).click(); await page.locator('.museum-identity-notice a').click();
  expect(await page.evaluate(() => localStorage.getItem('egypt:saved'))).toBe(before); expect(writes).toEqual([]);
  await expect(page.locator('.cairo-museum-comparison iframe')).toHaveCount(0);
});
