/**
 * Batch 4 — p22 Firefighter, p23 Marine Biologist, p24 Marketing Manager,
 *          p25 Social Worker, p26 Plumber
 * 
 * All 17 grade levels per profession. IDs: rs870–rs954.
 * 
 * Import: import { newProfessionsBatch4 } from './new-professions-batch4';
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

let n = 870;
function nx(): string { return "rs" + (n++); }

export const newProfessionsBatch4: RoadmapStep[] = [

  // ========================================================================
  // p22 — FIREFIGHTER
  // ========================================================================

  s(nx(), "p22", "g1",
    "Firefighting starts with courage, teamwork, and a desire to help others. At this age, children love big trucks, heroes, and imaginative rescue play. Encourage dramatic play with firefighter costumes and toy trucks. Talk about community helpers and what firefighters do — they're not just fire fighters; they rescue people, help in emergencies, and keep communities safe. The seeds of service are planted early.",
    ["Imaginative Play (Rescue Scenarios)", "Gross Motor Skills (Climbing, Running)", "Community Helpers", "Social-Emotional Learning (Helping Others)"],
    [
      { name: "Visit a Local Fire Station", url: "", description: "Most fire stations offer free tours for families — children can see real fire trucks, meet firefighters, and learn about the gear." },
      { name: "Sparky the Fire Dog (NFPA)", url: "https://www.sparky.org/", description: "Free games, activities, and videos from the National Fire Protection Association teaching fire safety to young children." },
    ],
    [
      { name: "Curious George and the Firefighters by H.A. Rey", url: "", type: "book" },
      { name: "Big Frank's Fire Truck by Leslie McGuire", url: "", type: "book" },
    ],
  ),

  s(nx(), "p22", "g2",
    "Build physical confidence and learn about safety. Practice stop, drop, and roll — the first fire safety skill every child should know. Learn about 9-1-1 and when to call for help. Firefighters need strong bodies, so stay active with running, climbing, and playground play. Learn about fire safety at home: smoke detectors, escape plans, and meeting spots.",
    ["Counting & Numbers", "Fire Safety Basics", "Physical Movement & Coordination", "Following Multi-Step Instructions"],
    [
      { name: "NFPA — Learn Not to Burn Program", url: "https://www.nfpa.org/Public-Education/Teaching-tools/Learn-Not-to-Burn", description: "Free fire safety curriculum for kindergarteners teaching essential survival skills through songs and activities." },
      { name: "Ready.gov for Kids", url: "https://www.ready.gov/kids", description: "FEMA's disaster preparedness site for children — games and activities about emergencies and safety." },
    ],
    [
      { name: "Stop Drop and Roll by Margery Cuyler", url: "", type: "book" },
      { name: "Firefighters A to Z by Chris L. Demarest", url: "", type: "book" },
    ],
  ),

  s(nx(), "p22", "g3",
    "Build reading and math foundations — firefighters read equipment manuals, calculate water pressure, and follow detailed protocols. Stay physically active — firefighters must pass demanding fitness tests. Practice memorizing your home address and a parent's phone number. Learn basic first aid: cleaning a scrape, applying a bandage, and when to get an adult.",
    ["Reading & Phonics", "Math (Addition & Subtraction)", "Fire Safety & Prevention", "Physical Education"],
    [
      { name: "American Red Cross — Prepare with Pedro", url: "https://www.redcross.org/get-help/disaster-relief-and-recovery-services/pedro.html", description: "Free disaster preparedness program for children featuring Pedro the Penguin — teaches emergency readiness." },
      { name: "Youth Sports (Soccer, Gymnastics, Swimming)", url: "", description: "Team and individual sports build the cardiovascular fitness, strength, and coordination essential for firefighting." },
    ],
    [
      { name: "Flat Stanley and the Fire Station by Jeff Brown", url: "", type: "book" },
      { name: "BrainPOP Jr.: Fire Safety", url: "https://jr.brainpop.com/health/safety/firesafety/", type: "video" },
    ],
  ),

  s(nx(), "p22", "g4",
    "Deepen reading skills — firefighters must read and understand technical manuals, maps, and emergency protocols. Build physical strength through sports and active play. Learn about home fire escape planning — map your home, identify two exits per room, and practice your family drill. Learn the science of fire: the fire triangle (heat, fuel, oxygen). Understanding how fire works is the first step to fighting it.",
    ["Reading Comprehension", "Math (Measurement & Data)", "Science (The Fire Triangle)", "Physical Education"],
    [
      { name: "Create a Family Fire Escape Plan", url: "https://www.nfpa.org/Public-Education/Teaching-tools/Community-tool-kits/FPW/How-to-make-a-home-fire-escape-plan", description: "Map your home with two exits per room, pick a meeting spot, and practice — the NFPA provides free planning guides." },
      { name: "Kids' Fire Camp (Local Fire Departments)", url: "", description: "Many fire departments offer summer Junior Firefighter camps — hands-on activities, hose practice, and fire safety education for elementary students." },
    ],
    [
      { name: "DK Eyewitness: Fire", url: "", type: "book" },
      { name: "BrainPOP: Fire", url: "https://www.brainpop.com/science/energy/fire/", type: "video" },
    ],
  ),

  s(nx(), "p22", "g5",
    "Math expands to multiplication and division — firefighters calculate pump pressures, hose lengths, and water flow rates. Stay active in organized sports and fitness activities. Learn about different types of emergencies: fires, medical calls, car accidents, natural disasters. Firefighters respond to all of them. Practice teamwork — firefighting is never a solo activity.",
    ["Math (Multiplication & Division)", "Life Science (Human Body & Fitness)", "Health & Safety", "Physical Education"],
    [
      { name: "Boy Scouts / Girl Scouts — First Aid & Safety Badges", url: "https://www.scouting.org/", description: "Earn first aid, fire safety, and emergency preparedness badges — structured youth programs building practical life-saving skills." },
      { name: "Community Emergency Response Team (CERT) — Youth Programs", url: "https://www.ready.gov/cert", description: "Some CERT programs offer youth training in basic disaster response, first aid, and fire safety." },
    ],
    [
      { name: "The Kids' Guide to First Aid by Karen Buhler Gale", url: "", type: "book" },
      { name: "National Geographic Kids: Extreme Weather", url: "https://kids.nationalgeographic.com/science/topic/weather", type: "article" },
    ],
  ),

  s(nx(), "p22", "g6",
    "Develop research and communication skills — firefighters write reports, give public education talks, and communicate clearly in high-stress situations. Learn about human anatomy and basic first aid. Practice public speaking by presenting a fire safety lesson to younger students. Study local geography — firefighters must know every street in their district.",
    ["English Language Arts (Research & Speaking)", "Math (Fractions & Geometry)", "Life Science (Human Body)", "Geography (Local Map Reading)"],
    [
      { name: "Junior Firefighter Programs (Age 12+)", url: "https://www.nvfc.org/programs/junior-firefighter-program/", description: "National Volunteer Fire Council's Junior Firefighter program — hands-on training for youth 12+ interested in fire and emergency services." },
      { name: "CPR and First Aid Certification (Youth)", url: "https://www.redcross.org/take-a-class/cpr", description: "American Red Cross CPR/AED and First Aid courses — some allow youth 12+ to certify; an essential skill for aspiring firefighters." },
    ],
    [
      { name: "The Firefighter's Handbook: Essentials of Firefighting", url: "", type: "book" },
      { name: "Mystery Science: Chemical Reactions", url: "https://mysteryscience.com/", type: "course" },
    ],
  ),

  s(nx(), "p22", "g7",
    "Math ramps up with pre-algebra — firefighters use math for hydraulic calculations and equipment operation. Focus on physical fitness: start a regular exercise routine including cardio, strength, and flexibility training. Firefighters must pass a Candidate Physical Ability Test (CPAT). Learn about fire chemistry — how different materials burn and how extinguishing agents work.",
    ["Math (Pre-Algebra & Data)", "General Science (Chemistry Focus)", "Physical Education (Fitness Training)", "English (Technical Communication)"],
    [
      { name: "Explorer Post — Fire Service (Age 14+)", url: "https://www.exploring.org/fire-service/", description: "Fire Service Exploring through Learning for Life — ride-alongs, training drills, and mentorship from career firefighters for teens 14+." },
      { name: "Swim Team / Cross Country / Wrestling", url: "", description: "Sports that build exceptional cardiovascular endurance and full-body strength — exactly what firefighters need." },
    ],
    [
      { name: "Khan Academy: Chemistry", url: "https://www.khanacademy.org/science/chemistry", type: "course" },
      { name: "YouTube: Firefighter Training Videos (Don McNea Fire School)", url: "https://www.fireprep.com/", type: "video" },
    ],
  ),

  s(nx(), "p22", "g8",
    "Take pre-algebra seriously — math is essential for fire science and equipment operation. Study biology: understanding how smoke and heat affect the human body is crucial for firefighter safety. Continue physical fitness training with measurable goals. Learn about the Incident Command System (ICS) — how emergency responders organize at large incidents. Consider joining a Junior Firefighter program.",
    ["Pre-Algebra", "Life Science (Human Biology)", "Physical Education (Strength & Conditioning)", "English (Clear Communication)"],
    [
      { name: "NFPA — Learn About Firefighting Careers", url: "https://www.nfpa.org/Public-Education/Careers-in-fire-and-life-safety", description: "Explore fire service career paths — structural, wildland, airport, hazmat, and fire prevention specialties." },
      { name: "Local Junior Firefighter Program", url: "", description: "Join a department's junior program — real training in hose handling, ladder operations, and equipment maintenance alongside volunteer firefighters." },
    ],
    [
      { name: "Crash Course: Anatomy & Physiology", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtOAKed_MxxWBNaPno5h3Zs8", type: "video" },
      { name: "NFPA 1001 — Standard for Firefighter Professional Qualifications (Overview)", url: "https://www.nfpa.org/codes-and-standards/1/0/0/1/nfpa-1001", type: "article" },
    ],
  ),

  s(nx(), "p22", "g9",
    "Take algebra and the most advanced science available. Biology and chemistry are both important — fire science combines chemistry (how things burn) and biology (how the body responds to heat, smoke, and stress). Continue training with a Junior Firefighter program or Explorer Post. Start learning about emergency medical services (EMS) — many firefighters are also EMTs.",
    ["Algebra I", "Life Science / Biology", "English (Technical Reading)", "Physical Education (Advanced Fitness)"],
    [
      { name: "Fire & EMS Exploring (Learning for Life)", url: "https://www.exploring.org/fire-service/", description: "Career exploration program for ages 14-20 — hands-on firefighting and EMS training, ride-alongs, and national competitions." },
      { name: "Local Fire Department Volunteer Opportunities", url: "", description: "Some volunteer fire departments allow teens to help with station maintenance, public education events, and administrative tasks." },
    ],
    [
      { name: "TED-Ed: The Science of Fire", url: "https://ed.ted.com/", type: "video" },
      { name: "Essentials of Fire Fighting (IFSTA) — Preview", url: "https://www.ifsta.org/", type: "book" },
    ],
  ),

  s(nx(), "p22", "g10",
    "Take the most advanced science and math available. If your school offers an EMT or health sciences program, enroll — many high schools now offer EMT-Basic certification. Continue fire service explorer or junior firefighter programs. Start preparing for the firefighter written exam: reading comprehension, math, mechanical reasoning, and situational judgment.",
    ["Honors Biology", "Geometry / Algebra II", "Health Science / EMT Elective", "English (Report Writing)", "Physical Education (CPAT Prep)"],
    [
      { name: "EMT-Basic Certification (High School Programs)", url: "https://www.nremt.org/", description: "Many high schools and community colleges offer EMT courses — get certified before graduating. Fire departments strongly prefer EMT-certified candidates." },
      { name: "Firefighter Written Exam Prep", url: "https://www.fireprep.com/", description: "Prepare for the firefighter entrance exam — reading comprehension, math, mechanical aptitude, and situational judgment practice." },
    ],
    [
      { name: "CPAT — Candidate Physical Ability Test Overview", url: "https://www.iaff.org/cpat/", description: "Study the CPAT events — stair climb, hose drag, equipment carry, ladder raise, forcible entry, search, rescue, and ceiling breach." },
      { name: "Khan Academy: Physics", url: "https://www.khanacademy.org/science/physics", type: "course" },
    ],
  ),

  s(nx(), "p22", "g11",
    "Take chemistry and algebra — fire science builds on chemistry fundamentals. Start EMT-Basic training if available. Continue physical conditioning with a focus on CPAT-specific exercises. Research firefighter career paths: structural (city departments), wildland (forest service, BLM), airport, industrial, and military firefighting. Take practice written exams regularly.",
    ["Chemistry", "Algebra II", "Health Science / EMT Coursework", "English (Technical Writing)", "Physical Education (CPAT Training)"],
    [
      { name: "Fire Science Summer Programs (Community Colleges)", url: "", description: "Some community colleges offer summer fire science intro courses for high school students — earn college credit while exploring the career." },
      { name: "Volunteer Firefighter (Age 16+ in some states)", url: "https://www.nvfc.org/", description: "Many volunteer fire departments accept members at 16+ — real firefighter training, calls, and experience while still in high school." },
    ],
    [
      { name: "Norman Hall's Firefighter Exam Preparation Book", url: "", type: "book" },
      { name: "FEMA — National Incident Management System (NIMS) ICS-100 (Free)", url: "https://training.fema.gov/nims/", type: "course" },
    ],
  ),

  s(nx(), "p22", "g12",
    "If available, take AP Chemistry or AP Biology. Complete EMT-Basic certification — this is a major advantage when applying for firefighter positions. Continue rigorous physical training toward CPAT standards. Research fire academies and community college fire science programs. Consider military service — many career firefighters served in the military first, gaining discipline and emergency experience.",
    ["AP Chemistry (if available)", "AP Biology / Anatomy", "Pre-Calculus", "EMT Certification Course", "English (Communication Skills)"],
    [
      { name: "Complete EMT-Basic Certification", url: "https://www.nremt.org/", description: "National Registry EMT certification is a prerequisite for most career fire departments — get certified now for a head start." },
      { name: "Ride-Along Program with Local Fire Department", url: "", description: "Contact your local fire department about ride-along programs — observe firefighters responding to real emergencies." },
    ],
    [
      { name: "ACE Personal Trainer Manual (Fitness Knowledge)", url: "", type: "book" },
      { name: "FEMA ICS-200 (Free Online)", url: "https://training.fema.gov/nims/", type: "course" },
    ],
  ),

  s(nx(), "p22", "g13",
    "The most critical year. Maintain excellent physical fitness — train for the CPAT specifically. Complete any remaining EMT requirements. Take the most advanced science courses available. Research firefighter hiring processes: written exam, CPAT, oral board interview, background check, psychological evaluation, and medical exam. Start preparing for each phase. Consider enlisting in the military after graduation — veterans get hiring preference at most departments.",
    ["AP Chemistry / Biology", "AP Calculus", "Health Science Elective", "English (Interview Prep)", "Physical Education (CPAT Mastery)"],
    [
      { name: "Firefighter Oral Board Interview Prep", url: "https://www.fireprep.com/", description: "Practice the oral board interview — the most important part of the hiring process. Study common questions and practice structured responses." },
      { name: "Military Recruiter Consultation", url: "", description: "Meet with military recruiters (especially Air Force, Navy firefighting MOS) — military firefighters get world-class training and veteran hiring preference." },
    ],
    [
      { name: "Smoke Your Firefighter Interview — Paul Lepore", url: "", type: "book" },
      { name: "FEMA Professional Development Series (Free)", url: "https://training.fema.gov/", type: "course" },
    ],
  ),

  s(nx(), "p22", "g14",
    "Apply to fire departments, community college fire science programs, or the military. Take firefighter written exams — many departments test annually with thousands of applicants for a handful of spots. If pursuing college, look at fire science or fire protection engineering associate's and bachelor's degrees. Some four-year universities offer fire administration or fire protection engineering programs. Keep EMT certification active and maintain peak physical condition.",
    ["AP Chemistry (Exam)", "AP Biology (Exam)", "Fire Science / EMT Course (if available)", "English (Application Essays)", "Physical Education (Peak Fitness)"],
    [
      { name: "Apply to Fire Departments", url: "", description: "Monitor city, county, and state fire department hiring announcements — applications are competitive; apply widely and persistently." },
      { name: "Enroll in a Fire Academy", url: "", description: "Many community colleges offer Firefighter I & II academies that prepare you for certification and give you a hiring edge." },
    ],
    [
      { name: "FEMA Emergency Management Institute (Free Courses)", url: "https://training.fema.gov/emi.aspx", type: "course" },
      { name: "Firefighter Nation (Community & Resources)", url: "https://www.firefighternation.com/", type: "article" },
    ],
  ),

  s(nx(), "p22", "g15",
    "Path A: Earn an Associate's or Bachelor's degree in Fire Science, Fire Protection Engineering, Emergency Management, or a related field while working as a volunteer or part-time firefighter. Path B: Military service as a firefighter. Path C: Direct hire — pass the written exam, CPAT, and interview process; then complete the department's fire academy (typically 12-16 weeks). Most career firefighters follow Path A or B before landing a permanent position. Maintain EMT certification (many departments now require Paramedic).",
    ["Fire Science / Fire Protection", "Emergency Medical Services (EMT/Paramedic)", "Chemistry of Fire & Hazardous Materials", "Building Construction & Fire Behavior", "Physical Fitness & Wellness"],
    [
      { name: "IAFF — International Association of Fire Fighters", url: "https://www.iaff.org/", description: "The largest firefighter union — student and apprentice membership, job boards, and advocacy resources." },
      { name: "Firefighter Academy / Firefighter I & II Certification", url: "", description: "Complete a state-certified fire academy covering fire behavior, PPE, search & rescue, ventilation, ladders, hose operations, and live fire training." },
    ],
    [
      { name: "IFSTA Essentials of Fire Fighting (7th Ed)", url: "https://www.ifsta.org/", type: "book" },
      { name: "FEMA NIMS ICS-300 & ICS-400 (Advanced)", url: "https://training.fema.gov/nims/", type: "course" },
    ],
  ),

  s(nx(), "p22", "g16",
    "Fire service career paths: 1) Firefighter → Engineer/Driver Operator → Lieutenant → Captain → Battalion Chief → Assistant Chief → Fire Chief. Advancement requires additional certifications, leadership training, and usually an associate's or bachelor's degree. 2) Specialized roles: Hazardous Materials Technician, Technical Rescue (confined space, high-angle, swift water), Fire Investigator, Fire Inspector, or Fire Marshal. 3) Wildland firefighting: Hotshot crews, smokejumpers, and helitack for the most intense wildland firefighting. A Master's in Fire Protection Engineering, Emergency Management, or Public Administration opens doors to leadership.",
    ["Fire Officer I/II/III Certification", "Advanced Emergency Management", "Fire Investigation / Fire Prevention", "Public Administration / Leadership", "Specialized: Hazmat / Technical Rescue"],
    [
      { name: "National Fire Academy (NFA)", url: "https://www.usfa.fema.gov/training/nfa/", description: "Free training for career and volunteer firefighters — executive fire officer program, specialized technical courses, and leadership development." },
      { name: "IAFF Leadership Training", url: "https://www.iaff.org/", description: "Union leadership programs, political action training, and peer support resources for career advancement." },
    ],
    [
      { name: "NFPA Fire Protection Handbook", url: "https://www.nfpa.org/", type: "book" },
      { name: "Fire Engineering Magazine", url: "https://www.fireengineering.com/", type: "article" },
    ],
  ),

  s(nx(), "p22", "g17",
    "For academic/research careers: a Ph.D. in Fire Protection Engineering, Fire Science, or Emergency Management. Institutions like Worcester Polytechnic Institute (WPI) and the University of Maryland offer doctoral programs in fire protection engineering. The National Fire Academy's Executive Fire Officer (EFO) program is the pinnacle of professional development for fire service leaders, equivalent to a graduate-level credential. Alternatively, pursue the Chief Fire Officer (CFO) designation through the Center for Public Safety Excellence.",
    ["Fire Protection Engineering Ph.D.", "Dissertation in Fire Science", "Advanced Research Methods", "Fire Service Leadership", "Teaching & Mentoring"],
    [
      { name: "National Fire Academy — Executive Fire Officer Program", url: "https://www.usfa.fema.gov/training/nfa/programs/efop.html", description: "Four-year leadership program — the highest professional credential in the American fire service, focusing on executive-level management and research." },
      { name: "Center for Public Safety Excellence — CFO Designation", url: "https://www.cpse.org/", description: "Chief Fire Officer (CFO) designation — validates executive-level competency in fire and emergency services leadership." },
    ],
    [
      { name: "Fire Technology (Springer Journal)", url: "https://www.springer.com/journal/10694", type: "article" },
      { name: "SFPE — Society of Fire Protection Engineers", url: "https://www.sfpe.org/", type: "article" },
    ],
  ),

  // ========================================================================
  // p23 — MARINE BIOLOGIST
  // ========================================================================

  s(nx(), "p23", "g1",
    "Marine biology begins with wonder and love for the ocean! At this age, children are mesmerized by water, waves, and sea creatures. Encourage beach trips, aquarium visits, and water play. Read books about fish, whales, and ocean animals. Every marine biologist started as a child who was fascinated by what lives beneath the waves. Collect shells, watch tide pools, and talk about the amazing animals that live in the sea.",
    ["Nature Exploration (Beach/Water)", "Counting (Shells, Fish)", "Colors & Shapes (Sea Life)", "Storytelling (Ocean Stories)"],
    [
      { name: "Monterey Bay Aquarium — Live Cams & Kids' Resources", url: "https://www.montereybayaquarium.org/animals/live-cams", description: "Free live streams of sea otters, penguins, sharks, and jellyfish — plus interactive activities and games for young ocean lovers." },
      { name: "National Geographic Kids — Ocean Animals", url: "https://kids.nationalgeographic.com/animals/", description: "Explore ocean creatures through photos, videos, and fun facts designed for young children." },
    ],
    [
      { name: "Commotion in the Ocean by Giles Andreae", url: "", type: "book" },
      { name: "The Rainbow Fish by Marcus Pfister", url: "", type: "book" },
    ],
  ),

  s(nx(), "p23", "g2",
    "Deepen the connection with the ocean. Visit beaches, aquariums, and tide pools whenever possible. Learn about different ocean animals — fish, mammals (dolphins, whales), reptiles (sea turtles), and invertebrates (octopus, crabs). Practice counting and sorting with shells. Talk about ocean conservation: why we don't litter at the beach and how trash affects marine animals.",
    ["Science (Ocean Life)", "Counting & Sorting (Shells)", "Geography (Oceans & Continents)", "Environmental Awareness"],
    [
      { name: "NOAA — Ocean Exploration for Kids", url: "https://oceanexplorer.noaa.gov/edu/welcome.html", description: "Interactive maps, videos, and activities introducing ocean science and exploration for young children." },
      { name: "Virtual Field Trip — Georgia Aquarium", url: "https://www.georgiaaquarium.org/", description: "Online tours and live cams of whale sharks, beluga whales, and manta rays — the largest aquarium in the Western Hemisphere." },
    ],
    [
      { name: "A House for Hermit Crab by Eric Carle", url: "", type: "book" },
      { name: "Ocean: A Visual Encyclopedia (DK)", url: "", type: "book" },
    ],
  ),

  s(nx(), "p23", "g3",
    "Build reading and math skills — marine biologists read scientific papers and analyze data. Start a marine life journal: draw and describe ocean animals you see at the aquarium or beach. Learn about ocean habitats: coral reefs, kelp forests, the deep sea, and tide pools. Start learning about how ocean animals eat, breathe, and move — the beginnings of marine ecology.",
    ["Reading & Phonics", "Math (Counting & Measuring)", "Science (Marine Habitats)", "Writing (Nature Journal)"],
    [
      { name: "Smithsonian Ocean — Find Your Blue", url: "https://ocean.si.edu/", description: "Free educational resources from the Smithsonian about ocean life, ecosystems, and conservation." },
      { name: "Adopt a Marine Animal (Symbolic)", url: "https://www.worldwildlife.org/", description: "'Adopt' a sea turtle, dolphin, or whale through WWF — learn about your species and follow conservation updates." },
    ],
    [
      { name: "National Geographic Readers: Sharks! by Anne Schreiber", url: "", type: "book" },
      { name: "BrainPOP Jr.: Ocean Habitats", url: "https://jr.brainpop.com/science/habitats/oceanhabitats/", type: "video" },
    ],
  ),

  s(nx(), "p23", "g4",
    "Deepen reading comprehension with nonfiction books about the ocean. Learn about the water cycle and how oceans drive climate. Start learning about marine food chains: from plankton to whales. Practice measurement: water temperature, tide heights, and animal sizes. Keep adding to your marine life journal — marine biology is built on careful observation and recording.",
    ["Reading Comprehension", "Math (Measurement & Data)", "Science (Ecosystems & Food Chains)", "Art (Drawing Marine Life)"],
    [
      { name: "Project WET — Water Education", url: "https://www.projectwet.org/", description: "Hands-on water science activities — learn about the water cycle, watersheds, and how oceans connect to all life." },
      { name: "Tide Pool Exploration (If Near Coast)", url: "", description: "Visit tide pools at low tide — observe sea anemones, crabs, starfish, and other intertidal creatures in their natural habitat." },
    ],
    [
      { name: "DK Eyewitness: Ocean", url: "", type: "book" },
      { name: "BrainPOP: Oceans", url: "https://www.brainpop.com/science/earthsystem/oceans/", type: "video" },
    ],
  ),

  s(nx(), "p23", "g5",
    "Science deepens — learn about marine ecosystems in detail: coral reefs, open ocean, deep sea, and coastlines. Math skills (multiplication, division) are used to calculate population data and measurements. Start learning about marine conservation issues: overfishing, plastic pollution, and climate change. Conduct a local water quality project — test a nearby stream, pond, or beach water.",
    ["Life Science (Marine Ecosystems)", "Math (Multiplication & Division)", "Earth Science (Climate & Oceans)", "Writing (Research Notes)"],
    [
      { name: "4-H Marine Science Programs", url: "https://4-h.org/programs/environmental-science/", description: "Youth programs in marine ecology, water quality, and environmental stewardship — hands-on science projects." },
      { name: "Ocean Conservancy — International Coastal Cleanup (Junior)", url: "https://oceanconservancy.org/trash-free-seas/international-coastal-cleanup/", description: "Participate in a beach or waterway cleanup — data collected contributes to real ocean conservation research." },
    ],
    [
      { name: "The Magic School Bus: On the Ocean Floor", url: "", type: "book" },
      { name: "Crash Course Kids: Earth Science — Water", url: "https://www.youtube.com/playlist?list=PLhz12vamHOnZQeDXNV2Z2W4PE7s86SBp3", type: "video" },
    ],
  ),

  s(nx(), "p23", "g6",
    "Expand research skills — research a marine species in depth: its habitat, diet, life cycle, and conservation status. Strengthen math: fractions and geometry are used in marine mapping and population modeling. Learn about ocean currents, tides, and how the moon affects the sea. Join a citizen science project focused on marine environments.",
    ["English (Research Writing)", "Math (Fractions & Geometry)", "Earth Science (Oceanography)", "Civics (Conservation Policy Intro)"],
    [
      { name: "SciStarter — Marine Citizen Science Projects", url: "https://scistarter.org/", description: "Find real citizen science projects — count sea turtles, track whale migrations, or monitor coral reef health." },
      { name: "Science Olympiad — Oceanography Event", url: "https://www.soinc.org/", description: "Competitive event covering ocean chemistry, geology, currents, and marine biology — build deep ocean science knowledge." },
    ],
    [
      { name: "Tracking Trash: Flotsam, Jetsam, and the Science of Ocean Motion by Loree Griffin Burns", url: "", type: "book" },
      { name: "Mystery Science: Water & Oceans", url: "https://mysteryscience.com/", type: "course" },
    ],
  ),

  s(nx(), "p23", "g7",
    "Math ramps up with pre-algebra — marine biologists use statistics and modeling for population studies and data analysis. Deepen oceanography knowledge: chemical oceanography (what seawater contains), physical oceanography (currents, waves, tides), and biological oceanography (marine life). Join an environmental or marine club. Visit an aquarium and talk to the marine biologists about their work.",
    ["Math (Pre-Algebra & Data)", "Earth Science (Oceanography)", "English (Science Communication)", "Civics (Environmental Issues)"],
    [
      { name: "NOAA — Ocean Guardian Programs", url: "https://sanctuaries.noaa.gov/education/ocean_guardian/", description: "School and youth programs promoting ocean conservation and stewardship through hands-on projects and education." },
      { name: "Marine Biology Summer Camps (Coastal Universities)", url: "", description: "Many universities offer summer marine biology camps for middle schoolers — hands-on field work, lab activities, and boat trips." },
    ],
    [
      { name: "Khan Academy: Earth Science", url: "https://www.khanacademy.org/science/middle-school-earth-and-space-science", type: "course" },
      { name: "The Boy Who Harnessed the Wind (Young Readers) — William Kamkwamba", url: "", type: "book" },
    ],
  ),

  s(nx(), "p23", "g8",
    "Take the most advanced science available — earth science, pre-algebra, and life science. Learn about marine biology research methods: how scientists study the ocean (ROVs, sonar, tagging, DNA analysis). Start following ocean news and science. Develop a science fair project related to marine science — test water quality, study plankton under a microscope, or model ocean acidification.",
    ["Pre-Algebra", "Earth & Life Science", "English (Scientific Reading)", "Computer Skills (Data Analysis)"],
    [
      { name: "NOAA — Students at Sea", url: "https://oceanexplorer.noaa.gov/edu/", description: "Follow NOAA scientists on real research expeditions — live updates, photos, and educational content from ocean exploration missions." },
      { name: "National Ocean Sciences Bowl (NOSB) Prep", url: "https://nosb.org/", description: "Academic competition covering ocean biology, chemistry, geology, physics, and technology — start studying for high school competition." },
    ],
    [
      { name: "Crash Course: Ecology", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtNdTKZkV_GiIYXpV9w4WxbX", type: "video" },
      { name: "The Soul of an Octopus — Sy Montgomery (Adapted)", url: "", type: "book" },
    ],
  ),

  s(nx(), "p23", "g9",
    "Take algebra and the most advanced life/earth science available. Start learning about marine taxonomy — how scientists classify the incredible diversity of ocean life. Join or start an environmental/marine club. Research different marine biology careers: research scientist, aquarium biologist, conservation biologist, fisheries manager, marine mammalogist, and more.",
    ["Algebra I", "Life Science / Biology", "Earth Science / Oceanography", "English (Research & Writing)"],
    [
      { name: "Scripps Institution of Oceanography — K-12 Programs", url: "https://scripps.ucsd.edu/", description: "Educational outreach from one of the world's premier oceanographic institutions — programs for students interested in marine science." },
      { name: "Marine Advanced Technology Education (MATE) ROV Competition", url: "https://materovcompetition.org/", description: "Design and build underwater robots — combines marine science, engineering, and technology in an exciting competition." },
    ],
    [
      { name: "TED-Ed: Why Are Fish Fish-Shaped?", url: "https://ed.ted.com/", type: "video" },
      { name: "World Without Fish — Mark Kurlansky", url: "", type: "book" },
    ],
  ),

  s(nx(), "p23", "g10",
    "Take the most advanced science available — Honors Biology and Chemistry. Marine biology is built on biology and chemistry foundations. Learn about marine conservation issues in depth: coral bleaching, overfishing, ocean acidification, and plastic pollution. Start scuba diving certification if age-eligible (many certifying agencies start at ages 10-12 for junior certifications).",
    ["Honors Biology", "Algebra / Geometry", "Chemistry", "English (Scientific Communication)", "Computer Skills (Data Analysis)"],
    [
      { name: "PADI Junior Open Water Diver (Age 10+)", url: "https://www.padi.com/courses/junior-open-water", description: "Get scuba certified — the essential skill for field marine biologists. Junior certification available starting at age 10." },
      { name: "Ocean Research College Academy (ORCA) or Similar Programs", url: "", description: "Search for marine-focused high school programs or early college programs where you can study marine science intensively." },
    ],
    [
      { name: "Coursera: Marine Biology (American Museum of Natural History)", url: "https://www.coursera.org/learn/marine-biology", type: "course" },
      { name: "The Sea Around Us — Rachel Carson", url: "", type: "book" },
    ],
  ),

  s(nx(), "p23", "g11",
    "Take Honors Biology and AP Environmental Science if available. Start building a strong STEM GPA — marine biology programs are competitive. Get scuba certified (or advance your certification). Volunteer at a local aquarium, marine mammal rescue center, or conservation organization. Research undergraduate marine biology programs: look for schools with marine labs, research vessels, and coastal locations.",
    ["Honors Biology", "Algebra II / Geometry", "AP Environmental Science / Chemistry", "English (Environmental Writing)", "Statistics"],
    [
      { name: "Sea Turtle / Marine Mammal Rescue Volunteer", url: "", description: "Volunteer at marine animal rescue and rehabilitation centers — hands-on experience caring for sea turtles, seals, dolphins, and other marine life." },
      { name: "Marine Science Summer Programs (Duke, UCLA, Univ. of Miami, etc.)", url: "", description: "University-based marine science summer camps and research programs for high school students — field work, lab research, and mentorship." },
    ],
    [
      { name: "Khan Academy: AP Environmental Science", url: "https://www.khanacademy.org/science/ap-college-environmental-science", type: "course" },
      { name: "Song for the Blue Ocean — Carl Safina", url: "", type: "book" },
    ],
  ),

  s(nx(), "p23", "g12",
    "Take AP Biology and AP Environmental Science if available. Strengthen chemistry — ocean chemistry is a core marine biology discipline. Continue volunteering in marine-related programs. Learn basic GIS (Geographic Information Systems) — marine biologists use GIS for habitat mapping and species tracking. Research colleges: the best marine biology programs are usually at coastal universities with dedicated marine labs.",
    ["AP Biology", "AP Environmental Science", "Chemistry", "Pre-Calculus", "English (Technical Writing)"],
    [
      { name: "NOAA — Student Opportunities & Internships", url: "https://www.noaa.gov/education/student-opportunities", description: "High school internships, scholarships, and programs with NOAA — work alongside marine scientists on real research." },
      { name: "National Ocean Sciences Bowl (NOSB)", url: "https://nosb.org/", description: "Compete in the premier ocean science academic competition — teams answer buzzer questions on all aspects of ocean science." },
    ],
    [
      { name: "QGIS (Free GIS Software)", url: "https://www.qgis.org/", type: "program" },
      { name: "The Log from the Sea of Cortez — John Steinbeck", url: "", type: "book" },
    ],
  ),

  s(nx(), "p23", "g13",
    "The most critical year for college preparation. Take AP Biology, AP Environmental Science, and AP Chemistry. Pursue leadership in marine/environmental clubs. Conduct an independent research project on a marine topic. Research colleges: top choices include UC San Diego (Scripps), University of Miami (Rosenstiel), Duke (Marine Lab), University of Washington, and Oregon State. Look for programs with semester-at-sea, research cruises, and dedicated marine stations.",
    ["AP Biology", "AP Environmental Science", "AP Chemistry", "AP Calculus AB", "GIS / Data Science Elective"],
    [
      { name: "Scripps Student Research Programs (Prep)", url: "https://scripps.ucsd.edu/", description: "Research summer programs and internships at Scripps Institution of Oceanography — one of the world's leading ocean research centers." },
      { name: "Marine Conservation Volunteer Abroad (Teen Programs)", url: "", description: "Programs like Broadreach or Sea|mester offer teen marine science expeditions — field research, diving, and conservation work." },
    ],
    [
      { name: "Coursera: Oceanography (University of Barcelona)", url: "https://www.coursera.org/learn/oceanography", type: "course" },
      { name: "Four Fish — Paul Greenberg", url: "", type: "book" },
    ],
  ),

  s(nx(), "p23", "g14",
    "Apply to universities with strong marine biology, oceanography, or marine science programs. Complete AP exams — high scores earn college credit. Some schools offer unique marine programs like Williams-Mystic (semester at sea) or SEA Semester. Write compelling essays about your passion for the ocean and specific marine interests. Consider schools with strong field components and study-abroad in critical marine ecosystems (Galápagos, Great Barrier Reef).",
    ["AP Biology (Exam)", "AP Environmental Science (Exam)", "AP Chemistry (Exam)", "AP Calculus BC", "English (College Essays)"],
    [
      { name: "Apply to Marine Biology Programs", url: "", description: "Top programs: UC San Diego (Scripps), University of Miami (Rosenstiel), Duke, University of Washington, Oregon State, UC Santa Barbara, University of Hawaii at Manoa." },
      { name: "Advance Scuba Certification", url: "https://www.padi.com/", description: "Get Advanced Open Water and specialty certifications (Scientific Diver, Rescue Diver) — essential for field marine biology." },
    ],
    [
      { name: "MARUM — Center for Marine Environmental Sciences", url: "https://www.marum.de/", type: "article" },
      { name: "NOAA Fisheries — Career Information", url: "https://www.fisheries.noaa.gov/", type: "article" },
    ],
  ),

  s(nx(), "p23", "g15",
    "Major in Marine Biology, Marine Science, Oceanography, Biology with marine concentration, or Environmental Science. Core coursework: marine ecology, biological oceanography, marine invertebrate zoology, ichthyology, marine mammalogy, and statistics. Participate in field research — many programs have marine labs, research vessels, and tropical field stations. Pursue summer internships at aquariums, NOAA, or marine research institutes. Get AAUS Scientific Diver certified.",
    ["Marine Ecology", "Biological Oceanography", "Marine Invertebrate Zoology / Ichthyology", "Statistics & Data Analysis", "Field Research Methods"],
    [
      { name: "REU — Research Experiences for Undergraduates (NSF)", url: "https://www.nsf.gov/crssprgm/reu/", description: "Paid summer research programs at marine labs nationwide — work on real marine science research projects with faculty mentors." },
      { name: "AAUS Scientific Diver Certification", url: "https://www.aaus.org/", description: "American Academy of Underwater Sciences certification — the standard for scientific diving at universities and research institutions." },
    ],
    [
      { name: "R for Data Science — Hadley Wickham", url: "https://r4ds.had.co.nz/", type: "book" },
      { name: "ArcGIS Student License (Esri)", url: "https://www.esri.com/en-us/industries/education/software/student", type: "program" },
    ],
  ),

  s(nx(), "p23", "g16",
    "Pursue a Master's in Marine Biology, Biological Oceanography, Marine Conservation, or a specialized field (cetacean research, coral reef ecology, fisheries science, marine toxicology). Conduct thesis research on a pressing marine question — field work in critical habitats. Build advanced technical skills: molecular biology techniques, advanced GIS, population modeling, and statistical analysis. A Master's is increasingly the entry-level degree for research positions.",
    ["Specialized: Marine Ecology / Conservation / Fisheries", "Advanced Biostatistics", "Molecular Marine Biology", "GIS & Spatial Analysis", "Thesis Research"],
    [
      { name: "NOAA Sea Grant — Graduate Fellowships", url: "https://seagrant.noaa.gov/", description: "Fellowships supporting graduate research in marine and coastal science — funding for Master's and Ph.D. students." },
      { name: "National Marine Sanctuary Foundation — Internships & Fellowships", url: "https://marinesanctuary.org/", description: "Opportunities to work in marine protected areas on research, conservation, and education programs." },
    ],
    [
      { name: "Marine Ecology Progress Series (Journal)", url: "https://www.int-res.com/journals/meps/", type: "article" },
      { name: "Coral Reefs (Journal, Springer)", url: "https://www.springer.com/journal/338", type: "article" },
    ],
  ),

  s(nx(), "p23", "g17",
    "A Ph.D. in Marine Biology, Biological Oceanography, or a related field enables careers in academic research, leadership of research programs at aquariums and marine institutes, and senior positions at NOAA and conservation organizations. Conduct original research advancing understanding of marine ecosystems. Alternatively, a joint degree (M.S. + M.P.A. or J.D.) for marine policy, conservation law, and ocean governance. The ocean is vast and largely unexplored — marine biologists are at the frontier of discovery on Earth.",
    ["Marine Biology / Oceanography Ph.D.", "Dissertation Research", "Advanced Marine Ecosystem Modeling", "Peer-Reviewed Publication", "Teaching & Mentoring"],
    [
      { name: "NSF Graduate Research Fellowship", url: "https://www.nsfgrfp.org/", description: "Prestigious three-year fellowship for graduate research in STEM fields including marine biology and oceanography." },
      { name: "National Geographic Society — Explorer Grants", url: "https://www.nationalgeographic.org/society/grants-and-investments/", description: "Funding for marine research and conservation projects by emerging and established explorers." },
    ],
    [
      { name: "Annual Review of Marine Science", url: "https://www.annualreviews.org/journal/marine", type: "article" },
      { name: "ASLO — Association for the Sciences of Limnology and Oceanography", url: "https://www.aslo.org/", type: "article" },
    ],
  ),

  // ========================================================================
  // p24 — MARKETING MANAGER
  // ========================================================================

  s(nx(), "p24", "g1",
    "Marketing starts with understanding people and persuasion! At this age, children are natural marketers — they convince parents to buy toys, negotiate for more playtime, and 'sell' their ideas with enthusiasm. Encourage imaginative play, storytelling, and asking questions about what people like and why. Watch commercials together and talk about what makes them convincing. The seeds of marketing — empathy, creativity, and communication — are planted in early social interactions.",
    ["Imaginative Play (Store/Restaurant)", "Storytelling & Speaking", "Social-Emotional Learning (Understanding Others)", "Art (Drawing Ads/Posters)"],
    [
      { name: "PBS Kids — Daniel Tiger's Neighborhood", url: "https://pbskids.org/daniel/", description: "Episodes teaching social and emotional skills — understanding feelings and perspectives, the core of marketing empathy." },
      { name: "Pretend Play: Store / Restaurant", url: "", description: "Set up a pretend store — children create signs, set prices, and 'sell' to family members, learning the basics of commerce." },
    ],
    [
      { name: "The Berenstain Bears' Trouble with Money", url: "", type: "book" },
      { name: "Lemonade in Winter by Emily Jenkins", url: "", type: "book" },
    ],
  ),

  s(nx(), "p24", "g2",
    "Build communication and persuasion skills naturally. Practice 'selling' ideas — 'Convince me why we should have pizza for dinner.' Learn about wants vs. needs in simple terms. Notice how products are packaged at the grocery store — which cereal boxes catch your eye and why? Start a simple lemonade stand or bake sale to experience real selling and customer interaction.",
    ["Counting & Money Recognition", "Speaking & Persuasion", "Art & Design (Packaging)", "Social Skills (Customer Interaction)"],
    [
      { name: "Junior Achievement — Elementary Programs", url: "https://www.juniorachievement.org/", description: "In-school programs introducing business concepts including marketing, sales, and customer awareness." },
      { name: "Lemonade Stand / Bake Sale", url: "", description: "Run a real lemonade stand — make signs, set prices, attract customers, and handle money. The ultimate first marketing experience." },
    ],
    [
      { name: "The Lemonade War by Jacqueline Davies", url: "", type: "book" },
      { name: "PBS Kids: Biz Kid$", url: "https://bizkids.com/", type: "video" },
    ],
  ),

  s(nx(), "p24", "g3",
    "Build reading and writing skills — marketers write copy, emails, social media posts, and presentations. Practice persuasive writing: write a paragraph convincing someone to read your favorite book. Analyze commercials and ads: who is the audience? What emotion do they use? What makes you want the product? Start a 'marketing notebook' collecting ads you think are effective.",
    ["Reading & Phonics", "Writing (Persuasive Sentences)", "Art (Poster Design)", "Media Literacy (Ads)"],
    [
      { name: "Time for Kids — Media Literacy", url: "https://www.timeforkids.com/", description: "Current events articles with advertising and media analysis activities for elementary students." },
      { name: "Canva for Education (Basic)", url: "https://www.canva.com/education/", description: "Create simple posters and designs — the earliest taste of visual marketing communication." },
    ],
    [
      { name: "The Berenstain Bears Get the Gimmies", url: "", type: "book" },
      { name: "BrainPOP Jr.: Goods and Services", url: "https://jr.brainpop.com/socialstudies/economics/goodsandservices/", type: "video" },
    ],
  ),

  s(nx(), "p24", "g4",
    "Deepen persuasive writing skills — marketers must write clearly and compellingly. Learn about target audience: different products appeal to different people. Practice identifying the target audience for ads in magazines, on TV, and online. Start a small business project: sell homemade crafts or baked goods with marketing (signs, flyers, social media with parent help). Learn from what sells and what doesn't.",
    ["Reading Comprehension", "Math (Measurement & Money)", "Writing (Persuasive Writing)", "Art (Visual Communication)"],
    [
      { name: "My Classroom Economy", url: "https://www.myclassroomeconomy.org/", description: "Free program simulating an economy in the classroom — students earn, budget, and learn about supply and demand." },
      { name: "Create a Marketing Flyer Campaign", url: "", description: "Design flyers for a real event (school play, bake sale) — practice copywriting, design, and measuring results (how many people came?)." },
    ],
    [
      { name: "Kid Start-Up: How You Can Be an Entrepreneur — Mark Cuban", url: "", type: "book" },
      { name: "BrainPOP: Advertising", url: "https://www.brainpop.com/english/studyandreadingskills/advertising/", type: "video" },
    ],
  ),

  s(nx(), "p24", "g5",
    "Writing expands — marketers need strong narrative and persuasive writing skills. Study how brands tell stories: Disney, Nike, LEGO. Why do these brands make you feel something? Learn basic data analysis — marketers use data to understand what customers want. Conduct a simple survey: ask friends or family about their favorite snacks or toys, then analyze the results. Present your findings with simple charts.",
    ["Writing (Narrative & Persuasive)", "Math (Data & Charts)", "Media Literacy (Brand Analysis)", "Art (Logo & Brand Design)"],
    [
      { name: "Biz Kid$ (PBS)", url: "https://bizkids.com/", description: "Free series teaching entrepreneurship, marketing, and money management for kids — engaging episodes with real examples." },
      { name: "Market Research Survey Project", url: "", description: "Conduct a customer survey — poll friends about a product idea, compile data, and present recommendations based on what you learned." },
    ],
    [
      { name: "The Kids' Guide to Business by Jeff M. Brown", url: "", type: "book" },
      { name: "Khan Academy: Intro to Statistics", url: "https://www.khanacademy.org/math/statistics-probability", type: "course" },
    ],
  ),

  s(nx(), "p24", "g6",
    "Develop research skills — modern marketing is data-driven. Analyze a favorite brand's marketing: how do they use social media, advertising, packaging, and events? Learn the marketing mix (4 P's): Product, Price, Place, Promotion. Practice public speaking by presenting a 'marketing plan' for a school event. Start learning about digital marketing — how do YouTube videos and social media posts get attention?",
    ["English Language Arts (Research & Writing)", "Math (Fractions & Percentages)", "Media & Digital Literacy", "Public Speaking"],
    [
      { name: "Young Entrepreneurs Academy (YEA!)", url: "https://yeausa.org/", description: "Program teaching students to start real businesses — includes marketing plan development, branding, and customer acquisition." },
      { name: "Google Trends (Explore with Parent)", url: "https://trends.google.com/", description: "See what people are searching for — a real digital marketing research tool. Explore trending topics and compare search interest." },
    ],
    [
      { name: "The Young Entrepreneur's Guide to Starting and Running a Business — Steve Mariotti", url: "", type: "book" },
      { name: "Mystery Science: Media Literacy", url: "https://mysteryscience.com/", type: "course" },
    ],
  ),

  s(nx(), "p24", "g7",
    "Writing becomes more sophisticated — practice writing marketing copy: headlines, product descriptions, and social media posts. Learn about target market segmentation: demographics (age, gender, income) and psychographics (interests, values, lifestyle). Start a blog or social media account about a passion topic — track which posts get the most engagement and analyze why. Learn basic Excel/Google Sheets for data analysis.",
    ["English (Copywriting)", "Math (Data Analysis)", "Civics / Economics", "Computer Skills (Spreadsheets & Basic Design)"],
    [
      { name: "DECA (Middle School Division)", url: "https://www.deca.org/middle-school/", description: "Business and marketing competitions for middle schoolers — marketing, entrepreneurship, and finance events." },
      { name: "Start a Blog / YouTube Channel", url: "", description: "Create content about something you're passionate about — learn content marketing, audience building, and analytics firsthand." },
    ],
    [
      { name: "Khan Academy: Personal Finance & Economics", url: "https://www.khanacademy.org/economics-finance-domain", type: "course" },
      { name: "Crash Course: Economics", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtPNZwz5_o_5uirJ8gQXnhEO", type: "video" },
    ],
  ),

  s(nx(), "p24", "g8",
    "Take English and social studies seriously — strong communicators make the best marketers. Study consumer psychology: why do people buy what they buy? Learn about branding — how companies create emotional connections with customers. Join or start a business/entrepreneurship club. Follow marketing news: subscribe to marketing blogs and newsletters (with a parent). Marketing is always evolving and staying current is essential.",
    ["English (Writing & Analysis)", "Civics / Economics", "Computer Skills (Digital Tools)", "Psychology (Consumer Behavior)"],
    [
      { name: "FBLA Middle School", url: "https://www.fbla.org/", description: "Future Business Leaders of America — middle school division with competitive events in marketing, advertising, and business communication." },
      { name: "HubSpot Academy — Free Marketing Courses", url: "https://academy.hubspot.com/", description: "Free online marketing courses — content marketing, social media strategy, and inbound marketing (age-appropriate with parent guidance)." },
    ],
    [
      { name: "Made to Stick — Chip & Dan Heath (Adapted)", url: "", type: "book" },
      { name: "Crash Course: Media Literacy", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtM6jSpzb5gMNsx9kdmqBfmY", type: "video" },
    ],
  ),

  s(nx(), "p24", "g9",
    "Take English and social studies at the highest level. Join DECA or FBLA to compete in marketing events. Start learning digital marketing tools: Canva for design, Google Analytics (basic), and social media management platforms. Analyze a company's marketing campaign in depth — what worked, what didn't, and what you'd do differently. Research marketing careers: brand management, digital marketing, market research, advertising, public relations, and content marketing.",
    ["English (Advanced Writing)", "Social Studies / Economics", "Digital Media / Marketing Elective", "Statistics / Data Analysis"],
    [
      { name: "DECA High School — Marketing Events", url: "https://www.deca.org/", description: "Compete in marketing, advertising, and entrepreneurship events at regional, state, and international conferences." },
      { name: "Google Digital Garage (Free Certifications)", url: "https://learndigital.withgoogle.com/digitalgarage", description: "Free Google certifications in digital marketing, data analytics, and online advertising — real industry credentials." },
    ],
    [
      { name: "Canva (Free Design Tool)", url: "https://www.canva.com/", type: "program" },
      { name: "TED-Ed: Neuromarketing", url: "https://ed.ted.com/", type: "video" },
    ],
  ),

  s(nx(), "p24", "g10",
    "Take the most advanced English available. Marketing is, at its core, communication. Take any business, marketing, or media electives. Join DECA or FBLA and take on a leadership role. Start managing social media for a school club or local small business (with supervision). Learn about digital advertising: Google Ads, social media advertising, SEO (search engine optimization), and email marketing. Build a portfolio: marketing plans, ad designs, content samples.",
    ["English / Language Arts (Honors)", "Civics / Economics", "Psychology (Consumer Behavior)", "Media / Marketing Elective", "Computer Applications"],
    [
      { name: "DECA Competitive Events", url: "https://www.deca.org/", description: "Compete in marketing communications, advertising campaign, sports & entertainment marketing, and business services marketing." },
      { name: "Meta Blueprint — Social Media Marketing (Free)", url: "https://www.facebook.com/business/learn", description: "Free courses and certifications in Facebook and Instagram advertising — real digital marketing skills." },
    ],
    [
      { name: "Influence: The Psychology of Persuasion — Robert Cialdini (Adapted)", url: "", type: "book" },
      { name: "Google Skillshop — Ads & Analytics", url: "https://skillshop.withgoogle.com/", type: "course" },
    ],
  ),

  s(nx(), "p24", "g11",
    "Take Honors English and AP Psychology (critical for understanding consumer behavior). Join DECA and compete seriously — aim for state and national competitions. Take on real marketing projects: run social media for a school club, help a local business with marketing, or launch a small e-commerce store. Learn Google Analytics and basic SEO. Research colleges with strong marketing programs.",
    ["Honors English", "AP Psychology", "Economics / AP Microeconomics", "Marketing / Business Elective", "Statistics"],
    [
      { name: "Intern at a Local Business — Marketing", url: "", description: "Offer to help a local small business with social media, email newsletters, or local advertising — real-world marketing portfolio building." },
      { name: "WordPress / Shopify (Free Trial)", url: "https://www.shopify.com/free-trial", description: "Build a simple e-commerce store or blog — learn digital marketing by doing it: product pages, SEO, and social promotion." },
    ],
    [
      { name: "Building a StoryBrand — Donald Miller", url: "", type: "book" },
      { name: "Hootsuite Academy (Free Social Media Courses)", url: "https://education.hootsuite.com/", type: "course" },
    ],
  ),

  s(nx(), "p24", "g12",
    "Take AP English Language and AP Psychology. Continue DECA with a focus on marketing events. Build a marketing portfolio: campaigns designed, content created, results achieved. Learn about marketing analytics — data drives modern marketing decisions. Research colleges with strong marketing programs: look for business schools with marketing concentrations, integrated marketing communications programs, and strong internship pipelines.",
    ["AP English Language", "AP Psychology", "AP Microeconomics", "Marketing / Business Elective", "Statistics / Data Analysis"],
    [
      { name: "DECA — Marketing Representative Series", url: "https://www.deca.org/", description: "Compete in advanced marketing events — prepare a full marketing plan, present to judges, and defend your strategy." },
      { name: "Google Analytics Certification (Student)", url: "https://skillshop.withgoogle.com/", description: "Earn Google Analytics certification — a real industry credential that demonstrates data-driven marketing skills." },
    ],
    [
      { name: "Contagious: Why Things Catch On — Jonah Berger", url: "", type: "book" },
      { name: "Coursera: Marketing in a Digital World (University of Illinois)", url: "https://www.coursera.org/learn/marketing-digital", type: "course" },
    ],
  ),

  s(nx(), "p24", "g13",
    "The most critical year for college preparation. Take AP English, AP Psychology, and AP Statistics (marketers use statistics constantly). Lead DECA as chapter president or a major committee chair — demonstrate leadership. Build a substantial marketing portfolio. Research colleges: top marketing programs at Wharton (UPenn), Kellogg (Northwestern), Ross (Michigan), McCombs (UT Austin), and Kelley (Indiana). Also consider specialized programs like Northwestern's Integrated Marketing Communications certificate.",
    ["AP English Literature", "AP Psychology", "AP Microeconomics / Macroeconomics", "AP Statistics", "Marketing / Business Leadership (DECA)"],
    [
      { name: "DECA International Career Development Conference", url: "https://www.deca.org/", description: "Compete at DECA ICDC — the pinnacle of high school business/marketing competition, held annually with 20,000+ attendees." },
      { name: "Summer Marketing Internship", url: "", description: "Secure a summer internship at a marketing agency, PR firm, or company's marketing department — real professional experience." },
    ],
    [
      { name: "HubSpot Content Marketing Certification (Free)", url: "https://academy.hubspot.com/", type: "course" },
      { name: "The 22 Immutable Laws of Marketing — Al Ries & Jack Trout", url: "", type: "book" },
    ],
  ),

  s(nx(), "p24", "g14",
    "Apply to universities with strong business/marketing programs. Complete AP exams — high scores earn college credit. Some schools offer direct-admit business programs. Continue DECA leadership and marketing internships. Build a polished portfolio website showcasing your marketing projects, campaigns, and results. Write compelling essays about how marketing combines creativity, psychology, and business to solve real problems.",
    ["AP English Literature (Exam)", "AP Psychology (Exam)", "AP Statistics (Exam)", "Marketing Portfolio Development", "English (College Essays)"],
    [
      { name: "Apply to Top Marketing Programs", url: "", description: "Research top programs: Wharton (UPenn), Ross (Michigan), McCombs (UT Austin), Kelley (Indiana), Questrom (Boston U), and others with strong marketing pipelines." },
      { name: "Build a Marketing Portfolio Website", url: "https://www.behance.net/", description: "Create a professional portfolio on Behance or a personal website — showcase campaigns, content, and results for college and internship applications." },
    ],
    [
      { name: "AMA — American Marketing Association Student Resources", url: "https://www.ama.org/", type: "article" },
      { name: "LinkedIn Learning — Marketing Courses", url: "https://www.linkedin.com/learning/", type: "course" },
    ],
  ),

  s(nx(), "p24", "g15",
    "Major in Marketing, Business Administration with marketing concentration, Integrated Marketing Communications, Advertising, or Public Relations. Core coursework: consumer behavior, marketing research, brand management, digital marketing, and marketing analytics. Join the American Marketing Association (AMA) student chapter. Pursue marketing internships every summer — agencies, brands, tech companies, and startups all need marketers. Build a data-driven portfolio demonstrating real results.",
    ["Consumer Behavior", "Marketing Research & Analytics", "Brand Management", "Digital Marketing Strategy", "Integrated Marketing Communications"],
    [
      { name: "AMA Collegiate Chapters", url: "https://www.ama.org/", description: "Join the American Marketing Association student chapter — case competitions, networking, and professional development events." },
      { name: "Marketing Internship (Every Summer)", url: "", description: "Intern at ad agencies, PR firms, brand marketing teams, or digital marketing agencies — real experience is the best teacher in marketing." },
    ],
    [
      { name: "Google Analytics / Ads Certifications", url: "https://skillshop.withgoogle.com/", type: "program" },
      { name: "Kellogg on Marketing — The Kellogg Faculty", url: "", type: "book" },
    ],
  ),

  s(nx(), "p24", "g16",
    "Pursue an MBA with a marketing concentration, or a Master's in Marketing, Integrated Marketing Communications, or Marketing Analytics. Top MBA programs (Kellogg, Wharton, Ross, McCombs) offer deep marketing specializations and brand management pipelines. Master's programs at Northwestern (Medill IMC), Columbia, and USC focus on integrated, data-driven marketing. Alternatively, build a career through experience — many marketing leaders rise through track records of successful campaigns rather than graduate degrees.",
    ["Marketing Strategy & Leadership", "Advanced Marketing Analytics", "Brand & Product Management", "Digital & Social Media Strategy", "Consumer Insights & Research"],
    [
      { name: "Kellogg School of Management — Marketing Program", url: "https://www.kellogg.northwestern.edu/", description: "The #1 marketing MBA program in the world — brand management, consumer insights, and marketing strategy for future CMOs." },
      { name: "AMA Professional Certification", url: "https://www.ama.org/", description: "Professional Certified Marketer (PCM) credential — validates expertise in digital marketing, content marketing, or marketing management." },
    ],
    [
      { name: "Harvard Business Review — Marketing Section", url: "https://hbr.org/topic/marketing", type: "article" },
      { name: "AdAge / Adweek (Industry Publications)", url: "https://adage.com/", type: "article" },
    ],
  ),

  s(nx(), "p24", "g17",
    "A Ph.D. in Marketing is for those pursuing academic careers as marketing professors and researchers. Doctoral programs focus on consumer behavior theory, quantitative marketing models, and empirical research methods. More common for marketing leaders: post-MBA or mid-career executive programs at top business schools, specialized certifications (Category Management, Brand Strategy), and the path from Brand Manager → Senior Brand Manager → Marketing Director → VP of Marketing → Chief Marketing Officer (CMO). The terminal credential in marketing is a track record of successful campaigns and business growth.",
    ["Marketing Ph.D. (Academic Track)", "Consumer Behavior Theory", "Quantitative Marketing Models", "Dissertation Research", "Teaching Marketing"],
    [
      { name: "AMA Doctoral Consortium", url: "https://www.ama.org/", description: "Prestigious consortium for marketing doctoral students — networking, research presentations, and career development for aspiring marketing academics." },
      { name: "Chief Marketing Officer (CMO) Path", url: "", description: "For practitioners: the path to CMO runs through brand management, marketing strategy, and demonstrated business impact — a proven track record trumps any degree." },
    ],
    [
      { name: "Journal of Marketing (AMA)", url: "https://www.ama.org/journal-of-marketing/", type: "article" },
      { name: "Marketing Science (INFORMS)", url: "https://pubsonline.informs.org/journal/mksc", type: "article" },
    ],
  ),

  // ========================================================================
  // p25 — SOCIAL WORKER
  // ========================================================================

  s(nx(), "p25", "g1",
    "Social work begins with empathy and a desire to help others. At this age, children are learning to recognize feelings — their own and others'. Encourage caring behaviors: sharing, comforting a sad friend, helping at home. Read stories about kindness, diversity, and helping people. Social workers are the helpers who step in when people need support, and the foundation of that calling is a caring heart.",
    ["Social-Emotional Learning (Feelings)", "Storytelling (Helping Stories)", "Art (Drawing Feelings)", "Community Helpers"],
    [
      { name: "Sesame Street — Emotional Wellbeing", url: "https://sesamestreet.org/", description: "Videos and activities teaching young children about emotions, kindness, and helping others — the earliest social-emotional foundations." },
      { name: "Daniel Tiger's Neighborhood (PBS)", url: "https://pbskids.org/daniel/", description: "Episodes teaching empathy, sharing, and emotional regulation through songs and stories young children relate to." },
    ],
    [
      { name: "Have You Filled a Bucket Today? by Carol McCloud", url: "", type: "book" },
      { name: "The Rabbit Listened by Cori Doerrfeld", url: "", type: "book" },
    ],
  ),

  s(nx(), "p25", "g2",
    "Build emotional vocabulary and helping skills. Learn to name feelings: happy, sad, angry, scared, worried. Practice active listening — social workers spend much of their time listening deeply to people. Talk about different kinds of families and communities. Learn about community helpers — social workers, counselors, and therapists are helpers that support people through difficult times.",
    ["Reading & Emotional Literacy", "Counting & Numbers", "Social Studies (Community Helpers)", "Listening & Communication"],
    [
      { name: "Committee for Children — Second Step (School Program)", url: "https://www.secondstep.org/", description: "Social-emotional learning curriculum used in many schools — builds empathy, emotion management, and problem-solving skills." },
      { name: "Community Service: Visit a Senior Center", url: "", description: "Visit a senior living facility with a parent — practice kindness, listening to stories, and brightening someone's day." },
    ],
    [
      { name: "The Invisible Boy by Trudy Ludwig", url: "", type: "book" },
      { name: "Last Stop on Market Street by Matt de la Peña", url: "", type: "book" },
    ],
  ),

  s(nx(), "p25", "g3",
    "Build reading and writing skills — social workers read case files, write reports, and communicate clearly in writing. Practice kindness and inclusion at school — notice who might be left out and find ways to include them. Social workers advocate for vulnerable people; the roots of advocacy start with standing up for classmates. Learn about different types of families and cultures in your community.",
    ["Reading & Phonics", "Writing (Letters & Stories)", "Social Studies (Diversity & Community)", "Social-Emotional Learning"],
    [
      { name: "Teaching Tolerance / Learning for Justice", url: "https://www.learningforjustice.org/", description: "Free resources teaching diversity, equity, and social justice — age-appropriate lessons about fairness and inclusion." },
      { name: "Start a 'Kindness Club' at School", url: "", description: "Organize simple acts of kindness — write thank-you notes, help younger students, collect donations — early community organizing." },
    ],
    [
      { name: "Each Kindness by Jacqueline Woodson", url: "", type: "book" },
      { name: "BrainPOP Jr.: Community Helpers", url: "https://jr.brainpop.com/socialstudies/community/communityhelpers/", type: "video" },
    ],
  ),

  s(nx(), "p25", "g4",
    "Deepen reading comprehension — social workers must understand complex family situations and legal documents. Practice active listening with friends and family: listen without interrupting, ask follow-up questions, show you understand. Learn about needs vs. wants and start understanding that not everyone has the same resources. Participate in a family community service activity — a food drive, donation collection, or neighborhood clean-up.",
    ["Reading Comprehension", "Math (Measurement & Data)", "Social Studies (Community Needs)", "Writing (Reflective Journaling)"],
    [
      { name: "DoSomething.org — Youth Volunteer Projects", url: "https://www.dosomething.org/", description: "Find volunteer and social action projects for young people — choose a cause and make a difference in your community." },
      { name: "Food Drive for Local Food Bank", url: "https://www.feedingamerica.org/", description: "Organize or participate in a food drive — understand food insecurity and how social workers connect families with resources." },
    ],
    [
      { name: "A Chair for My Mother by Vera B. Williams", url: "", type: "book" },
      { name: "BrainPOP: Empathy", url: "https://www.brainpop.com/socialstudies/culture/empathy/", type: "video" },
    ],
  ),

  s(nx(), "p25", "g5",
    "Develop research and writing skills. Research a social issue that affects your community: homelessness, food insecurity, access to healthcare, or immigration. Write about what you learn. Practice empathy daily — try to understand situations from other people's perspectives. Social workers must be nonjudgmental and compassionate. Consider starting a community service project with friends or a school group.",
    ["Writing (Research & Persuasive)", "Math (Multiplication & Division)", "Social Studies (Social Issues)", "Civics (Community Service)"],
    [
      { name: "Kids Can Make a Difference", url: "https://www.kidscanmakeadifference.org/", description: "Program inspiring youth to understand and address hunger and poverty in their communities through research and action." },
      { name: "Volunteer at a Local Shelter or Food Bank (with Family)", url: "", description: "Volunteer as a family at a homeless shelter, food bank, or community kitchen — firsthand exposure to social work settings." },
    ],
    [
      { name: "Esperanza Rising by Pam Muñoz Ryan", url: "", type: "book" },
      { name: "PBS NewsHour Classroom — Social Issues", url: "https://www.pbs.org/newshour/classroom/", type: "video" },
    ],
  ),

  s(nx(), "p25", "g6",
    "Expand research and analytical skills. Study one social issue in depth: what causes it, who is affected, and what solutions exist. Practice conflict resolution — social workers often mediate family and community conflicts. Strengthen writing: social workers write case notes, assessments, and reports that must be clear, accurate, and objective. Join or start a peer mediation program at school.",
    ["English Language Arts (Research)", "Math (Fractions & Percentages)", "Social Studies (Social Policy)", "Peer Mediation / Conflict Resolution"],
    [
      { name: "Peer Mediation Training (School Program)", url: "", description: "Many schools offer peer mediation programs — learn conflict resolution and active listening skills that mirror social work practice." },
      { name: "UNICEF — Kid Power", url: "https://www.unicefusa.org/mission/kid-power", description: "Program connecting physical activity with global giving — learn about children's issues worldwide while making a difference." },
    ],
    [
      { name: "Wonder by R.J. Palacio", url: "", type: "book" },
      { name: "Mystery Science: Social-Emotional Learning", url: "https://mysteryscience.com/", type: "course" },
    ],
  ),

  s(nx(), "p25", "g7",
    "Math and data skills become important — social workers track client outcomes, analyze program effectiveness, and manage budgets. Deepen understanding of social systems: how do government programs (Medicaid, SNAP, housing assistance) work? Learn about child welfare, elder care, mental health services, and other areas where social workers practice. Continue community service with increasing responsibility.",
    ["Math (Pre-Algebra & Data)", "English (Professional Writing)", "Civics (Government & Social Programs)", "Psychology / Human Development"],
    [
      { name: "National Association of Social Workers (NASW) — Student Resources", url: "https://www.socialworkers.org/", description: "Explore social work career paths — clinical, school, medical, child welfare, community organizing, and policy." },
      { name: "Youth Service America — Service Projects", url: "https://ysa.org/", description: "Resources and grants for young people leading community service projects — develop leadership and advocacy skills." },
    ],
    [
      { name: "Khan Academy: Civics & Government", url: "https://www.khanacademy.org/humanities/us-government-and-civics", type: "course" },
      { name: "I Am Malala (Young Readers Edition) — Malala Yousafzai", url: "", type: "book" },
    ],
  ),

  s(nx(), "p25", "g8",
    "Take social studies and English seriously — social workers must understand social systems and communicate effectively. Learn about psychology fundamentals: child development, mental health, addiction, and trauma. Social workers help people through life's hardest challenges. Volunteer at a community organization and observe how social services are delivered. Research different social work settings: schools, hospitals, child welfare agencies, mental health clinics, and community organizations.",
    ["English (Writing & Communication)", "Social Studies / Civics", "Life Science (Psychology Intro)", "Community Service"],
    [
      { name: "Volunteer Match — Youth Opportunities", url: "https://www.volunteermatch.org/", description: "Find volunteer opportunities with social service organizations — homeless services, youth mentoring, elder care, and more." },
      { name: "Big Brothers Big Sisters — Youth Programs", url: "https://www.bbbs.org/", description: "Mentoring organization — both volunteer as a mentor (for older teens) and understand the power of supportive relationships." },
    ],
    [
      { name: "Crash Course: Psychology", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtOPRKzVLY0jJY-uHOH9KVU6", type: "video" },
      { name: "NASW — Careers in Social Work", url: "https://www.socialworkers.org/Careers", type: "article" },
    ],
  ),

  s(nx(), "p25", "g9",
    "Take social studies and English at the highest level. Take a psychology course if available. Social work combines understanding of human behavior (psychology), social systems (sociology), and policy (government). Volunteer regularly at a social service agency. Start learning about social justice issues: racial equity, economic inequality, access to healthcare, and immigration. Social workers advocate for systemic change as well as individual clients.",
    ["English (Advanced Writing)", "Social Studies / Government", "Psychology Elective", "Civics (Advocacy & Activism)"],
    [
      { name: "Youth in Government / Model UN", url: "https://www.ymca.org/what-we-do/youth-development", description: "Programs teaching government, policy, and advocacy — social workers often work at the policy level to create systemic change." },
      { name: "Volunteer Crisis Text Line Counselor (Age 18+ in some areas, else prep)", url: "https://www.crisistextline.org/", description: "Crisis counseling via text — learn about the clinical side of social work. Some programs accept older teens for training." },
    ],
    [
      { name: "TED-Ed: The Power of Empathy", url: "https://ed.ted.com/", type: "video" },
      { name: "Just Mercy (Adapted for Young Adults) — Bryan Stevenson", url: "", type: "book" },
    ],
  ),

  s(nx(), "p25", "g10",
    "Take Honors English and any psychology or sociology electives available. Continue regular community service with increasing depth. Research the social work education pathway: BSW (Bachelor of Social Work) for entry-level, MSW (Master of Social Work) for clinical licensure. Learn about different social work licenses: LBSW, LMSW, LCSW (clinical). Social workers are licensed professionals — the path requires specific degrees and supervised experience.",
    ["Honors English", "Social Studies / Sociology", "Psychology Elective", "Civics / Government", "Health / Human Development"],
    [
      { name: "NASW — Code of Ethics (Student Overview)", url: "https://www.socialworkers.org/About/Ethics/Code-of-Ethics", description: "Read the NASW Code of Ethics — six core values: service, social justice, dignity and worth of the person, importance of human relationships, integrity, and competence." },
      { name: "Volunteer at a Domestic Violence Shelter / Homeless Services", url: "", description: "Seek volunteer opportunities in direct-service settings — understand the populations social workers serve and the challenges they face." },
    ],
    [
      { name: "Khan Academy: Psychology", url: "https://www.khanacademy.org/science/health-and-medicine/mental-health", type: "course" },
      { name: "The Glass Castle — Jeannette Walls", url: "", type: "book" },
    ],
  ),

  s(nx(), "p25", "g11",
    "Take Honors English and AP Psychology. Social workers must understand human development, mental health, and behavior. Continue regular community service — aim for direct contact with populations social workers serve. Research BSW programs: most states require a CSWE-accredited degree. Consider taking a certification in Mental Health First Aid or similar programs. Social work is about building relationships and creating change — these skills develop through sustained community engagement.",
    ["Honors English", "AP Psychology", "Social Studies / Sociology", "Government / Civics", "Health / Human Development"],
    [
      { name: "Mental Health First Aid (Youth)", url: "https://www.mentalhealthfirstaid.org/", description: "Learn to identify, understand, and respond to signs of mental health challenges — a fundamental social work skill." },
      { name: "NASW — Student Membership", url: "https://www.socialworkers.org/Membership", description: "Join NASW as a student member — access to social work publications, career resources, and professional community." },
    ],
    [
      { name: "The Body Keeps the Score (Abridged) — Bessel van der Kolk", url: "", type: "book" },
      { name: "CSWE — Council on Social Work Education", url: "https://www.cswe.org/", type: "article" },
    ],
  ),

  s(nx(), "p25", "g12",
    "Take AP Psychology and AP English. Continue community service with increased leadership — perhaps coordinating a volunteer program or advocacy campaign. Research BSW programs: look for CSWE-accredited programs. Social work education emphasizes field experience (practicum/internship) where you work in real social service settings while studying. Begin understanding the populations and issues you're most passionate about: child welfare, mental health, gerontology, school social work, healthcare, or community organizing.",
    ["AP Psychology", "AP English Language", "Sociology / Social Problems", "Statistics (Research Methods)", "Government / Public Policy"],
    [
      { name: "Volunteer Coordinator / Program Leader Role", url: "", description: "Step into a leadership role in your volunteer work — manage projects, coordinate volunteers, and see the bigger picture of service delivery." },
      { name: "CSWE — List of Accredited BSW Programs", url: "https://www.cswe.org/", description: "Research accredited Bachelor of Social Work programs at universities — ensure the program is CSWE-accredited for licensure eligibility." },
    ],
    [
      { name: "Coursera: Social Work Practice (University of Michigan)", url: "https://www.coursera.org/learn/social-work-practice", type: "course" },
      { name: "Evicted — Matthew Desmond", url: "", type: "book" },
    ],
  ),

  s(nx(), "p25", "g13",
    "The most critical year for college preparation. Take AP Psychology, AP English, and AP Statistics. Lead a community service project or social justice initiative. Research CSWE-accredited BSW programs and combined BSW/MSW programs (some universities offer 5-year combined programs). Visit social work departments at target universities. Prepare strong application essays about your commitment to social justice and experience helping others.",
    ["AP Psychology", "AP English Literature", "AP Statistics", "Sociology / Social Justice Elective", "Government / Public Policy"],
    [
      { name: "NASW — Social Work Month & Advocacy", url: "https://www.socialworkers.org/", description: "Participate in Social Work Month (March) activities — advocacy campaigns, awareness events, and connecting with professional social workers." },
      { name: "Congressional / State Legislature Internship", url: "", description: "Intern with an elected official focused on social policy — see how legislation affects the populations social workers serve." },
    ],
    [
      { name: "Social Work Podcast (Listen & Learn)", url: "https://socialworkpodcast.com/", type: "video" },
      { name: "The New Jim Crow — Michelle Alexander", url: "", type: "book" },
    ],
  ),

  s(nx(), "p25", "g14",
    "Apply to universities with CSWE-accredited BSW programs. Complete AP exams — high scores earn college credit. Some schools offer 5-year combined BSW/MSW programs for accelerated licensure. Write compelling essays about your experiences with community service, the social issues you care about, and your vision for creating change. Social work programs value lived experience, cultural humility, and demonstrated commitment to helping others.",
    ["AP Psychology (Exam)", "AP English (Exam)", "AP Statistics (Exam)", "Sociology / Social Problems", "English (College Essays)"],
    [
      { name: "Apply to CSWE-Accredited BSW Programs", url: "", description: "Top programs: University of Michigan, Washington University in St. Louis, UC Berkeley, University of Chicago, UNC Chapel Hill, University of Washington." },
      { name: "Senior Capstone: Community Needs Assessment", url: "", description: "Research and document a community need — interview stakeholders, analyze data, and propose solutions — a preview of social work practice." },
    ],
    [
      { name: "CSWE — Accreditation Directory", url: "https://www.cswe.org/Accreditation/Directory-of-Accredited-Programs/", type: "article" },
      { name: "NASW — State Licensing Boards", url: "https://www.socialworkers.org/", type: "article" },
    ],
  ),

  s(nx(), "p25", "g15",
    "Bachelor of Social Work (BSW) from a CSWE-accredited program. Core coursework: human behavior in the social environment, social welfare policy, social work practice methods, research methods, diversity and social justice, and field practicum (400+ hours of supervised field work). A BSW qualifies you for entry-level social work positions and, in many states, for the LBSW (Licensed Baccalaureate Social Worker) license. Consider adding a minor: psychology, sociology, criminal justice, or public health.",
    ["Human Behavior & Social Environment", "Social Welfare Policy & Services", "Social Work Practice Methods", "Diversity & Social Justice", "Field Practicum (Supervised)"],
    [
      { name: "Phi Alpha Honor Society", url: "https://www.phialpha.org/", description: "National social work honor society — recognizes academic excellence and provides networking, scholarships, and leadership development." },
      { name: "Field Practicum (BSW Required)", url: "", description: "The heart of social work education — 400+ hours in a real social service agency under clinical supervision, applying classroom knowledge." },
    ],
    [
      { name: "ASWB — BSW Exam Prep", url: "https://www.aswb.org/", type: "program" },
      { name: "National Association of Social Workers (NASW)", url: "https://www.socialworkers.org/", type: "article" },
    ],
  ),

  s(nx(), "p25", "g16",
    "Pursue a Master of Social Work (MSW) from a CSWE-accredited program. An MSW is typically required for clinical licensure (LCSW) and opens doors to advanced practice, supervision, and higher salaries. Programs: 2-year traditional or 1-year advanced standing (if you hold a BSW). Core: advanced clinical practice, diagnosis and treatment of mental disorders, advanced policy analysis, and 900+ hours of field placement. Pass the ASWB Master's exam for LMSW licensure. The LCSW (Licensed Clinical Social Worker) requires 2-3 years of supervised post-MSW experience plus the ASWB Clinical exam.",
    ["Advanced Clinical Social Work Practice", "Psychopathology & DSM-5", "Trauma-Informed Practice", "Advanced Policy & Advocacy", "Field Placement (900+ Hours)"],
    [
      { name: "NASW — Clinical Social Work Resources", url: "https://www.socialworkers.org/", description: "Resources for clinical social workers — continuing education, practice standards, and networking for LCSW candidates." },
      { name: "ASWB Clinical Exam Prep", url: "https://www.aswb.org/", description: "Prepare for the Licensed Clinical Social Worker (LCSW) exam — the highest level of social work licensure." },
    ],
    [
      { name: "DSM-5-TR (Diagnostic and Statistical Manual)", url: "https://www.psychiatry.org/psychiatrists/practice/dsm", type: "book" },
      { name: "Clinical Social Work Journal", url: "https://www.springer.com/journal/10615", type: "article" },
    ],
  ),

  s(nx(), "p25", "g17",
    "A Ph.D. in Social Work (or DSW — Doctor of Social Work) for academic, research, or executive leadership careers. Ph.D. programs focus on research methodology, social welfare policy analysis, and preparing the next generation of social work educators. DSW programs are practice-focused doctorates for advanced clinical practitioners and agency leaders. Post-LCSW specializations: certification in specific modalities (CBT, DBT, EMDR), trauma specialization, or clinical supervision credentials. Social work is diverse — from private therapy practice to executive director of a nonprofit to policy advisor in government.",
    ["Social Work Ph.D. / DSW", "Advanced Research Methods", "Social Welfare Policy Analysis", "Dissertation / Capstone", "Teaching & Supervision"],
    [
      { name: "SSWR — Society for Social Work and Research", url: "https://www.sswr.org/", description: "Premier research organization for social work scholars — annual conference, research funding, and professional networking." },
      { name: "NASW — Advanced Practice & Leadership", url: "https://www.socialworkers.org/", description: "Advanced credentials: ACSW (Academy of Certified Social Workers), Clinical Supervisor credential, and leadership development programs." },
    ],
    [
      { name: "Social Service Review (University of Chicago Press)", url: "https://www.journals.uchicago.edu/toc/ssr/current", type: "article" },
      { name: "CSWE — Doctoral Program Directory", url: "https://www.cswe.org/", type: "article" },
    ],
  ),

  // ========================================================================
  // p26 — PLUMBER
  // ========================================================================

  s(nx(), "p26", "g1",
    "Plumbing starts with curiosity about how things work! At this age, children love playing with water — pouring, splashing, and watching it flow. Encourage water play, building with blocks and pipes (toy or PVC), and exploring how water moves. Talk about where water comes from and where it goes — the earliest lessons in the plumbing systems that make modern life possible. Fine motor play with tools (safe toy tools) builds the mechanical aptitude plumbers need.",
    ["Water & Sensory Play", "Fine Motor Skills (Tools & Building)", "Counting & Measuring", "Curiosity (How Things Work)"],
    [
      { name: "Water Play / Sand & Water Table", url: "", description: "Set up water play with funnels, tubes, and containers — explore how water flows, fills, and drains — the earliest plumbing experiments." },
      { name: "Children's Museums — Water Exhibits", url: "https://www.childrensmuseums.org/", description: "Many children's museums have water tables and plumbing-type exhibits where kids experiment with water flow and pipes." },
    ],
    [
      { name: "The Magic School Bus: At the Waterworks", url: "", type: "book" },
      { name: "I'm a Plumber (When I Grow Up series)", url: "", type: "book" },
    ],
  ),

  s(nx(), "p26", "g2",
    "Build fine motor skills and spatial reasoning through hands-on activities. Plumbers work with their hands, tools, and their understanding of how things fit together in space. Use building toys like LEGO, blocks, and connectable tubes. Learn about water in the home: faucets, drains, toilets, and pipes — where water enters and exits. Practice counting and measuring — plumbers measure precisely all day.",
    ["Building & Construction Play", "Counting & Measuring", "Fine Motor Control", "Science (Water & Flow)"],
    [
      { name: "LEGO / Duplo Building", url: "https://www.lego.com/en-us/kids", description: "Building toys develop the spatial reasoning and fine motor skills that plumbers use daily when working with pipes and fittings." },
      { name: "Home Depot Kids Workshops", url: "https://www.homedepot.com/c/kids_workshop", description: "Free monthly workshops where kids build real wooden projects using tools — hands-on introduction to the trades." },
    ],
    [
      { name: "Building a House by Byron Barton", url: "", type: "book" },
      { name: "PBS Kids: Design Squad (Simple Machines)", url: "https://pbskids.org/designsquad/", type: "video" },
    ],
  ),

  s(nx(), "p26", "g3",
    "Build reading and math foundations — plumbers read blueprints, manuals, and codes; they calculate pipe lengths, water flow, and material costs. Continue hands-on building activities with more complex projects. Practice measuring with a tape measure — accuracy matters. Learn about the water cycle and where your community's water comes from. Help with simple household repairs alongside a parent.",
    ["Reading & Phonics", "Math (Addition, Subtraction, Measurement)", "Science (Water Cycle)", "Art & Building (Model Making)"],
    [
      { name: "Start Measuring! (Tape Measure Practice)", url: "", description: "Get a kid-safe tape measure — practice measuring everything: furniture, rooms, toys. Plumbers measure constantly and accurately." },
      { name: "Lowe's Build and Grow Clinics", url: "https://www.lowes.com/", description: "Similar to Home Depot workshops — free building clinics for kids where they use real tools to build projects." },
    ],
    [
      { name: "How a House Is Built by Gail Gibbons", url: "", type: "book" },
      { name: "BrainPOP Jr.: Building Basics", url: "https://jr.brainpop.com/", type: "video" },
    ],
  ),

  s(nx(), "p26", "g4",
    "Deepen reading comprehension — plumbers must read and understand technical manuals and building codes. Practice measurement in inches, feet, and fractions of inches — the language of the trades. Learn about simple machines: levers, pulleys, and screws — plumbers work with these mechanical principles daily. Help with more complex household projects: assembling furniture, fixing a leaky faucet (with supervision), or unclogging a drain.",
    ["Reading Comprehension", "Math (Measurement & Fractions)", "Science (Simple Machines)", "Practical Life Skills (Home Repair)"],
    [
      { name: "KiwiCo / Tinker Crate", url: "https://www.kiwico.com/", description: "Monthly STEM project kits — many involve building mechanical systems, pipe systems, and hydraulic models relevant to plumbing." },
      { name: "Fix a Leaky Faucet (with Parent)", url: "", description: "Learn basic home plumbing repair — turn off the water supply, take apart the faucet, identify the problem, and fix it." },
    ],
    [
      { name: "DK Eyewitness: Invention (Machines & Mechanisms)", url: "", type: "book" },
      { name: "BrainPOP: Measuring Matter", url: "https://www.brainpop.com/science/matterandchemistry/measuringmatter/", type: "video" },
    ],
  ),

  s(nx(), "p26", "g5",
    "Math expands to multiplication, division, and fractions — plumbers calculate materials, costs, and water flow rates. Explore how plumbing systems work: water supply (pressurized), drainage (gravity), and venting (air flow). A house plumbing system is a fascinating puzzle. Help with more advanced home projects. Start learning about different pipe materials: copper, PVC, PEX, and cast iron — each has different uses and installation methods.",
    ["Math (Multiplication, Division & Fractions)", "Science (Hydraulics & Water Pressure)", "Reading (Instructional Manuals)", "Practical Skills (Tool Use)"],
    [
      { name: "4-H STEM Programs — Engineering & Mechanics", url: "https://4-h.org/programs/stem/", description: "Hands-on projects in mechanical systems, physics, and problem-solving — directly applicable to the plumbing trade." },
      { name: "Assist with a Home Plumbing Project", url: "", description: "Help replace a faucet, install a new toilet fill valve, or fix a running toilet — practical plumbing experience with adult supervision." },
    ],
    [
      { name: "The Way Things Work — David Macaulay", url: "", type: "book" },
      { name: "Science Max: Hydraulics (YouTube)", url: "https://www.youtube.com/", type: "video" },
    ],
  ),

  s(nx(), "p26", "g6",
    "Expand research and technical reading skills — plumbers stay current with building codes and new technologies. Learn about basic physics principles: water pressure, gravity flow, and thermal expansion (hot water expands). Plumbers apply physics every day. Strengthen math with real-world problems: if a pipe is 8 feet long and you need to cut it into 3 equal pieces, how long is each piece? Practice fractions relentlessly.",
    ["English Language Arts (Technical Reading)", "Math (Fractions & Word Problems)", "Physical Science (Physics of Fluids)", "Civics (Building Codes Intro)"],
    [
      { name: "Science Olympiad — Machines & Physics Events", url: "https://www.soinc.org/", description: "Competitive events in simple machines, physics, and engineering — build transferable skills for the mechanical side of plumbing." },
      { name: "Advanced Home Projects (with Parent)", url: "", description: "Take on more complex projects — install a new showerhead, replace sink drain piping, or snake a slow drain." },
    ],
    [
      { name: "Mystery Science: Forces & Motion", url: "https://mysteryscience.com/", type: "course" },
      { name: "How Your House Works — Charlie Wing", url: "", type: "book" },
    ],
  ),

  s(nx(), "p26", "g7",
    "Math ramps up with pre-algebra — plumbers use algebra for calculating flow rates, pipe sizing, and material estimates. Learn about hydraulics and pneumatics: how fluids and gases behave under pressure. Explore building codes and why they exist — codes protect health and safety. Join or start a maker/STEM club. Plumbers combine mechanical knowledge, problem-solving, and physical skill — all of which develop through hands-on projects.",
    ["Math (Pre-Algebra & Data)", "Physical Science (Hydraulics)", "English (Technical Reading)", "Practical Skills (Building Projects)"],
    [
      { name: "SkillsUSA — Middle School Programs", url: "https://www.skillsusa.org/", description: "Career and technical student organization — explore trades including plumbing, construction, and mechanical systems." },
      { name: "Makerspace / Maker Club", url: "", description: "Join a local makerspace with tools and equipment — work on mechanical projects, 3D printing, and hands-on engineering." },
    ],
    [
      { name: "Khan Academy: Physics", url: "https://www.khanacademy.org/science/physics", type: "course" },
      { name: "Crash Course: Physics (Fluids)", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtN0ge7yDk_UA0ldZJdhwkoV", type: "video" },
    ],
  ),

  s(nx(), "p26", "g8",
    "Take pre-algebra seriously — math is more important in the trades than most people realize. Plumbers calculate, measure, and estimate constantly. Learn about mechanical systems in buildings: plumbing, HVAC, and electrical all work together. Explore blueprint reading: how do drawings represent 3D spaces? Try your hand at welding or soldering (with proper safety equipment and supervision) — plumbers join pipes using various methods.",
    ["Pre-Algebra", "Physical Science (Mechanical Systems)", "English (Technical Communication)", "Practical Skills (Tool Proficiency)"],
    [
      { name: "Explore the Trades — Plumbing", url: "https://explorethetrades.org/", description: "Organization dedicated to introducing young people to plumbing, HVAC, and electrical trades — career information, scholarships, and resources." },
      { name: "Construction / Trade Summer Camps", url: "", description: "Some technical colleges and trade organizations offer summer camps where students try hands-on plumbing, electrical, and carpentry projects." },
    ],
    [
      { name: "Blueprint Reading Basics", url: "", type: "book" },
      { name: "This Old House (YouTube / PBS)", url: "https://www.thisoldhouse.com/", type: "video" },
    ],
  ),

  s(nx(), "p26", "g9",
    "Take algebra — it's the math that underpins trade calculations. If your school offers any shop, construction, or technical education classes, take them. Plumbers work with their hands AND their brains — it's a skilled technical profession. Start learning about plumbing codes and why they matter for public health. Research the plumbing career path: apprenticeship → journeyman → master plumber. The apprenticeship model means you earn while you learn — no student debt.",
    ["Algebra I", "Physical Science", "Technical Education / Shop Elective", "English (Business Communication)"],
    [
      { name: "SkillsUSA — High School (Prep)", url: "https://www.skillsusa.org/", description: "Join SkillsUSA for career and technical education competitions — prepare for plumbing, construction, or related events." },
      { name: "Job Shadow a Licensed Plumber", url: "", description: "Spend a day shadowing a plumber — see residential service work, new construction, or commercial plumbing in action." },
    ],
    [
      { name: "Modern Plumbing (textbook preview)", url: "https://www.g-w.com/modern-plumbing", type: "book" },
      { name: "PHCC — Plumbing-Heating-Cooling Contractors Association", url: "https://www.phccweb.org/", type: "article" },
    ],
  ),

  s(nx(), "p26", "g10",
    "Take the most advanced math available — algebra and geometry are directly applicable to plumbing. Take any shop, construction, or CTE (Career and Technical Education) electives. Plumbers who understand business can eventually run their own companies. Research the apprenticeship path: typically 4-5 years of paid on-the-job training (8,000 hours) plus classroom instruction (500-1,000 hours). Apprentices earn a living wage from day one, with regular pay increases as skills advance.",
    ["Geometry / Algebra II", "Physics (Practical Applications)", "Construction / Shop Elective", "English (Business & Communication)"],
    [
      { name: "CTE — Construction Pathway", url: "", description: "Enroll in your school's construction, building trades, or mechanical systems CTE program if available — hands-on preparation for plumbing apprenticeship." },
      { name: "Pre-Apprenticeship Program", url: "https://www.apprenticeship.gov/", description: "Some areas offer pre-apprenticeship programs for high school students — introduction to the skilled trades with mentorship from journeyworkers." },
    ],
    [
      { name: "Khan Academy: Geometry", url: "https://www.khanacademy.org/math/geometry", type: "course" },
      { name: "UA — United Association of Plumbers and Pipefitters", url: "https://www.ua.org/", type: "article" },
    ],
  ),

  s(nx(), "p26", "g11",
    "Take algebra and any CTE courses available. Plumbers need strong applied math. Continue developing mechanical skills — work on cars, help with home renovations, build projects. Research plumbing apprenticeships through the United Association (UA) union or non-union programs. The UA offers a respected apprenticeship that includes classroom instruction and paid on-the-job training. Also research independent plumbing companies that offer apprenticeship programs.",
    ["Algebra II", "Construction / Mechanical Elective", "Physics (Applied)", "English (Customer Communication)", "Business Math"],
    [
      { name: "SkillsUSA — Plumbing / Construction Events", url: "https://www.skillsusa.org/", description: "Compete in construction and plumbing-related events — build skills, network with employers, and earn recognition." },
      { name: "Part-Time Work: Construction / Plumbing Helper", url: "", description: "Work as a helper for a plumbing company or contractor on weekends/summers — real job site experience and a foot in the door." },
    ],
    [
      { name: "NCCER — Core Curriculum & Plumbing Level 1", url: "https://www.nccer.org/", type: "program" },
      { name: "YouTube: Plumbing Basics (Got2Learn, This Old House)", url: "https://www.youtube.com/", type: "video" },
    ],
  ),

  s(nx(), "p26", "g12",
    "Take the most advanced math available — geometry and algebra. Continue CTE coursework if offered. Research and apply to plumbing apprenticeship programs. Many apprenticeships accept applications from high school seniors. The UA has local unions across the country that offer competitive apprenticeship programs. Also research non-union apprenticeships through independent contractors. Consider community college plumbing or construction management courses for additional education while working.",
    ["Geometry", "CTE: Construction / Building Trades", "Business Math / Accounting", "English (Professional Communication)", "Physical Education (Strength & Fitness)"],
    [
      { name: "Apply for Apprenticeship Programs", url: "https://www.ua.org/join-the-ua", description: "Research and apply to UA local union apprenticeship programs — or independent contractor programs. Applications may open at specific times; apply early." },
      { name: "OSHA 10-Hour Construction Safety (Student)", url: "https://www.osha.gov/training/outreach", description: "Earn OSHA 10-Hour Construction card — a safety certification required on most job sites and valuable for apprenticeship applications." },
    ],
    [
      { name: "NCCER Plumbing Level 2", url: "https://www.nccer.org/", type: "program" },
      { name: "PHCC — Educational Foundation", url: "https://www.phccfoundation.org/", type: "article" },
    ],
  ),

  s(nx(), "p26", "g13",
    "The most critical year for career preparation. If you're on the apprenticeship track, apply to programs and prepare for aptitude tests (math, reading comprehension, mechanical reasoning). If going the CTE route, take advanced construction/building trades courses and earn industry certifications (OSHA, NCCER). Research which path aligns with your goals: union vs. non-union, residential vs. commercial, service vs. new construction. Plumbing is diverse — find your niche.",
    ["Advanced Math (Applied)", "CTE: Building Trades Advanced", "OSHA / NCCER Certifications", "English (Business Writing)", "Physical Education (Strength)"],
    [
      { name: "UA Apprenticeship Application", url: "https://www.ua.org/join-the-ua", description: "Complete your application to the United Association apprenticeship — includes aptitude test, interview, and physical requirements assessment." },
      { name: "Earn NCCER Plumbing Certification", url: "https://www.nccer.org/", description: "Complete NCCER Plumbing Level 1 certification while still in high school if your CTE program offers it." },
    ],
    [
      { name: "International Plumbing Code (IPC) — Study Guide", url: "https://www.iccsafe.org/", type: "book" },
      { name: "PHCC — Apprentice Resources", url: "https://www.phccweb.org/", type: "article" },
    ],
  ),

  s(nx(), "p26", "g14",
    "For the apprenticeship path: secure an apprenticeship position — the UA, independent contractors, and some large employers (school districts, hospitals, military bases) offer apprenticeships. For the CTE/college path: enroll in a plumbing or construction technology program at a community or technical college. Some colleges offer associate degrees in Plumbing Technology or Construction Management. Apprenticeship is the most common path — earn while you learn, no student debt, and clear progression to journeyman and master plumber.",
    ["Apprenticeship or CTE Program Focus", "NCCER Plumbing Levels 1-2 (if available)", "Applied Math & Blueprint Reading", "Business Basics (Future Contractor)"],
    [
      { name: "Begin Plumbing Apprenticeship", url: "https://www.apprenticeship.gov/", description: "Start your 4-5 year apprenticeship — paid on-the-job training (40 hours/week) plus evening classroom instruction in plumbing theory, codes, and safety." },
      { name: "UA — Local Union Membership", url: "https://www.ua.org/", description: "If you joined a UA apprenticeship, get involved in your local — networking, continuing education, and union benefits." },
    ],
    [
      { name: "International Plumbing Code (IPC) Book", url: "https://www.iccsafe.org/", type: "book" },
      { name: "RSES — Refrigeration Service Engineers Society (For HVAC crossover)", url: "https://www.rses.org/", type: "article" },
    ],
  ),

  s(nx(), "p26", "g15",
    "Plumbing Apprenticeship (4-5 years). Years 1-2: learn basic skills — tool use, safety, pipe cutting and joining (soldering, brazing, threading, gluing), fixture installation, and basic code. Years 3-4: advanced skills — system design, commercial plumbing, medical gas systems, blueprint reading, and advanced code. Year 5: preparing for journeyman exam, supervising newer apprentices, and developing specialty skills. Apprentices earn a progressive wage scale — starting at 40-60% of journeyman rate, increasing each year. After completing your apprenticeship, you take the journeyman plumber licensing exam.",
    ["Plumbing Theory & Code", "Pipe Joining Methods (Solder, Braze, Thread, Glue)", "Fixture & Appliance Installation", "Blueprint Reading & System Design", "Safety & OSHA Compliance"],
    [
      { name: "UA Apprenticeship Program / NCCER Plumbing", url: "https://www.ua.org/", description: "Complete your apprenticeship through the UA or an approved program — 8,000 hours of OJT plus 500-1,000 hours of classroom instruction." },
      { name: "Plumbing Continuing Education", url: "", description: "Attend manufacturer training (Viega, Uponor, Milwaukee Tool), code update seminars, and specialty courses in backflow prevention, medical gas, or green plumbing." },
    ],
    [
      { name: "IPC / UPC Code Books (Your State's Code)", url: "https://www.iccsafe.org/", type: "book" },
      { name: "PHCC — Apprenticeship Resources", url: "https://www.phccweb.org/", type: "program" },
    ],
  ),

  s(nx(), "p26", "g16",
    "Journeyman Plumber: After passing the journeyman exam, you're a licensed plumber. Work independently, supervise apprentices, and earn full journeyman wages ($25-$45+/hr depending on location and specialization). Continue with continuing education to maintain your license. After 2-4 years as a journeyman, you can test for the Master Plumber license, which allows you to: pull permits, own a plumbing contracting business, and supervise all plumbing work on a job site. Master plumbers are among the highest-paid tradespeople — especially those who run their own businesses.",
    ["Journeyman to Master: Advanced Code", "Business Management & Estimating", "Specialized: Medical Gas / Fire Sprinkler / etc.", "Supervision & Project Management", "Continuing Education (License Maintenance)"],
    [
      { name: "Master Plumber Exam Prep", url: "", description: "Study for the Master Plumber exam — advanced code, business law, project management, and plan review. This license allows you to run your own business." },
      { name: "Nexstar Network / Service Roundtable", url: "https://www.nexstarnetwork.com/", description: "Business training and peer groups for plumbing/HVAC/electrical contractors — resources for plumbers who want to run successful businesses." },
    ],
    [
      { name: "The E-Myth Contractor — Michael Gerber", url: "", type: "book" },
      { name: "Plumbing & Mechanical Magazine", url: "https://www.pmmag.com/", type: "article" },
    ],
  ),

  s(nx(), "p26", "g17",
    "Master plumbers have many paths: 1) Own a plumbing contracting business — residential service, new construction, or commercial/industrial. Successful plumbing business owners can earn $100K-$200K+/year. 2) Become a plumbing inspector for a city or county — ensure code compliance and protect public health. 3) Specialize in high-demand niches: medical gas systems, fire sprinkler systems, green/sustainable plumbing, or hydronic heating. 4) Teach the next generation as an instructor at a union training center or technical college. A bachelor's in Construction Management or Business Administration can complement a Master Plumber license for large-scale project management.",
    ["Master Plumber License", "Business Ownership / Construction Management", "Advanced Specialty Certification", "Teaching / Mentoring Apprentices", "Code Development & Inspection"],
    [
      { name: "MCAA — Mechanical Contractors Association of America", url: "https://www.mcaa.org/", description: "National association for mechanical, plumbing, and service contracting — education, advocacy, and networking for plumbing business owners." },
      { name: "ASPE — American Society of Plumbing Engineers", url: "https://www.aspe.org/", description: "For plumbers moving into design and engineering — plumbing system design, code development, and technical standards." },
    ],
    [
      { name: "ASPE Plumbing Engineering Design Handbook", url: "https://www.aspe.org/", type: "book" },
      { name: "ICC — International Code Council", url: "https://www.iccsafe.org/", type: "article" },
    ],
  ),

];
