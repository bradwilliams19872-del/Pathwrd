import { createFileRoute, Link } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import {
  getProfessionBySlug,
  getRoadmap,
  getSchoolsByProfession,
  getProfessionSpotlights,
} from "~/lib/mock-data";

const getProfessionDetail = createServerFn({ method: "GET" }).handler(
  async ({ data }: { data: string }) => {
    const profession = getProfessionBySlug(data);
    if (!profession) return null;
    const roadmap = getRoadmap(profession.id);
    const schools = getSchoolsByProfession(profession.id);
    const spotlights = getProfessionSpotlights(profession.id);
    return { profession, roadmap, schools, spotlights };
  },
);

export const Route = createFileRoute("/professions/$slug")({
  loader: ({ params }) => getProfessionDetail({ data: params.slug }),
  component: ProfessionDetail,
});

function ProfessionDetail() {
  const data = Route.useLoaderData();
  if (!data) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
        <span className="text-6xl">🔍</span>
        <h1 className="mt-4 text-3xl font-bold text-gray-900">
          Profession not found
        </h1>
        <p className="mt-2 text-gray-500">
          We could not find that career path. Try browsing all professions.
        </p>
        <Link
          to="/professions"
          className="mt-6 inline-block text-indigo-600 underline hover:text-indigo-800"
        >
          Browse professions →
        </Link>
      </main>
    );
  }

  const { profession, roadmap, schools, spotlights } = data;

  return (
    <main>
      <section className="bg-gradient-to-br from-indigo-50 via-white to-amber-50 px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl">
          <Link
            to="/professions"
            className="mb-4 inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-800"
          >
            ← All professions
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-5xl sm:text-6xl">{profession.iconEmoji}</span>
            <div>
              <span className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700 mb-2">
                {profession.category}
              </span>
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                {profession.name}
              </h1>
            </div>
          </div>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
            {profession.description}
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Educational Roadmap</h2>
            {roadmap.length > 0 && (
              <Link
                to="/professions/$slug/roadmap"
                params={{ slug: profession.slug }}
                search={{ grade: roadmap[0].gradeShortCode }}
                className="text-sm font-semibold text-indigo-600 hover:text-indigo-800"
              >
                View full roadmap →
              </Link>
            )}
          </div>
          <p className="mt-2 text-gray-500">
            What your child needs at each stage — Pre-K through PhD
          </p>

          {roadmap.length === 0 ? (
            <p className="mt-8 text-center text-gray-500">
              Roadmap coming soon. Check back for detailed grade-by-grade guidance.
            </p>
          ) : (
            <div className="mt-6 space-y-4">
              {roadmap.slice(0, 4).map((step) => (
                <Link
                  key={step.id}
                  to="/professions/$slug/roadmap"
                  params={{ slug: profession.slug }}
                  search={{ grade: step.gradeShortCode }}
                  className="block rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:border-indigo-200 hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700">
                      {step.gradeShortCode.toUpperCase()}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-gray-900">
                        {step.gradeName}
                      </h3>
                      <p className="mt-1 line-clamp-2 text-sm text-gray-500">
                        {step.description}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {step.subjects.slice(0, 4).map((s, i) => (
                          <span
                            key={i}
                            className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600"
                          >
                            {s}
                          </span>
                        ))}
                        {step.subjects.length > 4 && (
                          <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-400">
                            +{step.subjects.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {schools.length > 0 && (
        <section className="bg-gray-50 px-4 py-12 sm:py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-900">
              Top Schools for {profession.name}s
            </h2>
            <p className="mt-2 text-gray-500">
              Recommended programs and institutions for this career path
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {schools.slice(0, 4).map(({ school, programName }) => (
                <div
                  key={school.id}
                  className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                >
                  <h3 className="font-semibold text-gray-900">{school.name}</h3>
                  <p className="text-sm text-indigo-600">{programName}</p>
                  <div className="mt-2 flex items-center gap-3 text-xs text-gray-500">
                    <span>{school.state}</span>
                    <span>·</span>
                    <span className="capitalize">{school.type}</span>
                    <span>·</span>
                    <span>{school.rankingInfo}</span>
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/schools"
              className="mt-4 inline-block text-sm font-semibold text-indigo-600 hover:text-indigo-800"
            >
              Find more schools →
            </Link>
          </div>
        </section>
      )}

      {spotlights.length > 0 && (
        <section className="bg-white px-4 py-12 sm:py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-900">
              {profession.name} Spotlights
            </h2>
            <p className="mt-2 text-gray-500">
              Real career paths from successful {profession.name.toLowerCase()}s
            </p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {spotlights.map((pro) => (
                <div
                  key={pro.id}
                  className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-4 text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-xl font-bold text-white">
                      {pro.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-gray-900">{pro.name}</h3>
                    <p className="text-sm text-gray-500">{pro.title}</p>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-600">
                      {pro.bio}
                    </p>
                    <p className="mt-3 text-xs font-medium text-indigo-600">
                      Path: {pro.pathBackground.substring(0, 120)}...
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/spotlights"
              className="mt-4 inline-block text-sm font-semibold text-indigo-600 hover:text-indigo-800"
            >
              All spotlights →
            </Link>
          </div>
        </section>
      )}
    </main>
  );
}
