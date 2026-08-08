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

export function TallyForm() {
  const [failed, setFailed] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement | null>(null)

  useEffect(() => {
    // embed.js copies data-tally-src into src when it loads. If the script is
    // blocked (ad blockers), src never becomes a tally.so URL — show fallback.
    const timer = setTimeout(() => {
      const src = iframeRef.current?.src ?? ''
      if (!src.includes('tally.so')) setFailed(true)
    }, 4500)
    return () => clearTimeout(timer)
  }, [])

  if (failed) {
    return (
      <div className="rounded-2xl border border-line bg-white p-6 shadow-soft sm:p-8">
        <h2 className="font-display text-[1.4rem] leading-snug text-ink">
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
            href={env.calendlyUrl}
            className="rounded-lg border border-line px-6 py-3.5 text-[15px] font-semibold text-ink transition hover:bg-bone-2"
          >
            Book your free 30-minute review
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-line bg-white p-4 shadow-soft sm:p-6">
      <iframe
        ref={iframeRef}
        data-tally-src="https://tally.so/embed/RGQev9?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height={520}
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="Tell me what's breaking"
      />
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="lazyOnload"
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
