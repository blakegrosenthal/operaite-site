'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BrandName } from '@/components/BrandName'
import { env } from '@/lib/env'
import { siteConfig } from '@/lib/site'

export function Navbar() {
  const pathname = usePathname()
  // The homepage hero renders its own transparent nav over the video.
  if (pathname === '/') return null

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-[rgba(245,242,236,0.85)] backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl text-ink">
          <BrandName />
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {siteConfig.navigation.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ash-dark transition hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href={env.calendlyUrl}
          className="hidden rounded-lg bg-ink px-5 py-2.5 text-sm font-semibold text-bone transition hover:bg-ink-2 sm:inline-flex"
        >
          Book a call
        </Link>
      </div>
      <div className="border-t border-line px-5 py-2 md:hidden">
        <nav className="mx-auto flex max-w-6xl gap-5 overflow-x-auto whitespace-nowrap text-sm text-ash-dark">
          {siteConfig.navigation.slice(1).map((item) => (
            <Link key={item.href} href={item.href} className="py-1 font-medium">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
