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
