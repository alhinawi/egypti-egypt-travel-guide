# Explicit place saves in photographic plan-day previews

TripPhotoPreview now places the existing named-place save control below each stop article, including photo-free stops. The finder and saved-plan views share this component. Place links and enlarge controls remain independent. Plan identity, day membership/order, filters, URL, saved-plan status and shared viewer are unchanged. Saved-collection text distinguishes passive browsing from explicit place-save actions. No new photographs, API/storage implementation or global CSS.

Validation before PR: build/typecheck/298unit;20new AR/EN browser cases;36retained preview/saved-preview;22photographic-day-choice;40day-viewer checks passed.360theme/width/language/save-state matrix cases passed, mincontrast9.07,target48,focus3,nohorizontaloverflow,print hidden. Actual AR390/EN1280 local photographs/save controls and decoded mobile viewer inspected.

New cases cover finder and saved-plan entry, keyboard save/un-save, exact local membership, reload persistence, unchanged saved plan and selected day, day/collapse/viewer preservation, all published day-stop save labels and independent controls, photo-free stops, failed photographs and six responsive widths.

Initial test assumptions corrected before commit: second Cairo-program day starts with Giza, not Muizz; Philae fixture was already saved; persistence fixture must not overwrite saves at every navigation. First matrix probe needed a first-preview selector because nine previews are present. No product failures hidden by these corrections.

Existing unrelated physical rapid-input, transient search-readiness/filter-reload failures and CSS-zoom header overflow remain unresolved. No fix claimed.
