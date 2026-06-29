import type { Metadata } from 'next'
import { SelfCheck } from '@/components/SelfCheck'

export const metadata: Metadata = {
  title: 'Self-Check — Where is your business leaking?',
  description:
    'Six quick questions to find where your service business is most likely losing revenue — slow lead response, missed follow-ups, no-shows, late invoices — and the simplest fix for each.'
}

export default function SelfCheckPage() {
  return <SelfCheck />
}
