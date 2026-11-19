import {test} from 'node:test';
import assert from 'node:assert/strict';
import {operatorLeads,operatorsForPlace} from '../src/lib/operators';
import {places} from '../src/lib/data';
test('real dive-centre leads retain directory evidence and exact place scope',()=>{
 assert.equal(operatorLeads.length,2);
 assert.deepEqual(operatorLeads.map(x=>x.directoryNumber),['100530','100635']);
 for(const lead of operatorLeads){assert.equal(new URL(lead.directoryUrl).hostname.replace(/^www\./,''),'cdws.travel');assert.equal(lead.checkedAt,'2026-11-19');assert.ok(places.some(p=>p.id===lead.photoPlaceId));for(const id of lead.placeIds)assert.ok(places.some(p=>p.id===id));assert.doesNotMatch(JSON.stringify(lead),/[٠-٩۰-۹]/)}
 assert.equal(operatorsForPlace('ras-muhammad-national-park')[0].id,'camel-sharm');
 assert.equal(operatorsForPlace('dahab')[0].id,'sinai-divers-dahab');
 for(const id of ['blue-lagoon','mount-sinai','giza-pyramids','arish'])assert.deepEqual(operatorsForPlace(id),[]);
});
