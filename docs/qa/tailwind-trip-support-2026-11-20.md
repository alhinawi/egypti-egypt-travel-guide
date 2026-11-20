# Trip-detail support chrome, November 20, 2026

## Scope
Move the remaining trip-detail shell overrides, editorial notice/icon and print action from the editorial layer to Tailwind. Remove six legacy selector branches. Shared notice and print behavior remain unchanged.

## Verification
- TypeScript, production build and 123 unit tests pass.
- 48 new browser tests cover three trip routes, Arabic/English, eight widths and all 18 themes. The baseline stores original computed styles for the outer shell and full notice/print-control subtrees, including pseudo-elements and text-decoration properties.
- All 1,080 before/after cases match exactly: 864 screen and 216 print cases. Widths 360/361/390/600/601/900/901/1280, print at 390 and 1280.
- 82 existing browser regressions pass: full hero layout, save keyboard/state behavior, detail shells, all-plan print stops/print-open-state restoration and save labels.
- Actual Arabic/English screen and print pixels inspected. Notice copy/icon, print action border/background/no underline and shell spacing remain unchanged. Print action stays hidden in print.
- Visual inspection caught an intermediate print-action underline caused by the shared text-button rule. It was fixed before commit and the original baseline was freshly captured with text-decoration properties included. No weakened expectations or post-change baseline.
- A combined check exceeded its command timeout and left a stale local test server; the stale server was stopped, and all 48 tests passed on a clean fresh-server run.
- Frontend checks block /api/**. No extra D1/account requests.

## Preserved details
- Screen shell max-width 1160px, mobile inline padding 18px and top padding 20px. Existing print max-width/padding remain unchanged.
- Notice uses themed paper/muted/line, 12px screen radius, 20px desktop padding and 16px mobile padding, 13px/11px text and 13px/10px gap.
- Print control retains themed border/paper/accent, 8px radius, 8px/16px padding and no underline. Existing window.print behavior and details-open restoration are unchanged.
