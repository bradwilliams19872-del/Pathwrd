import { extraRoadmapSteps } from "./roadmap-steps-extra";
import { remainingRoadmapSteps } from "./roadmap-steps-remaining";
import { missingRoadmapSteps } from "./roadmap-steps-missing";

/**
 * Mock data layer for Pathwrd.
 * All functions return hardcoded data now. When DATABASE_URL is connected,
 * replace each function body with a call to sql() using the same return shapes.
 */
// ── Types (mirroring DB schema) ──────────────────────────────────────────

export interface Profession {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: string;
  iconEmoji: string;
}

export interface GradeLevel {
  id: string;
  name: string;
  shortCode: string;
  sortOrder: number;
}

export interface Extracurricular {
  name: string;
  url: string;
  description: string;
}

export interface Supplemental {
  name: string;
  url: string;
  type: "book" | "course" | "video" | "article" | "program";
}

export interface RoadmapStep {
  id: string;
  professionId: string;
  gradeLevelId: string;
  gradeName: string;
  gradeShortCode: string;
  description: string;
  subjects: string[];
  extracurriculars: Extracurricular[];
  supplemental: Supplemental[];
}

export interface Professional {
  id: string;
  name: string;
  title: string;
  professionId: string;
  professionName: string;
  bio: string;
  pathBackground: string;
  photoUrl: string;
}

export interface School {
  id: string;
  name: string;
  state: string;
  type: "public" | "private";
  description: string;
  rankingInfo: string;
  websiteUrl: string;
}

export interface ProfessionSchool {
  professionId: string;
  schoolId: string;
  programName: string;
}

export interface Tutor {
  id: string;
  name: string;
  title: string;
  bio: string;
  subjects: string[];
  hourlyRate: number;
  rating: number;
  photoUrl: string;
  professionIds: string[];
  availability: string;
}

// ── Mock data ────────────────────────────────────────────────────────────

const professions: Profession[] = [
  {
    id: "p1",
    slug: "astronaut",
    name: "Astronaut",
    description:
      "Explore space, conduct scientific research in microgravity, and push the boundaries of human exploration. Astronauts come from diverse backgrounds including engineering, science, medicine, and aviation.",
    category: "STEM",
    iconEmoji: "🚀",
  },
  {
    id: "p2",
    slug: "software-engineer",
    name: "Software Engineer",
    description:
      "Design, build, and maintain the software systems that power our modern world — from mobile apps and websites to AI systems and spaceflight control software.",
    category: "STEM",
    iconEmoji: "💻",
  },
  {
    id: "p3",
    slug: "doctor",
    name: "Doctor",
    description:
      "Diagnose, treat, and prevent illness while improving patients' quality of life. The path requires scientific excellence, empathy, and a commitment to lifelong learning.",
    category: "Healthcare",
    iconEmoji: "🩺",
  },
  {
    id: "p4",
    slug: "architect",
    name: "Architect",
    description:
      "Design the buildings and spaces where we live, work, and play. Architecture blends artistic vision with technical precision to create structures that are beautiful, functional, and sustainable.",
    category: "Creative",
    iconEmoji: "🏛️",
  },
  {
    id: "p5",
    slug: "lawyer",
    name: "Lawyer",
    description:
      "Advocate for clients, interpret the law, and shape justice. Lawyers work across criminal justice, corporate law, civil rights, environmental law, and countless other fields.",
    category: "Legal",
    iconEmoji: "⚖️",
  },
  {
    id: "p6",
    slug: "nurse",
    name: "Nurse",
    description:
      "Provide compassionate patient care, advocate for health, and save lives at the bedside. Nurses work across hospitals, clinics, schools, and communities — the largest and most trusted healthcare profession.",
    category: "Healthcare",
    iconEmoji: "🩺",
  },
  {
    id: "p7",
    slug: "mechanical-engineer",
    name: "Mechanical Engineer",
    description:
      "Design, build, and improve the machines and systems that power our world — from engines and robots to renewable energy and manufacturing. Mechanical engineering is one of the broadest and most versatile engineering disciplines.",
    category: "STEM",
    iconEmoji: "⚙️",
  },
  {
    id: "p8",
    slug: "pilot",
    name: "Pilot",
    description:
      "Take to the skies as a professional aviator. Pilots fly commercial airliners, cargo planes, private jets, or helicopters — a career demanding precision, calm under pressure, and mastery of advanced technology.",
    category: "Trades/Transportation",
    iconEmoji: "✈️",
  },
  {
    id: "p9",
    slug: "veterinarian",
    name: "Veterinarian",
    description:
      "Care for animals of all kinds — from family pets to livestock and wildlife. Veterinarians diagnose and treat illnesses, perform surgeries, and promote animal health and welfare. A career combining medical science with compassion for animals.",
    category: "Healthcare",
    iconEmoji: "🐾",
  },
  {
    id: "p10",
    slug: "graphic-designer",
    name: "Graphic Designer",
    description:
      "Communicate ideas through visual storytelling — typography, imagery, color, and layout. Graphic designers create logos, branding, publications, websites, packaging, and more. A career at the intersection of art, psychology, and technology.",
    category: "Creative",
    iconEmoji: "🎨",
  },
  {
    id: "p11",
    slug: "data-scientist",
    name: "Data Scientist",
    description:
      "Extract insights from data to solve real-world problems. Data scientists use statistics, machine learning, and programming to find patterns, make predictions, and drive decisions — one of the fastest-growing and highest-impact careers of the 21st century.",
    category: "STEM",
    iconEmoji: "📊",
  },
  {
    id: "p12",
    slug: "teacher-k12",
    name: "Teacher (K-12)",
    description:
      "Shape young minds and inspire the next generation. K-12 teachers create engaging learning environments, develop curriculum, and help students discover their potential across subjects from reading and math to science and the arts.",
    category: "Education",
    iconEmoji: "🍎",
  },
  {
    id: "p13",
    slug: "dentist",
    name: "Dentist",
    description:
      "Diagnose and treat oral health issues — from cavities and gum disease to complex dental surgeries. Dentists improve patients' health, confidence, and quality of life through preventive care, restorative procedures, and patient education.",
    category: "Healthcare",
    iconEmoji: "🦷",
  },
  {
    id: "p14",
    slug: "civil-engineer",
    name: "Civil Engineer",
    description:
      "Design, build, and maintain the infrastructure that supports modern civilization — bridges, roads, dams, water systems, and buildings. Civil engineers shape the physical world we live in, combining creativity with technical precision to create safe, sustainable structures.",
    category: "STEM",
    iconEmoji: "🏗️",
  },
  {
    id: "p15",
    slug: "psychologist",
    name: "Psychologist",
    description:
      "Study the human mind and behavior to help people understand themselves, cope with challenges, and improve their mental well-being. Psychologists work in clinical settings, schools, research, business, and sports — applying scientific methods to understand how people think, feel, and act.",
    category: "Healthcare",
    iconEmoji: "🧠",
  },
  {
    id: "p16",
    slug: "electrician",
    name: "Electrician",
    description:
      "Install, maintain, and repair electrical systems that power our homes, businesses, and infrastructure. Electricians are skilled tradespeople who combine technical knowledge with hands-on expertise — one of the highest-demand and best-compensated skilled trades with clear apprenticeship-to-mastery pathways.",
    category: "Trades/Transportation",
    iconEmoji: "⚡",
  },
];

const gradeLevels: GradeLevel[] = [
  { id: "g1", name: "Pre-K", shortCode: "prek", sortOrder: 1 },
  { id: "g2", name: "Kindergarten", shortCode: "k", sortOrder: 2 },
  { id: "g3", name: "1st Grade", shortCode: "1", sortOrder: 3 },
  { id: "g4", name: "2nd Grade", shortCode: "2", sortOrder: 4 },
  { id: "g5", name: "3rd Grade", shortCode: "3", sortOrder: 5 },
  { id: "g6", name: "4th Grade", shortCode: "4", sortOrder: 6 },
  { id: "g7", name: "5th Grade", shortCode: "5", sortOrder: 7 },
  { id: "g8", name: "6th Grade", shortCode: "6", sortOrder: 8 },
  { id: "g9", name: "7th Grade", shortCode: "7", sortOrder: 9 },
  { id: "g10", name: "8th Grade", shortCode: "8", sortOrder: 10 },
  { id: "g11", name: "9th Grade", shortCode: "9", sortOrder: 11 },
  { id: "g12", name: "10th Grade", shortCode: "10", sortOrder: 12 },
  { id: "g13", name: "11th Grade", shortCode: "11", sortOrder: 13 },
  { id: "g14", name: "12th Grade", shortCode: "12", sortOrder: 14 },
  { id: "g15", name: "Undergraduate", shortCode: "ugrad", sortOrder: 15 },
  { id: "g16", name: "Graduate", shortCode: "grad", sortOrder: 16 },
  { id: "g17", name: "PhD / Doctoral", shortCode: "phd", sortOrder: 17 },
];

// Roadmap steps — key grades per profession (not every grade, for demo clarity)
const roadmapSteps: RoadmapStep[] = [
  // ── Astronaut ──────────────────────────────────────────────
  {
    id: "rs1",
    professionId: "p1",
    gradeLevelId: "g2",
    gradeName: "Kindergarten",
    gradeShortCode: "k",
    description:
      "Build curiosity about space! At this age, children develop wonder about the sky, stars, and planets. Encourage hands-on exploration and storytelling about space travel.",
    subjects: ["Early Science", "Counting & Patterns", "Drawing & Coloring"],
    extracurriculars: [
      {
        name: "Local Planetarium Visits",
        url: "https://www.nasa.gov/",
        description: "Visit a local planetarium or science museum to spark excitement about space.",
      },
      {
        name: "NASA Kids' Club",
        url: "https://www.nasa.gov/learning-resources/nasa-kids-club/",
        description: "Free online games and activities about space for young children.",
      },
    ],
    supplemental: [
      { name: "The Darkest Dark by Chris Hadfield", url: "", type: "book" },
      { name: "There's No Place Like Space (Cat in the Hat)", url: "", type: "book" },
    ],
  },
  {
    id: "rs2",
    professionId: "p1",
    gradeLevelId: "g7",
    gradeName: "5th Grade",
    gradeShortCode: "5",
    description:
      "Deepen STEM foundations. Strong math skills and scientific inquiry habits formed now create the bedrock for advanced study. Join or start a science club.",
    subjects: ["Math (Pre-Algebra)", "General Science", "Reading Comprehension", "Physical Education"],
    extracurriculars: [
      {
        name: "NASA Space Camp",
        url: "https://www.rocketcenter.com/SpaceCamp",
        description: "Week-long immersive space camp in Huntsville, AL — a rite of passage for aspiring astronauts.",
      },
      {
        name: "Science Olympiad",
        url: "https://www.soinc.org/",
        description: "Compete in STEM events at the elementary school level.",
      },
    ],
    supplemental: [
      { name: "Kerbal Space Program (game)", url: "https://www.kerbalspaceprogram.com/", type: "program" },
      { name: "Crash Course Kids: Space Science", url: "https://www.youtube.com/playlist?list=PLhz12vamHOnZspL8eLvlNoT2i6f_FhyB-", type: "video" },
    ],
  },
  {
    id: "rs3",
    professionId: "p1",
    gradeLevelId: "g12",
    gradeName: "10th Grade",
    gradeShortCode: "10",
    description:
      "High school is where astronaut candidates begin to differentiate. Take advanced math and physics, pursue leadership roles, and stay physically fit. NASA requires a STEM bachelor's degree, so plan your college path now.",
    subjects: ["AP Physics", "AP Calculus", "Chemistry", "Computer Science (Python)", "Aerospace Elective"],
    extracurriculars: [
      {
        name: "Civil Air Patrol",
        url: "https://www.gocivilairpatrol.com/",
        description: "Cadet program offering flight training, leadership, and aerospace education.",
      },
      {
        name: "Robotics Team (FIRST)",
        url: "https://www.firstinspires.org/",
        description: "Build and program robots; compete regionally and nationally.",
      },
      {
        name: "NASA High School Internship (NASA OSTEM)",
        url: "https://www.nasa.gov/learning-resources/internship-programs/",
        description: "Paid internships at NASA centers for high school students.",
      },
    ],
    supplemental: [
      { name: "An Astronaut's Guide to Life on Earth — Chris Hadfield", url: "", type: "book" },
      { name: "MIT OpenCourseWare: Physics I", url: "https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/", type: "course" },
    ],
  },
  {
    id: "rs4",
    professionId: "p1",
    gradeLevelId: "g15",
    gradeName: "Undergraduate",
    gradeShortCode: "ugrad",
    description:
      "Pursue a bachelor's in engineering (aerospace, mechanical, electrical), physical science (physics, chemistry), biological science, or mathematics. Maintain a 3.0+ GPA. Apply for NASA internships every summer.",
    subjects: ["Aerospace Engineering / Physics Major", "Advanced Calculus", "Fluid Dynamics", "Computer Programming", "Technical Writing"],
    extracurriculars: [
      {
        name: "NASA Pathways Internship",
        url: "https://www.nasa.gov/careers/pathways/",
        description: "Paid internships that can convert to full-time NASA employment after graduation.",
      },
      {
        name: "Air Force ROTC",
        url: "https://www.afrotc.com/",
        description: "Military training plus scholarship opportunities — many astronauts come from the armed forces.",
      },
    ],
    supplemental: [
      { name: "FAA Private Pilot License", url: "https://www.faa.gov/pilots/become", type: "program" },
      { name: "SCUBA Certification", url: "", type: "program" },
    ],
  },
  {
    id: "rs5",
    professionId: "p1",
    gradeLevelId: "g16",
    gradeName: "Graduate",
    gradeShortCode: "grad",
    description:
      "A master's or PhD strengthens your application. NASA also values operational experience — military test pilot school or field research in extreme environments (Antarctica, underwater) are common paths.",
    subjects: ["Aerospace Engineering (MS/PhD)", "Orbital Mechanics", "Human Physiology", "Research Methods"],
    extracurriculars: [
      {
        name: "NASA Astronaut Candidate Program",
        url: "https://www.nasa.gov/humans-in-space/astronauts/astronaut-candidate-program/",
        description: "Apply when NASA opens applications (every ~4 years). Requires 1,000+ hours jet aircraft pilot-in-command time OR a PhD plus 2 years of professional experience.",
      },
    ],
    supplemental: [
      { name: "ESA Astronaut Training Resources", url: "https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/Astronauts", type: "article" },
    ],
  },

  // ── Software Engineer ──────────────────────────────────────
  {
    id: "rs6",
    professionId: "p2",
    gradeLevelId: "g2",
    gradeName: "Kindergarten",
    gradeShortCode: "k",
    description:
      "Build logical thinking through play. Pattern recognition, sequencing, and creative problem-solving are the earliest roots of computational thinking.",
    subjects: ["Patterns & Sorting", "Counting", "Story Sequencing"],
    extracurriculars: [
      {
        name: "ScratchJr",
        url: "https://www.scratchjr.org/",
        description: "Free app where young children program interactive stories and games.",
      },
    ],
    supplemental: [
      { name: "Hello Ruby by Linda Liukas", url: "", type: "book" },
    ],
  },
  {
    id: "rs7",
    professionId: "p2",
    gradeLevelId: "g11",
    gradeName: "9th Grade",
    gradeShortCode: "9",
    description:
      "Start coding in earnest. Python is the best first language for aspiring engineers. Join coding clubs and start building small projects — a personal website, a simple game, or a calculator app.",
    subjects: ["Algebra I / II", "Intro to Computer Science", "English (technical writing matters)"],
    extracurriculars: [
      {
        name: "Codecademy",
        url: "https://www.codecademy.com/",
        description: "Free interactive coding courses in Python, JavaScript, and more.",
      },
      {
        name: "Hack Club",
        url: "https://hackclub.com/",
        description: "Global network of high school coding clubs with hackathons and workshops.",
      },
    ],
    supplemental: [
      { name: "CS50x — Harvard's Intro to CS", url: "https://cs50.harvard.edu/x/", type: "course" },
      { name: "Automate the Boring Stuff with Python", url: "https://automatetheboringstuff.com/", type: "book" },
    ],
  },
  {
    id: "rs8",
    professionId: "p2",
    gradeLevelId: "g15",
    gradeName: "Undergraduate",
    gradeShortCode: "ugrad",
    description:
      "Major in Computer Science or Software Engineering. Focus on data structures, algorithms, and systems design. Pursue summer internships at tech companies — they often lead to full-time offers.",
    subjects: ["Data Structures & Algorithms", "Operating Systems", "Database Systems", "Web/Mobile Development", "Discrete Math"],
    extracurriculars: [
      {
        name: "Google Summer of Code",
        url: "https://summerofcode.withgoogle.com/",
        description: "Paid open-source internship program for students.",
      },
      {
        name: "Major League Hacking (MLH)",
        url: "https://mlh.io/",
        description: "The official student hackathon league — compete and network.",
      },
    ],
    supplemental: [
      { name: "LeetCode", url: "https://leetcode.com/", type: "program" },
      { name: "The Pragmatic Programmer", url: "", type: "book" },
    ],
  },

  // ── Doctor ─────────────────────────────────────────────────
  {
    id: "rs9",
    professionId: "p3",
    gradeLevelId: "g11",
    gradeName: "9th Grade",
    gradeShortCode: "9",
    description:
      "Begin building a strong science foundation. Volunteer at a local hospital or clinic to confirm your interest in patient care. Strong grades in biology and chemistry are essential.",
    subjects: ["Honors Biology", "Algebra I/II", "English", "Health Science Elective"],
    extracurriculars: [
      {
        name: "Hospital Junior Volunteer Program",
        url: "",
        description: "Many hospitals offer volunteer programs for teens — hands-on exposure to healthcare environments.",
      },
      {
        name: "HOSA — Future Health Professionals",
        url: "https://hosa.org/",
        description: "Competitive organization for students interested in health careers.",
      },
    ],
    supplemental: [
      { name: "The Man Who Mistook His Wife for a Hat — Oliver Sacks", url: "", type: "book" },
      { name: "Khan Academy: Biology", url: "https://www.khanacademy.org/science/biology", type: "course" },
    ],
  },
  {
    id: "rs10",
    professionId: "p3",
    gradeLevelId: "g15",
    gradeName: "Undergraduate",
    gradeShortCode: "ugrad",
    description:
      "Pre-med track: major in biology, chemistry, or biochemistry. Maintain 3.5+ GPA. Complete pre-med prerequisites (organic chemistry, physics, biochemistry). Start MCAT prep junior year.",
    subjects: ["Biology (major)", "Organic Chemistry", "Physics with Lab", "Biochemistry", "Psychology/Sociology"],
    extracurriculars: [
      {
        name: "Hospital Shadowing",
        url: "",
        description: "Shadow physicians across specialties — required for med school applications.",
      },
      {
        name: "Pre-Med AMSA Chapter",
        url: "https://www.amsa.org/",
        description: "American Medical Student Association pre-med chapters.",
      },
    ],
    supplemental: [
      { name: "MCAT Prep — AAMC Official Materials", url: "https://www.aamc.org/students/prepare-mcat", type: "program" },
    ],
  },
  {
    id: "rs11",
    professionId: "p3",
    gradeLevelId: "g16",
    gradeName: "Graduate",
    gradeShortCode: "grad",
    description:
      "Medical school (4 years): 2 years classroom + 2 years clinical rotations. Then residency (3-7 years depending on specialty). USMLE Step 1, 2, and 3 exams along the way.",
    subjects: ["Anatomy", "Pathology", "Pharmacology", "Clinical Rotations", "Medical Ethics"],
    extracurriculars: [
      {
        name: "AAMC Medical School Admission Requirements",
        url: "https://students-residents.aamc.org/",
        description: "Official guide to MD and DO programs in the US.",
      },
    ],
    supplemental: [
      { name: "First Aid for the USMLE Step 1", url: "", type: "book" },
    ],
  },

  // ── Architect ──────────────────────────────────────────────
  {
    id: "rs12",
    professionId: "p4",
    gradeLevelId: "g11",
    gradeName: "9th Grade",
    gradeShortCode: "9",
    description:
      "Architecture requires both creative and technical skills. Take art and drawing classes alongside math. Visit notable buildings and start a sketchbook of architectural details you observe.",
    subjects: ["Geometry", "Art & Design", "Physics (conceptual)", "World History"],
    extracurriculars: [
      {
        name: "Architecture Summer Programs for High Schoolers",
        url: "https://www.archcareersguide.com/",
        description: "Many universities offer summer architecture studios for high school students.",
      },
      {
        name: "SketchUp Free",
        url: "https://www.sketchup.com/plans-and-pricing/sketchup-free",
        description: "Free 3D modeling tool — great for experimenting with building design.",
      },
    ],
    supplemental: [
      { name: "101 Things I Learned in Architecture School", url: "", type: "book" },
    ],
  },
  {
    id: "rs13",
    professionId: "p4",
    gradeLevelId: "g15",
    gradeName: "Undergraduate",
    gradeShortCode: "ugrad",
    description:
      "Pursue a B.Arch (5-year NAAB-accredited program) or a BA/BS in Architecture + M.Arch. Build a strong portfolio of studio work. Intern at architecture firms during summers.",
    subjects: ["Architectural Design Studio", "Structures/Materials", "History of Architecture", "Digital Modeling (Revit, Rhino)", "Environmental Systems"],
    extracurriculars: [
      {
        name: "AIAS (American Institute of Architecture Students)",
        url: "https://www.aias.org/",
        description: "Student organization with competitions, conferences, and networking.",
      },
    ],
    supplemental: [
      { name: "NAAB-Accredited Programs List", url: "https://www.naab.org/accreditation/find-programs/", type: "article" },
    ],
  },

  // ── Lawyer ─────────────────────────────────────────────────
  {
    id: "rs14",
    professionId: "p5",
    gradeLevelId: "g11",
    gradeName: "9th Grade",
    gradeShortCode: "9",
    description:
      "Lawyers need strong reading, writing, and critical thinking skills. Join debate or mock trial to practice argumentation. Take courses in history, government, and English.",
    subjects: ["English / Literature", "U.S. History / Government", "Speech & Debate", "Foreign Language"],
    extracurriculars: [
      {
        name: "National Speech & Debate Association",
        url: "https://www.speechanddebate.org/",
        description: "Competitive debate and speech programs at middle and high schools nationwide.",
      },
      {
        name: "Mock Trial",
        url: "https://www.nationalmocktrial.org/",
        description: "Simulated court trials — practice legal argumentation as a team.",
      },
    ],
    supplemental: [
      { name: "To Kill a Mockingbird — Harper Lee", url: "", type: "book" },
      { name: "Crash Course: U.S. Government", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtOfse2ncvffeelTrqvhrz8H", type: "video" },
    ],
  },
  {
    id: "rs15",
    professionId: "p5",
    gradeLevelId: "g15",
    gradeName: "Undergraduate",
    gradeShortCode: "ugrad",
    description:
      "No specific major required — political science, history, English, philosophy, and economics are all common. Focus on GPA and LSAT prep. Join pre-law society. Intern at a law firm.",
    subjects: ["Political Science / History (major)", "Logic / Philosophy", "Economics", "Constitutional Law (elective)", "Advanced Writing"],
    extracurriculars: [
      {
        name: "LSAC Pre-Law Resources",
        url: "https://www.lsac.org/discover-law",
        description: "Official Law School Admission Council — prep resources and school search.",
      },
    ],
    supplemental: [
      { name: "Khan Academy: LSAT Prep (free)", url: "https://www.khanacademy.org/prep/lsat", type: "course" },
    ],
  },

  // ── Nurse ────────────────────────────────────────────────────
  {
    id: "rs16",
    professionId: "p6",
    gradeLevelId: "g2",
    gradeName: "Kindergarten",
    gradeShortCode: "k",
    description:
      "Nursing starts with caring for others. At this age, children learn empathy, basic body awareness, and healthy habits. Encourage pretend play with doctor/nurse kits and talk about how our bodies work.",
    subjects: ["Health & Hygiene", "Counting & Measuring", "Social-Emotional Learning"],
    extracurriculars: [
      {
        name: "Red Cross Pillowcase Project",
        url: "https://www.redcross.org/get-help/disaster-relief-and-recovery-services/pillowcase-project.html",
        description: "Free youth preparedness program teaching safety, coping skills, and emergency readiness.",
      },
    ],
    supplemental: [
      { name: "The Berenstain Bears: Hospital Friends", url: "", type: "book" },
      { name: "Sid the Science Kid — Health Episodes (PBS Kids)", url: "https://pbskids.org/sid/health", type: "video" },
    ],
  },
  {
    id: "rs17",
    professionId: "p6",
    gradeLevelId: "g7",
    gradeName: "5th Grade",
    gradeShortCode: "5",
    description:
      "Build science foundations and first aid knowledge. Understanding how the human body works — bones, muscles, heart, lungs — prepares future nurses. Consider joining a scouting program that teaches first aid skills.",
    subjects: ["General Science (Life Science focus)", "Math (Pre-Algebra)", "Health Education", "Reading Comprehension"],
    extracurriculars: [
      {
        name: "American Red Cross Babysitting & Child Care Course",
        url: "https://www.redcross.org/take-a-class/babysitting",
        description: "Learn basic first aid, CPR, and child care for ages 11+. An excellent early healthcare foundation.",
      },
      {
        name: "Girl Scouts / Boy Scouts Health Badges",
        url: "https://www.girlscouts.org/",
        description: "Earn first aid, safety, and health-related badges through scouting programs.",
      },
    ],
    supplemental: [
      { name: "KidsHealth.org", url: "https://kidshealth.org/", type: "article" },
      { name: "The Way We Work by David Macaulay", url: "", type: "book" },
    ],
  },
  {
    id: "rs18",
    professionId: "p6",
    gradeLevelId: "g11",
    gradeName: "9th Grade",
    gradeShortCode: "9",
    description:
      "Begin building a strong foundation in biology and chemistry. Volunteer at a local hospital or nursing home to experience healthcare environments firsthand. Strong grades in science and math are essential for nursing school admission.",
    subjects: ["Honors Biology", "Algebra I/II", "English", "Health Science Elective", "Chemistry"],
    extracurriculars: [
      {
        name: "Hospital Junior Volunteer Program",
        url: "",
        description: "Gain exposure to patient care settings through hospital volunteer programs for teens.",
      },
      {
        name: "HOSA — Future Health Professionals",
        url: "https://hosa.org/",
        description: "National organization for students pursuing healthcare careers, with competitions and leadership opportunities.",
      },
    ],
    supplemental: [
      { name: "Khan Academy: Human Body Systems", url: "https://www.khanacademy.org/science/health-and-medicine", type: "course" },
      { name: "The Spirit Catches You and You Fall Down — Anne Fadiman", url: "", type: "book" },
    ],
  },
  {
    id: "rs19",
    professionId: "p6",
    gradeLevelId: "g14",
    gradeName: "12th Grade",
    gradeShortCode: "12",
    description:
      "Take advanced sciences and consider becoming a Certified Nursing Assistant (CNA) — many high schools offer CNA training programs. Start researching BSN programs. Strong AP scores can earn college credit and shorten your nursing degree path.",
    subjects: ["AP Biology", "AP Chemistry", "AP Psychology", "Statistics", "Anatomy & Physiology"],
    extracurriculars: [
      {
        name: "CNA Certification Program",
        url: "",
        description: "Many community colleges and high schools offer CNA training — get certified and work part-time in healthcare.",
      },
      {
        name: "Medical Explorers Post",
        url: "https://www.exploring.org/medical/",
        description: "Hands-on career exploration program with hospital rotations, mentorship, and clinical shadowing.",
      },
    ],
    supplemental: [
      { name: "American Nurses Association — Student Resources", url: "https://www.nursingworld.org/", type: "article" },
      { name: "Taking Care: The Story of Nursing and Its Power to Change Our World — Sarah DiGregorio", url: "", type: "book" },
    ],
  },
  {
    id: "rs20",
    professionId: "p6",
    gradeLevelId: "g15",
    gradeName: "Undergraduate",
    gradeShortCode: "ugrad",
    description:
      "Pursue a Bachelor of Science in Nursing (BSN) from an accredited program. Complete clinical rotations in medical-surgical, pediatrics, obstetrics, psychiatry, and community health. Prepare for the NCLEX-RN exam to become a licensed Registered Nurse.",
    subjects: ["Anatomy & Physiology", "Microbiology", "Pharmacology", "Nursing Fundamentals", "Clinical Rotations"],
    extracurriculars: [
      {
        name: "National Student Nurses' Association (NSNA)",
        url: "https://www.nsna.org/",
        description: "Professional organization for nursing students with conferences, scholarships, and career resources.",
      },
      {
        name: "Nurse Externship Programs",
        url: "",
        description: "Paid summer programs at hospitals that bridge the gap between student and professional nurse.",
      },
    ],
    supplemental: [
      { name: "NCLEX-RN Prep — UWorld Nursing", url: "https://nursing.uworld.com/nclex/", type: "program" },
      { name: "Coursera: Vital Signs — Understanding What the Body Is Telling Us (UPenn)", url: "https://www.coursera.org/learn/vital-signs", type: "course" },
    ],
  },

  // ── Mechanical Engineer ──────────────────────────────────────
  {
    id: "rs21",
    professionId: "p7",
    gradeLevelId: "g2",
    gradeName: "Kindergarten",
    gradeShortCode: "k",
    description:
      "Mechanical engineering begins with curiosity about how things work! Encourage building with blocks, taking apart safe household items, and asking questions about machines — cars, elevators, bicycles, and appliances.",
    subjects: ["Counting & Shapes", "Building & Construction Play", "Drawing & Design"],
    extracurriculars: [
      {
        name: "LEGO Building Challenges",
        url: "https://www.lego.com/en-us/kids",
        description: "Free building challenges and creative play with LEGO bricks that develop spatial reasoning.",
      },
      {
        name: "Children's Science Museums",
        url: "https://www.astc.org/",
        description: "Find a local hands-on science museum with engineering exhibits for young children.",
      },
    ],
    supplemental: [
      { name: "Rosie Revere, Engineer by Andrea Beaty", url: "", type: "book" },
      { name: "How Machines Work (DK)", url: "", type: "book" },
    ],
  },
  {
    id: "rs22",
    professionId: "p7",
    gradeLevelId: "g7",
    gradeName: "5th Grade",
    gradeShortCode: "5",
    description:
      "Strengthen math skills and explore simple machines — levers, pulleys, gears, and wheels. Join a LEGO robotics club or start experimenting with basic engineering kits. Math confidence at this age is a powerful predictor of future STEM success.",
    subjects: ["Math (Pre-Algebra / Decimals)", "General Science", "Engineering & Design Thinking", "Art (Technical Drawing)"],
    extracurriculars: [
      {
        name: "FIRST LEGO League",
        url: "https://www.firstlegoleague.org/",
        description: "Build and program LEGO robots to solve themed challenges — perfect for aspiring engineers ages 9-14.",
      },
      {
        name: "Engineering for Kids",
        url: "https://engineeringforkids.com/",
        description: "After-school programs and camps introducing mechanical, aerospace, and civil engineering concepts.",
      },
    ],
    supplemental: [
      { name: "Crash Course Kids: Engineering", url: "https://www.youtube.com/playlist?list=PLhz12vamHOnZ4ZDC0dS6C9HRN5Qrm0jHO", type: "video" },
      { name: "The Way Things Work Now by David Macaulay", url: "", type: "book" },
    ],
  },
  {
    id: "rs23",
    professionId: "p7",
    gradeLevelId: "g11",
    gradeName: "9th Grade",
    gradeShortCode: "9",
    description:
      "Take physics and advanced math seriously — these are the languages of engineering. Join a robotics team or engineering club. Start learning CAD (computer-aided design) software like Fusion 360, free for students.",
    subjects: ["Algebra I/II", "Physics (Honors)", "Computer-Aided Design (CAD)", "English (Technical Writing)"],
    extracurriculars: [
      {
        name: "FIRST Robotics Competition (FRC)",
        url: "https://www.firstinspires.org/robotics/frc",
        description: "Build industrial-sized robots and compete with mentorship from professional engineers.",
      },
      {
        name: "SkillsUSA — Engineering Technology",
        url: "https://www.skillsusa.org/",
        description: "Competitions in engineering design, additive manufacturing, and related technical skills.",
      },
    ],
    supplemental: [
      { name: "Autodesk Fusion 360 (Free for Students)", url: "https://www.autodesk.com/education/edu-software/fusion", type: "program" },
      { name: "Khan Academy: Physics", url: "https://www.khanacademy.org/science/physics", type: "course" },
    ],
  },
  {
    id: "rs24",
    professionId: "p7",
    gradeLevelId: "g14",
    gradeName: "12th Grade",
    gradeShortCode: "12",
    description:
      "Take AP Physics C (calculus-based) and AP Calculus — these are direct college prerequisites for mechanical engineering. Build a portfolio of projects (CAD designs, robots, 3D prints). Apply to ABET-accredited engineering programs.",
    subjects: ["AP Physics C: Mechanics", "AP Calculus BC", "Computer Programming (Python/MATLAB)", "AP Chemistry", "Engineering Design Elective"],
    extracurriculars: [
      {
        name: "NASA HUNCH Program",
        url: "https://www.nasahunch.com/",
        description: "High school students design and build real hardware for NASA — from spacecraft components to astronaut equipment.",
      },
      {
        name: "VEX Robotics Competition",
        url: "https://www.vexrobotics.com/competition",
        description: "Design and build robots for annual game-based engineering challenges at the high school level.",
      },
    ],
    supplemental: [
      { name: "MIT OpenCourseWare: Introduction to Heat Transfer", url: "https://ocw.mit.edu/courses/2-051-introduction-to-heat-transfer-spring-2020/", type: "course" },
      { name: "Structures: Or Why Things Don't Fall Down — J.E. Gordon", url: "", type: "book" },
    ],
  },
  {
    id: "rs25",
    professionId: "p7",
    gradeLevelId: "g15",
    gradeName: "Undergraduate",
    gradeShortCode: "ugrad",
    description:
      "Pursue a B.S. in Mechanical Engineering from an ABET-accredited program. Core coursework: thermodynamics, fluid mechanics, heat transfer, machine design, and materials science. Pursue internships every summer — companies like Tesla, Boeing, Ford, and GE hire ME interns aggressively.",
    subjects: ["Thermodynamics", "Fluid Mechanics", "Machine Design", "Materials Science", "Control Systems"],
    extracurriculars: [
      {
        name: "ASME Student Chapter",
        url: "https://www.asme.org/",
        description: "American Society of Mechanical Engineers — student chapters with design competitions, conferences, and networking.",
      },
      {
        name: "Formula SAE / Baja SAE",
        url: "https://www.sae.org/attend/student-events",
        description: "Design, build, and race a formula-style race car or off-road vehicle as an engineering team.",
      },
    ],
    supplemental: [
      { name: "FE Exam Prep (NCEES)", url: "https://ncees.org/engineering/fe/", type: "program" },
      { name: "SolidWorks Student Edition", url: "https://www.solidworks.com/", type: "program" },
    ],
  },

  // ── Pilot ────────────────────────────────────────────────────
  {
    id: "rs26",
    professionId: "p8",
    gradeLevelId: "g2",
    gradeName: "Kindergarten",
    gradeShortCode: "k",
    description:
      "Nurture a love of flight! Read books about airplanes and birds, make paper airplanes, and visit an airport observation deck. The wonder of seeing things fly is the first spark for future pilots.",
    subjects: ["Early Science (Air & Wind)", "Counting & Measurement", "Art (Drawing Planes & Birds)"],
    extracurriculars: [
      {
        name: "Young Eagles Program (EAA)",
        url: "https://www.eaa.org/eaa/youth/free-ye-flights",
        description: "Free introductory airplane flights for kids ages 8-17 — younger children can attend airport events and open houses.",
      },
      {
        name: "Local Air Shows & Airport Open Houses",
        url: "",
        description: "Attend air shows and open houses to see planes up close, meet pilots, and sit in cockpits.",
      },
    ],
    supplemental: [
      { name: "Amazing Airplanes by Tony Mitton", url: "", type: "book" },
      { name: "Sesame Street: Come Fly with Me", url: "https://www.youtube.com/", type: "video" },
    ],
  },
  {
    id: "rs27",
    professionId: "p8",
    gradeLevelId: "g7",
    gradeName: "5th Grade",
    gradeShortCode: "5",
    description:
      "Explore the science of flight — lift, drag, thrust, and weight. Build and fly model airplanes (balsa wood or foam). Many airports have aviation education centers with simulators for kids. Math proficiency is especially important for pilots.",
    subjects: ["Math (Decimals & Fractions)", "General Science (Physics of Flight)", "Geography (Maps & Navigation)", "Physical Education"],
    extracurriculars: [
      {
        name: "Academy of Model Aeronautics (AMA) Youth",
        url: "https://www.modelaircraft.org/",
        description: "Learn to build and fly model aircraft — builds hands-on understanding of aerodynamics and control.",
      },
      {
        name: "Civil Air Patrol Cadet Program (Age 12+)",
        url: "https://www.gocivilairpatrol.com/programs/cadets",
        description: "Aerospace education, leadership training, and free orientation flights for youth 12 and older.",
      },
    ],
    supplemental: [
      { name: "NASA: Four Forces of Flight", url: "https://www.nasa.gov/stem-content/four-forces-of-flight/", type: "article" },
      { name: "Microsoft Flight Simulator (Beginner Mode)", url: "https://www.flightsimulator.com/", type: "program" },
    ],
  },
  {
    id: "rs28",
    professionId: "p8",
    gradeLevelId: "g11",
    gradeName: "9th Grade",
    gradeShortCode: "9",
    description:
      "Take physics and math seriously — pilots need strong applied math skills for navigation and aircraft performance calculations. Join Civil Air Patrol for real orientation flights. Stay physically fit: pilots must pass regular FAA medical exams.",
    subjects: ["Algebra I/II", "Physics", "Geography", "Foreign Language (useful for international flying)", "Physical Education"],
    extracurriculars: [
      {
        name: "Civil Air Patrol (CAP) Cadet Program",
        url: "https://www.gocivilairpatrol.com/",
        description: "Five free orientation flights, aerospace education, leadership development, and emergency services training.",
      },
      {
        name: "Aviation Explorers (Learning for Life)",
        url: "https://www.exploring.org/aviation/",
        description: "Hands-on aviation career exploration including flight simulators, airport tours, and pilot mentorship.",
      },
    ],
    supplemental: [
      { name: "FAA Pilot's Handbook of Aeronautical Knowledge (Free PDF)", url: "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak", type: "book" },
      { name: "Khan Academy: Trigonometry", url: "https://www.khanacademy.org/math/trigonometry", type: "course" },
    ],
  },
  {
    id: "rs29",
    professionId: "p8",
    gradeLevelId: "g14",
    gradeName: "12th Grade",
    gradeShortCode: "12",
    description:
      "Begin formal flight training if possible — you can solo at 16 and earn a Private Pilot License at 17. Take the FAA written exam. Research aviation degree programs vs. modular flight training paths. Consider the military route (Air Force ROTC, Naval Academy) as an alternative path to professional pilot training.",
    subjects: ["AP Physics", "Pre-Calculus / Calculus", "Meteorology / Earth Science Elective", "English (ATC Communication Skills)"],
    extracurriculars: [
      {
        name: "AOPA High School Aviation Initiative",
        url: "https://youcanfly.aopa.org/high-school",
        description: "Free aviation STEM curriculum for high schools, plus scholarship opportunities for flight training.",
      },
      {
        name: "EAA Air Academy",
        url: "https://www.eaa.org/eaa/youth/air-academy",
        description: "Residential summer camp focused on aviation — flight simulators, hands-on building, and pilot experiences for teens.",
      },
    ],
    supplemental: [
      { name: "Sporty's Learn to Fly Course", url: "https://www.sportys.com/learn-to-fly-course.html", type: "course" },
      { name: "FAA Airman Knowledge Testing", url: "https://www.faa.gov/training_testing/testing", type: "article" },
    ],
  },
  {
    id: "rs30",
    professionId: "p8",
    gradeLevelId: "g15",
    gradeName: "Undergraduate",
    gradeShortCode: "ugrad",
    description:
      "Route A: Professional flight degree (B.S. in Aviation, Aeronautical Science) at a university with an FAA Part 141 flight school. Route B: Any bachelor's degree + flight training on the side. Build flight hours — you need 1,500 hours for an Airline Transport Pilot (ATP) certificate. Work as a Certified Flight Instructor (CFI) to build hours while getting paid.",
    subjects: ["Aerodynamics", "Aviation Weather", "Aircraft Systems", "Crew Resource Management", "Flight Training Labs"],
    extracurriculars: [
      {
        name: "Alpha Eta Rho Aviation Fraternity",
        url: "https://www.alphaetarho.org/",
        description: "Professional aviation fraternity with networking, scholarships, and industry connections for student pilots.",
      },
      {
        name: "NIFA SAFECON Flight Team",
        url: "https://www.nifa.aero/",
        description: "Intercollegiate flight competition — precision landings, navigation events, and aircraft recognition.",
      },
    ],
    supplemental: [
      { name: "FAA Medical Certificate — Find an AME", url: "https://www.faa.gov/pilots/amelocator/", type: "program" },
      { name: "Sheppard Air Test Prep", url: "https://www.sheppardair.com/", type: "program" },
    ],
  },

  // ── Veterinarian ──────────────────────────────────────────────
  {
    id: "rs31",
    professionId: "p9",
    gradeLevelId: "g2",
    gradeName: "Kindergarten",
    gradeShortCode: "k",
    description:
      "Build a love for animals! Young children naturally connect with animals — encourage this through pet care responsibilities (feeding, gentle handling), animal-themed books, and visits to zoos, farms, and aquariums. Learning empathy for living creatures is the first step toward becoming a veterinarian.",
    subjects: ["Early Science (Animals & Nature)", "Counting & Sorting", "Social-Emotional Learning"],
    extracurriculars: [
      {
        name: "National Geographic Kids — Animals",
        url: "https://kids.nationalgeographic.com/animals/",
        description: "Free online animal facts, videos, and games for young animal lovers.",
      },
      {
        name: "Local Zoo / Aquarium Youth Programs",
        url: "https://www.aza.org/",
        description: "Find AZA-accredited zoos and aquariums with children's programs and animal encounters.",
      },
    ],
    supplemental: [
      { name: "The Berenstain Bears: Go to the Vet", url: "", type: "book" },
      { name: "Wild Kratts (PBS Kids)", url: "https://pbskids.org/wildkratts/", type: "video" },
    ],
  },
  {
    id: "rs32",
    professionId: "p9",
    gradeLevelId: "g7",
    gradeName: "5th Grade",
    gradeShortCode: "5",
    description:
      "Deepen understanding of animal biology and care. Join a 4-H club to get hands-on experience with animals. Learn the basics of animal anatomy, nutrition, and responsible pet ownership. Start a science journal to record observations about animals in your community.",
    subjects: ["Life Science", "Math (Pre-Algebra)", "Reading & Research Skills", "Health & Nutrition"],
    extracurriculars: [
      {
        name: "4-H Youth Animal Science Programs",
        url: "https://4-h.org/programs/animal-science/",
        description: "Hands-on programs with livestock, companion animals, and veterinary science projects nationwide.",
      },
      {
        name: "ASPCA Kids",
        url: "https://www.aspca.org/",
        description: "Learn about animal welfare, pet care, and advocacy through America's oldest humane organization.",
      },
    ],
    supplemental: [
      { name: "Smithsonian: Animal Anatomy & Adaptations", url: "https://naturalhistory.si.edu/education", type: "article" },
      { name: "National Geographic Kids: Dog Breed Guide", url: "https://kids.nationalgeographic.com/animals/mammals/", type: "article" },
    ],
  },
  {
    id: "rs33",
    professionId: "p9",
    gradeLevelId: "g11",
    gradeName: "9th Grade",
    gradeShortCode: "9",
    description:
      "Start building a strong science foundation — biology and chemistry are essential for veterinary school. Volunteer at an animal shelter or clinic to gain real-world exposure. Veterinary medicine is competitive; strong grades now set the stage for pre-vet college admission.",
    subjects: ["Honors Biology", "Algebra I/II", "Chemistry", "English (Communication Skills)"],
    extracurriculars: [
      {
        name: "Animal Shelter Volunteer Programs",
        url: "https://www.humanesociety.org/",
        description: "Volunteer at a local humane society or animal rescue — essential experience for aspiring vets.",
      },
      {
        name: "Veterinary Science Competitions (FFA/CDE)",
        url: "https://www.ffa.org/participate/cdes/",
        description: "Compete in veterinary science Career Development Events through FFA.",
      },
    ],
    supplemental: [
      { name: "Khan Academy: Biology", url: "https://www.khanacademy.org/science/biology", type: "course" },
      { name: "All Creatures Great and Small — James Herriot", url: "", type: "book" },
    ],
  },
  {
    id: "rs34",
    professionId: "p9",
    gradeLevelId: "g14",
    gradeName: "12th Grade",
    gradeShortCode: "12",
    description:
      "Take advanced sciences — AP Biology and AP Chemistry are particularly valuable. Shadow a veterinarian to confirm your career path and gain clinical observation hours (required for vet school applications). Research pre-vet undergraduate programs and vet school prerequisites.",
    subjects: ["AP Biology", "AP Chemistry", "AP Calculus", "AP English", "Anatomy & Physiology (if available)"],
    extracurriculars: [
      {
        name: "Veterinary Shadowing & Clinical Observation",
        url: "https://www.avma.org/resources/pet-owners/yourvet",
        description: "Shadow practicing veterinarians — most vet schools require documented clinical observation hours.",
      },
      {
        name: "Purdue University Vet Camp",
        url: "https://vet.purdue.edu/engagement/vet-camp.php",
        description: "Summer residential camp exploring the veterinary profession through hands-on activities and labs.",
      },
    ],
    supplemental: [
      { name: "AVMA — Becoming a Veterinarian", url: "https://www.avma.org/resources/pet-owners/yourvet/veterinarians-becoming-veterinarian", type: "article" },
      { name: "Merck Veterinary Manual (Free Online)", url: "https://www.merckvetmanual.com/", type: "book" },
    ],
  },
  {
    id: "rs35",
    professionId: "p9",
    gradeLevelId: "g15",
    gradeName: "Undergraduate",
    gradeShortCode: "ugrad",
    description:
      "Pursue a B.S. in Animal Science, Biology, or Zoology on a pre-veterinary track. Complete all vet school prerequisites (biology, chemistry, organic chemistry, biochemistry, physics, math). Gain 500+ hours of veterinary clinical experience. Prepare for the GRE and start vet school applications through VMCAS.",
    subjects: ["Animal Science / Biology Major", "Organic Chemistry", "Biochemistry", "Microbiology", "Genetics"],
    extracurriculars: [
      {
        name: "Pre-Veterinary Club / APVMA",
        url: "https://www.avma.org/",
        description: "Join your university's pre-vet club — networking, vet school prep, and animal experience opportunities.",
      },
      {
        name: "Veterinary Clinic Employment / Internship",
        url: "",
        description: "Work as a veterinary assistant or kennel tech during summers — hands-on clinical hours are essential.",
      },
    ],
    supplemental: [
      { name: "VMCAS — Vet School Application Service", url: "https://www.aavmc.org/students-applicants-and-advisors/vmcas/", type: "program" },
      { name: "GRE Prep — ETS Official Materials", url: "https://www.ets.org/gre/", type: "program" },
    ],
  },

  // ── Graphic Designer ──────────────────────────────────────────
  {
    id: "rs36",
    professionId: "p10",
    gradeLevelId: "g2",
    gradeName: "Kindergarten",
    gradeShortCode: "k",
    description:
      "Design begins with creative play! Encourage drawing, coloring, and crafting with a wide variety of materials. Point out letters, shapes, and colors in the world around you — on signs, packaging, books, and screens. Every child is a natural visual thinker at this age.",
    subjects: ["Drawing & Coloring", "Shapes & Patterns", "Storytelling Through Pictures"],
    extracurriculars: [
      {
        name: "PBS Kids — Creative Games",
        url: "https://pbskids.org/games/arts/",
        description: "Free creative arts and drawing games for young children to explore color and design.",
      },
      {
        name: "Children's Art Museums & Maker Spaces",
        url: "https://www.childrensmuseums.org/",
        description: "Find local children's museums with hands-on art and design studios for creative exploration.",
      },
    ],
    supplemental: [
      { name: "The Dot by Peter H. Reynolds", url: "", type: "book" },
      { name: "Harold and the Purple Crayon", url: "", type: "book" },
    ],
  },
  {
    id: "rs37",
    professionId: "p10",
    gradeLevelId: "g7",
    gradeName: "5th Grade",
    gradeShortCode: "5",
    description:
      "Expand creative skills with structured art projects. Learn color theory basics, practice lettering and typography, and experiment with composition. Digital tools are accessible now — try kid-friendly design software and start keeping a sketchbook of ideas.",
    subjects: ["Art & Design", "Math (Geometry & Proportions)", "Language Arts (Visual Storytelling)", "Computer Skills"],
    extracurriculars: [
      {
        name: "Canva for Education",
        url: "https://www.canva.com/education/",
        description: "Free design platform for students — create posters, presentations, and social media graphics.",
      },
      {
        name: "Local Art Classes & Summer Camps",
        url: "https://www.arteducators.org/",
        description: "Find community art programs and camps through the National Art Education Association directory.",
      },
    ],
    supplemental: [
      { name: "TinkerLab — Creative Projects for Kids", url: "https://tinkerlab.com/", type: "article" },
      { name: "Art for Kids Hub (YouTube)", url: "https://www.youtube.com/user/ArtforKidsHub", type: "video" },
    ],
  },
  {
    id: "rs38",
    professionId: "p10",
    gradeLevelId: "g11",
    gradeName: "9th Grade",
    gradeShortCode: "9",
    description:
      "Take art and digital design courses seriously. Learn the fundamentals: typography, layout, color theory, and composition. Start using professional tools like Adobe Photoshop and Illustrator. Redesign a local business's logo or menu as a portfolio project.",
    subjects: ["Art & Design I/II", "Computer Graphics", "English (Visual Communication)", "Psychology (User Perception)"],
    extracurriculars: [
      {
        name: "Adobe Creative Cloud (Student Discount)",
        url: "https://www.adobe.com/creativecloud/buy/students.html",
        description: "Professional design tools — Photoshop, Illustrator, InDesign — at a deep student discount.",
      },
      {
        name: "Skillshare — Graphic Design Fundamentals",
        url: "https://www.skillshare.com/",
        description: "Online classes in design thinking, typography, and digital illustration for teens.",
      },
    ],
    supplemental: [
      { name: "The Non-Designer's Design Book — Robin Williams", url: "", type: "book" },
      { name: "Figma (Free Design Tool)", url: "https://www.figma.com/education/", type: "program" },
    ],
  },
  {
    id: "rs39",
    professionId: "p10",
    gradeLevelId: "g14",
    gradeName: "12th Grade",
    gradeShortCode: "12",
    description:
      "Build a strong portfolio of 10-15 pieces showcasing your range — logos, posters, web designs, packaging, and typography projects. Take AP Studio Art if available. Research BFA programs and art schools. Freelance for small clients to get real-world experience.",
    subjects: ["AP Studio Art (2-D Design)", "AP Art History", "Digital Media / Graphic Design Elective", "English (Writing Artist Statements)", "Business / Marketing Elective"],
    extracurriculars: [
      {
        name: "Behance Portfolio Platform",
        url: "https://www.behance.net/",
        description: "Create a professional online portfolio — the industry standard for showcasing design work.",
      },
      {
        name: "AIGA Design Resources for Students",
        url: "https://www.aiga.org/",
        description: "Professional association for design — student memberships, competitions, and mentorship.",
      },
    ],
    supplemental: [
      { name: "National Portfolio Day", url: "https://nationalportfolioday.org/", type: "program" },
      { name: "Thinking with Type — Ellen Lupton", url: "https://www.thinkingwithtype.com/", type: "book" },
    ],
  },
  {
    id: "rs40",
    professionId: "p10",
    gradeLevelId: "g15",
    gradeName: "Undergraduate",
    gradeShortCode: "ugrad",
    description:
      "Pursue a BFA in Graphic Design, Visual Communication, or Communication Design. Build a professional portfolio through studio courses. Pursue internships at design firms, ad agencies, or in-house design departments. Join AIGA and attend design conferences.",
    subjects: ["Typography", "Interaction Design", "Branding & Identity", "Motion Graphics", "Design History & Theory"],
    extracurriculars: [
      {
        name: "AIGA Student Chapters",
        url: "https://www.aiga.org/membership-community/student-groups",
        description: "Join your campus AIGA chapter — portfolio reviews, job fairs, and mentorship from working designers.",
      },
      {
        name: "Design Internships (Summer & Co-op)",
        url: "",
        description: "Intern at design studios, ad agencies, or tech company design teams — critical for landing a first job.",
      },
    ],
    supplemental: [
      { name: "Dribbble — Design Portfolio Community", url: "https://dribbble.com/", type: "program" },
      { name: "The Design of Everyday Things — Don Norman", url: "", type: "book" },
    ],
  },

  // ── Data Scientist ────────────────────────────────────────────
  {
    id: "rs41",
    professionId: "p11",
    gradeLevelId: "g2",
    gradeName: "Kindergarten",
    gradeShortCode: "k",
    description:
      "Data science starts with curiosity and patterns! Encourage sorting, counting, and asking questions about the world. Simple data activities — like charting the weather or counting favorite colors — build the foundation for analytical thinking. Puzzles and logic games develop problem-solving skills.",
    subjects: ["Counting & Sorting", "Pattern Recognition", "Asking Questions About the World"],
    extracurriculars: [
      {
        name: "PBS Kids — Math Games",
        url: "https://pbskids.org/games/math/",
        description: "Free math and logic games that build early analytical thinking and pattern recognition.",
      },
      {
        name: "Local Library STEM Storytimes",
        url: "https://www.ala.org/",
        description: "Many public libraries offer STEM-focused storytime and activity programs for young children.",
      },
    ],
    supplemental: [
      { name: "Rosie Revere, Engineer by Andrea Beaty", url: "", type: "book" },
      { name: "Math Curse by Jon Scieszka", url: "", type: "book" },
    ],
  },
  {
    id: "rs42",
    professionId: "p11",
    gradeLevelId: "g7",
    gradeName: "5th Grade",
    gradeShortCode: "5",
    description:
      "Strengthen math fundamentals and start thinking about data. Collect and graph real data — sports stats, weather patterns, or class survey results. Learn to use spreadsheets for simple calculations. Logic puzzles and brain teasers build the problem-solving mindset of a data scientist.",
    subjects: ["Math (Pre-Algebra & Data)", "General Science", "Computer Literacy", "Logic & Problem Solving"],
    extracurriculars: [
      {
        name: "Code.org — Elementary Courses",
        url: "https://code.org/student/elementary",
        description: "Free coding courses introducing computational thinking — the foundation of data science programming.",
      },
      {
        name: "Math Olympiad / MathCounts",
        url: "https://www.mathcounts.org/",
        description: "Competitive math programs that build advanced problem-solving and analytical reasoning.",
      },
    ],
    supplemental: [
      { name: "Scratch (MIT)", url: "https://scratch.mit.edu/", type: "program" },
      { name: "How to Be a Math Genius (DK)", url: "", type: "book" },
    ],
  },
  {
    id: "rs43",
    professionId: "p11",
    gradeLevelId: "g11",
    gradeName: "9th Grade",
    gradeShortCode: "9",
    description:
      "Start coding in Python — the language of data science. Take statistics and probability seriously. Explore real-world datasets: analyze sports performance, social media trends, or local environmental data. Join a data or coding club to work on projects with peers.",
    subjects: ["Algebra I/II", "Statistics & Probability", "Intro to Computer Science (Python)", "English (Technical Communication)"],
    extracurriculars: [
      {
        name: "Kaggle — Intro to Data Science",
        url: "https://www.kaggle.com/learn",
        description: "Free hands-on data science tutorials and competitions — start with the beginner micro-courses.",
      },
      {
        name: "DataCamp for Students",
        url: "https://www.datacamp.com/",
        description: "Interactive courses in Python, R, SQL, and statistics — learn by doing with real datasets.",
      },
    ],
    supplemental: [
      { name: "CS50x — Harvard's Intro to CS", url: "https://cs50.harvard.edu/x/", type: "course" },
      { name: "Naked Statistics — Charles Wheelan", url: "", type: "book" },
    ],
  },
  {
    id: "rs44",
    professionId: "p11",
    gradeLevelId: "g14",
    gradeName: "12th Grade",
    gradeShortCode: "12",
    description:
      "Take AP Statistics and AP Computer Science — these are the two pillars of data science. Build a data analysis project portfolio: analyze a topic you care about (sports, climate, economics) and publish your findings with visualizations. Apply to data science, statistics, or CS programs.",
    subjects: ["AP Statistics", "AP Computer Science A", "AP Calculus AB/BC", "AP Economics or AP Environmental Science", "Data Analysis Elective"],
    extracurriculars: [
      {
        name: "Data Science for Social Good (High School)",
        url: "https://www.datascienceforsocialgood.org/",
        description: "Apply data science to community problems — build projects with real social impact.",
      },
      {
        name: "American Statistical Association — Student Competitions",
        url: "https://www.amstat.org/",
        description: "ASA competitions and resources for students exploring statistics and data analysis careers.",
      },
    ],
    supplemental: [
      { name: "Python for Everybody (Coursera — University of Michigan)", url: "https://www.coursera.org/specializations/python", type: "course" },
      { name: "Data Science from Scratch — Joel Grus", url: "", type: "book" },
    ],
  },
  {
    id: "rs45",
    professionId: "p11",
    gradeLevelId: "g15",
    gradeName: "Undergraduate",
    gradeShortCode: "ugrad",
    description:
      "Major in Data Science, Statistics, Computer Science, or a quantitative field (math, physics, economics). Master Python/R, SQL, machine learning, and data visualization. Pursue data science internships every summer. Build a GitHub portfolio of independent analysis projects.",
    subjects: ["Data Science / Statistics Major", "Machine Learning", "Database Systems (SQL)", "Linear Algebra", "Data Visualization"],
    extracurriculars: [
      {
        name: "Kaggle Competitions",
        url: "https://www.kaggle.com/competitions",
        description: "Compete in real-world data science challenges — build your skills and your public profile.",
      },
      {
        name: "Data Science Club / Hackathons",
        url: "",
        description: "Join or start a data science club — hackathons and data jams are great for networking and building a portfolio.",
      },
    ],
    supplemental: [
      { name: "Andrew Ng — Machine Learning Specialization (Coursera)", url: "https://www.coursera.org/specializations/machine-learning-introduction", type: "course" },
      { name: "Google Data Analytics Certificate", url: "https://www.coursera.org/professional-certificates/google-data-analytics", type: "program" },
    ],
  },

  // ── Teacher (K-12) ──────────────────────────────────────────
  {
    id: "rs46",
    professionId: "p12",
    gradeLevelId: "g2",
    gradeName: "Kindergarten",
    gradeShortCode: "k",
    description:
      "Great teachers start with a love of learning and helping others.",
    subjects: ["Reading & Phonics", "Counting & Numbers", "Social-Emotional Learning", "Creative Play"],
    extracurriculars: [
      {
        name: "Reading Is Fundamental (RIF)",
        url: "https://www.rif.org/",
        description: "The nation's largest children's literacy nonprofit — provides books and reading resources.",
      },
      {
        name: "PBS Kids",
        url: "https://pbskids.org/",
        description: "Free educational games and videos that build early learning skills.",
      },
    ],
    supplemental: [
      { name: "Miss Nelson Is Missing by Harry Allard", url: "", type: "book" },
    ],
  },
  {
    id: "rs47",
    professionId: "p12",
    gradeLevelId: "g7",
    gradeName: "5th Grade",
    gradeShortCode: "5",
    description:
      "Develop strong communication skills and a broad base of knowledge.",
    subjects: ["English Language Arts", "Math", "Science", "Social Studies"],
    extracurriculars: [
      {
        name: "National Elementary Honor Society",
        url: "https://www.nehs.org/",
        description: "Recognition program for elementary students demonstrating academic excellence and leadership.",
      },
      {
        name: "4-H Youth Development",
        url: "https://4-h.org/",
        description: "Hands-on programs in STEM, leadership, and healthy living for youth nationwide.",
      },
    ],
    supplemental: [
      { name: "Khan Academy", url: "https://www.khanacademy.org/", type: "course" },
    ],
  },
  {
    id: "rs48",
    professionId: "p12",
    gradeLevelId: "g12",
    gradeName: "10th Grade",
    gradeShortCode: "10",
    description:
      "High school is where future teachers can explore their passion.",
    subjects: ["AP English Language", "AP Psychology", "U.S. History", "Speech & Debate", "Child Development"],
    extracurriculars: [
      {
        name: "Educators Rising",
        url: "https://www.educatorsrising.org/",
        description: "National organization for aspiring teachers — competitions, conferences, and classroom experience.",
      },
      {
        name: "National Honor Society Tutoring",
        url: "https://www.nhs.us/",
        description: "Peer tutoring through National Honor Society — practice teaching while serving your school.",
      },
    ],
    supplemental: [
      { name: "Crash Course: Psychology", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtOPRKzVLY0jJY-uHOH9KVU6", type: "video" },
    ],
  },
  {
    id: "rs49",
    professionId: "p12",
    gradeLevelId: "g15",
    gradeName: "Undergraduate",
    gradeShortCode: "ugrad",
    description:
      "Pursue a Bachelor's in Education or subject-area major plus teaching credential.",
    subjects: ["Educational Psychology", "Curriculum Design", "Classroom Management", "Teaching Practicum"],
    extracurriculars: [
      {
        name: "Student NEA",
        url: "https://www.nea.org/",
        description: "National Education Association student program — networking, professional development, and advocacy.",
      },
      {
        name: "Teach For America",
        url: "https://www.teachforamerica.org/",
        description: "Leadership program recruiting top graduates to teach in underserved communities for two years.",
      },
    ],
    supplemental: [
      { name: "Praxis Exam Prep (ETS)", url: "https://www.ets.org/praxis.html", type: "program" },
    ],
  },
  {
    id: "rs50",
    professionId: "p12",
    gradeLevelId: "g16",
    gradeName: "Graduate",
    gradeShortCode: "grad",
    description:
      "A Master's in Education (M.Ed.) deepens expertise and increases earning potential.",
    subjects: ["Advanced Educational Theory", "Data-Driven Instruction", "Special Education Law", "Literacy Intervention"],
    extracurriculars: [
      {
        name: "National Board Certification",
        url: "https://www.nbpts.org/",
        description: "Advanced teaching credential — the gold standard for teacher excellence and professional growth.",
      },
      {
        name: "ASCD",
        url: "https://www.ascd.org/",
        description: "Professional learning community for educators — conferences, publications, and leadership resources.",
      },
    ],
    supplemental: [],
  },

  // ── Teacher (K-12) — remaining grades ──────────────────────
  {
    id: "rs80", professionId: "p12", gradeLevelId: "g1", gradeName: "Pre-K", gradeShortCode: "prek",
    description: "The earliest teaching instincts emerge in imaginative play. Encourage 'playing school,' reading aloud to stuffed animals, and helping younger siblings learn new things. Great teachers start as caring, curious children who love sharing what they know.",
    subjects: ["Early Literacy", "Counting & Sorting", "Imaginative Play", "Social-Emotional Skills"],
    extracurriculars: [
      { name: "Storytime at Local Library", url: "https://www.ala.org/", description: "Weekly library storytimes build early literacy skills and a love of books — the foundation of teaching." },
      { name: "Sesame Street / PBS Kids", url: "https://pbskids.org/", description: "Educational content that models positive teaching, curiosity, and social skills for young children." },
    ],
    supplemental: [
      { name: "The Day the Crayons Quit by Drew Daywalt", url: "", type: "book" },
      { name: "Chicka Chicka Boom Boom by Bill Martin Jr.", url: "", type: "book" },
    ],
  },
  {
    id: "rs81", professionId: "p12", gradeLevelId: "g3", gradeName: "1st Grade", gradeShortCode: "1",
    description: "Build foundational reading and math skills — the core subjects future teachers will one day teach. Practice explaining ideas to friends and family. The best teachers remember what it felt like to learn something for the first time.",
    subjects: ["Reading (Phonics & Sight Words)", "Math (Addition & Subtraction)", "Science Exploration", "Handwriting & Writing"],
    extracurriculars: [
      { name: "Reading Partners", url: "https://readingpartners.org/", description: "Literacy tutoring program where students build reading skills with community volunteers." },
      { name: "Junior Achievement", url: "https://www.juniorachievement.org/", description: "Programs teaching work readiness, financial literacy, and community engagement from an early age." },
    ],
    supplemental: [
      { name: "Epic! Digital Library for Kids", url: "https://www.getepic.com/", type: "program" },
      { name: "Starfall Education", url: "https://www.starfall.com/", type: "program" },
    ],
  },
  {
    id: "rs82", professionId: "p12", gradeLevelId: "g4", gradeName: "2nd Grade", gradeShortCode: "2",
    description: "Reading comprehension blossoms — a critical skill for future educators. Start keeping a reading journal and practice explaining concepts to classmates. Notice how different teachers explain things and what makes some explanations clearer than others.",
    subjects: ["Reading Comprehension", "Math (Place Value & Measurement)", "Science (Hands-On Inquiry)", "Cursive & Writing"],
    extracurriculars: [
      { name: "Odyssey of the Mind", url: "https://www.odysseyofthemind.com/", description: "Creative problem-solving competition that develops collaboration, critical thinking, and presentation skills." },
      { name: "Local Children's Theatre", url: "", description: "Drama programs develop confidence, public speaking, and storytelling ability — all essential teaching skills." },
    ],
    supplemental: [
      { name: "BrainPOP Jr.", url: "https://jr.brainpop.com/", type: "program" },
      { name: "ABCmouse", url: "https://www.abcmouse.com/", type: "program" },
    ],
  },
  {
    id: "rs83", professionId: "p12", gradeLevelId: "g5", gradeName: "3rd Grade", gradeShortCode: "3",
    description: "The year students transition from 'learning to read' to 'reading to learn.' Practice peer tutoring — helping classmates understand concepts. These early teaching moments reveal whether education might be your calling.",
    subjects: ["Reading (Chapter Books & Nonfiction)", "Math (Multiplication & Division)", "Science (Simple Experiments)", "Social Studies"],
    extracurriculars: [
      { name: "Scripps National Spelling Bee", url: "https://spellingbee.com/", description: "Build vocabulary and public speaking through spelling competitions." },
      { name: "After-School Homework Helper", url: "", description: "Volunteer or informally help younger students with homework — early teaching practice." },
    ],
    supplemental: [
      { name: "Prodigy Math Game", url: "https://www.prodigygame.com/", type: "program" },
      { name: "National Geographic Kids", url: "https://kids.nationalgeographic.com/", type: "article" },
    ],
  },
  {
    id: "rs84", professionId: "p12", gradeLevelId: "g6", gradeName: "4th Grade", gradeShortCode: "4",
    description: "Develop research and presentation skills — the backbone of teaching. Create mini-lessons on topics you're passionate about and present them to family or classmates. Notice how the best teachers make complex ideas simple and engaging.",
    subjects: ["English Language Arts", "Math (Fractions & Geometry)", "Science (Scientific Method)", "State History"],
    extracurriculars: [
      { name: "Destination Imagination", url: "https://www.destinationimagination.org/", description: "Team-based creative challenges in STEM, arts, and service learning — develops facilitation skills." },
      { name: "Student Council", url: "", description: "Early leadership experience — organize school events, represent classmates, and practice public speaking." },
    ],
    supplemental: [
      { name: "Mystery Science", url: "https://mysteryscience.com/", type: "course" },
      { name: "Wonderopolis", url: "https://wonderopolis.org/", type: "article" },
    ],
  },
  {
    id: "rs85", professionId: "p12", gradeLevelId: "g8", gradeName: "6th Grade", gradeShortCode: "6",
    description: "Middle school brings new academic depth and social complexity — great teachers understand both. Join peer mentoring programs to practice guiding others. Pay attention to how teachers manage classrooms and support students through challenges.",
    subjects: ["English (Literary Analysis)", "Pre-Algebra", "Earth & Life Science", "Ancient Civilizations"],
    extracurriculars: [
      { name: "Middle School Peer Tutoring", url: "", description: "Volunteer to tutor younger or struggling students — authentic early teaching experience that builds patience and communication." },
      { name: "National Junior Honor Society", url: "https://www.njhs.us/", description: "Recognition for scholarship, service, leadership, character, and citizenship in middle school." },
    ],
    supplemental: [
      { name: "Crash Course: World History", url: "https://www.youtube.com/playlist?list=PLBDA2E52FB1EF80C9", type: "video" },
      { name: "The First Days of School — Harry Wong", url: "", type: "book" },
    ],
  },
  {
    id: "rs86", professionId: "p12", gradeLevelId: "g9", gradeName: "7th Grade", gradeShortCode: "7",
    description: "Deepen subject-matter knowledge across all core areas. Volunteer as a classroom helper, library aide, or after-school program assistant. Broad knowledge and genuine enthusiasm for helping others learn are the foundation of great teaching.",
    subjects: ["English (Essay Writing)", "Pre-Algebra / Algebra Readiness", "Life Science", "World Geography"],
    extracurriculars: [
      { name: "Library Volunteer Program", url: "", description: "Help at the school or public library — organizing, reading to children, and assisting patrons." },
      { name: "Youth Mentoring Programs (Big Brothers Big Sisters)", url: "https://www.bbbs.org/", description: "Formal mentoring relationships develop the patience, empathy, and communication skills essential to teaching." },
    ],
    supplemental: [
      { name: "Khan Academy: Grammar", url: "https://www.khanacademy.org/humanities/grammar", type: "course" },
      { name: "TED-Ed", url: "https://ed.ted.com/", type: "video" },
    ],
  },
  {
    id: "rs87", professionId: "p12", gradeLevelId: "g10", gradeName: "8th Grade", gradeShortCode: "8",
    description: "Begin thinking about which age group and subject you might want to teach. Observe your own teachers analytically — what makes some lessons engaging? Which classroom management techniques work best? Start keeping a teaching ideas journal.",
    subjects: ["English (Persuasive Writing)", "Algebra I", "Physical Science", "U.S. History"],
    extracurriculars: [
      { name: "Camp Counselor / Junior Counselor", url: "", description: "Summer camp leadership — planning activities, managing groups, and mentoring younger campers develops core teaching competencies." },
      { name: "Debate Team / Speech Club", url: "", description: "Develop argumentation, research, and public speaking skills directly transferable to classroom teaching." },
    ],
    supplemental: [
      { name: "Teach Like a Champion 3.0 — Doug Lemov", url: "", type: "book" },
      { name: "Cult of Pedagogy Blog & Podcast", url: "https://www.cultofpedagogy.com/", type: "article" },
    ],
  },
  {
    id: "rs88", professionId: "p12", gradeLevelId: "g11", gradeName: "9th Grade", gradeShortCode: "9",
    description: "High school offers first formal explorations of teaching. Take Child Development, Psychology, or Teaching electives if offered. Start volunteering as a tutor or classroom aide at a local elementary school. Future teachers need strong academic records for competitive teacher preparation programs.",
    subjects: ["English I", "Algebra I / Geometry", "Biology", "Child Development / Psychology (elective)", "World Language"],
    extracurriculars: [
      { name: "Educators Rising", url: "https://www.educatorsrising.org/", description: "National career and technical student organization for aspiring educators — competitions, conferences, and classroom field experience." },
      { name: "Peer Tutoring / Homework Help Club", url: "", description: "Regular tutoring develops teaching skills, patience, and the ability to explain concepts from multiple angles." },
    ],
    supplemental: [
      { name: "Why Don't Students Like School? — Daniel Willingham", url: "", type: "book" },
      { name: "Crash Course: Psychology", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtOPRKzVLY0jJY-uHOH9KVU6", type: "video" },
    ],
  },
  {
    id: "rs89", professionId: "p12", gradeLevelId: "g13", gradeName: "11th Grade", gradeShortCode: "11",
    description: "Take AP courses in subjects you might want to teach — English, History, Psychology, or Sciences. Explore dual-enrollment at local colleges for early education coursework. Build a strong academic record for competitive teacher preparation programs.",
    subjects: ["AP English Literature / Language", "AP U.S. History / Government", "Algebra II / Pre-Calculus", "AP Psychology", "Teaching / Tutoring Internship"],
    extracurriculars: [
      { name: "Boys & Girls Club Youth Development Professional", url: "https://www.bgca.org/", description: "Mentor and tutor younger children in after-school programs — hands-on teaching experience in a structured setting." },
      { name: "Future Teachers of America / Teaching Academy", url: "", description: "School-based club for students exploring education careers — classroom observations, guest speakers, and mini-teaching opportunities." },
    ],
    supplemental: [
      { name: "Edutopia — Teaching Strategies", url: "https://www.edutopia.org/", type: "article" },
      { name: "The Courage to Teach — Parker Palmer", url: "", type: "book" },
    ],
  },
  {
    id: "rs90", professionId: "p12", gradeLevelId: "g14", gradeName: "12th Grade", gradeShortCode: "12",
    description: "Apply to colleges with strong teacher preparation programs. Look for programs offering a Bachelor's + Credential in 4 years. Some states offer 'Grow Your Own' teacher pipeline programs. Take the SAT/ACT and prepare strong application essays about why you want to teach.",
    subjects: ["AP English Literature", "AP Government / Civics", "Statistics", "Education Internship / Cadet Teaching", "Foreign Language"],
    extracurriculars: [
      { name: "America Reads / America Counts", url: "https://americorps.gov/", description: "Federal work-study tutoring program in many school districts — paid experience working with K-6 students on literacy and math." },
      { name: "Senior Capstone: Design & Teach a Lesson", url: "", description: "Design and teach a full lesson in a community or school setting — document the experience for college applications and scholarship essays." },
    ],
    supplemental: [
      { name: "Teach.org — Pathways to Teaching", url: "https://www.teach.org/", type: "article" },
    ],
  },
  {
    id: "rs91", professionId: "p12", gradeLevelId: "g17", gradeName: "PhD / Doctoral", gradeShortCode: "phd",
    description: "A Ph.D. in Education (Curriculum & Instruction, Education Policy, or subject-specific education) opens doors to university teaching, district leadership, and education research. Ed.D. programs focus on practitioner scholarship — applying research to solve real school problems as a superintendent, principal, or curriculum director.",
    subjects: ["Advanced Research Methods", "Education Policy Analysis", "Curriculum Theory & Design", "Dissertation Research", "Higher Education Teaching"],
    extracurriculars: [
      { name: "AERA (American Educational Research Association)", url: "https://www.aera.net/", description: "The premier scholarly organization for education researchers — annual conference, journals, and professional networking." },
      { name: "University Teaching Fellowship", url: "", description: "Teach undergraduate education courses while completing doctoral work — builds college-level teaching experience." },
    ],
    supplemental: [
      { name: "National Center for Education Statistics (NCES)", url: "https://nces.ed.gov/", type: "article" },
    ],
  },
  // ── Dentist ─────────────────────────────────────────────────
  {
    id: "rs63", professionId: "p13", gradeLevelId: "g1", gradeName: "Pre-K", gradeShortCode: "prek",
    description: "Healthy smiles start early! Teach your child about brushing teeth, visiting the dentist, and why we take care of our mouths. Make dental care fun with songs, stories, and colorful toothbrushes. Positive early experiences at the dentist build a lifetime of oral health habits.",
    subjects: ["Health & Hygiene", "Counting (Teeth!)", "Colors & Shapes", "Following Instructions"],
    extracurriculars: [
      { name: "American Dental Association — Kids' Corner", url: "https://www.mouthhealthy.org/", description: "Free games, videos, and activities teaching children about oral health in a fun, engaging way." },
      { name: "Local Dentist Office Tour", url: "", description: "Many pediatric dentists offer 'happy visits' — fun, no-treatment tours of the office to build comfort and familiarity." },
    ],
    supplemental: [
      { name: "The Berenstain Bears Visit the Dentist", url: "", type: "book" },
      { name: "Brush Your Teeth Please (pop-up book)", url: "", type: "book" },
    ],
  },
  {
    id: "rs64", professionId: "p13", gradeLevelId: "g2", gradeName: "Kindergarten", gradeShortCode: "k",
    description: "Build fine motor skills and scientific curiosity — both essential for future dentists. Drawing, cutting, and crafting develop the manual dexterity needed in dentistry. Explore how the body works with age-appropriate science activities.",
    subjects: ["Fine Motor Skills (Drawing & Crafts)", "Counting & Sorting", "Basic Anatomy", "Reading"],
    extracurriculars: [
      { name: "Colgate Bright Smiles, Bright Futures", url: "https://www.colgate.com/en-us/oral-health-education", description: "Free dental health education program for schools with activities, videos, and take-home materials." },
      { name: "Children's Museum Health Exhibits", url: "https://www.childrensmuseums.org/", description: "Interactive health and body exhibits at children's museums — many have dentist-office role-play areas." },
    ],
    supplemental: [
      { name: "Just Going to the Dentist by Mercer Mayer", url: "", type: "book" },
    ],
  },
  {
    id: "rs65", professionId: "p13", gradeLevelId: "g3", gradeName: "1st Grade", gradeShortCode: "1",
    description: "Develop strong personal health habits and scientific curiosity. Learn about teeth — how many we have, what they're called, and why baby teeth fall out. Practice explaining health concepts to friends and family to build early communication skills.",
    subjects: ["Reading & Writing", "Math (Addition & Subtraction)", "Health Science", "Art (Model Building)"],
    extracurriculars: [
      { name: "4-H Healthy Living Programs", url: "https://4-h.org/programs/healthy-living/", description: "Youth programs teaching health, nutrition, and wellness with hands-on activities." },
      { name: "Dental Health Month Activities (February)", url: "https://www.ada.org/", description: "National Children's Dental Health Month — schools and libraries host special dental health programs each February." },
    ],
    supplemental: [
      { name: "Throw Your Tooth on the Roof — Selby Beeler", url: "", type: "book" },
    ],
  },
  {
    id: "rs66", professionId: "p13", gradeLevelId: "g4", gradeName: "2nd Grade", gradeShortCode: "2",
    description: "Strengthen fine motor control through art, handwriting, and building projects. Start learning basic biology concepts — cells, tissues, and how living things grow. Future dentists need steady hands and a fascination with how living organisms work.",
    subjects: ["Reading Comprehension", "Math (Measurement)", "Life Science (Basic Biology)", "Art & Craftsmanship"],
    extracurriculars: [
      { name: "LEGO / Model Building Clubs", url: "", description: "Building detailed models develops the precision and fine motor skills essential in dentistry." },
      { name: "Origami & Paper Craft", url: "", description: "Paper folding builds extraordinary hand precision, patience, and attention to detail." },
    ],
    supplemental: [
      { name: "The Skeleton Inside You — Philip Balestrino", url: "", type: "book" },
    ],
  },
  {
    id: "rs67", professionId: "p13", gradeLevelId: "g5", gradeName: "3rd Grade", gradeShortCode: "3",
    description: "Explore the human body in more depth — the skeletal system, how bones grow, and what teeth are made of. Practice precision work: drawing detailed pictures, building intricate models, and doing careful measurements in science experiments.",
    subjects: ["Reading (Nonfiction)", "Math (Multiplication & Division)", "Science (Human Body Systems)", "Art (Detailed Drawing)"],
    extracurriculars: [
      { name: "Science Fair — Human Body Projects", url: "", description: "Enter a school science fair with a project about teeth, bones, or oral health — great early research experience." },
      { name: "Jewelry Making / Beading", url: "", description: "Small-scale detailed craft work builds the precision manual dexterity that dentistry demands." },
    ],
    supplemental: [
      { name: "KidsHealth.org — Your Teeth", url: "https://kidshealth.org/en/kids/teeth.html", type: "article" },
    ],
  },
  {
    id: "rs68", professionId: "p13", gradeLevelId: "g6", gradeName: "4th Grade", gradeShortCode: "4",
    description: "Deepen understanding of biology and chemistry foundations. Excellent dentists combine scientific knowledge with artistic skill. Continue developing hand skills through art, music (instruments), or detailed craftwork. Start a science journal.",
    subjects: ["English Language Arts", "Math (Fractions & Geometry)", "Life Science", "Art / Music (Manual Dexterity)"],
    extracurriculars: [
      { name: "Learn a Musical Instrument", url: "", description: "Playing piano, violin, or guitar develops extraordinary finger dexterity — directly applicable to dental procedures." },
      { name: "Junior First Aid / CPR Course", url: "https://www.redcross.org/", description: "Basic first aid courses for kids build comfort with healthcare concepts and helping others." },
    ],
    supplemental: [
      { name: "The Way We Work — David Macaulay", url: "", type: "book" },
    ],
  },
  {
    id: "rs69", professionId: "p13", gradeLevelId: "g7", gradeName: "5th Grade", gradeShortCode: "5",
    description: "Science and math foundations become critical. Focus on biology and chemistry readiness. Join a health or science club. Continue developing fine motor precision — consider hobbies like model-building, detailed drawing, or playing a musical instrument.",
    subjects: ["Math (Pre-Algebra)", "General Science (Biology & Chemistry Intro)", "Health Education", "Art / Music"],
    extracurriculars: [
      { name: "FIRST LEGO League", url: "https://www.firstlegoleague.org/", description: "Building and programming LEGO robots develops precision, problem-solving, and teamwork — all relevant to dentistry." },
      { name: "American Red Cross Babysitting Course", url: "https://www.redcross.org/take-a-class/babysitting", description: "Learn basic first aid, safety, and how to care for others — early healthcare experience for ages 11+." },
    ],
    supplemental: [
      { name: "Khan Academy: Human Body Systems", url: "https://www.khanacademy.org/science/health-and-medicine", type: "course" },
    ],
  },
  {
    id: "rs70", professionId: "p13", gradeLevelId: "g8", gradeName: "6th Grade", gradeShortCode: "6",
    description: "Middle school science deepens — pay special attention to biology and chemistry units. Shadow a dentist if possible (many family dentists welcome interested students). Start thinking about the blend of science, art, and people skills that makes dentistry unique.",
    subjects: ["English (Technical Reading)", "Pre-Algebra", "Life Science", "Art / Design"],
    extracurriculars: [
      { name: "Dental Office Shadowing (Intro)", url: "", description: "Ask your family dentist if you can observe for a few hours — most are happy to mentor interested students." },
      { name: "Science Club / STEM Club", url: "", description: "Join or start a science club to explore biology, chemistry, and health science topics beyond the classroom." },
    ],
    supplemental: [
      { name: "American Dental Association — Becoming a Dentist", url: "https://www.ada.org/en/education-careers", type: "article" },
    ],
  },
  {
    id: "rs71", professionId: "p13", gradeLevelId: "g9", gradeName: "7th Grade", gradeShortCode: "7",
    description: "Biology becomes more detailed — focus on anatomy, cells, and body systems. Dentists need a strong grasp of human biology. Continue developing manual dexterity through art, music, or craft hobbies. Good grades in science and math are essential for pre-dental college admission.",
    subjects: ["English (Scientific Writing)", "Pre-Algebra / Algebra", "Life Science (Anatomy Focus)", "Art / Music (Hand Skills)"],
    extracurriculars: [
      { name: "HOSA — Future Health Professionals (Middle School)", url: "https://hosa.org/", description: "Start a HOSA chapter or participate in health science competitions — dental terminology and skills events." },
      { name: "Community Health Fairs (Volunteer)", url: "", description: "Volunteer at health fairs and community wellness events — exposure to healthcare professions and patient interaction." },
    ],
    supplemental: [
      { name: "Crash Course: Anatomy & Physiology", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtOAKed_MxxWBNaPno5h3Zs8", type: "video" },
    ],
  },
  {
    id: "rs72", professionId: "p13", gradeLevelId: "g10", gradeName: "8th Grade", gradeShortCode: "8",
    description: "Take the most advanced science and math available. Strong algebra skills are essential — dental school requires excellent quantitative reasoning. Continue shadowing opportunities and consider volunteering at a dental clinic or health fair.",
    subjects: ["English (Communication Skills)", "Algebra I", "Physical Science / Intro Chemistry", "Health / Biology Elective"],
    extracurriculars: [
      { name: "Dental Assistant Exploration", url: "", description: "Some dental offices let mature middle school students observe procedures — call local offices to inquire about observation opportunities." },
      { name: "Model UN / Debate", url: "", description: "Builds communication and people skills — dentists spend all day talking with patients and explaining procedures clearly." },
    ],
    supplemental: [
      { name: "Khan Academy: Chemistry", url: "https://www.khanacademy.org/science/chemistry", type: "course" },
    ],
  },
  {
    id: "rs73", professionId: "p13", gradeLevelId: "g11", gradeName: "9th Grade", gradeShortCode: "9",
    description: "High school academics directly impact dental school admission. Take Honors Biology and start building a strong science GPA. Dentistry requires both academic excellence and manual artistry — continue developing both. Research pre-dental college programs.",
    subjects: ["Honors Biology", "Algebra I/II", "English (Communication)", "Art / Sculpture (3D Visualization)", "Foreign Language"],
    extracurriculars: [
      { name: "HOSA — Future Health Professionals", url: "https://hosa.org/", description: "Join the dental science competitive events — dental terminology, dental spelling, and clinical skills competitions." },
      { name: "Volunteer at Dental Clinics / Health Fairs", url: "", description: "Seek volunteer opportunities at community dental clinics, Mission of Mercy events, or free dental care days." },
    ],
    supplemental: [
      { name: "ADEA — Explore Careers in Dentistry", url: "https://www.adea.org/GoDental/", type: "article" },
      { name: "Khan Academy: Biology", url: "https://www.khanacademy.org/science/biology", type: "course" },
    ],
  },
  {
    id: "rs74", professionId: "p13", gradeLevelId: "g12", gradeName: "10th Grade", gradeShortCode: "10",
    description: "Take AP Biology or AP Chemistry — strong AP scores demonstrate science readiness to colleges. Start preparing for college pre-dental programs. Continue shadowing dentists and consider a summer dental camp or health careers program.",
    subjects: ["AP Biology / Honors Chemistry", "Geometry / Algebra II", "English (Technical Writing)", "Art / Ceramics (Manual Dexterity)", "Psychology (Patient Communication)"],
    extracurriculars: [
      { name: "Summer Dental Camp / Health Careers Program", url: "", description: "Many dental schools offer summer programs for high school students — hands-on exposure to dental procedures and technology." },
      { name: "Dental Office Volunteer / Sterilization Tech", url: "", description: "Some dental offices hire or volunteer high school students to help with sterilization and office tasks — invaluable real-world exposure." },
    ],
    supplemental: [
      { name: "American Student Dental Association — Pre-Dental Resources", url: "https://www.asdanet.org/", type: "article" },
    ],
  },
  {
    id: "rs75", professionId: "p13", gradeLevelId: "g13", gradeName: "11th Grade", gradeShortCode: "11",
    description: "The most critical year for college preparation. Take AP Biology and AP Chemistry. Start researching pre-dental programs at universities. Begin preparing for the SAT/ACT. Shadow general dentists AND specialists (orthodontist, oral surgeon) to understand the breadth of the field.",
    subjects: ["AP Biology", "AP Chemistry", "Pre-Calculus / Trigonometry", "English (Writing Skills)", "AP Psychology"],
    extracurriculars: [
      { name: "Dental Shadowing — General & Specialty Practices", url: "", description: "Shadow at least 3 different dentists — general, orthodontics, oral surgery — to understand different career paths." },
      { name: "Pre-Dental Summer Programs (University-Based)", url: "https://www.adea.org/GoDental/", description: "Apply to university summer programs like UConn's 'A Taste of Dental Medicine' or similar pre-dental immersion experiences." },
    ],
    supplemental: [
      { name: "DAT (Dental Admission Test) — Preview Resources", url: "https://www.ada.org/en/education-careers/dental-admission-test", type: "article" },
    ],
  },
  {
    id: "rs76", professionId: "p13", gradeLevelId: "g14", gradeName: "12th Grade", gradeShortCode: "12",
    description: "Apply to universities with strong pre-dental advising programs. Some offer combined BS/DDS programs (7-8 years total). Keep shadowing dentists and volunteering. Take AP exams — high scores can earn college science credit and strengthen dental school applications years later.",
    subjects: ["AP Biology", "AP Chemistry", "AP Calculus AB", "Anatomy & Physiology", "English (College Essays)"],
    extracurriculars: [
      { name: "Mission of Mercy Dental Volunteer", url: "https://www.americasdentists.org/", description: "Volunteer at large-scale free dental clinics — hundreds of patients treated in a weekend, eye-opening healthcare experience." },
      { name: "Apply to BS/DDS Combined Programs", url: "", description: "Research and apply to accelerated dental programs that combine undergraduate and dental school into 7-8 years." },
    ],
    supplemental: [
      { name: "Kaplan DAT Prep (Preview)", url: "https://www.kaptest.com/dat", type: "program" },
    ],
  },
  {
    id: "rs77", professionId: "p13", gradeLevelId: "g15", gradeName: "Undergraduate", gradeShortCode: "ugrad",
    description: "Major in biology, chemistry, or biochemistry on a pre-dental track. Complete dental school prerequisites (biology, general chemistry, organic chemistry, physics, biochemistry). Maintain 3.5+ GPA. Shadow dentists across specialties (100+ hours recommended). Take the DAT (Dental Admission Test) — typically junior year.",
    subjects: ["Biology / Chemistry Major", "Organic Chemistry", "Physics with Lab", "Biochemistry", "Anatomy & Physiology"],
    extracurriculars: [
      { name: "Pre-Dental Society / ASDA Chapter", url: "https://www.asdanet.org/", description: "Join your university's pre-dental club — networking, DAT prep groups, dental school visits, and mentorship from dental students." },
      { name: "Dental Research Assistant", url: "", description: "Work in a dental materials or oral biology research lab — research experience strengthens dental school applications significantly." },
      { name: "Community Dental Clinic Volunteer", url: "", description: "Regular volunteering at free or low-cost dental clinics demonstrates commitment to serving underserved populations." },
    ],
    supplemental: [
      { name: "DAT Prep — DAT Bootcamp / DAT Destroyer", url: "https://datbootcamp.com/", type: "program" },
      { name: "ADEA AADSAS — Dental School Application", url: "https://www.adea.org/AADSAS/", type: "program" },
    ],
  },
  {
    id: "rs78", professionId: "p13", gradeLevelId: "g16", gradeName: "Graduate", gradeShortCode: "grad",
    description: "Dental school (DDS or DMD): 4 years. Years 1-2: classroom and lab — anatomy, pathology, pharmacology, dental materials, and pre-clinical skills. Years 3-4: clinical rotations treating real patients under supervision. Pass National Board Dental Exams (NBDE) Parts I & II. Take regional clinical licensing exams.",
    subjects: ["Dental Anatomy & Occlusion", "Oral Pathology", "Restorative Dentistry", "Periodontology", "Clinical Rotations (All Specialties)"],
    extracurriculars: [
      { name: "ASDA (American Student Dental Association)", url: "https://www.asdanet.org/", description: "National organization for dental students — advocacy, networking, and professional development." },
      { name: "Community Dental Outreach / Mission Trips", url: "", description: "Participate in organized dental mission trips providing care in underserved communities domestically and internationally." },
    ],
    supplemental: [
      { name: "NBDE Study Materials — Board Vitals / Dental Boards Mastery", url: "", type: "program" },
      { name: "ADA — Licensure & Continuing Education", url: "https://www.ada.org/", type: "article" },
    ],
  },
  {
    id: "rs79", professionId: "p13", gradeLevelId: "g17", gradeName: "PhD / Doctoral", gradeShortCode: "phd",
    description: "Post-doctoral options: 1-year General Practice Residency (GPR) or Advanced Education in General Dentistry (AEGD). Specialization requires 2-6 year residencies: Orthodontics, Oral Surgery (MD/DDS), Endodontics, Periodontics, Pediatric Dentistry, Prosthodontics. Ph.D. in Oral Biology or Dental Sciences for academic/research careers.",
    subjects: ["Chosen Specialty: Advanced Clinical Training", "Board Certification Preparation", "Research Methods (for Ph.D. track)", "Practice Management", "Teaching & Supervision"],
    extracurriculars: [
      { name: "American Dental Association — New Dentist Committee", url: "https://www.ada.org/", description: "Leadership development and networking for dentists in their first 10 years of practice." },
      { name: "Specialty Board Certification", url: "", description: "Pursue board certification in your chosen specialty — the highest credential recognizing expertise and commitment to excellence." },
    ],
    supplemental: [
      { name: "Journal of the American Dental Association (JADA)", url: "https://jada.ada.org/", type: "article" },
    ],
  },
  ...extraRoadmapSteps,
  ...remainingRoadmapSteps,
  ...missingRoadmapSteps,
];

const professionals: Professional[] = [
  {
    id: "pro1",
    name: "Dr. Mae Jemison",
    title: "NASA Astronaut & Physician",
    professionId: "p1",
    professionName: "Astronaut",
    bio: "First African-American woman in space. Engineer, physician, and former NASA astronaut who flew aboard the Space Shuttle Endeavour in 1992. Also a dancer, Peace Corps medical officer, and founder of the 100 Year Starship initiative.",
    pathBackground: "Earned a B.S. in Chemical Engineering from Stanford and an M.D. from Cornell. Served as a Peace Corps Medical Officer in West Africa. Selected by NASA in 1987. Flew one mission (STS-47) logging 190+ hours in space. Left NASA in 1993 to found her own technology research company.",
    photoUrl: "",
  },
  {
    id: "pro2",
    name: "Guillermo Rauch",
    title: "Founder & CEO of Vercel",
    professionId: "p2",
    professionName: "Software Engineer",
    bio: "Creator of Next.js and Socket.io. Founded Vercel, the cloud platform that powers over 1 million web projects. Started coding as a teenager in Argentina and built open-source tools used by millions of developers worldwide.",
    pathBackground: "Self-taught programmer who started building open-source JavaScript tools as a teen in Buenos Aires. Created Socket.io at 18, then co-created Next.js. Founded Vercel (formerly Zeit) to simplify web deployment. Built one of the most influential companies in modern web development without a traditional CS degree.",
    photoUrl: "",
  },
  {
    id: "pro3",
    name: "Dr. Anthony Fauci",
    title: "Physician & Immunologist",
    professionId: "p3",
    professionName: "Doctor",
    bio: "Director of the National Institute of Allergy and Infectious Diseases (NIAID) from 1984 to 2022. Led the U.S. response to HIV/AIDS, Ebola, and COVID-19. One of the most cited medical researchers in the world.",
    pathBackground: "B.A. in Classics from College of the Holy Cross (pre-med). M.D. from Cornell University Medical College — graduated first in his class. Completed residency and fellowship at New York Hospital-Cornell Medical Center. Joined NIH in 1968 and rose to lead NIAID. Advised seven U.S. presidents on public health.",
    photoUrl: "",
  },
  {
    id: "pro4",
    name: "Jeanne Gang",
    title: "Architect & MacArthur Fellow",
    professionId: "p4",
    professionName: "Architect",
    bio: "Founding principal of Studio Gang, an architecture and urban design practice. MacArthur 'Genius Grant' recipient known for innovative designs like Chicago's Aqua Tower. Named one of TIME's 100 Most Influential People.",
    pathBackground: "B.S. in Architecture from University of Illinois Urbana-Champaign. M.Arch from Harvard Graduate School of Design. Worked at OMA/Rem Koolhaas in Rotterdam. Founded Studio Gang in 1997. Designed iconic sustainable buildings including Aqua Tower, Writer's Theatre, and the new U.S. Embassy in Brasilia.",
    photoUrl: "",
  },
  {
    id: "pro5",
    name: "Sonia Sotomayor",
    title: "U.S. Supreme Court Justice",
    professionId: "p5",
    professionName: "Lawyer",
    bio: "First Latina Supreme Court Justice. Appointed by President Obama in 2009. Previously served on the U.S. Court of Appeals for the Second Circuit. Her journey from a Bronx housing project to the highest court inspires millions.",
    pathBackground: "B.A. summa cum laude from Princeton University. J.D. from Yale Law School (editor of Yale Law Journal). Assistant District Attorney in Manhattan. Commercial litigator at Pavia & Harcourt. U.S. District Court Judge (appointed by George H.W. Bush). U.S. Court of Appeals Judge (appointed by Bill Clinton). U.S. Supreme Court Justice since 2009.",
    photoUrl: "",
  },
  {
    id: "pro6",
    name: "Florence Nightingale",
    title: "Founder of Modern Nursing",
    professionId: "p6",
    professionName: "Nurse",
    bio: "The founder of modern nursing. During the Crimean War, Nightingale organized care for wounded soldiers and dramatically reduced death rates through sanitation and hygiene reforms. She established the first scientifically based nursing school at St Thomas' Hospital in London and was the first woman awarded the Order of Merit.",
    pathBackground: "Born into a wealthy British family, Nightingale felt called to nursing despite societal expectations. Trained in nursing at the Institute of St. Vincent de Paul in Alexandria, Egypt and at the Institute for Protestant Deaconesses in Kaiserswerth, Germany. Gained prominence during the Crimean War (1853-1856) where she led a team of 38 nurses. Used statistical analysis and data visualization to advocate for healthcare reform — she was a pioneer in both nursing and evidence-based medicine.",
    photoUrl: "",
  },
  {
    id: "pro7",
    name: "James Watt",
    title: "Mechanical Engineer & Inventor",
    professionId: "p7",
    professionName: "Mechanical Engineer",
    bio: "Scottish mechanical engineer whose improvements to the steam engine were fundamental to the Industrial Revolution. Invented the separate condenser, parallel motion linkage, and the concept of horsepower. The watt unit of power is named in his honor. His work transformed manufacturing, mining, and transportation worldwide.",
    pathBackground: "Trained as a mathematical instrument maker in Glasgow. While repairing a Newcomen steam engine at the University of Glasgow in 1763, Watt realized its inefficiency and invented the separate condenser in 1765. Partnered with Matthew Boulton to manufacture his improved engines in Birmingham. Over his career he also invented the copying machine, improved the steam engine's rotary motion, and developed the centrifugal governor. His systematic approach to invention and improvement established the foundation for professional mechanical engineering.",
    photoUrl: "",
  },
  {
    id: "pro8",
    name: "Amelia Earhart",
    title: "Aviation Pioneer & Pilot",
    professionId: "p8",
    professionName: "Pilot",
    bio: "First woman to fly solo across the Atlantic Ocean. Set numerous aviation records including being the first person to fly solo from Hawaii to the U.S. mainland. A bestselling author and co-founder of The Ninety-Nines, an organization for female pilots. Her courage and determination opened the skies for generations of women in aviation.",
    pathBackground: "Took her first airplane ride in 1920 at age 23 and immediately knew she wanted to fly. Worked multiple jobs to pay for flight lessons with pioneer aviator Neta Snook. Bought her first plane — a bright yellow Kinner Airster — in 1921. Set her first record flying to 14,000 feet in 1922. Became the 16th woman to earn a pilot's license from the FAI. Gained fame as the first woman to fly across the Atlantic as a passenger in 1928, then solo in 1932 — exactly five years after Lindbergh. Disappeared in 1937 while attempting to circumnavigate the globe. Her legacy continues to inspire aviators worldwide.",
    photoUrl: "",
  },
  {
    id: "pro9",
    name: "Dr. James Herriot (Alf Wight)",
    title: "Veterinarian & Bestselling Author",
    professionId: "p9",
    professionName: "Veterinarian",
    bio: "Real-life country veterinarian whose beloved books — including All Creatures Great and Small — have sold over 60 million copies worldwide. His warm, humorous stories about caring for animals in the Yorkshire Dales inspired multiple TV series and films, and introduced millions to the veterinary profession.",
    pathBackground: "Born Alf Wight in Sunderland, England (1916). Graduated from Glasgow Veterinary College in 1939. Moved to Thirsk, Yorkshire to work in a rural veterinary practice where he spent his entire 50-year career. Began writing under the pen name James Herriot at age 50, drawing on his daily experiences treating farm animals and family pets. Published eight books between 1970 and 1992. His son Jim Wight also became a veterinarian, continuing the family tradition.",
    photoUrl: "",
  },
  {
    id: "pro10",
    name: "Paula Scher",
    title: "Graphic Designer & Partner at Pentagram",
    professionId: "p10",
    professionName: "Graphic Designer",
    bio: "One of the most influential graphic designers in the world. A partner at Pentagram's New York office since 1991, Scher has created iconic brand identities for Citibank, Microsoft Windows, the Public Theater, and the Museum of Modern Art. Her bold typographic style defined an era of American design.",
    pathBackground: "BFA from the Tyler School of Art, Temple University (1970). Began her career as a layout artist at Random House children's book division. Art director at CBS Records (1970s) designing over 150 album covers per year. Founded her own studio with Terry Koppel (1984). Joined Pentagram as its first female principal (1991). Recipient of the AIGA Medal, National Design Award, and works in permanent collections at MoMA, the Cooper Hewitt, and the V&A.",
    photoUrl: "",
  },
  {
    id: "pro11",
    name: "Dr. DJ Patil",
    title: "Data Scientist & First U.S. Chief Data Scientist",
    professionId: "p11",
    professionName: "Data Scientist",
    bio: "Appointed by President Obama as the first-ever U.S. Chief Data Scientist (2015-2017), Dr. Patil helped coin the term 'data scientist.' He's held leadership roles at LinkedIn, eBay, and RelateIQ, and was a founding board member of the groundbreaking data science team at LinkedIn.",
    pathBackground: "B.A. in Mathematics from UC San Diego. Ph.D. in Applied Mathematics from the University of Maryland. Worked as a research scientist at the Department of Defense and Institute for Defense Analyses. Joined eBay as Chief Scientist of Security and Fraud. Head of Data Products and Chief Scientist at LinkedIn, where he built the 'People You May Know' feature. Served as U.S. Chief Data Scientist in the Obama White House, establishing data-driven governance practices. Currently a senior fellow at Harvard and venture capitalist.",
    photoUrl: "",
  },
  {
    id: "pro12",
    name: "Marva Collins",
    title: "Educator & Founder of Westside Preparatory School",
    professionId: "p12",
    professionName: "Teacher (K-12)",
    bio: "Renowned educator who proved low-income children labeled 'learning disabled' could excel with high expectations. Received National Humanities Medal in 2004.",
    pathBackground: "Began her teaching career in the Chicago Public Schools in the 1960s. Frustrated by low expectations for inner-city children, she founded Westside Preparatory School in her own home in 1975 with just $5,000. Her approach combined classical education — phonics, literature, math — with unwavering belief in every child's potential. Students who had been written off as 'unteachable' went on to succeed in college and become professionals. Her story was told in the 1981 TV movie 'The Marva Collins Story' starring Cicely Tyson. Awarded the National Humanities Medal by President George W. Bush in 2004.",
    photoUrl: "",
  },
  {
    id: "pro13",
    name: "Dr. David Satcher",
    title: "Dentist, Public Health Leader & 16th U.S. Surgeon General",
    professionId: "p13",
    professionName: "Dentist",
    bio: "The first Surgeon General to also hold a dental degree (D.D.S. and M.D.). A pioneer in oral health equity who brought national attention to the connection between oral health and overall health. As Surgeon General, he released the landmark 2000 report 'Oral Health in America.'",
    pathBackground: "Born in poverty in rural Alabama, Satcher was one of only three African American students admitted to Morehouse College in 1959. Earned his D.D.S. from Meharry Medical College and later his M.D. from Case Western Reserve University. Served as Director of the CDC and Assistant Secretary for Health before being appointed U.S. Surgeon General (1998-2002). His career demonstrates the profound intersection of dentistry, medicine, and public health policy.",
    photoUrl: "",
  },
];

const schools: School[] = [
  {
    id: "s1", name: "Massachusetts Institute of Technology", state: "MA", type: "private",
    description: "World-leading STEM institution. Exceptional aerospace engineering, computer science, and physics programs. Strong NASA research partnerships.",
    rankingInfo: "#2 National University (U.S. News)", websiteUrl: "https://www.mit.edu/",
  },
  {
    id: "s2", name: "Stanford University", state: "CA", type: "private",
    description: "Silicon Valley powerhouse. Top-ranked CS, engineering, and design programs. Extensive tech internship pipeline and startup ecosystem.",
    rankingInfo: "#4 National University (U.S. News)", websiteUrl: "https://www.stanford.edu/",
  },
  {
    id: "s3", name: "University of California, Berkeley", state: "CA", type: "public",
    description: "Top public university. Renowned for CS (EECS), engineering, and pre-law. UC system flagship with strong research output.",
    rankingInfo: "#1 Public University (U.S. News)", websiteUrl: "https://www.berkeley.edu/",
  },
  {
    id: "s4", name: "Johns Hopkins University", state: "MD", type: "private",
    description: "Premier pre-med and medical research institution. Home to one of the world's top medical schools and the Applied Physics Laboratory (NASA partner).",
    rankingInfo: "#6 National University (U.S. News)", websiteUrl: "https://www.jhu.edu/",
  },
  {
    id: "s5", name: "Harvard University", state: "MA", type: "private",
    description: "Ivy League with top-ranked law, medical, and business schools. Extensive alumni network and resources across every professional field.",
    rankingInfo: "#3 National University (U.S. News)", websiteUrl: "https://www.harvard.edu/",
  },
  {
    id: "s6", name: "University of Michigan – Ann Arbor", state: "MI", type: "public",
    description: "Top public research university. Excellent engineering (aerospace, CS), pre-med, and architecture programs. Strong Space Grant Consortium.",
    rankingInfo: "#3 Public University (U.S. News)", websiteUrl: "https://umich.edu/",
  },
  {
    id: "s7", name: "Georgia Institute of Technology", state: "GA", type: "public",
    description: "Top-ranked public engineering school. Outstanding aerospace engineering (close ties to NASA and aerospace industry), CS, and architecture programs.",
    rankingInfo: "#4 Public University (U.S. News)", websiteUrl: "https://www.gatech.edu/",
  },
  {
    id: "s8", name: "Yale University", state: "CT", type: "private",
    description: "Ivy League with one of the world's best law schools. Also strong in architecture (Yale School of Architecture) and pre-med.",
    rankingInfo: "#5 National University (U.S. News)", websiteUrl: "https://www.yale.edu/",
  },
  {
    id: "s9", name: "University of Pennsylvania", state: "PA", type: "private",
    description: "Ivy League university with one of the nation's top nursing programs through the Penn Nursing School. Also strong pre-med, business (Wharton), and engineering programs in an urban Philadelphia campus.",
    rankingInfo: "#10 National University (U.S. News)", websiteUrl: "https://www.upenn.edu/",
  },
  {
    id: "s10", name: "Purdue University", state: "IN", type: "public",
    description: "Top-ranked public engineering powerhouse. The School of Mechanical Engineering is one of the largest and most respected in the country, with deep industry ties and renowned co-op and internship programs.",
    rankingInfo: "#43 National University, #8 Engineering (U.S. News)", websiteUrl: "https://www.purdue.edu/",
  },
  {
    id: "s11", name: "Embry-Riddle Aeronautical University", state: "FL", type: "private",
    description: "The world's premier aviation and aerospace university. Offers professional flight degrees with FAA Part 141 flight training, aeronautical science, and air traffic management. Daytona Beach campus features a fleet of 100+ aircraft.",
    rankingInfo: "#1 in Aerospace / Aeronautical Engineering (U.S. News, non-doctoral)", websiteUrl: "https://daytonabeach.erau.edu/",
  },
  {
    id: "s12", name: "Cornell University", state: "NY", type: "private",
    description: "Ivy League university with one of the world's finest veterinary medicine programs through the Cornell College of Veterinary Medicine. Also exceptional in animal science, biology, and agricultural sciences. Consistently ranked as a top veterinary school globally.",
    rankingInfo: "#11 National University, #1 Veterinary Medicine (U.S. News)", websiteUrl: "https://www.cornell.edu/",
  },
  {
    id: "s13", name: "Rhode Island School of Design", state: "RI", type: "private",
    description: "America's premier art and design school. RISD's Graphic Design BFA program is consistently ranked #1 in the country. The curriculum blends conceptual thinking with hands-on making across print, digital, and experiential design. Alumni shape the visual culture of major brands, museums, and media.",
    rankingInfo: "#1 Graphic Design (U.S. News), #4 Fine Arts", websiteUrl: "https://www.risd.edu/",
  },
  {
    id: "s14", name: "Carnegie Mellon University", state: "PA", type: "private",
    description: "World-class research university and a pioneer in computer science and data science. CMU's School of Computer Science offers a dedicated undergraduate major in Statistics & Machine Learning, and its Heinz College was one of the first to launch a data science-focused degree. Home to groundbreaking AI and machine learning research.",
    rankingInfo: "#1 Computer Science, #2 Data Science / Analytics (U.S. News)", websiteUrl: "https://www.cmu.edu/",
  },
  {
    id: "s15", name: "University of Wisconsin–Madison", state: "WI", type: "public",
    description: "Home to the #1 ranked School of Education in the nation (U.S. News). A top public research university with outstanding programs in education, teacher preparation, and educational psychology. Deep partnerships with K-12 schools across Wisconsin.",
    rankingInfo: "#1 School of Education (U.S. News)", websiteUrl: "https://www.wisc.edu/",
  },
  {
    id: "s16", name: "Teachers College, Columbia University", state: "NY", type: "private",
    description: "The nation's #1 graduate school of education and the oldest and largest graduate school of education in the United States. Affiliated with Columbia University, it produces leaders in education policy, research, and teaching across every discipline.",
    rankingInfo: "#1 Graduate School of Education (U.S. News)", websiteUrl: "https://www.tc.columbia.edu/",
  },
  {
    id: "s17", name: "University of Michigan School of Dentistry", state: "MI", type: "public",
    description: "The nation's #1 ranked dental school. World-renowned for dental research, clinical training, and community outreach. Offers D.D.S., dental hygiene, and advanced specialty programs in a comprehensive academic health center.",
    rankingInfo: "#1 Dental School (QS World Rankings)", websiteUrl: "https://dent.umich.edu/",
  },
  {
    id: "s18", name: "Harvard School of Dental Medicine", state: "MA", type: "private",
    description: "First university-based dental school in the U.S. Part of Harvard Medical School's ecosystem — unique D.M.D. program integrated with medical education. Strong research emphasis and specialty training in a world-class academic environment.",
    rankingInfo: "#2 Dental School (QS World Rankings)", websiteUrl: "https://hsdm.harvard.edu/",
  },
  {
    id: "s19", name: "California Institute of Technology (Caltech)", state: "CA", type: "private",
    description: "World-renowned science and engineering institute with an extraordinary student-to-faculty ratio (3:1). Caltech manages NASA's Jet Propulsion Laboratory (JPL), giving students unparalleled access to space missions, robotics, and cutting-edge research. Exceptionally strong in aerospace, physics, computer science, and mechanical engineering.",
    rankingInfo: "#7 National University, #4 Engineering (U.S. News)", websiteUrl: "https://www.caltech.edu/",
  },
  {
    id: "s20", name: "University of Texas at Austin", state: "TX", type: "public",
    description: "Flagship public university and a powerhouse across engineering, computer science, business, nursing, architecture, and education. Home to the Cockrell School of Engineering, top-ranked CS through Turing Scholars, and McCombs School of Business. Strong ties to Austin's tech scene and NASA Johnson Space Center.",
    rankingInfo: "#9 Public University, #6 Undergraduate Engineering (U.S. News)", websiteUrl: "https://www.utexas.edu/",
  },
  {
    id: "s21", name: "Thomas Jefferson High School for Science & Technology", state: "VA", type: "public",
    description: "Consistently ranked the #1 public high school in America. A Virginia governor's school for STEM with advanced research labs, mentorship programs, and specialized concentrations in AI, CS, biotech, and engineering. Feeder to MIT, Stanford, and Ivy League universities.",
    rankingInfo: "#1 Public High School (U.S. News) — STEM magnet", websiteUrl: "https://tjhsst.fcps.edu/",
  },
  {
    id: "s22", name: "BASIS Scottsdale", state: "AZ", type: "public",
    description: "Among the top-ranked public high schools in the nation and the flagship of the BASIS Charter School network. Known for its rigorous college-preparatory curriculum, AP-for-all philosophy, and exceptional STEM preparation. Graduates consistently matriculate to top-tier universities.",
    rankingInfo: "#3 Public High School, #1 Charter School (U.S. News)", websiteUrl: "https://basisscottsdale.org/",
  },
  {
    id: "s23", name: "Illinois Mathematics and Science Academy (IMSA)", state: "IL", type: "public",
    description: "A top-ranked public residential academy for gifted STEM students. IMSA offers advanced research opportunities through partnerships with Fermilab, Argonne National Laboratory, and Northwestern University. Students engage in mentored research (SIR program) exploring real scientific problems.",
    rankingInfo: "#1 Public High School in Illinois (Niche) — STEM residential academy", websiteUrl: "https://www.imsa.edu/",
  },
  {
    id: "s24", name: "Stuyvesant High School", state: "NY", type: "public",
    description: "One of New York City's elite specialized high schools, Stuyvesant is renowned for its rigorous math, science, and technology curriculum. Offers 30+ AP courses and a wide range of electives in law, debate, pre-med, and engineering. Notable alumni include four Nobel laureates.",
    rankingInfo: "#2 Public High School in New York (U.S. News) — specialized exam school", websiteUrl: "https://stuy.enschool.org/",
  },
  {
    id: "s25", name: "Boston Latin School", state: "MA", type: "public",
    description: "America's oldest public school (founded 1635) and Boston's premier exam school. Known for its rigorous classical curriculum, strong humanities and pre-law preparation, and top-tier college placement. Alumni include five signers of the Declaration of Independence and countless leaders in law and government.",
    rankingInfo: "#1 Public High School in Massachusetts (U.S. News) — exam school", websiteUrl: "https://www.bls.org/",
  },
];

const professionSchools: ProfessionSchool[] = [
  // Astronaut schools
  { professionId: "p1", schoolId: "s1", programName: "Aerospace Engineering (B.S./M.S./Ph.D.)" },
  { professionId: "p1", schoolId: "s6", programName: "Aerospace Engineering & Space Systems" },
  { professionId: "p1", schoolId: "s7", programName: "Aerospace Engineering (Daniel Guggenheim School)" },
  // Software Engineer schools
  { professionId: "p2", schoolId: "s1", programName: "Electrical Engineering & Computer Science" },
  { professionId: "p2", schoolId: "s2", programName: "Computer Science (B.S./M.S.)" },
  { professionId: "p2", schoolId: "s3", programName: "EECS (Electrical Engineering & Computer Science)" },
  // Doctor schools
  { professionId: "p3", schoolId: "s4", programName: "Pre-Med / School of Medicine" },
  { professionId: "p3", schoolId: "s5", programName: "Harvard Medical School" },
  // Architect schools
  { professionId: "p4", schoolId: "s1", programName: "Architecture (B.S.A.D. / M.Arch)" },
  { professionId: "p4", schoolId: "s8", programName: "Yale School of Architecture (M.Arch)" },
  // Lawyer schools
  { professionId: "p5", schoolId: "s5", programName: "Harvard Law School (J.D.)" },
  { professionId: "p5", schoolId: "s8", programName: "Yale Law School (J.D.)" },
  { professionId: "p5", schoolId: "s3", programName: "UC Berkeley School of Law (J.D.)" },
  // Nurse schools
  { professionId: "p6", schoolId: "s9", programName: "Penn Nursing (B.S.N. / M.S.N.)" },
  { professionId: "p6", schoolId: "s4", programName: "Johns Hopkins School of Nursing (B.S.N.)" },
  // Mechanical Engineer schools
  { professionId: "p7", schoolId: "s10", programName: "Mechanical Engineering (B.S.M.E.)" },
  { professionId: "p7", schoolId: "s1", programName: "Mechanical Engineering (B.S./M.S.)" },
  { professionId: "p7", schoolId: "s7", programName: "Mechanical Engineering (George W. Woodruff School)" },
  // Pilot schools
  { professionId: "p8", schoolId: "s11", programName: "Aeronautical Science / Professional Flight (B.S.)" },
  { professionId: "p8", schoolId: "s10", programName: "Professional Flight Technology (B.S.)" },
  // Veterinarian schools
  { professionId: "p9", schoolId: "s12", programName: "Veterinary Medicine (D.V.M.) / Animal Science (B.S.)" },
  { professionId: "p9", schoolId: "s3", programName: "Animal Science on Pre-Vet Track (B.S.)" },
  // Graphic Designer schools
  { professionId: "p10", schoolId: "s13", programName: "Graphic Design (B.F.A.)" },
  { professionId: "p10", schoolId: "s14", programName: "Design / Communication Design (B.F.A.)" },
  // Data Scientist schools
  { professionId: "p11", schoolId: "s14", programName: "Statistics & Machine Learning (B.S.)" },
  { professionId: "p11", schoolId: "s1", programName: "Data Science / Computer Science (B.S.)" },
  // Teacher (K-12) schools
  { professionId: "p12", schoolId: "s15", programName: "Elementary / Secondary Education (B.S.Ed.)" },
  { professionId: "p12", schoolId: "s16", programName: "Curriculum & Teaching (M.Ed. / M.A.)" },
  // Dentist schools
  { professionId: "p13", schoolId: "s17", programName: "Doctor of Dental Surgery (D.D.S.) / Pre-Dental B.S." },
  { professionId: "p13", schoolId: "s18", programName: "Doctor of Dental Medicine (D.M.D.)" },
];

const tutors: Tutor[] = [
  {
    id: "t1", name: "Dr. Sarah Chen", title: "STEM & Test Prep Tutor",
    bio: "Former NASA education specialist with 15 years of tutoring experience. Specializes in making complex STEM concepts accessible and fun for students of all ages.",
    subjects: ["Mathematics", "Physics", "SAT/ACT Prep", "Computer Science"],
    hourlyRate: 75, rating: 4.9, photoUrl: "",
    professionIds: ["p1", "p2", "p7", "p11"],
    availability: "Weekdays after 4pm, Weekends",
  },
  {
    id: "t2", name: "Marcus Williams", title: "Software Engineering Mentor",
    bio: "Senior engineer at a FAANG company who loves teaching the next generation of developers. Focuses on practical coding skills and project-based learning.",
    subjects: ["Python", "JavaScript", "Web Development", "Algorithms", "AP Computer Science"],
    hourlyRate: 85, rating: 4.8, photoUrl: "",
    professionIds: ["p2", "p11"],
    availability: "Weekday evenings, Saturday mornings",
  },
  {
    id: "t3", name: "Emily Rodriguez", title: "Pre-Med & Science Tutor",
    bio: "Medical student at Johns Hopkins with a passion for helping aspiring doctors. MCAT prep specialist and biology enthusiast.",
    subjects: ["Biology", "Chemistry", "Organic Chemistry", "MCAT Prep", "Anatomy"],
    hourlyRate: 65, rating: 4.9, photoUrl: "",
    professionIds: ["p3", "p6", "p9", "p13"],
    availability: "Flexible schedule — online sessions available",
  },
  {
    id: "t4", name: "James Okonkwo", title: "Architecture & Design Instructor",
    bio: "Practicing architect and adjunct professor. Teaches design thinking, drafting, and 3D modeling to aspiring architects of all ages.",
    subjects: ["Architectural Design", "AutoCAD", "SketchUp", "Portfolio Development", "Art & Design"],
    hourlyRate: 70, rating: 4.7, photoUrl: "",
    professionIds: ["p4", "p10"],
    availability: "Tuesday/Thursday afternoons, Weekends",
  },
  {
    id: "t5", name: "Priya Patel", title: "Law & Debate Coach",
    bio: "Former litigator turned educator. Coaches mock trial, debate, and helps students develop the critical thinking skills essential for legal careers.",
    subjects: ["Constitutional Law", "Debate", "Public Speaking", "Legal Writing", "LSAT Prep"],
    hourlyRate: 80, rating: 4.8, photoUrl: "",
    professionIds: ["p5"],
    availability: "After school and weekends",
  },
  {
    id: "t6", name: "Carlos Mendez", title: "Aviation & Engineering Instructor",
    bio: "Commercial pilot and certified flight instructor with a background in aerospace engineering. Inspires the next generation of aviators.",
    subjects: ["Aerospace Engineering", "Physics", "Flight Theory", "Mathematics", "Mechanical Engineering"],
    hourlyRate: 90, rating: 4.9, photoUrl: "",
    professionIds: ["p1", "p7", "p8"],
    availability: "Weekday mornings and weekends",
  },
  {
    id: "t7", name: "Aisha Thompson", title: "Art & Creative Design Mentor",
    bio: "Award-winning graphic designer and illustrator. Helps students build portfolios, master design tools, and find their creative voice.",
    subjects: ["Graphic Design", "Illustration", "Adobe Creative Suite", "Typography", "Portfolio Prep"],
    hourlyRate: 60, rating: 4.6, photoUrl: "",
    professionIds: ["p10"],
    availability: "Flexible — online and in-person sessions",
  },
  {
    id: "t8", name: "David Kim", title: "Data Science & Math Specialist",
    bio: "Data scientist at a top tech company with a gift for making statistics and machine learning intuitive. Former math competition champion.",
    subjects: ["Statistics", "Machine Learning", "Python", "SQL", "Calculus", "Linear Algebra"],
    hourlyRate: 95, rating: 5.0, photoUrl: "",
    professionIds: ["p2", "p11"],
    availability: "Evenings and weekends",
  },
  {
    id: "t9", name: "Rachel O'Brien", title: "Education & Teaching Prep Coach",
    bio: "Veteran K-12 teacher and curriculum designer. Helps future teachers master classroom management, lesson planning, and teaching exams.",
    subjects: ["Education Theory", "Classroom Management", "Praxis Prep", "Literacy Instruction", "Child Development"],
    hourlyRate: 55, rating: 4.7, photoUrl: "",
    professionIds: ["p12"],
    availability: "After school hours and summers",
  },
  {
    id: "t10", name: "Tony Ramirez", title: "Skilled Trades & Electrician Instructor",
    bio: "Master electrician with 20 years in the field. Passionate about introducing young people to rewarding careers in the skilled trades.",
    subjects: ["Electrical Theory", "Circuit Design", "Safety & Codes", "Apprenticeship Prep", "Math for Trades"],
    hourlyRate: 50, rating: 4.8, photoUrl: "",
    professionIds: ["p16"],
    availability: "Weekday evenings, Saturday all day",
  },
];


// ── Data access functions (mock → swap for sql() later) ────────────────────

export function getAllProfessions(): Profession[] {
  return professions;
}

export function getProfessionBySlug(slug: string): Profession | undefined {
  return professions.find((p) => p.slug === slug);
}

export function getProfessionsByCategory(category: string): Profession[] {
  return professions.filter((p) => p.category === category);
}

export function getProfessionCategories(): string[] {
  return [...new Set(professions.map((p) => p.category))];
}

export function searchProfessions(query: string): Profession[] {
  const q = query.toLowerCase();
  return professions.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q),
  );
}

export function getAllGradeLevels(): GradeLevel[] {
  return gradeLevels;
}

export function getRoadmap(professionId: string): RoadmapStep[] {
  return roadmapSteps
    .filter((r) => r.professionId === professionId)
    .sort((a, b) => {
      const ga = gradeLevels.find((g) => g.id === a.gradeLevelId);
      const gb = gradeLevels.find((g) => g.id === b.gradeLevelId);
      return (ga?.sortOrder ?? 0) - (gb?.sortOrder ?? 0);
    });
}

export function getRoadmapStep(professionId: string, gradeShortCode: string): RoadmapStep | undefined {
  const grade = gradeLevels.find((g) => g.shortCode === gradeShortCode);
  if (!grade) return undefined;
  return roadmapSteps.find(
    (r) => r.professionId === professionId && r.gradeLevelId === grade.id,
  );
}

export function getFirstAvailableGrade(professionId: string): string | undefined {
  const steps = getRoadmap(professionId);
  return steps[0]?.gradeShortCode;
}

export function getAllProfessionals(): Professional[] {
  return professionals;
}

export function getProfessionalsByProfession(professionId: string): Professional[] {
  return professionals.filter((p) => p.professionId === professionId);
}

export function getAllSchools(): School[] {
  return schools;
}

export function getSchoolsByProfession(professionId: string): { school: School; programName: string }[] {
  const ps = professionSchools.filter((ps) => ps.professionId === professionId);
  return ps
    .map((ps) => {
      const school = schools.find((s) => s.id === ps.schoolId);
      return school ? { school, programName: ps.programName } : null;
    })
    .filter((x): x is { school: School; programName: string } => x !== null);
}

export function getSchoolsByState(state: string): School[] {
  if (!state) return schools;
  return schools.filter((s) => s.state.toLowerCase() === state.toLowerCase());
}

export function getSchoolStates(): string[] {
  return [...new Set(schools.map((s) => s.state))].sort();
}

export function getProfessionSpotlights(professionId: string): Professional[] {
  return professionals.filter((p) => p.professionId === professionId);
}

// ── Tutor data access functions ───────────────────────────────────────────

export function getAllTutors(): Tutor[] {
  return tutors;
}

export function getTutorById(id: string): Tutor | undefined {
  return tutors.find((t) => t.id === id);
}

export function getTutorsByProfession(professionId: string): Tutor[] {
  return tutors.filter((t) => t.professionIds.includes(professionId));
}

export function searchTutors(query: string): Tutor[] {
  const q = query.toLowerCase();
  return tutors.filter(
    (t) =>
      t.name.toLowerCase().includes(q) ||
      t.subjects.some((s) => s.toLowerCase().includes(q)) ||
      t.bio.toLowerCase().includes(q) ||
      t.title.toLowerCase().includes(q),
  );
}

export function getTutorSubjects(): string[] {
  return [...new Set(tutors.flatMap((t) => t.subjects))].sort();
}
