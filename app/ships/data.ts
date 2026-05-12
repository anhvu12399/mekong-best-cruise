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
    tagline: "Ultra-Luxury on the River of Nine Dragons",
    heroImage: "/images/aqua_mekong.avif",
    stats: {
      length: "62.4m",
      cabins: "20",
      guests: "40",
      crew: "40",
    },
    overview: {
      title: "The River's Finest Address",
      description: "Designed by renowned architects, the Aqua Mekong represents the pinnacle of river cruising. With its floor-to-ceiling panoramic windows, guests can witness the timeless beauty of the Mekong from the comfort of their air-conditioned suites. The vessel combines modern luxury with authentic local touches, offering an unparalleled journey through Vietnam and Cambodia.",
    },
    design: {
      title: "Contemporary Elegance",
      description: "Every element of the Aqua Mekong has been thoughtfully crafted. Using local sustainable materials, artisanal touches, and modern architectural principles, the ship is a floating five-star hotel that never feels out of place on the ancient river. The observation deck features a shaded lounge, a plunge pool, and a private cinema.",
      image: "/images/luxury-balcony-sunset.avif",
    },
    suites: {
      title: "Panoramic Suites",
      description: "Spacious 30-square-meter suites featuring California King beds and floor-to-ceiling windows. The design is minimalist yet incredibly comfortable, drawing focus to the ever-changing landscape outside.",
      image: "/images/fine-dining-deck.avif",
      amenities: ["En-suite bathroom with dual sinks", "Organic bath amenities", "Large daybed", "Air conditioning", "Complimentary laundry"],
    },
    dining: {
      title: "Michelin-Inspired Cuisine",
      description: "Consulting chefs have crafted a menu that celebrates the vibrant flavors of Southeast Asia using fresh, locally sourced ingredients. Dine in the elegant indoor restaurant or al fresco on the observation deck under the stars.",
      image: "/images/cultural-encounters-new.avif",
    },
    gallery: ["/images/aqua_mekong.avif", "/images/luxury-balcony-sunset.avif", "/images/fine-dining-deck.avif"],
  },
  "jayavarman": {
    slug: "jayavarman",
    name: "The Jayavarman",
    tagline: "Colonial Boutique Romance",
    heroImage: "/images/jayavarman.avif",
    stats: {
      length: "57.8m",
      cabins: "27",
      guests: "54",
      crew: "40",
    },
    overview: {
      title: "A Voyage Back in Time",
      description: "Named after Angkor's most revered king, The Jayavarman blends French colonial design with intricate Khmer architecture. This beautiful vessel transports guests to a bygone era of elegant travel, offering a romantic and intimate way to experience the Mekong Delta and Cambodia.",
    },
    design: {
      title: "French Colonial Charm",
      description: "Featuring dark wood panelling, hand-carved mahogany furniture, and subtle Indochine accents, the Jayavarman is a floating masterpiece. The ship features multiple lounges, a boutique, a spa, and a stunning sun deck where you can watch the world drift by.",
      image: "/images/heritage_epic.avif",
    },
    suites: {
      title: "Boutique Staterooms",
      description: "Each cabin has its own private balcony and is individually decorated with authentic local artifacts, rich silks, and vintage-style fixtures.",
      image: "/images/heritage_start.avif",
      amenities: ["Private balcony", "French balcony doors", "Mini-bar", "Air conditioning", "Premium linens"],
    },
    dining: {
      title: "Indochine Flavors",
      description: "The dining room, Club 1930, serves a fusion of authentic Vietnamese and Cambodian cuisine alongside classic Western dishes, creating a culinary journey that matches the physical one.",
      image: "/images/fine-dining-deck.avif",
    },
    gallery: ["/images/jayavarman.avif", "/images/heritage_epic.avif", "/images/heritage_start.avif"],
  },
  "mekong-jewel": {
    slug: "mekong-jewel",
    name: "Mekong Jewel",
    tagline: "Eco-Friendly Luxury",
    heroImage: "/images/mekong_jewel.avif",
    stats: {
      length: "80m",
      cabins: "34",
      guests: "68",
      crew: "51",
    },
    overview: {
      title: "Sustainable Splendor",
      description: "The newest and most luxurious ship on the river, the Mekong Jewel was built with sustainable, eco-friendly materials and features advanced water purification systems. It offers a guilt-free luxury experience without compromising on comfort or elegance.",
    },
    design: {
      title: "Modern & Spacious",
      description: "The Jewel redefines space on the Mekong. From the two dining venues to the expansive sundeck with a pool, every public area is designed to provide guests with ample room to relax and socialize.",
      image: "/images/luxury-balcony-sunset.avif",
    },
    suites: {
      title: "All-Balcony Suites",
      description: "Every suite on the Mekong Jewel features a private balcony. The sophisticated decor uses natural tones and textures, creating a calming sanctuary after a day of exploration.",
      image: "/images/heritage_longway.avif",
      amenities: ["Private open-air balcony", "Sitting area", "Spacious bathroom", "Flat-screen TV", "Daily restocked water"],
    },
    dining: {
      title: "Two Dining Venues",
      description: "Choose between the elegant main dining room offering multi-course dinners and the more casual alfresco venue on the upper deck for lunches with a view.",
      image: "/images/fine-dining-deck.avif",
    },
    gallery: ["/images/mekong_jewel.avif", "/images/luxury-balcony-sunset.avif", "/images/heritage_longway.avif"],
  },
  "mekong-princess": {
    slug: "mekong-princess",
    name: "Mekong Princess",
    tagline: "Intimate and Exclusive",
    heroImage: "/images/mekong_princess.avif",
    stats: {
      length: "61m",
      cabins: "14",
      guests: "28",
      crew: "28",
    },
    overview: {
      title: "The Most Exclusive Ship on the River",
      description: "With only 14 suites, the Mekong Princess offers an intimacy unmatched by larger vessels. Its small size allows it to navigate narrow tributaries that others cannot reach, bringing you closer to the authentic life of the delta.",
    },
    design: {
      title: "Classic Elegance",
      description: "The ship exudes a classic, timeless elegance reminiscent of the French colonial era. The observation lounge and sundeck provide perfect vantage points for watching the river's daily rhythms.",
      image: "/images/cultural-encounters-v2.avif",
    },
    suites: {
      title: "Spacious Sanctuaries",
      description: "All 14 suites are generously sized, featuring French balconies or private verandas, spa-like bathrooms, and elegant furnishings that invite relaxation.",
      image: "/images/luxury-balcony-sunset.avif",
      amenities: ["French balcony", "Premium bath products", "Robes and slippers", "Individual climate control"],
    },
    dining: {
      title: "Personalized Culinary Journey",
      description: "With such a small number of guests, the culinary team can cater to individual preferences, offering a menu that blends local specialties with international favorites.",
      image: "/images/fine-dining-deck.avif",
    },
    gallery: ["/images/mekong_princess.avif", "/images/cultural-encounters-v2.avif", "/images/luxury-balcony-sunset.avif"],
  },
  "the-jahan": {
    slug: "the-jahan",
    name: "The Jahan",
    tagline: "Romantic British-Indian Design",
    heroImage: "/images/the_jahan.avif",
    stats: {
      length: "70m",
      cabins: "26",
      guests: "52",
      crew: "40",
    },
    overview: {
      title: "A floating palace",
      description: "Named after Shah Jahan, the Mughal Emperor who built the Taj Mahal, The Jahan brings an exotic British-Indian elegance to the Mekong. It is a romantic, exquisitely detailed ship that turns the journey into a destination itself.",
    },
    design: {
      title: "Exotic Architecture",
      description: "Intricate woodwork, vibrant colors, and unique artifacts collected from across Asia define The Jahan's aesthetic. It features a stunning observatory, a pool on the top deck, and a tranquil spa.",
      image: "/images/heritage_epic.avif",
    },
    suites: {
      title: "Ornate Cabins",
      description: "Each cabin boasts a private balcony and is uniquely decorated, featuring four-poster beds, rich textiles, and hand-painted details.",
      image: "/images/heritage_start.avif",
      amenities: ["Private balcony", "Four-poster bed", "Writing desk", "Mini-bar"],
    },
    dining: {
      title: "A Feast for the Senses",
      description: "The Viceroy Dining Hall offers a regal setting for enjoying exquisite Indochinese and international cuisine, prepared with the freshest local ingredients.",
      image: "/images/fine-dining-deck.avif",
    },
    gallery: ["/images/the_jahan.avif", "/images/heritage_epic.avif", "/images/heritage_start.avif"],
  },
  "victoria-mekong": {
    slug: "victoria-mekong",
    name: "Victoria Mekong",
    tagline: "Sleek and Modern",
    heroImage: "/images/victoria_mekong.avif",
    stats: {
      length: "76.8m",
      cabins: "35",
      guests: "70",
      crew: "45",
    },
    overview: {
      title: "Contemporary Comfort",
      description: "The Victoria Mekong is one of the region's newest ships, offering a sleek, modern design and state-of-the-art facilities. It focuses on offering a fresh, contemporary approach to river cruising.",
    },
    design: {
      title: "Light and Airy",
      description: "With its light wood finishes, large windows, and open-plan public spaces, the Victoria Mekong feels incredibly spacious. The ship boasts a beautiful infinity pool, a mini-golf course, and a 360-degree sundeck.",
      image: "/images/luxury-balcony-sunset.avif",
    },
    suites: {
      title: "Modern Retreats",
      description: "The cabins are designed with a minimalist aesthetic, featuring private balconies, comfortable bedding, and all the modern conveniences you'd expect from a luxury hotel.",
      image: "/images/heritage_longway.avif",
      amenities: ["Private balcony", "Smart TV", "Modern bathroom", "In-room safe"],
    },
    dining: {
      title: "Culinary Excellence",
      description: "Enjoy panoramic views while dining in the elegant restaurant, which serves a mix of international and authentic local dishes.",
      image: "/images/fine-dining-deck.avif",
    },
    gallery: ["/images/victoria_mekong.avif", "/images/luxury-balcony-sunset.avif", "/images/heritage_longway.avif"],
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
