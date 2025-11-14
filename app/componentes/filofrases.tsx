"use client"

import { useState, useEffect } from "react"
import { RefreshCw, Share2, Heart, Scroll, Lightbulb, BookOpen, Info, X } from 'lucide-react'
import { PhilosophyButton } from "./filobotones"

interface Quote {
  text: string
  author: string
  period: string
  school: string
  context: string
  origin: string
}

const philosophyQuotes: Quote[] = [
  {
    text: "La vida no examinada no vale la pena ser vivida.",
    author: "Sócrates",
    period: "470-399 a.C.",
    school: "Filosofía Griega Clásica",
    context:
      "Esta frase representa el núcleo del método socrático y su búsqueda incansable de la verdad a través del cuestionamiento. Sócrates creía que la reflexión crítica sobre nuestras creencias y acciones es esencial para vivir una vida virtuosa y significativa.",
    origin:
      "Pronunciada durante su juicio en Atenas, según relata Platón en 'La Apología de Sócrates'. Sócrates defendía su práctica filosófica ante las acusaciones de corromper a la juventud, argumentando que una vida sin reflexión crítica carece de valor auténtico.",
  },
  {
    text: "Pienso, luego existo.",
    author: "René Descartes",
    period: "1596-1650",
    school: "Racionalismo",
    context:
      "Esta máxima representa el punto de partida de la filosofía moderna. Descartes buscaba una verdad indudable sobre la cual construir todo el conocimiento. Al dudar de todo, descubrió que el acto mismo de dudar prueba la existencia del pensador.",
    origin:
      "Aparece en 'Discurso del Método' (1637) y 'Meditaciones Metafísicas' (1641). Descartes desarrolló esta idea durante su búsqueda de certeza absoluta, estableciendo la conciencia como fundamento indiscutible del conocimiento.",
  },
  {
    text: "El hombre está condenado a ser libre.",
    author: "Jean-Paul Sartre",
    period: "1905-1980",
    school: "Existencialismo",
    context:
      "Sartre argumenta que los humanos no tienen una esencia predeterminada y deben crear su propio significado. Esta libertad radical es una 'condena' porque conlleva la responsabilidad total de nuestras elecciones, sin poder culpar a Dios, la naturaleza o las circunstancias.",
    origin:
      "Expresada en 'El Existencialismo es un Humanismo' (1946), una conferencia donde Sartre defendió el existencialismo de críticas. Esta idea surgió en el contexto de la posguerra, cuando muchos buscaban reconstruir valores morales tras el colapso de sistemas tradicionales.",
  },
  {
    text: "La felicidad no es un ideal de la razón, sino de la imaginación.",
    author: "Immanuel Kant",
    period: "1724-1804",
    school: "Idealismo Alemán",
    context:
      "Kant distingue entre lo que podemos conocer racionalmente y lo que imaginamos como felicidad. Argumenta que la felicidad es un concepto vago e individual que no puede determinarse mediante principios racionales universales, a diferencia del deber moral.",
    origin:
      "Desarrollada en 'Fundamentación de la Metafísica de las Costumbres' (1785). Kant escribió esto al establecer su ética deontológica, donde el deber moral se basa en la razón, no en la búsqueda de la felicidad.",
  },
  {
    text: "El único modo de lidiar con un mundo sin libertad es volverse tan absolutamente libre que tu mera existencia sea un acto de rebelión.",
    author: "Albert Camus",
    period: "1913-1960",
    school: "Absurdismo",
    context:
      "Camus explora cómo vivir auténticamente en un universo absurdo que carece de significado inherente. La rebelión no es violenta sino existencial: es la afirmación de nuestra libertad y dignidad frente a la indiferencia del cosmos.",
    origin:
      "Tema central de 'El Hombre Rebelde' (1951). Camus desarrolló esta idea tras la Segunda Guerra Mundial, reflexionando sobre cómo mantener la humanidad y la libertad en un mundo marcado por la opresión y el sinsentido.",
  },
  {
    text: "Conócete a ti mismo.",
    author: "Inscripción del Templo de Delfos",
    period: "Antigua Grecia",
    school: "Sabiduría Délfica",
    context:
      "Este precepto délfico invita a la introspección y al reconocimiento de nuestras limitaciones humanas. En la antigua Grecia, conocerse a uno mismo significaba entender tu lugar en el cosmos y no caer en la hybris (arrogancia) que ofende a los dioses.",
    origin:
      "Inscrita en el pronaos del Templo de Apolo en Delfos, uno de los sitios más sagrados de la antigua Grecia. Sócrates adoptó esta máxima como guía de su filosofía, interpretándola como un llamado al examen constante de nuestras creencias y valores.",
  },
  {
    text: "La única constante en la vida es el cambio.",
    author: "Heráclito",
    period: "535-475 a.C.",
    school: "Filosofía Presocrática",
    context:
      "Heráclito propuso que el universo está en flujo perpetuo. Su famosa metáfora 'no puedes bañarte dos veces en el mismo río' ilustra que todo está en constante transformación. El cambio no es caótico sino que sigue un logos (razón) universal.",
    origin:
      "Fragmentos preservados por filósofos posteriores. Heráclito, conocido como 'el Oscuro' por su estilo enigmático, desarrolló estas ideas en Éfeso, observando la naturaleza y los ciclos de transformación en el mundo natural.",
  },
  {
    text: "Ser es ser percibido.",
    author: "George Berkeley",
    period: "1685-1753",
    school: "Idealismo Subjetivo",
    context:
      "Berkeley argumenta que los objetos materiales solo existen en tanto son percibidos por una mente. No hay materia independiente de la percepción. Esta posición radical desafía el materialismo y plantea que la realidad es fundamentalmente mental o espiritual.",
    origin:
      "Desarrollada en 'Tratado sobre los Principios del Conocimiento Humano' (1710). Berkeley formuló esta teoría para refutar el escepticismo y el materialismo, argumentando que si todo es percepción, no puede haber duda sobre la existencia de lo que percibimos.",
  },
  {
    text: "El que tiene un porqué para vivir puede soportar casi cualquier cómo.",
    author: "Friedrich Nietzsche",
    period: "1844-1900",
    school: "Nihilismo y Vitalismo",
    context:
      "Nietzsche enfatiza la importancia del propósito y el significado en la vida humana. Cuando encontramos un propósito profundo, podemos superar cualquier adversidad. Esta idea influyó profundamente en la psicología existencial y la logoterapia de Viktor Frankl.",
    origin:
      "Aparece en 'Crepúsculo de los Ídolos' (1889). Nietzsche desarrolló esta idea mientras exploraba cómo los humanos pueden crear significado en un mundo sin valores absolutos, tras proclamar la 'muerte de Dios'.",
  },
  {
    text: "La verdad es aquello que resiste la prueba de la experiencia.",
    author: "Albert Einstein",
    period: "1879-1955",
    school: "Empirismo Científico",
    context:
      "Einstein, aunque físico, ofreció profundas reflexiones filosóficas sobre la naturaleza del conocimiento. Esta frase subraya que las teorías deben ser validadas empíricamente. La verdad científica no es dogmática sino provisional, sujeta a revisión según nueva evidencia.",
    origin:
      "Expresada en diversos escritos y conferencias sobre filosofía de la ciencia. Einstein desarrolló esta perspectiva al revolucionar la física con la relatividad, demostrando que incluso las verdades más establecidas pueden ser superadas por teorías más precisas.",
  },
  {
    text: "El hombre es la medida de todas las cosas.",
    author: "Protágoras",
    period: "490-420 a.C.",
    school: "Sofismo",
    context:
      "Protágoras propone un relativismo radical: la verdad y los valores no son absolutos sino relativos a cada individuo o cultura. Lo que es verdadero o bueno para una persona puede no serlo para otra. Esta posición desafía la idea de verdades universales.",
    origin:
      "Fragmento preservado por Platón en 'Teeteto'. Protágoras, uno de los sofistas más prominentes, desarrolló esta idea en el contexto de la democracia ateniense, donde múltiples perspectivas competían en el ágora.",
  },
  {
    text: "Actúa solo según aquella máxima que puedas querer que se convierta en ley universal.",
    author: "Immanuel Kant",
    period: "1724-1804",
    school: "Idealismo Alemán",
    context:
      "Este es el imperativo categórico de Kant, el principio fundamental de su ética. Propone que antes de actuar, debemos preguntarnos si querríamos que todos actuaran de la misma manera. Si la respuesta es no, la acción es moralmente incorrecta.",
    origin:
      "Formulado en 'Fundamentación de la Metafísica de las Costumbres' (1785). Kant buscaba establecer una ética basada en la razón pura, independiente de consecuencias o emociones, que pudiera guiar a todos los seres racionales.",
  },
  {
    text: "El infierno son los otros.",
    author: "Jean-Paul Sartre",
    period: "1905-1980",
    school: "Existencialismo",
    context:
      "Contrario a la interpretación popular, Sartre no sugiere que las relaciones sean inherentemente negativas. Más bien, señala que nuestra identidad depende de cómo nos ven los demás. Los otros nos juzgan y objetifican, limitando nuestra libertad de definirnos a nosotros mismos.",
    origin:
      "Frase final de la obra teatral 'A Puerta Cerrada' (1944), donde tres personajes muertos están atrapados juntos eternamente. La obra explora cómo dependemos de la mirada del otro para nuestra autocomprensión.",
  },
  {
    text: "Solo sé que no sé nada.",
    author: "Sócrates",
    period: "470-399 a.C.",
    school: "Filosofía Griega Clásica",
    context:
      "Esta paradoja socrática expresa humildad intelectual. Sócrates reconoce los límites de su conocimiento, lo que paradójicamente lo hace más sabio que quienes creen saberlo todo. La verdadera sabiduría comienza con reconocer nuestra ignorancia.",
    origin:
      "Relatada por Platón en 'La Apología de Sócrates'. Según el relato, el oráculo de Delfos declaró que Sócrates era el más sabio de los hombres. Al investigar esto, Sócrates concluyó que su sabiduría consistía en reconocer su ignorancia.",
  },
  {
    text: "Dios ha muerto y nosotros lo hemos matado.",
    author: "Friedrich Nietzsche",
    period: "1844-1900",
    school: "Nihilismo y Vitalismo",
    context:
      "Nietzsche no celebra sino que diagnostica la pérdida de fe en valores absolutos en la modernidad. Con la 'muerte de Dios', los fundamentos tradicionales de la moral colapsan. Esto crea una crisis pero también una oportunidad: debemos crear nuevos valores.",
    origin:
      "Aparece en 'La Gaya Ciencia' (1882) y 'Así Habló Zaratustra' (1883). Nietzsche escribió esto observando la secularización de Europa y anticipando las consecuencias culturales y morales de la pérdida de la fe religiosa.",
  },
  {
    text: "La esencia precede a la existencia.",
    author: "Aristóteles",
    period: "384-322 a.C.",
    school: "Filosofía Griega Clásica",
    context:
      "Aristóteles sostiene que cada cosa tiene una naturaleza o esencia que determina su propósito. Una bellota tiene la esencia de convertirse en roble. Esta visión teleológica contrasta con el existencialismo, que invierte esta fórmula para los humanos.",
    origin:
      "Desarrollada en 'Metafísica' y otros tratados. Aristóteles construyó su filosofía sobre la observación de la naturaleza, donde cada ser vivo parece tener un propósito inherente que guía su desarrollo.",
  },
  {
    text: "El hombre nace libre, pero en todas partes está encadenado.",
    author: "Jean-Jacques Rousseau",
    period: "1712-1778",
    school: "Ilustración",
    context:
      "Rousseau contrasta el estado natural de libertad humana con las restricciones impuestas por la sociedad. Aunque nacemos libres, las instituciones sociales, las leyes y las convenciones nos limitan. La pregunta es cómo crear una sociedad que preserve la libertad natural.",
    origin:
      "Frase inicial de 'El Contrato Social' (1762). Rousseau escribió esto como crítica a las monarquías absolutas y como fundamento para una teoría democrática donde el pueblo es soberano.",
  },
  {
    text: "La compasión es la base de toda moralidad.",
    author: "Arthur Schopenhauer",
    period: "1788-1860",
    school: "Pesimismo Filosófico",
    context:
      "Schopenhauer argumenta que la verdadera moralidad surge de la compasión, no de la razón o el deber. Cuando sentimos el sufrimiento ajeno como propio, actuamos moralmente. Esta empatía profunda trasciende el egoísmo natural y conecta a todos los seres.",
    origin:
      "Desarrollada en 'Sobre el Fundamento de la Moral' (1840). Influenciado por el budismo y el hinduismo, Schopenhauer propuso una ética basada en la identificación con el sufrimiento universal, anticipando ideas de la psicología moral contemporánea.",
  },
  {
    text: "El camino es la meta.",
    author: "Confucio",
    period: "551-479 a.C.",
    school: "Confucianismo",
    context:
      "Confucio enfatiza que el proceso de cultivar la virtud es tan importante como alcanzar la perfección moral. El desarrollo personal es un viaje continuo, no un destino final. Cada paso en el camino del autoconocimiento y la mejora tiene valor intrínseco.",
    origin:
      "Principio central de las 'Analectas', compilación de enseñanzas de Confucio. Esta idea refleja la visión confuciana de que la educación moral y el refinamiento personal son procesos de toda la vida.",
  },
  {
    text: "Nada en exceso.",
    author: "Cleóbulo de Lindos",
    period: "Siglo VI a.C.",
    school: "Sabiduría Griega Antigua",
    context:
      "Este principio de moderación es central en la ética griega. La virtud se encuentra en el punto medio entre extremos. El exceso, incluso de cosas buenas, conduce al desequilibrio y al vicio. La sabiduría consiste en encontrar la medida justa en todas las cosas.",
    origin:
      "Una de las máximas de los Siete Sabios de Grecia, inscrita en el Templo de Apolo en Delfos. Esta idea influyó profundamente en Aristóteles, quien desarrolló su doctrina del 'justo medio' basándose en este principio.",
  },
  {
    text: "El lenguaje es la casa del ser.",
    author: "Martin Heidegger",
    period: "1889-1976",
    school: "Fenomenología Existencial",
    context:
      "Heidegger propone que el lenguaje no es simplemente una herramienta para comunicar pensamientos preexistentes. Más bien, el lenguaje estructura nuestra comprensión del mundo. Habitamos el mundo a través del lenguaje, que revela y oculta el ser de las cosas.",
    origin:
      "Desarrollada en 'Carta sobre el Humanismo' (1947) y otros escritos tardíos. Heidegger exploró cómo el lenguaje poético puede revelar verdades sobre la existencia que el lenguaje técnico-científico oculta.",
  },
  {
    text: "La duda es el principio de la sabiduría.",
    author: "Aristóteles",
    period: "384-322 a.C.",
    school: "Filosofía Griega Clásica",
    context:
      "Aristóteles reconoce que el asombro y la duda son el punto de partida de la investigación filosófica. Cuando cuestionamos lo que damos por sentado, comenzamos a buscar explicaciones más profundas. La filosofía nace de la capacidad de maravillarse y dudar.",
    origin:
      "Expresada en 'Metafísica'. Aristóteles observó que los primeros filósofos comenzaron a filosofar cuando se maravillaron ante los fenómenos naturales y buscaron explicaciones racionales más allá de los mitos tradicionales.",
  },
  {
    text: "El todo es más que la suma de sus partes.",
    author: "Aristóteles",
    period: "384-322 a.C.",
    school: "Filosofía Griega Clásica",
    context:
      "Aristóteles introduce el concepto de emergencia: cuando las partes se organizan de cierta manera, surgen propiedades nuevas que no existen en las partes aisladas. Un organismo vivo es más que un conjunto de células; tiene propiedades emergentes como la conciencia.",
    origin:
      "Desarrollada en 'Metafísica' al discutir la naturaleza de las sustancias compuestas. Esta idea influyó en la biología, la psicología gestalt y la teoría de sistemas, mostrando que la organización importa tanto como los componentes.",
  },
  {
    text: "Yo pienso, luego dudo; dudo, luego existo.",
    author: "Søren Kierkegaard",
    period: "1813-1855",
    school: "Existencialismo Cristiano",
    context:
      "Kierkegaard invierte y profundiza el cogito cartesiano. La duda no es solo metodológica sino existencial: refleja la angustia de la existencia humana. La certeza absoluta es imposible; debemos vivir con incertidumbre y hacer 'saltos de fe'.",
    origin:
      "Desarrollada en varios escritos, especialmente 'Temor y Temblor' (1843). Kierkegaard criticó el racionalismo de Hegel y Descartes, argumentando que la existencia humana es fundamentalmente paradójica y no puede reducirse a sistemas lógicos.",
  },
  {
    text: "El poder tiende a corromper y el poder absoluto corrompe absolutamente.",
    author: "Lord Acton",
    period: "1834-1902",
    school: "Liberalismo Político",
    context:
      "Acton advierte sobre los peligros de la concentración de poder. Cuando individuos o instituciones tienen poder sin control, tienden a abusar de él. Esta observación fundamenta la importancia de los controles y equilibrios en los sistemas políticos democráticos.",
    origin:
      "Expresada en una carta de 1887 al obispo Mandell Creighton. Acton, historiador y político liberal, escribió esto al discutir cómo juzgar a figuras históricas poderosas, argumentando que el poder debe ser siempre sospechoso.",
  },
  {
    text: "La libertad es la obediencia a la ley que uno mismo se ha prescrito.",
    author: "Jean-Jacques Rousseau",
    period: "1712-1778",
    school: "Ilustración",
    context:
      "Rousseau reconcilia libertad y ley: somos libres cuando obedecemos leyes que nosotros mismos hemos creado colectivamente. La autonomía no es hacer lo que queremos, sino gobernarnos según principios racionales que hemos aceptado. Esto fundamenta la democracia moderna.",
    origin:
      "Desarrollada en 'El Contrato Social' (1762). Rousseau propuso que en una sociedad legítima, los ciudadanos son simultáneamente autores y sujetos de las leyes, resolviendo así la tensión entre libertad individual y orden social.",
  },
  {
    text: "El hombre es un animal político.",
    author: "Aristóteles",
    period: "384-322 a.C.",
    school: "Filosofía Griega Clásica",
    context:
      "Aristóteles sostiene que los humanos son naturalmente sociales y solo pueden alcanzar su pleno potencial en comunidad. La polis (ciudad-estado) no es una convención artificial sino la realización natural de nuestra esencia. Fuera de la sociedad, no somos plenamente humanos.",
    origin:
      "Expresada en 'Política'. Aristóteles observó que los humanos, a diferencia de otros animales, poseen lenguaje y razón, capacidades que solo tienen sentido en contextos sociales donde deliberamos sobre lo justo y lo injusto.",
  },
]

export function PhilosophyQuote() {
  const [currentQuote, setCurrentQuote] = useState<Quote>(philosophyQuotes[0])
  const [isLiked, setIsLiked] = useState(false)
  const [fadeClass, setFadeClass] = useState("opacity-100")
  const [isLoading, setIsLoading] = useState(false)
  const [isContextOpen, setIsContextOpen] = useState(false)
  const [shownQuotes, setShownQuotes] = useState<Set<number>>(new Set())

  useEffect(() => {
    const today = new Date()
    const dayOfYear = Math.floor(
      (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 1000 / 60 / 60 / 24,
    )
    const quoteIndex = dayOfYear % philosophyQuotes.length
    setCurrentQuote(philosophyQuotes[quoteIndex])
    setShownQuotes(new Set([quoteIndex]))
  }, [])

  const getNewQuote = () => {
    setIsLoading(true)
    setFadeClass("opacity-0 scale-95")
    setTimeout(() => {
      let randomIndex: number
      let attempts = 0
      const maxAttempts = 50

      if (shownQuotes.size >= philosophyQuotes.length) {
        setShownQuotes(new Set())
      }

      do {
        randomIndex = Math.floor(Math.random() * philosophyQuotes.length)
        attempts++
      } while (shownQuotes.has(randomIndex) && attempts < maxAttempts)

      setCurrentQuote(philosophyQuotes[randomIndex])
      setShownQuotes((prev) => new Set([...prev, randomIndex]))
      setFadeClass("opacity-100 scale-100")
      setIsLiked(false)
      setIsLoading(false)
    }, 300)
  }

  const shareQuote = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Filosofía Diaria",
          text: `"${currentQuote.text}" - ${currentQuote.author}`,
          url: window.location.href,
        })
      } catch (err) {
        console.log("Error sharing:", err)
      }
    } else {
      navigator.clipboard.writeText(`"${currentQuote.text}" - ${currentQuote.author}`)
    }
  }

  return (
    <section className="flex-1 flex items-center justify-center px-6 py-12 md:py-24 relative">
      <div className="w-full max-w-4xl mx-auto animate-fade-in-up">
        <div className="text-center mb-12 relative">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Scroll className="w-5 h-5 text-primary animate-float" />
            <h2 className="text-sm font-medium text-muted-foreground tracking-wide uppercase">Reflexión del día</h2>
            <Lightbulb className="w-5 h-5 text-accent animate-float" style={{ animationDelay: "1s" }} />
          </div>
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
            <BookOpen className="w-4 h-4" />
            {new Date().toLocaleDateString("es-ES", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        <div
          className={`p-8 md:p-12 glass-effect border border-border/30 rounded-2xl transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-primary/10 relative overflow-hidden ${fadeClass}`}
        >
          <div className="absolute inset-0 shimmer opacity-30" />

          <div className="text-center space-y-8 relative z-10">
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif leading-relaxed text-balance text-foreground text-shadow">
              "{currentQuote.text}"
            </blockquote>

            <div className="space-y-3">
              <cite className="text-xl md:text-2xl font-semibold text-primary not-italic flex items-center justify-center gap-2">
                <span className="w-8 h-0.5 bg-primary/50" />
                {currentQuote.author}
                <span className="w-8 h-0.5 bg-primary/50" />
              </cite>
              <div className="text-sm text-muted-foreground space-y-1">
                <p className="font-medium">{currentQuote.period}</p>
                <p className="text-xs uppercase tracking-wider text-accent font-medium">{currentQuote.school}</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 pt-6 flex-wrap">
              <PhilosophyButton variant="accent" onClick={() => setIsContextOpen(true)}>
                <Info className="w-4 h-4" />
                Contexto
              </PhilosophyButton>

              <PhilosophyButton variant="like" onClick={() => setIsLiked(!isLiked)} isActive={isLiked}>
                <Heart className={`w-4 h-4 transition-all duration-300 ${isLiked ? "fill-current scale-110" : ""}`} />
                {isLiked ? "Guardado" : "Guardar"}
              </PhilosophyButton>

              <PhilosophyButton variant="secondary" onClick={shareQuote}>
                <Share2 className="w-4 h-4" />
                Compartir
              </PhilosophyButton>

              <PhilosophyButton variant="primary" onClick={getNewQuote} disabled={isLoading}>
                <RefreshCw className={`w-4 h-4 transition-transform duration-300 ${isLoading ? "animate-spin" : ""}`} />
                Nueva frase
              </PhilosophyButton>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
            Cada día, una nueva perspectiva de los grandes pensadores de la historia.
            <span className="text-primary font-medium"> Deja que estas palabras te acompañen</span> en tu reflexión
            diaria y te inspiren a ver el mundo con nuevos ojos.
          </p>
        </div>
      </div>

      {isContextOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-modal-fade-in"
            onClick={() => setIsContextOpen(false)}
          />

          <div className="relative w-full max-w-2xl bg-background/95 backdrop-blur-xl border border-primary/20 rounded-2xl p-6 md:p-8 shadow-2xl animate-modal-slide-up">
            <button
              onClick={() => setIsContextOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-primary/10 transition-colors text-muted-foreground hover:text-foreground"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6 animate-content-reveal">
              <div>
                <h2 className="text-2xl font-serif text-primary flex items-center gap-2 mb-2">
                  <BookOpen className="w-6 h-6" />
                  Contexto Filosófico
                </h2>
                <p className="text-base text-foreground/80">
                  <span className="font-semibold text-foreground">{currentQuote.author}</span> • {currentQuote.period}
                </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-accent" />
                    Significado
                  </h3>
                  <p className="text-foreground/90 leading-relaxed text-pretty">{currentQuote.context}</p>
                </div>

                <div className="h-px bg-primary/20" />

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <Scroll className="w-5 h-5 text-primary" />
                    Origen Histórico
                  </h3>
                  <p className="text-foreground/90 leading-relaxed text-pretty">{currentQuote.origin}</p>
                </div>

                <div className="pt-4 flex items-center justify-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
                    <span className="text-xs uppercase tracking-wider text-primary font-medium">
                      {currentQuote.school}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}