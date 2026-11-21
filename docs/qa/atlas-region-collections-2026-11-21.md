# Atlas regional photo collections,21Nov2026

## Visible outcome
The photo atlas now opens with regional source-photo collections. Each tile shows a cover from that region's eligible place photos and an exact photo-only count. Choosing a region filters the atlas and shows selected feedback. The mobile rail exposes the next tile;keyboard focus and recovered selections scroll horizontally into view without moving the page vertically.

Choosing a region clears a potentially conflicting governorate,but retains search/category. All regions clears only region;full reset clears every filter. All filters combine,including an intentionally empty cross-region/governorate selection recovered from a URL. Empty results remain honest rather than broadening silently.

Search,governorate,category and region are recorded in the page link,recovered on reload and history. Unknown scopes are discarded and text bounded to120characters. The URL contains these choices only,not the viewer selection or account data. No send action,persistence or account writes. Existing catalog geography/source photos are unchanged. Tailwind,AR/EN,touch,keyboard and print exclusion.

## Verification
- Build,typecheck146unit38browser tests pass.16new regional cases plus16atlas and6browse regressions.
- Every regional collection exact count/name/IDs and original photo asset decode tested atAR/EN6widths. URL/reload/history,combined filters,filtered viewer,reset,selected rail recovery,touch,print tested.
-648AR/EN18theme6width3selection checks pass,min text contrast5.4599:1,no overflow,44pxcontrols.
- Actual AR390/EN1280regional opening/selected captures inspected for photo layout,readability and clipping.
