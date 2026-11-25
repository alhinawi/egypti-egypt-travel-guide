# Exported document language and embedded heading hierarchy

## Scope

B368 repairs the document language and direction before hydration and keeps one page-level heading. Route-aware document layouts preserve the default/admin Arabic shell, metadata, viewport, saved theme initialization, and bilingual app shell. Existing default routes are moved into a route group without URL changes. The global 404 explicitly uses the Arabic document shell with Next's global-not-found support.

The governorate profile's embedded encyclopedia heading is H2. Standalone encyclopedia headings remain H1. Tailwind utilities retain the same screen and print typography, including the existing English print weight.

## Checks

- Build and both TypeScript configurations pass. 298 unit tests pass.
- The export verifier checks all 542 AR/EN HTML documents for matching root language/direction and exactly one H1; all 54 governorate profiles have an embedded H2. It also checks three default documents and the legacy credits redirect payload. This verifier is part of CI after the build.
- Focused Playwright checks cover scripts disabled/enabled for representative AR/EN routes, default/admin/404, legacy credits navigation, heading screen/print typography, language switching with query and section context.
- Retained checks cover encyclopedia shell/filter layout, governorate layout/content, themes, admin access states, articles, and language-panel geometry.
- Four Cairo embedded-heading before/after crops at 390/1280 in AR/EN are pixel-identical. Actual viewport screenshots were inspected for readable Arabic words and unchanged hierarchy/spacing.
- Sixteen computed-style/geometry comparisons against pre-release production match for standalone and embedded headings in AR/EN, 390/1280, screen/print. This caught and fixed an English print font-weight difference before release.

## Test maintenance and limits

The moved document layout required updating the typography unit test's source path. An old language-panel fixture used an unknown trip-finder query parameter that current production drops. One case reproduced that mismatch on pre-release canonical production. The fixture now uses the supported length parameter, preserving all original style expectations while testing a real retained query. The corrected 18-case suite passes.

This is a targeted semantic repair, not an accessibility conformance claim. Earlier unrelated intermittent live-photo probes, physical rapid-input coverage, and CSS zoom limitations are not resolved or reclassified here. The legacy credits redirect remains JavaScript-driven, as before; its destination is checked. No new domain, paid service, purchase, content removal, photo change or attribution trailer is introduced.
