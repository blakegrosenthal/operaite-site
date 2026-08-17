'use client'

import Link from 'next/link'
import Script from 'next/script'
import { useEffect, useRef, useState } from 'react'
import { env } from '@/lib/env'

declare global {
  interface Window {
    Tally?: { loadEmbeds: () => void }
  }
}

// How long to keep waiting before we accept the form is never coming.
// Deliberately generous: showing "the form didn't load" to someone whose form
// was merely slow is worse than making them wait, because it sends a real lead
// away. Only a hard script error fails fast.
const GIVE_UP_AFTER_MS = 12000
const POLL_EVERY_MS = 250
// The skeleton clears on its own even if we never detect the swap. It is a
// cosmetic overlay, so it must never be the reason a working form is hidden.
const HIDE_SKELETON_AFTER_MS = 3000

export function TallyForm() {
  const [failed, setFailed] = useState(false)
  const [showSkeleton, setShowSkeleton] = useState(true)
  const iframeRef = useRef<HTMLIFrameElement | null>(null)

  useEffect(() => {
    // embed.js copies data-tally-src into src when it runs. Poll for that
    // instead of guessing on a single fixed timeout, so "slow" and "blocked"
    // stop looking like the same thing.
    const startedAt = Date.now()
    const poll = window.setInterval(() => {
      const src = iframeRef.current?.src ?? ''
      if (src.includes('tally.so')) {
        setShowSkeleton(false)
        window.clearInterval(poll)
        return
      }
      if (Date.now() - startedAt > GIVE_UP_AFTER_MS) {
        setFailed(true)
        window.clearInterval(poll)
      }
    }, POLL_EVERY_MS)

    // Belt and braces: drop the overlay regardless, so a detection miss can
    // never leave the form covered.
    const skeletonTimer = window.setTimeout(
      () => setShowSkeleton(false),
      HIDE_SKELETON_AFTER_MS
    )

    return () => {
      window.clearInterval(poll)
      window.clearTimeout(skeletonTimer)
    }
  }, [])

  if (failed) {
    return (
      <div className="rounded-2xl border border-line bg-white p-6 shadow-soft sm:p-8">
        <h2 className="font-display text-display-md text-ink">
          The form didn&rsquo;t load.
        </h2>
        <p className="mt-3 text-[15.5px] leading-7 text-ash-dark">
          Usually an ad blocker. No problem, both of these reach me directly:
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={`mailto:${env.contactEmail}`}
            className="rounded-lg bg-cobalt px-6 py-3.5 text-[15px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-cobalt-soft"
          >
            Email {env.contactEmail}
          </a>
          <Link
            href={env.bookingUrl}
            className="rounded-lg border border-line px-6 py-3.5 text-[15px] font-semibold text-ink transition hover:bg-bone-2"
          >
            Book your free 30-minute review
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="relative rounded-2xl border border-line bg-white p-4 shadow-soft sm:p-6">
      {/* Warm the connection so the DNS lookup and TLS handshake aren't
          sitting in front of the form. */}
      <link rel="preconnect" href="https://tally.so" crossOrigin="" />
      <link rel="dns-prefetch" href="https://tally.so" />

      {showSkeleton && (
        <div
          className="absolute inset-4 flex flex-col gap-4 bg-white sm:inset-6"
          aria-hidden
        >
          <div className="h-3 w-28 animate-pulse rounded bg-bone-2" />
          <div className="h-11 w-full animate-pulse rounded-lg bg-bone-2" />
          <div className="h-3 w-24 animate-pulse rounded bg-bone-2" />
          <div className="h-11 w-full animate-pulse rounded-lg bg-bone-2" />
          <div className="h-3 w-20 animate-pulse rounded bg-bone-2" />
          <div className="h-11 w-full animate-pulse rounded-lg bg-bone-2" />
          <p className="mt-1 text-[14px] leading-6 text-ash">
            Loading the form…
          </p>
        </div>
      )}

      <iframe
        ref={iframeRef}
        data-tally-src="https://tally.so/embed/RGQev9?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        width="100%"
        height={520}
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="Tell me what's breaking"
      />

      {/* afterInteractive, not lazyOnload: this form is the whole point of the
          page, so it must not wait on the window load event. */}
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
        onLoad={() => {
          window.Tally?.loadEmbeds()
        }}
        onError={() => {
          setFailed(true)
        }}
      />
    </div>
  )
}
