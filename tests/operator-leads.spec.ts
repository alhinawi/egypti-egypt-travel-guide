import {test,expect} from '@playwright/test';
import {operatorLeads} from '../src/lib/operators';
for(const lang of ['ar','en'] as const)test(`real dive centres stay separate, scoped and external ${lang}`,async({page})=>{
 await page.setViewportSize({width:390,height:1100});
 await page.route('**/api/demo-status',r=>r.fulfill({json:{enabled:false}}));
 await page.goto(`/${lang}/guides/`);await expect(page.locator('.operator-lead')).toHaveCount(2);
 await expect(page.locator('.operator-checks')).toContainText(lang==='ar'?'مش بنحجز':'We do not book');
 for(const lead of operatorLeads){const card=page.locator('.operator-lead').filter({hasText:lead.name});await expect(card.locator('time')).toHaveText(lead.checkedAt);await expect(card.locator(`a[href="${lead.websiteUrl}"]`)).toHaveAttribute('target','_blank');await expect(card.locator(`a[href="${lead.directoryUrl}"]`)).toBeVisible();await expect(card.locator('form,input,iframe')).toHaveCount(0)}
 for(const lead of operatorLeads){await page.goto(`/${lang}/places/${lead.placeIds[0]}/`);await expect(page.locator('.operator-lead')).toHaveCount(1);await expect(page.locator('.operator-lead h3')).toHaveText(lead.name);await expect(page.locator('.operator-leads')).toContainText(lead.summary[lang]);expect(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth)).toBe(false)}
 await page.goto(`/${lang}/places/blue-lagoon/`);await expect(page.locator('.operator-leads')).toHaveCount(0);
});
