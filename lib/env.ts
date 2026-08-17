// Booking goes through Dub (go.operaiteconsulting.com), which is the single
// field for every future booking-tool change. Never hardcode Cal.com or
// Calendly here: a mistyped env var should still land on a working link.
const fallbackBookingUrl = 'https://go.operaiteconsulting.com/book'
const fallbackContactEmail = 'hello@operaiteconsulting.com'

export const env = {
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || fallbackBookingUrl,
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || fallbackContactEmail,
  gaId: process.env.NEXT_PUBLIC_GA_ID || ''
}
