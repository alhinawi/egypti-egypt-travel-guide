# Atlas photograph close-up inspection

The fullscreen atlas viewer now has an explicit fit/2x control. Close-up doubles the fitted photograph surface and provides two-axis scrolling, centered on entry. The focused image region keeps arrow/page/home/end keys for scrolling rather than changing photographs. Plus or equals enters close-up; minus or zero returns to fit. Existing previous/next, article and filmstrip buttons remain available. Photograph changes and closing/reopening reset close-up. Error states disable zoom, and successful retries restore it.

Swipe/drag photograph changes run in fit mode only. The close-up surface allows native horizontal/vertical touch scrolling and pinch zoom, with scroll containment. No image enhancement or extra-resolution claim is made. Same source photograph, no new assets or facts, no URL/storage/account writes. AR/EN, Tailwind and reduced-motion behavior retained.

## Checks

- Build/typecheck and 165 unit tests pass.
- 160 browser cases pass:16newzoom114atlas/contact-sheet/category/swipe/history/region/router/filmstrip30comparison/source. Another32focused zoom repeats pass.
- Exact2xsurface dimensions, overflow and centered scroll, return-to-fit/reset scroll, keyboard zoom/pan without accidental navigation, button/filmstrip photo resets, error/retry controls, close/reopen/focus return, direct touch guard and no saved writes included.
- 216AR/EN18theme6widthchecks pass: native2xscroll surface, no document/dialog horizontal overflow,46pxcontrols,min checked textcontrast12.6254:1.
- Actual revised AR390 and EN1280 zoom pixels inspected. Initial inherited grid-button display stacked the icon/text inside a fixed-height button; corrected to an explicit inline-flex/min-height control and visually rechecked. The existing error-retry test now targets the image-stage error status, not the last status in a viewer that also has a new zoom status.
- Initial new-test filmstrip selector typo was corrected before all green runs. A display assertion now accepts flex blockification inside its flex parent rather than requiring the specified inline-flex value. Combined long browser calls were split after a timeout; the complete114case atlas suite passes independently.

Exact-main deployment, immutable/canonical browser verification and canonical pixels follow the normal green-CI PR merge and are reported separately.
