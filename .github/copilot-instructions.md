# Copilot Instructions for MazinMind Digital

This file provides guidance for AI assistants (Copilot, Claude, etc.) working in this repository.

## What This Project Does

MazinMind Digital is a marketing and AI automation consultancy website (https://mazinmind.digital). This repository powers the marketing site and conversion-focused landing pages. Content focuses on helping small businesses capture leads, automate follow-up, and book appointments with AI-powered workflows.

## Build, Test, and Lint Commands

### Development
```bash
npm install          # Install dependencies
npm run dev          # Start local dev server (http://localhost:8080)
npm run build        # Create production bundle
npm run preview      # Preview production build locally (http://localhost:4173)
```

### Type Checking
```bash
npm run typecheck    # Check TypeScript in src/ and config files
```

### Testing

**Unit tests** (Vitest):
```bash
npm run test                  # Run all unit tests once
npm run test:unit:watch      # Run unit tests in watch mode
npm run test:unit:ui         # Run unit tests with UI dashboard
npm run test:unit:coverage   # Run with coverage report
```

**E2E tests** (Playwright on Chrome):
```bash
npm run test:e2e             # Run all e2e tests
npm run test:e2e:headed      # Run tests with browser UI visible
npm run test:e2e:ui          # Run tests with Playwright UI
npm run test:e2e:debug       # Run tests with Playwright debugger
npm run test:e2e:report      # View last test report
```

**Full test suite**:
```bash
npm run test:all             # Run all unit and e2e tests
```

### Linting
```bash
npm run lint         # Check TypeScript and React for lint violations
                     # (errors only; warnings are disabled for unused vars/params)
```

## Architecture & Code Organization

### Directory Structure

- **`src/pages/`** — Route pages and conversion-focused landing pages (each exported as default component)
- **`src/components/`** — Reusable UI components and page sections
  - `ui/` — Shadcn-style UI primitives and Radix UI wrappers (form inputs, dialogs, cards, etc.)
  - `home/` — Homepage sections (Hero, CTA, Services, FAQ, Newsletter, etc.)
  - `layout/` — Layout wrappers (header, footer, navigation)
  - `branding/` — Custom branding components (Logo, brand-specific icons)
  - `analytics/` — Tracking and analytics components (HubSpot integration)
- **`src/data/`** — Structured marketing data and page content (homeFaqs.ts, blogPosts.ts)
- **`src/lib/`** — Utility functions (scrollToId.ts, utils.ts)
- **`src/hooks/`** — Custom React hooks (use-mobile.tsx, use-toast.ts)
- **`src/assets/`** — Static images and media files
- **`scripts/`** — Build-time generation (generate-sitemap.mjs)

### Routing

React Router with nested routes defined in `src/App.tsx`. Key routes:
- `/` → Homepage (Index.tsx)
- `/services` → Services overview
- `/services/ai-automation`, `/services/ai-marketing`, `/services/devops-cloud` → Service landing pages
- `/ai-automation-contractors`, `/lead-follow-up-automation`, `/ai-receptionist` → Product-specific landing pages
- `/blog` → Blog listing, `/blog/:slug` → Individual blog posts
- `/about`, `/contact`, `/faq`, `/privacy`, `/terms` → Standard pages

**Rule:** All custom routes must be added **above** the `*` catch-all route in App.tsx.

### Data Flow

Page content is defined in `src/data/` as TypeScript objects (e.g., homeFaqs.ts, blogPosts.ts). Pages import and render this data. This keeps marketing copy separate from component logic and enables easy bulk updates.

### Component Composition Pattern

Components typically follow this pattern:
```tsx
export function ComponentName() {
  return (
    <section className="...">
      {/* Background effects, animated orbs, gradient overlays */}
      <div className="absolute inset-0 ...">...</div>
      
      {/* Content container with relative z-10 */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Main content */}
      </div>
    </section>
  );
}
```

## Key Conventions

### TypeScript & Type Checking

- **Strict mode is OFF** in tsconfig.app.json (`"strict": false`)
- **Unused variables/params are not flagged** (`noUnusedLocals: false`, `noUnusedParameters: false`)
- Path alias `@/` resolves to `src/`
- Tests can import with `@/` alias (Vitest is configured to recognize it)

### Styling & Tailwind CSS

**Custom Design System:**
- Color palette uses CSS variables in HSL format (--primary, --accent, --electric, --neon, --warning, etc.)
- Custom animations: `fade-in`, `scale-in`, `slide-in-right`, `glow-pulse`, `accordion-down/up`
- Custom fonts: `Bebas Neue` (display/headings), `Outfit` (body)
- Uses Tailwind's prefix-less approach (no `prefix` in config)

**Key Custom Classes to Know:**
- `bg-gradient-primary` — Primary gradient background
- `grid-pattern` — Subtle grid pattern overlay
- `animate-float` — Custom floating animation (with `animationDelay` for staggering)
- **Neon/Electric Effects:** Components use blur, opacity, and color overlays for atmospheric design (see CTASection.tsx for pattern)

### UI Component Library

Uses **shadcn-style** primitives built on **Radix UI**. All UI components are in `src/components/ui/` and follow Radix patterns:
- Accessible, headless components (Button, Card, Dialog, Select, etc.)
- Consistent styling via Tailwind
- Theme-aware (dark mode support via CSS variables)

**Common imports:**
```tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
```

### Forms & Validation

- Uses **React Hook Form** for form handling
- Uses **Zod** for schema validation (@hookform/resolvers integrates them)
- Components use controlled inputs with form context

### Routing & Navigation

- React Router v6 (`react-router-dom@6.30.5`)
- Links use `<Link>` from react-router-dom, not `<a>` tags
- SPA tracking via custom HubSpot integration component (src/components/analytics/HubSpotSpaTracking.tsx)

### State Management & Data Fetching

- **TanStack React Query** (@tanstack/react-query) for server state and caching
- Query client configured in App.tsx with default settings
- Local state via React hooks

### Animations & Effects

- Tailwind animations for transitions
- Lucide React for icons
- Embla Carousel for carousels
- Custom animated backgrounds (gradient blobs, grid patterns)

### Analytics & Tracking

- **Google Analytics** via Google Tag Manager
- **HubSpot** for lead forms, forms tracking, and SPA navigation tracking
- HubSpot forms embedded via script tags in public/index.html
- SPA route changes tracked by HubSpotSpaTracking component

### Deployment

- Deployed to **GitHub Pages** (https://mazinmind.digital)
- Build output is in `dist/`
- Post-build script generates sitemap (scripts/generate-sitemap.mjs)

### CSP Headers

Content Security Policy is strict and includes allowances for:
- Google Analytics & Tag Manager
- HubSpot (forms, tracking, API calls)
- Custom fonts from Google Fonts
- Unsafe-inline for scripts and styles (needed for embedded HubSpot forms)

## Testing Notes

- **Unit tests:** Tests go in `src/**/*.test.ts` or `src/**/*.spec.ts`, use Vitest + React Testing Library
- **E2E tests:** Tests go in `e2e/` directory, use Playwright
- Unit tests run against jsdom environment
- E2E tests run against `http://127.0.0.1:4173` (previewed production build)
- E2E tests use only Chromium (single browser)

## Important Details

- **The site is NOT a Lovable-generated project** and should not be edited through Lovable
- **Lovable-tagger** is installed for development but is not a core dependency
- Pages are conversion-focused with intentional language around business outcomes and practical automation value
- Repository enforces security and data privacy (see SECURITY.md for vulnerability reporting)
