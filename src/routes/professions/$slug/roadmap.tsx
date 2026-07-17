import { createFileRoute, Link } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import {
  getProfessionBySlug,
  getRoadmap,
  getRoadmapStep,
  getAllGradeLevels,
  getFirstAvailableGrade,
} from "~/lib/mock-data";

const getRoadmapData = createServerFn({ method: "GET" }).handler(
  async ({ data }: { data: { slug: string; grade?: string } }) => {
    const profession = getProfessionBySlug(data.slug);
    if (!profession) return null;
    const allSteps = getRoadmap(profession.id);
    const gradeLevels = getAllGradeLevels();
    const activeGrade = data.grade || getFirstAvailableGrade(profession.id) || "k";
    const activeStep = getRoadmapStep(profession.id, activeGrade);
    return { profession, allSteps, gradeLevels, activeGrade, activeStep };
  },
);

export const Route = createFileRoute("/professions/$slug/roadmap")({
  validateSearch: (
    search: Record<string, unknown>,
  ): { grade?: string } => {
    return { grade: typeof search.grade === "string" ? search.grade : undefined };
  },
  loaderDeps: ({ search }) => ({ grade: search.grade }),
  loader: ({ params, deps }) =>
    getRoadmapData({ data: { slug: params.slug, grade: deps.grade } }),
  component: RoadmapPage,
});

function RoadmapPage() {
  const data = Route.useLoaderData();
  const navigate = Route.useNavigate();

  if (!data) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
        <h1 className="text-3xl font-bold">Profession not found</h1>
        <Link to="/professions" className="text-indigo-600 underline mt-4 inline-block">
          Browse professions →
        </Link>
      </main>
    );
  }

  const { profession, allSteps, gradeLevels, activeGrade, activeStep } = data;
  const activeIndex = allSteps.findIndex((s) => s.gradeShortCode === activeGrade);

  const handleGradeChange = (newGrade: string) => {
    navigate({
      to: "/professions/$slug/roadmap",
      params: { slug: profession.slug },
      search: { grade: newGrade },
    });
  };

  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <div className="mb-6 flex items-center gap-2 text-sm text-gray-500">
        <Link to="/professions" className="hover:text-indigo-600">
          Professions
        </Link>
        <span>/</span>
        <Link
          to="/professions/$slug"
          params={{ slug: profession.slug }}
          className="hover:text-indigo-600"
        >
          {profession.name}
        </Link>
        <span>/</span>
        <span className="text-gray-900 font-medium">Roadmap</span>
      </div>

      <div className="flex items-center gap-4 mb-8">
        <span className="text-4xl">{profession.iconEmoji}</span>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {profession.name} Roadmap
          </h1>
          <p className="text-gray-500">Grade-by-grade guide — Pre-K through PhD</p>
        </div>
      </div>

      <div className="mb-8 rounded-xl bg-gray-100 p-1">
        <div className="flex overflow-x-auto">
          {gradeLevels.map((gl) => {
            const hasStep = allSteps.some((s) => s.gradeShortCode === gl.shortCode);
            const isActive = gl.shortCode === activeGrade;
            return (
              <button
                key={gl.id}
                onClick={() => hasStep && handleGradeChange(gl.shortCode)}
                disabled={!hasStep}
                className={`shrink-0 px-3 py-2 text-xs font-medium rounded-lg transition-colors mx-0.5 first:ml-0 last:mr-0 ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-sm"
                    : hasStep
                      ? "text-gray-600 hover:bg-white hover:text-gray-900"
                      : "text-gray-300 cursor-not-allowed"
                }`}
                title={hasStep ? gl.name : (gl.name + " — coming soon")}
              >
                {gl.shortCode === "prek"
                  ? "Pre-K"
                  : gl.shortCode === "k"
                    ? "K"
                    : gl.shortCode === "ugrad"
                      ? "UG"
                      : gl.shortCode === "grad"
                        ? "GR"
                        : gl.shortCode === "phd"
                          ? "PhD"
                          : gl.shortCode}
              </button>
            );
          })}
        </div>
      </div>

      {activeStep ? (
        <div className="space-y-8">
          <div className="rounded-2xl border border-indigo-200 bg-indigo-50/40 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-lg font-bold text-white">
                {activeGrade === "prek"
                  ? "PK"
                  : activeGrade === "k"
                    ? "K"
                    : activeGrade === "ugrad"
                      ? "UG"
                      : activeGrade === "grad"
                        ? "GR"
                        : activeGrade === "phd"
                          ? "PhD"
                          : activeGrade.toUpperCase()}
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  {activeStep.gradeName}
                </h2>
                <p className="text-sm text-indigo-600">
                  Step {activeIndex + 1} of {allSteps.length} in this roadmap
                </p>
              </div>
            </div>
            <p className="text-base leading-relaxed text-gray-700">
              {activeStep.description}
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
            <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900">
              <span>📚</span> Recommended Subjects
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {activeStep.subjects.map((s, i) => (
                <span
                  key={i}
                  className="rounded-full bg-amber-50 border border-amber-200 px-3 py-1.5 text-sm font-medium text-amber-800"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {activeStep.extracurriculars.length > 0 && (
            <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
              <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900">
                <span>🏆</span> Extracurricular Activities
              </h3>
              <div className="mt-4 space-y-4">
                {activeStep.extracurriculars.map((ec, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-gray-100 bg-gray-50 p-4"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-semibold text-gray-900">{ec.name}</h4>
                      {ec.url && (
                        <a
                          href={ec.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 text-xs font-medium text-indigo-600 hover:text-indigo-800"
                        >
                          Visit →
                        </a>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{ec.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeStep.supplemental.length > 0 && (
            <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
              <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900">
                <span>📖</span> Supplemental Materials
              </h3>
              <div className="mt-4 space-y-3">
                {activeStep.supplemental.map((sup, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-sm">
                        {sup.type === "book"
                          ? "📕"
                          : sup.type === "course"
                            ? "🎓"
                            : sup.type === "video"
                              ? "🎬"
                              : sup.type === "program"
                                ? "💻"
                                : "📄"}
                      </span>
                      <div>
                        <span className="text-sm font-medium text-gray-900">
                          {sup.name}
                        </span>
                        <span className="ml-2 text-xs text-gray-400 capitalize">
                          {sup.type}
                        </span>
                      </div>
                    </div>
                    {sup.url && (
                      <a
                        href={sup.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-indigo-600 hover:text-indigo-800"
                      >
                        Open →
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center justify-between pt-4">
            {activeIndex > 0 ? (
              <button
                onClick={() =>
                  handleGradeChange(allSteps[activeIndex - 1].gradeShortCode)
                }
                className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
              >
                ← Previous: {allSteps[activeIndex - 1].gradeName}
              </button>
            ) : (
              <div />
            )}
            {activeIndex < allSteps.length - 1 ? (
              <button
                onClick={() =>
                  handleGradeChange(allSteps[activeIndex + 1].gradeShortCode)
                }
                className="flex items-center gap-1 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-colors"
              >
                Next: {allSteps[activeIndex + 1].gradeName} →
              </button>
            ) : (
              <div />
            )}
          </div>
        </div>
      ) : (
        <div className="rounded-2xl border border-gray-200 bg-white p-12 text-center">
          <span className="text-5xl">📋</span>
          <h2 className="mt-4 text-xl font-semibold text-gray-900">
            Roadmap not yet available for this grade
          </h2>
          <p className="mt-2 text-gray-500">
            We are building out detailed guidance for every grade level. Check
            the highlighted grades above for available content.
          </p>
        </div>
      )}

      <div className="mt-12 rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-700 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Want the full roadmap?</h2>
        <p className="mt-2 text-indigo-100">
          Subscribe for $5/month to unlock every grade level, all professions,
          and exclusive school matching.
        </p>
        <button className="mt-4 rounded-full bg-white px-8 py-3 text-base font-semibold text-indigo-700 shadow-lg transition-all hover:bg-indigo-50">
          Get full access →
        </button>
      </div>
    </main>
  );
}
