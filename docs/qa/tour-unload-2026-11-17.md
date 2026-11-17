# Close external media without leaving the page, 2026-11-17

Embedded tours and video previously had a start-only button. Once loaded, the visitor could not remove the external iframe without leaving or reloading the page.

Use the same control to close and remove the iframe, stopping that embedded session. The button announces expanded state and points to the player while it exists. It keeps focus on close and returns to its original start label. Initial consent behavior is unchanged: no iframe before a click. Reopening starts a new session rather than promising to resume position. This does not undo data already sent to the provider.

Checked typecheck/build, 71 unit/API tests and four browser checks for two player types in both languages. External requests fulfilled with a local test stub, not sent to providers. Screenshots show the stub only, not live provider imagery. Verified no initial external requests, close removes iframe, focus remains, and reopen works. No provider URLs or content changed.
