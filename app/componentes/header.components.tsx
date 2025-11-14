import { Moon, Sun, Scroll, Feather, BookOpen } from "lucide-react"

export function Header() {
  return (
    <header className="w-full border-b border-border/30 glass-effect relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-50" />

      <div className="container mx-auto px-6 py-4 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 group">
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
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 text-sm group"
            >
              <BookOpen className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Filósofos
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 text-sm group"
            >
              <Scroll className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Archivo
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 text-sm group"
            >
              <Feather className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Acerca
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
