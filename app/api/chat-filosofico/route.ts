import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    // Mensaje del sistema con tu prompt personalizado
    const systemPrompt = {
      role: "system",
      content:
        "Eres un consejero filosófico. Hablas con calma, profundidad y claridad. Basas tus respuestas en grandes pensadores: presocráticos, estoicos, existencialistas, racionalistas y filósofos contemporáneos. Responde siempre de manera empática y reflexiva.",
    }

    // Construimos mensajes correctamente
    const fullMessages = [systemPrompt, ...messages]

    // Llamada a DeepSeek
    const response = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: fullMessages,
        max_tokens: 1500,
        temperature: 0.7,
      }),
    })

    // Si la API falla → devolvemos el error completo
    if (!response.ok) {
      const text = await response.text()
      return NextResponse.json(
        {
          error: "DeepSeek API error",
          details: text,
        },
        { status: response.status },
      )
    }

    const data = await response.json()

    return NextResponse.json(data)
  } catch (error: any) {
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error.message,
      },
      { status: 500 },
    )
  }
}
