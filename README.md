# operaiteconsulting-site

Production-ready marketing website for Operaite Consulting, built with Next.js App Router and TypeScript.

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

- `NEXT_PUBLIC_CALENDLY_URL`: Calendly booking URL used in CTAs.
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
   - `NEXT_PUBLIC_CALENDLY_URL`
   - `NEXT_PUBLIC_CONTACT_EMAIL`
   - `NEXT_PUBLIC_GA_ID`
4. Deploy. Vercel will run `npm install` and `npm run build` automatically.

## Project Notes

- SEO metadata and Open Graph tags are defined in [`app/layout.tsx`](./app/layout.tsx).
- `sitemap.xml` and `robots.txt` are generated via App Router route files:
  - [`app/sitemap.ts`](./app/sitemap.ts)
  - [`app/robots.ts`](./app/robots.ts)
- ROI calculator logic is isolated in [`lib/roi-calculator.ts`](./lib/roi-calculator.ts).

