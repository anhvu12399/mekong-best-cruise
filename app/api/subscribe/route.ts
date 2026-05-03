import { NextRequest, NextResponse } from "next/server"

const RESEND_API_KEY = process.env.RESEND_API_KEY || ""

async function sendEmail(to: string[], subject: string, html: string) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Mekong River Cruise <onboarding@resend.dev>",
      to,
      subject,
      html,
    }),
  })
  if (!res.ok) {
    const err = await res.json()
    throw new Error(JSON.stringify(err))
  }
  return res.json()
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      )
    }

    // Send notification to mywaytravelinc@gmail.com
    await sendEmail(
      ["mywaytravelinc@gmail.com"],
      "🌊 New Newsletter Subscriber – Mekong River Cruise",
      `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <style>
              body { font-family: Georgia, serif; background: #f5f5f0; margin: 0; padding: 0; }
              .wrapper { max-width: 560px; margin: 40px auto; background: #ffffff; }
              .header { background: #0d1b2a; padding: 32px; text-align: center; }
              .header h1 { color: #c9a962; font-size: 22px; margin: 0; letter-spacing: 0.2em; text-transform: uppercase; }
              .body { padding: 40px 32px; }
              .label { font-size: 11px; font-weight: bold; letter-spacing: 0.15em; text-transform: uppercase; color: #999; margin-bottom: 6px; }
              .value { font-size: 18px; color: #0d1b2a; font-weight: bold; margin-bottom: 24px; }
              .divider { border: none; border-top: 1px solid #e8e4de; margin: 24px 0; }
              .note { font-size: 13px; color: #666; line-height: 1.6; }
              .footer { background: #f5f5f0; padding: 20px 32px; text-align: center; }
              .footer p { font-size: 12px; color: #999; margin: 0; }
            </style>
          </head>
          <body>
            <div class="wrapper">
              <div class="header"><h1>Mekong River Cruise</h1></div>
              <div class="body">
                <p class="label">New Subscriber</p>
                <p class="value">${email}</p>
                <hr class="divider" />
                <p class="note">A new visitor has subscribed to the Mekong River Cruise newsletter via the website. Please add this contact to your mailing list and follow up if appropriate.</p>
                <p class="note" style="margin-top: 16px;"><strong>Subscribed at:</strong> ${new Date().toLocaleString("en-US", { timeZone: "America/New_York", dateStyle: "full", timeStyle: "short" })} EST</p>
              </div>
              <div class="footer"><p>Mekong River Cruise · mekongrivercruise.com</p></div>
            </div>
          </body>
        </html>
      `
    )

    // Also send a confirmation to the subscriber
    await sendEmail(
      [email],
      "Welcome to Mekong River Cruise – You're on the list!",
      `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <style>
              body { font-family: Georgia, serif; background: #f5f5f0; margin: 0; padding: 0; }
              .wrapper { max-width: 560px; margin: 40px auto; background: #ffffff; }
              .header { background: #0d1b2a; padding: 40px 32px; text-align: center; }
              .header h1 { color: #c9a962; font-size: 22px; margin: 0 0 8px; letter-spacing: 0.2em; text-transform: uppercase; }
              .header p { color: rgba(255,255,255,0.6); font-size: 13px; margin: 0; letter-spacing: 0.1em; }
              .body { padding: 48px 32px; text-align: center; }
              .body h2 { font-size: 28px; color: #0d1b2a; margin: 0 0 16px; }
              .body p { color: #666; line-height: 1.7; font-size: 15px; margin: 0 0 24px; }
              .cta { display: inline-block; background: #c9a962; color: #0d1b2a; padding: 14px 32px; text-decoration: none; font-size: 13px; font-weight: bold; letter-spacing: 0.1em; text-transform: uppercase; }
              .footer { background: #f5f5f0; padding: 24px 32px; text-align: center; border-top: 1px solid #e8e4de; }
              .footer p { font-size: 12px; color: #999; margin: 0; }
            </style>
          </head>
          <body>
            <div class="wrapper">
              <div class="header">
                <h1>Mekong River Cruise</h1>
                <p>Extraordinary journeys through Southeast Asia</p>
              </div>
              <div class="body">
                <h2>You're on the list</h2>
                <p>Thank you for joining our exclusive mailing list. You'll be the first to receive new itineraries, curated travel stories, and private offers from the Mekong.</p>
                <a href="https://www.mekongrivercruise.com" class="cta">Explore Our Journeys →</a>
              </div>
              <div class="footer">
                <p>© ${new Date().getFullYear()} Mekong River Cruise. All rights reserved.</p>
                <p style="margin-top: 8px;">139 Nguyen Cu Trinh St, District 1, Ho Chi Minh City</p>
              </div>
            </div>
          </body>
        </html>
      `
    )

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Subscription error:", err)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
