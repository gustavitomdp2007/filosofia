import { PhilosophyQuote } from "./componentes/filofrases"
import { Header } from "./componentes/header.components"
import { Footer } from "./componentes/footer.componentes"

export default function Home() {
  return (
    <main className="min-h-screen philosophy-gradient relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-accent/5 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-32 left-1/4 w-40 h-40 bg-primary/3 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <Header />
      <PhilosophyQuote />
      <Footer />
    </main>
  )
}
