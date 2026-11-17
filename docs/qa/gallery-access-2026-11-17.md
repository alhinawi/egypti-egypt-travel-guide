# Gallery keyboard and screen-reader access, 2026-11-17

The lightbox previously had no accessible dialog name or announced position. Regression tests reproduced the missing named dialog before the change.

The dialog now has an Arabic/English name, and its existing visible photo counter is a polite atomic status with a screen-reader-only photo label. Home and End jump to the first/last image; existing RTL/LTR arrows and touch swipes remain unchanged. Reduced-motion preferences suppress image snap animation. No visible captions or new imagery were added.

Typecheck, production build, 70 unit/API tests and four browser tests passed. Checks cover bilingual naming and counts, keyboard endpoints, RTL/LTR arrows, image alt text, motion preference, Escape/focus return, existing gallery behavior and touch swipes. Actual 390px Arabic/English lightbox screenshots inspected: image fits without cropping, counter and controls visible, clear focus ring, no visible captions.
