export interface CaseStudy {
  slug: string
  title: string
  subtitle: string
  summary: string
  href: string
  situation: string
  changes: string[]
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
    situation:
      'New patient inquiries were arriving through a website form, but responses depended on when staff had time to follow up. Sometimes that meant leads waited hours before hearing back. When someone is looking for care, that delay often means they contact another clinic instead.',
    changes: [
      'the lead immediately receives a text message',
      'the message includes a link to book a consultation with the doctor',
      'once a consultation is booked, the doctor and reception team are notified'
    ],
    operationalImpact:
      'Instead of waiting for manual follow-up, new patients can schedule a consultation within minutes of submitting the form. New inquiries are now handled automatically, consultations are being booked directly through the first response, and the staff no longer needs to manually chase every lead that comes in.',
    keyInsight:
      'Full disclosure: this clinic is my family’s practice, the same one from the story on my About page. It’s where this system ran first, before I offered it to anyone else. If your new inquiries wait hours for a reply, this is usually the fastest leak to fix. Book the free 30-minute review and you’ll leave knowing your top two or three leaks, whether or not we build anything.'
  }
]

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug)
}
