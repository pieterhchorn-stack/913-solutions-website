import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Globe, MapPin } from "lucide-react"

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const entries: Record<string, string> = {}
    new FormData(form).forEach((val, key) => {
      entries[key] = String(val)
    })
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(entries).toString(),
      })
      setSubmitted(true)
      form.reset()
    } catch (err) {
      console.error(err)
    }
  }

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
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground mb-6">
              Contact Information
            </h3>
            <a
              href="tel:913-990-8220"
              className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
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
              className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
            >
              <a
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-foreground font-semibold">info@913SolutionsLLC.com</p>
              </div>
            </a>
            <a href=""></a></div>
              href="https://913SolutionsLLC.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
            
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
                <p className="text-foreground font-semibold">Kansas City Area</p>
              </div>
            </div>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-6">
              Request a Quote
            </h3>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div>
                <label htmlFor="name" className="text-sm text-muted-foreground mb-1 block">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-sm text-muted-foreground mb-1 block">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label htmlFor="service" className="text-sm text-muted-foreground mb-1 block">
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select a Service</option>
                  <option value="repairs">Repairs and Maintenance</option>
                  <option value="installation">New Installation</option>
                  <option value="line-repairs">Line Repairs</option>
                  <option value="upgrades">Upgrades</option>
                  <option value="water-heater">Water Heater</option>
                  <option value="emergency">Emergency Service</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="text-sm text-muted-foreground mb-1 block">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Describe your plumbing needs..."
                />
              </div>
              {submitted && (
                <div className="bg-green-500/20 border border-green-500 rounded-lg px-4 py-3 text-green-400 text-sm">
                  Thank you! We will call you back shortly.
                </div>
              )}
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/80 text-primary-foreground font-bold py-3"
              >
                Send Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}