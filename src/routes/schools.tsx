import { createFileRoute, Link } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { useState, useMemo } from "react";
import {
  getAllSchools,
  getAllProfessions,
  getSchoolsByProfession,
  getSchoolStates,
} from "~/lib/mock-data";

const getSchoolsData = createServerFn({ method: "GET" }).handler(async () => {
  return {
    schools: getAllSchools(),
    professions: getAllProfessions(),
    states: getSchoolStates(),
  };
});

export const Route = createFileRoute("/schools")({
  loader: () => getSchoolsData(),
  component: SchoolsPage,
});

function SchoolsPage() {
  const data = Route.useLoaderData();
  if (!data) return null;

  const [selectedState, setSelectedState] = useState("");
  const [selectedProfession, setSelectedProfession] = useState("");

  const filtered = useMemo(() => {
    let results = data.schools;

    if (selectedState) {
      results = results.filter(
        (s) => s.state.toLowerCase() === selectedState.toLowerCase(),
      );
    }

    if (selectedProfession) {
      const psSchools = getSchoolsByProfession(selectedProfession);
      const psIds = new Set(psSchools.map((ps) => ps.school.id));
      results = results.filter((s) => psIds.has(s.id));
    }

    return results;
  }, [data.schools, selectedState, selectedProfession]);

  const getProgramName = (schoolId: string) => {
    if (!selectedProfession) return null;
    const ps = getSchoolsByProfession(selectedProfession);
    const match = ps.find((p) => p.school.id === schoolId);
    return match?.programName;
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          School Finder
        </h1>
        <p className="mt-3 text-lg text-gray-500">
          Discover the best schools and programs for every career path
        </p>
      </div>

      {/* Filters */}
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-center">
        {/* State filter */}
        <div>
          <label
            htmlFor="state-filter"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            State
          </label>
          <select
            id="state-filter"
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
          >
            <option value="">All states</option>
            {data.states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        {/* Profession filter */}
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

        {/* Clear */}
        {(selectedState || selectedProfession) && (
          <button
            onClick={() => {
              setSelectedState("");
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
        {filtered.map((school) => {
          const programName = getProgramName(school.id);
          return (
            <div
              key={school.id}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {school.name}
                  </h3>
                  {programName && (
                    <p className="text-sm font-medium text-indigo-600 mt-0.5">
                      {programName}
                    </p>
                  )}
                </div>
                <span
                  className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${
                    school.type === "public"
                      ? "bg-green-50 text-green-700"
                      : "bg-purple-50 text-purple-700"
                  }`}
                >
                  {school.type}
                </span>
              </div>

              <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
                <span>📍 {school.state}</span>
                {school.rankingInfo && (
                  <>
                    <span>·</span>
                    <span>🏅 {school.rankingInfo}</span>
                  </>
                )}
              </div>

              <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-gray-600">
                {school.description}
              </p>

              {school.websiteUrl && (
                <a
                  href={school.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-800"
                >
                  Visit website →
                </a>
              )}
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="mt-12 text-center text-gray-500">
          <span className="text-4xl">🏫</span>
          <p className="mt-2">
            No schools match your filters. Try broadening your search.
          </p>
        </div>
      )}

      {/* Coming soon */}
      <div className="mt-12 rounded-2xl border border-gray-200 bg-gray-50 p-8 text-center">
        <span className="text-3xl">🔜</span>
        <h2 className="mt-3 text-lg font-semibold text-gray-900">
          More schools coming soon
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          We're adding comprehensive school data across all 50 states. Subscribe
          for early access to our full school matching engine.
        </p>
      </div>
    </main>
  );
}
