"use client"

import { Header } from "../componentes/header.components"
import { Footer } from "../componentes/footer.componentes"
import { Feather, Heart, Sparkles, Globe, BookOpen, Users, Shield, Lock, Eye } from "lucide-react"
import { useState, useEffect } from "react"

export default function AcercaPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 mb-6">
              <Feather className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Acerca de Filosofía Diaria
            </h1>
            <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
              Un refugio digital para la contemplación y el pensamiento profundo.
            </p>
          </div>

          {/* Mission Section */}
          <div className="space-y-8 mb-16">
            <div className="glass-effect rounded-2xl p-8 border border-border/30 animate-slide-in-up">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-3">Nuestra Misión</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Filosofía Diaria nace con el propósito de acercar la sabiduría atemporal de los grandes pensadores a
                    tu vida cotidiana. Creemos que la filosofía no es solo para académicos, sino una herramienta vital
                    para vivir con mayor conciencia, propósito y claridad.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="glass-effect rounded-2xl p-8 border border-border/30 animate-slide-in-up"
              style={{ animationDelay: "100ms" }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-3">¿Qué Ofrecemos?</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Cada día, te presentamos una frase filosófica cuidadosamente seleccionada de pensadores de todas las
                    épocas y culturas. Desde los antiguos griegos hasta los existencialistas modernos, cada cita viene
                    acompañada de contexto histórico y filosófico para enriquecer tu comprensión.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div
              className="glass-effect rounded-xl p-6 border border-border/30 hover:border-primary/30 transition-all duration-500 animate-slide-in-up"
              style={{ animationDelay: "200ms" }}
            >
              <Globe className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Perspectivas Globales</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Exploramos filosofías de Oriente y Occidente, desde Confucio hasta Nietzsche, ofreciendo una visión
                verdaderamente universal.
              </p>
            </div>

            <div
              className="glass-effect rounded-xl p-6 border border-border/30 hover:border-primary/30 transition-all duration-500 animate-slide-in-up"
              style={{ animationDelay: "250ms" }}
            >
              <BookOpen className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Contexto Enriquecedor</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Cada frase incluye información sobre su origen, significado y relevancia, ayudándote a comprender su
                profundidad.
              </p>
            </div>

            <div
              className="glass-effect rounded-xl p-6 border border-border/30 hover:border-primary/30 transition-all duration-500 animate-slide-in-up"
              style={{ animationDelay: "300ms" }}
            >
              <Users className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Comunidad Reflexiva</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Únete a una comunidad de pensadores que buscan vivir con mayor intención y sabiduría cada día.
              </p>
            </div>

            <div
              className="glass-effect rounded-xl p-6 border border-border/30 hover:border-primary/30 transition-all duration-500 animate-slide-in-up"
              style={{ animationDelay: "350ms" }}
            >
              <Sparkles className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Diseño Contemplativo</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Una experiencia minimalista y elegante que invita a la reflexión y elimina distracciones innecesarias.
              </p>
            </div>
          </div>

          {/* Privacy Section */}
          <div className="space-y-8 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-3">Privacidad y Datos</h2>
              <p className="text-muted-foreground">Tu tranquilidad es nuestra prioridad</p>
            </div>

            <div
              className="glass-effect rounded-2xl p-8 border border-border/30 animate-slide-in-up"
              style={{ animationDelay: "450ms" }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Protección de Datos</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    En Filosofía Diaria, respetamos profundamente tu privacidad. No recopilamos, almacenamos ni
                    compartimos ninguna información personal identificable.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Lock className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>No requerimos registro ni cuentas de usuario</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Lock className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>No rastreamos tu actividad ni navegación</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Lock className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>No compartimos datos con terceros</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              className="glass-effect rounded-2xl p-8 border border-border/30 animate-slide-in-up"
              style={{ animationDelay: "500ms" }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Almacenamiento Local</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Las frases que guardas se almacenan únicamente en tu dispositivo mediante localStorage. Esto
                    significa:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Tus frases guardadas permanecen privadas en tu navegador</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>No tenemos acceso a lo que guardas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Puedes eliminar tus datos en cualquier momento</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              className="glass-effect rounded-2xl p-6 border border-accent/30 bg-accent/5 animate-fade-in"
              style={{ animationDelay: "550ms" }}
            >
              <p className="text-sm text-muted-foreground text-center">
                <strong className="text-foreground">Compromiso de transparencia:</strong> Esta aplicación es de código
                abierto y puede ser auditada por cualquier persona. No usamos cookies de seguimiento, análisis invasivos
                ni publicidad personalizada.
              </p>
            </div>
          </div>

          {/* Quote Section */}
          <div
            className="glass-effect rounded-2xl p-8 border border-primary/30 text-center animate-fade-in"
            style={{ animationDelay: "400ms" }}
          >
            <Feather className="w-12 h-12 text-primary mx-auto mb-6 animate-float" />
            <blockquote className="text-xl md:text-2xl text-foreground font-serif italic leading-relaxed mb-4 text-balance">
              "La filosofía es el arte de vivir bien"
            </blockquote>
            <cite className="text-muted-foreground not-italic">— Epicuro</cite>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
