"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Facebook, Twitter, Instagram, Linkedin, PinIcon as Pinterest, Search, Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Navbar() {
  const router = useRouter()
  const [language, setLanguage] = useState("es")

  const changeLanguage = (lang: string) => {
    setLanguage(lang)
    // In a real application, you would change the locale and redirect to the appropriate page
    // For this example, we'll just change the URL
    if (lang === "en") {
      router.push("/rooms")
    } else {
      router.push("/habitaciones")
    }
  }

  return (
    <div className="w-full bg-white">
      <div className="bg-[#262626] text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div>Calle Gran Vía 123, Madrid 28013</div>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-gold transition-colors">
              <Facebook className="w-4 h-4" />
            </Link>
            <Link href="#" className="hover:text-gold transition-colors">
              <Twitter className="w-4 h-4" />
            </Link>
            <Link href="#" className="hover:text-gold transition-colors">
              <Instagram className="w-4 h-4" />
            </Link>
            <Link href="#" className="hover:text-gold transition-colors">
              <Linkedin className="w-4 h-4" />
            </Link>
            <Link href="#" className="hover:text-gold transition-colors">
              <Pinterest className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-6 px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl font-semibold">HOTEL MASTER</div>
            <div className="flex">
              {"★★★★★".split("").map((star, i) => (
                <span key={i} className="text-[#b4975a]">
                  {star}
                </span>
              ))}
            </div>
          </Link>
          <nav className="hidden md:flex gap-8 uppercase text-sm">
            <Link href="/" className="hover:text-[#b4975a] transition-colors">
              {language === "es" ? "Inicio" : "Home"}
            </Link>
            <Link href="/about" className="hover:text-[#b4975a] transition-colors">
              {language === "es" ? "Sobre Nosotros" : "About"}
            </Link>
            <Link
              href={language === "es" ? "/habitaciones" : "/rooms"}
              className="hover:text-[#b4975a] transition-colors"
            >
              {language === "es" ? "Habitaciones" : "Rooms"}
            </Link>
            <Link href="/reservation" className="hover:text-[#b4975a] transition-colors">
              {language === "es" ? "Reservas" : "Reservation"}
            </Link>
            <Link href="/blog" className="hover:text-[#b4975a] transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-[#b4975a] transition-colors">
              {language === "es" ? "Contacto" : "Contact"}
            </Link>
            <button className="hover:text-[#b4975a] transition-colors">
              <Search className="w-4 h-4" />
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger className="hover:text-[#b4975a] transition-colors">
                <Globe className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => changeLanguage("es")}>Español</DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage("en")}>Inglés</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </div>
    </div>
  )
}

