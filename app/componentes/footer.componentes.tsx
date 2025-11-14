import { Scroll, Feather, Heart, Globe } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/30 glass-effect relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-30" />

      <div className="container mx-auto px-6 py-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20 group-hover:rotate-12 transition-transform duration-500">
                <Scroll className="w-4 h-4 text-primary" />
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-accent/30 flex items-center justify-center">
                <Feather className="w-2 h-2 text-accent" />
              </div>
            </div>
            <div>
              <span className="text-sm font-medium text-foreground">Filosofía Diaria</span>
              <p className="text-xs text-muted-foreground">Reflexiones para el alma</p>
            </div>
          </div>

          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#" className="flex items-center gap-2 hover:text-primary transition-all duration-300 group">
              <Globe className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
              Privacidad
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-primary transition-all duration-300 group">
              <Scroll className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
              Términos
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-primary transition-all duration-300 group">
              <Heart className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
              Contacto
            </a>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© 2025</span>
            <div className="w-1 h-1 rounded-full bg-primary/50" />
            <span className="font-light">Sabiduría que trasciende el tiempo</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
