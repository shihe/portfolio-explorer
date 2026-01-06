
import { GoogleGenAI, Type } from "@google/genai";
import { PROJECTS } from "../constants";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const askProjectAdvisor = async (userPrompt: string, chatHistory: any[]) => {
  const ai = getAI();
  const context = `
    You are an expert tech recruiter and portfolio advisor. 
    The following is a list of projects in the portfolio:
    ${JSON.stringify(PROJECTS.map(p => ({ title: p.title, description: p.description, tags: p.tags })))}

    Answer the user's questions about these projects, their skills, or which project fits a certain requirement best.
    Be professional, insightful, and slightly enthusiastic.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        { role: 'user', parts: [{ text: context }] },
        ...chatHistory.map(h => ({
          role: h.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: h.content }]
        })),
        { role: 'user', parts: [{ text: userPrompt }] }
      ],
      config: {
        temperature: 0.7,
        topP: 0.9,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a bit of trouble connecting to my neural network right now. Please try again in a moment!";
  }
};
