# Plan list day-preview photograph viewer, 2026-11-23

## Scope

The existing plan-list photographic day previews now offer an explicit whole-current-day browse button and separate per-photograph enlarge buttons. Article links and the existing exact day-detail exit remain. Suitable photographs come only from that published day through the existing tripDayPhotographs helper. Plan covers and other days never enter the viewer. Published day notes, order, named stops and eligibility are unchanged.

Existing shared viewer is reused without modifications, including zoom, keyboard, thumbnails, touch and retry. Closing restores the exact opener and selected day. Changing the day closes the viewer. Each plan retains its independent day selection while present; reload returns to native collapsed previews and first day. No URL, saves, compare selection or API writes from browsing. No data, media, API, account, storage or global CSS changes. Tailwind utilities only on the touched preview.

## Verification

- Build and typecheck, 296 unit tests.
- 40 new browser cases: every day of all nine plans in Arabic and English, exhaustive exact image/name/article/count/order, whole-day browse and each individual enlarge, focus restoration, keyboard/zoom/thumbs, 360/390/600/601/900/1280 fit, true CDP touch swipes and article exit, failed-image retry, no writes, independent panels, reload and no JavaScript.
- 56 unchanged retained cases from trip-photo-preview.spec.ts and trip-day-photographs.spec.ts.
- 864 theme/width/language/preview-viewer-zoom checks: minimum text contrast6.07, target44px, focus3px, no horizontal overflow.
- Four local and four canonical preview/viewer screenshots inspected at English1280 and Arabic390. Exact article/photo pairing, separate enlarge controls, wraps and viewer fit checked in pixels.
- Replayed new, retained and matrix checks on exact merged main, canonical production and immutable production; production asset/HTML parity recorded with the release report.

## Known unchanged caveat

The previously documented rapid synthetic shared-viewer swipe followed immediately by thumbnail input remains a follow-up; no shared-viewer change or claim of fixing it in this batch.
