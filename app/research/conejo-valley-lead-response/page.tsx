import Link from 'next/link'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

// Source of record for every number on this page:
// Claude OperAIte/Aggregator-Outreach/2026-09-01-conejo-valley-lead-response-study.md
// Change the numbers there first, then here. The PDF in public/research/ is
// generated from the same source.

export const metadata: Metadata = {
  alternates: { canonical: '/research/conejo-valley-lead-response' },
  title: 'Who answers? Lead response at 86 home-service businesses',
  description:
    'A mystery-shop study of 86 home-service businesses in the Conejo Valley, June to September 2026. 40% never responded to a new customer inquiry by any channel.'
}

const PDF_HREF = '/research/conejo-valley-lead-response.pdf'

const STATS: Array<[string, string]> = [
  ['40%', 'never responded to a new customer inquiry by any channel, 34 of 84'],
  ['12.6 hours', 'median time to a human, among the 50 that did respond'],
  [
    '5 of 16',
    'automated acknowledgments that were followed by a person within two hours'
  ]
]

const WINDOWS = [
  ['Friday, 6 to 9pm', '14', '3 (21%)', 'under 1 hour'],
  ['Saturday, 11am to 2pm', '34', '13 (38%)', '25 hours'],
  ['Monday, 7 to 9pm', '24', '11 (46%)', '10 hours'],
  ['Sunday, 7 to 8pm', '12', '7 (58%)', '15 hours']
]

const TRADES = [
  ['HVAC', '21', '6', '13 hours'],
  ['Plumbing', '15', '8', '46 minutes'],
  ['Pest control', '11', '3', '46 hours'],
  ['Tree and landscape', '10', '6', '4 hours'],
  ['Electrical', '8', '2', '15 hours'],
  ['Roofing', '6', '3', '22 hours'],
  ['Appliance repair', '5', '4', 'under 1 hour'],
  ['Pool service', '4', '0', '18 minutes'],
  ['Garage door', '3', '1', '11 hours']
]

const SCORECARD = [
  ['A', 'Plumbing', 'Fri 6:43pm', '5 minutes', 'text, then voicemail', 'Yes, $180 service call', 'Yes', '5'],
  ['B', 'HVAC', 'Sat 11:10am', '48.1 hours', 'voicemail only', 'Unknown', 'No', '2'],
  ['C', 'Pest control', 'Sat 11:26am', '7.0 hours', 'text', 'Offered to text an estimate', 'No', '3'],
  ['D', 'Plumbing', 'Sat 1:59pm', '44.7 hours', 'voicemail', 'Partly', 'Yes, promised “shortly”', '2'],
  ['E', 'Roofing', 'Sat 11:24am', 'none at 72 hours', 'none', 'No', 'Mailing-list opt-in only', '0'],
  ['F', 'Electrical', 'Sat 11:32am', '23.2 hours', 'email, personal Gmail', 'Yes, $150 plus parts', 'No', '2']
]

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-display text-display-md text-ink">{children}</h2>
  )
}

function P({ children }: { children: ReactNode }) {
  return <p className="mt-4 text-base leading-8 text-muted">{children}</p>
}

function Block({ children }: { children: ReactNode }) {
  return <div className="border-t border-line pt-10">{children}</div>
}

function Table({
  head,
  rows,
  caption
}: {
  head: string[]
  rows: string[][]
  caption?: string
}) {
  return (
    <div className="mt-6 overflow-x-auto rounded-2xl border border-line bg-white shadow-soft">
      <table className="w-full min-w-[560px] border-collapse text-left text-[14.5px] leading-6">
        {caption ? <caption className="sr-only">{caption}</caption> : null}
        <thead>
          <tr className="border-b border-line bg-bone-2/60">
            {head.map((h) => (
              <th
                key={h}
                scope="col"
                className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-ash"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.join('|')} className="border-b border-line/70 last:border-b-0 align-top">
              {r.map((c, i) => (
                <td
                  key={i}
                  className={`px-4 py-3 ${i === 0 ? 'font-medium text-ink' : 'text-ash-dark'}`}
                >
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function ConejoValleyLeadResponsePage() {
  return (
    <>
      <section className="reveal-up border-b border-line bg-bone-2 pt-20 pb-12 sm:pt-24 sm:pb-16">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-[72ch]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cobalt">
              Research · A mystery-shop study
            </p>
            <h1 className="mt-4 font-display text-display-lg text-ink sm:text-display-xl">
              Who answers?
            </h1>
            <p className="mt-5 max-w-[62ch] text-base leading-8 text-muted sm:text-lg">
              Lead response at 86 home-service businesses in the Conejo Valley,
              June to September 2026.
            </p>
            <p className="mt-4 text-[14px] text-ash">
              Blake Rosenthal · Newbury Park, California ·{' '}
              <a
                href={PDF_HREF}
                className="font-medium text-cobalt transition hover:text-cobalt-soft"
              >
                Download the PDF
              </a>
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-line bg-white shadow-soft">
            <div className="grid gap-0 md:grid-cols-3">
              {STATS.map(([n, l], i) => (
                <div
                  key={n}
                  className={`p-6 sm:p-7 ${i !== 0 ? 'border-t border-line md:border-l md:border-t-0' : ''}`}
                >
                  <p className="font-display text-display-lg text-cobalt">{n}</p>
                  <p className="mt-2 text-[15px] leading-6 text-ash-dark">{l}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-6 max-w-[62ch] text-[14.5px] leading-7 text-ash">
            Nine trades, nine cities, one inquiry each, first human contact by
            email, text, call or voicemail. No business is named. Method and
            limits at the end.
          </p>
        </div>
      </section>

      <section className="reveal-up py-16 sm:py-24">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-12">
            <div>
              <H2>What I did</H2>
              <P>
                Between June 8 and August 29 I posed as a homeowner with a real
                problem (a dead outlet, an AC that runs but will not cool, a slow
                drain, wasps under the eaves) and sent one inquiry to each of 86
                owner-operated home-service businesses in Thousand Oaks, Newbury
                Park, Westlake Village, Agoura Hills, Oak Park, Camarillo,
                Moorpark, Simi Valley and Calabasas. Nine trades: HVAC, plumbing,
                electrical, pest control, tree and landscape, roofing, appliance
                repair, pool service, garage doors.
              </P>
              <P>
                84 got a written inquiry through their own website form or
                published email. Two had no written path at all, so I called
                after hours and let it ring. Every inquiry asked a direct
                question, usually what the visit would cost, and left a name, an
                email and a callback number.
              </P>
              <P>
                Then I recorded the first human contact by any channel: email,
                text, call or voicemail. Each business was scored on a fixed 0 to
                5 rubric (speed, whether the question was answered, whether I was
                invited to book), with a 72-hour cutoff for silence. No business
                is named here.
              </P>
            </div>

            <Block>
              <H2>The headline</H2>
              <P>
                <strong className="text-ink">
                  34 of 84 (40%) never responded by any channel.
                </strong>{' '}
                Not in 72 hours, and for most of them not at all; the longest
                tracked silences ran past 180 hours. Both after-hours calls went
                unanswered with no callback.
              </P>
              <P>
                Of the 50 that did respond, the median time to a human was{' '}
                <strong className="text-ink">12.6 hours</strong>. Eight answered
                within 15 minutes. Fifteen answered within an hour. Thirteen took
                more than a day, and six took more than two.
              </P>
              <P>
                So the market is not slow. It is split. Of every ten businesses,
                one answers a new customer within fifteen minutes, five answer
                later, mostly the next business day or after, and four never do.
              </P>
            </Block>

            <Block>
              <H2>When you ask matters more than who you ask</H2>
              <P>
                Inquiries went in during four windows. Different businesses in
                each, so this is a pattern, not a controlled test.
              </P>
              <Table
                caption="Response by inquiry window"
                head={['Window', 'Businesses', 'Never responded', 'Median reply, of those who did']}
                rows={WINDOWS}
              />
              <P>
                Friday evening is contested ground: a real share of shops are
                still working at 6pm, and half of the ones who answered did so
                within the hour. The other half waited for Saturday or Monday,
                and that produced the three longest replies in the study, 63 to
                69 hours. Sunday evening had the highest silence rate, and every
                Sunday reply arrived Monday morning between 7:27 and 12:55. Not
                one Sunday inquiry was worked that night.
              </P>
            </Block>

            <Block>
              <H2>By trade</H2>
              <Table
                caption="Response by trade"
                head={['Trade', 'Businesses', 'Never responded', 'Median reply, of those who did']}
                rows={TRADES}
              />
              <P>
                Plumbing is the clearest example of the split: more than half
                never answered, and the ones who did were the fastest in the
                study. Pest control answered more often but slowest, mostly by
                phone two days later.
              </P>
            </Block>

            <Block>
              <H2>An auto-reply is not a reply</H2>
              <P>
                16 businesses acknowledged the inquiry automatically, most within
                a minute. What happened after the acknowledgment:
              </P>
              <ul className="mt-4 space-y-3">
                {[
                  ['5', 'had a person follow up within about two hours.'],
                  ['4', 'had a person follow up between 12 and 45 hours later.'],
                  ['7', 'never had a person follow up at all.']
                ].map(([n, t]) => (
                  <li
                    key={n}
                    className="flex items-start gap-3 text-base leading-8 text-muted"
                  >
                    <span className="mt-3 block h-1.5 w-1.5 flex-none rounded-full bg-cobalt" />
                    <span>
                      <strong className="text-ink">{n}</strong> {t}
                    </span>
                  </li>
                ))}
              </ul>
              <P>
                Some of the automated messages made promises. One said “someone
                will be reaching out shortly,” 42 seconds after the form; the
                human arrived 44.7 hours later. One confirmation screen said “we
                will contact you within the next 20 minutes”; nobody did. One
                shop sent three scheduled texts over four days and no human
                message. One “request an estimate” form’s only response was a
                mailing-list opt-in email. One text-back quoted my message back,
                asked if I was a current customer, and when I said no, replied
                that they could not respond by text and I should call the
                office.
              </P>
            </Block>

            <Block>
              <H2>Published promises do not predict behavior</H2>
              <P>
                34 of the 84 businesses publish a response promise on their site:
                24/7, same-day, emergency service, or a specific number of
                minutes. Those 34 were slightly more likely to go silent than the
                50 without a promise: 16 of 34 (47%) never responded, against 18
                of 50 (36%).
              </P>
              <P>
                The tightest promises missed by the most. A site that promised
                contact “within 15 minutes” made one call 12.5 hours later and
                left no voicemail. A site that lists 7am to 8pm, seven days, took
                a Friday 6pm inquiry inside its own posted hours and never
                answered it.
              </P>
            </Block>

            <Block>
              <H2>Ten weeks later, the same businesses</H2>
              <P>
                Eleven businesses were shopped twice, on June 8 and again on
                August 16 or 29, with a different inquiry each time.
              </P>
              <ul className="mt-4 space-y-3">
                {[
                  ['5', 'were silent both times.'],
                  ['3', 'got slower (20.5 to 48.1 hours; 17.2 to 34.0; 18.9 to 21.2).'],
                  ['1', 'answered in June (16.8 hours) and was silent in August.'],
                  ['1', 'was silent in June and answered in August, at 13.9 hours.'],
                  ['1', 'went from 17.1 hours to 46 minutes after installing a text-back tool between the two visits.']
                ].map(([n, t]) => (
                  <li
                    key={t}
                    className="flex items-start gap-3 text-base leading-8 text-muted"
                  >
                    <span className="mt-3 block h-1.5 w-1.5 flex-none rounded-full bg-cobalt" />
                    <span>
                      <strong className="text-ink">{n}</strong> {t}
                    </span>
                  </li>
                ))}
              </ul>
              <P>
                Response behavior looks like a trait of the business rather than
                a bad week. The one business that changed materially did it by
                changing its system, not its habits.
              </P>
            </Block>

            <Block>
              <H2>The phone matters, for them and for the measurement</H2>
              <P>
                Trades owners call. In the August 29 session, five of the
                thirteen businesses that responded did so only by phone,
                voicemail or text and never sent an email. Several others replied
                from a personal Gmail rather than the address on their site. A
                measurement that reads only the inbox would have scored all of
                them silent.
              </P>
              <P>
                This study checked email, text and voicemail for every zero. It
                did not always: an automated pass on September 1 scored twelve
                businesses silent from the inbox alone, and six of them were
                flipped the same afternoon, five from the callback line’s log and
                one from an email sent from a personal address that the matching
                had missed. Those corrections are in these numbers. It is the
                reason every zero here is gated on three channels, and the reason
                I would not trust a response study that cannot say how it handled
                the phone.
              </P>
            </Block>

            <Block>
              <H2>Fast is not the same as answered</H2>
              <P>
                From August 22 on, every inquiry asked what the visit would cost,
                and I tracked whether the first human reply gave a number. Of the
                human replies to that question, about half gave a price or a
                bounded range (“$245 for a conventional cable, two-month
                warranty”; “$150 plus parts for roughly the first hour”; “$149
                diagnostic, Thursday 10 to 12 is open”). The other half asked me
                to call, sent a booking link, or asked for photos.
              </P>
              <P>
                One shop’s automated text arrived the same minute as the form and
                asked a good diagnostic question. Getting a price out of the same
                shop took three asks over 47 hours. The reply was two characters:
                “$140.”
              </P>
            </Block>

            <Block>
              <H2>What one location looks like on a scorecard</H2>
              <P>
                This is the row format used for every business in the study,
                shown here for six real rows with names removed.
              </P>
              <Table
                caption="Sample location scorecard"
                head={[
                  'Location',
                  'Trade',
                  'Inquiry',
                  'First human contact',
                  'Channel',
                  'Answered the question?',
                  'Auto-ack?',
                  'Score'
                ]}
                rows={SCORECARD}
              />
              <P>
                Across a portfolio, the same table becomes a league table by
                location, a trend per location per round, and a short fix list:
                which forms are broken, which auto-replies promise something
                nobody delivers, which locations answer by phone and never by
                text, and which windows are uncovered.
              </P>
            </Block>

            <Block>
              <H2>Method and limits</H2>
              <P>
                One persona, one inquiry per business per visit, one window per
                visit. The 72-hour cutoff is a floor for the silence count, not a
                ceiling for the delay; most silent businesses stayed silent well
                past it. Businesses were selected, not sampled at random:
                owner-operated (46 of 84 confirmed by name), roughly 10 to 150
                Google reviews (median 63), with a working form or published
                email. National franchises, businesses without a website, forms
                that required a street address, and booking-only sites were
                excluded. Scores were assigned against a written rubric, with the
                reasoning for each score and the scores next to it recorded in
                the row. Timestamps are from the inquiry inbox, the callback
                line’s call and text log, and the auto-reply headers. Quotations
                are lightly paraphrased so no business can be identified by
                search. The June round (14 businesses, 6 silent) used the same
                method and is included only in the repeat-visit section.
              </P>
            </Block>

            <Block>
              <H2>About</H2>
              <P>
                I am Blake Rosenthal, in Newbury Park. I built and ran a
                lead-response system for a medical clinic in Thousand Oaks,
                measured its first 30 days (median 2 minutes from web inquiry to
                booked consultation, 21 consultations), and published the numbers
                with their limits. This study is what I learned by turning the
                same measurement on the businesses around me.
              </P>
              <P>
                Questions about the data, or about running this across a set of
                locations:{' '}
                <a
                  href="mailto:blake@operaiteconsulting.com"
                  className="font-medium text-cobalt transition hover:text-cobalt-soft"
                >
                  blake@operaiteconsulting.com
                </a>
                , (805) 372-2528.
              </P>
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href={PDF_HREF}
                  className="inline-flex rounded-lg bg-cobalt px-6 py-3.5 text-[15px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-cobalt-soft"
                >
                  Download the PDF
                </a>
                <Link
                  href="/case-studies/chiropractic-clinic"
                  className="inline-flex items-center gap-2 px-2 py-3.5 text-[15px] font-semibold text-cobalt transition hover:gap-3"
                >
                  The clinic case study <span aria-hidden>→</span>
                </Link>
              </div>
            </Block>
          </div>
        </div>
      </section>
    </>
  )
}
