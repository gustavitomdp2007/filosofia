"use client"

import { Header } from "../componentes/header.components"
import { Footer } from "../componentes/footer.componentes"
import {
  Brain,
  BookOpen,
  Lightbulb,
  Users,
  History,
  Target,
  Sparkles,
  Quote,
  X,
  Scroll,
  Scale,
  Globe,
} from "lucide-react"
import { useEffect, useRef, useState } from "react"

interface Branch {
  name: string
  icon: any
  description: string
  detailedDescription: string
  keyQuestions: string[]
  famousPhilosophers: { name: string; contribution: string }[]
  examples: string[]
  modernRelevance: string
}

const branches: Branch[] = [
  {
    name: "Metafísica",
    icon: Sparkles,
    description: "Estudia la naturaleza de la realidad, el ser, la existencia y el universo",
    detailedDescription:
      "La metafísica es la rama más fundamental de la filosofía, dedicada a explorar la estructura última de la realidad. Investiga qué existe realmente, cómo existe y qué significa 'ser'. Se pregunta sobre la naturaleza del tiempo, el espacio, la causalidad, y si existe algo más allá del mundo físico observable.",
    keyQuestions: [
      "¿Qué es la realidad?",
      "¿Existe algo más allá del mundo material?",
      "¿Qué es el tiempo y el espacio?",
      "¿Existe Dios o un ser supremo?",
      "¿Cuál es la relación entre la mente y el cuerpo?",
      "¿Por qué existe algo en lugar de nada?",
    ],
    famousPhilosophers: [
      { name: "Aristóteles", contribution: "Definió la metafísica como 'la ciencia del ser en cuanto ser'" },
      { name: "Descartes", contribution: "Dualismo mente-cuerpo y la naturaleza de la sustancia" },
      { name: "Leibniz", contribution: "Teoría de las mónadas y la armonía preestablecida" },
      { name: "Heidegger", contribution: "Exploró el significado del 'ser' en la existencia humana" },
    ],
    examples: [
      "Debatir si el libre albedrío es compatible con el determinismo",
      "Cuestionar si los universales (como 'bondad' o 'belleza') existen independientemente",
      "Explorar si el tiempo es una ilusión o una realidad fundamental",
    ],
    modernRelevance:
      "La metafísica es crucial en debates sobre la naturaleza de la conciencia en IA, la interpretación de la mecánica cuántica, y cuestiones sobre realidad virtual y simulaciones.",
  },
  {
    name: "Epistemología",
    icon: Lightbulb,
    description: "Investiga el conocimiento, su naturaleza, origen y límites",
    detailedDescription:
      "La epistemología es el estudio del conocimiento mismo. Se pregunta qué significa 'conocer' algo, cómo justificamos nuestras creencias, y qué métodos son válidos para adquirir conocimiento. Distingue entre conocimiento, creencia y opinión, y explora los límites de lo que podemos saber.",
    keyQuestions: [
      "¿Qué es el conocimiento?",
      "¿Cómo justificamos nuestras creencias?",
      "¿Es posible el conocimiento absoluto?",
      "¿Cuál es la diferencia entre conocimiento y opinión?",
      "¿Pueden los sentidos engañarnos?",
      "¿Existe conocimiento innato o todo viene de la experiencia?",
    ],
    famousPhilosophers: [
      { name: "Platón", contribution: "Teoría de las formas y el conocimiento como recuerdo" },
      { name: "Locke", contribution: "Empirismo: la mente como 'tabula rasa'" },
      { name: "Kant", contribution: "Síntesis entre racionalismo y empirismo" },
      { name: "Gettier", contribution: "Desafió la definición tradicional de conocimiento" },
    ],
    examples: [
      "Analizar si podemos estar seguros de que el mundo externo existe",
      "Evaluar la fiabilidad de testimonios y noticias en la era digital",
      "Considerar cómo sabemos que 2+2=4 de manera diferente a saber que llueve",
    ],
    modernRelevance:
      "Fundamental para entender las fake news, la verificación de hechos, la epistemología de datos masivos y la confiabilidad de los algoritmos de IA.",
  },
  {
    name: "Ética",
    icon: Target,
    description: "Examina la moral, el bien, el mal y cómo debemos vivir",
    detailedDescription:
      "La ética es la reflexión filosófica sobre la moralidad y la conducta humana. Investiga qué acciones son correctas o incorrectas, qué es una vida buena, y cómo debemos tratar a los demás. Proporciona frameworks para tomar decisiones morales en situaciones complejas.",
    keyQuestions: [
      "¿Qué hace que una acción sea correcta o incorrecta?",
      "¿Es la moral objetiva o relativa?",
      "¿Debemos juzgar acciones por sus intenciones o consecuencias?",
      "¿Qué es una vida buena y virtuosa?",
      "¿Tenemos obligaciones hacia las generaciones futuras?",
      "¿Los animales tienen derechos morales?",
    ],
    famousPhilosophers: [
      { name: "Aristóteles", contribution: "Ética de las virtudes y el concepto de eudaimonia" },
      { name: "Kant", contribution: "El imperativo categórico y la deontología" },
      { name: "Mill", contribution: "Utilitarismo: la mayor felicidad para el mayor número" },
      { name: "Nietzsche", contribution: "Crítica de la moral tradicional y la 'voluntad de poder'" },
    ],
    examples: [
      "Dilema del tranvía: ¿sacrificar una vida para salvar cinco?",
      "Decidir si es ético mentir para proteger a alguien",
      "Evaluar la moralidad de comer carne o productos animales",
    ],
    modernRelevance:
      "Esencial para la bioética, ética empresarial, ética en IA y robótica, dilemas sobre privacidad digital, y debates sobre justicia climática.",
  },
  {
    name: "Lógica",
    icon: Brain,
    description: "Estudia los principios del razonamiento válido y la inferencia",
    detailedDescription:
      "La lógica es el estudio sistemático del razonamiento correcto. Examina la estructura de los argumentos, identifica falacias, y establece reglas para distinguir entre inferencias válidas e inválidas. Es la herramienta fundamental para todo pensamiento filosófico y científico riguroso.",
    keyQuestions: [
      "¿Qué hace que un argumento sea válido?",
      "¿Cómo identificamos falacias en el razonamiento?",
      "¿Qué es la verdad lógica?",
      "¿Son las leyes de la lógica universales o pueden cambiar?",
      "¿Cómo se relaciona la lógica con el lenguaje?",
      "¿Existe una lógica única o múltiples sistemas lógicos?",
    ],
    famousPhilosophers: [
      { name: "Aristóteles", contribution: "Fundó la lógica formal con el silogismo" },
      { name: "Frege", contribution: "Desarrolló la lógica moderna y el cálculo de predicados" },
      { name: "Russell", contribution: "Lógica matemática y teoría de tipos" },
      { name: "Gödel", contribution: "Teoremas de incompletitud que revolucionaron la lógica" },
    ],
    examples: [
      "Todos los humanos son mortales; Sócrates es humano; por lo tanto, Sócrates es mortal",
      "Identificar la falacia ad hominem cuando se ataca al argumentador en lugar del argumento",
      "Usar tablas de verdad para evaluar proposiciones compuestas",
    ],
    modernRelevance:
      "Base de la programación, diseño de circuitos, inteligencia artificial, verificación de software, y análisis de argumentos en derecho y política.",
  },
  {
    name: "Estética",
    icon: Sparkles,
    description: "Analiza la belleza, el arte y la experiencia estética",
    detailedDescription:
      "La estética explora la naturaleza de la belleza, el arte y la experiencia sensorial. Investiga qué hace que algo sea bello, cómo apreciamos y creamos arte, y qué papel juega la estética en nuestras vidas. También examina el gusto, la creatividad y la expresión artística.",
    keyQuestions: [
      "¿Qué es la belleza?",
      "¿Es la belleza objetiva o subjetiva?",
      "¿Qué define al arte?",
      "¿Puede cualquier cosa ser arte?",
      "¿Cuál es el propósito del arte en la sociedad?",
      "¿Cómo se relacionan la belleza natural y la belleza artística?",
    ],
    famousPhilosophers: [
      { name: "Platón", contribution: "La belleza como reflejo de formas ideales perfectas" },
      { name: "Kant", contribution: "Juicio estético y lo 'sublime' en la naturaleza" },
      { name: "Hegel", contribution: "Filosofía del arte como expresión del espíritu absoluto" },
      { name: "Nietzsche", contribution: "El arte como afirmación de la vida frente al nihilismo" },
    ],
    examples: [
      "Debatir si una pintura abstracta puede ser bella sin representar nada reconocible",
      "Considerar si el arte debe tener un mensaje moral o puede ser 'arte por el arte'",
      "Explorar por qué ciertas músicas o paisajes nos conmueven profundamente",
    ],
    modernRelevance:
      "Importante para crítica de arte, diseño de interfaces de usuario, arquitectura, teoría cinematográfica, y debates sobre arte generado por IA.",
  },
  {
    name: "Filosofía Política",
    icon: Users,
    description: "Reflexiona sobre el gobierno, la justicia y la organización social",
    detailedDescription:
      "La filosofía política examina cómo deben organizarse las sociedades, qué justifica el poder político, y cómo lograr una sociedad justa. Explora conceptos como libertad, igualdad, derechos, justicia distributiva, y las obligaciones entre ciudadanos y el estado.",
    keyQuestions: [
      "¿Qué justifica la autoridad del gobierno?",
      "¿Qué es la justicia social?",
      "¿Cuál es el balance entre libertad individual y bien común?",
      "¿Existen derechos humanos universales?",
      "¿Qué tipo de gobierno es el más justo?",
      "¿Cuándo es legítima la desobediencia civil?",
    ],
    famousPhilosophers: [
      { name: "Platón", contribution: "La República y el gobierno de los filósofos-reyes" },
      { name: "Hobbes", contribution: "El contrato social y el Leviatán" },
      { name: "Locke", contribution: "Derechos naturales: vida, libertad y propiedad" },
      { name: "Rawls", contribution: "Teoría de la justicia como equidad" },
    ],
    examples: [
      "Evaluar si es justo que haya grandes desigualdades económicas en una sociedad",
      "Considerar los límites de la libertad de expresión en una democracia",
      "Analizar la legitimidad de la intervención humanitaria en otros países",
    ],
    modernRelevance:
      "Central para debates sobre inmigración, redistribución de riqueza, derechos digitales, democracia participativa y globalización.",
  },
]

export default function QueEsFilosofia() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([])
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("philosopher-card-visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen flex flex-col philosophy-gradient">
      <Header />

      <main className="flex-1 container mx-auto px-4 md:px-6 py-8 md:py-16">
        {/* Hero Section */}
        <section
          ref={(el) => {
            sectionsRef.current[0] = el
          }}
          className="philosopher-card text-center mb-16 md:mb-24"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 mb-6 md:mb-8">
            <Brain className="w-8 h-8 md:w-10 md:h-10 text-primary" />
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 text-balance">
            ¿Qué es la Filosofía?
          </h1>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty px-4">
            Un viaje milenario en busca de la verdad, el conocimiento y el significado de la existencia humana
          </p>
        </section>

        {/* Definición Expandida */}
        <section
          ref={(el) => {
            sectionsRef.current[1] = el
          }}
          className="philosopher-card glass-effect rounded-3xl p-6 md:p-12 mb-12 md:mb-16 border border-border/50"
        >
          <div className="flex items-start gap-4 md:gap-6 mb-6">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-accent/20 flex items-center justify-center shrink-0">
              <Quote className="w-6 h-6 md:w-7 md:h-7 text-accent" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">Definición</h2>
              <p className="text-sm md:text-lg text-foreground/80 leading-relaxed mb-4">
                La palabra <span className="font-semibold text-primary">filosofía</span> proviene del griego{" "}
                <span className="italic">philosophía</span>, que significa "amor por la sabiduría" (philos = amor,
                sophia = sabiduría). Acuñado tradicionalmente por Pitágoras en el siglo VI a.C., quien se llamó a sí
                mismo "filósofo" en lugar de "sabio", reconociendo que la verdadera sabiduría era buscar conocimiento,
                no poseerlo completamente.
              </p>
              <p className="text-sm md:text-lg text-foreground/80 leading-relaxed mb-4">
                La filosofía es una disciplina que busca comprender las cuestiones fundamentales de la existencia, el
                conocimiento, la verdad, la moral, la belleza y la mente humana mediante el{" "}
                <span className="font-semibold text-primary">razonamiento crítico</span>, la{" "}
                <span className="font-semibold text-primary">lógica sistemática</span> y el{" "}
                <span className="font-semibold text-primary">análisis conceptual profundo</span>.
              </p>
              <p className="text-sm md:text-lg text-foreground/80 leading-relaxed mb-4">
                A diferencia de las ciencias naturales que se enfocan en respuestas específicas mediante experimentos y
                observaciones empíricas, la filosofía explora preguntas que no tienen respuestas definitivas pero que
                son esenciales para entender nuestra condición humana. Por ejemplo, mientras la neurociencia puede
                explicar cómo funciona el cerebro, la filosofía pregunta qué es la conciencia y si realmente tenemos
                libre albedrío.
              </p>
              <div className="bg-primary/5 rounded-xl p-4 md:p-6 border border-primary/10">
                <h3 className="text-base md:text-lg font-semibold text-primary mb-3">Características distintivas:</h3>
                <ul className="space-y-2 text-sm md:text-base text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>
                      <strong>Universal:</strong> Las preguntas filosóficas trascienden culturas y épocas
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>
                      <strong>Fundamental:</strong> Examina los supuestos más básicos de otras disciplinas
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>
                      <strong>Reflexiva:</strong> La filosofía puede volverse sobre sí misma (filosofía de la filosofía)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>
                      <strong>Práctica:</strong> Busca no solo entender el mundo, sino también cómo vivir en él
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Historia Expandida */}
        <section
          ref={(el) => {
            sectionsRef.current[2] = el
          }}
          className="philosopher-card mb-12 md:mb-16"
        >
          <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/20 flex items-center justify-center">
              <History className="w-6 h-6 md:w-7 md:h-7 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Historia de la Filosofía</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Filosofía Antigua */}
            <div className="glass-effect rounded-2xl p-6 md:p-8 border border-border/50 hover:border-primary/30 transition-all duration-300">
              <h3 className="text-lg md:text-xl font-semibold text-primary mb-3 md:mb-4">
                Filosofía Antigua (600 a.C. - 400 d.C.)
              </h3>
              <p className="text-sm md:text-base text-foreground/80 leading-relaxed mb-4">
                Nace en la antigua Grecia con los <strong>presocráticos</strong> como Tales de Mileto, Heráclito y
                Parménides, quienes buscaban explicar el origen del universo mediante la razón (logos) en lugar de los
                mitos tradicionales. Este período marca el nacimiento del pensamiento racional occidental.
              </p>
              <p className="text-sm md:text-base text-foreground/80 leading-relaxed mb-4">
                Sócrates revolucionó la filosofía al centrarla en cuestiones éticas y el autoconocimiento. Platón y
                Aristóteles establecieron las bases del pensamiento occidental que perduran hasta hoy.
              </p>
              <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    <strong>Sócrates (470-399 a.C.):</strong> Método socrático de preguntas, "conócete a ti mismo"
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    <strong>Platón (428-348 a.C.):</strong> Teoría de las Ideas, La República, dualismo
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    <strong>Aristóteles (384-322 a.C.):</strong> Lógica formal, ética de virtudes, metafísica
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    <strong>Epicuro y los estoicos:</strong> Filosofías helenísticas sobre cómo vivir bien
                  </span>
                </li>
              </ul>
            </div>

            {/* Filosofía Medieval */}
            <div className="glass-effect rounded-2xl p-6 md:p-8 border border-border/50 hover:border-primary/30 transition-all duration-300">
              <h3 className="text-lg md:text-xl font-semibold text-primary mb-3 md:mb-4">
                Filosofía Medieval (400 - 1400)
              </h3>
              <p className="text-sm md:text-base text-foreground/80 leading-relaxed mb-4">
                Período dominado por la integración del pensamiento filosófico griego con la{" "}
                <strong>teología cristiana, islámica y judía</strong>. La filosofía se convierte en "sierva de la
                teología", buscando reconciliar fe y razón.
              </p>
              <p className="text-sm md:text-base text-foreground/80 leading-relaxed mb-4">
                Los filósofos medievales preservaron y comentaron textos griegos antiguos, añadiendo perspectivas
                teológicas únicas que enriquecieron el pensamiento occidental.
              </p>
              <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    <strong>San Agustín (354-430):</strong> Tiempo, memoria, problema del mal, libre albedrío
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    <strong>Santo Tomás de Aquino (1225-1274):</strong> Síntesis aristotélica, cinco vías
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    <strong>Averroes (1126-1198):</strong> Comentarios de Aristóteles en el mundo islámico
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    <strong>Maimónides (1138-1204):</strong> Filosofía judía y reconciliación fe-razón
                  </span>
                </li>
              </ul>
            </div>

            {/* Filosofía Moderna */}
            <div className="glass-effect rounded-2xl p-6 md:p-8 border border-border/50 hover:border-primary/30 transition-all duration-300">
              <h3 className="text-lg md:text-xl font-semibold text-primary mb-3 md:mb-4">
                Filosofía Moderna (1400 - 1800)
              </h3>
              <p className="text-sm md:text-base text-foreground/80 leading-relaxed mb-4">
                Época del Renacimiento y la Ilustración marcada por un giro hacia el <strong>humanismo secular</strong>.
                Descartes marca el inicio con su método de la duda y "cogito ergo sum" (pienso, luego existo), colocando
                la mente humana en el centro de la filosofía.
              </p>
              <p className="text-sm md:text-base text-foreground/80 leading-relaxed mb-4">
                Se desarrollan el <strong>racionalismo continental</strong> (verdades por razón pura) y el{" "}
                <strong>empirismo británico</strong> (conocimiento por experiencia), cuyo debate domina la epistemología
                moderna.
              </p>
              <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    <strong>Descartes (1596-1650):</strong> Dualismo, método cartesiano, racionalismo
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    <strong>Locke (1632-1704) y Hume (1711-1776):</strong> Empirismo, tabula rasa, escepticismo
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    <strong>Kant (1724-1804):</strong> Idealismo trascendental, síntesis racionalismo-empirismo
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    <strong>Rousseau (1712-1778):</strong> Contrato social, bondad natural del hombre
                  </span>
                </li>
              </ul>
            </div>

            {/* Filosofía Contemporánea */}
            <div className="glass-effect rounded-2xl p-6 md:p-8 border border-border/50 hover:border-primary/30 transition-all duration-300">
              <h3 className="text-lg md:text-xl font-semibold text-primary mb-3 md:mb-4">
                Filosofía Contemporánea (1800 - Presente)
              </h3>
              <p className="text-sm md:text-base text-foreground/80 leading-relaxed mb-4">
                Período de <strong>diversificación extrema</strong> del pensamiento filosófico. Surgen múltiples
                escuelas y movimientos: existencialismo, positivismo lógico, fenomenología, pragmatismo, marxismo,
                filosofía analítica, y postmodernismo.
              </p>
              <p className="text-sm md:text-base text-foreground/80 leading-relaxed mb-4">
                La filosofía se especializa en áreas aplicadas: bioética, filosofía de la mente, filosofía del lenguaje,
                y recientemente, ética de la IA y filosofía de la tecnología.
              </p>
              <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    <strong>Nietzsche (1844-1900):</strong> Voluntad de poder, nihilismo, superhombre
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    <strong>Sartre (1905-1980) y Camus (1913-1960):</strong> Existencialismo, absurdo, libertad
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    <strong>Wittgenstein (1889-1951):</strong> Filosofía del lenguaje, juegos del lenguaje
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    <strong>Rawls (1921-2002):</strong> Teoría de la justicia, velo de ignorancia
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Ramas Interactivas */}
        <section
          ref={(el) => {
            sectionsRef.current[3] = el
          }}
          className="philosopher-card mb-12 md:mb-16"
        >
          <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-accent/20 flex items-center justify-center">
              <BookOpen className="w-6 h-6 md:w-7 md:h-7 text-accent" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Ramas Principales</h2>
          </div>
          <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
            Explora las diferentes ramas de la filosofía haciendo clic en cada una para conocer más a fondo su historia,
            preguntas clave y relevancia moderna.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {branches.map((branch, index) => (
              <button
                key={index}
                onClick={() => setSelectedBranch(branch)}
                className="glass-effect rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105 text-left cursor-pointer group"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <branch.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {branch.name}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{branch.description}</p>
                <div className="mt-4 text-xs md:text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Explorar más →
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Para qué sirve - Expandido */}
        <section
          ref={(el) => {
            sectionsRef.current[4] = el
          }}
          className="philosopher-card glass-effect rounded-3xl p-6 md:p-12 border border-border/50 mb-12 md:mb-16"
        >
          <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/20 flex items-center justify-center">
              <Target className="w-6 h-6 md:w-7 md:h-7 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">¿Para Qué Sirve la Filosofía?</h2>
          </div>

          <div className="space-y-6 md:space-y-8">
            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
              <h3 className="text-lg md:text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                <Brain className="w-5 h-5" />
                1. Desarrolla el Pensamiento Crítico
              </h3>
              <p className="text-sm md:text-base text-foreground/80 leading-relaxed mb-4">
                La filosofía enseña a cuestionar supuestos, analizar argumentos y evaluar evidencias de manera rigurosa.
                Este pensamiento crítico es esencial en todas las áreas de la vida, desde decisiones personales hasta
                profesionales.
              </p>
              <div className="bg-background/50 rounded-xl p-4">
                <p className="text-sm font-semibold text-foreground mb-2">Ejemplos prácticos:</p>
                <ul className="space-y-1 text-xs md:text-sm text-muted-foreground">
                  <li>• Detectar falacias lógicas en argumentos políticos y publicidad</li>
                  <li>• Evaluar críticamente noticias y distinguir hechos de opiniones</li>
                  <li>• Tomar decisiones empresariales basadas en análisis riguroso</li>
                  <li>• Resolver problemas complejos descomponiéndolos sistemáticamente</li>
                </ul>
              </div>
            </div>

            <div className="bg-accent/5 rounded-2xl p-6 border border-accent/10">
              <h3 className="text-lg md:text-xl font-semibold text-accent mb-3 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                2. Proporciona Claridad Conceptual
              </h3>
              <p className="text-sm md:text-base text-foreground/80 leading-relaxed mb-4">
                Ayuda a definir y clarificar conceptos fundamentales como justicia, libertad, verdad y belleza. Esta
                claridad es crucial para comunicarse efectivamente y tomar decisiones informadas en debates complejos.
              </p>
              <div className="bg-background/50 rounded-xl p-4">
                <p className="text-sm font-semibold text-foreground mb-2">Aplicaciones:</p>
                <ul className="space-y-1 text-xs md:text-sm text-muted-foreground">
                  <li>• Clarificar qué significa realmente "igualdad" en debates sociales</li>
                  <li>• Distinguir entre "privacidad" y "secreto" en era digital</li>
                  <li>• Definir "inteligencia" en el contexto de IA y conciencia</li>
                  <li>• Entender matices entre "ética", "moral" y "legalidad"</li>
                </ul>
              </div>
            </div>

            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
              <h3 className="text-lg md:text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                <Scale className="w-5 h-5" />
                3. Guía la Vida Ética y Moral
              </h3>
              <p className="text-sm md:text-base text-foreground/80 leading-relaxed mb-4">
                Ofrece frameworks robustos para pensar sobre dilemas morales complejos. Desde la ética aristotélica
                hasta el utilitarismo de Mill y la deontología kantiana, la filosofía proporciona herramientas para
                vivir una vida virtuosa, significativa y moralmente consistente.
              </p>
              <div className="bg-background/50 rounded-xl p-4">
                <p className="text-sm font-semibold text-foreground mb-2">Dilemas contemporáneos:</p>
                <ul className="space-y-1 text-xs md:text-sm text-muted-foreground">
                  <li>• Bioética: manipulación genética, eutanasia, clonación</li>
                  <li>• Ética empresarial: responsabilidad corporativa vs. beneficios</li>
                  <li>• Ética ambiental: obligaciones hacia generaciones futuras</li>
                  <li>• Ética digital: privacidad, vigilancia, sesgos algorítmicos</li>
                </ul>
              </div>
            </div>

            <div className="bg-accent/5 rounded-2xl p-6 border border-accent/10">
              <h3 className="text-lg md:text-xl font-semibold text-accent mb-3 flex items-center gap-2">
                <Users className="w-5 h-5" />
                4. Fomenta el Autoconocimiento y Crecimiento Personal
              </h3>
              <p className="text-sm md:text-base text-foreground/80 leading-relaxed mb-4">
                La máxima socrática "conócete a ti mismo" sigue siendo relevante 2500 años después. La filosofía nos
                invita a examinar nuestras creencias, valores, sesgos y propósitos, llevándonos a una vida más
                consciente, auténtica y plena.
              </p>
              <div className="bg-background/50 rounded-xl p-4">
                <p className="text-sm font-semibold text-foreground mb-2">Beneficios personales:</p>
                <ul className="space-y-1 text-xs md:text-sm text-muted-foreground">
                  <li>• Identificar y cuestionar creencias heredadas no examinadas</li>
                  <li>• Desarrollar una cosmovisión coherente y bien fundamentada</li>
                  <li>• Encontrar sentido y propósito en tiempos de crisis existencial</li>
                  <li>• Cultivar virtudes como sabiduría, coraje y moderación</li>
                </ul>
              </div>
            </div>

            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
              <h3 className="text-lg md:text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                5. Impulsa la Innovación Científica y Tecnológica
              </h3>
              <p className="text-sm md:text-base text-foreground/80 leading-relaxed mb-4">
                Muchos avances científicos y tecnológicos tienen raíces filosóficas profundas. La filosofía de la
                ciencia, la lógica matemática, la epistemología y la ética de la inteligencia artificial son ejemplos de
                cómo el pensamiento filosófico riguroso impulsa el progreso humano.
              </p>
              <div className="bg-background/50 rounded-xl p-4">
                <p className="text-sm font-semibold text-foreground mb-2">Contribuciones históricas:</p>
                <ul className="space-y-1 text-xs md:text-sm text-muted-foreground">
                  <li>• Lógica aristotélica → Fundamento de las ciencias de la computación</li>
                  <li>• Geometría euclidiana → Física y teoría de la relatividad</li>
                  <li>• Filosofía de la mente → Neurociencia e inteligencia artificial</li>
                  <li>• Epistemología → Método científico y filosofía de la ciencia</li>
                </ul>
              </div>
            </div>

            <div className="bg-accent/5 rounded-2xl p-6 border border-accent/10">
              <h3 className="text-lg md:text-xl font-semibold text-accent mb-3 flex items-center gap-2">
                <Globe className="w-5 h-5" />
                6. Aborda las Grandes Preguntas de la Existencia
              </h3>
              <p className="text-sm md:text-base text-foreground/80 leading-relaxed mb-4">
                ¿Cuál es el sentido de la vida? ¿Existe el libre albedrío? ¿Qué es la realidad? ¿Hay vida después de la
                muerte? Aunque estas preguntas no tienen respuestas definitivas comprobables, el proceso mismo de
                explorarlas nos ayuda a entender nuestra condición humana y nuestro lugar en el universo.
              </p>
              <div className="bg-background/50 rounded-xl p-4">
                <p className="text-sm font-semibold text-foreground mb-2">Preguntas perennes:</p>
                <ul className="space-y-1 text-xs md:text-sm text-muted-foreground">
                  <li>• ¿Por qué existe algo en lugar de nada? (Metafísica fundamental)</li>
                  <li>• ¿Somos libres o está todo predeterminado? (Libre albedrío)</li>
                  <li>• ¿Qué es la conciencia y cómo surge? (Problema mente-cuerpo)</li>
                  <li>• ¿Existe un propósito objetivo en el universo? (Teleología)</li>
                </ul>
              </div>
            </div>

            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
              <h3 className="text-lg md:text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                <Scroll className="w-5 h-5" />
                7. Mejora la Comunicación y Argumentación
              </h3>
              <p className="text-sm md:text-base text-foreground/80 leading-relaxed mb-4">
                El entrenamiento filosófico desarrolla habilidades de comunicación precisas, argumentación estructurada
                y capacidad de ver múltiples perspectivas. Estas habilidades son invaluables en negociaciones, debates,
                escritura persuasiva y resolución de conflictos.
              </p>
              <div className="bg-background/50 rounded-xl p-4">
                <p className="text-sm font-semibold text-foreground mb-2">Habilidades desarrolladas:</p>
                <ul className="space-y-1 text-xs md:text-sm text-muted-foreground">
                  <li>• Construir argumentos sólidos y bien estructurados</li>
                  <li>• Identificar puntos débiles en razonamientos propios y ajenos</li>
                  <li>• Practicar la caridad interpretativa (steelmanning)</li>
                  <li>• Comunicar ideas complejas de manera clara y accesible</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="text-center mt-12 md:mt-20 mb-8 md:mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-accent/10 mb-4 md:mb-6 animate-float">
            <Sparkles className="w-7 h-7 md:w-8 md:h-8 text-accent" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4 text-balance px-4">
            Comienza tu Viaje Filosófico
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty px-4">
            Explora frases filosóficas diarias y descubre la sabiduría de los grandes pensadores de la historia
          </p>
        </section>
      </main>

      {selectedBranch && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedBranch(null)}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-effect rounded-3xl p-6 md:p-10 border border-border/50 animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedBranch(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 hover:bg-background flex items-center justify-center transition-colors group"
            >
              <X className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </button>

            <div className="mb-6">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 animate-float">
                <selectedBranch.icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">{selectedBranch.name}</h2>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                {selectedBranch.detailedDescription}
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                <h3 className="text-lg md:text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" />
                  Preguntas Fundamentales
                </h3>
                <ul className="space-y-2">
                  {selectedBranch.keyQuestions.map((question, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm md:text-base text-foreground/80">
                      <span className="text-accent mt-1 font-bold">{index + 1}.</span>
                      <span>{question}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-accent/5 rounded-2xl p-6 border border-accent/10">
                <h3 className="text-lg md:text-xl font-semibold text-accent mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Filósofos Destacados
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedBranch.famousPhilosophers.map((philosopher, index) => (
                    <div key={index} className="bg-background/50 rounded-xl p-4">
                      <p className="text-sm md:text-base font-semibold text-foreground mb-1">{philosopher.name}</p>
                      <p className="text-xs md:text-sm text-muted-foreground">{philosopher.contribution}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                <h3 className="text-lg md:text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Ejemplos Prácticos
                </h3>
                <ul className="space-y-3">
                  {selectedBranch.examples.map((example, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-sm md:text-base text-foreground/80">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-accent/5 rounded-2xl p-6 border border-accent/10">
                <h3 className="text-lg md:text-xl font-semibold text-accent mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Relevancia Moderna
                </h3>
                <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
                  {selectedBranch.modernRelevance}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
