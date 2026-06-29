import { ReactNode } from 'react'

interface SectionProps {
  id?: string
  title: ReactNode
  eyebrow?: string
  description?: string
  children: ReactNode
  className?: string
  headerClassName?: string
  titleClassName?: string
  descriptionClassName?: string
}

export function Section({
  id,
  title,
  eyebrow,
  description,
  children,
  className,
  headerClassName,
  titleClassName,
  descriptionClassName
}: SectionProps) {
  return (
    <section id={id} className={`py-14 sm:py-20 ${className ?? ''}`}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <header className={`max-w-3xl ${headerClassName ?? ''}`}>
          {eyebrow ? (
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-cobalt">
              {eyebrow}
            </p>
          ) : null}
          <h2
            className={`font-display text-3xl leading-[1.14] text-ink sm:text-[2.4rem] ${titleClassName ?? ''}`}
          >
            {title}
          </h2>
          {description ? (
            <p
              className={`mt-4 text-base leading-7 text-muted ${descriptionClassName ?? ''}`}
            >
              {description}
            </p>
          ) : null}
        </header>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  )
}
