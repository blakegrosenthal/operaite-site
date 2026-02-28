import { ReactNode } from 'react'

interface SectionProps {
  id?: string
  title: string
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
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              {eyebrow}
            </p>
          ) : null}
          <h2
            className={`text-2xl font-semibold tracking-tight text-foreground sm:text-3xl ${titleClassName ?? ''}`}
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
