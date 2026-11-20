# Governorate scene galleries, 2026-11-20

The 19 existing detail photographs across 11 governorate profiles now open the shared photograph viewer. Profiles retain their exact sourced photo sets. Desktop previews fill the scene card, while mobile previews form a horizontal photo rail. Responsive 420/780px previews open the existing 1400px assets without cropping the viewer.

The shared viewer retains native modal behavior, keyboard and touch navigation, thumbnail selection, close controls, focus return, body scroll lock and image retry. Single-photo profiles omit redundant navigation. Existing place-gallery callers keep their previous defaults and layout. New profile wrapper styles use Tailwind only.

The interactive gallery is hidden in print, and the original static photograph rendering is retained separately for print. No factual content, catalog data, photo credits or sources changed.

## Verification

- Production build, typecheck and 126 unit tests pass.
- 42 browser cases cover 16 new governorate checks and 26 existing place-gallery navigator/layout/retry checks.
- Every scene-bearing governorate in AR/EN is checked against its exact existing photo set, including single-photo behavior and focus return. Tests also cover full-size assets, keyboard, direct touch, reduced motion, print photographs and no document overflow.
- 648 AR/EN, 18-theme, six-width and three-profile cases cover the modal on Alexandria, Aswan and single-photo Qalyubia. Minimum measured viewer text contrast 12.6254:1. Close controls remain at least 44px and focus returns to the opener.
- Actual Arabic mobile preview/viewer and English desktop preview/viewer pixels inspected for photo placement, readable controls and clipping.

No paid services, domains, deletions, bookings or account effects.
