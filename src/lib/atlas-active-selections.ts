import {atlasFilterQuery, readAtlasFilters, atlasAreas, type AtlasFilters} from './photo-atlas';
import {categoryNames, itineraries} from './data';
import {regions, eraNames} from './encyclopedia';
export type AtlasSelectionKey = keyof AtlasFilters;
export type AtlasSelection = {key: AtlasSelectionKey; label: string; value: string};

/** Labels come from the same public records that own atlas filter validation. */
export function atlasActiveSelections(filters: AtlasFilters, lang: 'ar' | 'en'): AtlasSelection[] {
  const f = readAtlasFilters(atlasFilterQuery(filters));
  const rows: AtlasSelection[] = [];
  const add = (key: AtlasSelectionKey, ar: string, en: string, value?: string) => {
    if (value) rows.push({key, label: lang === 'ar' ? ar : en, value});
  };
  add('q', 'البحث', 'Search', f.q.trim());
  add('area', 'المحافظة', 'Governorate', atlasAreas.find(g => g.id === f.area)?.name[lang]);
  add('category', 'نوع الفسحة', 'Category', Object.entries(categoryNames).find(([id]) => id === f.category)?.[1][lang]);
  add('region', 'المنطقة', 'Region', regions[f.region]?.[lang]);
  add('era', 'العصر', 'Era', f.era ? eraNames[f.era]?.[lang] : undefined);
  const plan = itineraries.find(p => p.id === f.trip);
  add('trip', 'الخطة', 'Plan', plan?.title[lang]);
  if (plan && f.day) add('day', 'اليوم', 'Day', f.day + ' · ' + plan.days[Number(f.day) - 1].title[lang]);
  return rows;
}

/** A day belongs to its plan. Other removals preserve every independent choice. */
export function removeAtlasSelection(filters: AtlasFilters, key: AtlasSelectionKey): AtlasFilters {
  return {...filters, [key]: '', ...(key === 'trip' ? {day: ''} : {})};
}
