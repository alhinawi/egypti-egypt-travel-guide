# Keep a card's matching vibe visible

Reproduced on production: the Food & coffee collection included Dahab, but its card showed only By the sea and Slow down. Compact cards always displayed the first two metadata tags, hiding the reason a later-tag match appeared in filtered results.

Pass the active vibe from encyclopedia results to each compact card. When the place actually has that tag, display it first, followed by one existing tag. An unknown/nonmatching filter cannot invent a tag. Default cards keep their original order and two-tag limit. Full place-page tags are unchanged. Matching tags remain plain spans inside the article link, without nested links or extra focus targets. No catalog metadata, sources, photographs or rankings change.

Validation: typecheck, production build, 77 unit/API/contrast tests; the unit case covers every place and every valid tag, no mutation, invalid/empty input and the two-tag limit. Ten browser regression cases cover Arabic/English filtered routes, query links, reload, changing filters, resetting to the ordinary order, URL/history behavior and discovery counts. Inspected mobile screenshots. Additional viewport checks at 320/390/1280 verify the matching label and no horizontal overflow.
