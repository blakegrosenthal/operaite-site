'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BrandName } from '@/components/BrandName'
import { env } from '@/lib/env'
import { siteConfig } from '@/lib/site'

const NAV = siteConfig.navigation.slice(1)

const Arrow = () => (
  <svg viewBox="0 0 8 8" fill="none" className="h-2 w-2">
    <path
      d="M1 7L7 1M7 1H2M7 1V6"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export function Navbar() {
  const pathname = usePathname()
  // The homepage hero renders its own transparent nav over the video.
  if (pathname === '/') return null

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`)

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-[rgba(245,242,236,0.85)] backdrop-blur">
      {/* Same geometry as the hero header: full-bleed, logo left, nav pill, CTA right. */}
      <div className="flex items-center justify-between gap-4 px-[clamp(24px,3.4vw,50px)] pb-[10px] pt-5 min-[901px]:pb-5">
        <Link
          href="/"
          className="text-[clamp(20px,1.8vw,26px)] leading-none text-ink"
        >
          <BrandName />
        </Link>

        <nav
          className="hidden items-center gap-[clamp(16px,2.3vw,33px)] rounded-full border border-line bg-white/60 px-[clamp(13px,1.39vw,20px)] py-[clamp(8px,0.76vw,11px)] shadow-soft backdrop-blur min-[901px]:inline-flex"
          aria-label="Primary"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={`text-[clamp(12px,1vw,15px)] font-medium transition ${
                isActive(item.href) ? 'text-ink' : 'text-ash-dark hover:text-ink'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href={env.calendlyUrl}
          className="inline-flex shrink-0 items-center gap-[clamp(7px,0.7vw,10px)] rounded-[10px] bg-cobalt px-[clamp(18px,2vw,28px)] py-[clamp(9px,0.8vw,12px)] text-[clamp(13px,1.05vw,15px)] font-semibold text-white transition hover:bg-cobalt-soft"
        >
          Book a free review
          <Arrow />
        </Link>
      </div>

      {/* Mirrors the hero's mobile link row. */}
      <nav
        className="flex justify-between gap-[clamp(4px,2.4vw,18px)] px-[clamp(24px,3.4vw,50px)] pb-3 min-[901px]:hidden"
        aria-label="Primary mobile"
      >
        {NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive(item.href) ? 'page' : undefined}
            className={`whitespace-nowrap text-[clamp(10.5px,3.2vw,13px)] font-semibold ${
              isActive(item.href) ? 'text-ink' : 'text-ash-dark'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
