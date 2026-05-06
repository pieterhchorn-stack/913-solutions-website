import Image from "next/image"
import { Home, Wrench, Settings, Droplets, Hammer, MapPin, Clock, MessageSquare, Heart } from "lucide-react"

const serviceIcons = [
  {
    icon: Home,
    title: "RESIDENTIAL",
    subtitle: "PLUMBING",
  },
  {
    icon: Wrench,
    title: "REPAIRS &",
    subtitle: "MAINTENANCE",
  },
  {
    icon: Settings,
    title: "INSTALLATIONS &",
    subtitle: "UPGRADES",
  },
]

const plumbingServices = [
  "Water heater repair, service and installation",
  "Water softener repair, service and installation",
  "Water conditioning repair, service and installation",
  "Grinder, Sewage Ejector and Sump Pump repair, service and installation",
  "Water and Drain line repair and replacement",
  "Leak detection and repair",
  "Faucet and fixture installation",
  "Toilet repair and replacement",
  "All shut-off valve replacement",
  "Any other plumbing needs",
]

const handymanServices = [
  "Door installation",
  "Trim and molding work",
  "Shelving and cabinet installation",
  "Caulking and weatherstripping",
  "Light fixture and ceiling fan installation",
  "Furniture assembly",
  "General home repairs and maintenance",
]

const whyChooseUs = [
  {
    icon: MapPin,
    text: "Locally owned right here in Johnson and Miami County",
  },
  {
    icon: Clock,
    text: "We show up on time",
  },
  {
    icon: MessageSquare,
    text: "Communicate clearly",
  },
  {
    icon: Heart,
    text: "Treat your home with respect",
  },
]

export function ServicesSection() {
  return (
    <section id="services">
      {/* Service Icons Bar */}
      <div className="bg-secondary/50 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 divide-x divide-border/30">
            {serviceIcons.map((service) => (
              <div
                key={service.title}
                className="flex flex-col items-center justify-center py-8 px-4 text-center hover:bg-primary/10 transition-colors cursor-pointer group"
              >
                <service.icon className="w-10 h-10 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-xs sm:text-sm font-bold text-foreground uppercase tracking-wide">
                  {service.title}
                </p>
                <p className="text-xs sm:text-sm font-bold text-foreground uppercase tracking-wide">
                  {service.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Services Section */}
      <div className="py-20 bg-background relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/wrench-background.png"
            alt=""
            fill
            className="object-cover object-right-bottom opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              OUR <span className="text-primary">SERVICES</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {/* Plumbing Services */}
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <Droplets className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Plumbing Services</h3>
              </div>
              <ul className="space-y-3">
                {plumbingServices.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Handyman Services */}
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <Hammer className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Handyman Services</h3>
              </div>
              <ul className="space-y-3">
                {handymanServices.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Why Choose 913 Solutions */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground">
                Why Choose <span className="text-primary">913 Solutions</span>?
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <item.icon className="w-10 h-10 text-primary mb-3" />
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-primary font-bold text-lg mt-8">
              No job too small.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
