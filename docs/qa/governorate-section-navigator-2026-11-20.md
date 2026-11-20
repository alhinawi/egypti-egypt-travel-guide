# Governorate chapters,20Nov2026

## Visible outcome
All27governorate profiles now have a complete section navigator below the existing hero photo. The rail stays beneath the fixed site header while reading the profile. It includes only rendered sections,including food,markets,traditions,scene photography,culture/calendar and published places with their exact count. It replaces the former partial history/climate/crafts jump row.

Each destination is focusable. Keyboard/touch jumps and direct hash arrivals clear both headers. Horizontal focus keeps rail links visible. Return links follow the profile and its place directory. The navigation and return controls are excluded from print. New/touched styling uses Tailwind.

## Verification
- Build,typecheck130unit50browser cases pass,including18new navigator cases and existing profile/gallery regressions.
- All27profiles checked in Arabic/English for exact labels,counts,unique anchor IDs and real visible destinations. No new travel/content claims.
-648AR/EN18theme6width3profile cases,minimum measured text contrast6.0718:1,no page overflow,44pxlinks,compact navigator height.
- Keyboard,touch,direct hash links,header clearance,focus return,reduced motion,print and gallery keyboard/close behavior checked.
- Actual Arabic390px/English1280pxscreens inspected with the scene-gallery chapter open for sticky positioning,photographs,readability and clipping.

## Intentional layout change
Profile chapter scroll-margin-top is now100px,combined with existing85pxroot scroll padding. This leaves both fixed header and sticky navigator above the destination. Existing profile layout test updated to the new intended margin,not disabled.
