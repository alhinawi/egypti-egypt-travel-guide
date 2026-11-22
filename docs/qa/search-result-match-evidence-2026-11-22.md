# Search result match evidence

Date: 2026-11-22. Batch B237.

## Visible change

Whole-guide result cards show up to three compact excerpts from their existing indexed fields. Labels distinguish titles, introductions, governorates, categories, regions, administrative capitals, published day titles, listed places and numeric plan duration. The reader's language is preferred; a match in the other language is explicitly labeled and its original text is isolated with `bdi`, `dir=auto` and the source `lang`.

Literal matches are highlighted without HTML or regular-expression interpretation. Existing Arabic case/mark/hamza/yaa/tatweel normalization is shared with search; a character map restores original spelling. Long excerpts are bounded to about 180 UTF-16 units with explicit omission marks and intact surrogate pairs. Evidence is illustrative, not a promise that three excerpts expose every query term. No translation is substituted for actual matching text.

The existing search module, exact index strings, all-word membership, catalog order, photographs, collection viewer, links, URL state and private saved data are unchanged. There are no new factual claims, remote requests, services, purchases or automatic saves. New styling is Tailwind only.

Pixel inspection also found that the previous whole-card outline was clipped by the result card's overflow boundary. The touched result links now have an inset, two-color keyboard focus frame, fully inside that boundary, without adding another focus stop or intercepting pointer input.

## Local checks completed before PR

- Build and typecheck.
- All 222 unit tests, including six new tests. All published source fields concatenate to exactly the old search string, and every published title in both languages still yields source-grounded excerpts without mutating entries.
- All 28 new browser cases: AR/EN, exact source/language/mark segments, hidden plan stops, foreign-language capitals, normalized Arabic, literal injection-shaped text, empty results, six widths, keyboard focus frame, print, reload/kinds/query changes, touch navigation, viewer focus return, private saved-state preservation and no API writes.
- All 76 existing whole-guide search, search-photo and photographic-starter browser cases.
- All 864 combinations of 18 themes, two languages, six widths and four queries: no page/evidence overflow, visible controls at least 44px, and minimum text contrast 4.7423:1. Highlight text uses ink/paper, rather than fixed colors.
- Actual pixels inspected: Arabic phone with an English multiword query; English desktop with a hidden plan stop; Arabic phone with an English capital; English multi-field desktop; normalized-Arabic phone; keyboard focus desktop. Focus frame was fixed and re-inspected before proceeding.

## Release checks

Repeat build/typecheck/unit/new-browser/regression/theme checks on the normal merged main commit. Verify the clean Cloudflare production deployment names exactly that commit, then repeat browser/theme checks on canonical and immutable production origins. Inspect canonical pixels and compare both search HTML documents and their observed linked styles/chunks with the locally built main output. A different independent Next build ID is allowed only where explicitly identified. Record live results in the shipment report.

## Existing unrelated caveats

The older governorate `article-layout` branch still expects removed `.article-jump-links`; it was already reproduced on unchanged pre-B235 production and is not included or counted green here. The separate synthetic rapid-input shared-viewer caveat remains documented in `search-place-photo-viewer-2026-11-21.md`, physical-device behavior unverified. This change does not guess at or modify the shared viewer.
