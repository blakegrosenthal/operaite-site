export interface CaseStudyMetric {
  label: string
  value: string
}

export interface CaseStudy {
  slug: string
  title: string
  subtitle: string
  summary: string
  href: string
  headline: string
  situation: string
  changes: string[]
  metricsIntro: string
  metrics: CaseStudyMetric[]
  namedMoment: string
  howMeasured: string
  operationalImpact: string
  keyInsight: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'chiropractic-clinic',
    title: 'Thousand Oaks Disc Center',
    subtitle: 'Instant response system for new patient inquiries',
    summary:
      'For its first 30 measured days, new patient inquiries received an immediate message with a consultation booking link, so patients scheduled within minutes and the staff stopped chasing every lead by hand.',
    href: '/case-studies/chiropractic-clinic',
    // Comparison is against businesses I mystery-shopped myself, not against
    // this clinic's own past. The clinic's "before" was never measured and the
    // window closed when the system went live, so it is not claimed anywhere.
    // Past tense throughout (2026-09-01): the system ran through August 16, then
    // the clinic moved to its marketing team's own platform. The numbers stand
    // for the window they were measured in; nothing here describes today.
    headline:
      'Two businesses I mystery-shopped took 15 and 17 hours to answer a web form. This clinic answered in seconds, and booked in about two minutes.',
    situation:
      'New patient inquiries arrive through a website form. Before this system, a reply went out when someone on staff had time to send one, which meant nights, weekends, and busy afternoons had no coverage at all. When a person is looking for care, an unanswered form usually means they contact another clinic.',
    changes: [
      'the lead immediately received a text message',
      'the message included a link to book a consultation with the doctor',
      'once a consultation was booked, the doctor and reception team were notified'
    ],
    metricsIntro:
      'First 30 days live (July 15 to August 16, 2026), web-form inquiries only:',
    metrics: [
      { label: 'Median time from form to booking', value: '2 minutes' },
      { label: 'Consultations booked', value: '21' }
    ],
    namedMoment:
      'One morning: inquiry at 6:33 a.m., consultation booked at 6:37 a.m., before the office opened.',
    howMeasured:
      'Every figure here comes from the clinic’s own notification emails, counted by hand over the first 30 days the system was live. Web-form inquiries only, phone calls excluded. “Booked” means a consultation was scheduled, not that the patient attended, so there is no show rate here. A booking counted in one week may belong to an inquiry from the week before. I publish the limits because a number without them isn’t worth much.',
    operationalImpact:
      'Instead of waiting for manual follow-up, new patients could schedule a consultation within minutes of submitting the form. For the 30 days measured, new inquiries were handled automatically, consultations were booked directly through the first response, and the staff no longer had to chase every lead by hand. The system ran through August 2026; the clinic has since moved its marketing to a dedicated marketing operator and his own platform, so nothing on this page describes the clinic’s setup today.',
    keyInsight:
      'Full disclosure: this clinic is my family’s practice, the same one from the story on my About page. It’s where this system ran first, before I offered it to anyone else. If your new inquiries wait hours for a reply, this is usually the fastest leak to fix. Book the free 30-minute review and you’ll leave knowing your top two or three leaks, whether or not we build anything.'
  }
]

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug)
}
