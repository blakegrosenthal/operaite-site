import type { Metadata } from 'next'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { ContactMailtoForm } from '@/components/ContactMailtoForm'
import { env } from '@/lib/env'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Operaite Consulting to discuss operational systems, automation, and workflow stabilization.'
}

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-line py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            Contact
          </p>
          <h1 className="mt-3 text-3xl tracking-tight text-foreground sm:text-5xl">
            Start with a direct operations conversation.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-muted">
            Share current workflow issues, where bottlenecks are showing up, and
            what outcomes you need. We reply with practical next steps.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <ContactMailtoForm contactEmail={env.contactEmail} />
          <aside className="space-y-4">
            <InfoCard
              title="Book a Review"
              text="Prefer to start live? Schedule a 30-minute operations review."
            >
              <Link
                href={env.calendlyUrl}
                className="mt-4 inline-flex rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-strong"
              >
                Book via Calendly
              </Link>
            </InfoCard>
            <InfoCard
              title="Direct Email"
              text="If your email app is already open, send details directly."
            >
              <Link
                href={`mailto:${env.contactEmail}`}
                className="mt-4 inline-flex rounded-md border border-line px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-stone-100"
              >
                {env.contactEmail}
              </Link>
            </InfoCard>
            <InfoCard
              title="Typical Response"
              text="Most inquiries receive a response within one business day."
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
      <p className="mt-2 text-sm leading-7 text-muted">{text}</p>
      {children}
    </article>
  )
}
