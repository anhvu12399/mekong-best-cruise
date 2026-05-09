import { Metadata } from "next"
import { SpecialistsClient } from "./page-client"

export const metadata: Metadata = {
  title: "Our Specialists | Mekong Best Cruise",
  keywords: [
    'Mekong travel specialists',
    'expert guides Southeast Asia',
    'luxury travel advisors Mekong',
    'Mekong cruise consultants',
    'local travel experts Vietnam Cambodia',
    'bespoke itinerary designers Asia'
],
  description: "Meet the people behind your journey. Our Mekong specialists have lived it, paddled it, and eaten at every hidden table worth knowing about.",
}

export default function OurSpecialistsPage() {
  return <SpecialistsClient />
}
