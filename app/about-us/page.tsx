import { Metadata } from "next"
import { AboutUsClient } from "./page-client"

export const metadata: Metadata = {
  title: "About Us | Mekong Best Cruise",
  description: "We don't sell tours. We listen to who you are and craft a journey the river will remember. Discover the people and philosophy behind Mekong Best Cruise.",
}

export default function AboutUsPage() {
  return <AboutUsClient />
}
