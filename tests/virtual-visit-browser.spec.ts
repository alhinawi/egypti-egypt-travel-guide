import {test, expect, type Page} from '@playwright/test';
import {filterVirtualVisits, virtualVisitEntries, virtualVisitKindChoices, virtualVisitQuery} from '../src/lib/virtual-visit-browser';
import {placePhotos, photoPath} from '../src/lib/photos';
const ready = async (page: Page) => expect(page.locator('.virtual-browser')).toHaveAttribute('data-ready', 'true');
const paths = (lang: string, state: {q: string; governorate: string; kind: string}) => filterVirtualVisits(state).map(entry => '/' + lang + '/places/' + entry.place.id + '/');
const rendered = (page: Page) => page.locator('.virtual-place-link').evaluateAll(links => links.map(link => link.getAttribute('href')));
for (const lang of ['ar', 'en'] as const) {
  test.beforeEach(async ({page}) => {await page.route('**/api/**', route => route.fulfill({status: 503}))});
  for (const width of [360, 390, 600, 601, 900, 1280]) test('virtual finder photographs filters and reset ' + lang + ' ' + width, async ({page}) => {
    await page.setViewportSize({width, height: 1050});
    await page.goto('/' + lang + '/virtual-tours/'); await ready(page);
    await expect(page.locator('.virtual-card')).toHaveCount(virtualVisitEntries.length);
    const choices = page.locator('.virtual-kind-choice'); await expect(choices).toHaveCount(4);
    for (const [index, choice] of virtualVisitKindChoices.entries()) {
      const button = choices.nth(index), photo = placePhotos[choice.cover.place.id];
      await expect(button).toContainText(choice.name[lang]);
      await expect(button.locator('.virtual-kind-count bdi')).toHaveText(String(choice.count));
      await expect(button.locator('img')).toHaveAttribute('alt', photo.alt[lang]);
      await expect(button.locator('img')).toHaveAttribute('src', photoPath(photo, 420));
      expect(await button.locator('img').evaluate(async (image: HTMLImageElement) => {image.loading = 'eager'; await image.decode(); return image.naturalWidth})).toBeGreaterThan(0);
    }
    await page.locator('.virtual-kind-choice[data-kind=model]').click();
    await expect(page.locator('.virtual-card')).toHaveCount(filterVirtualVisits({q: '', governorate: '', kind: 'model'}).length);
    await page.locator('.virtual-visit-governorate').selectOption('aswan');
    await page.locator('.virtual-visit-search').fill('abu simbel');
    const state = {q: 'abu simbel', governorate: 'aswan', kind: 'model'};
    await expect.poll(() => rendered(page)).toEqual(paths(lang, state));
    await expect(page.locator('.virtual-visit-count bdi')).toHaveText(filterVirtualVisits(state).length + ' / ' + virtualVisitEntries.length);
    await expect(page).toHaveURL(new RegExp('kind=model'));
    await page.locator('.virtual-visit-search').fill('no-match-zzzz');
    await expect(page.locator('.virtual-visit-empty')).toBeVisible();
    await expect(page.locator('.virtual-card')).toHaveCount(0);
    await page.locator('.virtual-visit-empty-reset').click();
    await expect(page.locator('.virtual-visit-search')).toBeFocused();
    await expect(page.locator('.virtual-visit-search')).toHaveValue('');
    await expect(page.locator('.virtual-card')).toHaveCount(virtualVisitEntries.length);
    await expect(page.locator('iframe')).toHaveCount(0);
    expect(new URL(page.url()).search).toBe('');
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  });
  test('all four media choices preserve exact sources ordering and archive label ' + lang, async ({page}) => {
    for (const choice of virtualVisitKindChoices) {
      await page.goto('/' + lang + '/virtual-tours/?kind=' + choice.id); await ready(page);
      await expect.poll(() => rendered(page)).toEqual(paths(lang, {q: '', governorate: '', kind: choice.id}));
      const expected = filterVirtualVisits({q: '', governorate: '', kind: choice.id});
      expect(await page.locator('.tour-source-note a').evaluateAll(links => links.map(link => link.getAttribute('href')))).toEqual(expected.map(entry => entry.tour.source));
      for (const card of await page.locator('.virtual-card').all()) await expect(card.locator('.tag')).toHaveText(choice.name[lang]);
      await expect(page.locator('iframe')).toHaveCount(0);
    }
  });
  test('choices survive reload language and URL history ' + lang, async ({page}) => {
    const state = {q: 'abu simbel', governorate: 'aswan', kind: 'model'}, query = virtualVisitQuery(state), to = lang === 'ar' ? 'en' : 'ar';
    await page.goto('/' + lang + '/virtual-tours/' + query); await ready(page); await page.reload(); await ready(page);
    await expect.poll(() => rendered(page)).toEqual(paths(lang, state));
    await page.locator('.language-button').click(); await page.locator('.language-choices a[lang=' + to + ']').click(); await ready(page);
    await expect.poll(() => rendered(page)).toEqual(paths(to, state));
    expect(new URL(page.url()).search).toBe(query);
    await page.evaluate(() => {history.pushState({}, '', '?kind=archive'); dispatchEvent(new PopStateEvent('popstate'))});
    await expect(page.locator('.virtual-card')).toHaveCount(1);
    await page.goBack(); await ready(page); await expect.poll(() => rendered(page)).toEqual(paths(to, state));
    await page.goForward(); await ready(page); await expect(page.locator('.virtual-kind-choice[data-kind=archive]')).toHaveAttribute('aria-pressed', 'true');
  });
  for (const mode of ['success', 'denied']) test('copy choices has safe URL and recovery ' + lang + ' ' + mode, async ({page}) => {
    await page.setViewportSize({width: mode === 'denied' ? 390 : 1280, height: 1050});
    await page.addInitScript(value => {
      localStorage.setItem('egypt:saved', '["place:philae"]');
      Object.defineProperty(navigator, 'clipboard', {configurable: true, value: {writeText: async (text: string) => {if (value === 'denied') throw new Error('clipboard denied'); (window as unknown as {copied: string}).copied = text}}});
    }, mode);
    let writes = 0; page.on('request', request => {if (request.url().includes('/api/') && request.method() !== 'GET') writes++});
    await page.goto('/' + lang + '/virtual-tours/?kind=video&governorate=cairo&q=Muizz&saved=private&account=private'); await ready(page);
    const expected = new URL('/' + lang + '/virtual-tours/?q=Muizz&governorate=cairo&kind=video', new URL(page.url()).origin).href;
    await page.locator('.virtual-visit-copy').click();
    if (mode === 'success') {
      await expect.poll(() => page.evaluate(() => (window as unknown as {copied: string}).copied)).toBe(expected);
      await expect(page.locator('.virtual-visit-copy-fallback')).toHaveCount(0);
    } else {
      const input = page.locator('.virtual-visit-copy-fallback'); await expect(input).toHaveValue(expected); await expect(input).toBeFocused();
      expect(await input.evaluate((element: HTMLInputElement) => element.selectionEnd! - element.selectionStart!)).toBe(expected.length);
    }
    expect(await page.evaluate(() => localStorage.getItem('egypt:saved'))).toBe('["place:philae"]'); expect(writes).toBe(0);
    await page.locator('.virtual-visit-search').fill('Aswan'); await expect(page.locator('.virtual-visit-copy-status')).toHaveText('');
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  });
  test('keyboard toggles retain focus and visible focus ring ' + lang, async ({page}) => {
    await page.goto('/' + lang + '/virtual-tours/'); await ready(page);
    const button = page.locator('.virtual-kind-choice[data-kind=archive]'); await button.focus(); await page.keyboard.press('Enter');
    await expect(button).toBeFocused(); await expect(button).toHaveAttribute('aria-pressed', 'true');
    expect(await button.evaluate(element => element.matches(':focus-visible') && parseFloat(getComputedStyle(element).outlineWidth) >= 3)).toBe(true);
    await page.keyboard.press('Space'); await expect(button).toHaveAttribute('aria-pressed', 'false');
    await expect(page.locator('.virtual-card')).toHaveCount(virtualVisitEntries.length);
  });
  test('filtering unloads a chosen inline player ' + lang, async ({page}) => {
    let providers = 0;
    await page.route('https://my.matterport.com/**', route => {providers++; return route.fulfill({contentType: 'text/html', body: '<!doctype html><title>UI fixture</title>'})});
    await page.goto('/' + lang + '/virtual-tours/?kind=model'); await ready(page); expect(providers).toBe(0);
    const card = page.locator('.virtual-card').filter({has: page.locator('.virtual-place-link[href="/' + lang + '/places/abu-simbel/"]')});
    await card.locator('button.primary-button').click(); await expect(card.locator('iframe')).toHaveCount(1);
    await page.locator('.virtual-kind-choice[data-kind=video]').click(); await expect(page.locator('iframe')).toHaveCount(0);
    expect(providers).toBe(1);
  });
  test('touch selects an archival view without provider loading ' + lang, async ({browser}) => {
    const context = await browser.newContext({viewport: {width: 390, height: 844}, isMobile: true, hasTouch: true}), page = await context.newPage();
    await page.route('**/api/**', route => route.fulfill({status: 503}));
    await page.goto('/' + lang + '/virtual-tours/'); await ready(page);
    await page.locator('.virtual-kind-choice[data-kind=archive]').tap(); await expect(page.locator('.virtual-card')).toHaveCount(1);
    await expect(page.locator('.virtual-card .tag')).toHaveText(lang === 'ar' ? 'أرشيف' : 'Archive'); await expect(page.locator('iframe')).toHaveCount(0); await context.close();
  });
  test('Arabic search and northern advisory labels remain intact ' + lang, async ({page}) => {
    await page.goto('/' + lang + '/virtual-tours/?q=' + encodeURIComponent('قَايتباي')); await ready(page);
    await expect.poll(() => rendered(page)).toEqual(paths(lang, {q: 'قَايتباي', governorate: '', kind: ''}));
    expect(await page.locator('.virtual-card').count()).toBeGreaterThan(0);
    await page.goto('/' + lang + '/virtual-tours/?governorate=north-sinai'); await ready(page);
    const entries = filterVirtualVisits({q: '', governorate: 'north-sinai', kind: ''});
    const advisories = entries.flatMap(entry => 'advisory' in entry.tour && entry.tour.advisory ? [entry.tour.advisory] : []);
    expect(advisories.length).toBeGreaterThan(0);
    expect(await page.locator('.tour-advisory a').evaluateAll(links => links.map(link => link.getAttribute('href')))).toEqual(advisories.map(advisory => advisory.url));
  });
  test('no JavaScript keeps the full source library accessible ' + lang, async ({browser}) => {
    const context = await browser.newContext({javaScriptEnabled: false, viewport: {width: 390, height: 1050}}), page = await context.newPage();
    await page.goto('/' + lang + '/virtual-tours/?kind=model'); await expect(page.locator('.virtual-card')).toHaveCount(virtualVisitEntries.length);
    await expect(page.locator('.virtual-visit-search')).toBeDisabled(); await expect(page.locator('.virtual-visit-copy')).toBeDisabled();
    await expect(page.locator('iframe')).toHaveCount(0); expect(await page.locator('noscript').textContent()).toContain('JavaScript'); await context.close();
  });
}
