import { NextRequest, NextResponse } from "next/server"

const RESEND_API_KEY = process.env.RESEND_API_KEY || ""

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
    const {
      title,
      firstName,
      lastName,
      email,
      phone,
      country,
      destinations,
      travelWindow,
      travelers,
      travelStyle,
      budget,
      notes,
    } = body

    if (!email || !firstName || !lastName) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const fullName = `${title ? title + " " : ""}${firstName} ${lastName}`.trim()
    const submittedAt = new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
      dateStyle: "full",
      timeStyle: "short",
    })
    const destList = Array.isArray(destinations) ? destinations.join(", ") : destinations || "Not specified"
    const windowMap: Record<string, string> = {
      "3months": "Within 3 months",
      "3-6months": "3–6 months",
      "6-12months": "6–12 months",
      "12months+": "Over 12 months",
    }
    const travelWindowLabel = windowMap[travelWindow] || travelWindow || "Not specified"

    // ── Email 1: Detailed enquiry to sales team ──────────────────────────
    await sendEmail({
      from: "Mekong River Cruise <newsletter@mekongrivercruise.com>",
      to: ["sales@mekongrivercruise.com"],
      subject: `✈️ New Journey Enquiry from ${fullName}`,
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
    .header { background: #0d1b2a; padding: 36px 40px; }
    .tag { font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase; color: #c9a962; margin-bottom: 8px; }
    .brand { color: #fff; font-size: 22px; letter-spacing: 0.05em; }
    .badge { display: inline-block; background: #c9a962; color: #0d1b2a; font-size: 10px; font-weight: bold; letter-spacing: 0.15em; text-transform: uppercase; padding: 4px 12px; margin-top: 14px; }
    .body { padding: 40px; }
    .section-title { font-size: 10px; font-weight: bold; letter-spacing: 0.25em; text-transform: uppercase; color: #c9a962; border-bottom: 1px solid #e8e4de; padding-bottom: 8px; margin-bottom: 20px; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 28px; }
    .field { background: #faf8f5; padding: 16px; border-left: 3px solid #c9a962; }
    .field.full { grid-column: 1 / -1; border-left-color: #0d1b2a; }
    .label { font-size: 10px; font-weight: bold; letter-spacing: 0.15em; text-transform: uppercase; color: #999; margin-bottom: 4px; }
    .value { font-size: 15px; color: #0d1b2a; font-weight: bold; }
    .notes-box { background: #f5f3ef; border: 1px solid #e8e4de; padding: 20px; margin-top: 8px; }
    .notes-text { font-size: 14px; color: #555; line-height: 1.7; white-space: pre-wrap; }
    .action-box { background: #0d1b2a; padding: 24px; margin-top: 28px; }
    .action-title { font-size: 10px; font-weight: bold; letter-spacing: 0.2em; text-transform: uppercase; color: #c9a962; margin-bottom: 12px; }
    .action-list { list-style: none; }
    .action-list li { font-size: 13px; color: rgba(255,255,255,0.7); padding: 4px 0 4px 18px; position: relative; }
    .action-list li::before { content: "→"; position: absolute; left: 0; color: #c9a962; }
    .footer-bar { background: #f5f5f0; padding: 18px 40px; text-align: center; border-top: 1px solid #e8e4de; }
    .footer-bar p { font-size: 12px; color: #999; }
    .timestamp { font-size: 12px; color: #aaa; margin-top: 20px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="top-bar"></div>
    <div class="header">
      <p class="tag">New Enquiry — Internal Notification</p>
      <p class="brand">Mekong River Cruise</p>
      <span class="badge">Journey Request</span>
    </div>
    <div class="body">
      <p class="section-title">Guest Information</p>
      <div class="grid">
        <div class="field">
          <p class="label">Full Name</p>
          <p class="value">${fullName}</p>
        </div>
        <div class="field">
          <p class="label">Country</p>
          <p class="value">${country || "Not provided"}</p>
        </div>
        <div class="field">
          <p class="label">Email Address</p>
          <p class="value">${email}</p>
        </div>
        <div class="field">
          <p class="label">Phone / WhatsApp</p>
          <p class="value">${phone || "Not provided"}</p>
        </div>
      </div>

      <p class="section-title">Journey Details</p>
      <div class="grid">
        <div class="field">
          <p class="label">Destinations</p>
          <p class="value">${destList}</p>
        </div>
        <div class="field">
          <p class="label">Travel Window</p>
          <p class="value">${travelWindowLabel}</p>
        </div>
        <div class="field">
          <p class="label">Number of Travellers</p>
          <p class="value">${travelers || "Not specified"}</p>
        </div>
        <div class="field">
          <p class="label">Travel Style</p>
          <p class="value">${travelStyle || "Not specified"}</p>
        </div>
        <div class="field full">
          <p class="label">Budget Range</p>
          <p class="value">${budget || "Not specified"}</p>
        </div>
      </div>

      <p class="section-title">Travel Notes</p>
      <div class="notes-box">
        <p class="notes-text">${notes || "No additional notes provided."}</p>
      </div>

      <div class="action-box">
        <p class="action-title">Recommended Actions</p>
        <ul class="action-list">
          <li>Reply to <strong style="color:#fff">${email}</strong> within 24 hours</li>
          <li>Prepare tailored itinerary options for: ${destList}</li>
          <li>Check availability for travel window: ${travelWindowLabel}</li>
          <li>Add to CRM and tag as "New Journey Enquiry"</li>
        </ul>
      </div>

      <p class="timestamp">Submitted on ${submittedAt} EST · via mekongrivercruise.com/plan-your-journey</p>
    </div>
    <div class="footer-bar">
      <p>Mekong River Cruise · sales@mekongrivercruise.com · +1 315 998 1998</p>
    </div>
  </div>
</body>
</html>
      `,
    })

    // ── Email 2: Confirmation to guest ───────────────────────────────────
    await sendEmail({
      from: "Mekong River Cruise <newsletter@mekongrivercruise.com>",
      to: [email],
      subject: `${firstName}, your journey enquiry has been received 🌊`,
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: Georgia, serif; background: #f0ede8; padding: 32px 16px; }
    .card { max-width: 580px; margin: 0 auto; background: #fff; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08); }
    .top-bar { height: 4px; background: linear-gradient(90deg, #c9a962, #e8d5a3, #c9a962); }
    .hero { background: #0d1b2a; padding: 56px 40px; text-align: center; }
    .hero-tag { font-size: 11px; letter-spacing: 0.35em; text-transform: uppercase; color: #c9a962; margin-bottom: 20px; }
    .hero-title { font-size: 30px; color: #fff; line-height: 1.3; }
    .hero-title span { color: #c9a962; }
    .hero-sub { font-size: 14px; color: rgba(255,255,255,0.5); margin-top: 14px; }
    .body { padding: 48px 40px; }
    .greeting { font-size: 18px; color: #0d1b2a; margin-bottom: 20px; }
    .text { font-size: 15px; color: #555; line-height: 1.8; margin-bottom: 20px; }
    .summary-box { background: #faf8f5; border: 1px solid #e8e4de; border-left: 4px solid #c9a962; padding: 24px 28px; margin: 28px 0; }
    .summary-title { font-size: 10px; font-weight: bold; letter-spacing: 0.2em; text-transform: uppercase; color: #c9a962; margin-bottom: 16px; }
    .summary-row { display: flex; justify-content: space-between; align-items: baseline; padding: 8px 0; border-bottom: 1px solid #e8e4de; font-size: 13px; }
    .summary-row:last-child { border-bottom: none; }
    .row-label { color: #999; }
    .row-value { color: #0d1b2a; font-weight: bold; text-align: right; max-width: 55%; }
    .steps { margin: 28px 0; }
    .step { display: flex; gap: 16px; margin-bottom: 20px; align-items: flex-start; }
    .step-num { width: 28px; height: 28px; background: #c9a962; color: #0d1b2a; font-size: 12px; font-weight: bold; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
    .step-text { font-size: 14px; color: #555; line-height: 1.6; padding-top: 4px; }
    .step-text strong { color: #0d1b2a; }
    .divider { border: none; border-top: 1px solid #e8e4de; margin: 32px 0; }
    .cta-wrap { text-align: center; margin-top: 32px; }
    .cta { display: inline-block; background: #c9a962; color: #0d1b2a; padding: 16px 40px; text-decoration: none; font-size: 12px; font-weight: bold; letter-spacing: 0.15em; text-transform: uppercase; }
    .contact-row { text-align: center; margin-top: 24px; font-size: 13px; color: #888; }
    .contact-row a { color: #c9a962; }
    .footer { background: #0d1b2a; padding: 24px 40px; text-align: center; }
    .footer p { font-size: 11px; color: rgba(255,255,255,0.35); letter-spacing: 0.05em; line-height: 1.8; }
    .footer a { color: rgba(201,169,98,0.7); text-decoration: none; }
  </style>
</head>
<body>
  <div class="card">
    <div class="top-bar"></div>
    <div class="hero">
      <p class="hero-tag">Journey Enquiry Received</p>
      <h1 class="hero-title">We'll craft your<br /><span>perfect journey</span></h1>
      <p class="hero-sub">Our specialists are reviewing your request</p>
    </div>
    <div class="body">
      <p class="greeting">Dear ${firstName},</p>
      <p class="text">
        Thank you for reaching out to Mekong River Cruise. We've received your journey 
        enquiry and one of our dedicated travel specialists will be in touch within 
        <strong>24 hours</strong> to begin crafting your bespoke itinerary.
      </p>

      <div class="summary-box">
        <p class="summary-title">Your Enquiry Summary</p>
        <div class="summary-row">
          <span class="row-label">Destinations</span>
          <span class="row-value">${destList}</span>
        </div>
        <div class="summary-row">
          <span class="row-label">Travel Window</span>
          <span class="row-value">${travelWindowLabel}</span>
        </div>
        <div class="summary-row">
          <span class="row-label">Travellers</span>
          <span class="row-value">${travelers || "Not specified"}</span>
        </div>
        <div class="summary-row">
          <span class="row-label">Travel Style</span>
          <span class="row-value">${travelStyle || "Not specified"}</span>
        </div>
      </div>

      <hr class="divider" />

      <div class="steps">
        <div class="step">
          <div class="step-num">1</div>
          <div class="step-text"><strong>Specialist assigned</strong><br />A dedicated Mekong specialist will review your preferences.</div>
        </div>
        <div class="step">
          <div class="step-num">2</div>
          <div class="step-text"><strong>Personalised itinerary</strong><br />We'll craft a tailor-made journey matching your style and budget.</div>
        </div>
        <div class="step">
          <div class="step-num">3</div>
          <div class="step-text"><strong>Your adventure begins</strong><br />Refine the details together until it's exactly right.</div>
        </div>
      </div>

      <div class="cta-wrap">
        <a href="https://www.mekongrivercruise.com/discover" class="cta">Explore Our Journeys →</a>
      </div>
      <p class="contact-row">
        Questions? Call us at <a href="tel:+13159981998">+1 315 998 1998</a> or email 
        <a href="mailto:sales@mekongrivercruise.com">sales@mekongrivercruise.com</a>
      </p>
    </div>
    <div class="footer">
      <p>© ${new Date().getFullYear()} Mekong River Cruise · All rights reserved</p>
      <p>139 Nguyen Cu Trinh St, District 1, Ho Chi Minh City · <a href="https://www.mekongrivercruise.com">mekongrivercruise.com</a></p>
    </div>
  </div>
</body>
</html>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Enquiry error:", err)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
