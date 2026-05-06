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
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-6">Request a Quote</h3>
<form
  name="contact"
  method="POST"
  data-netlify="true"
  netlify-honeypot="bot-field"
>
  <input type="hidden" name="form-name" value="contact" />
  <input type="text" name="name" placeholder="Your Name" required />
  <input type="tel" name="phone" placeholder="Your Phone Number" required />
  <input type="email" name="email" placeholder="Your Email" required />
  <select name="service">
    <option value="">Select a Service</option>
    <option value="repairs">Repairs & Maintenance</option>
    <option value="installation">New Installation</option>
    <option value="line-repairs">Line Repairs</option>
    <option value="upgrades">Upgrades</option>
    <option value="emergency">Emergency Service</option>
    <option value="other">Other</option>
  </select>
  <textarea name="message" placeholder="Describe your job" rows="4"></textarea>
  <button type="submit">Get a Quote</button>
</form>
          </div>
        </div>
      </div>
    </section>
  )
}
