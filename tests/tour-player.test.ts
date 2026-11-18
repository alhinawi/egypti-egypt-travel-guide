import{test}from'node:test';import assert from'node:assert/strict';import{tourFrameUrl}from'../src/lib/tour-player';
test('embed only supported player routes,not arbitrary provider pages',()=>{
 assert.equal(tourFrameUrl('https://qalawun.aa-ken.jp/vrtour/en/'),undefined);
 assert.equal(tourFrameUrl('https://www.360cities.net/image/bayt-al-suhaymi-cairo'),undefined);
 assert.equal(tourFrameUrl('https://www.youtube.com/watch?v=mZEf4nY2Oyg'),'https://www.youtube-nocookie.com/embed/mZEf4nY2Oyg');
 assert.equal(tourFrameUrl('https://youtu.be/mZEf4nY2Oyg'),'https://www.youtube-nocookie.com/embed/mZEf4nY2Oyg');
 assert.equal(tourFrameUrl('https://www.youtube.com/watch?v=bad'),undefined);
 assert.equal(tourFrameUrl('https://example.com','https://my.matterport.com/show/?m=abc'),'https://my.matterport.com/show/?m=abc');
});
