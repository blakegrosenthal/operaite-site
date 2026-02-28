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

      <section className="reveal-up bg-white py-24 sm:py-32">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Operations consulting
            </p>
            <h1 className="mt-4 text-[2.3rem] leading-tight tracking-tight text-foreground sm:text-[3.2rem]">
              Dependable operations for owner-led service businesses
            </h1>
            <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
              We build practical workflows for leads, follow-ups, scheduling,
              and billing so daily work gets done without constant oversight.
            </p>
            <p className="mt-4 text-sm font-semibold leading-7 text-foreground sm:text-base">
              You get faster response, cleaner handoffs, and fewer dropped
              tasks.
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
            <BeforeAfterPanel />
          </div>
        </div>
      </section>

      <Section
        id="what-breaks"
        title="What Breaks in Owner-Led Service Businesses"
        description="These are the issues owners see week after week."
        className="reveal-up border-t border-line py-24 sm:py-32"
        titleClassName="text-3xl sm:text-[2.3rem]"
        descriptionClassName="max-w-2xl"
      >
        <ul className="grid gap-4 text-sm sm:grid-cols-2">
          <PainPoint text="Leads wait too long for a response." />
          <PainPoint text="Estimates are delayed or missed." />
          <PainPoint text="Appointments are booked, but confirmations slip." />
          <PainPoint text="Jobs finish, then invoices wait." />
          <PainPoint text="Information gets entered more than once." />
          <PainPoint text="No one sees pending work without asking around." />
        </ul>
        <p className="mt-6 text-sm leading-7 text-muted">
          We fix these with simple systems that make follow-through visible and automatic.
        </p>
      </Section>

      <Section
        id="what-we-fix"
        title="Where Work Quietly Breaks Down"
        className="reveal-up border-t border-line bg-neutral-50 py-24 sm:py-32"
        titleClassName="text-3xl sm:text-[2.3rem]"
      >
        <ul className="grid gap-x-10 gap-y-4 pl-5 text-sm leading-7 text-foreground sm:grid-cols-2">
          <li className="list-disc">Leads come in, but no one responds quickly</li>
          <li className="list-disc">Estimates are sent but never followed up</li>
          <li className="list-disc">Jobs are completed, but invoices wait</li>
          <li className="list-disc">Team members ask, “Who’s handling this?”</li>
          <li className="list-disc">Information lives in inboxes instead of systems</li>
          <li className="list-disc">
            The owner becomes the safety net for everything
          </li>
        </ul>
      </Section>

      <Section
        id="process"
        title="How It Works"
        description="Short, structured, and low-risk."
        className="reveal-up border-t border-line py-24 sm:py-32"
        titleClassName="text-3xl sm:text-[2.3rem]"
        descriptionClassName="max-w-2xl"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <PracticalStepCard
            step="01"
            title="Diagnose"
            lineOne="45-minute call + quick tool review. Your time: 60 minutes."
            lineTwo='You get: Fix Plan with the top 2-3 leaks and first system.'
          />
          <PracticalStepCard
            step="02"
            title="Build"
            lineOne="We build the smallest system that stops one leak. Your time: 30 minutes."
            lineTwo="You get: working flow and simple checklist."
          />
          <PracticalStepCard
            step="03"
            title="Train"
            lineOne="Owner and admin walkthrough. Your time: 45 minutes."
            lineTwo="You get: 1-page SOP and recorded walkthrough."
          />
          <PracticalStepCard
            step="04"
            title="Stabilize"
            lineOne="We tighten edge cases for two weeks. Your time: 15 minutes weekly."
            lineTwo='You get: basic monitoring and a clear "done" definition.'
          />
        </div>
        <p className="mt-6 text-sm leading-7 text-muted">
          Clear scope. Small first step. Stable rollout.
        </p>
      </Section>

      <Section
        id="why-operaite"
        title="Why Operaite"
        className="reveal-up border-t border-line bg-neutral-50 py-24 sm:py-32"
        titleClassName="text-3xl sm:text-[2.3rem]"
      >
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="max-w-3xl space-y-3 text-sm leading-7 text-muted">
            <p>Business management background from San Diego State University.</p>
            <p>First systems were built inside our family chiropractic practice.</p>
            <p>That work stabilized operations during my dad&apos;s AML diagnosis.</p>
            <p>We also ran structured interviews with small business owners.</p>
            <p>The pattern was clear: good teams still lose follow-through.</p>
            <p className="font-medium text-foreground">
              Systems should reduce stress, not create more. Start small, prove it, then expand.
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

      <section className="reveal-up border-t border-line py-24 sm:py-32">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-neutral-100 p-8 shadow-soft sm:p-10 lg:p-14">
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

function ValueCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="rounded-xl border border-line bg-white p-5 shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-soft">
      <h3 className="text-base font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-muted">{text}</p>
    </article>
  )
}

function PracticalStepCard({
  step,
  title,
  lineOne,
  lineTwo
}: {
  step: string
  title: string
  lineOne: string
  lineTwo: string
}) {
  return (
    <article className="rounded-xl border border-line bg-white p-5 shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-soft">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
        {step}
      </p>
      <h3 className="mt-2 text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">{lineOne}</p>
      <p className="mt-2 text-sm leading-7 text-muted">{lineTwo}</p>
    </article>
  )
}
