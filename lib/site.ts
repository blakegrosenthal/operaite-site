export const siteConfig = {
  name: 'OperAIte',
  domain: 'https://operaiteconsulting.com',
  phone: '(805) 372-2528',
  phoneHref: 'tel:+18053722528',
  // CAN-SPAM footer address. USPS PO Box with Street Addressing, rented under
  // BLAKERS18, INC. Write it exactly as '#52': not 'Suite 52', not 'Ste 52',
  // not 'PO Box 52'. The PO Box format uses a different ZIP (91319) and the two
  // are not interchangeable. A non-conforming format can get mail returned.
  postalAddress: '3401 Grande Vista Drive #52, Newbury Park, CA 91320',
  description:
    'OperAIte installs simple operational systems for owner-led service businesses. Leads get answered fast, appointments hold, invoices go out on time, and nothing depends on memory.',
  navigation: [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/self-check', label: 'Self-Check' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ]
} as const
