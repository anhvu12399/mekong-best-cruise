import { Metadata } from "next"
import { OneDayClient } from "./page-client"

export const metadata: Metadata = {
  title: "1-Day Mindful Mekong | Mekong River Cruise",
  description: "A slow-paced, deeply connected 1-day journey from Ho Chi Minh City into the quiet heart of the Mekong Delta.",
}

export default function OneDayPage() {
  return <OneDayClient />
}
