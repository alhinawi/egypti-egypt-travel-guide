# Drawer content Tailwind migration

2026-11-20, B153.

Drawer inner spacing, header row, tagline, navigation rows and current/hover treatment, section separators/labels and privacy link now use Tailwind. Removed 17 standalone rules and eight shared-selector members. Dialog surface, brand, animations, account controls, language choices and theme button unchanged. No route, focus or content logic changed.

Typecheck/build, 124 unit tests, 46 browser tests pass. Eighteen new tests cover 648 exact original-baseline cases and AR/EN keyboard route activation, active-link update, Escape dismissal and focus recovery. Matrix: AR/EN, 18 themes, eight widths (360,361,390,600,601,900,901,1280), default/hover, print at390/1280. Baseline from main6a003ede. Targeted important utilities preserve the existing unlayered paragraph and link resets; a direct top-border utility avoids applying solid borders on the other edges. Original computed values match exactly. Mobile Arabic and desktop English drawer pixels inspected after animations settled. APIs mocked unavailable, no account actions.
