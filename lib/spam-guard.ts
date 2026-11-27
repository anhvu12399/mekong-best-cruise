export interface SpamCheckInput {
  name?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
  notes?: string;
  honeypot?: string;
  website?: string;
  company?: string;
  extraText?: string | string[];
}

export interface SpamCheckResult {
  isSpam: boolean;
  reason: string;
  score: number;
}
// Master Zero-Friction Multilingual Anti-Spam Shield for all 9 travel websites.
// Blocks automated directory/catalogue spam (e.g. travellego.com), multilingual PR/press/SEO/ChatGPT-ranking
// cold outreach (EN/ES/FR/DE/IT/PT), web-agency/backlink spam, disposable emails, and self-pitching domains
// with ZERO false positives on genuine travelers (including travelers bringing ChatGPT itineraries or hotel links).

const BLOCKED_DOMAINS = new Set([
  'travellego.com',
]);

const DISPOSABLE_EMAIL_DOMAINS = new Set([
  'mailinator.com', 'guerrillamail.com', 'guerrillamailblock.com', 'sharklasers.com',
  'tempmail.com', 'temp-mail.org', 'yopmail.com', '10minutemail.com', 'trashmail.com',
  'throwawaymail.com', 'burnermail.io', 'getairmail.com', 'dispostable.com', 'fakeinbox.com',
  'crazymailing.com', 'mytempemail.com', 'dropmail.me', 'maildrop.cc', 'pokemail.net',
  'spam4.me', 'mohmal.com', 'tempr.email', 'getnada.com', 'inboxbear.com',
]);

const CONSUMER_EMAIL_DOMAINS = new Set([
  'gmail.com', 'googlemail.com', 'yahoo.com', 'yahoo.co.uk', 'yahoo.fr', 'yahoo.de',
  'yahoo.es', 'yahoo.it', 'yahoo.ca', 'yahoo.com.au', 'yahoo.co.jp', 'ymail.com',
  'hotmail.com', 'hotmail.co.uk', 'hotmail.fr', 'hotmail.es', 'hotmail.de', 'hotmail.it',
  'outlook.com', 'outlook.co.uk', 'outlook.fr', 'outlook.de', 'outlook.es', 'live.com',
  'live.co.uk', 'msn.com', 'icloud.com', 'me.com', 'mac.com', 'aol.com', 'proton.me',
  'protonmail.com', 'pm.me', 'zoho.com', 'fastmail.com', 'gmx.com', 'gmx.de', 'gmx.net',
  'web.de', 't-online.de', 'orange.fr', 'wanadoo.fr', 'free.fr', 'sfr.fr', 'laposte.net',
  'btinternet.com', 'sky.com', 'virginmedia.com', 'comcast.net', 'verizon.net', 'att.net',
  'sbcglobal.net', 'cox.net', 'bell.net', 'rogers.com', 'shaw.ca', 'bigpond.com',
  'optusnet.com.au', 'xtra.co.nz', 'qq.com', '163.com', '126.com', 'naver.com',
  'daum.net', 'hanmail.net', 'docomo.ne.jp', 'softbank.ne.jp', 'libero.it', 'virgilio.it',
  'terra.es', 'telefonica.net', 'uol.com.br', 'mail.ru', 'yandex.ru', 'duck.com',
  'ziggo.nl', 'kpnmail.nl', 'xs4all.nl', 'planet.nl', 'hetnet.nl', 'home.nl',
  'telenet.be', 'skynet.be', 'proximus.be', 'bluewin.ch', 'hispeed.ch', 'aon.at',
]);

const SAFE_REFERENCE_DOMAINS = new Set([
  // Own portfolio brands
  'mywaytravel.com', 'absoluteasiatours.com', 'vietnamprivatetours.com',
  'amazingbiketours.com', 'mekongrivercruise.com', 'privateusatours.com',
  'shanghaiprivatetours.com', 'tailormadevietnam.com', 'taiwanprivatetours.com',
  // Travel / maps / AI / hotel domains genuine travelers often paste
  'tripadvisor.com', 'booking.com', 'airbnb.com', 'expedia.com', 'agoda.com',
  'google.com', 'goo.gl', 'viator.com', 'getyourguide.com', 'klook.com',
  'lonelyplanet.com', 'wikivoyage.org', 'wikipedia.org', 'rome2rio.com',
  'skyscanner.com', 'kayak.com', 'youtube.com', 'youtu.be', 'instagram.com',
  'facebook.com', 'whatsapp.com', 'wa.me', 'chatgpt.com', 'openai.com',
  'perplexity.ai', 'claude.ai', 'aman.com', 'fourseasons.com', 'sixsenses.com',
  'belmond.com', 'hyatt.com', 'marriott.com', 'hilton.com', 'ihg.com', 'accor.com',
  'rosewoodhotels.com', 'anantara.com', 'sofitel.com', 'intercontinental.com',
  'heritage-line.com', 'aquaexpeditions.com', 'pandaw.com', 'vietnamairlines.com',
  'singaporeair.com', 'evaair.com', 'china-airlines.com', 'ana.co.jp', 'jal.co.jp',
  'cathaypacific.com', 'emirates.com', 'qatarairways.com',
]);

function stripAccents(s: unknown): string {
  return String(s || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ß/g, 'ss');
}

function normalizeText(s: unknown): string {
  return stripAccents(String(s || ''))
    .toLowerCase()
    .replace(/[«»“”„‟]/g, '"')
    .replace(/[‘’‚‛]/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function getBaseDomain(host: unknown): string {
  const clean = String(host || '').toLowerCase().replace(/^www\./, '').replace(/\.+$/, '');
  const parts = clean.split('.').filter(Boolean);
  if (parts.length <= 2) return clean;
  const lastTwo = parts.slice(-2).join('.');
  if (/^(?:co|com|org|net|gov|edu)\.[a-z]{2}$/.test(lastTwo) && parts.length >= 3) {
    return parts.slice(-3).join('.');
  }
  return lastTwo;
}

function isDomainBlocked(domain: unknown): boolean {
  if (!domain) return false;
  const d = String(domain).toLowerCase();
  const base = getBaseDomain(d);
  return BLOCKED_DOMAINS.has(d) || BLOCKED_DOMAINS.has(base);
}

function extractBareAndFullDomains(text: unknown): string[] {
  const found = new Set<string>();
  const lower = String(text || '').toLowerCase();
  // Match domains NOT preceded by '@' (actual website mentions / URLs)
  for (const m of lower.matchAll(/(?:https?:\/\/|www\.|(?<![a-z0-9@._-]))([a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9-]{2,63})+\.(?:com|net|org|io|co|ai|biz|info|app|agency|digital|media|press|news|travel|tours|xyz|top|online|site|store|tech|pro|es|fr|de|it|pt|uk|ru|su|cn|eu|nl|be|ch|at|us|ca|au))\b/gi)) {
    const dom = m[1].replace(/^www\./, '');
    if (dom) found.add(dom);
  }
  // Also catch simple 2-label domains like travellego.com
  for (const m of lower.matchAll(/(?<![a-z0-9@._-])([a-z0-9][a-z0-9-]{1,61}\.(?:com|net|org|io|co|ai|biz|info|app|agency|digital|media|press|news|travel|tours|xyz|top|online|site|store|tech|pro|es|fr|de|it|pt|uk|ru|su|cn|eu))\b/gi)) {
    const dom = m[1].replace(/^www\./, '');
    if (dom) found.add(dom);
  }
  return [...found];
}

const URL_IN_NAME_RE = /(?:https?:\/\/|www\.|<a\s|href=|\[url=|\b[a-z0-9-]+\.(?:com|net|org|io|ru|su|cn|xyz|top|info|biz|es|fr|de)\b)/i;

// High-confidence instant spam patterns (accent-stripped lowercase)
const INSTANT_SPAM_PATTERNS = [
  // Classic blackhat / casino / pharma / crypto / adult / link spam
  /\b(?:casino|online poker|slot[- ]machine|buy[- ]?backlinks?|link[- ]building|guest[- ]?post(?:ing|s)?|link[- ]exchange|domain authority|seo[- ](?:services?|agency|ranking|package|audit|expert|specialist|company)|viagra|cialis|porn(?:ography)?|sex[- ]video|forex[- ]trading|crypto[- ]recovery|loan[- ]offer|whatsapp[- ]group[- ]link|telegram[- ]channel[- ]link)\b/i,

  // Directory / catalogue / free-listing / no-commission spam (EN / ES / FR / DE / IT / PT)
  /\b(?:travel catalog(?:ue)?|add your listing|claim your listing|submit your listing|list your (?:business|company|property|agency|hotel|tours?)|free listing|directory of (?:places|businesses|tour operators))\b/i,
  /\b(?:costs? nothing.{0,45}no commission|no commission.{0,45}costs? nothing|zero commission|0%\s*commission)\b/i,
  /\b(?:we are building\s+(?:a\s+)?[a-z0-9\s,'"-]{0,40}\b(?:catalog(?:ue)?|directory|marketplace|platform)|anade tu ficha|anadir tu negocio|sin comisiones|directorio de empresas|ajouter votre etablissement|sans commission|kostenloser eintrag|ohne provision)\b/i,

  // Paid PR / press release / digital newspaper / journalist outreach (EN / ES / FR / DE / IT / PT)
  /\b(?:publicar una noticia|periodicos digitales|medios digitales|nuestros periodistas|nota de prensa|articulo patrocinado|publicar un articulo|publier un article|journaux numeriques|communique de presse|nos journalistes|presseartikel|pressemitteilung|artikel veroffentlichen|unsere journalisten|pubblicare un articolo|giornali digitali|publicar uma noticia|jornais digitais)\b/i,
  /\b(?:publish (?:a |an )?(?:news )?article about|our journalists write|digital newspapers we work with|paid press release|sponsored (?:article|post|content) placement|featured in \d+\+?\s*(?:digital )?(?:newspapers|media outlets|publications))\b/i,

  // Pitching Google / ChatGPT ranking services (explicitly selling ranking, never triggered by tourists mentioning ChatGPT)
  /\b(?:arriba en google|salir en google|recomendados por chatgpt|posicionar tu (?:web|empresa|negocio)|posicionamiento (?:seo|web|google)|first page of google|page 1 of google|rank (?:higher |#1 |at the top )?(?:on|in) google|get (?:your (?:business|company|brand|website) )?recommended by (?:chatgpt|ai)|referencement google|recommande par chatgpt|bei google ganz oben|von chatgpt empfohlen)\b/i,

  // Web redesign / marketing / lead-gen / agency outreach
  /\b(?:redesign your website|improve your website|website redesign|boost your (?:website |online )?(?:traffic|sales|ranking|visibility)|increase your (?:website )?(?:traffic|rankings?|conversions?)|lead generation service|b2b leads|cold email(?:ing)? service|offshore developers?|web development agency|digital marketing agency|social media management service|virtual assistant service)\b/i,
];

// Weighted B2B outreach signals (score >= 3 => spam)
const WEIGHTED_SIGNALS = [
  {
    weight: 2,
    reason: 'b2b_pricing_guarantee',
    re: /\b(?:tarifas desde|garantia de devolucion|money[- ]back guarantee|starting (?:at|from)\s*(?:\$|€|£)?\s*\d+\s*(?:eur|euros?|usd|\$|€)?|pricing plans?|costs? nothing|no commission|zero commission|tarifs a partir de|ab \d+\s*(?:eur|euro|€))\b/i,
  },
  {
    weight: 2,
    reason: 'cold_outreach_optout',
    re: /(?:con un "?no"? me basta|si no os interesa|si no te interesa|no insisto|if you(?:'re| are) not interested|just reply "?no"?|reply stop|opt[- ]out|unsubscribe|si cela ne vous interesse pas|wenn (?:sie )?kein interesse|se non (?:vi |ti )?interessa)/i,
  },
  {
    weight: 2,
    reason: 'pr_press_offer',
    re: /\b(?:periodicos|prensa|periodistas|medios de comunicacion|apruebas el texto|lo redactan|publicada en \d+ dias|press release|news outlets?|our journalists|approve the text|published in \d+ days)\b/i,
  },
  {
    weight: 2,
    reason: 'seo_ai_ranking_pitch',
    re: /(?:quienes deciden son google|google and chatgpt decide|eligen que empresas ponen arriba|salis vosotros|que te encuentren cuando te buscan|que vean prensa|get found on google|ai search visibility|search engine optimization|boost your seo|improve your (?:seo|ranking)|subir en google|aparecer en google)/i,
  },
  {
    weight: 2,
    reason: 'b2b_target_pitch',
    re: /\b(?:places like yours|businesses like yours|companies like yours|agencies like yours|your listing|your website|your google|our agency|our platform|our directory|our catalog(?:ue)?|trabajamos con empresas como la vuestra|negocios como el tuyo)\b/i,
  },
  {
    weight: 1,
    reason: 'cold_call_cta',
    re: /(?:me pasas un telefono|te lo explico en \d+ minutos|quick \d+[- ]minute call|hop on a quick call|\d+[- ]minute demo|book a demo|schedule a demo|write to [a-z0-9._%+-]+@|escribe a [a-z0-9._%+-]+@)/i,
  },
];

const SELF_DOMAIN_PITCH_CUE_RE = /\b(?:we are building|add your|your listing|catalog(?:ue)?|directory|commission|costs? nothing|write to|our platform|our service|our agency|partner with|collaborate|tarifas|garantia|periodicos|noticia|prensa|seo|google|chatgpt|website|traffic|leads|marketing|rank|unsubscribe|no insisto)\b/i;

/**
 * Inspect a lead / enquiry / contact submission for spam.
 * Returns { isSpam: boolean, reason: string, score: number }.
 */
export function detectFormSpam(input: SpamCheckInput = {}): SpamCheckResult {
  const nameRaw = String(input.name || `${input.firstName || ''} ${input.lastName || ''}`).trim();
  const emailRaw = String(input.email || '').trim().toLowerCase();
  const messageRaw = String(input.message || input.notes || '').trim();
  const extraRaw = Array.isArray(input.extraText)
    ? input.extraText.filter(Boolean).join('\n')
    : String(input.extraText || '');

  // 0. Optional honeypot check if caller passes it
  const hp = String(input.honeypot || input.website || input.company || '').trim();
  if (hp) return { isSpam: true, reason: 'honeypot', score: 10 };

  const emailDomain = emailRaw.includes('@') ? emailRaw.split('@')[1].trim().toLowerCase() : '';
  const emailBaseDomain = getBaseDomain(emailDomain);
  const fullRaw = [nameRaw, emailRaw, messageRaw, extraRaw].filter(Boolean).join('\n');
  const normBody = normalizeText([messageRaw, extraRaw].filter(Boolean).join('\n'));
  const normAll = normalizeText(fullRaw);

  // 1. Blocked spammer domains (in sender email OR body) & disposable emails
  if (emailDomain && DISPOSABLE_EMAIL_DOMAINS.has(emailBaseDomain)) {
    return { isSpam: true, reason: `disposable_email:${emailBaseDomain}`, score: 10 };
  }
  if (isDomainBlocked(emailDomain)) {
    return { isSpam: true, reason: `blocked_sender_domain:${emailBaseDomain}`, score: 10 };
  }
  for (const blocked of BLOCKED_DOMAINS) {
    if (normAll.includes(blocked)) {
      return { isSpam: true, reason: `blocked_domain_mention:${blocked}`, score: 10 };
    }
  }

  // 2. URL / HTML / BBCode injected into Name field
  if (nameRaw && URL_IN_NAME_RE.test(nameRaw)) {
    return { isSpam: true, reason: 'url_in_name', score: 10 };
  }

  // 3. Self-referential corporate domain promotion (e.g. nils@travellego.com mentioning travellego.com)
  if (
    emailBaseDomain &&
    !CONSUMER_EMAIL_DOMAINS.has(emailDomain) &&
    !CONSUMER_EMAIL_DOMAINS.has(emailBaseDomain) &&
    !SAFE_REFERENCE_DOMAINS.has(emailBaseDomain) &&
    normBody
  ) {
    const bodyDomains = extractBareAndFullDomains(messageRaw + '\n' + extraRaw);
    const mentionsOwnSiteUrl = bodyDomains.some((d) => getBaseDomain(d) === emailBaseDomain);
    const mentionsOwnDomainAnywhere = normBody.includes(emailBaseDomain);
    if (mentionsOwnSiteUrl || (mentionsOwnDomainAnywhere && SELF_DOMAIN_PITCH_CUE_RE.test(normBody))) {
      return { isSpam: true, reason: `self_domain_pitch:${emailBaseDomain}`, score: 9 };
    }
  }

  // 4. High-confidence instant spam patterns
  for (const re of INSTANT_SPAM_PATTERNS) {
    const m = normAll.match(re);
    if (m) {
      return { isSpam: true, reason: `instant_pattern:${m[0].slice(0, 40)}`, score: 8 };
    }
  }

  // 5. Weighted multilingual B2B cold-outreach heuristic
  let score = 0;
  const reasons: string[] = [];
  for (const sig of WEIGHTED_SIGNALS) {
    if (sig.re.test(normBody)) {
      score += sig.weight;
      reasons.push(sig.reason);
    }
  }

  // Check for external non-travel website URLs mentioned in the message
  const externalDomains = extractBareAndFullDomains(messageRaw + '\n' + extraRaw)
    .map(getBaseDomain)
    .filter((d) => d && !SAFE_REFERENCE_DOMAINS.has(d) && !CONSUMER_EMAIL_DOMAINS.has(d));
  const uniqueExternalDomains = [...new Set(externalDomains)];
  if (uniqueExternalDomains.length >= 1) {
    score += 1;
    reasons.push(`external_domain:${uniqueExternalDomains[0]}`);
  }

  if (score >= 3) {
    return { isSpam: true, reason: `weighted_spam:${reasons.join('+')}`, score };
  }

  return { isSpam: false, reason: 'ok', score };
}

export function isAllowedOrigin(request: Request, extraHosts: string[] = []): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  try {
    const h = new URL(origin).hostname.toLowerCase();
    const self = new URL(request.url).hostname.toLowerCase();
    const allowed = new Set([
      self,
      self.replace(/^www\./, ""),
      self.startsWith("www.") ? self : "www." + self,
      "localhost",
      "127.0.0.1",
      ...extraHosts.map((x) => String(x || "").toLowerCase().replace(/^www\./, "")),
    ]);
    if (allowed.has(h) || allowed.has(h.replace(/^www\./, ""))) return true;
    if (h.endsWith(".pages.dev") || h.endsWith(".workers.dev") || h.endsWith(".vercel.app")) return true;
    return false;
  } catch {
    return false;
  }
}
