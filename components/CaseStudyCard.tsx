import Link from 'next/link'
import type { CaseStudy } from '@/lib/caseStudies'

interface CaseStudyCardProps {
  caseStudy: CaseStudy
}

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-soft transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow sm:p-7">
      <div className="flex-1">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
          Case study
        </p>
        <h3 className="mt-3 text-xl font-semibold tracking-[-0.01em] text-foreground sm:text-2xl">
          {caseStudy.title}
        </h3>
        <p className="mt-2 text-sm font-medium leading-6 text-foreground/80 sm:text-base">
          {caseStudy.subtitle}
        </p>
        <p className="mt-4 max-w-[64ch] text-sm leading-7 text-muted sm:text-base">
          {caseStudy.summary}
        </p>
      </div>
      <div className="mt-6">
        <Link
          href={caseStudy.href}
          className="inline-flex rounded-md border border-line px-4 py-2.5 text-sm font-semibold text-foreground transition-all duration-150 ease-out hover:-translate-y-0.5 hover:border-foreground/20 hover:bg-neutral-50"
        >
          View case study
        </Link>
      </div>
    </article>
  )
}
