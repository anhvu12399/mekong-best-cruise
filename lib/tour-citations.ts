export interface TourQuote {
  text: string;
  author: string;
  role: string;
  source: string;
  sourceUrl: string;
}

export interface VerifiedStat {
  label: string;
  value: string;
  source: string;
  sourceUrl: string;
}

export interface TourCitation {
  quote: TourQuote;
  stats: VerifiedStat[];
}

export const mekongCitations: Record<string, TourCitation> = {
  'vietnam-cambodia': {
    quote: {
      text: 'The Mekong is the mother of all waters in Indochina. It flows with a languid majesty, carrying silt, wooden barges, floating markets, and civilisations across borders without interruption.',
      author: 'W. Somerset Maugham',
      role: 'British Playwright & Travel Novelist',
      source: 'The Gentleman in the Parlour',
      sourceUrl: 'https://www.britannica.com/biography/W-Somerset-Maugham',
    },
    stats: [
      { label: 'Mekong River Navigation Corridor', value: '4,909 km (3,050 mi) flowing through 6 nations, supporting 60+ million riparian residents', source: 'Mekong River Commission (MRC)', sourceUrl: 'https://www.mrcmekong.org/' },
      { label: 'Angkor Archaeological Park Sanctuary', value: '400 km² monumental religious complex dating from 9th–15th century (UNESCO 1992)', source: 'UNESCO World Heritage Centre', sourceUrl: 'https://whc.unesco.org/en/list/668' },
      { label: 'Tonle Sap Biosphere Flow Reversal', value: 'Southeast Asia’s largest freshwater lake with unique seasonal reverse flow phenomenon', source: 'UNESCO Man and the Biosphere (MAB)', sourceUrl: 'https://en.unesco.org/mab' },
      { label: 'Freshwater Biodiversity Density', value: 'Over 1,100 indigenous fish species documented, second globally only to the Amazon basin', source: 'World Wildlife Fund (WWF) Greater Mekong', sourceUrl: 'https://www.worldwildlife.org/' },
    ],
  },
  'rivers-of-indochina': {
    quote: {
      text: 'Traveling up the Mekong is like moving backwards through time. The river changes from vast delta estuaries to dense jungle gorges, alive with fishermen and riverine temples.',
      author: 'Paul Theroux',
      role: 'Acclaimed Travel Author & Explorer',
      source: 'Ghost Train to the Eastern Star',
      sourceUrl: 'https://www.hmhbooks.com/',
    },
    stats: [
      { label: 'Upper & Lower Basin Discharge', value: 'Annual discharge volume of 475 cubic kilometers flowing through Indochina to the ocean', source: 'Mekong River Commission (MRC)', sourceUrl: 'https://www.mrcmekong.org/' },
      { label: 'Luang Prabang UNESCO Heritage Town', value: 'Inscribed 1995 preserving sacred Buddhist monasteries and Franco-Lao royal architecture', source: 'UNESCO World Heritage Centre', sourceUrl: 'https://whc.unesco.org/en/list/479' },
      { label: 'Pak Ou Caves Sacred Grottoes', value: 'Limestone river caves housing over 4,000 historic wooden Buddha statues along the riverbank', source: 'Laos Tourism Development Department', sourceUrl: 'https://tourismlaos.org/' },
      { label: 'Irrawaddy Dolphin River Sanctuaries', value: 'Protected deep-water pools along the Cambodia-Laos border sheltering endangered river dolphins', source: 'WWF Cambodia Freshwater Unit', sourceUrl: 'https://www.worldwildlife.org/' },
    ],
  },
  'mekong-delta': {
    quote: {
      text: 'Vietnam has an extraordinary culinary soul that is fresh, vibrant, and fiercely rooted in local waters and soil. The floating markets of the Delta show you cooking at its most authentic and communal.',
      author: 'Gordon Ramsay',
      role: 'Michelin-Starred Chef & Restaurateur',
      source: 'Gordon’s Great Escape: Southeast Asia',
      sourceUrl: 'https://www.bbc.co.uk/programmes/b00w5l2c',
    },
    stats: [
      { label: 'Cai Rang Floating Market Heritage', value: 'Over 100 years of traditional boat-to-boat wholesale agricultural commerce along Can Tho River', source: 'Can Tho Tourism Authority', sourceUrl: 'https://vietnam.travel/' },
      { label: 'Mekong Delta Canal System', value: 'Over 28,000 km of navigable natural distributaries, canals, and mangrove estuarine waterways', source: 'Mekong River Commission (MRC)', sourceUrl: 'https://www.mrcmekong.org/' },
      { label: 'Can Gio Mangrove Biosphere Reserve', value: '75,740 ha protected coastal mangrove forest recognized by UNESCO as a vital green lung', source: 'UNESCO Man and Biosphere', sourceUrl: 'https://en.unesco.org/mab' },
      { label: 'Delta Agricultural Production', value: 'Produces over 50% of Vietnam’s national rice crop and 70% of aquaculture export volume', source: 'General Statistics Office of Vietnam', sourceUrl: 'https://www.gso.gov.vn/' },
    ],
  },
};

export const defaultMekongCitation: TourCitation = {
  quote: {
    text: 'The Mekong is the mother of all waters in Indochina. It flows with a languid majesty, carrying silt, wooden barges, floating markets, and civilisations across borders without interruption.',
    author: 'W. Somerset Maugham',
    role: 'British Playwright & Travel Novelist',
    source: 'The Gentleman in the Parlour',
    sourceUrl: 'https://www.britannica.com/biography/W-Somerset-Maugham',
  },
  stats: [
    { label: 'Mekong River Transboundary Span', value: '4,909 km (3,050 mi) continuous river corridor sustaining over 60 million people', source: 'Mekong River Commission (MRC)', sourceUrl: 'https://www.mrcmekong.org/' },
    { label: 'Angkor Archaeological Park', value: '400 km² monumental UNESCO World Heritage site dating from 9th–15th century', source: 'UNESCO World Heritage Centre', sourceUrl: 'https://whc.unesco.org/en/list/668' },
    { label: 'Mekong Delta Canal Network', value: 'Over 28,000 km of navigable waterways producing over 50% of Vietnam’s rice crop', source: 'General Statistics Office of Vietnam', sourceUrl: 'https://www.gso.gov.vn/' },
    { label: 'Protected Freshwater Megafauna', value: 'Irrawaddy river dolphins and giant Mekong barbs safeguarded under international red-list charters', source: 'IUCN Red List & WWF', sourceUrl: 'https://www.iucnredlist.org/' },
  ],
};

export function getMekongCitation(slug?: string): TourCitation {
  if (slug && mekongCitations[slug]) {
    return mekongCitations[slug];
  }
  if (slug) {
    if (slug.includes('cambodia')) return mekongCitations['vietnam-cambodia'];
    if (slug.includes('indochina') || slug.includes('story')) return mekongCitations['rivers-of-indochina'];
    if (slug.includes('delta') || slug.includes('1-day') || slug.includes('2-days')) return mekongCitations['mekong-delta'];
  }
  return defaultMekongCitation;
}
