import fs from 'fs';
import path from 'path';

const SLUGS = [
  'ben-tre-authentic',
  'cajuput-forests',
  'craft-villages',
  'floating-markets',
  'hate-crowds',
  'hidden-mekong',
  'luxury-cruises',
  'redefining-luxury',
  'slow-day'
];

const BASE_URL = 'https://www.mekongrivercruise.com';

for (const slug of SLUGS) {
  const filePath = path.join(process.cwd(), 'app', 'travel-ideas', slug, 'page.tsx');
  if (!fs.existsSync(filePath)) {
    console.error(`Not found: ${filePath}`);
    continue;
  }

  let code = fs.readFileSync(filePath, 'utf8');

  // Check if already enhanced
  if (code.includes('AuthorByline')) {
    console.log(`Already enhanced: ${slug}`);
    continue;
  }

  // 1. Add import
  if (!code.includes('@/components/author-box')) {
    code = code.replace(
      'import { Bodoni_Moda } from "next/font/google"',
      'import { Bodoni_Moda } from "next/font/google"\nimport { AuthorByline, AuthorCard } from "@/components/author-box"'
    );
  }

  // 2. Extract title & description from metadata
  const titleMatch = code.match(/title:\s*["']([^"']+)["']/);
  const title = titleMatch ? titleMatch[1] : 'Mekong River Cruise Travel Ideas';
  
  const descMatch = code.match(/description:\s*["']([^"']+)["']/);
  const desc = descMatch ? descMatch[1] : 'Discover authentic luxury travel experiences on the Mekong River.';

  const imgMatch = code.match(/images:\s*\[\{\s*url:\s*["']([^"']+)["']/);
  const img = imgMatch ? imgMatch[1] : `${BASE_URL}/images/hero-1.avif`;

  const pageUrl = `${BASE_URL}/travel-ideas/${slug}`;

  // 3. Create articleJsonLd
  const jsonLdCode = `
const BASE_URL = "${BASE_URL}"
const PAGE_URL = "${pageUrl}"

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "${title.replace(/"/g, '\\"')}",
  "description": "${desc.replace(/"/g, '\\"')}",
  "image": "${img}",
  "author": {
    "@type": "Person",
    "name": "Emily Nguyen",
    "jobTitle": "Lead Mekong Delta Specialist",
    "url": "${BASE_URL}/our-specialists",
    "worksFor": {
      "@type": "TravelAgency",
      "name": "Mekong River Cruise",
      "url": BASE_URL,
    },
  },
  "publisher": {
    "@type": "Organization",
    "name": "Mekong River Cruise",
    "logo": {
      "@type": "ImageObject",
      "url": "${BASE_URL}/logo.png",
    },
  },
  "datePublished": "2026-05-10T00:00:00Z",
  "dateModified": "2026-10-15T00:00:00Z",
  "mainEntityOfPage": PAGE_URL,
}
`;

  // Insert jsonLdCode right before export default function
  const exportMatch = code.match(/export default function/);
  if (exportMatch) {
    code = code.slice(0, exportMatch.index) + jsonLdCode + '\n' + code.slice(exportMatch.index);
  }

  // 4. Insert JSON-LD script inside component return
  code = code.replace(
    /<main className="bg-white text-\[#222\]">/,
    `<>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <main className="bg-white text-[#222]">`
  );

  // Close fragment at the end of return
  code = code.replace(
    /<\/main>\s*\)\s*}/,
    `</main>
    </>
  )
}`
  );

  // 5. Insert AuthorByline in first section max-w-[720px]
  code = code.replace(
    /(<section className="max-w-\[720px\] mx-auto px-6 py-24 lg:py-32">\s*)(<p className="text-\[11px\])/,
    `$1<AuthorByline specialistId="emily" updatedDate="October 2026" readingTime="5 min read" />\n        $2`
  );

  // 6. Insert AuthorCard before CTA
  code = code.replace(
    /(\s*{\/\* ── CTA ── \*\/})/,
    `\n      {/* Author Card for E-E-A-T */}
      <div className="max-w-[720px] mx-auto px-6 py-8">
        <AuthorCard specialistId="emily" reviewedDate="October 2026" />
      </div>\n$1`
  );

  fs.writeFileSync(filePath, code, 'utf8');
  console.log(`Successfully enhanced ${slug}`);
}
