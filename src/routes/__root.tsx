import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import type { ReactNode } from "react";
import { createServerFn } from "@tanstack/react-start";
import { getCurrentUser } from "~/lib/auth";
import type { AuthUser } from "~/lib/auth";

import appCss from "~/styles/app.css?url";

const getRootUser = createServerFn({ method: "GET" }).handler(async () => {
  const user = await getCurrentUser();
  return user;
});

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Pathwrd — Your Child's Future, Year by Year" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  notFoundComponent: () => (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-4 text-center">
      <span className="text-6xl">🔍</span>
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="text-gray-500">The page you're looking for doesn't exist.</p>
      <Link to="/" className="text-indigo-600 underline hover:text-indigo-800">
        Go home
      </Link>
    </div>
  ),
  loader: () => getRootUser(),
  component: RootComponent,
});

function RootComponent() {
  const user = Route.useLoaderData();
  return (
    <RootDocument>
      <NavBar user={user} />
      <Outlet />
      <Footer />
    </RootDocument>
  );
}

function NavBar({ user }: { user: AuthUser | null }) {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold text-gray-900 hover:text-indigo-600 transition-colors"
        >
          <span className="text-2xl">🧭</span>
          <span className="hidden sm:inline">Pathwrd</span>
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          <NavLink to="/professions">Professions</NavLink>
          <NavLink to="/spotlights">Spotlights</NavLink>
          <NavLink to="/schools">Schools</NavLink>
          {user ? (
            <div className="ml-2 flex items-center gap-3">
              <span className="text-sm text-gray-600">
                {user.name || user.email}
              </span>
              <Link
                to="/"
                className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors"
              >
                Account
              </Link>
            </div>
          ) : (
            <div className="ml-2 flex items-center gap-2">
              <Link
                to="/login"
                className="rounded-full px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-colors"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

function NavLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
      activeProps={{ className: "text-indigo-600 bg-indigo-50" }}
    >
      {children}
    </Link>
  );
}

function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-100 bg-gray-50 py-8">
      <div className="mx-auto max-w-6xl px-4 text-center text-sm text-gray-500 sm:px-6">
        <p className="mb-1">
          <span className="font-semibold text-gray-700">Pathwrd</span> —{" "}
          Helping parents guide their children's futures, one year at a time.
        </p>
        <p>
          Built with{" "}
          <a
            href="https://cto.new"
            className="underline hover:text-gray-700"
          >
            cto.new
          </a>
        </p>
      </div>
    </footer>
  );
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="flex min-h-dvh flex-col bg-white text-gray-900 antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  );
}
