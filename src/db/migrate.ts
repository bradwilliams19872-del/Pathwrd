import { sql } from "../db";
import { readFileSync } from "fs";
import { resolve } from "path";

const schemaPath = resolve(import.meta.dirname ?? __dirname, "schema.sql");
const schema = readFileSync(schemaPath, "utf-8");

// Split on semicolons, keeping only non-empty non-comment statements
const statements = schema
  .split(";")
  .map((s) => s.trim())
  .filter((s) => s.length > 0 && !s.startsWith("--"));

console.log(`Found ${statements.length} statements to execute\n`);

const queryFn = sql();

for (let i = 0; i < statements.length; i++) {
  const stmt = statements[i];
  const preview =
    stmt.length > 80 ? stmt.substring(0, 80) + "..." : stmt;
  try {
    await queryFn.query(stmt + ";");
    console.log(`[${i + 1}/${statements.length}] ✓ ${preview}`);
  } catch (err: any) {
    console.error(`[${i + 1}/${statements.length}] ✗ FAILED: ${preview}`);
    console.error(`  Error: ${err.message}`);
    process.exit(1);
  }
}

console.log(`\nMigration complete — ${statements.length} statements executed successfully.`);
