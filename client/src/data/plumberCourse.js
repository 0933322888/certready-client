// ============================================================
// CertReady — Plumber Course Data
// Based on: Red Seal Occupational Standard (RSOS) – Plumber (2023)
//           and Official Plumber Formulas Reference
// Red Seal Interprovincial Exam: 125 questions
// Apprenticeship: 4 levels, 7200 hours total
// ============================================================

const plumberCourse = {
  meta: {
    trade: 'Plumber',
    redSealCode: '306A',
    totalExamQuestions: 125,
    apprenticeshipLevels: 4,
    totalHours: 7200,
    version: '2023',
    lastUpdated: '2025',
  },

  parts: [
    // ============================================================
    // PART 1 — FOUNDATIONS
    // MWA A: Performs Common Occupational Skills (11%)
    // ============================================================
    {
      id: 'part-1',
      number: 1,
      title: 'Foundations of the Trade',
      description: 'Safety, tools, work organization, and routine trade activities — the backbone of every plumbing job.',
      chapters: [

        // CHAPTER 1 — Safety (MWA A-1) — FREE
        {
          id: 'ch-01',
          number: 1,
          title: 'Safety on the Job',
          subtitle: 'MWA A-1 · Performs Safety-Related Functions (19% of MWA A)',
          isFree: true,
          estimatedMinutes: 45,
          sections: [
            {
              id: 'ch01-s1',
              title: '1.1 The Safe Work Environment',
              content: [
                {
                  type: 'paragraph',
                  text: 'A safe work environment is the foundation of every plumbing job. Plumbers are responsible for identifying, documenting, and correcting worksite hazards before work begins. At journeyperson level, all safety tasks must be performed with minimal direction and in full compliance with federal, provincial/territorial, and site-specific regulations.',
                },
                {
                  type: 'keyTerm',
                  term: 'AHJ (Authority Having Jurisdiction)',
                  definition: 'The organization, office, or individual responsible for enforcing the requirements of a code or standard, or their designated representative.',
                },
                {
                  type: 'keyTerm',
                  term: 'WHMIS (GHS)',
                  definition: 'Workplace Hazardous Materials Information System — Canada\'s national system for communicating chemical hazards through labels and Safety Data Sheets (SDS). Now aligned with the Globally Harmonized System (GHS).',
                },
                {
                  type: 'infoBox',
                  title: 'Common Worksite Hazards in Plumbing',
                  items: [
                    'Poor housekeeping — debris, clutter, and tripping hazards',
                    'Overhead hazards — pipes, beams, and falling objects',
                    'Trenching and shoring hazards — cave-ins and soil instability',
                    'Electrical hazards — proximity to live panels and wiring',
                    'Confined space hazards — limited egress, low oxygen, toxic gas',
                    'Hot work hazards — fire risk from soldering and welding',
                    'Silica and asbestos hazards — disturbing legacy building materials',
                    'Noise hazards — prolonged exposure to power tools and machinery',
                    'Air quality hazards — fumes from solvents, flux, and pipe sealants',
                    'Vibration hazards — prolonged use of power tools',
                    'Falling hazards — working at height on ladders or scaffolding',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'When a worksite hazard is identified, the plumber must mitigate or eliminate it immediately, document the finding, and communicate it to the supervisor and Health and Safety representative. Hazardous materials encountered in plumbing work include thread sealant, cutting oil, glycol, solvents, compressed gas cylinders, and various additives — all of which require WHMIS-compliant handling.',
                },
                {
                  type: 'paragraph',
                  text: 'Professional conduct is also a component of safe work practices. Horseplay, roughhousing, drug and alcohol use, harassment, and inappropriate work attire are all prohibited on a plumbing worksite. Safety regulations include LOTO regulations, jurisdictional health and safety regulations, site-specific regulations, and Transportation of Dangerous Goods (TDG) requirements.',
                },
              ],
            },
            {
              id: 'ch01-s2',
              title: '1.2 Personal Protective Equipment (PPE)',
              content: [
                {
                  type: 'paragraph',
                  text: 'Plumbers must select, inspect, maintain, and correctly use PPE that is appropriate for the specific hazard and application. PPE must be selected according to company policies, AHJ requirements, and the specific work hazards present.',
                },
                {
                  type: 'table',
                  headers: ['PPE Type', 'Application / Hazard Protected Against', 'Key Maintenance Note'],
                  rows: [
                    ['Steel-toed boots (CSA)', 'Crushing, puncture from dropped objects', 'Inspect sole and toe cap regularly'],
                    ['Hard hat', 'Overhead falling objects, impact', 'Replace after any significant impact'],
                    ['Safety glasses / goggles (CSA)', 'Debris, sparks, chemical splashes', 'Replace if scratched or cracked'],
                    ['Hearing protection', 'Noise from power tools, machinery', 'Replace foam inserts regularly'],
                    ['Respirator', 'Fumes (flux, solvents, silica dust, asbestos)', 'Check seal and filter expiry date'],
                    ['Gloves (industrial/rubber)', 'Cuts, chemical exposure, burns', 'Inspect for holes before each use'],
                    ['Face shields', 'Welding flash, grinding sparks, chemical splash', 'Check for cracks and scratches'],
                    ['High-visibility clothing', 'Traffic, moving equipment hazards', 'Wash regularly, replace if faded'],
                    ['Fire-retardant clothing', 'Hot work (welding, brazing)', 'Never launder with fabric softeners'],
                    ['Safety harness & lanyard (CSA)', 'Falls from height', 'Inspect before each use; recertify per AHJ'],
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'Worn, damaged, or defective PPE must be tagged, reported to the supervisor, and removed from service immediately. Training and certification for specific PPE — including fall-arrest systems, confined space equipment, and aerial work platforms — must be current according to AHJ and site requirements.',
                },
                {
                  type: 'infoBox',
                  title: 'Safety Equipment (Beyond PPE)',
                  items: [
                    'Fall-arrest systems — full-body harness, lanyard, anchor point',
                    'Fire extinguishers — required during all hot work operations',
                    'First aid kits — accessible and stocked on every worksite',
                    'Smoke and fume extractors — used during soldering and brazing',
                  ],
                },
              ],
            },
            {
              id: 'ch01-s3',
              title: '1.3 Lock-Out / Tag-Out (LOTO) Procedures',
              content: [
                {
                  type: 'paragraph',
                  text: 'Lock-Out / Tag-Out (LOTO) is a critical safety procedure used to ensure that a plumbing system or piece of equipment is properly shut off, de-energized, and cannot be accidentally restarted while maintenance or repair work is being performed. LOTO protects workers from hazards including electrocution, chemical burns, crushing, pinching, and sudden release of energy.',
                },
                {
                  type: 'keyTerm',
                  term: 'Zero-Energy State',
                  definition: 'The condition in which all forms of energy (electrical, hydraulic, pneumatic, mechanical, thermal, chemical) have been isolated and dissipated so the system cannot move, energize, or release stored energy.',
                },
                {
                  type: 'numbered',
                  items: [
                    'Determine LOTO requirements for system components according to local AHJ, site requirements, and company policies.',
                    'Obtain and install designated LOTO equipment at required locations, as documented by the owner\'s representative.',
                    'Complete and sign off LOTO documentation (permits, toolbox meeting reports, sign-in/sign-out sheets).',
                    'Apply isolation methods to bring the system to a zero-energy state.',
                    'Verify zero-energy state by checking gauges, switches, and sight glasses.',
                    'Perform the required maintenance or repair work.',
                    'Remove lock-out equipment according to procedural guidelines.',
                    'Apply reinstatement methods and procedures to return the system to full energy state.',
                  ],
                },
                {
                  type: 'table',
                  headers: ['LOTO Equipment', 'Purpose'],
                  rows: [
                    ['Lock and key', 'Personal lock applied by each worker; only that worker can remove it'],
                    ['Chains and tags', 'Secure valves or switches in the off/closed position'],
                    ['Lock-out scissor clamps', 'Prevent valves from being turned or levers from being moved'],
                    ['Lock-box', 'Stores multiple locks for multi-trade LOTO on shared equipment'],
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Common Isolation Methods',
                  items: [
                    'Double-block-and-bleed — two valves closed with bleed between them',
                    'Blinding — inserting a physical barrier (blind flange) in the pipe',
                    'Breaker locks — electrical panel breakers locked in the OFF position',
                    'Opening low-point valves to drain and depressurize',
                    'Checking gauges and switches to confirm zero pressure/energy',
                    'Inspecting sight glasses to confirm no fluid flow',
                  ],
                },
              ],
            },
          ],
          practiceQuestions:  [],
        },

        // CHAPTER 2 — Tools & Equipment (MWA A-2)
        {
          id: 'ch-02',
          number: 2,
          title: 'Tools and Equipment',
          subtitle: 'MWA A-2 · Uses and Maintains Tools and Equipment (23% of MWA A)',
          isFree: true,
          estimatedMinutes: 50,
          sections: [
            {
              id: 'ch02-s1',
              title: '2.1 Common Hand and Power Tools',
              content: [
                {
                  type: 'paragraph',
                  text: 'Plumbers use a wide range of hand tools, power tools, measuring tools, and specialty pipe tools. All tools must be used safely, for their intended purpose, and must be inspected before use. Worn, damaged, or defective tools must be tagged, reported to the supervisor, and removed from service.',
                },
                {
                  type: 'table',
                  headers: ['Tool Category', 'Examples', 'Key Safety Hazards'],
                  rows: [
                    ['Hand tools', 'Adjustable wrench, basin wrench, pipe wrench, hacksaw, chisel, caulking gun, chalk line', 'Cuts, pinches, strains from improper use'],
                    ['Power tools', 'Drill, reciprocating saw, angle grinder, power threader, press-fit tool', 'Electrocution, kickback, cuts, burns, debris, projectiles'],
                    ['Measuring tools', 'Tape measure, level, builder\'s level, laser layout tool, caliper', 'Inaccurate measurements leading to material waste'],
                    ['Pipe cutting tools', 'Copper tube cutter, pipe cutter, ratchet cutter, snap cutter, hydraulic pipe cutter', 'Pinch points, sharp edges'],
                    ['Pipe joining tools', 'Pipe threader, press-fit tool, PEX crimper, PEX expander, fusion tool, grooving machine', 'Burns, pinch points, improper joint failure'],
                    ['Oxy-fuel equipment', 'Torch and tips, flashback arrestors, regulators, hoses, gas cylinders', 'Fire, fumes, burns, flash, electrocution'],
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Tool Maintenance Principles',
                  items: [
                    'Perform a visual inspection before using any tool — check for deficiencies or defects (worn, bent, broken, damaged, inoperable)',
                    'Tag defective tools with identification markings (tape, colour codes, tags) and report to supervisor',
                    'Follow scheduled servicing procedures and complete documentation for all tools',
                    'Organize and store tools according to specifications and company policies to prevent damage',
                    'Protect flammable materials when operating heat-generating equipment',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'Oxy-fuel equipment requires special attention. Components include flashback arrestors (to prevent flame from travelling back into the hose), regulators, hoses, strikers, tanks, torch tips, and handles. Flammable materials must be protected or removed from the vicinity of oxy-fuel work, and the work area location must be disarmed within the building\'s safety monitoring system prior to hot work.',
                },
              ],
            },
            {
              id: 'ch02-s2',
              title: '2.2 Access Equipment',
              content: [
                {
                  type: 'paragraph',
                  text: 'Access equipment allows plumbers to work safely at elevation. All access equipment must be visually inspected before and during use, secured properly, and certified according to applicable regulations. Training and certification is required for motorized aerial work platforms (AWPs).',
                },
                {
                  type: 'table',
                  headers: ['Type', 'Examples', 'Key Hazards'],
                  rows: [
                    ['Ladders', 'Stepladders, extension ladders, platform ladders', 'Slip and fall, tipping, excessive load, uneven surfaces, electrocution'],
                    ['Work platforms', 'Scaffolding, tube and clamp', 'Falling objects, missing safety accessories, lack of supervision'],
                    ['Motorized aerial work platforms', 'Scissor lift, articulated boom, personnel basket', 'Pinch points, overhead obstacles, electrocution, uneven surfaces'],
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'Ladders, work platforms, and motorized aerial work platforms must be tagged and reported to the supervisor when worn, damaged, or defective. Certification dates must be current. Ladders must be secured according to safety codes, jurisdictional guidelines, and site-specific requirements.',
                },
              ],
            },
            {
              id: 'ch02-s3',
              title: '2.3 Rigging, Hoisting, Lifting and Positioning Equipment',
              content: [
                {
                  type: 'paragraph',
                  text: 'Plumbers regularly need to move large sections of pipe, prefabricated assemblies, and heavy equipment. This requires knowledge of rigging, hoisting, lifting, and positioning equipment. A lift plan must be developed and communicated to all personnel before any lift begins.',
                },
                {
                  type: 'keyTerm',
                  term: 'Working Load Limit (WLL)',
                  definition: 'The maximum load that rigging, hoisting, lifting, or positioning equipment is rated to handle. Loads must never exceed the WLL. Sling angles affect the effective WLL — the more acute the angle, the lower the effective capacity.',
                },
                {
                  type: 'table',
                  headers: ['Equipment', 'Primary Use'],
                  rows: [
                    ['Block and tackle / chain block', 'Mechanical advantage for lifting heavy loads manually'],
                    ['Come-along / grip hoist', 'Pulling or positioning loads horizontally or at an angle'],
                    ['Wire rope slings / synthetic slings', 'Attaching loads to lifting equipment'],
                    ['Shackles', 'Connecting slings, hooks, and rigging hardware'],
                    ['Forklift / telescopic forklift', 'Moving and placing heavy materials and equipment'],
                    ['Boom truck / mobile crane / tower crane', 'Large lifts requiring certified crane operator'],
                    ['Spreader bar', 'Distributing load across multiple attachment points'],
                    ['Tag line', 'Controlling swing of a load without the worker being under it'],
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Common Knots, Hitches and Bends in Rigging',
                  items: [
                    'Bowline — creates a fixed loop that does not slip under load',
                    'Cat\'s paw — used to attach a sling to a hook',
                    'Clove hitch — secures rope to a cylindrical object',
                    'Half-hitch — simple hitch used to secure rope ends',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'Equipment faults to watch for include rips, tears, cracks, bird-caging (broken wire rope strands splaying outward), frayed wire rope, frayed synthetic slings, worn shackles, hydraulic oil leaks, and missing rating tags. Any such equipment must be tagged and removed from service.',
                },
              ],
            },
            {
              id: 'ch02-s4',
              title: '2.4 Welding, Soldering and Brazing Equipment',
              content: [
                {
                  type: 'paragraph',
                  text: 'Plumbers use various joining techniques that require heat. Welding is used for steel piping in commercial and industrial applications. Soldering (soft solder, up to about 450°C) and brazing (silver solder, above 450°C) are used primarily for copper tube and tubing.',
                },
                {
                  type: 'table',
                  headers: ['Process', 'Equipment / Consumables', 'Typical Application'],
                  rows: [
                    ['SMAW (Shielded Metal Arc Welding)', 'Welding rods, flux, welding machine', 'Steel piping structural welds'],
                    ['GTAW (TIG welding)', 'Tungsten electrode, shielding gas, filler rod', 'High-quality stainless steel and specialty piping'],
                    ['GMAW (MIG welding)', 'Wire feed, shielding gas', 'Carbon and galvanized steel piping'],
                    ['Heat fusion welding', 'Fusion tool, thermoplastic pipe', 'HDPE and PP plastic piping'],
                    ['Soldering', 'Oxy-fuel or air-fuel torch, soft solder, flux', 'Copper domestic water piping'],
                    ['Brazing', 'Oxy-fuel torch, silver solder, flux', 'Refrigeration tubing, high-pressure copper'],
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'Before soldering or brazing copper pipe, the pipe and fittings must be cleaned, flux applied, and the assembly heated evenly. After joining, piping must be purged (inert gas passed through to displace oxygen) to prevent oxidation inside the pipe. The work area safety monitoring system (fire, smoke, and heat hazard detection) must be disarmed by the building operator before hot work begins, and re-armed when complete.',
                },
                {
                  type: 'infoBox',
                  title: 'Soldering & Brazing Consumables',
                  items: [
                    'Silver solder (brazing) — high-strength, used for ACR tubing',
                    'Soft solder (soldering) — lead-free required for potable water (NSF 61)',
                    'Flux — cleans oxide from metal surface and allows solder to flow',
                    'Brazing rod — filler metal for brazing',
                    'Purge gases — nitrogen, argon (inert), used to displace oxygen inside pipe during welding/brazing',
                  ],
                },
              ],
            },
          ],
          practiceQuestions:  [],
        },

        // CHAPTER 3 — Organizing Work & Documentation (MWA A-3)
        {
          id: 'ch-03',
          number: 3,
          title: 'Organizing Work and Documentation',
          subtitle: 'MWA A-3 · Organizes Work (20% of MWA A)',
          isFree: false,
          estimatedMinutes: 40,
          sections: [
            {
              id: 'ch03-s1',
              title: '3.1 Planning and Organizing Project Tasks',
              content: [
                {
                  type: 'paragraph',
                  text: 'Effective work organization is essential for completing plumbing projects on time and within budget. Plumbers must plan task sequences, estimate time and labour, coordinate with other trades, verify that required permits are in place, and adapt to unexpected site conditions.',
                },
                {
                  type: 'infoBox',
                  title: 'Key Planning Considerations',
                  items: [
                    'Safety — hazard assessment before any task begins',
                    'Site layout — understanding the physical constraints of the project',
                    'Crane requirements — coordinating crane time with other trades',
                    'Excavation — scheduling trench work with civil contractors',
                    'Access — ensuring tools, materials, and spool pieces are at the installation location when needed',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'Leadership in Energy and Environmental Design (LEED) procedures are increasingly relevant in plumbing work. LEED encourages water-efficient fixtures, optimized piping layouts to reduce material use, and the use of environmentally friendly products. Plumbers should understand LEED requirements and how their work contributes to building certification points.',
                },
              ],
            },
            {
              id: 'ch03-s2',
              title: '3.2 Technical Documentation',
              content: [
                {
                  type: 'paragraph',
                  text: 'Plumbers work from a variety of technical documents throughout a project — from initial planning to final sign-off. The ability to read, interpret, and create documentation is an essential trade skill.',
                },
                {
                  type: 'table',
                  headers: ['Document Type', 'Purpose / Description'],
                  rows: [
                    ['AFC (Approved for Construction) drawings', 'The final, approved set of drawings used for actual construction'],
                    ['As-built drawings', 'Drawings updated to show the actual installed condition of all systems'],
                    ['Schematics / flow diagrams', 'Simplified visual representation of system flow paths and components'],
                    ['Shop drawings', 'Detailed fabrication drawings produced by the contractor or manufacturer'],
                    ['Specifications', 'Written description of materials, methods, quality, and performance requirements'],
                    ['Work orders', 'Documents authorizing and describing specific work to be performed'],
                    ['Sketches', 'Field drawings created to communicate modifications or repairs on the spot'],
                    ['Maintenance manuals', 'Compiled from product data sheets of installed equipment for the building owner'],
                  ],
                },
                {
                  type: 'keyTerm',
                  term: 'Metric/Imperial Conversion',
                  definition: 'Plumbing work in Canada uses both metric and imperial measurements. Plumbers must be able to convert between systems accurately. Key examples: 1 m = 3.281 ft; 1 mm = 0.03937 in; 1 L = 0.220 imp. gal; 1 kPa = 0.145 psi.',
                },
                {
                  type: 'paragraph',
                  text: 'At project completion, the plumber must submit final documentation — including as-built drawings, maintenance manuals, and any revisions — to the facility manager. This documentation is critical for future maintenance, renovation, and regulatory compliance.',
                },
              ],
            },
          ],
          practiceQuestions:  [],
        },

        // CHAPTER 4 — Routine Trade Activities (MWA A-4)
        {
          id: 'ch-04',
          number: 4,
          title: 'Routine Trade Activities',
          subtitle: 'MWA A-4 · Performs Routine Trade Activities (34% of MWA A)',
          isFree: false,
          estimatedMinutes: 55,
          sections: [
            {
              id: 'ch04-s1',
              title: '4.1 Planning Layout for Piping Systems',
              content: [
                {
                  type: 'paragraph',
                  text: 'Piping layout planning is one of the most important routine trade activities. Plumbers lay out the final positions of fixtures, appliances, pipe, and pipe fittings based on drawings, codes, specifications, AHJ requirements, and actual site conditions. The layout must be coordinated with other trades to avoid interference with ventilation, electrical, and sprinkler systems.',
                },
                {
                  type: 'table',
                  headers: ['Layout Tool', 'Application'],
                  rows: [
                    ['Measuring tape', 'Linear measurements for pipe runs, fixture locations'],
                    ['Level', 'Ensuring pipe is graded correctly (horizontal or sloped)'],
                    ['Builder\'s level / laser level', 'Establishing elevation benchmarks across large areas'],
                    ['Laser layout tool', 'Projecting reference lines for precise pipe alignment'],
                    ['Wraparound', 'Marking cut lines on round pipe to ensure square cuts'],
                    ['Marking tools (chalk line, markers)', 'Transferring layout lines to walls, floors, and ceilings'],
                    ['BIM/modelling software', 'Digital coordination with other trades to detect clashes before installation'],
                  ],
                },
              ],
            },
            {
              id: 'ch04-s2',
              title: '4.2 Calculating Pipe Lengths and Offsets',
              content: [
                {
                  type: 'paragraph',
                  text: 'Accurate pipe length calculations prevent material waste and ensure pipes fit correctly during installation. Plumbers must account for fitting allowances (the amount the pipe travels inside a fitting) and must calculate offsets when pipes must change direction to avoid obstacles.',
                },
                {
                  type: 'keyTerm',
                  term: 'Travel Offset of a 45° Elbow',
                  definition: 'When making an offset with two 45° elbows, the travel (the diagonal length of pipe between the two elbows) equals the offset distance × 1.414 (the square root of 2). This constant comes from the geometry of a 45° right triangle.',
                },
                {
                  type: 'infoBox',
                  title: 'Key Formula: 45° Offset Travel',
                  items: [
                    'Travel = Offset × 1.414',
                    'Example: A 300 mm offset requires a travel of 300 × 1.414 = 424.2 mm',
                    'This constant (1.414) is provided on the official Plumber Formulas reference sheet',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'The grade (slope) of drainage pipe is also a critical calculation. Grade is expressed as a ratio of drop or rise over the run length. For example, a 2% grade means the pipe drops 2 mm for every 100 mm of horizontal run (or 1/4 inch per foot in imperial). Adequate grade is essential for drainage systems to flow by gravity without blockages.',
                },
                {
                  type: 'table',
                  headers: ['Pipe Diameter', 'Minimum Grade (National Plumbing Code)', 'Notes'],
                  rows: [
                    ['Up to 75 mm (3")', '2% (1/4" per foot)', 'Most common residential DWV pipe'],
                    ['80–200 mm (3"–8")', '1% (1/8" per foot)', 'Larger branch drains and building drains'],
                    ['Over 200 mm (8"+)', '0.5% or as engineered', 'Requires engineering review'],
                  ],
                },
              ],
            },
            {
              id: 'ch04-s3',
              title: '4.3 Piping Supports, Sleeves and Fire Stopping',
              content: [
                {
                  type: 'paragraph',
                  text: 'Proper pipe support prevents pipe sag, vibration, and joint stress. Support spacing depends on the pipe material, diameter, contents, and operating temperature. All pipe supports must be installed according to codes and manufacturers\' specifications.',
                },
                {
                  type: 'paragraph',
                  text: 'Piping sleeves are installed through walls, floors, and ceilings before the pipe is run, creating a penetration point that allows for pipe movement and future service access. Where piping passes through fire separations (walls, floors, and assemblies rated for fire resistance), approved fire stopping devices and materials must be installed to maintain the fire rating of the assembly.',
                },
                {
                  type: 'keyTerm',
                  term: 'Fire Stopping',
                  definition: 'A system of materials and devices installed around piping and other service penetrations through fire separations to prevent the spread of fire and smoke through the opening. Required by building and plumbing codes wherever piping penetrates a fire-rated assembly.',
                },
                {
                  type: 'infoBox',
                  title: 'Commissioning Systems',
                  items: [
                    'Commissioning is the process of testing, adjusting, and verifying that a plumbing system operates as designed before handover to the owner',
                    'Includes pressure testing, flow testing, and system balancing',
                    'All test results must be documented and submitted with final project documentation',
                    'Plumbers must coordinate commissioning with other trades and the building owner',
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
    // PART 2 — PIPE PREPARATION AND JOINING
    // MWA B: Prepares and Assembles Tube, Tubing and Pipe (10%)
    // ============================================================
    {
      id: 'part-2',
      number: 2,
      title: 'Pipe Preparation and Joining',
      description: 'Cutting, bending, and joining all pipe materials — the hands-on core of plumbing installation.',
      chapters: [

        // CHAPTER 5 — Pipe Preparation (MWA B-6)
        {
          id: 'ch-05',
          number: 5,
          title: 'Preparing Tube, Tubing and Pipe',
          subtitle: 'MWA B-6 · Task B-6: Prepares Tube, Tubing and Pipe (46% of MWA B)',
          isFree: false,
          estimatedMinutes: 45,
          sections: [
            {
              id: 'ch05-s1',
              title: '5.1 Inspecting Pipe and Fittings Before Installation',
              content: [
                {
                  type: 'paragraph',
                  text: 'All pipe, tubing, and fittings must be inspected before installation to confirm they meet specifications, are free of defects, and are appropriate for the application. Defective materials must be identified and set aside — installing substandard pipe can lead to system failures, leaks, and costly repairs.',
                },
                {
                  type: 'infoBox',
                  title: 'What to Check During Inspection',
                  items: [
                    'Material type — confirm correct pipe material (copper, PVC, CPVC, PEX, steel, cast iron)',
                    'Dimensions — confirm correct diameter (nominal size) and wall thickness (schedule or SDR rating)',
                    'Defects — check for cracks, dents, ovality (out-of-round), gouges, and surface damage',
                    'Fittings — confirm correct type, size, and pressure rating; check for cracks or casting defects',
                    'Markings — confirm NSF, ASTM, CSA, or other required certifications are marked on pipe',
                    'Condition of joining surfaces — socket ends, threaded ends, and groove profiles',
                  ],
                },
              ],
            },
            {
              id: 'ch05-s2',
              title: '5.2 Cutting Pipe',
              content: [
                {
                  type: 'paragraph',
                  text: 'Accurate cutting is essential for proper fitting engagement and leak-free joints. The pipe must be cut square (perpendicular to the pipe axis) and deburred after cutting.',
                },
                {
                  type: 'table',
                  headers: ['Pipe Material', 'Cutting Tool(s)', 'Key Notes'],
                  rows: [
                    ['Copper tube', 'Copper tube cutter, hacksaw', 'Deburr and ream ID after cutting; remove all burrs to prevent turbulence and erosion'],
                    ['PVC / CPVC', 'Plastic tube cutter, ratchet cutter, hacksaw, miter saw', 'Cut must be square; clean and dry before cementing'],
                    ['PEX tubing', 'PEX cutter (D-blade), ratchet cutter', 'Cut must be square for proper insert or expansion fitting engagement'],
                    ['Black/galvanized steel', 'Power pipe threader with cutter, reciprocating saw, cut-off grinder', 'Protect galvanized coating at cut end if possible'],
                    ['Cast iron', 'Snap cutter (chain cutter), angle grinder with diamond blade', 'Snap cutter scores around circumference; manual or hydraulic'],
                    ['HDPE', 'Fusion saw, reciprocating saw', 'Cut must be square for fusion joining'],
                  ],
                },
              ],
            },
            {
              id: 'ch05-s3',
              title: '5.3 Bending Pipe and Tubing',
              content: [
                {
                  type: 'paragraph',
                  text: 'Pipe bending reduces the number of fittings required, lowering material costs and reducing potential leak points. It is most commonly applied to soft copper tube (Type K and L), electrical metallic tubing (EMT in related trades), and PEX tubing.',
                },
                {
                  type: 'paragraph',
                  text: 'When bending copper tube, the tube must be supported throughout the bend radius to prevent kinking. Spring benders (internal or external) or mechanical tube benders are used. The minimum bend radius depends on the tube diameter — too tight a bend causes kinking and flow restriction.',
                },
                {
                  type: 'infoBox',
                  title: 'Preparing Tube and Pipe Connections',
                  items: [
                    'After cutting copper tube: ream the inside diameter (ID) to remove burrs, clean outside with sand cloth or fitting brush',
                    'For soldering: apply flux to both the outside of the tube and inside of the fitting socket',
                    'For threading steel pipe: cut threads with a pipe die to the correct taper per ASME standards; apply thread sealant',
                    'For PVC cementing: clean and prime both surfaces; apply cement and assemble within open time',
                    'For press fittings: ensure pipe is fully inserted and mark is visible; use correct jaw for pipe material and size',
                    'For PEX crimp or clamp: use appropriate tool for fitting style (crimp ring vs. clamp ring vs. expansion)',
                  ],
                },
              ],
            },
          ],
          practiceQuestions:  [],
        },

        // CHAPTER 6 — Joining Pipe (MWA B-7)
        {
          id: 'ch-06',
          number: 6,
          title: 'Joining Tube, Tubing and Pipe',
          subtitle: 'MWA B-7 · Task B-7: Joins Tube, Tubing and Pipe (54% of MWA B)',
          isFree: false,
          estimatedMinutes: 55,
          sections: [
            {
              id: 'ch06-s1',
              title: '6.1 Joining Copper Tube and Tubing',
              content: [
                {
                  type: 'paragraph',
                  text: 'Copper is one of the most widely used pipe materials in plumbing due to its corrosion resistance, durability, and long service life. Copper tube is available in several types (K, L, M, DWV) with different wall thicknesses suited to different applications.',
                },
                {
                  type: 'table',
                  headers: ['Joint Type', 'Method', 'Application'],
                  rows: [
                    ['Sweat (solder)', 'Heat with torch; capillary action draws solder into gap', 'Domestic cold and hot water, gas (with appropriate solder/flux)'],
                    ['Brazed', 'Higher heat; silver solder drawn into gap', 'ACR tubing, high-pressure, refrigeration'],
                    ['Press fitting', 'Hydraulic press tool crimps the fitting onto pipe', 'Fast installation; no open flame; approved for gas in some jurisdictions'],
                    ['Compression', 'Ferrule and nut compress mechanically onto pipe OD', 'Fixture connections, appliance connections, exposed service lines'],
                    ['Flare', 'Tube end flared at 45°; flare nut seals against fitting seat', 'ACR tubing, gas appliance connections'],
                    ['Push-to-connect', 'Pipe inserted into fitting; grab ring and O-ring seal', 'Quick repairs; accessible locations only in some codes'],
                  ],
                },
              ],
            },
            {
              id: 'ch06-s2',
              title: '6.2 Joining Plastic Tube and Pipe',
              content: [
                {
                  type: 'paragraph',
                  text: 'Plastic piping materials offer corrosion resistance, light weight, and ease of installation. Different plastics use different joining methods — it is critical to use the correct method and materials for each pipe type.',
                },
                {
                  type: 'table',
                  headers: ['Plastic Type', 'Common Use', 'Joining Methods'],
                  rows: [
                    ['PVC (Polyvinyl Chloride)', 'DWV, cold water, irrigation', 'Solvent cement (primer + cement)'],
                    ['CPVC (Chlorinated PVC)', 'Hot and cold potable water', 'Solvent cement (CPVC-specific cement)'],
                    ['ABS (Acrylonitrile Butadiene Styrene)', 'DWV systems', 'ABS cement or ABS-to-PVC transition cement'],
                    ['PEX (Cross-linked Polyethylene)', 'Hot and cold potable water, hydronic radiant', 'Crimp, clamp, press, or expansion (PEX-A)'],
                    ['HDPE (High-Density Polyethylene)', 'Water mains, sewers, forcemains', 'Butt fusion, electrofusion, mechanical couplings'],
                    ['PP (Polypropylene)', 'Chemical drainage, some water', 'Heat fusion (butt or socket)'],
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Coefficient of Linear Expansion — Why It Matters',
                  items: [
                    'Plastic pipe expands and contracts significantly more than metal with temperature changes',
                    'ABS: 0.0000990 per 1°C (highest expansion rate)',
                    'PVC: 0.0000594 per 1°C',
                    'Copper: 0.0000171 per 1°C',
                    'Steel: 0.0000120 per 1°C',
                    'Expansion = Length × Temperature Difference × Coefficient (L × ΔT × α)',
                    'Expansion loops, expansion joints, or offset hangers must be provided for long plastic runs',
                  ],
                },
              ],
            },
            {
              id: 'ch06-s3',
              title: '6.3 Joining Steel and Cast Iron Pipe',
              content: [
                {
                  type: 'paragraph',
                  text: 'Steel pipe (black or galvanized) is used in fire protection, gas distribution, steam, and hydronic heating systems. Cast iron is used primarily for DWV systems where sound attenuation (noise reduction) is important, such as in multi-storey residential buildings.',
                },
                {
                  type: 'table',
                  headers: ['Joint Type', 'Pipe Type', 'Application'],
                  rows: [
                    ['Threaded', 'Steel', 'Gas lines, sprinkler systems, general piping — threads cut to ASME/ANSI taper'],
                    ['Flanged', 'Steel', 'Equipment connections, valves, large diameter piping requiring periodic disassembly'],
                    ['Welded', 'Steel', 'High-pressure, high-temperature, structural piping — certified welder may be required'],
                    ['Grooved (Victaulic-style)', 'Steel, ductile iron', 'Mechanical groove coupling; fast, flexible; used in sprinkler and HVAC systems'],
                    ['Press-fit', 'Steel', 'Carbon steel press fittings; no flame; increasingly common'],
                    ['No-hub coupling', 'Cast iron', 'Neoprene gasket and band clamp; used for DWV cast iron joints'],
                    ['Hub and spigot (lead and oakum)', 'Cast iron', 'Legacy/heritage joints; rarely used in new construction'],
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'When identifying steel pipe type, the identification system includes pipe schedule (Schedule 40, 80, 160), pipe grade (carbon steel, stainless steel, galvanized steel), and wall thickness. Accessories for steel pipe include supports, hangers, and sleeves — all of which must be selected to be compatible with the pipe material to prevent dielectric corrosion at metal interfaces.',
                },
              ],
            },
          ],
          practiceQuestions:  [],
        },
      ],
    },

    // ============================================================
    // PART 3 — DWV SYSTEMS
    // MWA C: Installs, Tests and Services DWV Systems (26%)
    // ============================================================
    {
      id: 'part-3',
      number: 3,
      title: 'Drainage, Waste, and Vent Systems',
      description: 'The largest portion of the Red Seal exam — DWV design, installation, testing, and service.',
      chapters: [

        // CHAPTER 7 — Sewers (MWA C-8)
        {
          id: 'ch-07',
          number: 7,
          title: 'Sewers and Sewage Treatment Systems',
          subtitle: 'MWA C-8 & C-9 · Installs, Tests and Services Sewers (20% of MWA C) and Sewage Treatment (17% of MWA C)',
          isFree: false,
          estimatedMinutes: 50,
          sections: [
            {
              id: 'ch07-s1',
              title: '7.1 Sewer Layout and Sizing',
              content: [
                {
                  type: 'paragraph',
                  text: 'Sewers convey sewage, stormwater, and clear-water waste from buildings to a public sewer system or private sewage disposal system. Plumbers plan the layout and size piping for sewers based on the expected flow volumes, pipe grades, and the requirements of the applicable codes.',
                },
                {
                  type: 'keyTerm',
                  term: 'Sanitary Sewer',
                  definition: 'A sewer that conducts sewage (liquid waste other than clear-water waste or storm water) to a treatment plant or private treatment system.',
                },
                {
                  type: 'keyTerm',
                  term: 'Storm Sewer',
                  definition: 'A sewer that conveys storm water (rain, snow melt) from roofs, parking areas, and paved surfaces to a suitable outlet such as a waterway or retention pond.',
                },
                {
                  type: 'keyTerm',
                  term: 'Maintenance Hole (formerly Manhole)',
                  definition: 'An opening to a confined space that allows access to underground piping for inspection, maintenance, and system upgrades.',
                },
                {
                  type: 'paragraph',
                  text: 'Sewer pipe sizing uses the concept of flow and pipe capacity at the required grade. Deeper sewers in urban areas require careful layout to connect at the right elevation. Thrust blocks — formed concrete blocks — are required at bends and changes of direction in buried pressure piping to resist the hydraulic thrust force at fittings.',
                },
              ],
            },
            {
              id: 'ch07-s2',
              title: '7.2 Sewage Treatment Systems',
              content: [
                {
                  type: 'paragraph',
                  text: 'In areas without access to a municipal sewer, private sewage treatment systems must be installed to treat and safely dispose of building sewage. Plumbers plan, install, test, and service these systems.',
                },
                {
                  type: 'table',
                  headers: ['Component', 'Function'],
                  rows: [
                    ['Septic tank', 'Anaerobic digestion of solids; separates solids from liquid effluent'],
                    ['Distribution box', 'Distributes effluent equally to each arm of the leaching field'],
                    ['Leaching chamber / absorption field', 'Allows treated effluent to percolate into the ground'],
                    ['Lift station / pump', 'Pumps sewage when gravity flow is not possible'],
                    ['Backwater valve', 'Prevents sewage from flowing back into the building during high flows'],
                    ['Alarm / sensor', 'Alerts when liquid levels in holding tanks reach a set point'],
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'Environmental and health impacts are a major concern during installation and servicing of sewage treatment systems. Plumbers must observe all personal protective equipment requirements and follow waste disposal procedures to prevent contamination of soil and groundwater.',
                },
              ],
            },
          ],
          practiceQuestions:  [],
        },

        // CHAPTER 8 — Interior DWV Systems (MWA C-10)
        {
          id: 'ch-08',
          number: 8,
          title: 'Interior Drainage, Waste and Vent (DWV) Systems',
          subtitle: 'MWA C-10 · Installs, Tests and Services Interior DWV Systems (63% of MWA C)',
          isFree: false,
          estimatedMinutes: 65,
          sections: [
            {
              id: 'ch08-s1',
              title: '8.1 Understanding the DWV System',
              content: [
                {
                  type: 'paragraph',
                  text: 'The interior drainage, waste, and vent (DWV) system is the system of pipes and fittings inside a building that collects sewage and wastewater from plumbing fixtures and conveys it by gravity to the building drain and sewer. The venting system connects the drainage system to outside air to protect trap seals and allow proper air circulation.',
                },
                {
                  type: 'keyTerm',
                  term: 'Trap',
                  definition: 'A fitting or device designed to hold a liquid seal that prevents the passage of sewer gas into the building, without materially affecting the flow of liquid. Every fixture must be individually trapped.',
                },
                {
                  type: 'keyTerm',
                  term: 'Fixture Unit (Drainage)',
                  definition: 'A unit of measure based on the rate of discharge, time of operation, and frequency of use of a fixture that expresses the hydraulic load imposed by that fixture on the drainage system. Used to size drain pipes and the building drain.',
                },
                {
                  type: 'keyTerm',
                  term: 'Cleanout',
                  definition: 'An access point provided in drainage and venting systems to allow for cleaning and inspection. Required at all changes of direction greater than 45°, at the base of each vertical stack, and at specific intervals of horizontal run.',
                },
                {
                  type: 'table',
                  headers: ['DWV Component', 'Function / Description'],
                  rows: [
                    ['Building drain', 'Lowest horizontal pipe of the drainage system inside the building; connects to the building sewer at the foundation wall'],
                    ['Building sewer', 'Pipe from the building to the public sewer or private disposal system'],
                    ['Soil stack / waste stack', 'Vertical pipe that receives discharge from water closets (soil) or other fixtures (waste)'],
                    ['Vent stack', 'Vertical vent pipe extending through the roof to atmosphere; terminates above roof'],
                    ['Branch drain', 'Horizontal pipe connecting one or more fixtures to a stack or building drain'],
                    ['Trap arm', 'Pipe between the trap weir and the vent connection or drain connection'],
                    ['P-trap', 'Most common trap type; used under sinks, lavatories, bathtubs'],
                    ['Floor drain trap', 'Installed in floors; requires periodic priming to maintain water seal'],
                  ],
                },
              ],
            },
            {
              id: 'ch08-s2',
              title: '8.2 DWV Layout, Sizing and Installation',
              content: [
                {
                  type: 'paragraph',
                  text: 'DWV system layout requires careful planning to achieve proper grades for drainage while fitting within the structural and architectural constraints of the building. Pipes must be sized to handle peak demand and must be vented to prevent pressure differentials that could siphon trap seals.',
                },
                {
                  type: 'paragraph',
                  text: 'Underground DWV piping is installed first, in coordination with the concrete slab. Above-ground DWV piping is installed as the building is framed, working from the bottom up — building drain first, then vertical stacks, then horizontal branches to fixtures. All horizontal drains must be graded toward the drain; all vertical pipes must be plumb.',
                },
                {
                  type: 'infoBox',
                  title: 'DWV Fittings vs. Pressure Fittings',
                  items: [
                    'DWV fittings have longer-radius curves (sweeping elbows) to promote smooth flow and prevent blockages',
                    'Pressure fittings (used in water distribution) have sharp bends and would cause blockages if used in drainage',
                    'DWV fittings are directional — they must be installed to flow in the correct direction of the drainage grade',
                    'Long-sweep elbows are used for horizontal-to-horizontal changes of direction',
                    'Short-pattern fittings may only be used in specific applications as permitted by code',
                  ],
                },
              ],
            },
            {
              id: 'ch08-s3',
              title: '8.3 Testing and Servicing DWV Systems',
              content: [
                {
                  type: 'paragraph',
                  text: 'DWV systems must be tested before walls and ceilings are closed in. The two primary tests are the water test and the air test.',
                },
                {
                  type: 'table',
                  headers: ['Test Method', 'Procedure', 'Pass Criteria'],
                  rows: [
                    ['Water test', 'Plug all openings; fill system to overflow level of highest fixture or 3 m head; hold for 15 minutes minimum', 'No visible leaks or drop in water level beyond normal absorption'],
                    ['Air test', 'Plug all openings; pressurize to 35 kPa (5 psi); hold for 15 minutes', 'No pressure drop detected on gauge'],
                    ['Smoke test', 'Introduce non-toxic smoke or peppermint oil; pressurize slightly', 'No smoke visible at joints, connections, or fixture locations — used to find leaks and cross-connections'],
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'Common DWV service issues include blocked drains (from grease, hair, or solid accumulation), cracked pipes, deteriorated joints, siphoned trap seals, and inadequate venting. Sensory inspection — using sight, sound, smell, and touch — is the first step in diagnosing a drainage problem.',
                },
              ],
            },
          ],
          practiceQuestions:  [],
        },
      ],
    },

    // ============================================================
    // PART 4 — WATER SYSTEMS
    // MWA D: Installs, Tests and Services Water Service and Distribution (19%)
    // ============================================================
    {
      id: 'part-4',
      number: 4,
      title: 'Water Service and Distribution',
      description: 'Bringing potable water into the building and distributing it safely to every fixture and appliance.',
      chapters: [

        // CHAPTER 9 — Water Service and Distribution (MWA D-11, D-12, D-13)
        {
          id: 'ch-09',
          number: 9,
          title: 'Water Service and Potable Water Distribution',
          subtitle: 'MWA D-11, D-12 & D-13 · Water Service (24%), Potable Water Distribution (49%), Private Water Pressure (27%)',
          isFree: false,
          estimatedMinutes: 60,
          sections: [
            {
              id: 'ch09-s1',
              title: '9.1 Water Service',
              content: [
                {
                  type: 'paragraph',
                  text: 'The water service is the pipe that conveys water from the public water main (or private water source) to the inside of a building, up to and including the main isolation valve. It is the plumber\'s responsibility to ensure the water service is properly sized, protected from freezing, and installed according to the National Plumbing Code and AHJ requirements.',
                },
                {
                  type: 'keyTerm',
                  term: 'Water Service Pipe',
                  definition: 'The pipe that conveys water from a public water main or private water source to the inside of a building up to and including the main isolation valve.',
                },
                {
                  type: 'infoBox',
                  title: 'Water Service Installation Requirements',
                  items: [
                    'Minimum burial depth — below the frost line (varies by region; typically 1.5–2.5 m in Ontario)',
                    'Pipe material — must be rated for potable water (copper, PE, PVC, ductile iron are common)',
                    'Backfill — pipe must be bedded and backfilled with clean material free of rocks and debris',
                    'Isolation valve — main shut-off valve required at the point of entry into the building',
                    'Corporation stop — the connection at the water main (installed by the municipality)',
                    'Curb stop — shut-off valve at the property line, in a curb box',
                    'Pressure reducing valve (PRV) — required when service pressure exceeds the maximum allowed by code (typically 550 kPa or 80 psi in Canada)',
                  ],
                },
              ],
            },
            {
              id: 'ch09-s2',
              title: '9.2 Potable Water Distribution — Sizing and Design',
              content: [
                {
                  type: 'paragraph',
                  text: 'The potable water distribution system conveys water from the water service pipe to every outlet, fixture, appliance, and device in the building. Proper sizing is critical — undersized pipes cause inadequate pressure and flow at fixtures; oversized pipes waste materials and can promote stagnation.',
                },
                {
                  type: 'keyTerm',
                  term: 'Fixture Unit (Water Supply)',
                  definition: 'A unit of measure based on the rate of supply, time of operation, and frequency of use of a fixture or outlet that expresses the hydraulic load imposed by that fixture on the water distribution system.',
                },
                {
                  type: 'paragraph',
                  text: 'Pipe sizing for water distribution accounts for: total fixture units, developed length of pipe (the actual pipe length including equivalent lengths for fittings and valves), the most remote outlet, elevation difference (each metre of height requires approximately 9.8 kPa additional pressure), available system pressure, velocity limits, and friction loss through the pipe.',
                },
                {
                  type: 'table',
                  headers: ['Factor', 'Impact on Sizing'],
                  rows: [
                    ['Total fixture units', 'Higher fixture unit count requires larger pipe diameter'],
                    ['Developed length', 'Longer runs cause more friction loss — require larger pipe'],
                    ['Elevation difference', 'Upward flow loses pressure (1 m ≈ 9.8 kPa); downward flow gains pressure'],
                    ['Available system pressure', 'Higher supply pressure allows longer runs and smaller pipe'],
                    ['Velocity', 'Maximum velocity typically 2.4 m/s (cold) to 1.5 m/s (hot) to prevent noise and erosion'],
                    ['Cross connection devices', 'Backflow preventers cause pressure loss — account for in design'],
                  ],
                },
              ],
            },
            {
              id: 'ch09-s3',
              title: '9.3 Cross Connection Control',
              content: [
                {
                  type: 'paragraph',
                  text: 'A cross connection is any actual or potential connection between a potable water source and a non-potable water source. Cross connections are one of the most serious public health hazards in plumbing. The National Plumbing Code requires backflow prevention at all potential cross connection points.',
                },
                {
                  type: 'keyTerm',
                  term: 'Backflow',
                  definition: 'The flowing back or reversal of the normal direction of flow in a water supply system. Caused by back-pressure (downstream pressure exceeds supply) or back-siphonage (negative pressure in the supply).',
                },
                {
                  type: 'keyTerm',
                  term: 'Backflow Preventer',
                  definition: 'A device used to prevent backflow. Types include air gaps, vacuum breakers, double check valves, and reduced-pressure backflow preventers — selected based on the degree of hazard.',
                },
                {
                  type: 'table',
                  headers: ['Device', 'Application', 'Protection Level'],
                  rows: [
                    ['Air gap', 'Minimum unobstructed vertical distance between water outlet and flood rim of receiving vessel', 'Highest — no physical connection'],
                    ['Atmospheric vacuum breaker (AVB)', 'Hose bibs, irrigation outlets', 'Back-siphonage only; cannot be installed under continuous pressure'],
                    ['Pressure vacuum breaker (PVB)', 'Irrigation systems, can remain under continuous pressure', 'Back-siphonage; installed minimum 300 mm above highest outlet'],
                    ['Double check valve (DCV)', 'Low-hazard commercial connections', 'Back-pressure and back-siphonage; testable'],
                    ['Reduced-pressure backflow preventer (RPBFP)', 'High-hazard connections (chemicals, reclaimed water, industrial)', 'Highest mechanical protection; requires annual testing and certification'],
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'In some jurisdictions, additional training and certification is required to install and certify cross connection control devices. Annual testing and recertification of testable devices (DCV, RPBFP) is required by most authorities.',
                },
              ],
            },
            {
              id: 'ch09-s4',
              title: '9.4 Private Water Pressure Systems',
              content: [
                {
                  type: 'paragraph',
                  text: 'In rural areas without access to a municipal water supply, private water pressure systems supply potable water from a well or other private source. These systems consist of a submersible or jet pump, pressure tank, and associated piping and controls.',
                },
                {
                  type: 'keyTerm',
                  term: 'Pitless Adaptor',
                  definition: 'A fitting that allows connection to and removal of a submersible pump from a well casing without the need for tools or entering a confined space. The adaptor creates a watertight, insulated connection through the well casing.',
                },
                {
                  type: 'keyTerm',
                  term: 'Torque Arrestor',
                  definition: 'A device installed on the pump pipe in a well casing that prevents the pipe from spinning when the pump motor starts.',
                },
                {
                  type: 'infoBox',
                  title: 'Pressure Tank Function',
                  items: [
                    'Stores pressurized water to provide flow between pump cycles',
                    'Types: bladder tank (pre-charged with air on one side of a rubber bladder), diaphragm tank, conventional air cushion tank',
                    'Pre-charge pressure should be 2 psi below the pump cut-in pressure (e.g., 28 psi pre-charge if cut-in is 30 psi)',
                    'An undersized or waterlogged tank causes rapid pump cycling, shortening pump life',
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
    // PART 5 — FIXTURES, APPLIANCES AND WATER TREATMENT
    // MWA E: Installs, Tests and Services Fixtures, Appliances and Water Treatment (13%)
    // ============================================================
    {
      id: 'part-5',
      number: 5,
      title: 'Fixtures, Appliances and Water Treatment',
      description: 'Installing and servicing the plumbing fixtures, appliances, and water treatment equipment that residents and building occupants interact with every day.',
      chapters: [

        // CHAPTER 10 — Fixtures and Appliances (MWA E-14, E-15)
        {
          id: 'ch-10',
          number: 10,
          title: 'Plumbing Fixtures, Appliances and Water Treatment',
          subtitle: 'MWA E-14 (63% of MWA E) & E-15 · Installs, Tests and Services Fixtures, Appliances and Water Treatment Systems',
          isFree: false,
          estimatedMinutes: 55,
          sections: [
            {
              id: 'ch10-s1',
              title: '10.1 Plumbing Fixtures and Appliances',
              content: [
                {
                  type: 'paragraph',
                  text: 'A plumbing fixture is a receptacle, appliance, apparatus, or other device that discharges sewage or clear-water waste and is connected to the plumbing system. A plumbing appliance is a piece of equipment that may require connection to the plumbing system. Plumbers install backing and supports before fixtures to ensure structural integrity.',
                },
                {
                  type: 'table',
                  headers: ['Fixture / Appliance', 'Water Supply', 'Drainage Required', 'Key Considerations'],
                  rows: [
                    ['Water closet (toilet)', 'Cold water', 'Yes', 'Flush volume: 4.8 L or 6 L max per flush (NPC)'],
                    ['Lavatory (bathroom sink)', 'Hot and cold', 'Yes', 'P-trap and pop-up drain assembly'],
                    ['Kitchen sink', 'Hot and cold', 'Yes', 'Garbage disposal connection if applicable'],
                    ['Bathtub / shower', 'Hot and cold', 'Yes', 'Shower valve thermostatic or pressure-balancing required'],
                    ['Water heater', 'Cold supply, hot outlet', 'Relief valve drain', 'Temperature and pressure relief (TPR) valve required'],
                    ['Dishwasher', 'Hot water', 'Yes (air gap or high loop)', 'Air gap required on drain in many jurisdictions'],
                    ['Washing machine', 'Hot and cold', 'Standpipe and trap', 'Standpipe height 600–900 mm above trap weir'],
                    ['Water softener', 'Bypass valve, drain', 'Brine drain required', 'Must have air gap on drain connection'],
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'Installing fixture supports is the first step. Backing is a layer of material that forms, protects, and strengthens the support for plumbing fixtures and equipment. This is especially important for wall-hung fixtures (water closets, urinals, lavatories) which require carrier assemblies anchored to the building structure.',
                },
              ],
            },
            {
              id: 'ch10-s2',
              title: '10.2 Water Treatment Systems',
              content: [
                {
                  type: 'paragraph',
                  text: 'Water treatment systems improve water quality by removing or reducing contaminants. Common water quality issues in Canadian buildings include hardness (calcium and magnesium), iron, sediment, chlorine taste and odour, microbiological contamination, and pH imbalance.',
                },
                {
                  type: 'keyTerm',
                  term: 'Water Hardness',
                  definition: 'The concentration of dissolved calcium and magnesium in water, expressed in grains per gallon (gpg) or parts per million (ppm). Hard water (above ~7 gpg) causes scale buildup in pipes and appliances and reduces soap lathering. Convert: 1 gpg = 17.12 ppm.',
                },
                {
                  type: 'table',
                  headers: ['Treatment Type', 'Contaminant Removed / Reduced', 'Key Calculation'],
                  rows: [
                    ['Water softener (ion exchange)', 'Hardness (calcium, magnesium) and some iron', 'Grains to remove = persons × gpd × (hardness gpg + iron concentration) × regeneration days'],
                    ['Carbon filtration', 'Chlorine, taste, odour, some organic compounds', 'Flow rate and contact time determine filter size'],
                    ['Sediment filtration', 'Suspended solids, turbidity', 'Micron rating and flow rate'],
                    ['Ultraviolet (UV) disinfection', 'Microbiological (bacteria, viruses, cysts)', 'Flow rate determines UV dose (mJ/cm²)'],
                    ['Reverse osmosis (RO)', 'Wide range including nitrates, heavy metals, TDS', 'Recovery rate and rejection rate'],
                    ['Acid neutralizer', 'Low pH (acidic water)', 'Volume of calcite media required'],
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'Water softener sizing requires calculating the total grains of hardness to be removed between regeneration cycles. This calculation uses the number of persons in the household, gallons per day of water use, the hardness in grains per gallon (including an iron factor), and the number of days between regenerations.',
                },
                {
                  type: 'infoBox',
                  title: 'Water Softener Grains Formula',
                  items: [
                    'Grains to remove = (persons × gallons per day) × (hardness in gpg + iron concentration) × days between regeneration',
                    'Grains removal rate = water usage × grains per gallon × regeneration efficiency value',
                    'Example: 4 persons × 75 gpd × (15 gpg + 1 gpg iron) × 7 days = 33,600 grains capacity required',
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
    // PART 6 — HYDRONIC AND SPECIALIZED SYSTEMS
    // MWA F: Low-Pressure Steam and Hydronic Systems (13%)
    // MWA G: Specialized Systems (8%)
    // ============================================================
    {
      id: 'part-6',
      number: 6,
      title: 'Hydronic Heating/Cooling and Specialized Systems',
      description: 'Hydronic heating and cooling systems, and the specialized systems that expand the modern plumber\'s scope of work.',
      chapters: [

        // CHAPTER 11 — Hydronic Systems (MWA F-17, F-18)
        {
          id: 'ch-11',
          number: 11,
          title: 'Hydronic Systems',
          subtitle: 'MWA F-17 (58% of MWA F) & F-18 (42% of MWA F) · Installs, Tests and Services Hydronic Systems and Equipment',
          isFree: false,
          estimatedMinutes: 65,
          sections: [
            {
              id: 'ch11-s1',
              title: '11.1 Hydronic System Fundamentals',
              content: [
                {
                  type: 'paragraph',
                  text: 'A hydronic system uses water (or water-glycol mixtures) as the heat transfer medium to distribute heating or cooling energy throughout a building. Hydronic systems are highly efficient, quiet, and provide excellent comfort. Plumbers install, test, and service both hydronic heating and cooling systems.',
                },
                {
                  type: 'keyTerm',
                  term: 'Point of No Pressure Change',
                  definition: 'The location in a hydronic system where the expansion tank connects to the system piping. At this point, the circulator pump neither adds to nor subtracts from the static fill pressure. The expansion tank should be placed close to the circulator pump inlet for proper system pressurization.',
                },
                {
                  type: 'table',
                  headers: ['Piping System Design', 'Description', 'Advantage / Application'],
                  rows: [
                    ['One-pipe series loop', 'Single pipe loop; each terminal unit is in series', 'Simple; lower cost; last unit receives coolest water'],
                    ['Two-pipe direct return', 'Supply and return mains; first unit is nearest', 'Unbalanced flow; balancing valves required'],
                    ['Two-pipe reverse return', 'Supply and return mains; equal total circuit lengths', 'Inherently balanced; preferred for multi-zone systems'],
                    ['Three-pipe', 'Two supply pipes (hot and cool), one common return', 'Simultaneous heating and cooling; wasteful'],
                    ['Four-pipe', 'Separate hot and cold supply and return', 'Full simultaneous heating and cooling capability'],
                    ['Primary/secondary', 'Primary pump circulates through boiler/chiller; secondary pumps serve zones', 'Decouples zone demands from heat source'],
                  ],
                },
              ],
            },
            {
              id: 'ch11-s2',
              title: '11.2 Hydronic System Components',
              content: [
                {
                  type: 'paragraph',
                  text: 'Hydronic systems consist of a heat source (boiler or heat pump), distribution piping, terminal heat transfer units, and various control and safety devices. Each component must be selected, installed, and tested correctly.',
                },
                {
                  type: 'table',
                  headers: ['Component', 'Function', 'Key Specification'],
                  rows: [
                    ['Circulator pump', 'Moves water through the system at the required flow rate', 'Sized for GPM flow and head pressure (in feet of water)'],
                    ['Expansion tank (bladder)', 'Accommodates thermal expansion of water; maintains system pressure', 'Pre-charge pressure = 2 psi below fill pressure; sized for system volume and temperature range'],
                    ['Air removal device (air separator, air vent)', 'Removes dissolved and free air from the system', 'Installed at highest points and on pump discharge'],
                    ['Pressure relief valve', 'Protects system from overpressure — opens and discharges at set pressure', 'Required on every closed hydronic system'],
                    ['Thermostatic radiator valve (TRV)', 'Controls flow to individual radiators based on room temperature', 'Self-actuating; no electricity required'],
                    ['Balancing valve', 'Adjusts flow to each circuit to achieve design flow rates', 'Set with flow measurement and balancing tools'],
                    ['Dirt separator / strainer', 'Removes magnetite and debris from system water', 'Prevents pump and valve damage; essential in new systems'],
                    ['Radiant floor tubing (PEX)', 'Distributes heat through floor slab or staple-up installation', 'Spacing, flow, and supply temperature determine output'],
                  ],
                },
              ],
            },
            {
              id: 'ch11-s3',
              title: '11.3 Hydronic Thermal Calculations',
              content: [
                {
                  type: 'paragraph',
                  text: 'Sizing hydronic systems requires calculating heat load, flow rate, and temperature differential. The following formulas from the official Plumber Formulas reference sheet are essential for the Red Seal exam.',
                },
                {
                  type: 'table',
                  headers: ['Formula', 'Variables', 'Use'],
                  rows: [
                    ['ΔT = Btuh ÷ (500 × gpm)', 'Btuh = heat output; gpm = flow rate; ΔT = temperature difference', 'Find temperature drop across a terminal unit or zone'],
                    ['gpm = Btuh ÷ (500 × ΔT)', 'Btuh = heat required; ΔT = supply/return temp difference', 'Find required flow rate for a zone or system'],
                    ['Btuh = gpm × 500 × ΔT', 'gpm = flow rate; ΔT = temperature difference', 'Find heat output of a system or zone'],
                    ['1 ft² EDR = 240 Btuh', 'EDR = Equivalent Direct Radiation (steam/hot water radiator rating)', 'Convert radiator EDR to Btuh output'],
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'The constant 500 in hydronic formulas is derived from: 60 min/hr × 8.33 lb/gal × 1 BTU/lb°F = 499.8 ≈ 500. This constant applies to water. When glycol is added to the system (for freeze protection), the specific heat capacity decreases and the constant must be adjusted.',
                },
                {
                  type: 'infoBox',
                  title: 'Example: Hydronic System Calculation',
                  items: [
                    'Given: A zone requires 24,000 Btuh with a 20°F supply-to-return temperature differential',
                    'Find required flow rate: gpm = Btuh ÷ (500 × ΔT) = 24,000 ÷ (500 × 20) = 24,000 ÷ 10,000 = 2.4 gpm',
                    'Verify: Btuh = gpm × 500 × ΔT = 2.4 × 500 × 20 = 24,000 Btuh ✓',
                  ],
                },
              ],
            },
          ],
          practiceQuestions:  [],
        },

        // CHAPTER 12 — Specialized Systems (MWA G)
        {
          id: 'ch-12',
          number: 12,
          title: 'Specialized Plumbing Systems',
          subtitle: 'MWA G-19, G-20 & G-21 · Installs, Tests and Services Specialized Systems (8% of Red Seal Exam)',
          isFree: false,
          estimatedMinutes: 50,
          sections: [
            {
              id: 'ch12-s1',
              title: '12.1 Overview of Specialized Systems',
              content: [
                {
                  type: 'paragraph',
                  text: 'Specialized plumbing systems extend the plumber\'s scope of work beyond standard water, DWV, and heating systems. These systems require additional knowledge, training, and in some cases specific certifications from the AHJ.',
                },
                {
                  type: 'table',
                  headers: ['Specialized System', 'Key Features and Hazards'],
                  rows: [
                    ['Medical gas (oxygen, nitrogen, nitrous oxide, vacuum)', 'Strict code requirements; DISS fittings (Diameter Index Safety System) prevent wrong-gas connections; certification required'],
                    ['Process piping (industrial)', 'Wide variety of fluids (acids, caustics, solvents); material compatibility critical; chemical hazards'],
                    ['Compressed air', 'Pressure hazards; moisture removal (dryers, filters) essential; piping must be rated for pressure'],
                    ['Natural gas / propane fuel piping', 'Explosion and fire hazards; pressure testing critical; TSSA requirements in Ontario'],
                    ['Residential fire protection (potable water sprinklers)', 'Connected to potable water; backflow prevention required; hydraulic calculation for coverage'],
                    ['Solar thermal', 'High-temperature fluid (glycol), pressure considerations, roof penetration weatherproofing'],
                    ['Drain pipe heat recovery (DWHR)', 'Recovers heat from warm drain water to pre-heat cold water supply'],
                    ['Non-potable water reuse (greywater, rainwater harvesting)', 'Must be clearly identified; cross connection control is critical; purple pipe convention'],
                    ['Radon mitigation', 'Sub-slab depressurization piping; PVC pipe from slab to exterior fan'],
                    ['Ground source heat pump loops', 'Buried piping loops filled with water-glycol; pressure and flow balancing required'],
                  ],
                },
              ],
            },
            {
              id: 'ch12-s2',
              title: '12.2 Medical Gas Systems',
              content: [
                {
                  type: 'paragraph',
                  text: 'Medical gas systems are found in hospitals, dental offices, and medical clinics. They distribute piped medical gases — oxygen (O₂), nitrous oxide (N₂O), nitrogen (N₂), carbon dioxide (CO₂), and medical air — as well as medical vacuum and WAGD (waste anaesthetic gas disposal). Errors in medical gas installation can be fatal.',
                },
                {
                  type: 'keyTerm',
                  term: 'DISS (Diameter Index Safety System)',
                  definition: 'An index system used for medical gases that defines the properties of access points (diameter and configuration), allowing ONLY specific connection devices to connect to the corresponding gas access point. This prevents cross-connection between different medical gases.',
                },
                {
                  type: 'infoBox',
                  title: 'Medical Gas Requirements',
                  items: [
                    'Copper tubing (Type K or L) is the standard material for most medical gas piping',
                    'All joints must be brazed (no soft solder) using BAg alloy brazing rod with nitrogen purge',
                    'No flux is permitted in medical gas brazing — the purge prevents oxidation',
                    'Each gas has a unique DISS outlet to prevent connection of wrong equipment',
                    'Installers must hold a valid medical gas installer certification (required by CSA Z7396.1)',
                    'Systems must be tested and certified by a qualified verifier before commissioning',
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
    // PART 7 — EXAM PREPARATION AND REFERENCE
    // ============================================================
    {
      id: 'part-7',
      number: 7,
      title: 'Exam Preparation and Formulas Reference',
      description: 'Complete formulas reference, key terms, mock exam questions, and Red Seal exam strategy.',
      chapters: [

        // CHAPTER 13 — Formulas Reference (from official document)
        {
          id: 'ch-13',
          number: 13,
          title: 'Plumber Formulas Reference Sheet',
          subtitle: 'Complete reference based on the official Ontario Plumber Formulas document',
          isFree: false,
          estimatedMinutes: 40,
          sections: [
            {
              id: 'ch13-s1',
              title: '13.1 Measurement Unit Abbreviations',
              content: [
                {
                  type: 'table',
                  headers: ['Abbreviation', 'Unit'],
                  rows: [
                    ['°C', 'Degree Celsius'],
                    ['°F', 'Degree Fahrenheit'],
                    ['ΔT', 'Temperature difference'],
                    ['BTU', 'British thermal unit'],
                    ['Btuh', 'British thermal units per hour'],
                    ['ft.', 'Foot'],
                    ['gpg', 'Grains per gallon'],
                    ['gpm', 'Gallons per minute'],
                    ['in.', 'Inch'],
                    ['kg', 'Kilogram'],
                    ['kN', 'Kilonewton'],
                    ['kPa', 'Kilopascal'],
                    ['L', 'Litre'],
                    ['lb.', 'Pound'],
                    ['lbf', 'Pound-force'],
                    ['m', 'Metre'],
                    ['mm', 'Millimetre'],
                    ['ppm', 'Parts per million'],
                    ['psi', 'Pounds per square inch'],
                    ['s', 'Second'],
                    ['U.S. gal.', 'American gallon'],
                  ],
                },
              ],
            },
            {
              id: 'ch13-s2',
              title: '13.2 Constants',
              content: [
                {
                  type: 'table',
                  headers: ['Constant', 'Value'],
                  rows: [
                    ['π (pi)', '3.1416'],
                    ['1 ft² of Equivalence of Direct Radiation (EDR)', '240 Btuh'],
                    ['1 U.S. gallon', '8.33 lb.'],
                    ['12,000 BTU of cooling', '1 ton'],
                    ['Pressure head conversion unit', '0.433 psi/ft.'],
                    ['Travel offset of a 45° elbow', '1.414'],
                  ],
                },
              ],
            },
            {
              id: 'ch13-s3',
              title: '13.3 Coefficients of Linear Expansion',
              content: [
                {
                  type: 'table',
                  headers: ['Material', 'Per 1°F', 'Per 1°C'],
                  rows: [
                    ['ABS', '0.0000550', '0.0000990'],
                    ['Brass', '0.0000105', '0.0000189'],
                    ['Cast iron', '0.0000059', '0.0000108'],
                    ['Copper', '0.0000095', '0.0000171'],
                    ['PVC', '0.0000330', '0.0000594'],
                    ['Steel', '0.0000067', '0.0000120'],
                  ],
                },
              ],
            },
            {
              id: 'ch13-s4',
              title: '13.4 Conversion Factors',
              content: [
                {
                  type: 'table',
                  headers: ['To Convert', 'To', 'Multiply By'],
                  rows: [
                    ['°C', '°F', '1.8 and add 32'],
                    ['gpg', 'ppm', '17.12'],
                    ['kg', 'lb.', '2.205'],
                    ['kg/m³', 'lb./ft³', '0.06243'],
                    ['kN', 'lb.', '224.81'],
                    ['kN/m', 'lbf/ft.', '68.52'],
                    ['kN/m³', 'lbf/ft³', '6.360'],
                    ['kPa', 'lbf/ft²', '20.88'],
                    ['kPa', 'lbf/in² (psi)', '0.1450'],
                    ['L', 'gal. imp.', '0.2200'],
                    ['L/s', 'gpm', '13.20'],
                    ['m', 'ft.', '3.281'],
                    ['m²', 'ft²', '10.76'],
                    ['mm', 'in.', '0.03937'],
                    ['m/s²', 'ft./s²', '3,281'],
                  ],
                },
              ],
            },
            {
              id: 'ch13-s5',
              title: '13.5 General Formulas',
              content: [
                {
                  type: 'table',
                  headers: ['Description', 'Formula'],
                  rows: [
                    ['Boyle\'s law (gas volume/pressure)', 'V₁/V₂ = P₂/P₁'],
                    ['Charles\' law (gas volume/temperature)', 'V₁/T₁ = V₂/T₂'],
                    ['Expansion (thermal)', 'L × ΔT × α (length × temp diff × coefficient)'],
                    ['Force', 'P × A (pressure × area)'],
                    ['gpm (from BTU and ΔT)', 'BTU ÷ (lb./gal. × ΔT)'],
                    ['gpm (from Btuh)', 'Btuh ÷ (500 × ΔT of water)'],
                    ['Btuh (hydronic)', 'gpm × 500 × ΔT'],
                    ['ΔT (hydronic)', 'Btuh ÷ (500 × gpm)'],
                    ['Grade (pipe slope)', 'Drop or rise ÷ Run'],
                    ['Grains (water softener capacity)', '(persons × gpd) × (hardness gpg + iron) × days of regeneration'],
                    ['Grains removal rate', 'Water usage × grains per gallon × regeneration value'],
                    ['Litres (rainfall collection)', 'Area × rainfall intensity'],
                    ['Watt\'s law', 'P = V × I (power = voltage × current)'],
                    ['Pressure', 'H × density (height × density)'],
                    ['Pressure head conversion', '0.433 psi per foot of water head'],
                    ['45° offset travel', 'Offset × 1.414'],
                  ],
                },
              ],
            },
            {
              id: 'ch13-s6',
              title: '13.6 Area, Volume and Geometry Formulas',
              content: [
                {
                  type: 'table',
                  headers: ['Shape', 'Measurement', 'Formula'],
                  rows: [
                    ['Circle', 'Area', 'π × r²'],
                    ['Circle', 'Circumference', 'π × D'],
                    ['Cylinder (open top)', 'Surface area', 'πr² + πDH'],
                    ['Cylinder (enclosed)', 'Surface area', '2πr² + πDH'],
                    ['Cylinder', 'Volume', 'πr²H'],
                    ['Rectangle', 'Area', 'L × W'],
                    ['Rectangle', 'Perimeter', '2(L + W)'],
                    ['Rectangle box (open top)', 'Surface area', '(L × W) + 2(W × H) + 2(L × H)'],
                    ['Rectangle box (enclosed)', 'Surface area', '2(L × W) + 2(W × H) + 2(L × H)'],
                    ['Rectangle box', 'Volume', 'L × W × H'],
                    ['Sphere', 'Surface area', '4πr²'],
                    ['Sphere', 'Volume', '4πr³/3'],
                    ['Triangle', 'Area', '(B × H) ÷ 2'],
                    ['Triangle', 'Perimeter', 'a + b + c'],
                  ],
                },
              ],
            },
          ],
          practiceQuestions:  [],
        },

        // CHAPTER 14 — Glossary
        {
          id: 'ch-14',
          number: 14,
          title: 'Key Terms and Glossary',
          subtitle: 'Essential plumbing terminology from the Red Seal Occupational Standard',
          isFree: false,
          estimatedMinutes: 30,
          sections: [
            {
              id: 'ch14-s1',
              title: '14.1 Core Plumbing Terms',
              content: [
                {
                  type: 'table',
                  headers: ['Term', 'Definition'],
                  rows: [
                    ['Appliance', 'A piece of equipment that may require connection to a plumbing system'],
                    ['Backflow', 'Flowing back or reversal of the normal direction of flow'],
                    ['Backflow preventer', 'A device used to prevent backflow due to back pressure or back siphonage'],
                    ['Backing', 'A layer of material that forms, protects, and strengthens the supports for plumbing fixtures'],
                    ['Backwater valve', 'A check valve designed for use in a gravity drainage system, permitting flow in only one direction'],
                    ['Benchmark', 'A predetermined elevation used as a reference point'],
                    ['Check valve', 'A valve that permits flow in only one direction'],
                    ['Cleanout', 'Access point in drainage and venting systems for cleaning and inspection'],
                    ['Cross connection', 'A connection between a potable water source and a non-potable water source'],
                    ['Developed length', 'The length of pipe measured along its centre line'],
                    ['Dielectric protection', 'A method of isolating dissimilar metals to prevent electrolysis and galvanic corrosion'],
                    ['Drainage system', 'Assembly of pipes, fittings, fixtures, traps, and appurtenances that conveys sewage or waste'],
                    ['Embedded components', 'Components of a plumbing system encased in concrete or other materials'],
                    ['Expansion tank', 'A device used to accept expansion of water in a closed system'],
                    ['Fire stopping', 'Construction assembly acting as a barrier against spread of fire and smoke'],
                    ['Fixture', 'A receptacle or device that discharges sewage or clear-water waste'],
                    ['Fixture unit — drainage', 'Unit of measure expressing the hydraulic load of a fixture on the drainage system'],
                    ['Fixture unit — water supply', 'Unit of measure expressing the hydraulic load of a fixture on the water distribution system'],
                    ['Flashing', 'Component used to seal around exterior pipe penetrations to prevent water infiltration'],
                    ['Maintenance hole', 'Opening to a confined space allowing access to underground piping for inspection and maintenance'],
                    ['Offset', 'Piping that connects the ends of two pipes that are parallel or perpendicular'],
                    ['Pitless adaptor', 'A fitting that allows connection and removal of a pump from a well casing without tools'],
                    ['Potable', 'Safe for human consumption'],
                    ['Purge', 'To pass inert gas inside pipe to displace oxygen and prevent oxidation during brazing and welding'],
                    ['Rough-in', 'Placement of pipes to allow for future installation of fixtures and equipment'],
                    ['Sanitary sewer', 'A sewer that conducts sewage'],
                    ['Sewage', 'Any liquid waste other than clear-water waste or storm water'],
                    ['Sleeve', 'A component used to create a penetration through walls, floors, and ceilings prior to pipe installation'],
                    ['Sounding', 'A method of detecting cracks in cast iron pipe and fittings using a hammer tap'],
                    ['Storm sewer', 'A sewer that conveys storm water'],
                    ['Swing joint', 'A piping arrangement to allow for movement without putting strain on piping'],
                    ['Thrust block', 'A formed concrete block used to prevent movement of a fitting at a change of direction in buried piping'],
                    ['Torque arrestor', 'A device installed on a pipe in a well casing to prevent the pipe from spinning'],
                    ['Trap', 'A fitting designed to hold a liquid seal preventing gas passage without affecting liquid flow'],
                    ['Tube', 'Measured by inside diameter'],
                    ['Tubing', 'Measured by outside diameter (OD) and wall thickness'],
                    ['Vent piping', 'Pipe that is part of a venting system'],
                    ['Venting system', 'Assembly of pipes connecting the drainage system with outside air for air circulation and trap seal protection'],
                    ['Water distribution system', 'Assembly of pipes, fittings, valves, and appurtenances conveying water from the service pipe to outlets, fixtures, and appliances'],
                    ['Water service pipe', 'Pipe conveying water from the water main or private source to the inside of a building, up to and including the main isolation valve'],
                  ],
                },
              ],
            },
          ],
          practiceQuestions:  [],
        },

        // CHAPTER 15 — Full Mock Exam and Exam Strategy
        {
          id: 'ch-15',
          number: 15,
          title: 'Red Seal Mock Exam and Exam Strategy',
          subtitle: '125-question timed practice exam (3 hours 45 min), plus tips for exam success',
          isFree: false,
          estimatedMinutes: 90,
          isMockExam: true,
          sections: [
            {
              id: 'ch15-s1',
              title: '15.1 Red Seal Exam Overview',
              content: [
                {
                  type: 'paragraph',
                  text: 'The Plumber Red Seal Interprovincial Examination consists of 125 multiple-choice questions. The exam is based on the Red Seal Occupational Standard (RSOS) and tests knowledge across all seven Major Work Activities (MWAs). The time allowed is 3 hours 45 minutes. Use the "Start exam" button above to launch the full timed mock exam simulation.',
                },
                {
                  type: 'table',
                  headers: ['MWA', 'Topic', 'Exam Weighting', 'Approx. Questions (of 125)'],
                  rows: [
                    ['A', 'Performs common occupational skills', '11%', '14'],
                    ['B', 'Prepares and assembles tube, tubing and pipe', '10%', '13'],
                    ['C', 'Installs, tests and services DWV systems', '26%', '33'],
                    ['D', 'Installs, tests and services water service and distribution', '19%', '24'],
                    ['E', 'Installs, tests and services fixtures, appliances and water treatment', '13%', '16'],
                    ['F', 'Installs, tests and services low-pressure steam and hydronic systems', '13%', '16'],
                    ['G', 'Installs, tests and services specialized systems', '8%', '10'],
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Red Seal Exam Strategy',
                  items: [
                    'Focus study time proportionally — MWA C (DWV, 26%) and MWA D (Water, 19%) together make up nearly half the exam',
                    'Always read each question fully before looking at the options — misreading is the most common source of errors',
                    'Eliminate obviously wrong answers first — often narrows choices to 2',
                    'For calculation questions, verify your answer makes physical sense before choosing',
                    'For code questions, think "what does the code intend to protect?" — this often leads to the correct answer',
                    'Do not leave any question blank — there is no penalty for guessing; eliminate options and make your best selection',
                    'Review your answers if time permits; change an answer only if you have a clear reason to',
                    'Bring the official Plumber Formulas reference sheet to the exam (confirm with your provincial authority what references are permitted)',
                  ],
                },
              ],
            },
          ],
          practiceQuestions:  [],
        },
      ],
    },
  ],

};

// Normalized course export for app (same shape as hairstylistCourse)
const _parts = plumberCourse.parts;
const _allChapters = _parts.flatMap((p) => p.chapters);
const _totalChapters = _allChapters.length;
const _totalQuestions = 54; // Questions moved to server/scripts/seedPracticeQuestions.js (practice API)

export const plumberCourseData = {
  id: 'plumber-306a',
  slug: 'plumber-306a',
  title: 'Plumber (Red Seal 306A) Exam Prep',
  subtitle: 'Complete study guide — Red Seal Interprovincial Exam, 125 questions',
  trade: 'Plumber',
  tradeCode: '306A',
  price: 4999, // $49.99 CAD in cents
  currency: 'CAD',
  totalChapters: _totalChapters,
  totalQuestions: _totalQuestions,
  passingMark: 70,
  features: [
    '15 chapters covering all 7 Major Work Activities (MWA)',
    `${_totalQuestions}+ practice questions with explanations`,
    'Red Seal–style mock exam and exam strategy',
    'Formulas reference and key terms glossary',
    'Based on Red Seal Occupational Standard (RSOS) – Plumber 2023',
    'Lifetime access — study at your own pace',
  ],
  parts: _parts,
};

export default plumberCourseData;
