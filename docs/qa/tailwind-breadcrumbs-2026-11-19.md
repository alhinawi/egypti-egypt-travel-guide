# Breadcrumb Tailwind migration, 2026-11-19

## Scope

Shared breadcrumb utilities now cover the page breadcrumb and virtual-visits breadcrumb. The catalog retains its distinct minimal inline crumb, with only its existing screen color moved. Removed 10 legacy selector branches. Text, links, semantics, separators and layout are unchanged. No new CSS.

## Verification

- 106 unit tests, typecheck and static/API build pass.
- 68 browser tests pass, including 64 new breadcrumb cases and four existing trip-print cases.
- Exact baseline equality in 1,152 screen and 576 print combinations across all 18 themes, AR/EN, 390/600/601/1280px and eight routes: destinations, Cairo destination, Giza place, trip list, Cairo programme, saved, virtual visits and catalog.
- Compared breadcrumb and all descendant text, links, accessible label, computed dimensions, spacing, wrapping, colors and typography. Links retain language-specific home/catalog targets.
- Trip-specific bottom margins remain 16px mobile/20px desktop. Other breadcrumbs retain 25px mobile/32px desktop. Full breadcrumbs remain hidden in print; the catalog crumb retains its old print behavior.
- Actual mobile programme, virtual-visits, catalog and desktop place screenshots inspected. No overflow or altered wrapping. Existing catalog separator spacing is retained, not redesigned.
- Frontend checks block `/api/**`. No live D1/account QA, content/source updates, purchases, new domains or paid services.
