import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Header } from "@/components/header"
import { SmoothScroll } from "@/components/smooth-scroll"
import dynamic from 'next/dynamic'
import Script from 'next/script'

// Lazy-load below-fold layout components
const Footer = dynamic(() => import('@/components/footer').then(m => ({ default: m.Footer })))
const WhatsAppButton = dynamic(() => import('@/components/whatsapp-button').then(m => ({ default: m.WhatsAppButton })))

import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const BASE_URL = 'https://www.mekongrivercruise.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Mekong Best Cruise | Luxury River Journeys in Southeast Asia',
    template: '%s | Mekong Best Cruise',
  },
  description:
    'Discover the Mekong River on a bespoke luxury cruise through Vietnam, Cambodia, Laos, Thailand, Myanmar & China. Private excursions, Michelin-inspired dining, and unparalleled 5-star service.',
  keywords: [
    // Core high-volume keywords
    'Mekong River Cruise', 'luxury river cruise Southeast Asia', 'Mekong luxury cruise',
    'Vietnam river cruise', 'Cambodia cruise', 'Laos river cruise', 'Mekong Delta tour',
    
    // Ships & specific products
    'Aqua Mekong cruise', 'Jayavarman cruise', 'Mekong Jewel', 'Victoria Mekong', 
    'The Jahan cruise', 'Heritage Line Mekong', 'Pandaw river expedition',
    
    // Niche & long-tail
    'tailor made Mekong tour', 'private Mekong cruise charter', 'small ship Mekong cruise',
    'luxury cruise Vietnam to Cambodia', 'Siem Reap to Ho Chi Minh cruise',
    'bespoke river cruise Asia', 'Mekong river boat charter', 'boutique Mekong cruise',
    '5 star Mekong river cruise', 'Mekong delta luxury sampan',
    
    // Thematic & experiential
    'slow travel Southeast Asia', 'cultural river cruise Vietnam', 'Mekong sunset cruise',
    'Angkor Wat to Mekong delta', 'Mekong floating market tour', 'authentic Mekong experience',
    
    // Geographic long-tail
    'Saigon to Phnom Penh boat', 'Luang Prabang river cruise', 'Golden Triangle cruise Thailand',
    'Upper Mekong China cruise', 'Irrawaddy river cruise Myanmar', 'Tonle Sap lake cruise'
  ],
  authors: [{ name: 'Mekong Best Cruise', url: BASE_URL }],
  creator: 'Mekong Best Cruise',
  publisher: 'Mekong Best Cruise',
  category: 'Travel & Tourism',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      'en-US': BASE_URL,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'Mekong Best Cruise',
    title: 'Mekong Best Cruise | Luxury River Journeys in Southeast Asia',
    description:
      'Discover the Mekong River on a bespoke luxury cruise through Vietnam, Cambodia, Laos, Thailand, Myanmar & China. Private excursions, Michelin-inspired dining, and unparalleled 5-star service.',
    images: [
      {
        url: '/images/og-image.avif',
        width: 1200,
        height: 630,
        alt: 'Mekong Best Cruise — Luxury River Journeys',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mekong Best Cruise | Luxury River Journeys in Southeast Asia',
    description:
      'Discover the Mekong River on a bespoke luxury cruise through Vietnam, Cambodia, Laos, Thailand & more.',
    images: ['/images/og-image.avif'],
    creator: '@mekongbestcruise',
  },
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/icon.png',
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'googlea14662f463f82247',
  },
}

export const viewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TravelAgency',
        '@id': `${BASE_URL}/#organization`,
        name: 'Mekong Best Cruise',
        url: BASE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${BASE_URL}/logo.png`,
          width: 300,
          height: 140,
        },
        description:
          'Luxury river cruise operator offering bespoke journeys along the Mekong River through Vietnam, Cambodia, Laos, Thailand, Myanmar and China.',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'VN',
          addressRegion: 'Ho Chi Minh City',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          availableLanguage: ['English', 'Vietnamese'],
          url: 'https://www.toursmekong.com/tailor-made-tours/',
        },
        sameAs: [
          'https://www.toursmekong.com/',
        ],
        areaServed: [
          { '@type': 'Country', name: 'Vietnam' },
          { '@type': 'Country', name: 'Cambodia' },
          { '@type': 'Country', name: 'Laos' },
          { '@type': 'Country', name: 'Thailand' },
          { '@type': 'Country', name: 'Myanmar' },
          { '@type': 'Country', name: 'China' },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Mekong Luxury Cruise Packages',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'TouristTrip',
                name: 'Mekong Delta Vietnam Luxury Cruise',
                description: 'Explore the iconic floating markets, hidden canals and rich culture of the Mekong Delta on a private luxury river cruise.',
                touristType: 'Luxury Travelers',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'TouristTrip',
                name: 'Cambodia & Angkor Mekong Cruise',
                description: 'Sail from Phnom Penh to Siem Reap and discover Angkor Wat, Tonle Sap Lake and the ancient Khmer civilization on the Mekong.',
                touristType: 'Luxury Travelers',
              },
            },
          ],
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${BASE_URL}/#website`,
        url: BASE_URL,
        name: 'Mekong Best Cruise',
        publisher: { '@id': `${BASE_URL}/#organization` },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${BASE_URL}/destinations/{destination}`,
          },
          'query-input': 'required name=destination',
        },
      },
    ],
  }

  return (
    <html lang="en" className={`scroll-smooth ${playfair.variable} ${inter.variable}`}>
      <head>
        {/* Preconnect to speed up Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preload LCP hero banner image */}
        <link 
          rel="preload" 
          as="image" 
          href="/images/enhanced_hero_1_sharp_optimized.avif" 
          fetchPriority="high" 
        />
        {/* Preload logo AVIF */}
        <link rel="preload" as="image" href="/logo.avif" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-414204624"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-414204624');
          `}
        </Script>
      </head>
      <body className={`${playfair.variable} ${inter.variable} font-sans bg-[#FAF9F5] text-[#1a202c]`}>
        <SmoothScroll />
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />

        {process.env.NODE_ENV === 'production' && (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        )}
      </body>
    </html>
  )
}
