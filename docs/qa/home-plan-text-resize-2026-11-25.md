# Home plan cards at enlarged text

Date: 2026-11-25. Batch B355.

At320px with doubled text, all36published days in both languages were checked. Fifteen day cases had long plan-heading overflow, chiefly Cairo/Alexandria and English Mediterranean. The first audit incorrectly counted25 because inherited font sizes could compound after switching days; resetting inline font sizes before each switch gave the15-case reproduction. This does not change product behavior.

The initial blanket anywhere wrapping was rejected after pixel inspection: Arabic Alexandria had an isolated final letter. The revised header uses a vertical narrow-screen layout, with plan-save on its own row at520px and below, full-width heading,12px header side padding at360px and below, and18px English heading base size at360px and below. Arabic keeps24px. No forced word breaking. Actual doubled-text AR/EN Alexandria stays whole. The regression requires normal overflow-wrap as well as containment. No text, photo, ordering, handler, API, storage or shared-viewer change.

Build, type checks and298unit tests passed. New four-case regression covers all144day/card cases at320/601AR/EN; independent72case320audit passed. Completed local groups:24new/mobile-photo,8representative gallery-entry/noJS at360/601/1280,20viewer,28independent-save. Full gallery-entry suite was not completed within command windows and is not claimed green. Several oversized combined commands were interrupted; partial runs not counted. Completed groups run independently. Inspected actual AR/EN320doubled-text cards after fix, isolated from fixed chrome for screenshots only.

Existing live intermittent probes, rapid physical input and CSS-zoom navigation caveats remain unchanged. Release requires actual green CI, normal merge, exact-main production, both-origin replay/parity and inspected canonical pixels.
