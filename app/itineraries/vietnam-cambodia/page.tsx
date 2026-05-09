import { Metadata } from "next"
import { VietnamCambodiaClient } from "./page-client"
import { Header } from "@/components/header"

export const metadata: Metadata = {
  title: "Vietnam to Cambodia Pilgrimage | Indochina Luxury Cruises",
  keywords: [
    'Vietnam to Cambodia cruise itinerary',
    'Ho Chi Minh to Siem Reap boat',
    '7 night Mekong cruise',
    '8 day Mekong river cruise',
    'luxury cross border cruise',
    'Mekong expedition Vietnam Cambodia',
    'Siem Reap to Saigon river journey',
    'best Vietnam Cambodia cruise',
    'Mekong downstream cruise',
    'Mekong upstream cruise',
    'comprehensive Mekong river tour'
],
  description: "A 7-8 day luxury pilgrimage connecting the Mekong Delta to Angkor Wat. Experience deep spiritual connection, private masses, and meditative travel.",
}

export default function VietnamCambodiaItineraryPage() {
  return (
    <>
      <Header />
      <main>
        <VietnamCambodiaClient />
      </main>
    </>
  )
}
