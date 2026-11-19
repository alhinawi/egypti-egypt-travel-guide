# Encyclopedia and governorate filters: Tailwind

Date:19 November 2026

## Scope

Moved encyclopedia search, vibe chips, advanced filter summary/controls, editorial-tags note and shared governorate-directory controls to Tailwind. Removed22legacy selector branches. Shared grid utilities are defined once in the encyclopedia component. No new stylesheets or dependencies.

Search normalization, URL serialization, browser-history behavior, reset defaults/focus, labels, option counts, editorial caveats and place data are unchanged. Mobile vibe chips retain horizontal scrolling and snap behavior. Native selects and pressed/expanded states remain unchanged.

## Verification

- 101unit tests,typecheck and static/API build passed.
- 49selected browser tests passed, including12new filter layout tests and existing copied-URL/reload/history/reset, governorate-directory search/layout and governorate profile checks.
- Exact before/after full-panel computed styles,text,values and pressed/expanded states:36AR/EN closed/open-selected encyclopedia and governorate controls cases at390/520/521/800/801/1280,plus12print comparisons.
- Four advanced columns above800px,two below. Directory controls stay two columns at every width.520px mobile styling remains separate.
- Mobile AR/EN and desktop EN screenshots inspected: labels,selected chips,active-count badge,reset and caveats readable. No horizontal page overflow. Native select text clipping is unchanged and full labels remain in their options.

All frontend checks block every API request. No live D1 reads,account QA or production data changes. Sticky navigation is hidden only for isolated screenshots,not in delivered UI.
