import{test,expect}from'@playwright/test';
for(const lang of ['ar','en'])for(const width of [390,600,601,1280])test(`Tailwind source box retains review provenance and theme ${lang} ${width}`,async({page})=>{
 await page.setViewportSize({width,height:1000});
 for(const route of ['places/karnak','destinations/hurghada']){
  await page.goto(`/${lang}/${route}/`);const card=page.locator('.source-box');await expect(card).toHaveCount(1);
  await expect(card.locator('time')).toHaveAttribute('datetime','2026-11-15');await expect(card.locator('time')).toHaveAttribute('dir','ltr');await expect(card.locator('time')).toHaveText('15 Nov 2026');
  const link=card.locator('a');await expect(link).toHaveAttribute('target','_blank');await expect(link).toHaveAttribute('rel','noreferrer');await expect(link).toHaveCSS('overflow-wrap','anywhere');
  await expect(card).toHaveCSS('padding',width<=600?'18px':'22px');await expect(card.locator('b')).toHaveCSS('font-size',width<=600?'13px':'14px');
  await expect(card.locator('small')).toContainText(lang==='ar'?'لا تعني تأكيد التشغيل':'does not confirm current operation');
  for(const theme of ['midnight','night','sand','nile']){await page.evaluate(theme=>document.documentElement.dataset.theme=theme,theme);expect(await card.evaluate(e=>getComputedStyle(e).color)).toBe(await card.evaluate((e,theme)=>{const probe=document.createElement('span');probe.style.color=theme==='midnight'?'var(--muted)':'var(--accent)';e.append(probe);const color=getComputedStyle(probe).color;probe.remove();return color},theme))}
  expect(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth)).toBe(false);
 }
});
