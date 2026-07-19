import { createFileRoute, Link } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { getTutorById, getAllTutors } from "~/lib/mock-data";

const getTutorData = createServerFn({ method: "GET" }).handler(
  async ({ data }: { data: { tutorId: string } }) => {
    const tutor = getTutorById(data.tutorId);
    if (!tutor) return null;
    const allTutors = getAllTutors();
    const relatedTutors = allTutors
      .filter(
        (t) =>
          t.id !== tutor.id &&
          t.professionIds.some((pid) => tutor.professionIds.includes(pid)),
      )
      .slice(0, 3);
    return { tutor, relatedTutors };
  },
);

export const Route = createFileRoute("/tutors/$tutorId")({
  loader: ({ params }) => getTutorData({ data: { tutorId: params.tutorId } }),
  component: TutorProfilePage,
});

function TutorProfilePage() {
  const data = Route.useLoaderData();

  if (!data) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
        <h1 className="text-3xl font-bold">Tutor not found</h1>
        <Link
          to="/tutors"
          className="text-indigo-600 underline mt-4 inline-block"
        >
          Browse all tutors →
        </Link>
      </main>
    );
  }

  const { tutor, relatedTutors } = data;

  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <div className="mb-6 flex items-center gap-2 text-sm text-gray-500">
        <Link to="/tutors" className="hover:text-indigo-600">
          Tutors
        </Link>
        <span>/</span>
        <span className="text-gray-900 font-medium">{tutor.name}</span>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-3xl font-bold text-indigo-600">
            {tutor.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)}
          </div>

          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900">{tutor.name}</h1>
            <p className="text-base text-gray-500">{tutor.title}</p>

            <div className="mt-3 flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-sm font-medium text-amber-700">
                ⭐ {tutor.rating} / 5.0
              </span>
              <span className="text-xl font-bold text-gray-900">
                ${tutor.hourlyRate}
                <span className="text-sm font-normal text-gray-500">/hr</span>
              </span>
            </div>

            <p className="mt-4 text-base leading-relaxed text-gray-700">
              {tutor.bio}
            </p>

            <div className="mt-6">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                Subjects
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {tutor.subjects.map((s, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-indigo-50 px-3 py-1.5 text-sm font-medium text-indigo-700"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                Availability
              </h3>
              <p className="mt-2 text-sm text-gray-600">{tutor.availability}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center border-t border-gray-100 pt-6">
          <button className="rounded-full bg-indigo-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-indigo-700 active:scale-95">
            📧 Contact {tutor.name.split(" ")[0]}
          </button>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900">Reviews</h2>
        <div className="mt-6 space-y-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-100 bg-gray-50 p-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-sm font-bold text-gray-500">
                  {String.fromCharCode(64 + i)}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Parent {i}
                  </p>
                  <p className="text-xs text-amber-600">
                    {"⭐".repeat(5 - i)}
                    {i === 1 ? "⭐⭐⭐⭐" : i === 2 ? "⭐⭐⭐" : "⭐⭐"}
                  </p>
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                {i === 1
                  ? `${tutor.name.split(" ")[0]} has been an incredible tutor for my daughter. Her grades in math went from C to A in just one semester!`
                  : i === 2
                    ? `Very knowledgeable and patient. My son looks forward to his sessions every week. Highly recommended.`
                    : `Great tutor who really knows how to explain complex topics in simple terms. Worth every penny.`}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-sm text-gray-400">
          Reviews are coming soon — this is a preview.
        </p>
      </div>

      {relatedTutors.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-900">
            Similar Tutors You Might Like
          </h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedTutors.map((rt) => (
              <Link
                key={rt.id}
                to="/tutors/$tutorId"
                params={{ tutorId: rt.id }}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-600">
                    {rt.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {rt.name}
                    </h3>
                    <p className="text-xs text-gray-500">{rt.title}</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm font-bold text-gray-900">
                    ${rt.hourlyRate}/hr
                  </span>
                  <span className="text-xs font-medium text-amber-600">
                    ⭐ {rt.rating}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
