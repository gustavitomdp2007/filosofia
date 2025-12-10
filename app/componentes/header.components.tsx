"use client"

import { PhilosophyButton } from "../componentes/filobotones"
import { Moon, Sun, Scroll, Feather, BookOpen, Heart, Brain, Menu, X } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export function Header() {
  const [isDark, setIsDark] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const isDarkMode = localStorage.getItem("theme") === "dark"
    setIsDark(isDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newDarkMode = !isDark
    setIsDark(newDarkMode)
    if (newDarkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { href: "/", label: "Inicio", icon: Scroll },
    { href: "/filosofos", label: "Filósofos", icon: BookOpen },
    { href: "/consejero", label: "Consejero IA", icon: Brain },
    { href: "/que-es-filosofia", label: "Qué es Filosofía", icon: Feather },
    { href: "/guardados", label: "Guardados", icon: Heart },
    { href: "/acerca", label: "Acerca", icon: Feather },
  ]

  return (
    <>
      <header
        className={`w-full border-b border-border/30 glass-effect relative sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "backdrop-blur-xl bg-background/80 shadow-lg" : "backdrop-blur-sm bg-background/50"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-50" />

        <div className="container mx-auto px-4 md:px-6 py-4 md:py-6 relative z-10">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 md:space-x-3 group">
              <div className="relative">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20 group-hover:scale-105 transition-transform duration-300">
                  <Scroll className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 rounded-full bg-accent/30 flex items-center justify-center">
                  <Feather className="w-2 h-2 md:w-2.5 md:h-2.5 text-accent" />
                </div>
              </div>
              <div>
                <h1 className="text-base md:text-xl font-semibold text-foreground tracking-tight">Filosofía Diaria</h1>
                <p className="text-xs text-muted-foreground font-light hidden md:block">Sabiduría atemporal</p>
              </div>
            </Link>

            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <Link
                href="/filosofos"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 text-sm group"
              >
                <BookOpen className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Filósofos
              </Link>
              <Link
                href="/consejero"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 text-sm group"
              >
                <Brain className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Consejero
              </Link>
              <Link
                href="/que-es-filosofia"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 text-sm group"
              >
                <Scroll className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Qué es Filosofía
              </Link>
              <Link
                href="/guardados"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 text-sm group"
              >
                <Heart className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Guardados
              </Link>
              <Link
                href="/acerca"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 text-sm group"
              >
                <Feather className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Acerca
              </Link>
            </nav>

            <div className="flex items-center gap-2 md:gap-3">
              <PhilosophyButton
                variant="secondary"
                className="w-9 h-9 p-0 rounded-full md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                <span className="sr-only">Menú</span>
              </PhilosophyButton>

              <PhilosophyButton
                variant="secondary"
                className="w-9 h-9 md:w-10 md:h-10 p-0 rounded-full hover:scale-105"
                onClick={toggleTheme}
              >
                {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                <span className="sr-only">Cambiar tema</span>
              </PhilosophyButton>
            </div>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden" style={{ top: "calc(4rem + 1px)" }}>
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm animate-fadeIn"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menú */}
          <nav className="relative bg-background/95 backdrop-blur-xl border-b border-border shadow-2xl animate-slideDown">
            <div className="container mx-auto px-4 py-6 space-y-1">
              {navLinks.map((link) => {
                const Icon = link.icon
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "bg-primary/10 text-primary border border-primary/20"
                        : "text-muted-foreground hover:bg-primary/5 hover:text-primary"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{link.label}</span>
                  </Link>
                )
              })}
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
