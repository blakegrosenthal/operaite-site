import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getCaseStudyBySlug } from '@/lib/caseStudies'
import { env } from '@/lib/env'

const caseStudy = getCaseStudyBySlug('chiropractic-clinic')

export const metadata: Metadata = {
  title: 'Chiropractic Clinic',
  description:
    'Instant response system for new patient inquiries at a chiropractic clinic.'
}

const SNAPSHOT = [
  ['Before', 'Inquiries waited hours for a manual reply'],
  ['After', 'Booking link sent the moment the form is submitted'],
  ['Result', 'Consultations booked from the first response']
]

export default function ChiropracticClinicCaseStudyPage() {
  if (!caseStudy) {
    notFound()
  }

  return (
    <>
      <section className="reveal-up border-b border-line bg-bone-2 pt-20 pb-12 sm:pt-24 sm:pb-16">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-[72ch]">
            <Link
              href="/case-studies"
              className="text-sm font-medium text-muted transition hover:text-foreground"
            >
              Back to Case Studies
            </Link>
            <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.22em] text-cobalt">
              Case Study
            </p>
            <h1 className="mt-4 font-display text-[2.35rem] leading-[1.12] text-ink sm:text-[3.1rem]">
              {caseStudy.title}
            </h1>
            <p className="mt-5 max-w-[62ch] text-base leading-8 text-muted sm:text-lg">
              {caseStudy.subtitle}
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-line bg-white shadow-soft">
            <div className="grid gap-0 md:grid-cols-3">
              {SNAPSHOT.map(([k, v], i) => (
                <div
                  key={k}
                  className={`p-6 sm:p-7 ${i !== 0 ? 'border-t border-line md:border-l md:border-t-0' : ''}`}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ash">
                    {k}
                  </p>
                  <p className="mt-2 text-[15.5px] leading-6 text-ink">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="reveal-up py-16 sm:py-24">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[70ch] space-y-12">
            <div>
              <h2 className="font-display text-2xl leading-snug text-ink">
                The situation
              </h2>
              <p className="mt-4 text-base leading-8 text-muted">
                {caseStudy.situation}
              </p>
            </div>

            <div className="border-t border-line pt-10">
              <h2 className="font-display text-2xl leading-snug text-ink">
                What changed
              </h2>
              <ul className="mt-4 space-y-3">
                {caseStudy.changes.map((change) => (
                  <li
                    key={change}
                    className="flex items-start gap-3 text-base leading-8 text-muted"
                  >
                    <span className="mt-3 block h-1.5 w-1.5 flex-none rounded-full bg-cobalt" />
                    <span>{change}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-line pt-10">
              <h2 className="font-display text-2xl leading-snug text-ink">
                Operational impact
              </h2>
              <p className="mt-4 text-base leading-8 text-muted">
                {caseStudy.operationalImpact}
              </p>
            </div>

            <div className="border-t border-line pt-10">
              <h2 className="font-display text-2xl leading-snug text-ink">
                Where this one came from
              </h2>
              <p className="mt-4 text-base leading-8 text-muted">
                {caseStudy.keyInsight}
              </p>
              <Link
                href={env.calendlyUrl}
                className="mt-6 inline-flex rounded-lg bg-cobalt px-6 py-3.5 text-[15px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-cobalt-soft"
              >
                Book your free 30-minute review
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
