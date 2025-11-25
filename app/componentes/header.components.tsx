"use client"
import { Moon, Sun, Scroll, Feather, BookOpen, Heart } from "lucide-react"
import { PhilosophyButton } from "./filobotones"
import Link from "next/link"

export function Header() {
  return (
   <header className="w-full border-b border-border/30 glass-effect relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-50" />

      <div className="container mx-auto px-6 py-6 relative z-10">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20 group-hover:scale-105 transition-transform duration-300">
                <Scroll className="w-5 h-5 text-primary" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-accent/30 flex items-center justify-center">
                <Feather className="w-2.5 h-2.5 text-accent" />
              </div>
            </div>
            <div>
              <h1 className="text-xl font-semibold text-foreground tracking-tight">Filosofía Diaria</h1>
              <p className="text-xs text-muted-foreground font-light">Sabiduría atemporal</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/filosofos"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 text-sm group"
            >
              <BookOpen className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Filósofos
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

          <PhilosophyButton variant="secondary">
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Cambiar tema</span>
          </PhilosophyButton>
        </div>
      </div>
    </header>
  )
}
