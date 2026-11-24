# Suggested-place companion gallery entry layout

One wrapping label, nonbreaking count, nonshrinking icon and mobile fullwidth/maxwidth. Original wording and selected companion's suitable-place-only scope/count/order retained. Tailwind markup only. No companion selection, availability/demo gate, saves, viewer, stories, photographs/content/API/storage/globalCSS changes.

## Before merge

- Build/type296unitpassed.
- 22new AR/EN10widths320–1280label/count/icongeometry,44target/3focus,mobilefullwidth,keyboardviewer/count/close/focus,choice/URL/savesunchanged. Every companion exact eligible count/viewer scope verified.
- 120retained:43gallery and77card/selection/picker tests, including disabled demo state, retry/zoom/swipe/article exits, blocked storage, clear/change choice and print.
- 864matrix:18themes8widthsAR/EN3representative companions. Contrast11.50,target48.59,focus3,nooverflow,intactcount/icon.
- Initial fullwidth test compared the button against parent padding-box width. Corrected measurement to the actual content-box width, retaining fullwidth requirement and product markup. All other geometry assertions unchanged.
- Actual local AR390/EN1280 and AR390decodedviewer inspected. These use demo-status enabled fixture, not proof the feature is enabled live.

## Release gate

ActualgreenCI normalmerge exactmainbuild/production. Main/canonical/immutable22new120retained864matrix,HTML/CSS/JS/photo parity, unmocked demo-state and actual pixels. If demo is live-disabled, label enabled-fixture screenshots explicitly; don't imply availability or alter the gate.

PriorB329canonicalLuxorTemple500twice recovered unchanged,causeunknown/notfixed. Earlierhome→searchprobe/physicalrapidinputviewercaveatsunchanged. No speculative shared-viewer patch,purchases,newdomains,paidplans,deletions.
