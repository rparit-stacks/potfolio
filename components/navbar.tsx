"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/theme-toggle"
import { Menu, X } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMobile()
  const pathname = usePathname()

  const navItems = [
    { name: "Home", href: "/", isRoute: true },
    { name: "About", href: "#about", isRoute: false },
    { name: "Projects", href: "/projects", isRoute: true },
    { name: "Services", href: "#what-i-can-do", isRoute: false },
    { name: "Skills", href: "#skills", isRoute: false },
    { name: "Contact", href: "#contact", isRoute: false },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string, isRoute: boolean) => {
    setIsMenuOpen(false)
    if (isRoute) {
      // Handle route navigation
      return
    } else {
      // Handle hash navigation
      if (pathname !== "/") {
        window.location.href = `/${href}`
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/90 dark:bg-jungle-900/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center gap-2">
              <img src="/pp.jpg" alt="Rohit Parit" className="h-10 w-10 rounded-md" />
              <div className="font-bold text-xl text-slate-800 dark:text-white flex items-center gap-2">
                Rohit<span className="text-jungle-500 dark:text-jungle-300">Parit</span>
                <img src="/icons8-spring-boot.svg" alt="Spring Boot" className="h-5 w-5" />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) =>
                item.isRoute ? (
                  <Button
                    key={item.name}
                    variant="ghost"
                    asChild
                    className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                  >
                    <Link href={item.href}>{item.name}</Link>
                  </Button>
                ) : (
                  <Button
                    key={item.name}
                    variant="ghost"
                    onClick={() => handleNavClick(item.href, item.isRoute)}
                    className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                  >
                    {item.name}
                  </Button>
                )
              )}
              <ThemeToggle />
            </nav>

            {/* Mobile Navigation Toggle */}
            <div className="flex items-center md:hidden gap-2">
              <ThemeToggle />
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-slate-800 dark:text-white" />
                ) : (
                  <Menu className="h-6 w-6 text-slate-800 dark:text-white" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && isMobile && (
        <div className="fixed inset-0 z-40 bg-white dark:bg-jungle-900/95 pt-16">
          <nav className="container mx-auto px-4 py-8 flex flex-col gap-4">
            {navItems.map((item) =>
              item.isRoute ? (
                <Button
                  key={item.name}
                  variant="ghost"
                  asChild
                  className="w-full justify-start text-lg py-4 text-slate-800 dark:text-white"
                >
                  <Link href={item.href}>{item.name}</Link>
                </Button>
              ) : (
                <Button
                  key={item.name}
                  variant="ghost"
                  onClick={() => handleNavClick(item.href, item.isRoute)}
                  className="w-full justify-start text-lg py-4 text-slate-800 dark:text-white"
                >
                  {item.name}
                </Button>
              )
            )}
          </nav>
        </div>
      )}
    </>
  )
}
