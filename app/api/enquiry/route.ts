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

    // ── Email 2: Luxury Confirmation to guest (Audley Style with 'M' Mark) ──
    const customerHtml = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mekong River Cruises – We have received your journey enquiry</title>
  <style type="text/css">
    body, table, td, p, a, li, blockquote { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; outline: none; text-decoration: none; }
    body { margin: 0; padding: 0; width: 100% !important; background-color: #ebeff2; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b; }
    .email-wrapper { width: 100%; background-color: #ebeff2; padding: 30px 10px; }
    .email-container { max-width: 620px; margin: 0 auto; background-color: #ffffff; border-radius: 4px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05); }
    @media only screen and (max-width: 600px) {
      .email-container { width: 100% !important; border-radius: 0 !important; }
      .header-col-left, .header-col-right { display: block !important; width: 100% !important; text-align: left !important; }
      .header-col-right { margin-top: 12px !important; }
      .feature-col-img, .feature-col-text { display: block !important; width: 100% !important; }
      .feature-col-img img { width: 100% !important; height: auto !important; max-height: 220px !important; }
      .feature-col-text { padding: 20px 20px 24px 20px !important; }
      .content-padding { padding: 22px 20px !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #ebeff2;">
  <center class="email-wrapper">
    <table class="email-container" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 620px; background-color: #ffffff; margin: 0 auto; text-align: left;">
      
      <!-- ── 1. HEADER (Logo with Letter 'M' Mark + Hotline) ── -->
      <tr>
        <td style="padding: 24px 32px 20px; border-bottom: 1px solid #f1f5f9;">
          <table cellpadding="0" cellspacing="0" border="0" width="100%">
            <tr>
              <!-- Brand Identity with 'M' Mark -->
              <td class="header-col-left" valign="middle" align="left" style="width: 58%;">
                <a href="https://www.mekongrivercruise.com" target="_blank" style="text-decoration: none; display: inline-block;">
                  <table cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td valign="middle" style="padding-right: 12px;">
                        <!-- Official letter 'M' emblem from live web -->
                        <img src="https://www.mywaytravel.com/images/myway-icon-192.png" 
                             alt="Mekong River Cruises 'M' Mark" 
                             width="46" 
                             height="46" 
                             style="display: block; border-radius: 50%;" />
                      </td>
                      <td valign="middle">
                        <div style="font-family: 'Playfair Display', Georgia, serif; font-size: 19px; font-weight: 700; color: #011b31; letter-spacing: 0.5px; line-height: 1.1;">
                          MEKONG RIVER CRUISES
                        </div>
                        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 9.5px; font-weight: 600; color: #b48530; letter-spacing: 2px; text-transform: uppercase; margin-top: 2px;">
                          BY MY WAY TRAVEL
                        </div>
                      </td>
                    </tr>
                  </table>
                </a>
              </td>
              <!-- Phone / Hours -->
              <td class="header-col-right" valign="middle" align="right" style="width: 42%;">
                <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 17px; font-weight: 800; color: #011b31;">
                  (+1) 315 998 1998
                </div>
                <div style="margin-top: 3px;">
                  <a href="https://www.mekongrivercruise.com" target="_blank" style="font-size: 12px; color: #64748b; text-decoration: underline; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                    Our concierge hours
                  </a>
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- ── 2. HERO IMAGE BANNER (Mekong River Landscape) ── -->
      <tr>
        <td style="padding: 0; position: relative;">
          <table cellpadding="0" cellspacing="0" border="0" width="100%">
            <tr>
              <td style="padding: 0; position: relative; background-color: #011b31;">
                <img src="https://www.mekongrivercruise.com/images/full_mekong_hero.png" 
                     alt="Mekong River Cruises Luxury Expedition" 
                     width="620" 
                     style="display: block; width: 100%; max-width: 620px; height: auto; max-height: 290px; object-fit: cover;" />
                <div style="background-color: #0c1524; padding: 7px 18px; text-align: right;">
                  <span style="font-family: Georgia, serif; font-style: italic; font-size: 12px; color: #e2e8f0;">
                    Image by Mekong client David Thornton
                  </span>
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- ── 3. LETTER BODY (Salutation & Reassurance) ── -->
      <tr>
        <td class="content-padding" style="padding: 32px 36px 16px;">
          <p style="margin: 0 0 18px; font-size: 16px; color: #1e293b; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
            Dear ${firstName || "traveler"},
          </p>
          <p style="margin: 0 0 18px; font-size: 14.5px; line-height: 1.68; color: #334155;">
            Thank you for your interest in <strong>Mekong River Cruises</strong> — I&#39;m thrilled you&#39;re considering an unforgettable expedition along the legendary Mekong with us.
          </p>
          <p style="margin: 0 0 18px; font-size: 14.5px; line-height: 1.68; color: #334155;">
            If they haven&#39;t yet, someone from our Destination Specialist Team will reach out shortly and put you in touch with a dedicated specialist, who knows every bend of the Mekong inside-out — from the floating markets and lush fruit orchards of the delta to the ancient temples of Angkor and the serene limestone gorges of Upper Laos. As always, they&#39;ll take time to listen to what you want from your travels so they can meticulously craft the cruise expedition you&#39;ve been imagining.
          </p>
          <p style="margin: 0 0 14px; font-size: 14.5px; line-height: 1.68; color: #334155;">
            We&#39;re looking forward to planning your journey.
          </p>
          <p style="margin: 0 0 24px; font-size: 14.5px; font-weight: 500; color: #1e293b;">
            Here&#39;s to adventure.
          </p>

          <!-- Signoff + Ken Fish Signature -->
          <table cellpadding="0" cellspacing="0" border="0" style="margin-top: 10px;">
            <tr>
              <td valign="middle" style="padding-right: 18px;">
                <img src="https://www.mywaytravel.com/images/founder_ken_fish.jpg" 
                     alt="Ken Fish" 
                     width="76" 
                     height="76" 
                     style="display: block; border-radius: 50%; object-fit: cover; border: 2px solid #e2e8f0;" />
              </td>
              <td valign="middle">
                <!-- SVG Signature Mark -->
                <svg width="190" height="46" viewBox="0 0 190 46" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:block;margin:4px 0 6px;">
                  <path d="M12 36C22 28 34 10 38 7C40 5 44 8 42 14C39 24 30 33 28 38C26 42 32 39 37 32C42 24 49 14 54 11C57 9 58 12 55 18C50 28 47 37 52 35C57 33 65 22 72 17C79 12 83 14 80 20C76 27 71 35 77 34C83 33 93 21 101 16C108 12 112 14 109 20C104 29 99 37 106 35C114 32 125 19 133 16C138 14 141 16 138 22C133 32 129 39 138 35C146 32 159 20 167 18C174 16 179 21 170 29C160 38 142 41 127 41C102 41 68 40 40 40C25 40 10 41 5 41" stroke="#011b31" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 15px; font-weight: 700; color: #011b31; line-height: 1.2;">
                  Ken Fish
                </div>
                <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 12.5px; color: #64748b; line-height: 1.3;">
                  Managing Director of My Way Travel
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- ── 4. FEATURE BLOCK 1: BROCHURE PROMO ── -->
      <tr>
        <td style="padding: 12px 32px 14px;">
          <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #556c6e; border-radius: 4px; overflow: hidden;">
            <tr>
              <td class="feature-col-img" width="45%" valign="middle" align="center" style="padding: 0; background-color: #4a5f61;">
                <img src="https://www.mywaytravel.com/images/myway-brochure-book.jpg" 
                     alt="Mekong River Cruises Collection Brochure" 
                     width="270" 
                     style="display: block; width: 100%; height: 100%; max-height: 230px; object-fit: cover;" />
              </td>
              <td class="feature-col-text" width="55%" valign="middle" style="padding: 24px 24px 24px 20px;">
                <div style="font-family: Georgia, serif; font-style: italic; font-size: 19px; color: #ffffff; line-height: 1.25; margin-bottom: 10px;">
                  Explore the Mekong your way
                </div>
                <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 12.5px; color: #e8ecef; line-height: 1.5; margin-bottom: 16px;">
                  Our brochure, <em style="color:#ffffff;">The World on Your Terms</em>, is designed to inspire your future travels and show you what life on the river looks like when you explore with us. Inside, you&#39;ll find luxury ship profiles and hand-picked shore excursions.
                </div>
                <div>
                  <a href="https://www.mekongrivercruise.com" 
                     target="_blank" 
                     style="display: inline-block; background-color: #ffffff; color: #011b31; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 11px; font-weight: 800; letter-spacing: 1px; text-transform: uppercase; text-decoration: none; padding: 10px 18px; border-radius: 2px;">
                    VIEW ONLINE BROCHURE &rsaquo;
                  </a>
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- ── 5. FEATURE BLOCK 2: SPECIALIST INTRO ── -->
      <tr>
        <td style="padding: 8px 32px 26px;">
          <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #556c6e; border-radius: 4px; overflow: hidden;">
            <tr>
              <td class="feature-col-img" width="45%" valign="middle" align="center" style="padding: 0; background-color: #4a5f61;">
                <img src="https://www.mekongrivercruise.com/images/specialist_emily.png" 
                     alt="Dedicated Mekong River Cruise Specialist" 
                     width="270" 
                     style="display: block; width: 100%; height: 100%; max-height: 220px; object-fit: cover;" />
              </td>
              <td class="feature-col-text" width="55%" valign="middle" style="padding: 24px 24px 24px 20px;">
                <div style="font-family: Georgia, serif; font-style: italic; font-size: 19px; color: #ffffff; line-height: 1.25; margin-bottom: 10px;">
                  What happens next
                </div>
                <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 12.5px; color: #e8ecef; line-height: 1.5;">
                  Keep an eye (and ear) out for our call — one of our dedicated Mekong cruise experts will be ringing you on a number starting with <strong>+1 315</strong> to talk through your travel dates, cabin preferences, and start exploring all the possibilities for your voyage.
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- ── 6. TRUST BADGES & FOOTER ── -->
      <tr>
        <td style="background-color: #f8fafc; padding: 26px 32px 22px; text-align: center; border-top: 1px solid #e2e8f0;">
          <div style="font-size: 11.5px; color: #64748b; line-height: 1.55; margin-bottom: 8px;">
            You&#39;ve received this email because you recently enquired about an expedition cruise with Mekong River Cruises.
          </div>
          <div style="font-size: 12px; font-weight: 600; color: #011b31; margin-bottom: 18px;">
            Please reply directly to this email if you&#39;d like to get in touch.
          </div>

          <!-- Trust Badges (B-Corp / Which? / Travel Awards) -->
          <table cellpadding="0" cellspacing="0" border="0" align="center" style="margin: 0 auto 18px;">
            <tr>
              <td align="center" valign="middle" style="padding: 0 16px;">
                <div style="border: 1.5px solid #1e293b; border-radius: 50%; width: 56px; height: 56px; display: table-cell; vertical-align: middle; text-align: center; background-color: #ffffff;">
                  <span style="font-family: Arial, sans-serif; font-size: 6px; font-weight: 800; color: #1e293b; letter-spacing: 0.5px; text-transform: uppercase; display: block;">CERTIFIED</span>
                  <span style="font-family: Georgia, serif; font-size: 24px; font-weight: 700; color: #1e293b; line-height: 1; display: block; margin: -2px 0;">B</span>
                  <span style="font-family: Arial, sans-serif; font-size: 6px; font-weight: 700; color: #1e293b; letter-spacing: 0.5px; text-transform: uppercase; display: block;">CORP STYLE</span>
                </div>
              </td>
              <td align="center" valign="middle" style="padding: 0 16px;">
                <div style="border: 1.5px solid #dc2626; border-radius: 50%; width: 56px; height: 56px; display: table-cell; vertical-align: middle; text-align: center; background-color: #ffffff;">
                  <span style="font-family: Arial, sans-serif; font-size: 5.5px; font-weight: 700; color: #dc2626; letter-spacing: 0.5px; text-transform: uppercase; display: block;">RECOMMENDED</span>
                  <span style="font-family: Georgia, serif; font-size: 13px; font-weight: 800; color: #dc2626; line-height: 1.1; display: block;">Which?</span>
                  <span style="font-family: Arial, sans-serif; font-size: 5.5px; font-weight: 700; color: #dc2626; letter-spacing: 0.5px; text-transform: uppercase; display: block;">PROVIDER</span>
                </div>
              </td>
              <td align="center" valign="middle" style="padding: 0 16px;">
                <div style="border: 1.5px solid #1e293b; width: 62px; height: 56px; display: table-cell; vertical-align: middle; text-align: center; background-color: #ffffff;">
                  <span style="font-family: Arial, sans-serif; font-size: 5.5px; font-weight: 700; color: #64748b; letter-spacing: 0.5px; text-transform: uppercase; display: block;">LUXURY</span>
                  <span style="font-family: Georgia, serif; font-size: 9px; font-weight: 700; color: #011b31; line-height: 1; display: block; margin: 2px 0;">TRAVEL</span>
                  <span style="font-family: Georgia, serif; font-size: 9px; font-weight: 700; color: #011b31; line-height: 1; display: block;">AWARDS</span>
                  <span style="font-family: Arial, sans-serif; font-size: 6.5px; font-weight: 800; color: #b48530; letter-spacing: 0.5px; display: block; margin-top: 2px;">WINNER 2025</span>
                </div>
              </td>
            </tr>
          </table>

          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 11px; color: #64748b; line-height: 1.6;">
            <strong>Mekong River Cruises</strong> · A My Way Travel Collection<br />
            139 Nguyen Cu Trinh St, District 1, Ho Chi Minh City · 24/7 Concierge: (+1) 315 998 1998<br />
            <a href="https://www.mekongrivercruise.com" target="_blank" style="color: #64748b; text-decoration: underline;">mekongrivercruise.com</a>
          </div>
        </td>
      </tr>

    </table>
  </center>
</body>
</html>`

    await sendEmail({
      from: "Mekong River Cruise <newsletter@mekongrivercruise.com>",
      to: [email],
      subject: `${firstName}, thank you for your Mekong journey enquiry`,
      html: customerHtml,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Enquiry error:", err)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
