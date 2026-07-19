const fs = require("fs");
let src = fs.readFileSync("src/lib/mock-data.ts", "utf8");

// 1. Add import after batch6 import
src = src.replace(
  'import { newProfessionsBatch6 } from "./new-professions-batch6";',
  'import { newProfessionsBatch6 } from "./new-professions-batch6";\nimport { newProfessionsBatch7 } from "./new-professions-batch7";'
);

// 2. Add 5 profession entries
const profInsert = `  {
    id: "p37",
    slug: "professor",
    name: "Professor",
    description:
      "Teach, research, and advance human knowledge at the highest level. Professors inspire the next generation of thinkers while pushing the boundaries of their academic discipline through original scholarship and publication.",
    category: "Education",
    iconEmoji: "🎓",
  },
  {
    id: "p38",
    slug: "cybersecurity-analyst",
    name: "Cybersecurity Analyst",
    description:
      "Protect organizations from digital threats by monitoring networks, analyzing vulnerabilities, and responding to security incidents. As cyber attacks grow more sophisticated, cybersecurity analysts serve as the frontline defenders of our digital world.",
    category: "STEM",
    iconEmoji: "🔒",
  },
  {
    id: "p39",
    slug: "real-estate-agent",
    name: "Real Estate Agent",
    description:
      "Guide clients through buying, selling, and renting properties — one of life's most significant financial decisions. Real estate agents combine market expertise, negotiation skills, and local knowledge to help people find and secure their ideal homes.",
    category: "Business",
    iconEmoji: "🏠",
  },
  {
    id: "p40",
    slug: "dietitian",
    name: "Dietitian",
    description:
      "Use the science of nutrition to help people live healthier lives. Registered dietitians assess nutritional needs, develop meal plans, and provide evidence-based guidance to manage health conditions — from diabetes and heart disease to sports performance and eating disorders.",
    category: "Healthcare",
    iconEmoji: "🥗",
  },
  {
    id: "p41",
    slug: "geologist",
    name: "Geologist",
    description:
      "Study the Earth — its rocks, minerals, landforms, and the 4.5-billion-year history written in stone. Geologists explore for natural resources, assess natural hazards like earthquakes and volcanoes, and help us understand the forces that shape our planet.",
    category: "STEM",
    iconEmoji: "🌋",
  },
];`;
src = src.replace("];\n\nconst gradeLevels", profInsert + "\n\nconst gradeLevels");

// 3. Add ...newProfessionsBatch7, after ...newProfessionsBatch6,
src = src.replace(
  "...newProfessionsBatch6,",
  "...newProfessionsBatch6,\n  ...newProfessionsBatch7,"
);

// 4. Add new school entries
const newSchools = `  {
    id: "s42", name: "University of Chicago", state: "IL", type: "private",
    description: "World-renowned research university with a storied tradition of scholarly excellence across the humanities, social sciences, and sciences. Home to 100+ Nobel laureates and a model of rigorous academic inquiry and intellectual freedom.",
    rankingInfo: "#11 National University (U.S. News)", websiteUrl: "https://www.uchicago.edu/",
  },
  {
    id: "s43", name: "University of California, Los Angeles", state: "CA", type: "public",
    description: "Top-ranked public research university and a leader across disciplines from film and engineering to medicine and education. UCLA combines academic excellence with a diverse, vibrant campus in the heart of Los Angeles.",
    rankingInfo: "#1 Public University (U.S. News)", websiteUrl: "https://www.ucla.edu/",
  },
  {
    id: "s44", name: "Colorado School of Mines", state: "CO", type: "public",
    description: "Premier public university focused on earth science, energy, and the environment. Renowned geology, geophysics, and mining engineering programs with unmatched field opportunities in the Rocky Mountain region.",
    rankingInfo: "#38 National University, #2 Geology/Earth Science (U.S. News)", websiteUrl: "https://www.mines.edu/",
  },
  {
    id: "s45", name: "University of Arizona", state: "AZ", type: "public",
    description: "World-class geosciences university in the heart of the desert Southwest. The Department of Geosciences is consistently ranked among the top programs globally, with extraordinary field sites and research in planetary geology, tectonics, and paleontology.",
    rankingInfo: "#1 Geology/Earth Science Graduate Program (U.S. News)", websiteUrl: "https://www.arizona.edu/",
  },
  {
    id: "s46", name: "New York University", state: "NY", type: "private",
    description: "Major private research university in the heart of New York City. NYU Stern School of Business offers top-ranked real estate programs, and NYU Schack Institute of Real Estate is one of the largest real estate academic centers in the world.",
    rankingInfo: "#30 National University, Top Real Estate Program (U.S. News)", websiteUrl: "https://www.nyu.edu/",
  },
  {
    id: "s47", name: "University of Washington", state: "WA", type: "public",
    description: "Leading public research university and a powerhouse in computer science, engineering, and health sciences. The Paul G. Allen School of Computer Science & Engineering is one of the top cybersecurity research centers in the nation.",
    rankingInfo: "#7 Public University, Top Cybersecurity/CS (U.S. News)", websiteUrl: "https://www.washington.edu/",
  },`;

src = src.replace(
  "  },\n\n];\n\nconst professionSchools",
  "  },\n\n" + newSchools + "\n\n];\n\nconst professionSchools"
);

// 5. Add professionSchools entries
const newProfSchools = `  // Professor (p37) schools
  { professionId: "p37", schoolId: "s5", programName: "Harvard Graduate School of Arts & Sciences \u2014 Ph.D. Programs" },
  { professionId: "p37", schoolId: "s2", programName: "Stanford University \u2014 Doctoral Programs across Humanities, Sciences & Engineering" },
  // Cybersecurity Analyst (p38) schools
  { professionId: "p38", schoolId: "s14", programName: "Cybersecurity / Information Security (B.S. / M.S. \u2014 Carnegie Mellon)" },
  { professionId: "p38", schoolId: "s7", programName: "Cybersecurity (B.S. / M.S. \u2014 Georgia Tech School of Cybersecurity and Privacy)" },
  // Real Estate Agent (p39) schools
  { professionId: "p39", schoolId: "s9", programName: "Real Estate / Business (B.S. \u2014 Wharton Real Estate Department)" },
  { professionId: "p39", schoolId: "s46", programName: "Real Estate (B.S. / M.S. \u2014 NYU Schack Institute of Real Estate)" },
  // Dietitian (p40) schools
  { professionId: "p40", schoolId: "s12", programName: "Nutritional Sciences (B.S. \u2014 Cornell College of Human Ecology)" },
  { professionId: "p40", schoolId: "s29", programName: "Nutrition / Dietetics (B.S. / M.S. \u2014 UNC Gillings School of Global Public Health)" },
  // Geologist (p41) schools
  { professionId: "p41", schoolId: "s44", programName: "Geology / Geoscience (B.S. / M.S. \u2014 Colorado School of Mines)" },
  { professionId: "p41", schoolId: "s45", programName: "Geosciences (B.S. / M.S. / Ph.D. \u2014 University of Arizona)" },`;

const oldProfSchoolsEnd = '  { professionId: "p36", schoolId: "s9", programName: "Entrepreneurship & Innovation (B.S. \u2014 Wharton / UPenn)" },\n\n];';
const newProfSchoolsEnd = '  { professionId: "p36", schoolId: "s9", programName: "Entrepreneurship & Innovation (B.S. \u2014 Wharton / UPenn)" },\n\n' + newProfSchools + '\n\n];';

src = src.replace(oldProfSchoolsEnd, newProfSchoolsEnd);

fs.writeFileSync("src/lib/mock-data.ts", src);
console.log("mock-data.ts updated successfully");
console.log("File size:", src.length, "bytes");

// Verify key changes
console.log("Has batch7 import:", src.includes('newProfessionsBatch7'));
console.log("Has p37:", src.includes('"p37"'));
console.log("Has p38:", src.includes('"p38"'));
console.log("Has p39:", src.includes('"p39"'));
console.log("Has p40:", src.includes('"p40"'));
console.log("Has p41:", src.includes('"p41"'));
console.log("Has spread:", src.includes('...newProfessionsBatch7'));
console.log("Has s42 (UChicago):", src.includes('"s42"'));
console.log("Has s47 (UW):", src.includes('"s47"'));
