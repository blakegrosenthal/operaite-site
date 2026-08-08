import Link from 'next/link'
import type { Metadata } from 'next'
import { Hero } from '@/components/hero/Hero'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/Reveal'
import { env } from '@/lib/env'

export const metadata: Metadata = {
  title: 'Operational systems for owner-led service businesses',
  description:
    'Stop losing revenue to missed follow-ups, no-shows, and delayed invoices. operAIte installs simple systems so leads get answered fast, appointments hold, and invoices go out on time.'
}

const LEAKS = [
  { n: '01', title: 'The first company to respond usually wins the job', body: 'When replies take hours, customers book with whoever answered first.' },
  { n: '02', title: 'Quotes rarely close without follow-ups', body: 'When follow-ups depend on memory, interested customers quietly disappear.' },
  { n: '03', title: 'Missed appointments erase billable time', body: 'Without confirmations and reminders, customers forget and revenue falls off the calendar.' },
  { n: '04', title: 'Cash flow slows when invoices wait', body: 'Billing at the end of the week instead of when the job finishes means cash arrives late.' },
  { n: '05', title: 'The business runs on the owner’s memory', body: 'When the owner is the backstop for every task, growth stalls.' }
]

const FAQS = [
  {
    q: 'What happens on the call?',
    a: 'You talk, I ask questions, and we map where money is slipping: leads, quotes, no-shows, invoices. You leave with your top two or three leaks and what I’d fix first, whether or not we work together.'
  },
  {
    q: 'Do I need new software?',
    a: 'Usually not. I build on the phones, calendar, and invoicing you already have. When a fix needs something you don’t have, like a textable business line, I set it up and run it for you. Nothing for your team to learn.'
  },
  {
    q: 'What does it cost?',
    a: 'You’ll know exactly what a fix costs before I build anything. The review itself is free.'
  },
  {
    q: 'How long does setup take?',
    a: 'The build itself takes days. If business texting is involved, the phone carriers add an approval wait, and I give you the exact go-live date up front.'
  }
]

const STEPS = [
  { n: '01', title: 'Understand where work breaks', body: 'A focused call to map how work flows today and where revenue slips through.' },
  { n: '02', title: 'Identify what matters most', body: 'I prioritize the workflows that protect revenue and reduce daily friction.' },
  { n: '03', title: 'Build simple systems', body: 'Practical systems so follow-ups, scheduling, and billing happen automatically.' },
  { n: '04', title: 'Train and verify', body: 'Your team learns the workflow, and I verify it works in real conditions.' },
  { n: '05', title: 'Monitor and refine', body: 'Regular check-ins after launch keep your operations steady.' }
]

function Caption({ children, tone = 'amber' }: { children: string; tone?: 'amber' | 'cobalt' }) {
  return (
    <span className={`text-[12px] font-semibold uppercase tracking-[0.2em] ${tone === 'amber' ? 'text-amber' : 'text-cobalt'}`}>
      {children}
    </span>
  )
}

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* WHERE WORK QUIETLY BREAKS DOWN */}
      <section id="where-work-breaks" className="bg-bone-2 pb-24 pt-14 sm:pb-32 sm:pt-20">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal className="lg:sticky lg:top-28 lg:self-start">
              <Caption>Where work quietly breaks down</Caption>
              <h2 className="mt-4 font-display text-[2.1rem] leading-[1.12] text-ink sm:text-[2.7rem]">
                Five places the money slips.
              </h2>
              <p className="mt-5 max-w-md text-[17px] leading-8 text-ash-dark">
                The same gaps show up in almost every shop I look at.
              </p>
            </Reveal>

            <Stagger className="flex flex-col">
              {LEAKS.map((leak, i) => (
                <StaggerItem key={leak.n}>
                  <div className={`group flex gap-6 py-7 ${i !== 0 ? 'border-t border-line' : ''}`}>
                    <span className="font-display text-[1.7rem] leading-none text-cobalt/70 transition-colors group-hover:text-cobalt">
                      {leak.n}
                    </span>
                    <div>
                      <h3 className="font-display text-[1.4rem] leading-snug text-ink">{leak.title}</h3>
                      <p className="mt-2 text-[16px] leading-7 text-ash-dark">{leak.body}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <Reveal delay={0.1} className="mt-16 border-t border-line pt-8">
            <p className="text-[17px] leading-8 text-ash-dark">
              <span className="font-semibold text-ink">No new software for your team to learn.</span>{' '}
              I build with the tools you already use: your phones, your
              calendar, your invoicing.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SPEED TO LEAD — where most owners start */}
      <section id="speed-to-lead" className="bg-bone-2 pb-24 sm:pb-32">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-soft">
              <div className="grid gap-0 md:grid-cols-[1.05fr_0.95fr]">
                <div className="p-8 sm:p-12">
                  <Caption>Where most owners start</Caption>
                  <h2 className="mt-4 font-display text-[2rem] leading-[1.12] text-ink sm:text-[2.4rem]">
                    Speed to lead.
                  </h2>
                  <p className="mt-5 max-w-md text-[17px] leading-8 text-ash-dark">
                    Missed calls and web leads get a text back in under 60
                    seconds with a link to book, nights and weekends included.
                    Your number stays the same and your team changes nothing.
                  </p>
                  <p className="mt-4 max-w-md text-[17px] leading-8 text-ash-dark">
                    It’s usually the fastest leak to fix, and the first system
                    I install.
                  </p>
                  <Link
                    href={env.calendlyUrl}
                    className="mt-8 inline-flex rounded-lg bg-cobalt px-6 py-3.5 text-[15px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-cobalt-soft"
                  >
                    Book your free 30-minute review
                  </Link>
                </div>
                <div className="flex flex-col justify-center border-t border-line bg-bone-2/60 p-8 sm:p-10 md:border-l md:border-t-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ash">
                    Saturday · 6:12 PM
                  </p>
                  <div className="mt-4 flex items-center gap-3.5 rounded-xl border border-line bg-white px-4 py-3.5">
                    <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-bone-2 text-ink">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.5 2.9.7a2 2 0 0 1 1.7 2Z"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <div>
                      <p className="text-[14px] font-semibold leading-5 text-ink">
                        Missed call
                      </p>
                      <p className="text-[13px] leading-5 text-ash">
                        New lead · after hours
                      </p>
                    </div>
                  </div>
                  <div className="ml-10 mt-4 rounded-2xl rounded-tr-sm bg-cobalt px-4 py-3 text-[14.5px] leading-6 text-white sm:ml-14">
                    Sorry we missed you, we’re out on a job. What’s going on?
                    Or grab a time that works:{' '}
                    <span className="underline decoration-white/60 underline-offset-2">
                      book a visit
                    </span>
                  </div>
                  <p className="mt-2.5 text-right text-[12px] text-ash">
                    Sent 41 seconds later
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHAT MAKES OPERAITE DIFFERENT — light, readable */}
      <section className="border-t border-line bg-white py-24 sm:py-28">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal>
              <Caption tone="cobalt">What makes operAIte different</Caption>
              <h2 className="mt-4 font-display text-[2.1rem] leading-[1.14] text-ink sm:text-[2.5rem]">
                I don’t hand you a report and disappear.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[17px] leading-8 text-ash-dark">
                I set the system up, train your team, and check back after
                launch to make sure it holds. Where a tool you already pay for
                can do the job, that’s what I use.
              </p>
              <p className="mt-4 text-[17px] leading-8 text-ash-dark">
                You’ll talk to me, Blake, not a sales team.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="process" className="bg-bone-2 py-24 sm:py-32">
        <div className="mx-auto w-full max-w-4xl px-5 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <Caption>How it works</Caption>
            <h2 className="mt-4 font-display text-[2.1rem] leading-[1.14] text-ink sm:text-[2.6rem]">
              A structured process, not a software pitch.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[17px] leading-8 text-ash-dark">
              I make your operations more predictable without disrupting how you
              already run the business.
            </p>
          </Reveal>

          <div className="relative mt-16 pl-2">
            <div className="absolute left-[21px] top-3 bottom-3 w-px bg-line" />
            <Stagger className="flex flex-col gap-2" gap={0.1}>
              {STEPS.map((step) => (
                <StaggerItem key={step.n}>
                  <div className="relative flex items-start gap-6 py-5">
                    <div className="relative z-10 flex h-11 w-11 flex-none items-center justify-center rounded-full border border-cobalt bg-white font-display text-[15px] text-cobalt">
                      {step.n}
                    </div>
                    <div className="pt-1.5">
                      <h3 className="font-display text-[1.4rem] leading-snug text-ink">{step.title}</h3>
                      <p className="mt-2 max-w-xl text-[16px] leading-7 text-ash-dark">{step.body}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="bg-bone-2 pb-24 sm:pb-32">
        <div className="mx-auto w-full max-w-5xl px-5 sm:px-6 lg:px-8">
          <Reveal>
            <Caption>Proof</Caption>
            <div className="mt-6 overflow-hidden rounded-3xl border border-line bg-white shadow-soft">
              <div className="grid gap-0 md:grid-cols-[1fr_0.9fr]">
                <div className="p-8 sm:p-10">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-cobalt">
                    Chiropractic clinic
                  </p>
                  <h3 className="mt-3 font-display text-[1.6rem] leading-snug text-ink">
                    Instant response for new patient inquiries
                  </h3>
                  <p className="mt-4 text-[16px] leading-7 text-ash-dark">
                    New inquiries now get an immediate message with a booking
                    link, so patients schedule in minutes instead of waiting on
                    a manual reply.
                  </p>
                  <Link
                    href="/case-studies/chiropractic-clinic"
                    className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-cobalt transition hover:gap-3"
                  >
                    Read the case study <span aria-hidden>→</span>
                  </Link>
                </div>
                <div className="flex flex-col justify-center gap-5 border-t border-line bg-bone-2/60 p-8 sm:p-10 md:border-l md:border-t-0">
                  {[
                    ['Before', 'Inquiries waited hours for a manual reply'],
                    ['After', 'Booking link sent the moment the form is submitted'],
                    ['Result', 'Consultations booked from the first response']
                  ].map(([k, v]) => (
                    <div key={k}>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ash">{k}</p>
                      <p className="mt-1 text-[16px] leading-6 text-ink">{v}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ — before you book */}
      <section className="bg-bone-2 pb-24 sm:pb-32">
        <div className="mx-auto w-full max-w-5xl px-5 sm:px-6 lg:px-8">
          <Reveal>
            <Caption>Before you book</Caption>
            <h2 className="mt-4 font-display text-[2.1rem] leading-[1.14] text-ink sm:text-[2.5rem]">
              The questions owners ask first.
            </h2>
          </Reveal>
          <Stagger className="mt-10 grid gap-4 sm:grid-cols-2">
            {FAQS.map((f) => (
              <StaggerItem key={f.q}>
                <div className="h-full rounded-xl border border-line bg-white p-6">
                  <h3 className="font-display text-[1.2rem] leading-snug text-ink">
                    {f.q}
                  </h3>
                  <p className="mt-2.5 text-[15.5px] leading-7 text-ash-dark">
                    {f.a}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* FINAL CTA — ink band */}
      <section className="bg-ink py-24 text-bone sm:py-28">
        <div className="mx-auto w-full max-w-3xl px-5 text-center sm:px-6">
          <Reveal>
            <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-cobalt-soft">
              30 minutes · no prep · free either way
            </span>
            <h2 className="mx-auto mt-5 max-w-2xl font-display text-[2.2rem] leading-[1.14] text-bone sm:text-[2.9rem]">
              Find out where your business is leaking.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[17px] leading-8 text-bone/70">
              I’ll identify your top two or three operational leaks. You leave
              with a short plan and a next step, whether or not we work together.
            </p>
            <Link
              href={env.calendlyUrl}
              className="mt-9 inline-flex rounded-lg bg-cobalt px-7 py-4 text-[15px] font-semibold text-white shadow-[0_12px_36px_rgba(43,79,224,0.4)] transition hover:-translate-y-0.5 hover:bg-cobalt-soft"
            >
              Book your free 30-minute review
            </Link>
            <p className="mx-auto mt-10 max-w-xl border-t border-bone/10 pt-6 text-[14px] leading-6 text-bone/50">
              Fair warning: this is for owner-led service businesses with real
              demand and leaky follow-up. If you need more leads, rather than
              fewer dropped ones, I’m not your guy yet.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
