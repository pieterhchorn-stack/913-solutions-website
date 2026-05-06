import { Button } from "@/components/ui/button"
import { Check, Phone } from "lucide-react"
import Image from "next/image"

const benefits = [
  "Fast Response",
  "Upfront Pricing",
  "Quality Workmanship",
  "Satisfaction Guaranteed",
]

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/wrench-background.png"
          alt="Professional plumbing tools with water splash"
          fill
          className="object-cover object-right-bottom opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Logo Image - Left Side */}
          <div className="flex-shrink-0 w-full max-w-md lg:max-w-lg xl:max-w-xl">
            <Image
              src="/913-logo.png"
              alt="913 Solutions Plumbing Logo"
              width={600}
              height={500}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Text Content - Right Side */}
          <div className="flex-1 text-center lg:text-left">
            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-6">
              <span className="text-foreground">Solutions</span>
              <br />
              <span className="text-primary italic">Fast &amp;</span>
              <br />
              <span className="text-primary italic">Affordable.</span>
            </h1>

            {/* Benefits List */}
            <ul className="space-y-3 mb-8 inline-block text-left">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-foreground/90">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/80 text-primary-foreground font-bold px-8 py-6 text-lg"
              >
                GET A QUOTE
              </Button>
              <a href="tel:913-990-8220">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-bold px-8 py-6 text-lg w-full sm:w-auto"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  (913) 990-8220
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
