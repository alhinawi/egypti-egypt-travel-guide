# Governorate comparison place photographs, 2026-11-22

## Visible outcome

Replace the existing three tiny article thumbnails in each comparison panel with a named photographic mosaic: one large image and two smaller images, responsive sources, direct story/source links and separate sibling enlarge buttons. The first three eligible places and catalog order are unchanged. Each panel can open its complete existing atlas-place collection in the unchanged AtlasViewer, not just the three examples. Scope copy separates place article images from profile covers, the other governorate and routes.

The photo component is keyed by governorate so selection/history/swap changes unmount any old collection and release scroll lock. Closing restores the exact opener. No borrowed profile cover appears where the atlas collection is empty. Direct article links remain without JavaScript; photo controls are disabled before activation. Existing comparison counts, defaults, selectors, URL/history/language, profile/entry links and caution content remain unchanged.

## Verification

- Build/typecheck207unit pass. Existing coverage helper, atlas eligibility, content, photos and shared viewer/strip/gallery code unchanged.
-26new browser cases: AR/EN at360/390/600/601/700/701/900/1280, both selected collections, exact cover/title/alt/count/source, keyboard arrows/Home/End/Escape, exact last article, sibling enlarge/focus restoration, empty and two-photo collections, popstate/swap reset, error/retry/zoom, modal keyboard, URL/query/hash/storage/language continuity, no API writes, print, touch strip selection and real CDP swipe, no-JS direct links.46unchanged comparison/search-photo viewer regressions pass, including all27governorates' exact coverage/cautions/links.
-216theme/language/viewport checks, minimum mosaic text contrast6.071833125424051 and44pxtargets. Actual AR390mosaic/viewer and EN1280side-by-side mosaic pixels inspected.
- Initial modal keyboard test assumed every Tab retains a DOM focus target. Chrome's native dialog Tab boundary briefly reports BODY while focus is in browser chrome, then returns to the dialog; no underlying page control is reached. Test explicitly checks that boundary and return, rather than changing the shared viewer. The older rapid synthetic swipe/immediate-thumbnail probe caveat remains unchanged, not claimed fixed.

No new external content claims, sources, photos, domains/services/plans, global CSS, spending or deletion. Normal PR/CI and exact-main deployment evidence is in shipment reports.
