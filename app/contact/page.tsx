import type { Metadata } from 'next'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { TallyForm } from '@/components/TallyForm'
import { env } from '@/lib/env'

export const metadata: Metadata = {
  alternates: { canonical: '/contact' },
  title: 'Contact',
  description:
    'Contact OperAIte to discuss operational systems, automation, and workflow stabilization.'
}

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-line py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cobalt">
            Contact
          </p>
          <h1 className="mt-3 font-display text-display-lg tracking-tight text-ink sm:text-display-xl">
            Tell me what&rsquo;s breaking.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-muted">
            Two or three sentences is plenty: what kind of business, what keeps
            slipping, and how you want it to work instead. You&rsquo;ll get real
            next steps back, not a pitch.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)] gap-8 px-5 sm:px-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:px-8">
          <TallyForm />
          <aside className="min-w-0 space-y-4">
            <InfoCard
              title="Prefer to talk?"
              text="Book your free 30-minute review. You leave with your top two or three leaks, whether or not we work together."
            >
              <Link
                href={env.calendlyUrl}
                className="mt-4 inline-flex rounded-lg bg-cobalt px-6 py-3.5 text-[15px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-cobalt-soft"
              >
                Book your free 30-minute review
              </Link>
            </InfoCard>
            <InfoCard
              title="Direct email"
              text="Rather just write an email? It comes straight to me."
            >
              <Link
                href={`mailto:${env.contactEmail}`}
                className="mt-4 inline-flex max-w-full break-all rounded-lg border border-line px-6 py-3.5 text-[15px] font-semibold text-ink transition hover:bg-bone-2"
              >
                {env.contactEmail}
              </Link>
            </InfoCard>
            <InfoCard
              title="How fast I reply"
              text="Same day, usually within a few hours."
            />
          </aside>
        </div>
      </section>
    </>
  )
}

function InfoCard({
  title,
  text,
  children
}: {
  title: string
  text: string
  children?: ReactNode
}) {
  return (
    <article className="rounded-2xl border border-line bg-white p-6 shadow-soft">
      <h2 className="text-base font-semibold text-foreground">{title}</h2>
      <p className="mt-2 text-[15px] leading-7 text-ash-dark">{text}</p>
      {children}
    </article>
  )
}
