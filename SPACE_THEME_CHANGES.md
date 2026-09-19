# Space-theme update

This version adds an original, accessibility-conscious space visual system inspired by the atmosphere of modern space strategy/exploration games without copying any game artwork or UI.

## Changes
- Added `src/components/ui/SpaceBackdrop.astro` with CSS-generated stars, nebulae, orbital geometry, a blue planetary limb, a ringed planet, and a small solar-system motif.
- Applied the backdrop to Home, About, Research, Publications, Experience, News, and 404.
- Raised secondary gray text from slate-400/500 to slate-300.
- Raised semi-transparent cyan eyebrow text to solid cyan-200.
- Switched alternating section bands to translucent black so the star field remains visible while text retains strong contrast.
- Updated navbar and footer surfaces to translucent black with stronger foreground contrast.
- Preserved reduced-motion behavior.

## Validation
All modified Astro files were parsed successfully with `@astrojs/compiler` in the sandbox. A full Linux build was not possible using the uploaded Windows `node_modules` because Rollup's Linux native optional package is not present. Run `npm run build` on the local Windows project after copying these files.
