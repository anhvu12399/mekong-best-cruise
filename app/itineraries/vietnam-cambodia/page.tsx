import { Metadata } from "next"
import { VietnamCambodiaClient } from "./page-client"
import { Header } from "@/components/header"

export const metadata: Metadata = {
  title: "Vietnam to Cambodia Pilgrimage | Indochina Luxury Cruises",
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
