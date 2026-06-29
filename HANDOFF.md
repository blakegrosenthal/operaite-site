# operAIte site — v2 rebuild (handoff)

Cinematic redesign of the homepage hero + body, built on your existing Next.js
14 / TypeScript / Tailwind project. Same structure as your repo, so it drops
straight onto `github.com/blakegrosenthal/operaite-site`.

## Run it locally
```
npm install
npm run dev      # http://localhost:3000
```
(`npm run build` passes — 12/12 routes prerender.)

## What changed
- **Hero** (`components/hero/Hero.tsx` + `.module.css`): full-screen montage of
  5 real service-business clips that crossfade (trades → carpentry → home
  services → auto → clinic), title-sequence choreography (char-by-char headline,
  glass nav pill, progressive-blur dissolve into the light body). Your concrete
  copy. Real Calendly link.
- **Homepage** (`app/page.tsx`): leak list, "what makes operAIte different"
  (ink band), 5-step process timeline, proof card (chiropractic), final CTA —
  all with Framer Motion scroll reveals. Copy pulled verbatim from your repo.
- **Brand system**: Fraunces + Geist fonts, ink/bone/cobalt/amber tokens
  (`globals.css`, `tailwind.config.ts`). Wordmark is `operAIte` (cobalt AI).
- **About** (`app/about/page.tsx`): your full founder story + new graduation
  photo (`public/blake-about.jpg`), used once.
- **Nav**: transparent over the hero on `/`, light brand nav on inner pages.
- **Footer**: redesigned on ink.
- Services / Case Studies / Contact / ROI inherit the new palette + type.

## Two production to-dos (intentionally left for you)
1. **Self-host the hero videos.** They currently stream from Pexels CDN URLs
   (free license, fine to ship, but a dependency). For best speed: download the
   5 clips, compress each to ~2-3 MB 720p, pre-trim the clinic clip to start at
   its 30s mark, drop them in `public/video/`, and point the `CLIPS` array in
   `Hero.tsx` at the local paths.
2. **Set env vars** in Vercel: `NEXT_PUBLIC_CALENDLY_URL` (your real link is the
   default fallback), `NEXT_PUBLIC_CONTACT_EMAIL`, `NEXT_PUBLIC_GA_ID`.

## Push to your repo
From a clean clone of your repo, copy these folders/files over the old ones:
`app/  components/  lib/  public/blake-about.jpg  tailwind.config.ts  package.json`
then:
```
npm install            # picks up framer-motion
git add -A
git commit -m "Cinematic hero + rebuilt site (v2)"
git push
```
Vercel auto-deploys. Or open a branch/PR first to preview before going live.
