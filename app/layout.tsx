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
    default: 'operAIte | Operational systems for owner-led service businesses',
    template: '%s | operAIte'
  },
  description: siteConfig.description,
  alternates: { canonical: '/' },
  openGraph: {
    title: 'operAIte | Operational systems for owner-led service businesses',
    description: siteConfig.description,
    siteName: siteConfig.name,
    type: 'website',
    url: siteConfig.domain
  },
  twitter: {
    card: 'summary_large_image',
    title: 'operAIte | Operational systems for owner-led service businesses',
    description: siteConfig.description
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
