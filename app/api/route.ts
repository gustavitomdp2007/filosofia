export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    const apiKey = process.env.DEEPSEEK_API_KEY

    if (!apiKey) {
      return Response.json({ error: "API key de DeepSeek no configurada" }, { status: 500 })
    }

    const systemPrompt = `Eres un sabio consejero filosófico que ayuda a las personas a reflexionar sobre sus vidas desde múltiples perspectivas filosóficas.

Tu enfoque:
- Integras sabiduría de filósofos presocráticos (Tales, Heráclito, Parménides, Pitágoras)
- Incluyes perspectivas de los clásicos (Sócrates, Platón, Aristóteles)
- Refieres a los estoicos (Marco Aurelio, Epicteto, Séneca)
- Citas a existencialistas (Sartre, Camus, Kierkegaard, Heidegger)
- Mencionas filósofos modernos relevantes (Nietzsche, Schopenhauer, Kant, etc.)

Estructura de respuesta:
1. Reconoce la pregunta con empatía
2. Ofrece 2-3 perspectivas filosóficas diferentes con citas o ideas clave
3. Proporciona reflexiones prácticas aplicables a la vida moderna
4. Termina con una pregunta reflexiva para profundizar

Estilo:
- Cálido y accesible, evita el lenguaje demasiado académico
- Usa ejemplos concretos cuando sea apropiado
- Balancea profundidad con claridad
- Extensión media: 200-300 palabras por respuesta
- Usa formato con **negritas** para nombres de filósofos y conceptos clave`

    // Preparar mensajes para DeepSeek
    const deepseekMessages = [
      { role: "system", content: systemPrompt },
      ...messages.map((msg: any) => ({
        role: msg.role,
        content: msg.content,
      })),
    ]

    // Llamar a la API de DeepSeek con streaming
    const response = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: deepseekMessages,
        temperature: 0.8,
        max_tokens: 800,
        stream: true,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error("[v0] Error de DeepSeek:", errorData)
      return Response.json(
        { error: errorData.error?.message || `Error HTTP: ${response.status}` },
        { status: response.status },
      )
    }

    // Crear un stream de respuesta compatible con useChat de Vercel AI SDK
    const encoder = new TextEncoder()
    const decoder = new TextDecoder()

    const stream = new ReadableStream({
      async start(controller) {
        const reader = response.body?.getReader()
        if (!reader) {
          controller.close()
          return
        }

        try {
          while (true) {
            const { done, value } = await reader.read()
            if (done) break

            const chunk = decoder.decode(value)
            const lines = chunk.split("\n").filter((line) => line.trim() !== "")

            for (const line of lines) {
              if (line.startsWith("data: ")) {
                const data = line.slice(6)

                if (data === "[DONE]") {
                  continue
                }

                try {
                  const parsed = JSON.parse(data)
                  const content = parsed.choices[0]?.delta?.content || ""

                  if (content) {
                    // Formato compatible con Vercel AI SDK
                    const formattedChunk = `0:"${content.replace(/"/g, '\\"')}"\n`
                    controller.enqueue(encoder.encode(formattedChunk))
                  }
                } catch (e) {
                  console.error("[v0] Error parsing stream chunk:", e)
                }
              }
            }
          }
        } catch (error) {
          console.error("[v0] Error en streaming:", error)
        } finally {
          controller.close()
        }
      },
    })

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Transfer-Encoding": "chunked",
      },
    })
  } catch (error) {
    console.error("[v0] Error en chat filosófico:", error)
    return Response.json({ error: "Error al procesar la consulta filosófica" }, { status: 500 })
  }
}
