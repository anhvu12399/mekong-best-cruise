import { NextRequest, NextResponse } from "next/server"

const RESEND_API_KEY = process.env.RESEND_API_KEY || ""

function escapeHtml(val: unknown): string {
  return String(val ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

async function sendEmail({
  from,
  to,
  subject,
  html,
}: {
  from: string
  to: string[]
  subject: string
  html: string
}) {
  if (!RESEND_API_KEY) {
    console.warn("RESEND_API_KEY missing; skipping outbound Resend call in local environment.")
    return { skipped: true }
  }
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from, to, subject, html }),
  })
  if (!res.ok) {
    const err = await res.json()
    throw new Error(JSON.stringify(err))
  }
  return res.json()
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    // Honeypot check
    if (body.company && String(body.company).trim()) {
      return NextResponse.json({ success: true })
    }

    const {
      title,
      name,
      firstName,
      lastName,
      email,
      phone,
      country,
      destinations,
      travelWindow,
      travelers,
      guests,
      travelStyle,
      budget,
      notes,
      ship,
      cabin,
      route,
      nights,
      month,
      inquiryType,
      sourcePath,
      referralSource,
      attribution,
    } = body

    const cleanEmail = String(email || "").trim()
    const cleanName = String(name || `${firstName || ""} ${lastName || ""}`).trim()

    if (!cleanEmail || !cleanEmail.includes("@") || cleanName.length < 2) {
      return NextResponse.json(
        { error: "Please provide your name and a valid email address." },
        { status: 400 },
      )
    }

    const greetingFirstName = String(firstName || cleanName.split(/\s+/)[0] || "Traveler").trim()
    const fullName = `${title ? `${String(title).trim()} ` : ""}${cleanName}`.trim()

    // Capture visitor country server-side from Vercel geo headers
    const vercelCountry = request.headers.get("x-vercel-ip-country") || ""
    const vercelCity = request.headers.get("x-vercel-ip-city") || ""
    const vercelRegion = request.headers.get("x-vercel-ip-country-region") || ""
    const geoLocation = [vercelCity, vercelRegion, vercelCountry].filter(Boolean).join(", ")
    const resolvedCountry = String(country || "").trim() || vercelCountry || "Not provided"

    const submittedAt = new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
      dateStyle: "full",
      timeStyle: "short",
    })

    const destList = Array.isArray(destinations) && destinations.length
      ? destinations.join(", ")
      : typeof destinations === "string" && destinations.trim()
        ? destinations.trim()
        : route
          ? String(route)
          : "Not specified"

    const windowMap: Record<string, string> = {
      "3months": "Within 3 months",
      "3-6months": "3–6 months",
      "6-12months": "6–12 months",
      "12months+": "Over 12 months",
    }
    const travelWindowLabel =
      (month ? `${String(month).trim()}${travelWindow ? ` (${windowMap[travelWindow] || travelWindow})` : ""}` : "") ||
      windowMap[travelWindow] ||
      travelWindow ||
      "Flexible"

    const guestCount = String(guests || travelers || "Not specified")
    const leadType = String(inquiryType || "Mekong Cruise Enquiry")
    const attr = (attribution && typeof attribution === "object" ? attribution : {}) as Record<string, string>
    const aiPlatform = attr.detectedAiPlatform || ""
    const attributionSummary =
      referralSource || aiPlatform || attr.utmSource || attr.aiSourceParam || "Direct / Organic"

    // ── Email 1: Detailed enquiry to sales team ──────────────────────────
    await sendEmail({
      from: "Mekong River Cruise <newsletter@mekongrivercruise.com>",
      to: ["sales@mekongrivercruise.com"],
      subject: `New ${leadType} from ${fullName}${ship ? ` — ${ship}` : ""}${aiPlatform ? ` [${aiPlatform}]` : ""}`,
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: Georgia, serif; background: #f0ede8; padding: 32px 16px; }
    .card { max-width: 640px; margin: 0 auto; background: #fff; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08); }
    .top-bar { height: 4px; background: linear-gradient(90deg, #c9a962, #e8d5a3, #c9a962); }
    .header { background: #0d1b2a; padding: 32px 36px; }
    .tag { font-size: 11px; letter-spacing: 0.25em; text-transform: uppercase; color: #c9a962; margin-bottom: 8px; }
    .brand { color: #fff; font-size: 22px; letter-spacing: 0.05em; }
    .badge { display: inline-block; background: #c9a962; color: #0d1b2a; font-size: 10px; font-weight: bold; letter-spacing: 0.15em; text-transform: uppercase; padding: 4px 12px; margin-top: 12px; }
    .body { padding: 36px; }
    .section-title { font-size: 10px; font-weight: bold; letter-spacing: 0.25em; text-transform: uppercase; color: #c9a962; border-bottom: 1px solid #e8e4de; padding-bottom: 8px; margin: 22px 0 16px; }
    .section-title:first-child { margin-top: 0; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 20px; }
    .field { background: #faf8f5; padding: 14px; border-left: 3px solid #c9a962; }
    .field.full { grid-column: 1 / -1; border-left-color: #0d1b2a; }
    .label { font-size: 10px; font-weight: bold; letter-spacing: 0.14em; text-transform: uppercase; color: #888; margin-bottom: 4px; }
    .value { font-size: 14px; color: #0d1b2a; font-weight: bold; word-break: break-word; }
    .notes-box { background: #f5f3ef; border: 1px solid #e8e4de; padding: 18px; margin-top: 8px; }
    .notes-text { font-size: 14px; color: #333; line-height: 1.65; white-space: pre-wrap; }
    .footer-bar { background: #f5f5f0; padding: 16px 36px; text-align: center; border-top: 1px solid #e8e4de; font-size: 12px; color: #888; }
  </style>
</head>
<body>
  <div class="card">
    <div class="top-bar"></div>
    <div class="header">
      <p class="tag">Internal Lead Notification</p>
      <p class="brand">Mekong River Cruise</p>
      <span class="badge">${escapeHtml(leadType)}</span>
    </div>
    <div class="body">
      <p class="section-title">Guest Information</p>
      <div class="grid">
        <div class="field"><p class="label">Full Name</p><p class="value">${escapeHtml(fullName)}</p></div>
        <div class="field"><p class="label">Email Address</p><p class="value">${escapeHtml(cleanEmail)}</p></div>
        <div class="field"><p class="label">Phone / WhatsApp</p><p class="value">${escapeHtml(phone || "Not provided")}</p></div>
        <div class="field"><p class="label">Country (Form / Vercel IP)</p><p class="value">${escapeHtml(resolvedCountry)}${geoLocation ? ` (${escapeHtml(geoLocation)})` : ""}</p></div>
      </div>

      <p class="section-title">Cruise Preferences</p>
      <div class="grid">
        <div class="field"><p class="label">Ship / Vessel</p><p class="value">${escapeHtml(ship || "Open to specialist match")}${cabin ? ` · ${escapeHtml(cabin)}` : ""}</p></div>
        <div class="field"><p class="label">Route / Destinations</p><p class="value">${escapeHtml(destList)}</p></div>
        <div class="field"><p class="label">Nights / Duration</p><p class="value">${escapeHtml(nights ? `${nights} nights` : "Not specified")}</p></div>
        <div class="field"><p class="label">Travelers</p><p class="value">${escapeHtml(guestCount)}</p></div>
        <div class="field"><p class="label">Travel Month / Window</p><p class="value">${escapeHtml(travelWindowLabel)}</p></div>
        <div class="field"><p class="label">Style &amp; Budget</p><p class="value">${escapeHtml([travelStyle, budget].filter(Boolean).join(" · ") || "Not specified")}</p></div>
      </div>

      <p class="section-title">Travel Notes / Draft Itinerary</p>
      <div class="notes-box">
        <p class="notes-text">${escapeHtml(notes || "No additional notes provided.")}</p>
      </div>

      <p class="section-title">First-Touch &amp; AI Attribution</p>
      <div class="grid">
        <div class="field"><p class="label">Attribution Summary</p><p class="value">${escapeHtml(attributionSummary)}</p></div>
        <div class="field"><p class="label">Detected AI Platform</p><p class="value">${escapeHtml(aiPlatform || "None detected")}</p></div>
        <div class="field"><p class="label">Entry Referrer</p><p class="value">${escapeHtml(attr.entryReferrer || "Unknown")}</p></div>
        <div class="field"><p class="label">First Landing Page</p><p class="value">${escapeHtml(attr.landingPage || sourcePath || "/plan-your-journey")}</p></div>
        <div class="field full"><p class="label">UTM / Campaign / AI Source Params</p><p class="value">${escapeHtml(
          [
            attr.aiSourceParam ? `ai_source=${attr.aiSourceParam}` : "",
            attr.utmSource ? `utm_source=${attr.utmSource}` : "",
            attr.utmMedium ? `utm_medium=${attr.utmMedium}` : "",
            attr.utmCampaign ? `utm_campaign=${attr.utmCampaign}` : "",
            attr.gclid ? `gclid=${attr.gclid}` : "",
            attr.fbclid ? `fbclid=${attr.fbclid}` : "",
            referralSource ? `self_reported=${referralSource}` : "",
          ]
            .filter(Boolean)
            .join(" | ") || "None",
        )}</p></div>
      </div>
      <p style="font-size:12px;color:#888;margin-top:14px;">Submitted on ${escapeHtml(submittedAt)} EST · Page: ${escapeHtml(sourcePath || "/plan-your-journey")}</p>
    </div>
    <div class="footer-bar">
      Mekong River Cruise · sales@mekongrivercruise.com · +1 315 998 1998
    </div>
  </div>
</body>
</html>
      `,
    })

    // ── Email 2: Confirmation to guest ───────────────────────────────────
    const customerHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mekong River Cruise — We have received your enquiry</title>
</head>
<body style="margin:0;padding:24px 12px;background:#ebeff2;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1e293b;">
  <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:4px;overflow:hidden;">
    <tr>
      <td style="background:#011b31;padding:24px 32px;">
        <div style="font-family:Georgia,serif;font-size:20px;color:#ffffff;letter-spacing:0.5px;">MEKONG RIVER CRUISE</div>
        <div style="font-size:10px;color:#c9a962;letter-spacing:2px;text-transform:uppercase;margin-top:4px;">BY MY WAY TRAVEL · HO CHI MINH CITY DESK</div>
      </td>
    </tr>
    <tr>
      <td style="padding:32px;">
        <p style="margin:0 0 16px;font-size:16px;color:#011b31;">Dear ${escapeHtml(greetingFirstName)},</p>
        <p style="margin:0 0 16px;font-size:14.5px;line-height:1.65;color:#334155;">
          Thank you for contacting <strong>Mekong River Cruise</strong>. Our Ho Chi Minh City river specialists have received your ${escapeHtml(leadType.toLowerCase())}${ship ? ` for <strong>${escapeHtml(ship)}</strong>` : ""}.
        </p>
        <p style="margin:0 0 16px;font-size:14.5px;line-height:1.65;color:#334155;">
          We will check live cabin availability, seasonal Tonle Sap water crossings, and verified partner tariffs, then reply by email within <strong>24 hours</strong>.
        </p>
        <p style="margin:0 0 22px;font-size:14.5px;line-height:1.65;color:#334155;">
          Need a faster answer? Call or message our concierge on WhatsApp at <strong>+1 315 998 1998</strong> or reply directly to <strong>sales@mekongrivercruise.com</strong>.
        </p>
        <p style="margin:0;font-size:13px;color:#64748b;border-top:1px solid #e2e8f0;padding-top:18px;line-height:1.6;">
          <strong>Mekong River Cruise Co., Ltd</strong> · A subsidiary of My Way Travel (My Way Luxury Travel LLC, NY DOS ID 7926729)<br/>
          VNAT International Tour Operator License No. 79-0743/2017/CDLQGVN-GP LHQT<br/>
          139 Nguyen Cu Trinh St, District 1, Ho Chi Minh City, Vietnam · <a href="https://www.mekongrivercruise.com" style="color:#011b31;">mekongrivercruise.com</a>
        </p>
      </td>
    </tr>
  </table>
</body>
</html>`

    await sendEmail({
      from: "Mekong River Cruise <newsletter@mekongrivercruise.com>",
      to: [cleanEmail],
      subject: `${greetingFirstName}, we received your Mekong River Cruise enquiry`,
      html: customerHtml,
    })

    return NextResponse.json({ success: true, detectedCountry: vercelCountry || null })
  } catch (err) {
    console.error("Enquiry error:", err)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
