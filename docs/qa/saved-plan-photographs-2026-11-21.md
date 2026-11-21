# Saved plan day photographs

Saved plans now reuse the published day-photo preview already available in the trip finder. Each preview starts collapsed and opens in place, with day selection, published stops, notes, original place links and the exact plan-day link. It does not save anything automatically. Existing search/type/area controls, place photo board and explicit removal remain unchanged. Print keeps the original trip cards and hides interactive previews.

## Verification

- Build, typecheck and 167 unit tests pass.
- 108 browser cases cover 18 new saved-plan cases, the existing 52 saved cases, 18 trip-photo cases and 20 trip-card/print/save-label cases. Both languages; six widths from 360 to 1280px.
- Every published plan/day checks its actual title, notes, stop IDs and exact day URL. Keyboard, touch, close/reopen, search/type/reset, photo board, explicit plan removal and print are covered.
- Fictional isolated local/account fixtures only. Anonymous preview actions retain local saves unchanged; signed-in read-only preview actions make no non-GET requests. No owner account or saved collection was edited.
- 216 opened-preview combinations: 18 themes x two languages x six widths. Minimum sampled text contrast 6.0718, preview summary/day controls at least 44px, no horizontal overflow. Existing card save buttons are outside this new-control audit.
- Actual AR390 and EN1280 screenshots inspected: readable photos, day selector, headings, notes, links, and mobile fixed navigation.

## Scope

No new travel facts, photographs, access claims, dependencies, account writes or domains. Existing published source assets and content are reused. New presentation uses Tailwind utilities.
