/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    deviceSizes: [390, 768, 1024, 1280, 1440, 1920],
    imageSizes: [64, 128, 256, 384, 640],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  compress: true,
  poweredByHeader: false,
  experimental: {
    optimizeCss: true,
  },
  async headers() {
    return [
      {
        source: '/((?!_next/|images/|api/|\\.well-known/|mcp|a2a|ask|openapi\\.json|robots\\.txt|sitemap\\.xml|llms\\.txt|llms-full\\.txt|auth\\.md).*)',
        headers: [
          {
            key: 'Vary',
            value: 'Accept',
          },
        ],
      },
      {
        source: '/',
        headers: [
          {
            key: 'Vary',
            value: 'Accept',
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/tours/cambodias-lake-rivers-mountains',
        destination: '/destinations/cambodia',
        permanent: true,
      },
      {
        source: '/family-cruises',
        destination: '/cruises/styles/family',
        permanent: true,
      },
      {
        source: '/cruises/gypsy',
        destination: '/cruises/laos',
        permanent: true,
      },
      {
        source: '/cruises/the-jahan',
        destination: '/ships/the-jahan',
        permanent: true,
      },
      {
        source: '/what-countries-does-the-mekong-river-pass-through',
        destination: '/discover',
        permanent: true,
      },
      {
        source: '/deals',
        destination: '/mekong-cruise-cost-comparison',
        permanent: true,
      },
      {
        source: '/travel-insurance',
        destination: '/faqs',
        permanent: true,
      },
      {
        source: '/cruises/mekong-navigator',
        destination: '/ships/mekong-navigator',
        permanent: true,
      },
      {
        source: '/tours/family-adventure-holiday-vietnam',
        destination: '/cruises/styles/family',
        permanent: true,
      },
      {
        source: '/cruises/family-adventure-holiday-vietnam',
        destination: '/cruises/styles/family',
        permanent: true,
      },
      {
        source: '/cruises/stellar-of-the-seas',
        destination: '/cruises',
        permanent: true,
      },
      {
        source: '/cgi-sys/suspendedpage.cgi',
        destination: '/',
        permanent: true,
      },
      {
        source: '/charter-cruises',
        destination: '/itineraries/private-charter',
        permanent: true,
      },
      {
        source: '/family-private-cruise.html',
        destination: '/itineraries/private-charter',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/experiences',
        destination: '/cruises',
        permanent: true,
      },
      {
        source: '/journeys',
        destination: '/itineraries/vietnam-cambodia',
        permanent: true,
      },
      {
        source: '/cruises/thailand',
        destination: '/destinations/thailand',
        permanent: true,
      },
      {
        source: '/cruises/myanmar',
        destination: '/destinations/myanmar',
        permanent: true,
      },
      {
        source: '/cruises/china',
        destination: '/destinations/china',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
