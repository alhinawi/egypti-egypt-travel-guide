# Trip-day photograph viewer, 2026-11-21

## Visible outcome

The existing trip-day photographic preview now opens the exact selected photograph without leaving the plan. A day-level button opens the first suitable photographed place and separate enlarge buttons sit outside the article links. The shared full-screen viewer supplies title/area, article link, next/previous, thumbnail strip, keyboard navigation, touch swipe,2xinspection and retry. Closing restores the entry button without scrolling and retains the selected day and URL.

The collection contains only the selected published day's named places with existing suitable, non-contextual photographs, in first-occurrence order. Missing photographs, unknown places and duplicates are omitted from the viewer, not invented or substituted with plan covers. Existing cards, no-photo states and empty days remain; all day cards still link directly to articles. The exact day number and non-route/access scope are stated inside the viewer. No data, sources, availability, fees or transport claims changed.

New triggers are disabled before hydration, while the existing first-day images and article links remain without JavaScript. Print hides the entire existing preview and new entries as before. No saves, checklists, server writes or new storage.

## Verification

- Build/typecheck and204unit tests pass. Two new units verify every plan/day's exact eligible subset, order, deduplication, missing-photo/unknown-place handling and empty state.
-38new AR/EN browser tests pass. Every plan/day tested for exact collection count, title, full-size image, loaded photographs, article target, direct selected-photo entry and close/focus/selected-day/URL retention. Six widths360/390/600/601/900/1280exercise keyboard, Home/End, thumbnails, zoom, fit, touch targets and print. Retry/error, single-photo touch article, real CDP swipe and no-JS links also pass. No-write/save preservation covered.
-144related browser tests pass unchanged:70trip-day previews/navigator/directory previews and74search photograph viewer/atlas strip/trip-place finder/personal checklist cases. One local regression command exceeded its shell timeout, leaving a dead reused HTTP server; all74affected cases passed on a clean-server rerun. This was test infrastructure, no product workaround.
-216language/viewport/theme checks pass, new-entry minimum contrast6.071833125424051, no document overflow, visible buttons/links at least44px. Actual AR390andEN1280preview and full-screen-viewer pixels inspected.

Shared AtlasViewer, strip and PlaceGallery files are unchanged. The pre-existing B218rapid synthetic touch swipe followed immediately by thumbnail tap caveat remains documented in search-place-photo-viewer-2026-11-21.md. The new real-swipe and thumbnail tests are independent and do not claim that combined rapid-input probe passes. Physical-device rapid input remains unverified.

Tailwind/SVG only on the touched trip-day surface. No global CSS, new service/domain/plan, purchase or deletion. Normal PR/CI and exact-main deployment evidence is recorded in shipment reports.
