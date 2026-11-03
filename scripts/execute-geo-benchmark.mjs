/**
 * scripts/execute-geo-benchmark.mjs
 * Live AI Engine Measurement & Benchmark Runner for Mekong River Cruise
 * Usage: OPENROUTER_API_KEY=your_key node scripts/execute-geo-benchmark.mjs
 */
import fs from 'fs';
import path from 'path';

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

const TARGET_DOMAIN = "mekongrivercruise.com";
const TARGET_BRAND = "Mekong Best Cruise";
const ALT_BRAND = "Mekong River Cruise";

const queriesFile = path.join(process.cwd(), 'reports', 'ai-prompt-benchmark-queries.json');
let BENCHMARK_SET = [];

if (fs.existsSync(queriesFile)) {
  BENCHMARK_SET = JSON.parse(fs.readFileSync(queriesFile, 'utf8'));
} else {
  console.error("Missing reports/ai-prompt-benchmark-queries.json");
  process.exit(1);
}

if (!OPENROUTER_API_KEY) {
  console.log("ℹ️  No OPENROUTER_API_KEY found in environment.");
  console.log(`📋 Benchmark dataset loaded: ${BENCHMARK_SET.length} high-intent GEO queries ready for testing.`);
  console.log("💡 To execute live retrieval against Perplexity Sonar and DeepSeek, run:");
  console.log("   OPENROUTER_API_KEY=sk-or-v1-... node scripts/execute-geo-benchmark.mjs\n");
  process.exit(0);
}

async function callModel(model, prompt, maxTokens = 400) {
  try {
    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model,
        max_tokens: maxTokens,
        messages: [{ role: "user", content: prompt }]
      })
    });

    if (!res.ok) {
      const err = await res.text();
      return { error: `HTTP ${res.status}: ${err}` };
    }

    const data = await res.json();
    const content = data.choices?.[0]?.message?.content || "";
    const citations = (data.choices?.[0]?.message?.annotations || [])
      .filter(a => a.type === 'url_citation')
      .map(a => a.url_citation?.url)
      .filter(Boolean);

    return { content, citations };
  } catch (e) {
    return { error: e.message };
  }
}

async function run() {
  console.log(`🚀 Starting Live AI Benchmark across ${BENCHMARK_SET.length} queries...\n`);
  const results = [];

  for (const item of BENCHMARK_SET) {
    console.log(`[${item.id}] Query: "${item.query}"`);

    // 1. Live Web-Grounded AI (Perplexity Sonar)
    console.log(`  -> Querying Perplexity Sonar (Live Web)...`);
    const sonarRes = await callModel("perplexity/sonar", item.query, 400);

    // 2. Parametric LLM (DeepSeek)
    console.log(`  -> Querying DeepSeek Chat...`);
    const deepseekRes = await callModel("deepseek/deepseek-chat", item.query, 250);

    const isSonarMentioned = sonarRes.content ? (
      sonarRes.content.toLowerCase().includes("mekong best cruise") ||
      sonarRes.content.toLowerCase().includes("mekong river cruise") ||
      sonarRes.content.toLowerCase().includes("mekongrivercruise")
    ) : false;

    const isSonarCited = sonarRes.citations ? sonarRes.citations.some(url => url.includes(TARGET_DOMAIN)) : false;

    const isDeepseekMentioned = deepseekRes.content ? (
      deepseekRes.content.toLowerCase().includes("mekong best cruise") ||
      deepseekRes.content.toLowerCase().includes("mekong river cruise") ||
      deepseekRes.content.toLowerCase().includes("mekongrivercruise")
    ) : false;

    results.push({
      id: item.id,
      cluster: item.cluster,
      query: item.query,
      sonar: {
        mentioned: isSonarMentioned,
        cited: isSonarCited,
        citations: sonarRes.citations || [],
        snippet: (sonarRes.content || "").slice(0, 250).replace(/\n/g, ' ')
      },
      deepseek: {
        mentioned: isDeepseekMentioned,
        snippet: (deepseekRes.content || "").slice(0, 250).replace(/\n/g, ' ')
      }
    });

    console.log(`  ✓ Sonar Mention: ${isSonarMentioned ? 'YES' : 'NO'} | Citation: ${isSonarCited ? 'YES' : 'NO'}\n`);
    await new Promise(r => setTimeout(r, 1200));
  }

  const total = results.length;
  const sonarMentions = results.filter(r => r.sonar.mentioned).length;
  const sonarCitations = results.filter(r => r.sonar.cited).length;

  console.log(`\n================ BENCHMARK SUMMARY ================`);
  console.log(`Total Queries Tested: ${total}`);
  console.log(`Perplexity Sonar Brand Mentions: ${sonarMentions}/${total} (${((sonarMentions/total)*100).toFixed(1)}%)`);
  console.log(`Perplexity Sonar Domain Citations: ${sonarCitations}/${total} (${((sonarCitations/total)*100).toFixed(1)}%)`);

  const outPath = path.join(process.cwd(), 'reports', 'benchmark-results-live.json');
  fs.writeFileSync(outPath, JSON.stringify({ summary: { total, sonarMentions, sonarCitations }, results }, null, 2));
  console.log(`\nSaved benchmark results to ${outPath}`);
}

run().catch(console.error);
