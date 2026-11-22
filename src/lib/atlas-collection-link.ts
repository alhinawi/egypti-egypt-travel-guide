import {atlasFilterQuery, readAtlasFilters, type AtlasFilters} from './photo-atlas';

/** Share current public filters, never the address bar or local viewer/account state. */
export function atlasCollectionLink(origin: string, lang: 'ar' | 'en', filters: AtlasFilters) {
  const safe = readAtlasFilters(atlasFilterQuery(filters));
  return new URL('/' + lang + '/photos/' + atlasFilterQuery(safe), origin).href;
}
