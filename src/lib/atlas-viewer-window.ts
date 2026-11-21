import type{Place}from'./data';
/** A bounded preview around the current photograph, retaining filtered order. */
export function atlasViewerWindow(places:Place[],active:number){const index=Math.min(Math.max(0,Number.isFinite(active)?Math.floor(active):0),Math.max(0,places.length-1)),start=Math.max(0,Math.min(index-4,places.length-9));return{places:places.slice(start,start+9),start,end:Math.min(start+9,places.length),index}}
