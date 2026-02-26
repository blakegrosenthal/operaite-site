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
      <section className="border-b border-line bg-white py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            Services
          </p>
          <h1 className="mt-3 text-3xl tracking-tight text-foreground sm:text-5xl">
            Operational Systems and Practical Automation
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-muted">
            Built for owner-led service businesses that want fewer mix-ups,
            faster follow-through, and calmer operations
          </p>
        </div>
      </section>

      <Section
        title="Core Areas We Improve"
        description="Focused improvements that make day-to-day operations more reliable."
        className="bg-neutral-50"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <CoreAreaCard
            label="01"
            title="Lead response and intake"
            text="New inquiries are answered quickly and details are captured clearly so opportunities are not missed."
          />
          <CoreAreaCard
            label="02"
            title="Scheduling and reminders"
            text="Appointments and reminders are handled consistently so fewer jobs are forgotten or delayed."
          />
          <CoreAreaCard
            label="03"
            title="Invoicing and collections follow-through"
            text="Invoices and payment follow-up happen on time, helping cash arrive with less manual chasing."
          />
          <CoreAreaCard
            label="04"
            title="Internal handoffs and task ownership"
            text="Each step has clear ownership so work keeps moving without confusion."
          />
          <CoreAreaCard
            label="05"
            title="Reporting and simple visibility"
            text="You can see what is pending, what is done, and where attention is needed."
          />
          <CoreAreaCard
            label="06"
            title="Customer communication and updates"
            text="Customers get clear updates so expectations stay aligned throughout the job."
          />
        </div>
      </Section>

      <Section
        title="Common Systems We Install"
        description="Practical systems we commonly put in place for service businesses."
      >
        <ul className="grid gap-3 text-sm sm:grid-cols-2">
          <SystemItem text="Immediate response to new inquiries" />
          <SystemItem text="Automated appointment confirmations" />
          <SystemItem text="Missed-call text back" />
          <SystemItem text="Quote follow-up reminders" />
          <SystemItem text="Invoice sent same-day after job completion" />
          <SystemItem text="Payment link reminders" />
          <SystemItem text="Review request after service" />
          <SystemItem text="Internal task assignment when a job is booked" />
          <SystemItem text="Daily schedule summary to the owner or admin" />
          <SystemItem text="Exception alerts when something is stuck" />
          <SystemItem text="Customer update message when a job is completed" />
          <SystemItem text="Simple weekly operations snapshot for the owner" />
        </ul>
      </Section>

      <Section
        title="How Engagements Work"
        description="Clear and structured from the first conversation through implementation."
        className="bg-neutral-50"
      >
        <div className="grid gap-4 md:grid-cols-3">
          <EngagementStep
            step="01"
            title="Free Systems Review"
            text="We review how work runs today and identify where things are getting stuck."
          />
          <EngagementStep
            step="02"
            title="Clear Plan"
            text="You get a focused plan on what to fix first, what will change, and what it costs."
          />
          <EngagementStep
            step="03"
            title="Build and Stabilize"
            text="We implement the system, test it, and make sure your team can use it with confidence."
          />
        </div>
      </Section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
          <CTA
            title="Start With a Free Systems Review"
            description="Low pressure. We map what is happening, identify where work is getting stuck, then recommend what to fix first."
            primaryLabel="Start With a Free Systems Review"
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

function CoreAreaCard({
  label,
  title,
  text
}: {
  label: string
  title: string
  text: string
}) {
  return (
    <article className="rounded-xl border border-line bg-white p-5">
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-line bg-neutral-50 text-[11px] font-semibold text-muted">
        {label}
      </span>
      <h3 className="text-base font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-muted">{text}</p>
    </article>
  )
}

function SystemItem({ text }: { text: string }) {
  return (
    <li className="rounded-xl border border-line bg-white p-4 text-sm leading-7 text-foreground">
      {text}
    </li>
  )
}

function EngagementStep({
  step,
  title,
  text
}: {
  step: string
  title: string
  text: string
}) {
  return (
    <article className="rounded-xl border border-line bg-white p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
        {step}
      </p>
      <h3 className="mt-2 text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-muted">{text}</p>
    </article>
  )
}
