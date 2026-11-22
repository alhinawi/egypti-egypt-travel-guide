import {places, type Bilingual, type Place} from './data';
import {governorates, placeIndex} from './encyclopedia';
import {placePhotos} from './photos';
import tours from './tours.json';

export const virtualVisitKindNames = {
  video: {ar: 'فيديو', en: 'Video'},
  panorama: {ar: 'بانوراما 360', en: '360 panorama'},
  model: {ar: 'نموذج 3D', en: '3D model'},
  archive: {ar: 'أرشيف', en: 'Archive'},
} satisfies Record<string, Bilingual>;
export type VirtualVisitKind = keyof typeof virtualVisitKindNames;
export type VirtualVisitFilters = {q: string; governorate: string; kind: string};
export type VirtualVisitEntry = {place: Place; tour: typeof tours[number]; governorate: string; search: string};
export const emptyVirtualVisitFilters: VirtualVisitFilters = {q: '', governorate: '', kind: ''};
const normalize = (value: string) => value.normalize('NFKD').replace(/[\u064B-\u065F\u0670\u0640]/g, '').replace(/[أإآ]/g, 'ا').replace(/ى/g, 'ي').toLowerCase();

/** The existing published catalog order, not a ranking or a live availability check. */
export const virtualVisitEntries: VirtualVisitEntry[] = places.flatMap(place => {
  const tour = tours.find(item => item.placeId === place.id);
  if (!tour) return [];
  const governorate = placeIndex[place.id]?.governorate || '';
  const area = governorates.find(item => item.id === governorate);
  return [{place, tour, governorate, search: normalize([
    place.name.ar, place.name.en, tour.title.ar, tour.title.en,
    tour.scope.ar, tour.scope.en, tour.provider, area?.name.ar, area?.name.en,
  ].filter(Boolean).join(' '))}];
});
export const virtualVisitGovernorates = governorates.filter(area => virtualVisitEntries.some(entry => entry.governorate === area.id));
const preferredCovers: Record<VirtualVisitKind, string> = {video: 'al-muizz-street', panorama: 'giza-pyramids', model: 'abu-simbel', archive: 'egyptian-museum'};
export const virtualVisitKindChoices = (Object.entries(virtualVisitKindNames) as [VirtualVisitKind, Bilingual][]).map(([id, name]) => {
  const entries = virtualVisitEntries.filter(entry => entry.tour.kind === id);
  const suitable = entries.filter(entry => {
    const photo = placePhotos[entry.place.id];
    return photo && !photo.contextual && photo.heroSuitable !== false;
  });
  return {id, name, count: entries.length, cover: suitable.find(entry => entry.place.id === preferredCovers[id]) || suitable[0]};
});

function validFilters(filters: VirtualVisitFilters): VirtualVisitFilters {
  return {
    q: filters.q.slice(0, 120),
    governorate: virtualVisitGovernorates.some(area => area.id === filters.governorate) ? filters.governorate : '',
    kind: Object.hasOwn(virtualVisitKindNames, filters.kind) ? filters.kind : '',
  };
}
export function filterVirtualVisits(filters: VirtualVisitFilters = emptyVirtualVisitFilters) {
  const state = validFilters(filters), words = normalize(state.q.trim()).split(/\s+/).filter(Boolean);
  return virtualVisitEntries.filter(entry => (!state.kind || entry.tour.kind === state.kind) &&
    (!state.governorate || entry.governorate === state.governorate) && words.every(word => entry.search.includes(word)));
}
export function readVirtualVisitFilters(search: string): VirtualVisitFilters {
  const params = new URLSearchParams(search);
  return validFilters({q: params.get('q') || '', governorate: params.get('governorate') || '', kind: params.get('kind') || ''});
}
export function virtualVisitQuery(filters: VirtualVisitFilters) {
  const state = validFilters(filters), params = new URLSearchParams();
  if (state.q.trim()) params.set('q', state.q.trim());
  if (state.governorate) params.set('governorate', state.governorate);
  if (state.kind) params.set('kind', state.kind);
  return params.size ? '?' + params.toString() : '';
}
export function virtualVisitLink(origin: string, lang: 'ar' | 'en', filters: VirtualVisitFilters) {
  return new URL('/' + lang + '/virtual-tours/' + virtualVisitQuery(filters), origin).href;
}
