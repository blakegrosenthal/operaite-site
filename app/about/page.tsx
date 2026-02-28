import Link from 'next/link'
import type { Metadata } from 'next'
import { env } from '@/lib/env'

export const metadata: Metadata = {
  title: 'About',
  description:
    'About Blake Rosenthal and Operaite Consulting: practical systems that help owner-led service businesses run with more reliability and less operational strain.'
}

export default function AboutPage() {
  return (
    <section className="border-t border-line py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <h1 className="text-3xl tracking-tight text-foreground sm:text-5xl">About</h1>

        <div className="mt-10 grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-start lg:gap-12">
          <div>
            <div className="rounded-2xl border border-line bg-white p-4 shadow-sm">
              <div className="flex aspect-[4/5] items-center justify-center rounded-xl border border-line bg-neutral-50 text-muted">
                <svg
                  viewBox="0 0 24 24"
                  className="h-14 w-14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="8" r="3.5" />
                  <path d="M5 20a7 7 0 0 1 14 0" />
                </svg>
              </div>
            </div>
          </div>

          <div className="space-y-5 text-sm leading-7 text-muted sm:text-base sm:leading-8">
            <p>Hi, I’m Blake Rosenthal, founder of Operaite Consulting.</p>

            <p>
              I work with owner-led service businesses that are tired of chasing
              follow-ups, checking calendars twice, and wondering what slipped
              through the cracks. Most owners don’t need more tools. They need
              their operations to run predictably without constant oversight.
            </p>

            <p>
              I grew up around small business, and I’ve seen firsthand how easy
              it is for manual processes to quietly drain time, cash flow, and
              energy. When my dad was undergoing treatment and couldn’t carry
              the day-to-day weight of the business, I stepped in and rebuilt
              the operational systems inside our family practice. The goal
              wasn’t complexity. It was reliability. Fewer dropped tasks. Faster
              response. Clear visibility.
            </p>

            <p>That experience shaped how I approach every engagement.</p>

            <p>
              Since then, I’ve spoken with dozens of small and midsized business
              owners across industries. The patterns are consistent. Leads go
              unanswered. Follow-ups rely on memory. Invoices lag. Critical
              tasks live in inboxes instead of systems. Over time, that
              instability compounds.
            </p>

            <p>
              My work focuses on stabilizing the revenue-critical workflows that
              protect your business. Not with buzzwords. Not with overengineered
              platforms. With structured systems that make execution dependable.
            </p>

            <p>
              When the right systems are in place, the business feels different.
              Fewer surprises. Fewer fire drills. More clarity. More control.
            </p>

            <div className="pt-2">
              <Link
                href={env.calendlyUrl}
                className="mt-6 inline-flex rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-strong"
              >
                Book a 30 Minute Clarity Call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
