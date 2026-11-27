export const SITE_BRAND = "Mekong River Cruise"
export const DEFAULT_TITLE_SUFFIX = ` | ${SITE_BRAND}`
export const DEFAULT_TITLE_MAX_LEN = 65

function trimAtWord(text: string, maxLen: number): string {
  if (text.length <= maxLen) return text
  const slice = text.slice(0, maxLen)
  const cut = slice.replace(/\s+\S*$/, "").replace(/[\s|:—–,\-]+$/, "").trim()
  return cut.length >= 12 ? cut : slice.trim()
}

/**
 * Strips any existing trailing brand suffix (e.g. "| Mekong River Cruise",
 * "— Mekong River Cruise", "| Mekong River Cruises") and returns a final
 * `<title>` string guaranteed to be `<= maxLen` characters (default 65),
 * strictly under Bing's 70-character threshold with zero duplicate brand suffixes.
 */
export function clampTitle(
  raw: string,
  opts?: { maxLen?: number; suffix?: string },
): string {
  const maxLen = opts?.maxLen ?? DEFAULT_TITLE_MAX_LEN
  const suffix = opts?.suffix ?? DEFAULT_TITLE_SUFFIX

  let base = raw.replace(/\s+/g, " ").trim()
  const trailingBrandRe = /\s*(?:\||—|–|-)\s*Mekong River Cruises?\s*$/i
  while (trailingBrandRe.test(base)) {
    base = base.replace(trailingBrandRe, "").trim()
  }

  const hasBrand = /mekong river cruise/i.test(base)

  if (!hasBrand && suffix && base.length + suffix.length <= maxLen) {
    return `${base}${suffix}`
  }

  if (base.length <= maxLen) {
    return base
  }

  return trimAtWord(base, maxLen)
}

/**
 * Convenience helper returning a Next.js Metadata `{ absolute: string }` title
 * object so root `layout.tsx`'s `title.template` never appends a second brand suffix.
 */
export function buildTitle(
  raw: string,
  opts?: { maxLen?: number; suffix?: string },
): { absolute: string } {
  return { absolute: clampTitle(raw, opts) }
}
