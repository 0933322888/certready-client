// ============================================================
// CertReady — Données du cours d'électricien en construction
// Basé sur : Norme professionnelle nationale (RSOS) – Électricien en construction (2025)
// Examen interprovincial Sceau rouge : 100 questions
// Apprentissage : 4 niveaux, 7200 heures total
// Pondération des AMT : A=12 %, B=26 %, C=34 %, D=18 %, E=10 %
// ============================================================

const electricianCourseFR = {
  meta: {
    trade: 'Électricien en construction',
    redSealCode: '309A',
    totalExamQuestions: 100,
    apprenticeshipLevels: 4,
    totalHours: 7200,
    version: '2025',
    lastUpdated: '2025',
  },

  parts: [

    // ============================================================
    // PARTIE 1 — COMPÉTENCES PROFESSIONNELLES COMMUNES
    // AMT A : Exécute les compétences professionnelles communes (12 %)
    // Tâches : A-1 Sécurité (23 %), A-2 Outils (24 %), A-3 Organisation du travail (18 %),
    //         A-4 Composants de support (21 %), A-5 Mise en service (14 %), A-6 Communication (0 %)
    // ============================================================
    {
      id: 'elec-part-1',
      number: 1,
      title: 'Compétences professionnelles communes',
      description: 'Sécurité, outils, organisation du travail, composants de support, mise en service et communication — les fondations essentielles que tout électricien en construction doit maîtriser.',
      chapters: [

        // ─────────────────────────────────────────────────────────
        // CHAPITRE 1 — Sécurité (AMT A-1) — GRATUIT
        // ─────────────────────────────────────────────────────────
        {
          id: 'elec-ch-01',
          number: 1,
          title: 'La sécurité au travail',
          subtitle: 'AMT A-1 · Exécute les fonctions liées à la sécurité (23 % de l\'AMT A)',
          isFree: true,
          estimatedMinutes: 50,
          sections: [
            {
              id: 'elec-ch01-s1',
              title: '1.1 Équipement de protection individuelle (EPI) et équipement de sécurité',
              content: [
                {
                  type: 'paragraph',
                  text: 'Les électriciens en construction font face à un ensemble unique de dangers : choc électrique, arc électrique, chutes, exposition à des espaces clos et contact avec des substances dangereuses. Choisir et utiliser le bon EPI n\'est pas optionnel — c\'est une exigence du code et de la SST. L\'EPI doit être adapté à la tâche et à l\'environnement avant le début de tout travail.',
                },
                {
                  type: 'keyTerm',
                  term: 'Arc électrique',
                  definition: 'Libération soudaine d\'énergie électrique dans l\'air lorsqu\'un défaut se produit entre deux conducteurs sous tension ou entre un conducteur sous tension et la terre. L\'arc électrique produit une chaleur intense (jusqu\'à 20 000 °C), des ondes de pression et des éclats de métal — tout cela peut causer des brûlures graves et des blessures mortelles.',
                },
                {
                  type: 'keyTerm',
                  term: 'AHJ (autorité compétente)',
                  definition: 'L\'organisation, le bureau ou la personne responsable de l\'application des exigences d\'un code ou d\'une norme. Sur les chantiers électriques, cela inclut les inspecteurs en électricité, les agents de SST et l\'entrepreneur principal.',
                },
                {
                  type: 'keyTerm',
                  term: 'WHMIS',
                  definition: 'Système d\'information sur les matières dangereuses utilisées au travail — norme canadienne de communication des dangers exigeant des étiquettes et des fiches de données de sécurité (FDS) pour tous les produits contrôlés sur le chantier.',
                },
                {
                  type: 'infoBox',
                  title: 'Types d\'EPI pour les électriciens en construction',
                  items: [
                    'EPI contre les chocs électriques — gants isolants en caoutchouc (classés par tension), bottes en caoutchouc, couvertures isolantes',
                    'EPI contre les arcs électriques — vêtements résistants à l\'arc (AR), écran facial, cagoule, gants adaptés au niveau d\'énergie incident',
                    'Protection de la tête — casque de sécurité classe E (électrique) certifié jusqu\'à 20 000 V',
                    'Protection oculaire — lunettes de sécurité, masques ou écrans faciaux selon la tâche',
                    'Chaussures de sécurité — chaussures diélectriques CSA grade 1 avec semelle anti-perforation',
                    'Protection des mains — gants en cuir, isolants en caoutchouc ou résistants aux produits chimiques selon la tâche',
                    'Protection auditive — bouchons d\'oreilles ou casques antibruit en cas d\'exposition > 85 dB',
                    'Protection respiratoire — demi-masque ou masque complet lorsque vous travaillez avec de la poussière, des fumées ou des substances désignées',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Équipement de sécurité (au-delà de l\'EPI personnel)',
                  items: [
                    'Protection contre les chutes — harnais complet (antichute) et longe, ou garde-corps (retenue de chute)',
                    'Équipement pour espaces clos — détecteurs de gaz, harnais de sauvetage, ventilateurs d\'extraction, communication avec le surveillant',
                    'Dispositifs de cadenassage — cadenas pour disjoncteurs, hasps multi-cadenas, ciseaux, étiquettes de danger personnelles',
                    'Mises à la terre temporaires (TPG) — câbles de court-circuit appliqués aux conducteurs hors tension pour évacuer la charge capacitive',
                    'Extincteurs — classe C pour les incendies électriques',
                    'Équipement de premiers soins — trousse minimale selon la réglementation SST pour la taille de l\'équipe',
                    'Stations de rinçage oculaire — obligatoires en présence d\'acides, de corrosifs ou de risques chimiques',
                    'Signalisation et barrières — rubans danger/attention, barricades, étiquettes d\'avertissement d\'arc électrique',
                    'Détecteurs de fumées et de gaz toxiques — détecteurs H₂S, CO, O₂ pour les espaces clos et les chambres électriques',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'L\'EPI doit être inspecté avant chaque utilisation. Les articles endommagés ou défectueux — casques fissurés, vêtements résistants à l\'arc déchirés, gants avec trous d\'épingle — doivent être immédiatement retirés du service et étiquetés. L\'EPI ne doit jamais être utilisé à d\'autres fins que celles pour lesquelles il a été conçu.',
                },
                {
                  type: 'infoBox',
                  title: 'Dangers spécifiques au travail électrique sur le chantier',
                  items: [
                    'Équipement sous tension — panneaux, conducteurs et jeux de barres sous tension',
                    'Zones de danger d\'arc électrique — définies par une étude d\'énergie incidente ou les tableaux par défaut du CCE',
                    'Travail en hauteur — sur échelles, échafaudages, nacelles élévatrices et toits',
                    'Espaces clos — chambres électriques, regards, vides sanitaires, salles d\'équipement',
                    'Excavations ouvertes — tranchées pour les services souterrains',
                    'Emplacements dangereux — zones classées (Zones 0, 1, 2 ou Divisions 1, 2) selon la section 18 du CCE',
                    'Conditions météorologiques — foudre, glace, surfaces mouillées pour le travail extérieur',
                    'Dangers aériens — lignes de distribution sous tension lors de travaux aériens ou sur les toits',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch01-s2',
              title: '1.2 Maintenir un environnement de travail sécuritaire',
              content: [
                {
                  type: 'paragraph',
                  text: 'Un environnement de travail sécuritaire relève de la responsabilité partagée de tous les travailleurs sur le chantier. Les électriciens en construction doivent identifier, signaler et éliminer les dangers de manière proactive. Les pratiques de travail sécuritaires doivent être suivies en tout temps conformément aux règlements de SST, à la politique de l\'entreprise et aux exigences spécifiques au site.',
                },
                {
                  type: 'infoBox',
                  title: 'Pratiques de travail sécuritaires',
                  items: [
                    'Effectuer une évaluation préalable des risques avant de commencer chaque tâche',
                    'Garder les zones de travail propres, sans encombrement et sans risques de trébuchement',
                    'Entreposer tous les matériaux et produits chimiques dans les zones désignées selon les exigences WHMIS',
                    'Barricader et signaler toutes les zones de danger — utiliser des rubans danger/attention et des clôtures',
                    'Identifier l\'emplacement de tous les composants de sécurité (extincteurs, trousse de premiers soins, FDS, rinçage oculaire)',
                    'Connaître les procédures d\'urgence : voies d\'évacuation, intervention en cas d\'incendie, procédures en cas de déversement de produits chimiques dangereux',
                    'Identifier et contenir correctement toutes les substances désignées rencontrées (amiante, plomb, silice, BPC dans les vieux transformateurs)',
                    'Connaître les limites de soi-même et de ses collègues — ne pas permettre aux travailleurs fatigués ou en état d\'ébriété d\'effectuer des travaux sous tension',
                  ],
                },
                {
                  type: 'keyTerm',
                  term: 'Substances désignées',
                  definition: 'Substances réglementées par la législation provinciale en matière de SST en raison de leur danger particulier pour la santé des travailleurs. Sur les chantiers électriques, il s\'agit couramment de l\'amiante (ancienne isolation et ignifugation), du plomb (vieille soudure et peinture), de la silice (coupe du béton), des BPC (vieux transformateurs et condensateurs) et du mercure (lampes fluorescentes).',
                },
              ],
            },
            {
              id: 'elec-ch01-s3',
              title: '1.3 Procédures de cadenassage / étiquetage (LOTO)',
              content: [
                {
                  type: 'paragraph',
                  text: 'Le cadenassage/étiquetage est la procédure de sécurité la plus critique dans le travail électrique. Le LOTO garantit que l\'équipement est hors tension et ne peut pas être remis sous tension accidentellement pendant qu\'un travailleur est en contact avec lui. Chaque province du Canada a des normes minimales de LOTO légiférées.',
                },
                {
                  type: 'infoBox',
                  title: 'Séquence LOTO standard (6 étapes)',
                  items: [
                    '1. AVIS — informer tous les travailleurs concernés et les autres métiers ; coordonner avec l\'AHJ',
                    '2. IDENTIFIER — localiser le(s) point(s) d\'isolement à l\'aide des tableaux de distribution, des schémas unifilaires, des étiquettes de conducteurs et des plaques d\'équipement ; identifier toutes les sources d\'énergie dangereuses (électrique, mécanique, pneumatique, emmagasinée)',
                    '3. ISOLER — ouvrir le moyen de sectionnement identifié pour mettre hors tension le circuit ou l\'équipement',
                    '4. CADENASSER ET ÉTIQUETER — appliquer un cadenas approuvé et une étiquette de danger personnelle ; utiliser un hasp multi-cadenas lorsque plusieurs travailleurs sont sur le même circuit',
                    '5. TESTER — vérifier l\'absence de tension à l\'aide d\'un équipement de test homologué (voltmètre, testeur d\'absence de tension) ; appliquer des mises à la terre temporaires si requis par le CCE',
                    '6. VÉRIFIER — confirmer que le système est en état de potentiel nul et sécuritaire pour travailler',
                  ],
                },
                {
                  type: 'keyTerm',
                  term: 'État de potentiel nul / état de zéro énergie',
                  definition: 'État dans lequel toutes les formes d\'énergie emmagasinée (électrique, mécanique, ressort, gravitationnelle, pneumatique) ont été libérées ou bloquées de sorte que l\'équipement ne puisse pas démarrer ou créer un danger.',
                },
                {
                  type: 'keyTerm',
                  term: 'Mise à la terre temporaire (TPG)',
                  definition: 'Ensemble de câbles de court-circuit appliqué aux conducteurs hors tension (entre phases et à la terre) pour dissiper toute charge emmagasinée, tension induite ou énergie capacitive avant que les travailleurs n\'entrent en contact. Requis par le CCE pour les travaux sur des systèmes haute tension hors tension.',
                },
                {
                  type: 'paragraph',
                  text: 'Les dispositifs LOTO approuvés comprennent : les cadenas pour disjoncteurs (cadenas à clé qui empêchent la fermeture d\'un disjoncteur), les ciseaux (empêchent la fermeture d\'un interrupteur à couteau) et l\'équipement de protection contre l\'arc électrique. L\'équipement de test doit être homologué pour la tension du système — vérifier le fonctionnement du testeur lui-même avant et après utilisation sur une source sous tension connue.',
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: 'elec-q01-1',
              question: 'Quelle classe de casque de sécurité offre une protection contre le contact avec des conducteurs sous tension jusqu\'à 20 000 V ?',
              options: ['Classe B', 'Classe E', 'Classe G', 'Classe C'],
              correctIndex: 1,
              explanation: 'Les casques de sécurité de classe E (électrique) sont certifiés jusqu\'à 20 000 V et constituent la norme requise pour les électriciens en construction travaillant à proximité de systèmes sous tension. La classe G (général) est certifiée jusqu\'à 2 200 V et la classe C (conductrice) n\'offre aucune protection électrique.',
            },
            {
              id: 'elec-q01-2',
              question: 'Après avoir appliqué le cadenassage sur un circuit, quelle est la prochaine étape correcte avant de commencer le travail ?',
              options: [
                'Informer le superviseur que le travail commence',
                'Apposer une étiquette de danger personnelle sur le panneau',
                'Tester l\'absence de tension à l\'aide d\'un équipement homologué',
                'Installer des mises à la terre temporaires sur tous les conducteurs',
              ],
              correctIndex: 2,
              explanation: 'Après avoir isolé et cadenassé le circuit, le travailleur doit toujours vérifier l\'absence de tension à l\'aide d\'un équipement de test correctement calibré pour confirmer que le circuit est hors tension avant d\'entrer en contact. L\'application de mises à la terre temporaires vient après la confirmation de l\'absence de tension, là où elle est requise.',
            },
            {
              id: 'elec-q01-3',
              question: 'Un électricien en construction découvre un gant isolant en caoutchouc fissuré avant de commencer une tâche sur un panneau sous tension. Quelle est la bonne action ?',
              options: [
                'Rubaner la fissure avec du ruban isolant et continuer',
                'Utiliser le gant uniquement pour les travaux basse tension',
                'Étiqueter le gant comme défectueux et le retirer du service',
                'Porter des gants en cuir par-dessus le gant en caoutchouc fissuré',
              ],
              correctIndex: 2,
              explanation: 'Les EPI endommagés ou défectueux doivent être immédiatement étiquetés et retirés du service, quelle que soit la gravité perçue du dommage. Un gant isolant en caoutchouc fissuré n\'offre aucune protection fiable contre les chocs électriques et ne doit jamais être utilisé.',
            },
          ],
        },

        // ─────────────────────────────────────────────────────────
        // CHAPITRE 2 — Outils, équipement et organisation du travail (AMT A-2, A-3, A-4)
        // ─────────────────────────────────────────────────────────
        {
          id: 'elec-ch-02',
          number: 2,
          title: 'Outils, équipement et organisation du travail',
          subtitle: 'AMT A-2, A-3, A-4 · Outils (24 %) · Organisation (18 %) · Composants de support (21 %)',
          isFree: false,
          estimatedMinutes: 55,
          sections: [
            {
              id: 'elec-ch02-s1',
              title: '2.1 Outils à main, outils électriques et instruments de mesure',
              content: [
                {
                  type: 'paragraph',
                  text: 'Les électriciens en construction doivent sélectionner, utiliser, inspecter et entretenir une large gamme d\'outils. Le choix des outils dépend de la tâche, du matériau travaillé et de l\'environnement. Tous les outils doivent être inspectés avant utilisation, maintenus propres et calibrés, et les outils défectueux doivent être étiquetés et remplacés.',
                },
                {
                  type: 'infoBox',
                  title: 'Outils à main courants',
                  items: [
                    'Pinces de lineman, pinces coupantes diagonales, pinces longues, pinces universelles',
                    'Dénudeurs de fils et dénudeurs de câbles (adaptés à la taille du conducteur)',
                    'Tournevis — plats, Phillips, Robertson, Torx, inviolables',
                    'Tire-fils et baguettes de tirage pour le tirage des conducteurs',
                    'Jeux de poinçonneuses pour boîtiers',
                    'Cintreuses de conduits — cintreuses manuelles (½" à 1"), cintreuses hydrauliques (1¼" et plus)',
                    'Mètres rubans, niveaux (torpille et à bulle), cordeaux à tracer, fils à plomb',
                    'Scies à métaux, scies-cloches, alésoirs à conduit, coupe-tubes',
                    'Équerres combinées et jeux de clés mixtes',
                    'Alésoirs à conduit, jeux de filières et tarauds',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Outils électriques et équipement spécialisé',
                  items: [
                    'Perceuses rotatives et à percussion avec forets à bois, à maçonnerie, étagés et mèches',
                    'Scies alternatives pour ouvrir les murs et couper les conduits',
                    'Coupe-câbles hydrauliques pour gros conducteurs',
                    'Tire-câbles et treuils pour longs trajets de câbles',
                    'Outils à poudre — nécessitent une certification distincte pour les utiliser',
                    'Pistolets à air chaud et chalumeaux pour thermorétractable et soudure',
                    'Machines à fileter les conduits',
                    'Pinces à colliers de serrage pour câbles',
                    'Caméras thermiques pour la détection de points chauds',
                  ],
                },
                {
                  type: 'keyTerm',
                  term: 'Outil à poudre (PAT)',
                  definition: 'Outil de fixation actionné par une charge de poudre (semblable à une cartouche à blanc) utilisé pour fixer des supports électriques au béton et à l\'acier. Les opérateurs doivent détenir une certification PAT valide et suivre les spécifications du fabricant. L\'outil n\'est chargé qu\'immédiatement avant utilisation.',
                },
                {
                  type: 'infoBox',
                  title: 'Instruments de mesure et de test électriques — Catégories CAT',
                  items: [
                    'CAT I — Équipement électronique, circuits à faible énergie',
                    'CAT II — Charges monophasées connectées par prise (prises standard)',
                    'CAT III — Distribution triphasée, y compris les jeux de barres, les sectionneurs et les équipements fixes',
                    'CAT IV — Entrée de service, conducteurs extérieurs',
                    'Remarque : Toujours utiliser la catégorie CAT la plus élevée disponible pour le système mesuré. Un numéro CAT plus élevé signifie une plus grande protection contre les pics de tension transitoires.',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Équipement de test courant',
                  items: [
                    'Multimètre (voltmètre, ampèremètre, ohmmètre combinés)',
                    'Ampèremètre à pince — mesure le courant sans ouvrir le circuit',
                    'Testeur de résistance d\'isolement (mégohmmètre) — vérifie l\'intégrité de l\'isolation des enroulements et des câbles',
                    'Testeur de tension / testeur à solénoïde — indication simple de présence/absence de tension',
                    'Indicateur de sens de phase — confirme la séquence de phases correcte (A-B-C) avant la mise sous tension des moteurs',
                    'Analyseur de qualité de l\'énergie — mesure les harmoniques, le facteur de puissance, les creux/élévations de tension',
                    'Caméra thermique — identifie les connexions et composants surchauffés',
                    'Testeur d\'impédance de boucle de terre — mesure la résistance de l\'électrode de terre',
                    'Testeur haute tension (hi-pot) — applique une haute tension pour vérifier la rigidité diélectrique de l\'isolation du câble',
                    'Oscilloscope — affiche les formes d\'onde de tension pour l\'analyse AC/DC',
                    'Détecteur acoustique / ultrasonique — localise les décharges partielles dans les équipements HT',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch02-s2',
              title: '2.2 Équipement d\'accès — Échelles, nacelles et protection antichute',
              content: [
                {
                  type: 'paragraph',
                  text: 'Les électriciens en construction passent une grande partie de leur temps de travail en hauteur. Tout équipement d\'accès doit être certifié CSA ou ANSI, inspecté avant utilisation et utilisé dans ses limites. Le travail en hauteur nécessite une protection antichute — soit un système antichute (harnais et longe) soit un système de retenue (empêche d\'atteindre le bord de chute).',
                },
                {
                  type: 'infoBox',
                  title: 'Types d\'équipement d\'accès',
                  items: [
                    'Échelles droites — autoportantes ; ne jamais utiliser le dernier barreau ou le sommet comme surface de travail',
                    'Échelles extensibles — inclinaison 4:1 (1 pied de distance pour 4 pieds de hauteur) ; fixer en haut et en bas',
                    'Systèmes d\'échafaudage — doivent être assemblés par du personnel formé ; garde-corps et plinthes requis',
                    'Nacelles ciseaux — doivent être utilisées sur un sol ferme et de niveau ; stabilisateurs déployés si nécessaire',
                    'Nacelles articulées — nécessitent un harnais complet et une longe en tout temps',
                    'Système antichute — harnais complet, longe absorbant l\'énergie et point d\'ancrage certifié (minimum 2 × la charge prévue)',
                    'Système de retenue — empêche le travailleur d\'atteindre le bord de chute ; nécessite une documentation d\'ingénierie du point d\'ancrage',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'Avant d\'utiliser tout équipement d\'accès : identifier les dangers aériens (surtout les lignes électriques sous tension), installer des barricades et de la signalisation pour protéger la zone de travail, inspecter l\'équipement et confirmer que la formation de l\'opérateur est à jour. L\'équipement d\'accès endommagé est étiqueté et retiré du service — jamais réparé sur le terrain.',
                },
              ],
            },
            {
              id: 'elec-ch02-s3',
              title: '2.3 Gréage, levage et hissage',
              content: [
                {
                  type: 'paragraph',
                  text: 'Les transformateurs, les tableaux de distribution et les centres de commande de moteurs (MCC) sont des équipements lourds. Le gréage, le levage et le hissage doivent être planifiés et exécutés en toute sécurité. Seuls les gréeurs certifiés peuvent attacher des charges aux grues et aux palans. Tout matériel de gréage est marqué d\'une charge de travail limite (WLL).',
                },
                {
                  type: 'keyTerm',
                  term: 'Charge de travail limite (WLL)',
                  definition: 'Charge maximale pouvant être appliquée à un composant de gréage (élingue, manille, crochet) dans des conditions normales d\'utilisation. La WLL est toujours inférieure à la résistance à la rupture. Ne jamais dépasser la WLL sur un composant de gréage.',
                },
                {
                  type: 'paragraph',
                  text: 'Des signaux manuels et sonores sont utilisés pour diriger les grutiers lorsque la communication directe n\'est pas possible. Une seule personne — le signaleur désigné — donne les signaux au grutier. Tous les travailleurs doivent rester à l\'écart des charges suspendues. Des barricades sont installées autour de la zone de levage.',
                },
              ],
            },
            {
              id: 'elec-ch02-s4',
              title: '2.4 Organisation du travail — Plans, matériaux et préparation du chantier',
              content: [
                {
                  type: 'paragraph',
                  text: 'Une organisation efficace du travail est essentielle pour réaliser les installations électriques dans les délais et le budget impartis. Au niveau de compagnon, on attend des électriciens en construction qu\'ils interprètent les dessins, planifient leur séquence de travail, organisent les matériaux, préparent le chantier et finalisent la documentation — le tout avec une supervision minimale.',
                },
                {
                  type: 'infoBox',
                  title: 'Types de dessins électriques',
                  items: [
                    'Schémas unifilaires — représentation simplifiée montrant le flux d\'énergie à travers un système avec une ligne représentant toutes les phases',
                    'Schémas de câblage — montrent les connexions physiques des fils entre les composants',
                    'Tableaux de distribution — listent tous les circuits de dérivation et d\'alimentation dans un panneau de distribution',
                    'Plans de site et plans d\'étage — montrent l\'emplacement des équipements et le tracé des cheminements',
                    'Schémas en élévation — coupes verticales montrant la distribution électrique de l\'entrée de service aux étages',
                    'Dessins d\'atelier — disposition spécifique au fabricant des équipements (MCC, tableaux)',
                    'Plans de récolement — dessins finaux révisés reflétant l\'état réel installé',
                    'BIM (modélisation des informations du bâtiment) — modèle numérique 3D du bâtiment avec tous les systèmes coordonnés',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'Avant de commencer le travail, l\'électricien confirme : les matériaux et l\'équipement sont sur le site et conformes aux spécifications ; la séquence de travail a été coordonnée avec les autres métiers (plombiers, tuyauteurs, CVAC, structure) ; le chantier est préparé (alimentation temporaire, accès, marquages et permis en place) ; et tous les permis requis (permis électrique, permis d\'entrée en espace clos) ont été délivrés par l\'AHJ.',
                },
                {
                  type: 'infoBox',
                  title: 'Documentation requise à la fin du projet',
                  items: [
                    'Plans de récolement — mis à jour pour montrer le tracé final de l\'installation, le remplissage des conduits et l\'identification des circuits',
                    'Tableaux de distribution — remplis et étiquetés, répertoire précis installé dans le panneau',
                    'Certificats d\'inspection — approbation de l\'inspection électrique par l\'AHJ',
                    'Rapports de test et de mise en service — tests de résistance d\'isolement, tests fonctionnels, rapports de qualité de l\'énergie',
                    'Manuels d\'utilisation et d\'entretien — documentation d\'utilisation et de maintenance des équipements installés',
                    'Cartes de garantie — garanties des équipements enregistrées auprès des fabricants',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch02-s5',
              title: '2.5 Fabrication et installation des composants de support',
              content: [
                {
                  type: 'paragraph',
                  text: 'Les cheminements électriques, les panneaux et les équipements doivent être correctement soutenus conformément au CCE, aux exigences de l\'ingénieur en structure et aux spécifications du fabricant. Les composants de support comprennent les supports, les suspensions, les fixations et les systèmes de retenue parasismique.',
                },
                {
                  type: 'infoBox',
                  title: 'Types de matériel de support',
                  items: [
                    'Profilés métalliques (cornières) — profilés métalliques rainurés (Unistrut® et équivalents) utilisés pour construire des cadres de support sur mesure',
                    'Supports — en cornière, en équerre, en T, en L, de sol, de plafond',
                    'Suspensions — suspensions trapézoïdales, colliers de tuyau, pinces de fixation pour poutrelles',
                    'Fixations — écrous à ressort, boulons, vis, ancrages à béton, chevilles à expansion',
                    'Systèmes de retenue parasismique — chaînes, câbles, tiges, câbles galvanisés avec cosse et serre-câbles ; exigés par le Code national du bâtiment (CNB) dans les zones sismiques',
                  ],
                },
                {
                  type: 'keyTerm',
                  term: 'Retenue parasismique',
                  definition: 'Système de contreventement conçu pour empêcher la chute des équipements électriques et des chemins de câbles lors d\'un tremblement de terre. Requis dans les zones sismiques selon le CNB. Les retenues parasismiques sont des systèmes conçus par ingénieur — le type et l\'espacement doivent être conformes aux spécifications de l\'ingénieur en structure.',
                },
                {
                  type: 'paragraph',
                  text: 'Les structures de support sont fabriquées en acier, aluminium ou bois selon l\'environnement. Les fixations sont choisies en fonction du matériau de base (par exemple, ancrages à béton pour le béton, vis à bois pour le bois, pinces à poutrelle pour l\'acier). Tous les supports doivent suivre les lignes du bâtiment et être installés d\'équerre, de niveau et d\'aplomb.',
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: 'elec-q02-1',
              question: 'Quelle catégorie CAT un multimètre doit-il avoir pour être utilisé sur un jeu de barres de panneau de distribution triphasé 600 V ?',
              options: ['CAT I', 'CAT II', 'CAT III', 'CAT IV'],
              correctIndex: 2,
              explanation: 'La catégorie CAT III couvre les systèmes de distribution triphasés, les jeux de barres, les feeders, les sectionneurs et les équipements fixes. Utiliser un multimètre de catégorie inférieure sur un circuit de catégorie supérieure crée un risque de défaillance catastrophique due aux surtensions transitoires. Toujours choisir la catégorie CAT applicable la plus élevée.',
            },
            {
              id: 'elec-q02-2',
              question: 'Quel outil nécessite une certification distincte pour être utilisé sur un chantier de construction ?',
              options: [
                'Tire-câble',
                'Machine à fileter les conduits',
                'Outil à poudre',
                'Coupe-câble hydraulique',
              ],
              correctIndex: 2,
              explanation: 'Les outils à poudre nécessitent une certification spécifique pour être utilisés en raison des dangers associés à la charge explosive. L\'opérateur doit être certifié par le fabricant ou un fournisseur de formation approuvé, et doit suivre des procédures strictes de chargement et d\'utilisation.',
            },
            {
              id: 'elec-q02-3',
              question: 'Lors de l\'installation d\'une échelle extensible, quel est le bon rapport d\'inclinaison ?',
              options: ['3:1 (1 pied de distance pour 3 pieds de hauteur)', '4:1 (1 pied de distance pour 4 pieds de hauteur)', '5:1 (1 pied de distance pour 5 pieds de hauteur)', '2:1 (1 pied de distance pour 2 pieds de hauteur)'],
              correctIndex: 1,
              explanation: 'L\'angle correct pour une échelle extensible est de 4:1 — pour 4 pieds de hauteur, la base est placée à 1 pied du mur. Cela crée un angle de 75°, qui est le meilleur équilibre entre stabilité et sécurité de montée.',
            },
          ],
        },

        // ─────────────────────────────────────────────────────────
        // CHAPITRE 3 — Mise en service, mise hors service et communication (AMT A-5, A-6)
        // ─────────────────────────────────────────────────────────
        {
          id: 'elec-ch-03',
          number: 3,
          title: 'Mise en service, mise hors service et communication',
          subtitle: 'AMT A-5 · Mise en service/hors service (14 % de l\'AMT A) · A-6 · Communication',
          isFree: false,
          estimatedMinutes: 40,
          sections: [
            {
              id: 'elec-ch03-s1',
              title: '3.1 Procédures de mise sous tension et hors tension',
              content: [
                {
                  type: 'paragraph',
                  text: 'Avant de mettre sous tension tout système électrique, l\'électricien en construction doit confirmer que l\'installation est complète, correcte, sécuritaire et documentée. La mise sous tension est un processus systématique — une mise sous tension hors séquence peut endommager l\'équipement ou créer des conditions de défaut dangereuses.',
                },
                {
                  type: 'infoBox',
                  title: 'Liste de contrôle pré-énergisation',
                  items: [
                    'Vérifier que les plans de récolement correspondent au câblage sur le terrain',
                    'Confirmer que les tests de résistance d\'isolement ont été effectués et documentés',
                    'Confirmer que les connexions sont terminées et que les boulons sont serrés selon les spécifications du fabricant',
                    'Inspecter et retirer tous les matériaux d\'expédition, outils, cavaliers, goupilles de gravité, dispositifs de blocage',
                    'Vérifier l\'identification des phases et le sens de rotation des phases (particulièrement critique pour les moteurs)',
                    'Tester les câbles et conducteurs pour détecter les défauts à la terre et la continuité',
                    'Vérifier le fonctionnement des périphériques du système (systèmes de détection, alarmes, systèmes d\'état)',
                    'Aviser tout le personnel et dégager la zone avant la mise sous tension',
                    'Installer des mises à la terre temporaires et les retirer dans l\'ordre correct',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'Les procédures de mise hors tension suivent la séquence inverse de la mise sous tension. L\'équipement est mis hors tension dans l\'ordre spécifié, cadenassé et étiqueté, et des mises à la terre temporaires sont appliquées. La séquence protège à la fois l\'équipement et le personnel contre les pics de tension causés par une mise hors tension brutale des charges inductives.',
                },
              ],
            },
            {
              id: 'elec-ch03-s2',
              title: '3.2 Mise en service et mise hors service des systèmes',
              content: [
                {
                  type: 'paragraph',
                  text: 'La mise en service est le processus systématique de vérification qu\'un système installé fonctionne conformément à l\'intention de conception. Elle va au-delà de la mise sous tension — elle comprend la mesure, l\'ajustement, les tests et la documentation de chaque fonction du système. La mise en service peut être supervisée par l\'AHJ, l\'ingénieur et le propriétaire.',
                },
                {
                  type: 'infoBox',
                  title: 'Tests de mise en service effectués par les électriciens',
                  items: [
                    'Test de résistance d\'isolement (test mégohmmètre) — valeur IR de base enregistrée pour comparaison future',
                    'Continuité et identification des phases',
                    'Mesures de tension et de courant à pleine charge',
                    'Vérification du sens de rotation des phases',
                    'Vérification des réglages des relais de protection',
                    'Test de résistance de terre (impédance de boucle de terre)',
                    'Test haute tension (hi-pot) sur câbles HT',
                    'Test fonctionnel de tous les systèmes de protection, alarmes et verrouillages',
                    'Analyse de la qualité de l\'énergie (harmoniques, facteur de puissance, régulation de tension)',
                  ],
                },
                {
                  type: 'keyTerm',
                  term: 'Mise hors service',
                  definition: 'La mise hors tension, l\'isolement et la préparation systématiques de l\'équipement électrique en vue de son enlèvement ou de son stockage à long terme. Toutes les sources d\'énergie sont identifiées et placées dans un état de zéro énergie, les autres métiers sont informés de l\'interruption des services, et la documentation est mise à jour.',
                },
              ],
            },
            {
              id: 'elec-ch03-s3',
              title: '3.3 Communication et mentorat dans le métier',
              content: [
                {
                  type: 'paragraph',
                  text: 'Une communication efficace est une compétence essentielle pour les électriciens en construction. Les électriciens interagissent régulièrement avec leurs collègues, superviseurs, ingénieurs, inspecteurs, propriétaires, architectes et autres métiers. Une communication claire prévient les erreurs, résout les conflits et assure que le travail respecte les exigences du code et de la conception.',
                },
                {
                  type: 'paragraph',
                  text: 'Le mentorat des apprentis est une responsabilité professionnelle au niveau de compagnon. Un mentorat efficace suit une approche structurée : identifier l\'objectif d\'apprentissage, lier la leçon à d\'autres tâches, démontrer la compétence, créer des conditions de pratique sécuritaires, observer et évaluer la performance de l\'apprenti, et fournir une rétroaction spécifique et encourageante. Les apprentis doivent être évalués équitablement, sans discrimination ni harcèlement, conformément à la Loi sur les droits de la personne.',
                },
                {
                  type: 'infoBox',
                  title: 'Neuf compétences essentielles dans le métier',
                  items: [
                    'Lecture — CCE, normes, spécifications, manuels d\'utilisation',
                    'Utilisation de documents — plans, schémas, tableaux de distribution, dessins BIM',
                    'Rédaction — notes de récolement, rapports d\'incident, journaux de maintenance, étiquetage',
                    'Communication orale — coordination inter-métiers, discussions sur le code, réunions de sécurité',
                    'Calcul — calculs de charge, remplissage des conduits, chute de tension, dimensionnement des fils',
                    'Compétences de réflexion — dépannage, séquencement des travaux, décisions de tracé',
                    'Travail d\'équipe — coordination, résolution de conflits',
                    'Technologie numérique — multimètres, caméras thermiques, logiciels BIM, automates',
                    'Apprentissage continu — mises à jour du code, nouvelles technologies, formation continue',
                  ],
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: 'elec-q03-1',
              question: 'Quel test fournit une mesure de base de la santé de l\'isolation d\'un câble qui peut être comparée à des lectures futures pour détecter une détérioration ?',
              options: [
                'Test de continuité',
                'Test de résistance d\'isolement (mégohmmètre)',
                'Test haute tension (hi-pot)',
                'Test d\'impédance de boucle de terre',
              ],
              correctIndex: 1,
              explanation: 'Un test de résistance d\'isolement utilisant un mégohmmètre fournit une valeur de base (mesurée en MΩ ou GΩ) qui est enregistrée lors de la mise en service et comparée lors des futures interventions de maintenance. Une baisse de la valeur IR indique une détérioration de l\'isolation avant qu\'un défaut ne se produise.',
            },
            {
              id: 'elec-q03-2',
              question: 'Avant de mettre sous tension une nouvelle installation de moteur, quel instrument est utilisé pour vérifier le bon sens de rotation des phases ?',
              options: ['Multimètre', 'Oscilloscope', 'Indicateur de sens de phase', 'Analyseur de qualité de l\'énergie'],
              correctIndex: 2,
              explanation: 'Un indicateur de sens de phase confirme que la séquence de phases (A-B-C) aux bornes du moteur correspond à la direction de rotation requise. Un mauvais sens de rotation fera tourner le moteur en sens inverse, ce qui peut endommager l\'équipement entraîné.',
            },
          ],
        },
      ],
    },

    // ============================================================
    // PARTIE 2 — SYSTÈMES DE PRODUCTION, DE DISTRIBUTION ET D'ALIMENTATION
    // AMT B : Installe, entretient et maintient les systèmes de production,
    //         de distribution et d'alimentation (26 %)
    // Tâches : B-7 Alimentation/comptage (14 %), B-8 Protection (15 %),
    //         B-9 Distribution (15 %), B-10 Conditionnement d'énergie/ASI (7 %),
    //         B-11 Liaison/mise à la terre (15 %), B-12 Production (8 %),
    //         B-13 Énergie renouvelable (8 %), B-14 Haute tension (6 %),
    //         B-15 Transformateurs (12 %)
    // ============================================================
    {
      id: 'elec-part-2',
      number: 2,
      title: 'Systèmes de production, de distribution et d\'alimentation',
      description: 'Alimentations de service, dispositifs de protection, équipements de distribution, mise à la terre et liaison, production d\'énergie, systèmes haute tension et transformateurs — l\'épine dorsale de toute installation électrique.',
      chapters: [

        // ─────────────────────────────────────────────────────────
        // CHAPITRE 4 — Alimentations de service et comptage (AMT B-7)
        // ─────────────────────────────────────────────────────────
        {
          id: 'elec-ch-04',
          number: 4,
          title: 'Alimentations de service et comptage',
          subtitle: 'AMT B-7 · Alimentations de service et équipement de comptage (14 % de l\'AMT B)',
          isFree: false,
          estimatedMinutes: 55,
          sections: [
            {
              id: 'elec-ch04-s1',
              title: '4.1 Alimentations monophasées',
              content: [
                {
                  type: 'paragraph',
                  text: 'Une alimentation de service est la connexion électrique entre le réseau de distribution du fournisseur et les locaux du client. L\'électricien en construction est responsable de l\'installation de l\'équipement d\'entrée de service du côté client du point de démarcation du fournisseur.',
                },
                {
                  type: 'keyTerm',
                  term: 'Système monophasé triphasé Edison 120/240 V',
                  definition: 'L\'alimentation résidentielle et commerciale légère standard au Canada. Le transformateur du fournisseur fournit deux phases de 120 V (L1 et L2) déphasées de 180° avec un neutre mis à la terre (N) entre elles. L1-N = 120 V ; L2-N = 120 V ; L1-L2 = 240 V.',
                },
                {
                  type: 'infoBox',
                  title: 'Composants de l\'alimentation',
                  items: [
                    'Point d\'attache — premier point de support des conducteurs d\'alimentation sur le bâtiment',
                    'Mât de service — conduit rigide montant qui élève le point d\'attache pour répondre aux exigences de dégagement du CCE',
                    'Conducteurs d\'entrée de service — relient le point d\'attache à l\'équipement de service (3 fils pour le monophasé)',
                    'Socle de compteur — socle fourni par le fournisseur ou le propriétaire où le compteur kilowattheure est branché',
                    'Moyen de sectionnement principal — premier dispositif de protection contre les surintensités à l\'intérieur du bâtiment (disjoncteur principal ou fusible principal)',
                    'Panneau de service / centre de charge — panneau de distribution pour tous les circuits de dérivation',
                    'Système d\'électrodes de mise à la terre — relie le neutre de service à la terre (tiges de mise à la terre, plaques, conduite d\'eau, acier de structure, électrode enrobée de béton)',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Exigences de dégagement du CCE pour les alimentations aériennes',
                  items: [
                    'Au-dessus du sol fini : minimum 3,0 m au-dessus des allées non accessibles aux camions, 5,0 m au-dessus des allées accessibles aux camions',
                    'Au-dessus des toits : minimum 900 mm au-dessus de la surface du toit (avec exceptions)',
                    'Hauteur du point d\'attache : minimum 3,0 m au-dessus du sol',
                    'Dégagement horizontal des fenêtres/portes : minimum 900 mm',
                    'Alimentations souterraines : exigences de profondeur d\'enfouissement et de protection par conduit selon le tableau 53 du CCE',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'Lors du calcul de la taille des conducteurs de service : la charge est calculée selon la section 8 du CCE (les facteurs de demande s\'appliquent). Le conducteur neutre peut être réduit (mais pas en dessous de 70 % de la taille des conducteurs de phase pour les services jusqu\'à 200 A). Un composé antioxydant doit être appliqué à toutes les connexions des conducteurs en aluminium.',
                },
              ],
            },
            {
              id: 'elec-ch04-s2',
              title: '4.2 Alimentations triphasées',
              content: [
                {
                  type: 'paragraph',
                  text: 'Les alimentations triphasées sont utilisées pour les bâtiments commerciaux, institutionnels et industriels qui ont des charges motrices importantes ou qui nécessitent une distribution d\'énergie équilibrée et de grande capacité.',
                },
                {
                  type: 'infoBox',
                  title: 'Configurations courantes des alimentations triphasées',
                  items: [
                    '120/208 V en étoile (Y) — alimentation commerciale la plus courante ; toutes les phases sont à 120 V par rapport au neutre, 208 V entre phases',
                    '347/600 V en étoile (Y) — alimentation industrielle standard au Canada ; 347 V par rapport au neutre, 600 V entre phases',
                    '240 V en triangle (Δ) — utilisé pour certaines charges motrices industrielles ; pas de neutre sur l\'enroulement en triangle',
                    '120/240 V en triangle à patte haute — fournit du 120 V monophasé pour l\'éclairage et du 240 V triphasé pour les moteurs ; la "patte haute" (phase B) est à environ 208 V par rapport au neutre — doit être identifiée par une couleur orange',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'Les conducteurs triphasés sont codés par couleur selon la règle 4-032 du CCE : pour les systèmes 120/208 V et 120/240 V, L1 = rouge, L2 = noir, L3 = bleu, N = blanc ; pour les systèmes 347/600 V, L1 = rouge, L2 = noir, L3 = bleu, N = blanc (certaines provinces utilisent des couleurs différentes — vérifier auprès de l\'AHJ local). Le neutre mis à la terre est connecté au système d\'électrodes de mise à la terre uniquement à l\'entrée de service.',
                },
                {
                  type: 'keyTerm',
                  term: 'Transformateur de courant (TC) et transformateur de tension (TT)',
                  definition: 'Transformateurs de mesure utilisés pour le comptage et la protection sur les gros services où il n\'est pas pratique de faire passer le courant de pleine charge dans le compteur. Le TC abaisse le courant de ligne (par exemple, 1000 A : 5 A). Le TT abaisse la tension de ligne. Le compteur lit les valeurs abaissées et l\'ordinateur de facturation multiplie par les rapports des transformateurs.',
                },
              ],
            },
            {
              id: 'elec-ch04-s3',
              title: '4.3 Mise à la terre et liaison à l\'entrée de service',
              content: [
                {
                  type: 'paragraph',
                  text: 'À l\'entrée de service, deux systèmes distincts mais liés doivent être correctement installés : le système de mise à la terre (reliant le neutre du système à la terre) et le système de liaison (reliant toutes les parties métalliques non conductrices entre elles et au conducteur mis à la terre).',
                },
                {
                  type: 'keyTerm',
                  term: 'Mise à la terre du système',
                  definition: 'Connexion intentionnelle du conducteur neutre de service à la terre au point d\'entrée de service à l\'aide d\'électrodes de mise à la terre. Cela établit une tension de référence (0 V) pour le neutre et limite la tension que le système peut atteindre par rapport à la terre en cas de défaut.',
                },
                {
                  type: 'keyTerm',
                  term: 'Liaison des équipements',
                  definition: 'Connexion de toutes les parties métalliques non conductrices du système électrique (conduits, boîtiers, châssis d\'équipement) entre elles et au conducteur de service mis à la terre pour créer un chemin de retour de défaut à faible impédance. La liaison assure que le courant de défaut retourne par le circuit — pas à travers les personnes — et déclenche le dispositif de protection contre les surintensités.',
                },
                {
                  type: 'infoBox',
                  title: 'Électrodes de mise à la terre (section 10 du CCE)',
                  items: [
                    'Tiges de mise à la terre — minimum 2,4 m de long, acier cuivré ; enfoncées sur toute leur longueur ou deux tiges si la résistance > 25 Ω',
                    'Plaques de mise à la terre — surface minimale de 0,093 m² enterrée à au moins 600 mm de profondeur',
                    'Conducteur de cuivre enterré — minimum #4 AWG nu, d\'au moins 7,5 m de long',
                    'Conduite d\'eau métallique — minimum 3 m de conduite métallique souterraine (une électrode supplémentaire est également requise)',
                    'Électrode enrobée de béton (Ufer ground) — 6 m ou plus de barres d\'armature ou de conducteur de cuivre dans la semelle de fondation',
                    'Acier de structure — charpente métallique électriquement continue du bâtiment',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'Les tuyauteries et structures métalliques non électriques (conduites de gaz, conduites d\'eau, structures métalliques du bâtiment) doivent être reliées au système électrique à l\'entrée de service conformément à la règle 10-406 du CCE. Cela empêche les différences de tension dangereuses entre les systèmes métalliques.',
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: 'elec-q04-1',
              question: 'Dans une alimentation triphasée 120/208 V en étoile, quelle est la tension mesurée entre deux conducteurs de phase ?',
              options: ['120 V', '208 V', '240 V', '347 V'],
              correctIndex: 1,
              explanation: 'Dans un système 120/208 V en étoile, chaque phase est à 120 V par rapport au neutre. La tension entre phases est de 120 V × √3 = 207,8 V ≈ 208 V. C\'est la tension de service commerciale standard au Canada.',
            },
            {
              id: 'elec-q04-2',
              question: 'Quel conducteur de phase doit être identifié par un code de couleur orange dans une alimentation 120/240 V en triangle à patte haute ?',
              options: ['Phase A', 'Phase B (patte haute)', 'Phase C', 'Le neutre'],
              correctIndex: 1,
              explanation: 'Dans un système 120/240 V en triangle à patte haute, la phase B se connecte au point milieu de l\'enroulement en triangle, ce qui donne environ 208 V par rapport au neutre — plus du double du 120 V des phases A et C. Cette "patte haute" doit être identifiée par des conducteurs ou des marquages orange pour éviter que des appareils 120 V ne soient accidentellement connectés à celle-ci.',
            },
            {
              id: 'elec-q04-3',
              question: 'Quelle est la longueur minimale d\'une tige de mise à la terre en acier cuivré selon le CCE ?',
              options: ['1,2 m', '1,8 m', '2,4 m', '3,0 m'],
              correctIndex: 2,
              explanation: 'Le CCE exige que les tiges de mise à la terre aient une longueur minimale de 2,4 m. Si les conditions du sol empêchent d\'enfoncer la tige sur toute sa longueur, deux tiges reliées entre elles peuvent être utilisées comme alternative.',
            },
          ],
        },

        // ─────────────────────────────────────────────────────────
        // CHAPITRE 5 — Dispositifs de protection et distribution d'énergie (AMT B-8, B-9, B-10)
        // ─────────────────────────────────────────────────────────
        {
          id: 'elec-ch-05',
          number: 5,
          title: 'Dispositifs de protection et distribution d\'énergie',
          subtitle: 'AMT B-8 Protection (15 %) · B-9 Distribution (15 %) · B-10 Conditionnement d\'énergie/ASI (7 %)',
          isFree: false,
          estimatedMinutes: 60,
          sections: [
            {
              id: 'elec-ch05-s1',
              title: '5.1 Dispositifs de protection contre les surintensités',
              content: [
                {
                  type: 'paragraph',
                  text: 'Les dispositifs de protection contre les surintensités protègent les conducteurs et les équipements contre les courants excessifs causés par les surcharges et les courts-circuits. Chaque conducteur non mis à la terre (phase) doit être protégé par un dispositif de protection dont le calibre n\'est pas supérieur à l\'ampacité du conducteur (avec certaines exceptions pour les moteurs).',
                },
                {
                  type: 'infoBox',
                  title: 'Types de dispositifs de protection contre les surintensités',
                  items: [
                    'Fusibles — dispositifs à usage unique qui fondent pour interrompre le courant de défaut ; types rapides ou temporisés ; classes H, J, K, L, T, etc.',
                    'Disjoncteurs à boîtier moulé — réarmables ; déclencheur magnétique (instantané) pour les courts-circuits, déclencheur thermique (temporisé) pour les surcharges',
                    'Disjoncteurs miniatures — disjoncteurs résidentiels/commerciaux légers standard',
                    'Disjoncteurs à déclencheur électronique — réglages de déclenchement ajustables (long retard, court retard, instantané, défaut à la terre) pour une coordination précise',
                    'Fusibles limiteurs de courant — interrompent le courant de défaut si rapidement qu\'ils limitent le courant de crête admissible ; protègent les équipements en aval de l\'énergie de défaut élevée',
                    'Protection par relais — relais de protection combinés à des transformateurs de courant et des contacteurs/disjoncteurs ; utilisés sur les systèmes moyenne et haute tension',
                  ],
                },
                {
                  type: 'keyTerm',
                  term: 'Étude de coordination',
                  definition: 'Analyse technique de tous les dispositifs de protection contre les surintensités d\'un système de distribution pour s\'assurer que seul le dispositif le plus proche d\'un défaut s\'ouvre — minimisant ainsi la coupure à la plus petite zone possible. Aussi appelé coordination sélective.',
                },
                {
                  type: 'paragraph',
                  text: 'Les réglages de déclenchement doivent être définis en fonction des exigences de charge, des résultats de l\'étude de coordination et des exigences du CCE. Après toute modification, les répertoires des panneaux et des circuits d\'alimentation doivent être mis à jour et étiquetés.',
                },
              ],
            },
            {
              id: 'elec-ch05-s2',
              title: '5.2 Protection contre les défauts à la terre, les arcs électriques et les surtensions',
              content: [
                {
                  type: 'keyTerm',
                  term: 'GFCI (disjoncteur de fuite à la terre)',
                  definition: 'Détecte un courant de défaut à la terre aussi faible que 5 mA (déséquilibre entre les conducteurs de phase et neutre) et se déclenche en 1/40e de seconde — assez rapidement pour prévenir l\'électrocution. Exigé par le CCE dans les endroits humides ou mouillés (salles de bain, cuisines, garages, extérieurs, chantiers de construction).',
                },
                {
                  type: 'keyTerm',
                  term: 'AFCI (disjoncteur de détection d\'arc électrique)',
                  definition: 'Détecte la signature d\'onde des défauts d\'arc — l\'une des principales causes d\'incendies électriques — et déconnecte le circuit. Les AFCIs de type combiné protègent contre les défauts d\'arc de série et parallèle. Exigé par le CCE dans les chambres à coucher et autres endroits résidentiels.',
                },
                {
                  type: 'infoBox',
                  title: 'Dispositifs de protection contre les surtensions (SPD) — Types',
                  items: [
                    'MOV (varistance à oxyde métallique) — le plus courant ; écrête les tensions transitoires en devenant de faible résistance lorsque la tension dépasse un seuil',
                    'Diodes Zener — écrêteuses semi-conductrices rapides utilisées dans la protection des équipements électroniques',
                    'Thyristors (TVS) — dispositifs de suppression des tensions transitoires utilisés dans les circuits de données et de signaux',
                    'SPD d\'entrée de service — type 1 (installé avant le disjoncteur principal) ou type 2 (après le disjoncteur principal) protège tout le bâtiment',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch05-s3',
              title: '5.3 Équipement de distribution d\'énergie',
              content: [
                {
                  type: 'paragraph',
                  text: 'L\'équipement de distribution d\'énergie reçoit l\'énergie de l\'entrée de service et la distribue aux différentes charges par le biais de circuits d\'alimentation et de dérivation. Tout équipement de distribution doit être choisi pour la bonne tension, le bon calibre de courant, le bon pouvoir de coupure et le bon type d\'enveloppe.',
                },
                {
                  type: 'infoBox',
                  title: 'Types d\'équipement de distribution',
                  items: [
                    'Panneaux et sous-panneaux — distribuent l\'énergie aux circuits de dérivation ; identifiés par un disjoncteur principal ou des bornes principales',
                    'Tableaux de distribution — grands assemblages sur pied avec sections boulonnées et débrochables ; utilisés pour les services principaux commerciaux/industriels de grande taille',
                    'Centres de distribution d\'énergie — systèmes de distribution pré-assemblés en usine',
                    'Centres de commande de moteurs (MCC) — enveloppes pré-assemblées contenant des démarreurs de moteurs, des sectionneurs et des automates pour les systèmes à plusieurs moteurs',
                    'Commutateurs de transfert — basculent automatiquement ou manuellement entre les sources d\'alimentation normale et de secours/urgence (ATS = commutateur de transfert automatique)',
                    'Jeux de barres — conducteurs à faible impédance qui distribuent le courant à plusieurs circuits dans une enveloppe',
                    'TC et TT — pour le comptage sur les gros équipements de distribution',
                  ],
                },
                {
                  type: 'keyTerm',
                  term: 'Désignation de type d\'enveloppe NEMA/CSA',
                  definition: 'Classification normalisée des enveloppes électriques selon leur niveau de protection. Type 1 = usage général intérieur ; Type 3R = extérieur étanche à la pluie ; Type 4 = étanche à l\'eau ; Type 4X = étanche à l\'eau et résistant à la corrosion ; Type 12 = industriel étanche à la poussière ; Type 7 = emplacement dangereux. Les désignations CSA suivent NEMA comme base.',
                },
              ],
            },
            {
              id: 'elec-ch05-s4',
              title: '5.4 Conditionnement d\'énergie, ASI et systèmes de suppression des surtensions',
              content: [
                {
                  type: 'paragraph',
                  text: 'Les problèmes de qualité de l\'énergie — harmoniques, mauvais facteur de puissance, tensions transitoires et creux de tension — peuvent endommager les charges sensibles et réduire l\'efficacité du système. Les équipements de conditionnement d\'énergie corrigent ces problèmes pour fournir une énergie propre et stable.',
                },
                {
                  type: 'infoBox',
                  title: 'Problèmes de qualité de l\'énergie et solutions',
                  items: [
                    'Harmoniques — causés par les charges non linéaires (VFD, ASI, ballasts électroniques) ; corrigés par des filtres harmoniques passifs/actifs, des transformateurs à indice K',
                    'Mauvais facteur de puissance — causé par les charges inductives (moteurs, transformateurs) ; corrigé par des batteries de condensateurs de correction du facteur de puissance ou des condensateurs synchrones',
                    'Tensions transitoires — surtensions de foudre, transitoires de commutation ; supprimées par des SPD (MOV, diodes TVS)',
                    'Creux/élévations de tension — corrigés par des régulateurs automatiques de tension ou des systèmes ASI',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Types de systèmes ASI',
                  items: [
                    'ASI hors ligne (veille) — laisse normalement passer l\'énergie du réseau ; commute sur batterie en cas de panne de courant (léger temps de transfert)',
                    'ASI en ligne (double conversion) — convertit en permanence le courant alternatif en continu puis en alternatif ; assure une isolation parfaite des problèmes de qualité de l\'énergie du réseau ; temps de transfert nul',
                    'ASI line-interactive — un régulateur automatique de tension corrige les creux de tension sans passer sur batterie ; transfert rapide en cas de panne totale',
                    'Bypass de maintenance — permet d\'entretenir l\'ASI sans interrompre la charge critique',
                    'Bypass statique — contourne automatiquement l\'onduleur de l\'ASI si celui-ci tombe en panne ; maintient l\'alimentation de la charge',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'Les systèmes ASI contiennent des batteries, des condensateurs et plusieurs sources d\'énergie — des dangers uniques au travail sur ASI. Le bus continu peut rester sous tension même après la déconnexion de l\'entrée CA. Toujours confirmer que toutes les sources d\'énergie sont identifiées et isolées avant de travailler à l\'intérieur d\'une ASI.',
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: 'elec-q05-1',
              question: 'Un dispositif GFCI se déclenche lorsqu\'il détecte un courant de défaut à la terre d\'environ :',
              options: ['50 mA', '15 mA', '5 mA', '100 mA'],
              correctIndex: 2,
              explanation: 'Les dispositifs GFCI sont conçus pour se déclencher à un courant de défaut à la terre d\'environ 4–6 mA (généralement indiqué à 5 mA). C\'est en dessous du seuil de fibrillation ventriculaire (environ 75–100 mA) mais au-dessus des niveaux normaux de courant de fuite, ce qui évite les déclenchements intempestifs.',
            },
            {
              id: 'elec-q05-2',
              question: 'Quel type d\'ASI offre la meilleure qualité d\'énergie car la charge est toujours alimentée par l\'onduleur ?',
              options: ['ASI hors ligne (veille)', 'ASI line-interactive', 'ASI en ligne (double conversion)', 'ASI ferro-résonnant'],
              correctIndex: 2,
              explanation: 'Un ASI en ligne (double conversion) convertit en permanence le courant alternatif entrant en continu, puis de nouveau en alternatif via son onduleur. Cela assure une isolation complète des problèmes de qualité de l\'énergie du réseau (harmoniques, transitoires, creux), un temps de transfert nul en cas de panne de courant et la forme d\'onde de sortie la plus propre possible.',
            },
            {
              id: 'elec-q05-3',
              question: 'Quel type d\'enveloppe NEMA est requis pour les équipements extérieurs qui doivent être protégés contre la pluie et les intempéries directes ?',
              options: ['NEMA Type 1', 'NEMA Type 3R', 'NEMA Type 12', 'NEMA Type 7'],
              correctIndex: 1,
              explanation: 'Les enveloppes NEMA Type 3R sont conçues pour une utilisation en extérieur et protègent contre la pluie, le grésil et la neige. NEMA Type 1 est à usage général intérieur uniquement. Type 12 est intérieur étanche à la poussière. Type 7 est pour les emplacements dangereux.',
            },
          ],
        },

        // ─────────────────────────────────────────────────────────
        // CHAPITRE 6 — Liaison, mise à la terre, production d'énergie, haute tension et transformateurs (AMT B-11 à B-15)
        // ─────────────────────────────────────────────────────────
        {
          id: 'elec-ch-06',
          number: 6,
          title: 'Liaison, mise à la terre, production, haute tension et transformateurs',
          subtitle: 'AMT B-11 Liaison/mise à la terre (15 %) · B-12 Production (8 %) · B-13 Énergie renouvelable (8 %) · B-14 Haute tension (6 %) · B-15 Transformateurs (12 %)',
          isFree: false,
          estimatedMinutes: 70,
          sections: [
            {
              id: 'elec-ch06-s1',
              title: '6.1 Systèmes de liaison et de mise à la terre (Tâche B-11)',
              content: [
                {
                  type: 'paragraph',
                  text: 'Un système de liaison et de mise à la terre correctement conçu remplit deux fonctions critiques : (1) il établit une référence de tension stable, et (2) il fournit un chemin à faible impédance pour le courant de défaut afin qu\'il retourne à la source et que le dispositif de protection se déclenche. Ces fonctions nécessitent à la fois un système de mise à la terre (connexion à la terre) et un système de liaison (continuité métallique).',
                },
                {
                  type: 'infoBox',
                  title: 'Systèmes de protection contre les défauts à la terre (section 14 du CCE)',
                  items: [
                    'Protection contre les défauts à la terre sur les services de plus de 1000 A — exigée par le CCE pour les systèmes mis à la terre de plus de 150 V par rapport à la terre',
                    'Systèmes à dispositif différentiel résiduel (RCD) — surveillent le déséquilibre de courant dans tous les conducteurs, y compris le neutre ; utilisés sur les systèmes mis à la terre à haute impédance',
                    'Détection de défaut à la terre — utilisée sur les systèmes non mis à la terre ou mis à la terre à haute impédance pour détecter un premier défaut sans déclenchement ; permet un arrêt contrôlé pour maintenance',
                  ],
                },
                {
                  type: 'keyTerm',
                  term: 'Système de protection contre la foudre',
                  definition: 'Un système de paratonnerres, conducteurs et tiges de mise à la terre conçu pour conduire en toute sécurité les coups de foudre vers la terre. La protection contre la foudre est distincte du système de mise à la terre électrique mais doit y être reliée. Installé selon la norme CSA B72 et la section 10 du CCE.',
                },
              ],
            },
            {
              id: 'elec-ch06-s2',
              title: '6.2 Systèmes de production et de conversion d\'énergie (Tâche B-12)',
              content: [
                {
                  type: 'paragraph',
                  text: 'Les génératrices de secours et d\'urgence fournissent une alimentation de secours pour les systèmes de sécurité des personnes, les charges critiques et la continuité des opérations. Les électriciens en construction installent et entretiennent à la fois les systèmes de production de courant alternatif (groupes électrogènes diesel et au gaz naturel) et les systèmes de production et de conversion de courant continu.',
                },
                {
                  type: 'infoBox',
                  title: 'Composants d\'un groupe électrogène (genset)',
                  items: [
                    'Moteur principal — moteur diesel, moteur au gaz naturel ou turbine',
                    'Alternateur — produit la tension alternative ; le rotor crée le champ magnétique tournant',
                    'Régulateur automatique de tension — maintient une tension de sortie constante lorsque la charge varie',
                    'Régulateur de vitesse — maintient une vitesse constante du moteur (et donc une fréquence constante) lorsque la charge varie',
                    'Commutateur de transfert — connecte la charge au générateur lorsque l\'alimentation du réseau tombe en panne',
                    'Équipement de parallélisme — permet à deux générateurs ou plus de fonctionner simultanément, en partageant la charge',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'Les systèmes de production de courant continu comprennent des redresseurs (convertisseurs CA/CC) utilisés pour la charge des batteries, les variateurs de vitesse pour moteurs à courant continu et les processus électrochimiques. Ils comprennent des redresseurs non commandés (diodes), des redresseurs commandés (thyristors/SCR) et des alimentations à découpage.',
                },
              ],
            },
            {
              id: 'elec-ch06-s3',
              title: '6.3 Systèmes de production et de stockage d\'énergie renouvelable (Tâche B-13)',
              content: [
                {
                  type: 'paragraph',
                  text: 'Les systèmes d\'énergie renouvelable constituent un domaine d\'emploi en pleine croissance pour les électriciens en construction. Les systèmes solaires photovoltaïques, éoliens, hydrocinétiques et géothermiques nécessitent tous des connaissances électriques spécialisées pour une installation et une maintenance sûres.',
                },
                {
                  type: 'infoBox',
                  title: 'Types de systèmes d\'énergie renouvelable',
                  items: [
                    'Solaire photovoltaïque (PV) — convertit la lumière du soleil en électricité continue ; panneaux câblés en chaînes ; onduleur convertit le continu en alternatif',
                    'Éoliennes — convertit l\'énergie cinétique du vent en électricité alternative ; transformateur élévateur pour la connexion au réseau',
                    'Turbines hydrocinétiques — utilise le débit de l\'eau (rivière, marée) pour entraîner des génératrices',
                    'Géothermie — utilise la chaleur de la terre ; le travail électrique implique les connexions des pompes à chaleur',
                    'Piles à combustible — conversion électrochimique de l\'hydrogène en électricité',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Types de connexion : dépendant du réseau vs indépendant du réseau',
                  items: [
                    'Dépendant du réseau (raccordé au réseau) — connecté au réseau électrique ; l\'onduleur doit avoir une capacité anti-îlotage (s\'arrête en cas de panne du réseau pour éviter d\'alimenter des lignes hors tension)',
                    'Indépendant du réseau (autonome / hors réseau) — non connecté au réseau ; nécessite un stockage d\'énergie (batterie) et un contrôleur de charge',
                    'Raccordé au réseau avec secours — comprend un stockage sur batterie et un panneau de charges critiques ; maintient l\'alimentation des charges essentielles en cas de panne du réseau',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Systèmes de stockage d\'énergie',
                  items: [
                    'Batteries — lithium-ion, plomb-acide, batteries à flux ; nécessitent un BMS (système de gestion de batterie)',
                    'Stockage par pompage-turbinage — à grande échelle ; pompe l\'eau vers le haut pour stocker l\'énergie, la relâche pour produire de l\'électricité',
                    'Stockage d\'énergie par air comprimé (CAES) — comprime l\'air dans des cavernes ; le libère pour entraîner des turbines',
                    'Composants clés : commutateurs de transfert, onduleurs, sectionneurs d\'isolement, commandes, chargeurs de batterie',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch06-s4',
              title: '6.4 Systèmes haute tension (Tâche B-14)',
              content: [
                {
                  type: 'paragraph',
                  text: 'Le travail haute tension au Canada est défini comme les systèmes de plus de 750 V CA (ou 1060 V CC) selon le CCE. Les électriciens en construction HT installent et entretiennent les postes de commutation, les sous-stations, les chambres électriques, les centres de commande de moteurs HT et les parcs solaires. Des certifications supplémentaires, des EPI spécifiques et des procédures strictes sont nécessaires.',
                },
                {
                  type: 'infoBox',
                  title: 'Équipement haute tension',
                  items: [
                    'Équipement de distribution — appareillage HT, appareillage à isolation dans l\'air, appareillage à isolation gazeuse',
                    'Contacteurs, démarreurs de moteurs — pour moteurs HT (plus de 1000 V)',
                    'Fusibles HT — fusibles à expulsion, fusibles limiteurs de courant, coupe-circuits à déconnexion',
                    'Sectionneurs et interrupteurs d\'isolement — pour mettre hors tension des sections lors de la maintenance',
                    'Réenclencheurs — disjoncteurs automatiques utilisés sur les lignes de distribution ; se referment après un défaut temporaire',
                    'TT et TC — transformateurs de mesure pour le comptage et la protection',
                    'Grille de mise à la terre du poste — grille de conducteurs de cuivre enterrés qui limite les tensions de pas et de contact dans une sous-station',
                  ],
                },
                {
                  type: 'keyTerm',
                  term: 'Tension de pas et tension de contact',
                  definition: 'Lors d\'un défaut à la terre dans une sous-station, le courant circule dans la terre, créant des gradients de tension. La tension de pas est la différence de potentiel entre deux points au sol distants d\'un pas (dangereuse pour le personnel en marche). La tension de contact est la différence de potentiel entre une structure mise à la terre et un point au sol où se tient une personne. Les grilles de mise à la terre des postes sont conçues pour limiter les deux.',
                },
                {
                  type: 'infoBox',
                  title: 'Terminaisons et tests de câbles HT',
                  items: [
                    'Têtes de câble — terminaisons de câble scellées qui empêchent l\'humidité de pénétrer dans l\'isolation du câble',
                    'Terminaisons de relaxation de contrainte (thermorétractable et rétractable à froid) — gèrent la concentration de contrainte du champ électrique à l\'extrémité du câble où le blindage est retiré',
                    'Test haute tension (hi-pot) — applique une tension de test CC ou CA supérieure à la tension de service normale pour vérifier l\'intégrité de l\'isolation ; résultats documentés',
                    'Tests de réception — indice de polarisation, résistance de la grille de mise à la terre, test de phasage, test de temporisation, injection de courant',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch06-s5',
              title: '6.5 Transformateurs (Tâche B-15)',
              content: [
                {
                  type: 'paragraph',
                  text: 'Les transformateurs modifient les niveaux de tension et de courant par induction mutuelle. Ils font partie du système de distribution, pas une charge. Les électriciens en construction installent des transformateurs très basse tension, basse tension monophasés, basse tension triphasés et haute tension.',
                },
                {
                  type: 'infoBox',
                  title: 'Classifications de tension des transformateurs',
                  items: [
                    'Très basse tension (TBT) — secondaire ≤ 30 V CA ou 60 V CC ; utilisé pour les sonnettes, thermostats, circuits de commande, circuits d\'alarme incendie',
                    'Basse tension monophasé — primaire et secondaire ≤ 750 V ; 240/120 V résidentiel, transformateurs d\'isolement, buck-boost',
                    'Basse tension triphasé — primaire et secondaire ≤ 750 V ; abaisseur de 600 V à 208 V pour la distribution des bâtiments ; configurations étoile-triangle et étoile-étoile',
                    'Transformateurs haute tension — primaire ou secondaire > 750 V ; montage sur socle, montage en chambre, remplis d\'huile, type sec',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Concepts clés des transformateurs',
                  items: [
                    'Rapport de transformation — rapport du nombre de spires primaires (N₁) aux spires secondaires (N₂) ; V₁/V₂ = N₁/N₂ ; I₁/I₂ = N₂/N₁',
                    'Puissance nominale en kVA — capacité du transformateur en kilovolt-ampères ; ne dépend pas du facteur de puissance',
                    'Régulation de tension — variation en pourcentage de la tension secondaire entre la charge nulle et la pleine charge',
                    'Connexions des transformateurs — triangle (Δ) : pas de neutre disponible ; étoile (Y) : neutre disponible ; triangle-étoile : le plus courant pour l\'abaissement ; étoile-triangle : le moins courant',
                    'Changeur de prise — ajuste le rapport de spires primaires pour compenser les variations de tension ; des prises de ±2,5 % et ±5 % sont courantes',
                    'Protection contre les surintensités — le primaire et le secondaire du transformateur nécessitent tous deux une protection selon le tableau 26 du CCE',
                    'Transformateurs à indice K — conçus pour supporter les courants harmoniques des charges non linéaires (VFD, ordinateurs)',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'Lors de l\'installation de transformateurs, l\'électricien doit : calculer les tailles des conducteurs et des protections contre les surintensités pour les circuits primaire et secondaire ; déterminer l\'emplacement de montage physique en respectant les dégagements exigés par le CCE ; connecter les conducteurs primaire et secondaire dans l\'ordre de phases correct ; vérifier la polarité (additive ou soustractive) ; et effectuer des tests de résistance d\'isolement sur les enroulements avant la mise sous tension.',
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: 'elec-q06-1',
              question: 'Un transformateur triphasé de 75 kVA, 600 V / 208 V, fournit sa pleine charge nominale. Quel est le courant secondaire approximatif à pleine charge ?',
              options: ['72 A', '125 A', '208 A', '361 A'],
              correctIndex: 2,
              explanation: 'I = kVA / (√3 × V) = 75 000 / (1,732 × 208) = 75 000 / 360,3 ≈ 208 A. C\'est le courant secondaire à pleine charge sur l\'enroulement 208 V. Le courant primaire à pleine charge à 600 V serait : 75 000 / (1,732 × 600) ≈ 72 A.',
            },
            {
              id: 'elec-q06-2',
              question: 'Un onduleur solaire raccordé au réseau doit avoir une protection anti-îlotage. Quel est le but de cette fonction ?',
              options: [
                'Empêcher l\'onduleur de renvoyer de l\'énergie vers le réseau',
                'Arrêter l\'onduleur lorsque le réseau électrique est hors tension, empêchant ainsi la ré-alimentation des lignes électriques tombées',
                'Protéger l\'onduleur contre les surtensions de foudre sur le réseau',
                'Réguler la tension de sortie pour qu\'elle corresponde à la fréquence du réseau',
              ],
              correctIndex: 1,
              explanation: 'La protection anti-îlotage arrête automatiquement un onduleur raccordé au réseau lorsque l\'alimentation du réseau est perdue. Sans elle, le système solaire pourrait continuer à alimenter les lignes de distribution du réseau pendant une panne, créant un danger mortel pour les travailleurs du réseau travaillant sur des lignes "hors tension".',
            },
            {
              id: 'elec-q06-3',
              question: 'Lors de la terminaison d\'un câble blindé haute tension, quel est le but d\'une terminaison de relaxation de contrainte ?',
              options: [
                'Empêcher l\'humidité de pénétrer dans l\'extrémité du câble',
                'Gérer la concentration de contrainte du champ électrique à l\'endroit où le blindage du câble s\'arrête',
                'Fournir une protection mécanique à l\'entrée du câble dans l\'équipement',
                'Réduire la résistance du conducteur au point de terminaison',
              ],
              correctIndex: 1,
              explanation: 'Lorsque le blindage métallique d\'un câble HT est retiré, le champ électrique se concentre à l\'endroit de la coupe du blindage — cela peut entraîner une rupture de l\'isolation. Les terminaisons de relaxation de contrainte (kits thermorétractables ou rétractables à froid avec cônes de contrainte intégrés) redistribuent progressivement la contrainte du champ électrique, empêchant une rupture localisée.',
            },
          ],
        },
      ],
    },

    // ============================================================
    // PARTIE 3 — SYSTÈMES DE CÂBLAGE
    // AMT C : Installe, entretient et maintient les systèmes de câblage (34 %)
    // Tâches : C-16 Chemins de câbles/conducteurs (33 %), C-17 Circuits de dérivation (30 %),
    //         C-18 CVAC (10 %), C-19 Chauffage électrique (14 %),
    //         C-20 Éclairage de secours/issue (11 %), C-21 Protection cathodique (2 %)
    // ============================================================
    {
      id: 'elec-part-3',
      number: 3,
      title: 'Systèmes de câblage',
      description: 'La plus grande section de l\'examen du Sceau rouge — chemins de câbles, conducteurs, câbles, circuits de dérivation, éclairage, connexions CVAC, chauffage électrique et éclairage de secours.',
      chapters: [

        // ─────────────────────────────────────────────────────────
        // CHAPITRE 7 — Chemins de câbles, conducteurs, câbles et boîtiers (AMT C-16)
        // ─────────────────────────────────────────────────────────
        {
          id: 'elec-ch-07',
          number: 7,
          title: 'Chemins de câbles, conducteurs, câbles et boîtiers',
          subtitle: 'AMT C-16 · Chemins de câbles, conducteurs, câbles et boîtiers (33 % de l\'AMT C)',
          isFree: false,
          estimatedMinutes: 65,
          sections: [
            {
              id: 'elec-ch07-s1',
              title: '7.1 Conducteurs et câbles',
              content: [
                {
                  type: 'paragraph',
                  text: 'Les conducteurs sont les éléments conducteurs de courant d\'un système électrique. La sélection du type et de la taille corrects des conducteurs est l\'une des compétences les plus fondamentales du métier — elle est régie par le CCE et implique d\'équilibrer l\'ampacité, la chute de tension, la température nominale de l\'isolation et l\'environnement physique.',
                },
                {
                  type: 'infoBox',
                  title: 'Matériaux conducteurs',
                  items: [
                    'Cuivre — le plus courant ; excellente conductivité, facile à terminer, pas d\'antioxydant nécessaire (mais utilisé dans certaines applications)',
                    'Aluminium — plus léger et moins cher que le cuivre ; nécessite un composé antioxydant à toutes les connexions ; la taille du conducteur est généralement de 2 calibres AWG plus gros que le cuivre équivalent',
                    'Aluminium cuivré — âme en aluminium avec enveloppe en cuivre ; pas autorisé dans toutes les applications',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Types de câbles courants (annexe B du CCE)',
                  items: [
                    'NMD90 (Loomex®) — câble à gaine non métallique pour les endroits secs intérieurs résidentiels ; température nominale 90 °C',
                    'AC90 (BX) — câble armé avec armure d\'acier interverrouillée ; température nominale 90 °C ; utilisé dans le commercial et l\'industriel où l\'armure offre une protection mécanique et constitue un chemin de mise à la terre valide',
                    'TECK90 — câble à isolation thermoplastique, blindage en cuivre, gaine PVC ; température nominale 90 °C ; admissible pour l\'enfouissement direct et les chemins de câbles',
                    'Câble minéral isolé (MI) — conducteurs en cuivre dans une isolation en oxyde de magnésium, gaine en cuivre ; température nominale jusqu\'à 250 °C ; utilisé dans les circuits d\'alarme incendie et les environnements à haute température',
                    'RW90 XLPE — isolation polyéthylène réticulé ; température nominale 90 °C ; utilisé dans les chemins de câbles et l\'enfouissement direct',
                    'Câble URD — câble de distribution résidentiel souterrain ; enfouissement direct',
                    'Câbles coaxiaux et de données — couverts par les sections 60 et 12 du CCE',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Dimensionnement des conducteurs — Règles clés du CCE',
                  items: [
                    'Ampacité — courant maximal qu\'un conducteur peut supporter sans dépasser sa température nominale ; se trouve dans les tableaux 1, 2 ou 3 du CCE',
                    'Facteurs de correction — température ambiante supérieure à 30 °C et plus de 3 conducteurs porteurs de courant regroupés nécessitent une déclassification',
                    'Chute de tension — le CCE recommande un maximum de 3 % pour les circuits de dérivation, 5 % pour les feeders + circuits de dérivation combinés (règle 8-102)',
                    'Formule de chute de tension : VD = (2 × L × R × I) / 1000 pour le monophasé ; VD = (√3 × L × R × I) / 1000 pour le triphasé (où R est la résistance par km des tableaux du CCE)',
                    'Taille minimale des conducteurs — #14 AWG cuivre pour les circuits de dérivation ; #12 AWG pour les circuits 20 A',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'Les conducteurs doivent être installés sans endommager l\'isolation et sans contrainte mécanique aux points de terminaison. Code de couleurs selon la règle 4-032 du CCE : noir et rouge (et bleu pour le triphasé) pour les conducteurs de phase non mis à la terre ; blanc pour les conducteurs mis à la terre (neutre) ; vert ou nu pour les conducteurs de mise à la terre des équipements.',
                },
              ],
            },
            {
              id: 'elec-ch07-s2',
              title: '7.2 Conduits et raccords',
              content: [
                {
                  type: 'paragraph',
                  text: 'Les systèmes de conduits protègent les conducteurs contre les dommages physiques et fournissent un chemin pour l\'installation des conducteurs et les modifications futures. Le type de conduit choisi dépend de l\'environnement, de la protection mécanique requise et de la possibilité que le conduit serve de conducteur de mise à la terre des équipements.',
                },
                {
                  type: 'infoBox',
                  title: 'Types de conduits',
                  items: [
                    'Conduit métallique rigide (RMC/RSC) — acier galvanisé à chaud ; la protection mécanique la plus solide ; approuvé pour tous les endroits, y compris l\'enfouissement direct et le noyage dans le béton',
                    'Conduit métallique intermédiaire (IMC) — paroi plus mince que le RMC ; mêmes raccords ; mêmes applications',
                    'Tube métallique électrique (EMT) — acier à paroi mince ; non fileté ; utiliser des raccords à vis ou à compression ; intérieur et extérieur hors sol ; le conduit le plus courant dans la construction commerciale',
                    'Conduit rigide non métallique (RNMC/PVC) — non conducteur ; résistant à la corrosion ; pour les endroits souterrains et humides ; ne peut pas être utilisé comme conducteur de mise à la terre ; gris = électrique (approuvé CCE), pas le PVC de plomberie',
                    'Conduit métallique flexible (FMC / Greenfield) — bande d\'acier interverrouillée ; utilisé pour les connexions finales aux équipements (moteurs, luminaires) où il y a des vibrations ou des mouvements ; maximum 1,8 m sauf protection',
                    'Conduit métallique flexible étanche au liquide (LFMC) — FMC avec gaine PVC ; pour les endroits humides et les connexions d\'équipements extérieurs',
                    'Conduit non métallique flexible étanche au liquide (LFNMC) — pour les connexions résistantes aux produits chimiques, humides ou extérieures',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Règles de remplissage des conduits (annexe B du CCE, tableaux)',
                  items: [
                    'Un conducteur — 53 % de la section transversale du conduit',
                    'Deux conducteurs — 31 % de la section transversale du conduit',
                    'Trois conducteurs ou plus — 40 % de la section transversale du conduit',
                    'Le remplissage est calculé en utilisant le diamètre extérieur du conducteur (y compris l\'isolation) des tableaux du CCE',
                    'Rapport de coincement — rapport du diamètre intérieur du conduit au diamètre extérieur du conducteur ; s\'il est compris entre 2,8 et 3,2, un coincement peut se produire lors du tirage et un conduit plus grand doit être envisagé',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'Tous les coudes de conduit doivent être réalisés avec une cintreuse approuvée pour éviter de les pincer ou de les aplatir. Coudes standard : 90° (montant), décalage, selle (coude à 3 points pour un obstacle unique), dos-à-dos. Le CCE limite le nombre total de coudes entre les points de tirage : pas plus de 360° de coudes totaux (équivalent à quatre coudes à 90°) entre les boîtes de jonction ou les corps de conduit.',
                },
              ],
            },
            {
              id: 'elec-ch07-s3',
              title: '7.3 Chemins de câbles, goulottes et autres chemins de câbles',
              content: [
                {
                  type: 'infoBox',
                  title: 'Autres types de chemins de câbles',
                  items: [
                    'Chemin de câbles — type échelle, fond plein, auge ventilée ou canal ; supporte les câbles sans les enfermer ; utilisé dans les usines industrielles et les centres de données',
                    'Goulottes (collecteurs) — canaux en tôle ou PVC avec couvercles amovibles ; utilisés pour l\'épissage et la distribution des conducteurs',
                    'Goulottes métalliques de surface (Wiremold®) — canaux rectangulaires plats montés en surface sur les murs ; pour les rénovations où le travail dans le mur n\'est pas pratique',
                    'Systèmes de conduits sous dalles — coulés dans les dalles de béton ; pour les immeubles de bureaux avec des changements fréquents de prises',
                    'Jeux de barres (busway) — barres omnibus en cuivre ou aluminium pré-assemblées dans une enveloppe ; utilisés pour les feeders à courant élevé dans les applications industrielles ; le type à prises permet des dérivations à tout endroit',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch07-s4',
              title: '7.4 Boîtiers et enveloppes',
              content: [
                {
                  type: 'paragraph',
                  text: 'Les boîtiers électriques fournissent un espace protégé requis par le code pour les épissures, les connexions de dispositifs et le support des luminaires. Le CCE exige un boîtier à chaque épissure, connexion ou emplacement de dispositif, sans épissures cachées (dissimulées) en dehors d\'un boîtier.',
                },
                {
                  type: 'infoBox',
                  title: 'Calculs de remplissage des boîtiers (règle 12-3034 du CCE)',
                  items: [
                    'Chaque conducteur qui provient de l\'extérieur du boîtier et se termine ou est épissé = 1 unité',
                    'Chaque conducteur qui traverse le boîtier = 1 unité',
                    'Tige de luminaire, hickey ou raccord = 1 unité',
                    'Tous les fils de mise à la terre combinés = 1 unité',
                    'Chaque patère supportant un ou plusieurs dispositifs (interrupteur, prise) = 1 unité par dispositif',
                    'Volume de boîtier requis : chaque unité de conducteur × volume de conducteur selon le tableau 12-1 (par exemple, #12 AWG = 20,4 cm³ ; #14 AWG = 16,4 cm³)',
                  ],
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: 'elec-q07-1',
              question: 'Un circuit de dérivation monophasé de 30 mètres, 120 V utilise des conducteurs en cuivre #12 AWG (résistance = 5,21 Ω/km). Le circuit alimente une charge continue de 15 A. Quelle est la chute de tension approximative ?',
              options: ['1,6 V', '3,1 V', '4,7 V', '6,2 V'],
              correctIndex: 2,
              explanation: 'VD = 2 × L × R × I / 1000 = 2 × 30 m × 5,21 Ω/km × 15 A / 1000 = 2 × 30 × 0,00521 × 15 = 4,69 V ≈ 4,7 V. Le pourcentage de chute de tension = 4,7 V / 120 V = 3,9 %, ce qui dépasse la recommandation de 3 % du CCE pour les circuits de dérivation — un conducteur plus gros devrait être envisagé.',
            },
            {
              id: 'elec-q07-2',
              question: 'Trois conducteurs #10 AWG sont installés dans un conduit. Le remplissage maximal du conduit est de 40 % de sa section transversale. À quoi cette règle s\'applique-t-elle ?',
              options: [
                'À tout nombre de conducteurs dans tout type de conduit',
                'À trois conducteurs ou plus dans tout type de conduit',
                'À deux conducteurs ; trois ou plus utilisent 53 %',
                'Uniquement aux conducteurs avec une isolation plus épaisse que 1,5 mm',
              ],
              correctIndex: 1,
              explanation: 'Selon le tableau B-2 du CCE (remplissage des conduits), trois conducteurs ou plus dans un conduit sont limités à 40 % de la section transversale interne du conduit. Un conducteur est limité à 53 %, et deux conducteurs à 31 %. Ces limites garantissent un espace de tirage suffisant et une dissipation thermique adéquate.',
            },
            {
              id: 'elec-q07-3',
              question: 'Quel type de conduit est autorisé pour l\'enfouissement direct et le noyage dans le béton, et offre le plus haut niveau de protection mécanique ?',
              options: ['EMT', 'FMC', 'RNMC (PVC)', 'RMC (RSC)'],
              correctIndex: 3,
              explanation: 'Le conduit métallique rigide (RMC, également appelé RSC — Rigid Steel Conduit) est le conduit à paroi la plus épaisse et est approuvé pour tous les endroits, y compris l\'enfouissement direct, le noyage dans le béton et les emplacements dangereux. L\'EMT ne peut pas être enterré directement. Le FMC n\'est pas pour l\'enfouissement. Le PVC (RNMC) ne peut pas servir de conducteur de mise à la terre des équipements.',
            },
          ],
        },

        // ─────────────────────────────────────────────────────────
        // CHAPITRE 8 — Circuits de dérivation, dispositifs et systèmes d'éclairage (AMT C-17)
        // ─────────────────────────────────────────────────────────
        {
          id: 'elec-ch-08',
          number: 8,
          title: 'Circuits de dérivation, dispositifs et systèmes d\'éclairage',
          subtitle: 'AMT C-17 · Circuits de dérivation et dispositifs (30 % de l\'AMT C)',
          isFree: false,
          estimatedMinutes: 60,
          sections: [
            {
              id: 'elec-ch08-s1',
              title: '8.1 Luminaires et lampes',
              content: [
                {
                  type: 'paragraph',
                  text: 'Les luminaires sont choisis en fonction du niveau d\'éclairage requis (mesuré en lux), de l\'environnement (humide, mouillé, sec, dangereux) et des exigences d\'efficacité énergétique. Le CCE exige que les luminaires soient homologués et étiquetés pour leur emplacement prévu.',
                },
                {
                  type: 'infoBox',
                  title: 'Types de luminaires',
                  items: [
                    'Encastrés (lampes encastrées) — installés dans les cavités du plafond ; doivent être de classe IC (contact avec l\'isolant) si l\'isolant les recouvre',
                    'Montés en surface — fixés directement au plafond ou au mur',
                    'Suspendus — suspendus au plafond par des tiges, des câbles ou des conduits',
                    'Muraux (appliques)',
                    'Montés sur poteaux (luminaires sur poteau) — éclairage routier, de stationnement et sportif',
                    'Éclairage sur rail — têtes réglables sur un rail électrifié',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Technologies de lampes',
                  items: [
                    'DEL (diode électroluminescente) — la plus économe en énergie ; longue durée de vie ; semi-conducteur ; sans mercure ; remplace rapidement toutes les autres technologies',
                    'Fluorescent — tubes T5, T8, T12 ; nécessite un ballast ; contient du mercure — doit être éliminé comme déchet dangereux',
                    'Décharge à haute intensité (DHI) — halogénures métalliques, sodium haute pression, vapeur de mercure ; nécessite un ballast et un allumeur ; longs temps d\'allumage et de rallumage',
                    'Incandescent — le moins efficace ; en voie d\'élimination',
                    'Éclairage à semi-conducteurs (SSL) — large catégorie incluant la DEL',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch08-s2',
              title: '8.2 Dispositifs de câblage',
              content: [
                {
                  type: 'infoBox',
                  title: 'Types de dispositifs de câblage',
                  items: [
                    'Prises de courant — standard 15 A / 125 V (NEMA 5-15), 20 A / 125 V (NEMA 5-20), 30 A / 250 V pour sécheuse (NEMA 14-30), 50 A / 250 V pour cuisinière (NEMA 14-50)',
                    'Interrupteurs — unipolaires, à 3 voies (permet la commande depuis deux endroits), à 4 voies (permet la commande depuis trois endroits ou plus)',
                    'Gradateurs — contrôlent les niveaux d\'éclairage ; doivent être compatibles avec les charges DEL lorsqu\'ils sont utilisés avec des DEL',
                    'Sectionneurs — sectionneurs fusibles, sectionneurs non fusibles, interrupteurs de sécurité ; requis à portée de vue et accessibles pour les moteurs et les équipements CVAC',
                    'Relais et contacteurs — interrupteurs électriques pour la commande à distance ou automatique des charges',
                    'Minuteries et capteurs — horloges, détecteurs de présence/vacance, cellules photoélectriques',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch08-s3',
              title: '8.3 Commandes d\'éclairage',
              content: [
                {
                  type: 'paragraph',
                  text: 'Les exigences de gestion de l\'énergie dans les codes du bâtiment imposent de plus en plus des commandes d\'éclairage automatiques. Les systèmes de commande d\'éclairage modernes réduisent la consommation d\'énergie et permettent aux bâtiments d\'obtenir une certification LEED.',
                },
                {
                  type: 'infoBox',
                  title: 'Technologies de commande d\'éclairage',
                  items: [
                    'Détecteurs de présence/vacance — allument/éteignent les lumières en fonction de la détection de mouvement ; infrarouge passif (PIR), ultrasonique ou double technologie',
                    'Cellule photoélectrique (capteur de lumière du jour) — réduit l\'éclairage artificiel lorsque la lumière naturelle est suffisante',
                    'Horloges — horaires programmés pour l\'éclairage extérieur et après les heures de travail',
                    'Gradateurs — réduisent la puissance des lampes ; doivent être compatibles avec la technologie des lampes (gradateurs compatibles DEL)',
                    'Commutation basse tension — commande centralisée par relais ; câblage de commande 24 V vers les points de commutation',
                    'Contrôleurs d\'éclairage programmables — intègrent toutes les fonctions de commande ; peuvent être programmés pour des scènes et des horaires',
                    'DALI (interface d\'éclairage adressable numérique) — protocole numérique permettant l\'adressage et la gradation individuels des lampes',
                    'Commandes sans fil — Zigbee, Z-Wave, DALI-2 sans fil ; pas de câblage de commande requis',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch08-s4',
              title: '8.4 Mâts d\'éclairage, systèmes d\'aide visuelle aéroportuaire et feux de circulation',
              content: [
                {
                  type: 'paragraph',
                  text: 'Les mâts d\'éclairage pour routes, stationnements et éclairage de zone nécessitent des procédures d\'installation spéciales. La base du mât est en béton préfabriqué ou coulé sur place, le système de conduits souterrain mène à un regard dans le mât, et le luminaire est câblé et monté au sommet.',
                },
                {
                  type: 'paragraph',
                  text: 'L\'éclairage des pistes d\'aéroport est un domaine spécialisé impliquant des régulateurs de courant constant, des circuits en série (toutes les lampes d\'un circuit de piste sont connectées en série), des transformateurs d\'isolement à chaque luminaire et des systèmes de commande ARCAL spécifiques. Ces systèmes sont testés selon les exigences de Transports Canada et de l\'OACI.',
                },
                {
                  type: 'paragraph',
                  text: 'Les systèmes de feux de circulation comprennent les têtes de feux, les capteurs de véhicules (boucles inductives, caméras), les boutons-poussoirs pour piétons, les contrôleurs de feux de circulation et les modems de communication. Les feux sont programmés et testés par l\'électricien en coordination avec la municipalité ou l\'autorité de transport.',
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: 'elec-q08-1',
              question: 'Un luminaire encastré est installé dans un plafond où de l\'isolant soufflé sera placé directement sur le luminaire. Quelle est l\'exigence minimale ?',
              options: [
                'Le luminaire doit être classé pour les endroits humides',
                'Le luminaire doit être de classe IC (contact avec l\'isolant)',
                'Un espace d\'air minimum de 50 mm doit être maintenu autour du luminaire',
                'Le luminaire doit être une DEL de type AT (étanche à l\'air)',
              ],
              correctIndex: 1,
              explanation: 'Lorsque de l\'isolant doit entrer en contact avec ou recouvrir un luminaire encastré, le luminaire doit être de classe IC (Insulation Contact). Les luminaires non IC peuvent surchauffer si de l\'isolant les recouvre, créant un risque d\'incendie. Les luminaires IC sont conçus pour fonctionner en toute sécurité avec de l\'isolant en contact.',
            },
            {
              id: 'elec-q08-2',
              question: 'Dans un circuit d\'éclairage de piste d\'aéroport en série, pourquoi un transformateur d\'isolement est-il installé à chaque lampe de piste individuelle ?',
              options: [
                'Pour élever la tension au niveau d\'éclairage requis',
                'Pour isoler chaque luminaire afin qu\'un défaut sur une lampe n\'interrompe pas tout le circuit en série',
                'Pour fournir une protection GFCI à chaque lampe',
                'Pour réguler le courant indépendamment à chaque luminaire',
              ],
              correctIndex: 1,
              explanation: 'Les feux de piste d\'aéroport sont câblés en circuit série alimenté par un régulateur de courant constant. Un transformateur d\'isolement à chaque luminaire isole la lampe de sorte que si la lampe tombe en panne (circuit ouvert), le circuit série continue de circuler à travers le secondaire du transformateur — maintenant ainsi toutes les autres lampes du circuit.',
            },
          ],
        },

        // ─────────────────────────────────────────────────────────
        // CHAPITRE 9 — CVAC, chauffage électrique, éclairage de secours et protection cathodique (AMT C-18 à C-21)
        // ─────────────────────────────────────────────────────────
        {
          id: 'elec-ch-09',
          number: 9,
          title: 'CVAC, chauffage électrique, éclairage de secours et protection cathodique',
          subtitle: 'AMT C-18 CVAC (10 %) · C-19 Chauffage électrique (14 %) · C-20 Éclairage d\'issue/secours (11 %) · C-21 Protection cathodique (2 %)',
          isFree: false,
          estimatedMinutes: 55,
          sections: [
            {
              id: 'elec-ch09-s1',
              title: '9.1 Connexions électriques et commandes CVAC (Tâche C-18)',
              content: [
                {
                  type: 'paragraph',
                  text: 'Les systèmes CVAC sont installés par les corps de métier mécaniques mais connectés électriquement par les électriciens en construction. L\'électricien installe le câblage du circuit de dérivation, le sectionneur, la protection contre les surintensités et le câblage de commande pour tout l\'équipement CVAC.',
                },
                {
                  type: 'infoBox',
                  title: 'Exigences électriques CVAC',
                  items: [
                    'Dimensionnement du circuit de dérivation — basé sur les ampères à pleine charge (FLA) de la plaque signalétique du compresseur, du moteur de ventilateur et des chauffages auxiliaires',
                    'Sectionneur — doit être à portée de vue et facilement accessible pour l\'équipement (dans les 9 m, sauf s\'il est verrouillable)',
                    'Protection contre les surintensités — dimensionnée selon la plaque signalétique ou les exigences du CCE pour les circuits moteurs',
                    'Tension de commande — la plupart des systèmes CVAC utilisent des circuits de commande de 24 V CA (abaissée par un transformateur intégré)',
                    'Vérification — tester la tension, le courant et la rotation spécifiés après la connexion',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Composants de commande CVAC',
                  items: [
                    'Thermostat — capteur de température qui commande le chauffage/refroidissement ; connexions 24 V à deux à cinq fils',
                    'Pressostats — protection haute et basse pression de fluide frigorigène ; arrêtent le compresseur en cas de pressions anormales',
                    'Thermostats — protection contre le gel, limite haute température des conduits',
                    'Débitmètres — confirment le débit d\'air avant d\'alimenter les éléments chauffants électriques',
                    'Variateurs de fréquence (VFD) — contrôlent la vitesse des ventilateurs et des pompes pour économiser l\'énergie',
                    'Contacteurs et relais — commutent des charges haute tension à partir de signaux de commande basse tension',
                    'Verrouillages électriques — empêchent le fonctionnement simultané de modes d\'équipement contradictoires',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch09-s2',
              title: '9.2 Systèmes de chauffage électrique (Tâche C-19)',
              content: [
                {
                  type: 'paragraph',
                  text: 'Les systèmes de chauffage électrique utilisent des éléments chauffants à résistance pour convertir directement l\'énergie électrique en chaleur. Ils sont efficaces à 100 % sur le lieu d\'utilisation, mais sont généralement plus coûteux à exploiter que le gaz ou les pompes à chaleur. Le CCE a des exigences de câblage spécifiques pour les radiateurs électriques en raison du facteur de charge continue.',
                },
                {
                  type: 'infoBox',
                  title: 'Types de systèmes de chauffage électrique',
                  items: [
                    'Radiateurs à plinthe — radiateurs à convection ; les plus courants dans le résidentiel ; 240 V monophasé ; calibre de fil minimum #12 AWG',
                    'Aérothermes — radiateurs à air pulsé avec ventilateur ; utilisés dans le commercial et l\'industriel',
                    'Panneaux radiants au plafond/mur — chaleur radiante ; confort sans mouvement d\'air',
                    'Câbles chauffants de sol — encastrés dans ou sous le sol ; câbles de faible puissance',
                    'Câbles chauffants / protection contre le gel — câbles enroulés autour des tuyaux pour éviter le gel ; thermostatés',
                    'Aérothermes pour conduits — éléments chauffants électriques installés dans les conduits CVAC ; nécessitent un verrouillage par débitmètre',
                    'Chauffage par induction — chauffage industriel',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'Les charges de chauffage électrique sont continues — le CCE exige que les circuits de dérivation pour les radiateurs électriques soient dimensionnés à 125 % de la puissance nominale de la plaque signalétique du radiateur. Le radiateur ne doit jamais dépasser 80 % du calibre du circuit de dérivation. Un radiateur de 1500 W tire 1500 W ÷ 240 V = 6,25 A en continu ; le calibre minimum du disjoncteur est de 6,25 A × 1,25 = 7,8 A → utiliser un disjoncteur de 15 A (calibre standard suivant).',
                },
              ],
            },
            {
              id: 'elec-ch09-s3',
              title: '9.3 Éclairage de secours et d\'issue (Tâche C-20)',
              content: [
                {
                  type: 'paragraph',
                  text: 'Les systèmes d\'éclairage de secours et d\'issue sont des systèmes de sécurité des personnes exigés par le Code national du bâtiment (CNB) et appliqués par l\'AHJ. Ils doivent éclairer les voies d\'évacuation en cas de panne de l\'éclairage normal. Les électriciens en construction installent et entretiennent ces systèmes.',
                },
                {
                  type: 'infoBox',
                  title: 'Types de systèmes d\'éclairage de secours',
                  items: [
                    'Unité autonome — batterie et chargeur intégrés au luminaire ; testé en appuyant sur le bouton de test mensuellement ; batterie remplacée tous les 4–5 ans',
                    'Système central à batterie — une batterie centrale alimente tous les luminaires de secours ; plus fiable mais plus complexe à installer',
                    'Alimenté par génératrice — luminaires de secours sur un circuit dédié alimenté par la génératrice de secours ; temps de transfert minimum de 10 secondes selon le CNB',
                    'Panneaux de sortie — DEL ou fluorescents ; doivent être éclairés en continu ; batterie de secours requise',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'Les circuits d\'éclairage de secours doivent être sur un circuit dédié qui n\'est normalement pas soumis à la commutation. Le CCE exige que le circuit soit identifié par des conducteurs rouges ou des étiquettes rouges lorsqu\'il partage un conduit avec d\'autres circuits. Tests : test fonctionnel mensuel (30 secondes), test de décharge à pleine charge annuel (90 minutes selon ULC S524 et CNB).',
                },
              ],
            },
            {
              id: 'elec-ch09-s4',
              title: '9.4 Systèmes de protection cathodique (Tâche C-21)',
              content: [
                {
                  type: 'paragraph',
                  text: 'La protection cathodique empêche la corrosion des structures métalliques enterrées (pipelines, réservoirs de stockage, aciers d\'armature) en rendant la structure la cathode d\'une cellule électrochimique. Les électriciens en construction installent et entretiennent les systèmes de protection cathodique à courant imposé (ICCP).',
                },
                {
                  type: 'keyTerm',
                  term: 'Protection cathodique à courant imposé (ICCP)',
                  definition: 'Utilise une alimentation en courant continu pour forcer un courant de protection à travers le sol d\'une anode inerte (graphite, platine, oxyde métallique mixte) à la structure protégée. Le courant contrecarre le processus naturel de corrosion électrochimique. Utilisé sur les pipelines, les structures marines et les réservoirs de stockage souterrains.',
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: 'elec-q09-1',
              question: 'Un radiateur électrique à plinthe de 2400 W, 240 V doit être installé. Quelle est la taille minimale du disjoncteur de dérivation requise par le CCE (règle de charge continue) ?',
              options: ['10 A', '15 A', '20 A', '25 A'],
              correctIndex: 1,
              explanation: 'Courant de charge = 2400 W ÷ 240 V = 10 A. Règle de charge continue : disjoncteur ≥ 10 A × 125 % = 12,5 A. Le calibre de disjoncteur standard suivant 12,5 A est 15 A. Par conséquent, un disjoncteur bipolaire de 15 A, 240 V avec des conducteurs #12 AWG est le minimum requis.',
            },
            {
              id: 'elec-q09-2',
              question: 'Selon le Code national du bâtiment, quel est le temps de transfert maximal autorisé pour qu\'une génératrice de secours rétablisse l\'alimentation de l\'éclairage de secours ?',
              options: ['5 secondes', '10 secondes', '30 secondes', '60 secondes'],
              correctIndex: 1,
              explanation: 'Le Code national du bâtiment exige que l\'alimentation de secours soit rétablie dans les 10 secondes suivant la panne de courant normale pour l\'éclairage de secours et les systèmes de sécurité des personnes. Ceci est réalisé grâce au commutateur de transfert automatique et au système de démarrage rapide de la génératrice.',
            },
          ],
        },
      ],
    },

    // ============================================================
    // PARTIE 4 — MOTEURS ET SYSTÈMES DE COMMANDE
    // AMT D : Installe, entretient et maintient les moteurs et les systèmes de commande (18 %)
    // Tâches : D-22 Démarreurs/commandes de moteurs (35 %), D-23 Variateurs (22 %),
    //         D-24 Moteurs (28 %), D-25 Systèmes de commande automatisés (13 %)
    // ============================================================
    {
      id: 'elec-part-4',
      number: 4,
      title: 'Moteurs et systèmes de commande',
      description: 'Démarreurs de moteurs, variateurs, moteurs monophasés et triphasés, moteurs à courant continu, automates et systèmes de commande automatisés — connaissances essentielles pour le travail électrique industriel et commercial.',
      chapters: [

        // ─────────────────────────────────────────────────────────
        // CHAPITRE 10 — Démarreurs et commandes de moteurs (AMT D-22)
        // ─────────────────────────────────────────────────────────
        {
          id: 'elec-ch-10',
          number: 10,
          title: 'Démarreurs et commandes de moteurs',
          subtitle: 'AMT D-22 · Démarreurs et commandes de moteurs (35 % de l\'AMT D)',
          isFree: false,
          estimatedMinutes: 60,
          sections: [
            {
              id: 'elec-ch10-s1',
              title: '10.1 Composants d\'un circuit moteur',
              content: [
                {
                  type: 'paragraph',
                  text: 'Tout circuit moteur nécessite : un conducteur de circuit de dérivation, une protection contre les surintensités, un sectionneur, un contrôleur de moteur (démarreur) et une protection contre les surcharges. Comprendre la fonction et les exigences du CCE pour chaque composant est essentiel.',
                },
                {
                  type: 'infoBox',
                  title: 'Composants d\'un circuit moteur — Résumé',
                  items: [
                    'Conducteurs du circuit de dérivation — dimensionnés à 125 % minimum du FLA du moteur selon la règle 28-106 du CCE',
                    'Protection du circuit de dérivation contre les surintensités (protection contre les courts-circuits) — fusible ou disjoncteur ; dimensionné plus grand que les surcharges pour permettre l\'appel de courant du moteur ; le tableau 29 du CCE donne les valeurs maximales',
                    'Sectionneur — doit être à portée de vue du moteur et du contrôleur ; verrouillable en position ouverte (arrêt)',
                    'Contrôleur de moteur (démarreur) — contrôle le démarrage et l\'arrêt ; peut inclure l\'inversion de marche, la tension réduite, la multivites',
                    'Protection contre les surcharges — relais thermique ou électronique ; protège les enroulements du moteur contre les surintensités soutenues ; se déclenche à 115–125 % du FLA',
                  ],
                },
                {
                  type: 'keyTerm',
                  term: 'Ampères à pleine charge (FLA)',
                  definition: 'Courant absorbé par le moteur à sa puissance nominale en chevaux, à sa tension nominale et à sa fréquence nominale. Se trouve sur la plaque signalétique du moteur. Tout dimensionnement de circuit moteur est basé sur le FLA.',
                },
                {
                  type: 'keyTerm',
                  term: 'Courant de rotor bloqué (LRC / courant d\'appel)',
                  definition: 'Courant absorbé par un moteur au moment du démarrage, avant que le rotor ne commence à tourner. Généralement 6 à 8 fois le FLA pour les moteurs à induction à cage d\'écureuil. La protection contre les surintensités du circuit de dérivation doit supporter cet appel de courant sans déclenchement.',
                },
              ],
            },
            {
              id: 'elec-ch10-s2',
              title: '10.2 Démarreurs directs et démarreurs magnétiques',
              content: [
                {
                  type: 'paragraph',
                  text: 'Un démarreur de moteur magnétique se compose d\'un contacteur (contacts de puissance principaux) et d\'un relais de surcharge. Le contacteur est excité par le circuit de commande, qui comprend les boutons-poussoirs marche/arrêt, les contacts auxiliaires (pour le maintien) et les verrouillages.',
                },
                {
                  type: 'infoBox',
                  title: 'Logique du circuit de commande — Commande à trois fils (maintenue)',
                  items: [
                    'Bouton-poussoir MARCHE (NO) — ferme momentanément pour exciter la bobine du contacteur',
                    'Bouton-poussoir ARRÊT (NF) — normalement fermé ; l\'ouverture désalimente la bobine',
                    'Contact de maintien (de scellement) — contact auxiliaire NO sur le contacteur qui se ferme lorsque le contacteur s\'excite, créant un chemin parallèle autour du bouton MARCHE ; maintient la bobine excitée après le relâchement du bouton MARCHE',
                    'Contact du relais de surcharge — contact normalement fermé en série dans le circuit de la bobine ; s\'ouvre en cas de surcharge, désalimentant le contacteur',
                    'La commande à trois fils assure la protection contre les basses tensions — le moteur ne redémarre pas automatiquement après une panne de courant car le contact de maintien s\'ouvre lorsque le contacteur se désalimente',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Méthodes de démarrage à tension réduite',
                  items: [
                    'Démarrage étoile-triangle — le moteur démarre en étoile (réduit la tension à chaque enroulement de 1/√3) ; passe en triangle pour le fonctionnement à pleine tension ; réduit l\'appel de courant à 33 % mais réduit également le couple de démarrage à 33 %',
                    'Démarrage par autotransformateur — utilise un transformateur à prises pour appliquer 50–80 % de la tension au démarrage ; passage à pleine tension après l\'accélération du moteur',
                    'Démarreur progressif — dispositif électronique utilisant des thyristors pour augmenter progressivement la tension ; couple doux, pas de pics de courant après la période de démarrage ; pas de contrôle de vitesse en fonctionnement',
                    'Variateur de fréquence — voir chapitre 11',
                    'Démarrage par résistance — insère une résistance dans le circuit du rotor (moteurs à rotor bobiné uniquement) ; réduit l\'appel de courant, améliore le couple de démarrage',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch10-s3',
              title: '10.3 Dispositifs de commande de moteurs',
              content: [
                {
                  type: 'infoBox',
                  title: 'Dispositifs d\'entrée de commande de moteurs',
                  items: [
                    'Boutons-poussoirs — maintenus (à accrochage) ou momentanés (à rappel) ; contacts NO ou NF',
                    'Interrupteurs de fin de course — actionnés mécaniquement par le mouvement de l\'équipement ; détection de position',
                    'Interrupteurs à flotteur — contrôle de niveau de liquide ; actionnés par la montée ou la descente du flotteur',
                    'Pressostats — actionnés lorsque la pression du système atteint un point de consigne ; protection des pompes et compresseurs',
                    'Thermostats — actionnés par la température ; commande des ventilateurs, verrouillages de sécurité',
                    'Détecteurs de proximité — inductifs, capacitifs, photoélectriques, ultrasoniques — aucun contact mécanique requis',
                    'Sélecteurs — interrupteurs à plusieurs positions pour la commande manuelle/auto, manuel/arrêt/auto (HOA)',
                  ],
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: 'elec-q10-1',
              question: 'Un moteur triphasé de 10 HP, 600 V, a un FLA de plaque signalétique de 11,0 A. Quelle est l\'ampacité minimale des conducteurs du circuit de dérivation requise par le CCE ?',
              options: ['11,0 A', '13,75 A', '15,0 A', '17,0 A'],
              correctIndex: 1,
              explanation: 'Règle 28-106 du CCE : les conducteurs du circuit de dérivation des moteurs doivent être dimensionnés à 125 % minimum du FLA du moteur. 11,0 A × 125 % = 13,75 A. Choisir des conducteurs avec une ampacité d\'au moins 13,75 A (minimum #14 AWG cuivre ou #12 AWG cuivre, confirmé par le tableau 2 du CCE).',
            },
            {
              id: 'elec-q10-2',
              question: 'Quel est le but du contact auxiliaire de "maintien" ou de "scellement" dans un circuit de commande de démarreur de moteur à trois fils ?',
              options: [
                'Maintenir le moteur à vitesse constante pendant les variations de charge',
                'Maintenir la bobine du contacteur excitée après le relâchement du bouton MARCHE',
                'Fournir une protection contre les surcharges pendant l\'accélération du moteur',
                'Empêcher le moteur d\'inverser sa direction',
              ],
              correctIndex: 1,
              explanation: 'Le contact de maintien auxiliaire est un contact normalement ouvert sur le contacteur principal qui se ferme lorsque le contacteur s\'excite. Il crée un chemin parallèle autour du bouton-poussoir momentané MARCHE, maintenant le circuit de la bobine fermé après le relâchement du bouton de marche. Sans lui, le moteur s\'arrêterait dès que le bouton MARCHE est relâché.',
            },
          ],
        },

        // ─────────────────────────────────────────────────────────
        // CHAPITRE 11 — Variateurs, moteurs et systèmes de commande automatisés (AMT D-23, D-24, D-25)
        // ─────────────────────────────────────────────────────────
        {
          id: 'elec-ch-11',
          number: 11,
          title: 'Variateurs, moteurs et systèmes de commande automatisés',
          subtitle: 'AMT D-23 Variateurs (22 %) · D-24 Moteurs (28 %) · D-25 Commandes automatisées (13 %)',
          isFree: false,
          estimatedMinutes: 65,
          sections: [
            {
              id: 'elec-ch11-s1',
              title: '11.1 Variateurs de fréquence (variateurs CA)',
              content: [
                {
                  type: 'paragraph',
                  text: 'Un variateur de fréquence convertit une alimentation CA à fréquence fixe en une sortie CA à fréquence et tension variables, permettant un contrôle précis de la vitesse des moteurs à induction CA. Les VFD sont la méthode la plus économe en énergie pour le contrôle de vitesse des moteurs — réduire la vitesse du moteur à 80 % réduit la consommation d\'énergie à environ 51 % (relation de la loi du cube).',
                },
                {
                  type: 'infoBox',
                  title: 'Étages internes d\'un VFD',
                  items: [
                    'Étage redresseur — convertit l\'entrée CA en CC (pont de diodes non commandé)',
                    'Bus CC (filtre) — lisse la tension CC à l\'aide de gros condensateurs ; stocke l\'énergie',
                    'Étage onduleur — reconvertit le CC en CA à fréquence variable à l\'aide de commutateurs IGBT ; la MLI génère une onde sinusoïdale simulée',
                    'Carte de commande — traite le signal de référence de vitesse et la rétroaction ; génère les signaux de grille des IGBT',
                    'Filtre CEM — réduit les interférences électromagnétiques que les VFD peuvent produire sur le réseau d\'alimentation',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Considérations d\'installation des VFD',
                  items: [
                    'Inductance de ligne d\'entrée — réduit la distorsion harmonique sur l\'alimentation et protège le VFD des transitoires du réseau',
                    'Inductance de sortie — réduit le dV/dt (taux de montée de la tension) sur les câbles moteur ; réduit les dommages par courants de roulement sur les longs trajets de câble',
                    'Câble moteur blindé — requis pour les trajets de plus de quelques mètres pour empêcher le rayonnement CEM',
                    'Déclassement de la température du moteur — des moteurs adaptés aux VFD sont nécessaires pour un fonctionnement continu à basse vitesse car la vitesse du ventilateur d\'autorefroidissement diminue également',
                    'Contacteur de dérivation — permet au moteur de fonctionner directement si le VFD tombe en panne',
                    'Programmation — régler le FLA, la tension et la fréquence du moteur selon la plaque signalétique ; régler les rampes d\'accélération/décélération, les limites de courant et les paramètres de défaut',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch11-s2',
              title: '11.2 Variateurs CC',
              content: [
                {
                  type: 'paragraph',
                  text: 'Les variateurs CC contrôlent la vitesse et le couple des moteurs à courant continu en faisant varier la tension d\'induit et/ou le courant d\'excitation. Bien que les VFD CA aient largement remplacé les variateurs CC dans les nouvelles installations, les systèmes de variateurs CC restent en service dans de nombreuses applications industrielles.',
                },
                {
                  type: 'infoBox',
                  title: 'Composants d\'un variateur CC',
                  items: [
                    'Alimentation électrique — fournit une tension CC régulée au circuit de commande',
                    'Convertisseur (redresseur) — convertit le CA en CC contrôlé à l\'aide de thyristors ou d\'IGBT',
                    'Contrôle de vitesse — régule la tension d\'induit pour contrôler la vitesse',
                    'Contrôle de couple — ajuste le courant d\'induit pour contrôler le couple',
                    'Régulateur de champ — ajuste le courant d\'excitation pour l\'affaiblissement du champ au-dessus de la vitesse de base',
                    'Filtre CEM — réduit les harmoniques de ligne générées par la commutation des thyristors',
                    'Dispositifs de rétroaction — codeurs et tachymètres fournissent une rétroaction de vitesse pour le contrôle en boucle fermée',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch11-s3',
              title: '11.3 Moteurs monophasés, triphasés et à courant continu',
              content: [
                {
                  type: 'infoBox',
                  title: 'Types de moteurs monophasés',
                  items: [
                    'Démarrage par condensateur, fonctionnement par induction — condensateur de démarrage en série avec l\'enroulement de démarrage ; couple de démarrage élevé ; condensateur déconnecté à ~75 % de la vitesse par un interrupteur centrifuge',
                    'Démarrage par condensateur, fonctionnement par condensateur (double condensateur) — condensateur de démarrage pour un couple de démarrage élevé, condensateur de fonctionnement pour un meilleur rendement et facteur de puissance en fonctionnement',
                    'Condensateur permanent (PSC) — condensateur de fonctionnement en permanence dans le circuit ; couple de démarrage plus faible mais plus silencieux ; utilisé dans les ventilateurs et les petites pompes',
                    'Pôle blindé (shaded pole) — faible couple de démarrage ; silencieux ; utilisé dans les petits ventilateurs et appareils ; ne peut pas être inversé',
                    'Moteur universel — fonctionne en CA ou CC ; vitesse élevée, couple élevé ; utilisé dans les outils électriques et les appareils électroménagers',
                    'Moteur à phase auxiliaire (split-phase) — pas de condensateur ; faible couple de démarrage ; enroulement de démarrage déconnecté à 75 % de la vitesse',
                    'Moteur hermétique — moteur et compresseur scellés dans le même boîtier ; utilisé dans la réfrigération et les compresseurs de climatisation',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Types de moteurs triphasés',
                  items: [
                    'Moteur à induction à cage d\'écureuil — moteur industriel le plus courant ; simple, robuste, peu d\'entretien ; les barres du rotor sont en court-circuit ; vitesse déterminée par la fréquence d\'alimentation et le nombre de pôles',
                    'Moteur à induction à rotor bobiné — le rotor a des bagues collectrices connectées à une résistance externe ; la résistance variable permet de réduire le courant de démarrage et de contrôler la vitesse ; entretien plus élevé',
                    'Moteur synchrone — tourne exactement à la vitesse synchrone (pas de glissement) ; utilisé pour la correction du facteur de puissance (lorsqu\'il est surexcité) et les applications de vitesse de précision',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Types de moteurs à courant continu',
                  items: [
                    'Moteur CC série — enroulement de champ en série avec l\'induit ; couple de démarrage élevé ; la vitesse varie fortement avec la charge ; ne jamais faire fonctionner à vide (vitesse excessive dangereuse) ; utilisé pour la traction (grues, treuils)',
                    'Moteur CC shunt — enroulement de champ en parallèle avec l\'induit ; vitesse relativement constante ; utilisé pour les machines-outils',
                    'Moteur CC compound — enroulements de champ série et shunt ; combine les caractéristiques des deux',
                    'Moteur CC à excitation séparée — champ alimenté par une source séparée ; meilleure régulation de vitesse ; utilisé dans les applications de variateurs nécessitant un contrôle précis',
                    'Moteur CC à aimants permanents — champ fourni par des aimants permanents ; pas d\'enroulement de champ ; compact ; utilisé dans les petits appareils et les servocommandes',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'Les informations sur la plaque signalétique du moteur comprennent : la puissance en HP ou kW, la tension, le FLA, le RPM, la taille du cadre, la classe d\'isolation, le facteur de service, le rendement, le facteur de puissance, la fréquence et le nombre de phases. La désignation du cadre NEMA indique la hauteur de l\'arbre et les dimensions du motif des boulons.',
                },
              ],
            },
            {
              id: 'elec-ch11-s4',
              title: '11.4 Systèmes de commande automatisés — PLC, SCADA, DCS',
              content: [
                {
                  type: 'paragraph',
                  text: 'Les systèmes de commande automatisés remplacent la logique à relais câblée par des dispositifs programmables, permettant des séquences de commande complexes, flexibles et facilement modifiables. Les électriciens en construction installent, câblent, programment et entretiennent ces systèmes.',
                },
                {
                  type: 'infoBox',
                  title: 'Types de systèmes de commande automatisés',
                  items: [
                    'Automate programmable industriel (PLC) — cheval de trait de l\'automatisation industrielle ; scrute les entrées, exécute un programme en logique à contacts, met à jour les sorties ; utilisé pour la commande de machines, systèmes de convoyeurs, stations de pompage',
                    'SCADA (contrôle de surveillance et acquisition de données) — surveille et contrôle des systèmes géographiquement répartis via des RTU ou PLC sur des sites distants',
                    'DCS (système de contrôle distribué) — utilisé dans les industries de procédés continus (raffinerie de pétrole, usine chimique) ; contrôleurs distribués dans toute l\'usine et connectés par un bus d\'usine',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Composants matériels d\'un PLC',
                  items: [
                    'Alimentation — fournit une tension CC régulée au fond de panier du PLC',
                    'CPU (unité centrale de traitement) — exécute le programme utilisateur ; stocke les données ; communique avec les modules d\'entrées/sorties',
                    'Modules d\'entrée — numériques ou analogiques ; convertissent les signaux de terrain en données lisibles par le CPU',
                    'Modules de sortie — numériques ou analogiques ; convertissent les commandes du CPU en signaux de terrain',
                    'Module de communication — Ethernet, Modbus, Profibus, DeviceNet, BACnet, Fieldbus',
                    'IHM (interface homme-machine) — écran tactile ou panneau pour la surveillance et la commande par l\'opérateur',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Systèmes de numération utilisés dans les PLC',
                  items: [
                    'Binaire — base 2 ; chiffres 0 et 1 ; langage natif de l\'électronique numérique',
                    'Décimal — base 10 ; système de numération standard',
                    'Hexadécimal — base 16 ; chiffres 0–9, A–F ; représentation compacte des données binaires',
                    'Octal — base 8 ; chiffres 0–7 ; utilisé dans certains anciens systèmes d\'adressage PLC',
                    'BCD (décimal codé binaire) — chaque chiffre décimal encodé en binaire 4 bits ; utilisé avec les commutateurs à molette',
                    'ASCII — codes 7 bits pour les caractères alphanumériques ; utilisé dans les affichages IHM et les communications série',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Instructions de base en logique à contacts',
                  items: [
                    'XIC (Examine if Closed) — l\'instruction est VRAIE lorsque le bit correspondant est à 1 (équivalent à un contact NO)',
                    'XIO (Examine if Open) — l\'instruction est VRAIE lorsque le bit correspondant est à 0 (équivalent à un contact NF)',
                    'OTE (Output Energize) — met le bit de sortie à 1 lorsque la logique de la barre est vraie (équivalent à une bobine)',
                    'OTL (Output Latch) / OTU (Output Unlatch) — bascules de sortie',
                    'TON (Timer On-Delay) / TOF (Timer Off-Delay) — fonctions de temporisation',
                    'CTU (Count Up) / CTD (Count Down) — fonctions de comptage',
                  ],
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: 'elec-q11-1',
              question: 'Quel étage interne d\'un VFD produit la sortie CA à fréquence variable vers le moteur ?',
              options: ['Étage redresseur', 'Batterie de condensateurs du bus CC', 'Étage onduleur (commutation IGBT)', 'Filtre d\'entrée CEM'],
              correctIndex: 2,
              explanation: 'L\'étage onduleur utilise des commutateurs IGBT pour découper la tension du bus CC en impulsions de largeur variable, créant une sortie CA à fréquence et tension variables qui simule une onde sinusoïdale à la fréquence et à la tension désirées.',
            },
            {
              id: 'elec-q11-2',
              question: 'Un moteur à induction à cage d\'écureuil tourne à 1740 tr/min sur une alimentation 60 Hz, 4 pôles. Quelle est la vitesse synchrone et quel est le glissement en pourcentage ?',
              options: ['Vitesse synchrone 1800 tr/min, glissement 3,3 %', 'Vitesse synchrone 1500 tr/min, glissement 16 %', 'Vitesse synchrone 3600 tr/min, glissement 51,7 %', 'Vitesse synchrone 1200 tr/min, glissement 45 %'],
              correctIndex: 0,
              explanation: 'Vitesse synchrone : Ns = 120 × f / P = 120 × 60 / 4 = 1800 tr/min. Glissement = (Ns − Nr) / Ns × 100 % = (1800 − 1740) / 1800 × 100 % = 3,33 %. Le glissement normal à pleine charge pour les moteurs à cage d\'écureuil est de 2–5 %.',
            },
            {
              id: 'elec-q11-3',
              question: 'En logique à contacts PLC, que représente une instruction XIC (Examine if Closed) ?',
              options: [
                'Un contact normalement fermé qui s\'ouvre lorsque le bit est à 1',
                'Un contact normalement ouvert qui est VRAI lorsque le bit correspondant est à 1',
                'Une bobine de sortie qui s\'excite lorsque la barre est vraie',
                'Une instruction de temporisation qui s\'active sur un front montant',
              ],
              correctIndex: 1,
              explanation: 'XIC (Examine if Closed) est équivalent à un contact normalement ouvert en logique à contacts. L\'instruction est évaluée comme VRAIE (passe le courant) lorsque le bit d\'adresse PLC correspondant est à 1. C\'est l\'instruction la plus courante dans les programmes PLC en logique à contacts.',
            },
          ],
        },
      ],
    },

    // ============================================================
    // PARTIE 5 — SYSTÈMES DE SIGNALISATION ET DE COMMUNICATION
    // AMT E : Installe, entretient et maintient les systèmes de signalisation et de communication (10 %)
    // Tâches : E-26 Signalisation (47 %), E-27 Communication (30 %), E-28 Contrôle intégré (23 %)
    // ============================================================
    {
      id: 'elec-part-5',
      number: 5,
      title: 'Systèmes de signalisation et de communication',
      description: 'Systèmes d\'alarme incendie, sécurité et surveillance, VDV/CATV, sonorisation et appels infirmiers, automatisation des bâtiments et systèmes de contrôle intégré.',
      chapters: [

        // ─────────────────────────────────────────────────────────
        // CHAPITRE 12 — Systèmes de signalisation et de communication (AMT E-26, E-27)
        // ─────────────────────────────────────────────────────────
        {
          id: 'elec-ch-12',
          number: 12,
          title: 'Alarme incendie, sécurité et systèmes de communication',
          subtitle: 'AMT E-26 Signalisation (47 %) · E-27 Systèmes de communication (30 %)',
          isFree: false,
          estimatedMinutes: 60,
          sections: [
            {
              id: 'elec-ch12-s1',
              title: '12.1 Systèmes d\'alarme incendie (Tâche E-26)',
              content: [
                {
                  type: 'paragraph',
                  text: 'Les systèmes d\'alarme incendie sont des systèmes de sécurité des personnes régis par le Code national de prévention des incendies (CNPI), les normes ULC et la section 32 du CCE. Ils nécessitent des méthodes de câblage spéciales, la supervision de tous les circuits et doivent être testés et vérifiés par une personne qualifiée.',
                },
                {
                  type: 'infoBox',
                  title: 'Composants d\'un système d\'alarme incendie',
                  items: [
                    'Panneau de commande d\'alarme incendie (FACP) — le "cerveau" du système ; surveille tous les circuits d\'entrée et de signalisation ; connecté à la centrale de télésurveillance',
                    'Dispositifs d\'entrée — détectent les conditions d\'incendie : détecteurs de fumée (ionisation, photoélectriques), détecteurs de chaleur (température fixe, montée de température), détecteurs de flamme, déclencheurs manuels, détecteurs de débit de sprinklers, détecteurs de fumée en gaine',
                    'Dispositifs de signalisation — alertent les occupants : cloches, avertisseurs sonores, stroboscopes, haut-parleurs d\'évacuation',
                    'Afficheur déporté — affichage à distance de l\'état des zones et des emplacements d\'alarme',
                    'Câblage — circuits deux fils ou quatre fils homologués ULC ; classe A (tolérant aux défauts) ou classe B (surveillés par résistance de fin de ligne)',
                    'Alimentation électrique — primaire (120 V CA) et secondaire (batterie de secours au plomb-acide étanche, minimum 24 heures de veille + 5 minutes d\'alarme)',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Classes de circuits d\'alarme incendie',
                  items: [
                    'Classe A — câblage en boucle ; les deux extrémités de chaque circuit sont connectées au FACP ; une seule coupure ou court-circuit ne désactive pas le circuit ; requis dans les immeubles de grande hauteur et les hôpitaux',
                    'Classe B — câblage en T ; une résistance de fin de ligne surveille le circuit ; un seul défaut désactive la branche affectée',
                    'Systèmes adressables — chaque dispositif a une adresse numérique unique ; le FACP peut identifier le dispositif exact en alarme ou en défaut ; pas de résistance de fin de ligne requise',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch12-s2',
              title: '12.2 Systèmes de sécurité et de surveillance (Tâche E-26)',
              content: [
                {
                  type: 'infoBox',
                  title: 'Composants d\'un système de sécurité',
                  items: [
                    'Panneau de commande — traite les entrées de tous les capteurs ; communique avec la centrale de télésurveillance',
                    'Détecteurs de mouvement — infrarouge passif, micro-ondes, double technologie',
                    'Contacts de porte/fenêtre — contact magnétique ; surveille les événements d\'ouverture',
                    'Détecteurs de bris de verre — capteurs acoustiques ou vibratoires',
                    'Caméras — analogiques sur câble coaxial ou IP numériques sur UTP Cat5e/6',
                    'DVR/NVR — enregistreur vidéo numérique ou enregistreur vidéo réseau ; stocke la vidéo',
                    'Contrôle d\'accès — lecteurs de cartes, claviers, gâches électriques, serrures magnétiques',
                    'Centrale de télésurveillance — centrale 24/7 ; connectée par ligne téléphonique, cellulaire ou IP',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch12-s3',
              title: '12.3 Systèmes voix/données/vidéo (VDV) et CATV (Tâche E-27)',
              content: [
                {
                  type: 'paragraph',
                  text: 'Les systèmes de câblage structuré VDV fournissent l\'infrastructure pour la téléphonie, les réseaux de données et la distribution vidéo. Ces systèmes sont conçus, installés et testés selon les normes publiées par la TIA et BICSI.',
                },
                {
                  type: 'infoBox',
                  title: 'Normes et catégories de câblage structuré',
                  items: [
                    'Cat 3 — voix (téléphone) ; 16 MHz ; largement obsolète pour les données',
                    'Cat 5e — 100 MHz ; prend en charge Ethernet 1 Gbps',
                    'Cat 6 — 250 MHz ; prend en charge 10 Gbps jusqu\'à 55 m',
                    'Cat 6A — 500 MHz ; prend en charge 10 Gbps jusqu\'à 100 m',
                    'Fibre optique — multimode (OM3, OM4 — orange ; OM5 — vert) ou monomode (OS2 — jaune) ; immunisée contre les CEM ; très grande bande passante et distance',
                    'Câble coaxial — utilisé pour la CATV, la CCTV et la distribution RF ; RG-6 pour la CATV résidentielle',
                    'Norme ANSI/TIA-568 — définit les catégories de câbles, les types de connecteurs, les exigences de test',
                    'Vérification et certification — les chemins de câbles sont testés avec un analyseur de câbles ; paramètres de test : schéma de câblage, longueur, affaiblissement, paradiaphonie, affaiblissement de retour',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Composants CATV',
                  items: [
                    'Émetteurs et équipements de réception (antennes paraboliques, tête de réseau)',
                    'Amplificateurs — augmentent le niveau du signal sur les longs trajets de câble',
                    'Diviseurs — divisent le signal vers plusieurs sorties (avec perte de signal)',
                    'Atténuateurs — réduisent le niveau du signal pour correspondre aux exigences d\'entrée de l\'équipement',
                    'Terminateurs — terminaisons 75 Ω sur les ports CATV inutilisés pour éviter les réflexions',
                    'TDR (réflectomètre temporel) — localise les défauts dans les câbles coaxiaux en mesurant le temps de retour des impulsions réfléchies',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch12-s4',
              title: '12.4 Systèmes de sonorisation, d\'interphonie et d\'appel infirmier (Tâche E-27)',
              content: [
                {
                  type: 'paragraph',
                  text: 'Les systèmes de sonorisation et d\'interphonie distribuent la communication vocale dans un bâtiment. Les systèmes d\'appel infirmier sont des systèmes de communication spécialisés utilisés dans les établissements de santé pour permettre aux patients d\'appeler le personnel.',
                },
                {
                  type: 'infoBox',
                  title: 'Composants d\'un système de sonorisation',
                  items: [
                    'Microphones — dynamiques, à condensateur ; aux postes principaux et consoles de sonorisation',
                    'Amplificateurs — puissance nominale en watts RMS ; dimensionnés en fonction de la charge des haut-parleurs',
                    'Haut-parleurs — système audio distribué 70 V ou 25 V ; prises de réglage de volume à chaque haut-parleur',
                    'Générateurs de tonalités — messages et annonces préenregistrés',
                    'Alimentations — alimentations sans interruption pour les systèmes de sonorisation de sécurité',
                  ],
                },
                {
                  type: 'paragraph',
                  text: 'Les systèmes d\'appel infirmier peuvent être unidirectionnels (patient vers poste de soins) ou bidirectionnels (avec capacité de conversation). Les systèmes d\'appel infirmier modernes sur IP fonctionnent sur le réseau de câblage structuré de l\'hôpital. Les composants comprennent des stations d\'appel à chaque lit de patient, des voyants lumineux dans les couloirs, des afficheurs aux postes de soins, et l\'intégration avec le réseau local des soins aux patients, la sécurité et les systèmes d\'alimentation de secours.',
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: 'elec-q12-1',
              question: 'Dans un système d\'alarme incendie, qu\'est-ce qui distingue un circuit de classe A d\'un circuit de classe B ?',
              options: [
                'La classe A utilise des circuits à 2 fils ; la classe B utilise des circuits à 4 fils',
                'La classe A est un circuit en boucle qui reste fonctionnel malgré une seule coupure ou un court-circuit ; la classe B est un circuit en T qui est désactivé par une seule coupure',
                'Les circuits de classe A nécessitent des résistances de fin de ligne ; les circuits de classe B non',
                'La classe A utilise des dispositifs adressables ; la classe B utilise des dispositifs conventionnels (par zone)',
              ],
              correctIndex: 1,
              explanation: 'Le câblage de classe A boucle les deux conducteurs de retour au FACP, de sorte qu\'une seule coupure dans le circuit n\'interrompt pas la communication avec les dispositifs au-delà de la coupure. La classe B utilise une configuration en T avec une résistance de fin de ligne ; un seul défaut de coupure désactive le circuit au-delà de la coupure. La classe A est requise par le CNB dans les immeubles de grande hauteur.',
            },
            {
              id: 'elec-q12-2',
              question: 'Quelle catégorie de câble prend en charge Ethernet 10 Gbps jusqu\'à un maximum de 100 mètres ?',
              options: ['Cat 5e', 'Cat 6', 'Cat 6A', 'Cat 3'],
              correctIndex: 2,
              explanation: 'Le Cat 6A (catégorie 6 augmentée) est classé à 500 MHz et prend en charge 10GBASE-T (Ethernet 10 Gbps) sur toute la longueur de canal de 100 mètres. Le Cat 6 ne prend en charge 10 Gbps que jusqu\'à environ 55 mètres. Le Cat 5e ne prend en charge que 1 Gbps.',
            },
          ],
        },

        // ─────────────────────────────────────────────────────────
        // CHAPITRE 13 — Automatisation des bâtiments et systèmes de contrôle intégré (AMT E-28)
        // ─────────────────────────────────────────────────────────
        {
          id: 'elec-ch-13',
          number: 13,
          title: 'Automatisation des bâtiments et systèmes de contrôle intégré',
          subtitle: 'AMT E-28 · Systèmes de contrôle intégré (23 % de l\'AMT E)',
          isFree: false,
          estimatedMinutes: 50,
          sections: [
            {
              id: 'elec-ch13-s1',
              title: '13.1 Systèmes d\'automatisation des bâtiments (BAS)',
              content: [
                {
                  type: 'paragraph',
                  text: 'Un système d\'automatisation des bâtiments utilise un réseau informatisé pour surveiller et contrôler les systèmes CVAC, d\'éclairage, de sécurité et d\'énergie d\'un bâtiment à partir d\'une interface centrale ou à distance. Les systèmes BAS optimisent la consommation d\'énergie, améliorent le confort des occupants et permettent la détection à distance des défauts.',
                },
                {
                  type: 'infoBox',
                  title: 'Composants BAS',
                  items: [
                    'Contrôleurs — contrôleurs numériques directs au niveau de la zone ou de l\'équipement',
                    'Capteurs — détecteurs de présence, capteurs de niveau de lumière, capteurs de température, capteurs de CO₂',
                    'Actionneurs — moteurs de registres, actionneurs de vannes contrôlés par le BAS',
                    'Câblage réseau — généralement Cat5e ou Cat6 pour BACnet/IP ; paire torsadée blindée pour BACnet MS/TP ou LON',
                    'Commutateurs PoE — alimentation et données délivrées sur un seul câble Cat aux dispositifs IP',
                    'Serveurs et IHM — postes de travail de surveillance et de contrôle centraux',
                  ],
                },
                {
                  type: 'keyTerm',
                  term: 'BACnet',
                  definition: 'Norme de protocole de communication ouverte pour les systèmes d\'automatisation des bâtiments. BACnet permet aux dispositifs de différents fabricants de communiquer sur un réseau commun. Les protocoles incluent BACnet/IP (sur Ethernet), BACnet MS/TP (sur paire torsadée) et BACnet sans fil.',
                },
              ],
            },
            {
              id: 'elec-ch13-s2',
              title: '13.2 Systèmes de contrôle des bâtiments',
              content: [
                {
                  type: 'paragraph',
                  text: 'Les systèmes de contrôle des bâtiments au niveau terrain font l\'interface entre le réseau BAS et les systèmes physiques CVAC, d\'éclairage et autres. Ils utilisent diverses technologies de contrôle — pneumatique, électronique analogique et contrôle numérique direct.',
                },
                {
                  type: 'infoBox',
                  title: 'Types de systèmes de contrôle des bâtiments',
                  items: [
                    'Contrôles pneumatiques — utilisent des signaux de pression d\'air comprimé (3–15 psi) pour positionner les registres et les vannes ; technologie ancienne ; fiable mais peu flexible',
                    'Contrôles électroniques analogiques — utilisent des signaux 0–10 V CC ou 4–20 mA ; encore largement utilisés pour les boucles de contrôle simples',
                    'Contrôle numérique direct — contrôleurs à microprocesseur ; programmables ; communiquent via BACnet ou des protocoles propriétaires ; peuvent exécuter des séquences complexes',
                    'Contrôle par ordinateur — le serveur BAS coordonne tous les contrôleurs DDC ; tendances, gestion des alarmes et optimisation au niveau de supervision',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Dispositifs de terrain des systèmes de contrôle des bâtiments',
                  items: [
                    'Moteurs de registres — actionnent les registres de contrôle de débit d\'air dans les conduits CVAC',
                    'Actionneurs de vannes — contrôlent le débit dans les systèmes d\'eau glacée, d\'eau chaude et de vapeur',
                    'Contacteurs et relais — commutent les charges à partir des sorties des contrôleurs DDC',
                    'Capteurs — humidité, température, pression différentielle, niveau de lumière, présence, CO₂, débit',
                    'Avertisseurs — alarmes visuelles/sonores au niveau de l\'équipement local',
                    'Thermostats — points de consigne de température pour les zones locales',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch13-s3',
              title: '13.3 Entretien et maintenance des systèmes de contrôle intégré',
              content: [
                {
                  type: 'paragraph',
                  text: 'Lors du dépannage d\'un système de contrôle intégré, l\'électricien doit d\'abord identifier le type de système et examiner les plans de récolement, les journaux de maintenance et les rapports de certification avant d\'effectuer des tests. Les modifications apportées aux systèmes intégrés doivent être coordonnées avec le client et la centrale de télésurveillance pour éviter les fausses alarmes.',
                },
                {
                  type: 'infoBox',
                  title: 'Étapes de dépannage des systèmes de contrôle intégré',
                  items: [
                    '1. Obtenir une description détaillée du dysfonctionnement auprès de l\'opérateur ou de l\'utilisateur final',
                    '2. Examiner les plans de récolement, les journaux de maintenance et l\'historique des modifications récentes',
                    '3. Effectuer une visite sur place pour identifier les composants du système et leur état',
                    '4. Tester le système de contrôle intégré à l\'aide de multimètres et d\'outils de diagnostic système',
                    '5. Comparer les résultats des tests au rapport de certification du fabricant et aux exigences du client',
                    '6. Ajuster ou remplacer les composants si nécessaire ; planifier avec le client pour minimiser les perturbations',
                    '7. Retester pour confirmer le bon fonctionnement',
                    '8. Mettre à jour la documentation et informer l\'opérateur du système de toutes les modifications effectuées',
                  ],
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: 'elec-q13-1',
              question: 'Quel protocole ouvert est le plus couramment utilisé pour la communication entre les composants de systèmes d\'automatisation de bâtiments de différents fabricants ?',
              options: ['Modbus RTU', 'BACnet', 'Profibus DP', 'DeviceNet'],
              correctIndex: 1,
              explanation: 'BACnet est le protocole ouvert dominant pour les systèmes d\'automatisation de bâtiments en Amérique du Nord. Il a été spécifiquement développé pour les applications d\'automatisation des bâtiments et prend en charge plusieurs couches physiques.',
            },
          ],
        },

        // ─────────────────────────────────────────────────────────
        // CHAPITRE 14 — Référence des formules, glossaire et stratégie d'examen Sceau rouge
        // ─────────────────────────────────────────────────────────
        {
          id: 'elec-ch-14',
          number: 14,
          title: 'Référence des formules, termes clés et stratégie d\'examen Sceau rouge',
          subtitle: 'Fiche de formules complète · Terminologie essentielle · Stratégie d\'examen pour l\'examen de 100 questions du Sceau rouge',
          isFree: false,
          estimatedMinutes: 60,
          sections: [
            {
              id: 'elec-ch14-s1',
              title: '14.1 Référence des formules électriques',
              content: [
                {
                  type: 'paragraph',
                  text: 'L\'examen du Sceau rouge pour électricien en construction comprend des questions de calcul. Mémorisez ces formules fondamentales — elles apparaissent à plusieurs reprises dans toutes les sections de l\'AMT.',
                },
                {
                  type: 'infoBox',
                  title: 'Loi d\'Ohm et formules de puissance',
                  items: [
                    'V = I × R (Tension = Courant × Résistance)',
                    'I = V / R (Courant = Tension / Résistance)',
                    'R = V / I (Résistance = Tension / Courant)',
                    'P = V × I (Puissance = Tension × Courant)',
                    'P = I² × R (Puissance = Courant au carré × Résistance)',
                    'P = V² / R (Puissance = Tension au carré / Résistance)',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Formules pour circuits CA',
                  items: [
                    'Puissance apparente monophasée : S (VA) = V × I',
                    'Puissance réelle monophasée : P (W) = V × I × FP',
                    'Puissance apparente triphasée : S (VA) = √3 × VL × IL = 1,732 × VL × IL',
                    'Puissance réelle triphasée : P (W) = √3 × VL × IL × FP',
                    'Facteur de puissance : FP = P / S = kW / kVA (cosinus de l\'angle de phase)',
                    'Puissance réactive : Q (VAR) = √(S² − P²)',
                    'Impédance : Z = √(R² + X²) ; XL = 2πfL ; XC = 1/(2πfC)',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Formules pour transformateurs',
                  items: [
                    'Rapport de transformation : a = N1/N2 = V1/V2 = I2/I1',
                    'kVA monophasé : S = (V × I) / 1000',
                    'kVA triphasé : S = (√3 × VL × IL) / 1000',
                    'Régulation de tension : VR % = (VVL − VPL) / VPL × 100 %',
                    'Rendement : η % = Psortie / Pentrée × 100 % = Psortie / (Psortie + Pperte) × 100 %',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Formules pour moteurs',
                  items: [
                    'Vitesse synchrone : Ns (tr/min) = 120 × f / P',
                    'Glissement : s = (Ns − Nr) / Ns × 100 %',
                    'Rendement du moteur : η % = Psortie / Pentrée × 100 % = (HP × 746) / (V × I × FP × √3) × 100 % (triphasé)',
                    'Puissance en chevaux : HP = (T × N) / 5252 (T en lb-pi, N en tr/min)',
                    'Puissance métrique : kW = HP × 0,7457',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Formules de chute de tension',
                  items: [
                    'Monophasé : VD = 2 × L × R × I / 1000 (R en Ω/km, L en mètres)',
                    'Triphasé : VD = √3 × L × R × I / 1000 (R en Ω/km, L en mètres)',
                    'Pourcentage de chute de tension : VD % = VD / V_source × 100 %',
                    'Maximum recommandé par le CCE : 3 % pour les circuits de dérivation ; 5 % total (feeder + dérivation)',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Remplissage des conduits et autres formules',
                  items: [
                    'Aire du cercle : A = π × r² = π × d² / 4 (où d = diamètre)',
                    'π = 3,1416',
                    'Remplissage du conduit : somme des sections des conducteurs / aire intérieure du conduit ≤ 40 % (3 fils ou plus)',
                    'Loi d\'Ohm pour les résistances en parallèle : 1/Rt = 1/R1 + 1/R2 + 1/R3 ...',
                    'Résistances en série : Rt = R1 + R2 + R3 ...',
                    'Conversions métriques : 1 pouce = 25,4 mm ; 1 pied = 0,3048 m ; 1 HP = 746 W ; 1 kWh = 3,6 MJ',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch14-s2',
              title: '14.2 Termes clés et acronymes',
              content: [
                {
                  type: 'infoBox',
                  title: 'Acronymes essentiels',
                  items: [
                    'CA — Courant alternatif ; CC — Courant continu',
                    'AFCI — Disjoncteur de détection d\'arc électrique ; GFCI — Disjoncteur de fuite à la terre',
                    'AHJ — Autorité compétente',
                    'AVR — Régulateur automatique de tension',
                    'BACnet — Building Automation and Control Networks',
                    'BMS — Système de gestion de batterie',
                    'CATV — Télévision par câble',
                    'CCE — Code canadien de l\'électricité',
                    'CSA — Association canadienne de normalisation',
                    'TC — Transformateur de courant ; TT — Transformateur de tension',
                    'DCS — Système de contrôle distribué ; DDC — Contrôle numérique direct',
                    'CEM — Compatibilité électromagnétique ; EMI — Interférence électromagnétique',
                    'EV — Véhicule électrique',
                    'FLA — Ampères à pleine charge',
                    'GFP — Protection contre les défauts à la terre ; GFCI — Disjoncteur de fuite à la terre',
                    'GUI — Interface graphique utilisateur ; IHM — Interface homme-machine',
                    'CVAC — Chauffage, ventilation et air conditionné',
                    'IGBT — Transistor bipolaire à grille isolée',
                    'IoT — Internet des objets',
                    'kVA — Kilovolt-ampères ; kW — Kilowatts ; kWh — Kilowattheures',
                    'LEED — Leadership in Energy and Environmental Design',
                    'LOTO — Cadenassage / étiquetage',
                    'MCC — Centre de commande de moteurs',
                    'MOV — Varistance à oxyde métallique',
                    'CNB — Code national du bâtiment ; CNPI — Code national de prévention des incendies',
                    'NEMA — National Electrical Manufacturers\' Association',
                    'NETA — North American Electrical Testing Association',
                    'NMD — Câble à gaine non métallique',
                    'OEM — Fabricant d\'équipement d\'origine',
                    'SST — Santé et sécurité au travail',
                    'PA — Sonorisation ; PAT — Outil à poudre',
                    'PDC — Centre de distribution d\'énergie',
                    'FP — Facteur de puissance',
                    'PLC — Automate programmable industriel',
                    'PoE — Power over Ethernet',
                    'EPI — Équipement de protection individuelle',
                    'MLI — Modulation de largeur d\'impulsion',
                    'RFID — Identification par radiofréquence',
                    'RMC — Conduit métallique rigide ; EMT — Tube métallique électrique',
                    'SCADA — Contrôle de surveillance et acquisition de données',
                    'SCR — Redresseur commandé au silicium ; IGBT — Transistor bipolaire à grille isolée',
                    'SPD — Dispositif de protection contre les surtensions',
                    'TPG — Mise à la terre temporaire',
                    'ULC — Laboratoires des assureurs du Canada',
                    'ASI — Alimentation sans interruption',
                    'UTP — Paire torsadée non blindée ; ScTP — Paire torsadée blindée',
                    'VDV — Voix/données/vidéo',
                    'VFD — Variateur de fréquence',
                    'WHMIS — Système d\'information sur les matières dangereuses utilisées au travail',
                    'WLL — Charge de travail limite',
                  ],
                },
              ],
            },
            {
              id: 'elec-ch14-s3',
              title: '14.3 Stratégie d\'examen Sceau rouge — Électricien en construction',
              content: [
                {
                  type: 'paragraph',
                  text: 'L\'examen interprovincial du Sceau rouge pour électricien en construction comporte 100 questions à choix multiples avec une note de passage de 70 % (70 bonnes réponses). Utilisez la pondération de l\'examen pour orienter judicieusement votre temps d\'étude.',
                },
                {
                  type: 'infoBox',
                  title: 'Pondération de l\'examen par AMT (100 questions au total)',
                  items: [
                    'AMT A — Exécute les compétences professionnelles communes : 12 questions',
                    'AMT B — Systèmes de production, de distribution et d\'alimentation : 26 questions',
                    'AMT C — Systèmes de câblage : 34 questions (LE PLUS ÉLEVÉ — priorisez ceci !)',
                    'AMT D — Moteurs et systèmes de commande : 18 questions',
                    'AMT E — Systèmes de signalisation et de communication : 10 questions',
                  ],
                },
                {
                  type: 'infoBox',
                  title: 'Conseils de stratégie d\'examen',
                  items: [
                    'L\'AMT C représente 34 % de l\'examen — maîtriser les chemins de câbles, les conducteurs, les circuits de dérivation et l\'éclairage vous donne le plus de points',
                    'L\'AMT B représente 26 % — connaissez vos alimentations, les dispositifs de protection, la mise à la terre/liaison et les calculs de transformateurs',
                    'L\'AMT D représente 18 % — le dimensionnement des circuits moteurs, la logique des démarreurs et les principes des VFD sont fréquemment testés',
                    'Lisez attentivement chaque question — éliminez d\'abord les réponses manifestement fausses, puis choisissez la MEILLEURE réponse restante',
                    'Questions de référence au code — connaissez les sections du CCE : section 4, section 8, section 10, section 12, section 26, section 28',
                    'Questions de calcul — écrivez ce qui est donné, identifiez la formule, substituez les valeurs, vérifiez les unités',
                    'Marquez les questions dont vous n\'êtes pas certain et revenez-y après avoir répondu à toutes les questions que vous connaissez',
                    'Gestion du temps — environ 90 secondes par question ; ne passez pas plus de 3 minutes sur une seule question',
                  ],
                },
              ],
            },
          ],
          practiceQuestions: [
            {
              id: 'elec-q14-1',
              question: 'Un moteur triphasé de 600 V tire 50 A à pleine charge avec un facteur de puissance de 0,85. Quelle est la puissance réelle consommée par le moteur en kW ?',
              options: ['30 kW', '44,2 kW', '52,1 kW', '61,4 kW'],
              correctIndex: 1,
              explanation: 'P = √3 × VL × IL × FP = 1,732 × 600 V × 50 A × 0,85 = 44 166 W ≈ 44,2 kW. La puissance apparente est √3 × 600 × 50 = 51 960 VA ≈ 52 kVA, et la puissance réelle est kVA × FP = 52 × 0,85 = 44,2 kW.',
            },
            {
              id: 'elec-q14-2',
              question: 'Selon la pondération de l\'examen du Sceau rouge, quelle AMT comporte le plus grand nombre de questions et devrait recevoir le plus de temps d\'étude ?',
              options: [
                'AMT A — Compétences professionnelles communes (12 %)',
                'AMT B — Systèmes de production, de distribution et d\'alimentation (26 %)',
                'AMT C — Systèmes de câblage (34 %)',
                'AMT D — Moteurs et systèmes de commande (18 %)',
              ],
              correctIndex: 2,
              explanation: 'L\'AMT C (systèmes de câblage) représente 34 % de l\'examen du Sceau rouge — la plus grande section avec 34 questions sur 100. Maîtriser cette section est essentiel pour réussir.',
            },
            {
              id: 'elec-q14-3',
              question: 'Un circuit monophasé de 240 V parcourt 75 mètres pour alimenter une charge continue de 20 A. Les conducteurs en cuivre #10 AWG ont une résistance de 3,277 Ω/km. Quelle est la chute de tension et respecte-t-elle la recommandation du CCE pour les circuits de dérivation ?',
              options: [
                'VD = 4,9 V (2,0 %) — respecte la recommandation de 3 %',
                'VD = 9,8 V (4,1 %) — dépasse la recommandation de 3 %',
                'VD = 19,7 V (8,2 %) — dépasse largement la recommandation de 3 %',
                'VD = 2,5 V (1,0 %) — bien en deçà de la recommandation de 3 %',
              ],
              correctIndex: 1,
              explanation: 'VD = 2 × L × R × I / 1000 = 2 × 75 m × 3,277 Ω/km × 20 A / 1000 = 2 × 75 × 0,003277 × 20 = 9,83 V. VD % = 9,83 V / 240 V = 4,1 %. Cela dépasse le maximum recommandé de 3 % par le CCE pour les circuits de dérivation, donc un conducteur plus gros (#8 AWG) devrait être choisi.',
            },
          ],
        },
      ],
    },

  ], // fin des parties

}; // fin de electricianCourse

// ============================================================
// Export normalisé du cours pour l'application CertReady
// ============================================================
const _elecParts = electricianCourseFR.parts;
const _elecAllChapters = _elecParts.flatMap((p) => p.chapters);
const _elecTotalChapters = _elecAllChapters.length;
const _elecTotalQuestions = _elecAllChapters.reduce(
  (sum, ch) => sum + (ch.practiceQuestions?.length || 0),
  0
);

export const electricianCourseDataFR = {
  id: 'construction-electrician-309a',
  slug: 'construction-electrician-309a',
  title: 'Préparation à l\'examen d\'électricien en construction (Sceau rouge 309A)',
  subtitle: 'Guide d\'étude complet — Examen interprovincial Sceau rouge, 100 questions',
  trade: 'Électricien en construction',
  tradeCode: '309A',
  price: 4999, // 49,99 $ CAD en cents
  currency: 'CAD',
  totalChapters: _elecTotalChapters,
  totalQuestions: _elecTotalQuestions,
  passingMark: 70,
  features: [
    `${_elecTotalChapters} chapitres couvrant les 5 activités principales (AMT)`,
    `${_elecTotalQuestions}+ questions pratiques avec explications détaillées`,
    'Fiche de formules complète et glossaire des termes clés',
    'Stratégie d\'examen Sceau rouge et répartition de la pondération des AMT',
    'Basé sur la norme professionnelle nationale (RSOS) — Électricien en construction 2025',
    'Contenu référencé au CCE tout au long du cours',
    'Accès à vie — étudiez à votre propre rythme',
  ],
  parts: _elecParts,
};

// Fonctions d'aide pour l'intégration de l'application
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

export default electricianCourseDataFR;