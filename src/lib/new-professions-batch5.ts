/**
 * Batch 5 — p27 Architect, p28 Veterinarian, p29 Pilot, p30 Chef, p31 Mechanical Engineer
 * 
 * All 17 grade levels per profession. IDs: rs955–rs1039.
 * 
 * Import: import { newProfessionsBatch5 } from './new-professions-batch5';
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

let n = 955;
function nx(): string { return "rs" + (n++); }

export const newProfessionsBatch5: RoadmapStep[] = [

  // ========================================================================
  // p27 — ARCHITECT
  // ========================================================================

  s(nx(), "p27", "g1",
    "Architecture begins with wonder about the spaces we live in! At this age, children are natural builders — stacking blocks, creating forts, and designing imaginary worlds. Encourage block play with varied materials (wooden blocks, LEGO Duplo, cardboard boxes). Talk about different kinds of buildings you see: houses, schools, stores, bridges. Visit interesting buildings and ask 'What makes this building special?' The seeds of architectural thinking — spatial reasoning, creativity, and curiosity about the built environment — are planted in early play.",
    ["Building & Construction Play", "Shapes & Spatial Reasoning", "Drawing & Coloring", "Imaginative Play (Houses & Cities)"],
    [
      { name: "Magna-Tiles / Wooden Blocks", url: "", description: "Open-ended building toys that develop spatial reasoning, balance, and creative construction — the earliest architecture studio." },
      { name: "Children's Museum — Building Exhibits", url: "https://www.childrensmuseums.org/", description: "Many children's museums have construction zones, building exhibits, and mini-architecture studios for hands-on exploration." },
    ],
    [
      { name: "Iggy Peck, Architect by Andrea Beaty", url: "", type: "book" },
      { name: "Building a House by Byron Barton", url: "", type: "book" },
    ],
  ),

  s(nx(), "p27", "g2",
    "Build spatial awareness and design thinking. Practice drawing buildings from observation — your house, your school, the library. Learn to notice architectural details: windows, doors, roofs, columns, and arches. Build increasingly complex structures with blocks and construction toys. Talk about how buildings make you feel — architecture is about creating spaces that shape human experience. Visit a local landmark and talk about why it looks the way it does.",
    ["Drawing & Observation", "Counting & Measuring", "Shapes & Geometry Basics", "Storytelling About Places"],
    [
      { name: "Architecture for Kids — Sketching Walk", url: "", description: "Take a neighborhood walk with a sketchbook — draw houses, buildings, and interesting architectural details you see." },
      { name: "LEGO Architecture Sets", url: "https://www.lego.com/en-us/themes/architecture", description: "Build famous landmarks with LEGO — develop an understanding of iconic structures and construction techniques." },
    ],
    [
      { name: "Roberto: The Insect Architect by Nina Laden", url: "", type: "book" },
      { name: "If I Built a House by Chris Van Dusen", url: "", type: "book" },
    ],
  ),

  s(nx(), "p27", "g3",
    "Build reading and math foundations — architects read complex documents and calculate dimensions precisely. Practice drawing with rulers and measuring objects around the house. Learn about different building materials: wood, brick, stone, glass, and steel. Start a 'building journal' — sketch interesting buildings and write a sentence about each one. Visit a construction site (from a safe distance) and observe how buildings go up step by step.",
    ["Reading & Phonics", "Math (Measurement & Units)", "Art (Sketching Buildings)", "Writing (Building Journal)"],
    [
      { name: "Architectural Foundation — ArchForKids", url: "https://www.archforkids.com/", description: "Hands-on architecture workshops for young children — design, build models, and learn about the built environment." },
      { name: "Start a Building Sketchbook", url: "", description: "Carry a small sketchbook and draw a different building each week — develop observation skills essential for future architects." },
    ],
    [
      { name: "Dreaming Up: A Celebration of Building by Christy Hale", url: "", type: "book" },
      { name: "BrainPOP Jr.: Buildings", url: "https://jr.brainpop.com/", type: "video" },
    ],
  ),

  s(nx(), "p27", "g4",
    "Deepen drawing and measurement skills — architects translate ideas into precise drawings. Practice measuring rooms in your home and drawing simple floor plans (a bird's-eye view of each room). Learn about scale: if 1 inch = 1 foot, how big is your room on paper? Study famous buildings from around the world — the Pyramids, the Eiffel Tower, the Sydney Opera House. What makes them special? Start thinking about how buildings affect the people who use them.",
    ["Reading Comprehension", "Math (Measurement & Scale)", "Art (Floor Plans & Drawing)", "Geography (World Architecture)"],
    [
      { name: "Frank Lloyd Wright Foundation — Youth Education", url: "https://franklloydwright.org/education/", description: "Educational programs exploring Wright's organic architecture principles — virtual tours, activities, and design inspiration for kids." },
      { name: "Draw Your Dream Room (Floor Plan)", url: "", description: "Measure your bedroom and draw it to scale on graph paper — the earliest architectural drafting exercise." },
    ],
    [
      { name: "DK Eyewitness: Building", url: "", type: "book" },
      { name: "BrainPOP: Architecture", url: "https://www.brainpop.com/artsandmusic/artconcepts/architecture/", type: "video" },
    ],
  ),

  s(nx(), "p27", "g5",
    "Math expands with multiplication, division, and fractions — architects use these constantly for scale, proportions, and material calculations. Learn about different architectural styles: Gothic, Modern, Art Deco, and more. Study how buildings are put together — the skeleton (structure), the skin (façade), and the systems (plumbing, electrical, HVAC). Start a 3D modeling project: build a model of your dream house from cardboard, foam board, or LEGO.",
    ["Math (Multiplication, Division & Fractions)", "Art (Architectural Drawing & Model-Making)", "Science (Forces & Structures)", "History (World Architecture)"],
    [
      { name: "Build a Model House (Cardboard / Foam Board)", url: "", description: "Design and construct a scale model of a building — learn about structure, proportion, and three-dimensional thinking." },
      { name: "Architecture Summer Camps (Local Museums/Universities)", url: "", description: "Many architecture schools and museums offer summer design camps for elementary students — model building, drawing, and design challenges." },
    ],
    [
      { name: "The Story of Buildings by Patrick Dillon", url: "", type: "book" },
      { name: "SketchUp for Schools (Free 3D Modeling)", url: "https://edu.sketchup.com/", type: "program" },
    ],
  ),

  s(nx(), "p27", "g6",
    "Expand research and presentation skills — architects research sites, present designs to clients, and communicate ideas clearly. Study the architecture of your own city or town — when were the buildings built? What styles do they represent? Interview an architect or visit a local architecture firm to learn about their work. Start learning about sustainability and green building — how can buildings be designed to use less energy and respect the environment?",
    ["English Language Arts (Research & Presentation)", "Math (Fractions & Geometry)", "Science (Sustainability & Environment)", "Art (Perspective Drawing)"],
    [
      { name: "Architecture: It's Elementary! (AIA)", url: "https://www.aia.org/", description: "American Institute of Architects' educational resources — lesson plans and activities introducing architecture concepts to elementary students." },
      { name: "SketchUp — Design a Simple Building", url: "https://www.sketchup.com/", description: "Free 3D modeling tool — try designing a simple house or school building in 3D. Many tutorials available for beginners." },
    ],
    [
      { name: "13 Buildings Children Should Know by Annette Roeder", url: "", type: "book" },
      { name: "Mystery Science: Forces & Engineering", url: "https://mysteryscience.com/", type: "course" },
    ],
  ),

  s(nx(), "p27", "g7",
    "Math ramps up with pre-algebra — architects calculate structural loads, material quantities, and building costs. Learn about structural engineering basics: how do buildings stand up? What keeps bridges from falling? Study tension and compression with simple experiments. Start learning about architectural drawing conventions: plans, sections, and elevations — architects use these to describe buildings from different angles. Visit a construction site or watch a building being constructed in your area.",
    ["Math (Pre-Algebra & Data)", "Science (Physics of Structures)", "Art (Architectural Drawing Conventions)", "English (Technical Description)"],
    [
      { name: "ACE Mentor Program (Introduction)", url: "https://www.acementor.org/", description: "Free after-school program connecting students with professionals in architecture, construction, and engineering — hands-on projects and mentoring." },
      { name: "Paper Bridge / Tower Challenge", url: "", description: "Build the strongest bridge or tallest tower from paper — learn about structural forces, load distribution, and creative problem-solving." },
    ],
    [
      { name: "Khan Academy: Intro to Architecture", url: "https://www.khanacademy.org/humanities/art-history/architecture", type: "course" },
      { name: "Why Buildings Fall Down by Matthys Levy & Mario Salvadori", url: "", type: "book" },
    ],
  ),

  s(nx(), "p27", "g8",
    "Take pre-algebra and science seriously — architecture blends math, physics, and art. Study how different materials behave: wood bends, steel stretches, concrete compresses. Architects must understand material properties to design safe, durable buildings. Practice technical drawing with precision — learn to use a T-square, triangle, and scale ruler if available. Explore digital design tools: SketchUp, Tinkercad, and Minecraft can all be used to prototype building designs.",
    ["Pre-Algebra", "Physical Science (Material Properties)", "Art (Technical Drawing & Precision)", "Computer Skills (3D Modeling)"],
    [
      { name: "Minecraft — Architecture Builds", url: "https://education.minecraft.net/", description: "Use Minecraft to design and build architectural creations — practice scale, proportion, and spatial reasoning in a digital environment." },
      { name: "Architectural Walking Tour (Self-Guided)", url: "", description: "Research and lead your family on an architectural walking tour of your downtown — identify styles, dates, and architects." },
    ],
    [
      { name: "Crash Course: Engineering", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtO4_zKqT_ARVcK5e-XAPk7o", type: "video" },
      { name: "Architecture: Form, Space, & Order by Francis D.K. Ching", url: "", type: "book" },
    ],
  ),

  s(nx(), "p27", "g9",
    "Take algebra and the most advanced art classes available. Architecture is the intersection of math, art, and problem-solving. Join or start an architecture or design club. Start learning about the architecture profession: the path includes a professional degree (B.Arch or M.Arch), internship (AXP — Architectural Experience Program), and licensing exam (ARE). Research famous architects and their work — Frank Lloyd Wright, Zaha Hadid, I.M. Pei — and the buildings that made them famous.",
    ["Algebra I", "Art & Design (Advanced)", "English (Research & Writing)", "History (Architectural History)"],
    [
      { name: "Architecture Summer Programs for Teens", url: "https://www.archcareersguide.com/", description: "Many universities offer summer architecture studios for high school students — immersive design experiences that preview architecture school." },
      { name: "Tinkercad / Fusion 360 (Free 3D Tools)", url: "https://www.tinkercad.com/", description: "Learn 3D modeling and design — create buildings, furniture, and structures in a free, browser-based tool." },
    ],
    [
      { name: "TED-Ed: Why Do Buildings Collapse?", url: "https://ed.ted.com/", type: "video" },
      { name: "101 Things I Learned in Architecture School by Matthew Frederick", url: "", type: "book" },
    ],
  ),

  s(nx(), "p27", "g10",
    "Take geometry and physics — both are fundamental to architecture. Geometry for spatial reasoning and proportions; physics for understanding forces, materials, and building performance. Take art or drafting electives if available. Start building a portfolio: sketches, models, digital designs, and photographs of buildings. Research architecture degree programs: the B.Arch is a 5-year professional degree; alternatively, a BA/BS + M.Arch (the 4+2 path). Both lead to licensure.",
    ["Geometry", "Physics (Honors if available)", "Art / Design Elective", "English (Descriptive Writing)", "Computer-Aided Design"],
    [
      { name: "ACE Mentor Program — Full Participation", url: "https://www.acementor.org/", description: "Join the ACE Mentor Program for in-depth architecture, construction, and engineering projects with professional mentors." },
      { name: "Architecture Firm Job Shadow", url: "", description: "Shadow an architect at a local firm for a day — see what architects actually do: design meetings, site visits, drawing, and client presentations." },
    ],
    [
      { name: "Coursera: Making Architecture (IE Business School)", url: "https://www.coursera.org/learn/making-architecture", type: "course" },
      { name: "ArchDaily (Architecture News & Projects)", url: "https://www.archdaily.com/", type: "article" },
    ],
  ),

  s(nx(), "p27", "g11",
    "Take Honors Geometry and physics — quantitative skills are essential for architecture. Continue building a portfolio of creative work: drawings, models, paintings, and digital designs. Architecture schools value a strong creative portfolio. Learn about sustainable design and green building certifications (LEED) — the future of architecture is sustainable. Research architecture schools: top programs include Cornell, Rice, RISD, Cooper Union, Cal Poly SLO, and Virginia Tech.",
    ["Honors Geometry / Algebra II", "AP Physics (if available)", "Art / Design (Portfolio Development)", "Environmental Science", "English (Architectural Writing)"],
    [
      { name: "National Organization of Minority Architects (NOMA) — Student Programs", url: "https://www.noma.net/", description: "NOMA's Project Pipeline introduces students of color to architecture through summer camps and mentoring — fostering diversity in design." },
      { name: "Design a Community Project", url: "", description: "Identify a design problem in your community — a dangerous intersection, an empty lot, a park that needs improving — and create a proposal with drawings and a model." },
    ],
    [
      { name: "Building Construction Illustrated by Francis D.K. Ching", url: "", type: "book" },
      { name: "Khan Academy: AP Physics 1", url: "https://www.khanacademy.org/science/physics", type: "course" },
    ],
  ),

  s(nx(), "p27", "g12",
    "Take AP Physics and advanced art/design courses. Continue developing your portfolio — architecture school applications are portfolio-driven. Start learning professional software: Revit (BIM — Building Information Modeling) and Rhino (3D modeling) are industry standards. Visit architecture schools and attend portfolio review events. Research the Architecture Experience Program (AXP) — the 3,740 hours of experience required before you can take the ARE licensing exam.",
    ["AP Physics 1 or C", "Pre-Calculus / AP Calculus AB", "Art / Design (Advanced Portfolio)", "AP Environmental Science", "Computer-Aided Design (Revit/Rhino)"],
    [
      { name: "National Portfolio Day", url: "https://nationalportfolioday.org/", description: "Free event where high school students get feedback on their creative portfolios from accredited art and design schools — essential for architecture applicants." },
      { name: "Revit / AutoCAD Student License (Free)", url: "https://www.autodesk.com/education/edu-software/overview", description: "Download free professional architecture software as a student — learn the tools architects use every day." },
    ],
    [
      { name: "Autodesk Revit — Student Tutorials", url: "https://www.autodesk.com/education/learn", type: "program" },
      { name: "The Architecture of Happiness by Alain de Botton", url: "", type: "book" },
    ],
  ),

  s(nx(), "p27", "g13",
    "The most critical year for college preparation. Complete AP Physics, AP Calculus, and AP Art/Design. Finalize your architecture portfolio — 15-20 pieces showing creative range, technical skill, and design thinking. Research B.Arch vs. BA/BS + M.Arch paths. The B.Arch is a 5-year NAAB-accredited program (faster to licensure). The 4+2 path offers more flexibility. Visit your top-choice architecture schools. Prepare for portfolio reviews and architecture-specific application requirements.",
    ["AP Physics", "AP Calculus AB/BC", "AP Studio Art / Design", "English (Application Essays)", "Digital Design (Revit/Rhino/SketchUp)"],
    [
      { name: "Architecture School Summer Studio Programs", url: "", description: "Apply to summer architecture immersion programs at universities like Cornell, Syracuse, SCI-Arc, or Tulane — experience architecture school before applying." },
      { name: "AIAS — American Institute of Architecture Students (Pre-College)", url: "https://www.aias.org/", description: "Explore AIAS resources for aspiring architects — learn about architecture education, licensure, and the student experience." },
    ],
    [
      { name: "NAAB — Find Accredited Programs", url: "https://www.naab.org/accreditation/find-programs/", type: "article" },
      { name: "The Eyes of the Skin by Juhani Pallasmaa", url: "", type: "book" },
    ],
  ),

  s(nx(), "p27", "g14",
    "Apply to NAAB-accredited architecture programs. Most B.Arch programs require a portfolio, strong academics, and essays demonstrating passion for design. Complete AP exams — high scores earn college credit. Some schools offer combined programs (B.Arch + M.Arch in 5-6 years). Write compelling essays about how architecture shapes human experience and why you want to create the spaces of the future. Consider programs that emphasize sustainable design, urban planning, or historic preservation if those interest you.",
    ["AP Physics (Exam)", "AP Calculus (Exam)", "AP Studio Art (Exam)", "Portfolio Development (Final)", "English (College Essays)"],
    [
      { name: "Apply to NAAB-Accredited B.Arch Programs", url: "", description: "Top B.Arch programs: Cornell, Rice, RISD, Cooper Union, Cal Poly SLO, Virginia Tech, Syracuse, UT Austin, USC, Pratt." },
      { name: "NCARB — Architecture Licensing Requirements", url: "https://www.ncarb.org/", description: "Learn about the path to licensure: education, AXP experience, and the ARE exam — understand the full journey now." },
    ],
    [
      { name: "NCARB — AXP Guidelines", url: "https://www.ncarb.org/gain-axp-experience/", type: "article" },
      { name: "Architecture Competitions for Students", url: "https://www.archdaily.com/", type: "article" },
    ],
  ),

  s(nx(), "p27", "g15",
    "Pursue a NAAB-accredited B.Arch (5-year) or BA/BS in Architecture (4-year + M.Arch). Core coursework: architectural design studio, structures, environmental systems, history/theory of architecture, digital representation (Revit, Rhino, Grasshopper), and professional practice. The design studio is the heart of architecture education — you'll spend long hours designing, building models, and presenting your work to faculty critics. Pursue summer internships at architecture firms to begin earning AXP hours.",
    ["Architectural Design Studio", "Structures & Building Systems", "Environmental Systems & Sustainability", "Digital Representation & BIM", "Architectural History & Theory"],
    [
      { name: "AIAS — American Institute of Architecture Students", url: "https://www.aias.org/", description: "Join your university's AIAS chapter — competitions, conferences, mentoring, and a community of fellow architecture students." },
      { name: "Architecture Firm Internship (Summer)", url: "", description: "Intern at an architecture firm every summer — gain real project experience, earn AXP hours toward licensure, and build your professional network." },
    ],
    [
      { name: "Architectural Graphic Standards (Student Edition)", url: "", type: "book" },
      { name: "NCARB — AXP Experience Reporting", url: "https://www.ncarb.org/gain-axp-experience/", type: "program" },
    ],
  ),

  s(nx(), "p27", "g16",
    "M.Arch (Master of Architecture) for those with a non-professional BA/BS — typically 2-3 years. Complete the Architectural Experience Program (AXP) — 3,740 hours across six practice areas. Prepare for the Architect Registration Examination (ARE) — six divisions covering practice management, project management, programming & analysis, project planning & design, project development & documentation, and construction & evaluation. Passing the ARE + completing AXP = architecture license. Many architects also pursue specialization through post-professional Master's degrees in urban design, sustainable design, or real estate development.",
    ["Advanced Architectural Design Studio", "Professional Practice & Ethics", "Building Performance & Sustainability", "Urban Design / Elective Specialization", "ARE Preparation"],
    [
      { name: "ARE 5.0 Exam Prep — NCARB", url: "https://www.ncarb.org/pass-the-are/", description: "Official study resources for the Architect Registration Examination — the six-division exam required for licensure." },
      { name: "AIA — Associate Membership", url: "https://www.aia.org/", description: "Join the American Institute of Architects as an associate member while completing licensure — networking, resources, and advocacy." },
    ],
    [
      { name: "ARE 5 Review Manual by David Kent Ballast", url: "", type: "book" },
      { name: "AIA Contract Documents (Interns)", url: "https://www.aiacontracts.org/", type: "article" },
    ],
  ),

  s(nx(), "p27", "g17",
    "Licensed Architect: After passing the ARE, you can stamp drawings and practice independently. Career paths: 1) Design Architect — shape buildings conceptually. 2) Project Architect — manage projects from design through construction. 3) Firm Principal/Partner — lead a firm. 4) Specialist — healthcare, sustainability, historic preservation, or computational design. 5) In-house architect for corporations, universities, or government. A Ph.D. in Architecture is for academic/research careers — architectural history, theory, building science, or computational design. Some architects pursue joint degrees (M.Arch + MBA or M.Arch + M.Urban Planning) for expanded career options in development, policy, or construction management.",
    ["Architecture Licensure (ARE Complete)", "Specialization: Healthcare / Sustainable / etc.", "Firm Leadership & Business", "Advanced Building Science / Research", "Teaching & Mentoring"],
    [
      { name: "AIA Fellowship & Awards", url: "https://www.aia.org/", description: "Fellowship in the American Institute of Architects (FAIA) recognizes architects who have made significant contributions to the profession and society." },
      { name: "NCARB Certificate", url: "https://www.ncarb.org/", description: "NCARB Certificate facilitates reciprocal licensure across states and demonstrates commitment to the highest professional standards." },
    ],
    [
      { name: "Journal of Architectural Education", url: "https://www.jaeonline.org/", type: "article" },
      { name: "Architectural Record (Magazine)", url: "https://www.architecturalrecord.com/", type: "article" },
    ],
  ),

  // ========================================================================
  // p28 — VETERINARIAN
  // ========================================================================

  s(nx(), "p28", "g1",
    "Veterinary medicine starts with a love for animals! At this age, children are naturally drawn to animals — soft, furry, and fascinating. Encourage gentle interactions with family pets, visits to farms and zoos, and animal-themed stories. Teach empathy for living creatures: how to be gentle, how to read an animal's body language, and why we care for animals when they're sick. Every veterinarian started as a child who loved animals and wanted to help them.",
    ["Animal Awareness & Empathy", "Counting & Sorting (Animals)", "Colors & Shapes (Animal Features)", "Storytelling (Animal Stories)"],
    [
      { name: "Visit a Petting Zoo / Farm", url: "", description: "Hands-on experiences with animals — learn about different species, their needs, and how to interact safely and kindly." },
      { name: "National Geographic Kids — Animals", url: "https://kids.nationalgeographic.com/animals/", description: "Free online animal facts, photos, and videos for young animal lovers starting their journey." },
    ],
    [
      { name: "The Berenstain Bears: Go to the Vet", url: "", type: "book" },
      { name: "Dear Zoo by Rod Campbell", url: "", type: "book" },
    ],
  ),

  s(nx(), "p28", "g2",
    "Build responsibility and empathy through pet care. If you have a family pet, involve your child in age-appropriate care: feeding (with supervision), filling water bowls, brushing (gently), and helping with walks. Learn about different kinds of animals: mammals, birds, reptiles, fish, and amphibians. Visit a veterinarian's office — many vets are happy to give young animal lovers a brief tour. Learn why animals need check-ups, just like people.",
    ["Animal Classification (Types of Animals)", "Counting & Measuring (Pet Care)", "Responsibility & Empathy", "Science (Basic Animal Needs)"],
    [
      { name: "American Veterinary Medical Association (AVMA) — Kids' Resources", url: "https://www.avma.org/", description: "Explore animal health careers, pet care tips, and fun facts from the nation's leading veterinary organization." },
      { name: "Local Zoo / Aquarium Junior Programs", url: "https://www.aza.org/", description: "Many AZA-accredited zoos offer children's programs with animal encounters, behind-the-scenes tours, and conservation education." },
    ],
    [
      { name: "Sally Goes to the Vet by Stephen Huneck", url: "", type: "book" },
      { name: "Wild Kratts (PBS Kids)", url: "https://pbskids.org/wildkratts/", type: "video" },
    ],
  ),

  s(nx(), "p28", "g3",
    "Build reading and math foundations — veterinarians read medical records, calculate medication dosages, and keep detailed patient notes. Practice gentle animal handling with family pets. Start learning about animal body parts and how they're similar to or different from humans. Keep an 'animal observation journal' — draw and write about animals you see in your backyard, at the park, or at the zoo. Learn about different animal careers: veterinarian, zookeeper, marine biologist, and animal trainer.",
    ["Reading & Phonics", "Math (Addition & Subtraction)", "Science (Animal Biology Basics)", "Writing (Animal Observation Journal)"],
    [
      { name: "ASPCA Kids — Animal Care Resources", url: "https://www.aspca.org/", description: "Learn about responsible pet ownership, animal welfare, and how to help animals in your community." },
      { name: "Start an Animal Observation Journal", url: "", description: "Keep a notebook where you draw animals you see, write where you saw them, and describe their behavior — the beginnings of scientific observation." },
    ],
    [
      { name: "The True Story of the Three Little Pigs by Jon Scieszka", url: "", type: "book" },
      { name: "BrainPOP Jr.: Classifying Animals", url: "https://jr.brainpop.com/science/animals/classifyinganimals/", type: "video" },
    ],
  ),

  s(nx(), "p28", "g4",
    "Deepen reading comprehension with nonfiction animal books. Learn about animal habitats: where different animals live and how their environments shape their bodies and behaviors. Practice measurement and basic math — veterinarians weigh animals, measure medication, and calculate dosages. Learn basic animal first aid: cleaning a minor wound (with parent help), recognizing when a pet seems sick, and knowing when to call the vet. Continue your animal observation journal with more detailed notes.",
    ["Reading Comprehension", "Math (Measurement & Data)", "Life Science (Animal Habitats & Adaptations)", "Art (Drawing Animals)"],
    [
      { name: "4-H Animal Science Programs (Junior)", url: "https://4-h.org/programs/animal-science/", description: "Hands-on programs with companion animals, livestock, and veterinary science projects — learn animal care basics." },
      { name: "Pet Care Responsibility Chart", url: "", description: "Create a chart tracking daily pet care tasks — feeding, water, walks, grooming — to build responsibility and animal awareness." },
    ],
    [
      { name: "DK Eyewitness: Animal", url: "", type: "book" },
      { name: "BrainPOP: Food Chains", url: "https://www.brainpop.com/science/ecology/foodchains/", type: "video" },
    ],
  ),

  s(nx(), "p28", "g5",
    "Science deepens with life science — focus on animal biology, habitats, and ecosystems. Math skills (multiplication, division) are used for calculating medication doses and anesthetic protocols. Learn about animal classification in more detail: vertebrates vs. invertebrates, warm-blooded vs. cold-blooded. Start learning about animal nutrition — why different animals need different foods. Consider joining a 4-H club to get hands-on experience with animals.",
    ["Life Science (Animal Biology)", "Math (Multiplication & Division)", "Health & Nutrition (Animal Focus)", "Writing (Research Notes)"],
    [
      { name: "4-H Veterinary Science Project", url: "https://4-h.org/programs/animal-science/", description: "Explore veterinary medicine through 4-H projects — learn about animal anatomy, health, and careers in animal care." },
      { name: "Volunteer at Animal Shelter (with Parent)", url: "https://www.humanesociety.org/", description: "Many shelters allow families to volunteer together — socialize cats, walk dogs, and learn about animal welfare." },
    ],
    [
      { name: "National Geographic Kids: Animal Encyclopedia", url: "https://kids.nationalgeographic.com/animals/", type: "book" },
      { name: "Crash Course Kids: Life Science — Animals", url: "https://www.youtube.com/playlist?list=PLhz12vamHOnYmvLSY1d6fHkhYrk0Yykck", type: "video" },
    ],
  ),

  s(nx(), "p28", "g6",
    "Expand research skills — research an animal species in depth: its anatomy, physiology, common diseases, and veterinary care. Strengthen math with fractions — vets use fractions constantly for drug calculations. Learn about basic animal anatomy: skeletal system, muscular system, and digestive system. Consider fostering a pet (with family support) to get more hands-on animal care experience. Start learning about zoonotic diseases — illnesses that can pass between animals and humans.",
    ["English Language Arts (Research Writing)", "Math (Fractions & Word Problems)", "Life Science (Animal Anatomy)", "Health (Zoonotic Disease Basics)"],
    [
      { name: "SciStarter — Animal Citizen Science Projects", url: "https://scistarter.org/", description: "Participate in real animal research — track birds, count butterflies, or monitor mammal populations through citizen science." },
      { name: "Humane Society Youth Volunteer Programs", url: "https://www.humanesociety.org/", description: "Structured youth volunteer programs at humane societies and animal shelters — gain animal handling experience." },
    ],
    [
      { name: "The Tarantula in My Purse by Jean Craighead George", url: "", type: "book" },
      { name: "Mystery Science: Animal Adaptations", url: "https://mysteryscience.com/", type: "course" },
    ],
  ),

  s(nx(), "p28", "g7",
    "Math ramps up with pre-algebra — veterinarians use math for drug calculations, fluid therapy rates, and nutritional formulations. Deepen understanding of animal anatomy and physiology — how body systems work in different species. Learn about common pet health issues: parasites, dental disease, obesity, and vaccinations. Volunteer at an animal shelter or rescue organization. Consider participating in a science fair with an animal-related project (following ethical guidelines for animal research).",
    ["Math (Pre-Algebra & Data)", "Life Science (Comparative Anatomy)", "English (Science Communication)", "Civics (Animal Welfare)"],
    [
      { name: "eMammal — Citizen Science Camera Trapping", url: "https://emammal.si.edu/", description: "Smithsonian project using camera traps to study mammal populations — contribute to real wildlife research." },
      { name: "Animal Shelter Regular Volunteer (with Training)", url: "https://www.humanesociety.org/", description: "Become a regular volunteer at a local shelter — dog walking, cat socialization, and kennel assistance under supervision." },
    ],
    [
      { name: "Khan Academy: Biology", url: "https://www.khanacademy.org/science/biology", type: "course" },
      { name: "All Creatures Great and Small by James Herriot", url: "", type: "book" },
    ],
  ),

  s(nx(), "p28", "g8",
    "Take the most advanced science available — biology is the foundation of veterinary medicine. Learn about animal diseases and how the immune system works. Shadow a veterinarian if possible — many vets welcome interested middle school students for a few hours of observation. Learn about the path to veterinary medicine: pre-vet undergraduate degree + Doctor of Veterinary Medicine (DVM) + NAVLE licensing exam + state license. It's an 8+ year journey — but one that starts with strong science grades now.",
    ["Pre-Algebra", "Life Science (Disease & Immunity)", "English (Technical Reading)", "Computer Skills (Research & Data)"],
    [
      { name: "Veterinary Clinic Shadowing (Introductory)", url: "", description: "Ask your family veterinarian or a local clinic if you can observe for a few hours — most vets love to mentor young animal lovers." },
      { name: "Science Olympiad — Anatomy & Physiology Event", url: "https://www.soinc.org/", description: "Competitive event covering human and animal body systems — excellent preparation for veterinary science." },
    ],
    [
      { name: "Crash Course: Anatomy & Physiology", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtOAKed_MxxWBNaPno5h3Zs8", type: "video" },
      { name: "AVMA — Becoming a Veterinarian", url: "https://www.avma.org/resources/pet-owners/yourvet/veterinarians-becoming-veterinarian", type: "article" },
    ],
  ),

  s(nx(), "p28", "g9",
    "Take algebra and the most advanced biology available. If your school offers a health science pathway, enroll — the human/animal medicine parallels are strong. Start regular volunteering at an animal shelter or rescue. Learn about the different types of veterinary medicine: small animal (dogs/cats), large animal (horses/cows), exotic (birds/reptiles), wildlife, zoo medicine, research, and public health. Veterinary medicine is incredibly diverse — start exploring which path excites you most.",
    ["Algebra I", "Life Science / Biology", "Health Science Elective (if available)", "English (Research & Writing)"],
    [
      { name: "FFA — Veterinary Science CDE", url: "https://www.ffa.org/participate/cdes/", description: "Future Farmers of America Career Development Event in veterinary science — compete in animal handling, clinical procedures, and vet knowledge." },
      { name: "Animal Shelter / Rescue Organization Volunteer", url: "", description: "Commit to regular volunteer hours — gain animal handling experience and see the realities of animal welfare and medicine." },
    ],
    [
      { name: "TED-Ed: How Do Vaccines Work?", url: "https://ed.ted.com/", type: "video" },
      { name: "Merck Veterinary Manual (Free Online)", url: "https://www.merckvetmanual.com/", type: "book" },
    ],
  ),

  s(nx(), "p28", "g10",
    "Take the most advanced science available — Honors Biology and Chemistry. Veterinary medicine is built on biology, chemistry, and anatomy. Continue animal shelter volunteering with increasing responsibility. Research pre-veterinary undergraduate programs — any major is acceptable as long as you complete the prerequisite courses (biology, chemistry, organic chemistry, biochemistry, physics, math). Most pre-vet students major in animal science, biology, or zoology.",
    ["Honors Biology", "Algebra / Geometry", "Chemistry (Intro / Honors)", "English (Scientific Communication)", "Animal Science Elective"],
    [
      { name: "Veterinary Science Summer Camps", url: "", description: "Many universities (Purdue, Cornell, UC Davis, Texas A&M) offer summer vet camps for high school students — hands-on animal care, clinical skills, and lab activities." },
      { name: "PADI / First Aid Certification (for Wildlife Vet Interest)", url: "https://www.redcross.org/take-a-class/first-aid", description: "Get certified in first aid and CPR — animal-related first aid builds transferable skills for aspiring veterinarians." },
    ],
    [
      { name: "Coursera: Animal Behavior & Welfare (University of Edinburgh)", url: "https://www.coursera.org/learn/animal-behaviour", type: "course" },
      { name: "All My Patients Have Tales by Jeff Wells, DVM", url: "", type: "book" },
    ],
  ),

  s(nx(), "p28", "g11",
    "Take Honors Biology and Chemistry. Start building a strong STEM GPA — veterinary school is more competitive than medical school with fewer seats available. Continue regular animal-related volunteering and veterinary shadowing — aim for 100+ hours by the time you apply. Research pre-vet programs and combined BS/DVM programs. Learn about the Veterinary Medical College Application Service (VMCAS). Start tracking your animal experience hours (veterinary and non-veterinary) — vet schools require extensive documented experience.",
    ["Honors Biology", "Algebra II / Geometry", "Honors Chemistry / AP Chemistry", "English (Scientific Writing)", "Statistics"],
    [
      { name: "Veterinary Hospital Shadowing (Regular)", url: "", description: "Shadow veterinarians regularly — general practice and specialties if possible. Document all hours; vet schools require 200-500+ hours." },
      { name: "Heifer International / Farm Sanctuary Volunteer", url: "https://www.heifer.org/", description: "Gain experience with large animals and livestock — many vet schools want applicants who have worked with multiple species." },
    ],
    [
      { name: "Khan Academy: AP Biology", url: "https://www.khanacademy.org/science/ap-biology", type: "course" },
      { name: "Tell Me Where It Hurts by Nick Trout, DVM", url: "", type: "book" },
    ],
  ),

  s(nx(), "p28", "g12",
    "Take AP Biology and AP Chemistry. Build a record of diverse animal experience: small animal, large animal, exotic, and wildlife if possible. Research universities with strong pre-vet programs. Some offer combined BS/DVM programs (7-8 years total) — highly competitive but excellent for focused students. The standard path: 4-year undergraduate + 4-year DVM program. Start learning about the GRE (Graduate Record Exam) — many vet schools require it. Maintain and document all animal and veterinary hours.",
    ["AP Biology", "Chemistry (AP or Honors)", "Pre-Calculus", "English (Technical Writing)", "Animal Science / Elective"],
    [
      { name: "Purdue University — Boiler Vet Camp", url: "https://vet.purdue.edu/engagement/vet-camp.php", description: "Residential summer camp exploring veterinary medicine through hands-on labs, clinical skills, and animal interaction." },
      { name: "Volunteer at Wildlife Rehabilitation Center", url: "", description: "Gain experience with wild animals — wildlife rehab centers train volunteers to assist with animal care and rehabilitation." },
    ],
    [
      { name: "QGIS (Free GIS Software — for wildlife tracking)", url: "https://www.qgis.org/", type: "program" },
      { name: "Zoobiquity by Barbara Natterson-Horowitz, MD", url: "", type: "book" },
    ],
  ),

  s(nx(), "p28", "g13",
    "The most critical year for college preparation. Take AP Biology and AP Chemistry — strong scores demonstrate science readiness. Continue accumulating diverse animal and veterinary experience (aim for 300+ hours combined). Research pre-vet programs and vet school prerequisites carefully. The average GPA for accepted vet school applicants is 3.6+. Consider taking the SAT Subject Tests or AP exams that demonstrate your science aptitude. Begin drafting your personal statement about why you want to become a veterinarian.",
    ["AP Biology", "AP Chemistry", "AP Calculus AB", "English (Personal Statement)", "Animal Science / Elective"],
    [
      { name: "Cornell University — Veterinary Exploration Summer Program", url: "https://www.vet.cornell.edu/", description: "Summer program introducing high school students to veterinary medicine through lectures, labs, and clinical observations at a top vet school." },
      { name: "Veterinary Technician Assistant (Part-Time)", url: "", description: "Some clinics hire high school students as kennel assistants or vet tech assistants — paid animal experience that strengthens applications." },
    ],
    [
      { name: "VMCAS — Application Guide (Preview)", url: "https://www.aavmc.org/students-applicants-and-advisors/vmcas/", type: "article" },
      { name: "The Soul of a Horse by Joe Camp", url: "", type: "book" },
    ],
  ),

  s(nx(), "p28", "g14",
    "Apply to universities with strong pre-vet programs or direct BS/DVM programs. Complete AP exams — high scores earn college credit. Top pre-vet programs: UC Davis, Cornell, Colorado State, North Carolina State, Texas A&M, Ohio State, University of Florida, and Michigan State. Some universities offer Animal Science or Zoology majors with dedicated pre-vet advising. Continue animal/veterinary experience through your senior year. Vet schools value commitment and consistency in animal experience.",
    ["AP Biology (Exam)", "AP Chemistry (Exam)", "AP Calculus AB/BC (Exam)", "Animal Science / Pre-Vet Coursework", "English (College Essays)"],
    [
      { name: "Apply to Pre-Vet / BS-DVM Programs", url: "", description: "Top pre-vet: UC Davis, Cornell, Colorado State, NC State, Texas A&M, Ohio State, Florida, Michigan State. Combined BS/DVM: Texas A&M's Partnership Program and others." },
      { name: "Secure a Veterinary Internship or Job", url: "", description: "Work or intern at a veterinary clinic during breaks and after school — paid experience is ideal, but volunteer hours count too." },
    ],
    [
      { name: "AAVMC — Vet School Admissions Requirements", url: "https://www.aavmc.org/", type: "article" },
      { name: "GRE Prep — ETS Official Materials", url: "https://www.ets.org/gre/", type: "program" },
    ],
  ),

  s(nx(), "p28", "g15",
    "Major in Animal Science, Biology, Zoology, or a related field on a pre-veterinary track. Complete all vet school prerequisites: biology, general chemistry, organic chemistry, biochemistry, physics, mathematics, and English. Maintain 3.5+ GPA. Accumulate 500+ hours of veterinary clinical experience (small animal, large animal, and specialty). Prepare for and take the GRE. Apply through VMCAS — a centralized application for most US vet schools. Many applicants apply to 5-8 schools. Interview preparation is essential.",
    ["Animal Science / Biology Major", "Organic Chemistry", "Biochemistry", "Microbiology & Immunology", "Genetics"],
    [
      { name: "Pre-Veterinary Club / APVMA", url: "https://www.avma.org/", description: "Join or start a pre-vet club — peer support, vet school prep, guest speakers, and animal experience opportunities." },
      { name: "Veterinary Clinic Employment / Research", url: "", description: "Work as a veterinary assistant, participate in animal research, or intern at zoos/wildlife centers — diverse experience strengthens applications." },
    ],
    [
      { name: "VMCAS Application Service", url: "https://www.aavmc.org/students-applicants-and-advisors/vmcas/", type: "program" },
      { name: "Saunders Comprehensive Review for the NAVLE", url: "", type: "book" },
    ],
  ),

  s(nx(), "p28", "g16",
    "Doctor of Veterinary Medicine (DVM) — 4-year professional program. Years 1-2: classroom and lab-based instruction in anatomy, physiology, pharmacology, pathology, and clinical skills. Year 3: clinical rotations in small animal medicine, large animal medicine, surgery, emergency, and specialty services. Year 4: advanced clinical rotations and externships — often at teaching hospitals or private practices. Pass the North American Veterinary Licensing Examination (NAVLE) for licensure. Many graduates then complete a 1-year internship for advanced training, especially if pursuing a residency in a specialty (surgery, internal medicine, oncology, etc.).",
    ["Veterinary Anatomy & Physiology", "Pharmacology & Toxicology", "Clinical Pathology", "Surgery & Anesthesia", "Clinical Rotations (All Species)"],
    [
      { name: "Student AVMA (SAVMA)", url: "https://www.avma.org/", description: "National organization for veterinary students — symposia, competitions, advocacy, and networking across all vet schools." },
      { name: "Veterinary Internships & Externships", url: "", description: "Seek externships at specialty hospitals, zoos, aquariums, or research labs during summers and clinical year — explore career paths." },
    ],
    [
      { name: "NAVLE — North American Veterinary Licensing Exam", url: "https://www.icva.net/navle/", type: "program" },
      { name: "Veterinary Partner — Client Education Resources", url: "https://veterinarypartner.vin.com/", type: "article" },
    ],
  ),

  s(nx(), "p28", "g17",
    "After DVM licensure: 1) General practice — the most common path, caring for companion animals in private clinics. 2) Specialty residency (3-4 years) — become board-certified in surgery, internal medicine, emergency/critical care, oncology, cardiology, dermatology, or dozens of other specialties. 3) Large animal / equine practice. 4) Public health and epidemiology — work for USDA, FDA, or CDC on zoonotic disease control and food safety. 5) Research — Ph.D./DVM dual degree for careers in biomedical research, pharmaceutical development, or academic medicine. 6) Wildlife and conservation medicine — work with zoos, aquariums, or conservation organizations. Veterinary medicine offers extraordinary diversity — from caring for a family's beloved dog to protecting global public health through disease surveillance.",
    ["Veterinary Specialty Residency", "Advanced Clinical Practice", "Public Health & Epidemiology", "Research: DVM/Ph.D. Track", "Practice Management & Leadership"],
    [
      { name: "AVMA — Board Certification Specialties", url: "https://www.avma.org/", description: "Explore 22+ recognized veterinary specialties — from anesthesiology to zoological medicine — and the residency pathways to board certification." },
      { name: "American Association of Veterinary Clinicians (AAVC)", url: "https://www.aavc.org/", description: "Organization representing veterinary specialty colleges — residency programs, research opportunities, and continuing education." },
    ],
    [
      { name: "Journal of the American Veterinary Medical Association (JAVMA)", url: "https://www.avma.org/javma", type: "article" },
      { name: "Veterinary Clinics of North America (Series)", url: "", type: "book" },
    ],
  ),

  // ========================================================================
  // p29 — PILOT
  // ========================================================================

  s(nx(), "p29", "g1",
    "Aviation begins with wonder about the sky! At this age, children look up in amazement at airplanes, birds, and clouds. Encourage paper airplane making and flying — the simplest introduction to aerodynamics. Watch planes take off and land (airport observation areas are magical for young aviation enthusiasts). Read books about flying, and talk about how amazing it is that humans figured out how to soar through the sky. Every pilot remembers the first time they looked up and thought, 'I want to fly.'",
    ["Imaginative Play (Flying & Airplanes)", "Counting & Shapes (Planes & Clouds)", "Gross Motor Skills (Running with Arms Out)", "Storytelling (Flying Stories)"],
    [
      { name: "Paper Airplane Making & Flying", url: "", description: "Design, fold, and fly paper airplanes — experiment with different designs to see which fly farthest, straightest, or do the best tricks." },
      { name: "Airport Observation Area Visit", url: "", description: "Most airports have observation lots or parks — watch planes take off and land, identify different types of aircraft, and listen to the roar of jet engines." },
    ],
    [
      { name: "Amazing Airplanes by Tony Mitton & Ant Parker", url: "", type: "book" },
      { name: "Planes (Disney — movie)", url: "", type: "video" },
    ],
  ),

  s(nx(), "p29", "g2",
    "Build curiosity and spatial awareness — pilots must understand three-dimensional space intuitively. Practice with puzzles, mazes, and building toys that develop spatial reasoning. Learn the parts of an airplane: wings, fuselage, tail, cockpit, and engines. Talk about how airplanes fly — the simple explanation of lift (air moving faster over the curved wing creates lower pressure above and lift below). Make and fly different paper airplane designs. Visit an aviation museum if possible.",
    ["Spatial Reasoning (Puzzles & Building)", "Counting & Measuring", "Science (Air & Flight Basics)", "Geography (Where Planes Fly)"],
    [
      { name: "Young Eagles Program (EAA) — Introduction", url: "https://www.eaa.org/eaa/youth/free-ye-flights", description: "Experimental Aircraft Association program offering free introductory flights for youth ages 8-17 — younger children can attend airport events and open houses." },
      { name: "Aviation Museum Visit", url: "https://airandspace.si.edu/", description: "Visit an aviation museum (Smithsonian Air & Space, local air museums) — see historic aircraft, flight simulators, and aviation exhibits." },
    ],
    [
      { name: "The Noisy Airplane Ride by Mike Downs", url: "", type: "book" },
      { name: "Sesame Street: Come Fly with Me", url: "https://www.youtube.com/", type: "video" },
    ],
  ),

  s(nx(), "p29", "g3",
    "Build reading and math foundations — pilots read checklists, navigation charts, and weather reports. They calculate fuel, weight, distance, and time constantly. Practice map reading — start with maps of your neighborhood, then your city, then your state. Learn about weather: clouds, wind, rain, and storms. Pilots must understand weather deeply. Start a 'flight log' — every time you see an interesting plane, write down what it looked like, where you saw it, and what you learned about it.",
    ["Reading & Phonics", "Math (Addition, Subtraction & Time)", "Geography (Map Reading)", "Science (Weather Basics)"],
    [
      { name: "Microsoft Flight Simulator (Beginner Mode with Parent)", url: "https://www.flightsimulator.com/", description: "Experience the sensation of flight from your computer — start with simple takeoffs and landings in beginner aircraft." },
      { name: "Aviation Trail / Airport Scavenger Hunt", url: "", description: "Create a list of things to find at the airport: a red plane, a plane with two engines, a helicopter, a cargo plane, etc." },
    ],
    [
      { name: "The Boy Who Touched the Stars by José M. Hernández", url: "", type: "book" },
      { name: "BrainPOP Jr.: Fast Land Changes (Weather)", url: "https://jr.brainpop.com/science/weather/", type: "video" },
    ],
  ),

  s(nx(), "p29", "g4",
    "Deepen reading comprehension — pilots read detailed flight manuals, approach plates, and regulations. Continue practicing math with real-world problems: if a plane flies 500 miles per hour, how long to fly 1,000 miles? Learn about the four forces of flight: lift, weight (gravity), thrust, and drag. Build and fly more complex paper airplanes and simple balsa wood gliders. Start learning about the parts of an airport: runways, taxiways, control tower, terminal, and hangars.",
    ["Reading Comprehension", "Math (Multiplication & Division)", "Science (Forces of Flight)", "Geography (U.S. & World Maps)"],
    [
      { name: "Academy of Model Aeronautics (AMA) — Youth Programs", url: "https://www.modelaircraft.org/", description: "Learn to build and fly model aircraft — developing hands-on understanding of aerodynamics, control surfaces, and flight principles." },
      { name: "NASA — Four Forces of Flight (Interactive)", url: "https://www.nasa.gov/stem-content/four-forces-of-flight/", description: "Free NASA educational resources explaining how airplanes fly — interactive diagrams and simple experiments." },
    ],
    [
      { name: "DK Eyewitness: Flight", url: "", type: "book" },
      { name: "BrainPOP: Flight", url: "https://www.brainpop.com/technology/transportation/flight/", type: "video" },
    ],
  ),

  s(nx(), "p29", "g5",
    "Math expands with multiplication, division, and fractions — pilots use these for navigation, fuel calculations, and weight & balance. Build and fly radio-controlled (RC) model airplanes if possible — the closest thing to real flying at this age. Study weather in more detail: how fronts form, what different clouds mean, and how wind affects flight. Learn about the phonetic alphabet (Alpha, Bravo, Charlie...) that pilots use for communication. Start learning basic navigation: cardinal directions, latitude and longitude, and how to read aeronautical charts.",
    ["Math (Multiplication, Division & Fractions)", "Earth Science (Weather & Meteorology)", "Geography (Navigation Basics)", "Physical Education (Coordination)"],
    [
      { name: "Civil Air Patrol Cadet Program (Age 12+)", url: "https://www.gocivilairpatrol.com/programs/cadets", description: "Aerospace education, leadership training, and five free orientation flights for youth 12 and older — the best youth aviation program in America." },
      { name: "RC Model Airplane Club (with Adult Mentor)", url: "", description: "Join a local RC flying club — learn to build and fly radio-controlled aircraft with experienced modelers who will teach you aerodynamics and control." },
    ],
    [
      { name: "FAA Pilot's Handbook of Aeronautical Knowledge (Free PDF)", url: "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak", type: "book" },
      { name: "Science Max: Air Pressure Experiments (YouTube)", url: "https://www.youtube.com/", type: "video" },
    ],
  ),

  s(nx(), "p29", "g6",
    "Expand research and communication skills — pilots brief crews, communicate with air traffic control, and write clear reports. Study the history of aviation: the Wright Brothers, Amelia Earhart, the jet age, and spaceflight. Research different types of pilot careers: airline pilot (commercial), cargo pilot, corporate/private pilot, helicopter pilot, agricultural pilot, and military pilot. Learn about aviation science: Bernoulli's principle (how wings create lift), Newton's laws applied to flight, and how jet engines work.",
    ["English Language Arts (Research & Speaking)", "Math (Fractions & Word Problems)", "Physical Science (Aerodynamics)", "History (Aviation History)"],
    [
      { name: "EAA Young Eagles — First Flight", url: "https://www.eaa.org/eaa/youth/free-ye-flights", description: "Take your first real flight in a small airplane with a volunteer pilot — free for youth ages 8-17. An experience that changes lives." },
      { name: "Model Rocketry — Estes Rockets", url: "https://estesrockets.com/", description: "Build and launch model rockets — learn about thrust, stability, and recovery, foundational concepts for all aviation." },
    ],
    [
      { name: "The Wright Brothers by David McCullough (Young Readers)", url: "", type: "book" },
      { name: "Mystery Science: Forces & Motion", url: "https://mysteryscience.com/", type: "course" },
    ],
  ),

  s(nx(), "p29", "g7",
    "Math ramps up with pre-algebra — pilots calculate true airspeed, density altitude, weight & balance, and fuel consumption. Stay active in Civil Air Patrol — work toward advanced ranks and more flight hours. Study meteorology: learn to read METARs and TAFs (aviation weather reports and forecasts). Practice with flight simulators at home — modern simulators are remarkably realistic. Learn about the different pilot certificates: Student, Sport, Recreational, Private, Commercial, and Airline Transport Pilot (ATP).",
    ["Math (Pre-Algebra & Data)", "Earth Science (Meteorology Focus)", "Geography (Aeronautical Charts)", "Technology (Flight Simulators)"],
    [
      { name: "Civil Air Patrol — Orientation Flights & Training", url: "https://www.gocivilairpatrol.com/", description: "Continue in CAP — earn advanced ratings, participate in emergency services training, and fly orientation flights in CAP aircraft." },
      { name: "Aviation Explorers (Learning for Life)", url: "https://www.exploring.org/aviation/", description: "Hands-on aviation career exploration — flight simulators, airport tours, aircraft maintenance, and pilot mentorship." },
    ],
    [
      { name: "Khan Academy: Pre-Algebra", url: "https://www.khanacademy.org/math/pre-algebra", type: "course" },
      { name: "Skyvector (Free Aeronautical Charts)", url: "https://skyvector.com/", type: "program" },
    ],
  ),

  s(nx(), "p29", "g8",
    "Take pre-algebra seriously — math proficiency correlates directly with pilot success. Study physics fundamentals: Newton's laws, vectors, and forces — the language of flight. Continue Civil Air Patrol with a goal of solo flight at 16. If not in CAP, find a local flight school and ask about introductory flights (discovery flights — typically $100-200). Learn about FAA medical certificates: pilots must pass regular medical exams. The three classes: First (airline), Second (commercial), Third (private/student). Stay healthy and physically fit.",
    ["Pre-Algebra", "Physical Science (Physics Basics)", "English (ATC Communication)", "Physical Education (Fitness & Health)"],
    [
      { name: "Discovery Flight / Introductory Flight", url: "https://www.aopa.org/training-and-safety/students/getting-started", description: "Book a discovery flight at a local flight school — an hour with a Certified Flight Instructor where you actually fly the airplane." },
      { name: "AOPA — Student Pilot Resources", url: "https://www.aopa.org/training-and-safety/students", description: "Aircraft Owners and Pilots Association — free student membership, flight training resources, and scholarship information." },
    ],
    [
      { name: "Crash Course: Physics (Motion & Forces)", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtN0ge7yDk_UA0ldZJdhwkoV", type: "video" },
      { name: "FAA Airplane Flying Handbook (Free PDF)", url: "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/airplane_handbook", type: "book" },
    ],
  ),

  s(nx(), "p29", "g9",
    "Take algebra and the most advanced science available. Physics is the science of flight — take it seriously. Continue in CAP or begin formal flight training (you can get a Student Pilot Certificate at 16). Start studying for the FAA Private Pilot written exam (the 'knowledge test') — even if you're not ready to fly yet, learning the material now gives you a head start. Research aviation careers: major airline pilot, regional airline, cargo (FedEx/UPS), corporate aviation, charter, flight instruction, and military aviation.",
    ["Algebra I", "Physical Science / Physics", "Geography / Earth Science (Meteorology)", "English (Radio Communication)", "Physical Education (Health & Fitness)"],
    [
      { name: "Civil Air Patrol — Advanced Training", url: "https://www.gocivilairpatrol.com/", description: "Earn advanced CAP ratings — Ground Team, Mission Scanner, and leadership roles. Some CAP units offer flight training scholarships." },
      { name: "Flight Simulator Practice (X-Plane or MSFS)", url: "https://www.flightsimulator.com/", description: "Use a home flight simulator with realistic controls — practice procedures, navigation, and emergency scenarios at zero risk." },
    ],
    [
      { name: "FAA Private Pilot Knowledge Test Guide", url: "https://www.faa.gov/training_testing/testing/test_guides/media/pvt_guide.pdf", type: "book" },
      { name: "Khan Academy: Physics", url: "https://www.khanacademy.org/science/physics", type: "course" },
    ],
  ),

  s(nx(), "p29", "g10",
    "Take the most advanced math and science available. If 16+, you can solo an airplane — one of the most thrilling milestones on the path to becoming a pilot. Continue flight training if you've started; if not, plan to begin soon. Study diligently for the FAA Private Pilot written exam. If pursuing the college aviation route, research aviation degree programs. If pursuing the modular (non-college) route, focus on building flight hours. Both paths lead to the cockpit — the key is getting started.",
    ["Geometry / Algebra II", "Physics / AP Physics", "Geography / Meteorology", "English (Communication Skills)", "Physical Education (Medical Readiness)"],
    [
      { name: "FAA Student Pilot Certificate (Age 16+)", url: "https://www.faa.gov/pilots/become", description: "Apply for your Student Pilot Certificate through an FAA medical examiner, flight instructor, or FAA office — the first official step toward becoming a pilot." },
      { name: "EAA Air Academy (Summer Camp)", url: "https://www.eaa.org/eaa/youth/air-academy", description: "Residential summer camp in Oshkosh, WI — flight simulators, hands-on building projects, and aviation experiences for teens 15-18." },
    ],
    [
      { name: "Sporty's Learn to Fly Course", url: "https://www.sportys.com/learn-to-fly-course.html", type: "course" },
      { name: "Stick and Rudder by Wolfgang Langewiesche", url: "", type: "book" },
    ],
  ),

  s(nx(), "p29", "g11",
    "Take Honors Physics and advanced math. If pursuing flight training, work toward your Private Pilot Certificate (requires 40+ hours flight time, including 20 with an instructor and 10 solo). Take the FAA written exam. Research aviation degree programs (B.S. in Aviation, Aeronautical Science, Professional Flight) vs. flying at a local flight school (Part 61 or Part 141). University programs offer structure, financial aid eligibility, and airline pipeline programs. Standalone flight schools offer flexibility and potentially lower costs.",
    ["Honors Physics / AP Physics 1", "Algebra II / Pre-Calculus", "Meteorology / Earth Science", "English (Technical Communication)", "Physical Education (Fitness)"],
    [
      { name: "FAA Private Pilot Certificate Training", url: "https://www.faa.gov/pilots/become", description: "Begin or continue flight training toward your Private Pilot Certificate — the foundation of all advanced pilot ratings." },
      { name: "AOPA High School Aviation Initiative", url: "https://youcanfly.aopa.org/high-school", description: "Free aviation STEM curriculum for high schools — explore aviation careers, build knowledge, and access scholarship opportunities." },
    ],
    [
      { name: "FAR/AIM (Federal Aviation Regulations / Aeronautical Information Manual)", url: "https://www.faa.gov/regulations_policies/", type: "book" },
      { name: "Boldmethod — Learn to Fly (Free Articles & Quizzes)", url: "https://www.boldmethod.com/", type: "article" },
    ],
  ),

  s(nx(), "p29", "g12",
    "Take AP Physics and AP Calculus if available. Complete your Private Pilot Certificate (or work toward it if you started later). Pass the FAA Private Pilot written exam and checkride (practical test). If pursuing an aviation degree, research colleges: Embry-Riddle Aeronautical University, University of North Dakota, Purdue University, and Ohio State University have top aviation programs. Consider the Restricted ATP (R-ATP) pathway — graduates of approved aviation degree programs can qualify for airline jobs with fewer than the standard 1,500 flight hours.",
    ["AP Physics 1 / C", "AP Calculus", "Meteorology / Earth Science Elective", "English (Pilot Communication)", "Flight Training Lab"],
    [
      { name: "Private Pilot Checkride Preparation", url: "https://www.faa.gov/pilots/training/", description: "Prepare for the FAA practical test (checkride) — the oral exam and flight test that earn your Private Pilot Certificate." },
      { name: "Aviation Degree Program Research", url: "", description: "Top aviation programs: Embry-Riddle (FL/AZ), UND (ND), Purdue (IN), Ohio State (OH), Western Michigan, and Auburn — research their R-ATP eligibility." },
    ],
    [
      { name: "Sheppard Air Test Prep (For Knowledge Tests)", url: "https://www.sheppardair.com/", type: "program" },
      { name: "Fate Is the Hunter by Ernest K. Gann", url: "", type: "book" },
    ],
  ),

  s(nx(), "p29", "g13",
    "The most critical year for career planning. Continue flight training — work toward your Instrument Rating (the next step after Private Pilot). The Instrument Rating allows you to fly in clouds and low visibility using only instruments — essential for professional pilots. Research aviation career paths in detail: 1) University aviation program → CFI (Certified Flight Instructor) to build hours → regional airline → major airline. 2) Military → Air Force/Navy flight training → airline transition. 3) Modular: Private → Instrument → Commercial → CFI → build hours → airline. All paths require 1,500 hours for ATP.",
    ["AP Physics", "AP Calculus", "Flight Training (Instrument Rating)", "English (Interview Prep)", "Physical Education (FAA Medical Prep)"],
    [
      { name: "Instrument Rating Training", url: "https://www.faa.gov/pilots/training/", description: "Begin training for the Instrument Rating — fly solely by reference to instruments, a critical skill for professional pilots." },
      { name: "Military Recruiter Consultation (Air Force/Navy/Marines)", url: "", description: "Meet with military aviation recruiters — the military trains pilots to the highest standards and offers a path to airline careers with zero training cost." },
    ],
    [
      { name: "PilotEdge — Real-Time ATC Simulation", url: "https://www.pilotedge.net/", type: "program" },
      { name: "Fly the Wing by Jim Webb", url: "", type: "book" },
    ],
  ),

  s(nx(), "p29", "g14",
    "Apply to aviation degree programs (if university path) or continue flight training at a local flight school. Complete your Private Pilot Certificate if not already done. Pass all written exams with strong scores. Research and apply for aviation scholarships — AOPA, EAA, Women in Aviation, and the Organization of Black Aerospace Professionals offer significant flight training scholarships. Apply for your FAA First or Second Class Medical Certificate to confirm you meet the health requirements for professional flying. Stay fit, stay focused, and fly as much as possible.",
    ["AP Physics (Exam)", "AP Calculus (Exam)", "Flight Training (Private/Instrument)", "English (College/Job Applications)", "Physical Education (Fitness Peak)"],
    [
      { name: "Apply for Aviation Scholarships", url: "https://www.aopa.org/training-and-safety/students/flight-training-scholarships", description: "AOPA, EAA, Women in Aviation, OBAP, and other organizations award millions in flight training scholarships annually — apply widely." },
      { name: "FAA Medical Certificate — Find an AME", url: "https://www.faa.gov/pilots/amelocator/", description: "Schedule an FAA medical exam with an Aviation Medical Examiner (AME) — a required step before solo flight and professional certification." },
    ],
    [
      { name: "Women in Aviation International — Scholarships", url: "https://www.wai.org/scholarships", type: "article" },
      { name: "Weather Flying by Robert N. Buck", url: "", type: "book" },
    ],
  ),

  s(nx(), "p29", "g15",
    "Path A (University): Major in Professional Flight, Aeronautical Science, or Aviation Management at a Part 141 university program. Earn Private Pilot, Instrument Rating, Commercial Pilot, and Certified Flight Instructor (CFI) certificates. Graduate with 250-1,000 flight hours and R-ATP eligibility (1,000-1,250 hours instead of 1,500). Path B (Modular): Train at a local Part 61 or 141 flight school. Earn the same certificates at your own pace. Work as a CFI to build flight hours while getting paid. Path C (Military): Complete officer training and military flight school — the most intensive and prestigious pilot training available. Serve 8-12 years, then transition to airlines with exceptional experience.",
    ["Aerodynamics & Aircraft Systems", "Aviation Weather & Meteorology", "Crew Resource Management", "Flight Training (Multi-Engine, CFI)", "Airline Operations & Regulations"],
    [
      { name: "University Flight Team — NIFA SAFECON", url: "https://www.nifa.aero/", description: "Compete in intercollegiate flying competitions — precision landings, navigation events, and aircraft recognition against other aviation universities." },
      { name: "Become a Certified Flight Instructor (CFI)", url: "https://www.faa.gov/pilots/become", description: "Earn your CFI certificate — the most common way to build flight hours while getting paid. Teaching others makes you a better pilot." },
    ],
    [
      { name: "Jeppesen Private Pilot Manual", url: "https://ww2.jeppesen.com/", type: "book" },
      { name: "ForeFlight (Electronic Flight Bag App)", url: "https://foreflight.com/", type: "program" },
    ],
  ),

  s(nx(), "p29", "g16",
    "Build flight hours toward the Airline Transport Pilot (ATP) certificate — 1,500 hours total time (or 1,000-1,250 under R-ATP). Most pilots work as Certified Flight Instructors (CFIs) to build hours while earning income. Other time-building jobs: banner towing, aerial surveying, skydiving pilot, pipeline patrol, or regional charter. Once you reach 1,500 hours, apply to regional airlines (SkyWest, Republic, Endeavor, etc.) for your first airline job. The regional airline path: First Officer → upgrade to Captain (2-5 years) → apply to major airlines (Delta, United, American, Southwest, FedEx, UPS). Some pilots bypass regionals through corporate aviation or military transitions.",
    ["Advanced Aircraft Systems & Jet Operations", "Crew Resource Management (Advanced)", "High-Altitude & High-Performance Operations", "Airline Transport Pilot (ATP) Preparation", "Turbine Transition Training"],
    [
      { name: "Airline Transport Pilot (ATP) Certification", url: "https://www.faa.gov/pilots/training/atp/", description: "Prepare for the ATP written exam and practical test — the highest pilot certificate, required for airline captain positions." },
      { name: "Regional Airline Cadet Programs", url: "", description: "Many regional airlines offer cadet/pipeline programs — mentoring, tuition reimbursement, and guaranteed interviews for aspiring airline pilots." },
    ],
    [
      { name: "Gleim ATP Test Prep", url: "https://www.gleimaviation.com/", type: "program" },
      { name: "AirlinePilotCentral — Career Forums", url: "https://www.airlinepilotcentral.com/", type: "article" },
    ],
  ),

  s(nx(), "p29", "g17",
    "Airline Captain: After 2-5 years as a regional First Officer, upgrade to Captain, then transition to a major airline as a First Officer. After several years at a major, upgrade to Captain — the pinnacle of airline careers. Major airline captains earn $300,000-$400,000+/year with excellent benefits. Other top-tier opportunities: Chief Pilot, Director of Operations, FAA aviation safety inspector, or corporate Chief Pilot for Fortune 500 flight departments. For those interested in aviation safety and policy: an advanced degree (Master's in Aviation Safety, Human Factors, or a Ph.D. in Aviation) opens doors in accident investigation (NTSB), FAA regulation, and aviation research. The journey from first flight to major airline captain typically takes 10-20 years — a career built flight hour by flight hour, but one that rewards persistence with one of the most extraordinary professions in the world.",
    ["Airline Transport Pilot — Captain Upgrade", "Advanced Jet Systems & Type Ratings", "Aviation Safety & Human Factors", "Leadership & Crew Management", "FAA Regulations & Compliance"],
    [
      { name: "Air Line Pilots Association (ALPA)", url: "https://www.alpa.org/", description: "The largest airline pilot union — safety advocacy, contract negotiation, and professional resources for airline pilots." },
      { name: "National Business Aviation Association (NBAA)", url: "https://nbaa.org/", description: "For corporate/business aviation pilots — networking, professional development, and industry advocacy at the highest levels." },
    ],
    [
      { name: "International Journal of Aviation, Aeronautics, and Aerospace", url: "https://commons.erau.edu/ijaaa/", type: "article" },
      { name: "FAA Aviation Safety Information", url: "https://www.faa.gov/safety", type: "article" },
    ],
  ),


  // ========================================================================
  // p30 — CHEF
  // ========================================================================

  s(nx(), "p30", "g1",
    "Cooking begins with curiosity about food! At this age, children are natural explorers of taste, texture, and smell. Encourage sensory play with food — let them touch, smell, and taste different ingredients (with supervision). Involve them in simple kitchen tasks: washing vegetables, stirring batter, tearing lettuce, and sprinkling cheese. Talk about where food comes from — visit a farmers' market or a garden and let them see vegetables growing in the ground. Every chef started as a child who was curious about what was on their plate.",
    ["Sensory Exploration (Taste, Smell, Touch)", "Colors & Shapes (Food Identification)", "Counting (Ingredients & Steps)", "Storytelling (Food Stories)"],
    [
      { name: "Kids' Cooking Play Kitchen / Play Food", url: "", description: "Pretend play with a toy kitchen and play food — develops imaginative cooking, sequencing skills, and food vocabulary before real kitchen time." },
      { name: "Visit a Farmers' Market", url: "https://www.ams.usda.gov/local-food-directories/farmersmarkets", description: "Explore seasonal produce, meet farmers, and let children see, touch, and smell fresh ingredients — the foundation of culinary curiosity." },
    ],
    [
      { name: "Pancakes, Pancakes! by Eric Carle", url: "", type: "book" },
      { name: "Eating the Alphabet by Lois Ehlert", url: "", type: "book" },
    ],
  ),

  s(nx(), "p30", "g2",
    "Build kitchen confidence and food curiosity. Let children help with age-appropriate kitchen tasks: cracking eggs (with help), mixing batters, spreading butter, and arranging food on plates. Talk about the five tastes: sweet, salty, sour, bitter, and umami — let them taste examples of each. Learn basic kitchen safety: washing hands before cooking, staying away from hot surfaces, and never touching knives. Start a simple 'tasting journal' — draw a picture of a new food and circle whether you liked it or not.",
    ["Counting & Measuring (Simple Recipes)", "Colors & Food Identification", "Kitchen Safety Basics", "Storytelling (Food Memories)"],
    [
      { name: "Raddish Kids — Cooking Subscription (Junior)", url: "https://www.raddishkids.com/", description: "Monthly cooking kits designed for kids — recipes, kitchen tools, and culinary lessons that make cooking fun and educational." },
      { name: "Kids' Cooking Class (Local Grocery Store / Community Center)", url: "", description: "Many grocery stores and community centers offer parent-child cooking classes — hands-on learning with professional kitchen safety guidance." },
    ],
    [
      { name: "Pizza at Sally's by Monica Wellington", url: "", type: "book" },
      { name: "Sesame Street: Cooking with Cookie Monster", url: "https://www.youtube.com/", type: "video" },
    ],
  ),

  s(nx(), "p30", "g3",
    "Build reading and math foundations — chefs read recipes, calculate ingredient quantities, and adjust proportions. Practice reading simple recipes together — point to the words and talk about what each step means. Learn basic measurements: cups, tablespoons, teaspoons, and how to level flour. Start learning about food groups and nutrition: why our bodies need different kinds of foods. Try cooking a simple family recipe together — the pride of making something everyone eats is the spark that lights a lifelong love of cooking.",
    ["Reading & Phonics (Recipe Reading)", "Math (Measuring & Counting)", "Science (Food & Nutrition Basics)", "Writing (Recipe Journal)"],
    [
      { name: "Kids Cook Real Food — eCourse (Beginner)", url: "https://kidscookrealfood.com/", description: "Video-based cooking courses teaching children real kitchen skills — knife safety, measuring, and following recipes with age-appropriate instruction." },
      { name: "Start a Family Recipe Journal", url: "", description: "Cook one family recipe together each week and record it — write the recipe, draw the dish, and note what each family member thought of it." },
    ],
    [
      { name: "The Seven Silly Eaters by Mary Ann Hoberman", url: "", type: "book" },
      { name: "BrainPOP Jr.: Food Groups", url: "https://jr.brainpop.com/health/food/foodgroups/", type: "video" },
    ],
  ),

  s(nx(), "p30", "g4",
    "Deepen reading comprehension with recipes — chefs follow detailed written instructions and adapt them on the fly. Practice measuring with increasing precision: learn the difference between liquid and dry measuring cups, and how to measure sticky ingredients like honey. Learn about kitchen tools and their uses: whisk, spatula, measuring spoons, colander, and peeler. Explore food from different cultures — cook a simple dish from another country each month. Learn about seasonal eating: which fruits and vegetables grow in each season where you live?",
    ["Reading Comprehension (Recipe Analysis)", "Math (Measurement & Fractions Intro)", "Geography (World Food Cultures)", "Science (Seasonal Growing Cycles)"],
    [
      { name: "America's Test Kitchen Kids — Young Chefs' Club", url: "https://www.americastestkitchen.com/kids", description: "Hands-on cooking experiments, recipes, and activities from the trusted ATK team — designed specifically for young chefs building real skills." },
      { name: "Cook a Dish from Another Country Each Month", url: "", description: "Pick a country, research a traditional dish, shop for ingredients together, and cook it at home — building culinary and cultural literacy." },
    ],
    [
      { name: "How Did That Get in My Lunchbox? by Chris Butterworth", url: "", type: "book" },
      { name: "BrainPOP: Nutrition", url: "https://www.brainpop.com/health/nutrition/", type: "video" },
    ],
  ),

  s(nx(), "p30", "g5",
    "Math expands with fractions — chefs double recipes, halve recipes, and scale dishes for different party sizes. Learn about the science of cooking: why does bread rise? What makes cookies spread versus stay puffy? How does heat change food? Start cooking with more independence — try making breakfast for the family (pancakes, scrambled eggs, or smoothies). Learn about kitchen organization: mise en place (everything in its place) — the French concept of preparing all ingredients before you start cooking. Plant a small herb garden and cook with what you grow.",
    ["Math (Fractions & Multiplication)", "Science (Cooking Chemistry Basics)", "Art (Food Presentation & Plating)", "Writing (Recipe Writing)", "Home Economics (Kitchen Skills)"],
    [
      { name: "Plant a Kitchen Herb Garden", url: "", description: "Grow basil, mint, cilantro, and chives in pots or a garden bed — cook with fresh herbs and understand the farm-to-table connection." },
      { name: "Kids' Cooking Competition (School / Community)", url: "", description: "Many schools and community organizations host junior cooking competitions — build confidence, creativity, and friendly kitchen rivalry." },
    ],
    [
      { name: "Science You Can Eat by Stefan Gates", url: "", type: "book" },
      { name: "Mystery Science: Food & Chemistry", url: "https://mysteryscience.com/", type: "course" },
    ],
  ),

  s(nx(), "p30", "g6",
    "Expand research and presentation skills — chefs research cuisines, present dishes to diners, and communicate with their team. Research the culinary traditions of a country in depth — learn about its staple ingredients, signature dishes, and cooking techniques. Try cooking a multi-course meal for the family (appetizer, main course, dessert). Learn about food safety: proper temperatures for cooking meat, avoiding cross-contamination, and storing leftovers safely. Watch cooking shows and take notes — what techniques do professional chefs use?",
    ["English Language Arts (Research & Presentation)", "Math (Fractions & Ratios)", "Science (Food Safety & Microbiology Basics)", "Home Economics (Meal Planning)"],
    [
      { name: "4-H Food & Nutrition Projects", url: "https://4-h.org/programs/food-and-nutrition/", description: "Hands-on cooking, food science, and nutrition projects through 4-H — develop skills in meal planning, food preservation, and culinary arts." },
      { name: "Cook a Three-Course Family Dinner", url: "", description: "Plan a menu, shop for ingredients, prepare and serve a three-course meal for family — manage timing so everything is ready at the right moment." },
    ],
    [
      { name: "The Complete Cookbook for Young Chefs by America's Test Kitchen Kids", url: "", type: "book" },
      { name: "MasterChef Junior (TV Show)", url: "https://www.fox.com/masterchef-junior/", type: "video" },
    ],
  ),

  s(nx(), "p30", "g7",
    "Math ramps up with pre-algebra and ratios — chefs convert between metric and imperial measurements, calculate food costs, and scale recipes precisely. Study nutrition science: macronutrients, micronutrients, and how different diets affect the body. Learn about different cooking methods: sautéing, roasting, braising, steaming, poaching, and grilling. Practice knife skills with close supervision — the chef's knife is the most important tool in the kitchen. Start learning about the professional kitchen hierarchy: the brigade de cuisine system created by Auguste Escoffier.",
    ["Math (Pre-Algebra, Ratios & Proportions)", "Life Science (Nutrition & Food Science)", "English (Menu Writing & Descriptions)", "Home Economics (Advanced Cooking Techniques)"],
    [
      { name: "Young Chefs Academy — Cooking Classes", url: "https://youngchefsacademy.com/", description: "Structured cooking school for kids and teens — professional-grade instruction in knife skills, cooking techniques, and global cuisines." },
      { name: "Volunteer at a Community Kitchen / Food Bank", url: "https://www.feedingamerica.org/", description: "Volunteer in a community kitchen — learn volume cooking, food safety at scale, and the role food plays in community and service." },
    ],
    [
      { name: "Khan Academy: Ratios & Proportions", url: "https://www.khanacademy.org/math/pre-algebra", type: "course" },
      { name: "Salt, Fat, Acid, Heat (Young Readers adaptation)", url: "", type: "book" },
    ],
  ),

  s(nx(), "p30", "g8",
    "Take science seriously — food is chemistry, biology, and physics. Understanding how heat transforms proteins, how acids denature, and how emulsions work will make you a better cook. Practice more advanced cooking techniques: make fresh pasta from scratch, bake artisan bread, or learn to properly sear and roast meat. Start a cooking journal — record recipes you've tried, what worked, what didn't, and what you'd change next time. Learn about food presentation and plating — chefs eat with their eyes first. Research culinary career paths: restaurant chef, pastry chef, private chef, food stylist, and culinary educator.",
    ["Pre-Algebra / Algebra Readiness", "Physical Science (Chemistry of Cooking)", "English (Recipe Writing & Food Writing)", "Home Economics (Advanced Cooking)", "Art (Food Presentation & Plating)"],
    [
      { name: "Culinary Summer Camps (Teen)", url: "", description: "Many culinary schools (CIA, Johnson & Wales, ICE) offer summer cooking camps for teens — immersive kitchen experiences with professional chef instructors." },
      { name: "Bake Artisan Bread from Scratch", url: "", description: "Master naturally leavened bread — develop patience, precision, and an understanding of fermentation that applies across all cooking." },
    ],
    [
      { name: "Crash Course: Chemistry (Food Science)", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtPHzzYuWy6fYEaX9mQQ8oGr", type: "video" },
      { name: "The Food Lab by J. Kenji López-Alt", url: "", type: "book" },
    ],
  ),

  s(nx(), "p30", "g9",
    "Take algebra and the most advanced science available — professional chefs use math for costing, scaling, and kitchen management. Take a family and consumer science (home economics) elective if your school offers one. Start learning about the restaurant industry — how restaurants work from the front of house to the back. Research culinary school vs. apprenticeship paths. Culinary school (CIA, Johnson & Wales, ICE) offers structured training and networking. The apprenticeship path (staging in restaurant kitchens) offers real-world experience and no student debt. Both paths can lead to the same destination — the right choice depends on your learning style.",
    ["Algebra I", "Biology / Chemistry", "Family & Consumer Science (if available)", "English (Descriptive / Food Writing)", "Business / Entrepreneurship Basics"],
    [
      { name: "Stage (Intern) at a Local Restaurant", url: "", description: "Ask a local chef if you can observe or help in their kitchen for a day or a weekend — the best way to see if professional kitchen life is for you." },
      { name: "Start a Small Food Business", url: "", description: "Sell homemade baked goods at a farmers' market, start a weekend cupcake business, or cater a family event — learn kitchen production, pricing, and customer service." },
    ],
    [
      { name: "TED-Ed: The Chemistry of Cookies", url: "https://ed.ted.com/", type: "video" },
      { name: "Kitchen Confidential by Anthony Bourdain", url: "", type: "book" },
    ],
  ),

  s(nx(), "p30", "g10",
    "Take chemistry if available — understanding acids, bases, emulsions, and reactions is the foundation of modernist cuisine. Continue hands-on cooking experience — cook family dinners regularly, experiment with new cuisines, and challenge yourself with complex techniques. Learn about food costing and restaurant math: how chefs price menu items, manage food waste, and run a profitable kitchen. Research culinary schools: The Culinary Institute of America (CIA), Johnson & Wales, Institute of Culinary Education (ICE), Le Cordon Bleu, and community college culinary programs. Start researching the Certified Executive Chef (CEC) credential from the American Culinary Federation.",
    ["Algebra / Geometry", "Chemistry (Honors if available)", "Business Math (Food Costing)", "English (Professional Communication)", "Family & Consumer Science Elective"],
    [
      { name: "ProStart — National Restaurant Association Program", url: "https://chooserestaurants.org/ProStart", description: "Two-year high school culinary arts and restaurant management program — earn industry certifications and compete in culinary competitions." },
      { name: "Work Part-Time in a Restaurant Kitchen", url: "", description: "Even as a dishwasher or prep cook, being in a professional kitchen teaches you the pace, hierarchy, and culture of restaurant life." },
    ],
    [
      { name: "Coursera: The Science of Gastronomy (HKUST)", url: "https://www.coursera.org/learn/gastronomy", type: "course" },
      { name: "The Professional Chef by The Culinary Institute of America", url: "", type: "book" },
    ],
  ),

  s(nx(), "p30", "g11",
    "Take Chemistry and advanced math — culinary science depends on both. If enrolled in ProStart, continue to Level 2 and compete in state/national competitions. Research culinary career paths in detail: 1) Restaurant chef line — line cook → sous chef → executive chef. 2) Pastry and baking — specialized path focusing on desserts and breads. 3) Private chef — cooking for families or individuals. 4) Food media — food styling, recipe development, cookbook writing. 5) Research & development — creating products for food companies. 6) Institutional — hotels, cruise ships, corporate dining, healthcare. The culinary world is far bigger than restaurants.",
    ["Chemistry", "Algebra II / Pre-Calculus", "Business / Entrepreneurship", "English (Food Writing & Communication)", "Family & Consumer Science (Advanced)"],
    [
      { name: "Careers through Culinary Arts Program (C-CAP)", url: "https://ccapinc.org/", description: "Nonprofit that provides culinary career preparation, scholarships, and job placement for high school students — a pipeline to top culinary schools and restaurant jobs." },
      { name: "Enter a Cooking Competition", url: "", description: "Compete in local, state, or national cooking competitions — build skills under pressure, get feedback from professional chefs, and build your culinary resume." },
    ],
    [
      { name: "Khan Academy: AP Chemistry", url: "https://www.khanacademy.org/science/ap-chemistry", type: "course" },
      { name: "Blood, Bones & Butter by Gabrielle Hamilton", url: "", type: "book" },
    ],
  ),

  s(nx(), "p30", "g12",
    "Take advanced Chemistry (AP if available). Continue working in a restaurant kitchen if possible — real kitchen experience matters more to employers than any credential. If pursuing the culinary school path, research programs and admission requirements. The CIA requires a high school diploma, recommendation letters, and an essay. Many programs also want to see kitchen experience. Apply for culinary scholarships — C-CAP, James Beard Foundation, ACF, and local restaurant associations offer significant funding. Start building your chef's portfolio — photos of dishes you've created, recipes you've developed, and events you've catered.",
    ["AP Chemistry / Chemistry", "Pre-Calculus / Statistics", "Business Math (Advanced Costing)", "English (Application Essays)", "Culinary Arts Elective"],
    [
      { name: "James Beard Foundation — Youth Programs", url: "https://www.jamesbeard.org/education", description: "Educational programs, scholarships, and mentorship from the nation's most prestigious culinary foundation — a launchpad for serious young chefs." },
      { name: "Build a Culinary Portfolio", url: "", description: "Document every dish you create — professional photos, recipe notes, technique descriptions, and feedback. This portfolio will open doors at culinary schools and restaurants." },
    ],
    [
      { name: "American Culinary Federation — Student Membership", url: "https://www.acfchefs.org/", type: "program" },
      { name: "Ratio: The Simple Codes Behind the Craft of Everyday Cooking by Michael Ruhlman", url: "", type: "book" },
    ],
  ),

  s(nx(), "p30", "g13",
    "The most critical year for career decisions. If pursuing culinary school: finalize your application to CIA, Johnson & Wales, ICE, or your chosen program. If pursuing the apprenticeship path: seek a full-time kitchen position at the best restaurant that will hire you — start as a prep cook or dishwasher and work your way up. The best chefs in the world started at the bottom of the kitchen. Continue competing in culinary competitions and building your portfolio. Network with chefs — attend food festivals, restaurant openings, and culinary events. The restaurant industry is relationship-driven; who you know matters almost as much as what you know.",
    ["AP Chemistry (if available)", "Statistics / Calculus", "Culinary Arts (School Elective or Self-Study)", "English (Personal Statement / Essays)", "Business & Economics"],
    [
      { name: "Culinary Institute of America — Application", url: "https://www.ciachef.edu/", description: "Apply to the CIA — the nation's premier culinary college. Prepare a strong application with kitchen experience, a portfolio, and a compelling personal statement." },
      { name: "American Culinary Federation — Junior Competition", url: "https://www.acfchefs.org/", description: "Compete in ACF-sanctioned culinary competitions — earn medals, get feedback from master chefs, and build a competition record that sets you apart." },
    ],
    [
      { name: "ACF Certified Culinarian (CC) — Requirements", url: "https://www.acfchefs.org/Certify", type: "article" },
      { name: "The Making of a Chef by Michael Ruhlman", url: "", type: "book" },
    ],
  ),

  s(nx(), "p30", "g14",
    "Path A — Culinary School: Apply and enroll in a culinary arts degree or certificate program. Top schools: CIA (Hyde Park, NY / Napa, CA), Johnson & Wales (RI/NC/CO/FL), ICE (NYC/LA), Le Cordon Bleu schools, and excellent community college programs. Path B — Apprenticeship: Secure a position at the best restaurant that will hire a motivated beginner. Work every station, ask to learn new skills, and treat every task — even washing lettuce — as a lesson in excellence. The apprenticeship path means 2-3 years of intense kitchen work before you're ready for a line cook position. Both paths work; choose based on your finances and learning style.",
    ["Culinary Arts (Enrolled Program)", "Food Science & Nutrition", "Food Safety & Sanitation (ServSafe)", "Business Management Basics", "World Cuisines & Culinary History"],
    [
      { name: "Enroll in Culinary School OR Secure Kitchen Apprenticeship", url: "", description: "Make your choice — formal culinary education (CIA, J&W, ICE, community college) or the apprenticeship path (stage your way up in top restaurant kitchens). Both lead to the same destination." },
      { name: "ServSafe Food Protection Manager Certification", url: "https://www.servsafe.com/", description: "Get certified in food safety — required for most professional kitchen jobs and demonstrates your commitment to professional standards." },
    ],
    [
      { name: "ProChef Certification — CIA", url: "https://www.ciachef.edu/prochef-certification/", type: "program" },
      { name: "The Flavor Bible by Karen Page & Andrew Dornenburg", url: "", type: "book" },
    ],
  ),

  s(nx(), "p30", "g15",
    "Culinary school (AOS — Associate in Occupational Studies, typically 2 years) or intensive kitchen apprenticeship (2-3 years). Core curriculum: knife skills, cooking techniques (sauté, roast, braise, grill, poach, fry), sauce-making (the five mother sauces), butchery and fish fabrication, baking and pastry fundamentals, menu planning, food costing, and kitchen management. Complete an externship at a top restaurant — your externship often leads to your first job. Earn ACF certifications as you progress: Certified Culinarian (CC), then Certified Sous Chef (CSC). The most important thing you can do: cook as much as possible, make mistakes, and learn from them.",
    ["Culinary Fundamentals & Knife Skills", "Garde Manger & Butchery", "Baking & Pastry Arts", "Menu Planning & Food Costing", "Wine & Beverage Studies"],
    [
      { name: "Externship at a Top-Rated Restaurant", url: "", description: "Complete your culinary externship at a Michelin-starred, James Beard-recognized, or locally top-rated restaurant — the experience and the name on your resume accelerate your career." },
      { name: "ACF Culinary Competition Team", url: "https://www.acfchefs.org/", description: "Join a college ACF competition team — compete regionally and nationally, earning medals and recognition that open doors to elite kitchens." },
    ],
    [
      { name: "On Food and Cooking by Harold McGee", url: "", type: "book" },
      { name: "Larousse Gastronomique", url: "", type: "book" },
    ],
  ),

  s(nx(), "p30", "g16",
    "Line Cook → Sous Chef: After culinary school or apprenticeship, start as a line cook on a specific station (garde manger — cold station, sauté, grill, or pastry). Master your station, then learn every other station — a well-rounded cook can work any position on the line. After 2-4 years of line cooking, promote to Sous Chef (the 'under-chef' — second in command). The sous chef runs the kitchen during service, manages the line cooks, handles ordering and inventory, and ensures every plate is perfect before it leaves the kitchen. Earn ACF Certified Sous Chef (CSC) credential. Continue learning — stage at other restaurants, attend workshops, and never stop tasting and experimenting.",
    ["Advanced Cooking Techniques & Plating", "Kitchen Management & Leadership", "Food Cost Control & Inventory", "Menu Development & Recipe Engineering", "Staff Training & Mentoring"],
    [
      { name: "Stage at Michelin-Starred / Award-Winning Restaurants", url: "", description: "Stage (unpaid internship) at the best restaurants you can access — even a few days learning from world-class chefs will elevate your skills and open career doors." },
      { name: "ACF Certified Sous Chef (CSC) Credential", url: "https://www.acfchefs.org/Certify", description: "Earn professional certification from the American Culinary Federation — validates your skills and distinguishes you in a competitive job market." },
    ],
    [
      { name: "The Escoffier Cookbook and Guide to the Fine Art of Cookery", url: "", type: "book" },
      { name: "ChefSteps / Stella Culinary (Online Advanced Techniques)", url: "https://www.chefsteps.com/", type: "course" },
    ],
  ),

  s(nx(), "p30", "g17",
    "Executive Chef / Head Chef: Lead your own kitchen. After 3-5 years as sous chef, you're ready for the top job. The Executive Chef creates the menu, manages the entire kitchen team, controls food and labor costs, builds relationships with purveyors and farmers, and represents the restaurant publicly. Other culinary leadership paths: 1) Chef-Owner — open your own restaurant (requires culinary skill + business acumen). 2) Corporate Executive Chef — lead culinary operations for hotel groups, cruise lines, or restaurant chains. 3) Private Chef — cook for high-net-worth families, celebrities, or executives. 4) Food Media Personality — combine cooking with television, publishing, and brand partnerships. 5) Culinary Educator — teach the next generation at culinary schools. Some chefs pursue an advanced degree (Master's in Food Studies, MBA for restaurant entrepreneurship, or food science research). A Ph.D. in Food Science opens doors in product development and food technology. The culinary world rewards creativity, persistence, and a relentless commitment to making people happy through food.",
    ["Executive Kitchen Leadership", "Menu & Concept Development", "Restaurant Financial Management", "Supplier & Farmer Relations", "Mentoring & Teaching"],
    [
      { name: "ACF Certified Executive Chef (CEC) Credential", url: "https://www.acfchefs.org/Certify", description: "The highest ACF certification for working chefs — requires documented experience, competition participation, and continuing education. The gold standard for executive chefs." },
      { name: "James Beard Foundation — Chef Awards & Recognition", url: "https://www.jamesbeard.org/", description: "The James Beard Awards are the Oscars of the food world — nominate yourself or peers, attend the awards, and aspire to culinary excellence at the highest level." },
    ],
    [
      { name: "Art Culinaire (Magazine — Professional Culinary Art)", url: "https://www.artculinairemagazine.com/", type: "article" },
      { name: "Gastronomica: The Journal for Food Studies", url: "https://online.ucpress.edu/gastronomica", type: "article" },
    ],
  ),

  // ========================================================================
  // p31 — MECHANICAL ENGINEER
  // ========================================================================

  s(nx(), "p31", "g1",
    "Mechanical engineering begins with curiosity about how things work! At this age, children are natural tinkerers — they take things apart, build towers, and figure out how toys move. Encourage building play with blocks, LEGOs, and construction toys. Talk about simple machines you see every day: wheels on a bicycle, ramps at the playground, and levers in a seesaw. Let them help you with simple household fixes — handing you a screwdriver or holding a flashlight plants the seed that they can understand and fix things too.",
    ["Building & Construction Play", "Shapes & Spatial Reasoning", "Curiosity & Exploration (How Things Work)", "Fine Motor Skills (Tools & Assembly)"],
    [
      { name: "Duplo / Mega Bloks — Building Sets", url: "", description: "Large building blocks develop spatial reasoning, structural intuition, and creative problem-solving — the earliest engineering studio." },
      { name: "Visit a Children's Science Museum", url: "https://www.childrensmuseums.org/", description: "Science museums have hands-on exhibits with gears, levers, pulleys, and building zones — young children learn mechanical principles through play." },
    ],
    [
      { name: "Rosie Revere, Engineer by Andrea Beaty", url: "", type: "book" },
      { name: "What Do You Do with an Idea? by Kobi Yamada", url: "", type: "book" },
    ],
  ),

  s(nx(), "p31", "g2",
    "Build curiosity and hands-on problem-solving. Give children safe things to take apart with supervision — old appliances, broken toys, or simple mechanical objects — and talk about what's inside. Learn about simple machines: lever, wheel and axle, pulley, inclined plane, wedge, and screw. Find examples of each around the house. Encourage 'what if' questions: What if we made this taller? What if we used a different shape? What would make this stronger? Engineering is about asking 'what if' and then testing the answer.",
    ["Spatial Reasoning (Puzzles, Mazes, Building)", "Counting & Measuring", "Science (Simple Machines)", "Art (Drawing & Designing)"],
    [
      { name: "LEGO Classic Creative Brick Box", url: "https://www.lego.com/", description: "Open-ended LEGO building sets develop creativity and structural understanding — build vehicles, machines, buildings, and anything imaginable." },
      { name: "Take-Apart Tray (Old Appliances)", url: "", description: "With adult supervision, disassemble an old clock, radio, or small appliance — see motors, gears, circuits, and how things fit together inside." },
    ],
    [
      { name: "The Most Magnificent Thing by Ashley Spires", url: "", type: "book" },
      { name: "Sesame Street: Simple Machines", url: "https://www.youtube.com/", type: "video" },
    ],
  ),

  s(nx(), "p31", "g3",
    "Build reading and math foundations — engineers read technical documents, calculate dimensions, and communicate ideas precisely. Practice measuring everything: how tall is the table? How wide is the door? How much does the bag of flour weigh? Start a 'how things work' journal — draw a machine you see and try to explain how it works (a can opener, a bicycle, a fan). Learn about gears: find gear toys or open a broken clock to see how gears transfer motion. Visit a construction site (from a safe distance) and observe the big machines — cranes, excavators, and bulldozers are all triumphs of mechanical engineering.",
    ["Reading & Phonics", "Math (Measurement & Units)", "Science (How Things Work)", "Writing (Observation Journal)"],
    [
      { name: "KiwiCo — Tinker Crate (Ages 6-8)", url: "https://www.kiwico.com/tinker", description: "Monthly STEM project kits that teach mechanical and engineering concepts through hands-on building — gear boxes, catapults, hydraulic claws, and more." },
      { name: "Start a 'How It Works' Journal", url: "", description: "Draw a different machine each week, label the parts, and write down how you think it works — develop the observation skills of an engineer." },
    ],
    [
      { name: "The Way Things Work by David Macaulay (Young Readers version)", url: "", type: "book" },
      { name: "BrainPOP Jr.: Simple Machines", url: "https://jr.brainpop.com/science/forces/simplemachines/", type: "video" },
    ],
  ),

  s(nx(), "p31", "g4",
    "Deepen reading comprehension with nonfiction about machines and how things work. Practice precise measurement — engineers work in thousandths of an inch. Learn about more complex mechanisms: cranks, cams, linkages, and ratchets. Build a Rube Goldberg machine — a chain-reaction contraption that performs a simple task in a complicated way. This teaches creative problem-solving, iterative testing, and the joy of engineering 'failure' (each failed attempt teaches you something new). Learn about famous engineers and their inventions: Archimedes, Leonardo da Vinci, James Watt, and the Wright brothers.",
    ["Reading Comprehension", "Math (Measurement & Precision)", "Physical Science (Forces & Motion)", "Art (Technical Drawing)", "History (Famous Engineers & Inventors)"],
    [
      { name: "Rube Goldberg Machine Contest (Junior)", url: "https://www.rubegoldberg.org/", description: "Design and build a chain-reaction machine that performs a simple task — the ultimate creative engineering challenge that teaches systems thinking." },
      { name: "Minecraft — Engineering Builds", url: "https://education.minecraft.net/", description: "Use Redstone in Minecraft to build mechanical contraptions — pistons, doors, traps, and automated farms. Practice logic and systems thinking." },
    ],
    [
      { name: "DK Eyewitness: Invention", url: "", type: "book" },
      { name: "BrainPOP: Gears", url: "https://www.brainpop.com/technology/simplemachines/gears/", type: "video" },
    ],
  ),

  s(nx(), "p31", "g5",
    "Math expands with multiplication, division, and fractions — engineers use these for force calculations, material estimates, and design parameters. Study levers and mechanical advantage: how does a crowbar multiply force? How do bicycle gears make it easier to pedal uphill? Build increasingly complex projects: a rubber-band powered car, a popsicle-stick bridge, or a cardboard robotic arm. Start learning about energy: potential energy (stored) and kinetic energy (motion). Learn how engines work — the four-stroke cycle (intake, compression, power, exhaust) that powers most cars.",
    ["Math (Multiplication, Division & Fractions)", "Physical Science (Forces & Energy)", "Art (Technical Drawing & Design)", "Technology (Introduction to Mechanisms)"],
    [
      { name: "FIRST LEGO League (FLL) — Junior Division", url: "https://www.firstlegoleague.org/", description: "Build and program LEGO robots to solve real-world challenges — team-based engineering, coding, and creative problem-solving with professional mentorship." },
      { name: "Build a Rubber-Band Powered Car", url: "", description: "Design and build a vehicle powered only by a rubber band — experiment with wheel size, body weight, and rubber band tension to maximize distance." },
    ],
    [
      { name: "The Boy Who Harnessed the Wind (Young Readers) by William Kamkwamba", url: "", type: "book" },
      { name: "Mystery Science: Forces & Energy", url: "https://mysteryscience.com/", type: "course" },
    ],
  ),

  s(nx(), "p31", "g6",
    "Expand research and communication skills — engineers write reports, present designs, and collaborate on teams. Research an engineering marvel in depth: the International Space Station, a suspension bridge, a jet engine, or a particle accelerator. Present your findings with diagrams and explanations. Build more sophisticated projects — try an air-powered rocket, a simple electric motor, or a hydraulic arm made from syringes and tubing. Learn about the design process: define the problem, brainstorm solutions, prototype, test, and iterate. This is the engineering method, and it works for everything from bridges to robots.",
    ["English Language Arts (Research & Presentation)", "Math (Fractions & Decimals)", "Physical Science (Forces, Energy & Machines)", "Technology (Design Process)"],
    [
      { name: "Science Olympiad — Machines & Engineering Events", url: "https://www.soinc.org/", description: "Competitive engineering events — build bridges, towers, vehicles, planes, and Rube Goldberg devices. Learn engineering principles through hands-on competition." },
      { name: "Tinkercad — 3D Design (Free)", url: "https://www.tinkercad.com/", description: "Free browser-based 3D design tool — learn CAD fundamentals by designing your own parts, machines, and inventions." },
    ],
    [
      { name: "Engineering the City by Matthys Levy & Richard Panchyk", url: "", type: "book" },
      { name: "Crash Course Kids: Engineering", url: "https://www.youtube.com/playlist?list=PLhz12vamHOnZ4ZDC0dS6C9HRN5Qrm0jHO", type: "video" },
    ],
  ),

  s(nx(), "p31", "g7",
    "Math ramps up with pre-algebra — mechanical engineering is math-intensive. Practice solving real-world math problems: calculate the mechanical advantage of a lever, the speed of a gear train, or the force needed to lift a weight. Study Newton's three laws of motion — the foundation of all mechanical engineering. Build a model trebuchet or catapult to understand projectile motion, counterweights, and energy transfer. Start learning about electricity and circuits — many mechanical engineers work with electromechanical systems. Take on a long-term engineering project: design and build something that solves a problem in your home or school.",
    ["Math (Pre-Algebra & Data)", "Physical Science (Newton's Laws & Mechanics)", "English (Technical Writing)", "Design & Technology (CAD Introduction)"],
    [
      { name: "FIRST Tech Challenge (FTC) — Middle School Robotics", url: "https://www.firstinspires.org/robotics/ftc", description: "Design, build, and program robots from a kit of parts to compete in an alliance format — real-world engineering with metal, motors, and sensors." },
      { name: "Solve a Real Problem — Engineering Project", url: "", description: "Identify a problem at home or school — a door that sticks, a messy desk, a heavy load to carry — and design and build a mechanical solution." },
    ],
    [
      { name: "Khan Academy: Pre-Algebra", url: "https://www.khanacademy.org/math/pre-algebra", type: "course" },
      { name: "SketchUp for Schools (Free 3D CAD)", url: "https://edu.sketchup.com/", type: "program" },
    ],
  ),

  s(nx(), "p31", "g8",
    "Take pre-algebra and the most advanced science available. Physics is the language of mechanical engineering — learn it well. Study material properties: strength, stiffness, ductility, hardness, and fatigue. Why are bridges made of steel? Why are airplane bodies aluminum? Why are some parts plastic? The right material for the right job is a core engineering decision. Build with increasingly diverse materials — wood, metal, plastic, and composites. Learn about CAD (Computer-Aided Design): start with Tinkercad or SketchUp, then graduate to Fusion 360 or Onshape. In modern engineering, you design on a computer before you ever touch a tool.",
    ["Pre-Algebra", "Physical Science (Physics & Materials)", "English (Technical Communication)", "Computer Skills (CAD & 3D Modeling)", "Design & Technology"],
    [
      { name: "Fusion 360 — Free Student License", url: "https://www.autodesk.com/products/fusion-360/students-teachers-educators", description: "Download professional CAD software for free as a student — learn parametric design, assemblies, and simulation like a real engineer." },
      { name: "VEX Robotics Competition (Middle School)", url: "https://www.vexrobotics.com/competition", description: "Design, build, and program VEX robots to compete in an annual game — learn mechanical design, gear ratios, and structural engineering." },
    ],
    [
      { name: "Crash Course: Physics (Motion & Forces)", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtN0ge7yDk_UA0ldZJdhwkoV", type: "video" },
      { name: "Structures: Or Why Things Don't Fall Down by J.E. Gordon", url: "", type: "book" },
    ],
  ),

  s(nx(), "p31", "g9",
    "Take algebra and the most advanced science available — physics if offered, physical science if not. Join or start a robotics club. Learn about the different fields of mechanical engineering: aerospace (planes and rockets), automotive (cars and trucks), biomechanics (medical devices and prosthetics), energy systems (power plants and renewables), manufacturing (factories and production), and robotics. Mechanical engineering is one of the broadest engineering disciplines — you can work on anything from jet engines to artificial hearts. Research the path: BS in Mechanical Engineering → FE exam (Fundamentals of Engineering) → 4 years of experience → PE exam (Professional Engineer).",
    ["Algebra I", "Physical Science / Physics Intro", "Technology (CAD & Programming)", "English (Research & Technical Writing)", "Design & Engineering Elective"],
    [
      { name: "FIRST Robotics Competition (FRC) — High School", url: "https://www.firstinspires.org/robotics/frc", description: "The varsity sport of engineering — build 120-pound robots in 6 weeks with professional mentors. Learn machining, design, programming, and teamwork." },
      { name: "Engineering Summer Programs for Teens", url: "", description: "Many universities (MIT, Stanford, Purdue, Georgia Tech) offer summer engineering camps — design projects, CAD workshops, and lab experiences." },
    ],
    [
      { name: "TED-Ed: How Do Airplanes Fly?", url: "https://ed.ted.com/", type: "video" },
      { name: "To Engineer Is Human by Henry Petroski", url: "", type: "book" },
    ],
  ),

  s(nx(), "p31", "g10",
    "Take the most advanced math and science available — physics and geometry are essential. Continue in FIRST Robotics (FRC) or start a serious engineering project. Deepen CAD skills — learn to create 3D models, assemblies, and engineering drawings with proper dimensions and tolerances. Study thermodynamics basics: heat, work, and energy conversion — the science behind engines, power plants, and refrigerators. Research engineering degree programs: look for ABET-accredited BSME programs. Top schools: MIT, Stanford, Caltech, Georgia Tech, Michigan, Purdue, and many excellent state universities.",
    ["Geometry", "Physics (Honors if available)", "Algebra II (Double up if possible)", "Computer-Aided Design (Fusion 360 / SolidWorks)", "English (Technical Communication)"],
    [
      { name: "FIRST Robotics Competition — Leadership Role", url: "https://www.firstinspires.org/robotics/frc", description: "Take on a mechanical lead role in your FRC team — design drive trains, manipulators, and mechanisms under time pressure with real engineering constraints." },
      { name: "Autodesk Certified User — Fusion 360", url: "https://www.autodesk.com/certification/", description: "Earn an industry-recognized CAD certification — demonstrates professional-level design skills to colleges and future employers." },
    ],
    [
      { name: "Coursera: Introduction to Engineering Mechanics (Georgia Tech)", url: "https://www.coursera.org/learn/engineering-mechanics-statics", type: "course" },
      { name: "The Existential Pleasures of Engineering by Samuel C. Florman", url: "", type: "book" },
    ],
  ),

  s(nx(), "p31", "g11",
    "Take Honors Physics and advanced math — AP Physics if available. Continue FIRST Robotics with a leadership role and document your engineering design process for college applications. Research the FE (Fundamentals of Engineering) exam — you can take it in your senior year of college, but understanding what's on it now helps you focus your studies. Dive deeper into thermodynamics: laws of thermodynamics, heat engines, refrigeration cycles, and energy efficiency. Build a substantial engineering project: a go-kart, a drone, a 3D-printed robotic arm, or a home energy system. Document everything — colleges want to see sustained engineering passion.",
    ["Honors Physics / AP Physics 1", "Algebra II / Pre-Calculus", "Pre-Calculus (or Double Math)", "CAD & Engineering Design (Advanced)", "English (Research & Lab Reports)"],
    [
      { name: "Engineering Design Challenge / Senior Project", url: "", description: "Conceive, design, prototype, and test a significant mechanical project — document the entire engineering design process for college applications." },
      { name: "National Academy of Engineering — EngineerGirl", url: "https://www.engineergirl.org/", description: "Resources, profiles, and programs designed to encourage young women in engineering — scholarships, summer camps, and mentoring." },
    ],
    [
      { name: "Khan Academy: AP Physics 1", url: "https://www.khanacademy.org/science/ap-physics-1", type: "course" },
      { name: "Marks' Standard Handbook for Mechanical Engineers", url: "", type: "book" },
    ],
  ),

  s(nx(), "p31", "g12",
    "Take AP Physics and advanced math — calculus if possible. Mechanical engineering is calculus-based physics applied to real-world problems. Continue your engineering project or competition team and take on the most challenging design problems. Deepen CAD skills — learn finite element analysis (FEA) basics: how engineers simulate stress, heat, and vibration in computer models before building anything. Research ABET-accredited BSME programs. Top choices include MIT, Stanford, Caltech, Michigan, Georgia Tech, Purdue, Illinois, Texas, and many excellent state schools. Some schools offer combined BS/MS programs (5 years) — accelerated paths to advanced credentials.",
    ["AP Physics 1 or C", "Pre-Calculus / AP Calculus AB", "CAD & Simulation (FEA Introduction)", "English (College Application Essays)", "Engineering Design Elective"],
    [
      { name: "FIRST Robotics — Dean's List Award Application", url: "https://www.firstinspires.org/robotics/frc", description: "Apply for the FIRST Dean's List Award — the highest student honor in FIRST, recognizing leadership and engineering contribution. A powerful credential for college applications." },
      { name: "MITES / RSI / Summer Engineering Programs", url: "", description: "Apply to elite summer engineering programs — MIT MITES, Stanford SIMR, RSI, or university engineering camps. Immersive experiences that strengthen college applications." },
    ],
    [
      { name: "ASME — Student Membership (Pre-College)", url: "https://www.asme.org/", type: "program" },
      { name: "The Design of Everyday Things by Don Norman", url: "", type: "book" },
    ],
  ),

  s(nx(), "p31", "g13",
    "The most critical year for college preparation. Complete AP Physics and AP Calculus — strong STEM scores are essential for competitive engineering programs. Finalize your engineering portfolio: CAD models, competition robots, personal projects, and documentation of your design process. Research BSME programs in depth — look at curriculum, research opportunities, co-op programs (alternating semesters of study and paid work), and career placement rates. Co-op programs (like Northeastern, Cincinnati, Purdue, and Georgia Tech) give you up to 18 months of paid engineering experience before graduation. Prepare for the SAT/ACT — engineering schools expect strong math scores (700+ SAT Math or 30+ ACT Math).",
    ["AP Physics C (if available)", "AP Calculus AB/BC", "Engineering Design & Portfolio", "English (Application Essays)", "SAT/ACT Preparation"],
    [
      { name: "ASME — High School Engineering Design Competition", url: "https://www.asme.org/", description: "ASME-sponsored design competitions — solve real engineering problems and present your solution to professional engineers." },
      { name: "Co-Op Program Research — Top Engineering Schools", url: "", description: "Research schools with strong co-op programs (Northeastern, Cincinnati, Purdue, Georgia Tech, Drexel) — graduate with 12-18 months of paid engineering experience." },
    ],
    [
      { name: "ABET — Find Accredited Mechanical Engineering Programs", url: "https://www.abet.org/", type: "article" },
      { name: "Shigley's Mechanical Engineering Design (Preview)", url: "", type: "book" },
    ],
  ),

  s(nx(), "p31", "g14",
    "Apply to ABET-accredited BSME programs. Ensure your applications highlight your engineering projects, CAD skills, and problem-solving experience — not just grades. Complete AP exams — high scores (4 or 5) earn college credit for calculus and physics, which frees up your schedule for advanced engineering electives. Write compelling essays about engineering projects you've built and problems you want to solve. Consider schools with strong co-op programs or undergraduate research opportunities. The best mechanical engineers graduate with both theoretical knowledge and practical experience.",
    ["AP Physics C (Exam)", "AP Calculus BC (Exam)", "Engineering Portfolio (Final)", "English (College Essays)", "CAD / Engineering Elective"],
    [
      { name: "Apply to ABET-Accredited BSME Programs", url: "", description: "Top BSME: MIT, Stanford, Caltech, Michigan, Georgia Tech, Purdue, Illinois, Texas, Cornell, Carnegie Mellon. Consider co-op powerhouses: Northeastern, Cincinnati, Drexel." },
      { name: "NCEES — FE Exam Overview (Preview)", url: "https://ncees.org/engineering/fe/", description: "Learn about the Fundamentals of Engineering exam — the first step toward professional licensure. Plan to take it in your senior year of college." },
    ],
    [
      { name: "NSPE — Professional Engineer Path", url: "https://www.nspe.org/", type: "article" },
      { name: "The Goal by Eliyahu M. Goldratt (Engineering Systems Thinking)", url: "", type: "book" },
    ],
  ),

  s(nx(), "p31", "g15",
    "BS in Mechanical Engineering (BSME) — 4-year ABET-accredited program. Core curriculum: calculus (I-III), differential equations, physics (calculus-based), statics, dynamics, mechanics of materials, thermodynamics, fluid mechanics, heat transfer, machine design, manufacturing processes, and engineering economics. Learn professional software: SolidWorks, ANSYS (FEA), MATLAB, and LabVIEW. Join ASME (American Society of Mechanical Engineers) student chapter. Participate in engineering competitions: Formula SAE, Baja SAE, ASME design competitions, or robotics. Pursue summer internships or co-op rotations — practical experience is just as important as classroom learning. In your senior year, take the FE (Fundamentals of Engineering) exam — the first step toward PE licensure.",
    ["Calculus I-III & Differential Equations", "Physics (Calculus-Based)", "Statics, Dynamics & Mechanics of Materials", "Thermodynamics & Fluid Mechanics", "Machine Design & Manufacturing"],
    [
      { name: "Formula SAE / Baja SAE — Collegiate Design Competition", url: "https://www.sae.org/attend/student-events", description: "Design, build, and race a Formula-style race car or off-road vehicle with a team — the ultimate undergraduate engineering experience. Recruiters love SAE experience." },
      { name: "ASME — Student Chapter & Competitions", url: "https://www.asme.org/membership/student", description: "Join your university's ASME chapter — networking, design competitions, industry speakers, and leadership opportunities." },
    ],
    [
      { name: "FE Exam — NCEES Fundamentals of Engineering", url: "https://ncees.org/engineering/fe/", type: "program" },
      { name: "SolidWorks Student Edition", url: "https://www.solidworks.com/product/students", type: "program" },
    ],
  ),

  s(nx(), "p31", "g16",
    "After BSME: Two paths. **Industry path:** Work as an engineer under a licensed PE for 4 years, then take the PE (Principles and Practice of Engineering) exam to become a licensed Professional Engineer. PEs can stamp and certify engineering drawings — essential in HVAC, construction, energy, and public infrastructure. Many mechanical engineers never pursue a PE if they work in manufacturing, product design, or aerospace where licensure isn't required. **Graduate school path:** MS in Mechanical Engineering (1-2 years) for specialization in robotics, aerospace, biomechanics, energy systems, or materials. Some pursue a combined BS/MS (5-year program). An MS typically increases starting salary by $10,000-$20,000 and opens more R&D positions. The FE exam can be taken before or during this stage.",
    ["Advanced Thermodynamics & Heat Transfer", "Finite Element Analysis & Simulation", "Control Systems & Mechatronics", "Specialization: Robotics / Aerospace / Energy / Bio", "Engineering Ethics & Professional Practice"],
    [
      { name: "FE Exam — Take and Pass", url: "https://ncees.org/engineering/fe/", description: "Pass the Fundamentals of Engineering exam — earn the Engineer-in-Training (EIT) or Engineer Intern (EI) designation. Required before you can take the PE exam." },
      { name: "Industry Internship or First Engineering Position", url: "https://www.engineerjobs.com/", description: "Work under licensed PEs in your chosen industry — the 4 years of progressive engineering experience required for PE licensure." },
    ],
    [
      { name: "PE Mechanical — NCEES Exam Specifications", url: "https://ncees.org/engineering/pe/mechanical/", type: "article" },
      { name: "Machinery's Handbook", url: "", type: "book" },
    ],
  ),

  s(nx(), "p31", "g17",
    "Licensed Professional Engineer (PE): After passing the PE exam, you can stamp engineering drawings and take legal responsibility for designs. This is particularly valuable in HVAC, energy, construction, and consulting. Career paths: 1) Design Engineer — create products, machines, and systems in industries from automotive to medical devices. 2) Project Engineer — manage interdisciplinary engineering projects from concept to production. 3) R&D Engineer — develop new technologies in corporate or government labs. 4) Consulting Engineer — work for a firm that serves multiple clients across industries. 5) Engineering Manager / Director — lead teams and departments. 6) Entrepreneur — start a company to bring an invention to market. For research/academic careers: a Ph.D. in Mechanical Engineering (3-5 years beyond MS) enables university faculty positions, advanced R&D, and national lab research. A Ph.D. in ME is especially valuable in robotics, biomechanics, renewable energy, and nanotechnology — fields where fundamental research drives the next generation of technology.",
    ["PE Licensure — Professional Engineer", "Advanced Engineering Design & Analysis", "Project Management & Leadership", "Specialization Mastery: Robotics / Energy / Aero / Bio", "Industry Standards, Codes & Compliance"],
    [
      { name: "PE Exam — Principles and Practice of Engineering", url: "https://ncees.org/engineering/pe/mechanical/", description: "Pass the PE Mechanical exam in your chosen specialty (HVAC & Refrigeration, Machine Design & Materials, or Thermal & Fluid Systems) to become a licensed Professional Engineer." },
      { name: "ASME — Professional Membership & Leadership", url: "https://www.asme.org/", description: "Active ASME professional membership — conferences, publications, continuing education, and leadership roles that advance the profession." },
    ],
    [
      { name: "Journal of Mechanical Design (ASME)", url: "https://asmedigitalcollection.asme.org/mechanicaldesign", type: "article" },
      { name: "Engineering News-Record (ENR)", url: "https://www.enr.com/", type: "article" },
    ],
  ),

];
