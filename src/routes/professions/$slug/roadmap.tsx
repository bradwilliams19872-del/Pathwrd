import { createFileRoute, Link } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { useState } from "react";
import {
  getProfessionBySlug,
  getRoadmap,
  getRoadmapStep,
  getAllGradeLevels,
  getFirstAvailableGrade,
  getSchoolsByProfession,
  getCheckpointsByProfession,
  getCheckpointForGrade,
  getBadgesByProfession,
  getBadgeById,
  getQuizQuestionsByCheckpoint,
} from "~/lib/mock-data";
import type { Checkpoint, Badge, QuizQuestion } from "~/lib/mock-data";

const getRoadmapData = createServerFn({ method: "GET" }).handler(
  async ({ data }: { data: { slug: string; grade?: string } }) => {
    const profession = getProfessionBySlug(data.slug);
    if (!profession) return null;
    const allSteps = getRoadmap(profession.id);
    const gradeLevels = getAllGradeLevels();
    const activeGrade = data.grade || getFirstAvailableGrade(profession.id) || "k";
    const activeStep = getRoadmapStep(profession.id, activeGrade);
    const topSchools = getSchoolsByProfession(profession.id).slice(0, 3);
    const checkpoints = getCheckpointsByProfession(profession.id);
    const activeCheckpoint = getCheckpointForGrade(profession.id, gradeLevels.find(g => g.shortCode === activeGrade)?.id ?? "");
    const badges = getBadgesByProfession(profession.id);
    return { profession, allSteps, gradeLevels, activeGrade, activeStep, topSchools, checkpoints, activeCheckpoint, badges };
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

function QuizModal({ checkpoint, questions, onClose }: { checkpoint: Checkpoint; questions: QuizQuestion[]; onClose: () => void }) {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  if (questions.length === 0) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={onClose}>
        <div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-xl" onClick={e => e.stopPropagation()}>
          <p className="text-center text-gray-500">No quiz questions available yet for this checkpoint.</p>
          <button onClick={onClose} className="mt-4 w-full rounded-xl bg-indigo-600 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700">Close</button>
        </div>
      </div>
    );
  }

  const q = questions[currentQ];

  function handleAnswer(idx: number) {
    setSelected(idx);
    setShowResult(true);
    if (idx === q.correctIndex) setScore(s => s + 1);
  }

  function handleNext() {
    if (currentQ < questions.length - 1) {
      setCurrentQ(c => c + 1);
      setSelected(null);
      setShowResult(false);
    } else {
      setFinished(true);
    }
  }

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={onClose}>
        <div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-xl text-center" onClick={e => e.stopPropagation()}>
          <span className="text-5xl">{pct >= 80 ? "🎉" : pct >= 50 ? "👍" : "📚"}</span>
          <h2 className="mt-4 text-2xl font-bold text-gray-900">Quiz Complete!</h2>
          <p className="mt-2 text-lg text-gray-600">You scored {score} out of {questions.length} ({pct}%)</p>
          <p className="mt-1 text-sm text-gray-500">{checkpoint.name} checkpoint</p>
          <button onClick={onClose} className="mt-6 w-full rounded-xl bg-indigo-600 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700">Close</button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-xl" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-indigo-600">Question {currentQ + 1} of {questions.length}</span>
          <span className="text-sm text-gray-400">Score: {score}/{currentQ + (showResult ? 1 : 0)}</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{q.question}</h3>
        <div className="space-y-2">
          {q.options.map((opt, i) => {
            let btnStyle = "border-gray-200 bg-white hover:bg-gray-50 text-gray-700";
            if (showResult) {
              if (i === q.correctIndex) {
                btnStyle = "border-green-300 bg-green-50 text-green-800";
              } else if (i === selected) {
                btnStyle = "border-red-300 bg-red-50 text-red-800";
              } else {
                btnStyle = "border-gray-100 bg-gray-50 text-gray-400";
              }
            }
            return (
              <button
                key={i}
                disabled={showResult}
                onClick={() => handleAnswer(i)}
                className={`w-full rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors ${btnStyle}`}
              >
                {String.fromCharCode(65 + i)}. {opt}
              </button>
            );
          })}
        </div>
        {showResult && (
          <div className={`mt-4 rounded-xl p-4 ${selected === q.correctIndex ? "bg-green-50" : "bg-amber-50"}`}>
            <p className="text-sm font-medium text-gray-900">
              {selected === q.correctIndex ? "✅ Correct!" : "❌ Incorrect"}
            </p>
            <p className="mt-1 text-sm text-gray-600">{q.explanation}</p>
          </div>
        )}
        {showResult && (
          <button onClick={handleNext} className="mt-4 w-full rounded-xl bg-indigo-600 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700">
            {currentQ < questions.length - 1 ? "Next Question →" : "See Results"}
          </button>
        )}
      </div>
    </div>
  );
}

function BadgeCard({ badge, earned }: { badge: Badge; earned: boolean }) {
  const tierColors: Record<string, string> = {
    bronze: "border-amber-400 bg-amber-50",
    silver: "border-gray-300 bg-gray-50",
    gold: "border-yellow-400 bg-yellow-50",
    platinum: "border-indigo-300 bg-indigo-50",
  };
  const tierText: Record<string, string> = {
    bronze: "text-amber-700",
    silver: "text-gray-700",
    gold: "text-yellow-700",
    platinum: "text-indigo-700",
  };

  return (
    <div className={`rounded-xl border-2 p-4 text-center transition-all ${earned ? tierColors[badge.tier] : "border-gray-200 bg-gray-100 opacity-50"}`}>
      <span className={`text-3xl ${earned ? "" : "grayscale"}`}>{badge.iconEmoji}</span>
      <h4 className={`mt-2 text-sm font-bold ${earned ? "text-gray-900" : "text-gray-400"}`}>{badge.name}</h4>
      <p className={`mt-1 text-xs ${earned ? tierText[badge.tier] || "text-gray-600" : "text-gray-400"}`}>
        {earned ? badge.tier.toUpperCase() : "LOCKED"}
      </p>
      <p className="mt-1 text-xs text-gray-500">{badge.description}</p>
    </div>
  );
}

function RoadmapPage() {
  const data = Route.useLoaderData();
  const navigate = Route.useNavigate();
  const [quizCheckpoint, setQuizCheckpoint] = useState<Checkpoint | null>(null);

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

  const { profession, allSteps, gradeLevels, activeGrade, activeStep, topSchools, checkpoints, activeCheckpoint, badges } = data;
  const activeStepIndex = allSteps.findIndex((s) => s.gradeShortCode === activeGrade);
  const activeGradeIndex = gradeLevels.findIndex((g) => g.shortCode === activeGrade);

  const handleGradeChange = (newGrade: string) => {
    navigate({
      to: "/professions/$slug/roadmap",
      params: { slug: profession.slug },
      search: { grade: newGrade },
    });
  };

  const checkpointGradeIds = new Set(checkpoints.map(c => c.gradeLevelId));

  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      {/* Breadcrumb */}
      <div className="mb-6 flex items-center gap-2 text-sm text-gray-500">
        <Link to="/professions" className="hover:text-indigo-600">Professions</Link>
        <span>/</span>
        <Link to="/professions/$slug" params={{ slug: profession.slug }} className="hover:text-indigo-600">{profession.name}</Link>
        <span>/</span>
        <span className="text-gray-900 font-medium">Roadmap</span>
      </div>

      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <span className="text-4xl">{profession.iconEmoji}</span>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{profession.name} Roadmap</h1>
          <p className="text-gray-500">Grade-by-grade guide — Pre-K through PhD</p>
        </div>
      </div>

      {/* Grade selector with checkpoint markers */}
      <div className="mb-8 rounded-xl bg-gray-100 p-1">
        <div className="flex overflow-x-auto">
          {gradeLevels.map((gl) => {
            const hasStep = allSteps.some((s) => s.gradeShortCode === gl.shortCode);
            const isActive = gl.shortCode === activeGrade;
            const checkpoint = checkpoints.find(c => c.gradeLevelId === gl.id);
            const cpBadge = checkpoint ? getBadgeById(checkpoint.badgeId) : null;

            const tierColors: Record<string, string> = {
              bronze: "#d97706",
              silver: "#6b7280",
              gold: "#ca8a04",
              platinum: "#4f46e5",
            };

            return (
              <button
                key={gl.id}
                onClick={() => handleGradeChange(gl.shortCode)}
                className={`relative shrink-0 px-3 py-2 text-xs font-medium rounded-lg transition-colors mx-0.5 first:ml-0 last:mr-0 ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-sm"
                    : hasStep
                      ? "text-gray-600 hover:bg-white hover:text-gray-900"
                      : "text-gray-400 hover:bg-white/60 hover:text-gray-600 border border-dashed border-gray-300"
                }`}
                title={cpBadge ? `${gl.name} — ${checkpoint!.name} (${cpBadge.tier})` : hasStep ? gl.name : (gl.name + " — coming soon")}
              >
                {/* Checkpoint dot */}
                {checkpoint && cpBadge && (
                  <span
                    className="absolute -top-1 -right-1 flex h-2.5 w-2.5"
                    title={`${checkpoint.name} (${cpBadge.tier})`}
                  >
                    <span
                      className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                      style={{ backgroundColor: tierColors[cpBadge.tier] || "#6b7280" }}
                    />
                    <span
                      className="relative inline-flex rounded-full h-2.5 w-2.5"
                      style={{ backgroundColor: tierColors[cpBadge.tier] || "#6b7280" }}
                    />
                  </span>
                )}
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
          {/* Description card */}
          <div className="rounded-2xl border border-indigo-200 bg-indigo-50/40 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-lg font-bold text-white">
                {activeGrade === "prek" ? "PK" : activeGrade === "k" ? "K" : activeGrade === "ugrad" ? "UG" : activeGrade === "grad" ? "GR" : activeGrade === "phd" ? "PhD" : activeGrade.toUpperCase()}
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">{activeStep.gradeName}</h2>
                <p className="text-sm text-indigo-600">Step {activeStepIndex + 1} of {allSteps.length} in this roadmap</p>
              </div>
            </div>
            <p className="text-base leading-relaxed text-gray-700">{activeStep.description}</p>

            {/* Checkpoint banner */}
            {activeCheckpoint && (
              <div className="mt-4 rounded-xl bg-gradient-to-r from-indigo-100 to-purple-100 p-4 flex items-center gap-3">
                {(() => {
                  const b = getBadgeById(activeCheckpoint.badgeId);
                  return <span className="text-2xl">{b?.iconEmoji ?? "🏆"}</span>;
                })()}
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{activeCheckpoint.name}</p>
                  <p className="text-sm text-gray-600">{activeCheckpoint.description}</p>
                </div>
                <button
                  onClick={() => setQuizCheckpoint(activeCheckpoint)}
                  className="shrink-0 rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-indigo-700 transition-colors"
                >
                  Take Quiz
                </button>
              </div>
            )}
          </div>

          {/* Objectives */}
          {activeStep.objectives && activeStep.objectives.length > 0 && (
            <div className="rounded-2xl border border-green-200 bg-green-50/30 p-6 sm:p-8 shadow-sm">
              <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900">
                <span>🎯</span> Objectives
              </h3>
              <div className="mt-4 space-y-3">
                {activeStep.objectives.map((obj, i) => (
                  <label key={i} className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" className="mt-0.5 h-5 w-5 rounded border-gray-300 text-green-600 focus:ring-green-500" />
                    <span className="text-sm text-gray-700 group-hover:text-gray-900">{obj}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Subjects */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
            <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900">
              <span>📚</span> Recommended Subjects
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {activeStep.subjects.map((s, i) => (
                <span key={i} className="rounded-full bg-amber-50 border border-amber-200 px-3 py-1.5 text-sm font-medium text-amber-800">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Extracurriculars */}
          {activeStep.extracurriculars.length > 0 && (
            <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
              <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900">
                <span>🏆</span> Extracurricular Activities
              </h3>
              <div className="mt-4 space-y-4">
                {activeStep.extracurriculars.map((ec, i) => (
                  <div key={i} className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-semibold text-gray-900">{ec.name}</h4>
                      {ec.url && (
                        <a href={ec.url} target="_blank" rel="noopener noreferrer" className="shrink-0 text-xs font-medium text-indigo-600 hover:text-indigo-800">
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

          {/* Supplemental */}
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
                        {sup.type === "book" ? "📕" : sup.type === "course" ? "🎓" : sup.type === "video" ? "🎬" : sup.type === "program" ? "💻" : "📄"}
                      </span>
                      <div>
                        <span className="text-sm font-medium text-gray-900">{sup.name}</span>
                        <span className="ml-2 text-xs text-gray-400 capitalize">{sup.type}</span>
                      </div>
                    </div>
                    {sup.url && (
                      <a href={sup.url} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-indigo-600 hover:text-indigo-800">
                        Open →
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between">
            {activeGradeIndex > 0 ? (
              <button
                onClick={() => handleGradeChange(gradeLevels[activeGradeIndex - 1].shortCode)}
                className="flex items-center gap-1 rounded-lg bg-white border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                ← Previous: {gradeLevels[activeGradeIndex - 1].name}
              </button>
            ) : <div />}
            {activeGradeIndex < gradeLevels.length - 1 ? (
              <button
                onClick={() => handleGradeChange(gradeLevels[activeGradeIndex + 1].shortCode)}
                className="flex items-center gap-1 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-colors"
              >
                Next: {gradeLevels[activeGradeIndex + 1].name} →
              </button>
            ) : <div />}
          </div>
        </div>
      ) : (
        <div className="rounded-2xl border border-gray-200 bg-white p-12 text-center">
          <span className="text-5xl">📋</span>
          <h2 className="mt-4 text-xl font-semibold text-gray-900">Roadmap not yet available for this grade</h2>
          <p className="mt-2 text-gray-500">We are building out detailed guidance for every grade level. Check the highlighted grades above for available content.</p>
        </div>
      )}

      {/* Badges section */}
      {badges && badges.length > 0 && (
        <div className="mt-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">🏅</span>
            <h2 className="text-2xl font-bold text-gray-900">Badges</h2>
            <span className="text-sm text-gray-500">(all locked — earn by completing checkpoints)</span>
          </div>
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            {badges.map((badge) => (
              <BadgeCard key={badge.id} badge={badge} earned={false} />
            ))}
          </div>
        </div>
      )}

      {/* Top Schools */}
      {topSchools && topSchools.length > 0 && (
        <div className="mt-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">🏫</span>
            <h2 className="text-2xl font-bold text-gray-900">Top Schools for {profession.name}</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {topSchools.map(({ school, programName }) => (
              <div key={school.id} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-bold text-gray-900">{school.name}</h3>
                  <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${school.type === "public" ? "bg-green-50 text-green-700" : "bg-purple-50 text-purple-700"}`}>
                    {school.type}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-indigo-600">{programName}</p>
                <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
                  <span>📍 {school.state}</span>
                  {school.rankingInfo && <><span>·</span><span>🏅 {school.rankingInfo}</span></>}
                </div>
                <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-gray-600">{school.description}</p>
                {school.websiteUrl && (
                  <a href={school.websiteUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-800">
                    Visit website →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="mt-12 rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-700 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Want the full roadmap?</h2>
        <p className="mt-2 text-indigo-100">Subscribe for $5/month to unlock every grade level, all professions, and exclusive school matching.</p>
        <button className="mt-4 rounded-full bg-white px-8 py-3 text-base font-semibold text-indigo-700 shadow-lg transition-all hover:bg-indigo-50">Get full access →</button>
      </div>

      {/* Quiz Modal */}
      {quizCheckpoint && (
        <QuizModal
          checkpoint={quizCheckpoint}
          questions={getQuizQuestionsByCheckpoint(quizCheckpoint.id)}
          onClose={() => setQuizCheckpoint(null)}
        />
      )}
    </main>
  );
}
