# Three separate Cairo museum identities

2026-11-22. Batch B242.

## Visible change

Essentials now has an equal-status photographic comparison of the Egyptian Museum in Tahrir, Grand Egyptian Museum and National Museum of Egyptian Civilization. Each has its existing name and photograph, a source-grounded area and broad collection description, its own existing place guide and official references. The three exact place guides identify the current museum inside the existing ticket panel and link directly to the comparison. No unrelated place gets a museum identity notice.

This helps visitors check which museum they mean. It is not a ranking, route, claim that the museums share admission, same-day feasibility assessment, or live admission/availability comparison. Existing ticket sources, eligibility controls and caveats remain unchanged. All old Essentials content, including the original ticket warning, remains unchanged.

## Current source checks

Fetched and read 2026-11-22. Only the narrow fields below are used. Prices, hours, access, temporary displays and opening phases are not asserted.

| Published fact | Original reference |
| --- | --- |
| Tahrir museum name, historic museum, central Cairo/Tahrir area, ancient Egyptian antiquities | https://www.cairo.gov.eg/en/culture/cultural-destinations/cairo-museums/the-egyptian-museum/ |
| GEM name and archaeological objects in the Main Galleries, without an individual-display guarantee | https://gem.eg/en/collection/main-galleries/ |
| GEM at El Remayah Square along Cairo-Alexandria Desert Road | https://gem.eg/en/visit/plan-your-visit/ |
| NMEC from prehistory through modern/contemporary life and popular heritage; address Al-Fustat Road, Ain El-Sira, Cairo | https://nmec.gov.eg/main-gallery/ |

The ministry's Egyptian Museum overview and subportal were also checked as corroboration:
- https://egymonuments.gov.eg/en/museums/egyptian-museum/
- https://egymonuments.gov.eg/en/subportals-group/the-egyptian-museum/

## Photographs

Exactly the existing metadata and 420/780 WebP derivatives are reused, with their existing central credits and guide links. No new image, download, crop, replacement, metadata or attribution edit. Original Commons pages were fetched and subject/author information checked:

- Tahrir facade, Diego Delso, 2011-09-25. Existing CC BY-SA 3.0 record: https://commons.wikimedia.org/wiki/File:Facade_of_the_Egyptian_Museum%2C_Tahrir_Square%2C_Cairo%2C_Egypt1.jpg
- GEM interior, Amr F.Nagy, EXIF 2025-12-20. Existing CC BY-SA 4.0 record: https://commons.wikimedia.org/wiki/File:Grand_Egyptian_Museum_2025.jpg
- NMEC main entrance, Roland Unger, 2017-03-05. Existing CC BY-SA 4.0 record: https://commons.wikimedia.org/wiki/File:NMEC-MainEntrance.jpg

These are photographs of the respective museums, not a claim about their present appearance or a named object being available today.

## Scope and behavior

- New facts and view functions are isolated in `cairo-museum-identities.ts` and `.tsx`.
- Existing `info-pages.tsx` changes only by importing/inserting the comparison at the current before-buying-ticket section. Existing `pages.tsx` changes only by importing/inserting the conditional identity notice before the ticket heading.
- No existing place/source/map/tour/photo JSON, source URLs, ticket logic, shared player/viewer, global CSS, storage schema or account code changes. All new UI uses Tailwind.
- Native internal links and the comparison anchor work without JavaScript. The comparison supports direct deep links, browser Back and language-specific paths.
- Links do not save items or send account writes. Existing saved place/trip IDs remain the same. The test seeds the actual `egypt:saved` key once only, and checks the expected value before and after navigation rather than reseeding every page.

## Local verification before PR

- Production build, both TypeScript projects and all 245 unit tests pass, including six new identity/metadata/source/path/scope cases.
- 24 browser cases pass: both languages, six widths, three decoded/matched images, every guide/source target, exact area/scope text, focus and target geometry, all three ticket-notice identities and existing source preservation, comparison-anchor/Back navigation, unrelated-place isolation, no-JavaScript navigation and unchanged saved state/no account writes.
- 59 retained browser cases pass: B241 virtual-visit browser 30, fullscreen/source/inventory nine, tour layout eight, source/inline layout eight, unload four.
- 864 theme/language/width/context combinations pass: 18 themes, two languages, six widths and four contexts (comparison and the three notices). Minimum checked text contrast 5.459955953071658:1; checked targets at least 46px; link focus outline at least 3px. No horizontal overflow. Three decoded photographs use cover fitting; no new player frame.
- Six actual local pixel views inspected: comparison EN desktop and AR phone, AR phone third museum card, Tahrir AR phone notice, GEM EN desktop notice and NMEC AR phone notice. Natural photographs, readable names and area/scope distinctions, aligned desktop actions and phone wrapping verified.

## Existing caveats and release checklist

The previously documented synthetic rapid-input shared-viewer issue and stale governorate fixtures remain unchanged and are not counted above. This batch does not revalidate external tour playback or current museum admission.

After a normal green PR merge, repeat exact-main build/typecheck/unit/browser/theme checks, then new/retained/matrix checks on canonical and immutable production. Verify clean exact-main Cloudflare deployment and green main CI, compare eight route HTML files and observed linked CSS/JS plus six comparison photo derivatives, and inspect canonical pixels. The release checklist is not a claim of production verification before it occurs.
