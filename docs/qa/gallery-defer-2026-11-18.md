# Defer hidden lightbox image, 2026-11-18

The closed dialog mounted an eager full-size image even while hidden. On a 390px page this requested a 1400px file in addition to the responsive cover image, before the visitor opened the gallery. Mount the lightbox image only while the gallery is active; unmount it on close. Responsive cover and thumbnail behavior stays unchanged. Large screens may still legitimately request the 1400px cover candidate.

Typecheck/build, 71 unit/API tests and six browser checks pass. New checks in both languages verify no closed-dialog image or full-size request at the tested mobile size, successful decode on opening, removal on close and successful reopening. Existing keyboard and failed-image retry checks still pass. No source URLs or visible gallery layout changed.
