import Link from 'next/link'
import { siteConfig } from '@/lib/site'

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-medium text-foreground">
            {siteConfig.name}
          </p>
          <nav className="flex flex-wrap gap-4 text-sm text-muted">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} {siteConfig.name}. Built for clarity,
          consistency, and practical operations.
        </p>
      </div>
    </footer>
  )
}
