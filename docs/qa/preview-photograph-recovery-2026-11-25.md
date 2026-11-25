# Day-preview photograph recovery

Photographic day-preview stop images now show a restrained failure panel if loading fails, with a separate named-place retry button below the story link. Explicit retry remounts the same source, with no automatic retry loop. On success, retry disappears and focus returns to the same card's enlarge control only if its retry still owns focus. Per-place failure/attempt state stays separate from saves, day, plan, filters and viewer. Photo-free stops remain photo-free. No new photographs, global CSS, API/storage implementation or shared viewer changes.

Before PR: build/typecheck/298unit;18new recovery cases;28save/text200;58preview/saved/daychoice;40viewer;360theme/language/width/save-state matrix passed. Recovery checks include finder/saved-plan entry, failure and repeated failed retry, exact original source recovery, focus, independent saves, unchanged day/URL, six responsive widths at doubled text, fallback/control separation and day-change cleanup. Actual AR390 failed cards and EN1280 mixed recovered/failed cards inspected. Only first card retried in that capture; unrelated plan-cover broken image from deliberate all-photo abort is outside this scoped component.

Test setup initially targeted the arrival day of the Cairo programme, which has no stops. Corrected to a published day with a named place using catalog data. No implementation change was made to invent a stop. A combined command timed out before completion, local server stopped and suites rerun separately. No failed/incomplete checks counted as passed.

Existing unrelated intermittent failures, physical rapid-input and CSS-zoom header caveats remain.
