import Link from 'next/link'
import type { Metadata } from 'next'
import { CaseStudyCard } from '@/components/CaseStudyCard'
import { CTA } from '@/components/CTA'
import { ScrollReveal } from '@/components/ScrollReveal'
import { Section } from '@/components/Section'
import { caseStudies } from '@/lib/caseStudies'
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

      <section className="reveal-up bg-white pt-20 pb-36 sm:pt-24 sm:pb-44">
        <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-[56rem] px-6 py-8 text-center sm:px-10 sm:py-10">
            <p className="hero-seq hero-seq-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Operations consulting
            </p>
            <h1 className="hero-seq hero-seq-2 mx-auto mt-4 max-w-[54rem] text-[2.6rem] font-[680] leading-[1.16] tracking-[-0.01em] text-foreground sm:text-[3.7rem]">
              Stop Losing Revenue to Missed Follow-Ups, No-Shows, and Delayed
              Invoices
            </h1>
            <p className="hero-seq hero-seq-3 mx-auto mt-6 max-w-4xl text-base font-medium leading-8 text-foreground/80 sm:text-lg">
              We install simple systems so leads get answered fast,
              appointments are confirmed, invoices go out on time, and your
              team doesn’t have to rely on memory.
            </p>
            <div className="hero-seq hero-seq-4 relative mt-10 flex flex-wrap justify-center gap-4 sm:mt-11 sm:gap-5">
              <Link
                href="#where-work-quietly-breaks-down"
                className="rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_24px_-14px_rgba(31,42,68,0.62),0_0_0_1px_rgba(255,255,255,0.16)_inset] transition-all duration-150 ease-out hover:-translate-y-0.5 hover:bg-accent-strong hover:shadow-[0_16px_32px_-16px_rgba(91,114,139,0.72),0_0_0_1px_rgba(255,255,255,0.2)_inset]"
              >
                Book a 30-Minute Operations Review
              </Link>
              <Link
                href={env.calendlyUrl}
                className="rounded-md border border-line px-5 py-3 text-sm font-semibold text-foreground transition-all duration-150 ease-out hover:-translate-y-0.5 hover:border-[rgba(91,114,139,0.44)] hover:bg-[rgba(91,114,139,0.06)] hover:shadow-[0_12px_24px_-20px_rgba(31,42,68,0.48)]"
              >
                See Where Revenue Is Leaking
              </Link>
            </div>
            <HeroWorkflow />
            <p className="hero-seq hero-seq-5 mt-8 text-center text-xs leading-6 text-muted">
              Built from real owner interviews + real operational constraints
            </p>
          </div>
          <div className="relative mx-auto mt-20 w-full max-w-[74rem] sm:mt-24">
            <div className="relative">
              <BeforeAfterPanel />
            </div>
          </div>
        </div>
      </section>

      <Section
        id="where-work-quietly-breaks-down"
        title="Where Work Quietly Breaks Down"
        description="Most revenue loss in service businesses doesn’t come from big mistakes. It comes from small gaps in everyday workflows."
        className="reveal-up border-t border-line bg-neutral-50 py-32 sm:py-40"
        headerClassName="max-w-[72ch] border-b border-line pb-6 sm:pb-8"
        titleClassName="text-3xl font-[650] tracking-[-0.01em] sm:text-[2.4rem]"
      >
        <ul className="grid gap-6 md:grid-cols-2">
          <ProblemBlock
            title="The first company to respond usually wins the job"
            text="When replies take hours, customers book with the business that responded first. Revenue is lost before your team even sees the opportunity."
            icon={<IconMessage />}
          />
          <ProblemBlock
            title="Quotes rarely close without follow-ups"
            text="When follow-ups depend on memory, they happen late or not at all. Interested customers quietly disappear."
            icon={<IconChecklist />}
          />
          <ProblemBlock
            title="Missed appointments erase billable time"
            text="Without confirmations and reminders built into the workflow, customers forget, schedules shift, and revenue disappears from the calendar."
            icon={<IconCalendarAlert />}
          />
          <ProblemBlock
            title="Cash flow slows when invoices wait"
            text="When billing happens at the end of the day or week instead of when work finishes, payments slow down and revenue sits in limbo."
            icon={<IconInvoice />}
          />
          <ProblemBlock
            title="The business runs on the owner’s memory"
            text="When systems aren’t clear, the owner becomes the backstop for every workflow. Growth stalls because the business depends on constant checking."
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

      <div className="reveal-up py-20 sm:py-24">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl border-b border-line pb-6 sm:pb-8">
            <h2 className="text-3xl font-[650] tracking-[-0.01em] text-foreground sm:text-[2.4rem]">
              What Makes Oper<span className="brand-ai">AI</span>te Different
            </h2>
          </div>
          <div className="mx-auto mt-8 max-w-4xl space-y-3 sm:space-y-4">
            <p className="flex items-center gap-3 rounded-xl border border-line bg-neutral-50 px-5 py-3 text-sm font-medium leading-7 text-foreground sm:px-6 sm:py-3.5 sm:text-base">
              <span className="inline-flex h-6 w-6 flex-none items-center justify-center rounded-md border border-line bg-white text-accent">
                <IconCheckLine />
              </span>
              <span>Built from real conversations with owner-led service businesses</span>
            </p>
            <p className="flex items-center gap-3 rounded-xl border border-line bg-neutral-50 px-5 py-3 text-sm font-medium leading-7 text-foreground sm:px-6 sm:py-3.5 sm:text-base">
              <span className="inline-flex h-6 w-6 flex-none items-center justify-center rounded-md border border-line bg-white text-accent">
                <IconCheckLine />
              </span>
              <span>Focused on the workflows that protect revenue and keep work moving</span>
            </p>
            <p className="flex items-center gap-3 rounded-xl border border-line bg-neutral-50 px-5 py-3 text-sm font-medium leading-7 text-foreground sm:px-6 sm:py-3.5 sm:text-base">
              <span className="inline-flex h-6 w-6 flex-none items-center justify-center rounded-md border border-line bg-white text-accent">
                <IconCheckLine />
              </span>
              <span>Designed to reduce stress, not introduce more tools</span>
            </p>
            <p className="flex items-center gap-3 rounded-xl border border-line bg-neutral-50 px-5 py-3 text-sm font-medium leading-7 text-foreground sm:px-6 sm:py-3.5 sm:text-base">
              <span className="inline-flex h-6 w-6 flex-none items-center justify-center rounded-md border border-line bg-white text-accent">
                <IconCheckLine />
              </span>
              <span>Implemented, tested, and supported, not just recommended</span>
            </p>
          </div>
        </div>
      </div>

      <Section
        id="proof"
        title="Proof"
        description="A grounded example of how a revenue-critical workflow was stabilized with a simple system."
        className="reveal-up border-t border-line bg-white py-32 sm:py-40"
        headerClassName="max-w-[72ch] border-b border-line pb-6 sm:pb-8"
        titleClassName="text-3xl font-[650] tracking-[-0.01em] sm:text-[2.4rem]"
      >
        <div className="max-w-4xl">
          <CaseStudyCard caseStudy={caseStudies[0]} />
        </div>
      </Section>

      <Section
        id="process"
        title="How It Works"
        description="We follow a simple, structured process to make your operations more predictable without disrupting how you already run your business."
        className="reveal-up border-t border-line bg-white py-32 sm:py-40"
        headerClassName="max-w-[72ch] border-b border-line pb-6 sm:pb-8"
        titleClassName="text-3xl font-[650] tracking-[-0.01em] sm:text-[2.4rem]"
        descriptionClassName="max-w-[72ch]"
      >
        <div className="max-w-[72ch] md:max-w-5xl">
          <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
            <PracticalStepCard
              step="01"
              title="Understand Where Work Breaks"
              lineOne="We start with a focused call to understand how work currently flows, where tasks stall, and where revenue slips through."
            />
            <PracticalStepCard
              step="02"
              title="Identify What Matters Most"
              lineOne="Not everything needs fixing. We prioritize the workflows that protect revenue and reduce daily friction."
            />

            <div className="md:col-span-2 md:flex md:justify-center">
              <div className="md:w-[min(100%,46rem)]">
                <PracticalStepCard
                  step="03"
                  title="Build Simple Systems"
                  lineOne="We design and implement practical systems around those gaps so follow-ups, scheduling, billing, and internal handoffs happen automatically."
                  className="border-foreground/15 shadow-soft"
                />
              </div>
            </div>

            <PracticalStepCard
              step="04"
              title="Train and Verify"
              lineOne="Your team is trained on the new workflow, and we verify that everything works in real conditions."
            />
            <PracticalStepCard
              step="05"
              title="Monitor and Refine"
              lineOne="After launch, we check in regularly, review performance, and adjust as needed to keep operations steady."
            />
          </div>
        </div>
        <div className="mt-16 flex justify-center sm:mt-20">
          <Link
            href={env.calendlyUrl}
            className="inline-flex rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-strong"
          >
            Book a 30-Minute Operations Review
          </Link>
        </div>
      </Section>

      <Section
        id="why-operaite"
        title={
          <>
            Why Oper<span className="brand-ai">AI</span>te
          </>
        }
        className="reveal-up border-t border-line bg-neutral-50 py-32 sm:py-40"
        headerClassName="max-w-[72ch] border-b border-line pb-6 sm:pb-8"
        titleClassName="text-3xl font-[650] tracking-[-0.01em] sm:text-[2.4rem]"
      >
        <div className="max-w-[72ch] space-y-8 text-sm leading-7 text-muted sm:space-y-10 sm:text-base sm:leading-8">
          <article className="space-y-2.5">
            <h3 className="text-sm font-[650] tracking-[-0.01em] text-foreground sm:text-base">
              Why businesses lose revenue
            </h3>
            <p>
              Most service businesses don’t lose money because they aren’t
              working hard. A lead comes in but no one replies until later that
              day. A quote is sent but no one follows up. A job is finished but
              the invoice doesn’t go out until the end of the week.
            </p>
          </article>

          <article className="space-y-2.5">
            <h3 className="text-sm font-[650] tracking-[-0.01em] text-foreground sm:text-base">
              Why systems break down
            </h3>
            <p>
              The problem is usually simpler. Important steps in everyday work
              depend on someone remembering to do them. Small gaps like these
              quietly affect bookings, cash flow, and how stressful the business
              feels to run.
            </p>
          </article>

          <article className="space-y-2.5">
            <h3 className="text-sm font-[650] tracking-[-0.01em] text-foreground sm:text-base">
              What Oper<span className="brand-ai">AI</span>te changes
            </h3>
            <p>
              Oper<span className="brand-ai">AI</span>te focuses on fixing those
              operational gaps. We look at how work actually moves through your
              business, identify where things stall or get missed, and then put
              simple systems in place so those steps happen consistently. Most
              engagements focus on one or two workflows where the business is
              currently losing time or revenue. The goal isn’t to introduce
              complicated technology. It’s to make everyday operations more
              reliable so the business runs without constant checking from the
              owner.
            </p>
          </article>
        </div>
      </Section>

      <section className="reveal-up border-t border-line bg-white py-32 sm:py-40">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-3xl bg-neutral-100 p-10 shadow-soft sm:p-14 lg:p-16">
            <CTA
              title="Book a 30-Minute Operations Review"
              description="We&apos;ll identify the top 2-3 operational leaks. You&apos;ll leave with a short plan and next step. No prep required. Low pressure."
              primaryLabel="Book a 30-Minute Operations Review"
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

function HeroWorkflow() {
  const steps = ['Lead', 'Follow Up', 'Appointment', 'Invoice', 'Paid']

  return (
    <div
      className="hero-seq hero-seq-6 mx-auto mt-11 w-full max-w-[42rem]"
      aria-label="Lead to payment workflow"
    >
      <div className="hidden sm:block">
        <div className="relative px-7">
          <div className="absolute left-7 right-7 top-[5px] h-px">
            <div className="relative h-px bg-[rgba(58,95,138,0.18)]" />
          </div>
          <ol className="relative grid grid-cols-5 gap-2">
            {steps.map((step, index) => (
              <li key={step} className="flex flex-col items-center text-center">
                <span
                  className="workflow-node-step h-[10px] w-[10px] rounded-full border border-[rgba(58,95,138,0.32)] bg-[rgba(58,95,138,0.2)]"
                  style={{ animationDelay: `${index * 0.9}s` }}
                />
                <span className="mt-3 text-[10px] font-medium tracking-[0.01em] text-foreground/65">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="sm:hidden">
        <div className="relative mx-auto w-full max-w-[15rem] pt-1">
          <div className="absolute bottom-3 left-1/2 top-2 w-px -translate-x-1/2">
            <div className="relative h-full w-px bg-[rgba(58,95,138,0.18)]" />
          </div>
          <ol className="relative space-y-2">
            {steps.map((step, index) => (
              <li key={step} className="flex flex-col items-center text-center">
                <span
                  className="workflow-node-step h-[10px] w-[10px] rounded-full border border-[rgba(58,95,138,0.32)] bg-[rgba(58,95,138,0.2)]"
                  style={{ animationDelay: `${index * 0.9}s` }}
                />
                <span className="mt-2 text-[10px] font-medium tracking-[0.01em] text-foreground/65">
                  {step}
                </span>
                {index < steps.length - 1 ? (
                  <span className="mt-2 text-[10px] leading-none text-[rgba(58,95,138,0.46)]">
                    ↓
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}

function BeforeAfterPanel() {
  return (
    <div className="rounded-2xl border border-foreground/10 bg-white/95 p-5 shadow-[0_18px_48px_rgba(15,23,42,0.12)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_24px_64px_rgba(15,23,42,0.16)] sm:p-7">
      <div className="relative grid gap-4 sm:grid-cols-2 sm:gap-5">
        <div className="pointer-events-none absolute inset-y-3 left-1/2 hidden -translate-x-1/2 sm:block">
          <span className="block h-full w-px bg-line/70" />
        </div>

        <div className="relative rounded-xl border border-line/90 bg-stone-100/75 p-4 sm:p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground/65">
            Before
          </p>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-muted">
            <li className="flex items-start gap-2">
              <span className="mt-2 block h-1.5 w-1.5 rounded-full bg-stone-500" />
              <span>Leads sit in inboxes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 block h-1.5 w-1.5 rounded-full bg-stone-500" />
              <span>Follow-ups depend on memory</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 block h-1.5 w-1.5 rounded-full bg-stone-500" />
              <span>Invoices get delayed</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 block h-1.5 w-1.5 rounded-full bg-stone-500" />
              <span>The owner checks everything</span>
            </li>
          </ul>
        </div>

        <div className="relative rounded-xl border border-line bg-emerald-50/60 p-4 sm:p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            After
          </p>
          <div className="mt-3 space-y-3">
            <SystemMiniCard
              event="New inquiry arrives"
              actions={['Response sent immediately', 'Lead logged automatically']}
              delay="40ms"
            />
            <FlowConnector compact />
            <SystemMiniCard
              event="Quote is sent"
              actions={['Follow-up scheduled']}
              delay="90ms"
            />
            <FlowConnector compact />
            <SystemMiniCard
              event="Appointment booked"
              actions={['Confirmation sent', 'Reminder scheduled']}
              delay="140ms"
            />
            <FlowConnector compact />
            <SystemMiniCard
              event="Job marked complete"
              actions={['Invoice sent', 'Payment link included']}
              delay="190ms"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function SystemMiniCard({
  event,
  actions,
  delay
}: {
  event: string
  actions: string[]
  delay: string
}) {
  return (
    <article
      className="reveal-up rounded-lg border border-foreground/15 bg-white/90 p-3.5 shadow-[0_4px_12px_rgba(15,23,42,0.06)] transition-all duration-300 ease-out hover:bg-white"
      style={{ transitionDelay: delay }}
    >
      <p className="text-sm font-semibold leading-6 text-foreground">{event}</p>
      <ul className="mt-2 space-y-1.5">
        {actions.map((action) => (
          <li
            key={action}
            className="flex items-start gap-2 text-xs font-medium leading-5 text-foreground/90"
          >
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-accent/20 bg-accent/15 text-[10px] text-accent-strong">
              ✓
            </span>
            <span>{action}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}

function FlowConnector({
  compact = false
}: {
  compact?: boolean
}) {
  return (
    <div className={`flex justify-center ${compact ? 'py-0.5' : 'py-1.5'}`}>
      <div className="flex flex-col items-center text-muted/65">
        <span className={`${compact ? 'h-3' : 'h-4'} w-px bg-line`} />
        <span className={`${compact ? 'text-[10px]' : 'text-[11px]'} leading-none`}>
          ↓
        </span>
        <span className={`${compact ? 'h-3' : 'h-4'} w-px bg-line`} />
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

function IconCheckLine() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m6 12 4 4 8-8" />
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
  bullets,
  className
}: {
  step: string
  title: string
  lineOne: string
  lineTwo?: string
  bullets?: string[]
  className?: string
}) {
  return (
    <article
      className={`rounded-xl border border-line bg-white p-5 shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-soft sm:p-6 ${className ?? ''}`}
    >
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
