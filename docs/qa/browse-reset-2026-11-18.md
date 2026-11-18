# Browse reset scope, 2026-11-18

On a governorate profile, resetting encyclopedia filters used to clear the initial governorate too. The heading still named that governorate while results silently expanded to all 154 places, and the URL gained an empty governorate override. Reset now restores the component's declared initial governorate/vibe/category/era, clears transient search/region, and focuses the search field. The all-Egypt encyclopedia still resets to all entries. The empty-result recovery label now describes restoring the page defaults rather than promising all entries everywhere.

Also trim surrounding search spaces, matching the governorate index behavior without changing the text a visitor typed or the stored URL text.

Validation: four regression cases failed before the change. Typecheck, build, 71 unit/API tests, four new reset checks plus two existing show-more/focus checks pass. Both languages verify preserved Dakahlia scope, clean default URL, stable results on reload, global reset, padded name search and focus. Inspected mobile screenshots of the reset governorate filters. No content records or external sources changed.
