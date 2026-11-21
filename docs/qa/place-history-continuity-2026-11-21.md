# Follow the story across Egypt

26 existing place articles with documented era tags gain cross-governorate image-led reading suggestions. For each shared era, up to three suitable photographs link to place articles, the full era reading collection and the era-filtered atlas. Selection preserves atlas order, prefers distinct other governorates where available, excludes the current governorate and never invents chronology or a route. It explicitly does not imply the same years, a complete timeline or a visit plan.

No new history, photographs, proximity claims, storage or account writes. Untagged/unknown/North Sinai entries have no section. Only existing catalog era tags and suitable sourced atlas photos are used. All new styling is Tailwind.

## Local checks

- Production build, typecheck and 159 unit tests pass.
- Membership invariants checked across the complete catalog: shared era, different governorate, suitable photos, deterministic picks, uniqueness, bounded count, governorate diversity and absence where unsupported. 26 populated articles.
- 48 browser cases pass, including new continuity, existing same-governorate onward reading and atlas-era regressions. Another 32 focused repeats pass.
- AR/EN at 360, 390, 600, 601, 900 and 1280: exact membership, image alt text, place and collection links, keyboard navigation, touch atlas handoff retaining era, absent sections, no mutation and print hiding.
- 216 AR/EN, 18-theme, six-width display checks pass: single/three-column layout, no horizontal overflow, actions at least 44px high and checked text contrast at least 5.4599:1.
- Arabic mobile and English desktop actual pixels inspected after tightening inherited heading margins: readable names and metadata, coherent photo grid, links and no clipped controls.

Exact-main production metadata, immutable/canonical tests and screenshots are checked after normal PR merge and reported separately.
