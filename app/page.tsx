import Link from 'next/link'
import type { Metadata } from 'next'
import { CTA } from '@/components/CTA'
import { ScrollReveal } from '@/components/ScrollReveal'
import { Section } from '@/components/Section'
import { env } from '@/lib/env'

export const metadata: Metadata = {
  title: 'Operational Systems for Owner-Led Service Businesses',
  description:
    'Practical systems for owner-led service businesses that want fewer dropped tasks, less admin drag, and clearer execution.'
}

export default function HomePage() {
  return (
    <>
      <ScrollReveal />

      <section className="reveal-up bg-white py-28 sm:py-36">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
          <div className="max-w-[72ch]">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Operations consulting
            </p>
            <h1 className="mt-4 text-[2.45rem] font-bold leading-tight tracking-tight text-foreground sm:text-[3.45rem]">
              Dependable operations for owner-led service businesses
            </h1>
            <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
              We fix the key operational bottlenecks — from follow-ups and
              scheduling to billing and internal handoffs — so your business
              runs predictably without you chasing every detail.
            </p>
            <p className="mt-4 text-sm font-semibold leading-7 text-foreground sm:text-base">
              You get faster response, cleaner handoffs, and fewer dropped
              tasks.
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="#where-work-quietly-breaks-down"
                className="rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-strong"
              >
                See Where Revenue Is Leaking
              </Link>
              <Link
                href={env.calendlyUrl}
                className="rounded-md border border-line px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-white"
              >
                Book a Clarity Call
              </Link>
            </div>
            <p className="mt-6 text-xs leading-6 text-muted">
              Built from real owner interviews + real operational constraints
            </p>
          </div>
          <div>
            <BeforeAfterPanel />
          </div>
        </div>
      </section>

      <Section
        id="where-work-quietly-breaks-down"
        title="Where Work Quietly Breaks Down"
        className="reveal-up border-t border-line bg-neutral-50 py-28 sm:py-36"
        headerClassName="max-w-[72ch] border-b border-line pb-6 sm:pb-8"
        titleClassName="text-3xl font-bold sm:text-[2.4rem]"
      >
        <ul className="grid gap-6 md:grid-cols-2">
          <ProblemBlock
            title="Leads go unanswered"
            text="Industry research consistently shows that responding within minutes — not hours — dramatically increases booking likelihood. Yet many businesses take hours to reply or never reach leads at all."
            icon={<IconMessage />}
          />
          <ProblemBlock
            title="Next steps aren’t systemized"
            text="After the first conversation, there's no automatic follow-through. Without defined triggers and reminders, potential jobs depend on memory instead of process."
            icon={<IconChecklist />}
          />
          <ProblemBlock
            title="Appointments get missed or rescheduled late"
            text="When confirmations and reminders aren't built into the workflow, no-shows and last-minute changes reduce billable time and create unnecessary friction."
            icon={<IconCalendarAlert />}
          />
          <ProblemBlock
            title="Invoices go out late or sit unpaid"
            text="More than half of small businesses report being owed money from unpaid invoices, many overdue by more than 30 days, slowing cash flow and limiting growth."
            icon={<IconInvoice />}
          />
          <ProblemBlock
            title="The owner becomes the safety net"
            text="Without clear visibility into what's pending, completed, or overdue, daily operations depend on the owner catching breakdowns before they escalate."
            icon={<IconOwnerRisk />}
            className="md:col-span-2"
          />
        </ul>
        <div className="mt-14">
          <Link
            href="#process"
            className="inline-flex rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-strong"
          >
            Stabilize These Workflows
          </Link>
        </div>
      </Section>

      <Section
        id="process"
        title="How It Works"
        description="Practical delivery with clear steps."
        className="reveal-up border-t border-line bg-white py-28 sm:py-36"
        headerClassName="max-w-[72ch] border-b border-line pb-6 sm:pb-8"
        titleClassName="text-3xl font-bold sm:text-[2.4rem]"
        descriptionClassName="max-w-[72ch]"
      >
        <div className="max-w-[72ch] space-y-5">
          <PracticalStepCard
            step="01"
            title="Discovery"
            lineOne="30-minute call to understand your operations and priorities."
          />
          <PracticalStepCard
            step="02"
            title="System Plan"
            lineOne="I analyze your workflows and deliver a short plan outlining:"
            bullets={[
              'What we will fix',
              'How it works',
              'Expected time and revenue impact'
            ]}
          />
          <PracticalStepCard
            step="03"
            title="Build & Train"
            lineOne="I implement the systems and train your team so everything runs predictably."
          />
          <PracticalStepCard
            step="04"
            title="Ongoing Support"
            lineOne="Monthly check-ins to monitor results and refine as needed."
          />
        </div>
        <div className="mt-14">
          <Link
            href={env.calendlyUrl}
            className="inline-flex rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-strong"
          >
            Get Your Revenue Reliability Scan
          </Link>
        </div>
      </Section>

      <Section
        id="why-operaite"
        title="Why Operaite"
        className="reveal-up border-t border-line bg-neutral-50 py-28 sm:py-36"
        headerClassName="max-w-[72ch] border-b border-line pb-6 sm:pb-8"
        titleClassName="text-3xl font-bold sm:text-[2.4rem]"
      >
        <div className="max-w-[72ch] space-y-6 text-sm leading-7 text-muted sm:text-base sm:leading-8">
          <p>Service businesses do not need more software.</p>
          <p className="text-lg font-semibold leading-8 text-foreground sm:text-xl">
            They need reliability.
          </p>
          <p>
            Most revenue leakage happens quietly inside daily workflows. Slow
            lead response. Missed follow-ups. No-shows. Delayed invoicing. Tasks
            that depend on memory instead of systems.
          </p>
          <p>
            I&apos;ve seen these patterns across owner-led service businesses under
            real pressure. The issue is rarely effort. It is structure.
          </p>
          <p>Operaite exists to install that structure.</p>
          <p>
            We stabilize the workflows that protect revenue and reduce
            operational fragility. Calm systems. Clear ownership. Built-in
            verification.
          </p>
          <p>Because predictable execution is what actually protects growth.</p>
        </div>
      </Section>

      <section className="reveal-up border-t border-line bg-white py-32 sm:py-40">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-3xl bg-neutral-100 p-10 shadow-soft sm:p-14 lg:p-16">
            <CTA
              title="Book a 30-minute call."
              description="We&apos;ll identify the top 2-3 operational leaks. You&apos;ll leave with a short plan and next step. No prep required. Low pressure."
              primaryLabel="Book a Call"
              primaryHref={env.calendlyUrl}
              secondaryLabel="Contact"
              secondaryHref="/contact"
            />
          </div>
        </div>
      </section>
    </>
  )
}

function BeforeAfterPanel() {
  return (
    <div className="rounded-2xl border border-line bg-neutral-50 p-5 shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow sm:p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-line bg-white p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            Before
          </p>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-foreground">
            <li className="flex items-start gap-2">
              <span className="mt-2 block h-1.5 w-1.5 rounded-full bg-stone-400" />
              <span>Leads sit in inboxes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 block h-1.5 w-1.5 rounded-full bg-stone-400" />
              <span>Follow-ups depend on memory</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 block h-1.5 w-1.5 rounded-full bg-stone-400" />
              <span>Invoices get delayed</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 block h-1.5 w-1.5 rounded-full bg-stone-400" />
              <span>The owner checks everything</span>
            </li>
          </ul>
        </div>

        <div className="rounded-xl border border-line bg-white p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            After
          </p>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-foreground">
            <li className="flex items-start gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-stone-200 text-[11px] text-stone-700">
                ✓
              </span>
              <span>Leads are logged and tracked</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-stone-200 text-[11px] text-stone-700">
                ✓
              </span>
              <span>Follow-ups trigger automatically</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-stone-200 text-[11px] text-stone-700">
                ✓
              </span>
              <span>Invoices send on completion</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-stone-200 text-[11px] text-stone-700">
                ✓
              </span>
              <span>Clear status across all jobs</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function ProblemBlock({
  title,
  text,
  icon,
  className
}: {
  title: string
  text: string
  icon: React.ReactNode
  className?: string
}) {
  return (
    <li
      className={`rounded-xl border border-line bg-white p-5 shadow-soft transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow ${className ?? ''}`}
    >
      <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-md border border-line bg-stone-50 text-muted">
        {icon}
      </div>
      <h3 className="text-base font-semibold text-foreground">{title}</h3>
      <p className="mt-2 max-w-[72ch] text-sm leading-7 text-muted">{text}</p>
    </li>
  )
}

function IconMessage() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
      <path d="M8 10h8M8 14h5" />
    </svg>
  )
}

function IconChecklist() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 6h11M9 12h11M9 18h11" />
      <path d="m3.5 6 1.5 1.5L7.5 5M3.5 12 5 13.5 7.5 11M3.5 18 5 19.5 7.5 17" />
    </svg>
  )
}

function IconCalendarAlert() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <path d="M8 2v4M16 2v4M3 9h18" />
      <path d="M12 13v4M12 11h.01" />
    </svg>
  )
}

function IconInvoice() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 3h10l3 3v15H4V3h3z" />
      <path d="M14 3v4h4M8 11h8M8 15h5" />
      <path d="M10 19h4" />
    </svg>
  )
}

function IconOwnerRisk() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 21s7-3 7-9V5l-7-2-7 2v7c0 6 7 9 7 9z" />
      <path d="M12 8v4M12 16h.01" />
    </svg>
  )
}

function PainPoint({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 rounded-xl border border-line bg-white p-5 text-sm leading-7 text-foreground shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-soft">
      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-stone-100 text-[11px] font-semibold text-accent">
        •
      </span>
      <span>{text}</span>
    </li>
  )
}

function PracticalStepCard({
  step,
  title,
  lineOne,
  lineTwo,
  bullets
}: {
  step: string
  title: string
  lineOne: string
  lineTwo?: string
  bullets?: string[]
}) {
  return (
    <article className="rounded-xl border border-line bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-soft sm:p-7">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
        {step}
      </p>
      <h3 className="mt-2 text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">{lineOne}</p>
      {lineTwo ? <p className="mt-2 text-sm leading-7 text-muted">{lineTwo}</p> : null}
      {bullets ? (
        <ul className="mt-3 space-y-2 pl-5 text-sm leading-7 text-muted">
          {bullets.map((item) => (
            <li key={item} className="list-disc">
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  )
}
