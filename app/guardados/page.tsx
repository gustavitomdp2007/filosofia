"use client"

import { Header } from "../componentes/header.components"
import { Footer } from "../componentes/footer.componentes"
import { Heart, Trash2, Share2, Calendar, Scroll, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"
import { PhilosophyButton } from "../componentes/filobotones"

interface SavedQuote {
  text: string
  author: string
  period: string
  school: string
  savedAt: string
  meaning?: string
  origin?: string
}

export default function GuardadosPage() {
  const [savedQuotes, setSavedQuotes] = useState<SavedQuote[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const quotes = JSON.parse(localStorage.getItem("savedQuotes") || "[]")
    setSavedQuotes(quotes)
  }, [])

  const removeQuote = (text: string) => {
    const filtered = savedQuotes.filter((q) => q.text !== text)
    localStorage.setItem("savedQuotes", JSON.stringify(filtered))
    setSavedQuotes(filtered)
  }

  const shareQuote = async (quote: SavedQuote) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Filosofía Diaria",
          text: `"${quote.text}" - ${quote.author}`,
          url: window.location.origin,
        })
      } catch (err) {
        console.log("Error sharing:", err)
      }
    } else {
      navigator.clipboard.writeText(`"${quote.text}" - ${quote.author}`)
    }
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 container mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 mb-6">
              <Heart className="w-10 h-10 text-primary fill-current" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Frases Guardadas</h1>
            <p className="text-lg text-muted-foreground text-balance">
              {savedQuotes.length === 0
                ? "Aún no has guardado ninguna frase filosófica"
                : `${savedQuotes.length} ${savedQuotes.length === 1 ? "frase guardada" : "frases guardadas"}`}
            </p>
          </div>

          {savedQuotes.length === 0 ? (
            <div className="glass-effect rounded-2xl p-12 border border-border/30 text-center animate-fade-in">
              <Sparkles className="w-16 h-16 text-muted-foreground mx-auto mb-6 opacity-50" />
              <p className="text-muted-foreground mb-4">
                Guarda tus frases filosóficas favoritas para volver a ellas cuando lo necesites.
              </p>
              <PhilosophyButton variant="primary" onClick={() => (window.location.href = "/")}>
                <Scroll className="w-4 h-4" />
                Descubrir Frases
              </PhilosophyButton>
            </div>
          ) : (
            <div className="space-y-6">
              {savedQuotes.map((quote, index) => (
                <div
                  key={index}
                  className="glass-effect rounded-2xl p-8 border border-border/30 hover:border-primary/30 transition-all duration-500 animate-slide-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="space-y-4">
                    <blockquote className="text-xl md:text-2xl font-serif leading-relaxed text-foreground text-balance">
                      "{quote.text}"
                    </blockquote>

                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div>
                        <cite className="text-lg font-semibold text-primary not-italic block mb-1">{quote.author}</cite>
                        <div className="text-sm text-muted-foreground space-y-0.5">
                          <p>{quote.period}</p>
                          <p className="text-xs uppercase tracking-wider text-accent">{quote.school}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          {new Date(quote.savedAt).toLocaleDateString("es-ES", {
                            day: "numeric",
                            month: "short",
                          })}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                      <PhilosophyButton variant="secondary" onClick={() => shareQuote(quote)}>
                        <Share2 className="w-4 h-4" />
                        Compartir
                      </PhilosophyButton>

                      <PhilosophyButton variant="secondary" onClick={() => removeQuote(quote.text)}>
                        <Trash2 className="w-4 h-4" />
                        Eliminar
                      </PhilosophyButton>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
