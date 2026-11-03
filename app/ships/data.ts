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
    heroImage: "/images/aqua_mekong.avif",
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
      image: "/images/luxury-balcony-sunset.avif",
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
      "/images/aqua_mekong.avif",
      "/images/aqua_mekong_suite_balcony.webp",
      "/images/aqua_mekong_bathroom.webp",
      "/images/aqua_mekong_suite_panoramic.webp",
      "/images/aqua_mekong_banner.jpg",
      "/images/luxury-balcony-sunset.avif"
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
      image: "/images/jewel_suite.avif",
      amenities: ["Private open-air balcony", "Sitting area with river views", "Rain shower bathroom", "Flat-screen TV", "Daily restocked tropical fruit & water"],
    },
    cabins: [
      {
        id: "deluxe-balcony-suite",
        name: "Deluxe Balcony Suite",
        deck: "Lotus & Orchid Decks (28 Suites)",
        size: "30 m² to 31.5 m² (323 - 339 sq ft)",
        balconyType: "Private Step-out Teak Balcony with rattan armchairs",
        bedOrientation: "Direct River-Facing upholstered bed",
        bathroom: "Marble en-suite bathroom with walk-in rain shower",
        image: "/images/jewel_suite.avif",
        imageAlt: "Mekong Jewel Deluxe Balcony Suite with private open-air balcony and river-facing bed",
        description: "Modern eco-luxury with reclaimed timbers, woven bamboo accents, and floor-to-ceiling glass leading to a private outdoor balcony. Includes daily restocked tropical fruit basket.",
        features: ["Private open-air balcony", "Direct river-facing king bed", "Marble walk-in rain shower", "Complimentary minibar restocked daily", "Eco-friendly purified tap water system"]
      }
    ],
    dining: {
      title: "Two kitchens, one philosophy: fresh",
      description: "The main dining room handles the evening theater — multi-course dinners where the chef explains each dish like a story. But the real magic happens at the alfresco venue upstairs, where lunch is served family-style and the cook might pull you aside to teach you how to roll a proper spring roll.",
      image: "/images/jewel_dining.avif",
    },
    gallery: [
      "/images/mekong_jewel.avif",
      "/images/mekong_jewel_v2.avif",
      "/images/jewel_suite.avif",
      "/images/jewel_dining.avif",
      "/images/jewel_pool.avif",
      "/images/jewel_spa.avif"
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
      image: "/images/princess_suite.avif",
      amenities: ["French balcony or private veranda", "Premium bath products by L'Occitane", "Silk robes and leather slippers", "Individual climate control"],
    },
    cabins: [
      {
        id: "junior-saigon-suite",
        name: "Junior & Saigon Suite",
        deck: "Mekong & Bassac Decks (14 Suites Only)",
        size: "24 m² to 30 m² (258 - 323 sq ft)",
        balconyType: "French Balcony with wrought-iron railings or private veranda",
        bedOrientation: "River-facing classic French colonial bed with indigo silks",
        bathroom: "Natural stone bathroom with rain shower and luxury L'Occitane amenities",
        image: "/images/princess_suite.avif",
        imageAlt: "Mekong Princess Junior Suite with French balcony and colonial indigo silk bedding",
        description: "An intimate sanctuary on a 14-suite boutique vessel. Features floor-to-ceiling French doors, custom-carved wood desks, fresh lotus blossoms daily, and dedicated private butler service.",
        features: ["French doors opening to river breeze", "Dedicated private butler service", "L'Occitane en Provence bath amenities", "Silk bathrobes & leather slippers", "Fresh lotus flowers replenished daily"]
      }
    ],
    dining: {
      title: "When the chef knows your name",
      description: "With twenty-eight guests, dinner isn't a production — it's a conversation. The chef comes out most evenings, still in his apron, to ask how the fish was. It was perfect, because he bought it six hours ago from a boat that pulled alongside.",
      image: "/images/princess_dining.avif",
    },
    gallery: [
      "/images/princess_hero.avif",
      "/images/princess_suite.avif",
      "/images/princess_dining.avif",
      "/images/dest_vietnam.avif",
      "/images/dest_cambodia.avif",
      "/images/luxury-balcony-sunset.avif"
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
        image: "/images/the_jahan_banner.jpg",
        imageAlt: "The Jahan Signature Suite with private Jacuzzi spa tub and four-poster colonial bed",
        description: "Situated on the Upper Deck with elevated panoramic vistas. Signature Suites boast antique Raj artifacts, a four-poster bed, and a private Jacuzzi tub with river views.",
        features: ["Upper Deck prime river panorama", "Four-poster carved colonial bed", "Private Jacuzzi spa tub in Signature Suites", "Butler service & daily laundry", "Hand-painted artwork & Raj antiques"]
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
      "/images/the_jahan_banner.jpg",
      "/images/jahan_suite.avif",
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
    heroImage: "/images/victoria_mekong.avif",
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
      image: "/images/jewel_suite.avif",
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
        image: "/images/victoria_mekong.avif",
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
      "/images/victoria_mekong.avif",
      "/images/victoria_mekong_v2.avif",
      "/images/victoria_mekong_v3.avif",
      "/images/victoria_hero.avif",
      "/images/luxury-balcony-sunset.avif",
      "/images/fine-dining-deck.avif"
    ],
  },
  "scenic-spirit": {
    slug: "scenic-spirit",
    name: "Scenic Spirit",
    operator: "Scenic Luxury Cruises & Tours",
    operatorNote: "Operated by Scenic. 100% all-inclusive luxury river cruising with private butler service.",
    tagline: "Ultra-luxury all-inclusive with private Sun Lounge balconies",
    heroImage: "/images/scenic_spirit_deluxe_suite.webp",
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
      "/images/scenic_spirit_deluxe_suite.webp",
      "/images/scenic_spirit_grand_deluxe_suite.webp",
      "/images/scenic_spirit_deck_layout.webp",
      "/images/luxury_dining.avif",
      "/images/luxury-balcony-sunset.avif",
      "/images/fine-dining-deck.avif"
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
      "/images/luxury-balcony-sunset.avif"
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
        image: "/images/bassac_pandaw_header.webp",
        imageAlt: "RV Bassac Pandaw handcrafted teak riverboat sailing shallow waters of the Mekong Delta",
        description: "Classic colonial expedition cabin with French doors opening to the 360-degree teak promenade deck. Features individual air conditioning, kimono bathrobes, and Pandaw refillable water flasks.",
        features: ["French doors opening to teak promenade deck", "Dedicated rattan chairs outside your cabin", "Ultra-low 1.5m draft reaching remote canals", "Informal, authentic expedition atmosphere", "Nightly turndown service & briefing"]
      }
    ],
    dining: {
      title: "Al-Fresco Dining on the Upper Deck",
      description: "Bistro-style dining featuring locally sourced river fish, tropical fruits, and Vietnamese-Cambodian curries served on open-air shaded decks.",
      image: "/images/bassac_pandaw_header.webp",
    },
    gallery: [
      "/images/bassac_pandaw_header.webp",
      "/images/bassac_pandaw_premium_cabin.webp",
      "/images/bassac_pandaw.avif",
      "/images/mekong_pandaw_header.webp",
      "/images/fine-dining-deck.avif",
      "/images/luxury-balcony-sunset.avif"
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
      image: "/images/luxury-balcony-sunset.avif",
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
        image: "/images/viking_saigon_exterior.jpg",
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
        image: "/images/luxury-balcony-sunset.avif",
        imageAlt: "Viking Saigon French Balcony Stateroom with floor-to-ceiling sliding glass doors",
        description: "Floor-to-ceiling sliding glass doors bring river breezes and views right into your stateroom. Equipped with individual climate control, mini-fridge, and heated bathroom floors.",
        features: ["Floor-to-ceiling sliding glass doors", "Heated bathroom floor & anti-fog mirror", "Individual silent climate control", "Hotel-style bed with luxury linens", "Daily housekeeping & shoe shine"]
      }
    ],
    dining: {
      title: "The Restaurant & Aquavit Terrace",
      description: "Regional Vietnamese-Cambodian dishes and familiar Western classics prepared with fresh ingredients sourced from ports along the river.",
      image: "/images/fine-dining-deck.avif",
    },
    gallery: [
      "/images/viking_saigon_exterior.jpg",
      "/images/luxury-balcony-sunset.avif",
      "/images/fine-dining-deck.avif",
      "/images/luxury_dining.avif",
      "/images/dest_vietnam.avif",
      "/images/dest_cambodia.avif"
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
      image: "/images/luxury-balcony-sunset.avif",
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
        image: "/images/emerald_harmony_exterior.jpg",
        imageAlt: "Emerald Harmony Panorama Balcony Suite with electronic drop-down balcony window and river views",
        description: "Features Emerald's signature drop-down glass window that converts your seating area into an open-air riverfront balcony at the press of a button.",
        features: ["Push-button drop-down balcony window", "ESPA luxury bath amenities", "Direct river-facing hotel bed", "Complimentary Wi-Fi & minibar", "Infotainment system with movies"]
      }
    ],
    dining: {
      title: "Reflections Restaurant",
      description: "Enjoy chef-crafted Asian and European menus paired with complimentary wines, followed by cocktails in the Horizon Bar & Lounge.",
      image: "/images/fine-dining-deck.avif",
    },
    gallery: [
      "/images/emerald_harmony_exterior.jpg",
      "/images/luxury-balcony-sunset.avif",
      "/images/fine-dining-deck.avif",
      "/images/luxury_dining.avif",
      "/images/dest_vietnam.avif",
      "/images/dest_cambodia.avif"
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
    image: "/images/luxury-balcony-sunset.avif",
  },
  suites: {
    title: "Comfortable Suites",
    description: "Relax in your private sanctuary after a day of exploring. All suites are designed for maximum comfort.",
    image: "/images/luxury_sunset_balcony.avif",
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
      image: "/images/luxury_sunset_balcony.avif",
      imageAlt: `${name} Deluxe Riverview Stateroom with panoramic Mekong River views`,
      description: `Spacious, air-conditioned stateroom featuring custom woodwork, fine linens, and sweeping river views aboard ${name}.`,
      features: ["Individual climate control", "En-suite bathroom with hot shower", "Panoramic river views", "Daily housekeeping & turndown"]
    }
  ],
  dining: {
    title: "Local and International Flavors",
    description: "Enjoy a variety of dishes prepared by our expert chefs, using the freshest ingredients.",
    image: "/images/fine-dining-deck.avif",
  },
  gallery: [
    "/images/luxury-balcony-sunset.avif",
    "/images/fine-dining-deck.avif",
    "/images/cultural-encounters-new.avif",
    "/images/luxury_sunset_balcony.avif",
    "/images/dest_vietnam.avif",
    "/images/dest_cambodia.avif"
  ],
});
