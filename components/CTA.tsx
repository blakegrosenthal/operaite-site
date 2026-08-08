import Link from 'next/link'
import type { ReactNode } from 'react'

interface CTAProps {
  title: string
  description: string
  primaryLabel: string
  primaryHref: string
  secondaryLabel?: string
  secondaryHref?: string
  children?: ReactNode
}

export function CTA({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  children
}: CTAProps) {
  return (
    <div className="max-w-3xl rounded-2xl border border-line bg-surface p-6 shadow-soft sm:p-8">
      <h3 className="font-display text-display-md text-ink">
        {title}
      </h3>
      <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
        {description}
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href={primaryHref}
          className="rounded-lg bg-cobalt px-6 py-3.5 text-[15px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-cobalt-soft"
        >
          {primaryLabel}
        </Link>
        {secondaryLabel && secondaryHref ? (
          <Link
            href={secondaryHref}
            className="rounded-lg border border-line px-6 py-3.5 text-[15px] font-semibold text-ink transition hover:bg-bone-2"
          >
            {secondaryLabel}
          </Link>
        ) : null}
      </div>
      {children ? (
        <div className="mt-5 border-t border-line pt-4 text-sm text-muted">
          {children}
        </div>
      ) : null}
    </div>
  )
}
