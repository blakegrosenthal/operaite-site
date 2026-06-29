import Link from 'next/link'
import { BrandName } from '@/components/BrandName'
import { env } from '@/lib/env'
import { siteConfig } from '@/lib/site'

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-bone">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="text-xl text-bone">
              <BrandName />
            </p>
            <p className="mt-3 text-sm font-light leading-7 text-bone/55">
              Find the leak. Build the engine. Simple operational systems for
              owner-led service businesses.
            </p>
            <Link
              href={env.calendlyUrl}
              className="mt-6 inline-flex rounded-lg bg-cobalt px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-cobalt-soft"
            >
              Book a 30-Minute Operations Review
            </Link>
          </div>
          <nav className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-bone/65 transition hover:text-bone"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-bone/10 pt-6 text-xs text-bone/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} operAIte. All rights reserved.</p>
          <a href={`mailto:${env.contactEmail}`} className="hover:text-bone/70">
            {env.contactEmail}
          </a>
        </div>
      </div>
    </footer>
  )
}
