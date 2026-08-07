import type { Metadata } from 'next'
import Link from 'next/link'
import { CTA } from '@/components/CTA'
import { Section } from '@/components/Section'
import { env } from '@/lib/env'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'What operAIte fixes: missed leads, forgotten quote follow-ups, no-shows, and late invoices for owner-led service businesses.'
}

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-line bg-bone-2 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cobalt">
            Services
          </p>
          <h1 className="mt-3 text-3xl tracking-tight text-foreground sm:text-5xl">
            What I fix
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-muted">
            Missed leads, forgotten quote follow-ups, no-shows, and late
            invoices. Built on the phones, calendar, and invoicing you already
            use.
          </p>
        </div>
      </section>

      <Section title="Core Areas I Improve" className="bg-neutral-50">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <CoreAreaCard
            label="01"
            title="Lead response and intake"
            text="A new lead gets an answer in seconds, and the details land where your team actually sees them."
          />
          <CoreAreaCard
            label="02"
            title="Scheduling and reminders"
            text="Appointments confirm themselves and reminders go out on time, so fewer jobs get forgotten or pushed."
          />
          <CoreAreaCard
            label="03"
            title="Invoicing and collections follow-through"
            text="The invoice goes out when the job ends, and the payment reminders send themselves."
          />
          <CoreAreaCard
            label="04"
            title="Internal handoffs and task ownership"
            text="Every job step has an owner, so work keeps moving without anyone chasing it."
          />
          <CoreAreaCard
            label="05"
            title="Reporting and simple visibility"
            text="You see what's pending, what's done, and what needs attention, without asking around."
          />
          <CoreAreaCard
            label="06"
            title="Customer communication and updates"
            text="Customers hear from you at the moments that matter, so expectations never drift."
          />
        </div>
      </Section>

      <Section title="Common Systems I Install">
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

      <Section title="From First Call to Live System" className="bg-neutral-50">
        <div className="grid gap-4 md:grid-cols-3">
          <EngagementStep
            step="01"
            title="Your free 30-minute review"
            text="You talk, I ask questions, and we find where work is getting stuck."
          />
          <EngagementStep
            step="02"
            title="A clear plan"
            text="You get a focused plan: what to fix first, what will change, and what it costs."
          />
          <EngagementStep
            step="03"
            title="Build and stabilize"
            text="I build the system, test it, and make sure your team can use it with confidence."
          />
        </div>
      </Section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
          <CTA
            title="Book your free 30-minute review"
            description="Low pressure. We map how work runs today, find where it's getting stuck, and you leave knowing what I'd fix first."
            primaryLabel="Book your free 30-minute review"
            primaryHref={env.calendlyUrl}
            secondaryLabel="Or send me a note"
            secondaryHref="/contact"
          />
          <p className="mt-4 text-xs text-muted">
            Prefer email? Reach me directly at{' '}
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
      <p className="mt-2 text-[15px] leading-7 text-ash-dark">{text}</p>
    </article>
  )
}

function SystemItem({ text }: { text: string }) {
  return (
    <li className="rounded-xl border border-line bg-white p-4 text-[15px] leading-7 text-ink">
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
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cobalt">
        {step}
      </p>
      <h3 className="mt-2 text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-[15px] leading-7 text-ash-dark">{text}</p>
    </article>
  )
}
