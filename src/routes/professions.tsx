import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/professions")({
  component: ProfessionsLayout,
});

function ProfessionsLayout() {
  return <Outlet />;
}
