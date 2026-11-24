# Home region gallery entry layout

Original full-region fullscreen action now has one wrapping label, nonbreaking parentheses/photo-count and a nonshrinking icon. Full-width through600px and max-width constrained. Existing wording, eligible photos/order/full-region count, example sets, selected region, viewer and links preserved. Tailwind only, no data/API/storage/shared-viewer/global CSS changes.

Build/type296unit24new86retained864theme cases pass. New allregions first/finalexamplesets AR/EN11widths360/390/520/600/601/800/801/900/1100/1101/1280: label/count/icon geometry,fullwidthmobile,nooverlap,nooverflow,exact full-region count,firstviewerphoto/count,close/focusreturn,region/URL/saves unchanged,noJSfallback. Theme matrix adds521px,18themes first/finalDelta sets contrast11.50,minheight46.59,focus3. Retained27photo/set+16save cases perlanguage pass. Actual local AR390/EN1280 pixels inspected. Initial fetch/build command window ended during build; rerun full build/type/unit passed. Existingwholehomebaseline/physicalrapidinputviewercaveatsunchanged.

Release requires actualCI,normalmerge,exactmainproof,cleanproduction,bothoriginreplay/parityandcanonicalpixels.
