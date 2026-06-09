import { Metadata } from "next"
import { FullMekongStoryClient } from "./page-client"
import { Header } from "@/components/header"

const BASE_URL = 'https://www.mekongrivercruise.com'
const PAGE_URL = `${BASE_URL}/itineraries/full-mekong-story`

export const metadata: Metadata = {
  title: "The Full Mekong Story | 10-Day Vietnam & Laos Private Journey",
  keywords: [
    '10 day Mekong journey',
    'Vietnam to Laos river tour',
    'Ho Chi Minh to Golden Triangle',
    'cross border Mekong cruise',
    'Mekong Delta and Luang Prabang',
    'custom Mekong river itinerary',
    'luxury overland Vietnam Laos'
  ],
  description: "A comprehensive 10-day private journey tracking the Mekong River from the flat green delta in Southern Vietnam to the mountainous borderlands of Laos.",
  alternates: { canonical: PAGE_URL },
}

export default function FullMekongStoryPage() {
  return (
    <>
      <Header />
      <main>
        <FullMekongStoryClient />
      </main>
    </>
  )
}
