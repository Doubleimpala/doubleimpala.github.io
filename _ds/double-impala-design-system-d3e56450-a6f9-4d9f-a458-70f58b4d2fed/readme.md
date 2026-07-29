# doubleimpala — Design System

**doubleimpala** is a personal handle/brand for a research-and-projects portfolio site — one person sharing math-flavored side projects, notes, and interests publicly under that name. No company, no product line: this system exists to give a single creative portfolio a consistent, distinctive look.

There is no attached codebase, Figma file, or existing brand asset — this system was built from a short brand description (favorite colors: dark purple + dark forest green) and a few direction questions. Everything here (palette, type pairing, component set, iconography, the orca mark) is an original system created for this brand, not sourced from an existing product.

## Brand direction
- Personal research/portfolio site — projects, notes, interests, not a company.
- Vibe: cool, creative, technical-but-personal — inspired by generative/mathematical visuals (e.g. a rotating 3D parametric surface as a living background), not corporate-SaaS.
- Purple is primary; forest green is a secondary accent used sparingly.
- No logo was supplied. Per design-system convention, none is invented — wordmarks use plain type. As a playful personal mark (explicitly requested), a small geometric **orca silhouette** stands in for an avatar/favicon-style mark — see `assets/orca-mark.svg`.

## Content fundamentals
- **Voice**: first person, direct, low-key confident. Describe work the way you'd tell a friend about it, not the way a press release would. "I write about the math I find beautiful and the systems I build to explore it."
- **Casing**: sentence case everywhere — headings, buttons, labels. No ALL CAPS except small uppercase tags/badges (tracked-out, used as a UI convention, not a voice choice).
- **Tone**: understated, precise, a little dry. Avoid hype adjectives ("revolutionary", "game-changing"); let the work speak. Technical terms (differential geometry, parametric surfaces) are used plainly, not explained down.
- **Person**: "I" for the author; "you" when addressing the visitor directly (e.g. a contact prompt: "Say hi"). No "we" — this is one person.
- **Emoji**: none. The one whimsical exception is the orca mark used as a mascot glyph, not emoji.
- **Numbers/dates**: ISO-ish and plain — "2026", "Jan 2026" — no decorative stat call-outs.

## Visual foundations
- **Color**: dark-mode-first. Canvas is near-black (`--bg-canvas`), primary is a deep, desaturated purple (`--color-primary`, `--purple-500` as the working shade), accent is a dark forest green (`--color-accent`, `--green-400`) used sparingly — a highlighted CTA, a status pill, a line in a generative background — never as a second primary.
- **Type**: Space Grotesk (display/headings/buttons) — geometric grotesk with a slightly technical, math-textbook character — paired with Inter (body/UI text) for readability at small sizes, and JetBrains Mono for code, coordinates, tags, and data labels (reinforces the research/technical angle).
- **Spacing**: 4px base unit scale (4 → 128px). Generous whitespace; content reads like an essay, not a dashboard.
- **Backgrounds**: full-bleed dark canvas; the signature motif is a live-rendered, slowly-rotating 3D parametric surface (canvas/WebGL line art) behind hero content — a generative, math-driven visual, not a stock photo or hand-drawn illustration. No repeating textures/patterns, no gradients used decoratively (gradients appear only as soft radial glows behind key CTAs).
- **Animation**: subtle and slow — the background surface rotates continuously and gently; UI transitions are quick fades/opacity and small scale changes (~120–200ms, standard easing), never bouncy.
- **Hover / press**: hover = `brightness(1.15)` filter on filled buttons, background-lighten on ghost/surface elements; press = a quick `scale(.97)`. No color hue shifts on hover.
- **Borders / shadows**: 1px hairline borders (`--border-default`) on cards and inputs — no colored left-border accent. Shadows are soft and dark (`--shadow-sm/md/lg`); an optional 1px colored ring + soft glow (`--shadow-glow-primary/accent`) marks focus or a featured card.
- **Radius**: 6px (sm, inputs/small controls) · 10px (md, buttons/cards default) · 16–24px (lg/xl, larger surfaces/dialogs) · pill (badges/tags/switch).
- **Cards**: `--bg-surface` fill, 1px `--border-default` hairline, `--radius-lg`, soft `--shadow-sm`; interactive cards lift 2px and their border brightens to purple on hover.
- **Transparency/blur**: used only for the modal scrim (`rgba(8,6,12,.7)` + light blur) — not decoratively elsewhere.
- **Imagery color vibe**: none supplied yet — when project screenshots/photos are added, keep them cool-toned or desaturated to sit against the dark purple canvas; avoid warm/bright imagery that fights the palette.
- **Layout**: single-column centered content, `--container-max` 1180px, generous top/bottom rhythm — no fixed/sticky chrome beyond a slim top nav.

## Iconography
- No icon set was supplied. **Lucide**'s outline style (2px stroke, rounded caps/joins) was chosen as the closest match to the grotesk/technical type and copied inline (`components/shared/Icon.jsx`) rather than linked from CDN, so components have zero runtime dependencies. This is a substitution — flagged for the user.
- Unicode/emoji are not used as icons.
- The one intentional non-Lucide mark is the **orca silhouette** (`assets/orca-mark.svg`, `assets/orca-mark-accent.svg`) — a small geometric mascot glyph, used in place of a logo per explicit request, not as a functional icon.

## Components
Standard set, authored from scratch (no source inventory existed to enumerate against):
- **Forms**: Button, IconButton, Input, Select, Checkbox, Radio, Switch
- **Data**: Card, Badge, Tag
- **Navigation**: Tabs
- **Overlay**: Dialog, Tooltip, Toast

### Intentional additions
- `Icon` (`components/shared/Icon.jsx`) — an internal wrapper around inline Lucide-style glyphs, not a public design-system primitive, but needed by Select/Checkbox/Dialog/Toast/Tag.

## Index
- `styles.css` — root stylesheet, imports everything below.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css` (radius/shadow/motion/layout), `base.css` (element resets).
- `components/forms|data|navigation|overlay/` — see above; each dir has `<Name>.jsx` + `.d.ts` + `.prompt.md`, plus one `*.card.html` demo.
- `components/shared/Icon.jsx` — internal icon glyph helper.
- `guidelines/colors|type|spacing|brand/` — foundation specimen cards for the Design System tab.
- `assets/` — `orca-mark.svg` (dark), `orca-mark-accent.svg` (purple, for dark backgrounds).
- `ui_kits/portfolio/` — click-through recreation of the doubleimpala portfolio site (home w/ generative 3D background, projects grid, project detail, contact).
- `thumbnail.html` — project tile.
- `SKILL.md` — Claude Code-compatible skill wrapper for this system.
