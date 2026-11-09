---
name: NERV Tactical Interface
colors:
  surface: '#161021'
  surface-dim: '#161021'
  surface-bright: '#3d3649'
  surface-container-lowest: '#110b1c'
  surface-container-low: '#1e192a'
  surface-container: '#221d2e'
  surface-container-high: '#2d2739'
  surface-container-highest: '#383244'
  on-surface: '#e9def6'
  on-surface-variant: '#bbccb1'
  inverse-surface: '#e9def6'
  inverse-on-surface: '#342d40'
  outline: '#85957d'
  outline-variant: '#3c4b36'
  surface-tint: '#29e514'
  primary: '#f3ffe9'
  on-primary: '#023900'
  primary-container: '#4dff36'
  on-primary-container: '#097200'
  inverse-primary: '#086e00'
  secondary: '#ffb59b'
  on-secondary: '#5b1a00'
  secondary-container: '#fe5900'
  on-secondary-container: '#501600'
  tertiary: '#fffafc'
  on-tertiary: '#3c1e6f'
  tertiary-container: '#e8d8ff'
  on-tertiary-container: '#6f53a4'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#78ff5e'
  primary-fixed-dim: '#29e514'
  on-primary-fixed: '#012200'
  on-primary-fixed-variant: '#055300'
  secondary-fixed: '#ffdbcf'
  secondary-fixed-dim: '#ffb59b'
  on-secondary-fixed: '#380d00'
  on-secondary-fixed-variant: '#812900'
  tertiary-fixed: '#ebdcff'
  tertiary-fixed-dim: '#d3bbff'
  on-tertiary-fixed: '#260059'
  on-tertiary-fixed-variant: '#533687'
  background: '#161021'
  on-background: '#e9def6'
  surface-variant: '#383244'
typography:
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  headline-xl-mobile:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-lg:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.08em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.1em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.14em
spacing:
  gutter: 1.5rem
  gutter-mobile: 0.75rem
  margin: 2.5rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The design system projects absolute computational authority, clinical precision, and urgent militaristic intelligence. Rooted in an elite cybernetic command-and-control paradigm, the interface blends tactical brutalism with high-end minimalism. It rejects superficial visual clutter in favor of crisp 1px delineation, calibrated telemetry, and intentional luminescence.

The emotional tone balances cold containment with high-voltage readiness. The user operates within an environment of uncompromising structural discipline, marked by technical indices, system section delineations (`// SEC_01`), and localized status indicators that simulate an advanced biomechanical operations bridge.

## Colors

The palette establishes an abyssal, deep-spectrum atmospheric container upon which bio-synthetic and telemetry-grade hues emerge with extreme luminescence.

- **Primary Background (`#0C0717`)**: Abyssal charcoal-violet serving as the base canvas of the terminal.
- **Surface Layer 1 (`#150B28`)**: Deep space-purple deployed across structured modular panels, data bays, and sub-grids.
- **Surface Layer 2 (`#1E1038`)**: Elevated containment tier integrating subtle optical diffusion and back-plate isolation.
- **Structural Delimiters (`#3B1D6E`)**: Faint electric-violet for 1px mechanical containment borders and active outlines. Secondary grid traces rely on `#28144A`.
- **Primary Accent (`#4DFF36`)**: Acidic EVA-01 phosphor green reserved for real-time telemetry pulses, mission-critical active states, live metrics, and primary operational triggers.
- **Secondary Alert (`#FF5900`)**: High-visibility mecha orange designating hazard parameters, system architecture nodes, telemetry classification, and warning overrides.
- **Type Hierarchies**: `#FFFFFF` (Titanium White) for high-contrast alphanumeric readouts and primary directives; `#B8B3C7` (Lavender Gray) for technical body documentation; `#6D657E` (Mist Gray) for system metadata, serial stamps, and passive coordinate grids.

## Typography

The typographic system operates in three specialized operational tiers:
1. **Command Structure (Space Grotesk)**: Geometric, structural, and commanding. Used exclusively for top-level headers, system status readouts, and numerical data highlights.
2. **Analysis Tier (Inter)**: Clean, non-distracting, high legibility. Designed for dense analytical paragraphs, telemetry reports, and configuration lists.
3. **Data Protocol Tier (JetBrains Mono)**: Mechanical, monospaced, strictly formatted. Handled for code signatures, coordinates, hexadecimal indices, section tokens (`// SEC_09`), timecodes, and operational status chips.

All labels and metadata must be transformed to uppercase with elevated letter spacing to sustain a strict military hardware aesthetic.

## Layout & Spacing

The framework relies on a rigid 12-column modular grid punctuated by tactical framing axes.

- **Breakpoints**: 
  - Mobile: `< 768px` (4 columns, `margin-mobile`, `gutter-mobile`)
  - Tablet: `768px - 1199px` (8 columns, 1.5rem margins, 1rem gutters)
  - Desktop: `≥ 1200px` (12 columns, `margin`, `gutter`)

- **Structural Boundaries**: Every major section must be demarcated by a 1px solid horizontal border in `#28144A`, interrupted by explicit section identifiers (e.g., `// SEC_02 // SYSTEM_MONITOR`) positioned in `label-sm` with a background knockout.
- **Rhythm**: Element spacing uses exact binary multiples (4px base grid). Containers avoid soft floating whitespace; content is docked flush to grid lines, mimicking modular instrument rack architectures.

## Elevation & Depth

This system intentionally rejects traditional blurred drop shadows. Hierarchy is achieved strictly through tactical stacking, optical transillumination, and surgical boundary contrast:

- **Base Field**: Level 0 canvas at `#0C0717`.
- **Modular Shells**: Level 1 surfaces at `#150B28` framed with crisp 1px borders of `#28144A`.
- **Active Glass Containment**: Level 2 containers employ `#1E1038` with 80% opacity and an 8px backdrop blur (`backdrop-filter: blur(8px)`). Surfaces are sealed with a 1px solid rim of `#3B1D6E`.
- **Luminescence Projection**: Interactive and emergency elements project functional glow rather than shadows. Active elements emit zero-offset, high-density edge radiation: `0 0 12px rgba(77, 255, 54, 0.35)` for acid green primary states, and `0 0 12px rgba(255, 89, 0, 0.4)` for mecha orange hazard parameters.
- **Micro-Patterns**: Elevated cards feature corner bracket ticks (4px x 4px outer markers) and 45-degree diagonal hazard striping within select 4px status banners.

## Shapes

The geometric philosophy is strictly 0px sharp. Rounding is eliminated across all UI surfaces, inputs, buttons, badges, and modals to convey engineered mechanical precision.

- **Chamfered Geometries**: Primary action modules and critical modals utilize a 45-degree angled corner cutout (clipped polygon: `polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)`).
- **Precision Brackets**: Terminal panels and data blocks utilize 1px mechanical crosshairs, boundary ticks, and grid corner markers (`+`, `L`, `┘`) to frame technical viewports.

## Components

### Buttons
- **Primary (EXECUTE)**: Background `#4DFF36`, color `#0C0717`, font `JetBrains Mono` 12px bold, uppercase. 1px border `#4DFF36`. Chamfered top-right corner (8px). Hover state triggers brightness increase and green ambient glow (`0 0 16px rgba(77, 255, 54, 0.6)`).
- **Secondary (ALERT / ARCHITECTURE)**: Background `transparent`, color `#FF5900`, 1px border `#FF5900`. Hover state fills with `rgba(255, 89, 0, 0.15)` with orange rim illumination.
- **Ghost Tactical**: Background `rgba(30, 16, 56, 0.6)`, color `#B8B3C7`, 1px border `#3B1D6E`. Hover state shifts border to `#4DFF36` and text to `#FFFFFF`.

### Chips & Badges
- **Status Chips**: Height 20px, font `JetBrains Mono` 10px, uppercase, tracking `0.14em`. Padding `0 6px`. Sharp 0px borders.
- **Variants**:
  - `SYNC RATIO / NORMAL`: Border 1px `#4DFF36`, background `rgba(77, 255, 54, 0.08)`, text `#4DFF36`. Features a 4px flashing square indicator.
  - `HAZARD / OVERRIDE`: Border 1px `#FF5900`, background `rgba(255, 89, 0, 0.12)`, text `#FF5900`.

### Data Cards & Modular Panels
- Background `#150B28` with optional glass containment `#1E1038`.
- 1px continuous border in `#3B1D6E`.
- Card headers incorporate a fixed 24px utility bar featuring an uppercase category stamp, an absolute-positioned serial marker (`ID: 01-SYS`), and a 1px divider in `#28144A`.

### Input Fields
- Background `#0C0717`, 1px border `#3B1D6E`, typography `JetBrains Mono` 14px in `#FFFFFF`.
- Placeholder text in `#6D657E`.
- Focus state switches border to `#4DFF36` with a subtle inside glow, accompanied by a blinking vertical terminal block cursor (`█`).

### Lists & Telemetry Feeds
- Continuous table-like rows separated by 1px `#28144A`.
- Left-aligned timestamp in `JetBrains Mono` (`#6D657E`), central log stream in `Inter` (`#B8B3C7`), right-aligned binary/hex status in `#4DFF36` or `#FF5900`.

### Checkboxes & Radios
- Sharp 0px squares (14px x 14px). Border 1px `#3B1D6E`, background `#0C0717`.
- Checked state: Interior solid fill `#4DFF36` inset by 2px with an inner black void. Radios maintain the same square form-factor, labeled internally with a miniature cross (`+`).

### Specialized Telemetry Modules
- **Sync-Pulse Visualizer**: Dynamic audio/wave bar charts rendered in `#4DFF36` with decaying peak hold markers.
- **Hazard Pattern Rail**: 6px-tall alternating 45° diagonal warning stripes of `#FF5900` and `#0C0717` used above high-risk action groups and system critical cutoffs.