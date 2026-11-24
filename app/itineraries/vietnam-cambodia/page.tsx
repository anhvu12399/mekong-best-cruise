import { Metadata } from "next"
import { VietnamCambodiaClient } from "./page-client"
import { Header } from "@/components/header"

const BASE_URL = 'https://www.mekongrivercruise.com'
const PAGE_URL = `${BASE_URL}/itineraries/vietnam-cambodia`

export const metadata: Metadata = {
  title: "Vietnam to Cambodia Pilgrimage | Indochina Luxury Cruises",
  keywords: [
    'Vietnam to Cambodia cruise itinerary',
    'Ho Chi Minh to Siem Reap boat',
    '7 night Mekong cruise',
    '8 day Mekong river cruise',
    'luxury cross border cruise',
    'Mekong expedition Vietnam Cambodia',
    'Siem Reap to Saigon river journey',
    'best Vietnam Cambodia cruise',
    'Mekong downstream cruise',
    'Mekong upstream cruise',
    'comprehensive Mekong river tour'
  ],
  description: "A 7-8 day luxury pilgrimage connecting the Mekong Delta to Angkor Wat. Experience deep spiritual connection, private masses, and meditative travel.",
  alternates: { canonical: PAGE_URL },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'TouristTrip',
      '@id': `${PAGE_URL}/#trip`,
      name: 'Vietnam to Cambodia Mekong River Cruise (7–8 Days)',
      description: 'A 7-8 day luxury river voyage connecting Ho Chi Minh City, the Mekong Delta, Phnom Penh, and Angkor Wat (Siem Reap). Curated by licensed Indochina specialists.',
      touristType: ['Luxury Travelers', 'Couples', 'Active Seniors', 'Culture Enthusiasts'],
      itinerary: [
        { '@type': 'TouristAttraction', name: 'My Tho Port & Tien River' },
        { '@type': 'TouristAttraction', name: 'Cai Be Floating Market' },
        { '@type': 'TouristAttraction', name: 'Sa Dec Ancient Town & Marguerite Duras House' },
        { '@type': 'TouristAttraction', name: 'Tan Chau Silk Island' },
        { '@type': 'TouristAttraction', name: 'Phnom Penh Royal Palace & Silver Pagoda' },
        { '@type': 'TouristAttraction', name: 'Oudong Mountain Buddhist Monastery' },
        { '@type': 'TouristAttraction', name: 'Kampong Tralach & Tonle Sap Waterways' },
        { '@type': 'TouristAttraction', name: 'Angkor Wat Temples (Siem Reap)' },
      ],
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'USD',
        lowPrice: '1690',
        highPrice: '14000',
        offerCount: '6',
        availability: 'https://schema.org/InStock',
        validFrom: '2026-01-01',
      },
      provider: {
        '@type': 'TravelAgency',
        name: 'Mekong River Cruise',
        url: BASE_URL,
        parentOrganization: {
          '@type': 'Organization',
          name: 'My Way Luxury Travel LLC',
          url: 'https://www.mywaytravel.com',
          identifier: 'New York DOS ID: 7926729',
        },
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
        { '@type': 'ListItem', position: 2, name: 'Itineraries', item: `${BASE_URL}/cruises` },
        { '@type': 'ListItem', position: 3, name: 'Vietnam to Cambodia', item: PAGE_URL },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}/#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the classic Vietnam to Cambodia Mekong cruise route and duration?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The definitive Lower Mekong river cruise connects Ho Chi Minh City (Saigon) and Siem Reap (Angkor Wat) across 7 Nights / 8 Days (or 4 Nights for shortened sectors). The journey navigates through the Mekong Delta distributaries (My Tho, Cai Be, Sa Dec, Tan Chau), crosses the international water boundary into Cambodia to explore Phnom Penh and the Oudong monasteries, before traversing Tonle Sap Lake to Siem Reap.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should I choose upstream (Saigon to Siem Reap) or downstream (Siem Reap to Saigon)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Both directions offer identical shore excursions and cultural immersion. Upstream (Saigon to Siem Reap) builds a slow cinematic crescendo from the bustling urban energy of Vietnam toward the sacred, mystical silence of Angkor Wat. Downstream (Siem Reap to Saigon) is ideal for travelers who prefer starting with intensive temple explorations and winding down with relaxed sundeck cruising through the tranquil coconut canals of the delta.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does a 7 to 8-day Vietnam to Cambodia luxury Mekong cruise cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'All-inclusive twin-share fares range from $1,690 to $3,200 per guest aboard authentic boutique heritage vessels (such as Pandaw and Toum Tiou II), from $3,500 to $6,500 on luxury colonial ships (The Jahan and Jayavarman), and up to $9,800 to $14,000+ on ultra-luxury all-suite vessels (Aqua Mekong and Scenic Spirit). Fares encompass all onboard dining, guided daily shore excursions, local transfers, port fees, and select premium beverages.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does the riverway border crossing and visa process work between Vietnam and Cambodia?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Crossing between Vietnam and Cambodia occurs via the international river checkpoint at Song Tien / Vinh Xuong and Kaam Samnor. The vessel purser collects guests’ passports beforehand and handles all customs and immigration clearances on board while passengers relax in the lounge or enjoy lunch on deck. Travelers require an approved Cambodia e-Visa (Type T) or can obtain a visa on arrival processed by the ship staff.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the best time of year to take a Vietnam to Cambodia river cruise?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The prime cruising window spans from August to April. High-water season (August to November) brings full waterways, flourishing greenery, and allows ships to cruise directly across Tonle Sap Lake into Siem Reap. Dry season (December to April) provides pleasant temperatures, negligible rainfall, and crystal-clear sunrise conditions over Angkor Wat.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which luxury vessels operate the 7–8 day Vietnam-Cambodia route?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Top verified vessels operating this route include Aqua Mekong (ultra-luxury 20-suite design vessel with Michelin-consulted dining), The Jahan (26-cabin British-Indian colonial masterpiece with private balconies), Mekong Jewel (34-suite state-of-the-art eco-luxury ship with sundeck pool and butler service), and Jayavarman (27-stateroom French-Indochinese art-deco boutique vessel).',
          },
        },
      ],
    },
  ],
}

export default function VietnamCambodiaItineraryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <VietnamCambodiaClient />
      </main>
    </>
  )
}
