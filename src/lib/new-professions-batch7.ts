/**
 * Batch 7 — p37 Professor, p38 Cybersecurity Analyst, p39 Real Estate Agent, p40 Dietitian, p41 Geologist
 * 
 * All 17 grade levels per profession. IDs: rs1175–rs1259.
 * 
 * Import: import { newProfessionsBatch7 } from "./new-professions-batch7";
 */

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

const G: Record<string, { id: string; name: string; shortCode: string }> = {
  g1:  { id: "g1",  name: "Pre-K",         shortCode: "prek" },
  g2:  { id: "g2",  name: "Kindergarten",  shortCode: "k" },
  g3:  { id: "g3",  name: "1st Grade",     shortCode: "1" },
  g4:  { id: "g4",  name: "2nd Grade",     shortCode: "2" },
  g5:  { id: "g5",  name: "3rd Grade",     shortCode: "3" },
  g6:  { id: "g6",  name: "4th Grade",     shortCode: "4" },
  g7:  { id: "g7",  name: "5th Grade",     shortCode: "5" },
  g8:  { id: "g8",  name: "6th Grade",     shortCode: "6" },
  g9:  { id: "g9",  name: "7th Grade",     shortCode: "7" },
  g10: { id: "g10", name: "8th Grade",     shortCode: "8" },
  g11: { id: "g11", name: "9th Grade",     shortCode: "9" },
  g12: { id: "g12", name: "10th Grade",    shortCode: "10" },
  g13: { id: "g13", name: "11th Grade",    shortCode: "11" },
  g14: { id: "g14", name: "12th Grade",    shortCode: "12" },
  g15: { id: "g15", name: "Undergraduate", shortCode: "ugrad" },
  g16: { id: "g16", name: "Graduate",      shortCode: "grad" },
  g17: { id: "g17", name: "PhD / Doctoral", shortCode: "phd" },
};

function s(
  id: string, pid: string, gid: string,
  description: string, subjects: string[],
  extracurriculars: Extracurricular[],
  supplemental: Supplemental[],
): RoadmapStep {
  const g = G[gid];
  return { id, professionId: pid, gradeLevelId: g.id, gradeName: g.name, gradeShortCode: g.shortCode, description, subjects, extracurriculars, supplemental };
}

let n = 1175;
function nx(): string { return "rs" + (n++); }

export const newProfessionsBatch7: RoadmapStep[] = [


  // ========================================================================
  // p37 — PROFESSOR 🎓
  // ========================================================================

  s(nx(), "p37", "g1",
    "Professors are professional learners — and it all starts with curiosity! At this age, children ask 'why?' dozens of times a day. That's the professor's instinct. Encourage every question. When you don't know an answer, say 'Let's find out together!' — that's the research mindset. Explore nature: bugs, leaves, clouds, and puddles are all research subjects. Read books about everything — dinosaurs one day, space the next. Visit libraries, museums, and zoos to feed curiosity. Play 'school' — let your child be the teacher and explain something to you. Every professor remembers a parent or teacher who never stopped encouraging questions.",
    ["Curiosity & Questioning", "Nature Exploration", "Storytelling & Explaining", "Early Literacy (Rhyme & Sound Patterns)"],
    [
      { name: "Visit Your Local Library — Story Time", url: "https://www.ala.org/", description: "Free story times and early literacy programs at public libraries nationwide. Libraries are a professor's first research institution — get a library card early." },
      { name: "PBS Kids — Science & Nature Games", url: "https://pbskids.org/games/science/", description: "Free science and nature games from trusted PBS shows — explore animals, weather, and the world through play-based learning." },
    ],
    [
      { name: "The Most Magnificent Thing by Ashley Spires", url: "", type: "book" },
      { name: "Sesame Street: Elmo's World (Curiosity Episodes)", url: "https://pbskids.org/sesame/", type: "video" },
    ],
  ),

  s(nx(), "p37", "g2",
    "Build the habits of a lifelong learner. Read every day — professors read more than almost anyone. Practice asking good questions: not just 'what is that?' but 'how does it work?' and 'why is it like that?' Start a 'wonder journal' — draw or write about things you're curious about. Explore categorization: sort rocks by color or size, group animals by where they live, organize toys by type. Scholars organize knowledge. Talk about your child's interests: 'You love dinosaurs — what would you like to learn about them?' Follow their passion. Visit a university campus if one is nearby — walk around, see the libraries and labs, and talk about what professors do.",
    ["Reading & Phonics (Daily Practice)", "Scientific Observation", "Categorization & Sorting", "Writing (Wonder Journal)"],
    [
      { name: "National Geographic Kids — Explore Animals & Science", url: "https://kids.nationalgeographic.com/", description: "Videos, games, and fascinating facts about animals, science, and the world — fuel for curious young minds." },
      { name: "Start a Wonder Journal", url: "", description: "A notebook where your child draws or writes one thing they're curious about each day. The earliest form of a research journal." },
    ],
    [
      { name: "Ada Twist, Scientist by Andrea Beaty", url: "", type: "book" },
      { name: "Wild Kratts (PBS Kids)", url: "https://pbskids.org/wildkratts/", type: "video" },
    ],
  ),

  s(nx(), "p37", "g3",
    "Reading and writing are the professor's primary tools — strengthen them daily. Read nonfiction alongside fiction: books about animals, space, people, and places. Practice writing complete sentences and short paragraphs — professors write constantly. Start learning how to find answers: 'Let's look that up in a book or on a kid-safe website.' Begin note-taking: after reading a book, write down three things you learned. Learn about different kinds of experts: biologists study living things, astronomers study stars, historians study the past. Which kind of professor would you want to be? The path starts with knowing what fascinates you.",
    ["Reading (Fiction & Nonfiction)", "Writing (Sentences & Paragraphs)", "Research Skills (Finding Answers)", "Science & Social Studies Exploration"],
    [
      { name: "Epic! — Digital Library for Kids", url: "https://www.getepic.com/", description: "Unlimited access to 40,000+ children's books, audiobooks, and educational videos — a professor-in-training's dream library." },
      { name: "National Geographic Kids — Research Articles", url: "https://kids.nationalgeographic.com/", description: "Read short nonfiction articles about animals, science, history, and geography — practice reading to learn, not just to read." },
    ],
    [
      { name: "What Do You Do With an Idea? by Kobi Yamada", url: "", type: "book" },
      { name: "BrainPOP Jr.: Reading Nonfiction", url: "https://jr.brainpop.com/readingandwriting/readingskills/readingnonfiction/", type: "video" },
    ],
  ),

  s(nx(), "p37", "g4",
    "Deepen research and writing skills. Write a short 'research report' about a topic you love — a paragraph with facts you've learned. Practice finding information from multiple sources: a book, a website, and an expert (teacher, parent, or librarian). Learn about the scientific method: observe, question, hypothesize, experiment, conclude. Professors use this process to discover new knowledge. Explore different fields of study: science, history, literature, art, mathematics. Start a 'big questions' list — questions you'd like to answer someday. Talk about college: professors teach and do research at colleges and universities — places where people never stop learning.",
    ["Reading Comprehension (Nonfiction)", "Writing (Research Reports)", "Scientific Method Basics", "Library & Research Skills"],
    [
      { name: "DKfindout! — Interactive Learning", url: "https://www.dkfindout.com/", description: "Free interactive encyclopedia from DK — explore science, history, space, and more with articles, videos, and quizzes." },
      { name: "Write Your First Research Report", url: "", description: "Pick any topic — dinosaurs, planets, ancient Egypt — and write a one-page report with at least three facts from at least two sources. The scholar's first paper." },
    ],
    [
      { name: "DK Eyewitness Books (Any Topic)", url: "", type: "book" },
      { name: "Mystery Science: Open-and-Go Lessons", url: "https://mysteryscience.com/", type: "course" },
    ],
  ),

  s(nx(), "p37", "g5",
    "Identify and deepen your favorite subject — every professor has a specialty. If you love science, read science biographies. If you love history, dive into a specific era. Learn to take notes systematically: main ideas on the left, details on the right. Practice presenting what you've learned — give a 'mini lecture' to your family about your topic. Start learning about how universities work: departments, majors, graduate school, and the professor's career path. Learn about famous professors who changed the world: Marie Curie, Albert Einstein, W.E.B. Du Bois, and Carl Sagan were all professors who both taught and made discoveries.",
    ["Reading (In-Depth Subject Exploration)", "Writing (Note-Taking & Outlining)", "Oral Presentation Skills", "Math (Data & Graphs)"],
    [
      { name: "Khan Academy — Explore Any Subject", url: "https://www.khanacademy.org/", description: "Free lessons in math, science, history, art history, and more — discover which subjects light up your curiosity." },
      { name: "Give a Mini Lecture at Home", url: "", description: "Research a topic for one week, prepare notes, then present a 5-minute 'lecture' to your family. Teaching is the best way to learn — and it's what professors do every day." },
    ],
    [
      { name: "Who Was? Biography Series (Marie Curie, Albert Einstein, etc.)", url: "https://www.whowasbookseries.com/", type: "book" },
      { name: "Crash Course Kids: Science", url: "https://www.youtube.com/playlist?list=PLhz12vamHOnZv8kM6Xo6blp2HnP0yg7DR", type: "video" },
    ],
  ),

  s(nx(), "p37", "g6",
    "Build advanced research skills. Learn how to evaluate sources: is this author an expert? When was this published? Is it fact or opinion? These critical thinking skills are the foundation of academic work. Write longer research papers with proper structure: introduction, body paragraphs with evidence, conclusion. Explore a favorite subject in depth — read everything you can find. Learn about academic disciplines: humanities (literature, philosophy, history), social sciences (psychology, economics, sociology), and STEM (science, technology, engineering, math). Consider a 'citizen science' project where you contribute real data to research — professors increasingly work with the public on large-scale research.",
    ["English Language Arts (Critical Analysis)", "Writing (Research Papers)", "Information Literacy (Source Evaluation)", "Subject Specialization (Deep Dive)"],
    [
      { name: "SciStarter — Citizen Science Projects", url: "https://scistarter.org/", description: "Find real citizen science projects — count birds, classify galaxies, track weather patterns — contribute to actual research alongside scientists." },
      { name: "Zooniverse — People-Powered Research", url: "https://www.zooniverse.org/", description: "Help real researchers classify data — from penguin counting to galaxy identification. Experience the collaborative nature of modern scholarship." },
    ],
    [
      { name: "Khan Academy: Research & Information Literacy", url: "https://www.khanacademy.org/", type: "course" },
      { name: "The Boy Who Harnessed the Wind by William Kamkwamba", url: "", type: "book" },
    ],
  ),

  s(nx(), "p37", "g7",
    "Deepen your specialty — professors are experts in one field. Choose a subject you love and study it beyond school requirements. Read advanced books, watch documentaries, and follow experts online. Learn about academic writing: formal tone, citations, thesis statements. Practice argumentation — take a position on an issue and support it with evidence. Join a debate club or academic competition. Explore the professor career path: bachelor's degree → PhD (5-7 years) → postdoctoral research → assistant professor → tenure. It's a long path, but for those who love learning and teaching, there's no better career. The academic calendar — summers for research, sabbaticals for deep study — offers intellectual freedom few other careers provide.",
    ["English (Argumentative Writing)", "Reading (Advanced Subject Matter)", "Research Methodology Basics", "Speech & Debate"],
    [
      { name: "National History Day", url: "https://www.nhd.org/", description: "Year-long research program culminating in a historical research project — paper, exhibit, documentary, performance, or website. The most authentic pre-college research experience." },
      { name: "MathCounts / Science Olympiad", url: "https://www.mathcounts.org/", description: "Competitive academic programs building deep subject expertise and problem-solving skills — the habits of mind that make great scholars." },
    ],
    [
      { name: "Crash Course: Study Skills", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtNcAJRf3bE1IJU6nMfHj86W", type: "video" },
      { name: "A Short History of Nearly Everything by Bill Bryson", url: "", type: "book" },
    ],
  ),

  s(nx(), "p37", "g8",
    "Take the most advanced courses available in every subject — professors need broad knowledge even before specializing. Write longer, more analytical papers with proper citations. Learn about academic publishing: peer review, journals, and how knowledge is shared among scholars. Start a 'commonplace book' — a notebook where you collect interesting ideas, quotes, and questions. This practice, dating back centuries, is how scholars synthesize knowledge. Explore academic blogs and podcasts in your area of interest — academics increasingly share their work publicly. Interview a professor if possible — ask about their research, their teaching, and the best and hardest parts of their career.",
    ["English (Analytical Writing)", "Advanced Subject Courses", "Research & Citation Skills", "Public Speaking"],
    [
      { name: "The National Academies — High School Resources", url: "https://www.nationalacademies.org/", description: "Free reports from the National Academies of Sciences, Engineering, and Medicine — see what real academic research looks like and learn from the world's top scholars." },
      { name: "Interview a Professor", url: "", description: "Reach out to a professor at a local college — most are happy to talk with curious students. Ask about their path, their research, and their advice for aspiring academics." },
    ],
    [
      { name: "TED Talks: Education & Research Playlist", url: "https://www.ted.com/playlists/", type: "video" },
      { name: "The Elements of Style by Strunk & White", url: "", type: "book" },
    ],
  ),

  s(nx(), "p37", "g9",
    "Take the most rigorous courses available — honors and advanced tracks in English, history, science, and math. The professor's path requires excellence across disciplines, not just one. Deepen your writing skills — academic writing is the professor's daily craft. Learn to construct a thesis statement and defend it with evidence. Join or start an academic club: debate team, philosophy club, science society, history bowl. Begin exploring the college landscape: liberal arts colleges (teaching-focused, small classes) vs. research universities (research-focused, large departments). Most professors at research universities spend 40% of their time on research, 40% on teaching, and 20% on service. At liberal arts colleges, teaching is the primary focus.",
    ["Honors English (Analytical Writing)", "Honors History / Social Science", "Honors Science / Math", "World Language (Reading Research)", "Speech & Debate"],
    [
      { name: "National History Bowl", url: "https://www.historybowl.com/", description: "Academic competition testing historical knowledge — teams compete at regional and national levels, building the broad knowledge base of future scholars." },
      { name: "Stanford Online — Courses for High School Students", url: "https://online.stanford.edu/", description: "Take real college-level courses from Stanford faculty — experience the academic rigor and intellectual community of a university." },
    ],
    [
      { name: "Khan Academy: College Admissions", url: "https://www.khanacademy.org/college-careers-more", type: "course" },
      { name: "Letters to a Young Scientist by Edward O. Wilson", url: "", type: "book" },
    ],
  ),

  s(nx(), "p37", "g10",
    "Take AP or IB courses in your strongest subjects — and maintain breadth in others. Professors must excel in their specialty AND be broadly educated. Start a serious research project — a science fair project, a historical research paper, or a literary analysis — that demonstrates your ability to work independently. Learn about the PhD path: after your bachelor's, you apply to doctoral programs in your chosen field. PhD programs typically take 5-7 years and are fully funded (they pay you a stipend, not the other way around). Explore academic careers in different settings: research universities, liberal arts colleges, community colleges, and international institutions — each offers a different balance of teaching and research.",
    ["AP / IB English", "AP / IB History or Science", "Honors Math", "Independent Research Project", "World Language (Reading Proficiency)"],
    [
      { name: "Pioneer Academics — Online Research Program", url: "https://pioneeracademics.com/", description: "Accredited online research program pairing high school students with university professors for original research — earn college credit and produce a publishable paper." },
      { name: "Science Fair / Research Competition", url: "https://www.societyforscience.org/isef/", description: "Regeneron ISEF — the world's largest pre-college science competition. Or pursue history/social science research through National History Day at the senior level." },
    ],
    [
      { name: "Coursera: Learning How to Learn (Dr. Barbara Oakley)", url: "https://www.coursera.org/learn/learning-how-to-learn", type: "course" },
      { name: "The Craft of Research by Booth, Colomb & Williams", url: "", type: "book" },
    ],
  ),

  s(nx(), "p37", "g11",
    "Take the most rigorous AP/IB courses in your chosen field and continue building broad knowledge. The professor's path requires both depth and breadth. Deepen your independent research — aim for publication in a high school research journal or a presentation at a conference. Learn about different PhD structures: some fields admit directly from undergrad, others expect a master's first. Research potential undergraduate institutions: strong liberal arts colleges (Williams, Amherst, Swarthmore) send high percentages of graduates to PhD programs. Major research universities offer undergraduate research opportunities directly with professors. Consider the Rhodes, Marshall, and Fulbright scholarships — prestigious awards that launch academic careers.",
    ["AP / IB Subject (Specialty Depth)", "AP English / Literature", "AP Science or Social Science", "World Language (Advanced)", "Independent Research"],
    [
      { name: "Telluride Association Summer Seminars (TASS)", url: "https://www.tellurideassociation.org/", description: "Free summer program in critical Black and ethnic studies for high school sophomores and juniors — college-level seminars with top scholars. Highly selective, fully funded." },
      { name: "Submit Research to a High School Journal", url: "https://www.jhssonline.org/", description: "Journal of High School Science or The Concord Review (history) — publish real research and experience academic peer review while still in high school." },
    ],
    [
      { name: "edX: Justice (Harvard / Michael Sandel)", url: "https://www.edx.org/course/justice", type: "course" },
      { name: "On Writing Well by William Zinsser", url: "", type: "book" },
    ],
  ),

  s(nx(), "p37", "g12",
    "Take the most advanced AP/IB courses available. Finalize your independent research project — this is the centerpiece of your college application if you're serious about an academic career. Research undergraduate programs carefully — not by prestige alone, but by fit: access to research, mentorship from faculty, and a track record of sending graduates to top PhD programs. Learn about the academic job market — it's competitive, especially in the humanities. But the academic path isn't only about tenure-track professorships at top universities; there are many fulfilling paths in teaching-focused institutions, community colleges, international universities, and academic administration. The key is loving the life of the mind.",
    ["AP / IB Subject (Specialty)", "AP English / Literature", "AP Science or Social Science", "World Language", "Research Project Completion"],
    [
      { name: "Research Science Institute (RSI) — MIT", url: "https://www.cee.org/programs/research-science-institute", description: "Free, highly selective summer research program at MIT — six weeks of intensive research with MIT faculty. Widely considered the most prestigious STEM research program for high school students." },
      { name: "Clark Scholar Program — Texas Tech", url: "https://www.depts.ttu.edu/honors/clark-scholars/", description: "Free, selective summer research program — work one-on-one with a faculty mentor on a research project in any discipline." },
    ],
    [
      { name: "Coursera: The Science of Well-Being (Yale)", url: "https://www.coursera.org/learn/the-science-of-well-being", type: "course" },
      { name: "Thinking, Fast and Slow by Daniel Kahneman", url: "", type: "book" },
    ],
  ),

  s(nx(), "p37", "g13",
    "The most critical year for college applications. Take the most advanced courses possible — AP, IB, or dual enrollment. Complete AP exams for college credit. Write a compelling personal statement that reflects your intellectual journey — not just what you've done, but what questions drive you and why you want to dedicate your life to discovering and sharing knowledge. Apply to a mix of liberal arts colleges and research universities. If you're certain about the PhD path, look for programs with strong undergraduate research opportunities, honors colleges, and fellowships that support graduate school preparation. Consider applying to UK universities (Oxford, Cambridge) which offer intense, specialized degrees ideal for future academics.",
    ["AP / IB Courses (Full Load)", "Dual Enrollment / College Courses", "English (Application Essays)", "Independent Research (Final Phase)", "World Language"],
    [
      { name: "Apply to Undergraduate Research Programs", url: "", description: "Target schools with strong undergraduate research: research universities with formal UROP (Undergraduate Research Opportunity Program) or liberal arts colleges with senior thesis requirements." },
      { name: "Civic Digital Fellowship / Academic Summer Programs", url: "https://www.codingitforward.com/", description: "Explore internships and fellowships that bridge academic interests with real-world applications — demonstrate intellectual curiosity beyond grades." },
    ],
    [
      { name: "The Professor Is In by Karen Kelsky", url: "", type: "book" },
      { name: "Khan Academy: College Application Bootcamp", url: "https://www.khanacademy.org/college-careers-more", type: "course" },
    ],
  ),

  s(nx(), "p37", "g14",
    "Apply to colleges and universities with strong academic programs in your chosen field. If you're targeting a PhD eventually, choose an undergraduate institution that offers robust research opportunities, close faculty mentorship, and a senior thesis or capstone requirement. Complete AP exams — strong scores earn college credit and advanced standing. Consider a gap year for additional research or language immersion if it strengthens your academic profile. Reach out to current PhD students and professors at your target graduate schools — academic networking starts early. The professor's path is long, but every step — from kindergarten curiosity to PhD dissertation — is part of the same journey: asking important questions and sharing what you discover with others.",
    ["AP / IB Exams", "Undergraduate Applications", "Research Portfolio Finalization", "World Language Proficiency", "English (Scholarship Essays)"],
    [
      { name: "Apply to Top Liberal Arts Colleges & Research Universities", url: "", description: "Liberal arts: Williams, Amherst, Swarthmore, Pomona, Bowdoin. Research universities: Harvard, Stanford, MIT, University of Chicago, UC Berkeley, Michigan, UNC, UVA." },
      { name: "Gates Cambridge / Rhodes / Marshall Scholarship Research", url: "https://www.gatescambridge.org/", description: "Research prestigious international scholarships now — understanding what they're looking for helps you build a competitive profile from day one of college." },
    ],
    [
      { name: "They Say / I Say: The Moves That Matter in Academic Writing", url: "", type: "book" },
      { name: "A PhD Is Not Enough by Peter J. Feibelman", url: "", type: "book" },
    ],
  ),

  s(nx(), "p37", "g15",
    "Earn a bachelor's degree (BA or BS) in your chosen field — and pursue it with doctoral-level intensity. Take the hardest courses, build relationships with professors (they'll write your PhD recommendations), and seek research opportunities from your first year. Join a professor's research lab or start an independent project through your university's undergraduate research program. Present at undergraduate research conferences. Write a senior thesis or honors thesis — this is the single most important credential for PhD applications. Maintain a 3.7+ GPA (3.5+ minimum for competitive PhD programs). Learn the languages you'll need for your field — many humanities PhDs require reading proficiency in 2+ languages beyond English. Apply for summer research experiences (REUs — Research Experiences for Undergraduates, funded by NSF).",
    ["Major Field (Deep Coursework)", "Research Methods", "Senior / Honors Thesis", "World Language(s)", "Academic Writing & Presentation"],
    [
      { name: "NSF Research Experiences for Undergraduates (REU)", url: "https://www.nsf.gov/crssprgm/reu/", description: "Paid summer research programs at universities nationwide — work full-time on a research project with a faculty mentor. Essential for PhD applications." },
      { name: "National Conference on Undergraduate Research (NCUR)", url: "https://www.cur.org/events/ncur/", description: "Present your research at a national conference — build your CV, practice academic presentation, and network with graduate programs." },
    ],
    [
      { name: "The Craft of Research (4th ed.) by Booth, Colomb, Williams", url: "", type: "book" },
      { name: "Zotero — Free Research Manager", url: "https://www.zotero.org/", type: "program" },
    ],
  ),

  s(nx(), "p37", "g16",
    "PhD program (5-7 years): Years 1-2 — coursework, comprehensive exams, and developing a dissertation proposal. Years 3-5 — dissertation research and writing. Year 5-7 — dissertation defense, publications, and job market preparation. The PhD is fully funded at reputable programs (tuition waiver + $20,000-$40,000 annual stipend). Teaching experience is essential — most programs require 2-4 semesters as a teaching assistant or instructor of record. Publish 2-4 peer-reviewed articles before graduating — publications are the currency of the academic job market. Present at national and international conferences. The academic job market is competitive; build a strong CV with publications, teaching experience, awards, and service. Most PhD graduates seeking academic careers do 1-3 years of postdoctoral research before landing a tenure-track position.",
    ["Doctoral Coursework (Field Seminars)", "Dissertation Research & Writing", "Pedagogy & Teaching Practicum", "Academic Publishing", "Professionalization (Conferences & Networking)"],
    [
      { name: "Modern Language Association (MLA) / Field-Specific Association", url: "https://www.mla.org/", description: "Join your discipline's professional association — attend conferences, access job listings, and network with scholars in your field." },
      { name: "Preparing Future Faculty (PFF) Program", url: "", description: "Many universities offer PFF programs — teaching development, academic job market preparation, and faculty mentorship for doctoral students." },
    ],
    [
      { name: "Chronicle of Higher Education", url: "https://www.chronicle.com/", type: "article" },
      { name: "The Academic's Handbook (4th ed.) by A. Leigh DeNeef & Craufurd D. Goodwin", url: "", type: "book" },
    ],
  ),

  s(nx(), "p37", "g17",
    "Postdoctoral research → Assistant Professor → Associate Professor (tenure) → Full Professor → Emeritus. The tenure track (6 years): build a strong record of publications, excellent teaching evaluations, and meaningful service to your department and discipline. Tenure review is the most important professional milestone — it determines whether you have a permanent academic position. Full Professor: the highest rank, achieved 10-15 years after tenure through sustained excellence in research, teaching, and leadership. Department Chair, Dean, Provost, and University President are leadership paths within academia. Some professors become public intellectuals — writing books for general audiences, appearing in media, and shaping public discourse. Others focus on groundbreaking research, training the next generation of scholars, and advancing human knowledge. The professor's life is one of intellectual freedom, collegiality, and the profound satisfaction of asking questions that matter — and helping students discover their own love of learning.",
    ["Tenure-Track Faculty Development", "Research Program Leadership", "Teaching Excellence & Curriculum Design", "Academic Service & Leadership", "Public Engagement & Intellectual Leadership"],
    [
      { name: "American Association of University Professors (AAUP)", url: "https://www.aaup.org/", description: "Organization defending academic freedom and faculty rights — resources on tenure, shared governance, and the academic profession." },
      { name: "TEDx / Public Speaking for Academics", url: "https://www.ted.com/tedx", description: "Share your research with the public through accessible talks — build your reputation as a public intellectual and communicate your work beyond the academy." },
    ],
    [
      { name: "Nature — International Journal of Science", url: "https://www.nature.com/", type: "article" },
      { name: "How Professors Think: Inside the Curious World of Academic Judgment by Michèle Lamont", url: "", type: "book" },
    ],
  ),



  // ========================================================================
  // p38 — CYBERSECURITY ANALYST 🔒
  // ========================================================================

  s(nx(), "p38", "g1",
    "Cybersecurity starts with curiosity about how things work — and a love of puzzles! At this age, children are natural problem-solvers who love figuring out patterns, matching games, and 'what's different?' challenges. Encourage logic puzzles, mazes, and sorting games that build the analytical thinking security professionals use every day. Talk about safety rules — 'we don't share our name with strangers' — which is the earliest form of privacy awareness. Build with blocks and take things apart (safely) to understand systems. Every white-hat hacker started as a kid who loved solving puzzles and understanding how things fit together.",
    ["Puzzles & Pattern Recognition", "Curiosity & Questioning", "Basic Safety Rules", "Building & Taking Apart"],
    [
      { name: "PBS Kids — Puzzle & Pattern Games", url: "https://pbskids.org/games/problem-solving/", description: "Free logic, pattern-matching, and problem-solving games that build the analytical thinking core to cybersecurity." },
      { name: "Building Blocks & Construction Play", url: "", description: "Building complex structures from blocks develops systems thinking — understanding how parts work together, which is fundamental to understanding networks and security." },
    ],
    [
      { name: "Rosie Revere, Engineer by Andrea Beaty", url: "", type: "book" },
      { name: "Sesame Street: Elmo's World — Computers Episode", url: "https://pbskids.org/sesame/", type: "video" },
    ],
  ),

  s(nx(), "p38", "g2",
    "Build logical thinking and rule-following — cybersecurity is about understanding systems and the rules that protect them. Play 'red light, green light' and other games with rules to learn that boundaries keep things safe — just like firewalls! Practice pattern recognition: what comes next in a sequence? Notice passwords in everyday life: unlocking a tablet, opening a door with a key — these are all forms of authentication. Talk about 'digital strangers' and why we don't share personal information online. Play 'detective' games where you find clues and solve mysteries. Every security analyst is a digital detective protecting data.",
    ["Pattern Recognition & Sequencing", "Following Rules (Games)", "Basic Digital Safety", "Detective & Mystery Play"],
    [
      { name: "Common Sense Media — Digital Citizenship for Young Kids", url: "https://www.commonsensemedia.org/", description: "Age-appropriate resources teaching children about online safety, privacy, and being a good digital citizen from the start." },
      { name: "Code.org — Course A (Kindergarten)", url: "https://code.org/student/kindergarten", description: "Free introductory coding puzzles teaching sequencing, loops, and problem-solving — computational thinking for the youngest learners." },
    ],
    [
      { name: "What Do You Do With a Problem? by Kobi Yamada", url: "", type: "book" },
      { name: "NetSmartzKids — Internet Safety Videos", url: "https://www.netsmartzkids.org/", type: "video" },
    ],
  ),

  s(nx(), "p38", "g3",
    "Strengthen reading and logic skills — cybersecurity professionals read logs, analyze patterns, and solve puzzles all day. Practice decoding secret messages: simple substitution ciphers where A=1, B=2 are thrilling for this age. Learn about passwords: what makes a strong password (long, mixed characters, not 'password123'). Talk about online safety basics — never share your full name, address, or school online. Play strategy games like checkers that teach thinking ahead. Explore early coding with block-based programming. The mindset of a cybersecurity analyst is equal parts detective, engineer, and guardian.",
    ["Reading & Phonics", "Math (Addition, Subtraction & Patterns)", "Basic Coding (Block-Based)", "Internet Safety"],
    [
      { name: "ScratchJr — Creative Coding", url: "https://www.scratchjr.org/", description: "Free app where children create interactive stories and games with block coding — builds computational thinking and problem-solving." },
      { name: "Secret Code / Cipher Games at Home", url: "", description: "Create simple substitution ciphers and decode messages — the earliest form of cryptography, which is foundational to all cybersecurity." },
    ],
    [
      { name: "Cece Loves Science by Kimberly Derting", url: "", type: "book" },
      { name: "BrainPOP Jr.: Internet Safety", url: "https://jr.brainpop.com/artsandtechnology/technology/internetsafety/", type: "video" },
    ],
  ),

  s(nx(), "p38", "g4",
    "Deepen logical reasoning and start understanding computer basics. Practice breaking problems into step-by-step solutions — this is algorithmic thinking, the foundation of all programming and security analysis. Learn about computer parts: CPU, memory, storage, and network — how they connect is the first lesson in how systems can be attacked and defended. Explore more complex codes and ciphers. Start a 'security journal' — write down interesting puzzles, codes, and things you learn about how computers work. Talk about digital footprints: everything you post online stays forever, and cybersecurity professionals help protect that data.",
    ["Reading Comprehension (Nonfiction)", "Math (Geometry & Logic)", "Computer Basics", "Writing (Security Journal)"],
    [
      { name: "Code.org — Course C/D (2nd Grade)", url: "https://code.org/student/elementary", description: "Free coding courses progressing from block-based to more complex logic, debugging, and problem-solving." },
      { name: "CyberPatriot — Elementary Cyber Literacy", url: "https://www.uscyberpatriot.org/", description: "Air Force Association's national cyber education program — introduces cybersecurity concepts to elementary students through games and activities." },
    ],
    [
      { name: "Hello Ruby: Adventures in Coding by Linda Liukas", url: "", type: "book" },
      { name: "BrainPOP: Computer History", url: "https://www.brainpop.com/technology/computerscience/computerhistory/", type: "video" },
    ],
  ),

  s(nx(), "p38", "g5",
    "Math skills expand — and cybersecurity runs on math. Encryption, hashing, and digital signatures all rely on number theory. Practice multiplication, division, and factors — these are the building blocks of RSA encryption. Learn about online privacy: what information is safe to share and what isn't. Start coding with block-to-text transitions (Scratch to Python). Explore cryptography through simple tools like the Caesar cipher. Talk about 'white hat' vs. 'black hat' hackers — ethical hackers protect systems by finding vulnerabilities before bad actors do. Join a coding club if available. The best cybersecurity professionals have both technical skill and strong ethics.",
    ["Math (Multiplication, Division & Factors)", "Science (Scientific Method)", "Computer Skills (Typing & Tools)", "Digital Citizenship"],
    [
      { name: "Scratch — Advanced Projects", url: "https://scratch.mit.edu/", description: "Build more complex projects in Scratch — games with multiple levels, logic puzzles, and interactive stories that require systems-level thinking." },
      { name: "National Cryptologic Museum — Kids' Resources", url: "https://www.nsa.gov/museum/", description: "Explore the history of codes and ciphers at the NSA's museum — online exhibits and resources about cryptography throughout history." },
    ],
    [
      { name: "Top Secret: A Handbook of Codes, Ciphers, and Secret Writing by Paul B. Janeczko", url: "", type: "book" },
      { name: "Crash Course Kids: Engineering Design Process", url: "https://www.youtube.com/playlist?list=PLhz12vamHOnZ4ZDC0dS6C9HRN5Qrm0jHO", type: "video" },
    ],
  ),

  s(nx(), "p38", "g6",
    "Expand research and analytical skills. Study how the internet works: packets, IP addresses, DNS — understanding the infrastructure is the first step to securing it. Learn about famous cyber attacks in history and how they were stopped. Practice more advanced coding — try Python's turtle graphics or simple text-based games. Explore logic puzzles, Sudoku, and brain teasers daily to sharpen analytical thinking. Start learning about operating systems: Windows, macOS, and Linux — each has different security features. Consider joining or starting a coding or robotics club. Cybersecurity is a team sport — the best analysts collaborate to defend networks.",
    ["English Language Arts (Research)", "Math (Fractions, Decimals & Logic)", "Technology (How the Internet Works)", "Coding (Intro to Text-Based)"],
    [
      { name: "Tynker — Python 101 for Kids", url: "https://www.tynker.com/", description: "Transition from block coding to real Python with kid-friendly courses — learn variables, loops, and functions." },
      { name: "GenCyber — Student Resources", url: "https://www.gen-cyber.org/", description: "NSA/NSF-funded cybersecurity camps and resources for K-12 students — find free summer camps and online activities introducing cybersecurity concepts." },
    ],
    [
      { name: "The Code Book for Young Readers by Simon Singh", url: "", type: "book" },
      { name: "Mystery Science: Invisible Ink & Codes", url: "https://mysteryscience.com/", type: "course" },
    ],
  ),

  s(nx(), "p38", "g7",
    "Math ramps up with pre-algebra — cybersecurity uses algebra, probability, and statistics for threat analysis and cryptography. Dive deeper into how the internet works: learn about HTTP vs. HTTPS, what a VPN does, and why public Wi-Fi can be dangerous. Start learning about different cyber threats: phishing, malware, ransomware, and social engineering — and how to spot them. Begin exploring the Linux operating system — most cybersecurity tools run on Linux. Join a cybersecurity club or start learning on platforms like TryHackMe's kid-friendly rooms. Practice explaining security concepts to family members — communication is essential for security professionals.",
    ["Math (Pre-Algebra & Probability)", "Computer Science (Networking Basics)", "Life Science (Analytical Thinking)", "Digital Literacy"],
    [
      { name: "Raspberry Pi — Build Your Own Computer", url: "https://www.raspberrypi.org/", description: "Build and program your own tiny computer — learn Linux, networking, and basic system administration, all foundational cybersecurity skills." },
      { name: "National Cyber League — Middle School Track", url: "https://nationalcyberleague.org/", description: "Competitive cybersecurity challenges for students — solve real-world security puzzles in a safe, gamified environment." },
    ],
    [
      { name: "Khan Academy: Computers and the Internet", url: "https://www.khanacademy.org/computing/computers-and-internet", type: "course" },
      { name: "Ghost in the Wires by Kevin Mitnick", url: "", type: "book" },
    ],
  ),

  s(nx(), "p38", "g8",
    "Take the most advanced math and science available. Learn Linux command-line basics — open a terminal, navigate directories, and edit files. Understanding the command line is non-negotiable for cybersecurity professionals. Start learning about network security: firewalls, intrusion detection, and how data travels across networks. Explore ethical hacking concepts — scanning, enumeration, and vulnerability assessment — through safe, legal platforms designed for students. Join or start a cybersecurity club at school. Consider participating in your first Capture the Flag (CTF) competition. The gap between knowing computers and securing them is where cybersecurity analysts live.",
    ["Pre-Algebra / Algebra", "Technology (Linux & Command Line)", "Science (Scientific Method)", "English (Technical Documentation)"],
    [
      { name: "TryHackMe — Pre-Security Learning Path", url: "https://tryhackme.com/", description: "Free, gamified cybersecurity training platform — start with the Pre-Security path to learn networking, Linux, and security basics in a browser-based lab." },
      { name: "picoCTF — Carnegie Mellon University", url: "https://picoctf.org/", description: "Free annual CTF competition designed for middle and high school students — solve security puzzles in cryptography, web exploitation, forensics, and reverse engineering." },
    ],
    [
      { name: "Linux Journey — Learn Linux for Free", url: "https://linuxjourney.com/", type: "course" },
      { name: "Crash Course: Computer Science", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo", type: "video" },
    ],
  ),

  s(nx(), "p38", "g9",
    "Take the most advanced math and computer science courses available. Master Linux command-line fundamentals: file permissions, processes, networking commands (ping, netstat, traceroute). Start learning Python for automation and security scripting — write scripts to scan ports or parse log files. Deepen understanding of networking: OSI model, TCP/IP, DNS, and how firewalls work. Learn about encryption: symmetric vs. asymmetric, hashing algorithms, and how HTTPS protects data in transit. Participate in CTF competitions actively — they build real skills faster than almost anything else. Cybersecurity is a field where practical skills matter more than credentials.",
    ["Algebra I", "Computer Science (Python)", "Networking Basics", "Honors Science", "English (Technical Writing)"],
    [
      { name: "CyberStart America", url: "https://www.cyberstartamerica.org/", description: "Free national cybersecurity program for high school students — solve online challenges, earn scholarships, and discover career paths in cyber." },
      { name: "Hack The Box — Starting Point", url: "https://www.hackthebox.com/", description: "Learn ethical hacking by hacking real (legal) machines — the Starting Point track introduces basic penetration testing concepts safely." },
    ],
    [
      { name: "Python Crash Course by Eric Matthes", url: "", type: "book" },
      { name: "Cisco Networking Academy — Introduction to Cybersecurity", url: "https://www.netacad.com/courses/cybersecurity/introduction-cybersecurity", type: "course" },
    ],
  ),

  s(nx(), "p38", "g10",
    "Take advanced math and computer science. Continue Python development — write scripts for automation, log analysis, and basic security tools. Deepen Linux administration skills: user management, service configuration, and system hardening. Learn about web application security: SQL injection, XSS, CSRF — the OWASP Top 10 is the industry standard for web vulnerabilities. Participate in CTF competitions at a higher level. Set up a home lab — use VirtualBox or old hardware to create a network you can experiment with safely. Learning by doing is the only way to become a competent security professional. Explore the different cybersecurity career paths: SOC analyst, penetration tester, incident responder, security engineer, and threat hunter.",
    ["Algebra / Geometry", "Computer Science / Python", "Networking & Security Concepts", "Web Technologies (HTML, JavaScript Basics)", "Linux Administration"],
    [
      { name: "National Cyber Scholarship Competition", url: "https://www.nationalcyberscholarship.org/", description: "Compete for college scholarships through cybersecurity challenges — the top performers earn recognition and funding for their education." },
      { name: "Build a Home Cybersecurity Lab", url: "", description: "Set up VirtualBox, install Kali Linux and a vulnerable machine (like Metasploitable), and practice scanning and enumeration in a safe environment." },
    ],
    [
      { name: "The Web Application Hacker's Handbook by Dafydd Stuttard", url: "", type: "book" },
      { name: "OWASP Top 10 — Web Application Security Risks", url: "https://owasp.org/www-project-top-ten/", type: "article" },
    ],
  ),

  s(nx(), "p38", "g11",
    "Take the most rigorous courses — AP Computer Science (if available), advanced math, and physics. Python should be your go-to language by now. Deepen your understanding of operating systems — learn about process isolation, memory management, and kernel vs. user space. Study network security in depth: packet analysis with Wireshark, firewall configuration, and VPNs. If your school offers cybersecurity or networking courses, take them. Pursue the CompTIA Security+ certification if you're ready — it's the entry-level industry certification and impressive on college applications. Active CTF participation and a GitHub portfolio of security projects distinguish strong applicants.",
    ["AP Computer Science / Programming", "Algebra II / Trigonometry", "Physics (Honors)", "Networking & Security Elective", "English (Technical Communication)"],
    [
      { name: "CompTIA Security+ Certification (Student Path)", url: "https://www.comptia.org/certifications/security", description: "The gold-standard entry-level cybersecurity certification — study for and attempt the Security+ exam to earn an industry-recognized credential before college." },
      { name: "NSA Codebreaker Challenge", url: "https://nsa-codebreaker.org/", description: "Annual competition from the NSA — solve realistic cybersecurity challenges based on real NSA missions. Open to high school and college students." },
    ],
    [
      { name: "Professor Messer — CompTIA Security+ (Free Videos)", url: "https://www.professormesser.com/security-plus/sy0-601/", type: "course" },
      { name: "Applied Cryptography by Bruce Schneier", url: "", type: "book" },
    ],
  ),

  s(nx(), "p38", "g12",
    "Take AP Computer Science A and AP Calculus or Statistics. Continue Security+ preparation. Deepen your understanding of cryptography: public-key infrastructure, digital certificates, and blockchain security. Learn about cloud security — AWS, Azure, and GCP dominate modern infrastructure and each has unique security considerations. Participate in advanced CTF competitions and consider playing in college-level CTFs. Build a significant security project: a custom firewall, an intrusion detection tool, or a vulnerability scanner — document it thoroughly on GitHub. Research cybersecurity degree programs: top schools include Carnegie Mellon, Georgia Tech, University of Maryland, and Purdue. Consider the NSA's Centers of Academic Excellence (CAE) designated programs.",
    ["AP Computer Science A", "AP Calculus / Statistics", "Physics", "Web Technologies", "Security Independent Study"],
    [
      { name: "NSA Centers of Academic Excellence (CAE) — Program Finder", url: "https://www.caecommunity.org/", description: "Find colleges with NSA/DHS-designated cybersecurity programs — these schools have curriculum vetted by the nation's top security agencies." },
      { name: "CyberPatriot — National Youth Cyber Defense Competition", url: "https://www.uscyberpatriot.org/", description: "The nation's largest high school cyber defense competition — teams secure virtual networks against real-world threats and compete nationally." },
    ],
    [
      { name: "Coursera: Cybersecurity Specialization (University of Maryland)", url: "https://www.coursera.org/specializations/cyber-security", type: "course" },
      { name: "The Cuckoo's Egg by Clifford Stoll", url: "", type: "book" },
    ],
  ),

  s(nx(), "p38", "g13",
    "The most critical year for college applications. Take AP Computer Science, AP Calculus, and AP Physics if available. Complete Security+ certification — it validates your knowledge and stands out on applications. Continue CTF competition at the highest level you can reach. If possible, get a summer internship or mentorship in IT or cybersecurity — even a help desk role teaches you how systems work and fail. Research undergraduate programs thoroughly: computer science, cybersecurity, or information assurance degrees at CAE-designated schools offer the best preparation. Build your professional network: join local cybersecurity meetups or online communities. Write application essays about solving security challenges — admissions officers love concrete problem-solving stories.",
    ["AP Computer Science A / Principles", "AP Calculus AB/BC", "AP Physics", "Security Certification (Security+)", "English (Application Essays)"],
    [
      { name: "Cybersecurity Summer Internship / IT Job Shadow", url: "", description: "Seek internships at local IT companies, government agencies, or your school district's IT department — real-world experience is invaluable." },
      { name: "DEF CON / BSides — Attend a Security Conference", url: "https://www.bsides.org/", description: "BSides security conferences are free or low-cost community events in many cities — attend talks, meet professionals, and experience cybersecurity culture." },
    ],
    [
      { name: "SANS Cyber Aces — Free Online Training", url: "https://www.sans.org/cyberaces/", description: "Free online courses from SANS, the world's leading cybersecurity training organization — cover OS, networking, and system administration fundamentals." },
      { name: "Countdown to Zero Day by Kim Zetter", url: "", type: "book" },
    ],
  ),

  s(nx(), "p38", "g14",
    "Apply to universities with strong cybersecurity or computer science programs. Complete AP exams — strong scores earn college credit. If you haven't yet, earn Security+ certification — it fulfills DoD 8570 requirements and is recognized across the industry. Apply for the NSA's Stokes Educational Scholarship Program or the DoD Cyber Scholarship Program — both pay for college in exchange for government service. Continue building your GitHub portfolio and CTF participation record. Many top cybersecurity professionals never attended college — but a degree opens doors, especially in government and large enterprises. Either path requires continuous, self-directed learning. Cybersecurity evolves constantly; the best professionals are obsessive lifelong learners.",
    ["AP CS A / Principles (Exam)", "AP Calculus (Exam)", "AP Physics (Exam)", "Security Project Portfolio", "English (Scholarship Essays)"],
    [
      { name: "Apply to CAE-Designated Cybersecurity Programs", url: "", description: "Top cybersecurity schools: Carnegie Mellon, Georgia Tech, University of Maryland, Purdue, University of Texas, Northeastern, Rochester Institute of Technology, and many state universities with NSA CAE designation." },
      { name: "DoD Cyber Scholarship Program (CySP)", url: "https://www.dodemergingtech.com/", description: "Full-tuition scholarship plus stipend in exchange for government service after graduation — one of the best deals in cybersecurity education." },
    ],
    [
      { name: "SANS Institute — CyberTalent Academy", url: "https://www.sans.org/", type: "program" },
      { name: "Sandworm by Andy Greenberg", url: "", type: "book" },
    ],
  ),

  s(nx(), "p38", "g15",
    "Major in Computer Science, Cybersecurity, or Information Assurance. Core coursework: data structures, algorithms, operating systems, computer networks, database systems, and software engineering. Security-specific courses: cryptography, network security, ethical hacking, digital forensics, and security policy. Pursue internships every summer — SOC analyst, security engineering, or IT security internships provide real security operations experience. Continue CTF competitions — the best security professionals hone skills in competitive environments. Earn advanced certifications: Network+, CySA+, or OSCP (highly respected penetration testing cert). Build a strong GitHub portfolio of security tools, writeups, and research. Join your school's cybersecurity club or start one. Network with professionals at conferences.",
    ["Computer Science / Cybersecurity Major", "Cryptography", "Network Security", "Operating Systems", "Ethical Hacking & Penetration Testing"],
    [
      { name: "NSA Student Programs — Internships & Co-ops", url: "https://www.intelligencecareers.gov/nsa/students-and-internships", description: "Paid internships at the NSA — work on real national security missions, earn a security clearance, and often convert to full-time employment." },
      { name: "Collegiate Cyber Defense Competition (CCDC)", url: "https://www.nationalccdc.org/", description: "The premier college cybersecurity competition — teams defend a business network against professional penetration testers in a high-pressure, realistic scenario." },
    ],
    [
      { name: "OSCP — Offensive Security Certified Professional", url: "https://www.offsec.com/courses/pen-200/", type: "program" },
      { name: "The Art of Invisibility by Kevin Mitnick", url: "", type: "book" },
    ],
  ),

  s(nx(), "p38", "g16",
    "Master of Science in Cybersecurity, Information Security, or Computer Science with a security focus (1-2 years). Deepen expertise in a specialization: penetration testing, incident response, malware analysis, cloud security, or security architecture. Earn advanced certifications: CISSP (requires 5 years experience, but you can earn Associate status), OSCP, or cloud security certs (AWS Security, Azure Security). Graduate programs open doors to leadership roles: Security Architect, Security Director, CISO track. Many professionals work 2-5 years before pursuing a master's — real-world experience makes the education more valuable. Alternatively, enter the workforce directly after undergrad — many SOC analyst and penetration tester roles don't require a graduate degree. The cybersecurity talent shortage means skilled practitioners are in extremely high demand.",
    ["Advanced Network Security", "Incident Response & Forensics", "Malware Analysis", "Security Architecture & Risk Management", "Cybersecurity Policy & Compliance"],
    [
      { name: "SANS Technology Institute — Graduate Programs", url: "https://www.sans.edu/", description: "SANS offers world-class graduate certificates and degrees taught by the top cybersecurity practitioners — the most respected training in the industry." },
      { name: "ISACA / (ISC)² — Professional Memberships", url: "https://www.isc2.org/", description: "Join (ISC)² as an Associate — access to the global cybersecurity community, job boards, continuing education, and the path to CISSP certification." },
    ],
    [
      { name: "CISSP — Certified Information Systems Security Professional", url: "https://www.isc2.org/certifications/cissp", type: "program" },
      { name: "Practical Malware Analysis by Michael Sikorski & Andrew Honig", url: "", type: "book" },
    ],
  ),

  s(nx(), "p38", "g17",
    "Ph.D. in Computer Science with a security focus — for those pursuing academic research, advanced cryptography, or CISO-level leadership in major organizations. Research areas: zero-trust architecture, AI-driven threat detection, post-quantum cryptography, and secure hardware design. Career pinnacles: Chief Information Security Officer (CISO) at a Fortune 500 company, Director of Cybersecurity at a federal agency, founder of a security startup, or tenured professor advancing the field. The cybersecurity landscape never stops evolving — from nation-state threat actors to ransomware gangs to AI-powered attacks. The highest-level cybersecurity professionals shape policy, mentor the next generation, and defend the infrastructure that modern civilization depends on. A career built on curiosity, integrity, and the relentless drive to solve hard problems.",
    ["Advanced Cryptography", "Security Research Methods", "AI / Machine Learning for Security", "Cyber Policy & International Relations", "Dissertation Research"],
    [
      { name: "Black Hat / DEF CON — Speaking & Research", url: "https://www.blackhat.com/", description: "Present original security research at the world's premier security conferences — establish yourself as a thought leader and influence the global security community." },
      { name: "NSA / CISA / FBI — Senior Leadership Roles", url: "https://www.cisa.gov/", description: "Senior technical and leadership roles at the Cybersecurity and Infrastructure Security Agency — protect the nation's critical infrastructure at the highest level." },
    ],
    [
      { name: "IEEE Symposium on Security and Privacy", url: "https://www.ieee-security.org/", type: "article" },
      { name: "Security Engineering by Ross Anderson", url: "", type: "book" },
    ],
  ),

  // ========================================================================
  // p39 — REAL ESTATE AGENT 🏠
  // ========================================================================

  s(nx(), "p39", "g1",
    "Real estate starts with noticing the world around you — buildings, neighborhoods, and homes! At this age, children are fascinated by houses, rooms, and the places people live. Point out different types of homes: apartments, single-family houses, townhouses, and farmhouses. Talk about rooms and their purposes — 'this is the kitchen where people cook, this is the bedroom where people sleep.' Play 'house' and pretend to buy and sell toy homes. Build houses with blocks and talk about the features. Visit open houses (with a parent) or drive through different neighborhoods. Every real estate agent started by noticing what makes a place feel like home.",
    ["Imaginative Play (Houses & Neighborhoods)", "Building & Spatial Awareness", "Vocabulary (Home & Community Words)", "Social-Emotional Learning (Community)"],
    [
      { name: "Neighborhood Walks — Notice Different Homes", url: "", description: "Walk through different neighborhoods and talk about the houses — colors, styles, sizes, and what makes each one unique. The earliest form of property tours!" },
      { name: "LEGO / Block House Building", url: "https://www.lego.com/en-us/kids", description: "Build houses with LEGOs or blocks — design rooms, add features, and talk about what makes a good home. Spatial thinking starts with building." },
    ],
    [
      { name: "The Little House by Virginia Lee Burton", url: "", type: "book" },
      { name: "Sesame Street: People in Your Neighborhood", url: "https://pbskids.org/sesame/", type: "video" },
    ],
  ),

  s(nx(), "p39", "g2",
    "Build understanding of communities and how people live. Learn about different community helpers — real estate agents help people find homes, which is one of the most important decisions a family makes. Practice counting with house numbers and practice money concepts: 'this costs more, this costs less.' Draw maps of your neighborhood and label the streets — location is everything in real estate! Talk about what makes a good home: safe, comfortable, near schools, near parks. Role-play being a real estate agent — show family members around your home and describe each room's best features. Communication and enthusiasm are the real estate agent's most important tools.",
    ["Counting & Number Recognition", "Map Skills & Geography (Neighborhood)", "Communication & Describing", "Money Concepts (More/Less)"],
    [
      { name: "Neighborhood Map Drawing", url: "", description: "Draw a map of your neighborhood, label streets and landmarks, and discuss what makes each location special — the foundation of property location analysis." },
      { name: "Play Real Estate Agent — Home Tours", url: "", description: "Give 'tours' of your home to family members — describe each room's features with enthusiasm. Practice the communication skills agents use every day." },
    ],
    [
      { name: "The House That Jack Built (Classic Nursery Rhyme)", url: "", type: "book" },
      { name: "Daniel Tiger's Neighborhood — Community Episodes", url: "https://pbskids.org/daniel/", type: "video" },
    ],
  ),

  s(nx(), "p39", "g3",
    "Strengthen reading, math, and communication — real estate agents read contracts, calculate commissions, and communicate constantly. Practice adding and subtracting with money: if a house costs X and you save Y, how much more do you need? Learn about your local area — its history, neighborhoods, and landmarks. When families choose homes, they choose communities. Practice describing things persuasively: convince a family member why your favorite toy is the best. Read books about different kinds of homes around the world — igloos, yurts, houseboats, and skyscrapers. The broader your understanding of how people live, the better you'll serve diverse clients.",
    ["Reading & Phonics", "Math (Addition, Subtraction & Money)", "Social Studies (Local Community)", "Persuasive Speaking"],
    [
      { name: "Zillow / Realtor.com — Browse Homes (with Parent)", url: "https://www.zillow.com/", description: "Look at homes for sale in your area with a parent — compare prices, sizes, and styles. Early exposure to real estate listings and market concepts." },
      { name: "Local History Museum / Historical Society Visit", url: "", description: "Learn about your town's history — understanding how neighborhoods developed over time is essential real estate knowledge." },
    ],
    [
      { name: "If You Lived Here: Houses of the World by Giles Laroche", url: "", type: "book" },
      { name: "BrainPOP Jr.: Communities", url: "https://jr.brainpop.com/socialstudies/communities/", type: "video" },
    ],
  ),

  s(nx(), "p39", "g4",
    "Deepen math skills, especially with money, measurement, and area. Real estate agents calculate square footage, price per square foot, and mortgage payments. Practice measuring rooms — how many steps wide is your bedroom? How long is your hallway? Learn about persuasive writing: write a description of your home that would make someone want to buy it. Study maps and learn about zoning — why are stores in one area and houses in another? Visit different types of neighborhoods and talk about the differences: urban, suburban, and rural. Learn about different architectural styles: Colonial, Victorian, Ranch, Modern — being able to identify and describe these is a key agent skill.",
    ["Reading Comprehension", "Math (Measurement, Money & Area)", "Geography (Maps & Zoning Basics)", "Persuasive Writing"],
    [
      { name: "Zillow — Compare Home Values by Neighborhood", url: "https://www.zillow.com/", description: "With parent guidance, compare home values in different neighborhoods — start understanding how location, size, and features affect price." },
      { name: "Write a 'For Sale' Listing for Your Home", url: "", description: "Write a persuasive description of your home highlighting its best features — practice the marketing and writing skills agents use every day." },
    ],
    [
      { name: "DK Eyewitness: Building", url: "", type: "book" },
      { name: "BrainPOP: Architecture", url: "https://www.brainpop.com/artsandmusic/artconcepts/architecture/", type: "video" },
    ],
  ),

  s(nx(), "p39", "g5",
    "Math expands to multiplication, division, and percentages — agents calculate commissions (typically 5-6%), mortgage interest, and property tax rates. Start learning about personal finance: saving, borrowing, and interest. Start a pretend business — a lemonade stand or craft sale — to learn customer service, pricing, and sales. Study your local area in depth: What are the best school districts? Where are the parks and amenities? What makes one neighborhood more expensive than another? Agents are local market experts. Practice negotiation: 'I'll trade you this for that.' Every real estate transaction involves negotiation. The best agents are part salesperson, part financial advisor, and part community expert.",
    ["Math (Multiplication, Division & Percentages)", "Social Studies (Local Geography & Economy)", "English (Persuasive Writing)", "Personal Finance Basics"],
    [
      { name: "Junior Achievement — BizTown / Finance Park", url: "https://www.juniorachievement.org/", description: "Hands-on programs teaching financial literacy, business, and community economics — run a simulated business and understand how local economies work." },
      { name: "Start a Small Business (Lemonade Stand / Craft Sale)", url: "", description: "Price products, interact with customers, negotiate, and manage money — every successful real estate agent started by learning sales fundamentals." },
    ],
    [
      { name: "The Everything Kids' Money Book by Brette Sember", url: "", type: "book" },
      { name: "Biz Kid$ (PBS)", url: "https://bizkids.com/", type: "video" },
    ],
  ),

  s(nx(), "p39", "g6",
    "Expand research and presentation skills — agents research properties, prepare market analyses, and present to clients. Research your local real estate market: look at homes for sale online, note their features, and compare prices. Practice presenting: give a 2-minute 'listing presentation' about a product or place you love. Deepen math skills with percentages and ratios — commission calculations, loan-to-value ratios, and cap rates all use these concepts. Study how mortgages work: principal, interest, down payment, and amortization. Learn about different real estate careers: residential agent, commercial broker, property manager, and real estate investor. The field is far broader than just helping families buy homes.",
    ["English (Research & Presentation)", "Math (Ratios & Percentages)", "Social Studies (Economics Basics)", "Technology (Spreadsheets)"],
    [
      { name: "Build a Comparative Market Analysis (Practice)", url: "", description: "Pick 5 similar homes in your area, compare their features and prices, and determine which is the best value — this is exactly what agents do for clients." },
      { name: "Toastmasters Youth Leadership / Public Speaking", url: "https://www.toastmasters.org/", description: "Build public speaking and presentation confidence — real estate agents present to clients, negotiate deals, and speak at open houses constantly." },
    ],
    [
      { name: "Rich Dad Poor Dad for Teens by Robert Kiyosaki", url: "", type: "book" },
      { name: "Mystery Science: Economics Mini-Lessons", url: "https://mysteryscience.com/", type: "course" },
    ],
  ),

  s(nx(), "p39", "g7",
    "Pre-algebra and data analysis become important — agents analyze market trends, price trends, and investment returns. Study basic economics: supply and demand, market cycles, and what causes housing prices to rise and fall. Learn about contracts — what makes an agreement binding? Agents work with purchase agreements, listing agreements, and disclosure forms. Practice communication and relationship building — real estate is a relationship business where trust and reputation are everything. Volunteer for a community organization to build local connections. Start watching the real estate market in your area regularly — notice which homes sell quickly, which sit, and why. Pattern recognition in markets is a learnable skill.",
    ["Math (Pre-Algebra & Data Analysis)", "Social Studies (Economics)", "English (Persuasive & Professional Writing)", "Technology (Research Tools)"],
    [
      { name: "National Association of Realtors — Student Resources", url: "https://www.nar.realtor/", description: "Explore the NAR website to understand how the professional real estate industry works — market data, ethics codes, and career paths." },
      { name: "School Fundraiser / Community Event Organizer", url: "", description: "Organize a fundraiser or community event — practice the networking, organization, and people skills that top real estate agents rely on daily." },
    ],
    [
      { name: "Khan Academy: Economics", url: "https://www.khanacademy.org/economics-finance-domain", type: "course" },
      { name: "The Millionaire Real Estate Agent by Gary Keller", url: "", type: "book" },
    ],
  ),

  s(nx(), "p39", "g8",
    "Take the most advanced math available and any business or economics courses offered. Study marketing fundamentals — real estate agents are small business owners who must market themselves and their listings. Learn about digital marketing: social media, photography, video tours, and online advertising — modern agents need these skills. Practice public speaking and persuasive communication. Study contract law basics — real estate transactions are legal contracts and understanding them is essential. Shadow a real estate agent if possible — many agents are happy to let interested students observe an open house or office day. Real estate is one of the few professions where you can earn a high income without a graduate degree — but it requires hustle, people skills, and local market expertise.",
    ["Pre-Algebra / Algebra", "Business / Marketing Elective", "English (Persuasive Communication)", "Social Studies (Government & Property Rights)"],
    [
      { name: "DECA — Business & Marketing Competition", url: "https://www.deca.org/", description: "Prepare for business and marketing careers through competitive events — sales, marketing, finance, and entrepreneurship categories build real estate-relevant skills." },
      { name: "Shadow a Real Estate Agent", url: "", description: "Spend a day with a local agent — attend an open house, see how listings are created, and learn what the day-to-day work actually involves." },
    ],
    [
      { name: "Crash Course: Economics", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtPNZwz5_o_5uirJ8gQXnhEO", type: "video" },
      { name: "The Book on Rental Property Investing by Brandon Turner", url: "", type: "book" },
    ],
  ),

  s(nx(), "p39", "g9",
    "Take business, marketing, or economics courses if your school offers them. High school is when you build the communication and people skills at the heart of real estate. Join debate team, speech club, or student government to practice public speaking and persuasion. Take a part-time job in sales or customer service — retail, food service, or any role where you interact with customers daily teaches you how to read people and meet their needs. Study your local housing market in depth — become the expert among your friends and family. Learn about the real estate licensing process in your state: pre-licensing education hours, exam, and brokerage affiliation requirements. In most states, you can't get licensed until 18, but you can start learning now.",
    ["Algebra I", "English (Communication & Debate)", "Business / Marketing Elective", "Social Studies (Government & Economics)", "Sales / Customer Service Experience"],
    [
      { name: "Future Business Leaders of America (FBLA)", url: "https://www.fbla.org/", description: "The largest business career student organization — compete in marketing, sales, entrepreneurship, and business communication events." },
      { name: "Part-Time Sales / Customer Service Job", url: "", description: "Work in retail, food service, or any customer-facing role — learning to communicate, overcome objections, and build rapport is directly transferable to real estate." },
    ],
    [
      { name: "Coursera: Successful Negotiation (University of Michigan)", url: "https://www.coursera.org/learn/negotiation-skills", type: "course" },
      { name: "How to Win Friends and Influence People by Dale Carnegie", url: "", type: "book" },
    ],
  ),

  s(nx(), "p39", "g10",
    "Take advanced English, economics, and any business courses available. Communication skills — written and verbal — are the real estate agent's primary tools. Join or form an investment club at school to learn about markets, return on investment, and asset valuation. Take photography or videography classes if available — high-quality listing photos and virtual tours sell homes. Study your local market: attend open houses on weekends (you can go with a parent), note how agents stage homes, and observe how they interact with potential buyers. Learn about real estate financing: mortgages, FHA loans, VA loans, and creative financing strategies. The best agents understand both the emotional and financial sides of a home purchase.",
    ["English (Advanced Writing & Speech)", "Economics / Personal Finance", "Algebra / Geometry", "Photography / Videography", "Marketing / Business Elective"],
    [
      { name: "Attend Open Houses — Observe & Learn", url: "", description: "Visit open houses in different neighborhoods and price ranges — watch how agents stage, present, and interact with visitors. Take notes on what works." },
      { name: "Photography / Videography Skills", url: "", description: "Learn to take great photos and videos — listing photography is one of the most important skills in modern real estate marketing." },
    ],
    [
      { name: "BiggerPockets — Real Estate Investing Podcast & Blog", url: "https://www.biggerpockets.com/", type: "article" },
      { name: "The Honest Real Estate Agent by Mario Jannatpour", url: "", type: "book" },
    ],
  ),

  s(nx(), "p39", "g11",
    "Take AP Economics (Micro or Macro), AP English, and any business or marketing electives. Real estate agents must understand market forces, communicate persuasively, and run a small business — these courses build all three. Deepen understanding of real estate finance: cap rates, cash-on-cash returns, and property valuation methods. Study sales psychology — why do people buy? What builds trust? How do you overcome objections? These are learnable skills. Continue attending open houses and consider asking a local agent if you can intern or assist with administrative tasks. Start building your personal brand — even a simple social media presence focused on local real estate shows initiative. Agents are entrepreneurs who happen to sell homes.",
    ["AP Economics (Micro or Macro)", "AP English Language", "Algebra II", "Marketing / Business Elective", "Psychology / Sociology"],
    [
      { name: "Real Estate Express — Pre-Licensing Course Preview", url: "https://www.realestateexpress.com/", description: "Explore real pre-licensing course content — most states allow you to start the education before you're 18, even if you can't take the exam yet." },
      { name: "Intern / Assist at a Real Estate Brokerage", url: "", description: "Offer to help with social media, open house setup, or administrative tasks at a local brokerage — inside exposure to the business before you're licensed." },
    ],
    [
      { name: "LinkedIn Learning: Real Estate Fundamentals", url: "https://www.linkedin.com/learning/", type: "course" },
      { name: "Influence: The Psychology of Persuasion by Robert Cialdini", url: "", type: "book" },
    ],
  ),

  s(nx(), "p39", "g12",
    "Take AP Economics, AP English, and statistics — market analysis requires comfort with data. Research your state's real estate licensing requirements in detail: pre-licensing education hours (typically 60-180 hours depending on the state), exam format, background check, and post-licensing education. Many states allow you to take the exam at 18 — plan your timeline. Continue building sales and communication skills. Consider getting a part-time job in sales — car sales, retail, or any role with commission-based pay teaches skills directly applicable to real estate. Research brokerage models: traditional (commission split), 100% commission, and team structures — understanding this now helps you choose the right first brokerage. Real estate is a profession where attitude and work ethic determine income more than any credential.",
    ["AP Economics (Macro & Micro)", "AP English Literature / Language", "Statistics / Data Analysis", "Psychology / Sociology", "Business / Finance Elective"],
    [
      { name: "State Real Estate Commission — Licensing Requirements", url: "", description: "Research your state's specific real estate licensing requirements — hours, exams, fees, and background checks. Plan your path to a license at 18." },
      { name: "Sales Job — Commission-Based Experience", url: "", description: "Work in a sales role — commission-based experience teaches prospecting, closing, and rejection handling better than any classroom." },
    ],
    [
      { name: "edX: Corporate Finance (Columbia)", url: "https://www.edx.org/learn/finance", type: "course" },
      { name: "Ninja Selling by Larry Kendall", url: "", type: "book" },
    ],
  ),

  s(nx(), "p39", "g13",
    "Enroll in dual-enrollment business, marketing, or real estate courses at a local community college if available. Economics, finance, and marketing are the academic pillars of real estate. Continue developing sales and people skills — these matter more than any course grade for real estate success. Research different real estate career paths: residential sales, commercial brokerage, property management, real estate development, and mortgage lending — the industry is vast. Learn about the National Association of Realtors (NAR) and the Realtor Code of Ethics. Consider whether college is right for you — real estate doesn't require a degree, but business, finance, or marketing degrees provide valuable knowledge. Many top agents started right after high school; others built a strong business foundation in college first.",
    ["Economics (AP or Dual Enrollment)", "English (Professional Communication)", "Marketing / Business", "Math (Statistics / Finance)", "Psychology / Sociology"],
    [
      { name: "Community College Real Estate Course (Dual Enrollment)", url: "", description: "Take a real estate principles or business course at a local community college while in high school — earn college credit and industry knowledge simultaneously." },
      { name: "National Association of Realtors — Student Membership", url: "https://www.nar.realtor/", description: "Explore NAR's resources for aspiring agents — market research, ethics training, and industry insights from the largest trade association in the country." },
    ],
    [
      { name: "Coursera: Financial Markets (Yale / Robert Shiller)", url: "https://www.coursera.org/learn/financial-markets-global", type: "course" },
      { name: "The Conversion Code by Chris Smith", url: "", type: "book" },
    ],
  ),

  s(nx(), "p39", "g14",
    "Decide on your path: college or direct-to-licensing. If college: apply to business, finance, marketing, or real estate programs. If direct: complete pre-licensing education immediately after graduation and take the state exam. Both paths work — what matters is your drive. If you're 18 by graduation, you can earn your license and start working as an agent within months. Many brokerages hire newly licensed agents and provide training. If going to college, consider getting licensed during summer break — you can work part-time as an agent while studying. Real estate offers extraordinary flexibility. Write a business plan: how will you get clients? What's your farm area (the neighborhood you'll specialize in)? What's your marketing strategy? Treating real estate as a business from day one separates top earners from the rest.",
    ["Economics / Business (Final)", "English (Business Writing)", "Real Estate Pre-Licensing Course", "Marketing / Communications", "Personal Finance"],
    [
      { name: "Complete State-Approved Pre-Licensing Course", url: "", description: "Enroll in and complete your state's required pre-licensing education — online courses from Real Estate Express, AceableAgent, or Kaplan make this accessible from anywhere." },
      { name: "Write a Real Estate Business Plan", url: "", description: "Create a 1-page business plan — target market, lead generation strategy, income goals, and marketing budget. Agents who plan earn more than those who don't." },
    ],
    [
      { name: "AceableAgent — Online Pre-Licensing", url: "https://www.aceableagent.com/", type: "course" },
      { name: "Your First 365 Days in Real Estate by Shelley Zavitz", url: "", type: "book" },
    ],
  ),

  s(nx(), "p39", "g15",
    "Path A — College: Major in Business, Finance, Marketing, Economics, or Real Estate. These degrees build deep knowledge of markets, negotiation, and entrepreneurship. Join real estate clubs, investment clubs, or entrepreneurship programs. Intern with a commercial real estate firm, property management company, or top-producing agent. Get licensed during college and work part-time — graduating with 2-4 years of experience and a client base puts you years ahead. Path B — Direct to Career: Earn your license at 18, join a brokerage with strong training, and focus on learning the craft full-time. Successful agents come from both paths. Either way, treat the first two years as an apprenticeship — learn scripts, master lead generation, understand contracts, and build your reputation. Income follows skill and effort.",
    ["Business / Finance / Real Estate Major", "Marketing & Sales", "Economics & Market Analysis", "Negotiation & Contracts", "Entrepreneurship"],
    [
      { name: "National Association of Realtors — Student Chapter", url: "https://www.nar.realtor/", description: "Connect with the NAR on campus — access to market data, scholarships, networking events, and the largest real estate professional network in the country." },
      { name: "Real Estate Internship — Residential or Commercial", url: "", description: "Intern with a top-producing agent, brokerage, or commercial real estate firm — hands-on experience with clients, contracts, and deal-making." },
    ],
    [
      { name: "Keller Williams — Ignite Training (New Agent)", url: "https://www.kw.com/", type: "program" },
      { name: "The Real Estate Game by William J. Poorvu", url: "", type: "book" },
    ],
  ),

  s(nx(), "p39", "g16",
    "Master of Business Administration (MBA) with a real estate concentration, or a Master of Real Estate (MRE) — for those pursuing commercial real estate, development, or executive leadership. An MBA opens doors to commercial brokerage, real estate private equity, REIT management, and corporate real estate roles. Alternatively, deepen expertise with professional designations: Certified Residential Specialist (CRS), Accredited Buyer's Representative (ABR), Seller Representative Specialist (SRS), or Certified Commercial Investment Member (CCIM) — the gold standard in commercial real estate. Many top agents skip graduate school and invest in coaching, masterminds, and advanced designation courses instead. Real estate is a business where results speak louder than degrees. A master's becomes valuable when transitioning to institutional real estate — managing billion-dollar portfolios, developing large-scale projects, or leading real estate divisions at major corporations.",
    ["MBA / MRE Program", "Commercial Real Estate Finance", "Real Estate Development", "Advanced Negotiation", "Portfolio & Asset Management"],
    [
      { name: "CCIM — Certified Commercial Investment Member", url: "https://www.ccim.com/", description: "The most respected commercial real estate designation — advanced financial analysis, market analysis, and investment decision-making training." },
      { name: "Urban Land Institute (ULI) — Student Membership", url: "https://www.uli.org/", description: "Global organization for real estate and land use professionals — networking, research, and leadership development with the top minds in real estate." },
    ],
    [
      { name: "Real Estate Finance & Investments by William Brueggeman & Jeffrey Fisher", url: "", type: "book" },
      { name: "The Real Estate Wholesaling Bible by Than Merrill", url: "", type: "book" },
    ],
  ),

  s(nx(), "p39", "g17",
    "Ph.D. in Real Estate, Urban Economics, or Urban Planning — for those pursuing academic careers, high-level policy roles, or research leadership. Real estate academics study housing markets, urban development, land use policy, and real estate finance at the highest level. Career pinnacles: Managing Director at a real estate private equity firm, Chief Investment Officer at a REIT, Head of Real Estate at a major corporation, or tenured professor shaping the next generation of real estate professionals. The real estate industry touches every aspect of the economy — from affordable housing policy to billion-dollar development projects. The most successful professionals combine deep market knowledge, exceptional people skills, unwavering integrity, and the entrepreneurial drive to build something lasting. A career helping people find and create homes — there are few callings more meaningful.",
    ["Ph.D. in Real Estate / Urban Economics", "Advanced Econometrics", "Housing Policy & Urban Planning", "Dissertation Research", "Academic Teaching & Publishing"],
    [
      { name: "American Real Estate Society (ARES)", url: "https://www.aresnet.org/", description: "Academic organization for real estate research — conferences, journals, and networking with the leading scholars in real estate economics and finance." },
      { name: "HUD / FHFA — Policy Research & Leadership", url: "https://www.hud.gov/", description: "Senior roles at the Department of Housing and Urban Development or Federal Housing Finance Agency — shape national housing policy affecting millions of Americans." },
    ],
    [
      { name: "Journal of Real Estate Finance and Economics", url: "https://www.springer.com/journal/11146", type: "article" },
      { name: "Triumph of the City by Edward Glaeser", url: "", type: "book" },
    ],
  ),



  // ========================================================================
  // p40 — DIETITIAN 🥗
  // ========================================================================

  s(nx(), "p40", "g1",
    "Dietitians are food scientists and health coaches — it starts with a joyful relationship with food. At this age, explore food through all five senses: smell, touch, taste, look, and crunch! Talk about where food comes from: apples grow on trees, milk comes from cows. Plant seeds and watch them grow. Sort foods by color and shape. Children who love a variety of whole foods early build habits for life.",
    ["Sensory Exploration (Taste, Touch, Smell)", "Where Food Comes From", "Colors & Sorting", "Planting & Growing"],
    [
      { name: "KidsGardening — Garden Activities for Young Children", url: "https://kidsgardening.org/", description: "Free resources and simple gardening projects — plant seeds, explore soil, and connect food to its source." },
      { name: "Local Farmers Market Visit", url: "", description: "Walk through a farmers market — let children pick one new fruit or vegetable to try and meet the farmers who grow their food." },
    ],
    [
      { name: "Eating the Alphabet by Lois Ehlert", url: "", type: "book" },
      { name: "Sesame Street: Healthy Habits for Life", url: "https://pbskids.org/sesame/", type: "video" },
    ],
  ),

  s(nx(), "p40", "g2",
    "Build curiosity about food and the body. Teach food groups: fruits, vegetables, grains, proteins, and dairy. Talk about 'food as fuel' — it helps us grow, run, and think. Involve children in simple kitchen tasks: washing vegetables, tearing lettuce, and stirring. Plant a garden together. Explore what kids eat in different cultures — food connects us to science, culture, and family.",
    ["Food Groups & Nutrition Basics", "Kitchen Safety & Skills", "Gardening & Nature", "Cultural Food Exploration"],
    [
      { name: "USDA MyPlate Kids' Place", url: "https://www.myplate.gov/life-stages/kids", description: "Games, activities, and resources teaching children about food groups and balanced eating from the USDA." },
      { name: "Junior Master Gardener Program", url: "https://jmgkids.us/", description: "Hands-on gardening program teaching children where food comes from and the joy of growing their own vegetables." },
    ],
    [
      { name: "Good Enough to Eat by Lizzy Rockwell", url: "", type: "book" },
      { name: "PBS Kids: Fizzy's Lunch Lab", url: "https://pbskids.org/lunchlab/", type: "video" },
    ],
  ),

  s(nx(), "p40", "g3",
    "Deepen understanding of food groups and balanced eating. Read simple nutrition labels — notice ingredients lists. Practice basic cooking: measuring, following recipes, using kitchen tools safely. Learn the digestive system basics: how food travels through the body. Grow a vegetable garden and cook with the harvest. Explore mindful eating — noticing hunger and fullness. Nutrition science begins with understanding that food is information for the body.",
    ["Reading (Recipes & Labels)", "Math (Measuring & Counting)", "Cooking Basics", "Science (Digestive System)"],
    [
      { name: "Kids Cook Real Food — eCourse", url: "https://kidscookrealfood.com/", description: "Video-based cooking courses teaching knife skills, measuring, and cooking techniques to children — builds lifelong kitchen competence." },
      { name: "Raddish Kids — Cooking Club", url: "https://www.raddishkids.com/", description: "Monthly cooking kit subscription with illustrated recipes, culinary skills, and cultural food exploration." },
    ],
    [
      { name: "The Vegetables We Eat by Gail Gibbons", url: "", type: "book" },
      { name: "Crash Course Kids: Digestive System", url: "https://www.youtube.com/watch?v=OY2lKCfAWHQ", type: "video" },
    ],
  ),

  s(nx(), "p40", "g4",
    "Cooking skills expand to multi-step recipes with supervision. Study nutrition labels in depth: calories, macronutrients (carbs, protein, fat), and micronutrients (vitamins, minerals). Learn food safety basics: hand washing, preventing cross-contamination, proper storage. Explore the science of taste: sweet, salty, sour, bitter, umami. Start a nutrition journal tracking food patterns. Dietitians combine scientific understanding with cooking skill and cultural awareness.",
    ["Reading (Nutrition Labels & Recipes)", "Math (Fractions — Recipe Scaling)", "Science (Food Safety & Human Body)", "Writing (Nutrition Journal)"],
    [
      { name: "America's Test Kitchen Kids — Young Chefs' Club", url: "https://www.americastestkitchen.com/kids", description: "Hands-on cooking experiments, recipes, and science activities from the most trusted name in cooking." },
      { name: "4-H Food & Nutrition Projects", url: "https://4-h.org/parents/4-h-programs/", description: "Food and nutrition projects teaching food preparation, safety, and nutrition science — find your local 4-H club." },
    ],
    [
      { name: "Kid Chef Every Day by America's Test Kitchen Kids", url: "", type: "book" },
      { name: "BrainPOP: Nutrition", url: "https://www.brainpop.com/health/nutrition/", type: "video" },
    ],
  ),

  s(nx(), "p40", "g5",
    "Study human body systems: digestive, circulatory, and how nutrients are absorbed. Learn macronutrients in detail: what protein does, why we need fat, how carbs fuel activity. Plan a day of balanced meals using MyPlate guidelines. Cook independently with supervision. Explore food justice: food deserts, food insecurity, and why some communities lack access to fresh food. Dietitians are advocates as much as clinicians.",
    ["Science (Human Biology & Body Systems)", "Math (Meal Planning & Budgeting)", "Cooking (Independent Meal Prep)", "Social Studies (Food Systems & Justice)"],
    [
      { name: "ChopChop Family — Cooking Magazine for Kids", url: "https://www.chopchopfamily.org/", description: "Quarterly cooking magazine with kid-tested recipes, food facts, and nutrition education — the fun way to learn about healthy cooking." },
      { name: "School / Community Garden Club", url: "", description: "Join or start a garden club — grow vegetables, learn soil science, and connect garden to kitchen through harvest-to-table cooking." },
    ],
    [
      { name: "The Omnivore's Dilemma: Young Readers Edition by Michael Pollan", url: "", type: "book" },
      { name: "TED-Ed: How the Food You Eat Affects Your Brain", url: "https://ed.ted.com/lessons/how-the-food-you-eat-affects-your-brain-mia-nacamulli", type: "video" },
    ],
  ),

  s(nx(), "p40", "g6",
    "Study the six essential nutrients: carbs, proteins, fats, vitamins, minerals, water — what they do and which foods provide them. Learn dietary guidelines: MyPlate and the Dietary Guidelines for Americans. Modify a favorite recipe to be more nutritious. Explore food allergies — how they work and how to read allergen labels. Research how food affects mood — the gut-brain connection. Nutrition sits at the intersection of biology, psychology, and culture.",
    ["Life Science (Biology & Body Systems)", "Math (Ratios, Portions & Analysis)", "English (Research & Interviewing)", "Cooking (Recipe Development)"],
    [
      { name: "Food Hero — Kids' Nutrition Research & Games", url: "https://www.foodhero.org/", description: "Oregon State University's nutrition platform — research-tested recipes, games, and activities for evidence-based nutrition learning." },
      { name: "Interview a Registered Dietitian", url: "", description: "Reach out to a local dietitian — ask about their career path, daily work, and what they love about helping people through food." },
    ],
    [
      { name: "Food Rules: An Eater's Manual by Michael Pollan", url: "", type: "book" },
      { name: "Khan Academy: Human Body Systems", url: "https://www.khanacademy.org/science/high-school-biology", type: "course" },
    ],
  ),

  s(nx(), "p40", "g7",
    "Study the digestive system in detail: enzymes, absorption, metabolism. Learn about diet-linked chronic diseases — diabetes, heart disease, hypertension — and how nutrition prevents and manages them. Practice advanced cooking: knife skills, sautéing, roasting, meal prepping. Study food labels critically: marketing claims vs. nutritional reality. Explore eating psychology — why we eat when not hungry. Volunteer at a food bank or community kitchen.",
    ["Life Science (Biology & Body Systems)", "Health Science (Chronic Disease Basics)", "Cooking (Advanced Techniques & Meal Prep)", "Psychology of Eating"],
    [
      { name: "Academy of Nutrition and Dietetics — Kids Eat Right", url: "https://www.eatright.org/for-kids", description: "Resources from the world's largest nutrition organization — science-based nutrition information for children and families." },
      { name: "Volunteer at a Food Bank or Community Kitchen", url: "", description: "Serve meals at a community kitchen or sort donations at a food bank — understand food insecurity firsthand." },
    ],
    [
      { name: "In Defense of Food by Michael Pollan", url: "", type: "book" },
      { name: "Crash Course: Metabolism & Nutrition", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtOAKed_MxxWBNaPno5h3Zs8", type: "video" },
    ],
  ),

  s(nx(), "p40", "g8",
    "Biology and chemistry are the foundation of nutrition science. Study metabolism: how the body converts food into energy and builds tissue. Explore food science: why bread rises, the Maillard reaction — cooking chemistry connects to clinical knowledge. Learn about eating disorders — dietitians help people develop healthy relationships with food. Research the RDN path: accredited Didactic Program in Dietetics (DPD), dietetic internship, and CDR registration exam.",
    ["Biology (Honors)", "Chemistry (Introductory)", "Health Science (Nutrition)", "English (Research & Communication)"],
    [
      { name: "Teens Cook: Weekly Recipe Challenge", url: "", description: "Cook a new recipe each week from a different cuisine — build kitchen confidence and food science understanding through practice." },
      { name: "Science Olympiad — Anatomy & Physiology", url: "https://www.soinc.org/", description: "Competitive events covering body systems, nutrition, and health science — build deep biology knowledge while competing." },
    ],
    [
      { name: "Why We Eat (Too Much) by Dr. Andrew Jenkinson", url: "", type: "book" },
      { name: "Coursera: Stanford Introduction to Food and Health", url: "https://www.coursera.org/learn/food-and-health", type: "course" },
    ],
  ),

  s(nx(), "p40", "g9",
    "Take biology, chemistry, and any health or nutrition electives. Study nutritional biochemistry: vitamins, minerals, phytochemicals, antioxidants — how they work molecularly. Understand food service systems: school lunch programs, hospital food service. Explore sports nutrition — how athletes fuel differently. Volunteer in a clinical or community nutrition setting. Research ACEND-accredited DPD programs — you need a degree from one to become an RDN.",
    ["Biology (Honors)", "Chemistry (Honors)", "Algebra I", "Health / Nutrition Elective", "English (Scientific Communication)"],
    [
      { name: "HOSA — Future Health Professionals", url: "https://hosa.org/", description: "Join HOSA's nutrition competitive events — knowledge tests, healthy lifestyle challenges, and health science leadership opportunities." },
      { name: "Academy of Nutrition and Dietetics — Become an RDN", url: "https://www.eatright.org/become-an-rdn", description: "Explore the RDN pathway — accredited programs, internship requirements, and career paths in clinical, community, and food service nutrition." },
    ],
    [
      { name: "Intuitive Eating by Evelyn Tribole & Elyse Resch", url: "", type: "book" },
      { name: "edX: Nutrition and Health (Wageningen University)", url: "https://www.edx.org/learn/nutrition", type: "course" },
    ],
  ),

  s(nx(), "p40", "g10",
    "Take advanced biology and chemistry. Study nutritional biochemistry: the Krebs cycle, electron transport chain, macronutrient metabolism. Learn medical nutrition therapy — how diet treats disease: low-sodium for hypertension, carb counting for diabetes. Deepen therapeutic cooking skills. Shadow a clinical dietitian at a hospital or community dietitian at WIC. Research ACEND-accredited programs — top schools include Cornell, UNC-Chapel Hill, Penn State. Dietetics requires a master's starting 2024; plan accordingly.",
    ["Biology (AP / Honors)", "Chemistry (AP / Honors)", "Algebra II", "Health Science / Anatomy", "Culinary Arts / Cooking"],
    [
      { name: "Job Shadow a Registered Dietitian", url: "", description: "Spend a day with an RDN in a hospital, community clinic, sports team, or private practice — see nutrition science applied in real settings." },
      { name: "National 4-H Food Challenge", url: "https://4-h.org/parents/programs-at-home/", description: "Teams create a dish from given ingredients, present nutrition facts and food safety — combining cooking, nutrition, and public speaking." },
    ],
    [
      { name: "Medical Nutrition Therapy: A Case Study Approach by Marcia Nelms", url: "", type: "book" },
      { name: "Khan Academy: Cellular Respiration", url: "https://www.khanacademy.org/science/biology/cellular-respiration", type: "course" },
    ],
  ),

  s(nx(), "p40", "g11",
    "Take AP Biology and AP Chemistry — nutrition is applied biochemistry. Volunteer at a hospital, community health center, or food bank for diverse exposure. Study food science deeply: food chemistry (emulsification, denaturation, Maillard), food microbiology (fermentation, spoilage, foodborne illness), and sensory evaluation. Learn the social determinants of health — how income, education, and neighborhood affect nutrition. Research the new master's requirement for RDN credentialing effective 2024.",
    ["AP Biology", "AP Chemistry", "Algebra II / Statistics", "Health / Nutrition Science", "English (Writing)"],
    [
      { name: "Hospital / Clinic Volunteer Program", url: "", description: "Volunteer in hospital nutrition services or a community clinic — exposure to clinical dietetics, patient interaction, and medical nutrition therapy." },
      { name: "ACEND — Find an Accredited DPD Program", url: "https://www.eatrightpro.org/acend", description: "Search for accredited Didactic Programs in Dietetics — the required undergraduate pathway to become a Registered Dietitian Nutritionist." },
    ],
    [
      { name: "On Food and Cooking: The Science and Lore of the Kitchen by Harold McGee", url: "", type: "book" },
      { name: "Coursera: Child Nutrition and Cooking (Stanford)", url: "https://www.coursera.org/learn/childnutrition", type: "course" },
    ],
  ),

  s(nx(), "p40", "g12",
    "Take AP Biology, AP Chemistry, and AP Psychology — counseling patients on behavior change is central to dietetics. Deepen medical nutrition therapy knowledge: diabetes management, cardiovascular disease, renal disease, GI disorders. Practice nutrition counseling — teach a family member about healthy eating using motivational interviewing techniques. Apply to universities with ACEND-accredited DPD programs. Research combined BS/MS programs that integrate the DPD, internship, and master's degree. Prepare strong applications emphasizing science coursework and volunteer experience.",
    ["AP Biology", "AP Chemistry", "AP Psychology", "Statistics", "English (College Application Essays)"],
    [
      { name: "Practice Nutrition Counseling", url: "", description: "Help peers or family with nutrition goals — practice explaining concepts simply, listening actively, and supporting behavior change with empathy." },
      { name: "Apply to ACEND-Accredited DPD Programs", url: "", description: "Top dietetics programs: Cornell, UNC-Chapel Hill, Boston University, Penn State, Texas, Illinois, Kansas State, and many land-grant universities." },
    ],
    [
      { name: "The China Study by T. Colin Campbell", url: "", type: "book" },
      { name: "NutritionFacts.org — Evidence-Based Nutrition", url: "https://nutritionfacts.org/", type: "article" },
    ],
  ),

  s(nx(), "p40", "g13",
    "Focus on AP Biology and AP Chemistry exams for college credit. Research ACEND-accredited programs thoroughly — visit campuses, meet nutrition faculty, understand DPD curriculum and internship match rates. Many programs have competitive DPD admission. Write application essays about meaningful nutrition experiences — helping a family member, volunteering at a food bank, exploring food science. Continue building cooking skills — RDNs who cook earn more credibility with patients. The best dietitians combine scientific knowledge, practical cooking skills, and genuine empathy.",
    ["AP Biology (Exam)", "AP Chemistry (Exam)", "AP Psychology / Stats (Exam)", "Nutrition Independent Study", "College Application Essays"],
    [
      { name: "Visit University Nutrition Science Departments", url: "", description: "Schedule visits with nutrition departments — talk to DPD directors about curriculum, internship placement rates, and research opportunities for undergraduates." },
      { name: "Food Science Experiment Series", url: "", description: "Design food science experiments — test how acids affect marinades, explore gluten formation in bread, or analyze vitamin C content in fruits." },
    ],
    [
      { name: "Academy of Nutrition and Dietetics — Student Membership", url: "https://www.eatrightpro.org/membership", type: "program" },
      { name: "How Not to Die by Dr. Michael Greger", url: "", type: "book" },
    ],
  ),

  s(nx(), "p40", "g14",
    "Choose a university with an ACEND-accredited DPD program. Strong AP scores may earn credit for introductory biology and chemistry. Apply for Academy of Nutrition and Dietetics Foundation scholarships. Continue cooking and food exploration — start a nutrition blog or social media documenting culinary experiments. If available, attend a pre-college summer program in nutrition or public health. Research the graduate degree requirement and plan finances accordingly. The world needs knowledgeable, compassionate nutrition professionals.",
    ["AP Biology (Exam — Final)", "AP Chemistry (Exam — Final)", "Nutrition Science (Self-Study)", "Public Health / Community Health", "English (Scholarship Essays)"],
    [
      { name: "Academy of Nutrition and Dietetics Foundation — Scholarships", url: "https://www.eatrightfoundation.org/", description: "Apply for nutrition and dietetics scholarships — the Foundation awards hundreds annually to students pursuing nutrition careers." },
      { name: "Pre-College Public Health / Nutrition Summer Program", url: "", description: "Attend a summer program in nutrition, public health, or food science — many universities offer pre-college immersion for aspiring health professionals." },
    ],
    [
      { name: "The Blue Zones Kitchen by Dan Buettner", url: "", type: "book" },
      { name: "Nutrition Science Podcast (Chris Masterjohn)", url: "https://chrismasterjohnphd.substack.com/", type: "article" },
    ],
  ),

  s(nx(), "p40", "g15",
    "Major in Nutrition, Dietetics, or Food Science through an ACEND-accredited DPD. Core coursework: anatomy, physiology, general/organic chemistry, biochemistry, microbiology, food science, human nutrition, medical nutrition therapy, and nutrition counseling. Maintain strong grades — dietetic internships are highly competitive (60-70% match rates). Gain experience across clinical, community, and food service settings. Join the university's student nutrition/dietetics club. Complete the DICAS application (Dietetic Internship Centralized Application Services) during senior year. The required master's can be part of coordinated BS-MS programs.",
    ["Nutrition Science / Dietetics Major", "Organic Chemistry & Biochemistry", "Anatomy & Physiology", "Medical Nutrition Therapy", "Nutrition Counseling Methods"],
    [
      { name: "Academy of Nutrition and Dietetics — Student Member", url: "https://www.eatrightpro.org/membership/student", description: "Access mentors, networking, Find-a-Preceptor database, internship application resources, and the annual Food & Nutrition Conference & Expo (FNCE)." },
      { name: "Clinical / Community Nutrition Volunteer", url: "", description: "Accumulate 200+ hours of nutrition-related volunteer experience across clinical, community, and food service settings — essential for competitive internship applications." },
    ],
    [
      { name: "Krause's Food & the Nutrition Care Process by L. Kathleen Mahan", url: "", type: "book" },
      { name: "Dietitians On Demand Blog — Internship Tips", url: "https://www.dietitiansondemand.com/", type: "article" },
    ],
  ),

  s(nx(), "p40", "g16",
    "Complete a Master of Science in Nutrition, Dietetics, or Public Health Nutrition (required for RDN exam starting 2024). Combine with a dietetic internship (1,200+ supervised practice hours in clinical, community, and food service rotations). Pass the CDR exam to earn the RDN credential. Most states also require licensure (LDN). Specialize: clinical nutrition (oncology, renal, critical care), sports nutrition (CSSD), pediatric nutrition (CSP), eating disorders (CEDRD), or public health. Career settings: hospitals, outpatient clinics, private practice, sports teams, school districts, food companies, research, and public health agencies.",
    ["Master's in Nutrition / Dietetics", "Dietetic Internship (1,200+ Hours)", "Advanced Medical Nutrition Therapy", "Nutrition Research Methods", "Specialization Coursework"],
    [
      { name: "Commission on Dietetic Registration (CDR) — RDN Exam", url: "https://www.cdrnet.org/", description: "Register for the RDN credentialing exam after completing DPD, master's degree, and dietetic internship — the gateway to professional practice." },
      { name: "Dietetic Internship Centralized Application (DICAS)", url: "https://www.dicasportal.org/", description: "Apply to dietetic internships through this centralized system — match rates are competitive; prepare a strong application with diverse experience." },
    ],
    [
      { name: "AND Pocket Guide to Nutrition Assessment", url: "", type: "book" },
      { name: "Dietitians in Nutrition Support (DNS) — Board Certification", url: "https://www.nutritioncare.org/", type: "program" },
    ],
  ),

  s(nx(), "p40", "g17",
    "Ph.D. in Nutritional Sciences, Clinical Nutrition, or Public Health Nutrition — for research, academic, or executive leadership. Research areas: nutritional epidemiology, nutrigenomics, metabolic health, food policy, or chronic disease interventions. Career pinnacles: Director of Clinical Nutrition at a major medical center, Chief Nutrition Officer at a food company, NIH Research Scientist, Professor and Department Chair. Board certifications continue throughout a career: Certified Diabetes Educator (CDE), CSSD, CNSC, and more. Nutrition science constantly evolves — from microbiome to personalized nutrition — and top professionals advance the evidence base improving millions of lives.",
    ["Ph.D. in Nutritional Sciences", "Nutritional Epidemiology", "Advanced Research Methods", "Food Policy & Public Health", "Dissertation Research"],
    [
      { name: "American Society for Nutrition (ASN) — Doctoral Membership", url: "https://nutrition.org/", description: "The premier research society for nutrition scientists — annual Nutrition conference, research journals, and career development for doctoral-level scientists." },
      { name: "NIH / USDA — Nutrition Research Fellowships", url: "https://www.niddk.nih.gov/", description: "Postdoctoral and research fellowships at NIH's nutrition institutes or USDA Human Nutrition Research Centers — advance science shaping national dietary policy." },
    ],
    [
      { name: "The American Journal of Clinical Nutrition", url: "https://academic.oup.com/ajcn", type: "article" },
      { name: "Biochemical, Physiological, and Molecular Aspects of Human Nutrition by Martha Stipanuk", url: "", type: "book" },
    ],
  ),

  // ========================================================================
  // p41 — GEOLOGIST 🌋
  // ========================================================================

  s(nx(), "p41", "g1",
    "Geologists study the Earth — and it starts with rock fascination! At this age, children are natural collectors — rocks, pebbles, shells, and interesting stones all become treasures. Take nature walks and let children pick up rocks they find beautiful. Sort them by color, size, and texture. Talk about how rocks feel: smooth, rough, sparkly, heavy. Play in sand and mud — geology begins with understanding earth materials. Read picture books about volcanoes and dinosaurs. The Earth is 4.5 billion years old, and every rock tells a story.",
    ["Nature Exploration & Collecting", "Sensory Play (Sand, Mud, Water)", "Sorting & Classifying", "Curiosity & Observation"],
    [
      { name: "Visit a Natural History Museum", url: "", description: "Explore fossils, rocks, minerals, and dinosaur exhibits — museums make Earth's history tangible and inspiring for young learners." },
      { name: "Nature Rock Collecting Walks", url: "", description: "Walk in parks, beaches, or riverbeds and collect interesting rocks — start a rock collection that grows with your child's curiosity." },
    ],
    [
      { name: "A Rock Is Lively by Dianna Hutts Aston", url: "", type: "book" },
      { name: "National Geographic Kids: Volcanoes 101", url: "https://kids.nationalgeographic.com/science/article/volcano", type: "video" },
    ],
  ),

  s(nx(), "p41", "g2",
    "Encourage rock collecting — notice differences: 'This one has stripes! This one sparkles!' Learn the three rock types through simple analogies: igneous rocks are 'born from fire' (volcanoes), sedimentary rocks are 'pressed like a sandwich', metamorphic rocks are 'changed by heat and pressure'. Play with sand and water to model erosion — build a sandcastle and watch water change it. Explore fossils — press objects into play dough to make 'fossils'. Talk about volcanoes and earthquakes. Geologists read the Earth like a book — and the first chapter starts with wonder.",
    ["Rock Types (Basic)", "Nature Observation", "Erosion Play (Sand & Water)", "Fossils & Earth History"],
    [
      { name: "USGS — Resources for Teachers & Kids", url: "https://www.usgs.gov/educational-resources", description: "Free educational materials from the U.S. Geological Survey — maps, lesson plans, and activities introducing earth science to young learners." },
      { name: "National Park Service — Junior Ranger Geology", url: "https://www.nps.gov/kids/junior-ranger.htm", description: "NPS Junior Ranger programs — many parks offer geology-themed activities where kids learn about rocks, fossils, and landforms." },
    ],
    [
      { name: "The Rock Factory: The Story About the Rock Cycle by Jacqui Bailey", url: "", type: "book" },
      { name: "SciShow Kids: Rocks & Minerals", url: "https://www.youtube.com/playlist?list=PLw2cuKNQvZ2c7-EbyXoXvG5PYZyj0fBsl", type: "video" },
    ],
  ),

  s(nx(), "p41", "g3",
    "Learn the rock cycle — how igneous, sedimentary, and metamorphic rocks transform through melting, weathering, and pressure. Start a rock collection with labels: where found, type, and special features. Use a magnifying glass to examine crystals and grain sizes. Build a model volcano and make it erupt — the baking soda and vinegar reaction models gas-driven eruptions. Learn about fossils: how they form, what they tell us about ancient life, and where to find them. Visit a local geology feature — a cliff, canyon, or rock formation — and discuss the forces that shaped it. Every landscape holds clues to the past.",
    ["Reading (Science Books & Field Guides)", "Science (Rock Cycle & Earth Materials)", "Art (Labeling & Drawing Specimens)", "Math (Measuring & Sorting)"],
    [
      { name: "Build & Erupt a Model Volcano", url: "", description: "Create a papier-mâché volcano and erupt it with baking soda and vinegar — learn about magma, lava, and volcanic eruptions through hands-on science." },
      { name: "Smithsonian Rock & Fossil Kits", url: "https://www.smithsonianstore.com/", description: "Starter rock and fossil collections from the Smithsonian — real specimens with identification guides teaching classification and observation skills." },
    ],
    [
      { name: "National Geographic Kids: Everything Rocks and Minerals by Steve Tomecek", url: "", type: "book" },
      { name: "Mystery Science: The Birth of Rocks", url: "https://mysteryscience.com/", type: "course" },
    ],
  ),

  s(nx(), "p41", "g4",
    "Systematic rock and mineral study. Identify common rocks and minerals using properties: color, hardness (scratch test), luster, and streak. Study plate tectonics — the theory explaining earthquakes, volcanoes, mountain building, and continental drift. Learn Earth's layers: crust, mantle, outer core, inner core — and how we know (seismic waves!). Explore the fossil record and geologic time scale. Start a field journal documenting rock finds with sketches, locations, and observations. Watch documentaries about famous geologic events: Mount St. Helens, the 1964 Alaska earthquake, and the formation of the Grand Canyon.",
    ["Earth Science (Rocks & Minerals)", "Geography (Maps & Landforms)", "Writing (Field Journal)", "Math (Measurement & Classification)"],
    [
      { name: "American Geosciences Institute — Earth Science Week", url: "https://www.earthsciweek.org/", description: "Annual celebration of earth science with free activities, contests, and resources — explore geology, paleontology, oceanography, and more." },
      { name: "Start a Rock & Mineral Collection with Field Journal", url: "", description: "Collect specimens, label them with ID cards (name, location, properties), and sketch observations in a field notebook — the geologist's essential practice." },
    ],
    [
      { name: "The Street Beneath My Feet by Charlotte Guillain", url: "", type: "book" },
      { name: "BrainPOP: Plate Tectonics", url: "https://www.brainpop.com/science/earthsystem/platetectonics/", type: "video" },
    ],
  ),

  s(nx(), "p41", "g5",
    "Deepen earth science knowledge. Study plate tectonics in detail — how plates move, what happens at boundaries (convergent, divergent, transform), and the resulting landforms: mountains, trenches, rift valleys. Explore volcanoes: shield, composite, cinder cone — and why they erupt differently. Learn about earthquakes: seismic waves, Richter scale, and how buildings are engineered to withstand them. Continue rock collecting with systematic identification using hardness, streak, and acid tests. Visit a local geological feature or fossil site. The best geologists are field observers first — they see stories in stone.",
    ["Science (Earth Science & Geology)", "Geography (Maps & Topography)", "Math (Measurement & Data)", "Reading (Science Articles & Books)"],
    [
      { name: "USGS — Earthquake Hazards Program for Kids", url: "https://earthquake.usgs.gov/learn/kids/", description: "Interactive earthquake resources from the USGS — learn about seismic waves, earthquake safety, and how scientists monitor Earth's movements." },
      { name: "Visit a Local Geological Site or Fossil Quarry", url: "", description: "Take a field trip to a nearby geological feature — a cave, fault line, volcanic formation, or fossil bed — and observe geology in the real world." },
    ],
    [
      { name: "DK Eyewitness: Rocks & Minerals", url: "", type: "book" },
      { name: "Khan Academy: Plate Tectonics", url: "https://www.khanacademy.org/science/middle-school-earth-and-space-science", type: "course" },
    ],
  ),

  s(nx(), "p41", "g6",
    "Study the rock cycle in depth — how igneous, sedimentary, and metamorphic rocks form, transform, and cycle through Earth's systems. Learn about minerals: the building blocks of rocks — quartz, feldspar, mica, calcite — and how to identify them. Practice map reading and create topographic maps of your neighborhood or a local park. Explore Earth's history through the geologic time scale: Precambrian, Paleozoic, Mesozoic, Cenozoic — and the life forms that defined each era. Start a more advanced rock collection with proper labeling and specimen storage. Join a rockhounding or mineral club if available.",
    ["Earth Science (Rock Cycle & Minerals)", "Geography (Topographic Maps)", "Science (Geologic Time & Fossils)", "English (Writing & Research)"],
    [
      { name: "Mineralogical Society of America — Kids' Resources", url: "https://www.minsocam.org/", description: "Educational resources about minerals — learn crystal systems, mineral identification, and the beauty of the mineral kingdom." },
      { name: "Join a Rockhounding or Mineral Club", url: "", description: "Find a local gem and mineral society — go on field trips, attend shows, and learn from experienced collectors who know your area's geology." },
    ],
    [
      { name: "Smithsonian Handbooks: Rocks & Minerals by Chris Pellant", url: "", type: "book" },
      { name: "BBC Earth: The Power of the Planet — Volcanoes", url: "https://www.bbc.co.uk/programmes/b008h3zv", type: "video" },
    ],
  ),

  s(nx(), "p41", "g7",
    "Take science and math seriously — geology requires strong analytical skills. Study Earth's structure in detail: lithosphere, asthenosphere, mantle convection, and core dynamics. Learn about natural resources: how oil, gas, coal, and minerals form and how geologists find them. Understand the scientific principles behind dating rocks: relative dating (superposition, cross-cutting) and absolute dating (radiometric methods). Explore careers in geology: petroleum geologist, mining geologist, environmental geologist, hydrogeologist, seismologist, and volcanologist. Start learning about GIS (Geographic Information Systems) — digital mapping is essential in modern geology.",
    ["Earth Science (Advanced Geology)", "Math (Pre-Algebra & Measurement)", "Technology (GIS & Mapping Basics)", "Life Science (Fossils & Evolution)"],
    [
      { name: "Google Earth — Explore Geological Features", url: "https://earth.google.com/", description: "Explore volcanoes, canyons, mountains, and faults from space — use satellite imagery to see geology at a scale impossible from the ground." },
      { name: "Geological Society of America — Education Resources", url: "https://www.geosociety.org/", description: "Educational materials from the premier geological society — resources for students exploring geoscience careers and concepts." },
    ],
    [
      { name: "Annals of the Former World by John McPhee", url: "", type: "book" },
      { name: "Crash Course: History of Science — Earth Science", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtNppY8ZHMPDH5TKK2UpU8Ng", type: "video" },
    ],
  ),

  s(nx(), "p41", "g8",
    "Take advanced science and math — geology is a quantitative science. Study chemistry: Earth's materials are chemical compounds, and understanding mineral formation and weathering requires chemistry knowledge. Learn about natural hazards: earthquakes, volcanoes, tsunamis, landslides, and how geologists assess and mitigate risk. Explore field geology basics: how to read rock outcrops, measure strike and dip, and interpret the geologic history of an area. Visit a university geology department or attend a public lecture. Consider attending a geology summer camp — many universities offer field-based programs. Geologists spend significant time outdoors; comfort in the field is essential.",
    ["Earth Science (Geology Honors)", "Chemistry (Introductory)", "Math (Algebra)", "Technology (GIS & Data Analysis)"],
    [
      { name: "American Geosciences Institute — Geoscience Online", url: "https://www.americangeosciences.org/", description: "Explore geoscience careers, education pathways, and current research — AGI connects earth science to society's biggest challenges." },
      { name: "University Geology Summer Camp / Field Trip", url: "", description: "Attend a geology field camp or summer program for middle school students — many universities offer hands-on programs introducing field methods and earth science." },
    ],
    [
      { name: "The Map That Changed the World by Simon Winchester", url: "", type: "book" },
      { name: "Khan Academy: Cosmology and Astronomy", url: "https://www.khanacademy.org/science/cosmology-and-astronomy", type: "course" },
    ],
  ),

  s(nx(), "p41", "g9",
    "Take biology, chemistry, and earth science — geology integrates all three. Study mineralogy: crystal systems, physical properties, and chemical composition of minerals. Learn about igneous petrology — how magma cools and crystallizes into different rock types. Explore structural geology: folds, faults, and how rock layers deform under stress. Continue field work — join school science clubs, participate in geology field trips, and practice field observation skills. Research undergraduate geology programs — geology is typically offered as a B.S. in Geology or Geoscience. Strong field skills and comfort with math and chemistry are essential for success.",
    ["Biology (Honors)", "Chemistry (Honors)", "Earth Science / Geology", "Algebra I", "Geography (GIS & Maps)"],
    [
      { name: "National Park Service — Geoscientists-in-the-Parks", url: "https://www.nps.gov/subjects/geology/geoscientists-in-the-parks.htm", description: "Internship program placing students in national parks to work on geology projects — gain real field experience and contribute to park science." },
      { name: "American Museum of Natural History — Earth Science Online", url: "https://www.amnh.org/explore/ology/earth", description: "Interactive earth science resources from AMNH — explore geology, paleontology, and the forces that shape our planet." },
    ],
    [
      { name: "A Short History of Nearly Everything by Bill Bryson", url: "", type: "book" },
      { name: "Coursera: Planet Earth...and You! (University of Illinois)", url: "https://www.coursera.org/learn/planet-earth", type: "course" },
    ],
  ),

  s(nx(), "p41", "g10",
    "Take biology, chemistry, and any available earth science or environmental science courses. Study sedimentary geology — how sediments are deposited, compacted, and cemented into rock, and what sedimentary structures reveal about ancient environments. Learn about paleontology: fossil identification, evolutionary history, and how fossils are used to date rocks and reconstruct past ecosystems. Practice topographic map reading and basic surveying. If possible, attend a geology field camp or summer program at a university. Research geoscience programs: schools with strong field programs include Colorado School of Mines, University of Arizona, University of Texas, and many state universities near interesting geology.",
    ["Biology (AP / Honors)", "Chemistry (AP / Honors)", "Earth Science / Geology", "Algebra II / Trigonometry", "Geography / Environmental Science"],
    [
      { name: "GSA — GeoVentures Field Experiences", url: "https://www.geosociety.org/", description: "Geological Society of America's field trips and experiences — explore spectacular geology with professional geologists as guides." },
      { name: "Paleontological Research Institution — Fossil Projects", url: "https://www.priweb.org/", description: "Resources for aspiring paleontologists and geologists — fossil identification, earth history, and citizen science projects for students." },
    ],
    [
      { name: "The Rocks Don't Lie by David R. Montgomery", url: "", type: "book" },
      { name: "edX: Geology (University of Queensland)", url: "https://www.edx.org/learn/geology", type: "course" },
    ],
  ),

  s(nx(), "p41", "g11",
    "Take AP Chemistry and AP Biology if available — geology is applied chemistry and biology over deep time. Study historical geology: the 4.5-billion-year history of Earth, from formation to the rise of humans. Learn about economic geology: how ore deposits form and how mining geologists find and extract valuable minerals. Practice field skills: use a Brunton compass, measure strike and dip, and create geologic maps. Participate in Science Olympiad events like Rocks & Minerals or Dynamic Planet. Research geoscience degree programs and consider schools near geologically interesting regions. Geologists need strong math, chemistry, and physics — take the most rigorous courses available.",
    ["AP Chemistry", "AP Biology / Environmental Science", "Algebra II / Pre-Calculus", "Earth Science / Geology (Elective)", "Geography / GIS"],
    [
      { name: "Science Olympiad — Rocks & Minerals / Dynamic Planet", url: "https://www.soinc.org/", description: "Compete in geology and earth science events — learn to identify rocks, minerals, and fossils, and understand plate tectonics, earthquakes, and volcanoes." },
      { name: "Association of American State Geologists — Student Resources", url: "https://www.stategeologists.org/", description: "Connect with your state geological survey — many offer student programs, maps, and resources for young geologists exploring their local geology." },
    ],
    [
      { name: "Earth: An Introduction to Physical Geology by Tarbuck & Lutgens", url: "", type: "book" },
      { name: "Khan Academy: AP Chemistry", url: "https://www.khanacademy.org/science/ap-chemistry", type: "course" },
    ],
  ),

  s(nx(), "p41", "g12",
    "Take AP Chemistry, AP Physics, and AP Calculus — geology is quantitative. Study geophysics: gravity, magnetics, and seismology — how we 'see' inside the Earth. Learn about hydrogeology: groundwater flow, aquifer management, and water resources. Practice advanced field mapping and consider attending a summer geology field camp. Research geoscience degree programs thoroughly — top schools include Colorado School of Mines, MIT, Stanford, Caltech, University of Arizona, University of Texas, Penn State, and UC Santa Barbara. Prepare strong applications emphasizing science coursework, field experience, and passion for understanding the Earth. Geology majors are among the happiest in college — they spend time outdoors doing real science.",
    ["AP Chemistry", "AP Physics", "AP Calculus", "Earth Science / Geology", "English (College Application Essays)"],
    [
      { name: "Apply to University Geoscience Field Camps", url: "", description: "Many universities offer summer field camps for high school students — hands-on experience mapping, identifying rocks, and doing field geology with professors." },
      { name: "USGS — Student Employment & Volunteer Programs", url: "https://www.usgs.gov/human-capital/students-and-recent-graduates", description: "Explore paid internships and volunteer opportunities at the USGS — work alongside federal geologists on real earth science projects." },
    ],
    [
      { name: "Basin and Range by John McPhee", url: "", type: "book" },
      { name: "MIT OpenCourseWare: Introduction to Geology", url: "https://ocw.mit.edu/courses/12-001-introduction-to-geology-fall-2013/", type: "course" },
    ],
  ),

  s(nx(), "p41", "g13",
    "The most critical year for college applications. Complete AP Chemistry, AP Physics, and AP Calculus exams. Research geoscience programs — visit campuses with strong geology departments, especially those near interesting geology (mountains, coasts, deserts, or volcanic regions). Look for programs that require a field camp component — field experience is the signature of a strong geology education. Write application essays about geological experiences and discoveries — the time you found a fossil, climbed a volcano, or mapped a local outcrop. The best geologists are curious, observant, and love being outdoors. Demonstrate all three in your applications.",
    ["AP Chemistry (Exam)", "AP Physics (Exam)", "AP Calculus (Exam)", "Geology / Earth Science", "College Application Essays"],
    [
      { name: "Visit University Geology Departments", url: "", description: "Tour geology departments at target schools — meet faculty, see labs and collections, and learn about field camp requirements and research opportunities." },
      { name: "Complete a Geology Independent Research Project", url: "", description: "Design a research project — map the geology of a local area, study stream erosion, or analyze local rock samples — and write up your findings as a scientific paper." },
    ],
    [
      { name: "Geological Society of America — Student Membership", url: "https://www.geosociety.org/membership", type: "program" },
      { name: "The Control of Nature by John McPhee", url: "", type: "book" },
    ],
  ),

  s(nx(), "p41", "g14",
    "Apply to universities with strong geoscience programs. Submit AP exam scores for college credit. Apply for geoscience scholarships from the Geological Society of America, American Geosciences Institute, and industry organizations. If available, attend a pre-college geology field program. Research professional geologist (PG) licensure requirements — most states require a BS in geology, several years of experience, and passing the ASBOG Fundamentals and Practice exams. Consider schools near geological diversity — studying geology in Arizona, Colorado, California, or the Pacific Northwest provides a natural laboratory. Geologists are explorers by nature — choose a path that feeds your curiosity.",
    ["AP Chemistry (Exam — Final)", "AP Physics (Exam — Final)", "AP Calculus (Exam — Final)", "Geology / Earth Science Independent Study", "English (Scholarship Essays)"],
    [
      { name: "GSA / AGI — Geoscience Scholarships", url: "https://www.geosociety.org/scholarships", description: "Apply for geology and geoscience scholarships — the GSA and AGI award scholarships to students pursuing careers in the geosciences." },
      { name: "Pre-College Geology Field Program", url: "", description: "Attend a summer geology program at a university — hands-on field mapping, rock identification, and earth science research alongside faculty and graduate students." },
    ],
    [
      { name: "Rising from the Plains by John McPhee", url: "", type: "book" },
      { name: "American Geosciences Institute — Career Resources", url: "https://www.americangeosciences.org/workforce", type: "article" },
    ],
  ),

  s(nx(), "p41", "g15",
    "Major in Geology, Geoscience, or Earth Science (B.S.). Core coursework: physical geology, historical geology, mineralogy, petrology (igneous, sedimentary, metamorphic), structural geology, stratigraphy, geophysics, geochemistry, and hydrogeology. Complete a required summer field camp — 4-6 weeks of intensive field mapping, typically in a geologically diverse region. Gain research experience working in a professor's lab. Join the student geology club and attend GSA or AGU conferences. Consider pursuing GIS certification alongside your degree — spatial data skills are highly marketable. Seek summer internships: USGS, state geological surveys, environmental consulting firms, mining companies, or national parks. Field experience is the currency of geology.",
    ["Geology / Geoscience Major (B.S.)", "Mineralogy & Petrology", "Structural Geology & Field Methods", "Geochemistry & Geophysics", "GIS & Spatial Analysis"],
    [
      { name: "Geological Society of America — Student Member & Conference", url: "https://www.geosociety.org/", description: "Join GSA and attend the annual meeting — present research, network with professionals, and explore the full breadth of geoscience careers." },
      { name: "USGS / State Geological Survey — Summer Internship", url: "", description: "Apply for paid geology internships at the USGS, state surveys, or environmental firms — real-world experience in mapping, hazard assessment, and resource management." },
    ],
    [
      { name: "Manual of Mineral Science by Cornelis Klein", url: "", type: "book" },
      { name: "American Geophysical Union (AGU) — Student Resources", url: "https://www.agu.org/", type: "article" },
    ],
  ),

  s(nx(), "p41", "g16",
    "Master of Science in Geology, Geoscience, or a specialized field (hydrogeology, geophysics, geochemistry, petroleum geology, environmental geology). Graduate school deepens expertise and opens doors to higher-level positions. Develop a thesis research project — field-based or lab-based original research that contributes new knowledge to the field. Take the ASBOG Fundamentals of Geology (FG) exam — the first step toward Professional Geologist (PG) licensure. Career paths: environmental consulting, oil and gas exploration, mining, hydrogeology, engineering geology, government (USGS, state surveys, EPA), or academia. The energy transition is creating new opportunities: carbon sequestration, geothermal energy, and critical mineral exploration all need geologists.",
    ["M.S. in Geology / Geoscience", "Thesis Research", "Advanced Field Methods", "Specialization Coursework", "ASBOG FG Exam Preparation"],
    [
      { name: "ASBOG — Fundamentals of Geology (FG) Exam", url: "https://www.asbog.org/", description: "Register for the Fundamentals of Geology exam — the first step toward Professional Geologist licensure, required for many consulting and government positions." },
      { name: "American Association of Petroleum Geologists (AAPG) — Student Chapter", url: "https://www.aapg.org/", description: "Join AAPG as a student member — access to industry research, job boards, and networking with energy industry geologists worldwide." },
    ],
    [
      { name: "Structural Geology by Haakon Fossen", url: "", type: "book" },
      { name: "Society of Economic Geologists — Student Resources", url: "https://www.segweb.org/", type: "article" },
    ],
  ),

  s(nx(), "p41", "g17",
    "Ph.D. in Geology, Geoscience, or Geophysics — for academic research, high-level government science, or industry research leadership. Research areas: tectonics, climate change through Earth's history, planetary geology, geothermal energy, critical mineral deposits, or earthquake/seismic hazard assessment. Complete the ASBOG Practice of Geology (PG) exam — earn full Professional Geologist licensure. Career pinnacles: USGS Research Geologist, Professor and Department Chair at a research university, Chief Geologist at a major mining or oil company, or NASA Planetary Geologist studying the geology of other worlds. Geologists read the autobiography of the Earth — and the story is still being written. A career spent understanding the planet we call home.",
    ["Ph.D. in Geology / Geoscience", "Dissertation Research", "Advanced Geophysics / Geochemistry", "Professional Geologist (PG) Licensure", "Academic Teaching & Publishing"],
    [
      { name: "Geological Society of America — Research Grants", url: "https://www.geosociety.org/", description: "Apply for GSA research grants supporting doctoral research — funding for field work, lab analyses, and conference presentations." },
      { name: "NASA — Planetary Geology & Geophysics Research", url: "https://science.nasa.gov/planetary-science/", description: "Research opportunities in planetary geology — study the geology of Mars, the Moon, and other bodies using satellite data, rovers, and analog field sites on Earth." },
    ],
    [
      { name: "GSA Bulletin — Leading Geology Research Journal", url: "https://pubs.geoscienceworld.org/gsabulletin", type: "article" },
      { name: "Principles of Sedimentology and Stratigraphy by Sam Boggs Jr.", url: "", type: "book" },
    ],
  ),

];
