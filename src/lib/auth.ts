import { getCookie, setCookie, deleteCookie } from "@tanstack/react-start/server";
import { redirect } from "@tanstack/react-router";
import { sql } from "~/db";

export interface AuthUser {
  id: string;
  email: string;
  name: string | null;
  subscriptionStatus: string;
  createdAt: string;
}

const SESSION_COOKIE = "pathwrd_session";
const SESSION_MAX_AGE = 7 * 24 * 60 * 60; // 7 days in seconds

function generateToken(): string {
  // crypto.randomUUID() + a few extra random bytes for 256-bit strength
  const bytes = new Uint8Array(32);
  crypto.getRandomValues(bytes);
  const hex = Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
  return hex;
}

/**
 * Read the session cookie and return the authenticated user, or null.
 * Only callable from server contexts (loaders, server functions).
 */
export async function getCurrentUser(): Promise<AuthUser | null> {
  try {
    const token = getCookie(SESSION_COOKIE);
    if (!token) return null;

    const queryFn = sql();
    const rows = await queryFn`
      SELECT u.id, u.email, u.name, u.subscription_status, u.created_at
      FROM sessions s
      JOIN users u ON u.id = s.user_id
      WHERE s.token = ${token}
        AND s.expires_at > now()
    `;

    if (rows.length === 0) return null;

    const user = rows[0];
    return {
      id: String(user.id),
      email: String(user.email),
      name: user.name ? String(user.name) : null,
      subscriptionStatus: String(user.subscription_status),
      createdAt: String(user.created_at),
    };
  } catch {
    // If DB isn't connected yet, gracefully return null
    return null;
  }
}

/**
 * Create a session for the given user, set the httpOnly cookie,
 * and return the session token. Only callable from server contexts.
 */
export async function createSession(userId: string): Promise<string> {
  const token = generateToken();
  const queryFn = sql();

  await queryFn`
    INSERT INTO sessions (token, user_id)
    VALUES (${token}, ${userId})
  `;

  setCookie(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  });

  return token;
}

/**
 * Delete the current session (logout).
 * Only callable from server contexts.
 */
export async function destroySession(): Promise<void> {
  const token = getCookie(SESSION_COOKIE);
  if (token) {
    try {
      const queryFn = sql();
      await queryFn`DELETE FROM sessions WHERE token = ${token}`;
    } catch {
      // Best-effort cleanup
    }
  }
  deleteCookie(SESSION_COOKIE, { path: "/" });
}

/**
 * Get the current user or redirect to /login.
 * Use in loaders or beforeLoad to protect routes.
 */
export async function requireUser(): Promise<AuthUser> {
  const user = await getCurrentUser();
  if (!user) {
    throw redirect({ to: "/login" });
  }
  return user;
}
