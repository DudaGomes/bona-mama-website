"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

type NavItem = { label: string; href: string }

function NavLink({ href, label, active, onClick }: { href: string; label: string; active?: boolean; onClick?: (e: React.MouseEvent) => void }) {
  return (
    <Link 
      href={href} 
      onClick={onClick} 
      data-active={active ? "true" : "false"} 
      className="nav-underline font-neulis text-white font-bold transition-all duration-300 inline-block text-xl sm:text-2xl lg:text-3xl"
    >
      {label}
    </Link>
  )
}

export default function Header() {
  const pathname = usePathname() || "/"
  const isHome = pathname === "/"
  const [activeSection, setActiveSection] = useState("inicio")
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    if (!isHome) return

    const handleScroll = () => {
      const sections = ["inicio", "produtos", "sobre", "contato"]
      const scrollPosition = window.scrollY + 120

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            return
          }
        }
      }

      setActiveSection("inicio")
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isHome])

  const navItems: NavItem[] = [
    { label: "Início", href: isHome ? "#inicio" : "/#inicio" },
    { label: "Produtos", href: "/produtos" },
    { label: "Sobre Nós", href: isHome ? "#sobre" : "/#sobre" },
    { label: "Contato", href: isHome ? "#contato" : "/#contato" },
  ]

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const element = document.getElementById(href.slice(1))
      if (element) element.scrollIntoView({ behavior: "smooth" })
      setDrawerOpen(false)
    }
  }

  return (
    <header className="site-header sticky top-0 z-50 header-shadow">
      {/* Desktop - Grid Layout */}
      <div className="hidden lg:grid grid-cols-5 place-items-center h-20 lg:h-24 w-full">
        {/* Coluna 1: Início */}
        <NavLink
          href={navItems[0].href}
          label={navItems[0].label}
          active={
            (navItems[0].href === "/produtos" && pathname === "/produtos") ||
            (navItems[0].href.startsWith("#") && activeSection === navItems[0].href.slice(1))
          }
          onClick={(e) => handleNavClick(e as React.MouseEvent, navItems[0].href)}
        />

        {/* Coluna 2: Produtos */}
        <NavLink
          href={navItems[1].href}
          label={navItems[1].label}
          active={
            (navItems[1].href === "/produtos" && pathname === "/produtos") ||
            (navItems[1].href.startsWith("#") && activeSection === navItems[1].href.slice(1))
          }
          onClick={(e) => handleNavClick(e as React.MouseEvent, navItems[1].href)}
        />

        {/* Coluna 3: LOGO */}
        <div className="relative">
          <Link href="/">
            <Image 
              src="/bona-mama-sem-fundo.png" 
              alt="Bona Mama" 
              width={280} 
              height={95} 
              className="h-28 lg:h-32 w-auto drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]" 
              priority 
              style={{ marginBottom: '-20px' }}
            />
          </Link>
        </div>

        {/* Coluna 4: Sobre Nós */}
        <NavLink
          href={navItems[2].href}
          label={navItems[2].label}
          active={
            (navItems[2].href === "/produtos" && pathname === "/produtos") ||
            (navItems[2].href.startsWith("#") && activeSection === navItems[2].href.slice(1))
          }
          onClick={(e) => handleNavClick(e as React.MouseEvent, navItems[2].href)}
        />

        {/* Coluna 5: Contato */}
        <NavLink
          href={navItems[3].href}
          label={navItems[3].label}
          active={
            (navItems[3].href === "/produtos" && pathname === "/produtos") ||
            (navItems[3].href.startsWith("#") && activeSection === navItems[3].href.slice(1))
          }
          onClick={(e) => handleNavClick(e as React.MouseEvent, navItems[3].href)}
        />
      </div>

      {/* Mobile */}
      <div className="flex lg:hidden items-center justify-center h-20 px-4 relative">
        <button 
          aria-label="Abrir menu" 
          onClick={() => setDrawerOpen(true)} 
          className="text-white absolute left-4"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M4 12H20" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M4 18H20" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {/* Logo centralizada no mobile */}
        <Link href="/">
          <Image 
            src="/bona-mama-sem-fundo.png" 
            alt="Bona Mama" 
            width={140} 
            height={48} 
            className="h-16 w-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)]" 
            priority 
          />
        </Link>
      </div>

      {/* Mobile drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-[60] flex lg:hidden">
          <div 
            className="mobile-drawer-backdrop absolute inset-0" 
            onClick={() => setDrawerOpen(false)} 
          />
          <div className="relative ml-auto w-72 bg-white p-6 shadow-2xl">
            <button 
              onClick={() => setDrawerOpen(false)} 
              className="mb-8 text-black font-bold text-lg"
            >
              ✕ Fechar
            </button>
            <nav className="flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e as React.MouseEvent, item.href)}
                  className="font-neulis font-bold text-black text-lg hover:text-brand-orange transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
