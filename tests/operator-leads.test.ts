import {test} from 'node:test';
import assert from 'node:assert/strict';
import {operatorLeads,operatorsForPlace,operatorsForDestination} from '../src/lib/operators';
import {places,destinations} from '../src/lib/data';
test('real dive-centre leads retain directory evidence and exact place scope',()=>{
 assert.equal(operatorLeads.length,3);
 assert.deepEqual(operatorLeads.map(x=>x.directoryNumber),['100046','100530','100635']);
 for(const lead of operatorLeads){assert.equal(new URL(lead.directoryUrl).hostname.replace(/^www\./,''),'cdws.travel');assert.equal(lead.checkedAt,'2026-11-19');assert.ok(places.some(p=>p.id===lead.photoPlaceId));for(const id of lead.placeIds)assert.ok(places.some(p=>p.id===id));assert.doesNotMatch(JSON.stringify(lead),/[٠-٩۰-۹]/)}
 assert.equal(operatorsForPlace('ras-muhammad-national-park')[0].id,'camel-sharm');
 assert.equal(operatorsForPlace('dahab')[0].id,'sinai-divers-dahab');
 for(const id of ['blue-lagoon','mount-sinai','giza-pyramids','arish'])assert.deepEqual(operatorsForPlace(id),[]);
});

test('Hurghada lead belongs to the destination, not an unsupported island or attraction',()=>{
 const lead=operatorsForDestination('hurghada')[0];assert.equal(lead.id,'colona-hurghada');assert.deepEqual(lead.placeIds,[]);
 assert.deepEqual(operatorsForPlace('giftun'),[]);assert.deepEqual(operatorsForPlace('hurghada-marina'),[]);
 assert.match(lead.summary.en,/not a promise of Giftun/);assert.match(lead.summary.en,/dolphin sightings/);
 for(const lead of operatorLeads)for(const id of lead.destinationIds||[])assert.ok(destinations.some(d=>d.id===id));
 assert.deepEqual(operatorsForDestination('luxor'),[]);
});
