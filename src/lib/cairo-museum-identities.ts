import {places, type Bilingual} from './data';
import {placePhotos} from './photos';

/** Identity and broad collection scope, not live admission or an itinerary. */
const identities = [
  {id: 'egyptian-museum', area: {ar: 'ميدان التحرير، وسط القاهرة', en: 'Tahrir Square, downtown Cairo'}, focus: {ar: 'آثار مصر القديمة في مبنى المتحف التاريخي بالتحرير.', en: 'Ancient Egyptian antiquities in the historic Tahrir museum.'}, sources: ['https://www.cairo.gov.eg/en/culture/cultural-destinations/cairo-museums/the-egyptian-museum/']},
  {id: 'grand-egyptian-museum', area: {ar: 'ميدان الرماية، طريق القاهرة - الإسكندرية الصحراوي', en: 'El Remayah Square, Cairo-Alexandria Desert Road'}, focus: {ar: 'مجموعات أثرية في قاعات العرض الرئيسية بالمتحف الكبير.', en: 'Archaeological collections in the Main Galleries of the Grand Egyptian Museum.'}, sources: ['https://gem.eg/en/collection/main-galleries/', 'https://gem.eg/en/visit/plan-your-visit/']},
  {id: 'national-museum-egyptian-civilization', area: {ar: 'طريق الفسطاط، عين الصيرة، القاهرة', en: 'Al-Fustat Road, Ain El-Sira, Cairo'}, focus: {ar: 'حضارة مصر من عصور ما قبل التاريخ للحياة الحديثة والمعاصرة، ومنها التراث الشعبي.', en: 'Egyptian civilization from prehistory to modern and contemporary life, including popular heritage.'}, sources: ['https://nmec.gov.eg/main-gallery/']},
] satisfies {id: string; area: Bilingual; focus: Bilingual; sources: string[]}[];
export const cairoMuseumIdentities = identities.map(identity => ({...identity, place: places.find(place => place.id === identity.id)!, photo: placePhotos[identity.id]}));
export const cairoMuseumIdentity = (id: string) => cairoMuseumIdentities.find(museum => museum.id === id);
export const cairoMuseumComparisonPath = (lang: 'ar' | 'en') => '/' + lang + '/essentials/#cairo-museums';
