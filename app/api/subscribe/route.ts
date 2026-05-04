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
    const { name, email } = await request.json()

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      )
    }

    const firstName = name ? name.split(" ")[0] : "Valued Guest"
    const subscribedAt = new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
      dateStyle: "full",
      timeStyle: "short",
    })

    // ── 1. Notification email → sales@mekongrivercruise.com ──────────────
    await sendEmail({
      from: "Mekong Newsletter <newsletter@mekongrivercruise.com>",
      to: ["sales@mekongrivercruise.com"],
      subject: `🌊 New Subscriber: ${name || email} – Mekong River Cruise`,
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: Georgia, 'Times New Roman', serif; background: #f0ede8; padding: 32px 16px; }
    .card { max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 2px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08); }
    .top-bar { height: 4px; background: linear-gradient(90deg, #c9a962, #e8d5a3, #c9a962); }
    .header { background: #0d1b2a; padding: 36px 40px; }
    .header-title { color: #c9a962; font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase; margin-bottom: 8px; }
    .header-brand { color: #ffffff; font-size: 24px; letter-spacing: 0.05em; }
    .badge { display: inline-block; background: #c9a962; color: #0d1b2a; font-size: 11px; font-weight: bold; letter-spacing: 0.15em; text-transform: uppercase; padding: 4px 12px; margin-top: 16px; }
    .body { padding: 40px; }
    .row { display: flex; gap: 0; margin-bottom: 24px; }
    .col { flex: 1; padding: 20px; background: #faf8f5; border-left: 3px solid #c9a962; }
    .col:last-child { margin-left: 16px; border-left: 3px solid #0d1b2a; }
    .field-label { font-size: 10px; font-weight: bold; letter-spacing: 0.2em; text-transform: uppercase; color: #999; margin-bottom: 6px; }
    .field-value { font-size: 16px; color: #0d1b2a; font-weight: bold; word-break: break-all; }
    .divider { border: none; border-top: 1px solid #e8e4de; margin: 32px 0; }
    .action-box { background: #f5f3ef; border: 1px solid #e8e4de; padding: 24px; margin-top: 24px; }
    .action-title { font-size: 11px; font-weight: bold; letter-spacing: 0.15em; text-transform: uppercase; color: #0d1b2a; margin-bottom: 12px; }
    .action-list { list-style: none; }
    .action-list li { font-size: 13px; color: #555; padding: 4px 0; padding-left: 16px; position: relative; }
    .action-list li::before { content: "→"; position: absolute; left: 0; color: #c9a962; }
    .timestamp { font-size: 12px; color: #999; margin-top: 24px; }
    .footer-bar { background: #0d1b2a; padding: 20px 40px; text-align: center; }
    .footer-bar p { font-size: 12px; color: rgba(255,255,255,0.4); letter-spacing: 0.05em; }
  </style>
</head>
<body>
  <div class="card">
    <div class="top-bar"></div>
    <div class="header">
      <p class="header-title">Internal Notification</p>
      <p class="header-brand">Mekong River Cruise</p>
      <span class="badge">New Subscriber</span>
    </div>
    <div class="body">
      <div class="row">
        <div class="col">
          <p class="field-label">Full Name</p>
          <p class="field-value">${name || "Not provided"}</p>
        </div>
        <div class="col">
          <p class="field-label">Email Address</p>
          <p class="field-value">${email}</p>
        </div>
      </div>
      <hr class="divider" />
      <div class="action-box">
        <p class="action-title">Recommended Actions</p>
        <ul class="action-list">
          <li>Add ${firstName} to the Mekong newsletter mailing list</li>
          <li>Consider a personalised follow-up email within 48 hours</li>
          <li>Tag as "Website Subscriber" in your CRM</li>
        </ul>
      </div>
      <p class="timestamp">Subscribed on ${subscribedAt} EST · via mekongrivercruise.com</p>
    </div>
    <div class="footer-bar">
      <p>Mekong River Cruise · sales@mekongrivercruise.com</p>
    </div>
  </div>
</body>
</html>
      `,
    })

    // ── 2. Welcome email → subscriber ─────────────────────────────────────
    await sendEmail({
      from: "Mekong River Cruise <newsletter@mekongrivercruise.com>",
      to: [email],
      subject: `${firstName}, welcome to the Mekong River Cruise family 🌊`,
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: Georgia, 'Times New Roman', serif; background: #f0ede8; padding: 32px 16px; }
    .card { max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 2px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08); }
    .top-bar { height: 4px; background: linear-gradient(90deg, #c9a962, #e8d5a3, #c9a962); }
    .hero { background: #0d1b2a; padding: 56px 40px 48px; text-align: center; }
    .hero-tag { font-size: 11px; letter-spacing: 0.35em; text-transform: uppercase; color: #c9a962; margin-bottom: 20px; }
    .hero-title { font-size: 32px; color: #ffffff; line-height: 1.25; letter-spacing: 0.02em; }
    .hero-title span { color: #c9a962; }
    .hero-sub { font-size: 14px; color: rgba(255,255,255,0.5); margin-top: 16px; letter-spacing: 0.05em; }
    .body { padding: 48px 40px; }
    .greeting { font-size: 20px; color: #0d1b2a; margin-bottom: 20px; }
    .text { font-size: 15px; color: #555; line-height: 1.8; margin-bottom: 20px; }
    .divider { border: none; border-top: 1px solid #e8e4de; margin: 36px 0; }
    .promise-title { font-size: 10px; font-weight: bold; letter-spacing: 0.2em; text-transform: uppercase; color: #c9a962; margin-bottom: 20px; }
    .promise-grid { display: flex; gap: 16px; flex-wrap: wrap; }
    .promise-item { flex: 1; min-width: 140px; padding: 20px; background: #faf8f5; border-top: 2px solid #c9a962; }
    .promise-icon { font-size: 22px; margin-bottom: 10px; }
    .promise-label { font-size: 12px; font-weight: bold; letter-spacing: 0.1em; text-transform: uppercase; color: #0d1b2a; margin-bottom: 6px; }
    .promise-desc { font-size: 12px; color: #888; line-height: 1.5; }
    .cta-wrap { text-align: center; margin-top: 40px; }
    .cta { display: inline-block; background: #c9a962; color: #0d1b2a; padding: 16px 40px; text-decoration: none; font-size: 12px; font-weight: bold; letter-spacing: 0.15em; text-transform: uppercase; }
    .cta:hover { background: #b8923e; }
    .footer-body { padding: 32px 40px; background: #faf8f5; border-top: 1px solid #e8e4de; text-align: center; }
    .footer-body p { font-size: 12px; color: #999; line-height: 1.8; }
    .footer-bar { background: #0d1b2a; padding: 20px 40px; text-align: center; }
    .footer-bar p { font-size: 11px; color: rgba(255,255,255,0.4); letter-spacing: 0.05em; }
  </style>
</head>
<body>
  <div class="card">
    <div class="top-bar"></div>
    <div class="hero">
      <p class="hero-tag">Stay Inspired</p>
      <h1 class="hero-title">Welcome, <span>${firstName}</span></h1>
      <p class="hero-sub">You're now part of our exclusive circle</p>
    </div>
    <div class="body">
      <p class="greeting">Dear ${firstName},</p>
      <p class="text">
        Thank you for joining the Mekong River Cruise exclusive mailing list. 
        We're delighted to welcome you aboard.
      </p>
      <p class="text">
        As a subscriber, you'll be among the first to discover new river journeys, 
        curated travel stories from the heart of Southeast Asia, and exclusive offers 
        available only to our inner circle.
      </p>
      <hr class="divider" />
      <p class="promise-title">What to expect from us</p>
      <div class="promise-grid">
        <div class="promise-item">
          <div class="promise-icon">🗺️</div>
          <p class="promise-label">New Itineraries</p>
          <p class="promise-desc">Exclusive river routes before they go public</p>
        </div>
        <div class="promise-item">
          <div class="promise-icon">✨</div>
          <p class="promise-label">Private Offers</p>
          <p class="promise-desc">Member-only rates and curated packages</p>
        </div>
        <div class="promise-item">
          <div class="promise-icon">📖</div>
          <p class="promise-label">Travel Stories</p>
          <p class="promise-desc">Inspiring tales from the Mekong and beyond</p>
        </div>
      </div>
      <div class="cta-wrap">
        <a href="https://www.mekongrivercruise.com" class="cta">Explore Our Journeys →</a>
      </div>
    </div>
    <div class="footer-body">
      <p>Questions? Reach us at <a href="mailto:sales@mekongrivercruise.com" style="color: #c9a962;">sales@mekongrivercruise.com</a></p>
      <p style="margin-top: 8px;">+1 315 998 1998 · 139 Nguyen Cu Trinh St, District 1, Ho Chi Minh City</p>
    </div>
    <div class="footer-bar">
      <p>© ${new Date().getFullYear()} Mekong River Cruise · <a href="https://www.mekongrivercruise.com" style="color: rgba(255,255,255,0.4); text-decoration: none;">mekongrivercruise.com</a></p>
    </div>
  </div>
</body>
</html>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Subscription error:", err)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
