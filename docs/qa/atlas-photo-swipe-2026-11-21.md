# Atlas photo swipe and drag

The atlas fullscreen viewer accepts direct horizontal touch swipes and mouse drags, in the direction appropriate to AR/EN. Navigation follows its current filtered collection and wraps at the ends. Drag feedback is bounded; the selected filmstrip, count, title and article link follow the photograph. The visible hint explains swiping without replacing arrows or keyboard controls. Single-photo collections omit the hint.

Vertical/short gestures, cancellation, second pointers and image-error controls do not navigate. Image dragging by the browser is disabled, vertical touch and pinch zoom are retained, and reduced-motion users do not get the snap transition. No new photos, content, storage or account writes. New styling uses Tailwind; inline transform is only the dynamic drag offset.

## Checks

- Production build, typecheck and 161 unit tests pass, including horizontal-intent/distance/velocity and invalid-input rules.
- 86 browser cases pass: 16 new swipe cases and 70 atlas/era/region/router/filmstrip regressions. Another 32 focused repeats pass.
- AR/EN, widths 360, 390, 600, 601, 900 and 1280: mouse drag forward/back, drag feedback, vertical intent, cancellation, wrapping, correct filtered photo/title/article/strip, close and opener focus.
- Real Chrome touch input passes in both languages, with reduced motion; single-result state omits the gesture hint. Failed-image retry remains functional and inert to dragging; non-primary pointer cancels the gesture.
- 216 AR/EN, 18-theme, six-width viewer checks pass: viewport containment, no horizontal overflow, 44px controls, retained pan-y/pinch-zoom and readable fixed viewer hint colors. Contrast is calculated from checked hint/background RGB values.
- Actual Arabic mobile and English desktop pixels inspected after a drag: correct second filtered photo, selected strip, visible hint, contained image and readable controls.

Exact-main immutable/canonical verification follows normal green-CI PR merge and is reported separately.
