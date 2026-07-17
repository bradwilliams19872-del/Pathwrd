import { sql } from "../db";
import {
  getAllProfessions,
  getRoadmap,
  getAllProfessionals,
  getAllSchools,
  getSchoolsByProfession,
} from "../lib/mock-data";

const q = sql();

console.log("Seeding database...\n");

// Clear existing data
await q.query("DELETE FROM profession_schools");
await q.query("DELETE FROM schools");
await q.query("DELETE FROM professionals");
await q.query("DELETE FROM roadmap_steps");
await q.query("DELETE FROM professions");

// Seed professions — auto-generate UUIDs, track by slug
const slugToId: Record<string, string> = {};
const professions = getAllProfessions();
for (const p of professions) {
  const result = await q.query(
    "INSERT INTO professions (slug, name, description, category, icon_emoji) VALUES ($1, $2, $3, $4, $5) RETURNING id",
    [p.slug, p.name, p.description, p.category, p.iconEmoji]
  );
  slugToId[p.slug] = (result as any).rows?.[0]?.id ?? (result as any)[0]?.id;
}
console.log(`✓ ${professions.length} professions`);

// Seed roadmap steps
let count = 0;
for (const p of professions) {
  const profId = slugToId[p.slug];
  if (!profId) continue;
  const steps = getRoadmap(p.id);
  for (const step of steps) {
    await q.query(
      `INSERT INTO roadmap_steps (profession_id, grade_level_id, description, subjects, extracurriculars, supplemental) 
       VALUES ($1, (SELECT id FROM grade_levels WHERE short_code = $2), $3, $4, $5, $6)`,
      [profId, step.gradeShortCode, step.description, step.subjects, JSON.stringify(step.extracurriculars), JSON.stringify(step.supplemental)]
    );
    count++;
  }
}
console.log(`✓ ${count} roadmap steps`);

// Seed professionals
const professionals = getAllProfessionals();
count = 0;
for (const pro of professionals) {
  const profId = slugToId[pro.professionId === "p1" ? "astronaut" : pro.professionId === "p2" ? "software-engineer" : pro.professionId === "p3" ? "doctor" : pro.professionId === "p4" ? "architect" : pro.professionId === "p5" ? "lawyer" : ""];
  await q.query(
    "INSERT INTO professionals (name, title, profession_id, bio, path_background, photo_url) VALUES ($1, $2, $3, $4, $5, $6)",
    [pro.name, pro.title, profId, pro.bio, pro.pathBackground, pro.photoUrl]
  );
  count++;
}
console.log(`✓ ${count} professionals`);

// Seed schools — track by name+state
const schools = getAllSchools();
const schoolNameToId: Record<string, string> = {};
for (const s of schools) {
  const result = await q.query(
    "INSERT INTO schools (name, state, type, description, ranking_info, website_url) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id",
    [s.name, s.state, s.type, s.description, s.rankingInfo, s.websiteUrl]
  );
  schoolNameToId[s.name] = (result as any).rows?.[0]?.id ?? (result as any)[0]?.id;
}
console.log(`✓ ${schools.length} schools`);

// Seed profession-school mappings
count = 0;
for (const p of professions) {
  const profId = slugToId[p.slug];
  if (!profId) continue;
  const mappings = getSchoolsByProfession(p.id);
  for (const m of mappings) {
    const schoolId = schoolNameToId[m.school.name];
    if (!schoolId) continue;
    await q.query(
      "INSERT INTO profession_schools (profession_id, school_id, program_name) VALUES ($1, $2, $3)",
      [profId, schoolId, m.programName]
    );
    count++;
  }
}
console.log(`✓ ${count} profession-school mappings`);

console.log("\n✓ Seed complete.");
