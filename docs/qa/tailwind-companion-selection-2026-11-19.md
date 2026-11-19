# Companion page heading and selection panels: Tailwind

Date: 19 November 2026

## Scope

Moved the companion-page heading/disclosure, selection panel, local-storage disclosure and in-person-guide note to Tailwind. Removed 23 legacy selector branches across globals, editorial and typography stylesheets. Companion cards were migrated separately. Operator listings are unchanged.

No text, fictional-person portrait, suggested place, navigation behavior, storage key or backend change. The clear/change controls retain keyboard focus handling. Normal and failed local-storage messages remain distinct. The fictional/not-bookable notice, route/access caveat and refusal of guide bookings/payments/contact details remain unchanged.

## Verification

- 101 unit tests, typecheck and static/API builds passed.
- 82 selected browser tests passed, including 16 new selection-panel tests and prior companion-picker, governorate, climate and article checks.
- Exact before/after full-panel style, text, image/alt, role and link parity: 32 Arabic/English cases across 390/600/601/1280px, selected/unselected and normal/failed storage, plus 8 print comparisons.
- Keyboard selection focuses the panel; clear returns focus to the picker. Choice failures use a status message without claiming persistence.
- Mobile Arabic/English selection panels and real-guide note inspected. No horizontal overflow. Arabic typography, 5px page anchors elsewhere and existing companion-card line heights remain unchanged.
- Print checks wait for fonts after switching media. Arabic selection headings retain their original 29px size; in-person-guide note headings retain 17pt in Arabic print.

All verification mocks demo-status and blocks every other API call. No live D1 reads, account QA or production-toggle check. Screenshots may hide sticky header/skip/bottom navigation only for isolated capture. Delivered navigation is unchanged.
