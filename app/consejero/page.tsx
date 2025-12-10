"use client"

import type React from "react"

import { Header } from "../componentes/header.components"
import { Footer } from "../componentes/footer.componentes"
import { PhilosophyButton } from "../componentes/filobotones"
import { useRef, useEffect } from "react"
import { Send, Sparkles, User, Brain, Loader2 } from "lucide-react"
import { useChat } from "ai/react"

export default function ConsejeroPage() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, setInput } = useChat({
    api: "/api/chat-filosofico",
    initialMessages: [
      {
        id: "1",
        role: "assistant",
        content:
          "Bienvenido al Consejero Filosófico. Soy un guía que te ayudará a reflexionar sobre tus inquietudes desde la sabiduría de grandes pensadores. ¿Qué te preocupa hoy?",
      },
    ],
  })

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e as any)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-primary/5">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8 text-center space-y-3 fade-in">
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/30">
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">Consejero Filosófico</h1>
          </div>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            Consulta tus inquietudes y recibe orientación basada en la sabiduría de presocráticos, estoicos,
            existencialistas y filósofos contemporáneos
          </p>
        </div>

        <div className="glass-effect rounded-2xl border border-border/30 overflow-hidden shadow-2xl">
          <div className="h-[500px] md:h-[600px] overflow-y-auto p-4 md:p-6 space-y-4 bg-gradient-to-b from-background/50 to-background/80">
            {messages.map((message, index) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"} fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {message.role === "assistant" && (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/30 flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-primary" />
                  </div>
                )}

                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.role === "user"
                      ? "bg-primary/20 border border-primary/30 text-foreground"
                      : "bg-accent/10 border border-accent/20 text-foreground"
                  }`}
                >
                  <p className="text-sm md:text-base whitespace-pre-wrap leading-relaxed">{message.content}</p>
                </div>

                {message.role === "user" && (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center border border-accent/30 flex-shrink-0">
                    <User className="w-4 h-4 text-accent" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-3 justify-start fade-in">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/30">
                  <Loader2 className="w-4 h-4 text-primary animate-spin" />
                </div>
                <div className="max-w-[80%] rounded-2xl px-4 py-3 bg-accent/10 border border-accent/20">
                  <p className="text-sm md:text-base text-muted-foreground">Reflexionando...</p>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-border/30 p-4 bg-background/80 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <textarea
                ref={inputRef}
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Escribe tu pregunta o inquietud..."
                className="flex-1 bg-background/50 border border-border/30 rounded-xl px-4 py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none min-h-[50px] max-h-[150px]"
                rows={1}
                disabled={isLoading}
              />
              <PhilosophyButton
                type="submit"
                variant="primary"
                className="px-4 md:px-6 rounded-xl self-end"
                disabled={isLoading || !input.trim()}
              >
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              </PhilosophyButton>
            </form>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={() => setInput("¿Cómo puedo encontrar el sentido de mi vida?")}
            className="glass-effect p-4 rounded-xl border border-border/30 text-left hover:border-primary/40 transition-all duration-300 hover:scale-105"
          >
            <p className="text-sm text-foreground font-medium">¿Cómo encontrar sentido?</p>
            <p className="text-xs text-muted-foreground mt-1">Explora el propósito existencial</p>
          </button>
          <button
            onClick={() => setInput("¿Cómo puedo ser más feliz en mi día a día?")}
            className="glass-effect p-4 rounded-xl border border-border/30 text-left hover:border-primary/40 transition-all duration-300 hover:scale-105"
          >
            <p className="text-sm text-foreground font-medium">Búsqueda de felicidad</p>
            <p className="text-xs text-muted-foreground mt-1">Descubre la eudaimonía</p>
          </button>
          <button
            onClick={() => setInput("¿Cómo enfrentar las dificultades con sabiduría?")}
            className="glass-effect p-4 rounded-xl border border-border/30 text-left hover:border-primary/40 transition-all duration-300 hover:scale-105"
          >
            <p className="text-sm text-foreground font-medium">Enfrentar adversidades</p>
            <p className="text-xs text-muted-foreground mt-1">Aprende del estoicismo</p>
          </button>
        </div>
      </main>

      <Footer />
    </div>
  )
}
