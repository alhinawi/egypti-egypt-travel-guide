# Era gallery entry layout

One wrapping label with a nonbreaking count, nonshrinking icon and mobile fullwidth/maxwidth. Exact wording and full-era-before-filter scope/count unchanged. Tailwind markup only. No membership/order/history/story/set/save/viewer/photos/content/API/storage/globalCSS changes.

## Before merge

- Build/type296unit pass.
- 22new checks AR/EN10widths320–1280 including900/901: label/count/icon geometry, mobile fullwidth,44target/3focus, keyboard viewer/count/close/focus, URL/saves unchanged. Both eras retain full counts through later sets and no-result article filters.
- 70retained:26named-place saves,22story/set and22viewer/filter/zoom/rail/retry/swipe/noJS checks.
- 1152matrix:18themes8widthsAR/ENbotherasfirst/lastsets. Contrast11.50,target48.59,focus3,nooverflow,intactcount/icon.
- Actual local AR390/EN1280 and AR390decodedviewer pixels inspected. Counts grouped, photographs/saves/story/set controls retained.
- Test discovery initially rejected a duplicate900px width in the new fixture. Corrected the duplicate to800px before running checks; no product/assertion workaround.

## Release gate

ActualgreenCI normalmerge exactmainproduction/build, new/retained/matrix on main/canonical/immutable, HTML/CSS/JS/photo parity, unmocked decode/close/focus, actual canonical pixels.

PriorB329canonicalLuxorTemple500twice recovered unchanged, cause unknown/notfixed. Earlierhome→searchprobe andphysicalrapidinputviewercaveatsunchanged. No speculative shared-viewer patch, purchases, newdomains, paidplans or deletions.
