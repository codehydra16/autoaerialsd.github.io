# Auto Aerials — React + Vite + TypeScript + Tailwind CSS

Drone photography landing page for car enthusiasts, using modern React stack.

## Tech Stack

- **React 18** — UI library
- **Vite 5** — build tool & dev server
- **TypeScript** — type safety
- **Tailwind CSS 3** — utility-first styling

## Project Structure

```
src/
  components/
    Nav.tsx         # Fixed navigation bar
    Hero.tsx        # Full-screen hero with CSS car + drone reticle
    HowItWorks.tsx  # 3-step process grid
    Portfolio.tsx   # Photo gallery grid
    Shows.tsx       # Upcoming car shows list
    Pricing.tsx     # 3-tier pricing cards
    Footer.tsx      # Footer with links
  hooks/
    useReveal.ts    # IntersectionObserver scroll-reveal hook
  App.tsx           # Root component
  main.tsx          # Entry point
  index.css         # Tailwind + global styles + animations
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Notes

- Google Fonts (Bebas Neue, Barlow, Barlow Condensed) are loaded via `index.html`
- All animations use CSS keyframes defined in `index.css`
- Scroll-reveal uses a custom `useReveal` hook with `IntersectionObserver`
- The hero car and drone reticle are pure CSS (no images needed)
