import { createFileRoute, Link } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { useState, useMemo } from "react";
import {
  getAllProfessionals,
  getAllProfessions,
} from "~/lib/mock-data";

const getSpotlightsData = createServerFn({ method: "GET" }).handler(async () => {
  return {
    professionals: getAllProfessionals(),
    professions: getAllProfessions(),
  };
});

export const Route = createFileRoute("/spotlights")({
  loader: () => getSpotlightsData(),
  component: SpotlightsPage,
});

function SpotlightsPage() {
  const data = Route.useLoaderData();
  if (!data) return null;

  const [activeProfession, setActiveProfession] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (!activeProfession) return data.professionals;
    return data.professionals.filter((p) => p.professionId === activeProfession);
  }, [data.professionals, activeProfession]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Professional Spotlights
        </h1>
        <p className="mt-3 text-lg text-gray-500">
          Real career paths from people who've walked them — see what it actually
          takes to succeed
        </p>
      </div>

      {/* Profession filter */}
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setActiveProfession(null)}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
            activeProfession === null
              ? "bg-indigo-600 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          All professions
        </button>
        {data.professions.map((prof) => (
          <button
            key={prof.id}
            onClick={() => setActiveProfession(prof.id)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              activeProfession === prof.id
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {prof.iconEmoji} {prof.name}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((pro) => (
          <div
            key={pro.id}
            className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
          >
            {/* Avatar area */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/20 text-3xl font-bold text-white shadow-inner">
                {pro.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
            </div>
            <div className="p-6">
              <div className="mb-1">
                <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                  {pro.professionName}
                </span>
              </div>
              <h3 className="mt-2 text-xl font-bold text-gray-900">
                {pro.name}
              </h3>
              <p className="text-sm text-gray-500">{pro.title}</p>
              <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-gray-600">
                {pro.bio}
              </p>

              {/* Path background */}
              <div className="mt-4 rounded-xl bg-amber-50 border border-amber-100 p-4">
                <h4 className="text-xs font-semibold uppercase tracking-wide text-amber-700 mb-2">
                  Their Path
                </h4>
                <p className="text-sm leading-relaxed text-amber-900">
                  {pro.pathBackground}
                </p>
              </div>

              <Link
                to="/professions/$slug"
                params={{ slug: pro.professionName.toLowerCase().replace(/\s+/g, "-") }}
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-800"
              >
                View {pro.professionName} roadmap →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-12 text-center text-gray-500">
          <span className="text-4xl">🌟</span>
          <p className="mt-2">No spotlights match this filter yet. Check back soon!</p>
        </div>
      )}
    </main>
  );
}
