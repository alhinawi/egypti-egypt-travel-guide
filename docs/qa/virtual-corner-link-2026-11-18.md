# Make the virtual-visits corner badge work

Reproduced the owner's mobile report on the canonical Arabic homepage: tapping the corner badge did nothing because it was a span, not an interactive control. No handler was being blocked.

Replaced the badge with a real localized Next link to the virtual-visits collection, the same destination as the section's working main CTA. It now supports touch, keyboard Enter, focus indication and normal link actions, with an explicit accessible name and a target larger than 44px. The image warning remains: this is not an invented Hatshepsut virtual tour.

Validation: build/typecheck, 78 unit/API/contrast tests and nine browser regressions. Both Arabic and English tested using actual Playwright tap in a mobile/touch context, destination URL and visible heading verified, keyboard Enter tested separately, target size checked. Canonical production repeats the touch flow and screenshots the source badge and opened destination.
