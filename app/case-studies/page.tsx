import Link from 'next/link'
import type { Metadata } from 'next'
import { env } from '@/lib/env'

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Real examples of leaks OperAIte has fixed for service businesses, starting with instant lead response for a chiropractic clinic.'
}

export default function CaseStudiesPage() {
  return (
    <>
      <section className="reveal-up bg-bone-2 pt-20 pb-16 sm:pt-24 sm:pb-20">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-[72ch]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cobalt">
              Proof
            </p>
            <h1 className="mt-4 font-display text-display-lg text-ink sm:text-display-xl">
              Case Studies
            </h1>
            <p className="mt-6 max-w-[62ch] text-base leading-8 text-muted sm:text-lg">
              I publish a case study when a client lets me share the details.
              Here’s the first one, start to finish.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-line bg-white shadow-soft">
            <div className="grid gap-0 md:grid-cols-[1fr_0.9fr]">
              <div className="p-8 sm:p-10">
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-cobalt">
                  Chiropractic clinic
                </p>
                <h2 className="mt-3 font-display text-display-md text-ink">
                  Instant response for new patient inquiries
                </h2>
                <p className="mt-4 text-[16px] leading-7 text-ash-dark">
                  New inquiries now get an immediate message with a booking
                  link, so patients schedule in minutes instead of waiting on a
                  manual reply.
                </p>
                <Link
                  href="/case-studies/chiropractic-clinic"
                  className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-cobalt transition hover:gap-3"
                >
                  Read the case study <span aria-hidden>→</span>
                </Link>
              </div>
              <div className="flex flex-col justify-center gap-5 border-t border-line bg-bone-2/60 p-8 sm:p-10 md:border-l md:border-t-0">
                {[
                  ['Before', 'Inquiries waited hours for a manual reply'],
                  ['After', 'Booking link sent the moment the form is submitted'],
                  ['Result', 'Consultations booked from the first response']
                ].map(([k, v]) => (
                  <div key={k}>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ash">
                      {k}
                    </p>
                    <p className="mt-1 text-[16px] leading-6 text-ink">{v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-bone sm:py-24">
        <div className="mx-auto w-full max-w-3xl px-5 text-center sm:px-6">
          <h2 className="mx-auto max-w-2xl font-display text-display-md text-bone sm:text-display-lg">
            Want to be the second one?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[17px] leading-8 text-bone/70">
            Find out where your business is leaking. You leave with a short
            plan and a next step, whether or not we work together.
          </p>
          <Link
            href={env.calendlyUrl}
            className="mt-8 inline-flex rounded-lg bg-cobalt px-7 py-4 text-[15px] font-semibold text-white shadow-[0_12px_36px_rgba(43,79,224,0.4)] transition hover:-translate-y-0.5 hover:bg-cobalt-soft"
          >
            Book your free 30-minute review
          </Link>
        </div>
      </section>
    </>
  )
}
