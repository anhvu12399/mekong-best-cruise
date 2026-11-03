// Shared ship data for all Mekong destinations

export type Ship = {
  id: string
  name: string
  type: string
  style: string // editorial sub-label
  guests: number
  cabins: number
  regions: string[]
  tagline: string
  description: string
  image: string
  highlights: string[]
}

const ALL_VIETNAM_CAMBODIA_SHIPS: Ship[] = [
  {
    id: "aqua-mekong",
    name: "Aqua Mekong",
    type: "Ultra-Luxury Expedition",
    style: "The architect's river dream",
    guests: 40,
    cabins: 20,
    regions: ["Vietnam Mekong", "Cambodia Mekong"],
    tagline: "Floor-to-ceiling glass. The river has no walls here.",
    description:
      "A vessel designed like a gallery and sailed like a secret. The Aqua Mekong brought a new visual language to the Mekong — one of open space, natural light, and the kind of quiet that only comes when everything around you has been thought through. Michelin-trained chefs. A pool on the sundeck. The river, always present.",
    image: "/images/aqua_mekong_exterior_frontview.webp",
    highlights: ["20 suites with river-view windows", "Infinity pool on sundeck", "Michelin-inspired dining", "Private excursion kayaks"],
  },
  {
    id: "scenic-spirit",
    name: "Scenic Spirit",
    type: "All-Inclusive Ultra-Luxury",
    style: "European five-star space and butler service",
    guests: 68,
    cabins: 34,
    regions: ["Vietnam Mekong", "Cambodia Mekong"],
    tagline: "Ultra-luxury all-inclusive with private Sun Lounge balconies.",
    description:
      "Custom-built to deliver five-star European luxury to the Mekong. With only 68 guests served by 56 crew members, the passenger-to-space ratio is among the highest of any ship in Southeast Asia. 100% all-balcony suites with personal butler service and passenger elevator.",
    image: "/images/scenic_spirit_overview.jpg",
    highlights: ["Scenic Sun Lounge convertible balcony", "Passenger elevator connecting 3 decks", "100% all-inclusive with 24/7 butler", "Sun Deck pool, steam sauna & spa"],
  },
  {
    id: "viking-saigon",
    name: "Viking Saigon",
    type: "Scandinavian Luxury",
    style: "Understated Nordic serenity",
    guests: 80,
    cabins: 40,
    regions: ["Vietnam Mekong", "Cambodia Mekong"],
    tagline: "Understated Scandinavian elegance on the storied Mekong.",
    description:
      "Custom-built in 2021, Viking Saigon reflects the clean lines and understated serenity of Scandinavian design. Hosting 80 guests in all-outside staterooms, the ship offers passenger elevator access across all residential decks and heated bathroom floors.",
    image: "/images/viking_saigon_exterior.jpg",
    highlights: ["Heated bathroom floors (unique on Mekong)", "Scandinavian clean-lined luxury aesthetics", "Passenger elevator across residential decks", "Infinity plunge pool at ship's stern"],
  },
  {
    id: "emerald-harmony",
    name: "Emerald Harmony",
    type: "Contemporary Urban Luxury",
    style: "Direct central Saigon docking",
    guests: 84,
    cabins: 42,
    regions: ["Vietnam Mekong", "Cambodia Mekong"],
    tagline: "Purpose-built modern luxury that sails straight into central Saigon.",
    description:
      "Unlike most larger Mekong vessels that must dock 1.5 to 2 hours south in Mỹ Tho, Emerald Harmony was custom-engineered with low air draft to sail directly up the Saigon River to dock at central Saigon (District 4 / Nhà Rồng).",
    image: "/images/emerald_harmony_exterior.jpg",
    highlights: ["Docks directly at central Saigon (District 4)", "Electronic drop-down balcony windows", "Horizon Deck infinity swimming pool", "ESPA luxury bath amenities"],
  },
  {
    id: "amadara",
    name: "AmaDara",
    type: "French Colonial Luxury",
    style: "Authentic Twin Balcony elegance",
    guests: 124,
    cabins: 62,
    regions: ["Vietnam Mekong", "Cambodia Mekong"],
    tagline: "French Colonial elegance with signature Twin Balconies.",
    description:
      "AmaWaterways' flagship on the Mekong features authentic French Colonial architecture, rich wood carvings, and signature Twin Balconies combining an outside step-out balcony with a French balcony.",
    image: "/images/amadara_exterior.jpg",
    highlights: ["Signature Twin Balconies in every stateroom", "Separate bathtub and rain shower in all rooms", "The Chef's Table specialty dining", "Sun deck pool with swim-up bar"],
  },
  {
    id: "avalon-saigon",
    name: "Avalon Saigon",
    type: "Suite Ship River Cruise",
    style: "Beds facing the river panorama",
    guests: 36,
    cabins: 18,
    regions: ["Vietnam Mekong", "Cambodia Mekong"],
    tagline: "Open-Air Balconies with beds facing the water.",
    description:
      "Avalon Waterways' custom-designed suite ship on the Mekong features wall-to-wall, floor-to-ceiling panoramic windows that slide open 9 feet, transforming the entire stateroom into a massive Open-Air Balcony.",
    image: "/images/avalon_saigon_exterior.jpg",
    highlights: ["Beds face 100% directly towards the river", "14-foot wall-to-wall panoramic windows", "Open-Air Balcony design", "Intimate 36-passenger capacity"],
  },
  {
    id: "mekong-jewel",
    name: "Mekong Jewel",
    type: "All-Suite Eco-Luxury",
    style: "Sustainable modern luxury on the delta",
    guests: 68,
    cabins: 34,
    regions: ["Vietnam Mekong", "Cambodia Mekong"],
    tagline: "The newest ship on the oldest river. Built to listen.",
    description:
      "All-suite eco-conscious river cruising operated by Lotus Cruises and Uniworld. Reclaimed timber interiors, private balconies in every suite, swimming pool on the top deck, and passenger elevator.",
    image: "/images/mekong_jewel_royal_suite.jpg",
    highlights: ["100% all-suite accommodations with private balconies", "Passenger elevator across cabin decks", "Sundeck swimming pool & spa", "Advanced eco-friendly water purification"],
  },
  {
    id: "the-jahan",
    name: "The Jahan",
    type: "Colonial Heritage Luxury",
    style: "Evoking the British-India era",
    guests: 52,
    cabins: 26,
    regions: ["Vietnam Mekong", "Cambodia Mekong"],
    tagline: "An opulent riverboat evoking the romance of former British India.",
    description:
      "Named after one of the Mughal Empire's greatest rulers, The Jahan carries that ambition on water. Carved teak, brass fittings, and a library that smells of old paper. The river slides past your window like a film reel of another century.",
    image: "/images/the_jahan_banner.jpg",
    highlights: ["Heritage colonial interiors", "Library & observation lounge", "26 private suites", "Daily cultural immersion programs"],
  },
  {
    id: "jayavarman",
    name: "Jayavarman",
    type: "Boutique Heritage",
    style: "Named after Angkor's great king",
    guests: 36,
    cabins: 15,
    regions: ["Vietnam Mekong", "Cambodia Mekong"],
    tagline: "History doesn't feel distant here. It feels like it's in the next room.",
    description:
      "Colonial teak, hand-stitched fabrics, the smell of frangipani at dusk. The Jayavarman is a floating boutique gallery inspired by the golden age of French Indochina and Khmer artistry. Smaller than most, deeper than all of them.",
    image: "/images/jayavarman_banner.jpg",
    highlights: ["Khmer-inspired design details", "Intimate 15-cabin capacity", "Expert cultural guides", "Private balcony suites"],
  },
  {
    id: "mekong-symphony",
    name: "Mekong Symphony",
    type: "Modern Comfort Cruise",
    style: "Composed for the discerning traveller",
    guests: 60,
    cabins: 30,
    regions: ["Vietnam Mekong", "Cambodia Mekong"],
    tagline: "Every morning on the river is a different movement.",
    description:
      "The Mekong Symphony moves with purpose — spacious cabins, generous deck space, and itineraries that feel composed rather than crowded. For travellers who want the full delta experience without sacrificing comfort.",
    image: "/images/mekong_symphony.avif",
    highlights: ["Sun deck with panoramic bar", "30 river-view cabins", "Cooking classes on board", "Village excursions daily"],
  },
  {
    id: "mekong-princess",
    name: "Mekong Princess",
    type: "Romantic Boutique",
    style: "Small, elegant, entirely yours",
    guests: 28,
    cabins: 14,
    regions: ["Vietnam Mekong", "Cambodia Mekong"],
    tagline: "The river's most intimate address.",
    description:
      "Fourteen cabins. Never more. The Mekong Princess earns her name through scale — small enough that the crew knows your coffee order by morning two, graceful enough that you forget you're moving.",
    image: "/images/mekong_princess_saigon_suite.jpg",
    highlights: ["14 intimate cabins", "Personalized butler service", "Signature cocktail bar", "Sunset sampan excursions"],
  },
  {
    id: "tonle-pandaw",
    name: "Tonle Pandaw",
    type: "Heritage Expedition",
    style: "Teak & brass, as it should be",
    guests: 40,
    cabins: 20,
    regions: ["Vietnam Mekong", "Cambodia Mekong"],
    tagline: "Built from history. Sailed into it.",
    description:
      "Pandaw ships are built to a 1947 Irrawaddy Flotilla blueprint — all teak and polished brass, with the open veranda decks that let the river in at every hour. The Tonle is among the finest of them, named for the great Cambodian lake she loves to explore.",
    image: "/images/tonle_pandaw.avif",
    highlights: ["1947 heritage blueprint design", "All-teak open veranda decks", "Tonle Sap Lake excursions", "Included shore excursions"],
  },
  {
    id: "bassac-pandaw",
    name: "Bassac Pandaw",
    type: "Classic River Expedition",
    style: "The quiet one. The good one.",
    guests: 32,
    cabins: 16,
    regions: ["Vietnam Mekong", "Cambodia Mekong"],
    tagline: "Named for the tributary. Shaped by the river.",
    description:
      "The Bassac Pandaw navigates the quieter arms of the delta — the tributaries and backwaters that larger ships can't reach. Her small scale is her greatest asset.",
    image: "/images/bassac_pandaw_header.webp",
    highlights: ["Backwater access routes", "16 teak-lined cabins", "Expert naturalist guides", "Bicycle excursion kit"],
  },
  {
    id: "mekong-navigator",
    name: "Mekong Navigator",
    type: "Grand Luxury",
    style: "For those who've earned it",
    guests: 48,
    cabins: 24,
    regions: ["Vietnam Mekong", "Cambodia Mekong"],
    tagline: "All-suite. All yours. Nothing left to chance.",
    description:
      "The Navigator is the grand one — sweeping decks, impeccable service, a kind of calm that only comes when everything has been thought of. Inspired by the French Indochina era but built for today's traveller.",
    image: "/images/mekong_navigator_exterior.jpg",
    highlights: ["24 all-suite accommodations", "French colonial interiors", "Spa & wellness deck", "Champagne welcome"],
  },
  {
    id: "indochina-pandaw",
    name: "Indochina Pandaw",
    type: "Heritage Expedition",
    style: "Where the name says everything",
    guests: 40,
    cabins: 20,
    regions: ["Vietnam Mekong", "Cambodia Mekong"],
    tagline: "Two countries. One river. No two days the same.",
    description:
      "The Indochina Pandaw was built for journeys that cross borders — Vietnam into Cambodia and back again, following the river as it doesn't care about lines on maps. Heritage teak, veranda decks, the daily rhythms of life at water level.",
    image: "/images/indochina_pandaw.avif",
    highlights: ["Cross-border itineraries", "Veranda deck dining", "20 teak cabins", "Border crossing assistance"],
  },
  {
    id: "victoria-mekong",
    name: "Victoria Mekong",
    type: "Cultural Immersion",
    style: "Built for those who want to feel it all",
    guests: 36,
    cabins: 18,
    regions: ["Vietnam Mekong", "Cambodia Mekong"],
    tagline: "If you travel to be changed, not just impressed — this is your ship.",
    description:
      "Markets at dawn. Cooking classes by afternoon. The best seat on the sundeck for golden hour. The Victoria Mekong doesn't let you stay passive — it pulls you into the delta's life with both hands.",
    image: "/images/victoria_mekong_sideview.jpg",
    highlights: ["Daily cultural immersion program", "On-board cooking school", "18 river-view suites", "Local artisan workshops"],
  },
  {
    id: "toum-tiou-ii",
    name: "Toum Tiou II",
    type: "Boutique Wooden Vessel",
    style: "Hand-built. Heart-first.",
    guests: 24,
    cabins: 12,
    regions: ["Vietnam Mekong", "Cambodia Mekong"],
    tagline: "Some ships feel like someone built them with love. This is one.",
    description:
      "A traditional wooden vessel, hand-crafted and intimate. Toum Tiou II carries just 24 guests through the quietest parts of the Mekong — the parts where the water is brown and wide and the silence is absolute.",
    image: "/images/toum_tiou_ii_exterior.jpg",
    highlights: ["12 handcrafted wooden cabins", "Traditional boat architecture", "Access to shallow backwaters", "Hammock deck"],
  },
  {
    id: "indochine-ii",
    name: "Indochine II",
    type: "Classic Heritage",
    style: "Second in name. First in character.",
    guests: 36,
    cabins: 18,
    regions: ["Vietnam Mekong", "Cambodia Mekong"],
    tagline: "The river runs through everything she does.",
    description:
      "Inspired by her older sister but with more space, more light, and more time to breathe. The Indochine II is a classic heritage vessel that moves between Vietnam and Cambodia with the unhurried confidence of a ship that knows exactly where it belongs.",
    image: "/images/indochine_ii.avif",
    highlights: ["Heritage colonial style", "18 climate-controlled cabins", "Panoramic observation deck", "French-Vietnamese cuisine"],
  },
  {
    id: "indochine-i",
    name: "Indochine I",
    type: "Classic Heritage",
    style: "The original. Still the one.",
    guests: 28,
    cabins: 14,
    regions: ["Vietnam Mekong", "Cambodia Mekong"],
    tagline: "She's been sailing this river since before it was fashionable.",
    description:
      "The original Indochine — smaller, older, and carrying something the newer ships are still learning: a sense of place. She fits into the Mekong's rhythms the way only time can teach a ship to do.",
    image: "/images/indochine_i.avif",
    highlights: ["14 classic heritage cabins", "Original teak fittings", "Intimate dining room", "Guided village walks"],
  },
  {
    id: "mekong-pandaw",
    name: "Mekong Pandaw",
    type: "Expedition Heritage",
    style: "The river's own ship",
    guests: 40,
    cabins: 20,
    regions: ["Vietnam Mekong", "Cambodia Mekong"],
    tagline: "Named for the river. Built to understand it.",
    description:
      "There's a reason the Mekong Pandaw shares her name with the waterway. She was designed specifically for this river — for its width, its moods, its hidden tributaries. She knows it the way a local knows their neighbourhood.",
    image: "/images/mekong_pandaw_header.webp",
    highlights: ["Designed for Mekong navigation", "Open teak deck dining", "20 veranda cabins", "Photography workshops"],
  },
  {
    id: "lan-diep",
    name: "Lan Diep",
    type: "Traditional Sampan",
    style: "As local as the river gets",
    guests: 16,
    cabins: 8,
    regions: ["Vietnam Mekong"],
    tagline: "Eight cabins. The whole delta to yourselves.",
    description:
      "A traditional Vietnamese river sampan — small, wooden, and deeply local. The Lan Diep takes just 16 guests into the smallest channels of the Mekong Delta, the ones that appear on no tourist map, where life has been lived the same way for centuries.",
    image: "/images/lan_diep_exterior.jpg",
    highlights: ["8 authentic wooden cabins", "Delta-exclusive routes", "Daily market visits", "Local family home-stays"],
  },
]

const LAOS_SHIPS: Ship[] = [
  {
    id: "anouvong",
    name: "Anouvong",
    type: "Heritage Boutique",
    style: "Named after Laos's legendary king",
    guests: 28,
    cabins: 14,
    regions: ["Laos Mekong"],
    tagline: "A king's river, sailed with a king's patience.",
    description:
      "Named after the last king of Vientiane, the Anouvong carries a quiet nobility through the upper Mekong. The slow bends of the Laotian river suit her temperament — unhurried, golden, and impossibly serene.",
    image: "/images/anouvong_signature_suite.jpg",
    highlights: ["14 heritage-style cabins", "Luang Prabang excursions", "Buddhist temple visits at dawn", "Laotian cuisine on board"],
  },
  {
    id: "boheme",
    name: "Bohème",
    type: "Artistic Boutique",
    style: "For the traveller with a notebook",
    guests: 24,
    cabins: 12,
    regions: ["Laos Mekong"],
    tagline: "Inspiration arrives at water level.",
    description:
      "The Bohème attracts a certain kind of traveller — curious, unhurried, with a sketchpad or a camera never far from hand. She moves through Laos's most painterly stretches of river with the spirit of an artist and the comfort of a luxury vessel.",
    image: "/images/boheme_drone_exterior.jpg",
    highlights: ["On-board art workshops", "12 design-forward cabins", "Photography excursions", "Curated cultural evenings"],
  },
  {
    id: "mekong-pearl",
    name: "Mekong Pearl",
    type: "Comfort Expedition",
    style: "Polished. Precise. Perfectly pitched.",
    guests: 36,
    cabins: 18,
    regions: ["Laos Mekong"],
    tagline: "The river reveals itself to those who slow down.",
    description:
      "The Mekong Pearl navigates the upper river with elegance — 18 well-appointed cabins, a generous sundeck, and guides who have been walking these villages for years. Laos's ancient rhythm becomes your own.",
    image: "/images/mekong_pearl_exterior.jpg",
    highlights: ["18 river-view cabins", "Sundeck with canopy lounge", "Hill tribe village visits", "Traditional weaving workshops"],
  },
  {
    id: "laos-pandaw",
    name: "Laos Pandaw",
    type: "Heritage Teak Expedition",
    style: "Built for Laos. Born for it.",
    guests: 40,
    cabins: 20,
    regions: ["Laos Mekong"],
    tagline: "Teak decks. Open verandas. The river, always within reach.",
    description:
      "A classic Pandaw vessel built to the original 1947 blueprint — all teak and brass, with the open veranda decks that let the Laotian breeze in at all hours. Her itineraries reach the remote northern stretches most ships never attempt.",
    image: "/images/mekong_pandaw_header.webp",
    highlights: ["1947 heritage blueprint design", "Northern Laos routes", "20 teak veranda cabins", "All shore excursions included"],
  },
  {
    id: "champa-pandaw",
    name: "Champa Pandaw",
    type: "Floral Heritage",
    style: "Named after Laos's national flower",
    guests: 32,
    cabins: 16,
    regions: ["Laos Mekong"],
    tagline: "The frangipani blooms. The river turns gold. You understand.",
    description:
      "Named for the champa flower — Laos's fragrant national bloom — this vessel carries something of that sweetness. She's among the more intimate Pandaw ships, and Laos suits her scale perfectly.",
    image: "/images/champa_pandaw.avif",
    highlights: ["16 teak-panelled cabins", "Fragrant garden deck", "Mekong sunrise yoga", "Luang Prabang alms-giving ceremony"],
  },
  {
    id: "mekong-star",
    name: "Mekong Star",
    type: "Modern Comfort",
    style: "The one that earns its name at night",
    guests: 44,
    cabins: 22,
    regions: ["Laos Mekong"],
    tagline: "On the upper Mekong, the stars are worth staying up for.",
    description:
      "The Mekong Star earns her name every evening — when the lights go out along the riverbank and the Laotian sky opens up in a way that cities never allow. Days of temple visits and village walks. Nights of absolute stillness.",
    image: "/images/enhanced_hero_2_sharp_optimized.avif",
    highlights: ["Rooftop stargazing deck", "22 river-facing cabins", "Night sky photography guide", "Remote village access"],
  },
  {
    id: "sabaidee-pandaw",
    name: "Sabaidee Pandaw",
    type: "Welcoming Heritage",
    style: "Sabaidee — welcome. And you will be.",
    guests: 36,
    cabins: 18,
    regions: ["Laos Mekong"],
    tagline: "The Laotian greeting given freely. This ship lives up to it.",
    description:
      "Sabaidee is the Laotian word for hello — but said with warmth, it means far more. This vessel carries that spirit: open, generous, at ease with itself and with the river. Her itineraries reach from Vientiane to the misty hills of the north.",
    image: "/images/mekong_pandaw_header.webp",
    highlights: ["18 welcoming veranda cabins", "Laotian cooking school", "Monk blessing ceremony", "Full Vientiane to Luang Prabang route"],
  },
  {
    id: "mekong-sun",
    name: "Mekong Sun",
    type: "Solar-Aware Modern",
    style: "First light. Last light. Both are yours.",
    guests: 30,
    cabins: 15,
    regions: ["Laos Mekong"],
    tagline: "The Mekong at dawn is a different river entirely. Wake up early.",
    description:
      "The Mekong Sun is oriented around light — her cabin windows face east for sunrise, her sundeck faces west for dusk. It sounds simple. It changes everything. Fifteen cabins, thirty guests, and the kind of morning that makes you reconsider your whole relationship with alarm clocks.",
    image: "/images/mekong_sun_exterior.jpg",
    highlights: ["East-facing sunrise cabins", "15 light-filled staterooms", "Dawn meditation deck", "Golden hour photography cruises"],
  },
]

export const SHIPS_BY_DESTINATION: Record<string, { ships: Ship[]; heroImage: string; description: string }> = {
  vietnam: {
    ships: ALL_VIETNAM_CAMBODIA_SHIPS.filter(s => s.regions.includes("Vietnam Mekong")),
    heroImage: "/images/dest_vietnam.avif",
    description:
      "The Vietnamese Mekong doesn't perform. It simply exists — markets opening before dawn, rice paddies running to the bank, children waving from wooden piers. These ships were chosen because they understand that. Choose the one that understands you.",
  },
  cambodia: {
    ships: ALL_VIETNAM_CAMBODIA_SHIPS.filter(s => s.regions.includes("Cambodia Mekong")),
    heroImage: "/images/dest_cambodia.avif",
    description:
      "Cambodia's Mekong is the one that leads to Angkor — ancient, wide, and carrying the weight of two thousand years of civilisation. These vessels navigate it with the reverence it deserves.",
  },
  laos: {
    ships: LAOS_SHIPS,
    heroImage: "/images/dest_laos.avif",
    description:
      "The upper Mekong through Laos is the river at its most itself — slow, golden, utterly unhurried. Eight ships. Eight ways to fall quiet in a landscape that rewards patience.",
  },
}

const allShips = [...ALL_VIETNAM_CAMBODIA_SHIPS, ...LAOS_SHIPS]

export const SHIPS_BY_STYLE: Record<string, { ships: Ship[]; heroImage: string; description: string; title: string }> = {
  luxury: {
    title: "Luxury Cruises",
    ships: Array.from(new Set([...allShips.filter(s => s.type.includes('Luxury') || s.type.includes('Boutique')), ...allShips])).slice(0, 11),
    heroImage: "/images/aqua_mekong.avif",
    description: "For those who know exactly what they want. Michelin-trained chefs, private infinity pools, and a level of service that anticipates your next thought. The river's finest floating addresses."
  },
  family: {
    title: "Family Voyages",
    ships: Array.from(new Set([...allShips.filter(s => s.cabins >= 15), ...allShips])).slice(0, 17),
    heroImage: "/images/dest_cambodia.avif",
    description: "Stories your kids will tell their kids. Spacious connecting cabins, engaging activities from village cycling to cooking classes, and ships large enough to give everyone their own space."
  },
  adventure: {
    title: "Adventure Cruises",
    ships: Array.from(new Set([...allShips.filter(s => s.type.includes('Expedition') || s.id.includes('pandaw')), ...allShips])).slice(0, 15),
    heroImage: "/images/dest_myanmar.avif",
    description: "Off the map, on the water. For travellers who prefer backwaters to main channels. We navigate shallower, quieter tributaries where larger vessels simply cannot go."
  },
  honeymoon: {
    title: "Honeymoon Escapes",
    ships: Array.from(new Set([...allShips.filter(s => s.cabins <= 15), ...allShips])).slice(0, 11),
    heroImage: "/images/dest_laos.avif",
    description: "The most romantic river on Earth. Private sunset sampan rides, candlelit deck dinners, and waking up to the mist lifting off the Mekong. Intimate vessels built for two."
  },
  charter: {
    title: "Private Charters",
    ships: Array.from(new Set([...allShips.filter(s => s.cabins <= 14), ...allShips])).slice(0, 6),
    heroImage: "/images/jayavarman.avif",
    description: "The entire ship. Just yours. Gather your family or closest friends and take over a boutique vessel. You set the pace, you choose the stops, and the river is yours alone."
  },
  solo: {
    title: "Solo Journeys",
    ships: Array.from(new Set([...allShips.filter(s => s.guests <= 30), ...allShips])).slice(0, 5),
    heroImage: "/images/dest_vietnam.avif",
    description: "Go alone. Come back changed. The Mekong is profoundly safe and welcoming for solo travellers. Single-occupancy rates available on vessels where the crew becomes family."
  }
}
