# Docs

Source of truth for **what we're building** and **how it should feel**. Code in `src/` should reflect these decisions.

| File | Read when... |
|---|---|
| [prd.md](prd.md) | Adding or removing sections, changing scope, evaluating feature ideas |
| [brand-voice.md](brand-voice.md) | Writing any user-facing copy (bullets, headings, button text) |
| [design-tokens.md](design-tokens.md) | Touching colors, fonts, spacing, motion |

## Sync rule
If you change a design token in `src/app/globals.css`, also update `design-tokens.md` so they stay in sync. The doc is human-readable; the CSS is what actually ships.

If a brand-voice rule no longer matches how the site sounds, update the doc — don't let voice and reality drift apart.
