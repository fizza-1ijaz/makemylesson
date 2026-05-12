import { SITE_URL } from '@/lib/siteUrl'

export default function robots() {
  const origin = SITE_URL.replace(/\/$/, '')
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${origin}/sitemap.xml`,
  }
}
