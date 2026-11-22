# History collection photo covers, 22 November 2026

## Visible outcome
Encyclopedia history cards replace a single representative photo with a lead/two-small composition from the exact existing three selected stories. Collection title/count precede the photographs. Phone layout uses a full-width lead and two small scenes below, desktop a tall lead and two stacked scenes. The whole cover still opens the era collection. All story links, order, counts, classification caveats, browse/filter actions and era-detail rendering are preserved.

Only existing source images and documented era picks are used. No new claims, ranking, timeline, travel route, section, viewer, state, service or spending. Tailwind/SVG only, no global CSS or dataset changes.

## Checks
- Build, both typechecks and 209 unit tests.
- 20 new browser cases: AR/EN at 360,390,600,601,768,800,801,1280; all collections' exact photo membership/order/source/alt/srcset, image decoding, layout dimensions, heading above cover, accessible collection name/destination, unchanged story membership. Keyboard navigation/return/focus, saved-state and no API writes, print hidden, no JavaScript.
- All 14 existing era photo story cases: all collection opens, detail photo order, article links, counts, browse jump positioning, touch, print and no overflow. One original assertion now checks nonempty alt text on all cover images rather than assuming one image.
- 216 theme/language/width combinations: no document overflow, at least 44px links and minimum measured text contrast 6.0718:1.
- Actual AR390 and EN1280 screenshots inspected for image crop, layout, spacing, typography and source-story links.

## Boundaries and release checks
Shared viewers are unchanged. The separately documented mobile synthetic rapid-input caveat remains physical-device-unverified.

After normal PR CI and merge, rebuild exact main, rerun all checks on main and both live origins, confirm clean exact-main Cloudflare production deployment, compare canonical/immutable pages and selected source-photo assets, inspect canonical pixels. Shipment report records run IDs and release URLs.
