# Shared page containers and lead copy, November 20, 2026

## Scope
Move content width, page geometry and lead paragraphs to shared Tailwind classes across destination, place, trip, encyclopedia, governorate, guide, virtual-visit and information pages. Remove 12 legacy selector branches, including the superseded detail-width rule. No text, navigation, media-source or API changes.

## Verification
- 119 unit tests, TypeScript checks and production build pass.
- 128 new browser matrix tests cover eight routes, Arabic/English, eight widths and all 18 themes.
- Exact computed-style equality for all selected content containers and lead paragraphs: 2,880 cases, 2,304 screen and 576 print. Widths 360/361/390/600/601/900/901/1280. Print checked at 390 and 1280.
- 120 existing browser regressions pass: detail shell, page headings, encyclopedia shell/filters and trip print.
- Mobile and desktop Arabic/English pixels inspected: loaded photography, readable lead paragraphs, correct responsive gutters and unchanged cards/content below.
- Frontend browser checks block /api/**. No extra D1/account checks in this refactor.

## Preserved details
- Effective 1340px general content maximum and 32/24/22/18px responsive gutters.
- Effective 36px general page top padding, 30px/15px bottom padding and 55vh minimum height.
- Print zero padding needs an important utility so width-based utilities do not reintroduce screen gutters or bottom padding.
- Existing route overrides remain, including trip geometry, governorate profile width/padding and guides' 20px mobile screen gutters.
- Lead copy keeps 820px general maximum, 19px/16px sizes, line height 2 and 12px/10px top plus 18px bottom margins. Specialized heading/information typography and theme colors remain in force.
