// app/api/chat/route.ts

import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from 'next/server';
import { personas } from '@/lib/persona';

const MODEL_NAME = "gemini-2.0-flash";

export async function POST(req: Request) {
  try {
    const { messages, personaId, language } = await req.json();

    type LanguageKey = 'en' | 'hi_en';

    if (!personaId || !personas[personaId as keyof typeof personas]) {
      return NextResponse.json({ error: 'Invalid persona ID' }, { status: 400 });
    }

    const persona = personas[personaId as keyof typeof personas];
    const langKey = language as LanguageKey;

    const systemInstruction = persona.systemInstruction[langKey] || persona.systemInstruction.en;
    
    // Prepare data for the model
    const history = messages.slice(0, -1); 
    const latestMessage = messages[messages.length - 1].parts[0].text;
    
   
    if (history.length > 0 && history[0].role === 'model') {
      history.shift(); 
    }

    //====================================================================

    const API_KEY = process.env.GEMINI_API_KEY!;
    const genAI = new GoogleGenerativeAI(API_KEY);

    const model = genAI.getGenerativeModel({
      model: MODEL_NAME,
      systemInstruction,
    });
    
    const chat = model.startChat({
      history: history,
    });

    const result = await chat.sendMessage(latestMessage);
    const response = result.response;
    const text = response.text();

    return NextResponse.json({ text });

  } catch (error) {
    console.error("Error in chat API:", error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}