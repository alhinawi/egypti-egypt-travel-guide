# Brand wordmarks Tailwind migration

2026-11-20,B158.

Shared wordmark defaults and header/drawer contexts moved to Tailwind.12 standalone rules and4 shared-selector members removed. Footer utilities retain their existing size/color overrides. All three brand instances live in the shared shell. No content,links,accessible names or interaction changes.

Typecheck/build,124 unit and46 browser tests pass,18new.360 exact original-baseline cases include header,drawer and footer wordmarks and child span across AR/EN,18 themes,eight widths360/361/390/600/601/900/901/1280 and screen/print390/1280. Baseline maine1d2559. Font shorthands preserve original Arial context typography and responsive header sizes,including distinct nested header span. Existing full-header/sticky,language context,Escape-focus and contrast pass. New keyboard tests verify home-link destinations,accessible names and drawer title. Mobile Arabic drawer/footer and English desktop header pixels inspected;footer capture waits for photo decoding. APIs mocked,no account actions.
