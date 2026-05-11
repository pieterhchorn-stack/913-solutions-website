import { Button } from "@/components/ui/button"
import { Phone, Mail, Globe, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready for fast, affordable plumbing solutions? Contact us today for a free quote.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground mb-6">Contact Information</h3>

            <a
              href="tel:913-990-8220"
              className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="text-foreground font-semibold">(913) 990-8220</p>
              </div>
            </a>

            <a
              href="mailto:info@913SolutionsLLC.com"
              className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-foreground font-semibold">info@913SolutionsLLC.com</p>
              </div>
            </a>

            <a
              href="https://913SolutionsLLC.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Website</p>
                <p className="text-foreground font-semibold">913SolutionsLLC.com</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Service Area</p>
                <p className="text-foreground font-semibold">Kansas City Metro Area</p>
              </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="bg-card border border-border rounded-lg p-6 space-y-6">
  <h3 className="text-xl font-bold text-foreground">Get In Touch</h3>
  
  <a href="tel:913-990-8220" className="flex items-center gap-4 p-4 bg-primary rounded-lg hover:bg-primary/80 transition-colors">
    <Phone className="w-6 h-6 text-white" />
    <div>
      <p className="text-white font-bold text-lg">(913) 990-8220</p>
      <p className="text-white/80 text-sm">Call or text us anytime</p>
    </div>
  </a>

  <a href="mailto:info@913SolutionsLLC.com" className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors">
    <Mail className="w-6 h-6 text-primary" />
    <div>
      <p className="text-foreground font-bold">info@913SolutionsLLC.com</p>
      <p className="text-muted-foreground text-sm">We reply within the hour</p>
    </div>
  </a>

  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-center">
    <p className="text-foreground font-bold mb-1">Available 7 Days a Week</p>
    <p className="text-muted-foreground text-sm">Monday to Friday 7am to 6pm</p>
    <p className="text-muted-foreground text-sm">Saturday 8am to 4pm</p>
    <p className="text-muted-foreground text-sm">Emergency calls anytime</p>
  </div>
</div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
