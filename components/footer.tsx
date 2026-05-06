import Link from "next/link"
import { Phone, Mail, Globe } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Description */}
          <div>
            <h4 className="text-foreground font-bold mb-4">913 Solutions LLC</h4>
            <p className="text-muted-foreground text-sm">
              Your Neighborhood Pros, offering Solutions to your daily problems— Plumbing Service and Repairs, and Basic Handyman Services Done Right the First Time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-foreground font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:913-990-8220" className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm transition-colors">
                  <Phone className="w-4 h-4" />
                  (913) 990-8220
                </a>
              </li>
              <li>
                <a href="mailto:info@913SolutionsLLC.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm transition-colors">
                  <Mail className="w-4 h-4" />
                  info@913SolutionsLLC.com
                </a>
              </li>
              <li>
                <a href="https://913SolutionsLLC.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm transition-colors">
                  <Globe className="w-4 h-4" />
                  913SolutionsLLC.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} 913 Solutions LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
