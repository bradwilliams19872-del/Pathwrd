/**
 * Batch 3 — p17 Accountant, p18 Physical Therapist, p19 Pharmacist,
 *          p20 Environmental Scientist, p21 Journalist
 * 
 * All 17 grade levels per profession. IDs: rs700–rs784.
 * 
 * Import: import { newProfessionsBatch3 } from './new-professions-batch3';
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

let n = 700;
function nx(): string { return "rs" + (n++); }

export const newProfessionsBatch3: RoadmapStep[] = [

  // ========================================================================
  // p17 — ACCOUNTANT (CPA)
  // ========================================================================

  s(nx(), "p17", "g1",
    "Accounting begins with counting and sorting! At this age, children delight in organizing toys by color, size, and type — the earliest form of classification. Count everything: snacks, blocks, steps on a walk. Play 'store' with play money to introduce the concept of exchanging value. These playful activities build the numerical comfort that underpins all financial thinking.",
    ["Counting & Numbers", "Sorting & Classifying", "Imaginative Play (Store)", "Shapes & Patterns"],
    [
      { name: "PBS Kids — Math Games", url: "https://pbskids.org/games/math/", description: "Free counting and sorting games that build early number sense and classification skills." },
      { name: "Pretend Play: Grocery Store", url: "", description: "Set up a play store at home — children practice counting items, 'paying,' and organizing goods by category." },
    ],
    [
      { name: "The Coin Counting Book by Rozanne Lanczak Williams", url: "", type: "book" },
      { name: "Bunny Money by Rosemary Wells", url: "", type: "book" },
    ],
  ),

  s(nx(), "p17", "g2",
    "Build comfort with numbers and money. Learn coin names and values (penny, nickel, dime, quarter) — the first tangible introduction to currency. Count by 1s, 5s, and 10s using real coins. Play board games that involve counting spaces and making change. Understanding that money represents value is the foundation of accounting.",
    ["Counting & Number Sense", "Money Recognition", "Basic Addition", "Following Instructions"],
    [
      { name: "U.S. Mint — Kids Site", url: "https://www.usmint.gov/learn/kids", description: "Free games and activities about coins, how money is made, and the history of U.S. currency." },
      { name: "Board Games: Monopoly Junior / The Game of Life Junior", url: "", description: "Age-appropriate board games involving money management, counting, and basic financial decisions." },
    ],
    [
      { name: "Lemonade in Winter by Emily Jenkins", url: "", type: "book" },
      { name: "Alexander, Who Used to Be Rich Last Sunday by Judith Viorst", url: "", type: "book" },
    ],
  ),

  s(nx(), "p17", "g3",
    "Build strong reading and math foundations — accountants read financial documents and calculate figures all day. Practice addition and subtraction with real-world scenarios: 'If you have $5 and spend $2, how much is left?' Start keeping a simple 'allowance ledger' — writing down money received and spent. This is your child's first general ledger.",
    ["Reading & Phonics", "Math (Addition & Subtraction)", "Writing (Keeping Lists)", "Money Concepts"],
    [
      { name: "Moonjar Classic Moneybox", url: "https://moonjar.com/", description: "Three-part piggy bank (save, spend, share) that teaches budgeting and financial categorization from an early age." },
      { name: "Practical Money Skills — Peter Pig's Money Counter", url: "https://www.practicalmoneyskills.com/play/peter_pigs_money_counter", description: "Free online game where kids count, sort, and save virtual money — builds coin recognition and money math." },
    ],
    [
      { name: "The Berenstain Bears' Trouble with Money", url: "", type: "book" },
      { name: "BrainPOP Jr.: Counting Coins", url: "https://jr.brainpop.com/math/money/countingcoins/", type: "video" },
    ],
  ),

  s(nx(), "p17", "g4",
    "Deepen reading comprehension and money math. Learn to make change — a core accounting skill in its simplest form. Practice writing numbers clearly and neatly (accountants' handwriting must be legible). Start learning about wants vs. needs — the earliest form of expense classification. Open a real savings account at a bank and track deposits.",
    ["Reading Comprehension", "Math (Making Change & Word Problems)", "Handwriting (Number Clarity)", "Social Studies (Wants vs. Needs)"],
    [
      { name: "Junior Achievement — Elementary Programs", url: "https://www.juniorachievement.org/", description: "In-school programs teaching financial literacy, work readiness, and entrepreneurship to elementary students." },
      { name: "Open a Kids' Savings Account", url: "", description: "Visit a local bank or credit union to open a real savings account — track deposits and watch interest grow." },
    ],
    [
      { name: "DK Eyewitness: Money", url: "", type: "book" },
      { name: "Millionaire Babies or Bankrupt Brats? by Jim Fay", url: "", type: "book" },
    ],
  ),

  s(nx(), "p17", "g5",
    "Math expands to multiplication and division — the building blocks of all financial calculations. Start keeping a simple budget: income (allowance, gifts) and expenses (toys, treats). Accountants organize financial information; practice by categorizing receipts or creating simple spreadsheets with a parent. Join a math club or competition to build confidence.",
    ["Math (Multiplication & Division)", "Reading (Nonfiction Instructions)", "Basic Budgeting", "Computer Literacy (Spreadsheets Intro)"],
    [
      { name: "My Classroom Economy", url: "https://www.myclassroomeconomy.org/", description: "Free program where classrooms simulate an economy — students earn, budget, save, and pay rent for their desks." },
      { name: "Math Olympiad / Math Kangaroo", url: "https://www.mathkangaroo.org/", description: "International math competition building problem-solving skills through fun, challenging puzzles." },
    ],
    [
      { name: "The Everything Kids' Money Book by Brette Sember", url: "", type: "book" },
      { name: "Biz Kid$ (PBS)", url: "https://bizkids.com/", type: "video" },
    ],
  ),

  s(nx(), "p17", "g6",
    "Develop research and organizational skills — accountants manage large volumes of information. Learn to use simple spreadsheet programs (Google Sheets or Excel) to track a mock budget. Research how businesses in your community make money. Fractions and decimals become critical — money uses decimal notation ($1.25). Start a small entrepreneurial project (lemonade stand, bake sale) with real P&L tracking.",
    ["English Language Arts (Research)", "Math (Fractions & Decimals)", "Intro to Spreadsheets", "Civics (Local Businesses)"],
    [
      { name: "Young Entrepreneurs Academy (YEA!)", url: "https://yeausa.org/", description: "Programs teaching students how to start and run real businesses — including financial management and accounting basics." },
      { name: "Google Sheets for Kids (Free)", url: "https://www.google.com/sheets/about/", description: "Start learning spreadsheets — create simple budgets, track expenses, and build charts with free tools." },
    ],
    [
      { name: "The Kids' Money Book by Jamie Kyle McGillian", url: "", type: "book" },
      { name: "BizWorld", url: "https://bizworld.org/", type: "program" },
    ],
  ),

  s(nx(), "p17", "g7",
    "Math ramps up with pre-algebra — accounting depends on algebraic thinking (solving for unknowns in equations like Assets = Liabilities + Equity). Join a math club or participate in math competitions. Learn to use spreadsheets for more complex tasks: formulas, basic charts, and data organization. Start reading the business section of a newspaper with a parent.",
    ["Math (Pre-Algebra)", "General Science (Data Analysis)", "Computer Skills (Spreadsheets)", "English (Business Reading)"],
    [
      { name: "MathCounts", url: "https://www.mathcounts.org/", description: "National middle school math competition program that builds advanced problem-solving skills essential for accounting." },
      { name: "Stock Market Game", url: "https://www.stockmarketgame.org/", description: "Virtual investing simulation — teams manage a $100,000 portfolio using real market data, learning financial analysis." },
    ],
    [
      { name: "Khan Academy: Personal Finance", url: "https://www.khanacademy.org/college-careers-more/personal-finance", type: "course" },
      { name: "The Motley Fool Investment Guide for Teens", url: "", type: "book" },
    ],
  ),

  s(nx(), "p17", "g8",
    "Take pre-algebra seriously — it's the gateway to all business math. Join or start a business/entrepreneurship club. Participate in the Stock Market Game if your school offers it. Learn about different types of businesses: sole proprietorships, partnerships, and corporations. Accountants work with all of them. Keep a detailed personal budget tracking actual income and expenses.",
    ["Pre-Algebra", "Civics (Business Structures)", "English (Clear Communication)", "Computer Skills (Advanced Spreadsheets)"],
    [
      { name: "DECA (Middle School Division)", url: "https://www.deca.org/middle-school/", description: "Business and entrepreneurship competitions — finance, marketing, and management events for middle schoolers." },
      { name: "Junior Achievement Finance Park", url: "https://www.juniorachievement.org/", description: "Immersive simulation where students manage a household budget — income, expenses, savings, and unexpected costs." },
    ],
    [
      { name: "Accounting for Dummies (Junior Edition Concepts)", url: "", type: "book" },
      { name: "NEFE High School Financial Planning Program", url: "https://www.hsfpp.org/", type: "course" },
    ],
  ),

  s(nx(), "p17", "g9",
    "Take algebra — it sharpens the logical thinking essential for accounting. Join Future Business Leaders of America (FBLA) if your school has a chapter. Start learning about the accounting equation: Assets = Liabilities + Equity. Read annual reports from well-known companies (Apple, Nike, Disney) with a parent to see what real financial statements look like.",
    ["Algebra I", "English (Business Writing)", "Civics / Economics Intro", "Intro to Accounting Concepts"],
    [
      { name: "FBLA Middle School", url: "https://www.fbla.org/", description: "Future Business Leaders of America — middle school division with competitive events in business math and financial literacy." },
      { name: "EverFi — Financial Literacy", url: "https://everfi.com/k-12/financial-education/", description: "Free digital financial literacy courses for middle and high school students covering budgeting, banking, and investing." },
    ],
    [
      { name: "Rich Dad Poor Dad for Teens by Robert Kiyosaki", url: "", type: "book" },
      { name: "Crash Course: Economics", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtPNZwz5_o_5uirJ8gQXnhEO", type: "video" },
    ],
  ),

  s(nx(), "p17", "g10",
    "Take the most advanced math available — algebra and geometry sharpen analytical skills. If your school offers a business, finance, or accounting elective, take it. Start learning basic double-entry bookkeeping with free online resources. Accountants must be detail-oriented; practice proofreading and double-checking your work in all subjects.",
    ["Algebra I / Geometry", "Business Elective (if available)", "English (Technical Writing)", "Computer Applications"],
    [
      { name: "AccountingCoach (Free)", url: "https://www.accountingcoach.com/", description: "Free online accounting courses covering debits and credits, financial statements, and bookkeeping fundamentals." },
      { name: "FBLA — Intro to Financial Math", url: "https://www.fbla.org/", description: "Competitive event testing business math, financial calculations, and accounting principles." },
    ],
    [
      { name: "Khan Academy: Accounting & Financial Statements", url: "https://www.khanacademy.org/economics-finance-domain/core-finance/accounting-and-financial-statements", type: "course" },
      { name: "The Accounting Game: Basic Accounting Fresh from the Lemonade Stand", url: "", type: "book" },
    ],
  ),

  s(nx(), "p17", "g11",
    "Start building a strong academic record — accounting firms look at GPA. Take Algebra II and any business courses offered. Join FBLA and compete in accounting or business math events. Research the CPA pathway: 150 credit hours, Uniform CPA Exam, and experience requirements vary by state. Begin learning about career paths: public accounting (audit, tax), corporate accounting, forensic accounting, and government.",
    ["Algebra II", "Business / Finance Elective", "English (Professional Writing)", "Economics", "Computer Applications (Excel)"],
    [
      { name: "FBLA — High School Competitive Events", url: "https://www.fbla.org/", description: "Compete in accounting, business calculations, and financial statement analysis at regional and national conferences." },
      { name: "AICPA — Start Here, Go Places", url: "https://www.startheregoplaces.com/", description: "AICPA's student site exploring accounting careers, CPA requirements by state, and scholarship opportunities." },
    ],
    [
      { name: "Excel Skills for Business (Coursera — Macquarie University)", url: "https://www.coursera.org/specializations/excel", type: "course" },
      { name: "The CPA Exam for Dummies", url: "", type: "book" },
    ],
  ),

  s(nx(), "p17", "g12",
    "Take Pre-Calculus and any available business/accounting courses. Start learning Excel in depth — pivot tables, VLOOKUP, and financial functions. Accounting is increasingly tech-driven; learn about accounting software (QuickBooks, Xero). Research colleges with strong accounting programs that offer a clear path to 150 credit hours for CPA eligibility.",
    ["Pre-Calculus", "Business / Accounting Elective", "AP Economics (Micro/Macro)", "English (Analytical Writing)", "Computer Science (Excel/Data)"],
    [
      { name: "Deloitte High School Programs", url: "https://www.deloitte.com/", description: "Explore Deloitte's high school internship and shadowing opportunities — Big 4 exposure for aspiring accountants." },
      { name: "QuickBooks Certification (Student)", url: "https://quickbooks.intuit.com/accountants/training-certification/", description: "Free QuickBooks training and certification — practical accounting software skills valued by employers." },
    ],
    [
      { name: "Accounting Made Simple by Mike Piper", url: "", type: "book" },
      { name: "Microsoft Excel — Advanced Formulas (LinkedIn Learning)", url: "https://www.linkedin.com/learning/", type: "course" },
    ],
  ),

  s(nx(), "p17", "g13",
    "The most critical year for college prep. Take AP Calculus and AP Economics. Deepen Excel modeling skills — build financial models from scratch. Shadow a CPA during tax season or at a firm. Research accounting programs: look for schools with strong CPA exam pass rates, Big 4 recruiting pipelines, and integrated 5-year BS/MS programs for the 150-hour requirement.",
    ["AP Calculus AB", "AP Microeconomics / Macroeconomics", "AP Statistics", "English (Professional Communication)", "Business / Finance Elective"],
    [
      { name: "KPMG Future Diversity Leaders", url: "https://www.kpmg.com/", description: "Summer program for high school students from underrepresented backgrounds exploring careers in accounting and consulting." },
      { name: "AICPA Accounting Scholars Program", url: "https://www.aicpa-cima.com/", description: "Scholarship and mentorship programs for high school students pursuing accounting — check AICPA for current offerings." },
    ],
    [
      { name: "Wall Street Prep — Accounting Crash Course", url: "https://www.wallstreetprep.com/", type: "course" },
      { name: "NASBA — CPA Exam Candidate Guide", url: "https://nasba.org/exams/cpaexam/", type: "article" },
    ],
  ),

  s(nx(), "p17", "g14",
    "Apply to universities with strong accounting programs and Big 4 recruiting pipelines. Take AP exams — high scores can earn college credit toward the 150-hour CPA requirement. Continue shadowing CPAs and consider a part-time bookkeeping job or internship at a local firm. Research combined BS/MS accounting programs (5-year tracks). Write compelling application essays about your passion for financial integrity and problem-solving.",
    ["AP Calculus BC", "AP Economics (both)", "AP Statistics", "AP English (College Essays)", "Business / Accounting Elective"],
    [
      { name: "EY College MAP (Mentoring for Access and Persistence)", url: "https://www.ey.com/", description: "College readiness and mentoring program for high school students — some participants explore accounting and business careers." },
      { name: "Local CPA Firm Internship / Shadowing", url: "", description: "Reach out to local CPA firms for spring internship or shadowing opportunities during tax season — invaluable real-world exposure." },
    ],
    [
      { name: "Becker CPA Exam Review (Preview Materials)", url: "https://www.becker.com/", type: "program" },
      { name: "Investopedia", url: "https://www.investopedia.com/", type: "article" },
    ],
  ),

  s(nx(), "p17", "g15",
    "Major in Accounting at a school with strong AACSB accreditation. Core coursework: financial accounting, managerial accounting, auditing, taxation, and accounting information systems. Aim for 150 credit hours (typically a BS + MS or a 5-year integrated program) for CPA eligibility. Join Beta Alpha Psi (accounting honor society). Intern at a Big 4 firm (Deloitte, PwC, EY, KPMG) or a regional firm — internships often lead to full-time offers.",
    ["Financial Accounting", "Managerial Accounting", "Auditing", "Federal Income Taxation", "Accounting Information Systems"],
    [
      { name: "Beta Alpha Psi", url: "https://www.bap.org/", description: "International honor society for accounting, finance, and information systems students — networking, professional development, and recruiting." },
      { name: "Big 4 Summer Leadership Programs", url: "", description: "All Big 4 firms offer sophomore/junior summer programs — early exposure to firm culture, fast-track to internship interviews." },
    ],
    [
      { name: "CPA Exam — AICPA Blueprints", url: "https://www.aicpa-cima.com/resources/article/cpa-exam-blueprints", type: "article" },
      { name: "Becker CPA Review (Student Discount)", url: "https://www.becker.com/", type: "program" },
    ],
  ),

  s(nx(), "p17", "g16",
    "Pursue a Master's in Accounting (MAcc), Master's in Taxation, or MBA with accounting concentration to reach the 150-hour CPA requirement. Take and pass all four CPA exam sections (AUD, BEC, FAR, REG) within the 18-month window. Complete the required work experience under a licensed CPA (typically 1-2 years). Alternatively, a Master's in Forensic Accounting, Information Systems, or Finance opens specialized career paths.",
    ["Advanced Auditing & Assurance", "Corporate Taxation", "Forensic Accounting", "Accounting Research", "CPA Exam Preparation"],
    [
      { name: "AICPA Student Membership", url: "https://www.aicpa-cima.com/", description: "Join AICPA as a student member — access to CPA exam resources, scholarships, and professional networking." },
      { name: "NASBA Candidate Portal", url: "https://nasba.org/", description: "Register for CPA exam sections, track scores, and manage licensing through the National Association of State Boards of Accountancy." },
    ],
    [
      { name: "CPA Exam — Becker / Surgent / Roger Review", url: "https://www.becker.com/", type: "program" },
      { name: "Journal of Accountancy", url: "https://www.journalofaccountancy.com/", type: "article" },
    ],
  ),

  s(nx(), "p17", "g17",
    "A Ph.D. in Accounting is for those pursuing academic careers as accounting professors and researchers. Doctoral programs focus on accounting theory, empirical research methods, and a specialization (financial, managerial, auditing, tax). Alternatively, post-CPA specialized credentials: Certified Fraud Examiner (CFE), Certified Management Accountant (CMA), Certified Internal Auditor (CIA), or Chartered Financial Analyst (CFA). These deepen expertise for executive-level positions.",
    ["Accounting Ph.D. / DBA", "Empirical Research Methods", "Dissertation in Accounting Topic", "Advanced Econometrics", "Teaching Practicum"],
    [
      { name: "AAA — American Accounting Association", url: "https://aaahq.org/", description: "The premier scholarly organization for accounting academics — conferences, journals (The Accounting Review), and doctoral consortium." },
      { name: "AICPA — Specialized Credential Programs", url: "https://www.aicpa-cima.com/", description: "Earn post-CPA credentials: CFF (Forensic), ABV (Business Valuation), CITP (IT) for specialized expertise." },
    ],
    [
      { name: "The Accounting Review (AAA Journal)", url: "https://aaahq.org/Research/Journals/The-Accounting-Review", type: "article" },
      { name: "Ph.D. in Accounting — BYU Accounting Research Rankings", url: "https://www.byuaccounting.net/rankings/", type: "article" },
    ],
  ),

  // ========================================================================
  // p18 — PHYSICAL THERAPIST
  // ========================================================================

  s(nx(), "p18", "g1",
    "Movement is the foundation of physical therapy! At this age, children are natural movers — running, jumping, climbing, and dancing. Encourage all forms of physical play to build strength, coordination, and body awareness. Talk about body parts and how they move. The PT's love of movement starts with joyful, unrestricted physical exploration.",
    ["Gross Motor Skills (Running, Jumping)", "Body Awareness", "Music & Movement", "Social Play"],
    [
      { name: "Sesame Street — Move Your Body", url: "https://sesamestreet.org/", description: "Videos and activities that get young children moving, stretching, and learning about their bodies through fun songs." },
      { name: "Local Gymnastics / Tumbling Classes", url: "", description: "Introductory gymnastics classes for preschoolers build balance, coordination, and body control in a playful environment." },
    ],
    [
      { name: "From Head to Toe by Eric Carle", url: "", type: "book" },
      { name: "Clap Your Hands by Lorinda Bryan Cauley", url: "", type: "book" },
    ],
  ),

  s(nx(), "p18", "g2",
    "Build body awareness and a love of active play. Learn the names of major body parts and joints — future PTs need deep anatomical knowledge that starts here. Play games that involve following movement instructions ('Simon Says touch your knee'). Climbing, swinging, and balancing on playground equipment develop the coordination and spatial awareness that PTs help patients rebuild.",
    ["Physical Movement & Coordination", "Counting (Repetitions)", "Body Part Naming", "Following Movement Instructions"],
    [
      { name: "GoNoodle — Movement Videos", url: "https://www.gonoodle.com/", description: "Free movement and mindfulness videos that get kids dancing, stretching, and moving — used in classrooms nationwide." },
      { name: "YMCA Youth Sports", url: "https://www.ymca.org/", description: "Introductory sports programs like soccer, swimming, and gymnastics that build fundamental movement skills." },
    ],
    [
      { name: "The Busy Body Book by Lizzy Rockwell", url: "", type: "book" },
      { name: "ABC for Me: ABC Yoga by Christiane Engel", url: "", type: "book" },
    ],
  ),

  s(nx(), "p18", "g3",
    "Build reading and math foundations — PTs read medical charts, research studies, and calculate treatment metrics. Continue developing gross motor skills through sports and active play. Learn about bones — how many are in the human body, what they do, and why we need them. Start a 'movement journal' where you draw or write about physical activities you enjoy.",
    ["Reading & Phonics", "Math (Counting & Measuring)", "Science (Human Body Basics)", "Physical Education"],
    [
      { name: "KidsHealth.org — Your Bones & Muscles", url: "https://kidshealth.org/en/kids/bones.html", description: "Free kid-friendly articles about how bones and muscles work together — the anatomy foundation for future PTs." },
      { name: "Local Swimming Lessons", url: "", description: "Swimming develops full-body coordination, strength, and body awareness — many PTs use aquatic therapy with patients." },
    ],
    [
      { name: "The Skeleton Inside You by Philip Balestrino", url: "", type: "book" },
      { name: "BrainPOP Jr.: Bones", url: "https://jr.brainpop.com/health/bodies/bones/", type: "video" },
    ],
  ),

  s(nx(), "p18", "g4",
    "Deepen reading about the human body and how it moves. Learn about muscles — they work in pairs (biceps/triceps) to move bones. Practice measuring: PTs measure range of motion, strength, and progress in precise numbers. Join a youth sports team to understand how the body works in motion, how injuries happen, and how the body heals.",
    ["Reading Comprehension", "Math (Measurement & Data)", "Science (Muscles & Movement)", "Physical Education"],
    [
      { name: "Science Fair — Human Body Project", url: "", description: "Enter a science fair with a project testing flexibility, balance, or how different exercises affect heart rate." },
      { name: "Youth Soccer / Basketball / Gymnastics", url: "", description: "Team sports develop coordination, teamwork, and firsthand experience with how bodies perform and recover from activity." },
    ],
    [
      { name: "DK Eyewitness: Human Body", url: "", type: "book" },
      { name: "BrainPOP: Muscles", url: "https://www.brainpop.com/health/bodysystems/muscles/", type: "video" },
    ],
  ),

  s(nx(), "p18", "g5",
    "Learn about body systems in more depth: skeletal, muscular, and nervous systems. Math foundations — multiplication and division — are used for calculating exercise repetitions, sets, and patient progress. Start learning about nutrition and how food fuels movement. Participate in a sport and pay attention to warm-ups, cool-downs, and injury prevention.",
    ["Life Science (Body Systems)", "Math (Multiplication & Division)", "Health & Nutrition", "Physical Education"],
    [
      { name: "4-H Healthy Living Programs", url: "https://4-h.org/programs/healthy-living/", description: "Youth programs covering fitness, nutrition, and first aid — hands-on health education for aspiring healthcare professionals." },
      { name: "Kids' Yoga Programs", url: "https://www.cosmickids.com/", description: "Yoga for kids builds flexibility, body awareness, and mindfulness — directly relevant to PT practice." },
    ],
    [
      { name: "The Way We Work by David Macaulay", url: "", type: "book" },
      { name: "Operation Ouch! (BBC / YouTube)", url: "https://www.youtube.com/user/operationouch", type: "video" },
    ],
  ),

  s(nx(), "p18", "g6",
    "Expand knowledge of anatomy: learn the major muscle groups and bones of the body. Math now includes fractions and geometry — PTs calculate angles for joint movement and use geometry to analyze gait (walking patterns). Volunteer or participate in community fitness events. Pay attention to how people move differently — observe walking patterns, posture, and athletic form.",
    ["English (Research Writing)", "Math (Fractions & Geometry)", "Life Science (Advanced Anatomy)", "Physical Education"],
    [
      { name: "Science Olympiad — Anatomy & Physiology", url: "https://www.soinc.org/", description: "Competitive event covering body systems including skeletal and muscular — excellent preparation for PT education." },
      { name: "American Red Cross First Aid", url: "https://www.redcross.org/take-a-class/first-aid", description: "Learn basic first aid and how to respond to injuries — foundational skills for any healthcare professional." },
    ],
    [
      { name: "Mystery Science: Human Machine", url: "https://mysteryscience.com/", type: "course" },
      { name: "National Geographic Kids: Human Body", url: "https://kids.nationalgeographic.com/science/article/your-amazing-human-body", type: "article" },
    ],
  ),

  s(nx(), "p18", "g7",
    "Strengthen math skills — pre-algebra and data analysis are essential for PTs who track patient outcomes. Learn detailed anatomy: all major bones, joints, and muscle groups. Join a sports team and learn about injury prevention, stretching, and proper warm-up/cool-down routines. Consider becoming a peer fitness helper or coach for younger children.",
    ["Math (Pre-Algebra & Data)", "Life Science (Human Biology)", "Physical Education", "English (Science Communication)"],
    [
      { name: "American Red Cross Babysitting Course (Age 11+)", url: "https://www.redcross.org/take-a-class/babysitting", description: "Learn basic first aid, injury response, and child care — early healthcare and safety skills." },
      { name: "Local Youth Sports Coaching (Assistant)", url: "", description: "Volunteer as an assistant coach for younger children's sports — learn about movement, motivation, and injury prevention." },
    ],
    [
      { name: "Khan Academy: Health and Medicine", url: "https://www.khanacademy.org/science/health-and-medicine", type: "course" },
      { name: "Crash Course: Anatomy & Physiology", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtOAKed_MxxWBNaPno5h3Zs8", type: "video" },
    ],
  ),

  s(nx(), "p18", "g8",
    "Take the most advanced science available — pre-algebra and life science are critical. Learn the musculoskeletal system in detail: origins, insertions, and actions of major muscles. Pay attention to biomechanics — how bones, muscles, and joints work together. Read about different physical therapy specialties: orthopedics, neurology, pediatrics, sports medicine, and geriatrics.",
    ["Pre-Algebra", "Life Science (Advanced)", "Health / Anatomy Elective", "Physical Education"],
    [
      { name: "HOSA — Future Health Professionals (Middle School)", url: "https://hosa.org/", description: "Health science competitions and leadership development — explore PT and other rehabilitation careers." },
      { name: "Sports Team Trainer Assistant", url: "", description: "Volunteer to help with equipment and observe how athletic trainers prevent and manage sports injuries." },
    ],
    [
      { name: "Visible Body — Human Anatomy Atlas", url: "https://www.visiblebody.com/", type: "program" },
      { name: "APTA — Becoming a PT", url: "https://www.apta.org/your-career/careers-in-physical-therapy/becoming-a-pt", type: "article" },
    ],
  ),

  s(nx(), "p18", "g9",
    "Take algebra and the most advanced life science available. Start learning detailed human anatomy and physiology. Consider volunteering at a hospital, rehabilitation center, or nursing home to see PTs in action. Physical therapy requires strong interpersonal skills — practice clear communication and motivational encouragement with teammates and peers.",
    ["Algebra I", "Life Science / Biology", "Health / Physiology Elective", "English (Interpersonal Communication)"],
    [
      { name: "Medical Explorers Post", url: "https://www.exploring.org/medical/", description: "Hands-on healthcare career exploration for ages 14+ — shadow PTs and other rehabilitation professionals." },
      { name: "Khan Academy: Human Biology", url: "https://www.khanacademy.org/science/biology", type: "course" },
    ],
    [
      { name: "TED-Ed: Health & Medicine", url: "https://ed.ted.com/lessons?category=health", type: "video" },
      { name: "The Body: A Guide for Occupants by Bill Bryson", url: "", type: "book" },
    ],
  ),

  s(nx(), "p18", "g10",
    "Take biology and algebra at the highest level available. Start learning about exercise physiology — how the body responds and adapts to physical activity. Research the PT education pathway: a Doctor of Physical Therapy (DPT) is now the entry-level degree (3 years post-bachelor's). Shadow a PT to see what the day-to-day work actually involves across different settings.",
    ["Honors Biology", "Geometry / Algebra II", "Exercise Science / PE Elective", "English (Research & Writing)", "Health Education"],
    [
      { name: "Sports Medicine Summer Camps", url: "", description: "Many universities offer summer sports medicine or athletic training camps for high school students — hands-on exposure to rehabilitation careers." },
      { name: "Volunteer at a Nursing Home / Rehab Center", url: "", description: "Volunteer at a facility where patients receive physical therapy — observe PTs helping people regain mobility and function." },
    ],
    [
      { name: "APTA — Choosing a DPT Program", url: "https://www.apta.org/your-career/careers-in-physical-therapy", type: "article" },
      { name: "Khan Academy: AP Biology", url: "https://www.khanacademy.org/science/ap-biology", type: "course" },
    ],
  ),

  s(nx(), "p18", "g11",
    "Take Honors Biology and start building a strong science GPA. Join HOSA and compete in health science events. Physical therapy schools are competitive — strong grades now matter. Shadow a PT in at least two different settings (hospital, outpatient clinic, sports medicine, pediatrics). Research undergraduate pre-PT programs and DPT prerequisites.",
    ["Honors Biology", "Algebra II / Geometry", "English (Scientific Communication)", "Health / Anatomy Elective", "Psychology"],
    [
      { name: "HOSA Competitive Events", url: "https://hosa.org/", description: "Compete in health science, medical terminology, and sports medicine events — build knowledge and your resume." },
      { name: "Physical Therapy Shadowing", url: "", description: "Contact local PT clinics and hospitals to shadow practicing physical therapists — most DPT programs require observation hours." },
    ],
    [
      { name: "Exercise Physiology: Theory and Application to Fitness and Performance — Scott Powers", url: "", type: "book" },
      { name: "PTCAS — PT School Prerequisites", url: "https://ptcas.org/", type: "article" },
    ],
  ),

  s(nx(), "p18", "g12",
    "Take AP Biology and Pre-Calculus. Take any available anatomy, physiology, or psychology courses. Start accumulating PT observation hours (aim for 100+ across multiple settings). Research undergraduate programs with strong pre-PT advising or direct-admit DPT programs (3+3 format). Join or start an exercise science / sports medicine club.",
    ["AP Biology", "Pre-Calculus", "Anatomy & Physiology Elective", "Psychology", "English (Technical Writing)"],
    [
      { name: "APTA Student Membership (Pre-PT)", url: "https://www.apta.org/", description: "Join the American Physical Therapy Association as a student — access to resources, mentoring, and PT program information." },
      { name: "Certified Personal Trainer (CPT) — Study", url: "https://www.nasm.org/", description: "Study for a personal training certification (NASM, ACE) — deepens exercise science knowledge while in high school." },
    ],
    [
      { name: "Crash Course: Psychology", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtOPRKzVLY0jJY-uHOH9KVU6", type: "video" },
      { name: "APTA Guide to Physical Therapist Practice", url: "https://www.apta.org/", type: "article" },
    ],
  ),

  s(nx(), "p18", "g13",
    "The most critical year for college preparation. Take AP Biology, AP Chemistry, and AP Calculus. Continue accumulating PT observation hours across different settings (outpatient orthopedics, inpatient rehab, pediatrics, geriatrics). Research undergraduate pre-PT programs and build a strong college list. Prepare for the SAT/ACT — competitive DPT programs value strong test scores.",
    ["AP Biology", "AP Chemistry", "AP Calculus AB", "Anatomy & Physiology", "AP Psychology"],
    [
      { name: "Summer Pre-Health Programs (University-Based)", url: "", description: "Apply to university summer programs like 'Summer Health Professions Education Program' (SHPEP) for pre-health exposure." },
      { name: "Rehabilitation Aide / PT Tech Volunteer", url: "", description: "Volunteer or work part-time as a rehabilitation aide — hands-on experience assisting PTs with patient care." },
    ],
    [
      { name: "PTCAS Directory of DPT Programs", url: "https://ptcas.org/program-directory/", type: "article" },
      { name: "Coursera: Science of Exercise (University of Colorado)", url: "https://www.coursera.org/learn/science-exercise", type: "course" },
    ],
  ),

  s(nx(), "p18", "g14",
    "Apply to universities with strong pre-PT or exercise science programs. Complete AP exams — high scores earn college credit for prerequisites. Some schools offer 3+3 accelerated DPT programs where you transition directly from undergrad to the doctoral program. Continue observation hours (aim for 150+ total). Write compelling essays about your passion for helping people regain mobility.",
    ["AP Biology (Exam)", "AP Calculus BC", "AP Psychology", "Anatomy & Physiology (Exam)", "English (College Essays)"],
    [
      { name: "Apply to 3+3 Accelerated DPT Programs", url: "", description: "Research and apply to combined programs that fast-track from bachelor's to DPT in 6 years instead of 7." },
      { name: "Senior Capstone: Movement Science Project", url: "", description: "Design a project analyzing human movement — gait analysis, sports performance, or injury prevention research." },
    ],
    [
      { name: "NSCA — Strength & Conditioning Resources", url: "https://www.nsca.com/", type: "article" },
      { name: "American Council on Exercise (ACE)", url: "https://www.acefitness.org/", type: "article" },
    ],
  ),

  s(nx(), "p18", "g15",
    "Major in Exercise Science, Kinesiology, Biology, or Health Sciences on a pre-PT track. Complete all DPT prerequisites: biology, chemistry, physics, anatomy & physiology, psychology, and statistics. Maintain 3.5+ GPA. Shadow PTs across multiple specialties. Take the GRE. Apply to DPT programs through PTCAS during senior year.",
    ["Anatomy & Physiology I/II", "Exercise Physiology", "Biomechanics / Kinesiology", "Physics with Lab", "Statistics"],
    [
      { name: "Pre-Physical Therapy Club", url: "", description: "Join your university's pre-PT club — networking, DPT application workshops, and group observation hours." },
      { name: "Physical Therapy Aide / Rehab Tech (Part-Time)", url: "", description: "Work part-time as a PT aide in a clinic — hands-on patient interaction and clinical experience while earning your degree." },
    ],
    [
      { name: "PTCAS — PT Centralized Application Service", url: "https://ptcas.org/", type: "program" },
      { name: "GRE Prep — ETS Official Materials", url: "https://www.ets.org/gre/", type: "program" },
    ],
  ),

  s(nx(), "p18", "g16",
    "Doctor of Physical Therapy (DPT) program: 3 years of graduate study. Year 1: foundational sciences — advanced anatomy, physiology, neuroscience, biomechanics, and pathology. Year 2: clinical sciences — orthopedics, neurology, cardiopulmonary, pediatrics, and therapeutic interventions. Year 3: full-time clinical internships across multiple settings. Pass the National Physical Therapy Examination (NPTE) to become a licensed PT.",
    ["Advanced Anatomy & Neuroscience", "Therapeutic Exercise", "Orthopedic & Neurological PT", "Clinical Reasoning & Diagnosis", "Clinical Internships"],
    [
      { name: "APTA — DPT Student Assembly", url: "https://www.apta.org/", description: "Join the national PT student community — resources, advocacy, and networking with peers across the country." },
      { name: "Clinical Residency Preparation", url: "", description: "Research post-graduation residency programs in your specialty of interest (orthopedics, neurology, sports, pediatrics)." },
    ],
    [
      { name: "NPTE Prep — Scorebuilders / TherapyEd", url: "https://www.scorebuilders.com/", type: "program" },
      { name: "JOSPT — Journal of Orthopaedic & Sports Physical Therapy", url: "https://www.jospt.org/", type: "article" },
    ],
  ),

  s(nx(), "p18", "g17",
    "Post-DPT options: 1) Clinical residency in a specialty (orthopedics, neurology, sports, pediatrics, geriatrics, women's health) — typically 1 year — followed by board certification (OCS, NCS, SCS, etc.). 2) Ph.D. in Rehabilitation Science, Biomechanics, or Neuroscience for academic/research careers. 3) Fellowship in advanced subspecialties (manual therapy, sports PT, critical care). Board-certified clinical specialists are recognized as experts and often command higher salaries.",
    ["Specialty: Advanced Clinical Practice", "Board Certification Preparation", "Research Methods (Ph.D. track)", "Teaching & Clinical Mentoring", "Healthcare Leadership"],
    [
      { name: "APTA Specialist Certification (ABPTS)", url: "https://specialization.apta.org/", description: "Become a board-certified clinical specialist — OCS (orthopedics), NCS (neurology), SCS (sports), and more." },
      { name: "Foundation for Physical Therapy Research Grants", url: "https://foundation4pt.org/", description: "Funding for PT researchers pursuing Ph.D. work — scholarships and research grants available." },
    ],
    [
      { name: "Physical Therapy & Rehabilitation Journal (PTJ)", url: "https://academic.oup.com/ptj", type: "article" },
      { name: "APTA — Continuing Education Resources", url: "https://www.apta.org/", type: "article" },
    ],
  ),

  // ========================================================================
  // p19 — PHARMACIST
  // ========================================================================

  s(nx(), "p19", "g1",
    "Pharmacy begins with curiosity about how things work and a desire to help others feel better. At this age, nurture caring instincts — play 'pharmacy' or 'doctor' and learn about taking medicine safely. Counting pills (candy or beads) into containers builds fine motor skills and introduces measurement concepts. The pharmacist's precision and compassion both start here.",
    ["Counting & Sorting", "Fine Motor Skills (Pouring/Scooping)", "Health Awareness", "Social-Emotional Skills (Caring)"],
    [
      { name: "Sesame Street — Health & Doctor Visits", url: "https://sesamestreet.org/", description: "Episodes and activities about staying healthy, visiting the doctor, and taking medicine safely." },
      { name: "Pretend Play: Pharmacy / Doctor", url: "", description: "Set up a pretend pharmacy with empty (safe) containers, play money, and a counting tray — early role-play of the profession." },
    ],
    [
      { name: "Corduroy Goes to the Doctor", url: "", type: "book" },
      { name: "The Berenstain Bears Go to the Doctor", url: "", type: "book" },
    ],
  ),

  s(nx(), "p19", "g2",
    "Build counting skills and scientific curiosity. Learn about medicine safety — who gives medicine, when we take it, and why we never take it without an adult. Practice careful counting and measuring with water or sand. Pharmacists measure and count with extreme precision — these early skills matter. Learn about different types of helpers in healthcare.",
    ["Counting & Measuring", "Science Exploration", "Health & Safety", "Following Instructions Precisely"],
    [
      { name: "Poison Control — Kids Education", url: "https://www.poison.org/", description: "Age-appropriate resources teaching medication safety — understanding that medicine helps but must be used carefully." },
      { name: "American Pharmacists Association — Kids", url: "https://www.pharmacist.com/", description: "Educational materials about what pharmacists do and how they help keep communities healthy." },
    ],
    [
      { name: "The Magic School Bus: Inside the Human Body", url: "", type: "book" },
      { name: "PBS Kids: Sid the Science Kid — Health Episodes", url: "https://pbskids.org/sid/health", type: "video" },
    ],
  ),

  s(nx(), "p19", "g3",
    "Build strong reading and math skills — pharmacists read prescriptions, drug monographs, and calculate precise dosages. Practice careful measurement with real measuring spoons and cups — accuracy matters. Learn about the five senses and how the body responds to different inputs. Start learning about plants and how some medicines come from nature.",
    ["Reading & Phonics", "Math (Addition & Measurement)", "Science (Plants & the Body)", "Handwriting (Precision)"],
    [
      { name: "KidsHealth.org — Medicines & Safety", url: "https://kidshealth.org/en/kids/meds/", description: "Free articles explaining what medicines are, how they work, and how to use them safely." },
      { name: "U.S. Botanic Garden — Medicinal Plants", url: "https://www.usbg.gov/", description: "Explore how plants have been used as medicine throughout history — many modern drugs originated from plants." },
    ],
    [
      { name: "A Day with a Pharmacist (Welcome Books)", url: "", type: "book" },
      { name: "BrainPOP Jr.: Medicine", url: "https://jr.brainpop.com/health/bodies/goingtothedoctor/", type: "video" },
    ],
  ),

  s(nx(), "p19", "g4",
    "Deepen reading comprehension — pharmacists must read and understand complex drug information. Practice precise measurement and recording of data. Learn about human body systems: digestive, circulatory, respiratory. Pharmacists need to understand how drugs travel through and affect the body. Start a science notebook to record observations carefully.",
    ["Reading Comprehension", "Math (Measurement & Data)", "Science (Body Systems)", "Handwriting (Neat Record-Keeping)"],
    [
      { name: "National Geographic Kids: Human Body", url: "https://kids.nationalgeographic.com/science/article/your-amazing-human-body", description: "Interactive articles about body systems — understanding the terrain where medicines work." },
      { name: "Science Fair — Drug Safety or Body Project", url: "", description: "Design a science fair project about handwashing effectiveness, how medicines dissolve, or body systems." },
    ],
    [
      { name: "DK Eyewitness: Human Body", url: "", type: "book" },
      { name: "BrainPOP: Body Systems", url: "https://www.brainpop.com/health/bodysystems/", type: "video" },
    ],
  ),

  s(nx(), "p19", "g5",
    "Math expands to multiplication, division, and fractions — pharmacists use these daily for dosage calculations. Learn about chemistry basics: what things are made of at the molecular level. Study how the digestive system processes food and medicine. Pay attention to labels, ingredients, and measurements on household products — pharmacists are detail-oriented label readers.",
    ["Math (Multiplication & Fractions)", "Science (Chemistry Intro)", "Reading (Following Instructions)", "Health Education"],
    [
      { name: "4-H Science Programs", url: "https://4-h.org/programs/stem/", description: "Hands-on STEM activities including chemistry experiments — foundational science for future pharmacists." },
      { name: "Reading Medicine Labels Activity", url: "https://www.fda.gov/", description: "Practice reading over-the-counter medicine labels with a parent — learn about active ingredients, dosing, and warnings." },
    ],
    [
      { name: "The Everything Kids' Science Experiments Book", url: "", type: "book" },
      { name: "Operation Ouch! (BBC / YouTube)", url: "https://www.youtube.com/user/operationouch", type: "video" },
    ],
  ),

  s(nx(), "p19", "g6",
    "Develop research skills — pharmacists must stay current with new drugs and research. Strengthen math foundations: fractions and percentages are used for calculating concentrations and dosages. Learn about chemistry: elements, compounds, and how things dissolve. Explore how medicines work: some block pain signals, some kill bacteria, some replace missing body chemicals (like insulin).",
    ["English (Research)", "Math (Fractions & Percentages)", "Science (Chemistry & Biology)", "Health & Safety"],
    [
      { name: "Science Olympiad — Chemistry / Biology Events", url: "https://www.soinc.org/", description: "Competitive events in chemistry and biology — excellent preparation for pharmaceutical sciences." },
      { name: "American Chemical Society — Kids Zone", url: "https://www.acs.org/education/whatischemistry/adventures-in-chemistry.html", description: "Free chemistry activities, games, and experiments for elementary and middle school students." },
    ],
    [
      { name: "Mystery Science: Chemical Reactions", url: "https://mysteryscience.com/", type: "course" },
      { name: "National Geographic Kids: Chemistry", url: "https://kids.nationalgeographic.com/science/", type: "article" },
    ],
  ),

  s(nx(), "p19", "g7",
    "Math ramps up — pre-algebra and data analysis are essential for pharmaceutical calculations. Take science seriously, especially chemistry and biology. Learn about the metric system — pharmacists use milligrams, milliliters, and micrograms precisely. Join a science or health club. Understand that a tiny error in pharmacy can be life-threatening — this is why pharmacists are meticulous.",
    ["Math (Pre-Algebra)", "General Science (Chemistry Focus)", "Health Education", "English (Precision in Writing)"],
    [
      { name: "Science Buddies — Chemistry Projects", url: "https://www.sciencebuddies.org/", description: "Hands-on chemistry experiments and science fair projects — build lab skills and scientific thinking." },
      { name: "HOSA — Middle School Health Science", url: "https://hosa.org/", description: "Explore health science careers including pharmacy through HOSA's middle school programs and competitions." },
    ],
    [
      { name: "Khan Academy: Chemistry", url: "https://www.khanacademy.org/science/chemistry", type: "course" },
      { name: "The Disappearing Spoon (Young Readers) — Sam Kean", url: "", type: "book" },
    ],
  ),

  s(nx(), "p19", "g8",
    "Take pre-algebra seriously — it's the gateway to pharmaceutical math. Learn about the periodic table and chemical reactions. Explore pharmacology basics: how drugs interact with the body (pharmacokinetics and pharmacodynamics simplified). Research different pharmacy careers: community (retail), hospital, clinical, research, industry, and nuclear pharmacy.",
    ["Pre-Algebra", "Physical Science (Chemistry)", "Life Science (Biology)", "English (Technical Communication)"],
    [
      { name: "HOSA — Future Health Professionals (Middle School)", url: "https://hosa.org/", description: "Pharmacy science events and health career exploration — build knowledge and meet like-minded peers." },
      { name: "Local Pharmacy Visit & Interview", url: "", description: "Visit a local pharmacy and ask the pharmacist about their work — see the profession in action and ask questions." },
    ],
    [
      { name: "Crash Course: Chemistry", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtPHzzYuWy6fYEaX9mQQ8oGr", type: "video" },
      { name: "AACP — Pharmacy Career Information", url: "https://www.aacp.org/resource/pharmacy-career-information", type: "article" },
    ],
  ),

  s(nx(), "p19", "g9",
    "Take algebra and the most advanced science available. Start learning organic and biochemistry concepts — these are the foundations of pharmacology. Join HOSA or a science club. Read about the drug development process: how new medicines are discovered, tested in clinical trials, and approved. Pharmacists are experts in this entire pipeline.",
    ["Algebra I", "Life Science / Biology", "English (Scientific Reading)", "Health / Chemistry Elective"],
    [
      { name: "Medical Explorers Post — Pharmacy Focus", url: "https://www.exploring.org/medical/", description: "Hands-on career exploration with pharmacy rotations — shadow pharmacists in different practice settings." },
      { name: "Khan Academy: Biology & Chemistry", url: "https://www.khanacademy.org/science/biology", type: "course" },
    ],
    [
      { name: "TED-Ed: How Do Pain Relievers Work?", url: "https://ed.ted.com/", type: "video" },
      { name: "The Poisoner's Handbook — Deborah Blum (Young Readers)", url: "", type: "book" },
    ],
  ),

  s(nx(), "p19", "g10",
    "Take the most advanced science and math available — Honors Biology, Algebra, or Geometry. Research the Pharm.D. pathway: it's now the entry-level pharmacy degree (typically 6-8 years including prerequisites + 4 years professional). Shadow a pharmacist in different settings (retail, hospital, clinical). Pharmacy schools are competitive — strong grades now create options later.",
    ["Honors Biology", "Geometry / Algebra II", "Chemistry (Intro)", "English (Research & Communication)", "Health Science Elective"],
    [
      { name: "Pharmacy Summer Camp (University-Based)", url: "", description: "Many pharmacy schools offer summer camps for high schoolers — hands-on compounding, patient counseling, and lab activities." },
      { name: "Volunteer at a Hospital Pharmacy", url: "", description: "Some hospital pharmacies accept student volunteers — observe how pharmacists work alongside doctors and nurses." },
    ],
    [
      { name: "Pharmacy Technician — Study Materials", url: "https://www.ptcb.org/", type: "program" },
      { name: "Khan Academy: AP Chemistry", url: "https://www.khanacademy.org/science/ap-chemistry-beta", type: "course" },
    ],
  ),

  s(nx(), "p19", "g11",
    "Take Honors Biology and start a strong science GPA. Join HOSA and compete in pharmacy science or medical terminology events. Take Chemistry — it's the subject most central to pharmacy. Research pharmacy school prerequisites and consider becoming a pharmacy technician while in high school (some states allow at 17-18). Shadow pharmacists in retail and hospital settings.",
    ["Honors Biology", "Chemistry", "Algebra II", "English (Professional Communication)", "Health Science / Anatomy Elective"],
    [
      { name: "Pharmacy Technician Training (High School)", url: "https://www.ptcb.org/", description: "Study for the Pharmacy Technician Certification Board (PTCB) exam — work as a pharm tech during college for income and experience." },
      { name: "HOSA — Pharmacy Science Competition", url: "https://hosa.org/", description: "Compete in HOSA pharmacy science events — test your knowledge of drug names, classifications, and pharmacy calculations." },
    ],
    [
      { name: "Pharmacy Calculations — Tech Prep Materials", url: "", type: "book" },
      { name: "AACP — Pharmacy School Admission Requirements", url: "https://www.aacp.org/", type: "article" },
    ],
  ),

  s(nx(), "p19", "g12",
    "Take AP Biology and AP Chemistry — strong performance here directly prepares you for pharmacy school prerequisites. If available, take AP Statistics (useful for interpreting drug research). Continue shadowing pharmacists across settings. Research Pharm.D. programs and look for early assurance or '0-6' direct-entry programs that admit students straight from high school.",
    ["AP Biology", "AP Chemistry", "Pre-Calculus", "AP Statistics (useful)", "English (Scientific Writing)"],
    [
      { name: "Walgreens / CVS Pharmacy Shadowing", url: "", description: "Contact local pharmacy chains about student observation opportunities — understand community pharmacy practice firsthand." },
      { name: "PharmCAS — Research Programs Early", url: "https://www.pharmcas.org/", description: "Explore pharmacy programs, prerequisites, and application requirements through the centralized application service." },
    ],
    [
      { name: "Coursera: Drug Development (UC San Diego)", url: "https://www.coursera.org/learn/drug-development", type: "course" },
      { name: "Drugs: From Discovery to Approval — Rick Ng", url: "", type: "book" },
    ],
  ),

  s(nx(), "p19", "g13",
    "The most critical year for college preparation. Take AP Biology, AP Chemistry, and AP Calculus. Research 0-6 direct-entry Pharm.D. programs and pre-pharmacy undergraduate tracks. Shadow at least two different types of pharmacists (community, hospital, clinical specialist). Pharmacy school is competitive — excellent grades and test scores are essential. Consider getting pharmacy technician certification.",
    ["AP Biology", "AP Chemistry", "AP Calculus AB", "Anatomy & Physiology", "English (Professional Writing)"],
    [
      { name: "Pharmacy Technician Certification (PTCB)", url: "https://www.ptcb.org/", description: "Get nationally certified as a pharmacy technician — work part-time in a pharmacy for hands-on experience and income." },
      { name: "Summer Pharmacy Institute (University-Based)", url: "", description: "Apply to summer pharmacy programs at universities — compounding labs, patient counseling simulations, and faculty mentorship." },
    ],
    [
      { name: "Top 200 Drugs (Flashcard Study)", url: "https://www.pharmacy-tech-study.com/", type: "program" },
      { name: "PharmCAS School Directory", url: "https://www.pharmcas.org/", type: "article" },
    ],
  ),

  s(nx(), "p19", "g14",
    "Apply to universities with strong pre-pharmacy tracks or direct-entry 0-6 Pharm.D. programs. Complete AP exams — high scores earn college credit toward prerequisites. If pursuing the 0-6 route, this year determines your admission to the full program. Continue working as a pharmacy technician if possible. Write compelling essays about your passion for medication safety and patient care.",
    ["AP Biology (Exam)", "AP Chemistry (Exam)", "AP Calculus BC", "Anatomy & Physiology", "English (College Essays)"],
    [
      { name: "Apply to 0-6 Direct-Entry Pharm.D. Programs", url: "", description: "Research and apply to programs that guarantee pharmacy school admission from day one of undergrad — saves time and stress." },
      { name: "Pharmacy Tech Work Experience", url: "", description: "Continue working or interning as a pharmacy technician — real pharmacy experience is highly valued by admissions committees." },
    ],
    [
      { name: "PCAT Prep Materials (if required by programs)", url: "", type: "program" },
      { name: "FDA — Drug Information for Students", url: "https://www.fda.gov/drugs", type: "article" },
    ],
  ),

  s(nx(), "p19", "g15",
    "Pre-pharmacy track: typically 2-3 years of prerequisites (biology, general chemistry, organic chemistry, biochemistry, microbiology, anatomy & physiology, physics, calculus, statistics). Maintain 3.3+ GPA. Take the PCAT if required by target schools. Apply through PharmCAS. Many students earn a B.S. in Pharmaceutical Sciences, Biology, or Chemistry before entering the Pharm.D. program.",
    ["Organic Chemistry I/II", "Biochemistry", "Microbiology", "Anatomy & Physiology", "Calculus & Statistics"],
    [
      { name: "Pre-Pharmacy Club / APhA-ASP Chapter", url: "https://www.pharmacist.com/", description: "Join the American Pharmacists Association student chapter — networking, patient outreach events, and leadership." },
      { name: "Pharmacy Technician (Part-Time)", url: "", description: "Work as a certified pharmacy technician — hands-on experience that strengthens applications and builds practical skills." },
    ],
    [
      { name: "PharmCAS — Pharmacy College Application Service", url: "https://www.pharmcas.org/", type: "program" },
      { name: "PCAT Prep — Kaplan / Dr. Collins", url: "", type: "program" },
    ],
  ),

  s(nx(), "p19", "g16",
    "Doctor of Pharmacy (Pharm.D.): 4-year professional program. Year 1-2: pharmaceutical sciences — pharmacology, medicinal chemistry, pharmaceutics, and pathophysiology. Year 3: advanced therapeutics, patient care skills, and pharmacy law. Year 4: full-time clinical rotations (APPEs) in community, hospital, ambulatory care, and specialty settings. Pass NAPLEX (licensing exam) and MPJE (law exam) to become a licensed pharmacist.",
    ["Pharmacology & Therapeutics", "Medicinal Chemistry", "Pharmacy Practice & Law", "Patient Counseling", "Clinical Rotations (APPEs)"],
    [
      { name: "APhA-ASP — Patient Care Projects", url: "https://www.pharmacist.com/", description: "Lead community health initiatives — immunization clinics, medication therapy management, and health screenings." },
      { name: "Industry Pharmacist Internships (Pfizer, Merck, etc.)", url: "", description: "Summer internships at pharmaceutical companies, regulatory agencies (FDA), or managed care organizations." },
    ],
    [
      { name: "NAPLEX Prep — RxPrep / PassPharmacy", url: "https://www.rxprep.com/", type: "program" },
      { name: "ASHP — Residency Information", url: "https://www.ashp.org/", type: "article" },
    ],
  ),

  s(nx(), "p19", "g17",
    "Post-Pharm.D. options: 1) PGY1 Pharmacy Residency (1 year) — general clinical training, often required for hospital positions. 2) PGY2 Specialty Residency (1 additional year) — critical care, oncology, pediatrics, infectious diseases, psychiatry, etc. 3) Fellowship (1-3 years) — pharmaceutical industry, research, or academia. 4) Ph.D. in Pharmaceutical Sciences for drug discovery/research. Board Certification (BCPS, BCOP, etc.) validates advanced expertise.",
    ["PGY1/PGY2 Residency Training", "Specialty: Advanced Pharmacotherapy", "Research Methods (Ph.D./Fellowship)", "Board Certification Preparation", "Clinical Teaching & Precepting"],
    [
      { name: "ASHP Residency Matching Program", url: "https://www.ashp.org/", description: "Match to PGY1 and PGY2 pharmacy residency programs nationwide — the path to clinical and specialty pharmacy practice." },
      { name: "Board of Pharmacy Specialties (BPS)", url: "https://www.bpsweb.org/", description: "Become board certified in a specialty: BCPS (pharmacotherapy), BCOP (oncology), BCCCP (critical care), and more." },
    ],
    [
      { name: "American Journal of Health-System Pharmacy (AJHP)", url: "https://academic.oup.com/ajhp", type: "article" },
      { name: "FDA — Drug Approvals and Databases", url: "https://www.fda.gov/drugs", type: "article" },
    ],
  ),

  // ========================================================================
  // p20 — ENVIRONMENTAL SCIENTIST
  // ========================================================================

  s(nx(), "p20", "g1",
    "Environmental science begins with wonder and love for nature! At this age, nurture curiosity about the outdoors — collect leaves, watch bugs, splash in puddles, and dig in dirt. Plant a seed and watch it grow. Talk about weather, seasons, and the sun. Every environmental scientist started as a child who loved being outside and asking 'why?' about the natural world.",
    ["Nature Exploration", "Counting (Leaves, Rocks, Bugs)", "Weather Awareness", "Art (Drawing Nature)"],
    [
      { name: "National Wildlife Federation — Ranger Rick Jr.", url: "https://rangerrick.org/", description: "Magazine and activities for young children featuring animals, nature, and outdoor exploration." },
      { name: "Nature Scavenger Hunts", url: "", description: "Create simple outdoor scavenger hunts — find something green, something rough, a bug, a bird — building observation skills." },
    ],
    [
      { name: "The Tiny Seed by Eric Carle", url: "", type: "book" },
      { name: "Tap the Magic Tree by Christie Matheson", url: "", type: "book" },
    ],
  ),

  s(nx(), "p20", "g2",
    "Deepen the connection with nature. Plant a garden together — even a single pot on a windowsill teaches about growth, water, sunlight, and soil. Observe and record weather daily (sunny, cloudy, rainy). Learn about habitats: where do different animals live and why? Sort recyclables at home — the earliest lesson in environmental stewardship.",
    ["Science (Plants & Animals)", "Counting & Measuring (Garden)", "Weather Observation", "Responsibility (Recycling)"],
    [
      { name: "EPA — Planet Protectors Club", url: "https://www.epa.gov/students", description: "Free activities and resources teaching young children about recycling, conservation, and protecting the planet." },
      { name: "Local Nature Center / Botanical Garden", url: "https://www.publicgardens.org/", description: "Visit local nature centers and gardens — many have children's programs about plants, insects, and ecosystems." },
    ],
    [
      { name: "Compost Stew by Mary McKenna Siddals", url: "", type: "book" },
      { name: "The Earth Book by Todd Parr", url: "", type: "book" },
    ],
  ),

  s(nx(), "p20", "g3",
    "Build reading and math skills — environmental scientists read research and analyze data. Learn about animal life cycles: butterfly metamorphosis, frog development, seed to plant. Start a nature journal: draw and write about what you observe outside. Participate in simple citizen science — count birds at a feeder or observe the moon's phases.",
    ["Reading & Phonics", "Math (Counting & Measuring)", "Science (Life Cycles & Habitats)", "Writing (Nature Journal)"],
    [
      { name: "Cornell Lab — FeederWatch for Kids", url: "https://feederwatch.org/", description: "Count birds at a feeder and contribute to real scientific research — citizen science for young children." },
      { name: "National Geographic Kids — Animals", url: "https://kids.nationalgeographic.com/animals/", description: "Explore animals, habitats, and ecosystems through photos, videos, and interactive articles." },
    ],
    [
      { name: "The Watcher: Jane Goodall's Life with the Chimps by Jeanette Winter", url: "", type: "book" },
      { name: "BrainPOP Jr.: Habitats", url: "https://jr.brainpop.com/science/habitats/", type: "video" },
    ],
  ),

  s(nx(), "p20", "g4",
    "Deepen reading comprehension with non-fiction about nature and ecosystems. Learn about the water cycle — evaporation, condensation, precipitation — a core concept in environmental science. Start a small compost bin or worm farm to learn about decomposition and soil health. Practice measurement: rainfall, temperature, plant growth. Environmental scientists are data collectors from the start.",
    ["Reading Comprehension", "Math (Measurement & Data)", "Science (Water Cycle & Ecosystems)", "Art (Nature Sketching)"],
    [
      { name: "Project Learning Tree", url: "https://www.plt.org/", description: "Environmental education curriculum with hands-on activities about forests, wildlife, water, and sustainability." },
      { name: "Start a Backyard Compost Bin", url: "https://www.epa.gov/recycle/composting-home", description: "Build a compost bin — learn about decomposition, soil science, and reducing waste through hands-on experience." },
    ],
    [
      { name: "DK Eyewitness: Weather", url: "", type: "book" },
      { name: "BrainPOP: Water Cycle", url: "https://www.brainpop.com/science/earthsystem/watercycle/", type: "video" },
    ],
  ),

  s(nx(), "p20", "g5",
    "Science deepens — learn about ecosystems, food chains, and how energy flows through nature. Math skills (multiplication, division) are used to analyze environmental data. Start learning about climate and weather patterns. Participate in a community cleanup or tree planting. Visit a local river, lake, or ocean and learn about water quality testing.",
    ["Life Science (Ecosystems)", "Math (Multiplication & Division)", "Earth Science (Weather & Climate)", "Civics (Community Service)"],
    [
      { name: "4-H Environmental Science Programs", url: "https://4-h.org/programs/environmental-science/", description: "Hands-on projects in ecology, water quality, forestry, and wildlife — develop real field science skills." },
      { name: "Earth Force — Environmental Problem Solving", url: "https://earthforce.org/", description: "Program where students identify and solve local environmental problems using scientific investigation." },
    ],
    [
      { name: "One Well: The Story of Water on Earth by Rochelle Strauss", url: "", type: "book" },
      { name: "Crash Course Kids: Earth Science", url: "https://www.youtube.com/playlist?list=PLhz12vamHOnZQeDXNV2Z2W4PE7s86SBp3", type: "video" },
    ],
  ),

  s(nx(), "p20", "g6",
    "Expand research skills — assign a research project on an environmental topic (endangered species, renewable energy, pollution). Strengthen math foundations: fractions and geometry are used in environmental mapping and analysis. Learn about natural resources: renewable vs. non-renewable, and what sustainability means. Participate in a citizen science project with real scientists.",
    ["English (Research Writing)", "Math (Fractions & Geometry)", "Earth Science (Natural Resources)", "Civics (Environmental Issues)"],
    [
      { name: "SciStarter — Citizen Science Projects", url: "https://scistarter.org/", description: "Find real citizen science projects to join — from tracking monarch butterflies to testing local water quality." },
      { name: "Science Olympiad — Ecology / Meteorology Events", url: "https://www.soinc.org/", description: "Competitive events covering ecology, climate, and earth science — build deep environmental science knowledge." },
    ],
    [
      { name: "Tracking Trash: Flotsam, Jetsam, and the Science of Ocean Motion by Loree Griffin Burns", url: "", type: "book" },
      { name: "Mystery Science: Earth & Space", url: "https://mysteryscience.com/", type: "course" },
    ],
  ),

  s(nx(), "p20", "g7",
    "Math ramps up with pre-algebra — environmental scientists use math for modeling and data analysis. Deepen earth science knowledge: geology, atmospheric science, and oceanography. Join an environmental club or start a school recycling program. Participate in a local stream clean-up or tree planting. Learn about climate change — the defining environmental challenge of this generation.",
    ["Math (Pre-Algebra & Data)", "Earth Science (Geology & Climate)", "English (Science Communication)", "Civics (Environmental Advocacy)"],
    [
      { name: "GLOBE Program", url: "https://www.globe.gov/", description: "International science program where students collect environmental data used by NASA and NOAA scientists worldwide." },
      { name: "NOAA — Ocean Explorer for Kids", url: "https://oceanexplorer.noaa.gov/edu/welcome.html", description: "Explore ocean science through interactive maps, videos, and lesson plans from ocean research expeditions." },
    ],
    [
      { name: "Khan Academy: Earth Science", url: "https://www.khanacademy.org/science/middle-school-earth-and-space-science", type: "course" },
      { name: "The Boy Who Harnessed the Wind (Young Readers Edition) by William Kamkwamba", url: "", type: "book" },
    ],
  ),

  s(nx(), "p20", "g8",
    "Take the most advanced science available — earth science, pre-algebra, and life science. Learn about climate systems, weather patterns, and how human activity affects the planet. Start following environmental news and science. Participate in a middle school science fair with an environmental project (water quality testing, soil analysis, energy efficiency).",
    ["Pre-Algebra", "Earth & Environmental Science", "English (Science Reading)", "Computer Skills (Data Analysis)"],
    [
      { name: "EPA — Student Resources", url: "https://www.epa.gov/students", description: "Resources for middle schoolers covering air, water, climate, and waste — plus ideas for environmental action projects." },
      { name: "NASA Climate Kids", url: "https://climatekids.nasa.gov/", description: "Interactive games, videos, and articles explaining climate science in an engaging, accessible way." },
    ],
    [
      { name: "Crash Course: Ecology", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtNdTKZkV_GiIYXpV9w4WxbX", type: "video" },
      { name: "Silent Spring (Young Readers) — Rachel Carson", url: "", type: "book" },
    ],
  ),

  s(nx(), "p20", "g9",
    "Take algebra and the most advanced life/earth science available. Start learning about environmental chemistry — how pollutants move through air, water, and soil. Join or start an environmental club. Research different environmental science careers: field scientist, lab researcher, policy analyst, conservationist, sustainability consultant, environmental engineer.",
    ["Algebra I", "Life Science / Biology", "Earth Science", "English (Research & Advocacy)"],
    [
      { name: "The Nature Conservancy — Youth Programs", url: "https://www.nature.org/en-us/about-us/who-we-are/our-people/youth-programs/", description: "Programs connecting young people to conservation work — internships, leadership programs, and field experiences." },
      { name: "Sierra Club — Youth Outings", url: "https://www.sierraclub.org/", description: "Outdoor adventures and environmental advocacy opportunities for teens through the nation's oldest environmental organization." },
    ],
    [
      { name: "TED-Ed: Earth School", url: "https://ed.ted.com/earth-school", type: "video" },
      { name: "World Without Fish by Mark Kurlansky", url: "", type: "book" },
    ],
  ),

  s(nx(), "p20", "g10",
    "Take the most advanced science available — Honors Biology, Earth Science, or Chemistry. Start learning about environmental data analysis — how scientists measure pollution, track wildlife populations, and model climate change. Participate in a citizen science project or environmental internship. Research colleges with strong environmental science programs.",
    ["Honors Biology", "Algebra / Geometry", "Earth Science / Chemistry", "English (Scientific Communication)", "Computer Skills (Data)"],
    [
      { name: "Student Conservation Association (SCA)", url: "https://www.thesca.org/", description: "Conservation service programs for high school students — build trails, restore habitats, and protect public lands." },
      { name: "Earthwatch Teen Expeditions", url: "https://earthwatch.org/expeditions", description: "Join real scientific research expeditions — work alongside scientists on climate change, wildlife, and conservation projects." },
    ],
    [
      { name: "Google Earth Engine (Explore)", url: "https://earthengine.google.com/", type: "program" },
      { name: "Khan Academy: Environmental Science", url: "https://www.khanacademy.org/science/ap-college-environmental-science", type: "course" },
    ],
  ),

  s(nx(), "p20", "g11",
    "Take Honors Biology and start building a strong STEM GPA. Consider taking AP Environmental Science if available. Join environmental clubs and pursue leadership roles. Volunteer for conservation or environmental justice organizations. Research undergraduate environmental science programs — look for schools with field research opportunities, sustainability programs, and strong earth science departments.",
    ["Honors Biology", "Algebra II / Geometry", "Environmental Science Elective", "Chemistry", "English (Environmental Writing)"],
    [
      { name: "Sierra Student Coalition", url: "https://www.sierraclub.org/sierra-student-coalition", description: "Youth-led branch of the Sierra Club — organize environmental campaigns and activism at your school and community." },
      { name: "Local Conservation Volunteer Corps", url: "", description: "Join a local land trust, watershed association, or park service volunteer program — hands-on conservation experience." },
    ],
    [
      { name: "AP Environmental Science (Khan Academy)", url: "https://www.khanacademy.org/science/ap-college-environmental-science", type: "course" },
      { name: "The Sixth Extinction — Elizabeth Kolbert", url: "", type: "book" },
    ],
  ),

  s(nx(), "p20", "g12",
    "Take AP Environmental Science and AP Biology if available. Strengthen chemistry knowledge — environmental chemistry is a core discipline. Participate in a summer environmental science program or research internship. Learn Geographic Information Systems (GIS) basics — a critical tool for environmental scientists. Develop strong data analysis skills in Excel or Python.",
    ["AP Environmental Science", "AP Biology", "Chemistry", "Pre-Calculus", "English (Technical Writing)"],
    [
      { name: "NOAA — Student Opportunities", url: "https://www.noaa.gov/education/student-opportunities", description: "Internships, scholarships, and programs for high school students interested in ocean and atmospheric sciences." },
      { name: "Envirothon", url: "https://www.envirothon.org/", description: "Environmental competition testing knowledge of soils, forestry, wildlife, aquatics, and current environmental issues." },
    ],
    [
      { name: "QGIS (Free GIS Software)", url: "https://www.qgis.org/", type: "program" },
      { name: "Braiding Sweetgrass (Young Adult Edition) — Robin Wall Kimmerer", url: "", type: "book" },
    ],
  ),

  s(nx(), "p20", "g13",
    "The most critical year for college preparation. Take AP Environmental Science, AP Biology, and AP Chemistry. Pursue a leadership role in an environmental club. Conduct an independent environmental research project for a science fair. Research colleges with strong environmental science, ecology, earth science, or environmental studies programs. Look for schools with field stations, study-abroad in critical ecosystems, and strong sustainability initiatives.",
    ["AP Environmental Science", "AP Biology", "AP Chemistry", "AP Calculus AB", "GIS / Data Science Elective"],
    [
      { name: "Research Science Institute (RSI) — Environmental Focus", url: "https://www.cee.org/programs/research-science-institute", description: "Highly selective summer research program — conduct original research with university mentors on environmental topics." },
      { name: "NOAA Hollings Scholarship (Prep)", url: "https://www.noaa.gov/office-education/hollings-scholarship", description: "Research this for college — a prestigious scholarship for environmental science undergraduates with paid summer internships at NOAA." },
    ],
    [
      { name: "Coursera: GIS Specialization (UC Davis)", url: "https://www.coursera.org/specializations/gis", type: "course" },
      { name: "This Changes Everything — Naomi Klein", url: "", type: "book" },
    ],
  ),

  s(nx(), "p20", "g14",
    "Apply to universities with strong environmental science, earth science, or ecology programs. Complete AP exams — high scores earn college credit. Some schools offer unique environmental programs like 'Semester in the Wild' or field-based learning. Write compelling essays about environmental passion and research interests. Consider schools with strong sustainability programs and environmental justice initiatives.",
    ["AP Environmental Science (Exam)", "AP Biology (Exam)", "AP Chemistry (Exam)", "AP Calculus BC", "English (College Essays)"],
    [
      { name: "Apply to Eco-Focused Colleges", url: "", description: "Research schools like College of the Atlantic, UC Santa Barbara, University of Vermont, or Warren Wilson — known for environmental programs." },
      { name: "Senior Capstone: Local Environmental Issue", url: "", description: "Research and present on a local environmental issue — water quality, air pollution, habitat loss — with proposed solutions." },
    ],
    [
      { name: "AASHE — Sustainable Campus Index", url: "https://www.aashe.org/", type: "article" },
      { name: "EPA — Careers in Environmental Science", url: "https://www.epa.gov/careers", type: "article" },
    ],
  ),

  s(nx(), "p20", "g15",
    "Major in Environmental Science, Environmental Studies, Ecology, Earth Science, or a related field. Core coursework: ecology, environmental chemistry, atmospheric science, hydrology, GIS, and statistics. Participate in field research — many programs have field stations, research vessels, or study-abroad opportunities. Pursue summer internships with EPA, NOAA, USGS, The Nature Conservancy, or environmental consulting firms.",
    ["Ecology & Ecosystems", "Environmental Chemistry", "GIS & Spatial Analysis", "Statistics & Data Analysis", "Field Research Methods"],
    [
      { name: "NOAA Hollings Undergraduate Scholarship", url: "https://www.noaa.gov/office-education/hollings-scholarship", description: "Two-year scholarship with paid summer internships at NOAA facilities — one of the top environmental science programs for undergrads." },
      { name: "Student Conservation Association Internships", url: "https://www.thesca.org/", description: "Paid conservation internships at national parks, forests, and wildlife refuges — build field experience during summers." },
    ],
    [
      { name: "ArcGIS Student License (Esri)", url: "https://www.esri.com/en-us/industries/education/software/student", type: "program" },
      { name: "R for Data Science — Hadley Wickham", url: "https://r4ds.had.co.nz/", type: "book" },
    ],
  ),

  s(nx(), "p20", "g16",
    "Pursue a Master's in Environmental Science, Ecology, Environmental Management, or a specialized field (climate science, conservation biology, hydrology, environmental policy). Conduct thesis research on a pressing environmental question. Gain advanced technical skills: remote sensing, advanced GIS, environmental modeling, and data science. Many environmental scientists earn a Master's for career advancement and specialization.",
    ["Specialized: Climate / Ecology / Hydrology", "Advanced GIS & Remote Sensing", "Environmental Policy & Law", "Research Methods & Statistics", "Thesis Research"],
    [
      { name: "EPA STAR Fellowship", url: "https://www.epa.gov/research-fellowships", description: "Graduate fellowships for environmental research — funding for Master's and Ph.D. students in environmental fields." },
      { name: "The Nature Conservancy — Graduate Opportunities", url: "https://www.nature.org/", description: "Fellowships and internships for graduate students working on applied conservation science and policy." },
    ],
    [
      { name: "Nature Climate Change (Journal)", url: "https://www.nature.com/nclimate/", type: "article" },
      { name: "Environmental Science & Technology (ACS Journal)", url: "https://pubs.acs.org/journal/esthag", type: "article" },
    ],
  ),

  s(nx(), "p20", "g17",
    "A Ph.D. in Environmental Science, Earth System Science, Ecology, or a specialized field enables careers in academic research, government labs (EPA, NOAA, NASA), and leadership roles in environmental organizations. Conduct original research that advances understanding of environmental systems and solutions. Alternatively, a Joint J.D./Master's in Environmental Law for those working at the intersection of science and policy.",
    ["Environmental Science Ph.D.", "Dissertation Research", "Advanced Environmental Modeling", "Peer-Reviewed Publication", "Teaching & Mentoring"],
    [
      { name: "NSF Graduate Research Fellowship", url: "https://www.nsfgrfp.org/", description: "Prestigious fellowship providing three years of funding for graduate research in STEM fields including environmental science." },
      { name: "IPCC / UN Environmental Programme", url: "https://www.unep.org/", description: "Opportunities to contribute to global environmental assessments and policy — careers at the science-policy interface." },
    ],
    [
      { name: "Environmental Research Letters (Journal)", url: "https://iopscience.iop.org/journal/1748-9326", type: "article" },
      { name: "AGU — American Geophysical Union", url: "https://www.agu.org/", type: "article" },
    ],
  ),

  // ========================================================================
  // p21 — JOURNALIST
  // ========================================================================

  s(nx(), "p21", "g1",
    "Journalism starts with curiosity and storytelling! At this age, children are naturally inquisitive — they ask 'why?' constantly, which is the journalist's most important question. Encourage telling stories about their day, drawing pictures that tell a story, and asking questions about the world around them. Every great journalist started as a curious child.",
    ["Storytelling & Speaking", "Asking Questions", "Drawing Pictures (Visual Stories)", "Listening Skills"],
    [
      { name: "PBS Kids — Reading & Storytelling Games", url: "https://pbskids.org/games/reading/", description: "Free games and activities building early literacy and storytelling skills." },
      { name: "StoryCorps — Great Questions for Kids", url: "https://storycorps.org/participate/great-questions/", description: "Practice asking interview questions — StoryCorps' question list helps children learn to ask and listen." },
    ],
    [
      { name: "Harold and the Purple Crayon by Crockett Johnson", url: "", type: "book" },
      { name: "The Day the Crayons Quit by Drew Daywalt", url: "", type: "book" },
    ],
  ),

  s(nx(), "p21", "g2",
    "Build storytelling and communication skills. Practice 'reporting' on events: 'What happened at school today? Who was there? What was the most interesting part?' Learn to ask follow-up questions. Dictate stories while a parent writes them down — this is the earliest form of journalism. Look at pictures in newspapers and discuss what stories they tell.",
    ["Reading & Writing Readiness", "Speaking Clearly", "Questioning Skills", "Drawing & Storytelling"],
    [
      { name: "Scholastic News — Kindergarten", url: "https://classroommagazines.scholastic.com/", description: "Age-appropriate news magazines that introduce children to nonfiction reading and current events." },
      { name: "Make a Family Newspaper", url: "", description: "Create a weekly family newspaper — children report on family events, draw pictures, and share with relatives." },
    ],
    [
      { name: "Interrupting Chicken by David Ezra Stein", url: "", type: "book" },
      { name: "The Paperboy by Dav Pilkey", url: "", type: "book" },
    ],
  ),

  s(nx(), "p21", "g3",
    "Build strong reading and writing skills — these are the journalist's primary tools. Start a 'reporter's notebook' where you write about interesting things you observe. Learn the 5 W's (Who, What, Where, When, Why) — the framework of every news story. Interview family members about their lives and write down what you learn. Read children's news sources.",
    ["Reading & Phonics", "Writing Sentences & Stories", "Speaking & Interviewing", "Civics (Community Awareness)"],
    [
      { name: "Time for Kids", url: "https://www.timeforkids.com/", description: "Current events and nonfiction articles written specifically for elementary students — a real news source for kids." },
      { name: "Interview a Family Member Project", url: "", description: "Conduct a 'real' interview with a grandparent or neighbor — prepare questions, take notes, and write up their story." },
    ],
    [
      { name: "The 5 W's: A Journalism Primer for Kids", url: "", type: "book" },
      { name: "BrainPOP Jr.: Reading Nonfiction", url: "https://jr.brainpop.com/readingandwriting/reading/readingnonfiction/", type: "video" },
    ],
  ),

  s(nx(), "p21", "g4",
    "Deepen writing skills — journalists write clearly, accurately, and engagingly. Practice writing short 'news reports' about school events or family activities. Learn the difference between fact and opinion. Read different types of stories — news, features, sports, reviews. Notice how headlines grab attention. Start learning to type — journalists write fast on tight deadlines.",
    ["Reading Comprehension", "Writing (Reports & Narratives)", "Keyboarding (Typing)", "Civics (Facts vs. Opinions)"],
    [
      { name: "Newsela", url: "https://newsela.com/", description: "Current events articles at multiple reading levels — great practice reading real news content written for young readers." },
      { name: "Start a Class / Family Newsletter", url: "", description: "Create a regular newsletter reporting on classroom or family events — develop reporting, writing, and editing skills." },
    ],
    [
      { name: "Kid Reporter's Notebook (DIY)", url: "", type: "book" },
      { name: "BrainPOP: Media Literacy", url: "https://www.brainpop.com/english/studyandreadingskills/medialiteracy/", type: "video" },
    ],
  ),

  s(nx(), "p21", "g5",
    "Writing skills expand — now write longer news stories with multiple paragraphs. Learn to research: find information from books, websites, and interviews to support your reporting. Practice identifying reliable vs. unreliable sources (a foundational journalism skill). Join or start a school newspaper. Read news articles daily and discuss them with family. Learn about the First Amendment and freedom of the press.",
    ["Writing (News Stories)", "Research Skills", "Reading (Nonfiction / News)", "Civics (First Amendment Intro)"],
    [
      { name: "Student Press Law Center", url: "https://splc.org/", description: "Learn about student press rights and freedom of speech — the SPLC has resources for young journalists." },
      { name: "DOGO News", url: "https://www.dogonews.com/", description: "Current events and news articles written for kids — engaging content across science, sports, and social studies." },
    ],
    [
      { name: "The Landry News by Andrew Clements", url: "", type: "book" },
      { name: "PBS NewsHour Classroom", url: "https://www.pbs.org/newshour/classroom/", type: "video" },
    ],
  ),

  s(nx(), "p21", "g6",
    "Develop research and writing depth. Learn about different types of journalism: news reporting, feature writing, opinion/editorial, investigative journalism, photojournalism, and broadcast journalism. Practice editing — journalists must edit their own work ruthlessly for accuracy and clarity. Start a blog or contribute to a school newspaper. Learn about media ethics: accuracy, fairness, and avoiding bias.",
    ["English Language Arts (Research & Writing)", "Civics (Media Literacy)", "Keyboarding (Speed & Accuracy)", "Art (Photojournalism Intro)"],
    [
      { name: "Scholastic Kids Press", url: "https://kpcnotebook.scholastic.com/", description: "Apply to be a Scholastic Kid Reporter — real journalism experience for ages 10-14 covering news in your community." },
      { name: "Common Sense Media — News Literacy", url: "https://www.commonsense.org/education/digital-citizenship/lesson/news-literacy", description: "Learn to evaluate the credibility of news sources and identify misinformation — critical skills for young journalists." },
    ],
    [
      { name: "The Young Journalist's Book by Nancy Bentley", url: "", type: "book" },
      { name: "Mystery Science: Media Literacy", url: "https://mysteryscience.com/", type: "course" },
    ],
  ),

  s(nx(), "p21", "g7",
    "Writing becomes more sophisticated — practice different journalistic formats: news articles, features, profiles, and opinion pieces. Learn to conduct interviews: prepare questions, take notes, record (with permission), and quote accurately. Join or start a school newspaper or news broadcast. Read journalism by great reporters and analyze what makes their writing compelling.",
    ["English (Journalistic Writing)", "Civics (Current Events)", "Research Methods", "Computer Skills (Publishing)"],
    [
      { name: "Write the World — Journalism Competitions", url: "https://www.writetheworld.org/", description: "Online writing community for teens — submit journalism pieces for peer review and compete in writing competitions." },
      { name: "School Newspaper / Broadcast Club", url: "", description: "Join or start your school's student newspaper or morning news broadcast — real deadlines, real audience, real journalism." },
    ],
    [
      { name: "Khan Academy: Grammar & Writing", url: "https://www.khanacademy.org/humanities/grammar", type: "course" },
      { name: "The Associated Press Guide to News Writing", url: "", type: "book" },
    ],
  ),

  s(nx(), "p21", "g8",
    "Take English seriously — strong writing is the journalist's superpower. Learn about journalism ethics: accuracy, independence, impartiality, humanity, and accountability. Start learning about media law basics (libel, privacy, freedom of information). Practice editing your own and others' work. Read journalism daily from multiple sources: newspapers, magazines, digital outlets, and public media.",
    ["English (Writing & Editing)", "Civics (Media & Government)", "Computer Skills (Digital Publishing)", "Research & Fact-Checking"],
    [
      { name: "NPR Student Podcast Challenge", url: "https://www.npr.org/series/931795187/student-podcast-challenge", description: "Create a podcast — audio journalism is a growing field. NPR's contest for students teaches storytelling and production." },
      { name: "Junior State of America (JSA)", url: "https://www.jsa.org/", description: "Civic engagement and debate organization — students discuss current events, politics, and media in a structured environment." },
    ],
    [
      { name: "Crash Course: Media Literacy", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtM6jSpzb5gMNsx9kdmqBfmY", type: "video" },
      { name: "The Elements of Journalism — Kovach & Rosenstiel", url: "", type: "book" },
    ],
  ),

  s(nx(), "p21", "g9",
    "Take English and social studies seriously. Start building a journalism portfolio: articles for the school paper, blog posts, or submissions to youth journalism programs. Learn to use digital tools: content management systems (WordPress), basic photo editing, and social media for news gathering. Research different journalism careers: reporter, editor, foreign correspondent, data journalist, investigative reporter, documentary filmmaker.",
    ["English (Advanced Writing)", "Social Studies / Government", "Digital Media / Technology Elective", "Foreign Language"],
    [
      { name: "Youth Journalism International", url: "https://youthjournalism.org/", description: "Global organization for young journalists — publish your work, take classes, and connect with student journalists worldwide." },
      { name: "The New York Times — Student Contest", url: "https://www.nytimes.com/column/learning-contests", description: "Year-round contests for teens — editorial writing, summer reading, podcast, and multimedia journalism challenges." },
    ],
    [
      { name: "WordPress (Free Blog)", url: "https://wordpress.com/", type: "program" },
      { name: "TED-Ed: How to Choose Your News", url: "https://ed.ted.com/lessons/how-to-choose-your-news-damon-brown", type: "video" },
    ],
  ),

  s(nx(), "p21", "g10",
    "Take the most advanced English available — writing, literature, and composition are core to journalism. Take any media, journalism, or yearbook electives. Start freelancing: pitch article ideas to local newspapers or online publications that accept teen writers. Build a personal blog or portfolio website. Read widely: expose yourself to different journalism styles and publications.",
    ["English / Language Arts (Honors)", "Civics / U.S. History", "Media / Journalism Elective", "Foreign Language", "Computer Applications"],
    [
      { name: "Student Television Network (STN)", url: "https://www.studenttelevision.com/", description: "Broadcast journalism competitions and conventions for middle and high school students — video storytelling training." },
      { name: "The School of The New York Times — Summer Academy", url: "https://www.nytedu.com/", description: "Summer programs in journalism, writing, and media for high school students — learn from NYT journalists." },
    ],
    [
      { name: "The New Journalism — Tom Wolfe", url: "", type: "book" },
      { name: "Poynter — News University (Free Courses)", url: "https://www.poynter.org/", type: "course" },
    ],
  ),

  s(nx(), "p21", "g11",
    "Take Honors English and any journalism or media electives. Join or lead the school newspaper, yearbook, or broadcast team. Start building clips — published articles you can share with college admissions and future employers. Learn AP Style — the standard writing style for journalism. Read the work of great journalists and analyze their techniques: interviewing, narrative structure, and investigative methods.",
    ["Honors English", "AP U.S. History / Government", "Journalism / Media Production", "Foreign Language", "Speech / Debate"],
    [
      { name: "National Scholastic Press Association (NSPA)", url: "https://studentpress.org/nspa/", description: "Join the national organization for student journalists — conventions, competitions, and resources for school publications." },
      { name: "Local Newspaper Internship / Youth Contributor", url: "", description: "Contact local newspapers about youth contributor programs — some hire teen columnists or have high school internship programs." },
    ],
    [
      { name: "AP Stylebook Online (Student Access)", url: "https://www.apstylebook.com/", type: "program" },
      { name: "On Writing Well — William Zinsser", url: "", type: "book" },
    ],
  ),

  s(nx(), "p21", "g12",
    "Take AP English Language and any available journalism courses. Develop a specialization: political journalism, science journalism, sports reporting, arts criticism, data journalism, or photojournalism. Continue building clips through the school paper and freelance work. Research colleges with strong journalism programs. Learn about journalism ethics in depth — study cases from the Society of Professional Journalists.",
    ["AP English Language", "AP U.S. Government", "Journalism / Media Elective", "Spanish or Second Language", "Statistics (Data Journalism)"],
    [
      { name: "Columbia Scholastic Press Association (CSPA)", url: "https://cspa.columbia.edu/", description: "Prestigious student journalism organization at Columbia University — conferences, critique services, and awards." },
      { name: "Student Press Law Center — Legal Resources", url: "https://splc.org/", description: "Learn your rights as a student journalist — understanding media law is essential for reporters." },
    ],
    [
      { name: "The Associated Press Guide to News Writing", url: "", type: "book" },
      { name: "Coursera: Journalism (Michigan State)", url: "https://www.coursera.org/specializations/become-a-journalist", type: "course" },
    ],
  ),

  s(nx(), "p21", "g13",
    "The most critical year for college preparation. Take AP English Literature and AP U.S. Government. Lead the school newspaper or yearbook as editor-in-chief or section editor — this demonstrates real editorial leadership. Build a strong portfolio of published work. Research and visit colleges with strong journalism programs (Northwestern, Missouri, Columbia, NYU, Boston University). Journalism programs value strong writing samples and demonstrated passion above all.",
    ["AP English Literature", "AP U.S. Government & Politics", "Journalism / Yearbook (Editor Role)", "AP Statistics / Data Science", "Foreign Language"],
    [
      { name: "JCamp — Asian American Journalists Association", url: "https://www.aaja.org/programs/jcamp/", description: "National multicultural journalism program — free summer camp bringing diverse high school students together with professional journalists." },
      { name: "Princeton Summer Journalism Program (PSJP)", url: "https://psjp.princeton.edu/", description: "Free residential summer program for high-achieving high school juniors from low-income backgrounds interested in journalism." },
    ],
    [
      { name: "The Elements of Journalism — Kovach & Rosenstiel (Re-read)", url: "", type: "book" },
      { name: "Nieman Storyboard", url: "https://niemanstoryboard.org/", type: "article" },
    ],
  ),

  s(nx(), "p21", "g14",
    "Apply to colleges with strong journalism and media programs. Complete AP exams — high scores earn college credit. Some schools offer combined BA/MA journalism programs. Build a final portfolio of your best work. Consider applying to schools with strong student newspapers (The Daily Northwestern, The Daily Bruin, Columbia Daily Spectator) where you can gain intensive hands-on experience.",
    ["AP English Literature (Exam)", "AP Government (Exam)", "Journalism / Media Portfolio", "Foreign Language", "English (College Essays)"],
    [
      { name: "Dow Jones News Fund — Internship Programs", url: "https://www.dowjonesnewsfund.org/", description: "Paid summer internships for college students — research their programs now to plan your college journalism path." },
      { name: "Apply to Journalism Schools", url: "", description: "Research top journalism programs: Medill (Northwestern), Missouri School of Journalism, Newhouse (Syracuse), Emerson College, NYU." },
    ],
    [
      { name: "ASNE — Association of Schools of Journalism", url: "https://www.aejmc.org/", type: "article" },
      { name: "SPI — Society of Professional Journalists: Ethics Code", url: "https://www.spj.org/ethicscode.asp", type: "article" },
    ],
  ),

  s(nx(), "p21", "g15",
    "Major in Journalism, Mass Communication, English, Political Science, or a specialized field (science communication for aspiring science journalists). Work on the student newspaper, radio station, or TV station relentlessly — campus media is your laboratory. Pursue summer internships at newspapers, magazines, digital media outlets, or broadcast stations. Build a professional portfolio of published clips. Study journalism ethics, media law, and reporting techniques.",
    ["Reporting & News Writing", "Media Law & Ethics", "Multimedia Storytelling", "Data Journalism / Digital Tools", "Beat Reporting (Specialization)"],
    [
      { name: "Campus Newspaper / Radio / TV Station", url: "", description: "Work for student media — this is the single most important activity for aspiring journalists. Real deadlines, real stories, real skills." },
      { name: "Dow Jones News Fund Internship", url: "https://www.dowjonesnewsfund.org/", description: "Paid summer internships at major news organizations — competitive but career-launching." },
    ],
    [
      { name: "NPR Internships (Apply Junior Year)", url: "https://www.npr.org/about-npr/181881227/internships", type: "program" },
      { name: "The New York Times — Student Subscription", url: "https://www.nytimes.com/subscription/education", type: "program" },
    ],
  ),

  s(nx(), "p21", "g16",
    "A Master's in Journalism (M.J. or M.S.) from a top school (Columbia, Northwestern, Berkeley, Missouri) provides advanced training, specialization, and a powerful professional network. Many programs are only 1-2 years. Alternative: a Master's in a specialized field for niche journalism — M.P.H. for health journalism, M.S. in Environmental Science for environmental reporting, J.D. for legal journalism. Build deep expertise in a subject area while mastering storytelling.",
    ["Advanced Reporting & Writing", "Investigative Journalism", "Specialized: Data / Video / Audio / etc.", "Media Entrepreneurship", "Master's Project / Thesis"],
    [
      { name: "Pulitzer Center — Student Fellows", url: "https://pulitzercenter.org/", description: "Reporting fellowships for students to cover underreported global issues — funding and mentorship for ambitious projects." },
      { name: "Investigative Reporters & Editors (IRE)", url: "https://www.ire.org/", description: "Join IRE as a student — access to training, conferences, and the premier network of investigative journalists." },
    ],
    [
      { name: "Columbia Journalism Review (CJR)", url: "https://www.cjr.org/", type: "article" },
      { name: "Nieman Reports", url: "https://niemanreports.org/", type: "article" },
    ],
  ),

  s(nx(), "p21", "g17",
    "Journalism is an unusual field — a Ph.D. is rare and typically only for those pursuing academic careers in journalism education and media studies. More common paths after the Master's: 1) Nieman Fellowship at Harvard (mid-career journalists), 2) Knight-Wallace Fellowship at Michigan, 3) ProPublica investigative teams, 4) authoring a non-fiction book based on deep reporting. The terminal credential in journalism is excellent work — a portfolio of impactful, award-worthy journalism that shapes public understanding.",
    ["Journalism / Media Studies Ph.D.", "Dissertation on Media Topic", "Academic Publishing", "Teaching Journalism", "Media Research Methods"],
    [
      { name: "Nieman Foundation for Journalism at Harvard", url: "https://nieman.harvard.edu/", description: "The premier mid-career fellowship for journalists — a year of study at Harvard for accomplished reporters and editors." },
      { name: "Knight-Wallace Fellowships at Michigan", url: "https://wallacehouse.umich.edu/knight-wallace/", description: "Another top mid-career fellowship — journalists spend an academic year pursuing customized study plans." },
    ],
    [
      { name: "Nieman Journalism Lab", url: "https://www.niemanlab.org/", type: "article" },
      { name: "Pew Research Center — Journalism & Media", url: "https://www.pewresearch.org/topics/journalism/", type: "article" },
    ],
  ),

];
