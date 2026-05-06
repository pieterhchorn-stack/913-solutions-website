"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const navLinks = [
  { href: "#home", label: "HOME" },
  { href: "#about", label: "ABOUT US" },
  { href: "#services", label: "SERVICES" },
  { href: "#areas", label: "SERVICE AREAS" },
  { href: "#contact", label: "CONTACT" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/913-logo.png"
            alt="913 Solutions Plumbing"
            width={140}
            height={80}
            className="h-14 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button className="bg-primary hover:bg-primary/80 text-primary-foreground px-6">
            GET A QUOTE
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="lg:hidden bg-background border-t border-border/50 py-4">
          <div className="container mx-auto px-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button className="bg-primary hover:bg-primary/80 text-primary-foreground w-full mt-2">
              GET A QUOTE
            </Button>
          </div>
        </nav>
      )}
    </header>
  )
}
