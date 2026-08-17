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
      'New patient inquiries now receive an immediate message with a consultation booking link, allowing patients to schedule within minutes while reducing manual follow-up for the clinic staff.',
    href: '/case-studies/chiropractic-clinic',
    // Comparison is against businesses I mystery-shopped myself, not against
    // this clinic's own past. The clinic's "before" was never measured and the
    // window closed when the system went live, so it is not claimed anywhere.
    headline:
      'Two businesses I mystery-shopped took 15 and 17 hours to answer a web form. This clinic answers in seconds, and books in about two minutes.',
    situation:
      'New patient inquiries arrive through a website form. Before this system, a reply went out when someone on staff had time to send one, which meant nights, weekends, and busy afternoons had no coverage at all. When a person is looking for care, an unanswered form usually means they contact another clinic.',
    changes: [
      'the lead immediately receives a text message',
      'the message includes a link to book a consultation with the doctor',
      'once a consultation is booked, the doctor and reception team are notified'
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
      'Instead of waiting for manual follow-up, new patients can schedule a consultation within minutes of submitting the form. New inquiries are now handled automatically, consultations are being booked directly through the first response, and the staff no longer needs to manually chase every lead that comes in.',
    keyInsight:
      'Full disclosure: this clinic is my family’s practice, the same one from the story on my About page. It’s where this system ran first, before I offered it to anyone else. If your new inquiries wait hours for a reply, this is usually the fastest leak to fix. Book the free 30-minute review and you’ll leave knowing your top two or three leaks, whether or not we build anything.'
  }
]

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug)
}
