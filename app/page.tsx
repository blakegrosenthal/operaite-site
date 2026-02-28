import Link from 'next/link'
import type { Metadata } from 'next'
import { CTA } from '@/components/CTA'
import { FAQ } from '@/components/FAQ'
import { Section } from '@/components/Section'
import { env } from '@/lib/env'

export const metadata: Metadata = {
  title: 'Operational Systems for Owner-Led Service Businesses',
  description:
    'Practical operational systems and automation for owner-led service businesses that want fewer mix-ups, faster payments, and clearer execution.'
}

const faqItems = [
  {
    question: 'Do we need new software?',
    answer:
      'Usually not. We start with what you already use and keep changes simple.'
  },
  {
    question: 'Will my team actually use this?',
    answer:
      'Yes. We keep the process practical, train your team, and avoid unnecessary complexity.'
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Most projects are implemented in a few weeks, with a clear scope and minimal disruption.'
  },
  {
    question: 'What kinds of businesses are a good fit?',
    answer:
      'Owner-led service businesses that are busy, growing, and want smoother follow through.'
  },
  {
    question: 'What if we already have tools in place?',
    answer:
      'That is common. We improve how your current tools work together so daily tasks are easier to run.'
  },
  {
    question: 'Is this “AI” or automation?',
    answer:
      'Mostly practical automation. If AI is used, it is only in small, helpful ways that keep things simple.'
  }
]

export default function HomePage() {
  return (
    <>
      <section className="reveal-up border-b border-line bg-white py-16 sm:py-24">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Operations consulting
            </p>
            <h1 className="reveal-up reveal-delay-1 mt-4 text-3xl leading-tight tracking-tight text-foreground sm:text-5xl">
              Practical systems that keep your business moving day to day.
            </h1>
            <p className="reveal-up reveal-delay-2 mt-5 text-base leading-8 text-muted sm:text-lg">
              We build practical automation and clear handoffs so leads, jobs,
              and admin work move forward without constant owner oversight.
            </p>
            <p className="reveal-up reveal-delay-2 mt-4 text-sm font-semibold leading-7 text-foreground sm:text-base">
              What you get: faster response, fewer dropped tasks, and clear
              visibility into what is done and what is next.
            </p>
            <div className="reveal-up reveal-delay-3 mt-8 flex flex-wrap gap-3">
              <Link
                href={env.calendlyUrl}
                className="rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-strong"
              >
                Book a Call
              </Link>
              <Link
                href="#where-work-gets-stuck"
                className="rounded-md border border-line px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-white"
              >
                See What Gets Fixed
              </Link>
            </div>
            <p className="reveal-up reveal-delay-4 mt-4 text-xs leading-6 text-muted">
              Built from real owner interviews + real operational constraints
            </p>
          </div>
          <div className="reveal-up reveal-delay-3">
            <SystemSnapshot />
          </div>
        </div>
      </section>

      <Section
        id="owner-interviews"
        title="What We Heard From Owners"
        description="Across interviews, we heard the same pattern: too much work is still manual, tools are fragmented, follow-through depends on memory, and implementation is the blocker."
        className="reveal-up bg-neutral-50"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <QuoteCard quote="“Purchasing… That’s all pretty much done by hand.”" />
          <QuoteCard quote="“We’re just not set up… where it just does it on its own yet.”" />
          <QuoteCard quote="“Cash flow is the name of the game with small business, and that’s the most difficult part.”" />
          <QuoteCard quote="“There’s no manual to really implement it.”" />
        </div>
        <p className="mt-5 text-xs leading-6 text-muted">
          Quotes from owner interviews across construction, healthcare, and
          service businesses. These are not paid endorsements.
        </p>
      </Section>

      <Section
        id="industry-benchmarks"
        title="Industry Benchmarks"
        description="Accepted patterns from published research that align with what owners report in daily operations."
        className="reveal-up"
      >
        <div className="grid gap-4 md:grid-cols-3">
          <BenchmarkCard
            title="Speed to Lead"
            headline="Fast responses win work"
            body="Studies found the odds of contacting a lead drop dramatically when response time moves from 5 minutes to 30 minutes."
          />
          <BenchmarkCard
            title="First Hour Matters"
            headline="The first hour is a window"
            body="Research has shown companies responding within an hour are far more likely to qualify leads than those who wait longer."
          />
          <BenchmarkCard
            title="No-shows are reducible"
            headline="Reminders reduce no-shows"
            body="Peer-reviewed studies across healthcare and service settings show reminders can reduce no-shows, especially when two-way confirmations are used."
          />
        </div>
        <p className="mt-5 text-xs leading-6 text-muted">
          Benchmarks compiled from published research (MIT Lead Response
          Management study, Harvard Business Review, and peer-reviewed
          appointment reminder studies).
        </p>
      </Section>

      <Section
        id="where-work-gets-stuck"
        title="Where Work Gets Stuck"
        description="Owner led businesses usually do not have growth problems first. They have follow through problems."
        className="reveal-up"
      >
        <ul className="grid gap-4 text-sm sm:grid-cols-2">
          <PainPoint text="Leads do not get a fast response" />
          <PainPoint text="Follow ups depend on memory" />
          <PainPoint text="Reminders are manual" />
          <PainPoint text="Invoices go out late" />
          <PainPoint text="Information gets re entered" />
          <PainPoint text="Staff is unsure what the next step is" />
          <PainPoint text="The owner ends up checking everything" />
        </ul>
      </Section>

      <Section
        id="problems"
        eyebrow="Common friction"
        title="Operations should support growth, not slow it down."
        description="Most owner-led firms we work with are already busy and capable. The issue is usually inconsistent handoffs and too much manual coordination."
        className="bg-neutral-50 reveal-up"
      >
        <ul className="grid gap-4 text-sm sm:grid-cols-2">
          <PainPoint text="Missed follow-ups after calls, estimates, or appointments." />
          <PainPoint text="No-shows and dropped tasks caused by unclear reminders or ownership." />
          <PainPoint text="Slow payments due to delayed invoicing and inconsistent collection steps." />
          <PainPoint text="Re-entering the same information in multiple places." />
          <PainPoint text="Owner still involved in daily admin to keep operations moving." />
        </ul>
      </Section>

      <Section
        id="what-we-do"
        eyebrow="Benefits"
        title="What you get when the right systems are in place."
        description="Simple improvements that help your business run more consistently day to day."
        className="reveal-up"
      >
        <div className="grid gap-4 sm:grid-cols-3">
          <ValueCard
            title="Fast follow through"
            text="Leads, reminders, and next steps happen consistently without someone needing to remember."
          />
          <ValueCard
            title="Less manual admin work"
            text="We remove repetitive tasks that slow the business down and create errors."
          />
          <ValueCard
            title="More peace of mind"
            text="You know what is happening without checking everything or relying on one person."
          />
        </div>
      </Section>

      <Section
        id="process"
        eyebrow="Process"
        title="How it works"
        description="Low-risk rollout with clear deliverables and limited owner time."
        className="bg-neutral-50 reveal-up"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <PracticalStepCard
            step="01"
            title="Diagnose"
            happens="45-minute call + quick review of current tools."
            receive='A short "Fix Plan" outlining top 2-3 revenue-critical leaks and the simplest systems to stop them.'
            time="60 minutes."
          />
          <PracticalStepCard
            step="02"
            title="Build"
            happens="Implement the smallest reliable system that stops the leak."
            receive="Working automations + a simple operating checklist."
            time="30 minutes for review."
          />
          <PracticalStepCard
            step="03"
            title="Train"
            happens="Teach the admin and owner the new flow."
            receive="A 1-page SOP + recorded walkthrough."
            time="45 minutes."
          />
          <PracticalStepCard
            step="04"
            title="Stabilize"
            happens="Tighten edge cases, add monitoring, ensure handoffs are clean."
            receive='"Done means silence" definition and basic monitoring.'
            time="15 minutes weekly for 2 weeks."
          />
        </div>
        <p className="mt-6 text-sm leading-7 text-muted">
          Clear scope. Small first step. Structured follow-through.
        </p>
      </Section>

      <Section
        id="example-system"
        title="Example System We Build"
        description="A simple example of how practical automation reduces daily stress without changing your whole business"
        className="reveal-up"
      >
        <div className="flex flex-col gap-2 md:flex-row md:items-stretch md:gap-3">
          <div className="rounded-xl border border-line bg-white p-5 text-sm font-medium leading-7 text-foreground md:flex-1">
            New lead comes in
          </div>
          <div className="flex items-center justify-center text-lg text-muted md:px-1">
            <span className="md:hidden">↓</span>
            <span className="hidden md:inline">→</span>
          </div>
          <div className="rounded-xl border border-line bg-white p-5 text-sm font-medium leading-7 text-foreground md:flex-1">
            Instant text reply goes out
          </div>
          <div className="flex items-center justify-center text-lg text-muted md:px-1">
            <span className="md:hidden">↓</span>
            <span className="hidden md:inline">→</span>
          </div>
          <div className="rounded-xl border border-line bg-white p-5 text-sm font-medium leading-7 text-foreground md:flex-1">
            Booking link sent and appointment scheduled
          </div>
          <div className="flex items-center justify-center text-lg text-muted md:px-1">
            <span className="md:hidden">↓</span>
            <span className="hidden md:inline">→</span>
          </div>
          <div className="rounded-xl border border-line bg-white p-5 text-sm font-medium leading-7 text-foreground md:flex-1">
            Confirmation and reminders run automatically
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-line bg-white p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            What changes
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-foreground">
            <li>Faster response times</li>
            <li>Less manual follow up</li>
            <li>A more professional customer experience</li>
          </ul>
        </div>
      </Section>

      <Section
        id="who-its-for"
        eyebrow="Who it is for"
        title="Designed for owner-led service businesses in a growth phase."
        description="Best fit for teams that are gaining demand but feel operationally stretched."
        className="reveal-up"
      >
        <div className="grid gap-4 sm:grid-cols-3">
          <FitCard title="Business Type" text="Owner-led service businesses" />
          <FitCard title="Team Size" text="Usually 1-20 employees" />
          <FitCard
            title="Current Stage"
            text="Growing, but carrying too much process overhead"
          />
        </div>
      </Section>

      <Section
        id="trust-and-approach"
        eyebrow="Trust and approach"
        title="Trust and Approach"
        className="bg-neutral-50 reveal-up"
      >
        <ul className="grid gap-4 text-sm sm:grid-cols-3">
          <li className="rounded-xl border border-line bg-white p-5 text-sm leading-7 text-foreground">
            Clear scope before we build anything
          </li>
          <li className="rounded-xl border border-line bg-white p-5 text-sm leading-7 text-foreground">
            Simple systems your staff will actually use
          </li>
          <li className="rounded-xl border border-line bg-white p-5 text-sm leading-7 text-foreground">
            Reliable follow through, not hype
          </li>
        </ul>
        <p className="mt-6 text-sm leading-7 text-muted">
          If it does not reduce daily stress or protect revenue, we do not
          recommend it.
        </p>
      </Section>

      <Section
        id="pricing"
        eyebrow="Pricing"
        title="Typical Project Pricing"
        description="Most installations focus on one to three revenue critical areas first, like lead response, reminders, or billing follow through."
        className="reveal-up"
      >
        <p className="max-w-3xl text-base font-semibold leading-8 text-foreground">
          Typical projects range from $2,500 to $7,500 depending on complexity.
        </p>
        <p className="mt-2 max-w-3xl text-base leading-8 text-muted">
          We start small, prove reliability, then expand if it makes sense.
        </p>
      </Section>

      <Section
        id="pilot-implementation"
        eyebrow="Pilot implementation"
        title="Pilot Implementation"
        description="We recently implemented a simple lead response system for a small service business. New leads receive an immediate text with a booking link, so follow up happens fast without manual effort."
        className="bg-neutral-50 reveal-up"
      >
        <ul className="grid gap-4 text-sm sm:grid-cols-3">
          <li className="rounded-xl border border-line bg-white p-5 text-sm leading-7 text-foreground">
            Faster response to new inquiries
          </li>
          <li className="rounded-xl border border-line bg-white p-5 text-sm leading-7 text-foreground">
            Less manual chasing
          </li>
          <li className="rounded-xl border border-line bg-white p-5 text-sm leading-7 text-foreground">
            A smoother, more professional booking experience
          </li>
        </ul>
      </Section>

      <Section
        id="faq"
        eyebrow="FAQ"
        title="Common questions before a first review."
        description="Straightforward answers to help you evaluate fit."
        className="reveal-up"
      >
        <FAQ items={faqItems} />
      </Section>

      <section className="reveal-up py-16 sm:py-24">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-neutral-100 p-6 sm:p-8 lg:p-10">
            <CTA
              title="Book a 30-Minute Operations Review"
              description="You will leave with a clear diagnosis of your biggest workflow risks and practical next steps. No pressure, no long sales process."
              primaryLabel="Book a 30-Minute Operations Review"
              primaryHref={env.calendlyUrl}
              secondaryLabel="Contact Us Instead"
              secondaryHref="/contact"
            />
          </div>
        </div>
      </section>
    </>
  )
}

function SystemSnapshot() {
  const rows = [
    {
      flow: 'Lead captured → follow-up sent',
      status: 'Automated'
    },
    {
      flow: 'Appointment booked → reminder confirmed',
      status: 'Tracked'
    },
    {
      flow: 'Job completed → invoice sent',
      status: 'Automated'
    }
  ] as const

  return (
    <div className="rounded-2xl border border-line bg-neutral-50 p-5 shadow-soft sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
        System Snapshot
      </p>
      <div className="mt-4 space-y-3">
        {rows.map((row) => (
          <div
            key={row.flow}
            className="flex flex-col gap-3 rounded-xl border border-line bg-white p-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <p className="text-sm font-medium leading-6 text-foreground">
              {row.flow}
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-line bg-stone-50 px-3 py-1 text-xs font-semibold text-muted">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                ✓
              </span>
              <span>Status: {row.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function QuoteCard({ quote }: { quote: string }) {
  return (
    <article className="rounded-xl bg-white p-5 shadow-soft">
      <div className="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-stone-100 text-sm font-semibold text-accent">
        “
      </div>
      <p className="text-sm leading-7 text-foreground">{quote}</p>
    </article>
  )
}

function BenchmarkCard({
  title,
  headline,
  body
}: {
  title: string
  headline: string
  body: string
}) {
  return (
    <article className="rounded-xl border border-line bg-white p-6 shadow-soft transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-md">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
        {title}
      </p>
      <h3 className="mt-2 text-lg font-semibold text-foreground">{headline}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">{body}</p>
    </article>
  )
}

function PainPoint({ text }: { text: string }) {
  return (
    <li className="rounded-xl border border-line bg-white p-5 text-sm leading-7 text-foreground transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-soft">
      {text}
    </li>
  )
}

function ValueCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="rounded-xl border border-line bg-white p-5 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-soft">
      <h3 className="text-base font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-muted">{text}</p>
    </article>
  )
}

function PracticalStepCard({
  step,
  title,
  happens,
  receive,
  time
}: {
  step: string
  title: string
  happens: string
  receive: string
  time: string
}) {
  return (
    <article className="rounded-xl border border-line bg-white p-5 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-soft">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
        {step}
      </p>
      <h3 className="mt-2 text-lg font-semibold text-foreground">{title}</h3>
      <dl className="mt-3 space-y-3 text-sm leading-7">
        <div>
          <dt className="font-semibold text-foreground">What happens</dt>
          <dd className="text-muted">{happens}</dd>
        </div>
        <div>
          <dt className="font-semibold text-foreground">You receive</dt>
          <dd className="text-muted">{receive}</dd>
        </div>
        <div>
          <dt className="font-semibold text-foreground">Your time</dt>
          <dd className="text-muted">{time}</dd>
        </div>
      </dl>
    </article>
  )
}

function FitCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="rounded-xl border border-line bg-white p-5 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-soft">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">
        {title}
      </h3>
      <p className="mt-2 text-base font-semibold text-foreground">{text}</p>
    </article>
  )
}
