import { Scroll, Feather, Mail, Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/30 glass-effect relative mt-auto">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-30" />

      <div className="container mx-auto px-6 py-10 relative z-10">
        <div className="flex flex-col items-center justify-center gap-6">
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

          <div className="flex flex-col items-center gap-4">
            <h3 className="text-sm font-medium text-foreground/80 flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              Contacto
            </h3>

            <div className="flex items-center gap-6">
              <a
                href="mailto:tu-email@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </div>
                <span className="hidden sm:inline">Email</span>
              </a>

              <a
                href="https://github.com/tu-usuario"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                  <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </div>
                <span className="hidden sm:inline">GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/tu-usuario"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                  <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </div>
                <span className="hidden sm:inline">LinkedIn</span>
              </a>

              <a
                href="https://twitter.com/tu-usuario"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                  <Twitter className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </div>
                <span className="hidden sm:inline">Twitter</span>
              </a>
            </div>
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
