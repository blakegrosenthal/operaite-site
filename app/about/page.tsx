import type { Metadata } from 'next'
import { CTA } from '@/components/CTA'
import { Section } from '@/components/Section'
import { env } from '@/lib/env'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Operaite Consulting is a systems-focused firm that helps owner-led service businesses build disciplined operational infrastructure.'
}

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-line bg-white py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            About Operaite
          </p>
          <h1 className="mt-3 text-3xl tracking-tight text-foreground sm:text-5xl">
            A systems-focused operations firm for service businesses.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-muted">
            Operaite Consulting works with owner-led teams that need stronger
            operational structure. The objective is not temporary cleanup. It is
            long-term reliability.
          </p>
        </div>
      </section>

      <Section
        title="What We Believe"
        description="Principles that guide how we design and implement systems."
        className="bg-neutral-50"
      >
        <div className="grid gap-4 md:grid-cols-3">
          <BeliefCard
            title="Clarity over complexity"
            text="Systems should be easy to understand so your team can run them consistently."
          />
          <BeliefCard
            title="Reliability over hype"
            text="We focus on dependable follow-through, not flashy ideas that are hard to maintain."
          />
          <BeliefCard
            title="Small first, then expand"
            text="We start with practical improvements, make them stable, then grow from there."
          />
        </div>
      </Section>

      <Section
        title="What You Can Expect"
        description="A practical engagement with clear steps and low disruption."
      >
        <ul className="grid gap-4 sm:grid-cols-2">
          <ChecklistItem text="Clear scope before anything is built" />
          <ChecklistItem text="Work inside your current tools where possible" />
          <ChecklistItem text="Documentation your team can follow" />
          <ChecklistItem text="Follow-up after launch to stabilize" />
        </ul>
      </Section>

      <Section
        title="Why This Exists"
        className="bg-neutral-50"
      >
        <p className="max-w-3xl rounded-xl border border-line bg-white p-5 text-sm leading-7 text-muted">
          We started building systems because we saw how much operational stress
          falls on owners and teams. Our work focuses on practical automation
          that reduces that load and helps the business run with more
          consistency.
        </p>
      </Section>

      <section className="pb-16 sm:pb-24">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
          <CTA
            title="Book a 30-Minute Operations Review"
            description="We will assess your current operating rhythm, identify weak points, and outline a disciplined implementation path."
            primaryLabel="Book a 30-Minute Operations Review"
            primaryHref={env.calendlyUrl}
            secondaryLabel="Explore Services"
            secondaryHref="/services"
          />
        </div>
      </section>
    </>
  )
}

function BeliefCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="rounded-xl border border-line bg-white p-5">
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-muted">{text}</p>
    </article>
  )
}

function ChecklistItem({ text }: { text: string }) {
  return (
    <li className="rounded-xl border border-line bg-white p-5 text-sm font-medium leading-7 text-foreground">
      {text}
    </li>
  )
}
