import{test,expect}from'@playwright/test';
for(const lang of ['ar','en'])for(const width of [390,600,601,1280])test(`Tailwind visit panels preserve eligibility and caveats ${lang} ${width}`,async({page})=>{
 await page.setViewportSize({width,height:1000});await page.goto(`/${lang}/places/qaitbay/`);
 const location=page.locator('.location-box'),ticket=page.locator('.ticket-box'),select=ticket.locator('select');
 await expect(location).toHaveCSS('border-top-width','0px');await expect(location).toHaveCSS('border-bottom-width','1px');await expect(location).toHaveCSS('padding','18px 0px 23px');
 await expect(location.locator('small')).toContainText(lang==='ar'?'مش نقطة تجمع':'not a confirmed meeting point');await expect(location.locator('a')).toHaveAttribute('rel','noreferrer');
 await expect(ticket).toHaveCSS('padding',width<=600?'20px':'25px');await expect(ticket.locator('h3')).toHaveCSS('font-size',width<=600?'18px':'20px');await expect(select).toHaveValue('');await expect(ticket.locator('.price')).toHaveCount(0);
 for(const[value,price]of [['egyptianAdult','60'],['egyptianStudent','30'],['foreignAdult','200'],['foreignStudent','100']]){await select.selectOption(value);await expect(ticket.locator('.price')).toContainText(price);await expect(ticket.locator('.price')).toHaveCSS('font-size','26px')}
 await select.selectOption('');await expect(ticket.locator('.price')).toHaveCount(0);await expect(ticket).toContainText(lang==='ar'?'لا بنحددها بالـIP ولا باللغة':'do not infer it from your IP address or language');
 for(const theme of ['midnight','night','sand','nile']){await page.evaluate(t=>document.documentElement.dataset.theme=t,theme);await select.selectOption('foreignAdult');expect(await ticket.locator('.price').evaluate(e=>getComputedStyle(e).color)).toBe(await ticket.evaluate((e,t)=>{const n=document.createElement('span');n.style.color=t==='midnight'?'var(--muted)':'var(--accent)';e.append(n);const c=getComputedStyle(n).color;n.remove();return c},theme))}
 await page.goto(`/${lang}/places/hurghada-marina/`);await expect(page.locator('.ticket-box select')).toHaveCount(0);await expect(page.locator('.ticket-box')).toContainText(lang==='ar'?'مش معناه إن الدخول مجاني':'does not mean admission is free');expect(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth)).toBe(false);
});
