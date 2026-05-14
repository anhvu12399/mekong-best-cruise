export type ShipData = {
  slug: string;
  name: string;
  tagline: string;
  heroImage: string;
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
    tagline: "Where the river meets the sky, and the sky never ends",
    heroImage: "/images/aqua_mekong_hero.jpg",
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
      image: "/images/aqua_mekong_hero.jpg",
    },
    suites: {
      title: "Panoramic Suites",
      description: "Thirty square meters of calm. The beds face the windows because whoever designed these rooms understood that waking up to the Mekong at dawn is worth more than any headboard. The bathrooms have dual sinks and organic products that smell like lemongrass and something you can't quite name. There's a daybed by the glass where most people end up spending their afternoons with a book they never finish.",
      image: "/images/aqua_mekong_suite.jpg",
      amenities: ["En-suite bathroom with dual sinks", "Organic bath amenities", "Large daybed", "Air conditioning", "Complimentary laundry"],
    },
    dining: {
      title: "The kitchen that changed our minds about river food",
      description: "Forget what you think you know about cruise ship dining. The Aqua Mekong's consulting chef sources ingredients from the villages we pass — morning glory from a woman who waves at us every Tuesday, river prawns so fresh they're practically still swimming. The amok curry served in banana leaves at dinner is the kind of dish that makes you close your eyes. Some guests eat on the observation deck under the stars. Others prefer the indoor restaurant where the air conditioning meets the candlelight.",
      image: "/images/aqua_mekong_dining.jpg",
    },
    gallery: ["/images/aqua_mekong_hero.jpg", "/images/aqua_mekong_suite.jpg", "/images/aqua_mekong_dining.jpg", "/images/cruise_observation_deck.jpg", "/images/cruise_excursion_boat.jpg", "/images/cruise_lounge_interior.jpg"],
  },
  "jayavarman": {
    slug: "jayavarman",
    name: "The Jayavarman",
    tagline: "Where teak meets twilight, and history pours the drinks",
    heroImage: "/images/jayavarman_hero_new.jpg",
    stats: {
      length: "57.8m",
      cabins: "27",
      guests: "54",
      crew: "40",
    },
    overview: {
      title: "A ship that remembers",
      description: "The Jayavarman carries a name that weighs something. Jayavarman VII built Angkor Thom, the Bayon, and a network of hospitals across the Khmer empire. This ship carries that ambition in quieter ways — in the hand-carved mahogany that lines the corridors, in the silk cushions that someone chose one by one, in the way the bartender at Club 1930 already knows your drink by the second evening. You notice the brass fittings first. Then the smell of frangipani from somewhere you can't locate. Then you stop noticing altogether, because it just feels right.",
    },
    design: {
      title: "Colonial bones, Khmer soul",
      description: "The designers raided Saigon's antique shops and Phnom Penh's silk markets. The result is a ship that looks like a French colonial officer's dream filtered through Cambodian warmth. Dark teak panels absorb the light; hand-woven rugs soften the floors. The library has actual books — dog-eared novels about Indochina alongside photography collections. The spa smells like eucalyptus and promises nothing it can't deliver.",
      image: "/images/jayavarman_hero_new.jpg",
    },
    suites: {
      title: "Boutique Staterooms",
      description: "No two cabins look exactly alike, which is the first clue that someone cared. One has a carved headboard depicting apsara dancers. Another has vintage maps of the Mekong framed above the desk. All of them have private balconies where you can sit in the early morning dark and listen to monks chanting from a distant pagoda across the water. The beds are draped in silks. The bathrooms are bigger than they need to be, which is exactly the point.",
      image: "/images/jayavarman_suite_new.jpg",
      amenities: ["Private balcony", "French balcony doors", "Mini-bar with local spirits", "Air conditioning", "Premium Egyptian cotton linens"],
    },
    dining: {
      title: "Club 1930 — where the evening starts",
      description: "The dining room is called Club 1930, and it earns the name. Candlelight on white linen. A Vietnamese chef who trained in Saigon but grew up watching his grandmother make bún bò Huế. The Cambodian fish amok arrives in a coconut, and the French onion soup that follows is so good it's almost an insult to the local cuisine. Almost. The wine list leans French — they know their audience — but the cocktails are pure Mekong: tamarind, palm sugar, local rice whiskey.",
      image: "/images/jayavarman_dining_new.jpg",
    },
    gallery: ["/images/jayavarman_hero_new.jpg", "/images/jayavarman_suite_new.jpg", "/images/jayavarman_dining_new.jpg", "/images/cruise_lounge_interior.jpg", "/images/cruise_deck_sunset.jpg", "/images/cruise_observation_deck.jpg"],
  },
  "mekong-jewel": {
    slug: "mekong-jewel",
    name: "Mekong Jewel",
    tagline: "The newest ship on the oldest river. Built to listen.",
    heroImage: "/images/mekong_jewel_hero.jpg",
    stats: {
      length: "80m",
      cabins: "34",
      guests: "68",
      crew: "51",
    },
    overview: {
      title: "A quiet revolution",
      description: "The Mekong Jewel is the river's newest ship, and you can feel it in the details that other vessels never thought to include. The water purification system means you can drink from the tap — a small thing that changes everything. The hull was built with sustainably sourced materials, but the ship never lectures you about it. Instead, it lets you sit on the sundeck with a cold Saigon beer and watch herons lift off from the rice paddies, and you just... get it. Sustainability isn't a feature. It's an attitude.",
    },
    design: {
      title: "Light, space, and the sound of water",
      description: "The architects gave this ship something most river cruisers lack: breathing room. The two dining venues never feel crowded. The sundeck pool is big enough to actually swim in. The lounge has floor-to-ceiling windows that make the Mekong feel like a living painting — changing color, shifting mood, never the same river twice. The materials are natural: bamboo, reclaimed teak, woven rattan. The palette is earth tones. The effect is calm.",
      image: "/images/mekong_jewel_hero.jpg",
    },
    suites: {
      title: "All-Balcony Suites",
      description: "Every single suite on the Jewel has its own balcony. This matters more than you think. At dawn, before the ship wakes, you can stand outside in your robe and watch the mist burn off the river. The egrets come first, then the fishing boats, then the sound of someone frying rice in a village kitchen. Inside, the bed faces the water. The bathroom has a rain shower. The minibar gets restocked with local fruit every afternoon — rambutan, dragon fruit, mangosteen — and someone always remembers to leave the mango last.",
      image: "/images/mekong_jewel_suite.jpg",
      amenities: ["Private open-air balcony", "Sitting area with river views", "Rain shower bathroom", "Flat-screen TV", "Daily restocked tropical fruit & water"],
    },
    dining: {
      title: "Two kitchens, one philosophy: fresh",
      description: "The main dining room handles the evening theater — multi-course dinners where the chef explains each dish like a story. But the real magic happens at the alfresco venue upstairs, where lunch is served family-style and the cook might pull you aside to teach you how to roll a proper spring roll. They buy fish from the boats we pass. The herbs come from a small garden on the top deck. The pho at breakfast — with its broth that's been simmering since 4 AM — is reason enough to set an alarm.",
      image: "/images/mekong_jewel_dining.jpg",
    },
    gallery: ["/images/mekong_jewel_hero.jpg", "/images/mekong_jewel_suite.jpg", "/images/mekong_jewel_dining.jpg", "/images/cruise_observation_deck.jpg", "/images/cruise_spa_wellness.jpg", "/images/cruise_deck_sunset.jpg"],
  },
  "mekong-princess": {
    slug: "mekong-princess",
    name: "Mekong Princess",
    tagline: "Fourteen suites. No crowds. Just the river and you.",
    heroImage: "/images/mekong_princess_hero.jpg",
    stats: {
      length: "61m",
      cabins: "14",
      guests: "28",
      crew: "28",
    },
    overview: {
      title: "Small enough to disappear",
      description: "There's a narrow tributary south of Châu Đốc where the water hyacinths close in and the bigger ships simply can't follow. The Mekong Princess can. She slips through channels so narrow you could reach out and touch the banana leaves. A woman washing clothes on the bank looks up, waves, and goes back to her morning. This is what fourteen suites buys you: access to the Mekong that feels less like tourism and more like trespassing, in the best possible way.",
    },
    design: {
      title: "The charm of not trying too hard",
      description: "The Princess doesn't have the glitz of the bigger ships, and she knows it. What she has instead is warmth. The observation lounge feels like someone's living room — mismatched vintage chairs, shelves of actual books, a bar where the bartender has time to talk because there are only twenty-eight guests. The sundeck has the best sunset views on the river because there's nothing above you but sky. No fuss, no production. Just teak, water, and time.",
      image: "/images/mekong_princess_hero.jpg",
    },
    suites: {
      title: "Rooms that feel like hiding places",
      description: "The suites on the Princess are generous for a ship this size — probably because there are only fourteen of them. French balconies with wrought-iron railings open onto the passing delta. The beds have white cotton and indigo silk, a combination that looks better than it sounds. There's always a vase of lotus flowers, and you're never sure when someone came in to replace them. The writing desk by the window is where most guests end up spending their mornings, journaling or staring at the water. Both are valid.",
      image: "/images/mekong_princess_suite.jpg",
      amenities: ["French balcony or private veranda", "Premium bath products by L'Occitane", "Silk robes and leather slippers", "Individual climate control"],
    },
    dining: {
      title: "When the chef knows your name",
      description: "With twenty-eight guests, dinner isn't a production — it's a conversation. The chef comes out most evenings, still in his apron, to ask how the fish was. It was perfect, because he bought it six hours ago from a boat that pulled alongside. The menu changes with the river: dry season brings sweeter mangoes and firmer catfish; wet season means wild herbs and the best morning glory you've ever tasted. Some nights, they set up a private table on the bow. The lantern swings. The river is black and silver. You don't want dessert. You want this to never end.",
      image: "/images/mekong_princess_dining.jpg",
    },
    gallery: ["/images/mekong_princess_hero.jpg", "/images/mekong_princess_suite.jpg", "/images/mekong_princess_dining.jpg", "/images/travel_craft_lotus.jpg", "/images/travel_private_canal.jpg", "/images/travel_bentre_cycling.jpg"],
  },
  "the-jahan": {
    slug: "the-jahan",
    name: "The Jahan",
    tagline: "Named for the emperor who built the Taj Mahal. She lives up to it.",
    heroImage: "/images/jahan_hero_new.jpg",
    stats: {
      length: "70m",
      cabins: "26",
      guests: "52",
      crew: "40",
    },
    overview: {
      title: "A floating palace with a sense of humor",
      description: "The Jahan is the most theatrical ship on the Mekong, and she isn't shy about it. The moment you step aboard, you're surrounded by intricate woodwork, vibrant silks, and artifacts that someone clearly spent years collecting from markets across Asia. But here's what saves her from feeling like a museum: the crew. They're warm, quick to laugh, and completely unfazed by the opulence around them. The bartender at the observatory mixes a tamarind sour with the casualness of someone making tea. It's this contrast — the grandeur and the ease — that makes the Jahan unforgettable.",
    },
    design: {
      title: "Mughal dreams on Mekong waters",
      description: "Shah Jahan built monuments to love. This ship borrows his aesthetic without his melancholy. The woodwork is intricate — hand-carved panels that catch the light differently at every hour. The colors are bold: saffron, turquoise, deep crimson. The observatory on the top deck has the best view on the river and the best gin collection. The pool is smaller than the Jewel's but warmer, both literally and in feeling. The spa uses techniques borrowed from Ayurveda. Everything on this ship is a little extra, and that's exactly the point.",
      image: "/images/jahan_hero_new.jpg",
    },
    suites: {
      title: "Ornate Cabins",
      description: "The four-poster beds have carved headboards that depict different legends — Ganesh on one, a lotus mandala on another. The textiles are hand-embroidered. The balcony doors open onto the river with a theatrical creak that feels intentional. The bathrooms have mosaic tiles in patterns that you'll spend ten minutes tracing with your eyes while the shower warms up. Nothing is minimalist. Nothing is quiet. Everything is chosen, considered, and slightly more beautiful than it needs to be.",
      image: "/images/jahan_suite_new.jpg",
      amenities: ["Private balcony", "Four-poster carved bed", "Writing desk with stationery", "Mini-bar with premium spirits"],
    },
    dining: {
      title: "The Viceroy Dining Hall",
      description: "The dining hall has crystal chandeliers that throw tiny rainbows across the white tablecloths at sunset. The menu is unapologetically fusion: Cambodian curry alongside lamb kebabs, Vietnamese pho next to naan bread. It shouldn't work, but it does — spectacularly. The chef understands that this river connects cultures, and the food should too. Thursday nights are the captain's dinner, where the long table is set with gold-rimmed china and the conversation lasts until the candles burn down. It's the kind of evening you'll remember in specific, sensory detail years later.",
      image: "/images/jahan_dining_new.jpg",
    },
    gallery: ["/images/jahan_hero_new.jpg", "/images/jahan_suite_new.jpg", "/images/jahan_dining_new.jpg", "/images/cruise_lounge_interior.jpg", "/images/cruise_observation_deck.jpg", "/images/cruise_spa_wellness.jpg"],
  },
  "victoria-mekong": {
    slug: "victoria-mekong",
    name: "Victoria Mekong",
    tagline: "Clean lines, wide views, and the future of river cruising",
    heroImage: "/images/victoria_mekong_hero.jpg",
    stats: {
      length: "76.8m",
      cabins: "35",
      guests: "70",
      crew: "45",
    },
    overview: {
      title: "The one that surprised us",
      description: "The Victoria Mekong is the kind of ship you expect to be corporate. It's new, it's big, it's shiny. But then you walk onto the 360-degree sundeck and realize you can see three countries from one spot if the light is right. The infinity pool catches the sky like a second horizon. The mini-golf course — yes, there's mini-golf — is ridiculous and wonderful and exactly the kind of thing that makes kids love their parents again. This ship proves that modern doesn't have to mean soulless.",
    },
    design: {
      title: "What happens when you let light in",
      description: "Most river ships are built like hotels that happen to float. The Victoria Mekong is built like a greenhouse that happens to have beds. Light wood finishes replace the dark teak of older vessels. The windows are enormous — not floor-to-ceiling but floor-to-above-ceiling, somehow. The public spaces flow into each other without walls or doors, so the lounge becomes the bar becomes the restaurant becomes the deck. It's open-plan in a way that feels radical on a river where tradition usually wins.",
      image: "/images/victoria_mekong_hero.jpg",
    },
    suites: {
      title: "Modern Retreats",
      description: "The cabins are crisp. White walls, light wood, beds that sit lower than you expect — a design choice that frames the river through the balcony door like a painting. The smart TV is there if you want it, but the view is better. The bathrooms have walk-in rain showers with glass walls that let the light pour through. The balcony furniture is minimal: two chairs, a small table, just enough for coffee and the morning. No clutter, no excess, no apology for being contemporary.",
      image: "/images/victoria_mekong_suite.jpg",
      amenities: ["Private balcony", "Smart TV with streaming", "Walk-in rain shower", "In-room safe", "Bluetooth speaker"],
    },
    dining: {
      title: "A restaurant with no walls",
      description: "The panoramic restaurant wraps around the ship like a glass embrace. At breakfast, the light is so clean it makes the fruit look like a still life. The menu borrows from everywhere the Mekong touches: Vietnamese bún chả, Cambodian lok lak, Thai-inspired salads that crunch. The sushi bar — a surprising addition — turns out to be the best-kept secret on board, serving nigiri with fish that was in the river that morning. Lunch moves to the upper deck, where the breeze does half the cooking. Dinner is candlelit but casual. No dress codes. No pretense. Just good food and a river that never stops moving.",
      image: "/images/victoria_mekong_dining.jpg",
    },
    gallery: ["/images/victoria_mekong_hero.jpg", "/images/victoria_mekong_suite.jpg", "/images/victoria_mekong_dining.jpg", "/images/cruise_observation_deck.jpg", "/images/cruise_deck_sunset.jpg", "/images/cruise_lounge_interior.jpg"],
  }
};

// Fallback data for any other ships
export const defaultShipData = (slug: string, name: string): ShipData => ({
  slug,
  name,
  tagline: "An unforgettable journey on the Mekong",
  heroImage: `/images/${slug.replace(/-/g, '_')}.avif`,
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
    image: "/images/heritage_start.avif",
    amenities: ["En-suite bathroom", "Air conditioning", "Premium bedding"],
  },
  dining: {
    title: "Local and International Flavors",
    description: "Enjoy a variety of dishes prepared by our expert chefs, using the freshest ingredients.",
    image: "/images/fine-dining-deck.avif",
  },
  gallery: [`/images/${slug.replace(/-/g, '_')}.avif`, "/images/luxury-balcony-sunset.avif", "/images/heritage_start.avif"],
});
