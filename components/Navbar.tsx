import Link from 'next/link'
import { env } from '@/lib/env'
import { siteConfig } from '@/lib/site'

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-foreground"
        >
          Operaite Consulting
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href={env.calendlyUrl}
          className="hidden rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent-strong sm:inline-flex"
        >
          Book Review
        </Link>
      </div>
      <div className="border-t border-line px-5 py-2 md:hidden">
        <nav className="mx-auto flex max-w-6xl gap-4 overflow-x-auto whitespace-nowrap text-sm text-muted">
          {siteConfig.navigation.map((item) => (
            <Link key={item.href} href={item.href} className="py-1 font-medium">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
