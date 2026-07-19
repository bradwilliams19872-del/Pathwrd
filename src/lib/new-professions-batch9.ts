/**
 * Batch 9 — p47 AI/ML Engineer, p48 Urban Planner, p49 Diplomat, p50 Aircraft Mechanic, p51 Meteorologist
 * 
 * All 17 grade levels per profession. IDs: rs1345–rs1429. 85 steps total.
 * 
 * Import: import { newProfessionsBatch9 } from './new-professions-batch9';
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

let n = 1345;
function nx(): string { return "rs" + (n++); }

export const newProfessionsBatch9: RoadmapStep[] = [

  // ========================================================================
  // p47 — AI/ML ENGINEER 🤖
  // ========================================================================

  s(nx(), "p47", "g1",
    "AI begins with curiosity about patterns! Sort toys by color and shape. Play 'what comes next' pattern games with blocks, beads, and everyday objects. Puzzles teach the kind of logical thinking that machine learning engineers use every day — breaking big problems into smaller pieces. Ask 'why' questions about how things work. At this age, the goal is falling in love with figuring things out.",
    ["Pattern Recognition", "Sorting & Classification", "Counting & Numbers", "Curiosity & Asking Questions"],
    [
      { name: "PBS Kids — Math & Pattern Games", url: "https://pbskids.org/games/math/", description: "Free pattern, counting, and logic games that build the earliest foundations of computational thinking." },
      { name: "Montessori Pattern Blocks at Home", url: "", description: "Classic pattern blocks and tangrams build visual-spatial reasoning — the same kind of thinking that powers computer vision and neural networks." },
    ],
    [
      { name: "Press Here by Hervé Tullet", url: "", type: "book" },
      { name: "Pattern Bugs by Trudy Harris", url: "", type: "book" },
    ],
  ),

  s(nx(), "p47", "g2",
    "Pattern recognition deepens. Play logic games — 'If this, then that' is the core of all programming. Build with LEGOs following instructions, then invent your own designs. Sequence stories: what happened first, next, last. Understanding sequences is understanding algorithms. Count, sort, and measure everything. The children who grow up to build AI are the ones who never stop asking 'Why?' and 'What if?'",
    ["Sequencing (First/Next/Last)", "Counting & Comparing", "Building & Construction", "Logic & Reasoning"],
    [
      { name: "ScratchJr", url: "https://www.scratchjr.org/", description: "Free app where children program interactive stories by snapping together graphical blocks — the gentlest introduction to coding logic." },
      { name: "LEGO Classic Creative Building Sets", url: "https://www.lego.com/en-us/themes/classic", description: "Open-ended building develops spatial reasoning and systems thinking — foundational to robotics and AI." },
    ],
    [
      { name: "Rosie Revere, Engineer by Andrea Beaty", url: "", type: "book" },
      { name: "BrainPOP Jr.: Patterns", url: "https://jr.brainpop.com/", type: "video" },
    ],
  ),

  s(nx(), "p47", "g3",
    "Strengthen logic and problem-solving through games like chess, checkers, and strategy puzzles. Introduce the concept of step-by-step instructions — cook from a recipe, build from a LEGO manual, write directions for a friend. This is algorithmic thinking in its purest form. Explore 'If-Then' thinking: 'If it rains, then we bring an umbrella.' Practice mental math daily. AI engineers live in the space between mathematics and creativity — nurture both.",
    ["Mental Math & Logic", "Reading Comprehension", "Writing (Step-by-step Instructions)", "Strategy Games"],
    [
      { name: "Code.org — Course A (Beginner)", url: "https://code.org/student/elementary", description: "Free drag-and-drop coding puzzles that teach sequencing, loops, and conditionals — the building blocks of all programming." },
      { name: "ChessKid.com", url: "https://www.chesskid.com/", description: "Learn chess online with puzzles and games — chess builds the strategic, multi-step reasoning that machine learning engineers use to design algorithms." },
    ],
    [
      { name: "Hello Ruby: Adventures in Coding by Linda Liukas", url: "", type: "book" },
      { name: "Crash Course Kids: Engineering", url: "https://www.youtube.com/playlist?list=PLhz12vamHOnZ4ZDC0dS6C9HRN5Qrm0jHO", type: "video" },
    ],
  ),

  s(nx(), "p47", "g4",
    "Start learning how computers work. What is input? What is output? How does a program follow instructions? Play with simple coding games online. Practice breaking problems into sub-problems — this is the essence of computational thinking. Strengthen math skills: multiplication, division, fractions. These are the building blocks of the statistics and linear algebra that power AI. Keep a 'problem-solving journal' — write down puzzles you solved and how you did it. AI engineers are, above all, systematic problem-solvers.",
    ["Math (Multiplication & Division)", "Technology Literacy", "Logic Puzzles", "Writing (Explaining Thinking)"],
    [
      { name: "Scratch (MIT)", url: "https://scratch.mit.edu/", description: "Visual programming environment where kids create games, animations, and interactive stories — millions of projects shared by kids worldwide." },
      { name: "Khan Academy — Computer Programming for Kids", url: "https://www.khanacademy.org/computing/computer-programming", description: "Free introduction to programming concepts using JavaScript and visual output — designed for elementary students." },
    ],
    [
      { name: "How to Code a Sandcastle by Josh Funk", url: "", type: "book" },
      { name: "Mystery Science: How Do Computers Work?", url: "https://mysteryscience.com/", type: "video" },
    ],
  ),

  s(nx(), "p47", "g5",
    "Math expands to decimals, fractions, and basic statistics — collecting data, making graphs, finding averages. This is the earliest form of data science. Build more complex Scratch projects with variables, loops, and conditional logic. Learn about famous AI concepts: how do computers recognize faces? How does a self-driving car 'see'? Explore block-based coding challenges. Read biographies of inventors and computer scientists. The curiosity about how 'smart' machines work starts here.",
    ["Math (Decimals, Fractions & Data)", "Computer Science (Block Coding)", "Reading (Nonfiction Technology)", "Science (How Things Work)"],
    [
      { name: "CS First — Google's Coding Curriculum", url: "https://csfirst.withgoogle.com/", description: "Free video-based coding lessons using Scratch — themed projects in storytelling, game design, and animation." },
      { name: "Math Olympiad / MathCounts", url: "https://www.mathcounts.org/", description: "Competitive math challenges that build advanced problem-solving skills — essential for machine learning mathematics." },
    ],
    [
      { name: "A Computer Called Katherine by Suzanne Slade", url: "", type: "book" },
      { name: "Crash Course Kids: Data & Statistics", url: "https://www.youtube.com/playlist?list=PLhz12vamHOnZ4ZDC0dS6C9HRN5Qrm0jHO", type: "video" },
    ],
  ),

  s(nx(), "p47", "g6",
    "Transition to text-based coding. Try Python's turtle graphics or simple command-line programs. Python is the language of AI — start early and build comfort. Learn about famous AI milestones: Deep Blue beating Kasparov, AlphaGo, ChatGPT. Study the history of computing, from Babbage to Turing to modern GPUs. Science becomes more quantitative — design experiments, collect data, graph results. The scientific method and the machine learning workflow are fundamentally the same: hypothesis, experiment, analyze, iterate.",
    ["Intro to Python (Text Coding)", "Science (Scientific Method)", "Math (Pre-Algebra & Graphing)", "History of Technology"],
    [
      { name: "CodeCombat", url: "https://codecombat.com/", description: "Game-based coding platform teaching Python and JavaScript through fantasy-themed challenges — learn to code while playing." },
      { name: "Tynker — Python 101", url: "https://www.tynker.com/", description: "Structured Python courses designed for middle schoolers — transition from block coding to real programming syntax." },
    ],
    [
      { name: "Neural Networks for Kids (Baby University) by Chris Ferrie", url: "", type: "book" },
      { name: "TED-Ed: How Does Artificial Intelligence Learn?", url: "https://ed.ted.com/", type: "video" },
    ],
  ),

  s(nx(), "p47", "g7",
    "Take math seriously — pre-algebra and algebra are the bedrock of all AI. Try datasets: track sports statistics, analyze weather patterns, or survey classmates and make charts. Python skills advance to functions, lists, and simple data analysis. Join a coding club or robotics team. Learn about how recommendation systems work — Netflix, YouTube, Spotify. AI is already all around us; learning to see it is the first step to building it. Read about AI ethics: bias in algorithms, privacy, and fairness. Good AI engineers care about the impact of what they build.",
    ["Pre-Algebra / Algebra", "Python Programming (Intermediate)", "Science (Data Collection)", "Media Literacy (AI in Everyday Life)"],
    [
      { name: "FIRST LEGO League — Robotics Challenge", url: "https://www.firstlegoleague.org/", description: "Build and program LEGO robots that solve real-world challenges — integrates coding, engineering, and teamwork." },
      { name: "AI4K12 — Artificial Intelligence for K-12", url: "https://ai4k12.org/", description: "Free resources for learning about AI concepts — perception, representation, reasoning, and learning — designed for middle school." },
    ],
    [
      { name: "Python for Kids by Jason R. Briggs", url: "", type: "book" },
      { name: "Khan Academy: Intro to Algebra", url: "https://www.khanacademy.org/math/algebra", type: "course" },
    ],
  ),

  s(nx(), "p47", "g8",
    "Algebra deepens and statistics enters the picture. Learn probability — the mathematical language of uncertainty that underpins all machine learning. Python skills advance to working with libraries: try `pandas` for data and `matplotlib` for charts. Explore how neural networks work at a conceptual level: input → weighted sum → activation → output. Join or start a coding club. Participate in an online hackathon. Build a simple project: a number-guessing game, a quiz, a basic chatbot. AI engineers learn by building.",
    ["Algebra I", "Statistics & Probability", "Python (Data Analysis)", "Science (Research & Analysis)"],
    [
      { name: "Kaggle — Intro to Machine Learning (Micro-Course)", url: "https://www.kaggle.com/learn/intro-to-machine-learning", description: "Free hands-on course teaching the basics of ML with Python — the real tools data scientists use." },
      { name: "AI Club / Coding Club at School", url: "", description: "Start or join a club where students code together — peer learning accelerates growth and builds collaboration skills essential for AI teams." },
    ],
    [
      { name: "How to Be a Math Genius (DK)", url: "", type: "book" },
      { name: "3Blue1Brown: Neural Networks (YouTube)", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi", type: "video" },
    ],
  ),

  s(nx(), "p47", "g9",
    "Take advanced math — algebra and geometry. Start learning Python in earnest with structured courses. Explore real datasets from Kaggle or government open data portals. Understand the difference between supervised, unsupervised, and reinforcement learning at a conceptual level. Learn about AI careers: machine learning engineer, data scientist, NLP researcher, computer vision engineer. Read about AI's impact on healthcare, climate, education, and art. AI is the most versatile technology of our time — understanding its applications helps you choose your path.",
    ["Algebra / Geometry", "Python (Pandas & Matplotlib)", "Data Science (Intro)", "Technology Ethics"],
    [
      { name: "Google AI — Learn with Google AI", url: "https://ai.google/education/", description: "Free resources, courses, and guides from Google's AI team — learn machine learning from the people who built TensorFlow." },
      { name: "Python Coding Bootcamp (Summer)", url: "https://www.idtech.com/", description: "Summer tech camps offering Python, machine learning, and AI courses for teens — immersive hands-on learning." },
    ],
    [
      { name: "Weapons of Math Destruction by Cathy O'Neil (Adapted)", url: "", type: "book" },
      { name: "Crash Course: Computer Science", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo", type: "video" },
    ],
  ),

  s(nx(), "p47", "g10",
    "Take algebra II and start pre-calculus. The calculus behind machine learning — gradients, optimization — starts here. Take AP Statistics if available. Data is the fuel of AI; statistics is the engine that extracts meaning from it. Build a Python portfolio: a data visualization project, a simple linear regression, a basic classifier. Explore frameworks: what is scikit-learn? What is TensorFlow? Take online machine learning courses designed for beginners. Join a competitive coding or data science club. The best AI engineers have both strong math fundamentals and a portfolio of real projects.",
    ["Algebra II / Pre-Calculus", "AP Statistics (if available)", "Python (scikit-learn Intro)", "Computer Science Principles"],
    [
      { name: "Kaggle Competitions — Getting Started", url: "https://www.kaggle.com/competitions", description: "Join beginner-friendly prediction competitions — the Titanic dataset is the classic first ML project used by millions of aspiring data scientists." },
      { name: "AI Summer Programs (Stanford AI4ALL Pre-Collegiate)", url: "https://ai.stanford.edu/", description: "Selective summer programs introducing AI concepts to high school students — exposure to research-grade AI thinking." },
    ],
    [
      { name: "Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow by Aurélien Géron", url: "", type: "book" },
      { name: "Fast.ai — Practical Deep Learning for Coders (Free)", url: "https://www.fast.ai/", type: "course" },
    ],
  ),

  s(nx(), "p47", "g11",
    "Take AP Calculus and AP Computer Science A. Calculus is the mathematical backbone of optimization — gradient descent, backpropagation, and loss functions all rely on derivatives. Start learning linear algebra — vectors, matrices, and transformations are how AI represents everything from words to images. Build a meaningful ML project: a sentiment analyzer, an image classifier, or a recommendation engine. Post your code on GitHub. Research undergraduate AI/ML programs: CMU, Stanford, MIT, UC Berkeley, and University of Washington are top-tier. Strong grades in math and CS are non-negotiable for competitive programs.",
    ["AP Calculus AB/BC", "AP Computer Science A", "Linear Algebra (Self-Study)", "Python (Intermediate ML)", "English (Technical Writing)"],
    [
      { name: "Google Code-in / Open Source Contributions", url: "https://summerofcode.withgoogle.com/", description: "Contribute to open-source ML projects — real-world experience with code reviews, documentation, and collaborative development." },
      { name: "AI4ALL Summer Program", url: "https://ai-4-all.org/", description: "Summer programs at top universities introducing underrepresented students to AI research and careers." },
    ],
    [
      { name: "Andrew Ng — Machine Learning Specialization (Coursera)", url: "https://www.coursera.org/specializations/machine-learning-introduction", type: "course" },
      { name: "3Blue1Brown: Essence of Linear Algebra", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab", type: "video" },
    ],
  ),

  s(nx(), "p47", "g12",
    "Take AP Calculus BC, AP Statistics, and AP Computer Science Principles. The math trifecta. Deepen machine learning knowledge: understand decision trees, SVMs, neural networks, and ensemble methods. Build a capstone ML project — take a real dataset, clean it, analyze it, build a model, and present your findings with visualizations. This project is your college application differentiator. Research university AI labs and professors doing work you find exciting. The top AI programs value demonstrated passion — a GitHub full of projects matters more than perfect SAT scores. Learn about transformers, large language models, and the current frontier of AI research.",
    ["AP Calculus BC", "AP Statistics", "AP Computer Science A", "Linear Algebra (Advanced)", "ML Project Portfolio"],
    [
      { name: "PyTorch Scholarship Challenge (Udacity)", url: "https://www.udacity.com/scholarships", description: "Free deep learning courses with scholarship opportunities — learn PyTorch, the leading framework for AI research." },
      { name: "AI Residency / Research Internship Applications", url: "https://www.nsf.gov/crssprgm/reu/", description: "Apply for NSF Research Experience for Undergraduates (REU) in AI/ML — exceptional high school students can sometimes participate." },
    ],
    [
      { name: "Deep Learning by Ian Goodfellow, Yoshua Bengio & Aaron Courville", url: "https://www.deeplearningbook.org/", type: "book" },
      { name: "MIT OpenCourseWare: Mathematics for Computer Science", url: "https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/", type: "course" },
    ],
  ),

  s(nx(), "p47", "g13",
    "College application year. Apply to top CS/AI programs: Carnegie Mellon (#1 in AI), Stanford, MIT, UC Berkeley, University of Washington, Georgia Tech, UIUC, and Cornell. Write compelling essays about your ML projects and why AI fascinates you. Consider data science or statistics programs as strong alternatives. Complete your capstone project and publish it — write a blog post, make a video, share on LinkedIn. Take the most advanced math available — multivariable calculus if offered. Continue contributing to open source and building your GitHub. AI is a field where demonstrated ability in codebases speaks louder than transcripts.",
    ["AP Calculus (Final)", "AP Statistics (Final)", "AP Computer Science (Final)", "Multivariable Calculus (if available)", "College Applications & Portfolio"],
    [
      { name: "Kaggle Top Contributor — Earn Medals", url: "https://www.kaggle.com/", description: "Aim for Kaggle competition medals and notebook master status — public recognition that carries weight with university admissions and tech recruiters." },
      { name: "AI Research Paper — High School Journal Publication", url: "https://www.jsr.org/", description: "Submit an AI/ML research paper to a high school science journal — demonstrates research capability beyond class projects." },
    ],
    [
      { name: "The Alignment Problem by Brian Christian", url: "", type: "book" },
      { name: "Stanford CS229: Machine Learning (Full Course Online)", url: "https://cs229.stanford.edu/", type: "course" },
    ],
  ),

  s(nx(), "p47", "g14",
    "Finalize college plans. If going to a top CS program, prepare for intense math and coding from day one. Over the summer, complete Andrew Ng's Machine Learning course and build a project per week. Learn Git and GitHub workflows — professional AI engineers collaborate through version control. Read AI research papers on arXiv to get comfortable with the format. Consider deferring for a gap year at an AI startup or research lab. Enter a major Kaggle competition. The AI field moves fast — being comfortable teaching yourself new concepts is the most important skill you'll develop. Start building your professional network on LinkedIn and Twitter/X — follow AI researchers and engage thoughtfully.",
    ["Linear Algebra (Review)", "Probability & Statistics (Review)", "Python (NumPy, Pandas, PyTorch)", "Git & Version Control", "AI Ethics & Safety"],
    [
      { name: "DeepMind / OpenAI Internship Applications", url: "https://www.deepmind.com/", description: "Top AI labs offer internships for exceptional students — incredibly competitive but life-changing if you get in." },
      { name: "Build and Deploy an ML-Powered Web App", url: "", description: "Create an end-to-end ML project with a web interface — deploy it so anyone can use it. This shows you can ship, not just train models." },
    ],
    [
      { name: "The Hundred-Page Machine Learning Book by Andriy Burkov", url: "https://themlbook.com/", type: "book" },
      { name: "fast.ai — Practical Deep Learning (Part 2)", url: "https://www.fast.ai/", type: "course" },
    ],
  ),

  s(nx(), "p47", "g15",
    "Major in Computer Science, Data Science, Statistics, or Mathematics with a concentration in AI/ML. Core courses: data structures & algorithms, linear algebra, probability & statistics, machine learning, deep learning, NLP, computer vision. Build projects constantly — course projects plus personal projects. Pursue ML research with a professor. Apply for summer internships at tech companies (Google Brain, Meta AI, Microsoft Research) or AI startups. Join the university's machine learning club and compete in hackathons. Build a strong GitHub profile. The AI job market is hot but competitive — internships and research experience are the differentiators.",
    ["Machine Learning", "Deep Learning & Neural Networks", "Linear Algebra (Proof-Based)", "Probability & Statistics", "Algorithms & Data Structures"],
    [
      { name: "Google Summer of Code — ML Projects", url: "https://summerofcode.withgoogle.com/", description: "Paid summer open-source work on ML projects — build your résumé while contributing to real software used by millions." },
      { name: "Undergraduate ML Research — Join a Professor's Lab", url: "", description: "Co-author a research paper with a professor — this is the strongest possible credential for top ML roles and PhD applications." },
    ],
    [
      { name: "Pattern Recognition and Machine Learning by Christopher Bishop", url: "", type: "book" },
      { name: "CS231n: Convolutional Neural Networks for Visual Recognition (Stanford)", url: "https://cs231n.github.io/", type: "course" },
    ],
  ),

  s(nx(), "p47", "g16",
    "Master's in Machine Learning, Computer Science (AI track), or Data Science. Deepen expertise in a specialization: NLP, computer vision, reinforcement learning, or AI safety. Complete a master's thesis or capstone project — ideally with industry collaboration. Alternatively, some go directly to industry after undergrad and learn on the job. Top employers: Google DeepMind, OpenAI, Anthropic, Meta AI, Microsoft Research, NVIDIA, and countless startups. The median ML engineer salary exceeds $150K. But beyond the money, AI engineering offers the chance to work on problems that genuinely matter — drug discovery, climate modeling, accessibility, and the future of intelligence itself.",
    ["Advanced Machine Learning", "Natural Language Processing", "Computer Vision", "Reinforcement Learning", "ML Systems & MLOps"],
    [
      { name: "NeurIPS / ICML / ICLR Conference — Attend or Submit", url: "https://neurips.cc/", description: "The premier AI research conferences — presenting a paper at NeurIPS is career-defining for early-career ML researchers." },
      { name: "ML Engineer Internship → Full-Time Conversion", url: "", description: "Top master's programs feed directly into AI residency and ML engineer programs at big tech — a structured path from academia to industry." },
    ],
    [
      { name: "Deep Learning for Coders — fast.ai Book", url: "https://www.fast.ai/", type: "book" },
      { name: "Hugging Face — NLP Course", url: "https://huggingface.co/learn/nlp-course", type: "course" },
    ],
  ),

  s(nx(), "p47", "g17",
    "Ph.D. in Machine Learning, Artificial Intelligence, or Computer Science with an AI focus — 5-7 years of deep research. Develop novel algorithms, publish at NeurIPS/ICML/ICLR, and push the frontier of what AI can do. Career paths: research scientist at DeepMind/OpenAI, AI professor at a university, founder of an AI startup, or principal ML engineer leading teams at major tech companies. The Ph.D. path is for those who want to create the next breakthrough — foundation models, AGI research, or AI safety. Alternative: stay in industry and grow from ML engineer to Staff/Principal/Distinguished Engineer, leading teams and shaping AI strategy without the Ph.D.",
    ["Ph.D. in Machine Learning / AI", "Advanced Research Methods", "Dissertation Research", "Teaching & Mentorship", "AI Ethics & Alignment"],
    [
      { name: "Google Ph.D. Fellowship Program", url: "https://research.google/outreach/phd-fellowship/", description: "Prestigious fellowship supporting Ph.D. students in computer science and related fields — funding plus mentorship from Google researchers." },
      { name: "NeurIPS Doctoral Consortium", url: "https://neurips.cc/", description: "Selective workshop at the NeurIPS conference for Ph.D. students to present their work and connect with leading researchers." },
    ],
    [
      { name: "Artificial Intelligence: A Modern Approach by Stuart Russell & Peter Norvig", url: "", type: "book" },
      { name: "ICLR / NeurIPS Conference Proceedings (OpenReview)", url: "https://openreview.net/", type: "article" },
    ],
  ),

  // ========================================================================
  // p48 — URBAN PLANNER 🏙️
  // ========================================================================

  s(nx(), "p48", "g1",
    "Urban planning starts with noticing the built world around you! At this age, children are fascinated by buildings, bridges, roads, and neighborhoods. Build cities with blocks and talk about what goes where — 'Where should the fire station go? What about the park?' Draw maps of your room, your house, your street. Notice different kinds of places: homes, stores, schools, playgrounds. The city is a giant puzzle, and urban planners are the people who put the pieces together to make communities work for everyone.",
    ["Building & Construction Play", "Maps & Drawing", "Community Awareness", "Sorting (Kinds of Places)"],
    [
      { name: "LEGO / Mega Bloks City Building", url: "https://www.lego.com/en-us/themes/city", description: "Build cities, towns, and neighborhoods with interlocking blocks — the earliest form of land-use planning and spatial design." },
      { name: "Neighborhood Walking Tours (Family)", url: "", description: "Walk around your neighborhood and talk about what you see — different building types, parks, sidewalks, stops signs. Notice how the built environment works." },
    ],
    [
      { name: "The Little House by Virginia Lee Burton", url: "", type: "book" },
      { name: "Richard Scarry's What Do People Do All Day?", url: "", type: "book" },
    ],
  ),

  s(nx(), "p48", "g2",
    "Maps become more sophisticated — draw maps of familiar places with keys and legends. Build more complex block cities with zones: 'this is where people live, this is where they shop, this is where they play.' Learn addresses and how streets are organized. Visit different kinds of neighborhoods — urban, suburban, rural — and talk about the differences. Read books about how cities are built, from sewers to skyscrapers. The seeds of urban planning are planted when children realize that cities didn't just happen — someone designed them.",
    ["Map Reading & Drawing", "Spatial Awareness", "Community Helpers", "Early Geography"],
    [
      { name: "PBS Kids — City Building Games", url: "https://pbskids.org/", description: "Games about building and managing communities — introduces young children to the idea of planning and designing neighborhoods." },
      { name: "National Building Museum — Kids Programs", url: "https://www.nbm.org/", description: "Hands-on programs and exhibitions about architecture, engineering, and city planning for young children and families." },
    ],
    [
      { name: "Me on the Map by Joan Sweeney", url: "", type: "book" },
      { name: "Sesame Street: People in Your Neighborhood", url: "https://pbskids.org/sesame/", type: "video" },
    ],
  ),

  s(nx(), "p48", "g3",
    "Deepen geography and mapping skills. Learn cardinal directions and how to read a simple map. Explore the history of your own town or city — when was it founded? Why is it here? Draw maps with landmarks, streets, and labels. Understand the difference between public and private spaces — parks vs. backyards, streets vs. driveways. Urban planners make decisions about what should be public and what should be private. Learn about different types of transportation: walking, biking, buses, trains, cars — how people get around is a central planning question.",
    ["Geography & Map Skills", "Writing (Community Observations)", "Math (Measurement & Scale)", "Local History"],
    [
      { name: "National Geographic Kids — Map Games", url: "https://kids.nationalgeographic.com/games/", description: "Interactive map games that teach geography, spatial thinking, and understanding of different places and cultures." },
      { name: "Visit City Hall / Town Planning Office", url: "", description: "Take a field trip to see where your city is planned — many planning departments have educational materials and welcome curious kids." },
    ],
    [
      { name: "Follow That Map! by Scot Ritchie", url: "", type: "book" },
      { name: "SciShow Kids: How Cities Work", url: "https://www.youtube.com/@scishowkids", type: "video" },
    ],
  ),

  s(nx(), "p48", "g4",
    "Explore how cities work as systems — how does water get to your house? Where does garbage go? How does electricity travel? Urban planners design these invisible systems that make modern life possible. Learn about land use: residential, commercial, industrial, agricultural, recreational. Take photos around your community and categorize them. Draw maps of your neighborhood at different scales. Study bridges, tunnels, and public transit — how do people get from place to place? The best planners understand that cities are living organisms, not just collections of buildings.",
    ["Geography (Physical & Human)", "Science (Infrastructure Systems)", "Art (Photography & Drawing)", "Social Studies (Community)"],
    [
      { name: "ArcGIS for Kids — Story Maps", url: "https://www.esri.com/en-us/arcgis/products/arcgis-online/", description: "Explore interactive digital maps combining geography, data, and storytelling — the same platform professional planners use." },
      { name: "Community Photo Journal Project", url: "", description: "Photograph different land uses in your community, label and categorize them — create a visual atlas of your neighborhood." },
    ],
    [
      { name: "Cities: How Humans Live Together by Megan Clendenan", url: "", type: "book" },
      { name: "Khan Academy: World Geography", url: "https://www.khanacademy.org/humanities/geography", type: "course" },
    ],
  ),

  s(nx(), "p48", "g5",
    "Deepen understanding of how communities are organized. Learn about zoning — the rules that determine what can be built where. Explore how different cities around the world are designed very differently — compare your town to Tokyo, Paris, or Cairo. Build a city model using cardboard, clay, or digital tools like Minecraft. Minecraft is essentially an urban planning sandbox — use it to design neighborhoods, lay out streets, and plan infrastructure. Start a community project: a school garden, a neighborhood cleanup, or a bike rack petition. Planners don't just think about cities — they make them better.",
    ["Geography (Urban),", "Math (Scale & Proportion)", "Science (Environmental Studies)", "Civics & Community Projects"],
    [
      { name: "Minecraft: Education Edition — City Planning Challenges", url: "https://education.minecraft.net/", description: "Use Minecraft to design sustainable cities, plan transportation networks, and solve urban challenges in a collaborative digital environment." },
      { name: "4-H Community Service Projects", url: "https://4-h.org/", description: "Lead a community improvement project — planning and executing a real neighborhood enhancement builds the practical skills of an urban planner." },
    ],
    [
      { name: "The Way Cities Work (DK)", url: "", type: "book" },
      { name: "Crash Course: Geography", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtMJAfB9ujDVkfSwE1V9R0Q6", type: "video" },
    ],
  ),

  s(nx(), "p48", "g6",
    "Explore environmental science — urban planners are increasingly focused on sustainability, green spaces, and climate resilience. Learn about urban heat islands, green roofs, and sustainable transportation. Study how parks and public spaces affect quality of life. Learn about equity in planning — who gets access to parks, transit, and clean air? Read about famous planned cities: Washington D.C., Brasília, Chandigarh. Start a planner's notebook: collect maps, sketch streetscapes, and jot down observations about what makes a place feel welcoming (or not). The ability to observe and analyze the built environment is the planner's superpower.",
    ["Environmental Science", "Social Studies (Equity & Access)", "Math (Ratios & Proportions)", "Art (Sketching & Design)"],
    [
      { name: "iNaturalist — Urban Nature Observations", url: "https://www.inaturalist.org/", description: "Document urban wildlife and plants in your neighborhood — understand how the built environment interacts with the natural world." },
      { name: "Participate in a City Council or Planning Board Meeting", url: "", description: "Attend a local government meeting where planning decisions are made — see democracy and urban planning intersect in real time." },
    ],
    [
      { name: "City Planner: A Kid's Guide to Urban Design by Tim Cooke", url: "", type: "book" },
      { name: "TED-Ed: How to Build a Better City", url: "https://ed.ted.com/", type: "video" },
    ],
  ),

  s(nx(), "p48", "g7",
    "Geography deepens to human geography — how people interact with places. Study population density, urbanization, and why cities grow. Learn about transportation planning: public transit, bike lanes, pedestrian infrastructure, and highway systems. Practice GIS (Geographic Information Systems) — free tools like QGIS or ArcGIS Online let you create maps with real data. GIS is the most important technical skill for modern planners. Read about the history of your city — how has it changed over time? What planning decisions shaped it? Start thinking about what you would change and why. Urban planners combine data analysis with vision: they understand what IS in order to design what COULD BE.",
    ["Human Geography", "Civics & Government", "Math (Data & Statistics)", "Computer Skills (GIS Basics)"],
    [
      { name: "QGIS — Free Geographic Information System", url: "https://www.qgis.org/", description: "Professional-grade open-source GIS software — learn to make data-driven maps, the fundamental tool of modern urban planning." },
      { name: "APA Kids and Planning — American Planning Association", url: "https://www.planning.org/kids/", description: "Resources and activities from the professional organization for urban planners — explore careers and real planning projects." },
    ],
    [
      { name: "Walkable City by Jeff Speck (Adapted)", url: "", type: "book" },
      { name: "City Beautiful — YouTube Channel", url: "https://www.youtube.com/@CityBeautiful", type: "video" },
    ],
  ),

  s(nx(), "p48", "g8",
    "Deepen GIS skills — learn to create layered maps with demographic data, land use, and transportation networks. Study the intersection of urban planning and public health: how do neighborhood design, food deserts, and walkability affect health outcomes? Explore housing policy — affordable housing, zoning reform, and homelessness are among the most critical planning challenges today. Learn about environmental justice: who bears the burden of pollution and climate risk? Read case studies of successful urban transformations: Copenhagen's bike infrastructure, Medellín's cable cars, New York's High Line. Urban planning is fundamentally about making life better for people — and the best planners are driven by a deep commitment to equity.",
    ["Geography (GIS Intermediate)", "Environmental Science", "Civics & Public Policy", "Math (Data Analysis)", "English (Persuasive Writing)"],
    [
      { name: "ArcGIS Online (Free Student Account)", url: "https://www.esri.com/en-us/arcgis/products/arcgis-online/", description: "Professional GIS platform used by city planning departments worldwide — the industry standard for spatial analysis and mapping." },
      { name: "Youth in Planning — Join a City Youth Advisory Board", url: "", description: "Many cities have youth advisory boards that give input on planning decisions — real experience influencing how your community develops." },
    ],
    [
      { name: "The Death and Life of Great American Cities by Jane Jacobs (Excerpts)", url: "", type: "book" },
      { name: "Planetizen — Urban Planning News & Courses", url: "https://www.planetizen.com/", type: "course" },
    ],
  ),

  s(nx(), "p48", "g9",
    "Take geography, environmental science, and economics — the three pillars of urban planning. Economics explains why cities exist: agglomeration, transportation costs, and land values. Study urban economics concepts: bid-rent theory, agglomeration economies, and the economics of zoning. Take a GIS workshop or online course. Build a portfolio of maps: your neighborhood demographics, a transit analysis, a land-use map. Volunteer with a local community development organization. Start reading planning blogs and following urbanist social media. Urban planning is having a renaissance — the YIMBY movement, 15-minute cities, and tactical urbanism are reshaping the conversation.",
    ["Geography (Human & Physical)", "Environmental Science", "Economics (Intro)", "Civics & Government", "GIS & Mapping"],
    [
      { name: "Strong Towns — Community Action Resources", url: "https://www.strongtowns.org/", description: "A movement for financially resilient cities — resources, local chapters, and action guides for people who want to make their towns better." },
      { name: "Volunteer with Habitat for Humanity or Community Development Org", url: "https://www.habitat.org/", description: "Hands-on experience with housing and community development — understand the real-world challenges of creating affordable, livable places." },
    ],
    [
      { name: "Happy City by Charles Montgomery", url: "", type: "book" },
      { name: "Crash Course: Economics", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtPNZwz5_o_5uirJ8gQXnhEO", type: "video" },
    ],
  ),

  s(nx(), "p48", "g10",
    "Take AP Human Geography if offered — it's the most directly relevant AP for aspiring planners. Strengthen GIS skills with real projects. Study urban design principles: street grids, density, mixed-use development, transit-oriented development. Learn about the legal framework of planning — zoning codes, comprehensive plans, environmental impact assessments. Explore careers: city planner, transportation planner, environmental planner, housing policy analyst, urban designer, community development director. Read about planning failures and successes — what can we learn from Pruitt-Igoe? From Portland's urban growth boundary? From Singapore's public housing? Urban planning is a field where understanding history is essential to building a better future.",
    ["AP Human Geography", "Economics / AP Microeconomics", "Environmental Science", "Statistics", "GIS (Intermediate)"],
    [
      { name: "Esri MOOC — Going Places with Spatial Analysis", url: "https://www.esri.com/training/mooc/", description: "Free massive open online course from Esri — learn spatial analysis techniques used by professional urban planners worldwide." },
      { name: "Urban Planning Summer Camp / Pre-College Program", url: "https://www.planetizen.com/", description: "Many universities offer summer design and planning programs for high school students — check local universities' architecture and planning departments." },
    ],
    [
      { name: "Tactical Urbanism by Mike Lydon & Anthony Garcia", url: "", type: "book" },
      { name: "MIT OpenCourseWare: Urban Design", url: "https://ocw.mit.edu/", type: "course" },
    ],
  ),

  s(nx(), "p48", "g11",
    "Take AP Human Geography, AP Environmental Science, and AP Economics. Develop advanced GIS skills — learn spatial analysis, buffer analysis, and suitability modeling. Start a planning-related research project: analyze your city's comprehensive plan, map food deserts in your community, or study traffic patterns near your school. Reach out to your local planning department for an informational interview or job shadow. Urban planning is a relatively small field — networking and demonstrated passion matter enormously. Research undergraduate programs: top planning schools include UIUC, University of Michigan, UC Berkeley, MIT, Cornell, and University of North Carolina.",
    ["AP Human Geography", "AP Environmental Science", "AP Economics (Micro/Macro)", "Statistics", "GIS & Spatial Analysis"],
    [
      { name: "APA Student Membership — American Planning Association", url: "https://www.planning.org/membership/students/", description: "Join as a student member — access to publications, job boards, and the largest network of professional planners in the United States." },
      { name: "Local Planning Department — Job Shadow or Internship", url: "", description: "Contact your city or county planning department — many offer job shadow days or unpaid internships for interested high school students." },
    ],
    [
      { name: "The Color of Law by Richard Rothstein", url: "", type: "book" },
      { name: "TED Talk: The 15-Minute City (Carlos Moreno)", url: "https://www.ted.com/", type: "video" },
    ],
  ),

  s(nx(), "p48", "g12",
    "Take AP Human Geography, AP Environmental Science, AP Statistics, and government/civics. Urban planning sits at the intersection of all four. Strengthen your GIS portfolio — create publication-quality maps that tell a story. Learn about the history of planning in America: redlining, urban renewal, interstate highways, suburbanization, and the movements for housing justice. Write a research paper on a planning topic you care about — school siting, transit equity, gentrification, or climate adaptation. Visit college campuses with strong urban planning or urban studies programs. Consider dual-degree options: planning + public policy, planning + architecture, planning + environmental science.",
    ["AP Human Geography", "AP Environmental Science", "AP Statistics", "AP Government / Civics", "GIS & Cartography"],
    [
      { name: "Lincoln Institute of Land Policy — Free Online Courses", url: "https://www.lincolninst.edu/", description: "Free courses on land use planning, property tax, and municipal finance from the leading think tank on land policy." },
      { name: "Map the System — Research Competition", url: "https://www.mapthesystem.ca/", description: "Global competition in systems thinking — create a systems map of an urban challenge and present your findings." },
    ],
    [
      { name: "Evicted by Matthew Desmond", url: "", type: "book" },
      { name: "Planetizen — Top Planning Books and Resources", url: "https://www.planetizen.com/", type: "article" },
    ],
  ),

  s(nx(), "p48", "g13",
    "College application year. Apply to universities with strong planning programs: University of Illinois Urbana-Champaign, UC Berkeley, University of Michigan, MIT, Cornell, UNC Chapel Hill, and University of Washington. Write essays connecting your passion for cities and communities to your academic and career goals. Complete your GIS portfolio and research paper. Consider applying to urban studies or geography programs as alternatives to accredited planning programs. Take AP exams seriously — strong scores in human geography, environmental science, and statistics are directly relevant. Join the American Planning Association as a student member. Urban planning is a mission-driven field — admissions committees want students who genuinely care about making communities better for everyone.",
    ["AP Human Geography (Final)", "AP Environmental Science (Final)", "AP Statistics (Final)", "AP Government (Final)", "College Applications & Planning Portfolio"],
    [
      { name: "ACSP — Association of Collegiate Schools of Planning", url: "https://www.acsp.org/", description: "Directory of accredited planning programs — research faculty, specialties, and admission requirements for all PAB-accredited schools." },
      { name: "Submit Planning Research to a High School Competition", url: "https://www.societyforscience.org/", description: "Submit planning-related research to science fairs or social science competitions — original analysis of urban issues stands out." },
    ],
    [
      { name: "The Power Broker by Robert Caro (Excerpts)", url: "", type: "book" },
      { name: "University of Michigan — Urban Planning Info Sessions", url: "https://taubmancollege.umich.edu/", type: "article" },
    ],
  ),

  s(nx(), "p48", "g14",
    "Finalize college and prepare for undergraduate study. Over the summer, complete GIS certifications or online urban planning courses. Travel if possible — experiencing different cities (dense European cities, sprawling Sunbelt cities, transit-rich Asian cities) is the best planning education. Read deeply in urban planning literature. If your city has a comprehensive plan update underway, attend public meetings and learn how community engagement works. Consider a gap year working or volunteering in community development, environmental justice, or housing advocacy. The most effective planners understand communities because they've been part of them — not just studied them from a distance.",
    ["Urban Planning (Self-Study)", "GIS Certification", "Public Policy", "Environmental Justice", "Community Engagement Prep"],
    [
      { name: "Esri Technical Certification — GIS Fundamentals", url: "https://www.esri.com/training/certification/", description: "Earn an industry-recognized GIS certification before starting college — a competitive edge for internships and first jobs." },
      { name: "Community Organizing Internship / Gap Year", url: "", description: "Work with a community-based organization on housing, transit, or environmental justice — planners need to understand communities from the inside." },
    ],
    [
      { name: "Cities for People by Jan Gehl", url: "", type: "book" },
      { name: "Streetfilms — Urban Planning Documentaries", url: "https://www.streetfilms.org/", type: "video" },
    ],
  ),

  s(nx(), "p48", "g15",
    "Major in Urban Planning, Urban Studies, Geography, Environmental Design, or Public Policy. Core courses: planning history & theory, land use planning, GIS & spatial analysis, transportation planning, environmental planning, housing policy, urban economics, and planning law. Develop a specialization: transportation, housing, environment, economic development, or urban design. Complete a planning internship with a city, county, or private consulting firm. Join the APA student chapter and attend planning conferences. Build a professional GIS portfolio. Most entry-level planning jobs require a master's degree, so plan your undergraduate path with graduate school in mind — strong grades, research experience, and a portfolio of planning work.",
    ["Planning History & Theory", "Land Use & Zoning", "GIS & Spatial Analysis", "Transportation Planning", "Urban Economics"],
    [
      { name: "APA Student Organization — Leadership & Networking", url: "https://www.planning.org/students/", description: "Join your university's APA chapter — national conferences, mentorship programs, and the job board that every planning employer uses." },
      { name: "City Planning Internship (Summer)", url: "", description: "Intern with a municipal planning department — process permits, analyze data, and attend public meetings. This is how most planners get their first jobs." },
    ],
    [
      { name: "American Planning Association — PAS Reports", url: "https://www.planning.org/pas/", type: "article" },
      { name: "Coursera: Smart Cities (École Polytechnique Fédérale de Lausanne)", url: "https://www.coursera.org/", type: "course" },
    ],
  ),

  s(nx(), "p48", "g16",
    "Master of Urban Planning (MUP) or Master of City Planning (MCP) — a 2-year professional degree from a PAB-accredited program. Core courses: planning methods, quantitative analysis, planning law, land use, and a specialization track. Complete a capstone project or professional report — often for a real-world client. Pursue a second summer internship, often leading to a full-time offer. After graduation, work toward AICP (American Institute of Certified Planners) certification — requires 2 years of professional experience plus an exam. Planners work in city halls, county agencies, consulting firms, non-profits, and federal agencies. The work is tangible and meaningful: every park, bike lane, affordable housing project, and transit line was shaped by a planner.",
    ["Planning Methods & Quantitative Analysis", "Zoning & Land Use Law", "Housing & Community Development", "Environmental & Transportation Planning", "Capstone / Professional Report"],
    [
      { name: "AICP Certification — American Institute of Certified Planners", url: "https://www.planning.org/certification/", description: "The gold-standard credential for professional planners — start tracking your professional experience and preparing for the AICP exam." },
      { name: "APA National Planning Conference", url: "https://www.planning.org/conference/", description: "The largest gathering of urban planners in the world — thousands of professionals, hundreds of sessions, and the best networking opportunity in the field." },
    ],
    [
      { name: "The Practice of Local Government Planning (The Green Book)", url: "", type: "book" },
      { name: "Urban Institute — Housing & Communities Research", url: "https://www.urban.org/", type: "article" },
    ],
  ),

  s(nx(), "p48", "g17",
    "Ph.D. in Urban Planning or related field for those pursuing academic research, university teaching, or high-level policy analysis. Research areas: urban economics, transportation systems, climate adaptation, housing policy, land use science, or international development. Career pinnacles: planning director of a major city, chief resilience officer, head of a national planning organization, or tenured professor training the next generation. Alternatively, advance in practice: become a director of planning for a major city, a partner at a planning consulting firm, or a policy director at a housing or transportation advocacy organization. Urban planners shape the physical world that billions of people experience every day — it's among the most impactful careers you can choose.",
    ["Ph.D. in Urban Planning / Geography", "Advanced Research Methods", "Dissertation", "Teaching & Mentoring", "Leadership & Policy"],
    [
      { name: "Lincoln Institute of Land Policy — Research Fellowships", url: "https://www.lincolninst.edu/", description: "Fellowships supporting cutting-edge research on land policy, municipal finance, and sustainable urban development." },
      { name: "World Urban Forum — UN Habitat", url: "https://unhabitat.org/", description: "The premier global conference on urban issues — present research, connect with planners from around the world, and shape the global urban agenda." },
    ],
    [
      { name: "Journal of the American Planning Association", url: "https://www.tandfonline.com/journals/rjpa20", type: "article" },
      { name: "Triumph of the City by Edward Glaeser", url: "", type: "book" },
    ],
  ),


  // ========================================================================
  // p49 — DIPLOMAT 🌐
  // ========================================================================

  s(nx(), "p49", "g1",
    "Diplomacy begins with wonder about the world! Explore a globe or world map — find where your family lives, where your food comes from, and where different animals live. Listen to music and stories from other countries. Learn to say 'hello' and 'thank you' in a new language each week. Try foods from different cultures. The seeds of diplomacy are planted when children discover that people around the world live, speak, eat, and celebrate differently — and that this diversity is something to celebrate, not fear.",
    ["World Awareness & Maps", "Languages (Hello & Thank You)", "Cultural Stories & Music", "Curiosity About Others"],
    [
      { name: "National Geographic Kids — World Atlas", url: "https://kids.nationalgeographic.com/", description: "Explore interactive maps, animal facts, and photos from every continent — an early window into the incredible diversity of our world." },
      { name: "Dinolingo — Language Learning for Kids", url: "https://dinolingo.com/", description: "Fun, game-based language immersion for young children in 50+ languages — builds the ear for foreign sounds when the brain is most receptive." },
    ],
    [
      { name: "Children Just Like Me by DK", url: "", type: "book" },
      { name: "This Is How We Do It by Matt Lamothe", url: "", type: "book" },
    ],
  ),

  s(nx(), "p49", "g2",
    "Deepen global awareness by learning about families and children in different countries. How do kids in Japan get to school? What do they eat for lunch in Brazil? What holidays do they celebrate in India? Practice a second language through songs, games, and simple phrases. Draw flags, learn country names, and understand that the world is made up of many nations. Play 'ambassador' — pretend to visit another country and describe what you see. A diplomat's most important skill begins here: the ability to see the world through someone else's eyes.",
    ["Geography (Continents & Countries)", "Second Language (Basic Phrases)", "Social Studies (World Cultures)", "Storytelling & Role-Play"],
    [
      { name: "Little Pim — Language Learning Videos", url: "https://www.littlepim.com/", description: "Award-winning video series introducing young children to foreign languages through playful immersion — available in 12 languages." },
      { name: "Pen Pal Program — Global Classroom Exchange", url: "https://www.epals.com/", description: "Connect with a classroom in another country to exchange letters, drawings, and stories — real cross-cultural connection from an early age." },
    ],
    [
      { name: "Same, Same but Different by Jenny Sue Kostecki-Shaw", url: "", type: "book" },
      { name: "Sesame Street: Global Grover", url: "https://pbskids.org/sesame/", type: "video" },
    ],
  ),

  s(nx(), "p49", "g3",
    "Start learning a foreign language in earnest — even 10 minutes a day builds neural pathways that last a lifetime. Read folktales from around the world and discuss what they teach us about different cultures' values. Explore maps: find the seven continents, major oceans, and countries you're curious about. Understand basic geography terms — border, capital, continent, ocean, equator. Practice conflict resolution with siblings and friends: take turns speaking, listen without interrupting, find win-win solutions. Diplomats are professional problem-solvers who use words instead of weapons — and that skill starts on the playground.",
    ["Foreign Language (Daily Practice)", "Geography (World Map)", "Reading (World Folktales)", "Conflict Resolution & Listening"],
    [
      { name: "Duolingo Kids — Language App", url: "https://www.duolingo.com/", description: "Free gamified language learning app with kid-friendly content — Spanish, French, Chinese, and more with bite-sized daily lessons." },
      { name: "World Culture Festival — School or Community Event", url: "", description: "Attend or help organize a cultural festival — experience food, dance, music, and art from different cultures firsthand." },
    ],
    [
      { name: "The Barefoot Book of Children by Tessa Strickland", url: "", type: "book" },
      { name: "Crash Course Kids: Geography", url: "https://www.youtube.com/playlist?list=PLhz12vamHOnZ4ZDC0dS6C9HRN5Qrm0jHO", type: "video" },
    ],
  ),

  s(nx(), "p49", "g4",
    "Geography deepens — learn about countries, capitals, and major landmarks. Continue language study with structured vocabulary. Read about world leaders past and present: what makes a good leader? What does it mean to serve your country? Start following age-appropriate world news — a 'country of the week' where you learn one fact each day. Write a letter to an embassy asking for information about their country (many embassies send back packets!). The diplomatic corps represents their nation abroad — understanding what that means starts with understanding what a nation is.",
    ["Geography (Capitals & Landmarks)", "Foreign Language (Vocabulary)", "Reading (Biographies of Leaders)", "Writing (Pen Pal / Letters)"],
    [
      { name: "Epals — Global Classroom Connections", url: "https://www.epals.com/", description: "Connect with students in other countries for cultural exchange projects — practice language skills while building real international friendships." },
      { name: "Write to Your Embassy — Cultural Exchange", url: "", description: "Many embassies have education outreach programs — send a letter asking about their country and receive authentic cultural materials in return." },
    ],
    [
      { name: "Who Was Nelson Mandela? by Pam Pollack", url: "", type: "book" },
      { name: "BrainPOP: Geography Themes", url: "https://www.brainpop.com/socialstudies/geography/", type: "video" },
    ],
  ),

  s(nx(), "p49", "g5",
    "World history comes alive — study ancient civilizations (Egypt, Greece, Rome, China) and how different cultures developed governments, trade, and diplomacy. Understand that international relations have existed for thousands of years. Deepen language skills — aim for basic conversational ability. Start learning about the United Nations: what is it, why was it created, what does it do? Practice public speaking: present about a country, a culture, or a current event. Diplomats spend their careers speaking publicly — comfort in front of an audience is non-negotiable.",
    ["World History (Ancient Civilizations)", "Geography (Physical & Political)", "Foreign Language (Conversation)", "Public Speaking & Presentations"],
    [
      { name: "Model UN Junior / Global Civics Programs", url: "https://unausa.org/model-un/", description: "Introductory Model UN programs for elementary students — learn about countries, debate global issues, and practice diplomatic negotiation." },
      { name: "Toastmasters Youth Leadership Program", url: "https://www.toastmasters.org/education/youth-leadership-program", description: "Structured public speaking and leadership training for young people — builds the confidence to speak clearly and persuasively." },
    ],
    [
      { name: "A Kids' Guide to the United Nations", url: "", type: "book" },
      { name: "TED-Ed: What Is the United Nations?", url: "https://ed.ted.com/", type: "video" },
    ],
  ),

  s(nx(), "p49", "g6",
    "Study world geography in detail — regions, cultures, religions, and languages. Learn about different forms of government: democracy, monarchy, theocracy, authoritarianism. Understanding how countries govern themselves is foundational to understanding how they interact. Deepen foreign language study — consider starting a second language. Read about famous diplomats and peacemakers: Eleanor Roosevelt, Dag Hammarskjöld, Kofi Annan, Madeleine Albright. Join or start a debate club — learning to argue both sides of an issue is the diplomat's core skill. Write essays about global issues you care about.",
    ["World Geography", "Government & Civics", "Foreign Language (Intermediate)", "Writing (Persuasive Essays)"],
    [
      { name: "National History Day — Diplomacy & International Topics", url: "https://www.nhd.org/", description: "Research and present a historical topic related to diplomacy — compete at local, state, and national levels while building research skills." },
      { name: "School Debate Club — Start or Join", url: "", description: "Debate teaches structured argument, rebuttal, and seeing multiple sides of an issue — all daily skills for career diplomats negotiating treaties." },
    ],
    [
      { name: "Diplomacy for Kids by U.S. Department of State (Online Resource)", url: "https://diplomacy.state.gov/", type: "article" },
      { name: "Khan Academy: US Government & Civics", url: "https://www.khanacademy.org/humanities/us-government-and-civics", type: "course" },
    ],
  ),

  s(nx(), "p49", "g7",
    "World history deepens — study the World Wars, the Cold War, decolonization, and how the modern international system was built. Learn about international organizations: UN, NATO, EU, African Union, ASEAN. How do countries cooperate? What happens when they don't? Strengthen language skills with reading and writing in your target language. Practice negotiation: organize a mock treaty between 'countries' represented by classmates. Read international news weekly — pick a region and follow what's happening. Diplomacy is about understanding context: history shapes the present, and diplomats must know both.",
    ["World History (20th Century)", "International Organizations", "Foreign Language (Reading & Writing)", "Current Events & News Literacy"],
    [
      { name: "Model United Nations — Middle School Division", url: "https://unausa.org/model-un/", description: "Represent a country at a Model UN conference — research your nation's position, write resolutions, negotiate with other delegates, and give speeches." },
      { name: "World Affairs Council — Youth Programs", url: "https://www.worldaffairs.org/", description: "Many cities have World Affairs Councils offering youth forums, speaker series, and international exchange programs for globally-minded students." },
    ],
    [
      { name: "The Boy Who Harnessed the Wind by William Kamkwamba (Young Readers)", url: "", type: "book" },
      { name: "CFR Education: World101 — How the World Works", url: "https://world101.cfr.org/", type: "course" },
    ],
  ),

  s(nx(), "p49", "g8",
    "Study modern world history in depth: the post-WWII order, the creation of Israel, the Cold War proxy conflicts, the end of apartheid, the Rwandan genocide, the War on Terror. Understanding conflict is essential to understanding peace. Practice advanced debate and Model UN — aim to win awards and take on leadership roles. Strengthen language skills toward fluency. Read diplomatic memoirs and international relations books. Learn about the U.S. Foreign Service: how do you become a diplomat? What is the FSOT? Start mapping the path. Diplomacy is a career built on knowledge, language, and the ability to connect with anyone — start building all three.",
    ["Modern World History", "International Relations (Intro)", "Foreign Language (Advanced)", "Debate & Rhetoric", "Geography (Geopolitics)"],
    [
      { name: "Model UN — Compete at Regional Conferences", url: "https://unausa.org/model-un/", description: "Take MUN to the next level at regional conferences — compete against hundreds of delegates, draft complex resolutions, and master parliamentary procedure." },
      { name: "NSLI-Y — National Security Language Initiative for Youth", url: "https://www.nsliforyouth.org/", description: "U.S. State Department scholarship for immersive summer language study abroad in critical languages — a life-changing experience for aspiring diplomats." },
    ],
    [
      { name: "A Diplomat's Handbook by Charles Freeman", url: "", type: "book" },
      { name: "CFR — Model Diplomacy Simulations (Free)", url: "https://modeldiplomacy.cfr.org/", type: "course" },
    ],
  ),

  s(nx(), "p49", "g9",
    "Take advanced world history, geography, and civics. History is the diplomat's raw material — every negotiation is shaped by centuries of context. Study international relations theory: realism, liberalism, constructivism. How do scholars explain why countries behave the way they do? Take a foreign language seriously — aim for high school fluency. Join Model UN and pursue leadership positions. Write for the school newspaper on international topics. Learn about diplomacy as a career: Foreign Service Officers (FSOs) pass the FSOT, get security clearance, and serve at embassies worldwide. The work is demanding, but the mission — representing your country and solving problems peacefully — is among the most meaningful in government.",
    ["World History / AP World History", "Geography", "Foreign Language (High School Level)", "Civics & Government", "English (Analytical Writing)"],
    [
      { name: "Model UN — Serve as Committee Chair or Secretariat", url: "https://unausa.org/model-un/", description: "Leadership roles in MUN build the exact skills diplomats use daily — managing debate, building consensus, and guiding diverse groups toward agreement." },
      { name: "Congressional Award — Youth Leadership Program", url: "https://www.congressionalaward.org/", description: "Earn medals through public service, personal development, and exploration — recognized by Congress and valued in public service careers." },
    ],
    [
      { name: "Why Nations Fail by Daron Acemoglu & James Robinson (Adapted)", url: "", type: "book" },
      { name: "Crash Course: World History", url: "https://www.youtube.com/playlist?list=PLBDA2E52FB1EF80C9", type: "video" },
    ],
  ),

  s(nx(), "p49", "g10",
    "Take AP World History, AP Human Geography, or AP Government. Deepen understanding of comparative politics — how do different political systems work? Study economics: trade, sanctions, and development aid are the tools of modern diplomacy. Language skills advance — add a second language if possible (critical languages like Arabic, Chinese, Russian, or Farsi are highly valued). Participate in Model UN at the high school level with competitive rigor. Research the Foreign Service career path in detail: the FSOT (Foreign Service Officer Test), the QEP (Qualifications Evaluation Panel), the Oral Assessment, and the clearance process. It's a competitive, multi-year journey — but knowing the path makes it walkable.",
    ["AP World History", "AP Human Geography", "Foreign Language (2nd Year)", "Economics (Intro)", "Comparative Government"],
    [
      { name: "U.S. Department of State — Student Internships & Programs", url: "https://careers.state.gov/", description: "Explore the State Department's high school and college programs — internships, fellowships, and the Pathways Program that feeds into the Foreign Service." },
      { name: "World Affairs Council — International Leadership Program", url: "https://www.worldaffairs.org/", description: "Join a youth leadership program focused on global issues — network with diplomats, attend briefings, and build international affairs knowledge." },
    ],
    [
      { name: "Prisoners of Geography by Tim Marshall (Young Readers Edition)", url: "", type: "book" },
      { name: "State Department — Careers Representing America (Video Series)", url: "https://careers.state.gov/", type: "video" },
    ],
  ),

  s(nx(), "p49", "g11",
    "Take AP U.S. Government, AP Comparative Government, and AP Economics. Understanding how your own government works — and how it differs from others — is the core of foreign policy. Language skills should reach conversational fluency. Take a practice FSOT to understand the breadth of knowledge required: U.S. history, world history, geography, economics, management, and English expression. Lead Model UN as Secretary-General or head delegate. Apply for the State Department's high school exchange programs. Consider summer programs at Georgetown's School of Foreign Service or similar. Diplomacy requires a rare combination: deep knowledge of your own country, deep curiosity about others, and the ability to find common ground between them.",
    ["AP U.S. Government", "AP Comparative Government", "AP Economics (Micro/Macro)", "Foreign Language (Conversational Fluency)", "English (Diplomatic Writing)"],
    [
      { name: "Georgetown University — International Relations Summer Program", url: "https://summer.georgetown.edu/", description: "Pre-college summer programs in international relations, diplomacy, and foreign policy at one of the world's top schools of foreign service." },
      { name: "State Department — Youth Exchange & Study (YES) Abroad", url: "https://www.yes-abroad.org/", description: "Full scholarship for a year of high school study abroad in countries with significant Muslim populations — immersive cultural and language experience." },
    ],
    [
      { name: "The Tragedy of Great Power Politics by John Mearsheimer (Excerpts)", url: "", type: "book" },
      { name: "Council on Foreign Relations — The World Next Week (Podcast)", url: "https://www.cfr.org/podcasts/world-next-week", type: "article" },
    ],
  ),

  s(nx(), "p49", "g12",
    "Take AP U.S. Government, AP Comparative Government, AP Economics, and AP English Language. These four APs cover the core competencies of the FSOT. Continue language toward advanced fluency. Research the best undergraduate programs: Georgetown School of Foreign Service, Harvard Kennedy School (undergrad affiliate), Tufts Fletcher School, Princeton School of Public and International Affairs, Stanford, Columbia, and American University. Write compelling college essays about your passion for international affairs. Apply for the Rangel, Pickering, or Payne Fellowships if eligible — they fund graduate school and provide a direct path into the Foreign Service. Diplomacy is a calling: admissions officers and fellowship committees look for genuine commitment to public service.",
    ["AP U.S. Government", "AP Comparative Government", "AP Economics", "AP English Language", "Foreign Language (Advanced)"],
    [
      { name: "U.S. Senate Page Program / House Page Program", url: "https://www.senate.gov/", description: "Highly selective program working directly with Senators — unparalleled exposure to how government actually works and a prestigious credential for aspiring diplomats." },
      { name: "Model UN — National High School Conferences", url: "https://unausa.org/model-un/", description: "Compete at the highest level of high school MUN — NHSMUN in New York or NAIMUN in D.C. are premier conferences for future diplomats." },
    ],
    [
      { name: "A Promised Land by Barack Obama (Excerpts)", url: "", type: "book" },
      { name: "Foreign Affairs Magazine — Student Subscription", url: "https://www.foreignaffairs.com/", type: "article" },
    ],
  ),

  s(nx(), "p49", "g13",
    "College application year. Target schools with top international relations programs: Georgetown, Harvard, Princeton, Tufts, Columbia, Stanford, GWU, and American University. Write essays that connect your experiences — Model UN, language study, travel, debate — to a vision of serving your country abroad. Consider ROTC as a path into military diplomacy and intelligence if that aligns with your goals. Take the hardest courses available in history, government, and languages. Start preparing for the FSOT even now — the exam covers 60+ years of world and U.S. history plus economics, management, and English. Diplomacy is meritocratic but demanding: the Foreign Service accepts about 2% of applicants. Start building the knowledge base early.",
    ["AP Government (Final)", "AP Economics (Final)", "Foreign Language (Service-Level)", "International Relations (Self-Study)", "College Applications & FSOT Prep"],
    [
      { name: "Thomas R. Pickering Foreign Affairs Fellowship", url: "https://pickeringfellowship.org/", description: "Prestigious State Department fellowship funding undergraduate and graduate study with a direct path into the Foreign Service — for students committed to diplomacy careers." },
      { name: "State Department — Internship Program (Student Trainee)", url: "https://careers.state.gov/intern/", description: "Apply for a State Department internship at headquarters in D.C. or at an embassy abroad — the best way to see diplomacy from the inside before committing." },
    ],
    [
      { name: "The Diplomat's Dictionary by Chas Freeman", url: "", type: "book" },
      { name: "FSOT Practice Test — U.S. Department of State", url: "https://careers.state.gov/", type: "course" },
    ],
  ),

  s(nx(), "p49", "g14",
    "Finalize college plans and prepare for undergrad. Over the summer, travel if possible — nothing replaces experiencing another country firsthand. Immerse yourself in language through media: watch foreign films, listen to podcasts, read newspapers in your target language. Read Foreign Affairs and The Economist weekly. If you receive a fellowship, follow their pre-service guidance. If not, plan to take the FSOT in your junior or senior year of college. Consider a gap year teaching English abroad, volunteering with Peace Corps Response (after college), or working on a political campaign. Diplomats represent America to the world — the broader your experience of both, the better you'll serve.",
    ["International Relations", "Foreign Language (Immersion)", "World History (Review)", "Economics (Review)", "Professional Writing & Communication"],
    [
      { name: "Critical Language Scholarship (CLS) Program", url: "https://clscholarship.org/", description: "U.S. State Department program for intensive summer language study in critical-need languages — fully funded immersion that accelerates language skills dramatically." },
      { name: "Volunteer with a Refugee Resettlement Organization", url: "https://www.rescue.org/", description: "Work with refugees and immigrants in your community — develop cross-cultural communication skills and understand the human dimension of international affairs." },
    ],
    [
      { name: "The Bottom Billion by Paul Collier", url: "", type: "book" },
      { name: "America's Diplomats — Documentary Film", url: "https://www.pbs.org/", type: "video" },
    ],
  ),

  s(nx(), "p49", "g15",
    "Major in International Relations, Political Science, Foreign Affairs, Economics, or Area Studies. Core courses: international relations theory, comparative politics, diplomatic history, international law, economics of development, and foreign policy analysis. Achieve professional-level fluency in at least one foreign language — take advanced coursework and study abroad for at least a semester. Lead Model UN at the collegiate level. Pursue a State Department internship or a placement at an embassy. Prepare for the FSOT — most candidates take it in their junior or senior year. The exam is the gateway: a three-hour test of job knowledge, English expression, and situational judgment, followed by a personal narrative and oral assessment.",
    ["International Relations Theory", "Comparative Politics", "Diplomatic History", "International Law", "Foreign Language (Professional Fluency)"],
    [
      { name: "State Department — Student Internship Program (Embassy or D.C.)", url: "https://careers.state.gov/intern/", description: "Intern at a U.S. embassy abroad or the State Department in Washington — the most direct exposure to diplomatic work available to undergraduates." },
      { name: "Study Abroad — Critical Language or Region of Interest", url: "", description: "Spend a semester or year studying in a country relevant to your diplomatic interests — immersion is the only way to achieve true cultural and linguistic competence." },
    ],
    [
      { name: "Diplomacy by Henry Kissinger", url: "", type: "book" },
      { name: "Georgetown Journal of International Affairs", url: "https://gjia.georgetown.edu/", type: "article" },
    ],
  ),

  s(nx(), "p49", "g16",
    "Master's in International Relations, Foreign Service, Public Policy, or Law (JD). Top feeder schools: Georgetown MSFS, Johns Hopkins SAIS, Tufts Fletcher, Harvard Kennedy School, Princeton SPIA, and Columbia SIPA. These two-year programs combine advanced coursework, language training, and a capstone project with internship placements. Alternatively, a law degree (JD) with an international law focus is a respected path — many diplomats are lawyers by training. Take the FSOT during grad school if you haven't already. The Foreign Service also hires specialists — in management, public diplomacy, economics, and political affairs — so consider which cone fits your strengths. Graduate school is also the time to apply for the Pickering, Rangel, and Payne Fellowships if you didn't in undergrad.",
    ["Foreign Policy Analysis", "International Economics", "Negotiation & Conflict Resolution", "Area Studies Specialization", "Professional Diplomacy Skills"],
    [
      { name: "Rangel Graduate Fellowship Program", url: "https://rangelprogram.org/", description: "State Department fellowship funding graduate school with a Foreign Service commitment — two summer internships (D.C. + embassy abroad) and mentoring from senior diplomats." },
      { name: "White House Internship Program", url: "https://www.whitehouse.gov/get-involved/internships/", description: "Highly competitive internship in the Executive Office of the President — unparalleled exposure to the highest levels of U.S. foreign policy decision-making." },
    ],
    [
      { name: "The Craft of Diplomacy by Ambassador Ronald Neumann", url: "", type: "book" },
      { name: "Foreign Service Journal — AFSA", url: "https://afsa.org/foreign-service-journal", type: "article" },
    ],
  ),

  s(nx(), "p49", "g17",
    "Ph.D. in International Relations, Political Science, or Public Policy — for those pursuing academic careers, think-tank research, or senior policy advisory roles. Alternatively, serve in the Foreign Service and rise through the ranks from entry-level FSO to Ambassador. The career path: pass the FSOT → QEP → Oral Assessment → security/medical clearance → A-100 (diplomat training) → first posting (often a consular job) → rotating assignments every 2-3 years through different countries and roles. Career pinnacles: U.S. Ambassador to a major country, Assistant Secretary of State, or senior roles at the UN, NATO, or the National Security Council. Diplomacy is a lifelong vocation — representing your country abroad, negotiating peace, and protecting citizens. Few careers offer such a direct opportunity to shape history.",
    ["Ph.D. or Career Diplomacy Track", "Advanced Negotiation", "Crisis Management", "Strategic Communications", "Leadership & Mentorship in Foreign Policy"],
    [
      { name: "International Career Advancement Program (ICAP)", url: "https://www.icapaspen.org/", description: "Leadership development program for mid-career foreign affairs professionals — builds the skills and networks needed to advance to senior diplomatic roles." },
      { name: "Council on Foreign Relations — International Affairs Fellowship", url: "https://www.cfr.org/fellowships/", description: "Prestigious fellowship placing mid-career professionals in government, academia, and the private sector — a launchpad for senior foreign policy leadership." },
    ],
    [
      { name: "The Ambassador: Inside the Life of a Working Diplomat by John Shaw", url: "", type: "book" },
      { name: "American Foreign Service Association — Career Resources", url: "https://afsa.org/", type: "article" },
    ],
  ),

  // ========================================================================
  // p50 — AIRCRAFT MECHANIC 🔧
  // ========================================================================

  s(nx(), "p50", "g1",
    "Aircraft mechanics start with fascination about how things work! Take apart toys and put them back together. Build towers with blocks and knock them down — why did it fall? What makes things strong? Play with toy airplanes, cars, and machines. Notice the world's moving parts: wheels turning, doors opening, levers lifting. Visit an airport observation deck if possible — watch planes take off and land. The children who grow up to maintain aircraft are the ones who, from the earliest age, can't stop asking 'How does that work?' and 'Can I fix it?'",
    ["Building & Construction Play", "How Things Work", "Fine Motor Skills", "Observation & Curiosity"],
    [
      { name: "LEGO Duplo — Aircraft & Vehicles", url: "https://www.lego.com/en-us/themes/duplo", description: "Build planes, helicopters, and vehicles with large bricks — develops the mechanical intuition and spatial reasoning that underpin all mechanical trades." },
      { name: "Visit an Airport Observation Area / Aviation Museum", url: "", description: "Watch real aircraft up close — seeing planes taxi, take off, and land sparks the awe that draws so many to aviation careers." },
    ],
    [
      { name: "Planes by Byron Barton", url: "", type: "book" },
      { name: "Richard Scarry's Cars and Trucks and Things That Go", url: "", type: "book" },
    ],
  ),

  s(nx(), "p50", "g2",
    "Building becomes more intentional — follow instructions to assemble models and simple machines. Play with gears, pulleys, and levers. Take apart old household items (with supervision) to see what's inside: a broken clock, an old remote, a discarded toaster. Understand the difference between fixing and breaking — mechanics make things work better, not worse. Read books about planes, helicopters, and how machines operate. Visit a hardware store and learn the names of tools. Aircraft maintenance is a career built on tool mastery — and tool comfort starts before you can hold a real wrench.",
    ["Building & Following Instructions", "Simple Machines (Gears, Levers)", "Tool Recognition", "Reading (How Things Work)"],
    [
      { name: "KiwiCo — Tinker Crate (Simple Machines)", url: "https://www.kiwico.com/", description: "Monthly STEM kits with hands-on building projects — levers, pulleys, gears, and mechanical engineering concepts for curious kids." },
      { name: "Home Depot Kids Workshops (Free)", url: "https://www.homedepot.com/c/kids", description: "Free in-store building workshops where kids use real tools to construct projects — develops genuine tool skills in a supervised environment." },
    ],
    [
      { name: "How Machines Work by David Macaulay", url: "", type: "book" },
      { name: "SciShow Kids: How Do Airplanes Fly?", url: "https://www.youtube.com/@scishowkids", type: "video" },
    ],
  ),

  s(nx(), "p50", "g3",
    "Introduce the fundamentals of mechanics: how levers, pulleys, screws, and wheels make work easier. Build increasingly complex models — LEGO Technic or similar. Practice measurement with rulers and tapes — aviation is a world of precision where millimeters matter. Understand basic electricity: what is a circuit? What conducts electricity? Visit an airshow or aviation museum — getting close to real aircraft, seeing the engines, landing gear, and control surfaces, is motivating in a way no textbook can match. Aircraft mechanics need both hands-on skill and the mental discipline to follow detailed procedures — build both from an early age.",
    ["Simple Machines & Mechanics", "Measurement & Precision", "Basic Electricity", "Reading Technical Instructions"],
    [
      { name: "LEGO Technic — Mechanical Building Sets", url: "https://www.lego.com/en-us/themes/technic", description: "Advanced LEGO sets with gears, axles, pneumatics, and working mechanical systems — the closest thing to engineering with plastic bricks." },
      { name: "Young Eagles — Free Airplane Rides & Aviation Exposure", url: "https://www.eaa.org/eaa/youth/free-ye-flights", description: "EAA program giving kids ages 8-17 free introductory flights with volunteer pilots — experiencing flight firsthand is the ultimate inspiration." },
    ],
    [
      { name: "The Way Things Work Now by David Macaulay", url: "", type: "book" },
      { name: "Mystery Science: How Do Airplanes Stay Up?", url: "https://mysteryscience.com/", type: "video" },
    ],
  ),

  s(nx(), "p50", "g4",
    "Get serious about building and mechanics. Move from toys to real projects — build a birdhouse, fix a loose screw, assemble IKEA furniture with a parent. Learn the four forces of flight: lift, weight, thrust, and drag. How do wings generate lift? How do jet engines work? Start a 'mechanics notebook' — sketch machines, label parts, write down how they work. Practice math: addition, subtraction, multiplication. Mechanics do math every day — calculating tolerances, measuring clearances, converting units. Visit a mechanic's shop (auto or aviation) and see professionals at work. The path from curious kid to skilled tradesperson is paved with real, hands-on projects.",
    ["Mechanics & Forces of Flight", "Math (Multiplication & Measurement)", "Building Projects (Wood/Plastic)", "Technical Drawing & Sketching"],
    [
      { name: "EAA Aviation Museum — Youth Programs", url: "https://www.eaa.org/eaa/learn-to-fly", description: "Experimental Aircraft Association offers youth workshops, museum tours, and hands-on aviation activities — the largest grassroots aviation organization in the world." },
      { name: "Beginner Model Rocketry", url: "https://www.nar.org/", description: "Build and launch model rockets — rocketry teaches aerodynamics, careful assembly, and the importance of following procedures exactly." },
    ],
    [
      { name: "The Airplane Book by DK", url: "", type: "book" },
      { name: "Crash Course Kids: Engineering", url: "https://www.youtube.com/playlist?list=PLhz12vamHOnZ4ZDC0dS6C9HRN5Qrm0jHO", type: "video" },
    ],
  ),

  s(nx(), "p50", "g5",
    "Explore aviation in depth. Study different types of aircraft: fixed-wing, rotorcraft, gliders, drones. Learn the parts of an airplane: fuselage, wings, empennage, landing gear, powerplant. Understand what each part does. Math deepens — fractions, decimals, and unit conversions are daily tools for mechanics. Build a balsa wood model airplane — the precision required teaches patience and attention to detail. Start learning about tools: wrenches, torque wrenches, multimeters, calipers. Aircraft maintenance is among the most regulated professions in the world — procedures must be followed exactly. Building the habit of precision now pays dividends later.",
    ["Aviation Science", "Math (Fractions, Decimals, Units)", "Physics (Forces & Motion Intro)", "Tool Knowledge & Safety"],
    [
      { name: "Civil Air Patrol Cadet Program", url: "https://www.gocivilairpatrol.com/", description: "U.S. Air Force auxiliary program for youth — aerospace education, leadership training, and hands-on experience with aircraft and aviation professionals." },
      { name: "Build a Balsa Wood Model Airplane Kit", url: "https://www.guillow.com/", description: "Classic balsa wood model aircraft kits teach precision, patience, and an intuitive understanding of aerodynamics through hands-on construction." },
    ],
    [
      { name: "The Airplane Pilot: A Kid's Guide to How Planes Fly by Sam Hendrix", url: "", type: "book" },
      { name: "Smithsonian Channel: Mighty Planes (Series)", url: "https://www.smithsonianchannel.com/", type: "video" },
    ],
  ),

  s(nx(), "p50", "g6",
    "Physics enters the picture — study motion, forces, energy, and simple machines. Math advances to pre-algebra: ratios, proportions, and basic equations. Start learning about aircraft engines: piston engines, turboprops, turbojets, and turbofans. How do they differ? What makes them work? Practice using basic tools: screwdrivers, wrenches, pliers, and a drill (with supervision). Start a small engine repair project — a lawnmower engine teaches the same principles (intake, compression, power, exhaust) as a piston aircraft engine. Aviation mechanics is a career where you never stop learning — every new aircraft type brings new systems to master.",
    ["Physics (Motion & Forces)", "Pre-Algebra", "Aircraft Engines (Intro)", "Tools & Small Engine Basics"],
    [
      { name: "EAA Young Eagles — Build & Fly Program", url: "https://www.eaa.org/eaa/youth", description: "Go beyond the free flight — EAA chapters offer build projects, mentorship from pilots and mechanics, and access to real aircraft workshops." },
      { name: "Small Engine Repair — Hobby Project", url: "", description: "Find an old lawnmower or go-kart engine and learn to disassemble, clean, and reassemble it — the Otto cycle is the same in a Cessna as in a lawnmower." },
    ],
    [
      { name: "The New Way Things Work by David Macaulay", url: "", type: "book" },
      { name: "TED-Ed: How Do Jet Engines Work?", url: "https://ed.ted.com/", type: "video" },
    ],
  ),

  s(nx(), "p50", "g7",
    "Take math seriously — pre-algebra and algebra are the mathematics of mechanical systems. Physics deepens: levers, hydraulics, pneumatics, and thermodynamics. Aircraft use all of these. Start learning about aircraft systems: electrical, hydraulic, fuel, landing gear, flight controls. How do they interact? Read about aviation accidents and the mechanical failures that caused (or contributed to) them — the NTSB database is a powerful lesson in why maintenance matters. Practice tool discipline: clean tools, organized workspace, safety glasses always. In aviation, a forgotten tool in an engine can kill. Professionalism is a skill, and like any skill, it must be practiced.",
    ["Algebra", "Physics (Mechanics & Thermodynamics)", "Aircraft Systems (Intro)", "Safety & Professionalism"],
    [
      { name: "Civil Air Patrol — Aerospace Education Modules", url: "https://www.gocivilairpatrol.com/", description: "Structured aerospace education curriculum covering aircraft systems, weather, navigation, and aviation history — earn badges and certifications." },
      { name: "Visit an Aircraft Maintenance Facility (FBO or MRO)", url: "", description: "Tour a fixed-base operator or maintenance facility — see aircraft opened up for inspection, mechanics at work, and the tools and documentation they use daily." },
    ],
    [
      { name: "Aircraft Structures for Engineering Students (Simplified Guides)", url: "", type: "book" },
      { name: "Khan Academy: Physics — Forces and Newton's Laws", url: "https://www.khanacademy.org/science/physics", type: "course" },
    ],
  ),

  s(nx(), "p50", "g8",
    "Algebra deepens. Physics expands to include electricity and magnetism — avionics (aircraft electronics) is one of the fastest-growing specialties. Learn about aircraft materials: aluminum alloys, composites, titanium. Why is each used where it is? Understand corrosion — the constant enemy of metal aircraft — and how mechanics fight it. Explore career paths: A&P (Airframe & Powerplant) mechanic, avionics technician, inspection authorized (IA) mechanic, and specialized roles in engines, structures, or composites. Research the FAA certification process: 1,900 hours of training (or 30 months of experience), written exams, oral exams, and practical tests. A&P school is demanding but achievable — and the demand for mechanics grows every year.",
    ["Algebra I", "Physics (Electricity & Magnetism)", "Materials Science (Intro)", "Career Exploration (A&P Path)"],
    [
      { name: "Aircraft Owners and Pilots Association (AOPA) — AV8RS Youth Program", url: "https://www.aopa.org/", description: "Free AOPA youth membership with aviation resources, magazines, and connections to the largest community of pilots and aircraft owners in the world." },
      { name: "Technicians of Tomorrow — FAA Aviation Maintenance Info", url: "https://www.faa.gov/mechanics", description: "FAA's official resource for aspiring mechanics — learn the certification requirements, find schools, and understand the career path from the source." },
    ],
    [
      { name: "Standard Aircraft Handbook for Mechanics (Simplified)", url: "", type: "book" },
      { name: "Smarter Every Day — Helicopter Physics (YouTube)", url: "https://www.youtube.com/@smartereveryday", type: "video" },
    ],
  ),

  s(nx(), "p50", "g9",
    "Take algebra and pre-physics seriously. The math doesn't stop — mechanics calculate torque values, measure in thousandths of an inch, and read complex diagrams. Study aviation science formally if offered. Learn to read technical drawings and schematics — the language of maintenance manuals. Understand the regulatory framework: the FAA, airworthiness directives, service bulletins, and maintenance logbooks. Aviation is a paper trail as much as a mechanical one. Start a hands-on project: restore a small engine, build a drone, or fabricate something from metal. Aircraft mechanics combine brain and hands — the theoretical and the practical are equally important. Visit A&P schools and talk to instructors about what the program requires.",
    ["Algebra / Geometry", "Aviation Science", "Technical Reading & Schematics", "Metal & Fabrication (Intro)"],
    [
      { name: "Build a Drone — DIY Quadcopter Kit", url: "https://www.dji.com/", description: "Assemble and fly a drone — modern drones combine everything an aviation mechanic needs: electronics, motors, structures, and troubleshooting skills." },
      { name: "High School Vocational / Shop Class — Mechanics or Metalworking", url: "", description: "Take every shop, automotive, or metalworking class your school offers — hands-on skills with real tools are exactly what A&P schools and employers value." },
    ],
    [
      { name: "Aircraft Maintenance & Repair by Kroes & Watkins (Reference)", url: "", type: "book" },
      { name: "AOPA — Learn to Fly (Free Ground School Materials)", url: "https://www.aopa.org/", type: "course" },
    ],
  ),

  s(nx(), "p50", "g10",
    "Take geometry, algebra II, and physics. Physics is the theoretical backbone of everything an A&P mechanic does: forces, fluid dynamics, thermodynamics, electricity. Take shop class — automotive, welding, or metal fabrication. The specific material doesn't matter; the experience of working with tools, following procedures, and solving mechanical problems does. Learn about the A&P certification in detail: two ratings (Airframe and Powerplant), each with a written, oral, and practical exam. Understand that some mechanics specialize in one or the other. Research A&P schools — community colleges with Part 147 programs, private aviation maintenance schools, and military pathways. Aviation maintenance offers strong pay, high demand, and the satisfaction of knowing your work keeps people safe in the sky.",
    ["Geometry / Algebra II", "Physics", "Vocational / Shop Class", "Aircraft Systems (Intermediate)"],
    [
      { name: "Aviation Maintenance Technician School — Campus Visit", url: "", description: "Tour a Part 147 A&P school — see the hangars, training aircraft, engine test cells, and classrooms. Talk to students about what the program is really like." },
      { name: "CAP Cadet — Leadership & Technical Training", url: "https://www.gocivilairpatrol.com/", description: "Advance through Civil Air Patrol ranks — earn technical badges in aerospace, emergency services, and radio communications while developing leadership skills." },
    ],
    [
      { name: "Airframe & Powerplant Mechanics: General Handbook (FAA)", url: "https://www.faa.gov/regulations_policies/handbooks_manuals/aircraft/", type: "book" },
      { name: "Mentor Pilot — Airline Maintenance (YouTube)", url: "https://www.youtube.com/", type: "video" },
    ],
  ),

  s(nx(), "p50", "g11",
    "Take algebra II, geometry, and physics with a mechanical focus. Add electronics if available — avionics is a growing and well-paying specialty. Take automotive technology or advanced shop — the skills transfer directly. Learn about nondestructive testing (NDT): dye penetrant, magnetic particle, eddy current, ultrasound. These are the techniques mechanics use to find cracks invisible to the naked eye. Research military pathways: every branch has aircraft mechanics, and military training is respected by civilian employers. Understand the commitment: A&P school is 18-24 months of intense hands-on and classroom training. But the career rewards are substantial: median pay over $70K with top earners over $100K, strong union protections, and a skill set that can't be outsourced or automated.",
    ["Algebra II", "Physics (Applied Mechanics)", "Electronics / Avionics (Intro)", "Automotive / Shop Technology"],
    [
      { name: "FAA Airmen Certification — Student Resources", url: "https://www.faa.gov/mechanics/become", description: "Official FAA pathway documentation — learn exactly what you need to do, exam by exam, to earn your A&P certificate." },
      { name: "Aviation Maintenance Competition — Aerospace Maintenance Council", url: "https://aerospacemaintenancecouncil.com/", description: "Annual competition where maintenance teams race to diagnose and fix aircraft problems — the Super Bowl of aircraft maintenance. Attend as a spectator and be inspired." },
    ],
    [
      { name: "Aviation Mechanic Handbook by Dale Crane", url: "", type: "book" },
      { name: "MIT OpenCourseWare: Aircraft Systems Engineering", url: "https://ocw.mit.edu/", type: "course" },
    ],
  ),

  s(nx(), "p50", "g12",
    "Take physics, advanced math, and electronics if available. Consider dual enrollment at a community college with an A&P program — start accumulating hours and knowledge before high school graduation. Build a capstone mechanical project: restore a motorcycle engine, build a metalworking project, or complete a major automotive repair. Document everything — A&P schools and employers value demonstrated mechanical aptitude. Apply to Part 147 A&P schools or consider the military path. Research employers: major airlines (Delta, United, American), cargo carriers (FedEx, UPS), MROs (maintenance, repair, and overhaul facilities), and general aviation. Aviation maintenance is a stable, well-compensated career with clear advancement: mechanic → lead mechanic → inspector → maintenance director.",
    ["Physics (Advanced)", "Electronics & Avionics", "Algebra II / Trigonometry", "Capstone Mechanical Project", "A&P School Research & Applications"],
    [
      { name: "A&P School Application — Community College Part 147 Programs", url: "", description: "Apply to FAA-approved Part 147 aviation maintenance technician schools — community colleges offer the most affordable path, typically $5K-$15K total tuition." },
      { name: "Military Enlistment — Aviation Maintenance MOS/Rating", url: "", description: "Air Force, Navy, Army, Marines, and Coast Guard all train aircraft mechanics — military experience earns civilian A&P eligibility and a lifetime of respect from employers." },
    ],
    [
      { name: "FAA Aviation Maintenance Technician Handbook — Airframe (Free PDF)", url: "https://www.faa.gov/regulations_policies/handbooks_manuals/aircraft/", type: "book" },
      { name: "How It's Made: Aircraft Engines (YouTube)", url: "https://www.youtube.com/", type: "video" },
    ],
  ),

  s(nx(), "p50", "g13",
    "College decision year. Either enroll in a Part 147 A&P program (community college or dedicated aviation maintenance school) or enter military service with an aviation maintenance specialty. If pursuing civilian A&P: the program is approximately 1,900 hours over 18-24 months. Courses cover general subjects (math, physics, regulations, materials), airframe (structures, systems, inspection), and powerplant (engines, propellers, fuel systems). Study for and pass each section's written, oral, and practical exam. If pursuing military path: aviation maintenance training is intensive and world-class — you'll work on some of the most advanced aircraft on Earth. Both paths lead to the same FAA certification. The demand for A&P mechanics is projected to grow 5-10% annually as current mechanics retire faster than they're replaced.",
    ["A&P General Subjects", "Aircraft Structures & Systems", "Engine Theory & Maintenance", "FAA Regulations & Documentation", "Hands-On Lab & Practical Skills"],
    [
      { name: "FAA Part 147 A&P Program — Enrollment", url: "https://www.faa.gov/mechanics/become/schools", description: "Official list of FAA-approved aviation maintenance technician schools — choose an accredited program and begin your formal training." },
      { name: "Aviation Maintenance Internship / Apprenticeship", url: "", description: "Work as an apprentice at a repair station or FBO while studying — real-world experience plus mentorship from experienced A&Ps accelerates learning dramatically." },
    ],
    [
      { name: "FAA Handbooks (General, Airframe, Powerplant) — Complete Set", url: "https://www.faa.gov/regulations_policies/handbooks_manuals/aircraft/", type: "book" },
      { name: "ASA Test Prep — A&P Certification Study Guides", url: "https://www.asa2fly.com/", type: "course" },
    ],
  ),

  s(nx(), "p50", "g14",
    "Complete A&P training and begin preparing for FAA exams — three written tests (General, Airframe, Powerplant), followed by oral and practical exams with a Designated Mechanic Examiner (DME). This is the culmination of years of work. If in the military, document your experience for FAA Form 8610-2 to qualify for the exams. After earning the A&P certificate, entry-level positions include: line mechanic at an airline, general aviation mechanic at an FBO, MRO technician, or manufacturing mechanic at companies like Boeing, Lockheed, or Gulfstream. Starting pay ranges from $50K-$65K with rapid advancement. The A&P certificate is a license to learn — every new aircraft type requires type-specific training, and the best mechanics pursue additional certifications throughout their careers.",
    ["FAA Test Preparation (Written, Oral, Practical)", "Aircraft Inspection Procedures", "Engine Overhaul & Repair", "Avionics Troubleshooting", "Professional Certification Exam"],
    [
      { name: "FAA Designated Mechanic Examiner (DME) — Schedule Exams", url: "https://www.faa.gov/mechanics/become/test", description: "Schedule and pass your oral and practical exams with a DME — the final step to earning the A&P certificate that opens every door in aviation maintenance." },
      { name: "Airline Mechanic Apprentice Program — Major Carrier", url: "", description: "Major airlines offer apprenticeship programs that combine on-the-job training with A&P certification support — a direct pipeline to a union aviation maintenance career." },
    ],
    [
      { name: "ASA Oral Exam Guide — Airframe & Powerplant", url: "https://www.asa2fly.com/", type: "book" },
      { name: "Prepware — A&P Exam Prep (Mobile App)", url: "https://www.asa2fly.com/", type: "course" },
    ],
  ),

  s(nx(), "p50", "g15",
    "Enter the workforce with your A&P certificate or complete your degree program alongside certification. First job: line maintenance at a regional or major airline, general aviation mechanic, or MRO technician. The first two years are about building experience — every aircraft type, every repair, every inspection builds competence. Pursue additional certifications: Inspection Authorization (IA) after three years of experience allows you to sign off annual inspections. Consider specializing: engines (Pratt & Whitney, GE, Rolls-Royce), avionics (Garmin, Honeywell), composites repair, or NDT inspection. Join a union at an airline — the Aircraft Mechanics Fraternal Association (AMFA) and Teamsters represent mechanics at major carriers, securing strong wages and benefits.",
    ["Line Maintenance Operations", "Aircraft Type Training", "Inspection Procedures", "Safety Management Systems", "Professional Development & Specialization"],
    [
      { name: "Airline Entry-Level A&P Mechanic — Apply Now", url: "", description: "Apply for A&P positions at regional and major airlines — Delta, United, American, Southwest — the demand is high and airlines offer signing bonuses for qualified mechanics." },
      { name: "FAA Inspection Authorization (IA) — Track Experience", url: "https://www.faa.gov/mechanics/", description: "Start tracking experience toward IA certification — requires 3 years as an active A&P and allows you to perform and sign off annual inspections." },
    ],
    [
      { name: "Aviation Maintenance Technician Series — Dale Crane (Complete)", url: "", type: "book" },
      { name: "FAA Safety Team — Continuing Education (FAASafety.gov)", url: "https://www.faasafety.gov/", type: "course" },
    ],
  ),

  s(nx(), "p50", "g16",
    "Advance in the field — earn Inspection Authorization (IA) and pursue advanced ratings. Career paths: lead mechanic (team leader on the hangar floor), quality assurance inspector, maintenance controller (coordination hub of airline operations), or technical representative for an aircraft manufacturer. Consider transitioning to management: aviation maintenance manager, director of maintenance (DOM) for a charter/private operator, or maintenance supervisor at an airline. Continuing education: manufacturer-specific training (Boeing, Airbus, Embraer), avionics certifications (FCC GROL), and NDT certifications. Experienced A&P mechanics with IA earn $80K-$120K+, with top positions at major airlines exceeding $140K plus overtime and benefits.",
    ["Inspection Authorization (IA)", "Advanced Avionics & Electronics", "Leadership & Team Management", "Quality Assurance & Safety", "Manufacturer-Specific Training"],
    [
      { name: "FAA Inspection Authorization — Earn Your IA", url: "https://www.faa.gov/mechanics/", description: "The IA is the next career milestone — take the IA exam to qualify for sign-off authority on major repairs and annual inspections, dramatically increasing your value." },
      { name: "Boeing / Airbus / GE — Factory Maintenance Training", url: "", description: "Aircraft and engine manufacturers offer type-specific training — becoming certified on a specific airframe or engine family opens doors at top employers worldwide." },
    ],
    [
      { name: "Aircraft Inspection, Repair & Alterations (FAA AC 43.13)", url: "https://www.faa.gov/regulations_policies/advisory_circulars/", type: "book" },
      { name: "Aviation Week — MRO News & Industry Trends", url: "https://aviationweek.com/", type: "article" },
    ],
  ),

  s(nx(), "p50", "g17",
    "Career pinnacle: Director of Maintenance (DOM) for a major airline or large MRO, FAA Aviation Safety Inspector (ASI), NTSB aircraft accident investigator, or owner of an aviation maintenance business. The DOM is responsible for the entire maintenance operation — hundreds of mechanics, thousands of aircraft movements, and regulatory compliance. FAA ASIs inspect maintenance facilities and enforce safety standards. NTSB investigators reconstruct accidents from mechanical evidence — one of the most intellectually demanding and important jobs in aviation. Alternatively, some mechanics transition to related fields: aviation insurance adjusting, aircraft sales and appraisal, or maintenance training instruction. Aircraft maintenance is a career where experience compounds — the 30-year mechanic is among the most respected professionals in any hangar. It's a lifetime of protecting the flying public, one inspection at a time.",
    ["Director of Maintenance Leadership", "Regulatory Compliance (FAA, EASA)", "Accident Investigation (NTSB Methods)", "Business Management", "Mentoring & Training Next Generation"],
    [
      { name: "FAA Aviation Safety Inspector (ASI) — Career Path", url: "https://www.faa.gov/jobs/career_fields/aviation_safety_careers", description: "Join the FAA as an Aviation Safety Inspector — oversee maintenance facilities, enforce regulations, and shape aviation safety policy at the national level." },
      { name: "Professional Aviation Maintenance Association (PAMA)", url: "https://www.pama.org/", description: "Join the leading professional association for aviation maintenance — annual conferences, industry advocacy, and networking with the most senior mechanics in the field." },
    ],
    [
      { name: "Airframe & Powerplant Mechanics: Powerplant Handbook (FAA)", url: "https://www.faa.gov/regulations_policies/handbooks_manuals/aircraft/", type: "book" },
      { name: "NTSB Aviation Accident Reports — Case Studies", url: "https://www.ntsb.gov/", type: "article" },
    ],
  ),


  // ========================================================================
  // p51 — METEOROLOGIST 🌪️
  // ========================================================================

  s(nx(), "p51", "g1",
    "Meteorology starts with looking up! Watch clouds — are they puffy, flat, or wispy? Talk about the weather every day: sunny, rainy, windy, snowy. Keep a simple weather chart with stickers. Feel the wind on your face and ask where it comes from. Read books about storms, rainbows, and seasons. Fill a cup with water, leave it outside, and measure how much rain fell. Meteorologists are scientists who never stopped being fascinated by the sky — at this age, the goal is falling in love with the weather.",
    ["Weather Observation", "Seasons & Patterns", "Counting & Measuring", "Curiosity About Nature"],
    [
      { name: "PBS Kids — Weather Games", url: "https://pbskids.org/games/weather/", description: "Interactive weather games that teach about sun, rain, snow, and seasons through playful animated characters." },
      { name: "Make a Rain Gauge from a Plastic Bottle", url: "", description: "A simple DIY rain gauge teaches measurement and observation — the earliest form of meteorological data collection." },
    ],
    [
      { name: "Cloudy With a Chance of Meatballs by Judi Barrett", url: "", type: "book" },
      { name: "National Geographic Kids: Weather", url: "https://kids.nationalgeographic.com/science/topic/weather", type: "video" },
    ],
  ),

  s(nx(), "p51", "g2",
    "Deepen weather observation. Keep a daily weather journal — draw what you see outside and write one sentence about it. Learn the four seasons and what makes each one different. Track temperature with a thermometer. Notice how weather affects what people wear, how plants grow, and where animals live. Learn the names of basic cloud types: cumulus (puffy), stratus (layered), cirrus (wispy). The atmosphere is Earth's giant, invisible ocean — and meteorologists are the people who learn to read its currents.",
    ["Weather Journaling", "Seasons & Temperature", "Cloud Identification", "Nature Observation"],
    [
      { name: "SciJinks — NOAA Weather for Kids", url: "https://scijinks.gov/", description: "NOAA's kid-friendly weather site with games, videos, and simple explanations of how weather works — from the people who run the National Weather Service." },
      { name: "Backyard Weather Station (Family Project)", url: "", description: "Set up a simple weather station with a thermometer, rain gauge, and windsock — daily measurement builds the habits of a scientist." },
    ],
    [
      { name: "The Cloud Book by Tomie dePaola", url: "", type: "book" },
      { name: "Sesame Street: Weather Episodes", url: "https://pbskids.org/sesame/", type: "video" },
    ],
  ),

  s(nx(), "p51", "g3",
    "Learn the water cycle — evaporation, condensation, precipitation. Understanding how water moves through the sky is the foundation of weather science. Measure temperature, rainfall, and wind direction with simple tools. Graph weather data: how many sunny days this month? What was the hottest day? Start learning about extreme weather — hurricanes, tornadoes, blizzards — and what causes them. Read about how people predict the weather and why forecasts sometimes change. Meteorology is part observation, part measurement, and part prediction — all skills that start right here.",
    ["The Water Cycle", "Measurement (Temperature, Rain)", "Graphing & Data", "Extreme Weather Basics"],
    [
      { name: "NASA Climate Kids", url: "https://climatekids.nasa.gov/", description: "Games, activities, and videos from NASA about weather, climate, and how scientists study Earth's atmosphere from space." },
      { name: "DIY Anemometer — Measure Wind Speed", url: "", description: "Build a simple anemometer with paper cups and straws — hands-on science that teaches measurement and wind dynamics." },
    ],
    [
      { name: "The Magic School Bus: Inside a Hurricane by Joanna Cole", url: "", type: "book" },
      { name: "Crash Course Kids: Weather vs. Climate", url: "https://www.youtube.com/playlist?list=PLhz12vamHOnZ4ZDC0dS6C9HRN5Qrm0jHO", type: "video" },
    ],
  ),

  s(nx(), "p51", "g4",
    "Explore how weather systems work: high and low pressure, warm and cold fronts, and how air masses move. Use maps to track storms — find a hurricane on a satellite map and follow its path. Learn the difference between weather (what's happening now) and climate (long-term patterns). Start recording detailed weather data and making simple forecasts. Why does it usually rain when the wind comes from a certain direction? Meteorologists find answers by asking questions and collecting data. Build a model of the Earth's atmosphere — understanding the layers (troposphere, stratosphere) is key to understanding weather.",
    ["Weather Systems (Fronts & Pressure)", "Map Reading & Tracking", "Data Collection & Graphing", "Earth Science (Atmosphere)"],
    [
      { name: "National Weather Service — JetStream Weather School", url: "https://www.weather.gov/jetstream/", description: "Free online weather school from the NWS — interactive lessons on the atmosphere, weather systems, and forecasting designed for curious students." },
      { name: "Track a Hurricane (NOAA Hurricane Tracker)", url: "https://www.nhc.noaa.gov/", description: "Follow real hurricanes during the season — plot their paths, measure wind speeds, and compare forecasts to actual tracks." },
    ],
    [
      { name: "National Geographic Kids: Everything Weather by Kathy Furgang", url: "", type: "book" },
      { name: "Mystery Science: Stormy Skies Unit", url: "https://mysteryscience.com/", type: "video" },
    ],
  ),

  s(nx(), "p51", "g5",
    "Math becomes the language of weather. Learn about averages, ranges, and trends — calculate the average monthly temperature and track how it changes. Study the layers of the atmosphere in detail. Learn how different instruments work: barometers measure pressure, anemometers measure wind, hygrometers measure humidity. Explore how satellites and radar help meteorologists see storms from space and track them in real time. Read about famous weather events — the Galveston Hurricane, the Tri-State Tornado, the Storm of the Century. Weather has shaped human history, and meteorologists are the people who help keep communities safe.",
    ["Math (Averages & Data Trends)", "Atmospheric Science", "Technology (Radar & Satellites)", "Reading (Science Nonfiction)"],
    [
      { name: "NOAA Weather Radar — Real-Time Tracking", url: "https://radar.weather.gov/", description: "Watch real-time weather radar over your area — learn to read reflectivity, identify storm cells, and understand what colors mean." },
      { name: "4-H Weather & Climate Science Projects", url: "https://4-h.org/", description: "Hands-on weather science projects including building instruments, tracking climate data, and presenting findings at county fairs." },
    ],
    [
      { name: "Eyewitness: Weather by Brian Cosgrove", url: "", type: "book" },
      { name: "Khan Academy: Statistics (Mean, Median, Range)", url: "https://www.khanacademy.org/math/statistics-probability", type: "course" },
    ],
  ),

  s(nx(), "p51", "g6",
    "Deepen understanding of atmospheric dynamics. Learn about convection, the Coriolis effect, and how Earth's rotation shapes global wind patterns. Study the jet stream — the river of fast-moving air that steers weather systems across continents. Start learning to read weather maps and decode METAR reports (the coded language pilots and meteorologists use). Explore climate zones: why are there rainforests at the equator and deserts at 30° latitude? Build a model tornado in a bottle. Join a weather club or start one at school. Meteorology is a community of people fascinated by the same thing — find your community early.",
    ["Earth Science (Atmospheric Dynamics)", "Geography (Climate Zones)", "Math (Ratios & Proportions)", "Reading (Technical Weather Data)"],
    [
      { name: "CoCoRaHS — Community Collaborative Rain, Hail & Snow Network", url: "https://www.cocorahs.org/", description: "Join a national network of volunteer weather observers — measure and report precipitation from your backyard, contributing to real science used by NWS." },
      { name: "Skywarn Storm Spotter Training (Intro)", url: "https://www.weather.gov/skywarn/", description: "NOAA's volunteer storm spotter program — learn to identify severe weather features and report them. Some areas offer youth-friendly training." },
    ],
    [
      { name: "The AMS Weather Book by Jack Williams", url: "", type: "book" },
      { name: "TED-Ed: How Do Tornadoes Form?", url: "https://ed.ted.com/", type: "video" },
    ],
  ),

  s(nx(), "p51", "g7",
    "Pre-algebra and algebra become essential — meteorology relies heavily on mathematical models. Learn how computer models predict the weather: the GFS (American) and ECMWF (European) models run on supercomputers, solving equations of fluid dynamics. Study the different types of severe weather: supercell thunderstorms, derechos, microbursts, and lake-effect snow. Watch storm chaser footage and learn about the science behind the spectacle. Understand the difference between weather watches and warnings — and why communicating risk clearly is one of the most important jobs a meteorologist does. Start a weather blog or social media account sharing your daily forecasts.",
    ["Pre-Algebra / Algebra", "Earth Science (Severe Weather)", "Computer Science (Weather Models)", "Communication (Weather Writing)"],
    [
      { name: "National Weather Service — Student Opportunities", url: "https://www.weather.gov/careers/", description: "Explore NWS career paths, volunteer programs, and student shadowing opportunities — see what professional meteorologists do every day." },
      { name: "AMS Weather Band — Student Membership", url: "https://www.ametsoc.org/", description: "Join the American Meteorological Society with a student membership — access to Weatherwise magazine, webinars, and a nationwide community of weather enthusiasts." },
    ],
    [
      { name: "Storm Chaser: A Photographer's Journey by Mike Hollingshead", url: "", type: "book" },
      { name: "NWS: How Weather Models Work (YouTube)", url: "https://www.youtube.com/@NOAA", type: "video" },
    ],
  ),

  s(nx(), "p51", "g8",
    "Algebra deepens. Physics enters — the ideal gas law, thermodynamics, and fluid dynamics are the mathematical backbone of atmospheric science. Learn to interpret Skew-T diagrams (the meteorologist's key tool for analyzing the vertical profile of the atmosphere). Study climate change science: greenhouse gases, global temperature trends, and the difference between natural variability and human-caused warming. Meteorologists are on the front lines of climate research. Build a simple website or dashboard showing local weather data you collect. Participate in a science fair with a meteorology project — test a hypothesis about local weather patterns using real data.",
    ["Algebra I", "Physical Science (Intro Physics)", "Climate Science", "Technology (Web / Data Viz)"],
    [
      { name: "UCAR Center for Science Education — Learning Zone", url: "https://scied.ucar.edu/", description: "Free resources from the University Corporation for Atmospheric Research — interactive simulations, videos, and activities on weather and climate." },
      { name: "Science Fair — Meteorology Project", url: "", description: "Design a weather-related experiment: Does temperature affect air pressure? Can you predict rain from cloud types? Present your findings with real data." },
    ],
    [
      { name: "The Thinking Person's Guide to Climate Change by Robert Henson", url: "", type: "book" },
      { name: "MetEd — COMET Program (Free Meteorology Courses)", url: "https://www.meted.ucar.edu/", type: "course" },
    ],
  ),

  s(nx(), "p51", "g9",
    "Take Algebra II and start trigonometry. Physics becomes critical — kinematics, energy, and wave behavior all apply to atmospheric science. Learn about the electromagnetic spectrum and how weather satellites use visible, infrared, and water vapor imagery. Study the structure of hurricanes: eyewall, rainbands, and the role of warm ocean water as fuel. Read about landmark weather forecasting achievements — how the NWS predicted Hurricane Sandy's unusual left turn days in advance. Start learning to code: Python is the language of modern meteorology, used for data analysis, visualization, and running weather models. Take an online Python course.",
    ["Algebra II", "Physics (Mechanics & Waves)", "Python Programming (Intro)", "Environmental Science"],
    [
      { name: "NOAA Summer Student Programs", url: "https://www.noaa.gov/education/", description: "High school internships and summer programs at NOAA facilities — work alongside real meteorologists and climate scientists." },
      { name: "Weather Camp — University Summer Programs", url: "https://www.ametsoc.org/", description: "Many universities offer summer weather camps for high school students — immersive experiences with forecasting, storm chasing, and atmospheric research." },
    ],
    [
      { name: "Isaac's Storm by Erik Larson", url: "", type: "book" },
      { name: "Python for Everybody (Coursera / Free)", url: "https://www.py4e.com/", type: "course" },
    ],
  ),

  s(nx(), "p51", "g10",
    "Take chemistry — understanding the composition of the atmosphere (nitrogen, oxygen, trace gases) and chemical reactions in the air is essential. Advance Python skills: learn to download and analyze weather data from NOAA APIs, plot temperature and pressure maps, and make simple forecasts. Study climatology: Köppen climate classification, paleoclimate (ice cores, tree rings), and climate modeling. Learn about careers: broadcast meteorologist, NWS forecaster, research scientist, climate analyst, air quality specialist, forensic meteorologist. Meteorology is a surprisingly diverse field — your passion for weather can take many different paths.",
    ["Chemistry", "Algebra II / Pre-Calculus", "Python (Data Analysis)", "Climatology"],
    [
      { name: "NOAA API — Download Real Weather Data", url: "https://www.weather.gov/documentation/services-web-api", description: "Access NWS weather data programmatically — temperature, forecasts, alerts, and radar. Build your first weather app with real data." },
      { name: "AMS Annual WeatherFest (if nearby)", url: "https://www.ametsoc.org/", description: "The American Meteorological Society's public weather festival — hands-on exhibits, storm chaser talks, and career exploration." },
    ],
    [
      { name: "The Weather Machine by Andrew Blum", url: "", type: "book" },
      { name: "MetEd: Introduction to Meteorological Charting", url: "https://www.meted.ucar.edu/", type: "course" },
    ],
  ),

  s(nx(), "p51", "g11",
    "Take AP Physics, AP Environmental Science, and pre-calculus (or AP Calculus AB). Physics is the single most important subject for meteorology — the atmosphere is a fluid governed by physical laws. Calculus lets you understand the equations behind weather models. Build a weather dashboard project with Python: pull live data, plot it on maps, and make a forecast. Study the history of meteorology — from Aristotle's Meteorologica to modern numerical weather prediction. Research undergraduate atmospheric science programs: top schools include Penn State, University of Oklahoma, Texas A&M, Florida State, and University of Washington. Look for programs that meet NWS requirements for meteorologist positions.",
    ["AP Physics 1", "AP Environmental Science", "AP Calculus AB / Pre-Calculus", "Python (Data Visualization)", "English (Scientific Writing)"],
    [
      { name: "AMS Scholarship Programs", url: "https://www.ametsoc.org/index.cfm/ams/education-careers/careers/scholarships/", description: "The American Meteorological Society offers multiple scholarships for aspiring meteorologists — funding for undergraduate study." },
      { name: "NWS Job Shadow or Volunteer", url: "https://www.weather.gov/careers/", description: "Contact your local NWS forecast office — many welcome job shadow requests from serious high school students passionate about weather." },
    ],
    [
      { name: "The Weather of the Pacific Northwest by Cliff Mass", url: "", type: "book" },
      { name: "Khan Academy: AP Physics 1", url: "https://www.khanacademy.org/science/ap-physics-1", type: "course" },
    ],
  ),

  s(nx(), "p51", "g12",
    "Take AP Calculus (AB or BC), AP Physics (1, 2, or C), AP Environmental Science, and AP Statistics. The math and physics trifecta is non-negotiable for atmospheric science programs. Complete a capstone meteorology project: analyze a severe weather event using real NWS data, build a forecasting model, or study local climate trends with historical data. Write it up as a research paper — this is your college application differentiator. Research university atmospheric science departments and faculty doing work that fascinates you (severe storms, climate modeling, satellite meteorology, tropical cyclones). Meteorology is a small, passionate field — demonstrated enthusiasm and a portfolio of weather projects matter as much as grades.",
    ["AP Calculus BC", "AP Physics 2 / C", "AP Statistics", "AP Environmental Science", "Meteorology Capstone Project"],
    [
      { name: "AMS Student Conference", url: "https://www.ametsoc.org/", description: "Attend the AMS Annual Meeting's student conference — network with meteorology students, professors, and professionals from around the country." },
      { name: "Submit Research to a Science Fair / Junior Science Symposium", url: "https://www.societyforscience.org/", description: "Present your meteorology research at regional and national competitions — original atmospheric science projects stand out." },
    ],
    [
      { name: "Severe and Hazardous Weather: An Introduction by Bob Rauber et al.", url: "", type: "book" },
      { name: "UCAR MetEd: Skew-T Mastery", url: "https://www.meted.ucar.edu/", type: "course" },
    ],
  ),

  s(nx(), "p51", "g13",
    "College application year. Apply to top atmospheric science programs: Penn State, University of Oklahoma (National Weather Center), Texas A&M, Florida State, University of Washington, and University at Albany (SUNY). All are excellent — choose based on your specific interest (severe storms → Oklahoma; hurricanes → Florida State/Miami; climate → UW; forecasting → Penn State). Write compelling essays about your weather passion and projects. Ensure the program meets NWS qualifications: 24 semester hours in meteorology/atmospheric science including specific courses in dynamics, thermodynamics, and synoptic meteorology. Take AP exams seriously — strong scores in calculus and physics are essential.",
    ["AP Calculus (Final)", "AP Physics (Final)", "AP Statistics (Final)", "AP Environmental Science (Final)", "College Applications & Portfolio"],
    [
      { name: "National Weather Center — Visit & Tour", url: "https://www.ou.edu/nwc", description: "Tour the National Weather Center in Norman, Oklahoma — home to NWS forecast operations, Storm Prediction Center, and OU's School of Meteorology." },
      { name: "AMS Freshman Undergraduate Scholarship", url: "https://www.ametsoc.org/", description: "Apply for AMS scholarships for incoming freshmen — multiple awards available for students pursuing atmospheric science degrees." },
    ],
    [
      { name: "Atmospheric Science: An Introductory Survey by John Wallace & Peter Hobbs", url: "", type: "book" },
      { name: "NWS: Careers in Meteorology Guide", url: "https://www.weather.gov/careers/", type: "article" },
    ],
  ),

  s(nx(), "p51", "g14",
    "Finalize college plans and prepare for the intensity of an atmospheric science degree. Over the summer, build your Python and data analysis skills — meteorology programs are coding-heavy from day one. Learn to use essential meteorological software: GEMPAK, AWIPS (the NWS forecasting system), and GrADS. Study for the NWS meteorology internship eligibility — federal jobs have specific coursework requirements; know them before you start college so you don't miss anything. Read forecast discussions from NWS offices to learn the language and reasoning of professional meteorologists. Consider reaching out to professors at your chosen school to express interest in undergraduate research. The National Weather Service is the largest employer of meteorologists — start understanding their hiring process now.",
    ["Atmospheric Science (Self-Study)", "Python & Data Analysis", "NWS Career Requirements", "Meteorological Software Intro"],
    [
      { name: "NWS AWIPS Familiarization", url: "https://www.weather.gov/", description: "Learn about AWIPS — the Advanced Weather Interactive Processing System used in every NWS forecast office. Understanding this system is career gold." },
      { name: "Storm Chasing Experience (Guided Tour)", url: "https://www.spc.noaa.gov/", description: "Join a reputable storm chasing tour during tornado season — experiencing severe weather in the field is unforgettable and educational. Safety first: always go with experts." },
    ],
    [
      { name: "The Climate Casino by William Nordhaus", url: "", type: "book" },
      { name: "SPC (Storm Prediction Center) — Daily Convective Outlooks", url: "https://www.spc.noaa.gov/", type: "article" },
    ],
  ),

  s(nx(), "p51", "g15",
    "Bachelor of Science in Atmospheric Science, Meteorology, or related field. Core courses: atmospheric thermodynamics, atmospheric dynamics, synoptic meteorology, mesoscale meteorology, physical meteorology (cloud physics & radiation), climatology, and instrumentation. Take calculus through differential equations, calculus-based physics, chemistry, and statistics. Learn to use numerical weather prediction models: WRF (Weather Research and Forecasting), GFS, and NAM. Complete at least one research project with a professor. Pursue a summer internship at an NWS forecast office, a TV station, or a private weather company (AccuWeather, The Weather Company). Join the AMS student chapter. The meteorology community is tight — relationships you build here shape your entire career.",
    ["Atmospheric Thermodynamics", "Atmospheric Dynamics", "Synoptic & Mesoscale Meteorology", "Calculus & Differential Equations", "Physics (Calculus-Based)"],
    [
      { name: "NOAA Hollings Scholarship", url: "https://www.noaa.gov/office-education/hollings-scholarship", description: "Prestigious NOAA undergraduate scholarship with a paid summer internship — a direct pipeline to NWS and NOAA careers." },
      { name: "NWS Pathways Internship Program", url: "https://www.weather.gov/careers/", description: "Paid internship at an NWS forecast office — hands-on forecasting experience and a potential path to permanent federal employment after graduation." },
    ],
    [
      { name: "Midlatitude Synoptic Meteorology by Gary Lackmann", url: "", type: "book" },
      { name: "COMET: Mesoscale Meteorology (MetEd)", url: "https://www.meted.ucar.edu/", type: "course" },
    ],
  ),

  s(nx(), "p51", "g16",
    "Master of Science in Atmospheric Science or Meteorology — 2 years. Deepen expertise in a specialization: severe weather, tropical meteorology, climate modeling, satellite meteorology, or broadcast meteorology (if pursuing TV). Complete a master's thesis involving original research — analyze a tornado outbreak, model hurricane intensification, or study climate variability. Many NWS meteorologist positions now prefer a master's degree. Alternatively, some graduates enter NWS directly with a BS through the Pathways program and earn their MS while working. The NWS employs over 2,000 meteorologists across 122 forecast offices — it is the single largest employer of meteorologists on Earth. Private sector options (insurance, energy, agriculture, aviation, media) are also growing rapidly as climate data becomes critical to business decisions.",
    ["Advanced Atmospheric Dynamics", "Severe Weather / Tropical Meteorology", "Climate Science & Modeling", "Remote Sensing & Satellite Met", "Research & Thesis"],
    [
      { name: "NWS — Meteorologist (GS-1340) Application", url: "https://www.usajobs.gov/", description: "Apply for NWS meteorologist positions on USAJOBS — these are competitive federal positions with strong job security, benefits, and the mission of protecting life and property." },
      { name: "AMS Annual Meeting — Present Your Research", url: "https://www.ametsoc.org/", description: "Present your master's research at the world's largest gathering of atmospheric scientists — invaluable for networking with NWS, private sector, and academic employers." },
    ],
    [
      { name: "Storm and Cloud Dynamics by Cotton, Bryan & van den Heever", url: "", type: "book" },
      { name: "NWS Warning Decision Training Division (WDTD)", url: "https://training.weather.gov/", type: "course" },
    ],
  ),

  s(nx(), "p51", "g17",
    "Ph.D. in Atmospheric Science or Meteorology for those pursuing research leadership, university professorship, or high-level climate policy. Research areas: improving hurricane intensity forecasts, understanding climate change feedback loops, developing next-generation weather models, or studying extreme event attribution. Career pinnacles: director of the National Hurricane Center, chief scientist at NOAA, lead forecaster at the Storm Prediction Center, or a tenured professor training the next generation of meteorologists. Alternatively, advance within the NWS from forecaster to senior forecaster to science & operations officer to meteorologist-in-charge of a forecast office. Meteorologists don't just predict the weather — they save lives. Every tornado warning, every hurricane forecast, every blizzard alert is the result of a meteorologist's training and dedication to getting it right.",
    ["Ph.D. in Atmospheric Science / Meteorology", "Advanced Research Methods", "Dissertation", "Teaching & Mentoring", "Leadership in Weather Operations"],
    [
      { name: "NOAA Climate & Global Change Postdoctoral Fellowship", url: "https://cpaess.ucar.edu/cgc", description: "Prestigious NOAA-funded postdoctoral fellowship — a launching pad for leadership careers in climate and weather research." },
      { name: "World Meteorological Organization — Young Scientists Program", url: "https://public.wmo.int/", description: "Engage with the global meteorological community through WMO programs — weather is international, and the world's best meteorologists collaborate across borders." },
    ],
    [
      { name: "An Introduction to Dynamic Meteorology by James R. Holton", url: "", type: "book" },
      { name: "Bulletin of the American Meteorological Society (BAMS)", url: "https://journals.ametsoc.org/bams", type: "article" },
    ],
  ),

];
