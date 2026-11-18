# Tailwind migration foundation

Tailwind4 utility compilation is active through PostCSS, with a tw prefix. Preflight is intentionally omitted to preserve the existing site's base styles while components migrate. Theme tokens, palette, type and content are unchanged.

The virtual-visit statistics component is the first migrated area. Its old handwritten style rules are replaced by utilities, including the exact600px breakpoint and logical borders. No new handwritten component CSS.

Build,typecheck and83unit/API tests pass.390px Arabic/English and1280px Arabic/English screenshots were compared before/after: identical dimensions and zero changed pixels.99 tour cards remain. Source/card interaction behavior is unchanged. Fullscreen action fix is a separate next task.

npm audit reports3 high findings in the existing Miniflare development dependency chain (sharp/undici),not Tailwind. Avoided force-fix/downgrade; needs separate dependency review.
