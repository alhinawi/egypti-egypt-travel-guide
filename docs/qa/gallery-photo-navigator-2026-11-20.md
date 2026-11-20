# In-view gallery photo navigator

## Visible change
The full-screen place photo gallery now shows a filmstrip of its available sourced photographs. Visitors can jump directly to any photo, see the current photo with a mint border and number, and continue using the existing previous/next controls or swipe.

- Uses existing locally hosted photo metadata and 420px previews. No new images, content claims, accounts, services or domains.
- Navigator mounts only while a multi-photo dialog is open. Closed lightboxes still contain no images. Full-size photos remain deferred.
- Each preview is a real 84 x 58px button with a localized descriptive name and current-photo state.
- Home/End and direction-aware arrow keys select and focus preview buttons. Navigation from the photo stage also keeps the selected preview visible without scrolling the page.
- Escape/focus return, retry, touch swipe, reduced motion and single-photo behavior are preserved.
- Tailwind utilities only. Centered short rails and horizontally scrollable long rails; full-size stage reserves space for the navigator and existing controls.

## Verification
- Typecheck, production build and all 124 unit tests pass.
- 38 browser regressions pass: all gallery suites, including 14 new navigator cases.
- 648 additional theme/viewport/navigation cases pass locally: AR/EN, all 18 themes, 360x480, 390x667, 600x844, 601x844, 1280x900 and 844x390. For first/last/intermediate selections, verify current-photo index, mint selected border, navy surface, active preview in view, controls within viewport and no page overflow.
- Long rail uses Khan el-Khalili's eight existing photos. Touch/error tests abort full-size photos while keeping previews usable. Single-photo checks use Eel Garden.
- Existing primary-image assertions now target the photo stage explicitly. Closed-dialog no-image checks remain intact.
- Arabic mobile and English desktop/mobile actual screenshots inspected. Desktop photo stage height reduced by 20px to retain controls in view; no photo cropping added.
- APIs mocked throughout visual/browser tests; no real account actions.

Deployment checks repeat the matrix against immutable production and canonical hosts, confirm clean exact-main metadata and canonical mapping, and inspect canonical screenshots before closeout.
