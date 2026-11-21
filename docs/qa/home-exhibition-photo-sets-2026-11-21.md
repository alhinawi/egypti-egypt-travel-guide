# Browsable home photo exhibition, 21 November 2026

The home exhibition now opens every eligible atlas photograph in five-photo sets rather than stopping at the first five. Previous/more controls preserve keyboard focus; exact range and set number are announced. Each set keeps the large feature photograph, selectable thumbnails and original place article link. Selecting a region resets to its first set. End controls are inert and visibly disabled without removing the focused control. No auto-scroll, autoplay, storage or account writes. Existing atlas order, eligible photos, travel caveats and source credits retained. Regional collections are reading choices, not a route or availability claim.

All new styling uses Tailwind. AR/EN, six widths, keyboard/touch, 44px controls and print exclusion.

## Verification
Build, typecheck and 151 unit tests pass. Unit coverage proves every photograph appears exactly once across all sets, including partial final sets, and rejects bad indices. Browser coverage includes all regional sets, exact ranges/membership, previous/more, boundaries, selected feature, keyboard focus, region reset, touch/reload and existing home exhibition/router regressions. 40 browser cases pass. 216 AR/EN, 18-theme, six-width checks pass with no horizontal overflow, correct responsive layout, 44px pager controls and minimum measured text contrast 5.4599:1. Local AR390 feature/pager and EN1280 complete-section pixels inspected. Production checks pending.
