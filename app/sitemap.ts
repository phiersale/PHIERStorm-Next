import { MetadataRoute } from 'next'
import { headers } from 'next/headers'

export default function sitemap(): MetadataRoute.Sitemap {
  const headersList = headers()
  const host = headersList.get('x-forwarded-host') || process.env.NEXTAUTH_URL || 'http://localhost:3000'
  const baseUrl = host?.startsWith('http') ? host : `https://${host}`

  const pages = [
    '', '/petition', '/crisis', '/no-war', '/leverage', '/the-teeth',
    '/simple-math', '/solutions', '/telecare', '/phiersale', '/phierworks',
    '/organizers', '/veterans', '/unions', '/resources', '/faq', '/about',
  ]

  return pages.map((page: string) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date('2026-04-08'),
    changeFrequency: 'daily' as const,
    priority: page === '' ? 1 : page === '/petition' ? 0.9 : 0.7,
  }))
}
