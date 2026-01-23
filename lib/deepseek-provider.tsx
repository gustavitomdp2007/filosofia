"use client"

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react"

//
// TYPES
//

export interface DeepSeekMessage {
  role: "system" | "user" | "assistant"
  content: string
}

interface SendMessageOptions {
  model?: string
  maxTokens?: number
  temperature?: number
  stream?: boolean
  systemPrompt?: string
}

interface DeepSeekContextType {
  isLoading: boolean
  error: string | null
  conversation: DeepSeekMessage[]

  sendMessage: (message: string, options?: SendMessageOptions) => Promise<any>
  resetConversation: () => void

  hasConversation: boolean
  lastMessage: DeepSeekMessage | undefined
}

interface ProviderProps {
  children: ReactNode
  apiKey: string | undefined
  baseUrl?: string
}

//
// CONTEXT
//

const DeepSeekContext = createContext<DeepSeekContextType | null>(null)

export const useDeepSeek = () => {
  const ctx = useContext(DeepSeekContext)
  if (!ctx)
    throw new Error("useDeepSeek must be used within a DeepSeekProvider")
  return ctx
}

//
// PROVIDER PRINCIPAL
//

export const DeepSeekProvider = ({
  children,
  apiKey,
  baseUrl = "https://api.deepseek.com",
}: ProviderProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [conversation, setConversation] = useState<DeepSeekMessage[]>([])

  const sendMessage = useCallback(
    async (message: string, options: SendMessageOptions = {}) => {
      const {
        model = "deepseek-chat",
        maxTokens = 1000,
        temperature = 0.7,
        stream = false,
        systemPrompt = "Eres un asistente útil",
      } = options

      setIsLoading(true)
      setError(null)

      const messages: DeepSeekMessage[] = [
        { role: "system", content: systemPrompt },
        ...conversation,
        { role: "user", content: message },
      ]

      try {
        const res = await fetch(`${baseUrl}/chat/completions`, {
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

        if (!res.ok) {
          const errData = await res.json().catch(() => ({}))
          throw new Error(
            errData.error?.message ||
              `HTTP error! status: ${res.status}`
          )
        }

        const data = await res.json()
        const assistantResponse = data.choices[0].message.content

        const updated: DeepSeekMessage[] = [
          ...messages.slice(1), // remove system prompt
          { role: "assistant", content: assistantResponse },
        ]

        setConversation(updated)

        return {
          success: true,
          message: assistantResponse,
          fullResponse: data,
        }
      } catch (err: any) {
        const msg = err?.message || "Error al conectar con DeepSeek"
        setError(msg)
        return { success: false, error: msg }
      } finally {
        setIsLoading(false)
      }
    },
    [apiKey, baseUrl, conversation],
  )

  const resetConversation = useCallback(() => {
    setConversation([])
    setError(null)
  }, [])

  const value: DeepSeekContextType = {
    isLoading,
    error,
    conversation,

    sendMessage,
    resetConversation,

    hasConversation: conversation.length > 0,
    lastMessage: conversation.at(-1),
  }

  return (
    <DeepSeekContext.Provider value={value}>
      {children}
    </DeepSeekContext.Provider>
  )
}

//
// PROVIDER AUTOMÁTICO CON VARIABLES DE ENTORNO
//

export const DeepSeekProviderWithEnv = ({
  children,
}: {
  children: ReactNode
}) => {
  const apiKey = process.env.NEXT_PUBLIC_DEEPSEEK_API_KEY
  const baseUrl =
    process.env.NEXT_PUBLIC_DEEPSEEK_API_URL || "https://api.deepseek.com"

  if (!apiKey) {
    console.warn(
      "⚠️ Falta NEXT_PUBLIC_DEEPSEEK_API_KEY en tu .env.local"
    )
  }

  return (
    <DeepSeekProvider apiKey={apiKey} baseUrl={baseUrl}>
      {children}
    </DeepSeekProvider>
  )
}
