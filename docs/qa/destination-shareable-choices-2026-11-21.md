# Recoverable destination choices

Destination category, search and cards/photo view now live in the page link. Reload, browser history and article/back navigation recover the selection. Plain destination URLs still start with all cards. Reset clears category/search while retaining the current view. Choosing cards after reset restores the plain URL.

A visible copy button produces a clean destination link containing only validated category, bounded search text and optional photo view. It drops unrelated parameters and the page hash. Clipboard failure reveals a focused selectable read-only field. UI explains that search terms are in the link, account/saved data is absent, and nothing is sent automatically. No account/storage writes are added.

## Checks

- Build,typecheck171 unit tests pass. New state tests roundtrip every destination/category/view, validate defaults, strip control characters and cap query length at120.
-50 browser cases:16 new share/recovery cases and34 existing finder/photo-sheet cases. AR/EN,six widths,initial query/filter membership,reload/reset,keyboard/touch copy,clean URL,clipboard failure/selection,browser history,article/back,invalid values,print,no saved/account mutations and account-failure independence.
-216 theme/language/width combinations:minimum sampled new text contrast6.0718,buttons44px+,no overflow.
-Actual AR390 andEN1280 pixels inspected. Mobile text now occupies the full panel width above its copy button.

The previous photo-sheet reload default intentionally changes only for URLs carrying a photo-view parameter. Plain links retain the default. Existing test keyboard focus now waits for hydration-enabled controls rather than focusing a disabled button. Existing source photographs and destination memberships are unchanged.
