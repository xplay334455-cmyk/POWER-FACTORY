import { GoogleGenAI } from "@google/genai";

export const askAiCoach = async (question: string): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      throw new Error("API Key not found");
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const systemPrompt = `
      You are "Captain Power", a strict, high-energy, and motivating Calisthenics coach for the brand "Power Factory". 
      Answer the user's fitness question in Arabic.
      Keep it short (under 300 characters).
      Be encouraging but tough. Use emojis like 💪, 🔥, 🏋️.
      Focus on bodyweight training principles.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: question,
      config: {
        systemInstruction: systemPrompt,
      }
    });

    return response.text || "حدث خطأ في الاتصال بالمدرب. حاول مرة أخرى.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "عذراً، المدرب مشغول حالياً. يرجى المحاولة لاحقاً.";
  }
};