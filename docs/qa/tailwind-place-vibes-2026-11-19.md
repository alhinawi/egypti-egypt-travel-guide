# Place editorial tags, 19 November 2026

Move full and compact place editorial tags to Tailwind. Remove eight legacy selector branches, retaining shared vibe-filter button rules and unrelated print selectors. No catalog metadata, tag selection, translated text, governorate/vibe routes or dependencies changed.

Exact before/after computed-style, text and route parity for 16 Arabic/English cases at 390, 600, 601 and 1280 pixels on full Qaitbay tags and compact foodie-filter cards. Compact tags remain two non-link spans, with the active editorial filter first, muted text and transparent screen background. Full tags retain the governorate link and individual vibe links. Both wrap without horizontal overflow.

Build, typecheck, 100 unit tests and 14 selected browser tests pass. Eight new breakpoint/language cases protect full-tag routes, editorial accessibility labels, compact sizes/background and hidden trip tags in print. Existing active-tag tests verify filter switching and reset; existing trip-print tests cover all nine plans.

Actual Arabic full-tag and English compact-tag mobile pixels inspected. No live API/D1/account QA; frontend verification blocks /api/**. No payment, booking, domain or plan effects.
