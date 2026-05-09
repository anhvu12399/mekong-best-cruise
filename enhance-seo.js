const fs = require('fs');
const path = require('path');

const SEOMap = {
  // --- Homepage ---
  'app/page.tsx': {
    title: "Mekong Best Cruise | Luxury River Journeys in Southeast Asia",
    keywords: [
      "Mekong River Cruise", "luxury river cruise Southeast Asia", "Mekong luxury cruise",
      "best Mekong river cruise", "5 star Mekong river cruise", "Mekong river boat charter",
      "boutique Mekong cruise", "small ship Mekong cruise", "bespoke river cruise Asia",
      "tailor made Mekong tour", "private Mekong cruise charter", "Aqua Mekong cruise",
      "Jayavarman cruise", "Mekong Jewel", "Victoria Mekong", "Heritage Line Mekong",
      "Pandaw river expedition", "Vietnam to Cambodia river cruise", "Siem Reap to Ho Chi Minh cruise",
      "slow travel Southeast Asia", "Mekong sunset cruise", "Mekong floating market tour",
      "exclusive Mekong cruise deals", "Mekong cruise luxury suites", "Mekong river journey"
    ]
  },
  
  // --- Destinations ---
  'app/destinations/vietnam/page.tsx': {
    keywords: [
      "Vietnam Mekong cruise", "Mekong Delta luxury tour", "Cai Rang floating market cruise",
      "Ho Chi Minh City river cruise", "Can Tho cruise", "Vietnam river cruise luxury",
      "Mekong Delta private cruise", "Saigon river cruise", "Mekong Delta boat tour",
      "Vietnam luxury boat charter", "My Tho river cruise", "Sa Dec floating market",
      "Chau Doc river cruise", "Vietnam slow travel", "Mekong Delta homestay cruise",
      "authentic Vietnam river experience", "Mekong delta luxury sampan", "Vietnam eco tourism cruise"
    ]
  },
  'app/destinations/cambodia/page.tsx': {
    keywords: [
      "Cambodia Mekong cruise", "Siem Reap to Phnom Penh boat", "Tonle Sap luxury cruise",
      "Angkor Wat river cruise", "Phnom Penh sunset cruise", "Cambodia river expedition",
      "luxury boat Cambodia", "Mekong river cruise Cambodia", "Kompong Khleang floating village",
      "Tonle Sap biosphere tour", "Cambodia slow travel", "Siem Reap boat tour",
      "Phnom Penh to Siem Reap ferry alternative", "Cambodia premium river cruise",
      "Khmer empire river journey"
    ]
  },
  'app/destinations/laos/page.tsx': {
    keywords: [
      "Laos Mekong cruise", "Luang Prabang river cruise", "Upper Mekong luxury boat",
      "Slow boat to Luang Prabang", "Huay Xai to Luang Prabang cruise", "Laos river expedition",
      "Mekong river cruise Laos", "Pak Ou caves boat tour", "Laos luxury travel",
      "Mekong sunset cruise Luang Prabang", "boutique cruise Laos", "Laos private boat charter",
      "slow travel Laos", "authentic Laos river experience", "Vientiane to Luang Prabang cruise"
    ]
  },
  'app/destinations/thailand/page.tsx': {
    keywords: [
      "Thailand Mekong cruise", "Golden Triangle river cruise", "Chiang Rai Mekong boat tour",
      "Isan river cruise", "Nakhon Phanom boat tour", "Thailand Laos border cruise",
      "Upper Mekong expedition Thailand", "luxury boat Golden Triangle", "Mekong river cruise Thailand",
      "Chiang Saen river cruise", "Thailand off the beaten path", "Mekong slow travel Thailand"
    ]
  },
  'app/destinations/myanmar/page.tsx': {
    keywords: [
      "Myanmar river cruise", "Irrawaddy river cruise", "Bagan luxury boat tour",
      "Mandalay to Bagan cruise", "Chindwin river expedition", "Myanmar luxury travel",
      "Upper Mekong Myanmar", "Thanlwin river cruise", "Bagan sunset cruise",
      "Myanmar private boat charter", "boutique river cruise Myanmar", "slow travel Burma"
    ]
  },
  'app/destinations/china/page.tsx': {
    keywords: [
      "China Mekong cruise", "Lancang river cruise", "Yunnan luxury river tour",
      "Tiger Leaping Gorge cruise", "Upper Mekong expedition China", "Xishuangbanna river cruise",
      "China to Laos boat journey", "Mekong source tour", "Yunnan slow travel",
      "Lancang Jiang luxury cruise", "China boutique river expedition"
    ]
  },
  
  // --- Itineraries ---
  'app/itineraries/mekong-delta/page.tsx': {
    keywords: [
      "Mekong Delta itinerary", "luxury Mekong Delta tour", "1 day Mekong Delta cruise",
      "2 days Mekong Delta tour", "3 days Mekong delta luxury", "Mekong Delta private tour",
      "Cai Rang floating market itinerary", "Can Tho luxury tour", "Ben Tre boat tour",
      "Ho Chi Minh to Mekong Delta", "Saigon to Mekong Delta private car", "Mekong Delta day trip luxury"
    ]
  },
  'app/itineraries/vietnam-cambodia/page.tsx': {
    keywords: [
      "Vietnam to Cambodia cruise itinerary", "Ho Chi Minh to Siem Reap boat", 
      "7 night Mekong cruise", "8 day Mekong river cruise", "luxury cross border cruise",
      "Mekong expedition Vietnam Cambodia", "Siem Reap to Saigon river journey",
      "best Vietnam Cambodia cruise", "Mekong downstream cruise", "Mekong upstream cruise",
      "comprehensive Mekong river tour"
    ]
  },
  'app/itineraries/1-day/page.tsx': {
    keywords: [
      "1 day Mekong cruise", "Mekong Delta day trip", "luxury day cruise Saigon",
      "one day Mekong delta tour", "private day boat Mekong", "Cai Be floating market day trip",
      "Ben Tre 1 day luxury tour", "Ho Chi Minh City river day trip", "Mekong sunset day cruise"
    ]
  },
  'app/itineraries/2-days/page.tsx': {
    keywords: [
      "2 days Mekong cruise", "overnight Mekong cruise", "Mekong Delta 2 day 1 night",
      "luxury overnight boat Mekong", "Can Tho 2 day tour", "Cai Rang floating market overnight",
      "Mekong delta weekend getaway", "private overnight sampan Mekong", "2 day Vietnam river cruise"
    ]
  },
  'app/itineraries/small-ship/page.tsx': {
    keywords: [
      "small ship Mekong cruise", "boutique Mekong river cruise", "intimate Mekong boat tour",
      "luxury small boat Vietnam", "Cambodia small ship cruise", "exclusive Mekong expedition",
      "less than 20 cabins Mekong cruise", "premium small ship Asia", "Mekong shallow draft vessels"
    ]
  },
  'app/itineraries/private-charter/page.tsx': {
    keywords: [
      "private Mekong charter", "charter a boat Mekong river", "Mekong luxury yacht charter",
      "private river cruise Southeast Asia", "exclusive use Mekong cruise", "family Mekong charter",
      "corporate retreat Mekong cruise", "bespoke private boat Vietnam", "custom Mekong itinerary"
    ]
  },
  
  // --- Cruises ---
  'app/cruises/page.tsx': {
    keywords: [
      "Mekong cruise ships", "luxury Mekong fleet", "best boats on the Mekong",
      "Aqua Mekong", "Jayavarman", "Mekong Jewel", "Victoria Mekong", "Heritage Line",
      "Pandaw cruises", "compare Mekong cruises", "Mekong river cruise reviews",
      "top rated Mekong cruises", "5 star Mekong ships"
    ]
  },
  
  // --- Pages ---
  'app/about-us/page.tsx': {
    keywords: [
      "about Mekong Best Cruise", "Mekong river travel experts", "luxury travel agency Southeast Asia",
      "Mekong cruise specialists", "bespoke tour operator Vietnam", "sustainable travel Mekong",
      "our story Mekong Best Cruise", "award winning Mekong operator"
    ]
  },
  'app/our-specialists/page.tsx': {
    keywords: [
      "Mekong travel specialists", "expert guides Southeast Asia", "luxury travel advisors Mekong",
      "Mekong cruise consultants", "local travel experts Vietnam Cambodia", "bespoke itinerary designers Asia"
    ]
  },
  'app/plan-your-journey/page.tsx': {
    keywords: [
      "plan Mekong cruise", "book luxury Mekong tour", "tailor made Mekong itinerary",
      "Mekong cruise inquiry", "custom Southeast Asia river cruise", "Mekong travel planner",
      "contact Mekong Best Cruise"
    ]
  }
};

function processFile(filePath, config) {
  const fullPath = path.join(__dirname, filePath);
  if (!fs.existsSync(fullPath)) return;

  let content = fs.readFileSync(fullPath, 'utf8');
  
  // Replace keywords array
  if (config.keywords) {
    const keywordsStr = JSON.stringify(config.keywords, null, 4).replace(/"/g, "'");
    const keywordRegex = /keywords:\s*\[[\s\S]*?\],/g;
    
    if (keywordRegex.test(content)) {
      content = content.replace(keywordRegex, `keywords: ${keywordsStr},`);
    } else {
      // If no keywords exist but metadata object does, inject it before closing brace of metadata
      const metadataStart = content.indexOf('export const metadata: Metadata = {');
      if (metadataStart !== -1) {
        const titleMatch = content.match(/title:\s*['"].*?['"],/);
        if (titleMatch) {
            content = content.replace(titleMatch[0], `${titleMatch[0]}\n  keywords: ${keywordsStr},`);
        }
      }
    }
  }

  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`Updated keywords for ${filePath}`);
}

Object.keys(SEOMap).forEach(file => {
  processFile(file, SEOMap[file]);
});
