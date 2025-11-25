"use client"

import { useEffect, useRef, useState } from "react"
import { Header } from "../componentes/header.components"
import { Footer } from "../componentes/footer.componentes"
import { Scroll, Calendar, BookOpen, Sparkles } from "lucide-react"

interface Philosopher {
  name: string
  period: string
  school: string
  biography: string
  mainIdeas: string[]
  imageQuery: string
}

const philosophers: Philosopher[] = [
  {
    name: "Sócrates",
    period: "470-399 a.C.",
    school: "Filosofía Griega Clásica",
    biography:
      "Considerado el padre de la filosofía occidental, Sócrates no dejó escritos propios, pero su legado fue preservado por sus discípulos, especialmente Platón. Revolucionó el pensamiento al centrar la filosofía en cuestiones éticas y en el método del diálogo. Fue condenado a muerte por impiedad y corrupción de la juventud, aceptando su sentencia con dignidad.",
    mainIdeas: [
      "El método socrático: aprender a través del cuestionamiento",
      "Conocimiento como virtud: quien conoce el bien, lo practica",
      "La importancia del autoconocimiento y el examen de la vida",
    ],
    imageQuery: "ancient greek philosopher socrates statue",
  },
  {
    name: "René Descartes",
    period: "1596-1650",
    school: "Racionalismo",
    biography:
      "Matemático y filósofo francés, Descartes es considerado el fundador de la filosofía moderna. Buscó reconstruir el conocimiento sobre bases sólidas, utilizando la duda metódica como herramienta. Sus contribuciones a las matemáticas incluyen la geometría analítica. Vivió gran parte de su vida en Holanda, donde desarrolló sus principales obras.",
    mainIdeas: [
      "Dualismo mente-cuerpo: separación entre res cogitans y res extensa",
      "El método de la duda como camino hacia la certeza",
      "La razón como fuente primaria del conocimiento",
    ],
    imageQuery: "rene descartes philosopher portrait",
  },
  {
    name: "Jean-Paul Sartre",
    period: "1905-1980",
    school: "Existencialismo",
    biography:
      "Filósofo, dramaturgo y novelista francés, Sartre fue la figura central del existencialismo. Rechazó el Premio Nobel de Literatura en 1964. Participó activamente en movimientos políticos de izquierda y mantuvo una famosa relación con Simone de Beauvoir. Su filosofía enfatiza la libertad radical y la responsabilidad individual.",
    mainIdeas: [
      "La existencia precede a la esencia: no hay naturaleza humana predeterminada",
      "Libertad y angustia: somos radicalmente libres y eso nos genera ansiedad",
      "Compromiso político: el intelectual debe involucrarse en su tiempo",
    ],
    imageQuery: "jean paul sartre existentialist philosopher",
  },
  {
    name: "Immanuel Kant",
    period: "1724-1804",
    school: "Idealismo Alemán",
    biography:
      "Filósofo prusiano cuya obra transformó el pensamiento occidental. Vivió toda su vida en Königsberg, llevando una existencia metódica y rutinaria. Su 'Crítica de la Razón Pura' intentó sintetizar racionalismo y empirismo. Desarrolló una ética basada en el deber y la autonomía racional, influyendo profundamente en la filosofía moral moderna.",
    mainIdeas: [
      "Revolución copernicana: el sujeto estructura la experiencia",
      "El imperativo categórico como fundamento de la moralidad",
      "Distinción entre fenómenos (lo que percibimos) y noúmenos (la cosa en sí)",
    ],
    imageQuery: "immanuel kant philosopher enlightenment",
  },
  {
    name: "Albert Camus",
    period: "1913-1960",
    school: "Absurdismo",
    biography:
      "Escritor, filósofo y periodista franco-argelino, Camus recibió el Premio Nobel de Literatura en 1957. Exploró el absurdo de la existencia humana y la posibilidad de vivir auténticamente sin ilusiones. Participó en la Resistencia francesa durante la Segunda Guerra Mundial. Murió en un accidente automovilístico a los 46 años.",
    mainIdeas: [
      "El absurdo: el conflicto entre el deseo humano de significado y el silencio del universo",
      "La rebelión como respuesta digna al absurdo",
      "Vivir sin esperanza pero sin desesperación",
    ],
    imageQuery: "albert camus absurdist philosopher writer",
  },
  {
    name: "Heráclito",
    period: "535-475 a.C.",
    school: "Filosofía Presocrática",
    biography:
      "Filósofo presocrático de Éfeso, conocido como 'el Oscuro' por su estilo enigmático y aforístico. Propuso que el fuego es el elemento primordial y que todo fluye constantemente. De su obra solo sobreviven fragmentos. Pertenecía a la aristocracia efesia pero renunció a sus privilegios para dedicarse a la filosofía.",
    mainIdeas: [
      "Panta rhei: todo fluye, nada permanece",
      "La unidad de los opuestos: el conflicto genera armonía",
      "El logos como razón universal que gobierna el cosmos",
    ],
    imageQuery: "heraclitus presocratic greek philosopher fire",
  },
  {
    name: "George Berkeley",
    period: "1685-1753",
    school: "Idealismo Subjetivo",
    biography:
      "Obispo anglicano y filósofo irlandés, Berkeley desarrolló una forma radical de idealismo que negaba la existencia de la materia independiente de la percepción. Viajó extensamente por Europa y América, y fundó una universidad en las Bermudas. Su pensamiento influyó en el desarrollo del idealismo alemán y la fenomenología.",
    mainIdeas: [
      "Esse est percipi: ser es ser percibido",
      "Rechazo de la distinción entre cualidades primarias y secundarias",
      "Dios como garante de la continuidad de la percepción",
    ],
    imageQuery: "george berkeley idealist philosopher bishop",
  },
  {
    name: "Friedrich Nietzsche",
    period: "1844-1900",
    school: "Nihilismo y Vitalismo",
    biography:
      "Filólogo y filósofo alemán cuya obra influyó profundamente en el pensamiento del siglo XX. Criticó radicalmente la moral cristiana y el racionalismo occidental. Sufrió un colapso mental en 1889 del cual nunca se recuperó. Su estilo literario es único, mezclando aforismos, poesía y narrativa. Sus ideas fueron malinterpretadas y apropiadas por el nazismo.",
    mainIdeas: [
      "La voluntad de poder como fuerza vital fundamental",
      "El Übermensch: ideal del ser humano que crea sus propios valores",
      "El eterno retorno y el amor fati: amar el destino",
    ],
    imageQuery: "friedrich nietzsche philosopher mustache",
  },
  {
    name: "Aristóteles",
    period: "384-322 a.C.",
    school: "Filosofía Griega Clásica",
    biography:
      "Discípulo de Platón y maestro de Alejandro Magno, Aristóteles fundó su propia escuela, el Liceo. Su obra abarca prácticamente todos los campos del conocimiento de su época: lógica, metafísica, ética, política, biología, física. Sistematizó el pensamiento científico y filosófico, estableciendo categorías y métodos que perduran hasta hoy.",
    mainIdeas: [
      "La teoría de las cuatro causas: material, formal, eficiente y final",
      "El justo medio como principio ético",
      "La lógica silogística como herramienta del razonamiento",
    ],
    imageQuery: "aristotle ancient greek philosopher statue",
  },
  {
    name: "Protágoras",
    period: "490-420 a.C.",
    school: "Sofismo",
    biography:
      "Uno de los sofistas más prominentes de la antigua Grecia, Protágoras viajó por todo el mundo griego enseñando retórica y filosofía por dinero, lo que le valió críticas. Fue el primero en cobrar por enseñar filosofía. Sus obras fueron quemadas en Atenas por supuesta impiedad. Defendió un relativismo epistemológico y ético radical.",
    mainIdeas: [
      "El relativismo: la verdad varía según el individuo o la cultura",
      "El agnosticismo respecto a los dioses",
      "La retórica como habilidad fundamental para la vida política",
    ],
    imageQuery: "protagoras sophist ancient greek philosopher",
  },
  {
    name: "Jean-Jacques Rousseau",
    period: "1712-1778",
    school: "Ilustración",
    biography:
      "Filósofo, escritor y compositor ginebrino, Rousseau fue una figura clave de la Ilustración francesa aunque también la criticó. Su concepto del 'contrato social' influyó en la Revolución Francesa y el desarrollo de la democracia moderna. Vivió una vida turbulenta, marcada por conflictos personales y una paranoia creciente en sus últimos años.",
    mainIdeas: [
      "El estado de naturaleza: los humanos son buenos por naturaleza",
      "La voluntad general como fundamento de la soberanía popular",
      "La educación natural: el niño debe desarrollarse libremente",
    ],
    imageQuery: "jean jacques rousseau enlightenment philosopher",
  },
  {
    name: "Arthur Schopenhauer",
    period: "1788-1860",
    school: "Pesimismo Filosófico",
    biography:
      "Filósofo alemán influenciado por Kant y por el pensamiento oriental, especialmente el budismo. Desarrolló una filosofía pesimista que ve la voluntad como fuerza irracional que causa sufrimiento. Vivió aislado gran parte de su vida, alejado del mundo académico. Su obra influyó en Nietzsche, Wagner, Freud y muchos pensadores posteriores.",
    mainIdeas: [
      "El mundo como voluntad y representación",
      "El sufrimiento como condición inherente a la vida",
      "La compasión y el arte como vías de escape del dolor",
    ],
    imageQuery: "arthur schopenhauer pessimist philosopher",
  },
  {
    name: "Confucio",
    period: "551-479 a.C.",
    school: "Confucianismo",
    biography:
      "Maestro, político y filósofo chino cuyas enseñanzas formaron la base de la cultura china durante más de dos milenios. Vivió durante un período de guerra y caos, buscando restaurar el orden moral y social. Sus discípulos compilaron sus enseñanzas en las 'Analectas'. Enfatizó la educación, la ética familiar y el buen gobierno.",
    mainIdeas: [
      "El ren (humanidad/benevolencia) como virtud cardinal",
      "La importancia de los rituales y la piedad filial",
      "El gobierno por la virtud en lugar de la fuerza",
    ],
    imageQuery: "confucius chinese philosopher sage",
  },
  {
    name: "Martin Heidegger",
    period: "1889-1976",
    school: "Fenomenología Existencial",
    biography:
      "Filósofo alemán cuya obra 'Ser y Tiempo' es uno de los textos más influyentes del siglo XX. Exploró la pregunta por el ser y la naturaleza de la existencia humana (Dasein). Su afiliación al partido nazi manchó su reputación, aunque nunca se retractó públicamente. Influyó profundamente en el existencialismo, la hermenéutica y el postestructuralismo.",
    mainIdeas: [
      "La pregunta por el sentido del ser",
      "El Dasein: el ser humano como ser-en-el-mundo",
      "La autenticidad vs. la existencia inauténtica en 'el uno'",
    ],
    imageQuery: "martin heidegger existential philosopher",
  },
  {
    name: "Søren Kierkegaard",
    period: "1813-1855",
    school: "Existencialismo Cristiano",
    biography:
      "Filósofo y teólogo danés considerado el padre del existencialismo. Criticó el cristianismo institucional y el sistema hegeliano dominante en su época. Su vida estuvo marcada por su ruptura con Regina Olsen y su lucha con la melancolía. Escribió bajo varios pseudónimos, explorando diferentes perspectivas existenciales. Murió joven, a los 42 años.",
    mainIdeas: [
      "Los tres estadios de la existencia: estético, ético y religioso",
      "El salto de fe como decisión subjetiva y apasionada",
      "La angustia como condición fundamental de la libertad humana",
    ],
    imageQuery: "soren kierkegaard existentialist christian philosopher",
  },
  {
    name: "Lord Acton",
    period: "1834-1902",
    school: "Liberalismo Político",
    biography:
      "Historiador y político británico, John Emerich Edward Dalberg-Acton fue un defensor del liberalismo clásico y la libertad individual. Católico devoto, criticó la infalibilidad papal. Fue profesor de historia moderna en Cambridge y planificó la Cambridge Modern History. Su pensamiento sobre el poder ha sido fundamental para la teoría política liberal.",
    mainIdeas: [
      "La corrupción inherente al poder concentrado",
      "La libertad como principio supremo de la vida política",
      "La importancia de los controles institucionales del poder",
    ],
    imageQuery: "lord acton historian liberal thinker",
  },
]

function PhilosopherCard({ philosopher, index }: { philosopher: Philosopher; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={cardRef}
      className={`philosopher-card ${isVisible ? "philosopher-card-visible" : ""}`}
      style={{ animationDelay: `${(index % 3) * 100}ms` }}
    >
      <div className="glass-effect rounded-2xl overflow-hidden border border-border/30 hover:border-primary/30 transition-all duration-500 group">
        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
          <img
            src={`/.jpg?key=xhhbn&height=400&width=600&query=${encodeURIComponent(philosopher.imageQuery)}`}
            alt={philosopher.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-1 text-balance">{philosopher.name}</h2>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {philosopher.period}
              </span>
              <span className="flex items-center gap-1">
                <Scroll className="w-4 h-4" />
                {philosopher.school}
              </span>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <p className="text-foreground/90 leading-relaxed text-pretty">{philosopher.biography}</p>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-primary flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Ideas Principales
            </h3>
            <ul className="space-y-2">
              {philosopher.mainIdeas.map((idea, i) => (
                <li key={i} className="text-sm text-muted-foreground flex gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span className="flex-1">{idea}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FilosofosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-6 py-12">
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground text-balance">Grandes Pensadores</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Conoce a los filósofos cuyas palabras han trascendido el tiempo. Cada uno de ellos ha contribuido de manera
            única al pensamiento humano y la búsqueda de la sabiduría.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {philosophers.map((philosopher, index) => (
            <PhilosopherCard key={philosopher.name} philosopher={philosopher} index={index} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
