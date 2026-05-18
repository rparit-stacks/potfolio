"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import ThemeToggle from "@/components/theme-toggle"
import { Menu, X } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

const navItems = [
  { name: "Home", href: "/", isRoute: true },
  { name: "About", href: "#about", isRoute: false },
  { name: "Skills", href: "#skills", isRoute: false },
  { name: "Projects", href: "/projects", isRoute: true },
  { name: "Services", href: "#what-i-can-do", isRoute: false },
  { name: "Contact", href: "#contact", isRoute: false },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const isMobile = useMobile()
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const goTo = (href: string, isRoute: boolean) => {
    setIsMenuOpen(false)
    if (isRoute) return
    if (pathname !== "/") {
      window.location.href = `/${href}`
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <header className="fixed top-3 md:top-4 left-0 right-0 z-50 px-3 md:px-6 pointer-events-none">
        <div
          className={`mx-auto pointer-events-auto transition-all duration-300 max-w-5xl flex items-center justify-between gap-3 ios-glass-strong rounded-full border ${
            isScrolled ? "shadow-[0_8px_30px_-12px_rgba(0,0,0,0.18)]" : "shadow-sm"
          } px-3 md:px-4 h-12 md:h-14`}
        >
          <Link href="/" className="flex items-center gap-2 pl-1">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#0a84ff] to-[#5e5ce6] text-white font-semibold text-sm shadow-[0_4px_10px_-3px_rgba(10,132,255,0.5)]">
              R
            </span>
            <span className="font-semibold tracking-tight text-[15px] hidden sm:block">
              Rohit<span className="text-[var(--ios-text-muted)]"> · Parit</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-[var(--ios-text-muted)]">
            {navItems.map((item) =>
              item.isRoute ? (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-1.5 rounded-full hover:text-[var(--ios-text)] hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition"
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => goTo(item.href, item.isRoute)}
                  className="px-3 py-1.5 rounded-full hover:text-[var(--ios-text)] hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition"
                >
                  {item.name}
                </button>
              )
            )}
          </nav>

          <div className="flex items-center gap-1">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-full hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile sheet */}
      {isMenuOpen && isMobile && (
        <div className="fixed inset-0 z-40 pt-24 px-4">
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="relative ios-glass-strong rounded-3xl p-3 shadow-2xl">
            <nav className="flex flex-col">
              {navItems.map((item, i) => (
                <div key={item.name}>
                  {item.isRoute ? (
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-between px-4 py-3.5 rounded-2xl hover:bg-black/[0.04] dark:hover:bg-white/[0.06]"
                    >
                      <span className="font-medium text-[15px]">{item.name}</span>
                      <span className="text-[var(--ios-text-muted)]">›</span>
                    </Link>
                  ) : (
                    <button
                      onClick={() => goTo(item.href, item.isRoute)}
                      className="w-full flex items-center justify-between px-4 py-3.5 rounded-2xl hover:bg-black/[0.04] dark:hover:bg-white/[0.06]"
                    >
                      <span className="font-medium text-[15px]">{item.name}</span>
                      <span className="text-[var(--ios-text-muted)]">›</span>
                    </button>
                  )}
                  {i < navItems.length - 1 && (
                    <div className="ios-divider mx-4" />
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
