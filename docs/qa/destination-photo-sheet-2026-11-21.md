# Destination photo sheet

Destination guides offer an optional photo sheet, with two columns through 900px and three above. Cards remain the default. The sheet preserves every matching entry, order, category label, place name and original article link. It uses suitable published photographs; entries without a suitable opening photo keep a text/icon fallback rather than disappearing. Cards retain descriptions and save controls.

Category/search filters, reset and empty recovery work in either view. View choice lasts only for the mounted guide, with no URL/account/storage writes. A failed account-save read does not prevent browsing. Existing print treatment hides the destination finder.

## Verification

- Build/typecheck and167 unit tests pass.
-128 browser cases:18 new sheet cases,16 existing destination finder cases,32 destination card cases,48 destination hero cases and14 trip card cases. Full destination/category memberships, photo suitability, fallback, alt, links, search/reset, keyboard focus, direct touch/article navigation, switching back to save, reload default, print and account-failure independence.
-216 combinations of18 themes,two languages,six widths. Minimum sampled new text contrast5.45996,new controls44px+,no horizontal overflow.
-Actual AR390 andEN1280 pixels inspected for images, names, category labels and view controls.

No new facts, routes, photos, dependencies or domains. Tailwind presentation only. Anonymous browsing retained untouched saves and issued no non-GET account requests; explicit save test used an isolated local fixture.
