# Search-place photograph viewer, 2026-11-21

## Visible outcome

Whole-guide AR/EN search can open its matching place photographs without leaving results. A collection entry shows the number of suitable photographs, explicitly including matching place articles beyond the first six displayed cards. Each eligible place card has a separate 46px enlargement button. Existing article links and title/description text remain unchanged. Governorate and plan cover images remain article links only, never borrowed as place matches.

Selection is the intersection of exact place search matches and the established photographic-atlas eligibility, in search-result order. Contextual/unsuitable covers and reference-only North Sinai entries are not promoted. A suitable photo is not evidence of present access. No external data or source metadata changes.

The existing full-screen viewer supplies arrows, AR/EN keyboard direction, Home/End, bounded thumbnail strip, zoom, touch swipe, image retry and exact place-story links. The viewer names its matching-place-only scope. Close returns focus to its opening button without losing the query, result kind, expanded cards or scroll. Query/history changes close the old collection and restore page scrolling. No save/account writes or new persistence.

Tailwind/SVG only on the touched search surface. No shared viewer code changed. No new CSS, service, domain, paid plan, purchases or deletions.

## Verification

- Build/typecheck and197unit tests pass. Three new unit tests establish exact order/membership, all-match rather than six-card scope, unsuitable/missing covers, normalized bilingual search and no borrowed profile/plan covers.
-22new browser cases pass in AR/EN, with360/390/600/601/900/1280width checks: open collection/direct-card, count/source/story links, arrows/Home/End, Escape/focus return, native modal focus containment, retained expansion/query/type, no-photo/empty states, image failure/retry, zoom, touch arrows/strip and real CDP touch swipe, history-change cleanup, no save/API writes and print hiding of enlargement controls.
-112existing related cases pass:32whole-guide search,16atlas,18saved viewer and46shared viewer swipe/zoom/strip cases.216search language/viewport/theme checks pass, minimum contrast5.459955953071658, no overflow, controls at least44px.
- Actual AR390andEN1280 search-entry/results and full-screen pixels inspected. Image framing, scope text, controls and typography checked.

## Open follow-up: rapid synthetic touch after swipe

An additional diagnostic combining a real CDP touch swipe with an immediate thumbnail tap sometimes consumes that next tap without a click in Chrome mobile emulation. Reproduced on the unchanged atlas viewer at `/en/photos/?governorate=cairo`, not only the new search integration. A second tap selects; waiting about one second after the swipe also selects. No physical-device test is available, so this is not established as a real-device bug or dismissed as harmless.

Reproduction: mobile390×844, touch enabled, open Cairo photo collection; next-arrow to second photo; CDP touchStart at x295, eight moves to x95 at stage mid-height, then touchEnd (reverse horizontal direction for Arabic); immediately tap a thumbnail. Capture pointer/touch/click events: pointerdown/up and touchstart/end occur on thumbnail but no click in the failing sample. A partly offscreen thumbnail may also scroll into view. The diagnostic is not counted among passing cases. The passing interaction tests independently verify strip tap and real swipe, and do not add an arbitrary delay to disguise this probe.

The parent directed shipment with this pre-existing caveat documented and no speculative shared-viewer modification. The next step is a physical-device or isolated event-order check before choosing any shared-viewer fix. Speculative delay, animation-frame, image-key and scroll-tolerance experiments were reverted, none shipped. Scope is the input sequence, not result membership, source accuracy or search-state loss.
