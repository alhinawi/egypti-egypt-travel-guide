import{test,expect}from'@playwright/test';
test('remove demo data needs backup and confirmation word',async({page})=>{
 await page.setViewportSize({width:390,height:844});
 let removed=false,body:any=null;
 await page.route('**/api/config',r=>r.fulfill({json:{google:true}}));
 await page.route('**/api/me',r=>r.fulfill({json:{user:{id:'1',name:'Mohamed',email:'3asfuur@gmail.com',picture:null},admin:true}}));
 await page.route('**/api/admin/overview',r=>r.fulfill({json:{counts:{users:1,newUsers:0,sessions:1,saves:1,savers:1},topSaved:[],recentUsers:[],health:{database:true,google:true,authSecret:true,origin:'https://egypti.pages.dev',adminCount:1,assets:true},generatedAt:1,demo:{enabled:!removed,count:4}}}));
 await page.route('**/api/admin/demo/export',r=>r.fulfill({json:{backup:{kind:'egypti-demo-backup'},backupToken:'1.abc',expiresAt:1}}));
 await page.route('**/api/admin/demo/remove',r=>{body=r.request().postDataJSON();removed=true;r.fulfill({json:{ok:true,enabled:false}})});
 await page.route('**/api/admin/demo/restore',r=>{removed=false;r.fulfill({json:{ok:true,enabled:true}})});
 await page.goto('/admin/');
 await page.getByRole('button',{name:'امسح البيانات التجريبية'}).click();
 const go=page.getByRole('button',{name:'امسح دلوقتي'});await expect(go).toBeDisabled();
 await page.screenshot({path:'/tmp/shots/demo-dialog-390.png'});
 const [dl]=await Promise.all([page.waitForEvent('download'),page.getByRole('button',{name:'نزّل النسخة'}).click()]);expect(dl.suggestedFilename()).toMatch(/^egypti-demo-backup-/);
 await expect(go).toBeDisabled();await page.getByLabel('اكتب امسح').fill('امسح');await expect(go).toBeEnabled();await go.click();
 await expect(page.getByRole('button',{name:'رجّع البيانات التجريبية'})).toBeVisible();expect(body).toEqual({confirm:'REMOVE_DEMO',backupToken:'1.abc'});
 await page.getByRole('button',{name:'رجّع البيانات التجريبية'}).click();await expect(page.getByRole('button',{name:'امسح البيانات التجريبية'})).toBeVisible();
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true)});
