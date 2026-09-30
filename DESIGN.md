---
name: Piya-Skills
description: A dark, near-black, command-first landing for a Thai-aware Claude skill collection; white is the only accent.
colors:
  ground: "#0a0a0a"
  panel: "#111111"
  raised: "#1a1a1a"
  line: "#262626"
  line-strong: "#3a3a3a"
  foreground: "#ededed"
  muted: "#a1a1a1"
  dim: "#8a8a8a"
  removed: "#f87171"
  removed-wash: "rgba(248, 113, 113, 0.12)"
  added: "#4ade80"
  added-wash: "rgba(74, 222, 128, 0.12)"
typography:
  display:
    fontFamily: "Geist, Noto Sans Thai, ui-sans-serif, system-ui, sans-serif"
    fontSize: "3rem, 3.75rem from sm, 4.5rem from lg (stepped, not fluid)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Geist, Noto Sans Thai, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Geist, Noto Sans Thai, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Geist, Noto Sans Thai, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  demo-text:
    fontFamily: "Geist, Noto Sans Thai, ui-sans-serif, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.9
  label:
    fontFamily: "Geist, Noto Sans Thai, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.43
  code:
    fontFamily: "Geist Mono, Noto Sans Thai, ui-monospace, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.43
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
  xl: "12px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "20px"
  lg: "40px"
  section: "64px"
  section-wide: "96px"
components:
  button-primary:
    backgroundColor: "{colors.foreground}"
    textColor: "{colors.ground}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "0 12px"
    height: "40px"
  button-primary-hover:
    backgroundColor: "rgba(237, 237, 237, 0.85)"
  button-outline:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.md}"
    padding: "0 12px"
    height: "40px"
  button-outline-hover:
    backgroundColor: "{colors.panel}"
  button-ghost:
    textColor: "{colors.muted}"
    rounded: "{rounded.md}"
    padding: "0 12px"
    height: "40px"
  button-icon:
    textColor: "{colors.muted}"
    rounded: "{rounded.lg}"
    size: "44px"
  button-icon-hover:
    backgroundColor: "{colors.raised}"
    textColor: "{colors.foreground}"
  tab:
    textColor: "{colors.muted}"
    rounded: "{rounded.md}"
    padding: "0 12px"
    height: "40px"
  tab-selected:
    backgroundColor: "{colors.raised}"
    textColor: "{colors.foreground}"
  command-box:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.foreground}"
    typography: "{typography.code}"
    rounded: "{rounded.xl}"
    padding: "8px 8px 8px 16px"
  panel:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.xl}"
    padding: "20px"
---

# Design System: Piya-Skills

## Overview

**Creative North Star: "The Terminal Page"**

The page behaves like a well-kept terminal: a near-black ground, one command to copy, and real output shown before any claim is made. This is the category standard for developer tooling (the register of vercel.com, skills.sh and reactbits.dev), chosen on purpose by the user rather than reached by default. It earns its place through precision of spacing, type and states, not through ornament.

There is no accent colour. Emphasis is a step up the grey ramp, ending at white (#ededed) for the things that matter: the wordmark, the primary buttons, the "with skill" bar. Colour appears in exactly one place, inside the before/after demo, where red and green mean removed and kept. Depth comes from 1px borders and a single tonal step between ground and panel; nothing glows, blurs, or casts a shadow.

Density is calm and centred in the first viewport (wordmark, two lines of lead, command, demo), then left-aligned and tabular below it. Copy is honest about scale: one skill, small-sample test numbers, stated as such.

**Key Characteristics:**
- Near-black ground with tonal panels and hairline borders; no shadows, gradients, or glow.
- White is the only accent; red and green exist only as diff semantics.
- Geist for Latin, Geist Mono for commands and numbers, Noto Sans Thai as the Thai face, size-matched.
- Every interactive target is at least 40px tall (44px for icon buttons and the star CTA).
- Bilingual (TH/EN) with identical structure; language never changes layout.

## Colors

A monochrome ramp from #0a0a0a to #ededed, plus two diff colours that never leave the demo panel.

### Primary
- **Off-White Ink** (foreground, #ededed): body text on dark, the primary button fill, the selection and focus-ring colour, the "with skill" bar. This is the accent; there is no other.

### Neutral
- **Void Black** (ground, #0a0a0a): page background, sticky header, inset code wells inside panels, and the text colour on white buttons.
- **Panel Black** (panel, #111111): the command box, demo panel, install panel, table header row, and outline-button hover.
- **Raised Grey** (raised, #1a1a1a): selected tab, icon-button hover, inline code chips, bar tracks, selected language toggle.
- **Hairline** (line, #262626): every 1px divider and card border.
- **Strong Hairline** (line-strong, #3a3a3a): outline-button hover border, the "without skill" bar fill, scrollbar thumb.
- **Secondary Text** (muted, #a1a1a1): lead copy, nav links, ghost buttons, unselected tabs.
- **Tertiary Text** (dim, #8a8a8a): captions, versions, column headers, footer. Lowest text tone in use; do not go darker.

### Diff semantics (demo only)
- **Removed Red** (removed, #f87171) with its 12% wash: struck-through text in the "before" pane and the before dot.
- **Kept Green** (added, #4ade80) with its 12% wash: added text in the "after" pane and the after dot.

### Named Rules
**The White-Only Accent Rule.** Emphasis is white on black. No hue is introduced for buttons, links, badges, or highlights.
**The Diff-Only Colour Rule.** Red and green mean removed and added inside a before/after comparison, and nowhere else.

## Typography

**Display Font:** Geist (with Noto Sans Thai, ui-sans-serif, system-ui)
**Body Font:** Geist (same stack; `font-feature-settings: "ss01"` on body)
**Label/Mono Font:** Geist Mono (with Noto Sans Thai, ui-monospace)

**Character:** Geist is a neutral, engineered grotesque; Mono carries commands, skill names, versions and every number. Thai glyphs fall through to Noto Sans Thai, and `font-size-adjust: from-font` on body scales that fallback to Geist's x-height so mixed Thai and Latin runs sit at one optical size. This is the shipped Thai face; it is not a bespoke Thai display design.

### Hierarchy
- **Display** (600, 48px / 60px / 72px at base / sm / lg, ~1, -0.04em): the "Piya-Skills" wordmark h1 only.
- **Headline** (600, 30px, tight, -0.025em): section h2s (skills, tests, install, star).
- **Title** (600, 20px, -0.025em): the demo heading, left-aligned above the panel.
- **Body** (400, 16px to 18px, relaxed 1.625): section lead copy, in muted. Hero lead is two lines, max-width 42rem, balanced. Captions and help at 14px in dim or muted.
- **Demo text** (400, 15px, 1.9): Thai before/after copy; the loose leading is for Thai tone marks and is required.
- **Label** (500, 14px): buttons, tabs, star CTA; 12px medium for column headers, pane labels and the TH/EN toggle (the toggle is uppercase).
- **Code** (Mono 14px): install commands, prefixed with a dim `$ `; skill names 15px medium; versions and stats 12px, always `tabular-nums`.

### Named Rules
**The Mono-For-Machine Rule.** Anything the reader might copy, or any number they compare, is set in Geist Mono.
**The Thai Leading Rule.** Any paragraph that contains Thai prose uses generous leading (1.9 in the demo, relaxed elsewhere), never the tight leading of headings.

## Layout

Single centred column, `max-w-6xl` (72rem) with 16px side padding, 24px from 640px. The install section narrows to `max-w-3xl`; the hero command box to 48rem. Breakpoints are Tailwind defaults: 640 (sm), 768 (md: demo splits into two panes, skills table becomes a three-column grid), 1024 (lg: tests section goes two columns, wordmark reaches 72px).

The sticky 64px header holds the wordmark left; Skills and Install links (hidden under 640px), the TH|EN toggle, and a GitHub star button right. Sections are separated by a full-width 1px hairline and 64px vertical padding (96px from sm). Hero: 40px top padding (56px from sm; 24px on viewports shorter than 700px), then wordmark, lead at 16px below, command box at 28px, the demo at 40 to 48px (24px on short viewports). Inside panels, padding is 20px; rows in the skills table are 24px vertical, 20px horizontal.

Rhythm is a 4px base: 8, 12, 16, 20, 24, 40, 64, 96.

## Elevation & Depth

Flat and tonal. There are no box-shadows anywhere. Depth is conveyed by three surface steps (ground, panel, raised) and 1px hairline borders; the header is opaque with a bottom hairline, not blurred. A right-edge `mask-image` fade on command boxes below 640px signals horizontal overflow; it is a scroll affordance, not decoration.

### Named Rules
**The Flat Rule.** Surfaces are separated by border or by one tonal step, never by shadow, blur, glow, or gradient fill.

## Shapes

Softly squared. 12px for containers (command box, demo panel, install panel, skills table), 8px for nested wells and icon buttons, 6px for buttons, tabs, nav links and the focus ring, 4px for inline diff spans, full for progress bars and diff dots. Borders are always 1px in Hairline. Nothing is clipped into non-rectangular shapes.

## Components

### Buttons
- **Shape:** 6px radius, 40px min height (44px for the star CTA and icon buttons).
- **Primary:** Off-White fill with Void Black text, 14px medium, 12px horizontal padding (20px on the star CTA). Used for per-skill "copy command" and "Star repo". Hover drops fill to 85% opacity.
- **Outline:** 1px Hairline border, Off-White text; the nav GitHub-star button. Hover strengthens the border to Strong Hairline and fills Panel Black.
- **Ghost:** Muted text, no fill; hover shows Panel Black fill and Off-White text ("view source", "suggest a skill").
- **Icon-only:** 44px square, 8px radius, muted; hover Raised Grey. The copy icon swaps to a check for 2s and announces through an aria-live region; the failure state is also announced.
- **Focus:** 2px Off-White outline, 3px offset, 6px radius, on every element via `:focus-visible`.

### Command box (signature)
Panel Black, 1px Hairline, 12px radius, mono 14px, dim `$ ` prompt, the command typed out by React Bits TextType (22ms per character, 250ms delay, no loop, `▍` cursor in dim), and an icon copy button at the right. A screen-reader copy of the full command is always present; with reduced motion the command renders static. Horizontal overflow scrolls with the scrollbar hidden.

### Demo panel (signature)
Panel Black container, 12px radius. Top bar: a tablist of audience tabs (Developer / General / Business) and, from 640px, a dim context line pushed right. Below, two panes split at 768px: "Before" in muted text with a Removed Red dot and struck spans, "After" in Off-White with a Kept Green dot and added spans; a 1px hairline divides them. Diff markup: removed spans get 12% red wash and line-through, added spans 12% green wash without underline, code spans a Raised Grey chip in Mono. Arrow keys move between tabs with roving tabindex.

### Tabs
40px tall, 6px radius, 14px. Selected: Raised Grey fill, Off-White text. Unselected: muted, brightening to Off-White on hover. Used in the demo and the install-method switcher, with identical treatment.

### Cards / Containers
Panel Black or ground fill, 1px Hairline, 12px radius (8px for nested code wells on ground inside panels), 20px padding, no shadow.

### Skills table
A bordered 12px container; header row on Panel Black at 12px dim (from 768px). Each row is three columns: mono name plus version and summary, a definition list of paired test results (`with% / without%`, with-skill in Off-White and baseline in dim, case counts in the label), and actions. Row dividers are hairlines; the last row is a dim "next skill" invitation with a ghost link. Collapses to stacked rows under 768px.

### Test bars
Two-row figure per benchmark: 8px full-radius track in Raised Grey, "with skill" fill Off-White, "without" fill Strong Hairline, value right-aligned in mono tabular numerals. Widths are the literal percentage.

### Navigation
64px opaque header with bottom hairline. Nav links muted, Off-White on hover, 40px targets. The TH|EN toggle is a bordered 6px group with 36px cells; the current language is Raised Grey with `aria-current="page"`. A skip-to-content link becomes a white pill on focus. Under 640px the section links are hidden; wordmark, toggle and star button remain.

## Do's and Don'ts

### Do:
- **Do** keep white (#ededed) as the only emphasis colour; use the grey ramp for hierarchy.
- **Do** separate surfaces with a 1px #262626 border or one tonal step (#0a0a0a, #111111, #1a1a1a).
- **Do** set commands, skill names, versions and every comparable number in Geist Mono with tabular numerals.
- **Do** keep touch targets at 40px minimum, 44px for icon buttons and primary CTAs, with the 2px white focus ring.
- **Do** keep Thai prose at the loose leading (1.9 in demos) and rely on the Noto Sans Thai fallback with `font-size-adjust: from-font`.
- **Do** state test numbers as small samples, with case counts next to every percentage.
- **Do** keep TH and EN pages structurally identical.
- **Do** honour `prefers-reduced-motion`: static command text, near-zero transitions, no smooth scroll.

### Don't:
- **Don't** add shadows, glows, blur, or gradient fills to surfaces.
- **Don't** use red or green outside a before/after diff.
- **Don't** introduce a brand hue for links, badges, or buttons.
- **Don't** use tones darker than #8a8a8a for text on the dark grounds.
- **Don't** set Thai body text at tight leading or in a face other than the matched Noto Sans Thai fallback.
- **Don't** imply scale the collection does not have (logos, download counts, "trusted by").

## Known gaps

- On short viewports (measured at 1060x600 and 618x477) the demo panel sits only partly inside the first viewport, and the first changed text of the demo is below the fold. The short-viewport padding tightening (`max-height: 700px`) narrows this but does not close it. Open finding from the finish review.
- The contract's one-line purpose shipped as two lines of lead copy.
