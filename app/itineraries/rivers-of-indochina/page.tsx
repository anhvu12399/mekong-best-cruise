import { Metadata } from "next"
import { RiversOfIndochinaClient } from "./page-client"
import { Header } from "@/components/header"

const BASE_URL = 'https://www.mekongrivercruise.com'
const PAGE_URL = `${BASE_URL}/itineraries/rivers-of-indochina`

export const metadata: Metadata = {
  title: "Rivers of Indochina | 15-Day Vietnam, Cambodia & Laos Grand Tour",
  keywords: [
    'Rivers of Indochina',
    'Vietnam Cambodia Laos grand tour',
    'Red River Hanoi',
    'Perfume River Hue',
    'Thu Bon Hoi An',
    'Mekong Delta Phnom Penh',
    'Angkor Wat Siem Reap',
    'Luang Prabang Golden Triangle',
    'cross border Indochina private tour'
  ],
  description: "An extraordinary 15-day private journey connecting the great rivers of Vietnam, Cambodia, and Laos. Traces the water from the Red River to the Mekong Delta, Tonle Sap, and the Upper Mekong gorges.",
  alternates: { canonical: PAGE_URL },
}

export default function RiversOfIndochinaPage() {
  return (
    <>
      <Header />
      <main>
        <RiversOfIndochinaClient />
      </main>
    </>
  )
}
