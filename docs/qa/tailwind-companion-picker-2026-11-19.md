# Story-companion picker Tailwind migration

Date: 19 November 2026

## Scope

Moved the fictional story-companion picker grid, card portraits, card copy, choice buttons and selected marker from legacy stylesheets into Tailwind utilities. Removed 31 selector branches. The page heading, selection panel, real-guide advice and operator listings are outside this change.

No character records, portraits, names, specialty text, suggested place links, fictional/not-bookable disclosure or storage behavior changed. The two/three/four-column screen layout and original print styling remain unchanged. Choice stays local to the browser and never becomes a guide booking.

## Verification

- 101 unit tests passed.
- Typecheck and static/API builds passed.
- 66 selected browser tests passed, including 18 new companion-picker tests plus governorate profiles, climate and article disclosures.
- Before/after full picker computed-style, text, image, alt and button-state parity: 32 AR/EN screen states at 390, 500, 501, 600, 601, 800, 801 and 1280px, covering unselected and selected cards.
- 16 reduced-motion checks and 4 AR/EN mobile/desktop print comparisons also matched exactly.
- Keyboard Enter chooses a companion, focus moves to the selection panel, changing companion returns focus to the picker, selection survives reload and disabled-demo state still offers the encyclopedia.
- Portraits decoded successfully. Mobile Arabic/English screenshots inspected: readable copy, mint selected outline/check, 44px minimum choice buttons and no horizontal overflow.

All companion checks intercept demo-status with a local fixture and block every other API request. This does not verify or change the production demo toggle, account state or database. No live D1 reads or account QA.

Screenshot-only isolation hides sticky header, skip link and bottom navigation while capturing the picker. Delivered navigation is unchanged.
