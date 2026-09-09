/**
 * Experiential Gateway LLM Client for "gpt-6-astra"
 */

export const EXPERIENTIAL_BASE_URL = 'https://api.experientiallabs.ai/v1';
export const MODEL_ID = 'gpt-6-astra';

export function getExperientialApiKey(): string {
  const apiKey = process.env.EXPLABS_API_KEY;
  if (!apiKey) {
    throw new Error(
      'EXPLABS_API_KEY is not set. Please create one under Settings -> API Keys and export it.'
    );
  }
  return apiKey;
}

export interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface ChatCompletionOptions {
  temperature?: number;
  max_tokens?: number;
  stream?: boolean;
  tools?: any[];
  tool_choice?: any;
}

/**
 * Creates a chat completion using the gpt-6-astra model routed via the Experiential gateway.
 */
export async function createExperientialChatCompletion(
  messages: ChatMessage[],
  options: ChatCompletionOptions = {}
) {
  const apiKey = getExperientialApiKey();

  const response = await fetch(`${EXPERIENTIAL_BASE_URL}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: MODEL_ID,
      messages,
      ...options,
    }),
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => null);
    throw new Error(
      `Experiential API error (${response.status}): ${JSON.stringify(errorBody)}`
    );
  }

  return response.json();
}
