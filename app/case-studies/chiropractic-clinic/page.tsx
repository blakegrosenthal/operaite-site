import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PatientThread } from '@/components/artifacts/PatientThread'
import { getCaseStudyBySlug } from '@/lib/caseStudies'
import { env } from '@/lib/env'

const caseStudy = getCaseStudyBySlug('chiropractic-clinic')

export const metadata: Metadata = {
  alternates: { canonical: '/case-studies/chiropractic-clinic' },
  title: 'Thousand Oaks Disc Center',
  description:
    'Instant response system for new patient inquiries at a chiropractic clinic.'
}

const SNAPSHOT = [
  ['What happens now', 'Booking link sent the moment the form is submitted'],
  ['Coverage', 'Nights, weekends, and before the office opens'],
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
              Case Study · Thousand Oaks, CA
            </p>
            <h1 className="mt-4 font-display text-display-lg text-ink sm:text-display-xl">
              {caseStudy.title}
            </h1>
            <p className="mt-5 max-w-[62ch] text-base leading-8 text-muted sm:text-lg">
              {caseStudy.subtitle}
            </p>
            <p className="mt-6 max-w-[62ch] font-display text-display-sm text-ink">
              {caseStudy.headline}
            </p>
          </div>

          <p className="mt-10 max-w-[62ch] text-[15.5px] leading-7 text-ash-dark">
            {caseStudy.metricsIntro}
          </p>
          <div className="mt-6 grid max-w-3xl gap-x-16 gap-y-8 sm:grid-cols-2">
            {caseStudy.metrics.map((metric) => (
              <div key={metric.label} className="border-t border-line pt-5">
                <p className="text-[16.5px] font-medium leading-6 text-ink">
                  {metric.label}
                </p>
                <p className="mt-2.5 font-display text-display-lg text-ink">
                  {metric.value}
                </p>
              </div>
            ))}
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

          <PatientThread />

          <p className="mt-8 max-w-[62ch] border-l-2 border-cobalt pl-5 text-[16px] leading-8 text-ink">
            {caseStudy.namedMoment}
          </p>
        </div>
      </section>

      <section className="reveal-up py-16 sm:py-24">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-12">
            <div>
              <h2 className="font-display text-display-md text-ink">
                The situation
              </h2>
              <p className="mt-4 text-base leading-8 text-muted">
                {caseStudy.situation}
              </p>
            </div>

            <div className="border-t border-line pt-10">
              <h2 className="font-display text-display-md text-ink">
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
              <h2 className="font-display text-display-md text-ink">
                Operational impact
              </h2>
              <p className="mt-4 text-base leading-8 text-muted">
                {caseStudy.operationalImpact}
              </p>
            </div>

            <div className="border-t border-line pt-10">
              <h2 className="font-display text-display-md text-ink">
                How this was measured
              </h2>
              <p className="mt-4 text-base leading-8 text-muted">
                {caseStudy.howMeasured}
              </p>
            </div>

            <div className="border-t border-line pt-10">
              <h2 className="font-display text-display-md text-ink">
                Where this one came from
              </h2>
              <p className="mt-4 text-base leading-8 text-muted">
                {caseStudy.keyInsight}
              </p>
              <Link
                href={env.bookingUrl}
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
