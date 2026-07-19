import { createFileRoute, Link } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { getAllProfessions, getAllGradeLevels } from "~/lib/mock-data";

const getAiTutorData = createServerFn({ method: "GET" }).handler(async () => {
  return {
    professions: getAllProfessions(),
    gradeLevels: getAllGradeLevels(),
  };
});

export const Route = createFileRoute("/tutors/ai")({
  loader: () => getAiTutorData(),
  component: AiTutorPage,
});

function AiTutorPage() {
  const data = Route.useLoaderData();
  if (!data) return null;

  const [selectedProfession, setSelectedProfession] = useState("");
  const [selectedGrade, setSelectedGrade] = useState("");

  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      {/* Breadcrumb */}
      <div className="mb-6 flex items-center gap-2 text-sm text-gray-500">
        <Link to="/tutors" className="hover:text-indigo-600">Tutors</Link>
        <span>/</span>
        <span className="text-gray-900 font-medium">AI Tutor</span>
      </div>

      {/* Hero */}
      <div className="rounded-2xl bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 p-8 sm:p-12 text-white text-center">
        <span className="text-6xl">🤖</span>
        <h1 className="mt-4 text-3xl font-bold sm:text-4xl">AI Tutor</h1>
        <p className="mt-3 text-lg text-purple-100 max-w-2xl mx-auto">
          Get instant, personalized tutoring for any subject on your roadmap. Our AI tutor adapts to your child's grade level and profession goals — available 24/7, never judges, and explains concepts in multiple ways until they click.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <span className="rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-purple-100 backdrop-blur-sm">🎯 Personalized to your roadmap</span>
          <span className="rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-purple-100 backdrop-blur-sm">🕐 Available 24/7</span>
          <span className="rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-purple-100 backdrop-blur-sm">📚 All subjects & professions</span>
        </div>
      </div>

      {/* Setup form */}
      <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900">Get Started</h2>
        <p className="mt-1 text-sm text-gray-500">Select your profession and grade level to customize the AI tutor experience.</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="ai-profession" className="block text-sm font-medium text-gray-700 mb-1.5">
              Career Path
            </label>
            <select
              id="ai-profession"
              value={selectedProfession}
              onChange={(e) => setSelectedProfession(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 shadow-sm focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none"
            >
              <option value="">Choose a profession...</option>
              {data.professions.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.iconEmoji} {p.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="ai-grade" className="block text-sm font-medium text-gray-700 mb-1.5">
              Grade Level
            </label>
            <select
              id="ai-grade"
              value={selectedGrade}
              onChange={(e) => setSelectedGrade(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 shadow-sm focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none"
            >
              <option value="">Choose a grade...</option>
              {data.gradeLevels.map((g) => (
                <option key={g.id} value={g.id}>{g.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Chat interface (stub) */}
      <div className="mt-8 rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
        <div className="border-b border-gray-100 bg-gray-50 px-6 py-4">
          <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
            <span>💬</span> Chat with AI Tutor
          </h3>
          {selectedProfession && selectedGrade && (
            <p className="mt-1 text-sm text-gray-500">
              {data.professions.find(p => p.id === selectedProfession)?.iconEmoji}{" "}
              {data.professions.find(p => p.id === selectedProfession)?.name} •{" "}
              {data.gradeLevels.find(g => g.id === selectedGrade)?.name}
            </p>
          )}
        </div>
        <div className="p-12 text-center">
          <span className="text-5xl">🚧</span>
          <h2 className="mt-4 text-xl font-semibold text-gray-900">Coming Soon</h2>
          <p className="mt-2 text-gray-500 max-w-md mx-auto">
            We're building an incredible AI tutoring experience. Soon you'll be able to chat with a tutor that knows your child's exact roadmap and adapts to their learning style.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-xl bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700">
            <span>🔔</span> Sign up for early access when it launches
          </div>
        </div>
      </div>

      {/* Features preview */}
      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm">
          <span className="text-3xl">🧠</span>
          <h3 className="mt-3 text-lg font-semibold text-gray-900">Adaptive Learning</h3>
          <p className="mt-2 text-sm text-gray-500">The AI adjusts explanations based on your child's responses, filling knowledge gaps automatically.</p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm">
          <span className="text-3xl">🗺️</span>
          <h3 className="mt-3 text-lg font-semibold text-gray-900">Roadmap-Aware</h3>
          <p className="mt-2 text-sm text-gray-500">Knows exactly where your child is on their career path and what they need to learn next.</p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm">
          <span className="text-3xl">🎮</span>
          <h3 className="mt-3 text-lg font-semibold text-gray-900">Gamified</h3>
          <p className="mt-2 text-sm text-gray-500">Earn badges, complete challenges, and track progress — learning feels like leveling up.</p>
        </div>
      </div>
    </main>
  );
}
