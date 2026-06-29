import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Reveal } from '@/components/motion/Reveal'
import { env } from '@/lib/env'

export const metadata: Metadata = {
  title: 'About',
  description:
    'About Blake Rosenthal and operAIte: practical systems that help owner-led service businesses run with more reliability and less operational strain.'
}

const STORY = [
  'I work with owner-led service businesses that are tired of chasing follow-ups, checking calendars twice, and wondering what slipped through the cracks. Most owners don’t need more tools. They need their operations to run predictably without constant oversight.',
  'I grew up around small business, and I’ve seen firsthand how easy it is for manual processes to quietly drain time, cash flow, and energy. When my dad was undergoing treatment and couldn’t carry the day-to-day weight of the business, I stepped in and rebuilt the operational systems inside our family practice. The goal wasn’t complexity. It was reliability. Fewer dropped tasks. Faster response. Clear visibility.',
  'That experience shaped how I approach every engagement.',
  'Since then, I’ve spoken with dozens of small and midsized business owners across industries. The patterns are consistent. Leads go unanswered. Follow-ups rely on memory. Invoices lag. Critical tasks live in inboxes instead of systems. Over time, that instability compounds.',
  'My work focuses on stabilizing the revenue-critical workflows that protect your business. Not with buzzwords. Not with overengineered platforms. With structured systems that make execution dependable.',
  'When the right systems are in place, the business feels different. Fewer surprises. Fewer fire drills. More clarity. More control.'
]

export default function AboutPage() {
  return (
    <section className="bg-bone-2 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-amber">
            About
          </span>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.1] text-ink sm:text-[3.2rem]">
            Hi, I’m Blake Rosenthal, founder of oper
            <span className="brand-ai">AI</span>te.
          </h1>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-[0.82fr_1.18fr] md:items-start lg:gap-16">
          <Reveal className="md:sticky md:top-28">
            <div className="rounded-2xl border border-line bg-white p-3 shadow-soft">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-neutral-100">
                <Image
                  src="/blake-about.jpg"
                  alt="Blake Rosenthal, founder of operAIte"
                  fill
                  sizes="(max-width: 767px) 100vw, 38vw"
                  className="object-cover object-center"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAYABADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwC7e3a2iFnBwOMDknPSofPS5to3Ckbhjngn2qHUJfOuECHImxs+nalidBC8U/BhYrwTn9KiUmy1TaVxlwM6rAAOF2/zqS2G/UrwAKTkH5hkDBooonon/XQ3fw/L9T//2Q=="
                  priority
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-5 text-base leading-8 text-ash-dark">
              {STORY.map((p, i) => (
                <p key={i} className={i === 2 ? 'font-display text-xl italic text-ink' : ''}>
                  {p}
                </p>
              ))}
            </div>
            <Link
              href="/#process"
              className="mt-8 inline-flex rounded-lg bg-cobalt px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-cobalt-soft"
            >
              See how it works
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
