# Search photo board text resize, 2026-11-25

A dedicated text-only200% check found English long titles and the board summary clipping at320px, plus a smaller long-title clip at640px. The existing outer overflow-only checks did not catch every clipped descendant. Board-local overflow-wrap:anywhere and a shrinkable summary label fix this without changing result membership, photos, shared saves/viewer, URL or storage behavior. Tailwind only, no shared shell change.

Build/typecheck/296 unit tests passed.10 new AR/EN tests expand every matching Cairo photo card at320/390/640/768/1280, double each computed text size, assert no descendant clipping or overlapping actions, preserve URL and verify keyboard viewer-close/save focus.20 retained board and68 retained search-photo/save/gallery checks passed.360 theme/state/width/language checks passed, minimum contrast9.07,48px targets and3px focus. Actual320px doubled-text cards inspected in both languages.

CSS zoom is not browser zoom: it does not adjust media breakpoints. Earlier CSS-zoom2checks at an already320px viewport also overflowed the pre-existing header/navigation. This release fixes verified board-local text-resize clipping, not the whole site or every zoom setup. Prior intermittent navigation/control/focus and physical rapid-input shared-viewer caveats remain unknown, not fixed.

Release gates: actual green PR CI, normal merge, clean exact-main build/tests/production, canonical+immutable replay/parity and actual canonical pixels.
