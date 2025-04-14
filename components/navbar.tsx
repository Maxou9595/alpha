"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-black border-alpha-blue/20 text-white">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/alpha%20assurance%20logo-XtgTNVkllmmsO4V59sKuOes9mAYtcu.png"
            alt="Alpha Assurance Logo"
            width={180}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-alpha-blue-light text-white">
            Accueil
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-alpha-blue-light text-white">
              Nos Assurances <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-alpha-black-light text-white border-alpha-blue/20">
              <DropdownMenuItem
                asChild
                className="hover:bg-alpha-blue hover:text-white focus:bg-alpha-blue focus:text-white"
              >
                <Link href="/assurance-auto">Assurance Auto</Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                asChild
                className="hover:bg-alpha-blue hover:text-white focus:bg-alpha-blue focus:text-white"
              >
                <Link href="/assurance-habitation">Assurance Habitation</Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                asChild
                className="hover:bg-alpha-blue hover:text-white focus:bg-alpha-blue focus:text-white"
              >
                <Link href="/assurance-sante">Assurance Santé</Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                asChild
                className="hover:bg-alpha-blue hover:text-white focus:bg-alpha-blue focus:text-white"
              >
                <Link href="/assurance-vie">Assurance Vie</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            href="/a-propos"
            className="text-sm font-medium transition-colors hover:text-alpha-blue-light text-white"
          >
            À Propos
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium transition-colors hover:text-alpha-blue-light text-white"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex gap-4 items-center">
          <a
            href="tel:0123456789"
            className="flex items-center text-alpha-blue-light hover:text-alpha-blue transition-colors"
          >
            <Phone className="h-4 w-4 mr-2" />
            <span className="font-medium">01 23 45 67 89</span>
          </a>
          <Link href="/devis">
            <Button className="bg-alpha-blue hover:bg-alpha-blue-light">Demander un Devis</Button>
          </Link>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Menu</span>
        </button>
      </div>

      {isMenuOpen && (
        <div className="container md:hidden py-4">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-alpha-blue-light"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between text-sm font-medium transition-colors hover:text-alpha-blue-light">
                Nos Assurances <ChevronDown className="h-4 w-4" />
              </summary>
              <div className="mt-2 ml-4 flex flex-col gap-2">
                <Link
                  href="/assurance-auto"
                  className="text-sm transition-colors hover:text-alpha-blue-light"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Assurance Auto
                </Link>
                <Link
                  href="/assurance-habitation"
                  className="text-sm transition-colors hover:text-alpha-blue-light"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Assurance Habitation
                </Link>
                <Link
                  href="/assurance-sante"
                  className="text-sm transition-colors hover:text-alpha-blue-light"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Assurance Santé
                </Link>
                <Link
                  href="/assurance-vie"
                  className="text-sm transition-colors hover:text-alpha-blue-light"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Assurance Vie
                </Link>
              </div>
            </details>
            <Link
              href="/a-propos"
              className="text-sm font-medium transition-colors hover:text-alpha-blue-light"
              onClick={() => setIsMenuOpen(false)}
            >
              À Propos
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium transition-colors hover:text-alpha-blue-light"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col gap-2 mt-4">
              <a
                href="tel:0123456789"
                className="flex items-center justify-center text-alpha-blue-light p-2 border border-alpha-blue-light rounded-md hover:bg-alpha-blue-light/10 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="h-4 w-4 mr-2" />
                <span className="font-medium">01 23 45 67 89</span>
              </a>
              <Link href="/devis" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-alpha-blue hover:bg-alpha-blue-light">Demander un Devis</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
