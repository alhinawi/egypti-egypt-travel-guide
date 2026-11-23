# Plan comparison photograph viewer, 2026-11-23

## Scope

Comparison cards gain explicit whole-plan browse and individual photograph enlargement. Existing mosaic links still open the first published day naming the place. The viewer story link explicitly opens its article instead. The existing distinct suitable photograph helper determines the full collection in first-listed order. Other plans, covers and day-specific selections are excluded. Existing sets stay independent and preserve their current page on viewer close. No catalogue, media, API, account, storage, global CSS or shared-viewer changes. No URL/save/compare writes from viewing.

## Checks

Build/typecheck296unit. 36new browser cases: every plan, every set, every exact photo index/name/image/article, whole collection starts first even on later sets, opener focus returns, exact first-day exits unchanged. Independent comparison panels, filters, remove/reload resets, keyboard/zoom/thumbs, retry and touch. 62 retained comparison/photos/sets cases unchanged. 864 language/theme/width/preview-viewer-zoom checks, contrast6.07,46px controls,3px focus,nooverflow. Scrolling thumbnail-strip items are deliberately allowed outside its viewport; outer document/dialog fit and all other controls stay bounded. Four local and four canonical EN1280/AR390 pixels inspected. Exact-main,canonical and immutable replays/parity recorded in release report.

## Unpassed rapid-input follow-up

Existing shared-viewer rapid synthetic swipe then immediate thumbnail remains unverified on physical devices. This batch also observed that a synthetic CDP swipe immediately followed by article.tap() did not navigate in Chrome mobile emulation, in both languages. Swipe changed the exact count correctly, and fresh article taps after closing/reopening worked. No shared-viewer fix guessed, no claim this immediate sequence passes. The ordinary touch test independently verifies swipe, then closes/reopens the explicit second-photo button and verifies its article exit.

Reproduce against /en/trips/?compare=cairo-two-days and /ar/trips/?compare=cairo-two-days at390x950, hasTouch/isMobile/reducedMotion=reduce: tap .trip-compare-photos-open, decode .atlas-viewer-image; send CDP touchStart at x295 EN/x95 AR with y centered on .atlas-viewer-stage, eight touchMoves to x95 EN/x295 AR, then touchEnd. Expect count2/4. Immediately capture .atlas-viewer-article href and tap the link, then expect the URL to match it. This final navigation assertion failed in the combined probe. Retain as follow-up, not a passing case. No established physical-device impact or baseline attribution for the article variation yet.
