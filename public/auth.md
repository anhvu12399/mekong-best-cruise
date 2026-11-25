# mekongrivercruise.com auth.md

Agent access policy for https://www.mekongrivercruise.com

- **Reading & Discovery:** All HTML pages, `/llms.txt`, `/llms-full.txt`, `/openapi.json`, `/api/ships`, `/api/estimate`, `/ask` (NLWeb), and Markdown versions (`Accept: text/markdown`, including HTTP 404 responses) are public. No authentication, API key, or registration is required.
- **MCP / A2A:** `POST /mcp` (5 tools: `search_site`, `filter_ships`, `estimate_cruise_budget`, `build_quote_link`, `get_contact`) and `POST /a2a` (`message/send`) are public and require no authentication.
- **Documentation:** https://www.mekongrivercruise.com/ai-access
- **No OAuth or agent registration endpoint exists.**
- **Cruise inquiries & draft itinerary checks:** Submitted by a human traveler on https://www.mekongrivercruise.com/plan-your-journey or https://www.mekongrivercruise.com/review-my-itinerary (both support pre-filled query parameters), or via sales@mekongrivercruise.com / +1 315 998 1998.
