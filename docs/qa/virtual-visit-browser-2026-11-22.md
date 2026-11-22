# Photo-led virtual-visit browser

Date: 2026-11-22. Batch B241.

## Visible change

The virtual-visit directory's long all-place list now has four photographic media choices, a governorate selector, normalized text search, reset and shareable URL state. The four photo filters replace the former three-number statistics block. Counts on the media choices describe the full published catalog before other filters; the result count describes the current intersection. Existing archive labels and northern-area advisories stay attached to their exact source cards.

The current corpus is 154 published place links: 113 Video, 31 360 panorama, nine 3D model and one Archive. All 27 governorates are represented. These are catalog counts, not new checks of provider availability. Filtering preserves the original place-catalog order, not a new ranking.

## Scope and source grounding

- Existing `src/lib/tours.json`, place/governorate records and photo records are the only source data. No media URL, title, scope, provider, check date, advisory, source attribution, photo metadata or file changes.
- The shared sourced-card/player function and article entry export remain byte-identical. Local pre/post SHA-256 for those combined bodies: `ac2518af97435c15a24d054b78b90b0596c05c13ee214bb9ea9b25435d0acf90`.
- The photo-choice examples are the existing licensed Al-Muizz Street, Giza pyramids, Abu Simbel and Egyptian Museum photographs, each attached to an actual visit of the displayed media kind. These are guide photographs of places, not copied frames from provider players.
- No new tour, availability assertion, recording, photograph, route, account action or automatic player loading. No global CSS edit. All new presentation uses Tailwind; navy/mint and existing card styles are preserved.

## Behavior

Search covers place/tour names, tour scope, provider and governorate names. Arabic diacritics, tatweel and common alef/ya variants are normalized. All words must match. Search intersects with governorate and media type. Input is capped at 120 characters. Unknown media/governorate values are discarded rather than treated as valid choices.

The URL contains only `q`, `governorate` and `kind`. It is restored on reload, language change and browser history navigation. Filter edits replace the current entry instead of adding an entry for each keystroke. The copy action sends nothing automatically. Clipboard failure presents a focused, selected, read-only field. Account/saved-item parameters are not included in generated links. Copy feedback resets when choices change. Empty-result reset returns focus to search.

Without JavaScript, all existing source cards remain available, controls are disabled, no iframe loads and a short notice explains the full-library fallback. A chosen inline player is removed when its card is filtered out. The existing player component is not changed.

## Local checks completed before PR

- Production build, both TypeScript projects and all 239 unit tests pass, including six new catalog/count/cover/filter/search/URL tests.
- 30 new browser cases pass: AR/EN, six widths, four photographic choices, all media source inventories/order, combined filters, empty reset, keyboard focus, clipboard success and phone fallback, reload/language/history, Arabic search, northern advisory labels, simulated touch, no-JavaScript fallback, saved identities/no API writes and filtered-player unload.
- 29 retained tour cases pass: nine fullscreen/source/inventory cases, eight card-layout cases, eight source/inline-frame layout cases and four unload cases. Provider rendering is stubbed or blocked for UI checks; these results do not revalidate all third-party playback or present availability.
- 648 combinations across 18 themes, two languages, six widths and three finder states pass. Minimum measured text contrast 5.459955953071658:1, including placeholder text. Checked targets are at least 48px and media-choice focus outlines at least 3px. Four decoded photographs, cover fitting, no automatic frames and no horizontal overflow are checked throughout.
- Six actual pixel views inspected after count wording was adjusted: AR phone and EN desktop default, AR phone and EN desktop filtered, EN phone empty state and AR phone copy fallback. Labels, selected outlines, images and recovery fields are readable. The long URL remains inside its read-only field.

## Test maintenance

The earlier Tailwind migration fixture looked for the old three-column numerical statistics inside `virtual-tours.tsx`. It now follows the new four-column photographic component and its two-column small-screen rule. The no-global-reset and no-returned-global-statistics-CSS assertions remain intact.

The full player inventory fixture previously aborted all HTTPS requests, which also blocks the application when the same test runs on an HTTPS deployment. Its network isolation now allows only the configured application's own origin and still blocks other HTTPS origins. No player, URL, accessibility or inventory assertion was relaxed.

## Existing caveats

The earlier synthetic rapid-input shared-photo-viewer issue and stale governorate fixtures remain unchanged and are not counted here. No guessed shared-viewer fix is included. Provider playback and physical-device behavior are not established by simulated browser checks.

## Release checklist

After a normal green PR merge, repeat exact-main build/typecheck/unit/new/retained/theme checks. Verify clean Cloudflare production names that exact main. Run the new and retained suites plus the theme matrix on canonical and immutable origins, inspect canonical pixels and compare observed linked assets and the eight photo-choice derivatives against locally built main. Isolate any independent Next build-ID difference. This paragraph is a checklist, not a claim that release verification is already complete.
