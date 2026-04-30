import { MetadataRoute } from 'next'

const BASE_URL = 'https://mekongbestcruise.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const destinations = ['vietnam', 'cambodia', 'laos', 'thailand', 'myanmar', 'china']

  return [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/experiences`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/journeys`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...destinations.map((dest) => ({
      url: `${BASE_URL}/destinations/${dest}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
