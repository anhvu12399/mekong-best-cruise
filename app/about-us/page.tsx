import { Metadata } from "next"
import { AboutUsClient } from "./page-client"

export const metadata: Metadata = {
  title: "About Us | Mekong River Cruise",
  keywords: [
    'about Mekong River Cruise',
    'Mekong river travel experts',
    'luxury travel agency Southeast Asia',
    'Mekong cruise specialists',
    'bespoke tour operator Vietnam',
    'sustainable travel Mekong',
    'our story Mekong River Cruise',
    'trusted Mekong operator'
],
  description: "We don't sell generic tours. We craft bespoke journeys through trusted cruise partners with local specialist guidance. Discover our story and philosophy.",
}

export default function AboutUsPage() {
  return <AboutUsClient />
}
