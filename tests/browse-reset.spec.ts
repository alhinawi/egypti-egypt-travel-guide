import{test,expect}from'@playwright/test';
for(const lang of ['ar','en']){
 test(`reset keeps the governorate page scope and returns focus ${lang}`,async({page})=>{
  await page.setViewportSize({width:390,height:1100});await page.goto(`/${lang}/governorates/dakahlia/`);
  const search=page.locator('.encyclopedia-search input');await expect(search).toBeEnabled();await search.fill('zzzz-no-place');
  const empty=page.locator('.encyclopedia-page .empty-state');await expect(empty).toBeVisible();await empty.getByRole('button').click();
  await expect(search).toBeFocused();await expect(search).toHaveValue('');
  await page.locator('.filter-toggle').click();await expect(page.locator('.encyclopedia-filter-grid select').first()).toHaveValue('dakahlia');
  await expect.poll(()=>new URL(page.url()).searchParams.has('governorate')).toBe(false);
  await search.scrollIntoViewIfNeeded();await page.screenshot({path:`/downloads/egypti-b30-scope-${lang}-390.png`});
  const count=await page.locator('.result-count').textContent();await page.reload();await expect(search).toBeEnabled();await expect(page.locator('.result-count')).toHaveText(count!);
 });
 test(`padded encyclopedia name matches and reset restores defaults ${lang}`,async({page})=>{
  await page.goto(`/${lang}/encyclopedia/`);const search=page.locator('.encyclopedia-search input');await expect(search).toBeEnabled();await search.fill(lang==='ar'?'  مننا  ':'  Menna  ');
  await expect(page.locator('.places-grid .place-card')).toHaveCount(1);
  await page.getByRole('button',{name:lang==='ar'?'مسح الفلاتر':'Reset filters',exact:true}).click();await expect(search).toBeFocused();await expect(page.locator('.places-grid .place-card')).toHaveCount(24);
 });
}
