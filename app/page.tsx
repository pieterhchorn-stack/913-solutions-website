import Image from "next/image"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      {/* Global Background Image */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src="/wrench-background.png"
          alt=""
          fill
          className="object-cover object-right-bottom opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/70" />
      </div>
      
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
