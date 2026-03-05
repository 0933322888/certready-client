/**
 * Trade guide page content: full data for /trades/:slug-red-seal pages.
 * Add one object per trade that has a live guide. Keeps TradePageTemplate lean.
 */

export const TRADE_DATA = {
  "construction-electrician": {
    slug: "construction-electrician",
    name: "Construction Electrician",
    tradeCode: "309A",
    apprenticeshipHours: 7200,
    examQuestions: 100,
    examDuration: "3 hours",
    passingScore: 70,
    overviewShort:
      "Plan, install, maintain, and commission electrical systems in residential, commercial, and industrial buildings across Canada.",
    overview:
      "The Construction Electrician Red Seal exam validates your ability to safely plan, install, alter, maintain, and repair electrical systems — from service entrance to branch circuits to complex motor control systems. Holding a Red Seal means your journeyperson certificate is recognized in every province and territory, giving you unrestricted cross-Canada mobility.",
    mwas: [
      {
        id: "A",
        title: "Common Occupational Skills",
        weight: 12,
        items: [
          "Performs safety-related functions",
          "Uses and maintains tools and equipment",
          "Organizes work",
          "Fabricates and installs support components",
          "Commissions and decommissions electrical systems",
          "Communicates and documents",
        ],
      },
      {
        id: "B",
        title: "Generating, Distribution & Service Systems",
        weight: 26,
        items: [
          "Installs consumer/supply services and metering",
          "Installs protection devices",
          "Installs power distribution equipment",
          "Installs power conditioning and UPS systems",
          "Performs bonding, grounding and GFP",
          "Installs power generation and conversion systems",
          "Installs renewable energy systems",
          "Works on high-voltage systems",
          "Installs transformers",
        ],
      },
      {
        id: "C",
        title: "Wiring Systems",
        weight: 34,
        items: [
          "Installs raceways, conductors, cables and enclosures",
          "Installs branch circuitry, devices and lighting",
          "Installs HVAC systems",
          "Installs electric heating systems",
          "Installs exit and emergency lighting",
          "Installs cathodic protection systems",
        ],
      },
      {
        id: "D",
        title: "Motors and Control Systems",
        weight: 18,
        items: [
          "Installs motor starters and controls",
          "Installs drives (VFDs, DC drives)",
          "Installs motors",
          "Installs automated control systems (PLC, SCADA)",
        ],
      },
      {
        id: "E",
        title: "Signalling & Communication Systems",
        weight: 10,
        items: [
          "Installs fire alarm and security systems",
          "Installs VDV, CATV, and communication systems",
          "Installs building automation systems (BAS)",
        ],
      },
    ],
    difficultyRating: 4,
    difficultyNote:
      "The Construction Electrician Red Seal is widely regarded as one of the most technically demanding trades exams in Canada. The five MWAs span dramatically different technical domains — from high-voltage substation grounding to PLC ladder logic to fire alarm Class A wiring — and the heavy calculation component (voltage drop, conduit fill, transformer sizing, motor circuit math) must be solved from memory in under 108 seconds per question.",
    challengePoints: [
      { icon: "🧮", heading: "No formula sheet", body: "All calculations — voltage drop, transformer kVA, motor slip, conduit fill — must be solved from memory under time pressure." },
      { icon: "📚", heading: "Vast CEC scope", body: "Sections 4, 8, 10, 12, 26, and 28 of the Canadian Electrical Code form the backbone of the exam. You need to internalize, not just recognize, the rules." },
      { icon: "🔀", heading: "Five unrelated domains", body: "Fire alarm wiring, VFDs, renewable energy anti-islanding, PLC programming, and HV grounding — all on one 100-question exam." },
      { icon: "⏱", heading: "~90 seconds per question", body: "100 questions in 3 hours. Multi-step calculation questions eat time. Exam stamina and question strategy are as important as knowledge." },
    ],
    sampleQuestions: [
      {
        question: "In a 347/600V three-phase wye system, what is the voltage between any phase conductor and neutral?",
        options: ["208 V", "240 V", "347 V", "600 V"],
        correct: 2,
        explanation: "In a wye system, line-to-neutral voltage = line-to-line voltage ÷ √3. 600 ÷ 1.732 ≈ 347 V. This is the standard industrial voltage used across Canada for 600 V distribution.",
        mwa: "B",
      },
      {
        question: "A circuit supplies a continuous load of 28 A. What is the minimum conductor ampacity required by the CEC?",
        options: ["28 A", "30 A", "35 A", "40 A"],
        correct: 2,
        explanation: "The CEC requires conductors supplying continuous loads (≥ 3 hours) to be rated at 125% of the load: 28 × 1.25 = 35 A. This prevents sustained thermal damage to the insulation.",
        mwa: "C",
      },
      {
        question: "Three #8 AWG conductors (each 43.2 mm² cross-section) are pulled into conduit. What is the minimum required conduit internal area?",
        options: ["130 mm²", "216 mm²", "324 mm²", "432 mm²"],
        correct: 2,
        explanation: "For 3 or more conductors, maximum conduit fill is 40%. Total conductor area = 3 × 43.2 = 129.6 mm². Minimum conduit area = 129.6 ÷ 0.40 = 324 mm².",
        mwa: "C",
      },
      {
        question: "A 4-pole, 60 Hz squirrel-cage induction motor turns at 1,728 RPM at full load. What is the percent slip?",
        options: ["2.0%", "3.5%", "4.0%", "5.0%"],
        correct: 2,
        explanation: "Synchronous speed: Ns = 120 × f ÷ P = 120 × 60 ÷ 4 = 1,800 RPM. Slip = (1,800 − 1,728) ÷ 1,800 × 100% = 4.0%.",
        mwa: "D",
      },
    ],
    studyTips: [
      { icon: "📊", tip: "Weight your time by MWA", body: "MWA C (Wiring Systems) is 34 questions — your single biggest lever. Then MWA B (26 q) and D (18 q). Don't neglect them for A and E." },
      { icon: "🔢", tip: "Drill formulas until automatic", body: "Voltage drop (single and three-phase), transformer kVA, motor slip, conduit fill area — these appear repeatedly. Practice cold, no notes." },
      { icon: "📖", tip: "Master the CEC sections", body: "Internalize Sections 4 (conductors), 8 (load calcs), 10 (grounding), 12 (wiring methods), 26 (equipment), 28 (motors). Understand the why, not just the rule." },
      { icon: "⏲", tip: "Practice timed mock exams", body: "Take at least two full 100-question timed runs before exam day. Flag-and-return is better than getting stuck — a guess scores; a blank never does." },
    ],
    courseSlug: "construction-electrician-309a",
    courseUrl: "/courses/construction-electrician-309a",
    practiceUrl: "/practice/construction-electrician",
  },

  plumber: {
    slug: "plumber",
    name: "Plumber",
    tradeCode: "306A",
    apprenticeshipHours: 7200,
    examQuestions: 125,
    examDuration: "3 hours 45 min",
    passingScore: 70,
    overviewShort:
      "Install, maintain, and repair sanitary drainage, water distribution, and plumbing systems in buildings across Canada.",
    overview:
      "The Plumber Red Seal exam certifies mastery of drainage, waste and vent systems, water distribution, fixtures, and special piping systems. With a Red Seal, your journeyperson certificate is portable across all provinces and territories — eliminating the need to re-certify when you cross a border.",
    mwas: [
      { id: "A", title: "Common Occupational Skills", weight: 11, items: ["Performs safety-related functions", "Uses and maintains tools", "Organizes work", "Reads blueprints and specifications", "Obtains permits and inspections"] },
      { id: "B", title: "Drainage, Waste and Vent Systems", weight: 24, items: ["Installs sanitary drainage systems", "Installs venting systems", "Installs storm drainage systems", "Installs interceptors and separators"] },
      { id: "C", title: "Water Distribution Systems", weight: 23, items: ["Installs water supply systems", "Installs valves, meters and backflow prevention", "Installs hot water systems", "Installs water treatment equipment"] },
      { id: "D", title: "Fixtures, Appliances and Equipment", weight: 18, items: ["Installs plumbing fixtures", "Installs water heaters and boilers", "Installs pumps and pressure systems"] },
      { id: "E", title: "Piping Systems", weight: 14, items: ["Joins pipe (mechanical, fusion, solder, thread)", "Installs pipe supports and hangers", "Accommodates expansion and contraction"] },
      { id: "F", title: "Special Systems", weight: 10, items: ["Installs medical gas systems", "Installs fire protection piping", "Installs radiant heating systems"] },
    ],
    difficultyRating: 4,
    difficultyNote:
      "With 125 questions and six major work areas, the Plumber Red Seal demands deep knowledge of the National Plumbing Code, hydraulic calculations, and fixture unit sizing — all from memory.",
    challengePoints: [
      { icon: "📐", heading: "NPC table memorization", body: "Fixture unit counts, pipe sizing tables, trap arm lengths — you need these cold, without a reference book." },
      { icon: "🔢", heading: "Hydraulic calculations", body: "Pressure loss, flow velocity, expansion rates for copper vs. plastic — multi-step math under time pressure." },
      { icon: "🌐", heading: "Six work areas", body: "From DWV to medical gas systems — the scope is broader than most other trades." },
      { icon: "⏱", heading: "125 questions in < 4 hours", body: "More questions than almost any other Red Seal trade. Pace and stamina matter." },
    ],
    sampleQuestions: [
      { question: "What is the minimum slope required for a 4-inch horizontal drain pipe per the National Plumbing Code?", options: ["1/16 inch per foot", "1/8 inch per foot", "1/4 inch per foot", "1/2 inch per foot"], correct: 1, explanation: "The NPC requires a minimum slope of 1/8 inch per foot (1%) for 3\" and 4\" drain pipes to maintain self-cleaning velocity.", mwa: "B" },
      { question: "Which trap type is prohibited under the National Plumbing Code?", options: ["P-trap", "Bottle trap", "Running trap", "S-trap"], correct: 3, explanation: "S-traps are prohibited because they self-siphon, destroying the water seal and allowing sewer gases to enter the building.", mwa: "B" },
      { question: "Which backflow preventer offers the absolute highest level of cross-connection protection?", options: ["Vacuum breaker", "Double check valve", "Reduced pressure zone (RPZ) device", "Air gap"], correct: 3, explanation: "An air gap is a complete physical separation of the potable supply from any potential contamination source — no mechanical part can fail. It is the highest protection available.", mwa: "C" },
    ],
    studyTips: [
      { icon: "📊", tip: "DWV + Water = 47% of exam", body: "MWA B (Drainage, Waste & Vent) and MWA C (Water Distribution) together account for nearly half your score. Start here." },
      { icon: "📖", tip: "Memorize NPC tables", body: "Fixture unit values, pipe sizing tables, and trap arm max lengths must be internalized — no reference permitted on exam day." },
      { icon: "🔢", tip: "Practice hydraulic calculations", body: "Pressure loss, expansion rates, flow velocity — know the formulas and solve quickly." },
      { icon: "⏲", tip: "Build stamina for 125 questions", body: "Run at least two full timed practice exams. At 108 seconds per question, fatigue is a real factor." },
    ],
    courseSlug: "plumber-306a",
    courseUrl: "/courses/plumber-306a",
    practiceUrl: "/practice/plumber",
  },
  hairstylist: {
    slug: "hairstylist",
    name: "Hairstylist",
    tradeCode: "332A",
    apprenticeshipHours: 1500,
    examQuestions: 120,
    examDuration: "3 hours",
    passingScore: 70,
    overviewShort:
      "Cut, colour, chemically treat, and style hair while delivering professional client consultations and salon services across Canada.",
    overview:
      "The Hairstylist Red Seal exam (332A) certifies your ability to perform the full range of professional hair services — from precision cuts and chemical texture services to colour correction and salon management. A Red Seal is recognized in every province and territory, giving you the mobility to work anywhere in Canada without re-certifying.",
    mwas: [
      {
        id: "A",
        title: "Common Occupational Skills",
        weight: 12,
        items: [
          "Performs safety-related and hygienic functions",
          "Uses and maintains tools and equipment",
          "Prepares for client services (consultation, analysis)",
          "Uses communication and mentoring techniques",
        ],
      },
      {
        id: "B",
        title: "Hair and Scalp Care",
        weight: 9,
        items: [
          "Analyzes and responds to hair and scalp conditions",
          "Shampoos and conditions hair and scalp",
        ],
      },
      {
        id: "C",
        title: "Cuts Hair",
        weight: 20,
        items: [
          "Cuts diverse hair textures using cutting tools (scissors, clippers, razors)",
          "Cuts facial and nape hair",
        ],
      },
      {
        id: "D",
        title: "Styles Hair",
        weight: 13,
        items: [
          "Prepares and styles wet hair (roller sets, wet wraps, blow-dry)",
          "Styles and finishes dry hair (thermal tools, updos, finishing products)",
        ],
      },
      {
        id: "E",
        title: "Chemical Texture Services",
        weight: 14,
        items: [
          "Chemically waves hair (permanent waving — rod selection, solution application, neutralization)",
          "Chemically relaxes hair (sodium hydroxide, no-lax, thio relaxers)",
        ],
      },
      {
        id: "F",
        title: "Alters Hair Colour",
        weight: 21,
        items: [
          "Colours hair (oxidative colour, semi/demi-permanent, natural colour)",
          "Lightens hair (bleach, high-lift colour, prelightening)",
          "Performs colour correction (colour removal, colour fillers, neutralizing unwanted tones)",
        ],
      },
      {
        id: "G",
        title: "Specialized Services",
        weight: 5,
        items: [
          "Performs services for hair extensions, wigs, and hairpieces",
          "Performs basic services on the face and nape",
        ],
      },
      {
        id: "H",
        title: "Salon Operations",
        weight: 6,
        items: [
          "Performs front desk responsibilities (booking, retail, client records)",
          "Establishes business fundamentals (pricing, inventory, regulations)",
        ],
      },
    ],
    difficultyRating: 3,
    difficultyNote:
      "The Hairstylist Red Seal is broader than many candidates expect. While the practical skills feel familiar from daily work, the exam tests the underlying science — hair structure, chemical reactions, colour theory, and scalp pathology — at a depth that surprises many. MWA F (Colour) alone accounts for 21% of the exam and demands strong knowledge of colour wheel theory, developer volumes, underlying pigment, and correction formulas.",
    challengePoints: [
      { icon: "🧪", heading: "Chemistry, not just technique", body: "Oxidation reactions, pH levels, thio vs. hydroxide chemistry, and the neutralization process — the exam tests why services work, not just how to perform them." },
      { icon: "🎨", heading: "Colour theory depth", body: "With 21% of the exam on colour, you need to know the colour wheel, levels and tones, underlying pigment at each level, and how to formulate corrections — from memory." },
      { icon: "🔬", heading: "Hair and scalp science", body: "The cuticle, cortex, and medulla; porosity and elasticity; scalp conditions (seborrheic dermatitis, alopecia, tinea capitis) — the exam expects clinical-level identification." },
      { icon: "📋", heading: "Eight MWAs to cover", body: "From sanitation protocols to salon business operations, the Hairstylist RSOS covers more distinct domains than most candidates prepare for." },
    ],
    sampleQuestions: [
      {
        question: "A client's hair has been chemically relaxed with a sodium hydroxide (lye) relaxer. Which neutralizing shampoo pH range is most appropriate to use immediately after rinsing?",
        options: ["pH 2.0 – 3.5", "pH 4.5 – 5.5", "pH 6.5 – 7.0", "pH 8.0 – 9.0"],
        correct: 1,
        explanation: "Sodium hydroxide relaxers raise the hair's pH to approximately 12–14 to break disulfide bonds. A neutralizing shampoo with a mildly acidic pH of 4.5–5.5 closes the cuticle, stops the chemical process, and helps restore the hair's natural pH balance (4.5–5.5). Using a shampoo that is too acidic risks over-processing; too alkaline fails to neutralize.",
        mwa: "E",
      },
      {
        question: "A client's natural hair is at level 6 (dark blonde). They want to achieve a level 9 (light blonde) result in one service. What is the minimum volume developer required with a permanent oxidative colour?",
        options: ["10 volume (3%)", "20 volume (6%)", "30 volume (9%)", "40 volume (12%)"],
        correct: 3,
        explanation: "Lifting 3 or more levels in a single service requires 40 volume (12%) developer. 20 volume lifts approximately 1–2 levels; 30 volume lifts 2–3 levels. For a 3-level lift from 6 to 9, 40 volume is the minimum — and prelightening followed by toning may be recommended for optimal results.",
        mwa: "F",
      },
      {
        question: "During a client consultation, you notice circular patches of hair loss with smooth, shiny skin and broken hair shafts at the scalp. Which condition does this most likely indicate?",
        options: ["Alopecia areata", "Tinea capitis (ringworm)", "Traction alopecia", "Androgenetic alopecia"],
        correct: 1,
        explanation: "Tinea capitis is a fungal infection presenting with circular, scaly patches, broken hair shafts ('black dot' pattern), and inflammation. It is contagious and requires medical referral — no chemical or thermal services should be performed. Alopecia areata presents with smooth, coin-shaped bald patches but without broken shafts or scaling.",
        mwa: "B",
      },
      {
        question: "A client wants a permanent wave on hair that tests with low elasticity. What is the most appropriate course of action?",
        options: [
          "Proceed normally — elasticity does not affect perm results",
          "Use a larger rod size only and proceed",
          "Perform a strand test and consider a conditioning treatment before proceeding",
          "Apply the strongest alkaline waving solution available to compensate",
        ],
        correct: 2,
        explanation: "Low elasticity indicates compromised hair structure — the cortex cannot adequately stretch and return. Perming low-elasticity hair without preparation risks breakage during processing. The correct approach is to perform a strand test to assess viability, recommend a conditioning or protein treatment to rebuild strength, and then re-evaluate. Using a stronger solution would worsen damage.",
        mwa: "E",
      },
      {
        question: "Which cutting technique removes bulk and weight from the interior of a section without changing the perimeter length?",
        options: ["Blunt cutting", "Slide cutting", "Point cutting", "Slicing / notching"],
        correct: 3,
        explanation: "Slicing (also called notching) involves inserting the open shears into the interior of a subsection and sliding them down the strand, removing internal bulk while leaving the perimeter length intact. Blunt cutting creates a solid, defined perimeter line. Point cutting removes bulk at the ends. Slide cutting removes bulk while adding movement along the length.",
        mwa: "C",
      },
    ],
    studyTips: [
      { icon: "🎨", tip: "Colour is 21% — make it your priority", body: "MWA F is the largest single section. Master the colour wheel, the 10-level system, underlying pigment at each level, developer volumes, and the formulation logic behind colour correction." },
      { icon: "🧪", tip: "Learn the chemistry, not just the steps", body: "The exam asks why. Know the oxidation reaction in permanent colour, the difference between thio and hydroxide relaxers, pH's role in cuticle opening and closing, and how neutralization stops chemical services." },
      { icon: "✂️", tip: "Cuts + Colour = 41% together", body: "MWA C (Cuts, 20%) and MWA F (Colour, 21%) make up nearly half the exam. Solid knowledge of cutting techniques — elevation, overdirection, sectioning — and colour theory will carry your score." },
      { icon: "🔬", tip: "Study scalp and hair pathology", body: "MWA B includes contraindicated conditions (tinea capitis, psoriasis, impetigo) that require service refusal and referral. Know the visual presentation, cause, and correct action for each." },
      { icon: "📋", tip: "Don't skip Salon Operations", body: "MWA H (Salon Operations, 6%) is often under-studied. Questions on WHMIS, sanitation levels (sterilization, disinfection, sanitization), provincial regulations, and basic business math appear regularly." },
    ],
    courseUrl: "/courses/hairstylist-332a",
    practiceUrl: "/practice/hairstylist",
  },
};

/** Get trade guide data by slug, or null if not found */
export function getTradeBySlug(slug) {
  return TRADE_DATA[slug] ?? null;
}

/**
 * Parse exam duration string to total minutes (e.g. "3 hours" -> 180, "3 hours 45 min" -> 225).
 * Used for mock exam timer.
 */
export function examDurationMinutes(trade) {
  if (!trade?.examDuration) return 180;
  const s = String(trade.examDuration).toLowerCase();
  let minutes = 0;
  const hoursMatch = s.match(/(\d+)\s*h/);
  if (hoursMatch) minutes += parseInt(hoursMatch[1], 10) * 60;
  const minMatch = s.match(/(\d+)\s*m/);
  if (minMatch) minutes += parseInt(minMatch[1], 10);
  return minutes > 0 ? minutes : 180;
}

/**
 * Master list of all Red Seal trades for /trades page.
 * live: true = has a guide in TRADE_DATA and tradeGuideContent.
 */
export const ALL_TRADES = [
  { name: "Agricultural Equipment Technician", code: "421A", slug: "agricultural-equipment-technician", live: false },
  { name: "Appliance Service Technician", code: "445A", slug: "appliance-service-technician", live: false },
  { name: "Auto Body & Collision Technician", code: "310B", slug: "auto-body-collision-technician", live: false },
  { name: "Automotive Refinishing Technician", code: "310J", slug: "automotive-refinishing-technician", live: false },
  { name: "Automotive Service Technician", code: "310S", slug: "automotive-service-technician", live: false },
  { name: "Baker", code: "312D", slug: "baker", live: false },
  { name: "Boilermaker", code: "428A", slug: "boilermaker", live: false },
  { name: "Bricklayer", code: "402A", slug: "bricklayer", live: false },
  { name: "Cabinetmaker", code: "438A", slug: "cabinetmaker", live: false },
  { name: "Carpenter", code: "403A", slug: "carpenter", live: false },
  { name: "Concrete Finisher", code: "409A", slug: "concrete-finisher", live: false },
  { name: "Construction Craft Worker", code: "300A", slug: "construction-craft-worker", live: false },
  { name: "Construction Electrician", code: "309A", slug: "construction-electrician", live: true },
  { name: "Cook", code: "415A", slug: "cook", live: false },
  { name: "Drywall Finisher & Plasterer", code: "453A", slug: "drywall-finisher-plasterer", live: false },
  { name: "Floorcovering Installer", code: "424A", slug: "floorcovering-installer", live: false },
  { name: "Gasfitter — Class A", code: "442A", slug: "gasfitter-class-a", live: false },
  { name: "Gasfitter — Class B", code: "443A", slug: "gasfitter-class-b", live: false },
  { name: "Glazier", code: "408A", slug: "glazier", live: false },
  { name: "Hairstylist", code: "332A", slug: "hairstylist", live: true },
  { name: "Heavy Duty Equipment Technician", code: "421A", slug: "heavy-duty-equipment-technician", live: false },
  { name: "Heavy Equipment Operator (Dozer)", code: "306A", slug: "heo-dozer", live: false },
  { name: "Heavy Equipment Operator (Excavator)", code: "306B", slug: "heo-excavator", live: false },
  { name: "Heavy Equipment Operator (TLB)", code: "306C", slug: "heo-tlb", live: false },
  { name: "Industrial Electrician", code: "442A", slug: "industrial-electrician", live: false },
  { name: "Industrial Mechanic (Millwright)", code: "433A", slug: "industrial-mechanic-millwright", live: false },
  { name: "Instrumentation & Control Technician", code: "447A", slug: "instrumentation-control-technician", live: false },
  { name: "Insulator (Heat and Frost)", code: "456A", slug: "insulator-heat-frost", live: false },
  { name: "Ironworker (Generalist)", code: "420A", slug: "ironworker-generalist", live: false },
  { name: "Ironworker (Reinforcing)", code: "420B", slug: "ironworker-reinforcing", live: false },
  { name: "Ironworker (Structural/Ornamental)", code: "420C", slug: "ironworker-structural-ornamental", live: false },
  { name: "Landscape Horticulturist", code: "334A", slug: "landscape-horticulturist", live: false },
  { name: "Lather (Interior Systems Mechanic)", code: "455A", slug: "lather-interior-systems-mechanic", live: false },
  { name: "Machinist", code: "429A", slug: "machinist", live: false },
  { name: "Metal Fabricator (Fitter)", code: "430A", slug: "metal-fabricator-fitter", live: false },
  { name: "Mobile Crane Operator", code: "339A", slug: "mobile-crane-operator", live: false },
  { name: "Motorcycle Technician", code: "310G", slug: "motorcycle-technician", live: false },
  { name: "Oil Heat System Technician", code: "313D", slug: "oil-heat-system-technician", live: false },
  { name: "Painter and Decorator", code: "404A", slug: "painter-decorator", live: false },
  { name: "Parts Technician", code: "311A", slug: "parts-technician", live: false },
  { name: "Plumber", code: "306A", slug: "plumber", live: true },
  { name: "Powerline Technician", code: "442B", slug: "powerline-technician", live: false },
  { name: "Recreation Vehicle Service Technician", code: "625A", slug: "recreation-vehicle-service-technician", live: false },
  { name: "Refrigeration & Air Conditioning Mechanic", code: "313A", slug: "refrigeration-air-conditioning-mechanic", live: false },
  { name: "Roofer", code: "403B", slug: "roofer", live: false },
  { name: "Sheet Metal Worker", code: "308A", slug: "sheet-metal-worker", live: false },
  { name: "Sprinkler Fitter", code: "443B", slug: "sprinkler-fitter", live: false },
  { name: "Steamfitter / Pipefitter", code: "307A", slug: "steamfitter-pipefitter", live: false },
  { name: "Tilesetter", code: "456B", slug: "tilesetter", live: false },
  { name: "Tool and Die Maker", code: "430B", slug: "tool-die-maker", live: false },
  { name: "Tower Crane Operator", code: "339B", slug: "tower-crane-operator", live: false },
  { name: "Transport Trailer Technician", code: "310T", slug: "transport-trailer-technician", live: false },
  { name: "Truck and Transport Mechanic", code: "310T", slug: "truck-transport-mechanic", live: false },
  { name: "Welder", code: "456A", slug: "welder", live: false },
];
