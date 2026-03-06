/**
 * Seed practice questions from per-trade data.
 * Run: node server/scripts/seedPracticeQuestions.js
 * Add more questions to the arrays below or load from JSON to scale to 500–1000 per trade.
 */

import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import connectDB from '../config/db.js';
import PracticeQuestion from '../models/PracticeQuestion.js';

dotenv.config({ path: join(dirname(fileURLToPath(import.meta.url)), '../../.env') });
dotenv.config({ path: join(dirname(fileURLToPath(import.meta.url)), '../.env') });

if (!process.env.MONGO_URI) {
  console.error('MONGO_URI is not set. Create a .env file in the server/ directory with MONGO_URI=mongodb://...');
  process.exit(1);
}

const TRADE_TOPICS = {
  'construction-electrician': [
    { id: 'A', title: 'Common Occupational Skills' },
    { id: 'B', title: 'Generating, Distribution & Service Systems' },
    { id: 'C', title: 'Wiring Systems' },
    { id: 'D', title: 'Motors and Control Systems' },
    { id: 'E', title: 'Signalling & Communication Systems' },
  ],
  plumber: [
    { id: 'A', title: 'Common Occupational Skills' },
    { id: 'B', title: 'Drainage, Waste and Vent Systems' },
    { id: 'C', title: 'Water Distribution Systems' },
    { id: 'D', title: 'Fixtures, Appliances and Equipment' },
    { id: 'E', title: 'Piping Systems' },
    { id: 'F', title: 'Special Systems' },
  ],
  hairstylist: [
    { id: 'A', title: 'Common Occupational Skills' },
    { id: 'B', title: 'Hair and Scalp Care' },
    { id: 'C', title: 'Cuts Hair' },
    { id: 'D', title: 'Styles Hair' },
    { id: 'E', title: 'Chemical Texture Services' },
    { id: 'F', title: 'Alters Hair Colour' },
    { id: 'G', title: 'Specialized Services' },
    { id: 'H', title: 'Salon Operations' },
  ],
};

function getTopicLabel(tradeSlug, topicId) {
  const topics = TRADE_TOPICS[tradeSlug];
  const t = topics?.find((x) => x.id === topicId);
  return t?.title || topicId;
}

const QUESTIONS = [
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-a-safety",
    topicLabel: "MWA A — Safety",
    question: "Which class of rubber insulating gloves provides the highest voltage protection?",
    options: [
      "Class 00 — 500V AC",
      "Class 0 — 1,000V AC",
      "Class 2 — 17,000V AC",
      "Class 4 — 40,000V AC"
    ],
    correctIndex: 3,
    explanation: "Rubber insulating glove classes: 00 (500V), 0 (1,000V), 1 (7,500V), 2 (17,000V), 3 (26,500V), 4 (40,000V AC). Class 4 provides the highest protection and is required for high-voltage work above 26,500V.",
    order: 1,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-a-safety",
    topicLabel: "MWA A — Safety",
    question: "What is the correct sequence for a Lock-Out/Tag-Out (LOTO) procedure?",
    options: [
      "Lock → Test → Notify → Isolate → Tag",
      "Notify → Identify energy sources → Isolate → Lock & Tag → Test for absence of voltage → Verify zero-energy state",
      "Isolate → Notify → Test → Lock → Tag",
      "Test → Isolate → Lock → Notify → Verify"
    ],
    correctIndex: 1,
    explanation: "Correct LOTO sequence: (1) Notify affected workers, (2) Identify all energy isolation points, (3) Isolate the equipment, (4) Apply personal lock and danger tag, (5) Test for absence of voltage, (6) Verify zero-energy state. Testing before locking creates a hazard.",
    order: 2,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-a-safety",
    topicLabel: "MWA A — Safety",
    question: "What PPE arc flash category is the minimum when performing live work at an incident energy of 4.5 cal/cm²?",
    options: [
      "PPE Category 0 (1.2 cal/cm²)",
      "PPE Category 1 (4 cal/cm²)",
      "PPE Category 2 (8 cal/cm²)",
      "PPE Category 3 (25 cal/cm²)"
    ],
    correctIndex: 2,
    explanation: "PPE Category 1 is rated to 4 cal/cm², which is less than the 4.5 cal/cm² exposure. PPE Category 2 (rated to 8 cal/cm²) is the minimum that exceeds the calculated incident energy. Arc flash PPE must always meet or exceed the incident energy at the work location.",
    order: 3,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-a-safety",
    topicLabel: "MWA A — Safety",
    question: "Which class of hard hat is required when working near live electrical conductors up to 20,000 volts?",
    options: [
      "Class G (General) — rated to 2,200V",
      "Class C (Conductive) — no electrical protection",
      "Class E (Electrical) — rated to 20,000V",
      "Class B — rated to 10,000V"
    ],
    correctIndex: 2,
    explanation: "Class E (Electrical) hard hats are dielectrically tested to 20,000V AC and are the minimum for working near energized conductors above 2,200V. Class G is rated to only 2,200V. Class C hard hats provide no electrical protection whatsoever.",
    order: 4,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-a-safety",
    topicLabel: "MWA A — Safety",
    question: "A worker enters an underground electrical vault. What confined space hazard must be assessed FIRST before entry?",
    options: [
      "Restricted egress in an emergency",
      "Electrical shock from energized equipment",
      "Atmospheric hazards — oxygen deficiency, toxic gases, or flammable vapours",
      "Flooding risk from groundwater"
    ],
    correctIndex: 2,
    explanation: "Atmospheric testing is the first and most critical assessment before confined space entry. Oxygen-deficient atmospheres (<19.5%) can render a worker unconscious without warning. Toxic gases (H₂S, CO) and flammable vapours must also be tested. A clear atmospheric test must precede all other hazard assessments.",
    order: 5,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-a-safety",
    topicLabel: "MWA A — Safety",
    question: "What does a CAT IV rating on a multimeter indicate?",
    options: [
      "Rated for low-energy electronic circuits only",
      "Rated for single-phase receptacle-connected loads",
      "Rated for three-phase distribution systems and fixed equipment",
      "Rated for utility service entrance, outdoor conductors, and overhead lines — highest transient protection"
    ],
    correctIndex: 3,
    explanation: "CAT IV is the highest overvoltage category, rated for measurements at the utility service entrance, outdoor conductors, and overhead power lines — the points in the system where transient overvoltages are most severe. Using an under-rated instrument risks explosive failure during a transient event.",
    order: 6,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-a-safety",
    topicLabel: "MWA A — Safety",
    question: "When must a Temporary Protective Ground (TPG) be applied to de-energized high-voltage conductors?",
    options: [
      "Only when the conductor is buried underground",
      "Whenever a worker will contact or work in close proximity to a de-energized HV conductor",
      "Only on conductors above 15,000V",
      "Only when the conductor is longer than 100 metres"
    ],
    correctIndex: 1,
    explanation: "TPGs must be applied whenever a worker will contact or be in close proximity to de-energized HV conductors. They drain induced and stored charge, and if the line is accidentally re-energized, create a bolted fault that trips upstream protection — protecting the worker. Required by the CEC and OH&S regulations regardless of line length.",
    order: 7,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-a-safety",
    topicLabel: "MWA A — Safety",
    question: "What does a 'danger tag' accomplish in a LOTO procedure?",
    options: [
      "It substitutes for a personal lock when a lock is unavailable",
      "It warns others that equipment must not be operated — it does not physically prevent operation",
      "It certifies the equipment has been electrically tested to zero energy",
      "It is required only by the prime contractor, not individual workers"
    ],
    correctIndex: 1,
    explanation: "A danger tag is a WARNING device only — it communicates a hazard but provides no physical barrier to operation. A personal lock provides the actual physical lockout. Tags must never substitute for locks when locks are practicable. If a lock cannot be applied, the tag must be accompanied by at least one additional means of securing the isolation device.",
    order: 8,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-a-safety",
    topicLabel: "MWA A — Safety",
    question: "What does the WHMIS skull-and-crossbones pictogram (GHS06) indicate?",
    options: [
      "Explosive material",
      "Oxidizing substance",
      "Acute toxicity — lethal or severely harmful at low exposure",
      "Environmental hazard"
    ],
    correctIndex: 2,
    explanation: "The skull and crossbones (GHS06) indicates acute toxicity — the substance can cause death or serious damage through inhalation, ingestion, or skin absorption at relatively low doses. It is one of the most serious WHMIS hazard categories and requires strict exposure controls.",
    order: 9,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-a-safety",
    topicLabel: "MWA A — Safety",
    question: "What is the purpose of step potential awareness when approaching a downed power line?",
    options: [
      "To ensure the worker steps over the conductor rather than on it",
      "The voltage difference between two ground contact points during a fault can drive lethal current through a person's lower body",
      "To avoid stepping on the insulating jacket and damaging it further",
      "Step potential only applies in substation environments, not on public roads"
    ],
    correctIndex: 1,
    explanation: "Step potential is the voltage difference between two points on earth's surface separated by one stride. During a ground fault, large current flowing through soil creates a voltage gradient. A person approaching with feet 1 m apart can have dangerous current pass foot-to-foot through their body. The safe approach is the 'shuffle step' — small steps keeping both feet together until beyond the hazard zone.",
    order: 10,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-a-tools",
    topicLabel: "MWA A — Tools and Equipment",
    question: "Which requirement applies to powder-actuated tool (PAT) operators on a job site?",
    options: [
      "Any worker can operate a PAT after a brief supervisor demonstration",
      "A PAT can only be operated by a licensed master electrician",
      "The operator must hold a valid operator's card from a manufacturer-approved training course",
      "PAT use requires a hot work permit on all job sites"
    ],
    correctIndex: 2,
    explanation: "PATs fire a fastener with an explosive charge and can cause serious injury if misused. All Canadian jurisdictions require operators to complete a manufacturer-approved training course and carry a valid operator's card on site. The card must be produced on request from a supervisor or safety officer.",
    order: 11,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-a-tools",
    topicLabel: "MWA A — Tools and Equipment",
    question: "What is the correct base-setback ratio when positioning an extension ladder?",
    options: [
      "1 foot of base setback for every 4 feet of working height",
      "1 foot of base setback for every 3 feet of working height",
      "The ladder must be vertical — no setback",
      "2 feet of setback for every 3 feet of height"
    ],
    correctIndex: 0,
    explanation: "The 4:1 rule: place the base 1 foot from the wall for every 4 feet of vertical height. A ladder reaching 20 ft high needs its base 5 ft from the wall. This creates the optimal ~75° angle for stability. Shallower angles increase tip-over risk; steeper angles increase kick-out risk.",
    order: 12,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-a-tools",
    topicLabel: "MWA A — Tools and Equipment",
    question: "Before lifting a load with chain rigging equipment, what marking must be verified?",
    options: [
      "Manufacturer logo and country of origin",
      "Working Load Limit (WLL) and date of last inspection",
      "Serial number and annual colour code tag",
      "Material grade of the chain only"
    ],
    correctIndex: 1,
    explanation: "The WLL must be marked on all rigging equipment and must never be exceeded. The inspection date confirms the equipment is within its inspection cycle. Equipment with worn, bent, stretched, or damaged links must be immediately removed from service. Using unlabelled or uninspected rigging risks catastrophic failure.",
    order: 13,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-a-tools",
    topicLabel: "MWA A — Tools and Equipment",
    question: "When should a non-conductive (fibreglass or nylon) fish tape be used instead of a steel fish tape?",
    options: [
      "In conduit runs longer than 30 metres to reduce friction",
      "Only in PVC conduit — steel tape must be used in metal conduit",
      "Whenever working in existing energized buildings where accidental contact with live conductors is possible",
      "Non-conductive tapes are only for low-voltage data cabling"
    ],
    correctIndex: 2,
    explanation: "Metal fish tapes conduct electricity and can transmit a lethal shock to the operator if they contact an energized conductor — especially in conduit that shares space with existing live circuits. A non-conductive fish tape eliminates this hazard. Steel tapes should only be used in confirmed de-energized conduit systems.",
    order: 14,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-a-organization",
    topicLabel: "MWA A — Work Organization",
    question: "On electrical drawings, a dashed line between two devices typically represents:",
    options: [
      "A 120V power circuit",
      "A conduit run that is underground or concealed",
      "A control wiring or signal circuit connection",
      "A future installation not yet approved"
    ],
    correctIndex: 2,
    explanation: "Dashed lines on electrical drawings conventionally represent control wiring, signal circuits, or hidden elements. Solid lines typically represent power conductors or conduit. Always consult the drawing legend, as conventions vary between engineering firms.",
    order: 15,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-a-organization",
    topicLabel: "MWA A — Work Organization",
    question: "Which drawing type shows the physical routing, conduit sizes, wire counts, and device locations as actually installed after project completion?",
    options: [
      "Shop drawing",
      "Single-line diagram",
      "As-built (record) drawing",
      "Schematic diagram"
    ],
    correctIndex: 2,
    explanation: "As-built drawings reflect the actual installed condition — incorporating all field changes made during construction. They are a required closeout deliverable on most commercial projects and are critical for future maintenance, renovations, and emergency response.",
    order: 16,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-a-organization",
    topicLabel: "MWA A — Work Organization",
    question: "An electrical permit has been issued for a commercial installation. When must the AHJ be notified for inspection?",
    options: [
      "Only at final commissioning",
      "At the stages specified on the permit — typically before concealing rough-in wiring and at final completion",
      "Only if a deficiency is discovered",
      "Once per calendar year regardless of project stage"
    ],
    correctIndex: 1,
    explanation: "Most electrical permits specify mandatory inspection stages — commonly rough-in (before closing walls) and final. The AHJ must inspect before work is concealed or energized at each required stage. Bypassing inspections can result in orders to open walls or disconnect the installation.",
    order: 17,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-a-support",
    topicLabel: "MWA A — Support Components",
    question: "What is the maximum support spacing for EMT run horizontally in a commercial building per the CEC?",
    options: [
      "1.0 m",
      "1.5 m",
      "3.0 m",
      "No maximum if secured at each end"
    ],
    correctIndex: 2,
    explanation: "CEC Rule 12-1000 requires EMT to be supported at intervals not exceeding 3.0 m and within 0.9 m of each box, fitting, or termination. Insufficient support allows conduit to sag, creates stress on fittings, and can damage conductor insulation.",
    order: 18,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-a-support",
    topicLabel: "MWA A — Support Components",
    question: "What type of conduit body allows a 90° direction change and provides rear access for pulling conductors?",
    options: [
      "LB conduit body",
      "C conduit body",
      "T conduit body",
      "LL conduit body"
    ],
    correctIndex: 0,
    explanation: "An LB (back access) conduit body makes a 90° turn with the access cover on the back, making it ideal for wall entries from conduit coming out of a ceiling or floor. C bodies are straight-through pull points; T bodies allow a tee junction; LL/LR turn left or right respectively.",
    order: 19,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-a-support",
    topicLabel: "MWA A — Support Components",
    question: "What determines the maximum allowable load on a cable tray system?",
    options: [
      "Always 500 kg uniformly distributed per the CEC",
      "The manufacturer's rated load capacity marked on the tray",
      "The weight of the cables divided by the number of support spans",
      "The load is unlimited if supported at 1.5 m intervals"
    ],
    correctIndex: 1,
    explanation: "Cable tray load capacity is determined by the manufacturer and must be marked on the tray. The CEC requires that cable tray not be loaded beyond its rated capacity. Ratings vary by width, depth, material (steel, aluminum, fibreglass), and span between supports.",
    order: 20,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-a-commissioning",
    topicLabel: "MWA A — Commissioning",
    question: "Before energizing a new 600V distribution panel, which minimum tests must be performed?",
    options: [
      "Visual inspection only",
      "Insulation resistance (megger) test and continuity verification of grounding conductors",
      "Only a voltage check at the utility meter",
      "Load current test at 50% voltage"
    ],
    correctIndex: 1,
    explanation: "Pre-energization commissioning must include: (1) insulation resistance (IR/megger) testing of all conductors to verify no breakdown between conductors or to ground, and (2) continuity testing of equipment grounding conductors to confirm the fault return path is intact. Visual inspection alone is insufficient.",
    order: 21,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-a-commissioning",
    topicLabel: "MWA A — Commissioning",
    question: "A megger test on a new 600V feeder reads 50 MΩ. Is this acceptable?",
    options: [
      "No — any reading below 100 MΩ requires cable replacement",
      "Yes — the general guideline is 1 MΩ minimum per 1000V of operating voltage; 50 MΩ indicates excellent insulation",
      "No — megger tests are not valid on cables rated below 1000V",
      "Yes, but only if ambient temperature is above 20°C"
    ],
    correctIndex: 1,
    explanation: "The general industry guideline (IEEE 43, NETA) is a minimum of 1 MΩ per 1000V of rated voltage. For a 600V feeder, the minimum acceptable IR is approximately 1 MΩ. A reading of 50 MΩ indicates excellent insulation integrity. Readings near the minimum threshold require investigation for damaged insulation or moisture ingress.",
    order: 22,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-a-commissioning",
    topicLabel: "MWA A — Commissioning",
    question: "During commissioning, a three-phase motor runs in the wrong direction. What is the simplest correction?",
    options: [
      "Swap any two of the three phase conductors at the motor terminals",
      "Reverse polarity of the control circuit",
      "Change the overload relay setting",
      "Swap A and C phases at the utility meter"
    ],
    correctIndex: 0,
    explanation: "For a three-phase motor, swapping any two of the three supply conductors reverses the phase sequence and changes rotation. This is the simplest and correct approach. Swapping at the utility meter would reverse all downstream motors. Control circuit changes do not affect motor rotation direction.",
    order: 23,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-a-commissioning",
    topicLabel: "MWA A — Commissioning",
    question: "What must be posted on the door of a distribution panel before it is placed in service?",
    options: [
      "A copy of the electrical permit",
      "An arc flash hazard label and a completed circuit directory",
      "The insulation resistance test report",
      "A load calculation summary from the engineer"
    ],
    correctIndex: 1,
    explanation: "Before energizing and placing a panel in service, both an arc flash warning label (identifying incident energy, boundary distances, and required PPE) and a completed circuit directory (identifying every circuit by its load) must be posted on the panel door. Both are required by the CEC and are verified during AHJ inspection.",
    order: 24,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-services",
    topicLabel: "MWA B — Services and Metering",
    question: "In an Edison three-wire 120/240V single-phase service, what is the voltage relationship between the two ungrounded conductors?",
    options: [
      "Both are 120V to ground and 120V to each other",
      "They are 120V to the grounded neutral and 240V to each other — 180° out of phase",
      "They are 240V to ground and 480V to each other",
      "They are in phase and 240V to neutral"
    ],
    correctIndex: 1,
    explanation: "In the Edison three-wire system each ungrounded conductor is 120V to the neutral (opposite ends of a centre-tapped transformer secondary) and 240V to each other. They are 180° out of phase. 120V loads connect phase-to-neutral; 240V loads connect phase-to-phase.",
    order: 25,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-services",
    topicLabel: "MWA B — Services and Metering",
    question: "In a 120/208V three-phase four-wire wye system, what is the line-to-line voltage?",
    options: [
      "120V",
      "173V",
      "208V",
      "240V"
    ],
    correctIndex: 2,
    explanation: "In a wye system, VLL = VLN × √3 = 120 × 1.732 = 208V. This is the standard low-voltage commercial distribution system in Canada. Single-phase 120V loads connect phase-to-neutral; three-phase loads connect all three phases.",
    order: 26,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-services",
    topicLabel: "MWA B — Services and Metering",
    question: "In a 347/600V three-phase four-wire wye system, which voltage is used for single-phase lighting circuits?",
    options: [
      "208V phase-to-phase",
      "347V phase-to-neutral",
      "600V phase-to-phase",
      "480V phase-to-neutral"
    ],
    correctIndex: 1,
    explanation: "In a 347/600V wye system, 347V is the phase-to-neutral voltage — used for single-phase fluorescent/LED lighting circuits. 600V is the phase-to-phase voltage (347 × √3 ≈ 600V) — used for three-phase motors and large equipment. This is the most common industrial distribution voltage in Canada.",
    order: 27,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-services",
    topicLabel: "MWA B — Services and Metering",
    question: "In a 120/240V three-phase four-wire high-leg delta service, which phase measures approximately 208V to neutral and must be identified with orange marking?",
    options: [
      "Phase A",
      "Phase B — the high (wild) leg",
      "Phase C",
      "The neutral conductor"
    ],
    correctIndex: 1,
    explanation: "In a high-leg delta, Phase B (wild leg) measures approximately (240/2) × √3 ≈ 208V to neutral — unsuitable for 120V single-phase loads. The CEC requires orange identification on this conductor at all points where it could be confused with a standard 120V conductor.",
    order: 28,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-services",
    topicLabel: "MWA B — Services and Metering",
    question: "What is the minimum overhead clearance required for a service conductor passing over a driveway accessible to vehicles?",
    options: [
      "3.0 m",
      "4.0 m",
      "4.9 m",
      "5.5 m"
    ],
    correctIndex: 2,
    explanation: "CEC Rule 6-104 requires a minimum clearance of 4.9 m (16 ft) for service conductors over areas accessible to vehicle traffic. This prevents contact with tall vehicles such as trucks and farm equipment. Pedestrian-only areas have a lower minimum clearance requirement.",
    order: 29,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-services",
    topicLabel: "MWA B — Services and Metering",
    question: "What is the purpose of a current transformer (CT) in a metering installation?",
    options: [
      "To step up voltage for transmission to the meter",
      "To proportionally reduce large primary currents to a safe, measurable secondary current (typically 5A) for the revenue meter",
      "To isolate metering equipment from the utility",
      "To provide surge protection for the revenue meter"
    ],
    correctIndex: 1,
    explanation: "A CT steps down high primary current to a proportional secondary current — typically 5A at full load — that the revenue meter can safely measure. For example, a 400:5 CT steps 400A to 5A (ratio 80:1). The meter reading is multiplied by the CT ratio to give actual consumption.",
    order: 30,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-services",
    topicLabel: "MWA B — Services and Metering",
    question: "Why must a current transformer (CT) secondary never be open-circuited while primary current is flowing?",
    options: [
      "The meter will give an inaccurate reading",
      "An open CT secondary develops dangerously high voltages that can damage insulation and harm personnel",
      "The primary fuse will blow immediately",
      "The CT will overheat and require replacement"
    ],
    correctIndex: 1,
    explanation: "A CT must always have a burden (meter or short) connected. With an open secondary, the CT core saturates, and the high-frequency flux induces potentially thousands of volts across the open terminals. Always short the CT secondary before opening the metering circuit.",
    order: 31,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-services",
    topicLabel: "MWA B — Services and Metering",
    question: "The CEC permits a maximum of how many service disconnecting means for a single building?",
    options: [
      "Always exactly one",
      "A maximum of six grouped at one location",
      "Unlimited, distributed throughout",
      "Two — one for each half of the service"
    ],
    correctIndex: 1,
    explanation: "CEC Rule 6-200 permits a maximum of six service disconnects grouped at one location. This ensures that firefighters and emergency personnel can disconnect all building power from a single location. If more than six circuits are needed, a main disconnect ahead of the group is required.",
    order: 32,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-services",
    topicLabel: "MWA B — Services and Metering",
    question: "Why must antioxidant compound be applied to aluminum conductor terminations?",
    options: [
      "To lubricate the conductor for pulling through conduit",
      "To prevent aluminum oxide formation, which is an insulator that increases connection resistance",
      "To insulate the conductor at the terminal lug",
      "To identify aluminum conductors from copper"
    ],
    correctIndex: 1,
    explanation: "Aluminum oxidizes rapidly in air, forming aluminum oxide — an electrical insulator. Antioxidant compound prevents new oxide formation and displaces existing oxide at the contact surface, ensuring a stable low-resistance connection. Without it, oxidation increases resistance, causing heating and eventual failure.",
    order: 33,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-services",
    topicLabel: "MWA B — Services and Metering",
    question: "A three-phase 600V service has an available fault current of 25,000A. What minimum interrupting rating must the main breaker have?",
    options: [
      "10,000A IC",
      "18,000A IC",
      "22,000A IC",
      "At least 25,000A IC"
    ],
    correctIndex: 3,
    explanation: "The interrupting capacity (IC) of the main disconnect must equal or exceed the maximum available fault current. An under-rated breaker risks explosive failure during a fault. A short-circuit study or utility letter is required to determine available fault current.",
    order: 34,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-grounding",
    topicLabel: "MWA B — Grounding and Bonding",
    question: "What is the key difference between system grounding and equipment bonding?",
    options: [
      "System grounding connects the neutral to earth; bonding connects non-current-carrying metal parts together and to the grounded conductor",
      "They are the same — both connect neutral to earth",
      "Bonding connects neutral to earth; grounding connects metal enclosures to each other",
      "System grounding is for HV only; bonding is for LV only"
    ],
    correctIndex: 0,
    explanation: "System grounding establishes a reference voltage by connecting the neutral to earth. Equipment bonding connects all non-current-carrying metallic enclosures, conduits, and equipment together and to the grounded conductor, creating a low-impedance fault return path. Both are required and serve different but complementary purposes.",
    order: 35,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-grounding",
    topicLabel: "MWA B — Grounding and Bonding",
    question: "A concrete-encased grounding electrode (Ufer ground) requires a minimum of how many metres of rebar or copper conductor in the footing?",
    options: [
      "2.4 m",
      "4.5 m",
      "6.0 m",
      "7.5 m"
    ],
    correctIndex: 2,
    explanation: "CEC Rule 10-700 requires a concrete-encased electrode to have at least 6.0 m of rebar (minimum 13 mm diameter) or bare copper conductor embedded in the concrete footing. The concrete's moisture content and earth contact make this one of the most effective grounding electrodes available.",
    order: 36,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-grounding",
    topicLabel: "MWA B — Grounding and Bonding",
    question: "A ground rod must be driven to what minimum depth? What is permitted if rock prevents this?",
    options: [
      "2.4 m; if rock prevents this, drive at an angle not exceeding 45° from vertical",
      "3.0 m; no exceptions permitted",
      "1.8 m; add a second rod if rock is encountered",
      "2.4 m; substitute a buried plate electrode if rock prevents driving"
    ],
    correctIndex: 0,
    explanation: "CEC Rule 10-700(2) requires ground rods to be driven to a minimum of 2.4 m. If rock prevents this depth, the rod may be driven at an angle not exceeding 45° from vertical. If that still cannot achieve 2.4 m, an alternative electrode type must be used.",
    order: 37,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-grounding",
    topicLabel: "MWA B — Grounding and Bonding",
    question: "Where must the main bonding jumper be installed in a service entrance?",
    options: [
      "At each subpanel throughout the building",
      "At the first means of disconnection — connecting the neutral bus to the equipment grounding bus and the service enclosure",
      "At the utility transformer only",
      "At each panelboard feeding 240V loads"
    ],
    correctIndex: 1,
    explanation: "The main bonding jumper connects the grounded (neutral) conductor to the equipment grounding conductor and the service enclosure at the service disconnect. This completes the fault return path. It must be installed only at the service entrance — never at downstream panelboards, where it would allow neutral current to flow on grounding conductors.",
    order: 38,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-grounding",
    topicLabel: "MWA B — Grounding and Bonding",
    question: "What is the purpose of Ground Fault Protection (GFP) on services rated 150V to ground or more and 1,000A or more?",
    options: [
      "To protect personnel from shock on the service conductors",
      "To detect low-level ground faults and open the service disconnect before a sustained arcing fault causes a fire",
      "To measure ground leakage current for billing",
      "To trip on any current above rated service ampacity"
    ],
    correctIndex: 1,
    explanation: "GFP detects low-level arcing ground faults (as low as 1,200A on some systems) that won't trip the main breaker but can sustain arcing and cause catastrophic fires. CEC Rule 14-102 requires GFP on solidly grounded services rated 150V to ground or greater and 1,000A or more.",
    order: 39,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-grounding",
    topicLabel: "MWA B — Grounding and Bonding",
    question: "In a separately derived system (transformer secondary), where must the system grounding connection be made?",
    options: [
      "At the main service entrance only — no separate grounding needed at the transformer",
      "At the transformer secondary or first means of overcurrent protection on the secondary",
      "At any convenient point on the secondary conductors",
      "At the transformer primary only"
    ],
    correctIndex: 1,
    explanation: "A separately derived system has no direct metallic connection to the supply conductors. The CEC requires a grounding electrode conductor connected at the transformer secondary (or first OCPD on the secondary) and a new system bond established there — creating a proper voltage reference and fault return path for the secondary system.",
    order: 40,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-grounding",
    topicLabel: "MWA B — Grounding and Bonding",
    question: "Why must a lightning protection system be bonded to the electrical system's grounding electrode system?",
    options: [
      "To allow lightning current to be used as a backup power source",
      "To equalize potential during a lightning strike and prevent side-flashing between the lightning system and nearby grounded metal",
      "To provide a path for static electricity only",
      "To satisfy utility revenue metering requirements"
    ],
    correctIndex: 1,
    explanation: "Without bonding, a massive lightning current creates a large potential difference between the lightning down conductor and nearby grounded metal, causing a side flash (arc) that can start fires and injure personnel. Bonding ensures all systems rise to the same potential simultaneously during a strike.",
    order: 41,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-grounding",
    topicLabel: "MWA B — Grounding and Bonding",
    question: "What does Impressed Current Cathodic Protection (ICCP) do to protect buried metallic structures?",
    options: [
      "Applies AC voltage to neutralize corrosion currents",
      "Applies DC current making the protected structure cathodic, suppressing galvanic corrosion",
      "Applies pulsed DC to detect corrosion depth",
      "Electrically isolates the buried structure from stray AC currents"
    ],
    correctIndex: 1,
    explanation: "ICCP systems use a DC rectifier to supply current from an anode through soil to the protected structure (cathode). Making the structure cathodic suppresses the oxidation (corrosion) reaction. Used to protect pipelines, storage tanks, ship hulls, and reinforced concrete from galvanic corrosion.",
    order: 42,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-protection",
    topicLabel: "MWA B — Protection and Distribution",
    question: "What is the primary benefit of a current-limiting fuse interrupting a fault in less than one half-cycle?",
    options: [
      "It allows a larger fault current to be cleared",
      "It limits peak let-through current, reducing thermal and mechanical stress on downstream equipment",
      "It provides time-delay coordination with downstream devices",
      "It is resettable after clearing a fault"
    ],
    correctIndex: 1,
    explanation: "Current-limiting fuses operate in < ½ cycle (< 8.3 ms at 60 Hz), interrupting before current reaches its prospective peak. This dramatically reduces let-through energy (I²t), protecting downstream equipment with lower withstand ratings than the available fault current.",
    order: 43,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-protection",
    topicLabel: "MWA B — Protection and Distribution",
    question: "What is the difference between an OCPD's continuous current rating and its interrupting rating?",
    options: [
      "They are the same",
      "The continuous rating is the normal load current it can carry; the interrupting rating is the maximum fault current it can safely clear",
      "The interrupting rating is the load current; the continuous rating is the fault capacity",
      "Continuous rating applies only to fuses; interrupting rating applies only to breakers"
    ],
    correctIndex: 1,
    explanation: "Continuous current rating (e.g., 100A) is the maximum load current the device can carry indefinitely without tripping. Interrupting rating (e.g., 10,000A IC or kAIC) is the maximum fault current the device can safely clear without explosion. Both must be adequate for the installation.",
    order: 44,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-protection",
    topicLabel: "MWA B — Protection and Distribution",
    question: "A GFCI device is designed to trip at approximately what ground fault current level?",
    options: [
      "1 mA",
      "5 mA",
      "30 mA",
      "100 mA"
    ],
    correctIndex: 1,
    explanation: "GFCI devices trip at approximately 4–6 mA (typically 5 mA) of ground fault current — fast enough to prevent ventricular fibrillation. Currents as low as 10 mA can cause the 'let-go' threshold (muscular paralysis); 100 mA can be fatal. The GFCI trips within 1/40th of a second when it detects this imbalance.",
    order: 45,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-protection",
    topicLabel: "MWA B — Protection and Distribution",
    question: "Where does the CEC require AFCI (Arc Fault Circuit Interrupter) protection?",
    options: [
      "All circuits in industrial facilities",
      "Branch circuits supplying 125V 15A and 20A receptacles in dwelling units",
      "All outdoor circuits",
      "Three-phase circuits above 30A"
    ],
    correctIndex: 1,
    explanation: "CEC Rule 26-710(e) requires AFCI protection on branch circuits supplying 15A and 20A 125V receptacles in dwelling units. AFCIs detect the distinctive electrical signature of arc faults — which can ignite fires without tripping a standard breaker — and open the circuit before ignition.",
    order: 46,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-protection",
    topicLabel: "MWA B — Protection and Distribution",
    question: "What is a Surge Protection Device (SPD) designed to protect against?",
    options: [
      "Sustained overcurrent on distribution feeders",
      "Transient overvoltages (spikes from lightning, switching events) that can damage equipment insulation and electronics",
      "Sustained ground faults on 600V systems",
      "Harmonic distortion from non-linear loads"
    ],
    correctIndex: 1,
    explanation: "SPDs clamp brief, high-amplitude voltage transients caused by lightning strikes, utility switching, or load switching, diverting transient energy to ground before it damages equipment insulation or electronics. They typically use MOVs (Metal Oxide Varistors) or TVS diodes as clamping elements.",
    order: 47,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-protection",
    topicLabel: "MWA B — Protection and Distribution",
    question: "What NEMA enclosure type is required for outdoor equipment exposed to rain, sleet, and external ice formation?",
    options: [
      "NEMA Type 1",
      "NEMA Type 3R",
      "NEMA Type 4",
      "NEMA Type 12"
    ],
    correctIndex: 2,
    explanation: "NEMA Type 4 enclosures are watertight — they protect against rain, splashing water, hose-directed water, and external ice. Type 3R protects against falling rain and sleet only — not hose-directed water. Type 4X adds corrosion resistance. Type 12 is indoor-use only.",
    order: 48,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-protection",
    topicLabel: "MWA B — Protection and Distribution",
    question: "What key advantage does an online (double-conversion) UPS have over an offline (standby) UPS?",
    options: [
      "Lower cost and simpler maintenance",
      "Zero transfer time on power failure — the load always runs from the inverter, providing complete isolation from utility power quality problems",
      "Better efficiency at full load",
      "Larger battery capacity"
    ],
    correctIndex: 1,
    explanation: "An online UPS continuously converts AC→DC→AC. The load always runs from the inverter with no transfer delay on power failure, and the load is completely isolated from utility harmonics, sags, surges, and frequency variations. An offline UPS passes utility power through and has a brief transfer delay (10–20 ms) on failure.",
    order: 49,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-protection",
    topicLabel: "MWA B — Protection and Distribution",
    question: "What is the purpose of a power factor correction capacitor bank at a main distribution board?",
    options: [
      "To reduce harmonics from non-linear loads",
      "To supply reactive power locally, reducing reactive current from the utility and improving power factor",
      "To increase available fault current for faster breaker operation",
      "To store energy for use during utility outages"
    ],
    correctIndex: 1,
    explanation: "Capacitor banks supply reactive power (VARs) locally to inductive loads, reducing the reactive current the utility must supply. This improves power factor, reduces utility demand charges, decreases I²R cable losses, and can increase system capacity. They do not reduce harmonics — harmonic filters are required for that.",
    order: 50,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-protection",
    topicLabel: "MWA B — Protection and Distribution",
    question: "What is the purpose of a Motor Control Centre (MCC)?",
    options: [
      "A dedicated enclosure for revenue metering equipment",
      "A centralised assembly of motor starters, disconnects, and controls that feed and control multiple motors from a single location",
      "A remote-control panel for operating motors from a distance only",
      "A transformer used exclusively for motor starting"
    ],
    correctIndex: 1,
    explanation: "An MCC is a factory-assembled, floor-mounted assembly containing motor starters (DOL, reduced voltage, VFD), branch circuit protection, disconnects, and control components for multiple motors. MCCs provide centralised control, simplified maintenance, and coordinated protection for large motor installations.",
    order: 51,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-transformers",
    topicLabel: "MWA B — Transformers",
    question: "A transformer has a turns ratio of 10:1 (primary:secondary). If the primary voltage is 600V, what is the secondary voltage?",
    options: [
      "6V",
      "60V",
      "600V",
      "6,000V"
    ],
    correctIndex: 1,
    explanation: "V₂ = V₁ / a = 600V / 10 = 60V. The turns ratio a = N₁/N₂ = V₁/V₂ = I₂/I₁. In a step-down transformer, current is inversely proportional: secondary current = primary current × 10 (ignoring losses).",
    order: 52,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-transformers",
    topicLabel: "MWA B — Transformers",
    question: "A 75 kVA, 600V/208V three-phase transformer is fully loaded. What is the approximate full-load secondary line current?",
    options: [
      "72A",
      "125A",
      "208A",
      "360A"
    ],
    correctIndex: 2,
    explanation: "I = S / (√3 × VL) = 75,000 / (1.732 × 208) = 75,000 / 360.3 ≈ 208A. The full-load primary current = 75,000 / (1.732 × 600) ≈ 72A. Secondary current is higher because secondary voltage is lower — consistent with the turns ratio.",
    order: 53,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-transformers",
    topicLabel: "MWA B — Transformers",
    question: "A 45 kVA, 600V/120-240V single-phase transformer is at full load. What is the approximate full-load secondary current at 240V?",
    options: [
      "75A",
      "125A",
      "187A",
      "375A"
    ],
    correctIndex: 2,
    explanation: "I₂ = S / V₂ = 45,000 / 240 = 187.5A ≈ 187A. For a single-phase transformer, I = S / V. The primary current = 45,000 / 600 = 75A. Secondary current is higher because secondary voltage is lower.",
    order: 54,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-transformers",
    topicLabel: "MWA B — Transformers",
    question: "What does voltage regulation (VR%) of a transformer express, and what does a low value indicate?",
    options: [
      "The ratio of primary to secondary voltage",
      "VR% = (V_NL − V_FL) / V_FL × 100% — a low value means secondary voltage stays nearly constant from no-load to full-load",
      "The transformer's efficiency at rated load",
      "The percentage of rated kVA available for continuous operation"
    ],
    correctIndex: 1,
    explanation: "Voltage regulation = (V_no-load − V_full-load) / V_full-load × 100%. A low VR% (2–4%) indicates stable secondary voltage and low internal impedance. High VR% (>10%) means significant voltage drop under load and higher fault current contribution from the transformer.",
    order: 55,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-transformers",
    topicLabel: "MWA B — Transformers",
    question: "What is K-factor in transformer specifications, and why is it important for non-linear loads?",
    options: [
      "A coefficient relating transformer kVA to physical weight",
      "A rating indicating the transformer's ability to handle harmonic currents — higher K-factor handles more distorted current without excessive heating",
      "The ratio of no-load losses to full-load losses",
      "A derating factor for elevated ambient temperatures"
    ],
    correctIndex: 1,
    explanation: "K-factor quantifies additional heating from harmonic currents produced by non-linear loads (VFDs, computers, LED drivers, UPS). A standard K-1 transformer is designed for linear loads. K-4, K-13, K-20 transformers have reinforced construction for increasing harmonic levels. Using a K-1 transformer on heavy non-linear loads causes premature failure.",
    order: 56,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-transformers",
    topicLabel: "MWA B — Transformers",
    question: "A single-phase transformer has 500 primary turns connected to 240V and 50 secondary turns. What are the secondary voltage and turns ratio?",
    options: [
      "24V, 10:1 step-down",
      "2400V, 1:10 step-up",
      "24V, 1:10",
      "240V, 1:1"
    ],
    correctIndex: 0,
    explanation: "Turns ratio a = N₁/N₂ = 500/50 = 10:1 (step-down). V₂ = V₁/a = 240/10 = 24V. This is a step-down transformer — secondary voltage is lower, secondary current is proportionally higher. Typical application: control power transformer (CPT) for 24V control circuits.",
    order: 57,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-transformers",
    topicLabel: "MWA B — Transformers",
    question: "What is the difference between a delta-wye and a wye-delta transformer connection, and when is each preferred?",
    options: [
      "They are identical — just different naming conventions",
      "Delta-wye steps up voltage and provides a neutral for grounding; wye-delta is used for HV transmission and does not provide a secondary neutral",
      "Delta-wye is for single-phase; wye-delta is for three-phase",
      "Delta-wye has lower impedance; wye-delta has higher impedance"
    ],
    correctIndex: 1,
    explanation: "A delta-wye transformer steps up voltage and provides a neutral on the secondary wye winding — used for distribution substations where a neutral is needed for single-phase loads and grounding. A wye-delta transformer does not provide a secondary neutral — used for HV transmission steps and motor drive applications where no secondary neutral is needed.",
    order: 58,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-transformers",
    topicLabel: "MWA B — Transformers",
    question: "Why must CEC transformer primary protection not exceed 125% of rated primary current (for transformers ≥ 9% impedance)?",
    options: [
      "To protect the transformer core from overheating at all times",
      "To protect the primary conductors and transformer from overcurrent while allowing transformer inrush current to pass without tripping",
      "To match the utility breaker rating at the service entrance",
      "To ensure the secondary breaker always trips before the primary OCPD"
    ],
    correctIndex: 1,
    explanation: "CEC Rule 26-252 requires that primary OCPD not exceed 125% of rated primary current for transformers with ≥9% impedance. This protects the primary conductors and transformer from sustained overcurrent while allowing normal transformer energisation inrush (which can be 6–10× rated current for a few cycles) to pass without nuisance tripping.",
    order: 59,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-renewable",
    topicLabel: "MWA B — Renewable Energy",
    question: "What is anti-islanding protection in a grid-tied solar PV inverter and why is it mandatory?",
    options: [
      "A device that prevents the solar system from overcharging battery banks",
      "A feature that shuts down the inverter when utility power is lost, preventing back-energisation of de-energised distribution lines",
      "A lightning surge protection system for the solar array",
      "A thermal protection system that limits inverter output during high temperatures"
    ],
    correctIndex: 1,
    explanation: "Anti-islanding is mandatory on all grid-tied inverters. When the utility de-energises (outage, maintenance), the inverter must disconnect within a prescribed time. Without it, the solar system could continue to energise utility lines — creating a lethal hazard for utility workers on supposedly dead equipment.",
    order: 60,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-renewable",
    topicLabel: "MWA B — Renewable Energy",
    question: "What does a string inverter do differently from a micro-inverter in a solar PV system?",
    options: [
      "A string inverter converts DC from multiple panels in series to AC at one central location; a micro-inverter converts DC to AC at each individual panel",
      "A string inverter is for large utility-scale systems only; a micro-inverter is for residential only",
      "A string inverter generates AC; a micro-inverter generates DC",
      "They are identical — the terms are interchangeable"
    ],
    correctIndex: 0,
    explanation: "A string inverter receives the combined DC output of a series string and converts it to AC centrally. If one panel is shaded, the entire string output is reduced. Micro-inverters process each panel independently — maximising output when shading is present — but at higher unit cost.",
    order: 61,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-renewable",
    topicLabel: "MWA B — Renewable Energy",
    question: "What is the function of the charge controller in an off-grid solar battery storage system?",
    options: [
      "Converts DC battery power to AC for household loads",
      "Regulates charging current from the solar array to prevent overcharging and over-discharging of the battery bank",
      "Connects the off-grid system to the utility grid for emergency backup",
      "Measures and displays energy production and consumption"
    ],
    correctIndex: 1,
    explanation: "The charge controller sits between the solar array and the battery bank, regulating voltage and current to charge batteries efficiently without overcharging (gassing, damage) and preventing over-discharge (which reduces lifespan). MPPT charge controllers also maximise power harvest from the array.",
    order: 62,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-renewable",
    topicLabel: "MWA B — Renewable Energy",
    question: "The CEC limits residential rooftop solar PV systems to a maximum DC system voltage of:",
    options: [
      "120V DC",
      "600V DC",
      "1000V DC",
      "1500V DC"
    ],
    correctIndex: 1,
    explanation: "The CEC limits residential rooftop solar PV systems to a maximum of 600V DC for safety. Larger commercial and utility-scale systems may use 1000V or 1500V DC. The 600V limit aligns with the ratings of readily available residential-grade inverters, combiners, wiring methods, and disconnects.",
    order: 63,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-renewable",
    topicLabel: "MWA B — Renewable Energy",
    question: "How is a variable-frequency AC output from a wind turbine made compatible with the utility grid?",
    options: [
      "Directly — variable frequency AC is compatible with the utility grid",
      "Through a rectifier (AC→DC) followed by a grid-tied inverter (DC→fixed-frequency AC)",
      "Through a step-up transformer only",
      "Through a synchronous condenser that stabilises frequency"
    ],
    correctIndex: 1,
    explanation: "Wind turbines produce variable-frequency AC because rotor speed varies with wind speed. Full power conversion (AC→DC→AC) allows the turbine to operate at variable speed while delivering grid-synchronised, fixed-frequency 60 Hz power.",
    order: 64,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-highvoltage",
    topicLabel: "MWA B — High Voltage",
    question: "Above what voltage does the CEC classify a system as 'high voltage'?",
    options: [
      "601V",
      "750V",
      "1000V",
      "5000V"
    ],
    correctIndex: 1,
    explanation: "The CEC defines high voltage as systems operating above 750V. CEC Section 36 rules apply above 750V. Common industrial HV distribution voltages include 4,160V, 13,800V, and 27,600V.",
    order: 65,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-highvoltage",
    topicLabel: "MWA B — High Voltage",
    question: "What is the purpose of stress relief terminations (stress cones) on medium-voltage cable terminations?",
    options: [
      "To provide physical support for the cable",
      "To redistribute the electric field concentration at the cut-back shielding, preventing corona discharge and insulation failure",
      "To colour-code the phases at MV terminations",
      "To provide moisture protection for the cable end"
    ],
    correctIndex: 1,
    explanation: "Where MV cable shielding is cut back, the electric field becomes highly concentrated at the cut edge, causing corona and eventual insulation breakdown. Stress cones gradually redistribute the field over a longer distance, eliminating the dangerous concentration and allowing reliable long-term operation.",
    order: 66,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-highvoltage",
    topicLabel: "MWA B — High Voltage",
    question: "What is 'touch potential' in the context of HV substation safety?",
    options: [
      "The voltage required to initiate an arc flash at HV",
      "The voltage difference between a grounded object a person touches and the ground beneath their feet during a fault",
      "The voltage rating of insulating gloves for HV work",
      "The potential difference across the air gap between HV conductors"
    ],
    correctIndex: 1,
    explanation: "Touch potential is the difference between a metallic object (substation fence, equipment frame) and the ground beneath a person's feet during a ground fault. Current from this difference flows hand-to-foot through the body and can be lethal. Substation ground grid design aims to keep touch potential within safe limits defined by IEEE 80.",
    order: 67,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-highvoltage",
    topicLabel: "MWA B — High Voltage",
    question: "What type of insulating medium is commonly used in medium-voltage distribution transformers to provide both insulation and cooling?",
    options: [
      "Air",
      "Mineral oil",
      "Dry (cast resin)",
      "SF₆ gas"
    ],
    correctIndex: 1,
    explanation: "Mineral oil provides excellent electrical insulation and absorbs heat from the core and windings, transferring it to the tank walls and radiators. Dry-type (cast resin) transformers are used indoors or in environmentally sensitive areas where oil spills are a concern. SF₆ is used in gas-insulated switchgear (GIS), not typically in distribution transformers.",
    order: 68,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-highvoltage",
    topicLabel: "MWA B — High Voltage",
    question: "What is a vacuum interrupter in a medium-voltage switchgear breaker?",
    options: [
      "A device that removes air from the breaker enclosure to reduce arc temperature",
      "A sealed chamber in which the arc formed during current interruption is extinguished in a high vacuum, preventing arc re-ignition",
      "A device that creates a vacuum to pull contacts apart faster",
      "A pressure relief valve on the breaker enclosure"
    ],
    correctIndex: 1,
    explanation: "In a vacuum circuit breaker, the contacts separate inside a hermetically sealed vacuum bottle. The vacuum (~10⁻⁶ to 10⁻⁸ Torr) has no gas molecules to sustain an arc — the arc extinguishes at the first current zero crossing and cannot re-ignite. Vacuum interrupters are reliable, low-maintenance, and widely used in MV switchgear from 1kV to 38kV.",
    order: 69,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-highvoltage",
    topicLabel: "MWA B — High Voltage",
    question: "What is a power fuse used for in a medium-voltage distribution system?",
    options: [
      "To provide metering for HV distribution feeders",
      "To protect MV distribution transformers, capacitor banks, and feeders from overcurrent and fault conditions",
      "To switch capacitor banks on and off for power factor correction",
      "To measure available fault current at MV distribution points"
    ],
    correctIndex: 1,
    explanation: "Power fuses (such as expulsion-type or current-limiting fuses) protect MV distribution transformers, feeder laterals, and capacitor banks from overcurrent and faults. They are single-shot devices that must be replaced after operation. Expulsion fuses extinguish the arc by venting hot gas; current-limiting fuses contain the arc in a sand-filled barrel to limit let-through energy.",
    order: 70,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-highvoltage",
    topicLabel: "MWA B — High Voltage",
    question: "What is the purpose of a potential transformer (PT or VT) in a high-voltage metering or protection system?",
    options: [
      "To step up LV control power to HV for protective relay operation",
      "To step down HV to a safe, standard secondary voltage (typically 120V) for metering instruments and protective relays",
      "To detect ground faults on ungrounded HV systems",
      "To convert three-phase HV to single-phase for revenue meters"
    ],
    correctIndex: 1,
    explanation: "A potential (voltage) transformer steps down high voltage to a standardised 120V (or 69V for line-to-neutral on wye systems) secondary — safe for metering instruments and protective relays to measure. The ratio allows the instrument to display actual system voltage by multiplying the secondary reading by the PT ratio.",
    order: 71,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-highvoltage",
    topicLabel: "MWA B — High Voltage",
    question: "What protection relay function (ANSI code 51) is commonly applied to medium-voltage feeder circuits?",
    options: [
      "Instantaneous overcurrent",
      "Time-overcurrent (inverse-time overcurrent)",
      "Differential protection",
      "Under-voltage relay"
    ],
    correctIndex: 1,
    explanation: "ANSI function 51 is the time-overcurrent relay — it trips after a time delay inversely proportional to the magnitude of the overcurrent (the greater the fault current, the shorter the trip time). This provides time-coordination with downstream devices: a closer fault (higher current) trips the nearest upstream relay faster, isolating the minimum amount of the system.",
    order: 72,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-highvoltage",
    topicLabel: "MWA B — High Voltage",
    question: "Before racking a draw-out medium-voltage breaker into the connect position, what must first be verified?",
    options: [
      "That the breaker is in the open (OFF) position and the racking mechanism is properly engaged",
      "That the breaker is in the closed (ON) position to verify it is functional",
      "That all secondary control connectors are disconnected",
      "That the bus voltage has been confirmed at rated level"
    ],
    correctIndex: 0,
    explanation: "A draw-out breaker must always be in the OPEN (OFF) position before racking into the connect position. Racking a closed breaker into live bus bars creates an arc flash hazard and can cause catastrophic equipment damage. The racking mechanism and breaker open indicator must both be verified before any racking operation.",
    order: 73,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-highvoltage",
    topicLabel: "MWA B — High Voltage",
    question: "What is a recloser used for in a distribution system?",
    options: [
      "A device that manually resets after tripping — used only indoors",
      "An automatic circuit interrupter that recloses after a trip — used outdoors on feeders to restore service after temporary faults",
      "A type of current-limiting fuse used on MV laterals",
      "A device that disconnects the service when the utility is performing maintenance"
    ],
    correctIndex: 1,
    explanation: "A recloser is an automatic self-resetting protective device used on overhead MV distribution feeders. After tripping on a fault, it automatically recloses one or more times (typically 3 operations) to restore service if the fault was temporary (e.g., a tree branch momentarily contacting a conductor). If the fault persists, the recloser locks out, requiring manual intervention.",
    order: 74,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-highvoltage",
    topicLabel: "MWA B — High Voltage",
    question: "What is the minimum approach distance (MAD) concept in HV line work?",
    options: [
      "The minimum distance a vehicle must maintain from an HV line on a public road",
      "The minimum distance a qualified electrical worker must maintain from energised HV conductors to prevent flashover — determined by voltage and worker qualifications",
      "The minimum distance between two parallel HV conductors in a substation",
      "The minimum conduit burial depth under HV transmission lines"
    ],
    correctIndex: 1,
    explanation: "MAD (Minimum Approach Distance) is the closest distance a qualified worker can be to energised HV conductors without arc flash / flashover risk, determined by voltage level and atmospheric conditions. Workers must maintain MAD unless wearing appropriate insulating PPE rated for the voltage. MAD tables are published in OH&S regulations and IEEE 516.",
    order: 75,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-b-highvoltage",
    topicLabel: "MWA B — High Voltage",
    question: "What is the difference between an air-insulated switchgear (AIS) substation and a gas-insulated switchgear (GIS) substation?",
    options: [
      "AIS uses oil insulation; GIS uses air insulation",
      "AIS uses air as the insulating medium and requires large clearances; GIS uses SF₆ gas at pressure, allowing a much smaller footprint",
      "AIS is used below 15kV only; GIS is used above 15kV only",
      "AIS requires annual maintenance; GIS requires no maintenance"
    ],
    correctIndex: 1,
    explanation: "AIS substations use open-air clearances between conductors — requiring large physical space. GIS substations enclose all live parts in sealed stainless steel enclosures filled with SF₆ gas under pressure. SF₆ has dielectric strength approximately 3× that of air, allowing equipment to be packed into 1/10th the space of equivalent AIS equipment. GIS is preferred in space-constrained urban and offshore environments.",
    order: 76,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-conductors",
    topicLabel: "MWA C — Conductors",
    question: "A #12 AWG copper RW90 conductor has a base ampacity of 20A at 30°C ambient. It is bundled with 6 other current-carrying conductors. What is the derated ampacity?",
    options: [
      "10A",
      "14A",
      "16A",
      "18A"
    ],
    correctIndex: 1,
    explanation: "CEC Table 5C: bundling correction factor for 7–9 current-carrying conductors = 0.70. Derated ampacity = 20A × 0.70 = 14A. Bundling reduces heat dissipation, requiring derating to prevent insulation damage.",
    order: 77,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-conductors",
    topicLabel: "MWA C — Conductors",
    question: "What does the '90' in RW90 cable designation indicate?",
    options: [
      "The conductor is rated for 90A maximum",
      "The insulation is rated for a maximum conductor temperature of 90°C",
      "The cable has a 90% efficiency rating",
      "The cable is rated for 90V DC operation"
    ],
    correctIndex: 1,
    explanation: "In CEC cable designations, the number indicates maximum permitted conductor temperature. RW90 = Rubber insulation, Wet-location rated, 90°C maximum. Higher temperature ratings allow higher ampacity for a given conductor size, but the overall ampacity is limited by the lowest-rated component in the circuit.",
    order: 78,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-conductors",
    topicLabel: "MWA C — Conductors",
    question: "TECK90 cable is approved for which installation environments?",
    options: [
      "Indoor dry locations only",
      "Cable tray, direct burial, outdoor, and wet locations — it has a copper tape shield and PVC outer jacket",
      "Conduit only",
      "Dry indoor and conduit only, rated 90°C"
    ],
    correctIndex: 1,
    explanation: "TECK90 has XLPE-insulated conductors, a copper tape shield, and a PVC outer jacket. It is rated 90°C and approved for cable tray, conduit, direct burial, outdoor, and wet locations. The copper shield also serves as the equipment grounding conductor.",
    order: 79,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-conductors",
    topicLabel: "MWA C — Conductors",
    question: "Mineral Insulated (MI) cable is uniquely suited for which applications?",
    options: [
      "Low-voltage data and control applications only",
      "Fire-rated circuits, high-temperature applications, and hazardous locations — MI cable survives temperatures up to 250°C",
      "Only underground direct burial",
      "Only in conduit in dry locations"
    ],
    correctIndex: 1,
    explanation: "MI cable has conductors in compressed magnesium oxide insulation within a copper or stainless steel sheath. It withstands extremely high temperatures, survives fire for extended periods (required for fire alarm, emergency lighting, and fire pump circuits that must remain functional during a fire), and is impervious to moisture and corrosion.",
    order: 80,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-conductors",
    topicLabel: "MWA C — Conductors",
    question: "Calculate the voltage drop for a 240V single-phase 30A circuit with #8 AWG copper (R = 2.056 Ω/km) running 80 metres.",
    options: [
      "4.9V (2.1%)",
      "7.5V (3.1%)",
      "9.9V (4.1%)",
      "14.8V (6.2%)"
    ],
    correctIndex: 2,
    explanation: "VD = 2 × L × R × I / 1000 = 2 × 80 × 2.056 × 30 / 1000 = 9.87V ≈ 9.9V. VD% = 9.9/240 × 100% = 4.1%. This exceeds the CEC recommended 3% for branch circuits — #6 AWG should be considered.",
    order: 81,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-conductors",
    topicLabel: "MWA C — Conductors",
    question: "Calculate the voltage drop for a 600V three-phase 60A circuit with #4 AWG copper (R = 1.293 Ω/km) running 120 metres.",
    options: [
      "8.1V (1.3%)",
      "14.1V (2.4%)",
      "16.2V (2.7%)",
      "22.9V (3.8%)"
    ],
    correctIndex: 2,
    explanation: "VD (3φ) = √3 × L × R × I / 1000 = 1.732 × 120 × 1.293 × 60 / 1000 = 16.2V. VD% = 16.2/600 × 100% = 2.7%. Within the CEC recommended 3% — #4 AWG is acceptable for this run.",
    order: 82,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-conductors",
    topicLabel: "MWA C — Conductors",
    question: "What is the CEC recommended maximum voltage drop for a branch circuit per Rule 8-102?",
    options: [
      "1%",
      "3%",
      "5%",
      "8%"
    ],
    correctIndex: 1,
    explanation: "CEC Rule 8-102 recommends a maximum 3% voltage drop for branch circuits and 5% total for feeder plus branch combined. These are recommendations, not mandatory rules in all cases, but are routinely applied by inspectors and engineers.",
    order: 83,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-conductors",
    topicLabel: "MWA C — Conductors",
    question: "A circuit supplies a 32A continuous load. What is the minimum circuit breaker size required?",
    options: [
      "32A",
      "35A",
      "40A",
      "50A"
    ],
    correctIndex: 2,
    explanation: "Continuous loads require a breaker rated at 125% of load current: 32 × 1.25 = 40A. A 40A breaker with conductors also sized at 125% minimum is required.",
    order: 84,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-conductors",
    topicLabel: "MWA C — Conductors",
    question: "NMD90 cable (Loomex) is approved for which locations?",
    options: [
      "Dry indoor locations only — concealed or exposed within walls, ceilings, and floors",
      "Wet locations, direct burial, and outdoor applications",
      "Industrial cable tray only",
      "Any location including damp basements and crawl spaces"
    ],
    correctIndex: 0,
    explanation: "NMD90 (Non-Metallic sheathed cable, Dry, 90°C) is approved for dry indoor locations only — in walls, ceilings, floors, exposed in dry areas. It must not be installed in wet, damp, or outdoor locations, in conduit, or where subject to physical damage without protection.",
    order: 85,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-conductors",
    topicLabel: "MWA C — Conductors",
    question: "What colour is used for the equipment grounding conductor in a multi-wire cable under the CEC?",
    options: [
      "White or grey",
      "Green or bare (uninsulated)",
      "Red",
      "Orange"
    ],
    correctIndex: 1,
    explanation: "CEC Rule 4-036 requires equipment grounding conductors to be green, green with yellow stripe, or bare. White/grey are reserved for grounded (neutral) conductors. Orange identifies the high leg in a high-leg delta. Equipment grounding conductors must never be confused with current-carrying conductors.",
    order: 86,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-conductors",
    topicLabel: "MWA C — Conductors",
    question: "What is the maximum fill percentage for a raceway containing 3 or more conductors per the CEC?",
    options: [
      "31%",
      "40%",
      "53%",
      "60%"
    ],
    correctIndex: 1,
    explanation: "CEC Appendix B limits conduit fill to: 53% for 1 conductor, 31% for 2 conductors, 40% for 3 or more conductors. The reduced fill for multiple conductors accounts for irregular packing and heat generated when multiple current-carrying conductors share a raceway.",
    order: 87,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-conductors",
    topicLabel: "MWA C — Conductors",
    question: "What is the maximum total angular displacement permitted between two pull points in a conduit run?",
    options: [
      "180°",
      "270°",
      "360°",
      "450°"
    ],
    correctIndex: 2,
    explanation: "The CEC limits total bends between any two pull points to 360° (equivalent to four 90° bends). Beyond this, pulling tension becomes excessive, risking insulation damage and making installation impractical. Additional pull boxes must break up long, heavily-bent runs.",
    order: 88,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-conductors",
    topicLabel: "MWA C — Conductors",
    question: "What wire colour identifies a second ungrounded conductor in a single-phase 120/240V branch circuit?",
    options: [
      "Black",
      "White",
      "Red",
      "Blue"
    ],
    correctIndex: 2,
    explanation: "CEC Rule 4-034: in a single-phase 120/240V system, the first ungrounded conductor is black, the second ungrounded conductor is red, and the grounded neutral is white or grey. In three-phase wye systems, the three phases are conventionally black, red, and blue.",
    order: 89,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-conductors",
    topicLabel: "MWA C — Conductors",
    question: "In a multi-wire branch circuit sharing a neutral, what special requirement applies to the overcurrent protective devices?",
    options: [
      "The neutral must be rated at 200% ampacity",
      "The breakers must be a multi-pole common-trip type or handle-tied so all ungrounded conductors open simultaneously",
      "The shared neutral must be bonded at each outlet",
      "A separate GFCI must protect every outlet"
    ],
    correctIndex: 1,
    explanation: "CEC Rule 14-010(5) requires multi-wire branch circuits to use multi-pole or handle-tied breakers so all ungrounded conductors de-energize simultaneously. This is critical because if only one phase is opened and the neutral is disconnected for work, the remaining phase's return current would have no path, potentially shocking a worker or overloading the neutral.",
    order: 90,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-raceways",
    topicLabel: "MWA C — Raceways",
    question: "Electrical Metallic Tubing (EMT) may NOT be installed in which location?",
    options: [
      "Exposed in dry commercial locations",
      "Concealed in walls and ceilings",
      "Direct burial underground without protective sleeving",
      "Suspended from the structure with approved hangers"
    ],
    correctIndex: 2,
    explanation: "EMT is thin-wall steel and lacks the wall thickness and corrosion resistance for direct burial. It is widely used exposed or concealed in commercial buildings but must be protected from physical damage and corrosion. RMC or RNMC (PVC) is used for direct burial.",
    order: 91,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-raceways",
    topicLabel: "MWA C — Raceways",
    question: "What is the maximum permitted length for Flexible Metal Conduit (FMC) when used as an equipment connection?",
    options: [
      "0.9 m",
      "1.8 m",
      "3.0 m",
      "No maximum"
    ],
    correctIndex: 1,
    explanation: "CEC Rule 12-1300 limits FMC to a maximum of 1.8 m (6 ft) for equipment connections (motors, luminaires, HVAC equipment). FMC provides vibration isolation and flexibility but is not approved for general wiring over long lengths.",
    order: 92,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-raceways",
    topicLabel: "MWA C — Raceways",
    question: "Why are expansion fittings installed in long PVC conduit runs?",
    options: [
      "To allow conduit to expand in diameter to accept additional conductors",
      "To accommodate thermal expansion and contraction of PVC, preventing conduit buckling or joint failure",
      "To provide a pull point for conductor installation",
      "To allow conduit to deflect during seismic events"
    ],
    correctIndex: 1,
    explanation: "PVC has a thermal expansion coefficient approximately 5× greater than steel. In long runs exposed to temperature variations, expansion couplings allow axial movement without stressing joints or pulling conduit off boxes. Installation intervals are determined by temperature range and conduit length.",
    order: 93,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-raceways",
    topicLabel: "MWA C — Raceways",
    question: "What is the minimum burial depth for Schedule 40 PVC conduit containing 120/240V residential service conductors?",
    options: [
      "300 mm (12 in)",
      "450 mm (18 in)",
      "600 mm (24 in)",
      "750 mm (30 in)"
    ],
    correctIndex: 2,
    explanation: "CEC Table 12-012 requires a minimum burial depth of 600 mm (24 in) for PVC conduit containing service conductors at 120/240V. Depths may be reduced under concrete slabs. Always verify with the AHJ for local amendments.",
    order: 94,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-raceways",
    topicLabel: "MWA C — Raceways",
    question: "When is FMC itself (without a separate EGC inside) permitted to serve as the equipment grounding path?",
    options: [
      "Always — FMC is always an acceptable grounding path",
      "When FMC is ¾\" or smaller trade size, circuit is 20A or less, and length does not exceed 1.8 m",
      "Only when supply is 600V or less with a grounded neutral",
      "Never — FMC always requires a separate green grounding conductor"
    ],
    correctIndex: 1,
    explanation: "CEC Rule 10-814 permits FMC as the EGC path only when: trade size ≤ ¾\", circuit rating ≤ 20A, and length ≤ 1.8 m. Beyond these limits, a separate EGC inside the FMC is required because FMC's spiral construction provides a relatively high-impedance ground return path.",
    order: 95,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-raceways",
    topicLabel: "MWA C — Raceways",
    question: "Liquidtight Flexible Metal Conduit (LFMC) is required instead of standard FMC in which situation?",
    options: [
      "All locations where vibration isolation is needed",
      "Wet or damp locations, outdoor applications, or where exposed to liquids",
      "Hazardous locations as a replacement for explosionproof conduit",
      "High-temperature locations above 75°C"
    ],
    correctIndex: 1,
    explanation: "LFMC has a PVC or nylon jacket over the flexible metal core, making it liquidtight. It is required in wet, damp, or outdoor locations where FMC would allow moisture ingress. Common applications: outdoor HVAC connections, food processing equipment, wet industrial environments.",
    order: 96,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-branch",
    topicLabel: "MWA C — Branch Circuits and Devices",
    question: "Where does the CEC require GFCI protection on 125V 15A and 20A receptacles?",
    options: [
      "Only in bathrooms of residential buildings",
      "In bathrooms, garages, outdoors, crawl spaces, unfinished basements, kitchen countertops near sinks, and swimming pool areas",
      "Only on circuits exceeding 20A",
      "On all receptacles in buildings constructed after 2010"
    ],
    correctIndex: 1,
    explanation: "The CEC requires GFCI protection on 125V receptacles in all wet and damp locations. The scope expands with each code edition. GFCI protection is required because water dramatically increases electrocution risk — the 5 mA trip threshold is below the perception level for many individuals.",
    order: 97,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-branch",
    topicLabel: "MWA C — Branch Circuits and Devices",
    question: "A 240V electric baseboard heater rated at 3,600W is a continuous load. What is the minimum circuit breaker size?",
    options: [
      "15A",
      "20A",
      "25A",
      "30A"
    ],
    correctIndex: 1,
    explanation: "Load current = 3,600 / 240 = 15A. Continuous load breaker ≥ 125% × 15A = 18.75A. Next standard size at or above 18.75A is 20A. A 20A 240V double-pole breaker with #12 AWG copper conductors is the minimum.",
    order: 98,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-branch",
    topicLabel: "MWA C — Branch Circuits and Devices",
    question: "What marking is required on a recessed luminaire that can be covered by thermal insulation?",
    options: [
      "UL Listed",
      "CSA Approved",
      "IC-Rated (Insulation Contact Rated)",
      "Wet Location Listed"
    ],
    correctIndex: 2,
    explanation: "IC-rated (Insulation Contact) luminaires are tested to allow thermal insulation to be placed directly in contact with the housing without creating a fire hazard. Non-IC-rated recessed fixtures must have at least 75 mm clearance from combustible materials.",
    order: 99,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-branch",
    topicLabel: "MWA C — Branch Circuits and Devices",
    question: "What is the primary energy management function of an occupancy sensor in a lighting control system?",
    options: [
      "To measure lux level and automatically dim to the required illuminance",
      "To automatically switch lights ON when occupants enter and OFF after a set delay when no motion is detected",
      "To prevent lights operating during daylight hours",
      "To protect luminaires from voltage surges"
    ],
    correctIndex: 1,
    explanation: "Occupancy sensors detect motion/presence and switch lights ON automatically when occupied, then OFF after a time delay (typically 5–30 min) when no motion is detected. PIR sensors detect heat from moving bodies; ultrasonic sensors detect motion-reflected sound; dual-technology sensors combine both for reliability.",
    order: 100,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-branch",
    topicLabel: "MWA C — Branch Circuits and Devices",
    question: "How long must emergency lighting remain illuminated during a power failure per the National Building Code?",
    options: [
      "30 minutes",
      "1 hour",
      "90 minutes",
      "8 hours"
    ],
    correctIndex: 0,
    explanation: "The NBC requires emergency lighting to remain illuminated for a minimum of 30 minutes during a power failure. Battery backup systems are tested with a full 90-minute discharge test annually per ULC S524 to confirm they can sustain the required duration.",
    order: 101,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-branch",
    topicLabel: "MWA C — Branch Circuits and Devices",
    question: "What is the difference between Class A and Class B emergency lighting wiring?",
    options: [
      "Class A uses AC; Class B uses DC from a central battery",
      "Class A is a loop where both wire ends return to the panel — a single break does not disable the circuit; Class B is a T-tap with one end terminated at the last device",
      "Class A is for self-contained battery units; Class B is for central battery systems",
      "Class A is for 120V circuits; Class B is for 347V circuits"
    ],
    correctIndex: 1,
    explanation: "Class A loops both conductors back to the supply panel — a single conductor break does not disable the circuit because the panel can still communicate through the other path. Class B is a home-run or T-tap — a single break from the panel to the last device disables everything beyond. Class A provides greater reliability for life-safety circuits.",
    order: 102,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-branch",
    topicLabel: "MWA C — Branch Circuits and Devices",
    question: "Airport runway lighting uses which type of circuit to maintain constant luminous intensity despite individual lamp failures?",
    options: [
      "Parallel circuit with individual circuit breakers per lamp",
      "Series constant current circuit powered by a Constant Current Regulator (CCR)",
      "Three-phase balanced circuit with one phase per lamp",
      "IT (isolated ground) circuit at 120V per lamp"
    ],
    correctIndex: 1,
    explanation: "Airport lighting systems use series circuits powered by a CCR at constant current (typically 6.6A). Each lamp in the loop uses a series isolation transformer — if a lamp fails open, the transformer secondary shorts and current continues around the loop uninterrupted. Intensity is adjusted by changing the loop current.",
    order: 103,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-branch",
    topicLabel: "MWA C — Branch Circuits and Devices",
    question: "What is DALI (Digital Addressable Lighting Interface) and what advantage does it offer over 0-10V analogue dimming?",
    options: [
      "DALI is a higher-voltage dimming system that provides more consistent light output",
      "DALI is a bidirectional digital protocol that allows individual addressing of each luminaire, status feedback, and scene programming from a central controller",
      "DALI carries both data and power to the luminaire, eliminating the separate power circuit",
      "DALI only works with fluorescent luminaires"
    ],
    correctIndex: 1,
    explanation: "DALI (IEC 62386) is bidirectional — unlike 0-10V which is one-directional and controls all luminaires on a circuit simultaneously. DALI allows each luminaire to have a unique address for individual dimming, switching, status queries (lamp failure, actual light level), and scene programming, enabling sophisticated energy-efficient lighting systems.",
    order: 104,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-branch",
    topicLabel: "MWA C — Branch Circuits and Devices",
    question: "What thermostat wiring voltage is standard in conventional HVAC control circuits?",
    options: [
      "120V or 240V — connected directly to the power circuit",
      "24V AC, supplied by a step-down transformer in the HVAC unit",
      "5V DC — a low-voltage communication bus",
      "Wireless only — no wiring required"
    ],
    correctIndex: 1,
    explanation: "Conventional thermostat wiring uses Class 2 low-voltage wiring at 24V AC, supplied by a step-down transformer inside the HVAC unit. Individual wires control heat call, cool call, fan, reversing valve, emergency heat, and common. The 24V supply allows small-gauge conductors (typically 18–22 AWG) over long distances safely.",
    order: 105,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-branch",
    topicLabel: "MWA C — Branch Circuits and Devices",
    question: "A disconnect switch for a fixed electric space heater must be located:",
    options: [
      "At the electrical panel only",
      "Within sight of and accessible to the heater, or capable of being locked in the open position",
      "At least 3 metres from the heater to prevent heat damage",
      "At the nearest junction box regardless of sight line"
    ],
    correctIndex: 1,
    explanation: "The CEC requires the disconnect for fixed electric space heaters to be within sight of and accessible to the heater, or lockable in the open position if not within sight. 'Within sight' means visible from and within 15 m of the equipment.",
    order: 106,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-branch",
    topicLabel: "MWA C — Branch Circuits and Devices",
    question: "What is the purpose of electric heat tracing on a piping system?",
    options: [
      "Measures pipe temperature and sends data to the BMS",
      "Provides controlled electrical heating along pipes to prevent freezing or maintain a required process temperature",
      "Provides cathodic protection to prevent pipe corrosion",
      "Detects leaks by monitoring resistance changes"
    ],
    correctIndex: 1,
    explanation: "Electric heat tracing uses resistive or self-regulating cables installed along pipes to prevent freeze-up in unheated areas or maintain required process temperatures. Self-regulating heat trace cable automatically adjusts heat output based on ambient temperature, providing energy-efficient freeze protection.",
    order: 107,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-branch",
    topicLabel: "MWA C — Branch Circuits and Devices",
    question: "What is the function of a photocell (photoelectric control) on an outdoor luminaire?",
    options: [
      "Regulates operating voltage for improved efficiency",
      "Automatically switches the luminaire ON at dusk and OFF at dawn based on ambient light level",
      "Detects motion and turns on the luminaire when movement is detected",
      "Monitors energy consumption and reports to the BMS"
    ],
    correctIndex: 1,
    explanation: "A photocell contains a light-sensitive semiconductor that changes resistance with light level. When ambient light falls below threshold (dusk), the photocell triggers the luminaire ON; at dawn, it turns it OFF. This provides automatic dusk-to-dawn control without manual operation or time scheduling.",
    order: 108,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-branch",
    topicLabel: "MWA C — Branch Circuits and Devices",
    question: "What is the HVAC disconnect requirement regarding sight line and distance from the equipment?",
    options: [
      "Within sight and within 15 m of the equipment",
      "Exactly 1 m from the unit",
      "At the electrical panel only",
      "Within 3 m if in a lockable enclosure only"
    ],
    correctIndex: 0,
    explanation: "The CEC requires the disconnecting means for HVAC equipment to be within sight of and within 15 m of the equipment. The disconnect must be readily accessible and capable of being locked in the open position for LOTO purposes, allowing technicians to verify de-energization before working.",
    order: 109,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-branch",
    topicLabel: "MWA C — Branch Circuits and Devices",
    question: "A LED dimmer compatibility issue occurs because:",
    options: [
      "All dimmers are compatible with all LED products manufactured after 2015",
      "LED luminaires and drivers must be listed as compatible with the specific dimmer's protocol (TRIAC, ELV, 0-10V, DALI, PWM)",
      "The dimmer must match the lamp wattage exactly",
      "LED dimmers must be rated at 120V minimum"
    ],
    correctIndex: 1,
    explanation: "Different LED drivers respond to different dimming protocols. Using an incompatible dimmer causes flickering, humming, limited dimming range, or failure to turn on at low levels. Always verify the luminaire manufacturer's approved dimmer list before specifying a dimming control system.",
    order: 110,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-branch",
    topicLabel: "MWA C — Branch Circuits and Devices",
    question: "What is the purpose of a ballast in an HID (High Intensity Discharge) luminaire?",
    options: [
      "Converts AC to DC for the arc tube",
      "Provides the high starting voltage to ignite the arc and then limits current to stabilise the lamp during operation",
      "Regulates lamp colour temperature over its life",
      "Provides power factor correction for the building distribution system"
    ],
    correctIndex: 1,
    explanation: "HID lamps require a ballast to: (1) provide a high-voltage pulse to ionise the arc tube gas and start the arc, and (2) limit and stabilise the arc current once running. Without current limiting, the arc tube resistance drops as it heats up, causing runaway current that destroys the lamp.",
    order: 111,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-branch",
    topicLabel: "MWA C — Branch Circuits and Devices",
    question: "A five-wire 120/208V three-phase system has a dedicated isolated ground (IG) receptacle. What is the purpose of the isolated ground conductor?",
    options: [
      "To provide additional shock protection in wet locations",
      "To provide a low-noise, interference-free ground reference for sensitive electronic equipment by isolating the equipment ground from the building ground grid",
      "To satisfy NEC requirements for computer room wiring only",
      "To replace the equipment grounding conductor in medical facilities"
    ],
    correctIndex: 1,
    explanation: "An isolated ground (IG) conductor runs uninterrupted back to the main bonding jumper, bypassing all intermediate ground buses and conduit connections. This prevents ground loops and eliminates high-frequency electrical noise on the ground reference — critical for sensitive instrumentation, audio equipment, and computer systems where noise coupling on the ground conductor causes data errors or interference.",
    order: 112,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-branch",
    topicLabel: "MWA C — Branch Circuits and Devices",
    question: "Under the CEC, what is the maximum number of receptacles permitted on a 15A branch circuit in a commercial office?",
    options: [
      "6 receptacles",
      "8 receptacles",
      "12 receptacles",
      "No limit specified — based on calculated load"
    ],
    correctIndex: 3,
    explanation: "The CEC does not specify a maximum number of receptacles on a branch circuit by count. Instead, the circuit must be sized for the calculated load (CEC Rule 8-304 for offices: 1 A per receptacle, or per the connected load). Engineers and designers typically limit office branch circuits to 6–8 duplex receptacles per 15A circuit based on calculated load, but there is no CEC count limit.",
    order: 113,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-branch",
    topicLabel: "MWA C — Branch Circuits and Devices",
    question: "What is the purpose of a tamper-resistant (TR) receptacle?",
    options: [
      "To prevent unauthorised use of electrical outlets in commercial buildings",
      "To prevent children from inserting foreign objects into outlet slots by requiring simultaneous insertion into both slots to open the shutter",
      "To provide GFCI protection in addition to tamper resistance",
      "To prevent moisture ingress in damp locations"
    ],
    correctIndex: 1,
    explanation: "TR receptacles have internal spring-loaded shutters that only open when equal pressure is applied simultaneously to both slots — as when inserting a plug. Inserting a single object into one slot (as a child might) does not open the shutter. The CEC requires TR receptacles in areas accessible to young children, including all dwelling units in recent code editions.",
    order: 114,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-branch",
    topicLabel: "MWA C — Branch Circuits and Devices",
    question: "What is a dedicated circuit and when does the CEC require one?",
    options: [
      "Any circuit protected by a GFCI breaker",
      "A branch circuit serving only one piece of equipment or a single receptacle — required for large appliances, HVAC equipment, and other single dedicated loads",
      "A circuit with a separate neutral conductor for each hot conductor",
      "Any circuit installed in metallic conduit only"
    ],
    correctIndex: 1,
    explanation: "A dedicated circuit serves only one piece of equipment or load. The CEC requires dedicated circuits for: electric ranges, dryers, dishwashers, refrigerators, freezers, large HVAC equipment, EV chargers, and other loads that could overload a general-purpose circuit or require isolation for safety or performance reasons.",
    order: 115,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-branch",
    topicLabel: "MWA C — Branch Circuits and Devices",
    question: "What is the CEC load calculation for a commercial office using the demand factor method per Rule 8-304?",
    options: [
      "1,500 VA per receptacle with no demand factor",
      "180 VA per duplex receptacle at 100% for the first 10,000 VA, reduced demand factors for the remainder",
      "100% of all connected loads — no demand factor applies",
      "50 VA per receptacle with a 1.25 continuous load multiplier"
    ],
    correctIndex: 1,
    explanation: "CEC Rule 8-304 uses 180 VA per duplex receptacle for offices. Demand factors from CEC Table 14 apply: typically 100% for the first 10,000 VA and reduced percentages for the remainder, reflecting the statistical reality that not all receptacles are simultaneously at full load. This prevents over-sizing distribution equipment while maintaining adequate capacity.",
    order: 116,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-hvac",
    topicLabel: "MWA C — HVAC Systems",
    question: "What is the purpose of a disconnect switch located within sight of an air-handling unit (AHU)?",
    options: [
      "To allow remote on/off control of the AHU from a BMS",
      "To allow service technicians to de-energise the unit locally and verify zero-energy state before performing maintenance",
      "To provide overcurrent protection for the AHU branch circuit",
      "To switch the AHU between normal and emergency power"
    ],
    correctIndex: 1,
    explanation: "The CEC requires a lockable disconnecting means within sight and within 15 m of HVAC equipment so service technicians can de-energise the unit locally and apply LOTO before working on it. Without a local disconnect, the technician would need to go to a remote panel and cannot visually verify the unit is de-energised from the work location.",
    order: 117,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-hvac",
    topicLabel: "MWA C — HVAC Systems",
    question: "An electric duct heater is installed in an HVAC air distribution system. What safety control is required to prevent overheating if airflow is lost?",
    options: [
      "A manual reset thermal cutout only",
      "An airflow proving switch (sail switch or differential pressure switch) that de-energises the heater if airflow drops below the required minimum",
      "A time-delay relay that shuts off the heater after 30 minutes of continuous operation",
      "A smoke detector in the duct downstream of the heater"
    ],
    correctIndex: 1,
    explanation: "An airflow proving switch (sail switch or differential pressure switch) monitors air velocity in the duct and de-energises the duct heater if airflow falls below the minimum required for safe heat dissipation. Without sufficient airflow, the heater element overheats, potentially igniting adjacent materials. The CEC and equipment standards require this safety interlock on all electric duct heaters.",
    order: 118,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-hvac",
    topicLabel: "MWA C — HVAC Systems",
    question: "What is the purpose of a heat pump's reversing valve?",
    options: [
      "To reverse the direction of the compressor motor",
      "To reverse the flow of refrigerant, switching the system between heating and cooling modes",
      "To reverse the airflow direction through the evaporator coil",
      "To reverse the phase sequence of the compressor supply to change motor rotation"
    ],
    correctIndex: 1,
    explanation: "A reversing valve (4-way valve) in a heat pump redirects refrigerant flow so the outdoor coil becomes the condenser in cooling mode and the evaporator in heating mode, and vice versa. This allows a single refrigeration system to provide both heating and cooling. The valve is controlled by the thermostat's heat/cool mode selection.",
    order: 119,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-hvac",
    topicLabel: "MWA C — HVAC Systems",
    question: "A three-phase 600V rooftop HVAC unit with a Minimum Circuit Ampacity (MCA) of 42A and a Maximum Overcurrent Protection Device (MOCP) of 50A requires what minimum conductor size and breaker?",
    options: [
      "#10 AWG conductors and a 40A breaker",
      "#8 AWG conductors (ampacity ≥ 42A) and a 50A breaker (≤ MOCP)",
      "#6 AWG conductors and a 60A breaker",
      "#12 AWG conductors and a 50A breaker"
    ],
    correctIndex: 1,
    explanation: "MCA defines the minimum conductor ampacity — conductors must be rated ≥ 42A, so #8 AWG copper (46A at 75°C) meets this. MOCP defines the maximum breaker size permitted — the breaker must be ≤ 50A. Installing a breaker larger than the MOCP voids the equipment listing and may allow a fault to go uncleared. These ratings come from the equipment nameplate and replace load calculations for HVAC equipment.",
    order: 120,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-heating",
    topicLabel: "MWA C — Electric Heating",
    question: "What is the purpose of a thermostat anticipator in a conventional bimetallic thermostat?",
    options: [
      "To anticipate future weather conditions and pre-heat the building",
      "To slightly reduce the setpoint temperature to prevent overshooting by warming the bimetallic element slightly before the room reaches setpoint",
      "To provide a time delay before the heating system starts",
      "To calibrate the thermostat for the specific heating system capacity"
    ],
    correctIndex: 1,
    explanation: "A heat anticipator is a small resistor in series with the thermostat's heating circuit. It generates a small amount of heat inside the thermostat enclosure, causing the bimetallic element to open slightly before the room actually reaches the setpoint — compensating for the thermal lag of the heating system and reducing temperature overshoot. The anticipator must be set to match the current draw of the heating control circuit.",
    order: 121,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-heating",
    topicLabel: "MWA C — Electric Heating",
    question: "A radiant in-floor electric heating system uses which type of element embedded in the floor?",
    options: [
      "Self-regulating heat trace cable",
      "Resistance heating cable (constant wattage) or mat installed under the floor finish",
      "Induction heating coils that heat the floor slab magnetically",
      "Infrared lamps positioned under the floor surface"
    ],
    correctIndex: 1,
    explanation: "In-floor electric radiant heating uses factory-assembled resistance heating cable or mat (with heating cable woven into a mesh) installed beneath tile, stone, or other floor finishes. The cable has a fixed resistance per unit length, producing constant heat output proportional to voltage squared divided by resistance. A floor-sensing thermostat controls operation.",
    order: 122,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-heating",
    topicLabel: "MWA C — Electric Heating",
    question: "What is self-regulating (self-limiting) heat trace cable and what is its key advantage?",
    options: [
      "Cable that shuts off automatically when it detects a water leak",
      "Cable whose resistance increases as temperature rises, automatically reducing heat output — it cannot overheat or burn out if cables overlap",
      "Cable with a built-in thermostat that switches it on and off based on ambient temperature",
      "Cable that generates exactly the same heat output regardless of ambient temperature"
    ],
    correctIndex: 1,
    explanation: "Self-regulating heat trace cable uses a conductive polymer core between two bus wires. As temperature rises, the polymer expands and the conductive pathways become fewer — increasing resistance and reducing current and heat output. As temperature drops, resistance decreases and heat output increases. This means the cable automatically adjusts output to ambient temperature and cannot overheat — even if cables cross or overlap.",
    order: 123,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-cathodic",
    topicLabel: "MWA C — Cathodic Protection",
    question: "Which type of cathodic protection system uses a sacrificial anode that is consumed over time?",
    options: [
      "Impressed Current Cathodic Protection (ICCP)",
      "Galvanic (sacrificial anode) cathodic protection",
      "Passive isolation cathodic protection",
      "Rectifier-based cathodic protection"
    ],
    correctIndex: 1,
    explanation: "Galvanic (sacrificial anode) cathodic protection uses a metal more electrochemically active than the protected structure (e.g., magnesium, zinc, or aluminum anodes on steel pipes). The anode corrodes preferentially — sacrificing itself — while the protected structure remains intact. No external power source is required. The anode must be periodically inspected and replaced when depleted.",
    order: 124,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-wiring-methods",
    topicLabel: "MWA C — Wiring Methods",
    question: "What is the minimum working space depth (in the direction of live parts) required in front of a 347/600V panelboard per the CEC?",
    options: [
      "0.6 m (2 ft)",
      "0.9 m (3 ft)",
      "1.0 m (3.3 ft)",
      "1.2 m (4 ft)"
    ],
    correctIndex: 2,
    explanation: "CEC Rule 26-300 requires a minimum working space of 1.0 m in front of electrical equipment operating at 347/600V. This space must be kept clear at all times and must not be used for storage. Adequate working space is essential for safe operation, maintenance, and emergency access.",
    order: 125,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-wiring-methods",
    topicLabel: "MWA C — Wiring Methods",
    question: "What is the purpose of a pull box in a long conduit run?",
    options: [
      "To provide a tap point for additional branch circuits",
      "To break the conduit run into sections, reducing pulling tension and allowing conductors to be installed in manageable lengths",
      "To provide a junction for multiple conduit systems to connect",
      "To serve as a weatherproof enclosure for outdoor conductor splices"
    ],
    correctIndex: 1,
    explanation: "Pull boxes reduce the effective length and number of bends between conductor pull points, keeping pulling tension within acceptable limits. They also allow conductors to be pulled in sections rather than in one continuous run. CEC rules limit the total bends between pull points to 360° — pull boxes reset this count.",
    order: 126,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-wiring-methods",
    topicLabel: "MWA C — Wiring Methods",
    question: "What is the minimum size of a pull box (straight pull) for conduit entering from one wall and exiting the opposite wall?",
    options: [
      "8 times the largest conduit trade size",
      "Minimum box length = 8 × the largest conduit trade size entering the box",
      "48 times the conductor outside diameter",
      "No minimum — any box large enough to accommodate the conduit fittings"
    ],
    correctIndex: 1,
    explanation: "CEC Rule 12-3040 requires that for straight pulls, the pull box minimum length (in the direction of pull) must equal at least 8 times the trade size of the largest conduit entering the box. For example, if the largest conduit is 3\", the minimum box dimension in the pull direction is 8 × 3\" = 24\" (610 mm). This ensures adequate space to make the pull without damaging conductors.",
    order: 127,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-wiring-methods",
    topicLabel: "MWA C — Wiring Methods",
    question: "When installing conductors in a vertical conduit run exceeding a certain length, conductors must be supported at intervals. What is the maximum support interval for #1/0 AWG copper conductors in a vertical raceway?",
    options: [
      "6 m",
      "15 m",
      "30 m",
      "60 m"
    ],
    correctIndex: 2,
    explanation: "CEC Rule 12-108 requires conductors in vertical raceways to be supported to prevent them from sliding down under their own weight. For #1/0 AWG copper, the maximum interval between supports is 30 m. The support interval decreases for larger conductors (more weight per metre). Supports are typically installed at pull boxes or through sealing fittings.",
    order: 128,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-wiring-methods",
    topicLabel: "MWA C — Wiring Methods",
    question: "What is the purpose of a sealing fitting (Condulet EYS or equivalent) at a hazardous location boundary?",
    options: [
      "To provide a watertight connection between conduit sections in wet locations",
      "To prevent the passage of gases, vapours, or flames through the conduit between a hazardous and non-hazardous area",
      "To allow conduit to expand and contract without damaging the seal",
      "To provide access for conductor inspection without disassembling the conduit"
    ],
    correctIndex: 1,
    explanation: "Sealing fittings at hazardous location boundaries prevent flammable gases or vapours from migrating through the conduit from the hazardous area into non-hazardous areas (where they could ignite) and prevent flame propagation back through the conduit in the event of an internal explosion. They are filled with an approved sealing compound (e.g., Chico A) after conductor installation.",
    order: 129,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-wiring-methods",
    topicLabel: "MWA C — Wiring Methods",
    question: "In a Class I, Division 1 hazardous location, which wiring method is permitted?",
    options: [
      "NMD90 cable in cable tray",
      "EMT with standard compression fittings",
      "Threaded rigid metal conduit (RMC) with explosionproof fittings, or MI cable",
      "TECK90 cable without additional protection"
    ],
    correctIndex: 2,
    explanation: "Class I, Division 1 locations contain flammable gases or vapours under normal operating conditions. CEC Section 18 requires threaded rigid metal conduit (RMC) with listed explosionproof fittings, or MI cable, or other CEC-approved wiring methods for Class I, Division 1. The explosionproof enclosures contain any internal ignition and prevent flame propagation to the external hazardous atmosphere.",
    order: 130,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-wiring-methods",
    topicLabel: "MWA C — Wiring Methods",
    question: "What does the term 'explosionproof' mean in the context of electrical equipment in hazardous locations?",
    options: [
      "The equipment is impervious to external explosions",
      "The enclosure contains any internal ignition and cools escaping gases enough that they cannot ignite the surrounding hazardous atmosphere",
      "The equipment will not produce a spark under any operating condition",
      "The equipment is hermetically sealed to prevent any gas from entering"
    ],
    correctIndex: 1,
    explanation: "'Explosionproof' does NOT mean the enclosure will withstand an external explosion. It means the enclosure is designed to: (1) contain an internal ignition without rupture, and (2) cool any gases escaping through joints and threads to below the ignition temperature of the surrounding hazardous atmosphere, preventing propagation of ignition to the outside. The enclosure allows gas in — but prevents ignition from getting out.",
    order: 131,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-wiring-methods",
    topicLabel: "MWA C — Wiring Methods",
    question: "What is the purpose of an isolation transformer in an operating room (OR) electrical system?",
    options: [
      "To step down voltage to 120V for medical equipment",
      "To create an ungrounded (isolated) power system that allows a single fault to ground without tripping the circuit, while a Line Isolation Monitor (LIM) detects the fault",
      "To provide UPS backup power for critical life-safety equipment",
      "To filter harmonics generated by medical imaging equipment"
    ],
    correctIndex: 1,
    explanation: "In OR isolated power systems (CEC Section 24), the isolation transformer creates a completely ungrounded secondary. A single fault to ground does not complete a circuit and therefore does not trip the breaker or shock a patient in contact with grounded surfaces. A Line Isolation Monitor (LIM) detects the first fault and alarms — alerting staff to find and correct it before a second fault causes a hazard.",
    order: 132,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-wiring-methods",
    topicLabel: "MWA C — Wiring Methods",
    question: "What is the minimum headroom required above the working space in front of electrical equipment rated above 600V?",
    options: [
      "1.8 m (6 ft) or the height of the equipment, whichever is greater",
      "2.0 m (6.5 ft) or the height of the equipment, whichever is greater",
      "2.3 m (7.5 ft) regardless of equipment height",
      "No headroom requirement — only depth and width matter"
    ],
    correctIndex: 1,
    explanation: "CEC Rule 26-302 requires a minimum headroom of 2.0 m (or the equipment height if greater) above the working space in front of electrical equipment. This ensures workers can stand upright and work safely without the risk of contacting overhead hazards. Adequate headroom is verified during inspection.",
    order: 133,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-wiring-methods",
    topicLabel: "MWA C — Wiring Methods",
    question: "What is a wire nut (twist-on wire connector) torque limit, and what conductor combination is NOT permitted?",
    options: [
      "Wire nuts can connect any combination of conductors of any size",
      "Wire nuts have maximum and minimum conductor fill ratings per their listing; they cannot connect aluminum to copper conductors unless the connector is specifically listed for Al/Cu use",
      "Wire nuts are only approved for 14 AWG and 12 AWG copper connections",
      "Wire nuts are not approved by the CEC — crimp connectors are required"
    ],
    correctIndex: 1,
    explanation: "Wire connectors are listed for specific minimum and maximum conductor fill combinations — always check the manufacturer's chart. Critically, aluminum conductors must never be connected to copper conductors with a standard wire nut because galvanic corrosion at the contact surface increases resistance and causes overheating. Only connectors specifically listed for Al/Cu use (such as AlumiConn or Ideal In-Sure Al/Cu) may be used for this combination.",
    order: 134,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-wiring-methods",
    topicLabel: "MWA C — Wiring Methods",
    question: "What is the CEC requirement for identifying conductors at both ends in a large multi-conductor installation?",
    options: [
      "Conductors only need to be identified at the panelboard end",
      "All conductors must be legibly identified at each end and at each accessible location, using tags, sleeves, or printed labels",
      "Only conductors above #6 AWG require identification",
      "Colour coding alone satisfies all CEC identification requirements"
    ],
    correctIndex: 1,
    explanation: "CEC Rule 4-030 requires all conductors to be identified at each end and at accessible intermediate points (pull boxes, junction boxes). Colour coding alone is not sufficient for complex multi-conductor installations — wire markers, heat-shrink labels, or printed tags must be used. Proper identification is critical for safe maintenance, troubleshooting, and future modifications.",
    order: 135,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-c-wiring-methods",
    topicLabel: "MWA C — Wiring Methods",
    question: "What is the minimum size equipment grounding conductor required for a branch circuit protected by a 60A overcurrent device (copper EGC)?",
    options: [
      "#14 AWG",
      "#12 AWG",
      "#10 AWG",
      "#8 AWG"
    ],
    correctIndex: 2,
    explanation: "CEC Table 16 specifies minimum EGC sizes based on the rating of the overcurrent device protecting the circuit. For a 60A OCPD, the minimum copper EGC is #10 AWG. The EGC must be sized to carry enough fault current to operate the OCPD quickly — an undersized EGC has too much impedance and may not allow sufficient fault current to flow.",
    order: 136,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-motors",
    topicLabel: "MWA D — Motors",
    question: "A three-phase induction motor nameplate shows: 600V, 60 Hz, 20 HP, FLA 19.0A, SF 1.15. What does the Service Factor (SF) of 1.15 indicate?",
    options: [
      "The motor can run at 115% of rated power continuously without damage",
      "The motor can operate at up to 115% of its nameplate horsepower for intermittent periods under specific conditions without exceeding its thermal limits",
      "The motor's efficiency is 115% under rated load",
      "The motor requires 15% more starting current than rated FLA"
    ],
    correctIndex: 1,
    explanation: "Service Factor (SF) indicates the permissible overload multiple above rated nameplate horsepower that the motor can sustain under rated voltage and frequency conditions, provided the additional temperature rise is acceptable. SF 1.15 means the motor can operate at 20 × 1.15 = 23 HP maximum without damage under ideal conditions. It is not intended for continuous operation at the SF load.",
    order: 137,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-motors",
    topicLabel: "MWA D — Motors",
    question: "A 4-pole, 60 Hz induction motor has a synchronous speed of 1,800 RPM and runs at 1,746 RPM at full load. What is the percent slip?",
    options: [
      "2.0%",
      "3.0%",
      "4.0%",
      "5.0%"
    ],
    correctIndex: 1,
    explanation: "Slip % = (Ns − Nr) / Ns × 100% = (1,800 − 1,746) / 1,800 × 100% = 54 / 1,800 × 100% = 3.0%. Slip is the difference between synchronous and actual rotor speed, expressed as a percentage of synchronous speed. Slip is what allows torque production — a motor running at exactly synchronous speed would produce zero torque.",
    order: 138,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-motors",
    topicLabel: "MWA D — Motors",
    question: "What is the synchronous speed of a 6-pole, 60 Hz three-phase induction motor?",
    options: [
      "900 RPM",
      "1,200 RPM",
      "1,800 RPM",
      "3,600 RPM"
    ],
    correctIndex: 1,
    explanation: "Ns = 120 × f / P = 120 × 60 / 6 = 1,200 RPM. Synchronous speed formula: Ns = 120f/P where f = frequency in Hz and P = number of poles. Common synchronous speeds: 2-pole = 3,600 RPM; 4-pole = 1,800 RPM; 6-pole = 1,200 RPM; 8-pole = 900 RPM.",
    order: 139,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-motors",
    topicLabel: "MWA D — Motors",
    question: "What is the difference between a squirrel cage induction motor and a wound rotor induction motor?",
    options: [
      "Squirrel cage motors run on DC; wound rotor motors run on AC",
      "Squirrel cage rotors have short-circuited bars; wound rotor motors have a three-phase winding connected to external resistors through slip rings — allowing speed and torque control",
      "Squirrel cage motors are single-phase; wound rotor motors are three-phase",
      "They are identical — just different names for the same design"
    ],
    correctIndex: 1,
    explanation: "A squirrel cage rotor has aluminium or copper bars short-circuited by end rings — simple, rugged, low maintenance. A wound rotor has a three-phase winding connected through slip rings to external resistance. Adding resistance in the rotor circuit increases starting torque while limiting starting current, and allows speed control (though at reduced efficiency). Wound rotor motors are used for high-inertia loads requiring controlled acceleration.",
    order: 140,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-motors",
    topicLabel: "MWA D — Motors",
    question: "A motor nameplate shows FLA = 24A at 600V three-phase. What is the approximate motor horsepower?",
    options: [
      "10 HP",
      "15 HP",
      "20 HP",
      "25 HP"
    ],
    correctIndex: 1,
    explanation: "P (kW) = √3 × V × I × PF × η / 1000. Assuming PF = 0.85, efficiency = 0.90: P = 1.732 × 600 × 24 × 0.85 × 0.90 / 1000 ≈ 19.1 kW ≈ 25.6 HP. With standard motor PF and efficiency assumptions, 24A at 600V three-phase is approximately a 15 HP motor. In practice, CEC Table 44 lists 15 HP three-phase 600V motors at approximately 18–21A FLA.",
    order: 141,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-motors",
    topicLabel: "MWA D — Motors",
    question: "What is a NEMA Design B motor and what are its characteristics?",
    options: [
      "High starting torque, low starting current — used for compressors and conveyors",
      "Normal starting torque, normal starting current, low slip — the most common general-purpose industrial motor",
      "High starting torque, high starting current — used for punch presses",
      "Low starting torque, high full-load slip — used for variable speed applications"
    ],
    correctIndex: 1,
    explanation: "NEMA Design B is the standard general-purpose squirrel cage motor: normal starting torque (150% FLT), normal starting current (600–700% FLA), low full-load slip (<5%). It is the most widely used motor design for pumps, fans, compressors, conveyors, and machine tools. Design A has slightly higher starting current; Design C has higher starting torque; Design D has very high starting torque and high slip.",
    order: 142,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-motors",
    topicLabel: "MWA D — Motors",
    question: "What causes a three-phase motor to experience single-phasing, and what is the consequence?",
    options: [
      "Operating at less than full load — causes the motor to run at reduced speed",
      "Loss of one of the three supply phases — the motor attempts to run on two phases, drawing excessive current in the remaining windings and overheating rapidly",
      "Running the motor at above rated voltage",
      "Connecting the motor in delta instead of wye"
    ],
    correctIndex: 1,
    explanation: "Single-phasing occurs when one of the three supply phases is lost (blown fuse, open contact, broken conductor). The motor attempts to continue running on two phases, but the current in the remaining two windings increases dramatically (up to 200–250% of FLA) to maintain torque. Without proper overload protection, the motor overheats and fails within minutes. This is one of the primary causes of motor burnout.",
    order: 143,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-motors",
    topicLabel: "MWA D — Motors",
    question: "What is the purpose of the motor's locked rotor current (LRC or LRA) specification?",
    options: [
      "The current the motor draws when disconnected from the supply",
      "The current drawn at the instant of starting before the rotor begins to turn — typically 600–700% of FLA — used to size motor circuit protective devices and evaluate voltage drop",
      "The maximum current the motor can draw continuously at full load",
      "The current drawn when the motor is operating with its shaft mechanically locked for testing"
    ],
    correctIndex: 1,
    explanation: "Locked Rotor Current (LRC) is the current drawn at the instant of starting when the rotor is stationary (speed = 0). At this moment, the motor has no back-EMF, so impedance is very low and current is very high — typically 600–700% of FLA for NEMA Design B motors. LRC is used to: (1) calculate voltage drop during starting, (2) size conductors and protective devices, and (3) evaluate the impact of motor starting on the supply system.",
    order: 144,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-starters",
    topicLabel: "MWA D — Motor Starters",
    question: "What is the purpose of the overload relay in a magnetic motor starter?",
    options: [
      "To protect the motor from short circuits",
      "To protect the motor from sustained overloads by monitoring current and tripping the starter if current exceeds the motor's thermal capacity",
      "To provide disconnect capability during maintenance",
      "To limit the motor's inrush current during starting"
    ],
    correctIndex: 1,
    explanation: "The overload relay monitors motor current and provides inverse-time-overcurrent protection tailored to the motor's thermal characteristics. Unlike a circuit breaker (which handles short circuits), the overload relay handles sustained overloads (110–600% FLA) that won't trip a breaker but will overheat and damage motor insulation over time. The overload relay must be set to the motor's FLA.",
    order: 145,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-starters",
    topicLabel: "MWA D — Motor Starters",
    question: "A motor has a nameplate FLA of 18A at 600V. What is the maximum overload relay setting permitted by the CEC for a standard motor?",
    options: [
      "18.0A (100% FLA)",
      "19.8A (110% FLA)",
      "23.4A (130% FLA)",
      "27.0A (150% FLA)"
    ],
    correctIndex: 2,
    explanation: "CEC Rule 28-308 permits overload relays to be set at a maximum of 125% of FLA for motors with a service factor ≥ 1.15 or temperature rise ≤ 40°C, and 115% for all other motors. For this motor: 18A × 1.15 = 20.7A or 18A × 1.25 = 22.5A. However, the CEC Table 28 standard limit for most motors is 125% = 22.5A. The closest answer reflecting the 130% (which includes the branch circuit allowance) is 23.4A. In practice the overload relay is set at the FLA of the motor — 18A — with the overload relay sized to trip at 125% of that: 22.5A.",
    order: 146,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-starters",
    topicLabel: "MWA D — Motor Starters",
    question: "What is the maximum size of a non-time-delay fuse for branch circuit motor protection per the CEC?",
    options: [
      "125% of motor FLA",
      "150% of motor FLA",
      "300% of motor FLA",
      "400% of motor FLA"
    ],
    correctIndex: 2,
    explanation: "CEC Rule 28-200 Table 29 allows non-time-delay (one-time) fuses for motor branch circuit protection to be rated at up to 300% of motor FLA. This allows the fuse to pass the high locked-rotor inrush current during starting without blowing, while still providing short circuit protection. Time-delay fuses (dual-element) may be rated at up to 175% of FLA because they have built-in delay for inrush.",
    order: 147,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-starters",
    topicLabel: "MWA D — Motor Starters",
    question: "What is the function of the holding coil in a magnetic motor starter?",
    options: [
      "To mechanically hold the motor shaft in position during braking",
      "To maintain the main contacts in the closed position when energised by the control circuit — opening when the control circuit is de-energised",
      "To generate a magnetic field that limits starting current",
      "To hold the overload relay contacts closed during starting inrush"
    ],
    correctIndex: 1,
    explanation: "The holding (operating) coil is an electromagnetic solenoid that, when energised by the control circuit (typically 120V or 24V AC), pulls in the armature and holds the main power contacts closed. When the coil is de-energised (by pressing STOP, overload trip, or control power loss), a spring opens the contacts. This 'fail-safe' design ensures the motor stops on any control power interruption.",
    order: 148,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-starters",
    topicLabel: "MWA D — Motor Starters",
    question: "In a three-wire control circuit, what is the purpose of the auxiliary (seal-in) contact on the motor starter?",
    options: [
      "To provide a backup power path in case the main contacts fail",
      "To maintain the holding coil energised after the momentary START button is released",
      "To trip the overload relay if motor current is too high",
      "To provide a visual indication that the motor is running"
    ],
    correctIndex: 1,
    explanation: "The auxiliary contact (wired in parallel with the START button) 'seals in' the control circuit — once the START button is momentarily pressed and the coil energises and closes, the auxiliary contact takes over, keeping the coil energised when the START button is released. The motor only stops when the STOP button (normally closed) breaks the circuit. This is the basis of the standard three-wire control circuit used in nearly all industrial motor controls.",
    order: 149,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-starters",
    topicLabel: "MWA D — Motor Starters",
    question: "A reduced voltage soft starter (RVSS) reduces motor starting current by:",
    options: [
      "Connecting a series resistance in the motor circuit that is short-circuited as the motor accelerates",
      "Controlling the firing angle of SCRs to gradually increase the voltage applied to the motor from zero to full voltage over the programmed ramp time",
      "Reducing the supply frequency during starting and ramping it up to 60 Hz",
      "Reducing the number of active phases from three to one during starting"
    ],
    correctIndex: 1,
    explanation: "A soft starter uses back-to-back SCRs (thyristors) in each phase to control the phase angle of the voltage waveform applied to the motor. By starting with a small firing angle (low voltage) and gradually increasing it over the ramp time, the motor voltage and current increase smoothly, reducing inrush current and mechanical shock. Soft starters reduce starting current to approximately 200–400% of FLA compared to 600–700% for direct-on-line starting.",
    order: 150,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-starters",
    topicLabel: "MWA D — Motor Starters",
    question: "What is the purpose of a star-delta (wye-delta) reduced voltage starter?",
    options: [
      "To provide a speed-control function for varying production rates",
      "To start the motor with windings connected in wye (lower voltage per winding), then switch to delta (full voltage) — reducing starting current to approximately 1/3 of direct-on-line",
      "To allow a single-phase motor to start on three-phase supply",
      "To reverse motor direction by switching the delta connection"
    ],
    correctIndex: 1,
    explanation: "In wye connection during starting, each winding receives VL/√3 (line voltage divided by √3) — reducing starting current to approximately 1/3 of direct-on-line. After acceleration, the starter switches to delta, applying full line voltage to each winding. Star-delta starters require motors with six accessible terminals (both ends of each winding). The transition creates a brief current transient as the motor transfers from wye to delta.",
    order: 151,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-drives",
    topicLabel: "MWA D — Variable Frequency Drives",
    question: "What are the three main stages of a Variable Frequency Drive (VFD)?",
    options: [
      "Transformer → reactor → inverter",
      "Rectifier (AC→DC) → DC bus (filter) → inverter (DC→variable AC)",
      "Converter → isolator → output filter",
      "Input breaker → SCR bank → output contactors"
    ],
    correctIndex: 1,
    explanation: "A VFD has three stages: (1) Rectifier — converts input AC to DC using diodes or SCRs; (2) DC Bus — filters and stores DC energy in capacitors and/or inductors; (3) Inverter — uses IGBTs (Insulated Gate Bipolar Transistors) switched by PWM (Pulse Width Modulation) to synthesise variable-frequency, variable-voltage AC output to control motor speed.",
    order: 152,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-drives",
    topicLabel: "MWA D — Variable Frequency Drives",
    question: "What is V/Hz (Volts-per-Hertz) control in a VFD and why is it important?",
    options: [
      "A method of adjusting the DC bus voltage to improve rectifier efficiency",
      "Maintaining a constant ratio of output voltage to output frequency to keep the motor's magnetic flux constant across the speed range, preventing saturation at low speed or flux weakening at high speed",
      "A protection feature that trips the VFD if the voltage-to-frequency ratio exceeds 1.0",
      "The ratio of input voltage to output frequency used for power factor correction"
    ],
    correctIndex: 1,
    explanation: "V/Hz (or V/f) control maintains a constant voltage-to-frequency ratio across the operating speed range. Reducing frequency without reducing voltage would over-flux the motor (core saturation, overheating). Reducing voltage proportionally to frequency keeps flux constant and maintains rated torque capability throughout the speed range. The V/Hz ratio is set based on the motor's rated voltage and frequency (e.g., 600V/60Hz = 10 V/Hz).",
    order: 153,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-drives",
    topicLabel: "MWA D — Variable Frequency Drives",
    question: "What is regenerative braking in a VFD application?",
    options: [
      "Using an external mechanical brake simultaneously with the VFD for emergency stopping",
      "The VFD decelerating the motor by converting kinetic energy from the spinning load back to electrical energy — either returned to the grid or dissipated in a braking resistor",
      "The motor being braked by reversing two of the three supply phases",
      "A braking method that uses DC injection into the motor windings to produce a braking torque"
    ],
    correctIndex: 1,
    explanation: "When a VFD decelerates a motor driving a high-inertia load, the load drives the motor as a generator. The VFD's inverter can return this regenerated energy back to the DC bus. In a standard VFD, this energy is dissipated in a braking resistor (dynamic braking). In a regenerative VFD (with an active front end), the energy is returned to the AC supply — improving system efficiency.",
    order: 154,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-drives",
    topicLabel: "MWA D — Variable Frequency Drives",
    question: "Why must VFD output conductors use a separate conduit from other circuits, or use shielded cable?",
    options: [
      "VFD output conductors carry DC and cannot share conduit with AC circuits",
      "The high-frequency PWM switching of VFD outputs induces electrical noise (EMI) into adjacent conductors, potentially causing control system malfunctions and interference",
      "VFD output conductors operate at higher voltage than rated — requiring physical separation for safety",
      "VFD output conductors must be larger gauge and require a separate conduit for physical reasons only"
    ],
    correctIndex: 1,
    explanation: "VFD output conductors carry high-frequency PWM switching signals that generate significant electromagnetic interference (EMI). This can couple into adjacent signal cables, control wiring, and communication cables — causing spurious signals, data errors, and malfunctions. VFD output cables should be run in separate conduit from other circuits, and shielded cable (with shield grounded at the drive end only) is recommended, especially for long cable runs.",
    order: 155,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-drives",
    topicLabel: "MWA D — Variable Frequency Drives",
    question: "What is the risk of 'long cable' syndrome on VFD installations?",
    options: [
      "Long cables increase resistance, reducing motor torque at full speed",
      "Voltage spikes caused by cable capacitance and PWM reflection can exceed the motor's insulation rating, causing premature winding failure",
      "Long cables reduce the effective output frequency of the VFD",
      "Cables exceeding 30 m require a larger VFD to compensate for resistance losses"
    ],
    correctIndex: 1,
    explanation: "When PWM pulses travel along long cable runs, reflected voltage waves at the motor terminals can create voltage spikes of 1.5–2× the DC bus voltage (up to 1,200V on a 600V drive). This exceeds the winding insulation rating of standard motors, causing premature insulation failure. Solutions include: inverter-duty motors (higher insulation class), output reactors or dV/dt filters at the drive output, or keeping cable runs short.",
    order: 156,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-drives",
    topicLabel: "MWA D — Variable Frequency Drives",
    question: "What is DC injection braking in a VFD?",
    options: [
      "Injecting DC current from a battery into the motor circuit to provide emergency stopping power",
      "Applying a DC voltage to the motor windings after the AC is removed, creating a stationary magnetic field that brakes the rotor to a stop",
      "Increasing the DC bus voltage to create additional braking torque",
      "Bypassing the inverter section and connecting the motor directly to the DC bus for braking"
    ],
    correctIndex: 1,
    explanation: "DC injection braking applies DC current directly to the motor stator windings after disconnecting or reducing the AC supply. The stationary magnetic field produced by the DC creates an opposing torque on the rotating rotor (like eddy current braking), quickly decelerating the motor to a stop. DC injection braking is effective for stopping loads quickly but generates significant heat in the rotor — it must be time-limited to prevent overheating.",
    order: 157,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-controls",
    topicLabel: "MWA D — Control Systems",
    question: "In a PLC ladder logic diagram, what does an XIC (Examine If Closed) instruction represent?",
    options: [
      "A normally open contact that is TRUE (passes logic) when the addressed bit is 1",
      "A normally closed contact that is TRUE when the addressed bit is 0",
      "An output coil that sets the addressed bit to 1 when the rung is TRUE",
      "A timer instruction that begins counting when the rung becomes TRUE"
    ],
    correctIndex: 0,
    explanation: "XIC (Examine If Closed) is equivalent to a normally open contact in relay logic. The instruction is TRUE (passes logic continuity) when the addressed bit or tag is in the '1' (ON) state. If the bit is '0' (OFF), the instruction is FALSE and blocks logic continuity. XIC is used to check that a condition or input is active before allowing an output to be energised.",
    order: 158,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-controls",
    topicLabel: "MWA D — Control Systems",
    question: "In a PLC ladder logic diagram, what does an XIO (Examine If Open) instruction represent?",
    options: [
      "A normally open contact that is TRUE when the addressed bit is 1",
      "A normally closed contact that is TRUE (passes logic) when the addressed bit is 0",
      "An output coil that clears the addressed bit to 0",
      "An input instruction that reads an analog signal"
    ],
    correctIndex: 1,
    explanation: "XIO (Examine If Open) is equivalent to a normally closed contact in relay logic. It is TRUE (passes logic) when the addressed bit is '0' (OFF) — the condition is NOT present. When the bit is '1' (ON), XIO is FALSE and blocks the rung. XIO is used to ensure a condition is NOT active (e.g., a safety interlock is not tripped) before allowing an output to energise.",
    order: 159,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-controls",
    topicLabel: "MWA D — Control Systems",
    question: "What is the difference between a PLC's discrete input and an analog input module?",
    options: [
      "Discrete inputs handle AC signals; analog inputs handle DC signals",
      "Discrete inputs handle ON/OFF (binary) signals from switches and sensors; analog inputs handle continuously variable signals (4–20 mA, 0–10V) from transducers",
      "Discrete inputs are for field devices; analog inputs are for operator panels only",
      "Discrete inputs sample faster than analog inputs"
    ],
    correctIndex: 1,
    explanation: "Discrete (digital) input modules receive ON/OFF signals from pushbuttons, limit switches, proximity sensors, and relay contacts — the bit is either 0 or 1. Analog input modules convert continuously variable process signals (temperature, pressure, flow, level via 4–20 mA or 0–10V transducers) to a digital value (typically 0–32767 counts) proportional to the measured variable, allowing the PLC to monitor and control process quantities.",
    order: 160,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-controls",
    topicLabel: "MWA D — Control Systems",
    question: "What is a SCADA system and how does it differ from a PLC?",
    options: [
      "SCADA is a type of PLC used exclusively for safety applications",
      "SCADA (Supervisory Control and Data Acquisition) is a higher-level system that collects data from and sends commands to multiple PLCs and RTUs across a wide area — providing centralised monitoring, data logging, and supervisory control",
      "SCADA replaces PLCs in modern facilities — PLCs are no longer used",
      "SCADA is the programming software used to write PLC ladder logic"
    ],
    correctIndex: 1,
    explanation: "A PLC executes real-time control logic at the local equipment level. SCADA operates at a higher supervisory level — it communicates with multiple PLCs, RTUs (Remote Terminal Units), and field devices across a facility or geographic area to: collect and log process data, display operator graphics (HMI), generate alarms, and send setpoint changes to local controllers. SCADA does not typically execute millisecond-level control — PLCs do that.",
    order: 161,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-controls",
    topicLabel: "MWA D — Control Systems",
    question: "What is the purpose of a safety relay or safety PLC in a machine control system?",
    options: [
      "To provide faster scan times than a standard PLC for high-speed machines",
      "To monitor safety devices (E-stops, light curtains, safety gates) and ensure the machine reaches a safe state on demand — certified to perform safety functions to a defined safety integrity level (SIL or PLr)",
      "To replace the main PLC when processing safety-critical analog signals",
      "To provide redundant communication paths for SCADA systems"
    ],
    correctIndex: 1,
    explanation: "Safety relays and safety PLCs (certified to IEC 62061 / ISO 13849) are specifically designed and certified to implement machine safety functions — emergency stop, guard monitoring, two-hand control, etc. They use redundant internal circuits, self-monitoring, and defined diagnostic coverage to achieve a specific Safety Integrity Level (SIL) or Performance Level (PLr). Standard PLCs are not certified for safety functions.",
    order: 162,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-controls",
    topicLabel: "MWA D — Control Systems",
    question: "What is the purpose of a contactor versus a relay in a motor control circuit?",
    options: [
      "Contactors and relays are identical — just different names by manufacturer",
      "Contactors are designed for high-current motor load switching with arc suppression; relays are for low-current control circuit switching",
      "Relays switch power circuits; contactors switch control circuits",
      "Contactors are used on DC circuits; relays are used on AC circuits"
    ],
    correctIndex: 1,
    explanation: "Contactors are rated for repetitive switching of high motor currents — they have arc chutes or magnetic arc blow-out to suppress the arc when contacts open under load, and are rated in AC-3 (squirrel cage motor) or AC-4 (plugging/jogging) duty classes. Control relays are designed for low-current logic and control circuits. Using a control relay to switch motor current causes rapid contact wear and failure.",
    order: 163,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-controls",
    topicLabel: "MWA D — Control Systems",
    question: "What is interlocking in a motor control circuit, and give a common example?",
    options: [
      "Connecting two motors in series so they run at the same speed",
      "Using electrical or mechanical means to prevent two incompatible conditions from occurring simultaneously — for example, preventing a forward and reverse contactor from both energising at the same time",
      "A method of synchronising PLC scan time with motor rotation speed",
      "Using the motor's back-EMF to interlock with the supply voltage"
    ],
    correctIndex: 1,
    explanation: "Interlocking prevents mutually exclusive or hazardous conditions from occurring simultaneously. The most common example is the forward-reverse interlock: the forward contactor's normally-closed auxiliary contact is wired in series with the reverse contactor's coil circuit, and vice versa. If forward is energised, its NC contact opens the reverse coil circuit — physically preventing both from energising simultaneously, which would cause a phase-to-phase short circuit.",
    order: 164,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-controls",
    topicLabel: "MWA D — Control Systems",
    question: "What is a two-wire control circuit and how does it differ from a three-wire control circuit?",
    options: [
      "Two-wire uses a maintained contact (like a float switch or thermostat) — the motor automatically restarts after a power failure; three-wire uses momentary START/STOP buttons with a seal-in contact — the motor does NOT restart automatically",
      "Two-wire circuits are for single-phase motors; three-wire circuits are for three-phase motors",
      "Two-wire circuits use AC control voltage; three-wire circuits use DC control voltage",
      "Two-wire circuits have no overload protection; three-wire circuits include overload relay contacts"
    ],
    correctIndex: 0,
    explanation: "A two-wire control circuit uses a maintained contact device (thermostat, pressure switch, float switch, selector switch). If power is lost and restored, the maintained contact is still closed, so the motor automatically restarts — potential hazard if unexpected. A three-wire circuit uses momentary START (NO) and STOP (NC) buttons with a seal-in auxiliary contact. On power restoration, the seal-in contact is open, so the motor does NOT restart automatically — the operator must press START again.",
    order: 165,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-controls",
    topicLabel: "MWA D — Control Systems",
    question: "What is the function of a control power transformer (CPT) in a motor control circuit?",
    options: [
      "To step up motor voltage for the starting period only",
      "To step down the motor supply voltage (e.g., 600V or 480V) to a safe, lower control voltage (typically 120V AC) for operating coils, pilot lights, and control devices",
      "To provide galvanic isolation between the motor and the PLC processor",
      "To convert three-phase supply to single-phase for the control circuit"
    ],
    correctIndex: 1,
    explanation: "A CPT steps down the higher motor supply voltage to a safe, standard control voltage (typically 120V AC in Canada) for operating contactor coils, solenoid valves, pilot lights, and interfacing with PLCs and other control devices. This limits the hazard from faults in the control circuit wiring — a 120V shock is far less hazardous than 600V, and control wiring damage to 120V is less dangerous than a fault to 600V.",
    order: 166,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-controls",
    topicLabel: "MWA D — Control Systems",
    question: "What is bump testing a motor and when should it be performed?",
    options: [
      "Applying a short burst of current to check if the motor coils are intact before installation",
      "A brief momentary energisation to verify correct motor rotation direction before coupling the load — preventing damage from reverse rotation",
      "Testing the motor's acceleration time by applying full voltage briefly",
      "Checking the motor frame for physical damage by vibrating it with a rubber mallet"
    ],
    correctIndex: 1,
    explanation: "Bump testing involves briefly energising the motor (just long enough to see shaft rotation — a fraction of a second) to verify rotation direction before coupling the motor to its load. If the motor runs backward and is coupled to a pump, fan, or conveyor, significant equipment damage can result. A bump test allows rotation correction (swapping any two phases) before the load is connected.",
    order: 167,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-controls",
    topicLabel: "MWA D — Control Systems",
    question: "What is the purpose of a power factor correction capacitor switched in parallel with a motor?",
    options: [
      "To reduce the motor's operating current by limiting torque",
      "To supply reactive power locally that the motor requires, reducing reactive current flowing from the supply and improving the system power factor",
      "To provide starting torque for single-phase motors",
      "To filter harmonics generated by the motor's magnetic circuit"
    ],
    correctIndex: 1,
    explanation: "Induction motors draw lagging reactive current (VARs) to establish their magnetic field. A capacitor bank switched in parallel with the motor supplies these VARs locally, reducing the reactive component of current drawn from the supply. This improves power factor, reduces I²R losses in supply cables, and can reduce utility demand charges. Capacitors must be switched off with the motor — they must not remain energised when the motor is off.",
    order: 168,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-controls",
    topicLabel: "MWA D — Control Systems",
    question: "What is a phase failure relay and what does it protect against?",
    options: [
      "A relay that trips when the motor runs at above synchronous speed",
      "A protective relay that monitors all three supply phases and trips the motor circuit if any phase is lost, reversed, or severely unbalanced",
      "A relay that prevents the motor from starting until all three phases are within 5% of rated voltage",
      "A relay that monitors motor current and trips on overcurrent"
    ],
    correctIndex: 1,
    explanation: "A phase failure (phase loss) relay continuously monitors the three supply voltages for: phase loss (open phase), phase reversal (incorrect phase sequence), and phase unbalance (voltage imbalance between phases). If any fault is detected, the relay trips the motor contactor before the motor can be damaged. Phase failure relays are critical protection for expensive motors in remote or unattended applications.",
    order: 169,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-controls",
    topicLabel: "MWA D — Control Systems",
    question: "What does a motor's insulation class indicate (Class B, F, H)?",
    options: [
      "The class of protective enclosure (IP rating) for the motor housing",
      "The maximum allowable winding temperature rise (above a 40°C ambient) that the insulation can withstand continuously without failing",
      "The motor's efficiency classification under the IE standard",
      "The motor's duty cycle rating (continuous, intermittent, or short-time)"
    ],
    correctIndex: 1,
    explanation: "Insulation class indicates the maximum temperature rise the winding insulation can sustain: Class B = 80°C rise (max 120°C total), Class F = 105°C rise (max 145°C total), Class H = 125°C rise (max 165°C total). Modern motors typically use Class F or H insulation but are designed to run at Class B temperatures — providing a thermal margin for long insulation life. Exceeding the insulation class temperature reduces insulation life exponentially (Arrhenius law: every 10°C above rated halves insulation life).",
    order: 170,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-controls",
    topicLabel: "MWA D — Control Systems",
    question: "What is the purpose of an enclosure (TEFC, ODP) designation on a motor?",
    options: [
      "To identify the motor's voltage rating (T = three-phase, E = enclosed)",
      "To describe the motor housing design — TEFC (Totally Enclosed Fan Cooled) prevents external air from entering; ODP (Open Drip Proof) has ventilation openings for cooling but restricts dripping liquid",
      "To indicate the motor's efficiency class under the NEMA Premium standard",
      "To specify the motor's mounting configuration (foot, flange, face)"
    ],
    correctIndex: 1,
    explanation: "Motor enclosure designations describe environmental protection: ODP (Open Drip Proof) has ventilation openings positioned to prevent dripping liquid from entering — suitable for clean, indoor, non-hazardous locations. TEFC (Totally Enclosed Fan Cooled) uses an external fan to blow air over the sealed enclosure — no internal ventilation opening, suitable for outdoor, dusty, damp, or corrosive environments. WP (Weather Protected) and TENV (Totally Enclosed Non Ventilated) are other common types.",
    order: 171,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-d-controls",
    topicLabel: "MWA D — Control Systems",
    question: "What does 'jogging' (inching) a motor mean in a control system, and why does it require special consideration?",
    options: [
      "Running the motor at half speed for a period of time to allow a gradual warm-up",
      "Briefly energising the motor for short periods to position a load precisely — requires a jog circuit that bypasses the seal-in contact so the motor stops immediately when the JOG button is released",
      "Starting and stopping the motor rapidly in sequence to check all control logic",
      "Connecting the motor in star for a short period before switching to delta"
    ],
    correctIndex: 1,
    explanation: "Jogging (inching) briefly energises the motor for precise load positioning. A jog circuit must bypass the seal-in (auxiliary) contact — otherwise pressing JOG energises the coil and the seal-in locks it on, turning a momentary jog into a run command. In jog circuits, the JOG button directly energises the coil without the auxiliary contact, so the motor runs only while the button is held and stops immediately when released. Frequent jogging generates significant heat — motor thermal capacity must be considered.",
    order: 172,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-e-firealarm",
    topicLabel: "MWA E — Fire Alarm Systems",
    question: "What is the difference between a Class A and Class B fire alarm wiring configuration?",
    options: [
      "Class A uses AC wiring; Class B uses DC wiring",
      "Class A is a loop — both wire ends return to the panel, so a single break does not disable the circuit; Class B is a T-tap with one wire end terminated at the last device",
      "Class A is for initiating devices; Class B is for notification devices",
      "Class A supports addressable devices; Class B supports conventional devices only"
    ],
    correctIndex: 1,
    explanation: "Class A (Style D or E) fire alarm wiring returns both conductors to the control panel. A single conductor break does not disable the circuit — the panel communicates through the other path. Class B (Style B) is a simple two-wire circuit that terminates at the last device with an End-of-Line (EOL) resistor. A single break from the panel to the last device disables all devices beyond the break. Class A provides greater reliability for life-safety circuits.",
    order: 173,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-e-firealarm",
    topicLabel: "MWA E — Fire Alarm Systems",
    question: "What is the purpose of an End-of-Line (EOL) resistor in a Class B fire alarm initiating device circuit?",
    options: [
      "To terminate RF interference on the circuit",
      "To allow the fire alarm panel to detect the difference between a normal circuit, a short circuit (alarm), and an open circuit (trouble) by monitoring the circuit current",
      "To limit current flow and protect the devices on the circuit",
      "To provide surge protection for the last device on the circuit"
    ],
    correctIndex: 1,
    explanation: "The EOL resistor allows the FACP to supervise the circuit. Under normal conditions, a small supervisory current flows through all devices and the EOL resistor — the panel reads a specific resistance. A short circuit (alarm condition for Class B) causes a current increase. An open circuit (wire break or disconnected device) causes current to drop to zero — a 'trouble' condition. The three current levels allow the panel to distinguish alarm from trouble.",
    order: 174,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-e-firealarm",
    topicLabel: "MWA E — Fire Alarm Systems",
    question: "What is an addressable fire alarm system and what advantage does it have over a conventional system?",
    options: [
      "An addressable system uses wireless sensors; a conventional system uses wired sensors",
      "In an addressable system, each device has a unique address — the panel identifies the exact device in alarm or trouble; in a conventional system, the panel only knows which zone (circuit) is activated",
      "An addressable system requires separate wiring for each device; a conventional system uses shared wiring",
      "Addressable systems are for high-rise buildings only; conventional systems are for small buildings"
    ],
    correctIndex: 1,
    explanation: "In an addressable fire alarm system, each initiating and notification device has a unique address that is communicated to the FACP over a two-wire SLC (Signalling Line Circuit). When a device activates, the panel displays the exact device address and location — enabling first responders to go directly to the source. Conventional systems only indicate which zone (typically a floor or section) has activated — requiring manual search for the specific device.",
    order: 175,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-e-firealarm",
    topicLabel: "MWA E — Fire Alarm Systems",
    question: "What type of fire detector is best suited for detecting a slow, smouldering fire that produces large quantities of smoke before flames develop?",
    options: [
      "Rate-of-rise heat detector",
      "Fixed-temperature heat detector",
      "Photoelectric (light-scattering) smoke detector",
      "Ionisation smoke detector"
    ],
    correctIndex: 2,
    explanation: "Photoelectric smoke detectors use a light source and a photosensor in a chamber. Smoke particles from a slow smouldering fire scatter light into the photosensor, triggering the alarm. They are highly effective for slow, smouldering fires that produce large, visible smoke particles. Ionisation detectors respond faster to fast-flaming fires with small invisible combustion particles. Rate-of-rise and fixed-temperature detectors respond to heat, not smoke.",
    order: 176,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-e-firealarm",
    topicLabel: "MWA E — Fire Alarm Systems",
    question: "What wiring method is required for fire alarm circuits to ensure they remain functional during a fire?",
    options: [
      "NMD90 cable, which has adequate heat resistance for most fires",
      "Fire-rated cables (MI cable, FT6 or CI rated cables) or cables installed in conduit with a fire-resistance rating that meets the system's operational period requirement",
      "Standard TECK90 cable — its PVC jacket provides adequate fire resistance",
      "Any CSA-approved cable — fire alarm cables have no special requirements"
    ],
    correctIndex: 1,
    explanation: "Fire alarm system wiring must remain functional during a fire for the duration required by the fire protection system operation. CAN/ULC S524 and NBC require fire alarm circuits to use circuit integrity (CI) rated cable (maintains function in fire for a specified period), MI cable, or cables installed in conduit with a fire resistance rating — ensuring the system can operate evacuation signals and suppress fire during an actual emergency.",
    order: 177,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-e-firealarm",
    topicLabel: "MWA E — Fire Alarm Systems",
    question: "What is the purpose of a fire alarm annunciator panel?",
    options: [
      "To test the fire alarm system without triggering a real alarm",
      "To provide a remote display showing the status, zone information, and alarm/trouble conditions of the main FACP — typically located near the building entrance for first responders",
      "To provide manual control of suppression systems",
      "To monitor elevator recall and door release functions only"
    ],
    correctIndex: 1,
    explanation: "An annunciator panel is a remote display that duplicates alarm and trouble information from the main FACP. It is typically located at the main building entrance, fire command station, or security desk — allowing fire department personnel to quickly identify the location of an alarm without going to the FACP. The annunciator shows zone status, alarm type, and often a floor/area map.",
    order: 178,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-e-firealarm",
    topicLabel: "MWA E — Fire Alarm Systems",
    question: "What is the purpose of a duct smoke detector installed in an HVAC air handling unit?",
    options: [
      "To detect a fire in the AHU motor compartment",
      "To detect smoke in the HVAC ductwork and shut down the AHU, preventing smoke from being distributed throughout the building",
      "To detect combustible gas leaks in the mechanical room",
      "To monitor CO levels in the return air stream"
    ],
    correctIndex: 1,
    explanation: "Duct smoke detectors sample air from the HVAC ductwork. If smoke is detected, the detector sends a signal to the FACP, which initiates AHU shutdown — preventing smoke from being distributed throughout the building via the air distribution system. The detector does not replace room detectors — it supplements them by addressing the specific hazard of smoke spreading through ductwork.",
    order: 179,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-e-security",
    topicLabel: "MWA E — Security Systems",
    question: "What is the difference between a passive infrared (PIR) and a dual-technology motion detector?",
    options: [
      "PIR detectors require a power supply; dual-technology detectors are battery operated",
      "A PIR detects changes in infrared radiation (body heat movement); a dual-technology detector combines PIR with microwave — both must activate simultaneously to trigger an alarm, dramatically reducing false alarms",
      "PIR detectors are for outdoor use; dual-technology detectors are for indoor use only",
      "PIR detectors detect motion in all directions; dual-technology detectors detect motion in one direction only"
    ],
    correctIndex: 1,
    explanation: "A PIR detector senses changes in infrared radiation — heat from a moving person. It can false-alarm from temperature changes (HVAC, sunlight). A dual-technology detector requires BOTH PIR (heat movement) AND microwave (Doppler motion) to trigger simultaneously. This dramatically reduces false alarms because both technologies must independently detect the same moving object, while a real intruder triggers both sensors reliably.",
    order: 180,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-e-security",
    topicLabel: "MWA E — Security Systems",
    question: "What is supervised wiring in a security alarm system?",
    options: [
      "Wiring that is monitored by CCTV cameras for tampering",
      "Wiring in which a small supervisory current is continuously monitored — a wire break (open) or short circuit is detected as a fault, triggering a tamper alarm",
      "Wiring that uses conduit for physical protection",
      "Wiring that has been inspected and approved by the AHJ"
    ],
    correctIndex: 1,
    explanation: "Supervised security circuits use a continuous small current monitored by the alarm panel. A break in the wire (open circuit) causes current to drop — detected as a fault/tamper. A short circuit (someone bridging the conductors to defeat a sensor) causes current to increase — also detected as a fault. This ensures that tampering with the wiring is detected, not just activation of the sensor.",
    order: 181,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-e-vdv",
    topicLabel: "MWA E — VDV and Communication Systems",
    question: "What is the maximum cable segment length for horizontal Cat 6A structured cabling in a commercial building?",
    options: [
      "50 m",
      "90 m",
      "100 m",
      "150 m"
    ],
    correctIndex: 1,
    explanation: "TIA-568 and ISO/IEC 11801 standards limit horizontal cabling to 90 m from the telecommunications room (TR) patch panel to the work area outlet. The remaining 10 m is allocated for equipment cords and patch cords at both ends, for a total channel length of 100 m. Cat 6A supports 10 Gigabit Ethernet (10GBase-T) at the full 100 m channel length.",
    order: 182,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-e-vdv",
    topicLabel: "MWA E — VDV and Communication Systems",
    question: "What is the difference between Cat 6 and Cat 6A structured cabling?",
    options: [
      "Cat 6 is for copper; Cat 6A is for fibre optic cabling",
      "Cat 6 supports 1 Gbps at 100 m; Cat 6A supports 10 Gbps at 100 m with improved alien crosstalk performance",
      "Cat 6A has a smaller outside diameter for easier installation",
      "Cat 6 is the current standard; Cat 6A is discontinued"
    ],
    correctIndex: 1,
    explanation: "Cat 6 supports 1 Gbps (1000Base-T) at 100 m and 10 Gbps (10GBase-T) only to 55 m. Cat 6A (Augmented Category 6) supports 10 Gbps at the full 100 m horizontal channel length, with tighter electrical specifications and improved alien crosstalk (ANEXT) performance. Cat 6A cables are larger diameter and require more space, but are now the standard for new commercial structured cabling installations.",
    order: 183,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-e-vdv",
    topicLabel: "MWA E — VDV and Communication Systems",
    question: "What is Power over Ethernet (PoE) and what is its maximum power output per port for PoE++ (802.3bt Type 4)?",
    options: [
      "PoE delivers data and 15.4W of power over Cat 5e or better cable — sufficient for IP phones",
      "PoE delivers data and power simultaneously over structured cabling — PoE++ (802.3bt Type 4) delivers up to 90W per port, supporting devices like pan-tilt-zoom cameras, access control readers, and thin clients",
      "PoE is a wireless power delivery standard using the 802.11 WiFi protocol",
      "PoE delivers up to 30W per port — the maximum for all PoE standards"
    ],
    correctIndex: 1,
    explanation: "PoE standards: 802.3af (PoE) = 15.4W; 802.3at (PoE+) = 30W; 802.3bt Type 3 (PoE++) = 60W; 802.3bt Type 4 (PoE++) = 90W. PoE++ Type 4 uses all four pairs in the cable for power delivery and requires Cat 5e or better. It supports power-hungry devices including LED luminaires, PTZ cameras, digital signage, and access control systems — eliminating the need for separate power wiring to remote devices.",
    order: 184,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-e-vdv",
    topicLabel: "MWA E — VDV and Communication Systems",
    question: "What is a fibre optic splice and when is a fusion splice preferred over a mechanical splice?",
    options: [
      "Both splice types have identical optical performance — the choice is based only on cost",
      "A fusion splice permanently welds two fibres with an electric arc — achieving very low loss (< 0.05 dB) and is preferred for permanent backbone installations; a mechanical splice uses index-matching gel and achieves higher loss (0.1–0.5 dB) but is faster for temporary repairs",
      "Fusion splices are for single-mode fibre only; mechanical splices are for multimode only",
      "Fusion splices are used outdoors only; mechanical splices are used indoors only"
    ],
    correctIndex: 1,
    explanation: "Fusion splicing uses an electric arc to permanently melt and fuse two fibre ends together, achieving loss as low as 0.02–0.05 dB — making it ideal for backbone installations where accumulated loss is critical. Mechanical splices use index-matching gel to align fibres in a precision sleeve — faster and requiring less equipment, but with higher and less consistent loss. Fusion splicing is preferred for permanent, low-loss permanent installations.",
    order: 185,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-e-vdv",
    topicLabel: "MWA E — VDV and Communication Systems",
    question: "What is the minimum bend radius for Cat 6A UTP (Unshielded Twisted Pair) cable during and after installation?",
    options: [
      "4 times the cable outside diameter during installation; 1 times after",
      "4 times the cable outside diameter after installation; 8 times during installation (under tension)",
      "No minimum — UTP cable can be bent freely",
      "100 mm radius at all times"
    ],
    correctIndex: 1,
    explanation: "TIA-568 specifies minimum bend radii to prevent cable deformation that alters the pair geometry and degrades electrical performance. For Cat 6A UTP: minimum bend radius = 4× the cable OD after installation (at rest). During installation under tension (pulling), the minimum radius is 8× the cable OD. Excessive bending causes pair deformation, increased near-end crosstalk (NEXT), and return loss — potentially failing channel certification.",
    order: 186,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-e-bas",
    topicLabel: "MWA E — Building Automation Systems",
    question: "What is BACnet and what is it used for in building automation?",
    options: [
      "BACnet is a proprietary Johnson Controls protocol for HVAC control only",
      "BACnet (Building Automation and Control Networks) is an open ASHRAE/ISO standard communication protocol for integrating HVAC, lighting, access control, fire alarm, and other building systems from different manufacturers",
      "BACnet is a wireless protocol for battery-powered sensors only",
      "BACnet is the cabling standard for BAS systems — equivalent to Cat 6A for structured data cabling"
    ],
    correctIndex: 1,
    explanation: "BACnet (ANSI/ASHRAE 135) is an open, vendor-neutral communication protocol for building automation. It allows controllers, sensors, actuators, and supervisory systems from different manufacturers to interoperate on a common network. BACnet supports multiple physical layers (BACnet/IP over Ethernet, MS/TP over RS-485, BACnet/SC). Its open standard nature prevents vendor lock-in and allows integrated building management across all systems.",
    order: 187,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-e-bas",
    topicLabel: "MWA E — Building Automation Systems",
    question: "What is a DDC (Direct Digital Control) controller in a building automation system?",
    options: [
      "A manual control panel that directly operates HVAC equipment without a computer",
      "A microprocessor-based controller that reads sensors (temperature, pressure, CO₂), executes programmed control algorithms, and directly controls equipment outputs (valves, dampers, fans) to maintain desired setpoints",
      "A device that converts digital BAS signals to analog signals for legacy equipment",
      "A data logging device that records sensor readings for energy management reports"
    ],
    correctIndex: 1,
    explanation: "A DDC controller is the local intelligence in a BAS. It reads analog and digital inputs from sensors and status points, executes programmed PID or on/off control logic, and drives output devices (variable valves, variable speed drives, damper actuators) to maintain temperature, humidity, pressure, or CO₂ setpoints. Multiple DDC controllers communicate with a supervisory workstation via BACnet or other protocols.",
    order: 188,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-e-bas",
    topicLabel: "MWA E — Building Automation Systems",
    question: "What is demand-controlled ventilation (DCV) and how does a BAS implement it?",
    options: [
      "A system that reduces ventilation when the building is unoccupied on a fixed time schedule",
      "A system that modulates outdoor air supply to occupied spaces based on real-time CO₂ levels — reducing ventilation (and HVAC energy) when actual occupancy is low",
      "A system that delivers maximum ventilation at all times to ensure air quality",
      "A system that controls ventilation based on outdoor temperature only"
    ],
    correctIndex: 1,
    explanation: "DCV uses CO₂ sensors in occupied spaces as a proxy for occupancy. CO₂ rises as more people occupy a space (exhaled CO₂). The BAS modulates outdoor air dampers on the AHU to maintain CO₂ below a setpoint (typically 1,000–1,100 ppm). When the space is partially occupied, less ventilation air is supplied — reducing heating/cooling energy while maintaining code-required air quality. ASHRAE 62.1 defines the framework for DCV.",
    order: 189,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-e-bas",
    topicLabel: "MWA E — Building Automation Systems",
    question: "What is Modbus and where is it commonly used in building and industrial automation?",
    options: [
      "A wireless mesh networking protocol for IoT sensors",
      "A serial communication protocol widely used to connect PLCs, VFDs, meters, and sensors to supervisory systems — simple, robust, and widely supported on RS-485 or TCP/IP",
      "A proprietary Siemens protocol for building management systems",
      "A fibre optic communication standard for high-speed BAS networks"
    ],
    correctIndex: 1,
    explanation: "Modbus (Modicon, 1979) is one of the most widely used industrial communication protocols. It supports RS-485 (Modbus RTU) and Ethernet (Modbus TCP/IP). Its simplicity — master/slave architecture with register-based data model — makes it easy to implement. It is used to connect VFDs, power meters, temperature controllers, PLCs, and sensors to SCADA, BAS, and energy management systems. Most modern VFDs support Modbus natively.",
    order: 190,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-e-bas",
    topicLabel: "MWA E — Building Automation Systems",
    question: "What is the purpose of a Building Management System (BMS) in a large commercial building?",
    options: [
      "To replace the electrical permit process for large commercial projects",
      "To centrally monitor, control, and optimise all building systems (HVAC, lighting, access, fire alarm, energy) from a single operator workstation — improving energy efficiency, comfort, and maintenance response",
      "To provide a UPS backup for all critical electrical systems",
      "To manage construction scheduling and subcontractor coordination"
    ],
    correctIndex: 1,
    explanation: "A BMS (also called BAS or EMS) integrates HVAC, lighting, access control, security, fire alarm, and energy metering systems into a single operator interface. Operators can monitor alarms, adjust setpoints, view energy consumption, schedule equipment, and generate reports from one workstation. Integration enables coordinated responses — e.g., on fire alarm, the BMS can shut down HVAC, pressurize stairwells, and release electric door locks automatically.",
    order: 191,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-e-vdv",
    topicLabel: "MWA E — VDV and Communication Systems",
    question: "What is the purpose of a paging (public address) system in a commercial or industrial facility?",
    options: [
      "To provide background music for customer-facing areas only",
      "To broadcast voice announcements and alert tones throughout the building for general communication, emergency notifications, and evacuation instructions",
      "To replace the fire alarm notification system in low-occupancy buildings",
      "To provide intercom functionality between two specific locations only"
    ],
    correctIndex: 1,
    explanation: "A paging/public address system broadcasts voice messages and tones to all or selected zones of a building. In emergencies, it can broadcast evacuation instructions, shelter-in-place commands, or all-clear announcements. In facilities, it is used for general announcements, locating personnel, and coordinating operations. Emergency voice communication systems (EVCS) integrated with fire alarms are required by code in certain occupancies (high-rise, assembly, etc.).",
    order: 192,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-e-vdv",
    topicLabel: "MWA E — VDV and Communication Systems",
    question: "What is CATV (Cable Television) distribution in a building, and what is the typical impedance of CATV coaxial cable?",
    options: [
      "CATV is distributed at 50 ohms impedance — the same as data networks",
      "CATV uses 75-ohm coaxial cable (RG-6 or RG-11) to distribute RF signals from a headend or satellite system to outlets throughout the building",
      "CATV uses Cat 6A structured cabling at 100 ohms impedance",
      "CATV is always distributed wirelessly — no cable is used in modern systems"
    ],
    correctIndex: 1,
    explanation: "CATV distribution uses 75-ohm coaxial cable — standardized for broadcast RF signals in the 5 MHz to 1 GHz+ range. RG-6 (18 AWG centre conductor) is used for shorter residential runs; RG-11 (14 AWG) has lower loss per metre and is used for longer building backbone runs. Signal amplifiers (distribution amplifiers) compensate for cable loss in large buildings. All connectors must be properly crimped or compression-fitted to maintain 75-ohm impedance continuity.",
    order: 193,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-e-vdv",
    topicLabel: "MWA E — VDV and Communication Systems",
    question: "What is a nurse call system and what communication standards govern its installation?",
    options: [
      "A nurse call system is a simple doorbell system — no specific standards apply",
      "A system that allows patients to alert nursing staff, with signals displayed at the nurses' station and corridor lights — governed by CAN/CSA Z317.1 in Canada for healthcare facilities",
      "A nurse call system is part of the fire alarm system in healthcare facilities",
      "A nurse call system uses standard telephone wiring and is governed by TIA-568"
    ],
    correctIndex: 1,
    explanation: "Nurse call systems provide patient-to-nurse communication in healthcare facilities. CAN/CSA Z317.1 (Special Requirements for Electrical Installations in Health Care Facilities) governs nurse call system installation in Canada. Systems include patient call stations, pillow speakers, corridor dome lights, duty station panels, and master stations. Modern IP-based nurse call systems integrate with BAS, telephony, and wireless staff communication systems.",
    order: 194,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-e-firealarm",
    topicLabel: "MWA E — Fire Alarm Systems",
    question: "What is the purpose of a sprinkler flow switch in a fire alarm system?",
    options: [
      "To control the water pressure in the sprinkler main",
      "To detect water flow in the sprinkler system (indicating a sprinkler head has opened) and send an alarm signal to the FACP, triggering evacuation and notifying the fire department",
      "To shut off water flow when the fire is extinguished",
      "To test the sprinkler system pressure monthly"
    ],
    correctIndex: 1,
    explanation: "A sprinkler flow switch (paddle-type or electronic) detects movement of water in the sprinkler piping caused by a sprinkler head operating. It sends a signal to the FACP, which activates evacuation signals throughout the building and transmits an alarm to the central monitoring station (and fire department). The flow switch provides faster detection than waiting for a smoke or heat detector to activate independently.",
    order: 195,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-e-firealarm",
    topicLabel: "MWA E — Fire Alarm Systems",
    question: "What is a fire alarm control panel (FACP) supervised power supply requirement?",
    options: [
      "The FACP must be connected to the building's main service — no backup required",
      "The FACP must have a primary (AC mains) power supply and a secondary (battery) backup capable of operating the system for a minimum of 24 hours in normal condition plus 5 minutes of full alarm",
      "The FACP must be connected to a generator that starts within 10 seconds of power failure",
      "Battery backup is only required in buildings over 10 storeys"
    ],
    correctIndex: 1,
    explanation: "CAN/ULC S527 requires the FACP to have: (1) primary AC mains power from a dedicated circuit, and (2) secondary battery backup capable of sustaining the system in standby for 24 hours, followed by 5 minutes of full alarm operation. This ensures the system remains operational through an extended power outage and can alert occupants even when utility power has failed.",
    order: 196,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-e-security",
    topicLabel: "MWA E — Security and Access Control",
    question: "What is an access control system and what are its main components?",
    options: [
      "A system that controls HVAC zone access to reduce energy consumption",
      "A system that manages entry to secured areas using credential readers, controllers, and electronic locking hardware — granting or denying access based on authorisation database",
      "A system that monitors employee time and attendance only",
      "A system that controls network access from specific devices on the IT infrastructure"
    ],
    correctIndex: 1,
    explanation: "An access control system manages physical entry to secured areas. Main components: (1) Credential reader (card reader, PIN pad, biometric) at the door; (2) Access control panel/controller that validates credentials against a database; (3) Electronic locking hardware (electric strike, magnetic lock, electrified hardware); (4) Door position switch (monitors open/closed status); (5) Request-to-exit (REX) device (PIR or push button for exit without credential). Access events are logged with time, date, and credential ID.",
    order: 197,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-e-security",
    topicLabel: "MWA E — Security and Access Control",
    question: "What is the difference between an electric strike and an electromagnetic (mag) lock?",
    options: [
      "An electric strike uses AC power; a mag lock uses DC power",
      "An electric strike releases the door latch when energised (fail-secure) or de-energised (fail-safe); a mag lock holds the door closed when energised and releases when de-energised (always fail-safe)",
      "Electric strikes are for exterior doors only; mag locks are for interior doors only",
      "Both are functionally identical — the choice is only aesthetic"
    ],
    correctIndex: 1,
    explanation: "An electric strike replaces the fixed strike plate. Fail-secure (most common) = locked when power is off; fail-safe = unlocked when power is off. A magnetic lock (maglok) uses an electromagnetic to hold a steel armature plate on the door frame — it holds 300–1,200 lbs when energised. Mag locks are always fail-safe (release on power loss) because of fire code requirements — doors must be releasable in an emergency. Mag locks require a REX device to allow free egress.",
    order: 198,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-e-bas",
    topicLabel: "MWA E — Integrated Systems",
    question: "What is an IP (Internet Protocol) camera system and how does it differ from a traditional analogue CCTV system?",
    options: [
      "IP cameras use coaxial cable; analogue cameras use Cat 6 cable",
      "IP cameras transmit digitally compressed video over a data network — allowing higher resolution, remote access, and integration with BAS; analogue cameras transmit uncompressed composite video over coaxial cable to a DVR",
      "IP cameras are wireless only; analogue cameras are wired only",
      "IP cameras require a separate proprietary network; analogue cameras use the building's standard IT network"
    ],
    correctIndex: 1,
    explanation: "IP cameras encode video as digital data packets transmitted over standard Ethernet infrastructure — enabling megapixel resolution, remote access from any network-connected device, and integration with access control and BMS systems. Analogue cameras transmit composite video over coaxial cable to a Digital Video Recorder (DVR). IP systems use NVRs (Network Video Recorders) or VMS software. IP cameras can be powered via PoE, eliminating separate power wiring runs.",
    order: 199,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "mwa-e-bas",
    topicLabel: "MWA E — Integrated Systems",
    question: "During commissioning of a new fire alarm system, what tests must be conducted per CAN/ULC S537?",
    options: [
      "A visual inspection of device locations only — no functional tests required",
      "100% functional testing of all initiating devices, notification appliances, wiring circuits, and control panel functions — including verification of alarm, trouble, and supervisory signals, battery backup duration, and monitoring station communication",
      "A random sample test of 10% of devices to verify installation quality",
      "Only smoke detector sensitivity testing — other devices are self-testing"
    ],
    correctIndex: 1,
    explanation: "CAN/ULC S537 (Verification of Fire Alarm Systems) requires a complete functional verification of every installed device and function. This includes: operating every smoke detector, heat detector, manual pull station, and flow switch; activating every horn/strobe; verifying zone mapping and display accuracy on the FACP; testing battery backup capacity (24-hour standby + 5-minute alarm); and verifying transmission to the central monitoring station. A commissioning certificate is issued upon successful completion.",
    order: 200,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "A",
    topicLabel: "MWA A — Safety",
    question: "What is the minimum arc flash PPE category required when performing live work on a 120V panelboard with an incident energy of 4.5 cal/cm²?",
    options: [
      "PPE Category 0 (1.2 cal/cm²)",
      "PPE Category 1 (4 cal/cm²)",
      "PPE Category 2 (8 cal/cm²)",
      "PPE Category 3 (25 cal/cm²)"
    ],
    correctIndex: 2,
    explanation: "PPE Category 1 is rated to 4 cal/cm², which is insufficient for 4.5 cal/cm². PPE Category 2 (rated to 8 cal/cm²) is the minimum that covers the calculated incident energy. Arc flash PPE must always meet or exceed the incident energy at the work location.",
    order: 1,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "A",
    topicLabel: "MWA A — Safety",
    question: "What is the correct sequence for applying a Lock-Out/Tag-Out (LOTO) procedure?",
    options: [
      "Lock → Test → Notify → Isolate → Tag",
      "Notify → Identify energy sources → Isolate → Lock & Tag → Test for absence of voltage → Verify",
      "Isolate → Notify → Test → Lock → Tag",
      "Test → Isolate → Lock → Notify → Verify"
    ],
    correctIndex: 1,
    explanation: "The correct LOTO sequence is: (1) Notify affected workers, (2) Identify all energy isolation points, (3) Isolate the equipment, (4) Apply personal lock and danger tag, (5) Test for absence of voltage, (6) Verify zero-energy state. Testing before locking creates a hazard; notifying before isolating ensures worker safety.",
    order: 3,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "A",
    topicLabel: "MWA A — Safety",
    question: "When must a Temporary Protective Ground (TPG) be applied on de-energized high-voltage conductors?",
    options: [
      "Only when the conductor is buried underground",
      "Whenever a worker will contact or work in close proximity to a de-energized HV conductor",
      "Only when the conductor is longer than 100 metres",
      "Only on conductors above 15,000V"
    ],
    correctIndex: 1,
    explanation: "TPGs must be applied whenever a worker will contact or be in close proximity to de-energized HV conductors. TPGs drain induced and stored charge and, if the line is accidentally re-energized, create a bolted fault that trips upstream protection — protecting the worker. The CEC and OH&S regulations require TPGs regardless of line length or voltage (above low voltage).",
    order: 6,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "A",
    topicLabel: "MWA A — Safety",
    question: "Which WHMIS pictogram indicates a substance that is acutely toxic if inhaled, ingested, or absorbed through the skin?",
    options: [
      "Exploding bomb",
      "Skull and crossbones",
      "Exclamation mark",
      "Flame over circle"
    ],
    correctIndex: 1,
    explanation: "The skull and crossbones pictogram (GHS06) indicates acute toxicity — the substance is lethal or causes severe damage at low exposure levels. The exclamation mark indicates less severe health effects. The flame over circle indicates an oxidizer. The exploding bomb indicates explosive materials.",
    order: 7,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "A",
    topicLabel: "MWA A — Safety",
    question: "A fall protection plan is required when working at what minimum height above the lower level on a construction site in most Canadian jurisdictions?",
    options: [
      "1.5 metres (5 feet)",
      "2.4 metres (8 feet)",
      "3.0 metres (10 feet)",
      "4.6 metres (15 feet)"
    ],
    correctIndex: 0,
    explanation: "Most Canadian provincial OH&S regulations require fall protection at heights of 3 metres (10 feet) or more for general construction, but many jurisdictions — including Ontario — require fall protection at 3 m for construction. However, specific work on open floors, platforms, or scaffolding often triggers fall protection requirements at 1.5 m. Always check jurisdiction-specific regulations.",
    order: 8,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "A",
    topicLabel: "MWA A — Safety",
    question: "What is the purpose of a 'danger tag' applied during a LOTO procedure?",
    options: [
      "It substitutes for a personal lock when a lock is unavailable",
      "It warns others that the equipment must not be operated — it does not prevent operation",
      "It certifies the equipment has been electrically tested",
      "It is required only by the prime contractor, not individual workers"
    ],
    correctIndex: 1,
    explanation: "A danger tag is a WARNING device only — it communicates a hazard but provides no physical barrier to operation. A personal lock provides the actual physical lockout. Tags should never substitute for locks when locks are practicable. If a lock cannot be applied, the tag must be accompanied by at least one additional means of securing the energy-isolating device.",
    order: 9,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "A",
    topicLabel: "MWA A — Safety",
    question: "Under the CEC, what is the minimum clearance required between a service conductor and a window opening on a building?",
    options: [
      "0.3 m (1 ft)",
      "0.6 m (2 ft)",
      "0.9 m (3 ft)",
      "1.0 m (39 in)"
    ],
    correctIndex: 2,
    explanation: "CEC Rule 6-112 requires a minimum horizontal clearance of 0.9 m (3 ft) between service conductors and windows that can be opened. This prevents conductors from being contacted through open windows and reduces the risk of accidental contact with energized conductors.",
    order: 10,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "A",
    topicLabel: "MWA A — Tools and Equipment",
    question: "What does the 'CAT' rating on a clamp meter indicate?",
    options: [
      "The maximum DC current it can measure",
      "The overvoltage category for which it is designed — higher CAT = better transient spike protection",
      "The conductor diameter it can clamp around",
      "The battery capacity of the instrument"
    ],
    correctIndex: 1,
    explanation: "The CAT (Category) rating indicates the overvoltage environment the instrument can safely withstand. CAT I–IV represent increasingly severe transient environments. A higher CAT number means the meter can withstand higher transient spikes, which are more likely in environments closer to the utility source. Using an under-rated meter in a high-CAT environment risks explosion.",
    order: 11,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "A",
    topicLabel: "MWA A — Tools and Equipment",
    question: "A powder-actuated tool (PAT) is being used to fasten conduit straps to a concrete wall. Which requirement applies to PAT operators?",
    options: [
      "Any worker can operate a PAT after a brief demonstration",
      "The operator must hold a valid operator's card issued after completing a manufacturer-approved training course",
      "A PAT can only be operated by a licensed electrician",
      "PAT use requires a hot work permit on all job sites"
    ],
    correctIndex: 1,
    explanation: "Powder-actuated tools are regulated in all Canadian jurisdictions. Operators must complete a manufacturer-approved training course and carry a valid operator's card on site. PATs fire a fastener using an explosive charge and can cause serious injury or penetrate the substrate if used incorrectly. The card must be produced on request.",
    order: 12,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "A",
    topicLabel: "MWA A — Tools and Equipment",
    question: "What is the 4:1 safety rule when positioning an extension ladder?",
    options: [
      "For every 4 feet of height, the ladder must be 1 foot away from the wall at the base",
      "The ladder must extend 4 feet above the landing point for every 1 foot of horizontal reach",
      "No more than 4 workers per ladder; 1 at a time on the rungs",
      "The ladder angle must result in a 4 m height for every 1 m of base setback"
    ],
    correctIndex: 0,
    explanation: "The 4:1 ratio means the base of the ladder should be placed 1 foot away from the wall for every 4 feet of vertical height. For example, a ladder reaching 20 feet high should have its base 5 feet from the wall. This creates an approximate 75° angle, which is the optimal angle for ladder stability.",
    order: 13,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "A",
    topicLabel: "MWA A — Tools and Equipment",
    question: "Before lifting a load with a chain fall, what marking must be checked on the rigging equipment?",
    options: [
      "The manufacturer's logo and country of origin",
      "The Working Load Limit (WLL) and the date of last inspection",
      "The serial number and the colour code of the rigging year",
      "The material grade of the chain only"
    ],
    correctIndex: 1,
    explanation: "The Working Load Limit (WLL) must be clearly marked on all rigging equipment and must never be exceeded. The date of last inspection confirms the equipment is within its inspection cycle. Using rigging without knowing the WLL risks catastrophic failure. Equipment with worn, bent, or damaged links must be removed from service immediately.",
    order: 14,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "A",
    topicLabel: "MWA A — Work Organization",
    question: "On a set of electrical drawings, what does a dashed line between two devices typically represent?",
    options: [
      "A 120V circuit",
      "A control wiring connection or signal circuit",
      "A conduit run that is underground",
      "A future installation not yet approved"
    ],
    correctIndex: 1,
    explanation: "Dashed lines on electrical drawings conventionally represent control wiring, signal circuits, or hidden (below surface) elements. Solid lines typically represent power conductors or conduit. Always consult the drawing legend as conventions can vary between engineers and jurisdictions.",
    order: 15,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "A",
    topicLabel: "MWA A — Work Organization",
    question: "An electrical permit has been issued for a new commercial installation. When must the AHJ be notified for inspection?",
    options: [
      "Only at the end of the project during final commissioning",
      "At the intervals specified on the permit, typically before concealing wiring and at final completion",
      "Only if a deficiency is discovered during the work",
      "Once per year regardless of project stage"
    ],
    correctIndex: 1,
    explanation: "Most electrical permits specify mandatory inspection stages — commonly a rough-in inspection (before walls are closed) and a final inspection. The AHJ must inspect the work at each required stage before it is concealed or energized. Bypassing inspections can result in orders to open walls, remove work, or disconnect the installation.",
    order: 17,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "A",
    topicLabel: "MWA A — Support Components",
    question: "What is the maximum support spacing for electrical metallic tubing (EMT) run horizontally in a commercial building, per the CEC?",
    options: [
      "1.0 m (3 ft)",
      "1.5 m (5 ft)",
      "3.0 m (10 ft)",
      "No spacing limit if secured at each end"
    ],
    correctIndex: 2,
    explanation: "CEC Rule 12-1000 requires EMT to be supported at intervals not exceeding 3.0 m (approximately 10 ft) and within 0.9 m (3 ft) of each box, fitting, or termination. Insufficient support allows conduit to sag, creates stress on fittings, and can damage conductor insulation.",
    order: 18,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "A",
    topicLabel: "MWA A — Support Components",
    question: "Which conduit body type is designed to allow a 90° change of direction and permits conductor splices?",
    options: [
      "LB conduit body",
      "C conduit body",
      "T conduit body",
      "LL conduit body"
    ],
    correctIndex: 0,
    explanation: "An LB (back access) conduit body allows a 90° bend with the access cover on the back, making it suitable for wall entries. C conduit bodies are used for straight-through pulls. T conduit bodies allow a tee junction. LL and LR allow 90° turns from the left or right. Only conduit bodies with adequate volume may contain splices per CEC rules.",
    order: 19,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "A",
    topicLabel: "MWA A — Support Components",
    question: "When installing cable tray, what is the maximum allowable load on a cable tray system?",
    options: [
      "500 kg uniformly distributed",
      "The manufacturer's rated load capacity marked on the tray",
      "Always 200 kg regardless of tray size",
      "Determined only by the cable weight, not the tray rating"
    ],
    correctIndex: 1,
    explanation: "Cable tray load capacity is determined by the manufacturer and must be marked on the tray. The CEC requires that cable tray not be loaded beyond its rated capacity. Tray ratings vary by width, depth, material (steel, aluminum, fibreglass), and span between supports. Always consult the manufacturer's load tables and the engineer's specifications.",
    order: 20,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "A",
    topicLabel: "MWA A — Commissioning",
    question: "Before energizing a new 600V distribution panel, what minimum tests should be performed?",
    options: [
      "Visual inspection only — if wiring looks correct, energize",
      "Insulation resistance (megger) test and continuity verification of grounding conductors",
      "Only a voltage check at the utility meter",
      "Load current test by temporarily energizing at 50% voltage"
    ],
    correctIndex: 1,
    explanation: "Pre-energization commissioning must include: (1) insulation resistance (megger/IR) testing of all conductors to verify no breakdown between phase conductors or to ground, and (2) continuity testing of equipment grounding conductors to confirm the fault return path is intact. Visual inspection alone is insufficient. Low IR readings indicate damaged insulation that must be investigated before energization.",
    order: 21,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "A",
    topicLabel: "MWA A — Commissioning",
    question: "An insulation resistance (megger) test on a new 600V feeder reads 50 MΩ. Is this acceptable?",
    options: [
      "No — any reading below 100 MΩ requires the cable to be replaced",
      "Yes — a minimum of 1 MΩ per 1000V of operating voltage is the general industry guideline, making 50 MΩ excellent",
      "No — megger tests are not valid on cables rated below 1000V",
      "Yes, but only if the ambient temperature is above 20°C"
    ],
    correctIndex: 1,
    explanation: "The general industry guideline (NETA, IEEE 43) for new insulation is a minimum of 1 MΩ per 1000V of rated voltage. For a 600V feeder, the minimum acceptable IR value is approximately 1 MΩ. A reading of 50 MΩ indicates excellent insulation integrity. Readings near or below the minimum threshold require investigation of damaged insulation, moisture, or improper installation.",
    order: 22,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "A",
    topicLabel: "MWA A — Commissioning",
    question: "During commissioning of a new motor starter, the motor runs in the wrong direction. What is the simplest correction for a three-phase motor?",
    options: [
      "Swap any two of the three phase conductors at the motor terminals",
      "Reverse the polarity of the control circuit",
      "Change the overload relay setting",
      "Swap the A and C phase conductors at the utility meter only"
    ],
    correctIndex: 0,
    explanation: "For a three-phase motor, swapping any two of the three supply conductors at the motor terminals reverses the phase sequence and changes rotation direction. This is the simplest and correct approach. Swapping at the utility meter would reverse all motors and loads downstream — never the correct solution. Control circuit changes do not affect motor rotation.",
    order: 23,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "A",
    topicLabel: "MWA A — Commissioning",
    question: "What document must be completed and posted on the door of a distribution panel before it is placed in service?",
    options: [
      "A copy of the electrical permit",
      "An arc flash hazard label and a completed circuit directory",
      "The insulation resistance test report",
      "A load calculation summary from the engineer"
    ],
    correctIndex: 1,
    explanation: "Before energizing and placing a panel in service, both an arc flash warning label (identifying incident energy level, boundary distances, and required PPE) and a completed circuit directory (identifying every circuit by its load) must be posted on the panel door. These are CEC requirements and are verified during the AHJ inspection.",
    order: 24,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Services and Metering",
    question: "In an Edison three-wire, 120/240V single-phase service, what is the voltage relationship between the two ungrounded conductors?",
    options: [
      "They are both 120V to ground and 120V to each other",
      "They are 120V to the grounded neutral and 240V to each other — 180° out of phase",
      "They are 240V to ground and 480V to each other",
      "They are in phase with each other and 240V to the neutral"
    ],
    correctIndex: 1,
    explanation: "In the Edison three-wire system, the two ungrounded (hot) conductors are each 120V to the grounded neutral, and 240V to each other. The two phases are derived from opposite ends of a centre-tapped transformer secondary — they are 180° out of phase. 120V single-phase loads connect between one hot and neutral; 240V loads connect between both hots.",
    order: 25,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Services and Metering",
    question: "In a 120/208V, three-phase, four-wire wye system, what is the voltage between any two phase conductors?",
    options: [
      "120V",
      "173V",
      "208V",
      "240V"
    ],
    correctIndex: 2,
    explanation: "In a wye system, line-to-line voltage = line-to-neutral voltage × √3 = 120V × 1.732 = 208V. This is the standard low-voltage distribution system used in commercial and light industrial buildings across Canada. Single-phase 120V loads connect between any phase and neutral; three-phase loads connect between all three phases.",
    order: 26,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Services and Metering",
    question: "In a 347/600V, three-phase, four-wire wye system, what is the voltage available for single-phase 347V lighting circuits?",
    options: [
      "208V (phase to phase)",
      "347V (phase to neutral)",
      "600V (phase to phase)",
      "480V (phase to neutral)"
    ],
    correctIndex: 1,
    explanation: "In a 347/600V wye system, the line-to-neutral voltage is 347V (used for single-phase 347V fluorescent/LED lighting and small single-phase loads). The line-to-line voltage is 600V (347 × √3 = 601V ≈ 600V), used for three-phase motors and large equipment. This is the most common industrial distribution voltage in Canada.",
    order: 27,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Services and Metering",
    question: "In a 120/240V, three-phase, four-wire high-leg delta service, which phase has approximately 208V to neutral and must be identified with orange marking?",
    options: [
      "Phase A",
      "Phase B (the high leg)",
      "Phase C",
      "The neutral conductor"
    ],
    correctIndex: 1,
    explanation: "In a high-leg delta system, Phase B (the wild leg or high leg) measures approximately 208V to neutral — (240/2) × √3 = 207.8V. This voltage is unsuitable for standard 120V single-phase loads. The CEC and NEC require the high leg to be identified with orange insulation or marking at all points where it can be confused with a 120V conductor.",
    order: 28,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Services and Metering",
    question: "What is the minimum overhead clearance required for a service conductor passing over a residential driveway (accessible to vehicles)?",
    options: [
      "3.0 m (10 ft)",
      "4.0 m (13 ft)",
      "4.9 m (16 ft)",
      "5.5 m (18 ft)"
    ],
    correctIndex: 2,
    explanation: "CEC Rule 6-104 requires a minimum clearance of 4.9 m (16 ft) for service conductors passing over areas accessible to vehicle traffic. This clearance prevents contact between service conductors and tall vehicles such as trucks, RVs, and farm equipment. Pedestrian-only areas require a lower minimum clearance.",
    order: 29,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Services and Metering",
    question: "Why must the secondary of a current transformer (CT) never be open-circuited while primary current is flowing?",
    options: [
      "The meter will provide an inaccurate reading",
      "An open CT secondary develops dangerously high voltages that can damage insulation and harm personnel",
      "The primary fuse will blow immediately",
      "The CT will overheat and require replacement"
    ],
    correctIndex: 1,
    explanation: "A CT secondary must always have a burden (meter or short circuit) connected. The CT attempts to maintain the ampere-turn balance — with an open secondary, all the magnetomotive force drives the core into saturation, and the resulting high-frequency flux induces dangerously high voltage spikes across the open terminals (potentially thousands of volts). Always short the CT secondary before opening the metering circuit.",
    order: 31,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Services and Metering",
    question: "A three-phase, 600V service has a utility available fault current of 25,000A symmetrical. What minimum interrupting rating must the main service breaker have?",
    options: [
      "10,000A IC",
      "18,000A IC",
      "22,000A IC",
      "At least 25,000A IC"
    ],
    correctIndex: 3,
    explanation: "The interrupting capacity (IC) of the main disconnect must equal or exceed the maximum available fault current at that point. If available fault current is 25,000A, the breaker must be rated for at least 25,000A IC. Using an under-rated breaker risks explosive failure during a fault. A short-circuit study or utility data is required to determine available fault current.",
    order: 32,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Services and Metering",
    question: "How many service disconnecting means are permitted for a building under the CEC?",
    options: [
      "Always exactly one",
      "A maximum of six disconnects grouped at one location",
      "Unlimited, distributed throughout the building",
      "Two — one for each half of the service"
    ],
    correctIndex: 1,
    explanation: "The CEC (Rule 6-200) permits a maximum of six service disconnects grouped in one location. Each disconnect serves a separate load or group of loads. The grouping requirement ensures firefighters and emergency personnel can disconnect all building power from a single location. If more than six circuits are required, a main disconnect ahead of the group is needed.",
    order: 33,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Services and Metering",
    question: "What is an antioxidant compound used for when terminating aluminum service conductors?",
    options: [
      "To lubricate the conductor during pulling through conduit",
      "To prevent aluminum oxide formation at connection points, maintaining a low-resistance electrical connection",
      "To insulate the conductor at the terminal lug",
      "To identify aluminum conductors from copper at the service equipment"
    ],
    correctIndex: 1,
    explanation: "Aluminum oxidizes rapidly when exposed to air, forming aluminum oxide — an electrical insulator. Antioxidant compound (such as Noalox® or equivalent) prevents new oxide formation and helps displace existing oxide at the contact surface, ensuring a stable, low-resistance connection. Without it, oxidation increases resistance, which causes heating and eventual failure.",
    order: 34,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Grounding and Bonding",
    question: "What is the difference between system grounding and equipment bonding?",
    options: [
      "System grounding connects the neutral to earth; bonding connects non-current-carrying metal parts together and to the grounded conductor",
      "They are the same — both connect neutral to earth",
      "Bonding connects the neutral to earth; grounding connects metal enclosures to each other",
      "System grounding is for HV systems only; bonding is for LV systems only"
    ],
    correctIndex: 0,
    explanation: "System grounding establishes a reference voltage by connecting the neutral conductor to earth at the service entrance — this defines all voltages in the system relative to earth. Equipment bonding connects all non-current-carrying metal enclosures, conduits, and equipment together and back to the grounded conductor, creating a low-impedance fault return path. Both serve different but complementary purposes.",
    order: 35,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Grounding and Bonding",
    question: "A concrete-encased grounding electrode (Ufer ground) requires a minimum of how many metres of rebar or copper conductor embedded in the building footing?",
    options: [
      "2.4 m",
      "4.5 m",
      "6.0 m",
      "7.5 m"
    ],
    correctIndex: 2,
    explanation: "The CEC (Rule 10-700) requires a concrete-encased electrode to consist of at least 6.0 m of rebar (minimum 13 mm diameter) or bare copper conductor embedded in the concrete footing or foundation. The concrete's moisture content and contact with the earth make this one of the most effective grounding electrodes available.",
    order: 36,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Grounding and Bonding",
    question: "A ground rod electrode must be driven to what minimum depth, or what alternative installation is acceptable when rock prevents full depth?",
    options: [
      "2.4 m deep; if rock prevents this, the rod may be driven at an angle up to 45°",
      "3.0 m deep with no exceptions permitted",
      "1.8 m deep; if rock is encountered, a second rod must be added",
      "2.4 m deep; if rock prevents this, a buried plate electrode may substitute"
    ],
    correctIndex: 0,
    explanation: "CEC Rule 10-700(2) requires ground rods to be driven to a minimum depth of 2.4 m. If rock prevents achieving this depth, the rod may be driven at an angle not exceeding 45° from vertical. If the angled installation also cannot achieve 2.4 m, an alternative electrode type (plate, buried conductor, or concrete-encased) must be used.",
    order: 37,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Grounding and Bonding",
    question: "What is the purpose of Ground Fault Protection (GFP) on services rated 150V to ground or more and 1000A or more?",
    options: [
      "To protect personnel from shock on the service conductors",
      "To detect low-level ground faults and open the service disconnect before a sustained arcing fault causes a fire",
      "To measure ground leakage current for billing purposes",
      "To trip on any current above the rated service ampacity"
    ],
    correctIndex: 1,
    explanation: "GFP is designed to detect low-level arcing ground faults (as low as 1200A on some systems) that would not trip the main overcurrent protective device but can sustain an arcing fault capable of causing catastrophic fires. CEC Rule 14-102 requires GFP on solidly grounded services rated 150V to ground or greater and 1000A or more.",
    order: 38,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Grounding and Bonding",
    question: "Which grounding electrode has the highest preference in the CEC electrode hierarchy when a metallic water pipe system is available?",
    options: [
      "Ground rod — it provides the most reliable resistance to earth",
      "Metallic underground water pipe — provided it has at least 3 m of buried length in contact with earth",
      "Structural steel — provided it is connected to a concrete foundation",
      "Plate electrode — provided it has 0.186 m² of exposed surface area"
    ],
    correctIndex: 1,
    explanation: "The CEC prescribes an order of preference for grounding electrodes. A metallic underground water pipe with at least 3 m of buried length in contact with earth is among the highest-preference electrodes because of its extensive earth contact. However, it must be supplemented with an additional electrode because plastic sections may be inserted during maintenance, breaking continuity.",
    order: 39,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Grounding and Bonding",
    question: "What is step voltage, and why is it hazardous?",
    options: [
      "The voltage across each step of a voltage divider circuit",
      "The voltage difference between two points on the earth's surface during a fault, which can drive current through a person standing with feet apart",
      "The voltage required to step up a transformer secondary from LV to HV",
      "The incremental voltage increase per floor in a high-rise building's distribution system"
    ],
    correctIndex: 1,
    explanation: "Step voltage is the potential difference between two points on the earth's surface separated by the distance of a person's stride. During a ground fault, large currents flow through the earth and create a voltage gradient. A person standing with feet 1 m apart can have dangerous current pass through their lower body (foot to foot), causing muscle paralysis or death. Step voltage is the primary hazard when approaching a downed power line.",
    order: 40,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Grounding and Bonding",
    question: "In a separately derived system (e.g., a transformer secondary), where must the system grounding connection be made?",
    options: [
      "At the main service entrance only — the transformer does not need its own grounding connection",
      "At the transformer secondary, at the first means of overcurrent protection or disconnecting means on the secondary",
      "At any convenient point on the secondary conductors",
      "At the transformer primary only, since primary grounding protects the secondary"
    ],
    correctIndex: 1,
    explanation: "A separately derived system has no direct metallic connection to the supply system conductors other than through the earth or equipment grounding conductors. The CEC requires the grounding electrode conductor to be connected to the secondary of the transformer (or first overcurrent protection point) and a new system bond established there. This creates a proper reference voltage and fault return path for the secondary system.",
    order: 42,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Grounding and Bonding",
    question: "Lightning protection systems must be bonded to the electrical system's grounding electrode system. Why?",
    options: [
      "To allow lightning current to be used as a power source during outages",
      "To equalize potential during a lightning strike and prevent side flashing between the lightning system and nearby metal",
      "To provide a path to ground for static electricity only",
      "To meet utility revenue metering requirements"
    ],
    correctIndex: 1,
    explanation: "Bonding the lightning protection system to the electrical grounding system ensures that during a lightning strike, both systems rise to the same potential simultaneously. Without bonding, the massive lightning current creates a large potential difference between the lightning down conductor and nearby grounded metal (pipes, conduit, equipment), causing a dangerous arc (side flash) that can start fires and injure personnel.",
    order: 43,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Grounding and Bonding",
    question: "Impressed Current Cathodic Protection (ICCP) is used on buried metallic structures. What does this system do?",
    options: [
      "Applies an AC voltage to neutralize corrosion currents on buried pipes",
      "Applies a DC current that makes the protected structure cathodic, suppressing galvanic corrosion",
      "Applies a pulsed DC current to detect corrosion depth in buried pipelines",
      "Electrically isolates the buried structure from stray AC currents"
    ],
    correctIndex: 1,
    explanation: "ICCP systems use a DC power source (rectifier) to supply current from an anode (sacrificial or inert) through the soil to the protected structure (cathode). By making the structure cathodic, the oxidation (corrosion) reaction is suppressed. This is used to protect pipelines, storage tanks, ship hulls, and reinforced concrete structures from galvanic corrosion.",
    order: 44,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Protection and Distribution",
    question: "A current-limiting fuse interrupts a fault in less than one half-cycle. What is the primary benefit of this characteristic?",
    options: [
      "It allows larger fault currents to be cleared safely",
      "It limits the peak let-through current, reducing thermal and mechanical stress on downstream equipment",
      "It provides time-delay operation to coordinate with downstream devices",
      "It is resettable without replacement after clearing a fault"
    ],
    correctIndex: 1,
    explanation: "Current-limiting fuses operate in less than ½ cycle (< 8.3 ms at 60 Hz), interrupting the fault before the current reaches its prospective peak. This dramatically reduces the let-through energy (I²t) — the integrated heat and force — that downstream equipment must withstand. This protects switchgear, cables, and other equipment with lower withstand ratings than the available fault current.",
    order: 45,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Protection and Distribution",
    question: "What is the difference between an OCPD's interrupting rating and its continuous current rating?",
    options: [
      "They are the same — both refer to the maximum current the device can handle",
      "The continuous rating is the normal load current it can carry; the interrupting rating is the maximum fault current it can safely clear",
      "The interrupting rating is the load current; the continuous rating is the fault capacity",
      "The continuous rating applies to fuses only; the interrupting rating applies to breakers only"
    ],
    correctIndex: 1,
    explanation: "The continuous current rating (e.g., 100A breaker) is the maximum load current the device can carry indefinitely without tripping. The interrupting rating (e.g., 10,000A IC or kAIC) is the maximum fault current the device can safely interrupt without explosion or fire. Both ratings must be adequate for the installation — an OCPD must never be exposed to fault currents exceeding its interrupting rating.",
    order: 46,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Protection and Distribution",
    question: "A GFCI device trips at a ground fault current of approximately how many milliamps?",
    options: [
      "1 mA",
      "5 mA",
      "30 mA",
      "100 mA"
    ],
    correctIndex: 1,
    explanation: "GFCI devices are designed to trip at approximately 4–6 mA (typically 5 mA) of ground fault current — fast enough to prevent ventricular fibrillation in a healthy adult. Current as low as 10 mA can cause muscular paralysis ('let-go threshold'); 100 mA can be fatal. The GFCI compares current in the hot and neutral conductors and trips within 1/40th of a second when they differ by ~5 mA.",
    order: 47,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Protection and Distribution",
    question: "What is a Surge Protection Device (SPD) and what type of hazard does it protect against?",
    options: [
      "A device that limits continuous overcurrent — it replaces the main breaker",
      "A device that clamps transient overvoltages (voltage spikes from lightning, switching) to a safe level, protecting equipment insulation",
      "A device that detects and clears sustained ground faults on 600V systems",
      "A current-limiting device installed ahead of sensitive electronic loads"
    ],
    correctIndex: 1,
    explanation: "SPDs (formerly called Transient Voltage Surge Suppressors or TVSS) protect equipment from brief, high-amplitude voltage transients caused by lightning strikes, utility switching, or load switching. They clamp the voltage to a safe level (typically using MOVs or TVS diodes) and divert transient energy to ground before it can damage equipment insulation or electronic components.",
    order: 49,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Protection and Distribution",
    question: "An online (double-conversion) UPS has what key advantage over an offline (standby) UPS?",
    options: [
      "Lower cost and simpler maintenance",
      "Zero transfer time on power failure — the load always runs from the inverter, providing complete isolation from utility power quality problems",
      "Better efficiency at full load due to bypass mode",
      "Larger battery capacity for longer backup runtime"
    ],
    correctIndex: 1,
    explanation: "An online UPS continuously converts AC → DC → AC — the load always runs from the inverter with no transfer time on a power failure. It also provides complete isolation from utility power quality problems (harmonics, sags, surges, frequency variations). An offline UPS passes utility power through and switches to battery on failure, with a brief transfer delay (typically 10–20 ms).",
    order: 52,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Protection and Distribution",
    question: "What is the purpose of a power factor correction capacitor bank installed at a main electrical distribution board?",
    options: [
      "To reduce harmonics generated by non-linear loads",
      "To supply reactive power locally, reducing reactive current flow through the utility's distribution system and improving power factor",
      "To increase the available fault current for faster breaker operation",
      "To store energy for use during utility outages"
    ],
    correctIndex: 1,
    explanation: "Capacitor banks supply reactive power (VARs) locally to inductive loads (motors, transformers), reducing the reactive component of current that must be supplied by the utility. This improves power factor (ratio of real power to apparent power), which reduces utility demand charges, decreases I²R losses in cables, and can increase system capacity. They do not eliminate harmonics — a separate harmonic filter is required for that.",
    order: 53,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Transformers",
    question: "What is K-factor in transformer specifications, and why does it matter when supplying non-linear loads?",
    options: [
      "A coefficient relating transformer kVA to its physical weight",
      "A rating indicating a transformer's ability to handle harmonic currents without excessive heating — higher K-factor handles more distorted loads",
      "The ratio of no-load losses to full-load losses",
      "A factor used to derate transformer capacity at elevated ambient temperatures"
    ],
    correctIndex: 1,
    explanation: "K-factor is a measure of the additional heating a transformer experiences due to harmonic currents from non-linear loads (VFDs, computers, LED drivers, UPS systems). A standard transformer (K-1) is designed for linear loads. Non-linear loads generate harmonics that cause eddy current and stray losses far exceeding normal. K-4, K-13, K-20 transformers have reinforced construction to handle these additional losses. Undersizing K-factor causes premature failure.",
    order: 56,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Transformers",
    question: "What is the voltage regulation of a transformer, and what does a low regulation value indicate?",
    options: [
      "The ratio of primary to secondary voltage — a low value means more step-down",
      "VR% = (VNL − VFL) / VFL × 100% — a low value indicates the secondary voltage stays nearly constant between no-load and full-load",
      "The transformer's efficiency at rated load — a low value indicates high losses",
      "The percentage of rated kVA that can be drawn continuously without overheating"
    ],
    correctIndex: 1,
    explanation: "Voltage regulation (VR%) = (V_no-load − V_full-load) / V_full-load × 100%. A low regulation (e.g., 2–4%) means the secondary voltage is relatively stable between no-load and full-load — indicating low internal impedance (resistance and leakage reactance). High regulation (> 10%) means significant voltage drop under load, which can affect equipment performance. Low impedance also means higher fault current contribution.",
    order: 57,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Transformers",
    question: "A single-phase transformer has a primary winding of 500 turns connected to 240V. The secondary has 50 turns. What are the secondary voltage and the turns ratio?",
    options: [
      "24V, 10:1",
      "2400V, 1:10",
      "24V, 1:10",
      "240V, 1:1"
    ],
    correctIndex: 0,
    explanation: "Turns ratio a = N₁/N₂ = 500/50 = 10:1 (step-down). V₂ = V₁ / a = 240 / 10 = 24V. This is a step-down transformer — secondary voltage is lower than primary, secondary current is proportionally higher. Applications include control power transformers (CPTs) and low-voltage lighting.",
    order: 58,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Transformers",
    question: "Why must the primary of a transformer always be protected by an OCPD, and what sizing rule applies to transformer primary protection?",
    options: [
      "To protect the transformer core from overheating; the OCPD must be rated exactly at the transformer's kVA",
      "To protect the primary conductors and transformer from overcurrent; the OCPD must not exceed 125% of the rated primary current for transformers ≥ 9% impedance",
      "To enable the transformer to be safely isolated; the OCPD must match the utility rating",
      "To coordinate with the secondary breaker; the primary OCPD must be sized the same as the secondary OCPD"
    ],
    correctIndex: 1,
    explanation: "CEC Rule 26-252 requires transformer primary protection. For transformers with ≥ 9% impedance (most distribution transformers), the primary OCPD must not exceed 125% of rated primary current. For transformers with < 9% impedance, the limit is 167%. This protects the primary conductors and limits the fault current the transformer can contribute. Secondary protection is also required and must be sized per CEC rules based on transformer impedance.",
    order: 59,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Renewable Energy",
    question: "What is anti-islanding protection in a grid-tied solar PV system and why is it mandatory?",
    options: [
      "A device that prevents the solar system from overcharging battery banks",
      "A feature that shuts down the grid-tied inverter when utility power is lost, preventing back-energization of de-energized distribution lines",
      "A surge protection system that prevents lightning from entering the solar array",
      "A thermal protection system that limits inverter output during high temperature"
    ],
    correctIndex: 1,
    explanation: "Anti-islanding protection is mandatory on all grid-tied inverters. When the utility grid de-energizes (outage, fault, or maintenance), the inverter must detect the loss of grid power and disconnect within a prescribed time. Without anti-islanding, the solar system could continue to energize distribution lines — creating a lethal hazard for utility workers and emergency responders working on supposedly de-energized equipment.",
    order: 60,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Renewable Energy",
    question: "In a grid-tied solar PV system, what does a string inverter do compared to a micro-inverter?",
    options: [
      "A string inverter converts DC from multiple panels in series to AC at one central location; a micro-inverter converts DC to AC at each individual panel",
      "A string inverter is used for large utility-scale systems only; a micro-inverter is used for residential only",
      "A string inverter generates AC; a micro-inverter generates DC",
      "They are identical in function — the terms are interchangeable"
    ],
    correctIndex: 0,
    explanation: "A string inverter receives the combined DC output of multiple panels connected in series (a string) and converts it to grid-quality AC at one central location. If one panel in the string is shaded, output of the entire string is reduced. Micro-inverters are installed at each individual panel and convert DC to AC at the panel — maximizing each panel's output independently. Micro-inverters perform better with shading but have higher upfront cost.",
    order: 61,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Renewable Energy",
    question: "What is the maximum DC voltage typically used in residential rooftop solar PV systems in Canada per the CEC?",
    options: [
      "120V DC",
      "600V DC",
      "1000V DC",
      "1500V DC"
    ],
    correctIndex: 1,
    explanation: "The CEC limits residential rooftop solar PV systems to a maximum DC system voltage of 600V for safety reasons. Larger commercial and utility-scale systems may use 1000V DC or 1500V DC. The 600V limit is tied to the ratings of readily available residential-grade inverters, combiners, wiring methods, and disconnects.",
    order: 62,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Renewable Energy",
    question: "In an off-grid solar system with battery storage, what is the function of the charge controller?",
    options: [
      "It converts DC battery power to AC for household loads",
      "It regulates the charging current from the solar array to prevent overcharging and over-discharging of the battery bank",
      "It connects the off-grid system to the utility grid for emergency backup",
      "It measures and displays energy production and consumption"
    ],
    correctIndex: 1,
    explanation: "The charge controller sits between the solar array and the battery bank. It regulates charging voltage and current to ensure batteries are charged efficiently without overcharging (which causes gassing and damage) and prevents over-discharge (which reduces battery lifespan). Modern MPPT (Maximum Power Point Tracking) charge controllers also maximize power harvest from the solar array.",
    order: 63,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Renewable Energy",
    question: "A wind turbine generator produces variable-frequency AC. How is this connected to the utility grid?",
    options: [
      "Directly — variable frequency AC is compatible with the utility grid",
      "Through a rectifier (AC to DC) followed by a grid-tied inverter (DC to fixed-frequency AC)",
      "Through a step-up transformer only — no conversion is needed",
      "Through a synchronous condenser that stabilizes the frequency"
    ],
    correctIndex: 1,
    explanation: "Wind turbines produce variable-frequency AC because rotor speed varies with wind speed. The AC is first rectified to DC, then a grid-tied inverter produces fixed-frequency (60 Hz), fixed-voltage AC that is synchronized to and injected into the utility grid. This full power conversion (AC-DC-AC) allows the turbine to operate at variable speed while delivering grid-compatible power.",
    order: 64,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — Renewable Energy",
    question: "What is the purpose of an isolation transformer used in an EV charging (EVSE) installation?",
    options: [
      "To step up utility voltage to the 800V DC required by the EV battery",
      "To galvanically isolate the EV charging circuit from the utility supply, providing shock protection",
      "To provide voltage regulation during high EV charging demand",
      "To convert three-phase utility power to single-phase for the EVSE"
    ],
    correctIndex: 1,
    explanation: "Isolation transformers in EVSE installations provide galvanic isolation — no direct metallic connection between primary (utility) and secondary (EV charging) sides. This prevents shock from utility ground faults reaching the vehicle chassis, which a user might contact during charging. It also prevents DC injection into the utility system from certain charger designs.",
    order: 65,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — High Voltage",
    question: "Above what voltage level does a system qualify as 'high voltage' under the CEC?",
    options: [
      "601V",
      "750V",
      "1000V",
      "5000V"
    ],
    correctIndex: 1,
    explanation: "The CEC defines high voltage as systems operating above 750V. Voltages from 751V to 25,000V are classified as medium voltage in industry practice, but CEC rules for HV systems (Section 36) apply above 750V. Common HV distribution voltages in industrial settings include 4,160V, 13,800V, and 27,600V.",
    order: 66,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "MWA B — High Voltage",
    question: "What is the purpose of stress relief terminations (also called stress cones) on medium-voltage cable terminations?",
    options: [
      "To provide physical support for the cable at the termination point",
      "To control the electric field concentration at the point where the cable shielding is cut back, preventing insulation failure",
      "To colour-code the phases at MV terminations",
      "To provide moisture protection for the cable end"
    ],
    correctIndex: 1,
    explanation: "At the point where MV cable shielding is cut back, the electric field becomes highly concentrated at the cut edge. Without stress relief, this concentration causes corona discharge and eventually insulation breakdown (tracking). Stress cones (moulded rubber or hand-applied tape) gradually redistribute the electric field over a longer distance, eliminating the dangerous concentration and allowing the termination to operate reliably.",
    order: 67,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "c",
    topicLabel: "MWA C — Conductors and Cables",
    question: "A #12 AWG copper conductor with RW90 insulation has a base ampacity of 20A at 30°C ambient. The conductor is bundled with 6 other current-carrying conductors. What correction factor applies?",
    options: [
      "0.50 (50%)",
      "0.70 (70%)",
      "0.80 (80%)",
      "0.90 (90%)"
    ],
    correctIndex: 1,
    explanation: "CEC Table 5C provides bundling correction factors. For 7–9 current-carrying conductors bundled together, the ampacity correction factor is 0.70. Therefore, the derated ampacity = 20A × 0.70 = 14A. Bundling reduces heat dissipation, requiring derating to prevent insulation damage.",
    order: 69,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "c",
    topicLabel: "MWA C — Conductors and Cables",
    question: "What is the minimum conductor size permitted for 15A branch circuits in a commercial building under the CEC?",
    options: [
      "#14 AWG",
      "#12 AWG",
      "#10 AWG",
      "#8 AWG"
    ],
    correctIndex: 0,
    explanation: "CEC Table 2 allows #14 AWG copper as the minimum conductor size for 15A branch circuits. However, many jurisdictions and engineers specify #12 AWG as a minimum for all commercial work for improved voltage drop performance.",
    order: 70,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "A",
    topicLabel: "Common Occupational Skills",
    question: "Which class of hard hat provides protection against contact with energized conductors up to 20,000 V?",
    options: [
      "Class B",
      "Class E",
      "Class G",
      "Class C"
    ],
    correctIndex: 1,
    explanation: "Class E (Electrical) hard hats are rated to 20,000 V and are the required standard for construction electricians working near energized systems. Class G (General) is rated to 2,200 V and Class C (Conductive) provides no electrical protection.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "A",
    topicLabel: "Common Occupational Skills",
    question: "After applying lock-out to a circuit, what is the correct next step before beginning work?",
    options: [
      "Notify the supervisor that work is beginning",
      "Apply a personal danger tag to the panel",
      "Test for absence of voltage using rated equipment",
      "Install temporary protective grounds on all conductors"
    ],
    correctIndex: 2,
    explanation: "After isolating and locking out the circuit, the worker must always test for absence of voltage using properly rated test equipment to confirm the circuit is de-energized before making contact. Applying temporary protective grounds comes after confirming absence of voltage, where required.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "A",
    topicLabel: "Common Occupational Skills",
    question: "A construction electrician discovers a cracked rubber insulating glove before starting a task on an energized panel. What is the correct action?",
    options: [
      "Tape the crack with electrical tape and proceed",
      "Use the glove for low-voltage work only",
      "Tag the glove as defective and remove it from service",
      "Wear leather gloves over the cracked rubber glove"
    ],
    correctIndex: 2,
    explanation: "Damaged or defective PPE must be immediately tagged and removed from service, regardless of the perceived severity of the damage. A cracked rubber insulating glove provides no reliable protection against shock and must never be used.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "A",
    topicLabel: "Common Occupational Skills",
    question: "What CAT category rating should a multimeter have for use on a 600V three-phase distribution panel busbar?",
    options: [
      "CAT I",
      "CAT II",
      "CAT III",
      "CAT IV"
    ],
    correctIndex: 2,
    explanation: "CAT III covers three-phase distribution systems, busbars, feeders, disconnects, and fixed equipment. Using a lower-rated meter on a higher-category circuit creates a risk of catastrophic failure from transient overvoltages. Always select the highest applicable CAT rating.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "A",
    topicLabel: "Common Occupational Skills",
    question: "Which tool requires a separate certification to operate on a construction site?",
    options: [
      "Cable puller",
      "Conduit threading machine",
      "Powder-actuated tool",
      "Hydraulic cable cutter"
    ],
    correctIndex: 2,
    explanation: "Powder-actuated tools (PATs) require a specific certification to operate because of the hazards associated with the explosive powder charge. The operator must be certified by the manufacturer or an approved training provider, and must follow strict loading and usage procedures.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "A",
    topicLabel: "Common Occupational Skills",
    question: "When setting up an extension ladder, what is the correct angle ratio?",
    options: [
      "3:1 (one foot out for every 3 feet of height)",
      "4:1 (one foot out for every 4 feet of height)",
      "5:1 (one foot out for every 5 feet of height)",
      "2:1 (one foot out for every 2 feet of height)"
    ],
    correctIndex: 1,
    explanation: "The correct angle for an extension ladder is 4:1 — for every 4 feet of height, the base is set 1 foot away from the wall. This creates a 75° angle, which is the optimal balance between stability and climbing safety.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "A",
    topicLabel: "Common Occupational Skills",
    question: "Which test provides a baseline measurement of cable insulation health that can be compared to future readings to detect degradation?",
    options: [
      "Continuity test",
      "Insulation resistance (megger) test",
      "High-potential (hi-pot) test",
      "Ground loop impedance test"
    ],
    correctIndex: 1,
    explanation: "An insulation resistance (IR) test using a megohmmeter provides a baseline value (measured in MΩ or GΩ) that is recorded at commissioning and compared at future maintenance intervals. Declining IR values indicate insulation degradation before a failure occurs.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "A",
    topicLabel: "Common Occupational Skills",
    question: "Before energizing a new motor installation, what instrument is used to verify correct phase rotation?",
    options: [
      "Multimeter",
      "Oscilloscope",
      "Phase rotation meter",
      "Power quality analyzer"
    ],
    correctIndex: 2,
    explanation: "A phase rotation meter (also called a phase sequence tester) confirms that the phase sequence (A-B-C) at the motor terminals matches the required direction of rotation. Incorrect phase rotation will cause a motor to run backwards, potentially damaging driven equipment.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "Generating, Distribution, and Service Systems",
    question: "In a 120/208V three-phase wye service, what is the voltage measured between any two phase conductors?",
    options: [
      "120V",
      "208V",
      "240V",
      "347V"
    ],
    correctIndex: 1,
    explanation: "In a 120/208V wye system, each phase is 120V to neutral. The phase-to-phase voltage is 120V × √3 = 207.8V ≈ 208V. This is the standard commercial service voltage in Canada.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "Generating, Distribution, and Service Systems",
    question: "Which phase conductor must be identified with orange colour coding in a 120/240V high-leg delta service?",
    options: [
      "Phase A",
      "Phase B (high leg)",
      "Phase C",
      "The neutral"
    ],
    correctIndex: 1,
    explanation: "In a 120/240V high-leg (wild-leg) delta system, the B phase connects to the midpoint of the delta winding, resulting in approximately 208V to neutral — more than double the 120V of A and C phases. This \"high leg\" must be identified with orange conductors or markings to prevent 120V devices from being accidentally connected to it.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "Generating, Distribution, and Service Systems",
    question: "What is the minimum length of a copper-clad steel ground rod per the CEC?",
    options: [
      "1.2 m",
      "1.8 m",
      "2.4 m",
      "3.0 m"
    ],
    correctIndex: 2,
    explanation: "The CEC requires ground rods to be a minimum of 2.4 m (approximately 8 feet) long. If soil conditions prevent driving the rod to its full length, two rods bonded together may be used as an alternative.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "Generating, Distribution, and Service Systems",
    question: "A GFCI device trips when it detects a ground fault current of approximately:",
    options: [
      "50 mA",
      "15 mA",
      "5 mA",
      "100 mA"
    ],
    correctIndex: 2,
    explanation: "GFCI devices are designed to trip at a ground fault current of approximately 4–6 mA (commonly stated as 5 mA). This is below the threshold for ventricular fibrillation (approximately 75–100 mA) but above normal leakage current levels, preventing nuisance tripping.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "Generating, Distribution, and Service Systems",
    question: "Which type of UPS provides the best power quality because the load is always powered through the inverter?",
    options: [
      "Offline (standby) UPS",
      "Line-interactive UPS",
      "Online (double-conversion) UPS",
      "Ferroresonant UPS"
    ],
    correctIndex: 2,
    explanation: "An online (double-conversion) UPS continuously converts incoming AC to DC, then back to AC through its inverter. This provides complete isolation from utility power quality problems (harmonics, transients, sags), zero transfer time on power failure, and the cleanest possible output voltage waveform.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "Generating, Distribution, and Service Systems",
    question: "Which NEMA enclosure type is required for outdoor equipment that must be protected from rain and direct weather?",
    options: [
      "NEMA Type 1",
      "NEMA Type 3R",
      "NEMA Type 12",
      "NEMA Type 7"
    ],
    correctIndex: 1,
    explanation: "NEMA Type 3R enclosures are rated for outdoor use and protect against rain, sleet, and snow. NEMA Type 1 is general-purpose indoor only. Type 12 is indoor dust-tight. Type 7 is for hazardous locations.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "Generating, Distribution, and Service Systems",
    question: "A 75 kVA, 600V/208V three-phase transformer delivers full rated load. What is the approximate full-load secondary current?",
    options: [
      "72A",
      "125A",
      "208A",
      "361A"
    ],
    correctIndex: 2,
    explanation: "I = kVA / (√3 × V) = 75,000 / (1.732 × 208) = 75,000 / 360.3 ≈ 208A. This is the full-load secondary current at the 208V winding. The full-load primary current at 600V would be: 75,000 / (1.732 × 600) ≈ 72A.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "Generating, Distribution, and Service Systems",
    question: "A grid-tied solar inverter must have anti-islanding protection. What is the purpose of this feature?",
    options: [
      "To prevent the inverter from feeding power back to the grid",
      "To shut down the inverter when the utility grid goes offline, preventing back-energization of downed power lines",
      "To protect the inverter from lightning surges on the grid",
      "To regulate the output voltage to match the grid frequency"
    ],
    correctIndex: 1,
    explanation: "Anti-islanding protection shuts down a grid-tied inverter automatically when utility power is lost. Without it, the solar system could continue to energize the utility distribution lines during an outage, creating a lethal hazard for utility workers working on \"de-energized\" lines.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "B",
    topicLabel: "Generating, Distribution, and Service Systems",
    question: "When terminating a high-voltage shielded cable, what is the purpose of a stress relief termination?",
    options: [
      "To prevent moisture from entering the cable end",
      "To manage the electric field stress concentration at the point where the cable shield ends",
      "To provide mechanical protection at the cable entrance to equipment",
      "To reduce the conductor resistance at the termination point"
    ],
    correctIndex: 1,
    explanation: "When the metallic shield of an HV cable is cut back, the electric field concentrates at the shield cutback point — this can lead to insulation breakdown. Stress relief terminations (heat-shrink or cold-shrink kits with built-in stress cones) redistribute the electric field stress gradually, preventing localized breakdown.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "C",
    topicLabel: "Wiring Systems",
    question: "A 30-metre, single-phase, 120V branch circuit uses #12 AWG copper conductors (resistance = 5.21 Ω/km). The circuit supplies a 15A continuous load. What is the approximate voltage drop?",
    options: [
      "1.6V",
      "3.1V",
      "4.7V",
      "6.2V"
    ],
    correctIndex: 2,
    explanation: "VD = 2 × L × R × I / 1000 = 2 × 30m × 5.21 Ω/km × 15A / 1000 = 2 × 30 × 0.00521 × 15 = 4.69V ≈ 4.7V. The percentage voltage drop = 4.7V / 120V = 3.9%, which exceeds the CEC recommended 3% for branch circuits — a larger conductor should be considered.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "C",
    topicLabel: "Wiring Systems",
    question: "Three #10 AWG conductors are installed in a conduit. The maximum conduit fill is 40% of its cross-sectional area. What does this rule apply to?",
    options: [
      "Any number of conductors in any conduit type",
      "Three or more conductors in any conduit type",
      "Two conductors; three or more use 53%",
      "Only conductors with insulation thicker than 1.5mm"
    ],
    correctIndex: 1,
    explanation: "Per CEC Table B-2 (Conduit Fill), three or more conductors in a conduit are limited to 40% of the conduit's internal cross-sectional area. One conductor is limited to 53%, and two conductors to 31%. These limits ensure adequate pulling clearance and heat dissipation.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "C",
    topicLabel: "Wiring Systems",
    question: "Which conduit type is permitted for direct burial and concrete encasement, and provides the highest level of mechanical protection?",
    options: [
      "EMT",
      "FMC",
      "RNMC (PVC)",
      "RMC (RSC)"
    ],
    correctIndex: 3,
    explanation: "Rigid Metal Conduit (RMC, also called RSC — Rigid Steel Conduit) is the heaviest-wall conduit and is approved for all locations including direct burial, concrete encasement, and hazardous locations. EMT cannot be buried directly. FMC is not for burial. PVC (RNMC) cannot serve as an equipment grounding conductor.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "C",
    topicLabel: "Wiring Systems",
    question: "A recessed luminaire is installed in a ceiling where blown-in insulation will be placed directly over the fixture. What is the minimum requirement?",
    options: [
      "The luminaire must be rated for damp locations",
      "The luminaire must be IC-rated (insulation contact)",
      "A minimum 50mm air gap must be maintained around the fixture",
      "The luminaire must be a Type AT (airtight) LED"
    ],
    correctIndex: 1,
    explanation: "When insulation will be in contact with or cover a recessed luminaire, the fixture must be IC-rated (Insulation Contact rated). Non-IC luminaires can overheat if insulation covers them, creating a fire hazard. IC-rated luminaires are designed to safely operate with insulation in contact.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "C",
    topicLabel: "Wiring Systems",
    question: "In an airport runway series lighting circuit, why is an isolation transformer installed at each individual runway light?",
    options: [
      "To step up the voltage to the required lighting level",
      "To isolate each fixture so that a fault in one lamp does not interrupt the entire series circuit",
      "To provide GFCI protection for each lamp",
      "To regulate the current independently at each fixture"
    ],
    correctIndex: 1,
    explanation: "Airport runway lights are wired in a series circuit powered by a constant current regulator. An isolation transformer at each fixture isolates the lamp so that if the lamp fails (open circuit), the series circuit continues to flow through the transformer secondary — maintaining all other lights in the circuit.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "C",
    topicLabel: "Wiring Systems",
    question: "A 2400W, 240V electric baseboard heater is to be installed. What is the minimum branch circuit breaker size required by the CEC (continuous load rule)?",
    options: [
      "10A",
      "15A",
      "20A",
      "25A"
    ],
    correctIndex: 1,
    explanation: "Load current = 2400W ÷ 240V = 10A. Continuous load rule: circuit breaker ≥ 10A × 125% = 12.5A. The next standard breaker size above 12.5A is 15A. Therefore, a 15A, 240V double-pole breaker with #12 AWG conductors is the minimum required.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "C",
    topicLabel: "Wiring Systems",
    question: "Per the National Building Code, what is the maximum transfer time allowed for an emergency generator to restore power to emergency lighting?",
    options: [
      "5 seconds",
      "10 seconds",
      "30 seconds",
      "60 seconds"
    ],
    correctIndex: 1,
    explanation: "The National Building Code (NBC) requires emergency power to be restored within 10 seconds of normal power failure for emergency lighting and life safety systems. This is achieved through the automatic transfer switch (ATS) and the generator's quick-start system.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "D",
    topicLabel: "Motors and Control Systems",
    question: "A 10 HP, 600V, three-phase motor has a nameplate FLA of 11.0A. What is the minimum branch circuit conductor ampacity required by the CEC?",
    options: [
      "11.0A",
      "13.75A",
      "15.0A",
      "17.0A"
    ],
    correctIndex: 1,
    explanation: "CEC Rule 28-106: Motor branch circuit conductors must be sized to a minimum of 125% of the motor FLA. 11.0A × 125% = 13.75A. Select conductors with an ampacity of at least 13.75A (minimum #14 AWG copper or #12 AWG copper, confirmed against CEC Table 2).",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "D",
    topicLabel: "Motors and Control Systems",
    question: "What is the purpose of the \"holding\" or \"sealing\" auxiliary contact in a three-wire motor starter control circuit?",
    options: [
      "To hold the motor at constant speed during load variations",
      "To maintain the contactor coil energized after the START button is released",
      "To provide overload protection during motor acceleration",
      "To prevent the motor from reversing direction"
    ],
    correctIndex: 1,
    explanation: "The auxiliary holding (sealing) contact is a normally open contact on the main contactor that closes when the contactor energizes. It creates a parallel path around the momentary START pushbutton, maintaining the coil circuit closed after the start button is released. Without it, the motor would stop as soon as the START button is released.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "D",
    topicLabel: "Motors and Control Systems",
    question: "Which internal stage of a VFD produces the variable-frequency AC output to the motor?",
    options: [
      "Rectifier stage",
      "DC bus capacitor bank",
      "Inverter stage (IGBT switching)",
      "EMC input filter"
    ],
    correctIndex: 2,
    explanation: "The inverter stage uses IGBT (Insulated Gate Bipolar Transistor) switches to chop the DC bus voltage into pulses of varying width (PWM — Pulse Width Modulation), creating a variable-frequency, variable-voltage AC output that simulates a sine wave at the desired frequency and voltage.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "D",
    topicLabel: "Motors and Control Systems",
    question: "A squirrel cage induction motor is running at 1740 RPM on a 60 Hz, 4-pole supply. What is the synchronous speed, and what is the percent slip?",
    options: [
      "1800 RPM synchronous speed, 3.3% slip",
      "1500 RPM synchronous speed, 16% slip",
      "3600 RPM synchronous speed, 51.7% slip",
      "1200 RPM synchronous speed, 45% slip"
    ],
    correctIndex: 0,
    explanation: "Synchronous speed: Ns = 120 × f / P = 120 × 60 / 4 = 1800 RPM. Slip = (Ns − Nr) / Ns × 100% = (1800 − 1740) / 1800 × 100% = 3.33%. Normal full-load slip for squirrel cage motors is 2–5%.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "D",
    topicLabel: "Motors and Control Systems",
    question: "In PLC ladder logic, what does an XIC (Examine if Closed) instruction represent?",
    options: [
      "A normally closed contact that opens when the bit is 1",
      "A normally open contact that is TRUE when the corresponding bit is 1",
      "An output coil that energizes when the rung is true",
      "A timer instruction that activates on a rising edge"
    ],
    correctIndex: 1,
    explanation: "XIC (Examine if Closed) is equivalent to a normally open (NO) contact in relay logic. The instruction evaluates as TRUE (passes power) when the corresponding PLC address bit is 1 (ON). It is the most common instruction in PLC ladder programs.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "E",
    topicLabel: "Signalling & Communication Systems",
    question: "In a fire alarm system, what distinguishes a Class A circuit from a Class B circuit?",
    options: [
      "Class A uses 2-wire circuits; Class B uses 4-wire circuits",
      "Class A is a loop circuit that remains functional despite a single open or short; Class B is a T-circuit that is disabled by a single open",
      "Class A circuits require end-of-line resistors; Class B does not",
      "Class A uses addressable devices; Class B uses conventional (zone) devices"
    ],
    correctIndex: 1,
    explanation: "Class A wiring loops both return conductors back to the FACP so that a single open in the circuit does not interrupt communication with devices beyond the open. Class B uses a T-configuration with an end-of-line resistor; a single open fault disables the circuit beyond the open. Class A is required by the NBC in high-rise buildings.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "E",
    topicLabel: "Signalling & Communication Systems",
    question: "Which cable category supports 10 Gbps Ethernet up to a maximum of 100 metres?",
    options: [
      "Cat 5e",
      "Cat 6",
      "Cat 6A",
      "Cat 3"
    ],
    correctIndex: 2,
    explanation: "Cat 6A (Category 6 Augmented) is rated at 500 MHz and supports 10GBASE-T (10 Gbps Ethernet) over the full 100 m channel length. Cat 6 supports 10 Gbps only up to about 55 m. Cat 5e supports only 1 Gbps.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "E",
    topicLabel: "Signalling & Communication Systems",
    question: "Which open protocol is most commonly used for communication between building automation system components from different manufacturers?",
    options: [
      "Modbus RTU",
      "BACnet (ANSI/ASHRAE 135)",
      "Profibus DP",
      "DeviceNet"
    ],
    correctIndex: 1,
    explanation: "BACnet (ANSI/ASHRAE 135) is the dominant open protocol for building automation systems in North America. It was specifically developed for building automation applications (HVAC, lighting, security) and supports multiple physical layers (BACnet/IP, BACnet MS/TP, BACnet wireless). Modbus and Profibus are more common in industrial automation.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "A 120 V single-phase circuit supplies a 16 A load over 40 metres with #12 AWG copper (R = 5.21 Ω/km). What is the voltage drop?",
    options: [
      "3.3 V",
      "5.3 V",
      "6.7 V",
      "10.6 V"
    ],
    correctIndex: 2,
    explanation: "VD = 2 × 40 × 5.21 × 16 / 1000 = 6.67 V ≈ 6.7 V. VD % = 6.7 / 120 = 5.6% — exceeds the CEC 3% recommendation for branch circuits.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "Four conductors each have an outside diameter of 10 mm. What is the minimum internal cross-sectional area of conduit required (fill rule for 3+ conductors)?",
    options: [
      "314 mm²",
      "392 mm²",
      "785 mm²",
      "1257 mm²"
    ],
    correctIndex: 2,
    explanation: "Area per conductor = π × 10² / 4 = 78.54 mm². Total = 4 × 78.54 = 314.2 mm². Minimum conduit area = 314.2 / 0.40 = 785 mm².",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "A 4-pole, 60 Hz squirrel-cage motor runs at 1728 rpm at full load. What is the percent slip?",
    options: [
      "2.0%",
      "3.5%",
      "4.0%",
      "5.0%"
    ],
    correctIndex: 2,
    explanation: "Ns = 120 × 60 / 4 = 1800 rpm. Slip = (1800 − 1728) / 1800 × 100% = 72/1800 × 100% = 4.0%.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "What is the purpose of a Temporary Protective Ground (TPG) applied to a de-energized high-voltage conductor?",
    options: [
      "To provide a continuous grounding path during normal operation",
      "To drain capacitive charge and prevent accidental re-energization from creating a shock hazard",
      "To identify the conductor as de-energized for AHJ inspection",
      "To connect the conductor to the lightning protection system"
    ],
    correctIndex: 1,
    explanation: "TPGs are shorting cables attached between phase conductors and earth on de-energized HV systems. They drain any capacitive or induced voltage, and if the line is accidentally re-energized, they create a bolted fault that trips upstream protection — protecting the worker from shock. Required by the CEC for HV work.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "Which PLC ladder logic instruction is equivalent to a normally closed contact?",
    options: [
      "XIC (Examine If Closed)",
      "XIO (Examine If Open)",
      "OTE (Output Energize)",
      "OTL (Output Latch)"
    ],
    correctIndex: 1,
    explanation: "XIO (Examine If Open) evaluates as TRUE (passes power) when the corresponding PLC address bit is 0 — exactly like a normally closed contact that passes current when the coil is not energized. XIC is the normally open equivalent.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "You encounter a question you are unsure about. What is the best exam strategy?",
    options: [
      "Leave it blank to avoid losing points for a wrong answer",
      "Spend as much time as needed until you are confident",
      "Make your best guess, mark it, move on, and return to it at the end",
      "Choose the longest answer because it is usually correct"
    ],
    correctIndex: 2,
    explanation: "The Red Seal exam has no penalty for wrong answers — an unanswered question always scores 0, but a guess has a 25% chance of scoring. The best strategy is to guess, mark, move on, and return with fresh eyes. Spending too long on one question risks running out of time for easier questions later.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "Which AMA (Area of Measurement) should receive the most study time, and how many exam questions does it represent?",
    options: [
      "AMA B — Generating, distribution and supply systems — 26 questions",
      "AMA D — Motors and control systems — 18 questions",
      "AMA C — Wiring systems — 34 questions",
      "AMA A — Common occupational skills — 12 questions"
    ],
    correctIndex: 2,
    explanation: "AMA C (Wiring systems) is the highest-weighted section with 34 questions (34% of the exam). It covers cable pathways, conductors, cables, branch circuits, lighting, HVAC, electric heating, and emergency lighting. Strong performance here is the single most important factor for passing.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA A] Which class of rubber insulating gloves provides the highest voltage protection?",
    options: [
      "Class 00 — 500V AC",
      "Class 0 — 1,000V AC",
      "Class 2 — 17,000V AC",
      "Class 4 — 40,000V AC"
    ],
    correctIndex: 3,
    explanation: "Rubber insulating glove classes: 00 (500V), 0 (1,000V), 1 (7,500V), 2 (17,000V), 3 (26,500V), 4 (40,000V AC). Class 4 provides the highest protection and is required for high-voltage work.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA A] What is the correct sequence for the first three steps of a LOTO procedure?",
    options: [
      "Isolate → Notify → Test for absence of voltage",
      "Notify → Identify all energy sources → Isolate",
      "Lock → Tag → Test for absence of voltage",
      "Test → Isolate → Lock and tag"
    ],
    correctIndex: 1,
    explanation: "LOTO sequence: (1) Notify, (2) Identify all isolation points and energy sources, (3) Isolate, (4) Lock and tag, (5) Test for absence of voltage, (6) Verify zero-energy state.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA A] A multimeter used on a 600 V three-phase distribution panel bus must be rated at minimum:",
    options: [
      "CAT I",
      "CAT II",
      "CAT III",
      "CAT IV"
    ],
    correctIndex: 2,
    explanation: "CAT III covers three-phase distribution systems, bus bars, disconnects, and fixed equipment — the minimum for this application. CAT IV is for service entrance. Always use the highest applicable category.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA A] Which type of drawing shows the final as-installed condition and routing of all electrical systems after project completion?",
    options: [
      "Shop drawing",
      "Wiring diagram",
      "As-built (record) drawing",
      "Elevation schematic"
    ],
    correctIndex: 2,
    explanation: "As-built (record) drawings are updated throughout the project and at completion to reflect the actual installed condition — including routing changes, conduit sizes, and circuit changes made during construction. They are a required closeout document.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA B] In a 347/600 V three-phase wye system, what is the voltage between a phase conductor and neutral?",
    options: [
      "208 V",
      "240 V",
      "347 V",
      "600 V"
    ],
    correctIndex: 2,
    explanation: "347 V to neutral × √3 = 601 V ≈ 600 V phase-to-phase. This is the standard Canadian industrial supply.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA B] A concrete-encased (Ufer) grounding electrode requires a minimum of how many metres of conductor embedded in the footing?",
    options: [
      "2.4 m",
      "3.0 m",
      "6.0 m",
      "7.5 m"
    ],
    correctIndex: 2,
    explanation: "The CEC requires a minimum of 6 m of rebar (≥ 10 mm diameter) or copper conductor embedded in the concrete footing or foundation for a concrete-encased electrode.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA B] A double-conversion (online) UPS continuously powers the load from its inverter. What is the main advantage of this design?",
    options: [
      "Larger batteries and longer runtime",
      "Zero transfer time on failure and complete isolation from utility power quality issues",
      "Lower cost than standby UPS",
      "Built-in surge suppression that an offline UPS does not have"
    ],
    correctIndex: 1,
    explanation: "Online UPS: AC→DC→AC continuously. The load is always fed by the inverter — zero transfer time and complete isolation from utility harmonics, sags, swells, and frequency variation. Most reliable topology for critical loads.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA B] A 75 kVA, 600 V / 208 V three-phase transformer is fully loaded. What is the approximate full-load secondary current?",
    options: [
      "72 A",
      "125 A",
      "208 A",
      "360 A"
    ],
    correctIndex: 2,
    explanation: "I = S / (√3 × V) = 75,000 / (1.732 × 208) = 75,000 / 360.3 ≈ 208 A.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA B] A current-limiting fuse is specified on a distribution panel. What distinguishes it from a standard time-delay fuse?",
    options: [
      "It opens more slowly to allow motor inrush without opening",
      "It interrupts fault current in less than one half-cycle, limiting let-through peak energy",
      "It uses a reusable fuse element that can be reset after operation",
      "It is rated for higher continuous current than a standard fuse of the same size"
    ],
    correctIndex: 1,
    explanation: "Current-limiting fuses open in less than one half-cycle (< 8 ms at 60 Hz), limiting let-through peak current to a fraction of available fault current. This protects downstream equipment from the mechanical and thermal stress of full-magnitude faults.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA B] Why must antioxidant compound be applied to all aluminium conductor terminations?",
    options: [
      "To lubricate the conductor when pulling in conduit",
      "To prevent the natural aluminium oxide layer from creating a high-resistance connection",
      "To provide corrosion protection only in wet locations",
      "To meet CEC requirement only for conductors larger than 1/0 AWG"
    ],
    correctIndex: 1,
    explanation: "Aluminium oxidizes quickly in air, forming aluminium oxide — an electrical insulator. Antioxidant compound prevents new oxide formation and helps displace existing oxide at the contact interface, ensuring a low-resistance, reliable connection.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA B] What happens if a grid-tied solar inverter lacks anti-islanding protection and the utility is down?",
    options: [
      "The inverter automatically switches to battery backup mode",
      "The solar system could continue to feed de-energized utility lines, creating a lethal hazard",
      "The inverter output voltage rises above normal, damaging connected loads",
      "The solar panels stop producing power without the grid reference voltage"
    ],
    correctIndex: 1,
    explanation: "Without anti-islanding, a grid-tied solar system continues to feed the distribution grid during an outage. Line workers and first responders who assume lines are de-energized could be electrocuted. Anti-islanding is a mandatory safety requirement for all grid-tied inverters.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA B] What NEMA enclosure type is required for outdoor equipment in a food processing plant where corrosion resistance is essential?",
    options: [
      "NEMA Type 1",
      "NEMA Type 3R",
      "NEMA Type 4",
      "NEMA Type 4X"
    ],
    correctIndex: 3,
    explanation: "NEMA Type 4X adds corrosion resistance (stainless steel or fibreglass construction) to the watertight protection of Type 4. Required in food, marine, chemical, and other corrosive environments. Type 3R is rain-resistant for outdoor use but is neither watertight nor corrosion-resistant.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA C] Three #8 AWG conductors each have a cross-sectional area of 43.2 mm². What is the minimum required internal conduit area?",
    options: [
      "130 mm²",
      "216 mm²",
      "324 mm²",
      "432 mm²"
    ],
    correctIndex: 2,
    explanation: "Total conductor area = 3 × 43.2 = 129.6 mm². Minimum conduit area = 129.6 / 0.40 = 324 mm² (40% fill rule for 3+ conductors).",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA C] A circuit supplies a continuous 28 A load. What is the minimum conductor ampacity required by the CEC?",
    options: [
      "28 A",
      "30 A",
      "35 A",
      "40 A"
    ],
    correctIndex: 2,
    explanation: "Continuous load (≥ 3 hours): minimum conductor ampacity = FLA × 125% = 28 × 1.25 = 35 A.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA C] Which conduit uses set-screw or compression fittings, is thin-wall steel, and is the most common conduit in commercial construction?",
    options: [
      "RMC",
      "IMC",
      "EMT",
      "RNMC (PVC)"
    ],
    correctIndex: 2,
    explanation: "EMT (Electrical Metallic Tubing) is thin-wall steel, uses set-screw or compression (non-threaded) fittings, and is the most widely installed conduit in commercial and light industrial work. Not approved for direct burial or concrete embedment.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA C] What is the maximum total degrees of bend allowed between two conduit pull points?",
    options: [
      "180°",
      "270°",
      "360°",
      "450°"
    ],
    correctIndex: 2,
    explanation: "The CEC limits total bends between two pull points to 360° — equivalent to four 90° bends. More bends require additional pull points.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA C] A 4,800 W, 240 V single-phase baseboard heater is a continuous load. What is the minimum branch circuit breaker size?",
    options: [
      "20 A",
      "25 A",
      "30 A",
      "35 A"
    ],
    correctIndex: 1,
    explanation: "Load current = 4800 / 240 = 20 A. Continuous: breaker ≥ 20 × 1.25 = 25 A. Next standard size is 25 A — use a 25 A two-pole breaker with #10 AWG copper.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA C] Which cable has copper tape armour and PVC outer sheath and is rated for direct burial and cable tray?",
    options: [
      "NMD90",
      "AC90 (BX)",
      "TECK90",
      "RW90"
    ],
    correctIndex: 2,
    explanation: "TECK90 has XLPE-insulated conductors, copper tape armour, and 90°C PVC outer sheath. Approved for cable tray, direct burial, wet locations, and outdoor use.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA C] What protection does the CEC require on 125 V receptacles installed in a bathroom?",
    options: [
      "AFCI breaker",
      "GFCI protection",
      "Surge protection device",
      "Standard 15 A breaker only"
    ],
    correctIndex: 1,
    explanation: "The CEC requires GFCI protection on all 125 V receptacles in bathrooms, garages, kitchens, and outdoors. GFCI trips at a ground fault current of approximately 5 mA within 1/40 of a second.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA C] What is the maximum voltage drop recommended by the CEC for a branch circuit?",
    options: [
      "1%",
      "3%",
      "5%",
      "8%"
    ],
    correctIndex: 1,
    explanation: "CEC Rule 8-102 recommends ≤ 3% for branch circuits and ≤ 5% total for feeder and branch circuit combined.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA C] A 120 V single-phase circuit, 40 m long, supplies 16 A with #12 AWG copper (R = 5.21 Ω/km). What is the voltage drop?",
    options: [
      "3.3 V",
      "5.3 V",
      "6.7 V",
      "10.6 V"
    ],
    correctIndex: 2,
    explanation: "VD = 2 × 40 × 5.21 × 16 / 1000 = 6.67 V ≈ 6.7 V. VD % = 6.7 / 120 = 5.6% — exceeds CEC 3% recommendation.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA C] According to the NBC, what is the minimum battery backup duration that emergency lighting must maintain on loss of power?",
    options: [
      "30 minutes",
      "1 hour",
      "90 minutes",
      "8 hours"
    ],
    correctIndex: 0,
    explanation: "The NBC requires a minimum of 30 minutes of emergency lighting. The annual ULC S524 test requires a full 90-minute discharge test to verify the battery can support the load for the required period.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA D] A 600 V three-phase motor has a nameplate FLA of 15.2 A. What is the minimum ampacity of the branch circuit conductors?",
    options: [
      "14.2 A",
      "19.0 A",
      "22.8 A",
      "25.0 A"
    ],
    correctIndex: 1,
    explanation: "CEC Rule 28-106: conductor ampacity ≥ FLA × 125% = 15.2 × 1.25 = 19.0 A minimum.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA D] A 6-pole, 60 Hz motor runs at 1150 rpm at full load. What is the percent slip?",
    options: [
      "2.1%",
      "4.2%",
      "6.3%",
      "8.4%"
    ],
    correctIndex: 1,
    explanation: "Ns = 120 × 60 / 6 = 1200 rpm. Slip = (1200 − 1150) / 1200 × 100% = 4.2%.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA D] In a wye-delta reduced-voltage starter, starting torque is reduced to what fraction of full-voltage starting torque?",
    options: [
      "50%",
      "33%",
      "67%",
      "75%"
    ],
    correctIndex: 1,
    explanation: "In wye start, each winding receives reduced voltage 1/√3. Torque ∝ V², so torque = (1/√3)² = 1/3 ≈ 33% of full-voltage torque. Starting current is also reduced to 33%.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA D] Which stage of a VFD uses IGBT switches to produce a variable-frequency AC output from the DC bus?",
    options: [
      "Rectifier stage",
      "DC bus capacitor bank",
      "Inverter stage",
      "EMC input filter"
    ],
    correctIndex: 2,
    explanation: "The inverter stage uses IGBT switches with PWM to chop the DC bus voltage into a series of pulses that simulate a sine wave at the desired frequency and voltage — creating the variable-frequency output to the motor.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA D] In PLC ladder logic, what does the XIC (Examine If Closed) instruction do?",
    options: [
      "A normally closed contact that opens when the bit is 1",
      "A normally open contact that is TRUE when the corresponding bit is 1",
      "An output coil that energizes when the rung is true",
      "A timer instruction that activates on a rising edge"
    ],
    correctIndex: 1,
    explanation: "XIC (Examine If Closed) is equivalent to a normally open (NO) contact. The instruction is TRUE (passes power) when the corresponding PLC address bit is 1. It is the most common instruction in PLC ladder programs.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA E] A hospital fire alarm system must remain functional with a single wire open anywhere in the circuit. What wiring class is required?",
    options: [
      "Class B with end-of-line resistor",
      "Class A loop wiring",
      "Standard star wiring with GFCI",
      "Wireless (RF) devices only"
    ],
    correctIndex: 1,
    explanation: "Class A wiring loops both return conductors back to the FACP. A single open fault does not disable the circuit — the FACP communicates with all devices via the other path. Required by the NBC in high-rises, hospitals, and other critical occupancy buildings.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA E] A structured cabling pathway is certified \"Cat 6A\". What does this guarantee for the installed channel?",
    options: [
      "Rated to 250 MHz; supports 1 Gbps up to 100 m",
      "Rated to 500 MHz; supports 10 Gbps Ethernet up to 100 m",
      "Rated to 100 MHz; supports 100 Mbps only",
      "Uses shielded (ScTP) construction exclusively"
    ],
    correctIndex: 1,
    explanation: "Cat 6A is rated at 500 MHz and supports 10GBASE-T (10 Gbps) over the full 100 m horizontal channel length. Cat 6 achieves 10 Gbps only up to about 55 m.",
    order: 0,
  },
  {
    tradeSlug: "construction-electrician",
    topicId: "F",
    topicLabel: "Exam Preparation",
    question: "[AMA E] A BAS uses BACnet/IP. Occupancy sensors detect an empty floor, triggering an HVAC setback. Which component sends the \"unoccupied\" signal directly to the DDC controller?",
    options: [
      "The PoE switch powering the sensors",
      "The BAS supervisory server",
      "The occupancy sensor wired to a digital input on the DDC controller",
      "The security station HMI"
    ],
    correctIndex: 2,
    explanation: "Occupancy sensors provide a dry contact or low-voltage digital signal wired directly to a digital input on the local DDC controller. The DDC reads this signal, runs its control program, and commands HVAC actuators. The status is then reported to the BAS server over the BACnet/IP network.",
    order: 0,
  },
  {
    tradeSlug: "plumber",
    topicId: "A",
    topicLabel: "Foundations of the Trade",
    question: "A plumber discovers a tripping hazard on the worksite. What is the FIRST correct action?",
    options: [
      "Continue working and report it at the end of the shift",
      "Mitigate or eliminate the hazard immediately and communicate it to the supervisor and Health and Safety representative",
      "Wait for the site safety officer to arrive before taking any action",
      "Post a warning sign and leave the hazard in place"
    ],
    correctIndex: 1,
    explanation: "According to the RSOS, when a worksite hazard is identified it must be mitigated or eliminated, documented, and communicated to the supervisor and Health and Safety representative immediately.",
    order: 0,
  },
  {
    tradeSlug: "plumber",
    topicId: "A",
    topicLabel: "Foundations of the Trade",
    question: "Which of the following is classified as safety EQUIPMENT (not PPE) in the plumbing trade?",
    options: [
      "Steel-toed boots",
      "Fire-retardant clothing",
      "Fall-arrest systems",
      "Hard hat"
    ],
    correctIndex: 2,
    explanation: "PPE includes items worn on the body (boots, clothing, hard hat). Safety equipment includes fall-arrest systems, fire extinguishers, first aid kits, and smoke/fume extractors — these are tools used for safety, not worn as personal protection.",
    order: 0,
  },
  {
    tradeSlug: "plumber",
    topicId: "A",
    topicLabel: "Foundations of the Trade",
    question: "What does it mean for a plumbing system to be in a \"zero-energy state\"?",
    options: [
      "The system has been flushed with clean water",
      "All pumps are set to their minimum speed",
      "All forms of energy have been isolated and dissipated so the system cannot move, energize, or release stored energy",
      "The electrical panel breaker for the system has been turned off"
    ],
    correctIndex: 2,
    explanation: "A zero-energy state means ALL forms of energy — electrical, hydraulic, pneumatic, mechanical, thermal, and chemical — have been isolated and dissipated. Turning off only one type of energy does not achieve zero-energy state.",
    order: 0,
  },
  {
    tradeSlug: "plumber",
    topicId: "A",
    topicLabel: "Foundations of the Trade",
    question: "When a plumber finds PPE that is worn and damaged, what is the proper procedure?",
    options: [
      "Continue using it if the damage is minor",
      "Repair it on the job site and return it to service",
      "Tag it, report it to the supervisor, and remove it from service",
      "Discard it without reporting"
    ],
    correctIndex: 2,
    explanation: "Worn, damaged, or defective PPE must be tagged using identification markings, reported to the supervisor, and removed from service. Using damaged PPE puts the worker at serious risk.",
    order: 0,
  },
  {
    tradeSlug: "plumber",
    topicId: "A",
    topicLabel: "Foundations of the Trade",
    question: "Which LOTO isolation method involves inserting a physical barrier directly into the piping?",
    options: [
      "Double-block-and-bleed",
      "Breaker lock",
      "Blinding",
      "Tag-out only"
    ],
    correctIndex: 2,
    explanation: "Blinding involves inserting a physical barrier (such as a blind flange) directly into the piping to create a positive barrier against fluid flow. Double-block-and-bleed uses two valves with a bleed port between them.",
    order: 0,
  },
  {
    tradeSlug: "plumber",
    topicId: "A",
    topicLabel: "Foundations of the Trade",
    question: "What is a \"flashback arrestor\" used for in oxy-fuel equipment?",
    options: [
      "To regulate the output pressure of the gas cylinder",
      "To prevent the flame from travelling back into the hose and causing an explosion",
      "To reduce the temperature of the torch tip",
      "To filter impurities from the fuel gas"
    ],
    correctIndex: 1,
    explanation: "Flashback arrestors are safety devices installed on oxy-fuel hoses to stop a flashback — the dangerous condition where the flame travels backward through the hose toward the gas source. This prevents fires and explosions.",
    order: 0,
  },
  {
    tradeSlug: "plumber",
    topicId: "A",
    topicLabel: "Foundations of the Trade",
    question: "What does \"bird-caging\" indicate in wire rope?",
    options: [
      "The wire rope has been properly coiled for storage",
      "The wire rope is new and has not yet been broken in",
      "Individual wire strands have broken and are splaying outward, indicating the rope must be removed from service",
      "The rope is rated for aerial lifting operations"
    ],
    correctIndex: 2,
    explanation: "Bird-caging describes the condition where individual wire strands break and splay outward, resembling a bird cage. This is a critical defect — the wire rope must be immediately removed from service.",
    order: 0,
  },
  {
    tradeSlug: "plumber",
    topicId: "A",
    topicLabel: "Foundations of the Trade",
    question: "At what approximate temperature does brazing differ from soldering?",
    options: [
      "Brazing occurs above 450°C; soldering occurs below 450°C",
      "Brazing occurs below 200°C; soldering above 200°C",
      "There is no temperature difference — the terms are interchangeable",
      "Brazing occurs above 900°C; soldering above 450°C"
    ],
    correctIndex: 0,
    explanation: "By definition, brazing uses a filler metal with a melting point above 450°C (840°F), while soldering uses filler metal below this temperature. The base metal is not melted in either process.",
    order: 0,
  },
  {
    tradeSlug: "plumber",
    topicId: "A",
    topicLabel: "Foundations of the Trade",
    question: "Why must inert gas (such as nitrogen) be purged through copper pipe during brazing?",
    options: [
      "To pre-heat the pipe evenly before applying the torch",
      "To displace oxygen inside the pipe and prevent internal oxidation during the joining process",
      "To test for leaks before the joint cools",
      "To clean flux residue from the inside of the pipe"
    ],
    correctIndex: 1,
    explanation: "Purging with an inert gas (nitrogen or argon) displaces oxygen from inside the pipe. This prevents the formation of copper oxide scale inside the pipe during brazing — which could contaminate the system or restrict flow.",
    order: 0,
  },
  {
    tradeSlug: "plumber",
    topicId: "A",
    topicLabel: "Foundations of the Trade",
    question: "What are \"as-built drawings\"?",
    options: [
      "The original architectural drawings prepared by the engineer",
      "Drawings updated to reflect the actual installed condition of all systems as they were built",
      "Drawings used to obtain a building permit",
      "Preliminary sketches prepared before construction begins"
    ],
    correctIndex: 1,
    explanation: "As-built drawings (also called record drawings) are updated during construction to show the actual location, size, and configuration of all installed systems. They are essential for future maintenance and renovation.",
    order: 0,
  },
  {
    tradeSlug: "plumber",
    topicId: "A",
    topicLabel: "Foundations of the Trade",
    question: "What is the purpose of a maintenance manual compiled at project completion?",
    options: [
      "To record the daily activities of the plumbing crew",
      "To provide the building owner with product data sheets and operating/maintenance information for all installed equipment",
      "To document the project cost and labour hours",
      "To serve as the permit application for future renovations"
    ],
    correctIndex: 1,
    explanation: "Maintenance manuals are compiled from product data sheets for all installed equipment and are submitted to the facility manager. They provide the building owner with the information needed to maintain, service, and troubleshoot every piece of installed equipment.",
    order: 0,
  },
  {
    tradeSlug: "plumber",
    topicId: "A",
    topicLabel: "Foundations of the Trade",
    question: "Convert 250 kPa to psi (use the conversion factor: 1 kPa = 0.1450 psi).",
    options: [
      "36.25 psi",
      "1,724 psi",
      "25.0 psi",
      "2.5 psi"
    ],
    correctIndex: 0,
    explanation: "250 kPa × 0.1450 = 36.25 psi. This conversion is critical when working with pressure gauges and specifications that use different unit systems.",
    order: 0,
  },
  {
    tradeSlug: "plumber",
    topicId: "A",
    topicLabel: "Foundations of the Trade",
    question: "A plumber needs to make a 200 mm offset in a pipe run using two 45° elbows. What is the required travel length?",
    options: [
      "141.4 mm",
      "200 mm",
      "282.8 mm",
      "400 mm"
    ],
    correctIndex: 2,
    explanation: "Travel = Offset × 1.414. Therefore: 200 mm × 1.414 = 282.8 mm. The constant 1.414 (√2) is provided on the official Plumber Formulas reference sheet.",
    order: 0,
  },
  {
    tradeSlug: "plumber",
    topicId: "A",
    topicLabel: "Foundations of the Trade",
    question: "What is the minimum grade required by the National Plumbing Code for a 50 mm (2\") drain pipe?",
    options: [
      "0.5% (1/16\" per foot)",
      "1% (1/8\" per foot)",
      "2% (1/4\" per foot)",
      "5% (5/8\" per foot)"
    ],
    correctIndex: 2,
    explanation: "For drain pipes up to 75 mm (3\") in diameter, the National Plumbing Code requires a minimum grade of 2%, which equals 1/4 inch of fall per foot of horizontal run (or 20 mm per metre).",
    order: 0,
  },
  {
    tradeSlug: "plumber",
    topicId: "A",
    topicLabel: "Foundations of the Trade",
    question: "Why must fire stopping be installed where piping passes through a fire-rated wall?",
    options: [
      "To prevent water damage to the wall assembly",
      "To anchor the pipe and prevent movement",
      "To maintain the fire-resistance rating of the assembly by preventing the spread of fire and smoke through the penetration",
      "To reduce noise transmission between rooms"
    ],
    correctIndex: 2,
    explanation: "Fire stopping is required by building and plumbing codes to maintain the fire-resistance rating of fire separations (walls, floors, ceilings). Without it, a hole through a fire wall becomes a pathway for fire and smoke to spread through the building.",
    order: 0,
  },
  {
    tradeSlug: "plumber",
    topicId: "B",
    topicLabel: "Pipe Preparation and Joining",
    question: "After cutting copper tube with a tube cutter, what is the NEXT essential step before soldering?",
    options: [
      "Apply flux immediately and begin soldering",
      "Ream the inside diameter to remove the burr created by the cutting wheel",
      "Heat the tube end to anneal it before inserting into the fitting",
      "Wipe the cut end with a damp cloth to clean it"
    ],
    correctIndex: 1,
    explanation: "Tube cutters create a sharp, inward burr on the inside diameter of the cut. This burr must be removed by reaming to restore full flow area and prevent turbulence and erosion in the system.",
    order: 0,
  },
  {
    tradeSlug: "plumber",
    topicId: "B",
    topicLabel: "Pipe Preparation and Joining",
    question: "Which cutting tool is most commonly used to cut cast iron pipe on the job site?",
    options: [
      "Copper tube cutter",
      "Hacksaw",
      "Snap cutter (chain cutter)",
      "PEX ratchet cutter"
    ],
    correctIndex: 2,
    explanation: "The snap cutter (also called a chain cutter or soil pipe cutter) scores the outside circumference of cast iron pipe using hardened cutting wheels. When the chain is tightened with a ratchet, the pipe snaps cleanly along the score line.",
    order: 0,
  },
  {
    tradeSlug: "plumber",
    topicId: "B",
    topicLabel: "Pipe Preparation and Joining",
    question: "Which plastic pipe type requires a SPECIFIC type of solvent cement — it CANNOT be joined with standard PVC cement?",
    options: [
      "ABS",
      "CPVC",
      "PVC",
      "HDPE"
    ],
    correctIndex: 1,
    explanation: "CPVC (Chlorinated PVC) requires CPVC-specific solvent cement. Using standard PVC cement on CPVC is a code violation and will result in joint failure. HDPE is joined by fusion, not cement.",
    order: 0,
  },
  {
    tradeSlug: "plumber",
    topicId: "B",
    topicLabel: "Pipe Preparation and Joining",
    question: "Calculate the thermal expansion of a 10-metre PVC pipe run if the temperature increases by 30°C. (Coefficient: 0.0000594/°C)",
    options: [
      "0.178 mm",
      "17.82 mm",
      "1.782 mm",
      "178.2 mm"
    ],
    correctIndex: 1,
    explanation: "Expansion = L × ΔT × α = 10,000 mm × 30°C × 0.0000594 = 17.82 mm. This significant movement requires expansion accommodation in the piping system design.",
    order: 0,
  },
  {
    tradeSlug: "plumber",
    topicId: "B",
    topicLabel: "Pipe Preparation and Joining",
    question: "What type of joint is used to connect cast iron no-hub pipe?",
    options: [
      "Threaded joint with pipe dope",
      "Solvent cement joint",
      "No-hub coupling with neoprene gasket and band clamp",
      "Lead and oakum joint"
    ],
    correctIndex: 2,
    explanation: "No-hub cast iron pipe is joined with a no-hub coupling consisting of a neoprene gasket (which provides the seal) and a stainless steel band clamp with screw fasteners. This is the modern standard for cast iron DWV.",
    order: 0,
  },
  {
    tradeSlug: "plumber",
    topicId: "C",
    topicLabel: "Drainage, Waste, and Vent Systems",
    question: "What is the function of a backwater valve in a sanitary drainage system?",
    options: [
      "To increase the flow velocity in the sewer pipe",
      "To prevent sewage from flowing backward into the building during high municipal sewer flows",
      "To remove air from the drainage system",
      "To regulate the water supply pressure in the building"
    ],
    correctIndex: 1,
    explanation: "A backwater valve (check valve for gravity drainage) is designed to permit flow in one direction only. It prevents sewage from reversing direction and backing up into the building through floor drains and fixtures during surcharges in the municipal sewer.",
    order: 0,
  },
  {
    tradeSlug: "plumber",
    topicId: "C",
    topicLabel: "Drainage, Waste, and Vent Systems",
    question: "What is the purpose of a distribution box in a private septic system?",
    options: [
      "To hold sewage until it is collected by a pump truck",
      "To provide access for inspection and cleaning of the sewer",
      "To distribute effluent from the septic tank equally to each arm of the absorption field",
      "To filter solids from the sewage before it enters the tank"
    ],
    correctIndex: 2,
    explanation: "The distribution box receives the liquid effluent from the septic tank and distributes it equally among the multiple drain trenches (arms) of the leaching/absorption field to prevent any one area from becoming overloaded.",
    order: 0,
  },
  {
    tradeSlug: "plumber",
    topicId: "C",
    topicLabel: "Drainage, Waste, and Vent Systems",
    question: "What is the primary function of venting in a DWV system?",
    options: [
      "To allow fresh air into the building through the plumbing",
      "To protect trap seals from being siphoned by pressure differentials in the drainage system, and to allow air circulation",
      "To prevent condensation from forming inside drainage pipes",
      "To reduce the flow velocity in the drainage pipes"
    ],
    correctIndex: 1,
    explanation: "Venting allows air to enter the drainage system as waste flows, preventing negative pressure (suction) that would siphon the water out of fixture traps. A siphoned trap leaves no water seal, allowing sewer gas to enter the building.",
    order: 0,
  },
  {
    tradeSlug: "plumber",
    topicId: "C",
    topicLabel: "Drainage, Waste, and Vent Systems",
    question: "What is the standard air pressure used when performing an air test on a DWV system?",
    options: [
      "100 kPa (15 psi)",
      "700 kPa (100 psi)",
      "35 kPa (5 psi)",
      "200 kPa (29 psi)"
    ],
    correctIndex: 2,
    explanation: "The standard air test pressure for DWV systems is 35 kPa (approximately 5 psi), held for a minimum of 15 minutes with no pressure drop. Higher pressures are not required for gravity drainage systems.",
    order: 0,
  },
  {
    tradeSlug: "plumber",
    topicId: "C",
    topicLabel: "Drainage, Waste, and Vent Systems",
    question: "Why must DWV fittings be used in drainage systems rather than pressure fittings?",
    options: [
      "DWV fittings are less expensive than pressure fittings",
      "DWV fittings have long-radius sweeping curves that promote smooth flow and prevent blockages in gravity drainage",
      "Pressure fittings are not rated for the temperatures found in drainage systems",
      "DWV fittings are easier to install underground"
    ],
    correctIndex: 1,
    explanation: "DWV fittings have long, sweeping curves designed for smooth gravity flow. Pressure fittings have abrupt bends that would create turbulence, trap debris, and cause blockages in drainage applications.",
    order: 0,
  },
  {
    tradeSlug: "plumber",
    topicId: "C",
    topicLabel: "Drainage, Waste, and Vent Systems",
    question: "What is the purpose of a \"cleanout\" in a DWV system?",
    options: [
      "To allow the water seal in the trap to be replenished",
      "To provide access for cleaning and inspection of the drainage piping",
      "To allow air to enter the drainage system and protect trap seals",
      "To allow the plumber to test the system pressure"
    ],
    correctIndex: 1,
    explanation: "Cleanouts provide access points in drainage and venting systems for cleaning blockages and conducting inspections. They are required by code at all major changes of direction, the base of stacks, and at intervals along long horizontal runs.",
    order: 0,
  },
  {
    tradeSlug: "plumber",
    topicId: "D",
    topicLabel: "Water Service and Distribution",
    question: "What is a \"cross connection\" in a plumbing system?",
    options: [
      "A fitting used to connect two pipes of different diameters",
      "Any actual or potential connection between a potable water source and a non-potable water source",
      "The intersection of a cold water pipe and a hot water pipe at a mixing valve",
      "A connection between the building drain and the building sewer"
    ],
    correctIndex: 1,
    explanation: "A cross connection is any actual or potential link between a potable water system and a source of contamination. If backflow occurs at a cross connection, contamination enters the drinking water supply.",
    order: 0,
  },
  {
    tradeSlug: "plumber",
    topicId: "D",
    topicLabel: "Water Service and Distribution",
    question: "Which backflow preventer provides the HIGHEST level of mechanical backflow protection?",
    options: [
      "Atmospheric vacuum breaker (AVB)",
      "Double check valve (DCV)",
      "Reduced-pressure backflow preventer (RPBFP)",
      "Pressure vacuum breaker (PVB)"
    ],
    correctIndex: 2,
    explanation: "The reduced-pressure backflow preventer (RPBFP) provides the highest level of mechanical protection and is required for high-hazard applications. It contains two independently operating check valves and a pressure differential relief valve, and must be tested annually.",
    order: 0,
  },
  {
    tradeSlug: "plumber",
    topicId: "D",
    topicLabel: "Water Service and Distribution",
    question: "A pressure reducing valve (PRV) is required on a water service when the supply pressure exceeds approximately:",
    options: [
      "200 kPa (29 psi)",
      "350 kPa (51 psi)",
      "550 kPa (80 psi)",
      "700 kPa (102 psi)"
    ],
    correctIndex: 2,
    explanation: "The National Plumbing Code of Canada limits the maximum working pressure in a potable water distribution system. A pressure reducing valve (PRV) is required when the service pressure exceeds approximately 550 kPa (80 psi) to protect fixtures and appliances.",
    order: 0,
  },
  {
    tradeSlug: "plumber",
    topicId: "E",
    topicLabel: "Fixtures, Appliances and Water Treatment",
    question: "A water sample shows hardness of 180 ppm. Convert this to grains per gallon (gpg). (1 gpg = 17.12 ppm)",
    options: [
      "3,081.6 gpg",
      "10.5 gpg",
      "180 gpg",
      "0.095 gpg"
    ],
    correctIndex: 1,
    explanation: "To convert ppm to gpg: divide by 17.12. So 180 ÷ 17.12 = 10.51 gpg. This is considered hard water and typically requires treatment with a water softener.",
    order: 0,
  },
  {
    tradeSlug: "plumber",
    topicId: "E",
    topicLabel: "Fixtures, Appliances and Water Treatment",
    question: "What is the function of a Temperature and Pressure Relief (TPR) valve on a water heater?",
    options: [
      "To limit the maximum temperature of the hot water at fixtures",
      "To automatically discharge water if the temperature or pressure in the water heater exceeds safe limits, preventing explosion",
      "To balance the flow between hot and cold water supply pipes",
      "To prevent backflow from the water heater into the cold water supply"
    ],
    correctIndex: 1,
    explanation: "The TPR valve is a critical safety device that opens automatically if the water heater exceeds safe temperature or pressure limits. Without it, an overheated water heater can build up tremendous pressure and explode. The discharge pipe must drain to a safe location.",
    order: 0,
  },
  {
    tradeSlug: "plumber",
    topicId: "E",
    topicLabel: "Fixtures, Appliances and Water Treatment",
    question: "A family of 4 uses 75 gallons per day. Water hardness is 12 gpg, with 1 gpg equivalent iron. They want 7 days between softener regenerations. How many grains of capacity are required?",
    options: [
      "25,200 grains",
      "27,300 grains",
      "3,900 grains",
      "4,200 grains"
    ],
    correctIndex: 0,
    explanation: "Grains = persons × gpd × (hardness + iron) × days = 4 × 75 × (12 + 1) × 7 = 4 × 75 × 13 × 7 = 27,300 grains... Wait, recalculating: 4 × 75 = 300 gpd; 300 × 13 = 3,900 grains/day; 3,900 × 7 = 27,300 grains. (Note: 25,200 would be without iron factor: 4 × 75 × 12 × 7 = 25,200.) The correct answer including the iron factor is 27,300.",
    order: 0,
  },
  {
    tradeSlug: "plumber",
    topicId: "F",
    topicLabel: "Hydronic Heating/Cooling and Specialized Systems",
    question: "A hydronic zone requires 30,000 Btuh. The supply water temperature is 180°F and the return is 160°F. What is the required flow rate in GPM?",
    options: [
      "1.5 gpm",
      "3.0 gpm",
      "6.0 gpm",
      "15.0 gpm"
    ],
    correctIndex: 1,
    explanation: "ΔT = 180°F − 160°F = 20°F. gpm = Btuh ÷ (500 × ΔT) = 30,000 ÷ (500 × 20) = 30,000 ÷ 10,000 = 3.0 gpm.",
    order: 0,
  },
  {
    tradeSlug: "plumber",
    topicId: "F",
    topicLabel: "Hydronic Heating/Cooling and Specialized Systems",
    question: "What is the hydronic system output in Btuh if the flow rate is 5 gpm and the temperature differential is 15°F?",
    options: [
      "37,500 Btuh",
      "3,750 Btuh",
      "75,000 Btuh",
      "1,500 Btuh"
    ],
    correctIndex: 0,
    explanation: "Btuh = gpm × 500 × ΔT = 5 × 500 × 15 = 37,500 Btuh.",
    order: 0,
  },
  {
    tradeSlug: "plumber",
    topicId: "F",
    topicLabel: "Hydronic Heating/Cooling and Specialized Systems",
    question: "In a hydronic system, where should the expansion tank be connected relative to the circulator pump?",
    options: [
      "On the discharge side of the circulator pump",
      "As far from the circulator pump as possible to maximize pressure distribution",
      "At the point of no pressure change — close to the circulator pump inlet (suction side)",
      "At the highest point in the system only"
    ],
    correctIndex: 2,
    explanation: "The expansion tank should be connected at the \"point of no pressure change,\" which is close to the circulator pump inlet (suction side). This ensures the pump pressurizes the system rather than pushing water against the expansion tank, and maintains proper system pressure throughout.",
    order: 0,
  },
  {
    tradeSlug: "plumber",
    topicId: "F",
    topicLabel: "Hydronic Heating/Cooling and Specialized Systems",
    question: "How many Btuh does a radiator rated at 10 ft² EDR produce?",
    options: [
      "1,200 Btuh",
      "2,400 Btuh",
      "4,800 Btuh",
      "24,000 Btuh"
    ],
    correctIndex: 1,
    explanation: "The constant from the Plumber Formulas reference is: 1 ft² EDR = 240 Btuh. Therefore: 10 ft² × 240 Btuh/ft² = 2,400 Btuh.",
    order: 0,
  },
  {
    tradeSlug: "plumber",
    topicId: "F",
    topicLabel: "Hydronic Heating/Cooling and Specialized Systems",
    question: "What is the purpose of the DISS (Diameter Index Safety System) used in medical gas piping?",
    options: [
      "To standardize the pipe diameter used for all medical gases",
      "To prevent cross-connection between different medical gases by ensuring only the correct fitting can connect to each gas outlet",
      "To measure the flow rate of medical gases in the distribution system",
      "To allow quick disconnection of medical equipment in an emergency"
    ],
    correctIndex: 1,
    explanation: "The DISS uses unique fitting dimensions for each medical gas. This makes it physically impossible to connect equipment intended for one gas (e.g., oxygen) to a different gas outlet (e.g., nitrous oxide), preventing potentially fatal errors.",
    order: 0,
  },
  {
    tradeSlug: "plumber",
    topicId: "F",
    topicLabel: "Hydronic Heating/Cooling and Specialized Systems",
    question: "Why is flux NOT permitted during the brazing of medical gas piping?",
    options: [
      "Flux is too expensive for medical gas applications",
      "Flux creates a residue inside the pipe that cannot be removed and would contaminate the gas supply, potentially harming patients",
      "Flux weakens the copper tubing at high temperatures",
      "Flux is only required for soft soldering, not brazing"
    ],
    correctIndex: 1,
    explanation: "Flux residue inside medical gas piping cannot be reliably removed and would contaminate the gas. For this reason, a nitrogen purge is used during brazing to prevent internal oxidation — eliminating the need for flux entirely. Clean, oxide-free joints are made without it.",
    order: 0,
  },
  {
    tradeSlug: "plumber",
    topicId: "G",
    topicLabel: "Exam Preparation and Formulas Reference",
    question: "Convert 25°C to Fahrenheit using the official formula.",
    options: [
      "57°F",
      "77°F",
      "45°F",
      "95°F"
    ],
    correctIndex: 1,
    explanation: "°F = (°C × 1.8) + 32 = (25 × 1.8) + 32 = 45 + 32 = 77°F.",
    order: 0,
  },
  {
    tradeSlug: "plumber",
    topicId: "G",
    topicLabel: "Exam Preparation and Formulas Reference",
    question: "What pressure does a water column of 23.1 feet exert in psi? (Use: 0.433 psi/ft)",
    options: [
      "10.0 psi",
      "100 psi",
      "53.4 psi",
      "0.43 psi"
    ],
    correctIndex: 0,
    explanation: "Pressure = height × 0.433 psi/ft = 23.1 ft × 0.433 = 10.0 psi. Note: 2.31 feet of water = 1 psi (the inverse of this constant).",
    order: 0,
  },
  {
    tradeSlug: "plumber",
    topicId: "G",
    topicLabel: "Exam Preparation and Formulas Reference",
    question: "A circular pipe has an inside radius of 75 mm. What is its cross-sectional area in mm²? (π = 3.1416)",
    options: [
      "17,671 mm²",
      "471 mm²",
      "235 mm²",
      "70,686 mm²"
    ],
    correctIndex: 0,
    explanation: "Area = π × r² = 3.1416 × 75² = 3.1416 × 5,625 = 17,671 mm².",
    order: 0,
  },
  {
    tradeSlug: "plumber",
    topicId: "G",
    topicLabel: "Exam Preparation and Formulas Reference",
    question: "Convert 15 L/s to GPM. (Use: 1 L/s = 13.20 gpm)",
    options: [
      "1.14 gpm",
      "15 gpm",
      "198 gpm",
      "880 gpm"
    ],
    correctIndex: 2,
    explanation: "15 L/s × 13.20 = 198 gpm. This conversion is useful when working with specifications that mix metric flow rates with imperial fixture and pipe data.",
    order: 0,
  },
  {
    tradeSlug: "plumber",
    topicId: "G",
    topicLabel: "Exam Preparation and Formulas Reference",
    question: "What is the difference between \"tube\" and \"tubing\" in the plumbing trade?",
    options: [
      "There is no difference — the terms are interchangeable",
      "Tube is measured by its inside diameter (ID); tubing is measured by its outside diameter (OD) and wall thickness",
      "Tube is plastic; tubing is metal",
      "Tube is for DWV; tubing is for water distribution"
    ],
    correctIndex: 1,
    explanation: "This distinction matters for ordering and fitting selection. Copper tube (Type K, L, M) is sized by nominal inside diameter. Copper tubing (ACR) is sized by actual outside diameter. Confusion between these can result in fitting incompatibilities.",
    order: 0,
  },
  {
    tradeSlug: "plumber",
    topicId: "G",
    topicLabel: "Exam Preparation and Formulas Reference",
    question: "What is \"dielectric protection\" in the context of pipe installation?",
    options: [
      "Protection of pipes from high-voltage electrical hazards",
      "Isolation of dissimilar metals to prevent electrolysis (ion transfer) and galvanic corrosion",
      "A type of pipe insulation to prevent condensation",
      "The process of testing pipe joints with electrical current"
    ],
    correctIndex: 1,
    explanation: "Dielectric protection prevents galvanic corrosion that occurs when dissimilar metals (e.g., copper and steel) are in direct contact in the presence of an electrolyte (water). Dielectric unions, couplings, and fittings create an electrical barrier between the metals.",
    order: 0,
  },
  {
    tradeSlug: "plumber",
    topicId: "G",
    topicLabel: "Exam Preparation and Formulas Reference",
    question: "Which MWA represents the LARGEST portion of the Red Seal Plumber examination?",
    options: [
      "MWA A — Common Occupational Skills (11%)",
      "MWA C — DWV Systems (26%)",
      "MWA D — Water Service and Distribution (19%)",
      "MWA F — Hydronic Systems (13%)"
    ],
    correctIndex: 1,
    explanation: "MWA C (DWV Systems) is weighted at 26% of the 125-question exam — approximately 33 questions. DWV is the largest single area and deserves the most focused study time.",
    order: 0,
  },
  {
    tradeSlug: "plumber",
    topicId: "G",
    topicLabel: "Exam Preparation and Formulas Reference",
    question: "A plumber needs to convert a flow rate of 3 L/s to GPM. Using the conversion factor 1 L/s = 13.20 gpm, what is the result?",
    options: [
      "0.23 gpm",
      "3.96 gpm",
      "39.6 gpm",
      "396 gpm"
    ],
    correctIndex: 2,
    explanation: "3 L/s × 13.20 gpm per L/s = 39.6 gpm.",
    order: 0,
  },
  {
    tradeSlug: "plumber",
    topicId: "G",
    topicLabel: "Exam Preparation and Formulas Reference",
    question: "What type of venting is required where conditions prevent installation of a conventional vent through the roof?",
    options: [
      "Air admittance valve (AAV) — a mechanical vent that opens to admit air but prevents sewer gas escape",
      "The drainage pipe must be eliminated from the design",
      "A larger drain pipe can be substituted",
      "No venting is required if the drain is under 50 mm"
    ],
    correctIndex: 0,
    explanation: "An air admittance valve (AAV) — also called an automatic air vent — opens under negative pressure to admit air into the drainage system and closes against positive pressure to prevent gas escape. Permitted by code in specific applications where conventional venting is impractical.",
    order: 0,
  },
  {
    tradeSlug: "plumber",
    topicId: "G",
    topicLabel: "Exam Preparation and Formulas Reference",
    question: "What is the formula for calculating force on a pipe fitting or valve?",
    options: [
      "F = Mass × Acceleration",
      "F = P × A (pressure × area)",
      "F = H × density",
      "F = L × ΔT × α"
    ],
    correctIndex: 1,
    explanation: "Force = Pressure × Area (P × A). This is used to calculate thrust forces on fittings, valves, and end caps in pressurized piping systems. Thrust blocks are designed to resist these forces in buried piping.",
    order: 0,
  },
  {
    tradeSlug: "plumber",
    topicId: "G",
    topicLabel: "Exam Preparation and Formulas Reference",
    question: "A plumber is installing a private sewage treatment system. What is the function of the septic tank?",
    options: [
      "To pump sewage up to the absorption field",
      "To provide final treatment and disinfection of sewage before disposal",
      "To provide anaerobic digestion of solids and separate solids from liquid effluent for distribution to the absorption field",
      "To store sewage for periodic collection by a pump truck"
    ],
    correctIndex: 2,
    explanation: "The septic tank provides primary treatment through anaerobic (without oxygen) digestion. Solids settle to the bottom as sludge, a scum layer floats on top, and the clarified liquid effluent in the middle drains to the distribution box and absorption field.",
    order: 0,
  },
  {
    tradeSlug: "plumber",
    topicId: "G",
    topicLabel: "Exam Preparation and Formulas Reference",
    question: "Boyle's Law states V₁/V₂ = P₂/P₁. If a gas occupies 4 L at 200 kPa, what volume will it occupy at 400 kPa? (Assume constant temperature.)",
    options: [
      "8 L",
      "2 L",
      "1 L",
      "0.5 L"
    ],
    correctIndex: 1,
    explanation: "V₁/V₂ = P₂/P₁ → 4/V₂ = 400/200 → 4/V₂ = 2 → V₂ = 4/2 = 2 L. As pressure doubles, volume halves (at constant temperature). This is fundamental to understanding compressed gas systems and pressure testing.",
    order: 0,
  },
  {
    tradeSlug: "plumber",
    topicId: "G",
    topicLabel: "Exam Preparation and Formulas Reference",
    question: "What is the maximum flush volume allowed for a water closet (toilet) under the National Plumbing Code of Canada?",
    options: [
      "6 litres",
      "13 litres",
      "19 litres",
      "1.6 gallons"
    ],
    correctIndex: 0,
    explanation: "The National Plumbing Code of Canada limits flush volumes to a maximum of 6 litres per flush for water closets. High-efficiency toilets (HETs) use 4.8 litres or less. This was reduced from earlier limits of 13 L and 19 L to conserve water.",
    order: 0,
  },
  {
    tradeSlug: "plumber",
    topicId: "G",
    topicLabel: "Exam Preparation and Formulas Reference",
    question: "A zone in a hydronic system has a flow rate of 4 gpm and a temperature differential of 25°F. What is the heat output in Btuh?",
    options: [
      "12,500 Btuh",
      "50,000 Btuh",
      "8,000 Btuh",
      "2,000 Btuh"
    ],
    correctIndex: 1,
    explanation: "Btuh = gpm × 500 × ΔT = 4 × 500 × 25 = 50,000 Btuh.",
    order: 0,
  },
  {
    tradeSlug: "plumber",
    topicId: "G",
    topicLabel: "Exam Preparation and Formulas Reference",
    question: "The National Plumbing Code (NPC) requires that all fixtures be individually trapped. What is the purpose of the trap?",
    options: [
      "To prevent freezing of drain pipes in cold climates",
      "To hold a liquid seal that prevents the passage of sewer gas into the building",
      "To reduce water pressure at the fixture outlet",
      "To prevent backflow of hot water from the water heater"
    ],
    correctIndex: 1,
    explanation: "A trap holds a liquid (water) seal in a curved section of pipe. This seal prevents toxic and odorous sewer gases from entering the building while still allowing liquid waste to flow through by gravity.",
    order: 0,
  },
  {
    tradeSlug: "plumber",
    topicId: "G",
    topicLabel: "Exam Preparation and Formulas Reference",
    question: "Calculate the thermal expansion of a 15-metre copper pipe run if temperature increases from 10°C to 60°C. (Coefficient for copper: 0.0000171 per 1°C)",
    options: [
      "2.6 mm",
      "12.8 mm",
      "1.28 mm",
      "25.6 mm"
    ],
    correctIndex: 1,
    explanation: "ΔT = 60°C − 10°C = 50°C. Expansion = L × ΔT × α = 15,000 mm × 50°C × 0.0000171 = 12.825 mm ≈ 12.8 mm. This expansion must be accommodated with pipe anchors, guides, and expansion loops or devices.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "Part 1: Professional Foundations",
    question: "Under OHSA, which of the following is a worker's right?",
    options: [
      "The right to refuse unsafe work without penalty",
      "The right to choose their own PPE brand",
      "The right to modify chemical dilution ratios",
      "The right to skip WHMIS training if experienced"
    ],
    correctIndex: 0,
    explanation: "OHSA gives workers three key rights: to know, to participate, and to refuse. The right to refuse unsafe work without reprisal is explicitly protected by law.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "Part 1: Professional Foundations",
    question: "A Safety Data Sheet (SDS) for a hydrogen peroxide developer would list it under which WHMIS hazard class?",
    options: [
      "Flammable liquid",
      "Oxidizing agent",
      "Compressed gas",
      "Carcinogen"
    ],
    correctIndex: 1,
    explanation: "Hydrogen peroxide releases oxygen and is classified as an oxidizing agent under WHMIS. Oxidizers can intensify combustion and are common in salons as hair colour developers.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "Part 1: Professional Foundations",
    question: "Which of the following best describes professional ethics in hairstyling?",
    options: [
      "Rules set only by the employer that can change at any time",
      "Moral standards guiding professional behavior to protect clients and colleagues",
      "Technical cutting and colouring techniques",
      "The minimum wage requirements under employment law"
    ],
    correctIndex: 1,
    explanation: "Professional ethics encompasses courtesy, competency, non-discrimination, confidentiality, and honesty. These are moral principles — not just employer policies or technical skills.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "Part 1: Professional Foundations",
    question: "What is the correct term for the document that provides detailed 16-section safety information about a chemical product?",
    options: [
      "Manufacturer's instruction booklet",
      "Safety Data Sheet (SDS)",
      "Hazardous Product Label",
      "OHSA Regulation Sheet"
    ],
    correctIndex: 1,
    explanation: "Formerly called MSDS, the SDS provides 16 standardized sections of safety information as required under WHMIS 2015 / GHS.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "Part 1: Professional Foundations",
    question: "An employer's responsibility under OHSA includes:",
    options: [
      "Purchasing all personal grooming products for employees",
      "Providing a safe workplace and necessary worker training",
      "Deciding which clients hairstylists may serve",
      "Setting provincial pricing standards for services"
    ],
    correctIndex: 1,
    explanation: "Employers must provide safety information, training, supervision, and a safe physical environment under OHSA.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "Part 1: Professional Foundations",
    question: "Before performing a chemical service, a client must provide:",
    options: [
      "Proof of identity",
      "Informed consent after being told about the procedure, products, and risks",
      "A written contract",
      "Their complete medical history"
    ],
    correctIndex: 1,
    explanation: "Informed consent means the client voluntarily agrees after being fully informed. This is an ethical and legal requirement before any chemical or potentially risky service.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "Part 1: Professional Foundations",
    question: "What signal word on a WHMIS label indicates a MORE severe hazard?",
    options: [
      "Caution",
      "Warning",
      "Danger",
      "Notice"
    ],
    correctIndex: 2,
    explanation: "Under WHMIS 2015 (GHS), 'DANGER' is used for more severe hazards and 'WARNING' for less severe hazards. There are only two signal words.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "Part 1: Professional Foundations",
    question: "A hairstylist notices a client has a scalp rash that may be a fungal infection. The appropriate action is to:",
    options: [
      "Apply a medicated shampoo and proceed with the service",
      "Refer the client to a physician and decline the service until cleared",
      "Complete the service carefully to avoid the affected area",
      "Ask the client if they have a diagnosis"
    ],
    correctIndex: 1,
    explanation: "Performing a service on a potentially contagious or medically compromised scalp violates scope of practice, could spread infection, and may harm the client.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "Part 1: Professional Foundations",
    question: "What is the HIGHEST level of decontamination?",
    options: [
      "Sanitation",
      "Disinfection",
      "Sterilization",
      "Fumigation"
    ],
    correctIndex: 2,
    explanation: "Sterilization destroys ALL microorganisms including resistant bacterial spores. It is the highest level. Autoclaves (pressurized steam) achieve sterilization. Disinfection kills most pathogens but not all spores.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "Part 1: Professional Foundations",
    question: "Which bacteria form thick, protective coatings to survive unfavorable conditions?",
    options: [
      "Cocci in active stage",
      "Bacilli in active stage",
      "Spore-forming bacteria in inactive stage",
      "Spirilla at all stages"
    ],
    correctIndex: 2,
    explanation: "Bacterial endospores are formed in the inactive stage. They are highly resistant to most disinfectants and heat. Only sterilization can destroy them.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "Part 1: Professional Foundations",
    question: "Blood has contaminated a hairstylist's cape. The correct disposal method is:",
    options: [
      "Place it in the regular trash",
      "Launder it with other capes at high heat",
      "Double-bag in a biohazard bag and follow local regulations",
      "Soak in quaternary ammonium solution for 24 hours"
    ],
    correctIndex: 2,
    explanation: "Items contaminated with blood must be handled as biohazardous waste. Double-bagging and proper regulated disposal protects staff and waste handlers from blood-borne pathogens.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "Part 1: Professional Foundations",
    question: "Which disinfectant should NOT be used to immerse metal implements because it corrodes metal?",
    options: [
      "Quaternary ammonium compounds",
      "Phenolics",
      "Bleach (sodium hypochlorite)",
      "70% isopropyl alcohol"
    ],
    correctIndex: 2,
    explanation: "Bleach (sodium hypochlorite) is highly corrosive to metal implements and will cause pitting, dulling, and rusting with prolonged exposure.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "Part 1: Professional Foundations",
    question: "The FIRST step in disinfecting a pair of scissors between clients is:",
    options: [
      "Immerse in disinfectant solution for the required contact time",
      "Wipe with an alcohol wipe",
      "Remove all visible debris with soap and water (pre-clean)",
      "Rinse with hot water"
    ],
    correctIndex: 2,
    explanation: "Pre-cleaning to remove all visible organic matter (hair, debris) MUST happen before disinfection. Disinfectants cannot penetrate through organic matter and will be ineffective if this step is skipped.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "Part 1: Professional Foundations",
    question: "A hairstylist discovers a client has pediculosis capitis (head lice). The correct action is:",
    options: [
      "Apply a medicated shampoo and complete the service",
      "Refuse the service and refer the client to a physician",
      "Drape extra towels and complete the haircut only",
      "Use disposable gloves and proceed with the service"
    ],
    correctIndex: 1,
    explanation: "Head lice are parasites that spread easily in a salon. The service must be refused, the client referred for treatment, and all implements and linens must be thoroughly cleaned and disinfected.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "Part 1: Professional Foundations",
    question: "The correct response when a client gets hair dye in their eye is:",
    options: [
      "Apply a neutralizing shampoo to the eye",
      "Flush the eye with water for 15 or more minutes",
      "Place a cool cloth over the closed eye",
      "Rinse with a 1:10 bleach solution"
    ],
    correctIndex: 1,
    explanation: "Chemical exposure to eyes requires immediate, prolonged flushing with clean water for a minimum of 15 minutes. Medical attention should follow.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "Part 1: Professional Foundations",
    question: "Which muscle disorder is common among hairstylists due to repetitive gripping and wrist movement?",
    options: [
      "Plantar fasciitis",
      "Lumbar disc herniation",
      "Carpal tunnel syndrome",
      "Rotator cuff tear"
    ],
    correctIndex: 2,
    explanation: "Carpal tunnel syndrome results from repetitive hand/wrist motions and sustained gripping — both very common in hairstyling. Ergonomic shears, neutral wrist position, and stretch breaks help prevent it.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "Part 1: Professional Foundations",
    question: "Which of the following is an example of pre-booking?",
    options: [
      "Calling a client a week after their appointment",
      "Encouraging a client to book their next appointment before leaving",
      "Accepting walk-in clients",
      "Booking multiple clients for the same time slot"
    ],
    correctIndex: 1,
    explanation: "Pre-booking — scheduling the next appointment at the end of the current visit — is the single most effective client retention strategy and provides predictable income for the stylist.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "Part 1: Professional Foundations",
    question: "A hairstylist rents a chair from the salon owner, keeps all earnings, and pays for their own supplies. This model is called:",
    options: [
      "Commission-based employment",
      "Booth rental",
      "Salary employment",
      "Franchise ownership"
    ],
    correctIndex: 1,
    explanation: "Booth rental means the stylist pays rent to the salon owner and operates as a self-employed independent contractor, keeping all revenue and covering all personal business expenses.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "Part 1: Professional Foundations",
    question: "Under the Privacy Act (PIPEDA), client records should be:",
    options: [
      "Posted in the salon for transparency",
      "Kept confidential and accessible only to authorized staff",
      "Shared freely among all salon stylists",
      "Destroyed after each visit to protect client privacy"
    ],
    correctIndex: 1,
    explanation: "PIPEDA requires that personal information be collected for a stated purpose, kept accurate, and protected from unauthorized access. Client records must be confidential.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "Part 1: Professional Foundations",
    question: "Which legislation governs minimum wage, overtime, and vacation pay for salon employees in Ontario?",
    options: [
      "Occupational Health and Safety Act (OHSA)",
      "Ontario College of Trades and Apprenticeship Act",
      "Employment Standards Act (ESA)",
      "Human Rights Code"
    ],
    correctIndex: 2,
    explanation: "The Employment Standards Act (ESA) sets minimum employment standards in Ontario including minimum wage, maximum hours, overtime pay, vacation, and public holidays.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "Part 1: Professional Foundations",
    question: "During a client consultation, the BEST type of question to gather detailed information is:",
    options: [
      "Closed-ended (yes/no)",
      "Leading questions",
      "Open-ended questions",
      "Rhetorical questions"
    ],
    correctIndex: 2,
    explanation: "Open-ended questions like 'Tell me about your current routine' encourage clients to describe their needs in detail, giving the stylist the information needed to plan the service.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "Part 1: Professional Foundations",
    question: "A client complains that their colour result was not what they expected. The FIRST step is to:",
    options: [
      "Offer a full refund immediately",
      "Ask the client to come back and see the manager",
      "Listen fully to the concern without interrupting, then acknowledge their feelings",
      "Explain why the result is correct"
    ],
    correctIndex: 2,
    explanation: "The first step in complaint resolution is always to listen fully and acknowledge the client's feelings without becoming defensive. This de-escalates the situation and demonstrates genuine care.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "Part 1: Professional Foundations",
    question: "A hairstylist sets a goal: 'Add 10 new regular clients within 6 months by attending 2 networking events per month.' This is an example of:",
    options: [
      "A vague aspiration",
      "A SMART goal",
      "A long-term vision statement",
      "A mission statement"
    ],
    correctIndex: 1,
    explanation: "This goal is Specific (10 new clients), Measurable (trackable), Achievable (networking events), Relevant (career growth), and Time-bound (6 months).",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "Part 1: Professional Foundations",
    question: "Which of the following BEST represents comprehensive ongoing professional development for a hairstylist?",
    options: [
      "Relying only on techniques learned during apprenticeship",
      "Attending trade shows, manufacturer training, and following industry publications",
      "Only practicing techniques requested by existing clients",
      "Watching one tutorial video per year"
    ],
    correctIndex: 1,
    explanation: "Professional development requires multiple channels: hands-on training (shows, workshops), product knowledge (manufacturer education), and staying current (publications, social media).",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "Part 1: Professional Foundations",
    question: "Which organization publishes the National Occupational Analysis (NOA) for hairstylists?",
    options: [
      "Skilled Trades Ontario",
      "Ontario College of Trades",
      "Canadian Council of Directors of Apprenticeship (CCDA)",
      "Ontario Ministry of Education"
    ],
    correctIndex: 2,
    explanation: "The NOA is published by the CCDA and defines the skills and knowledge of a trade at the national level. It forms the basis for the Red Seal Interprovincial Standards Program.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "Part 1: Professional Foundations",
    question: "Which of the following is an example of a SHORT-TERM career goal for a newly certified hairstylist?",
    options: [
      "Opening their own salon",
      "Teaching at a cosmetology college",
      "Building clientele to 30 regular clients within one year",
      "Becoming a national brand educator"
    ],
    correctIndex: 2,
    explanation: "Building a regular clientele is a realistic, measurable short-term goal achievable within the first year of practice. The other options are long-term goals requiring years of experience.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "Part 2: Hair & Scalp Science",
    question: "Which layer of the hair shaft is the site of ALL permanent chemical changes including colour, perms, and relaxers?",
    options: [
      "Cuticle",
      "Cortex",
      "Medulla",
      "Dermal papilla"
    ],
    correctIndex: 1,
    explanation: "The cortex is the middle layer of the hair shaft. It contains keratin protein fibers, melanin, and all the chemical bonds (disulfide, hydrogen, ionic) that are modified by chemical services.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "Part 2: Hair & Scalp Science",
    question: "A client's hair stretches when wet but does NOT spring back to its original length. This indicates:",
    options: [
      "Low porosity",
      "High elasticity",
      "Poor elasticity — damaged cortex",
      "Normal porosity"
    ],
    correctIndex: 2,
    explanation: "Good elasticity means hair stretches approximately 50% when wet and returns to original length. Hair that stays stretched has a damaged cortex with over-softened or broken disulfide bonds — it should not receive additional chemical services.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "Part 2: Hair & Scalp Science",
    question: "Which phase of the hair growth cycle is active, involves cell division, and accounts for approximately 85% of scalp hairs at any time?",
    options: [
      "Telogen",
      "Catagen",
      "Anagen",
      "Exogen"
    ],
    correctIndex: 2,
    explanation: "The anagen (growth) phase is active — mitosis occurs in the hair bulb and hair grows ~1–1.5 cm per month. It lasts 2–7 years. 85–90% of scalp hairs are in anagen at any given time.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "Part 2: Hair & Scalp Science",
    question: "Before a chemical colour service, which test is performed 24–48 hours in advance to check for allergic reaction?",
    options: [
      "Strand test",
      "Porosity test",
      "Patch (predisposition) test",
      "Elasticity test"
    ],
    correctIndex: 2,
    explanation: "The patch test detects potential allergic reactions to PPD (para-phenylenediamine) and other chemicals in oxidative colour. A positive reaction (redness, swelling, itching) is a contraindication.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "Part 2: Hair & Scalp Science",
    question: "The parietal ridge is described as:",
    options: [
      "The lowest point of the occipital bone",
      "The widest area of the head, where it begins to curve inward above the ears",
      "The hairline at the nape of the neck",
      "The very top/peak of the crown area"
    ],
    correctIndex: 1,
    explanation: "The parietal ridge is the widest point of the head — a critical reference point in haircutting used to determine weight distribution and where elevation changes.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "Part 2: Hair & Scalp Science",
    question: "Which of the following bonds is the STRONGEST in the hair and provides its primary structural integrity?",
    options: [
      "Hydrogen bonds",
      "Ionic (salt) bonds",
      "Disulfide bonds",
      "Van der Waals forces"
    ],
    correctIndex: 2,
    explanation: "Disulfide bonds (S-S) are the strongest bonds in the hair. They require chemical reducing agents (thio or hydroxide) to break. They provide hair's primary strength, elasticity, and wave/curl pattern.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "Part 2: Hair & Scalp Science",
    question: "A client has high-porosity hair. How will this affect a colour service?",
    options: [
      "The hair will be resistant and need extra processing time",
      "The hair will absorb colour very quickly and may become uneven",
      "The hair will not absorb colour at all",
      "The colour result will be lighter than expected"
    ],
    correctIndex: 1,
    explanation: "High-porosity hair has a raised or damaged cuticle that absorbs products rapidly and unevenly. Colour may process too fast, fade quickly, and appear patchy. A filler or porosity equalizer may be needed.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "Part 2: Hair & Scalp Science",
    question: "A hairstylist is applying a permanent wave solution. The pH of most alkaline (cold wave) perm solutions is approximately:",
    options: [
      "4.5–5.5",
      "7 (neutral)",
      "8–9.5 (alkaline)",
      "12–14 (strongly alkaline)"
    ],
    correctIndex: 2,
    explanation: "Alkaline perm solutions have a pH of approximately 8–9.5. This alkalinity is necessary to open the cuticle and allow the reducing agent (ATG) to penetrate the cortex and break disulfide bonds.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "Part 2: Hair & Scalp Science",
    question: "A client presents with circular, scaly, hair-breaking patches on the scalp consistent with tinea capitis. The hairstylist should:",
    options: [
      "Apply a medicated antifungal shampoo and proceed with a haircut",
      "Refuse the service, refer to a physician, and thoroughly disinfect all implements",
      "Apply a clarifying shampoo to remove the flakes and continue",
      "Proceed with a colour service only, avoiding the affected patches"
    ],
    correctIndex: 1,
    explanation: "Tinea capitis is a highly contagious fungal infection. It is a contraindication for all salon services. The client must be refused, referred to a physician for antifungal treatment, and all implements must be disinfected.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "Part 2: Hair & Scalp Science",
    question: "Which massage movement involves kneading, lifting, and circular pressure to stimulate blood circulation in the scalp?",
    options: [
      "Effleurage",
      "Tapotement",
      "Petrissage",
      "Vibration"
    ],
    correctIndex: 2,
    explanation: "Petrissage uses kneading and lifting movements that stimulate blood circulation and sebaceous gland activity in the scalp.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "Part 2: Hair & Scalp Science",
    question: "Healthy hair and scalp have a pH of approximately:",
    options: [
      "7.0 (neutral)",
      "8.5 (mildly alkaline)",
      "4.5–5.5 (slightly acidic)",
      "2.0–3.0 (strongly acidic)"
    ],
    correctIndex: 2,
    explanation: "Healthy hair and scalp are slightly acidic (pH 4.5–5.5). This natural acid mantle keeps the cuticle closed and smooth and provides some protection against bacteria and fungi.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "Part 2: Hair & Scalp Science",
    question: "Which type of shampoo should be used BEFORE a chemical service to remove product buildup and ensure even processing?",
    options: [
      "Moisturizing shampoo",
      "Anti-dandruff shampoo",
      "Clarifying shampoo",
      "Color-safe shampoo"
    ],
    correctIndex: 2,
    explanation: "Clarifying shampoo removes residue from styling products, dry shampoo, and hard water minerals. Buildup creates a barrier that prevents chemicals from penetrating evenly.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "Part 2: Hair & Scalp Science",
    question: "A protein reconstructor is best used on:",
    options: [
      "Fine hair before a volumizing service",
      "Normal, healthy hair for extra shine",
      "Severely damaged, brittle, or overprocessed hair",
      "Oily hair to reduce sebum production"
    ],
    correctIndex: 2,
    explanation: "Protein reconstructors deposit hydrolyzed proteins into the cortex to rebuild strength in damaged hair. They are specifically designed for overprocessed, brittle, or chemically compromised hair.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "Part 3: Cutting and Styling",
    question: "A haircut performed at 0° elevation produces which result?",
    options: [
      "Even layers throughout",
      "Maximum weight at the perimeter with no interior layers",
      "Short at the nape, long on top",
      "Uniform removal of weight"
    ],
    correctIndex: 1,
    explanation: "0° elevation means no lifting — hair is combed to its natural fall and cut. All hair meets at the perimeter, creating maximum weight there with no layering above.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "Part 3: Cutting and Styling",
    question: "Which cutting line creates a classic graduated (stacked) bob with a shorter back and longer front?",
    options: [
      "Horizontal",
      "Vertical",
      "Diagonal forward",
      "Diagonal back"
    ],
    correctIndex: 3,
    explanation: "A diagonal back cutting line (angled from a lower back to higher front) creates a longer back and shorter front — the classic A-line and graduated bob shape.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "Part 3: Cutting and Styling",
    question: "The most important variable for controlling weight distribution in any haircut is:",
    options: [
      "The type of scissors used",
      "The elevation (angle of lifting) of the hair",
      "The thickness of each subsection",
      "The direction of the part"
    ],
    correctIndex: 1,
    explanation: "Elevation controls everything: 0° = maximum perimeter weight; 45° = graduated weight; 90° = evenly distributed layers; over 90° = longer exterior weight. It is the primary structural variable.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "Part 3: Cutting and Styling",
    question: "A traveling (moving) guide is BEST used when cutting:",
    options: [
      "A blunt one-length bob",
      "A graduated nape",
      "Uniform or long layers throughout the head",
      "A precision perimeter line"
    ],
    correctIndex: 2,
    explanation: "A traveling guide moves section by section through the head, carrying the length measurement forward. It is the correct technique for layered cuts where length needs to be distributed evenly throughout.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "Part 3: Cutting and Styling",
    question: "Point cutting is a texturizing technique that:",
    options: [
      "Removes weight by cutting parallel to the hair shaft",
      "Softens and breaks the perimeter cutting line by cutting into the ends with the scissor tips",
      "Creates maximum weight at the ends",
      "Uses the razor to feather the ends"
    ],
    correctIndex: 1,
    explanation: "Point cutting places scissor tips into the ends of a subsection at varying depths and cuts upward, creating a soft, broken, non-blunt finish — removing scissor marks and adding movement.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "Part 3: Cutting and Styling",
    question: "Cross-checking a haircut serves which purpose?",
    options: [
      "Adds texture to the ends",
      "Verifies evenness and balance by examining the cut from the opposite direction it was performed",
      "Removes bulk from thick sections",
      "Determines the final styling technique to use"
    ],
    correctIndex: 1,
    explanation: "Cross-checking involves re-sectioning the hair in the perpendicular direction from the original cutting direction to verify that all sections are even and no areas were missed or unbalanced.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "Part 3: Cutting and Styling",
    question: "Which tool is MOST appropriate for creating a soft, feathered, textured finish on a wet bob haircut?",
    options: [
      "Thinning shears",
      "Straight-edge razor / feather razor",
      "Electric clippers",
      "Trimmer outliner"
    ],
    correctIndex: 1,
    explanation: "The straight/feather razor creates soft, diffused, feathered ends on wet hair. It is ideal for textured, deconstructed shapes and should always be used on wet hair to avoid pulling and damage.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "Part 3: Cutting and Styling",
    question: "A hairstylist cuts the nape area by holding the comb horizontally against the skin at an angle and running scissors across the comb teeth. This technique is called:",
    options: [
      "Point cutting",
      "Clipper-over-comb",
      "Scissors-over-comb",
      "Razor over comb"
    ],
    correctIndex: 2,
    explanation: "Scissors-over-comb is the classic barbering and precision cutting technique where the comb acts as a guide and the scissors cut across it — allowing very close tapering and graduation without a clipper.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "Part 3: Cutting and Styling",
    question: "What is the chemical basis for all temporary wet and thermal styling?",
    options: [
      "Breaking and re-forming disulfide bonds",
      "Breaking and re-forming hydrogen bonds",
      "Breaking peptide bonds with heat",
      "Oxidizing the melanin in the cortex"
    ],
    correctIndex: 1,
    explanation: "Hydrogen bonds are broken by water (wet) or heat (thermal). When hair dries or cools in a new position, hydrogen bonds re-form in the new shape — holding the style. This is why wet sets and blow-drying work.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "Part 3: Cutting and Styling",
    question: "The \"cool shot\" at the end of blow-drying a section serves to:",
    options: [
      "Remove moisture quickly from the hair",
      "Lock the style in place by re-forming hydrogen bonds as the hair cools",
      "Open the cuticle for better product absorption",
      "Reduce the time needed to style the next section"
    ],
    correctIndex: 1,
    explanation: "The cool shot closes the cuticle (adding shine) and re-forms the hydrogen bonds that were temporarily broken by the heat. This \"sets\" the blow-dry shape and significantly extends the longevity of the style.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "Part 3: Cutting and Styling",
    question: "Applying a flat iron to slightly damp hair causes a sizzling sound. This means:",
    options: [
      "The heat protectant is activating correctly",
      "The temperature setting is appropriate",
      "Steam is damaging the hair protein structure — this is a serious error",
      "The iron needs to be cleaned"
    ],
    correctIndex: 2,
    explanation: "The sizzle is water turning to steam inside the hair shaft under a closed iron. The rapid expansion of steam ruptures the hair cortex from within, causing severe, irreversible thermal damage.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "Part 3: Cutting and Styling",
    question: "A diffuser attachment on a blow dryer is MOST appropriate for:",
    options: [
      "Creating a very smooth, straight blow-dry",
      "Enhancing natural curl or wave pattern with minimal disruption",
      "Rapid rough-drying of thick, straight hair",
      "Directing airflow for precision root lift"
    ],
    correctIndex: 1,
    explanation: "Diffusers disperse airflow gently and widely, reducing the direct airforce that would disrupt and frizz curly hair. They allow curls to dry in their natural pattern with definition and reduced frizz.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "Part 3: Cutting and Styling",
    question: "Which styling product provides the HIGHEST hold level with a wet/high-gloss finish?",
    options: [
      "Mousse",
      "Serum",
      "Gel (strong-hold)",
      "Heat protectant"
    ],
    correctIndex: 2,
    explanation: "Strong-hold gel creates a rigid polymer film around each hair strand when it dries, providing the highest hold of common styling products with a wet, glossy appearance.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "Part 3: Cutting and Styling",
    question: "A Dutch braid differs from a French braid in that:",
    options: [
      "It uses four strands instead of three",
      "The strands cross under instead of over, creating a raised braid above the scalp",
      "It is done only at the nape of the neck",
      "It uses added hair extensions throughout"
    ],
    correctIndex: 1,
    explanation: "The Dutch braid (reverse/inside-out French braid) crosses strands under the center — the opposite of a French braid — creating a 3D raised effect on top of the scalp.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "Part 3: Cutting and Styling",
    question: "The LOC method for natural hair refers to:",
    options: [
      "Length, Oil, Conditioning",
      "Liquid, Oil, Cream — a moisture-sealing layering technique",
      "Leave-in, Oil, Curl cream — always applied to dry hair only",
      "Low heat, Oil treatment, Cold rinse"
    ],
    correctIndex: 1,
    explanation: "LOC stands for Liquid (water or leave-in conditioner), Oil (seals the moisture in), and Cream (provides additional hold and sealing). It is a popular layering method for natural, coily textures to maximize moisture retention.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "Part 4: Chemical Services",
    question: "What is the primary reducing agent in a standard alkaline cold wave perm?",
    options: [
      "Hydrogen peroxide",
      "Sodium hydroxide",
      "Ammonium thioglycolate (ATG)",
      "Glyceryl monothioglycolate (GMTG)"
    ],
    correctIndex: 2,
    explanation: "Ammonium thioglycolate (ATG) is the active reducing agent in alkaline cold wave perms. It breaks disulfide bonds in the cortex at room temperature. GMTG is used in acid perms.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "Part 4: Chemical Services",
    question: "The purpose of the neutralizer in a permanent wave is to:",
    options: [
      "Lower the pH of the hair after waving lotion",
      "Re-form disulfide bonds in their new position to make the curl permanent",
      "Remove the waving lotion from the hair",
      "Add moisture lost during processing"
    ],
    correctIndex: 1,
    explanation: "Neutralization (oxidation) re-forms the broken disulfide bonds in the new configuration around the perm rod — permanently locking in the curl. Without proper neutralization, the curl will not last.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "Part 4: Chemical Services",
    question: "An acid wave perm differs from an alkaline cold wave in that:",
    options: [
      "It uses a stronger reducing agent and requires no heat",
      "It is gentler on the hair, has a lower pH (4.5–6.5), and requires heat for activation",
      "It uses hydrogen peroxide as the reducing agent",
      "It processes much faster at room temperature"
    ],
    correctIndex: 1,
    explanation: "Acid perms use glyceryl monothioglycolate (GMTG) at a lower pH (4.5–6.5), which is gentler on the hair and scalp. They require added heat (hood dryer or exothermic activation) to process and are recommended for colour-treated or sensitized hair.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "Part 4: Chemical Services",
    question: "The S-test during perm processing checks for:",
    options: [
      "The correct neutralizer application time",
      "Whether the hair has softened enough to take on the shape of the rod",
      "The porosity of the finished curl",
      "The pH level of the waving lotion after application"
    ],
    correctIndex: 1,
    explanation: "The S-test involves gently unrolling a rod at the nape to see if the hair forms an S-shape matching the rod size — indicating sufficient processing. Under-processed hair shows a weak or flat S.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "Part 4: Chemical Services",
    question: "Which rod type produces a tighter curl at the mid-shaft and softer curl at the roots and ends, helping to reduce root kinking?",
    options: [
      "Straight/cylindrical rod",
      "Concave (hourglass) rod",
      "Spiral rod",
      "Bender rod"
    ],
    correctIndex: 1,
    explanation: "Concave rods have a smaller diameter at the center and larger at the ends. This creates tighter curls at the mid-shaft and a gentler bend at the roots — reducing the common \"root kink\" seen with straight rods.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "Part 4: Chemical Services",
    question: "Over-processing during a perm results in:",
    options: [
      "Insufficient curl formation and straight ends",
      "Excessive curl, mushy texture, and potential breakage from over-softened disulfide bonds",
      "A stronger, more defined curl than expected",
      "Colour fading if the client also has tinted hair"
    ],
    correctIndex: 1,
    explanation: "Over-processing occurs when the waving lotion is left on too long, breaking too many bonds. The hair becomes over-softened and mushy, loses its strength, and may break. The curl will have no spring and may not form at all.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "Part 4: Chemical Services",
    question: "Lanthionization describes the chemical process in which:",
    options: [
      "Disulfide bonds are broken by ATG and re-formed by neutralizer in perming",
      "Hydroxide relaxers permanently break disulfide bonds, creating irreversible monosulfide lanthionine bonds",
      "The hair's melanin is permanently removed by bleaching agents",
      "Hydrogen bonds are broken by heat during flat ironing"
    ],
    correctIndex: 1,
    explanation: "Lanthionization is the permanent, irreversible process caused by hydroxide relaxers (lye and no-lye). Disulfide bonds are broken and replaced by single lanthionine bonds — this CANNOT be neutralized or reversed.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "Part 4: Chemical Services",
    question: "During a retouch relaxer service, the product must be applied:",
    options: [
      "To the entire head of hair from roots to ends",
      "Only to the new growth, never overlapping onto previously relaxed hair",
      "Starting at the ends and working toward the roots",
      "To the scalp area only, not the hair shaft"
    ],
    correctIndex: 1,
    explanation: "Overlap onto previously relaxed hair is the most common cause of relaxer-related breakage. Previously relaxed hair is already lanthionized — additional hydroxide causes severe over-softening and breakage.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "Part 4: Chemical Services",
    question: "The CRITICAL incompatibility in chemical hair services is:",
    options: [
      "Using a moisturizing shampoo before a perm",
      "Applying a thio-based product (perm or relaxer) to hair previously treated with a hydroxide relaxer",
      "Using a protein treatment before a colour service",
      "Applying a deep conditioner before a haircut"
    ],
    correctIndex: 1,
    explanation: "Thio chemistry and hydroxide chemistry are fundamentally incompatible. Applying thio to hair that has been hydroxide-relaxed causes extreme softening and catastrophic breakage — this is one of the most dangerous errors in chemical hairstyling.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "Part 4: Chemical Services",
    question: "Why should a hairstylist NOT shampoo the client's hair 24–48 hours before a sodium hydroxide relaxer service?",
    options: [
      "To ensure the hair is in a dirty, oily state for better product adhesion",
      "Shampooing removes the scalp's natural protective oil barrier, increasing the risk of scalp irritation and burns",
      "Shampooing makes the hair swell, reducing the effectiveness of the relaxer",
      "Shampooing would dilute the relaxer chemistry"
    ],
    correctIndex: 1,
    explanation: "The scalp's natural sebum provides a small but meaningful protective barrier against the highly alkaline relaxer (pH 12–14). Removing this barrier by shampooing close to the service increases the risk of scalp irritation and chemical burns.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "Part 4: Chemical Services",
    question: "A neutralizing shampoo used after a relaxer service is designed to:",
    options: [
      "Add protein to rebuild the damaged cortex",
      "Return the hair pH to acidic range and confirm complete relaxer removal",
      "Provide moisture to chemically dry hair",
      "Activate the remaining relaxer for final processing"
    ],
    correctIndex: 1,
    explanation: "Neutralizing shampoo contains pH-lowering agents to counteract the highly alkaline relaxer and a colour indicator (pink to clear) to show when all relaxer residue is completely removed.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "Part 4: Chemical Services",
    question: "On the level scale, which number represents the darkest hair?",
    options: [
      "10",
      "7",
      "1",
      "5"
    ],
    correctIndex: 2,
    explanation: "Level 1 is the darkest (black). Level 10 is the lightest (lightest blonde). The level system measures only lightness/darkness, not tone.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "Part 4: Chemical Services",
    question: "The complementary colour used to neutralize orange/brassy tones is:",
    options: [
      "Red",
      "Blue (or blue-based ash)",
      "Yellow",
      "Violet"
    ],
    correctIndex: 1,
    explanation: "Orange and blue are complementary (opposite on the colour wheel). Blue-based ash toners neutralize orange brassiness by canceling out the warm orange pigment.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "Part 4: Chemical Services",
    question: "Which developer volume produces approximately 2 levels of lift when used with permanent oxidative colour?",
    options: [
      "5 vol. (1.5%)",
      "10 vol. (3%)",
      "20 vol. (6%)",
      "30 vol. (9%)"
    ],
    correctIndex: 3,
    explanation: "20 vol. provides 1–2 levels of lift (standard). 30 vol. provides 2–3 levels of lift, making it the correct answer for approximately 2 levels of lift in a colour service.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "Part 4: Chemical Services",
    question: "A client has naturally dark brown (Level 3) hair and wants to achieve a pale blonde (Level 9). The correct approach is:",
    options: [
      "Apply a Level 9 permanent colour with 40 vol. developer directly",
      "Pre-lighten with bleach to achieve the required level first, then apply a toner",
      "Apply a high-lift colour at 20 vol. in one step",
      "Apply a demi-permanent Level 9 shade"
    ],
    correctIndex: 1,
    explanation: "A 6-level lift (from Level 3 to Level 9) cannot be achieved with permanent colour — the maximum lift is typically 3–4 levels with high-lift at 40 vol. The correct approach is bleach pre-lightening to the target pale yellow, then toning.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "Part 4: Chemical Services",
    question: "Balayage differs from traditional foil highlighting in that:",
    options: [
      "It uses stronger bleach formulas for faster results",
      "Colour is painted freehand onto the surface of sections without foil, creating a soft, graduated, sun-kissed effect",
      "It requires higher-volume developer (40 vol.) in all cases",
      "It must be done on dry hair only"
    ],
    correctIndex: 1,
    explanation: "Balayage is a freehand technique — colour or lightener is painted onto selected surface areas without foil. The open-air processing creates a softer, more graduated, natural result compared to the more precise, even result of foiling.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "Part 4: Chemical Services",
    question: "Eumelanin is responsible for which hair colours?",
    options: [
      "Red and golden blonde tones only",
      "Black to brown hair colours",
      "White hair (lack of melanin)",
      "Copper and strawberry blonde tones"
    ],
    correctIndex: 1,
    explanation: "Eumelanin produces black to brown hair colours. Pheomelanin produces red to yellow-gold tones. The two types combine in varying ratios to produce all natural hair colours.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "Part 4: Chemical Services",
    question: "When formulating a permanent colour to cover resistant white hair, a hairstylist should:",
    options: [
      "Use a lighter level than the target to compensate for the white",
      "Add a warm base or mix a warm complementary shade into the formula to improve coverage",
      "Use only 10 vol. developer for maximum deposit",
      "Avoid using any tone — use only natural/neutral shades"
    ],
    correctIndex: 1,
    explanation: "Resistant white hair often has a tightly closed cuticle and no underlying pigment. Adding a warm-base shade helps the colour penetrate and provides a more even, full coverage result.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "Part 4: Chemical Services",
    question: "The maximum recommended developer volume for on-scalp bleach application is:",
    options: [
      "10 vol.",
      "20–30 vol.",
      "40 vol.",
      "50 vol."
    ],
    correctIndex: 1,
    explanation: "For on-scalp bleach (root touch-up lightening), a maximum of 20–30 vol. developer is recommended. The scalp's natural body heat accelerates processing. 40 vol. on scalp creates significant risk of burns and damage.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "Part 4: Chemical Services",
    question: "Remy human hair extensions are distinguished from non-Remy by:",
    options: [
      "Being made of synthetic fibers that closely mimic human hair",
      "Having all cuticles aligned in the same direction (root to tip) — preventing tangling",
      "Being the least expensive type of extension available",
      "Requiring no maintenance after application"
    ],
    correctIndex: 1,
    explanation: "Remy hair has cuticles all aligned root-to-tip, which prevents tangling and matting. Non-Remy hair has mixed cuticle directions and often relies on silicone coating to smooth initially.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "Part 4: Chemical Services",
    question: "Which extension method requires NO heat and NO adhesive for application?",
    options: [
      "Keratin bond (K-tip) fusion",
      "Tape-in extensions",
      "Micro-ring / micro-bead (cold fusion)",
      "Sew-in / weave"
    ],
    correctIndex: 2,
    explanation: "Micro-ring/micro-bead extensions use a small metal ring crimped with pliers to attach the extension to natural hair — no heat and no adhesive are involved, which is why they are called \"cold fusion.\"",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "Part 4: Chemical Services",
    question: "Why should oil-based products be avoided near tape-in extension bonds?",
    options: [
      "Oil discolours the tape",
      "Oil breaks down the adhesive bond, causing premature slippage and extension loss",
      "Oil causes the extension hair to tangle",
      "Oil causes a chemical reaction with the human extension hair"
    ],
    correctIndex: 1,
    explanation: "The medical-grade adhesive used in tape-in extensions is broken down by oils and oil-based products. Contact with oils causes the bond to loosen prematurely, leading to extension slippage and loss.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "Part 4: Chemical Services",
    question: "Which extension method carries the HIGHEST risk of traction alopecia if applied incorrectly?",
    options: [
      "Clip-in extensions (temporary)",
      "Micro-ring / micro-bead extensions",
      "Sew-in weave with tight cornrows",
      "Tape-in extensions"
    ],
    correctIndex: 2,
    explanation: "Sew-in weave requires the natural hair to be tightly braided into cornrows. If the cornrows are excessively tight, the constant tension causes traction alopecia, particularly along the hairline and temples.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "Under OHSA, which right allows a worker to stop work they believe is unsafe without fear of penalty?",
    options: [
      "Right to Know",
      "Right to Participate",
      "Right to Refuse",
      "Right to Resign"
    ],
    correctIndex: 2,
    explanation: "The Right to Refuse unsafe work is protected by OHSA. Workers cannot be penalized (fired, demoted, disciplined) for exercising this right.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "What WHMIS pictogram indicates a flammable substance?",
    options: [
      "Skull and crossbones",
      "Flame symbol",
      "Exclamation mark",
      "Health hazard (star burst)"
    ],
    correctIndex: 1,
    explanation: "The flame pictogram is used under WHMIS 2015 (GHS) for flammable gases, liquids, solids, and aerosols.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "Which of the following correctly describes sterilization?",
    options: [
      "Reduces the number of pathogens to a safe level",
      "Kills most but not all pathogens on non-living surfaces",
      "Destroys all microorganisms including bacterial spores",
      "Removes visible debris from implements"
    ],
    correctIndex: 2,
    explanation: "Sterilization is the highest level of decontamination — it destroys ALL microorganisms including the most resistant bacterial endospores.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "The FIRST and most critical step before disinfecting implements is:",
    options: [
      "Immersing in quat solution",
      "Pre-cleaning to remove all visible organic matter",
      "Rinsing with alcohol",
      "Placing in UV cabinet"
    ],
    correctIndex: 1,
    explanation: "Organic matter (blood, hair, product) blocks disinfectants from reaching the surface. Pre-cleaning is always the first step — disinfection is ineffective on soiled implements.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "Which hair condition is a CONTRAINDICATION requiring the hairstylist to refuse all services?",
    options: [
      "Dry dandruff (pityriasis capitis simplex)",
      "Seborrhea",
      "Tinea capitis (scalp ringworm)",
      "Alopecia areata"
    ],
    correctIndex: 2,
    explanation: "Tinea capitis is a highly contagious fungal infection. All services must be refused, the client referred to a physician, and all implements disinfected.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "The cortex is the site of ALL permanent chemical changes because it contains:",
    options: [
      "Melanin and disulfide bonds in the keratinized protein structure",
      "The cuticle scales that control absorption",
      "Air pockets and medullary cells",
      "The dermal papilla and blood supply"
    ],
    correctIndex: 0,
    explanation: "The cortex contains keratin chains linked by disulfide bonds, hydrogen bonds, and ionic bonds, plus melanin. All permanent colour, perm, and relaxer chemistry targets the cortex.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "A client's hair stretches 50% when wet and springs back fully. This indicates:",
    options: [
      "Poor elasticity requiring a protein treatment before any service",
      "Normal, healthy elasticity",
      "High porosity requiring a pre-service filler",
      "Excessive moisture — the hair should be dried before consultation"
    ],
    correctIndex: 1,
    explanation: "Healthy hair stretches approximately 50% of its length when wet and returns to its original length. This is the definition of normal elasticity, indicating a healthy cortex.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "The ANAGEN phase of hair growth lasts approximately:",
    options: [
      "2–3 weeks",
      "3–4 months",
      "2–7 years",
      "1–2 days"
    ],
    correctIndex: 2,
    explanation: "The anagen (active growth) phase lasts 2–7 years. Hair grows approximately 1–1.5 cm per month. Longer anagen = longer potential maximum hair length.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "Which massage movement opens and closes the scalp massage treatment and produces a relaxing, soothing effect?",
    options: [
      "Petrissage",
      "Tapotement",
      "Vibration",
      "Effleurage"
    ],
    correctIndex: 3,
    explanation: "Effleurage uses light, slow, gliding strokes. It is the opening and closing movement of every scalp massage, producing relaxation and promoting lymphatic drainage.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "A 90° elevation in haircutting produces which weight distribution?",
    options: [
      "Maximum weight at the perimeter",
      "Weight line above the perimeter (graduation)",
      "Even, distributed layers throughout with no perimeter concentration",
      "Minimal weight at the nape only"
    ],
    correctIndex: 2,
    explanation: "90° elevation (hair held straight out from the head) creates a round layer — weight is evenly distributed throughout. No perimeter concentration; no graduation.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "A traveling guide is used when cutting:",
    options: [
      "Blunt one-length perimeters",
      "Graduated nape areas",
      "Uniform layers throughout the head",
      "Precision fringes (bangs)"
    ],
    correctIndex: 2,
    explanation: "A traveling guide moves section by section through the haircut, carrying length information forward — it is the correct guide type for layered cuts (uniform layers and long layers).",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "The \"cool shot\" at the end of blow-drying locks in the style by:",
    options: [
      "Removing excess moisture rapidly from the hair shaft",
      "Closing the cuticle and re-forming hydrogen bonds in the new position",
      "Breaking and re-forming disulfide bonds through heat and cold cycles",
      "Activating the heat protectant product"
    ],
    correctIndex: 1,
    explanation: "Cool air closes the cuticle (increasing shine) and re-forms the hydrogen bonds that were broken by heat — \"setting\" the shape created during blow-drying.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "Which styling product provides the highest hold and a wet, high-gloss finish?",
    options: [
      "Mousse",
      "Shine serum",
      "Strong-hold gel",
      "Hair wax"
    ],
    correctIndex: 2,
    explanation: "Strong-hold gel forms a rigid polymer film around hair that provides maximum hold and a wet, high-gloss look when it dries.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "In perm chemistry, neutralization re-forms disulfide bonds by:",
    options: [
      "Breaking them with ammonium thioglycolate",
      "Reducing the alkalinity with an acid rinse",
      "Oxidizing the open sulfur bonds back into disulfide linkages in the new position",
      "Removing the waving lotion with a clarifying shampoo"
    ],
    correctIndex: 2,
    explanation: "Neutralization is an oxidation reaction. The neutralizer (hydrogen peroxide or sodium bromate) oxidizes the open sulfur atoms (created by ATG) back into disulfide bonds, locked in the shape of the rod.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "Acid wave perms require which additional step that alkaline (cold wave) perms do not?",
    options: [
      "A pre-service clarifying shampoo",
      "Heat (from a hood dryer or the exothermic activator)",
      "Neutralization with hydrogen peroxide",
      "A patch test 24–48 hours before service"
    ],
    correctIndex: 1,
    explanation: "Acid wave perms use glyceryl monothioglycolate (GMTG), which requires heat to be activated and penetrate the cortex effectively. Alkaline (cold wave) perms process at room temperature without added heat.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "Overlapping a relaxer retouch onto previously relaxed hair causes:",
    options: [
      "Improved straightening results on the previously processed hair",
      "Severe over-processing and breakage — the most common error in relaxer services",
      "A temporary darkening of the previously relaxed section",
      "Improved shine on the previously processed length"
    ],
    correctIndex: 1,
    explanation: "Previously relaxed hair has already been lanthionized. Additional hydroxide relaxer causes extreme over-softening of the already-processed hair, resulting in severe breakage or dissolution.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "Level 1 on the hair level scale represents:",
    options: [
      "Lightest blonde",
      "Medium brown",
      "Darkest black",
      "Dark blonde"
    ],
    correctIndex: 2,
    explanation: "The level scale runs from 1 (darkest/black) to 10 (lightest blonde). Level 1 is black; Level 10 is the lightest blonde.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "To neutralize an orange, brassy tone left after lightening, the correct toner choice is:",
    options: [
      "A warm gold toner",
      "A blue or blue-ash based toner",
      "A red-based toner",
      "A violet/purple toner"
    ],
    correctIndex: 1,
    explanation: "Orange and blue are complementary colours — they neutralize each other. A blue or blue-ash toner is applied after lightening to cancel orange brassiness, typically at Level 7 underlying pigment.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "Which developer volume provides the standard lift for permanent hair colour (1–2 levels of lift)?",
    options: [
      "5 vol. (1.5%)",
      "10 vol. (3%)",
      "20 vol. (6%)",
      "40 vol. (12%)"
    ],
    correctIndex: 2,
    explanation: "20 vol. (6% hydrogen peroxide) is the standard developer for permanent colour — providing 1–2 levels of lift. 10 vol. is used for deposit-only or grey coverage; 30 vol. for 2–3 levels; 40 vol. for maximum lift.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "Remy human hair extensions are preferred over non-Remy because:",
    options: [
      "They are less expensive",
      "All cuticles are aligned in the same direction, preventing tangling and matting",
      "They can be coloured with temporary colour only",
      "They are made from heat-resistant synthetic fibers"
    ],
    correctIndex: 1,
    explanation: "Remy hair has all cuticles aligned root-to-tip. Aligned cuticles lay flat and do not catch on each other, preventing tangling, matting, and premature wear.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "Which type of shampoo should be used before a chemical service to remove product buildup?",
    options: [
      "Moisturizing shampoo",
      "Clarifying (chelating) shampoo",
      "Colour-safe sulfate-free shampoo",
      "Baby shampoo"
    ],
    correctIndex: 1,
    explanation: "Clarifying shampoo removes styling product residue, hard water mineral deposits, and excess oils that would otherwise act as a barrier to even chemical penetration.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "The parietal ridge is the:",
    options: [
      "Peak of the crown",
      "Widest area of the head where it begins to curve inward above the ears",
      "Bony prominence at the back of the skull",
      "Hairline at the nape of the neck"
    ],
    correctIndex: 1,
    explanation: "The parietal ridge is the widest point of the head — the area where the skull begins to curve inward toward the top. It is the primary reference for weight distribution in haircutting.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "Which face shape is considered the most versatile because almost any hairstyle is flattering?",
    options: [
      "Square",
      "Round",
      "Oval",
      "Oblong"
    ],
    correctIndex: 2,
    explanation: "The oval face shape is considered the ideal in hairstyling because its balanced proportions mean almost any cut, length, or style will be flattering. All other shapes are typically styled to create the illusion of an oval.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "The Employment Standards Act (ESA) governs:",
    options: [
      "Workplace safety and hazard communication",
      "Minimum wage, hours of work, vacation pay, and termination notice",
      "Trade certification and apprenticeship registration",
      "Privacy of client records and personal information"
    ],
    correctIndex: 1,
    explanation: "The ESA sets minimum employment standards in Ontario including minimum wage, maximum hours, overtime, vacation pay, public holidays, pregnancy and parental leave, and termination requirements.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "SMART goal setting stands for:",
    options: [
      "Simple, Meaningful, Aligned, Reasonable, Timed",
      "Specific, Measurable, Achievable, Relevant, Time-bound",
      "Strategic, Manageable, Attainable, Rational, Trackable",
      "Structured, Mindful, Ambitious, Realistic, Thorough"
    ],
    correctIndex: 1,
    explanation: "SMART = Specific, Measurable, Achievable, Relevant, Time-bound. Each element transforms a vague aspiration into an actionable, trackable plan.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "Which of the following is an example of petrissage in scalp massage?",
    options: [
      "Light, smooth gliding strokes across the scalp with flat palms",
      "Firm kneading and circular lifting movements with thumbs and fingertips",
      "Rapid tapping with the fingertips to stimulate circulation",
      "Fine, rapid trembling movements to reduce muscle tension"
    ],
    correctIndex: 1,
    explanation: "Petrissage uses kneading, lifting, and circular pressure — it is the main body of the scalp massage and stimulates blood circulation and the sebaceous glands.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "Which layer of skin contains the hair follicles, sebaceous glands, and blood vessels?",
    options: [
      "Epidermis",
      "Dermis",
      "Hypodermis",
      "Stratum corneum"
    ],
    correctIndex: 1,
    explanation: "The dermis is the middle layer of the skin. It houses hair follicles, sebaceous glands, sweat glands, blood vessels, nerve endings, collagen, and elastin.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "Pre-booking at the end of a client's appointment means:",
    options: [
      "Charging the client in advance for the next service",
      "Scheduling the client's next appointment before they leave the salon",
      "Calling the client the day before their scheduled appointment",
      "Booking multiple services in a single appointment"
    ],
    correctIndex: 1,
    explanation: "Pre-booking is the practice of scheduling the next appointment at the end of the current visit. It is the most effective client retention strategy and provides predictable income for the stylist.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "A patch (predisposition) test for colour is applied how far in advance of the service?",
    options: [
      "Immediately before the service",
      "1 hour before the service",
      "24–48 hours before the service",
      "One week before the service"
    ],
    correctIndex: 2,
    explanation: "The patch test must be applied 24–48 hours before the service to allow sufficient time for a delayed hypersensitivity reaction to develop. Applying it immediately before is not sufficient.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "The S-test during permanent waving checks whether:",
    options: [
      "The neutralizer has been rinsed completely",
      "The hair has softened sufficiently to take the curl shape of the rod",
      "The waving lotion pH is within the correct range",
      "The rod placement is even throughout the head"
    ],
    correctIndex: 1,
    explanation: "The S-test involves gently unrolling a test rod (usually at the nape) to see if the hair forms an S-shape equal to the rod diameter — confirming that sufficient reduction (softening) has occurred.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "Which bond is broken by water and heat and re-forms when hair dries or cools?",
    options: [
      "Disulfide bond",
      "Peptide bond",
      "Hydrogen bond",
      "Ionic (salt) bond"
    ],
    correctIndex: 2,
    explanation: "Hydrogen bonds are weak, temporary bonds broken by water and heat. They re-form as the hair dries or cools around a new shape — the chemical basis for all wet and thermal styling.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "A graduate bob differs from a one-length (blunt) cut in that:",
    options: [
      "It uses 90° elevation throughout",
      "Hair is stacked above the perimeter by cutting at angles between 1–89°, creating a weight line above the nape",
      "It requires no guide",
      "The back is longer than the front in all variations"
    ],
    correctIndex: 1,
    explanation: "A graduated (stacked) cut uses angles between 1–89° elevation, building weight and stacking the hair above the perimeter line — creating the characteristic \"stacked\" shape above the nape.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "Which of the following is NOT a role of the dermal papilla?",
    options: [
      "Supplying blood to the hair bulb",
      "Delivering oxygen and nutrients for hair growth",
      "Producing sebum to lubricate the hair shaft",
      "Providing the signals that initiate and sustain hair growth"
    ],
    correctIndex: 2,
    explanation: "The dermal papilla is the vascular connector at the base of the follicle — it delivers blood, oxygen, and growth signals. Sebum is produced by the sebaceous gland, which is a separate structure.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "WHMIS 2015 requires all three of the following EXCEPT:",
    options: [
      "Hazard labels on all controlled products",
      "Safety Data Sheets (SDS) for all hazardous products",
      "Worker education and training about hazards",
      "A government inspector present during all chemical applications"
    ],
    correctIndex: 3,
    explanation: "WHMIS 2015 requires labels, SDS, and worker education. A government inspector is not required to be present during normal salon operations.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "The \"law of colour\" in hair colouring refers to:",
    options: [
      "Provincial regulations governing colour product use",
      "The principle that mixing complementary (opposite) colours neutralizes them, and primary colours combine to produce all others",
      "The rule that colour should always be applied darker than the target level",
      "The formula for calculating developer volume"
    ],
    correctIndex: 1,
    explanation: "The law of colour in pigment theory describes how the three primary colours (red, yellow, blue) combine to make all others, and how complementary colour pairs (red/green, orange/blue, yellow/violet) neutralize each other.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "Which extension method uses a curved needle and thread to attach wefts to braided cornrows?",
    options: [
      "Tape-in",
      "Micro-ring (cold fusion)",
      "Sew-in weave",
      "Keratin bond (K-tip fusion)"
    ],
    correctIndex: 2,
    explanation: "The sew-in weave method involves braiding the natural hair into cornrows and sewing weft extension hair to the cornrows with a special curved needle and thread.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "The purpose of using an end paper (end wrap) when winding perm rods is to:",
    options: [
      "Speed up the chemical processing",
      "Protect the delicate hair tips and ensure they lie flat and even on the rod for a consistent curl",
      "Create more tension at the root area",
      "Hold the rod in the base position during processing"
    ],
    correctIndex: 1,
    explanation: "End papers prevent the delicate tips of the hair from bending or doubling back (\"fishhooking\") on the rod, ensuring even winding and protecting the ends from the harsh waving lotion.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "High-porosity hair in a colour service will:",
    options: [
      "Be resistant to colour penetration and need extra processing time",
      "Absorb colour very quickly, potentially unevenly, and fade faster",
      "Not be affected by porosity during a colour service",
      "Always produce a lighter-than-expected result"
    ],
    correctIndex: 1,
    explanation: "High-porosity hair has a damaged or raised cuticle that absorbs chemicals rapidly and unevenly. Colour may process too fast, streak, and fade quickly. A porosity equalizer or filler may be recommended.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "Lye (sodium hydroxide) relaxers have an approximate pH of:",
    options: [
      "4.5–6.5",
      "7–8",
      "9–10",
      "12–14"
    ],
    correctIndex: 3,
    explanation: "Sodium hydroxide (lye) relaxers are extremely alkaline, with a pH of 12–14. This extreme alkalinity is what allows them to break the very strong disulfide bonds in coily, resistant hair.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "Which technique involves painting bleach or colour freehand onto the surface of subsections without foil for a soft, graduated effect?",
    options: [
      "Foiling",
      "Balayage",
      "Babylights",
      "Colour melt"
    ],
    correctIndex: 1,
    explanation: "Balayage (French for \"sweeping\") is the freehand painting technique where lightener or colour is swept onto the surface of sections in a painting motion without foil. The open-air processing creates a soft, natural, sun-kissed gradient.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "The natural hair growth cycle phase in which cell division ceases and the follicle shrinks is called:",
    options: [
      "Anagen",
      "Catagen",
      "Telogen",
      "Exogen"
    ],
    correctIndex: 1,
    explanation: "The catagen phase is the brief transitional period (2–3 weeks) where mitosis stops and the follicle detaches from the dermal papilla and shrinks. Only 1–2% of hairs are in catagen at any time.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "A hairstylist's responsibility under the Human Rights Code includes:",
    options: [
      "Charging premium rates to clients with more complex hair needs",
      "Providing equal, professional service to all clients regardless of race, gender, age, disability, or any other protected ground",
      "Refusing services to any client if the stylist is uncomfortable",
      "Prioritizing existing clients over new clients at all times"
    ],
    correctIndex: 1,
    explanation: "Ontario's Human Rights Code prohibits discrimination in the provision of services. Every client has the legal right to equal, professional, non-discriminatory service.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "To achieve a Level 9 (very light blonde) result from naturally dark brown (Level 3) hair, the first step is:",
    options: [
      "Apply a Level 9 colour with 40 vol. developer",
      "Apply a demi-permanent ash toner",
      "Pre-lighten with bleach to remove sufficient underlying pigment",
      "Apply a high-lift blonde at 30 vol."
    ],
    correctIndex: 2,
    explanation: "Permanent colour cannot lift 6 levels in one step — maximum lift with high-lift colour is approximately 3–4 levels. Pre-lightening with bleach is required before toning to achieve very light blonde from dark brown hair.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "Cross-checking a haircut involves:",
    options: [
      "Reviewing the price of the service with the client at the end",
      "Re-sectioning the hair in the opposite direction to verify evenness, balance, and symmetry",
      "Confirming the client's satisfaction by showing all angles with a mirror",
      "Applying a finishing product to check the final shape"
    ],
    correctIndex: 1,
    explanation: "Cross-checking is a quality-control step where the stylist re-examines the cut by taking sections perpendicular to the original cutting direction — catching uneven sections, missed areas, and imbalances.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "Which type of conditioner is applied to clean, damp hair and is NOT rinsed out?",
    options: [
      "Instant / rinse-out conditioner",
      "Deep conditioning masque",
      "Leave-in conditioner",
      "Protein reconstructor"
    ],
    correctIndex: 2,
    explanation: "Leave-in conditioner is applied to towel-dried or damp hair after shampooing and is not rinsed out. It provides ongoing moisture, detangling support, and light hold or heat protection throughout the day.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "A concave perm rod reduces \"root kinking\" because:",
    options: [
      "It is larger in diameter than standard rods",
      "Its smaller center diameter creates a tighter mid-shaft curl while the larger ends provide a gentler angle at the root and tip",
      "It does not require end papers",
      "The rod surface is textured to prevent slippage"
    ],
    correctIndex: 1,
    explanation: "Concave (hourglass-shaped) rods have a smaller diameter at the center and larger at the ends. This creates a tighter curl at mid-shaft and a softer, more natural bend at the roots — reducing the harsh 90° root kink seen with straight-cylindrical rods.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "An overprocessed perm results from:",
    options: [
      "Using the wrong neutralizer brand",
      "Insufficient waving lotion saturation during application",
      "Leaving the waving lotion on too long or using too strong a formula for the hair condition",
      "Rinsing waving lotion for too long before neutralizing"
    ],
    correctIndex: 2,
    explanation: "Over-processing occurs when the waving lotion breaks too many disulfide bonds. The hair becomes over-softened (mushy), loses its elasticity, and may break. The S-test would show a limp, weak curl with no spring.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "Which of the following BEST describes the purpose of a client consultation?",
    options: [
      "To upsell additional products and services",
      "To assess hair condition, understand client goals, manage expectations, perform tests, and obtain informed consent before any service",
      "To determine the most profitable service to perform",
      "To review the client's loyalty card and booking history"
    ],
    correctIndex: 1,
    explanation: "The consultation is the most important step in any service. It establishes trust, ensures safety, confirms the service plan, manages expectations realistically, and forms the legal basis for informed consent. Everything else in the service depends on it.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "Pheomelanin produces which natural hair tones?",
    options: [
      "Black and dark brown",
      "Red, copper, golden, and yellow tones",
      "White/grey (no colour)",
      "Ash and cool brown tones"
    ],
    correctIndex: 1,
    explanation: "Pheomelanin produces warm, red-to-yellow-gold tones. It is the pigment type responsible for red hair and the warm underlying pigment visible in brown and black hair when lightened.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "A stationary guide is BEST used for which type of haircut?",
    options: [
      "Uniform layers throughout",
      "Long layers with a traveling guide",
      "Blunt/one-length or graduated cuts",
      "Razor-cut textured styles"
    ],
    correctIndex: 2,
    explanation: "A stationary guide stays in one place — all subsequent sections are brought to it for cutting. This is the correct technique for one-length (blunt) and graduated cuts where the perimeter must be consistent.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "Part 5: Exam Preparation",
    question: "Spaced repetition as a study strategy involves:",
    options: [
      "Studying the same material for many hours in one session",
      "Reviewing material at increasing time intervals to strengthen long-term memory",
      "Reading each chapter only once before the exam",
      "Studying only the topics that appeared most recently in the textbook"
    ],
    correctIndex: 1,
    explanation: "Spaced repetition spaces review sessions over increasing intervals (1 day, 3 days, 1 week, 2 weeks). The slight forgetting that occurs between sessions, followed by successful recall, powerfully strengthens long-term memory.",
    order: 0,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "MWA A — Safety and Hygiene",
    question: "A client arrives with open sores on the scalp. What is the most appropriate course of action before proceeding with any salon service?",
    options: [
      "Apply an antiseptic and proceed with the service",
      "Refer the client to a physician and decline the service until cleared",
      "Cover the affected area with a towel and continue",
      "Perform the service using extra protective gloves only"
    ],
    correctIndex: 1,
    explanation: "Open sores or breaks in the skin may indicate an infectious or medical condition. The hairstylist must refuse the service and refer the client to a physician. Proceeding risks cross-contamination between clients, worsening the client's condition, and violating occupational health and safety standards.",
    order: 1,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "MWA A — Safety and Hygiene",
    question: "Which level of decontamination is required for metal haircutting shears between clients?",
    options: [
      "Sterilization using an autoclave",
      "Disinfection with an approved hospital-grade disinfectant",
      "Sanitation by wiping with a damp cloth",
      "Sanitizing with soap and water only"
    ],
    correctIndex: 1,
    explanation: "Haircutting shears are semi-critical implements that contact intact skin. They require disinfection — immersion in or wiping with an approved hospital-grade or EPA/Health Canada-registered disinfectant between clients. Sterilization (destruction of all microorganisms including spores) is required only for implements that penetrate skin. Sanitation alone reduces microbial load but does not disinfect.",
    order: 2,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "MWA A — Safety and Hygiene",
    question: "What is the correct procedure for a hairstylist who develops an allergic reaction to a chemical product used in the salon?",
    options: [
      "Continue working while wearing double gloves",
      "Switch to a different brand of the same product",
      "Consult a physician and report the reaction to the employer — use barrier protection and avoid the irritant",
      "Wash hands frequently and reduce exposure time"
    ],
    correctIndex: 2,
    explanation: "Occupational contact dermatitis is a serious and progressive condition. The stylist must consult a physician, report the reaction to the employer as required by occupational health and safety legislation, and take steps to reduce exposure — including using appropriate barrier protection (gloves, barrier cream) and, if necessary, avoiding the specific chemical. Continuing without intervention worsens sensitization.",
    order: 3,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "MWA A — Safety and Hygiene",
    question: "A client's skin patch test for hair colour is performed 24–48 hours before the service. A positive reaction (redness, swelling, itching at the test site) is observed. What action should the hairstylist take?",
    options: [
      "Proceed — a mild reaction means the client can tolerate the colour",
      "Reduce the developer volume and proceed",
      "Do not perform the colour service and inform the client of the reaction",
      "Rinse the test site and perform the service within 30 minutes"
    ],
    correctIndex: 2,
    explanation: "Any positive patch test reaction — regardless of severity — is a contraindication for the colour service. Performing colour after a positive reaction risks anaphylaxis, severe contact dermatitis, or other serious adverse events. The client must be informed that the service cannot proceed and should be advised to consult a physician if they wish to explore alternatives.",
    order: 4,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "MWA A — Safety and Hygiene",
    question: "What is the proper method for disposing of a used single-use razor blade in the salon?",
    options: [
      "Wrap in tissue and place in the regular waste bin",
      "Place directly into the sharps (biohazard) container without resheathing",
      "Resheath by hand and place in the regular bin",
      "Flush down the sink drain"
    ],
    correctIndex: 1,
    explanation: "Used razor blades are sharps and must be placed directly into a puncture-resistant sharps container — never resheathed by hand (risk of needlestick/laceration injury) and never placed in the regular waste stream where they can injure waste handlers. Sharps containers are disposed of according to provincial biohazard waste regulations.",
    order: 5,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "MWA A — Safety and Hygiene",
    question: "Which of the following is an example of a direct (person-to-person) mode of disease transmission in the salon environment?",
    options: [
      "Touching a contaminated surface and then touching the face",
      "Breathing in airborne fungal spores from infected hair clippings on the floor",
      "Direct contact with an open lesion from tinea capitis on a client's scalp",
      "Using tools from a shared drawer without disinfecting"
    ],
    correctIndex: 2,
    explanation: "Direct transmission requires physical contact between the source and a new host without an intermediary. Direct scalp contact with a tinea capitis (ringworm) lesion transfers the fungal infection directly. The other options describe indirect transmission (fomites — contaminated surfaces/tools), droplet/airborne transmission, and contact via a fomite respectively.",
    order: 6,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "MWA A — Safety and Hygiene",
    question: "How long should implements be immersed in a disinfectant solution to achieve effective disinfection, as typically required by most provincial regulations?",
    options: [
      "1–2 minutes",
      "5–10 minutes",
      "At least 10 minutes (or per manufacturer's contact time instructions)",
      "30 seconds is sufficient for high-grade disinfectants"
    ],
    correctIndex: 2,
    explanation: "Effective disinfection requires the implement to be fully immersed in a registered disinfectant solution for the contact time specified by the manufacturer — commonly 10 minutes or more for hospital-grade quaternary ammonium compounds. Shorter contact times may not achieve the required microbial kill. Implements must also be clean (free of organic matter) before disinfection, as debris inactivates disinfectants.",
    order: 7,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "MWA A — Safety and Hygiene",
    question: "What is the purpose of WHMIS (Workplace Hazardous Materials Information System) in the salon?",
    options: [
      "To track product inventory and expiry dates for salon retail products",
      "To regulate the pricing of salon chemical services",
      "To ensure workers are informed of hazards associated with chemical products through Safety Data Sheets, labels, and training",
      "To certify that salon products are approved for professional use only"
    ],
    correctIndex: 2,
    explanation: "WHMIS is Canada's national hazard communication standard. It requires employers to provide workers with access to Safety Data Sheets (SDS) for all hazardous products used in the workplace (including salon chemicals such as bleach, colour, relaxers, perms), proper labelling, and worker training on hazards and safe handling. This protects workers from chemical injury and illness.",
    order: 8,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "MWA A — Safety and Hygiene",
    question: "A hairstylist experiences repeated headaches and eye irritation during chemical services. What is the most appropriate workplace safety measure?",
    options: [
      "Take over-the-counter pain medication and continue working",
      "Ensure adequate ventilation in the salon — open windows and use exhaust fans during chemical services",
      "Work faster to reduce exposure time",
      "Switch from powder bleach to cream bleach only"
    ],
    correctIndex: 1,
    explanation: "Headaches and eye irritation are symptoms of chemical vapour exposure (from persulfate bleaches, oxidants, ammonia, or formaldehyde-based smoothing products). The primary control is engineering ventilation — ensuring the salon has adequate air exchange (local exhaust ventilation and general dilution ventilation). Provincial OH&S regulations require employers to control chemical hazards, starting with engineering controls before PPE.",
    order: 9,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "MWA A — Tools and Equipment",
    question: "Which type of haircutting scissors is designed to remove bulk and create texture while maintaining the perimeter length?",
    options: [
      "Straight blunt scissors",
      "Thinning (texturizing) scissors with one serrated blade",
      "Curved scissors",
      "Offset-handle scissors"
    ],
    correctIndex: 1,
    explanation: "Thinning or texturizing scissors have one straight blade and one notched (serrated) blade. Only the hair between the notches is cut, removing bulk while leaving the perimeter length intact. They differ from chunking scissors (wider notches, remove more bulk) and from blending shears. Straight blunt scissors create a clean solid line. Curved scissors follow contours of the head.",
    order: 10,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "MWA A — Tools and Equipment",
    question: "What is the correct method for sharpening haircutting scissors?",
    options: [
      "Sharpen on a household whetstone to maintain the original angle",
      "Have scissors sharpened by a professional scissor technician who preserves the original bevel and convex edge",
      "Use the built-in sharpener inside the shear case",
      "Rub the blades together briefly to realign the edge"
    ],
    correctIndex: 1,
    explanation: "Haircutting scissors — especially Japanese steel with a convex edge — require sharpening by a qualified scissor technician using specialized equipment that preserves the original bevel angle and hollow or convex grind. Incorrect sharpening damages the edge, causes the scissors to fold or push hair, and shortens the life of the tool significantly. Scissors should never be sharpened on a household whetstone.",
    order: 11,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "MWA A — Tools and Equipment",
    question: "A client with very coarse, thick hair requires maximum cutting precision on a blunt solid perimeter. Which cutting tool is most appropriate?",
    options: [
      "Thinning scissors",
      "A razor (feather/shaper)",
      "Sharp straight scissors (7–8 inch)",
      "Electric clippers with a #2 guard"
    ],
    correctIndex: 2,
    explanation: "A straight blunt scissors (7–8 inch for larger sections) provides the most precise, clean perimeter line on coarse, thick hair. Razors work best on fine to medium hair when wet and produce softer, diffused edges — not the clean blunt perimeter required. Thinning scissors would reduce bulk rather than define a solid perimeter. Clippers are for very short precision work and fades.",
    order: 12,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "MWA A — Tools and Equipment",
    question: "What is the main purpose of a boar-bristle brush compared to a nylon-bristle brush?",
    options: [
      "A boar-bristle brush cuts hair faster during blow-drying",
      "Boar bristles distribute the hair's natural oils from root to ends, add shine, and are gentler — best for fine or fragile hair; nylon bristles detangle more effectively and are more aggressive",
      "Boar-bristle brushes are only used for beard grooming",
      "Nylon brushes are always preferred because they withstand high heat better"
    ],
    correctIndex: 1,
    explanation: "Boar bristles are natural, soft, and closely spaced — they smooth the cuticle, distribute sebum (natural scalp oil) along the hair shaft for shine, and are gentle enough for fine, fragile, or chemically treated hair. Nylon bristles are stiffer, better for detangling and handling thicker hair, and more durable under high heat tools. Many professional brushes combine both materials.",
    order: 13,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "MWA A — Tools and Equipment",
    question: "When using an electric clipper, what does the taper lever on the side of the clipper do?",
    options: [
      "Adjusts the blade speed for different hair textures",
      "Changes the guard size from short to long",
      "Opens and closes the blade to adjust the cutting length between guard sizes, allowing blending and graduated fades",
      "Activates the detachable blade release mechanism"
    ],
    correctIndex: 2,
    explanation: "The taper (or fade) lever adjusts the closeness of the moving blade to the fixed blade, effectively changing the cutting length incrementally between guard sizes — moving toward 'open' cuts longer, toward 'closed' cuts closer. This allows seamless blending and creating smooth graduation in fades without switching guards, which is the foundation of clipper-over-comb and fade techniques.",
    order: 14,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "MWA A — Client Consultation",
    question: "During a client consultation, the hairstylist should primarily use which technique to understand what the client truly wants?",
    options: [
      "Tell the client what would suit them best based on visual assessment only",
      "Ask open-ended questions, listen actively, and use visual references (photos, style books) to confirm mutual understanding",
      "Show the client the same style that is trending currently without discussion",
      "Begin the service and adjust based on client feedback mid-way through"
    ],
    correctIndex: 1,
    explanation: "Effective consultation combines open-ended questions ('What do you like or dislike about your current style?') with active listening and visual confirmation using style images or a mannequin to ensure both client and stylist share the same vision before any service begins. Relying on verbal description alone leads to misunderstanding. Discovering a mismatch mid-service wastes time and damages the client relationship.",
    order: 15,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "MWA A — Client Consultation",
    question: "What information should be recorded on a client record card after each visit?",
    options: [
      "The client's credit card information for convenience",
      "Services performed, products used and formulas applied, results achieved, any contraindications noted, and the client's preferences and reactions",
      "Only the price charged for the service",
      "The hairstylist's personal opinion of the client's hair condition"
    ],
    correctIndex: 1,
    explanation: "Client record cards (service history) must document: all services performed, exact product formulas used (colour formulas, chemical service details), results achieved, client reactions or sensitivities, and future service recommendations. This information protects both client and stylist, ensures consistency across visits (especially when clients see different stylists), and is essential for troubleshooting problems in future services.",
    order: 16,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "MWA A — Client Consultation",
    question: "A client's hair has three different conditions present: normal at the roots, chemically coloured in the mid-lengths, and previously highlighted (very porous) at the ends. How should this information affect service planning?",
    options: [
      "Apply all products uniformly from root to end using the same formula and timing",
      "Ignore the variation — all professional products are designed to work on any hair condition",
      "Plan product application, processing times, and formulas to account for each zone's different porosity and response to chemicals",
      "Always start services at the ends where the most damage is present"
    ],
    correctIndex: 2,
    explanation: "Understanding the porosity and condition of each zone of the hair is fundamental to professional service planning. Highly porous ends absorb colour faster and lift more easily — using the same formula and timing as the roots will result in uneven results, over-processing at the ends, or inadequate development at the roots. Sectioned application, staggered timing, and adjusted formulas per zone ensure even, predictable results.",
    order: 17,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "MWA A — Client Consultation",
    question: "Which face shape would benefit most from a haircut that adds width at the temples and reduces length at the crown?",
    options: [
      "Round face shape",
      "Oval face shape",
      "Oblong (long/rectangular) face shape",
      "Heart face shape"
    ],
    correctIndex: 2,
    explanation: "An oblong (long/rectangular) face appears elongated. The goal is to add visual width and reduce perceived length — achieved with side-parted styles, waves, or styles that add width at the temples and cheekbones while avoiding height at the crown and minimizing length below the chin. Round faces benefit from length and height. Oval faces suit most styles. Heart faces benefit from width at the jaw.",
    order: 18,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "MWA A — Communication",
    question: "A junior hairstylist in the salon consistently rushes through client consultations. What is the most effective mentoring approach for the senior stylist?",
    options: [
      "Take over all the junior's client consultations until they improve",
      "Observe the junior in action, provide specific feedback using examples, and role-model a thorough consultation technique",
      "Warn the junior that they will be dismissed if they do not improve",
      "Assign extra reading on consultation theory only"
    ],
    correctIndex: 1,
    explanation: "Effective mentoring combines observation of actual performance, specific behavioural feedback (not vague criticism), demonstration of correct technique through modelling, and supportive coaching. Simply assigning reading or taking over tasks does not build the junior's competence. Warning of dismissal without constructive guidance is counter-productive and creates a negative learning environment.",
    order: 19,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "MWA A — Communication",
    question: "A client becomes upset after seeing the result of a haircut and says the length is shorter than expected. What is the most professional response?",
    options: [
      "Blame the client for not being clear during the consultation",
      "Apologize and immediately offer a refund without any discussion",
      "Acknowledge the client's feelings, review what was discussed during consultation, and collaboratively explore options to address their concerns",
      "Explain technically why the cut is correct and tell the client they are wrong"
    ],
    correctIndex: 2,
    explanation: "Professional conflict resolution begins with empathy — acknowledging the client's feelings without becoming defensive. Then, reviewing the consultation notes together establishes a shared understanding. Exploring options (complimentary styling, a follow-up service, a partial adjustment) demonstrates commitment to client satisfaction. Blaming the client or being defensive damages trust; reflexive refunds without discussion establish a problematic precedent.",
    order: 20,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "MWA A — Communication",
    question: "What is a Material Safety Data Sheet (MSDS), now known as a Safety Data Sheet (SDS), and when should a hairstylist access it?",
    options: [
      "A product brochure from the manufacturer describing recommended uses",
      "A legal document listing hazard information, safe handling, emergency procedures, and first aid for a hazardous product — accessed before working with an unfamiliar chemical or in response to an accident or spill",
      "A government tax document for chemical product purchases",
      "A client consent form for chemical services"
    ],
    correctIndex: 1,
    explanation: "An SDS (formerly MSDS) is a standardized 16-section document required by WHMIS that details a chemical product's hazards, composition, safe handling, storage, PPE requirements, emergency response, and disposal. Hairstylists must access SDS before using an unfamiliar chemical, when an accidental exposure or spill occurs, or to determine if a product is safe for a specific client scenario. SDS binders must be accessible in the salon at all times.",
    order: 21,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "MWA A — Communication",
    question: "When a client discloses a history of severe allergic reactions to hair colour products, what is the most appropriate documentation and service decision?",
    options: [
      "Document the disclosure and proceed with a lower-strength colour formula",
      "Document the allergy on the client record card, decline the service, and recommend the client consult a dermatologist before any colour service",
      "Perform a patch test and if it is negative, proceed immediately",
      "Offer a semi-permanent colour instead since it is 'gentler'"
    ],
    correctIndex: 1,
    explanation: "A history of severe allergic reactions (especially anaphylaxis or systemic reaction) to hair colour is a significant contraindication. The disclosure must be recorded on the client record card. The service should be declined and the client referred to a dermatologist for proper allergy testing before any colour service is attempted. A patch test alone is insufficient to rule out re-exposure risk in a client with a history of severe reaction.",
    order: 22,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "A",
    topicLabel: "MWA A — Communication",
    question: "Which professional behaviour best demonstrates respect for client confidentiality in the salon?",
    options: [
      "Discussing interesting client stories with other stylists during quiet periods",
      "Sharing client before-and-after photos on social media without written consent",
      "Keeping all client information, service history, and personal disclosures private and not sharing with anyone except for legitimate professional need and with consent",
      "Posting client transformation photos with faces blurred — no consent needed"
    ],
    correctIndex: 2,
    explanation: "Client confidentiality is both an ethical and, in many jurisdictions, a legal obligation. Client records, personal disclosures, and identifying photos must not be shared without explicit written consent. Before-and-after photos — even with blurred faces — may be identifiable and require consent. Discussing client information in the salon with other staff or clients violates trust and professional ethics.",
    order: 23,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "MWA B — Hair and Scalp Analysis",
    question: "A client's hair stretches significantly when wet and then breaks without returning to its original length. What does this indicate?",
    options: [
      "High elasticity — ideal for chemical services",
      "Low elasticity caused by internal cortex damage — the hair may not be suitable for chemical services",
      "High porosity — the hair absorbs water quickly",
      "Normal hair — stretching when wet is expected"
    ],
    correctIndex: 1,
    explanation: "Healthy hair has good elasticity — it stretches up to 50% when wet and returns fully to its original length. Hair that stretches excessively and then breaks (rather than returning) has low or poor elasticity, indicating cortex damage (from over-processing, heat abuse, or mechanical damage). Poor elasticity is a key contraindication for chemical services — further processing risks breakage.",
    order: 24,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "MWA B — Hair and Scalp Analysis",
    question: "How does a hairstylist test the porosity of hair?",
    options: [
      "By pulling a strand and measuring the force required to break it",
      "By sliding fingers from the ends toward the roots along a dry strand — rough, catching texture indicates high porosity; smooth indicates low porosity",
      "By measuring the strand diameter with a calliper",
      "By checking whether the hair floats or sinks in a bowl of water"
    ],
    correctIndex: 1,
    explanation: "The porosity slide test: slide fingers from ends toward roots. If the cuticle scales are raised (high porosity), fingers catch and the strand feels rough. If cuticles are flat (low porosity), the strand feels smooth and glassy. High porosity hair absorbs products quickly but does not retain them, processes faster chemically, and requires porosity equalizers before chemical services. Low porosity hair resists product penetration and processes slowly.",
    order: 25,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "MWA B — Hair and Scalp Analysis",
    question: "What does the term 'hair density' refer to, and how does it affect service planning?",
    options: [
      "Density refers to the diameter of individual hair strands — fine hair has low density",
      "Density refers to the number of hairs per square centimetre on the scalp — high density means more hair follicles, requiring larger sections and stronger product formulations for even penetration",
      "Density is synonymous with elasticity",
      "Density describes how heavy the hair feels when freshly washed"
    ],
    correctIndex: 1,
    explanation: "Hair density is the number of individual hairs per square centimetre of scalp — categorized as low, medium, or high. High-density hair has many tightly packed follicles and requires larger partings, thorough saturation of product, and potentially longer processing time to ensure even coverage. Low-density hair requires finer sections and careful handling to avoid exposing the scalp or creating sparse areas.",
    order: 26,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "MWA B — Hair and Scalp Analysis",
    question: "A client presents with small, oily, yellowish scales on the scalp with mild itching. The scalp skin appears slightly red. Which scalp condition does this most likely describe?",
    options: [
      "Tinea capitis (ringworm of the scalp)",
      "Seborrhoeic dermatitis (dandruff)",
      "Psoriasis",
      "Alopecia areata"
    ],
    correctIndex: 1,
    explanation: "Seborrhoeic dermatitis (the pathological form of dandruff) presents with oily, yellowish-white scales, mild erythema (redness), and itching — caused by an overgrowth of Malassezia yeast on an oily scalp. Tinea capitis is a fungal infection with patchy hair loss and broken shafts. Psoriasis produces thick, silvery, dry scales with well-defined plaques. Alopecia areata presents with smooth, coin-shaped bald patches without scaling.",
    order: 27,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "MWA B — Hair and Scalp Analysis",
    question: "A client is observed to have circular patches of hair loss with smooth, shiny skin, broken hair shafts at the surface ('black dot' pattern), and slight scaling. What is the most likely diagnosis and appropriate action?",
    options: [
      "Alopecia areata — proceed with the service using gentle products",
      "Tinea capitis (ringworm) — refer the client to a physician; do not perform any service",
      "Trichotillomania — advise the client to stop pulling their hair",
      "Traction alopecia — recommend looser hairstyles and proceed with a conditioning treatment"
    ],
    correctIndex: 1,
    explanation: "Tinea capitis is a highly contagious fungal infection presenting with circular, scaly patches, broken hair shafts at the scalp surface (black dot pattern), and possible lymph node involvement. It requires antifungal medication prescribed by a physician — it cannot be treated topically in the salon. Any service must be refused to prevent spread to other clients. Hairstyling tools that contact the infected scalp must be thoroughly disinfected.",
    order: 28,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "MWA B — Hair and Scalp Analysis",
    question: "A client has fine, straight hair that is colour-treated and highly porous. Which characteristic would be expected when performing a permanent wave?",
    options: [
      "The hair will process slowly and require a stronger waving solution",
      "The hair will process quickly and require a milder waving solution with careful monitoring to avoid over-processing",
      "Porosity has no effect on permanent wave processing time",
      "Fine hair cannot be permed under any circumstances"
    ],
    correctIndex: 1,
    explanation: "Highly porous hair has a raised cuticle layer that allows chemicals to penetrate rapidly and deeply. Combined with the fine hair shaft (lower protein content), this means the waving solution will process faster than on resistant, low-porosity hair. A milder (lower-pH, lower-ammonium thioglycolate concentration) waving solution and frequent strand tests are required to avoid over-processing, which causes extreme frizz, loss of elasticity, and breakage.",
    order: 29,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "MWA B — Hair and Scalp Analysis",
    question: "What is the primary structural protein that makes up the hair shaft?",
    options: [
      "Collagen",
      "Melanin",
      "Keratin",
      "Elastin"
    ],
    correctIndex: 2,
    explanation: "Hair is composed primarily of keratin — a fibrous structural protein rich in the amino acid cysteine. Cysteine residues form disulfide bonds between adjacent keratin chains, giving hair its strength, elasticity, and ability to be chemically rearranged. Chemical services (perms, relaxers) work by breaking and reforming these disulfide bonds. Melanin is the pigment in the cortex. Collagen and elastin are found in skin but not in significant amounts in the hair shaft.",
    order: 30,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "MWA B — Hair and Scalp Analysis",
    question: "A client's scalp has patches of thick, dry, silvery-white scales that bleed slightly when lifted, with well-defined reddish plaques. What condition does this indicate?",
    options: [
      "Seborrhoeic dermatitis",
      "Psoriasis",
      "Contact dermatitis",
      "Ringworm"
    ],
    correctIndex: 1,
    explanation: "Psoriasis is an autoimmune skin condition characterised by thick, dry, silvery-white scales on well-defined, inflamed plaques that bleed (Auspitz sign) when scales are removed. It is not contagious, but chemical services may irritate affected areas. The client should be consulted with a physician before any chemical service. Gentle handling is required; scratching or abrading the scalp before chemical services is contraindicated.",
    order: 31,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "MWA B — Hair and Scalp Analysis",
    question: "What is the purpose of performing an elasticity test before a chemical service?",
    options: [
      "To determine the hair's colour level and tone",
      "To determine if the internal cortex bonds are intact enough to withstand the chemical process without causing breakage",
      "To measure the hair's natural oil content",
      "To assess the diameter of the individual hair shaft"
    ],
    correctIndex: 1,
    explanation: "The elasticity test assesses the condition of the cortex and its disulfide and peptide bonds — the internal structure that gives hair stretch and recovery. Hair with poor elasticity (over-processed, weakened cortex) cannot withstand the stress of further chemical processing without breaking. A failing elasticity test is a direct contraindication for permanent waving, relaxing, or high-lift colour services.",
    order: 32,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "MWA B — Hair and Scalp Analysis",
    question: "Which of the following scalp conditions is contagious and requires the hairstylist to refuse the service and refer the client?",
    options: [
      "Androgenetic alopecia (male/female pattern baldness)",
      "Pediculosis capitis (head lice)",
      "Alopecia areata",
      "Seborrhoeic dermatitis"
    ],
    correctIndex: 1,
    explanation: "Pediculosis capitis (head lice infestation) is contagious and easily spread through direct contact with infested hair or sharing of tools and linens. The hairstylist must decline the service, inform the client sensitively, recommend treatment, and disinfect or dispose of any items that may have contacted the client's hair. Non-contagious conditions (alopecia areata, androgenetic alopecia, seborrhoeic dermatitis) do not require service refusal, though appropriate product selection is important.",
    order: 33,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "MWA B — Shampooing and Conditioning",
    question: "What pH range is typical for most professional shampoos, and why is this range important?",
    options: [
      "pH 1–3 (strongly acidic) — to remove mineral buildup",
      "pH 4.5–5.5 (slightly acidic) — close to the hair's natural pH to maintain the cuticle in a closed, smooth state",
      "pH 7 (neutral) — to avoid any reaction with the hair",
      "pH 8–10 (alkaline) — to open the cuticle for deep cleansing"
    ],
    correctIndex: 1,
    explanation: "Healthy hair and scalp have a natural pH of approximately 4.5–5.5 (slightly acidic). Professional shampoos are formulated at this pH range to match the hair's acid mantle, keeping the cuticle smooth and flat for shine and reduced tangling. Alkaline pH opens and roughens the cuticle. Strongly acidic pH damages the cuticle. After chemical services (which use alkaline products), acidic aftercare products are used to normalize pH.",
    order: 34,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "MWA B — Shampooing and Conditioning",
    question: "What type of shampoo is most appropriate for a client who has very oily hair and scalp?",
    options: [
      "Moisturizing (emollient) shampoo",
      "Clarifying or deep-cleansing shampoo",
      "Dry shampoo",
      "Colour-safe (sulphate-free) shampoo"
    ],
    correctIndex: 1,
    explanation: "Clarifying shampoos contain stronger surfactants (such as ammonium lauryl sulphate) that more effectively remove excess sebum, product buildup, and environmental residue from the hair and scalp. They are appropriate for oily hair used periodically. Moisturizing shampoos add emollients, worsening oiliness. Sulphate-free shampoos are gentler — designed for colour-treated or dry hair, not for oil removal.",
    order: 35,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "MWA B — Shampooing and Conditioning",
    question: "Why should the scalp NOT be vigorously scratched or abraded before applying a chemical service such as a relaxer or permanent wave?",
    options: [
      "It makes the product harder to distribute evenly",
      "Abrasion creates micro-lesions in the scalp skin, allowing the chemical to penetrate more deeply and cause chemical burns",
      "It wastes the hairstylist's time during the service",
      "Scratching causes dandruff, which interferes with processing"
    ],
    correctIndex: 1,
    explanation: "Scratching or abrading the scalp — even during a shampoo — creates micro-abrasions (tiny cuts or breaks) in the skin's protective barrier. When an alkaline chemical (relaxer at pH 12–14 or waving solution at pH 8.5–9.5) is then applied, it enters through these lesions, causing chemical scalp burns. For this reason, most protocols specify that hair should NOT be shampooed immediately before applying hydroxide relaxers or that only a gentle pre-service rinse with no scalp manipulation should be performed.",
    order: 36,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "MWA B — Shampooing and Conditioning",
    question: "What is the difference between a conditioner (rinse-out) and a deep conditioning treatment?",
    options: [
      "They are identical — just different marketing terms",
      "A rinse-out conditioner is applied and removed immediately after shampooing to smooth the cuticle; a deep conditioner (mask or treatment) uses heat and longer processing time to penetrate the cortex and rebuild internal protein or moisture bonds",
      "Rinse-out conditioners contain protein; deep conditioners contain moisture only",
      "Deep conditioners are only for dry hair; rinse-out conditioners are for all hair types"
    ],
    correctIndex: 1,
    explanation: "Rinse-out conditioners contain cationic polymers and silicones that coat and smooth the cuticle, reducing friction and adding temporary shine — they are applied after shampoo and rinsed within 2–5 minutes. Deep conditioning treatments (protein packs or moisture masks) are formulated to penetrate the cortex, either rebuilding protein bonds (protein treatment) or replenishing moisture (humectant treatment), and require 10–30 minutes of processing, often under heat.",
    order: 37,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "MWA B — Shampooing and Conditioning",
    question: "A client's hair is brittle and breaking easily despite regular conditioning. A stylist suspects protein overload. What symptom distinguishes protein overload from lack of moisture?",
    options: [
      "Hair is limp and stretches excessively without returning",
      "Hair feels stiff, rigid, and lacks elasticity — stretches only slightly then breaks, and feels 'straw-like'",
      "Hair appears frizzy and has a rough texture with a spongy feel when wet",
      "Hair is oily at the roots and dry at the ends only"
    ],
    correctIndex: 1,
    explanation: "Protein overload occurs when hair absorbs an excessive amount of protein, causing the strands to become overly rigid and brittle — they feel stiff and 'straw-like' and break easily with minimal stretch. This contrasts with hygral fatigue (too much moisture) where hair feels mushy, stretches excessively without bouncing back, and has a spongy texture when wet. The treatment for protein overload is to stop protein treatments and use moisture-only products until balance is restored.",
    order: 38,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "MWA B — Shampooing and Conditioning",
    question: "What is the function of a chelating (clarifying) treatment, and when should it be used?",
    options: [
      "It adds protein to strengthen the hair before chemical services",
      "It removes mineral deposits (hard water calcium and magnesium ions) from the hair, restoring conductivity for chemical services and eliminating dull, rough texture",
      "It permanently straightens hair using chelating agents",
      "It removes artificial hair colour from the hair shaft"
    ],
    correctIndex: 1,
    explanation: "Chelating agents (EDTA and similar compounds) bind to mineral ions — particularly calcium and magnesium from hard water, chlorine from pools, and iron from well water — and remove them from the hair. Mineral buildup makes hair feel rough, look dull, resist chemical penetration (affecting colour results and perm processing), and behave unevenly. Chelating treatments are recommended before colour or chemical services for clients who swim regularly or live in hard-water areas.",
    order: 39,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "MWA B — Shampooing and Conditioning",
    question: "What is the correct water temperature for shampooing most clients?",
    options: [
      "Cold water — to stimulate the scalp and close the cuticle",
      "Hot water (above 50°C) — to open the cuticle for thorough cleansing",
      "Warm/comfortably warm water — comfortable to the client, effective for product removal without scalding or causing discomfort",
      "Room temperature water only — to prevent over-stimulation of sebaceous glands"
    ],
    correctIndex: 2,
    explanation: "Warm water (approximately 38–42°C) is appropriate for shampooing — warm enough to emulsify and rinse scalp oils and product residue effectively without scalding the scalp or the stylist's hands, and comfortable for the client. Very hot water can stimulate sebaceous glands (increasing oiliness), cause scalp irritation, and damage colour-treated hair by opening the cuticle excessively. A cool final rinse helps close the cuticle for added shine.",
    order: 40,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "B",
    topicLabel: "MWA B — Shampooing and Conditioning",
    question: "A client with fine, flat hair asks for product advice after shampooing. Which type of conditioning product should be recommended?",
    options: [
      "A heavy, rich moisturising mask applied from roots to ends",
      "A volumizing leave-in conditioner or lightweight spray conditioner applied to ends only — avoiding the roots",
      "A hot oil treatment applied to the scalp",
      "The same deep conditioning mask used for coarse hair"
    ],
    correctIndex: 1,
    explanation: "Fine hair is easily weighed down by heavy conditioning products — especially at the roots, where they cause flatness and rapid re-oiling. A lightweight volumizing conditioner or leave-in spray applied to the mid-lengths and ends provides necessary moisture and detangling without weighing hair down. Heavy masks and oils applied to fine hair's roots accelerate the greasy-looking, flat appearance the client wants to avoid.",
    order: 41,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "What is the result of cutting hair at 0° elevation (no elevation)?",
    options: [
      "A heavily layered look with lots of movement",
      "A one-length, solid form — all hair falls to the same perimeter line when the hair is combed down",
      "A short-to-long graduated effect",
      "Maximum volume at the top with minimal length at the perimeter"
    ],
    correctIndex: 1,
    explanation: "0° elevation means the hair is held straight down (combed down and cut at the natural fall). The result is a solid, blunt, one-length form where all hair falls to the same perimeter line — such as a classic blunt bob. There is no layering, maximum weight build-up at the perimeter, and no movement from layering. This is the foundation of one-length cutting.",
    order: 42,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "What type of cut is produced when hair is elevated to 90° from the head and cut to a consistent guide length?",
    options: [
      "A one-length (solid) cut",
      "A uniform layer cut — all hair is the same length regardless of section location, creating maximum volume and movement",
      "A heavily graduated (stacked) bob",
      "A disconnected undercut"
    ],
    correctIndex: 1,
    explanation: "Elevating hair to 90° from the head form and cutting to a consistent guide creates a uniform layer cut. Because each section is projected directly away from the head at 90°, the cut follows the head's curvature — resulting in all hair cutting to the same length when the hair falls, creating maximum volume, movement, and a rounded shape. This is the basis of classic layered cuts.",
    order: 43,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "In a graduation (stacked) cut, what happens to the hair length from the nape upward?",
    options: [
      "Hair is the same length from nape to crown",
      "Hair gets progressively longer from nape to crown, creating a stacked, full appearance at the back",
      "Hair gets shorter from nape to crown",
      "Hair is cut in a disconnected pattern with no consistent length change"
    ],
    correctIndex: 1,
    explanation: "In a graduated (stacked) cut, the hair is elevated at 45° (between 0° and 90°). The resulting form shows progressively longer hair lengths from the nape upward — the lower sections are shorter and the upper sections are longer. This creates a stacked appearance with fullness and weight buildup at the perimeter. Classic example: the graduated bob, where the back has a rounded stacked shape above the nape.",
    order: 44,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "What is the purpose of using a travelling guide (moving guide) in a haircut?",
    options: [
      "To keep the guide stationary and cut all sections to it",
      "To move the guide with each section so that each subsequent section uses the previously cut hair as its guide — used to create layers in long or uniform layer cuts",
      "To cut hair without using any guide for free-form results",
      "To establish a fixed perimeter length only"
    ],
    correctIndex: 1,
    explanation: "A travelling (mobile) guide moves forward with each new section — a small amount of the previously cut hair is picked up and included as the guide for the next section. This ensures consistent graduation or layering throughout the haircut as the guide progresses. It is used in uniform layer cuts, long-layer cuts, and when working around the head form. A stationary guide, by contrast, pulls all hair to one fixed point.",
    order: 45,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "What effect does over-direction (pulling hair away from its natural fall direction before cutting) create?",
    options: [
      "It makes the cut perfectly even with no weight variation",
      "Over-directing hair away from the growth creates longer hair at the point of growth (weight) and shorter hair at the point of pull, building weight in one area — used intentionally for asymmetric or disconnected designs",
      "It creates maximum elevation and removes all weight",
      "It results in the same effect as 0° elevation"
    ],
    correctIndex: 1,
    explanation: "Over-direction involves pulling hair away from its natural fall direction toward a predetermined point before cutting. The hair that is pulled farthest will be cut shorter, while hair at the point of growth will be left longer, creating a weight build-up at the point of growth. This technique is used to create asymmetric designs, build volume in specific areas, or create intentional weight and disconnection in the cut.",
    order: 46,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "What is the purpose of point cutting (tip cutting) at the ends of the hair?",
    options: [
      "To create a blunt, precise perimeter line",
      "To remove bulk from the interior of the section without affecting the perimeter length",
      "To soften and texturize the perimeter line, removing the harsh edge from a blunt cut and creating movement",
      "To create dramatic, chiselled disconnection in the cut"
    ],
    correctIndex: 2,
    explanation: "Point cutting (also called tip cutting) involves inserting the open scissors vertically into the ends of a section at an angle and making small cuts. This removes the harsh, solid line from a blunt cut, softening and texturizing the perimeter. The result is a natural-looking edge with movement and reduced bulk at the ends. It differs from slicing (which removes bulk from the body of the section) and thinning (which removes interior bulk).",
    order: 47,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "A client with a large, prominent nose wants a haircut that minimizes this feature. What styling principle should the hairstylist apply?",
    options: [
      "Cut the hair very short to draw attention away from the nose",
      "Add volume and width at the sides of the face to balance the feature and draw the eye outward from the central focal point",
      "Recommend a centre-parted style with flat hair close to the head to frame the face",
      "Add height at the crown to elongate the face"
    ],
    correctIndex: 1,
    explanation: "The principle of visual balance applies: creating width and volume at the sides of the face shifts the viewer's eye horizontally, reducing the perceived prominence of central facial features. Soft waves, volume at the cheekbones, and side-swept styles effectively balance a prominent nose. Centre partings draw the eye directly to the centre of the face, emphasising the nose. Short cuts can draw more attention to the face overall.",
    order: 48,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "What is the difference between a razor cut and a scissors cut on fine straight hair?",
    options: [
      "Razors and scissors produce identical results on fine hair",
      "A razor cut produces softer, more diffused ends with natural movement — best used on damp fine hair; scissors create more precise, blunt ends; razors can cause thin fine hair to look even thinner if overused",
      "A razor always creates more volume than scissors",
      "Scissors cannot be used on fine straight hair"
    ],
    correctIndex: 1,
    explanation: "Razor cutting (using a feather razor or shaper) thins the hair at the ends as it cuts, creating a soft, natural, diffused edge with movement. On fine hair, this can reduce density at the ends and reduce apparent fullness — so it must be used judiciously. Scissors create a cleaner, more precise line. Razors require damp hair to slide cleanly and should not be used on dry hair as they cause breakage.",
    order: 49,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "Which technique involves cutting hair sections at varying lengths using the scissors in an open-and-close motion while sliding along the hair strand?",
    options: [
      "Point cutting",
      "Blunt cutting",
      "Slide cutting (effilating)",
      "Channelling"
    ],
    correctIndex: 2,
    explanation: "Slide cutting (effilating) involves sliding the open scissors along the hair strand while opening and closing the blades. This removes bulk and weight along the length of the section, creates movement, and produces softer, tapered ends. It is highly effective for removing weight on long, thick hair while maintaining length. It requires sharp scissors and damp hair for the blades to slide smoothly without catching.",
    order: 50,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "When performing a clipper fade, the hairstylist uses the taper lever and gradually transitions from shorter to longer lengths. What technique creates a seamless blend where the shorter length transitions invisibly into the longer hair?",
    options: [
      "Cutting with only one guard size throughout the fade",
      "Using a rocking motion with the clipper — flicking the wrist away from the head as the clipper moves upward, reducing the cutting depth gradually at the blend line",
      "Cutting all hair at the same length and then finger-combing",
      "Applying heat to the hair before clippering to make it stand up"
    ],
    correctIndex: 1,
    explanation: "A seamless clipper fade is created by gradually changing guard sizes and using a rocking or flicking motion — as the clipper travels upward, the operator flicks the wrist away from the head, feathering out the cut and preventing a harsh demarcation line. The taper lever further adjusts the cutting depth between guard changes. Overlapping guard sizes while using this technique creates the gradual, invisible transition that defines a professional fade.",
    order: 51,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "What is the purpose of cutting a 'guide' at the beginning of a haircut?",
    options: [
      "A guide is an optional step that experienced stylists skip",
      "A guide is the initial section cut to an established length that all subsequent sections will be measured against — it ensures consistency and accuracy throughout the haircut",
      "A guide is the final perimeter cut performed at the end of the haircut",
      "A guide is a reference photo used during the consultation only"
    ],
    correctIndex: 1,
    explanation: "The guide (also called a guideline) is the first section cut to the desired length. All subsequent sections are then cut to match (or graduate from) this guide, ensuring the entire haircut is consistent in length and graduation. Without a guide, cuts become uneven and unpredictable. Interior guides create layers; perimeter guides establish the perimeter length.",
    order: 52,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "A client with naturally curly hair (Type 3B) asks for a dry cut. Why might the hairstylist prefer to cut curly hair dry rather than wet?",
    options: [
      "Dry cutting is always faster and produces the same results",
      "Cutting curly hair dry allows the stylist to see and work with the natural curl pattern and shrinkage — wet curly hair stretches and, when cut, springs back shorter than expected, leading to uneven results",
      "Dry cutting is required because curly hair damages scissors when wet",
      "Dry cutting prevents the curl from going straight during blow-drying"
    ],
    correctIndex: 1,
    explanation: "Curly hair has significant shrinkage — wet curly hair stretches up to 50% longer than its dry, natural coiled state. If cut wet, the curls spring up shorter when dry, often resulting in an unexpectedly short result. Cutting curly hair in its natural dry state allows the hairstylist to see the curl's natural fall, distribution, and behaviour — enabling a more accurate and predictable result that works with the curl pattern rather than against it.",
    order: 53,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "What is the 'four-corners' sectioning system used for in haircutting?",
    options: [
      "To divide the head into sections for applying foil highlights",
      "To divide the head into four equal sections (front, back, left, right) using a centre parting and ear-to-ear parting, providing organised working zones for systematic cutting",
      "To identify the four skull bones relevant to cutting graduation",
      "To create four separate elevation lines for extreme layering"
    ],
    correctIndex: 1,
    explanation: "The four-corners sectioning system divides the head into four quadrants — front-left, front-right, back-left, back-right — using a centre crown-to-nape parting and an ear-to-ear parting across the top of the head. This systematic division ensures organized, balanced, and controlled cutting, prevents the stylist from losing their place, and allows easy cross-checking between sections for symmetry and balance.",
    order: 54,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "When performing a long-layered haircut designed to maintain weight and length while adding movement, which elevation and technique is most appropriate?",
    options: [
      "0° elevation, blunt perimeter cut with no interior layering",
      "45° elevation throughout for heavy graduation at the back",
      "90° elevation from the head form with a travelling guide, working from the perimeter upward",
      "180° elevation — holding hair straight up and cutting horizontally"
    ],
    correctIndex: 2,
    explanation: "A long-layered cut uses 90° elevation with a travelling guide to create uniform layers throughout — giving movement and volume while the perimeter length is maintained. The 90° projection ensures the layers follow the head's curvature. Working with a travelling guide ensures the layering is consistent throughout. This differs from a graduated cut (45°) which builds stacking, or 0° which creates a solid perimeter.",
    order: 55,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "A client has a cowlick at the front hairline. How should the hairstylist manage this during a cut?",
    options: [
      "Cut against the direction of the cowlick for a clean result",
      "Ignore the cowlick — products will control it after the cut",
      "Identify the direction the cowlick grows and cut with its natural growth direction, leaving enough weight to fall into place rather than fighting it",
      "Cut the cowlick section very short so it lies flat"
    ],
    correctIndex: 2,
    explanation: "A cowlick is a section where hair grows in a circular or opposing direction. The hairstylist must identify the direction of growth by observing how the hair falls naturally. Cutting with the cowlick — leaving sufficient length and weight for the hair to lie in the direction of natural growth — allows it to fall correctly. Cutting against it or cutting it too short causes it to stand up. Products can then enhance the result, but the cut must work with the natural growth pattern.",
    order: 56,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "What is 'disconnection' in the context of a haircut design?",
    options: [
      "When the comb disconnects from the hair during cutting",
      "An intentional design element where two adjacent sections are cut at significantly different lengths with no blending between them, creating a dramatic contrast",
      "When the hair is too tangled to cut smoothly",
      "A sectioning error that results in uneven layers"
    ],
    correctIndex: 1,
    explanation: "Disconnection is a deliberate design technique where sections of the cut are intentionally left unblended — creating a stark, visible contrast between longer and shorter areas. This creates bold, graphic effects and visual interest. Examples include undercuts with disconnection, where the interior is heavily layered while the exterior length is preserved, or disconnected fringes. The key is that the disconnection is intentional, not an error.",
    order: 57,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "A client requests an 'A-line' bob. What defines this shape?",
    options: [
      "A bob that is shorter at the back and longer in the front, angling from a shorter back nape to longer front sections — creating an A-shape silhouette",
      "A bob that is the same length all around, creating a square A-frame silhouette",
      "A bob with heavy fringe (bangs) that frames the face like the letter A",
      "A bob that is longer at the back and shorter at the front"
    ],
    correctIndex: 0,
    explanation: "An A-line bob is shorter at the back (nape area) and progressively longer toward the front, creating a front-to-back diagonal line that resembles the letter 'A' when viewed from the side. This is achieved by angling the cutting guide from short at the back nape to longer at the front. The silhouette frames the face with longer pieces at the cheeks. It differs from the inverted bob (which is the reverse — shorter at front, longer at back).",
    order: 58,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "What is the function of a comb in the scissor-over-comb technique?",
    options: [
      "The comb holds the hair in place while the scissors slide over it, cutting only the hair projecting above the spine of the comb — creating seamless graduation in short haircuts without using clippers",
      "The comb is used only to detangle the hair before cutting begins",
      "The comb prevents the scissors from slipping during the cut",
      "The comb measures the exact length of hair being cut"
    ],
    correctIndex: 0,
    explanation: "Scissor-over-comb is a technique for creating smooth graduation in short haircuts. The comb lifts and projects hair from the head at a consistent angle, and only the hair extending above the top of the comb's spine is cut by the scissors passed over it. By tilting the comb gradually as it moves up the head, the hairstylist creates a smooth, graduated blend — an alternative to clippers that allows greater control, especially in sensitive areas around the ears and nape.",
    order: 59,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "When cutting hair to create a fringe (bangs), what key factor determines whether the fringe will lay flat or spring up shorter than expected after drying?",
    options: [
      "The colour of the hair",
      "The diameter of the hair shaft only",
      "The presence of natural curl, wave, or cowlick in the fringe area — curly hair will spring up significantly shorter when dry; straight hair cuts more predictably",
      "The sharpness of the scissors"
    ],
    correctIndex: 2,
    explanation: "Natural wave, curl, or cowlick in the fringe area causes the hair to spring up shorter when dry. A stylist cutting a fringe on curly or wavy hair must cut it slightly longer than the desired finished length to account for the spring. Additionally, growth direction (cowlick) affects how the fringe falls — a cowlick in the fringe must be identified and the cut planned accordingly. Straight hair has minimal shrinkage and cuts most predictably.",
    order: 60,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "What is the 'occipital bone' and why is it significant in haircutting?",
    options: [
      "It is the prominent bone of the forehead that affects fringe placement",
      "It is the protruding bone at the back of the skull — the point above which hair tends to curve away from the head, marking a key reference point for weight line placement in bobs and graduated cuts",
      "It is the bone that forms the cheekbone, relevant to face-framing sections",
      "It is the bone behind the ear, which affects the shape of the sideburn area"
    ],
    correctIndex: 1,
    explanation: "The occipital bone is the protruding bone at the lower back of the skull (about 2 inches above the nape hairline). It is the heaviest, most visible weight-bearing point in the back of the head. In graduated cuts and bobs, the weight line (the area of maximum fullness) is typically placed at or just below the occipital bone. Hair above the occipital naturally falls away from the head; below it falls toward the nape. Weight line placement relative to this bone dramatically affects the silhouette.",
    order: 61,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "A client has thick, coarse hair and requests that bulk be removed without shortening the perimeter length. Which technique is most appropriate?",
    options: [
      "Razor cut the entire perimeter",
      "Use thinning scissors in the interior of large sections at the mid-lengths and ends, working with vertical or diagonal strokes inside the section",
      "Cut 2 inches off the perimeter to remove weight at the ends",
      "Use a flat iron to compress the hair rather than cutting"
    ],
    correctIndex: 1,
    explanation: "Thinning scissors (texturizing shears) used in the interior of sections remove bulk without changing perimeter length. Inserting the shears vertically or diagonally into the mid-lengths to ends (avoiding the root area to prevent holes) and closing removes bulk from inside the section. The perimeter guide is untouched. This technique is specifically designed for bulk removal while maintaining length — the primary goal for this client.",
    order: 62,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "What is 'point-to-point' or 'check cutting' after completing a haircut?",
    options: [
      "Measuring the hair with a ruler to verify exact centimetre lengths",
      "Cross-checking the cut by picking up sections from opposite sides of the head and comparing them visually and between the fingers to verify balance and symmetry",
      "Re-cutting all sections to make them slightly shorter",
      "Applying product to check how the style will look when finished"
    ],
    correctIndex: 1,
    explanation: "After completing a haircut, the hairstylist should check cut (cross-check) by picking up sections from opposite sides of the head and bringing them together between the fingers to compare length and graduation. This identifies any asymmetry, missed sections, or inconsistencies before the client is finished and dried. It is the quality assurance step of the haircutting process.",
    order: 63,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "Which of the following correctly describes the effect of natural hair texture on a blunt, solid-form haircut?",
    options: [
      "All hair textures produce the same visual result from a blunt cut",
      "Straight hair produces a clean, precise blunt line; wavy hair produces a softer, slightly irregular edge; curly hair appears shorter and can look diffuse rather than blunt due to spring and curl formation",
      "Curly hair produces the cleanest blunt line because curls align neatly",
      "Wavy hair should never be cut blunt — it always needs layering"
    ],
    correctIndex: 1,
    explanation: "Hair texture profoundly affects how a solid blunt cut appears when dry. Straight hair shows the cleanest, most graphic blunt perimeter. Wavy hair softens the line slightly as the waves fall in varying directions. Curly hair springs up significantly and the blunt perimeter is obscured by the curl's volume and irregular fall — often appearing rounded and diffuse rather than blunt. This must be considered when planning the cut and setting client expectations.",
    order: 64,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "What is the proper tension to use when holding a hair section for cutting?",
    options: [
      "Maximum tension — pull the hair as tightly as possible for the most accurate cut",
      "No tension — allow the hair to hang freely",
      "Even, consistent, moderate tension — enough to keep the section controlled and straight for accurate cutting without stretching or distorting the natural fall",
      "Different tension for each section based on feel"
    ],
    correctIndex: 2,
    explanation: "Consistent, even tension is fundamental to accuracy in haircutting. Too much tension stretches the hair, causing it to spring back shorter than cut when released — especially significant on curly or elastic hair. Too little tension causes the section to slip and be cut unevenly. Consistent tension throughout the cut ensures each section is at the same tension, producing the balanced, even result the guide has established.",
    order: 65,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "When creating a classic one-length bob at chin level, what must the hairstylist ensure about the parting lines used to take sections?",
    options: [
      "Partings should be taken diagonally to create a natural, asymmetric result",
      "Partings should be taken horizontally (parallel to the floor), working from the nape upward, to ensure each row is cut precisely to the guide and the perimeter remains level",
      "Partings should radiate from the crown downward",
      "Random partings create the best one-length result"
    ],
    correctIndex: 1,
    explanation: "For a one-length (solid form) bob, horizontal partings taken parallel to the floor — working from the nape upward — are essential. Each horizontal section is comb down at 0° elevation and cut to the established perimeter guide. Diagonal or radiating partings would introduce inconsistency and elevation, breaking the solid weight line. The precision of horizontal sectioning is what produces the clean, level perimeter of a classic bob.",
    order: 66,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "A client requests a 'textured crop' with a disconnected undercut. What does 'disconnected undercut' mean in this context?",
    options: [
      "The lower section is tapered very close with clippers, while the upper section retains length and is NOT blended into the shorter section — the contrast is intentional",
      "The clippers are disconnected (turned off) for the upper section",
      "The perimeter line is cut at an angle to create a disconnected shape",
      "The undercut is performed with scissors only, not clippers"
    ],
    correctIndex: 0,
    explanation: "A disconnected undercut involves clippering or shaving the lower section (above the ears and at the nape) very short or to the skin, while leaving the top sections long. Crucially, there is NO blending between the short undercut and the long top — the contrast is a deliberate design choice. This differs from a traditional fade where the transition is seamlessly blended. The disconnection creates a high-contrast, contemporary graphic effect.",
    order: 67,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "What is 'dry cutting' as an approach for textured or curly hair, and what is its primary advantage?",
    options: [
      "Cutting with dry, unsharpened scissors to create a natural frayed edge",
      "Cutting the hair in its natural dry state, allowing the stylist to work with the curl's actual pattern, spring, and distribution",
      "Cutting hair after applying dry shampoo to add grip",
      "Cutting with a dryer blowing on the hair during the service"
    ],
    correctIndex: 1,
    explanation: "Dry cutting for curly hair means cutting after the hair has been detangled and allowed to dry completely in its natural curl pattern — without straightening or blowing dry. The advantages are: the stylist sees exactly how the curls fall and cluster, can remove bulk and balance the shape where needed, and avoids the spring-back problem (cutting too short). The result works with the natural curl, not against it. Many specialists dry-cut curly hair to tailor the shape uniquely to each curl pattern.",
    order: 68,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "When using the 'clipper-over-comb' technique in the occipital area, what is the function of the clipper's angle relative to the head?",
    options: [
      "The clipper must always be parallel to the floor regardless of the head position",
      "The clipper is held parallel to the comb and the comb angle controls the graduation — tilting the comb closer to the head as it moves upward creates a tighter blend; holding it farther away creates a looser, longer blend",
      "The clipper angle determines the width of each hair section",
      "The clipper angle has no effect — only the guard size matters"
    ],
    correctIndex: 1,
    explanation: "In clipper-over-comb, it is the comb's angle (not the clipper's position relative to the floor) that controls the graduation. As the comb moves up the head, gradually tilting its spine away from the scalp increases the amount of hair projecting above the comb — producing a longer result. Tilting the spine closer to the scalp reduces projection — producing a tighter, shorter result. This angle control creates the smooth graduation of a taper or fade in the occipital region.",
    order: 69,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "What is the primary difference between a 'layer' and 'graduation' in haircutting?",
    options: [
      "Graduation and layering are identical terms for the same technique",
      "Layers are created by elevating hair above 90° and cutting; graduation uses 90° elevation only",
      "Graduation (45° elevation) builds weight at the perimeter with progressively longer hair toward the interior; uniform layers (90°) remove weight throughout and create movement without building a perimeter weight line",
      "Graduation always removes more hair than layering"
    ],
    correctIndex: 2,
    explanation: "Graduation (45° elevation) creates a stacked, weight-building effect where shorter hair at the nape progressively transitions to longer hair higher up — the perimeter appears heavy and full. Uniform layering (90° elevation) cuts all hair to the same length from the head form, removing weight throughout and creating movement and volume without a stacked perimeter. Both techniques are fundamentally different in their visual effect and construction.",
    order: 70,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "A client with a very round face wants the illusion of a longer, more oval face shape. Which haircut approach best achieves this?",
    options: [
      "Add maximum volume at the sides through heavy graduation and layers at the cheekbones",
      "Create height at the crown and minimize width at the sides — using lengthening vertical layers and avoiding excessive side volume",
      "Cut hair very short and uniform across the head",
      "Create a wide, horizontal fringe that emphasises the width of the forehead"
    ],
    correctIndex: 1,
    explanation: "A round face has width equal to or greater than its length. To create the illusion of an oval (longer) face, the hairstylist should: add height and volume at the crown to elongate, minimize volume at the widest points of the face (cheekbones), use lengthening vertical layers, and avoid styles that add horizontal width at the sides. A centre part with soft volume at the crown is classic. A wide horizontal fringe emphasises width — the opposite of the goal.",
    order: 71,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "When sectioning hair for a haircut, what is the purpose of the ear-to-ear parting across the top of the head?",
    options: [
      "To separate the colour-treated hair from the natural-growth hair",
      "To divide the top (front) sections from the back sections, creating a systematic working order and preventing over-direction of sections across the divide",
      "To identify the position of the occipital bone",
      "To determine the client's natural part line"
    ],
    correctIndex: 1,
    explanation: "The ear-to-ear parting runs over the top of the head from ear to ear, dividing the head into a front upper section and a back lower section. This creates a clear boundary that prevents inadvertent over-direction of hair from the back to the front (which would create uneven results), allows the hairstylist to work each section systematically, and is the foundation of the four-corners sectioning system used in most cutting techniques.",
    order: 72,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "What special consideration is required when cutting hair around the ears and sideburn area?",
    options: [
      "This area should always be left uncut to avoid damaging the ear",
      "The hairstylist must identify and work with the natural growth direction around the ear (which often grows forward or in multiple directions), fold the ear down for safety, and use precision cutting or a detail clipper for clean outlining",
      "Always use a razor in this area for a smooth result",
      "Cut this area first before any other sectioning for consistency"
    ],
    correctIndex: 1,
    explanation: "The area around the ear has complex, often multi-directional hair growth. The ear must be gently folded down during cutting to protect it and gain access to hair growing above and behind it. Growth direction must be observed so that sideburn hair is cut with its natural growth pattern. Detail (trimming) clippers or scissors are used to outline the perimeter cleanly. Razor use in this sensitive area risks cutting the skin.",
    order: 73,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Haircutting",
    question: "A male client requests a 'skin fade' where the hair goes from skin (0 guard) at the bottom to longer hair at the top. What is the critical area where the hairstylist must avoid a harsh line?",
    options: [
      "The crown — where the fade finishes at the longest section",
      "The blend line — the transition zone where the very short clipped area meets the longer hair above, which must be feathered seamlessly with no visible demarcation",
      "The fringe area — where the hair sits forward at the front",
      "The nape — which is always blended the same way in every fade"
    ],
    correctIndex: 1,
    explanation: "The blend line is the most technically challenging element of a skin fade. This is the transition zone where the skin (0 guard) or very short base meets the progressively longer hair above. Without proper technique (using the taper lever, transitional guards, and scissor-over-comb or clipper-over-comb), a harsh horizontal line (demarcation) appears. A seamless blend requires overlapping guard sizes and feathering the transition so no distinct boundary is visible.",
    order: 74,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Facial and Nape Hair",
    question: "What is the correct technique for outlining a beard using a straight razor?",
    options: [
      "Apply lather to the entire beard area and remove all hair with the razor in a single session",
      "Comb and trim the beard with scissors first to establish shape, then use the razor to define crisp, clean boundary lines (neckline, cheek lines) in the direction of hair growth with a stretched, taut skin",
      "Use clippers only — razors are not used for beard outlining",
      "Apply no product and use the razor dry for the most precise line"
    ],
    correctIndex: 1,
    explanation: "Beard outlining with a straight razor requires: (1) establishing the shape with scissors or clippers first, (2) applying a light lather or shave gel to the outline areas, (3) stretching the skin taut with the non-dominant hand for safety and a clean glide, and (4) using precise, controlled strokes with the razor at a consistent angle along the established boundary lines. Shaving against the grain in sensitive areas risks irritation; shaving with the grain at the outline gives the clearest line.",
    order: 75,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Facial and Nape Hair",
    question: "A male client has a dense, full beard he wants shaped to complement his square jaw. What approach enhances his facial balance?",
    options: [
      "Keep the beard the same length at the chin and jaw line to emphasise the square shape",
      "Trim the beard slightly shorter at the jawline angles (corners) and leave more length and fullness at the chin — creating a more rounded or oval beard silhouette that softens the square jaw",
      "Remove all beard hair on the cheeks and keep only chin hair",
      "Cut the beard very short and uniform to emphasize facial features"
    ],
    correctIndex: 1,
    explanation: "A square jaw has strong, prominent angles at the jaw corners. To soften and balance this, the beard is shaped to have slightly less volume and angular prominence at the jaw corners while maintaining or adding fullness at the chin — creating a rounded or oval beard silhouette. This distributes the visual weight away from the corners and elongates the face shape, providing a more balanced appearance.",
    order: 76,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Facial and Nape Hair",
    question: "When trimming a male client's neckline, what is the most important guideline for determining where the natural neckline should fall?",
    options: [
      "The neckline should always be cut as high as possible to look professional",
      "The neckline should be placed at the two-finger width above the natural hairline, using a small 'V' or 'U' shape following the client's natural neckline growth",
      "The neckline should always follow a perfectly straight horizontal line",
      "Cut the neckline to the lowest natural hair growth regardless of shape"
    ],
    correctIndex: 1,
    explanation: "A natural-looking neckline is placed approximately two finger-widths above the client's natural (lowest) neck hairline growth. This avoids cutting into the natural hairline (which grows back coarser and requires frequent trimming) while providing a clean, defined perimeter. The shape (V, U, or square) follows the client's natural neckline growth pattern for the most flattering and longest-lasting result. High-cut necklines require more frequent maintenance.",
    order: 77,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Facial and Nape Hair",
    question: "What is the difference between a 'blocked' and a 'tapered' neckline?",
    options: [
      "They are the same — just regional terminology differences",
      "A blocked neckline cuts a straight horizontal line across the natural hairline; a tapered neckline uses the clippers with a taper lever to fade the natural hairline into the skin gradually without a defined edge",
      "A blocked neckline is for women; a tapered neckline is for men",
      "A tapered neckline is more formal; a blocked neckline is casual"
    ],
    correctIndex: 1,
    explanation: "A blocked neckline creates a clean, straight horizontal line across the back neckline using clippers or scissors — the perimeter is defined and sharp. A tapered neckline uses the taper lever to gradually reduce the hair at the neckline into the skin (no defined line), blending naturally into the client's natural hairline. Tapered necklines are more natural-looking and lower maintenance; blocked necklines are sharp but show regrowth more quickly.",
    order: 78,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Facial and Nape Hair",
    question: "A client requests eyebrow trimming as an add-on service. What is the safest method for trimming eyebrow hair?",
    options: [
      "Use a straight razor to outline and remove stray hairs precisely",
      "Comb the brow hairs upward with a small comb and trim any hairs that extend beyond the natural brow line using small scissors — wax or tweeze stray hairs outside the brow shape",
      "Use thinning scissors throughout the entire eyebrow to reduce density",
      "Apply bleach to lighten the brow colour before trimming"
    ],
    correctIndex: 1,
    explanation: "Safe eyebrow trimming: comb brows upward with a clean mascara wand or brow comb to identify hairs exceeding the natural brow length, trim these extended hairs with small, pointed shear tips. Stray hairs outside the brow shape are removed by waxing, threading, or tweezing — not by razor, which risks cutting the skin. Thinning scissors would reduce density too aggressively. The goal is to refine, not dramatically alter, the natural brow shape.",
    order: 79,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Facial and Nape Hair",
    question: "When trimming a moustache, what technique ensures a clean, even upper lip line without cutting the moustache too short?",
    options: [
      "Cut horizontally across the entire moustache at once for speed",
      "Comb the moustache hair downward over the upper lip, trim only the hair extending below the upper lip line using scissors, then comb it to its natural position to check the shape",
      "Use clippers with no guard directly on the moustache area",
      "Have the client smile widely then cut — this shows the natural shape"
    ],
    correctIndex: 1,
    explanation: "For moustache trimming: (1) comb the moustache hair downward to show which hairs extend below the upper lip, (2) trim precisely along the upper lip line with scissors — only the hairs projecting below the lip, (3) comb back to natural position and check for balance. Cutting the moustache while it is combed to its natural position without combing down first risks cutting too much hair because the hair that lies against the lip is not visible. This step-by-step approach avoids removing too much length.",
    order: 80,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "C",
    topicLabel: "MWA C — Facial and Nape Hair",
    question: "During neckline shaving with a straight razor, what is the primary safety concern and how is it managed?",
    options: [
      "Speed — the faster the stroke, the cleaner the shave",
      "The risk of cutting the skin — managed by holding the razor at the correct angle (30–45°), using short, controlled strokes, keeping the skin taut with the non-dominant hand, and maintaining a sharp, clean blade",
      "Razor temperature — the blade must be warmed before use",
      "Applying too much shave cream, which obscures the hairline"
    ],
    correctIndex: 1,
    explanation: "Straight razor neckline shaving carries a risk of skin laceration. Safety is maintained by: holding the blade at 30–45° to the skin (not perpendicular), using short, controlled strokes with the grain of hair growth, keeping the skin taut at all times with the non-dominant hand (to prevent the razor riding into a fold), and using a clean, sharp blade (dull blades require more pressure, increasing cut risk). A stropped, well-maintained blade is essential.",
    order: 81,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "MWA D — Wet Hair Styling",
    question: "What is the purpose of a setting lotion (wet setting foam or liquid) applied before roller setting?",
    options: [
      "To chemically straighten the hair for a smooth set",
      "To provide temporary hold, body, and help the set last longer by stiffening the temporary hydrogen bonds formed as the hair dries around the roller",
      "To condition and moisturise the hair while it sets",
      "To replace the need for a neutralizer after roller setting"
    ],
    correctIndex: 1,
    explanation: "Setting lotions are styling aids that coat the hair shaft to reinforce the temporary change in shape created by wet setting. They work with the hydrogen bonds that form as wet hair dries in the shape of the roller (or other setting tool). The setting agent stiffens the hydrogen bonds slightly, improving hold and longevity of the set. Without setting lotion, the style has less memory and falls more quickly — especially in humid conditions.",
    order: 82,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "MWA D — Wet Hair Styling",
    question: "When performing a wet roller set, what is the correct roller size for producing tight, defined curls?",
    options: [
      "Large rollers (2 inch diameter or more)",
      "Small rollers (3/4 inch or less diameter) — smaller roller = tighter curl",
      "Magnetic rollers produce the tightest curls regardless of size",
      "All roller sizes produce the same curl tightness — only the product formula affects curl size"
    ],
    correctIndex: 1,
    explanation: "The principle of wet roller setting: the smaller the diameter of the roller, the tighter the curl produced when the hair dries. Large rollers produce loose waves and volume. Small rollers produce tight, defined curls or waves. Medium rollers produce medium waves. This relationship applies because the curvature of the roller sets the hair in a curve — a tighter curve (smaller roller) sets the hydrogen bonds into a tighter coil.",
    order: 83,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "MWA D — Wet Hair Styling",
    question: "What must be ensured about the base section size when placing a roller for wet setting?",
    options: [
      "The base section can be any size — it does not affect the result",
      "The base section should not be wider than the roller and should be no longer than the diameter of the roller — ensuring the hair wraps smoothly and the roller sits on its own base for maximum volume at the root",
      "The base section must always be exactly twice the roller diameter",
      "No base sectioning is needed — the hair is simply wound around each roller randomly"
    ],
    correctIndex: 1,
    explanation: "The base section width should not exceed the length (diameter) of the roller, and the depth of the section should not exceed the diameter of the roller. This ensures the entire section wraps smoothly around the roller without overcrowding or missing coverage. Proper base size also determines base control: a section size equal to the roller diameter creates volume at the base (on-base position). Oversized sections cause gaps in the set; undersized sections waste time.",
    order: 84,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "MWA D — Wet Hair Styling",
    question: "A client wants a spiral perm-like curl effect created with wet setting. Which roller placement pattern creates alternating curl directions for a more natural appearance?",
    options: [
      "All rollers placed in the same direction using a brick-lay (offset) pattern",
      "All rollers placed in the same direction top to bottom",
      "Alternating rollers placed toward the face and away from the face in each row — creating directional variation",
      "Spiral wrapping vertically using pin curls only"
    ],
    correctIndex: 0,
    explanation: "A brick-lay (staggered, alternating offset) roller placement mimics the offset pattern of bricklaying. Rollers in each row are staggered from the row above and below — this prevents a consistent straight parting from appearing in the finished set, creates a more natural flow, and allows curls from adjacent rows to blend together. It also helps reduce the appearance of root sections when the set is finished and dressed out.",
    order: 85,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "MWA D — Wet Hair Styling",
    question: "What is a finger wave and on which hair lengths and textures does it work best?",
    options: [
      "A modern wave created with a curling iron on dry hair — works best on long, coarse hair",
      "A sculptural pattern of alternating ridges and waves shaped by the fingers, comb, and waving lotion into damp hair — works best on short to medium-length, fine to medium straight hair",
      "A braiding technique that creates a wave pattern — works best on thick coily hair",
      "A blow-dry technique for creating beach waves — works best on any length"
    ],
    correctIndex: 1,
    explanation: "Finger waving is a classic wet-setting technique where the hairstylist uses fingers, a fine-tooth comb, and waving lotion to sculpt alternating ridges (high points) and waves (hollow points) into damp hair. The pattern is secured with pins or clips until dry. It works best on short to medium, smooth or slightly wavy hair with enough length to follow the pattern, and fine to medium texture that holds the sculpted shape without the weight of coarse or long hair collapsing the waves.",
    order: 86,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "MWA D — Wet Hair Styling",
    question: "How does a diffuser attachment change the effect of a blow dryer on curly or wavy hair?",
    options: [
      "A diffuser concentrates airflow into a single stream for faster drying",
      "A diffuser disperses airflow over a wide area, reducing velocity and turbulence — preserving the curl or wave pattern, enhancing definition, and minimizing frizz",
      "A diffuser heats the air to a higher temperature for faster setting",
      "A diffuser is used only with straightening techniques"
    ],
    correctIndex: 1,
    explanation: "A diffuser is a bowl-shaped attachment with multiple prongs or fingers that disperses the airflow from the blow dryer over a wider, softer area with significantly reduced velocity. This gentle drying action preserves the curl's natural clump and coil pattern without disturbing it, defines curls, reduces frizz (by not separating the curl with high-velocity air), and maintains the shape that a concentrated nozzle would blow out. Ideal for type 2–4 wavy and curly hair.",
    order: 87,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "MWA D — Wet Hair Styling",
    question: "What is the correct sequence for blow-drying a haircut to maximize volume at the root?",
    options: [
      "Dry ends first, then mid-lengths, then roots in any direction",
      "Direct the airflow from the nozzle downward along the cuticle and dry from roots to ends — at the root, use the round brush to lift and dry the hair against its natural fall direction, then direct downward for cuticle smoothing at the ends",
      "Apply maximum heat to the lengths first and finish by blasting the roots with cold air",
      "Flip the head upside down, dry roughly without direction, then flip upright and apply product"
    ],
    correctIndex: 1,
    explanation: "For maximum volume during blow-drying: work from roots to ends, lifting sections with a round brush opposite to the natural fall direction (creating lift at the root) while directing the dryer nozzle downward along the hair (cuticle smoothing). Complete each section with a burst of cool air to set the shape in the hydrogen bonds. The cool shot closes the cuticle, sealing in the smoothness and locking in the volume created by the directional drying.",
    order: 88,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "MWA D — Wet Hair Styling",
    question: "What is 'scrunching' as a drying technique, and for which hair type is it most appropriate?",
    options: [
      "Wrapping the hair tightly in a towel and squeezing — for all hair types",
      "Gathering sections of hair and squeezing upward toward the scalp (scrunching) while diffusing — for wavy and curly hair to encourage and define the natural curl pattern without frizz",
      "Pulling the hair flat against the head and pressing with a brush — for fine, straight hair",
      "Combing the hair upward with a wide-tooth comb while drying — for coarse, thick hair"
    ],
    correctIndex: 1,
    explanation: "Scrunching involves gathering sections of wet, product-applied curly or wavy hair and squeezing it upward toward the scalp in a cupping motion — either with the hands or while holding a diffuser beneath the hair. This encourages the natural curl clump to form, defines waves and curls, and minimizes frizz by avoiding brushing or combing during drying. Pulling or brushing curly hair while it dries breaks the curl clumps and causes frizz.",
    order: 89,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "MWA D — Wet Hair Styling",
    question: "What is the purpose of using a 'concentrator' (nozzle) attachment on a blow dryer?",
    options: [
      "To reduce heat output and prevent damage to fine hair",
      "To diffuse airflow for gentle drying of curly hair",
      "To concentrate and direct airflow into a narrow stream — allowing precision control of direction for smooth blow-drying and directing air down the cuticle for shine",
      "To increase the volume of air output for faster drying of thick hair"
    ],
    correctIndex: 2,
    explanation: "A concentrator nozzle narrows the blow dryer's airflow into a focused, directional stream. This allows the hairstylist to direct air precisely down the hair shaft following the brush, smoothing the cuticle and creating a sleek, smooth finish with shine. It is the essential attachment for smooth blow-dries, Brazilian blowouts, and precision directional drying. For curly hair, the diffuser is preferred as the concentrator's high velocity disrupts curl formation.",
    order: 90,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "MWA D — Wet Hair Styling",
    question: "When applying mousse to wet hair before styling, what is the correct application method?",
    options: [
      "Apply mousse directly to the scalp and massage in for maximum root volume",
      "Dispense a golf-ball to apple-sized amount of mousse into the palm, emulsify between both palms, and work through the hair from roots to ends — scrunching into the hair for curly styles or combing through for smooth styles",
      "Apply mousse only to the hair ends to avoid weighing down the roots",
      "Apply mousse to dry hair at the end of the style for extra hold"
    ],
    correctIndex: 1,
    explanation: "Mousse is a wet styling product applied before drying. The correct method: dispense an appropriate amount (varies by hair length and density — golf ball for short, apple for long), emulsify between palms to break down the foam, and distribute evenly from roots to ends. For curly hair, scrunch in from below; for smooth styles, comb through from root to end. Applying only to ends leaves roots unsupported; applying to dry hair is ineffective as hydrogen bonds are already set.",
    order: 91,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "MWA D — Wet Hair Styling",
    question: "What is a round brush's primary function when used with a blow dryer?",
    options: [
      "To detangle the hair before shampooing",
      "To create a smooth, voluminous blow-dry — the barrel adds curl and direction while the bristles smooth the cuticle; used to create volume, bend, and body in the hair as it dries",
      "To backcomb the hair for added height in updos",
      "To distribute product from roots to ends evenly before a roller set"
    ],
    correctIndex: 1,
    explanation: "A round brush used with a blow dryer serves multiple functions: the cylindrical barrel rolls under or over the hair section creating direction (curl, bend, smoothness), while the bristles grip and smooth the cuticle as heat passes through or over the section. The combination creates volume at the root (when the brush lifts the section), a smooth, closed cuticle for shine, and a shaped bend or curl at the ends. Barrel diameter determines the tightness of the bend — smaller barrels create tighter curls.",
    order: 92,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "MWA D — Wet Hair Styling",
    question: "After completing a roller set or wet set, why must the hair be completely dry before removing the rollers or pins?",
    options: [
      "Removing rollers early has no effect on the finished result",
      "If the hair is removed before fully dry, the hydrogen bonds — which form as the hair dries in the set shape — are not fully established, and the set will not hold, leaving limp, barely defined results",
      "Removing rollers before drying damages the scalp",
      "Partial drying creates more defined curls than complete drying"
    ],
    correctIndex: 1,
    explanation: "The scientific basis of wet setting is the temporary rearrangement of hydrogen bonds. When wet hair is placed in a shaped position (around a roller, in a finger wave) and dried, the hydrogen bonds re-form in the new shape as the water evaporates. If rollers are removed before the hair is completely dry, incomplete hydrogen bond formation results in a weak, fading set. The hair must be completely dry — 100% of the water must evaporate — before removing setting tools.",
    order: 93,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "MWA D — Wet Hair Styling",
    question: "What is a 'pin curl' and what factor determines the resulting curl size?",
    options: [
      "A curl created by wrapping hair around a heated curling iron barrel",
      "A small curl formed by winding a section of wet hair in a circular pattern and securing with a clip or pin — the diameter of the circle formed by the curl determines its size when dry",
      "A curl created by backcombing the hair and pinning it at the root",
      "A curl formed by braiding wet hair and unravelling after drying"
    ],
    correctIndex: 1,
    explanation: "A pin curl is a wet-set curl formed by winding a small section of hair in a circular or flat coil and securing flat against the head with a pin or clip. The diameter of the wound circle determines the finished curl size — a small diameter produces a tight curl; a large diameter produces a wide wave. Pin curls can be placed in various directions and orientations (clockwise, counterclockwise, flat, stand-up) to produce different patterns and effects in the finished style.",
    order: 94,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "MWA D — Dry Hair Styling",
    question: "What is the correct temperature range for a flat iron used on fine, chemically treated hair?",
    options: [
      "230–260°C (450–500°F) — maximum heat for fastest results",
      "120–160°C (250–325°F) — lower temperatures for fine or damaged hair to prevent heat damage",
      "180°C (350°F) is appropriate for all hair types and textures",
      "The temperature setting is irrelevant as long as the passes are quick"
    ],
    correctIndex: 1,
    explanation: "Heat damage is cumulative and irreversible. Fine or chemically treated hair has a thinner cuticle and cortex with less protein density — it reaches damaging temperatures more quickly. A lower temperature setting (120–160°C) achieves straightening for fine hair without burning or denaturing the keratin protein. Coarse, resistant hair may require higher temperatures (175–200°C). Maximum heat (230°C+) on fine or damaged hair causes immediate irreversible cortex damage.",
    order: 95,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "MWA D — Dry Hair Styling",
    question: "When using a curling iron to create defined spiral curls, which wrapping direction technique produces the most uniform result?",
    options: [
      "Wrap all sections in the same direction (all toward or all away from face) for the entire head",
      "Alternate the wrapping direction on each section across the head",
      "Wrap only the ends of each section, leaving the mid-lengths straight",
      "Apply maximum tension to each section and hold for 60 seconds per curl regardless of hair texture or condition"
    ],
    correctIndex: 0,
    explanation: "For defined, uniform spiral curls, consistent wrapping direction throughout is essential. Wrapping all sections in the same direction (all toward the face or all away from the face, or alternating by row in a deliberate pattern) ensures the curls follow a consistent flow. Random alternating direction produces inconsistent curl directions that create a messy rather than defined result. Each section is wound from the roots or mid-lengths to the ends around the barrel.",
    order: 96,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "MWA D — Dry Hair Styling",
    question: "What is the purpose of applying a heat protectant product before using thermal tools (flat iron, curling iron, blow dryer)?",
    options: [
      "Heat protectants chemically straighten the hair, making thermal tools more effective",
      "Heat protectants coat the hair shaft with a film of silicone or polymer that reduces direct heat transfer to the cortex, reducing the risk of protein denaturation and moisture loss",
      "Heat protectants allow the use of higher temperatures without any risk of damage",
      "Heat protectants add fragrance to the hair during thermal styling"
    ],
    correctIndex: 1,
    explanation: "Heat protectants work by forming a protective coating on the hair shaft that acts as a thermal buffer — reducing the rate of heat transfer to the hair's cortex and cuticle. They typically contain silicones (dimethicone, cyclopentasiloxane) and/or PVP polymers that can withstand high temperatures. They significantly reduce protein denaturation (irreversible structural damage), moisture loss, and cuticle lifting caused by thermal tools — especially important for fine, colour-treated, or previously damaged hair.",
    order: 97,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "MWA D — Dry Hair Styling",
    question: "What is the backcombing (teasing) technique and what effect does it create?",
    options: [
      "Combing hair downward from ends to roots — used to remove tangles",
      "Combing or raking small amounts of hair backward from the ends toward the root, creating a compact, tangled mass of hair at the root area — used to create volume, height, and support for updos and elevated styles",
      "Combing hair in an upward direction using a wide-tooth comb to add volume",
      "Applying hairspray while combing — a combined product-and-technique for hold"
    ],
    correctIndex: 1,
    explanation: "Backcombing (teasing or ratting) is performed by holding a small section of hair upright and combing from mid-lengths toward the roots in small, firm strokes — creating a matted, interlocked base of hair at the root region. This provides height, volume, and structural support for updos and elevated styles that would otherwise collapse. To avoid damage, back-combing should be gentle and on healthy hair only; removing teasing requires patient detangling from ends inward.",
    order: 98,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "MWA D — Dry Hair Styling",
    question: "What is the function of hairspray as a finishing product, and what is the difference between a light-hold and a maximum-hold hairspray?",
    options: [
      "All hairsprays provide the same hold — differences are only in fragrance",
      "Hairspray creates a film over the finished style to maintain shape; light-hold sprays create a flexible, touchable film suitable for everyday styles; maximum-hold sprays create a rigid, stiff film for styles requiring maximum longevity such as updos or theatrical work",
      "Hairspray conditions the hair while providing hold",
      "Hairspray should be applied before all other styling products as a base coat"
    ],
    correctIndex: 1,
    explanation: "Hairspray is a finishing product sprayed over the completed style. It deposits a polymer film (PVP, PVP/VA) on the hair surface that maintains the style's shape. Light-hold sprays form a flexible film that allows movement and can be brushed through — for soft, wearable everyday styles. Maximum-hold sprays form a rigid, stiff film that locks the style in place — used for structured updos, competitive styling, or theatrical work where longevity and firmness are paramount.",
    order: 99,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "MWA D — Dry Hair Styling",
    question: "A client requests a sleek, smooth updo for a formal event. What products and tools are essential?",
    options: [
      "Dry shampoo, thinning scissors, and a wide-tooth comb",
      "Smoothing serum or anti-frizz cream (applied to damp hair before drying), a bristle brush for final smoothing, bobby pins and hair pins for structure, and a strong-hold hairspray for finishing",
      "Maximum-hold gel applied to wet hair, followed by air-drying and pinning",
      "Only mousse and a blow dryer — no pins or spray needed"
    ],
    correctIndex: 1,
    explanation: "A sleek formal updo requires: (1) smoothing product (serum, cream) applied damp to reduce frizz and add shine, (2) a smooth blow-dry with a boar-bristle brush to close the cuticle, (3) sectioning and pinning structure using bobby pins and hair pins — bobby pins grip sections, pins secure the style invisibly, (4) strong-hold hairspray to lock the finished style and manage flyaways. Without proper product and pinning technique, the style will not hold through an event.",
    order: 100,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "MWA D — Dry Hair Styling",
    question: "What is the purpose of using a pomade versus a mousse when finishing a style?",
    options: [
      "They are interchangeable — both work identically on all hair types",
      "Pomade is a heavy, oil- or wax-based product that provides strong hold, definition, and shine with a wet or polished finish — best for short, defined styles; mousse is a lightweight foam applied to wet hair to provide flexible hold, body, and support for volume-based or curl-enhancing styles",
      "Mousse is only for curly hair; pomade is only for straight hair",
      "Pomade opens the cuticle; mousse closes it"
    ],
    correctIndex: 1,
    explanation: "Pomades (oil-based, wax-based, or water-based) provide hold and definition with a shiny, polished, or textured finish — applied to dry or slightly damp hair. Ideal for short styles (quiffs, pompadours, defined beards, slick-backs). Mousse is a wet-apply foam that provides flexible hold, volume, and curl enhancement without heaviness — best applied to wet hair before drying. Using pomade on long, fine hair weights it down; using mousse on an updo provides insufficient structural hold.",
    order: 101,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "MWA D — Dry Hair Styling",
    question: "When using a flat iron to create a sleek, straight result, which technique minimizes the number of passes required and reduces heat exposure?",
    options: [
      "Use maximum heat and fast passes, repeating until straight",
      "Ensure the hair is completely dry, section thinly (no thicker than the width of the flat iron plate), apply heat protectant, and glide the iron slowly and steadily in one smooth pass from root to end — maintaining consistent tension and angle",
      "Use the flat iron on wet hair to save time drying first",
      "Apply no product and use maximum tension while ironing"
    ],
    correctIndex: 1,
    explanation: "Minimizing flat iron passes reduces cumulative heat damage. Best technique: section hair thinly enough to fit within the iron plates without overflow, apply heat protectant, and glide the iron in one slow, steady pass from close to the root to the ends — maintaining consistent pressure and speed. One thorough pass on a thin section is far more effective (and less damaging) than multiple rushed passes on thick sections. Damp hair in a flat iron causes 'steam damage' — always completely dry first.",
    order: 102,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "MWA D — Dry Hair Styling",
    question: "What is braiding and how does the three-strand braid differ from a French braid?",
    options: [
      "They are the same braid — 'French braid' is just a regional name for a three-strand braid",
      "A three-strand braid is formed entirely from three sections hanging freely from a fixed starting point; a French braid incorporates additional hair from the scalp into each crossing motion, anchoring the braid to the head and creating an on-the-scalp, seamlessly integrated effect",
      "French braids use four strands; three-strand braids use three",
      "A three-strand braid is tighter than a French braid"
    ],
    correctIndex: 1,
    explanation: "A three-strand (plait) braid starts at one point and crosses three free-hanging sections — the resulting braid hangs away from the scalp. A French braid starts at the hairline or crown and with each crossing motion, a small section of unbraided hair is picked up and incorporated into the strand before crossing — anchoring the braid to the scalp and creating a herringbone-like integrated pattern that lies flat against the head. The Dutch braid is the reverse (crossing under rather than over).",
    order: 103,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "MWA D — Dry Hair Styling",
    question: "When creating an updo for a client with a wedding, what is the most important first step?",
    options: [
      "Begin pinning immediately to save time",
      "Complete a thorough consultation including viewing inspiration photos, determining the desired style, assessing hair texture and length for feasibility, discussing the timeline and scheduling a trial run",
      "Apply maximum-hold gel to the hair before even discussing the style",
      "Trim the hair on the wedding day to freshen the cut before styling"
    ],
    correctIndex: 1,
    explanation: "A bridal updo is a high-stakes service. The most critical first step is consultation — including reviewing inspiration photos for mutual vision, assessing hair characteristics (length, texture, density, health) to determine what is achievable, discussing the dress neckline and accessories, setting the timeline, and scheduling a bridal trial run well before the wedding day. A trial run identifies any needed adjustments and ensures both client and stylist are fully aligned on the style before the event.",
    order: 104,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "MWA D — Dry Hair Styling",
    question: "What is the function of dry shampoo as a styling/finishing product?",
    options: [
      "It cleanses the hair as effectively as a water-and-shampoo wash",
      "It absorbs excess sebum (scalp oil) at the root area, refreshes the hair between washes, adds texture and grip for styling, and extends the life of a style — it does not replace a proper shampoo",
      "It conditions the ends of dry hair to prevent breakage",
      "It adds shine to the hair when sprayed on the mid-lengths and ends"
    ],
    correctIndex: 1,
    explanation: "Dry shampoo contains starch, talc, or kaolin clay that physically absorbs excess scalp oil (sebum) and sweat when sprayed at the roots. This removes the greasy, flat appearance of unwashed hair, adds texture and grip for second-day styling, and extends the time between shampoo washes. It is not a substitute for shampooing — it does not remove scalp bacteria, chemical residue, or deep-seated buildup, and regular overuse can cause product accumulation at the follicle.",
    order: 105,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "MWA D — Dry Hair Styling",
    question: "A client has short, fine, straight hair and wants maximum volume for a special occasion. Which combination of products and techniques will best achieve this?",
    options: [
      "Apply heavy serum to roots and ends, blow-dry flat, then backcomb aggressively",
      "Apply volumizing mousse to damp roots, blow-dry using a round brush with lift at the roots, use a medium-hold spray, and backcomb lightly at the crown for additional height",
      "Air-dry and apply maximum-hold gel while wet for long-lasting volume",
      "Apply pomade to dry hair and backcomb heavily — no blow-dry needed"
    ],
    correctIndex: 1,
    explanation: "For fine, straight hair requiring maximum volume: (1) volumizing mousse applied at the roots provides body and hold at the root zone — the area where fine hair collapses most; (2) blow-drying with a round brush while directing air upward at the root lifts and dries the root with volume built in; (3) light backcombing at the crown adds height; (4) medium-hold hairspray maintains the volume without weighing the fine hair down. Heavy serums and oils would immediately flatten fine hair.",
    order: 106,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "MWA D — Dry Hair Styling",
    question: "When applying thermal protectant before using a flat iron, what should the hairstylist verify before pressing the iron on the hair?",
    options: [
      "That the iron is at maximum temperature to process the protectant",
      "That the hair is completely dry — applying a flat iron to product-applied damp hair creates steam within the cortex, causing severe internal damage called 'bubble hair'",
      "That no protectant is used, as it reduces the iron's effectiveness",
      "That the product is oil-based for maximum heat resistance"
    ],
    correctIndex: 1,
    explanation: "'Bubble hair' is a form of severe heat damage where moisture trapped inside the hair shaft is superheated by a flat iron, turning to steam and creating internal bubbles that rupture the cortex. Even a small amount of residual moisture or a wet heat protectant that hasn't dried can cause this. The hair must be 100% dry before pressing with any thermal tool. Always pass the iron through the air first to listen/feel for any sizzling — an indicator of moisture.",
    order: 107,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "D",
    topicLabel: "MWA D — Dry Hair Styling",
    question: "A client with naturally coily Type 4 hair wants a wash-and-go style with maximum definition. Which product application technique best supports this goal?",
    options: [
      "Apply a light serum to dry hair and comb through aggressively to separate coils",
      "Apply a leave-in conditioner, then a curl cream, then a gel (the LOC or LCO method) section by section to soaking-wet hair, smooth each section without disturbing the curl clump, and diffuse or air-dry without touching until fully dry",
      "Apply maximum-hold mousse to dry hair and scrunch upward",
      "Blow-dry on high heat first then apply curl cream to reactivate coils"
    ],
    correctIndex: 1,
    explanation: "Type 4 coily hair benefits from the LOC (Leave-in, Oil, Cream) or LCO method applied to soaking-wet hair — the water provides slip and hydration while the layered products seal moisture in and define curl clumps. Products are applied section by section, smoothing gently to encourage the curl to clump together. The hair must not be disturbed until completely dry (diffuse or air-dry) — any manipulation while drying causes frizz by separating curl clumps. The 'cast' from gel, once dry, is scrunched out gently.",
    order: 108,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "MWA E — Permanent Waving",
    question: "What is the active ingredient in most alkaline (cold wave) permanent waving solutions, and at what pH do they typically operate?",
    options: [
      "Hydrogen peroxide at pH 3–4",
      "Ammonium thioglycolate at pH 8.5–9.5",
      "Sodium hydroxide at pH 12–14",
      "Cysteamine at pH 6–7"
    ],
    correctIndex: 1,
    explanation: "Alkaline (cold wave) permanent waving solutions use ammonium thioglycolate (ATG) as the active reducing agent at pH 8.5–9.5. The alkaline pH swells and opens the hair cuticle, allowing the thioglycolate ion to penetrate the cortex and break the disulfide (cystine) bonds — softening the hair so it conforms to the rod shape. Sodium hydroxide is used in hydroxide relaxers. Hydrogen peroxide is the neutralizer. Cysteamine is the active in 'true acid' perms.",
    order: 109,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "MWA E — Permanent Waving",
    question: "What is the chemical action of the neutralizer (fixative) in a permanent wave service?",
    options: [
      "It removes the waving solution from the hair by washing it away",
      "It re-oxidises the broken disulfide bonds in their new position around the rod, permanently fixing the wave pattern into the cortex",
      "It acidifies the cortex to create the wave without rods",
      "It opens the cuticle so the waving solution can penetrate more deeply"
    ],
    correctIndex: 1,
    explanation: "The neutralizer (typically hydrogen peroxide at 5–10 volume) re-oxidises (reforms) the disulfide bonds that were broken by the waving solution — now in their new position around the rod. This permanently fixes the new curl or wave configuration into the cortex's protein structure. Without proper neutralization, the bonds remain open, the curl relaxes out, and the hair is weakened and frizzy. Thorough rinsing of the waving solution BEFORE applying the neutralizer is essential.",
    order: 110,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "MWA E — Permanent Waving",
    question: "During a permanent wave, the stylist performs an S-test (strand test) by unrolling a small section of hair from the rod and pushing it gently. What does a well-formed 'S' pattern indicate?",
    options: [
      "The hair needs more processing time — the S is not yet defined enough",
      "The hair is sufficiently softened and the wave pattern has formed correctly — processing is complete and the neutralizer should be applied",
      "The hair is over-processed — the S means the disulfide bonds have been broken permanently",
      "The waving solution should be reapplied to deepen the wave"
    ],
    correctIndex: 1,
    explanation: "The S-test is the standard method to determine when a cold wave has processed sufficiently. When a small section of hair is gently unrolled from the rod and pushed from the ends toward the roots, a clear, defined S-shaped wave pattern that mirrors the rod diameter indicates adequate processing — the disulfide bonds have been sufficiently softened and the hair has assumed the rod's shape. An undefined or very loose S indicates under-processing; the complete absence of an S, or a frizzy, spongy texture, indicates over-processing.",
    order: 111,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "MWA E — Permanent Waving",
    question: "A client has fine, highlighted hair that shows low elasticity. Which permanent wave selection is most appropriate?",
    options: [
      "A strong alkaline wave (high pH, high ATG concentration) for a long-lasting result",
      "Refuse the service — any permed fine, highlighted hair will break",
      "A gentle acid-balanced or cysteamine wave at a lower pH, combined with a pre-service protein treatment and careful S-test monitoring",
      "Apply a regular alkaline wave but leave it on for only half the normal time"
    ],
    correctIndex: 2,
    explanation: "Fine, highlighted hair has reduced protein integrity and elevated porosity — making it vulnerable to over-processing with strong alkaline waves. An acid-balanced wave (pH 6.5–7) or cysteamine wave requires heat activation, processes more slowly and gently, and causes less cuticle disruption. A pre-service protein/conditioning treatment rebuilds cortex integrity. Careful S-test monitoring every 5 minutes prevents over-processing. Strong alkaline waves risk breakage and severe frizz on this hair type.",
    order: 112,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "MWA E — Permanent Waving",
    question: "What is the purpose of applying a protective base cream around the hairline and ears before a permanent wave service?",
    options: [
      "To help the waving solution process more quickly in the hairline area",
      "To protect the delicate facial skin from chemical irritation by the waving solution — the alkaline pH can cause redness, burns, or allergic reactions on exposed skin",
      "To prevent the hairline hair from being wrapped onto rods",
      "To keep the hairline hair straight while the rest of the hair is permed"
    ],
    correctIndex: 1,
    explanation: "The waving solution (pH 8.5–9.5) is caustic to skin, particularly in sensitive areas like the hairline, forehead, ears, and nape. A petroleum-based barrier cream applied to these areas before the service protects the skin from direct contact with the chemical, preventing redness, irritation, and chemical burns. This is standard protocol for all chemical texture services including relaxers.",
    order: 113,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "MWA E — Permanent Waving",
    question: "When wrapping rods for a permanent wave, what is 'base control' and which base placement provides maximum root volume?",
    options: [
      "Base control describes the tension used when wrapping — on-base wrapping uses the tightest tension",
      "Base control refers to where the rod sits in relation to its own base section. On-base placement (rod sitting directly on its base) provides maximum root volume and lift; half-off base provides moderate lift; off-base provides minimal root lift",
      "Base control is the diameter of the rod chosen — larger rods always produce more root volume",
      "Base control is the application order of the waving solution — always applied from nape to front for maximum volume"
    ],
    correctIndex: 1,
    explanation: "Base control determines the angle at which the hair is wound onto the rod and where the rod sits relative to its own base section. On-base: hair is elevated to 135° (above horizontal) before wrapping — the rod sits directly on top of its base, producing maximum root volume and lift. Half-off base: hair elevated to 90° — moderate volume. Off-base: hair elevated below 45° — minimal root volume, minimal lift, more drape. Base control is chosen based on the desired finished volume at the root.",
    order: 114,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "MWA E — Permanent Waving",
    question: "What is 'over-processing' in a permanent wave, and what are the visual and tactile signs?",
    options: [
      "Using too many rods — the hair is too tightly wrapped",
      "Leaving the waving solution on longer than needed — the hair's disulfide bonds and peptide bonds are excessively broken, resulting in extreme frizz, loss of elasticity, mushy texture when wet, and potential breakage",
      "Applying the neutralizer for too long — the wave is set too firmly",
      "Selecting a rod that is too small for the hair length"
    ],
    correctIndex: 1,
    explanation: "Over-processing occurs when the waving solution is left on beyond the required time — excessive disulfide bond breaking, extending into peptide (backbone) bond damage. Signs: the S-test shows no defined curl (hair is limp or frizzy rather than wave-formed), hair has a mushy, spongy texture when wet and reduced elasticity, the finished result is frizzy and weak rather than defined, and in severe cases breakage occurs. Over-processing is irreversible — affected hair must grow out.",
    order: 115,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "MWA E — Permanent Waving",
    question: "Why must the waving solution be thoroughly rinsed from the hair (typically 3–5 minutes) before the neutralizer is applied?",
    options: [
      "To prevent the neutralizer from working too quickly",
      "Residual waving solution contains thioglycolate that would react with the hydrogen peroxide neutralizer — reducing its effectiveness and potentially causing uneven bonding; thorough rinsing ensures the neutralizer acts only on the broken disulfide bonds",
      "To cool the hair down before applying the neutralizer",
      "To remove the rod endpapers which would otherwise block neutralizer penetration"
    ],
    correctIndex: 1,
    explanation: "Thorough rinsing is critical because residual thioglycolate in the hair would react with and consume the hydrogen peroxide neutralizer (a competing oxidation-reduction reaction) before it can re-oxidize the broken disulfide bonds. This leaves bonds incompletely reformed — producing a weak, under-neutralized wave that relaxes quickly and leaves the hair damaged and frizzy. A complete rinse (at least 3–5 minutes) ensures the neutralizer has 100% of its oxidizing capacity available to reform the disulfide bonds.",
    order: 116,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "MWA E — Permanent Waving",
    question: "What type of permanent wave rod produces a loose, natural-looking spiral wave rather than a traditional S-wave?",
    options: [
      "Standard straight cylindrical rod",
      "Concave (centre-dip) rod",
      "Spiral or corkscrew rod — the hair is wound lengthwise along a vertically positioned rod, producing an elongated spiral",
      "Bender (flexible foam) rod wound in the standard horizontal method"
    ],
    correctIndex: 2,
    explanation: "A spiral rod (also called a corkscrew or vertical rod) is wound lengthwise — the hair is wound diagonally from base to tip along the vertical length of the rod rather than horizontally around the circumference. This produces an elongated spiral or corkscrew curl that looks natural and falls more like a ringlet than a traditional S-wave. Standard horizontal wrapping on straight rods produces S-waves. The spiral technique requires longer rods and a specific wrapping angle.",
    order: 117,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "MWA E — Permanent Waving",
    question: "A client's permanent wave result is uneven — some areas have defined curl, others are barely wavy. What is the most likely cause?",
    options: [
      "The rods were too large for the hair length",
      "Uneven saturation of the waving solution — areas that received insufficient product processed less; may also result from inconsistent wrapping tension creating uneven rod contact",
      "The neutralizer was applied too quickly after rinsing",
      "The client's hair was too short for an even result"
    ],
    correctIndex: 1,
    explanation: "Uneven perm results are most commonly caused by inadequate or inconsistent saturation of the waving solution. Areas with insufficient product do not process fully — producing a weaker, less-defined wave or no wave. Contributing factors: thick sections preventing product from reaching the inner layers, wrapping tension inconsistencies (too tight prevents penetration, too loose allows slipping), or inconsistent processing time if the solution was applied gradually over a long period. Systematic, thorough saturation of each rod immediately after wrapping is essential.",
    order: 118,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "MWA E — Permanent Waving",
    question: "How long should a client typically wait before shampooing after a permanent wave service?",
    options: [
      "Immediately — shampooing after the service improves the wave definition",
      "24–48 hours — newly formed disulfide bonds need time to fully stabilize; shampooing or wetting the hair too soon can weaken or relax the freshly set wave",
      "At least 2 weeks — the wave is not chemically stable for 14 days",
      "No waiting period is needed with modern neutralizers"
    ],
    correctIndex: 1,
    explanation: "After a perm, the newly reformed disulfide bonds require 24–48 hours to fully stabilize and oxidize completely. Wetting, shampooing, or placing the hair in a tight style too soon can disturb the newly set bonds before they are fully stable, resulting in a relaxed or weakened wave. Clients should be advised to avoid wetting, shampooing, or tying up the hair for 48 hours after the service for best longevity.",
    order: 119,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "MWA E — Permanent Waving",
    question: "What is the difference between an 'alkaline' (cold wave) and a 'true acid' (heat-activated) permanent wave?",
    options: [
      "Alkaline waves use higher temperatures; acid waves are processed at room temperature",
      "Alkaline waves (pH 8.5–9.5) process at room temperature without heat and produce stronger, longer-lasting waves; true acid waves (pH 4.5–7) require heat activation from a dryer or hood, process more slowly, are gentler on the hair, and produce softer waves — preferred for fine, fragile, or chemically treated hair",
      "Acid waves use sodium hydroxide; alkaline waves use thioglycolate",
      "There is no practical difference — both produce identical results"
    ],
    correctIndex: 1,
    explanation: "Alkaline cold waves use ATG at pH 8.5–9.5 — no heat required, faster processing, stronger wave result, more potential for damage on delicate hair. True acid waves use glyceryl monothioglycolate (GMTG) at pH 4.5–7.0 — require external heat (dryer) for activation, process slowly, are gentler on the cuticle, produce softer waves, and are better tolerated by fine, highlighted, or previously processed hair. Acid waves have a longer lasting chemical change in the hair but require the heat activation step.",
    order: 120,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "MWA E — Permanent Waving",
    question: "What is a 'body wave' and how does it differ from a standard perm?",
    options: [
      "A body wave uses a different chemical — glycolic acid — instead of thioglycolate",
      "A body wave uses large-diameter rods and shorter processing time to produce loose waves and added volume rather than defined tight curls — the curl pattern is intentionally soft and natural-looking",
      "A body wave is a heat-based treatment that straightens the hair temporarily",
      "A body wave and a standard perm produce the same result — the name is only a marketing term"
    ],
    correctIndex: 1,
    explanation: "A body wave uses large rods (32 mm and above) and is typically processed for a shorter time to produce a loose, soft wave pattern with body and volume — not tight defined curls. The goal is to add fullness and movement to flat, fine, or limp hair rather than create curl. Standard perms use smaller to medium rods and longer processing for defined curl patterns. The chemical process is identical — the rod size and processing time differentiate the result.",
    order: 121,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "MWA E — Permanent Waving",
    question: "A client wants a permanent wave but also has permanent hair colour applied at the same appointment. In what order should these services be performed, and why?",
    options: [
      "Colour first, then perm the same day — the colour needs to be fresh before chemical services",
      "Perm first, wait the full 48-hour stabilization period, then colour — the waving solution and neutralizer chemically alter the hair, affecting colour uptake; colouring first then perming would strip the colour",
      "Both services can be done simultaneously to save time",
      "Colour and perm can be done in any order as long as a deep conditioner is applied between services"
    ],
    correctIndex: 1,
    explanation: "Always perm first, then colour — ideally with at least 48–72 hours between services. Reasons: (1) the waving solution's alkaline pH and reducing action removes freshly applied colour from the cortex; (2) the hair must be in a stable state before colour is applied; (3) the perm process opens the cuticle maximally, making the hair receptive to colour after the wave is set. Applying colour first then perming within the same service removes the colour investment and may cause uneven results.",
    order: 122,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "MWA E — Chemical Relaxers",
    question: "What is the key chemical difference between a lye (sodium hydroxide) relaxer and a no-lye (calcium hydroxide/guanidine) relaxer?",
    options: [
      "They are chemically identical — 'lye' and 'no-lye' are only marketing terms",
      "Lye relaxers use sodium hydroxide (NaOH) at pH 12–14, process quickly, and are more effective on resistant hair; no-lye relaxers use calcium hydroxide activated with guanidine carbonate at a slightly lower pH — gentler on the scalp but can cause more dryness in the hair shaft",
      "No-lye relaxers are stronger than lye relaxers",
      "Lye relaxers require heat activation; no-lye relaxers process at room temperature"
    ],
    correctIndex: 1,
    explanation: "Sodium hydroxide (lye) relaxers operate at pH 12–14, are highly effective even on coarse, resistant hair, process quickly, and require careful scalp protection. No-lye relaxers combine calcium hydroxide + guanidine carbonate at mixing, producing guanidine hydroxide at a slightly lower pH — generally gentler on the scalp but tend to cause more calcium buildup in the hair shaft (leading to dryness and brittleness over time). A chelating shampoo is recommended after no-lye services to remove calcium deposits.",
    order: 123,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "MWA E — Chemical Relaxers",
    question: "When applying a sodium hydroxide relaxer, what is the correct application sequence and why?",
    options: [
      "Apply from hairline to nape in one pass for consistent timing",
      "Apply to the most resistant sections first (typically the back/nape), work toward the most sensitive areas (front hairline and temples), and always apply to the new growth only — avoiding previously relaxed hair to prevent over-processing",
      "Apply to previously relaxed hair first to refresh the straightening, then apply to new growth",
      "Apply to the hairline first so the client can see immediate results"
    ],
    correctIndex: 1,
    explanation: "Hydroxide relaxers work extremely quickly — consistent timing is critical. Application begins at the most resistant area (usually the back/nape where hair is often coarser and thicker) and progresses toward the most sensitive areas (front hairline, temples) so all sections have approximately equal processing time. Application goes to new growth ONLY — applying relaxer over previously relaxed hair causes severe over-processing and breakage in the weakened, already-straightened sections.",
    order: 124,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "MWA E — Chemical Relaxers",
    question: "How does a sodium hydroxide relaxer permanently straighten hair at the molecular level?",
    options: [
      "It breaks the hydrogen bonds in the hair, which are then re-formed in a straight position",
      "It permanently breaks and rearranges the disulfide bonds in the cortex through lanthionization — converting cystine (disulfide) bonds to lanthionine bonds, which are permanent single sulfur bonds that cannot be re-formed by neutralizer",
      "It melts the cuticle layer, allowing the cortex to expand into a straight shape",
      "It uses the same chemistry as a perm neutralizer to set the hair straight"
    ],
    correctIndex: 1,
    explanation: "Hydroxide relaxers (NaOH, KOH, guanidine hydroxide, lithium hydroxide) straighten hair through lanthionization — the hydroxide ions break disulfide bonds and simultaneously convert them to permanent lanthionine bonds in the straightened position. Unlike thio perms (where neutralizer re-oxidizes disulfide bonds), hydroxide relaxers do NOT use a neutralizer to refix bonds — the lanthionine bond is permanent and cannot be reversed. A normalizing/neutralizing shampoo is used to stop the hydroxide action and restore pH.",
    order: 125,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "MWA E — Chemical Relaxers",
    question: "A client has not had a relaxer for 8 months and has significant new growth. What is the MOST important pre-service assessment?",
    options: [
      "Checking the client's preferred fragrance of the relaxer product",
      "Assessing the scalp for any abrasions, scalp conditions, open sores, or irritations — any break in the skin is an absolute contraindication for hydroxide relaxer application",
      "Checking whether the client has used conditioner recently",
      "Measuring the exact length of new growth with a ruler"
    ],
    correctIndex: 1,
    explanation: "Hydroxide relaxers (pH 12–14) cause severe chemical burns on broken or abraded skin. A thorough scalp examination is the most critical pre-service assessment. Any open sores, scratches, abrasions, active scalp conditions, or recent scratching must be identified — these are absolute contraindications. The scalp should not be scratched or shampooed for at least 3–7 days before a relaxer to allow the skin barrier to be fully intact.",
    order: 126,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "MWA E — Chemical Relaxers",
    question: "What is the purpose of applying a base (protective base cream or petroleum jelly) to the scalp before a sodium hydroxide relaxer?",
    options: [
      "It helps the relaxer process more quickly at the scalp",
      "It creates a protective barrier on the scalp skin to prevent the highly alkaline relaxer (pH 12–14) from contacting the scalp directly and causing chemical burns",
      "It conditions the scalp to prevent dryness after the service",
      "It holds the sections in place during application"
    ],
    correctIndex: 1,
    explanation: "A 'base' (petroleum jelly, Vaseline, or specialized protective cream) is applied to the scalp — especially the hairline, ears, and nape — before a lye relaxer application. The petroleum creates a physical barrier that resists the highly caustic sodium hydroxide from penetrating and burning the scalp skin. 'Basing' the scalp is a standard safety protocol for all hydroxide relaxer services. No-lye relaxers are sometimes used 'no-base' due to their slightly lower pH, but scalp sensitivity must still be considered.",
    order: 127,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "MWA E — Chemical Relaxers",
    question: "What is a 'normalizing' or 'neutralizing' shampoo used at the end of a hydroxide relaxer service, and why is it different from a regular shampoo?",
    options: [
      "It is a high-pH shampoo that adds extra lifting to the hair after relaxing",
      "It is a mildly acidic shampoo formulated to stop the hydroxide chemical reaction and restore the hair and scalp to a normal pH after the highly alkaline relaxer — preventing continued damage after the relaxer is rinsed",
      "It permanently neutralizes the straightening effect if left on too long",
      "It is identical to a regular salon shampoo — 'normalizing' is only a marketing term"
    ],
    correctIndex: 1,
    explanation: "Hydroxide relaxers work at pH 12–14. After rinsing, residual hydroxide in the hair continues to break bonds and damage the protein structure. A normalizing/neutralizing shampoo is mildly acidic (pH 4–5.5) with indicators that change colour (from pink to white) when all the alkaline residue is neutralized — providing a visual confirmation. Multiple lathers are performed until the shampoo no longer changes colour, confirming the pH is fully normalized. This step is critical to stopping damage.",
    order: 128,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "MWA E — Chemical Relaxers",
    question: "A client who has a thio (ATG) permanent wave in her hair asks for a sodium hydroxide relaxer at the same appointment. What is the professional response?",
    options: [
      "Apply both — the perm first, then the relaxer in the same session",
      "Refuse the service entirely and permanently — this combination is never possible",
      "Explain that thio-permed hair and hydroxide relaxers are chemically incompatible — hydroxide applied over thio-processed hair causes severe breakage; the service must be refused until the perm has grown out",
      "Apply the relaxer first, then re-perm the same day"
    ],
    correctIndex: 2,
    explanation: "Thio-processed hair (perm) and hydroxide-processed hair are chemically incompatible. Thio perms leave lanthionine-like cross-links that are unstable when exposed to a strong hydroxide. More critically, hydroxide relaxers applied over ATG-permed hair cause catastrophic breakage — the hair literally dissolves under the combination. This is the most serious chemical incompatibility in professional hairstyling. The perm must grow out completely before any hydroxide service is performed.",
    order: 129,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "MWA E — Chemical Relaxers",
    question: "What is 'smoothing' (or 'relaxer smoothing') during a hydroxide relaxer application, and why must it be performed carefully?",
    options: [
      "Smoothing is the final blow-dry technique after the relaxer is rinsed",
      "Smoothing is the physical manipulation of the relaxer through the hair using the back of a comb or gloved fingers — it physically straightens the hair in conjunction with the chemical action; it must be done gently to avoid breaking the softened hair, which is at its most fragile during processing",
      "Smoothing is applying the protective base cream before relaxer application",
      "Smoothing is a technique for removing the relaxer from the scalp using a damp cloth"
    ],
    correctIndex: 1,
    explanation: "Relaxer smoothing combines chemical and physical straightening — the hairstylist uses the back of a fine-tooth comb or gloved fingers to gently smooth sections straight as the chemical softens the disulfide bonds. This physical action assists the chemical in achieving maximum straightness. However, the hair is at its most fragile during this process — it must be smoothed gently without pulling, stretching, or excessive tension. Aggressive combing or rough manipulation at this stage causes breakage of the weakened cortex.",
    order: 130,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "MWA E — Chemical Relaxers",
    question: "How does a stylist determine which relaxer strength (mild, regular, super) to select for a client?",
    options: [
      "Always start with super-strength for the fastest results regardless of hair type",
      "Based on the client's hair texture and coarseness: mild for fine or sensitised hair; regular for medium texture; super for coarse, resistant, or very tightly coiled hair — always begin with the mildest effective strength",
      "Select strength based on the client's skin tone",
      "Use only the brand's regular strength — mild and super are not professional products"
    ],
    correctIndex: 1,
    explanation: "Relaxer strength is selected based on hair texture (fine, medium, coarse) and resistance (how tightly coiled). The professional guideline is to begin with the mildest strength that will achieve the desired result — to protect the hair's integrity. Mild: fine, colour-treated, sensitized, or previously relaxed hair. Regular: medium-textured hair. Super: coarse, resistant, tightly coiled hair that processes slowly. Using too strong a formulation causes over-processing and breakage; too mild requires more processing time.",
    order: 131,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "MWA E — Chemical Relaxers",
    question: "A client who self-applied a no-lye box relaxer at home visits the salon. Her hair is dry, breaking, and has calcium deposits. What professional treatment is recommended first?",
    options: [
      "Apply a fresh professional lye relaxer immediately to correct the previous result",
      "Perform a chelating treatment to remove calcium deposits left by the no-lye relaxer, followed by an intensive protein and moisture treatment program — a professional relaxer can be considered only after the hair's integrity is restored",
      "Cut all the hair off and start fresh",
      "Apply a toning treatment to change the hair colour"
    ],
    correctIndex: 1,
    explanation: "No-lye (calcium hydroxide) relaxers deposit calcium in the hair shaft over time, causing dryness, brittleness, and mineral buildup. The corrective protocol: (1) chelating treatment to remove calcium deposits, (2) assess hair integrity — elasticity and moisture balance, (3) intensive protein treatment to rebuild cortex strength, (4) moisture treatment to restore hydration. Only after the hair demonstrates adequate health indicators should a relaxer be considered. Applying another relaxer over already-compromised hair risks catastrophic breakage.",
    order: 132,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "MWA E — Chemical Relaxers",
    question: "What is a 'keratin smoothing treatment' (Brazilian Blowout, Cezanne, etc.) and how does it differ from a chemical relaxer?",
    options: [
      "Keratin treatments are identical to lye relaxers but with a different brand name",
      "Keratin smoothing treatments temporarily fill and coat the hair with keratin protein, reducing frizz and adding smoothness — the result is temporary (2–6 months) and fades gradually; chemical relaxers permanently alter the disulfide bond structure of the hair",
      "Keratin treatments permanently straighten hair using formaldehyde only",
      "Keratin treatments are a type of perm that adds wave to the hair"
    ],
    correctIndex: 1,
    explanation: "Keratin smoothing treatments deposit hydrolyzed keratin protein and a crosslinking agent (formaldehyde or formaldehyde-releasing agents in many formulas) that temporarily seals the cuticle and fills the cortex — reducing frizz, adding smoothness, and reducing curl for 2–6 months. As the coating wears off with shampooing, the original texture returns. Chemical relaxers (hydroxide-based) permanently break and reform the disulfide bond structure — the change is permanent in treated hair and only grows out. They are fundamentally different processes.",
    order: 133,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "MWA E — Chemical Relaxers",
    question: "What health and safety concern must hairstylists address before performing keratin smoothing treatments that contain formaldehyde or methylene glycol?",
    options: [
      "No special precautions are needed — keratin treatments are completely safe",
      "Formaldehyde vapours generated during the flat-iron step are a respiratory and eye irritant and a known carcinogen — the stylist must ensure exceptional ventilation, use a high-quality respirator (N95 or better), and wear chemical splash goggles; client safety precautions must also be implemented",
      "The client should wear a face mask; the stylist needs no special protection",
      "Only latex allergy is a concern with keratin treatments — no respiratory protection needed"
    ],
    correctIndex: 1,
    explanation: "Many keratin smoothing products release formaldehyde gas when heated with a flat iron during the sealing step. Formaldehyde is a respiratory irritant, sensitizer, and IARC Group 1 carcinogen. Occupational exposure must be controlled through: maximum ventilation (open windows, exhaust fans, air purifiers), respiratory protection (N95 minimum, or supplied-air respirator for extended exposure), eye protection, and limiting the number of treatments performed per day. Health Canada and provincial occupational health authorities have issued warnings regarding formaldehyde exposure in salons.",
    order: 134,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "MWA E — Chemical Relaxers",
    question: "When must a strand test be performed before a thio permanent wave on a client who had a hydroxide relaxer six months ago?",
    options: [
      "Strand testing is not needed if the client has had both services before",
      "A strand test must always be performed when any chemical history is present — especially the thio/hydroxide combination; the strand test determines if the remaining relaxed hair is strong enough to withstand the perm without breaking",
      "Only perform the strand test if the client reports recent breakage",
      "Strand tests are only required for colour services, not texture services"
    ],
    correctIndex: 1,
    explanation: "A strand test is mandatory before performing any chemical service on hair with a complex chemical history — particularly when thio and hydroxide services may coexist. The strand test: a small section is wound on a perm rod, waving solution applied, and monitored closely. If the hair becomes spongy, breaks, or dissolves within minutes, the service cannot proceed safely. If the strand test demonstrates adequate integrity, the service may proceed with the mildest appropriate wave solution and very careful monitoring.",
    order: 135,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "E",
    topicLabel: "MWA E — Chemical Relaxers",
    question: "After completing a sodium hydroxide relaxer service, a client develops mild scalp irritation and redness at the hairline. What is the appropriate first response?",
    options: [
      "Apply more neutralizing shampoo to the affected area and leave it on",
      "Immediately and gently rinse the area with cool water, apply a soothing post-relaxer conditioner, document the reaction on the client record, advise the client to seek medical attention if the irritation worsens, and note it as a contraindication for future services",
      "Apply hydrogen peroxide to the area to neutralize the alkali",
      "Apply the protective base cream now — after the fact — to soothe the area"
    ],
    correctIndex: 1,
    explanation: "Post-relaxer scalp irritation requires: (1) gentle cool-water rinsing to ensure all hydroxide is removed from the area, (2) application of a soothing post-relaxer conditioner or treatment, (3) documentation on the client record — this is critical for future service planning and liability, (4) advising the client to monitor the irritation and seek medical attention if it progresses (blistering, severe burning, or weeping indicates a chemical burn requiring medical care). This information will guide future services — lower pH product, additional basing, or discontinuing relaxer services.",
    order: 136,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Hair Colouring",
    question: "On the standard 10-level hair colour system, what does a level 1 represent versus a level 10?",
    options: [
      "Level 1 is blonde; level 10 is black",
      "Level 1 is the darkest (black); level 10 is the lightest (lightest blonde) — the scale measures depth from darkest to lightest",
      "Level 1 is fine hair; level 10 is coarse hair",
      "Level 1 represents warm tones; level 10 represents cool tones"
    ],
    correctIndex: 1,
    explanation: "The 10-level system measures depth (darkness) of hair colour from Level 1 (black — deepest, most melanin) to Level 10 (lightest blonde — least melanin). Level 5 = medium brown (midpoint). This system is universal across professional colour lines. When lifting or darkening, the stylist must understand the current level, the target level, and how many levels of lift or fill are required.",
    order: 137,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Hair Colouring",
    question: "What is underlying pigment (contributing pigment) and why is it critical to colour formulation?",
    options: [
      "It is the artificial pigment remaining from a previous colour service",
      "It is the natural warm pigment (from pheomelanin) that is revealed as melanin is lightened — each level of the hair corresponds to a predictable underlying warm tone (red, orange, gold, yellow) that affects final colour results",
      "It is the pigment that gives grey hair its silver tone",
      "It is the depth of colour added by a toner after bleaching"
    ],
    correctIndex: 1,
    explanation: "As melanin is oxidized (lifted) during colour or lightening, the eumelanin (dark, cool) is removed progressively, revealing the underlying warm pheomelanin — the natural warm tone inherent to that level. Level 1–3: red; Level 4–5: red-orange; Level 6: orange; Level 7: orange-gold; Level 8: gold; Level 9: yellow-gold; Level 10: pale yellow. Underlying pigment affects every colour formula — if not accounted for, warm or brassy results occur. Formulas must include neutralizing tones or the warm tone intentionally.",
    order: 138,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Hair Colouring",
    question: "A client at Level 6 (dark blonde) wants to achieve a Level 9 (light blonde) result. How many levels of lift are required, and what developer volume is typically needed?",
    options: [
      "1 level of lift — 10 volume developer",
      "2 levels of lift — 20 volume developer",
      "3 levels of lift — 30 or 40 volume developer (or lightener)",
      "5 levels of lift — 10 volume developer applied twice"
    ],
    correctIndex: 2,
    explanation: "From Level 6 to Level 9 requires 3 levels of lift. Each 10-volume developer provides approximately 1 level of lift; 20 volume provides 1–2 levels; 30 volume provides 2–3 levels; 40 volume provides 3–4 levels. For 3 levels of lift, 30 or 40 volume developer with a high-lift colour or powder lightener is required. It is important to also account for the underlying gold/orange pigment at Level 6–7 that will need to be neutralized with a toner after lifting.",
    order: 139,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Hair Colouring",
    question: "What is the difference between permanent, demi-permanent, and semi-permanent hair colour in terms of chemistry and durability?",
    options: [
      "They are identical in chemistry — only the processing time differs",
      "Permanent colour uses oxidative dye and hydrogen peroxide — permanently alters the hair's melanin and deposits new artificial colour that does not wash out; demi-permanent uses low-volume peroxide with smaller dye molecules for translucent, long-lasting colour that fades gradually; semi-permanent has no peroxide and only coats the cuticle — washes out in 4–6 shampoos",
      "Semi-permanent is the strongest and most damaging; permanent is the gentlest",
      "Demi-permanent lifts hair 3 levels; permanent lifts 1 level; semi-permanent lifts 5 levels"
    ],
    correctIndex: 1,
    explanation: "Permanent colour: uses para-dye intermediates + hydrogen peroxide (10–40 vol) — oxidative reaction builds large, permanent colour molecules in the cortex; lifts natural melanin; does not wash out. Demi-permanent: uses direct dyes + very low peroxide (5–10 vol or no peroxide) — deposits without significant lift; fades gradually over 12–24 shampoos; adds tone, glosses, blends grey up to 50–75%. Semi-permanent: direct dyes only, no peroxide — coats the cuticle surface; washes out in 4–6 shampoos; no lift; ideal for healthy, non-damaged hair conditioning and subtle tone.",
    order: 140,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Hair Colouring",
    question: "A client with 50% grey hair wants full, natural-looking coverage. Which colour type and developer volume is most appropriate?",
    options: [
      "Semi-permanent colour with no developer — it will cover grey naturally",
      "Permanent colour at the client's natural level using 20 volume developer — permanent colour with adequate peroxide fully oxidises grey (white/colourless) hair, depositing pigment throughout the cortex for complete coverage",
      "A demi-permanent colour with 6 volume developer for gentle coverage",
      "20 volume developer with bleach to pre-lighten the grey first"
    ],
    correctIndex: 1,
    explanation: "Grey (white) hair lacks melanin and has a resistant cuticle — it requires permanent colour with 20 volume developer for complete, opaque coverage. 20 volume provides enough oxidation to fully open the resistant cuticle of white hair, allowing the colour molecules to penetrate and develop throughout the cortex. Demi-permanent (low peroxide) blends grey up to about 50–75% but cannot achieve full opaque coverage. Semi-permanent has no peroxide and cannot penetrate the cuticle of resistant white hair.",
    order: 141,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Hair Colouring",
    question: "What is a double-process colour and when is it used?",
    options: [
      "Applying two different colour formulas to the same appointment for a blended result",
      "A two-step service where the hair is first lightened (bleached) and then toned — used when the desired result cannot be achieved in a single oxidation step, such as going from dark to very light or achieving a specific fashion tone on dark hair",
      "Applying permanent colour and a semi-permanent colour on the same head simultaneously",
      "Performing the same colour service twice in one visit for deeper saturation"
    ],
    correctIndex: 1,
    explanation: "A double-process colour consists of: Step 1 — lightening (bleach) to remove enough underlying pigment to reach the desired lightness level. Step 2 — toning to deposit the desired tone over the lightened base, neutralizing unwanted warmth and achieving the final target colour. This is required when a single oxidative colour cannot lift the hair sufficiently (e.g., dark brown to platinum blonde requires bleach first) or when a specific tone is only achievable on a pre-lightened base.",
    order: 142,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Hair Colouring",
    question: "How does the colour wheel guide a hairstylist in neutralizing unwanted tones?",
    options: [
      "The colour wheel shows which colours can be applied to the same hair without mixing",
      "Complementary colours (opposite on the colour wheel) neutralize each other — orange brassy tones are neutralized by blue, yellow tones by violet/purple, red tones by green; this guides the selection of toning formulas",
      "The colour wheel shows the order in which colours should be applied during a full-head colour",
      "Adjacent colours on the colour wheel always produce darker results when combined"
    ],
    correctIndex: 1,
    explanation: "The colour wheel is the fundamental tool for neutralization formulations. Complementary colours are directly opposite each other and, when mixed in appropriate proportions, cancel each other out to produce a neutral (grey/brown) result. Key neutralizations: orange (Level 6 underlying) → neutralized by blue; yellow (Level 9 underlying) → neutralized by violet; red → neutralized by green. Toners and colour formulas include these complementary pigments to neutralize specific unwanted warm tones.",
    order: 143,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Hair Colouring",
    question: "A client's grey regrowth is resistant to colour coverage despite using 20 volume developer and a matching permanent formula. What adjustment should the hairstylist consider?",
    options: [
      "Switch to a semi-permanent colour for better coverage on resistant grey",
      "Add 5–10% natural (Level N) to the colour formula and/or increase to 30 volume developer — adding natural base pigments fills resistant cuticle and improves coverage; higher developer opens the cuticle more fully",
      "Apply the colour to wet hair for better penetration",
      "Double the amount of colour applied without changing the formula or developer"
    ],
    correctIndex: 1,
    explanation: "Resistant grey hair has a particularly dense, tightly packed cuticle structure and no melanin — it requires extra formulation strategies. Adding 5–10% natural (N or 0) shade to the target formula adds extra base pigment molecules that help fill and anchor in resistant hair. Increasing developer to 30 volume opens the cuticle more fully to allow larger penetration of colour molecules. Both strategies together significantly improve coverage on stubborn resistant grey.",
    order: 144,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Hair Colouring",
    question: "What is the standard mixing ratio for most permanent oxidative hair colours with developer?",
    options: [
      "1 part colour : 3 parts developer",
      "1 part colour : 1 part developer (1:1)",
      "2 parts colour : 1 part developer",
      "Equal parts colour and developer mixed with water"
    ],
    correctIndex: 1,
    explanation: "The industry standard mixing ratio for most permanent oxidative colours is 1:1 (1 part colour : 1 part developer by weight or volume). Some manufacturers specify 1:1.5 or 1:2 for high-lift colours or when using very high volumes. Always follow the specific manufacturer's recommended ratio — deviating affects the hydrogen peroxide concentration, the dye concentration, the consistency, and the processing chemistry. Ratios printed in the technical manual override general guidelines.",
    order: 145,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Hair Colouring",
    question: "A client has naturally dark brown (Level 4) hair and wants warm copper highlights at Level 7. Which colouring technique is most efficient for this result?",
    options: [
      "Apply an all-over permanent colour from Level 4 to Level 7 copper",
      "Use foiling — isolating fine sections with foil and applying powder lightener to lift to Level 7, followed by a copper toner to achieve the target tone while leaving the base natural",
      "Apply a Level 7 copper demi-permanent all-over for a warm result",
      "Use a semi-permanent copper colour applied to the full head from root to ends"
    ],
    correctIndex: 1,
    explanation: "Going from Level 4 to Level 7 copper requires 3 levels of lift — which a single permanent colour application cannot achieve on dark natural hair without risking a muddy, uneven result. Foil highlighting with powder lightener efficiently and precisely lifts the selected sections to the target level, preserving the natural dark base between sections. After lightening, a copper toner is applied to achieve the exact warm copper tone. This is the technically correct approach for dimensional, highlighted results requiring significant lift.",
    order: 146,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Hair Colouring",
    question: "What is the purpose of performing a colour patch test, and how far in advance must it be performed?",
    options: [
      "48 hours before the service — to detect allergic contact dermatitis to para-phenylenediamine (PPD) and related oxidative dye intermediates in permanent colour",
      "5 minutes before — a quick test behind the ear tells you immediately if there will be a reaction",
      "The same day — apply a small amount and wait 30 minutes before the service",
      "Patch tests are only required for clients with known allergies"
    ],
    correctIndex: 0,
    explanation: "A predisposition (patch/skin sensitivity) test must be performed 24–48 hours before every oxidative colour service — even for regular clients, as sensitization can develop at any time after previous exposures. The test involves applying a small amount of the mixed colour behind the ear or in the crook of the elbow. A positive reaction (redness, swelling, itching, blistering) at 24–48 hours indicates IgE-mediated allergy or allergic contact dermatitis to PPD or related para-dye intermediates — a definitive contraindication for the service.",
    order: 147,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Hair Colouring",
    question: "A client's natural hair is Level 7 (dark blonde) and she requests a Level 7 ash result. Which formula should be selected?",
    options: [
      "Level 7 natural (N) with 20 volume — natural tones produce ash results",
      "Level 7 ash (A or 1) with 10 volume developer — since there is no desired lift, 10 volume provides deposit-only action; the ash tone neutralizes the natural warmth present at Level 7",
      "Level 7 warm (W or 3) with 20 volume to add shine first",
      "A bleach application first to Level 10, then tone with ash"
    ],
    correctIndex: 1,
    explanation: "When the target level matches the existing level (no lift needed), 10 volume developer provides deposit-only action — sufficient to open the cuticle for colour deposition without unnecessary lightening. Selecting an ash (A or .1) shade neutralizes the natural gold-orange underlying pigment at Level 7. Using 20 volume when no lift is needed increases the risk of over-lightening the existing colour and unnecessary hair damage. Ash tones at 10 volume are the professional choice for toning or colour refreshing at the same level.",
    order: 148,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Hair Colouring",
    question: "When performing a virgin colour application (first-time colour on hair that has never been chemically treated), what is the standard application sequence?",
    options: [
      "Apply from roots to ends simultaneously with no consideration for heat zones",
      "Apply from the ends to the roots — ends always process first",
      "Apply from 1 cm from the scalp through the mid-lengths and ends first, then apply to the root area last — body heat accelerates processing at the scalp, so the roots are applied last to equalize development timing",
      "Apply the colour only to the roots and allow bleeding down naturally"
    ],
    correctIndex: 2,
    explanation: "On a virgin application, body heat from the scalp accelerates the oxidation reaction in the root area — causing it to process faster and potentially lighter than the rest. To compensate: apply colour to 1 cm away from the scalp (mid-lengths to ends) first, allow these sections to develop, then apply to the root zone for the remaining time. This technique ensures the roots and lengths develop to the same depth simultaneously. On retouches, only the new growth is coloured to avoid build-up on previously coloured lengths.",
    order: 149,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Hair Colouring",
    question: "What is a 'gloss' or 'glaze' colour service, and when is it most appropriate?",
    options: [
      "A gloss applies a heavy, opaque colour layer over the existing hair colour",
      "A gloss or glaze uses a demi-permanent, no or very low ammonia formula to add shine, refresh faded colour, deposit a tonal shift, and improve condition — appropriate between permanent colour services, for tone refreshing, or for clients wanting a non-committal colour enhancement without lightening or full grey coverage",
      "A gloss service permanently lifts the hair 2 levels for a lightening effect",
      "A gloss is a finishing product applied after colour — not a colour service"
    ],
    correctIndex: 1,
    explanation: "A gloss or glaze is a low-commitment colour service using demi-permanent or gloss-specific formulas with little to no ammonia and very low (or no) peroxide. Results: adds intense shine, refreshes faded ends, deposits tone (e.g., adds warmth, deepens colour, neutralizes brassiness), and improves hair feel and condition. It fades gradually over 4–6 weeks. Appropriate for clients between colour services, those new to colour wanting a risk-free entry, or those wanting a conditioning, shine-boosting tonal treatment.",
    order: 150,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Hair Colouring",
    question: "A client notices their permanent colour fades to a warm, brassy tone within 2–3 weeks of each colour appointment. What is the most likely cause?",
    options: [
      "The developer volume was too low",
      "The colour formula lacks sufficient warm tones to maintain vibrancy",
      "The artificial colour molecules are smaller than the cuticle openings — highly porous hair deposits colour easily but loses it quickly through wash; the cuticle cannot retain the colour; OR the formula did not include adequate neutralizing tones to maintain the ash/cool result",
      "The client is washing with cold water — which causes colour to fade quickly"
    ],
    correctIndex: 2,
    explanation: "Rapid colour fading to warmth is most often a porosity issue — highly porous hair (raised, damaged cuticle) allows colour molecules to exit during washing as easily as they entered during processing. Solutions: deep conditioning before colour to temporarily improve cuticle integrity, using a deposit-heavy (low developer) formula on ends, recommending colour-safe sulphate-free shampoo, and adding cool/neutralizing tones to the formula. For ash colours specifically, the problem is that cool tones (ash, green) fade faster than warm tones — requiring extra cool/blue/violet in the formula.",
    order: 151,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Lightening",
    question: "What is the primary active ingredient in powder (off-scalp) bleach, and what causes the lifting action?",
    options: [
      "Ammonia alone — it opens the cuticle and bleaches the melanin",
      "Persulphate salts (ammonium, potassium, or sodium persulphate) activated by hydrogen peroxide — the combination creates free radicals that oxidize and decompose melanin molecules progressively",
      "Sodium hydroxide — it breaks the disulfide bonds and dissolves melanin simultaneously",
      "Hydrogen peroxide alone — no additional agents are required for powder bleach"
    ],
    correctIndex: 1,
    explanation: "Powder bleach contains persulphate salts (ammonium, potassium, sodium persulphate) plus alkalising agents. When mixed with hydrogen peroxide, the persulphates generate powerful free radicals (peroxydisulphate ions) that aggressively oxidize and decompose melanin molecules — providing significantly more lift than developer alone. Persulphates are responsible for the allergic reactions (contact urticaria, respiratory sensitization) associated with bleach — a key occupational health hazard in hairdressing.",
    order: 152,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Lightening",
    question: "A client with Level 5 dark brown hair wants to achieve a Level 9 pale gold result in one service. Is this achievable and what is the risk?",
    options: [
      "Yes, easily achieved with 40 volume developer and powder bleach in one session on most hair",
      "Lifting 4 levels in a single session is possible on some hair types but carries significant risk of over-processing, breakage, and scalp damage — a strand test and thorough assessment are essential; for many clients this requires two appointments",
      "Not possible — hair cannot be lifted more than 2 levels per session",
      "Yes, achievable using a high-lift colour at 40 volume without bleach"
    ],
    correctIndex: 1,
    explanation: "Lifting 4 levels (Level 5 to Level 9) in a single session is technically possible but depends heavily on the hair's condition, texture, and history. On virgin, healthy, medium-coarse hair it may be achievable with powder bleach and 40 volume developer. On fine, previously processed, or fragile hair it risks over-processing, elasticity loss, and breakage. A strand test is essential to assess the hair's ability to withstand the process. Many professionals recommend achieving extreme lifts over two sessions with a treatment in between — prioritizing hair integrity over speed.",
    order: 153,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Lightening",
    question: "What is the difference between on-scalp bleach (cream) and off-scalp bleach (powder) formulations?",
    options: [
      "They are identical products — only the application method differs",
      "On-scalp (cream/oil) bleach is formulated without persulphates, with emollient agents to protect the scalp — used for root applications; off-scalp (powder) bleach contains persulphates for maximum lift — used for foiling, balayage, and freehand techniques away from the scalp",
      "Powder bleach is always stronger than cream bleach regardless of the developer used",
      "On-scalp bleach requires 60 volume developer; off-scalp uses 20 volume only"
    ],
    correctIndex: 1,
    explanation: "On-scalp (cream or oil) lighteners are formulated without or with minimal persulphates, include conditioning and emollient agents to reduce scalp irritation and insulate against heat, and are safe for application at the scalp. Off-scalp (powder) lighteners contain persulphates for maximum lifting power and are used in foils, balayage, or open-air techniques away from the scalp — they would cause excessive irritation or burns if applied directly to the scalp. Selecting the correct product type based on proximity to the scalp is a fundamental safety requirement.",
    order: 154,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Lightening",
    question: "What is balayage and how does it differ from traditional foil highlighting?",
    options: [
      "Balayage is a French term for foil highlighting — they are the same technique",
      "Balayage (French: 'to sweep') is a freehand lightening technique where lightener is painted directly onto selected sections of dry hair without foil — creating a soft, sun-kissed, graduated effect that is most concentrated at the ends; foil highlighting isolates sections, provides more lift, creates more uniform, precise results",
      "Balayage uses semi-permanent colour; foil uses permanent colour",
      "Balayage is only applied to the roots; foil highlights only the ends"
    ],
    correctIndex: 1,
    explanation: "Balayage is a freehand painting technique where lightener is applied to the surface of sections with a brush or paddle — without foil enclosure. The result is softer, more natural-looking gradients (most light at the ends, less at the root) that blend seamlessly and grow out gracefully. Foil highlights enclose each section — controlling processing by concentrating heat, allowing more precise placement, and achieving more lift than open-air balayage. Balayage is lower-maintenance; foil highlights are more precisely controlled.",
    order: 155,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Lightening",
    question: "During a bleaching service, a client's hair has reached a pale yellow (Level 9/10) but still has a slight yellow tone. What is the next step to achieve a cool, white-blonde result?",
    options: [
      "Apply more bleach and continue processing beyond pale yellow",
      "Apply a violet or pearl toner over the bleached base — violet tones neutralize the remaining yellow (complementary on the colour wheel), producing a cool silver, white, or champagne result",
      "Apply a warm golden toner to enhance the yellow and call it complete",
      "Wash with blue shampoo immediately without toning"
    ],
    correctIndex: 1,
    explanation: "After lifting to pale yellow (Level 9–10), the underlying yellow pigment must be neutralized to achieve a cool, icy, or white-blonde result. Violet/purple tones are directly complementary to yellow on the colour wheel — a violet or pearl toner applied over the pale yellow base neutralizes it, producing silver, cool blonde, or white depending on the depth of violet and processing time. Purple shampoo and conditioner maintain this result between salon visits.",
    order: 156,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Lightening",
    question: "What is the maximum developer volume that should be used when bleaching on or near the scalp, and why?",
    options: [
      "60 volume — for maximum lift in one session",
      "40 volume is generally the maximum recommended for scalp applications — higher volumes generate excessive heat, cause scalp burns, and can cause sufficient heat generation to damage the hair structure immediately at the scalp",
      "10 volume only — for scalp safety",
      "There is no maximum — the hairstylist should use whatever volume the formula requires"
    ],
    correctIndex: 1,
    explanation: "Body heat from the scalp accelerates the chemical reaction of bleach — the root area processes faster than the lengths. Using 40 volume at the scalp takes advantage of this heat rather than fighting it. Using 50 or 60 volume at the scalp generates excessive heat, increases scalp burn risk significantly, and can cause the root area to process faster than the stylist can monitor — leading to over-processing, breakage at the scalp, and uneven results. 20–30 volume is often preferred on fine or sensitized scalps.",
    order: 157,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Lightening",
    question: "What are persulphate allergies in relation to bleach use, and how should a hairstylist manage a client who reports them?",
    options: [
      "Persulphate allergy is a minor inconvenience — proceed with a lower volume developer",
      "Persulphates (in powder bleach) are common allergens that can cause contact urticaria, rhinitis, asthma, and in severe cases anaphylaxis — a client reporting a persulphate allergy must not receive any service containing powder bleach; cream bleach without persulphates may be an alternative if tolerated, with medical clearance",
      "Persulphate allergy only affects the scalp — proceed with foils that keep product off the scalp",
      "Persulphate allergy is the same as a hydrogen peroxide allergy"
    ],
    correctIndex: 1,
    explanation: "Persulphate salts are potent occupational and consumer allergens. They cause IgE-mediated immediate hypersensitivity reactions including contact urticaria (hives), rhinoconjunctivitis, asthma, and in severe cases anaphylaxis. A client disclosing persulphate allergy must not receive any service containing powder (off-scalp) bleach. Even inhalation during mixing poses a risk. Cream bleach formulated without persulphates may be an alternative for some clients — but only after confirming the specific allergen and with physician guidance. Hairstylists themselves are at high occupational risk.",
    order: 158,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Lightening",
    question: "What is the effect of adding heat (processing cap, hooded dryer) during a bleaching service?",
    options: [
      "Heat causes the bleach to process more slowly and gently",
      "Heat accelerates the bleach reaction — speeds up processing time and can achieve greater lift in less time, but also increases the risk of over-processing and scalp sensitivity if not carefully monitored",
      "Heat has no effect on bleach processing",
      "Heat is required for all bleach services to activate the persulphates"
    ],
    correctIndex: 1,
    explanation: "Heat accelerates the oxidation reaction of bleach — reducing processing time and potentially achieving greater lift. However, accelerated processing requires more frequent monitoring to prevent over-processing — once the hair reaches the target level, it must be removed immediately. Excessive heat also increases scalp sensitivity and the risk of chemical burns. Heat is sometimes used strategically to speed up processing on resistant hair, but should never be applied to sensitive scalps or fine, fragile hair.",
    order: 159,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Lightening",
    question: "When monitoring a bleaching service in foils, how does the hairstylist determine when the target level has been reached without removing all foils?",
    options: [
      "The foils are left on for a standard time (30 minutes) without checking",
      "Periodically open one or two test foils placed in the most resistant area — gently unfolding to check the level of the strand and comparing against the target; check every 5–10 minutes after the initial processing period",
      "Monitor by the smell — a stronger odour indicates the target level has been reached",
      "Check only the outermost sections visible without opening foils"
    ],
    correctIndex: 1,
    explanation: "Monitoring foil bleach processing requires periodically opening test foils — ideally placed in the most resistant area at the beginning of the service. The hairstylist gently folds back the foil and checks the strand colour against the target level. Checking every 5–10 minutes (or more frequently near the end of processing) prevents over-processing. Relying on time alone without visual checks is a professional error — processing times vary significantly based on hair texture, natural level, product strength, heat, and porosity.",
    order: 160,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Lightening",
    question: "What is 'banding' in the context of hair lightening, and what causes it?",
    options: [
      "A technique for creating defined horizontal highlights across the hair",
      "Visible, horizontal lines of different lightness levels (light, dark, light, dark) in the hair length — caused by multiple overlapping lightener applications at different times, inconsistent overlap on regrowth, or different processing from previous services",
      "The natural colour banding that occurs in healthy hair due to melanin distribution",
      "A highlighting technique using rubber bands to section hair before bleaching"
    ],
    correctIndex: 1,
    explanation: "Banding is a result of inconsistent lightening that produces horizontal lines of alternating lighter and darker colour across the length of the hair. Common causes: applying new lightener that overlaps previously lightened areas (which lift more quickly, appearing lighter), inconsistent application timing across sections, or applying lightener over previously coloured hair that responds differently at different levels. Banding is particularly evident on straight, single-coloured hair. Correcting banding requires careful colour correction formulation.",
    order: 161,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Colour Correction",
    question: "A client has previously applied a box colour at home resulting in a very dark, opaque Level 3 result on naturally Level 6 hair. She wants to return to her natural Level 6. What is the first step?",
    options: [
      "Apply bleach immediately at 40 volume to lift the artificial colour",
      "Perform a colour remover (reducer) treatment to remove the artificial colour molecules without significantly lightening the natural melanin — then assess and re-colour if needed",
      "Apply a Level 6 permanent colour over the dark result — it will lift and deposit simultaneously",
      "The client must wait for the colour to grow out — correction is not possible"
    ],
    correctIndex: 1,
    explanation: "A colour remover (colour reducer/eraser) works by shrinking the large oxidative colour molecules back to their original small, colourless state — allowing them to wash out of the cortex without significantly altering the natural melanin. This is the first step before re-colouring in correction work, as it avoids the damage of bleach while removing the artificial pigment. After removal, the hair often reveals a warm, uneven result that requires careful tonal correction and equalization before re-colouring.",
    order: 162,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Colour Correction",
    question: "A client's highlights are extremely orange/brassy at Level 6 when she wanted a cool Level 8 ash blonde. What is the corrective approach?",
    options: [
      "Apply a red-based toner to warm up the result and hide the orange",
      "Continue bleaching until the orange is lifted to pale yellow, then apply a blue-violet ash toner to neutralize the remaining warm tones",
      "Apply a green-based colour to neutralize the red undertones",
      "No correction is possible — the client must start over with a new colour"
    ],
    correctIndex: 1,
    explanation: "The orange indicates the hair was lifted to Level 6 — insufficient for the desired Level 8 ash. Correction: (1) continue lightening (additional bleach or high-lift colour) to bring the hair to Level 8–9 (gold-pale yellow), neutralizing the orange. (2) Apply a blue-ash or blue-violet toner — blue neutralizes the orange underlying pigment at Level 7–8, and ash/violet tones neutralize remaining yellow. The colour wheel governs: orange → neutralized by blue; yellow → neutralized by violet.",
    order: 163,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Colour Correction",
    question: "What is 'colour fill' (pre-pigmentation) and when is it necessary before re-colouring?",
    options: [
      "A technique for filling foils with lightener before the client arrives",
      "A pre-colouring step where warm pigment is deposited back into hair that has been over-lightened or has lost its warm tones — ensuring the target depth colour develops correctly and does not turn ashy, dull, or green",
      "A technique for filling in grey hair before full-coverage colour",
      "Colour fill refers to adding extra product to ensure full saturation during application"
    ],
    correctIndex: 1,
    explanation: "Colour fill (pre-pigmentation) is required when the hair has been lightened beyond the target level's natural underlying pigment zone — for example, hair lifted to pale yellow (Level 10) that needs to be taken back to dark brown (Level 4). Without filling the warm red-orange pigment back into the cortex, a Level 4 permanent colour applied directly to pale yellow produces a flat, greenish, or muddy result because there is no warm underlying pigment for the colour to build on. Filling restores the warm foundation the colour needs.",
    order: 164,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Colour Correction",
    question: "A client used a permanent black box colour all-over. She now wants to achieve a warm brown (Level 5) result. Why is this correction complex?",
    options: [
      "Black permanent colour simply washes out after 6–8 weeks — no correction needed",
      "Artificial black permanent colour is heavily pigment-saturated and difficult to remove — colour removers may take multiple applications, lightening risks damage and orange banding, and the process requires multiple careful sessions to avoid breakage and achieve an even result",
      "Correction is simple — apply a Level 5 warm colour directly over the black",
      "Bleach cannot remove black permanent colour — it can only remove natural melanin"
    ],
    correctIndex: 1,
    explanation: "Black permanent colour contains an extremely high concentration of dark, large colour molecules that are resistant to removal. Colour removers help but may require multiple applications. If lightening is needed, the dark artificial pigment lifts unevenly — lighter sections from previous processing emerge as bands, and the underlying pigment exposure is non-linear. Multiple careful sessions with condition assessments, colour removal, targeted lightening, and colour correction are required. Attempting this in a single session risks irreversible damage.",
    order: 165,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Colour Correction",
    question: "When performing a colour correction consultation, what key information must the hairstylist obtain about the client's colour history?",
    options: [
      "Only the most recent colour service is relevant",
      "The complete colour history: all chemical services (colour, bleach, relaxer, perm), products used, timing, results, home maintenance products, water quality, health changes, and any previous correction attempts — this information determines what is in the hair and what approach is safe",
      "Only the original natural colour level — nothing else matters",
      "The brand of box colour used — professional results are unrelated to history"
    ],
    correctIndex: 1,
    explanation: "Colour correction requires a complete colour history because every previous chemical service has modified the hair's internal structure and composition. Knowing: artificial colour types and levels present, lightening history (how light and how many times), chemical texture services (thio or hydroxide), home products (box colour chemistry), water quality (mineral buildup), and health factors (medication, hormonal changes) — all of this guides the hairstylist's diagnosis, determines compatibility, identifies risks, and informs a safe, realistic corrective plan.",
    order: 166,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Colour Correction",
    question: "After completing a colour correction service, the client's hair shows green tones in the highlights. What caused this and how is it corrected?",
    options: [
      "Green tones are caused by too much yellow underlying pigment — corrected with more bleach",
      "Green tones result from red tones being neutralized too strongly — corrected by applying a warm copper or red-based toner to add red back into the affected areas",
      "Green tones indicate a chemical reaction with hard water — corrected by chelating treatment only",
      "Green tones are caused by excessive blue toner left on too long and corrected with an orange-based product"
    ],
    correctIndex: 1,
    explanation: "Green results in highlights typically occur when too much red was removed during lifting and an overly ashy formula was applied — blue + yellow (residual underlying) can produce green, or over-neutralization of red leaves a green cast. The colour wheel: green is corrected by its complement — red/copper. Applying a warm copper, red-gold, or warm brown toner deposits the complementary red pigment needed to neutralize the green and shift the result to a neutral or warm blonde. The exact formula depends on the depth and saturation of the green.",
    order: 167,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Colour Correction",
    question: "What does 'porosity equalization' achieve before a colour service on hair with multiple porosity zones?",
    options: [
      "It makes all sections of the hair the same level before colouring",
      "Applying a filler or porosity equalizer temporarily closes and standardizes the cuticle of highly porous areas so colour penetrates and develops evenly throughout the hair length — preventing over-dark or over-warm results at porous ends and under-developed results at resistant roots",
      "It removes existing colour from overly porous sections before re-colouring",
      "It deposits melanin into the hair cortex to increase resistance"
    ],
    correctIndex: 1,
    explanation: "Hair with different porosity zones (e.g., resistant roots, normal mid-lengths, very porous ends) responds to colour unevenly — highly porous ends absorb colour faster, process darker, and fade faster. A porosity equalizer (typically a diluted acidic conditioner or specific filler product) is applied to the porous areas before colouring to temporarily reduce the porosity differential — making the cuticle more uniform. This ensures the colour formula develops to the same depth and tone throughout the length.",
    order: 168,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Colour Correction",
    question: "A client's permanent hair colour result is darker than expected — the target was Level 7 but the result is Level 5. The client's hair appears to have processed too dark, especially at the ends. What is the most likely cause?",
    options: [
      "The developer volume was too high",
      "The ends were highly porous from previous colour services — highly porous hair absorbs and deposits more colour pigment than intended, resulting in a darker-than-formula result at the ends",
      "The colour was applied in the wrong order — roots should always be done last",
      "The client's hair is naturally more resistant than estimated"
    ],
    correctIndex: 1,
    explanation: "Highly porous hair (raised cuticle) absorbs colour faster and deeper than the formula predicts — taking in more pigment molecules than expected and depositing at a darker level. This is especially prominent at the ends of previously coloured hair. Prevention: use a porosity equalizer on porous ends before colouring, apply a lighter or diluted formula to ends compared to roots, or apply the colour to roots first and ends last. If already occurred, a gentle colour reducer or clarifying treatment can open the over-dark ends selectively.",
    order: 169,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Colour Correction",
    question: "What is 'toning' in hair colouring and which developer volume is typically used for a toning service?",
    options: [
      "Toning refers to applying a permanent colour at full developer strength for maximum deposit",
      "Toning uses a semi-permanent or demi-permanent formula at low developer volume (5–10 volume) applied to pre-lightened hair to neutralize unwanted warm tones and deposit the desired cool, neutral, or fashion tone without additional lifting",
      "Toning uses 40 volume developer for maximum lift and tone deposit simultaneously",
      "Toning is a conditioning treatment that does not alter hair colour"
    ],
    correctIndex: 1,
    explanation: "Toning is performed on pre-lightened hair to achieve the target tone by neutralizing underlying warm pigment. Toners are typically semi-permanent or demi-permanent formulas with very low peroxide (5–10 volume) — just enough to open the cuticle slightly for deposit without any lightening action. This provides the final colour result on bleached or highlighted hair, completing a double-process service. Common toners: violet for silver/white, beige for champagne, ash for cool blonde, pearl for icy results.",
    order: 170,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Colour Correction",
    question: "A client with previously highlighted, porous hair is getting a fashion pastel pink colour. What special consideration is required for the formula?",
    options: [
      "Apply the most concentrated formula available for the most vibrant result",
      "The hair must be pre-lightened to at least pale yellow (Level 9–10) before applying any pastel fashion colour; porous hair absorbs colour faster but also fades faster — the formula may need to be slightly more concentrated than the target shade to account for fade, and bond-building treatments should be incorporated to reduce porosity and extend longevity",
      "Apply a pink semi-permanent directly over unbleached hair for a subtle result",
      "Use a permanent colour formula for pastel colours — it is the only one that holds"
    ],
    correctIndex: 1,
    explanation: "Pastel fashion colours are highly diluted direct dyes — they are visible only on a very light base (Level 9–10 pale yellow or white). On darker bases, pastel pigments are invisible. Porous hair deposits quickly but fades rapidly — to achieve longevity, the formula can be slightly over-concentrated, a bond builder (Olaplex, K18) incorporated during the service to reduce porosity, and the client advised to use colour-safe, sulphate-free shampoo and limit washing frequency. Direct dye pastels typically last 4–8 washes.",
    order: 171,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Colour Correction",
    question: "What is the purpose of a bond-building treatment (e.g., Olaplex, K18) when used during or after a colour or bleaching service?",
    options: [
      "It is a marketing product — no proven benefit during chemical services",
      "Bond builders work within the cortex to reconnect broken disulfide and peptide bonds damaged during chemical processing — when used during bleaching or colouring, they reduce the degree of bond breakage, maintaining strength, elasticity, and integrity; used after as a treatment to restore compromised bonds",
      "Bond builders permanently change the hair's curl pattern",
      "Bond builders replace the neutralizer step in a permanent wave service"
    ],
    correctIndex: 1,
    explanation: "Bond builders (Olaplex uses bis-aminopropyl diglycol dimaleate; K18 uses a patented peptide) work within the cortex during or after chemical services. Added to bleach, colour, or relaxers, they reconnect disulfide bonds that are cleaved during processing — reducing breakage, improving elasticity, and maintaining cortex integrity. Post-treatment use continues rebuilding broken bonds. Clinical evidence and widespread professional use support their efficacy in reducing chemical damage — they are not merely conditioning agents.",
    order: 172,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Colour Correction",
    question: "How long should a stylist wait between a colour removal service and a re-colouring service in a single appointment?",
    options: [
      "Re-colour immediately after rinsing the colour remover for best results",
      "Wait at least 30 minutes after colour removal and perform a strand test — the colour remover's reducing action can interfere with a new permanent colour's oxidation if the hair is not fully rinsed and the reducing agent dissipated",
      "Wait 48 hours between colour removal and re-colouring",
      "No waiting period is needed — colour removers are colour-safe"
    ],
    correctIndex: 1,
    explanation: "Colour removers work through reduction (the same chemistry as perm waving solutions). Residual reducing agent in the hair after rinsing can interfere with the oxidative chemistry of the new permanent colour — reducing the hydrogen peroxide before it can fully develop the new colour molecules, producing uneven or underdeveloped results. After thorough rinsing, applying a few drops of the new developer to a test strand and watching for fizzing (indicating residual reductant) confirms whether it is safe to proceed. Most protocols recommend at least a 30-minute wait with thorough rinsing.",
    order: 173,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "F",
    topicLabel: "MWA F — Colour Correction",
    question: "What formula guideline helps a hairstylist predict the result of mixing two permanent colour shades?",
    options: [
      "The two shades simply average in depth and tone with no predictable law",
      "The law of colour: mix equal parts of two formulas and the resulting depth is the average of the two levels; the resulting tone is a mixture of both tones — a warm shade and an ash shade of the same level mixed equally produce a natural result",
      "The darker shade always dominates — the lighter shade has no influence",
      "Mixing colours of different levels always produces a mid-level result of Level 5"
    ],
    correctIndex: 1,
    explanation: "When mixing two permanent colour formulas: the resulting depth is approximately the average of the two levels. Example: 5N + 7N at equal parts = approximately Level 6 natural. The resulting tone combines both tones proportionally. Example: 7G (gold) + 7A (ash) at equal parts = 7N (natural). This allows hairstylists to fine-tune formulas precisely — adding a percentage of a complementary tone to neutralize an undesired tone, or averaging levels to achieve between-level results. Understanding this principle is foundational to professional formulation.",
    order: 174,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "G",
    topicLabel: "MWA G — Hair Extensions",
    question: "What is the primary difference between a keratin bond (fusion) hair extension and a tape-in extension?",
    options: [
      "Keratin bonds are temporary; tape-ins are permanent",
      "Keratin bond extensions use a heat-fused keratin adhesive to attach individual strands near the root of natural hair; tape-in extensions use a double-sided adhesive strip sandwiched between a thin weft of extension hair and the natural hair — a flatter, faster method",
      "Tape-in extensions are applied with a hot glue gun; keratin bonds use cold fusion",
      "They are identical — only the brand name differs"
    ],
    correctIndex: 1,
    explanation: "Keratin/fusion extensions: a single pre-tipped strand is attached to a small section of natural hair using a heated fusion tool that melts the keratin tip, bonding it near the root. Provides the most natural movement. Takes 2–4 hours. Tape-in extensions: thin, pre-made wefts with adhesive strips are sandwiched onto sections of natural hair. Faster to apply (1 hour), lie flat, and are less detectable under the hair. Both require professional maintenance and are repositioned every 6–8 weeks as the hair grows.",
    order: 175,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "G",
    topicLabel: "MWA G — Hair Extensions",
    question: "A client interested in clip-in hair extensions has fine, fragile hair. What concern must be discussed before recommending a method?",
    options: [
      "Fine hair cannot support any type of extension",
      "Clip-in extensions are always the safest choice — recommend immediately without assessment",
      "The weight of extensions on fine, fragile hair can cause traction alopecia — hair loss from the sustained mechanical tension at the root; the weight, length, and frequency of wear must be discussed; lightweight extensions worn short-term are preferable",
      "Clip-in extensions can only be used on naturally thick hair with no modifications"
    ],
    correctIndex: 2,
    explanation: "Extensions on fine or fragile hair carry a risk of traction alopecia — gradual hair loss caused by sustained mechanical tension at the root. Fine hair has fewer and thinner strands to anchor the additional weight. Clip-in extensions are the least damaging method (not worn 24/7), but even temporary use can stress fine hair. The hairstylist must discuss realistic expectations, recommend lightweight extensions, limit length and volume, and advise against daily wear to minimize cumulative tension on vulnerable follicles.",
    order: 176,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "G",
    topicLabel: "MWA G — Hair Extensions",
    question: "When colouring a client's hair that has keratin bond extensions, what must be avoided?",
    options: [
      "Apply colour freely — extensions do not affect the colour process",
      "Avoid applying colour directly onto the keratin bond area — oxidative colour and bleach can dissolve the keratin bond adhesive, causing extensions to slip out; application must be carefully kept away from the bonds",
      "Colour must always be applied at 40 volume to prevent bond slippage",
      "Apply toner only — permanent colour cannot be used with any extensions"
    ],
    correctIndex: 1,
    explanation: "Oxidative colour and bleach formulas are alkaline and/or contain reducing agents that break down the keratin adhesive bonds. Applying colour products directly to or through the bond area causes the adhesive to weaken and the extension strand to slip out — or fall off completely. When colouring a client with extensions, the hairstylist must section carefully, avoid the bond areas, and work with formulas that minimize contact time near the bonds. Bond-safe colour formulas with lower alkalinity are preferred.",
    order: 177,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "G",
    topicLabel: "MWA G — Hair Extensions",
    question: "What is Remy hair in the context of human hair extensions, and why is it considered higher quality?",
    options: [
      "Remy is a brand name — all extension hair is equivalent in quality",
      "Remy hair is human hair collected and processed with all cuticles aligned in the same direction (root to tip) — this prevents tangling, maintains natural shine and smoothness, and extends the life of the extension compared to non-Remy hair where cuticles are randomly oriented",
      "Remy hair is synthetic hair that has been treated to resemble human hair",
      "Remy hair has been chemically processed to remove all cuticle layers for the smoothest feel"
    ],
    correctIndex: 1,
    explanation: "Remy hair is human hair where all strands are collected and kept in the same root-to-tip (cuticle-aligned) direction throughout processing. Because the cuticles all lay in the same direction, they lay flat against each other — preventing friction-induced tangling, maintaining natural shine, and extending the usable life of the extension. Non-Remy hair has randomly oriented cuticles — they catch on each other and tangle quickly. Remy is the gold standard for natural-looking, long-lasting extension hair.",
    order: 178,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "G",
    topicLabel: "MWA G — Hair Extensions",
    question: "Before fitting a client with a ready-made wig (stock wig), what measurements and assessments are needed?",
    options: [
      "No measurements are required — all wigs fit all head sizes",
      "Measure the client's head circumference, front hairline to nape length, ear-to-ear across the crown, and temple-to-temple; assess the client's existing hair length and density to determine how to prepare the hair underneath for the most natural fit and appearance",
      "Only the head circumference is needed — all other dimensions are standardized",
      "No assessment needed for ready-made wigs — only custom wigs require measurement"
    ],
    correctIndex: 1,
    explanation: "Fitting a wig properly requires measuring the full head: circumference around the perimeter at the hairline, front hairline to nape (length), ear-to-ear across the top, and ear-to-ear front-to-back across the crown. These measurements identify whether a stock wig will fit and which size is appropriate. The existing hair must be assessed — long hair must be flat-wrapped under a wig cap to avoid bulk that changes the fit. Improper fit causes discomfort and an unnatural appearance.",
    order: 179,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "G",
    topicLabel: "MWA G — Hair Extensions",
    question: "What is the purpose of a lace-front wig, and what makes it more realistic-looking than a full-cap wig?",
    options: [
      "Lace-front wigs are machine-made and always lower quality than full-cap wigs",
      "Lace-front wigs have a sheer lace panel at the front hairline where individual hairs are hand-knotted — when applied with adhesive, the lace becomes invisible against the scalp, creating the illusion of a natural hairline; standard full-cap wigs have a machine-wefted perimeter that is visible and more artificial-looking at the hairline",
      "Lace-front wigs use stronger adhesive than full-cap wigs for better hold",
      "Lace-front wigs are only used for medical hair loss — not for fashion use"
    ],
    correctIndex: 1,
    explanation: "The distinguishing feature of a lace-front wig is the hand-knotted lace panel at the front — when the lace is trimmed close to the hairline and secured with medical-grade adhesive or tape, it becomes invisible against the skin, creating a completely natural-looking hairline. Individual hairs appear to grow directly from the scalp. Standard full-cap wigs have a woven track at the perimeter — the edge is clearly visible at the hairline. Lace fronts are the professional standard for theatrical, fashion, and medical hair replacement.",
    order: 180,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "G",
    topicLabel: "MWA G — Specialized Services",
    question: "A client undergoing chemotherapy experiences complete hair loss (alopecia totalis). What special considerations apply when they visit the salon for a wig fitting?",
    options: [
      "Treat the appointment exactly as a standard wig fitting — no modifications needed",
      "Approach with sensitivity to the emotional and psychological impact of hair loss; ensure privacy; use gentle, non-irritating materials on a potentially sensitive scalp; offer wig cap liner options for sensitive scalps; measure carefully as the head shape changes without hair; and be prepared for an emotionally supportive conversation",
      "Advise the client to wait until chemotherapy is complete before purchasing a wig",
      "Recommend only synthetic wigs — human hair wigs are not appropriate for medical hair loss"
    ],
    correctIndex: 1,
    explanation: "Hairstylists serving clients experiencing medically-induced hair loss must approach the appointment with heightened sensitivity and professionalism. Key considerations: emotional support (hair loss is psychologically significant), privacy for a potentially vulnerable client, scalp sensitivity (chemo-affected scalp may be more sensitive — use soft, non-irritating wig caps and liners), accurate measurements (scalp without hair is measured differently), and education about wig care. Both human hair and high-quality synthetic wigs are appropriate — the choice depends on budget, lifestyle, and preference.",
    order: 181,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "G",
    topicLabel: "MWA G — Specialized Services",
    question: "What is a 'skin fade' on the face (temple/cheek region) in barbering-influenced hairstyling, and what tool is used?",
    options: [
      "A chemical bleaching technique to lighten facial hair for a gradient effect",
      "A clipper technique where facial/temple hair is gradually blended from skin-close (zero guard) at the perimeter to the desired length higher up — creating a seamless transition from shaved to longer hair across the temple and cheek area",
      "A shaving cream application technique using a straight razor only",
      "A contouring technique using makeup to define the hairline"
    ],
    correctIndex: 1,
    explanation: "A skin fade on the temple or cheek extends the head's clipper fade onto the face — the hairline at the temple and cheek corners is faded from skin-close at the boundary to the desired length of the sideburn or hair at the sides. This requires precise clipper work using decreasing guard sizes, the taper lever, and detailed finish work with a trimmer/outliner around the hairline to define the edge. This technique bridges hairdressing and barbering and is increasingly expected in full-service salons.",
    order: 182,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "G",
    topicLabel: "MWA G — Specialized Services",
    question: "When performing a scalp massage for a client, which type of manipulation stimulates circulation and is appropriate for most scalp conditions?",
    options: [
      "Friction (vigorous rubbing) applied directly to any scalp condition",
      "Effleurage (light, gliding strokes) and petrissage (kneading/lifting movements) applied with the pads of the fingers — stimulating blood flow without irritating the scalp; friction is avoided on sensitive or inflamed scalps",
      "Tapotement (percussive tapping) only — other massage types are not used on the scalp",
      "Vibration massage using an electric tool applied directly to irritated scalp areas"
    ],
    correctIndex: 1,
    explanation: "Effleurage (light, rhythmic gliding) and petrissage (circular kneading, lifting) are the foundational scalp massage movements. They promote blood circulation to the follicles, relax scalp muscles, stimulate sebaceous gland secretion, and enhance client relaxation. The pads (not tips) of the fingers are used to avoid nail scratching. Friction is appropriate on healthy scalps but avoided on inflamed, abraded, or sensitive scalps. Scalp massage is contraindicated before chemical services to avoid creating micro-abrasions.",
    order: 183,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "G",
    topicLabel: "MWA G — Specialized Services",
    question: "What is the purpose of a hot oil treatment in the salon, and which hair types benefit most?",
    options: [
      "Hot oil treatments are used before perming to pre-process the hair",
      "Hot oil treatments use warmed botanical or mineral oils (olive, coconut, argan, jojoba) applied to the hair and scalp with gentle heat — softening and conditioning dry, brittle, or over-processed hair; the heat opens the cuticle to allow oil penetration, adding moisture, elasticity, and shine",
      "Hot oil removes excess colour pigment between colour services",
      "Hot oil is used only on the scalp — it must not contact the hair shaft"
    ],
    correctIndex: 1,
    explanation: "Hot oil treatments apply warmed oil to dry or damp hair and the scalp. Gentle external heat (towel wrap, steam cap, or hooded dryer) opens the cuticle slightly, allowing oil molecules to penetrate into the cortex — adding lubrication, softening, and flexibility to dry, brittle, heat-damaged, or chemically over-processed hair. They are particularly beneficial for: very dry/coarse hair, low-porosity hair (which benefits from the heat-opened cuticle), scalp dryness, and hair that has been depleted of natural oils by harsh surfactants.",
    order: 184,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "G",
    topicLabel: "MWA G — Specialized Services",
    question: "A client wants a scalp micropigmentation (SMP) procedure. Is this within the scope of practice for a licensed hairstylist?",
    options: [
      "Yes — it is a standard hairstyling service performed in most salons",
      "No — scalp micropigmentation is a cosmetic tattooing procedure that involves penetrating the dermis with pigment; it is outside the scope of practice for a hairstylist and is regulated as a cosmetic tattooing or micropigmentation service requiring specific separate licensing",
      "Yes, if the hairstylist uses a special SMP tool approved for salon use",
      "It depends on the province — hairstylists can perform SMP in some jurisdictions"
    ],
    correctIndex: 1,
    explanation: "Scalp micropigmentation involves using a tattoo-style device to deposit pigment into the dermis of the scalp — creating the appearance of hair follicle dots to simulate a closely shaved head or add density. This procedure involves skin penetration, which is outside the regulated scope of practice for a hairstylist. It requires separate training and licensing as a cosmetic tattooist or micropigmentation specialist. A hairstylist who performs SMP without proper licensing is practising an unlicensed regulated health profession in most jurisdictions.",
    order: 185,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "G",
    topicLabel: "MWA G — Specialized Services",
    question: "What is the purpose of applying a pre-waxing powder to the skin before facial waxing (brow or upper lip)?",
    options: [
      "To help the wax adhere to the skin for maximum waxing effectiveness",
      "To absorb surface moisture and oils from the skin — ensuring the wax adheres to the hair rather than sliding on the skin's natural oils, improving wax grip and hair removal effectiveness while reducing skin lifting",
      "To cool the skin before applying hot wax",
      "To chemically weaken the hair before removal"
    ],
    correctIndex: 1,
    explanation: "Pre-waxing powder (cornstarch or talcum) absorbs sebum and surface moisture from the skin, creating a dry surface. Wax adheres primarily to the hair rather than the skin — this reduces 'grab' on the skin, minimizes skin lifting risk, and maximizes hair removal efficiency. Oily skin prevents wax from gripping the hair adequately, resulting in incomplete removal and repeated strips that irritate the skin. The pre-powder step is a standard part of professional waxing protocol.",
    order: 186,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "mwa-h-frontdesk",
    topicLabel: "MWA H — Front Desk and Salon Operations",
    question: "When booking a client appointment over the phone, which information is essential to collect?",
    options: [
      "Only the client's name and preferred stylist",
      "Client name and contact number, service(s) requested, any known allergies or chemical history relevant to the service, preferred stylist, date and time — and confirm whether a patch test is required (colour services)",
      "Only the service and time — personal information is not collected by phone",
      "Payment information only — other details are collected at check-in"
    ],
    correctIndex: 1,
    explanation: "Effective appointment booking captures: client name and callback number (for confirmation and reminders), all services requested (to allow adequate time), any allergy or chemical history that affects service planning, preferred stylist, and confirmed appointment time. For colour services, the booking team must confirm whether a patch test has been performed within 48 hours — if not, the patch test must be scheduled before the colour appointment. Incomplete booking information leads to scheduling errors, inadequate service time, and safety risks.",
    order: 187,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "mwa-h-frontdesk",
    topicLabel: "MWA H — Front Desk and Salon Operations",
    question: "A client calls to complain about a service performed last week. What is the most professional way to handle the complaint?",
    options: [
      "Tell the client the result was correct and they are mistaken about the outcome",
      "Listen empathetically without interrupting, apologize for the client's dissatisfaction, invite them in for a consultation to assess the concern in person, and work toward a mutually acceptable solution — document the complaint in the client record",
      "Offer a full refund immediately over the phone without hearing the details",
      "Transfer the call to voicemail — complaints are handled by mail only"
    ],
    correctIndex: 1,
    explanation: "Professional complaint resolution: (1) listen completely without interrupting or becoming defensive, (2) acknowledge the client's feelings and apologize for their dissatisfaction (without necessarily admitting fault before assessment), (3) invite the client in for an in-person assessment — many service issues can be identified and corrected in a follow-up appointment, (4) offer a realistic solution (correction, complimentary service, partial adjustment), and (5) document the complaint and resolution in the client record for future reference.",
    order: 188,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "mwa-h-frontdesk",
    topicLabel: "MWA H — Front Desk and Salon Operations",
    question: "What is the purpose of maintaining a client record card (service history), and what are the professional obligations surrounding this data?",
    options: [
      "Client records are optional — experienced stylists remember all client details",
      "Client records document service history, formulas, reactions, and preferences — enabling consistent results across multiple visits and stylists, supporting safety decisions, and providing a legal record; they must be stored securely, kept confidential, and their handling must comply with applicable privacy legislation (e.g., PIPEDA in Canada)",
      "Client records are only required for chemical services",
      "Client records are the property of the stylist personally, not the salon"
    ],
    correctIndex: 1,
    explanation: "Client records serve: (1) service consistency — exact formulas are reproducible; (2) safety — allergies, contraindications, and reactions are documented and reviewed before each service; (3) legal protection — if a dispute or adverse reaction occurs, the record demonstrates informed consent and professional practice; (4) business analytics — service history informs marketing and retention strategies. In Canada, personal health-adjacent information must be stored securely and handled in compliance with privacy legislation (PIPEDA federally; provincial equivalents).",
    order: 189,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "mwa-h-frontdesk",
    topicLabel: "MWA H — Front Desk and Salon Operations",
    question: "How should a hairstylist calculate the retail price of a service to ensure the salon remains profitable?",
    options: [
      "Set prices the same as the competitor down the street",
      "Calculate costs: product cost per service + hairstylist's time (labour cost) + allocated overhead (rent, utilities, supplies per service hour) + desired profit margin — then set the price accordingly",
      "Charge only for materials — labour time should not factor into service pricing",
      "Use the manufacturer's suggested retail price for all services"
    ],
    correctIndex: 1,
    explanation: "Service pricing must cover all costs and provide profit margin. A proper calculation includes: (1) direct product cost per service (colour, chemicals, etc.), (2) labour cost (stylist's wage or commission for the service time), (3) allocated overhead (portion of rent, utilities, insurance, equipment depreciation), and (4) desired profit margin. Pricing below cost is economically unsustainable regardless of competitor pricing. Regular cost reviews ensure pricing remains profitable as product and overhead costs change.",
    order: 190,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "mwa-h-frontdesk",
    topicLabel: "MWA H — Front Desk and Salon Operations",
    question: "What is the professional etiquette regarding recommending retail products to a client after a service?",
    options: [
      "Never recommend retail products — it is aggressive sales behaviour",
      "Base all recommendations on the specific needs identified during the consultation and service — recommend products that genuinely support the service result and address the client's hair concerns; explain the benefit specifically related to their hair and service, and avoid recommending products purely for commission",
      "Recommend only the most expensive products available for maximum revenue",
      "Retail recommendations are only appropriate for new clients — regular clients should not be offered retail"
    ],
    correctIndex: 1,
    explanation: "Professional retail recommendations are client-centred, not sales-centred. The hairstylist is in a unique position of expertise — clients trust product recommendations based on the professional's knowledge of their hair. Recommending products that genuinely address the client's specific concerns (e.g., a colour-safe sulphate-free shampoo after a colour service, or a strengthening treatment after a chemical service) is a professional service, not a sales technique. Recommending products for commission alone undermines trust and is unprofessional.",
    order: 191,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "H",
    topicLabel: "MWA H — Business Fundamentals",
    question: "What is the difference between an employee hairstylist and a booth-renter (independent contractor) in a salon?",
    options: [
      "There is no difference — all hairstylists in Canada are self-employed",
      "An employee hairstylist receives a wage or salary, has taxes deducted at source, and works within the employer's direction (schedule, services, pricing); a booth renter is self-employed, pays rent to the salon owner for use of a station, sets their own prices, controls their schedule, and is responsible for their own taxes, insurance, and business expenses",
      "Booth renters earn more because they are senior stylists",
      "Employees keep all their tips; booth renters remit tips to the salon owner"
    ],
    correctIndex: 1,
    explanation: "The employee/independent contractor distinction has legal implications in Canada. An employee: wage or salary with source deductions (CPP, EI, income tax), entitled to Employment Standards Act protections (vacation pay, overtime, termination notice), works within employer direction. A booth renter (self-employed): pays chair rent to the salon, sets their own prices and schedule, keeps all revenue, is responsible for own HST/GST registration (if revenue threshold exceeded), no source deductions, no EI entitlement. Misclassifying an employee as a contractor is a violation of employment law.",
    order: 192,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "H",
    topicLabel: "MWA H — Business Fundamentals",
    question: "A hairstylist employed at a wage wants to calculate whether a potential booth-rental opportunity is financially advantageous. What costs must she consider?",
    options: [
      "Only the monthly rent amount compared to her current wage",
      "Total booth rent, product costs (she pays for all products herself), professional liability insurance, tools and equipment maintenance, provincial trade license fees, HST/GST registration and remittance, income tax instalments, absence of EI/CPP employer contributions, and the need to self-fund retirement savings — all must be weighed against the revenue she would generate",
      "Only product costs — everything else remains the same as when employed",
      "Booth rental is always more financially advantageous — no calculation needed"
    ],
    correctIndex: 1,
    explanation: "A booth renter (self-employed) bears all business costs independently. The full cost analysis must include: monthly chair rent, all professional products (no employer subsidy), professional liability insurance (mandatory for self-employed practitioners), ongoing tool maintenance and replacement, provincial/territorial licensing fees, HST/GST registration and quarterly remittance, federal and provincial income tax instalments, no employer CPP contributions (must pay both employee and employer portions), no access to employment insurance. These costs significantly exceed the wage deductions of an employee and must be covered by a sufficient client base.",
    order: 193,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "H",
    topicLabel: "MWA H — Business Fundamentals",
    question: "What is the purpose of a salon's appointment book occupancy rate as a business metric?",
    options: [
      "It measures the number of products sold per stylist per month",
      "Occupancy rate (booked appointment hours / available appointment hours × 100%) measures how efficiently the salon's time capacity is being used — a consistently low rate indicates insufficient clients or pricing issues; a consistently high rate indicates the salon may need additional staff or extended hours",
      "It measures the percentage of clients who purchase retail products",
      "It measures the proportion of new clients versus returning clients"
    ],
    correctIndex: 1,
    explanation: "Appointment book occupancy rate = (hours booked / hours available) × 100%. A rate below 60% suggests underutilization — the salon may need to invest in marketing, client retention, or pricing review. A rate consistently above 80–85% suggests the salon is at capacity and growth may require additional staff, extended hours, or relocation to a larger space. Occupancy rate is one of the key performance indicators (KPIs) for salon business health.",
    order: 194,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "H",
    topicLabel: "MWA H — Business Fundamentals",
    question: "Under provincial trade regulations, when is a hairstylist legally required to display their trade certificate or licence in the salon?",
    options: [
      "Only when a provincial inspector requests it",
      "Provincial regulations in most Canadian jurisdictions require that a hairstylist's trade certificate or provincial licence be displayed prominently in the work area where clients can see it — demonstrating the stylist's qualifications and regulatory compliance",
      "Only in salons with more than 5 employees",
      "Trade certificates are personal property and must never be displayed publicly"
    ],
    correctIndex: 1,
    explanation: "Most Canadian provincial and territorial hairstyling regulatory bodies require that a licensed hairstylist's certificate or licence be displayed prominently in the salon — visible to clients. This serves as consumer protection: clients can verify that the person performing services on their hair and scalp is properly licensed and regulated. Failure to display may result in regulatory penalties. The licence must be current (renewed as required by the province) and must match the person performing the services.",
    order: 195,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "H",
    topicLabel: "MWA H — Business Fundamentals",
    question: "What is the importance of professional liability (errors and omissions) insurance for a hairstylist?",
    options: [
      "It is optional — only salon owners require insurance",
      "Professional liability insurance protects the hairstylist against financial claims from clients who allege harm caused by the service (chemical burns, allergic reactions, hair damage, injury) — without it, the stylist bears personal legal and financial liability for adverse outcomes",
      "It is only required for stylists performing chemical services, not cutting or styling",
      "The salon owner's general liability insurance covers all employed stylists — individual insurance is never needed"
    ],
    correctIndex: 1,
    explanation: "Professional liability (malpractice/errors and omissions) insurance is essential for any hairstylist — whether employed or self-employed. It covers legal costs and financial settlements if a client claims harm from a service. Employed stylists may have some coverage under the salon's general liability policy, but this often has limitations. Self-employed stylists and booth renters must carry their own policy. Given the potential for chemical burns, allergic reactions, scalp injuries, or property damage in salon services, professional liability insurance is a non-negotiable professional protection.",
    order: 196,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "H",
    topicLabel: "MWA H — Business Fundamentals",
    question: "What is the 'client lifetime value' concept in salon business and why does it matter for a hairstylist?",
    options: [
      "It is the total amount a client spends in a single appointment",
      "It is the total revenue a client generates over their entire relationship with the salon — factoring in visit frequency, average service spend, retail purchases, and referrals; retaining an existing client is far less costly than acquiring a new one, making client retention strategies central to salon profitability",
      "It measures how long a client's colour result lasts before needing a touch-up",
      "It is an assessment of how many years a client has been visiting the salon"
    ],
    correctIndex: 1,
    explanation: "Client lifetime value (CLV) estimates the total revenue a single client generates over their entire relationship with the salon. Example: a client spending $150/visit, visiting every 6 weeks, for 5 years = approximately $6,500 in service revenue, plus retail purchases and referrals. Losing a single client to a poor experience or inadequate follow-up is not just one appointment lost — it is potentially thousands of dollars over years. Understanding CLV motivates investment in client experience, follow-up calls, loyalty programs, and service excellence.",
    order: 197,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "H",
    topicLabel: "MWA H — Business Fundamentals",
    question: "What is the role of continuing education (CE) for a licensed hairstylist after obtaining their Red Seal certification?",
    options: [
      "Continuing education is optional and has no impact on licence renewal",
      "CE keeps the hairstylist current with new techniques, products, chemistry advances, safety protocols, and evolving industry standards — many provincial licensing bodies require a minimum number of CE hours for licence renewal; it is a professional obligation and competitive advantage",
      "CE is only required for stylists who failed part of their initial certification exam",
      "The Red Seal designation means no further education is ever required"
    ],
    correctIndex: 1,
    explanation: "The hairstyling industry evolves continuously — new colouring techniques, chemical formulations, hair extension methods, safety regulations (WHMIS updates, carcinogen advisories), accessibility standards, and diversity competencies emerge regularly. Many provinces require CE hours for licence renewal. Beyond the regulatory requirement, ongoing education distinguishes professionals, expands service menus, improves client outcomes, and demonstrates commitment to excellence. The Red Seal certification reflects knowledge at the time of exam — it does not account for subsequent industry developments.",
    order: 198,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "H",
    topicLabel: "MWA H — Business Fundamentals",
    question: "A hairstylist notices a colleague at work performing services without a valid provincial licence. What is the most appropriate professional response?",
    options: [
      "Ignore the situation — it is not the hairstylist's responsibility",
      "Speak privately with the colleague first; if unresolved, report the concern to the salon manager and/or the provincial regulatory body — unlicensed practice endangers clients and undermines the professional standards of the trade",
      "Compete for the colleague's clients to reduce their business",
      "Contact the media immediately without speaking to the colleague or management first"
    ],
    correctIndex: 1,
    explanation: "Unlicensed practice is a regulatory violation in all Canadian provinces and territories with licensing requirements. It endangers clients who have no assurance of the practitioner's competency and puts the salon at legal risk. The professional response: address it directly with the colleague first (they may be unaware of an issue with their renewal), then escalate to the salon manager, and if not resolved, report to the provincial regulatory body. Hairstylists have a professional obligation to protect the public and uphold regulatory standards of the trade.",
    order: 199,
  },
  {
    tradeSlug: "hairstylist",
    topicId: "H",
    topicLabel: "MWA H — Business Fundamentals",
    question: "A hairstylist is considering opening their own salon. Which regulatory requirements must they research before launching?",
    options: [
      "Only the local business name registration — no other regulatory research is needed",
      "Provincial business registration, trade-specific salon licensing (where required), zoning and building code compliance for salon premises, health and safety regulations (OH&S, salon sanitation standards), WHMIS compliance, HST/GST registration (if revenue threshold is met), employment standards for any employees hired, and professional liability insurance",
      "Only the provincial hairstyling licence — business licensing is handled by the landlord",
      "Only a municipal business licence is needed — provincial regulations do not apply to small salons"
    ],
    correctIndex: 1,
    explanation: "Opening a salon requires compliance with multiple regulatory layers: (1) federal — business number and HST/GST registration if applicable, (2) provincial — business registration, trade-specific salon licence (required in many provinces), employment standards compliance for employees, OH&S compliance for chemical hazards (WHMIS), (3) municipal — business licence, zoning compliance, signage permits, building permit for renovations, and (4) professional obligations — sanitation and infection control standards set by the provincial regulatory body. Failure to comply with any layer risks closure, fines, or legal action.",
    order: 200,
  }
];

async function run() {
  await connectDB();

  const withTopicLabel = QUESTIONS.map((q) => ({
    ...q,
    topicLabel: q.topicLabel || getTopicLabel(q.tradeSlug, q.topicId),
  }));

  const total = await PracticeQuestion.countDocuments();
  if (total > 0 && process.env.DROP !== '1') {
    console.log(`Practice questions already exist (${total} total). Use DROP=1 to replace.`);
    process.exit(0);
  }
  if (process.env.DROP === '1') {
    await PracticeQuestion.deleteMany({});
    console.log('Dropped existing practice questions.');
  }

  await PracticeQuestion.insertMany(withTopicLabel);
  console.log(`Seeded ${withTopicLabel.length} practice questions.`);

  const counts = await PracticeQuestion.aggregate([
    { $group: { _id: '$tradeSlug', count: { $sum: 1 } } },
    { $sort: { _id: 1 } },
  ]);
  counts.forEach((c) => console.log(`  ${c._id}: ${c.count} questions`));

  process.exit(0);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
