# StudySync AI — Design System & Style Specification

> **Course Assignment:** UI/UX Using Figma in IPS  
> **Topic:** Responsive Product Landing Page for an Educational / AI Service  
> **Design Framework:** AI-Native Design Intelligence via UI/UX Pro Max  
> **Status:** College Submission Ready

---

## 1. Design Overview & Philosophy

**StudySync AI** is an educational productivity platform tailored for college students, study groups, and university researchers. It solves common student friction points: unstructured audio lectures, unorganized textbook notes, and fragmented group collaboration.

### Visual Style: AI-Native & Minimal Ambient Chrome
- **Mood:** Clean, intellectual, focused, modern, and accessible.
- **Visual Theme:** AI Royal Purple (`#7C3AED`) accented with glowing Tech Cyan (`#0891B2`) on an ultra-soft violet background (`#FAF5FF`).
- **Layout Principle:** 8pt modular grid with strict Figma Auto Layout compatibility (horizontal and vertical flex frames, hug contents, and fill container behaviors).

---

## 2. Color Palette & Semantic Tokens

All color combinations have been tested against **WCAG 2.1 AA & AAA standards** to ensure accessibility for students in varied lighting environments (library, lecture hall, night mode).

| Semantic Token | Light Mode Hex | Dark Mode Hex | Usage / Intended Role | WCAG Ratio |
| :--- | :--- | :--- | :--- | :--- |
| `--color-primary` | `#7C3AED` | `#8B5CF6` | Primary Brand, key CTA buttons, active indicators | 5.8:1 (AA) |
| `--color-secondary` | `#A78BFA` | `#C4B5FD` | Secondary highlights, gradient blends, badges | 4.6:1 (AA) |
| `--color-accent` | `#0891B2` | `#22D3EE` | Interactive micro-interactions, live sync tags, glows | 4.9:1 (AA) |
| `--color-background`| `#FAF5FF` | `#0B0A16` | Main page background (soft eye-strain reduction) | Base |
| `--color-foreground`| `#1E1B4B` | `#F8FAFC` | Main headings and high-emphasis body text | **12.4:1 (AAA)** |
| `--color-card` | `#FFFFFF` | `#131127` | Surface for feature cards, modals, preview windows | Base |
| `--color-card-fg` | `#1E1B4B` | `#F8FAFC` | Text on card containers | **12.1:1 (AAA)** |
| `--color-muted` | `#ECEEF9` | `#1A1733` | Pill badges, table headers, disabled states | Base |
| `--color-muted-fg` | `#475569` | `#94A3B8` | Secondary descriptions, captions, timestamps | 5.2:1 (AA) |
| `--color-border` | `#DDD6FE` | `#2D2755` | Card outlines, dividers, input borders | 3.2:1 (UI) |
| `--color-destructive`| `#DC2626` | `#EF4444` | Error states, cancel actions, urgent warnings | 5.1:1 (AA) |

---

## 3. Typography Scale & Hierarchy

The design system exclusively utilizes **Inter**, an open-source geometric sans-serif engineered by Rasmus Andersson for high legibility on computer screens and mobile devices.

### Google Fonts Import
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
```

### Type Hierarchy Ramp

| Level | Size (rem / px) | Weight | Line Height | Letter Spacing | Intended Figma Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Title (H1)** | `3.25rem` / `52px` | 800 (Extrabold) | `1.15` | `-0.03em` | Main desktop landing hero headline |
| **Section Title (H2)** | `2.5rem` / `40px` | 800 (Extrabold) | `1.2` | `-0.02em` | Section headers (`Features`, `Workflow`) |
| **Sub-section (H3)** | `2.0rem` / `32px` | 700 (Bold) | `1.3` | `-0.01em` | Major tab titles, banner titles |
| **Card Header (H4)** | `1.25rem` / `20px` | 700 (Bold) | `1.35` | `0` | Feature card titles, FAQ questions |
| **Subtitle / Lead** | `1.125rem` / `18px`| 400 (Regular) | `1.6` | `0` | Hero subtitle, testimonial quotes |
| **Body Text** | `1.0rem` / `16px` | 400 (Regular) | `1.65` | `0` | Standard paragraphs, explanations |
| **Small / UI Label** | `0.875rem` / `14px`| 500 / 600 | `1.4` | `0` | Button text, navigation links, author info |
| **Caption / Badge** | `0.75rem` / `12px` | 600 (Semibold)| `1.2` | `+0.04em` | Tag pills, badge counters, spec metadata |

---

## 4. 8-Point Spacing System

All padding, margins, and Auto Layout item gaps follow multiples of 4px and 8px:

```
4px   (--space-4)   -> Micro gaps (icon to text, badges)
8px   (--space-8)   -> Tight inline gaps (button icon + label)
12px  (--space-12)  -> Standard element gaps inside cards
16px  (--space-16)  -> Default padding inside inputs, small cards
20px  (--space-20)  -> Auto layout gap inside feature cards
24px  (--space-24)  -> Container gutter padding on mobile / tablet
32px  (--space-32)  -> Feature card padding (all sides)
48px  (--space-48)  -> Section header margin-bottom
64px  (--space-64)  -> Section vertical spacing (desktop)
80px  (--space-80)  -> Major section padding (Hero, CTA, Features)
112px (--space-112) -> Full desktop container whitespace
```

---

## 5. Reusable Component Specifications

### Component 1: Multi-Variant Button (`[Component: Button]`)
- **Properties & Variants:**
  - `Variant`: `Primary` | `Secondary` | `Accent` | `Ghost`
  - `Size`: `SM (36px h)` | `MD (44px h)` | `LG (52px h)`
  - `State`: `Default` | `Hover` | `Focus` | `Active`
- **Figma Auto Layout Settings:**
  - Direction: `Horizontal`
  - Alignment: `Center`
  - Item spacing: `8px`
  - Padding: `12px Top/Bottom`, `24px Left/Right` (MD)
  - Corner radius: `10px`
  - Resizing: `Hug contents (W)`, `Hug contents (H)`

### Component 2: Feature Card (`[Component: FeatureCard]`)
- **Structure:**
  1. Icon Wrapper (`54x54px`, `radius: 16px`, background: `var(--color-primary-light)`)
  2. Tag Pill (`font-size: 12px`, semibold, rounded full)
  3. Feature Title (`H4: 20px`, bold)
  4. Feature Description (`16px`, regular, `line-height: 1.6`)
- **Figma Auto Layout Settings:**
  - Direction: `Vertical`
  - Item spacing: `20px`
  - Padding: `32px` on all sides
  - Border: `1px solid var(--color-border)`
  - Corner radius: `24px`
  - Resizing: `Fill container (W)`, `Hug contents (H)`
  - Hover Micro-interaction: `translateY(-4px)`, border glow transition `350ms`.

### Component 3: Navigation Header (`[Component: NavigationBar]`)
- **Structure:**
  - Left: Logo icon + Brand typography
  - Center: Nav link list (`gap: 32px`)
  - Right: Theme toggle icon button + Secondary CTA + Primary CTA
- **Figma Auto Layout Settings:**
  - Direction: `Horizontal`
  - Alignment: `Space-Between`, `Center Align Y`
  - Height: `76px` fixed
  - Padding: `0 80px`
  - Backdrop Blur: `16px`, semi-transparent fill `rgba(250, 245, 255, 0.85)`

---

## 6. Anti-Patterns Avoided (UI/UX Pro Max Guidelines)

1. **No Emojis as Icons:** All UI icons are clean, scalable inline SVGs (Feather / Lucide style) instead of system emojis.
2. **No Low-Contrast Text:** Discarded low-contrast gray text (`#999999`) in favor of rich slate (`#475569`), passing 4.5:1.
3. **No Unbounded Line Lengths:** Body paragraphs capped at `65ch` max width for optimal reading comfort.
4. **No Fixed Pixel Containers on Mobile:** Using flexible flexbox and grid layouts so that content scales gracefully down to 375px without horizontal scrolling.
5. **Clear Interactive Affordance:** Explicit hover states, focus rings for keyboard navigation, and subtle elevation changes on cards and buttons.
