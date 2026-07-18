import { createServerFn } from "@tanstack/react-start";
import bcrypt from "bcryptjs";
import { sql } from "~/db";
import { createSession } from "~/lib/auth";

export const signup = createServerFn({ method: "POST" })
  .validator((data: unknown) => {
    if (!data || typeof data !== "object") {
      throw new Error("Invalid request body");
    }
    const { email, password, name } = data as Record<string, unknown>;

    if (typeof email !== "string" || !email.includes("@")) {
      throw new Error("A valid email is required");
    }
    if (typeof password !== "string" || password.length < 6) {
      throw new Error("Password must be at least 6 characters");
    }
    const safeName =
      typeof name === "string" && name.trim().length > 0
        ? name.trim().slice(0, 100)
        : undefined;

    return {
      email: email.trim().toLowerCase(),
      password: password,
      name: safeName,
    };
  })
  .handler(async ({ data }) => {
    const { email, password, name } = data;
    const queryFn = sql();

    // Check if user already exists
    const existing = await queryFn`
      SELECT id FROM users WHERE email = ${email}
    `;
    if (existing.length > 0) {
      throw new Error("An account with this email already exists");
    }

    // Hash password (bcryptjs uses 10 rounds by default)
    const passwordHash = await bcrypt.hash(password, 10);

    // Insert user
    const result = await queryFn`
      INSERT INTO users (email, password_hash, name)
      VALUES (${email}, ${passwordHash}, ${name ?? null})
      RETURNING id
    `;
    const userId = String(result[0].id);

    // Create session (sets cookie)
    await createSession(userId);

    return { success: true };
  });
