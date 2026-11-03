/**
 * scripts/ping-indexnow.mjs
 * Submits all canonical URLs to IndexNow (Bing & ChatGPT Search index)
 * Usage: node scripts/ping-indexnow.mjs
 */

const HOST = "www.mekongrivercruise.com";
const KEY = "c78b66f212874dc990710609ea8364e6";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const URLS = [
  `https://${HOST}/`,
  `https://${HOST}/discover`,
  `https://${HOST}/about-us`,
  `https://${HOST}/our-specialists`,
  `https://${HOST}/plan-your-journey`,
  `https://${HOST}/cruises`,
  `https://${HOST}/best-time-to-travel`,
  `https://${HOST}/contact`,
  `https://${HOST}/faqs`,
  `https://${HOST}/sustainability`,
  `https://${HOST}/careers`,
  `https://${HOST}/booking-terms`,
  `https://${HOST}/terms-conditions`,
  `https://${HOST}/privacy-policy`,
  `https://${HOST}/llms.txt`,
  `https://${HOST}/llms-full.txt`,
  // Destinations
  `https://${HOST}/destinations/vietnam`,
  `https://${HOST}/destinations/cambodia`,
  `https://${HOST}/destinations/laos`,
  `https://${HOST}/destinations/thailand`,
  `https://${HOST}/destinations/myanmar`,
  `https://${HOST}/destinations/china`,
  // Itineraries
  `https://${HOST}/itineraries/vietnam-cambodia`,
  `https://${HOST}/itineraries/mekong-delta`,
  `https://${HOST}/itineraries/1-day`,
  `https://${HOST}/itineraries/2-days`,
  `https://${HOST}/itineraries/small-ship`,
  `https://${HOST}/itineraries/private-charter`,
  `https://${HOST}/itineraries/full-mekong-story`,
  `https://${HOST}/itineraries/rivers-of-indochina`,
  // High-Intent GEO Travel Ideas
  `https://${HOST}/travel-ideas/best-mekong-river-cruise-for-seniors`,
  `https://${HOST}/travel-ideas/is-mekong-river-cruise-worth-it`,
  `https://${HOST}/travel-ideas/croisiere-mekong-comparatif-prix`,
  `https://${HOST}/travel-ideas/mekong-flusskreuzfahrt-vergleich-preise`,
  `https://${HOST}/travel-ideas/3-days-vs-7-days`,
  `https://${HOST}/travel-ideas/upstream-vs-downstream`,
  `https://${HOST}/travel-ideas/insider-secrets`,
  `https://${HOST}/travel-ideas/aqua-mekong-vs-heritage-line`,
  `https://${HOST}/travel-ideas/mekong-cruise-cost`,
  `https://${HOST}/travel-ideas/luxury-cruises`,
  `https://${HOST}/travel-ideas/floating-markets`,
  `https://${HOST}/travel-ideas/cajuput-forests`,
  `https://${HOST}/travel-ideas/craft-villages`,
  `https://${HOST}/travel-ideas/hidden-mekong`,
  `https://${HOST}/travel-ideas/ben-tre-authentic`,
  `https://${HOST}/travel-ideas/slow-day`,
  `https://${HOST}/travel-ideas/hate-crowds`,
  `https://${HOST}/travel-ideas/redefining-luxury`,
  // Core Ships
  `https://${HOST}/ships/aqua-mekong`,
  `https://${HOST}/ships/jayavarman`,
  `https://${HOST}/ships/the-jahan`,
  `https://${HOST}/ships/mekong-jewel`,
  `https://${HOST}/ships/victoria-mekong`,
  `https://${HOST}/ships/mekong-princess`,
  `https://${HOST}/ships/mekong-navigator`,
  `https://${HOST}/ships/anouvong`,
  `https://${HOST}/ships/bassac-pandaw`,
  `https://${HOST}/ships/mekong-pandaw`
];

async function submitToIndexNow(endpoint, name) {
  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: URLS
  };

  try {
    console.log(`📡 Pinging ${name} (${endpoint}) with ${URLS.length} URLs...`);
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload)
    });

    if (res.ok || res.status === 200 || res.status === 202) {
      console.log(`✅ ${name} IndexNow submission successful! Status: ${res.status}`);
      return true;
    } else {
      const text = await res.text();
      console.warn(`⚠️ ${name} returned HTTP ${res.status}: ${text}`);
      return false;
    }
  } catch (err) {
    console.error(`❌ Error pinging ${name}:`, err.message);
    return false;
  }
}

async function main() {
  console.log("=================================================");
  console.log("⚡ INSTANT INDEXNOW NOTIFICATION RUNNER");
  console.log(`🌐 Target Host: https://${HOST}`);
  console.log(`🔑 Verification Key: ${KEY}`);
  console.log("=================================================\n");

  await submitToIndexNow("https://api.indexnow.org/indexnow", "IndexNow Global (api.indexnow.org)");
  await submitToIndexNow("https://www.bing.com/indexnow", "Microsoft Bing (bing.com)");

  console.log("\n🎉 IndexNow push completed!");
}

main().catch(console.error);
