'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { env } from '@/lib/env'

type Q = { id: string; q: string; leak: string; fix: string }

const QUESTIONS: Q[] = [
  {
    id: 'lead',
    q: 'Do new leads sometimes wait more than an hour for a reply?',
    leak: 'Slow lead response',
    fix: 'An instant auto-response so every new inquiry hears back in minutes — before they call someone else.'
  },
  {
    id: 'quote',
    q: 'Do quote follow-ups depend on someone remembering to send them?',
    leak: 'Quotes going cold',
    fix: 'Automatic follow-up reminders so interested customers don’t quietly disappear.'
  },
  {
    id: 'noshow',
    q: 'Do you get no-shows without an automatic reminder going out first?',
    leak: 'No-shows and gaps',
    fix: 'Built-in confirmations and reminders so fewer appointments fall off the calendar.'
  },
  {
    id: 'invoice',
    q: 'Do invoices sometimes go out days after the job is finished?',
    leak: 'Cash arriving late',
    fix: 'Same-day invoicing the moment a job is marked complete, with the payment link included.'
  },
  {
    id: 'owner',
    q: 'Does the business slow down when you’re not personally checking on things?',
    leak: 'The owner is the backstop',
    fix: 'Clear ownership and exception alerts so work keeps moving without you watching every step.'
  },
  {
    id: 'system',
    q: 'Do important tasks live in inboxes or your head instead of a system?',
    leak: 'No system of record',
    fix: 'A simple, shared system so nothing depends on memory.'
  }
]

const EASE = [0.16, 1, 0.3, 1] as const

export function SelfCheck() {
  const reduce = useReducedMotion()
  const [answers, setAnswers] = useState<Record<string, boolean>>({})
  const answeredCount = Object.keys(answers).length
  const flagged = useMemo(
    () => QUESTIONS.filter((q) => answers[q.id] === true),
    [answers]
  )
  const allAnswered = answeredCount === QUESTIONS.length

  return (
    <section className="bg-bone-2 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-3xl px-5 sm:px-6 lg:px-8">
        <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-amber">
          Self-check
        </span>
        <h1 className="mt-4 font-display text-4xl leading-[1.1] text-ink sm:text-[3rem]">
          Where is your business leaking?
        </h1>
        <p className="mt-5 max-w-2xl text-[17px] leading-8 text-ash-dark">
          Six quick questions. No email required. You’ll see where revenue is
          most likely slipping through — and the simplest fix for each.
        </p>

        {/* progress */}
        <div className="mt-10 flex items-center gap-4">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-line">
            <motion.div
              className="h-full rounded-full bg-cobalt"
              initial={false}
              animate={{ width: `${(answeredCount / QUESTIONS.length) * 100}%` }}
              transition={{ duration: 0.4, ease: EASE }}
            />
          </div>
          <span className="text-sm font-medium text-ash-dark">
            {answeredCount}/{QUESTIONS.length}
          </span>
        </div>

        {/* questions */}
        <ol className="mt-8 flex flex-col gap-3">
          {QUESTIONS.map((q, i) => {
            const a = answers[q.id]
            return (
              <li
                key={q.id}
                className="rounded-2xl border border-line bg-white p-5 shadow-soft sm:p-6"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="flex gap-3 text-[16px] font-medium leading-7 text-ink sm:text-[17px]">
                    <span className="font-display text-cobalt/70">{i + 1}.</span>
                    {q.q}
                  </p>
                  <div className="flex flex-none gap-2">
                    {[
                      { label: 'Yes', val: true },
                      { label: 'No', val: false }
                    ].map((opt) => {
                      const active = a === opt.val
                      return (
                        <button
                          key={opt.label}
                          type="button"
                          onClick={() =>
                            setAnswers((prev) => ({ ...prev, [q.id]: opt.val }))
                          }
                          className={`min-w-[68px] rounded-lg border px-4 py-2.5 text-sm font-semibold transition ${
                            active
                              ? opt.val
                                ? 'border-cobalt bg-cobalt text-white'
                                : 'border-ink bg-ink text-bone'
                              : 'border-line bg-bone-2 text-ash-dark hover:border-ash'
                          }`}
                        >
                          {opt.label}
                        </button>
                      )
                    })}
                  </div>
                </div>
              </li>
            )
          })}
        </ol>

        {/* results */}
        <AnimatePresence>
          {allAnswered && (
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="mt-10 rounded-3xl border border-line bg-white p-7 shadow-soft sm:p-9"
            >
              {flagged.length === 0 ? (
                <>
                  <h2 className="font-display text-2xl text-ink">
                    Your core workflows look solid.
                  </h2>
                  <p className="mt-3 text-[16px] leading-7 text-ash-dark">
                    Nothing obvious is leaking from the six most common gaps.
                    Worth a short review to confirm — and to find the smaller
                    things that compound over time.
                  </p>
                </>
              ) : (
                <>
                  <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-amber">
                    Your result
                  </span>
                  <h2 className="mt-3 font-display text-[1.9rem] leading-snug text-ink">
                    You flagged {flagged.length} likely{' '}
                    {flagged.length === 1 ? 'leak' : 'leaks'}.
                  </h2>
                  <p className="mt-3 text-[16px] leading-7 text-ash-dark">
                    Here’s where revenue is most likely slipping — and the simple
                    fix for each.
                  </p>
                  <ul className="mt-6 flex flex-col divide-y divide-line">
                    {flagged.map((q) => (
                      <li key={q.id} className="flex gap-4 py-5">
                        <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-cobalt" />
                        <div>
                          <h3 className="font-display text-xl text-ink">
                            {q.leak}
                          </h3>
                          <p className="mt-1.5 text-[15px] leading-7 text-ash-dark">
                            <span className="font-semibold text-ink">The fix:</span>{' '}
                            {q.fix}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <div className="mt-7 border-t border-line pt-7">
                <p className="text-[16px] leading-7 text-ash-dark">
                  In a free 30-minute review we map these for your business and
                  tell you which one to fix first.
                </p>
                <Link
                  href={env.calendlyUrl}
                  className="mt-5 inline-flex rounded-lg bg-cobalt px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_12px_36px_rgba(43,79,224,0.35)] transition hover:-translate-y-0.5 hover:bg-cobalt-soft"
                >
                  Book a 30-Minute Operations Review
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!allAnswered && (
          <p className="mt-8 text-center text-sm text-ash">
            Answer all six to see where you’re leaking.
          </p>
        )}
      </div>
    </section>
  )
}
