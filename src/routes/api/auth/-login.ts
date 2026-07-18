import { createServerFn } from "@tanstack/react-start";
import bcrypt from "bcryptjs";
import { sql } from "~/db";
import { createSession } from "~/lib/auth";

export const login = createServerFn({ method: "POST" })
  .validator((data: unknown) => {
    if (!data || typeof data !== "object") {
      throw new Error("Invalid request body");
    }
    const { email, password } = data as Record<string, unknown>;

    if (typeof email !== "string" || !email.includes("@")) {
      throw new Error("A valid email is required");
    }
    if (typeof password !== "string" || password.length === 0) {
      throw new Error("Password is required");
    }

    return {
      email: email.trim().toLowerCase(),
      password: password,
    };
  })
  .handler(async ({ data }) => {
    const { email, password } = data;
    const queryFn = sql();

    // Find user
    const rows = await queryFn`
      SELECT id, password_hash FROM users WHERE email = ${email}
    `;
    if (rows.length === 0) {
      throw new Error("Invalid email or password");
    }

    const user = rows[0];
    const valid = await bcrypt.compare(password, String(user.password_hash));
    if (!valid) {
      throw new Error("Invalid email or password");
    }

    // Create session (sets cookie)
    await createSession(String(user.id));

    return { success: true };
  });
