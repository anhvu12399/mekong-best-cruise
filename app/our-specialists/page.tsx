import { Metadata } from "next"
import { SpecialistsClient } from "./page-client"

export const metadata: Metadata = {
  title: "Our Specialists | Mekong Best Cruise",
  description: "Meet the people behind your journey. Our Mekong specialists have lived it, paddled it, and eaten at every hidden table worth knowing about.",
}

export default function OurSpecialistsPage() {
  return <SpecialistsClient />
}
