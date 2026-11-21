# Home photo-atlas exhibition,21Nov2026

## Visible outcome
The home page's fixed six-place wish list is replaced,not extended,with an interactive photographic exhibition. A large linked source photograph sits beside five selectable photographic thumbnails. Choosing a thumbnail updates the feature,name,governorate and original article link. All regions opens an interleaved cross-section;regional collections use existing exact atlas membership. Changing region resets the feature to that collection's first photograph. A scoped atlas link continues to all eligible photos in that collection,with exact preview/collection counts.

AR/EN,Tailwind,keyboard/touch,live selected heading/counts,pressed state,44pxcontrols,responsive two-column/stacked display and print exclusion. No autoplay,new sources or access/route/ranking claims,account writes,storage or sending. Existing catalog photographs and article links only.

## Verification
- Build,typecheck147unit tests pass.
-16new browser cases cover every regional collection and every displayed thumbnail atAR/EN6widths,exact IDs/name/photo alt/governorate/count/article and atlas links,source photo decode,selected state/reset,responsive columns,no overflow,keyboard focus,touch and print.
-648AR/EN18theme6width3collection cases pass,min text contrast5.4599:1,no overflow,44pxcontrols.
- Actual AR390/EN1280opening/regional-selection captures inspected. Visual review caught an inherited link-color override on the atlas CTA;fixed with Tailwind priority and rechecked all pixels/themes.
- Existing presentation tests now count the moved section heading in its new component and stop expecting the removed fixed six-card grid. They retain the remaining presentation checks.
