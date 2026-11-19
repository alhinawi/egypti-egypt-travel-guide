# Destination-card Tailwind migration, 2026-11-20

## Scope

Shared Tailwind shell, photo container/image sizing, destination copy and arrow presentation for every DestinationCard consumer, including the homepage magazine and destination directory. Removed 32 legacy selector branches from globals/editorial styles. Existing shared photo tint and magazine-image hover rules remain. No new CSS or content/media changes.

## Verification

- 109 unit tests, typecheck and static/API build pass.
- 60 browser tests pass: 32 new destination-card cases, 24 section-heading regressions and four programme print cases.
- Exact pre/post baseline equality for all destination-card subtrees in 576 screen and 144 print combinations across all 18 themes, AR/EN and 360/361/390/600/601/900/901/1280px on the homepage and destination directory.
- Full computed presentation, text, links and labels checked, including dimensions, border/shadow, logical positioning, title font metrics, photo object-fit, arrow blur and 50% corner radius. Focused committed fixtures cover the first card across all widths/themes and both print widths.
- Preserved screen magazine 345px mobile card height versus 360px print, narrow screen/print width differences, directory aspect ratios, hidden mobile directory arrows, magazine arrow position, Arabic title weight/line-height and print sizing, narrow English title sizes, and original image crops.
- Actual AR/EN mobile and desktop homepage card pixels inspected with loaded photographs. Carousel partial neighboring cards and existing heading clipping above the deliberately scrolled viewport are unchanged.
- Frontend checks block `/api/**`. No live D1 reads, account QA, hours/source dates, media URLs, photo captions, routes or API changed.
