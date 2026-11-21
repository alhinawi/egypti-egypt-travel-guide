# Home photo control readiness

## Reproduced issue

A controlled production browser check held client scripts back while reading the static home exhibition. Its next-set button was enabled without an interaction handler. Clicking it left set 1 unchanged even after scripts were released. A slow-script regression fails in both languages on immutable B193. This establishes a real early-click gap, not proof that it caused every earlier intermittent viewer test mismatch.

## Fix

Keep home region selection, thumbnail selection, set controls and fullscreen trigger disabled until their interaction handlers are mounted. The exhibition exposes its initial busy state. Article and atlas links remain normal links throughout. The fullscreen trigger's own readiness is local to the shared gallery and does not change existing article-gallery cover/strip behavior. No new photographs, facts, stylesheets, storage or account writes.

## Local verification

- Production build, typecheck and 157 unit tests pass.
- 68 home/gallery browser cases and 52 saved-board regressions pass.
- 36 focused readiness/fullscreen repeats pass.
- Controlled script hold: all four control types disabled, static links available. After release, controls enable, next set and selected-photo viewer opening work. Both languages pass.
- 216 AR/EN, 18-theme, six-width home-viewer checks pass, minimum opener contrast 11.5086:1, visible controls at least 44px, no page overflow.
- Actual AR390 and EN1280 fullscreen screenshots inspected: image containment, selected filmstrip and controls unchanged.

Immutable and canonical verification is reported after a normal green-CI PR merge.
