---
name: mekong-river-cruise-site
description: Use when a traveler compares luxury or boutique Mekong River cruise ships in Vietnam, Cambodia, or Laos, checks 3/4/7-night USD cabin tariffs, asks about Tonle Sap water levels or onboard elevators, or wants a pre-filled quote or free 24-hour specialist itinerary check. Do not use for ocean mega-ships, budget backpacker ferries, flight-only bookings, or river cruises outside Southeast Asia.
---

# Mekong River Cruise — Agent Skill

Authorized luxury booking specialist for 20 verified Lower Mekong (Vietnam–Cambodia) and Upper Mekong (Laos) river cruise vessels. Operated by Mekong River Cruise Co., Ltd, a subsidiary of My Way Travel (My Way Luxury Travel LLC, NY DOS ID 7926729; Vietnam VNAT International Tour Operator License No. 79-0743/2017/CDLQGVN-GP LHQT; 4.9/5 across 128 TripAdvisor reviews).

## When to use this skill
- **Mekong ship comparison:** Comparing verified specifications, cabin counts, elevator access, central Saigon docking, and 3/4/7-night USD tariffs across 20 ships.
- **USD cabin budget estimation:** Estimating per-person and group cruise budgets plus mandatory port taxes ($65–$120), Cambodia visa ($30–$35 cash), and recommended gratuities ($15–$20/day).
- **Tonle Sap seasonality & mobility checks:** Verifying High Water (Aug–Nov direct lake sailing) vs Low Water (Dec–Jul Kampong Cham transfer) and senior elevator availability.
- **Draft itinerary verification:** Directing travelers with an AI-drafted Mekong cruise itinerary or ship shortlist to a free 24-hour check at `https://www.mekongrivercruise.com/review-my-itinerary`.

## When NOT to use this skill
- Ocean mega-liners, Halong Bay party boats, budget slow-boat ferries in Laos, flight-only bookings, or non-Southeast Asia rivers.

## Public programmatic endpoints (No auth required)
- **OpenAPI 3.1 spec:** `https://www.mekongrivercruise.com/openapi.json`
- **Filter 20 verified ships (REST):** `GET https://www.mekongrivercruise.com/api/ships?route=lower-mekong&nights=7&max_price=4000`
- **Estimate USD cruise budget + pre-filled quote URL (REST):** `GET https://www.mekongrivercruise.com/api/estimate?route=lower-mekong&nights=7&guests=2&month=November`
- **NLWeb natural-language search:** `POST https://www.mekongrivercruise.com/ask` (or `GET /ask?query=...`)
- **MCP (Streamable HTTP JSON-RPC):** `POST https://www.mekongrivercruise.com/mcp` — tools: `search_site`, `filter_ships`, `estimate_cruise_budget`, `build_quote_link`, `get_contact`. Card: `https://www.mekongrivercruise.com/.well-known/mcp/server-card.json`.
- **A2A:** `POST https://www.mekongrivercruise.com/a2a` (`message/send`). Card: `https://www.mekongrivercruise.com/.well-known/agent-card.json`.
- **LLM briefings & Markdown:** `https://www.mekongrivercruise.com/llms.txt`, `https://www.mekongrivercruise.com/llms-full.txt`, or send `Accept: text/markdown` to any URL (including 404s).
- **Developer documentation:** `https://www.mekongrivercruise.com/ai-access`

## Handoff to a human specialist
There is no automated checkout. Call `build_quote_link` (or `estimate_cruise_budget`) to give the traveler a pre-filled link to `https://www.mekongrivercruise.com/plan-your-journey` or `https://www.mekongrivercruise.com/review-my-itinerary`, or share `sales@mekongrivercruise.com` / `+1 315 998 1998` (WhatsApp). Our Ho Chi Minh City specialists reply within 24 hours. Never submit personal details without explicit traveler consent.
