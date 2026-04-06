import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getCaseStudyBySlug } from '@/lib/caseStudies'

const caseStudy = getCaseStudyBySlug('chiropractic-clinic')

export const metadata: Metadata = {
  title: 'Chiropractic Clinic',
  description:
    'Instant response system for new patient inquiries at a chiropractic clinic.'
}

export default function ChiropracticClinicCaseStudyPage() {
  if (!caseStudy) {
    notFound()
  }

  return (
    <>
      <section className="reveal-up bg-white pt-20 pb-16 sm:pt-24 sm:pb-20">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-[72ch]">
            <Link
              href="/case-studies"
              className="text-sm font-medium text-muted transition hover:text-foreground"
            >
              Back to Case Studies
            </Link>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Case Study
            </p>
            <h1 className="mt-4 text-[2.35rem] font-[680] leading-[1.12] tracking-[-0.01em] text-foreground sm:text-[3.1rem]">
              {caseStudy.title}
            </h1>
            <p className="mt-6 max-w-[62ch] text-base leading-8 text-muted sm:text-lg">
              {caseStudy.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="reveal-up border-t border-line bg-neutral-50 py-24 sm:py-32">
        <div className="mx-auto w-full max-w-5xl px-5 sm:px-6 lg:px-8">
          <div className="space-y-6 sm:space-y-8">
            <article className="rounded-2xl border border-line bg-white p-6 shadow-soft sm:p-8">
              <h2 className="text-2xl font-[650] tracking-[-0.01em] text-foreground">
                The Situation
              </h2>
              <p className="mt-4 max-w-[68ch] text-base leading-8 text-muted">
                {caseStudy.situation}
              </p>
            </article>

            <article className="rounded-2xl border border-line bg-white p-6 shadow-soft sm:p-8">
              <h2 className="text-2xl font-[650] tracking-[-0.01em] text-foreground">
                What Changed
              </h2>
              <ul className="mt-4 space-y-3">
                {caseStudy.changes.map((change) => (
                  <li
                    key={change}
                    className="flex items-start gap-3 text-base leading-8 text-muted"
                  >
                    <span className="mt-3 block h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                    <span>{change}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-line bg-white p-6 shadow-soft sm:p-8">
              <h2 className="text-2xl font-[650] tracking-[-0.01em] text-foreground">
                Operational Impact
              </h2>
              <p className="mt-4 max-w-[68ch] text-base leading-8 text-muted">
                {caseStudy.operationalImpact}
              </p>
            </article>

            <article className="rounded-2xl border border-line bg-white p-6 shadow-soft sm:p-8">
              <h2 className="text-2xl font-[650] tracking-[-0.01em] text-foreground">
                Key Insight
              </h2>
              <p className="mt-4 max-w-[68ch] text-base leading-8 text-muted">
                {caseStudy.keyInsight}
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
