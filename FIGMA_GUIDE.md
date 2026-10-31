# Figma Auto Layout Implementation Guide — StudySync AI

This step-by-step guide explains how to construct or recreate the **StudySync AI** landing page in Figma using **Auto Layout**, **Component Sets**, and **Design Tokens**, exactly as required by the college project rubric.

---

## Step 1: Create the Canvas & Base Frames

1. Open Figma and create a new design file named **`UIUX_Project_StudySync_LandingPage`**.
2. Press <kbd>F</kbd> and select **Desktop (1440 × 1024)** from the right properties panel.
3. Rename the frame to: `🖥️ Desktop — 1440px`.
4. Set the frame background color to: `#FAF5FF`.

---

## Step 2: Set Up Global Color & Typography Styles in Figma

### 1. Color Styles
Select the canvas, open the right sidebar **Local Styles**, click `+` on Color:
- `Primary`: `#7C3AED`
- `Primary/Light`: `#EDE9FE`
- `Secondary`: `#A78BFA`
- `Accent/CTA`: `#0891B2`
- `Accent/Light`: `#CFFAFE`
- `Background`: `#FAF5FF`
- `Foreground/Text`: `#1E1B4B`
- `Surface/Card`: `#FFFFFF`
- `Muted/Text`: `#475569`
- `Border/Divider`: `#DDD6FE`

### 2. Typography Styles
Create text styles using font **Inter**:
- `Heading/H1` — Inter, Extrabold 800, 52px, Line height 115%, Letter spacing -3%
- `Heading/H2` — Inter, Extrabold 800, 40px, Line height 120%, Letter spacing -2%
- `Heading/H3` — Inter, Bold 700, 32px, Line height 130%, Letter spacing -1%
- `Heading/H4 (Card)` — Inter, Bold 700, 20px, Line height 135%, Letter spacing 0%
- `Body/Lead` — Inter, Regular 400, 18px, Line height 160%
- `Body/Default` — Inter, Regular 400, 16px, Line height 165%
- `Body/Small` — Inter, Medium 500, 14px, Line height 140%
- `Caption/Badge` — Inter, Semibold 600, 12px, Line height 120%, Letter spacing +4%

---

## Step 3: Create Reusable Component #1 — Button Set

1. Press <kbd>T</kbd> and type `Button Label`. Apply text style `Body/Small`.
2. Add an SVG icon next to the text (e.g. arrow or plus).
3. Select both the icon and text, then press <kbd>Shift</kbd> + <kbd>A</kbd> to add **Auto Layout**.
4. In the Auto Layout panel:
   - **Direction:** Horizontal Layout (`→`)
   - **Alignment:** Center (`AlignCenter`)
   - **Spacing between items:** `8px`
   - **Horizontal padding:** `24px`
   - **Vertical padding:** `12px`
   - **Corner radius:** `10px`
5. Style the variants:
   - **Primary Variant:** Fill `#7C3AED`, Text `#FFFFFF`, Drop shadow `0px 4px 14px rgba(124, 58, 237, 0.35)`.
   - **Secondary Variant:** Fill `#FFFFFF`, Stroke `1px #DDD6FE`, Text `#1E1B4B`.
   - **Accent Variant:** Fill `#0891B2`, Text `#FFFFFF`.
   - **Ghost Variant:** Fill none, Stroke none, Text `#475569`.
6. Select all 4 buttons, click the component dropdown in the top bar, and choose **Create Component Set**.
7. Name properties: `Type` (Primary, Secondary, Accent, Ghost) and `Size` (SM, MD, LG).

---

## Step 4: Create Reusable Component #2 — Feature Card

1. Draw an icon container frame (`54 × 54px`, Corner radius `16px`, Fill `#EDE9FE`, icon color `#7C3AED`).
2. Create a Badge pill (`Auto Layout Horizontal`, padding `4px 10px`, radius `999px`, Fill `#EDE9FE`, Text `12px Semibold #7C3AED`).
3. Add a Title text (`Heading/H4`: 20px Bold `#1E1B4B`).
4. Add Description text (`Body/Default`: 16px Regular `#475569`).
5. Select the icon, badge, title, and description. Press <kbd>Shift</kbd> + <kbd>A</kbd> to create an Auto Layout frame.
6. Configure the Card Auto Layout:
   - **Direction:** Vertical Layout (`↓`)
   - **Alignment:** Top Left
   - **Spacing between items:** `20px`
   - **Padding:** `32px` all sides
   - **Background:** `#FFFFFF`
   - **Stroke:** `1px #DDD6FE`
   - **Corner radius:** `24px`
   - **Drop shadow:** `0px 4px 6px -1px rgba(124, 58, 237, 0.08)`
   - **Resizing:** Set horizontal sizing to `Fill container`.
7. Turn into a Master Component: Select frame -> press <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>K</kbd> (or <kbd>Cmd</kbd> + <kbd>Option</kbd> + <kbd>K</kbd> on Mac).

---

## Step 5: Create Reusable Component #3 — Navigation Header

1. Create a Logo group: Brand Icon (`36 × 36px`, rounded `10px`, gradient fill) + Text `StudySync` (20px Extrabold).
2. Create Navigation Links: Place 5 text elements (`Features`, `Components`, `Workflow`, `Reviews`, `FAQ`) in an Auto Layout row with `32px` gap.
3. Place an instance of your Theme Toggle Button + Primary CTA Button on the right.
4. Select Logo, Nav Links, and Right CTA Buttons. Press <kbd>Shift</kbd> + <kbd>A</kbd>.
5. In Auto Layout properties:
   - **Direction:** Horizontal Layout (`→`)
   - **Alignment:** Align Vertical Center
   - **Distribution:** Space between (or Left aligned with logo and buttons pinned)
   - **Width:** `1440px` (or `Fill container`)
   - **Height:** `76px` fixed
   - **Horizontal padding:** `80px`
   - **Background:** `rgba(250, 245, 255, 0.85)` with **Background Blur** `16px`.
   - **Border Bottom:** `1px solid #DDD6FE`.
6. Convert to Master Component (`NavigationBar`).

---

## Step 6: Assemble the Full Landing Page

Apply Auto Layout to the parent `🖥️ Desktop — 1440px` frame:
- **Direction:** Vertical (`↓`)
- **Spacing between sections:** `0px` (sections use internal padding)
- **Align:** Center
- **Width:** `1440px Fixed`
- **Height:** `Hug contents`

Stack the sections sequentially:
1. `NavigationBar` instance (`1440px` wide, `76px` high).
2. `Hero Section Frame` (Padding: `80px Top/Bottom`, `80px Left/Right`):
   - Left column: Announcement badge, H1 Heading, Subtitle, CTA Button Row, Avatar Stack.
   - Right column: Interactive Product Mockup window with lecture audio pill and AI synthesis card.
3. `Component Showcase Section Frame` (Padding: `64px 80px`, Background `#FFFFFF`):
   - Grid of 3 inspection cards showing the Button Set, Feature Card, and Navigation Header with Auto Layout metadata labels.
4. `Features Section Frame` (Padding: `80px 80px`):
   - Title + Subtitle container (`AlignCenter`).
   - 3 Feature Card instances in a Horizontal Auto Layout frame with `32px` gap, each set to `Fill container`.
5. `Interactive Workflow Section Frame` (Padding: `80px 80px`, Background `#FFFFFF`):
   - Tab pills row + Split layout preview.
6. `Testimonials Section Frame` (Padding: `80px 80px`):
   - 3 Student review cards in an Auto Layout row with `32px` gap.
7. `FAQ Section Frame` (Padding: `80px 80px`, Background `#FFFFFF`):
   - Vertical list of 4 accordion question frames (`gap: 16px`).
8. `CTA Banner Frame` (Padding: `64px 48px`, Gradient Fill `#7C3AED` to `#5B21B6`, Radius `24px`).
9. `Footer Frame` (Padding: `64px 80px 32px 80px`, 4-column layout).

---

## Step 7: How to Demonstrate Auto Layout to Your Professor

When presenting to your evaluator or professor:
1. **Show Responsive Resizing:** Select the Desktop frame and drag its right border from `1440px` down to `1024px`. Show how all 3 feature cards shrink equally because their width is set to **`Fill container`**.
2. **Show Component Instances:** Edit the text or color of the Master Button component; demonstrate how all buttons across the hero, header, and CTA banner update simultaneously.
3. **Show Auto Layout Padding:** Type additional text into a button; demonstrate how the button expands smoothly while maintaining exactly `24px` left/right padding and `12px` top/bottom padding.
