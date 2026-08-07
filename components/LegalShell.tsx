import type { ReactNode } from 'react'

export function LegalShell({
  title,
  updated,
  children
}: {
  title: string
  updated: string
  children: ReactNode
}) {
  return (
    <>
      <section className="border-b border-line bg-bone-2 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cobalt">
            Legal
          </p>
          <h1 className="mt-3 font-display text-3xl leading-[1.1] text-ink sm:text-[3rem]">
            {title}
          </h1>
          <p className="mt-4 text-sm text-ash">Last updated: {updated}</p>
        </div>
      </section>
      <section className="py-14 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-[70ch] space-y-10">{children}</div>
        </div>
      </section>
    </>
  )
}

export function LegalSection({
  title,
  children
}: {
  title: string
  children: ReactNode
}) {
  return (
    <div>
      <h2 className="font-display text-[1.45rem] leading-snug text-ink">
        {title}
      </h2>
      <div className="mt-3 space-y-4 text-[16px] leading-7 text-ash-dark">
        {children}
      </div>
    </div>
  )
}
