import { createFileRoute, Link } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { useState, useMemo } from "react";
import {
  getAllTutors,
  getAllProfessions,
  searchTutors,
  getTutorsByProfession,
} from "~/lib/mock-data";

const getTutorsData = createServerFn({ method: "GET" }).handler(async () => {
  return {
    tutors: getAllTutors(),
    professions: getAllProfessions(),
  };
});

export const Route = createFileRoute("/tutors/")({
  loader: () => getTutorsData(),
  component: TutorsIndexPage,
});

function TutorsIndexPage() {
  const data = Route.useLoaderData();
  if (!data) return null;

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProfession, setSelectedProfession] = useState("");

  const filtered = useMemo(() => {
    let results = data.tutors;

    if (searchQuery.trim()) {
      results = searchTutors(searchQuery.trim());
    }

    if (selectedProfession) {
      const profTutors = getTutorsByProfession(selectedProfession);
      const profIds = new Set(profTutors.map((t) => t.id));
      if (searchQuery.trim()) {
        results = results.filter((t) => profIds.has(t.id));
      } else {
        results = profTutors;
      }
    }

    return results;
  }, [data.tutors, searchQuery, selectedProfession]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Find a Tutor
        </h1>
        <p className="mt-3 text-lg text-gray-500">
          Connect with expert tutors who can guide your child's learning journey
        </p>
      </div>

      {/* AI Tutor Card */}
      <div className="mt-8">
        <Link
          to="/tutors/ai"
          className="block rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all group"
        >
          <div className="flex items-center gap-5">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/20 text-3xl backdrop-blur-sm">
              🤖
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-bold text-white group-hover:underline">
                  AI Tutor
                </h3>
                <span className="rounded-full bg-white/25 px-2.5 py-0.5 text-xs font-bold text-white backdrop-blur-sm">
                  NEW
                </span>
              </div>
              <p className="mt-1 text-base text-purple-100">
                Get instant, personalized tutoring for any subject on your roadmap
              </p>
              <p className="mt-2 text-sm text-purple-200/80">
                Available 24/7 • Adapts to your child's grade level • Covers all professions
              </p>
            </div>
            <div className="shrink-0 hidden sm:block">
              <span className="inline-flex items-center gap-1 rounded-xl bg-white/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                Try AI Tutor <span className="text-lg">→</span>
              </span>
            </div>
          </div>
        </Link>
      </div>

      {/* Search & Filter */}
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-center">
        <div className="flex-1 max-w-md">
          <label
            htmlFor="tutor-search"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Search
          </label>
          <input
            id="tutor-search"
            type="text"
            placeholder="Search by name, subject, or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none placeholder:text-gray-400"
          />
        </div>
        <div>
          <label
            htmlFor="profession-filter"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Career Path
          </label>
          <select
            id="profession-filter"
            value={selectedProfession}
            onChange={(e) => setSelectedProfession(e.target.value)}
            className="rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
          >
            <option value="">All professions</option>
            {data.professions.map((p) => (
              <option key={p.id} value={p.id}>
                {p.iconEmoji} {p.name}
              </option>
            ))}
          </select>
        </div>
        {(searchQuery || selectedProfession) && (
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedProfession("");
            }}
            className="rounded-xl px-4 py-2.5 text-sm font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Results */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((tutor) => (
          <Link
            key={tutor.id}
            to="/tutors/$tutorId"
            params={{ tutorId: tutor.id }}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all group"
          >
            {/* Avatar + Name */}
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xl font-bold text-indigo-600">
                {tutor.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {tutor.name}
                </h3>
                <p className="text-sm text-gray-500">{tutor.title}</p>
              </div>
            </div>

            {/* Subjects */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {tutor.subjects.slice(0, 3).map((s, i) => (
                <span
                  key={i}
                  className="rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-700"
                >
                  {s}
                </span>
              ))}
              {tutor.subjects.length > 3 && (
                <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-500">
                  +{tutor.subjects.length - 3} more
                </span>
              )}
            </div>

            {/* Rate & Rating */}
            <div className="mt-4 flex items-center justify-between">
              <span className="text-lg font-bold text-gray-900">
                ${tutor.hourlyRate}
                <span className="text-sm font-normal text-gray-500">/hr</span>
              </span>
              <span className="flex items-center gap-1 text-sm font-medium text-amber-600">
                <span>⭐</span> {tutor.rating}
              </span>
            </div>

            {/* Bio preview */}
            <p className="mt-3 line-clamp-2 text-sm text-gray-500">
              {tutor.bio}
            </p>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-12 text-center text-gray-500">
          <span className="text-4xl">🔍</span>
          <p className="mt-2">
            No tutors found matching your search. Try different keywords.
          </p>
        </div>
      )}
    </main>
  );
}
