import Link from 'next/link'
import type { Metadata } from 'next'
import { CTA } from '@/components/CTA'
import { ScrollReveal } from '@/components/ScrollReveal'
import { Section } from '@/components/Section'
import { env } from '@/lib/env'

export const metadata: Metadata = {
  title: 'Operational Systems for Owner-Led Service Businesses',
  description:
    'Practical operational systems and automation for owner-led service businesses that want fewer mix-ups, faster payments, and clearer execution.'
}

export default function HomePage() {
  return (
    <>
      <ScrollReveal />

      <section className="reveal-up border-b border-line bg-white py-20 sm:py-28">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Operations consulting
            </p>
            <h1 className="mt-4 text-3xl leading-tight tracking-tight text-foreground sm:text-5xl">
              Practical systems that keep your business moving day to day.
            </h1>
            <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
              We build practical automation and clear handoffs so leads, jobs,
              and admin work move forward without constant owner oversight.
            </p>
            <p className="mt-4 text-sm font-semibold leading-7 text-foreground sm:text-base">
              What you get: faster response, fewer dropped tasks, and clear
              visibility into what is done and what is next.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={env.calendlyUrl}
                className="rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-strong"
              >
                Book a Call
              </Link>
              <Link
                href="#what-breaks"
                className="rounded-md border border-line px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-white"
              >
                See What Gets Fixed
              </Link>
            </div>
            <p className="mt-4 text-xs leading-6 text-muted">
              Built from real owner interviews + real operational constraints
            </p>
          </div>
          <div>
            <SystemSnapshot />
          </div>
        </div>
      </section>

      <Section
        id="what-breaks"
        title="What Breaks in Owner-Led Service Businesses"
        description="These are common symptoms owners notice when follow-through depends on memory."
        className="reveal-up py-20 sm:py-28"
      >
        <ul className="grid gap-4 text-sm sm:grid-cols-2">
          <PainPoint text="New leads sit unclaimed until someone remembers to reply." />
          <PainPoint text="Estimates go out late or are never sent." />
          <PainPoint text="Appointments get booked, but confirmations are inconsistent." />
          <PainPoint text="Jobs are completed, but invoices lag behind." />
          <PainPoint text="The same details are re-entered across tools and spreadsheets." />
          <PainPoint text="No one can see what is done versus pending without asking around." />
        </ul>
        <p className="mt-6 text-sm leading-7 text-muted">
          We fix these with simple systems that make follow-through visible and
          automatic.
        </p>
      </Section>

      <Section
        id="what-we-fix"
        title="What We Fix"
        description="Simple improvements that help your business run more consistently day to day."
        className="reveal-up bg-neutral-50 py-20 sm:py-28"
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
        title="How It Works"
        description="Low-risk rollout with clear deliverables and limited owner time."
        className="reveal-up py-20 sm:py-28"
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
        id="why-operaite"
        title="Why Operaite"
        className="reveal-up bg-neutral-50 py-20 sm:py-28"
      >
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="max-w-3xl space-y-3 text-sm leading-7 text-muted">
            <p>
              Operaite was built on a business management background from San
              Diego State University.
            </p>
            <p>
              In our family chiropractic practice, we built systems to stabilize
              operations during my dad&apos;s AML diagnosis.
            </p>
            <p>
              That period made clear how quickly manual processes create daily
              strain for owners and teams.
            </p>
            <p>
              We then conducted structured interviews with small business owners
              to identify where workflows break and why implementations fail.
            </p>
            <p>
              Our philosophy is simple: systems should reduce stress, not create
              more.
            </p>
            <p className="font-medium text-foreground">
              The approach is low-risk and practical: start small, stabilize,
              then expand only when it clearly helps.
            </p>
          </div>
          <div className="rounded-xl border border-line bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Approach
            </p>
            <div className="mt-4 grid grid-cols-4 items-start gap-2 text-center text-[11px] font-medium text-muted">
              <div className="space-y-2">
                <span className="mx-auto block h-2.5 w-2.5 rounded-full bg-accent" />
                <span>Context</span>
              </div>
              <div className="space-y-2">
                <span className="mx-auto block h-2.5 w-2.5 rounded-full bg-accent" />
                <span>Interviews</span>
              </div>
              <div className="space-y-2">
                <span className="mx-auto block h-2.5 w-2.5 rounded-full bg-accent" />
                <span>Build</span>
              </div>
              <div className="space-y-2">
                <span className="mx-auto block h-2.5 w-2.5 rounded-full bg-accent" />
                <span>Stabilize</span>
              </div>
            </div>
            <div className="mt-2 h-px w-full bg-line" />
          </div>
        </div>
      </Section>

      <section className="reveal-up py-20 sm:py-28">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-neutral-100 p-8 shadow-soft sm:p-10 lg:p-14">
            <CTA
              title="Start with a practical 30-minute call."
              description="We&apos;ll identify the top 2–3 operational leaks. You&apos;ll leave with a short plan and clear next steps. No prep required."
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

function PainPoint({ text }: { text: string }) {
  return (
    <li className="rounded-xl border border-line bg-white p-5 text-sm leading-7 text-foreground shadow-soft">
      {text}
    </li>
  )
}

function ValueCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="rounded-xl border border-line bg-white p-5 shadow-soft">
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
    <article className="rounded-xl border border-line bg-white p-5 shadow-soft">
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
