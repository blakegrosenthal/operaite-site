import type { Metadata } from 'next'
import { CaseStudyCard } from '@/components/CaseStudyCard'
import { Section } from '@/components/Section'
import { caseStudies } from '@/lib/caseStudies'

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Real examples of leaks operAIte has fixed for service businesses, starting with instant lead response for a chiropractic clinic.'
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
            <h1 className="mt-4 text-[2.35rem] font-[680] leading-[1.12] tracking-[-0.01em] text-foreground sm:text-[3.1rem]">
              Case Studies
            </h1>
            <p className="mt-6 max-w-[62ch] text-base leading-8 text-muted sm:text-lg">
              I publish a case study when a client lets me share the details.
              Here’s the first one, start to finish.
            </p>
          </div>
        </div>
      </section>

      <Section
        title="Recent Work"
        className="reveal-up border-t border-line bg-neutral-50 py-24 sm:py-32"
        headerClassName="max-w-[72ch] border-b border-line pb-6 sm:pb-8"
        titleClassName="text-3xl font-[650] tracking-[-0.01em] sm:text-[2.4rem]"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
          ))}
        </div>
      </Section>
    </>
  )
}
