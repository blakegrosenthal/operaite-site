import Link from 'next/link'
import type { Metadata } from 'next'
import { env } from '@/lib/env'

export const metadata: Metadata = {
  alternates: { canonical: '/case-studies' },
  title: 'Case Studies',
  description:
    'Real examples of leaks OperAite has fixed for service businesses, starting with instant lead response for a chiropractic clinic.'
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
                  Thousand Oaks Disc Center, Thousand Oaks, CA
                </p>
                <p className="mt-3 text-[16px] leading-7 text-muted">
                  Thousand Oaks Disc Center is my family’s practice. That’s how
                  I had access to the real numbers instead of an estimate.
                  Measured from the clinic’s own inbox, not estimated.
                </p>
                <h2 className="mt-5 font-display text-display-md text-ink">
                  Instant response for new patient inquiries
                </h2>
                <p className="mt-4 text-[16px] leading-7 text-ash-dark">
                  For its first 30 measured days, new inquiries got an immediate
                  message with a booking link, so patients scheduled in minutes
                  instead of waiting on a manual reply.
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
                  ['Median form to booked', '2 minutes'],
                  ['Consultations booked', '21 in the first 30 days'],
                  ['Coverage', 'Nights, weekends, before the office opened']
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

          <div className="mt-8 overflow-hidden rounded-3xl border border-line bg-white shadow-soft">
            <div className="grid gap-0 md:grid-cols-[1fr_0.9fr]">
              <div className="p-8 sm:p-10">
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-cobalt">
                  Research · Conejo Valley, CA
                </p>
                <h2 className="mt-5 font-display text-display-md text-ink">
                  Who answers? Lead response at 86 home-service businesses
                </h2>
                <p className="mt-4 text-[16px] leading-7 text-ash-dark">
                  I posed as a homeowner and sent one inquiry to 86 owner-operated
                  businesses across nine trades, then recorded the first human
                  contact by email, text, call or voicemail. Nobody is named.
                </p>
                <Link
                  href="/research/conejo-valley-lead-response"
                  className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-cobalt transition hover:gap-3"
                >
                  Read the study <span aria-hidden>→</span>
                </Link>
              </div>
              <div className="flex flex-col justify-center gap-5 border-t border-line bg-bone-2/60 p-8 sm:p-10 md:border-l md:border-t-0">
                {[
                  ['Never responded, any channel', '40% (34 of 84)'],
                  ['Median time to a human', '12.6 hours, among those who replied'],
                  ['Auto-acks followed by a person within two hours', '5 of 16']
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
            href={env.bookingUrl}
            className="mt-8 inline-flex rounded-lg bg-cobalt px-7 py-4 text-[15px] font-semibold text-white shadow-[0_12px_36px_rgba(43,79,224,0.4)] transition hover:-translate-y-0.5 hover:bg-cobalt-soft"
          >
            Book your free 30-minute review
          </Link>
        </div>
      </section>
    </>
  )
}
