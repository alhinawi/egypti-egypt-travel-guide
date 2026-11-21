# Home exhibition fullscreen viewing

The home photo exhibition now opens its current bounded set in the existing photo viewer, starting on the selected photograph. Changing region or set determines the viewer collection. Closing preserves the home selection, set and region. The existing article links stay unchanged.

No new photographs, historical claims, storage, automatic playback or account writes. Existing gallery users retain their original cover and strip. Styling for the new action is Tailwind.

## Local checks

- Production build, typecheck and 155 unit tests pass.
- 66 browser cases pass: 16 new home-viewer cases plus home set and existing place-gallery regressions.
- AR/EN at 360, 390, 600, 601, 900 and 1280 pixels: selected photo and set, Home/End, RTL-aware arrows, filmstrip, Escape, opener focus, preserved home selection, region reset, 44px opener and no horizontal overflow.
- Physical-touch opening, selection, retry after image failure and closing pass in both languages.
- Last regional set stays bounded, including previous/wrap navigation without leaking photographs from another set.
- Existing gallery swipe, hidden full-size loading, layout, focus/accessibility, scroll restoration and retry tests remain green.
- 216 AR/EN, 18-theme, 6-width action/viewer display checks pass. Minimum opener text contrast 11.5086:1. Viewer fills its viewport, visible controls are at least 44px square.
- Actual local Arabic mobile and English desktop fullscreen pixels inspected, plus the mobile action layout. Photograph containment, selected filmstrip border, controls and text are readable and unclipped. Mobile rail is deliberately horizontally scrollable.

Deployment checks are reported after normal PR merge against the exact main commit, immutable deployment and canonical host.
