import Link from 'next/link'

interface CTAProps {
  title: string
  description: string
  primaryLabel: string
  primaryHref: string
  secondaryLabel?: string
  secondaryHref?: string
}

export function CTA({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref
}: CTAProps) {
  return (
    <div className="rounded-2xl border border-line bg-surface p-6 shadow-soft sm:p-8">
      <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
        {title}
      </h3>
      <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
        {description}
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href={primaryHref}
          className="rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-strong"
        >
          {primaryLabel}
        </Link>
        {secondaryLabel && secondaryHref ? (
          <Link
            href={secondaryHref}
            className="rounded-md border border-line px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-stone-100"
          >
            {secondaryLabel}
          </Link>
        ) : null}
      </div>
    </div>
  )
}
