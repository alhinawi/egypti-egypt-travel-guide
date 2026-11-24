# Home destination mobile rail controls

Mobile-only previous/next destination controls and actual fully-visible range below the existing home photographs. Center the next obscured card so snap alignment cannot leave it unchanged on wider phones. Keyboard-focused links are revealed too. Existing photo/card order, links, horizontal touch scroll and tablet/desktop grid preserved. Tailwind only, no data/API/storage/viewer/global CSS change.

Build/type296unit22new38retained pass. AR/EN9widths360/361/390/520/600/601/900/901/1280: next/previous boundaries, actual full-card geometry/range, all8decodedphotos/links, focus/Tab,resize,touchscroll/reload,noJS links,print,URL/saves/nooverflow.540theme/language/mobilewidth/first-middle-last cases contrast10.43,minheight48.59,focus3,nooverflow. Actual AR390/EN390/EN1280 pixels inspected; shorter visible English labels keep controls on one row with full accessible names.

The old whole-home magazine-layout baseline has16 failures from earlier home additions and height changes; an unchanged-base AR360 replay reproduces that mismatch. Left that fixture untouched. Its6 destination hover/mobile-scroll tests and32 card layout baselines pass. Structural unit assertion now follows the extracted component, same Tailwind coverage. First navigation test caught nearest alignment snapping back at520px, fixed center alignment; test also corrected its false one-visible-card assumption at600px by checking actual card geometry.

Release requires actual CI, normal merge, exact-main build/browser/matrix, clean exact-main production, both-origin replay/parity and canonical pixels. Existing physical rapid-input viewer caveat unchanged.
