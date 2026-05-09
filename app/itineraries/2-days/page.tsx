import { Metadata } from "next"
import { TwoDaysClient } from "./page-client"

export const metadata: Metadata = {
  title: "2-Day River Pulse | Mekong River Cruise",
  keywords: [
    '2 days Mekong cruise',
    'overnight Mekong cruise',
    'Mekong Delta 2 day 1 night',
    'luxury overnight boat Mekong',
    'Can Tho 2 day tour',
    'Cai Rang floating market overnight',
    'Mekong delta weekend getaway',
    'private overnight sampan Mekong',
    '2 day Vietnam river cruise'
],
  description: "Experience the true rhythm of the Mekong: a quiet local night followed by the bustling early morning floating market.",
}

export default function TwoDaysPage() {
  return <TwoDaysClient />
}
