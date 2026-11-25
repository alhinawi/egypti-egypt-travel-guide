# Home plan cards at enlarged text

Date: 2026-11-25. Batch B355.

At320px with doubled text, all36published days in both languages were checked. Fifteen day cases had long plan-heading overflow, chiefly Cairo/Alexandria and English Mediterranean. The first audit incorrectly counted25 because inherited font sizes could compound after switching days; resetting inline font sizes before each switch gave the15-case reproduction. This does not change product behavior.

The card now uses local Tailwind overflow-wrap:anywhere. Long words can split when needed rather than clip. No text, photo, ordering, handler, API, storage or shared-viewer change.

Build, type checks and298unit tests passed. New four-case regression covers all144day/card cases at320/601AR/EN; independent72case320audit passed. Completed local groups:24new/mobile-photo,8representative gallery-entry/noJS at360/601/1280,20viewer,28independent-save. Full gallery-entry suite was not completed within command windows and is not claimed green. Several oversized combined commands were interrupted; partial runs not counted. Completed groups run independently. Inspected actual AR/EN320doubled-text cards after fix, isolated from fixed chrome for screenshots only.

Existing live intermittent probes, rapid physical input and CSS-zoom navigation caveats remain unchanged. Release requires actual green CI, normal merge, exact-main production, both-origin replay/parity and inspected canonical pixels.
