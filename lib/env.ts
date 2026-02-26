const fallbackCalendly = 'https://calendly.com'
const fallbackContactEmail = 'hello@operaiteconsulting.com'

export const env = {
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL || fallbackCalendly,
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || fallbackContactEmail,
  gaId: process.env.NEXT_PUBLIC_GA_ID || ''
}
