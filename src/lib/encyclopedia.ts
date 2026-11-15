import governorateData from './encyclopedia/governorates.json';
import placeIndexData from './encyclopedia/place-index.json';
import{places,type Bilingual,type Place}from'./data';
export const governorates=governorateData;
export const regions:Record<string,Bilingual>={'greater-cairo':{ar:'القاهرة الكبرى',en:'Greater Cairo'},delta:{ar:'الدلتا',en:'Nile Delta'},mediterranean:{ar:'ساحل المتوسط',en:'Mediterranean coast'},canal:{ar:'مدن القناة',en:'Canal cities'},sinai:{ar:'سيناء',en:'Sinai'},'red-sea':{ar:'البحر الأحمر',en:'Red Sea'},'middle-egypt':{ar:'مصر الوسطى',en:'Middle Egypt'},'upper-egypt':{ar:'الصعيد',en:'Upper Egypt'},'western-desert':{ar:'الصحراء الغربية',en:'Western Desert'}};
export const vibeNames:Record<string,Bilingual>={foodie:{ar:'أكل وقهاوي',en:'Food & coffee'},lively:{ar:'حركة وحياة',en:'Lively'},historic:{ar:'وسط التاريخ',en:'Historic'},museum:{ar:'متاحف وحكايات',en:'Museums'},sea:{ar:'بحر وهوا',en:'By the sea'},nature:{ar:'قريب من الطبيعة',en:'Nature'},relaxing:{ar:'على مهلك',en:'Slow down'},adventure:{ar:'روح المغامرة',en:'Adventure'},crafts:{ar:'حِرف وصنعة',en:'Crafts'},shopping:{ar:'لفّة في السوق',en:'Shopping'},gardens:{ar:'خضرة وجناين',en:'Gardens'},arts:{ar:'فن وثقافة',en:'Arts & culture'},city:{ar:'حياة المدينة',en:'City life'}};
export const eraNames:Record<string,Bilingual>={'ancient-egypt':{ar:'مصر القديمة',en:'Ancient Egypt'},islamic:{ar:'العصور الإسلامية',en:'Islamic periods'}};
export type PlaceIndex={governorate:string;vibes:string[];eras:string[];classification:string;source_basis:string|string[]};
export const placeIndex=placeIndexData as Record<string,PlaceIndex>;
export const governorateById=(id:string)=>governorates.find(g=>g.id===id);
export const placesInGovernorate=(id:string)=>places.filter(p=>placeIndex[p.id]?.governorate===id);
export const placeMetadata=(place:Place)=>placeIndex[place.id];
export type Source={url:string;label?:string;checkedAt?:string};
export type ArticleSection={title?:Bilingual;body:Bilingual;sources:Source[];photoId?:string};
export type PlaceArticle={history?:ArticleSection;see?:ArticleSection;nearby?:ArticleSection;buy?:ArticleSection;eat?:ArticleSection;wear?:ArticleSection;weather?:ArticleSection;forecastUrl?:string;nearbyPlaceIds?:string[]};

export const placeArea=(p:Place)=>{const g=governorateById(placeIndex[p.id]?.governorate);return g?{name:g.name,path:"/governorates/"+g.id+"/"}:{name:{ar:p.destination,en:p.destination},path:"/destinations/"+p.destination+"/"}};
