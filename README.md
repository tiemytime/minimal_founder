# Premium Minimal Website

Pure HTML, CSS, and vanilla JavaScript. No frameworks, no build tools, no dependencies.


## What's Inside

```
assets/
  css/
    main.css, variable.css, typography.css, layout.css
    components/ (navigation, hero, buttons, cards, etc.)
  js/
    navigation.js, scroll-animation.js, scroll-progress.js
```


## Running It

Open `index.html` in a browser. That's it.

Or if you want a server:
```bash
python -m http.server 8000
```


## Design Decisions

**Colors:** Three is enough. More would be noise.

**Typography:** Noto Sans at specific sizes. H1 is 56px/400 weight. Body is 18px. Every size matters.

**Spacing:** 8px base unit. Scale: 8, 16, 24, 32, 40, 48, 64, 80, 96, 128, 160, 192, 256. Consistent rhythm.

**Animations:** 600ms for scroll effects, 300-400ms for interactions. Cubic-bezier timing. Respects reduced-motion.

**No shadows:** Depth through borders and transforms instead. Cleaner and faster.

**No gradients:** Solid colors only. Forces intentional design.


