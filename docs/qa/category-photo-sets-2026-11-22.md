# B253: complete category photograph browsing

- Category introductions retain their original first three photographic examples and now expose the remaining suitable own-article covers in bounded sets of three. Remaining articles follow stable catalogue order, not distance or quality ranking.
- Scope is the selected category and governorate only. Exact shown/total coverage counts suitable photographs, separately from the existing published-article count. Changing governorate or restoring URL state resets the set.
- Eligibility matches the existing picks: known cover, not contextual or detail-only, not a North Sinai reference record. No new source data or media.
- Previous/next controls retain keyboard focus, announce the range, do not wrap, and remain focusable but inert at boundaries using aria-disabled. Before hydration they are disabled. All original first-set article links work without JavaScript. The governorate selector also waits for its handler.
- Every failed image becomes a readable article fallback, not another article's cover. Empty photographic scopes retain the full article-result exit. The controlled grid wrapper exists even when empty.
- Paging does not change the URL, result-list filters, saves or account state. Existing browse-result deep links and cold landing focus remain unchanged.
- Tailwind only. No API, account, source data, media, shared viewer or global CSS changes.

## Verification
- Build, TypeScript and 288 unit checks pass, including exhaustive every-scope coverage, no duplicates, original-pick preservation, range/index bounds and invalid-index handling.
- Six new AR/EN browser cases verify every category set, exact IDs/images/article links, coverage and boundaries, keyboard retained focus, governorate reset, image failure, no writes, no-JavaScript and delayed handlers.
- All 28 retained category cases pass, split into 12 grid and 16 scope/cold-link/touch/print cases. No retained assertions changed.
- 576 combinations across eight widths, two languages, first/second sets and 18 themes. Minimum contrast 6.0718, minimum interactive target height 44px, visible focus at least 3px, no document overflow.
- Inspected first/second set screenshots at EN1280 and AR390. Actual category imagery and governorate names remain readable. No captions, media substitutions or invented visit claims.
- An initial new-test timeout was caused by attempting Playwright click on an aria-disabled boundary. The boundary assertion now activates the focused native button with Enter and verifies the set stays unchanged, matching the intended keyboard behavior. No product boundary bypass was added.

Actual PR/main CI, clean exact-main deployment, canonical/immutable replay, parity, canonical pixels and credential/preview cleanup are reported separately at release closeout.
