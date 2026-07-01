import { TEACHING_METHODS_BASE } from '@/data/teachingMethods'
import { SITE_URL } from '@/lib/siteUrl'

export function buildTeachingMethodBreadcrumbSchema(methodLabel, slug) {
  const methodPath = `${TEACHING_METHODS_BASE}/${slug}`
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${SITE_URL}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Teaching Methods',
        item: `${SITE_URL}${TEACHING_METHODS_BASE}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: methodLabel,
        item: `${SITE_URL}${methodPath}`,
      },
    ],
  }
}

export function buildTeachingMethodsHubBreadcrumbSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${SITE_URL}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Teaching Methods',
        item: `${SITE_URL}${TEACHING_METHODS_BASE}`,
      },
    ],
  }
}

export function buildTeachingMethodWebPageSchema(method) {
  const url = `${SITE_URL}${TEACHING_METHODS_BASE}/${method.slug}`
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: method.label,
    description: method.description,
    url,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Make My Lesson',
      url: `${SITE_URL}/`,
    },
    about: {
      '@type': 'Thing',
      name: method.label,
      description: method.description,
    },
  }
}

export function buildTeachingMethodFaqJsonLd(faqItems, pageUrl) {
  if (!faqItems?.length) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: pageUrl,
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }
}

export function buildTeachingMethodsHubItemListSchema(columns) {
  const items = columns.flatMap((col) =>
    col.methods.map((method) => ({
      '@type': 'ListItem',
      name: method.label,
      url: `${SITE_URL}${TEACHING_METHODS_BASE}/${method.slug}`,
    })),
  )

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Teaching Methods',
    description:
      'Pedagogical approaches supported by Make My Lesson — from structured delivery to learner-centred and inquiry-based methods.',
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      ...item,
      position: index + 1,
    })),
  }
}
