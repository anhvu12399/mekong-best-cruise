import { Metadata } from "next"
import { OneDayClient } from "./page-client"

export const metadata: Metadata = {
  title: "1-Day Mindful Mekong | Mekong River Cruise",
  keywords: [
    '1 day Mekong cruise',
    'Mekong Delta day trip',
    'luxury day cruise Saigon',
    'one day Mekong delta tour',
    'private day boat Mekong',
    'Cai Be floating market day trip',
    'Ben Tre 1 day luxury tour',
    'Ho Chi Minh City river day trip',
    'Mekong sunset day cruise'
],
  description: "A slow-paced, deeply connected 1-day journey from Ho Chi Minh City into the quiet heart of the Mekong Delta.",
}

export default function OneDayPage() {
  return <OneDayClient />
}
