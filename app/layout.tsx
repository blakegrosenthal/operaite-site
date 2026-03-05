import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'
import { Footer } from '@/components/Footer'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'
import { Navbar } from '@/components/Navbar'
import { env } from '@/lib/env'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: 'OperAIte Consulting | Practical Operational Systems',
    template: '%s | OperAIte Consulting'
  },
  description: siteConfig.description,
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'OperAIte Consulting | Practical Operational Systems',
    description: siteConfig.description,
    siteName: siteConfig.name,
    type: 'website',
    url: siteConfig.domain,
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'OperAIte Consulting'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OperAIte Consulting | Practical Operational Systems',
    description: siteConfig.description,
    images: ['/og-image.svg']
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
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
