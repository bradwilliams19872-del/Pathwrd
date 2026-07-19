import { readFileSync, writeFileSync, copyFileSync } from 'fs';

// First, copy the batch3 file into src/lib
const src = '/home/team/shared/new-professions-batch3.ts';
const dst = 'src/lib/new-professions-batch3.ts';
try {
  copyFileSync(src, dst);
  console.log('Copied new-professions-batch3.ts to src/lib/');
} catch (e) {
  console.error('Copy failed:', e.message);
  process.exit(1);
}

const file = 'src/lib/mock-data.ts';
let content = readFileSync(file, 'utf8');

// 1. Add import
content = content.replace(
  'import { missingRoadmapSteps } from "./roadmap-steps-missing";\n\n',
  'import { missingRoadmapSteps } from "./roadmap-steps-missing";\nimport { newProfessionsBatch3 } from "./new-professions-batch3";\n\n'
);
console.log('1. Import added');

// 2. Add profession entries
const p16end = '    iconEmoji: "⚡",\n  },\n];\n\nconst gradeLevels';
const newProfs = `    iconEmoji: "⚡",
  },
  {
    id: "p17",
    slug: "accountant",
    name: "Accountant",
    description:
      "Manage financial records, prepare taxes, audit businesses, and guide financial strategy.",
    category: "Business",
    iconEmoji: "💰",
  },
  {
    id: "p18",
    slug: "physical-therapist",
    name: "Physical Therapist",
    description:
      "Help patients recover from injuries, manage chronic conditions, and improve mobility.",
    category: "Healthcare",
    iconEmoji: "🏃",
  },
  {
    id: "p19",
    slug: "pharmacist",
    name: "Pharmacist",
    description:
      "Dispense medications, counsel patients, and ensure safe use of prescription medicines.",
    category: "Healthcare",
    iconEmoji: "💊",
  },
  {
    id: "p20",
    slug: "environmental-scientist",
    name: "Environmental Scientist",
    description:
      "Study the natural world and develop solutions to environmental problems.",
    category: "STEM",
    iconEmoji: "🌍",
  },
  {
    id: "p21",
    slug: "journalist",
    name: "Journalist",
    description:
      "Investigate, report, and tell the stories that shape public understanding.",
    category: "Creative",
    iconEmoji: "📰",
  },
];

const gradeLevels`;

if (!content.includes(p16end)) {
  console.error('ERROR: p16 marker not found');
  process.exit(1);
}
content = content.replace(p16end, newProfs);
console.log('2. Professions added');

// 3. Spread newProfessionsBatch3
const rsm = '  ...missingRoadmapSteps,\n];\n\nconst professionals';
if (!content.includes(rsm)) {
  console.error('ERROR: roadmapSteps marker not found');
  process.exit(1);
}
content = content.replace(rsm, '  ...missingRoadmapSteps,\n  ...newProfessionsBatch3,\n];\n\nconst professionals');
console.log('3. newProfessionsBatch3 spread added');

// 4. Add new schools - use just the unique ending
const schoolEnd = '  },\n];\n\nconst professionSchools';
if (!content.includes(schoolEnd)) {
  // Check if already modified
  if (content.includes('s26')) {
    console.log('4. Schools already added (s26 found), skipping');
  } else {
    console.error('ERROR: schools marker not found');
    // Print context around the area
    const idx = content.indexOf('const professionSchools');
    if (idx > 0) {
      console.log('Context:', JSON.stringify(content.substring(idx - 60, idx)));
    }
    process.exit(1);
  }
} else {
  // Only replace the FIRST occurrence (end of schools array, not end of professionSchools)
  const newSchools = `  },
  {
    id: "s26", name: "University of Illinois Urbana-Champaign", state: "IL", type: "public",
    description: "Top-ranked public university with one of the nation's best accounting programs through the Gies College of Business. Strong CPA exam pass rates and Big 4 recruiting pipeline.",
    rankingInfo: "#35 National University, #2 Accounting (U.S. News)", websiteUrl: "https://www.illinois.edu/",
  },
  {
    id: "s27", name: "University of Southern California", state: "CA", type: "private",
    description: "Home to a top-ranked Doctor of Physical Therapy (DPT) program through the USC Division of Biokinesiology and Physical Therapy. Strong clinical training in orthopedics, neurology, and sports medicine.",
    rankingInfo: "#24 National University, Top DPT Program (U.S. News)", websiteUrl: "https://www.usc.edu/",
  },
  {
    id: "s28", name: "University of Pittsburgh", state: "PA", type: "public",
    description: "The Pitt School of Health and Rehabilitation Sciences houses a nationally renowned DPT program with strong clinical partnerships through UPMC, a world-class academic medical center.",
    rankingInfo: "#62 National University, Top PT Program (U.S. News)", websiteUrl: "https://www.pitt.edu/",
  },
  {
    id: "s29", name: "University of North Carolina at Chapel Hill", state: "NC", type: "public",
    description: "The UNC Eshelman School of Pharmacy is consistently ranked among the nation's top pharmacy schools. Offers a 4-year Pharm.D. program with cutting-edge research and clinical training.",
    rankingInfo: "#5 Public University, #1 Pharmacy School (U.S. News)", websiteUrl: "https://www.unc.edu/",
  },
  {
    id: "s30", name: "University of California, San Francisco", state: "CA", type: "public",
    description: "A graduate health sciences powerhouse — UCSF's School of Pharmacy is world-renowned for pharmaceutical research, clinical pharmacy, and drug development. Pharm.D. and Ph.D. programs.",
    rankingInfo: "#1 Pharmacy School (U.S. News)", websiteUrl: "https://www.ucsf.edu/",
  },
  {
    id: "s31", name: "Northwestern University", state: "IL", type: "private",
    description: "Home to the Medill School of Journalism — one of the most prestigious journalism programs in the world. Medill integrates hands-on reporting with digital media, data journalism, and investigative techniques.",
    rankingInfo: "#10 National University, #1 Journalism (Medill)", websiteUrl: "https://www.northwestern.edu/",
  },
  {
    id: "s32", name: "Columbia University", state: "NY", type: "private",
    description: "The Columbia Journalism School is the gold standard for graduate journalism education. Home of the Pulitzer Prizes, Columbia offers M.S., M.A., and dual-degree programs producing leaders in investigative, digital, and broadcast journalism.",
    rankingInfo: "#13 National University, #1 Graduate Journalism (Columbia Journalism School)", websiteUrl: "https://www.columbia.edu/",
  },
];

const professionSchools`;
  content = content.replace(schoolEnd, newSchools);
  console.log('4. Schools added');
}

// 5. Add profession-school links
const psEnd = '  { professionId: "p13", schoolId: "s18", programName: "Doctor of Dental Medicine (D.M.D.)" },\n];';
if (!content.includes(psEnd)) {
  // Check if already done
  if (content.includes('"p17"') && content.includes('"s20"')) {
    console.log('5. Profession-school links already added, skipping');
  } else {
    console.error('ERROR: professionSchools marker not found');
    process.exit(1);
  }
} else {
  const newLinks = `  { professionId: "p13", schoolId: "s18", programName: "Doctor of Dental Medicine (D.M.D.)" },
  // Accountant schools
  { professionId: "p17", schoolId: "s20", programName: "Accounting (B.B.A. / M.P.A. — McCombs School of Business)" },
  { professionId: "p17", schoolId: "s26", programName: "Accountancy (B.S. / M.A.S. — Gies College of Business)" },
  // Physical Therapist schools
  { professionId: "p18", schoolId: "s27", programName: "Doctor of Physical Therapy (DPT — USC Division of Biokinesiology)" },
  { professionId: "p18", schoolId: "s28", programName: "Doctor of Physical Therapy (DPT — Pitt SHRS)" },
  // Pharmacist schools
  { professionId: "p19", schoolId: "s29", programName: "Doctor of Pharmacy (Pharm.D. — UNC Eshelman School of Pharmacy)" },
  { professionId: "p19", schoolId: "s30", programName: "Doctor of Pharmacy (Pharm.D. — UCSF School of Pharmacy)" },
  // Environmental Scientist schools
  { professionId: "p20", schoolId: "s3", programName: "Environmental Science / Environmental Earth Science (B.S.)" },
  { professionId: "p20", schoolId: "s2", programName: "Earth Systems Program (B.S. / M.S.)" },
  // Journalist schools
  { professionId: "p21", schoolId: "s31", programName: "Journalism (B.S.J. / M.S.J. — Medill School of Journalism)" },
  { professionId: "p21", schoolId: "s32", programName: "Journalism (M.S. / M.A. — Columbia Journalism School)" },
];`;
  content = content.replace(psEnd, newLinks);
  console.log('5. Profession-school links added');
}

writeFileSync(file, content);

// Verify
const v = readFileSync(file, 'utf8');
const checks = [
  ['newProfessionsBatch3', v.includes('newProfessionsBatch3')],
  ['p17', v.includes('"p17"')],
  ['p21', v.includes('"p21"')],
  ['s26', v.includes('s26')],
  ['s32', v.includes('s32')],
  ['spread', v.includes('...newProfessionsBatch3')],
  ['p17 school link', v.includes('"p17", schoolId: "s20"')],
  ['p21 school link', v.includes('"p21", schoolId: "s32"')],
];
let allOk = true;
for (const [name, ok] of checks) {
  console.log(`${ok ? 'PASS' : 'FAIL'}: ${name}`);
  if (!ok) allOk = false;
}
console.log(allOk ? '\nAll edits applied!' : '\nFAILED');
process.exit(allOk ? 0 : 1);
