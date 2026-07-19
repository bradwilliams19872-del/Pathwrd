/**
 * Batch 8 — p42 Speech Pathologist, p43 Film Director, p44 Occupational Therapist,
 * p45 Investment Banker, p46 Fashion Designer
 * 
 * All 17 grade levels per profession. IDs: rs1260–rs1344.
 * 
 * Import: import { newProfessionsBatch8 } from "./new-professions-batch8";
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

let n = 1260;
function nx(): string { return "rs" + (n++); }

export const newProfessionsBatch8: RoadmapStep[] = [


  // ========================================================================
  // p42 — SPEECH PATHOLOGIST 🗣️
  // ========================================================================

  s(nx(), "p42", "g1",
    "Speech pathology begins with a love of sounds, words, and connection! At this age, children are soaking up language like sponges — every rhyme, song, and story builds the neural pathways for communication. Play with sounds: animal noises, silly made-up words, and tongue twisters. Read aloud daily and pause to let children fill in rhyming words. Sing songs with hand motions — 'Itsy Bitsy Spider' and 'Wheels on the Bus' build coordination between language and movement. Speech pathologists help people find their voice — and the journey starts by falling in love with the music of language itself.",
    ["Phonological Awareness (Rhymes & Sounds)", "Vocabulary Building", "Social Communication", "Fine Motor Skills (Hand Motions)"],
    [
      { name: "PBS Kids — Reading & Rhyming Games", url: "https://pbskids.org/games/reading/", description: "Free games that build phonological awareness — rhyming, letter sounds, and early word recognition through playful digital activities." },
      { name: "Library Storytime (Local Public Library)", url: "", description: "Weekly storytime at your local library — children hear fluent reading, learn songs and fingerplays, and practice sitting and listening in a group." },
    ],
    [
      { name: "Brown Bear, Brown Bear, What Do You See? by Bill Martin Jr. & Eric Carle", url: "", type: "book" },
      { name: "Sesame Street: Word on the Street — Vocabulary Videos", url: "https://pbskids.org/sesame/", type: "video" },
    ],
  ),

  s(nx(), "p42", "g2",
    "Build sound awareness — the foundation of all speech and language. Play 'I Spy' with beginning sounds ('I spy something that starts with b-b-b…'). Practice clapping out syllables in names and words. Sing songs with complex sounds and let children make up their own verses. Tell stories together — you start, they add the next part — building narrative skills. Notice how mouths move to make different sounds: 'Watch my lips when I say mmmm.' Talk about feelings and give children words for emotions. Speech pathologists are equal parts scientist, teacher, and cheerleader — and the best ones remember that communication is fundamentally about human connection.",
    ["Phonics & Sound Discrimination", "Syllable Awareness", "Storytelling & Narrative Skills", "Social-Emotional Vocabulary"],
    [
      { name: "Starfall — Learn to Read with Phonics", url: "https://www.starfall.com/", description: "Free phonics-based reading activities — systematic sound-letter instruction that speech pathologists use to build phonological awareness." },
      { name: "Play Sound Detective at Home", url: "", description: "Go on a 'sound hunt' around the house — find objects that start with /s/, /m/, /p/. This playful phoneme awareness activity is straight out of an SLP's toolkit." },
    ],
    [
      { name: "Chicka Chicka Boom Boom by Bill Martin Jr. & John Archambault", url: "", type: "book" },
      { name: "Super Simple Songs — Nursery Rhymes (YouTube)", url: "https://www.youtube.com/@SuperSimpleSongs", type: "video" },
    ],
  ),

  s(nx(), "p42", "g3",
    "Reading instruction intensifies — and speech pathologists are reading experts. The connection between speech sounds and written letters (phonics) is the heart of early literacy and a core area of SLP practice. Practice reading aloud daily and ask comprehension questions: 'Why did the character do that?' Practice tongue twisters to build articulatory precision — 'Peter Piper picked a peck of pickled peppers.' Notice and gently correct speech sound errors — 'I heard you say 'wabbit' — can you try 'rrrabbit'?' Learn about different ways people communicate: sign language, communication boards, and AAC devices. Speech pathologists work with the full spectrum of human communication — from helping toddlers say their first words to helping stroke survivors regain language.",
    ["Phonics & Decoding", "Reading Fluency", "Articulation Practice", "Empathy & Understanding Differences"],
    [
      { name: "Reading Rockets — Phonics & Decoding Activities", url: "https://www.readingrockets.org/", description: "Research-based reading resources for parents and teachers — strategies, activities, and video demonstrations that SLPs use to support literacy." },
      { name: "Learn Basic Sign Language (ASL)", url: "https://www.lifeprint.com/", description: "Start learning American Sign Language with free online lessons — understanding alternative communication is essential for future speech pathologists." },
    ],
    [
      { name: "Sheep in a Jeep by Nancy Shaw", url: "", type: "book" },
      { name: "BrainPOP Jr.: Reading and Writing", url: "https://jr.brainpop.com/readingandwriting/", type: "video" },
    ],
  ),

  s(nx(), "p42", "g4",
    "Reading comprehension deepens and writing skills develop. Notice language patterns: past tense '-ed', plurals '-s', and how sentences are structured. Children who are curious about language rules are natural linguists — and speech pathology is applied linguistics. Practice storytelling with a beginning, middle, and end. Listen to classmates speak — notice different accents, speech patterns, and communication styles. Learn about the human body: the lungs, vocal cords, tongue, and lips all work together to produce speech. Speech pathologists understand anatomy as well as language. Volunteer to read with younger children — teaching others builds meta-linguistic awareness. Every great SLP started by noticing how people use language differently.",
    ["Reading Comprehension", "Grammar & Sentence Structure", "Science (Human Body Basics)", "Writing (Narrative Structure)"],
    [
      { name: "Epic! — Digital Library for Kids", url: "https://www.getepic.com/", description: "Thousands of books at all reading levels — extensive nonfiction section about the human body, including how we speak and hear." },
      { name: "Reading Buddies — Tutor Younger Students", url: "", description: "Volunteer to read with younger children at school or the library — teaching early literacy skills reinforces your own understanding of how language develops." },
    ],
    [
      { name: "The Way I Feel by Janan Cain", url: "", type: "book" },
      { name: "Mystery Science: How Does Your Voice Work?", url: "https://mysteryscience.com/", type: "video" },
    ],
  ),

  s(nx(), "p42", "g5",
    "Language arts expand to include writing, grammar, and public speaking. Speech pathologists study how language works at every level — from individual sounds (phonetics) to full conversations (pragmatics). Practice oral presentations and notice: rate, volume, clarity, and eye contact. Learn about the brain — Broca's area and Wernicke's area are the language centers. Speech pathologists are brain experts too; they work with stroke patients, TBI survivors, and children with developmental disorders. Study a foreign language — understanding how different languages use different sound systems builds metalinguistic awareness. Keep a journal: write about conversations you observed and what made them work (or not). Language is everywhere once you start paying attention.",
    ["English Language Arts", "Science (Brain & Nervous System)", "Foreign Language (Intro)", "Oral Presentations & Public Speaking"],
    [
      { name: "Duolingo — Start a Foreign Language", url: "https://www.duolingo.com/", description: "Learn a new language for free — understanding phonetics, grammar, and language structure from a second perspective is invaluable for future SLPs." },
      { name: "4-H Public Speaking / Demonstration Contest", url: "https://4-h.org/", description: "Practice oral communication skills through 4-H presentations — build confidence, clarity, and audience awareness, all core SLP competencies." },
    ],
    [
      { name: "Frindle by Andrew Clements", url: "", type: "book" },
      { name: "Crash Course Kids: The Brain", url: "https://www.youtube.com/playlist?list=PLhz12vamHOnZ4ZDC0dS6C9HRN5Qrm0jHO", type: "video" },
    ],
  ),

  s(nx(), "p42", "g6",
    "Expand knowledge of how the body produces speech. Study the respiratory system (lungs, diaphragm), the larynx (voice box), and the articulators (tongue, lips, palate). Speech pathology is deeply anatomical — understanding the speech mechanism is foundational. Practice careful listening: transcribe a short conversation phonetically (how it actually sounds, not how it's spelled). Learn about speech and language disorders: stuttering, apraxia, aphasia, and articulation disorders. Read biographies of people who overcame communication challenges — like King George VI in 'The King's Speech.' Consider volunteering with special education classes or peer tutoring students who struggle with reading. The desire to help others communicate is at the heart of this profession.",
    ["Science (Respiratory & Vocal Anatomy)", "English (Phonetic Awareness)", "Social Studies (Disability Awareness)", "Peer Tutoring / Mentoring"],
    [
      { name: "Visible Body — 3D Human Anatomy", url: "https://www.visiblebody.com/", description: "Explore interactive 3D models of the respiratory system, larynx, and vocal tract — see exactly how speech is physically produced." },
      { name: "Peer Tutor / Reading Support Volunteer", url: "", description: "Help classmates or younger students with reading and speaking — early exposure to the therapeutic helping relationship that defines speech pathology." },
    ],
    [
      { name: "The King's Speech: How One Man Saved the British Monarchy by Mark Logue & Peter Conradi", url: "", type: "book" },
      { name: "TED-Ed: How Does Your Voice Work?", url: "https://ed.ted.com/", type: "video" },
    ],
  ),

  s(nx(), "p42", "g7",
    "Deepen understanding of linguistics — the scientific study of language. Learn about phonetics, morphology, syntax, semantics, and pragmatics. Speech pathologists use these branches daily. Study child development — understand the typical sequence of speech and language milestones from birth through adolescence. Continue foreign language study — bilingual SLPs are in high demand and language-learning builds deep understanding of how language systems work. Practice active listening: paraphrase what someone said and ask clarifying questions — this is the core clinical skill of every SLP. Volunteer or observe at a speech clinic if possible. Speech pathology combines the analytical rigor of science with the empathy of healthcare.",
    ["English (Linguistics Intro)", "Life Science (Human Development)", "Foreign Language (Continued)", "Active Listening & Communication"],
    [
      { name: "ASHA — American Speech-Language-Hearing Association: Student Resources", url: "https://www.asha.org/students/", description: "The national professional organization for SLPs — explore career paths, read about disorders, and learn what being an SLP really means." },
      { name: "Observe / Volunteer at a Speech Clinic", url: "", description: "Contact local speech therapy clinics, hospitals, or schools — many SLPs welcome students who want to observe sessions and learn about the profession." },
    ],
    [
      { name: "Khan Academy: Human Development", url: "https://www.khanacademy.org/", type: "course" },
      { name: "Out of My Mind by Sharon M. Draper", url: "", type: "book" },
    ],
  ),

  s(nx(), "p42", "g8",
    "Take the most advanced science courses available — biology and anatomy are essential for understanding the speech and hearing mechanisms. Deepen linguistic knowledge: study syntax (sentence structure) and phonology (sound patterns) in more depth. Learn about audiology — hearing and speech are inseparable, and many SLPs work closely with audiologists. Practice writing clinical-style observations: describe a person's speech, language, and communication style objectively and in detail. Explore different SLP work settings: schools, hospitals, rehabilitation centers, private practice, and research. The field is incredibly diverse — from helping premature infants learn to feed to helping executives recover public speaking after a stroke. Speech pathology changes lives across the entire human lifespan.",
    ["Biology / Life Science", "English (Technical Writing)", "Health Science", "Psychology (Intro)"],
    [
      { name: "Stuttering Foundation — Free Resources", url: "https://www.stutteringhelp.org/", description: "The leading resource on stuttering — videos, articles, and personal stories from people who stutter and the SLPs who work with them." },
      { name: "School Speech-Language Pathologist Job Shadow", url: "", description: "Shadow the SLP at your school or a nearby school — see how they assess, diagnose, and treat children with communication disorders." },
    ],
    [
      { name: "The Man Who Mistook His Wife for a Hat by Oliver Sacks", url: "", type: "book" },
      { name: "TED Talk: The Birth of a Word (Deb Roy)", url: "https://www.ted.com/", type: "video" },
    ],
  ),

  s(nx(), "p42", "g9",
    "Take biology and start exploring psychology — speech pathology sits at the intersection of healthcare, education, and behavioral science. Study the brain in more depth: neuroanatomy, neuroplasticity, and how language is processed. Speech pathologists treat communication disorders caused by stroke, TBI, Parkinson's, autism, and developmental delays — all of which involve the brain. Continue foreign language study. Practice clinical observation: watch how people communicate in different settings and note patterns. Learn about augmentative and alternative communication (AAC) — technology that helps people who cannot speak. Explore the undergraduate path: Communication Sciences and Disorders (CSD) is the most direct major. The field is projected to grow 19% over the next decade — far faster than average.",
    ["Biology (Honors)", "Psychology", "English (Analytical Writing)", "Foreign Language", "Health Sciences"],
    [
      { name: "ASHA Career Portal — Explore SLP Specialties", url: "https://www.asha.org/careers/", description: "Discover the full range of SLP career paths — pediatric, adult medical, school-based, research, and more — with real job descriptions and salary data." },
      { name: "Volunteer with Special Olympics or Disability Services", url: "https://www.specialolympics.org/", description: "Work with individuals who have communication challenges — build empathy, patience, and the desire to help that drives every great SLP." },
    ],
    [
      { name: "Coursera: Understanding the Brain (University of Chicago)", url: "https://www.coursera.org/", type: "course" },
      { name: "Ghost Boy by Martin Pistorius", url: "", type: "book" },
    ],
  ),

  s(nx(), "p42", "g10",
    "Take the most rigorous science available — AP or honors biology, chemistry, and physics if possible. Speech production involves acoustics (physics of sound), respiration (biology), and neurology (brain science). Deepen psychology knowledge: study cognitive psychology, child development, and abnormal psychology. Speech pathologists work with autism, ADHD, learning disabilities, and mental health conditions. Practice research skills: learn to read scientific papers and evaluate evidence. Speech pathology is an evidence-based practice — every treatment must be supported by research. Explore undergraduate CSD programs: top schools include University of Iowa, Northwestern, University of Washington, and Purdue. Strong grades in science and language arts are equally important.",
    ["Biology / Chemistry", "Psychology (Advanced)", "English (Research Writing)", "Physics (Acoustics)", "Foreign Language"],
    [
      { name: "ASHA Practice Portal — Evidence-Based Practice", url: "https://www.asha.org/practice-portal/", description: "Explore real clinical practice guidelines for speech and language disorders — understand how research translates into treatment for actual patients." },
      { name: "Volunteer at a Hospital / Rehabilitation Center", url: "", description: "Hospitals employ medical SLPs who work with stroke, TBI, and swallowing disorder patients — volunteer to see the medical side of the profession." },
    ],
    [
      { name: "The Brain That Changes Itself by Norman Doidge", url: "", type: "book" },
      { name: "edX: Introduction to Developmental Psychology (UQ)", url: "https://www.edx.org/", type: "course" },
    ],
  ),

  s(nx(), "p42", "g11",
    "Take AP Biology, AP Psychology, and AP English — the core disciplines of speech-language pathology. Study for the SAT/ACT — competitive CSD programs expect strong scores. Deepen understanding of communication disorders: autism spectrum disorder, specific language impairment, aphasia, dysarthria, and fluency disorders. Listen to podcasts by SLPs to understand the day-to-day reality of the profession. Research undergraduate programs carefully: Communication Sciences and Disorders is the most direct major, but some students major in linguistics, psychology, or biology and complete SLP prerequisites separately. The graduate degree (MS in SLP) is required for certification — the undergraduate years build the foundation. Job shadow multiple SLPs in different settings to confirm this is your path.",
    ["AP Biology", "AP Psychology", "AP English Language", "Anatomy / Physiology", "Statistics"],
    [
      { name: "National Student Speech Language Hearing Association (NSSLHA)", url: "https://www.nsslha.org/", description: "Pre-professional membership for students interested in CSD — access to mentors, scholarships, and the largest community of future SLPs." },
      { name: "Job Shadow SLPs in Multiple Settings", url: "", description: "Shadow at least 3 different SLPs — a school-based SLP, a hospital SLP, and a private practice SLP — to see the full range of what this career offers." },
    ],
    [
      { name: "Speech and Language Processing by Daniel Jurafsky & James H. Martin (Intro Chapters)", url: "", type: "book" },
      { name: "The StutterTalk Podcast", url: "https://stuttertalk.com/", type: "article" },
    ],
  ),

  s(nx(), "p42", "g12",
    "Take AP Biology, AP Psychology, AP English, and AP Statistics. Statistics is critical — SLPs use standardized assessments, interpret test scores, and evaluate treatment effectiveness using statistical methods. Continue SAT/ACT preparation. Research CSD undergraduate programs in-depth: look at clinical practicum opportunities, research labs, and graduate school placement rates. Visit campuses and meet with CSD faculty if possible. Consider volunteering or working as a research assistant in a university lab over the summer. Write application essays that connect personal experiences with communication — admissions committees want students who understand the human impact of communication disorders. The best SLPs are described as 'part scientist, part teacher, part therapist' — your application should reflect all three.",
    ["AP Biology (Exam)", "AP Psychology (Exam)", "AP English Literature", "AP Statistics", "Foreign Language"],
    [
      { name: "Council of Academic Programs in Communication Sciences and Disorders", url: "https://www.capcsd.org/", description: "Directory of accredited CSD programs — compare undergraduate programs, admission requirements, and outcomes to find the best fit." },
      { name: "Summer Research Assistant in a CSD / Linguistics Lab", url: "", description: "Contact professors at local universities — assisting with research on speech, language, or hearing is exceptional preparation and a standout on applications." },
    ],
    [
      { name: "Coursera: Child Nutrition and Cooking (Stanford) — Feeding/Swallowing Context", url: "https://www.coursera.org/", type: "course" },
      { name: "The Diving Bell and the Butterfly by Jean-Dominique Bauby", url: "", type: "book" },
    ],
  ),

  s(nx(), "p42", "g13",
    "The critical college application year. Complete AP exams. Polish personal statements — tell a compelling story about why you want to help people communicate. Apply to universities with strong CSD programs: University of Iowa (#1), Northwestern University, Purdue University, University of Washington, University of Texas at Austin, and University of Wisconsin–Madison. Also consider strong linguistics or psychology programs with SLP prerequisite tracks. Continue job shadowing and volunteering — depth of experience matters more than breadth. If your high school offers a senior research project, study something related to speech, language, or hearing. The 6-year path (4-year BS + 2-year MS) is standard, followed by a Clinical Fellowship Year (CFY) and the Praxis exam for CCC-SLP certification.",
    ["AP Biology (Final)", "AP Psychology (Final)", "AP English (Final)", "AP Statistics (Final)", "College Application Essays"],
    [
      { name: "ASHA EdFind — Accredited SLP Programs", url: "https://www.asha.org/edfind/", description: "ASHA's official search tool for accredited CSD programs — filter by location, degree level, and admission requirements to build your college list." },
      { name: "Volunteer at a Speech and Hearing Clinic", url: "", description: "Dedicated volunteer work at a university or community speech clinic — demonstrate sustained commitment to the field throughout high school." },
    ],
    [
      { name: "Language Development: An Introduction by Robert Owens", url: "", type: "book" },
      { name: "ASHA Leader — Professional News Magazine", url: "https://leader.pubs.asha.org/", type: "article" },
    ],
  ),

  s(nx(), "p42", "g14",
    "Finalize college decisions and prepare for the undergraduate journey. If you've been accepted to a CSD program, review the curriculum — typical courses include phonetics, anatomy & physiology of speech, language development, audiology, and speech science. If you're majoring in linguistics, psychology, or biology, map out how you'll complete the SLP prerequisites (often called 'leveling courses'). Join NSSLHA as soon as you start college — it provides mentorship, networking, and volunteer opportunities. Consider getting certified as an SLPA (Speech-Language Pathology Assistant) in some states — you can work in the field during college. The demand for SLPs is enormous, the work is deeply meaningful, and the career offers flexibility across settings, populations, and schedules.",
    ["Communication Sciences & Disorders (Prep)", "Linguistics Elective", "Psychology Elective", "Biology Elective", "Statistics Prep"],
    [
      { name: "NSSLHA — Join Your University Chapter", url: "https://www.nsslha.org/", description: "Join the National Student Speech Language Hearing Association in your first semester — connect with peers, find mentors, and access scholarships." },
      { name: "SLPA Certification (If Available in Your State)", url: "", description: "Some states allow you to work as an SLPA with a bachelor's degree — earn income and clinical experience in the field before graduate school." },
    ],
    [
      { name: "Anatomy & Physiology for Speech, Language, and Hearing by J. Anthony Seikel", url: "", type: "book" },
      { name: "Aphasia Access Podcast", url: "https://www.aphasiaaccess.org/", type: "article" },
    ],
  ),

  s(nx(), "p42", "g15",
    "Major in Communication Sciences and Disorders (CSD), or complete prerequisites alongside a linguistics/psychology/biology major. Core CSD coursework: phonetics (learning IPA transcription), anatomy and physiology of the speech and hearing mechanisms, language development across the lifespan, audiology, speech science (acoustics), and introduction to communication disorders. Earn strong grades — graduate SLP programs are competitive, often requiring 3.5+ GPA. Get clinical observation hours — most programs require 25+ observation hours before graduate school. Volunteer or work in a research lab studying speech, language, or hearing. Join NSSLHA and take on leadership roles. Apply for summer internships at speech clinics or hospitals. Build relationships with professors — strong letters of recommendation are crucial for graduate school admission.",
    ["Phonetics & IPA Transcription", "Anatomy of Speech & Hearing", "Language Development", "Audiology", "Clinical Observation Hours"],
    [
      { name: "NSSLHA — Leadership & National Conference", url: "https://www.nsslha.org/", description: "Run for chapter leadership, attend the national convention, and build your professional network — graduate programs value demonstrated engagement in the field." },
      { name: "CSD Research Lab — Undergraduate Research Assistant", url: "", description: "Work in a professor's lab studying aphasia, child language disorders, or speech acoustics — research experience distinguishes graduate school applications." },
    ],
    [
      { name: "International Phonetic Alphabet (IPA) Chart — Interactive", url: "https://www.internationalphoneticassociation.org/", type: "article" },
      { name: "The Spirit Catches You and You Fall Down by Anne Fadiman", url: "", type: "book" },
    ],
  ),

  s(nx(), "p42", "g16",
    "Master of Science (MS) in Speech-Language Pathology — a 2-year program combining coursework and clinical practicum. Core graduate courses: dysphagia (swallowing disorders), motor speech disorders, fluency disorders (stuttering), voice disorders, aphasia, child language disorders, augmentative and alternative communication (AAC), and clinical methods. Complete 400+ hours of supervised clinical practicum across multiple settings — schools, hospitals, skilled nursing facilities, and outpatient clinics. After graduation, complete a 9-month Clinical Fellowship Year (CFY) under a certified SLP mentor. Pass the Praxis exam in Speech-Language Pathology. Earn the Certificate of Clinical Competence (CCC-SLP) from ASHA and state licensure. The first years of practice are when you discover your specialty — pediatric feeding, post-stroke aphasia, voice therapy, fluency, or AAC.",
    ["Dysphagia & Feeding Disorders", "Child & Adult Language Disorders", "Motor Speech & Fluency Disorders", "Clinical Practicum (400+ Hours)", "Augmentative & Alternative Communication"],
    [
      { name: "ASHA Clinical Fellowship — CFY Placement", url: "https://www.asha.org/certification/clinical-fellowship/", description: "Find your Clinical Fellowship mentor and placement through ASHA's resources — the CFY is the bridge between graduate school and independent practice." },
      { name: "ASHA Convention — Attend & Present", url: "https://convention.asha.org/", description: "The largest gathering of speech-language professionals in the world — network, attend research presentations, and find your specialty within the field." },
    ],
    [
      { name: "Praxis Review for Speech-Language Pathology", url: "https://www.ets.org/praxis.html", type: "course" },
      { name: "Motor Speech Disorders by Joseph Duffy", url: "", type: "book" },
    ],
  ),

  s(nx(), "p42", "g17",
    "Clinical Doctorate in Speech-Language Pathology (SLPD) or Ph.D. in Communication Sciences and Disorders — for clinical specialization, academic research, or leadership roles. SLPD: advanced clinical practice focusing on a specialty area (dysphagia, voice, neurogenic disorders, etc.). Ph.D.: research career investigating the science of communication and its disorders. Career pinnacles: Director of Rehabilitation at a major hospital, clinical researcher developing new assessment tools, university professor training the next generation of SLPs, private practice owner, or policy advisor shaping healthcare legislation. Few fields offer such direct, tangible impact — helping a stroke survivor say 'I love you' to their spouse, helping a child with autism make their first friend, or helping a person who stutters speak with confidence. Speech pathologists change lives through the power of communication.",
    ["SLPD / Ph.D. in CSD", "Advanced Clinical Specialty", "Research Methods & Biostatistics", "Teaching & Supervision", "Healthcare Leadership & Policy"],
    [
      { name: "ASHA Continuing Education — Specialty Certification", url: "https://www.asha.org/certification/", description: "Earn advanced clinical certifications — Board Certified Specialist in swallowing, child language, fluency, or other specialties recognized within the profession." },
      { name: "ASHA Government Affairs & Public Policy", url: "https://www.asha.org/advocacy/", description: "Advocate for the profession and the people it serves — influence healthcare, education, and disability policy at the state and national level." },
    ],
    [
      { name: "American Journal of Speech-Language Pathology", url: "https://pubs.asha.org/journal/ajslp", type: "article" },
      { name: "My Stroke of Insight by Jill Bolte Taylor", url: "", type: "book" },
    ],
  ),

  // ========================================================================
  // p43 — FILM DIRECTOR 🎬
  // ========================================================================

  s(nx(), "p43", "g1",
    "Film directing begins with imagination — and no one has more of it than a preschooler! At this age, storytelling is instinctive: children create elaborate scenarios with toys, act out family scenes during pretend play, and invent characters with their own voices and personalities. Encourage pretend play with costumes, puppets, and props — every great director started by directing imaginary worlds. Draw pictures and tell the story behind them. Watch age-appropriate movies together and talk about the characters and what happened. The essence of directing is making creative choices — 'What should happen next? How does the character feel?' — and children make these decisions naturally every day.",
    ["Imaginative Play & Storytelling", "Drawing & Visual Expression", "Empathy (Understanding Characters)", "Collaborative Play"],
    [
      { name: "PBS Kids — Creative Storytelling Games", url: "https://pbskids.org/games/storytelling/", description: "Free games that let children create characters, build stories, and make creative choices — the earliest form of directing a narrative." },
      { name: "Puppet Theater at Home", url: "", description: "Create a simple puppet theater from a cardboard box — children direct characters, improvise dialogue, and control the 'frame' of their story." },
    ],
    [
      { name: "Harold and the Purple Crayon by Crockett Johnson", url: "", type: "book" },
      { name: "Classic Shorts: Pixar's Short Films Collection", url: "https://www.pixar.com/", type: "video" },
    ],
  ),

  s(nx(), "p43", "g2",
    "Storytelling deepens as children learn narrative structure — a beginning, middle, and end. Read stories and predict what will happen next — this is 'story sense,' the director's most important instinct. Draw story sequences: 'first this happened, then this, then this' — these are the earliest storyboards. Act out favorite scenes from movies or books, with costumes and voices. Talk about how movies make you feel — happy, sad, scared, excited — and what the filmmaker did to create those feelings. Use a tablet or phone to record short videos of play — seeing their 'performances' on screen is exciting and builds visual awareness. Directors are storytellers who use images instead of words — and every great director started by loving stories.",
    ["Narrative Structure (Beginning/Middle/End)", "Drawing & Visual Sequencing", "Emotional Awareness", "Technology (Basic Recording)"],
    [
      { name: "Storybird — Create Picture Book Stories", url: "https://storybird.com/", description: "Create and illustrate digital stories — choose art, arrange scenes, and write narratives in a simple, visual interface similar to storyboarding." },
      { name: "Make Short Videos with a Tablet Camera", url: "", description: "Record 30-second 'movies' of play scenes or toy adventures — the earliest experience with framing, action, and visual storytelling." },
    ],
    [
      { name: "Where the Wild Things Are by Maurice Sendak", url: "", type: "book" },
      { name: "Into Film — Family Film Watching Guides", url: "https://www.intofilm.org/", type: "video" },
    ],
  ),

  s(nx(), "p43", "g3",
    "Reading and writing skills bloom — and directors must be strong storytellers in words before they can tell stories in images. Write simple stories with a clear beginning, middle, and end. Draw storyboards for a favorite story — 5-6 panels showing the key moments. Watch behind-the-scenes content for family movies — seeing how a film is made is often the spark that ignites a directing career. Talk about 'shots': close-up (showing emotion), wide shot (showing the world), and how directors choose between them. Make short stop-motion videos with toys or clay using a simple app. Lead classmates in a classroom play or skit — directing people and organizing a group toward a creative vision is the director's job in a nutshell.",
    ["Writing (Story Structure)", "Reading Comprehension (Visual Literacy)", "Art (Drawing & Composition)", "Collaboration & Leadership"],
    [
      { name: "Stop Motion Studio App", url: "https://www.cateater.com/", description: "Easy stop-motion animation app — children create movies frame by frame, learning patience, visual storytelling, and basic editing." },
      { name: "Direct a Classroom Skit or Play", url: "", description: "Organize classmates to perform a short play — practice the core directing skills of casting, staging, and guiding performances toward a unified vision." },
    ],
    [
      { name: "The Adventures of Beekle: The Unimaginary Friend by Dan Santat", url: "", type: "book" },
      { name: "BrainPOP Jr.: Storytelling", url: "https://jr.brainpop.com/", type: "video" },
    ],
  ),

  s(nx(), "p43", "g4",
    "Expand storytelling across media — writing, drawing, and simple video. Learn about story structure in more depth: the hero's journey, conflict and resolution, character arcs. Directors understand these patterns instinctively. Practice visual composition: the rule of thirds, leading lines, and how framing affects emotion. Photograph the same subject from different angles and discuss how each feels. Write scripts for short skits with dialogue. Study great animated films — Pixar movies are masterclasses in visual storytelling and emotional structure. Start a 'director's notebook' — sketch shots, write scene ideas, collect images that inspire. Every director develops their own visual language over time, and the notebook is where it begins.",
    ["Writing (Scriptwriting Basics)", "Art (Visual Composition)", "Reading (Film Analysis Basics)", "Technology (Photography)"],
    [
      { name: "Pixar in a Box — Khan Academy", url: "https://www.khanacademy.org/computing/pixar", description: "Free Pixar-produced lessons on how animated films are made — storytelling, color, patterns, effects, and the math behind the magic." },
      { name: "Photography Project — Same Subject, Different Angles", url: "", description: "Photograph one object or scene from 10+ angles — learn how camera position changes the story and emotion of an image, the director's most basic tool." },
    ],
    [
      { name: "The Art of Pixar by Amid Amidi", url: "", type: "book" },
      { name: "Crash Course: Film History", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo", type: "video" },
    ],
  ),

  s(nx(), "p43", "g5",
    "Create longer, more complex stories with multiple characters. Write a 3-page script with dialogue, scene descriptions, and character notes. Learn about different film genres — comedy, drama, adventure, documentary — and what makes each work. Study how music affects the emotional impact of a scene. Watch a scene from a movie with the sound off, then with the sound on — notice how music and sound effects change everything. Continue photography — practice composition with intention. Organize a group video project: write, direct, and edit a 3-minute short film using a phone or tablet. Directing is a team sport — the director communicates a vision and inspires others to bring their best work. Start learning to give clear, encouraging direction.",
    ["Writing (Scriptwriting)", "Music & Sound Awareness", "Media Studies (Genre)", "Technology (Basic Video Editing)", "Team Leadership"],
    [
      { name: "Adobe Premiere Rush / iMovie — Beginner Video Editing", url: "https://www.adobe.com/products/premiere-rush.html", description: "Simple video editing tools for beginners — learn to cut scenes, add music, and create a final edit, the director's primary technical skill." },
      { name: "Direct a 3-Minute Short Film", url: "", description: "Write, cast, shoot, and edit a complete short film — the most important step in becoming a director is simply making your first movie." },
    ],
    [
      { name: "Save the Cat! Writes a Novel by Jessica Brody", url: "", type: "book" },
      { name: "Khan Academy: Storytelling (Pixar in a Box)", url: "https://www.khanacademy.org/computing/pixar/storytelling", type: "course" },
    ],
  ),

  s(nx(), "p43", "g6",
    "Deepen understanding of visual storytelling. Study how directors use color, lighting, and camera movement to convey meaning. Watch classic films with a critical eye — take notes on shots, pacing, and how scenes transition. Learn about the filmmaking roles: director, cinematographer, editor, production designer, sound designer — understanding what each does makes you a better collaborator. Write longer scripts with character arcs and subplots. Continue making short films — each one teaches something new. Study photography more seriously — strong visual composition is the director's most transferable skill across genres and budgets. Read interviews with directors about their process. The path from 'I want to make movies' to actually making them starts with curiosity about every aspect of the craft.",
    ["English (Critical Analysis)", "Art (Color & Composition)", "Technology (Intermediate Editing)", "Scriptwriting", "Photography / Visual Design"],
    [
      { name: "StudioBinder — Filmmaking Resources & Blog", url: "https://www.studiobinder.com/", description: "Comprehensive free filmmaking education — articles, videos, and templates covering every aspect of directing, from shot lists to script breakdowns." },
      { name: "Make a 5-Minute Short Film with a Crew", url: "", description: "Recruit friends or family as cast and crew — give each person a specific role (camera, sound, art) and experience what it means to lead a film production." },
    ],
    [
      { name: "Making Movies by Sidney Lumet", url: "", type: "book" },
      { name: "Every Frame a Painting — YouTube Channel", url: "https://www.youtube.com/@everyframeapainting", type: "video" },
    ],
  ),

  s(nx(), "p43", "g7",
    "Film directing requires broad cultural knowledge — read widely, watch widely, and study history and social studies. The best directors understand the human condition deeply. Write more ambitious scripts with themes and subtext. Study film history: silent era, golden age of Hollywood, international cinema — knowing what came before is essential for innovation. Learn about the business of filmmaking: budgets, scheduling, distribution — directors who understand the business get more opportunities. Continue making short films — participate in youth film festivals if available. Study acting — take a drama class to understand what actors need from a director. The director-actor relationship is the heart of narrative filmmaking. Great directors give actors the safety to be vulnerable and the guidance to hit the right notes.",
    ["English (Literary & Film Analysis)", "History / Social Studies", "Art (Film History)", "Drama / Acting", "Writing (Screenwriting)"],
    [
      { name: "YouTube Creator Academy — Free Filmmaking Courses", url: "https://creatoracademy.youtube.com/", description: "Google's free filmmaking education — learn production, storytelling, and audience engagement from creators and industry professionals." },
      { name: "Youth Film Festival Submission", url: "https://www.intofilm.org/", description: "Submit your short films to youth film festivals — get feedback from professionals, see your work on a big screen, and meet other young filmmakers." },
    ],
    [
      { name: "In the Blink of an Eye by Walter Murch", url: "", type: "book" },
      { name: "The Story of Film: An Odyssey (Documentary Series)", url: "https://www.bbc.co.uk/", type: "video" },
    ],
  ),

  s(nx(), "p43", "g8",
    "Take advanced English and any media, film, or video production courses offered. Study screenwriting structure — the three-act structure, save the cat beat sheet, and sequence approach are the architectural plans directors use. Deepen visual knowledge: study great cinematographers and how they use light, shadow, and color. Learn about editing — rhythm, pacing, and how cutting shapes emotion. Directing is making thousands of decisions, and understanding every department helps you make the right ones. Continue making short films with increasing ambition. Start a film club at school if one doesn't exist. Watch films from different countries and eras — broaden your visual vocabulary. Film is a universal language, and the directors who speak it most fluently draw from the entire history of cinema.",
    ["English (Film & Literary Analysis)", "Media Studies / Film Class", "Art / Photography", "Technology (Advanced Editing)", "World History / Culture"],
    [
      { name: "No Film School — Independent Filmmaking Community", url: "https://nofilmschool.com/", description: "The leading online community for independent filmmakers — articles, tutorials, forums, and a supportive community of aspiring directors worldwide." },
      { name: "Start a Film Club at School", url: "", description: "Create a space where students watch and discuss films, share their work, and collaborate on projects — build the creative community every director needs." },
    ],
    [
      { name: "On Directing Film by David Mamet", url: "", type: "book" },
      { name: "Crash Course: Film Criticism", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo", type: "video" },
    ],
  ),

  s(nx(), "p43", "g9",
    "Take English, drama, art, and any media/film courses available. The most important thing you can do is make films — quantity leads to quality. Direct a new short film every semester. Study acting seriously — take drama classes and perform in school plays. Understanding the actor's process is the director's superpower. Learn about cinematography: focal lengths, aperture, depth of field, and camera movement — you need to speak the language of the camera department. Study screenwriting: write a feature-length script even if it's not good yet — finishing a feature script teaches you structure. Watch one classic film per week and write a one-page analysis. Directors are film watchers first — your taste and visual memory are shaped by what you consume.",
    ["English (Screenwriting & Analysis)", "Drama / Theater", "Art (Visual Design)", "Photography / Cinematography Basics", "Media Production"],
    [
      { name: "MasterClass — Directing Courses (Spike Lee, Scorsese, etc.)", url: "https://www.masterclass.com/", description: "Learn directing from legendary filmmakers — masterclasses on storytelling, working with actors, visual style, and the craft and business of filmmaking." },
      { name: "Direct a Short Film Every Semester", url: "", description: "Commit to completing one short film per semester — set deadlines, work with constraints, and build a body of work that shows growth and vision." },
    ],
    [
      { name: "Screenplay by Syd Field", url: "", type: "book" },
      { name: "Coursera: The Language of Hollywood (Wesleyan)", url: "https://www.coursera.org/", type: "course" },
    ],
  ),

  s(nx(), "p43", "g10",
    "Take English, drama, art, and media production at the highest level available. Start building a portfolio — a YouTube or Vimeo channel with your short films. The portfolio matters more than grades for film school applications. Study great screenplays — read scripts for your favorite films and notice how they're written differently from novels. Learn about film production: crew roles, scheduling, shot lists, and call sheets — directing requires organization as much as creativity. Attend a filmmaking summer camp or workshop if possible. Start entering youth film competitions. Consider whether film school is right for you — many great directors didn't go (Tarantino, Christopher Nolan studied literature, Kathryn Bigelow studied painting), but many did (Spielberg, Scorsese, Chloé Zhao). There is no single path.",
    ["English (Advanced Writing)", "Drama / Theater (Advanced)", "Media / Film Production", "Art / Photography", "Business / Marketing Basics"],
    [
      { name: "New York Film Academy — Summer Filmmaking Camps", url: "https://www.nyfa.edu/", description: "Intensive summer programs for high school students — hands-on filmmaking experience with professional equipment and instructor guidance." },
      { name: "Build a Film Portfolio on YouTube / Vimeo", url: "https://vimeo.com/", description: "Create a public channel with your best short films — film schools and future collaborators will judge you by what you've made, not your grades." },
    ],
    [
      { name: "Story by Robert McKee", url: "", type: "book" },
      { name: "Indie Film Hustle Podcast", url: "https://indiefilmhustle.com/", type: "article" },
    ],
  ),

  s(nx(), "p43", "g11",
    "Take AP English Literature, drama, art, and any film/media courses. Film directors are storytellers first — literary analysis teaches you how stories work at the deepest level. Study art history — composition, color theory, and visual symbolism are as important as narrative craft. Continue making short films and building your portfolio. Research film schools: top programs include USC, NYU, UCLA, AFI, Columbia, and CalArts — but many state schools have excellent film programs at lower cost. Film school is valuable for three things: access to equipment, a network of collaborators, and the credential to get industry internships. But it's expensive — $200K+ for some programs. Many successful directors skip film school, start as production assistants, and work their way up. Both paths demand relentless drive and a body of work that proves your vision.",
    ["AP English Literature", "Drama / Theater", "Art History", "Media Production", "Psychology / Sociology"],
    [
      { name: "AFI — American Film Institute: Student Resources", url: "https://www.afi.com/", description: "Explore AFI's educational programs, watchlists, and filmmaker resources — the AFI Conservatory is one of the most prestigious film schools in the world." },
      { name: "Production Assistant (PA) — First Industry Job", url: "", description: "Work as a PA on a local film set, commercial shoot, or student film — this is how most directors start, learning every department from the ground up." },
    ],
    [
      { name: "Directing Actors by Judith Weston", url: "", type: "book" },
      { name: "American Film Institute — AFI Top 100 Films List", url: "https://www.afi.com/afis-100-years-100-movies/", type: "article" },
    ],
  ),

  s(nx(), "p43", "g12",
    "Take AP English, AP Art History, and drama. Your portfolio is your application — whether to film school or to entry-level industry jobs. Make your best short film yet — something personal that only you could make. Research film schools deeply: visit campuses, talk to current students and alumni, and understand the real costs and career outcomes. Film school is not required — but if you go, choose based on the faculty (working professionals you want to learn from), the alumni network, and hands-on production opportunities. If skipping film school, move to a production hub (Los Angeles, Atlanta, New York, London) and start working as a PA. Read director biographies — nearly every famous director's path is unique. The common thread: they made films, constantly, against all obstacles.",
    ["AP English Literature", "AP Art History", "Drama / Theater", "Media Production", "Film Portfolio Development"],
    [
      { name: "Sundance Institute — Ignite Fellowship", url: "https://www.sundance.org/", description: "Year-long fellowship for emerging filmmakers aged 18-25 — mentorship, professional development, and a community of artists supported by the Sundance Institute." },
      { name: "Create Your Best Short Film Yet", url: "", description: "Write, direct, and edit a short film that represents your unique vision — this is the centerpiece of your portfolio for film school applications or job applications." },
    ],
    [
      { name: "Rebel Without a Crew by Robert Rodriguez", url: "", type: "book" },
      { name: "TED Talk: Your Elusive Creative Genius (Elizabeth Gilbert)", url: "https://www.ted.com/", type: "video" },
    ],
  ),

  s(nx(), "p43", "g13",
    "The college application year. If applying to film school, prepare a standout portfolio: 1-2 short films, a feature screenplay sample, and a personal statement about your artistic vision. Film schools want to see a unique voice, not technical perfection. If not applying to film school, apply to programs that will feed your craft — English, art history, theater, or communications at a university in a production city gives you access to both education and industry. Consider gap year options: intensive filmmaking workshops, working as a PA, or traveling with a camera. The director's education never stops — every film you watch, every book you read, every life experience you have feeds your ability to tell stories. The best directors are the most interesting human beings, not the most technically skilled.",
    ["AP English (Final)", "AP Art History (Final)", "Drama (Final)", "Film Portfolio (Final)", "College / Gap Year Applications"],
    [
      { name: "USC School of Cinematic Arts — Summer Program", url: "https://cinema.usc.edu/", description: "The top-ranked film school in America — explore their summer and undergraduate programs and understand what top-tier film education offers." },
      { name: "Sundance Collab — Online Filmmaking Courses", url: "https://collab.sundance.org/", description: "Online courses from the Sundance Institute on screenwriting, directing, producing, and the business of independent film — learn from working professionals." },
    ],
    [
      { name: "Adventures in the Screen Trade by William Goldman", url: "", type: "book" },
      { name: "DGA — Directors Guild of America Student Resources", url: "https://www.dga.org/", type: "article" },
    ],
  ),

  s(nx(), "p43", "g14",
    "Finalize your post-high school path. If attending film school: prepare to absorb everything — take classes in directing, screenwriting, cinematography, editing, and producing. The first year is about learning every department's language. If attending a liberal arts college: major in English, art history, theater, or a subject that fascinates you — interesting people make interesting films. If entering the industry directly: move to a production hub, get a PA job, and work on as many sets as possible. The PA-to-director path is real and well-trodden. Make a feature-length screenplay your goal this year — even if it's never produced, finishing a feature script proves you can sustain a story. Join filmmaking communities online and in person. The people you meet now will be your collaborators for decades.",
    ["Film School / Liberal Arts Prep", "Screenwriting (Feature Script)", "Film History Elective", "Art / Photography", "Industry Networking"],
    [
      { name: "DGA Training Program — Assistant Director Track", url: "https://www.dga.org/", description: "The Directors Guild of America's selective training program — a structured path into professional directing through the assistant director role." },
      { name: "Write a Feature-Length Screenplay", url: "", description: "Complete a 90-120 page screenplay — even if it's never produced, finishing a feature script is a rite of passage and the single best directing education." },
    ],
    [
      { name: "The Filmmaker's Handbook by Steven Ascher & Edward Pincus", url: "", type: "book" },
      { name: "No Film School — Indie Film Community", url: "https://nofilmschool.com/", type: "article" },
    ],
  ),

  s(nx(), "p43", "g15",
    "Path A — Film School: Major in Film Production, Directing, Cinema Studies, or related. Core courses: directing, screenwriting, cinematography, editing, sound design, and film history. Make multiple short films — each one better than the last. Crew on classmates' films in every role — understanding every department makes you a better director. Complete internships at production companies, studios, or with independent producers. Build a network — your classmates will hire you (or you'll hire them) for decades. Path B — No Film School: Major in English, art history, theater, or any subject that deepens your understanding of the human condition. Make films outside of class. Work PA jobs during summers. Move to a production hub after graduation. Both paths converge at the same point: you need a body of work that proves you can direct.",
    ["Directing & Visual Storytelling", "Screenwriting (Feature & Short)", "Cinematography & Lighting", "Film Editing", "Film History & Theory"],
    [
      { name: "Sundance Institute — Labs & Fellowships", url: "https://www.sundance.org/programs/", description: "Apply for Sundance Labs — the most prestigious development programs for emerging directors, with mentorship from the world's leading filmmakers." },
      { name: "Production Internship — Studio / Production Company", url: "https://www.entertainmentcareers.net/", description: "Intern at a production company, studio, or network — learn how films are developed, financed, and produced from the inside." },
    ],
    [
      { name: "Shot by Shot: A Practical Guide to Filmmaking by John Cantine", url: "", type: "book" },
      { name: "MasterClass: Directing (Ron Howard, Jodie Foster, etc.)", url: "https://www.masterclass.com/", type: "course" },
    ],
  ),

  s(nx(), "p43", "g16",
    "Master of Fine Arts (MFA) in Film Directing — 2-3 years at a top film school (AFI, USC, NYU, Columbia, UCLA). The MFA is a terminal degree, focused entirely on developing your voice as a director. Make a thesis film — this is your calling card for the industry. MFA programs provide: dedicated mentorship from working directors, professional-grade equipment and crews, and the credential to teach at the university level. Alternatively, skip the MFA and continue working in the industry — directing commercials, music videos, or independent shorts while developing feature scripts. Many directors get their break from a short film that goes viral at festivals. The MFA vs. industry path is a personal choice — neither guarantees success and both have produced legendary directors. What matters is the relentless drive to tell stories your way.",
    ["Advanced Directing", "Thesis Film Production", "Screenwriting (Advanced)", "Film Business & Producing", "Cinematography & Production Design"],
    [
      { name: "AFI Conservatory — MFA in Directing", url: "https://conservatory.afi.com/", description: "The American Film Institute's legendary directing program — alumni include David Lynch, Terrence Malick, and dozens of the industry's most respected filmmakers." },
      { name: "Film Festival Circuit — Submit Your Thesis Film", url: "https://filmfreeway.com/", description: "Submit your best work to Sundance, SXSW, Tribeca, Cannes, and other major festivals — a festival premiere can launch a directing career." },
    ],
    [
      { name: "Hitchcock/Truffaut by François Truffaut", url: "", type: "book" },
      { name: "The Director's Cut — Podcast (DGA)", url: "https://www.dga.org/", type: "article" },
    ],
  ),

  s(nx(), "p43", "g17",
    "There is no single path to becoming a working director. Some direct their debut feature right out of film school. Others spend a decade directing TV episodes, commercials, or music videos before getting a shot at a feature. A few self-finance a micro-budget indie that changes everything. Some pivot from acting, writing, or producing. Career pinnacles: directing a studio feature film, winning at Cannes or Sundance, showrunning a prestige TV series, or building a production company that tells stories on your own terms. The film industry is brutally competitive and deeply rewarding. The directors who succeed combine artistic vision, technical mastery, people skills, business savvy, and — above all — an unstoppable need to tell stories. 'The most important thing is to begin.' Every director you admire started by making something with whatever they had.",
    ["Feature Film Direction", "Television Directing", "Independent Film Production", "Creative Leadership & Vision", "Film Business & Distribution"],
    [
      { name: "DGA Membership — Directors Guild of America", url: "https://www.dga.org/", description: "Join the Directors Guild — the union that represents film and TV directors, protects creative rights, and provides health and pension benefits." },
      { name: "Sundance Film Festival — Feature Competition", url: "https://www.sundance.org/festivals/sundance-film-festival/", description: "The premier launching pad for independent filmmakers — a Sundance premiere can transform a director's career and open doors across the industry." },
    ],
    [
      { name: "A Director Prepares by Anne Bogart", url: "", type: "book" },
      { name: "DGA Quarterly — The Craft of Directing", url: "https://www.dga.org/Craft/", type: "article" },
    ],
  ),



  // ========================================================================
  // p44 — OCCUPATIONAL THERAPIST 🤲
  // ========================================================================

  s(nx(), "p44", "g1",
    "Occupational therapy helps people of all ages do the things they want and need to do — and it starts with play! At this age, children develop fine motor skills through drawing, cutting, and manipulating small objects. Encourage sensory play — play dough, sand, water, and finger painting build the tactile processing systems OTs work with daily. Practice self-care routines like dressing, washing hands, and feeding — these 'occupations' of childhood are exactly what pediatric OTs help children master. Celebrate effort over perfection and notice what each child finds challenging or joyful. The OT's superpower is seeing the person behind the task — and that instinct begins with observing children learn through play.",
    ["Fine Motor Skills (Drawing, Cutting)", "Sensory Exploration", "Self-Care & Independence", "Social Play & Sharing"],
    [
      { name: "Play-Doh — Sensory & Fine Motor Play", url: "https://playdoh.hasbro.com/", description: "Classic sensory play that builds hand strength, dexterity, and creativity — the exact skills pediatric OTs target in early intervention sessions." },
      { name: "Occupational Therapy Home Activities (AOTA Parent Resources)", url: "https://www.aota.org/about-occupational-therapy/for-parents", description: "The American Occupational Therapy Association's parent guide — learn how everyday play builds the skills OTs help children develop." },
    ],
    [
      { name: "The Out-of-Sync Child by Carol Stock Kranowitz", url: "", type: "book" },
      { name: "Sesame Street: Morning Routines (PBS Kids)", url: "https://pbskids.org/sesame/", type: "video" },
    ],
  ),

  s(nx(), "p44", "g2",
    "Fine motor skills take center stage — holding a pencil correctly, cutting along lines, and buttoning a coat are all 'occupations' a kindergartener needs to master. Practice activities that build hand strength: squeezing clothespins, stringing beads, and using tongs to pick up small objects. Notice and support sensory preferences — some children seek movement (spinning, swinging), others avoid certain textures or sounds. OTs are experts at understanding sensory processing and designing environments where every child can thrive. Encourage independence in self-care tasks, even when it's messy and slow. The kindergarten classroom is rich with occupational challenges — from sitting still at circle time to opening lunch containers — and OTs help children conquer them all.",
    ["Fine Motor Skills (Pencil Grip, Scissor Skills)", "Sensory Processing Awareness", "Self-Regulation & Body Awareness", "Social Skills (Turn-Taking, Listening)"],
    [
      { name: "OT Toolbox — Fine Motor Activities for Kids", url: "https://www.theottoolbox.com/", description: "Free OT-designed activities for building fine motor skills — created by occupational therapists for parents and teachers to use at home or in the classroom." },
      { name: "Therapy Shoppe — Sensory Toys & Tools", url: "https://www.therapyshoppe.com/", description: "Browse sensory tools used by OTs — fidget toys, weighted lap pads, and tactile materials that support sensory processing development." },
    ],
    [
      { name: "Amazing You! Getting Smart About Your Private Parts by Gail Saltz", url: "", type: "book" },
      { name: "Cosmic Kids Yoga — Mindfulness & Movement (YouTube)", url: "https://www.youtube.com/@CosmicKidsYoga", type: "video" },
    ],
  ),

  s(nx(), "p44", "g3",
    "Handwriting becomes a major 'occupation' — and OTs are the experts who help children master it. Practice letter formation with multisensory approaches: write in sand, shaving cream, or with chalk on the sidewalk. The more senses involved, the stronger the motor learning. Build core strength and shoulder stability through animal walks, wheelbarrow walks, and playground climbing — strong proximal muscles support fine motor control. Continue practicing self-care routines independently and start learning about emotions and self-regulation. OTs work with children who have autism, ADHD, sensory processing disorder, and physical disabilities — learning to appreciate different ways of being in the world is the first step toward becoming a compassionate, effective therapist.",
    ["Handwriting & Letter Formation", "Gross Motor Skills (Core Strength)", "Emotional Regulation", "Reading Comprehension"],
    [
      { name: "Handwriting Without Tears — Learning Without Tears", url: "https://www.lwtears.com/", description: "The gold-standard handwriting curriculum developed by an OT — multisensory, developmentally appropriate letter formation that OTs use in schools nationwide." },
      { name: "Local Playground — Build Gross Motor Skills", url: "", description: "Regular playground time on monkey bars, swings, and climbing structures builds the core strength and upper body stability essential for fine motor control." },
    ],
    [
      { name: "The Zones of Regulation by Leah Kuypers (OT)", url: "", type: "book" },
      { name: "GoNoodle — Movement & Mindfulness Videos", url: "https://www.gonoodle.com/", type: "video" },
    ],
  ),

  s(nx(), "p44", "g4",
    "Occupational therapists understand the body — and second grade is a great time to start learning basic anatomy. Study the skeletal and muscular systems: how bones and muscles work together to produce movement. Practice typing — keyboarding is a modern fine motor skill and many OTs now support students with technology access. Notice how everyday objects are designed — the handle on a spoon, the grip on a pencil, the shape of scissors. OTs are experts in adapting tools and environments so everyone can participate. Read stories about people with disabilities doing amazing things — representation builds empathy and expands the imagination. The OT's job is creative problem-solving: 'What does this person want to do, and what's getting in the way?'",
    ["Science (Human Body — Bones & Muscles)", "Keyboarding / Typing Skills", "Design Thinking & Problem Solving", "Writing (Journaling & Reflection)"],
    [
      { name: "TypingClub — Learn Touch Typing", url: "https://www.typingclub.com/", description: "Free typing instruction that builds keyboarding fluency — an essential fine motor and technology access skill that OTs increasingly support in schools." },
      { name: "KidzType — Typing Games for Kids", url: "https://www.kidztype.com/", description: "Game-based typing practice that makes fine motor skill development fun — type to shoot asteroids, race cars, and defeat monsters." },
    ],
    [
      { name: "The Reason I Jump by Naoki Higashida", url: "", type: "book" },
      { name: "Mystery Science: Why Do Our Fingers Wrinkle in Water?", url: "https://mysteryscience.com/", type: "video" },
    ],
  ),

  s(nx(), "p44", "g5",
    "Deepen understanding of human development — how do children grow, learn, and acquire skills? OTs study typical development so they can recognize and support atypical development. Learn about the sensory systems beyond the famous five: proprioception (body awareness), vestibular (balance and movement), and interoception (internal body signals like hunger and thirst). These 'hidden senses' are central to occupational therapy practice. Practice teaching a skill to a younger child — breaking down a task into steps, giving clear instructions, and celebrating progress is exactly what OTs do every day. Keep a journal about activities you find calming, energizing, or challenging — self-awareness is the foundation for understanding others. Occupational therapy is the art and science of enabling meaningful activity across the lifespan.",
    ["Science (Human Development)", "Writing (Instructional Writing)", "Psychology (Intro to Sensory Systems)", "Math (Measurement & Data)"],
    [
      { name: "STAR Institute — Sensory Processing Resources", url: "https://sensoryhealth.org/", description: "Leading research and education center for sensory processing — learn about the hidden senses and how they affect learning, behavior, and daily life." },
      { name: "Teach a Skill to a Younger Sibling or Friend", url: "", description: "Break down a task (tying shoes, making a sandwich) into steps and guide a younger child through it — this is task analysis, a core OT clinical skill." },
    ],
    [
      { name: "The Body Keeps the Score (Youth Adaptation Concepts)", url: "", type: "book" },
      { name: "Khan Academy: Human Body Systems", url: "https://www.khanacademy.org/science/health-and-medicine", type: "course" },
    ],
  ),

  s(nx(), "p44", "g6",
    "Study anatomy more deeply — bones, muscles, joints, and how they create movement. OTs need to understand biomechanics to help people recover from injuries, surgeries, and strokes. Learn about the nervous system — the brain and spinal cord are command central for all human occupation. Practice empathy by volunteering with classmates who have different abilities — notice what's hard for them and brainstorm creative solutions. OTs are equal parts scientist, teacher, and cheerleader. Read about adaptive sports and assistive technology — wheelchairs, prosthetics, communication devices, and environmental controls. The human ability to adapt and overcome challenges is extraordinary, and OTs are the professionals who make adaptation possible.",
    ["Science (Anatomy & Physiology)", "Health Education", "Empathy & Peer Support", "Technology (Assistive Tech Intro)"],
    [
      { name: "Visible Body — 3D Human Anatomy Atlas", url: "https://www.visiblebody.com/", description: "Interactive 3D models of the skeletal, muscular, and nervous systems — explore the anatomy OTs work with every day in vivid detail." },
      { name: "Volunteer as a Peer Buddy or Inclusion Support", url: "", description: "Support classmates with disabilities in the classroom or on the playground — build the empathy and creative problem-solving mindset at the heart of OT practice." },
    ],
    [
      { name: "Wonder by R.J. Palacio", url: "", type: "book" },
      { name: "TED-Ed: How Do Nerves Work?", url: "https://ed.ted.com/", type: "video" },
    ],
  ),

  s(nx(), "p44", "g7",
    "Deepen anatomy knowledge — study the hand in particular: 27 bones, 34 muscles, and over 100 ligaments working together in the most dexterous structure in the human body. Hand therapy is a major OT specialty. Learn about different types of disabilities — physical, developmental, intellectual, and mental health conditions — and how they affect daily life. OTs work across all of these. Continue developing empathy and communication skills through volunteering or mentoring. Learn about the OT career path: a master's degree (MOT) or clinical doctorate (OTD) is required, preceded by a bachelor's degree with prerequisites in anatomy, physiology, psychology, and sociology. The field is projected to grow 14% over the next decade with a median salary of $93,000+, reflecting the enormous value OTs bring to healthcare.",
    ["Life Science (Advanced Anatomy)", "Social Studies (Disability Rights)", "English (Research Writing)", "Psychology (Child Development)"],
    [
      { name: "AOTA — American Occupational Therapy Association: Student Resources", url: "https://www.aota.org/career/students", description: "The national professional organization — explore OT career paths, accredited programs, and what being an OT really means across different practice settings." },
      { name: "Volunteer at a Special Needs Camp or Program", url: "https://www.specialolympics.org/", description: "Summer camps and programs for children with disabilities need volunteers — hands-on experience with diverse populations is outstanding preparation for a career in OT." },
    ],
    [
      { name: "Out of My Mind by Sharon M. Draper", url: "", type: "book" },
      { name: "Crash Course: Anatomy & Physiology", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtOAKed_MxxWBNaPno5h3Zs8", type: "video" },
    ],
  ),

  s(nx(), "p44", "g8",
    "Take the most advanced science courses available — biology and anatomy are essential prerequisites for OT graduate programs. Study psychology in more depth — OTs work extensively with mental health conditions, and understanding human behavior, motivation, and cognition is foundational. Learn about kinesiology — the study of human movement. OTs analyze how people move during daily activities and design interventions to improve function. Practice observational skills: watch someone perform a task (making a sandwich, typing, getting dressed) and note every movement, cognitive decision, and environmental factor involved. This is activity analysis — the OT's signature clinical skill. Explore OT specialties: pediatrics, hand therapy, neurorehabilitation, mental health, geriatrics, and ergonomics. Few healthcare careers offer such extraordinary variety.",
    ["Biology / Anatomy (Advanced)", "Psychology (Developmental)", "Health Science", "Kinesiology / Movement Science", "Statistics"],
    [
      { name: "Explore OT Specialties — AOTA Practice Areas", url: "https://www.aota.org/practice", description: "Discover OT specialties from pediatrics to hand therapy to mental health — see real practice guidelines, research, and career paths in each area." },
      { name: "Job Shadow an Occupational Therapist", url: "", description: "Contact local hospitals, schools, or outpatient clinics — many OTs welcome students who want to observe sessions and understand what the profession looks like day-to-day." },
    ],
    [
      { name: "The Man Who Mistook His Wife for a Hat by Oliver Sacks", url: "", type: "book" },
      { name: "TED Talk: My Stroke of Insight (Jill Bolte Taylor)", url: "https://www.ted.com/talks/jill_bolte_taylor_my_stroke_of_insight", type: "video" },
    ],
  ),

  s(nx(), "p44", "g9",
    "Take biology (honors/AP if available) and start exploring psychology and sociology — OT is rooted in understanding people as biopsychosocial beings. Study the brain in more depth: neuroplasticity — the brain's ability to rewire itself — is the scientific foundation of OT intervention. Learn about common conditions OTs treat: stroke, traumatic brain injury, cerebral palsy, autism spectrum disorder, arthritis, and mental health conditions. Practice activity analysis with more complex tasks — cooking a meal, driving a car, managing a schedule. Notice how physical, cognitive, and emotional factors all interact. Consider volunteering at a nursing home, hospital, or special education classroom. OTs work across the entire lifespan from premature infants in the NICU to elders in hospice — find the population that calls to you.",
    ["Biology (Honors/AP)", "Psychology", "Sociology", "Health Sciences", "English (Analytical Writing)"],
    [
      { name: "AOTA Choosing OT — A Career for the Future", url: "https://www.aota.org/career/becoming-an-ot", description: "Everything you need to know about becoming an OT — admissions requirements, program types (MOT vs. OTD), and steps to certification and licensure." },
      { name: "Volunteer at a Nursing Home or Rehabilitation Center", url: "", description: "Spend time with elderly residents and observe how OTs help people regain independence after illness or injury — geriatric OT is one of the fastest-growing specialties." },
    ],
    [
      { name: "NeuroTribes by Steve Silberman", url: "", type: "book" },
      { name: "Coursera: The Clinical Psychology of Children and Young People (University of Edinburgh)", url: "https://www.coursera.org/", type: "course" },
    ],
  ),

  s(nx(), "p44", "g10",
    "Take the most rigorous science available — AP/honors biology, chemistry, and anatomy if offered. Deepen psychology knowledge: study developmental psychology across the lifespan and abnormal psychology. OTs work with mental health conditions including depression, anxiety, PTSD, and schizophrenia. Learn about biomechanics — levers, forces, and how the human body applies mechanical principles to movement. Practice research skills: learn to read scientific papers and evaluate evidence. OT is an evidence-based practice — every intervention must be supported by research. Explore undergraduate programs: strong pre-OT majors include kinesiology, psychology, biology, and health sciences. Look for programs with dedicated pre-OT tracks and strong anatomy lab facilities. Strong grades in science are essential — OT graduate programs are competitive.",
    ["AP Biology", "Chemistry", "Psychology (Developmental & Abnormal)", "Anatomy / Kinesiology", "Statistics"],
    [
      { name: "AOTA OT School Admissions Guide", url: "https://www.aota.org/", description: "Navigate OT graduate school admissions — prerequisites, observation hours, GRE requirements, and how to build a competitive application to MOT or OTD programs." },
      { name: "Undergraduate Research in Kinesiology or Psychology", url: "", description: "Contact professors at local universities about assisting with human movement or psychology research — lab experience distinguishes OT school applicants." },
    ],
    [
      { name: "The Brain That Changes Itself by Norman Doidge", url: "", type: "book" },
      { name: "edX: Fundamentals of Neuroscience (Harvard)", url: "https://www.edx.org/", type: "course" },
    ],
  ),

  s(nx(), "p44", "g11",
    "Take AP Biology, AP Psychology, and AP Statistics. Statistics is critical — OTs use standardized assessments, interpret outcome measures, and evaluate treatment effectiveness using statistical methods. Deepen understanding of neuroanatomy and neurorehabilitation — stroke, TBI, spinal cord injury, and neurodegenerative diseases. Research OT programs: the entry-level degree is either a Master of Occupational Therapy (MOT, 2-2.5 years) or a Clinical Doctorate in Occupational Therapy (OTD, 3 years). The OTD includes additional coursework in leadership, advocacy, and program development. Top programs include University of Southern California, Washington University in St. Louis, Boston University, and University of Pittsburgh. Start accumulating observation hours — most OT programs require 40+ hours of documented OT observation in at least two practice settings.",
    ["AP Biology", "AP Psychology", "AP Statistics", "Anatomy & Physiology", "English (Technical Writing)"],
    [
      { name: "NBCOT — National Board for Certification in OT", url: "https://www.nbcot.org/", description: "The certification body for OTs — understand the exam, certification requirements, and what board certification means for professional practice." },
      { name: "Complete OT Observation Hours (Multiple Settings)", url: "", description: "Document 40+ hours observing OTs in at least two settings (hospital and school, for example) — this is a standard requirement for OT graduate program applications." },
    ],
    [
      { name: "Occupational Therapy for Physical Dysfunction by Mary Vining Radomski", url: "", type: "book" },
      { name: "AOTA Podcast — OT Conversations That Matter", url: "https://www.aota.org/publications/podcasts", type: "article" },
    ],
  ),

  s(nx(), "p44", "g12",
    "Take AP Biology, AP Psychology, AP Statistics, and anatomy. Prepare for the SAT/ACT with a strong science focus. Research undergraduate programs carefully — a bachelor's degree in kinesiology, psychology, biology, or health sciences with OT prerequisites is the path. Look for universities that offer a combined BS/MS in OT (5-year accelerated programs) — these are competitive but save time and money. Continue accumulating OT observation hours across diverse settings — pediatrics, physical rehabilitation, mental health, and geriatrics. Consider becoming a rehabilitation aide or certified nursing assistant (CNA) over the summer — hands-on patient care experience is invaluable. Write application essays that connect personal experiences to the core values of OT: client-centered care, meaningful occupation, and evidence-based practice.",
    ["AP Biology (Exam)", "AP Psychology (Exam)", "AP Statistics (Exam)", "Anatomy / Physiology", "College Application Essays"],
    [
      { name: "ACOTE — Accreditation Council for OT Education", url: "https://acoteonline.org/", description: "The official accrediting body for OT programs — verify that programs you're considering are accredited, which is required for NBCOT certification." },
      { name: "Summer Job as a Rehab Aide or CNA", url: "", description: "Work in direct patient care — CNAs and rehab aides gain hands-on experience with the patients OTs serve and develop clinical skills that shine on applications." },
    ],
    [
      { name: "Being Mortal by Atul Gawande", url: "", type: "book" },
      { name: "Coursera: Medical Neuroscience (Duke)", url: "https://www.coursera.org/", type: "course" },
    ],
  ),

  s(nx(), "p44", "g13",
    "The critical college application year. Complete AP exams with strong scores — OT programs look at science GPA closely. Polish personal statements — tell a story about why you want to help people engage in the occupations that give their lives meaning. Apply to universities with strong pre-OT tracks: the University of Southern California (#1 OT program nationally), Boston University, Washington University in St. Louis, University of Pittsburgh, and University of Illinois at Chicago. Also consider affordable state schools with strong health science programs — your undergraduate GPA and experiences matter more than the name on the diploma. Continue OT observation and volunteer work — depth and consistency demonstrate genuine commitment. Research the MOT vs. OTD decision — the profession is moving toward the OTD as the entry-level degree, but the MOT remains a valid path to certification.",
    ["AP Biology (Final)", "AP Psychology (Final)", "AP Statistics (Final)", "AP English / Literature", "College Applications & Essays"],
    [
      { name: "USC Chan Division of Occupational Science and OT", url: "https://chan.usc.edu/", description: "The #1 ranked OT program in the nation — explore their undergraduate minor in occupational science and direct-entry OTD pathways for exceptional students." },
      { name: "OT Observation — Accumulate Hours Across Settings", url: "", description: "Continue documenting OT observation hours (aim for 60+) across pediatrics, physical rehab, and mental health — diversity of settings strengthens graduate applications." },
    ],
    [
      { name: "Willard and Spackman's Occupational Therapy (Selected Chapters)", url: "", type: "book" },
      { name: "OT Potential — Evidence-Based Practice Blog", url: "https://otpotential.com/", type: "article" },
    ],
  ),

  s(nx(), "p44", "g14",
    "Finalize college decisions and prepare for the undergraduate journey. If you've been accepted to a pre-OT program, review the curriculum — typical prerequisites include anatomy & physiology (with lab), psychology (general, abnormal, and developmental), sociology/anthropology, statistics, and medical terminology. Join the Student Occupational Therapy Association (SOTA) on your campus as soon as possible. Consider working part-time as a rehab aide, behavior therapist (ABA), or special education paraprofessional during college. Start building relationships with professors early — strong letters of recommendation are essential for OT graduate school. The undergraduate years are also for becoming a well-rounded, empathetic human being — travel, read widely, volunteer, and develop interests outside of healthcare. The best OTs bring rich life experience to their practice.",
    ["Anatomy & Physiology (Prep)", "Psychology Electives", "Sociology / Anthropology", "Medical Terminology", "Statistics"],
    [
      { name: "SOTA — Student Occupational Therapy Association", url: "https://www.aota.org/", description: "Join your university's pre-OT student organization — network with peers, meet OT program faculty, and access mentorship and application preparation resources." },
      { name: "Work as a Behavior Therapist (ABA) or Rehab Aide", url: "", description: "Part-time work providing ABA therapy for children with autism or working as a rehab aide builds exceptional clinical experience for OT graduate applications." },
    ],
    [
      { name: "The Diving Bell and the Butterfly by Jean-Dominique Bauby", url: "", type: "book" },
      { name: "Khan Academy: MCAT / Health Sciences", url: "https://www.khanacademy.org/", type: "course" },
    ],
  ),

  s(nx(), "p44", "g15",
    "Major in kinesiology, psychology, biology, health sciences, or occupational science. Complete all OT graduate program prerequisites: anatomy & physiology with lab (two semesters), psychology (general, abnormal, developmental), sociology or anthropology, statistics, and medical terminology. Some programs also require physics and a hands-on art/ craft course — OT has roots in the arts and crafts movement. Maintain a strong GPA (3.5+) — OT graduate programs are competitive. Complete 40-100+ hours of OT observation across multiple practice settings and populations. Get involved in research — assist a professor studying rehabilitation, human movement, or disability. Join SOTA and take on leadership roles. Apply to OT programs through OTCAS (the centralized application service). Prepare for the GRE even if not all programs require it. The MOT/OTD application cycle requires planning and the ability to articulate your vision of occupational therapy.",
    ["Anatomy & Physiology (with Lab)", "Developmental & Abnormal Psychology", "Kinesiology / Biomechanics", "Statistics", "Clinical Observation"],
    [
      { name: "OTCAS — Occupational Therapy Centralized Application Service", url: "https://www.otcas.org/", description: "The centralized application for accredited OT programs — manage applications, track observation hours, and submit to multiple programs through one portal." },
      { name: "Undergraduate OT Research — Assist a Faculty Lab", url: "", description: "Work in a professor's research lab studying rehabilitation, human movement, or disability — research experience is a powerful differentiator for OT graduate admissions." },
    ],
    [
      { name: "Occupational Therapy: Performance, Participation, and Well-Being by Charles Christiansen", url: "", type: "book" },
      { name: "AOTA Evidence Exchange — Research Database", url: "https://www.aota.org/practice/practice-essentials/evidence-exchange", type: "article" },
    ],
  ),

  s(nx(), "p44", "g16",
    "Master of Occupational Therapy (MOT, 2-2.5 years) or Clinical Doctorate in Occupational Therapy (OTD, 3 years). Core graduate coursework: neuroscience (applied to occupation), kinesiology and biomechanics, human development across the lifespan, OT theory and practice frameworks, assessment and intervention planning, assistive technology and environmental modification, and research methods. Complete Level I fieldwork (short placements across settings) and Level II fieldwork (two 12-week full-time placements in different practice areas — e.g., one in pediatrics and one in physical rehabilitation). After graduation: pass the NBCOT certification exam, then apply for state licensure. New OTs often start in hospitals, school systems, skilled nursing facilities, or outpatient clinics. The first years of practice build clinical confidence and help you discover your specialty area — hand therapy, NICU, mental health, ergonomics, or school-based practice.",
    ["Neuroscience & Occupation", "Assessment & Intervention Planning", "Level I & Level II Fieldwork", "Assistive Technology & Modifications", "Evidence-Based Practice"],
    [
      { name: "NBCOT Exam Preparation & Certification", url: "https://www.nbcot.org/", description: "Register for the NBCOT exam, access study resources, and understand the certification process — passing the NBCOT is required for state licensure as an OT." },
      { name: "AOTA Annual Conference — Attend & Present", url: "https://www.aota.org/events", description: "The largest gathering of OT professionals — attend sessions, present your research or case study, and network with practicing OTs from every specialty area." },
    ],
    [
      { name: "NBCOT Exam Prep — TherapyEd OT Review Guide", url: "", type: "course" },
      { name: "Conditions in Occupational Therapy by Ben Atchison & Diane Dirette", url: "", type: "book" },
    ],
  ),

  s(nx(), "p44", "g17",
    "Post-professional clinical doctorate (OTD) — for practicing OTs who want advanced clinical specialization, or a Ph.D. in Occupational Science — for research careers investigating human occupation. Advanced certifications: Board Certification in Pediatrics, Gerontology, Mental Health, Physical Rehabilitation, or Hand Therapy (CHT — Certified Hand Therapist, requiring 3+ years of hand therapy experience). Career pinnacles: Director of Rehabilitation at a major hospital system, university professor training the next generation of OTs, private practice owner running a multi-clinician practice, ergonomics consultant for Fortune 500 companies, or policy advisor shaping disability and healthcare legislation. Occupational therapy changes lives through the seemingly simple acts of daily living — helping a stroke survivor dress independently, a child with autism participate in a classroom, or an elder remain in their home. OTs help people live life to its fullest.",
    ["Advanced Clinical Specialty (CHT, BCP, etc.)", "Healthcare Leadership & Administration", "Research Methods & Program Evaluation", "Teaching & Clinical Supervision", "Health Policy & Advocacy"],
    [
      { name: "AOTA Board & Specialty Certifications", url: "https://www.aota.org/career/advanced-certification", description: "Earn advanced board certification in your specialty area — pediatrics, gerontology, mental health, physical rehabilitation, or pursue the Certified Hand Therapist (CHT) credential." },
      { name: "AOTA Hill Day — Advocacy & Policy", url: "https://www.aota.org/advocacy", description: "Advocate for OT services at the state and federal level — help shape healthcare policy, Medicare/ Medicaid coverage, and disability rights legislation." },
    ],
    [
      { name: "American Journal of Occupational Therapy (AJOT)", url: "https://research.aota.org/ajot", type: "article" },
      { name: "Grit: The Power of Passion and Perseverance by Angela Duckworth", url: "", type: "book" },
    ],
  ),

  // ========================================================================
  // p45 — INVESTMENT BANKER 💹
  // ========================================================================

  s(nx(), "p45", "g1",
    "Investment banking is about solving complex financial problems — and it all begins with a love of numbers and patterns. At this age, children are natural mathematicians: counting toys, sorting by color and size, and noticing patterns everywhere. Play board games that involve counting and taking turns — Chutes and Ladders, Hi-Ho Cherry-O, and Candy Land build number sense and strategic thinking. Use real money in play — a toy cash register and play coins teach that money has value and is used for exchange. Talk about what people do at work and why some jobs involve helping with money. The investment banker's mind is analytical, curious, and comfortable with numbers — and that mindset starts with joyful, playful exposure to math in everyday life.",
    ["Early Math (Counting & Sorting)", "Pattern Recognition", "Money Concepts (Play)", "Strategic Thinking (Board Games)"],
    [
      { name: "PBS Kids — Math Games Collection", url: "https://pbskids.org/games/math/", description: "Free math games that build counting, sorting, and pattern recognition — playful number sense that forms the foundation for quantitative reasoning." },
      { name: "Play Store with Toy Cash Register", url: "", description: "Set up a pretend store — buying and selling with play money teaches that money has value, goods have prices, and transactions involve exchange and change." },
    ],
    [
      { name: "The Coin Counting Book by Rozanne Lanczak Williams", url: "", type: "book" },
      { name: "Sesame Street: Financial Literacy — For Me, For You, For Later", url: "https://www.sesamestreet.org/toolkits/save", type: "video" },
    ],
  ),

  s(nx(), "p45", "g2",
    "Number sense deepens — addition, subtraction, and understanding that numbers represent real quantities. Practice mental math through everyday situations: 'If we have three apples and buy two more, how many do we have?' Play money games — count coins, make change, and understand that different coins have different values. Start an allowance — even a small one — and talk about saving, spending, and giving. The three-jar system (save, spend, share) introduces capital allocation in its simplest form. Read stories about entrepreneurs and inventors — people who built things, solved problems, and created value. Investment bankers help companies grow by raising capital and advising on strategy — and it starts with understanding that money is a tool for building things that matter.",
    ["Addition & Subtraction", "Money (Counting Coins & Making Change)", "Saving & Budgeting Basics", "Reading (Entrepreneur Stories)"],
    [
      { name: "Starfall — Math Games & Number Activities", url: "https://www.starfall.com/", description: "Interactive math activities building number fluency — addition, subtraction, and early money skills through playful digital exploration." },
      { name: "Start a 3-Jar Allowance System (Save, Spend, Share)", url: "", description: "Give a small weekly allowance divided into three jars — children learn the fundamentals of capital allocation: save for the future, spend wisely, and share generously." },
    ],
    [
      { name: "Alexander, Who Used to Be Rich Last Sunday by Judith Viorst", url: "", type: "book" },
      { name: "BrainPOP Jr.: Counting Coins", url: "https://jr.brainpop.com/math/money/", type: "video" },
    ],
  ),

  s(nx(), "p45", "g3",
    "Math skills accelerate — multiplication, division, and word problems that require translating real situations into mathematical expressions. Investment banking is fundamentally about modeling real-world business scenarios with numbers. Practice solving multi-step word problems and explaining your reasoning — clear communication of quantitative ideas is a core banking skill. Learn about different jobs in the economy — what do farmers, factory workers, shop owners, and bankers each contribute? Continue the allowance and three-jar system, adding simple tracking of income and expenses. Read biographies of business leaders and inventors — learn how companies start, grow, and sometimes fail. The investment banker is an advisor who helps companies navigate these challenges — a role that requires both analytical horsepower and genuine curiosity about how businesses work.",
    ["Multiplication & Division", "Word Problems & Reasoning", "Economics (Community Helpers)", "Writing (Explaining Your Thinking)"],
    [
      { name: "Math Playground — Word Problems & Logic Games", url: "https://www.mathplayground.com/", description: "Free math games focused on problem-solving and logical reasoning — word problems that build the analytical thinking investment bankers use every day." },
      { name: "Junior Achievement — BizTown / Financial Literacy Programs", url: "https://www.juniorachievement.org/", description: "JA's elementary programs introduce business, economics, and personal finance — run a simulated business and learn how companies create and manage money." },
    ],
    [
      { name: "The Lemonade War by Jacqueline Davies", url: "", type: "book" },
      { name: "Crash Course Kids: Economics", url: "https://www.youtube.com/playlist?list=PLhz12vamHOnZ4ZDC0dS6C9HRN5Qrm0jHO", type: "video" },
    ],
  ),

  s(nx(), "p45", "g4",
    "Math expands to include fractions, decimals, and multi-step problem solving. Investment banking requires comfort with numbers of all sizes — from fractions of a percent to billions of dollars. Practice estimating and checking reasonableness — 'Does this answer make sense?' is the most important question in financial modeling. Learn about the stock market at a simple level — companies sell shares to raise money, and those shares go up and down based on how well the company performs. Start a mock investment portfolio with a parent — track a few companies you know (Disney, Nike, Apple) and see how their stock prices change over time. Read kid-friendly business news. The investment banker's career is built on understanding companies, markets, and how capital flows through the economy.",
    ["Fractions & Decimals", "Multi-Step Problem Solving", "Economics (Intro to Markets)", "Critical Thinking & Estimation"],
    [
      { name: "The Stock Market Game — SIFMA Foundation", url: "https://www.stockmarketgame.org/", description: "Simulate investing $100,000 in the real stock market — research companies, build a portfolio, and compete with students nationwide in this classic investment education program." },
      { name: "Biz Kid$ — Financial Education Videos", url: "https://bizkids.com/", description: "Emmy Award-winning show teaching kids about money, investing, and entrepreneurship — produced by the same team as Bill Nye the Science Guy." },
    ],
    [
      { name: "How to Turn $100 into $1,000,000 by James McKenna & Jeannine Glista", url: "", type: "book" },
      { name: "CNN 10 — Student News (Business Segments)", url: "https://www.cnn.com/cnn10", type: "video" },
    ],
  ),

  s(nx(), "p45", "g5",
    "Math deepens with percentages, ratios, and data interpretation — the language of finance. Investment bankers analyze financial statements, calculate returns, and compare investment opportunities using exactly these skills. Practice calculating percentages (discounts, tips, interest) and understanding what they mean in context. Learn to read graphs and charts — revenue trends, profit margins, market share. Expand the mock investment portfolio and start writing simple investment theses — one paragraph explaining why you chose each company. Study famous businesses — how did they start, how did they grow, how did they raise money? Read about IPOs, mergers, and acquisitions at a basic level. The investment banker is part detective (understanding a business deeply), part mathematician (modeling its future), and part salesperson (convincing others to act).",
    ["Percentages & Ratios", "Data Analysis & Graphs", "Writing (Investment Reasoning)", "Social Studies (Business History)"],
    [
      { name: "Khan Academy — Personal Finance & Investing", url: "https://www.khanacademy.org/college-careers-more/personal-finance", description: "Free courses on saving, budgeting, investing, and the stock market — build the financial literacy foundation that every investment banker needs." },
      { name: "Expand Your Mock Portfolio — Research & Write", url: "", description: "Add 3-5 more companies to your mock portfolio and write a short investment thesis for each — practice the core IB skill of analyzing a business and making a case." },
    ],
    [
      { name: "The Everything Kids' Money Book by Brette Sember", url: "", type: "book" },
      { name: "TED-Ed: What Gives a Dollar Bill Its Value?", url: "https://ed.ted.com/", type: "video" },
    ],
  ),

  s(nx(), "p45", "g6",
    "Master pre-algebra concepts — variables, equations, and functions are the mathematical foundation of financial modeling. Investment banking analysts spend their days in Excel, building models that rely on algebraic relationships. Practice Excel or Google Sheets — learn basic formulas, cell references, and how to organize data in tables. The technical skills of investment banking start here. Study how companies are structured — what's a corporation vs. a partnership? What's the difference between debt and equity? What happens when one company buys another? Read the business section of a newspaper (or a kid-friendly equivalent) once a week. Develop the habit of asking: 'What's the business model? How do they make money?' — the fundamental question behind every investment banking deal.",
    ["Pre-Algebra (Variables & Equations)", "Spreadsheets (Excel / Google Sheets)", "Economics (Business Structures)", "Reading (Business News)"],
    [
      { name: "Google Sheets / Excel — Learn Spreadsheet Basics", url: "https://www.google.com/sheets/about/", description: "Learn spreadsheet fundamentals — formulas, cell references, tables, and charts. Investment banking runs on Excel and financial models built on exactly these skills." },
      { name: "Read Business News Weekly", url: "https://www.cnbc.com/", description: "Start a weekly habit of reading business news — CNBC, Wall Street Journal, or Bloomberg. Understanding what moves markets today builds the commercial awareness banks want." },
    ],
    [
      { name: "The Young Investor by Katherine R. Bateman", url: "", type: "book" },
      { name: "Khan Academy: Pre-Algebra", url: "https://www.khanacademy.org/math/pre-algebra", type: "course" },
    ],
  ),

  s(nx(), "p45", "g7",
    "Take pre-algebra and start building spreadsheet skills in earnest. Financial models — the core tool of investment banking — are built in Excel and combine accounting, finance, and algebra. Learn basic accounting concepts: revenue, expenses, profit, assets, liabilities, and equity. These are the building blocks of every financial statement and every IB analysis. Study compound interest — Einstein called it the eighth wonder of the world, and it's the mathematical engine behind all of finance. Continue following business news and start tracking IPOs and M&A deals — notice which banks are advising on the biggest transactions. Consider joining or starting a math club or investment club. Investment banking attracts competitive, intellectually curious people who love the intersection of numbers and strategy.",
    ["Algebra", "Spreadsheets (Intermediate)", "Accounting Basics", "Current Events (Business & Economics)", "Writing (Business Analysis)"],
    [
      { name: "Wharton Global Youth Program — Investment Competition", url: "https://globalyouth.wharton.upenn.edu/", description: "The Wharton School's investment competition for students — manage a virtual portfolio, research companies, and compete with teams worldwide under Wharton faculty guidance." },
      { name: "Start an Investment Club at School", url: "", description: "Gather classmates interested in markets and business — meet weekly to discuss stocks, share research, and learn from each other, modeling the collaborative culture of IB teams." },
    ],
    [
      { name: "Rich Dad Poor Dad for Teens by Robert Kiyosaki", url: "", type: "book" },
      { name: "Planet Money — NPR Podcast (Kid-Friendly Episodes)", url: "https://www.npr.org/podcasts/510289/planet-money", type: "article" },
    ],
  ),

  s(nx(), "p45", "g8",
    "Take algebra (honors if available) — the algebraic thinking developed here is directly applied in financial modeling. Deepen spreadsheet skills: learn VLOOKUP, pivot tables, and basic macros. Continue studying accounting — learn to read and interpret the three financial statements: income statement, balance sheet, and cash flow statement. Understanding how these three statements connect is the first technical interview question for every IB analyst. Study the time value of money and discounted cash flow (DCF) at a basic level — this is how investment bankers value companies. Learn about different IB roles: M&A advisory, equity capital markets, debt capital markets, and restructuring. Research summer programs for high school students interested in finance — many top universities offer pre-college business programs.",
    ["Algebra (Honors)", "Spreadsheets (Advanced Functions)", "Financial Accounting (Intro)", "Economics (Micro)"],
    [
      { name: "Investopedia — Financial Education & Dictionary", url: "https://www.investopedia.com/", description: "The internet's most comprehensive financial education resource — learn accounting, valuation, markets, and investment concepts with clear explanations and examples." },
      { name: "Pre-College Business Program (Summer)", url: "https://www.wharton.upenn.edu/", description: "Apply to summer programs at Wharton, Stern, Ross, or other top business schools — experience college-level finance education and build credentials for future applications." },
    ],
    [
      { name: "The Motley Fool Investment Guide for Teens by David & Tom Gardner", url: "", type: "book" },
      { name: "YouTube: Aswath Damodaran — Valuation & Corporate Finance", url: "https://www.youtube.com/@AswathDamodaranonValuation", type: "video" },
    ],
  ),

  s(nx(), "p45", "g9",
    "Take algebra II or geometry and consider honors/accelerated math paths. Quantitative skills are non-negotiable in investment banking. Build a solid foundation in Excel — learn INDEX-MATCH, data tables, scenario analysis, and how to build a basic three-statement financial model. Study economics — microeconomics (how companies and consumers make decisions) and macroeconomics (interest rates, inflation, GDP). Investment banking sits at the intersection of micro and macro. Learn about the IB recruiting timeline: for undergraduate students, the path is rigorous — target school → high GPA → finance/accounting major → sophomore summer internship → junior summer internship (the critical one) → full-time offer. Investment banking is one of the most competitive industries for college graduates. The compensation is extraordinary ($150K+ all-in for first-year analysts at top firms), but the hours are brutal (80-100/week).",
    ["Algebra II / Geometry (Honors)", "Spreadsheets (Financial Modeling Intro)", "Economics (Micro & Macro)", "English (Persuasive Writing)", "Public Speaking / Debate"],
    [
      { name: "Wall Street Prep — Financial Modeling Courses", url: "https://www.wallstreetprep.com/", description: "The industry standard for financial modeling training — used by investment banks to train their own analysts. Self-study the same material that IB professionals use." },
      { name: "High School Fed Challenge / Economics Competition", url: "https://www.federalreserve.gov/", description: "Compete in the Federal Reserve's economics challenge — analyze economic conditions and present monetary policy recommendations like a real Fed economist." },
    ],
    [
      { name: "Liar's Poker by Michael Lewis", url: "", type: "book" },
      { name: "Coursera: Financial Markets (Yale — Robert Shiller)", url: "https://www.coursera.org/learn/financial-markets-global", type: "course" },
    ],
  ),

  s(nx(), "p45", "g10",
    "Take geometry or algebra II (honors/AP if available). Excel skills should be approaching professional level — build a simple DCF model for a public company using publicly available financial statements. Study accounting in depth — debits and credits, accrual accounting, revenue recognition, and how transactions flow through the three statements. Accounting is the language of business, and investment bankers must be fluent. Study corporate finance — capital structure, WACC, leveraged buyouts (LBOs), and mergers. Read the Wall Street Journal daily — commercial awareness is what separates good bankers from great ones. Research target universities for IB recruiting — the 'target schools' where banks recruit most heavily: Harvard, Wharton (UPenn), Stanford, Chicago, Columbia, NYU Stern, and Michigan Ross. Going to a target school dramatically improves IB recruiting odds.",
    ["Geometry / Algebra II (Honors/AP)", "Accounting (Advanced)", "Corporate Finance (Intro)", "Spreadsheets (DCF Modeling)", "Business News (Daily)"],
    [
      { name: "Breaking Into Wall Street — Self-Study IB Prep", url: "https://breakingintowallstreet.com/", description: "Comprehensive self-study program for aspiring investment bankers — financial modeling, valuation, and interview preparation used by thousands of successful IB candidates." },
      { name: "Read Wall Street Journal Daily", url: "https://www.wsj.com/", description: "Build the commercial awareness that distinguishes top IB candidates — know the deals, the trends, and the players. 15 minutes daily is worth more than cramming." },
    ],
    [
      { name: "Investment Banking: Valuation, LBOs, M&A, and IPOs by Joshua Rosenbaum & Joshua Pearl", url: "", type: "book" },
      { name: "edX: Introduction to Corporate Finance (Columbia)", url: "https://www.edx.org/", type: "course" },
    ],
  ),

  s(nx(), "p45", "g11",
    "Take AP Calculus if available — calculus is the mathematical foundation of modern finance (options pricing, risk modeling, portfolio optimization). Take AP Economics (Micro and Macro) if offered. Continue building financial modeling skills — the three-statement model, DCF, comparable company analysis, and precedent transactions are the core IB technical skills. Learn about the IB interview process: technical questions (accounting, valuation, M&A) and behavioral questions (teamwork, leadership, resilience). Practice mental math — IB interviews often require quick arithmetic without a calculator. Research target schools and their finance clubs — schools like Wharton have investment clubs that manage real money. Consider summer programs like the Wharton Leadership in the Business World or Bank of America Student Leaders. Investment banking rewards preparation, and the best-prepared candidates start years before recruiting begins.",
    ["AP Calculus AB/BC", "AP Economics (Micro & Macro)", "Financial Modeling (DCF, Comps, Precedents)", "Accounting (Financial Statement Analysis)", "Speech & Debate"],
    [
      { name: "Wall Street Oasis — IB Interview Prep & Community", url: "https://www.wallstreetoasis.com/", description: "The largest online community for finance professionals — IB interview guides, salary data, recruiting timelines, and forums where bankers share unfiltered career advice." },
      { name: "Summer Program — Wharton LBW / Bank of America Student Leaders", url: "https://www.wharton.upenn.edu/", description: "Elite pre-college business programs — competitive, prestigious, and excellent preparation for the rigor and networking demands of an investment banking career." },
    ],
    [
      { name: "Monkey Business by John Rolfe & Peter Troob", url: "", type: "book" },
      { name: "Aswath Damodaran's Valuation Class (NYU — Free Online)", url: "https://pages.stern.nyu.edu/~adamodar/", type: "course" },
    ],
  ),

  s(nx(), "p45", "g12",
    "Take AP Calculus, AP Economics, and AP Statistics. Statistics matters — investment bankers analyze data, build Monte Carlo simulations, and think probabilistically. Deepen financial modeling skills: add an LBO model and a merger model to your toolkit. Practice the IB interview technical questions until they're automatic: 'Walk me through a DCF.' 'How do the three financial statements connect?' 'What's the difference between enterprise value and equity value?' Research target schools in depth — understand each school's finance pipeline: which banks recruit there, which clubs matter, and the GPA cutoff (often 3.7+ at targets). The IB recruiting timeline for college: freshman year — join finance clubs and maintain a 4.0; sophomore year — secure a finance internship (wealth management, PE, or boutique IB); junior year — summer analyst position at a top bank (this is 90% of full-time offers).",
    ["AP Calculus (Exam)", "AP Economics (Exam)", "AP Statistics", "Financial Modeling (LBO & Merger Models)", "College Research & Applications"],
    [
      { name: "Mergers & Inquisitions — IB Interview & Recruiting Guide", url: "https://mergersandinquisitions.com/", description: "The definitive resource for IB recruiting — detailed guides on networking, technical interviews, the recruiting timeline, and how candidates from non-target schools break in." },
      { name: "Practice IB Technical Interviews", url: "", description: "Drill the 400-question IB technical interview guide until answers are automatic — accounting, valuation, M&A, and brain teasers make up the gauntlet every IB candidate faces." },
    ],
    [
      { name: "The Intelligent Investor by Benjamin Graham (Selected Chapters)", url: "", type: "book" },
      { name: "BIWS — Excel & Financial Modeling Fundamentals", url: "https://breakingintowallstreet.com/", type: "course" },
    ],
  ),

  s(nx(), "p45", "g13",
    "The critical college application year. Complete AP exams — Calculus and Economics scores matter. Write application essays that demonstrate intellectual curiosity about business and finance — but avoid clichés about wanting to be rich. Investment banks look for analytical thinkers, team players, and resilient individuals who thrive under pressure. Apply to target schools (Harvard, Wharton, Stanford, Chicago, Columbia, NYU Stern, Michigan Ross) but also strong semi-targets (UVA, Berkeley Haas, Cornell Dyson, Duke, Northwestern). Consider undergraduate business programs vs. economics majors at liberal arts colleges — both paths work if the school is a target. Continue developing financial modeling skills and reading business news daily. Some students pursue the 'accelerated IB path' — graduating from a target undergrad in 3 years and starting as an IB analyst at 21. The career is a marathon in sprint form — long hours but accelerated learning and exit opportunities (private equity, hedge funds, corporate strategy) that are among the best in business.",
    ["AP Calculus (Final)", "AP Economics (Final)", "AP Statistics (Final)", "College Applications & Essays", "Financial Modeling (Continued)"],
    [
      { name: "Poets & Quants — Undergraduate Business School Rankings", url: "https://poetsandquantsforundergrads.com/", description: "Comprehensive rankings and profiles of undergraduate business programs — understand which schools place into investment banking and what each program's strengths are." },
      { name: "LinkedIn — Build Your Professional Profile", url: "https://www.linkedin.com/", description: "Create a professional LinkedIn profile and start following investment banks, finance professionals, and target school alumni — the IB world lives on LinkedIn." },
    ],
    [
      { name: "Barbarians at the Gate by Bryan Burrough & John Helyar", url: "", type: "book" },
      { name: "Goldman Sachs — Career Blog & Insights", url: "https://www.goldmansachs.com/careers/", type: "article" },
    ],
  ),

  s(nx(), "p45", "g14",
    "Finalize college decisions and prepare for the relentless IB recruiting timeline. If headed to a target school, the clock starts immediately: join the undergraduate finance/investment club in the first week of freshman year. Learn which clubs are 'pipeline clubs' that banks recruit from. Prepare for the fact that IB recruiting now starts incredibly early — some banks begin reaching out to freshmen. If attending a non-target school, the path is harder but possible: relentless networking, perfect grades, and transferring to a target or semi-target. Read everything you can about the industry — the culture, the lifestyle, the exit opportunities, the pros and cons. Investment banking is not right for everyone — 80-100 hour weeks, high pressure, and a steep hierarchy. But for those who love finance and thrive on challenge, it's an unparalleled career accelerator.",
    ["Finance / Accounting Prep", "Excel & Financial Modeling (Mastery)", "Economics Elective", "Networking & Professional Communication", "College Transition Planning"],
    [
      { name: "Undergraduate Finance Club — Join Immediately", url: "", description: "Identify and join your target school's premier investment/finance club — these clubs run mock interviews, host bank info sessions, and serve as direct pipelines to IB interviews." },
      { name: "Wall Street Oasis — Non-Target to IB Guides", url: "https://www.wallstreetoasis.com/", description: "If you're not at a target school, study the non-target success stories — networking relentlessly, maintaining a 4.0, and developing world-class modeling skills are essential." },
    ],
    [
      { name: "Why I Left Goldman Sachs by Greg Smith", url: "", type: "book" },
      { name: "BIWS — IB Networking & Recruiting Guide", url: "https://breakingintowallstreet.com/", type: "course" },
    ],
  ),

  s(nx(), "p45", "g15",
    "Major in finance, accounting, economics, or a quantitative field (math, engineering, computer science). Maintain a 3.7+ GPA — banks screen by GPA. Core coursework: financial accounting, corporate finance, valuation, investments, macroeconomics, and econometrics. Join the premier undergraduate finance club and seek a leadership position. Network relentlessly — attend bank info sessions, coffee chats, and alumni events. The IB recruiting calendar: early sophomore year — secure a summer internship in finance (wealth management, boutique IB, PE, or corporate finance). Junior year — interview for junior summer analyst positions at bulge bracket and elite boutique banks. The junior summer internship is effectively a 10-week interview — most full-time offers come from this internship. Key technical skills to master: three-statement modeling, DCF, comparable companies, precedent transactions, LBO basics, and M&A merger models.",
    ["Financial Accounting (Intermediate/Advanced)", "Corporate Finance & Valuation", "Investments & Portfolio Theory", "Financial Modeling (Mastery)", "Macroeconomics"],
    [
      { name: "Undergraduate Investment Club — Leadership Role", url: "", description: "Rise to a leadership position in your school's investment club — manage real money, teach younger members, and build relationships with alumni now working at top banks." },
      { name: "Sophomore Summer — Finance Internship", url: "", description: "Secure a sophomore summer internship in finance — wealth management, boutique IB, private equity, or corporate finance. Any finance experience strengthens the junior summer IB application." },
    ],
    [
      { name: "Valuation: Measuring and Managing the Value of Companies (McKinsey)", url: "", type: "book" },
      { name: "Training The Street — Financial Modeling Bootcamp", url: "https://trainingthestreet.com/", type: "course" },
    ],
  ),

  s(nx(), "p45", "g16",
    "Investment Banking Analyst (2-3 years) — the entry-level position at a bulge bracket (Goldman Sachs, Morgan Stanley, J.P. Morgan, Bank of America, Citi) or elite boutique (Evercore, Lazard, Moelis, Centerview). The work: building financial models, preparing pitch books and client presentations, conducting industry research, coordinating with other advisors, and managing due diligence. Core skills developed: advanced Excel modeling (operating models, DCF, LBO, merger models), PowerPoint mastery, professional communication, attention to detail, and the ability to work under extreme time pressure. After 2-3 years, most analysts exit to: private equity (the most common), hedge funds, corporate development, or stay for the associate promote (which requires an MBA for some, though direct promotes are increasingly common). The associate level (post-MBA or post-analyst promote) involves more client interaction, managing analysts, and driving deal execution. VP and above focus on client relationships and business development.",
    ["Advanced Financial Modeling", "M&A Process & Execution", "Pitch Book & Presentation Skills", "Client & Deal Team Management", "Industry & Company Analysis"],
    [
      { name: "MBA — Top Business School (Associate Path)", url: "https://www.hbs.edu/", description: "Many investment bankers pursue an MBA at Harvard, Stanford, Wharton, Chicago Booth, or Columbia after 2-3 years as an analyst — a well-trodden path to the associate level." },
      { name: "CFA Charter — Chartered Financial Analyst", url: "https://www.cfainstitute.org/", description: "The gold standard credential for investment professionals — passing all three levels demonstrates mastery of investment analysis, portfolio management, and ethics." },
    ],
    [
      { name: "Investment Banking: Valuation, LBOs, M&A, and IPOs (Full) by Rosenbaum & Pearl", url: "", type: "book" },
      { name: "Wall Street Prep — Advanced Financial Modeling", url: "https://www.wallstreetprep.com/", type: "course" },
    ],
  ),

  s(nx(), "p45", "g17",
    "Senior investment banker — Managing Director (MD) or Partner level. MDs are the revenue generators: they source and win deals, maintain C-suite relationships, and provide the strategic judgment that distinguishes great bankers from good ones. The path to MD takes 10-15+ years. Alternative pinnacle paths: leave banking to become a Partner at a private equity firm, a portfolio manager at a hedge fund, Chief Financial Officer at a corporation, or founder of your own investment firm. The skills developed in investment banking — financial analysis, strategic thinking, negotiating, and performing under pressure — are transferable to almost any senior business role. Investment banking provides extraordinary financial rewards (MDs at top firms earn $1M+ annually) at the cost of sustained intensity. The best investment bankers are defined by integrity, client service, judgment, and the ability to distill complexity into actionable advice. The deals come and go, but trusted advisor relationships last a career.",
    ["Deal Origination & Client Relationships", "Strategic M&A Advisory", "Executive Leadership", "Board & C-Suite Communication", "Wealth Management & Legacy Building"],
    [
      { name: "Harvard Business School — Advanced Management Program", url: "https://www.exed.hbs.edu/", description: "Executive education for senior leaders — programs that prepare MDs and Partners for the strategic and leadership demands at the pinnacle of investment banking." },
      { name: "Young Presidents' Organization (YPO) / Milken Institute", url: "https://milkeninstitute.org/", description: "Network with global business and financial leaders — the relationships built at the highest levels of finance shape markets and create opportunities across industries." },
    ],
    [
      { name: "The Partnership: The Making of Goldman Sachs by Charles D. Ellis", url: "", type: "book" },
      { name: "Bloomberg — Markets & Finance Terminal Access", url: "https://www.bloomberg.com/", type: "article" },
    ],
  ),



  // ========================================================================
  // p46 — FASHION DESIGNER 👗
  // ========================================================================

  s(nx(), "p46", "g1",
    "Fashion design starts with color, texture, and imagination. At this age, children express themselves through dressing up, mixing patterns, and creating outfits for dolls and stuffed animals. Encourage free drawing with crayons, markers, and finger paints — every great designer starts by putting color to paper. Play with fabric scraps: let children feel silk, denim, wool, and cotton and describe how each feels. The fashion designer's eye is trained from the earliest moments of noticing what people wear and why.",
    ["Color Recognition & Mixing", "Fine Motor Skills (Drawing, Cutting)", "Imaginative Play (Dress-Up)", "Sensory Exploration (Textures & Fabrics)"],
    [
      { name: "PBS Kids — Art & Coloring Games", url: "https://pbskids.org/games/art/", description: "Free digital art games that build color sense and creativity — drawing, painting, and design activities for preschoolers discovering visual expression." },
      { name: "Dress-Up Play at Home", url: "", description: "Create a dress-up box with scarves, hats, costume jewelry, and fabric pieces — children experiment with color, texture, and personal style through play." },
    ],
    [
      { name: "Mix It Up! by Hervé Tullet", url: "", type: "book" },
      { name: "Sesame Street: Elmo's World — Dressing Up (PBS Kids)", url: "https://pbskids.org/sesame/", type: "video" },
    ],
  ),

  s(nx(), "p46", "g2",
    "Drawing skills develop rapidly — encourage daily sketching of clothing, outfits, and people. Fashion designers are visual storytellers, and the habit of drawing what you see (and what you imagine) starts here. Practice cutting paper with safety scissors — fashion design involves pattern-making, which requires fine motor precision. Read books about clothing around the world — understanding that dress is cultural, functional, and expressive broadens the designer's perspective. Talk about colors that go together and why. Visit a fabric store if possible and let children touch bolts of fabric — the tactile vocabulary of a designer begins with the hand.",
    ["Drawing & Sketching", "Color Theory (Basic)", "Fine Motor (Cutting & Pasting)", "Cultural Awareness (Clothing Around the World)"],
    [
      { name: "Art for Kids Hub — Drawing Tutorials (YouTube)", url: "https://www.youtube.com/@ArtforKidsHub", description: "Free step-by-step drawing tutorials — learn to draw people, clothes, and accessories, building the sketching habit that every fashion designer relies on." },
      { name: "Visit a Fabric or Craft Store", url: "", description: "Walk through a fabric store and touch different materials — cotton, silk, wool, lace, denim. Building a tactile vocabulary of textiles is the designer's earliest education." },
    ],
    [
      { name: "The Button Box by Margarette S. Reid", url: "", type: "book" },
      { name: "Cosmic Kids Yoga: Rainbow Color Adventure (YouTube)", url: "https://www.youtube.com/@CosmicKidsYoga", type: "video" },
    ],
  ),

  s(nx(), "p46", "g3",
    "Fashion design combines art and engineering — both develop in first grade. Practice drawing the human figure with simple proportions — fashion illustration starts with understanding how clothing drapes on a body. Learn basic hand sewing with a plastic needle and burlap — running stitch, cross stitch, and sewing on buttons. Fashion designers must understand garment construction from the inside out. Study patterns in clothing and in nature — stripes, dots, florals, and how they're arranged. Read about how clothes are made: who grows the cotton, who weaves the fabric, who sews the seams? The ethical designer understands the supply chain behind every garment.",
    ["Drawing (Figure Drawing Basics)", "Hand Sewing (Intro)", "Pattern Recognition & Design", "Reading (How Things Are Made)"],
    [
      { name: "Start Hand Sewing — Learn Basic Stitches", url: "https://sewing.org/", description: "The Sewing & Craft Alliance offers free beginner guides — learn running stitch, cross stitch, and how to sew on a button, the foundation of all garment construction." },
      { name: "Draw Clothing on Paper Dolls", url: "", description: "Design outfits for paper dolls — practice matching colors, creating silhouettes, and thinking about how garments fit a body, the core skills of fashion illustration." },
    ],
    [
      { name: "Fancy Nancy: Ooh La La! It's Beauty Day by Jane O'Connor", url: "", type: "book" },
      { name: "BrainPOP Jr.: Art — Colors and Patterns", url: "https://jr.brainpop.com/artsandtechnology/art/", type: "video" },
    ],
  ),

  s(nx(), "p46", "g4",
    "Hand sewing skills advance — learn to sew a simple project like a pillow or a tote bag. Understanding how flat fabric becomes a three-dimensional object is the central puzzle of fashion design. Study art history: look at clothing in paintings from different eras — how did people dress in the Renaissance, the Victorian era, the 1920s? Every fashion designer references history. Practice drawing clothing with folds, shadows, and texture — move beyond simple outlines to suggest weight and movement. Keep a fashion sketchbook: glue in fabric swatches, magazine clippings, and color palettes that inspire. The sketchbook is the designer's laboratory — a private space to experiment, fail, and discover a personal aesthetic.",
    ["Art (Fashion History Intro)", "Sewing (Simple Projects)", "Drawing (Texture & Shadow)", "Design Thinking"],
    [
      { name: "Craftsy — Beginner Sewing Classes for Kids", url: "https://www.craftsy.com/", description: "Online video classes teaching sewing fundamentals — make a pillow, tote bag, or simple skirt, learning garment construction from instructors who break down every step." },
      { name: "Start a Fashion Sketchbook", url: "", description: "Keep a dedicated sketchbook for fashion ideas — glue in fabric swatches, magazine tears, and color palettes. The sketchbook is every designer's most important tool." },
    ],
    [
      { name: "The Metropolitan Museum of Art — Costume Institute (Online Collection)", url: "https://www.metmuseum.org/about-the-met/collection-areas/the-costume-institute", type: "article" },
      { name: "I Am Coco: The Life of Coco Chanel by Isabel Pin", url: "", type: "book" },
    ],
  ),

  s(nx(), "p46", "g5",
    "Sewing skills should progress to using a sewing machine with adult supervision — learn to thread the machine, sew straight seams, and follow a simple pattern. The sewing machine is the fashion designer's primary tool. Study color theory: primary, secondary, tertiary colors, complementary colors, warm vs. cool — and how they interact in an outfit. Research the major fashion capitals: Paris, Milan, New York, London, Tokyo. Each city has a distinct design DNA. Begin learning about different fabrics: natural (cotton, silk, wool, linen) vs. synthetic (polyester, nylon, rayon) and how each drapes, breathes, and wears. The materials a designer chooses determine everything about the final garment.",
    ["Sewing (Machine Basics)", "Color Theory", "Geography (Fashion Capitals)", "Science (Natural vs. Synthetic Materials)"],
    [
      { name: "Joann Fabrics — Kids' Sewing Classes", url: "https://www.joann.com/", description: "Many Joann stores offer beginner sewing classes for children — supervised machine sewing instruction that teaches pattern reading and basic garment construction." },
      { name: "Research the World's Fashion Capitals", url: "", description: "Create a presentation or poster about Paris, Milan, New York, London, and Tokyo fashion — learn what makes each city's design aesthetic unique." },
    ],
    [
      { name: "Sewing School: 21 Sewing Projects Kids Will Love to Make by Andria Lisle & Amie Plumley", url: "", type: "book" },
      { name: "Crash Course Kids: Material World — Properties of Materials", url: "https://www.youtube.com/playlist?list=PLhz12vamHOnZ4ZDC0dS6C9HRN5Qrm0jHO", type: "video" },
    ],
  ),

  s(nx(), "p46", "g6",
    "Grow sewing confidence — complete projects with zippers, buttons, and linings. The more garments you construct, the more you understand how design translates to reality. Study the fashion design process: research → inspiration → sketching → fabric selection → pattern making → sample construction → fitting → production. Research iconic fashion designers and their signature styles: Coco Chanel (the little black dress, tweed suits), Christian Dior (the New Look), Yves Saint Laurent (le smoking tuxedo), Rei Kawakubo (deconstruction). Great designers don't just make clothes — they change how people think about dress. Start analyzing outfits you see every day: what works, what doesn't, and why. Develop a critical eye.",
    ["Sewing (Intermediate)", "Fashion History (Iconic Designers)", "Art (Critical Analysis)", "Writing (Design Process Documentation)"],
    [
      { name: "Victoria & Albert Museum — Fashion Collection Online", url: "https://www.vam.ac.uk/collections/fashion", description: "Explore one of the world's greatest fashion collections — study garments from the 18th century to today, with detailed photography and historical context." },
      { name: "Sew a Garment from a Pattern", url: "", description: "Pick a simple pattern (skirt, pajama pants, simple top) and sew it from start to finish — completing a wearable garment is the most important milestone for any aspiring designer." },
    ],
    [
      { name: "Fashion Design Workshop: Stylish Step-by-Step Projects by Stephanie Corfee", url: "", type: "book" },
      { name: "The September Issue (Documentary Film)", url: "", type: "video" },
    ],
  ),

  s(nx(), "p46", "g7",
    "Fashion illustration becomes a focused skill — practice drawing croquis (fashion figures with elongated proportions) and rendering different fabrics: denim looks different from silk on paper. Study the fashion seasons: Spring/Summer, Fall/Winter, Resort, Pre-Fall — and how the fashion calendar drives the industry. Learn about textile design: how prints are created (screen printing, digital printing, weaving, knitting) and the difference between motifs, repeats, and engineered prints. Research sustainable fashion — the environmental impact of the clothing industry and how designers like Stella McCartney and Eileen Fisher are pioneering ethical practices. Fashion's future depends on designers who think about people and the planet, not just profit.",
    ["Art (Fashion Illustration & Croquis)", "Environmental Science (Sustainable Fashion)", "History (20th Century Fashion)", "Business (Fashion Calendar Basics)"],
    [
      { name: "Skillshare — Fashion Illustration Classes", url: "https://www.skillshare.com/", description: "Online classes in fashion illustration from working designers — learn croquis drawing, fabric rendering, and how to communicate design ideas visually." },
      { name: "Research Sustainable Fashion Brands & Practices", url: "", description: "Study how brands like Patagonia, Stella McCartney, and Reformation approach sustainability — write a report on the future of ethical fashion design." },
    ],
    [
      { name: "The Fashion Book (Phaidon)", url: "", type: "book" },
      { name: "The True Cost (Documentary on Fast Fashion)", url: "https://truecostmovie.com/", type: "video" },
    ],
  ),

  s(nx(), "p46", "g8",
    "Deepen sewing skills — work with challenging fabrics like silk, chiffon, and knits. Each fabric has a personality, and the designer who understands fabric behavior can make anything. Study the business of fashion: how designers build brands, how collections are produced and priced, and the role of fashion weeks, buyers, and retailers. Learn about fashion merchandising — the bridge between design and commerce. Practice flat sketching (technical drawings of garments as they would be laid flat) — these are the specifications that factories use to produce designs. Research fashion schools: Parsons, FIT (Fashion Institute of Technology), Central Saint Martins, and Antwerp's Royal Academy are the world's most prestigious. The path to high fashion often runs through one of these institutions.",
    ["Sewing (Advanced Fabrics)", "Art (Technical Flat Sketching)", "Business (Fashion Industry Basics)", "Mathematics (Measurements & Scaling)"],
    [
      { name: "Teen Vogue — Fashion & Industry News", url: "https://www.teenvogue.com/", description: "Stay current with the fashion world — Teen Vogue covers designers, trends, sustainability, and industry news from a youth perspective with journalistic rigor." },
      { name: "Sew a Garment in a Difficult Fabric", url: "", description: "Challenge yourself with silk, chiffon, or stretch knit — every fabric failure teaches a lesson, and mastering difficult materials separates hobbyists from future professionals." },
    ],
    [
      { name: "The Fashion Designer Survival Guide by Mary Gehlhar", url: "", type: "book" },
      { name: "Business of Fashion (BoF) — Online Publication", url: "https://www.businessoffashion.com/", type: "article" },
    ],
  ),

  s(nx(), "p46", "g9",
    "Take art seriously — drawing, painting, and design fundamentals are non-negotiable. Fashion design is an art discipline first. Practice draping: take fabric and pin it directly onto a dress form to see how it falls. Draping is how many of the most innovative designs are born — it's sculptural and intuitive. Study art history beyond fashion: painting, sculpture, and architecture all influence clothing design. Take a business or entrepreneurship elective if available — fashion designers run businesses, and the creative director who understands margins and marketing has a massive advantage. Read fashion journalism — Vogue, WWD (Women's Wear Daily), and The Business of Fashion — to understand the industry's current conversation. Fashion is always in dialogue with culture.",
    ["Art (Drawing, Painting, Design)", "Art History (Survey)", "Business / Entrepreneurship", "English (Analytical Writing about Fashion)"],
    [
      { name: "FIT — Precollege Programs (High School)", url: "https://www.fitnyc.edu/academics/precollege/", description: "The Fashion Institute of Technology's high school programs — study fashion design, merchandising, or textiles with FIT faculty on their NYC campus or online." },
      { name: "Practice Draping on a Dress Form", url: "", description: "Buy or borrow a dress form and learn to drape fabric directly on it — draping is a core haute couture technique and a way to discover designs that sketching alone won't reveal." },
    ],
    [
      { name: "Gods and Kings: The Rise and Fall of Alexander McQueen and John Galliano by Dana Thomas", url: "", type: "book" },
      { name: "Vogue Runway — Fashion Show Archive", url: "https://www.vogue.com/fashion-shows", type: "article" },
    ],
  ),

  s(nx(), "p46", "g10",
    "Take art, design, and all available creative courses at the highest level. Build a fashion portfolio: include 10-15 pieces showing range — croquis sketches, flat technical drawings, photos of garments you've made, fabric studies, and mood boards. The portfolio is the single most important factor in fashion school admissions. Learn pattern making: how to draft patterns from measurements (flat pattern) and how to drape muslin on a form to create patterns. Pattern making is the engineering of fashion — it transforms a sketch into something that can be cut and sewn. Study the fashion supply chain: design → sourcing → sampling → production → distribution → retail. Research summer fashion programs for high school students — Parsons, FIT, RISD, and Otis all offer intensive pre-college fashion studios.",
    ["Art (Portfolio Development)", "Pattern Making (Intro)", "Business (Supply Chain)", "Sewing (Garment Construction)", "Computer-Aided Design (CAD Basics)"],
    [
      { name: "Parsons School of Design — Summer Pre-College", url: "https://www.newschool.edu/parsons/pre-college/", description: "Intensive summer fashion studio at one of the world's top design schools — build your portfolio, learn from Parsons faculty, and experience fashion school before applying." },
      { name: "Build a Fashion Design Portfolio", url: "", description: "Curate 10-15 pieces: sketches, photos of sewn garments, fabric studies, and mood boards. This portfolio is what fashion schools evaluate — start early and refine constantly." },
    ],
    [
      { name: "Patternmaking for Fashion Design by Helen Joseph-Armstrong", url: "", type: "book" },
      { name: "MasterClass: Teach Yourself Fashion Design (various instructors)", url: "https://www.masterclass.com/", type: "course" },
    ],
  ),

  s(nx(), "p46", "g11",
    "Take AP Studio Art if available — the portfolio development process mirrors exactly what fashion schools require. Study fashion illustration with watercolor, markers, and digital tools (Procreate, Adobe Illustrator). Fashion designers today must be fluent in both hand and digital techniques. Research fashion degree programs: BFA in Fashion Design (Parsons, FIT, Pratt, RISD, Central Saint Martins), BA in Fashion (specialized programs), or Fashion Merchandising/Marketing degrees for the business side. Visit fashion schools if possible — see the studios, meet faculty, understand the culture. Continue sewing and building your portfolio. The junior year is when you should have a clear picture of which schools you're targeting and what their portfolio requirements are.",
    ["AP Studio Art / Art (Advanced)", "Digital Design (Illustrator, Procreate)", "Sewing & Pattern Making (Advanced)", "English (Artist Statement Writing)", "Psychology / Sociology (Consumer Behavior)"],
    [
      { name: "CFDA — Council of Fashion Designers of America: Education Resources", url: "https://cfda.com/", description: "The premier trade organization for American fashion designers — scholarship programs, educational initiatives, and access to the professional design community." },
      { name: "Learn Adobe Illustrator for Fashion", url: "https://www.adobe.com/products/illustrator.html", description: "Master digital flat sketching in Illustrator — the industry standard for technical design. Every fashion design job requires fluency in Adobe Creative Suite." },
    ],
    [
      { name: "The End of Fashion by Teri Agins", url: "", type: "book" },
      { name: "Coursera: Fashion as Design (MoMA)", url: "https://www.coursera.org/learn/fashion-design", type: "course" },
    ],
  ),

  s(nx(), "p46", "g12",
    "Take AP Studio Art and complete a strong portfolio submission. The portfolio should tell a story about you as a designer — a coherent point of view is more important than technical perfection. Deepen pattern making skills: learn to draft bodice, sleeve, skirt, and pant blocks from scratch. A designer who can draft patterns has complete creative freedom. Study the great fashion photographers — Richard Avedon, Irving Penn, Helmut Newton, Nick Knight — because fashion is as much about image-making as garment-making. Research fashion industry internships and entry-level roles: design assistant, pattern room assistant, sample room coordinator, fashion editorial intern. Read about designers who took unconventional paths — Virgil Abloh (architecture → fashion), Miuccia Prada (political science → fashion), Tom Ford (architecture → fashion). There are many roads into this industry.",
    ["AP Studio Art (Portfolio)", "Pattern Making (Drafting)", "Photography (Fashion)", "History (20th Century Culture)", "Business (Marketing & Branding)"],
    [
      { name: "National Portfolio Day — Meet Art & Design Schools", url: "https://nationalportfolioday.org/", description: "Free portfolio reviews with representatives from accredited art and design schools — get professional feedback on your fashion portfolio before applying." },
      { name: "Fashion Photography Project", url: "", description: "Photograph your garments on models — learn how to direct a shoot, style an outfit, and present your designs. Fashion is visual communication, and the image matters as much as the garment." },
    ],
    [
      { name: "Fashion: The Definitive History of Costume and Style (DK / Smithsonian)", url: "", type: "book" },
      { name: "Dior and I (Documentary)", url: "", type: "video" },
    ],
  ),

  s(nx(), "p46", "g13",
    "The critical college application year. Complete AP Studio Art exams. Finalize your fashion portfolio — this is the centerpiece of your application to BFA Fashion Design programs. Top fashion schools: Parsons School of Design (#1 in the US), Fashion Institute of Technology (FIT), Pratt Institute, Rhode Island School of Design (RISD), and Savannah College of Art and Design (SCAD). International options: Central Saint Martins (London), Royal Academy of Fine Arts Antwerp, and Istituto Marangoni (Milan/Paris). Fashion school admissions prioritize the portfolio above all else — grades and test scores matter but the portfolio is the deciding factor. Write a personal statement that articulates your design philosophy and what you want to contribute to fashion. Some designers skip fashion school entirely, apprenticing with established designers or building their own brand from the ground up — but formal education provides the network, technical training, and credential that open doors.",
    ["AP Studio Art (Final)", "Fashion Portfolio (Final)", "College / Art School Applications", "Business / Entrepreneurship", "English (Personal Statement)"],
    [
      { name: "Parsons School of Design — BFA Fashion Design", url: "https://www.newschool.edu/parsons/bfa-fashion-design/", description: "The top-ranked fashion design program in America — review the BFA curriculum, portfolio requirements, and the Parsons alumni network that includes Marc Jacobs, Tom Ford, and Donna Karan." },
      { name: "FIT — Fashion Design BFA Program", url: "https://www.fitnyc.edu/academics/undergraduate/fashion-design-bfa.php", description: "FIT's renowned BFA in Fashion Design — a more affordable, technically-focused alternative to Parsons with exceptional industry connections and a NYC location." },
    ],
    [
      { name: "The Little Dictionary of Fashion by Christian Dior", url: "", type: "book" },
      { name: "WWD — Women's Wear Daily (Fashion Industry News)", url: "https://wwd.com/", type: "article" },
    ],
  ),

  s(nx(), "p46", "g14",
    "Finalize college decisions and prepare for fashion school or an alternative path. If attending fashion school: arrive ready to work harder than you ever have — fashion school is famously intense, with studio hours that push late into the night. The first year covers foundation skills: drawing, color theory, sewing, pattern making, and design concepts. If pursuing an alternative path: consider apprenticeships with local designers, starting a small clothing line on Etsy or Instagram, or working in fashion retail while building skills independently. Many successful designers are self-taught or came through non-traditional routes. Either way, immerse yourself in fashion culture — read every issue of Vogue, follow the runway shows, and understand the current conversation. Fashion moves fast, and you need to move with it.",
    ["Fashion Design (Prep)", "Sewing & Construction (Advanced)", "Fashion History & Theory", "Business (Branding & Marketing)", "Digital Design Tools"],
    [
      { name: "Vogue Runway App — Follow All Major Fashion Weeks", url: "https://www.vogue.com/fashion-shows", description: "Download the Vogue Runway app and follow every major fashion week — New York, London, Milan, Paris. Knowing what's on the runway today is your homework every season." },
      { name: "Begin Selling Your Designs (Etsy, Instagram, Local)", url: "", description: "Start a small clothing line — even one-off pieces sold on Etsy or Instagram. The experience of making, pricing, and selling your designs teaches lessons no classroom can." },
    ],
    [
      { name: "The Beautiful Fall: Lagerfeld, Saint Laurent, and Glorious Excess in 1970s Paris by Alicia Drake", url: "", type: "book" },
      { name: "MasterClass: Marc Jacobs Teaches Fashion Design", url: "https://www.masterclass.com/classes/marc-jacobs-teaches-fashion-design", type: "course" },
    ],
  ),

  s(nx(), "p46", "g15",
    "BFA in Fashion Design — a 4-year immersive program. Core coursework: fashion illustration (hand and digital), pattern making and draping, garment construction, textiles and material science, fashion history and theory, computer-aided design (CAD), and collection development. Junior and senior years focus on developing a thesis collection — your first full body of work as a designer, presented in a runway show or exhibition. Complete internships: most fashion schools require or strongly encourage internships at design houses, fashion magazines, or production companies. Target brands for internships: from luxury houses (Chanel, Dior, Gucci) to contemporary labels (Marc Jacobs, Alexander Wang, Proenza Schouler) to mass-market brands (Nike, Gap, Zara). Internships often lead to first jobs. The fashion school network is everything — your classmates will be your collaborators, competitors, and references for decades.",
    ["Fashion Illustration (Hand & Digital)", "Pattern Making & Draping", "Garment Construction & Sewing", "Textiles & Material Science", "Fashion History & Theory"],
    [
      { name: "CFDA — Internship & Career Resources", url: "https://cfda.com/", description: "The CFDA connects emerging designers with established brands — internship listings, mentorship programs, and career development resources for fashion students." },
      { name: "Fashion Internship — Design House or Magazine", url: "https://www.businessoffashion.com/careers/", description: "Secure at least one fashion internship during college — in a design studio, at a fashion magazine, or with a production company. Internships are the primary pipeline to first jobs." },
    ],
    [
      { name: "9 Heads: A Guide to Drawing Fashion by Nancy Riegelman", url: "", type: "book" },
      { name: "YouTube: Zoe Hong — Fashion Design Tutorials", url: "https://www.youtube.com/@ZoeHong", type: "video" },
    ],
  ),

  s(nx(), "p46", "g16",
    "MFA in Fashion Design (optional) — a 2-year advanced degree for designers who want to deepen their artistic practice, teach at the university level, or develop a thesis collection with greater conceptual rigor. Top MFA programs: Parsons (MFA Fashion Design and Society), Central Saint Martins (MA Fashion), and Royal College of Art (MA Fashion). The MFA thesis collection is a significant body of work that can launch a designer's career — many are shown at London, Paris, or New York Fashion Weeks. Alternatively, enter the industry directly after a BFA: start as an assistant designer or design assistant at an established brand, working under a creative director. The early career is about learning the industry from the inside — understanding production timelines, sourcing, fittings, and how a design moves from sketch to store. After 3-5 years, designers typically advance to associate designer, then designer, then senior designer, then design director. Some launch their own labels — a high-risk, high-reward path that requires business acumen alongside creative vision.",
    ["Collection Development & Thesis", "Advanced Pattern Making & Tailoring", "Fashion Business & Entrepreneurship", "Sustainability & Ethical Design", "Creative Direction & Branding"],
    [
      { name: "Central Saint Martins — MA Fashion", url: "https://www.arts.ac.uk/subjects/fashion", description: "The legendary fashion MA program that produced Alexander McQueen, John Galliano, and Stella McCartney — the most prestigious fashion graduate program in the world." },
      { name: "Show Collection at a Fashion Week / Graduate Showcase", url: "https://cfda.com/", description: "Present your collection at a graduate fashion show or apply to emerging designer showcases through CFDA, Vogue, or fashion incubator programs." },
    ],
    [
      { name: "The Fashion System by Roland Barthes", url: "", type: "book" },
      { name: "McQueen (Documentary)", url: "", type: "video" },
    ],
  ),

  s(nx(), "p46", "g17",
    "Career pinnacles in fashion design: becoming Creative Director of an established luxury house — the role held by the likes of Karl Lagerfeld (Chanel), Miuccia Prada (Prada), and Demna (Balenciaga). Alternatively, building your own successful label — as Ralph Lauren, Tom Ford, and Virgil Abloh did — creating a brand that defines an era. Some designers pivot to costume design for film and theater, winning recognition at the Oscars and on Broadway. Others become influential educators or fashion critics, shaping the next generation. The path is demanding and competitive — fashion is a $1.7 trillion global industry that rewards originality, resilience, and the ability to anticipate (or create) what people will want to wear next. The designers who endure are those who treat fashion as art, business, and cultural dialogue — never just clothing.",
    ["Creative Direction & Brand Leadership", "Collection Development (Commercial)", "Fashion Business & Finance", "Mentorship & Industry Leadership", "Cultural & Trend Forecasting"],
    [
      { name: "LVMH Prize for Young Fashion Designers", url: "https://www.lvmhprize.com/", description: "The most prestigious award for emerging designers — €300,000 grant and a year of mentorship from LVMH executives. Past winners include Marine Serre and Thebe Magugu." },
      { name: "ANDAM Fashion Award / CFDA/Vogue Fashion Fund", url: "https://cfda.com/programs/cfda-vogue-fashion-fund", description: "Major fashion awards and grants that provide funding, mentorship, and industry visibility — critical launchpads for designers building independent brands." },
    ],
    [
      { name: "Deluxe: How Luxury Lost Its Luster by Dana Thomas", url: "", type: "book" },
      { name: "Vogue Business — Fashion Industry Analysis", url: "https://www.voguebusiness.com/", type: "article" },
    ],
  ),

];

