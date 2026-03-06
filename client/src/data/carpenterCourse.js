// / ============================================================
// // CertReady — Carpenter Course Data
// // Based on: Red Seal Occupational Standard (RSOS) – Carpenter (2022)
// //           and Official Carpenter Exam Information (red-seal.ca)
// // Red Seal Interprovincial Exam: 100 questions, 3 hours
// // Apprenticeship: 4 levels, 7200 hours total
// // Trade Code: 403A
// // ============================================================

// const carpenterCourse = {
//     meta: {
//         trade: 'Carpenter',
//         redSealCode: '403A',
//         totalExamQuestions: 100,
//         apprenticeshipLevels: 4,
//         totalHours: 7200,
//         version: '2022',
//         lastUpdated: '2025',
//     },

//     parts: [

//         // ============================================================
//         // PART 1 — FOUNDATIONS OF THE TRADE
//         // MWA A: Performs Common Occupational Skills (12%)
//         // ============================================================
//         {
//             id: 'part-1',
//             number: 1,
//             title: 'Foundations of the Trade',
//             description: 'Safety, tools, work organization, and temporary access structures — the foundation every carpenter builds on before the first framing nail is driven.',
//             chapters: [

//                 // CHAPTER 1 — GLOSSARY (FREE)
//                 {
//                     id: 'ch-01',
//                     number: 1,
//                     title: 'Glossary',
//                     subtitle: 'Key terms, definitions, and acronyms for the Carpenter trade',
//                     isFree: true,
//                     estimatedMinutes: 30,
//                     sections: [
//                         {
//                             id: 'ch01-s1',
//                             title: '1.1 Core Carpentry Terms',
//                             content: [
//                                 {
//                                     type: 'paragraph',
//                                     text: 'The following terms are drawn directly from the RSOS Carpenter (2022) Appendix C Glossary and from common usage throughout the trade. Mastery of this vocabulary is essential for reading drawings, interpreting specifications, and answering knowledge-and-recall questions on the Red Seal exam.',
//                                 },
//                                 {
//                                     type: 'table',
//                                     headers: ['Term', 'Definition'],
//                                     rows: [
//                                         ['Access flooring', 'A secondary raised floor system that bears on a primary floor, used to create a chase for routing electrical and computer wiring, ventilation ducts, etc.'],
//                                         ['Acclimatization', 'The process of allowing materials (especially wood flooring and trim) to adjust to the temperature and humidity conditions of the space where they will be installed.'],
//                                         ['Astragal', 'A moulding or strip attached to one leaf of a double door to provide a solid edge for the operating door to seal against.'],
//                                         ['Back framing', 'The secondary non-structural framing done after structural framing is complete; includes valances, drop ceilings, chases, boxing for utilities, attic access, and backing.'],
//                                         ['Balustrade', 'A railing system consisting of a series of balusters connected at the top by a handrail; used on stairs and open floors.'],
//                                         ['Batter boards', 'Boards set at each corner of an excavation to identify the location of grid lines for the alignment of footings, foundation walls, and columns.'],
//                                         ['Beam', 'A main horizontal structural member constructed of wood, steel, or concrete used to support secondary loads such as joists or floor systems.'],
//                                         ['Bird\'s mouth', 'A notch cut in a rafter that allows it to sit flat on the top plate of a wall; consists of a seat cut (horizontal) and a plumb cut (vertical).'],
//                                         ['Boatswain\'s chair (bosun\'s chair)', 'A seat composed of a plank suspended horizontally from ropes, allowing a worker to work on building exteriors while seated at height.'],
//                                         ['Caisson', 'A watertight box or enclosure used for construction work below grade or water level.'],
//                                         ['Cladding', 'The covering of one material with another; exterior wall finishes such as siding, brick, or stucco.'],
//                                         ['Column', 'A vertical structural member that supports the weight of other structural members above it.'],
//                                         ['Cornice', 'The entire finished assembly where the walls of a structure meet the roof; sometimes called the eaves.'],
//                                         ['Crown (lumber)', 'The slight bow or curve in a piece of lumber; installed crown-up in floor joists and studs to counteract load deflection.'],
//                                         ['Curing (concrete)', 'A process of maintaining adequate moisture content and temperature during hydration so concrete achieves its design strength.'],
//                                         ['Demountable wall', 'A wall or partition system designed to be removed from its mounting and reinstalled elsewhere.'],
//                                         ['Dunnage', 'Wood strips or crating placed between stored materials to provide air circulation and lifting space.'],
//                                         ['Embedded steel', 'Steel components (reinforcing bars, anchor bolts, angle iron, hardware) that are an integral part of concrete structures.'],
//                                         ['Falsework', 'The structural supports and bracing required to carry temporary loads during construction, especially supporting formwork until concrete cures.'],
//                                         ['Flooring', 'Material used in the construction of floors; the surface material is finish flooring; the base material is sub-flooring.'],
//                                         ['Fly ash', 'A byproduct of coal combustion used as a supplementary cementitious material (SCM) in concrete to improve workability and long-term strength.'],
//                                         ['Footing', 'The supporting element at the base of a foundation wall, pier, or column that distributes weight over a larger area of bearing soil.'],
//                                         ['Formwork', 'Temporary structures built to the shape of a finished structural concrete member; removed after concrete achieves sufficient strength.'],
//                                         ['Foundation', 'The lower part of a building that rests on and extends into the ground, providing support for the structure above.'],
//                                         ['Geometric stairs', 'Stair systems that deviate from straight runs; includes elliptical, curved, and spiral stairs.'],
//                                         ['Grout', 'A cementitious or epoxy-based mixture placed in a plastic state to fill structural voids (column base plates) or non-structural voids (tile joints).'],
//                                         ['Header (lintel)', 'A joist or rafter perpendicular to trimmer joists or rafters, used to support and frame rough openings for doors, windows, and stairwells.'],
//                                         ['Hoarding', 'A temporary structure or fencing around a construction site for safety, weather protection, and heat retention.'],
//                                         ['Hydration', 'The chemical reaction of cement and water that causes concrete or mortar to harden and gain strength.'],
//                                         ['ICF (Insulated Concrete Forms)', 'A modular system for forming concrete walls made of insulating foam material; forms typically remain in place as part of the finished structure.'],
//                                         ['Jack (trimmer) stud', 'A framing member that supports the header/lintel and provides added strength and stiffness around framed openings.'],
//                                         ['Joist', 'One of a series of horizontal members used to support a floor, ceiling, or roof.'],
//                                         ['King stud', 'The full-length stud on each side of a rough opening, running from bottom plate to top plate; the jack stud is nailed to it.'],
//                                         ['Lintel', 'A wood, stone, or steel member placed across the top of a rough door or window opening; supports the weight from above.'],
//                                         ['Load-bearing wall', 'A wall that supports primary vertical loads and transfers them to the foundation.'],
//                                         ['OSB (Oriented Strand Board)', 'An engineered wood panel made from compressed wood strands arranged in layers at right angles; commonly used for sheathing and sub-flooring.'],
//                                         ['Pier', 'A foundation element that distributes the weight of a column into the soil.'],
//                                         ['Piles', 'Structural members driven or drilled into soil to provide foundation support.'],
//                                         ['Pre-cast', 'Concrete components cast at a location other than the final installation site, then transported and installed.'],
//                                         ['Pre-fabricated', 'Building or modular components built off-site in a controlled environment and installed on-site by carpenters.'],
//                                         ['Rafter', 'One of a series of structural roof members designed to support roof loads, spanning from ridge to top plate.'],
//                                         ['Rain screen', 'A cavity in an exterior wall system that allows drainage and drying, preventing wind-driven rain from penetrating the building envelope.'],
//                                         ['Rise', 'The vertical measurement on stairs, ramps, and roofs; for stairs, the height of each step.'],
//                                         ['Run', 'The horizontal measurement on stairs, ramps, and roofs; for stairs, the horizontal depth of each tread.'],
//                                         ['Shoring', 'The process of supporting a structure or excavation using temporary props or bracing to prevent collapse.'],
//                                         ['Siding', 'Boards and panels used as an exterior wall covering.'],
//                                         ['SIPs (Structural Insulated Panels)', 'Insulating material sandwiched between two layers of OSB or plywood, pre-fabricated in a factory for high-performance wall, roof, and floor assemblies.'],
//                                         ['Site layout', 'Locating primary building components on the building site by interpreting construction drawings in relation to property grid lines.'],
//                                         ['Soffit', 'The underside of an architectural feature such as a beam, arch, ceiling, stairwell, vault, or cornice.'],
//                                         ['Stud', 'One of a series of vertical structural members used as support in walls and partitions.'],
//                                         ['Sub-floor', 'Boards or sheet material laid on joists under a finished floor; provides structural support and a base for finish flooring.'],
//                                         ['Temperature bars', 'Steel rods placed horizontally in concrete slabs perpendicular to main reinforcing bars, to prevent cracks due to temperature changes or drying.'],
//                                         ['Temporary structure', 'Any structure erected during construction that is removed upon project completion.'],
//                                         ['Yokes', 'Ties or clamping devices installed around column forms or over wall/footing forms to prevent spreading under concrete placement pressure.'],
//                                     ],
//                                 },
//                             ],
//                         },
//                         {
//                             id: 'ch01-s2',
//                             title: '1.2 Trade Acronyms (Provided at Exam)',
//                             content: [
//                                 {
//                                     type: 'paragraph',
//                                     text: 'The following acronyms are officially listed on the Red Seal Carpenter Exam Information page. They will be provided with the exam sitting, but you must know what they mean to answer questions correctly.',
//                                 },
//                                 {
//                                     type: 'table',
//                                     headers: ['Acronym', 'Full Term', 'Significance'],
//                                     rows: [
//                                         ['CMHC', 'Canada Mortgage and Housing Corporation', 'Publishes residential construction guides and housing standards'],
//                                         ['ICF', 'Insulated Concrete Forms', 'Foam form system where forms stay in place as insulation after the concrete cures'],
//                                         ['o.c.', 'On Centre', 'Measurement from the centre of one member to the centre of the next (e.g., studs at 400 mm o.c.)'],
//                                         ['OHS', 'Occupational Health and Safety', 'Provincial/territorial legislation governing workplace safety'],
//                                         ['OSB', 'Oriented Strand Board', 'Engineered wood panel used for sheathing and sub-floors'],
//                                         ['PPE', 'Personal Protective Equipment', 'Hard hat, safety glasses, gloves, hearing protection, fall arrest, etc.'],
//                                         ['SPF', 'Spruce-Pine-Fir', 'The most common framing lumber species group in Canada'],
//                                         ['WHMIS', 'Workplace Hazardous Materials Information System', 'Canada\'s national system for communicating chemical hazards; now aligned with GHS'],
//                                     ],
//                                 },
//                                 {
//                                     type: 'infoBox',
//                                     title: 'Additional Common Trade Acronyms (Frequently Tested)',
//                                     items: [
//                                         'NBC — National Building Code of Canada: the model code adopted by most provinces and territories',
//                                         'CSA — Canadian Standards Association: publishes technical standards referenced in building codes',
//                                         'LVL — Laminated Veneer Lumber: engineered beam made from thin wood veneers glued together',
//                                         'PSL — Parallel Strand Lumber: engineered beam made from strands of wood glued parallel',
//                                         'CLT — Cross-Laminated Timber: mass timber panel made of layered lumber glued at right angles',
//                                         'SDS — Safety Data Sheet: required for all hazardous materials on site (formerly MSDS)',
//                                         'FLRA — Field Level Risk Assessment: on-site hazard assessment completed before tasks begin',
//                                         'WLL — Working Load Limit: maximum load rating for rigging, hoisting, and lifting equipment',
//                                         'AWP — Aerial Work Platform: motorized elevating work platform (scissor lift, boom lift)',
//                                         'PAT — Powder-Actuated Tool: fastener-driving tool using explosive cartridges; requires certification',
//                                     ],
//                                 },
//                             ],
//                         },
//                     ],
//                     practiceQuestions: [],
//                 },

//                 // CHAPTER 2 — SAFETY (MWA A-2) — FREE
//                 {
//                     id: 'ch-02',
//                     number: 2,
//                     title: 'Safety on the Job',
//                     subtitle: 'MWA A-2 · Performs Safety-Related Activities (3 questions — 25% of MWA A)',
//                     isFree: true,
//                     estimatedMinutes: 45,
//                     sections: [
//                         {
//                             id: 'ch02-s1',
//                             title: '2.1 The Safe Work Environment',
//                             content: [
//                                 {
//                                     type: 'paragraph',
//                                     text: 'Safety is the first priority on every carpentry job site. Carpenters face a constantly changing work environment — unlike a fixed factory, the hazards on a construction site shift with every phase of work. Journeyperson carpenters are responsible for conducting Field Level Risk Assessments (FLRAs) before each task, complying with all OHS legislation, wearing required PPE, and mentoring apprentices in safe work practices.',
//                                 },
//                                 {
//                                     type: 'keyTerm',
//                                     term: 'WHMIS (GHS)',
//                                     definition: 'Workplace Hazardous Materials Information System — Canada\'s national system for communicating chemical hazards using standardized labels and Safety Data Sheets (SDS). Now aligned with the Globally Harmonized System (GHS). Carpenters encounter WHMIS-regulated products including adhesives, solvents, concrete release agents, treated lumber preservatives, and spray foams.',
//                                 },
//                                 {
//                                     type: 'keyTerm',
//                                     term: 'SDS (Safety Data Sheet)',
//                                     definition: 'A document required for every hazardous product on site. Contains 16 standardized sections including product identification, hazard identification, composition, first-aid measures, fire-fighting measures, exposure controls, and PPE requirements. Must be accessible to all workers on-site.',
//                                 },
//                                 {
//                                     type: 'keyTerm',
//                                     term: 'FLRA (Field Level Risk Assessment)',
//                                     definition: 'An on-the-spot hazard assessment performed by workers before beginning a task. Identifies potential hazards specific to the current work location and conditions, and identifies controls before work begins.',
//                                 },
//                                 {
//                                     type: 'table',
//                                     headers: ['PPE Item', 'Standard', 'Key Notes'],
//                                     rows: [
//                                         ['Hard hat (Class E)', 'CSA Z94.1', 'Required at all times on construction sites; Class E rated for electrical contact; inspect before each use; replace after any significant impact'],
//                                         ['Safety glasses / face shield', 'CSA Z94.3', 'Safety glasses for general work; face shield for grinding, concrete work, and cutting; both when sparks are present'],
//                                         ['Hearing protection', 'CSA Z94.2', 'Required when noise exceeds 85 dBA; circular saws, nail guns, and compressors exceed this; muffs provide better protection than plugs when removing and replacing frequently'],
//                                         ['Safety boots (CSA Grade 1)', 'CSA Z195', 'Steel toe and puncture-resistant sole; required on all construction sites; replace if toe cap is compromised'],
//                                         ['High-visibility vest', 'CSA Z96 Class 2', 'Required where vehicle or mobile equipment traffic is present on-site'],
//                                         ['Gloves', 'Employer / AHJ spec', 'Cut-resistant when using hand saws or knives; leather for framing; nitrile for concrete, adhesives, and chemical products'],
//                                         ['Respiratory protection', 'CSA Z94.4 / NIOSH', 'N95 minimum for wood dust and drywall dust; half-face P100 respirator for silica, treated lumber, or chemical fumes; fit-tested annually'],
//                                         ['Full-body harness and lanyard', 'CSA Z259 series', 'Required for fall protection at heights (threshold varies by province, commonly 3 m); shock-absorbing lanyard or self-retracting lifeline; anchor rated minimum 22 kN'],
//                                         ['Knee pads', 'Manufacturer spec', 'Required for flooring, roofing shingle work, and any prolonged kneeling on hard surfaces'],
//                                     ],
//                                 },
//                                 {
//                                     type: 'paragraph',
//                                     text: 'Worn, damaged, or defective PPE must be tagged, removed from service, and reported to the supervisor immediately. Certification for specific PPE — fall-arrest systems, aerial work platforms, confined space equipment — must be current as required by the AHJ and site safety plan.',
//                                 },
//                             ],
//                         },
//                         {
//                             id: 'ch02-s2',
//                             title: '2.2 Fall Protection',
//                             content: [
//                                 {
//                                     type: 'paragraph',
//                                     text: 'Falls from height are the leading cause of fatalities and serious injuries in the construction industry. Carpenters work at height on roofs, scaffolding, ladders, and open floor assemblies. Understanding fall protection requirements is both a critical safety competency and a frequent exam topic.',
//                                 },
//                                 {
//                                     type: 'keyTerm',
//                                     term: 'Fall Arrest System',
//                                     definition: 'A system designed to stop a worker\'s fall before they strike a lower level. Required components: full-body harness, connecting lanyard (shock-absorbing or self-retracting lifeline — SRL), and an anchor point rated to at least 22 kN (approximately 5,000 lbs). The system must be rigged to limit free-fall distance and total arrest distance.',
//                                 },
//                                 {
//                                     type: 'infoBox',
//                                     title: 'Fall Protection Hierarchy (Most to Least Preferred)',
//                                     items: [
//                                         '1. Elimination — design work to be performed at ground level where possible',
//                                         '2. Guardrails — permanent or temporary guardrails at all open edges above the regulated threshold height',
//                                         '3. Fall restraint system — prevents a worker from reaching the fall hazard edge; no free fall',
//                                         '4. Fall arrest system — full-body harness + shock-absorbing lanyard connected to rated anchor; stops fall after it begins',
//                                         '5. Safety nets — deployed below the work area to catch a falling worker; rarely used in residential/commercial carpentry',
//                                     ],
//                                 },
//                                 {
//                                     type: 'table',
//                                     headers: ['Situation', 'Fall Protection Requirement'],
//                                     rows: [
//                                         ['Open edges of floors, roofs, balconies (typically ≥3 m, varies by province)', 'Fall arrest system OR guardrails with top rail (minimum 900 mm), mid rail, and toe board'],
//                                         ['Pitched roof work', 'Fall arrest anchor at or above ridge; roof jacks and planks if guardrail impractical; tie-off before reaching roof edge'],
//                                         ['Scaffolding working platforms', 'Guardrails on all open sides; fully planked working platform with no gaps exceeding 25 mm'],
//                                         ['Aerial work platforms (AWPs)', 'Full-body harness connected to manufacturer\'s designated anchor point INSIDE the basket; never tie-off to external structure from AWP'],
//                                         ['Ladders', '4:1 angle rule (1 m out per 4 m height); extend 1 m above landing; secure top and bottom; face ladder when climbing; three-point contact'],
//                                     ],
//                                 },
//                             ],
//                         },
//                         {
//                             id: 'ch02-s3',
//                             title: '2.3 Lock-Out / Tag-Out (LOTO)',
//                             content: [
//                                 {
//                                     type: 'paragraph',
//                                     text: 'Lock-Out / Tag-Out (LOTO) procedures protect workers from the unexpected release of energy during maintenance or modification of equipment. On carpentry sites, LOTO applies to stationary power tools, air compressors, electrical panels, and any energized system that carpenters must work near or modify.',
//                                 },
//                                 {
//                                     type: 'keyTerm',
//                                     term: 'Zero-Energy State',
//                                     definition: 'The condition in which all forms of energy (electrical, pneumatic, hydraulic, mechanical, potential, thermal) have been isolated, discharged, and verified so that the equipment cannot move or energize accidentally.',
//                                 },
//                                 {
//                                     type: 'numbered',
//                                     items: [
//                                         'Identify all energy sources for the equipment (electrical, pneumatic, hydraulic, gravity, spring tension).',
//                                         'Notify all affected workers and obtain the LOTO permit from the supervisor.',
//                                         'Shut down the equipment using the normal stopping procedure.',
//                                         'Isolate each energy source (open electrical disconnects, close pneumatic supply valves, block moveable parts).',
//                                         'Apply personal lock and tag to each isolation device — only the worker who applied the lock may remove it.',
//                                         'Release or restrain any stored energy (bleed pneumatic pressure, block suspended parts, discharge capacitors).',
//                                         'Verify zero-energy state by attempting to start the equipment and checking gauges.',
//                                         'Perform the work. On completion: remove tools and materials, reinstall guards, notify personnel, and remove locks in reverse order.',
//                                     ],
//                                 },
//                                 {
//                                     type: 'infoBox',
//                                     title: 'Carpentry-Specific LOTO Situations',
//                                     items: [
//                                         'Table saw and stationary tools — electrical LOTO before changing blades or clearing jams',
//                                         'Air compressor — pneumatic bleed-down and LOTO before servicing hoses, fittings, or tank drain',
//                                         'Powder-actuated tools — tool rendered safe (unloaded) and cartridges secured before any maintenance or transport',
//                                         'Existing building renovations — electrical panels must be locked out before carpenters work inside walls near wiring',
//                                         'Multi-trade LOTO — use a lock-box where multiple trades must all lock out before work begins on shared equipment',
//                                     ],
//                                 },
//                             ],
//                         },
//                         {
//                             id: 'ch02-s4',
//                             title: '2.4 Powder-Actuated Tool (PAT) Safety',
//                             content: [
//                                 {
//                                     type: 'paragraph',
//                                     text: 'Powder-actuated tools (PATs) use explosive cartridges to drive fasteners (pins, studs) into concrete, masonry, and steel. They are widely used in carpentry for anchoring bottom plates, ledger boards, and steel connectors to concrete. PATs require mandatory training and certification in all Canadian jurisdictions before use.',
//                                 },
//                                 {
//                                     type: 'keyTerm',
//                                     term: 'Powder-Actuated Tool (PAT)',
//                                     definition: 'A device that drives fasteners by means of an explosive charge (shot/cartridge). Available in direct-acting (piston contacts fastener directly) and indirect-acting (piston transfers energy through a floating piston) types. Power level is controlled by cartridge selection (colour-coded by power) and the tool\'s power setting.',
//                                 },
//                                 {
//                                     type: 'table',
//                                     headers: ['PAT Safety Rule', 'Reason'],
//                                     rows: [
//                                         ['Inspect and maintain tool before each use', 'Detect faults that could cause misfires, uncontrolled discharge, or pin blow-through'],
//                                         ['Always point tool away from self and others when loading or handling', 'Accidental discharge at any stage is potentially fatal'],
//                                         ['Never fire into material thinner than the fastener length, near edges, or into existing fasteners', 'Ricochets and blow-through endanger everyone in the vicinity'],
//                                         ['Wear face shield, safety glasses, and hearing protection at all times when using PAT', 'Flying debris and percussion wave from discharge'],
//                                         ['Misfire procedure: hold tool firmly against work for 30 seconds; follow manufacturer\'s misfire protocol', 'Misfires can fire after a delay; never open tool immediately after a misfire'],
//                                         ['Store unused and misfired cartridges separately; dispose of according to regulations', 'Misfired cartridges are still live explosive devices'],
//                                         ['Only operators with current PAT certification may use the tool', 'Legal requirement in all Canadian jurisdictions; certification must be current'],
//                                     ],
//                                 },
//                             ],
//                         },
//                         {
//                             id: 'ch02-s5',
//                             title: '2.5 Hazardous Materials in Renovation',
//                             content: [
//                                 {
//                                     type: 'paragraph',
//                                     text: 'Renovation carpentry frequently exposes workers to hazardous materials present in older buildings. Carpenters must recognize potential hazards, stop work when hazards are suspected, and ensure proper abatement procedures are followed before work resumes.',
//                                 },
//                                 {
//                                     type: 'table',
//                                     headers: ['Hazardous Material', 'Likely Location in Older Buildings', 'Required Action'],
//                                     rows: [
//                                         ['Asbestos', 'Floor tiles, ceiling tiles, pipe insulation, roof shingles, textured paint/stipple, drywall joint compound (pre-1984) — buildings pre-1990', 'Stop work; test by accredited laboratory; licensed abatement contractor removes before carpentry resumes'],
//                                         ['Lead-based paint', 'Painted surfaces of buildings pre-1978; especially trim, windows, and exterior', 'Test before sanding, grinding, or burning; specialized removal; HEPA vacuum; certified workers required'],
//                                         ['Silica', 'Cutting concrete, mortar, brick, fibre-cement siding, ceramic tile', 'Wet cutting or local exhaust ventilation; half-face P100 respirator minimum; HEPA vacuum at source'],
//                                         ['Wood dust (all sawing, routing, sanding)', 'All carpentry operations', 'Dust collection, N95 minimum; some species (western red cedar, MDF) require higher protection'],
//                                         ['Mould', 'Water-damaged framing, drywall, subfloor, insulation', 'Remediate moisture source first; mould remediation before carpentry work; PPE during cleanup'],
//                                         ['PCBs (Polychlorinated Biphenyls)', 'Caulking in commercial buildings pre-1986; fluorescent light ballasts, transformers', 'Stop work; environmental consultant and certified contractor required'],
//                                     ],
//                                 },
//                             ],
//                         },
//                     ],
//                     practiceQuestions: [],
//                 },

//                 // CHAPTER 3 — TOOLS AND EQUIPMENT (MWA A-1) — FREE
//                 {
//                     id: 'ch-03',
//                     number: 3,
//                     title: 'Tools and Equipment',
//                     subtitle: 'MWA A-1 · Uses and Maintains Tools and Equipment (4 questions — 33% of MWA A)',
//                     isFree: true,
//                     estimatedMinutes: 55,
//                     sections: [
//                         {
//                             id: 'ch03-s1',
//                             title: '3.1 Hand Tools',
//                             content: [
//                                 {
//                                     type: 'paragraph',
//                                     text: 'Carpenters use a broader range of hand tools than almost any other trade. All hand tools must be inspected before use, maintained regularly, and stored in clean, dry, ventilated, and secure locations. Worn, damaged, or defective tools are tagged, reported to the supervisor, and removed from service — never used.',
//                                 },
//                                 {
//                                     type: 'table',
//                                     headers: ['Tool Category', 'Key Examples', 'Primary Use'],
//                                     rows: [
//                                         ['Layout and measuring', 'Framing square, speed square, sliding T-bevel, combination square, measuring tape, chalk line, plumb bob, string lines, stair gauges', 'Establishing square, level, plumb, and dimensions for layout'],
//                                         ['Striking tools', 'Framing hammer (28 oz), finish hammer, rubber mallet, dead blow hammer, sledgehammer, roofing hammer, drywall hammer', 'Driving nails, adjusting framing, demolition; use correct weight for task'],
//                                         ['Cutting tools', 'Hand saws (cross-cut, rip, coping, keyhole, drywall, back, hacksaw), utility knife, wood chisels, cold chisel, aviation snips, tin snips, tile cutter, circle cutter', 'Cutting lumber, panels, tile, metal, and drywall by hand'],
//                                         ['Shaping tools', 'Planes (jack, block, smoothing), rasps, files, scrapers (cabinet, floor, form)', 'Fitting joints, trimming, and smoothing wood surfaces'],
//                                         ['Fastening tools', 'Screwdrivers (Robertson, Phillips, Torx, straight, hexagonal), caulking gun, stapler, brad driver, nail puller, nail set', 'Installing fasteners, applying sealants and adhesives'],
//                                         ['Levelling and alignment', 'Hand levels (torpedo, 24", 48", 6 ft, 8 ft, line level)', 'Plumbing posts, levelling plates, aligning wall sections'],
//                                         ['Prying and demolition', 'Pry bars (flat, wrecking, aligning), pinch bar, slide hammer, wall jack, hatchet', 'Removal, demolition, adjusting and spreading framing members'],
//                                         ['Concrete forming tools', 'Cone/tie wrench, trowels, floats, concrete edgers, finish trowel, hand float', 'Assembling form hardware, finishing concrete surfaces'],
//                                         ['Clamping', 'Bar clamps, C-clamps, spring clamps, pipe clamps', 'Holding assemblies during gluing, fastening, or fitting'],
//                                     ],
//                                 },
//                                 {
//                                     type: 'infoBox',
//                                     title: 'Hand Tool Maintenance Essentials',
//                                     items: [
//                                         'Inspect every tool before use — check for cracks, loose handles, dull or damaged edges, bent shafts',
//                                         'Tag defective tools and report to supervisor immediately; never use a compromised tool',
//                                         'Sharpen chisels, plane irons, and hand saws using appropriate sharpening equipment; maintain correct bevel angle',
//                                         'Apply protective oil or wax to metal surfaces to prevent rust, especially in wet or coastal environments',
//                                         'Store tools in clean, dry, ventilated, and secure locations — never leave tools on ledges or surfaces where they can fall and injure workers below',
//                                         'Protect saw teeth with a blade guard or blade sock; protect chisel edges with a blade roll or blade guard',
//                                     ],
//                                 },
//                             ],
//                         },
//                         {
//                             id: 'ch03-s2',
//                             title: '3.2 Portable Power Tools',
//                             content: [
//                                 {
//                                     type: 'paragraph',
//                                     text: 'Portable power tools are the workhorses of production carpentry. Safety requires understanding each tool\'s design, hazards, and maintenance requirements. A critical rule: RPM ratings on blades, discs, and bits must always match or exceed the tool\'s rated no-load RPM — installing a blade rated below the tool\'s RPM can cause the blade to shatter and cause serious injury.',
//                                 },
//                                 {
//                                     type: 'table',
//                                     headers: ['Tool', 'Primary Application', 'Key Safety and Maintenance Points'],
//                                     rows: [
//                                         ['Circular saw', 'Crosscutting and ripping dimensional lumber and sheet goods', 'Keep blade guard functional at all times; match blade RPM to saw; use correct tooth count and blade type for material; support both sides of the cut to prevent binding and kickback'],
//                                         ['Mitre saw (chop saw / compound mitre saw)', 'Accurate crosscuts, mitre, and compound cuts in trim and framing lumber', 'Secure workpiece against fence; keep hands clear of the blade path line; never reach behind the blade while it spins down; use a sharp blade'],
//                                         ['Reciprocating saw', 'Demolition, cutting in confined spaces, rough opening cuts', 'Brace workpiece; locate all hidden utilities before cutting into walls, ceilings, or floors; use correct blade for material (wood vs. metal vs. demolition)'],
//                                         ['Jigsaw', 'Curved cuts in panels, notching, cutouts', 'Orbital mode for faster rough cuts; straight (0) mode for cleaner cuts; keep blade perpendicular to work surface; do not force feed'],
//                                         ['Router and bits', 'Dadoes, rabbets, edge profiles, template routing', 'Bits must be fully seated and collet fully tightened; always feed against the direction of bit rotation; carbide bits for sheet goods and hardwood; match RPM to bit diameter'],
//                                         ['Drill and hammer drill', 'Boring holes, driving fasteners; hammer mode for masonry', 'Select correct bit for material; use hammer mode only for masonry; set clutch for driving to prevent overdriving and stripping'],
//                                         ['Drywall gun', 'Setting drywall screws to precise depth automatically', 'Adjust depth setting for board thickness; avoid overdriving (breaks paper) and underdriving (fails to fasten); both failures affect fire-rated assemblies'],
//                                         ['Belt sander / random orbit sander', 'Smoothing surfaces, levelling joints, final preparation', 'Keep tool moving — stopping causes burn marks; connect to dust extraction; wear respirator; inspect pad for wear'],
//                                         ['Angle grinder', 'Cutting metal hardware, grinding concrete and masonry', 'Face shield AND safety glasses required; match disc/wheel RPM to grinder; inspect for cracks before mounting; never remove guard; keep bystanders clear of disc plane'],
//                                         ['Tile wet saw', 'Cutting ceramic, porcelain, and stone tile', 'Maintain adequate water level; wet blade only — dry cutting generates excessive silica dust and heat; face shield and hearing protection required'],
//                                     ],
//                                 },
//                             ],
//                         },
//                         {
//                             id: 'ch03-s3',
//                             title: '3.3 Pneumatic Tools and Air Compressors',
//                             content: [
//                                 {
//                                     type: 'paragraph',
//                                     text: 'Pneumatic (air-powered) tools are the backbone of production framing and finish carpentry. They are faster and lighter than electric equivalents. Proper maintenance of the air compressor and all connected pneumatic tools is essential for performance, tool longevity, and safety.',
//                                 },
//                                 {
//                                     type: 'table',
//                                     headers: ['Tool', 'Application', 'Maintenance Requirements'],
//                                     rows: [
//                                         ['Framing nailer', 'Nailing plates, studs, joists, sheathing in structural framing', 'Oil daily before use (2–3 drops in air fitting inlet); inspect magazine for debris; check piston bumper for wear'],
//                                         ['Finish nailer', 'Installing trim, casing, base moulding, and interior finish work', 'Oil before use; use correct nail gauge (15 or 16 ga) and length for material; keep nail channel clean and clear'],
//                                         ['Brad nailer', 'Attaching small trim pieces and moulding without splitting', 'Oil before use; 18-gauge brads; minimum penetration into substrate for adequate hold'],
//                                         ['Roofing nailer / coil nailer', 'Applying sheathing and roofing in high-volume nailing', 'Oil before use; set depth precisely per material and code; inspect coil pawl and nose piece for wear'],
//                                         ['Stapler', 'Attaching housewrap, roofing felt, insulation, and underlayment', 'Oil before use; select correct crown width and leg length for substrate and material being attached'],
//                                         ['Air compressor', 'Powers all pneumatic tools on site', 'Drain water from tank after every use to prevent corrosion and eventual tank failure; check oil level if oil-lubricated; inspect hoses and fittings for leaks; test safety relief valve periodically'],
//                                     ],
//                                 },
//                                 {
//                                     type: 'infoBox',
//                                     title: 'Compressor and Hose Safety',
//                                     items: [
//                                         'Never exceed the rated working pressure of hoses, fittings, or tools — check PSI rating on all components',
//                                         'Drain the compressor tank after every use — moisture accumulation causes internal corrosion and tank failure',
//                                         'Inspect air hoses for cuts, abrasions, kinking, and damaged fittings before each use',
//                                         'Use whip hose connections at the tool end to absorb movement and reduce risk of hose whipping if connection fails',
//                                         'Never point a pneumatic nailer or stapler at any person — treat as a firearm',
//                                         'Never use compressed air to blow dust off clothing — this can drive particles into eyes, ears, or skin',
//                                     ],
//                                 },
//                             ],
//                         },
//                         {
//                             id: 'ch03-s4',
//                             title: '3.4 Stationary Power Tools',
//                             content: [
//                                 {
//                                     type: 'paragraph',
//                                     text: 'Stationary power tools are set up in a shop or on-site shop area for repeated precision work. All guards must be in place and functional. Tag-out procedures must be followed whenever a stationary tool is serviced, adjusted with tools, or blades are changed.',
//                                 },
//                                 {
//                                     type: 'table',
//                                     headers: ['Tool', 'Primary Use', 'Key Safety Points'],
//                                     rows: [
//                                         ['Table saw', 'Ripping lumber to width; crosscutting with mitre gauge', 'Anti-kickback pawls and riving knife (spreader) must be installed and properly set for all rip cuts; stand to the side — never directly behind the blade; use push sticks for narrow rips'],
//                                         ['Band saw', 'Curved cuts, resawing, irregular shapes in lumber', 'Set blade guide and thrust bearing just above workpiece height; do not back out a trapped piece while blade is moving; do not force thin pieces into tight curves'],
//                                         ['Radial arm saw', 'Crosscutting wide lumber at a fixed station', 'Keep blade behind the fence on return stroke; push the saw through the cut then retract; keep hands behind fence line at all times'],
//                                         ['Jointer', 'Flattening one face (S1S) or one edge of lumber', 'Never joint pieces shorter than 300 mm; use push blocks over the cutterhead; keep hands behind the fence; guard must cover the cutterhead between passes'],
//                                         ['Thickness planer', 'Reducing lumber to uniform thickness', 'Never plane pieces shorter than the distance between the infeed and outfeed rollers; keep hands and fingers away from the infeed opening; stand to the side'],
//                                         ['Drill press', 'Boring accurate, perpendicular holes', 'Clamp workpiece to table — never hold by hand; select correct speed for material and bit diameter; retract bit periodically to clear chips in deep holes'],
//                                         ['Router table', 'Edge profiles, dadoes, and template routing at a fixed station', 'Feed against the direction of cutter rotation; use featherboards to keep work against fence; never leave workpiece against a running bit unguarded'],
//                                     ],
//                                 },
//                             ],
//                         },
//                         {
//                             id: 'ch03-s5',
//                             title: '3.5 Layout Instruments',
//                             content: [
//                                 {
//                                     type: 'paragraph',
//                                     text: 'Accurate layout is the foundation of quality carpentry. Layout instruments range from the simple framing square to robotic total station survey equipment. Carpenters select the appropriate instrument based on required precision, project scale, and site conditions.',
//                                 },
//                                 {
//                                     type: 'table',
//                                     headers: ['Instrument', 'How It Works', 'Application'],
//                                     rows: [
//                                         ['Framing square (rafter square)', '90° steel square; rafter tables on body (blade)', 'Laying out rafters and stairs; checking square of framing; rafter tables give unit lengths by pitch'],
//                                         ['Speed square', 'Rigid triangular aluminium or steel square with degree scale', 'Quick 90° and 45° marks; setting saw base plate angle; checking stud plumb'],
//                                         ['Sliding T-bevel', 'Adjustable blade locks at any angle', 'Transferring and duplicating angles; compound mitre layout'],
//                                         ['Combination square', 'Adjustable steel rule with 45° and 90° head; spirit level in head', 'Marking depth; checking level and plumb; 45° and 90° layout'],
//                                         ['Builder\'s level (optical)', 'Telescope on a self-levelling or manually-levelled tripod; reads a graduated rod', 'Establishing consistent elevations across a site; checking floor framing levels; setting batter board heights'],
//                                         ['Rotary laser level', 'Spinning laser diode projects a 360° horizontal and/or vertical reference plane', 'Establishing level reference lines throughout a building; suspended ceiling layout; faster and one-person operation vs. optical level'],
//                                         ['Laser measuring system', 'Laser calculates distance, area, and volume electronically', 'Measuring interior dimensions; calculating material quantities for flooring, drywall, and concrete'],
//                                         ['Digital angle finder', 'Electronic protractor reads and holds angles', 'Setting compound mitre saw for crown moulding; finding existing angles during renovation'],
//                                         ['Total station / robotic survey', 'Electronic theodolite with integrated distance measurement; robotic versions self-track a prism target', 'Large commercial and civil projects; precise column grid layout, slab elevation control, anchor bolt locations'],
//                                         ['Plumb bob', 'Weighted point on a string; gravity provides perfect vertical reference', 'Transferring a point directly below; checking post plumb without a level in confined spaces'],
//                                         ['Chalk line', 'Chalk-coated string snapped against a surface', 'Marking long, straight lines for framing layout, sheathing courses, and tile layout'],
//                                     ],
//                                 },
//                                 {
//                                     type: 'infoBox',
//                                     title: 'Setting Up Layout Instruments',
//                                     items: [
//                                         'Select a stable location away from high-traffic areas and vibration sources that would disturb readings',
//                                         'Set up on firm, stable ground — level the tripod within the instrument\'s adjustment range before levelling the instrument',
//                                         'Check calibration before use; verify instrument accuracy by backsighting a known point',
//                                         'Document the benchmark elevation and grid reference before beginning any layout work',
//                                         'Protect instruments from rain, extreme temperatures, and physical impact; store in padded cases',
//                                         'Laser instruments require users to use appropriate laser-rated eye protection for the class of laser',
//                                     ],
//                                 },
//                             ],
//                         },
//                         {
//                             id: 'ch03-s6',
//                             title: '3.6 Lifting, Rigging, and Hoisting Equipment',
//                             content: [
//                                 {
//                                     type: 'paragraph',
//                                     text: 'Carpenters regularly handle heavy structural members, pre-fabricated assemblies, trusses, and concrete forms. Knowledge of rigging, hoisting, and material handling equipment — and the regulations governing their use — is essential for safe and efficient carpentry operations.',
//                                 },
//                                 {
//                                     type: 'keyTerm',
//                                     term: 'Working Load Limit (WLL)',
//                                     definition: 'The maximum load that any rigging, hoisting, or lifting equipment is rated to carry. Loads must never exceed the WLL. Sling angles reduce the effective WLL — the more acute the sling angle from vertical, the lower the effective capacity of the sling.',
//                                 },
//                                 {
//                                     type: 'table',
//                                     headers: ['Equipment', 'Primary Use', 'Key Safety Point'],
//                                     rows: [
//                                         ['Crane (tower, mobile, boom truck)', 'Lifting trusses, heavy beams, gang forms, pre-fab assemblies', 'Certified operator required; lift plan for every lift; never work under a suspended load'],
//                                         ['Telehandler / rough-terrain forklift', 'Moving and placing framing materials, panels, and pallets on site', 'Certification required; check rated capacity at each boom extension; never travel with elevated load'],
//                                         ['Come-along / grip hoist', 'Pulling or positioning loads horizontally or at modest angles', 'Check WLL before each use; inspect cable and pawl; never stand in the line of force'],
//                                         ['Wire rope slings and synthetic slings', 'Attaching loads to crane hooks or hoisting equipment', 'Inspect for bird-caging, kinks, broken wires (wire rope), cuts, and abrasion (synthetic) before every use; check angle factors'],
//                                         ['Shackles', 'Connecting slings to hooks, lifting beams, and rigging hardware', 'Mouse (secure) the pin on all shackles; check WLL and inspect for cracks, bends, or wear'],
//                                         ['Spreader bar', 'Distributing crane load across multiple attachment points on long loads (trusses, beams)', 'Prevents inward crushing force on load; engineered for rated load; correct length for load'],
//                                         ['Tag lines', 'Controlling swing and rotation of a suspended load', 'Use tag lines from outside the swing radius — never stand under the load to control it'],
//                                     ],
//                                 },
//                             ],
//                         },
//                     ],
//                     practiceQuestions: [],
//                 },

//                 // CHAPTER 4 — TEMPORARY ACCESS STRUCTURES (MWA A-3)
//                 {
//                     id: 'ch-04',
//                     number: 4,
//                     title: 'Temporary Access Structures',
//                     subtitle: 'MWA A-3 · Builds and Uses Temporary Access Structures (3 questions — 25% of MWA A)',
//                     isFree: false,
//                     estimatedMinutes: 45,
//                     sections: [
//                         {
//                             id: 'ch04-s1',
//                             title: '4.1 Ladders',
//                             content: [
//                                 {
//                                     type: 'paragraph',
//                                     text: 'Ladders are the most frequently used access equipment on carpentry sites and are involved in a disproportionate share of construction falls. Carpenters must inspect every ladder before each use and understand proper setup and safe use limits for each type.',
//                                 },
//                                 {
//                                     type: 'keyTerm',
//                                     term: '4:1 Angle Rule',
//                                     definition: 'The correct working angle for an extension ladder — the base must be placed 1 m away from the wall for every 4 m of vertical height. This results in approximately a 75° angle from horizontal. Too steep increases tip-over risk; too shallow increases base-sliding risk.',
//                                 },
//                                 {
//                                     type: 'table',
//                                     headers: ['Ladder Type', 'Configuration', 'Key Rules'],
//                                     rows: [
//                                         ['Extension ladder', 'Two sections (base and fly) that extend; adjustable working length', 'Apply 4:1 angle; extend top at least 1 m above landing; secure top to structure and foot to floor; minimum rung overlap per rated length (typically 3 rungs)'],
//                                         ['Step ladder', 'Self-supporting A-frame with spreader locked open', 'Never use as a straight (lean-to) ladder; open fully and verify spreader is locked; never stand on top cap, top step, or back section'],
//                                         ['Platform ladder', 'Step ladder with a stable standing platform and guardrails', 'Stand on the platform only; useful for extended overhead work such as drywall and trim'],
//                                         ['Ladder jacks', 'Triangular brackets hooked over ladder rungs supporting a scaffold plank', 'Require two ladders; use scaffold-grade planks only; limited height per provincial regulation'],
//                                         ['Articulating (multi-position) ladder', 'Multiple hinge points allow multiple configurations', 'Verify all locking pins are fully engaged at every hinge before climbing'],
//                                     ],
//                                 },
//                                 {
//                                     type: 'infoBox',
//                                     title: 'Ladder Safety Rules',
//                                     items: [
//                                         'Inspect before every use — bent rails, broken or missing rungs, damaged feet, worn anti-slip surfaces, loose or missing locks',
//                                         'Tag defective ladders and remove from service immediately; field repairs are not permitted',
//                                         'One person on a ladder at a time unless the ladder is specifically rated for two persons',
//                                         'Face the ladder when ascending and descending; maintain three-point contact (two hands, one foot OR two feet, one hand) at all times',
//                                         'Never carry tools or materials in both hands — use a tool belt, bucket, or separate material hoist',
//                                         'Do not stand above the designated maximum standing height marked on the ladder',
//                                         'Use fibreglass ladders around electrical equipment; never use metal ladders near power lines',
//                                     ],
//                                 },
//                             ],
//                         },
//                         {
//                             id: 'ch04-s2',
//                             title: '4.2 Scaffolding Systems',
//                             content: [
//                                 {
//                                     type: 'paragraph',
//                                     text: 'Scaffolding provides elevated, stable work platforms for carpentry tasks including exterior cladding, formwork, roofing, and any task requiring extended work at height. Many jurisdictions require documented competency before erecting or modifying scaffolding above specified heights. Carpenters must inspect scaffolding before each shift.',
//                                 },
//                                 {
//                                     type: 'table',
//                                     headers: ['Type', 'Description', 'Common Carpentry Use'],
//                                     rows: [
//                                         ['Frame scaffolding (sectional)', 'Pre-fabricated H-frames stacked and cross-braced; simplest system to erect', 'Exterior siding, trim, roofing, and brick-tie on low to mid-rise buildings'],
//                                         ['Tube-and-clamp scaffolding', 'Individual steel tubes connected by swivel and fixed clamps; fully flexible configuration', 'Complex building shapes, curved facades, and work around structural obstacles'],
//                                         ['System scaffolding (Ringlock, Kwikstage, Cuplock)', 'Modular components with engineered connection points; fast erection with engineered capacity', 'Large commercial projects; requires engineered drawings for taller configurations'],
//                                         ['Pump-jack scaffolding', 'Vertical aluminium poles with foot-actuated jacks; raises plank and bracket', 'Exterior siding and trim on residential buildings; economical; usually one- or two-person operation'],
//                                         ['Swing stage (suspended scaffold)', 'Platform suspended from roof anchors and raised/lowered by power hoists', 'Exterior cladding and window installation on mid to high-rise buildings'],
//                                         ['Mobile scaffold (rolling)', 'Frame scaffold on locking casters', 'Interior drywall, ceiling grid, and finish work; wheels must be locked before worker steps on platform'],
//                                     ],
//                                 },
//                                 {
//                                     type: 'keyTerm',
//                                     term: 'Mudsill',
//                                     definition: 'A wide, flat plank (typically 38 mm × 250 mm or wider) placed under each scaffold base jack to distribute the scaffold load over a larger area of the ground surface, preventing the base jack from sinking into soft or uneven soil and causing scaffold settlement.',
//                                 },
//                                 {
//                                     type: 'infoBox',
//                                     title: 'Scaffolding Erection Requirements',
//                                     items: [
//                                         'Mudsills on firm, level ground under every base jack — the single most important step to prevent scaffold settlement',
//                                         'All frames and standards plumb, level, and square before adding any additional height',
//                                         'Cross-bracing installed on both diagonal faces of frame scaffolding at every tier; never remove for access',
//                                         'Guardrails (top rail minimum 900 mm–1,070 mm, mid rail, toe board) on all open sides at heights specified by AHJ',
//                                         'Working platforms fully planked with scaffold-grade planks or engineered deck units; gaps not exceeding 25 mm',
//                                         'Scaffold inspected by a competent person before the start of each shift and after any event that may affect stability (storm, impact)',
//                                         'Scaffold tied to the building at vertical and horizontal intervals per engineering or manufacturer\'s requirements for taller frames',
//                                         'Never remove or modify any structural component without authorization from a competent person',
//                                     ],
//                                 },
//                             ],
//                         },
//                         {
//                             id: 'ch04-s3',
//                             title: '4.3 Aerial Work Platforms (AWPs)',
//                             content: [
//                                 {
//                                     type: 'paragraph',
//                                     text: 'Aerial work platforms (AWPs) provide mobile, elevating work platforms for carpentry tasks. Operating powered AWPs requires training and certification in all Canadian jurisdictions. A pre-operation inspection is mandatory before each shift.',
//                                 },
//                                 {
//                                     type: 'table',
//                                     headers: ['AWP Type', 'Movement Capability', 'Typical Carpentry Application'],
//                                     rows: [
//                                         ['Scissor lift', 'Raises and lowers vertically; drives on wheels at ground level', 'Interior ceiling and drywall work; exterior cladding on flat, paved surfaces'],
//                                         ['Articulating boom lift (knuckle boom)', 'Boom with multiple articulated sections; 360° rotation; reaches over and around obstacles', 'Working over obstructions; complex exterior work; rooftop access'],
//                                         ['Telescopic boom lift (straight boom)', 'Extends straight out and up; greatest horizontal reach of AWP types', 'High commercial exteriors; large formwork; high ceilings in large open buildings'],
//                                         ['Personnel hoist (construction elevator)', 'Vertical transport on a mast attached to the building structure', 'Moving workers and materials efficiently between floors on multi-storey projects'],
//                                     ],
//                                 },
//                                 {
//                                     type: 'infoBox',
//                                     title: 'AWP Safety Requirements',
//                                     items: [
//                                         'Certification — operators must hold current certification for the class of AWP being operated',
//                                         'Daily pre-operation inspection using manufacturer\'s checklist before first use of each shift; document inspection',
//                                         'Full-body harness connected to the manufacturer\'s designated anchor point INSIDE the basket — never tied to external structure from inside a basket',
//                                         'Never exceed the platform\'s rated load capacity (workers + tools + materials)',
//                                         'Check overhead clearances — including overhead electrical lines — before raising; electrical contact is a leading cause of AWP fatalities',
//                                         'Level the unit on outriggers per manufacturer specifications before elevating; verify ground bearing capacity',
//                                         'Never place ladders, planks, or other devices in the basket to gain extra height',
//                                     ],
//                                 },
//                             ],
//                         },
//                     ],
//                     practiceQuestions: [],
//                 },
//             ],
//         },

//         // ============================================================
//         // PART 2 — PLANNING AND LAYOUT
//         // MWA B: Performs Planning and Layout (14%)
//         // ============================================================
//         {
//             id: 'part-2',
//             number: 2,
//             title: 'Planning and Layout',
//             description: 'Reading construction documents, organizing site work, and performing the precise layout that every structural element depends on.',
//             chapters: [

//                 // CHAPTER 5 — CONSTRUCTION DOCUMENTATION (MWA B-5, B-6)
//                 {
//                     id: 'ch-05',
//                     number: 5,
//                     title: 'Interpreting Construction Documentation',
//                     subtitle: 'MWA B-5 · Interprets Documentation (5 questions) & B-6 · Organizes Work (3 questions)',
//                     isFree: false,
//                     estimatedMinutes: 50,
//                     sections: [
//                         {
//                             id: 'ch05-s1',
//                             title: '5.1 Types of Construction Drawings',
//                             content: [
//                                 {
//                                     type: 'paragraph',
//                                     text: 'Carpenters must locate, read, and integrate information from multiple drawing types simultaneously. A conflict between drawings is resolved by following a document hierarchy: specifications override drawings; approved shop drawings override standard drawings for specific fabricated items; large-scale details override small-scale plans for the specific element shown.',
//                                 },
//                                 {
//                                     type: 'table',
//                                     headers: ['Drawing Type', 'What It Shows', 'Carpenter\'s Use'],
//                                     rows: [
//                                         ['Site plan', 'Property boundaries, building footprint, grades, utilities, north arrow, setbacks', 'Site layout; batter board placement; locating the building on the lot in relation to property lines'],
//                                         ['Architectural drawings', 'Floor plans, elevations, sections, room dimensions, finish schedules, door/window schedules', 'Framing layout; rough opening sizes; ceiling heights; partition locations; overall building dimensions'],
//                                         ['Structural drawings', 'Foundation plans, beam and column schedules, connection details, load paths, engineered member specs', 'Selecting correct engineered lumber; connection hardware; bearing and support requirements; shear wall locations'],
//                                         ['Mechanical drawings (HVAC, plumbing)', 'Duct runs, pipe routes, equipment locations, clearances', 'Framing openings for mechanical penetrations; coordination to avoid conflicts in joist or stud bays'],
//                                         ['Electrical drawings', 'Panel locations, conduit routes, outlet and switch locations, fixture schedules', 'Backing requirements for panels; locating wiring before cutting; rough opening coordination'],
//                                         ['Shop drawings', 'Fabrication details from manufacturers — trusses, stairs, millwork, windows, pre-fab walls', 'Confirming rough opening sizes; truss bearing and bracing requirements; review and approve before ordering or installing'],
//                                         ['As-built drawings', 'Record of actual installed conditions including deviations from the original design', 'Renovation reference; locating utilities and hidden structural elements behind finishes'],
//                                         ['Detail drawings', 'Large-scale close-up of a specific connection, assembly, or transition', 'Flashings, beam pockets, stair connections, window and door installation details'],
//                                     ],
//                                 },
//                                 {
//                                     type: 'infoBox',
//                                     title: 'Key Drawing Components Carpenters Must Read',
//                                     items: [
//                                         'Title block — trade, project name, drawing number, scale, revision date, engineer/architect seal',
//                                         'Scale — always confirm; drawings use architectural (1:50, 1:100) or engineering (1:200, 1:500) scales; written dimensions override scale',
//                                         'Dimensions — always read the written dimension number; NEVER scale a dimension from a drawing unless no dimension is given',
//                                         'Grid lines — lettered/numbered column grid (e.g., A1, B2) used to locate all structural elements precisely',
//                                         'Symbols and legends — identify door swing direction, window type, material hatch patterns, elevation markers, and section cut lines',
//                                         'Door and window schedules — table with unit type, size, rough opening size, hardware, and frame requirements for every opening',
//                                         'Revision clouds — highlight changes made after original issue; always check the drawing revision before using it',
//                                     ],
//                                 },
//                             ],
//                         },
//                         {
//                             id: 'ch05-s2',
//                             title: '5.2 Specifications, Safety Documentation, and Workplace Documents',
//                             content: [
//                                 {
//                                     type: 'paragraph',
//                                     text: 'Specifications are written documents accompanying construction drawings that describe material standards, workmanship requirements, and quality control. Safety documentation and workplace documents govern how the work is conducted on-site. Carpenters must know what these documents contain and where to find them.',
//                                 },
//                                 {
//                                     type: 'table',
//                                     headers: ['Document Type', 'Contents', 'Carpenter\'s Use'],
//                                     rows: [
//                                         ['Contract specifications (project specs)', 'Material grades, acceptable products, installation methods, testing requirements, warranty', 'Confirming lumber species and grades, fastener types and spacing, adhesive standards, insulation R-values'],
//                                         ['Manufacturers\' specifications', 'Product-specific installation instructions, fastening schedules, span tables, warranty conditions', 'I-joist installation; window installation; truss bracing — manufacturer specs always supersede general practice'],
//                                         ['Code books (NBC, provincial/territorial building codes)', 'Minimum construction requirements; span tables; stair geometry; fire separation', 'Confirming minimum standards when project specs are silent; apply the more stringent of code vs. spec'],
//                                         ['Safety Data Sheets (SDS)', 'Hazard identification, composition, exposure controls, PPE, first aid, storage for each hazardous product', 'Required on-site and accessible to all workers for every WHMIS-controlled product'],
//                                         ['Change orders (CO)', 'Formally authorized modifications to scope, documents, cost, and schedule', 'Supersede original drawings and specs for the affected work; implement promptly and document'],
//                                         ['Requests for Information (RFI)', 'Carpenter\'s formal written request to designer for clarification', 'Submit when drawings are unclear or conflicting; never assume — get written response before proceeding'],
//                                         ['Site Instructions (SI)', 'Designer\'s direction to proceed with a change without a full change order', 'Implement and document; clarify if SI affects cost or schedule'],
//                                         ['Field Level Risk Assessment (FLRA)', 'On-site hazard identification and control before each task begins', 'Completed by workers before starting any task; identifies site-specific hazards not covered by general safety plan'],
//                                     ],
//                                 },
//                             ],
//                         },
//                         {
//                             id: 'ch05-s3',
//                             title: '5.3 Quantity Takeoff and Work Organization',
//                             content: [
//                                 {
//                                     type: 'paragraph',
//                                     text: 'Quantity takeoff (QTO) calculates the amount of material required from construction documents. Accurate takeoff prevents costly shortages and excess waste. All quantities include a waste factor. Work organization — sequencing tasks and coordinating with other trades — is critical to project efficiency.',
//                                 },
//                                 {
//                                     type: 'table',
//                                     headers: ['Material', 'Takeoff Method', 'Waste Factor'],
//                                     rows: [
//                                         ['Framing lumber (random lengths)', 'Count linear metres of each member size from plans; add waste for cuts and defects', '10–15%'],
//                                         ['Plywood / OSB sheathing', 'Calculate area (m²) ÷ panel area (2.44 × 1.22 = 2.97 m²); round up to whole panels', '5–10%'],
//                                         ['Drywall', 'Calculate wall and ceiling area in m²; divide by sheet area; deduct openings and add waste at cuts and joints', '10–15%'],
//                                         ['Dimensional studs', 'Wall length (mm) ÷ stud spacing + 1; add for openings (king/jack studs) and corner assemblies', '5–10%'],
//                                         ['Finish flooring (hardwood, laminate, LVP)', 'Area in m²; add more waste for diagonal layout or complex room shapes', '10–15%'],
//                                         ['Roofing (asphalt shingles)', 'Roof area in squares (1 square = 9.29 m²); add hip/valley waste; add starter course', '10–15%'],
//                                         ['Ready-mix concrete (slab)', 'Volume = L × W × D in metres = m³; add overrun to ensure full pour', '5–10% overrun'],
//                                     ],
//                                 },
//                                 {
//                                     type: 'infoBox',
//                                     title: 'Work Sequencing and Site Preparation Principles (Task B-6)',
//                                     items: [
//                                         'Identify the critical path — sequence tasks so downstream trades are never waiting for carpentry to be complete (e.g., framing complete before electrical rough-in)',
//                                         'Coordinate material deliveries just-in-time — avoid site congestion but prevent work stoppages due to material shortages',
//                                         'Plan crane and lift equipment time — coordinate with other trades to maximize crane efficiency (crane time is expensive)',
//                                         'Locate all existing utilities before any excavation or wall penetration work — use utility locating services',
//                                         'Install fencing, hoarding, and safety signage to protect the public and control site access',
//                                         'Set up material storage areas considering crane reach, security, weather protection, and prefab assembly space',
//                                         'Establish LOTO procedures for temporary power and site utilities before framing work begins in their vicinity',
//                                     ],
//                                 },
//                             ],
//                         },
//                     ],
//                     practiceQuestions: [],
//                 },

//                 // CHAPTER 6 — LAYOUT (MWA B-7)
//                 {
//                     id: 'ch-06',
//                     number: 6,
//                     title: 'Performing Layout',
//                     subtitle: 'MWA B-7 · Performs Layout (6 questions — 43% of MWA B)',
//                     isFree: false,
//                     estimatedMinutes: 55,
//                     sections: [
//                         {
//                             id: 'ch06-s1',
//                             title: '6.1 Site Layout and Batter Boards',
//                             content: [
//                                 {
//                                     type: 'paragraph',
//                                     text: 'Site layout establishes the precise location, elevation, and orientation of the building on its lot, translating the site plan into physical reference points on the ground. All structural layout depends on accurate site layout — errors here compound through every subsequent phase of construction.',
//                                 },
//                                 {
//                                     type: 'keyTerm',
//                                     term: 'Batter Boards',
//                                     definition: 'Boards supported on stakes set approximately 1.2–1.8 m beyond each corner of the excavation. String lines stretched between batter boards mark the building\'s grid lines. Because batter boards are outside the excavation footprint, strings can be removed and replaced in exactly the same position as work progresses through excavation, formwork, and foundation stages.',
//                                 },
//                                 {
//                                     type: 'keyTerm',
//                                     term: 'Benchmark',
//                                     definition: 'A fixed point of known elevation used as the reference for all vertical measurements on the project. The benchmark must be on a stable, permanent element that will not be disturbed during construction — a concrete curb, an existing building foundation, or a surveyor\'s rod driven into undisturbed soil.',
//                                 },
//                                 {
//                                     type: 'numbered',
//                                     items: [
//                                         'Locate the building on the site using measurements from the site plan — measure from established property lines or surveyed reference points to establish the first building corner.',
//                                         'Set batter boards approximately 1.2–1.8 m beyond each corner of the planned excavation, on stable, undisturbed ground.',
//                                         'Level the batter board crosspieces using a builder\'s level or rotary laser level, all to the same reference elevation (the benchmark elevation plus any desired elevation offset).',
//                                         'Run string lines between batter boards to represent each building grid line; check that opposite strings are parallel.',
//                                         'Check for square using the 3-4-5 rule (or multiples): a = 3, b = 4, diagonal c must = 5 for a perfect 90° corner. Use large multiples for greater accuracy (9-12-15, 30-40-50 metres).',
//                                         'Verify square by measuring both diagonals of the rectangular building outline — equal diagonals confirm a square or rectangular building.',
//                                         'Mark string positions on batter boards with saw kerfs or nails so strings can be repositioned exactly at any time.',
//                                         'Record the benchmark elevation and all grid line offsets in the site layout notes.',
//                                     ],
//                                 },
//                                 {
//                                     type: 'keyTerm',
//                                     term: 'Pythagorean Theorem (3-4-5 Rule)',
//                                     definition: 'In any right triangle: a² + b² = c². For layout squaring: if a = 3 m and b = 4 m, the diagonal c must equal exactly 5 m for a perfect 90° corner. For large buildings, use larger multiples (9-12-15, 30-40-50) for maximum precision. Equal diagonals across a rectangle also confirm square.',
//                                 },
//                             ],
//                         },
//                         {
//                             id: 'ch06-s2',
//                             title: '6.2 Key Layout Calculations',
//                             content: [
//                                 {
//                                     type: 'paragraph',
//                                     text: 'Mathematical calculation questions — including layout, rafter, stair, and concrete volume — are heavily represented in MWA B and throughout the exam. The Critical Thinking question type often involves multi-step calculations. Practise every formula in both metric and imperial units until the process is automatic.',
//                                 },
//                                 {
//                                     type: 'table',
//                                     headers: ['Calculation', 'Formula', 'Example'],
//                                     rows: [
//                                         ['Diagonal check (squaring)', 'c = √(a² + b²)', 'Building 9 m × 12 m: c = √(81 + 144) = √225 = 15 m exactly — it\'s square'],
//                                         ['45° diagonal', 'Diagonal = side × 1.414', 'Square room 4 m × 4 m: diagonal = 4 × 1.414 = 5.656 m'],
//                                         ['Stud count', '(Wall length ÷ spacing) + 1, then add for each opening (2 king + 2 jack studs) and each corner', '8 m wall at 400 mm o.c.: (8000 ÷ 400) + 1 = 21 studs + extras for openings and corners'],
//                                         ['Rafter total run', 'Run = total span ÷ 2', 'Building span 8 m: run = 4 m per side'],
//                                         ['Rafter total rise', 'Rise = run × unit rise ÷ unit run (use 300 mm as unit run in metric)', '6:12 pitch, 4 m run: rise = 4000 × 150 ÷ 300 = 2,000 mm'],
//                                         ['Rafter length (rafter factor method)', 'Rafter length = run (mm) × rafter factor', '6:12 pitch, 4 m run: 4000 × 1.118 = 4,472 mm; add overhang separately'],
//                                         ['Rafter length (Pythagorean method)', 'c = √(rise² + run²)', '√(2000² + 4000²) = √(4,000,000 + 16,000,000) = √20,000,000 = 4,472 mm ✓'],
//                                         ['Stair number of risers', 'Total rise ÷ target unit rise; round to nearest whole number', '2,250 mm ÷ 175 mm = 12.86 → 13 risers'],
//                                         ['Stair actual unit rise', 'Total rise ÷ number of risers', '2,250 ÷ 13 = 173.1 mm ✓ (under 200 mm max)'],
//                                         ['Stair total run', 'Unit run × (number of risers − 1)', '235 mm × 12 = 2,820 mm total run'],
//                                         ['Concrete slab volume', 'V = L × W × D (metres)', '9 × 6 × 0.10 = 5.4 m³; add 10% overrun → order 5.94 m³ (round to 6 m³)'],
//                                         ['Strapping quantity (lineal metres)', '(Wall height ÷ strapping spacing) × number of rows × wall length', 'Wall 2.9 m high × 9 m long at 600 mm o.c.: rows = 2900 ÷ 600 = 4.83 → 5 rows; lineal metres = 5 × 9 = 45 m'],
//                                     ],
//                                 },
//                                 {
//                                     type: 'infoBox',
//                                     title: 'Unit Conversions for the Exam',
//                                     items: [
//                                         '1 inch = 25.4 mm',
//                                         '1 foot = 304.8 mm (use 305 mm for quick estimates)',
//                                         '1 metre = 3.281 feet',
//                                         '1 m² = 10.764 ft²',
//                                         '1 ft² = 0.0929 m²',
//                                         '1 m³ = 1.308 cubic yards',
//                                         '1 roofing square = 100 ft² = 9.29 m²',
//                                         '12 inches = 1 foot; 12" is the standard unit run in imperial rafter calculations',
//                                         '300 mm is the standard unit run in metric rafter calculations',
//                                         'π = 3.14 (as given on the official exam formula sheet)',
//                                     ],
//                                 },
//                             ],
//                         },
//                     ],
//                     practiceQuestions: [],
//                 },
//             ],
//         },

//         // ============================================================
//         // PART 3 — CONCRETE WORK
//         // MWA C: Performs Concrete Work (16%)
//         // ============================================================
//         {
//             id: 'part-3',
//             number: 3,
//             title: 'Concrete Work',
//             description: 'Formwork is the dominant topic on the exam within MWA C — Task C-8 alone carries 12 of the 16 concrete questions. Master formwork to dominate this section.',
//             chapters: [

//                 // CHAPTER 7 — FORMWORK (MWA C-8)
//                 {
//                     id: 'ch-07',
//                     number: 7,
//                     title: 'Constructing Formwork',
//                     subtitle: 'MWA C-8 · Constructs Formwork (12 questions — 75% of MWA C)',
//                     isFree: false,
//                     estimatedMinutes: 65,
//                     sections: [
//                         {
//                             id: 'ch07-s1',
//                             title: '7.1 Formwork Fundamentals',
//                             content: [
//                                 {
//                                     type: 'paragraph',
//                                     text: 'Formwork is the temporary mold system that gives concrete its shape while it sets and cures. Formwork is one of the most technically demanding tasks in carpentry — forms must be strong enough to resist concrete pressure, accurate enough to produce specification-compliant structure, and economical enough to be practical. Formwork typically represents 30–60% of the total in-place cost of a concrete structure.',
//                                 },
//                                 {
//                                     type: 'keyTerm',
//                                     term: 'Lateral Pressure (Concrete)',
//                                     definition: 'Fresh concrete behaves like a fluid and exerts outward pressure on form walls in all horizontal directions. Lateral pressure is greatest at the bottom of a form wall and decreases upward. Pressure increases with: faster pour rate, colder concrete temperature (slower set = higher maximum pressure), greater pour height, use of retarding admixtures, and higher concrete unit weight.',
//                                 },
//                                 {
//                                     type: 'table',
//                                     headers: ['Formwork Component', 'Function'],
//                                     rows: [
//                                         ['Form sheathing (plywood or steel panels)', 'Direct contact surface that shapes the concrete; must be smooth, tight-jointed, and treated with release agent'],
//                                         ['Studs (vertical behind sheathing)', 'Span between walers; resist lateral concrete pressure through bending; spacing determined by design pressure and sheathing rating'],
//                                         ['Walers (horizontal behind studs)', 'Horizontal beams gathering load from studs and transferring it to form ties; single or double walers depending on load'],
//                                         ['Form ties (snap ties, she-bolts, coil ties)', 'Steel rods passing completely through the form wall; resist the spreading force of concrete; break off or unscrew and withdraw after stripping'],
//                                         ['Wedges and clamps', 'Tighten the waler assembly against the protruding tie ends; must be fully driven home to achieve rated tie capacity'],
//                                         ['Braces and kickers', 'Diagonal members that prevent the form assembly from tipping or sliding under lateral load or during placement vibration'],
//                                         ['Mudsills', 'Wide planks under all vertical shores and form bases; distribute concentrated point loads across weak or uncompacted ground'],
//                                         ['Falsework (shores, stringers, and joists)', 'Vertical shores and horizontal framing members supporting elevated slab forms (slab deck) from below; must be engineered'],
//                                         ['Release agent (form oil)', 'Applied to form sheathing contact surface before the pour; prevents concrete from bonding to forms and allows clean stripping with minimal surface damage'],
//                                         ['Bulkheads (stop ends)', 'Temporary end panels that terminate a pour at a designated construction joint; allow a pour to be stopped and resumed'],
//                                     ],
//                                 },
//                             ],
//                         },
//                         {
//                             id: 'ch07-s2',
//                             title: '7.2 Formwork Systems',
//                             content: [
//                                 {
//                                     type: 'paragraph',
//                                     text: 'Different projects require different formwork systems. Understanding the characteristics and appropriate applications of each system — including its advantages, limitations, and assembly requirements — is essential for the exam.',
//                                 },
//                                 {
//                                     type: 'table',
//                                     headers: ['System', 'Description', 'Best Application'],
//                                     rows: [
//                                         ['Site-built (job-built) forms', 'Custom forms built on-site from plywood and dimensional lumber; maximum flexibility', 'Unique shapes, residential footings, non-repetitive elements; one-off or few-re-use situations'],
//                                         ['Gang forms (large-panel systems)', 'Large pre-assembled form panel assemblies crane-lifted into position; high re-use value', 'High-rise walls, parking structures, bridge abutments — repetitive lifts justify the investment'],
//                                         ['Slip form', 'Continuously-moving form that rises at a controlled rate as concrete is placed and achieves initial set', 'Elevator cores, silos, chimneys — requires continuous 24-hour operation; no construction joints'],
//                                         ['Jump form', 'Self-climbing form raised in discrete lifts (jumps); each lift is a separate pour with a construction joint', 'High-rise building cores; provides integral work platform and weather protection; slower cycle than slip form but more practical for typical floors'],
//                                         ['ICF (Insulated Concrete Forms)', 'Interlocking foam blocks stacked, filled with rebar and concrete; foam forms stay in place permanently as insulation and finish substrate', 'Residential and light commercial basement walls and above-grade walls; superior energy performance; no stripping required'],
//                                         ['Pre-fabricated column forms (Sonotube)', 'Spiral-wound fibre tubes providing a round column form; tear away after concrete sets', 'Isolated columns, deck posts, round architectural columns; economical and disposable'],
//                                         ['Slab deck systems (shoring and table forms)', 'Horizontal falsework shores and framing supporting horizontal slab forms from below; engineered layout required', 'All suspended concrete slabs — must be designed and inspected by a competent person before loading'],
//                                     ],
//                                 },
//                                 {
//                                     type: 'infoBox',
//                                     title: 'Formwork Safety — Critical Rules',
//                                     items: [
//                                         'Forms for large pours or wall heights exceeding approximately 1.2 m must be designed or reviewed by an engineer — maximum pour rates and lateral pressures are specified',
//                                         'Inspect ALL components before each pour — ties, wedges, bracing connections, mudsill bearing, and sheathing condition',
//                                         'Never exceed the engineered pour rate — pouring too fast increases lateral pressure beyond the form\'s design capacity',
//                                         'Maintain clear, unobstructed access and egress routes for all workers around the form areas at all times during pouring',
//                                         'Workers near concrete pours must wear rubber or chemical-resistant gloves, face shield, and rubber boots — wet concrete is highly alkaline and causes chemical burns on prolonged contact',
//                                         'If formwork shows signs of movement, distress, or imminent blowout during a pour: stop placing, evacuate the area, and implement the emergency plan — do not attempt to add more bracing while concrete is being placed',
//                                     ],
//                                 },
//                             ],
//                         },
//                         {
//                             id: 'ch07-s3',
//                             title: '7.3 Footing, Wall, and Elevated Slab Forms',
//                             content: [
//                                 {
//                                     type: 'paragraph',
//                                     text: 'Each type of structural element requires a specific form configuration, assembly sequence, and stripping criteria. Knowing the requirements and typical stripping times for each form type is a common exam topic.',
//                                 },
//                                 {
//                                     type: 'table',
//                                     headers: ['Form Type', 'Key Assembly Requirements', 'Typical Minimum Stripping Time'],
//                                     rows: [
//                                         ['Footing forms (continuous strip footings)', 'Side forms only (bottom is excavated earth); level the top with laser or string; provide keyway slot for wall attachment; install rebar chairs before pour', '12–24 hours (side forms only; footing bears on soil immediately)'],
//                                         ['Foundation wall forms', 'Both sides of the full wall height; snap ties at calculated horizontal and vertical spacing; double walers at tie bearing points; brace diagonally; align to batter board strings', '12–24 hours wall side forms (verify local AHJ and engineer requirements before stripping)'],
//                                         ['Column forms', 'Sonotube or gang form panel; plumb and brace in two perpendicular directions; yokes at calculated vertical spacing to resist bursting pressure', '24–48 hours minimum for normal-strength concrete'],
//                                         ['Elevated slab forms (slab deck)', 'Engineered shores at calculated spacing; horizontal stringers; cross joists; form sheathing; must be level and camber must be set; edge forms at slab perimeter', '7–14 days with normal-strength concrete (Type GU) at typical temperatures; depends on design strength required before stripping'],
//                                         ['Beam (soffit and sides)', 'Soffit form supported by falsework shores; side forms clamped or tied; sequence: strip side forms first, shore soffit until beam can carry its own weight and expected loads', '14–21 days for beam soffits — must carry load until concrete achieves design strength'],
//                                     ],
//                                 },
//                                 {
//                                     type: 'keyTerm',
//                                     term: 'Reshoring',
//                                     definition: 'The installation of new shoring below a level whose form shoring has been removed, when the concrete has not yet achieved its full design strength and construction loads (materials, equipment) are placed above. The structural engineer specifies which levels must be reshored and when reshoring can be removed.',
//                                 },
//                                 {
//                                     type: 'paragraph',
//                                     text: 'Excavation shoring is required whenever workers must enter or work near an excavation deeper than 1.2 m (this threshold varies by jurisdiction). Common shoring systems include timber sheeting and bracing, hydraulic shores, and proprietary trench boxes. Carpenters may erect timber shoring systems; hydraulic and trench box systems are often rented and installed by specialized crews. Underpinning — building new foundation support beneath an existing structure during adjacent excavation — requires engineering and specialist carpentry.',
//                                 },
//                             ],
//                         },
//                     ],
//                     practiceQuestions: [],
//                 },

//                 // CHAPTER 8 — CONCRETE PLACEMENT AND CURING (MWA C-9)
//                 {
//                     id: 'ch-08',
//                     number: 8,
//                     title: 'Concrete Placement, Curing and Finishing',
//                     subtitle: 'MWA C-9 · Installs Concrete, Cement-Based and Epoxy Products (4 questions — 25% of MWA C)',
//                     isFree: false,
//                     estimatedMinutes: 40,
//                     sections: [
//                         {
//                             id: 'ch08-s1',
//                             title: '8.1 Concrete Materials and Admixtures',
//                             content: [
//                                 {
//                                     type: 'paragraph',
//                                     text: 'Carpenters work directly with concrete in formwork tasks and must understand concrete properties to construct proper formwork, set correct pour rates, and coordinate concrete placement. Understanding admixtures is important because they affect set time and therefore when forms can be stripped.',
//                                 },
//                                 {
//                                     type: 'keyTerm',
//                                     term: 'Hydration',
//                                     definition: 'The chemical reaction between Portland cement and water that causes concrete to harden and gain strength. Hydration requires adequate moisture and temperature (above approximately 10°C). Concrete does NOT dry — it gains strength through this chemical process regardless of drying. Preventing moisture loss during curing is critical.',
//                                 },
//                                 {
//                                     type: 'table',
//                                     headers: ['Admixture Type', 'Effect on Concrete', 'Impact on Formwork'],
//                                     rows: [
//                                         ['Air-entraining admixture', 'Creates microscopic air bubbles throughout concrete; dramatically improves freeze-thaw durability', 'Required for all exterior exposed concrete in Canada; does not significantly affect set time or form pressure'],
//                                         ['Water-reducing admixture (plasticizer)', 'Reduces the water required for a given workability; increases strength for the same water-cement ratio', 'Allows placement with lower water-cement ratio without losing workability'],
//                                         ['Superplasticizer (high-range water reducer)', 'Major reduction in water; enables very fluid, self-placing mixes', 'Self-consolidating concrete (SCC) requires no vibration; may exert full hydrostatic pressure on forms at any pour height — forms must be designed accordingly'],
//                                         ['Accelerating admixture', 'Speeds up hydration; increases early strength gain', 'Reduces time before form stripping is possible; useful in cold weather; increases initial pour pressure rate'],
//                                         ['Retarding admixture', 'Slows hydration; extends workability time', 'Increases the time forms must remain in place; often used in hot weather or for long transport; increases maximum form pressure'],
//                                         ['Fly ash (SCM)', 'Partial cement replacement; improves workability; increases long-term strength; reduces heat of hydration', 'Slows strength gain — forms may need to remain in place longer before stripping; reduces initial heat generation'],
//                                     ],
//                                 },
//                             ],
//                         },
//                         {
//                             id: 'ch08-s2',
//                             title: '8.2 Concrete Placement and Curing',
//                             content: [
//                                 {
//                                     type: 'paragraph',
//                                     text: 'Improper concrete placement is a leading cause of poor concrete quality, surface defects, and formwork failure. Carpenters must understand correct placement practices because they directly affect how the forms perform during the pour.',
//                                 },
//                                 {
//                                     type: 'infoBox',
//                                     title: 'Concrete Placement Best Practices',
//                                     items: [
//                                         'NEVER add extra water to concrete on-site to improve workability — this is the single most common and damaging site practice; it weakens the concrete and violates the mix design',
//                                         'Place concrete in layers of 300–500 mm maximum depth; consolidate each layer before placing the next',
//                                         'Use an internal vibrator (pencil vibrator) at 450 mm intervals; penetrate 150 mm into the previous layer to knit layers together and eliminate cold joints',
//                                         'Do not drag or move concrete horizontally with the vibrator — place concrete close to its final position first',
//                                         'Avoid over-vibrating in one spot — this causes segregation (aggregate sinks, water and cement paste rise to the surface)',
//                                         'Strike off the top surface with a screed after each layer; wait for bleed water to fully evaporate before applying any surface finish — finishing over bleed water creates a weak, dusty surface',
//                                         'Monitor forms continuously during the pour — observe for any movement, tie distress, sheathing deflection, or joint opening',
//                                     ],
//                                 },
//                                 {
//                                     type: 'table',
//                                     headers: ['Curing Method', 'How It Works', 'Application and Notes'],
//                                     rows: [
//                                         ['Wet curing (ponding)', 'Surface flooded with water and maintained continuously wet', 'Horizontal slabs; most effective method for strength development; requires monitoring to keep surface wet'],
//                                         ['Wet burlap / curing blankets', 'Wet burlap or absorbent blankets draped over surface and kept wet', 'Walls, columns, slabs; practical for most site conditions; must be kept continuously wet'],
//                                         ['Curing compound (membrane)', 'Liquid sprayed immediately after finishing; forms moisture-retaining membrane', 'Horizontal slabs; fast and economical; some compounds affect bonding of subsequent coatings or toppings — check compatibility'],
//                                         ['Plastic sheeting', 'Sealed polyethylene sheeting placed in direct contact with concrete surface', 'All surfaces; effective when edges are sealed; can cause discolouration (mottling) under direct sunlight'],
//                                         ['Insulating blankets (cold weather)', 'Insulated blankets capture heat of hydration and prevent freezing', 'Cold weather concreting (below 5°C ambient); forms must remain in place longer; fresh concrete must not freeze'],
//                                     ],
//                                 },
//                                 {
//                                     type: 'keyTerm',
//                                     term: 'Minimum Curing Requirements',
//                                     definition: 'Concrete must be maintained at or above 10°C for a minimum of 7 days for normal Portland cement (Type GU) to develop adequate strength for form removal. Colder temperatures require longer times or heated protection. Forms should not be stripped until concrete achieves at least 70% of its design strength (confirmed by cylinder break tests for critical elements).',
//                                 },
//                             ],
//                         },
//                     ],
//                     practiceQuestions: [],
//                 },
//             ],
//         },

//         // ============================================================
//         // PART 4 — FRAMING (LARGEST SECTION — 20%)
//         // MWA D: Performs Framing (20%)
//         // ============================================================
//         {
//             id: 'part-4',
//             number: 4,
//             title: 'Framing',
//             description: 'Framing is the single largest MWA on the exam at 20% — 20 questions. Floor systems, decks, walls, and roofs: every structural element carpenters build from wood and engineered lumber.',
//             chapters: [

//                 // CHAPTER 9 — FLOOR AND DECK SYSTEMS (MWA D-10, D-11)
//                 {
//                     id: 'ch-09',
//                     number: 9,
//                     title: 'Floor and Deck Systems',
//                     subtitle: 'MWA D-10 · Constructs Floor Systems (6 questions) & D-11 · Constructs Deck Systems (3 questions)',
//                     isFree: false,
//                     estimatedMinutes: 60,
//                     sections: [
//                         {
//                             id: 'ch09-s1',
//                             title: '9.1 Dimensional Lumber Floor Framing',
//                             content: [
//                                 {
//                                     type: 'paragraph',
//                                     text: 'Floor framing supports all loads from above and transfers them to beams, foundation walls, and posts. Dimensional lumber floor framing uses standard SPF lumber (or Douglas fir) in a repetitive joist system. All members are installed crown-up so that live loads push them toward a level position over time.',
//                                 },
//                                 {
//                                     type: 'table',
//                                     headers: ['Component', 'Description and Requirements'],
//                                     rows: [
//                                         ['Sill plate (mudsill)', 'First wood framing member; anchored to the foundation wall with anchor bolts (typically 12 mm dia. at 1.2 m o.c., max 300 mm from each corner); pressure-treated lumber required wherever wood contacts concrete; sill gasket (foam or fibre) provides air seal and capillary break'],
//                                         ['Beam / girder', 'Primary span member carrying floor joists; built-up lumber, LVL, PSL, steel, or concrete; supported in beam pockets formed in the foundation wall or on posts; minimum end bearing per code (typically 89 mm for wood-to-wood or 75 mm for wood-to-steel)'],
//                                         ['Floor joists', 'Repetitive horizontal members spanning sill-to-beam, beam-to-beam, or sill-to-sill; most common spacings 300, 400, and 600 mm o.c.; sizing from NBC span tables based on species, grade, joist spacing, and span length; crown installed upward'],
//                                         ['Rim joist (band joist)', 'Vertical member closing the end of all joists at the perimeter of the floor; provides lateral support to joist ends; nailing base for exterior wall framing and cladding'],
//                                         ['Header', 'Double joist perpendicular to regular joists framing an opening (stairwell, mechanical chase); must be sized from code tables based on opening span and load above'],
//                                         ['Trimmer joists', 'Full-length joists on each side of an opening that directly support the header ends'],
//                                         ['Cross-bridging or solid blocking', 'Diagonal wood or metal bridging, or solid blocking, between joists; prevents rotation and distributes concentrated loads across multiple joists; required at mid-span for spans over 2.5 m and at supports'],
//                                         ['Sub-floor sheathing', 'Tongue-and-groove plywood or OSB panels (typically 19 mm for 400 mm o.c. joists); glued (construction adhesive) and nailed in a staggered pattern; gluing eliminates squeaking and increases structural performance'],
//                                     ],
//                                 },
//                                 {
//                                     type: 'infoBox',
//                                     title: 'Notching and Drilling Rules for Dimensional Lumber Joists',
//                                     items: [
//                                         'Notches — permitted only in the outer third of the joist span (within 1/3 of each bearing); maximum notch depth = 1/4 of joist depth; NEVER notch in the middle third (maximum moment zone) — this is a common exam question',
//                                         'Holes (bored) — centre of hole minimum 50 mm from top or bottom edge; maximum hole diameter = 1/3 of joist depth; do not bore within 50 mm of a notch',
//                                         'These rules DO NOT apply to engineered lumber (I-joists, LVL) — see manufacturer\'s web stiffener chart and installation guide',
//                                         'When in doubt about any notching or boring location, consult the engineer of record or the manufacturer',
//                                     ],
//                                 },
//                             ],
//                         },
//                         {
//                             id: 'ch09-s2',
//                             title: '9.2 Engineered Floor Systems',
//                             content: [
//                                 {
//                                     type: 'paragraph',
//                                     text: 'Engineered lumber products allow longer clear spans, more consistent dimensions, lower weight, and less waste than equivalent dimensional lumber. Each product has unique installation requirements governed strictly by the manufacturer\'s specifications and must be followed exactly.',
//                                 },
//                                 {
//                                     type: 'table',
//                                     headers: ['Product', 'Description', 'Key Installation Rules'],
//                                     rows: [
//                                         ['LVL (Laminated Veneer Lumber)', 'Thin wood veneers glued together with grain parallel to the long axis; uniform and predictable strength; used for beams and headers', 'Install with the stamp face down (tension face); provide minimum bearing at each support per manufacturer; never modify without engineering'],
//                                         ['PSL (Parallel Strand Lumber)', 'Long wood strands glued parallel; very high bending and shear strength in a large beam format', 'Handle carefully — surface is soft and dents easily; specify minimum bearing; bevel cuts at beam end pockets are permitted'],
//                                         ['I-joist (TJI / wood I-beam)', 'OSB or plywood web with sawn lumber or LVL flanges glued in the factory; very high span-to-depth efficiency; light weight', 'CRITICAL: Never cut the top or bottom flanges; web holes only per manufacturer\'s chart; install squash blocks at all bearing points; web stiffeners at point loads and bearings; keep dry during construction'],
//                                         ['Floor trusses (open-web parallel chord)', 'Parallel top and bottom chords connected by web members; large open web space for mechanical services', 'Install per engineer\'s and manufacturer\'s drawings; never cut or modify without engineering approval; temporary bracing before sheathing'],
//                                         ['CLT (Cross-Laminated Timber)', 'Mass timber panel with alternating perpendicular lumber layers bonded together; used as floor, wall, and roof panels', 'Very heavy — crane required; connection design by engineer; fire-resistant char layer must not be compromised; coordinate all penetrations with engineer before drilling'],
//                                     ],
//                                 },
//                                 {
//                                     type: 'infoBox',
//                                     title: 'I-Joist Critical Installation Rules (Frequently Tested)',
//                                     items: [
//                                         'NEVER cut the top or bottom flanges — this completely destroys the I-joist\'s structural capacity and is irreversible',
//                                         'Web holes (for plumbing, electrical, etc.) must be cut only in locations and sizes permitted by the manufacturer\'s hole chart — hole size, location, and distance from bearing all have limits',
//                                         'Web stiffeners (blocks of lumber fitting between the flanges beside the web) are required at all bearing points and directly under any concentrated point load — without them, flanges buckle',
//                                         'Squash blocks (pieces of lumber installed vertically beside the I-joist at each bearing) carry the compression load that the I-joist flange cannot transfer — always install at bearing',
//                                         'I-joists must remain dry during construction — wetting causes flange swelling, delamination, and significant loss of capacity',
//                                         'Temporary lateral bracing required after setting each I-joist, before sub-floor sheathing is applied',
//                                     ],
//                                 },
//                             ],
//                         },
//                         {
//                             id: 'ch09-s3',
//                             title: '9.3 Deck Construction (Task D-11)',
//                             content: [
//                                 {
//                                     type: 'paragraph',
//                                     text: 'Deck construction shares principles with floor framing but has critical additional requirements because decks are permanently exposed to weather. Decks attached to the building structure (ledger-type decks) must be flashed and connected in a way that maintains the building envelope\'s integrity.',
//                                 },
//                                 {
//                                     type: 'table',
//                                     headers: ['Deck Component', 'Key Requirements'],
//                                     rows: [
//                                         ['Footings and posts', 'Concrete footings extending below the local frost depth; post bases (post saddles) keep wood off concrete; pressure-treated lumber (suitable for ground-contact exposure) required for all posts in contact with or near grade'],
//                                         ['Beams', 'Sizing from code span tables; minimum end bearing at posts; post caps or engineered beam-to-post connectors at top of posts'],
//                                         ['Ledger board', 'Through-bolted or lag-screwed to the building\'s rim joist or foundation with a code-specified pattern; flashing installed BEHIND the ledger at the building envelope to direct water out; the ledger-to-building connection is a critical structural element that must be engineered or follow prescriptive code'],
//                                         ['Deck joists', 'Span from ledger to beam or beam to beam; typically 300–400 mm o.c.; hurricane ties (twist straps) required at every joist-to-ledger and joist-to-beam bearing connection'],
//                                         ['Deck surface (decking)', 'Pressure-treated lumber, composite decking, or manufactured panels; gap between boards per material (typically 3–6 mm for drainage); slope deck minimum 1:50 (2%) for drainage; use material-specific fasteners'],
//                                         ['Guard/railing system', 'Required when deck floor is more than 600 mm above adjacent grade; minimum height 900 mm residential (1,070 mm commercial); no opening more than 100 mm (sphere test — 100 mm sphere cannot pass through any opening)'],
//                                         ['Flashings and membranes', 'Flashing at all ledger-to-building junctions; end grain of all framing members protected; waterproof membrane under any tile, pavers, or waterproof decking on enclosed spaces below'],
//                                     ],
//                                 },
//                                 {
//                                     type: 'infoBox',
//                                     title: 'Pressure-Treated Lumber and Fastener Compatibility',
//                                     items: [
//                                         'Modern pressure-treated lumber (ACQ, CA, MCA) contains copper-based preservatives that corrode plain steel — galvanized and stainless steel fasteners required',
//                                         'All fasteners, joist hangers, post bases, and structural connectors must be rated for the specific preservative system being used',
//                                         'Electroplated (zinc-plated, bright) fasteners are NOT acceptable for pressure-treated lumber — they corrode within a few years',
//                                         'Hot-dipped galvanized (HDG) or stainless steel are the standard choices; check manufacturer\'s approval for the specific treatment level',
//                                         'Wear gloves and respiratory protection when cutting pressure-treated lumber — do not burn offcuts or sawdust',
//                                         'Dispose of pressure-treated lumber offcuts as regulated waste in your jurisdiction — not in general construction waste',
//                                     ],
//                                 },
//                             ],
//                         },
//                     ],
//                     practiceQuestions: [],
//                 },

//                 // CHAPTER 10 — WALL AND ROOF FRAMING (MWA D-12, D-13)
//                 {
//                     id: 'ch-10',
//                     number: 10,
//                     title: 'Wall and Roof Framing',
//                     subtitle: 'MWA D-12 · Constructs Wall Systems (6 questions) & D-13 · Constructs Roof and Ceiling Systems (5 questions)',
//                     isFree: false,
//                     estimatedMinutes: 70,
//                     sections: [
//                         {
//                             id: 'ch10-s1',
//                             title: '10.1 Dimensional Lumber Wall Framing',
//                             content: [
//                                 {
//                                     type: 'paragraph',
//                                     text: 'Wall framing provides the vertical structure that supports floor and roof loads, encloses the building, and provides the substrate for all interior and exterior finishes. Dimensional lumber wall framing (platform framing) is the dominant system in Canadian residential and light commercial construction. Understanding every component, its name, and its function is essential — these are high-frequency exam topics.',
//                                 },
//                                 {
//                                     type: 'table',
//                                     headers: ['Component', 'Description and Requirements'],
//                                     rows: [
//                                         ['Bottom plate (sole plate)', 'Horizontal member at the base of every wall; sits on the sub-floor or slab; doubled at bearing walls on some designs; pressure-treated when in contact with concrete or within 200 mm of grade'],
//                                         ['Top plate', 'Single horizontal member at the top of the wall; lapped and nailed at corners and intersections by the double top plate above'],
//                                         ['Double top plate (cap plate)', 'Second horizontal member nailed on top of the top plate; laps over corners and wall intersections to tie the frame together; minimum 600 mm lap at joints; installed after all walls are plumbed and lined'],
//                                         ['Studs', 'Vertical members between bottom plate and top plate; most common spacings 300, 400, and 600 mm o.c.; standard stud height 2,440 mm (8 ft) for standard 2.44 m ceiling height; crown installed toward the interior of the building'],
//                                         ['King stud', 'Full-length stud running from bottom plate to top plate on each side of every rough opening; the jack stud is nailed directly to it'],
//                                         ['Jack stud (trimmer stud)', 'Short stud supporting the header directly; nailed to the inside face of the king stud; height = rough opening height; must be full bearing under header'],
//                                         ['Header (lintel)', 'Horizontal beam spanning the rough opening width and transferring loads to jack studs; sized from code tables based on opening span and load above; common residential headers: doubled 38×140, 38×184, 38×235, or LVL'],
//                                         ['Cripple studs', 'Short studs above a header (between header and top plate) and below a rough sill (between rough sill and bottom plate); maintain stud spacing for sheathing nailing; not structural for vertical loads but transfer lateral shear'],
//                                         ['Rough sill', 'Horizontal member at the bottom of a window rough opening; supported by cripple studs below; establishes window rough opening height from the floor'],
//                                         ['Corner assemblies', 'Three-stud corner (California corner) or two-stud corner with ladder blocking; provides nailing surface for interior drywall at all exterior corners and wall intersections'],
//                                         ['Wall sheathing', 'Structural OSB or plywood panels nailed to the exterior face of the stud wall; provides racking resistance (shear wall); thickness and nailing schedule from engineering or code; installed with long dimension vertical, joints staggered'],
//                                         ['Housewrap / building membrane', 'Installed over sheathing before cladding; provides a secondary air and water barrier; lapped shingle-fashion (upper over lower); taped at all seams and penetrations'],
//                                     ],
//                                 },
//                                 {
//                                     type: 'infoBox',
//                                     title: 'Wall Framing Sequence',
//                                     items: [
//                                         '1. Snap chalk lines for all wall positions on the sub-floor',
//                                         '2. Lay out bottom and top plates side by side; mark stud layout, openings, and corners simultaneously to ensure they match',
//                                         '3. Cut all components (studs, headers, king/jack studs, cripples, rough sills)',
//                                         '4. Assemble wall on the deck (frame flat); nail bottom plate–stud–top plate connections',
//                                         '5. Add king studs, jack studs, headers, cripple studs, and rough sills for all openings',
//                                         '6. Install let-in corner bracing or temporary diagonal bracing',
//                                         '7. Stand the wall, brace temporarily, check plumb and line before nailing off bottom plate',
//                                         '8. Install double top plate after adjacent walls are stood; lap at corners',
//                                         '9. Install structural sheathing; follow nailing schedule precisely for shear wall performance',
//                                     ],
//                                 },
//                                 {
//                                     type: 'keyTerm',
//                                     term: 'Rough Opening (RO)',
//                                     definition: 'The framed opening in a wall for a door or window. The RO is always larger than the door or window unit size to allow for shimming, levelling, and squaring during installation. Typical RO width = unit width + 50 mm (25 mm each side); typical RO height = unit height + 50–75 mm. Always confirm RO size from the door/window schedule or manufacturer\'s specification.',
//                                 },
//                             ],
//                         },
//                         {
//                             id: 'ch10-s2',
//                             title: '10.2 Engineered and Advanced Wall Systems',
//                             content: [
//                                 {
//                                     type: 'paragraph',
//                                     text: 'Modern construction uses several wall systems beyond conventional dimensional lumber framing. Carpenters must understand the properties, assembly requirements, and typical applications of each — and when manufacturer\'s or engineer\'s instructions supersede standard practice.',
//                                 },
//                                 {
//                                     type: 'table',
//                                     headers: ['System', 'Description', 'Key Carpenter Requirements'],
//                                     rows: [
//                                         ['Advanced framing (OVE — Optimum Value Engineering)', 'Studs at 600 mm o.c.; single top plate; in-line framing (loads travel in a straight line from roof to floor); single headers or insulated headers', 'Requires careful layout to keep all members in-line; reduces wood content and increases insulation space; check code compliance for single top plate and single headers'],
//                                         ['SIPs (Structural Insulated Panels)', 'Factory-made panels: OSB skins bonded to rigid foam core; arrive as large panels 1.2–2.4 m wide, up to 7.3 m long', 'Crane or mechanical lift required for large panels; spline connections between panels; chase holes routed by manufacturer for electrical; no field modification of structure without engineering'],
//                                         ['ICF above grade walls', 'Stacked foam blocks forming the wall cavity; rebar placed per engineer; concrete poured into cavity; foam stays permanently', 'Brace ICF walls with proprietary bracing systems before and during pour; pour rate strictly controlled; carpenter installs window and door bucks before pour'],
//                                         ['Steel stud framing (light gauge)', 'Cold-formed steel C-sections used instead of wood studs; common in commercial interior partitions and exterior curtain walls', 'Steel screws only — never nails; runner tracks at floor and ceiling; brace tall walls for lateral loads; thermal bridging must be addressed in exterior applications'],
//                                         ['Prefabricated wall panels', 'Factory-framed wood stud wall panels, often with sheathing, housewrap, windows, and rough electrical installed; crane-set on site', 'Review shop drawings before erection; confirm bearing, anchor bolt locations, and connection details; temporary bracing required until structural connections are complete'],
//                                     ],
//                                 },
//                             ],
//                         },
//                         {
//                             id: 'ch10-s3',
//                             title: '10.3 Roof Framing Fundamentals',
//                             content: [
//                                 {
//                                     type: 'paragraph',
//                                     text: 'Roof framing calculations — particularly rafter layout — are among the most mathematically demanding topics on the Red Seal exam. Understanding the terminology and the relationship between span, run, rise, and pitch is the foundation for all rafter work.',
//                                 },
//                                 {
//                                     type: 'table',
//                                     headers: ['Term', 'Definition'],
//                                     rows: [
//                                         ['Span', 'The total horizontal distance between the outside edges of the top plates on opposite walls; the full width of the building the roof must cover'],
//                                         ['Run', 'Half the span for a symmetrical gable roof; the horizontal distance a common rafter travels from the wall plate to the ridge centreline; Run = Span ÷ 2'],
//                                         ['Rise', 'The total vertical distance from the top plate to the top of the ridge; Rise = Run × unit rise ÷ unit run'],
//                                         ['Pitch', 'The slope of the roof expressed as unit rise over unit run (e.g., 6:12 means 6 units of rise per 12 units of run in imperial; expressed as 150:300 or 6/12 in metric)'],
//                                         ['Rafter factor', 'A multiplier derived from the Pythagorean theorem for each specific pitch; multiply run by the rafter factor to get the rafter line length; e.g., 6:12 pitch factor = 1.118'],
//                                         ['Line length', 'The theoretical length of a rafter measured along its top edge from the plumb cut at the ridge to the bird\'s mouth seat cut; does not include the overhang'],
//                                         ['Bird\'s mouth', 'A notch cut in the underside of a rafter consisting of a seat cut (horizontal) and a plumb cut (vertical); allows the rafter to sit flat on the top plate without rocking'],
//                                         ['Plumb cut', 'Any cut made perpendicular to the horizon (plumb/vertical); the ridge cut and the bird\'s mouth vertical cut are both plumb cuts; angle set to match roof pitch'],
//                                         ['Seat cut (level cut)', 'The horizontal cut in the bird\'s mouth that bears on the top plate; the seat cut depth must not exceed 1/3 of the rafter depth or it weakens the rafter at its bearing point'],
//                                         ['Tail (overhang)', 'The portion of the rafter extending beyond the wall to form the eave; measured horizontally; added to the line length after calculating line length'],
//                                         ['Ridge board', 'A horizontal member at the apex of the roof against which the upper ends of opposing rafters are nailed; it is not a structural beam — it is a nailing surface'],
//                                         ['Collar tie', 'A horizontal tension member connecting opposing rafters above the top plate; prevents the roof from spreading under load; typically installed on every rafter pair in the upper third of the attic'],
//                                         ['Ceiling joist', 'Horizontal members spanning from wall to wall at the top plate level; tie opposing walls together to resist rafter thrust; also supports the ceiling finish below'],
//                                     ],
//                                 },
//                                 {
//                                     type: 'table',
//                                     headers: ['Pitch (rise:run)', 'Rafter Factor', 'Degrees from Horizontal'],
//                                     rows: [
//                                         ['3:12', '1.031', '14.0°'],
//                                         ['4:12', '1.054', '18.4°'],
//                                         ['5:12', '1.083', '22.6°'],
//                                         ['6:12', '1.118', '26.6°'],
//                                         ['7:12', '1.158', '30.3°'],
//                                         ['8:12', '1.202', '33.7°'],
//                                         ['9:12', '1.250', '36.9°'],
//                                         ['10:12', '1.302', '39.8°'],
//                                         ['11:12', '1.357', '42.5°'],
//                                         ['12:12', '1.414', '45.0°'],
//                                     ],
//                                 },
//                                 {
//                                     type: 'infoBox',
//                                     title: 'Rafter Layout Procedure (Common Rafter)',
//                                     items: [
//                                         '1. Calculate run: Run = building span ÷ 2',
//                                         '2. Calculate line length: Line length = run × rafter factor for the pitch',
//                                         '3. Calculate overhang length: Overhang line length = horizontal overhang × rafter factor',
//                                         '4. Total rafter length = line length + overhang line length',
//                                         '5. Mark the plumb cut at the ridge end using the pitch angle on a speed square or framing square',
//                                         '6. Measure the line length from the ridge plumb cut and mark the bird\'s mouth location',
//                                         '7. Cut the bird\'s mouth: seat cut depth must not exceed 1/3 of rafter depth',
//                                         '8. Mark and cut the tail plumb cut at the eave end',
//                                         '9. Use the first rafter as a template to cut all remaining common rafters',
//                                         '10. Deduct half the ridge board thickness from the line length at the ridge end (ridge shortening)',
//                                     ],
//                                 },
//                             ],
//                         },
//                         {
//                             id: 'ch10-s4',
//                             title: '10.4 Roof Truss Systems',
//                             content: [
//                                 {
//                                     type: 'paragraph',
//                                     text: 'Pre-engineered roof trusses have largely replaced site-built stick framing in production residential construction. Trusses are engineered components — carpenters install them per the engineer\'s and manufacturer\'s drawings but must never modify them without engineering approval.',
//                                 },
//                                 {
//                                     type: 'table',
//                                     headers: ['Truss Component', 'Function'],
//                                     rows: [
//                                         ['Top chord', 'Inclined member forming the sloped roof surface; carries compressive load; sheathing is nailed to the top chord'],
//                                         ['Bottom chord', 'Horizontal member forming the ceiling line; carries tensile load; ceiling finish is attached to the bottom chord'],
//                                         ['Web members', 'Interior diagonal and vertical members connecting top and bottom chords; transfer loads between chords; never cut or notch under any circumstances'],
//                                         ['Connector plates (gang-nail plates)', 'Toothed steel plates pressed into both faces at every joint during factory fabrication; provide all the structural connections — never nail through or beside these plates'],
//                                         ['Bearing', 'The top chord rests on the top plate at each end; minimum bearing length specified by the engineer; use truss clips (hurricane ties) at every bearing'],
//                                     ],
//                                 },
//                                 {
//                                     type: 'infoBox',
//                                     title: 'Truss Handling and Installation Rules (Frequently Tested)',
//                                     items: [
//                                         'Never pick up a truss horizontally by its top chord at the peak alone — this can permanently damage the joints; lift from two points on the top chord or use a spreader bar',
//                                         'Store trusses vertically (upright) on edge, or if stored flat, support them at multiple points to prevent bowing and joint damage',
//                                         'Never cut, notch, drill, or modify any truss member or connector plate without written engineering approval — this voids all warranties and can cause collapse',
//                                         'Install temporary lateral bracing as each truss is set — trusses are unstable individually until the full system and sheathing are complete; workers have been killed by unbraced trusses falling over',
//                                         'Permanent bracing (diagonal cross-bracing of top and bottom chords and webs) is required per the engineer\'s bracing diagram — it is not optional',
//                                         'Truss clips (hurricane straps) required at every bearing point on every truss',
//                                         'Confirm truss bearing locations, ridge height, and overhang before setting — mistakes are costly to correct after the crane leaves',
//                                     ],
//                                 },
//                             ],
//                         },
//                         {
//                             id: 'ch10-s5',
//                             title: '10.5 Hip, Valley, and Ceiling Framing',
//                             content: [
//                                 {
//                                     type: 'paragraph',
//                                     text: 'More complex roof forms require additional rafter types beyond the common rafter. Hip and valley roofs are the most common variants on the exam. Ceiling framing is closely related to roof framing and must be understood as a system.',
//                                 },
//                                 {
//                                     type: 'table',
//                                     headers: ['Rafter / Member Type', 'Description and Key Points'],
//                                     rows: [
//                                         ['Hip rafter', 'Runs diagonally from the corner of the building to the ridge; longer than a common rafter for the same building; rafter factor for a hip = common rafter factor × 1.414 (diagonal multiplier)'],
//                                         ['Valley rafter', 'Runs diagonally inward at the intersection of two roof planes meeting at an internal corner; same length calculation principle as hip rafter'],
//                                         ['Hip jack rafter', 'Shortened common rafter running from the top plate to the hip rafter; each successive jack rafter is shorter by a constant difference (common difference) based on spacing and pitch'],
//                                         ['Valley jack rafter', 'Shortened common rafter running from the valley rafter to the ridge; same constant difference principle as hip jacks'],
//                                         ['Cripple jack rafter', 'Short rafter spanning between a hip and a valley rafter; does not touch either the ridge or the top plate'],
//                                         ['Collar tie (collar beam)', 'Horizontal member connecting opposing common rafters; installed in the upper third of the rafter span; prevents rafter spread; required by code at specified intervals'],
//                                         ['Strongback', 'A vertical member or horizontal beam installed perpendicular to ceiling joists or bottom chords to prevent bounce and vibration; common in long-span truss systems'],
//                                     ],
//                                 },
//                                 {
//                                     type: 'keyTerm',
//                                     term: 'Rafter Thrust',
//                                     definition: 'The outward horizontal force that roof rafters exert on the top plate and wall as they carry vertical roof loads. Rafter thrust increases with lower pitch (flatter roofs). It is resisted by ceiling joists acting as ties between opposite walls, by collar ties, or by engineered connections. Without adequate ties, rafter thrust will push the walls outward over time.',
//                                 },
//                             ],
//                         },
//                     ],
//                     practiceQuestions: [],
//                 }
//             ]
//         }

// //end of course
//     ],
// }