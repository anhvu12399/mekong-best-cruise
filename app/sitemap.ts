import { MetadataRoute } from 'next'

const BASE_URL = 'https://www.mekongrivercruise.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const destinations = ['vietnam', 'cambodia', 'laos', 'thailand', 'myanmar', 'china']
  const itineraries = ['vietnam-cambodia', 'mekong-delta', '1-day', '2-days', 'small-ship', 'private-charter']
  const ships = [
    "aqua-mekong", "jayavarman", "mekong-jewel", "mekong-princess",
    "the-jahan", "victoria-mekong", "anouvong", "bassac-pandaw",
    "boheme", "champa-pandaw", "indochina-pandaw", "indochine-i",
    "indochine-ii", "lan-diep", "laos-pandaw", "mekong-navigator",
    "mekong-pandaw", "mekong-pearl", "mekong-symphony", "tonle-pandaw",
    "toum-tiou-ii"
  ]

  const staticPages = [
    { url: BASE_URL, priority: 1.0, changeFrequency: 'daily' },
    { url: `${BASE_URL}/discover`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/about-us`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/our-specialists`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/plan-your-journey`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/cruises`, priority: 0.9, changeFrequency: 'weekly' },
  ]

  const destinationPages = destinations.map((dest) => ({
    url: `${BASE_URL}/destinations/${dest}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const itineraryPages = itineraries.map((slug) => ({
    url: `${BASE_URL}/itineraries/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const cruiseDestinationPages = destinations.map((dest) => ({
    url: `${BASE_URL}/cruises/${dest}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  const shipPages = ships.map((slug) => ({
    url: `${BASE_URL}/ships/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const travelIdeas = ['luxury-cruises', 'floating-markets', 'cajuput-forests', 'craft-villages']

  const travelIdeaPages = [
    { url: `${BASE_URL}/travel-ideas`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.85 },
    ...travelIdeas.map((slug) => ({
      url: `${BASE_URL}/travel-ideas/${slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  ]

  const legalPages = [
    { url: `${BASE_URL}/terms-conditions`, priority: 0.3, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/privacy-policy`, priority: 0.3, changeFrequency: 'monthly' },
  ]

  return [
    ...staticPages.map(p => ({ ...p, lastModified: now, changeFrequency: p.changeFrequency as any })),
    ...destinationPages,
    ...itineraryPages,
    ...cruiseDestinationPages,
    ...shipPages,
    ...travelIdeaPages,
    ...legalPages.map(p => ({ ...p, lastModified: now, changeFrequency: p.changeFrequency as any })),
  ]
}
