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
