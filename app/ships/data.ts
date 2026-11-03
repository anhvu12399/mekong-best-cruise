export type ShipPricing = {
  threeNight: { from: number; route: string };
  fourNight: { from: number; route: string };
  sevenNight: { from: number; route: string };
  basis: string;
  inclusions: string;
  lastVerified: string;
};

export type CabinCategory = {
  id: string;
  name: string;
  deck: string;
  size: string;
  balconyType: string;
  bedOrientation: string;
  bathroom: string;
  image: string;
  imageAlt: string;
  description: string;
  features: string[];
};

export type ShipData = {
  slug: string;
  name: string;
  operator: string;
  operatorNote: string;
  tagline: string;
  heroImage: string;
  pricing: ShipPricing;
  stats: {
    length: string;
    cabins: string;
    guests: string;
    crew: string;
  };
  overview: {
    title: string;
    description: string;
  };
  design: {
    title: string;
    description: string;
    image: string;
  };
  suites: {
    title: string;
    description: string;
    image: string;
    amenities: string[];
  };
  cabins?: CabinCategory[];
  dining: {
    title: string;
    description: string;
    image: string;
  };
  gallery: string[];
};

export const shipsData: Record<string, ShipData> = {
  "aqua-mekong": {
    slug: "aqua-mekong",
    name: "Aqua Mekong",
    operator: "Aqua Expeditions",
    operatorNote: "Designed and operated by Aqua Expeditions. Booked through Mekong River Cruise with Best Price Guarantee.",
    tagline: "Where the river meets the sky, and the sky never ends",
    heroImage: "/images/aqua_mekong_banner.jpg",
    pricing: {
      threeNight: { from: 4350, route: "Ho Chi Minh City ↔ Phnom Penh" },
      fourNight: { from: 5800, route: "Phnom Penh ↔ Siem Reap" },
      sevenNight: { from: 9800, route: "Ho Chi Minh City ↔ Siem Reap" },
      basis: "Per person, twin-share First Deck Design Suite (all-inclusive)",
      inclusions: "All meals by consulting master chefs, premium house wines & beer, private skiff excursions, biking & kayaking, port fees.",
      lastVerified: "November 2026",
    },
    stats: {
      length: "62.4m",
      cabins: "20",
      guests: "40",
      crew: "40",
    },
    overview: {
      title: "The River's Finest Address",
      description: "There's a moment — usually around the second morning — when the Aqua Mekong stops feeling like a ship and starts feeling like a place you've always known. The crew remembers how you take your coffee. The light through those enormous windows turns the suite into a lantern. Outside, a fisherman throws his net in a perfect circle, and you realize you've been holding your breath. That's what this vessel does: it slows you down until you notice everything.",
    },
    design: {
      title: "Built to disappear into the landscape",
      description: "The architects understood something essential: on this river, the scenery is the main event. So they wrapped the ship in glass — floor to ceiling, wall to wall — and then stepped back. The lounge feels like a living room someone actually lives in. The observation deck has a plunge pool that catches the sunset and holds it. Even the cinema room, tucked behind the bar, feels like a secret you stumbled onto rather than an amenity on a brochure.",
      image: "/images/aqua_mekong_suite_panoramic.webp",
    },
    suites: {
      title: "Panoramic Design Suites",
      description: "Thirty square meters of architectural calm. The beds face the windows because waking up to the Mekong at dawn is worth more than any headboard. Bathrooms feature dual sinks, twin rain showers, and organic lemongrass essentials. A long daybed by the glass lets you immerse yourself in the living canvas of the delta.",
      image: "/images/aqua_mekong_suite_balcony.webp",
      amenities: ["En-suite bathroom with dual sinks & rain showers", "Organic botanical bath amenities", "Large daybed by panoramic glass", "Silent individual climate control", "Complimentary daily laundry"],
    },
    cabins: [
      {
        id: "design-suite-balcony",
        name: "First & Second Deck Balcony Design Suite",
        deck: "First Deck & Second Deck (8 Suites)",
        size: "30 m² (322 sq ft) · Connects to 60 m² (644 sq ft)",
        balconyType: "Private Step-out Teak Balcony with outdoor daybed",
        bedOrientation: "100% Direct River-Facing panoramic king bed",
        bathroom: "Dual overhead ceiling rain showers, twin stone basins, organic lemongrass eco-amenities",
        image: "/images/aqua_mekong_suite_balcony.webp",
        imageAlt: "Aqua Mekong Balcony Design Suite with private outdoor teak veranda and direct river-facing king bed",
        description: "Thirty square meters of architectural serenity designed by Noor Design. Beds face directly out to the Mekong through floor-to-ceiling glass, opening onto a private step-out teak balcony with an exterior daybed. Interconnecting suites can be combined into a 60 m² Master Suite.",
        features: ["Private step-out teak balcony with daybed", "100% direct river-facing king bed", "Dual rain shower heads & twin stone basins", "Interconnecting Master Suite option (60 m²)", "Complimentary daily laundry service", "Eco-friendly lemongrass bath products"]
      },
      {
        id: "design-suite-panoramic",
        name: "First & Second Deck Panoramic Window Suite",
        deck: "First Deck & Second Deck (12 Suites)",
        size: "30 m² (322 sq ft)",
        balconyType: "Full Floor-to-Ceiling Panoramic Glass Wall with 4m interior daybed",
        bedOrientation: "100% Direct River-Facing panoramic king bed",
        bathroom: "Dual rain shower, twin designer sinks, organic botanical amenities",
        image: "/images/aqua_mekong_suite_panoramic.webp",
        imageAlt: "Aqua Mekong Panoramic Window Design Suite featuring floor-to-ceiling glass wall and 4-meter daybed",
        description: "Features a monumental floor-to-ceiling glass wall that transforms your suite into a private theater for the river. Includes a plush 4-meter interior lounging daybed positioned right against the glass for afternoon reading and wildlife viewing.",
        features: ["Floor-to-ceiling panoramic glass facade", "4-meter interior lounging daybed", "River-facing panoramic bed", "Dual overhead rain showers & double vanity", "Individual silent climate control", "Electronic safe & organic bathrobes"]
      },
      {
        id: "luxury-ensuite-bathroom",
        name: "Architectural En-Suite Bathroom",
        deck: "All Design Suites",
        size: "Spa-Grade Master En-Suite",
        balconyType: "River-view frosted architectural glass partition",
        bedOrientation: "En-suite adjoining stateroom",
        bathroom: "Dual ceiling rain showers, twin artisan slate basins, private water closet",
        image: "/images/aqua_mekong_bathroom.webp",
        imageAlt: "Aqua Mekong luxury en-suite bathroom with twin vanity basins and dual overhead rain shower",
        description: "Crafted with dark polished slate and warm natural wood finishes, featuring dual overhead rain showers with exceptional water pressure, twin vanities, and 100% biodegradable botanical lemongrass toiletries.",
        features: ["Dual overhead rain showers", "Twin artisan slate sinks", "100% biodegradable organic bath amenities", "Plush waffle-weave bathrobes & slippers", "Professional ionic hairdryer"]
      }
    ],
    dining: {
      title: "The kitchen that changed our minds about river food",
      description: "Forget what you think you know about cruise ship dining. The Aqua Mekong's consulting chef sources ingredients from the villages we pass — morning glory from a woman who waves at us every Tuesday, river prawns so fresh they're practically still swimming. The amok curry served in banana leaves at dinner is the kind of dish that makes you close your eyes.",
      image: "/images/cultural-encounters-new.avif",
    },
    gallery: [
      "/images/aqua_mekong_suite_balcony.webp",
      "/images/aqua_mekong_suite_panoramic.webp",
      "/images/aqua_mekong_bathroom.webp",
      "/images/aqua_mekong_banner.jpg",
      "/images/aqua_mekong_exterior_frontview.webp",
      "/images/aqua_mekong_suite_panoramic.webp"
    ],
  },
  "jayavarman": {
    slug: "jayavarman",
    name: "The Jayavarman",
    operator: "Heritage Line",
    operatorNote: "Built and operated by Heritage Line. Curated and booked by Mekong River Cruise with Best Price Guarantee and verified cabin allocations.",
    tagline: "Where teak meets twilight, and history pours the drinks",
    heroImage: "/images/jayavarman.avif",
    pricing: {
      threeNight: { from: 1260, route: "Ho Chi Minh City ↔ Phnom Penh" },
      fourNight: { from: 1680, route: "Phnom Penh ↔ Siem Reap" },
      sevenNight: { from: 2403, route: "Ho Chi Minh City ↔ Siem Reap (The Lost Civilization)" },
      basis: "Per person, twin-share Superior Stateroom",
      inclusions: "All onboard gourmet meals, daily shore excursions with English guide, entrance fees, transfers during tours, mineral water, coffee/tea, port fees.",
      lastVerified: "November 2026",
    },
    stats: {
      length: "57.8m",
      cabins: "27",
      guests: "54",
      crew: "40",
    },
    overview: {
      title: "A ship that remembers",
      description: "The Jayavarman carries a name that weighs something. Jayavarman VII built Angkor Thom, the Bayon, and a network of hospitals across the Khmer empire. This ship carries that ambition in quieter ways — in the hand-carved mahogany that lines the corridors, in the silk cushions that someone chose one by one, in the way the bartender at Club 1930 already knows your drink by the second evening.",
    },
    design: {
      title: "Colonial bones, Khmer soul",
      description: "The designers raided Saigon's antique shops and Phnom Penh's silk markets. The result is a ship that looks like a French colonial officer's dream filtered through Cambodian warmth. Dark teak panels absorb the light; hand-woven rugs soften the floors. The library has actual books — dog-eared novels about Indochina alongside photography collections.",
      image: "/images/jayavarman_lounge.avif",
    },
    suites: {
      title: "Boutique Staterooms",
      description: "No two cabins look exactly alike, which is the first clue that someone cared. One has a carved headboard depicting apsara dancers. Another has vintage maps of the Mekong framed above the desk. All of them have private balconies where you can sit in the early morning dark and listen to monks chanting from a distant pagoda across the water.",
      image: "/images/jayavarman_deluxe_cabin.jpg",
      amenities: ["Private balcony", "French balcony doors", "Mini-bar with local spirits", "Air conditioning", "Premium Egyptian cotton linens"],
    },
    cabins: [
      {
        id: "deluxe-stateroom",
        name: "Superior & Deluxe Stateroom",
        deck: "Main Deck & Upper Deck (25 Cabins)",
        size: "20 m² to 23 m² (215 - 248 sq ft)",
        balconyType: "Private Step-Out Balcony with French wrought-iron railings",
        bedOrientation: "Angled king bed with panoramic river views through balcony doors",
        bathroom: "Handcrafted ceramic-tiled en-suite with walk-in glass shower",
        image: "/images/jayavarman_deluxe_cabin.jpg",
        imageAlt: "The Jayavarman Deluxe Cabin with French-Indochine colonial decor and private wrought-iron balcony",
        description: "French colonial charm meets Khmer artistry. Handcrafted wood carvings of Angkorian apsaras, vintage Mekong expedition maps, and French doors leading out to your private balcony.",
        features: ["Private step-out balcony with French doors", "Handcrafted Khmer wood carvings & art", "Ceramic-tiled walk-in rain shower", "French Indochine colonial styling", "Mini-bar with local craft spirits"]
      },
      {
        id: "signature-suite",
        name: "Signature Suite (Bao Dai & Jayavarman)",
        deck: "Upper Deck Bow (2 Suites)",
        size: "27 m² (290 sq ft)",
        balconyType: "Private Panoramic Bow Veranda",
        bedOrientation: "King bed facing forward river panorama",
        bathroom: "Deluxe en-suite with private whirlpool Jacuzzi looking out to the river",
        image: "/images/jayavarman_signature_suite.jpg",
        imageAlt: "The Jayavarman Signature Suite featuring in-room whirlpool Jacuzzi and private bow veranda",
        description: "Perched at the ship's bow on the Upper Deck. Features distinctive antique furnishings, a large private forward-facing veranda, and an in-room whirlpool Jacuzzi tub with sweeping river views.",
        features: ["Private whirlpool Jacuzzi overlooking river", "Large private forward bow veranda", "Distinctive Indochine antique artwork", "Complimentary sparkling wine upon embarkation", "Daily laundry & evening turndown service"]
      }
    ],
    dining: {
      title: "Club 1930 — where the evening starts",
      description: "The dining room is called Club 1930, and it earns the name. Candlelight on white linen. A Vietnamese chef who trained in Saigon but grew up watching his grandmother make bún bò Huế. The Cambodian fish amok arrives in a coconut, and the French onion soup that follows is so good it's almost an insult to the local cuisine.",
      image: "/images/jayavarman_dining.avif",
    },
    gallery: [
      "/images/jayavarman.avif",
      "/images/jayavarman_deluxe_cabin.jpg",
      "/images/jayavarman_signature_suite.jpg",
      "/images/jayavarman_banner.jpg",
      "/images/jayavarman_lounge.avif",
      "/images/jayavarman_dining.avif"
    ],
  },
  "mekong-jewel": {
    slug: "mekong-jewel",
    name: "Mekong Jewel",
    operator: "Lotus Cruises",
    operatorNote: "Operated by Lotus Cruises. Curated and booked by Mekong River Cruise with Best Price Guarantee.",
    tagline: "The newest ship on the oldest river. Built to listen.",
    heroImage: "/images/jewel_hero.avif",
    pricing: {
      threeNight: { from: 1650, route: "Ho Chi Minh City ↔ Phnom Penh" },
      fourNight: { from: 2200, route: "Phnom Penh ↔ Siem Reap" },
      sevenNight: { from: 3850, route: "Ho Chi Minh City ↔ Siem Reap" },
      basis: "Per person, twin-share Deluxe Balcony Suite",
      inclusions: "All meals onboard, complimentary house beverages during lunch and dinner, guided daily shore excursions, port charges.",
      lastVerified: "November 2026",
    },
    stats: {
      length: "80m",
      cabins: "34",
      guests: "68",
      crew: "51",
    },
    overview: {
      title: "A quiet revolution",
      description: "The Mekong Jewel is the river's newest ship, and you can feel it in the details that other vessels never thought to include. The water purification system means you can drink from the tap — a small thing that changes everything. The hull was built with sustainably sourced materials, but the ship never lectures you about it. Instead, it lets you sit on the sundeck with a cold Saigon beer and watch herons lift off from the rice paddies.",
    },
    design: {
      title: "Light, space, and the sound of water",
      description: "The architects gave this ship something most river cruisers lack: breathing room. The two dining venues never feel crowded. The sundeck pool is big enough to actually swim in. The lounge has floor-to-ceiling windows that make the Mekong feel like a living painting — changing color, shifting mood, never the same river twice.",
      image: "/images/jewel_pool.avif",
    },
    suites: {
      title: "All-Balcony Suites",
      description: "Every single suite on the Jewel has its own balcony. This matters more than you think. At dawn, before the ship wakes, you can stand outside in your robe and watch the mist burn off the river. Inside, the bed faces the water. The bathroom has a rain shower.",
      image: "/images/mekong_jewel_royal_suite.jpg",
      amenities: ["Private open-air balcony", "Sitting area with river views", "Rain shower bathroom", "Flat-screen TV", "Daily restocked tropical fruit & water"],
    },
    cabins: [
      {
        id: "deluxe-balcony-suite",
        name: "Deluxe Balcony Suite (Lotus Deck)",
        deck: "Lotus & Orchid Decks (28 Suites)",
        size: "30 m² to 31.5 m² (323 - 339 sq ft)",
        balconyType: "Private Step-out Teak Balcony with rattan armchairs",
        bedOrientation: "Direct River-Facing upholstered bed",
        bathroom: "Marble en-suite bathroom with walk-in rain shower",
        image: "/images/mekong_jewel_lotus_suite.jpg",
        imageAlt: "Mekong Jewel Deluxe Balcony Suite on Lotus Deck with private open-air balcony and river-facing bed",
        description: "Modern eco-luxury with reclaimed timbers, woven bamboo accents, and floor-to-ceiling glass leading to a private outdoor balcony. Includes daily restocked tropical fruit basket.",
        features: ["Private open-air balcony", "Direct river-facing king bed", "Marble walk-in rain shower", "Complimentary minibar restocked daily", "Eco-friendly purified tap water system"]
      },
      {
        id: "grand-suite",
        name: "Grand Suite (Sun & Pool Deck)",
        deck: "Sun Deck (4 Suites)",
        size: "51 m² (549 sq ft)",
        balconyType: "Expansive Private Veranda with sun loungers",
        bedOrientation: "Forward river-facing king bed with panoramic floor-to-ceiling glass",
        bathroom: "Luxury marble bath with standalone soaking tub & rainfall shower",
        image: "/images/mekong_jewel_grand_suite.jpg",
        imageAlt: "Mekong Jewel Grand Suite featuring spacious lounge and sweeping river views",
        description: "Expansive luxury living with separate parlor seating, dedicated butler service, and complimentary laundry. Floor-to-ceiling glass wall opens onto a generous private veranda.",
        features: ["51 m² expansive floor plan with parlor", "Private furnished sun veranda", "Standalone soaking tub overlooking river", "Personal butler service & free laundry", "Daily evening canapés & sparkling wine"]
      },
      {
        id: "royal-suite",
        name: "Royal Suite (Upper Deck Bow)",
        deck: "Upper Deck Bow (2 Grand Suites)",
        size: "85 m² (915 sq ft)",
        balconyType: "Monumental Forward-Facing Private Veranda with outdoor Jacuzzi",
        bedOrientation: "Grand master bedroom with panoramic forward river views",
        bathroom: "Palatial marble master bath with Jacuzzi tub, dual rain showers & twin vanities",
        image: "/images/mekong_jewel_royal_suite.jpg",
        imageAlt: "Mekong Jewel Royal Suite with private forward veranda and master bedroom",
        description: "The grandest suite on the Mekong. Boasts a forward-facing private terrace with private whirlpool Jacuzzi, separate dining area, walk-in dressing room, and dedicated 24-hour butler service.",
        features: ["85 m² palatial suite with forward terrace", "Private outdoor whirlpool Jacuzzi", "Separate dining salon & living parlor", "24-hour dedicated butler service", "Unlimited complimentary laundry & minibar"]
      }
    ],
    dining: {
      title: "Two kitchens, one philosophy: fresh",
      description: "The main dining room handles the evening theater — multi-course dinners where the chef explains each dish like a story. But the real magic happens at the alfresco venue upstairs, where lunch is served family-style and the cook might pull you aside to teach you how to roll a proper spring roll.",
      image: "/images/jewel_dining.avif",
    },
    gallery: [
      "/images/mekong_jewel.avif",
      "/images/mekong_jewel_royal_suite.jpg",
      "/images/mekong_jewel_grand_suite.jpg",
      "/images/mekong_jewel_lotus_suite.jpg",
      "/images/jewel_dining.avif",
      "/images/jewel_pool.avif"
    ],
  },
  "mekong-princess": {
    slug: "mekong-princess",
    name: "Mekong Princess",
    operator: "Viet Princess Cruises",
    operatorNote: "Operated by Viet Princess Cruises. Curated and booked by Mekong River Cruise with Best Price Guarantee.",
    tagline: "Fourteen suites. No crowds. Just the river and you.",
    heroImage: "/images/princess_hero.avif",
    pricing: {
      threeNight: { from: 1580, route: "Ho Chi Minh City ↔ Phnom Penh" },
      fourNight: { from: 2100, route: "Phnom Penh ↔ Siem Reap" },
      sevenNight: { from: 3680, route: "Ho Chi Minh City ↔ Siem Reap" },
      basis: "Per person, twin-share Junior Suite",
      inclusions: "All gourmet meals, private butler service, daily excursions, house wine with dinner, port charges.",
      lastVerified: "November 2026",
    },
    stats: {
      length: "61m",
      cabins: "14",
      guests: "28",
      crew: "28",
    },
    overview: {
      title: "Small enough to disappear",
      description: "There's a narrow tributary south of Châu Đốc where the water hyacinths close in and the bigger ships simply can't follow. The Mekong Princess can. She slips through channels so narrow you could reach out and touch the banana leaves. This is what fourteen suites buys you: access to the Mekong that feels less like tourism and more like personal discovery.",
    },
    design: {
      title: "The charm of not trying too hard",
      description: "The Princess doesn't have the glitz of the bigger ships, and she knows it. What she has instead is warmth. The observation lounge feels like someone's living room — mismatched vintage chairs, shelves of actual books, a bar where the bartender has time to talk because there are only twenty-eight guests.",
      image: "/images/princess_hero.avif",
    },
    suites: {
      title: "Rooms that feel like hiding places",
      description: "The suites on the Princess are generous for a ship this size — probably because there are only fourteen of them. French balconies with wrought-iron railings open onto the passing delta. The beds have white cotton and indigo silk. There's always a vase of fresh lotus flowers.",
      image: "/images/mekong_princess_saigon_suite.jpg",
      amenities: ["French balcony or private veranda", "Premium bath products by L'Occitane", "Silk robes and leather slippers", "Individual climate control"],
    },
    cabins: [
      {
        id: "saigon-suite",
        name: "Saigon Suite",
        deck: "Bassac Deck Forward (2 Master Suites)",
        size: "46 m² (495 sq ft)",
        balconyType: "Private Forward Veranda with outdoor seating",
        bedOrientation: "Royal portrait headboard facing private river veranda",
        bathroom: "French colonial natural stone bath with clawfoot bathtub & separate shower",
        image: "/images/mekong_princess_saigon_suite.jpg",
        imageAlt: "Mekong Princess Saigon Suite with Nam Phuong Queen portrait, French colonial decor and private veranda",
        description: "The premier stateroom aboard Mekong Princess. Features authentic Indochine royal portraits, antique hardwood floors, a private forward veranda, and an indulgent clawfoot soaking tub.",
        features: ["Private step-out forward veranda", "Clawfoot bathtub & separate rain shower", "Dedicated private butler service", "Complimentary daily laundry & mini-bar", "L'Occitane en Provence amenities"]
      },
      {
        id: "apsara-suite",
        name: "Apsara Suite",
        deck: "Mekong Deck (4 Suites)",
        size: "24 m² (258 sq ft)",
        balconyType: "French Balcony with floor-to-ceiling glass doors",
        bedOrientation: "River-facing classic French colonial bed with indigo silks",
        bathroom: "Natural stone bathroom with rain shower and luxury L'Occitane amenities",
        image: "/images/mekong_princess_apsara_suite.jpg",
        imageAlt: "Mekong Princess Apsara Suite with hand-carved Khmer bas-relief and French balcony",
        description: "An intimate sanctuary celebrating Khmer craftsmanship with authentic carved apsara artwork, floor-to-ceiling French doors, and gentle river breezes.",
        features: ["French doors opening to river breeze", "Authentic carved Khmer apsara art", "Dedicated private butler service", "Silk bathrobes & leather slippers", "Fresh lotus flowers replenished daily"]
      }
    ],
    dining: {
      title: "When the chef knows your name",
      description: "With twenty-eight guests, dinner isn't a production — it's a conversation. The chef comes out most evenings, still in his apron, to ask how the fish was. It was perfect, because he bought it six hours ago from a boat that pulled alongside.",
      image: "/images/princess_dining.avif",
    },
    gallery: [
      "/images/princess_hero.avif",
      "/images/mekong_princess_saigon_suite.jpg",
      "/images/mekong_princess_apsara_suite.jpg",
      "/images/princess_dining.avif",
      "/images/dest_vietnam.avif",
      "/images/dest_cambodia.avif"
    ],
  },
  "the-jahan": {
    slug: "the-jahan",
    name: "The Jahan",
    operator: "Heritage Line",
    operatorNote: "Heritage Line's flagship vessel. Curated and booked by Mekong River Cruise with Best Price Guarantee.",
    tagline: "Named for the emperor who built the Taj Mahal. She lives up to it.",
    heroImage: "/images/the_jahan.avif",
    pricing: {
      threeNight: { from: 1380, route: "Ho Chi Minh City ↔ Phnom Penh" },
      fourNight: { from: 1840, route: "Phnom Penh ↔ Siem Reap" },
      sevenNight: { from: 2640, route: "Ho Chi Minh City ↔ Siem Reap" },
      basis: "Per person, twin-share Superior Balcony Stateroom",
      inclusions: "All meals onboard, guided shore excursions, onboard lectures, mineral water, coffee/tea, port fees.",
      lastVerified: "November 2026",
    },
    stats: {
      length: "70m",
      cabins: "26",
      guests: "52",
      crew: "40",
    },
    overview: {
      title: "A floating palace with a sense of humor",
      description: "The Jahan is the most theatrical ship on the Mekong, and she isn't shy about it. The moment you step aboard, you're surrounded by intricate woodwork, vibrant silks, and artifacts that someone clearly spent years collecting from markets across Asia. But what saves her from feeling like a museum is the crew — warm, quick to laugh, and completely welcoming.",
    },
    design: {
      title: "Mughal dreams on Mekong waters",
      description: "Shah Jahan built monuments to love. This ship borrows his aesthetic without his melancholy. The woodwork is intricate — hand-carved panels that catch the light differently at every hour. The colors are bold: saffron, turquoise, deep crimson. The observatory on the top deck has the best view on the river.",
      image: "/images/the_jahan.avif",
    },
    suites: {
      title: "Ornate Cabins",
      description: "The four-poster beds have carved headboards depicting Asian legends. The textiles are hand-embroidered. Balcony doors open onto the river with a theatrical creak that feels intentional. Bathrooms have mosaic tiles in patterns that trace Indochinese history.",
      image: "/images/the_jahan_superior_cabin.jpg",
      amenities: ["Private balcony", "Four-poster carved bed", "Writing desk with stationery", "Mini-bar with premium spirits"],
    },
    cabins: [
      {
        id: "superior-stateroom",
        name: "Superior Stateroom (Private Balcony)",
        deck: "Main Deck (16 Cabins)",
        size: "30 m² (323 sq ft) + 4 m² Teak Balcony",
        balconyType: "Real Step-Out Teak Balcony with hand-woven rattan chairs & table",
        bedOrientation: "British-India hand-carved mahogany bed facing river balcony",
        bathroom: "Mosaic-tiled en-suite with walk-in rain shower and heritage brass fixtures",
        image: "/images/the_jahan_superior_cabin.jpg",
        imageAlt: "The Jahan Superior Stateroom with hand-carved British-India colonial woodwork and private teak balcony",
        description: "Evoking the romantic British-India era with rich colonial timbers, hand-embroidered textiles, and an authentic 4 m² private step-out teak balcony overlooking the riverbanks.",
        features: ["4 m² private step-out teak balcony", "Hand-carved colonial mahogany woodwork", "Mosaic-tiled bathroom with walk-in rain shower", "Complimentary minibar & premium linens", "Daily cultural treats & fresh fruit"]
      },
      {
        id: "deluxe-signature-suite",
        name: "Deluxe Stateroom & Signature Suite",
        deck: "Upper Deck (8 Deluxe & 2 Signature Suites)",
        size: "30 m² to 36 m² (323 - 387 sq ft)",
        balconyType: "Elevated Private Teak Veranda",
        bedOrientation: "Four-poster colonial bed draped in fine linens",
        bathroom: "Handcrafted mosaic bath; Signature Suites feature private in-room Jacuzzi tub",
        image: "/images/the_jahan_signature_suite.jpg",
        imageAlt: "The Jahan Signature Suite with private Jacuzzi spa tub and four-poster colonial bed",
        description: "Situated on the Upper Deck with elevated panoramic vistas. Signature Suites boast antique Raj artifacts, a four-poster bed, and a private Jacuzzi tub with river views.",
        features: ["Upper Deck prime river panorama", "Four-poster carved colonial bed", "Private Jacuzzi spa tub in Signature Suites", "Butler service & daily laundry", "Hand-painted artwork & Raj antiques"]
      },
      {
        id: "taj-noble-suite",
        name: "Noble Suite (The Taj & Lord Byron)",
        deck: "Upper Deck Bow (2 Monumental Suites)",
        size: "51 m² (549 sq ft)",
        balconyType: "Monumental Forward-Facing Private Veranda with outdoor Jacuzzi",
        bedOrientation: "Grand Indian-colonial four-poster bed facing forward river panorama",
        bathroom: "Palatial en-suite bathroom with handcrafted marble whirlpool spa tub",
        image: "/images/the_jahan_taj_suite.jpg",
        imageAlt: "The Jahan Noble Suite The Taj with hand-inlaid Indian artwork and four-poster bed",
        description: "The crown jewel of The Jahan. Evoking the courtly romance of Emperor Shah Jahan with antique Indian tapestries, camel-bone inlaid tables, a palatial private veranda, and outdoor whirlpool Jacuzzi.",
        features: ["51 m² palatial suite with forward veranda", "Private outdoor whirlpool Jacuzzi", "Hand-inlaid camel bone furnishings & Raj art", "Personal butler service & daily laundry", "Complimentary sparkling wine & minibar"]
      }
    ],
    dining: {
      title: "The Viceroy Dining Hall",
      description: "The dining hall has crystal chandeliers that throw tiny rainbows across white tablecloths at sunset. The menu is unapologetically fusion: Cambodian curry alongside lamb kebabs, Vietnamese pho next to naan bread.",
      image: "/images/jahan_dining.avif",
    },
    gallery: [
      "/images/the_jahan.avif",
      "/images/the_jahan_superior_cabin.jpg",
      "/images/the_jahan_signature_suite.jpg",
      "/images/the_jahan_taj_suite.jpg",
      "/images/jahan_dining.avif",
      "/images/cultural-encounters-new.avif"
    ],
  },
  "victoria-mekong": {
    slug: "victoria-mekong",
    name: "Victoria Mekong",
    operator: "Victoria Mekong Cruises",
    operatorNote: "Operated by Victoria Mekong Cruises (Thien Minh Group). Curated and booked by Mekong River Cruise with Best Price Guarantee.",
    tagline: "Clean lines, wide views, and the future of river cruising",
    heroImage: "/images/victoria_mekong_sideview.jpg",
    pricing: {
      threeNight: { from: 790, route: "Can Tho ↔ Phnom Penh" },
      fourNight: { from: 990, route: "Phnom Penh ↔ Can Tho" },
      sevenNight: { from: 1690, route: "Can Tho ↔ Siem Reap" },
      basis: "Per person, twin-share Deluxe Stateroom",
      inclusions: "All meals onboard, free flow local beer and soft drinks, guided shore excursions, entrance fees, transfers.",
      lastVerified: "November 2026",
    },
    stats: {
      length: "76.8m",
      cabins: "35",
      guests: "70",
      crew: "45",
    },
    overview: {
      title: "The one that surprised us",
      description: "The Victoria Mekong brings modern design to the delta. Walk onto the 360-degree sundeck and realize you can see miles of green waterways. The infinity pool catches the sky like a second horizon. Contemporary, eco-conscious, and refreshingly relaxed.",
    },
    design: {
      title: "What happens when you let light in",
      description: "Most river ships are built like hotels that happen to float. The Victoria Mekong is built like a greenhouse that happens to have beds. Light wood finishes replace dark teak, and floor-to-ceiling glass spans the entire public deck.",
      image: "/images/victoria_hero.avif",
    },
    suites: {
      title: "Modern Retreats",
      description: "The cabins are crisp. White walls, light wood, beds that sit lower to frame the river through the balcony door like a painting. Bathrooms have walk-in rain showers with glass walls that let the morning light pour through.",
      image: "/images/victoria_mekong_deluxe_cabin.jpg",
      amenities: ["Private balcony", "Smart TV with streaming", "Walk-in rain shower", "In-room safe", "Bluetooth speaker"],
    },
    cabins: [
      {
        id: "deluxe-balcony-cabin",
        name: "Deluxe Balcony Stateroom",
        deck: "River & Panorama Decks (35 Cabins)",
        size: "25 m² (269 sq ft)",
        balconyType: "Private Step-out Balcony with table & chairs",
        bedOrientation: "Low-profile modern bed facing river panorama",
        bathroom: "Walk-in rain shower with glass enclosure",
        image: "/images/victoria_mekong_deluxe_cabin.jpg",
        imageAlt: "Victoria Mekong Deluxe Balcony Stateroom with contemporary eco-design and river balcony",
        description: "Light, airy contemporary design with floor-to-ceiling sliding glass doors opening onto your private balcony. Features clean Scandinavian-influenced aesthetics, smart TV, and walk-in rain shower.",
        features: ["Private step-out balcony with chairs", "Low-profile river-facing bed", "Walk-in glass rain shower", "Eco-friendly solar powered features", "Free-flow local beer & soft drinks"]
      }
    ],
    dining: {
      title: "A restaurant with no walls",
      description: "The panoramic restaurant wraps around the ship like a glass embrace. At breakfast, the light is clean and the fruit is picked that morning. The menu borrows from everywhere the Mekong touches: Vietnamese bún chả, Cambodian lok lak, and fresh local catches.",
      image: "/images/jewel_dining.avif",
    },
    gallery: [
      "/images/victoria_mekong_sideview.jpg",
      "/images/victoria_mekong_deluxe_cabin.jpg",
      "/images/victoria_mekong.avif",
      "/images/victoria_mekong_v2.avif",
      "/images/victoria_mekong_v3.avif",
      "/images/victoria_hero.avif"
    ],
  },
  "scenic-spirit": {
    slug: "scenic-spirit",
    name: "Scenic Spirit",
    operator: "Scenic Luxury Cruises & Tours",
    operatorNote: "Operated by Scenic. 100% all-inclusive luxury river cruising with private butler service.",
    tagline: "Ultra-luxury all-inclusive with private Sun Lounge balconies",
    heroImage: "/images/scenic_spirit_exterior.jpg",
    pricing: {
      threeNight: { from: 3100, route: "Ho Chi Minh City ↔ Phnom Penh" },
      fourNight: { from: 4200, route: "Phnom Penh ↔ Siem Reap" },
      sevenNight: { from: 7800, route: "Ho Chi Minh City ↔ Siem Reap" },
      basis: "Per person, twin-share Deluxe Suite (All-inclusive 24/7)",
      inclusions: "Unlimited premium spirits & wine 24/7, personal butler, private transfers, guided excursions, tipping.",
      lastVerified: "November 2026",
    },
    stats: {
      length: "85m",
      cabins: "34",
      guests: "68",
      crew: "56",
    },
    overview: {
      title: "Five-Star Space and Sanctuary",
      description: "Scenic Spirit was custom-built to deliver five-star European luxury to the Mekong. With only 68 guests served by 56 crew members, the passenger-to-space ratio is among the highest of any ship in Southeast Asia.",
    },
    design: {
      title: "Transformative Sun Lounge Architecture",
      description: "Every suite on board features Scenic's innovative Sun Lounge system: at the push of a button, floor-to-ceiling glass windows retract, converting your climate-controlled lounge into an open-air teak balcony.",
      image: "/images/scenic_spirit_deck_layout.webp",
    },
    suites: {
      title: "All-Balcony Suites with Butler Service",
      description: "Starting at an expansive 32 square meters, suites feature river-facing Slumber Beds, marble bathrooms with walk-in rain showers, and dedicated private butler service.",
      image: "/images/scenic_spirit_grand_deluxe_suite.webp",
      amenities: ["Scenic Sun Lounge balcony", "Private butler service", "Walk-in rain shower", "Complimentary mini-bar restocked daily", "L'Occitane bath amenities"],
    },
    cabins: [
      {
        id: "deluxe-suite",
        name: "Deluxe Suite (Scenic Sun Lounge)",
        deck: "Jewel, Sapphire & Diamond Decks (24 Suites)",
        size: "32 m² (344 sq ft)",
        balconyType: "Exclusive Scenic Sun Lounge (electronic push-button convertible glass balcony)",
        bedOrientation: "Direct River-Facing Scenic Slumber Bed",
        bathroom: "Granite vanity, large walk-in glass shower, luxury L'Occitane en Provence amenities",
        image: "/images/scenic_spirit_deluxe_suite.webp",
        imageAlt: "Scenic Spirit Deluxe Suite with all-weather Scenic Sun Lounge balcony and river-facing Slumber Bed",
        description: "European luxury on the Mekong. At the touch of a button, the floor-to-ceiling glass wall retracts to transform your lounge into an open-air teak balcony. Includes personal butler service and unlimited daily minibar replenishment.",
        features: ["Electronic Scenic Sun Lounge convertible balcony", "Scenic Slumber Bed facing the river", "Dedicated private butler service", "Complimentary mini-bar restocked daily", "L'Occitane en Provence bath amenities", "Walk-in glass shower & plush robes"]
      },
      {
        id: "grand-deluxe-suite",
        name: "Grand Deluxe Suite",
        deck: "Diamond Deck (8 Suites)",
        size: "40 m² (430 sq ft)",
        balconyType: "Private Scenic Sun Lounge with outdoor seating",
        bedOrientation: "Private master bedroom with river-facing Slumber Bed",
        bathroom: "Walk-in dressing room (wardrobe), granite double vanity, walk-in rain shower",
        image: "/images/scenic_spirit_grand_deluxe_suite.webp",
        imageAlt: "Scenic Spirit Grand Deluxe Suite with separate lounge, walk-in dressing room, and Sun Lounge balcony",
        description: "An expansive 40 m² suite featuring a separate living room, walk-in dressing wardrobe, and a private Sun Lounge. Enjoy dedicated butler service, complimentary laundry, and premium Illy espresso machine.",
        features: ["Spacious 40 m² layout with separate living room", "Walk-in dressing room & wardrobe", "Scenic Sun Lounge balcony", "Butler service with shoe shine & pressing", "Complimentary Illy coffee machine", "Complimentary laundry service"]
      },
      {
        id: "vessel-deck-architecture",
        name: "Vessel Architecture & Deck Layout",
        deck: "Jewel, Sapphire, Diamond & Sun Decks (34 All-Balcony Suites)",
        size: "85m vessel length · Passenger Elevator",
        balconyType: "100% Balcony Vessel with Elevator access",
        bedOrientation: "All suites outwards facing",
        bathroom: "Passenger lift connecting all three suite decks",
        image: "/images/scenic_spirit_deck_layout.webp",
        imageAlt: "Scenic Spirit architectural deck plan and suite layout showing passenger elevator and all-balcony suites",
        description: "With an exceptional 1:1.1 crew-to-guest ratio, Scenic Spirit features an internal passenger elevator connecting 3 cabin decks, an open-air resort pool on the Sun Deck, steam sauna, and full-service wellness spa.",
        features: ["Internal passenger elevator serving 3 suite decks", "1:1.1 staff-to-guest ratio (68 guests / 56 crew)", "Sun Deck resort swimming pool & open-air bar", "Steam sauna & wellness treatment spa", "Crystal Dining room & River Café"]
      }
    ],
    dining: {
      title: "Crystal Dining & River Café",
      description: "From regional Khmer and Vietnamese delicacies to refined Western classics, all paired with complimentary sommelier-selected wines and premium cocktails around the clock.",
      image: "/images/luxury_dining.avif",
    },
    gallery: [
      "/images/scenic_spirit_exterior.jpg",
      "/images/scenic_spirit_overview.jpg",
      "/images/scenic_spirit_deluxe_suite.webp",
      "/images/scenic_spirit_grand_deluxe_suite.webp",
      "/images/scenic_spirit_deck_layout.webp",
      "/images/luxury_dining.avif"
    ],
  },
  "anouvong": {
    slug: "anouvong",
    name: "Anouvong",
    operator: "Heritage Line",
    operatorNote: "Operated by Heritage Line. Boutique ultra-luxury expedition on the Upper Mekong in Laos.",
    tagline: "A king's vessel on the golden waters of Laos",
    heroImage: "/images/anouvong.avif",
    pricing: {
      threeNight: { from: 1850, route: "Huay Xai ↔ Luang Prabang" },
      fourNight: { from: 2450, route: "Luang Prabang ↔ Vientiane" },
      sevenNight: { from: 4350, route: "Huay Xai ↔ Vientiane (Golden Triangle to Capital)" },
      basis: "Per person, twin-share Deluxe Stateroom",
      inclusions: "All gourmet onboard meals, daily expert-led cultural excursions, port fees, mineral water, coffee/tea.",
      lastVerified: "November 2026",
    },
    stats: {
      length: "48m",
      cabins: "10",
      guests: "20",
      crew: "22",
    },
    overview: {
      title: "The Ultimate Upper Mekong Retreat",
      description: "Named after King Anouvong, this intimate 10-cabin vessel brings bespoke elegance to Laos's misty mountain gorges. With only 20 guests, each journey feels like a private aristocratic expedition.",
    },
    design: {
      title: "Laotian Artistry & Heritage Teak",
      description: "Handcrafted Laotian textiles, gold-leaf Buddhist motifs, and deep teak woods evoke the royal heritage of Lan Xang. Designed with a shallow 1.2m draft to safely glide through the granite rapids of northern Laos.",
      image: "/images/anouvong_terrace_deck.jpg",
    },
    suites: {
      title: "Handcrafted River Sanctuaries",
      description: "Floor-to-ceiling French balconies showcase dramatic cliff landscapes. Signature Suites feature a forward private terrace and an in-room Jacuzzi bath looking directly out onto the river.",
      image: "/images/anouvong_signature_suite.jpg",
      amenities: ["French balcony or private terrace", "Artisanal botanical amenities", "Individually controlled climate", "Panoramic river views", "Jacuzzi tub in Signature Suites"],
    },
    cabins: [
      {
        id: "deluxe-stateroom",
        name: "Deluxe Stateroom",
        deck: "Main Deck (8 Cabins)",
        size: "20 m² (215 sq ft)",
        balconyType: "Floor-to-ceiling French balcony glass doors with safety railing",
        bedOrientation: "Handcrafted Lao textile king bed facing dramatic mountain cliffs",
        bathroom: "En-suite with walk-in glass rain shower and gold leaf accents",
        image: "/images/anouvong_deluxe_cabin.jpg",
        imageAlt: "Anouvong Deluxe Stateroom with floor-to-ceiling French balcony and traditional Lao silk textiles",
        description: "Custom-designed for the Upper Mekong with hand-woven Lao textiles, warm teak wood, and floor-to-ceiling glass doors framing northern Laos's dramatic limestone gorges.",
        features: ["Floor-to-ceiling French balcony doors", "Handcrafted Lao silk & timber furnishings", "Walk-in glass rain shower", "Quiet boutique sanctuary (only 10 cabins on ship)", "Artisanal botanical bath amenities"]
      },
      {
        id: "deluxe-executive",
        name: "Deluxe Executive Stateroom",
        deck: "Terrace Deck (2 Cabins)",
        size: "20 m² (215 sq ft)",
        balconyType: "Terrace Deck French Balcony with elevated river vistas",
        bedOrientation: "River-facing panoramic bed",
        bathroom: "En-suite rain shower with artisanal botanical soaps",
        image: "/images/anouvong_deluxe_executive.jpg",
        imageAlt: "Anouvong Deluxe Executive Stateroom on Terrace Deck with elevated Upper Mekong views",
        description: "Located on the upper Terrace Deck for unobstructed views of the misty Lao mountain ranges. Just steps away from the outdoor observation lounge and Bodhi Spa.",
        features: ["Terrace Deck elevated panoramic position", "Steps away from open-air observation lounge", "Artisanal botanical bath amenities", "French balcony opening to river breezes", "Complimentary laundry service"]
      },
      {
        id: "signature-suite",
        name: "Signature Suite (Champa & Nam Khan)",
        deck: "Main Deck Bow (2 Suites)",
        size: "30 m² (323 sq ft)",
        balconyType: "Private Step-out Bow Veranda with sun loungers",
        bedOrientation: "Forward-facing king bed with 180° river views",
        bathroom: "Glass-walled en-suite with in-room scenic Jacuzzi tub facing the river",
        image: "/images/anouvong_signature_suite.jpg",
        imageAlt: "Anouvong Signature Suite with private step-out bow veranda and glass Jacuzzi tub overlooking Upper Mekong",
        description: "The crown jewels of Anouvong. Features a private forward veranda, royal Lao gold-leaf decor, and an in-room glass Jacuzzi tub with 180-degree views of the Upper Mekong wilderness.",
        features: ["Private step-out bow veranda", "In-room scenic Jacuzzi tub with river view", "Royal Lao gold-leaf artwork", "Complimentary sparkling wine & mini-bar", "Private butler service & daily laundry"]
      }
    ],
    dining: {
      title: "De-Dining & Mountain Terrace",
      description: "Savor aromatic Laotian cuisine — fresh river fish with fragrant lemongrass, sticky rice in bamboo baskets, and French colonial-influenced fine dining under the stars.",
      image: "/images/anouvong_deluxe_cabin.jpg",
    },
    gallery: [
      "/images/anouvong.avif",
      "/images/anouvong_signature_suite.jpg",
      "/images/anouvong_deluxe_cabin.jpg",
      "/images/anouvong_deluxe_executive.jpg",
      "/images/anouvong_terrace_deck.jpg",
      "/images/anouvong_signature_suite.jpg"
    ],
  },
  "bassac-pandaw": {
    slug: "bassac-pandaw",
    name: "RV Bassac Pandaw",
    operator: "Pandaw Expeditions",
    operatorNote: "Operated by Pandaw Expeditions. Classic teak river exploration.",
    tagline: "Handcrafted teak, brass fittings, and the pure romance of the river",
    heroImage: "/images/bassac_pandaw_header.webp",
    pricing: {
      threeNight: { from: 1350, route: "Ho Chi Minh City ↔ Phnom Penh" },
      fourNight: { from: 1800, route: "Phnom Penh ↔ Siem Reap" },
      sevenNight: { from: 2950, route: "Ho Chi Minh City ↔ Siem Reap" },
      basis: "Per person, twin-share Standard Stateroom",
      inclusions: "All meals onboard, local transfers, English-speaking guide, entrance fees, crew gratuities.",
      lastVerified: "November 2026",
    },
    stats: {
      length: "54.5m",
      cabins: "28",
      guests: "56",
      crew: "32",
    },
    overview: {
      title: "Pure River Expedition",
      description: "Built to the classic 1947 Irrawaddy Flotilla blueprints, RV Bassac Pandaw is wrapped in rich Burmese teak and polished maritime brass. There are no televisions and no stiff dress codes — only the river, fine dining, and unhurried exploration.",
    },
    design: {
      title: "Promenade Deck Living",
      description: "Pandaw's signature open-plan promenade decks wrap completely around the vessel. French doors open directly onto wide wooden decks where guests can sit outside their stateroom in handcrafted rattan chairs.",
      image: "/images/bassac_pandaw.avif",
    },
    suites: {
      title: "Teak & Brass Staterooms",
      description: "Clad in native teak with traditional brass fittings, comfortable twin or double beds, air conditioning, and en-suite bathrooms with powerful hot-water showers.",
      image: "/images/bassac_pandaw_premium_cabin.webp",
      amenities: ["French doors to promenade deck", "En-suite teak bathroom", "Pandaw eco-flask & kimonos", "Air conditioning", "Nightly turndown service"],
    },
    cabins: [
      {
        id: "premium-bow-stateroom",
        name: "Premium Bow Stateroom",
        deck: "Upper Deck Bow",
        size: "19.2 m² (205 sq ft)",
        balconyType: "French doors opening to covered teak promenade deck with private rattan chairs",
        bedOrientation: "Wraparound panoramic forward & side river views",
        bathroom: "En-suite with maritime brass fixtures and walk-in power shower",
        image: "/images/bassac_pandaw_premium_cabin.webp",
        imageAlt: "RV Bassac Pandaw Premium Bow Stateroom with brass nautical fittings and teak promenade access",
        description: "Positioned at the forward bow of the Upper Deck with wraparound windows. Finished in handcrafted Burmese teak and maritime brass, with French doors stepping directly onto the shaded teak promenade.",
        features: ["Forward bow wraparound panoramic windows", "Direct access to covered teak promenade deck", "Handcrafted teak woodwork throughout", "Colonial maritime brass hardware", "All-inclusive local beer, soft drinks & excursions"]
      },
      {
        id: "standard-stateroom",
        name: "Main & Upper Deck Teak Stateroom",
        deck: "Main Deck & Upper Deck (24 Cabins)",
        size: "16 m² (170 sq ft)",
        balconyType: "Promenade Veranda (direct walk-out access to shaded teak deck)",
        bedOrientation: "Twin or double bed with sliding glass windows",
        bathroom: "En-suite teak bathroom with hot power shower and eco-toiletry kit",
        image: "/images/bassac_pandaw_twin_cabin.webp",
        imageAlt: "RV Bassac Pandaw handcrafted teak twin stateroom with French doors and brass fittings",
        description: "Classic colonial expedition cabin with French doors opening to the 360-degree teak promenade deck. Features individual air conditioning, kimono bathrobes, and Pandaw refillable water flasks.",
        features: ["French doors opening to teak promenade deck", "Dedicated rattan chairs outside your cabin", "Ultra-low 1.5m draft reaching remote canals", "Informal, authentic expedition atmosphere", "Nightly turndown service & briefing"]
      }
    ],
    dining: {
      title: "Al-Fresco Dining on the Upper Deck",
      description: "Bistro-style dining featuring locally sourced river fish, tropical fruits, and Vietnamese-Cambodian curries served on open-air shaded decks.",
      image: "/images/bassac_pandaw_dining.webp",
    },
    gallery: [
      "/images/bassac_pandaw_header.webp",
      "/images/bassac_pandaw_premium_cabin.webp",
      "/images/bassac_pandaw_twin_cabin.webp",
      "/images/bassac_pandaw_dining.webp",
      "/images/bassac_pandaw.avif",
      "/images/mekong_pandaw_header.webp"
    ],
  },
  "viking-saigon": {
    slug: "viking-saigon",
    name: "Viking Saigon",
    operator: "Viking River Cruises",
    operatorNote: "Operated by Viking River Cruises. Purpose-built Scandinavian luxury river cruiser.",
    tagline: "Understated Scandinavian elegance on the storied Mekong",
    heroImage: "/images/viking_saigon_exterior.jpg",
    pricing: {
      threeNight: { from: 1899, route: "Ho Chi Minh City ↔ Phnom Penh" },
      fourNight: { from: 2499, route: "Phnom Penh ↔ Siem Reap" },
      sevenNight: { from: 4299, route: "Ho Chi Minh City ↔ Siem Reap" },
      basis: "Per person, twin-share Veranda Stateroom",
      inclusions: "All meals onboard, beer and wine with lunch and dinner, daily guided shore excursions, free Wi-Fi, port charges.",
      lastVerified: "November 2026",
    },
    stats: {
      length: "79.9m",
      cabins: "40",
      guests: "80",
      crew: "50",
    },
    overview: {
      title: "Nordic Serenity on Tropical Waters",
      description: "Custom-built in 2021, Viking Saigon reflects the clean lines and understated serenity of Scandinavian design. Hosting just 80 guests in all-outside staterooms, the ship offers passenger elevator access across all residential decks and an open-air infinity plunge pool at the stern.",
    },
    design: {
      title: "Clean Scandinavian Architecture",
      description: "Blonde woods, neutral textiles, and expansive floor-to-ceiling glass define every interior space. The ship blends Nordic serenity with local Southeast Asian artisanal crafts.",
      image: "/images/viking_saigon_exterior.jpg",
    },
    suites: {
      title: "All-Outside Staterooms & Suites",
      description: "All 40 staterooms feature hotel-style beds, private verandas or French balconies, and heated bathroom floors — an exclusive Viking amenity on the Mekong.",
      image: "/images/viking_saigon_veranda_stateroom.jpg",
      amenities: ["Private step-out veranda", "Heated bathroom floor", "Anti-fog mirror", "Freyja bath amenities", "Passenger elevator access"],
    },
    cabins: [
      {
        id: "veranda-stateroom",
        name: "Veranda Stateroom (Cat A)",
        deck: "Upper Deck (14 Staterooms)",
        size: "28.3 m² (305 sq ft)",
        balconyType: "Private Step-out Teak Veranda with armchairs",
        bedOrientation: "Direct River-Facing hotel bed",
        bathroom: "Heated bathroom floors, anti-fog mirror, walk-in glass shower & Freyja amenities",
        image: "/images/viking_saigon_veranda_stateroom.jpg",
        imageAlt: "Viking Saigon Veranda Stateroom with private step-out teak balcony and Scandinavian hotel bed",
        description: "Features a full step-out teak veranda with river views, premium Scandinavian hotel bedding, and Viking's signature heated bathroom floors.",
        features: ["Private step-out veranda with armchairs", "Heated bathroom floors (unique on Mekong)", "Anti-fog mirrors & Freyja amenities", "Elevator access across all three decks", "Direct river-facing king bed"]
      },
      {
        id: "french-balcony",
        name: "French Balcony Stateroom (Cat B & C)",
        deck: "Main & Middle Decks (24 Staterooms)",
        size: "28.3 m² (305 sq ft)",
        balconyType: "Floor-to-ceiling sliding glass doors with French balcony",
        bedOrientation: "River-facing king or twin beds",
        bathroom: "Heated tile bathroom floors, glass shower stall, plush robes",
        image: "/images/viking_saigon_french_balcony.jpg",
        imageAlt: "Viking Saigon French Balcony Stateroom with floor-to-ceiling sliding glass doors",
        description: "Floor-to-ceiling sliding glass doors bring river breezes and views right into your stateroom. Equipped with individual climate control, mini-fridge, and heated bathroom floors.",
        features: ["Floor-to-ceiling sliding glass doors", "Heated bathroom floor & anti-fog mirror", "Individual silent climate control", "Hotel-style bed with luxury linens", "Daily housekeeping & shoe shine"]
      },
      {
        id: "explorer-suite",
        name: "Explorer Suite",
        deck: "Upper Deck (2 Master Suites)",
        size: "50 m² (538 sq ft)",
        balconyType: "Wrap-Around Veranda with private sundeck loungers",
        bedOrientation: "Master bedroom suite with panoramic river view",
        bathroom: "Master bathroom with heated floors, walk-in shower & premium Freyja cosmetics",
        image: "/images/viking_saigon_suite.jpg",
        imageAlt: "Viking Saigon Explorer Suite with wrap-around private veranda and Scandinavian living room",
        description: "Two-room suite with separate living area, expansive wrap-around teak veranda, complimentary laundry, and daily in-room champagne service.",
        features: ["Two-room suite with private parlor", "Expansive wrap-around veranda", "Heated bathroom floor & anti-fog mirror", "Complimentary laundry & minibar replenishment", "Priority excursion reservations"]
      }
    ],
    dining: {
      title: "The Restaurant & Aquavit Terrace",
      description: "Regional Vietnamese-Cambodian dishes and familiar Western classics prepared with fresh ingredients sourced from ports along the river.",
      image: "/images/viking_saigon_render.jpg",
    },
    gallery: [
      "/images/viking_saigon_exterior.jpg",
      "/images/viking_saigon_veranda_stateroom.jpg",
      "/images/viking_saigon_french_balcony.jpg",
      "/images/viking_saigon_suite.jpg",
      "/images/viking_saigon_render.jpg"
    ],
  },
  "emerald-harmony": {
    slug: "emerald-harmony",
    name: "Emerald Harmony",
    operator: "Emerald Cruises",
    operatorNote: "Operated by Emerald Cruises. Modern river cruiser docking in central Ho Chi Minh City.",
    tagline: "Purpose-built modern luxury that sails straight into central Saigon",
    heroImage: "/images/emerald_harmony_exterior.jpg",
    pricing: {
      threeNight: { from: 1450, route: "Ho Chi Minh City ↔ Phnom Penh" },
      fourNight: { from: 1950, route: "Phnom Penh ↔ Siem Reap" },
      sevenNight: { from: 3450, route: "Ho Chi Minh City ↔ Siem Reap" },
      basis: "Per person, twin-share Panorama Balcony Suite",
      inclusions: "All meals onboard, complimentary wine and beer with lunch and dinner, guided daily excursions, airport transfers, tipping.",
      lastVerified: "November 2026",
    },
    stats: {
      length: "73m",
      cabins: "42",
      guests: "84",
      crew: "40",
    },
    overview: {
      title: "Urban Arrival & Modern Comfort",
      description: "Unlike most larger Mekong vessels that must dock 1.5 to 2 hours south in Mỹ Tho, Emerald Harmony was custom engineered with low air draft to sail directly up the Saigon River to dock at central Saigon (District 4 / Nhà Rồng).",
    },
    design: {
      title: "Low-Profile Engineering & Open Sun Decks",
      description: "Sleek contemporary design featuring an aft pool on the Sun Deck, Lotus Lounge, and a wellness center with spa facilities.",
      image: "/images/emerald_harmony_exterior.jpg",
    },
    suites: {
      title: "All-Balcony Living",
      description: "Featuring Emerald's innovative all-weather balcony system with drop-down glass windows, premium ESPA toiletries, and hotel bedding.",
      image: "/images/emerald_harmony_panorama_suite.jpg",
      amenities: ["Electronic drop-down balcony window", "ESPA bath products", "Infotainment system", "Individual climate control", "Aft swimming pool access"],
    },
    cabins: [
      {
        id: "panorama-balcony-suite",
        name: "Panorama Balcony Suite",
        deck: "Vista & Horizon Decks (32 Suites)",
        size: "25.4 m² (273 sq ft)",
        balconyType: "Electronic push-button drop-down balcony window",
        bedOrientation: "Direct River-Facing hotel bed",
        bathroom: "Walk-in glass shower, luxury ESPA amenities, plush bathrobes",
        image: "/images/emerald_harmony_panorama_suite.jpg",
        imageAlt: "Emerald Harmony Panorama Balcony Suite with electronic drop-down balcony window and river views",
        description: "Features Emerald's signature drop-down glass window that converts your seating area into an open-air riverfront balcony at the press of a button.",
        features: ["Push-button drop-down balcony window", "ESPA luxury bath amenities", "Direct river-facing hotel bed", "Complimentary Wi-Fi & minibar", "Infotainment system with movies"]
      },
      {
        id: "grand-balcony-suite",
        name: "Grand Balcony Suite",
        deck: "Horizon Deck (4 Suites)",
        size: "37 m² (398 sq ft)",
        balconyType: "Wrap-around outdoor teak veranda & interior drop-down balcony",
        bedOrientation: "King hotel bed with sweeping river views",
        bathroom: "Spacious bathroom with walk-in shower & premium ESPA cosmetics",
        image: "/images/emerald_harmony_grand_suite.jpg",
        imageAlt: "Emerald Harmony Grand Balcony Suite with wrap-around outdoor veranda and separate sitting area",
        description: "The most prestigious suite on Emerald Harmony, featuring a separate bedroom, spacious lounge area, private wrap-around veranda, and complimentary daily laundry service.",
        features: ["Spacious 37 m² layout with separate living area", "Private wrap-around outdoor veranda", "Complimentary daily laundry service", "Continental breakfast served in suite", "Welcome bottle of champagne"]
      }
    ],
    dining: {
      title: "Reflections Restaurant",
      description: "Enjoy chef-crafted Asian and European menus paired with complimentary wines, followed by cocktails in the Horizon Bar & Lounge.",
      image: "/images/emerald_harmony_exterior.jpg",
    },
    gallery: [
      "/images/emerald_harmony_exterior.jpg",
      "/images/emerald_harmony_panorama_suite.jpg",
      "/images/emerald_harmony_grand_suite.jpg"
    ],
  },
  "amadara": {
    slug: "amadara",
    name: "AmaDara",
    operator: "AmaWaterways",
    operatorNote: "Operated by AmaWaterways. Renowned for culinary excellence and Twin Balcony staterooms.",
    tagline: "French colonial grace with AmaWaterways' signature Twin Balconies",
    heroImage: "/images/amadara_exterior.jpg",
    pricing: {
      threeNight: { from: 1699, route: "Ho Chi Minh City ↔ Phnom Penh" },
      fourNight: { from: 2299, route: "Phnom Penh ↔ Siem Reap" },
      sevenNight: { from: 3999, route: "Ho Chi Minh City ↔ Siem Reap" },
      basis: "Per person, twin-share Twin Balcony Stateroom",
      inclusions: "All meals onboard, complimentary wine, beer and soft drinks with lunch/dinner, daily excursions, Wi-Fi.",
      lastVerified: "November 2026",
    },
    stats: {
      length: "92m",
      cabins: "62",
      guests: "124",
      crew: "52",
    },
    overview: {
      title: "French Colonial Charm on the Grand Mekong",
      description: "Custom-built in Vietnam in 2015, AmaDara marries French colonial elegance with rich wood carvings and woven textiles. Featuring AmaWaterways' signature Twin Balconies — both a French balcony and an outside step-out balcony in every stateroom.",
    },
    design: {
      title: "Twin-Balcony Innovation & Carved Woods",
      description: "Spacious staterooms adorned with authentic local wood crafts, a Sun Deck pool with bar, fitness room, and two distinct dining venues.",
      image: "/images/amadara_exterior.jpg",
    },
    suites: {
      title: "Signature Twin Balcony Accommodations",
      description: "Enjoy fresh river air on your private step-out balcony while keeping a climate-controlled French balcony sitting nook inside.",
      image: "/images/amadara_twin_balcony_stateroom.jpg",
      amenities: ["Signature Twin Balconies", "Multi-jet massage shower", "Complimentary Wi-Fi", "Individually controlled A/C", "Bathrobes & slippers"],
    },
    cabins: [
      {
        id: "twin-balcony-stateroom",
        name: "Twin Balcony Stateroom (Cat A & B)",
        deck: "Saigon & Tonle Decks (56 Cabins)",
        size: "23.3 m² (251 sq ft)",
        balconyType: "Signature Twin Balcony (French Balcony + Outside Step-out Balcony)",
        bedOrientation: "River-facing hotel bed",
        bathroom: "Spacious bathroom with multi-jet shower & premium bath products",
        image: "/images/amadara_twin_balcony_stateroom.jpg",
        imageAlt: "AmaDara Twin Balcony Stateroom with French balcony and private outside veranda",
        description: "Features AmaWaterways' trademark Twin Balcony design with both a French balcony and a private step-out balcony offering unhindered Mekong views.",
        features: ["Signature Twin Balconies (French + Step-out)", "Multi-jet shower massage system", "Complimentary Wi-Fi & movie infotainment", "Individually controlled air conditioning", "Robes & slippers provided"]
      },
      {
        id: "luxury-suite",
        name: "Luxury Suite",
        deck: "Saigon Deck (2 Master Suites)",
        size: "46.6 m² (502 sq ft)",
        balconyType: "Extended Private Veranda & French Balcony",
        bedOrientation: "King master bedroom with French balcony river views",
        bathroom: "Full bath with whirlpool bathtub, separate shower & double sinks",
        image: "/images/amadara_suite_living.jpg",
        imageAlt: "AmaDara Luxury Suite with spacious parlor living room and French colonial woodwork",
        description: "The grandest suite aboard AmaDara. Offers a separate living room parlor, whirlpool bath, extended private step-out veranda, and complimentary daily laundry.",
        features: ["Spacious 46.6 m² layout with living room", "Whirlpool tub & separate multi-jet shower", "Extended private step-out veranda", "Complimentary laundry & butler attention", "French colonial artisanal carved woodwork"]
      }
    ],
    dining: {
      title: "The Main Restaurant & The Chef's Table",
      description: "Fine dining featuring regional Vietnamese and Cambodian specialties alongside classic Western menus, with complimentary free-flowing regional wines.",
      image: "/images/amadara_fusion_restaurant.jpg",
    },
    gallery: [
      "/images/amadara_exterior.jpg",
      "/images/amadara_twin_balcony_stateroom.jpg",
      "/images/amadara_suite_living.jpg",
      "/images/amadara_fusion_restaurant.jpg",
      "/images/amadara_saigon_lounge.jpg"
    ],
  },
  "avalon-saigon": {
    slug: "avalon-saigon",
    name: "Avalon Saigon",
    operator: "Avalon Waterways",
    operatorNote: "Operated by Avalon Waterways. Featuring Suite Ship design with beds facing the river view.",
    tagline: "Signature Open-Air Balconies with wall-to-wall river views",
    heroImage: "/images/avalon_saigon_exterior.jpg",
    pricing: {
      threeNight: { from: 1750, route: "Ho Chi Minh City ↔ Phnom Penh" },
      fourNight: { from: 2350, route: "Phnom Penh ↔ Siem Reap" },
      sevenNight: { from: 4100, route: "Ho Chi Minh City ↔ Siem Reap" },
      basis: "Per person, twin-share Panorama Suite",
      inclusions: "All meals onboard, regional wines and beers with meals, certified Avalon local guides, all shore excursions.",
      lastVerified: "November 2026",
    },
    stats: {
      length: "53m",
      cabins: "18",
      guests: "36",
      crew: "24",
    },
    overview: {
      title: "Intimate Suite-Ship Architecture",
      description: "Hosting just 36 guests, Avalon Saigon is an intimate boutique ship designed specifically for the Mekong. Features 14-foot wall-to-wall, floor-to-ceiling panoramic windows that slide open 9 feet to turn your entire suite into an Open-Air Balcony.",
    },
    design: {
      title: "Beds Facing the View & Open-Air Lounging",
      description: "Unlike conventional cruise cabins where beds face interior walls, Avalon's Comfort-Collection beds are oriented 100% outward to watch the river unfold.",
      image: "/images/avalon_saigon_exterior.jpg",
    },
    suites: {
      title: "All-Panorama Suite Comfort",
      description: "245 sq ft of living space with marble bathroom, large glass shower, and motorized wall-to-wall open-air sliding doors.",
      image: "/images/avalon_saigon_panorama_suite.jpg",
      amenities: ["Motorized Open-Air Balcony", "Direct river-facing beds", "Marble bathroom", "L'Occitane bath amenities", "Nightly turndown"],
    },
    cabins: [
      {
        id: "panorama-suite",
        name: "Panorama Suite (Tonle & Mekong Decks)",
        deck: "Tonle (Cat A) & Mekong (Cat B) Decks (18 Suites)",
        size: "22.8 m² (245 sq ft)",
        balconyType: "Avalon Open-Air Balcony (9-foot motorized panoramic opening)",
        bedOrientation: "100% Direct River-Facing bed (Beds Face the View)",
        bathroom: "Full marble bathroom with walk-in shower & L'Occitane toiletries",
        image: "/images/avalon_saigon_panorama_suite.jpg",
        imageAlt: "Avalon Saigon Panorama Suite with direct river-facing beds and wall-to-wall Open-Air Balcony",
        description: "Avalon's revolutionary Suite Ship concept: comfort-collection beds oriented directly towards the river, with giant sliding glass doors creating an open-air pavilion.",
        features: ["Motorized 9-foot wall-to-wall Open-Air Balcony", "Direct river-facing Comfort-Collection beds", "Marble bathroom with premium L'Occitane amenities", "Only 36 guests onboard for ultimate intimacy", "Nightly port lectures & cultural entertainment"]
      },
      {
        id: "comfort-stateroom-bed",
        name: "Comfort Collection Bed & View",
        deck: "Tonle & Mekong Decks",
        size: "Panorama Suite Interior View",
        balconyType: "Direct outward facing panoramic window",
        bedOrientation: "River-facing Comfort Collection bed",
        bathroom: "Adjoining marble en-suite bathroom",
        image: "/images/avalon_saigon_stateroom_bed.jpg",
        imageAlt: "Avalon Saigon Comfort Collection hotel bed oriented towards the panoramic Mekong River",
        description: "Beds face the view: Avalon placed the beds directly facing the 14-foot wall-to-wall windows so you wake up to the river and drifting floating markets every morning.",
        features: ["100% river-facing orientation", "Egyptian super-combed cotton linens", "Choice of firm or soft pillows", "Individual bedside USB charging", "Writing desk & reading lighting"]
      },
      {
        id: "marble-ensuite-bathroom",
        name: "Designer Marble En-Suite Bathroom",
        deck: "All Panorama Suites",
        size: "Full Marble Stateroom Bathroom",
        balconyType: "Contemporary glass-enclosed bathroom",
        bedOrientation: "En-suite bathroom layout",
        bathroom: "Spacious glass-door shower with overhead rain showerhead and L'Occitane bath essentials",
        image: "/images/avalon_saigon_bathroom.jpg",
        imageAlt: "Avalon Saigon full marble bathroom with glass-enclosed shower and premium L'Occitane amenities",
        description: "Contemporary styling with polished marble tiles, premium vanity mirrors, spacious walk-in shower stall, and luxury French L'Occitane en Provence soaps and lotions.",
        features: ["Polished marble surfaces", "Large glass-door shower stall", "L'Occitane en Provence amenities", "Plush bathrobes and extra-thick towels", "Heated mirror & hairdryer"]
      }
    ],
    dining: {
      title: "Panoramic Dining Room & Panorama Lounge",
      description: "Fresh local ingredients prepared by executive chefs, paired with complimentary wines, beer, and soft drinks with lunch and dinner.",
      image: "/images/avalon_saigon_panorama_suite.jpg",
    },
    gallery: [
      "/images/avalon_saigon_exterior.jpg",
      "/images/avalon_saigon_panorama_suite.jpg",
      "/images/avalon_saigon_stateroom_bed.jpg",
      "/images/avalon_saigon_bathroom.jpg"
    ],
  },
  "mekong-navigator": {
    slug: "mekong-navigator",
    name: "Mekong Navigator",
    operator: "Lotus Cruises",
    operatorNote: "Operated by Lotus Cruises. French colonial grandeur inspired by Old Saigon aristocrats.",
    tagline: "Timeless French Indochine grandeur with boutique all-suite service",
    heroImage: "/images/mekong_navigator_exterior.jpg",
    pricing: {
      threeNight: { from: 1550, route: "Ho Chi Minh City ↔ Phnom Penh" },
      fourNight: { from: 2050, route: "Phnom Penh ↔ Siem Reap" },
      sevenNight: { from: 3600, route: "Ho Chi Minh City ↔ Siem Reap" },
      basis: "Per person, twin-share Superior / Vista Suite",
      inclusions: "All meals onboard, regional beer and house spirits, daily guided excursions, passenger elevator access.",
      lastVerified: "November 2026",
    },
    stats: {
      length: "70m",
      cabins: "34",
      guests: "68",
      crew: "42",
    },
    overview: {
      title: "Old Saigon Nobility on the Water",
      description: "Evoking the romance of 1930s French Indochina with rich mahogany wood, French balconies, clawfoot soaking tubs in Grand Suites, and an internal passenger elevator connecting cabin decks.",
    },
    design: {
      title: "Colonial Manor Architecture & Passenger Lift",
      description: "Atmospheric interior salons, Le Salon lounge, La Vie spa, and an onboard passenger elevator serving residential decks.",
      image: "/images/mekong_navigator_exterior.jpg",
    },
    suites: {
      title: "Grand & Prestige Suites",
      description: "Opulent suites with French double doors, individual climate control, and dedicated butler attention in premium categories.",
      image: "/images/mekong_navigator_prestige_suite.jpg",
      amenities: ["French balcony", "Passenger elevator access", "En-suite marble bathroom", "Butler service (select suites)", "Pillow menu"],
    },
    cabins: [
      {
        id: "prestige-suite",
        name: "Prestige Suite",
        deck: "Lotus Deck (16 Suites)",
        size: "36 m² (387 sq ft)",
        balconyType: "French Balcony with double opening doors",
        bedOrientation: "Boutique Indochine queen/twin beds facing river",
        bathroom: "Custom marble bathroom with clawfoot tub & separate walk-in shower",
        image: "/images/mekong_navigator_prestige_suite.jpg",
        imageAlt: "Mekong Navigator Prestige Suite with French colonial mahogany furnishings and French balcony",
        description: "Handcrafted Indochine furnishings, French double doors opening to river panoramas, clawfoot soaking tub, and personalized white-glove service.",
        features: ["French balcony with river views", "Clawfoot soaking tub & walk-in shower", "Internal passenger elevator between residential decks", "Butler service & daily laundry", "Fine dining at Le Marché restaurant"]
      },
      {
        id: "signature-suite",
        name: "Signature Suite",
        deck: "Orchid Deck (14 Suites)",
        size: "27 m² (291 sq ft)",
        balconyType: "French Balcony with panoramic glass doors",
        bedOrientation: "Colonial wood bed facing river breeze",
        bathroom: "Polished marble bathroom with rainfall shower",
        image: "/images/mekong_navigator_signature_suite.jpg",
        imageAlt: "Mekong Navigator Signature Suite with French balcony and colonial decor",
        description: "Spacious colonial sanctuary with floor-to-ceiling French windows, antique French Indochina artwork, and elevator access.",
        features: ["Floor-to-ceiling French balcony", "Polished marble rainfall shower", "Elevator access across decks", "Individually controlled climate", "Complimentary daily laundry"]
      },
      {
        id: "grande-suite",
        name: "Grande Suite (Upper Deck Bow)",
        deck: "Orchid Deck Bow (2 Grand Suites)",
        size: "54 m² (581 sq ft)",
        balconyType: "Monumental Private Veranda with sun loungers",
        bedOrientation: "King master bedroom with forward-facing river panorama",
        bathroom: "Palatial marble bath with clawfoot bathtub and separate shower",
        image: "/images/mekong_navigator_grand_suite.jpg",
        imageAlt: "Mekong Navigator Grande Suite with expansive private veranda and forward river views",
        description: "The premier stateroom aboard Mekong Navigator. Features a separate sitting parlor, extended private step-out veranda, in-suite dining, and 24-hour butler service.",
        features: ["54 m² layout with separate parlor", "Expansive private step-out veranda", "Clawfoot soaking tub overlooking the river", "Dedicated 24-hour butler service", "Complimentary sparkling wine & minibar"]
      }
    ],
    dining: {
      title: "Le Marché Restaurant",
      description: "Fine dining featuring multi-course French-Indochinese culinary creations alongside Western standards, paired with regional beverages.",
      image: "/images/mekong_navigator_prestige_suite.jpg",
    },
    gallery: [
      "/images/mekong_navigator_exterior.jpg",
      "/images/mekong_navigator_prestige_suite.jpg",
      "/images/mekong_navigator_signature_suite.jpg",
      "/images/mekong_navigator_grand_suite.jpg",
      "/images/mekong_navigator_profile.jpg"
    ],
  },
  "toum-tiou-ii": {
    slug: "toum-tiou-ii",
    name: "RV Toum Tiou II",
    operator: "CF Mekong / CroisiEurope",
    operatorNote: "Operated by CF Mekong & CroisiEurope. Shallow-draft pioneer navigating direct to Siem Reap.",
    tagline: "Authentic teak charm and shallow draft reaching remote waterways",
    heroImage: "/images/toum_tiou_ii_exterior.jpg",
    pricing: {
      threeNight: { from: 890, route: "Ho Chi Minh City ↔ Phnom Penh" },
      fourNight: { from: 1190, route: "Phnom Penh ↔ Siem Reap" },
      sevenNight: { from: 1990, route: "Ho Chi Minh City ↔ Siem Reap" },
      basis: "Per person, twin-share Main/Upper Deck Cabin",
      inclusions: "All meals onboard, guided excursions with local experts, entrance fees, authentic small-group touring.",
      lastVerified: "November 2026",
    },
    stats: {
      length: "38m",
      cabins: "14",
      guests: "28",
      crew: "18",
    },
    overview: {
      title: "Boutique Riverboat Pioneer",
      description: "Crafted from noble tropical woods, RV Toum Tiou II is a low-draft boutique vessel capable of crossing Tonle Sap lake directly into Siem Reap harbor during high-water season, avoiding long coach transfers.",
    },
    design: {
      title: "Noble Wood Craft & Shallow Draft",
      description: "Traditional riverboat aesthetic with teak decks, open-air observation lounge, and friendly, personalized crew hospitality.",
      image: "/images/toum_tiou_ii_exterior.jpg",
    },
    suites: {
      title: "Authentic Teak Wood Cabins",
      description: "14 cozy cabins paneled in exotic hardwoods, with large opening picture windows and en-suite private bathrooms.",
      image: "/images/toum_tiou_ii_cabin.jpg",
      amenities: ["En-suite bathroom with shower", "Individual climate control", "Panoramic river window", "Direct promenade deck access"],
    },
    cabins: [
      {
        id: "upper-deck-cabin",
        name: "Upper Deck Boutique Cabin",
        deck: "Upper Deck (6 Cabins) & Main Deck (8 Cabins)",
        size: "11 m² - 12 m² (120 - 130 sq ft)",
        balconyType: "Panoramic River Windows / Teak Promenade Access",
        bedOrientation: "Twin or double bed with riverside window",
        bathroom: "Private en-suite bathroom with shower and amenities",
        image: "/images/toum_tiou_ii_cabin.jpg",
        imageAlt: "RV Toum Tiou II wood-paneled cabin with picture window overlooking the Mekong",
        description: "Cozy, authentic wood-paneled cabin with polished teak walls, large riverview picture windows, and air conditioning.",
        features: ["Direct access to open teak promenade deck", "Polished natural wood construction", "Shallow draft navigation into remote tributaries", "Individual air conditioning & en-suite shower", "Intimate family-style hospitality for 28 guests"]
      }
    ],
    dining: {
      title: "Panoramic Indoor & Outdoor Restaurant",
      description: "Delicious French-Khmer fusion dishes prepared with market-fresh vegetables and local river fish, served in a relaxed communal setting.",
      image: "/images/toum_tiou_ii_cabin.jpg",
    },
    gallery: [
      "/images/toum_tiou_ii_exterior.jpg",
      "/images/toum_tiou_ii_cabin.jpg",
      "/images/toum_tiou_ii_exterior.jpg",
      "/images/toum_tiou_ii_cabin.jpg"
    ],
  },
  "lan-diep": {
    slug: "lan-diep",
    name: "RV Lan Diep",
    operator: "CF Mekong / CroisiEurope",
    operatorNote: "Operated by CF Mekong & CroisiEurope. Traditional Cambodian river design with wood craftsmanship.",
    tagline: "Traditional Asian craftsmanship with colonial river heritage",
    heroImage: "/images/lan_diep_exterior.jpg",
    pricing: {
      threeNight: { from: 950, route: "Ho Chi Minh City ↔ Phnom Penh" },
      fourNight: { from: 1250, route: "Phnom Penh ↔ Siem Reap" },
      sevenNight: { from: 2100, route: "Ho Chi Minh City ↔ Siem Reap" },
      basis: "Per person, twin-share Main/Upper Deck Cabin",
      inclusions: "All meals onboard, guided excursions, entrance fees, local cultural performances.",
      lastVerified: "November 2026",
    },
    stats: {
      length: "50m",
      cabins: "22",
      guests: "44",
      crew: "22",
    },
    overview: {
      title: "Cambodian Wood Architecture on the Delta",
      description: "Built in 2007 in traditional colonial styling, RV Lan Diep accommodates 44 guests with warm teak and mahogany paneling, open sundecks, and panoramic river cruising.",
    },
    design: {
      title: "Rich Teakwood Heritage & Open Promenade",
      description: "Traditional Southeast Asian riverboat architecture with broad wooden sun decks, bar lounge, and shaded wicker loungers.",
      image: "/images/lan_diep_exterior.jpg",
    },
    suites: {
      title: "Warm Wood River Staterooms",
      description: "All 22 outside cabins feature authentic handcrafted woods, brass nautical fixtures, individual A/C, and en-suite bathrooms.",
      image: "/images/lan_diep_cabin.jpg",
      amenities: ["En-suite bathroom with hot shower", "Opening picture windows", "Air conditioning", "Safe & wardrobe"],
    },
    cabins: [
      {
        id: "colonial-river-cabin",
        name: "Colonial Riverview Cabin",
        deck: "Upper & Main Decks (22 Cabins)",
        size: "15 m² (161 sq ft)",
        balconyType: "Panoramic Riverview Windows & Teak Walkway",
        bedOrientation: "Handcrafted wooden beds facing riverside",
        bathroom: "Private en-suite bathroom with hot shower",
        image: "/images/lan_diep_cabin.jpg",
        imageAlt: "RV Lan Diep handcrafted colonial cabin with polished wood finishes and large windows",
        description: "Richly grained wood paneling, brass fittings, and panoramic windows opening to the Mekong delta scenery.",
        features: ["Authentic colonial wood aesthetic", "Large opening picture windows", "Open-air panoramic dining and lounge", "Traditional riverboat navigation into narrow canals", "En-suite bathroom with hot water & toiletries"]
      }
    ],
    dining: {
      title: "Colonial Dining Hall & River Bar",
      description: "Family-style French and Indochinese meals served with warmth and genuine Cambodian hospitality.",
      image: "/images/lan_diep_cabin.jpg",
    },
    gallery: [
      "/images/lan_diep_exterior.jpg",
      "/images/lan_diep_cabin.jpg",
      "/images/lan_diep_exterior.jpg",
      "/images/lan_diep_cabin.jpg"
    ],
  },
  "boheme": {
    slug: "boheme",
    name: "Bohème",
    operator: "Mekong Kingdoms",
    operatorNote: "Operated by Mekong Kingdoms (Minor Hotels). Ultra-luxury bespoke boutique cruiser on the Upper Mekong in Laos.",
    tagline: "Pure bespoke luxury gliding through the mountain gorges of Laos",
    heroImage: "/images/boheme_drone_exterior.jpg",
    pricing: {
      threeNight: { from: 1950, route: "Luang Prabang ↔ Chiang Khong" },
      fourNight: { from: 2600, route: "Luang Prabang ↔ Vientiane" },
      sevenNight: { from: 4800, route: "Chiang Khong ↔ Vientiane (Golden Triangle to Capital)" },
      basis: "Per person, twin-share Deluxe Suite",
      inclusions: "All gourmet onboard dining, guided shore excursions, premium wines & house spirits, private transfers.",
      lastVerified: "November 2026",
    },
    stats: {
      length: "42m",
      cabins: "13",
      guests: "26",
      crew: "24",
    },
    overview: {
      title: "Bohemian Elegance on the Wild Mekong",
      description: "With only 13 bespoke suites accommodating 26 discerning travelers, Bohème delivers private yacht-style exploration through northern Laos's dramatic limestone gorges and sacred riverside caves.",
    },
    design: {
      title: "Quiet Luxury & Natural Teak Craftsmanship",
      description: "Rich blonde wood parquet, custom Laotian silk Ikat throws, floor-to-ceiling panoramic sliding doors, and open-air riverside observation salons designed by Minor Hotels.",
      image: "/images/boheme_drone_exterior.jpg",
    },
    suites: {
      title: "Bespoke Suites with Private Balconies",
      description: "Every suite aboard Bohème features direct river-facing beds, expansive private balconies with daybeds, and en-suite bathrooms equipped with rain showers or freestanding soaking tubs.",
      image: "/images/boheme_bedroom_suite.jpg",
      amenities: ["Private step-out balcony with daybed", "Direct river-facing king bed", "Rain shower & luxury toiletries", "Nespresso machine & high-end sound system", "Complimentary laundry & butler attention"],
    },
    cabins: [
      {
        id: "deluxe-suite",
        name: "Deluxe Suite (Private Balcony)",
        deck: "Lower & Main Decks (10 Suites)",
        size: "30 m² (323 sq ft)",
        balconyType: "Private Step-out Teak Balcony with exterior daybed",
        bedOrientation: "100% Direct River-Facing king bed",
        bathroom: "Designer en-suite with walk-in glass rain shower and luxury amenities",
        image: "/images/boheme_bedroom_suite.jpg",
        imageAlt: "Bohème Deluxe Suite with private outdoor balcony daybed and river-facing king bed",
        description: "Thirty square meters of bohemian sophistication. Features warm teak floors, floor-to-ceiling glass sliding doors opening to a private wooden balcony with an exterior daybed directly overlooking the waters of Laos.",
        features: ["Private step-out balcony with daybed", "100% direct river-facing bed", "Walk-in glass rain shower", "Nespresso coffee machine & premium minibar", "Daily fresh tropical fruits & evening turndown"]
      },
      {
        id: "royal-suite",
        name: "Royal Suite",
        deck: "Upper Deck Bow (2 Grand Suites)",
        size: "60 m² (646 sq ft)",
        balconyType: "Expansive Forward Veranda with panoramic daybed",
        bedOrientation: "King master bedroom with 180° forward river views",
        bathroom: "Freestanding luxury bathtub positioned next to window with scenic river panorama",
        image: "/images/boheme_bedroom_suite.jpg",
        imageAlt: "Bohème Royal Suite with expansive private terrace and freestanding window bathtub",
        description: "The pinnacle of Upper Mekong luxury. Boasts an expansive forward veranda, freestanding soaking bathtub framed by scenic river windows, separate sitting lounge, and dedicated private butler service.",
        features: ["60 m² grand suite with forward terrace", "Freestanding window soaking bathtub", "Dedicated private butler service", "Complimentary laundry & unlimited minibar", "Priority private shore excursions"]
      }
    ],
    dining: {
      title: "Artisan Dining Salon & River Lounge Bar",
      description: "Gourmet French-Lao fusion dining crafted from regional organic farm produce, enjoyed in the open-air dining pavilion or riverside bar salon.",
      image: "/images/boheme_dining_area.jpg",
    },
    gallery: [
      "/images/boheme_drone_exterior.jpg",
      "/images/boheme_bedroom_suite.jpg",
      "/images/boheme_dining_area.jpg"
    ],
  },
  "mekong-pearl": {
    slug: "mekong-pearl",
    name: "Mekong Pearl",
    operator: "Lernidee Erlebnisreisen",
    operatorNote: "Operated by Lernidee Erlebnisreisen. German-engineered boutique expedition vessel on the Upper Mekong in Laos.",
    tagline: "Boutique luxury cruising the untamed waters of northern Laos",
    heroImage: "/images/mekong_pearl_exterior.jpg",
    pricing: {
      threeNight: { from: 1650, route: "Huay Xai ↔ Luang Prabang" },
      fourNight: { from: 2150, route: "Luang Prabang ↔ Vientiane" },
      sevenNight: { from: 3850, route: "Golden Triangle ↔ Vientiane (Laos Explorer)" },
      basis: "Per person, twin-share Superior Cabin",
      inclusions: "All meals onboard, expert German/English-speaking tour director, shore excursions, entrance fees.",
      lastVerified: "November 2026",
    },
    stats: {
      length: "44m",
      cabins: "15",
      guests: "29",
      crew: "18",
    },
    overview: {
      title: "German Engineering Meets Laotian Charm",
      description: "Custom-built in 2017 to navigate the Upper Mekong's challenging granite rapids and wild river landscapes between the Golden Triangle and Vientiane with shallow draft and exceptional stability.",
    },
    design: {
      title: "Noble Teak Wood & Modern Comfort",
      description: "Classic riverboat design incorporating rich teak and rosewood paneling, open observation deck, spa treatment room, and panoramic indoor/outdoor dining lounge.",
      image: "/images/mekong_pearl_exterior.jpg",
    },
    suites: {
      title: "Boutique Teak Cabins with River Views",
      description: "All 15 cabins feature outside river views, authentic teak and rosewood interior woodwork, individual silent air conditioning, and en-suite private bathrooms.",
      image: "/images/mekong_pearl_deluxe_cabin.jpg",
      amenities: ["Private balcony (Deluxe)", "French balcony (Superior)", "En-suite bathroom with shower", "Individual climate control", "Safe & wardrobe"],
    },
    cabins: [
      {
        id: "deluxe-balcony-cabin",
        name: "Deluxe Cabin with Private Balcony",
        deck: "Upper Deck (2 Cabins)",
        size: "20 m² (215 sq ft)",
        balconyType: "Private Step-out Teak Balcony",
        bedOrientation: "Direct River-Facing twin or double bed",
        bathroom: "Private en-suite bathroom with walk-in shower",
        image: "/images/mekong_pearl_deluxe_cabin.jpg",
        imageAlt: "Mekong Pearl Deluxe Cabin with private step-out teak balcony overlooking northern Laos",
        description: "The two premier cabins on the Upper Deck feature private step-out teak balconies, panoramic windows, and fine Laotian silk accents.",
        features: ["Private step-out teak balcony", "Elevated Upper Deck panorama", "En-suite bathroom with shower", "Individual silent air conditioning", "Minibar & safe"]
      },
      {
        id: "superior-cabin",
        name: "Superior Cabin (French Balcony)",
        deck: "Main & Upper Deck (13 Cabins)",
        size: "16 m² (172 sq ft)",
        balconyType: "French Balcony with panoramic opening windows",
        bedOrientation: "Riverside twin or double bed",
        bathroom: "Private en-suite bathroom with hot shower",
        image: "/images/mekong_pearl_superior_cabin.jpg",
        imageAlt: "Mekong Pearl Superior Cabin with authentic teak paneling and panoramic opening window",
        description: "Finished in warm native teak with French balcony opening windows bringing the crisp morning air of the Lao highlands directly into your stateroom.",
        features: ["French balcony opening windows", "Warm teakwood craftsmanship", "En-suite bathroom with hot shower", "Quiet boutique atmosphere", "Daily bottled drinking water"]
      }
    ],
    dining: {
      title: "Panoramic Restaurant & Sun Deck Bar",
      description: "Authentic Laotian specialties, French culinary touches, and Western dishes prepared with fresh ingredients and served in a relaxed, convivial setting.",
      image: "/images/mekong_pearl_deluxe_cabin.jpg",
    },
    gallery: [
      "/images/mekong_pearl_exterior.jpg",
      "/images/mekong_pearl_deluxe_cabin.jpg",
      "/images/mekong_pearl_superior_cabin.jpg"
    ],
  },
  "mekong-sun": {
    slug: "mekong-sun",
    name: "Mekong Sun",
    operator: "Lernidee Erlebnisreisen",
    operatorNote: "Operated by Lernidee Erlebnisreisen. The legendary pioneer boutique river cruiser of northern Laos.",
    tagline: "The iconic boutique riverboat of the Upper Mekong in Laos",
    heroImage: "/images/mekong_sun_superior_cabin.jpg",
    pricing: {
      threeNight: { from: 1550, route: "Huay Xai ↔ Luang Prabang" },
      fourNight: { from: 2050, route: "Luang Prabang ↔ Vientiane" },
      sevenNight: { from: 3650, route: "Golden Triangle ↔ Vientiane" },
      basis: "Per person, twin-share Classic Cabin",
      inclusions: "All meals onboard, English/German-speaking cruise director, guided daily shore excursions, port charges.",
      lastVerified: "November 2026",
    },
    stats: {
      length: "40m",
      cabins: "14",
      guests: "28",
      crew: "16",
    },
    overview: {
      title: "The Pioneer of Upper Mekong Exploration",
      description: "Launched in 2006 as the very first boutique river vessel built to navigate the wild upper reaches of the Mekong in Laos. Mekong Sun combines classic colonial charm with intimate 14-cabin exclusivity.",
    },
    design: {
      title: "Authentic Teak Cruiser Architecture",
      description: "Two-deck timber construction featuring a shaded sun deck, panoramic restaurant salon, open-air bar, and authentic handcrafted teakwood throughout.",
      image: "/images/mekong_sun_deckplan.png",
    },
    suites: {
      title: "Classic & Superior Teak Cabins",
      description: "14 outside-facing staterooms with polished hardwood walls, individual air conditioning, and private en-suite bathrooms with hot water showers.",
      image: "/images/mekong_sun_superior_cabin.jpg",
      amenities: ["Private balcony (Superior)", "Opening French window (Classic)", "En-suite bathroom with shower", "Individual climate control", "Daily housekeeping"],
    },
    cabins: [
      {
        id: "superior-balcony-cabin",
        name: "Superior Cabin with Private Balcony",
        deck: "Upper Deck (3 Cabins)",
        size: "18 m² (194 sq ft)",
        balconyType: "Private Step-out Teak Balcony",
        bedOrientation: "Direct River-Facing double or twin bed",
        bathroom: "Private en-suite bathroom with shower and amenities",
        image: "/images/mekong_sun_superior_cabin.jpg",
        imageAlt: "Mekong Sun Superior Cabin with private step-out teak balcony overlooking Lao riverbanks",
        description: "Situated on the Upper Deck with a private step-out wooden balcony, floor-to-ceiling glass doors, and warm teakwood wainscoting.",
        features: ["Private step-out teak balcony", "Floor-to-ceiling glass doors", "En-suite bathroom with hot shower", "Upper deck elevated views", "Individual climate control"]
      },
      {
        id: "classic-cabin",
        name: "Classic Riverview Cabin",
        deck: "Main Deck (11 Cabins)",
        size: "14 m² (151 sq ft)",
        balconyType: "Panoramic French Window",
        bedOrientation: "Riverside twin or double bed",
        bathroom: "Private en-suite bathroom with shower",
        image: "/images/mekong_sun_classic_cabin.jpg",
        imageAlt: "Mekong Sun Classic Cabin with opening French window and authentic teakwood paneling",
        description: "Cozy and authentic, featuring large opening French windows that bring river breezes and views of misty Laotian hills into your stateroom.",
        features: ["Opening French windows", "Handcrafted teakwood finishes", "En-suite bathroom with shower", "Individual air conditioning", "Daily bottled drinking water"]
      }
    ],
    dining: {
      title: "Riverside Dining Salon",
      description: "Flavorful Lao, Thai, and European meals served in the panoramic indoor restaurant or on the open-air covered sun deck.",
      image: "/images/mekong_sun_superior_cabin.jpg",
    },
    gallery: [
      "/images/mekong_sun_superior_cabin.jpg",
      "/images/mekong_sun_classic_cabin.jpg",
      "/images/mekong_sun_deckplan.png"
    ],
  },
  "mekong-pandaw": {
    slug: "mekong-pandaw",
    name: "RV Mekong Pandaw",
    operator: "Pandaw Expeditions",
    operatorNote: "Operated by Pandaw Expeditions. Traditional teak river vessel with 360-degree promenade decks.",
    tagline: "Classic colonial river expeditions on the waterways of Indochina",
    heroImage: "/images/mekong_pandaw_header.webp",
    pricing: {
      threeNight: { from: 1350, route: "Ho Chi Minh City ↔ Phnom Penh" },
      fourNight: { from: 1800, route: "Phnom Penh ↔ Siem Reap" },
      sevenNight: { from: 2950, route: "Ho Chi Minh City ↔ Siem Reap" },
      basis: "Per person, twin-share Upper/Main Deck Stateroom",
      inclusions: "All meals onboard, local transfers, English-speaking guide, entrance fees, crew gratuities.",
      lastVerified: "November 2026",
    },
    stats: {
      length: "60m",
      cabins: "24",
      guests: "48",
      crew: "28",
    },
    overview: {
      title: "The Spirit of Irrawaddy Flotilla on the Mekong",
      description: "Finished with hand-rubbed native teak, maritime brass, and open promenade decks, RV Mekong Pandaw offers an authentic river expedition experience with ultra-shallow draft navigation.",
    },
    design: {
      title: "Promenade Deck Living",
      description: "Signature wraparound teak decks where French doors open directly to private rattan chairs outside your cabin.",
      image: "/images/mekong_pandaw_header.webp",
    },
    suites: {
      title: "Handcrafted Teak Staterooms",
      description: "Clad in native teak with traditional brass hardware, individual climate control, and en-suite private bathrooms with hot power showers.",
      image: "/images/bassac_pandaw_twin_cabin.webp",
      amenities: ["French doors to promenade deck", "En-suite teak bathroom", "Pandaw eco-flask & kimonos", "Air conditioning", "Nightly turndown service"],
    },
    cabins: [
      {
        id: "twin-stateroom",
        name: "Main & Upper Deck Teak Stateroom",
        deck: "Main Deck & Upper Deck (24 Cabins)",
        size: "16 m² (170 sq ft)",
        balconyType: "Promenade Veranda (direct walk-out access to shaded teak deck)",
        bedOrientation: "Twin or double bed with sliding glass windows",
        bathroom: "En-suite teak bathroom with hot power shower and eco-toiletry kit",
        image: "/images/bassac_pandaw_twin_cabin.webp",
        imageAlt: "RV Mekong Pandaw handcrafted teak twin stateroom with French doors and brass fittings",
        description: "Classic colonial expedition cabin with French doors opening to the 360-degree teak promenade deck. Features individual air conditioning, kimono bathrobes, and Pandaw refillable water flasks.",
        features: ["French doors opening to teak promenade deck", "Dedicated rattan chairs outside your cabin", "Ultra-low draft reaching remote canals", "Informal, authentic expedition atmosphere", "Nightly turndown service & briefing"]
      },
      {
        id: "premium-bow-cabin",
        name: "Premium Bow Stateroom",
        deck: "Upper Deck Bow",
        size: "19.2 m² (205 sq ft)",
        balconyType: "French doors opening to covered teak promenade deck with private rattan chairs",
        bedOrientation: "Wraparound panoramic forward & side river views",
        bathroom: "En-suite with maritime brass fixtures and walk-in power shower",
        image: "/images/bassac_pandaw_premium_cabin.webp",
        imageAlt: "RV Mekong Pandaw Premium Bow Stateroom with brass nautical fittings and teak promenade access",
        description: "Positioned at the forward bow of the Upper Deck with wraparound windows. Finished in handcrafted Burmese teak and maritime brass, with French doors stepping directly onto the shaded teak promenade.",
        features: ["Forward bow wraparound panoramic windows", "Direct access to covered teak promenade deck", "Handcrafted teak woodwork throughout", "Colonial maritime brass hardware", "All-inclusive local beer, soft drinks & excursions"]
      }
    ],
    dining: {
      title: "Al-Fresco Dining on the Upper Deck",
      description: "Bistro-style dining featuring locally sourced river fish, tropical fruits, and Vietnamese-Cambodian curries served on open-air shaded decks.",
      image: "/images/bassac_pandaw_dining.webp",
    },
    gallery: [
      "/images/mekong_pandaw_header.webp",
      "/images/bassac_pandaw_twin_cabin.webp",
      "/images/bassac_pandaw_premium_cabin.webp",
      "/images/bassac_pandaw_dining.webp"
    ],
  },
};

// Fallback data for any other ships
export const defaultShipData = (slug: string, name: string): ShipData => ({
  slug,
  name,
  operator: "Official Partner Vessel",
  operatorNote: "Curated and booked by Mekong River Cruise with Best Price Guarantee.",
  tagline: "An unforgettable journey on the Mekong",
  heroImage: `/images/${slug.replace(/-/g, '_')}.avif`,
  pricing: {
    threeNight: { from: 1250, route: "Ho Chi Minh City ↔ Phnom Penh" },
    fourNight: { from: 1750, route: "Phnom Penh ↔ Siem Reap" },
    sevenNight: { from: 2850, route: "Ho Chi Minh City ↔ Siem Reap" },
    basis: "Per person, twin-share basis",
    inclusions: "All meals onboard, guided excursions, entrance fees, and port charges.",
    lastVerified: "November 2026",
  },
  stats: {
    length: "60m",
    cabins: "20",
    guests: "40",
    crew: "30",
  },
  overview: {
    title: "Discover the River",
    description: `Experience the majesty of the Mekong aboard the ${name}. Enjoy unparalleled comfort, exceptional service, and an itinerary designed to immerse you in the local culture.`,
  },
  design: {
    title: "Thoughtful Design",
    description: `The ${name} is designed to maximize your connection with the river, featuring open decks and panoramic windows.`,
    image: "/images/the_jahan_superior_cabin.jpg",
  },
  suites: {
    title: "Comfortable Suites",
    description: "Relax in your private sanctuary after a day of exploring. All suites are designed for maximum comfort.",
    image: "/images/the_jahan_superior_cabin.jpg",
    amenities: ["En-suite bathroom", "Air conditioning", "Premium bedding"],
  },
  cabins: [
    {
      id: "deluxe-stateroom",
      name: "Deluxe Riverview Stateroom",
      deck: "Main & Upper Deck",
      size: "22 m² (236 sq ft)",
      balconyType: "Panoramic River Window / French Balcony",
      bedOrientation: "River-facing panoramic view",
      bathroom: "En-suite bathroom with walk-in hot shower & premium amenities",
      image: "/images/the_jahan_superior_cabin.jpg",
      imageAlt: `${name} Deluxe Riverview Stateroom with panoramic Mekong River views`,
      description: `Spacious, air-conditioned stateroom featuring custom woodwork, fine linens, and sweeping river views aboard ${name}.`,
      features: ["Individual climate control", "En-suite bathroom with hot shower", "Panoramic river views", "Daily housekeeping & turndown"]
    }
  ],
  dining: {
    title: "Local and International Flavors",
    description: "Enjoy a variety of dishes prepared by our expert chefs, using the freshest ingredients.",
    image: "/images/amadara_fusion_restaurant.jpg",
  },
  gallery: [
    "/images/the_jahan_superior_cabin.jpg",
    "/images/amadara_fusion_restaurant.jpg",
    "/images/scenic_spirit_deluxe_suite.webp",
    "/images/aqua_mekong_suite_balcony.webp"
  ],
});
