# Photographic day-preview text resizing

A doubled-text audit found English browse-photograph controls overflowing at320px and the Al-Khayyamiyya title clipping in the stop link. Preview-local Tailwind wrapping/min-width/max-width now contain the control and allow the title to wrap. The photograph count stays together. Text, photograph collection, day membership/order, save logic and viewer are unchanged.

Before PR: build/typecheck/298unit;8new text200 browser checks covering288published day panels across AR/EN and320/390/640/1280;20explicit-save;58preview/saved/day-choice;40viewer checks passed.360theme/width/language/save-state matrix cases passed, contrast9.07,target48,focus3. All day-panel text and controls checked for horizontal clipping, exact stop count and independent save/article layout. No save mutation during the text audit.

Inspected actual local English320 doubled-text browse control and isolated Arabic/English320 doubled-text Al-Khayyamiyya cards. Fixed chrome is hidden only in isolated element screenshots, not viewport images. The initial probe was corrected to reset inherited inline test sizes between days; it had exaggerated later-day sizes. Corrected audit still reproduced the real320px gap, then all288cases passed with the fix.

One long combined retained run hit command timeout and left a local server; server stopped, suites rerun separately to completion. No failed checks counted as passed.

Not a whole-site accessibility claim. Existing CSS-zoom header overflow and unrelated physical-input/transient-search faults remain unresolved.
