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
              We fix the key operational bottlenecks — from follow-ups and
              scheduling to billing and internal handoffs — so your business
              runs predictably without you chasing every detail.
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
                href="#where-work-quietly-breaks-down"
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
        id="where-work-quietly-breaks-down"
        title="Where Work Quietly Breaks Down"
        className="reveal-up border-t border-line py-24 sm:py-32"
        titleClassName="text-3xl sm:text-[2.3rem]"
      >
        <ul className="max-w-3xl space-y-6">
          <li>
            <h3 className="text-base font-semibold text-foreground">
              Leads go unanswered
            </h3>
            <p className="mt-2 text-sm leading-7 text-muted">
              Industry research consistently shows that responding within minutes
              — not hours — dramatically increases booking likelihood. Yet many
              businesses take hours to reply or never reach leads at all.
            </p>
          </li>
          <li>
            <h3 className="text-base font-semibold text-foreground">
              Next steps aren’t systemized
            </h3>
            <p className="mt-2 text-sm leading-7 text-muted">
              After the first conversation, there&apos;s no automatic
              follow-through. Without defined triggers and reminders, potential
              jobs depend on memory instead of process.
            </p>
          </li>
          <li>
            <h3 className="text-base font-semibold text-foreground">
              Appointments get missed or rescheduled late
            </h3>
            <p className="mt-2 text-sm leading-7 text-muted">
              When confirmations and reminders aren&apos;t built into the
              workflow, no-shows and last-minute changes reduce billable time
              and create unnecessary friction.
            </p>
          </li>
          <li>
            <h3 className="text-base font-semibold text-foreground">
              Invoices go out late or sit unpaid
            </h3>
            <p className="mt-2 text-sm leading-7 text-muted">
              More than half of small businesses report being owed money from
              unpaid invoices, many overdue by more than 30 days, slowing cash
              flow and limiting growth.
            </p>
          </li>
          <li>
            <h3 className="text-base font-semibold text-foreground">
              The owner becomes the safety net
            </h3>
            <p className="mt-2 text-sm leading-7 text-muted">
              Without clear visibility into what&apos;s pending, completed, or
              overdue, daily operations depend on the owner catching breakdowns
              before they escalate.
            </p>
          </li>
        </ul>
      </Section>

      <Section
        id="process"
        title="How It Works"
        description="Practical delivery with clear steps."
        className="reveal-up border-t border-line py-24 sm:py-32"
        titleClassName="text-3xl sm:text-[2.3rem]"
        descriptionClassName="max-w-2xl"
      >
        <div className="space-y-4">
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
      </Section>

      <Section
        id="why-operaite"
        title="Why Operaite"
        className="reveal-up border-t border-line bg-neutral-50 py-24 sm:py-32"
        titleClassName="text-3xl sm:text-[2.3rem]"
      >
        <div className="max-w-3xl space-y-5 text-sm leading-7 text-muted">
          <p>
            I studied business management at San Diego State University, focusing
            on how small service businesses struggle with daily operations.
          </p>
          <p>
            During a difficult period in my family&apos;s chiropractic practice, I
            built systems that reduced administrative strain and stabilized
            revenue under pressure.
          </p>
          <p>
            I&apos;ve conducted structured interviews with service business owners
            to understand where workflows break and why automation efforts fail.
          </p>
          <p className="font-medium text-foreground">
            Operaite applies practical systems designed to reduce stress and
            protect revenue.
          </p>
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
    <article className="rounded-xl border border-line bg-white p-5 shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-soft">
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
