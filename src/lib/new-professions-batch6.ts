/**
 * Batch 6 — p32 Nurse, p33 Dentist, p34 Graphic Designer, p35 Police Officer, p36 Entrepreneur
 * 
 * All 17 grade levels per profession. IDs: rs1040–rs1124.
 * 
 * Import: import { newProfessionsBatch6 } from './new-professions-batch6';
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

let n = 1040;
function nx(): string { return "rs" + (n++); }

export const newProfessionsBatch6: RoadmapStep[] = [

  // ========================================================================
  // p32 — NURSE
  // ========================================================================

  s(nx(), "p32", "g1",
    "Nursing starts with a caring heart! At this age, children naturally show concern when someone is hurt or sad — the earliest seeds of empathy. Encourage nurturing play with dolls and stuffed animals: taking temperatures, bandaging 'booboos,' and offering comfort. Talk about how our bodies work — 'your heart pumps blood like a squeeze toy, your lungs fill with air like a balloon.' Read stories about doctors, nurses, and caring for others. Visit a doctor's office to see healthcare helpers in action. Every nurse remembers wanting to help people feel better — that instinct is the foundation of nursing.",
    ["Caring & Empathy Play", "Body Awareness (Head, Shoulders, Knees, Toes)", "Counting (Heartbeats & Breaths)", "Storytelling (Helping Stories)"],
    [
      { name: "Play Doctor Kit & Stuffed Animal Hospital", url: "", description: "Set up a pretend clinic — take temperatures, give pretend medicine, and wrap bandages. The earliest form of patient care and empathy development." },
      { name: "Visit a Pediatrician's Office", url: "", description: "Turn a routine checkup into a learning experience — let your child watch the nurse take vitals and ask simple questions about the tools." },
    ],
    [
      { name: "Corduroy Goes to the Doctor by Don Freeman", url: "", type: "book" },
      { name: "Daniel Tiger's Neighborhood: Daniel Visits the Doctor", url: "https://pbskids.org/daniel/", type: "video" },
    ],
  ),

  s(nx(), "p32", "g2",
    "Build healthy habits and caring instincts. Practice proper hand washing — nurses wash their hands dozens of times a day to keep patients safe. Learn the basics of staying healthy: eating colorful foods, getting enough sleep, and exercising. Talk about what nurses do: they give medicine, check temperatures, help people walk, and comfort families. Practice counting pulse — find your heartbeat, count the beats. Visit the school nurse and learn about their job. The most important nursing skills aren't technical — they're compassion, patience, and a genuine desire to help.",
    ["Health & Hygiene (Hand Washing, Teeth Brushing)", "Counting & Numbers (Taking a Pulse)", "Empathy & Kindness", "Science (Body Basics)"],
    [
      { name: "American Red Cross — Pillowcase Project", url: "https://www.redcross.org/get-help/how-to-prepare-for-emergencies/teaching-kids-about-emergency-preparedness/pillowcase-project.html", description: "Free preparedness education for children — learn about emergencies, coping skills, and helping others stay safe." },
      { name: "School Nurse Job Shadow (Brief Visit)", url: "", description: "Spend 15 minutes with the school nurse — see what tools they use, who they help, and how they care for students." },
    ],
    [
      { name: "Nurse Clementine by Simon James", url: "", type: "book" },
      { name: "Sid the Science Kid: Germs (PBS)", url: "https://pbskids.org/sid/", type: "video" },
    ],
  ),

  s(nx(), "p32", "g3",
    "Build reading and math foundations — nurses read patient charts, calculate medication doses, and document care. Learn about the major body parts: heart, lungs, brain, stomach, and bones. Practice simple first aid: cleaning a scrape with soap and water, applying a bandage, and knowing when to get adult help. Start learning about healthy foods and why different food groups matter. Keep a 'health helper journal' — draw or write about times you helped someone feel better. Talk about the difference between doctors and nurses — nurses spend more time at the bedside providing direct care.",
    ["Reading & Phonics", "Math (Addition & Subtraction)", "Science (Body Systems Basics)", "Health (Nutrition & First Aid)"],
    [
      { name: "KidsHealth.org — How the Body Works", url: "https://kidshealth.org/en/kids/", description: "Free, kid-friendly articles and videos about body systems, health, and staying well — from the experts at Nemours Children's Health." },
      { name: "First Aid Practice at Home", url: "", description: "Practice basic first aid skills — cleaning a scrape, applying bandages, making an ice pack — with parent supervision." },
    ],
    [
      { name: "The Magic School Bus: Inside the Human Body by Joanna Cole", url: "", type: "book" },
      { name: "BrainPOP Jr.: Going to the Doctor", url: "https://jr.brainpop.com/health/bewell/goingtothedoctor/", type: "video" },
    ],
  ),

  s(nx(), "p32", "g4",
    "Deepen reading comprehension with nonfiction about the human body. Learn about the five senses and how they connect to the brain. Practice measurement and data — nurses measure temperature, weight, blood pressure, and track changes over time. Learn about germs and how the immune system fights illness — white blood cells are the body's soldiers. Start learning about healthy lifestyle choices: exercise, sleep, nutrition, and emotional health. Read about famous nurses in history: Florence Nightingale, Clara Barton, and Mary Seacole changed healthcare forever.",
    ["Reading Comprehension (Nonfiction Health)", "Math (Measurement & Charts)", "Life Science (Immune System)", "Health (Nutrition & Exercise)"],
    [
      { name: "American Heart Association — Kids Heart Challenge", url: "https://www.heart.org/en/professional/educator/school-programs/kids-heart-challenge", description: "School-based program teaching heart health, CPR awareness, and healthy habits — often includes fundraising for heart research." },
      { name: "Create a Body Systems Poster", url: "", description: "Draw a large body outline and fill in the major organs — label the heart, lungs, brain, stomach, and bones. Add facts about each." },
    ],
    [
      { name: "DK Eyewitness: Human Body", url: "", type: "book" },
      { name: "BrainPOP: Immune System", url: "https://www.brainpop.com/health/bodysystems/immunesystem/", type: "video" },
    ],
  ),

  s(nx(), "p32", "g5",
    "Math expands with multiplication and division — nurses use these for calculating medication dosages and IV drip rates. Study the major body systems in more detail: circulatory (heart and blood), respiratory (lungs and breathing), digestive, and skeletal. Learn about common childhood illnesses and how the body fights them. Start learning medical vocabulary: stethoscope, thermometer, diagnosis, symptom, and vaccination. Consider joining a community service club — nursing is fundamentally about serving others. Young service experiences build the compassion muscle.",
    ["Math (Multiplication, Division & Fractions)", "Life Science (Human Body Systems)", "Health (Disease & Prevention)", "English (Medical Vocabulary)"],
    [
      { name: "HOSA — Future Health Professionals (Elementary Introduction)", url: "https://hosa.org/", description: "HOSA offers health science exploration for young students — learn about healthcare careers through activities and competitions." },
      { name: "Red Cross Babysitting Basics Course (Age-Appropriate)", url: "https://www.redcross.org/take-a-class/babysitting", description: "Start learning first aid, emergency response, and caregiving skills — foundational for future healthcare providers." },
    ],
    [
      { name: "National Geographic Kids: Human Body", url: "https://kids.nationalgeographic.com/science/article/human-body", type: "book" },
      { name: "Operation Ouch! (BBC/YouTube)", url: "https://www.youtube.com/c/OperationOuch", type: "video" },
    ],
  ),

  s(nx(), "p32", "g6",
    "Expand research skills — research a body system in depth and present your findings. Strengthen math with fractions and decimals — nurses calculate precise medication doses where decimal points save lives. Learn about the nursing profession more deeply: registered nurses (RNs), nurse practitioners (NPs), and specialties like pediatrics, emergency, and oncology. Learn basic vital signs: temperature, pulse, respiration, and blood pressure — what's normal and what's not. Volunteer in your community — nursing is service work, and community experience builds the interpersonal skills nurses need.",
    ["English Language Arts (Research & Presentation)", "Math (Fractions & Decimals)", "Life Science (Body Systems Advanced)", "Health (Vital Signs Basics)"],
    [
      { name: "Scouts BSA — First Aid Merit Badge / Health Activities", url: "https://www.scouting.org/", description: "Learn first aid, CPR awareness, and emergency preparedness through scouting — building skills and confidence in health situations." },
      { name: "Community Service Project (Health-Related)", url: "", description: "Volunteer at a health fair, senior center, or hospital auxiliary — experience the service dimension of healthcare firsthand." },
    ],
    [
      { name: "The Human Body Book (DK)", url: "", type: "book" },
      { name: "Mystery Science: Human Machine", url: "https://mysteryscience.com/", type: "course" },
    ],
  ),

  s(nx(), "p32", "g7",
    "Math ramps up with pre-algebra — nurses use math for IV flow rates, medication calculations, and intake/output monitoring. Deepen understanding of human biology — how body systems work together (homeostasis). Learn about the healthcare system: hospitals, clinics, long-term care, and home health. Study infection control and why it matters — hand hygiene, PPE, and sterile technique save lives. Consider volunteering at a hospital (many have junior volunteer programs starting at age 13-14). Read about the different pathways into nursing: ADN (2-year), BSN (4-year), and accelerated programs.",
    ["Math (Pre-Algebra & Data Analysis)", "Life Science (Homeostasis & Systems)", "Health (Infection Control)", "English (Healthcare Communication)"],
    [
      { name: "Hospital Junior Volunteer Program (Age 13+)", url: "", description: "Many hospitals offer junior volunteer programs — assisting in gift shops, delivering flowers, or greeting visitors, building comfort in healthcare settings." },
      { name: "American Red Cross — CPR/AED Training (Age-Appropriate)", url: "https://www.redcross.org/take-a-class/cpr", description: "Take a CPR and AED training course — life-saving skills that every future nurse should have." },
    ],
    [
      { name: "Khan Academy: Human Body Systems", url: "https://www.khanacademy.org/science/health-and-medicine/human-anatomy-and-physiology", type: "course" },
      { name: "Florence Nightingale: The Courageous Life of the Legendary Nurse by Catherine Reef", url: "", type: "book" },
    ],
  ),

  s(nx(), "p32", "g8",
    "Take pre-algebra and the most advanced science available — biology is the foundation of nursing. Learn about common chronic diseases: diabetes, asthma, heart disease, and how nurses help patients manage them. Study human development across the lifespan — nurses care for patients from newborns to centenarians. Explore nursing careers more deeply: ER, ICU, pediatrics, labor & delivery, mental health, community health, and school nursing. Shadow a nurse if possible — ask your school nurse or a family friend in healthcare. Nursing is the largest healthcare profession — opportunities are vast and diverse.",
    ["Pre-Algebra", "Life Science (Disease & Chronic Conditions)", "English (Technical Reading)", "Health (Human Development)"],
    [
      { name: "Nursing Career Exploration — Virtual Shadowing", url: "https://www.discovernursing.com/", description: "Johnson & Johnson's Discover Nursing — virtual job shadows, career profiles, and scholarship information for aspiring nurses." },
      { name: "Science Olympiad — Anatomy & Physiology Event", url: "https://www.soinc.org/", description: "Competitive event covering body systems, disease processes, and health science — excellent preparation for nursing education." },
    ],
    [
      { name: "Crash Course: Anatomy & Physiology", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtOAKed_MxxWBNaPno5h3Zs8", type: "video" },
      { name: "American Nurses Association — Career Resources", url: "https://www.nursingworld.org/", type: "article" },
    ],
  ),

  s(nx(), "p32", "g9",
    "Take algebra and the most advanced biology available. If your school offers health science courses, enroll. Nursing requires strong science grades. Explore the different educational paths: Licensed Practical Nurse (LPN — 1 year certificate), Associate Degree in Nursing (ADN — 2 years), and Bachelor of Science in Nursing (BSN — 4 years). The BSN is increasingly the standard for hospital nursing. Learn about the NCLEX — the national licensing exam all nurses must pass. Volunteer at a hospital or nursing home to gain patient-facing experience.",
    ["Algebra I", "Life Science / Biology", "Health Science Elective", "English (Healthcare Writing)", "Psychology Intro"],
    [
      { name: "HOSA — Future Health Professionals (Active Membership)", url: "https://hosa.org/", description: "Join HOSA — compete in nursing assistant, medical knowledge, and health science events at regional, state, and national levels." },
      { name: "Hospital / Nursing Home Volunteer", url: "", description: "Regular volunteering in healthcare settings — transport patients, assist with activities, and observe healthcare professionals at work." },
    ],
    [
      { name: "TED-Ed: What Causes Headaches?", url: "https://ed.ted.com/", type: "video" },
      { name: "The American Nurse (Documentary & Book)", url: "https://www.americannurseproject.com/", type: "video" },
    ],
  ),

  s(nx(), "p32", "g10",
    "Take Honors Biology and Chemistry — nursing education requires strong science foundations. Start learning medical terminology — the language of healthcare. If 16+, consider a Certified Nursing Assistant (CNA) program — earn a certification while still in high school and gain direct patient care experience. Research BSN programs at universities — competitive programs consider GPA, test scores, and healthcare experience. Shadow nurses in different specialties to understand the breadth of nursing — it's far more than bedside care.",
    ["Honors Biology", "Chemistry", "Algebra / Geometry", "Medical Terminology", "Health Science Elective"],
    [
      { name: "Certified Nursing Assistant (CNA) Program", url: "", description: "Many community colleges and vocational schools offer CNA programs for high school students — earn certification, gain patient care experience, and get paid while in school." },
      { name: "Nursing Summer Camps / Healthcare Immersion Programs", url: "", description: "Many universities (Johns Hopkins, NYU, University of Pennsylvania) offer summer nursing exploration programs for high school students." },
    ],
    [
      { name: "Coursera: Vital Signs — Understanding What the Body Is Telling Us (UPenn)", url: "https://www.coursera.org/learn/vital-signs", type: "course" },
      { name: "The Shift by Theresa Brown, RN", url: "", type: "book" },
    ],
  ),

  s(nx(), "p32", "g11",
    "Take Honors/AP Biology and Chemistry. If you earned CNA certification, work part-time — paid patient care experience is invaluable for nursing school applications and personal growth. Nursing schools want applicants who understand what caring for patients actually feels like. Research BSN programs — look at NCLEX pass rates (80%+ is good), clinical placement opportunities, and program accreditation (CCNE or ACEN). Learn about nursing specialties: critical care, pediatrics, oncology, labor & delivery, mental health, and surgical nursing — each requires different skills and temperaments.",
    ["Honors Biology / AP Biology", "Honors Chemistry", "Algebra II", "Psychology (AP or Honors)", "Medical Terminology (Advanced)"],
    [
      { name: "CNA Employment — Hospital or Long-Term Care", url: "", description: "Work as a CNA during summers or part-time — direct patient care builds clinical judgment, communication skills, and nursing school application strength." },
      { name: "National Student Nurses Association (NSNA) — High School Outreach", url: "https://www.nsna.org/", description: "Explore NSNA resources for pre-nursing students — learn about nursing education, scholarships, and leadership opportunities." },
    ],
    [
      { name: "Khan Academy: MCAT / Biology (for science depth)", url: "https://www.khanacademy.org/science/health-and-medicine", type: "course" },
      { name: "The Language of Medicine by Davi-Ellen Chabner", url: "", type: "book" },
    ],
  ),

  s(nx(), "p32", "g12",
    "Take AP Biology and AP Chemistry — strong AP scores demonstrate college readiness for competitive nursing programs. Enroll in AP Psychology — understanding human behavior and mental processes is essential for nursing. Continue CNA work if possible. Research the direct-entry BSN, accelerated BSN, and ADN-to-BSN pathways. Learn about the NCLEX-RN exam structure. Explore combined BS-to-DNP programs if you're interested in becoming a Nurse Practitioner. Shadow nurses in different settings: ICU, ER, pediatrics, community health — the more you see, the better informed your path.",
    ["AP Biology", "AP Chemistry", "AP Psychology", "Pre-Calculus", "English (Scientific Writing)"],
    [
      { name: "Nursing Shadowing — Multiple Specialties", url: "", description: "Arrange shadowing days with nurses in different departments — ER, ICU, labor & delivery, and outpatient clinics. Each reveals different aspects of nursing." },
      { name: "Volunteer EMT / Junior EMS Program", url: "https://www.nremt.org/", description: "Some communities offer junior EMS programs — gain emergency response experience and see the front lines of healthcare." },
    ],
    [
      { name: "edX: The Science of Health Care Delivery (ASU)", url: "https://www.edx.org/", type: "course" },
      { name: "Being Mortal by Atul Gawande", url: "", type: "book" },
    ],
  ),

  s(nx(), "p32", "g13",
    "The most critical year for college preparation. Take AP Biology, AP Chemistry, and AP Psychology — nursing programs value rigorous science preparation. Continue CNA work or healthcare volunteering (aim for 100+ hours). Research BSN programs thoroughly — public universities often offer excellent nursing programs at lower cost. Some programs offer direct admission to nursing as a freshman; others require applying to the nursing major after prerequisites. Learn about the TEAS (Test of Essential Academic Skills) or HESI — entrance exams for many nursing programs. Write compelling application essays about why you want to be a nurse.",
    ["AP Biology", "AP Chemistry", "AP Psychology", "AP Statistics (recommended)", "English (Application Essays)"],
    [
      { name: "Nursing School Summer Immersion Programs", url: "", description: "Many nursing schools offer pre-college summer programs — experience simulation labs, clinical skills, and nursing school culture before applying." },
      { name: "AACN — Nursing Program Search", url: "https://www.aacnnursing.org/", description: "American Association of Colleges of Nursing — search accredited BSN, MSN, and DNP programs nationwide." },
    ],
    [
      { name: "TEAS Prep — ATI Testing", url: "https://www.atitesting.com/teas-prep", type: "program" },
      { name: "The Spirit Catches You and You Fall Down by Anne Fadiman", url: "", type: "book" },
    ],
  ),

  s(nx(), "p32", "g14",
    "Apply to BSN programs at accredited universities. Most BSN programs require: strong GPA (3.5+ competitive), science prerequisites, TEAS/HESI scores, healthcare experience, and essays. Some highly competitive programs admit directly as freshmen; others admit to pre-nursing then require a secondary application after prerequisites. Complete AP exams — strong scores earn college credit. Continue CNA work throughout senior year. Consider applying to nursing programs in different states — your license is national (NCLEX) even though schools vary by state. Reach out to nursing students at your target schools to learn about their experience.",
    ["AP Biology (Exam)", "AP Chemistry (Exam)", "AP Psychology (Exam)", "Healthcare Experience (CNA/Volunteer)", "English (College Essays)"],
    [
      { name: "Apply to CCNE/ACEN Accredited BSN Programs", url: "", description: "Top BSN programs: University of Pennsylvania, Duke, UNC Chapel Hill, University of Michigan, UCLA, Emory, NYU, University of Washington, and many excellent state university programs." },
      { name: "NCLEX-RN Overview — NCSBN", url: "https://www.ncsbn.org/nclex.htm", type: "article", description: "Learn about the NCLEX-RN — the national licensing exam all nurses must pass. Understanding the end goal helps you choose the right program." },
    ],
    [
      { name: "NCSBN — NCLEX-RN Test Plan", url: "https://www.ncsbn.org/nclex.htm", type: "article" },
      { name: "The Nurses: A Year of Secrets, Drama, and Miracles by Alexandra Robbins", url: "", type: "book" },
    ],
  ),

  s(nx(), "p32", "g15",
    "BSN program (4 years): Year 1: Anatomy & physiology, microbiology, chemistry, nutrition, and general education. Year 2: Pathophysiology, pharmacology, health assessment, and nursing fundamentals. Year 3: Medical-surgical nursing, pediatrics, obstetrics, mental health nursing, and clinical rotations in hospitals. Year 4: Critical care, community health, leadership, capstone clinical preceptorship (working one-on-one with an RN), and NCLEX preparation. Clinical hours range from 600-1,200+ depending on the program. Graduate, pass the NCLEX-RN, and become a licensed Registered Nurse. Some pursue ADN first (2 years) then complete RN-to-BSN online while working — faster to employment, same destination.",
    ["Anatomy & Physiology", "Microbiology & Pathophysiology", "Pharmacology", "Nursing Fundamentals & Clinical Skills", "Clinical Rotations (Med-Surg, Peds, OB, Psych)"],
    [
      { name: "National Student Nurses Association (NSNA)", url: "https://www.nsna.org/", description: "Join your school's NSNA chapter — conventions, scholarships, leadership, and networking with nursing students nationwide." },
      { name: "Nurse Externship / Summer Internship", url: "", description: "Many hospitals offer paid summer nursing internships between junior and senior year — gain clinical experience, mentorship, and a potential job offer." },
    ],
    [
      { name: "Saunders Comprehensive Review for the NCLEX-RN", url: "", type: "book" },
      { name: "UWorld NCLEX Prep", url: "https://nursing.uworld.com/nclex/", type: "program" },
    ],
  ),

  s(nx(), "p32", "g16",
    "Master of Science in Nursing (MSN) or Doctor of Nursing Practice (DNP) — the path to advanced practice. Nurse Practitioner (NP) tracks: Family, Adult-Gerontology, Pediatrics, Psychiatric-Mental Health, and Women's Health. Other MSN paths: Nurse Educator, Nurse Administrator, Clinical Nurse Specialist, Nurse Anesthetist (CRNA — one of the highest-paid nursing roles), and Nurse Midwife. MSN programs: 2-3 years including clinical hours. DNP programs: 3-4 years with a scholarly project. Advanced practice nurses can diagnose conditions, prescribe medications, and manage patient care independently in many states.",
    ["Advanced Pathophysiology", "Advanced Health Assessment", "Pharmacotherapeutics", "NP Specialty Track (Family, Acute Care, Psych, etc.)", "Clinical Residency (500-1,000+ hours)"],
    [
      { name: "American Association of Nurse Practitioners (AANP)", url: "https://www.aanp.org/", description: "Professional organization for NPs — certification, advocacy, continuing education, and career resources for advanced practice nurses." },
      { name: "Sigma Theta Tau — Nursing Honor Society", url: "https://www.sigmanursing.org/", description: "International honor society of nursing — research grants, leadership development, and networking with nursing leaders worldwide." },
    ],
    [
      { name: "AANP / ANCC NP Certification Exam Prep", url: "https://www.aanp.org/student-resources", type: "program" },
      { name: "Nurse Burnout: Overcoming Stress in Nursing by Suzanne Waddill-Goad", url: "", type: "book" },
    ],
  ),

  s(nx(), "p32", "g17",
    "Doctor of Nursing Practice (DNP) or Ph.D. in Nursing — the highest levels of nursing education. DNP: practice-focused doctorate emphasizing clinical leadership, quality improvement, and evidence-based practice translation. Ph.D. in Nursing: research-focused doctorate for careers in academic research, health policy, and nursing science. Career pinnacles: Chief Nursing Officer (CNO) of a hospital system, Dean of a nursing school, health policy advisor, or advanced clinical researcher. Nurse Anesthetists (CRNAs) with a DNP are among the highest earners in nursing. Nursing offers extraordinary career flexibility — from bedside pediatric nurse to health system executive to global health policy leader — all starting from that same caring instinct in childhood.",
    ["DNP / Ph.D. in Nursing", "Healthcare Leadership & Administration", "Nursing Research & Evidence-Based Practice", "Health Policy & Advocacy", "Academic Faculty / Mentoring"],
    [
      { name: "American Academy of Nursing (Fellow — FAAN)", url: "https://www.aannet.org/", description: "Fellowship in the American Academy of Nursing recognizes nurse leaders who have made extraordinary contributions to nursing and healthcare." },
      { name: "International Council of Nurses (ICN)", url: "https://www.icn.ch/", description: "Global federation of nursing associations — international conferences, global health policy work, and collaboration with nurses worldwide." },
    ],
    [
      { name: "Nursing Research (Journal)", url: "https://journals.lww.com/nursingresearchonline/pages/default.aspx", type: "article" },
      { name: "Policy & Politics in Nursing and Health Care by Diana Mason et al.", url: "", type: "book" },
    ],
  ),

  // ========================================================================
  // p33 — DENTIST
  // ========================================================================

  s(nx(), "p33", "g1",
    "Dentistry starts with healthy smiles! At this age, children are learning to brush their teeth and developing habits that last a lifetime. Make tooth brushing fun — sing a two-minute song, use a colorful timer, or brush together as a family. Talk about why teeth are important: for eating, talking, and smiling. Count teeth together — 'how many teeth do you have?' Learn about foods that are good for teeth (crunchy vegetables, cheese, water) and foods that can cause cavities (sticky candy, sugary drinks). Visit the dentist and make it a positive, exciting experience. Every dentist started by learning to care for their own smile!",
    ["Healthy Habits (Brushing & Flossing)", "Counting (Number of Teeth)", "Food Awareness (Healthy vs. Sugary)", "Imaginative Play (Dentist Pretend)"],
    [
      { name: "Play Dentist — Pretend Dental Checkup", url: "", description: "Use a toothbrush, small mirror, and stuffed animals to play 'dentist' — practice counting teeth, checking for 'sugar bugs,' and teaching toys how to brush." },
      { name: "ADA — Kids' Dental Health Resources", url: "https://www.mouthhealthy.org/", description: "American Dental Association's MouthHealthy Kids — games, videos, and activities teaching children about oral health in fun, engaging ways." },
    ],
    [
      { name: "The Berenstain Bears Visit the Dentist by Stan & Jan Berenstain", url: "", type: "book" },
      { name: "Sesame Street: Healthy Teeth, Healthy Me (YouTube)", url: "https://www.youtube.com/", type: "video" },
    ],
  ),

  s(nx(), "p33", "g2",
    "Build strong oral health routines. Practice brushing for a full two minutes twice a day and begin flossing with parent help. Learn the names of different teeth: incisors (front biting teeth), canines (pointy tearing teeth), and molars (back chewing teeth). Talk about what happens at the dentist: the cleaning, the exam, the X-rays, and why the dentist wears a mask and gloves. Learn about tooth-friendly snacks vs. cavity-causing snacks using the 'sugar bug' concept. Count lost baby teeth — track when they fall out and when adult teeth come in.",
    ["Health & Hygiene (Brushing & Flossing)", "Counting & Patterning (Teeth)", "Fine Motor Skills (Brushing Technique)", "Science (Tooth Types & Functions)"],
    [
      { name: "ADA National Children's Dental Health Month Activities", url: "https://www.ada.org/resources/community-initiatives/national-childrens-dental-health-month", description: "Free posters, activity sheets, and resources from the ADA — celebrate healthy smiles every February with classrooms nationwide." },
      { name: "Tooth Fairy Science — Track Lost Teeth", url: "", description: "Create a tooth chart — color in which teeth have been lost, track when they fall out, and examine the new adult teeth coming in. Early dental observation!" },
    ],
    [
      { name: "The Tooth Book by Dr. Seuss", url: "", type: "book" },
      { name: "Daniel Tiger's Neighborhood: Daniel Goes to the Dentist", url: "https://pbskids.org/daniel/", type: "video" },
    ],
  ),

  s(nx(), "p33", "g3",
    "Build reading and math foundations — dentists read X-rays, measure tooth movement, and calculate anesthesia dosages. Learn about the parts of a tooth: enamel (the hard outer layer), dentin, pulp (where nerves live), and roots. Understand why cavities happen: sugar + bacteria = acid that eats holes in enamel. Practice proper brushing technique: small circles, all surfaces, tongue included. Start learning about dental tools: the mirror, explorer (the 'tooth counter'), and scaler. Read books about visiting the dentist and caring for teeth. Write a 'tooth health' story or journal about your own dental visits.",
    ["Reading & Phonics", "Math (Addition & Subtraction)", "Science (Tooth Anatomy)", "Writing (Dental Health Journal)"],
    [
      { name: "Colgate Bright Smiles, Bright Futures", url: "https://www.colgate.com/en-us/oral-health-education/category/kids-education", description: "Free educational program reaching millions of children — interactive activities, videos, and classroom materials about oral health." },
      { name: "MyPlate for Dental Health", url: "https://www.myplate.gov/", description: "Learn about foods and drinks that build strong teeth — calcium-rich dairy, crunchy fruits/vegetables, and water instead of sugary drinks." },
    ],
    [
      { name: "Open Wide: Tooth School Inside by Laurie Keller", url: "", type: "book" },
      { name: "BrainPOP Jr.: Caring for Teeth", url: "https://jr.brainpop.com/health/bewell/caringforteeth/", type: "video" },
    ],
  ),

  s(nx(), "p33", "g4",
    "Deepen reading comprehension with nonfiction about the human body and dental health. Learn about baby teeth vs. permanent teeth — you have 20 baby teeth and 32 adult teeth. Why do we have two sets? Practice measurement — dentists measure pocket depths around teeth, tooth size, and jaw alignment in millimeters. Start learning about dental hygiene tools: manual vs. electric toothbrushes, fluoride toothpaste, and mouthwash — why each matters. Learn about other dental careers: dental hygienist, orthodontist (braces specialist), oral surgeon, and dental lab technician.",
    ["Reading Comprehension (Nonfiction Health)", "Math (Measurement to mm)", "Life Science (Teeth & Mouth Biology)", "Health (Dental Hygiene Science)"],
    [
      { name: "Delta Dental — Land of Smiles (Educational Program)", url: "https://www.deltadental.com/", description: "Interactive theater and classroom program teaching children about oral health — brushing, flossing, and healthy eating through fun characters." },
      { name: "Create a Tooth Model", url: "", description: "Build a 3D tooth from clay or play-dough — label enamel, dentin, pulp, and roots. Understanding tooth structure is the foundation of dentistry." },
    ],
    [
      { name: "DK Eyewitness: Human Body (Dental Section)", url: "", type: "book" },
      { name: "BrainPOP: Teeth", url: "https://www.brainpop.com/health/bodysystems/teeth/", type: "video" },
    ],
  ),

  s(nx(), "p33", "g5",
    "Math expands with multiplication and division — dentists calculate anesthesia doses, measure crown dimensions, and interpret growth patterns. Study the mouth ecosystem — saliva, bacteria, pH, and how they interact. Learn how cavities form in detail: the acid demineralization process and how fluoride helps remineralize enamel. Explore orthodontics basics — why do some people need braces? What causes crooked teeth, overbites, and underbites? Start learning about dental specialties: orthodontist, periodontist (gum specialist), endodontist (root canal specialist), pediatric dentist, and oral surgeon.",
    ["Math (Multiplication, Division & Fractions)", "Life Science (Oral Biology)", "Chemistry Intro (Acids, Bases, pH)", "Health (Dental Specialties)"],
    [
      { name: "Science Fair Project: Acid Erosion on Teeth (Eggshell Experiment)", url: "", description: "Soak eggshells (similar to tooth enamel) in different liquids — soda, juice, water, milk — to see which causes the most erosion. Classic dental science fair project." },
      { name: "4-H Health & Wellness Projects", url: "https://4-h.org/programs/health-wellness/", description: "Explore health careers including dentistry through 4-H projects — combine science, health education, and community service." },
    ],
    [
      { name: "The Toothpaste Millionaire by Jean Merrill (Chapter Book)", url: "", type: "book" },
      { name: "Crash Course Kids: What's Matter? (Chemistry Basics)", url: "https://www.youtube.com/playlist?list=PLhz12vamHOnZv8kM6Xo6blp2HnP0yg7DR", type: "video" },
    ],
  ),

  s(nx(), "p33", "g6",
    "Expand research skills — research a dental specialty and present findings. Strengthen math with fractions and decimals — dentists use precise measurements for fillings, crowns, and implants. Learn about dental diseases: cavities (caries), gum disease (gingivitis/periodontitis), and oral cancer — and how dentists prevent and treat them. Study how diet affects oral health throughout history — ancient people had fewer cavities because they ate less sugar. Consider entering a science fair with a dental health project. Research the path to becoming a dentist: 4-year undergraduate degree + 4-year DDS/DMD program = 8 years total.",
    ["English Language Arts (Research & Presentation)", "Math (Fractions & Decimals)", "Life Science (Disease Processes)", "History (History of Dentistry)"],
    [
      { name: "ADA — MouthHealthy Educator Resources", url: "https://www.mouthhealthy.org/en/educators/", description: "Free lesson plans, activities, and presentation materials from the American Dental Association — teach dental health to younger students." },
      { name: "Shadow a Dentist (Introductory Visit)", url: "", description: "Ask your family dentist if you can observe for an afternoon — most dentists love to mentor young people interested in the profession." },
    ],
    [
      { name: "Mystery Science: Chemical Reactions (Acids & Bases)", url: "https://mysteryscience.com/", type: "course" },
      { name: "The History of Dentistry (ADA)", url: "https://www.ada.org/resources/community-initiatives/national-childrens-dental-health-month", type: "article" },
    ],
  ),

  s(nx(), "p33", "g7",
    "Math ramps up with pre-algebra — dentists calculate anesthesia, interpret radiographs, and plan treatments involving precise measurements. Deepen understanding of oral anatomy: teeth, gums, tongue, palate, jaw joint (TMJ), and salivary glands. Learn about dental X-rays — how they work, what they show, and why dentists use them. Study dental materials: composite resin (white fillings), amalgam (silver fillings), porcelain (crowns), and titanium (implants). Volunteer at community dental health events if available. Research the Dental Admission Test (DAT) — required for dental school.",
    ["Math (Pre-Algebra & Data)", "Life Science (Oral Anatomy Advanced)", "Chemistry (Dental Materials)", "Health (Radiography Basics)"],
    [
      { name: "Give Kids A Smile — Volunteer Event", url: "https://www.ada.org/resources/community-initiatives/give-kids-a-smile", description: "ADA's annual event providing free dental care to underserved children — volunteer opportunities for students to observe and assist." },
      { name: "Science Olympiad — Anatomy & Physiology Event", url: "https://www.soinc.org/", description: "Covers body systems including dental/oral anatomy — competitive event building the science knowledge dental schools expect." },
    ],
    [
      { name: "Khan Academy: Chemistry", url: "https://www.khanacademy.org/science/chemistry", type: "course" },
      { name: "The Excruciating History of Dentistry by James Wynbrandt", url: "", type: "book" },
    ],
  ),

  s(nx(), "p33", "g8",
    "Take the most advanced science available — biology and chemistry are the twin foundations of dentistry. Study dental procedures: fillings, root canals, crowns, bridges, and extractions — what they are and when they're needed. Learn about the dental team: dentist, dental hygienist, dental assistant, and dental lab technician — each plays a vital role. Shadow a dentist or orthodontist if possible. Research dental school requirements: competitive GPA (3.5+), DAT scores, shadowing hours (100+ recommended), and extracurriculars. Dentistry combines science, art, and business — it's one of the few professions where you can run your own practice.",
    ["Pre-Algebra", "Life Science (Oral Biology)", "Chemistry", "English (Patient Communication)", "Art (Dental Aesthetics & Sculpting)"],
    [
      { name: "Dental Office Shadowing", url: "", description: "Spend a day at a dental practice — observe fillings, cleanings, and exams. Most dentists are eager to mentor young students considering the profession." },
      { name: "Operation Smile — Student Programs", url: "https://www.operationsmile.org/", description: "Global organization providing cleft lip/palate surgeries — student clubs raise awareness and funds, connecting dental/medical interest with humanitarian service." },
    ],
    [
      { name: "Crash Course: Anatomy & Physiology", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtOAKed_MxxWBNaPno5h3Zs8", type: "video" },
      { name: "ADA — Becoming a Dentist", url: "https://www.ada.org/resources/careers/becoming-a-dentist", type: "article" },
    ],
  ),

  s(nx(), "p33", "g9",
    "Take algebra and the most advanced biology available. Enroll in any health science or anatomy courses your school offers. Start a dental-focused volunteer commitment — community dental clinics, nursing home oral care programs, or oral health education for younger students. Learn about the DAT (Dental Admission Test) — it covers natural sciences, perceptual ability, reading comprehension, and quantitative reasoning. The Perceptual Ability Test (PAT) is unique to the DAT — it tests spatial reasoning, angle discrimination, and form development — start practicing now with free resources.",
    ["Algebra I", "Biology", "Health Science Elective", "Visual Arts / Sculpture (Manual Dexterity)", "English (Communication)"],
    [
      { name: "HOSA — Future Health Professionals (Dental Events)", url: "https://hosa.org/", description: "Compete in dental science, dental terminology, and health science events — build knowledge and confidence for dental careers." },
      { name: "Pre-Dental Shadowing & Volunteering", url: "", description: "Begin regular shadowing at a dental office and volunteer at community dental events — dental schools expect 100+ shadowing hours." },
    ],
    [
      { name: "TED-Ed: How Do Dental Braces Work?", url: "https://ed.ted.com/", type: "video" },
      { name: "DAT Perceptual Ability Test — Free Practice", url: "https://www.ada.org/education/testing/exams/dat", type: "program" },
    ],
  ),

  s(nx(), "p33", "g10",
    "Take Honors Biology and Chemistry. Dentistry requires excellent manual dexterity — consider activities that build fine motor skills: sculpture, jewelry-making, painting miniatures, playing a musical instrument, or woodworking. Continue shadowing dentists across specialties — general dentistry, orthodontics, oral surgery, and pediatric dentistry are very different. Research dental school prerequisites: biology, general chemistry, organic chemistry, biochemistry, and physics — similar to pre-med. The DDS (Doctor of Dental Surgery) and DMD (Doctor of Dental Medicine) are equivalent — same education, different name depending on the school.",
    ["Honors Biology", "Chemistry", "Algebra / Geometry", "Art / Craft (Manual Dexterity)", "Health Science Elective"],
    [
      { name: "Dental Summer Programs for High School Students", url: "", description: "Many dental schools (UCLA, University of Michigan, NYU, Boston University) offer summer dental exploration programs — hands-on simulations, lab work, and mentorship." },
      { name: "Manual Dexterity Practice — Sculpture / Instrument / Crafts", url: "", description: "Take up sculpture, pottery, piano, guitar, or detailed model-building — dentists need steady hands and fine motor control. Document your activities for dental school applications." },
    ],
    [
      { name: "Coursera: Dentistry 101 (University of Michigan)", url: "https://www.coursera.org/learn/dentistry101", type: "course" },
      { name: "The Dental Reference Manual by Geraldine M. Weinstein", url: "", type: "book" },
    ],
  ),

  s(nx(), "p33", "g11",
    "Take Honors/AP Biology and Chemistry. Continue building manual dexterity through art, music, or craft activities — dental schools specifically look for this. Research pre-dental undergraduate programs — any major is acceptable as long as prerequisites are completed, but most pre-dental students major in biology, chemistry, or a related science. Some universities offer combined BS/DDS or BA/DMD programs (7-8 years total). Continue dental shadowing and community volunteering (aim for 100+ shadowing hours and 100+ volunteer hours). Learn about the financial side of dentistry — dental school is expensive ($250,000-$500,000 in loans), but dentists are among the highest-earning professionals.",
    ["Honors Biology / AP Biology", "Honors Chemistry", "Algebra II", "Art / Music (Manual Dexterity)", "Psychology (Patient Communication)"],
    [
      { name: "Pre-Dental Association / Club (Start One at School)", url: "", description: "Start or join a pre-dental club — invite dentists to speak, organize shadowing trips, and prepare together for the dental career path." },
      { name: "Operation Smile / Global Dental Brigade Volunteer", url: "https://www.operationsmile.org/", description: "Participate in dental-focused humanitarian work — some organizations offer high school volunteer trips to support dental missions." },
    ],
    [
      { name: "Khan Academy: AP Biology", url: "https://www.khanacademy.org/science/ap-biology", type: "course" },
      { name: "ADA — Guide to Dental School", url: "https://www.ada.org/resources/careers/becoming-a-dentist", type: "article" },
    ],
  ),

  s(nx(), "p33", "g12",
    "Take AP Biology and AP Chemistry. Begin DAT preparation in earnest — many students study 3-6 months for the DAT. Continue accumulating shadowing hours across multiple specialties and settings. Research dental schools: there are about 70 dental schools in the U.S. — look at their admissions statistics (average GPA, DAT scores), clinical training facilities, and specialization rates. Consider the financial investment: in-state public dental schools (e.g., UNC, UCLA, Texas schools) are significantly less expensive than private schools. Learn about the National Board Dental Examination (NBDE) — required for licensure.",
    ["AP Biology", "AP Chemistry", "Pre-Calculus", "Psychology (AP or Honors)", "Manual Dexterity Activity"],
    [
      { name: "Dental Mission Trip / Community Dental Clinic", url: "", description: "Participate in a dental service trip or volunteer at a free dental clinic — gain clinical exposure, see the impact of dental care, and strengthen applications." },
      { name: "DAT Preparation — Start Studying", url: "https://www.ada.org/education/testing/exams/dat", description: "Begin reviewing DAT content — biology, general chemistry, organic chemistry, perceptual ability, reading, and quantitative reasoning." },
    ],
    [
      { name: "DAT Destroyer / DAT Bootcamp", url: "https://datbootcamp.com/", type: "program" },
      { name: "Teeth: The Story of Beauty, Inequality, and the Struggle for Oral Health in America by Mary Otto", url: "", type: "book" },
    ],
  ),

  s(nx(), "p33", "g13",
    "The most critical year for college preparation. Take AP Biology, AP Chemistry, and AP Physics. Prepare for and take the DAT if you're in a BS/DDS accelerated program (some require the DAT in high school). Research pre-dental programs and combined BS/DDS programs if available — these guarantee dental school admission if you maintain the required GPA. Continue shadowing and volunteering — dental schools value commitment over time, not just total hours. Write a compelling personal statement about why you want to be a dentist — focus on the blend of science, art, and service that defines dentistry.",
    ["AP Biology", "AP Chemistry", "AP Physics", "English (Personal Statement)", "Art / Music (Dexterity)"],
    [
      { name: "Dental School Summer Immersion Programs", url: "", description: "Many dental schools (University of the Pacific, Tufts, Creighton) offer summer programs — experience dental school, simulation labs, and student life before applying." },
      { name: "ASDA — American Student Dental Association (Pre-Dental Resources)", url: "https://www.asdanet.org/", description: "Explore ASDA's pre-dental resources — learn about the application process, DAT prep, and what dental schools look for." },
    ],
    [
      { name: "ADEA — Dental School Explorer", url: "https://www.adea.org/dentalschoolexplorer/", type: "program" },
      { name: "AADSAS — Dental School Application Guide", url: "https://www.adea.org/aadsas/", type: "article" },
    ],
  ),

  s(nx(), "p33", "g14",
    "Apply to universities with strong pre-dental programs. If you're not in a combined BS/DDS program, plan for a 4-year undergraduate degree + 4-year DDS/DMD program. Complete AP exams for college credit — strong scores in biology, chemistry, and physics reduce your undergraduate course load. Research dental schools even now — understanding their prerequisites ensures you take the right undergraduate courses. Continue manual dexterity activities — dental schools want to see sustained commitment, not a checklist. Apply for dental scholarships through the ADEA, ADA Foundation, and state dental associations — starting early matters.",
    ["AP Biology (Exam)", "AP Chemistry (Exam)", "AP Physics (Exam)", "Pre-Dental / Biology Major Plan", "English (College Essays)"],
    [
      { name: "Apply to Pre-Dental / BS-DDS Programs", url: "", description: "Top pre-dental: UCLA, University of Michigan, UNC, University of Florida, Texas A&M. Combined BS/DDS programs at UConn, UMKC, Nova Southeastern, and others." },
      { name: "ADEA GoDental — Application Timeline", url: "https://www.adea.org/GoDental/", description: "Comprehensive guide to the dental school application process — timeline, requirements, and tips from admissions experts." },
    ],
    [
      { name: "ADA Foundation — Dental Scholarships", url: "https://www.adafoundation.org/", type: "article" },
      { name: "The White Coat Investor by James M. Dahle, MD", url: "", type: "book" },
    ],
  ),

  s(nx(), "p33", "g15",
    "Major in biology, chemistry, or a related science on a pre-dental track. Complete all dental school prerequisites: biology, general chemistry, organic chemistry, biochemistry, physics, and English. Maintain 3.5+ GPA. Prepare for and take the DAT — aim for 20+ Academic Average (AA) for competitive programs. Accumulate 100+ shadowing hours across multiple dental specialties. Participate in dental-related research, community service, and leadership activities. Apply through AADSAS (American Association of Dental Schools Application Service) — a centralized application. Most applicants apply to 8-12 schools. Interview preparation is essential — dental schools use multiple mini-interviews (MMI) and traditional formats.",
    ["Biology / Chemistry Major", "Organic Chemistry", "Biochemistry", "Human Anatomy & Physiology", "Microbiology"],
    [
      { name: "Pre-Dental Society / ASDA Pre-Dental Chapter", url: "https://www.asdanet.org/", description: "Join your university's pre-dental organization — peer support, DAT study groups, guest speakers, and dental school application prep." },
      { name: "Dental Research Experience", url: "", description: "Participate in dental or biomedical research with a faculty mentor — research experience strengthens dental school applications and opens academic dentistry paths." },
    ],
    [
      { name: "DAT Bootcamp / DAT Booster", url: "https://datbootcamp.com/", type: "program" },
      { name: "AADSAS Application Service", url: "https://www.adea.org/aadsas/", type: "program" },
    ],
  ),

  s(nx(), "p33", "g16",
    "DDS/DMD program (4 years): Years 1-2: Biomedical sciences (anatomy, physiology, biochemistry, microbiology, pathology) and pre-clinical dental sciences (dental anatomy, operative dentistry, dental materials). Simulation lab practice on mannequins ('typodonts'). Years 3-4: Clinical rotations treating real patients under faculty supervision — fillings, crowns, root canals, extractions, and dentures. Pass the Integrated National Board Dental Examination (INBDE) for licensure. Many graduates then pursue a 1-2 year General Practice Residency (GPR) or Advanced Education in General Dentistry (AEGD). Those interested in specialties (orthodontics, oral surgery, endodontics, etc.) apply for 2-6 year residency programs.",
    ["Dental Anatomy & Occlusion", "Operative & Restorative Dentistry", "Oral Pathology & Medicine", "Clinical Rotations (All Departments)", "Practice Management & Ethics"],
    [
      { name: "American Student Dental Association (ASDA)", url: "https://www.asdanet.org/", description: "National organization for dental students — advocacy, conferences, networking, and resources for every stage of dental education." },
      { name: "Dental Specialty Externships", url: "", description: "During summers, extern in specialty clinics — orthodontics, oral surgery, periodontics, or pediatric dentistry — to explore career paths." },
    ],
    [
      { name: "INBDE — Integrated National Board Dental Exam", url: "https://www.ada.org/education/testing/exams/inbde", type: "program" },
      { name: "Mosby's Dental Drug Reference", url: "", type: "book" },
    ],
  ),

  s(nx(), "p33", "g17",
    "After DDS/DMD and licensure: 1) General dentist — the most common path, owning or joining a practice providing comprehensive care. 2) Specialty residency (2-6 years) — orthodontics (braces), oral & maxillofacial surgery, endodontics (root canals), periodontics (gums/implants), pediatric dentistry, prosthodontics (complex restorations), and more. Specialists earn significantly more but require additional years of training. 3) Academic dentistry — teach at a dental school, conduct research, and contribute to advancing the profession. 4) Public health dentistry — work in community health centers, Indian Health Service, or military dentistry serving underserved populations. 5) Combined DDS/Ph.D. for academic/research careers. Dentistry offers exceptional work-life balance, high earning potential, and the deep satisfaction of restoring health, function, and confidence through beautiful smiles.",
    ["Advanced Specialty Training (Residency)", "Advanced Clinical Dentistry", "Practice Ownership & Management", "Dental Research & Academics", "Public Health Dentistry"],
    [
      { name: "American Dental Association (ADA) — Member Resources", url: "https://www.ada.org/", description: "Professional organization representing dentists — continuing education, practice management resources, advocacy, and the latest clinical research." },
      { name: "Academy of General Dentistry (AGD)", url: "https://www.agd.org/", description: "Organization for general dentists committed to lifelong learning — Fellowship (FAGD) and Mastership (MAGD) programs recognizing clinical excellence." },
    ],
    [
      { name: "Journal of the American Dental Association (JADA)", url: "https://jada.ada.org/", type: "article" },
      { name: "Journal of Dental Research", url: "https://journals.sagepub.com/home/jdr", type: "article" },
    ],
  ),

  // ========================================================================
  // p34 — GRAPHIC DESIGNER
  // ========================================================================

  s(nx(), "p34", "g1",
    "Graphic design begins with creativity and visual expression! At this age, children are natural artists — drawing, painting, and creating without inhibition. Encourage free drawing with crayons, markers, and finger paints. Talk about colors: 'What happens when you mix blue and yellow? What colors make you feel happy?' Notice shapes in the world around you — circle wheels, square windows, triangle roofs — shapes are the building blocks of all design. Create homemade greeting cards for family members. Every graphic designer started as a child who loved to make things look beautiful and meaningful.",
    ["Drawing & Coloring", "Color Recognition & Mixing", "Shape Identification", "Creative Expression"],
    [
      { name: "Kid Made Modern — Art Supplies & Projects", url: "https://www.kidmademodern.com/", description: "Quality art supplies and creative project ideas designed for young children — explore color, texture, and self-expression." },
      { name: "Crayola Creativity Center", url: "https://www.crayola.com/", description: "Free coloring pages, craft ideas, and creative activities — the iconic brand that generations of designers first held in their hands." },
    ],
    [
      { name: "Mix It Up! by Hervé Tullet", url: "", type: "book" },
      { name: "Art for Kids Hub (YouTube)", url: "https://www.youtube.com/c/ArtforKidsHub", type: "video" },
    ],
  ),

  s(nx(), "p34", "g2",
    "Build creativity and visual thinking skills. Practice drawing every day — the single most important habit for future designers. Learn about the color wheel: primary colors (red, blue, yellow), secondary colors (green, orange, purple), and warm vs. cool colors. Experiment with patterns — stripes, polka dots, zigzags, and repeating shapes. Design is everywhere — talk about the designs you see: cereal boxes, toy packaging, book covers, and signs. What makes them eye-catching? Create a 'design collection' — save packaging, cards, and images that you find beautiful. Designers are visual collectors.",
    ["Drawing & Observation", "Color Theory (Primary & Secondary)", "Pattern Recognition & Creation", "Fine Motor Skills (Cutting, Gluing, Drawing)"],
    [
      { name: "Tate Kids — Make & Create", url: "https://www.tate.org.uk/kids/make", description: "Free art activities from Tate museums — painting, cutting, collage, and digital art projects designed for young creators." },
      { name: "Start a Design Collection / Inspiration Board", url: "", description: "Collect beautiful packaging, cards, and images in a box or on a corkboard — designers keep 'inspiration libraries' to spark creativity." },
    ],
    [
      { name: "Beautiful Oops! by Barney Saltzberg", url: "", type: "book" },
      { name: "Sesame Street: Primary Colors Song", url: "https://www.youtube.com/", type: "video" },
    ],
  ),

  s(nx(), "p34", "g3",
    "Build reading and writing foundations — designers read client briefs, write project proposals, and present ideas clearly. Practice drawing with purpose — draw something every day, even if it's just a quick sketch. Learn about typography basics: letters are designed shapes. Notice different fonts on signs, books, and screens — some are serious, some are playful, some look old-fashioned. Start learning about composition — where you place things on a page matters. Create simple posters for your room, a lemonade stand, or a family event. Experiment with digital drawing on a tablet if available.",
    ["Reading & Phonics", "Handwriting / Letter Formation", "Art (Drawing & Composition)", "Writing (Design Descriptions)"],
    [
      { name: "Draw Every Day — Sketchbook Habit", url: "", description: "Get a sketchbook and fill one page every day — anything: your toys, your room, your family, imaginary characters. Consistent practice beats talent every time." },
      { name: "ABCya! — Create a Car / Story / Pixel Art", url: "https://www.abcya.com/", description: "Free educational games that include creative design tools — build digital art, pixel drawings, and stories in a kid-friendly interface." },
    ],
    [
      { name: "The Dot by Peter H. Reynolds", url: "", type: "book" },
      { name: "BrainPOP Jr.: Elements of Art", url: "https://jr.brainpop.com/artsandtechnology/art/", type: "video" },
    ],
  ),

  s(nx(), "p34", "g4",
    "Deepen drawing skills — try drawing from observation (a shoe, a plant, your hand) rather than from imagination. Observation drawing trains the eye to see details that most people miss. Learn about the elements of art: line, shape, color, texture, space, and form. Try different art materials: colored pencils, oil pastels, watercolors, and collage. Start learning about branding — notice how your favorite snacks, toys, and shows all have distinctive logos, colors, and styles. Design a logo for yourself — what represents you? A star? Your initial in a unique shape?",
    ["Reading Comprehension", "Art (Observational Drawing)", "Visual Literacy (Elements of Art)", "Writing (Design Thinking)"],
    [
      { name: "Metropolitan Museum of Art — #MetKids", url: "https://www.metmuseum.org/art/online-features/metkids/", description: "Interactive map, videos, and creative projects from The Met — explore art from around the world and make your own inspired creations." },
      { name: "Canva for Education (with Parent)", url: "https://www.canva.com/education/", description: "Free graphic design tool with kid-friendly templates — create posters, cards, and social media graphics with drag-and-drop simplicity." },
    ],
    [
      { name: "Ish by Peter H. Reynolds", url: "", type: "book" },
      { name: "BrainPOP: Graphic Design", url: "https://www.brainpop.com/artsandmusic/artconcepts/graphicdesign/", type: "video" },
    ],
  ),

  s(nx(), "p34", "g5",
    "Expand art skills with more sophisticated techniques: shading, perspective, and proportion. Learn about the principles of design: balance, contrast, emphasis, movement, pattern, rhythm, and unity. These are the rules designers use to create effective visual communication. Start learning digital tools — Canva is a free, beginner-friendly design platform. Create a pretend brand: name a product, design its logo, choose its colors, and create a poster or package. Learn about famous graphic designers: Paul Rand (IBM, ABC logos), Saul Bass (movie posters), and Milton Glaser (I ♥ NY). Design is everywhere — and someone designed everything.",
    ["Math (Proportion & Scale)", "Art (Drawing Techniques)", "Technology (Digital Design Intro)", "English (Brand Storytelling)"],
    [
      { name: "Canva Design Projects", url: "https://www.canva.com/", description: "Use Canva's free tools to design posters, logos, social media graphics, and presentations — learn layout, color, and typography hands-on." },
      { name: "Pixlr — Free Photo Editor (Beginner)", url: "https://pixlr.com/", description: "Free browser-based photo editor — learn the basics of image editing, cropping, filters, and layers, foundational skills for all designers." },
    ],
    [
      { name: "Go: A Kidd's Guide to Graphic Design by Chip Kidd", url: "", type: "book" },
      { name: "Canva Design School (Free Tutorials)", url: "https://www.canva.com/learn/", type: "course" },
    ],
  ),

  s(nx(), "p34", "g6",
    "Expand design research skills — study a famous logo or brand and analyze why it works. Practice typography: learn the difference between serif (fonts with feet, like Times New Roman) and sans-serif (fonts without feet, like Arial). Try lettering — drawing letters by hand rather than typing them. Create a simple zine (mini magazine) about something you love — combine words and pictures. Learn about color psychology: red = energy/passion, blue = trust/calm, green = nature/growth. Designers use color intentionally to communicate feelings. Start building a portfolio — save your best work in a folder or online.",
    ["English Language Arts (Visual Analysis)", "Art (Typography & Lettering)", "Technology (Digital Design)", "Psychology (Color Theory)"],
    [
      { name: "Adobe Express (Free Design Tool)", url: "https://www.adobe.com/express/", description: "Adobe's free design tool — create graphics, edit photos, and make videos. A gentle introduction to the Adobe ecosystem designers use professionally." },
      { name: "Design a Zine or Mini Magazine", url: "", description: "Create an 8-page mini magazine about your favorite topic — write, draw, and design every page. Self-publishing is a timeless designer tradition." },
    ],
    [
      { name: "Graphic Design Thinking: Beyond Brainstorming by Ellen Lupton", url: "", type: "book" },
      { name: "Mystery Science: Color & Light", url: "https://mysteryscience.com/", type: "course" },
    ],
  ),

  s(nx(), "p34", "g7",
    "Take art classes seriously — they're not 'just' art, they're visual communication training. Learn about the design process: research → brainstorm → sketch → refine → present. This is how professional designers work. Expand digital skills: try more advanced features in Canva or begin exploring Adobe Photoshop (free trial or school license). Learn about photography basics — composition, lighting, and framing. Designers often take their own photos. Study advertising — look at ads critically. What makes you want something? How do designers persuade with visuals? Collect examples of great (and terrible) design.",
    ["Art & Design (Intermediate)", "Technology (Digital Tools)", "English (Persuasive Communication)", "Math (Ratios & Proportions in Design)"],
    [
      { name: "Art & Design Summer Camps", url: "", description: "Many art schools and museums offer summer design camps for middle schoolers — learn printmaking, digital design, and portfolio development." },
      { name: "Critical Ad Watching — Design Analysis", url: "", description: "Actively analyze ads, logos, and packaging — ask: what colors are used? What feeling? Who is the audience? Sharp analysis builds design thinking." },
    ],
    [
      { name: "Khan Academy: Art History (Design Focus)", url: "https://www.khanacademy.org/humanities/art-history", type: "course" },
      { name: "Steal Like an Artist by Austin Kleon", url: "", type: "book" },
    ],
  ),

  s(nx(), "p34", "g8",
    "Take advanced art classes if available. Start learning professional design software — Adobe Photoshop, Illustrator, or free alternatives like GIMP (photo editing), Inkscape (vector graphics), and Figma (UI/UX design). Learn about graphic design careers: brand designer, UX/UI designer (apps and websites), publication designer (magazines, books), motion graphics designer (animation), and illustrator. The field is broad — explore which area excites you. Create designs for real 'clients' — make posters for school events, a logo for a club, or social media graphics for a community organization.",
    ["Art & Design (Advanced)", "Technology (Design Software)", "English (Client Communication)", "Business / Marketing Basics"],
    [
      { name: "Figma — Free UI/UX Design Tool", url: "https://www.figma.com/", description: "Industry-standard collaborative design tool — used by professionals at Google, Microsoft, and startups worldwide. Free for students." },
      { name: "Real Clients: Design for School / Community", url: "", description: "Offer to design posters for school plays, logos for clubs, or graphics for local nonprofits — real projects build real portfolios." },
    ],
    [
      { name: "Crash Course: Film and Video Production (for motion graphics basics)", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtN-Bd-H_TGq72CN50FpvWWX", type: "video" },
      { name: "The Design of Everyday Things by Don Norman", url: "", type: "book" },
    ],
  ),

  s(nx(), "p34", "g9",
    "Take art and design classes seriously — a strong portfolio matters more than any other factor for design careers. Begin learning Adobe Creative Suite in depth — Photoshop (photo editing), Illustrator (vector graphics/logos), and InDesign (page layout). If your school offers photography or digital media classes, enroll. Start an online portfolio on Behance or Dribbble to showcase your work. The design world is competitive but meritocratic — great work gets noticed regardless of your degree. Learn about design schools vs. self-taught paths — both can lead to successful careers, but design school offers structure, mentorship, and networking.",
    ["Art & Design (Portfolio Development)", "Technology (Adobe Creative Suite)", "Photography / Digital Media", "English (Artist Statements)", "Business (Freelance Basics)"],
    [
      { name: "Behance — Create Your Design Portfolio", url: "https://www.behance.net/", description: "Adobe's platform for showcasing creative work — upload your designs, follow top creators, and get discovered. A must for aspiring designers." },
      { name: "Dribbble — Design Community (Student Account)", url: "https://dribbble.com/", description: "Community where designers share work, get feedback, and find inspiration — see what professional design looks like and aspire to it." },
    ],
    [
      { name: "Skillshare: Graphic Design Basics (Free Trial)", url: "https://www.skillshare.com/", type: "course" },
      { name: "How to Be a Graphic Designer Without Losing Your Soul by Adrian Shaughnessy", url: "", type: "book" },
    ],
  ),

  s(nx(), "p34", "g10",
    "Continue developing your portfolio — aim for 10-15 strong pieces. The portfolio is everything in design; it matters more than grades, test scores, or where you went to school. Take advanced art, photography, or digital media classes. Learn about design history: Bauhaus, Swiss Design, Postmodernism — understanding design movements gives context and depth to your work. Start learning about UI/UX design — the fastest-growing field in design, focused on apps and websites. Try redesigning a website or app you use — what would you change? Create a case study showing your design process from research to final design.",
    ["Art & Design (Advanced Portfolio)", "Technology (Adobe Suite + Figma)", "Photography / Digital Media", "English (Case Study Writing)", "Business / Entrepreneurship"],
    [
      { name: "Figma — UI/UX Design Projects", url: "https://www.figma.com/", description: "Design app screens and website mockups — create a redesign of an app you use, showing the problem, your process, and your solution." },
      { name: "Design Competitions for Teens", url: "https://www.artandwriting.org/", description: "Scholastic Art & Writing Awards — the nation's longest-running recognition program for creative teens. Gold Key winners have work exhibited nationally." },
    ],
    [
      { name: "Coursera: Graphic Design Specialization (CalArts)", url: "https://www.coursera.org/specializations/graphic-design", type: "course" },
      { name: "Thinking with Type by Ellen Lupton", url: "", type: "book" },
    ],
  ),

  s(nx(), "p34", "g11",
    "The portfolio is your top priority — continue building it with quality over quantity. Take AP Studio Art if your school offers it (2D Design or Drawing portfolio). Study design theory in depth: gestalt principles (how the brain organizes visual information), grid systems, and typographic hierarchy. Learn about the business of design: how to price work, write contracts, and communicate with clients. Try freelance design — create logos, posters, or social media graphics for local businesses or family friends. Research design programs: top schools include RISD, Parsons, Pratt, SCAD, CalArts, and SVA. State universities with strong design programs: UCLA, UT Austin, University of Cincinnati, and Virginia Commonwealth University.",
    ["AP Studio Art (2D Design)", "Art & Design Elective", "Photography / Digital Media", "English (Client Communication)", "Business / Marketing"],
    [
      { name: "Freelance Design — Real Client Work", url: "", description: "Offer design services to local businesses, clubs, or nonprofits — real client experience teaches communication, deadlines, and iteration that school can't." },
      { name: "Scholastic Art & Writing Awards — Portfolio Submission", url: "https://www.artandwriting.org/", description: "Submit your best work to the Scholastic Awards — national recognition, exhibition opportunities, and scholarships for outstanding teen artists." },
    ],
    [
      { name: "LinkedIn Learning: Become a Graphic Designer (Learning Path)", url: "https://www.linkedin.com/learning/", type: "course" },
      { name: "Logo Modernism by Jens Müller", url: "", type: "book" },
    ],
  ),

  s(nx(), "p34", "g12",
    "Take AP Studio Art and any advanced digital media courses. If your school doesn't offer AP Art, build your portfolio independently. The portfolio should include: branding projects, editorial/layout design, digital/UI design, illustration, and photography. Diversity shows range. Learn about design school applications — many art schools require a portfolio review, artist statement, and interview. The National Portfolio Day event gives free feedback from art school representatives. Research the difference between BFA (Bachelor of Fine Arts — more studio intensive) and BA (Bachelor of Arts — more academic) in design. A BFA is generally preferred for design careers.",
    ["AP Studio Art (2D Design / Drawing)", "Photography / Digital Media", "Technology (Adobe Suite Mastery)", "English (Artist Statement)", "Psychology (User Behavior)"],
    [
      { name: "National Portfolio Day", url: "https://nationalportfolioday.org/", description: "Free event where accredited art/design schools review student portfolios and give feedback — essential preparation for applying to design programs." },
      { name: "Intern / Apprentice at a Design Studio or Print Shop", url: "", description: "Gain real-world experience — even basic production work in a print shop or design studio teaches professionalism and craft." },
    ],
    [
      { name: "Domestika: Graphic Design Courses", url: "https://www.domestika.org/", type: "course" },
      { name: "Grid Systems in Graphic Design by Josef Müller-Brockmann", url: "", type: "book" },
    ],
  ),

  s(nx(), "p34", "g13",
    "The most critical year for portfolio development. Finalize 15-20 polished portfolio pieces. If applying to art/design schools, attend National Portfolio Day events. Research BFA programs thoroughly — RISD, Parsons, Pratt, SCAD, CalArts, and SVA are top private design schools. Top public programs: Virginia Commonwealth University (VCU), UCLA Design Media Arts, University of Cincinnati (DAAP), and UT Austin. Consider the cost — private art schools can exceed $70,000/year. Public university design programs often offer excellent education at lower cost. If considering the self-taught + portfolio path, research successful designers who took this route — it requires extraordinary discipline and networking.",
    ["AP Studio Art (Portfolio Finalization)", "Art & Design Elective (Advanced)", "Digital Media / Photography", "English (Artist Statement / Essays)", "Business (Freelance Operations)"],
    [
      { name: "Summer Pre-College Design Programs", url: "", description: "RISD Pre-College, Parsons Summer Academy, Pratt Pre-College — immersive summer programs where you experience art school, build your portfolio, and earn college credits." },
      { name: "AIGA — The Professional Association for Design (Student Membership)", url: "https://www.aiga.org/", description: "Join AIGA as a student member — access to design events, mentorship, job boards, and the national design community." },
    ],
    [
      { name: "AIGA — Design Business & Ethics Guide", url: "https://www.aiga.org/", type: "article" },
      { name: "Interaction of Color by Josef Albers", url: "", type: "book" },
    ],
  ),

  s(nx(), "p34", "g14",
    "Apply to BFA programs in Graphic Design, Communication Design, or Visual Communication. Submit portfolios, artist statements, transcripts, and recommendations. If applying to public universities, check whether the design major requires a separate portfolio review after admission. Complete AP Studio Art for college credit. Consider a gap year if your portfolio needs more development — a year of intensive portfolio building and freelance work can transform your applications. If going the self-taught route, start building your professional network immediately — attend design meetups, join AIGA, and connect with working designers on LinkedIn.",
    ["AP Studio Art (Exam / Final Portfolio)", "Design Portfolio (Final Submission)", "English (College Essays / Artist Statements)", "Art History / Design History", "Business / Professional Practice"],
    [
      { name: "Apply to BFA Graphic Design Programs", url: "", description: "Top programs: RISD (RI), Parsons (NY), Pratt (NY), SCAD (GA), CalArts (CA), SVA (NY), VCU (VA), UCLA (CA), UT Austin (TX), University of Cincinnati/DAAP (OH)." },
      { name: "Professional Portfolio Website (Squarespace / Adobe Portfolio / Cargo)", url: "", description: "Build your own portfolio website — far more impressive than a Behance page. Include your best work, an About page, and contact information." },
    ],
    [
      { name: "Adobe Portfolio (Free with Creative Cloud)", url: "https://portfolio.adobe.com/", type: "program" },
      { name: "Show Your Work! by Austin Kleon", url: "", type: "book" },
    ],
  ),

  s(nx(), "p34", "g15",
    "BFA in Graphic Design / Communication Design (4 years). Year 1: Foundation year — drawing, color theory, 2D/3D design, and art history. Year 2: Introduction to typography, graphic design principles, digital tools (Adobe Suite + Figma), and design history. Year 3: Branding, editorial design, UX/UI design, packaging, motion graphics, and professional practice. Year 4: Senior thesis/capstone project, portfolio refinement, and internships. Most BFA programs require an internship before graduation — this is how many students land their first job. Alternative path: self-taught + online courses (Coursera, Skillshare, Domestika) + aggressive portfolio building + networking. Many successful designers don't have a degree — but they have exceptional portfolios.",
    ["Typography & Layout Design", "Brand Identity & Systems Design", "UX/UI Design & Digital Product Design", "Motion Graphics & Animation", "Design History & Theory"],
    [
      { name: "AIGA — Student Chapters & Portfolio Reviews", url: "https://www.aiga.org/", description: "Join your school's AIGA chapter — portfolio reviews, guest lectures, design competitions, and job/internship connections." },
      { name: "Design Internships (Summer)", url: "", description: "Intern every summer — at design studios, in-house design departments (corporations), or tech companies. Internships often convert to full-time offers." },
    ],
    [
      { name: "Graphic Design: The New Basics by Ellen Lupton & Jennifer Cole Phillips", url: "", type: "book" },
      { name: "Figma — Advanced Prototyping Tutorials", url: "https://www.figma.com/resources/learn-design/", type: "course" },
    ],
  ),

  s(nx(), "p34", "g16",
    "Junior Designer → Mid-Level Designer → Senior Designer → Art Director → Creative Director. The career progression in graphic design. First job: junior designer at a design agency, in-house creative department, or tech company. Expected salary: $40,000-$55,000 starting. Build your professional network aggressively — design is a relationship business. After 3-5 years: mid-level designer ($55,000-$75,000). Specialize or generalize — some designers become generalists, others specialize in branding, UX/UI, motion graphics, or packaging. Freelancing is common — many mid-career designers freelance full-time, earning $75-$150/hour. A Master's (MFA in Graphic Design) is for those pursuing teaching careers at the college level or deep research in design theory.",
    ["Advanced Branding & Design Systems", "UX/UI Design & User Research", "Art Direction & Creative Strategy", "Business / Freelance Management", "Portfolio Development (Professional)"],
    [
      { name: "AIGA — Professional Membership & Events", url: "https://www.aiga.org/", description: "Full professional membership — access to exclusive job boards, conferences, leadership opportunities, and the creative community at the national level." },
      { name: "Creative Mornings — Free Design Talks", url: "https://creativemornings.com/", description: "Monthly breakfast lecture series for creative professionals in 200+ cities worldwide — inspiration, networking, and community." },
    ],
    [
      { name: "Communication Arts (Magazine)", url: "https://www.commarts.com/", type: "article" },
      { name: "The Freelance Manifesto by Joey Korenman", url: "", type: "book" },
    ],
  ),

  s(nx(), "p34", "g17",
    "Creative Director / Design Director / Partner — the pinnacle of graphic design careers. Creative Directors lead teams of designers, set creative vision for brands, and work directly with client executives. Expected salary: $100,000-$200,000+. Some designers become entrepreneurs — founding their own studios, creating products, or building design-focused startups. Others transition into UX/UI leadership at tech companies (Product Designer → Lead → Head of Design → VP of Design). MFA in Graphic Design for those pursuing academic careers — teaching the next generation of designers and contributing to design research. The design field rewards continuous learning — tools, trends, and technology evolve constantly. But the fundamentals — typography, composition, color, and communication — are timeless. Master them, and you'll design a career as unique as your creative vision.",
    ["Creative Direction & Design Leadership", "Design Entrepreneurship & Business", "Advanced UX Strategy & Product Design", "Teaching & Mentorship (MFA)", "Industry Thought Leadership"],
    [
      { name: "AIGA — Fellow Award & Leadership", url: "https://www.aiga.org/", description: "AIGA Fellow Award recognizes designers who have made significant contributions to the design community — the highest recognition in the profession." },
      { name: "Fast Company — Innovation by Design", url: "https://www.fastcompany.com/", description: "Annual awards and coverage of groundbreaking design — inspiration at the intersection of design, technology, and business." },
    ],
    [
      { name: "Design Observer — Essays & Podcasts", url: "https://designobserver.com/", type: "article" },
      { name: "It's Nice That — Contemporary Design Publication", url: "https://www.itsnicethat.com/", type: "article" },
    ],
  ),

// ========================================================================
  // p35 — POLICE OFFICER
  // ========================================================================

  s(nx(), "p35", "g1",
    "Police officers are community helpers who keep everyone safe! At this age, children naturally notice uniforms, sirens, and the concept of 'helpers.' Encourage play that involves taking turns, sharing, and helping others — the foundations of service and teamwork. Talk about safety rules: holding hands in parking lots, looking both ways before crossing, and knowing who to ask for help. Introduce the idea of community helpers — police officers, firefighters, paramedics, and teachers all work together to take care of neighborhoods. Role-play simple scenarios: 'What would you do if you got lost?' Teach right from wrong through stories where characters make choices and face consequences.",
    ["Safety Awareness (Stranger Safety, Crossing Streets)", "Social Skills (Sharing, Taking Turns)", "Community Helpers Identification", "Right vs. Wrong (Simple Moral Stories)"],
    [
      { name: "Visit a Local Police Station (Community Relations)", url: "", description: "Many police departments offer station tours for young children — meeting officers, seeing a patrol car, and learning that police are friendly helpers." },
      { name: "National Night Out — Community Policing Event", url: "https://natw.org/", description: "Annual community-building event where police and neighbors connect — games, food, and positive interactions between officers and families." },
    ],
    [
      { name: "Officer Buckle and Gloria by Peggy Rathmann", url: "", type: "book" },
      { name: "Daniel Tiger's Neighborhood: Safety Patrol (PBS)", url: "https://pbskids.org/daniel/", type: "video" },
    ],
  ),

  s(nx(), "p35", "g2",
    "Build character and citizenship from the ground up. Police work requires honesty, courage, and respect — traits that begin forming in early childhood. Learn about rules and why they exist: classroom rules, playground rules, traffic rules — rules keep people safe and things fair. Practice following directions carefully and completely — officers must follow procedures precisely. Talk about respect for authority and why we listen to teachers, parents, and police officers. Learn about 9-1-1: what it's for, when to call, and what to say. Visit a police station or have an officer visit the classroom. The best police officers combine strength with kindness — that balance starts here.",
    ["Character Education (Honesty, Respect, Courage)", "Following Directions & Listening Skills", "Safety & Emergency Basics (9-1-1)", "Social Studies (Community Roles)"],
    [
      { name: "McGruff the Crime Dog — Safety Programs", url: "https://www.ncpc.org/", description: "National Crime Prevention Council's iconic safety mascot — learn about stranger danger, bullying prevention, and personal safety through kid-friendly activities." },
      { name: "Police Officer Classroom Visit", url: "", description: "Invite a school resource officer or community police officer to visit — children meet a real officer, see the uniform up close, and ask questions." },
    ],
    [
      { name: "A Day in the Life of a Police Officer by Heather Adamson", url: "", type: "book" },
      { name: "Paw Patrol: Safety Episodes", url: "https://www.nickjr.com/", type: "video" },
    ],
  ),

  s(nx(), "p35", "g3",
    "Build reading, writing, and thinking skills — police officers write detailed reports, read legal documents, and communicate clearly with people of all backgrounds. Learn about laws in simple terms: rules that everyone in a community agrees to follow. Explore the role of police beyond just 'catching bad guys' — officers help lost children, direct traffic, assist during emergencies, and build community relationships. Practice observation skills: describe a person, a scene, or an event in detail. Learn about pedestrian and bicycle safety. Study the different types of police: patrol officers, detectives, school resource officers, K-9 units, and mounted police.",
    ["Reading & Writing (Reports & Descriptions)", "Math (Basic Time & Measurement)", "Social Studies (Laws & Community)", "Observation & Memory Skills"],
    [
      { name: "NetSmartz — Personal Safety Education (NCMEC)", url: "https://www.missingkids.org/netsmartz", description: "National Center for Missing & Exploited Children's safety program — teaches kids about stranger safety, smart choices, and identifying trusted adults through engaging videos." },
      { name: "Observation Journal — Daily Detective Practice", url: "", description: "Keep a small notebook and write detailed observations each day — describe a person you saw, a scene at the park, or an event. The foundation of detective work." },
    ],
    [
      { name: "The Police Cloud by Christoph Niemann", url: "", type: "book" },
      { name: "BrainPOP Jr.: Community Helpers", url: "https://jr.brainpop.com/socialstudies/communities/communityhelpers/", type: "video" },
    ],
  ),

  s(nx(), "p35", "g4",
    "Deepen understanding of laws and justice. Learn about the difference between rules, laws, and the Constitution — the supreme law of the land. Explore the concept of fairness and due process — everyone deserves to be treated fairly regardless of who they are. Practice conflict resolution: how to solve disagreements peacefully without fighting. Officers mediate disputes every day. Learn about physical fitness — police officers must pass fitness tests and stay in shape throughout their careers. Start developing healthy exercise habits: running, push-ups, sit-ups, and stretching. Read about famous law enforcement heroes and the evolution of policing from early watchmen to modern departments.",
    ["Reading Comprehension (Nonfiction Law & Safety)", "Social Studies (Constitution & Justice)", "Physical Education (Fitness Basics)", "Conflict Resolution & Mediation"],
    [
      { name: "D.A.R.E. — Drug Abuse Resistance Education (Elementary)", url: "https://dare.org/", description: "School-based program taught by police officers — building skills to resist peer pressure, avoid drugs and violence, and make safe, responsible choices." },
      { name: "Kids' Court — Classroom Mock Trial", url: "", description: "Role-play a simplified courtroom — students act as judge, jury, lawyer, and witnesses. Learn how the justice system works through direct experience." },
    ],
    [
      { name: "What Does a Police Officer Do? by Ellen Labrecque", url: "", type: "book" },
      { name: "NetSmartzKids — Internet Safety (NCMEC)", url: "https://www.missingkids.org/netsmartz/videos", type: "video" },
    ],
  ),

  s(nx(), "p35", "g5",
    "Math expands with multiplication and division — officers calculate speeds, distances, and time. Study civics in depth: the three branches of government, how laws are made, and how police fit into the criminal justice system (alongside courts and corrections). Deepen understanding of ethics and integrity — police officers have enormous responsibility and must make honest decisions even when no one is watching. Learn about community policing — the modern philosophy that police work best when they build trust and partnerships with the communities they serve. Consider joining a community service club — policing is fundamentally about serving others. Practice public speaking — officers address crowds, testify in court, and communicate with diverse groups.",
    ["Math (Multiplication, Division & Speed/Distance)", "Civics (Government & Justice System)", "English (Public Speaking & Communication)", "Ethics & Character Education"],
    [
      { name: "Police Athletic/Activities League (PAL)", url: "https://www.nationalpal.org/", description: "Youth programs run by police departments — sports, mentoring, leadership development. Builds positive relationships between youth and law enforcement." },
      { name: "Community Service Club — Youth Volunteer Corps", url: "https://yvc.org/", description: "Join a youth volunteer organization — community service develops the empathy and people skills essential for community policing." },
    ],
    [
      { name: "National Geographic Kids: Rules and Laws", url: "https://kids.nationalgeographic.com/", type: "book" },
      { name: "iCivics: LawCraft (Game)", url: "https://www.icivics.org/games/lawcraft", type: "program" },
    ],
  ),

  s(nx(), "p35", "g6",
    "Expand research skills — research the history of policing and how it has evolved. Strengthen math with fractions and decimals — officers calculate BAC (blood alcohol content), measure skid marks, and document evidence precisely. Study the U.S. Constitution and Bill of Rights — the Fourth Amendment protects against unreasonable searches, and officers must understand these rights deeply. Learn about forensic science basics: fingerprints, DNA, and evidence collection. Explore the different career paths in law enforcement: patrol, detective, SWAT, K-9, cybercrime, and federal agencies (FBI, DEA, ATF). Consider writing a report or presentation on a famous Supreme Court case involving law enforcement.",
    ["English Language Arts (Research & Report Writing)", "Math (Fractions, Decimals & Measurement)", "Social Studies (Constitution & Bill of Rights)", "Science (Forensic Basics)"],
    [
      { name: "FBI Safe Online Surfing (SOS) Internet Challenge", url: "https://sos.fbi.gov/", description: "Free, educational program for grades 3-8 covering cyber safety, digital citizenship, and online security — taught through interactive games and quizzes." },
      { name: "Crime Scene Investigation (CSI) Science Fair Project", url: "", description: "Create a science fair project exploring forensic science — fingerprinting, chromatography (ink analysis), or handwriting analysis." },
    ],
    [
      { name: "Forensics for Kids: The Science and History of Crime Solving by Melissa Ross", url: "", type: "book" },
      { name: "Mystery Science: Invisible Ink & Secret Messages", url: "https://mysteryscience.com/", type: "course" },
    ],
  ),

  s(nx(), "p35", "g7",
    "Math ramps up with pre-algebra — officers use math for accident reconstruction, speed calculations, and evidence measurement. Deepen understanding of the criminal justice system: how police, prosecutors, defense attorneys, judges, and corrections work together. Study the juvenile justice system — how it differs from adult court. Learn about use of force and de-escalation: officers are trained to resolve situations with the minimum force necessary, using communication skills first. Consider joining a youth leadership program through the local police department. Start learning about physical fitness standards for law enforcement — the Presidential Physical Fitness Test is a good benchmark. Read about landmark Supreme Court cases: Miranda v. Arizona, Terry v. Ohio, and Gideon v. Wainwright.",
    ["Math (Pre-Algebra & Data Analysis)", "Social Studies (Criminal Justice System)", "English (Legal Writing & Argumentation)", "Physical Education (Fitness Standards)"],
    [
      { name: "Police Explorer Program (Introductory)", url: "https://www.exploring.org/law-enforcement/", description: "Learning for Life's Law Enforcement Exploring program — hands-on career exploration for youth ages 10-20. Learn about policing, forensics, and leadership from real officers." },
      { name: "Youth Court / Teen Court Programs", url: "", description: "Many jurisdictions have youth courts where teens serve as jurors, attorneys, and judges for real juvenile cases — firsthand experience with the justice system." },
    ],
    [
      { name: "Khan Academy: U.S. Government and Civics", url: "https://www.khanacademy.org/humanities/us-government-and-civics", type: "course" },
      { name: "The 57 Bus by Dashka Slater (Youth & Justice)", url: "", type: "book" },
    ],
  ),

  s(nx(), "p35", "g8",
    "Take pre-algebra and the most advanced science available. Study criminology basics — why do people commit crimes? What works to prevent crime? Learn about police procedures: patrol tactics, traffic stops, crime scene management, and arrest procedures. Explore the role of technology in modern policing: body cameras, dash cameras, license plate readers, drones, and crime mapping software. Study report writing — police reports must be clear, factual, detailed, and grammatically correct. If old enough, consider participating in a Police Explorer post or a similar youth program. Shadow a police officer if possible through a ride-along program (many departments allow this for teens with parental consent).",
    ["Pre-Algebra / Algebra Readiness", "Life Science (Forensic Science)", "English (Report Writing & Technical Communication)", "Technology (Law Enforcement Tech)", "Social Studies (Criminology Intro)"],
    [
      { name: "Law Enforcement Exploring — Active Post Membership", url: "https://www.exploring.org/law-enforcement/", description: "Join a Police Explorer post — regular meetings with officers, training in police procedures, competitions, and ride-along opportunities." },
      { name: "Citizens Police Academy (Youth Edition)", url: "", description: "Some departments offer youth versions of their Citizens Police Academy — learn about patrol, investigations, SWAT, and K-9 units through hands-on sessions." },
    ],
    [
      { name: "Crash Course: Navigating Digital Information", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtN07XYqqWSKpPrtNDiCHTzU", type: "video" },
      { name: "Ghettoside: A True Story of Murder in America by Jill Leovy", url: "", type: "book" },
    ],
  ),

  s(nx(), "p35", "g9",
    "Take Algebra I and the most advanced English courses available — police officers write more than almost any other profession. Enroll in any criminal justice, law, or government electives your school offers. Continue physical fitness training with purpose — aim for the standards used in police academy physical testing: 1.5-mile run, push-ups, sit-ups, and flexibility. Join speech and debate — officers must think on their feet, argue persuasively, and communicate under pressure. Learn about the police hiring process: written exam, physical agility test, background investigation, psychological evaluation, polygraph, and oral board interview. It's one of the most thorough hiring processes of any profession.",
    ["Algebra I", "English (Writing & Communication)", "Criminal Justice / Law Elective", "Physical Education (Fitness)", "Speech & Debate / Public Speaking"],
    [
      { name: "Speech & Debate Team / Mock Trial", url: "", description: "Join your school's speech, debate, or mock trial team — build the quick thinking, persuasive speaking, and logical reasoning skills officers use daily." },
      { name: "Police Explorer Program — Leadership Track", url: "https://www.exploring.org/law-enforcement/", description: "Take on leadership roles in your Explorer post — organize training, mentor younger Explorers, and learn the supervision skills of a sergeant." },
    ],
    [
      { name: "TED-Ed: How Police Interrogation Works", url: "https://ed.ted.com/", type: "video" },
      { name: "Blue on Blue: An Insider's Story of Good Cops Catching Bad Cops by Charles Campisi", url: "", type: "book" },
    ],
  ),

  s(nx(), "p35", "g10",
    "Take Honors English and any available social studies electives. If your school offers psychology or sociology, enroll — understanding human behavior is central to police work. Continue physical fitness — the best time to build lifelong fitness habits is now. Learn about criminal law in more depth: elements of a crime, types of crimes (misdemeanors vs. felonies), and defenses. Study the psychology of crisis intervention — how officers de-escalate situations involving mental illness, domestic disputes, and emotional crises. Consider learning a second language — bilingual officers are in high demand and often receive additional pay. Research police academy programs — community colleges and state academies offer different paths.",
    ["Honors English (Technical Writing)", "Algebra / Geometry", "Psychology / Sociology Elective", "Criminal Law Basics", "Foreign Language (Spanish Recommended)"],
    [
      { name: "FBI Teen Academy", url: "https://www.fbi.gov/contact-us/field-offices/", description: "Select FBI field offices offer Teen Academy programs — learn about federal law enforcement, meet special agents, and explore careers at the FBI and partner agencies." },
      { name: "Ride-Along with Local Police Department", url: "", description: "Many departments offer civilian ride-along programs for ages 16+ — observe police work firsthand from the passenger seat of a patrol car." },
    ],
    [
      { name: "Coursera: Introduction to Forensic Science (Nanyang Tech)", url: "https://www.coursera.org/learn/forensic-science", type: "course" },
      { name: "The New Jim Crow by Michelle Alexander", url: "", type: "book" },
    ],
  ),

  s(nx(), "p35", "g11",
    "Take advanced English and history courses. If your school offers AP U.S. Government, enroll — it directly relates to police work. Continue psychology and sociology electives. Take the most challenging physical education available. Consider taking a Criminal Justice course at a local community college through dual enrollment. Continue in speech/debate and mock trial — many police officers say these activities were the best preparation for testifying in court. Research the education requirements for police departments you're interested in — some require 60 college credits (an associate's degree), others prefer a bachelor's. Learn about the California POST (Peace Officer Standards and Training) and equivalent standards in other states.",
    ["AP U.S. Government / Civics", "Honors English", "Psychology (AP or Honors)", "Algebra II", "Physical Education (Advanced Fitness)"],
    [
      { name: "Mock Trial — Competitive Team", url: "https://www.nationalmocktrial.org/", description: "Compete in mock trial at the regional and state level — learn courtroom procedure, evidence rules, and witness examination, exactly the skills officers use testifying." },
      { name: "Dual Enrollment — Criminal Justice 101", url: "", description: "Take an introductory criminal justice course at a community college — earn college credit while still in high school and get a head start on your degree." },
    ],
    [
      { name: "Khan Academy: Psychology", url: "https://www.khanacademy.org/science/health-and-medicine/executive-systems-of-the-brain", type: "course" },
      { name: "The Police in America: An Introduction by Samuel Walker & Charles Katz", url: "", type: "book" },
    ],
  ),

  s(nx(), "p35", "g12",
    "Take AP U.S. Government and AP English Language — both develop the analytical and communication skills essential for police work. Continue psychology and sociology. Physical fitness becomes even more important — start training specifically for police academy fitness tests: 1.5-mile run (under 12-14 minutes), push-ups (25-40+ in one minute), sit-ups (30-40+ in one minute), and a flexibility test. Consider joining a martial arts program — judo, Brazilian jiu-jitsu, or defensive tactics build the control and confidence officers need. Research criminal justice degree programs at state universities — look for programs with police academy partnership tracks. Learn about the difference between municipal police, county sheriff, state trooper, and federal agent careers.",
    ["AP U.S. Government", "AP English Language", "Psychology / Sociology", "Pre-Calculus / Statistics", "Physical Education (Police Fitness)"],
    [
      { name: "Martial Arts / Defensive Tactics Training", url: "", description: "Train in judo, Brazilian jiu-jitsu, or Krav Maga — these disciplines teach control, restraint, and defensive skills without excessive force, mirroring police training." },
      { name: "Community Emergency Response Team (CERT) — Teen", url: "https://www.ready.gov/cert", description: "FEMA's CERT program trains citizens in basic disaster response — first aid, search and rescue, and fire safety. Great experience for future first responders." },
    ],
    [
      { name: "edX: Justice (Harvard — Michael Sandel)", url: "https://www.edx.org/course/justice-2", type: "course" },
      { name: "Just Mercy by Bryan Stevenson", url: "", type: "book" },
    ],
  ),

  s(nx(), "p35", "g13",
    "The most critical year for college and career preparation. Take AP U.S. Government, AP English Literature, and AP Psychology. Continue physical fitness training with police academy standards as your target. Research criminal justice programs thoroughly — look at public universities with strong CJ departments: University of Maryland, Michigan State, University of Cincinnati, Arizona State, and Florida State. Some departments have police academy sponsorship programs — they'll pay for your academy training in exchange for a service commitment. Consider the military pathway — many officers serve in the military police or as military personnel before transitioning to civilian law enforcement (veterans' preference points help in hiring).",
    ["AP U.S. Government", "AP English Literature", "AP Psychology", "Criminal Justice / Sociology Elective", "Physical Fitness (Academy Standards)"],
    [
      { name: "Police Explorer Competition — National Law Enforcement Exploring Conference", url: "https://www.exploring.org/law-enforcement/", description: "Biennial national conference — compete in scenarios like traffic stops, crime scene investigation, and crisis negotiation against Explorer posts nationwide." },
      { name: "State Police / Highway Patrol Youth Academy", url: "", description: "Many state police agencies offer week-long youth academies during summer — live at the academy, train like a recruit, and experience law enforcement education firsthand." },
    ],
    [
      { name: "Police1 — Career & Training Resource", url: "https://www.police1.com/", type: "article" },
      { name: "Emotional Survival for Law Enforcement by Kevin M. Gilmartin", url: "", type: "book" },
    ],
  ),

  s(nx(), "p35", "g14",
    "Apply to criminal justice programs at accredited universities. A bachelor's degree in criminal justice is valuable but not always required — many successful officers majored in psychology, sociology, communications, or a foreign language. Some departments accept candidates at 18-21 with just a high school diploma and academy training. Complete AP exams for college credit. Continue physical fitness and martial arts training. Apply for ride-along programs with multiple departments to compare policing styles. Research the specific hiring requirements for departments you're interested in — they vary widely. Some departments offer cadet programs (paid positions for college students interested in becoming officers). Consider taking the police written exam early if you're 18+.",
    ["AP U.S. Government (Exam)", "AP English (Exam)", "AP Psychology (Exam)", "Physical Fitness (Academy Prep)", "English (Application Essays & Cover Letters)"],
    [
      { name: "Apply to Criminal Justice BA/BS Programs", url: "", description: "Top public programs: University of Maryland, Michigan State, University of Cincinnati, Florida State, Arizona State, Penn State, and many state university systems with strong CJ departments." },
      { name: "Police Cadet Program — Paid Pre-Academy Position", url: "", description: "Many large departments (LAPD, NYPD, Chicago PD) hire college students as police cadets — paid positions, tuition assistance, and a direct pipeline to the academy after graduation." },
    ],
    [
      { name: "PoliceExam911 — Written Exam Preparation", url: "https://www.policeexam911.com/", type: "program" },
      { name: "What Cops Know by Connie Fletcher", url: "", type: "book" },
    ],
  ),

  s(nx(), "p35", "g15",
    "Path 1: Earn a bachelor's degree in criminal justice (4 years), then apply to a police department → attend their police academy (4-6 months) → field training (3-6 months with a Field Training Officer) → solo patrol. Path 2: Earn an associate's degree (2 years) → apply and attend academy → patrol. Path 3: Military service (4 years) → apply with veterans' preference → academy. Academy curriculum: criminal law, traffic law, defensive tactics, firearms training, emergency vehicle operations, first aid/CPR, report writing, cultural diversity, crisis intervention, and scenario-based training. Field training is the real test — working alongside an experienced FTO who evaluates every decision you make. After successful completion, you earn your badge and begin solo patrol.",
    ["Criminal Justice / Criminology", "Constitutional Law & Criminal Procedure", "Emergency Management & First Aid", "Psychology & Crisis Intervention", "Report Writing & Documentation"],
    [
      { name: "Police Academy — State POST Certification", url: "", description: "Each state has specific Peace Officer Standards and Training (POST) requirements. Academies are physically and academically demanding — expect 40+ hours/week of training." },
      { name: "Field Training Officer (FTO) Program", url: "", description: "After the academy, new officers spend 12-20 weeks with an FTO — learning to apply training in the real world. This is where officers truly learn the job." },
    ],
    [
      { name: "Criminal Investigation: Basic Perspectives by Charles Lushbaugh", url: "", type: "book" },
      { name: "Police Academy Fitness Preparation (YouTube)", url: "https://www.youtube.com/", type: "video" },
    ],
  ),

  s(nx(), "p35", "g16",
    "After 3-5 years on patrol, officers can test for specialized assignments or promotion. Specialized units: Detective Bureau (investigating major crimes), SWAT (tactical response), K-9 (working with police dogs), Narcotics/Vice, Cybercrime, and Community Affairs. Promotion ladder: Officer → Corporal/Detective → Sergeant (first-line supervisor) → Lieutenant → Captain → Commander/Deputy Chief → Chief of Police. Master's degree in Criminal Justice, Public Administration, or Organizational Leadership — many departments pay tuition for officers pursuing advanced degrees and offer salary incentives for degree completion. FBI National Academy — a prestigious 10-week leadership program for mid-career officers selected by their departments. Federal law enforcement roles (FBI, DEA, ATF, Secret Service) typically require a bachelor's degree and 2-3 years of professional experience.",
    ["Advanced Criminal Justice / Criminology", "Public Administration & Leadership", "Organizational Behavior & Management", "Advanced Investigation Techniques", "Homeland Security & Counterterrorism"],
    [
      { name: "FBI National Academy", url: "https://www.fbi.gov/services/training-academy/national-academy", description: "Prestigious 10-week program for law enforcement leaders — fewer than 1% of officers attend. Covers leadership, forensic science, behavioral science, and counterterrorism." },
      { name: "International Association of Chiefs of Police (IACP)", url: "https://www.theiacp.org/", description: "Professional organization for police leaders — conferences, training, policy resources, and networking with law enforcement executives worldwide." },
    ],
    [
      { name: "Police Executive Research Forum (PERF) — Publications", url: "https://www.policeforum.org/", type: "article" },
      { name: "Leadership in Police Organizations by IACP", url: "", type: "book" },
    ],
  ),

  s(nx(), "p35", "g17",
    "Executive leadership and doctoral-level careers in policing. Chief of Police — the top law enforcement official in a city or town, responsible for department strategy, budget, community relations, and political navigation. Sheriff — an elected position (unique among law enforcement) overseeing county law enforcement and often the county jail. Federal executive roles — leading FBI field offices, DEA divisions, or serving in the Department of Justice. Ph.D. in Criminal Justice or Criminology — for careers in academia (teaching future officers), research (studying policing effectiveness), and policy advising. Some pursue law degrees (JD) to work as prosecutors, defense attorneys, or police legal advisors. The pinnacle of a policing career combines experience, education, and leadership — serving not just the community but the profession itself.",
    ["Executive Leadership & Administration", "Criminal Justice Policy & Reform", "Public Administration (MPA / Ph.D.)", "Law (JD) — Criminal Law Focus", "Research Methods & Criminological Theory"],
    [
      { name: "National Institute of Justice (NIJ) — Research & Grants", url: "https://nij.ojp.gov/", description: "The research arm of the U.S. Department of Justice — funds and publishes research on policing, forensics, and criminal justice policy. Essential resource for leaders and scholars." },
      { name: "Police Foundation — Research & Policy", url: "https://www.policefoundation.org/", description: "Nonprofit advancing policing through research, innovation, and reform — work on cutting-edge projects shaping the future of law enforcement." },
    ],
    [
      { name: "Journal of Criminal Justice", url: "https://www.sciencedirect.com/journal/journal-of-criminal-justice", type: "article" },
      { name: "The Profession: A Memoir of Community, Race, and the Arc of Policing in America by Bill Bratton", url: "", type: "book" },
    ],
  ),

  // ========================================================================
  // p36 — ENTREPRENEUR
  // ========================================================================

  s(nx(), "p36", "g1",
    "Entrepreneurship starts with creativity, curiosity, and a willingness to try things! Every business begins as an idea — and children are natural idea generators. Encourage imaginative play with 'pretend store' or 'pretend restaurant' — taking orders, counting play money, and serving customers. Set up a lemonade stand or cookie sale — the simplest first business teaches counting, customer interaction, and the joy of earning. Talk about money: where it comes from, why we save some, and how we use it to help others. Read stories about characters who solve problems creatively. The most important entrepreneurial trait isn't a skill — it's the courage to try something and learn from what happens.",
    ["Imaginative Play (Store, Restaurant, Doctor)", "Counting & Basic Money Recognition", "Creativity & Problem-Solving", "Social Skills (Customer Interaction)"],
    [
      { name: "Lemonade Stand — First Business", url: "https://lemonadeday.org/", description: "Lemonade Day is a national program teaching kids entrepreneurship through the experience of running a lemonade stand — planning, budgeting, selling, and giving back." },
      { name: "Pretend Store / Restaurant Play", url: "", description: "Set up a pretend store with items from around the house — price them (1 cent, 5 cents, 10 cents), take turns being customer and shopkeeper, and practice counting money." },
    ],
    [
      { name: "What Do You Do With an Idea? by Kobi Yamada", url: "", type: "book" },
      { name: "Sesame Street: For Me, For You, For Later — Saving & Sharing", url: "https://www.sesamestreet.org/toolkits/save", type: "video" },
    ],
  ),

  s(nx(), "p36", "g2",
    "Build money awareness and creative problem-solving. Practice counting coins and understanding that money is exchanged for goods and services. Talk about wants vs. needs — the foundation of smart spending and business decision-making. Encourage creative thinking: 'How many different ways can you use a paperclip? How could you make a toy better?' Read stories about inventors and business creators. Set up a piggy bank with sections for 'spend,' 'save,' and 'give' — entrepreneurs understand money as a tool, not just a reward. Notice businesses in your community — the grocery store, the hair salon, the pizza shop — each started with someone's idea. The entrepreneurial mindset begins with seeing opportunities everywhere.",
    ["Coin & Money Recognition", "Counting & Simple Addition", "Creative Thinking (Brainstorming)", "Social Studies (Community Businesses)"],
    [
      { name: "Junior Achievement — JA Ourselves (Kindergarten)", url: "https://www.juniorachievement.org/", description: "JA's kindergarten program introduces personal economics — earning, saving, sharing, and the role of individuals in the economy through interactive activities." },
      { name: "Community Business Tour — Identify Local Entrepreneurs", url: "", description: "Walk through your neighborhood and identify local businesses — talk about who owns them, what they sell, and why someone started them. See entrepreneurship in real life." },
    ],
    [
      { name: "The Berenstain Bears' Trouble with Money by Stan & Jan Berenstain", url: "", type: "book" },
      { name: "Biz Kid$ — What Is Money? (PBS)", url: "https://bizkids.com/", type: "video" },
    ],
  ),

  s(nx(), "p36", "g3",
    "Build reading and math foundations — entrepreneurs read contracts, write business plans, and manage finances. Learn about earning, spending, saving, and donating — the four uses of money. Practice simple business math: if you sell lemonade for 50 cents and it costs 20 cents to make, how much do you earn? Start a simple business: pet sitting, yard work, or making and selling crafts. Learn about customer service — being polite, keeping promises, and delivering quality. Write a simple 'business plan' for your idea: What will you sell? Who will buy it? How much will you charge? Every entrepreneur starts by answering these same three questions.",
    ["Reading & Writing (Simple Plans)", "Math (Addition, Subtraction & Money)", "Social Studies (Buying & Selling)", "Creativity (Product Design)"],
    [
      { name: "Lemonade Day — My Lemonade Day App", url: "https://lemonadeday.org/", description: "Register for Lemonade Day and use the interactive app to set goals, create a budget, find a location, and track your lemonade stand business — real entrepreneurial experience." },
      { name: "Kid Biz — Start a Small Business", url: "", description: "Help your child start a micro-business: pet sitting, plant watering, craft sales, or greeting card making. Real experience with money, customers, and responsibility." },
    ],
    [
      { name: "Lunch Money by Andrew Clements", url: "", type: "book" },
      { name: "BrainPOP Jr.: Goods and Services", url: "https://jr.brainpop.com/socialstudies/economics/goodsandservices/", type: "video" },
    ],
  ),

  s(nx(), "p36", "g4",
    "Deepen reading comprehension with stories about real entrepreneurs and inventors. Learn about supply and demand in simple terms — why are some things expensive and others cheap? Study basic economics: scarcity, choice, opportunity cost, and trade-offs. Practice setting goals and tracking progress — entrepreneurs measure everything. Start learning about famous entrepreneurs: Madam C.J. Walker (first female self-made millionaire), Milton Hershey, and Walt Disney all started small. Improve your business: if you ran a lemonade stand before, how can you make it better this time? Better location? More advertising? A new flavor? Iteration — constantly improving — is the secret of successful businesses.",
    ["Reading Comprehension (Biographies)", "Math (Multiplication & Money)", "Social Studies (Basic Economics)", "Writing (Goal Setting & Planning)"],
    [
      { name: "Biz Kid$ — Taking Charge of Your Financial Future", url: "https://bizkids.com/", description: "Emmy Award-winning PBS series teaching kids about money, business, and entrepreneurship — real young entrepreneurs share their stories and advice." },
      { name: "Young Entrepreneurs Marketplace (Local Events)", url: "", description: "Many communities host youth entrepreneur fairs — rent a table, sell your products, and experience a real marketplace. The ultimate experiential learning." },
    ],
    [
      { name: "Kid Start-Up: How YOU Can Become an Entrepreneur by Mark Cuban", url: "", type: "book" },
      { name: "BrainPOP: Supply and Demand", url: "https://www.brainpop.com/socialstudies/economics/supplyanddemand/", type: "video" },
    ],
  ),

  s(nx(), "p36", "g5",
    "Math expands with multiplication and division — entrepreneurs use these for pricing, profit margins, and financial projections. Learn about profit and loss: Revenue - Expenses = Profit (or Loss). Study marketing basics — how do businesses get customers? The 4 Ps: Product, Price, Place, and Promotion. Practice public speaking — entrepreneurs pitch ideas to investors, sell to customers, and lead teams. Learn about different business types: product businesses (selling things), service businesses (doing things for people), and platform businesses (connecting people). Start observing business models around you — how does a movie theater make money? What about a video game company? Understanding business models is a superpower.",
    ["Math (Multiplication, Division & Financial Math)", "English (Persuasive Writing & Speaking)", "Social Studies (Economics & Business)", "Technology (Basic Spreadsheets)"],
    [
      { name: "VentureLab — Youth Entrepreneurship Programs", url: "https://venturelab.org/", description: "Free and low-cost entrepreneurship curriculum for kids — learn design thinking, opportunity recognition, and pitching through hands-on projects." },
      { name: "School Store / Fundraiser Leadership", url: "", description: "Volunteer to help run a school store or lead a fundraiser — real experience with inventory, pricing, marketing, and customer service in a low-risk environment." },
    ],
    [
      { name: "Better Than a Lemonade Stand by Daryl Bernstein", url: "", type: "book" },
      { name: "Khan Academy: Personal Finance", url: "https://www.khanacademy.org/college-careers-more/personal-finance", type: "course" },
    ],
  ),

  s(nx(), "p36", "g6",
    "Expand research skills — research a successful entrepreneur and present their story. Strengthen math with fractions and decimals — business financials require precise calculations. Study product design: what makes a good product? How do you improve an existing product? Learn about patents, trademarks, and copyrights — how entrepreneurs protect their ideas. Start learning basic spreadsheet skills (Google Sheets or Excel) — tracking income, expenses, and profit. Try a 'design thinking' project: identify a problem in your daily life, brainstorm solutions, build a prototype, and test it with real users. This is exactly how startups are born. Consider entering a young entrepreneur competition or pitch contest.",
    ["English Language Arts (Research & Presentation)", "Math (Decimals, Fractions & Financial Literacy)", "Technology (Spreadsheets & Basic Design)", "Art / Design (Product Prototyping)"],
    [
      { name: "NFTE — World Series of Innovation", url: "https://www.nfte.com/", description: "Network for Teaching Entrepreneurship runs innovation challenges — solve real-world problems, develop business ideas, and compete for prizes in a global youth competition." },
      { name: "Invention Convention / Young Inventors Program", url: "https://inventionconvention.org/", description: "K-12 invention education program — identify a problem, invent a solution, build a prototype, and present at local and national competitions." },
    ],
    [
      { name: "The Young Entrepreneur's Guide to Starting and Running a Business by Steve Mariotti", url: "", type: "book" },
      { name: "Crash Course: Economics", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtPNZwz5_o_5uirJ8gQXnhEO", type: "video" },
    ],
  ),

  s(nx(), "p36", "g7",
    "Math ramps up with pre-algebra — entrepreneurs use data to make decisions, and data requires math. Study economics more deeply: microeconomics (individual choices) vs. macroeconomics (whole economy). Learn business communication — how to write a professional email, create a simple pitch deck, and present confidently. Start learning about technology and coding — even non-technical entrepreneurs need to understand how software is built. Consider starting a real small business — Etsy shop (with parent help), tutoring younger students, lawn care, or reselling items online. The best entrepreneurship education is doing. Read 'The Lean Startup' concepts simplified: build something small, test it, learn, and improve — rather than waiting for perfection.",
    ["Math (Pre-Algebra & Data Analysis)", "English (Business Communication)", "Social Studies (Microeconomics)", "Technology (Intro to Coding)", "Public Speaking & Presentation Skills"],
    [
      { name: "Biz Kid$ — Entrepreneurship Curriculum", url: "https://bizkids.com/", description: "Emmy Award-winning PBS series with companion entrepreneurship curriculum — learn business planning, financial literacy, and real-world skills for starting and running a business." },
      { name: "Start a Real Micro-Business", url: "", description: "Launch a real small business — sell handmade items on Etsy, offer tutoring, mow lawns, or resell thrifted finds online. Real revenue, real customers, real learning." },
    ],
    [
      { name: "The Lemonade War Series by Jacqueline Davies", url: "", type: "book" },
      { name: "Code.org — Learn to Code (Any Course)", url: "https://code.org/", type: "course" },
    ],
  ),

  s(nx(), "p36", "g8",
    "Take the most advanced math available — strong quantitative skills separate successful entrepreneurs from dreamers. Study business structures: sole proprietorship, partnership, LLC, and corporation. Learn about business finance: revenue, expenses, profit, cash flow, and basic accounting principles. Practice negotiation — entrepreneurs negotiate with suppliers, customers, employees, and investors every day. Explore technology more deeply — learn basic HTML/CSS, build a simple website, or create a social media page for your business idea. Learn about failure — most successful entrepreneurs failed multiple times before succeeding. Failure isn't the opposite of success; it's part of the process. Research famous entrepreneurial failures-turned-successes: Steve Jobs (fired from Apple, then returned), Walt Disney (bankrupt at 22), and Oprah Winfrey (fired from her first TV job).",
    ["Pre-Algebra / Algebra I", "English (Persuasive & Business Writing)", "Technology (HTML/CSS & Web Basics)", "Social Studies (Business & Economics)", "Speech & Negotiation"],
    [
      { name: "DECA / FBLA — Middle School Division", url: "https://www.deca.org/", description: "DECA and FBLA offer middle school programs — compete in business, marketing, finance, and entrepreneurship events, building skills and confidence." },
      { name: "Junior Achievement — JA Finance Park / BizTown", url: "https://www.juniorachievement.org/", description: "Immersive simulation where students manage a personal budget and run businesses in a simulated economy — powerful experiential learning." },
    ],
    [
      { name: "Crash Course: Business Entrepreneurship", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtONg_mcx98Jj_uSEVg0Vy9B", type: "video" },
      { name: "Who Was Steve Jobs? by Pam Pollack & Meg Belviso", url: "", type: "book" },
    ],
  ),

  s(nx(), "p36", "g9",
    "Take Algebra I and any business electives your school offers. If your school has DECA, FBLA, or a business club — join immediately. These organizations provide the earliest exposure to business competitions, networking, and leadership. Start learning about marketing in depth: branding, advertising, social media marketing, and customer research. Learn about the gig economy — freelancing, side hustles, and the creator economy are reshaping entrepreneurship. Consider starting a YouTube channel, blog, or social media presence around a topic you're passionate about. This builds content creation, audience building, and monetization skills. Read business news — Wall Street Journal, Forbes, or Business Insider (look for student subscriptions) — understanding what's happening in business is essential.",
    ["Algebra I", "Business Elective / DECA / FBLA", "English (Persuasive Writing)", "Technology (Digital Media & Marketing)", "Social Studies (Current Events & Economics)"],
    [
      { name: "DECA — Competitive Events Program", url: "https://www.deca.org/", description: "DECA prepares emerging leaders in marketing, finance, hospitality, and management — compete in entrepreneurship, business management, and marketing events." },
      { name: "FBLA — Future Business Leaders of America", url: "https://www.fbla.org/", description: "FBLA is the largest business student organization in the world — competitive events, leadership conferences, and networking with business professionals." },
    ],
    [
      { name: "TED-Ed: What Makes an Entrepreneur?", url: "https://ed.ted.com/", type: "video" },
      { name: "Start Something That Matters by Blake Mycoskie (TOMS)", url: "", type: "book" },
    ],
  ),

  s(nx(), "p36", "g10",
    "Take advanced business or marketing electives. If your school offers accounting, take it — understanding financial statements is essential for any entrepreneur. Continue in DECA/FBLA and pursue leadership positions. Learn about business plans in depth — the blueprint every business needs: executive summary, market analysis, product description, marketing strategy, financial projections, and funding request. Study famous startup stories — how did companies like Nike, Starbucks, and Netflix start? Most began small. Practice pitching — create a 3-minute pitch for a business idea and present it to friends, family, or at competitions. Learn basic coding — Python or JavaScript — enough to understand how technology products are built, even if you won't code them yourself.",
    ["Honors English (Business Writing)", "Algebra / Geometry", "Accounting / Business Elective", "Technology (Coding — Python/JS)", "Marketing / Economics Elective"],
    [
      { name: "DECA / FBLA — State & National Competition", url: "https://www.deca.org/", description: "Advance through regional, state, and international DECA/FBLA competitions — the pinnacle of high school business competition, recognized by colleges and employers." },
      { name: "NFTE — Entrepreneurship Pathway Program", url: "https://www.nfte.com/", description: "Network for Teaching Entrepreneurship offers in-school and after-school programs — develop a business plan, pitch to real investors, and compete for startup funding." },
    ],
    [
      { name: "Coursera: Entrepreneurship 1: Developing the Opportunity (Wharton)", url: "https://www.coursera.org/learn/wharton-entrepreneurship-opportunity", type: "course" },
      { name: "The Lean Startup by Eric Ries", url: "", type: "book" },
    ],
  ),

  s(nx(), "p36", "g11",
    "Take AP Economics (Micro or Macro) if available — this is directly relevant to entrepreneurship. Continue in accounting and any business electives. Lead DECA/FBLA — running a chapter, organizing events, and mentoring younger members are exactly the leadership experiences colleges and investors value. Start building an entrepreneurial portfolio: the businesses you've started, competitions you've entered, ideas you've tested. Consider launching a real venture — an online store, a tutoring service, a web design business. Real revenue, even small amounts, speaks louder than any grade. Research entrepreneurship programs at colleges — Babson College (consistently #1 in entrepreneurship), MIT, Stanford, UC Berkeley, University of Michigan, and Indiana University have top programs.",
    ["AP Economics (Micro or Macro)", "Accounting / Business Math", "English (Business Communication)", "Technology (Web Development)", "Leadership / Student Government"],
    [
      { name: "Launch a Real Business or Side Hustle", url: "", description: "Start an actual business — selling products online, offering a service, creating content. Nothing demonstrates entrepreneurial potential like actually doing it and generating revenue." },
      { name: "Diamond Challenge — High School Entrepreneurship Competition", url: "https://diamondchallenge.org/", description: "University of Delaware's global entrepreneurship competition for high school students — pitch your business idea for $100,000+ in prizes and college scholarships." },
    ],
    [
      { name: "Khan Academy: AP Microeconomics", url: "https://www.khanacademy.org/economics-finance-domain/ap-microeconomics", type: "course" },
      { name: "Zero to One by Peter Thiel", url: "", type: "book" },
    ],
  ),

  s(nx(), "p36", "g12",
    "Take AP Economics (both Micro and Macro if possible), AP Statistics (data drives business decisions), and AP Computer Science (technology literacy is non-negotiable for modern entrepreneurs). Continue leading DECA/FBLA. Build your entrepreneurial portfolio — document everything: business plans, pitch decks, revenue numbers, customer testimonials. Learn about startup funding: bootstrapping (self-funding), friends & family, angel investors, venture capital, and crowdfunding. Study industries that interest you deeply — great entrepreneurs are domain experts before they are business experts. Research the entrepreneurship ecosystems at target colleges — does the school have startup incubators, pitch competitions, venture funds, and entrepreneurship minors?",
    ["AP Economics (Micro & Macro)", "AP Statistics", "AP Computer Science", "Advanced Accounting / Finance", "English (Pitch Deck & Presentations)"],
    [
      { name: "Blue Ocean Entrepreneurship Competition", url: "https://blueoceancompetition.org/", description: "Global online pitch competition for high school students — the largest virtual entrepreneurship competition. Pitch your idea, receive mentoring, and compete for cash prizes." },
      { name: "Summer Startup Internship or Accelerator", url: "", description: "Some cities have teen startup accelerators (e.g., Quarter Zero, Leangap) — intensive summer programs where you build and launch a company with mentorship from real entrepreneurs." },
    ],
    [
      { name: "edX: Becoming an Entrepreneur (MITx)", url: "https://www.edx.org/learn/entrepreneurship/massachusetts-institute-of-technology-becoming-an-entrepreneur", type: "course" },
      { name: "Shoe Dog by Phil Knight (Nike)", url: "", type: "book" },
    ],
  ),

  s(nx(), "p36", "g13",
    "The most critical year for college and portfolio building. Take AP Economics, AP Statistics, and AP Computer Science. Lead DECA/FBLA at the highest level — run for state or national office. Continue building your venture(s) — colleges and investors alike want to see traction, not just ideas. Research entrepreneurship programs thoroughly — Babson, MIT, Stanford, Wharton (UPenn), UC Berkeley (Haas), Michigan (Ross), Indiana (Kelley), and UT Austin (McCombs) offer top entrepreneurship education. Consider 'gap year entrepreneurship' — some successful founders defer college to work on their venture full-time (Peter Thiel Fellowship offers $100,000 to skip college and build a company). Understand that no college degree is required to be an entrepreneur — but the network, mentorship, and resources of a strong program can be transformative.",
    ["AP Economics (Micro & Macro)", "AP Statistics", "AP Computer Science", "English (College Essays & Business Plans)", "Business Elective (Marketing, Management, or Finance)"],
    [
      { name: "DECA / FBLA — National Officer Campaign", url: "https://www.deca.org/", description: "Run for national DECA or FBLA office — leading an organization of 200,000+ members is a transformative leadership experience that rivals any college activity." },
      { name: "Peter Thiel Fellowship Application", url: "https://thielfellowship.org/", description: "The Thiel Fellowship gives $100,000 to young people who want to build things instead of sitting in a classroom — for those who are ready to start a company now." },
    ],
    [
      { name: "Y Combinator Startup School (Free)", url: "https://www.startupschool.org/", type: "course" },
      { name: "The Hard Thing About Hard Things by Ben Horowitz", url: "", type: "book" },
    ],
  ),

  s(nx(), "p36", "g14",
    "Apply to colleges with strong entrepreneurship programs — or decide to pursue entrepreneurship directly without college. Both paths are valid and have produced billion-dollar companies. Complete AP exams for college credit. Finalize your entrepreneurial portfolio — this is more important for entrepreneurship than any standardized test score. If applying to business schools, the entrepreneurship 'hook' is powerful — real business experience differentiates you from every other applicant. Research entrepreneurship scholarships and fellowships. Consider the University of Miami's Launch Pad, University of Utah's Lassonde Studios, or University of Colorado Boulder's startup culture — many schools beyond the usual names have extraordinary entrepreneurship resources. Even if you attend a school without a formal entrepreneurship program, you can start a business anywhere.",
    ["AP Economics (Exam)", "AP Statistics (Exam)", "AP Computer Science (Exam)", "Business Plan Development", "English (College Applications & Pitch Decks)"],
    [
      { name: "Apply to Top Entrepreneurship Programs", url: "", description: "Top programs: Babson (#1 entrepreneurship), MIT, Stanford, Wharton (UPenn), UC Berkeley, Michigan Ross, Indiana Kelley, UT Austin McCombs. Many other schools have excellent entrepreneurship centers and incubators." },
      { name: "Continue Building Your Venture(s)", url: "", description: "Keep running and growing your business. Revenue, customers, and traction are the ultimate credentials for any entrepreneur. Launch, measure, learn, iterate — forever." },
    ],
    [
      { name: "Startup School — Y Combinator (Free Course)", url: "https://www.startupschool.org/", type: "course" },
      { name: "Rework by Jason Fried & David Heinemeier Hansson", url: "", type: "book" },
    ],
  ),

  s(nx(), "p36", "g15",
    "Bachelor's degree in Business Administration, Entrepreneurship, Finance, Marketing, or Computer Science. All four paths can lead to successful entrepreneurship — choose based on your venture type. Key coursework: accounting, finance, marketing, operations, strategy, organizational behavior, and product development. Most entrepreneurship programs include: business plan development, pitch competitions with real funding, startup incubators/accelerators, mentor matching, and access to angel investor networks. The most valuable part of college for entrepreneurs isn't the classroom — it's the network of co-founders, early employees, and investors. Many legendary companies (Facebook, Google, Microsoft) were started in college dorms. Use college as a laboratory — test ideas, fail cheaply, and find your co-founders.",
    ["Business Administration / Entrepreneurship", "Accounting & Financial Analysis", "Marketing & Customer Development", "Product Design & Development", "Organizational Behavior & Leadership"],
    [
      { name: "College Startup Incubator / Accelerator", url: "", description: "Most universities have startup programs — Y Combinator, Stanford StartX, MIT delta v, Babson Summer Venture Program. Apply with your venture idea for funding and mentorship." },
      { name: "University Pitch Competitions", url: "", description: "Every major university hosts business plan and pitch competitions with real prize money ($10,000-$100,000+). Win funding, meet investors, and validate your idea." },
    ],
    [
      { name: "The Startup Owner's Manual by Steve Blank & Bob Dorf", url: "", type: "book" },
      { name: "Y Combinator — How to Start a Startup (Stanford)", url: "https://www.youtube.com/playlist?list=PL5q_lef6zVkaTY_cT1iuCM6fNG6PkZ-0p", type: "video" },
    ],
  ),

  s(nx(), "p36", "g16",
    "MBA (Master of Business Administration) at a top program — Harvard, Stanford GSB, Wharton, Kellogg, MIT Sloan, or Chicago Booth. An MBA provides: advanced business education, an extraordinary network, credibility with investors, and often a 'pause' to work on your venture. Many MBA students launch startups during their program using school resources and connections. Alternative: skip graduate school and go all-in on your venture — many of the world's most successful entrepreneurs don't have MBAs. For those wanting venture capital: working at a VC firm, a high-growth startup, or in investment banking provides the financial skills and networks that help raise funding. Serial entrepreneurship path: build and sell a company, then start another — each cycle teaches more than any degree.",
    ["MBA Core (Strategy, Finance, Marketing, Operations)", "Venture Capital & Private Equity", "Entrepreneurial Finance & Fundraising", "Scaling & Growth Strategy", "Leadership & Organizational Design"],
    [
      { name: "Y Combinator — Apply with Your Startup", url: "https://www.ycombinator.com/", description: "The world's most prestigious startup accelerator — $500,000 investment, 3 months of intensive mentorship, and access to the most powerful network of founders and investors." },
      { name: "Techstars / 500 Startups / Seed Accelerators", url: "https://www.techstars.com/", description: "Apply to leading startup accelerators — funding, mentorship, and demo day exposure to hundreds of investors. The fast track to venture-backed entrepreneurship." },
    ],
    [
      { name: "Venture Deals by Brad Feld & Jason Mendelson", url: "", type: "book" },
      { name: "Masters of Scale Podcast (Reid Hoffman)", url: "https://mastersofscale.com/", type: "article" },
    ],
  ),

  s(nx(), "p36", "g17",
    "The pinnacle of entrepreneurship. Serial entrepreneur — having founded, scaled, and exited multiple companies. Venture Capital Partner — investing in and mentoring the next generation of founders. CEO of a public company — leading hundreds or thousands of employees and answering to a board of directors and shareholders. Industry thought leader — writing books, giving keynotes, and shaping the conversation about innovation and business. Philanthropic entrepreneur — using wealth and influence to solve global challenges through foundations and impact investing. Ph.D. in Entrepreneurship, Innovation, or Management — for those pursuing academic careers, teaching and researching entrepreneurship. The entrepreneurial journey never ends — the most successful entrepreneurs keep building, investing, and mentoring throughout their lives. Every billionaire started with a single idea and the courage to try.",
    ["Advanced Strategy & Competitive Dynamics", "Mergers & Acquisitions", "Corporate Governance & Board Leadership", "Innovation & Disruptive Technology", "Philanthropy & Impact Investing"],
    [
      { name: "World Economic Forum — Young Global Leaders", url: "https://www.weforum.org/", description: "A community of exceptional leaders under 40 — entrepreneurs, CEOs, heads of state, and artists shaping the global agenda. The pinnacle of leadership recognition." },
      { name: "Endeavor — Global Entrepreneurship Network", url: "https://endeavor.org/", description: "Leading global community of high-impact entrepreneurs — mentorship, access to capital, and a network of founders in 40+ markets transforming economies." },
    ],
    [
      { name: "Harvard Business Review (HBR)", url: "https://hbr.org/", type: "article" },
      { name: "The Innovator's Dilemma by Clayton Christensen", url: "", type: "book" },
    ],
  ),

];
