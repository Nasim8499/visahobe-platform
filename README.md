# VisaHOBe Platform

Public website for VisaHOBe PTE. LTD., rebuilt in Next.js 14 with an iOS 26
"Liquid Glass" design system, white theme by default and a working dark theme.

Live preview (static export on GitHub Pages):
https://nasim8499.github.io/visahobe-platform/

## Stack

- Next.js 14.2 (App Router) + TypeScript, strict mode
- Tailwind CSS 3.4 with a custom iOS design token layer
- Framer Motion for entrance and spring interactions
- Radix UI primitives (Accordion, Dialog) styled as iOS components
- Lucide icons
- next-themes for the light/dark switch

## Design system

| Token | Light | Dark |
| --- | --- | --- |
| Background | `#FFFFFF` | `#0b0d10` |
| Card | `#F9FAFB` | `#131820` |
| Glass surface | white 62% + blur 24px + saturate 190% | slate 55% + blur 28px |
| Primary | iOS Blue `#007AFF` | `#0A84FF` |
| Accent | Playroll Purple `#7A5CFA` | `#8B6DFF` |

Radius: 20px cards, 12px buttons, 50px pills, 28px sheets.
Type scale: 34 / 28 / 22 / 20 / 17 / 15 / 13 / 12 (SF Pro stack).
Layout: 1280px max width, 24px gutters, 120px section rhythm, mobile first.
Glass surfaces use a specular gradient plus an inset highlight, not just blur,
so they read as glass rather than frosted boxes.

## Routes

- `/` homepage: hero, company snapshot, who we are, services, destinations, process, testimonials, team, FAQ, contact
- `/visa/[slug]` for singapore, bangladesh, serbia, russia, belarus: visa types and fees table, requirements, interactive document checklist (persisted in localStorage), compliance and partner badges
- `/tools/eligibility` client-side eligibility screening with reasons
- `/legal/privacy`, `/legal/terms`, `/legal/refund`, `/legal/anti-bribery`
- `/sitemap.xml`, `/robots.txt`, custom 404

Compliance: every visa page and the footer carry the "decisions are made by
government authorities" notice. Serbia, Russia and Belarus are labelled
partner-supported, with no claim of a local office.

## Local development

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm run export:pages # static export into ./out
```

## Deploying to Vercel

1. Import `Nasim8499/visahobe-platform` in Vercel.
2. Framework preset: Next.js. No build command changes needed.
3. Environment variables currently used:
   - `NEXT_PUBLIC_FORM_ENDPOINT` (optional) — if set, the contact form POSTs JSON
     to this URL. If unset, the form composes a prefilled email instead, so no
     enquiry is ever silently lost.
4. Add the custom domain in Vercel, then update `site.url` in `lib/utils.ts`.

## Static preview on GitHub Pages

`npm run export:pages` writes `./out`. The `docs/` folder in this repo holds an
export built with `NEXT_BASE_PATH=/visahobe-platform`, served by Pages from
`main` → `/docs`. Re-run the export and copy `out/*` into `docs/` to refresh it.

## Not yet wired (needs account keys, not code)

These require credentials that only the account owner can issue:

- Auth (Clerk or Firebase) with email OTP, Google and Apple sign-in
- Postgres/Firestore database and document storage
- Stripe checkout and invoices
- Crisp/Tawk live chat and the custom admin chat inbox
- `/dashboard` and `/admin` role-protected routes

The content layer in `lib/content.ts` is already shaped for the database schema
(countries, visa types, fees, documents, requirements) so the CMS can swap in
without touching page components.
