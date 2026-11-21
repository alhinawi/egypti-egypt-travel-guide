import{searchGuide}from'./guide-search';
import{searchGuidePhotos}from'./guide-search-photos';
/** Existing literal query examples. A cover is one eligible matching article, not every result. */
export const guideSearchStarters=['Cairo','Aswan','متحف','إسكندرية'].map(query=>{const entries=searchGuide(query),photos=searchGuidePhotos(query),cover=photos[0];return{query,entries,photos,cover,counts:{places:entries.filter(e=>e.kind==='places').length,governorates:entries.filter(e=>e.kind==='governorates').length,plans:entries.filter(e=>e.kind==='plans').length}}});
