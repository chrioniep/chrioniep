# onion

Active recall for serious learners.

## Stack

- **Next.js 15** (App Router, Turbopack dev server)
- **React 19** + **TypeScript** (strict)
- **Tailwind CSS v4** — design tokens as CSS custom properties in `app/globals.css`
- **shadcn/ui** — themed to the Onion design system, no defaults
- **Zustand** — session, focus, and timer state
- **TanStack Query** — server state
- **next-auth v5** — Google + email/password
- **MSW v2** — API mocking in dev and tests
- **Framer Motion** — breathing visualizer + layer transitions
- **Storybook 8** — component isolation
- **Vitest + RTL** — unit/component tests
- **Playwright** — end-to-end on the session flow

## Getting started

```bash
cp .env.example .env.local
# Fill in AUTH_SECRET, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET

npm install
npm run dev
```

App: http://localhost:3000
Storybook: `npm run storybook` → http://localhost:6006

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Dev server with Turbopack |
| `npm run build` | Production build |
| `npm run type-check` | TypeScript check (no emit) |
| `npm run lint` | ESLint |
| `npm run test` | Vitest unit/component tests |
| `npm run test:e2e` | Playwright end-to-end |
| `npm run storybook` | Storybook dev server |

## Directory structure

```
app/
  (marketing)/         # Landing, pricing, method
  (auth)/              # Sign-in, sign-up
  (onboarding)/        # Mission → upload → plan → first session
  (app)/               # Authenticated shell + all screens
  api/auth/            # NextAuth route handler
components/
  ui/                  # Themed shadcn primitives
  brand/               # Wordmark, LayerIndicator, ConcentricBreath, LayerProgress
  session/             # Session-specific components (wired per screen task)
  marketing/           # Landing/pricing components
lib/
  api/                 # Typed fetch client
  stores/              # Zustand (session, focus, timer)
  schemas/             # Zod schemas + mock factories
  auth.ts              # NextAuth config
  providers.tsx        # TanStack Query + next-themes
mocks/                 # MSW handlers (browser + node)
stories/               # Storybook stories
tests/                 # Vitest unit tests + Playwright e2e
```

## Design tokens

All tokens live in `app/globals.css` as CSS custom properties on `:root` (dark, default) and `[data-theme="light"]`. They map to Tailwind utilities via `@theme inline`.

Key utilities: `bg-bg`, `bg-bg-elev`, `bg-bg-soft`, `text-fg`, `text-muted`, `text-faint`, `text-accent`, `border-border`, `font-serif`, `font-sans`, `font-mono`.

No hardcoded hex values in components — tokens only. No shadows, no gradients, no glassmorphism.

## Auth

NextAuth v5 with Google OAuth and credentials (email + password). The credentials `authorize` function is a stub — wire it to the backend API when ready. Set `AUTH_SECRET`, `GOOGLE_CLIENT_ID`, and `GOOGLE_CLIENT_SECRET` in `.env.local`.

## API mocking

MSW is wired for both browser (dev) and Node (Vitest). Add handlers to `mocks/handlers.ts`. When the real backend is ready, point `NEXT_PUBLIC_API_URL` at it — no component changes required.
