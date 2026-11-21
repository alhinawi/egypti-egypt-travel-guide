# Atlas viewer photograph strip, 21 November 2026

The full-screen atlas viewer now includes up to nine nearby photographs from the current filtered collection. Photo thumbnails with place names jump directly to another photograph, show the selected state and retain the existing article link. Exact preview range is visible. Home/End and RTL-aware arrow keys work inside the viewer; keyboard focus follows selection without vertical page scrolling. A single-photo result omits the strip. Existing close, error retry, source alt text, filtering and opener focus remain. No new photos, source facts, storage or account writes.

All new styling is Tailwind with the existing navy photo-viewer palette. Main image area leaves room for strip and controls; short screens can scroll the dialog.

## Verification
Build, typecheck and 153 unit tests pass. New unit checks cover all positions in all regions, exact ordered preview membership, active-photo inclusion and bounds. Browser coverage checks six widths in AR/EN, thumb selection, exact range, Home/End/arrows/focus, selected-thumb visibility, overflow, 44px controls, touch, filtered membership, single-photo omission, close/opener focus and existing atlas/router/comparison/error recovery. Initial checks caught a pointer-focus horizontal recenter that moved a thumbnail during a click at 601px; recenter on focus is now keyboard-only. Broader image selectors in existing tests now target the main viewer image explicitly because the dialog also contains thumbnail images. No assertion removed.

68 browser cases pass. 216 AR/EN, 18-theme, six-width checks pass with no horizontal overflow, 44px thumbnail targets and minimum measured text contrast 12.6254:1. Local AR390x844, EN1280x900 and short EN390x568 viewer pixels inspected: main photograph, title, article controls and selected strip remain readable with no overlap. Final production checks pending.
