import { Metadata } from "next"
import { TwoDaysClient } from "./page-client"

export const metadata: Metadata = {
  title: "2-Day River Pulse | Mekong River Cruise",
  description: "Experience the true rhythm of the Mekong: a quiet local night followed by the bustling early morning floating market.",
}

export default function TwoDaysPage() {
  return <TwoDaysClient />
}
