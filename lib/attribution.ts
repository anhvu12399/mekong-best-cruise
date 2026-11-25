const PARAMS = ["utm_source", "utm_medium", "utm_campaign", "ref", "ai_source", "gclid", "fbclid"] as const
const FIRST_TOUCH_KEYS = ["mrc_entry_referrer", "mrc_landing_page", ...PARAMS.map((p) => `mrc_${p}`)] as const
const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000

const AI_HOSTS: Array<[RegExp, string]> = [
  [/(^|\.)chatgpt\.com$|(^|\.)chat\.openai\.com$/i, "ChatGPT"],
  [/(^|\.)perplexity\.ai$/i, "Perplexity"],
  [/(^|\.)claude\.ai$/i, "Claude"],
  [/(^|\.)gemini\.google\.com$/i, "Gemini"],
  [/(^|\.)copilot\.microsoft\.com$/i, "Microsoft Copilot"],
  [/(^|\.)you\.com$/i, "You.com"],
  [/(^|\.)poe\.com$/i, "Poe"],
  [/(^|\.)phind\.com$/i, "Phind"],
]

export interface LeadAttribution {
  entryReferrer: string
  landingPage: string
  utmSource: string
  utmMedium: string
  utmCampaign: string
  gclid: string
  fbclid: string
  referralParam: string
  aiSourceParam: string
  detectedAiPlatform: string
}

export function detectAiPlatform(referrer: string, search = ""): string {
  try {
    const params = new URLSearchParams(search)
    const aiParam = (params.get("ai_source") || "").trim().toLowerCase()
    if (aiParam) {
      if (aiParam.includes("chatgpt") || aiParam.includes("openai")) return "ChatGPT"
      if (aiParam.includes("perplexity")) return "Perplexity"
      if (aiParam.includes("claude")) return "Claude"
      if (aiParam.includes("gemini")) return "Gemini"
      if (aiParam.includes("copilot")) return "Microsoft Copilot"
      if (["mcp", "a2a", "nlweb", "md", "llms-full", "llms", "api", "api-estimate"].includes(aiParam)) {
        return `AI Agent (${aiParam})`
      }
      return `AI (${aiParam})`
    }
    const utm = (params.get("utm_source") || "").trim().toLowerCase()
    if (utm === "chatgpt.com" || utm === "chatgpt") return "ChatGPT"
    if (utm === "perplexity.ai" || utm === "perplexity") return "Perplexity"
    if (utm === "claude.ai" || utm === "claude") return "Claude"
    if (utm === "gemini.google.com" || utm === "gemini") return "Gemini"
    if (utm === "copilot.microsoft.com" || utm === "copilot") return "Microsoft Copilot"
  } catch {}

  try {
    if (referrer && referrer !== "Unknown (No Referrer)") {
      const host = new URL(referrer).hostname
      for (const [re, name] of AI_HOSTS) {
        if (re.test(host)) return name
      }
    }
  } catch {}
  return ""
}

function captureInto(store: Storage, href: string, referrer: string) {
  if (store.getItem("mrc_landing_page")) return
  const url = new URL(href)
  let external = ""
  try {
    const ref = new URL(referrer)
    if (ref.hostname !== url.hostname) external = ref.href
  } catch {}
  store.setItem("mrc_entry_referrer", external || "Unknown (No Referrer)")
  store.setItem("mrc_landing_page", url.href)
  for (const key of PARAMS) {
    const val = url.searchParams.get(key)
    if (val) store.setItem(`mrc_${key}`, val)
  }
}

/** Persist 30-day first-touch attribution across localStorage and sessionStorage. */
export function persistFirstTouch(href: string, referrer: string) {
  if (typeof window === "undefined") return
  const now = Date.now()
  try {
    const exp = Number(localStorage.getItem("mrc_ft_exp") || "0")
    if (exp && now > exp) {
      for (const k of FIRST_TOUCH_KEYS) localStorage.removeItem(k)
      localStorage.removeItem("mrc_ft_exp")
    }
    if (!sessionStorage.getItem("mrc_landing_page") && localStorage.getItem("mrc_landing_page")) {
      for (const k of FIRST_TOUCH_KEYS) {
        const v = localStorage.getItem(k)
        if (v) sessionStorage.setItem(k, v)
      }
    }
    captureInto(sessionStorage, href, referrer)
    if (!localStorage.getItem("mrc_landing_page") && sessionStorage.getItem("mrc_landing_page")) {
      for (const k of FIRST_TOUCH_KEYS) {
        const v = sessionStorage.getItem(k)
        if (v) localStorage.setItem(k, v)
      }
      localStorage.setItem("mrc_ft_exp", String(now + THIRTY_DAYS_MS))
    }
    const url = new URL(href)
    const aiParam = url.searchParams.get("ai_source")
    if (aiParam) {
      sessionStorage.setItem("mrc_ai_source", aiParam)
      localStorage.setItem("mrc_ai_source", aiParam)
      localStorage.setItem("mrc_ft_exp", String(now + THIRTY_DAYS_MS))
    }
  } catch {
    try {
      captureInto(sessionStorage, href, referrer)
    } catch {}
  }
}

export function readLeadAttribution(): LeadAttribution {
  const get = (k: string) => {
    try {
      return sessionStorage.getItem(k) || localStorage.getItem(k) || ""
    } catch {
      return ""
    }
  }
  const fallbackRef =
    typeof document !== "undefined" &&
    document.referrer &&
    typeof window !== "undefined" &&
    !document.referrer.includes(window.location.hostname)
      ? document.referrer
      : "Unknown (No Referrer)"

  const entryReferrer = get("mrc_entry_referrer") || fallbackRef
  const landingPage = get("mrc_landing_page") || (typeof window !== "undefined" ? window.location.href : "/")
  const utmSource = get("mrc_utm_source")
  const utmMedium = get("mrc_utm_medium")
  const utmCampaign = get("mrc_utm_campaign")
  const gclid = get("mrc_gclid")
  const fbclid = get("mrc_fbclid")
  const referralParam = get("mrc_ref")
  const aiSourceParam = get("mrc_ai_source")

  let landingSearch = ""
  try {
    landingSearch = new URL(landingPage).search
  } catch {}
  const currentSearch = typeof window !== "undefined" ? window.location.search : ""

  const detectedAiPlatform =
    detectAiPlatform(entryReferrer, currentSearch) ||
    detectAiPlatform(entryReferrer, landingSearch) ||
    (aiSourceParam ? detectAiPlatform("", `?ai_source=${encodeURIComponent(aiSourceParam)}`) : "") ||
    (utmSource ? detectAiPlatform("", `?utm_source=${encodeURIComponent(utmSource)}`) : "")

  return {
    entryReferrer,
    landingPage,
    utmSource,
    utmMedium,
    utmCampaign,
    gclid,
    fbclid,
    referralParam,
    aiSourceParam,
    detectedAiPlatform,
  }
}
