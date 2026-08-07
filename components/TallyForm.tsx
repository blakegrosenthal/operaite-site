'use client'

import Script from 'next/script'

declare global {
  interface Window {
    Tally?: { loadEmbeds: () => void }
  }
}

export function TallyForm() {
  return (
    <div className="rounded-2xl border border-line bg-white p-4 shadow-soft sm:p-6">
      <iframe
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
      />
    </div>
  )
}
