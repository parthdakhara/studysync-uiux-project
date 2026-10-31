# StudySync AI — Frosted Glassmorphism Design System

> **Style Model:** `glassmorphism` & `spatial-ui-visionos` (Derived from UI/UX Pro Max Engine)  
> **Course:** UI/UX Using Figma in IPS  
> **Project:** StudySync AI Educational Landing Page  
> **Aesthetic:** VisionOS Frosted Glass + Ambient Aurora Lighting  
> **Status:** College Submission Ready

---

## 1. Glassmorphism Architecture & Visual Hierarchy

The interface implements **multi-layer optical glassmorphism**:

1. **Ambient Aurora Lighting Layer (Bottom-most, `z-index: -2`):**
   - Three large glowing radial orbs (Royal Violet `#7C3AED`, Cyan Tech `#0891B2`, and Neon Rose `#EC4899`) floating with a subtle 18–25s continuous loop.
2. **Glass Grain Texture Layer (`z-index: -1`):**
   - Micro-dot radial grain prevents color banding and enhances optical depth.
3. **Glass Surface Components (`z-index: 1–10`):**
   - Translucent surface: `rgba(255, 255, 255, 0.65)` (Light mode) and `rgba(22, 19, 45, 0.65)` (Dark mode).
   - Optical Backdrop Blur: `backdrop-filter: blur(24px) saturate(190%)`.
   - Specular Top Highlight: `box-shadow: inset 0 1px 1px 0 rgba(255, 255, 255, 0.85)` simulating light reflecting off the top beveled edge of a glass pane.
   - Glass Border: `1px solid rgba(255, 255, 255, 0.7)`.

---

## 2. Design Tokens: Glass & Color Palette

| Token Name | Light Value | Dark Value | Optical Function |
| :--- | :--- | :--- | :--- |
| `--glass-surface` | `rgba(255, 255, 255, 0.65)` | `rgba(22, 19, 45, 0.65)` | Primary card and panel surface |
| `--glass-surface-subtle` | `rgba(255, 255, 255, 0.40)` | `rgba(22, 19, 45, 0.45)` | Inner nested context cards |
| `--glass-surface-hover` | `rgba(255, 255, 255, 0.82)` | `rgba(30, 26, 60, 0.82)` | Hover state elevation |
| `--glass-border` | `rgba(255, 255, 255, 0.70)` | `rgba(255, 255, 255, 0.14)` | Crisp beveled glass edge |
| `--glass-blur` | `24px` | `28px` | Optical diffusion |
| `--glass-saturate` | `190%` | `180%` | Color vibrancy through glass |
| `--color-primary` | `#7C3AED` | `#8B5CF6` | Primary action button, active nav |
| `--color-accent` | `#0891B2` | `#22D3EE` | Live sync pill, glowing accents |
| `--color-foreground` | `#1E1B4B` | `#F8FAFC` | Primary text (WCAG 12.4:1 AAA) |
| `--color-muted-fg` | `#475569` | `#94A3B8` | Subtitle and captions (WCAG 5.2:1 AA) |

---

## 3. Reusable Glass Components (Figma Auto Layout)

### Component 1: Glass Button (`[Component: GlassButton]`)
- **Auto Layout:** Horizontal (`→`), Align Center, Item Gap `8px`
- **Padding:** Vertical `12px`, Horizontal `24px` (Corner Radius: `12px`)
- **Glass Specular:** `inset 0 1px 1px 0 rgba(255, 255, 255, 0.45)`
- **Variants:** Primary Gradient Glass, Secondary Frosted Glass, Accent Cyan Glass

### Component 2: Frosted Feature Card (`[Component: FrostedFeatureCard]`)
- **Auto Layout:** Vertical (`↓`), Item Gap `20px`
- **Padding:** `32px` all sides (Corner Radius: `26px`)
- **Optical Treatment:** `backdrop-filter: blur(24px)`, specular inner stroke, 3D lift on hover with specular shine glide animation.

### Component 3: Floating Glass Navigation Bar (`[Component: GlassNavbar]`)
- **Auto Layout:** Horizontal (`→`), Distribute Space-Between, Align Center Y
- **Dimensions:** Width `1440px` (or fill container), Height `68px` fixed floating pill
- **Padding:** `0 24px`, Corner Radius `26px`, Backdrop Blur `28px`
