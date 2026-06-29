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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,500;0,6..72,600;1,6..72,500;1,6..72,600&family=Geist:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
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
