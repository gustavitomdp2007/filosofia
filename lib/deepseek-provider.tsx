"use client"


import { createContext, useContext, useState, useCallback } from "react"

// Crear el contexto
const DeepSeekContext = createContext()


export const useDeepSeek = () => {
  const context = useContext(DeepSeekContext)
  if (!context) {
    throw new Error("useDeepSeek must be used within a DeepSeekProvider")
  }
  return context
}

export const DeepSeekProvider = ({ children, apiKey, baseUrl = "https://api.deepseek.com" }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [conversation, setConversation] = useState([])

  // Función principal para enviar mensajes
  const sendMessage = useCallback(
    async (message, options = {}) => {
      const {
        model = "deepseek-chat",
        maxTokens = 1000,
        temperature = 0.7,
        stream = false,
        systemPrompt = "Eres un asistente útil",
      } = options

      setIsLoading(true)
      setError(null)

      const messages = [{ role: "system", content: systemPrompt }, ...conversation, { role: "user", content: message }]

      try {
        const response = await fetch(`${baseUrl}/chat/completions`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model,
            messages,
            max_tokens: maxTokens,
            temperature,
            stream,
          }),
        })

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}))
          throw new Error(errorData.error?.message || `HTTP error! status: ${response.status}`)
        }

        const data = await response.json()

        const assistantMessage = data.choices[0].message.content

        // Actualizar conversación
        const updatedConversation = [
          ...messages.slice(1), // Excluir system prompt
          { role: "assistant", content: assistantMessage },
        ]

        setConversation(updatedConversation)

        return {
          success: true,
          message: assistantMessage,
          fullResponse: data,
          conversation: updatedConversation,
        }
      } catch (err) {
        const errorMessage = err.message || "Error al conectar con DeepSeek"
        setError(errorMessage)
        return {
          success: false,
          error: errorMessage,
          conversation,
        }
      } finally {
        setIsLoading(false)
      }
    },
    [apiKey, baseUrl, conversation],
  )

  // Función para streaming (si lo necesitas)
  const sendMessageStream = useCallback(
    async (message, options = {}) => {
      const {
        model = "deepseek-chat",
        maxTokens = 1000,
        temperature = 0.7,
        systemPrompt = "Eres un asistente útil",
        onChunk = () => {},
        onComplete = () => {},
      } = options

      setIsLoading(true)
      setError(null)

      const messages = [{ role: "system", content: systemPrompt }, ...conversation, { role: "user", content: message }]

      try {
        const response = await fetch(`${baseUrl}/chat/completions`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model,
            messages,
            max_tokens: maxTokens,
            temperature,
            stream: true,
          }),
        })

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const reader = response.body.getReader()
        const decoder = new TextDecoder()
        let fullResponse = ""

        while (true) {
          const { done, value } = await reader.read()
          if (done) break

          const chunk = decoder.decode(value)
          const lines = chunk.split("\n").filter((line) => line.trim() !== "")

          for (const line of lines) {
            if (line.startsWith("data: ")) {
              const data = line.slice(6)

              if (data === "[DONE]") {
                // Finalizar streaming
                const updatedConversation = [...messages.slice(1), { role: "assistant", content: fullResponse }]
                setConversation(updatedConversation)
                onComplete(fullResponse, updatedConversation)
                break
              }

              try {
                const parsed = JSON.parse(data)
                const content = parsed.choices[0]?.delta?.content || ""

                if (content) {
                  fullResponse += content
                  onChunk(content, fullResponse)
                }
              } catch (e) {
                console.error("Error parsing stream chunk:", e)
              }
            }
          }
        }

        return { success: true, message: fullResponse }
      } catch (err) {
        const errorMessage = err.message || "Error en streaming"
        setError(errorMessage)
        return { success: false, error: errorMessage }
      } finally {
        setIsLoading(false)
      }
    },
    [apiKey, baseUrl, conversation],
  )

  // Función para reiniciar conversación
  const resetConversation = useCallback(() => {
    setConversation([])
    setError(null)
  }, [])

  // Función para cargar historial
  const loadConversation = useCallback((messages) => {
    setConversation(messages)
  }, [])

  // Valor del contexto
  const contextValue = {
    // Estado
    isLoading,
    error,
    conversation,

    // Acciones
    sendMessage,
    sendMessageStream,
    resetConversation,
    loadConversation,

    // Utilidades
    hasConversation: conversation.length > 0,
    lastMessage: conversation[conversation.length - 1],
  }

  return <DeepSeekContext.Provider value={contextValue}>{children}</DeepSeekContext.Provider>
}

// Provider con valores por defecto (para desarrollo)
export const DeepSeekProviderWithEnv = ({ children }) => {
  const apiKey = process.env.REACT_APP_DEEPSEEK_API_KEY
  const baseUrl = process.env.REACT_APP_DEEPSEEK_API_URL || "https://api.deepseek.com"

  if (!apiKey) {
    console.warn("DeepSeek API key no encontrada. Asegúrate de configurar REACT_APP_DEEPSEEK_API_KEY en .env")
  }

  return (
    <DeepSeekProvider apiKey={apiKey} baseUrl={baseUrl}>
      {children}
    </DeepSeekProvider>
  )
}
