import{governorates,regions}from'./encyclopedia';
import{filterAtlas,atlasFilterQuery}from'./photo-atlas';
import{governorateDirectoryQuery}from'./governorate-directory';
/** Existing browsing-group membership and eligible atlas photos only. Not a route. */
export function regionContinuation(id:string){if(!Object.hasOwn(regions,id))return null;const members=governorates.filter(g=>g.region===id),photos=filterAtlas({region:id});return{id,name:regions[id],members,photos,examples:photos.slice(0,3),directoryQuery:governorateDirectoryQuery({q:'',region:id}),atlasQuery:atlasFilterQuery({q:'',area:'',category:'',region:id})}}
