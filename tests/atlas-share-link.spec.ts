import {test, expect, type Page} from '@playwright/test';
import {atlasCollectionLink} from '../src/lib/atlas-collection-link';
import {atlasFilterQuery, readAtlasFilters, filterAtlas, atlasRegions, atlasEras} from '../src/lib/photo-atlas';
const langs = ['ar', 'en'] as const;
type ClipState = Window & {atlasCopied?: string; atlasSettle?: (fail: boolean) => void};
async function mockClipboard(page: Page, mode: 'ok' | 'fail' | 'defer' = 'ok') {
  await page.addInitScript(mode => {
    Object.defineProperty(navigator, 'clipboard', {configurable: true, value: {writeText: (text: string) => {
      const state = window as ClipState; state.atlasCopied = text;
      if (mode === 'fail') return Promise.reject(new Error('Clipboard denied'));
      if (mode === 'defer') return new Promise<void>((resolve, reject) => {state.atlasSettle = fail => fail ? reject(new Error('Clipboard denied')) : resolve()});
      return Promise.resolve();
    }}});
  }, mode);
}
for (const lang of langs) for (const width of [360, 390, 600, 601, 900, 1280]) test(`atlas copy current filters ${lang} ${width}`, async ({page, baseURL}) => {
  await page.setViewportSize({width, height: 1100}); await page.route('**/api/**', r => r.fulfill({status: 503})); await mockClipboard(page);
  await page.goto('/' + lang + '/photos/?governorate=cairo&category=culture'); const copy = page.locator('.atlas-share-copy'); await expect(copy).toBeEnabled();
  const expected = atlasCollectionLink(baseURL!, lang, readAtlasFilters('?governorate=cairo&category=culture'));
  await copy.focus(); expect(await copy.evaluate(e => parseFloat(getComputedStyle(e).outlineWidth))).toBeGreaterThanOrEqual(3);
  await page.keyboard.press('Enter'); await expect(page.locator('.atlas-share-status')).toContainText(lang === 'ar' ? 'اتنسخ' : 'copied');
  expect(await page.evaluate(() => (window as ClipState).atlasCopied)).toBe(expected);
  if (width === 1280) {
    const selected = page.locator('.atlas-compare-toggle').first(); await selected.click(); await expect(selected).toHaveAttribute('aria-pressed', 'true');
    await page.locator('.atlas-view-choice button').nth(1).click(); await copy.click();
    await expect(page.locator('#atlas-photo-grid')).toHaveAttribute('data-view', 'contact-sheet'); await expect(selected).toHaveAttribute('aria-pressed', 'true');
    expect(await page.evaluate(() => (window as ClipState).atlasCopied)).toBe(expected);
  }
  const box = await copy.boundingBox(); expect(box!.height).toBeGreaterThanOrEqual(48); expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await page.locator('.atlas-area').selectOption('aswan'); await expect(page.locator('.atlas-share-status')).toBeEmpty(); await copy.click();
  expect(new URL((await page.evaluate(() => (window as ClipState).atlasCopied))!).searchParams.get('governorate')).toBe('aswan');
  await page.emulateMedia({media: 'print'}); await expect(page.locator('.atlas-share-link')).toBeHidden();
});
for (const lang of langs) test(`touch clipboard fallback and collection restoration ${lang}`, async ({browser, baseURL}) => {
  const context = await browser.newContext({baseURL, viewport: {width: 390, height: 1000}, isMobile: true, hasTouch: true}), page = await context.newPage();
  try {await page.route('**/api/**', r => r.fulfill({status: 503})); await mockClipboard(page, 'fail'); await page.goto('/' + lang + '/photos/?trip=cairo-two-days&day=2');
    const copy = page.locator('.atlas-share-copy'); await expect(copy).toBeEnabled(); await copy.tap(); const input = page.locator('.atlas-share-fallback');
    const expected = atlasCollectionLink(baseURL!, lang, readAtlasFilters('?trip=cairo-two-days&day=2'));
    await expect(input).toHaveValue(expected); await expect(input).toBeFocused(); await expect(input).toHaveAttribute('readonly', '');
    expect(await input.evaluate(e => {const i = e as HTMLInputElement; return [i.selectionStart, i.selectionEnd]})).toEqual([0, expected.length]);
    const members = filterAtlas({trip: 'cairo-two-days', day: '2'}).map(p => p.id);
    expect(await page.locator('.atlas-card').evaluateAll(es => es.map(e => e.getAttribute('data-place')))).toEqual(members.slice(0, 12));
    await page.reload(); await expect(copy).toBeEnabled(); await expect(input).toHaveCount(0); expect(await page.locator('.atlas-card').evaluateAll(es => es.map(e => e.getAttribute('data-place')))).toEqual(members.slice(0, 12));
    await page.goto('/' + lang + '/photos/?governorate=aswan'); await expect(copy).toBeEnabled(); await page.goBack(); await expect(copy).toBeEnabled(); await copy.tap(); await expect(input).toHaveValue(expected);
  } finally {await context.close()}
});
for (const lang of langs) test(`copy uses current input while address-bar updates are held ${lang}`, async ({page, baseURL}) => {
  await page.route('**/api/**', r => r.fulfill({status: 503})); await mockClipboard(page);
  // Simulate a delayed address bar without delaying or replacing current input state.
  await page.addInitScript(() => {history.replaceState = () => {}});
  await page.goto('/' + lang + '/photos/'); await expect(page.locator('.atlas-share-copy')).toBeEnabled();
  await page.locator('.atlas-search').fill('أسوان & river'); await page.locator('.atlas-share-copy').click();
  expect(await page.evaluate(() => location.search)).toBe('');
  expect(await page.evaluate(() => (window as ClipState).atlasCopied)).toBe(atlasCollectionLink(baseURL!, lang, readAtlasFilters('?q=' + encodeURIComponent('أسوان & river'))));
});
for (const lang of langs) test(`copy allowlist excludes private address and local states ${lang}`, async ({page, baseURL}) => {
  const state = {q: 'Cairo', area: 'cairo', category: 'culture', region: atlasRegions[0].id, era: atlasEras[0].id, trip: 'cairo-two-days', day: '2'};
  await page.route('**/api/**', r => r.fulfill({status: 503})); await mockClipboard(page);
  await page.addInitScript(() => {if (!localStorage.getItem('egypt:saved')) localStorage.setItem('egypt:saved', '["place:philae"]')});
  const writes: string[] = []; page.on('request', r => {if (r.url().includes('/api/') && r.method() !== 'GET') writes.push(r.url())});
  await page.goto('/' + lang + '/photos/' + atlasFilterQuery(state) + '&account=private&saved=example&comparison=philae&active=karnak&view=sheet&limit=72#private');
  await expect(page.locator('.atlas-share-copy')).toBeEnabled(); await page.locator('.atlas-share-copy').click();
  const copied = await page.evaluate(() => (window as ClipState).atlasCopied); expect(copied).toBe(atlasCollectionLink(baseURL!, lang, state));
  expect(new URL(copied!).searchParams.size).toBe(7); expect(new URL(copied!).hash).toBe('');
  expect(await page.evaluate(() => localStorage.getItem('egypt:saved'))).toBe('["place:philae"]'); expect(writes).toEqual([]);
});
for (const lang of langs) test(`old clipboard completion cannot restore stale feedback ${lang}`, async ({page}) => {
  await page.route('**/api/**', r => r.fulfill({status: 503})); await mockClipboard(page, 'defer');
  for (const fail of [false, true]) {await page.goto('/' + lang + '/photos/?governorate=cairo'); await expect(page.locator('.atlas-share-copy')).toBeEnabled(); await page.locator('.atlas-share-copy').click();
    await page.locator('.atlas-area').selectOption('aswan'); await page.evaluate(fail => (window as ClipState).atlasSettle!(fail), fail);
    await expect(page.locator('.atlas-share-status')).toBeEmpty(); await expect(page.locator('.atlas-share-fallback')).toHaveCount(0);
  }
});
for (const lang of langs) test(`no JavaScript keeps the existing encyclopedia fallback ${lang}`, async ({browser, baseURL}) => {
  const context = await browser.newContext({baseURL, javaScriptEnabled: false}), page = await context.newPage();
  try {await page.goto('/' + lang + '/photos/'); await expect(page.locator('.atlas-share-copy')).toHaveCount(0); await expect(page.locator('noscript a[href="/' + lang + '/encyclopedia/"]')).toBeVisible(); await expect(page.locator('.atlas-share-fallback')).toHaveCount(0)} finally {await context.close()}
});
