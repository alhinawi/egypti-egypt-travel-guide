# Saved-place area navigator,21Nov2026

## Visible outcome
Saved places can now be browsed through photographic governorate tiles. Each tile counts only unique known saved places in that governorate,not trip plans or the full catalog. Cover photos come from those actual saved places and must be suitable,noncontextual source photographs. Missing suitable covers use an SVG location icon,not a misleading substitute.

Choosing a tile switches to Places and filters by governorate. The selected governorate remains visible below search;an all-governorates button clears it. Search combines with the selection. Type switches and full reset clear the area. Removing the last saved place in an area restores remaining places instead of trapping the visitor in an empty area. No new persistence,sync writes or share links. Existing save behavior is unchanged.

Desktop uses3wide tiles;tablet/mobile use a horizontal snap rail with keyboard-focus scrolling. Arabic/English,Tailwind,44pxcontrols,print exclusion. Counts and selection are browsing aids,not routes or access guarantees.

## Verification
- Build,typecheck139unit34browser tests pass,including16new area cases and existing saved-board regressions.
- Exact saved-only counts,names,cover IDs/alt text,type/search interactions,reset,removal recovery,touch,keyboard,signed-in no-write behavior and print tested.
-648AR/EN18theme6width3selection checks pass,min measured text contrast5.4599:1,no overflow,44pxcontrols.
- Actual AR390/EN1280pixels inspected for photo layout,selection feedback,readability and clipping.
