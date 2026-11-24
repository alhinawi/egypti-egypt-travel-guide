# Search-starter pictured-place saves, 2026-11-24

Independent SaveButton controls for each explicitly named cover place, opposite the existing enlarge control. Existing place IDs/storage model and save semantics. No query, result count, photo eligibility/order, viewer, API or storage-format change. Tailwind utilities only; no global CSS.

Local build/typecheck/296 unit tests passed. New AR/EN 26 checks cover all four pictured places at 11 widths (360/390/520/600/601/800/900/1000/1001/1100/1280), keyboard save/remove labels, persistence through search/reset/reload, independent query/viewer actions, unchanged seed saves, focus, touch/print and no-JS. Retained 42 search-starter/query and exact-photo-viewer checks passed. 792 theme/state/width/language cases passed (18 themes, unsaved/saved, all four controls), minimum contrast 11.50 and target height46px. Actual AR390/EN1280 pixels inspected: all photos decoded and save/enlarge controls separate.

Release gate: actual green PR CI, normal merge, exact-main build/type/unit/new/retained/matrix replay, clean exact-main Pages production, canonical and immutable replay/parity and actual canonical screenshots. Existing rapid-input shared-viewer caveat remains unchanged; no guessed shared-viewer patch.
