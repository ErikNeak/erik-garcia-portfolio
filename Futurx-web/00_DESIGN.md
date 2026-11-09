---
name: Futurx Liquid Core
colors:
  surface: '#1a120a'
  surface-dim: '#1a120a'
  surface-bright: '#42372d'
  surface-container-lowest: '#140d05'
  surface-container-low: '#221a11'
  surface-container: '#271e15'
  surface-container-high: '#32281f'
  surface-container-highest: '#3d3329'
  on-surface: '#f1e0d1'
  on-surface-variant: '#dac2ad'
  inverse-surface: '#f1e0d1'
  inverse-on-surface: '#382f25'
  outline: '#a28d79'
  outline-variant: '#544433'
  surface-tint: '#ffb868'
  primary: '#ffc586'
  on-primary: '#482900'
  primary-container: '#ff9e00'
  on-primary-container: '#663c00'
  inverse-primary: '#885200'
  secondary: '#41ded6'
  on-secondary: '#003734'
  secondary-container: '#00c2ba'
  on-secondary-container: '#004a47'
  tertiary: '#d2cfcf'
  on-tertiary: '#313030'
  tertiary-container: '#b6b4b3'
  on-tertiary-container: '#474646'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffddbb'
  primary-fixed-dim: '#ffb868'
  on-primary-fixed: '#2b1700'
  on-primary-fixed-variant: '#673d00'
  secondary-fixed: '#63f8ef'
  secondary-fixed-dim: '#3ddcd3'
  on-secondary-fixed: '#00201e'
  on-secondary-fixed-variant: '#00504c'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#1a120a'
  on-background: '#f1e0d1'
  surface-variant: '#3d3329'
typography:
  display-xl:
    fontFamily: Space Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Space Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-bold:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin: 32px
---

## Brand & Style

The design system is engineered for a premium tech audience that values high-velocity innovation and aesthetic precision. It merges **Glassmorphism** with a **High-Contrast Bold** aesthetic to create an environment that feels both high-tech and tangibly premium. 

The visual narrative is driven by "Liquid Glass"—a concept where interface layers appear as viscous, translucent slabs floating over a deep, dark abyss. This is augmented by a fine film-grain noise texture applied to backgrounds and glass surfaces to eliminate sterile digital flatness, providing a sophisticated, tactile feel. The emotional response is one of "Agile Authority": fast, sharp, and unmistakably modern.

## Colors

The design system utilizes a dark-mode default to emphasize the vibrance of its accent palette. 

- **Primary Orange (#ff9e00):** Reserved exclusively for high-priority actions, critical progress indicators, and "Hero" moments. It represents energy and kinetic movement.
- **Secondary Blue (#00c4bc):** Used for supporting information, secondary interactive elements, and data visualization. It provides a cool, technical counter-balance to the heat of the orange.
- **Base Black (#161616):** The core surface color. For the deep background, a slightly darker #0a0a0a is used to create a "void" effect that makes the glass layers pop.
- **Pure White (#ffffff):** Used for high-contrast typography and icon glyphs to ensure maximum legibility against dark backgrounds.

## Typography

This design system utilizes **Space Grotesk** (as the closest available match to the requested technical aesthetic) to maintain a geometric, futuristic tone. 

The type hierarchy is characterized by extreme scale differences. Display and Headline styles use tight letter-spacing and heavy weights to command attention. Body text remains generous in line-height to ensure readability against dark, textured backgrounds. Labels are frequently set in all-caps with increased letter-spacing to function as technical metadata or "HUD" (Heads-Up Display) elements.

## Layout & Spacing

The design system employs a **Fluid Grid** with a strict 8px rhythmic base. Layouts should feel expansive, utilizing large internal padding (the "lg" and "xl" values) to create a sense of premium "breathing room." 

Elements are organized in a 12-column system for desktop, but spacing between components is intentionally high to prevent the "clutter" often found in enterprise tech. Margins are generous to frame the central "Liquid Glass" content modules.

## Elevation & Depth

Depth in the design system is achieved through **Backdrop Saturation and Blur** rather than traditional drop shadows.

1.  **The Void (Level 0):** The deepest background layer (#0a0a0a) with a subtle 5% opacity noise overlay.
2.  **Glass Surface (Level 1):** Semi-transparent Base Black (#161616 at 70%) with a 20px backdrop blur. This layer features a 1px inner border of Pure White at 10% opacity to simulate a glass edge.
3.  **Floating Elements (Level 2):** Critical modals or menus that use a higher transparency and a subtle glow (0px 10px 30px) tinted with either the Primary Orange or Secondary Blue, depending on the context.

Texture is key: every glass surface must have a "grainy" noise filter applied as a masking layer to give the UI a physical, cinematic quality.

## Shapes

The design system uses **Rounded (Value 2)** corners to soften the high-contrast technical edges. 

- **Standard Elements:** 0.5rem (8px) radius for buttons and input fields.
- **Large Containers:** 1rem (16px) radius for cards and glass panels.
- **Contextual Elements:** Interactive chips and badges use a full pill-shape to distinguish them from structural panels.

The combination of rounded corners and sharp, high-contrast typography creates the "Agile" look—approachable yet precise.

## Components

### Buttons
- **Primary:** Solid Primary Orange (#ff9e00) with Base Black text. No gradients. On hover, a subtle outer glow of the same color appears.
- **Secondary:** Transparent background with a 1.5px Secondary Blue (#00c4bc) border. Text is Secondary Blue.
- **Tertiary/Glass:** Semi-transparent white (10%) with a heavy backdrop blur and white text.

### Cards & Panels
Cards must use the "Liquid Glass" effect: semi-transparent #161616, 20px backdrop blur, and a 1px top-left "light" stroke. Apply a 3% noise texture overlay to the entire card surface.

### Inputs
Input fields are "dark wells"—#0a0a0a background with a 1px border that glows Secondary Blue on focus. Typography inside is Pure White.

### Navigation / HUD
Top navigation should be a floating glass bar, detached from the top of the viewport, emphasizing the "fluid" nature of the system. Use Primary Orange for active states and "live" indicators.

### Progress & Data
Use smooth, flowing gradients that transition from Secondary Blue to Primary Orange for data visualizations, representing the "liquid" movement of information.