import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { AboutMekong } from "@/components/about-mekong"
import { ExploreMekong } from "@/components/explore-mekong"
import { ArtOfCruising } from "@/components/art-of-cruising"
import { FeaturedDestinations } from "@/components/featured-destinations"
import { ExpeditionCruises } from "@/components/expedition-cruises"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <AboutMekong />
        <ExploreMekong />
        <ArtOfCruising />
        <FeaturedDestinations />
        <ExpeditionCruises />
        <WhyChooseUs />
      </main>
    </>
  )
}
