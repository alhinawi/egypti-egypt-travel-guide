# Virtual-tour cards: Tailwind migration

Migrated the virtual-tour grid, card shell, title, copy line height, photo placement, source navigation row and fullscreen trigger appearance from handwritten rules to Tailwind utilities. Kept selector hooks for tests, content and behavior. Removed their superseded component CSS. Shared global styles and the home-page promo remain for later incremental migration.

Preserved the navy/mint palette, Arabic typography, source details, real photographic imagery and responsive layout. All future image additions and replacements must keep a realistic photographic style, without illustration/cartoon treatment or paid generation. No images added, generated or replaced in this migration.

## Verification

- Build, typecheck and 85 unit/API tests passed.
- 13 Playwright tests passed: 5 fullscreen-action tests plus 8 layout tests across Arabic/English at 390, 600, 601 and 1280px. Tests cover the exact 600px breakpoint, 101 cards, padding, title size, Arabic copy line height, photo height, trigger size, column count and horizontal overflow.
- Eight before/after screenshots, covering list and Abu Simbel detail in AR/EN at 390 and 1280px, have identical sizes and zero changed pixels. Screenshots use a fixed existing photo source size to avoid browser srcset candidate timing differences.
- Actual updated mobile pixels inspected: readable Arabic/English text, photographic header, mint actions, no layout changes. No third-party player loads until chosen; native/fullscreen fallback and external-only actions retained.
- Ben Ezra's historical Matterport URL was checked separately and currently reports an unavailable model. Not added to the catalog: https://my.matterport.com/show/?m=9sXzU9yY1gw . Tour coverage stays 101/154 including one archive.
