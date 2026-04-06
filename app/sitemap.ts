import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/services',
    '/about',
    '/contact',
    '/roi-calculator',
    '/case-studies',
    '/case-studies/chiropractic-clinic'
  ]
  const now = new Date()

  return routes.map((route) => ({
    url: `${siteConfig.domain}${route}`,
    lastModified: now,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8
  }))
}
