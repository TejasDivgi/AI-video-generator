import { chatSession } from "./AiModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { prompt } = await req.json();
    console.log("Prompt received:", prompt);

    const result = await chatSession.sendMessage(prompt);
    const responseText = result.response.text();
    console.log("Response:", responseText);

    // Remove markdown code block markers if they exist
    const cleanedText = responseText.replace(/^```json\s*|\s*```$/g, '').trim();

    // Parse the cleaned text as JSON
    const parsedResult = JSON.parse(cleanedText);
    return NextResponse.json({ result: parsedResult });
  } catch (e) {
    console.error("Error in API route:", e);
    return NextResponse.json({ error: e.message });
  }
}
