# Full-screen saved-place photographs

Saved photo-board cards keep their article links and add a separate enlarge button. It opens the existing full-screen atlas photo experience over only the eligible saved places matching current filters. Names, governorates, article links, thumbnail navigation, swipe/drag, keyboard Home/End/arrows, 2x detail pan and fit are retained. Close restores focus to the exact opener. A one-photo selection has disabled previous/next controls and no thumbnail rail. Membership changes close stale selections. Switching back to cards unmounts the viewer.

A visible scope note states that these are matching saved photos and viewing does not change saves. No saved ids enter the URL, no automatic save/account writes and no external disclosure. The atlas and saved board use the same extracted viewer rather than forked interaction code. Existing source-photo eligibility is preserved. No new facts/photos/domains/dependencies/purchases. Tailwind on new/touched presentation.

## Verification
- Build/typecheck/178 unit tests pass.
- 52 focused browser cases: 18 new saved-viewer cases, 18 saved-board and 16 atlas-zoom regressions.
- 68 extra core-atlas, thumbnail-strip, swipe, saved-plan coverage and language regressions pass.
- New checks cover AR/EN six widths, exact filtered membership, initial photo, thumbnails, Home/End, fit/zoom/pan keyboard isolation, close/focus/scroll unlock, one-photo limits, retry after actual photo failure, article navigation/return, signed-in no-write behavior, URL privacy and native touch swipe.
- The initial failure-injection fixture used a legacy photo whose URL has no 1400 suffix, so the intended request was not blocked. Changed that test fixture to the source-photo Saqqara asset; failure, disabled zoom, retry and recovery then pass. No speculative error-handler change retained.
- 216 theme/language/width cases for saved-board links/buttons, no overflow, at least 44px controls, minimum sampled text contrast 5.459955.
- Inspected AR390x844 and EN1280x1000 full-screen pixels: source photo fits, scope/count/title are readable, zoom/article/close/navigation and thumbnails fit without clipping. The fixed dark viewer appearance is unchanged from the atlas except the saved-scope sentence.

Final exact-main deployment and immutable/canonical checks are recorded in the shipment report.
