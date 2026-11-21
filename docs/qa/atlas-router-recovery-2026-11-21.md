# Atlas scoped-navigation recovery, 21 November 2026

## Fault and fix
The photo atlas read window.location once when mounting. During client navigation, its mount could precede the address-bar history update. A governorate photo link could then lose its filter and show all photos. The first B187 immutable check exposed two instances. A controlled 400ms history-commit delay reproduced the mismatch in four of four attempts on the previous production code.

The atlas now recovers filters from the router's search state, not a one-time read of the previous page's address. Router-backed search changes also handle back/forward recovery. Existing debounce still writes only filter/search state; viewer and comparison selections remain page-local. The static-export Suspense boundary has a bilingual loading fallback and a no-JavaScript encyclopedia link rather than a blank page. No account writes or new catalog facts. Existing loaded atlas styling and photo assets unchanged.

## Verification
Build, typecheck and 149 unit tests pass. 55 browser cases pass: eight new AR/EN tests cover delayed history commit at mobile/desktop widths, exact filter membership/count, search/filter/reset URL updates and browser history. Existing atlas, Tuna photo/attribution and all-governorate collection regressions included. The controlled delay is test instrumentation, not a claim about a browser's exact real-world event timing.

16 additional controlled-delay repeats pass. Local AR390/EN1280 pixels inspected: Cairo remains selected with 35 / 145 photos, existing image grid and typography unchanged. AR/EN no-script fallback pixels inspected: heading, explanation and encyclopedia link readable with no overflow. Production verification pending.
