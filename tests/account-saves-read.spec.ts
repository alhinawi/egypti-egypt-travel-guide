import{test,expect}from'@playwright/test';
for(const lang of ['ar','en'])test(`failed account read cannot overwrite remote saves ${lang}`,async({page})=>{
 await page.setViewportSize({width:390,height:900});let fail=true;const puts:string[]=[];
 await page.route('**/api/config',r=>r.fulfill({json:{google:true}}));await page.route('**/api/me',r=>r.fulfill({json:{user:{id:'test-account',name:'Test',email:'test@example.invalid'},admin:false}}));
 await page.route('**/api/saved',r=>{if(r.request().method()==='PUT'){puts.push(r.request().postData()!);return r.fulfill({json:{ok:true}})}return fail?r.fulfill({status:503,json:{error:'unavailable'}}):r.fulfill({json:{items:['place:karnak']}})});
 await page.goto(`/${lang}/places/menna-tt69/`);const save=page.locator('.save-button').first();await expect(page.locator('.account-saves-warning')).toBeVisible();await expect(save).toBeDisabled();
 await page.evaluate(()=>window.dispatchEvent(new Event('online')));await page.waitForTimeout(200);expect(puts).toEqual([]);
 await page.screenshot({path:`/downloads/egypti-b34-account-read-${lang}-390.png`});
 fail=false;await page.locator('.account-saves-warning button').click();await expect(save).toBeEnabled();await expect(page.locator('.account-saves-warning')).toHaveCount(0);await save.click();
 await expect.poll(()=>puts.length).toBe(1);expect(JSON.parse(puts[0]).items).toEqual(['place:karnak','place:menna-tt69']);
});
for(const mode of ['network','malformed'])test(`unsafe account read ${mode} blocks online writes`,async({page})=>{
 const puts:string[]=[];await page.route('**/api/config',r=>r.fulfill({json:{google:true}}));await page.route('**/api/me',r=>r.fulfill({json:{user:{id:'test',name:'Test',email:'test@example.invalid'}}}));
 await page.route('**/api/saved',r=>{if(r.request().method()==='PUT'){puts.push('write');return r.fulfill({json:{ok:true}})}return mode==='network'?r.abort():r.fulfill({json:{items:null}})});
 await page.goto('/en/places/menna-tt69/');await expect(page.locator('.account-saves-warning')).toBeVisible();await expect(page.locator('.save-button').first()).toBeDisabled();await page.evaluate(()=>window.dispatchEvent(new Event('online')));await page.waitForTimeout(150);expect(puts).toEqual([]);
});
