// ============================================================
// CertReady — Construction Electrician Course Data
// Based on: Red Seal Occupational Standard (RSOS) – Construction Electrician (2025)
// Red Seal Interprovincial Exam: 100 questions
// Apprenticeship: 4 levels, 7200 hours total
// MWA Weightings: A=12%, B=26%, C=34%, D=18%, E=10%
// ============================================================

const electricianCourse = {
  meta: {
    trade: 'Construction Electrician',
    redSealCode: '309A',
    totalExamQuestions: 100,
    apprenticeshipLevels: 4,
    totalHours: 7200,
    version: '2025',
    lastUpdated: '2025',
  },

  parts: [

    // ============================================================
    // PART 1 — COMMON OCCUPATIONAL SKILLS
    // MWA A: Performs Common Occupational Skills (12%)
    // Tasks: A-1 Safety (23%), A-2 Tools (24%), A-3 Work Organization (18%),
    //        A-4 Support Components (21%), A-5 Commissioning (14%), A-6 Communication (0%)
    // ============================================================
    {
      id: 'elec-part-1',
      number: 1,
      title: 'Common Occupational Skills',
      description: 'Safety, tools, work organization, support components, commissioning, and communication — the essential foundation every construction electrician must master.',
      chapters: [

        // ─────────────────────────────────────────────────────────
        // CHAPTER 1 — Safety (MWA A-1) — FREE
        // ─────────────────────────────────────────────────────────
        {
          id: 'elec-ch-01',
          number: 1,
          title: 'Safety on the Job',
          subtitle: 'MWA A-1 · Performs Safety-Related Functions (23% of MWA A)',
          isFree: true,
          estimatedMinutes: 50,
          sections: [
            {
              id: 'elec-ch01-s1',
              title: '1.1 Personal Protective Equipment (PPE) and Safety Equipment',
              content: [
                {
                  type: 'paragraph',
                  text: 'Construction electricians face a unique set of hazards: electric shock, arc flash, falls, confined space exposure, and contact with hazardous substances. Selecting and using the right PPE is not optional — it is a code and OH&S requirement. PPE must be matched to the task and environment before any work begins.',
                },
                {
                  type: 'keyTerm',
                  term: 'Arc Flash',
                  definition: 'A sudden release of electrical energy through the air when a fault occurs between two energized conductors or between an energized conductor and ground. Arc flash produces intense heat (up to 20,000°C), pressure waves, and flying shrapnel — all of which can cause severe burns and fatal injury.',
                },
                {
                  type: 'keyTerm',
                  term: 'AHJ (Authority Having Jurisdiction)',
                  definition: 'The organization, office, or individual responsible for enforcing the requirements of a code or standard. On electrical worksites this includes electrical inspectors, OH&S officers, and the prime contractor.',
                },
                {
                  type: 'keyTerm',
                  term: 'WHMIS',
                  definition: 'Workplace Hazardous Materials Information System — Canada\'s national hazard communication standard requiring labels and Safety Data Sheets (SDS) for all controlled products on site.',
                },
                {
                  type: 'infoBox',
                  title: 'Types of PPE for Construction Electricians',
                  items: [
                    'Shock hazard PPE — rubber insulating gloves (rated by voltage class), rubber boots, insulating blankets',
                    'Arc flash hazard PPE — arc-rated (AR) clothing, face shields, balaclava, gloves rated to the incident energy level',
                    'Head protection — Class E (electrical) hard hat rated to 20,000 V',
                    'Eye protection — safety glasses, goggles, or face shields as required by the task',
                    'Safety footwear — CSA Grade 1 dielectric footwear with puncture-resistant sole',
                    'Hand protection — leather, rubber insulating, or chemical-resistant gloves per task',
                    'Hearing protection — earplugs or earmuffs when exposed to >85 dB',
                    'Respiratory protection — half-face or full-face respirator when working with dust, fumes, or designated substances',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Safety Equipment (Beyond Personal PPE)',
                  items: [
                    'Fall protection — full-body harness (fall arrest) and lanyard, or guardrails (fall restraint)',
                    'Confined space equipment — gas detectors, retrieval harness, ventilation fans, attendant communication',
                    'Lock-out/tag-out (LOTO) devices — breaker locks, multi-lock hasps, scissors, personal danger tags',
                    'Temporary protective grounds (TPG) — shorting cables applied to de-energized conductors to bleed stored charge',
                    'Fire extinguishers — Class C rated for electrical fires',
                    'First aid equipment — minimum kit per OH&S regulation for crew size',
                    'Eye wash stations — mandatory when working with acids, corrosives, or chemical hazards',
                    'Signage and barriers — danger/caution tape, barricades, arc flash warning labels',
                    'Fume and toxic gas detectors — H₂S, CO, O₂ depletion detectors for confined spaces and vaults',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'PPE must be inspected before each use. Damaged or defective items — cracked hard hats, torn arc-rated garments, gloves with pin-holes — must be immediately removed from service and tagged. PPE is never to be used for purposes other than its intended design.',
                },
                {
                  type: 'infoBox',
                  title: 'Site Hazards Specific to Electrical Work',
                  items: [
                    'Live equipment — energized panels, conductors, and buses',
                    'Arc flash/arc blast hazard zones — defined by incident energy study or the CEC default tables',
                    'Working at heights — on ladders, scaffolds, boom lifts, and rooftops',
                    'Confined spaces — electrical vaults, manholes, crawl spaces, equipment rooms',
                    'Open excavations — trenches for underground services',
                    'Hazardous locations — classified areas (Zones 0, 1, 2 or Divisions 1, 2) per CEC Section 18',
                    'Weather conditions — lightning, ice, wet surfaces on outdoor work',
                    'Overhead hazards — energized distribution lines during aerial and rooftop work',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch01-s2',
              title: '1.2 Maintaining a Safe Work Environment',
              content: [
                {
                  type: 'paragraph',
                  text: 'A safe work environment is the shared responsibility of all workers on site. Construction electricians must identify, report, and eliminate hazards proactively. Safe work practices must be followed at all times according to OH&S regulations, company policy, and site-specific requirements.',
                },
                {
                  type: 'infoBox',
                  title: 'Safe Work Practices',
                  items: [
                    'Perform a pre-job hazard assessment before starting each task',
                    'Keep work areas clean, clutter-free, and free of tripping hazards',
                    'Store all materials and chemicals in designated areas per WHMIS requirements',
                    'Barricade and sign all hazard zones — use caution/danger tape and fences',
                    'Identify the locations of all safety components (fire extinguishers, first aid, MSDS/SDS, eye wash)',
                    'Know emergency procedures: evacuation routes, fire response, hazardous chemical spill procedures',
                    'Identify and properly contain all designated substances encountered (asbestos, lead, silica, PCBs in old transformers)',
                    'Know the limitations of self and co-workers — do not allow fatigued or impaired workers to perform energized work',
                  ],
                },
                {
                  type: 'keyTerm',
                  term: 'Designated Substances',
                  definition: 'Substances regulated under provincial OH&S legislation because of special hazard to worker health. On electrical worksites these commonly include asbestos (old insulation and fireproofing), lead (old solder and paint), silica (concrete cutting), PCBs (old transformers and capacitors), and mercury (fluorescent lamps).',
                },
              ],
            },
            {
              id: 'elec-ch01-s3',
              title: '1.3 Lock-Out / Tag-Out (LOTO) Procedures',
              content: [
                {
                  type: 'paragraph',
                  text: 'Lock-out/tag-out is the most critical safety procedure in electrical work. LOTO ensures that equipment is de-energized and cannot be accidentally re-energized while a worker is in contact with it. Every jurisdiction in Canada has legislated minimum LOTO standards.',
                },
                {
                  type: 'infoBox',
                  title: 'Standard LOTO Sequence (6 Steps)',
                  items: [
                    '1. NOTIFY — inform all affected workers and other trades; coordinate with the AHJ',
                    '2. IDENTIFY — locate the isolation point(s) using panel schedules, single-line diagrams, conductor tags, and equipment labels; identify all hazardous energy sources (electrical, mechanical, pneumatic, stored)',
                    '3. ISOLATE — open the identified disconnecting means to de-energize the circuit or equipment',
                    '4. LOCK & TAG — apply an approved lock and personal danger tag; use multi-lock hasp when multiple workers are on the same circuit',
                    '5. TEST — verify absence of voltage using rated test equipment (voltmeter, absence-of-voltage tester); apply temporary protective grounds where required by the CEC',
                    '6. VERIFY — confirm the system is in zero-energy state and safe to work on',
                  ],
                },
                {
                  type: 'keyTerm',
                  term: 'Zero Potential / Zero Energy State',
                  definition: 'The condition in which all forms of stored energy (electrical, mechanical, spring, gravitational, pneumatic) have been released or blocked so that the equipment cannot start or create a hazard.',
                },
                {
                  type: 'keyTerm',
                  term: 'Temporary Protective Ground (TPG)',
                  definition: 'A shorting cable assembly applied to de-energized conductors (between phases and to ground) to dissipate any stored charge, induced voltage, or capacitive energy before workers make contact. Required by the CEC for work on de-energized high-voltage systems.',
                },
                {
                  type: 'paragraph',
                  text: 'Approved LOTO devices include: breaker locks (keyed padlocks that prevent a breaker from being re-closed), scissors (prevent a knife switch from being closed), and arc flash protection equipment. Testing equipment must be rated for the system voltage — verify the tester itself is functional before and after use on a known live source.',
                },
              ],
            },
          ],
          practiceQuestions:  [],
        },

        // ─────────────────────────────────────────────────────────
        // CHAPTER 2 — Tools, Equipment & Work Organization (MWA A-2, A-3, A-4)
        // ─────────────────────────────────────────────────────────
        {
          id: 'elec-ch-02',
          number: 2,
          title: 'Tools, Equipment, and Work Organization',
          subtitle: 'MWA A-2, A-3, A-4 · Tools (24%) · Organization (18%) · Support Components (21%)',
          isFree: false,
          estimatedMinutes: 55,
          sections: [
            {
              id: 'elec-ch02-s1',
              title: '2.1 Hand Tools, Power Tools, and Measuring Instruments',
              content: [
                {
                  type: 'paragraph',
                  text: 'Construction electricians must select, use, inspect, and maintain a wide range of tools. Tool selection depends on the task, the material being worked, and the environment. All tools must be inspected before use, kept clean and calibrated, and defective tools must be tagged out and replaced.',
                },
                {
                  type: 'infoBox',
                  title: 'Standard Hand Tools',
                  items: [
                    'Lineman pliers, diagonal cutters, needle nose pliers, slip-joint pliers',
                    'Wire strippers and cable strippers (matched to conductor size)',
                    'Screwdrivers — flat, Phillips, Robertson, Torx, tamper-proof',
                    'Fish tapes and fish sticks for conductor pulling',
                    'Knockout punch sets for enclosures',
                    'Pipe benders — hand benders (½" to 1"), hydraulic benders (1¼" and up)',
                    'Measuring tapes, levels (torpedo and spirit), chalk lines, plumb bobs',
                    'Hack saws, hole saws, pipe reamers, and pipe cutters',
                    'Combination squares and combination wrench sets',
                    'Conduit reamers, die sets, and taps',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Power Tools and Specialty Equipment',
                  items: [
                    'Rotary and hammer drills with auger, masonry, step, and wood bits',
                    'Reciprocating saws for opening walls and cutting conduit',
                    'Hydraulic cable cutters for large conductors',
                    'Cable pullers and tuggers for long conductor runs',
                    'Powder-actuated tools (PAT) — require a separate certification to operate',
                    'Heat guns and torch sets for heat-shrink and soldering',
                    'Conduit threading machines',
                    'Cable tie guns',
                    'Thermal imaging cameras for hot-spot detection',
                  ],
                },
                {
                  type: 'keyTerm',
                  term: 'Powder-Actuated Tool (PAT)',
                  definition: 'A fastening tool driven by a powder charge (similar to a blank cartridge) used to attach electrical supports to concrete and steel. Operators must hold a valid PAT certification and follow manufacturer specifications. The tool is only loaded immediately before use.',
                },
                {
                  type: 'infoBox',
                  title: 'Electrical Measuring and Test Instruments — CAT Categories',
                  items: [
                    'CAT I — Electronic equipment, low-energy circuits',
                    'CAT II — Single-phase receptacle-connected loads (standard outlets)',
                    'CAT III — Three-phase distribution, including bus bars, disconnects, and fixed equipment',
                    'CAT IV — Utility entrance, service entrance, outdoor conductors',
                    'Note: Always use the highest CAT rating available for the system being measured. A higher CAT number means greater protection against transient voltage spikes.',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Common Test Equipment',
                  items: [
                    'Multimeter (voltmeter, ammeter, ohmmeter combined)',
                    'Clamp-on ammeter — measures current without breaking the circuit',
                    'Insulation resistance tester (megohmmeter/megger) — checks winding and cable insulation integrity',
                    'Voltage tester / solenoid tester (wiggy) — simple go/no-go voltage indication',
                    'Phase rotation meter — confirms correct ABC phase rotation before energizing motors',
                    'Power quality analyzer — measures harmonics, power factor, voltage sags/swells',
                    'Thermographic (IR) camera — identifies overheating connections and components',
                    'Ground loop impedance tester — measures earth electrode resistance',
                    'High potential (high-pot) tester — applies high voltage to test dielectric strength of cable insulation',
                    'Oscilloscope — displays voltage waveforms for AC/DC analysis',
                    'Acoustic level sensor / ultrasonic detector — locates partial discharge in HV equipment',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch02-s2',
              title: '2.2 Access Equipment — Ladders, Lifts, and Fall Protection',
              content: [
                {
                  type: 'paragraph',
                  text: 'Construction electricians spend a large portion of their work time at height. All access equipment must be CSA or ANSI rated, inspected before use, and used within its limitations. Working at heights requires fall protection — either fall arrest (harness and lanyard) or fall restraint (prevents reaching the fall edge).',
                },
                {
                  type: 'infoBox',
                  title: 'Types of Access Equipment',
                  items: [
                    'Step ladders — self-supporting; never use the top step or top cap as a working surface',
                    'Extension ladders — set at a 4:1 ratio (1 foot out for every 4 feet of height); secure at top and bottom',
                    'Scaffold systems — must be assembled by trained personnel; toe boards and guardrails required',
                    'Scissor lifts — must be operated on firm, level ground; outriggers deployed where required',
                    'Articulating boom lifts — require full-body harness and lanyard at all times',
                    'Fall arrest system — full-body harness, shock-absorbing lanyard, and certified anchor point (minimum 2× intended load)',
                    'Fall restraint — prevents the worker from reaching the fall edge; requires documented anchor point engineering',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'Before using any access equipment: identify overhead hazards (especially energized power lines), install barricades and signage to protect the work zone, inspect the equipment, and confirm operator training certification is current. Damaged access equipment is tagged out and removed from service — never repaired in the field.',
                },
              ],
            },
            {
              id: 'elec-ch02-s3',
              title: '2.3 Rigging, Hoisting, and Lifting',
              content: [
                {
                  type: 'paragraph',
                  text: 'Transformers, switchboards, and motor control centres (MCCs) are heavy pieces of equipment. Rigging, hoisting, and lifting must be planned and executed safely. Only certified riggers may attach loads to cranes and hoists. All rigging hardware is marked with a Working Load Limit (WLL).',
                },
                {
                  type: 'keyTerm',
                  term: 'Working Load Limit (WLL)',
                  definition: 'The maximum load that may be applied to a rigging component (sling, shackle, hook) under normal conditions of use. WLL is always less than the breaking strength. Never exceed the WLL on any rigging component.',
                },
                {
                  type: 'paragraph',
                  text: 'Hand signals and audible signals are used to direct crane operators when direct communication is not possible. Only one person — the designated signal person — gives signals to the operator. All workers must stay clear of suspended loads. Barricades are installed around the lift zone.',
                },
              ],
            },
            {
              id: 'elec-ch02-s4',
              title: '2.4 Organizing Work — Plans, Materials, and Site Preparation',
              content: [
                {
                  type: 'paragraph',
                  text: 'Efficient work organization is essential to completing electrical installations on time and on budget. At journeyperson level, construction electricians are expected to interpret drawings, plan their work sequence, organize materials, prepare the worksite, and finalize documentation — all with minimal supervision.',
                },
                {
                  type: 'infoBox',
                  title: 'Types of Electrical Drawings',
                  items: [
                    'Single-line diagrams — simplified representation showing the power flow through a system with one line representing all phases',
                    'Schematic diagrams — show all individual conductors and components; used for control circuits',
                    'Wiring diagrams — show physical wire connections between components',
                    'Panel schedules — list all branch and feeder circuits in a distribution panel',
                    'Site plans and floor plans — show equipment locations and raceway routing',
                    'Riser diagrams — vertical cross-sections showing the electrical distribution from service entrance to floors',
                    'Shop drawings — manufacturer-specific layout of equipment (MCCs, switchboards)',
                    'As-built drawings — final, revised drawings that reflect the actual installed condition',
                    'BIM (Building Information Modelling) — 3D digital model of the building with all systems coordinated',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'Before work begins, the electrician confirms: materials and equipment are on site and conform to specifications; the work sequence has been coordinated with other trades (plumbers, pipefitters, HVAC, structural); the worksite is prepared (temporary power, access, layout markings, and permits are in place); and any required permits (electrical permit, confined space entry permit) have been issued by the AHJ.',
                },
                {
                  type: 'infoBox',
                  title: 'Required Documentation at Project Closeout',
                  items: [
                    'As-built drawings — updated to show final installation routing, conduit fill, and circuit identification',
                    'Panel schedules — completed and labelled, accurate directory installed in panel',
                    'Inspection certificates — electrical inspection approval from the AHJ',
                    'Test and commissioning reports — insulation resistance tests, functional tests, power quality reports',
                    'O&M manuals — operation and maintenance documentation for installed equipment',
                    'Warranty cards — equipment warranties registered with manufacturers',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch02-s5',
              title: '2.5 Fabricating and Installing Support Components',
              content: [
                {
                  type: 'paragraph',
                  text: 'Electrical raceways, panels, and equipment must be properly supported according to the CEC, structural engineer\'s requirements, and manufacturers\' specifications. Support components include brackets, hangers, fasteners, and seismic restraint systems.',
                },
                {
                  type: 'infoBox',
                  title: 'Types of Support Hardware',
                  items: [
                    'Channel (strut) — slotted metal channel (Unistrut® and equivalents) used to build custom support frameworks',
                    'Brackets — channel, angle, T, L, floor, and ceiling types',
                    'Hangers — trapeze hangers, pipe clamps, beam clamps',
                    'Fasteners — spring nuts, bolts, screws, concrete anchors, wedge anchors',
                    'Seismic restraint systems — chains, cables, rods, galvanized cable with thimbles and clamps; required by the National Building Code (NBC) in seismic zones',
                  ],
                },
                {
                  type: 'keyTerm',
                  term: 'Seismic Restraint',
                  definition: 'A bracing system designed to prevent electrical equipment and raceways from falling during an earthquake. Required in seismic zones per the NBC. Seismic restraints are engineered systems — the type and spacing must conform to the structural engineer\'s specifications.',
                },
                {
                  type: 'paragraph',
                  text: 'Support structures are fabricated from steel, aluminum, or wood depending on the environment. Fasteners are selected to match the substrate (e.g., concrete anchors for concrete, wood screws for wood, beam clamps for steel). All supports must follow building lines and be installed square, level, and plumb.',
                },
              ],
            },
          ],
          practiceQuestions:  [],
        },

        // ─────────────────────────────────────────────────────────
        // CHAPTER 3 — Commissioning, Decommissioning & Communication (MWA A-5, A-6)
        // ─────────────────────────────────────────────────────────
        {
          id: 'elec-ch-03',
          number: 3,
          title: 'Commissioning, Decommissioning & Communication',
          subtitle: 'MWA A-5 · Commissioning/Decommissioning (14% of MWA A) · A-6 · Communication',
          isFree: false,
          estimatedMinutes: 40,
          sections: [
            {
              id: 'elec-ch03-s1',
              title: '3.1 Startup and Shutdown Procedures',
              content: [
                {
                  type: 'paragraph',
                  text: 'Before energizing any electrical system, the construction electrician must confirm the installation is complete, correct, safe, and documented. Startup is a systematic process — energizing out of sequence can damage equipment or create dangerous fault conditions.',
                },
                {
                  type: 'infoBox',
                  title: 'Pre-Energization Checklist',
                  items: [
                    'Verify as-built drawings match field wiring',
                    'Confirm insulation resistance tests have been completed and documented',
                    'Confirm connections are terminated and bolts torqued to manufacturers\' specs',
                    'Inspect and remove all shipping materials, tools, jumpers, gravity pins, blocking devices',
                    'Verify phase identification and phase rotation (especially critical for motors)',
                    'Test cables and conductors for ground faults and continuity',
                    'Verify system peripherals (detection systems, alarms, status systems) are functional',
                    'Notify all personnel and clear the area before energization',
                    'Install temporary protective grounds and remove them in the correct sequence',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'Shutdown procedures follow the reverse sequence of startup. Equipment is de-energized in the specified order, locked out and tagged out, and temporary protective grounds are applied. The sequence protects both equipment and personnel from voltage spikes caused by abrupt de-energization of inductive loads.',
                },
              ],
            },
            {
              id: 'elec-ch03-s2',
              title: '3.2 Commissioning and Decommissioning Systems',
              content: [
                {
                  type: 'paragraph',
                  text: 'Commissioning is the systematic process of verifying that an installed system performs according to design intent. It goes beyond startup — it includes measuring, adjusting, testing, and documenting every system function. Commissioning may be witnessed by the AHJ, the engineer, and the owner.',
                },
                {
                  type: 'infoBox',
                  title: 'Commissioning Tests Performed by Electricians',
                  items: [
                    'Insulation resistance testing (megger test) — baseline IR value recorded for future comparison',
                    'Continuity and phase identification',
                    'Voltage and current measurements at full load',
                    'Phase rotation verification',
                    'Protection relay setting verification (trip settings)',
                    'Ground resistance testing (ground loop impedance)',
                    'High-potential (hi-pot) test on HV cables',
                    'Functional testing of all protection systems, alarms, and interlocks',
                    'Power quality analysis (harmonics, power factor, voltage regulation)',
                  ],
                },
                {
                  type: 'keyTerm',
                  term: 'Decommissioning',
                  definition: 'The systematic de-energization, isolation, and preparation of electrical equipment for removal or long-term storage. All energy sources are identified and placed in a zero-energy state, other trades are notified of disconnected services, and documentation is updated.',
                },
              ],
            },
            {
              id: 'elec-ch03-s3',
              title: '3.3 Communication and Mentoring in the Trade',
              content: [
                {
                  type: 'paragraph',
                  text: 'Effective communication is a core competency for construction electricians. Electricians regularly interact with co-workers, supervisors, engineers, inspectors, owners, architects, and other trades. Clear communication prevents errors, resolves conflicts, and ensures the work meets code and design requirements.',
                },
                {
                  type: 'paragraph',
                  text: 'Mentoring apprentices is a professional responsibility at the journeyperson level. Effective mentoring follows a structured approach: identify the learning objective, link the lesson to other tasks, demonstrate the skill, set up safe practice conditions, observe and assess the apprentice\'s performance, and provide specific, supportive feedback. Apprentices must be evaluated fairly, without discrimination or harassment, under the Human Rights Act.',
                },
                {
                  type: 'infoBox',
                  title: 'Nine Essential Skills in the Trade',
                  items: [
                    'Reading — CEC, standards, specifications, O&M manuals',
                    'Document use — plans, schematics, panel schedules, BIM drawings',
                    'Writing — as-built notes, incident reports, maintenance logs, labelling',
                    'Oral communication — trade coordination, code discussions, safety meetings',
                    'Numeracy — load calculations, conduit fill, voltage drop, wire sizing',
                    'Thinking skills — troubleshooting, work sequencing, routing decisions',
                    'Working with others — team coordination, conflict resolution',
                    'Digital technology — multimeters, thermal cameras, BIM software, PLCs',
                    'Continuous learning — code updates, new technology, upgrading training',
                  ],
                },
              ],
            },
          ],
          practiceQuestions:  [],
        },
      ],
    },

    // ============================================================
    // PART 2 — GENERATING, DISTRIBUTION AND SERVICE SYSTEMS
    // MWA B: Installs, Services and Maintains Generating, Distribution
    //        and Service Systems (26%)
    // Tasks: B-7 Services/Metering (14%), B-8 Protection (15%),
    //        B-9 Distribution (15%), B-10 Power Conditioning/UPS (7%),
    //        B-11 Bonding/Grounding (15%), B-12 Generation (8%),
    //        B-13 Renewable Energy (8%), B-14 High Voltage (6%),
    //        B-15 Transformers (12%)
    // ============================================================
    {
      id: 'elec-part-2',
      number: 2,
      title: 'Generating, Distribution, and Service Systems',
      description: 'Consumer services, protection devices, distribution equipment, grounding and bonding, power generation, high-voltage systems, and transformers — the backbone of every electrical installation.',
      chapters: [

        // ─────────────────────────────────────────────────────────
        // CHAPTER 4 — Consumer Services and Metering (MWA B-7)
        // ─────────────────────────────────────────────────────────
        {
          id: 'elec-ch-04',
          number: 4,
          title: 'Consumer/Supply Services and Metering',
          subtitle: 'MWA B-7 · Consumer/Supply Services and Metering Equipment (14% of MWA B)',
          isFree: false,
          estimatedMinutes: 55,
          sections: [
            {
              id: 'elec-ch04-s1',
              title: '4.1 Single-Phase Services',
              content: [
                {
                  type: 'paragraph',
                  text: 'A consumer/supply service is the electrical connection between the utility distribution system and the customer\'s premises. The construction electrician is responsible for installing the service entrance equipment on the customer\'s side of the utility\'s point of demarcation.',
                },
                {
                  type: 'keyTerm',
                  term: 'Single-Phase Edison Three-Wire System (120/240V)',
                  definition: 'The standard residential and light commercial service in Canada. The utility transformer provides two 120V legs (L1 and L2) that are 180° out of phase with a grounded neutral (N) between them. L1-to-N = 120V; L2-to-N = 120V; L1-to-L2 = 240V.',
                },
                {
                  type: 'infoBox',
                  title: 'Service Components',
                  items: [
                    'Point of attachment — the first point of support on the building for service conductors',
                    'Service mast — a rigid conduit riser that elevates the point of attachment to meet CEC clearance requirements',
                    'Service entrance conductors — connect the point of attachment to the service equipment (3-wire for single-phase)',
                    'Meter socket — utility-supplied or owner-supplied socket where the kilowatt-hour meter is plugged in',
                    'Main disconnecting means — the first overcurrent protection device inside the building (main breaker or main fuse)',
                    'Service panel / load centre — the distribution panel for all branch circuits',
                    'Grounding electrode system — connects the service neutral to ground (ground rods, plates, water pipe, structural steel, concrete encased electrode)',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'CEC Clearance Requirements for Overhead Services',
                  items: [
                    'Above finished grade: minimum 3.0 m over driveways not accessible to trucks, 5.0 m over driveways accessible to trucks',
                    'Above rooftops: minimum 900 mm above the roof surface (with exceptions)',
                    'Point of attachment height: minimum 3.0 m above grade',
                    'Horizontal clearance from windows/doors: minimum 900 mm',
                    'Underground services: minimum burial depth and conduit cover requirements per CEC Table 53',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'When calculating service conductor size: the load is calculated per CEC Section 8 (demand factors apply). The neutral conductor may be reduced (but not below 70% of the phase conductor size for services up to 200A). Antioxidant compound must be applied to all aluminum conductor connections.',
                },
              ],
            },
            {
              id: 'elec-ch04-s2',
              title: '4.2 Three-Phase Services',
              content: [
                {
                  type: 'paragraph',
                  text: 'Three-phase services are used for commercial, institutional, and industrial buildings that have significant motor loads or require balanced, high-capacity power distribution.',
                },
                {
                  type: 'infoBox',
                  title: 'Common Three-Phase Service Configurations',
                  items: [
                    '120/208V wye (Y) — most common commercial service; all phases are 120V to neutral, 208V phase-to-phase',
                    '347/600V wye (Y) — standard industrial service in Canada; 347V to neutral, 600V phase-to-phase',
                    '240V delta (Δ) — used for some industrial motor loads; no neutral on the delta winding',
                    '120/240V high-leg delta — provides 120V single-phase for lighting and 240V three-phase for motors; the "high leg" (B phase) is approximately 208V to neutral — must be identified with orange marking',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'Three-phase conductors are colour-coded per CEC Rule 4-032: at 120/208V and 120/240V systems, L1=red, L2=black, L3=blue, N=white; at 347/600V systems, L1=red, L2=black, L3=blue, N=white (some jurisdictions use different colours — confirm with local AHJ). The grounded neutral is connected to the grounding electrode system at the service entrance only.',
                },
                {
                  type: 'keyTerm',
                  term: 'Current Transformer (CT) and Voltage Transformer (VT)',
                  definition: 'Instrument transformers used for metering and protection on large services where it is impractical to pass the full load current through the meter. The CT steps down the line current (e.g., 1000A : 5A). The VT steps down the line voltage. The meter reads the stepped-down values and the billing computer multiplies by the transformer ratios.',
                },
              ],
            },
            {
              id: 'elec-ch04-s3',
              title: '4.3 Grounding and Bonding at the Service Entrance',
              content: [
                {
                  type: 'paragraph',
                  text: 'At the service entrance, two distinct but related systems must be correctly installed: the grounding system (connecting the system neutral to earth) and the bonding system (connecting all non-current-carrying metal parts together and to the grounded conductor).',
                },
                {
                  type: 'keyTerm',
                  term: 'System Grounding',
                  definition: 'Intentionally connecting the service neutral conductor to the earth at the point of service entrance using grounding electrodes. This establishes a reference voltage (0V) for the neutral and limits the voltage that the system can reach above ground under fault conditions.',
                },
                {
                  type: 'keyTerm',
                  term: 'Equipment Bonding',
                  definition: 'Connecting all non-current-carrying metallic parts of the electrical system (conduit, enclosures, equipment frames) together and to the grounded service conductor to create a low-impedance fault return path. Bonding ensures fault current flows back through the circuit — not through people — and trips the overcurrent device.',
                },
                {
                  type: 'infoBox',
                  title: 'Grounding Electrodes (CEC Section 10)',
                  items: [
                    'Ground rods — minimum 2.4 m long, copper-clad steel; driven to full length or two rods if resistance > 25Ω',
                    'Ground plates — minimum 0.093 m² of surface area buried at least 600 mm deep',
                    'Buried copper conductor — minimum #4 AWG bare, at least 7.5 m long',
                    'Metallic water piping — minimum 3 m of underground metallic piping (supplemental electrode also required)',
                    'Concrete-encased electrode (Ufer ground) — 6 m or more of rebar or copper conductor in the footing',
                    'Structural steel — electrically continuous structural metal frame of the building',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'Non-electrical metallic piping and structures (gas lines, water lines, metallic building structures) must be bonded to the electrical system at the service entrance per CEC Rule 10-406. This prevents dangerous voltage differences between metallic systems.',
                },
              ],
            },
          ],
          practiceQuestions:  [],
        },

        // ─────────────────────────────────────────────────────────
        // CHAPTER 5 — Protection Devices and Power Distribution (MWA B-8, B-9, B-10)
        // ─────────────────────────────────────────────────────────
        {
          id: 'elec-ch-05',
          number: 5,
          title: 'Protection Devices and Power Distribution',
          subtitle: 'MWA B-8 Protection (15%) · B-9 Distribution (15%) · B-10 Power Conditioning/UPS (7%)',
          isFree: false,
          estimatedMinutes: 60,
          sections: [
            {
              id: 'elec-ch05-s1',
              title: '5.1 Overcurrent Protection Devices',
              content: [
                {
                  type: 'paragraph',
                  text: 'Overcurrent protection devices (OCPDs) protect conductors and equipment against excessive current caused by overloads and short circuits. Every ungrounded (phase) conductor must be protected by an OCPD rated no higher than the conductor\'s ampacity (with some exceptions for motors).',
                },
                {
                  type: 'infoBox',
                  title: 'Types of Overcurrent Protection Devices',
                  items: [
                    'Fuses — one-time devices that melt to interrupt fault current; fast-acting or time-delay types; Classes H, J, K, L, T, etc.',
                    'Moulded-case circuit breakers (MCCBs) — resettable; magnetic trip (instantaneous) for short circuits, thermal trip (time-delay) for overloads',
                    'Miniature circuit breakers (MCBs) — standard residential/light commercial breakers',
                    'Electronic trip circuit breakers — adjustable trip settings (long-time, short-time, instantaneous, ground fault) for precise coordination',
                    'Current-limiting fuses — interrupt fault current so fast they limit the peak let-through current; protect downstream equipment from high fault energy',
                    'Relay protection — protective relays combined with current transformers and contactors/breakers; used on medium and high-voltage systems',
                  ],
                },
                {
                  type: 'keyTerm',
                  term: 'Coordination Study',
                  definition: 'An engineering analysis of all OCPDs in a distribution system to ensure that only the device closest to a fault opens — minimizing the outage to the smallest possible area. Also called selective coordination.',
                },
                {
                  type: 'paragraph',
                  text: 'Trip settings must be set according to the load requirements, the coordination study results, and CEC requirements. After any modification, panel and feeder circuit directories must be updated and labelled.',
                },
              ],
            },
            {
              id: 'elec-ch05-s2',
              title: '5.2 Ground Fault, Arc Fault, and Surge Protection',
              content: [
                {
                  type: 'keyTerm',
                  term: 'GFCI (Ground Fault Circuit Interrupter)',
                  definition: 'Detects a ground fault current as small as 5mA (imbalance between the hot and neutral conductors) and trips within 1/40th of a second — fast enough to prevent electrocution. Required by the CEC in wet or damp locations (bathrooms, kitchens, garages, outdoors, construction sites).',
                },
                {
                  type: 'keyTerm',
                  term: 'AFCI (Arc Fault Circuit Interrupter)',
                  definition: 'Detects the waveform signature of arcing faults — a leading cause of electrical fires — and disconnects the circuit. Combination-type AFCIs protect against both series and parallel arc faults. Required by the CEC in bedrooms and other residential locations.',
                },
                {
                  type: 'infoBox',
                  title: 'Surge Protection Devices (SPDs) — Types',
                  items: [
                    'MOV (Metal Oxide Varistor) — most common; clamps transient voltages by becoming low-resistance when voltage exceeds a threshold',
                    'Zener diodes — fast-acting semiconductor clamps used in electronic equipment protection',
                    'Thyristors (TVS) — transient voltage suppression devices used in data and signal circuits',
                    'Service entrance SPD — Type 1 (installed before the main breaker) or Type 2 (after main breaker) provides whole-building protection',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch05-s3',
              title: '5.3 Power Distribution Equipment',
              content: [
                {
                  type: 'paragraph',
                  text: 'Power distribution equipment receives power from the service entrance and distributes it to various loads through feeder and branch circuits. All distribution equipment must be selected for the correct voltage, current rating, fault current rating, and enclosure type.',
                },
                {
                  type: 'infoBox',
                  title: 'Types of Distribution Equipment',
                  items: [
                    'Panels and sub-panels — distribute power to branch circuits; identified by a main breaker or main lugs',
                    'Switchboards — large, floor-mounted assemblies with bolted and draw-out sections; used for large commercial/industrial main services',
                    'Power distribution centres (PDCs) — factory-assembled distribution systems',
                    'Motor control centres (MCCs) — factory-assembled enclosures containing motor starters, disconnects, and PLCs for multi-motor systems',
                    'Transfer switches — automatically or manually switch between normal and emergency/standby power sources (ATS = Automatic Transfer Switch)',
                    'Busbars — low-impedance conductors that distribute current to multiple circuits within an enclosure',
                    'CTs and VTs (instrument transformers) — for metering on large distribution equipment',
                  ],
                },
                {
                  type: 'keyTerm',
                  term: 'Enclosure NEMA/CSA Type Designation',
                  definition: 'A standardized classification of electrical enclosures by their protection level. Type 1 = general-purpose indoor; Type 3R = outdoor rainproof; Type 4 = watertight; Type 4X = corrosion-resistant watertight; Type 12 = industrial dust-tight; Type 7 = hazardous location. CSA designations follow NEMA as a basis.',
                },
              ],
            },
            {
              id: 'elec-ch05-s4',
              title: '5.4 Power Conditioning, UPS, and Surge Suppression Systems',
              content: [
                {
                  type: 'paragraph',
                  text: 'Power quality problems — harmonics, poor power factor, transient voltages, and voltage sags — can damage sensitive loads and reduce system efficiency. Power conditioning equipment corrects these problems to deliver clean, stable power.',
                },
                {
                  type: 'infoBox',
                  title: 'Power Quality Problems and Solutions',
                  items: [
                    'Harmonics — caused by non-linear loads (VFDs, UPS, electronic ballasts); corrected with passive/active harmonic filters, K-rated transformers',
                    'Poor power factor — caused by inductive loads (motors, transformers); corrected with power factor correction (PFC) capacitor banks or synchronous condensers',
                    'Transient voltages — lightning surges, switching transients; suppressed with SPDs (MOVs, TVS diodes)',
                    'Voltage sags/swells — corrected by automatic voltage regulators (AVRs) or UPS systems',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Types of UPS Systems',
                  items: [
                    'Offline (standby) UPS — normally passes utility power through; switches to battery on power failure (slight transfer time)',
                    'Online (double-conversion) UPS — continuously converts AC-to-DC-to-AC; provides perfect isolation from utility power quality problems; zero transfer time',
                    'Line-interactive UPS — AVR corrects voltage sags without switching to battery; fast transfer on total failure',
                    'Maintenance bypass — allows UPS servicing without interrupting the critical load',
                    'Static bypass — automatically bypasses the UPS inverter if the inverter fails; maintains power to the load',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'UPS systems contain batteries, capacitors, and multiple energy sources — hazards unique to UPS work. The DC bus may remain energized even after the AC input is disconnected. Always confirm all energy sources are identified and isolated before working inside a UPS.',
                },
              ],
            },
          ],
          practiceQuestions:  [],
        },

        // ─────────────────────────────────────────────────────────
        // CHAPTER 6 — Bonding, Grounding, Power Generation & High Voltage (MWA B-11 to B-15)
        // ─────────────────────────────────────────────────────────
        {
          id: 'elec-ch-06',
          number: 6,
          title: 'Bonding, Grounding, Generation, High Voltage, and Transformers',
          subtitle: 'MWA B-11 Bonding/Grounding (15%) · B-12 Generation (8%) · B-13 Renewable (8%) · B-14 High Voltage (6%) · B-15 Transformers (12%)',
          isFree: false,
          estimatedMinutes: 70,
          sections: [
            {
              id: 'elec-ch06-s1',
              title: '6.1 Bonding and Grounding Systems (Task B-11)',
              content: [
                {
                  type: 'paragraph',
                  text: 'A properly designed bonding and grounding system performs two critical functions: (1) it establishes a stable voltage reference, and (2) it provides a low-impedance path for fault current to return to the source so that the OCPD trips. These functions require both a grounding system (earth connection) and a bonding system (metallic continuity).',
                },
                {
                  type: 'infoBox',
                  title: 'Ground Fault Protection Systems (CEC Section 14)',
                  items: [
                    'Ground fault protection (GFP) on services over 1000A — required by the CEC for solidly grounded systems over 150V to ground',
                    'Residual current device (RCD) systems — monitor current imbalance in all conductors, including the neutral; used on high-impedance grounded systems',
                    'Ground fault detection (GFD) — used on ungrounded or high-impedance grounded systems to detect a first fault without tripping; allows controlled maintenance shutdown',
                  ],
                },
                {
                  type: 'keyTerm',
                  term: 'Lightning Protection System',
                  definition: 'A system of air terminals (lightning rods), conductors, and ground rods designed to safely conduct lightning strikes to ground. Lightning protection is separate from the electrical grounding system but must be bonded to it. Installed per CSA B72 and CEC Section 10.',
                },
              ],
            },
            {
              id: 'elec-ch06-s2',
              title: '6.2 Power Generation and Conversion Systems (Task B-12)',
              content: [
                {
                  type: 'paragraph',
                  text: 'Emergency and standby generators provide backup power for life safety systems, critical loads, and continuity of operations. Construction electricians install and maintain both AC generating systems (diesel and natural gas generator sets) and DC generating and conversion systems.',
                },
                {
                  type: 'infoBox',
                  title: 'AC Generator (Genset) Components',
                  items: [
                    'Prime mover — diesel engine, natural gas engine, or turbine',
                    'Alternator — produces AC voltage; the rotor creates the rotating magnetic field',
                    'Automatic Voltage Regulator (AVR) — maintains constant output voltage as load varies',
                    'Governor — maintains constant engine speed (and therefore frequency) as load varies',
                    'Transfer switch — connects the load to the generator when utility power fails',
                    'Paralleling gear — allows two or more generators to operate simultaneously, sharing load',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'DC generating systems include rectifiers (AC-to-DC converters) used for battery charging, DC motor drives, and electrochemical processes. They include uncontrolled rectifiers (diodes), controlled rectifiers (thyristors/SCRs), and switch-mode power supplies (SMPS).',
                },
              ],
            },
            {
              id: 'elec-ch06-s3',
              title: '6.3 Renewable Energy Generating and Storage Systems (Task B-13)',
              content: [
                {
                  type: 'paragraph',
                  text: 'Renewable energy systems are a growing area of employment for construction electricians. Solar photovoltaic (PV), wind, hydrokinetic, and geothermal systems all require specialized electrical knowledge for safe installation and maintenance.',
                },
                {
                  type: 'infoBox',
                  title: 'Types of Renewable Energy Systems',
                  items: [
                    'Solar photovoltaic (PV) — converts sunlight to DC electricity; panels wired in strings; inverter converts DC to AC',
                    'Wind turbines — converts wind kinetic energy to AC electricity; step-up transformer for grid connection',
                    'Hydrokinetic turbines — uses flow of water (river, tidal) to drive generators',
                    'Geothermal — uses heat from the earth; electrical work involves heat pump connections',
                    'Fuel cells — electrochemical conversion of hydrogen to electricity',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Connection Types: Grid-Dependent vs. Grid-Independent',
                  items: [
                    'Grid-dependent (grid-tied) — connected to the utility grid; inverter must have anti-islanding capability (shuts down during grid outage to prevent energizing downed lines)',
                    'Grid-independent (stand-alone / off-grid) — not connected to utility; requires energy storage (battery bank) and a charge controller',
                    'Grid-tied with backup — includes battery storage and a critical loads panel; maintains power to essential loads during grid outage',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Energy Storage Systems',
                  items: [
                    'Battery banks — lithium-ion, lead-acid, flow batteries; require BMS (Battery Management System)',
                    'Pumped hydro — large-scale; pumps water uphill to store energy, releases it to generate power',
                    'Compressed air energy storage (CAES) — compresses air in caverns; releases to drive turbines',
                    'Key components: transfer switches, inverters, isolation disconnects, controls, battery chargers',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch06-s4',
              title: '6.4 High-Voltage Systems (Task B-14)',
              content: [
                {
                  type: 'paragraph',
                  text: 'High-voltage work in Canada is defined as systems over 750V AC (or 1060V DC) per the CEC. HV construction electricians install and maintain switchyards, substations, electrical vaults, HV MCC units, and solar arrays. Additional certifications, specific PPE, and strict procedures are required.',
                },
                {
                  type: 'infoBox',
                  title: 'High-Voltage Equipment',
                  items: [
                    'Distribution equipment — HV switchgear, air-insulated switchgear (AIS), gas-insulated switchgear (GIS)',
                    'Contactors, motor starters — for HV motors (over 1000V)',
                    'HV fuses — expulsion fuses, current-limiting fuses, dropout cutouts',
                    'Disconnects and isolating switches — for de-energizing sections during maintenance',
                    'Reclosers — automatic circuit breakers used on distribution lines; re-close after a momentary fault',
                    'VTs and CTs — instrument transformers for metering and protection',
                    'Station ground grid — grid of buried copper conductors that limits step and touch voltages in a substation',
                  ],
                },
                {
                  type: 'keyTerm',
                  term: 'Step Voltage and Touch Voltage',
                  definition: 'During a ground fault in a substation, current flows through the earth, creating voltage gradients. Step voltage is the potential difference between two points on the ground one pace apart (dangerous to walking personnel). Touch voltage is the potential difference between a grounded structure and a point on the ground where a person stands. Station ground grids are designed to limit both.',
                },
                {
                  type: 'infoBox',
                  title: 'HV Cable Terminations and Testing',
                  items: [
                    'Potheads — sealed cable terminations that prevent moisture ingress into the cable insulation',
                    'Stress relief terminations (heat shrink and cold shrink) — manage the electric field stress at the cable end where the shield is cut back',
                    'High-potential (hi-pot) test — applies a DC or AC test voltage above normal operating voltage to verify insulation integrity; results documented',
                    'Acceptance tests — polarization index, ground grid resistance, phasing test, timing test, current injection',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch06-s5',
              title: '6.5 Transformers (Task B-15)',
              content: [
                {
                  type: 'paragraph',
                  text: 'Transformers change voltage and current levels using mutual induction. They are part of the distribution system, not a load. Construction electricians install extra-low-voltage, low-voltage single-phase, low-voltage three-phase, and high-voltage transformers.',
                },
                {
                  type: 'infoBox',
                  title: 'Transformer Voltage Classifications',
                  items: [
                    'Extra-low-voltage (ELV) — secondary ≤ 30V AC or 60V DC; used for doorbells, thermostats, control circuits, fire alarm initiating circuits',
                    'Low-voltage single-phase — primary and secondary both ≤ 750V; residential 240/120V, isolation transformers, buck-boost',
                    'Low-voltage three-phase — primary and secondary both ≤ 750V; step-down from 600V to 208V for building distribution; delta-wye and wye-wye configurations',
                    'High-voltage transformers — primary or secondary > 750V; pad-mount, vault-mount, oil-filled, dry-type',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Transformer Key Concepts',
                  items: [
                    'Turns ratio — the ratio of primary turns (N₁) to secondary turns (N₂); V₁/V₂ = N₁/N₂; I₁/I₂ = N₂/N₁',
                    'kVA rating — transformer capacity in kilovolt-amps; does not depend on power factor',
                    'Voltage regulation — percentage change in secondary voltage from no-load to full-load',
                    'Transformer connections — delta (Δ): no neutral available; wye (Y): neutral available; delta-wye: most common step-down; wye-delta: least common',
                    'Tap changer — adjusts primary turns ratio to compensate for voltage variations; ±2.5% and ±5% taps are common',
                    'Overcurrent protection — transformer primary and secondary both require protection per CEC Table 26',
                    'K-rated transformers — designed to handle harmonic currents from non-linear loads (VFDs, computers)',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'When installing transformers, the electrician must: calculate conductor and overcurrent protection sizes for both primary and secondary circuits; determine the physical mounting location ensuring CEC required clearances; connect primary and secondary leads in the correct phase order; verify polarity (additive or subtractive); and perform insulation resistance tests on the windings before energization.',
                },
              ],
            },
          ],
          practiceQuestions:  [],
        },
      ],
    },

    // ============================================================
    // PART 3 — WIRING SYSTEMS
    // MWA C: Installs, Services and Maintains Wiring Systems (34%)
    // Tasks: C-16 Raceways/Conductors (33%), C-17 Branch Circuitry (30%),
    //        C-18 HVAC (10%), C-19 Electric Heating (14%),
    //        C-20 Exit/Emergency Lighting (11%), C-21 Cathodic Protection (2%)
    // ============================================================
    {
      id: 'elec-part-3',
      number: 3,
      title: 'Wiring Systems',
      description: 'The largest section of the Red Seal exam — raceways, conductors, cables, branch circuitry, lighting, HVAC connections, electric heating, and emergency lighting.',
      chapters: [

        // ─────────────────────────────────────────────────────────
        // CHAPTER 7 — Raceways, Conductors, Cables, and Enclosures (MWA C-16)
        // ─────────────────────────────────────────────────────────
        {
          id: 'elec-ch-07',
          number: 7,
          title: 'Raceways, Conductors, Cables, and Enclosures',
          subtitle: 'MWA C-16 · Raceways, Conductors, Cables and Enclosures (33% of MWA C)',
          isFree: false,
          estimatedMinutes: 65,
          sections: [
            {
              id: 'elec-ch07-s1',
              title: '7.1 Conductors and Cables',
              content: [
                {
                  type: 'paragraph',
                  text: 'Conductors are the current-carrying elements of an electrical system. Selection of the correct conductor type and size is one of the most fundamental skills in the trade — it is governed by the CEC and involves balancing ampacity, voltage drop, insulation rating, and physical environment.',
                },
                {
                  type: 'infoBox',
                  title: 'Conductor Materials',
                  items: [
                    'Copper — most common; excellent conductivity, easy to terminate, no antioxidant required (but used in some applications)',
                    'Aluminum — lighter and less expensive than copper; requires antioxidant compound at all connections; rated conductor size is typically 2 AWG sizes larger than equivalent copper',
                    'Copper-clad aluminum (CCA) — aluminum core with copper exterior; not permitted in all applications',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Common Cable Types (CEC Appendix B)',
                  items: [
                    'NMD90 (Loomex®) — non-metallic sheathed cable for indoor residential dry locations; rated 90°C',
                    'AC90 (BX) — armoured cable with interlocked steel armour; rated 90°C; used in commercial and industrial where the armour provides mechanical protection and is a valid ground path',
                    'TECK90 — thermoplastic-insulated, copper-shielded, PVC-jacketed cable; rated 90°C; direct burial and tray rated',
                    'Mineral insulated (MI) cable — copper conductors in magnesium oxide insulation, copper sheath; rated up to 250°C; used in fire alarm circuits and high-temperature environments',
                    'RW90 XLPE — cross-linked polyethylene insulation; rated 90°C; used in raceways and direct burial',
                    'URD cable — underground residential distribution cable; direct burial',
                    'Coaxial and data cables — covered under Section 60 and Section 12 of the CEC',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Conductor Sizing — Key CEC Rules',
                  items: [
                    'Ampacity — the maximum current a conductor can carry without exceeding its temperature rating; found in CEC Table 1, 2, or 3',
                    'Correction factors — ambient temperature above 30°C and more than 3 current-carrying conductors bundled together require derating',
                    'Voltage drop — CEC recommends maximum 3% for branch circuits, 5% for feeders + branch circuits combined (Rule 8-102)',
                    'Voltage drop formula: VD = (2 × L × R × I) / 1000 for single-phase; VD = (√3 × L × R × I) / 1000 for three-phase (where R is resistance per km from CEC tables)',
                    'Minimum conductor sizes — #14 AWG copper for branch circuits; #12 AWG for 20A circuits',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'Conductors must be installed without damage to insulation and without mechanical stress at terminations. Colour coding per CEC Rule 4-032: black and red (and blue for 3-phase) for ungrounded phase conductors; white for grounded (neutral) conductors; green or bare for equipment grounding conductors.',
                },
              ],
            },
            {
              id: 'elec-ch07-s2',
              title: '7.2 Conduit and Fittings',
              content: [
                {
                  type: 'paragraph',
                  text: 'Conduit systems protect conductors from physical damage and provide a raceway for conductor installation and future changes. The type of conduit selected depends on the environment, required mechanical protection, and whether the conduit can serve as the equipment grounding conductor.',
                },
                {
                  type: 'infoBox',
                  title: 'Types of Conduit',
                  items: [
                    'Rigid Metal Conduit (RMC/RSC) — hot-dipped galvanized steel; the strongest mechanical protection; approved for all locations including direct burial and concrete encasement',
                    'Intermediate Metal Conduit (IMC) — lighter wall than RMC; same fittings; same applications',
                    'Electrical Metallic Tubing (EMT) — thin-wall steel; not threaded; use set-screw or compression couplings; indoor and outdoor above ground; the most common conduit in commercial construction',
                    'Rigid Non-Metallic Conduit (RNMC/PVC) — non-conductive; corrosion-resistant; for underground and wet locations; cannot be used as EGC; grey = electrical (CEC-approved), not plumbing PVC',
                    'Flexible Metal Conduit (FMC / Greenfield) — interlocked steel strip; used for final connections to equipment (motors, light fixtures) where vibration or movement exists; maximum 1.8 m unless protected',
                    'Liquid-tight Flexible Metal Conduit (LFMC) — FMC with PVC jacket; for wet locations and outdoor equipment connections',
                    'Liquid-tight Flexible Non-Metallic Conduit (LFNMC) — for chemical-resistant, wet, or outdoor connections',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Conduit Fill Rules (CEC Appendix B, Tables)',
                  items: [
                    'One conductor — 53% of conduit cross-sectional area',
                    'Two conductors — 31% of conduit cross-sectional area',
                    'Three or more conductors — 40% of conduit cross-sectional area',
                    'Conductor fill is calculated using the outside diameter of the conductor (including insulation) from CEC tables',
                    'Jamming ratio — the ratio of conduit ID to conductor OD; if between 2.8 and 3.2, jamming can occur during pulling and a larger conduit should be considered',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'All conduit bends must be made with an approved bender to avoid kinking or flattening. Standard bends: 90° (stub-up), offset, saddle (3-bend saddle for single obstruction), back-to-back. The CEC limits the total number of bends between pull points: no more than 360° of total bends (equivalent to four 90° bends) between junction boxes or conduit bodies.',
                },
              ],
            },
            {
              id: 'elec-ch07-s3',
              title: '7.3 Wireways, Cable Trays, and Other Raceways',
              content: [
                {
                  type: 'infoBox',
                  title: 'Other Raceway Types',
                  items: [
                    'Cable tray — ladder, solid-bottom, ventilated trough, or channel type; supports cables without enclosing them; used in industrial plants and data centres',
                    'Wireways (gutters) — sheet metal or PVC channels with removable covers; used for splicing and distributing conductors',
                    'Surface metal raceways (Wiremold®) — flat rectangular channels surface-mounted on walls; for retrofits where in-wall work is not practical',
                    'Underfloor duct systems — cast in concrete slabs; for office buildings with frequent outlet changes',
                    'Busway (bus duct) — factory-assembled copper or aluminum busbars in an enclosure; used for high-current feeders in industrial applications; plug-in type allows taps at any point',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch07-s4',
              title: '7.4 Boxes and Enclosures',
              content: [
                {
                  type: 'paragraph',
                  text: 'Electrical boxes provide a code-required protected space for splices, device connections, and luminaire support. The CEC requires a box at every splice, connection, or device location, with no buried (concealed) splices outside of a box.',
                },
                {
                  type: 'infoBox',
                  title: 'Box Fill Calculations (CEC Rule 12-3034)',
                  items: [
                    'Each conductor that originates outside the box and terminates or is spliced = 1 count',
                    'Each conductor that runs through the box = 1 count',
                    'Luminaire stud, hickey, or fitting = 1 count',
                    'All ground wires combined = 1 count',
                    'Each strap holding one or more devices (switch, receptacle) = 1 count per device',
                    'Box fill volume required: Each conductor count × conductor volume per Table 12-1 (e.g., #12 AWG = 20.4 cm³; #14 AWG = 16.4 cm³)',
                  ],
                },
              ],
            },
          ],
          practiceQuestions:  [],
        },

        // ─────────────────────────────────────────────────────────
        // CHAPTER 8 — Branch Circuitry, Devices, and Lighting (MWA C-17)
        // ─────────────────────────────────────────────────────────
        {
          id: 'elec-ch-08',
          number: 8,
          title: 'Branch Circuitry, Devices, and Lighting Systems',
          subtitle: 'MWA C-17 · Branch Circuitry and Devices (30% of MWA C)',
          isFree: false,
          estimatedMinutes: 60,
          sections: [
            {
              id: 'elec-ch08-s1',
              title: '8.1 Luminaires and Lamps',
              content: [
                {
                  type: 'paragraph',
                  text: 'Luminaires (light fixtures) are selected based on the lighting level required (measured in lux), the environment (wet, damp, dry, hazardous), and energy efficiency requirements. The CEC requires luminaires to be listed and labelled for their intended location.',
                },
                {
                  type: 'infoBox',
                  title: 'Types of Luminaires',
                  items: [
                    'Recessed (pot lights) — installed into ceiling cavities; must be IC-rated (insulation contact) if insulation will cover them',
                    'Surface-mounted — attached directly to ceiling or wall',
                    'Pendant — hung from ceiling on stems, cables, or conduit',
                    'Wall-mounted (sconce)',
                    'Pole-mounted (lighting standards) — roadway, parking lot, and sports lighting',
                    'Track lighting — adjustable heads on an electrified track',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Lamp Technologies',
                  items: [
                    'LED (Light Emitting Diode) — most energy-efficient; long life; solid-state; no mercury; rapidly replacing all other technologies',
                    'Fluorescent — T5, T8, T12 tubes; requires ballast; contains mercury — must be disposed of as hazardous waste',
                    'HID (High Intensity Discharge) — Metal Halide, High-Pressure Sodium, Mercury Vapour; requires ballast and igniter; long warmup and restrike times',
                    'Incandescent — least efficient; being phased out',
                    'SSL (Solid-State Lighting) — broad category including LED',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch08-s2',
              title: '8.2 Wiring Devices',
              content: [
                {
                  type: 'infoBox',
                  title: 'Types of Wiring Devices',
                  items: [
                    'Receptacles (outlets) — standard 15A/125V (NEMA 5-15), 20A/125V (NEMA 5-20), 30A/250V dryer (NEMA 14-30), 50A/250V range (NEMA 14-50)',
                    'Switches — single-pole, 3-way (allows switching from two locations), 4-way (allows switching from three or more locations)',
                    'Dimmer switches — control lighting levels; must be rated for LED loads when used with LEDs',
                    'Disconnecting means — fused disconnects, non-fused disconnects, safety switches; required within sight of and accessible to motor and HVAC equipment',
                    'Relays and contactors — electrically operated switches for remote or automatic control of loads',
                    'Timers and sensors — time clocks, occupancy/vacancy sensors, photocells',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch08-s3',
              title: '8.3 Lighting Controls',
              content: [
                {
                  type: 'paragraph',
                  text: 'Energy management requirements in building codes increasingly mandate automatic lighting controls. Modern lighting control systems reduce energy consumption and qualify buildings for LEED certification.',
                },
                {
                  type: 'infoBox',
                  title: 'Lighting Control Technologies',
                  items: [
                    'Occupancy/vacancy sensors — turn lights on/off based on motion detection; PIR (passive infrared), ultrasonic, or dual-technology',
                    'Photocell (daylight sensor) — reduces artificial lighting when natural light is sufficient',
                    'Time clocks — programmed schedules for outdoor and after-hours lighting',
                    'Dimmer controls — reduce power to lamps; must be matched to lamp technology (LED-compatible dimmers)',
                    'Low-voltage switching — control relays centrally; 24V control wiring runs to switching points',
                    'Programmable lighting controllers — integrates all control functions; can be programmed for scenes and schedules',
                    'DALI (Digital Addressable Lighting Interface) — digital protocol allowing individual lamp addressing and dimming',
                    'Wireless controls — Zigbee, Z-Wave, DALI-2 wireless; no control wiring required',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch08-s4',
              title: '8.4 Lighting Standards, Airport Visual Aid Systems, and Traffic Signals',
              content: [
                {
                  type: 'paragraph',
                  text: 'Lighting standards (poles) for roadways, parking lots, and area lighting require special installation procedures. The pole base is pre-cast or poured concrete, the underground conduit system runs to a handhole in the pole, and the luminaire is wired and mounted at the top.',
                },
                {
                  type: 'paragraph',
                  text: 'Airport runway lighting (visual aid systems) is a specialized area involving constant current regulators (CCRs), series circuits (all lights in a runway circuit are connected in series), isolation transformers at each fixture, and specific ARCAL (Aircraft Radio Control of Aerodrome Lighting) control systems. These systems are tested per Transport Canada and ICAO requirements.',
                },
                {
                  type: 'paragraph',
                  text: 'Traffic signal systems include signal heads, vehicle sensors (inductive loops, cameras), pedestrian push buttons, traffic signal controllers, and communication modems. Signals are programmed and tested by the electrician in coordination with the municipality or transportation authority.',
                },
              ],
            },
          ],
          practiceQuestions:  [],
        },

        // ─────────────────────────────────────────────────────────
        // CHAPTER 9 — HVAC, Electric Heating, Emergency Lighting & Cathodic Protection (MWA C-18 to C-21)
        // ─────────────────────────────────────────────────────────
        {
          id: 'elec-ch-09',
          number: 9,
          title: 'HVAC, Electric Heating, Emergency Lighting, and Cathodic Protection',
          subtitle: 'MWA C-18 HVAC (10%) · C-19 Electric Heating (14%) · C-20 Exit/Emergency Lighting (11%) · C-21 Cathodic Protection (2%)',
          isFree: false,
          estimatedMinutes: 55,
          sections: [
            {
              id: 'elec-ch09-s1',
              title: '9.1 HVAC Electrical Connections and Controls (Task C-18)',
              content: [
                {
                  type: 'paragraph',
                  text: 'HVAC systems are installed by mechanical trades but electrically connected by construction electricians. The electrician installs the branch circuit wiring, disconnect means, overcurrent protection, and control wiring for all HVAC equipment.',
                },
                {
                  type: 'infoBox',
                  title: 'HVAC Electrical Requirements',
                  items: [
                    'Branch circuit sizing — based on the nameplate full-load amps (FLA) of the compressor, blower motor, and auxiliary heaters',
                    'Disconnect means — must be within sight of and readily accessible to the equipment (within 9 m, unless lockable)',
                    'Overcurrent protection — sized per the nameplate or CEC requirement for motor circuits',
                    'Control voltage — most HVAC systems use 24V AC control circuits (stepped down by an onboard transformer)',
                    'Verification — test for specified voltage, current, and rotation after connection',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'HVAC Control Components',
                  items: [
                    'Thermostat — temperature-sensing device that controls heating/cooling; 24V two-wire to five-wire connections',
                    'Pressure switches — high and low refrigerant pressure protection; shut down compressor on abnormal pressures',
                    'Temperature switches — freeze protection, duct high-temperature limit',
                    'Flow switches — confirm airflow before energizing electric heating elements',
                    'VFDs (Variable Frequency Drives) — control fan and pump speeds for energy savings',
                    'Contactors and relays — switch high-voltage loads from low-voltage control signals',
                    'Electrical interlocks — prevent simultaneous operation of conflicting equipment modes',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch09-s2',
              title: '9.2 Electric Heating Systems (Task C-19)',
              content: [
                {
                  type: 'paragraph',
                  text: 'Electric heating systems use resistance heating elements to convert electrical energy directly to heat. They are 100% efficient at the point of use but are generally more expensive to operate than gas or heat pumps. The CEC has specific wiring requirements for electric heaters because of the continuous load factor.',
                },
                {
                  type: 'infoBox',
                  title: 'Types of Electric Heating Systems',
                  items: [
                    'Baseboard heaters — convection heaters; most common in residential; 240V single-phase; minimum wire gauge #12 AWG',
                    'Unit heaters — forced-air heaters with fan; used in commercial and industrial',
                    'Radiant ceiling/wall panels — radiant heat; provides comfort without air movement',
                    'Floor heating cables — embedded in or under floor; low-power cables',
                    'Heat trace / freeze protection — cables wrapped around pipes to prevent freezing; thermostatically controlled',
                    'Duct heaters — electric resistance elements installed in HVAC ductwork; requires flow switch interlock',
                    'Induction heaters — industrial process heating',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'Electric heating loads are continuous — the CEC requires branch circuits for electric heaters to be sized at 125% of the heater nameplate rating. The heater must never exceed 80% of the branch circuit rating. A 1500W heater draws 1500W ÷ 240V = 6.25A continuously; the minimum circuit breaker is 6.25A × 1.25 = 7.8A → use a 15A breaker (next standard size).',
                },
              ],
            },
            {
              id: 'elec-ch09-s3',
              title: '9.3 Exit and Emergency Lighting (Task C-20)',
              content: [
                {
                  type: 'paragraph',
                  text: 'Exit and emergency lighting systems are life safety systems required by the National Building Code (NBC) and enforced by the AHJ. They must illuminate means of egress when normal lighting fails. Construction electricians install and maintain these systems.',
                },
                {
                  type: 'infoBox',
                  title: 'Emergency Lighting System Types',
                  items: [
                    'Self-contained unit — battery and charger built into the luminaire; tested by pressing the test button monthly; battery replaced every 4–5 years',
                    'Central battery system — a central battery bank powers all emergency luminaires; more reliable but more complex to install',
                    'Generator-powered — emergency luminaires on a dedicated circuit powered by the emergency generator; minimum 10-second transfer time per NBC',
                    'Exit signs — LED or fluorescent; must be continuously illuminated; battery backup required',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'Emergency lighting circuits must be on a dedicated circuit that is not normally subject to switching. The CEC requires the circuit to be identified with red conductors or red labels where it shares a conduit with other circuits. Testing: monthly functional test (30 seconds), annual full-load discharge test (90 minutes per ULC S524 and NBC).',
                },
              ],
            },
            {
              id: 'elec-ch09-s4',
              title: '9.4 Cathodic Protection Systems (Task C-21)',
              content: [
                {
                  type: 'paragraph',
                  text: 'Cathodic protection (CP) prevents corrosion of buried metal structures (pipelines, storage tanks, reinforcing steel) by making the structure the cathode of an electrochemical cell. Construction electricians install and service impressed current cathodic protection (ICCP) systems.',
                },
                {
                  type: 'keyTerm',
                  term: 'Impressed Current Cathodic Protection (ICCP)',
                  definition: 'Uses a DC power supply (rectifier) to force a protective current through the soil from an inert anode (graphite, platinum, mixed metal oxide) to the structure being protected. The current counters the natural electrochemical corrosion process. Used on pipelines, marine structures, and underground storage tanks.',
                },
              ],
            },
          ],
          practiceQuestions:  [],
        },
      ],
    },

    // ============================================================
    // PART 4 — MOTORS AND CONTROL SYSTEMS
    // MWA D: Installs, Services and Maintains Motors and Control Systems (18%)
    // Tasks: D-22 Motor Starters/Controls (35%), D-23 Drives (22%),
    //        D-24 Motors (28%), D-25 Automated Control Systems (13%)
    // ============================================================
    {
      id: 'elec-part-4',
      number: 4,
      title: 'Motors and Control Systems',
      description: 'Motor starters, drives, single-phase and three-phase motors, DC motors, PLCs, and automated control systems — critical knowledge for industrial and commercial electrical work.',
      chapters: [

        // ─────────────────────────────────────────────────────────
        // CHAPTER 10 — Motor Starters and Controls (MWA D-22)
        // ─────────────────────────────────────────────────────────
        {
          id: 'elec-ch-10',
          number: 10,
          title: 'Motor Starters and Controls',
          subtitle: 'MWA D-22 · Motor Starters and Controls (35% of MWA D)',
          isFree: false,
          estimatedMinutes: 60,
          sections: [
            {
              id: 'elec-ch10-s1',
              title: '10.1 Motor Circuit Components',
              content: [
                {
                  type: 'paragraph',
                  text: 'Every motor circuit requires: a branch circuit conductor, overcurrent protection, a disconnecting means, a motor controller (starter), and overload protection. Understanding the function and CEC requirements for each component is essential.',
                },
                {
                  type: 'infoBox',
                  title: 'Motor Circuit Components — Summary',
                  items: [
                    'Branch circuit conductors — sized to minimum 125% of motor FLA per CEC Rule 28-106',
                    'Branch circuit overcurrent protection (short circuit protection) — fuse or breaker; sized larger than overloads to allow motor inrush; CEC Table 29 gives maximum values',
                    'Disconnecting means — must be within sight of the motor and controller; lockable in the open (off) position',
                    'Motor controller (starter) — controls starting and stopping; may include reversing, reduced voltage, multi-speed',
                    'Overload protection — thermal or electronic overload relay; protects motor windings from sustained overcurrent; trips at 115–125% of FLA',
                  ],
                },
                {
                  type: 'keyTerm',
                  term: 'Full Load Amps (FLA)',
                  definition: 'The current drawn by the motor at its rated horsepower output, rated voltage, and rated frequency. Found on the motor nameplate. All motor circuit sizing is based on FLA.',
                },
                {
                  type: 'keyTerm',
                  term: 'Locked Rotor Current (LRC / Inrush Current)',
                  definition: 'The current drawn by a motor at the instant of starting, before the rotor begins to turn. Typically 6–8× FLA for squirrel cage induction motors. The branch circuit OCPD must withstand this inrush without tripping.',
                },
              ],
            },
            {
              id: 'elec-ch10-s2',
              title: '10.2 Across-the-Line Starters and Magnetic Starters',
              content: [
                {
                  type: 'paragraph',
                  text: 'A magnetic motor starter consists of a contactor (main power contacts) and an overload relay (OLR). The contactor is energized by the control circuit, which includes the start/stop pushbuttons, auxiliary contacts (for holding), and interlocks.',
                },
                {
                  type: 'infoBox',
                  title: 'Control Circuit Logic — Three-Wire Control (Maintained)',
                  items: [
                    'START pushbutton (NO) — momentarily closes to energize the contactor coil',
                    'STOP pushbutton (NC) — normally closed; opening de-energizes the coil',
                    'Holding (sealing) contact — auxiliary NO contact on the contactor that closes when the contactor energizes, creating a parallel path around the START button; maintains the coil energized after the START button is released',
                    'Overload relay (OL) contact — normally closed contact in series with the coil circuit; trips open on overload, de-energizing the contactor',
                    'Three-wire control provides low-voltage protection (LVP) — the motor does not automatically restart after a power failure because the holding contact opens when the contactor drops out',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Reduced Voltage Starting Methods',
                  items: [
                    'Star-delta (wye-delta) starting — motor starts in wye (reduces voltage to each winding by 1/√3); transitions to delta for full voltage running; reduces inrush to 33% but also reduces starting torque to 33%',
                    'Auto-transformer starting — uses a tapped transformer to apply 50–80% voltage at start; stepped up to full voltage after the motor accelerates',
                    'Soft starter — electronic device using SCRs to gradually ramp up voltage; smooth torque, no current spikes after the soft-start period; no speed control during running',
                    'Variable Frequency Drive (VFD) — see Chapter 11',
                    'Resistance starter — inserts resistance in the rotor circuit (wound rotor motors only); reduces inrush, improves starting torque',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch10-s3',
              title: '10.3 Motor Control Devices',
              content: [
                {
                  type: 'infoBox',
                  title: 'Motor Control Input Devices',
                  items: [
                    'Push buttons — maintained (latching) or momentary (spring return); NO or NC contacts',
                    'Limit switches — mechanically actuated by equipment movement; position sensing',
                    'Float switches — liquid level control; actuated by float rising or falling',
                    'Pressure switches — actuated when system pressure reaches setpoint; pump and compressor protection',
                    'Temperature switches — actuated by temperature; fan control, safety interlocks',
                    'Proximity sensors — inductive, capacitive, photoelectric, ultrasonic — no mechanical contact required',
                    'Selector switches — multi-position switches for manual/auto, hand/off/auto (HOA) control',
                  ],
                },
              ],
            },
          ],
          practiceQuestions:  [],
        },

        // ─────────────────────────────────────────────────────────
        // CHAPTER 11 — Drives, Motors, and Automated Control Systems (MWA D-23, D-24, D-25)
        // ─────────────────────────────────────────────────────────
        {
          id: 'elec-ch-11',
          number: 11,
          title: 'Drives, Motors, and Automated Control Systems',
          subtitle: 'MWA D-23 Drives (22%) · D-24 Motors (28%) · D-25 Automated Controls (13%)',
          isFree: false,
          estimatedMinutes: 65,
          sections: [
            {
              id: 'elec-ch11-s1',
              title: '11.1 Variable Frequency Drives (AC Drives)',
              content: [
                {
                  type: 'paragraph',
                  text: 'A Variable Frequency Drive (VFD) converts fixed-frequency AC power to variable-frequency, variable-voltage AC output, allowing precise speed control of AC induction motors. VFDs are the most energy-efficient method of motor speed control — reducing motor speed to 80% reduces power consumption to approximately 51% (cube law relationship).',
                },
                {
                  type: 'infoBox',
                  title: 'VFD Internal Stages',
                  items: [
                    'Rectifier stage — converts AC input to DC (uncontrolled diode bridge)',
                    'DC bus (filter) — smooths the DC voltage using large capacitors; stores energy',
                    'Inverter stage — converts DC back to variable-frequency AC using IGBT (Insulated Gate Bipolar Transistor) switches; PWM (Pulse Width Modulation) generates a simulated sine wave',
                    'Control board — processes speed reference signal and feedback; generates IGBT gate signals',
                    'EMC filter — reduces electromagnetic interference that VFDs can produce on the supply system',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'VFD Installation Considerations',
                  items: [
                    'Input line reactor — reduces harmonic distortion on the supply and protects VFD from supply transients',
                    'Output reactor — reduces dV/dt (voltage rise rate) on motor cables; reduces bearing current damage on long cable runs',
                    'Shielded motor cable — required on runs over a few metres to prevent EMI radiation',
                    'Motor temperature derating — VFD-rated motors (INVERTER DUTY) are required for continuous low-speed operation because self-cooling fan speed also decreases',
                    'Bypass contactor — allows motor to run across-the-line if the VFD fails',
                    'Programming — set nameplate motor FLA, voltage, frequency; set accel/decel ramps, current limits, and fault parameters',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch11-s2',
              title: '11.2 DC Drives',
              content: [
                {
                  type: 'paragraph',
                  text: 'DC drives control the speed and torque of DC motors by varying the DC armature voltage and/or field current. Though AC VFDs have largely replaced DC drives in new installations, DC drive systems remain in service in many industrial applications.',
                },
                {
                  type: 'infoBox',
                  title: 'DC Drive Components',
                  items: [
                    'Power supply — provides regulated DC power to the control circuit',
                    'Converter (rectifier) — converts AC to controlled DC using SCRs (Silicon Controlled Rectifiers) or IGBTs',
                    'Speed control — regulates armature voltage to control speed',
                    'Torque control — adjusts armature current to control torque',
                    'Field controller — adjusts field current for field weakening above base speed',
                    'EMC filter — reduces line harmonics generated by the SCR firing',
                    'Feedback devices — encoders and tachometers provide speed feedback for closed-loop control',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch11-s3',
              title: '11.3 Single-Phase, Three-Phase, and DC Motors',
              content: [
                {
                  type: 'infoBox',
                  title: 'Single-Phase Motor Types',
                  items: [
                    'Capacitor-start, induction-run — start capacitor in series with start winding; high starting torque; capacitor disconnected at ~75% speed by centrifugal switch',
                    'Capacitor-start, capacitor-run (dual capacitor) — start capacitor for high starting torque, run capacitor for better running efficiency and power factor',
                    'Permanent split capacitor (PSC) — run capacitor permanently in circuit; lower starting torque but quieter; used in fans and small pumps',
                    'Shaded pole — low starting torque; quiet; used in small fans and appliances; cannot be reversed',
                    'Universal motor — operates on AC or DC; high speed, high torque; used in power tools and appliances',
                    'Split-phase — no capacitor; low starting torque; start winding disconnected at 75% speed',
                    'Hermetically sealed — motor and compressor sealed in same housing; used in refrigeration and AC compressors',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Three-Phase Motor Types',
                  items: [
                    'Squirrel cage induction motor — most common industrial motor; simple, rugged, low maintenance; rotor bars are short-circuited; speed determined by supply frequency and number of poles',
                    'Wound rotor induction motor — rotor has slip rings connected to external resistance; variable resistance allows reduced starting current and speed control; higher maintenance',
                    'Synchronous motor — runs at exactly synchronous speed (no slip); used for power factor correction (when over-excited) and precision speed applications',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'DC Motor Types',
                  items: [
                    'Series DC motor — field winding in series with armature; high starting torque; speed varies greatly with load; never run unloaded (dangerous overspeed); used in traction (cranes, hoists)',
                    'Shunt DC motor — field winding in parallel with armature; relatively constant speed; used for machine tools',
                    'Compound DC motor — both series and shunt field windings; combines characteristics of both',
                    'Separately excited DC motor — field supplied from separate source; best speed regulation; used in drive applications requiring precise control',
                    'Permanent magnet DC motor — field provided by permanent magnets; no field winding; compact; used in small appliances and servo drives',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'Motor nameplate information includes: HP or kW rating, voltage, FLA, RPM, frame size, insulation class, service factor, efficiency, power factor, frequency, and number of phases. The NEMA frame designation indicates the shaft height and bolt pattern dimensions.',
                },
              ],
            },
            {
              id: 'elec-ch11-s4',
              title: '11.4 Automated Control Systems — PLC, SCADA, DCS',
              content: [
                {
                  type: 'paragraph',
                  text: 'Automated control systems replace hard-wired relay logic with programmable devices, enabling complex, flexible, and easily modified control sequences. Construction electricians install, wire, program, and maintain these systems.',
                },
                {
                  type: 'infoBox',
                  title: 'Types of Automated Control Systems',
                  items: [
                    'PLC (Programmable Logic Controller) — the workhorse of industrial automation; scans inputs, executes ladder logic program, updates outputs; used for machine control, conveyor systems, pump stations',
                    'SCADA (Supervisory Control and Data Acquisition) — monitors and controls geographically distributed systems (pipelines, water treatment, power grids) via RTUs or PLCs at remote sites',
                    'DCS (Distributed Control System) — used in continuous process industries (oil refinery, chemical plant); controllers distributed throughout the plant and connected over a plant bus',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'PLC Hardware Components',
                  items: [
                    'Power supply — provides regulated DC power to the PLC backplane',
                    'CPU (Central Processing Unit) — runs the user program; stores data; communicates with I/O modules',
                    'Input modules — digital (DI) or analog (AI); convert field signals to CPU-readable data',
                    'Output modules — digital (DO) or analog (AO); convert CPU commands to field signals',
                    'Communication module — Ethernet, Modbus, Profibus, DeviceNet, BACnet, Fieldbus',
                    'HMI (Human Machine Interface) — touchscreen or panel for operator monitoring and control',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Number and Code Systems Used in PLCs',
                  items: [
                    'Binary — base 2; digits 0 and 1; the native language of digital electronics',
                    'Decimal — base 10; standard number system',
                    'Hexadecimal — base 16; digits 0–9, A–F; compact representation of binary data',
                    'Octal — base 8; digits 0–7; used in some older PLC addressing systems',
                    'BCD (Binary Coded Decimal) — each decimal digit encoded as 4-bit binary; used with thumbwheel switches',
                    'ASCII — 7-bit codes for alphanumeric characters; used in HMI displays and serial communications',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Basic Ladder Logic Instructions',
                  items: [
                    'XIC (Examine if Closed) — instruction is TRUE when the corresponding bit is 1 (equivalent to a NO contact)',
                    'XIO (Examine if Open) — instruction is TRUE when the corresponding bit is 0 (equivalent to a NC contact)',
                    'OTE (Output Energize) — sets the output bit to 1 when the rung logic is true (equivalent to a coil)',
                    'OTL (Output Latch) / OTU (Output Unlatch) — latching and unlatching output coils',
                    'TON (Timer On-Delay) / TOF (Timer Off-Delay) — timing functions',
                    'CTU (Count Up) / CTD (Count Down) — counting functions',
                  ],
                },
              ],
            },
          ],
          practiceQuestions:  [],
        },
      ],
    },

    // ============================================================
    // PART 5 — SIGNALLING AND COMMUNICATION SYSTEMS
    // MWA E: Installs, Services and Maintains Signalling and Communication Systems (10%)
    // Tasks: E-26 Signalling (47%), E-27 Communication (30%), E-28 Integrated Control (23%)
    // ============================================================
    {
      id: 'elec-part-5',
      number: 5,
      title: 'Signalling and Communication Systems',
      description: 'Fire alarm systems, security and surveillance, VDV/CATV, PA and nurse call systems, building automation, and integrated control systems.',
      chapters: [

        // ─────────────────────────────────────────────────────────
        // CHAPTER 12 — Signalling and Communication Systems (MWA E-26, E-27)
        // ─────────────────────────────────────────────────────────
        {
          id: 'elec-ch-12',
          number: 12,
          title: 'Fire Alarm, Security, and Communication Systems',
          subtitle: 'MWA E-26 Signalling (47%) · E-27 Communication Systems (30%)',
          isFree: false,
          estimatedMinutes: 60,
          sections: [
            {
              id: 'elec-ch12-s1',
              title: '12.1 Fire Alarm Systems (Task E-26)',
              content: [
                {
                  type: 'paragraph',
                  text: 'Fire alarm systems are life safety systems governed by the National Fire Code (NFC), ULC standards, and CEC Section 32. They require special wiring methods (FAS wiring), supervision of all circuits, and must be tested and verified by a qualified person.',
                },
                {
                  type: 'infoBox',
                  title: 'Fire Alarm System Components',
                  items: [
                    'Fire Alarm Control Panel (FACP) — the "brain" of the system; monitors all initiating and signalling circuits; connected to the monitoring station',
                    'Initiating devices — detect fire conditions: smoke detectors (ionization, photoelectric), heat detectors (fixed temperature, rate-of-rise), flame detectors, manual pull stations, sprinkler flow switches, duct smoke detectors',
                    'Signalling devices — alert occupants: bells, horns, strobes, voice evacuation speakers',
                    'Annunciator panel — remote display showing zone status and alarm locations',
                    'Wiring — ULC-listed two-wire or four-wire circuits; Class A (T-tap, fault-tolerant) or Class B (end-of-line resistor supervised)',
                    'Power supply — primary (120V AC) and secondary (sealed lead-acid battery backup, minimum 24 hours standby + 5 minutes alarm)',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Fire Alarm Circuit Classes',
                  items: [
                    'Class A — loop wiring; both ends of each circuit connect to the FACP; a single open or short fault does not disable the circuit; required in high-rise buildings and hospitals',
                    'Class B — T-tap wiring; end-of-line resistor (EOLR) at the furthest device supervises the circuit; a single fault disables the affected branch',
                    'Addressable systems — each device has a unique digital address; the FACP can identify the exact device in alarm or trouble; no EOLR required',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch12-s2',
              title: '12.2 Security and Surveillance Systems (Task E-26)',
              content: [
                {
                  type: 'infoBox',
                  title: 'Security System Components',
                  items: [
                    'Control panel — processes inputs from all sensors; communicates with the monitoring station',
                    'Motion detectors — PIR (passive infrared), microwave, dual-technology',
                    'Door/window contacts — magnetic contact switch; monitors opening events',
                    'Glass break sensors — acoustic or vibration sensors',
                    'Cameras (CCTV/IP) — analog cameras on coaxial cable or digital IP cameras on Cat5e/6 UTP',
                    'DVR/NVR — Digital Video Recorder (analog) or Network Video Recorder (IP); stores video',
                    'Access control — card readers, keypads, electric strikes, magnetic locks',
                    'Monitoring station — 24/7 central station; connected by phone line, cellular, or IP',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch12-s3',
              title: '12.3 Voice/Data/Video (VDV) and CATV Systems (Task E-27)',
              content: [
                {
                  type: 'paragraph',
                  text: 'VDV structured cabling systems provide the infrastructure for telephone, data networking, and video distribution. These systems are designed, installed, and tested to standards published by TIA (Telecommunications Industry Association) and BICSI.',
                },
                {
                  type: 'infoBox',
                  title: 'Structured Cabling Standards and Categories',
                  items: [
                    'Cat 3 — voice (telephone); 16 MHz; largely obsolete for data',
                    'Cat 5e — 100 MHz; supports 1 Gbps Ethernet (1000BASE-T)',
                    'Cat 6 — 250 MHz; supports 10 Gbps up to 55 m (10GBASE-T)',
                    'Cat 6A — 500 MHz; supports 10 Gbps up to 100 m',
                    'Fiber optic — multimode (OM3, OM4 — orange; OM5 — lime) or single-mode (OS2 — yellow); immune to EMI; very high bandwidth and distance',
                    'Coaxial cable — used for CATV (cable TV), CCTV, and RF distribution; RG-6 for residential CATV',
                    'Standard ANSI/TIA-568 — defines cable categories, connector types (8P8C/RJ45 for UTP), testing requirements',
                    'Verification and certification — cable runs tested with a cable analyzer (Fluke DSX, etc.); test parameters: wire map, length, attenuation, NEXT, return loss',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'CATV Components',
                  items: [
                    'Broadcast transmitters and receiving equipment (satellite dishes, head-end)',
                    'Amplifiers — boost signal level over long cable runs',
                    'Splitters — divide signal to multiple outputs (with signal loss)',
                    'Attenuators — reduce signal level to match equipment input requirements',
                    'Terminators — 75Ω terminations on unused CATV ports to prevent reflections',
                    'TDR (Time-Domain Reflectometer) — locates faults in coaxial cables by measuring reflected pulse timing',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch12-s4',
              title: '12.4 PA, Intercom, and Nurse Call Systems (Task E-27)',
              content: [
                {
                  type: 'paragraph',
                  text: 'Public address (PA) and intercom systems distribute voice communication throughout a facility. Nurse call systems are specialized communication systems used in healthcare settings to allow patients to summon staff.',
                },
                {
                  type: 'infoBox',
                  title: 'PA System Components',
                  items: [
                    'Microphones — dynamic, condenser; at master stations and paging consoles',
                    'Amplifiers — rated in watts RMS; sized based on speaker load',
                    'Speakers — 70V or 25V distributed audio system; volume control taps at each speaker',
                    'Tone generators — pre-recorded tones and announcements',
                    'Power supplies — UPS backup for life safety PA systems',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'Nurse call systems can be one-way (patient to nurse station) or two-way (conversation capability). Modern IP-based nurse call systems run over the hospital\'s structured cabling network. Components include call stations at each patient bed, dome lights in the corridor, annunciator panels at nurse stations, and integration with patient care LAN, security, and emergency power systems.',
                },
              ],
            },
          ],
          practiceQuestions: [],
        },

        // ─────────────────────────────────────────────────────────
        // CHAPTER 13 — Building Automation and Integrated Control Systems (MWA E-28)
        // ─────────────────────────────────────────────────────────
        {
          id: 'elec-ch-13',
          number: 13,
          title: 'Building Automation and Integrated Control Systems',
          subtitle: 'MWA E-28 · Integrated Control Systems (23% of MWA E)',
          isFree: false,
          estimatedMinutes: 50,
          sections: [
            {
              id: 'elec-ch13-s1',
              title: '13.1 Building Automation Systems (BAS)',
              content: [
                {
                  type: 'paragraph',
                  text: 'A Building Automation System (BAS) uses a computerized network to monitor and control a building\'s HVAC, lighting, security, and energy systems from a central or remote interface. BAS systems optimize energy use, improve occupant comfort, and enable remote fault detection.',
                },
                {
                  type: 'infoBox',
                  title: 'BAS Components',
                  items: [
                    'Controllers — DDC (Direct Digital Control) controllers at the zone or equipment level',
                    'Sensors — occupancy sensors, light level sensors, temperature sensors, CO₂ sensors',
                    'Actuators — damper motors, valve actuators controlled by the BAS',
                    'Network cabling — typically Cat5e or Cat6 for BACnet/IP; twisted shielded pair for BACnet MS/TP or LON',
                    'PoE (Power over Ethernet) switches — power and data delivered over a single Cat cable to IP devices',
                    'Servers and GUIs — central monitoring and control workstations',
                  ],
                },
                {
                  type: 'keyTerm',
                  term: 'BACnet (Building Automation and Control Networks)',
                  definition: 'The open data communication protocol standard (ANSI/ASHRAE 135) for building automation systems. BACnet enables devices from different manufacturers to communicate over a common network. Protocols include BACnet/IP (over Ethernet), BACnet MS/TP (over twisted pair), and BACnet wireless.',
                },
              ],
            },
            {
              id: 'elec-ch13-s2',
              title: '13.2 Building Control Systems',
              content: [
                {
                  type: 'paragraph',
                  text: 'Building control systems at the field level interface between the BAS network and the physical HVAC, lighting, and other systems. They use a variety of control technologies — pneumatic, analog electronic, and direct digital control (DDC).',
                },
                {
                  type: 'infoBox',
                  title: 'Building Control System Types',
                  items: [
                    'Pneumatic controls — use compressed air pressure signals (3–15 psi) to position dampers and valves; legacy technology; reliable but inflexible',
                    'Analog electronic controls — use 0–10V DC or 4–20mA signals; still widely used for simple single-loop control',
                    'DDC (Direct Digital Control) — microprocessor-based controllers; programmable; communicate over BACnet or proprietary protocols; can perform complex sequences',
                    'Computer control — the BAS server coordinates all DDC controllers; trending, alarm management, and optimization at the supervisory level',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Building Control Field Devices',
                  items: [
                    'Damper motors — actuate air flow control dampers in HVAC ducts',
                    'Valve actuators — control flow in chilled water, hot water, and steam systems',
                    'Contactors and relays — switch loads from DDC controller outputs',
                    'Sensors — humidity, temperature, pressure differential, light level, occupancy, CO₂, flow',
                    'Annunciators — visual/audible alarms at local equipment',
                    'Thermostats — local zone temperature control setpoints',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch13-s3',
              title: '13.3 Servicing and Maintaining Integrated Control Systems',
              content: [
                {
                  type: 'paragraph',
                  text: 'When troubleshooting an integrated control system, the electrician must first identify the system type and review the as-built drawings, maintenance logs, and certification reports before performing any tests. Changes to integrated systems (especially fire alarm and security) must be coordinated with the client and the monitoring station to avoid false alarms.',
                },
                {
                  type: 'infoBox',
                  title: 'Integrated Control System Troubleshooting Steps',
                  items: [
                    '1. Obtain a detailed description of the malfunction from the operator or end-user',
                    '2. Review as-built drawings, maintenance logs, and recent change history',
                    '3. Perform a site walkthrough to identify system components and their status',
                    '4. Test the integrated control system using multimeters and system diagnostic tools',
                    '5. Compare test results to the manufacturers\' certification report and client requirements',
                    '6. Adjust or replace components as required; schedule with the client to minimize disruption',
                    '7. Retest to confirm correct operation',
                    '8. Update documentation and notify the system operator of all changes made',
                  ],
                },
              ],
            },
          ],
          practiceQuestions: [],
        },

      ], // end Part 5 chapters
    }, // end Part 5

    // ============================================================
    // PART 6 — EXAM PREPARATION
    // Chapters: Formulas · Key Terms & Glossary · Exam Strategy · Mock Exam
    // ============================================================
    {
      id: 'elec-part-6',
      number: 6,
      title: 'Exam Preparation',
      description: 'Everything you need to walk into the Red Seal exam with confidence — formulas reference, glossary, exam strategy, and a full 30-question timed mock exam.',
      chapters: [

        // ─────────────────────────────────────────────────────────
        // CHAPTER 14 — Formulas
        // ─────────────────────────────────────────────────────────
        {
          id: 'elec-ch-14',
          number: 14,
          title: 'Formulas Reference',
          subtitle: 'Every formula tested on the Red Seal exam — organized by topic',
          isFree: false,
          estimatedMinutes: 35,
          sections: [
            {
              id: 'elec-ch14-s1',
              title: '14.1 Ohm\'s Law and Power',
              content: [
                {
                  type: 'paragraph',
                  text: 'These are the most frequently applied formulas on the exam. Commit them to memory and know how to rearrange each one.',
                },
                {
                  type: 'infoBox',
                  title: 'Ohm\'s Law',
                  items: [
                    'V = I × R',
                    'I = V / R',
                    'R = V / I',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Power Formulas',
                  items: [
                    'P = V × I',
                    'P = I² × R',
                    'P = V² / R',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Series and Parallel Resistors',
                  items: [
                    'Series: Rt = R1 + R2 + R3 ...',
                    'Parallel: 1/Rt = 1/R1 + 1/R2 + 1/R3 ...',
                    'Two parallel resistors: Rt = (R1 × R2) / (R1 + R2)',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch14-s2',
              title: '14.2 AC Power and Power Factor',
              content: [
                {
                  type: 'infoBox',
                  title: 'Single-Phase AC',
                  items: [
                    'Apparent power: S (VA) = V × I',
                    'Real power: P (W) = V × I × PF',
                    'Reactive power: Q (VAR) = √(S² − P²)',
                    'Power factor: PF = P / S = cos θ',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Three-Phase AC',
                  items: [
                    'Apparent power: S (VA) = √3 × VL × IL = 1.732 × VL × IL',
                    'Real power: P (W) = √3 × VL × IL × PF',
                    'Line-to-neutral voltage in wye: VLN = VLL / √3',
                    'Phase current in delta: Iphase = Iline / √3',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Impedance',
                  items: [
                    'Z = √(R² + X²)',
                    'Inductive reactance: XL = 2πfL',
                    'Capacitive reactance: XC = 1 / (2πfC)',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch14-s3',
              title: '14.3 Transformers',
              content: [
                {
                  type: 'infoBox',
                  title: 'Transformer Formulas',
                  items: [
                    'Turns ratio: a = N1/N2 = V1/V2 = I2/I1',
                    'Single-phase kVA: S = (V × I) / 1000',
                    'Three-phase kVA: S = (√3 × VL × IL) / 1000',
                    'Three-phase secondary current: I = S × 1000 / (√3 × V)',
                    'Voltage regulation: VR% = (VNL − VFL) / VFL × 100%',
                    'Efficiency: η% = Pout / (Pout + Ploss) × 100%',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch14-s4',
              title: '14.4 Motors',
              content: [
                {
                  type: 'infoBox',
                  title: 'Motor Formulas',
                  items: [
                    'Synchronous speed: Ns (RPM) = 120 × f / P',
                    'Slip: s% = (Ns − Nr) / Ns × 100%',
                    'Three-phase motor efficiency: η% = (HP × 746) / (√3 × V × I × PF) × 100%',
                    'Horsepower: HP = (T × N) / 5252  (T in ft·lb, N in RPM)',
                    'Metric: kW = HP × 0.7457',
                    'Motor branch circuit conductor: minimum = FLA × 125%',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch14-s5',
              title: '14.5 Voltage Drop and Conduit Fill',
              content: [
                {
                  type: 'infoBox',
                  title: 'Voltage Drop',
                  items: [
                    'Single-phase: VD = 2 × L × R × I / 1000  (R in Ω/km, L in metres)',
                    'Three-phase: VD = √3 × L × R × I / 1000',
                    'Percent VD: VD% = VD / Vsource × 100%',
                    'CEC recommendation: ≤3% branch circuit; ≤5% feeder + branch combined',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Conduit Fill (CEC Appendix B)',
                  items: [
                    '1 conductor: ≤53% of conduit internal cross-sectional area',
                    '2 conductors: ≤31%',
                    '3 or more conductors: ≤40%',
                    'Circle area: A = π × d² / 4  (π = 3.1416)',
                    'Minimum conduit area = total conductor area / fill %',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Useful Conversions',
                  items: [
                    '1 inch = 25.4 mm',
                    '1 ft = 0.3048 m',
                    '1 HP = 746 W',
                    '1 kWh = 3.6 MJ',
                    '√2 = 1.414  |  √3 = 1.732  |  1/√3 = 0.577',
                  ],
                },
              ],
            },
          ],
          practiceQuestions: [],
        },

        // ─────────────────────────────────────────────────────────
        // CHAPTER 14 — Key Terms and Glossary
        // ─────────────────────────────────────────────────────────
        {
          id: 'elec-ch-15',
          number: 15,
          title: 'Key Terms and Glossary',
          subtitle: 'Definitions and acronyms for every major concept in the Construction Electrician trade',
          isFree: false,
          estimatedMinutes: 30,
          sections: [
            {
              id: 'elec-ch15-s1',
              title: '14.1 Acronyms Quick-Reference',
              content: [
                {
                  type: 'infoBox',
                  title: 'Acronyms A–L',
                  items: [
                    'AC — Alternating Current',
                    'AFCI — Arc Fault Circuit Interrupter',
                    'AHJ — Authority Having Jurisdiction',
                    'ARCAL — Aircraft Radio Control of Aerodrome Lighting',
                    'AVR — Automatic Voltage Regulator',
                    'BACnet — Building Automation and Control Networks (ANSI/ASHRAE 135)',
                    'BIM — Building Information Modelling',
                    'BMS — Battery Management System',
                    'CATV — Community Antenna Television',
                    'CCR — Constant Current Regulator',
                    'CEC — Canadian Electrical Code',
                    'CT — Current Transformer',
                    'DALI — Digital Addressable Lighting Interface',
                    'DC — Direct Current',
                    'DCS — Distributed Control System',
                    'DDC — Direct Digital Control',
                    'EMC — Electromagnetic Compatibility',
                    'EMT — Electrical Metallic Tubing',
                    'EOLR — End-of-Line Resistor',
                    'FACP — Fire Alarm Control Panel',
                    'FLA — Full Load Amps',
                    'FMC — Flexible Metal Conduit',
                    'GFD — Ground Fault Detection',
                    'GFCI — Ground Fault Circuit Interrupter',
                    'GFP — Ground Fault Protection',
                    'HMI — Human Machine Interface',
                    'HVAC — Heating, Ventilation and Air-Conditioning',
                    'ICCP — Impressed Current Cathodic Protection',
                    'IGBT — Insulated Gate Bipolar Transistor',
                    'IoT — Internet of Things',
                    'kVA — Kilovolt-Amperes',
                    'LEED — Leadership in Energy and Environmental Design',
                    'LFMC — Liquid-Tight Flexible Metal Conduit',
                    'LOTO — Lock-Out / Tag-Out',
                    'LRC — Locked Rotor Current',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Acronyms M–Z',
                  items: [
                    'MCC — Motor Control Centre',
                    'MI — Mineral Insulated (cable)',
                    'MOV — Metal Oxide Varistor',
                    'NBC — National Building Code of Canada',
                    'NEMA — National Electrical Manufacturers\' Association',
                    'NFC — National Fire Code of Canada',
                    'NMD — Non-Metallic sheathed cable (Dry)',
                    'O&M — Operations and Maintenance',
                    'OH&S — Occupational Health and Safety',
                    'OLR — Overload Relay',
                    'OTE — Output Energize (PLC ladder logic)',
                    'PA — Public Address',
                    'PAT — Powder-Actuated Tool',
                    'PDC — Power Distribution Centre',
                    'PF — Power Factor',
                    'PLC — Programmable Logic Controller',
                    'PoE — Power over Ethernet',
                    'PPE — Personal Protective Equipment',
                    'PWM — Pulse Width Modulation',
                    'RCD — Residual Current Device',
                    'RMC — Rigid Metal Conduit (also RSC)',
                    'RNMC — Rigid Non-Metallic Conduit (PVC)',
                    'SCADA — Supervisory Control and Data Acquisition',
                    'SCR — Silicon Controlled Rectifier',
                    'SPD — Surge Protection Device',
                    'TDR — Time-Domain Reflectometer',
                    'TIA — Telecommunications Industry Association',
                    'TPG — Temporary Protective Ground',
                    'ULC — Underwriters Laboratories of Canada',
                    'UPS — Uninterruptible Power Supply',
                    'UTP — Unshielded Twisted Pair',
                    'VDV — Voice / Data / Video',
                    'VFD — Variable Frequency Drive',
                    'VT — Voltage Transformer',
                    'WHMIS — Workplace Hazardous Materials Information System',
                    'WLL — Working Load Limit',
                    'XIC — Examine If Closed (PLC — normally open contact)',
                    'XIO — Examine If Open (PLC — normally closed contact)',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch15-s2',
              title: '14.2 Key Term Definitions — Safety and Codes',
              content: [
                {
                  type: 'infoBox',
                  title: 'Safety and Codes',
                  items: [
                    'AHJ — The authority responsible for enforcing a code or standard; includes electrical inspectors and OH&S officers.',
                    'Arc Flash — Sudden release of electrical energy through air; produces heat up to 20,000°C, pressure waves, and molten metal.',
                    'LOTO — Procedure of isolating all energy sources to zero-energy state and applying personal locks and danger tags before work begins.',
                    'WHMIS — Canada\'s national hazard communication standard; requires labels and SDS on all controlled products.',
                    'WLL — The maximum load a rigging component may carry under normal use; never exceed WLL.',
                    'TPG — Shorting cables applied to de-energized conductors to drain stored charge before contact.',
                    'Designated Substance — Regulated substance (asbestos, lead, silica, PCBs) requiring special handling procedures per OH&S legislation.',
                    'CAT Rating — Overvoltage category of test instruments; CAT III = distribution systems; CAT IV = service entrance.',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Services and Distribution',
                  items: [
                    'Edison Three-Wire — Standard 120/240V single-phase residential service; two 120V legs 180° out of phase with grounded neutral.',
                    'High-Leg Delta — 120/240V 3-phase delta service; B phase (high leg) is ~208V to neutral; must be identified with orange.',
                    'System Grounding — Intentionally connecting the service neutral to earth to establish a stable voltage reference.',
                    'Equipment Bonding — Connecting all non-current-carrying metallic parts together and to the grounded conductor to provide a fault return path.',
                    'Ufer Ground — Concrete-encased electrode; minimum 6 m of rebar or copper in the building footing.',
                    'CT / VT — Instrument transformers that step down current (CT) or voltage (VT) for metering on large services.',
                    'Coordination Study — Engineering analysis ensuring only the OCPD closest to a fault opens.',
                    'Current-Limiting Fuse — Interrupts fault current in < half-cycle, limiting peak let-through energy to protect downstream equipment.',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Wiring Systems',
                  items: [
                    'Ampacity — Maximum current a conductor can carry continuously without exceeding its temperature rating.',
                    'NMD90 — Non-metallic sheathed cable rated 90°C for dry indoor locations (Loomex®).',
                    'TECK90 — Copper-shielded, PVC-jacketed cable rated 90°C; approved for cable tray and direct burial.',
                    'RMC (RSC) — Rigid Metal Conduit; heaviest-wall steel conduit; approved for all locations including direct burial.',
                    'EMT — Thin-wall steel conduit; most common in commercial construction; not for direct burial.',
                    'Conduit Fill — Percentage of conduit area occupied by conductors; ≤40% for 3+ conductors.',
                    'Box Fill — CEC Rule 12-3034 calculation ensuring adequate box volume for conductors.',
                    'IC-Rated Luminaire — Fixture approved for direct contact with thermal insulation.',
                    'Anti-Islanding — Mandatory VFD or inverter feature; disconnects from the grid when utility power fails.',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Motors, Controls, and Automation',
                  items: [
                    'FLA — Current at rated HP output, voltage, and frequency; basis for all motor circuit sizing.',
                    'LRC — Starting inrush current; typically 6–8× FLA.',
                    'Synchronous Speed — Rotating magnetic field speed: Ns = 120 × f / P.',
                    'Slip — Difference between synchronous and rotor speed; normal 2–5% for squirrel cage motors.',
                    'OLR — Overload relay; protects motor windings from sustained overcurrent; trips at 115–125% FLA.',
                    'Three-Wire Control — Starter control circuit with holding contact; provides low-voltage protection.',
                    'VFD — Converts fixed-frequency AC to variable-frequency output for motor speed control.',
                    'IGBT — Insulated Gate Bipolar Transistor; switching element in VFD inverter stage.',
                    'XIC — PLC "Examine If Closed"; equivalent to normally open contact; TRUE when bit = 1.',
                    'Class A Wiring — Fire alarm loop circuit; single fault does not disable the circuit.',
                    'Class B Wiring — Fire alarm T-tap circuit with EOLR; single open fault disables the branch.',
                    'BACnet — Open building automation protocol (ANSI/ASHRAE 135); enables multi-vendor interoperability.',
                  ],
                },
              ],
            },
          ],
          practiceQuestions: [],
        },

        // ─────────────────────────────────────────────────────────
        // CHAPTER 14 — Exam Preparation Strategy
        // ─────────────────────────────────────────────────────────
        {
          id: 'elec-ch-16',
          number: 16,
          title: 'Exam Preparation Strategy',
          subtitle: 'What to study, how to study it, and how to maximize your score on exam day',
          isFree: false,
          estimatedMinutes: 25,
          sections: [
            {
              id: 'elec-ch16-s1',
              title: '14.1 Know the Exam',
              content: [
                {
                  type: 'paragraph',
                  text: 'The Red Seal Interprovincial Exam for Construction Electrician is 100 multiple-choice questions. Passing mark: 70 correct (70%). The exam is based entirely on the 2025 RSOS and the Canadian Electrical Code. No reference materials are permitted.',
                },
                {
                  type: 'infoBox',
                  title: 'MWA Weighting — Where Your Points Come From',
                  items: [
                    'MWA A — Common Occupational Skills: 12 questions (12%)',
                    'MWA B — Generating, Distribution and Service Systems: 26 questions (26%)',
                    'MWA C — Wiring Systems: 34 questions (34%) ← LARGEST SECTION',
                    'MWA D — Motors and Control Systems: 18 questions (18%)',
                    'MWA E — Signalling and Communication: 10 questions (10%)',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'To pass comfortably: target ≥24/34 on MWA C, ≥19/26 on MWA B, ≥13/18 on MWA D, ≥10/12 on MWA A, ≥7/10 on MWA E. You can afford 30 wrong answers — but never concede an entire MWA.',
                },
              ],
            },
            {
              id: 'elec-ch16-s2',
              title: '14.2 Study Priorities',
              content: [
                {
                  type: 'infoBox',
                  title: 'Priority 1 — MWA C: Wiring Systems (34 questions)',
                  items: [
                    'Conductor ampacity, temperature rating, and derating factors',
                    'Voltage drop calculations — both single-phase and three-phase',
                    'Conduit types and fill rules; box fill (CEC Rule 12-3034)',
                    'Cable types: NMD90, AC90, TECK90, MI cable and their applications',
                    'Branch circuit sizing for continuous loads (125% rule)',
                    'GFCI and AFCI — required locations',
                    'Electric heating circuit sizing',
                    'Emergency lighting: NBC requirements, Class A vs. B, test intervals',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Priority 2 — MWA B: Distribution and Services (26 questions)',
                  items: [
                    'Single-phase and three-phase service configurations and voltages',
                    'Grounding electrodes — types and minimum dimensions (CEC Section 10)',
                    'System grounding vs. equipment bonding',
                    'Transformer calculations — turns ratio, kVA, primary/secondary current',
                    'Overcurrent protection: fuse types, MCCB, coordination',
                    'UPS types and features',
                    'Renewable energy: grid-tied anti-islanding, battery storage',
                    'NEMA enclosure types',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Priority 3 — MWA D: Motors and Controls (18 questions)',
                  items: [
                    'Motor branch circuit conductor sizing (FLA × 125%)',
                    'Three-wire starter control circuit logic',
                    'Reduced voltage starting methods and torque reduction',
                    'VFD internal stages: rectifier → DC bus → inverter',
                    'Motor types — squirrel cage, wound rotor, synchronous, DC types',
                    'Synchronous speed and slip calculations',
                    'PLC ladder logic: XIC, XIO, OTE instructions',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Priority 4 — MWA A + E (22 questions combined)',
                  items: [
                    'MWA A: PPE for shock and arc flash, LOTO 6-step sequence, CAT meter ratings, drawing types',
                    'MWA E: Fire alarm Class A vs. B wiring, FACP components, Cat 6A specifications, BACnet protocol',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch16-s3',
              title: '14.3 Exam Day Technique',
              content: [
                {
                  type: 'infoBox',
                  title: 'Question-by-Question Approach',
                  items: [
                    'Time budget: ~54 seconds per question; never spend more than 2 minutes on any one question',
                    'Read the complete question before looking at answers',
                    'Eliminate obviously wrong answers first — often narrows to 2 choices',
                    'Calculation questions: write given values → identify formula → substitute → verify units',
                    '"Which is NOT correct" questions: find the one false statement among the options',
                    'Flag uncertain questions, make your best guess, move on, and return at the end',
                    'Never leave a blank — there is no penalty for a wrong answer',
                    'Do not change an answer unless you have a specific reason to do so',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Common Traps on the Exam',
                  items: [
                    'Units — ensure R is in Ω/km when L is in metres in the voltage drop formula',
                    'Continuous vs. non-continuous — 125% rule applies only to loads running ≥3 hours continuously',
                    'FLA vs. HP — always size conductors from the nameplate FLA, not calculated from HP',
                    'Single-phase vs. three-phase power — P = V×I×PF vs. P = √3×V×I×PF',
                    'Primary vs. secondary current — current is inversely proportional to voltage in a transformer',
                    'GFCI vs. AFCI — GFCI protects against ground faults in wet locations; AFCI protects against arc faults (fire risk)',
                    'Class A vs. Class B fire alarm — Class A survives a single wire break; Class B does not',
                  ],
                },
              ],
            },
          ],
          practiceQuestions: [],
        },

        // ─────────────────────────────────────────────────────────
        // CHAPTER 17 — Full Mock Exam (100 questions, 3 hours)
        // ─────────────────────────────────────────────────────────
        {
          id: 'elec-ch-17',
          number: 17,
          title: 'Full Mock Exam',
          subtitle: '100-question timed practice exam — Red Seal style, 3 hours, all 5 MWAs proportionally represented',
          isFree: false,
          estimatedMinutes: 180,
          isMockExam: true,
          sections: [
            {
              id: 'elec-ch17-s1',
              title: 'Instructions',
              content: [
                {
                  type: 'paragraph',
                  text: 'This full mock exam contains 100 questions and must be completed in 3 hours — matching the real Red Seal Construction Electrician (309A) exam. Use the "Start exam" button below to launch the timed simulation. Unanswered questions count as wrong when time runs out.',
                },
                {
                  type: 'infoBox',
                  title: 'Mock Exam Weighting (100 Questions)',
                  items: [
                    'MWA A — Common Occupational Skills: 12 questions',
                    'MWA B — Generating, Distribution and Service Systems: 26 questions',
                    'MWA C — Wiring Systems: 34 questions',
                    'MWA D — Motors and Control Systems: 18 questions',
                    'MWA E — Signalling and Communication Systems: 10 questions',
                  ],
                },
              ],
            },
          ],
          practiceQuestions: [],
        },

      ], // end Part 6 chapters
    }, // end Part 6

  ], // end parts

}; // end electricianCourse

// ============================================================
// Normalized course export for CertReady app
// ============================================================
const _elecParts = electricianCourse.parts;
const _elecAllChapters = _elecParts.flatMap((p) => p.chapters);
const _elecTotalChapters = _elecAllChapters.length;
const _elecTotalQuestions = 69; // Questions moved to server/scripts/seedPracticeQuestions.js (practice API)

export const electricianCourseData = {
  id: 'construction-electrician-309a',
  slug: 'construction-electrician-309a',
  title: 'Construction Electrician (Red Seal 309A) Exam Prep',
  subtitle: 'Complete study guide — Red Seal Interprovincial Exam, 100 questions',
  trade: 'Construction Electrician',
  tradeCode: '309A',
  price: 4999, // $49.99 CAD in cents
  currency: 'CAD',
  totalChapters: _elecTotalChapters,
  totalQuestions: _elecTotalQuestions,
  passingMark: 70,
  features: [
    `${_elecTotalChapters} chapters covering all 5 Major Work Activities (MWA)`,
    `${_elecTotalQuestions}+ practice questions with detailed explanations`,
    'Full formulas reference sheet and key terms glossary',
    'Red Seal exam strategy and MWA weighting breakdown',
    'Based on Red Seal Occupational Standard (RSOS) — Construction Electrician 2025',
    'CEC-referenced content throughout',
    'Lifetime access — study at your own pace',
  ],
  parts: _elecParts,
};

// Helper functions for app integration
export function getAllChaptersElec() {
  return _elecAllChapters;
}

export function getChapterByIdElec(id) {
  return _elecAllChapters.find((ch) => ch.id === id) || null;
}

export function getAllPracticeQuestionsElec() {
  return _elecAllChapters.flatMap((ch) => ch.practiceQuestions || []);
}

export function getTotalEstimatedMinutesElec() {
  return _elecAllChapters.reduce((sum, ch) => sum + (ch.estimatedMinutes || 0), 0);
}

export default electricianCourseData;