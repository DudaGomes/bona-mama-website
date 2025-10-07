"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Header() {
  const [activeSection, setActiveSection] = useState("inicio")
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    if (!isHome) return

    const handleScroll = () => {
      const sections = ["inicio", "produtos", "sobre", "contato"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isHome])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const element = document.getElementById(href.slice(1))
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  const navItems = [
    { label: "Início", href: isHome ? "#inicio" : "/#inicio" },
    { label: "Produtos", href: "/produtos" },
    { label: "Sobre Nós", href: isHome ? "#sobre" : "/#sobre" },
    { label: "Contato", href: isHome ? "#contato" : "/#contato" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-orange shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex-1" />

          <Link href="/" className="flex-shrink-0">
            <Image
              src="/bona-mama-sem-fundo.png"
              alt="Bona Mama Logo"
              width={120}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          <div className="flex-1 flex justify-end">
            <ul className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`text-white font-bold text-lg transition-all duration-200 hover:text-brand-beige ${
                      (item.href === "/produtos" && pathname === "/produtos") ||
                      (item.href.startsWith("#") && activeSection === item.href.slice(1))
                        ? "border-b-2 border-white"
                        : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile menu */}
        <ul className="flex md:hidden justify-center gap-4 mt-4">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-white font-bold text-sm transition-all duration-200 hover:text-brand-beige ${
                  (item.href === "/produtos" && pathname === "/produtos") ||
                  (item.href.startsWith("#") && activeSection === item.href.slice(1))
                    ? "border-b-2 border-white"
                    : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
