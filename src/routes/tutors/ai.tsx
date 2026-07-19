import { createFileRoute, Link } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { useState, useRef, useEffect } from "react";
import { getAllProfessions, getAllGradeLevels } from "~/lib/mock-data";
import { getCurrentUser } from "~/lib/auth";
import { chatWithAiTutor, type ChatMessage } from "~/lib/ai-tutor";

const getAiTutorData = createServerFn({ method: "GET" }).handler(async () => {
  const user = await getCurrentUser();
  return {
    professions: getAllProfessions(),
    gradeLevels: getAllGradeLevels(),
    user,
  };
});

export const Route = createFileRoute("/tutors/ai")({
  loader: () => getAiTutorData(),
  component: AiTutorPage,
});

function AiTutorPage() {
  const data = Route.useLoaderData();
  if (!data) return null;

  const { professions, gradeLevels, user } = data;

  const [selectedProfession, setSelectedProfession] = useState("");
  const [selectedGrade, setSelectedGrade] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [freeLimitReached, setFreeLimitReached] = useState(false);
  const [messagesUsed, setMessagesUsed] = useState(0);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const freeLimit = 5;

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const selectedProfName =
    professions.find((p) => p.id === selectedProfession)?.name ?? "";
  const selectedGradeName =
    gradeLevels.find((g) => g.id === selectedGrade)?.name ?? "";

  async function handleSend() {
    const text = input.trim();
    if (!text || loading || freeLimitReached) return;
    if (!selectedProfession || !selectedGrade) return;

    const userMessage: ChatMessage = { role: "user", content: text };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const result = await chatWithAiTutor({
        data: {
          messages: updatedMessages,
          professionName: selectedProfName,
          gradeName: selectedGradeName,
        },
      });

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: result.reply },
      ]);
      setMessagesUsed(result.messagesUsed);
    } catch (err: unknown) {
      const msg =
        err instanceof Error ? err.message : "Something went wrong";
      if (msg === "FREE_LIMIT_REACHED") {
        setFreeLimitReached(true);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: `Sorry, I ran into an issue: ${msg}. Please try again later.`,
          },
        ]);
      }
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  const canChat = selectedProfession && selectedGrade;

  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      {/* Breadcrumb */}
      <div className="mb-6 flex items-center gap-2 text-sm text-gray-500">
        <Link to="/tutors" className="hover:text-indigo-600">
          Tutors
        </Link>
        <span>/</span>
        <span className="font-medium text-gray-900">AI Tutor</span>
      </div>

      {/* Hero */}
      <div className="rounded-2xl bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 p-8 text-center text-white sm:p-12">
        <span className="text-6xl">🤖</span>
        <h1 className="mt-4 text-3xl font-bold sm:text-4xl">AI Tutor</h1>
        <p className="mx-auto mt-3 max-w-2xl text-lg text-purple-100">
          Get instant, personalized tutoring for any subject on your roadmap.
          Our AI tutor adapts to your child&apos;s grade level and profession
          goals — available 24/7, never judges, and explains concepts in
          multiple ways until they click.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <span className="rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-purple-100 backdrop-blur-sm">
            🎯 Personalized to your roadmap
          </span>
          <span className="rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-purple-100 backdrop-blur-sm">
            🕐 Available 24/7
          </span>
          <span className="rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-purple-100 backdrop-blur-sm">
            📚 All subjects &amp; professions
          </span>
        </div>
      </div>

      {/* Setup form */}
      <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-bold text-gray-900">Get Started</h2>
        <p className="mt-1 text-sm text-gray-500">
          Select your profession and grade level to customize the AI tutor
          experience.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="ai-profession"
              className="mb-1.5 block text-sm font-medium text-gray-700"
            >
              Career Path
            </label>
            <select
              id="ai-profession"
              value={selectedProfession}
              onChange={(e) => setSelectedProfession(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 shadow-sm outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
            >
              <option value="">Choose a profession...</option>
              {professions.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.iconEmoji} {p.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="ai-grade"
              className="mb-1.5 block text-sm font-medium text-gray-700"
            >
              Grade Level
            </label>
            <select
              id="ai-grade"
              value={selectedGrade}
              onChange={(e) => setSelectedGrade(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 shadow-sm outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
            >
              <option value="">Choose a grade...</option>
              {gradeLevels.map((g) => (
                <option key={g.id} value={g.id}>
                  {g.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Chat interface */}
      <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        <div className="border-b border-gray-100 bg-gray-50 px-6 py-4">
          <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900">
            <span>💬</span> Chat with AI Tutor
          </h3>
          {canChat && (
            <p className="mt-1 text-sm text-gray-500">
              {selectedProfName} &bull; {selectedGradeName}
            </p>
          )}
        </div>

        {!user ? (
          <div className="p-12 text-center">
            <span className="text-5xl">🔒</span>
            <h2 className="mt-4 text-xl font-semibold text-gray-900">
              Log in to chat
            </h2>
            <p className="mx-auto mt-2 max-w-md text-gray-500">
              Sign in to get personalized AI tutoring tailored to your
              career path and grade level.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Link
                to="/login"
                className="rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="rounded-full border border-gray-200 bg-white px-6 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>
        ) : !canChat ? (
          <div className="p-12 text-center">
            <span className="text-5xl">👆</span>
            <h2 className="mt-4 text-xl font-semibold text-gray-900">
              Select a career and grade
            </h2>
            <p className="mx-auto mt-2 max-w-md text-gray-500">
              Choose a profession and grade level above to start chatting
              with your AI tutor.
            </p>
          </div>
        ) : (
          <>
            {/* Messages area */}
            <div className="h-[400px] overflow-y-auto bg-gray-50/50 p-4">
              {messages.length === 0 && (
                <div className="flex h-full items-center justify-center text-center">
                  <div>
                    <span className="text-4xl">🤖</span>
                    <p className="mt-3 text-sm text-gray-500">
                      Your AI tutor is ready! Ask a question about{" "}
                      <strong>{selectedProfName}</strong> or any subject
                      at the <strong>{selectedGradeName}</strong> level.
                    </p>
                  </div>
                </div>
              )}
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`mb-4 flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-indigo-600 text-white"
                        : "border border-gray-200 bg-white text-gray-800 shadow-sm"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="mb-4 flex justify-start">
                  <div className="rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
                    <div className="flex items-center gap-1">
                      <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400" style={{ animationDelay: "0ms" }}></span>
                      <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400" style={{ animationDelay: "150ms" }}></span>
                      <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400" style={{ animationDelay: "300ms" }}></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Free messages counter */}
            {messagesUsed > 0 && (
              <div className="border-t border-gray-100 bg-amber-50 px-4 py-2 text-center text-xs text-amber-700">
                {freeLimitReached ? (
                  <span>⚠️ Free messages used up ({messagesUsed}/{freeLimit}). </span>
                ) : (
                  <span>
                    Free messages: {messagesUsed}/{freeLimit} used
                  </span>
                )}
              </div>
            )}

            {/* Input area */}
            {freeLimitReached ? (
              <div className="border-t border-gray-100 bg-gradient-to-r from-indigo-50 to-purple-50 p-6 text-center">
                <p className="text-sm font-medium text-gray-900">
                  Subscribe for unlimited AI tutoring
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Get unlimited chat messages, personalized tutoring, and
                  full roadmap access.
                </p>
                <Link
                  to="/"
                  className="mt-3 inline-block rounded-full bg-indigo-600 px-6 py-2 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors"
                >
                  Subscribe — $5/month →
                </Link>
              </div>
            ) : (
              <div className="border-t border-gray-100 p-4">
                <div className="flex items-center gap-3">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask your AI tutor anything..."
                    disabled={loading}
                    className="flex-1 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200 disabled:opacity-50"
                  />
                  <button
                    onClick={handleSend}
                    disabled={loading || !input.trim()}
                    className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 disabled:opacity-50 transition-colors"
                  >
                    {loading ? "..." : "Send"}
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Features preview */}
      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm">
          <span className="text-3xl">🧠</span>
          <h3 className="mt-3 text-lg font-semibold text-gray-900">
            Adaptive Learning
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            The AI adjusts explanations based on your child&apos;s responses,
            filling knowledge gaps automatically.
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm">
          <span className="text-3xl">🗺️</span>
          <h3 className="mt-3 text-lg font-semibold text-gray-900">
            Roadmap-Aware
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            Knows exactly where your child is on their career path and what
            they need to learn next.
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm">
          <span className="text-3xl">🎮</span>
          <h3 className="mt-3 text-lg font-semibold text-gray-900">
            Gamified
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            Earn badges, complete challenges, and track progress — learning
            feels like leveling up.
          </p>
        </div>
      </div>
    </main>
  );
}
