/**
 * One-time script: deduplicate QUESTIONS and translate French to English.
 * Run from repo root: node server/scripts/dedupeAndTranslateQuestions.js
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SEED_PATH = path.join(__dirname, 'seedPracticeQuestions.js');

function parseQuestionsArray(code) {
  const startMarker = 'const QUESTIONS = [';
  const start = code.indexOf(startMarker);
  if (start === -1) throw new Error('QUESTIONS array not found');
  let pos = start + startMarker.length;
  let depth = 1;
  while (pos < code.length && depth > 0) {
    const c = code[pos];
    if (c === '[' || c === '{') depth++;
    else if (c === ']' || c === '}') depth--;
    pos++;
  }
  const arrayStr = code.substring(start + startMarker.length, pos - 1);
  return {
    questions: eval('[' + arrayStr + ']'),
    headEnd: start + startMarker.length,
    tailStart: pos,
    head: code.slice(0, start + startMarker.length),
    tail: code.slice(pos),
  };
}

function serializeQuestion(q) {
  const opts = Array.isArray(q.options)
    ? '[\n      ' + q.options.map((s) => JSON.stringify(s)).join(',\n      ') + '\n    ]'
    : '[]';
  return `  {
    tradeSlug: ${JSON.stringify(q.tradeSlug)},
    topicId: ${JSON.stringify(q.topicId)},
    topicLabel: ${JSON.stringify(q.topicLabel)},
    question: ${JSON.stringify(q.question)},
    options: ${opts},
    correctIndex: ${q.correctIndex},
    explanation: ${JSON.stringify(q.explanation || '')},
    order: ${q.order ?? 0},
  }`;
}

function getTranslations() {
  const topicLabels = {
    "Systèmes de signalisation et de communication": "Signalling & Communication Systems",
    "Préparation à l'examen": "Exam Preparation",
  };

  const fullBlocks = [
    {
      questionPrefix: "Dans un système d'alarme incendie",
      question: "In a fire alarm system, what distinguishes a Class A circuit from a Class B circuit?",
      options: [
        "Class A uses 2-wire circuits; Class B uses 4-wire circuits",
        "Class A is a loop circuit that remains functional despite a single open or short; Class B is a T-circuit that is disabled by a single open",
        "Class A circuits require end-of-line resistors; Class B does not",
        "Class A uses addressable devices; Class B uses conventional (zone) devices",
      ],
      explanation: "Class A wiring loops both return conductors back to the FACP so that a single open in the circuit does not interrupt communication with devices beyond the open. Class B uses a T-configuration with an end-of-line resistor; a single open fault disables the circuit beyond the open. Class A is required by the NBC in high-rise buildings.",
    },
    {
      questionPrefix: "Quelle catégorie de câble prend en charge Ethernet 10 Gbps",
      question: "Which cable category supports 10 Gbps Ethernet up to a maximum of 100 metres?",
      options: ["Cat 5e", "Cat 6", "Cat 6A", "Cat 3"],
      explanation: "Cat 6A (Category 6 Augmented) is rated at 500 MHz and supports 10GBASE-T (10 Gbps Ethernet) over the full 100 m channel length. Cat 6 supports 10 Gbps only up to about 55 m. Cat 5e supports only 1 Gbps.",
    },
    {
      questionPrefix: "Quel protocole ouvert est le plus couramment utilisé",
      question: "Which open protocol is most commonly used for communication between building automation system components from different manufacturers?",
      options: ["Modbus RTU", "BACnet (ANSI/ASHRAE 135)", "Profibus DP", "DeviceNet"],
      explanation: "BACnet (ANSI/ASHRAE 135) is the dominant open protocol for building automation systems in North America. It was specifically developed for building automation applications (HVAC, lighting, security) and supports multiple physical layers (BACnet/IP, BACnet MS/TP, BACnet wireless). Modbus and Profibus are more common in industrial automation.",
    },
    {
      questionPrefix: "Un circuit monophasé de 120 V alimente une charge de 16 A sur 40 mètres",
      question: "A 120 V single-phase circuit supplies a 16 A load over 40 metres with #12 AWG copper (R = 5.21 Ω/km). What is the voltage drop?",
      options: ["3.3 V", "5.3 V", "6.7 V", "10.6 V"],
      explanation: "VD = 2 × 40 × 5.21 × 16 / 1000 = 6.67 V ≈ 6.7 V. VD % = 6.7 / 120 = 5.6% — exceeds the CEC 3% recommendation for branch circuits.",
    },
    {
      questionPrefix: "Quatre conducteurs ont chacun un diamètre extérieur de 10 mm",
      question: "Four conductors each have an outside diameter of 10 mm. What is the minimum internal cross-sectional area of conduit required (fill rule for 3+ conductors)?",
      options: ["314 mm²", "392 mm²", "785 mm²", "1257 mm²"],
      explanation: "Area per conductor = π × 10² / 4 = 78.54 mm². Total = 4 × 78.54 = 314.2 mm². Minimum conduit area = 314.2 / 0.40 = 785 mm².",
    },
    {
      questionPrefix: "Un moteur à cage d'écureuil à 4 pôles, 60 Hz",
      question: "A 4-pole, 60 Hz squirrel-cage motor runs at 1728 rpm at full load. What is the percent slip?",
      options: ["2.0%", "3.5%", "4.0%", "5.0%"],
      explanation: "Ns = 120 × 60 / 4 = 1800 rpm. Slip = (1800 − 1728) / 1800 × 100% = 72/1800 × 100% = 4.0%.",
    },
    {
      questionPrefix: "Quel est le but d'une mise à la terre temporaire (TPG)",
      question: "What is the purpose of a Temporary Protective Ground (TPG) applied to a de-energized high-voltage conductor?",
      options: [
        "To provide a continuous grounding path during normal operation",
        "To drain capacitive charge and prevent accidental re-energization from creating a shock hazard",
        "To identify the conductor as de-energized for AHJ inspection",
        "To connect the conductor to the lightning protection system",
      ],
      explanation: "TPGs are shorting cables attached between phase conductors and earth on de-energized HV systems. They drain any capacitive or induced voltage, and if the line is accidentally re-energized, they create a bolted fault that trips upstream protection — protecting the worker from shock. Required by the CEC for HV work.",
    },
    {
      questionPrefix: "Quelle instruction de logique à contacts en PLC est équivalente à un contact normalement fermé",
      question: "Which PLC ladder logic instruction is equivalent to a normally closed contact?",
      options: ["XIC (Examine If Closed)", "XIO (Examine If Open)", "OTE (Output Energize)", "OTL (Output Latch)"],
      explanation: "XIO (Examine If Open) evaluates as TRUE (passes power) when the corresponding PLC address bit is 0 — exactly like a normally closed contact that passes current when the coil is not energized. XIC is the normally open equivalent.",
    },
    {
      questionPrefix: "Vous rencontrez une question dont vous n'êtes pas sûr",
      question: "You encounter a question you are unsure about. What is the best exam strategy?",
      options: [
        "Leave it blank to avoid losing points for a wrong answer",
        "Spend as much time as needed until you are confident",
        "Make your best guess, mark it, move on, and return to it at the end",
        "Choose the longest answer because it is usually correct",
      ],
      explanation: "The Red Seal exam has no penalty for wrong answers — an unanswered question always scores 0, but a guess has a 25% chance of scoring. The best strategy is to guess, mark, move on, and return with fresh eyes. Spending too long on one question risks running out of time for easier questions later.",
    },
    {
      questionPrefix: "Quelle AMT devrait recevoir le plus de temps d'étude",
      question: "Which AMA (Area of Measurement) should receive the most study time, and how many exam questions does it represent?",
      options: [
        "AMA B — Generating, distribution and supply systems — 26 questions",
        "AMA D — Motors and control systems — 18 questions",
        "AMA C — Wiring systems — 34 questions",
        "AMA A — Common occupational skills — 12 questions",
      ],
      explanation: "AMA C (Wiring systems) is the highest-weighted section with 34 questions (34% of the exam). It covers cable pathways, conductors, cables, branch circuits, lighting, HVAC, electric heating, and emergency lighting. Strong performance here is the single most important factor for passing.",
    },
    {
      questionPrefix: "[AMT A] Quelle classe de gants isolants",
      question: "[AMA A] Which class of rubber insulating gloves provides the highest voltage protection?",
      options: ["Class 00 — 500V AC", "Class 0 — 1,000V AC", "Class 2 — 17,000V AC", "Class 4 — 40,000V AC"],
      explanation: "Rubber insulating glove classes: 00 (500V), 0 (1,000V), 1 (7,500V), 2 (17,000V), 3 (26,500V), 4 (40,000V AC). Class 4 provides the highest protection and is required for high-voltage work.",
    },
    {
      questionPrefix: "[AMT A] Quelle est la séquence correcte des trois premières étapes d'une procédure LOTO",
      question: "[AMA A] What is the correct sequence for the first three steps of a LOTO procedure?",
      options: [
        "Isolate → Notify → Test for absence of voltage",
        "Notify → Identify all energy sources → Isolate",
        "Lock → Tag → Test for absence of voltage",
        "Test → Isolate → Lock and tag",
      ],
      explanation: "LOTO sequence: (1) Notify, (2) Identify all isolation points and energy sources, (3) Isolate, (4) Lock and tag, (5) Test for absence of voltage, (6) Verify zero-energy state.",
    },
    {
      questionPrefix: "[AMT A] Un multimètre utilisé sur un jeu de barres",
      question: "[AMA A] A multimeter used on a 600 V three-phase distribution panel bus must be rated at minimum:",
      options: ["CAT I", "CAT II", "CAT III", "CAT IV"],
      explanation: "CAT III covers three-phase distribution systems, bus bars, disconnects, and fixed equipment — the minimum for this application. CAT IV is for service entrance. Always use the highest applicable category.",
    },
    {
      questionPrefix: "[AMT A] Quel type de dessin montre l'état final installé",
      question: "[AMA A] Which type of drawing shows the final as-installed condition and routing of all electrical systems after project completion?",
      options: ["Shop drawing", "Wiring diagram", "As-built (record) drawing", "Elevation schematic"],
      explanation: "As-built (record) drawings are updated throughout the project and at completion to reflect the actual installed condition — including routing changes, conduit sizes, and circuit changes made during construction. They are a required closeout document.",
    },
    {
      questionPrefix: "[AMT B] Dans un système triphasé en étoile 347/600 V",
      question: "[AMA B] In a 347/600 V three-phase wye system, what is the voltage between a phase conductor and neutral?",
      options: ["208 V", "240 V", "347 V", "600 V"],
      explanation: "347 V to neutral × √3 = 601 V ≈ 600 V phase-to-phase. This is the standard Canadian industrial supply.",
    },
    {
      questionPrefix: "[AMT B] Une électrode de mise à la terre enrobée de béton (Ufer ground)",
      question: "[AMA B] A concrete-encased (Ufer) grounding electrode requires a minimum of how many metres of conductor embedded in the footing?",
      options: ["2.4 m", "3.0 m", "6.0 m", "7.5 m"],
      explanation: "The CEC requires a minimum of 6 m of rebar (≥ 10 mm diameter) or copper conductor embedded in the concrete footing or foundation for a concrete-encased electrode.",
    },
    {
      questionPrefix: "[AMT B] Une ASI en ligne (double conversion)",
      question: "[AMA B] A double-conversion (online) UPS continuously powers the load from its inverter. What is the main advantage of this design?",
      options: [
        "Larger batteries and longer runtime",
        "Zero transfer time on failure and complete isolation from utility power quality issues",
        "Lower cost than standby UPS",
        "Built-in surge suppression that an offline UPS does not have",
      ],
      explanation: "Online UPS: AC→DC→AC continuously. The load is always fed by the inverter — zero transfer time and complete isolation from utility harmonics, sags, swells, and frequency variation. Most reliable topology for critical loads.",
    },
    {
      questionPrefix: "[AMT B] Un transformateur triphasé de 75 kVA, 600 V / 208 V",
      question: "[AMA B] A 75 kVA, 600 V / 208 V three-phase transformer is fully loaded. What is the approximate full-load secondary current?",
      options: ["72 A", "125 A", "208 A", "360 A"],
      explanation: "I = S / (√3 × V) = 75,000 / (1.732 × 208) = 75,000 / 360.3 ≈ 208 A.",
    },
    {
      questionPrefix: "[AMT B] Un fusible limiteur de courant est spécifié",
      question: "[AMA B] A current-limiting fuse is specified on a distribution panel. What distinguishes it from a standard time-delay fuse?",
      options: [
        "It opens more slowly to allow motor inrush without opening",
        "It interrupts fault current in less than one half-cycle, limiting let-through peak energy",
        "It uses a reusable fuse element that can be reset after operation",
        "It is rated for higher continuous current than a standard fuse of the same size",
      ],
      explanation: "Current-limiting fuses open in less than one half-cycle (< 8 ms at 60 Hz), limiting let-through peak current to a fraction of available fault current. This protects downstream equipment from the mechanical and thermal stress of full-magnitude faults.",
    },
    {
      questionPrefix: "[AMT B] Pourquoi un composé antioxydant doit-il être appliqué",
      question: "[AMA B] Why must antioxidant compound be applied to all aluminium conductor terminations?",
      options: [
        "To lubricate the conductor when pulling in conduit",
        "To prevent the natural aluminium oxide layer from creating a high-resistance connection",
        "To provide corrosion protection only in wet locations",
        "To meet CEC requirement only for conductors larger than 1/0 AWG",
      ],
      explanation: "Aluminium oxidizes quickly in air, forming aluminium oxide — an electrical insulator. Antioxidant compound prevents new oxide formation and helps displace existing oxide at the contact interface, ensuring a low-resistance, reliable connection.",
    },
    {
      questionPrefix: "[AMT B] Que se passe-t-il si un onduleur solaire raccordé au réseau n'a pas de protection anti-îlotage",
      question: "[AMA B] What happens if a grid-tied solar inverter lacks anti-islanding protection and the utility is down?",
      options: [
        "The inverter automatically switches to battery backup mode",
        "The solar system could continue to feed de-energized utility lines, creating a lethal hazard",
        "The inverter output voltage rises above normal, damaging connected loads",
        "The solar panels stop producing power without the grid reference voltage",
      ],
      explanation: "Without anti-islanding, a grid-tied solar system continues to feed the distribution grid during an outage. Line workers and first responders who assume lines are de-energized could be electrocuted. Anti-islanding is a mandatory safety requirement for all grid-tied inverters.",
    },
    {
      questionPrefix: "[AMT B] Quel type d'enveloppe NEMA est requis pour un équipement extérieur dans une usine de transformation alimentaire",
      question: "[AMA B] What NEMA enclosure type is required for outdoor equipment in a food processing plant where corrosion resistance is essential?",
      options: ["NEMA Type 1", "NEMA Type 3R", "NEMA Type 4", "NEMA Type 4X"],
      explanation: "NEMA Type 4X adds corrosion resistance (stainless steel or fibreglass construction) to the watertight protection of Type 4. Required in food, marine, chemical, and other corrosive environments. Type 3R is rain-resistant for outdoor use but is neither watertight nor corrosion-resistant.",
    },
    {
      questionPrefix: "[AMT C] Trois conducteurs #8 AWG",
      question: "[AMA C] Three #8 AWG conductors each have a cross-sectional area of 43.2 mm². What is the minimum required internal conduit area?",
      options: ["130 mm²", "216 mm²", "324 mm²", "432 mm²"],
      explanation: "Total conductor area = 3 × 43.2 = 129.6 mm². Minimum conduit area = 129.6 / 0.40 = 324 mm² (40% fill rule for 3+ conductors).",
    },
    {
      questionPrefix: "[AMT C] Un circuit alimente une charge continue de 28 A",
      question: "[AMA C] A circuit supplies a continuous 28 A load. What is the minimum conductor ampacity required by the CEC?",
      options: ["28 A", "30 A", "35 A", "40 A"],
      explanation: "Continuous load (≥ 3 hours): minimum conductor ampacity = FLA × 125% = 28 × 1.25 = 35 A.",
    },
    {
      questionPrefix: "[AMT C] Quel conduit utilise des raccords à vis ou à compression",
      question: "[AMA C] Which conduit uses set-screw or compression fittings, is thin-wall steel, and is the most common conduit in commercial construction?",
      options: ["RMC", "IMC", "EMT", "RNMC (PVC)"],
      explanation: "EMT (Electrical Metallic Tubing) is thin-wall steel, uses set-screw or compression (non-threaded) fittings, and is the most widely installed conduit in commercial and light industrial work. Not approved for direct burial or concrete embedment.",
    },
    {
      questionPrefix: "[AMT C] Quel est le nombre total maximal de degrés de courbure autorisé entre deux points de tirage",
      question: "[AMA C] What is the maximum total degrees of bend allowed between two conduit pull points?",
      options: ["180°", "270°", "360°", "450°"],
      explanation: "The CEC limits total bends between two pull points to 360° — equivalent to four 90° bends. More bends require additional pull points.",
    },
    {
      questionPrefix: "[AMT C] Un radiateur électrique à plinthe de 4 800 W",
      question: "[AMA C] A 4,800 W, 240 V single-phase baseboard heater is a continuous load. What is the minimum branch circuit breaker size?",
      options: ["20 A", "25 A", "30 A", "35 A"],
      explanation: "Load current = 4800 / 240 = 20 A. Continuous: breaker ≥ 20 × 1.25 = 25 A. Next standard size is 25 A — use a 25 A two-pole breaker with #10 AWG copper.",
    },
    {
      questionPrefix: "[AMT C] Quel câble a un blindage en ruban de cuivre",
      question: "[AMA C] Which cable has copper tape armour and PVC outer sheath and is rated for direct burial and cable tray?",
      options: ["NMD90", "AC90 (BX)", "TECK90", "RW90"],
      explanation: "TECK90 has XLPE-insulated conductors, copper tape armour, and 90°C PVC outer sheath. Approved for cable tray, direct burial, wet locations, and outdoor use.",
    },
    {
      questionPrefix: "[AMT C] Quelle protection le CCE exige-t-il sur les prises 125 V installées dans une salle de bain",
      question: "[AMA C] What protection does the CEC require on 125 V receptacles installed in a bathroom?",
      options: ["AFCI breaker", "GFCI protection", "Surge protection device", "Standard 15 A breaker only"],
      explanation: "The CEC requires GFCI protection on all 125 V receptacles in bathrooms, garages, kitchens, and outdoors. GFCI trips at a ground fault current of approximately 5 mA within 1/40 of a second.",
    },
    {
      questionPrefix: "[AMT C] Quelle est la chute de tension maximale recommandée par le CCE pour un circuit de dérivation",
      question: "[AMA C] What is the maximum voltage drop recommended by the CEC for a branch circuit?",
      options: ["1%", "3%", "5%", "8%"],
      explanation: "CEC Rule 8-102 recommends ≤ 3% for branch circuits and ≤ 5% total for feeder and branch circuit combined.",
    },
    {
      questionPrefix: "[AMT C] Un circuit monophasé de 120 V, 40 mètres, alimente 16 A",
      question: "[AMA C] A 120 V single-phase circuit, 40 m long, supplies 16 A with #12 AWG copper (R = 5.21 Ω/km). What is the voltage drop?",
      options: ["3.3 V", "5.3 V", "6.7 V", "10.6 V"],
      explanation: "VD = 2 × 40 × 5.21 × 16 / 1000 = 6.67 V ≈ 6.7 V. VD % = 6.7 / 120 = 5.6% — exceeds CEC 3% recommendation.",
    },
    {
      questionPrefix: "[AMT C] Selon le CNB, quelle est la durée minimale de secours sur batterie",
      question: "[AMA C] According to the NBC, what is the minimum battery backup duration that emergency lighting must maintain on loss of power?",
      options: ["30 minutes", "1 hour", "90 minutes", "8 hours"],
      explanation: "The NBC requires a minimum of 30 minutes of emergency lighting. The annual ULC S524 test requires a full 90-minute discharge test to verify the battery can support the load for the required period.",
    },
    {
      questionPrefix: "[AMT D] Un moteur triphasé de 600 V a un FLA de plaque signalétique",
      question: "[AMA D] A 600 V three-phase motor has a nameplate FLA of 15.2 A. What is the minimum ampacity of the branch circuit conductors?",
      options: ["14.2 A", "19.0 A", "22.8 A", "25.0 A"],
      explanation: "CEC Rule 28-106: conductor ampacity ≥ FLA × 125% = 15.2 × 1.25 = 19.0 A minimum.",
    },
    {
      questionPrefix: "[AMT D] Un moteur à 6 pôles, 60 Hz, tourne à 1150 tr/min",
      question: "[AMA D] A 6-pole, 60 Hz motor runs at 1150 rpm at full load. What is the percent slip?",
      options: ["2.1%", "4.2%", "6.3%", "8.4%"],
      explanation: "Ns = 120 × 60 / 6 = 1200 rpm. Slip = (1200 − 1150) / 1200 × 100% = 4.2%.",
    },
    {
      questionPrefix: "[AMT D] Dans un démarreur à tension réduite étoile-triangle",
      question: "[AMA D] In a wye-delta reduced-voltage starter, starting torque is reduced to what fraction of full-voltage starting torque?",
      options: ["50%", "33%", "67%", "75%"],
      explanation: "In wye start, each winding receives reduced voltage 1/√3. Torque ∝ V², so torque = (1/√3)² = 1/3 ≈ 33% of full-voltage torque. Starting current is also reduced to 33%.",
    },
    {
      questionPrefix: "[AMT D] Quel étage d'un VFD utilise des commutateurs IGBT",
      question: "[AMA D] Which stage of a VFD uses IGBT switches to produce a variable-frequency AC output from the DC bus?",
      options: ["Rectifier stage", "DC bus capacitor bank", "Inverter stage", "EMC input filter"],
      explanation: "The inverter stage uses IGBT switches with PWM to chop the DC bus voltage into a series of pulses that simulate a sine wave at the desired frequency and voltage — creating the variable-frequency output to the motor.",
    },
    {
      questionPrefix: "[AMT D] En logique à contacts PLC, que fait l'instruction XIC",
      question: "[AMA D] In PLC ladder logic, what does the XIC (Examine If Closed) instruction do?",
      options: [
        "A normally closed contact that opens when the bit is 1",
        "A normally open contact that is TRUE when the corresponding bit is 1",
        "An output coil that energizes when the rung is true",
        "A timer instruction that activates on a rising edge",
      ],
      explanation: "XIC (Examine If Closed) is equivalent to a normally open (NO) contact. The instruction is TRUE (passes power) when the corresponding PLC address bit is 1. It is the most common instruction in PLC ladder programs.",
    },
    {
      questionPrefix: "[AMT E] Un système d'alarme incendie d'hôpital doit rester fonctionnel",
      question: "[AMA E] A hospital fire alarm system must remain functional with a single wire open anywhere in the circuit. What wiring class is required?",
      options: ["Class B with end-of-line resistor", "Class A loop wiring", "Standard star wiring with GFCI", "Wireless (RF) devices only"],
      explanation: "Class A wiring loops both return conductors back to the FACP. A single open fault does not disable the circuit — the FACP communicates with all devices via the other path. Required by the NBC in high-rises, hospitals, and other critical occupancy buildings.",
    },
    {
      questionPrefix: "[AMT E] Un chemin de câblage structuré est certifié",
      question: "[AMA E] A structured cabling pathway is certified \"Cat 6A\". What does this guarantee for the installed channel?",
      options: [
        "Rated to 250 MHz; supports 1 Gbps up to 100 m",
        "Rated to 500 MHz; supports 10 Gbps Ethernet up to 100 m",
        "Rated to 100 MHz; supports 100 Mbps only",
        "Uses shielded (ScTP) construction exclusively",
      ],
      explanation: "Cat 6A is rated at 500 MHz and supports 10GBASE-T (10 Gbps) over the full 100 m horizontal channel length. Cat 6 achieves 10 Gbps only up to about 55 m.",
    },
    {
      questionPrefix: "[AMT E] Un BAS utilise BACnet/IP. Des détecteurs de présence",
      question: "[AMA E] A BAS uses BACnet/IP. Occupancy sensors detect an empty floor, triggering an HVAC setback. Which component sends the \"unoccupied\" signal directly to the DDC controller?",
      options: [
        "The PoE switch powering the sensors",
        "The BAS supervisory server",
        "The occupancy sensor wired to a digital input on the DDC controller",
        "The security station HMI",
      ],
      explanation: "Occupancy sensors provide a dry contact or low-voltage digital signal wired directly to a digital input on the local DDC controller. The DDC reads this signal, runs its control program, and commands HVAC actuators. The status is then reported to the BAS server over the BACnet/IP network.",
    },
  ];

  return { topicLabels, fullBlocks };
}

function main() {
  const code = fs.readFileSync(SEED_PATH, 'utf8');
  const { questions, head, tail } = parseQuestionsArray(code);
  const translations = getTranslations();

  // 1) Deduplicate by normalized question text (keep first occurrence)
  const seen = new Set();
  const deduped = questions.filter((q) => {
    const key = (q.question || '').trim().toLowerCase().replace(/\s+/g, ' ');
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  console.log(`Deduplication: ${questions.length} -> ${deduped.length} (removed ${questions.length - deduped.length})`);

  // 2) Translate French: topicLabel and full blocks (question + options + explanation)
  const final = deduped.map((q) => {
    let out = { ...q };
    if (translations.topicLabels[out.topicLabel]) {
      out.topicLabel = translations.topicLabels[out.topicLabel];
    }
    const block = translations.fullBlocks.find(
      (b) =>
        (q.question && q.question.indexOf(b.questionPrefix) === 0) ||
        (q.question && q.question.includes(b.questionPrefix))
    );
    if (block) {
      out.question = block.question;
      out.options = block.options;
      out.explanation = block.explanation;
    }
    return out;
  });

  const outCode = head + '\n' + final.map(serializeQuestion).join(',\n') + '\n];' + tail.replace(/^[\s;]+/, '\n\n');
  fs.writeFileSync(SEED_PATH, outCode, 'utf8');
  console.log('Wrote', SEED_PATH);
}

main();
