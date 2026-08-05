import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export const generateGeminiResponse = async (prompt) => {
  try {
    const response = await ai.interactions.create({
      model: "gemini-3.6-flash",
      input: prompt,
    });

    return response.output_text;
  } catch (error) {
    console.error("Gemini Error:", error);
    throw error;
  }
};
