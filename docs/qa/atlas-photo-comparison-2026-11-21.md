# Photo atlas comparison,21Nov2026

## Visible outcome
Visitors can pick2or3eligible photographed places across atlas filters,then compare source photographs,governorates,categories and original published introductions. Original article links provide details and sources. This is not price,access or route comparison. The shortlist remains through filter changes and filter reset,but clears on page reload. No account writes,storage,URL additions,sending,new catalog claims or new photo sources.

The shortlist shows photo thumbnails,individual removal and a separate clear action. The3place cap is enforced;selected cards remain removable. Comparison uses a native modal with accessible title,initial close focus,keyboard containment,Escape,scroll lock and focus return. Desktop2/3columns stack on smaller screens. AR/EN,Tailwind,touch,44pxcontrols,print exclusion.

## Verification
- Build,typecheck147unit tests pass.
-48browser cases pass:16new comparison,16atlas,16regional. Covers exact content/IDs/links,cap,removal,clear,selected feedback,cross-filter/empty-result retention,reload reset,focus,Escape,touch,print,AR/EN6widths.
-432AR/EN18theme6width2/3selection matrix cases pass,min contrast6.0718:1,no overflow,44pxcontrols,correct responsive column counts.
- Actual AR390/EN1280shortlist and comparison screenshots inspected. All photographs decoded,readable,no clipping. Mobile dialog scrolls through stacked comparisons.
- Regional keyboard regression now waits for enabled controls before focusing,avoiding a pre-hydration focus race. An interrupted local test left an unresponsive test server;stopped it and reran successfully.
