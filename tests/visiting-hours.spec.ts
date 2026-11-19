import {test,expect} from '@playwright/test';
import {visitingHours} from '../src/lib/visiting-hours';
for(const lang of ['ar','en'] as const)test(`published museum hours preserve cutoff, split sessions and source routes ${lang}`,async({page})=>{
 await page.setViewportSize({width:390,height:1000});
 for(const [id,hours] of Object.entries(visitingHours)){
  await page.goto(`/${lang}/places/${id}/`);const card=page.locator('.published-hours');
  await expect(card.locator('time')).toHaveText(hours.checkedAt);
  await expect(card.locator('.hours-session')).toHaveCount(hours.sessions.length);
  await expect(card.locator('.hours-note')).toHaveText(hours.note[lang]);
  for(const session of hours.sessions)if(session.label)await expect(card).toContainText(session.label[lang]);
  for(const source of hours.sources)await expect(card.locator(`a[href="${source.url}"]`)).toHaveAttribute('target','_blank');
  for(const [i,session] of hours.sessions.entries()){await expect(card.locator('.hours-session').nth(i)).toContainText(session.opens);await expect(card.locator('.hours-session').nth(i)).toContainText(session.lastEntry)}
  expect(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth)).toBe(false);
 }
 await page.goto(`/${lang}/places/qift/`);await expect(page.locator('.published-hours')).toHaveCount(0);
 await expect(page.locator('.fact-row')).toContainText(lang==='ar'?'مش مؤكدة لحظيًا هنا':'Not confirmed live here');
});
