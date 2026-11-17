# Gallery reading-position regression, 2026-11-17

Reproduced before the change in Arabic and English at 390x900: scrolling the open gallery moved the underlying document from 0 to 650px. Closing the viewer therefore lost the reader's place.

While the photo dialog is open, lock root and body scrolling. Restore their previous inline overflow values on close or component cleanup. The lock depends only on open state, so changing photos does not reset it. Existing native dialog focus return and keyboard controls stay unchanged.

Validation: typecheck, production build, 70 unit/API tests; seven browser tests covering both languages, wheel movement behind viewer, End/Home navigation, Escape, close button, focus return, scroll restoration after close, prior inline styles, photo credits and existing galleries. Captured and inspected mobile screenshots in both languages. No content, photos, licences or visible captions changed.
