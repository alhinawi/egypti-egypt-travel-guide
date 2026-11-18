# Governorate search recovery, 2026-11-18

The governorate index previously became a blank grid when a name and region produced no matches. There was no result count or recovery control. Leading/trailing search spaces also caused a real governorate name to return nothing.

Added a polite, atomic result count against the 27 entries in the catalog, a bilingual no-match message, and one control to clear both name and region and return keyboard focus to search. Trim only the governorate search query; preserve existing Arabic diacritic normalization. Do not imply that unmatched geography lacks places or that coverage is complete.

Validation: all four targeted checks failed against the old build. Typecheck, production build, 71 unit/API tests and four targeted browser checks passed after the change. Both languages cover zero results, combined filters, reset/focus, whitespace-padded names, Arabic diacritics and Sinai's two catalog entries. Inspected mobile Arabic/English layouts. No geographic records, content claims, photos or source links changed.
