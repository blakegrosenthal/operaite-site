# operaiteconsulting-site

Production-ready marketing website for OperAIte, built with Next.js App Router and TypeScript.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Copy env template:

```bash
cp .env.example .env.local
```

3. Start development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Set these in `.env.local` (and in your deployment provider):

- `NEXT_PUBLIC_BOOKING_URL`: Booking URL used in every CTA. This should always be the
  Dub short link (`https://go.operaiteconsulting.com/book`), never the booking tool
  directly, so the tool can be swapped without a redeploy.
- `NEXT_PUBLIC_CONTACT_EMAIL`: Contact email used in mailto links and contact form.
- `NEXT_PUBLIC_GA_ID`: Google Analytics Measurement ID (for example `G-XXXXXXXXXX`).

If a variable is missing, the app falls back to safe defaults for local development.

## Build for Production

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this project to a Git repository.
2. In Vercel, import the repository as a new project.
3. Add environment variables:
   - `NEXT_PUBLIC_BOOKING_URL`
   - `NEXT_PUBLIC_CONTACT_EMAIL`
   - `NEXT_PUBLIC_GA_ID`
4. Deploy. Vercel will run `npm install` and `npm run build` automatically.

## Project Notes

- SEO metadata and Open Graph tags are defined in [`app/layout.tsx`](./app/layout.tsx).
- `sitemap.xml` and `robots.txt` are generated via App Router route files:
  - [`app/sitemap.ts`](./app/sitemap.ts)
  - [`app/robots.ts`](./app/robots.ts)
- ROI calculator logic is isolated in [`lib/roi-calculator.ts`](./lib/roi-calculator.ts).


---

## Status — reviewed 2026-08-16

**✅ THIS IS THE LIVE SITE.** Source for operaiteconsulting.com.

Moved here 2026-08-16 from `Documents/Claude OperAIte/2026-06-12-operaite-site-v2`, where it
had been sitting alone in an iCloud-synced folder named like a dated document rather than a
project.

- **Remote:** https://github.com/blakegrosenthal/operaite-site (branch `main`, working tree clean, nothing unpushed)
- **Last commit at move:** 2026-08-12 — "Remove the duplicate SMS consent line above the contact form"
- **Has:** privacy + terms pages (required for A2P 10DLC carrier registration), self-check page, case-studies, services, contact, about

**A dead April 2026 version** previously sat in this folder under the same name — no
privacy/terms pages, newest edit 2026-04-07. Retired to `~/Code/_to_delete/` along with
`operaiteconsulting-site.zip`. If you ever find another `operaiteconsulting-site`, this is
the one that deploys.
