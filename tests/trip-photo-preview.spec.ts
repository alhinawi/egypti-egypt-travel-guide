import {test,expect} from '@playwright/test';
import {itineraries} from '../src/lib/data';
import {tripPhotoPreview} from '../src/lib/trip-photo-preview';
import {photoPath} from '../src/lib/photos';
for(const lang of ['ar','en'] as const)for(const width of[360,390,600,601,900,1280])test(`trip photo preview ${lang} ${width}`,async({page})=>{
 await page.setViewportSize({width,height:1000});await page.route('**/api/**',r=>r.fulfill({status:503}));await page.goto(`/${lang}/trips/`);
 const root=page.locator('.trip-photo-preview').first();await expect(root).not.toHaveAttribute('open');await expect(root.locator('.trip-photo-content')).toBeHidden();
 await root.locator('summary').focus();await page.keyboard.press('Enter');await expect(root).toHaveAttribute('open','');
 const trip=itineraries[0],days=tripPhotoPreview(trip),buttons=root.locator('.trip-photo-day-choices button');await expect(buttons).toHaveCount(days.length);
 for(const [index,row]of days.entries()){
  await buttons.nth(index).click();await expect(buttons.nth(index)).toHaveAttribute('aria-pressed','true');await expect(root.locator('h3')).toContainText(row.day.title[lang]);await expect(root.locator('.trip-photo-note')).toHaveText(row.day.note[lang]);const stops=root.locator('.trip-photo-stop');await expect(stops).toHaveCount(row.stops.length);
  for(const[j,stop]of row.stops.entries()){await expect(stops.nth(j)).toHaveAttribute('href',`/${lang}/places/${stop.id}/`);await expect(stops.nth(j).locator('b')).toHaveText(stop.place!.name[lang]);if(stop.photo){const image=stops.nth(j).locator('img');await expect(image).toHaveAttribute('src',photoPath(stop.photo,780));await expect(image).toHaveAttribute('alt',stop.photo.alt[lang]);await image.scrollIntoViewIfNeeded();await expect.poll(()=>image.evaluate((e:HTMLImageElement)=>e.complete&&e.naturalWidth>0)).toBe(true)}}await expect(root.locator('.trip-photo-open-day')).toHaveAttribute('href',`/${lang}/trips/${trip.id}/#trip-day-${index+1}`);
 }
 await page.locator('.trip-compare-toggle').first().click();await expect(page.locator('.trip-compare-card')).toHaveCount(1);await expect(buttons.last()).toHaveAttribute('aria-pressed','true');await root.locator('summary').click();await expect(root.locator('.trip-photo-content')).toBeHidden();await root.locator('summary').click();await expect(root.locator('.trip-photo-day-choices button').last()).toHaveAttribute('aria-pressed','true');
 await page.emulateMedia({media:'print'});await expect(root).toBeHidden();await page.emulateMedia({media:'screen'});expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);expect(await page.evaluate(()=>localStorage.getItem('egypt:saved'))).toBe(null);
});
for(const lang of['ar','en'] as const)test(`every plan preview uses exact days and stops ${lang}`,async({page})=>{
 await page.route('**/api/**',r=>r.fulfill({status:503}));await page.goto(`/${lang}/trips/`);
 for(const[i,trip]of itineraries.entries()){const root=page.locator('.trip-photo-preview').nth(i);await root.locator('summary').click();for(const[j,day]of trip.days.entries()){await root.locator('.trip-photo-day-choices button').nth(j).click();expect(await root.locator('.trip-photo-stop').evaluateAll(es=>es.map(e=>e.getAttribute('href')))).toEqual(day.places.map(id=>`/${lang}/places/${id}/`));await expect(root.locator('.trip-photo-note')).toHaveText(day.note[lang]);for(const image of await root.locator('img').all()){await image.scrollIntoViewIfNeeded();await expect.poll(()=>image.evaluate((e:HTMLImageElement)=>e.complete&&e.naturalWidth>0)).toBe(true)}}await root.locator('summary').click()}
});
for(const lang of['ar','en'] as const)test(`preview touch filter and exact day navigation ${lang}`,async({browser})=>{
 const context=await browser.newContext({viewport:{width:390,height:844},hasTouch:true,isMobile:true});const page=await context.newPage();await page.route('**/api/**',r=>r.fulfill({status:503}));await page.goto(`/${lang}/trips/`);await page.locator('.trip-duration-filters button').nth(3).tap();await expect(page.locator('.trip-photo-preview')).toHaveCount(2);const root=page.locator('.trip-photo-preview').first();await root.locator('summary').tap();await root.locator('.trip-photo-day-choices button').nth(5).tap();await root.locator('.trip-photo-open-day').tap();await expect(page).toHaveURL(new RegExp(`/${lang}/trips/cairo-alex-seven-day-program/#trip-day-6$`));await expect(page.locator('#trip-day-6')).toBeInViewport();await context.close();
});

for(const lang of['ar','en'] as const)test(`native first-day preview before scripts ${lang}`,async({browser})=>{
 const context=await browser.newContext({javaScriptEnabled:false});const page=await context.newPage();await page.goto(`/${lang}/trips/`);const root=page.locator('.trip-photo-preview').first();await expect(root.locator('.trip-photo-content')).toBeHidden();await root.locator('summary').click();await expect(root.locator('.trip-photo-content')).toBeVisible();await expect(root.locator('h3')).toContainText(itineraries[0].days[0].title[lang]);await expect(root.locator('.trip-photo-day-choices button').first()).toBeDisabled();await expect(root.locator('.trip-photo-open-day')).toHaveAttribute('href',`/${lang}/trips/${itineraries[0].id}/#trip-day-1`);await context.close();
});
