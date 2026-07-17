import { createFileRoute, Link } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { useState } from "react";
import {
  getAllProfessionals,
  getAllProfessions,
  searchProfessions,
} from "~/lib/mock-data";
import type { Professional, Profession } from "~/lib/mock-data";

const getLandingData = createServerFn({ method: "GET" }).handler(async () => {
  const featuredProfessions = getAllProfessions();
  const featuredProfessionals = getAllProfessionals().slice(0, 3);
  return { featuredProfessions, featuredProfessionals };
});

export const Route = createFileRoute("/")({
  loader: () => getLandingData(),
  component: Home,
});

function Home() {
  const data = Route.useLoaderData();
  if (!data) return null;
  const { featuredProfessions, featuredProfessionals } = data;

  return (
    <main>
      <HeroSection professions={featuredProfessions} />
      <HowItWorks />
      <FeaturedProfessions professions={featuredProfessions} />
      <FeaturedSpotlights professionals={featuredProfessionals} />
      <CTASection />
    </main>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────

function HeroSection({ professions }: { professions: Profession[] }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Profession[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (q: string) => {
    setQuery(q);
    if (q.trim().length > 0) {
      setResults(searchProfessions(q));
      setShowResults(true);
    } else {
      setResults([]);
      setShowResults(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-amber-50 px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <span className="inline-block rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-semibold text-indigo-700 mb-6">
          🧭 Year-by-year educational roadmaps
        </span>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          Every career starts with a{" "}
          <span className="text-indigo-600">plan</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl">
          See exactly what your child needs — from Pre-K through PhD — to become
          an astronaut, doctor, engineer, or any professional they dream of.
          Real career paths, real resources, all in one place.
        </p>

        {/* Search */}
        <div className="relative mx-auto mt-8 max-w-lg">
          <div className="flex rounded-2xl border border-gray-200 bg-white shadow-lg shadow-indigo-100/50 overflow-hidden focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500 transition-shadow">
            <span className="flex items-center pl-4 text-xl">🔍</span>
            <input
              type="text"
              placeholder='Try "Astronaut" or "Doctor"...'
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              onFocus={() => query.trim().length > 0 && setShowResults(true)}
              onBlur={() => setTimeout(() => setShowResults(false), 200)}
              className="flex-1 border-0 bg-transparent px-3 py-4 text-gray-900 placeholder-gray-400 focus:outline-none text-base"
            />
          </div>
          {showResults && results.length > 0 && (
            <div className="absolute z-10 mt-2 w-full rounded-xl border border-gray-200 bg-white shadow-lg py-2 text-left">
              {results.map((p) => (
                <Link
                  key={p.id}
                  to="/professions/$slug"
                  params={{ slug: p.slug }}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                >
                  <span className="text-2xl">{p.iconEmoji}</span>
                  <div>
                    <div className="font-semibold text-gray-900">{p.name}</div>
                    <div className="text-sm text-gray-500">{p.category}</div>
                  </div>
                </Link>
              ))}
            </div>
          )}
          {showResults && results.length === 0 && query.trim().length > 0 && (
            <div className="absolute z-10 mt-2 w-full rounded-xl border border-gray-200 bg-white shadow-lg py-4 px-4 text-center text-gray-500">
              No professions found for "{query}". Try a different search.
            </div>
          )}
        </div>

        {/* Quick links */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <span className="text-sm text-gray-500">Popular:</span>
          {professions.slice(0, 5).map((p) => (
            <Link
              key={p.id}
              to="/professions/$slug"
              params={{ slug: p.slug }}
              className="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-700 shadow-sm transition-all hover:border-indigo-300 hover:text-indigo-600 hover:shadow-md"
            >
              {p.iconEmoji} {p.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── How It Works ──────────────────────────────────────────────────────────

function HowItWorks() {
  const steps = [
    {
      icon: "🔍",
      title: "Choose a profession",
      desc: "Browse our growing library of careers — from astronaut to zoologist — and see what the path really looks like.",
    },
    {
      icon: "📋",
      title: "Follow the roadmap",
      desc: "Grade-by-grade guidance: which subjects to take, which extracurriculars to pursue, and which programs to join — with direct links.",
    },
    {
      icon: "🏫",
      title: "Find the right schools",
      desc: "Discover the schools and programs that produce the best outcomes for each career path.",
    },
    {
      icon: "🌟",
      title: "Learn from real pros",
      desc: "Spotlight interviews with professionals who've walked the path — see the actual steps they took to succeed.",
    },
  ];

  return (
    <section className="bg-white px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
          How it works
        </h2>
        <p className="mt-3 text-center text-lg text-gray-500">
          Four steps to a clearer future for your child
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-gray-100 bg-gray-50/50 p-6 text-center transition-all hover:border-indigo-200 hover:bg-white hover:shadow-lg"
            >
              <span className="text-4xl">{s.icon}</span>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Featured Professions ──────────────────────────────────────────────────

function FeaturedProfessions({ professions }: { professions: Profession[] }) {
  return (
    <section className="bg-gray-50 px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Explore professions
            </h2>
            <p className="mt-2 text-gray-500">
              Detailed roadmaps for the careers kids dream about
            </p>
          </div>
          <Link
            to="/professions"
            className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-800 sm:inline"
          >
            View all →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {professions.map((p) => (
            <Link
              key={p.id}
              to="/professions/$slug"
              params={{ slug: p.slug }}
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
        <div className="mt-8 text-center sm:hidden">
          <Link
            to="/professions"
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-800"
          >
            View all professions →
          </Link>
        </div>
      </div>
    </section>
  );
}

// ── Featured Spotlights ───────────────────────────────────────────────────

function FeaturedSpotlights({ professionals }: { professionals: Professional[] }) {
  return (
    <section className="bg-white px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Real career paths
            </h2>
            <p className="mt-2 text-gray-500">
              See the actual steps successful professionals took
            </p>
          </div>
          <Link
            to="/spotlights"
            className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-800 sm:inline"
          >
            All spotlights →
          </Link>
        </div>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {professionals.map((pro) => (
            <div
              key={pro.id}
              className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden"
            >
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-6 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-3xl font-bold text-white">
                  {pro.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
                  {pro.professionName}
                </div>
                <h3 className="mt-1 text-lg font-semibold text-gray-900">
                  {pro.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{pro.title}</p>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-gray-600">
                  {pro.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center sm:hidden">
          <Link
            to="/spotlights"
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-800"
          >
            All spotlights →
          </Link>
        </div>
      </div>
    </section>
  );
}

// ── CTA ───────────────────────────────────────────────────────────────────

function CTASection() {
  return (
    <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Ready to plan your child's future?
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-indigo-100">
          Start exploring career roadmaps today. Free preview available — unlock
          full access for just $5/month.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            to="/professions"
            className="inline-flex items-center rounded-full bg-white px-8 py-3 text-base font-semibold text-indigo-700 shadow-lg transition-all hover:bg-indigo-50 hover:shadow-xl"
          >
            Explore professions →
          </Link>
          <span className="text-sm text-indigo-200">
            No account needed to preview
          </span>
        </div>
      </div>
    </section>
  );
}
