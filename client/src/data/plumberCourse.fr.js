// ============================================================
// CertReady — Données du cours Plombier (Chapitres 1–7)
// Basé sur : Norme de qualification du Sceau rouge (NQSR) – Plombier (2023)
//            et la référence officielle des formules du plombier
// Examen interprovincial Sceau rouge : 125 questions
// Apprentissage : 4 niveaux, 7 200 heures au total
// TRADUCTION FRANÇAISE — Chapitres 1 à 7 uniquement
// ============================================================

const plumberCourseFR = {
    meta: {
      trade: 'Plombier',
      redSealCode: '306A',
      totalExamQuestions: 125,
      apprenticeshipLevels: 4,
      totalHours: 7200,
      version: '2023',
      lastUpdated: '2025',
    },
  
    parts: [
      // ============================================================
      // PARTIE 1 — FONDEMENTS DU MÉTIER
      // GTA A : Exécute des tâches communes à l'occupation (11 %)
      // ============================================================
      {
        id: 'part-1',
        number: 1,
        title: 'Fondements du métier',
        description: 'Sécurité, outils, organisation du travail et activités courantes — la base de tout travail en plomberie.',
        chapters: [
  
          // CHAPITRE 1 — Sécurité (GTA A-1) — GRATUIT
          {
            id: 'ch-01',
            number: 1,
            title: 'Sécurité sur le chantier',
            subtitle: 'GTA A-1 · Exécute des fonctions liées à la sécurité (19 % de la GTA A)',
            isFree: true,
            estimatedMinutes: 45,
            sections: [
              {
                id: 'ch01-s1',
                title: '1.1 L\'environnement de travail sécuritaire',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Un environnement de travail sécuritaire est le fondement de tout travail en plomberie. Les plombiers sont responsables d\'identifier, de documenter et de corriger les dangers sur le chantier avant le début des travaux. Au niveau de compagnon, toutes les tâches de sécurité doivent être effectuées avec un minimum de supervision et en pleine conformité avec les réglementations fédérales, provinciales/territoriales et propres au chantier.',
                  },
                  {
                    type: 'keyTerm',
                    term: 'AHJ (Autorité ayant juridiction)',
                    definition: 'L\'organisation, le bureau ou la personne responsable d\'appliquer les exigences d\'un code ou d\'une norme, ou leur représentant désigné.',
                  },
                  {
                    type: 'keyTerm',
                    term: 'SIMDUT (SGH)',
                    definition: 'Système d\'information sur les matières dangereuses utilisées au travail — système national du Canada pour communiquer les dangers chimiques par étiquettes et fiches de données de sécurité (FDS). Maintenant aligné sur le Système général harmonisé (SGH).',
                  },
                  {
                    type: 'infoBox',
                    title: 'Dangers courants sur les chantiers de plomberie',
                    items: [
                      'Mauvaise gestion des lieux — débris, encombrement et risques de trébuchement',
                      'Dangers en hauteur — tuyaux, poutres et objets tombants',
                      'Dangers de tranchées et d\'étaiement — effondrements et instabilité du sol',
                      'Dangers électriques — proximité de panneaux sous tension et de câblage',
                      'Dangers en espaces clos — évacuation limitée, faible teneur en oxygène, gaz toxique',
                      'Dangers liés aux travaux à chaud — risque d\'incendie lors du soudage et du brasage',
                      'Dangers liés à la silice et à l\'amiante — perturbation de matériaux de construction anciens',
                      'Dangers liés au bruit — exposition prolongée aux outils électriques et à la machinerie',
                      'Dangers liés à la qualité de l\'air — vapeurs de solvants, de flux et d\'étanchéifiants pour tuyaux',
                      'Dangers liés aux vibrations — utilisation prolongée d\'outils électriques',
                      'Dangers de chute — travail en hauteur sur des échelles ou des échafaudages',
                    ],
                  },
                  {
                    type: 'paragraph',
                    text: 'Lorsqu\'un danger est identifié sur le chantier, le plombier doit l\'atténuer ou l\'éliminer immédiatement, documenter la constatation et la communiquer au superviseur et au représentant en santé et sécurité. Les matières dangereuses rencontrées en plomberie comprennent le scellant de filet, l\'huile de coupe, le glycol, les solvants, les cylindres de gaz comprimé et divers additifs — tous nécessitant une manipulation conforme au SIMDUT.',
                  },
                  {
                    type: 'paragraph',
                    text: 'La conduite professionnelle fait également partie des pratiques de travail sécuritaires. Les jeux dangereux, les bousculades, la consommation de drogues et d\'alcool, le harcèlement et une tenue vestimentaire inappropriée sont tous interdits sur un chantier de plomberie. La réglementation en matière de sécurité comprend les règlements LOTO, les réglementations provinciales/territoriales de santé et sécurité, les règlements propres au chantier et les exigences de la Loi sur le transport des marchandises dangereuses (TMD).',
                  },
                ],
              },
              {
                id: 'ch01-s2',
                title: '1.2 Équipements de protection individuelle (EPI)',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Les plombiers doivent sélectionner, inspecter, entretenir et utiliser correctement les EPI appropriés au danger et à l\'application spécifiques. Les EPI doivent être sélectionnés conformément aux politiques de l\'entreprise, aux exigences de l\'AHJ et aux dangers spécifiques présents.',
                  },
                  {
                    type: 'table',
                    headers: ['Type d\'EPI', 'Application / Danger protégé', 'Note d\'entretien clé'],
                    rows: [
                      ['Bottes à embouts d\'acier (CSA)', 'Écrasement, perforation par des objets tombants', 'Inspecter régulièrement la semelle et l\'embout'],
                      ['Casque de sécurité', 'Objets tombants en hauteur, impacts', 'Remplacer après tout impact significatif'],
                      ['Lunettes de sécurité / lunettes-masque (CSA)', 'Débris, étincelles, éclaboussures chimiques', 'Remplacer si rayées ou fissurées'],
                      ['Protection auditive', 'Bruit des outils électriques et de la machinerie', 'Remplacer régulièrement les bouchons en mousse'],
                      ['Respirateur', 'Vapeurs (flux, solvants, poussière de silice, amiante)', 'Vérifier le joint et la date d\'expiration du filtre'],
                      ['Gants (industriels/caoutchouc)', 'Coupures, exposition chimique, brûlures', 'Inspecter les trous avant chaque utilisation'],
                      ['Écrans faciaux', 'Éblouissement de soudure, étincelles de meulage, éclaboussures chimiques', 'Vérifier les fissures et rayures'],
                      ['Vêtements haute visibilité', 'Circulation, risques liés aux équipements mobiles', 'Laver régulièrement, remplacer si décoloré'],
                      ['Vêtements ignifugés', 'Travaux à chaud (soudage, brasage)', 'Ne jamais laver avec des assouplissants'],
                      ['Harnais de sécurité et longe (CSA)', 'Chutes de hauteur', 'Inspecter avant chaque utilisation; recertifier selon l\'AHJ'],
                    ],
                  },
                  {
                    type: 'paragraph',
                    text: 'Les EPI usés, endommagés ou défectueux doivent être étiquetés, signalés au superviseur et retirés du service immédiatement. La formation et la certification pour des EPI spécifiques — y compris les systèmes antichute, l\'équipement pour espaces clos et les plateformes de travail aériennes — doivent être à jour selon les exigences de l\'AHJ et du chantier.',
                  },
                  {
                    type: 'infoBox',
                    title: 'Équipements de sécurité (au-delà des EPI)',
                    items: [
                      'Systèmes antichute — harnais intégral, longe, point d\'ancrage',
                      'Extincteurs — requis lors de toutes les opérations de travaux à chaud',
                      'Trousses de premiers soins — accessibles et bien garnies sur chaque chantier',
                      'Extracteurs de fumée — utilisés lors du soudage et du brasage',
                    ],
                  },
                ],
              },
              {
                id: 'ch01-s3',
                title: '1.3 Procédures de cadenassage / étiquetage (LOTO)',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Le cadenassage/étiquetage (LOTO) est la procédure de sécurité utilisée pour isoler les sources d\'énergie dangereuses avant d\'effectuer des travaux d\'entretien ou de réparation sur des équipements ou des systèmes de tuyauterie. L\'objectif est d\'amener le système à un état d\'énergie zéro.',
                  },
                  {
                    type: 'keyTerm',
                    term: 'État d\'énergie zéro',
                    definition: 'L\'état dans lequel toutes les formes d\'énergie (électrique, hydraulique, pneumatique, mécanique, thermique et chimique) ont été isolées et dissipées afin que le système ne puisse pas se déplacer, s\'énergiser ou libérer de l\'énergie stockée.',
                  },
                  {
                    type: 'infoBox',
                    title: 'Méthodes d\'isolation LOTO pour les systèmes de tuyauterie',
                    items: [
                      'Fermeture de vanne — fermer et cadenasser la vanne d\'isolement',
                      'Double blocage et purge — deux vannes avec un orifice de purge entre elles',
                      'Obturation — insertion d\'une barrière physique directement dans la tuyauterie',
                      'Déconnexion — débranchement physique de la tuyauterie',
                      'Cadenassage du disjoncteur — isolement de l\'alimentation électrique',
                    ],
                  },
                  {
                    type: 'infoBox',
                    title: 'Vérification de l\'état d\'énergie zéro',
                    items: [
                      'Tentative de mise en marche de l\'équipement pour confirmer que l\'énergie est isolée',
                      'Vérification des jauges et des interrupteurs pour confirmer une pression/énergie nulle',
                      'Inspection des voyants pour confirmer l\'absence d\'écoulement de fluide',
                    ],
                  },
                ],
              },
            ],
            practiceQuestions: [
              {
                id: 'q01-01',
                question: 'Un plombier découvre un danger de trébuchement sur le chantier. Quelle est la PREMIÈRE action correcte ?',
                options: [
                  'Continuer à travailler et le signaler en fin de quart',
                  'Atténuer ou éliminer le danger immédiatement et le communiquer au superviseur et au représentant en santé et sécurité',
                  'Attendre l\'arrivée de l\'agent de sécurité avant de prendre toute mesure',
                  'Poser un panneau d\'avertissement et laisser le danger en place',
                ],
                correctIndex: 1,
                explanation: 'Selon la NQSR, lorsqu\'un danger est identifié sur le chantier, il doit être atténué ou éliminé, documenté et communiqué immédiatement au superviseur et au représentant en santé et sécurité.',
              },
              {
                id: 'q01-02',
                question: 'Lequel des éléments suivants est classé comme ÉQUIPEMENT de sécurité (et non comme EPI) dans le métier de plombier ?',
                options: [
                  'Bottes à embouts d\'acier',
                  'Vêtements ignifugés',
                  'Systèmes antichute',
                  'Casque de sécurité',
                ],
                correctIndex: 2,
                explanation: 'Les EPI comprennent les articles portés sur le corps (bottes, vêtements, casque). L\'équipement de sécurité comprend les systèmes antichute, les extincteurs, les trousses de premiers soins et les extracteurs de fumée — ce sont des outils utilisés pour la sécurité, non portés comme protection personnelle.',
              },
              {
                id: 'q01-03',
                question: 'Que signifie pour un système de plomberie être dans un « état d\'énergie zéro » ?',
                options: [
                  'Le système a été rincé à l\'eau propre',
                  'Toutes les pompes sont réglées à leur vitesse minimale',
                  'Toutes les formes d\'énergie ont été isolées et dissipées afin que le système ne puisse pas se déplacer, s\'énergiser ou libérer de l\'énergie stockée',
                  'Le disjoncteur du panneau électrique du système a été coupé',
                ],
                correctIndex: 2,
                explanation: 'Un état d\'énergie zéro signifie que TOUTES les formes d\'énergie — électrique, hydraulique, pneumatique, mécanique, thermique et chimique — ont été isolées et dissipées. Couper un seul type d\'énergie ne permet pas d\'atteindre l\'état d\'énergie zéro.',
              },
              {
                id: 'q01-04',
                question: 'Lorsqu\'un plombier trouve un EPI usé et endommagé, quelle est la procédure appropriée ?',
                options: [
                  'Continuer à l\'utiliser si les dommages sont mineurs',
                  'Le réparer sur le chantier et le remettre en service',
                  'L\'étiqueter, le signaler au superviseur et le retirer du service',
                  'Le jeter sans le signaler',
                ],
                correctIndex: 2,
                explanation: 'Les EPI usés, endommagés ou défectueux doivent être étiquetés avec des marques d\'identification, signalés au superviseur et retirés du service. L\'utilisation d\'EPI endommagés expose le travailleur à de graves risques.',
              },
              {
                id: 'q01-05',
                question: 'Quelle méthode d\'isolation LOTO consiste à insérer une barrière physique directement dans la tuyauterie ?',
                options: [
                  'Double blocage et purge',
                  'Cadenassage du disjoncteur',
                  'Obturation',
                  'Étiquetage seulement',
                ],
                correctIndex: 2,
                explanation: 'L\'obturation consiste à insérer une barrière physique (comme un flasque obturateur) directement dans la tuyauterie pour créer une barrière positive contre l\'écoulement de fluide. Le double blocage et purge utilise deux vannes avec un orifice de purge entre elles.',
              },
            ],
          },
  
          // CHAPITRE 2 — Outils et équipements (GTA A-2)
          {
            id: 'ch-02',
            number: 2,
            title: 'Outils et équipements',
            subtitle: 'GTA A-2 · Utilise et entretient les outils et équipements (23 % de la GTA A)',
            isFree: true,
            estimatedMinutes: 50,
            sections: [
              {
                id: 'ch02-s1',
                title: '2.1 Outils à main et outils électriques courants',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Les plombiers utilisent une grande variété d\'outils à main, d\'outils électriques, d\'outils de mesure et d\'outils spécialisés pour les tuyaux. Tous les outils doivent être utilisés de façon sécuritaire, à des fins prévues, et doivent être inspectés avant utilisation. Les outils usés, endommagés ou défectueux doivent être étiquetés, signalés au superviseur et retirés du service.',
                  },
                  {
                    type: 'table',
                    headers: ['Catégorie d\'outil', 'Exemples', 'Principaux dangers de sécurité'],
                    rows: [
                      ['Outils à main', 'Clé à molette, clé de bassin, clé à tuyau, scie à métaux, ciseau, pistolet à calfeutrer, cordeau traceur', 'Coupures, pincements, foulures dues à une mauvaise utilisation'],
                      ['Outils électriques', 'Perceuse, scie alternative, meuleuse d\'angle, filière électrique, outil à sertir', 'Électrocution, contrecoups, coupures, brûlures, débris, projectiles'],
                      ['Outils de mesure', 'Ruban à mesurer, niveau, niveau de chantier, outil de mise en plan laser, pied à coulisse', 'Mesures inexactes entraînant un gaspillage de matériaux'],
                      ['Outils de coupe de tuyaux', 'Coupe-tube en cuivre, coupe-tube, coupe-tube à rochet, coupe-tube à cliquet, coupe-tube hydraulique', 'Points de pincement, arêtes vives'],
                      ['Outils d\'assemblage de tuyaux', 'Filière à tuyau, outil à sertir, pince à sertir PEX, outil d\'expansion PEX, outil de fusion, rainureuse', 'Brûlures, points de pincement, défaillance de joint incorrecte'],
                      ['Équipement oxycombustible', 'Chalumeau et becs, anti-retour de flamme, régulateurs, tuyaux, cylindres de gaz', 'Incendie, vapeurs, brûlures, éblouissement, électrocution'],
                    ],
                  },
                  {
                    type: 'infoBox',
                    title: 'Principes d\'entretien des outils',
                    items: [
                      'Effectuer une inspection visuelle avant d\'utiliser tout outil — vérifier les déficiences ou défauts (usé, tordu, cassé, endommagé, inopérant)',
                      'Étiqueter les outils défectueux avec des marques d\'identification (ruban, codes de couleur, étiquettes) et les signaler au superviseur',
                      'Suivre les procédures d\'entretien périodique et compléter la documentation pour tous les outils',
                      'Organiser et ranger les outils conformément aux spécifications et aux politiques de l\'entreprise pour éviter les dommages',
                      'Protéger les matières inflammables lors de l\'utilisation d\'équipements générateurs de chaleur',
                    ],
                  },
                  {
                    type: 'paragraph',
                    text: 'L\'équipement oxycombustible nécessite une attention particulière. Les composants comprennent les anti-retour de flamme (pour empêcher la flamme de remonter dans le tuyau), les régulateurs, les tuyaux, les allumeurs, les réservoirs, les becs de chalumeau et les poignées. Les matières inflammables doivent être protégées ou retirées de la zone de travail à chaud, et l\'emplacement de la zone de travail doit être désarmé dans le système de surveillance de sécurité du bâtiment avant les travaux à chaud.',
                  },
                ],
              },
              {
                id: 'ch02-s2',
                title: '2.2 Équipements d\'accès',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Les équipements d\'accès permettent aux plombiers de travailler en toute sécurité en hauteur. Tous les équipements d\'accès doivent être inspectés visuellement avant et pendant l\'utilisation, correctement sécurisés et certifiés conformément aux réglementations applicables. Une formation et une certification sont requises pour les plateformes de travail aériennes (PTA) motorisées.',
                  },
                  {
                    type: 'table',
                    headers: ['Type', 'Exemples', 'Principaux dangers'],
                    rows: [
                      ['Échelles', 'Escabeaux, échelles coulissantes, échelles à plate-forme', 'Glissade et chute, renversement, charge excessive, surfaces inégales, électrocution'],
                      ['Plateformes de travail', 'Échafaudages, tube et collier', 'Objets tombants, accessoires de sécurité manquants, absence de supervision'],
                      ['Plateformes de travail aériennes motorisées', 'Nacelle ciseaux, nacelle à flèche articulée, panier personnel', 'Points de pincement, obstacles en hauteur, électrocution, surfaces inégales'],
                    ],
                  },
                  {
                    type: 'paragraph',
                    text: 'Les échelles, plateformes de travail et plateformes de travail aériennes motorisées doivent être étiquetées et signalées au superviseur lorsqu\'elles sont usées, endommagées ou défectueuses. Les dates de certification doivent être à jour. Les échelles doivent être sécurisées conformément aux codes de sécurité, aux directives juridictionnelles et aux exigences spécifiques au chantier.',
                  },
                ],
              },
              {
                id: 'ch02-s3',
                title: '2.3 Équipement de gréage, levage et positionnement',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Les plombiers ont régulièrement besoin de déplacer de grandes sections de tuyaux, des assemblages préfabriqués et des équipements lourds. Cela exige une connaissance du gréage, du levage et des équipements de positionnement. Un plan de levage doit être élaboré et communiqué à tout le personnel avant tout levage.',
                  },
                  {
                    type: 'keyTerm',
                    term: 'Limite de charge de travail (LCT)',
                    definition: 'La charge maximale que les équipements de gréage, levage ou positionnement sont certifiés à manutentionner. Les charges ne doivent jamais dépasser la LCT. Les angles d\'élingage affectent la LCT effective — plus l\'angle est aigu, plus la capacité effective est faible.',
                  },
                  {
                    type: 'table',
                    headers: ['Équipement', 'Utilisation principale'],
                    rows: [
                      ['Palan à chaîne / moufle', 'Avantage mécanique pour soulever des charges lourdes manuellement'],
                      ['Treuil à main', 'Tirer ou positionner des charges horizontalement ou à un angle'],
                      ['Élingues en câble d\'acier / élingues synthétiques', 'Attacher des charges aux équipements de levage'],
                      ['Manilles', 'Relier élingues, crochets et matériel de gréage'],
                      ['Chariot élévateur / chariot télescopique', 'Déplacer et placer des matériaux et équipements lourds'],
                      ['Camion-grue / grue mobile / grue à tour', 'Levages importants nécessitant un opérateur de grue certifié'],
                      ['Barre d\'écartement', 'Répartir la charge sur plusieurs points d\'attache'],
                      ['Corde de guidage', 'Contrôler le balancement d\'une charge sans que le travailleur soit dessous'],
                    ],
                  },
                  {
                    type: 'infoBox',
                    title: 'Nœuds, demi-clés et nœuds de jonction courants en gréage',
                    items: [
                      'Nœud de chaise — crée une boucle fixe qui ne glisse pas sous charge',
                      'Patte d\'oie — utilisée pour attacher une élingue à un crochet',
                      'Demi-clé de cabestan — fixe une corde à un objet cylindrique',
                      'Demi-clé simple — utilisée pour sécuriser les extrémités de corde',
                    ],
                  },
                  {
                    type: 'paragraph',
                    text: 'Les défauts d\'équipement à surveiller comprennent les déchirures, fissures, « mise en cage » (torons de câble brisés s\'évasant vers l\'extérieur), câbles effilochés, élingues synthétiques effilochées, manilles usées, fuites d\'huile hydraulique et étiquettes de classification manquantes. Tout équipement présentant ces défauts doit être étiqueté et retiré du service.',
                  },
                ],
              },
              {
                id: 'ch02-s4',
                title: '2.4 Équipements de soudage, brasage tendre et brasage fort',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Les plombiers utilisent diverses techniques d\'assemblage nécessitant de la chaleur. Le soudage est utilisé pour la tuyauterie en acier dans les applications commerciales et industrielles. Le brasage tendre (soudure tendre, jusqu\'à environ 450 °C) et le brasage fort (soudure à l\'argent, au-dessus de 450 °C) sont utilisés principalement pour les tubes et tuyaux en cuivre.',
                  },
                  {
                    type: 'table',
                    headers: ['Procédé', 'Équipement / Consommables', 'Application typique'],
                    rows: [
                      ['SMAW (soudage à l\'arc avec électrode enrobée)', 'Électrodes, flux, machine à souder', 'Soudures structurelles de tuyaux en acier'],
                      ['GTAW (soudage TIG)', 'Électrode en tungstène, gaz de protection, baguette d\'apport', 'Tuyaux en acier inoxydable et tuyauterie spéciale de haute qualité'],
                      ['GMAW (soudage MIG)', 'Fil d\'apport, gaz de protection', 'Tuyaux en acier au carbone et acier galvanisé'],
                      ['Soudage par fusion thermique', 'Outil de fusion, tuyaux thermoplastiques', 'Tuyaux en PEHD et polypropylène'],
                      ['Brasage tendre', 'Chalumeau oxycombustible ou air-gaz, soudure tendre, flux', 'Tuyauterie d\'eau domestique en cuivre'],
                      ['Brasage fort', 'Chalumeau oxycombustible, soudure à l\'argent, flux', 'Tuyaux de réfrigération, cuivre haute pression'],
                    ],
                  },
                  {
                    type: 'paragraph',
                    text: 'Avant de braser ou de souder des tuyaux en cuivre, les tuyaux et les raccords doivent être nettoyés, le flux appliqué et l\'assemblage chauffé uniformément. Après l\'assemblage, la tuyauterie doit être purgée (gaz inerte passé à travers pour déplacer l\'oxygène) afin de prévenir l\'oxydation à l\'intérieur du tuyau. Le système de surveillance de sécurité de la zone de travail (détection d\'incendie, de fumée et de chaleur) doit être désarmé par l\'opérateur du bâtiment avant les travaux à chaud, et réarmé une fois terminé.',
                  },
                  {
                    type: 'infoBox',
                    title: 'Consommables pour brasage tendre et brasage fort',
                    items: [
                      'Soudure à l\'argent (brasage fort) — haute résistance, utilisée pour les tubes ACR',
                      'Soudure tendre (brasage tendre) — sans plomb requis pour l\'eau potable (NSF 61)',
                      'Flux — nettoie les oxydes de la surface métallique et permet à la soudure de s\'écouler',
                      'Baguette de brasage — métal d\'apport pour le brasage fort',
                      'Gaz de purge — azote, argon (inertes), utilisés pour déplacer l\'oxygène à l\'intérieur du tuyau pendant le soudage/brasage',
                    ],
                  },
                ],
              },
            ],
            practiceQuestions: [
              {
                id: 'q02-01',
                question: 'À quoi sert un « anti-retour de flamme » dans l\'équipement oxycombustible ?',
                options: [
                  'À réguler la pression de sortie du cylindre de gaz',
                  'À empêcher la flamme de remonter dans le tuyau et de provoquer une explosion',
                  'À réduire la température du bec de chalumeau',
                  'À filtrer les impuretés du gaz combustible',
                ],
                correctIndex: 1,
                explanation: 'Les anti-retour de flamme sont des dispositifs de sécurité installés sur les tuyaux oxycombustibles pour arrêter un retour de flamme — la condition dangereuse où la flamme remonte à travers le tuyau vers la source de gaz. Cela prévient les incendies et les explosions.',
              },
              {
                id: 'q02-02',
                question: 'Qu\'indique la « mise en cage » d\'un câble d\'acier ?',
                options: [
                  'Le câble d\'acier a été correctement enroulé pour le rangement',
                  'Le câble d\'acier est neuf et n\'a pas encore été rodé',
                  'Des torons individuels se sont brisés et s\'évasent vers l\'extérieur, indiquant que le câble doit être retiré du service',
                  'Le câble est certifié pour les opérations de levage aérien',
                ],
                correctIndex: 2,
                explanation: 'La mise en cage décrit l\'état où des torons individuels se brisent et s\'évasent vers l\'extérieur, ressemblant à une cage d\'oiseau. Il s\'agit d\'un défaut critique — le câble d\'acier doit être immédiatement retiré du service.',
              },
              {
                id: 'q02-03',
                question: 'À quelle température approximative le brasage fort se distingue-t-il du brasage tendre ?',
                options: [
                  'Le brasage fort se produit au-dessus de 450 °C ; le brasage tendre en dessous de 450 °C',
                  'Le brasage fort se produit en dessous de 200 °C ; le brasage tendre au-dessus de 200 °C',
                  'Il n\'y a pas de différence de température — les termes sont interchangeables',
                  'Le brasage fort se produit au-dessus de 900 °C ; le brasage tendre au-dessus de 450 °C',
                ],
                correctIndex: 0,
                explanation: 'Par définition, le brasage fort utilise un métal d\'apport dont le point de fusion est supérieur à 450 °C (840 °F), tandis que le brasage tendre utilise un métal d\'apport en dessous de cette température. Le métal de base n\'est pas fondu dans l\'un ou l\'autre des procédés.',
              },
              {
                id: 'q02-04',
                question: 'Pourquoi faut-il purger les tuyaux en cuivre avec un gaz inerte (tel que l\'azote) lors du brasage fort ?',
                options: [
                  'Pour préchauffer le tuyau uniformément avant d\'appliquer le chalumeau',
                  'Pour déplacer l\'oxygène à l\'intérieur du tuyau et prévenir l\'oxydation interne pendant le processus d\'assemblage',
                  'Pour tester les fuites avant que le joint ne refroidisse',
                  'Pour nettoyer les résidus de flux à l\'intérieur du tuyau',
                ],
                correctIndex: 1,
                explanation: 'La purge avec un gaz inerte (azote ou argon) déplace l\'oxygène de l\'intérieur du tuyau. Cela prévient la formation d\'oxyde de cuivre à l\'intérieur du tuyau pendant le brasage fort — ce qui pourrait contaminer le système ou restreindre l\'écoulement.',
              },
            ],
          },
  
          // CHAPITRE 3 — Organisation du travail et documentation (GTA A-3)
          {
            id: 'ch-03',
            number: 3,
            title: 'Organisation du travail et documentation',
            subtitle: 'GTA A-3 · Organise le travail (20 % de la GTA A)',
            isFree: false,
            estimatedMinutes: 40,
            sections: [
              {
                id: 'ch03-s1',
                title: '3.1 Planification et organisation des tâches de projet',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Une organisation efficace du travail est essentielle pour mener à bien les projets de plomberie dans les délais et dans les limites du budget. Les plombiers doivent planifier les séquences de tâches, estimer le temps et la main-d\'œuvre, coordonner avec les autres corps de métier, vérifier que les permis requis sont en place et s\'adapter aux conditions imprévues sur le chantier.',
                  },
                  {
                    type: 'infoBox',
                    title: 'Considérations clés de planification',
                    items: [
                      'Sécurité — évaluation des dangers avant le début de toute tâche',
                      'Aménagement du chantier — compréhension des contraintes physiques du projet',
                      'Exigences de grue — coordination du temps de grue avec les autres corps de métier',
                      'Excavation — planification des travaux de tranchée avec les entrepreneurs civils',
                      'Accès — s\'assurer que les outils, matériaux et éléments de tuyauterie sont au lieu d\'installation au moment voulu',
                    ],
                  },
                  {
                    type: 'paragraph',
                    text: 'Les procédures LEED (Leadership in Energy and Environmental Design) sont de plus en plus pertinentes dans les travaux de plomberie. Le LEED encourage les appareils économes en eau, les agencements de tuyauterie optimisés pour réduire l\'utilisation de matériaux et l\'utilisation de produits respectueux de l\'environnement. Les plombiers doivent comprendre les exigences LEED et la façon dont leur travail contribue aux points de certification des bâtiments.',
                  },
                ],
              },
              {
                id: 'ch03-s2',
                title: '3.2 Documentation technique',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Les plombiers travaillent à partir de divers documents techniques tout au long d\'un projet — de la planification initiale à la signature finale. La capacité à lire, interpréter et créer de la documentation est une compétence essentielle du métier.',
                  },
                  {
                    type: 'table',
                    headers: ['Type de document', 'But / Description'],
                    rows: [
                      ['Plans AFC (approuvés pour construction)', 'L\'ensemble final et approuvé de plans utilisé pour la construction réelle'],
                      ['Plans de récolement (tel que construit)', 'Plans mis à jour pour montrer l\'état réel installé de tous les systèmes'],
                      ['Schémas / diagrammes de flux', 'Représentation visuelle simplifiée des voies d\'écoulement et des composants du système'],
                      ['Dessins d\'atelier', 'Dessins de fabrication détaillés produits par l\'entrepreneur ou le fabricant'],
                      ['Devis techniques', 'Description écrite des matériaux, méthodes, qualité et exigences de performance'],
                      ['Bons de travail', 'Documents autorisant et décrivant des travaux spécifiques à effectuer'],
                      ['Croquis', 'Dessins de chantier créés pour communiquer des modifications ou réparations sur place'],
                      ['Manuels d\'entretien', 'Compilés à partir des fiches techniques des équipements installés pour le propriétaire du bâtiment'],
                    ],
                  },
                  {
                    type: 'keyTerm',
                    term: 'Conversion métrique/impériale',
                    definition: 'Les travaux de plomberie au Canada utilisent les systèmes métrique et impérial. Les plombiers doivent être capables de convertir entre les deux systèmes avec précision. Exemples clés : 1 m = 3,281 pi ; 1 mm = 0,03937 po ; 1 L = 0,220 gal imp. ; 1 kPa = 0,145 psi.',
                  },
                  {
                    type: 'paragraph',
                    text: 'À la fin du projet, le plombier doit soumettre la documentation finale — notamment les plans de récolement, les manuels d\'entretien et toute révision — au gestionnaire des installations. Cette documentation est essentielle pour l\'entretien futur, la rénovation et la conformité réglementaire.',
                  },
                ],
              },
            ],
            practiceQuestions: [
              {
                id: 'q03-01',
                question: 'Que sont les « plans de récolement » ?',
                options: [
                  'Les plans architecturaux originaux préparés par l\'ingénieur',
                  'Les plans mis à jour pour refléter l\'état réel installé de tous les systèmes tels que construits',
                  'Les plans utilisés pour obtenir un permis de construction',
                  'Les esquisses préliminaires préparées avant le début de la construction',
                ],
                correctIndex: 1,
                explanation: 'Les plans de récolement (aussi appelés plans d\'enregistrement) sont mis à jour pendant la construction pour montrer l\'emplacement, la taille et la configuration réels de tous les systèmes installés. Ils sont essentiels pour l\'entretien et la rénovation futurs.',
              },
              {
                id: 'q03-02',
                question: 'Quel est le but d\'un manuel d\'entretien compilé à la fin du projet ?',
                options: [
                  'Enregistrer les activités quotidiennes de l\'équipe de plomberie',
                  'Fournir au propriétaire du bâtiment les fiches techniques et les informations d\'exploitation/entretien pour tous les équipements installés',
                  'Documenter les coûts du projet et les heures de main-d\'œuvre',
                  'Servir de demande de permis pour les rénovations futures',
                ],
                correctIndex: 1,
                explanation: 'Les manuels d\'entretien sont compilés à partir des fiches techniques de tous les équipements installés et soumis au gestionnaire des installations. Ils fournissent au propriétaire du bâtiment les informations nécessaires pour entretenir, réparer et dépanner chaque équipement installé.',
              },
              {
                id: 'q03-03',
                question: 'Convertir 250 kPa en psi (utiliser le facteur de conversion : 1 kPa = 0,1450 psi).',
                options: [
                  '36,25 psi',
                  '1 724 psi',
                  '25,0 psi',
                  '2,5 psi',
                ],
                correctIndex: 0,
                explanation: '250 kPa × 0,1450 = 36,25 psi. Cette conversion est essentielle lorsqu\'on travaille avec des manomètres et des spécifications utilisant différents systèmes d\'unités.',
              },
            ],
          },
  
          // CHAPITRE 4 — Activités courantes du métier (GTA A-4)
          {
            id: 'ch-04',
            number: 4,
            title: 'Activités courantes du métier',
            subtitle: 'GTA A-4 · Exécute les activités courantes du métier (34 % de la GTA A)',
            isFree: false,
            estimatedMinutes: 55,
            sections: [
              {
                id: 'ch04-s1',
                title: '4.1 Planification de l\'agencement des systèmes de tuyauterie',
                content: [
                  {
                    type: 'paragraph',
                    text: 'La planification de l\'agencement de la tuyauterie est l\'une des activités courantes les plus importantes du métier. Les plombiers déterminent les positions finales des appareils sanitaires, des appareils, des tuyaux et des raccords en se basant sur les plans, les codes, les devis, les exigences de l\'AHJ et les conditions réelles du chantier. L\'agencement doit être coordonné avec les autres corps de métier pour éviter les interférences avec la ventilation, l\'électricité et les systèmes de gicleurs.',
                  },
                  {
                    type: 'table',
                    headers: ['Outil d\'agencement', 'Application'],
                    rows: [
                      ['Ruban à mesurer', 'Mesures linéaires pour les tracés de tuyaux, emplacements des appareils'],
                      ['Niveau', 'S\'assurer que les tuyaux sont correctement inclinés (horizontal ou en pente)'],
                      ['Niveau de chantier / niveau laser', 'Établir des repères d\'élévation sur de grandes surfaces'],
                      ['Outil de mise en plan laser', 'Projeter des lignes de référence pour un alignement précis des tuyaux'],
                      ['Guide de coupe (wraparound)', 'Marquer les lignes de coupe sur les tuyaux ronds pour garantir des coupes d\'équerre'],
                      ['Outils de marquage (cordeau traceur, marqueurs)', 'Transférer les lignes d\'agencement sur les murs, planchers et plafonds'],
                      ['Logiciel BIM/modélisation', 'Coordination numérique avec les autres corps de métier pour détecter les conflits avant l\'installation'],
                    ],
                  },
                ],
              },
              {
                id: 'ch04-s2',
                title: '4.2 Calcul des longueurs de tuyaux et des déviations',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Des calculs précis de longueur de tuyau permettent d\'éviter le gaspillage de matériaux et de s\'assurer que les tuyaux s\'assemblent correctement lors de l\'installation. Les plombiers doivent tenir compte des tolérances de raccords (la distance que le tuyau parcourt à l\'intérieur d\'un raccord) et doivent calculer les déviations lorsque les tuyaux doivent changer de direction pour éviter des obstacles.',
                  },
                  {
                    type: 'keyTerm',
                    term: 'Longueur de parcours d\'un coude à 45°',
                    definition: 'Lors d\'une déviation avec deux coudes à 45°, la longueur de parcours (la longueur diagonale du tuyau entre les deux coudes) est égale à la distance de déviation × 1,414 (la racine carrée de 2). Cette constante provient de la géométrie d\'un triangle rectangle à 45°.',
                  },
                  {
                    type: 'infoBox',
                    title: 'Formule clé : Parcours de déviation à 45°',
                    items: [
                      'Parcours = Déviation × 1,414',
                      'Exemple : Une déviation de 300 mm nécessite un parcours de 300 × 1,414 = 424,2 mm',
                      'Cette constante (1,414) est fournie sur la fiche de référence officielle des formules du plombier',
                    ],
                  },
                  {
                    type: 'paragraph',
                    text: 'La pente des tuyaux de drainage est également un calcul critique. La pente est exprimée en ratio de chute ou de montée sur la longueur de tracé. Par exemple, une pente de 2 % signifie que le tuyau descend de 2 mm pour chaque 100 mm de tracé horizontal (ou 1/4 de pouce par pied en système impérial). Une pente adéquate est essentielle pour que les systèmes de drainage s\'écoulent par gravité sans obstructions.',
                  },
                  {
                    type: 'table',
                    headers: ['Diamètre du tuyau', 'Pente minimale (Code national de la plomberie)', 'Notes'],
                    rows: [
                      ['Jusqu\'à 75 mm (3 po)', '2 % (1/4 po par pied)', 'Tuyau DWV résidentiel le plus courant'],
                      ['80–200 mm (3 po–8 po)', '1 % (1/8 po par pied)', 'Drains de branches plus grands et drains de bâtiment'],
                      ['Plus de 200 mm (8 po et +)', '0,5 % ou selon conception', 'Nécessite une révision par un ingénieur'],
                    ],
                  },
                ],
              },
              {
                id: 'ch04-s3',
                title: '4.3 Supports de tuyauterie, manchons et coupe-feu',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Un support de tuyauterie adéquat prévient l\'affaissement, les vibrations et les contraintes sur les joints. L\'espacement des supports dépend du matériau, du diamètre, du contenu et de la température de fonctionnement du tuyau. Tous les supports de tuyaux doivent être installés conformément aux codes et aux spécifications des fabricants.',
                  },
                  {
                    type: 'paragraph',
                    text: 'Les manchons de tuyauterie sont installés à travers les murs, planchers et plafonds avant le passage des tuyaux, créant un point de pénétration qui permet le mouvement des tuyaux et l\'accès pour l\'entretien futur. Là où la tuyauterie passe à travers des séparations coupe-feu (murs, planchers et assemblages résistants au feu), des dispositifs et matériaux de coupe-feu approuvés doivent être installés pour maintenir la cote de résistance au feu de l\'assemblage.',
                  },
                  {
                    type: 'keyTerm',
                    term: 'Coupe-feu',
                    definition: 'Un système de matériaux et de dispositifs installé autour de la tuyauterie et d\'autres pénétrations de services à travers des séparations coupe-feu pour prévenir la propagation du feu et de la fumée à travers l\'ouverture. Exigé par les codes du bâtiment et de la plomberie partout où la tuyauterie pénètre un assemblage résistant au feu.',
                  },
                  {
                    type: 'infoBox',
                    title: 'Mise en service des systèmes',
                    items: [
                      'La mise en service est le processus de test, d\'ajustement et de vérification qu\'un système de plomberie fonctionne tel que conçu avant la remise au propriétaire',
                      'Comprend les essais de pression, les essais de débit et l\'équilibrage du système',
                      'Tous les résultats des tests doivent être documentés et soumis avec la documentation finale du projet',
                      'Les plombiers doivent coordonner la mise en service avec les autres corps de métier et le propriétaire du bâtiment',
                    ],
                  },
                ],
              },
            ],
            practiceQuestions: [
              {
                id: 'q04-01',
                question: 'Un plombier doit réaliser une déviation de 200 mm dans un tracé de tuyau en utilisant deux coudes à 45°. Quelle est la longueur de parcours requise ?',
                options: [
                  '141,4 mm',
                  '200 mm',
                  '282,8 mm',
                  '400 mm',
                ],
                correctIndex: 2,
                explanation: 'Parcours = Déviation × 1,414. Donc : 200 mm × 1,414 = 282,8 mm. La constante 1,414 (√2) est fournie sur la fiche de référence officielle des formules du plombier.',
              },
              {
                id: 'q04-02',
                question: 'Quelle est la pente minimale requise par le Code national de la plomberie pour un tuyau de drainage de 50 mm (2 po) ?',
                options: [
                  '0,5 % (1/16 po par pied)',
                  '1 % (1/8 po par pied)',
                  '2 % (1/4 po par pied)',
                  '5 % (5/8 po par pied)',
                ],
                correctIndex: 2,
                explanation: 'Pour les tuyaux de drainage de diamètre jusqu\'à 75 mm (3 po), le Code national de la plomberie exige une pente minimale de 2 %, soit 1/4 de pouce de chute par pied de tracé horizontal (ou 20 mm par mètre).',
              },
              {
                id: 'q04-03',
                question: 'Pourquoi le coupe-feu doit-il être installé là où la tuyauterie traverse un mur résistant au feu ?',
                options: [
                  'Pour prévenir les dommages causés par l\'eau à l\'assemblage du mur',
                  'Pour ancrer le tuyau et empêcher tout mouvement',
                  'Pour maintenir la cote de résistance au feu de l\'assemblage en empêchant la propagation du feu et de la fumée à travers la pénétration',
                  'Pour réduire la transmission du bruit entre les pièces',
                ],
                correctIndex: 2,
                explanation: 'Le coupe-feu est exigé par les codes du bâtiment et de la plomberie pour maintenir la cote de résistance au feu des séparations coupe-feu (murs, planchers, plafonds). Sans coupe-feu, un trou à travers un mur coupe-feu devient un chemin pour que le feu et la fumée se propagent dans le bâtiment.',
              },
            ],
          },
        ],
      },
  
      // ============================================================
      // PARTIE 2 — PRÉPARATION ET ASSEMBLAGE DE TUBES, TUYAUX ET CONDUITS
      // GTA B : Prépare et assemble les tubes, tuyaux et conduits (10 %)
      // ============================================================
      {
        id: 'part-2',
        number: 2,
        title: 'Préparation et assemblage de tuyaux',
        description: 'Coupe, cintrage et assemblage de tous les matériaux de tuyaux — le cœur pratique de l\'installation en plomberie.',
        chapters: [
  
          // CHAPITRE 5 — Préparation des tuyaux (GTA B-6)
          {
            id: 'ch-05',
            number: 5,
            title: 'Préparation des tubes, tuyaux et conduits',
            subtitle: 'GTA B-6 · Tâche B-6 : Prépare les tubes, tuyaux et conduits (46 % de la GTA B)',
            isFree: false,
            estimatedMinutes: 45,
            sections: [
              {
                id: 'ch05-s1',
                title: '5.1 Inspection des tuyaux et raccords avant installation',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Tous les tubes, tuyaux et raccords doivent être inspectés avant l\'installation pour confirmer qu\'ils répondent aux spécifications, sont exempts de défauts et sont appropriés pour l\'application. Les matériaux défectueux doivent être identifiés et mis de côté — l\'installation de tuyaux de qualité inférieure peut entraîner des défaillances du système, des fuites et des réparations coûteuses.',
                  },
                  {
                    type: 'infoBox',
                    title: 'Points à vérifier lors de l\'inspection',
                    items: [
                      'Type de matériau — confirmer le matériau correct (cuivre, PVC, CPVC, PEX, acier, fonte)',
                      'Dimensions — confirmer le diamètre correct (taille nominale) et l\'épaisseur de paroi (classe ou cote SDR)',
                      'Défauts — vérifier les fissures, bosses, ovalisation (hors-rond), entailles et dommages de surface',
                      'Raccords — confirmer le type, la taille et la cote de pression corrects ; vérifier les fissures ou défauts de moulage',
                      'Marquages — confirmer que les certifications NSF, ASTM, CSA ou autres requises sont marquées sur le tuyau',
                      'État des surfaces d\'assemblage — emboîtures, extrémités filetées et profils de rainures',
                    ],
                  },
                ],
              },
              {
                id: 'ch05-s2',
                title: '5.2 Coupe des tuyaux',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Une coupe précise est essentielle pour un bon engagement des raccords et des joints étanches. Le tuyau doit être coupé d\'équerre (perpendiculairement à l\'axe du tuyau) et ébarbé après la coupe.',
                  },
                  {
                    type: 'table',
                    headers: ['Matériau du tuyau', 'Outil(s) de coupe', 'Notes importantes'],
                    rows: [
                      ['Tube en cuivre', 'Coupe-tube en cuivre, scie à métaux', 'Aléser et ébavurer le diamètre intérieur après la coupe ; retirer toutes les bavures pour prévenir la turbulence et l\'érosion'],
                      ['PVC / CPVC', 'Coupe-tube plastique, coupe-tube à rochet, scie à métaux, scie à onglets', 'La coupe doit être d\'équerre ; nettoyer et sécher avant le collage'],
                      ['Tuyau PEX', 'Coupe-tube PEX (lame en D), coupe-tube à rochet', 'La coupe doit être d\'équerre pour un bon engagement du raccord à inserts ou à expansion'],
                      ['Acier noir/galvanisé', 'Filière électrique avec coupe-tube, scie alternative, meuleuse à tronçonner', 'Protéger le revêtement galvanisé à l\'extrémité coupée si possible'],
                      ['Fonte', 'Coupe-tube à cliquet (coupe-tube à chaîne), meuleuse d\'angle avec disque diamant', 'Le coupe-tube à cliquet marque la circonférence ; manuel ou hydraulique'],
                      ['PEHD', 'Scie de fusion, scie alternative', 'La coupe doit être d\'équerre pour l\'assemblage par fusion'],
                    ],
                  },
                ],
              },
              {
                id: 'ch05-s3',
                title: '5.3 Cintrage de tubes et tuyaux',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Le cintrage des tuyaux réduit le nombre de raccords nécessaires, diminuant les coûts de matériaux et réduisant les points de fuites potentiels. Il est le plus couramment appliqué aux tubes en cuivre recuit (types K et L), aux conduits électriques métalliques (CEM dans les métiers connexes) et aux tuyaux PEX.',
                  },
                  {
                    type: 'paragraph',
                    text: 'Lors du cintrage d\'un tube en cuivre, le tube doit être soutenu tout au long du rayon de courbure pour prévenir le pliage. Des cintreuses à ressort (internes ou externes) ou des cintreuses mécaniques sont utilisées. Le rayon de courbure minimal dépend du diamètre du tube — un rayon trop serré cause un pliage et une restriction de débit.',
                  },
                  {
                    type: 'infoBox',
                    title: 'Préparation des connexions de tubes et tuyaux',
                    items: [
                      'Après la coupe du tube en cuivre : aléser le diamètre intérieur pour retirer les bavures, nettoyer l\'extérieur avec du papier de verre ou une brosse de raccord',
                      'Pour le brasage tendre : appliquer du flux sur l\'extérieur du tube et l\'intérieur de l\'emboîture',
                      'Pour le filetage de l\'acier : couper les filets avec un taraud à tuyau selon le cône correct ASME ; appliquer un scellant de filet',
                      'Pour le collage PVC : nettoyer et amorcer les deux surfaces ; appliquer le ciment et assembler dans le temps ouvert',
                      'Pour les raccords à sertir : s\'assurer que le tuyau est complètement inséré et que la marque est visible ; utiliser la mâchoire correcte pour le matériau et la taille du tuyau',
                      'Pour le sertissage ou le serrage PEX : utiliser l\'outil approprié selon le style de raccord (anneau de sertissage vs anneau de serrage vs expansion)',
                    ],
                  },
                ],
              },
            ],
            practiceQuestions: [
              {
                id: 'q05-01',
                question: 'Après avoir coupé un tube en cuivre avec un coupe-tube, quelle est l\'étape SUIVANTE essentielle avant le brasage tendre ?',
                options: [
                  'Appliquer immédiatement le flux et commencer le brasage',
                  'Aléser le diamètre intérieur pour retirer la bavure créée par la molette de coupe',
                  'Chauffer l\'extrémité du tube pour le recuire avant de l\'insérer dans le raccord',
                  'Essuyer l\'extrémité coupée avec un chiffon humide pour la nettoyer',
                ],
                correctIndex: 1,
                explanation: 'Les coupe-tubes créent une bavure vers l\'intérieur tranchante sur le diamètre intérieur de la coupe. Cette bavure doit être retirée par alésage pour rétablir la section de passage complète et prévenir la turbulence et l\'érosion dans le système.',
              },
              {
                id: 'q05-02',
                question: 'Quel outil de coupe est le plus couramment utilisé pour couper des tuyaux en fonte sur le chantier ?',
                options: [
                  'Coupe-tube en cuivre',
                  'Scie à métaux',
                  'Coupe-tube à cliquet (coupe-tube à chaîne)',
                  'Coupe-tube à rochet PEX',
                ],
                correctIndex: 2,
                explanation: 'Le coupe-tube à cliquet (aussi appelé coupe-tube à chaîne ou coupe-tube pour tuyaux de fonte) marque la circonférence extérieure du tuyau en fonte à l\'aide de molettes de coupe trempées. Lorsque la chaîne est serrée avec un rochet, le tuyau se casse proprement le long de la ligne de marquage.',
              },
            ],
          },
  
          // CHAPITRE 6 — Assemblage de tuyaux (GTA B-7)
          {
            id: 'ch-06',
            number: 6,
            title: 'Assemblage des tubes, tuyaux et conduits',
            subtitle: 'GTA B-7 · Tâche B-7 : Assemble les tubes, tuyaux et conduits (54 % de la GTA B)',
            isFree: false,
            estimatedMinutes: 55,
            sections: [
              {
                id: 'ch06-s1',
                title: '6.1 Assemblage des tubes et tuyaux en cuivre',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Le cuivre est l\'un des matériaux de tuyauterie les plus utilisés en plomberie en raison de sa résistance à la corrosion, de sa durabilité et de sa longue durée de service. Le tube en cuivre est disponible en plusieurs types (K, L, M, DWV) avec différentes épaisseurs de paroi adaptées à différentes applications.',
                  },
                  {
                    type: 'table',
                    headers: ['Type de joint', 'Méthode', 'Application'],
                    rows: [
                      ['Brasage tendre (soudure)', 'Chauffer avec chalumeau ; l\'action capillaire attire la soudure dans l\'espace', 'Eau froide et chaude domestique, gaz (avec soudure/flux appropriés)'],
                      ['Brasage fort', 'Chaleur plus élevée ; soudure à l\'argent attirée dans l\'espace', 'Tubes ACR, haute pression, réfrigération'],
                      ['Raccord à sertir', 'L\'outil à sertir hydraulique sertit le raccord sur le tuyau', 'Installation rapide ; sans flamme ouverte ; approuvé pour le gaz dans certaines juridictions'],
                      ['Compression', 'La bague et l\'écrou compriment mécaniquement sur le diamètre extérieur du tuyau', 'Connexions d\'appareils sanitaires, connexions d\'appareils, lignes de service exposées'],
                      ['Évasement', 'L\'extrémité du tube est évasée à 45° ; l\'écrou de raccord d\'évasement étanche contre le siège du raccord', 'Tubes ACR, connexions d\'appareils à gaz'],
                      ['Raccord à emboîtement', 'Le tuyau est inséré dans le raccord ; une bague de retenue et un joint torique assurent l\'étanchéité', 'Réparations rapides ; emplacements accessibles seulement dans certains codes'],
                    ],
                  },
                ],
              },
              {
                id: 'ch06-s2',
                title: '6.2 Assemblage des tubes et tuyaux en plastique',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Les matériaux de tuyauterie en plastique offrent une résistance à la corrosion, une légèreté et une facilité d\'installation. Les différents plastiques utilisent différentes méthodes d\'assemblage — il est essentiel d\'utiliser la méthode et les matériaux corrects pour chaque type de tuyau.',
                  },
                  {
                    type: 'table',
                    headers: ['Type de plastique', 'Utilisation courante', 'Méthodes d\'assemblage'],
                    rows: [
                      ['PVC (polychlorure de vinyle)', 'DWV, eau froide, irrigation', 'Ciment solvant (amorce + ciment)'],
                      ['CPVC (PVC chloré)', 'Eau potable chaude et froide', 'Ciment solvant (ciment spécifique CPVC)'],
                      ['ABS (acrylonitrile butadiène styrène)', 'Systèmes DWV', 'Ciment ABS ou ciment de transition ABS vers PVC'],
                      ['PEX (polyéthylène réticulé)', 'Eau potable chaude et froide, hydroponique radiant', 'Sertissage, serrage, pressage ou expansion (PEX-A)'],
                      ['PEHD (polyéthylène haute densité)', 'Conduites d\'eau, égouts, conduites de refoulement', 'Fusion bout à bout, électrofusion, raccords mécaniques'],
                      ['PP (polypropylène)', 'Drainage chimique, eau dans certains cas', 'Fusion thermique (bout à bout ou emboîture)'],
                    ],
                  },
                  {
                    type: 'infoBox',
                    title: 'Coefficient de dilatation linéaire — Pourquoi c\'est important',
                    items: [
                      'Les tuyaux en plastique se dilatent et se contractent beaucoup plus que les métaux avec les changements de température',
                      'ABS : 0,0000990 par 1 °C (taux de dilatation le plus élevé)',
                      'PVC : 0,0000594 par 1 °C',
                      'Cuivre : 0,0000171 par 1 °C',
                      'Acier : 0,0000120 par 1 °C',
                      'Dilatation = Longueur × Différence de température × Coefficient (L × ΔT × α)',
                      'Des boucles de dilatation, des joints de dilatation ou des supports de dilatation doivent être prévus pour les longs tracés en plastique',
                    ],
                  },
                ],
              },
              {
                id: 'ch06-s3',
                title: '6.3 Assemblage des tuyaux en acier et en fonte',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Les tuyaux en acier (noir ou galvanisé) sont utilisés dans la protection incendie, la distribution de gaz, la vapeur et les systèmes de chauffage hydronique. La fonte est utilisée principalement pour les systèmes DWV où l\'atténuation acoustique (réduction du bruit) est importante, comme dans les immeubles résidentiels à plusieurs étages.',
                  },
                  {
                    type: 'table',
                    headers: ['Type de joint', 'Type de tuyau', 'Application'],
                    rows: [
                      ['Fileté', 'Acier', 'Conduites de gaz, systèmes de gicleurs, tuyauterie générale — filets coupés selon le cône ASME/ANSI'],
                      ['À brides', 'Acier', 'Connexions d\'équipements, robinetterie, grandes tuyauteries nécessitant un démontage périodique'],
                      ['Soudé', 'Acier', 'Tuyauterie haute pression, haute température, structurelle — soudeur certifié peut être requis'],
                      ['Rainuré (style Victaulic)', 'Acier, fonte ductile', 'Raccord mécanique rainuré ; rapide, flexible ; utilisé dans les systèmes de gicleurs et de CVC'],
                      ['À sertir', 'Acier', 'Raccords à sertir en acier au carbone ; sans flamme ; de plus en plus courant'],
                      ['Raccord sans emboîture', 'Fonte', 'Joint d\'étanchéité en néoprène et collier de serrage ; utilisé pour les joints de tuyaux en fonte DWV'],
                      ['Emboîture et spigot (plomb et étoupe)', 'Fonte', 'Joints patrimoniaux/héritage ; rarement utilisés dans les nouvelles constructions'],
                    ],
                  },
                  {
                    type: 'paragraph',
                    text: 'Lors de l\'identification du type de tuyau en acier, le système d\'identification comprend la classe du tuyau (Schedule 40, 80, 160), le grade du tuyau (acier au carbone, acier inoxydable, acier galvanisé) et l\'épaisseur de paroi. Les accessoires pour tuyaux en acier comprennent les supports, les colliers et les manchons — tous devant être sélectionnés pour être compatibles avec le matériau du tuyau afin de prévenir la corrosion galvanique aux interfaces métalliques.',
                  },
                ],
              },
            ],
            practiceQuestions: [
              {
                id: 'q06-01',
                question: 'Quel type de tuyau en plastique nécessite un type SPÉCIFIQUE de ciment solvant — il NE PEUT PAS être assemblé avec du ciment PVC standard ?',
                options: [
                  'ABS',
                  'CPVC',
                  'PVC',
                  'PEHD',
                ],
                correctIndex: 1,
                explanation: 'Le CPVC (PVC chloré) nécessite un ciment solvant spécifique au CPVC. L\'utilisation de ciment PVC standard sur du CPVC constitue une violation du code et entraînera une défaillance du joint. Le PEHD est assemblé par fusion, non par ciment.',
              },
              {
                id: 'q06-02',
                question: 'Calculer la dilatation thermique d\'un tracé de tuyau PVC de 10 mètres si la température augmente de 30 °C. (Coefficient : 0,0000594/°C)',
                options: [
                  '0,178 mm',
                  '17,82 mm',
                  '1,782 mm',
                  '178,2 mm',
                ],
                correctIndex: 1,
                explanation: 'Dilatation = L × ΔT × α = 10 000 mm × 30 °C × 0,0000594 = 17,82 mm. Ce mouvement significatif nécessite des dispositions pour la dilatation dans la conception du système de tuyauterie.',
              },
              {
                id: 'q06-03',
                question: 'Quel type de joint est utilisé pour assembler des tuyaux en fonte sans emboîture ?',
                options: [
                  'Joint fileté avec enduit de filet',
                  'Joint à ciment solvant',
                  'Raccord sans emboîture avec joint d\'étanchéité en néoprène et collier de serrage',
                  'Joint plomb et étoupe',
                ],
                correctIndex: 2,
                explanation: 'Les tuyaux en fonte sans emboîture sont assemblés avec un raccord sans emboîture constitué d\'un joint d\'étanchéité en néoprène (qui assure l\'étanchéité) et d\'un collier de serrage en acier inoxydable avec fixations à vis. C\'est la norme moderne pour la fonte DWV.',
              },
            ],
          },
        ],
      },
  
      // ============================================================
      // PARTIE 3 — SYSTÈMES DE DRAINAGE, D'ÉVACUATION ET DE VENTILATION (DEV)
      // GTA C : Installe, teste et entretient les systèmes DEV (26 %)
      // ============================================================
      {
        id: 'part-3',
        number: 3,
        title: 'Systèmes de drainage, d\'évacuation et de ventilation',
        description: 'La plus grande portion de l\'examen Sceau rouge — conception, installation, test et entretien des systèmes DEV.',
        chapters: [
  
          // CHAPITRE 7 — Égouts et traitement des eaux usées (GTA C-8)
          {
            id: 'ch-07',
            number: 7,
            title: 'Égouts et systèmes de traitement des eaux usées',
            subtitle: 'GTA C-8 & C-9 · Installe, teste et entretient les égouts (20 % de la GTA C) et le traitement des eaux usées (17 % de la GTA C)',
            isFree: false,
            estimatedMinutes: 50,
            sections: [
              {
                id: 'ch07-s1',
                title: '7.1 Agencement et dimensionnement des égouts',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Les égouts acheminent les eaux usées, les eaux pluviales et les eaux claires depuis les bâtiments vers un réseau d\'égout public ou un système d\'évacuation privé. Les plombiers planifient l\'agencement et dimensionnent les tuyaux pour les égouts en fonction des débits attendus, des pentes de tuyaux et des exigences des codes applicables.',
                  },
                  {
                    type: 'keyTerm',
                    term: 'Égout sanitaire',
                    definition: 'Un égout qui achemine les eaux usées (déchets liquides autres que les eaux claires ou les eaux pluviales) vers une station d\'épuration ou un système de traitement privé.',
                  },
                  {
                    type: 'keyTerm',
                    term: 'Égout pluvial',
                    definition: 'Un égout qui achemine les eaux pluviales (pluie, fonte des neiges) des toits, des aires de stationnement et des surfaces pavées vers un exutoire approprié tel qu\'un cours d\'eau ou un bassin de rétention.',
                  },
                  {
                    type: 'keyTerm',
                    term: 'Regard de visite (anciennement trou d\'homme)',
                    definition: 'Une ouverture vers un espace clos qui permet l\'accès aux conduites souterraines pour l\'inspection, l\'entretien et les mises à niveau du système.',
                  },
                  {
                    type: 'paragraph',
                    text: 'Le dimensionnement des tuyaux d\'égout utilise le concept de débit et de capacité de tuyau à la pente requise. Les égouts plus profonds en zones urbaines nécessitent un agencement soigneux pour raccordement à la bonne élévation. Les blocs de butée — blocs de béton coulé — sont requis aux coudes et aux changements de direction dans les tuyaux enterrés sous pression pour résister à la force de poussée hydraulique aux raccords.',
                  },
                ],
              },
              {
                id: 'ch07-s2',
                title: '7.2 Systèmes de traitement des eaux usées',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Dans les zones sans accès à un réseau d\'égout municipal, des systèmes privés de traitement des eaux usées doivent être installés pour traiter et éliminer en toute sécurité les eaux usées du bâtiment. Les plombiers planifient, installent, testent et entretiennent ces systèmes.',
                  },
                  {
                    type: 'table',
                    headers: ['Composant', 'Fonction'],
                    rows: [
                      ['Fosse septique', 'Digestion anaérobie des solides ; séparation des solides du liquide effluent'],
                      ['Boîte de distribution', 'Distribue l\'effluent équitablement à chaque bras du champ d\'épandage'],
                      ['Chambre d\'infiltration / champ d\'absorption', 'Permet à l\'effluent traité de percoler dans le sol'],
                      ['Station de pompage / pompe', 'Pompe les eaux usées lorsque l\'écoulement par gravité est impossible'],
                      ['Clapet anti-retour', 'Empêche les eaux usées de refluer dans le bâtiment lors de forts débits'],
                      ['Alarme / capteur', 'Alerte lorsque le niveau de liquide dans les réservoirs de rétention atteint un point de consigne'],
                    ],
                  },
                  {
                    type: 'paragraph',
                    text: 'Les impacts environnementaux et sanitaires sont une préoccupation majeure lors de l\'installation et de l\'entretien des systèmes de traitement des eaux usées. Les plombiers doivent respecter toutes les exigences en matière d\'équipements de protection individuelle et suivre les procédures d\'élimination des déchets pour prévenir la contamination du sol et des eaux souterraines.',
                  },
                ],
              },
            ],
            practiceQuestions: [
              {
                id: 'q07-01',
                question: 'Quelle est la fonction d\'un clapet anti-retour dans un système de drainage sanitaire ?',
                options: [
                  'Augmenter la vitesse d\'écoulement dans le tuyau d\'égout',
                  'Empêcher les eaux usées de refluer dans le bâtiment lors de forts débits dans le réseau d\'égout municipal',
                  'Retirer l\'air du système de drainage',
                  'Réguler la pression d\'alimentation en eau dans le bâtiment',
                ],
                correctIndex: 1,
                explanation: 'Un clapet anti-retour (clapet de non-retour pour drainage gravitaire) est conçu pour permettre l\'écoulement dans un seul sens. Il empêche les eaux usées de changer de direction et de refouler dans le bâtiment par les drains de plancher et les appareils sanitaires lors de surcharges dans le réseau d\'égout municipal.',
              },
              {
                id: 'q07-02',
                question: 'Quel est le but d\'une boîte de distribution dans un système septique privé ?',
                options: [
                  'Retenir les eaux usées jusqu\'à ce qu\'elles soient collectées par un camion de vidange',
                  'Fournir un accès pour l\'inspection et le nettoyage de l\'égout',
                  'Distribuer équitablement l\'effluent de la fosse septique à chaque bras du champ d\'absorption',
                  'Filtrer les solides des eaux usées avant qu\'elles entrent dans le réservoir',
                ],
                correctIndex: 2,
                explanation: 'La boîte de distribution reçoit l\'effluent liquide de la fosse septique et le distribue équitablement entre les multiples tranchées de drainage (bras) du champ d\'infiltration/absorption pour éviter que toute zone ne soit surchargée.',
              },
            ],
          },
          // CHAPITRE 8 — Systèmes DWV intérieurs (GTA C-10)
          {
            id: 'ch-08',
            number: 8,
            title: 'Systèmes intérieurs de drainage, eaux usées et ventilation (DWV)',
            subtitle: 'GTA C-10 · Installe, teste et entretient les systèmes DWV intérieurs (63 % de la GTA C)',
            isFree: false,
            estimatedMinutes: 65,
            sections: [
              {
                id: 'ch08-s1',
                title: '8.1 Comprendre le système DWV',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Le système intérieur de drainage, eaux usées et ventilation (DWV) est l\'ensemble des tuyaux et raccords à l\'intérieur d\'un bâtiment qui collecte les eaux usées des appareils sanitaires et les achemine par gravité vers le drain de bâtiment et l\'égout. Le système de ventilation relie le réseau de drainage à l\'air extérieur pour protéger les siphons et assurer une circulation d\'air adéquate.',
                  },
                  {
                    type: 'keyTerm',
                    term: 'Siphon (trap)',
                    definition: 'Un raccord ou dispositif conçu pour maintenir une garde d\'eau qui empêche le passage des gaz d\'égout dans le bâtiment, sans affecter sensiblement l\'écoulement. Chaque appareil doit avoir son propre siphon.',
                  },
                  {
                    type: 'keyTerm',
                    term: 'Unité d\'appareil (drainage)',
                    definition: 'Unité de mesure basée sur le débit, la durée d\'utilisation et la fréquence d\'usage d\'un appareil, exprimant la charge hydraulique imposée au réseau de drainage. Utilisée pour dimensionner les tuyaux de drainage et le drain de bâtiment.',
                  },
                  {
                    type: 'keyTerm',
                    term: 'Regard de visite (cleanout)',
                    definition: 'Point d\'accès aménagé dans les systèmes de drainage et de ventilation pour le nettoyage et l\'inspection. Exigé à tout changement de direction supérieur à 45°, à la base de chaque colonne verticale et à des intervalles définis sur les tronçons horizontaux.',
                  },
                  {
                    type: 'table',
                    headers: ['Composant DWV', 'Fonction / Description'],
                    rows: [
                      ['Drain de bâtiment', 'Tuyau horizontal le plus bas du système de drainage à l\'intérieur du bâtiment ; relie à l\'égout de bâtiment au mur de fondation'],
                      ['Égout de bâtiment', 'Tuyau du bâtiment jusqu\'à l\'égout public ou au système d\'évacuation privé'],
                      ['Colonne de sol / colonne d\'eaux usées', 'Tuyau vertical qui reçoit les effluents des toilettes (sol) ou d\'autres appareils (eaux usées)'],
                      ['Colonne de ventilation', 'Tuyau de ventilation vertical prolongé à travers la toiture vers l\'atmosphère ; se termine au-dessus du toit'],
                      ['Drain secondaire', 'Tuyau horizontal reliant un ou plusieurs appareils à une colonne ou au drain de bâtiment'],
                      ['Bras du siphon', 'Tuyau entre la garde d\'eau du siphon et la liaison de ventilation ou de drainage'],
                      ['Siphon en P', 'Type de siphon le plus courant ; utilisé sous éviers, lavabos, baignoires'],
                      ['Siphon de drain de plancher', 'Installé dans les planchers ; nécessite un remplissage périodique pour maintenir la garde d\'eau'],
                    ],
                  },
                ],
              },
              {
                id: 'ch08-s2',
                title: '8.2 Agencement, dimensionnement et installation DWV',
                content: [
                  {
                    type: 'paragraph',
                    text: 'L\'agencement du système DWV exige une planification soigneuse pour obtenir les pentes adéquates du drainage tout en s\'intégrant aux contraintes structurelles et architecturales du bâtiment. Les tuyaux doivent être dimensionnés pour la demande de pointe et doivent être ventilés pour éviter les différences de pression qui pourraient siphonner les gardes d\'eau.',
                  },
                  {
                    type: 'paragraph',
                    text: 'La tuyauterie DWV souterraine est installée en premier, en coordination avec la dalle de béton. La tuyauterie DWV en superstructure est installée au fur et à mesure du coffrage du bâtiment, en travaillant du bas vers le haut — d\'abord le drain de bâtiment, puis les colonnes verticales, puis les branches horizontales vers les appareils. Tous les drains horizontaux doivent avoir une pente vers l\'évacuation ; tous les tuyaux verticaux doivent être d\'aplomb.',
                  },
                  {
                    type: 'infoBox',
                    title: 'Raccords DWV vs. raccords pour pression',
                    items: [
                      'Les raccords DWV ont des courbes à grand rayon (coudes à long rayon) pour favoriser un écoulement fluide et éviter les obstructions',
                      'Les raccords pour pression (alimentation en eau) ont des coudes serrés et causeraient des obstructions s\'ils étaient utilisés en drainage',
                      'Les raccords DWV sont directionnels — ils doivent être installés dans le sens d\'écoulement correspondant à la pente du drainage',
                      'Les coudes à long rayon servent aux changements de direction horizontale à horizontale',
                      'Les raccords à court rayon ne peuvent être utilisés que dans des applications précises selon le code',
                    ],
                  },
                ],
              },
              {
                id: 'ch08-s3',
                title: '8.3 Essai et entretien des systèmes DWV',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Les systèmes DWV doivent être mis à l\'épreuve avant la fermeture des murs et plafonds. Les deux essais principaux sont l\'essai à l\'eau et l\'essai à l\'air.',
                  },
                  {
                    type: 'table',
                    headers: ['Méthode d\'essai', 'Procédure', 'Critères de réussite'],
                    rows: [
                      ['Essai à l\'eau', 'Boucher toutes les ouvertures ; remplir le système jusqu\'au niveau de débordement du plus haut appareil ou 3 m de hauteur ; maintenir au moins 15 minutes', 'Aucune fuite visible ni baisse du niveau d\'eau au-delà de l\'absorption normale'],
                      ['Essai à l\'air', 'Boucher toutes les ouvertures ; mettre sous pression à 35 kPa (5 psi) ; maintenir 15 minutes', 'Aucune baisse de pression détectée sur le manomètre'],
                      ['Essai à la fumée', 'Introduire de la fumée non toxique ou de l\'huile de menthe poivrée ; mettre légèrement sous pression', 'Aucune fumée visible aux joints, raccords ou appareils — utilisé pour localiser les fuites et les interconnexions'],
                    ],
                  },
                  {
                    type: 'paragraph',
                    text: 'Les problèmes courants d\'entretien DWV comprennent les drains obstrués (graisse, cheveux, accumulation de solides), les tuyaux fissurés, les joints détériorés, les gardes d\'eau siphonnées et une ventilation insuffisante. L\'inspection sensorielle — vue, ouïe, odorat et toucher — est la première étape pour diagnostiquer un problème de drainage.',
                  },
                ],
              },
            ],
            practiceQuestions: [
              {
                id: 'q08-01',
                question: 'Quelle est la fonction principale de la ventilation dans un système DWV ?',
                options: [
                  'Permettre à l\'air frais d\'entrer dans le bâtiment par la plomberie',
                  'Protéger les gardes d\'eau des siphons contre l\'effet des différences de pression dans le réseau de drainage, et permettre la circulation d\'air',
                  'Éviter la formation de condensation à l\'intérieur des tuyaux de drainage',
                  'Réduire la vitesse d\'écoulement dans les tuyaux de drainage',
                ],
                correctIndex: 1,
                explanation: 'La ventilation permet à l\'air d\'entrer dans le système de drainage lorsque les eaux usées s\'écoulent, évitant une pression négative (aspiration) qui siphonnerait l\'eau des siphons. Un siphon vidé ne laisse plus de garde d\'eau, ce qui permet aux gaz d\'égout d\'entrer dans le bâtiment.',
              },
              {
                id: 'q08-02',
                question: 'Quelle est la pression d\'air standard utilisée pour l\'essai à l\'air d\'un système DWV ?',
                options: [
                  '100 kPa (15 psi)',
                  '700 kPa (100 psi)',
                  '35 kPa (5 psi)',
                  '200 kPa (29 psi)',
                ],
                correctIndex: 2,
                explanation: 'La pression standard pour l\'essai à l\'air des systèmes DWV est de 35 kPa (environ 5 psi), maintenue au moins 15 minutes sans perte de pression. Des pressions plus élevées ne sont pas requises pour les systèmes de drainage gravitaire.',
              },
              {
                id: 'q08-03',
                question: 'Pourquoi doit-on utiliser des raccords DWV dans les systèmes de drainage plutôt que des raccords pour pression ?',
                options: [
                  'Les raccords DWV sont moins chers que les raccords pour pression',
                  'Les raccords DWV ont des courbes à long rayon qui favorisent un écoulement fluide et évitent les obstructions en drainage gravitaire',
                  'Les raccords pour pression ne sont pas homologués pour les températures des systèmes de drainage',
                  'Les raccords DWV sont plus faciles à installer en sous-œuvre',
                ],
                correctIndex: 1,
                explanation: 'Les raccords DWV ont des courbes longues et douces conçues pour un écoulement gravitaire fluide. Les raccords pour pression ont des coudes abrupts qui créeraient des turbulences, retiendraient les débris et causeraient des obstructions en drainage.',
              },
              {
                id: 'q08-04',
                question: 'Quel est le rôle d\'un « regard de visite » (cleanout) dans un système DWV ?',
                options: [
                  'Permettre de remplir la garde d\'eau du siphon',
                  'Fournir un accès pour le nettoyage et l\'inspection de la tuyauterie de drainage',
                  'Permettre à l\'air d\'entrer dans le système de drainage et protéger les gardes d\'eau',
                  'Permettre au plombier de tester la pression du système',
                ],
                correctIndex: 1,
                explanation: 'Les regards de visite constituent des points d\'accès dans les systèmes de drainage et de ventilation pour déboucher les obstructions et effectuer des inspections. Ils sont exigés par le code à tout changement de direction important, à la base des colonnes et à intervalles sur les longs tronçons horizontaux.',
              },
            ],
          },
        ],
      },

      // ============================================================

      {
        id: 'part-4',
        number: 4,
        title: 'Alimentation et distribution d\'eau',
        description: 'Acheminement de l\'eau potable dans le bâtiment et distribution sécuritaire à chaque appareil sanitaire et électroménager.',
        chapters: [
  
          {
            id: 'ch-09',
            number: 9,
            title: 'Alimentation en eau et distribution d\'eau potable',
            subtitle: 'GTA D-11, D-12 et D-13 · Alimentation en eau (24 %), Distribution d\'eau potable (49 %), Pression d\'eau privée (27 %)',
            isFree: false,
            estimatedMinutes: 60,
            sections: [
              {
                id: 'ch09-s1',
                title: '9.1 Alimentation en eau',
                content: [
                  {
                    type: 'paragraph',
                    text: 'L\'alimentation en eau est le tuyau qui achemine l\'eau depuis la conduite d\'eau publique (ou une source d\'eau privée) jusqu\'à l\'intérieur d\'un bâtiment, y compris la vanne d\'isolement principale. Il incombe au plombier de s\'assurer que l\'alimentation en eau est correctement dimensionnée, protégée contre le gel et installée conformément au Code national de la plomberie et aux exigences de l\'AHJ.',
                  },
                  {
                    type: 'keyTerm',
                    term: 'Tuyau d\'alimentation en eau',
                    definition: 'Le tuyau qui achemine l\'eau depuis une conduite d\'eau publique ou une source d\'eau privée jusqu\'à l\'intérieur d\'un bâtiment, y compris la vanne d\'isolement principale.',
                  },
                  {
                    type: 'infoBox',
                    title: 'Exigences d\'installation de l\'alimentation en eau',
                    items: [
                      'Profondeur minimale d\'enfouissement — en dessous de la ligne de gel (varie selon la région ; généralement 1,5–2,5 m en Ontario)',
                      'Matériau du tuyau — doit être certifié pour l\'eau potable (cuivre, PE, PVC, fonte ductile sont courants)',
                      'Remblayage — le tuyau doit être posé sur lit de pose et remblayé avec un matériau propre exempt de roches et débris',
                      'Vanne d\'isolement — robinet d\'arrêt principal requis au point d\'entrée dans le bâtiment',
                      'Prise de branchement — le raccordement à la conduite principale (installé par la municipalité)',
                      'Robinet de trottoir — vanne d\'arrêt en limite de propriété, dans un regard de trottoir',
                      'Réducteur de pression (RDP) — requis lorsque la pression de service dépasse le maximum autorisé par le code (généralement 550 kPa ou 80 psi au Canada)',
                    ],
                  },
                ],
              },
              {
                id: 'ch09-s2',
                title: '9.2 Distribution d\'eau potable — Dimensionnement et conception',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Le système de distribution d\'eau potable achemine l\'eau depuis le tuyau d\'alimentation vers chaque sortie, appareil sanitaire, électroménager et dispositif du bâtiment. Un dimensionnement adéquat est essentiel — des tuyaux sous-dimensionnés causent une pression et un débit insuffisants aux appareils ; des tuyaux surdimensionnés gaspillent les matériaux et peuvent favoriser la stagnation.',
                  },
                  {
                    type: 'keyTerm',
                    term: 'Unité de débit (alimentation en eau)',
                    definition: 'Une unité de mesure basée sur le débit d\'alimentation, la durée de fonctionnement et la fréquence d\'utilisation d\'un appareil sanitaire ou d\'une sortie, qui exprime la charge hydraulique imposée par cet appareil sur le système de distribution d\'eau.',
                  },
                  {
                    type: 'paragraph',
                    text: 'Le dimensionnement des tuyaux pour la distribution d\'eau tient compte : du total des unités de débit, de la longueur développée du tuyau (la longueur réelle du tuyau incluant les longueurs équivalentes des raccords et des vannes), de la sortie la plus éloignée, de la différence d\'élévation (chaque mètre de hauteur nécessite environ 9,8 kPa de pression supplémentaire), de la pression disponible du système, des limites de vitesse d\'écoulement et des pertes de charge dans le tuyau.',
                  },
                  {
                    type: 'table',
                    headers: ['Facteur', 'Impact sur le dimensionnement'],
                    rows: [
                      ['Total des unités de débit', 'Un nombre d\'unités plus élevé nécessite un diamètre de tuyau plus grand'],
                      ['Longueur développée', 'Des tracés plus longs causent plus de perte de charge — nécessitent un tuyau plus grand'],
                      ['Différence d\'élévation', 'L\'écoulement vers le haut perd de la pression (1 m ≈ 9,8 kPa) ; vers le bas en gagne'],
                      ['Pression disponible du système', 'Une pression d\'alimentation plus élevée permet des tracés plus longs et des tuyaux plus petits'],
                      ['Vitesse d\'écoulement', 'Vitesse maximale généralement 2,4 m/s (eau froide) à 1,5 m/s (eau chaude) pour éviter bruit et érosion'],
                      ['Dispositifs anti-refoulement', 'Les préventeurs de refoulement causent des pertes de pression — à prendre en compte dans la conception'],
                    ],
                  },
                ],
              },
              {
                id: 'ch09-s3',
                title: '9.3 Contrôle des interconnexions',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Une interconnexion est toute connexion réelle ou potentielle entre une source d\'eau potable et une source d\'eau non potable. Les interconnexions constituent l\'un des risques sanitaires les plus graves en plomberie. Le Code national de la plomberie exige un dispositif anti-refoulement à tous les points d\'interconnexion potentiels.',
                  },
                  {
                    type: 'keyTerm',
                    term: 'Refoulement',
                    definition: 'L\'inversion du sens normal d\'écoulement dans un système d\'alimentation en eau. Causé par une contre-pression (pression aval supérieure à l\'alimentation) ou un contre-siphonage (pression négative dans l\'alimentation).',
                  },
                  {
                    type: 'keyTerm',
                    term: 'Préventeur de refoulement',
                    definition: 'Un dispositif utilisé pour prévenir le refoulement. Les types comprennent les séparations atmosphériques, les disconnecteurs à pression atmosphérique, les clapets de retenue doubles et les préventeurs de refoulement à pression réduite — sélectionnés selon le degré de risque.',
                  },
                  {
                    type: 'table',
                    headers: ['Dispositif', 'Application', 'Niveau de protection'],
                    rows: [
                      ['Séparation atmosphérique', 'Distance verticale libre minimale entre la sortie d\'eau et le bord du vase récepteur', 'Maximale — aucune connexion physique'],
                      ['Disconnecteur à pression atmosphérique (DPA)', 'Robinets de jardin, sorties d\'irrigation', 'Contre-siphonage seulement ; ne peut pas être installé sous pression continue'],
                      ['Disconnecteur à pression (DP)', 'Systèmes d\'irrigation, peut rester sous pression continue', 'Contre-siphonage ; installé minimum 300 mm au-dessus de la sortie la plus haute'],
                      ['Clapet de retenue double (CRD)', 'Connexions commerciales à faible risque', 'Contre-pression et contre-siphonage ; testable'],
                      ['Préventeur de refoulement à zone de pression réduite (PRZPR)', 'Connexions à risque élevé (produits chimiques, eau recyclée, industriel)', 'Protection mécanique maximale ; essai et certification annuels requis'],
                    ],
                  },
                  {
                    type: 'paragraph',
                    text: 'Dans certaines juridictions, une formation et une certification supplémentaires sont requises pour installer et certifier les dispositifs de contrôle des interconnexions. L\'essai annuel et la recertification des dispositifs testables (CRD, PRZPR) sont exigés par la plupart des autorités.',
                  },
                ],
              },
              {
                id: 'ch09-s4',
                title: '9.4 Systèmes de pression d\'eau privés',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Dans les zones rurales sans accès à un réseau d\'eau municipal, les systèmes de pression d\'eau privés alimentent en eau potable à partir d\'un puits ou d\'une autre source privée. Ces systèmes comprennent une pompe submersible ou à jet, un réservoir de pression et la tuyauterie et les commandes associées.',
                  },
                  {
                    type: 'keyTerm',
                    term: 'Adaptateur de puits sans fosse',
                    definition: 'Un raccord qui permet le raccordement et le retrait d\'une pompe submersible depuis un tubage de puits sans avoir besoin d\'outils ou d\'entrer dans un espace clos. L\'adaptateur crée un raccordement étanche et isolé à travers le tubage du puits.',
                  },
                  {
                    type: 'keyTerm',
                    term: 'Amortisseur de couple',
                    definition: 'Un dispositif installé sur le tuyau de pompe dans un tubage de puits qui empêche le tuyau de tourner lors du démarrage du moteur de la pompe.',
                  },
                  {
                    type: 'infoBox',
                    title: 'Fonction du réservoir de pression',
                    items: [
                      'Stocke l\'eau sous pression pour fournir un débit entre les cycles de pompage',
                      'Types : réservoir à membrane (pré-chargé d\'air d\'un côté d\'une membrane en caoutchouc), réservoir à diaphragme, réservoir traditionnel à coussin d\'air',
                      'La pression de pré-charge doit être 14 kPa (2 psi) en dessous de la pression d\'enclenchement de la pompe',
                      'Un réservoir sous-dimensionné ou gorgé d\'eau cause un démarrage rapide cyclique de la pompe, réduisant sa durée de vie',
                    ],
                  },
                ],
              },
            ],
            practiceQuestions: [
              {
                id: 'q09-01',
                question: 'Qu\'est-ce qu\'une « interconnexion » dans un système de plomberie ?',
                options: [
                  'Un raccord utilisé pour connecter deux tuyaux de diamètres différents',
                  'Toute connexion réelle ou potentielle entre une source d\'eau potable et une source d\'eau non potable',
                  'L\'intersection d\'un tuyau d\'eau froide et d\'un tuyau d\'eau chaude à une vanne mélangeuse',
                  'Un raccordement entre le drain du bâtiment et l\'égout du bâtiment',
                ],
                correctIndex: 1,
                explanation: 'Une interconnexion est tout lien réel ou potentiel entre un système d\'eau potable et une source de contamination. Si un refoulement se produit au niveau d\'une interconnexion, la contamination pénètre dans le réseau d\'eau potable.',
              },
              {
                id: 'q09-02',
                question: 'Quel préventeur de refoulement offre le PLUS ÉLEVÉ niveau de protection mécanique contre le refoulement ?',
                options: [
                  'Disconnecteur à pression atmosphérique (DPA)',
                  'Clapet de retenue double (CRD)',
                  'Préventeur de refoulement à zone de pression réduite (PRZPR)',
                  'Disconnecteur à pression (DP)',
                ],
                correctIndex: 2,
                explanation: 'Le préventeur de refoulement à zone de pression réduite (PRZPR) offre le plus haut niveau de protection mécanique et est requis pour les applications à risque élevé. Il contient deux clapets de retenue fonctionnant indépendamment et une soupape de décharge différentielle de pression, et doit être testé annuellement.',
              },
              {
                id: 'q09-03',
                question: 'Un réducteur de pression (RDP) est requis sur une alimentation en eau lorsque la pression d\'alimentation dépasse approximativement :',
                options: [
                  '200 kPa (29 psi)',
                  '350 kPa (51 psi)',
                  '550 kPa (80 psi)',
                  '700 kPa (102 psi)',
                ],
                correctIndex: 2,
                explanation: 'Le Code national de la plomberie du Canada limite la pression de travail maximale dans un système de distribution d\'eau potable. Un réducteur de pression (RDP) est requis lorsque la pression de service dépasse environ 550 kPa (80 psi) pour protéger les appareils sanitaires et électroménagers.',
              },
            ],
          },
        ],
      },
  
      {
        id: 'part-5',
        number: 5,
        title: 'Appareils sanitaires, électroménagers et traitement de l\'eau',
        description: 'Installation et entretien des appareils sanitaires, électroménagers et équipements de traitement de l\'eau avec lesquels les résidents et occupants interagissent quotidiennement.',
        chapters: [
  
          {
            id: 'ch-10',
            number: 10,
            title: 'Appareils sanitaires, électroménagers et traitement de l\'eau',
            subtitle: 'GTA E-14 (63 % de la GTA E) et E-15 · Installe, teste et entretient les appareils sanitaires, électroménagers et systèmes de traitement d\'eau',
            isFree: false,
            estimatedMinutes: 55,
            sections: [
              {
                id: 'ch10-s1',
                title: '10.1 Appareils sanitaires et électroménagers de plomberie',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Un appareil sanitaire est un réceptacle, un électroménager, un appareil ou autre dispositif qui évacue des eaux usées ou des eaux claires et est raccordé au système de plomberie. Un électroménager de plomberie est un équipement qui peut nécessiter un raccordement au système de plomberie. Les plombiers installent les supports et étais avant les appareils pour assurer l\'intégrité structurelle.',
                  },
                  {
                    type: 'table',
                    headers: ['Appareil sanitaire / Électroménager', 'Alimentation en eau', 'Drainage requis', 'Considérations clés'],
                    rows: [
                      ['Cuvette de toilette (WC)', 'Eau froide', 'Oui', 'Volume de chasse : 4,8 L ou 6 L max par chasse (CNP)'],
                      ['Lavabo (salle de bain)', 'Eau chaude et froide', 'Oui', 'Siphon en P et bonde de vidange escamotable'],
                      ['Évier de cuisine', 'Eau chaude et froide', 'Oui', 'Raccordement au broyeur d\'aliments si applicable'],
                      ['Baignoire / douche', 'Eau chaude et froide', 'Oui', 'Vanne thermostatique ou à équilibrage de pression requise'],
                      ['Chauffe-eau', 'Alimentation eau froide, sortie eau chaude', 'Tuyau de décharge soupape', 'Soupape de sûreté thermique et de pression (SSTP) requise'],
                      ['Lave-vaisselle', 'Eau chaude', 'Oui (séparation atmosphérique ou boucle haute)', 'Séparation atmosphérique requise sur vidange dans plusieurs juridictions'],
                      ['Machine à laver', 'Eau chaude et froide', 'Tuyau d\'évacuation et siphon', 'Hauteur du tuyau d\'évacuation 600–900 mm au-dessus du siphon'],
                      ['Adoucisseur d\'eau', 'Vanne de dérivation, drain', 'Drain de saumure requis', 'Doit avoir une séparation atmosphérique sur le raccord de vidange'],
                    ],
                  },
                  {
                    type: 'paragraph',
                    text: 'L\'installation des supports d\'appareils est la première étape. L\'étai est une couche de matériau qui forme, protège et renforce le support des appareils sanitaires et équipements de plomberie. Cela est particulièrement important pour les appareils muraux (WC, urinoirs, lavabos) qui nécessitent des assemblages de support ancrés à la structure du bâtiment.',
                  },
                ],
              },
              {
                id: 'ch10-s2',
                title: '10.2 Systèmes de traitement de l\'eau',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Les systèmes de traitement de l\'eau améliorent la qualité de l\'eau en éliminant ou réduisant les contaminants. Les problèmes courants de qualité de l\'eau dans les bâtiments canadiens comprennent la dureté (calcium et magnésium), le fer, les sédiments, le goût et l\'odeur du chlore, la contamination microbiologique et le déséquilibre du pH.',
                  },
                  {
                    type: 'keyTerm',
                    term: 'Dureté de l\'eau',
                    definition: 'La concentration de calcium et de magnésium dissous dans l\'eau, exprimée en grains par gallon (gpg) ou en parties par million (ppm). L\'eau dure (supérieure à ~7 gpg) cause des dépôts calcaires dans les tuyaux et appareils et réduit la formation de mousse avec le savon. Conversion : 1 gpg = 17,12 ppm.',
                  },
                  {
                    type: 'table',
                    headers: ['Type de traitement', 'Contaminant éliminé / réduit', 'Calcul clé'],
                    rows: [
                      ['Adoucisseur d\'eau (échange d\'ions)', 'Dureté (calcium, magnésium) et certains fers', 'Grains à éliminer = personnes × L/jour × (dureté en gpg + concentration en fer) × jours de régénération'],
                      ['Filtration au charbon actif', 'Chlore, goût, odeur, certains composés organiques', 'Le débit et le temps de contact déterminent la taille du filtre'],
                      ['Filtration des sédiments', 'Solides en suspension, turbidité', 'Cote en microns et débit'],
                      ['Désinfection ultraviolette (UV)', 'Microbiologique (bactéries, virus, kystes)', 'Le débit détermine la dose UV (mJ/cm²)'],
                      ['Osmose inverse (OI)', 'Large gamme incluant nitrates, métaux lourds, TDS', 'Taux de récupération et taux de rejet'],
                      ['Neutraliseur d\'acide', 'pH bas (eau acide)', 'Volume de médias calcite requis'],
                    ],
                  },
                  {
                    type: 'paragraph',
                    text: 'Le dimensionnement d\'un adoucisseur d\'eau nécessite de calculer le total des grains de dureté à éliminer entre les cycles de régénération. Ce calcul utilise le nombre de personnes dans le foyer, les gallons d\'eau utilisés par jour, la dureté en grains par gallon (incluant un facteur fer) et le nombre de jours entre les régénérations.',
                  },
                  {
                    type: 'infoBox',
                    title: 'Formule des grains pour adoucisseur d\'eau',
                    items: [
                      'Grains à éliminer = (personnes × gallons par jour) × (dureté en gpg + concentration en fer) × jours entre régénérations',
                      'Taux d\'élimination des grains = consommation d\'eau × grains par gallon × valeur d\'efficacité de régénération',
                      'Exemple : 4 personnes × 75 gpj × (15 gpg + 1 gpg de fer) × 7 jours = 33 600 grains de capacité requis',
                    ],
                  },
                ],
              },
            ],
            practiceQuestions: [
              {
                id: 'q10-01',
                question: 'Un échantillon d\'eau indique une dureté de 180 ppm. Convertir en grains par gallon (gpg). (1 gpg = 17,12 ppm)',
                options: [
                  '3 081,6 gpg',
                  '10,5 gpg',
                  '180 gpg',
                  '0,095 gpg',
                ],
                correctIndex: 1,
                explanation: 'Pour convertir ppm en gpg : diviser par 17,12. Donc 180 ÷ 17,12 = 10,51 gpg. C\'est considéré comme de l\'eau dure et nécessite généralement un traitement avec un adoucisseur d\'eau.',
              },
              {
                id: 'q10-02',
                question: 'Quelle est la fonction d\'une soupape de sûreté thermique et de pression (SSTP) sur un chauffe-eau ?',
                options: [
                  'Limiter la température maximale de l\'eau chaude aux appareils sanitaires',
                  'Décharger automatiquement l\'eau si la température ou la pression dans le chauffe-eau dépasse les limites sécuritaires, prévenant l\'explosion',
                  'Équilibrer le débit entre les tuyaux d\'alimentation en eau chaude et froide',
                  'Empêcher le refoulement du chauffe-eau vers l\'alimentation en eau froide',
                ],
                correctIndex: 1,
                explanation: 'La soupape SSTP est un dispositif de sécurité critique qui s\'ouvre automatiquement si le chauffe-eau dépasse les limites sécuritaires de température ou de pression. Sans elle, un chauffe-eau surchauffé peut accumuler une pression considérable et exploser. Le tuyau de décharge doit s\'écouler vers un endroit sécuritaire.',
              },
              {
                id: 'q10-03',
                question: 'Une famille de 4 personnes utilise 75 gallons par jour. La dureté de l\'eau est de 12 gpg, avec 1 gpg équivalent en fer. Ils souhaitent 7 jours entre les régénérations de l\'adoucisseur. Combien de grains de capacité sont requis ?',
                options: [
                  '25 200 grains',
                  '27 300 grains',
                  '3 900 grains',
                  '4 200 grains',
                ],
                correctIndex: 1,
                explanation: 'Grains = personnes × gpj × (dureté + fer) × jours = 4 × 75 × (12 + 1) × 7 = 4 × 75 × 13 × 7 = 27 300 grains. La réponse correcte incluant le facteur fer est 27 300 grains.',
              },
            ],
          },
        ],
      },
  
      {
        id: 'part-6',
        number: 6,
        title: 'Systèmes hydroniques et systèmes spécialisés',
        description: 'Systèmes de chauffage et de refroidissement hydroniques, et systèmes spécialisés qui élargissent le champ d\'activité du plombier moderne.',
        chapters: [
  
          {
            id: 'ch-11',
            number: 11,
            title: 'Systèmes hydroniques',
            subtitle: 'GTA F-17 (58 % de la GTA F) et F-18 (42 % de la GTA F) · Installe, teste et entretient les systèmes et équipements hydroniques',
            isFree: false,
            estimatedMinutes: 65,
            sections: [
              {
                id: 'ch11-s1',
                title: '11.1 Principes fondamentaux des systèmes hydroniques',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Un système hydronique utilise l\'eau (ou des mélanges eau-glycol) comme milieu de transfert de chaleur pour distribuer l\'énergie de chauffage ou de refroidissement dans un bâtiment. Les systèmes hydroniques sont très efficaces, silencieux et offrent un excellent confort. Les plombiers installent, testent et entretiennent les systèmes hydroniques de chauffage et de refroidissement.',
                  },
                  {
                    type: 'keyTerm',
                    term: 'Point de pression invariable',
                    definition: 'L\'emplacement dans un système hydronique où le réservoir d\'expansion se raccorde à la tuyauterie du système. En ce point, la pompe de circulation n\'ajoute ni ne soustrait à la pression de remplissage statique. Le réservoir d\'expansion doit être placé près de l\'aspiration de la pompe de circulation pour une pressurisation adéquate du système.',
                  },
                  {
                    type: 'table',
                    headers: ['Conception du système de tuyauterie', 'Description', 'Avantage / Application'],
                    rows: [
                      ['Boucle série simple tube', 'Boucle de tuyau unique ; chaque unité terminale est en série', 'Simple ; moins coûteux ; la dernière unité reçoit l\'eau la plus froide'],
                      ['Deux tubes retour direct', 'Collecteurs d\'alimentation et de retour ; la première unité est la plus proche', 'Déséquilibre du débit ; vannes d\'équilibrage requises'],
                      ['Deux tubes retour inversé', 'Collecteurs d\'alimentation et de retour ; longueurs de circuits totales égales', 'Naturellement équilibré ; préféré pour les systèmes multizone'],
                      ['Trois tubes', 'Deux tuyaux d\'alimentation (chaud et froid), un retour commun', 'Chauffage et refroidissement simultanés ; gaspilleur'],
                      ['Quatre tubes', 'Alimentation et retour séparés chaud et froid', 'Capacité complète de chauffage et refroidissement simultanés'],
                      ['Primaire/secondaire', 'Pompe primaire circule à travers chaudière/refroidisseur ; pompes secondaires desservent les zones', 'Découple les demandes de zone de la source de chaleur'],
                    ],
                  },
                ],
              },
              {
                id: 'ch11-s2',
                title: '11.2 Composants des systèmes hydroniques',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Les systèmes hydroniques comprennent une source de chaleur (chaudière ou thermopompe), une tuyauterie de distribution, des unités terminales de transfert de chaleur et divers dispositifs de contrôle et de sécurité. Chaque composant doit être sélectionné, installé et testé correctement.',
                  },
                  {
                    type: 'table',
                    headers: ['Composant', 'Fonction', 'Spécification clé'],
                    rows: [
                      ['Pompe de circulation', 'Déplace l\'eau dans le système au débit requis', 'Dimensionnée pour le débit en GPM et la pression de refoulement (en pieds d\'eau)'],
                      ['Réservoir d\'expansion (à membrane)', 'Compense la dilatation thermique de l\'eau ; maintient la pression du système', 'Pression de pré-charge = 14 kPa sous la pression de remplissage ; dimensionné pour le volume du système et la plage de température'],
                      ['Dispositif de désaération (séparateur d\'air, évent automatique)', 'Élimine l\'air dissous et libre du système', 'Installé aux points les plus hauts et sur le refoulement de la pompe'],
                      ['Soupape de sécurité de pression', 'Protège le système contre la surpression — s\'ouvre et décharge à la pression de tarage', 'Requis sur tout système hydronique fermé'],
                      ['Vanne thermostatique de radiateur (VTR)', 'Contrôle le débit vers les radiateurs individuels selon la température ambiante', 'Auto-actionnée ; ne nécessite pas d\'électricité'],
                      ['Vanne d\'équilibrage', 'Ajuste le débit à chaque circuit pour atteindre les débits de conception', 'Réglée avec des outils de mesure et d\'équilibrage de débit'],
                      ['Séparateur de boues / crépine', 'Élimine la magnétite et les débris de l\'eau du système', 'Protège la pompe et les vannes ; essentiel dans les nouveaux systèmes'],
                      ['Tube de plancher radiant (PEX)', 'Distribue la chaleur à travers la dalle de plancher ou une installation par agrafes', 'L\'espacement, le débit et la température d\'alimentation déterminent la puissance'],
                    ],
                  },
                ],
              },
              {
                id: 'ch11-s3',
                title: '11.3 Calculs thermiques hydroniques',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Le dimensionnement des systèmes hydroniques nécessite de calculer la charge thermique, le débit et la différence de température. Les formules suivantes de la fiche de référence officielle des formules du plombier sont essentielles pour l\'examen Sceau rouge.',
                  },
                  {
                    type: 'table',
                    headers: ['Formule', 'Variables', 'Utilisation'],
                    rows: [
                      ['ΔT = Btuh ÷ (500 × gpm)', 'Btuh = puissance thermique ; gpm = débit ; ΔT = différence de température', 'Trouver la chute de température à travers une unité terminale ou une zone'],
                      ['gpm = Btuh ÷ (500 × ΔT)', 'Btuh = chaleur requise ; ΔT = différence de température alimentation/retour', 'Trouver le débit requis pour une zone ou un système'],
                      ['Btuh = gpm × 500 × ΔT', 'gpm = débit ; ΔT = différence de température', 'Trouver la puissance thermique d\'un système ou d\'une zone'],
                      ['1 pi² EDR = 240 Btuh', 'EDR = Équivalent de Rayonnement Direct (cote des radiateurs vapeur/eau chaude)', 'Convertir l\'EDR d\'un radiateur en puissance Btuh'],
                    ],
                  },
                  {
                    type: 'paragraph',
                    text: 'La constante 500 dans les formules hydroniques est dérivée de : 60 min/h × 8,33 lb/gal × 1 BTU/lb°F = 499,8 ≈ 500. Cette constante s\'applique à l\'eau. Lorsque du glycol est ajouté au système (pour la protection antigel), la capacité thermique massique diminue et la constante doit être ajustée.',
                  },
                  {
                    type: 'infoBox',
                    title: 'Exemple : Calcul d\'un système hydronique',
                    items: [
                      'Données : Une zone nécessite 24 000 Btuh avec une différence de température alimentation-retour de 20 °F',
                      'Trouver le débit requis : gpm = Btuh ÷ (500 × ΔT) = 24 000 ÷ (500 × 20) = 24 000 ÷ 10 000 = 2,4 gpm',
                      'Vérification : Btuh = gpm × 500 × ΔT = 2,4 × 500 × 20 = 24 000 Btuh ✓',
                    ],
                  },
                ],
              },
            ],
            practiceQuestions: [
              {
                id: 'q11-01',
                question: 'Une zone hydronique nécessite 30 000 Btuh. La température d\'alimentation est de 180 °F et le retour est de 160 °F. Quel est le débit requis en GPM ?',
                options: [
                  '1,5 gpm',
                  '3,0 gpm',
                  '6,0 gpm',
                  '15,0 gpm',
                ],
                correctIndex: 1,
                explanation: 'ΔT = 180 °F − 160 °F = 20 °F. gpm = Btuh ÷ (500 × ΔT) = 30 000 ÷ (500 × 20) = 30 000 ÷ 10 000 = 3,0 gpm.',
              },
              {
                id: 'q11-02',
                question: 'Quelle est la puissance thermique en Btuh d\'un système hydronique si le débit est de 5 gpm et la différence de température est de 15 °F ?',
                options: [
                  '37 500 Btuh',
                  '3 750 Btuh',
                  '75 000 Btuh',
                  '1 500 Btuh',
                ],
                correctIndex: 0,
                explanation: 'Btuh = gpm × 500 × ΔT = 5 × 500 × 15 = 37 500 Btuh.',
              },
              {
                id: 'q11-03',
                question: 'Dans un système hydronique, où le réservoir d\'expansion doit-il être raccordé par rapport à la pompe de circulation ?',
                options: [
                  'Du côté refoulement de la pompe de circulation',
                  'Le plus loin possible de la pompe de circulation pour maximiser la distribution de pression',
                  'Au point de pression invariable — près de l\'aspiration (côté aspiration) de la pompe de circulation',
                  'Uniquement au point le plus haut du système',
                ],
                correctIndex: 2,
                explanation: 'Le réservoir d\'expansion doit être raccordé au « point de pression invariable », qui est près de l\'aspiration de la pompe de circulation. Cela garantit que la pompe pressurise le système plutôt que de pousser l\'eau contre le réservoir d\'expansion, et maintient une pression adéquate dans tout le système.',
              },
              {
                id: 'q11-04',
                question: 'Combien de Btuh produit un radiateur d\'une cote de 10 pi² EDR ?',
                options: [
                  '1 200 Btuh',
                  '2 400 Btuh',
                  '4 800 Btuh',
                  '24 000 Btuh',
                ],
                correctIndex: 1,
                explanation: 'La constante de la fiche de référence des formules du plombier est : 1 pi² EDR = 240 Btuh. Donc : 10 pi² × 240 Btuh/pi² = 2 400 Btuh.',
              },
            ],
          },
  
          {
            id: 'ch-12',
            number: 12,
            title: 'Systèmes de plomberie spécialisés',
            subtitle: 'GTA G-19, G-20 et G-21 · Installe, teste et entretient les systèmes spécialisés (8 % de l\'examen Sceau rouge)',
            isFree: false,
            estimatedMinutes: 50,
            sections: [
              {
                id: 'ch12-s1',
                title: '12.1 Vue d\'ensemble des systèmes spécialisés',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Les systèmes de plomberie spécialisés élargissent le champ d\'activité du plombier au-delà des systèmes standard d\'eau, DEV et de chauffage. Ces systèmes nécessitent des connaissances supplémentaires, une formation et, dans certains cas, des certifications spécifiques de l\'AHJ.',
                  },
                  {
                    type: 'table',
                    headers: ['Système spécialisé', 'Caractéristiques et dangers clés'],
                    rows: [
                      ['Gaz médicaux (oxygène, azote, protoxyde d\'azote, vide)', 'Exigences de code strictes ; raccords DISS (système d\'index par diamètre) préviennent les mauvaises connexions de gaz ; certification requise'],
                      ['Tuyauterie de procédé (industrielle)', 'Grande variété de fluides (acides, bases, solvants) ; compatibilité des matériaux critique ; dangers chimiques'],
                      ['Air comprimé', 'Risques de pression ; élimination de l\'humidité (sécheurs, filtres) essentielle ; tuyauterie doit être cote pour la pression'],
                      ['Gaz naturel / propane', 'Risques d\'explosion et d\'incendie ; essai de pression critique ; exigences TSSA en Ontario'],
                      ['Protection incendie résidentielle (gicleurs eau potable)', 'Raccordé à l\'eau potable ; prévention du refoulement requise ; calcul hydraulique pour la couverture'],
                      ['Énergie solaire thermique', 'Fluide haute température (glycol), considérations de pression, étanchéisation des pénétrations de toit'],
                      ['Récupération de chaleur sur drain (RCD)', 'Récupère la chaleur de l\'eau de drain chaude pour préchauffer l\'alimentation en eau froide'],
                      ['Réutilisation d\'eau non potable (eaux grises, récupération des eaux de pluie)', 'Doit être clairement identifié ; contrôle des interconnexions critique ; convention tuyau violet'],
                      ['Atténuation du radon', 'Tuyauterie de dépressurisation sous-dalle ; tuyau PVC de la dalle vers un ventilateur extérieur'],
                      ['Boucles de thermopompe géothermique', 'Boucles de tuyauterie enterrées remplies d\'eau-glycol ; équilibrage de pression et de débit requis'],
                    ],
                  },
                ],
              },
              {
                id: 'ch12-s2',
                title: '12.2 Systèmes de gaz médicaux',
                content: [
                  {
                    type: 'paragraph',
                    text: 'Les systèmes de gaz médicaux se trouvent dans les hôpitaux, les cabinets dentaires et les cliniques médicales. Ils distribuent des gaz médicaux canalisés — oxygène (O₂), protoxyde d\'azote (N₂O), azote (N₂), dioxyde de carbone (CO₂) et air médical — ainsi que le vide médical et la WAGD (élimination des gaz anesthésiques résiduels). Les erreurs dans l\'installation des gaz médicaux peuvent être fatales.',
                  },
                  {
                    type: 'keyTerm',
                    term: 'DISS (Système d\'index par diamètre)',
                    definition: 'Un système d\'index utilisé pour les gaz médicaux qui définit les propriétés des points d\'accès (diamètre et configuration), permettant UNIQUEMENT à des dispositifs de connexion spécifiques de se raccorder au point d\'accès de gaz correspondant. Cela prévient les interconnexions entre différents gaz médicaux.',
                  },
                  {
                    type: 'infoBox',
                    title: 'Exigences pour les gaz médicaux',
                    items: [
                      'Le tube en cuivre (type K ou L) est le matériau standard pour la plupart des tuyauteries de gaz médicaux',
                      'Tous les joints doivent être brasés à l\'argent (pas de brasage tendre) avec une baguette BAg et purge à l\'azote',
                      'Aucun flux n\'est permis dans le brasage de gaz médicaux — la purge prévient l\'oxydation',
                      'Chaque gaz a une sortie DISS unique pour empêcher le raccordement d\'un mauvais équipement',
                      'Les installateurs doivent détenir une certification valide d\'installateur de gaz médicaux (exigée par la norme CSA Z7396.1)',
                      'Les systèmes doivent être testés et certifiés par un vérificateur qualifié avant la mise en service',
                    ],
                  },
                ],
              },
            ],
            practiceQuestions: [
              {
                id: 'q12-01',
                question: 'Quel est le but du DISS (Système d\'index par diamètre) utilisé dans les tuyauteries de gaz médicaux ?',
                options: [
                  'Standardiser le diamètre de tuyau utilisé pour tous les gaz médicaux',
                  'Prévenir les interconnexions entre différents gaz médicaux en s\'assurant que seul le raccord correct peut se connecter à chaque sortie de gaz',
                  'Mesurer le débit de gaz médicaux dans le système de distribution',
                  'Permettre une déconnexion rapide des équipements médicaux en cas d\'urgence',
                ],
                correctIndex: 1,
                explanation: 'Le DISS utilise des dimensions de raccords uniques pour chaque gaz médical. Cela rend physiquement impossible de raccorder un équipement destiné à un gaz (p. ex. oxygène) à une sortie d\'un gaz différent (p. ex. protoxyde d\'azote), prévenant des erreurs potentiellement fatales.',
              },
              {
                id: 'q12-02',
                question: 'Pourquoi le flux N\'EST-IL PAS permis lors du brasage fort de tuyauteries de gaz médicaux ?',
                options: [
                  'Le flux est trop coûteux pour les applications de gaz médicaux',
                  'Le flux crée un résidu à l\'intérieur du tuyau qui ne peut pas être éliminé et contaminerait l\'alimentation en gaz, pouvant nuire aux patients',
                  'Le flux affaiblit le tube en cuivre à hautes températures',
                  'Le flux n\'est requis que pour le brasage tendre, pas le brasage fort',
                ],
                correctIndex: 1,
                explanation: 'Les résidus de flux à l\'intérieur des tuyauteries de gaz médicaux ne peuvent pas être éliminés de manière fiable et contamineraient le gaz. Pour cette raison, une purge à l\'azote est utilisée pendant le brasage fort pour prévenir l\'oxydation interne — éliminant ainsi complètement le besoin de flux. Des joints propres, sans oxyde, sont réalisés sans flux.',
              },
            ],
          },
        ],
      },
  
      {
        id: 'part-7',
        number: 7,
        title: 'Préparation à l\'examen et référence des formules',
        description: 'Référence complète des formules, termes clés, questions d\'examen blanc et stratégie pour l\'examen Sceau rouge.',
        chapters: [
  
          {
            id: 'ch-13',
            number: 13,
            title: 'Fiche de référence des formules du plombier',
            subtitle: 'Référence complète basée sur le document officiel des formules du plombier de l\'Ontario',
            isFree: false,
            estimatedMinutes: 40,
            sections: [
              {
                id: 'ch13-s1',
                title: '13.1 Abréviations des unités de mesure',
                content: [
                  {
                    type: 'table',
                    headers: ['Abréviation', 'Unité'],
                    rows: [
                      ['°C', 'Degré Celsius'],
                      ['°F', 'Degré Fahrenheit'],
                      ['ΔT', 'Différence de température'],
                      ['BTU', 'Unité thermique britannique'],
                      ['Btuh', 'Unités thermiques britanniques par heure'],
                      ['pi', 'Pied'],
                      ['gpg', 'Grains par gallon'],
                      ['gpm', 'Gallons par minute'],
                      ['po', 'Pouce'],
                      ['kg', 'Kilogramme'],
                      ['kN', 'Kilonewton'],
                      ['kPa', 'Kilopascal'],
                      ['L', 'Litre'],
                      ['lb', 'Livre'],
                      ['lbf', 'Livre-force'],
                      ['m', 'Mètre'],
                      ['mm', 'Millimètre'],
                      ['ppm', 'Parties par million'],
                      ['psi', 'Livres par pouce carré'],
                      ['s', 'Seconde'],
                      ['gal. É.-U.', 'Gallon américain'],
                    ],
                  },
                ],
              },
              {
                id: 'ch13-s2',
                title: '13.2 Constantes',
                content: [
                  {
                    type: 'table',
                    headers: ['Constante', 'Valeur'],
                    rows: [
                      ['π (pi)', '3,1416'],
                      ['1 pi² d\'Équivalent de Rayonnement Direct (EDR)', '240 Btuh'],
                      ['1 gallon américain', '8,33 lb'],
                      ['12 000 BTU de refroidissement', '1 tonne'],
                      ['Unité de conversion de hauteur de pression', '0,433 psi/pi'],
                      ['Parcours de déviation d\'un coude à 45°', '1,414'],
                    ],
                  },
                ],
              },
              {
                id: 'ch13-s3',
                title: '13.3 Coefficients de dilatation linéaire',
                content: [
                  {
                    type: 'table',
                    headers: ['Matériau', 'Par 1 °F', 'Par 1 °C'],
                    rows: [
                      ['ABS', '0,0000550', '0,0000990'],
                      ['Laiton', '0,0000105', '0,0000189'],
                      ['Fonte', '0,0000059', '0,0000108'],
                      ['Cuivre', '0,0000095', '0,0000171'],
                      ['PVC', '0,0000330', '0,0000594'],
                      ['Acier', '0,0000067', '0,0000120'],
                    ],
                  },
                ],
              },
              {
                id: 'ch13-s4',
                title: '13.4 Facteurs de conversion',
                content: [
                  {
                    type: 'table',
                    headers: ['Convertir', 'En', 'Multiplier par'],
                    rows: [
                      ['°C', '°F', '1,8 et ajouter 32'],
                      ['gpg', 'ppm', '17,12'],
                      ['kg', 'lb', '2,205'],
                      ['kg/m³', 'lb/pi³', '0,06243'],
                      ['kN', 'lb', '224,81'],
                      ['kN/m', 'lbf/pi', '68,52'],
                      ['kN/m³', 'lbf/pi³', '6,360'],
                      ['kPa', 'lbf/pi²', '20,88'],
                      ['kPa', 'lbf/po² (psi)', '0,1450'],
                      ['L', 'gal. imp.', '0,2200'],
                      ['L/s', 'gpm', '13,20'],
                      ['m', 'pi', '3,281'],
                      ['m²', 'pi²', '10,76'],
                      ['mm', 'po', '0,03937'],
                      ['m/s²', 'pi/s²', '3 281'],
                    ],
                  },
                ],
              },
              {
                id: 'ch13-s5',
                title: '13.5 Formules générales',
                content: [
                  {
                    type: 'table',
                    headers: ['Description', 'Formule'],
                    rows: [
                      ['Loi de Boyle (volume/pression des gaz)', 'V₁/V₂ = P₂/P₁'],
                      ['Loi de Charles (volume/température des gaz)', 'V₁/T₁ = V₂/T₂'],
                      ['Dilatation (thermique)', 'L × ΔT × α (longueur × différence de temp. × coefficient)'],
                      ['Force', 'P × A (pression × aire)'],
                      ['gpm (à partir de BTU et ΔT)', 'BTU ÷ (lb/gal × ΔT)'],
                      ['gpm (à partir de Btuh)', 'Btuh ÷ (500 × ΔT de l\'eau)'],
                      ['Btuh (hydronique)', 'gpm × 500 × ΔT'],
                      ['ΔT (hydronique)', 'Btuh ÷ (500 × gpm)'],
                      ['Pente (inclinaison du tuyau)', 'Chute ou montée ÷ Longueur'],
                      ['Grains (capacité de l\'adoucisseur)', '(personnes × gpj) × (dureté en gpg + fer) × jours de régénération'],
                      ['Taux d\'élimination des grains', 'Consommation d\'eau × grains par gallon × valeur de régénération'],
                      ['Litres (collecte des eaux de pluie)', 'Superficie × intensité de précipitations'],
                      ['Loi de Watt', 'P = V × I (puissance = tension × courant)'],
                      ['Pression', 'H × densité (hauteur × densité)'],
                      ['Conversion de hauteur de pression', '0,433 psi par pied de hauteur d\'eau'],
                      ['Parcours de déviation à 45°', 'Déviation × 1,414'],
                    ],
                  },
                ],
              },
              {
                id: 'ch13-s6',
                title: '13.6 Formules d\'aire, de volume et de géométrie',
                content: [
                  {
                    type: 'table',
                    headers: ['Forme', 'Mesure', 'Formule'],
                    rows: [
                      ['Cercle', 'Aire', 'π × r²'],
                      ['Cercle', 'Circonférence', 'π × D'],
                      ['Cylindre (ouvert en haut)', 'Aire latérale', 'πr² + πDH'],
                      ['Cylindre (fermé)', 'Aire totale', '2πr² + πDH'],
                      ['Cylindre', 'Volume', 'πr²H'],
                      ['Rectangle', 'Aire', 'L × l'],
                      ['Rectangle', 'Périmètre', '2(L + l)'],
                      ['Boîte rectangulaire (ouverte en haut)', 'Aire', '(L × l) + 2(l × H) + 2(L × H)'],
                      ['Boîte rectangulaire (fermée)', 'Aire totale', '2(L × l) + 2(l × H) + 2(L × H)'],
                      ['Boîte rectangulaire', 'Volume', 'L × l × H'],
                      ['Sphère', 'Aire totale', '4πr²'],
                      ['Sphère', 'Volume', '4πr³/3'],
                      ['Triangle', 'Aire', '(B × H) ÷ 2'],
                      ['Triangle', 'Périmètre', 'a + b + c'],
                    ],
                  },
                ],
              },
            ],
            practiceQuestions: [
              {
                id: 'q13-01',
                question: 'Convertir 25 °C en Fahrenheit en utilisant la formule officielle.',
                options: [
                  '57 °F',
                  '77 °F',
                  '45 °F',
                  '95 °F',
                ],
                correctIndex: 1,
                explanation: '°F = (°C × 1,8) + 32 = (25 × 1,8) + 32 = 45 + 32 = 77 °F.',
              },
              {
                id: 'q13-02',
                question: 'Quelle pression une colonne d\'eau de 23,1 pieds exerce-t-elle en psi ? (Utiliser : 0,433 psi/pi)',
                options: [
                  '10,0 psi',
                  '100 psi',
                  '53,4 psi',
                  '0,43 psi',
                ],
                correctIndex: 0,
                explanation: 'Pression = hauteur × 0,433 psi/pi = 23,1 pi × 0,433 = 10,0 psi. Note : 2,31 pieds d\'eau = 1 psi (l\'inverse de cette constante).',
              },
              {
                id: 'q13-03',
                question: 'Un tuyau circulaire a un rayon intérieur de 75 mm. Quelle est sa section transversale en mm² ? (π = 3,1416)',
                options: [
                  '17 671 mm²',
                  '471 mm²',
                  '235 mm²',
                  '70 686 mm²',
                ],
                correctIndex: 0,
                explanation: 'Aire = π × r² = 3,1416 × 75² = 3,1416 × 5 625 = 17 671 mm².',
              },
              {
                id: 'q13-04',
                question: 'Convertir 15 L/s en GPM. (Utiliser : 1 L/s = 13,20 gpm)',
                options: [
                  '1,14 gpm',
                  '15 gpm',
                  '198 gpm',
                  '880 gpm',
                ],
                correctIndex: 2,
                explanation: '15 L/s × 13,20 = 198 gpm. Cette conversion est utile lorsqu\'on travaille avec des spécifications mélangeant les débits métriques avec les données impériales d\'appareils et de tuyaux.',
              },
            ],
          },
  
          {
            id: 'ch-14',
            number: 14,
            title: 'Termes clés et glossaire',
            subtitle: 'Terminologie essentielle de la plomberie tirée de la Norme de qualification du Sceau rouge',
            isFree: false,
            estimatedMinutes: 30,
            sections: [
              {
                id: 'ch14-s1',
                title: '14.1 Termes fondamentaux de la plomberie',
                content: [
                  {
                    type: 'table',
                    headers: ['Terme', 'Définition'],
                    rows: [
                      ['Électroménager', 'Un équipement qui peut nécessiter un raccordement à un système de plomberie'],
                      ['Refoulement', 'Inversion du sens normal d\'écoulement'],
                      ['Préventeur de refoulement', 'Dispositif utilisé pour prévenir le refoulement dû à une contre-pression ou un contre-siphonage'],
                      ['Étai', 'Une couche de matériau qui forme, protège et renforce les supports des appareils sanitaires de plomberie'],
                      ['Clapet anti-refoulement', 'Un clapet de non-retour conçu pour les systèmes de drainage gravitaire, permettant l\'écoulement dans un seul sens'],
                      ['Repère de nivellement', 'Une élévation prédéterminée utilisée comme point de référence'],
                      ['Clapet de non-retour', 'Une vanne qui permet l\'écoulement dans un seul sens'],
                      ['Regard de nettoyage', 'Point d\'accès dans les systèmes de drainage et de ventilation pour le nettoyage et l\'inspection'],
                      ['Interconnexion', 'Un raccordement entre une source d\'eau potable et une source d\'eau non potable'],
                      ['Longueur développée', 'La longueur du tuyau mesurée le long de son axe central'],
                      ['Protection diélectrique', 'Méthode d\'isolation des métaux dissemblables pour prévenir l\'électrolyse et la corrosion galvanique'],
                      ['Système de drainage', 'Ensemble de tuyaux, raccords, appareils sanitaires, siphons et accessoires qui acheminent les eaux usées'],
                      ['Composants encastrés', 'Composants d\'un système de plomberie enrobés dans du béton ou d\'autres matériaux'],
                      ['Réservoir d\'expansion', 'Dispositif utilisé pour absorber la dilatation de l\'eau dans un système fermé'],
                      ['Coupe-feu', 'Assemblage de construction faisant barrière contre la propagation du feu et de la fumée'],
                      ['Appareil sanitaire', 'Un réceptacle ou dispositif qui évacue des eaux usées ou des eaux claires'],
                      ['Unité de débit — drainage', 'Unité de mesure exprimant la charge hydraulique d\'un appareil sur le système de drainage'],
                      ['Unité de débit — alimentation en eau', 'Unité de mesure exprimant la charge hydraulique d\'un appareil sur le système de distribution d\'eau'],
                      ['Solin', 'Composant utilisé pour sceller autour des pénétrations de tuyaux extérieurs pour prévenir l\'infiltration d\'eau'],
                      ['Regard de visite', 'Ouverture vers un espace clos permettant l\'accès aux conduites souterraines pour l\'inspection et l\'entretien'],
                      ['Décalage', 'Tuyauterie qui raccorde les extrémités de deux tuyaux parallèles ou perpendiculaires'],
                      ['Adaptateur de puits sans fosse', 'Un raccord permettant le raccordement et le retrait d\'une pompe d\'un tubage de puits sans outils'],
                      ['Potable', 'Propre à la consommation humaine'],
                      ['Purge', 'Passer un gaz inerte à l\'intérieur d\'un tuyau pour déplacer l\'oxygène et prévenir l\'oxydation pendant le brasage'],
                      ['Préinstallation', 'Pose de tuyaux permettant la future installation d\'appareils sanitaires et d\'équipements'],
                      ['Égout sanitaire', 'Un égout qui achemine les eaux usées'],
                      ['Eaux usées', 'Tout déchet liquide autre que les eaux claires ou les eaux pluviales'],
                      ['Manchon', 'Composant utilisé pour créer une pénétration à travers murs, planchers et plafonds avant l\'installation des tuyaux'],
                      ['Sondage', 'Méthode de détection des fissures dans les tuyaux et raccords en fonte par percussion au marteau'],
                      ['Égout pluvial', 'Un égout qui achemine les eaux pluviales'],
                      ['Joint oscillant', 'Agencement de tuyauterie permettant le mouvement sans contraindre la tuyauterie'],
                      ['Bloc de butée', 'Bloc de béton coulé utilisé pour empêcher le mouvement d\'un raccord à un changement de direction dans les tuyaux enterrés'],
                      ['Amortisseur de couple', 'Dispositif installé sur un tuyau dans un tubage de puits pour empêcher le tuyau de tourner'],
                      ['Siphon', 'Un raccord conçu pour retenir un joint liquide empêchant le passage des gaz sans affecter l\'écoulement des liquides'],
                      ['Tube', 'Mesuré par le diamètre intérieur'],
                      ['Tuyau', 'Mesuré par le diamètre extérieur (DE) et l\'épaisseur de paroi'],
                      ['Tuyauterie de ventilation', 'Tuyau faisant partie d\'un système de ventilation'],
                      ['Système de ventilation', 'Ensemble de tuyaux raccordant le système de drainage à l\'air extérieur pour la circulation d\'air et la protection des joints de siphons'],
                      ['Système de distribution d\'eau', 'Ensemble de tuyaux, raccords, vannes et accessoires acheminant l\'eau depuis le tuyau de service aux sorties, appareils sanitaires et électroménagers'],
                      ['Tuyau d\'alimentation en eau', 'Tuyau acheminant l\'eau depuis la conduite principale ou une source privée jusqu\'à l\'intérieur d\'un bâtiment, y compris la vanne d\'isolement principale'],
                    ],
                  },
                ],
              },
            ],
            practiceQuestions: [
              {
                id: 'q14-01',
                question: 'Quelle est la différence entre « tube » et « tuyau » dans le métier de plombier ?',
                options: [
                  'Il n\'y a pas de différence — les termes sont interchangeables',
                  'Le tube est mesuré par son diamètre intérieur (DI) ; le tuyau est mesuré par son diamètre extérieur (DE) et son épaisseur de paroi',
                  'Le tube est en plastique ; le tuyau est en métal',
                  'Le tube est pour les DEV ; le tuyau est pour la distribution d\'eau',
                ],
                correctIndex: 1,
                explanation: 'Cette distinction est importante pour la commande et la sélection des raccords. Le tube en cuivre (types K, L, M) est dimensionné par le diamètre intérieur nominal. Le tuyau en cuivre (ACR) est dimensionné par le diamètre extérieur réel. La confusion entre les deux peut entraîner des incompatibilités de raccords.',
              },
              {
                id: 'q14-02',
                question: 'Qu\'est-ce que la « protection diélectrique » dans le contexte de l\'installation de tuyaux ?',
                options: [
                  'Protection des tuyaux contre les risques électriques haute tension',
                  'Isolation des métaux dissemblables pour prévenir l\'électrolyse (transfert d\'ions) et la corrosion galvanique',
                  'Un type d\'isolation de tuyau pour prévenir la condensation',
                  'Le processus de test des joints de tuyaux avec du courant électrique',
                ],
                correctIndex: 1,
                explanation: 'La protection diélectrique prévient la corrosion galvanique qui se produit lorsque des métaux dissemblables (p. ex. cuivre et acier) sont en contact direct en présence d\'un électrolyte (eau). Les unions, raccords et garnitures diélectriques créent une barrière électrique entre les métaux.',
              },
            ],
          },
  
          {
            id: 'ch-15',
            number: 15,
            title: 'Examen blanc Sceau rouge et stratégie d\'examen',
            subtitle: 'Questions pratiques couvrant les 7 Grandes tâches de l\'apprentissage, avec conseils pour réussir l\'examen',
            isFree: false,
            estimatedMinutes: 90,
            isMockExam: true,
            sections: [
              {
                id: 'ch15-s1',
                title: '15.1 Aperçu de l\'examen Sceau rouge',
                content: [
                  {
                    type: 'paragraph',
                    text: 'L\'Examen interprovincial Sceau rouge du plombier comprend 125 questions à choix multiples. L\'examen est basé sur la Norme de qualification du Sceau rouge (NQSR) et évalue les connaissances dans les sept Grandes tâches de l\'apprentissage (GTA). La durée allouée est généralement de 3 heures.',
                  },
                  {
                    type: 'table',
                    headers: ['GTA', 'Sujet', 'Pondération à l\'examen', 'Questions approx. (sur 125)'],
                    rows: [
                      ['A', 'Exécute des tâches communes à l\'occupation', '11 %', '14'],
                      ['B', 'Prépare et assemble les tubes, tuyaux et conduits', '10 %', '13'],
                      ['C', 'Installe, teste et entretient les systèmes DEV', '26 %', '33'],
                      ['D', 'Installe, teste et entretient l\'alimentation et la distribution d\'eau', '19 %', '24'],
                      ['E', 'Installe, teste et entretient les appareils sanitaires, électroménagers et le traitement d\'eau', '13 %', '16'],
                      ['F', 'Installe, teste et entretient les systèmes vapeur basse pression et hydroniques', '13 %', '16'],
                      ['G', 'Installe, teste et entretient les systèmes spécialisés', '8 %', '10'],
                    ],
                  },
                  {
                    type: 'infoBox',
                    title: 'Stratégie pour l\'examen Sceau rouge',
                    items: [
                      'Consacrer le temps d\'étude proportionnellement — la GTA C (DEV, 26 %) et la GTA D (Eau, 19 %) représentent ensemble près de la moitié de l\'examen',
                      'Lire chaque question entièrement avant de regarder les options — les erreurs de lecture sont la source d\'erreurs la plus fréquente',
                      'Éliminer d\'abord les réponses manifestement incorrectes — réduit souvent les choix à 2',
                      'Pour les questions de calcul, vérifier que votre réponse est physiquement cohérente avant de la choisir',
                      'Pour les questions de code, réfléchir à « qu\'est-ce que le code cherche à protéger ? » — cela mène souvent à la bonne réponse',
                      'Ne laisser aucune question sans réponse — il n\'y a pas de pénalité pour les mauvaises réponses ; éliminer les options et faire votre meilleur choix',
                      'Réviser vos réponses si le temps le permet ; ne changer une réponse que si vous avez une raison claire de le faire',
                      'Apporter la fiche de référence officielle des formules du plombier à l\'examen (confirmer avec votre autorité provinciale quelles références sont permises)',
                    ],
                  },
                ],
              },
            ],
            practiceQuestions: [
              {
                id: 'q15-01',
                question: 'Quelle GTA représente la PLUS GRANDE portion de l\'examen Sceau rouge du plombier ?',
                options: [
                  'GTA A — Tâches communes à l\'occupation (11 %)',
                  'GTA C — Systèmes DEV (26 %)',
                  'GTA D — Alimentation et distribution d\'eau (19 %)',
                  'GTA F — Systèmes hydroniques (13 %)',
                ],
                correctIndex: 1,
                explanation: 'La GTA C (Systèmes DEV) est pondérée à 26 % de l\'examen de 125 questions — environ 33 questions. Les DEV représentent la plus grande section unique et méritent le plus de temps d\'étude concentré.',
              },
              {
                id: 'q15-02',
                question: 'Un plombier doit convertir un débit de 3 L/s en GPM. En utilisant le facteur de conversion 1 L/s = 13,20 gpm, quel est le résultat ?',
                options: [
                  '0,23 gpm',
                  '3,96 gpm',
                  '39,6 gpm',
                  '396 gpm',
                ],
                correctIndex: 2,
                explanation: '3 L/s × 13,20 gpm par L/s = 39,6 gpm.',
              },
              {
                id: 'q15-03',
                question: 'Quel type de ventilation est requis lorsque les conditions empêchent l\'installation d\'une ventilation conventionnelle à travers le toit ?',
                options: [
                  'Vanne d\'admission d\'air (VAA) — un évent mécanique qui s\'ouvre pour admettre de l\'air mais empêche l\'échappement des gaz d\'égout',
                  'Le tuyau de drainage doit être éliminé de la conception',
                  'Un tuyau de drainage plus grand peut être substitué',
                  'Aucune ventilation n\'est requise si le drain fait moins de 50 mm',
                ],
                correctIndex: 0,
                explanation: 'Une vanne d\'admission d\'air (VAA) — aussi appelée évent automatique — s\'ouvre sous pression négative pour admettre de l\'air dans le système de drainage et se ferme sous pression positive pour prévenir l\'échappement des gaz. Permise par le code dans des applications spécifiques où la ventilation conventionnelle est impraticable.',
              },
              {
                id: 'q15-04',
                question: 'Quelle est la formule pour calculer la force sur un raccord ou une vanne de tuyauterie ?',
                options: [
                  'F = Masse × Accélération',
                  'F = P × A (pression × aire)',
                  'F = H × densité',
                  'F = L × ΔT × α',
                ],
                correctIndex: 1,
                explanation: 'Force = Pression × Aire (P × A). Cela est utilisé pour calculer les forces de poussée sur les raccords, vannes et bouchons d\'extrémité dans les systèmes de tuyauterie sous pression. Les blocs de butée sont conçus pour résister à ces forces dans les tuyauteries enterrées.',
              },
              {
                id: 'q15-05',
                question: 'Un plombier installe un système privé de traitement des eaux usées. Quelle est la fonction de la fosse septique ?',
                options: [
                  'Pomper les eaux usées vers le champ d\'absorption',
                  'Assurer le traitement final et la désinfection des eaux usées avant l\'élimination',
                  'Assurer la digestion anaérobie des solides et séparer les solides de l\'effluent liquide pour distribution au champ d\'absorption',
                  'Stocker les eaux usées pour collecte périodique par camion de vidange',
                ],
                correctIndex: 2,
                explanation: 'La fosse septique assure le traitement primaire par digestion anaérobie (sans oxygène). Les solides se déposent au fond sous forme de boues, une couche d\'écume flotte en surface, et l\'effluent liquide clarifié au milieu s\'écoule vers la boîte de distribution et le champ d\'absorption.',
              },
              {
                id: 'q15-06',
                question: 'La loi de Boyle stipule V₁/V₂ = P₂/P₁. Si un gaz occupe 4 L à 200 kPa, quel volume occupera-t-il à 400 kPa ? (Supposer température constante.)',
                options: [
                  '8 L',
                  '2 L',
                  '1 L',
                  '0,5 L',
                ],
                correctIndex: 1,
                explanation: 'V₁/V₂ = P₂/P₁ → 4/V₂ = 400/200 → 4/V₂ = 2 → V₂ = 4/2 = 2 L. Lorsque la pression double, le volume est divisé par deux (à température constante). C\'est fondamental pour comprendre les systèmes de gaz comprimé et les essais de pression.',
              },
              {
                id: 'q15-07',
                question: 'Quel est le volume de chasse maximal autorisé pour une cuvette de toilette selon le Code national de la plomberie du Canada ?',
                options: [
                  '6 litres',
                  '13 litres',
                  '19 litres',
                  '1,6 gallon',
                ],
                correctIndex: 0,
                explanation: 'Le Code national de la plomberie du Canada limite les volumes de chasse à un maximum de 6 litres par chasse pour les cuvettes de toilette. Les toilettes à haute efficacité (THE) utilisent 4,8 litres ou moins. Cette limite a été réduite par rapport aux limites antérieures de 13 L et 19 L pour conserver l\'eau.',
              },
              {
                id: 'q15-08',
                question: 'Une zone d\'un système hydronique a un débit de 4 gpm et une différence de température de 25 °F. Quelle est la puissance thermique en Btuh ?',
                options: [
                  '12 500 Btuh',
                  '50 000 Btuh',
                  '8 000 Btuh',
                  '2 000 Btuh',
                ],
                correctIndex: 1,
                explanation: 'Btuh = gpm × 500 × ΔT = 4 × 500 × 25 = 50 000 Btuh.',
              },
              {
                id: 'q15-09',
                question: 'Le Code national de la plomberie (CNP) exige que chaque appareil sanitaire soit équipé d\'un siphon individuel. Quel est le but du siphon ?',
                options: [
                  'Prévenir le gel des tuyaux de drainage dans les climats froids',
                  'Retenir un joint liquide qui empêche le passage des gaz d\'égout dans le bâtiment',
                  'Réduire la pression d\'eau à la sortie de l\'appareil sanitaire',
                  'Prévenir le refoulement d\'eau chaude du chauffe-eau',
                ],
                correctIndex: 1,
                explanation: 'Un siphon retient un joint liquide (eau) dans une section courbe du tuyau. Ce joint empêche les gaz d\'égout toxiques et odorants d\'entrer dans le bâtiment tout en permettant aux déchets liquides de s\'écouler par gravité.',
              },
              {
                id: 'q15-10',
                question: 'Calculer la dilatation thermique d\'un tuyau en cuivre de 15 mètres si la température augmente de 10 °C à 60 °C. (Coefficient pour le cuivre : 0,0000171 par 1 °C)',
                options: [
                  '2,6 mm',
                  '12,8 mm',
                  '1,28 mm',
                  '25,6 mm',
                ],
                correctIndex: 1,
                explanation: 'ΔT = 60 °C − 10 °C = 50 °C. Dilatation = L × ΔT × α = 15 000 mm × 50 °C × 0,0000171 = 12,825 mm ≈ 12,8 mm. Cette dilatation doit être compensée avec des ancrages, des guides et des boucles ou dispositifs de dilatation.',
              },
            ],
          },
        ],
      },
    ],
  };

  // Export normalisé pour l'app (même forme que plumberCourseData EN)
  const _parts = plumberCourseFR.parts;
  const _allChapters = _parts.flatMap((p) => p.chapters);
  const _totalChapters = _allChapters.length;
  const _totalQuestions = _allChapters.reduce((sum, ch) => sum + (ch.practiceQuestions?.length || 0), 0);

  const plumberCourseDataFR = {
    id: 'plumber-306a',
    slug: 'plumber-306a',
    title: 'Plombier (Sceau rouge 306A) — Préparation à l\'examen',
    subtitle: 'Guide d\'étude complet — Examen interprovincial Sceau rouge, 125 questions',
    trade: 'Plombier',
    tradeCode: '306A',
    price: 4999,
    currency: 'CAD',
    totalChapters: _totalChapters,
    totalQuestions: _totalQuestions,
    passingMark: 70,
    features: [
      '15 chapitres couvrant les 7 grandes activités de travail (GTA)',
      `${_totalQuestions}+ questions pratiques avec explications`,
      'Examen blanc style Sceau rouge et stratégie d\'examen',
      'Référence des formules et glossaire des termes clés',
      'Basé sur la Norme de qualification du Sceau rouge (NQSR) – Plombier 2023',
      'Accès à vie — étudiez à votre rythme',
    ],
    parts: _parts,
  };

export default plumberCourseDataFR;