import type { Metadata } from 'next'
import Link from 'next/link'
import { CTA } from '@/components/CTA'
import { DailySchedule } from '@/components/artifacts/DailySchedule'
import { WeeklySnapshot } from '@/components/artifacts/WeeklySnapshot'
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
          <h1 className="mt-3 font-display text-display-lg tracking-tight text-ink sm:text-display-xl">
            What I fix
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-muted">
            Missed leads, forgotten quote follow-ups, no-shows, and late
            invoices. Built on the phones, calendar, and invoicing you already
            use.
          </p>
        </div>
      </section>

      <Section title="Core areas I improve." className="bg-bone-2">
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

      <Section title="Common systems I install.">
        <ul className="grid gap-x-10 text-sm sm:grid-cols-2">
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

      <section className="py-14 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-6">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-amber">
                What your morning looks like
              </p>
              <div className="mt-4">
                <DailySchedule />
              </div>
            </div>
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-amber">
                What your week looks like
              </p>
              <div className="mt-4">
                <WeeklySnapshot />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section title="From first call to live system." className="bg-bone-2">
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
          >
            Prefer email? Reach me directly at{' '}
            <Link
              href={`mailto:${env.contactEmail}`}
              className="font-medium text-ink"
            >
              {env.contactEmail}
            </Link>
            .
          </CTA>
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
      <span className="font-display text-display-md leading-none text-cobalt/70">
        {label}
      </span>
      <h3 className="mt-3 font-display text-display-sm text-ink">
        {title}
      </h3>
      <p className="mt-2 text-[15px] leading-7 text-ash-dark">{text}</p>
    </article>
  )
}

function SystemItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 border-b border-line py-3 text-[15px] leading-7 text-ink">
      <svg className="mt-1.5 h-4 w-4 flex-none text-cobalt" viewBox="0 0 16 16" fill="none">
        <path d="M3 8.5l3.2 3.2L13 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
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
    <article>
      <span className="font-display text-display-md leading-none text-cobalt/70">
        {step}
      </span>
      <h3 className="mt-3 font-display text-display-sm text-ink">{title}</h3>
      <p className="mt-2 text-[15px] leading-7 text-ash-dark">{text}</p>
    </article>
  )
}
