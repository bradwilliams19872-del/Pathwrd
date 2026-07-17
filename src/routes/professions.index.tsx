import { createFileRoute, Link } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { useState, useMemo } from "react";
import {
  getAllProfessions,
  getProfessionCategories,
  searchProfessions,
} from "~/lib/mock-data";

const getProfessionsData = createServerFn({ method: "GET" }).handler(async () => {
  return {
    professions: getAllProfessions(),
    categories: getProfessionCategories(),
  };
});

export const Route = createFileRoute("/professions/")({
  loader: () => getProfessionsData(),
  component: ProfessionsPage,
});

function ProfessionsPage() {
  const data = Route.useLoaderData();
  if (!data) return null;
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let results = data.professions;
    if (activeCategory) {
      results = results.filter((p) => p.category === activeCategory);
    }
    if (query.trim()) {
      results = searchProfessions(query).filter(
        (p) => !activeCategory || p.category === activeCategory,
      );
    }
    return results;
  }, [data.professions, query, activeCategory]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Explore Professions
        </h1>
        <p className="mt-3 text-lg text-gray-500">
          Choose a career to see the full educational roadmap — Pre-K through PhD
        </p>
      </div>
      <div className="mx-auto mt-8 max-w-md">
        <div className="flex rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden focus-within:ring-2 focus-within:ring-indigo-500">
          <span className="flex items-center pl-4 text-lg">🔍</span>
          <input
            type="text"
            placeholder="Search professions..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 border-0 bg-transparent px-3 py-3 text-gray-900 placeholder-gray-400 focus:outline-none"
          />
        </div>
      </div>
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setActiveCategory(null)}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
            activeCategory === null
              ? "bg-indigo-600 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          All
        </button>
        {data.categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              activeCategory === cat
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <Link
            key={p.id}
            to="/professions/$slug/roadmap"
            params={{ slug: p.slug }}
            search={{ grade: 'k' }}
            className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-indigo-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            <div className="flex items-start justify-between">
              <span className="text-4xl">{p.iconEmoji}</span>
              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                {p.category}
              </span>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
              {p.name}
            </h3>
            <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-500">
              {p.description}
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-indigo-600">
              View roadmap <span aria-hidden="true">→</span>
            </span>
          </Link>
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="mt-12 text-center text-gray-500">
          <span className="text-4xl">🤷</span>
          <p className="mt-2">No professions match your search.</p>
        </div>
      )}
    </main>
  );
}
