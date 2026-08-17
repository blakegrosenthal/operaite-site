import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import '@fontsource-variable/newsreader/opsz.css'
import '@fontsource-variable/newsreader/opsz-italic.css'
import '@fontsource-variable/geist/wght.css'
import './globals.css'
import { Footer } from '@/components/Footer'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'
import { Navbar } from '@/components/Navbar'
import { env } from '@/lib/env'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: 'OperAite | Operational systems for owner-led service businesses',
    template: '%s | OperAite'
  },
  description: siteConfig.description,
  openGraph: {
    title: 'OperAite | Operational systems for owner-led service businesses',
    description: siteConfig.description,
    siteName: siteConfig.name,
    type: 'website',
    url: siteConfig.domain,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'OperAite. Stop losing revenue to missed follow-ups, no-shows, and delayed invoices.'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OperAite | Operational systems for owner-led service businesses',
    description: siteConfig.description,
    images: ['/og-image.png']
  }
}

export default function RootLayout({
  children
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <GoogleAnalytics gaId={env.gaId} />
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
