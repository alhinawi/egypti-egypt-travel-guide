# Companion picker next step

Owner reported that selecting Heba appeared to do nothing. The old handler only scrolled to a summary below all twelve profiles; no distinct next step was shown.

Selecting a companion now replaces the picker with their three suggested places. The second-step label and prominent first-place button make the next action clear. Heba starts with the Nubian Museum; Philae and Abu Simbel remain alternative cards. Change companion returns to the picker without discarding the choice. Clear selection and browser-only persistence remain supported. No booking, account sync or real-guide promises added.

Focus and scrolling happen after the new step is rendered, rather than guessing commit timing in an animation frame. New styling uses Tailwind utilities; existing navy/mint and photos retained.

Validation: build/typecheck and86unit/API tests passed, plus7Playwright checks including Arabic/English390px Heba selection, visible next-step button, opening the correct place, changing companion, all12companions, persistence, blocked storage and disabled profiles. Local and canonical next-step screenshots visually inspected: clear action above the fold and no horizontal overflow.
