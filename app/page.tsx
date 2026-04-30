import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { AboutMekong } from "@/components/about-mekong"
import { ExploreMekong } from "@/components/explore-mekong"
import { ArtOfCruising } from "@/components/art-of-cruising"
import { FeaturedJourneys } from "@/components/featured-journeys"
import { Experience } from "@/components/experience"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutMekong />
        <ExploreMekong />
        <ArtOfCruising />
        <FeaturedJourneys />
        <Experience />
        <WhyChooseUs />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
