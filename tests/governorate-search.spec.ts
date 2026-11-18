import{test,expect}from'@playwright/test';
for(const lang of ['ar','en']){
 test(`governorate no-match recovery clears both filters and returns focus ${lang}`,async({page})=>{
  await page.setViewportSize({width:390,height:900});await page.goto(`/${lang}/governorates/`);
  const search=page.locator('.governorate-controls input'),region=page.locator('.governorate-controls select');
  await region.selectOption('delta');await search.fill('zzzz-no-governorate');
  await expect(page.locator('.governorate-card')).toHaveCount(0);
  const empty=page.locator('.governorate-empty');await expect(empty).toBeVisible();
  await expect(page.locator('.governorate-result-count')).toContainText('0 / 27');
  await empty.scrollIntoViewIfNeeded();await page.screenshot({path:`/downloads/egypti-b29-governorates-${lang}-390.png`});
  await empty.getByRole('button').click();await expect(search).toBeFocused();await expect(search).toHaveValue('');await expect(region).toHaveValue('');
  await expect(page.locator('.governorate-card')).toHaveCount(27);await expect(empty).toHaveCount(0);
 });
 test(`governorate count follows region and space-padded name ${lang}`,async({page})=>{
  await page.goto(`/${lang}/governorates/`);const search=page.locator('.governorate-controls input');
  await search.fill(lang==='ar'?'  الدَّقهلية  ':'  Dakahlia  ');await expect(page.locator('.governorate-card')).toHaveCount(1);
  await expect(page.locator('.governorate-result-count')).toContainText('1 / 27');
  await page.locator('.governorate-controls select').selectOption('sinai');await expect(page.locator('.governorate-card')).toHaveCount(0);
  await search.fill('');await expect(page.locator('.governorate-card')).toHaveCount(2);await expect(page.locator('.governorate-result-count')).toContainText('2 / 27');
 });
}
