# Find image provenance by source, 2026-11-17

Reproduced searching a known Commons filename on the credits page returning no results, in both languages. Credit search now includes source URLs, safely decodes URL text, trims accidental spaces, and normalizes accents and Arabic diacritics. Existing credit data and licensing are unchanged.

Added an announced result count and an explicit no-match state that keeps image-search scope separate from external-tour credits. Clear search restores all entries and returns keyboard focus to search. No source text is treated as markup.

Checked typecheck/build, 71 unit/API tests and four browser checks for file/source matching, whitespace, no-match recovery, focus, gallery credits and both languages. Inspected mobile empty-state layout and attribution display.
