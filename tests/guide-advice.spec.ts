import{test,expect}from'@playwright/test';
for(const lang of ['ar','en'])for(const width of [390,600,601,1280])test(`Tailwind guide advice preserves disclosure and inclusive breakpoint ${lang} ${width}`,async({page})=>{
 await page.setViewportSize({width,height:1600});await page.goto(`/${lang}/places/karnak/`);const card=page.locator('.visit-guide'),button=card.locator('button');
 await expect(card.locator('img')).toHaveCSS('height',width<=600?'215px':'240px');await expect(card.locator('.photo-feature-copy')).toHaveCSS('padding',width<=600?'22px':'25px');
 await expect(card.locator('h2')).toHaveCSS('font-size',width<=600?'28px':'30px');await expect(card.locator('.photo-feature-copy>p').first()).toHaveCSS('line-height',lang==='ar'?(width<=600?'26px':'28px'):(width<=600?'24.7px':'26.6px'));
 await expect(button).toHaveAttribute('aria-expanded','false');await expect(card.locator('.guide-checks')).toHaveCount(0);await button.focus();await page.keyboard.press('Enter');
 await expect(button).toHaveAttribute('aria-expanded','true');await expect(card.locator('.guide-checks li')).toHaveCount(3);await expect(button).toBeFocused();await expect(card.locator('a[href="tel:19654"]')).toBeVisible();
 await expect(card.locator('a[href="https://www.experienceegypt.eg/en/home/faq"]')).toHaveAttribute('rel','noreferrer');
 await expect(card.locator('form,input,iframe')).toHaveCount(0);await page.keyboard.press('Space');await expect(button).toHaveAttribute('aria-expanded','false');
 for(const theme of ['midnight','night','sand','nile']){await page.evaluate(theme=>document.documentElement.dataset.theme=theme,theme);expect(await card.evaluate(e=>getComputedStyle(e).backgroundColor)).toBe(await page.locator('.header').evaluate(e=>getComputedStyle(e).backgroundColor))}
 expect(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth)).toBe(false);
});
