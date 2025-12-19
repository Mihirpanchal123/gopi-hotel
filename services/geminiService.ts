import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

let chatSession: Chat | null = null;

const getClient = () => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  if (!apiKey) {
    console.warn("API_KEY is missing. Chat functionality will be disabled.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const sendMessageToConcierge = async (message: string): Promise<string> => {
  const ai = getClient();
  if (!ai) return "I'm sorry, I'm currently offline. Please call our front desk at 077909 19160.";

  try {
    if (!chatSession) {
      chatSession = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
      });
    }

    const response: GenerateContentResponse = await chatSession.sendMessage({ message });
    return response.text || "I apologize, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the server. Please try again later or call us directly.";
  }
};
