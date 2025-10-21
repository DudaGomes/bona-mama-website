"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

type NavItem = { label: string; href: string }

function NavLink({ href, label, active, onClick }: { href: string; label: string; active?: boolean; onClick?: (e: React.MouseEvent) => void }) {
  return (
    <Link href={href} onClick={onClick} data-active={active ? "true" : "false"} className="nav-underline font-neulis text-white font-bold transition-colors duration-150">
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

  const leftItems = navItems.slice(0, 2)
  const rightItems = navItems.slice(2)

  return (
    <header className="site-header sticky top-0 z-50 header-shadow relative">
      <div className="container mx-auto px-4 h-20 lg:h-24">
        {/* Absolute centered logo that overlaps the section below */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-12px] lg:bottom-[-16px] w-32 lg:w-44 xl:w-52 h-auto z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)]">
          <Link href="/">
            <Image src="/bona-mama-sem-fundo.png" alt="Bona Mama" width={520} height={180} className="w-full h-auto" priority />
          </Link>
        </div>
        {/* Desktop nav */}
        <div className="hidden lg:flex items-center justify-between h-full">
          <ul className="flex items-center gap-6 sm:gap-8 lg:gap-10">
            {leftItems.map((item) => (
              <li key={item.label} className="nav-item" aria-current={item.href === pathname ? "page" : undefined}>
                <NavLink
                  href={item.href}
                  label={item.label}
                  active={
                    (item.href === "/produtos" && pathname === "/produtos") ||
                    (item.href.startsWith("#") && activeSection === item.href.slice(1))
                  }
                  onClick={(e) => handleNavClick(e as React.MouseEvent, item.href)}
                />
              </li>
            ))}
          </ul>

          {/* Center logo with slight overlap */}
          <div className="logo-overlap">
            <Link href="/">
              <Image src="/bona-mama-sem-fundo.png" alt="Bona Mama" width={260} height={90} className="h-20 w-auto" priority />
            </Link>
          </div>

          <ul className="flex items-center gap-6 sm:gap-8 lg:gap-10">
            {rightItems.map((item) => (
              <li key={item.label} className="nav-item" aria-current={item.href === pathname ? "page" : undefined}>
                <NavLink
                  href={item.href}
                  label={item.label}
                  active={
                    (item.href === "/produtos" && pathname === "/produtos") ||
                    (item.href.startsWith("#") && activeSection === item.href.slice(1))
                  }
                  onClick={(e) => handleNavClick(e as React.MouseEvent, item.href)}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile */}
        <div className="flex lg:hidden items-center justify-between h-20 lg:h-24 py-2">
          <button aria-label="Abrir menu" onClick={() => setDrawerOpen(true)} className="text-white">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <path d="M4 12H20" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <path d="M4 18H20" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          <div className="flex-shrink-0">
            <Link href="/">
              <Image src="/bona-mama-sem-fundo.png" alt="Bona Mama" width={180} height={64} className="h-12 w-auto" priority />
            </Link>
          </div>

          <div style={{ width: 28 }} />
        </div>

        {/* Mobile drawer */}
        {drawerOpen && (
          <div className="fixed inset-0 z-40 flex">
            <div className="mobile-drawer-backdrop absolute inset-0" onClick={() => setDrawerOpen(false)} />
            <div className="relative ml-auto w-72 bg-white p-6">
              <button onClick={() => setDrawerOpen(false)} className="mb-4 text-black">Fechar</button>
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a key={item.label} href={item.href} onClick={(e) => handleNavClick(e as React.MouseEvent, item.href)} className="font-neulis font-bold text-black text-base sm:text-lg lg:text-xl">
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

