PRD: Website Design 

Goal: Provide clear architectural guidance for building a premium, minimal website using black, white, and dark blue palette with Noto Sans typography.

References

    thisisitstudio.in 

    dreamlaunch.studio 

    https://www.joinvalley.co/


1. Core Design Principles (Non-Negotiable)
1.1 Premium Minimalism

    Philosophy: "Remove until it breaks, then add back the essentials"

    No gradients, no shadows, no borders unless absolutely necessary

    Maximum whitespace - when in doubt, add more space

    Purposeful restraint in animations and effects

1.2 Color Strategy

    Primary Colors: #FFFFFF (White), #000000 (Black), #0A192F (Dark Navy Blue)

    Usage Rules:
        White: Primary backgrounds
        Black: Primary text, essential accents
        Dark Blue: Key interactive elements, important highlights only

    Neutral Grays: Derived from black with opacity (e.g., rgba(0,0,0,0.1) to rgba(0,0,0,0.6))

    No other colors allowed

1.3 Whitespace Philosophy

    Vertical rhythm: Use consistent, generous spacing between all elements

    Section separation: At least 120px between major sections on desktop

    Content breathing room: Text blocks should never feel cramped

    Edge-to-edge: Some elements should break the container for visual interest

2. Typography System (Noto Sans)
2.1 Font Implementation

    Primary font: Noto Sans (weights: 300, 400, 500, 600)

    Loading strategy: Subset Latin, preload, font-display: swap

    Fallback stack: 'Noto Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif

2.2 Scale & Hierarchy

    Desktop:
        H1: 56px (3.5rem) / 400 weight / 1.1 line-height
        H2: 36px (2.25rem) / 500 weight / 1.2 line-height
        H3: 24px (1.5rem) / 500 weight / 1.3 line-height
        Body: 18px (1.125rem) / 400 weight / 1.6 line-height
        Small: 14px (0.875rem) / 400 weight / 1.5 line-height

    Mobile:
        H1: 40px (2.5rem)
        H2: 28px (1.75rem)
        H3: 20px (1.25rem)
        Body: 16px (1rem)

2.3 Typography Rules

    Maximum line length: 65 characters for body text

    Minimum contrast: AAA compliance (7:1 ratio)

    Letter spacing: -0.01em for headlines, 0 for body

    No text transforms (no uppercase for styling)

3. Layout Architecture
3.1 Grid System

    Primary layout: CSS Grid for major sections

    Content container: 1200px max-width, centered

    Breakpoints:
        Mobile: < 768px
        Tablet: 768px - 1024px
        Desktop: > 1024px

    Grid patterns to implement:
        Full-width hero
        Centered content blocks
        2-column split (text + visual)
        3-column feature grid
        4-column process flow

3.2 Spacing System

    Base unit: 8px

    Scale: 8, 16, 24, 32, 40, 48, 64, 80, 96, 128, 160, 192, 256

    Implementation: CSS custom properties for consistency

    Vertical rhythm: Maintain consistent spacing between all elements

4. Component Specifications
4.1 Navigation

    Position: Fixed, top

    Background: White with slight transparency (95%)

    Logo: Dark blue, left-aligned

    Links: Black, right-aligned, minimal hover effect

    CTA Button: Dark blue fill, white text

    Mobile: Hamburger menu with full-screen overlay

4.2 Hero Section

    Layout: Full viewport height (100vh)

    Content: Centered vertically and horizontally

    Background: Pure white

    Typography: H1 + body text + CTA button

    Spacing: Generous padding (min 80px top/bottom)

4.3 Content Sections

A. Problem Statement

    Layout: Full-width background (light gray)

    Content: Headline + 3 feature cards

    Cards: Text only, no icons, subtle hover

B. Process Flow

    Layout: Horizontal timeline (4 steps)

    Visual: Number + title + description

    Connection: Thin gray lines between steps

    Mobile: Vertical stack

C. Founder Testimonials

    Layout: 2-column grid

    Cards: Quote + founder details

    Visual: No images, text-only elegance

    Interaction: Optional fade animation

D. Team Section

    Layout: Split screen (50/50)

    Left: Founder photos (black & white, circular)

    Right: Founder story + philosophy

    Style: Personal but professional

4.4 Interactive Elements

Buttons:

    Primary: Dark blue background, white text

    Secondary: Transparent, dark blue border, dark blue text

    Size: 48px height, generous horizontal padding

    Hover: Slight opacity change (0.9) or subtle scale (1.02)

Links:

    Color: Dark blue

    Hover: Underline animation

    No visited state changes

Forms:

    Inputs: Bottom border only (1px gray)

    Focus: Bottom border becomes dark blue, 2px

    Labels: Above inputs, small text

    No rounded corners

5. Animation & Interaction Guidelines
5.1 Scroll Animations

    Fade-in: Elements appear as user scrolls

    Trigger: Once, when 50% of element is visible

    Duration: 600ms, smooth easing

    Stagger: 100ms between elements in a group

5.2 Micro-interactions

    Hover states: Subtle, not distracting

    Focus states: Visible for accessibility

    Loading: Minimal skeleton or spinner

    Transitions: 300ms for all interactive changes

5.3 Performance Rules

    Prefers-reduced-motion: Respect system settings

    GPU acceleration: Use transform/opacity for animations

    Debounce: Scroll and resize events

    Lazy load: Images below the fold

6. Technical Implementation Guidelines
6.1 Code Architecture

    CSS Methodology: BEM naming convention

    Organization: Component-based CSS

    Variables: CSS custom properties for theming

    No CSS frameworks (no Tailwind, Bootstrap)

6.2 Performance Targets

    Lighthouse Score: >95 Performance, >95 Accessibility

    Load Time: <2 seconds on 3G

    First Contentful Paint: <1 second

    Cumulative Layout Shift: <0.1

6.3 Browser Support

    Tier 1: Chrome, Safari, Firefox (latest 2 versions)

    Tier 2: Edge, Samsung Internet

    Progressive enhancement: Core content works everywhere

6.4 Asset Optimization

    Images: WebP format with JPEG fallback

    Fonts: WOFF2 with system font fallback

    SVGs: Inline when possible

    Lazy loading: All non-critical assets

7. Content Structure (Sections Order)

    Navigation (fixed)

    Hero (full viewport)

    The Problem (founder hiring pain points)

    Our Approach (psychology + process)

    Process Timeline (4-step visualization)

    Founder Stories (testimonials)

    The Team (founder backgrounds)

    Final CTA (conversion focus)

    Footer (minimal links)

8. Quality Standards
8.1 Code Quality

    Semantic HTML5 elements

    CSS organized by component

    No inline styles

    Comments for complex logic

    Responsive images (srcset)

8.2 Accessibility

    WCAG 2.1 AA compliance

    Keyboard navigation

    Screen reader friendly

    Proper heading hierarchy

    Color contrast compliance

8.3 Mobile Experience

    Touch-friendly targets (min 44px)

    No horizontal scrolling

    Readable text sizes

    Optimized images for mobile

9. Delivery Requirements
9.1 Development Environment

    Git repository with clear commit history

    Development and production builds

    Code review process

    Performance testing suite

9.2 Handoff Requirements

    Deployed staging environment

    Performance metrics report

    Cross-browser testing report

    Mobile testing on 3 devices

    Accessibility audit

Key Engineering Focus Areas:

    Whitespace execution - This is what makes it feel premium

    Typography precision - Noto Sans at specific sizes/weights

    Color restraint - Only black, white, dark blue

    Performance - Speed equals premium feel

    Interaction subtlety - Everything should feel intentional

Success Metrics:

    Users scroll through 80% of page

    Conversion rate >5% for "Start Brief"

    Mobile performance score >90

    Design team approval of "premium feel"

Priority: Build the minimal viable version first, then enhance with animations and polish. The foundation (layout, typography, spacing) must be perfect before adding any effects.
