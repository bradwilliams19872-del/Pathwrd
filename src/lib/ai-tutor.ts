import { createServerFn } from "@tanstack/react-start";

const FREE_MESSAGE_LIMIT = 5;
const COOKIE_NAME = "pathwrd_ai_messages";

export interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export interface ChatRequest {
  messages: ChatMessage[];
  professionName: string;
  gradeName: string;
}

export interface ChatResponse {
  reply: string;
  messagesUsed: number;
  freeLimit: number;
  isSubscribed: boolean;
}

export const chatWithAiTutor = createServerFn({ method: "POST" }).handler(
  async ({ data }: { data: ChatRequest }): Promise<ChatResponse> => {
    // Dynamically import server-only modules inside the handler
    const { getCookie, setCookie } = await import(
      "@tanstack/react-start/server"
    );
    const { requireUser } = await import("~/lib/auth");

    const user = await requireUser();

    // Check free tier limit
    const countStr = getCookie(COOKIE_NAME);
    const count = countStr ? parseInt(countStr, 10) : 0;
    const isSubscribed = user.subscriptionStatus === "active";

    if (!isSubscribed && count >= FREE_MESSAGE_LIMIT) {
      throw new Error("FREE_LIMIT_REACHED");
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error(
        "OpenAI API key not configured. Set OPENAI_API_KEY in environment.",
      );
    }

    const systemPrompt = `You are an AI tutor on Pathwrd, a career roadmap platform. You're helping a student who wants to become a ${data.professionName}. They are at the ${data.gradeName} level. Be encouraging, educational, and age-appropriate. Keep answers concise but thorough. If they ask about the career path, give practical advice. If they ask academic questions, tutor them in that subject at their grade level.`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          ...data.messages,
        ],
        max_tokens: 1000,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errText = await response.text().catch(() => "Unknown error");
      throw new Error(`OpenAI API error (${response.status}): ${errText}`);
    }

    const result = (await response.json()) as {
      choices: { message: { content: string } }[];
    };
    const reply =
      result.choices[0]?.message?.content ??
      "I'm not sure how to respond to that.";

    // Increment count for free users
    if (!isSubscribed) {
      setCookie(COOKIE_NAME, String(count + 1), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 365 * 24 * 60 * 60,
      });
    }

    return {
      reply,
      messagesUsed: count + 1,
      freeLimit: FREE_MESSAGE_LIMIT,
      isSubscribed,
    };
  },
);
