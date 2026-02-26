import type { Metadata } from 'next'
import Link from 'next/link'
import { CTA } from '@/components/CTA'
import { Section } from '@/components/Section'
import { env } from '@/lib/env'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Workflow stabilization, revenue protection, and reliability systems for owner-led service businesses.'
}

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-line py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            Services
          </p>
          <h1 className="mt-3 text-3xl tracking-tight text-foreground sm:text-5xl">
            Systems designed to make daily operations predictable.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-muted">
            We help small service teams stabilize core workflows so fewer tasks
            slip, payments arrive faster, and leadership can step out of daily
            admin firefighting.
          </p>
        </div>
      </section>

      <Section
        title="Workflow Stabilization"
        description="Create clear step ownership, handoff rules, and automated reminders across lead handling, scheduling, service delivery, and follow-up."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <ServiceDetail
            title="Lead-to-Job Flow"
            text="Improve intake consistency and ensure every qualified lead is tracked through scheduling and follow-up."
          />
          <ServiceDetail
            title="Scheduling Discipline"
            text="Reduce no-shows and confusion through confirmation sequences, calendar controls, and escalation triggers."
          />
          <ServiceDetail
            title="Job Completion Controls"
            text="Ensure each completed job reaches invoicing, documentation, and customer communication without gaps."
          />
          <ServiceDetail
            title="Owner Offload"
            text="Move repeatable coordination from owner memory into defined system behavior."
          />
        </div>
      </Section>

      <Section
        title="Revenue Protection"
        description="Operational leaks often show up as late invoicing, dropped follow-ups, and poor visibility. We address these leaks with simple controls."
      >
        <ul className="grid gap-4 text-sm sm:grid-cols-2">
          <ListItem text="Invoice timing workflows that reduce delay after job completion." />
          <ListItem text="Follow-up sequences so quoted work does not go cold." />
          <ListItem text="Exception tracking for stalled jobs and payment bottlenecks." />
          <ListItem text="Consistent records that reduce disputes and prevent rework." />
        </ul>
      </Section>

      <Section
        title="Operational Reliability"
        description="A reliable operation does not depend on one person remembering every step."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <ReliabilityCard
            title="Documented Standards"
            text="Each workflow includes practical SOP-level detail your team can use daily."
          />
          <ReliabilityCard
            title="Automation-First Execution"
            text="Repetitive prompts and status movements are automated where it reduces risk."
          />
          <ReliabilityCard
            title="Measured Stabilization"
            text="After launch, we monitor adoption and refine weak points so the system holds."
          />
        </div>
        <p className="mt-6 rounded-md border border-line bg-white p-4 text-sm leading-7 text-muted">
          AI is used selectively when it supports consistency, such as
          classifying notes or drafting standard responses. It remains secondary
          to clear workflow design.
        </p>
      </Section>

      <section className="pb-16 sm:pb-24">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
          <CTA
            title="Need help deciding where to start?"
            description="A 30-minute review will identify the highest-friction workflow and define a practical first implementation step."
            primaryLabel="Book a 30-Minute Operations Review"
            primaryHref={env.calendlyUrl}
            secondaryLabel="Use Contact Form"
            secondaryHref="/contact"
          />
          <p className="mt-4 text-xs text-muted">
            Prefer email? Reach us directly at{' '}
            <Link
              href={`mailto:${env.contactEmail}`}
              className="font-medium text-foreground"
            >
              {env.contactEmail}
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  )
}

function ServiceDetail({ title, text }: { title: string; text: string }) {
  return (
    <article className="rounded-xl border border-line bg-white p-5">
      <h3 className="text-base font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-muted">{text}</p>
    </article>
  )
}

function ListItem({ text }: { text: string }) {
  return (
    <li className="rounded-xl border border-line bg-white p-5 text-sm leading-7 text-foreground">
      {text}
    </li>
  )
}

function ReliabilityCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="rounded-xl border border-line bg-white p-5">
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-muted">{text}</p>
    </article>
  )
}
