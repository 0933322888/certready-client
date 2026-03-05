// =============================================================================
// hairstylistCourse.js  —  CertReady
// Préparation à l'examen de certification de coiffeur — Métiers spécialisés Ontario, métier 332A
// ÉDITION ÉLARGIE — Tous les 15 chapitres en profondeur
// =============================================================================

export const hairstylistCourse = {
  id: 'hairstylist-332a',
  slug: 'hairstylist-332a',
  title: 'Préparation à l\'examen de certification de coiffeur',
  subtitle: 'Guide d\'étude complet — Métiers spécialisés Ontario, métier 332A',
  trade: 'Coiffeur',
  tradeCode: '332A',
  price: 4999,
  currency: 'CAD',
  totalChapters: 15,
  totalQuestions: 120,
  passingMark: 70,
  examFormat: 'Choix multiples, test sur ordinateur (Prometric Canada Testing Services)',
  features: [
      '15 chapitres complets couvrant TOUS les 17 sujets d\'examen officiels',
      '120+ questions pratiques avec explications détaillées',
      'Examen blanc chronométré de 50 questions (Chapitre 13)',
      'Glossaire de 70+ termes (Chapitre 14)',
      'Stratégie d\'examen et conseils d\'étude (Chapitre 15)',
      'Couvre les programmes des niveaux 1 et 2 (480 h au total)',
      'Accès à vie — étudiez à votre propre rythme',
      'Basé sur la norme officielle des Métiers spécialisés Ontario 332A',
  ],

  parts: [

      // =========================================================================
      // PARTIE 1 — FONDEMENTS PROFESSIONNELS
      // =========================================================================
      {
          id: 'part-1',
          title: 'Partie 1 : Fondements professionnels',
          color: '#1F4E79',
          description: 'Les chapitres 1 à 4 couvrent les cadres juridiques, éthiques, sanitaires, sécuritaires et commerciaux que tout coiffeur agréé en Ontario doit maîtriser.',
          chapters: [

              // ─── CHAPITRE 1 ────────────────────────────────────────────────────────
              {
                  id: 'ch-1',
                  number: 1,
                  title: 'Éthique, réglementation et politique',
                  subtitle: 'S1731 — Obligations légales, OHSA, WHMIS et droits des clients',
                  isFree: true,
                  estimatedMinutes: 30,
                  sections: [
                      {
                          id: 's1-1',
                          title: '1.1 Éthique professionnelle en milieu de travail',
                          content: [
                              { type: 'paragraph', text: 'L\'éthique professionnelle constitue l\'épine dorsale du métier de coiffeur. En tant que coiffeur agréé en Ontario, vous opérez sous des obligations légales spécifiques et des normes éthiques qui vous protègent, vous et vos clients. L\'éthique n\'est pas seulement des règles imposées de l\'extérieur — elle reflète les valeurs d\'un professionnel compétent et bienveillant.' },
                              { type: 'keyTerm', term: 'Éthique professionnelle', definition: 'Un ensemble de normes morales et de valeurs qui guident le comportement et les décisions d\'un coiffeur en milieu de travail — couvrant la courtoisie, la compétence, la confidentialité, la non-discrimination et l\'honnêteté.' },
                              { type: 'paragraph', text: 'Obligations éthiques fondamentales que tout coiffeur doit respecter :' },
                              {
                                  type: 'bullets', items: [
                                      'Courtoisie et respect envers tous les clients, indépendamment de leur origine, race, religion, sexe, âge ou capacité',
                                      'Exécution des services avec un niveau de compétence constamment élevé — ne jamais travailler au-delà de votre champ de formation',
                                      'Suivre en tout temps le code de conduite professionnelle de votre employeur',
                                      'Maintenir la confidentialité des clients en tout temps — les dossiers clients, les informations de santé et les détails personnels sont privés',
                                      'Non-discrimination — chaque client mérite un service égal et professionnel',
                                      'Honnêteté sur les services, les résultats réalistes, les prix et les recommandations de produits',
                                      'Orienter les clients vers des professionnels de la santé lorsque les conditions sortent de votre champ de compétence (p. ex., infections du cuir chevelu, troubles cutanés)',
                                      'Signaler les conditions de travail dangereuses par les canaux appropriés',
                                  ]
                              },
                              {
                                  type: 'infoBox', title: 'Les cinq piliers de l\'éthique professionnelle', items: [
                                      '1. INTÉGRITÉ — faire ce qui est juste même quand personne ne regarde',
                                      '2. COMPÉTENCE — n\'effectuer que les services pour lesquels vous êtes formé et qualifié',
                                      '3. RESPECT — traiter chaque client et collègue avec dignité',
                                      '4. RESPONSABILITÉ — assumer la responsabilité de vos actions et de leurs résultats',
                                      '5. CONFIDENTIALITÉ — protéger toutes les informations des clients comme privées',
                                  ]
                              },
                          ],
                      },
                      {
                          id: 's1-2',
                          title: '1.2 Loi sur la santé et la sécurité au travail (OHSA)',
                          content: [
                              { type: 'paragraph', text: 'La Loi sur la santé et la sécurité au travail (OHSA) est la principale loi ontarienne régissant la sécurité en milieu de travail. Elle s\'applique à tous les salons et établit les droits et responsabilités juridiques des employeurs et des employés. La violation de l\'OHSA peut entraîner des amendes, des arrêts de travail et une responsabilité légale.' },
                              { type: 'keyTerm', term: 'OHSA', definition: 'Loi ontarienne sur la santé et la sécurité au travail — la loi qui établit les normes de sécurité en milieu de travail, définit les devoirs des employeurs et des travailleurs, et accorde aux travailleurs des droits exécutoires.' },
                              {
                                  type: 'table', headers: ['Partie responsable', 'Principaux devoirs en vertu de l\'OHSA'], rows: [
                                      ['Employeur', 'Fournir un lieu de travail sûr et sain, exempt de dangers connus'],
                                      ['Employeur', 'Fournir toutes les informations, la formation et la supervision nécessaires'],
                                      ['Employeur', 'S\'assurer que l\'équipement est en bon état de fonctionnement et entretenu'],
                                      ['Employeur', 'Afficher l\'OHSA et les règlements connexes dans un endroit bien en vue'],
                                      ['Employeur', 'Établir un comité mixte sur la santé et la sécurité (JHSC) si 20+ travailleurs'],
                                      ['Employé (coiffeur)', 'Travailler en conformité avec l\'OHSA et tous les règlements'],
                                      ['Employé (coiffeur)', 'Signaler les dangers, les blessures et les conditions dangereuses à l\'employeur'],
                                      ['Employé (coiffeur)', 'Utiliser correctement tout l\'équipement de protection requis'],
                                      ['Employé (coiffeur)', 'Ne jamais mettre en danger vous-même ou les autres par vos actions'],
                                  ]
                              },
                              {
                                  type: 'infoBox', title: 'Trois droits fondamentaux des travailleurs en vertu de l\'OHSA', items: [
                                      '1. DROIT DE SAVOIR — les travailleurs ont le droit d\'être informés des dangers dans leur milieu de travail, y compris les risques chimiques (WHMIS) et physiques',
                                      '2. DROIT DE PARTICIPER — les travailleurs ont le droit de participer aux décisions en matière de santé et de sécurité, notamment par l\'intermédiaire d\'un comité mixte sur la santé et la sécurité ou d\'un représentant des travailleurs',
                                      '3. DROIT DE REFUSER — les travailleurs ont le droit de refuser un travail qu\'ils estiment dangereux, sans crainte de représailles (sanction, rétrogradation, licenciement)',
                                  ]
                              },
                              { type: 'keyTerm', term: 'Comité mixte sur la santé et la sécurité (JHSC)', definition: 'Un comité en milieu de travail composé de représentants des travailleurs et de la direction qui identifie les dangers, examine les politiques de sécurité et formule des recommandations — requis dans les lieux de travail ontariens comptant 20 employés ou plus.' },
                              { type: 'keyTerm', term: 'Droit de refuser un travail dangereux', definition: 'En vertu de l\'OHSA, un travailleur peut refuser un travail qu\'il estime dangereux. L\'employeur doit enquêter. Le travailleur ne peut être pénalisé pour l\'exercice de ce droit.' },
                              { type: 'paragraph', text: 'La procédure de refus : le travailleur signale la condition dangereuse au superviseur. Le superviseur enquête et soit corrige le problème, soit n\'est pas d\'accord. Si le désaccord persiste, un inspecteur du ministère du Travail est appelé. Le travailleur peut continuer de refuser jusqu\'à ce que le problème soit résolu.' },
                          ],
                      },
                      {
                          id: 's1-3',
                          title: '1.3 WHMIS — Système d\'information sur les matières dangereuses utilisées au travail',
                          content: [
                              { type: 'keyTerm', term: 'WHMIS 2015', definition: 'Système national canadien de communication des dangers, harmonisé avec le Système général harmonisé (SGH). Il exige des étiquettes de danger, des fiches de données de sécurité (FDS) et une formation des travailleurs pour tous les produits contrôlés.' },
                              { type: 'paragraph', text: 'Le WHMIS 2015 s\'applique à tous les produits dangereux utilisés dans les salons ontariens. Trois éléments fondamentaux constituent le WHMIS :' },
                              {
                                  type: 'numbered', items: [
                                      'Étiquettes de danger sur chaque contenant d\'un produit contrôlé',
                                      'Fiches de données de sécurité (FDS) — documents de 16 sections fournissant des informations complètes sur les dangers et la sécurité',
                                      'Formation et instruction des travailleurs sur les dangers et la manipulation sécuritaire',
                                  ]
                              },
                              {
                                  type: 'table', headers: ['Classe de danger WHMIS', 'Exemples dans le salon'], rows: [
                                      ['Liquides inflammables/combustibles', 'Laques pour cheveux en aérosol, toniques et sprays à base d\'alcool'],
                                      ['Agents oxydants', 'Développateurs au peroxyde d\'hydrogène (10–40 vol.)'],
                                      ['Corrosifs', 'Défrisants à l\'hydroxyde de sodium (pH 12–14), solutions pour permanente au thioglycolate'],
                                      ['Sensibilisants / Dangers respiratoires', 'PPD (paraphénylènediamine) dans les colorants oxydatifs, ammoniac dans les colorants et défrisants'],
                                      ['Gaz sous pression', 'Bombes aérosols (laque, shampoing sec, produits coiffants mousse)'],
                                      ['Cancérogènes', 'Formaldéhyde dans certains traitements brésiliens à la kératine'],
                                      ['Dangers pour la reproduction/le développement', 'Certains produits chimiques — consulter la FDS pendant la grossesse'],
                                  ]
                              },
                              { type: 'paragraph', text: 'La fiche de données de sécurité (FDS) comporte 16 sections normalisées. Les sections les plus pertinentes pour l\'examen sont :' },
                              {
                                  type: 'table', headers: ['Section FDS', 'Contenu'], rows: [
                                      ['Section 1', 'Identification du produit — nom du produit, fournisseur, utilisation prévue, contact d\'urgence'],
                                      ['Section 2', 'Identification des dangers — pictogrammes SGH, mentions d\'avertissement, mentions de danger'],
                                      ['Section 3', 'Composition / ingrédients — composants chimiques actifs et concentrations'],
                                      ['Section 4', 'Premiers soins — que faire en cas d\'ingestion, d\'inhalation ou de contact avec la peau/les yeux'],
                                      ['Section 7', 'Manipulation et stockage — pratiques sécuritaires, incompatibilités, conditions de stockage'],
                                      ['Section 8', 'Contrôles de l\'exposition / EPI — gants, ventilation, protection oculaire, protection respiratoire'],
                                      ['Section 11', 'Informations toxicologiques — effets sur la santé, voies d\'exposition, effets chroniques'],
                                      ['Section 13', 'Considérations relatives à l\'élimination — comment éliminer en toute sécurité le produit et son contenant'],
                                  ]
                              },
                              { type: 'keyTerm', term: 'Mention d\'avertissement', definition: 'Un mot sur une étiquette WHMIS/SGH indiquant le degré relatif de danger : "DANGER" indique un danger plus grave ; "ATTENTION" indique un danger moins grave.' },
                              { type: 'keyTerm', term: 'Pictogrammes SGH', definition: 'Symboles normalisés sur les étiquettes WHMIS qui communiquent visuellement le type de danger — par exemple, flamme (inflammable), tête de mort (toxique), point d\'exclamation (irritant), danger pour la santé (cancérogène/sensibilisant).' },
                              { type: 'paragraph', text: 'Équipement de protection individuelle (EPI) requis lors de la manipulation de produits chimiques en salon :' },
                              {
                                  type: 'bullets', items: [
                                      'Gants en nitrile ou en latex — toujours lors de l\'application de couleur, de défrisants ou de permanentes',
                                      'Lunettes de sécurité ou écran facial — lors du mélange ou de l\'application de services chimiques près du visage',
                                      'Tablier ou blouse résistant aux produits chimiques — protège les vêtements et la peau',
                                      'Ventilation adéquate — ouvrir les fenêtres ou utiliser des ventilateurs d\'extraction lors de l\'application de produits chimiques forts',
                                      'Protection respiratoire — pour les traitements contenant du formaldéhyde',
                                  ]
                              },
                          ],
                      },
                      {
                          id: 's1-4',
                          title: '1.4 Droits des clients, consentement et non-discrimination',
                          content: [
                              { type: 'paragraph', text: 'Le Code des droits de la personne de l\'Ontario interdit la discrimination dans les services fondée sur la race, l\'ascendance, le lieu d\'origine, la couleur, l\'origine ethnique, la citoyenneté, la croyance, le sexe, l\'orientation sexuelle, l\'identité de genre, l\'âge, l\'état matrimonial, la situation de famille ou le handicap. Tout client qui entre dans un salon a le droit légal à un service égal et professionnel.' },
                              { type: 'keyTerm', term: 'Consentement éclairé', definition: 'L\'accord volontaire du client à recevoir un service après avoir été pleinement informé de la procédure, des produits à utiliser, des risques potentiels, des résultats attendus et des exigences de suivi.' },
                              { type: 'paragraph', text: 'Le consentement éclairé est requis avant chaque service chimique. Le coiffeur doit :' },
                              {
                                  type: 'bullets', items: [
                                      'Expliquer la procédure complète et tous les produits impliqués',
                                      'Divulguer tout risque connu (p. ex., risque de réaction allergique, dommages aux cheveux)',
                                      'Effectuer les tests requis (test épicutané, test sur mèche) et documenter les résultats',
                                      'Donner au client la possibilité de poser des questions et de refuser le service',
                                      'Enregistrer le consentement et les conclusions de la consultation sur la fiche client',
                                  ]
                              },
                              { type: 'keyTerm', term: 'Loi sur la protection des renseignements personnels (PIPEDA)', definition: 'Loi fédérale régissant la manière dont les organisations du secteur privé collectent, utilisent et divulguent les renseignements personnels. Les dossiers des clients doivent rester confidentiels et être utilisés uniquement aux fins pour lesquelles ils ont été collectés.' },
                              { type: 'paragraph', text: 'Champ d\'exercice : un coiffeur ne peut effectuer que les services relevant de sa formation et de son permis. Les services hors de ce champ — comme le traitement de problèmes médicaux du cuir chevelu, l\'exécution de procédures invasives ou la recommandation de médicaments sur ordonnance — doivent être orientés vers le professionnel de santé approprié.' },
                          ],
                      },
                      {
                          id: 's1-5',
                          title: '1.5 Conduite professionnelle et environnement du salon',
                          content: [
                              { type: 'paragraph', text: 'Le maintien d\'un environnement professionnel en salon nécessite une attention constante à la conduite, à l\'apparence et aux relations avec la clientèle.' },
                              {
                                  type: 'table', headers: ['Domaine', 'Norme professionnelle'], rows: [
                                      ['Apparence personnelle', 'Tenue propre et élégante adaptée à l\'environnement du salon ; présentation personnelle soignée'],
                                      ['Ponctualité', 'Arriver à l\'heure ou en avance ; contacter rapidement les clients en cas de retard'],
                                      ['Langage et ton', 'Utiliser un langage professionnel et respectueux en tout temps ; éviter les commérages ou les propos négatifs sur d\'autres clients ou collègues'],
                                      ['Étiquette téléphonique', 'Répondre avec le nom du salon et votre nom ; parler clairement et chaleureusement ; prendre des messages précis'],
                                      ['Conduite sur les médias sociaux', 'Publier uniquement avec la permission du client ; représenter la marque du salon de manière professionnelle ; ne jamais publier de commentaires négatifs sur des clients ou des employeurs'],
                                      ['Résolution de conflits', 'Traiter les préoccupations calmement et en privé ; faire appel à la direction si nécessaire ; documenter tous les incidents'],
                                  ]
                              },
                          ],
                      },
                  ],
                  practiceQuestions: [
                      { id: 'q1-1', question: 'En vertu de l\'OHSA, lequel des énoncés suivants est un droit du travailleur ?', options: ['Le droit de refuser un travail dangereux sans pénalité', 'Le droit de choisir sa propre marque d\'EPI', 'Le droit de modifier les ratios de dilution des produits chimiques', 'Le droit de sauter la formation WHMIS si expérimenté'], correctIndex: 0, explanation: 'L\'OHSA accorde aux travailleurs trois droits clés : savoir, participer et refuser. Le droit de refuser un travail dangereux sans représailles est explicitement protégé par la loi.' },
                      { id: 'q1-2', question: 'Une fiche de données de sécurité (FDS) pour un développateur au peroxyde d\'hydrogène le classerait dans quelle classe de danger WHMIS ?', options: ['Liquide inflammable', 'Agent oxydant', 'Gaz sous pression', 'Cancérogène'], correctIndex: 1, explanation: 'Le peroxyde d\'hydrogène libère de l\'oxygène et est classé comme agent oxydant selon le WHMIS. Les oxydants peuvent intensifier la combustion et sont courants dans les salons comme développateurs de couleur pour cheveux.' },
                      { id: 'q1-3', question: 'Laquelle des propositions suivantes décrit le mieux l\'éthique professionnelle en coiffure ?', options: ['Règles établies uniquement par l\'employeur pouvant changer à tout moment', 'Normes morales guidant le comportement professionnel pour protéger les clients et les collègues', 'Techniques techniques de coupe et de coloration', 'Les exigences de salaire minimum en vertu du droit du travail'], correctIndex: 1, explanation: 'L\'éthique professionnelle englobe la courtoisie, la compétence, la non-discrimination, la confidentialité et l\'honnêteté. Ce sont des principes moraux — pas seulement des politiques d\'employeur ou des compétences techniques.' },
                      { id: 'q1-4', question: 'Quel est le terme correct pour le document qui fournit des informations de sécurité détaillées en 16 sections sur un produit chimique ?', options: ['Livret d\'instructions du fabricant', 'Fiche de données de sécurité (FDS)', 'Étiquette de produit dangereux', 'Feuille de règlement OHSA'], correctIndex: 1, explanation: 'Anciennement appelé MSDS, la FDS fournit 16 sections normalisées d\'informations de sécurité comme l\'exige le WHMIS 2015 / SGH.' },
                      { id: 'q1-5', question: 'La responsabilité d\'un employeur en vertu de l\'OHSA comprend :', options: ['Acheter tous les produits d\'hygiène personnelle pour les employés', 'Fournir un lieu de travail sûr et la formation nécessaire aux travailleurs', 'Décider quels clients les coiffeurs peuvent servir', 'Établir les normes provinciales de prix pour les services'], correctIndex: 1, explanation: 'Les employeurs doivent fournir des informations sur la sécurité, la formation, la supervision et un environnement physique sûr en vertu de l\'OHSA.' },
                      { id: 'q1-6', question: 'Avant d\'effectuer un service chimique, un client doit fournir :', options: ['Une preuve d\'identité', 'Un consentement éclairé après avoir été informé de la procédure, des produits et des risques', 'Un contrat écrit', 'Ses antécédents médicaux complets'], correctIndex: 1, explanation: 'Le consentement éclairé signifie que le client accepte volontairement après avoir été pleinement informé. C\'est une exigence éthique et légale avant tout service chimique ou potentiellement risqué.' },
                      { id: 'q1-7', question: 'Quelle mention d\'avertissement sur une étiquette WHMIS indique un danger PLUS GRAVE ?', options: ['Prudence', 'Attention', 'Danger', 'Avis'], correctIndex: 2, explanation: 'Selon le WHMIS 2015 (SGH), "DANGER" est utilisé pour les dangers plus graves et "ATTENTION" pour les dangers moins graves. Il n\'y a que deux mentions d\'avertissement.' },
                      { id: 'q1-8', question: 'Un coiffeur remarque qu\'un client a une éruption cutanée sur le cuir chevelu qui pourrait être une infection fongique. La bonne action est de :', options: ['Appliquer un shampoing médicamenteux et procéder au service', 'Orienter le client vers un médecin et refuser le service jusqu\'à guérison', 'Effectuer le service avec soin en évitant la zone affectée', 'Demander au client s\'il a un diagnostic'], correctIndex: 1, explanation: 'Effectuer un service sur un cuir chevelu potentiellement contagieux ou médicalement compromis sort du champ d\'exercice, pourrait propager l\'infection et nuire au client.' },
                  ],
              },

              // ─── CHAPITRE 2 ────────────────────────────────────────────────────────
              {
                  id: 'ch-2',
                  number: 2,
                  title: 'Santé et sécurité',
                  subtitle: 'S1732 — Microbiologie, niveaux de décontamination, désinfectants, sécurité électrique, ergonomie',
                  isFree: true,
                  estimatedMinutes: 35,
                  sections: [
                      {
                          id: 's2-1',
                          title: '2.1 Fondamentaux de la microbiologie',
                          content: [
                              { type: 'paragraph', text: 'Un coiffeur travaille à proximité physique immédiate des clients et manipule des outils qui entrent en contact avec la peau et les cheveux. Comprendre la microbiologie aide à prévenir la propagation des infections.' },
                              { type: 'keyTerm', term: 'Microorganisme', definition: 'Un organisme vivant trop petit pour être vu à l\'œil nu — comprend les bactéries, les virus, les champignons et les parasites.' },
                              { type: 'keyTerm', term: 'Pathogène', definition: 'Capable de provoquer une maladie ou une infection — les pathogènes préoccupants en salon sont les bactéries, les virus, les champignons et les parasites.' },
                              { type: 'keyTerm', term: 'Non pathogène', definition: 'Incapable de provoquer une maladie dans des circonstances normales — la plupart des microorganismes sont non pathogènes.' },
                              {
                                  type: 'table', headers: ['Type de microorganisme', 'Description', 'Exemples en salon'], rows: [
                                      ['Bactéries (pathogènes)', 'Organismes unicellulaires ; peuvent être tuées par les désinfectants au stade actif ; certaines forment des spores', 'Staphylococcus (infections cutanées), MRSA, Streptococcus'],
                                      ['Virus', 'Nécessite une cellule hôte pour se répliquer ; beaucoup plus petit que les bactéries ; non affecté par les antibiotiques', 'Hépatite B, VIH, VPH, rhume, COVID-19'],
                                      ['Champignons', 'Comprend les moisissures, les levures et les dermatophytes (teigne)', 'Tinea capitis (teigne du cuir chevelu), tinea pedis (pied d\'athlète)'],
                                      ['Parasite', 'Vit sur ou à l\'intérieur d\'un organisme hôte aux dépens de celui-ci', 'Pediculosis capitis (poux de tête), Sarcoptes scabiei (gale)'],
                                  ]
                              },
                              {
                                  type: 'table', headers: ['Forme des bactéries', 'Nom', 'Exemple'], rows: [
                                      ['Sphérique / ronde', 'Coques', 'Staphylococcus aureus (infections à staphylocoques)'],
                                      ['En forme de bâtonnet', 'Bacilles', 'Mycobacterium tuberculosis (TB)'],
                                      ['Spirale / tire-bouchon', 'Spirilles', 'Treponema pallidum (syphilis)'],
                                  ]
                              },
                              { type: 'paragraph', text: 'Les bactéries peuvent exister à deux stades :' },
                              {
                                  type: 'bullets', items: [
                                      'Stade actif (végétatif) : les bactéries se développent et se reproduisent ; elles sont vulnérables aux désinfectants à ce stade',
                                      'Stade inactif (sporulation) : lorsque les conditions sont défavorables, certaines bactéries forment des enveloppes protectrices épaisses appelées endospores. Les spores sont très résistantes à la plupart des désinfectants et à la chaleur — seule la stérilisation peut les détruire',
                                  ]
                              },
                              {
                                  type: 'infoBox', title: 'Voies de transmission en salon', items: [
                                      'CONTACT DIRECT — toucher une peau, du sang ou des fluides corporels infectés (p. ex., couper un client avec une entaille)',
                                      'CONTACT INDIRECT — partage d\'outils, de serviettes ou de surfaces contaminés',
                                      'VOIE AÉRIENNE — inhalation de gouttelettes de toux, d\'éternuements ou de sprays aérosols',
                                      'VOIE SANGUINE — l\'hépatite B, l\'hépatite C et le VIH peuvent être transmis par contact avec le sang',
                                  ]
                              },
                          ],
                      },
                      {
                          id: 's2-2',
                          title: '2.2 Hygiène, désinfection et stérilisation',
                          content: [
                              {
                                  type: 'infoBox', title: 'Trois niveaux de décontamination — Par ordre d\'efficacité', items: [
                                      '1. HYGIÈNE — niveau le plus bas. Réduit le nombre de pathogènes à un niveau sûr ; élimine les débris visibles. Exemple : laver les instruments avec de l\'eau et du savon, laver les serviettes.',
                                      '2. DÉSINFECTION — niveau intermédiaire. Tue la plupart des pathogènes (bactéries, virus, champignons) sur les surfaces non vivantes. Ne tue PAS toutes les spores. Requis pour les outils de salon. Exemples : ammoniums quaternaires, phénoliques, solution d\'eau de Javel.',
                                      '3. STÉRILISATION — niveau le plus élevé. Détruit TOUS les microorganismes, y compris les spores bactériennes. Requis pour les instruments médicaux/chirurgicaux. Obtenue avec des autoclaves (vapeur sous pression). Rarement utilisée en salon.',
                                  ]
                              },
                              {
                                  type: 'table', headers: ['Désinfectant', 'Ingrédient actif', 'Utilisation en salon', 'Limites'], rows: [
                                      ['Ammoniums quaternaires', 'Sels d\'ammonium quaternaire', 'Désinfectant de salon le plus courant ; instruments, surfaces, bols', 'Peut ne pas tuer tous les virus à faible concentration ; peut laisser des résidus'],
                                      ['Phénoliques', 'Composés à base de phénol', 'Large spectre ; surfaces et instruments', 'Peut endommager le plastique/caoutchouc en cas d\'utilisation prolongée ; odeur forte'],
                                      ['Eau de Javel (hypochlorite de sodium)', 'Dilution 1:10 (10 %)', 'Déversements de sang/fluides corporels ; surfaces', 'Corrosif pour le métal ; se dégrade rapidement ; doit être fraîchement mélangée chaque jour'],
                                      ['Alcool isopropylique (70 %)', 'Alcool isopropylique 70 %', 'Peau, petits outils métalliques, surfaces', 'S\'évapore rapidement ; PAS pour immersion ; inflammable'],
                                      ['Désinfectant enregistré par Santé Canada/EPA', 'Varie selon le produit', 'Tout produit avec DIN de Santé Canada', 'Doit suivre précisément les instructions sur l\'étiquette pour l\'efficacité'],
                                  ]
                              },
                              { type: 'paragraph', text: 'Procédure de désinfection appropriée pour les instruments de salon :' },
                              {
                                  type: 'numbered', items: [
                                      'PRÉ-NETTOYAGE — enlever tous les débris visibles avec de l\'eau et du savon (étape essentielle — les désinfectants ne peuvent pas pénétrer la matière organique)',
                                      'RINÇAGE — rincer à l\'eau propre',
                                      'IMMERSION OU ESSUYAGE — immerger dans la solution désinfectante pendant le temps de contact requis (suivre l\'étiquette du produit), ou essuyer avec une lingette désinfectante',
                                      'RINÇAGE (si requis par l\'étiquette)',
                                      'SÉCHAGE — ranger dans un récipient propre, fermé et sec',
                                  ]
                              },
                              {
                                  type: 'table', headers: ['Article / Surface', 'Méthode de décontamination appropriée'], rows: [
                                      ['Ciseaux, peignes, pinces', 'Pré-nettoyage → immersion dans le désinfectant pendant tout le temps de contact'],
                                      ['Tondeuses électriques', 'Enlever les cheveux → vaporiser/essuyer la lame avec un spray désinfectant — NE PAS immerger'],
                                      ['Fers à friser / fers plats', 'Refroidir complètement → essuyer avec une lingette désinfectante — NE PAS immerger ni vaporiser près des connexions électriques'],
                                      ['Bols de shampoing et chaises', 'Vaporiser avec un désinfectant après chaque client ; essuyer soigneusement'],
                                      ['Serviettes et capes', 'Laver à l\'eau chaude avec détergent entre chaque client ; ranger les serviettes propres dans une armoire fermée'],
                                      ['Lames de rasoir', 'Usage unique seulement — jeter dans un conteneur pour objets tranchants après chaque client'],
                                      ['Bandes de cou et coton', 'Jetables — utiliser une fois et jeter dans un récipient fermé'],
                                  ]
                              },
                              { type: 'keyTerm', term: 'Temps de contact', definition: 'La durée pendant laquelle un désinfectant doit rester en contact avec une surface ou un instrument pour être efficace — doit suivre exactement l\'étiquette du produit ; essuyer trop tôt rend le désinfectant inefficace.' },
                          ],
                      },
                      {
                          id: 's2-3',
                          title: '2.3 Sécurité électrique en salon',
                          content: [
                              {
                                  type: 'table', headers: ['Terme électrique', 'Définition', 'Pertinence en salon'], rows: [
                                      ['Tension (V)', 'La pression électrique poussant le courant dans un circuit', 'Prises nord-américaines standard : 120 V ; les outils puissants peuvent nécessiter 240 V'],
                                      ['Intensité / Courant (A)', 'Le volume/quantité de flux électrique', 'Trop d\'intensité provoque une surchauffe et des incendies ; les disjoncteurs protègent contre cela'],
                                      ['Puissance (W)', 'Le taux de consommation d\'énergie ; W = V × A', 'Sèche-cheveux : 1500–2000 W ; fers à friser : 40–100 W'],
                                      ['Résistance (Ω)', 'Opposition au flux électrique ; génère de la chaleur', 'Les cordons endommagés ont une résistance accrue et peuvent provoquer une surchauffe/un incendie'],
                                      ['Mise à la terre', 'Un chemin de sécurité pour l\'électricité excédentaire', 'Les fiches à trois broches sont mises à la terre — toujours utiliser des prises à trois trous'],
                                  ]
                              },
                              { type: 'paragraph', text: 'Règles de sécurité électrique que tout coiffeur doit suivre :' },
                              {
                                  type: 'bullets', items: [
                                      'Ne jamais utiliser d\'appareils électriques près de l\'eau — les appareils électriques près des éviers ou des zones de shampoing doivent être tenus à l\'écart des sources d\'eau',
                                      'Inspecter régulièrement les cordons — les cordons effilochés, craquelés ou pincés présentent un risque d\'incendie et de choc électrique ; signaler et remplacer immédiatement',
                                      'Ne jamais surcharger les prises — utiliser des multiprises avec protection contre les surtensions ; ne pas connecter les rallonges en série',
                                      'Ranger correctement les appareils thermiques — toujours placer les fers à friser et les fers plats dans des supports thermorésistants désignés ; ne jamais les poser sur des serviettes ou des surfaces',
                                      'Garder les filtres propres — les filtres à charpie des sèche-cheveux et des casques doivent être nettoyés régulièrement pour éviter la surchauffe et les incendies',
                                      'Débrancher lorsqu\'ils ne sont pas utilisés — réduit le risque d\'incendie et la consommation d\'énergie',
                                      'Ne jamais modifier l\'équipement — ne pas retirer les broches de mise à la terre ni contourner les dispositifs de sécurité',
                                      'Suivre les spécifications du fabricant — utiliser les outils uniquement aux réglages de température/tension spécifiés',
                                  ]
                              },
                              {
                                  type: 'infoBox', title: 'Intervention d\'urgence — Incidents électriques', items: [
                                      'CHOC ÉLECTRIQUE : Ne touchez PAS la personne — vous risquez l\'électrocution. Coupez d\'abord l\'alimentation au disjoncteur, puis appelez le 911, puis prodiguez les premiers soins',
                                      'INCENDIE ÉLECTRIQUE : N\'utilisez PAS d\'eau sur un incendie électrique — utilisez un extincteur de classe C (CO₂ ou chimique sec). Évacuez d\'abord si l\'incendie se propage.',
                                      'CORDON ENDOMMAGÉ / PRISE QUI ÉTINCELLE : Débranchez immédiatement (au disjoncteur s\'il est dangereux de toucher la fiche), ne pas utiliser avant réparation par un électricien qualifié',
                                  ]
                              },
                          ],
                      },
                      {
                          id: 's2-4',
                          title: '2.4 Procédures d\'urgence et premiers soins',
                          content: [
                              { type: 'paragraph', text: 'Chaque salon doit avoir un plan d\'intervention d\'urgence clair et tout le personnel doit le connaître.' },
                              {
                                  type: 'table', headers: ['Urgence', 'Réponse correcte'], rows: [
                                      ['Brûlure chimique / contact cutané', 'Rincer à l\'eau courante fraîche pendant 15–20 minutes ; retirer les vêtements contaminés ; consulter un médecin si la reaction persiste ou est sévère'],
                                      ['Produit chimique dans les yeux', 'Rincer immédiatement à l\'eau pendant 15+ minutes de l\'intérieur vers l\'extérieur ; appeler le 911 si la vision est affectée ; apporter la FDS à l\'hôpital'],
                                      ['Réaction allergique (légère)', 'Arrêter le service ; retirer le produit ; rincer à l\'eau fraîche ; documenter et surveiller ; orienter vers un médecin'],
                                      ['Anaphylaxie (réaction allergique sévère)', 'Appeler immédiatement le 911 ; utiliser un auto-injecteur d\'épinéphrine (EpiPen) si disponible et formé ; allonger le client à plat, jambes surélevées ; NE RIEN donner par la bouche'],
                                      ['Incendie', 'Déclencher l\'alarme incendie ; évacuer tous les clients et le personnel ; appeler le 911 de l\'extérieur ; utiliser un extincteur (méthode PASS) seulement si c\'est sûr et que vous êtes formé'],
                                      ['Coupure accidentelle / saignement', 'Appliquer une pression directe avec un chiffon propre ; porter des gants ; traiter comme potentiellement transmissible par le sang ; suivre le protocole d\'exposition au sang'],
                                  ]
                              },
                              { type: 'keyTerm', term: 'Méthode PASS (extincteur)', definition: 'Tirer la goupille (Pull) → Viser la base du feu (Aim) → Presser la poignée (Squeeze) → Balayer de gauche à droite à la base (Sweep).' },
                              {
                                  type: 'bullets', items: [
                                      'Connaître l\'emplacement de toutes les trousses de premiers soins, extincteurs et stations de rinçage oculaire',
                                      'Afficher les numéros d\'urgence (911, Centre antipoison : 1-800-268-9017) dans un endroit visible',
                                      'Suivre la formation sur les interventions d\'urgence en milieu de travail si votre employeur l\'exige',
                                  ]
                              },
                          ],
                      },
                      {
                          id: 's2-5',
                          title: '2.5 Hygiène personnelle, santé et ergonomie',
                          content: [
                              { type: 'paragraph', text: 'La coiffure est physiquement exigeante. Les troubles musculo-squelettiques sont l\'un des problèmes de santé professionnelle les plus courants dans le métier — évitables grâce à une ergonomie et des soins personnels appropriés.' },
                              { type: 'keyTerm', term: 'Ergonomie', definition: 'La science qui consiste à concevoir l\'environnement de travail et les pratiques de travail en fonction des besoins physiques et cognitifs du travailleur — réduire les risques de blessures et améliorer l\'efficacité.' },
                              {
                                  type: 'table', headers: ['Zone corporelle à risque', 'Problème courant', 'Stratégie de prévention'], rows: [
                                      ['Dos / colonne vertébrale', 'Tension lombaire due à la station debout prolongée et aux flexions', 'Se tenir debout avec le poids réparti uniformément ; régler la hauteur du fauteuil pour chaque client ; faire des pauses d\'étirement'],
                                      ['Poignets / mains', 'Lésion due aux mouvements répétitifs (RSI), syndrome du canal carpien', 'Garder les poignets neutres lors de la coupe ; utiliser des ciseaux légers ; s\'étirer entre les clients'],
                                      ['Épaules / cou', 'Tension due au travail en hauteur et à une mauvaise posture', 'Garder les coudes près du corps ; régler la hauteur du client ; alterner les services'],
                                      ['Pieds et jambes', 'Fatigue, varices, fasciite plantaire', 'Porter des chaussures de soutien anti-fatigue ; utiliser des tapis anti-fatigue ; varier votre position debout'],
                                  ]
                              },
                              { type: 'paragraph', text: 'Normes d\'hygiène personnelle requises en salon :' },
                              {
                                  type: 'bullets', items: [
                                      'Bain/douche quotidien et cheveux propres en tout temps',
                                      'Ongles propres, coupés et sans vernis ou avec vernis soigné (les ongles longs nuisent à la prise des ciseaux et peuvent griffer les clients)',
                                      'Tenue professionnelle propre lavée régulièrement — éviter les parfums/eaux de Cologne forts qui pourraient déclencher des sensibilités chez les clients',
                                      'Utiliser un déodorant — la proximité physique avec les clients exige une présentation fraîche et neutre',
                                      'Absence d\'odeur de tabac sur les vêtements, les cheveux ou l\'haleine pendant le service',
                                  ]
                              },
                          ],
                      },
                  ],
                  practiceQuestions: [
                      { id: 'q2-1', question: 'Quel est le niveau de décontamination le PLUS ÉLEVÉ ?', options: ['Hygiène', 'Désinfection', 'Stérilisation', 'Fumigation'], correctIndex: 2, explanation: 'La stérilisation détruit TOUS les microorganismes, y compris les spores bactériennes résistantes. C\'est le niveau le plus élevé. Les autoclaves (vapeur sous pression) assurent la stérilisation. La désinfection tue la plupart des pathogènes mais pas toutes les spores.' },
                      { id: 'q2-2', question: 'Quelles bactéries forment des enveloppes protectrices épaisses pour survivre dans des conditions défavorables ?', options: ['Coques au stade actif', 'Bacilles au stade actif', 'Bactéries sporulantes au stade inactif', 'Spirilles à tous les stades'], correctIndex: 2, explanation: 'Les endospores bactériennes sont formées au stade inactif. Elles sont très résistantes à la plupart des désinfectants et à la chaleur. Seule la stérilisation peut les détruire.' },
                      { id: 'q2-3', question: 'Du sang a contaminé la cape d\'un coiffeur. La méthode d\'élimination correcte est :', options: ['Le jeter à la poubelle ordinaire', 'Le laver avec d\'autres capes à haute température', 'Le mettre dans un double sac pour déchets biomédicaux et suivre les règlements locaux', 'Le tremper dans une solution d\'ammonium quaternaire pendant 24 heures'], correctIndex: 2, explanation: 'Les articles contaminés par du sang doivent être traités comme des déchets biomédicaux. Le double ensachage et l\'élimination réglementaire protègent le personnel et les manipulateurs de déchets des pathogènes transmissibles par le sang.' },
                      { id: 'q2-4', question: 'Quel désinfectant ne doit PAS être utilisé pour immerger des instruments métalliques car il corrode le métal ?', options: ['Ammoniums quaternaires', 'Phénoliques', 'Eau de Javel (hypochlorite de sodium)', 'Alcool isopropylique à 70 %'], correctIndex: 2, explanation: 'L\'eau de Javel (hypochlorite de sodium) est très corrosive pour les instruments métalliques et provoquera des piqûres, un ternissement et de la rouille en cas d\'exposition prolongée.' },
                      { id: 'q2-5', question: 'La PREMIÈRE étape de la désinfection d\'une paire de ciseaux entre les clients est :', options: ['Immerger dans une solution désinfectante pendant le temps de contact requis', 'Essuyer avec une lingette alcoolisée', 'Enlever tous les débris visibles avec de l\'eau et du savon (pré-nettoyage)', 'Rincer à l\'eau chaude'], correctIndex: 2, explanation: 'Le pré-nettoyage pour enlever toute matière organique visible (cheveux, débris) DOIT avoir lieu avant la désinfection. Les désinfectants ne peuvent pas pénétrer la matière organique et seront inefficaces si cette étape est sautée.' },
                      { id: 'q2-6', question: 'Un coiffeur découvre qu\'un client a la pédiculose (poux de tête). La bonne action est :', options: ['Appliquer un shampoing médicamenteux et effectuer le service', 'Refuser le service et orienter le client vers un médecin', 'Mettre des serviettes supplémentaires et effectuer uniquement la coupe', 'Utiliser des gants jetables et procéder au service'], correctIndex: 1, explanation: 'Les poux de tête sont des parasites qui se propagent facilement en salon. Le service doit être refusé, le client orienté pour un traitement, et tous les instruments et linges doivent être soigneusement nettoyés et désinfectés.' },
                      { id: 'q2-7', question: 'La bonne réaction quand un client reçoit de la teinture capillaire dans l\'œil est :', options: ['Appliquer un shampoing neutralisant sur l\'œil', 'Rincer l\'œil à l\'eau pendant 15 minutes ou plus', 'Placer un chiffon frais sur l\'œil fermé', 'Rincer avec une solution d\'eau de Javel à 1:10'], correctIndex: 1, explanation: 'L\'exposition chimique des yeux nécessite un rinçage immédiat et prolongé à l\'eau propre pendant au moins 15 minutes. Une consultation médicale doit suivre.' },
                      { id: 'q2-8', question: 'Quel trouble musculaire est courant chez les coiffeurs en raison des mouvements répétitifs de préhension et du poignet ?', options: ['Fasciite plantaire', 'Hernie discale lombaire', 'Syndrome du canal carpien', 'Déchirure de la coiffe des rotateurs'], correctIndex: 2, explanation: 'Le syndrome du canal carpien résulte de mouvements répétitifs de la main/du poignet et d\'une préhension soutenue — deux phénomènes très courants en coiffure. Des ciseaux ergonomiques, une position neutre du poignet et des pauses d\'étirement aident à le prévenir.' },
                  ],
              },

              // ─── CHAPITRE 3 ────────────────────────────────────────────────────────
              {
                  id: 'ch-3',
                  number: 3,
                  title: 'Compétences entrepreneuriales et gestion d\'entreprise',
                  subtitle: 'S1733 & S1741 — Service à la clientèle, gestion financière, communication et modèles d\'affaires de salon',
                  isFree: false,
                  estimatedMinutes: 30,
                  sections: [
                      {
                          id: 's3-1',
                          title: '3.1 Rôles et responsabilités du coiffeur',
                          content: [
                              { type: 'paragraph', text: 'Comprendre le cadre juridique qui régit l\'emploi et l\'apprentissage en Ontario est essentiel pour tous les coiffeurs.' },
                              { type: 'keyTerm', term: 'Convention de formation d\'apprenti', definition: 'Document juridique entre un apprenti et son employeur/parrain, enregistré auprès de l\'Ontario College of Trades, décrivant les obligations de formation, le salaire et la durée.' },
                              { type: 'keyTerm', term: 'Norme de formation', definition: 'Document officiel publié par Métiers spécialisés Ontario qui définit toutes les compétences (connaissances et habiletés) requises pour obtenir une certification dans un métier.' },
                              { type: 'keyTerm', term: 'Analyse nationale de la profession (ANP)', definition: 'Document national produit par le Conseil canadien des directeurs de l\'apprentissage (CCDA) qui identifie et normalise les compétences, connaissances et habiletés d\'un métier à travers le Canada — utilisé comme base pour les examens du Sceau rouge.' },
                              {
                                  type: 'table', headers: ['Législation / Organisme', 'Ce qu\'elle régit'], rows: [
                                      ['Loi de 2009 sur l\'Office des métiers de l\'Ontario et l\'apprentissage', 'Établit l\'Office des métiers de l\'Ontario ; régit la réglementation des métiers et l\'apprentissage en Ontario'],
                                      ['Loi sur les normes d\'emploi (LNE)', 'Salaire minimum, heures de travail, heures supplémentaires, indemnité de vacances, jours fériés, préavis de cessation d\'emploi, congé parental'],
                                      ['Loi sur la santé et la sécurité au travail (LSST)', 'Obligations des employeurs et des employés en matière de sécurité au travail'],
                                      ['Code des droits de la personne (Ontario)', 'Interdit la discrimination dans l\'emploi et les services'],
                                      ['Loi sur la sécurité professionnelle et l\'assurance contre les accidents du travail', 'Assurance et indemnisation des accidents du travail (WSIB)'],
                                      ['Loi sur la protection des renseignements personnels et les documents électroniques (LPRPDE)', 'Confidentialité des dossiers clients et des renseignements personnels'],
                                  ]
                              },
                          ],
                      },
                      {
                          id: 's3-2',
                          title: '3.2 Excellence du service à la clientèle',
                          content: [
                              { type: 'paragraph', text: 'Un service client exceptionnel est le fondement d\'une carrière réussie en coiffure. La compétence technique seule ne crée pas une clientèle fidèle — c\'est l\'expérience client qui le fait.' },
                              {
                                  type: 'table', headers: ['Étape de la visite client', 'Norme de service professionnel'], rows: [
                                      ['Arrivée / Accueil', 'Reconnaître le client dans les 30 secondes ; saluer par son nom si connu ; offrir une boisson ; se présenter si première visite'],
                                      ['Consultation', 'Accorder toute son attention ; poser des questions ouvertes ; écouter activement ; confirmer le plan de service avant de procéder'],
                                      ['Service', 'Travailler efficacement et avec confiance ; informer le client de l\'avancement ; vérifier son confort (température, pression, position)'],
                                      ['Achèvement', 'Montrer le résultat fini sous plusieurs angles ; recommander des produits d\'entretien à domicile ; expliquer la technique de coiffage utilisée'],
                                      ['Paiement', 'Traiter le paiement avec précision ; prendre rendez-vous pour la prochaine visite ; remercier le client par son nom ; l\'inviter à revenir'],
                                  ]
                              },
                              { type: 'keyTerm', term: 'Prise de rendez-vous préalable', definition: 'La pratique consistant à planifier le prochain rendez-vous du client avant qu\'il ne quitte le salon — la stratégie de fidélisation la plus efficace ; augmente la valeur à vie du client et les revenus prévisibles.' },
                              { type: 'keyTerm', term: 'Vente incitative', definition: 'Recommander un service de valeur supérieure ou un produit amélioré qui répondra mieux aux besoins du client — doit être sincère et axée sur les avantages, jamais fondée sur la pression.' },
                              { type: 'keyTerm', term: 'Recommandation de produit de détail', definition: 'Suggérer des produits de détail professionnels spécifiques qui répondent aux besoins capillaires du client — un moyen éthique et efficace de prolonger l\'expérience du client au-delà du salon.' },
                              { type: 'paragraph', text: 'Traiter les plaintes des clients de manière professionnelle :' },
                              {
                                  type: 'bullets', items: [
                                      'Écouter pleinement sans interrompre ni se mettre sur la défensive',
                                      'Reconnaître les sentiments du client — "Je comprends votre préoccupation et je veux arranger cela"',
                                      'Proposer une solution concrète (refaire le service, remboursement partiel, traitement offert)',
                                      'Documenter la plainte et son issue dans le dossier client',
                                      'Assurer un suivi par téléphone ou SMS pour vérifier la satisfaction',
                                      'Utiliser les plaintes comme opportunités d\'apprentissage pour améliorer votre pratique',
                                  ]
                              },
                          ],
                      },
                      {
                          id: 's3-3',
                          title: '3.3 Opérations financières en salon',
                          content: [
                              {
                                  type: 'bullets', items: [
                                      'Maintenir et équilibrer un fonds de caisse (l\'argent de départ dans la caisse au début de chaque quart de travail)',
                                      'Traiter avec précision les transactions par carte de crédit, de débit, virement et espèces',
                                      'Délivrer les reçus corrects pour chaque transaction',
                                      'Concilier les ventes de fin de journée avec le carnet de rendez-vous et les reçus',
                                      'Suivre les ventes au détail séparément des ventes de services pour une gestion précise des stocks',
                                      'Documenter tous les services effectués sur la fiche client (date, service, produits utilisés, prix)',
                                  ]
                              },
                              { type: 'keyTerm', term: 'Fonds de caisse', definition: 'Un montant fixe d\'argent conservé dans la caisse au début de chaque journée de travail pour pouvoir rendre la monnaie — doit être équilibré au début et à la fin de chaque quart de travail.' },
                              { type: 'paragraph', text: 'Les politiques d\'annulation et de non-présentation protègent les revenus du salon :' },
                              {
                                  type: 'bullets', items: [
                                      'Une politique d\'annulation standard exige généralement un préavis de 24 à 48 heures',
                                      'Les dépôts par carte de crédit ou les frais pour annulation tardive sont la norme dans l\'industrie',
                                      'Des frais de non-présentation peuvent être facturés aux clients qui ne se présentent pas et n\'appellent pas',
                                      'Une application cohérente et professionnelle de la politique est essentielle',
                                  ]
                              },
                          ],
                      },
                      {
                          id: 's3-4',
                          title: '3.4 Compétences en communication pour les coiffeurs',
                          content: [
                              {
                                  type: 'table', headers: ['Compétence de communication', 'Application en salon'], rows: [
                                      ['Écoute active', 'Accorder toute son attention ; maintenir le contact visuel ; ne pas interrompre ; reformuler pour confirmer la compréhension'],
                                      ['Questions ouvertes', 'Inviter le client à décrire ses souhaits : "Parlez-moi de votre style idéal" ou "Qu\'aimez-vous et que voudriez-vous changer ?"'],
                                      ['Questions fermées', 'Utiliser pour confirmer des détails spécifiques : "Avez-vous dit que vous vouliez que la longueur reste aux épaules ?" — réponse oui/non'],
                                      ['Signaux non verbaux', 'Maintenir une posture ouverte et confiante ; sourire ; hocher la tête pour montrer son engagement ; refléter le niveau d\'énergie du client de manière appropriée'],
                                      ['Alignement du vocabulaire', 'Utiliser un langage que le client comprend ; éviter le jargon technique sans explication'],
                                      ['Gestion des attentes', 'Être honnête sur ce qui est réalisable en une visite ; montrer des photos de résultats réalistes ; expliquer les limites éventuelles'],
                                  ]
                              },
                              { type: 'keyTerm', term: 'Consultation', definition: 'Une conversation structurée tenue avant chaque service pour évaluer l\'état des cheveux du client, comprendre ses objectifs, discuter des résultats réalistes et obtenir un consentement éclairé — l\'étape la plus importante de tout service.' },
                          ],
                      },
                      {
                          id: 's3-5',
                          title: '3.5 Modèles d\'affaires de salon et parcours professionnels',
                          content: [
                              {
                                  type: 'table', headers: ['Modèle d\'affaires', 'Description', 'Structure financière'], rows: [
                                      ['Employé', 'Travaille pour le propriétaire du salon selon un horaire établi', 'Reçoit un salaire horaire ou un traitement ; l\'employeur paie le RPC, l\'AE, les frais généraux, les produits'],
                                      ['Rémunération à la commission', 'Employé par le salon ; rémunéré en pourcentage des services effectués', 'Généralement 40–60 % de commission sur les services ; l\'employeur fournit tous les frais généraux'],
                                      ['Location de poste', 'Loue un poste/fauteuil au propriétaire du salon ; travaille de manière indépendante', 'Paie un loyer fixe au propriétaire du salon ; conserve tous les revenus des services et de la vente au détail ; paie ses propres produits et fournitures ; travailleur autonome'],
                                      ['Propriétaire de salon', 'Possède et gère le salon', 'Revenus de tous les services et de la vente au détail moins tous les coûts d\'exploitation (loyer, personnel, produits, assurances, services publics, etc.)'],
                                      ['Mobile / entrepreneur indépendant', 'Se déplace chez les clients ou travaille sans emplacement fixe', 'Fixe ses propres tarifs ; responsable de toutes les dépenses et obligations fiscales'],
                                  ]
                              },
                              { type: 'paragraph', text: 'Marketing avancé et fidélisation de la clientèle (niveau 2) :' },
                              {
                                  type: 'bullets', items: [
                                      'Présence sur les réseaux sociaux : publier des photos avant/après de haute qualité (avec le consentement du client) sur Instagram, TikTok et Pinterest',
                                      'Profil Google Business : gérer votre fiche ; répondre professionnellement à tous les avis',
                                      'Programmes de parrainage : récompenser les clients existants avec des réductions pour le parrainage de nouveaux clients',
                                      'Marketing par courriel et SMS : rappels de rendez-vous, promotions saisonnières, offres d\'anniversaire',
                                      'Programmes de fidélité : cartes de fidélité ou récompenses numériques pour les clients réguliers',
                                      'Photographie : constituer un portfolio solide de vos travaux pour le marketing et la formation',
                                  ]
                              },
                          ],
                      },
                  ],
                  practiceQuestions: [
                      { id: 'q3-1', question: 'Lequel des énoncés suivants est un exemple de prise de rendez-vous préalable ?', options: ['Appeler un client une semaine après son rendez-vous', 'Encourager un client à prendre son prochain rendez-vous avant de partir', 'Accepter les clients sans rendez-vous', 'Prendre plusieurs clients pour le même créneau horaire'], correctIndex: 1, explanation: 'La prise de rendez-vous préalable — planifier le prochain rendez-vous à la fin de la visite en cours — est la stratégie de fidélisation de la clientèle la plus efficace et fournit un revenu prévisible au coiffeur.' },
                      { id: 'q3-2', question: 'Un coiffeur loue un fauteuil au propriétaire du salon, garde tous ses gains et paie ses propres fournitures. Ce modèle s\'appelle :', options: ['Emploi à la commission', 'Location de poste', 'Emploi salarié', 'Propriété de franchise'], correctIndex: 1, explanation: 'La location de poste signifie que le coiffeur paie un loyer au propriétaire du salon et travaille comme entrepreneur indépendant, conservant tous ses revenus et couvrant toutes ses dépenses professionnelles personnelles.' },
                      { id: 'q3-3', question: 'En vertu de la Loi sur la protection des renseignements personnels (LPRPDE), les dossiers clients doivent :', options: ['Être affichés dans le salon pour des raisons de transparence', 'Rester confidentiels et accessibles uniquement au personnel autorisé', 'Être librement partagés entre tous les coiffeurs du salon', 'Être détruits après chaque visite pour protéger la vie privée du client'], correctIndex: 1, explanation: 'La LPRPDE exige que les renseignements personnels soient collectés dans un but précis, tenus à jour et protégés contre tout accès non autorisé. Les dossiers clients doivent être confidentiels.' },
                      { id: 'q3-4', question: 'Quelle loi régit le salaire minimum, les heures supplémentaires et l\'indemnité de vacances des employés de salon en Ontario ?', options: ['Loi sur la santé et la sécurité au travail (LSST)', 'Loi de 2009 sur l\'Office des métiers de l\'Ontario et l\'apprentissage', 'Loi sur les normes d\'emploi (LNE)', 'Code des droits de la personne'], correctIndex: 2, explanation: 'La Loi sur les normes d\'emploi établit les normes d\'emploi minimales en Ontario, y compris le salaire minimum, les heures maximales, la rémunération des heures supplémentaires, les vacances et les jours fériés.' },
                      { id: 'q3-5', question: 'Lors d\'une consultation avec un client, le MEILLEUR type de question pour recueillir des informations détaillées est :', options: ['Questions fermées (oui/non)', 'Questions suggestives', 'Questions ouvertes', 'Questions rhétoriques'], correctIndex: 2, explanation: 'Les questions ouvertes comme "Parlez-moi de votre routine actuelle" encouragent les clients à décrire leurs besoins en détail, donnant au coiffeur les informations nécessaires pour planifier le service.' },
                      { id: 'q3-6', question: 'Un client se plaint que le résultat de sa coloration n\'est pas celui qu\'il attendait. La PREMIÈRE étape est de :', options: ['Proposer immédiatement un remboursement complet', 'Demander au client de revenir voir le gérant', 'Écouter pleinement la préoccupation sans interrompre, puis reconnaître ses sentiments', 'Expliquer pourquoi le résultat est correct'], correctIndex: 2, explanation: 'La première étape de la résolution d\'une plainte est toujours d\'écouter pleinement et de reconnaître les sentiments du client sans se mettre sur la défensive. Cela désamorce la situation et démontre une réelle attention.' },
                  ],
              },

              // ─── CHAPITRE 4 ────────────────────────────────────────────────────────
              {
                  id: 'ch-4',
                  number: 4,
                  title: 'Développement professionnel',
                  subtitle: 'S1734 — Image professionnelle, objectifs SMART, formation continue et recherche de tendances',
                  isFree: false,
                  estimatedMinutes: 20,
                  sections: [
                      {
                          id: 's4-1',
                          title: '4.1 Construire et maintenir votre image professionnelle',
                          content: [
                              { type: 'keyTerm', term: 'Image professionnelle', definition: 'L\'ensemble de l\'impression que vous créez par votre apparence, votre attitude, votre communication, vos compétences techniques et votre conduite continue — votre marque personnelle en tant que coiffeur.' },
                              { type: 'paragraph', text: 'Votre image professionnelle se communique dans chaque interaction — avant même que vous ne prononciez un mot. Elle comprend votre hygiène personnelle, votre tenue, votre posture, votre langage, votre attitude et la qualité de votre travail. Dans une industrie de services fondée sur l\'esthétique et la confiance, votre présentation personnelle est votre marketing.' },
                              {
                                  type: 'table', headers: ['Dimension', 'Norme professionnelle'], rows: [
                                      ['Hygiène personnelle', 'Cheveux propres et bien coiffés ; ongles propres ; maquillage professionnel si porté ; parfum neutre et non offensant'],
                                      ['Tenue', 'Propre, élégante et cohérente avec l\'image de marque du salon ; fonctionnelle (permet une amplitude de mouvement complète) ; chaussures fermées'],
                                      ['Langage', 'Parler clairement et professionnellement ; éviter les grossièretés, l\'argot ou les commérages ; être positif et axé sur les solutions'],
                                      ['Attitude', 'Aborder chaque client avec un enthousiasme sincère ; rester positif même les jours difficiles ; incarner le professionnalisme que vous attendez des autres'],
                                      ['Portfolio', 'Maintenir un portfolio organisé de vos meilleurs travaux (avec le consentement des clients) pour le marketing et la formation'],
                                      ['Ponctualité', 'Arriver à l\'heure ou en avance ; communiquer proactivement en cas de retard ; respecter le temps des clients et des collègues'],
                                  ]
                              },
                              { type: 'keyTerm', term: 'Marque personnelle', definition: 'La combinaison unique de compétences, d\'apparence, de personnalité et de valeurs qui définit qui vous êtes en tant que professionnel et vous distingue sur le marché.' },
                          ],
                      },
                      {
                          id: 's4-2',
                          title: '4.2 Fixation d\'objectifs SMART pour l\'évolution de carrière',
                          content: [
                              { type: 'paragraph', text: 'La fixation d\'objectifs est une compétence professionnelle essentielle. Le cadre SMART transforme des ambitions vagues en plans concrets et réalisables.' },
                              {
                                  type: 'table', headers: ['Lettre', 'Signification', 'Exemple pour un coiffeur'], rows: [
                                      ['S', 'Spécifique — définir clairement ce que vous voulez accomplir', '"Développer ma technique de balayage à un niveau professionnel"'],
                                      ['M', 'Mesurable — identifier un moyen concret de mesurer le succès', '"Réaliser 10 services de balayage par mois"'],
                                      ['A', 'Atteignable — réaliste compte tenu de vos compétences, de votre temps et de vos ressources actuels', '"Pratiquer sur des modèles deux fois par semaine"'],
                                      ['R', 'Pertinent — aligné sur vos objectifs de carrière et vos valeurs plus larges', '"Le balayage est le service de coloration le plus demandé dans mon marché"'],
                                      ['T', 'Temporellement défini — fixer une échéance précise', '"Dans les 3 mois suivant cette certification"'],
                                  ]
                              },
                              { type: 'paragraph', text: 'Objectifs de carrière pour les coiffeurs :' },
                              {
                                  type: 'bullets', items: [
                                      'Court terme (0–1 an) : réussir l\'examen de certification STO ; maîtriser une nouvelle technique ; fidéliser une clientèle de 30+ clients réguliers',
                                      'Moyen terme (1–3 ans) : se spécialiser dans un domaine de service ; atteindre un revenu à temps plein grâce à la coiffure ; encadrer des apprentis',
                                      'Long terme (3–5+ ans) : ouvrir un salon ; enseigner dans un collège de coiffure ; participer à des compétitions provinciales ou nationales ; devenir éducateur pour une marque',
                                  ]
                              },
                          ],
                      },
                      {
                          id: 's4-3',
                          title: '4.3 Formation continue et tendances de l\'industrie',
                          content: [
                              { type: 'paragraph', text: 'L\'industrie de la beauté évolue constamment. Les coiffeurs qui cessent d\'apprendre deviennent rapidement dépassés. La formation continue est à la fois une obligation éthique (compétence) et une nécessité commerciale.' },
                              {
                                  type: 'table', headers: ['Voie de formation', 'Description / Accès'], rows: [
                                      ['Salons professionnels et expositions', 'International Beauty Show (New York), Premiere Orlando, Salon International (Londres) — démonstrations pratiques, nouveaux produits, compétitions'],
                                      ['Formation des fabricants', 'Wella, Redken, L\'Oréal, Schwarzkopf, Kerastase, Olaplex — formation aux techniques spécifiques aux produits, souvent gratuite ou à faible coût'],
                                      ['Certifications avancées', 'Certification balayage, certification extensions, ateliers de coupe de précision, formation croisée en coiffure pour hommes'],
                                      ['Plateformes en ligne', 'Bangstyle, BTC (Behind The Chair), Sam Villa Education, masterclasses YouTube, Instagram Lives'],
                                      ['Associations professionnelles', 'Ontario Cosmetology Association, Canadian Cosmetology Guild — réseautage, défense des intérêts, formation continue'],
                                      ['Compétitions', 'Compétitions de coiffure locales, provinciales, nationales — perfectionner ses compétences techniques et enrichir son portfolio'],
                                  ]
                              },
                              { type: 'paragraph', text: 'Pour rester à jour avec les tendances, une recherche active est nécessaire :' },
                              {
                                  type: 'bullets', items: [
                                      'Suivre les éducateurs et coiffeurs clés sur Instagram, TikTok et YouTube',
                                      'S\'abonner aux publications professionnelles (Salon Magazine, HairBrained, Modern Salon)',
                                      'Regarder les couvertures des semaines de la mode pour les nouvelles directions en matière de couleur, de coupe et de style',
                                      'Pratiquer les nouvelles techniques sur des mannequins avant de les proposer aux clients',
                                      'Assister à au moins un salon professionnel ou une formation de fabricant par an',
                                  ]
                              },
                          ],
                      },
                  ],
                  practiceQuestions: [
                      { id: 'q4-1', question: 'Un coiffeur se fixe un objectif : "Ajouter 10 nouveaux clients réguliers en 6 mois en assistant à 2 événements de réseautage par mois." C\'est un exemple de :', options: ['Aspiration vague', 'Objectif SMART', 'Énoncé de vision à long terme', 'Énoncé de mission'], correctIndex: 1, explanation: 'Cet objectif est Spécifique (10 nouveaux clients), Mesurable (traçable), Atteignable (événements de réseautage), Pertinent (évolution de carrière) et Temporellement défini (6 mois).' },
                      { id: 'q4-2', question: 'Lequel des énoncés suivants représente le MIEUX un développement professionnel continu complet pour un coiffeur ?', options: ['Se fier uniquement aux techniques apprises en apprentissage', 'Assister à des salons professionnels, à des formations de fabricants et suivre les publications de l\'industrie', 'Pratiquer uniquement les techniques demandées par les clients existants', 'Regarder une vidéo tutorielle par an'], correctIndex: 1, explanation: 'Le développement professionnel nécessite plusieurs canaux : formation pratique (salons, ateliers), connaissance des produits (formation des fabricants) et veille (publications, médias sociaux).' },
                      { id: 'q4-3', question: 'Quelle organisation publie l\'Analyse nationale de la profession (ANP) pour les coiffeurs ?', options: ['Métiers spécialisés Ontario', 'Ontario College of Trades', 'Conseil canadien des directeurs de l\'apprentissage (CCDA)', 'Ministère de l\'Éducation de l\'Ontario'], correctIndex: 2, explanation: 'L\'ANP est publiée par le CCDA et définit les compétences et les connaissances d\'un métier au niveau national. Elle constitue la base du Programme interprovincial Sceau rouge.' },
                      { id: 'q4-4', question: 'Lequel des énoncés suivants est un exemple d\'objectif de carrière À COURT TERME pour un coiffeur nouvellement certifié ?', options: ['Ouvrir son propre salon', 'Enseigner dans un collège de coiffure', 'Fidéliser une clientèle de 30 clients réguliers en un an', 'Devenir éducateur national pour une marque'], correctIndex: 2, explanation: 'Fidéliser une clientèle régulière est un objectif réaliste et mesurable à court terme, réalisable dans la première année de pratique. Les autres options sont des objectifs à long terme nécessitant des années d\'expérience.' },
                  ],
              },
          ],
      },

      // =========================================================================
      // PARTIE 2 — SCIENCE DU CHEVEU ET DU CUIR CHEVELU
      // =========================================================================
      {
          id: 'part-2',
          title: 'Partie 2 : Science du cheveu et du cuir chevelu',
          color: '#17A589',
          description: 'Les chapitres 5 et 6 établissent les bases scientifiques pour comprendre la structure du cheveu, la chimie et la santé du cuir chevelu — contexte essentiel pour chaque service technique.',
          chapters: [

              // ─── CHAPITRE 5 ────────────────────────────────────────────────────────
              {
                  id: 'ch-5',
                  number: 5,
                  title: 'Service à la clientèle, anatomie et science du cheveu',
                  subtitle: 'S1735 — Consultation, anatomie de la tête, structure du cheveu/de la peau, cycle de croissance et propriétés des cheveux',
                  isFree: false,
                  estimatedMinutes: 35,
                  sections: [
                      {
                          id: 's5-1',
                          title: '5.1 Le processus de consultation du client',
                          content: [
                              { type: 'paragraph', text: 'La consultation est l\'étape la plus critique de tout service. Elle établit la confiance, assure la sécurité, définit des attentes réalistes et constitue la base juridique du consentement éclairé. Ne jamais sauter ni précipiter la consultation.' },
                              {
                                  type: 'numbered', items: [
                                      'Accueillir le client et établir une relation — le mettre à l\'aise et lui faire sentir qu\'il est écouté',
                                      'Poser des questions ouvertes sur le résultat souhaité et le mode de vie',
                                      'Analyser visuellement et manuellement l\'état des cheveux et du cuir chevelu (texture, densité, porosité, élasticité, schéma de croissance)',
                                      'Tenir compte du mode de vie, du temps d\'entretien, du budget et de la capacité de coiffage',
                                      'Examiner l\'historique chimique — couleur, défrisants, permanentes ou traitements antérieurs',
                                      'Effectuer les pré-tests requis (test épicutané 24–48 h avant les services chimiques ; test sur mèche)',
                                      'Recommander et confirmer le plan de service — gérer les attentes honnêtement',
                                      'Obtenir le consentement éclairé avant de commencer',
                                      'Documenter toutes les conclusions sur la fiche client',
                                  ]
                              },
                              { type: 'keyTerm', term: 'Historique chimique', definition: 'L\'enregistrement complet de tous les services chimiques qu\'un client a subis sur ses cheveux — couleur, décoloration, défrisants, permanentes, traitements à la kératine — essentiel pour déterminer la sélection sécuritaire des produits et prévenir les réactions d\'incompatibilité.' },
                              {
                                  type: 'table', headers: ['Type de question de consultation', 'Exemple', 'But'], rows: [
                                      ['Résultat souhaité', '"Qu\'espérez-vous obtenir aujourd\'hui ?"', 'Comprendre l\'objectif sans orienter le client'],
                                      ['Mode de vie', '"Combien de temps passez-vous à vous coiffer chaque matin ?"', 'Déterminer les exigences d\'entretien'],
                                      ['Historique chimique', '"Avez-vous eu des services chimiques au cours des 12 derniers mois ?"', 'Identifier les incompatibilités potentielles'],
                                      ['Santé/sensibilité', '"Avez-vous une sensibilité du cuir chevelu ou des allergies aux produits capillaires ?"', 'Identifier les contre-indications ; déterminer si un test épicutané est nécessaire'],
                                      ['Inspiration', '"Avez-vous des photos de coiffures que vous aimez ?"', 'Aligner les attentes avec des résultats réalistes'],
                                  ]
                              },
                          ],
                      },
                      {
                          id: 's5-2',
                          title: '5.2 Anatomie de la tête et du visage',
                          content: [
                              { type: 'paragraph', text: 'Les décisions de coupe et de coiffage sont guidées par la structure de la tête et la forme du visage. Comprendre l\'anatomie permet aux coiffeurs de mettre en valeur les traits naturels et de créer des résultats équilibrés et flatteurs.' },
                              {
                                  type: 'table', headers: ['Point de repère', 'Emplacement', 'Pertinence pour la coupe'], rows: [
                                      ['Sommet (crown)', 'Point le plus haut et arrondi de la tête', 'Point focal pour l\'élévation et la distribution des couches'],
                                      ['Apex', 'Tout en haut/point culminant de la zone du sommet', 'Utilisé pour la distribution radiale et les points d\'ancrage des chignons'],
                                      ['Os occipital', 'Os proéminent à l\'arrière du crâne, où la tête s\'incurve', 'Repère clé pour établir la longueur arrière et la superposition'],
                                      ['Nuque', 'Ligne des cheveux à l\'arrière du cou', 'Référence pour la longueur arrière ; graduation dans les carrés et les dégradés'],
                                      ['Crête pariétale', 'Point le plus large de la tête — où le crâne commence à s\'incurver vers l\'intérieur vers le haut', 'Référence de ligne de poids ; détermine où changer l\'élévation'],
                                      ['Région temporale', 'Zone sur les côtés de la tête au-dessus et autour des oreilles', 'Guide les décisions concernant les favoris et la longueur des oreilles'],
                                      ['Quatre coins', 'Les quatre angles où la section supérieure rencontre les sections temporales/latérales', 'Utilisés pour distribuer les sections pour les coupes intérieures et extérieures'],
                                  ]
                              },
                              {
                                  type: 'table', headers: ['Forme du visage', 'Caractéristiques', 'Approche flatteuse'], rows: [
                                      ['Ovale', 'Proportions équilibrées ; front légèrement plus large que la mâchoire ; doucement arrondi aux deux extrémités', 'Le plus polyvalent — presque tous les styles conviennent ; considérée comme la forme idéale à rechercher'],
                                      ['Rond', 'Largeur et longueur presque égales ; mâchoire douce et circulaire ; joues pleines', 'Ajouter de la hauteur au sommet ; garder les côtés près de la tête ; éviter les styles courts et larges et les raies centrales'],
                                      ['Carré', 'Mâchoire forte et anguleuse avec un front large presque égal en largeur ; angles vifs', 'Adoucir avec des courbes, des couches, des raies latérales et des franges légères ; éviter les lignes horizontales franches à la mâchoire'],
                                      ['Rectangulaire / oblong', 'Long et étroit ; front haut ; mâchoire longue ; peu de variation de largeur', 'Ajouter de la largeur avec des couches, des vagues ou du volume sur les côtés ; éviter la hauteur au sommet ; les raies latérales fonctionnent bien'],
                                      ['Cœur (triangle inversé)', 'Front et pommettes larges ; menton étroit', 'Ajouter du volume au niveau ou en dessous de la mâchoire ; les franges balayées sur le côté réduisent la largeur du front ; éviter le volume aux tempes'],
                                      ['Diamant', 'Front étroit et mâchoire étroite ; plus large aux pommettes', 'Ajouter de la largeur au front (frange, volume) et à la mâchoire ; éviter le volume aux pommettes'],
                                      ['Poire (triangle)', 'Front étroit ; plus large à la mâchoire et au menton', 'Ajouter du volume et de la largeur au front et aux tempes ; minimiser la largeur et le poids à la mâchoire'],
                                  ]
                              },
                          ],
                      },
                      {
                          id: 's5-3',
                          title: '5.3 Structure de la tige pilaire',
                          content: [
                              {
                                  type: 'table', headers: ['Couche', 'Structure', 'Fonction', 'Pertinence chimique'], rows: [
                                      ['Cuticule', 'Couche la plus externe ; 7–10 couches de cellules translucides qui se chevauchent, ressemblant à des écailles (comme des bardeaux de toit, pointant vers la pointe)', 'Protège le cortex ; détermine la brillance et le lissé de la surface', 'Les produits alcalins ouvrent la cuticule ; les produits acides la ferment. Cuticule soulevée = cheveux ternes, poreux, crépus.'],
                                      ['Cortex', 'Couche intermédiaire ; constitue 80–90 % de la structure du cheveu ; composé de cellules protéiques allongées (fibres kératinisées) et de granules de mélanine liés par une matrice intermacrofibrillaire', 'Fournit résistance à la traction, élasticité et couleur naturelle ; siège de TOUS les changements chimiques permanents', 'TOUTE la chimie de la couleur, de la permanente et du défrisage se produit dans le cortex. Les liaisons disulfure et hydrogène s\'y trouvent.'],
                                      ['Moelle', 'Noyau le plus interne ; cellules peu serrées avec espaces d\'air ; peut être absente ou discontinue, surtout dans les cheveux fins', 'Fonction exacte incertaine ; pourrait fournir un soutien structurel et une isolation thermique', 'Non impliquée dans les services chimiques ; son absence ou sa présence n\'affecte pas significativement les résultats chimiques'],
                                  ]
                              },
                              {
                                  type: 'table', headers: ['Type de liaison', 'Emplacement', 'Force', 'Rompue par', 'Reformée par'], rows: [
                                      ['Liaisons disulfure (S-S)', 'Cortex — ponts entre chaînes de kératine adjacentes', 'Très forte — source majeure de la force et du motif ondulé des cheveux', 'Agents réducteurs chimiques (thio dans les permanentes, hydroxyde dans les défrisants)', 'Neutralisant (oxydation) dans les permanentes ; forment des liaisons lanthionine dans les défrisants'],
                                      ['Liaisons hydrogène', 'Cortex — entre chaînes peptidiques', 'Faibles ; très nombreuses — fournissent collectivement une structure significative', 'Eau et chaleur', 'Séchage / refroidissement — base de toutes les mises en plis humides et du coiffage au sèche-cheveux'],
                                      ['Liaisons ioniques (salines)', 'Cortex — entre chaînes latérales de charges opposées', 'Force modérée ; affectée par les changements de pH', 'pH extrême (très acide ou très alcalin)', 'Retour au pH normal'],
                                      ['Liaisons peptidiques', 'L\'épine dorsale de chaque chaîne de kératine elle-même (pas des ponts)', 'Très forte — rompue uniquement par des produits chimiques forts ou une chaleur intense', 'Agents réducteurs forts, surtraitement chimique sévère, chaleur extrême', 'Ne peuvent pas être naturellement reformées une fois rompues — cause des dommages permanents'],
                                  ]
                              },
                          ],
                      },
                      {
                          id: 's5-4',
                          title: '5.4 Le follicule pileux et les couches de la peau',
                          content: [
                              { type: 'paragraph', text: 'Les cheveux poussent à partir du follicule — une structure en forme de poche dans le derme. La santé du follicule détermine la santé des cheveux.' },
                              {
                                  type: 'table', headers: ['Structure', 'Emplacement', 'Fonction'], rows: [
                                      ['Papille dermique', 'Base du follicule', 'Riche en capillaires ; apporte le sang, l\'oxygène et les nutriments au bulbe pileux en croissance — essentiel pour la croissance des cheveux'],
                                      ['Bulbe pileux (matrice)', 'Entoure la papille à la base', 'Site de mitose (division cellulaire active) ; produit toutes les cellules qui deviendront la tige pilaire'],
                                      ['Gaine épithéliale interne', 'À l\'intérieur du follicule, entourant la tige pilaire', 'Guide la tige pilaire vers la surface ; durcit autour du cheveu pour le protéger'],
                                      ['Gaine épithéliale externe', 'Forme la paroi du follicule', 'Continue avec l\'épiderme ; fournit un soutien structurel au follicule'],
                                      ['Glande sébacée', 'Fixée au follicule dans le derme', 'Produit du sébum — une huile cireuse naturelle qui lubrifie la tige pilaire et la surface du cuir chevelu'],
                                      ['Muscle arrecteur du poil', 'Fixé en diagonale de la base du follicule au derme', 'Se contracte pour faire dresser les cheveux (chair de poule) en réponse au froid ou à la peur'],
                                  ]
                              },
                              {
                                  type: 'table', headers: ['Couche de la peau', 'Contenu', 'Fonction'], rows: [
                                      ['Épiderme (la plus externe)', 'Plusieurs sous-couches incluant la couche cornée (supérieure), la couche granuleuse, la couche épineuse, la couche basale (la plus profonde) ; contient des mélanocytes et des kératinocytes', 'Fournit une barrière protectrice physique ; produit la mélanine (couleur de la peau) ; se régénère tous les ~28 jours'],
                                      ['Derme (intermédiaire)', 'Follicules pileux, glandes sébacées, glandes sudoripares, vaisseaux sanguins (capillaires), vaisseaux lymphatiques, terminaisons nerveuses sensorielles, fibres de collagène et d\'élastine', 'Soutien structurel ; apporte des nutriments ; ressent le toucher, la pression, la douleur et la température ; abrite les follicules pileux'],
                                      ['Hypoderme / Sous-cutané (le plus profond)', 'Tissu adipeux (graisse), tissu conjonctif, vaisseaux sanguins plus gros', 'Isolation thermique ; absorption des chocs ; réserve d\'énergie ; relie la peau aux muscles et aux os sous-jacents'],
                                  ]
                              },
                          ],
                      },
                      {
                          id: 's5-5',
                          title: '5.5 Le cycle de croissance du cheveu',
                          content: [
                              {
                                  type: 'table', headers: ['Phase', 'Aussi appelée', 'Durée', 'Ce qui se passe', '% des cheveux du cuir chevelu'], rows: [
                                      ['Anagène', 'Phase de croissance', '2–7 ans', 'Mitose active dans le bulbe pileux ; les cheveux poussent d\'environ 1–1,5 cm par mois ; anagène plus long = longueur potentielle plus grande', 'Environ 85–90 %'],
                                      ['Catagène', 'Phase de transition', '2–3 semaines', 'La division cellulaire cesse ; le follicule pileux rétrécit et se détache de la papille dermique ; le cheveu est coupé de son apport sanguin', 'Environ 1–2 %'],
                                      ['Télogène', 'Phase de repos / de chute', '3–4 mois', 'Le vieux cheveu repose près de la surface ; un nouveau cheveu anagène commence à se former en dessous ; le vieux cheveu tombe au brossage ou au lavage ; chute normale : 50–100 cheveux/jour', 'Environ 10–15 %'],
                                  ]
                              },
                              { type: 'keyTerm', term: 'Effluvium télogène', definition: 'Forme temporaire de perte de cheveux où un grand nombre de cheveux entrent simultanément en phase télogène et tombent — déclenché par un stress physique ou émotionnel, une maladie, une carence nutritionnelle, des changements hormonaux ou une chirurgie. Les cheveux repoussent généralement en 3–6 mois une fois la cause résolue.' },
                              { type: 'keyTerm', term: 'Alopécie androgénétique', definition: 'Perte de cheveux héréditaire causée par une sensibilité à la DHT (dihydrotestostérone) — la forme la plus courante d\'alopécie. Affecte les hommes et les femmes avec des schémas caractéristiques (recul de la ligne frontale et amincissement du vertex chez les hommes ; amincissement diffus au sommet chez les femmes).' },
                          ],
                      },
                      {
                          id: 's5-6',
                          title: '5.6 Propriétés physiques des cheveux et tests pré-service',
                          content: [
                              {
                                  type: 'table', headers: ['Propriété', 'Définition', 'Comment tester', 'Implication pour le service chimique'], rows: [
                                      ['Texture (diamètre)', 'Fin, moyen ou épais — la largeur des mèches de cheveux individuelles', 'Tenir une mèche entre les doigts ; comparer le diamètre visuellement', 'Cheveux fins : absorbent les produits chimiques plus rapidement, peuvent être surtraités rapidement. Cheveux épais : peuvent être résistants, nécessitent plus de temps de traitement'],
                                      ['Densité', 'Nombre de cheveux par pouce carré de cuir chevelu — clairsemée, moyenne ou dense', 'Faire une raie et observer combien le cuir chevelu apparaît', 'Cheveux denses nécessitent plus de produit ; cheveux clairsemés nécessitent un placement minutieux du produit pour éviter le contact avec le cuir chevelu'],
                                      ['Porosité', 'Capacité du cheveu à absorber et retenir l\'humidité — déterminée par l\'état de la cuticule', 'Faire glisser les doigts de la pointe à la racine le long d\'une mèche : rugueux = porosité élevée ; lisse = faible', 'Faible porosité : résistante à la pénétration chimique ; nécessite un temps de traitement supplémentaire. Porosité élevée : absorbe les produits chimiques rapidement mais de manière inégale ; peut nécessiter un filler avant la couleur'],
                                      ['Élasticité', 'Capacité à s\'étirer lorsqu\'il est mouillé et à revenir à sa longueur d\'origine sans casser', 'Mouiller une mèche ; étirer doucement ; des cheveux sains s\'étirent ~50 % et reviennent ; mauvaise élasticité = cassure ou reste étiré', 'Les cheveux avec une mauvaise élasticité ne devraient pas recevoir de services chimiques supplémentaires ; un cortex endommagé ne peut pas supporter un traitement supplémentaire'],
                                      ['Motif ondulé/bouclé', 'Raide (1), ondulé (2a/b/c), bouclé (3a/b/c), crépu (4a/b/c)', 'Évaluation visuelle ; déterminé par la forme du follicule (rond = raide ; ovale à plat = ondulé à crépu)', 'Les motifs bouclés/crépues ont plus de liaisons disulfure, ce qui les rend plus réactifs aux permanentes et aux défrisants'],
                                  ]
                              },
                              {
                                  type: 'infoBox', title: 'Quatre tests pré-service essentiels', items: [
                                      'TEST ÉPICUTANÉ — Appliquer une petite quantité du mélange du produit derrière l\'oreille ou dans le pli du coude ; attendre 24–48 heures ; vérifier l\'absence de rougeur, démangeaison, gonflement (réaction positive = NE PAS procéder au service)',
                                      'TEST SUR MÈCHE — Traiter une petite section test avec le service chimique complet pour prédire le résultat, la durée et la réaction du produit avant de s\'engager sur toute la tête',
                                      'TEST DE POROSITÉ — Faire glisser les doigts de la pointe à la racine ; évaluer la résistance/rugosité pour déterminer l\'état de la cuticule',
                                      'TEST D\'ÉLASTICITÉ — Étirer une seule mèche mouillée pour évaluer la santé du cortex avant les services chimiques',
                                  ]
                              },
                          ],
                      },
                  ],
                  practiceQuestions: [
                      { id: 'q5-1', question: 'Quelle couche de la tige pilaire est le site de TOUS les changements chimiques permanents, y compris la couleur, les permanentes et les défrisants ?', options: ['Cuticule', 'Cortex', 'Moelle', 'Papille dermique'], correctIndex: 1, explanation: 'Le cortex est la couche intermédiaire de la tige pilaire. Il contient les fibres protéiques de kératine, la mélanine et toutes les liaisons chimiques (disulfure, hydrogène, ioniques) qui sont modifiées par les services chimiques.' },
                      { id: 'q5-2', question: 'Les cheveux d\'un client s\'étirent lorsqu\'ils sont mouillés mais NE reviennent PAS à leur longueur d\'origine. Cela indique :', options: ['Faible porosité', 'Élasticité élevée', 'Mauvaise élasticité — cortex endommagé', 'Porosité normale'], correctIndex: 2, explanation: 'Une bonne élasticité signifie que les cheveux s\'étirent d\'environ 50 % lorsqu\'ils sont mouillés et retrouvent leur longueur d\'origine. Les cheveux qui restent étirés ont un cortex endommagé avec des liaisons disulfure trop ramollies ou rompues — ils ne devraient pas recevoir de services chimiques supplémentaires.' },
                      { id: 'q5-3', question: 'Quelle phase du cycle de croissance du cheveu est active, implique la division cellulaire et représente environ 85 % des cheveux du cuir chevelu à tout moment ?', options: ['Télogène', 'Catagène', 'Anagène', 'Exogène'], correctIndex: 2, explanation: 'La phase anagène (croissance) est active — la mitose se produit dans le bulbe pileux et les cheveux poussent d\'environ 1–1,5 cm par mois. Elle dure de 2 à 7 ans. 85–90 % des cheveux du cuir chevelu sont en anagène à un moment donné.' },
                      { id: 'q5-4', question: 'Avant un service de coloration chimique, quel test est effectué 24–48 heures à l\'avance pour vérifier une réaction allergique ?', options: ['Test sur mèche', 'Test de porosité', 'Test épicutané', 'Test d\'élasticité'], correctIndex: 2, explanation: 'Le test épicutané détecte les réactions allergiques potentielles au PPD et à d\'autres produits chimiques dans les colorants oxydatifs. Une réaction positive (rougeur, gonflement, démangeaison) est une contre-indication.' },
                      { id: 'q5-5', question: 'La crête pariétale est décrite comme :', options: ['Le point le plus bas de l\'os occipital', 'La zone la plus large de la tête, où elle commence à s\'incurver vers l\'intérieur au-dessus des oreilles', 'La ligne des cheveux à la nuque', 'Le tout en haut/point culminant de la zone du sommet'], correctIndex: 1, explanation: 'La crête pariétale est le point le plus large de la tête — un point de repère essentiel en coupe de cheveux utilisé pour déterminer la distribution du poids et l\'endroit où l\'élévation change.' },
                      { id: 'q5-6', question: 'Laquelle des liaisons suivantes est la PLUS FORTE dans le cheveu et assure son intégrité structurelle principale ?', options: ['Liaisons hydrogène', 'Liaisons ioniques', 'Liaisons disulfure', 'Forces de Van der Waals'], correctIndex: 2, explanation: 'Les liaisons disulfure sont les liaisons les plus fortes dans les cheveux. Elles nécessitent des agents réducteurs chimiques pour être rompues. Elles fournissent la force principale, l\'élasticité et le motif ondulé/bouclé des cheveux.' },
                      { id: 'q5-7', question: 'Un client a des cheveux à haute porosité. Comment cela affectera-t-il un service de coloration ?', options: ['Les cheveux seront résistants et nécessiteront un temps de traitement supplémentaire', 'Les cheveux absorberont la couleur très rapidement et pourraient devenir inégaux', 'Les cheveux n\'absorberont pas du tout la couleur', 'Le résultat de la couleur sera plus clair que prévu'], correctIndex: 1, explanation: 'Les cheveux à haute porosité ont une cuticule soulevée ou endommagée qui absorbe les produits rapidement et de manière inégale. La couleur peut traiter trop vite, décolorer rapidement et sembler inégale. Un filler ou un égaliseur de porosité peut être nécessaire.' },
                  ],
              },

              // ─── CHAPITRE 6 ────────────────────────────────────────────────────────
              {
                  id: 'ch-6',
                  number: 6,
                  title: 'Procédures préparatoires et traitements',
                  subtitle: 'S1736 & S1742 — Chimie du pH, affections du cuir chevelu, drapage, shampoing, revitalisation et massage',
                  isFree: false,
                  estimatedMinutes: 25,
                  sections: [
                      {
                          id: 's6-1',
                          title: '6.1 Bases de la chimie — pH, eau et cheveux',
                          content: [
                              { type: 'keyTerm', term: 'pH', definition: 'Échelle de 0 à 14 mesurant la concentration d\'ions hydrogène dans une solution. En dessous de 7 = acide ; 7 = neutre ; au-dessus de 7 = alcalin (basique).' },
                              {
                                  type: 'table', headers: ['Plage de pH', 'Classification', 'Effet sur la cuticule du cheveu', 'Exemples de produits de salon'], rows: [
                                      ['0–3', 'Fortement acide', 'Durcit, contracte et resserre la cuticule de manière spectaculaire', 'Permanentes acides (pH 4,5–7 à titre de comparaison) ; rinçages acides forts'],
                                      ['3–6,9', 'Légèrement à modérément acide', 'Ferme et lisse la cuticule ; améliore la brillance', 'Revitalisants (pH 3–4,5), shampoings pour cheveux colorés, rinçages, shampoings clarifiants'],
                                      ['4,5–5,5', 'Légèrement acide', 'Cheveux et cuir chevelu sains normaux — cuticule fermée et lisse', 'pH des cheveux et du cuir chevelu sains'],
                                      ['7', 'Neutre', 'Effet direct minimal sur la cuticule', 'Eau distillée pure'],
                                      ['7,1–9,5', 'Légèrement à modérément alcalin', 'Ouvre et gonfle la cuticule ; permet la pénétration chimique', 'Shampoings ordinaires (pH 7–8), permanentes alcalines (pH 8–9,5), couleur semi-permanente'],
                                      ['9,5–14', 'Fortement alcalin', 'Ouvre et ramollit sévèrement la cuticule ; pénètre rapidement dans le cortex', 'Défrisants à l\'hydroxyde de sodium (pH 12–14), décolorants'],
                                  ]
                              },
                              { type: 'paragraph', text: 'La qualité de l\'eau affecte les services chimiques :' },
                              {
                                  type: 'bullets', items: [
                                      'Eau dure (teneur élevée en minéraux calcium et magnésium) peut laisser des dépôts minéraux sur les cheveux, interférer avec le traitement chimique et réduire la mousse. Un shampoing chélatant/clarifiant doit être utilisé avant les services chimiques dans les zones d\'eau dure.',
                                      'Eau douce (faible teneur en minéraux) mousse facilement et rince proprement — préférée pour les services chimiques',
                                      'L\'eau distillée/purifiée (pH 7) est utilisée dans la formulation des produits professionnels',
                                  ]
                              },
                          ],
                      },
                      {
                          id: 's6-2',
                          title: '6.2 Affections du cuir chevelu et des cheveux à identifier',
                          content: [
                              { type: 'paragraph', text: 'Chaque service commence par une analyse visuelle et manuelle du cuir chevelu et des cheveux. Certaines affections sont des contre-indications — les services ne doivent pas être effectués. D\'autres nécessitent une modification de l\'approche du service.' },
                              {
                                  type: 'table', headers: ['Affection', 'Type', 'Description', 'Protocole de service'], rows: [
                                      ['Pellicules — type sec (Pityriasis capitis simplex)', 'Affection du cuir chevelu', 'Squames sèches et blanches ; pas d\'inflammation ; le cuir chevelu peut démanger', 'Peut procéder au service ; recommander un shampoing antipelliculaire (pyrithione de zinc ou sulfure de sélénium)'],
                                      ['Pellicules — type gras (Pityriasis steatoides)', 'Affection du cuir chevelu', 'Squames grasses jaunes collées au cuir chevelu ; peut être associé à une dermatite séborrhéique', 'Peut procéder s\'il n\'y a pas de peau lésée ; recommander un shampoing médicamenteux ; éviter les produits lourds'],
                                      ['Séborrhée', 'Affection du cuir chevelu', 'Production excessive de sébum (huile) ; les cheveux semblent gras rapidement', 'Utiliser un shampoing équilibrant ; recommander des traitements du cuir chevelu ; espacer les services en conséquence'],
                                      ['Psoriasis', 'Affection cutanée chronique', 'Épaisses squames blanc argenté sur plaques rouges ; non contagieux ; à médiation immunitaire', 'NE PAS effectuer de services chimiques si le cuir chevelu est lésé ou en poussée active — risque d\'absorption du produit et d\'irritation. Couper et coiffer uniquement sur les zones non affectées.'],
                                      ['Pelade (alopécie areata)', 'Perte de cheveux', 'Zones chauves rondes, lisses, en forme de pièce de monnaie ; auto-immune — le corps attaque les follicules pileux', 'Procéder aux services sur les zones non affectées ; orienter vers un dermatologue ; éviter la traction sur les zones affectées'],
                                      ['Alopécie de traction', 'Perte de cheveux', 'Perte de cheveux le long de la ligne de croissance et aux tempes due à des coiffures serrées répétées (tresses, tissages, queues de cheval)', 'Éviter les coiffures serrées sur la zone affectée ; recommander des coiffures lâches et un massage du cuir chevelu'],
                                      ['Teigne du cuir chevelu (tinea capitis)', 'Infection fongique', 'Zones circulaires et squameuses avec cassure des cheveux ; très contagieuse', '⛔ CONTRE-INDICATION — refuser tous les services ; orienter vers un médecin ; désinfecter soigneusement tous les instruments et surfaces après le départ du client'],
                                      ['Pédiculose (poux de tête)', 'Infestation parasitaire', 'Poux vivants et/ou lentes (œufs) attachés aux cheveux près du cuir chevelu ; démangeaisons intenses ; se propage par contact direct', '⛔ CONTRE-INDICATION — refuser tous les services ; orienter vers un pharmacien/médecin ; emballer et laver tout le linge à 60 °C+ ; inspecter et nettoyer tous les instruments'],
                                      ['Folliculite', 'Infection bactérienne', 'Pustules rouges et enflammées autour des follicules pileux ; peut être causée par Staphylococcus ou d\'autres bactéries', '⛔ CONTRE-INDICATION — refuser le service ; orienter vers un médecin si étendu'],
                                  ]
                              },
                              { type: 'keyTerm', term: 'Contre-indication', definition: 'Une condition qui rend un traitement particulier déconseillé ou potentiellement dangereux. En coiffure, les contre-indications exigent que le coiffeur refuse le service et oriente le client vers un professionnel de santé approprié.' },
                          ],
                      },
                      {
                          id: 's6-3',
                          title: '6.3 Techniques de drapage',
                          content: [
                              { type: 'paragraph', text: 'Un drapage approprié protège les vêtements du client de l\'eau, des produits chimiques et des cheveux coupés. Il démontre également le professionnalisme et l\'attention aux détails.' },
                              {
                                  type: 'table', headers: ['Type de service', 'Procédure de drapage'], rows: [
                                      ['Shampoing / service humide', '1. Rentrer la bande de cou autour de la ligne de croissance. 2. Rabattre le col du client vers l\'intérieur. 3. Placer une serviette autour des épaules, rentrée sous le col. 4. Placer la cape de shampoing par-dessus la serviette. 5. Fixer à la nuque — pas trop serré.'],
                                      ['Service chimique (couleur, permanente, défrisant)', '1. Placer la cape chimique (plastique/vinyle) directement sur les vêtements — aucun tissu ne doit toucher les produits. 2. Bande de cou pour protéger la ligne de croissance. 3. Serviette supplémentaire autour de la ligne de croissance pour les permanentes/défrisants afin de récupérer les gouttes. 4. Fixer fermement mais confortablement à la nuque.'],
                                      ['Coupe de cheveux (sèche)', '1. Bande de cou autour de la ligne de croissance. 2. Cape de coupe sur les épaules. 3. Fixer à la nuque. 4. Vérifier que les épaules sont entièrement couvertes.'],
                                  ]
                              },
                              {
                                  type: 'bullets', items: [
                                      'Toujours utiliser une serviette fraîche et une cape propre pour chaque client — ne jamais réutiliser entre les clients',
                                      'Vérifier le confort du client — demander si la cape est trop serrée ou trop lâche',
                                      'Remplacer immédiatement la bande de cou si elle devient mouillée',
                                  ]
                              },
                          ],
                      },
                      {
                          id: 's6-4',
                          title: '6.4 Shampoing : produits, techniques et massage du cuir chevelu',
                          content: [
                              {
                                  type: 'table', headers: ['Type de shampoing', 'Ingrédients clés', 'Meilleure utilisation'], rows: [
                                      ['Clarifiant', 'Laurylsulfate de sodium (SLS), acide citrique, agents chélatants (EDTA)', 'Éliminer l\'accumulation de produits, les minéraux de l\'eau dure et les excès d\'huile ; utiliser avant les services chimiques'],
                                      ['Hydratant', 'Glycérine, panthénol, protéines hydrolysées, huiles naturelles', 'Cheveux secs, cassants ou traités chimiquement ; cheveux colorés'],
                                      ['Volumateur', 'Tensioactifs légers, protéines de blé ou de soie hydrolysées', 'Cheveux fins et mous manquant de corps et de volume'],
                                      ['Sans danger pour la couleur / Cheveux colorés', 'Tensioactifs sans sulfate, pH 4,5–5,5', 'Cheveux colorés — préserve l\'éclat de la couleur, empêche la décoloration'],
                                      ['Antipelliculaire / Médicamenteux', 'Pyrithione de zinc (ZPT), sulfure de sélénium, acide salicylique ou kétoconazole', 'Pellicules, dermatite séborrhéique et affections du cuir chevelu'],
                                      ['Équilibrant', 'Tensioactifs amphotères doux, panthénol', 'Cuir chevelu normal à gras ; maintient l\'équilibre naturel du sébum sans agresser'],
                                      ['Protéiné / Renforçant', 'Kératine hydrolysée, protéines de soie, acides aminés', 'Cheveux abîmés, surtraités ou cassants — renforce et reconstruit'],
                                      ['Bébé / Doux', 'Cocamidopropyl bétaïne (tensioactif très doux, ne pique pas les yeux)', 'Cuir chevelu sensible, cheveux de bébé fins, après service chimique — quand une stimulation minimale est requise'],
                                  ]
                              },
                              { type: 'paragraph', text: 'Technique de shampoing appropriée :' },
                              {
                                  type: 'numbered', items: [
                                      'Vérifier la température de l\'eau — toujours tester sur votre poignet avant d\'appliquer au client (confortablement chaude, pas brûlante)',
                                      'Mouiller abondamment les cheveux avant d\'appliquer le shampoing',
                                      'Distribuer le shampoing dans la paume ; diluer légèrement ; répartir d\'abord sur les longueurs, puis sur le cuir chevelu',
                                      'Faire mousser en utilisant la pulpe des doigts (pas les ongles) par mouvements circulaires sur tout le cuir chevelu',
                                      'Rincer abondamment — tout résidu de shampoing doit être éliminé',
                                      'Répéter si nécessaire (surtout avant les services chimiques)',
                                      'Essorer doucement l\'excès d\'eau avant le revitalisant',
                                  ]
                              },
                              {
                                  type: 'table', headers: ['Mouvement de massage', 'Technique', 'Effet', 'Quand l\'utiliser'], rows: [
                                      ['Effleurage', 'Mouvements légers, lents et glissants avec les paumes planes ; contact lisse et continu', 'Relaxant ; apaise le système nerveux ; améliore le drainage lymphatique', 'Mouvement d\'ouverture et de fermeture de chaque massage du cuir chevelu'],
                                      ['Pétrissage', 'Mouvements fermes de pétrissage, de levage circulaire et de roulement avec les pouces et le bout des doigts', 'Stimule la circulation sanguine ; active les glandes sébacées ; détend les tensions du cuir chevelu', 'Corps principal du massage du cuir chevelu'],
                                      ['Tapotement', 'Tapotements légers et vifs ou percussion avec le bout des doigts', 'Stimulant ; augmente rapidement la circulation ; augmente la conscience sensorielle', 'Optionnel ; utilisé brièvement pour ajouter de la stimulation'],
                                      ['Vibration', 'Mouvements de tremblement fins et rapides avec les mains ou le bout des doigts', 'Profondément relaxant ; réduit la tension musculaire et la sensibilité nerveuse', 'Technique de fermeture ou pour les clients ayant des tensions chroniques du cuir chevelu'],
                                  ]
                              },
                          ],
                      },
                      {
                          id: 's6-5',
                          title: '6.5 Revitalisation : types, techniques et traitements avancés',
                          content: [
                              {
                                  type: 'table', headers: ['Type de revitalisant', 'Comment l\'appliquer', 'Temps de traitement', 'Meilleure utilisation'], rows: [
                                      ['Revitalisant instantané / à rincer', 'Appliquer sur les longueurs et les pointes ; démêler ; rincer', '1–5 minutes', 'Tous types de cheveux après chaque shampoing ; ferme la cuticule ; améliore la maniabilité et la brillance'],
                                      ['Traitement revitalisant en profondeur / Masque', 'Appliquer généreusement des racines aux pointes ; démêler ; appliquer de la chaleur (optionnel)', '15–30 minutes', 'Cheveux secs, abîmés ou colorés ; restaure l\'hydratation et la souplesse'],
                                      ['Revitalisant sans rinçage', 'Appliquer sur cheveux humides, essorés avec une serviette ; ne pas rincer', 'Ne se rince pas — reste jusqu\'au prochain shampoing', 'Cheveux fins à épais ; fournit une hydratation continue, facilite le démêlage et protège de la chaleur'],
                                      ['Reconstructeur protéiné', 'Appliquer sur cheveux propres et humides ; laisser agir 5–20 minutes ; rincer ; suivre avec un revitalisant hydratant', '5–20 minutes (suivre le fabricant)', 'Cheveux sévèrement abîmés, surtraités ou cassants ; dépose des protéines dans le cortex pour reconstruire la force'],
                                      ['Traitement reconstructeur de liaisons (ex., Olaplex)', 'Mélanger à la couleur ou à la décoloration, ou utiliser en traitement autonome', 'Selon le fabricant', 'Cheveux subissant un éclaircissement ou des services chimiques ; protège et reconstruit les liaisons disulfure pendant le traitement'],
                                      ['Sérum pour le cuir chevelu', 'Appliquer uniquement sur le cuir chevelu ; masser ; ne pas rincer (ou rincer selon le produit)', 'Selon le produit', 'Pellicules, cheveux qui s\'éclaircissent, cuir chevelu sec ; cible spécifiquement la santé du cuir chevelu'],
                                  ]
                              },
                              { type: 'keyTerm', term: 'Traitement reconstructeur de liaisons', definition: 'Un traitement professionnel en salon qui agit dans le cortex du cheveu pour relier les liaisons disulfure rompues ou fragmentées, restaurant ainsi la force et l\'intégrité — particulièrement précieux lorsqu\'il est utilisé conjointement avec des services chimiques pour minimiser les dommages.' },
                          ],
                      },
                  ],
                  practiceQuestions: [
                      { id: 'q6-1', question: 'Un coiffeur applique une solution de permanente. Le pH de la plupart des solutions de permanente alcaline est d\'environ :', options: ['4,5–5,5', '7 (neutre)', '8–9,5 (alcalin)', '12–14 (fortement alcalin)'], correctIndex: 2, explanation: 'Les solutions de permanente alcaline ont un pH d\'environ 8–9,5. Cette alcalinité est nécessaire pour ouvrir la cuticule et permettre à l\'agent réducteur (ATG) de pénétrer le cortex et de rompre les liaisons disulfure.' },
                      { id: 'q6-2', question: 'Un client présente des plaques circulaires et squameuses avec cassure des cheveux sur le cuir chevelu, évocatrices d\'une teigne (tinea capitis). Le coiffeur devrait :', options: ['Appliquer un shampoing antifongique médicamenteux et procéder à une coupe', 'Refuser le service, orienter vers un médecin et désinfecter soigneusement tous les instruments', 'Appliquer un shampoing clarifiant pour enlever les squames et continuer', 'Procéder à un service de couleur uniquement, en évitant les zones touchées'], correctIndex: 1, explanation: 'La teigne du cuir chevelu est une infection fongique hautement contagieuse. C\'est une contre-indication pour tous les services en salon. Le client doit être refusé, orienté vers un médecin pour un traitement antifongique, et tous les instruments doivent être désinfectés.' },
                      { id: 'q6-3', question: 'Quel mouvement de massage implique un pétrissage, un levage et une pression circulaire pour stimuler la circulation sanguine dans le cuir chevelu ?', options: ['Effleurage', 'Tapotement', 'Pétrissage', 'Vibration'], correctIndex: 2, explanation: 'Le pétrissage utilise des mouvements de pétrissage et de levage qui stimulent la circulation sanguine et l\'activité des glandes sébacées dans le cuir chevelu.' },
                      { id: 'q6-4', question: 'Les cheveux et le cuir chevelu sains ont un pH d\'environ :', options: ['7,0 (neutre)', '8,5 (légèrement alcalin)', '4,5–5,5 (légèrement acide)', '2,0–3,0 (fortement acide)'], correctIndex: 2, explanation: 'Les cheveux et le cuir chevelu sains sont légèrement acides. Ce film hydrolipidique naturel maintient la cuticule fermée et lisse et offre une certaine protection contre les bactéries et les champignons.' },
                      { id: 'q6-5', question: 'Quel type de shampoing doit être utilisé AVANT un service chimique pour éliminer l\'accumulation de produits et assurer un traitement uniforme ?', options: ['Shampoing hydratant', 'Shampoing antipelliculaire', 'Shampoing clarifiant', 'Shampoing pour cheveux colorés'], correctIndex: 2, explanation: 'Le shampoing clarifiant élimine les résidus de produits coiffants, de shampoing sec et les minéraux de l\'eau dure. L\'accumulation crée une barrière qui empêche les produits chimiques de pénétrer uniformément.' },
                      { id: 'q6-6', question: 'Un reconstructeur protéiné est mieux utilisé sur :', options: ['Cheveux fins avant un service volumateur', 'Cheveux normaux et sains pour plus de brillance', 'Cheveux sévèrement abîmés, cassants ou surtraités', 'Cheveux gras pour réduire la production de sébum'], correctIndex: 2, explanation: 'Les reconstructeurs protéinés déposent des protéines hydrolysées dans le cortex pour reconstruire la force des cheveux abîmés. Ils sont spécifiquement conçus pour les cheveux surtraités, cassants ou chimiquement compromis.' },
                  ],
              },
          ],
      },

      // =========================================================================
      // PARTIE 3 — COUPE ET COIFFAGE
      // =========================================================================
      {
          id: 'part-3',
          title: 'Partie 3 : Coupe et coiffage',
          color: '#6C3483',
          description: 'Les chapitres 7 et 8 couvrent tous les aspects de la technique de coupe, du coiffage thermique et humide, du tressage et des produits utilisés pour obtenir des résultats professionnels.',
          chapters: [

              // ─── CHAPITRE 7 ────────────────────────────────────────────────────────
              {
                  id: 'ch-7',
                  number: 7,
                  title: 'Coupe de cheveux — Techniques et théorie',
                  subtitle: 'S1737 & S1743 — Élévations, lignes, guides, outils, types de coupes, texturisation et contre-vérification',
                  isFree: false,
                  estimatedMinutes: 35,
                  sections: [
                      {
                          id: 's7-1',
                          title: '7.1 Fondamentaux : Élévation, angle et sectionnement',
                          content: [
                              { type: 'keyTerm', term: 'Élévation', definition: 'L\'angle auquel une section de cheveux est soulevée ou tenue éloignée de la tête avant la coupe — la variable la plus importante contrôlant la répartition du poids, la graduation et la longueur des couches dans une coupe.' },
                              {
                                  type: 'table', headers: ['Élévation', 'Effet', 'Répartition du poids', 'Résultat / Exemple de coupe'], rows: [
                                      ['0° — pas d\'élévation', 'Les cheveux sont plats contre la tête et coupés dans leur chute naturelle', 'Poids maximal au périmètre ; aucun au-dessus', 'Coupe franche/d\'une seule longueur ; carré classique ; tout le poids à la base'],
                                      ['45° d\'élévation', 'Les cheveux sont tenus à un angle de 45° par rapport à la tête', 'La ligne de poids est plus basse dans la coupe (au-dessus du périmètre)', 'Carré gradué/stacké ; couches mi-longues avec poids retenu à la nuque'],
                                      ['90° d\'élévation', 'Les cheveux sont tenus droits sortant de la tête', 'Le poids est réparti uniformément ; pas de concentration au périmètre', 'Couches uniformes/de même longueur ; forme ronde ; élimine le volume partout'],
                                      ['Plus de 90° (sur-direction)', 'Les cheveux sont dirigés au-delà de 90°, plus loin de leur chute naturelle', 'Crée des couches plus longues en dessous, plus courtes au-dessus ; inverse la graduation', 'Couches longues et fluides ; coupes à haute élévation ; formes déconnectées'],
                                  ]
                              },
                              { type: 'keyTerm', term: 'Sur-direction', definition: 'Peigner ou tenir les cheveux loin de leur chute naturelle avant la coupe — crée un déplacement intentionnel du poids et une graduation dans la coupe finie.' },
                              { type: 'keyTerm', term: 'Distribution naturelle', definition: 'Laisser les cheveux tomber exactement là où la gravité les amène — de la tête — sans les peigner vers ou loin de la chute naturelle. La base de référence pour les coupes à 0° d\'élévation.' },
                              { type: 'paragraph', text: 'Sectionner la tête crée une zone de travail gérable et organisée :' },
                              {
                                  type: 'bullets', items: [
                                      'Section supérieure (panneau iroquois) : du front au sommet, d\'une oreille à l\'autre — contrôle le dessus et les couches intérieures',
                                      'Deux sections latérales : de la raie à juste derrière l\'oreille de chaque côté',
                                      'Section arrière : tout ce qui est derrière les oreilles et sous le sommet — peut être subdivisée en deux moitiés',
                                      'Nuque : la section la plus basse à l\'arrière du cou — souvent travaillée en premier dans les coupes de précision',
                                  ]
                              },
                              {
                                  type: 'table', headers: ['Terme de sectionnement', 'Définition'], rows: [
                                      ['Raie', 'Une ligne qui divise les cheveux en sections — droite, diagonale, courbe ou en fer à cheval'],
                                      ['Panneau', 'Une zone plus large de cheveux définie par des raies pour une séquence de coupe organisée'],
                                      ['Sous-section', 'Une fine mèche de cheveux prélevée dans un panneau pour être coupée ; doit être d\'épaisseur constante'],
                                      ['Guide (ligne directrice)', 'La première section coupée à laquelle toutes les sections suivantes sont mesurées et coupées pour correspondre — détermine la longueur et la forme de toute la coupe'],
                                  ]
                              },
                          ],
                      },
                      {
                          id: 's7-2',
                          title: '7.2 Lignes de coupe et guides',
                          content: [
                              { type: 'keyTerm', term: 'Ligne de coupe', definition: 'L\'angle ou la direction des ciseaux lors de la coupe — horizontale, verticale, diagonale avant ou diagonale arrière — chacune produisant une répartition du poids et une forme différentes.' },
                              {
                                  type: 'table', headers: ['Ligne de coupe', 'Direction de la coupe', 'Effet', 'Exemple'], rows: [
                                      ['Horizontale', 'Parallèle au sol', 'Crée un poids maximal et une ligne de périmètre forte', 'Périmètre de carré franc classique ; coupe d\'une seule longueur'],
                                      ['Verticale', 'Perpendiculaire au sol (de haut en bas)', 'Élimine le poids et ajoute une graduation de longueur partout', 'Texture point coupé ; couches internes ; coupes déconnectées'],
                                      ['Diagonale avant (vers le visage)', 'Inclinée d\'un point plus haut à l\'arrière à un point plus bas à l\'avant', 'Crée de la longueur vers le visage ; construit un dos plus court, un devant plus long', 'Carré asymétrique ; graduation avant ; design avant long-court'],
                                      ['Diagonale arrière (loin du visage)', 'Inclinée d\'un point plus bas à l\'arrière à un point plus haut à l\'avant', 'Crée de la longueur vers l\'arrière ; devant plus court, dos plus long', 'Forme classique en "A" ; carré inversé'],
                                  ]
                              },
                              { type: 'keyTerm', term: 'Guide fixe', definition: 'Un guide fixe qui ne bouge pas — toutes les sections suivantes y sont amenées pour la coupe. Utilisé dans les coupes d\'une seule longueur et graduées.' },
                              { type: 'keyTerm', term: 'Guide mobile', definition: 'Un guide qui se déplace avec chaque nouvelle section coupée — chaque nouvelle section chevauche légèrement la précédente au fur et à mesure que le guide progresse dans la coupe. Utilisé dans les coupes à couches uniformes et à longues couches.' },
                              {
                                  type: 'infoBox', title: 'Ligne de poids vs Coin de poids', items: [
                                      'LIGNE DE POIDS — la zone de longueur la plus concentrée dans une coupe ; là où tombent les cheveux les plus longs. Dans un carré gradué, la ligne de poids est le "rebord" visuel des cheveux au-dessus de la nuque.',
                                      'COIN DE POIDS — le bord angulaire où deux lignes de poids se rencontrent (par exemple, le coin d\'un carré carré où le périmètre rencontre la graduation au-dessus de l\'oreille).',
                                      'ÉLIMINATION DU POIDS — obtenue en augmentant l\'élévation, en sur-direction ou en utilisant des techniques de texturisation.',
                                      'AJOUT DE POIDS — obtenue en réduisant l\'élévation ou en utilisant des guides fixes qui permettent à plus de longueur de s\'accumuler au périmètre.',
                                  ]
                              },
                          ],
                      },
                      {
                          id: 's7-3',
                          title: '7.3 Les quatre formes classiques de coupe de cheveux',
                          content: [
                              {
                                  type: 'table', headers: ['Forme de coupe', 'Technique clé', 'Élévation', 'Poids', 'Ligne de coupe', 'Exemple classique'], rows: [
                                      ['Une longueur / Franche', 'Tous les cheveux coupés à la même longueur de périmètre', '0°', 'Poids maximal au périmètre ; aucun à l\'intérieur', 'Horizontale', 'Carré franc classique ; cheveux longs d\'une seule longueur'],
                                      ['Graduée', 'Cheveux empilés au-dessus du périmètre ; plus courts au-dessus, plus longs en dessous', '1° à 89°', 'Poids accumulé au-dessus du périmètre (ligne de poids)', 'Diagonale arrière ou horizontale', 'Carré stacké/gradué ; carré en A'],
                                      ['Couches uniformes', 'Tous les cheveux coupés à la même longueur de la tête', '90°', 'Uniformément réparti ; pas de concentration au périmètre', 'Horizontale suivant la courbe de la tête', 'Coupe ronde en couches ; couches longues classiques'],
                                      ['Longues couches', 'Intérieur plus court que l\'extérieur — les couches augmentent en longueur de l\'intérieur vers le périmètre', 'Plus de 90°', 'Retenu au périmètre ; éliminé de l\'intérieur', 'Horizontale ou diagonale', 'Couches longues et fluides ; coupe shag ; wolf cut'],
                                  ]
                              },
                              { type: 'paragraph', text: 'Les quatre formes peuvent être combinées dans une seule coupe. Par exemple, un carré gradué peut avoir une ligne extérieure franche avec un encadrement intérieur en couches, ou une coupe à longues couches peut avoir un périmètre franc.' },
                          ],
                      },
                      {
                          id: 's7-4',
                          title: '7.4 Outils de coupe et utilisation appropriée',
                          content: [
                              {
                                  type: 'table', headers: ['Outil', 'Type / Description', 'Meilleure utilisation', 'Entretien et sécurité'], rows: [
                                      ['Ciseaux (droits)', 'Lame biseautée ou convexe ; 4,5"–7" les plus courants ; acier au carbone ou inoxydable', 'Coupes franches, coupe de précision, point coupé', 'Huiler l\'axe mensuellement ; affûtage professionnel ; ne jamais faire tomber ; ranger dans un étui de protection'],
                                      ['Ciseaux à effiler (ciseaux de texturisation)', 'Une lame dentelée ; enlève 10–30 % du volume à chaque coupe', 'Enlever le poids des cheveux épais ; fondre ; enlever les marques de ciseaux', 'Même entretien que les ciseaux droits ; ne jamais utiliser sur cheveux décolorés ou très secs — peut fissurer les pointes'],
                                      ['Rasoir (droit / à lame)', 'Lame remplaçable à simple tranchant ; crée des pointes douces et effilées', 'Formes souples, texturées, déconstruites ; frange ; adoucissement de la graduation', 'Toujours utiliser sur cheveux mouillés ; remplacer la lame entre les clients (lame à usage unique est la pratique la plus sûre) ; jeter dans un conteneur pour objets tranchants'],
                                      ['Tondeuse', 'Électrique ; utilise des sabots interchangeables (incréments de 1/8"–1")', 'Coupes hommes ; dégradés ; styles très courts ; lignes de nuque précises', 'Nettoyer et huiler les lames après chaque utilisation ; spray désinfectant pour lames ; remplacer les lames lorsqu\'elles sont émoussées'],
                                      ['Tondeuse de finition / Contour', 'Outil électrique plus petit ; lame fine coupant de près ; pas de sabots', 'Détail des lignes de croissance ; favoris ; lignes de cou ; autour des oreilles', 'Idem que pour la tondeuse ; l\'alignement des lames est critique pour des lignes nettes'],
                                      ['Peigne à dents larges', 'Grands espaces entre les dents', 'Démêlage des cheveux mouillés ; répartition du revitalisant', 'Immerger dans une solution désinfectante entre les clients'],
                                      ['Peigne queue de rat', 'Dents fines avec un long manche pointu', 'Sectionnement de précision ; tressage pour mèches ; crêpage', 'Immerger dans une solution désinfectante entre les clients'],
                                      ['Peigne de coupe (peigne de barbier)', 'Dents fines et grossières sur le même peigne ; rigide', 'Peigne principal pour coupes de précision ; technique ciseaux-sur-peigne', 'Immerger dans une solution désinfectante entre les clients'],
                                  ]
                              },
                              { type: 'keyTerm', term: 'Ciseaux-sur-peigne', definition: 'Technique de coupe où le peigne maintient les cheveux à un angle spécifique pendant que les ciseaux coupent sur le dessus des dents du peigne — permet un effilage et une graduation très près, surtout dans la nuque et sur les côtés.' },
                              { type: 'keyTerm', term: 'Tondeuse-sur-peigne', definition: 'Le même principe que les ciseaux-sur-peigne, mais en utilisant une tondeuse électrique à la place — plus rapide ; idéal pour les dégradés, les effilages et les graduations très courtes.' },
                          ],
                      },
                      {
                          id: 's7-5',
                          title: '7.5 Techniques de texturisation',
                          content: [
                              { type: 'paragraph', text: 'La texturisation modifie les extrémités des cheveux coupés pour réduire le volume, ajouter du mouvement ou créer une finition plus douce sans changer la longueur globale de la coupe.' },
                              {
                                  type: 'table', headers: ['Technique', 'Comment elle est effectuée', 'Effet', 'Meilleure utilisation'], rows: [
                                      ['Point coupé', 'Ouvrir les ciseaux ; placer les pointes dans la sous-section à des profondeurs variables ; couper vers le haut dans les pointes', 'Enlève la dureté de la ligne de coupe ; crée un bord doux et cassé', 'Adoucir les coupes franches ; enlever les marques de ciseaux du périmètre'],
                                      ['Cran (point coupé profond)', 'Comme le point coupé mais avec des coupes plus profondes dans les cheveux', 'Texture plus dramatique ; extrémités grossières, déconstruites, séparées', 'Cheveux lourds/épais ; styles modernes, éditoriaux et texturés'],
                                      ['Tranche (slicing)', 'Ouvrir partiellement les ciseaux ; glisser le long de la surface d\'une sous-section avec un mouvement coulissant', 'Enlève le volume et ajoute un mouvement interne sans changer la longueur aux extrémités', 'Cheveux épais ; réduire le volume des couches uniformes ; longues couches modernes'],
                                      ['Coupe glissée (slide cutting)', 'Tenir une sous-section avec tension ; ouvrir complètement les ciseaux ; glisser de la mi-tige vers les extrémités en un mouvement fluide', 'Amincit et effile les extrémités ; crée une finition douce, effilée et pleine de mouvement', 'Cheveux mouillés ; adoucissement ; looks modernes déconnectés'],
                                      ['Coupe au rasoir', 'Utiliser un rasoir à lame sur cheveux mouillés ; faire glisser le rasoir le long et dans la section', 'Crée des extrémités douces, diffuses, effilées avec un mouvement interne', 'Carrés texturés ; franges ; formes longues et fluides ; encadrement'],
                                      ['Coupe en copeaux', 'Coupures courtes et rapides dans les extrémités perpendiculaires à la sous-section', 'Crée des extrémités très hachées, séparées et texturées', 'Cheveux très épais ; coupes texturées courtes ; styles punk/éditoriaux'],
                                  ]
                              },
                          ],
                      },
                      {
                          id: 's7-6',
                          title: '7.6 Contre-vérification et finition',
                          content: [
                              { type: 'keyTerm', term: 'Contre-vérification', definition: 'Réexamen d\'une coupe terminée en prenant des sections dans la direction opposée à celle dans laquelle la coupe a été effectuée — vérifie l\'uniformité, l\'équilibre et la symétrie ; détecte les sections manquées ou inégales.' },
                              { type: 'paragraph', text: 'Procédures de contre-vérification :' },
                              {
                                  type: 'bullets', items: [
                                      'Si la coupe a été effectuée avec des sections horizontales, contre-vérifier avec des sections verticales ou diagonales',
                                      'Si la coupe a été effectuée avec des sections diagonales, contre-vérifier horizontalement',
                                      'Toujours comparer les deux côtés de la tête pour la symétrie',
                                      'Vérifier la répartition du poids visuellement de face, des côtés et de dos',
                                      'Effectuer une vérification finale sur cheveux secs après le séchage au sèche-cheveux pour confirmer la forme finie',
                                  ]
                              },
                              {
                                  type: 'table', headers: ['Étape de vérification finale', 'Que rechercher'], rows: [
                                      ['Uniformité du périmètre', 'Pas de points décalés ou inégaux dans la ligne de périmètre ; les deux côtés correspondent en longueur'],
                                      ['Répartition du poids', 'Le poids tombe là où prévu ; pas de volume ou de creux non intentionnels'],
                                      ['Forme de la frange', 'Ligne ou texture cohérente ; symétrique des deux côtés'],
                                      ['Équilibre des favoris', 'Les deux favoris sont de longueur et de forme égales'],
                                      ['Finition de la ligne de cou', 'Ligne de cou propre et définie, appropriée à la coupe (effilée, carrée ou arrondie)'],
                                      ['Silhouette globale', 'La forme désirée est évidente sous tous les angles lorsque le client est assis naturellement'],
                                  ]
                              },
                          ],
                      },
                  ],
                  practiceQuestions: [
                      { id: 'q7-1', question: 'Une coupe effectuée à une élévation de 0° produit quel résultat ?', options: ['Couches uniformes partout', 'Poids maximal au périmètre sans couches intérieures', 'Court à la nuque, long sur le dessus', 'Élimination uniforme du poids'], correctIndex: 1, explanation: 'Une élévation de 0° signifie pas de soulèvement — les cheveux sont peignés dans leur chute naturelle et coupés. Tous les cheveux se rencontrent au périmètre, créant un poids maximal là avec aucune couche au-dessus.' },
                      { id: 'q7-2', question: 'Quelle ligne de coupe crée un carré classique gradué (stacké) avec un dos plus court et un devant plus long ?', options: ['Horizontale', 'Verticale', 'Diagonale avant', 'Diagonale arrière'], correctIndex: 3, explanation: 'Une ligne de coupe diagonale arrière crée un dos plus long et un devant plus court — la forme classique en A et du carré gradué.' },
                      { id: 'q7-3', question: 'La variable la plus importante pour contrôler la répartition du poids dans toute coupe est :', options: ['Le type de ciseaux utilisé', 'L\'élévation des cheveux', 'L\'épaisseur de chaque sous-section', 'La direction de la raie'], correctIndex: 1, explanation: 'L\'élévation contrôle tout : 0° = poids maximal au périmètre ; 45° = poids gradué ; 90° = couches uniformément réparties ; plus de 90° = poids extérieur plus long. C\'est la variable structurelle principale.' },
                      { id: 'q7-4', question: 'Un guide mobile est le MIEUX utilisé lors de la coupe :', options: ['D\'un périmètre franc d\'une seule longueur', 'D\'une nuque graduée', 'De couches uniformes ou longues sur toute la tête', 'D\'une ligne de frange précise'], correctIndex: 2, explanation: 'Un guide mobile se déplace section par section dans la tête, transportant la mesure de longueur vers l\'avant. C\'est la technique correcte pour les coupes en couches où la longueur doit être répartie uniformément.' },
                      { id: 'q7-5', question: 'Le point coupé est une technique de texturisation qui :', options: ['Enlève du poids en coupant parallèlement à la tige du cheveu', 'Adoucit et casse la ligne de coupe du périmètre en coupant dans les pointes avec les pointes des ciseaux', 'Crée un poids maximal aux extrémités', 'Utilise le rasoir pour effiler les pointes'], correctIndex: 1, explanation: 'Le point coupé place les pointes des ciseaux dans les extrémités d\'une sous-section à différentes profondeurs et coupe vers le haut, créant une finition douce, cassée, non franche — enlevant les marques de ciseaux et ajoutant du mouvement.' },
                      { id: 'q7-6', question: 'La contre-vérification d\'une coupe sert à :', options: ['Ajouter de la texture aux pointes', 'Vérifier l\'uniformité et l\'équilibre en examinant la coupe dans la direction opposée à celle où elle a été effectuée', 'Enlever du volume des sections épaisses', 'Déterminer la technique de coiffage finale à utiliser'], correctIndex: 1, explanation: 'La contre-vérification consiste à re-sectionner les cheveux dans la direction perpendiculaire à la direction de coupe d\'origine pour vérifier que toutes les sections sont uniformes et qu\'aucune zone n\'a été manquée ou déséquilibrée.' },
                      { id: 'q7-7', question: 'Quel outil est le PLUS approprié pour créer une finition douce, effilée et texturée sur une coupe de carré mouillée ?', options: ['Ciseaux à effiler', 'Rasoir droit / rasoir à lame', 'Tondeuse électrique', 'Tondeuse de finition'], correctIndex: 1, explanation: 'Le rasoir droit crée des extrémités douces, diffuses et effilées sur cheveux mouillés. Il est idéal pour les formes texturées et déconstruites et doit toujours être utilisé sur cheveux mouillés pour éviter les tiraillements et les dommages.' },
                      { id: 'q7-8', question: 'Un coiffeur coupe la nuque en tenant le peigne horizontalement contre la peau à un angle et en passant les ciseaux sur les dents du peigne. Cette technique s\'appelle :', options: ['Point coupé', 'Tondeuse-sur-peigne', 'Ciseaux-sur-peigne', 'Rasoir sur peigne'], correctIndex: 2, explanation: 'Les ciseaux-sur-peigne est la technique classique de coupe de barbier et de précision où le peigne agit comme un guide et les ciseaux coupent par-dessus — permettant un effilage et une graduation très près sans tondeuse.' },
                  ],
              },

              // ─── CHAPITRE 8 ────────────────────────────────────────────────────────
              {
                  id: 'ch-8',
                  number: 8,
                  title: 'Coiffage, tressage et connaissance des produits',
                  subtitle: 'S1738 & S1744 — Mises en plis humides, outils thermiques, séchage au sèche-cheveux, tressage, pressage et produits coiffants',
                  isFree: false,
                  estimatedMinutes: 35,
                  sections: [
                      {
                          id: 's8-1',
                          title: '8.1 Coiffage humide : Fondamentaux et techniques de mise en plis',
                          content: [
                              { type: 'paragraph', text: 'Le coiffage humide exploite la plasticité temporaire des cheveux lorsqu\'ils sont mouillés et la reformation des liaisons hydrogène à mesure que les cheveux sèchent. Lorsque les cheveux mouillés sont enveloppés, enroulés ou modelés dans une nouvelle forme puis séchés dans cette position, les liaisons hydrogène se reforment autour de la nouvelle forme — maintenant le style jusqu\'au prochain mouillage des cheveux.' },
                              { type: 'keyTerm', term: 'Liaison hydrogène', definition: 'Liaison faible mais nombreuse dans le cortex du cheveu, rompue par l\'eau et la chaleur et reformée lorsque le cheveu sèche ou refroidit — la base chimique de tout coiffage humide et thermique.' },
                              {
                                  type: 'table', headers: ['Technique de coiffage humide', 'Comment ça marche', 'Outils utilisés', 'Résultat'], rows: [
                                      ['Mise en plis sur bigoudis', 'Sections de cheveux humides enroulées autour de bigoudis cylindriques ; séchées sous casque ; déroulées lorsqu\'elles sont complètement refroidies', 'Bigoudis cylindriques (tailles variées), papiers de finition, pics, casque de séchage', 'Vagues ou boucles lisses et polies ; look vintage classique ; ajoute du volume et du corps'],
                                      ['Pinces à friser (pin curls)', 'Petites sections de cheveux enroulées en cercles plats contre le cuir chevelu et épinglées ; séchées et relâchées', 'Peigne queue de rat, pinces canard ou épingles à cheveux, casque de séchage', 'Vagues douces, ondulations classiques en forme de S, effets de boucles aux doigts'],
                                      ['Vagues au doigt', 'Cheveux humides modelés en motif de vagues en forme de S à l\'aide des doigts et d\'un peigne ; maintenus avec des pinces pendant le séchage', 'Peigne, peigne queue de rat, pinces canard ou épingles à cheveux', 'Motif de vagues en S sculpté classique ; rétro et éditorial'],
                                      ['Moulage / Sculpture', 'Cheveux humides lissés ou façonnés en une forme spécifique et laissés sécher dans cette forme', 'Peigne queue de rat, brosse lissante, gel à tenue forte', 'Queues de cheval lisses, bords plaqués, chignons formés'],
                                      ['Tressage', 'Entrelacement de mèches de cheveux selon des motifs structurés sur cheveux humides ou secs', 'Mains, peigne queue de rat, élastiques', 'Divers styles de tresses ; voir la section 8.5'],
                                  ]
                              },
                              {
                                  type: 'infoBox', title: 'Relation taille du bigoudi et taille de la boucle', items: [
                                      'GROS BIGOUDIS (1,5"–2"+) : Produisent de grandes vagues souples et lâches et du volume avec une définition de boucle minimale',
                                      'BIGOUDIS MOYENS (1"–1,5") : Produisent des boucles moyennes avec un bon corps et du mouvement — les plus polyvalents',
                                      'PETITS BIGOUDIS (moins de 1") : Produisent des boucles serrées et définies et des anglaises',
                                      'RÈGLE : Plus le diamètre du bigoudi est petit, plus la boucle est serrée. Plus le diamètre est grand, plus la vague est lâche et volumineuse.',
                                  ]
                              },
                          ],
                      },
                      {
                          id: 's8-2',
                          title: '8.2 Techniques de séchage au sèche-cheveux',
                          content: [
                              { type: 'paragraph', text: 'Le séchage au sèche-cheveux utilise une combinaison de chaleur et d\'air en mouvement pour sécher et remodeler les cheveux. Différents embouts et techniques produisent des résultats radicalement différents.' },
                              {
                                  type: 'table', headers: ['Embout de sèche-cheveux', 'But', 'Conseil technique'], rows: [
                                      ['Buse concentratrice', 'Dirige le flux d\'air en un jet étroit pour un coiffage de précision', 'Garder en mouvement ; toujours diriger le flux d\'air vers le bas le long de la tige du cheveu pour lisser la cuticule et ajouter de la brillance'],
                                      ['Diffuseur', 'Disperses le flux d\'air doucement sur une large zone', 'Utiliser sur cheveux bouclés et ondulés pour améliorer le motif de boucles naturel sans perturbation ; presser et recueillir les boucles dans les coupelles du diffuseur ; utiliser chaleur et vitesse faibles'],
                                      ['Sans embout', 'Flux d\'air large et général', 'Séchage grossier avant de commencer le coiffage de précision'],
                                  ]
                              },
                              {
                                  type: 'table', headers: ['Technique', 'Outils', 'Résultat'], rows: [
                                      ['Séchage lisse / raide', 'Brosse plate ou brosse lissante ; buse concentratrice', 'Finition lisse et raide avec brillance de cuticule fermée ; diriger l\'air de la racine à la pointe'],
                                      ['Séchage pour volume', 'Brosse ronde (moyenne à grande) ; buse concentratrice', 'Soulevement des racines, courbe et mouvement ; enrouler les cheveux dans la brosse, appliquer la chaleur, relâcher le froid — le "coup de froid" fixe la courbe'],
                                      ['Séchage pour définition des boucles', 'Diffuseur ; pas de brosse', 'Boucles naturelles améliorées, définies, sans frisottis'],
                                      ['Séchage pour vague douce', 'Grande brosse ronde ; buse concentratrice', 'Motif de vague doux et poli avec mouvement ; technique entre le raide et le bouclé'],
                                  ]
                              },
                              { type: 'keyTerm', term: 'Coup de froid', definition: 'Une rafale d\'air froid du sèche-cheveux utilisée après avoir appliqué de la chaleur sur une section — il reforme les liaisons hydrogène qui ont été ouvertes par la chaleur et "fixe" le style. Toujours finir un séchage au sèche-cheveux avec de l\'air froid pour la longévité.' },
                              { type: 'paragraph', text: 'Protection thermique et sécurité lors du séchage :' },
                              {
                                  type: 'bullets', items: [
                                      'Toujours appliquer un spray ou une crème protectrice de chaleur avant le séchage — réduit les dommages protéiques dus à la chaleur',
                                      'Garder le sèche-cheveux à 10–15 cm de la surface des cheveux ; ne jamais le maintenir immobile sur un point',
                                      'Utiliser le réglage de chaleur le plus bas efficace — "bas et lent" réduit les dommages',
                                      'Vérifier régulièrement le filtre du sèche-cheveux — un filtre obstrué provoque une surchauffe, des incendies et des dommages au moteur',
                                  ]
                              },
                          ],
                      },
                      {
                          id: 's8-3',
                          title: '8.3 Outils de coiffage thermique',
                          content: [
                              {
                                  type: 'table', headers: ['Outil', 'Plage de température', 'Meilleure utilisation', 'Considérations sur le type de cheveux'], rows: [
                                      ['Fer plat (lisseur)', '150–230 °C', 'Lissage ; création de vagues en S ; retourner les pointes ; finitions lisses', 'Cheveux fins : max 150–180 °C. Moyens : 180–200 °C. Épais/résistants : jusqu\'à 230 °C. Toujours utiliser un protecteur thermique.'],
                                      ['Fer à friser', '120–220 °C', 'Création de boucles et de vagues ; ajout de mouvement ; courbe et retourne', 'La taille du cylindre détermine la taille de la boucle. Options avec ou sans pince.'],
                                      ['Baguette à friser', '120–220 °C', 'Boucles modernes, ouvertes et fluides sans le pli de la pince', 'Enrouler les cheveux loin du visage pour des boucles vers l\'extérieur ; enrouler vers le visage pour un look rétro. Pas de pince = tension variée pour un résultat naturel.'],
                                      ['Peigne chauffant', 'Chauffé sur cuisinière ou électrique ; 150–200 °C', 'Lissage temporaire des cheveux crépus et très bouclés', 'Utiliser sur cheveux propres, secs et pressés. Pression légère pour les fins, plus forte pour les épais. Appliquer de l\'huile de pressage avant pour la protection et la glisse.'],
                                      ['Crimpeur', 'Variable', 'Ajout d\'un motif de texture en zigzag pour le volume et les looks éditoriaux', 'Rarement utilisé en milieu professionnel aujourd\'hui ; crée une texture angulaire distinctive'],
                                  ]
                              },
                              { type: 'keyTerm', term: 'Dommage thermique', definition: 'Dommage permanent et irréversible à la structure protéique du cheveu causé par une exposition excessive ou répétée à une chaleur élevée — résulte en cheveux secs, cassants, rêches, sujets à la casse, qui ne peuvent pas être réparés ; seule la nouvelle pousse est épargnée.' },
                              {
                                  type: 'infoBox', title: 'Protocole de sécurité thermique', items: [
                                      '1. TOUJOURS utiliser un produit protecteur de chaleur avant le coiffage thermique',
                                      '2. Ne jamais appliquer d\'outils thermiques sur cheveux mouillés ou humides — la vapeur cause des dommages protéiques sévères',
                                      '3. Garder les outils en mouvement — ne jamais les tenir immobiles sur un point',
                                      '4. Laisser les outils chauffer à la température de fonctionnement AVANT utilisation ; ne pas utiliser à froid et monter en température sur les cheveux',
                                      '5. Ranger les outils dans des supports thermorésistants ; jamais sur des serviettes, des capes ou des surfaces en tissu',
                                      '6. Débrancher en quittant le poste de travail, même brièvement',
                                  ]
                              },
                          ],
                      },
                      {
                          id: 's8-4',
                          title: '8.4 Produits coiffants — Chimie et application',
                          content: [
                              {
                                  type: 'table', headers: ['Produit', 'Niveau de tenue', 'Finition', 'Meilleure application sur', 'Ingrédient/action clé'], rows: [
                                      ['Mousse', 'Légère à moyenne', 'Brillance naturelle à douce', 'Cheveux humides, essorés avec une serviette', 'Polymères et résines créent un film léger autour des cheveux pour maintenir la forme sans raideur'],
                                      ['Gel', 'Moyen à très fort', 'Brillance élevée (effet mouillé) ou croustillant', 'Cheveux humides pour la "carapace" ; cheveux secs pour texture par mèches', 'Polymères créent un film rigide ; application humide = vagues/boucles définies ; sec = brillance et contrôle'],
                                      ['Laque', 'Légère à super tenue', 'Naturelle à raide', 'Style sec et fini', 'Aérosol ou pompe délivre des polymères de fixation ; verrouille le style fini en place ; options de tenue flexible ou ferme'],
                                      ['Cire / Pommade', 'Légère à ferme', 'Brillance élevée (à base de cire) ou mat (à base d\'argile)', 'Cheveux secs pour texture, définition et séparation', 'Base de pétrole, cire d\'abeille ou synthétique ; ne se lave pas facilement ; meilleur pour cheveux courts et travail de détail'],
                                      ['Sérum / Spray de brillance', 'Aucune à légère', 'Brillance très élevée', 'Longueurs et pointes des cheveux secs ou humides', 'Silicones enrobent la tige du cheveu, lissent la cuticule, ajoutent une brillance miroir et réduisent les frisottis'],
                                      ['Crème / Lotion', 'Légère à moyenne', 'Naturelle', 'Cheveux humides ou secs ; épais ou bouclés', 'Émollients et humectants ; ajoute de l\'hydratation, de la douceur et de la définition sans raideur'],
                                      ['Argile / Crème matifiante', 'Moyenne à forte', 'Mate à faible brillance', 'Cheveux secs ; styles courts à moyens', 'L\'argile kaolin ou bentonite crée de la texture, de la séparation et une finition mate avec une tenue maniable'],
                                      ['Protecteur thermique', 'Aucune', 'Variable', 'Cheveux humides ou secs avant outils thermiques', 'Silicones et protéines forment une barrière thermique ; réduit la pénétration de la chaleur dans le cortex ; aide à répartir la chaleur uniformément'],
                                  ]
                              },
                              { type: 'paragraph', text: 'Règles d\'application des produits :' },
                              {
                                  type: 'bullets', items: [
                                      'Appliquer la plupart des produits coiffants sur cheveux humides pour une meilleure répartition',
                                      'Utiliser moins de produit que vous ne le pensez — l\'accumulation de produit ternit les cheveux, attire la saleté et les alourdit',
                                      'Émulsionner le produit dans les paumes avant application — assure une répartition uniforme',
                                      'Garder les produits loin du cuir chevelu si possible — surtout les cires lourdes, les huiles et les gels à tenue forte',
                                  ]
                              },
                          ],
                      },
                      {
                          id: 's8-5',
                          title: '8.5 Tressage et techniques pour cheveux naturels',
                          content: [
                              {
                                  type: 'table', headers: ['Technique', 'Description', 'Variante'], rows: [
                                      ['Tresse à trois brins', 'Trois sections entrelacées selon un motif alterné dessus-dessous', 'Sous la main (variantes de tresse française / tresse hollandaise)'],
                                      ['Tresse française', 'Tresse à trois brins où de petites sections de cheveux sont ajoutées de chaque côté au fur et à mesure que la tresse progresse de la racine vers la nuque', 'Ajoute tous les cheveux environnants ; crée une tresse plate qui épouse le cuir chevelu'],
                                      ['Tresse hollandaise (française inversée)', 'Identique à la tresse française mais les brins se croisent DESSOUS au lieu de dessus — la tresse est en relief au-dessus du cuir chevelu', 'Aussi appelée tresse française "à l\'envers" ; crée un effet 3D surélevé'],
                                      ['Cornrows', 'Tresses plates et serrées de style hollandais, réalisées très près du cuir chevelu en rangées ou motifs droits ou géométriques', 'Utilisées comme base pour les extensions, les tissages et les styles protecteurs'],
                                      ['Tresse queue de poisson', 'Seulement deux sections, avec de fines mèches alternativement croisées de l\'extérieur d\'une section à l\'autre', 'Crée un motif en chevron ; semble complexe mais n\'utilise que deux brins'],
                                      ['Box braids', 'Tresses individuelles à trois brins sectionnées en motif carré ; souvent allongées avec des cheveux ajoutés', 'Style protecteur ; peut être fait avec ou sans extensions'],
                                      ['Styles de torsades (torsade à deux brins)', 'Deux sections de cheveux tordues l\'une autour de l\'autre (non entrelacées)', 'Courant dans les soins des cheveux naturels ; peut être détorsadé pour créer un motif de boucles'],
                                  ]
                              },
                              { type: 'keyTerm', term: 'Style protecteur', definition: 'Une coiffure qui éloigne les pointes des cheveux de l\'exposition et des manipulations pour minimiser la casse et favoriser la rétention de longueur. Exemples : tresses, torsades, chignons.' },
                              { type: 'paragraph', text: 'Principes de soin des cheveux naturels (niveau 2) :' },
                              {
                                  type: 'bullets', items: [
                                      'Démêler doucement avec un peigne à dents larges ou les doigts, en commençant par les pointes et en remontant vers les racines',
                                      'Le conditionnement en profondeur est essentiel pour les textures crépus et frisées — au minimum toutes les 1–2 semaines',
                                      'Éviter fréquemment les températures élevées — les textures crépus sont plus fragiles et sujettes aux dommages thermiques',
                                      'La méthode LOC est une technique de superposition courante pour sceller l\'hydratation des cheveux naturels',
                                      'Éviter les styles avec une tension excessive, surtout autour de la ligne de croissance — l\'alopécie de traction est un risque sérieux',
                                  ]
                              },
                          ],
                      },
                  ],
                  practiceQuestions: [
                      { id: 'q8-1', question: 'Quelle est la base chimique de tous les coiffages temporaires humides et thermiques ?', options: ['Rompre et reformer les liaisons disulfure', 'Rompre et reformer les liaisons hydrogène', 'Rompre les liaisons peptidiques par la chaleur', 'Oxyder la mélanine dans le cortex'], correctIndex: 1, explanation: 'Les liaisons hydrogène sont rompues par l\'eau ou la chaleur. Lorsque les cheveux sèchent ou refroidissent dans une nouvelle position, les liaisons hydrogène se reforment dans la nouvelle forme — maintenant le style. C\'est pourquoi les mises en plis humides et le séchage au sèche-cheveux fonctionnent.' },
                      { id: 'q8-2', question: 'Le "coup de froid" à la fin du séchage d\'une section sert à :', options: ['Éliminer rapidement l\'humidité des cheveux', 'Verrouiller le style en place en reformant les liaisons hydrogène à mesure que les cheveux refroidissent', 'Ouvrir la cuticule pour une meilleure absorption du produit', 'Réduire le temps nécessaire pour coiffer la section suivante'], correctIndex: 1, explanation: 'Le coup de froid ferme la cuticule et reforme les liaisons hydrogène temporairement rompues par la chaleur. Cela "fixe" la forme du séchage et prolonge considérablement la durée du style.' },
                      { id: 'q8-3', question: 'Appliquer un fer plat sur des cheveux légèrement humides produit un grésillement. Cela signifie :', options: ['Le protecteur thermique s\'active correctement', 'Le réglage de température est approprié', 'La vapeur endommage la structure protéique des cheveux — c\'est une erreur grave', 'Le fer a besoin d\'être nettoyé'], correctIndex: 2, explanation: 'Le grésillement est l\'eau se transformant en vapeur à l\'intérieur de la tige du cheveu sous un fer fermé. L\'expansion rapide de la vapeur rompt le cortex du cheveu de l\'intérieur, causant des dommages thermiques sévères et irréversibles.' },
                      { id: 'q8-4', question: 'Un embout diffuseur sur un sèche-cheveux est le PLUS approprié pour :', options: ['Créer un séchage très lisse et raide', 'Améliorer le motif naturel des boucles ou des vagues avec un minimum de perturbation', 'Séchage grossier rapide des cheveux raides et épais', 'Diriger le flux d\'air pour un soulèvement précis des racines'], correctIndex: 1, explanation: 'Les diffuseurs dispersent le flux d\'air doucement et largement, réduisant la force de l\'air directe qui perturberait et friserait les cheveux bouclés. Ils permettent aux boucles de sécher dans leur motif naturel avec définition et frisottis réduits.' },
                      { id: 'q8-5', question: 'Quel produit coiffant offre le niveau de tenue le PLUS ÉLEVÉ avec une finition mouillée/très brillante ?', options: ['Mousse', 'Sérum', 'Gel à tenue forte', 'Protecteur thermique'], correctIndex: 2, explanation: 'Le gel à tenue forte crée un film polymère rigide autour de chaque mèche de cheveux en séchant, offrant la tenue la plus élevée des produits coiffants courants avec un aspect mouillé et brillant.' },
                      { id: 'q8-6', question: 'Une tresse hollandaise diffère d\'une tresse française en ce que :', options: ['Elle utilise quatre brins au lieu de trois', 'Les brins se croisent en dessous au lieu de dessus, créant une tresse en relief au-dessus du cuir chevelu', 'Elle n\'est réalisée qu\'à la nuque', 'Elle utilise des extensions de cheveux ajoutées partout'], correctIndex: 1, explanation: 'La tresse hollandaise croise les brins sous le centre — le contraire d\'une tresse française — créant un effet 3D surélevé sur le dessus du cuir chevelu.' },
                      { id: 'q8-7', question: 'La méthode LOC pour les cheveux naturels fait référence à :', options: ['Longueur, Huile, Conditionnement', 'Liquide, Huile, Crème — une technique de superposition pour sceller l\'hydratation', 'Après-shampoing sans rinçage, Huile, Crème de boucle — toujours appliquée uniquement sur cheveux secs', 'Faible chaleur, Traitement à l\'huile, Rinçage froid'], correctIndex: 1, explanation: 'LOC signifie Liquide (eau ou après-shampoing sans rinçage), Huile (scelle l\'hydratation) et Crème (fournit une tenue et un scellement supplémentaires). C\'est une méthode de superposition populaire pour les textures naturelles et crépus afin de maximiser la rétention d\'hydratation.' },
                  ],
              },
          ],
      },

      // =========================================================================
      // PARTIE 4 — SERVICES CHIMIQUES
      // =========================================================================
      {
          id: 'part-4',
          title: 'Partie 4 : Services chimiques',
          color: '#1B4F72',
          description: 'Les chapitres 9 à 12 couvrent la chimie et l\'application des permanentes, des défrisants, de la coloration, de la décoloration et des services d\'extension capillaire.',
          chapters: [

              // ─── CHAPITRE 9 ────────────────────────────────────────────────────────
              {
                  id: 'ch-9',
                  number: 9,
                  title: 'Permanente et ondulation',
                  subtitle: 'S1739 & S1745 — Chimie de la permanente, types de bigoudis, schémas d\'enroulement, traitement et neutralisation',
                  isFree: false,
                  estimatedMinutes: 35,
                  sections: [
                      {
                          id: 's9-1',
                          title: '9.1 Chimie de la permanente : comment elle fonctionne',
                          content: [
                              { type: 'paragraph', text: 'Une permanente utilise la chimie pour réarranger de manière permanente la structure interne de la tige pilaire, créant un nouveau motif d\'ondulation ou de boucle. Le processus implique la rupture des liaisons disulfure par un agent réducteur, l\'enroulement physique des cheveux dans une nouvelle forme sur des bigoudis, et la reformation des liaisons dans la nouvelle position par un neutralisant oxydant.' },
                              {
                                  type: 'numbered', items: [
                                      'RÉDUCTION : La lotion de permanente pénètre la cuticule et le cortex, rompant les liaisons disulfure entre les chaînes de kératine adjacentes. Le produit chimique effectuant ce travail est le thioglycolate d\'ammonium dans la plupart des permanentes alcalines, ou le monothioglycolate de glycéryle dans les permanentes acides.',
                                      'REFORMATION : Pendant que les liaisons sont rompues, les cheveux sont mous et malléables. Les cheveux enroulés autour du bigoudi prennent la nouvelle forme.',
                                      'OXYDATION (NEUTRALISATION) : Le neutralisant reforme les liaisons disulfure rompues dans leur nouvelle position autour du bigoudi — rendant le changement permanent. Cette étape est appelée neutralisation.',
                                  ]
                              },
                              {
                                  type: 'table', headers: ['Type de permanente', 'pH', 'Agent réducteur clé', 'Traitement', 'Caractéristiques'], rows: [
                                      ['Ondulation alcaline (froide)', '8,0–9,5', 'Thioglycolate d\'ammonium (ATG)', 'Température ambiante ; pas de chaleur requise', 'Forte, action rapide ; produit des boucles plus serrées et durables ; peut être plus agressive pour les cheveux ; permanente professionnelle la plus courante'],
                                      ['Ondulation acide (vraie acide)', '4,5–6,5', 'Monothioglycolate de glycéryle (GMTG)', 'Nécessite de la chaleur', 'Plus douce pour les cheveux et le cuir chevelu ; produit des ondulations plus douces et d\'aspect plus naturel ; traitement plus lent ; recommandée pour les cheveux colorés ou sensibilisés'],
                                      ['Permanente exothermique', '7,0–8,5', 'ATG avec activateur créant de la chaleur', 'Auto-chauffante — la réaction de mélange génère de la chaleur', 'Traitement plus rapide que les permanentes acides ; modérément douce ; polyvalente'],
                                      ['Ondulation alcaline de volume (body wave)', '8,0–9,5', 'ATG', 'Température ambiante', 'Utilise de gros bigoudis pour créer une ondulation/dynamique douce et lâche plutôt que des boucles serrées ; ajoute du volume et de la courbe'],
                                      ['Permanente sans thio', 'Variable', 'Cystéamine ou mercaptamine', 'Varie', 'Alternative pour les clientes sensibles à l\'ATG ; chimie plus récente ; odeur plus douce'],
                                  ]
                              },
                              { type: 'keyTerm', term: 'Lanthionisation', definition: 'Le changement chimique permanent qui se produit lorsqu\'un défrisant à l\'hydroxyde rompt une liaison disulfure — contrairement à la chimie de permanente, cela crée une seule liaison lanthionine qui ne PEUT PAS être reformée et est irréversible.' },
                          ],
                      },
                      {
                          id: 's9-2',
                          title: '9.2 Bigoudis de permanente — Types, tailles et effet de boucle',
                          content: [
                              {
                                  type: 'table', headers: ['Type de bigoudi', 'Forme', 'Effet de boucle', 'Meilleure utilisation'], rows: [
                                      ['Droit/cylindrique', 'Diamètre uniforme sur toute la longueur', 'Boucle uniforme et constante de la racine à la pointe', 'Permanentes classiques ; motif de boucle uniforme partout'],
                                      ['Concave (sablier)', 'Diamètre plus petit au centre, plus grand aux extrémités', 'Boucle plus serrée au milieu de la mèche, plus douce aux racines et aux pointes — réduit la cassure à la racine', 'Le plus populaire pour un aspect naturel ; réduit le problème courant de "cassure à la racine"'],
                                      ['Bigoudi spiralé (flexi-rod)', 'Long, cylindrique ; cheveux enroulés en diagonale de la racine à la pointe', 'Boucles spirales allongées et élastiques avec une définition uniforme de la racine à la pointe', 'Cheveux longs ; effets spirales et anglaises ; permanentes spécialisées'],
                                      ['Bigoudi souple (bender rod)', 'Fil recouvert de mousse flexible ; peut être plié en formes', 'Ondulation douce et lâche ou spirale définie selon la technique', 'Cheveux longs ; ondulations de volume ; motifs d\'ondulation créatifs'],
                                      ['Pince à épingle', 'Petite pince ou épingle ; les cheveux sont formés en une boucle plate contre le cuir chevelu', 'Mouvement de boucle plat et lisse — effet de vague de plage', 'Texture douce ; doux ; motifs d\'ondulation vintage'],
                                  ]
                              },
                              {
                                  type: 'infoBox', title: 'Taille du bigoudi et résultat de boucle', items: [
                                      'GROS DIAMÈTRE : Produit de grandes ondulations douces et lâches et du volume — ondulation de volume',
                                      'DIAMÈTRE MOYEN : Produit des boucles moyennes avec du mouvement — le plus polyvalent',
                                      'PETIT DIAMÈTRE : Produit des boucles serrées, définies et élastiques — aspect permanent traditionnel',
                                      'TRÈS PETIT DIAMÈTRE : Produit des boucles très serrées et crépus — permanentes pour texture afro',
                                      'RÈGLE : Plus le bigoudi est petit, plus la boucle est serrée. La boucle se détendra de 30 à 50 % après le séchage et le repos des cheveux.',
                                  ]
                              },
                          ],
                      },
                      {
                          id: 's9-3',
                          title: '9.3 Schémas d\'enroulement et techniques',
                          content: [
                              {
                                  type: 'table', headers: ['Schéma d\'enroulement', 'Description', 'Effet / Meilleure utilisation'], rows: [
                                      ['Enroulement de base / classique', 'Cheveux enroulés des pointes au cuir chevelu en spirales régulières autour du bigoudi', 'Boucle uniforme partout ; technique la plus courante pour les permanentes standard'],
                                      ['Enroulement de courbure / contour', 'Bigoudis placés pour suivre la courbe de la tête ; sectionnement diagonal', 'Mouvement naturel qui suit la forme de la tête ; réduit les lignes droites dans la boucle finie'],
                                      ['Enroulement en spirale', 'Cheveux enroulés en diagonale autour d\'un long bigoudi de la racine à la pointe', 'Boucles spirales allongées ; nécessite des bigoudis plus longs ; meilleur sur cheveux longs'],
                                      ['Enroulement directionnel', 'Bigoudis placés dans des directions spécifiques pour contrôler le mouvement des boucles', 'Direction personnalisée des boucles et du mouvement ; utilisé dans les conceptions de permanentes de précision'],
                                      ['Enroulement en "piggyback"', 'Deux bigoudis par section — un de la racine à mi-longueur, le second de mi-longueur aux pointes', 'Utilisé sur cheveux longs pour créer une boucle uniforme partout sans étirer l\'ondulation aux racines ni emmêler les pointes'],
                                  ]
                              },
                              { type: 'paragraph', text: 'Règles d\'enroulement importantes :' },
                              {
                                  type: 'bullets', items: [
                                      'Chaque sous-section ne doit pas être plus large que la longueur du bigoudi ni plus épaisse que son diamètre',
                                      'Toujours utiliser un papier de finition pour protéger les pointes délicates et assurer un enroulement uniforme',
                                      'Maintenir une tension uniforme et constante — tension inégale = boucle inégale',
                                      'Le bigoudi doit être placé à la bonne base : sur la base pour un volume maximal, demi-base pour un certain volume, hors base pour un soulèvement minimal',
                                  ]
                              },
                          ],
                      },
                      {
                          id: 's9-4',
                          title: '9.4 Processus d\'application de la permanente',
                          content: [
                              {
                                  type: 'numbered', items: [
                                      'CONSULTATION ET ANALYSE : Évaluer l\'état des cheveux. Effectuer les tests d\'élasticité et de porosité. Examiner les contre-indications.',
                                      'SHAMPOING : Nettoyer avec un shampoing clarifiant. Sécher à la serviette jusqu\'à ce que les cheveux soient humides.',
                                      'PROTECTION : Appliquer une crème protectrice le long de la ligne de croissance et sur les oreilles pour prévenir l\'irritation cutanée.',
                                      'SECTIONNEMENT ET ENROULEMENT : Sectionner systématiquement ; enrouler chaque sous-section sur le bigoudi choisi avec des papiers de finition ; fixer fermement.',
                                      'APPLICATION DE LA LOTION : Saturer soigneusement chaque bigoudi, en travaillant de l\'arrière vers l\'avant ; régler une minuterie sur le temps recommandé.',
                                      'TRAITEMENT : Surveiller — effectuer périodiquement un test de boucle en déroulant doucement un bigoudi à la nuque pour vérifier la formation de la boucle.',
                                      'RINÇAGE : Rincer abondamment la lotion pendant au moins 5 minutes ; éponger l\'excès d\'eau des bigoudis avec des serviettes.',
                                      'APPLICATION DU NEUTRALISANT : Appliquer le neutralisant sur chaque bigoudi ; régler la minuterie ; NE PAS retirer les bigoudis.',
                                      'RETRAIT DES BIGOUDIS : Retirer doucement les bigoudis pendant que le neutralisant est encore présent, ou après une neutralisation partielle selon les instructions.',
                                      'NEUTRALISANT FINAL : Appliquer la dernière application de neutralisant sur les cheveux ; régler la minuterie ; rincer abondamment.',
                                      'REVITALISATION ET FINITION : Appliquer un revitalisant à pH acide ; rincer ; coiffer doucement.',
                                  ]
                              },
                              { type: 'keyTerm', term: 'Test en S', definition: 'Technique utilisée pendant le traitement pour vérifier si un ramollissement suffisant a eu lieu — dérouler doucement un bigoudi à la nuque et vérifier si les cheveux forment une forme de S correspondant au diamètre du bigoudi. Des cheveux sous-traités montrent un S faible, droit ou plat ; un surtraitement montre une mollesse excessive ou aucun ressort.' },
                              {
                                  type: 'table', headers: ['Problème de traitement', 'Cause', 'Correction'], rows: [
                                      ['Sous-traitement (boucle insuffisante)', 'Temps de traitement trop court ; cheveux résistants/faible porosité ; produit non saturé', 'Réappliquer la lotion ; retester ; prolonger le temps. Prévention : utiliser un produit de force appropriée ; assurer une saturation complète.'],
                                      ['Surtraitement (faible, mou, sans boucle, ou casse)', 'Temps de traitement trop long ; cheveux à haute porosité ou abîmés ; produit trop fort', 'Rincer et neutraliser immédiatement. Ne peut pas être inversé. Prévention : test sur mèche ; utiliser une formule plus douce sur les cheveux abîmés ; surveiller attentivement.'],
                                      ['Pointes droites', 'Les cheveux n\'ont pas été enroulés uniformément sur le papier de finition ; les pointes ont été pliées au lieu d\'être à plat', 'Prévention uniquement — couper les pointes affectées après le service. S\'assurer que les papiers de finition sont utilisés correctement.'],
                                      ['Cassure à la racine / brûlure du cuir chevelu', 'Lotion appliquée trop près du cuir chevelu sur un bigoudi droit ; tension excessive aux racines ; abrasion du cuir chevelu avant le service', 'Prévention : utiliser des bigoudis concaves ; appliquer une crème barrière ; ne jamais étirer ni tirer au niveau du cuir chevelu ; ne pas faire de permanente sur un cuir chevelu irrité'],
                                  ]
                              },
                          ],
                      },
                  ],
                  practiceQuestions: [
                      { id: 'q9-1', question: 'Quel est le principal agent réducteur dans une permanente alcaline (froide) standard ?', options: ['Peroxyde d\'hydrogène', 'Hydroxyde de sodium', 'Thioglycolate d\'ammonium (ATG)', 'Monothioglycolate de glycéryle (GMTG)'], correctIndex: 2, explanation: 'Le thioglycolate d\'ammonium est l\'agent réducteur actif dans les permanentes alcalines. Il rompt les liaisons disulfure dans le cortex à température ambiante. Le GMTG est utilisé dans les permanentes acides.' },
                      { id: 'q9-2', question: 'Le but du neutralisant dans une permanente est de :', options: ['Diminuer le pH des cheveux après la lotion', 'Reformer les liaisons disulfure dans leur nouvelle position pour rendre la boucle permanente', 'Éliminer la lotion des cheveux', 'Ajouter de l\'hydratation perdue pendant le traitement'], correctIndex: 1, explanation: 'La neutralisation reforme les liaisons disulfure rompues dans la nouvelle configuration autour du bigoudi — verrouillant ainsi la boucle de manière permanente. Sans neutralisation appropriée, la boucle ne durera pas.' },
                      { id: 'q9-3', question: 'Une permanente acide diffère d\'une permanente alcaline en ce qu\'elle :', options: ['Utilise un agent réducteur plus fort et ne nécessite pas de chaleur', 'Est plus douce pour les cheveux, a un pH plus bas (4,5–6,5) et nécessite de la chaleur pour l\'activation', 'Utilise le peroxyde d\'hydrogène comme agent réducteur', 'Traite beaucoup plus rapidement à température ambiante'], correctIndex: 1, explanation: 'Les permanentes acides utilisent le monothioglycolate de glycéryle à un pH plus bas, ce qui est plus doux pour les cheveux et le cuir chevelu. Elles nécessitent de la chaleur supplémentaire pour traiter et sont recommandées pour les cheveux colorés ou sensibilisés.' },
                      { id: 'q9-4', question: 'Le test en S pendant le traitement d\'une permanente vérifie :', options: ['Le temps d\'application correct du neutralisant', 'Si les cheveux ont suffisamment ramolli pour prendre la forme du bigoudi', 'La porosité de la boucle finie', 'Le niveau de pH de la lotion après application'], correctIndex: 1, explanation: 'Le test en S consiste à dérouler doucement un bigoudi à la nuque pour voir si les cheveux forment une forme de S correspondant à la taille du bigoudi — indiquant un traitement suffisant.' },
                      { id: 'q9-5', question: 'Quel type de bigoudi produit une boucle plus serrée au milieu de la mèche et plus douce aux racines et aux pointes, aidant à réduire la cassure à la racine ?', options: ['Bigoudi droit/cylindrique', 'Bigoudi concave', 'Bigoudi spiralé', 'Bigoudi souple'], correctIndex: 1, explanation: 'Les bigoudis concaves ont un diamètre plus petit au centre et plus grand aux extrémités. Cela crée des boucles plus serrées au milieu de la mèche et une courbe plus douce aux racines — réduisant la "cassure à la racine" courante avec les bigoudis droits.' },
                      { id: 'q9-6', question: 'Un surtraitement pendant une permanente entraîne :', options: ['Formation de boucle insuffisante et pointes droites', 'Boucle excessive, texture molle et casse potentielle due à des liaisons disulfure trop ramollies', 'Une boucle plus forte et plus définie que prévu', 'Décoloration de la couleur si la cliente a aussi les cheveux teints'], correctIndex: 1, explanation: 'Le surtraitement se produit lorsque la lotion est laissée trop longtemps, rompant trop de liaisons. Les cheveux deviennent trop ramollis et mous, perdent leur force et peuvent casser. La boucle n\'aura pas de ressort et peut ne pas se former du tout.' },
                  ],
              },

              // ─── CHAPITRE 10 ───────────────────────────────────────────────────────
              {
                  id: 'ch-10',
                  number: 10,
                  title: 'Défrisage des cheveux',
                  subtitle: 'S1739 & S1745 — Chimie des défrisants, types, application, neutralisation et procédures de retouche',
                  isFree: false,
                  estimatedMinutes: 30,
                  sections: [
                      {
                          id: 's10-1',
                          title: '10.1 Chimie des défrisants et types',
                          content: [
                              { type: 'paragraph', text: 'Les défrisants chimiques lissent de manière permanente les cheveux bouclés et crépus en rompant et en réarrangeant de manière permanente les liaisons disulfure du cheveu. Contrairement aux permanentes, les défrisants à l\'hydroxyde provoquent un changement permanent et irréversible appelé lanthionisation.' },
                              {
                                  type: 'table', headers: ['Type de défrisant', 'Ingrédient actif', 'pH', 'Traitement', 'Caractéristiques clés'], rows: [
                                      ['Hydroxyde de sodium / Soude caustique', 'Hydroxyde de sodium', '12–14', 'Rapide ; 10–20 minutes', 'Le plus fort ; le plus efficace sur les cheveux crépus très résistants ; peut causer de graves brûlures chimiques en cas de mauvaise utilisation ; nécessite une application soigneuse ; doit utiliser une base protectrice'],
                                      ['Défrisant sans soude', 'Hydroxyde de guanidine', '9–11', 'Modéré ; 15–25 minutes', 'Moins irritant pour le cuir chevelu que la soude ; vendu comme "sans base" mais nécessite toujours une protection à la ligne de croissance ; les dépôts de calcium peuvent rendre les cheveux secs avec le temps — utiliser un shampoing chélatant et des traitements hydratants régulièrement'],
                                      ['Thioglycolate d\'ammonium (défrisant thio)', 'ATG', '7–9,5', 'Modéré ; doit être neutralisé comme une permanente', 'Plus faible ; utilisé pour une réduction modérée des boucles ; nécessite une neutralisation ; pas aussi efficace sur les cheveux très crépus'],
                                      ['Hydroxyde de lithium / Potassium', 'LiOH ou KOH', '12–14', 'Similaire à NaOH', 'Défrisants alcalins alternatifs avec une action similaire ; présents dans certaines formulations pour enfants'],
                                  ]
                              },
                              { type: 'keyTerm', term: 'Lanthionisation', definition: 'La réaction chimique irréversible qui se produit lorsqu\'un défrisant à l\'hydroxyde rompt une liaison disulfure et la remplace par une seule liaison lanthionine. Cela lisse définitivement les cheveux et ne PEUT PAS être inversé par neutralisation — les nouveaux cheveux pousseront toujours avec le motif de boucles naturel.' },
                              { type: 'paragraph', text: 'Avertissement d\'incompatibilité clé — CONNAISSANCE DE SÉCURITÉ CRITIQUE :' },
                              {
                                  type: 'infoBox', title: '⚠️ Incompatibilité critique : Hydroxyde + Thio', items: [
                                      'N\'appliquez JAMAIS un produit à base de thio sur des cheveux précédemment traités avec un défrisant à l\'hydroxyde, et vice versa.',
                                      'Raison : Les défrisants à l\'hydroxyde créent des liaisons lanthionine irréversibles. La chimie thio tente de rompre ces liaisons, provoquant un ramollissement excessif et la CASSE.',
                                      'Prenez toujours un historique chimique complet. En cas de doute, effectuez un test sur mèche sur une petite section cachée.',
                                      'Cette incompatibilité peut provoquer une perte de cheveux catastrophique et irréversible si elle est ignorée.',
                                  ]
                              },
                          ],
                      },
                      {
                          id: 's10-2',
                          title: '10.2 Application du défrisant : première fois vs retouche',
                          content: [
                              {
                                  type: 'table', headers: ['Type de service', 'Méthode d\'application', 'Considérations clés'], rows: [
                                      ['Défrisant vierge', 'Appliquer le défrisant d\'abord sur les longueurs, puis les pointes, puis les nouvelles racines — en travaillant d\'abord loin du cuir chevelu, en finissant par le cuir chevelu en dernier', 'Toute la tête est traitée ; les longueurs et les pointes traitent généralement plus vite ; protéger le cuir chevelu et les cheveux précédemment traités du surtraitement'],
                                      ['Retouche', 'Appliquer le défrisant UNIQUEMENT sur les nouvelles racines — ne jamais chevaucher les cheveux déjà défrisés', 'Le chevauchement sur les cheveux déjà défrisés provoque un surtraitement extrême et de la casse ; utiliser une base protectrice sur le cuir chevelu ; utiliser une barrière pour séparer les nouvelles racines des cheveux traités'],
                                  ]
                              },
                              {
                                  type: 'numbered', items: [
                                      'CONSULTATION : Évaluer l\'historique chimique ; déterminer le motif de boucle et la résistance ; vérifier l\'absence d\'abrasions, de plaies ou d\'irritations sur le cuir chevelu',
                                      'PRÉPARATION DU CLIENT : Laver avec un shampoing doux ; draper correctement',
                                      'APPLICATION DE LA BASE : Appliquer une crème protectrice sur le cuir chevelu, la ligne de croissance, les oreilles et le cou pour protéger la peau du défrisant très alcalin',
                                      'SECTIONNER LES CHEVEUX : Diviser en 4 sections',
                                      'APPLIQUER LE DÉFRISANT : Utiliser des gants et un bol avec une brosse ; appliquer rapidement et méthodiquement ; lisser doucement — NE PAS frotter vigoureusement',
                                      'LISSER ET TRAITER : Utiliser le dos du peigne ou les doigts pour lisser doucement les cheveux ; surveiller le temps de traitement',
                                      'EFFECTUER UN TEST SUR MÈCHE : Soulever périodiquement une petite section ; si les cheveux sont raides et lisses et ne reviennent pas, ils sont prêts à rincer',
                                      'RINCER ABONDAMMENT : Rincer à l\'eau tiède jusqu\'à ce que tout le défrisant soit éliminé ; tout défrisant restant continue d\'agir',
                                      'SHAMPOING NEUTRALISANT : Utiliser un shampoing spécifiquement formulé pour ramener le pH de alcalin à acide ; laver 2–3 fois ; le shampoing doit passer du rose au clair lorsque tous les résidus de défrisant sont éliminés',
                                      'REVITALISATION : Appliquer un revitalisant hydratant profond ; les cheveux ont été sévèrement traités chimiquement et ont besoin de restauration d\'hydratation',
                                  ]
                              },
                              { type: 'keyTerm', term: 'Shampoing neutralisant', definition: 'Un shampoing à pH acide spécifiquement formulé pour contrer l\'alcalinité des défrisants, ramener les cheveux à un pH sain et confirmer l\'élimination complète du défrisant.' },
                          ],
                      },
                      {
                          id: 's10-3',
                          title: '10.3 Contre-indications et protocoles de sécurité des défrisants',
                          content: [
                              {
                                  type: 'table', headers: ['Contre-indication', 'Raison'], rows: [
                                      ['Coupures, abrasions ou plaies sur le cuir chevelu', 'Le défrisant pénétrera à travers la peau lésée, provoquant de graves brûlures chimiques et une absorption systémique potentielle'],
                                      ['Inflammation du cuir chevelu ou dermatite active', 'Barrière cutanée gravement compromise — absorption chimique et brûlures très probables'],
                                      ['Service chimique incompatible antérieur', 'Provoquera une casse extrême'],
                                      ['Cheveux faibles ou sévèrement abîmés', 'Les cheveux ne peuvent pas supporter le stress chimique — casse significative ou dissolution totale possible'],
                                      ['Traitement protéiné intense récent', 'Peut créer une barrière ou une réaction imprévisible — effectuer un test sur mèche'],
                                      ['Cliente enceinte ou allaitante', 'Certaines clientes préfèrent éviter les services chimiques ; respecter la décision de la cliente ; proposer des options alternatives'],
                                  ]
                              },
                              { type: 'paragraph', text: 'Urgence : Brûlure chimique du cuir chevelu par un défrisant :' },
                              {
                                  type: 'bullets', items: [
                                      'Rincer immédiatement et continuellement à l\'eau fraîche pendant 15–20 minutes',
                                      'NE PAS frotter la zone affectée',
                                      'Laver doucement avec un shampoing neutralisant',
                                      'Consulter un médecin si la brûlure est sévère, avec cloques ou couvre une grande surface',
                                      'Documenter l\'incident',
                                  ]
                              },
                          ],
                      },
                  ],
                  practiceQuestions: [
                      { id: 'q10-1', question: 'La lanthionisation décrit le processus chimique dans lequel :', options: ['Les liaisons disulfure sont rompues par l\'ATG et reformées par le neutralisant dans les permanentes', 'Les défrisants à l\'hydroxyde rompent de manière permanente les liaisons disulfure, créant des liaisons lanthionine irréversibles', 'La mélanine des cheveux est définitivement éliminée par les agents décolorants', 'Les liaisons hydrogène sont rompues par la chaleur lors du lissage au fer'], correctIndex: 1, explanation: 'La lanthionisation est le processus permanent et irréversible causé par les défrisants à l\'hydroxyde. Les liaisons disulfure sont rompues et remplacées par des liaisons lanthionine simples — cela ne peut PAS être neutralisé ou inversé.' },
                      { id: 'q10-2', question: 'Lors d\'un service de retouche de défrisant, le produit doit être appliqué :', options: ['Sur toute la tête, des racines aux pointes', 'Uniquement sur les nouvelles racines, sans jamais chevaucher les cheveux déjà défrisés', 'En commençant par les pointes et en remontant vers les racines', 'Uniquement sur la zone du cuir chevelu, pas sur la tige du cheveu'], correctIndex: 1, explanation: 'Le chevauchement sur les cheveux déjà défrisés est la cause la plus fréquente de casse liée aux défrisants. Les cheveux déjà défrisés sont déjà lanthionisés — un hydroxyde supplémentaire provoque un ramollissement excessif et la casse.' },
                      { id: 'q10-3', question: 'L\'incompatibilité CRITIQUE dans les services chimiques capillaires est :', options: ['Utiliser un shampoing hydratant avant une permanente', 'Appliquer un produit à base de thio sur des cheveux précédemment traités avec un défrisant à l\'hydroxyde', 'Utiliser un traitement protéiné avant un service de coloration', 'Appliquer un revitalisant profond avant une coupe'], correctIndex: 1, explanation: 'La chimie thio et la chimie hydroxyde sont fondamentalement incompatibles. Appliquer du thio sur des cheveux qui ont été défrisés à l\'hydroxyde provoque un ramollissement extrême et une casse catastrophique — c\'est l\'une des erreurs les plus dangereuses en coiffure chimique.' },
                      { id: 'q10-4', question: 'Pourquoi un coiffeur ne devrait-il PAS laver les cheveux d\'un client 24–48 heures avant un service de défrisant à l\'hydroxyde de sodium ?', options: ['Pour s\'assurer que les cheveux sont dans un état sale et gras pour une meilleure adhérence du produit', 'Le lavage enlève la barrière d\'huile protectrice naturelle du cuir chevelu, augmentant le risque d\'irritation et de brûlures', 'Le lavage fait gonfler les cheveux, réduisant l\'efficacité du défrisant', 'Le lavage diluerait la chimie du défrisant'], correctIndex: 1, explanation: 'Le sébum naturel du cuir chevelu fournit une petite barrière protectrice contre le défrisant très alcalin. Enlever cette barrière en lavant juste avant le service augmente le risque d\'irritation du cuir chevelu et de brûlures chimiques.' },
                      { id: 'q10-5', question: 'Un shampoing neutralisant utilisé après un service de défrisant est conçu pour :', options: ['Ajouter des protéines pour reconstruire le cortex endommagé', 'Ramener le pH des cheveux dans la plage acide et confirmer l\'élimination complète du défrisant', 'Apporter de l\'hydratation aux cheveux chimiquement secs', 'Activer le défrisant restant pour le traitement final'], correctIndex: 1, explanation: 'Le shampoing neutralisant contient des agents abaissant le pH pour contrer le défrisant très alcalin et un indicateur de couleur pour montrer quand tous les résidus de défrisant sont complètement éliminés.' },
                  ],
              },

              // ─── CHAPITRE 11 ───────────────────────────────────────────────────────
              {
                  id: 'ch-11',
                  number: 11,
                  title: 'Coloration et décoloration des cheveux',
                  subtitle: 'S1740 & S1746 — Théorie de la couleur, mélanine, types de produits, formulation, correction et application',
                  isFree: false,
                  estimatedMinutes: 45,
                  sections: [
                      {
                          id: 's11-1',
                          title: '11.1 Théorie de la couleur et système de niveaux',
                          content: [
                              { type: 'keyTerm', term: 'Niveau', definition: 'Le degré de clarté ou d\'obscurité d\'une couleur de cheveux, sur une échelle de 1 (noir) à 10 (blond le plus clair) — ou jusqu\'à 12 dans certains systèmes. Le niveau décrit UNIQUEMENT la dimension clarté/obscurité, PAS la tonalité.' },
                              { type: 'keyTerm', term: 'Tonalité', definition: 'La couleur visible ou la chaleur/froideur des cheveux — décrite comme chaude (doré, rouge, cuivré, orange), froide (cendré, à base de bleu, nacré) ou neutre. La tonalité est distincte du niveau.' },
                              {
                                  type: 'table', headers: ['Niveau', 'Nom de la couleur naturelle', 'Pigment sous-jacent', 'Tonalité prédominante lors de la décoloration'], rows: [
                                      ['1', 'Noir', 'Rouge-orange', 'Rouge-orange très chaud'],
                                      ['2', 'Brun très foncé', 'Rouge-orange', 'Rouge-orange'],
                                      ['3', 'Brun foncé', 'Rouge-orange à orange', 'Orange-rouge'],
                                      ['4', 'Brun moyen', 'Orange', 'Orange'],
                                      ['5', 'Brun clair', 'Orange-doré', 'Orange-doré'],
                                      ['6', 'Blond foncé', 'Doré-orange', 'Doré-orange'],
                                      ['7', 'Blond moyen', 'Doré', 'Doré-jaune'],
                                      ['8', 'Blond clair', 'Jaune-doré', 'Jaune'],
                                      ['9', 'Blond très clair', 'Jaune pâle', 'Jaune pâle'],
                                      ['10', 'Blond le plus clair', 'Jaune pâle', 'Jaune très pâle'],
                                  ]
                              },
                              { type: 'paragraph', text: 'Le tableau des pigments sous-jacents est essentiel pour la coloration corrective — il montre les pigments chauds dominants qui émergent lorsque les cheveux sont éclaircis. Pour neutraliser ces tonalités chaudes, le coiffeur utilise un tonique dans la tonalité COMPLÉMENTAIRE.' },
                              {
                                  type: 'table', headers: ['Tonalité chaude à neutraliser', 'Tonique complémentaire à utiliser'], rows: [
                                      ['Orange / cuivré', 'Tonique à base de bleu'],
                                      ['Doré / jaune-orange', 'Tonique à base de violet'],
                                      ['Jaune', 'Tonique violet ou bleu-violet'],
                                      ['Rouge', 'Tonique à base de vert ou cendré'],
                                  ]
                              },
                          ],
                      },
                      {
                          id: 's11-2',
                          title: '11.2 Mélanine naturelle et chimie de la couleur capillaire',
                          content: [
                              {
                                  type: 'table', headers: ['Type de mélanine', 'Couleur produite', 'Emplacement', 'Effet de l\'âge/de la génétique'], rows: [
                                      ['Eumélanine', 'Noir à brun — granules gros et denses ; absorbe la plupart de la lumière', 'Cortex', 'Diminue avec l\'âge ; premier à être affecté par le grisonnement'],
                                      ['Phéomélanine', 'Rouge à jaune-doré — granules plus petits et diffus ; réfléchit les longueurs d\'onde de lumière chaude', 'Cortex', 'Persiste plus longtemps que l\'eumélanine ; responsable du pigment sous-jacent chaud dans les cheveux bruns et noirs'],
                                      ['Cheveux blancs', 'Pas de mélanine — couleur purement structurelle', 'Cortex dépourvu de pigment', 'Causé par l\'arrêt de l\'activité des mélanocytes dans le bulbe pileux'],
                                  ]
                              },
                              { type: 'paragraph', text: 'La coloration des cheveux blancs/gris nécessite une attention particulière :' },
                              {
                                  type: 'bullets', items: [
                                      'Les cheveux blancs n\'ont pas de pigment sous-jacent — ils refléteront la tonalité de couleur appliquée exactement, souvent plus intensément',
                                      'Les cheveux blancs résistants peuvent nécessiter un pré-ramollissement pour permettre la pénétration',
                                      'Les cheveux gris peuvent produire un effet de sel et poivre lorsqu\'ils sont colorés avec des nuances plus claires',
                                      'Les formules de couverture doivent être choisies avec soin : une formule trop chaude semblera orange-dorée sur les cheveux blancs ; trop froide peut sembler cendrée ou terne',
                                  ]
                              },
                          ],
                      },
                      {
                          id: 's11-3',
                          title: '11.3 Types de couleur capillaire — Profondeur, durabilité et chimie',
                          content: [
                              {
                                  type: 'table', headers: ['Type', 'Comment ça marche', 'Durabilité', 'Capacité d\'éclaircissement', 'Nécessite un oxydant ?', 'Meilleure utilisation'], rows: [
                                      ['Couleur temporaire', 'Grosses molécules de colorant préformées enrobent l\'extérieur de la cuticule', '1–3 shampoings', 'Aucune — dépôt uniquement', 'Non', 'Couvrir temporairement les gris ; essai de couleur ; ajouter une teinte/un brillant ; coiffage événementiel'],
                                      ['Couleur semi-permanente', 'Petites molécules pénètrent la cuticule dans le cortex supérieur ; pas d\'oxydant requis', '4–12 shampoings', 'Aucune — dépôt uniquement', 'Non', 'Améliorer la couleur naturelle ; couvrir jusqu\'à 50 % de gris ; rafraîchir une couleur délavée ; débutants'],
                                      ['Couleur demi-permanente', 'Molécules légèrement plus grosses ; utilise un oxydant de très faible volume ; pénètre le cortex', '12–26 shampoings', 'Aucune ou changement tonal minimal seulement — pas d\'éclaircissement', 'Oui — 5–10 vol.', 'Mélange de gris ; rafraîchissement de la couleur ; tonification après mèches ; glaçage'],
                                      ['Couleur oxydative permanente', 'Petites molécules précurseurs de colorant pénètrent profondément dans le cortex ; l\'oxydant les transforme en molécules de couleur plus grosses piégées en permanence ; éclaircit également la mélanine naturelle', 'Jusqu\'à coupe ou repousse', 'Jusqu\'à 1–3 niveaux d\'éclaircissement', 'Oui — 10, 20, 30 ou 40 vol.', 'Couverture totale des gris ; changements de niveau ; tonification ; la plupart des services de couleur'],
                                      ['Décolorant', 'Les agents oxydants dissolvent les granules de mélanine dans le cortex — enlève la couleur sans dépôt', 'Permanent', 'Éclaircissement uniquement — jusqu\'à 7–9 niveaux', 'Oui — 10–40 vol.', 'Pré-éclaircissement avant tonification ; mèches ; balayage ; services blonds très clairs'],
                                      ['Couleur à haut pouvoir éclaircissant', 'Couleur permanente avec oxydant extra-fort pour un éclaircissement maximal + dépôt de tonalité en une étape', 'Permanent', 'Jusqu\'à 4–5 niveaux d\'éclaircissement', 'Oui — 40 vol. uniquement', 'Éclaircir un blond foncé à très clair en une étape ; doit commencer au niveau 6 ou plus clair'],
                                  ]
                              },
                          ],
                      },
                      {
                          id: 's11-4',
                          title: '11.4 Oxydant (peroxyde d\'hydrogène) — Volumes et effets',
                          content: [
                              {
                                  type: 'table', headers: ['Volume', '% de peroxyde d\'hydrogène', 'Effet d\'éclaircissement', 'Meilleure utilisation'], rows: [
                                      ['5 vol.', '1,5 %', 'Pas d\'éclaircissement — dépôt et brillance uniquement', 'Tonification des cheveux éclaircis ; couleur demi-permanente ; glaçage'],
                                      ['10 vol.', '3 %', 'Éclaircissement minimal', 'Assombrir les cheveux ; couverture totale des cheveux blancs sur le niveau cible ; assombrir une couleur existante'],
                                      ['20 vol.', '6 %', '1–2 niveaux d\'éclaircissement', 'Éclaircissement standard pour couleur permanente ; couverture totale des gris ; la plupart des changements de couleur restant dans des niveaux proches'],
                                      ['30 vol.', '9 %', '2–3 niveaux d\'éclaircissement', 'Éclaircissement modéré ; passage du brun foncé au brun clair, ou du brun clair vers le blond'],
                                      ['40 vol.', '12 %', '3–4 niveaux d\'éclaircissement', 'Éclaircissement maximal avec couleur permanente ; utiliser avec une couleur à haut pouvoir éclaircissant ou un décolorant pour un éclaircissement significatif ; utiliser avec prudence — risque de chaleur et de dommages au cuir chevelu'],
                                  ]
                              },
                              {
                                  type: 'infoBox', title: 'Règles de sécurité de l\'oxydant', items: [
                                      'N\'utilisez jamais d\'oxydant 40 vol. sur le cuir chevelu plus de 30 minutes — risque de dommages thermiques et d\'irritation',
                                      'N\'utilisez jamais d\'oxydant 40 vol. avec un décolorant directement sur le cuir chevelu — utilisez seulement 20–30 vol. pour l\'éclaircissement sur le cuir chevelu',
                                      'Toujours mélanger la couleur immédiatement avant utilisation — l\'oxydant commence à oxyder une fois mélangé',
                                      'Ne jamais conserver de couleur mélangée — jeter tout mélange non utilisé',
                                      'Un volume plus élevé = plus de chaleur générée = plus de potentiel de dommages et de résultats inégaux',
                                  ]
                              },
                          ],
                      },
                      {
                          id: 's11-5',
                          title: '11.5 Formulation et loi de la couleur',
                          content: [
                              { type: 'keyTerm', term: 'Loi de la couleur', definition: 'Les trois couleurs primaires en théorie des pigments — rouge, jaune et bleu — se combinent pour produire toutes les autres couleurs. Mélanger des couleurs complémentaires produit du brun ou du gris. Ce principe régit toutes les décisions de formulation de couleur.' },
                              {
                                  type: 'table', headers: ['Primaire', '+', 'Primaire', '=', 'Secondaire'], rows: [
                                      ['Rouge', '+', 'Jaune', '=', 'Orange'],
                                      ['Jaune', '+', 'Bleu', '=', 'Vert'],
                                      ['Rouge', '+', 'Bleu', '=', 'Violet'],
                                  ]
                              },
                              { type: 'paragraph', text: 'Le cercle chromatique montre les paires complémentaires — les couleurs opposées — qui se neutralisent lorsqu\'elles sont mélangées :' },
                              {
                                  type: 'bullets', items: [
                                      'Rouge ↔ Vert',
                                      'Orange ↔ Bleu',
                                      'Jaune ↔ Violet / Pourpre',
                                  ]
                              },
                              { type: 'paragraph', text: 'Principes de formulation pour la couleur permanente :' },
                              {
                                  type: 'bullets', items: [
                                      'Pour foncer : utiliser le niveau cible avec un volume d\'oxydant approprié',
                                      'Pour éclaircir jusqu\'à 2 niveaux : utiliser un oxydant 20–30 vol. avec la nuance du niveau cible',
                                      'Pour éclaircir plus de 2 niveaux à partir de brun foncé : pré-éclaircir d\'abord avec un décolorant, puis tonifier',
                                      'Pour couvrir les cheveux blancs résistants : ajouter une nuance de base chaude à la formule',
                                      'Pour obtenir un résultat plus froid et cendré : choisir une tonalité froide/cendrée ; soyez conscient que le pigment sous-jacent chaud peut se manifester — un pré-éclaircissement peut être nécessaire',
                                  ]
                              },
                              {
                                  type: 'table', headers: ['Mathématique de la couleur', 'Exemple de formule'], rows: [
                                      ['Éclaircir de 2 niveaux (niveau 6 à 8)', 'Couleur niveau 8 + oxydant 30 vol.'],
                                      ['Couverture totale des gris au niveau 6', 'Couleur niveau 6 + oxydant 20 vol.'],
                                      ['Tonification après décoloration à jaune pâle', 'Tonique violet/nacré + oxydant 10 vol.'],
                                      ['Correction d\'un cuivré orange au niveau 7', 'Tonique cendré bleu + oxydant 10–20 vol. OU nuance demi-permanente à base de bleu'],
                                  ]
                              },
                          ],
                      },
                      {
                          id: 's11-6',
                          title: '11.6 Mèches, balayage et techniques',
                          content: [
                              {
                                  type: 'table', headers: ['Technique', 'Méthode', 'Résultat', 'Profil client'], rows: [
                                      ['Mèches au papier d\'aluminium', 'Fines sections de cheveux sélectionnées par tissage ; placées sur papier ; application du décolorant ; papier plié pour traiter', 'Éclaircissement précis et contrôlé ; répartition uniforme ; contraste élevé ou fondu', 'Clientes souhaitant une couverture uniforme ; cheveux fins nécessitant un placement contrôlé'],
                                      ['Balayage', 'Application à main levée du décolorant ou de la couleur sur la surface des sous-sections ; sans papier ; traitement à l\'air libre', 'Gradation douce, naturelle, effet soleil ; concentration plus élevée sur les pointes et le cadre du visage ; plus faible aux racines', 'Look naturel, nécessitant peu d\'entretien, effet racines ; cheveux mi-longs à épais'],
                                      ['Babylights', 'Sections très fines et fines réparties sur toute la tête — imite les reflets fins naturels de l\'enfance', 'Effet blond très fin, naturel, multidimensionnel partout', 'Blondes souhaitant une dimension naturelle ; cheveux fins'],
                                      ['Ombre', 'Transition graduelle des racines foncées aux pointes plus claires', 'Dégradé contrasté foncé à clair des racines aux pointes', 'Look dramatique ; faible entretien des racines'],
                                      ['Sombre', 'Même concept que l\'ombre mais avec un dégradé plus progressif et subtil — contraste minimal', 'Transition douce, fondue, d\'aspect naturel', 'Peu d\'entretien ; look naturel avec intérêt'],
                                      ['Fondu de couleurs', 'Plusieurs nuances fondues et mélangées le long de la chevelure en un dégradé homogène', 'Look homogène, éditorial, multi-tonal sans lignes dures', 'Couleur mode ; clientes créatives ; éditorial et podium'],
                                  ]
                              },
                              { type: 'paragraph', text: 'Sécurité de la décoloration sur le cuir chevelu vs hors cuir chevelu :' },
                              {
                                  type: 'bullets', items: [
                                      'Sur le cuir chevelu : utiliser un oxydant 20–30 vol. maximum avec le décolorant ; la chaleur du cuir chevelu accélère le traitement ; surveiller attentivement l\'irritation',
                                      'Hors cuir chevelu : peut utiliser jusqu\'à 40 vol. d\'oxydant car il n\'y a pas de contact avec le cuir chevelu ; mais 30 vol. est recommandé pour les cheveux fins ou sensibilisés',
                                      'Ne jamais chevaucher le décolorant sur des cheveux déjà éclaircis — la sur-décoloration provoque la casse et la dissolution de la tige du cheveu',
                                  ]
                              },
                          ],
                      },
                  ],
                  practiceQuestions: [
                      { id: 'q11-1', question: 'Sur l\'échelle des niveaux, quel nombre représente les cheveux les plus foncés ?', options: ['10', '7', '1', '5'], correctIndex: 2, explanation: 'Le niveau 1 est le plus foncé. Le niveau 10 est le plus clair. Le système de niveaux mesure uniquement la clarté/l\'obscurité, pas la tonalité.' },
                      { id: 'q11-2', question: 'La couleur complémentaire utilisée pour neutraliser les tons orange/cuivrés est :', options: ['Rouge', 'Bleu', 'Jaune', 'Violet'], correctIndex: 1, explanation: 'L\'orange et le bleu sont complémentaires. Les toniques cendrés à base de bleu neutralisent les tons cuivrés en annulant le pigment orange chaud.' },
                      { id: 'q11-3', question: 'Quel volume d\'oxydant produit environ 2 niveaux d\'éclaircissement lorsqu\'il est utilisé avec une couleur oxydative permanente ?', options: ['5 vol.', '10 vol.', '20 vol.', '30 vol.'], correctIndex: 3, explanation: '20 vol. fournit 1–2 niveaux d\'éclaircissement. 30 vol. fournit 2–3 niveaux d\'éclaircissement, ce qui en fait la bonne réponse pour environ 2 niveaux d\'éclaircissement dans un service de couleur.' },
                      { id: 'q11-4', question: 'Une cliente a les cheveux naturellement brun foncé (niveau 3) et veut obtenir un blond très clair (niveau 9). La bonne approche est :', options: ['Appliquer une couleur permanente de niveau 9 avec oxydant 40 vol. directement', 'Pré-éclaircir avec un décolorant pour atteindre le niveau requis d\'abord, puis appliquer un tonique', 'Appliquer une couleur à haut pouvoir éclaircissant à 20 vol. en une étape', 'Appliquer une nuance demi-permanente de niveau 9'], correctIndex: 1, explanation: 'Un éclaircissement de 6 niveaux ne peut pas être réalisé avec une couleur permanente — l\'éclaircissement maximum est généralement de 3–4 niveaux. La bonne approche est un pré-éclaircissement au décolorant jusqu\'au jaune pâle cible, puis une tonification.' },
                      { id: 'q11-5', question: 'Le balayage diffère des mèches traditionnelles au papier d\'aluminium en ce que :', options: ['Il utilise des formules de décolorant plus fortes pour des résultats plus rapides', 'La couleur est peinte à main levée sur la surface des sections sans papier, créant un effet doux, gradué, soleil', 'Il nécessite un oxydant de volume supérieur dans tous les cas', 'Il doit être fait uniquement sur cheveux secs'], correctIndex: 1, explanation: 'Le balayage est une technique à main levée — la couleur ou le décolorant est peint sur les zones de surface sélectionnées sans papier. Le traitement à l\'air libre crée un résultat plus doux, plus gradué et naturel par rapport au résultat plus précis et uniforme des papiers.' },
                      { id: 'q11-6', question: 'L\'eumélanine est responsable de quelles couleurs de cheveux ?', options: ['Uniquement les tons rouges et blonds dorés', 'Couleurs de cheveux du noir au brun', 'Cheveux blancs', 'Tons cuivrés et blond fraise'], correctIndex: 1, explanation: 'L\'eumélanine produit les couleurs de cheveux du noir au brun. La phéomélanine produit les tons rouges à jaune-doré. Les deux types se combinent dans des proportions variables pour produire toutes les couleurs de cheveux naturelles.' },
                      { id: 'q11-7', question: 'Lors de la formulation d\'une couleur permanente pour couvrir des cheveux blancs résistants, un coiffeur devrait :', options: ['Utiliser un niveau plus clair que la cible pour compenser le blanc', 'Ajouter une base chaude ou mélanger une nuance chaude complémentaire dans la formule pour améliorer la couverture', 'Utiliser uniquement de l\'oxydant 10 vol. pour un dépôt maximal', 'Éviter d\'utiliser une tonalité — utiliser uniquement des nuances naturelles/neutres'], correctIndex: 1, explanation: 'Les cheveux blancs résistants ont souvent une cuticule étroitement fermée et aucun pigment sous-jacent. L\'ajout d\'une nuance de base chaude aide la couleur à pénétrer et fournit un résultat de couverture plus uniforme et complet.' },
                      { id: 'q11-8', question: 'Le volume d\'oxydant maximum recommandé pour l\'application de décolorant sur le cuir chevelu est :', options: ['10 vol.', '20–30 vol.', '40 vol.', '50 vol.'], correctIndex: 1, explanation: 'Pour la décoloration sur le cuir chevelu, un oxydant de 20–30 vol. maximum est recommandé. La chaleur naturelle du cuir chevelu accélère le traitement. 40 vol. sur le cuir chevelu crée un risque important de brûlures et de dommages.' },
                  ],
              },

              // ─── CHAPITRE 12 ───────────────────────────────────────────────────────
              {
                  id: 'ch-12',
                  number: 12,
                  title: 'Extensions capillaires',
                  subtitle: 'S1746 — Types d\'extensions, méthodes d\'application, entretien et retrait',
                  isFree: false,
                  estimatedMinutes: 25,
                  sections: [
                      {
                          id: 's12-1',
                          title: '12.1 Types de cheveux pour extensions et sélection',
                          content: [
                              {
                                  type: 'table', headers: ['Type de cheveux', 'Caractéristiques', 'Avantages', 'Limitations'], rows: [
                                      ['Cheveux humains (Remy)', 'Toutes les cuticules alignées dans la même direction — évite les nœuds ; qualité supérieure', 'Peuvent être colorés, permanentés, coiffés à la chaleur exactement comme les cheveux naturels ; aspect et toucher les plus naturels', 'Les plus chers ; nécessitent des soins appropriés pour maintenir la longévité ; peuvent être endommagés par un surtraitement'],
                                      ['Cheveux humains (non Remy)', 'Cuticules de directions mélangées ; souvent traités chimiquement avec de la silicone pour lisser', 'Moins chers que Remy ; large disponibilité', 'S\'emmêlent plus facilement une fois le revêtement de silicone parti ; ne peuvent pas toujours être colorés ; longévité limitée'],
                                      ['Cheveux synthétiques', 'Fibres artificielles — pas de protéine capillaire réelle', 'Les plus abordables ; tiennent bien le style ; large gamme de couleurs ; aucun service de couleur ou permanente possible', 'Ne peuvent pas être colorés ou permanentés ; tolérance à la chaleur plus faible ; aspect moins naturel ; ne peuvent pas être coiffés à la chaleur au-dessus de 120 °C'],
                                      ['Synthétique résistant à la chaleur', 'Fibre synthétique spécialement conçue pour tolérer un certain coiffage à la chaleur', 'Peut être coiffé avec des outils thermiques aux températures prescrites ; moins cher que les cheveux humains', 'Ne peut toujours pas être coloré ou traité chimiquement ; tolérance à la chaleur limitée par rapport aux cheveux humains'],
                                  ]
                              },
                              { type: 'paragraph', text: 'Correspondance de longueur et de couleur des extensions :' },
                              {
                                  type: 'bullets', items: [
                                      'Faire correspondre la couleur de l\'extension à la couleur des longueurs ou des pointes de la cliente pour le mélange le plus naturel',
                                      'Pour les effets de mélange, utiliser deux nuances qui complètent la variation de couleur naturelle de la cliente',
                                      'Tester une seule extension pour la correspondance de couleur avant l\'application complète',
                                  ]
                              },
                          ],
                      },
                      {
                          id: 's12-2',
                          title: '12.2 Comparaison des méthodes d\'application',
                          content: [
                              {
                                  type: 'table', headers: ['Méthode', 'Comment appliqué', 'Durée', 'Entretien / Retrait', 'Adaptation au type de cheveux', 'Précaution clé'], rows: [
                                      ['Extensions à clips', 'Mèche de cheveux avec des clips sensibles à la pression attachés ; la cliente ou le coiffeur les met et les enlève quotidiennement', '1 jour à 1 semaine', 'Aucun entretien en salon ; retirées à la maison quotidiennement ou selon les souhaits', 'Tous types de cheveux ; méthode la plus douce', 'Ne pas dormir avec — provoque nœuds et traction'],
                                      ['Extensions à bandes adhésives', 'Fines mèches de cheveux avec des languettes adhésives de qualité médicale prises en sandwich de chaque côté d\'une fine section de cheveux naturels', '6–8 semaines avant retouche', 'Retouche toutes les 6–8 semaines ; retrait avec une solution dissolvante d\'adhésif ; risque de dommages si retirées incorrectement', 'Cheveux fins à moyens ; repose très à plat pour un résultat naturel', 'Ne jamais appliquer de produits à base d\'huile près des bandes — cela dissoudra l\'adhésif prématurément'],
                                      ['Liaison kératine (fusion) — K-tip', 'Mèches individuelles avec une liaison en kératine à la racine ; fixées à de petites sections de cheveux naturels à l\'aide d\'un outil de thermolisation', '3–5 mois avec soins appropriés', 'Retrait professionnel uniquement ; retrait avec une solution dissolvante ou chaleur ; risque élevé de dommages si mal fait', 'Cheveux moyens à épais ; pas pour cheveux fins ou fragiles', 'La chaleur des fers à lisser ou des outils de coiffage près de la liaison peut faire fondre et migrer la kératine'],
                                      ['Micro-anneaux / micro-perles (fusion à froid)', 'Mèche d\'extension individuelle fixée à une petite section de cheveux naturels à l\'aide d\'un minuscule anneau métallique serti avec une pince — sans adhésif ni chaleur', '2–3 mois avant retouche', 'Retouche professionnelle ; retrait en desserrant l\'anneau avec une pince ; dommages minimes si fait correctement', 'Cheveux moyens à épais ; pas pour cheveux fins', 'Éviter d\'appliquer des produits coiffants directement sur les anneaux — peut provoquer de la corrosion et des nœuds'],
                                      ['Couture / tissage', 'Cheveux naturels tressés en cornrows ; mèches d\'extension cousues sur les tresses avec une aiguille courbe et du fil', '6–8 semaines', 'Retrait en coupant le fil ; cornrows retirées ; professionnel uniquement', 'Tous types de cheveux ; particulièrement courant pour les cheveux de texture afro', 'Les cornrows ne doivent pas être trop serrés — risque d\'alopécie de traction ; le cuir chevelu doit être nettoyé régulièrement à travers le tissage'],
                                      ['Perruques et toppers', 'Perruque complète ou topper sur un bonnet', 'Variable — porté et retiré', 'Aucune installation requise ; laver et coiffer séparément', 'Tous types de cheveux ; idéal pour la perte de cheveux médicale ; zéro traction sur les cheveux naturels', 'Fixer correctement ; utiliser un bande de maintien pour le confort ; conditionner les cheveux naturels en dessous régulièrement'],
                                  ]
                              },
                          ],
                      },
                      {
                          id: 's12-3',
                          title: '12.3 Entretien des extensions et contre-indications',
                          content: [
                              { type: 'paragraph', text: 'Instructions d\'entretien à domicile pour les clientes avec extensions :' },
                              {
                                  type: 'bullets', items: [
                                      'Brosser doucement des pointes vers le haut avec une brosse à boucle ou une brosse adaptée aux extensions pour éviter de tirer sur les liaisons',
                                      'Laver régulièrement avec un shampoing sans sulfate — éviter de laver moins d\'une fois par semaine pour prévenir l\'accumulation et les problèmes de cuir chevelu',
                                      'Appliquer le revitalisant uniquement sur les longueurs et les pointes — garder le revitalisant et les produits huileux loin des zones de liaison',
                                      'Dormir avec les cheveux en tresse lâche ou queue de cheval pour minimiser les nœuds',
                                      'Éviter le contact du chlore et de l\'eau salée avec les liaisons ; porter un bonnet de bain pour nager',
                                  ]
                              },
                              {
                                  type: 'table', headers: ['Contre-indication', 'Raison'], rows: [
                                      ['Infections ou irritations actives du cuir chevelu', 'Risque d\'aggravation de l\'infection ; propagation du produit ; inconfort de la cliente sous les extensions'],
                                      ['Alopécie de traction sévère ou recul de la ligne de croissance', 'Toute tension supplémentaire aggravera la perte de cheveux'],
                                      ['Cheveux très fins ou fragiles', 'Le poids des extensions provoque la casse ; les liaisons peuvent arracher les cheveux fins'],
                                      ['Cheveux très poreux ou surtraités', 'Les cheveux ne peuvent pas supporter le poids des extensions sans casser au point de fixation'],
                                      ['Attentes irréalistes', 'Les extensions ne peuvent pas créer une longueur qui dépasse un mélange naturel réaliste ; définir clairement les attentes'],
                                  ]
                              },
                          ],
                      },
                  ],
                  practiceQuestions: [
                      { id: 'q12-1', question: 'Les extensions en cheveux humains Remy se distinguent des non-Remy par :', options: ['Être faites de fibres synthétiques qui imitent étroitement les cheveux humains', 'Avoir toutes les cuticules alignées dans la même direction — évitant les nœuds', 'Être le type d\'extension le moins cher disponible', 'Ne nécessiter aucun entretien après application'], correctIndex: 1, explanation: 'Les cheveux Remy ont toutes les cuticules alignées de la racine à la pointe, ce qui évite les nœuds et l\'emmêlement. Les cheveux non-Remy ont des directions de cuticules mélangées et dépendent souvent d\'un revêtement de silicone pour lisser initialement.' },
                      { id: 'q12-2', question: 'Quelle méthode d\'extension ne nécessite NI chaleur NI adhésif pour l\'application ?', options: ['Liaison kératine (fusion) K-tip', 'Extensions à bandes adhésives', 'Micro-anneaux / micro-perles (fusion à froid)', 'Couture / tissage'], correctIndex: 2, explanation: 'Les micro-anneaux utilisent un petit anneau métallique serti avec une pince pour fixer l\'extension aux cheveux naturels — ni chaleur ni adhésif ne sont impliqués, c\'est pourquoi on les appelle "fusion à froid".' },
                      { id: 'q12-3', question: 'Pourquoi faut-il éviter les produits à base d\'huile près des liaisons des extensions à bandes adhésives ?', options: ['L\'huile décolore la bande', 'L\'huile décompose la liaison adhésive, provoquant un glissement prématuré et la perte de l\'extension', 'L\'huile fait s\'emmêler les cheveux d\'extension', 'L\'huile provoque une réaction chimique avec les cheveux d\'extension humains'], correctIndex: 1, explanation: 'L\'adhésif de qualité médicale utilisé dans les extensions à bandes est décomposé par les huiles et les produits à base d\'huile. Le contact avec les huiles provoque un desserrage prématuré de la liaison, entraînant le glissement et la perte de l\'extension.' },
                      { id: 'q12-4', question: 'Quelle méthode d\'extension présente le RISQUE le PLUS ÉLEVÉ d\'alopécie de traction si elle est appliquée incorrectement ?', options: ['Extensions à clips', 'Micro-anneaux', 'Tissage avec cornrows serrés', 'Extensions à bandes adhésives'], correctIndex: 2, explanation: 'Le tissage nécessite que les cheveux naturels soient étroitement tressés en cornrows. Si les cornrows sont excessivement serrés, la tension constante provoque une alopécie de traction, particulièrement le long de la ligne de croissance et des tempes.' },
                  ],
              },
          ],
      },

      // =========================================================================
      // PARTIE 5 — PRÉPARATION À L'EXAMEN
      // =========================================================================
      {
          id: 'part-5',
          title: 'Partie 5 : Préparation à l\'examen',
          color: '#922B21',
          description: 'Les chapitres 13 à 15 fournissent un examen blanc chronométré complet de 50 questions, un glossaire complet de 80 termes et des stratégies éprouvées pour passer les tests.',
          chapters: [

              // ─── CHAPITRE 13 ───────────────────────────────────────────────────────
              {
                  id: 'ch-13',
                  number: 13,
                  title: 'Examen blanc complet',
                  subtitle: 'Examen blanc chronométré de 120 questions couvrant les 17 sujets d\'examen officiels',
                  isFree: false,
                  estimatedMinutes: 60,
                  isMockExam: true,
                  sections: [
                      {
                          id: 's13-1',
                          title: '13.1 Instructions pour l\'examen blanc',
                          content: [
                              { type: 'paragraph', text: 'Cet examen blanc contient 50 questions reflétant le format, le niveau de difficulté et la répartition des sujets du véritable examen de certification STO 332A pour coiffeurs.' },
                              {
                                  type: 'infoBox', title: 'Règles de l\'examen blanc — Simulez les conditions réelles de l\'examen', items: [
                                      '⏱️ Limite de temps : 90 minutes pour 50 questions',
                                      '📵 Aucun document de référence — essayez de répondre à toutes les questions de mémoire',
                                      '✏️ Répondez à toutes les questions — il n\'y a pas de pénalité pour les réponses au hasard',
                                      '🎯 Note de passage : 70 %',
                                      '📊 Après avoir terminé : examinez chaque question — surtout celles que vous avez eues fausses ou devinées',
                                      '🔄 Repassez cet examen plusieurs fois — votre score devrait s\'améliorer à chaque tentative',
                                  ]
                              },
                          ],
                      },
                  ],
                  practiceQuestions: [
                      { id: 'q13-1', question: 'En vertu de l\'OHSA, quel droit permet à un travailleur d\'arrêter un travail qu\'il estime dangereux sans crainte de pénalité ?', options: ['Droit de savoir', 'Droit de participer', 'Droit de refuser', 'Droit de démissionner'], correctIndex: 2, explanation: 'Le droit de refuser un travail dangereux est protégé par l\'OHSA. Les travailleurs ne peuvent pas être pénalisés pour l\'exercice de ce droit.' },
                      { id: 'q13-2', question: 'Quel pictogramme WHMIS indique une substance inflammable ?', options: ['Tête de mort', 'Symbole flamme', 'Point d\'exclamation', 'Danger pour la santé'], correctIndex: 1, explanation: 'Le pictogramme flamme est utilisé dans WHMIS 2015 pour les gaz, liquides, solides et aérosols inflammables.' },
                      { id: 'q13-3', question: 'Laquelle des propositions suivantes décrit correctement la stérilisation ?', options: ['Réduit le nombre de pathogènes à un niveau sûr', 'Tue la plupart des pathogènes sur les surfaces non vivantes', 'Détruit tous les microorganismes, y compris les spores bactériennes', 'Élimine les débris visibles des instruments'], correctIndex: 2, explanation: 'La stérilisation est le niveau de décontamination le plus élevé — elle détruit TOUS les microorganismes, y compris les endospores bactériennes les plus résistantes.' },
                      { id: 'q13-4', question: 'La PREMIÈRE et la plus importante étape avant de désinfecter des instruments est :', options: ['Immerger dans une solution d\'ammoniums quaternaires', 'Pré-nettoyer pour enlever toute matière organique visible', 'Rincer à l\'alcool', 'Placer dans une armoire UV'], correctIndex: 1, explanation: 'La matière organique empêche les désinfectants d\'atteindre la surface. Le pré-nettoyage est toujours la première étape — la désinfection est inefficace sur les instruments sales.' },
                      { id: 'q13-5', question: 'Quelle affection capillaire est une CONTRE-INDICATION exigeant que le coiffeur refuse tous les services ?', options: ['Pellicules sèches', 'Séborrhée', 'Teigne du cuir chevelu', 'Pelade'], correctIndex: 2, explanation: 'La teigne du cuir chevelu est une infection fongique hautement contagieuse. Tous les services doivent être refusés, la cliente orientée vers un médecin et tous les instruments désinfectés.' },
                      { id: 'q13-6', question: 'Le cortex est le site de TOUS les changements chimiques permanents car il contient :', options: ['Mélanine et liaisons disulfure dans la structure protéique kératinisée', 'Les écailles de la cuticule qui contrôlent l\'absorption', 'Des poches d\'air et des cellules médullaires', 'La papille dermique et l\'apport sanguin'], correctIndex: 0, explanation: 'Le cortex contient des chaînes de kératine liées par des liaisons disulfure, hydrogène et ioniques, plus la mélanine. Toute la chimie de la couleur permanente, de la permanente et du défrisant cible le cortex.' },
                      { id: 'q13-7', question: 'Les cheveux d\'une cliente s\'étirent de 50 % lorsqu\'ils sont mouillés et reviennent complètement. Cela indique :', options: ['Mauvaise élasticité nécessitant un traitement protéiné', 'Élasticité normale et saine', 'Haute porosité nécessitant un filler pré-service', 'Humidité excessive — les cheveux doivent être séchés avant consultation'], correctIndex: 1, explanation: 'Des cheveux sains s\'étirent d\'environ 50 % de leur longueur lorsqu\'ils sont mouillés et retrouvent leur longueur d\'origine. C\'est la définition d\'une élasticité normale, indiquant un cortex sain.' },
                      { id: 'q13-8', question: 'La phase ANAGÈNE de la croissance des cheveux dure environ :', options: ['2–3 semaines', '3–4 mois', '2–7 ans', '1–2 jours'], correctIndex: 2, explanation: 'La phase anagène dure de 2 à 7 ans. Les cheveux poussent d\'environ 1–1,5 cm par mois. Un anagène plus long = une longueur maximale potentielle plus grande.' },
                      { id: 'q13-9', question: 'Les cheveux et le cuir chevelu sains ont un pH d\'environ :', options: ['7,0 (neutre)', '9,5 (alcalin)', '4,5–5,5 (légèrement acide)', '2,0 (fortement acide)'], correctIndex: 2, explanation: 'Les cheveux et le cuir chevelu sains sont légèrement acides — cela maintient la cuticule lisse et fermée, offre une résistance aux pathogènes et est la base autour de laquelle toutes les formulations de produits sont conçues.' },
                      { id: 'q13-10', question: 'Quel mouvement de massage ouvre et ferme le traitement de massage du cuir chevelu et produit un effet relaxant et apaisant ?', options: ['Pétrissage', 'Tapotement', 'Vibration', 'Effleurage'], correctIndex: 3, explanation: 'L\'effleurage utilise des mouvements légers, lents et glissants. C\'est le mouvement d\'ouverture et de fermeture de chaque massage du cuir chevelu, produisant une relaxation et favorisant le drainage lymphatique.' },
                      { id: 'q13-11', question: 'Une élévation de 90° en coupe de cheveux produit quelle répartition du poids ?', options: ['Poids maximal au périmètre', 'Ligne de poids au-dessus du périmètre', 'Couches uniformément réparties sans concentration au périmètre', 'Poids minimal à la nuque uniquement'], correctIndex: 2, explanation: 'Une élévation de 90° crée une couche ronde — le poids est uniformément réparti. Pas de concentration au périmètre ; pas de graduation.' },
                      { id: 'q13-12', question: 'Un guide mobile est utilisé lors de la coupe :', options: ['De périmètres francs d\'une seule longueur', 'De zones de nuque graduées', 'De couches uniformes sur toute la tête', 'De franges de précision'], correctIndex: 2, explanation: 'Un guide mobile se déplace section par section dans la coupe, transportant l\'information de longueur vers l\'avant — c\'est le type de guide correct pour les coupes en couches.' },
                      { id: 'q13-13', question: 'Le "coup de froid" à la fin du séchage au sèche-cheveux fixe le style en :', options: ['Éliminant rapidement l\'humidité de la tige du cheveu', 'Fermant la cuticule et reformant les liaisons hydrogène dans la nouvelle position', 'Rompant et reformant les liaisons disulfure par des cycles de chaleur et de froid', 'Activant le produit protecteur de chaleur'], correctIndex: 1, explanation: 'L\'air froid ferme la cuticule et reforme les liaisons hydrogène qui ont été rompues par la chaleur — "fixant" la forme créée pendant le séchage.' },
                      { id: 'q13-14', question: 'Quel produit coiffant offre la tenue la plus élevée et une finition mouillée et très brillante ?', options: ['Mousse', 'Sérum de brillance', 'Gel à tenue forte', 'Cire capillaire'], correctIndex: 2, explanation: 'Le gel à tenue forte forme un film polymère rigide autour des cheveux qui offre une tenue maximale et un aspect mouillé et très brillant en séchant.' },
                      { id: 'q13-15', question: 'Dans la chimie de la permanente, la neutralisation reforme les liaisons disulfure en :', options: ['Les rompant avec du thioglycolate d\'ammonium', 'Réduisant l\'alcalinité avec un rinçage acide', 'Oxydant les atomes de soufre ouverts pour reformer des liaisons disulfure dans la nouvelle position', 'Éliminant la lotion avec un shampoing clarifiant'], correctIndex: 2, explanation: 'La neutralisation est une réaction d\'oxydation. Le neutralisant oxyde les atomes de soufre ouverts pour reformer des liaisons disulfure, verrouillées dans la forme du bigoudi.' },
                      { id: 'q13-16', question: 'Les permanentes acides nécessitent quelle étape supplémentaire que les permanentes alcalines n\'ont pas ?', options: ['Un shampoing clarifiant pré-service', 'De la chaleur', 'Une neutralisation au peroxyde d\'hydrogène', 'Un test épicutané 24–48 heures avant le service'], correctIndex: 1, explanation: 'Les permanentes acides utilisent du monothioglycolate de glycéryle, qui nécessite de la chaleur pour être activé et pénétrer efficacement dans le cortex. Les permanentes alcalines traitent à température ambiante sans chaleur ajoutée.' },
                      { id: 'q13-17', question: 'Le chevauchement d\'une retouche de défrisant sur des cheveux déjà défrisés provoque :', options: ['De meilleurs résultats de lissage', 'Un surtraitement sévère et de la casse — l\'erreur la plus courante', 'Un assombrissement temporaire de la section précédemment défrisée', 'Une brillance améliorée sur la longueur précédemment traitée'], correctIndex: 1, explanation: 'Les cheveux déjà défrisés ont déjà subi une lanthionisation. Un défrisant hydroxyde supplémentaire provoque un ramollissement excessif des cheveux déjà traités, entraînant une casse sévère ou une dissolution.' },
                      { id: 'q13-18', question: 'Le niveau 1 sur l\'échelle des niveaux capillaires représente :', options: ['Blond le plus clair', 'Brun moyen', 'Noir le plus foncé', 'Blond foncé'], correctIndex: 2, explanation: 'L\'échelle des niveaux va de 1 à 10. Le niveau 1 est le plus foncé, le niveau 10 le plus clair.' },
                      { id: 'q13-19', question: 'Pour neutraliser un ton orange et cuivré laissé après éclaircissement, le bon choix de tonique est :', options: ['Un tonique doré chaud', 'Un tonique à base de bleu ou cendré bleu', 'Un tonique à base de rouge', 'Un tonique violet'], correctIndex: 1, explanation: 'L\'orange et le bleu sont des couleurs complémentaires — elles se neutralisent mutuellement. Un tonique bleu ou cendré bleu est appliqué après éclaircissement pour annuler le cuivré orange.' },
                      { id: 'q13-20', question: 'Quel volume d\'oxydant fournit l\'éclaircissement standard pour la couleur capillaire permanente ?', options: ['5 vol.', '10 vol.', '20 vol.', '40 vol.'], correctIndex: 2, explanation: '20 vol. est l\'oxydant standard pour la couleur permanente — fournissant 1–2 niveaux d\'éclaircissement. 10 vol. est utilisé pour le dépôt uniquement ou la couverture des gris ; 30 vol. pour 2–3 niveaux ; 40 vol. pour un éclaircissement maximum.' },
                      { id: 'q13-21', question: 'Les extensions en cheveux humains Remy sont préférées aux non-Remy car :', options: ['Elles sont moins chères', 'Toutes les cuticules sont alignées dans la même direction, évitant les nœuds', 'Elles peuvent être colorées uniquement avec une couleur temporaire', 'Elles sont faites de fibres synthétiques résistantes à la chaleur'], correctIndex: 1, explanation: 'Les cheveux Remy ont toutes les cuticules alignées de la racine à la pointe. Les cuticules alignées reposent à plat et ne s\'accrochent pas les unes aux autres, évitant les nœuds, l\'emmêlement et l\'usure prématurée.' },
                      { id: 'q13-22', question: 'Quel type de shampoing doit être utilisé avant un service chimique pour éliminer l\'accumulation de produits ?', options: ['Shampoing hydratant', 'Shampoing clarifiant', 'Shampoing sans danger pour la couleur', 'Shampoing pour bébé'], correctIndex: 1, explanation: 'Le shampoing clarifiant élimine les résidus de produits coiffants, les dépôts minéraux de l\'eau dure et les excès d\'huile qui autrement feraient barrière à une pénétration uniforme des produits chimiques.' },
                      { id: 'q13-23', question: 'La crête pariétale est :', options: ['Le sommet de la tête', 'La zone la plus large de la tête où elle commence à s\'incurver vers l\'intérieur au-dessus des oreilles', 'La proéminence osseuse à l\'arrière du crâne', 'La ligne de croissance des cheveux à la nuque'], correctIndex: 1, explanation: 'La crête pariétale est le point le plus large de la tête — la zone où le crâne commence à s\'incurver vers l\'intérieur vers le haut. C\'est le principal repère pour la répartition du poids en coupe de cheveux.' },
                      { id: 'q13-24', question: 'Quelle forme de visage est considérée comme la plus polyvalente car presque toutes les coiffures sont flatteuses ?', options: ['Carré', 'Rond', 'Ovale', 'Rectangulaire'], correctIndex: 2, explanation: 'La forme de visage ovale est considérée comme idéale en coiffure car ses proportions équilibrées signifient que presque toutes les coupes, longueurs ou styles seront flatteurs.' },
                      { id: 'q13-25', question: 'La Loi sur les normes d\'emploi régit :', options: ['La sécurité au travail et la communication des dangers', 'Le salaire minimum, les heures de travail, l\'indemnité de vacances et le préavis de cessation d\'emploi', 'La certification professionnelle et l\'enregistrement de l\'apprentissage', 'La confidentialité des dossiers clients et des renseignements personnels'], correctIndex: 1, explanation: 'La Loi sur les normes d\'emploi établit les normes d\'emploi minimales en Ontario, y compris le salaire minimum, les heures maximales, les heures supplémentaires, l\'indemnité de vacances, les jours fériés, le congé de maternité et parental, et les exigences de préavis.' },
                      { id: 'q13-26', question: 'L\'établissement d\'objectifs SMART signifie :', options: ['Simple, Significatif, Aligné, Raisonnable, Temporel', 'Spécifique, Mesurable, Atteignable, Pertinent, Temporellement défini', 'Stratégique, Gérable, Atteignable, Rationnel, Traçable', 'Structuré, Attentif, Ambitieux, Réaliste, Approfondi'], correctIndex: 1, explanation: 'SMART = Spécifique, Mesurable, Atteignable, Pertinent, Temporellement défini.' },
                      { id: 'q13-27', question: 'Lequel des énoncés suivants est un exemple de pétrissage en massage du cuir chevelu ?', options: ['Mouvements glissés légers et lisses sur le cuir chevelu avec les paumes planes', 'Mouvements de pétrissage ferme et de levage circulaire avec les pouces et le bout des doigts', 'Tapotements rapides avec le bout des doigts pour stimuler la circulation', 'Mouvements de tremblement fins et rapides pour réduire la tension musculaire'], correctIndex: 1, explanation: 'Le pétrissage utilise des mouvements de pétrissage, de levage et de pression circulaire — c\'est le corps principal du massage du cuir chevelu et stimule la circulation sanguine et les glandes sébacées.' },
                      { id: 'q13-28', question: 'Quelle couche de la peau contient les follicules pileux, les glandes sébacées et les vaisseaux sanguins ?', options: ['Épiderme', 'Derme', 'Hypoderme', 'Couche cornée'], correctIndex: 1, explanation: 'Le derme est la couche intermédiaire de la peau. Il abrite les follicules pileux, les glandes sébacées, les glandes sudoripares, les vaisseaux sanguins, les terminaisons nerveuses, le collagène et l\'élastine.' },
                      { id: 'q13-29', question: 'La prise de rendez-vous préalable à la fin du rendez-vous d\'un client signifie :', options: ['Facturer le client à l\'avance pour le prochain service', 'Planifier le prochain rendez-vous du client avant qu\'il ne quitte le salon', 'Appeler le client la veille de son rendez-vous prévu', 'Prendre plusieurs services pour un seul rendez-vous'], correctIndex: 1, explanation: 'La prise de rendez-vous préalable consiste à planifier le prochain rendez-vous à la fin de la visite en cours. C\'est la stratégie de fidélisation la plus efficace et fournit un revenu prévisible au coiffeur.' },
                      { id: 'q13-30', question: 'Un test épicutané pour la couleur est appliqué combien de temps à l\'avance ?', options: ['Immédiatement avant le service', '1 heure avant le service', '24–48 heures avant le service', 'Une semaine avant le service'], correctIndex: 2, explanation: 'Le test épicutané doit être appliqué 24–48 heures avant le service pour laisser suffisamment de temps à une réaction d\'hypersensibilité retardée de se développer.' },
                      { id: 'q13-31', question: 'Le test en S pendant la permanente vérifie si :', options: ['Le neutralisant a été complètement rincé', 'Les cheveux ont suffisamment ramolli pour prendre la forme de boucle du bigoudi', 'Le pH de la lotion est dans la bonne plage', 'Le placement des bigoudis est uniforme sur toute la tête'], correctIndex: 1, explanation: 'Le test en S consiste à dérouler doucement un bigoudi test pour voir si les cheveux forment une forme en S égale au diamètre du bigoudi — confirmant qu\'une réduction suffisante a eu lieu.' },
                      { id: 'q13-32', question: 'Quelle liaison est rompue par l\'eau et la chaleur et se reforme lorsque les cheveux sèchent ou refroidissent ?', options: ['Liaison disulfure', 'Liaison peptidique', 'Liaison hydrogène', 'Liaison ionique'], correctIndex: 2, explanation: 'Les liaisons hydrogène sont des liaisons faibles et temporaires rompues par l\'eau et la chaleur. Elles se reforment à mesure que les cheveux sèchent ou refroidissent autour d\'une nouvelle forme — la base chimique de tout coiffage humide et thermique.' },
                      { id: 'q13-33', question: 'Un carré gradué diffère d\'une coupe d\'une seule longueur en ce que :', options: ['Il utilise une élévation de 90° partout', 'Les cheveux sont empilés au-dessus du périmètre en coupant à des angles entre 1 et 89°, créant une ligne de poids au-dessus de la nuque', 'Il ne nécessite pas de guide', 'Le dos est plus long que le devant dans toutes les variations'], correctIndex: 1, explanation: 'Une coupe graduée utilise des angles entre 1 et 89°, construisant du poids et empilant les cheveux au-dessus de la ligne de périmètre — créant la forme "stackée" caractéristique au-dessus de la nuque.' },
                      { id: 'q13-34', question: 'Lequel des énoncés suivants n\'est PAS un rôle de la papille dermique ?', options: ['Fournir du sang au bulbe pileux', 'Apporter de l\'oxygène et des nutriments pour la croissance des cheveux', 'Produire du sébum pour lubrifier la tige du cheveu', 'Fournir les signaux qui initient et maintiennent la croissance des cheveux'], correctIndex: 2, explanation: 'La papille dermique est le connecteur vasculaire à la base du follicule — elle apporte du sang, de l\'oxygène et des signaux de croissance. Le sébum est produit par la glande sébacée, qui est une structure distincte.' },
                      { id: 'q13-35', question: 'WHMIS 2015 exige tous les trois éléments suivants, SAUF :', options: ['Étiquettes de danger sur tous les produits contrôlés', 'Fiches de données de sécurité pour tous les produits dangereux', 'Formation et instruction des travailleurs sur les dangers', 'Un inspecteur gouvernemental présent pendant toutes les applications chimiques'], correctIndex: 3, explanation: 'WHMIS 2015 exige des étiquettes, des FDS et une formation des travailleurs. La présence d\'un inspecteur gouvernemental n\'est pas requise pendant les opérations normales du salon.' },
                      { id: 'q13-36', question: 'La "loi de la couleur" en coloration capillaire fait référence à :', options: ['La réglementation provinciale régissant l\'utilisation des produits colorants', 'Le principe que le mélange de couleurs complémentaires les neutralise, et que les couleurs primaires se combinent pour produire toutes les autres', 'La règle selon laquelle la couleur doit toujours être appliquée plus foncée que le niveau cible', 'La formule de calcul du volume d\'oxydant'], correctIndex: 1, explanation: 'La loi de la couleur dans la théorie des pigments décrit comment les trois couleurs primaires se combinent pour former toutes les autres, et comment les paires de couleurs complémentaires se neutralisent mutuellement.' },
                      { id: 'q13-37', question: 'Quelle méthode d\'extension utilise une aiguille courbe et du fil pour attacher des mèches à des cornrows tressés ?', options: ['Bandes adhésives', 'Micro-anneaux', 'Tissage', 'Liaison kératine K-tip'], correctIndex: 2, explanation: 'La méthode de tissage implique de tresser les cheveux naturels en cornrows et de coudre des mèches d\'extension aux cornrows avec une aiguille courbe spéciale et du fil.' },
                      { id: 'q13-38', question: 'Le but d\'utiliser un papier de finition lors de l\'enroulement des bigoudis de permanente est :', options: ['Accélérer le traitement chimique', 'Protéger les pointes délicates et assurer qu\'elles reposent à plat et uniformément sur le bigoudi pour une boucle cohérente', 'Créer plus de tension dans la zone des racines', 'Maintenir le bigoudi en position de base pendant le traitement'], correctIndex: 1, explanation: 'Les papiers de finition empêchent les pointes délicates des cheveux de se plier ou de se replier sur le bigoudi, assurant un enroulement uniforme et protégeant les pointes de la lotion agressive.' },
                      { id: 'q13-39', question: 'Les cheveux à haute porosité lors d\'un service de couleur vont :', options: ['Être résistants à la pénétration de la couleur et nécessiter un temps de traitement supplémentaire', 'Absorber la couleur très rapidement, potentiellement de manière inégale, et se décolorer plus vite', 'Ne pas être affectés par la porosité', 'Toujours produire un résultat plus clair que prévu'], correctIndex: 1, explanation: 'Les cheveux à haute porosité ont une cuticule endommagée ou soulevée qui absorbe les produits chimiques rapidement et de manière inégale. La couleur peut traiter trop vite, filer et se décolorer rapidement. Un égaliseur de porosité ou un filler peut être recommandé.' },
                      { id: 'q13-40', question: 'La méthode PASS fait référence à la procédure d\'utilisation d\'un :', options: ['Neutralisant en chimie de permanente', 'Extincteur en cas d\'urgence', 'Rasoir dans les techniques de texturisation', 'Ciseaux à effiler pour l\'élimination du poids'], correctIndex: 1, explanation: 'PASS = Tirer la goupille, Viser la base du feu, Presser la poignée, Balayer de gauche à droite. C\'est le protocole standard d\'utilisation d\'un extincteur portatif.' },
                      { id: 'q13-41', question: 'Les défrisants à la soude caustique ont un pH approximatif de :', options: ['4,5–6,5', '7–8', '9–10', '12–14'], correctIndex: 3, explanation: 'Les défrisants à l\'hydroxyde de sodium sont extrêmement alcalins, avec un pH de 12–14. Cette alcalinité extrême leur permet de rompre les liaisons disulfure très fortes des cheveux crépus résistants.' },
                      { id: 'q13-42', question: 'Quelle technique consiste à peindre le décolorant ou la couleur à main levée sur la surface de sous-sections sans papier pour un effet doux et gradué ?', options: ['Mèches au papier', 'Balayage', 'Babylights', 'Fondu de couleurs'], correctIndex: 1, explanation: 'Le balayage est la technique de peinture à main levée où le décolorant ou la couleur est appliqué sur la surface des sections par un mouvement de peinture sans papier. Le traitement à l\'air libre crée un dégradé doux, naturel et soleil.' },
                      { id: 'q13-43', question: 'La phase du cycle de croissance naturelle des cheveux où la division cellulaire cesse et le follicule rétrécit est appelée :', options: ['Anagène', 'Catagène', 'Télogène', 'Exogène'], correctIndex: 1, explanation: 'La phase catagène est la brève période de transition où la mitose s\'arrête et le follicule se détache de la papille dermique et rétrécit. Seulement 1–2 % des cheveux sont en catagène à un moment donné.' },
                      { id: 'q13-44', question: 'La responsabilité d\'un coiffeur en vertu du Code des droits de la personne comprend :', options: ['Facturer des tarifs plus élevés aux clients ayant des besoins capillaires plus complexes', 'Fournir un service égal et professionnel à tous les clients sans distinction de race, de sexe, d\'âge, de handicap ou de tout autre motif protégé', 'Refuser les services à tout client si le coiffeur est mal à l\'aise', 'Prioriser les clients existants par rapport aux nouveaux clients en tout temps'], correctIndex: 1, explanation: 'Le Code des droits de la personne de l\'Ontario interdit la discrimination dans la prestation de services. Chaque client a le droit légal à un service égal, professionnel et non discriminatoire.' },
                      { id: 'q13-45', question: 'Pour obtenir un résultat de niveau 9 à partir de cheveux naturellement brun foncé, la première étape est :', options: ['Appliquer une couleur de niveau 9 avec oxydant 40 vol.', 'Appliquer un tonique cendré demi-permanent', 'Pré-éclaircir avec un décolorant pour éliminer suffisamment de pigment sous-jacent', 'Appliquer un blond à haut pouvoir éclaircissant à 30 vol.'], correctIndex: 2, explanation: 'La couleur permanente ne peut pas éclaircir de 6 niveaux en une étape — l\'éclaircissement maximal est d\'environ 3–4 niveaux. Un pré-éclaircissement au décolorant est nécessaire avant la tonification pour obtenir un blond très clair à partir de cheveux brun foncé.' },
                      { id: 'q13-46', question: 'La contre-vérification d\'une coupe de cheveux implique :', options: ['Revoir le prix du service avec le client à la fin', 'Re-sectionner les cheveux dans la direction opposée pour vérifier l\'uniformité, l\'équilibre et la symétrie', 'Confirmer la satisfaction du client en montrant tous les angles avec un miroir', 'Appliquer un produit de finition pour vérifier la forme finale'], correctIndex: 1, explanation: 'La contre-vérification est une étape de contrôle qualité où le coiffeur réexamine la coupe en prenant des sections perpendiculaires à la direction de coupe d\'origine — détectant les sections inégales, les zones manquées et les déséquilibres.' },
                      { id: 'q13-47', question: 'Quel type de revitalisant est appliqué sur cheveux propres et humides et n\'est PAS rincé ?', options: ['Revitalisant instantané / à rincer', 'Masque revitalisant en profondeur', 'Revitalisant sans rinçage', 'Reconstructeur protéiné'], correctIndex: 2, explanation: 'Le revitalisant sans rinçage est appliqué sur cheveux humides après le shampoing et n\'est pas rincé. Il fournit une hydratation continue, aide au démêlage et offre une légère tenue ou une protection thermique tout au long de la journée.' },
                      { id: 'q13-48', question: 'Un bigoudi concave réduit la "cassure à la racine" car :', options: ['Il a un plus grand diamètre que les bigoudis standard', 'Son plus petit diamètre central crée une boucle plus serrée au milieu de la mèche tandis que les extrémités plus grandes offrent un angle plus doux à la racine et à la pointe', 'Il ne nécessite pas de papiers de finition', 'La surface du bigoudi est texturée pour éviter le glissement'], correctIndex: 1, explanation: 'Les bigoudis concaves ont un diamètre plus petit au centre et plus grand aux extrémités. Cela crée une boucle plus serrée au milieu de la mèche et une courbe plus douce et naturelle aux racines — réduisant la cassure à 90° vue avec les bigoudis droits.' },
                      { id: 'q13-49', question: 'Une permanente surtraitée résulte de :', options: ['L\'utilisation de la mauvaise marque de neutralisant', 'Une saturation insuffisante en lotion pendant l\'application', 'Le fait de laisser la lotion trop longtemps ou d\'utiliser une formule trop forte pour l\'état des cheveux', 'Un rinçage trop long de la lotion avant la neutralisation'], correctIndex: 2, explanation: 'Le surtraitement se produit lorsque la lotion rompt trop de liaisons disulfure. Les cheveux deviennent trop ramollis, perdent leur élasticité et peuvent casser. Le test en S montrerait une boucle molle et faible sans ressort.' },
                      { id: 'q13-50', question: 'Lequel des énoncés suivants décrit le MIEUX le but d\'une consultation avec le client ?', options: ['Vendre des produits et services supplémentaires', 'Évaluer l\'état des cheveux, comprendre les objectifs du client, gérer les attentes, effectuer des tests et obtenir un consentement éclairé avant tout service', 'Déterminer le service le plus rentable à effectuer', 'Examiner la carte de fidélité et l\'historique des rendez-vous du client'], correctIndex: 1, explanation: 'La consultation est l\'étape la plus importante de tout service. Elle établit la confiance, assure la sécurité, confirme le plan de service, gère les attentes de manière réaliste et constitue la base juridique du consentement éclairé. Tout le reste du service en dépend.' },
                  ],
              },

              // ─── CHAPITRE 14 ───────────────────────────────────────────────────────
              {
                  id: 'ch-14',
                  number: 14,
                  title: 'Glossaire complet',
                  subtitle: 'Définitions de tous les termes clés des chapitres 1 à 12',
                  isFree: false,
                  estimatedMinutes: 25,
                  sections: [
                      {
                          id: 's14-1',
                          title: '14.1 Glossaire — Fondements professionnels et sécurité',
                          content: [
                              { type: 'keyTerm', term: 'Alopécie', definition: 'Terme médical désignant tout type de perte de cheveux — comprend plusieurs types : androgénétique, pelade, de traction, effluvium télogène.' },
                              { type: 'keyTerm', term: 'Anagène', definition: 'Phase de croissance active du cycle capillaire — les cheveux poussent d\'environ 1–1,5 cm par mois ; dure 2–7 ans ; environ 85–90 % des cheveux du cuir chevelu sont dans cette phase.' },
                              { type: 'keyTerm', term: 'Muscle arrecteur du poil', definition: 'Le petit muscle lisse attaché à chaque follicule pileux qui se contracte pour faire dresser les cheveux en réponse au froid ou à l\'adrénaline.' },
                              { type: 'keyTerm', term: 'Bacilles', definition: 'Bactéries en forme de bâtonnet — exemples : Mycobacterium tuberculosis.' },
                              { type: 'keyTerm', term: 'Catagène', definition: 'Brève phase de transition du cycle capillaire où la division cellulaire cesse et le follicule se détache de la papille dermique.' },
                              { type: 'keyTerm', term: 'Historique chimique', definition: 'Enregistrement complet de tous les services chimiques antérieurs d\'un client — couleur, décoloration, défrisants, permanentes, traitements à la kératine — essentiel pour une sélection sécuritaire des produits.' },
                              { type: 'keyTerm', term: 'Coques', definition: 'Bactéries sphériques/arrondies — exemples : Staphylococcus, Streptococcus.' },
                              { type: 'keyTerm', term: 'Consultation', definition: 'Conversation structurée avant chaque service pour évaluer l\'état des cheveux, les objectifs du client, les résultats réalistes, les tests requis et obtenir un consentement éclairé — l\'étape la plus importante de tout service.' },
                              { type: 'keyTerm', term: 'Temps de contact', definition: 'Durée pendant laquelle un désinfectant doit rester en contact avec une surface pour être efficace — suivre l\'étiquette du produit ; retirer le désinfectant avant la fin du temps de contact le rend inefficace.' },
                              { type: 'keyTerm', term: 'Contre-indication', definition: 'Condition qui rend un traitement déconseillé ou potentiellement dangereux — exige que le coiffeur refuse le service et oriente le client de manière appropriée.' },
                              { type: 'keyTerm', term: 'Cortex', definition: 'Couche intermédiaire de la tige pilaire — constitue 80–90 % de la structure ; contient la kératine, la mélanine, les liaisons disulfure et hydrogène ; site de TOUS les changements chimiques permanents.' },
                              { type: 'keyTerm', term: 'Cuticule', definition: 'Couche la plus externe de la tige pilaire — 7–10 couches de cellules translucides qui se chevauchent ; protège le cortex ; détermine la brillance et le lissé ; ouverte par les produits alcalins, fermée par les produits acides.' },
                              { type: 'keyTerm', term: 'Papille dermique', definition: 'Connecteur vasculaire à la base du follicule pileux — riche en capillaires ; apporte le sang, l\'oxygène et les nutriments essentiels à la croissance des cheveux.' },
                              { type: 'keyTerm', term: 'Derme', definition: 'Couche intermédiaire de la peau — contient les follicules pileux, les glandes sébacées, les glandes sudoripares, les vaisseaux sanguins, les terminaisons nerveuses, le collagène et l\'élastine.' },
                              { type: 'keyTerm', term: 'Désinfection', definition: 'Niveau intermédiaire de décontamination — tue la plupart des pathogènes sur les surfaces non vivantes ; ne tue PAS toutes les spores ; norme requise pour les instruments de salon.' },
                              { type: 'keyTerm', term: 'Liaison disulfure (S-S)', definition: 'La plus forte liaison entre les chaînes de kératine dans le cortex — fournit la force principale et le motif ondulé des cheveux ; rompue uniquement par les agents réducteurs chimiques ou les défrisants à l\'hydroxyde ; reformée par oxydation dans les neutralisants de permanente.' },
                              { type: 'keyTerm', term: 'DTPA / Agent chélatant', definition: 'Agent chimique qui lie et élimine les dépôts minéraux de la tige du cheveu — présent dans les shampoings clarifiants et chélatants ; essentiel avant les services chimiques dans les zones d\'eau dure.' },
                              { type: 'keyTerm', term: 'Effleurage', definition: 'Mouvement de massage léger, lisse et glissant qui ouvre et ferme chaque massage du cuir chevelu — produit un effet relaxant et favorise le drainage lymphatique.' },
                          ],
                      },
                      {
                          id: 's14-2',
                          title: '14.2 Glossaire — Services techniques',
                          content: [
                              { type: 'keyTerm', term: 'Élévation', definition: 'Angle auquel les cheveux sont soulevés de la tête avant la coupe — la principale variable contrôlant la répartition du poids, la graduation et la longueur des couches dans toute coupe.' },
                              { type: 'keyTerm', term: 'Élasticité', definition: 'Capacité des cheveux à s\'étirer lorsqu\'ils sont mouillés et à revenir à leur longueur d\'origine sans casser — indicateur de la santé du cortex et de l\'intégrité des liaisons disulfure.' },
                              { type: 'keyTerm', term: 'Ergonomie', definition: 'Science de l\'adaptation de l\'environnement de travail et des outils au corps du travailleur — essentielle en coiffure pour prévenir les troubles musculo-squelettiques.' },
                              { type: 'keyTerm', term: 'Eumélanine', definition: 'Type de mélanine produisant les couleurs de cheveux noires et brunes — gros granules denses qui absorbent la plupart de la lumière visible.' },
                              { type: 'keyTerm', term: 'Folliculite', definition: 'Inflammation bactérienne des follicules pileux — apparaît sous forme de pustules rouges et enflammées ; une contre-indication pour les services de coiffure.' },
                              { type: 'keyTerm', term: 'Guide', definition: 'Première section coupée dans une coupe qui établit la longueur et la forme — toutes les sections suivantes sont mesurées et coupées pour correspondre au guide. Peut être fixe ou mobile.' },
                              { type: 'keyTerm', term: 'SGH', definition: 'Système général harmonisé — norme internationale de classification et de communication des dangers sur laquelle repose WHMIS 2015.' },
                              { type: 'keyTerm', term: 'Eau dure', definition: 'Eau avec des concentrations élevées de minéraux dissous calcium et magnésium — peut laisser des dépôts sur les cheveux, interférer avec le traitement chimique et réduire la mousse du shampoing.' },
                              { type: 'keyTerm', term: 'Liaison hydrogène', definition: 'Liaison faible et temporaire dans le cortex du cheveu, rompue par l\'eau et la chaleur et reformée lorsque le cheveu sèche ou refroidit — base chimique de tout coiffage humide et thermique temporaire.' },
                              { type: 'keyTerm', term: 'Consentement éclairé', definition: 'Accord volontaire du client de procéder à un service après avoir été pleinement informé de la procédure, des produits, des risques, des résultats attendus et des soins de suivi.' },
                              { type: 'keyTerm', term: 'Kératine', definition: 'Protéine principale de la tige pilaire et des ongles — protéine structurale dure et fibreuse composée d\'acides aminés liés par des liaisons peptidiques et réticulés par des liaisons disulfure, hydrogène et ioniques.' },
                              { type: 'keyTerm', term: 'Lanthionisation', definition: 'Changement chimique permanent et irréversible dû aux défrisants à l\'hydroxyde — une liaison disulfure est rompue et remplacée par une seule liaison lanthionine qui ne peut pas être inversée.' },
                              { type: 'keyTerm', term: 'Niveau', definition: 'Clarté ou obscurité de la couleur des cheveux — mesurée sur une échelle de 1 à 10 ; décrit UNIQUEMENT la dimension clair/foncé, pas la tonalité.' },
                              { type: 'keyTerm', term: 'Mélanine', definition: 'Granules de pigment naturel produits par les mélanocytes dans le bulbe pileux — composés d\'eumélanine et de phéomélanine.' },
                              { type: 'keyTerm', term: 'Moelle', definition: 'Noyau central le plus interne de la tige pilaire — cellules peu serrées avec espaces d\'air ; peut être absente dans les cheveux fins ; non impliquée dans les services chimiques.' },
                              { type: 'keyTerm', term: 'Shampoing neutralisant', definition: 'Shampoing à pH acide avec indicateur de couleur utilisé après les défrisants pour contrer l\'alcalinité et confirmer l\'élimination complète du produit ; passe du rose au clair lorsque la neutralisation est complète.' },
                              { type: 'keyTerm', term: 'OHSA', definition: 'Loi ontarienne sur la santé et la sécurité au travail — régit les normes de sécurité au travail, définit les devoirs des employeurs et des travailleurs, et protège les droits des travailleurs de savoir, participer et refuser un travail dangereux.' },
                              { type: 'keyTerm', term: 'Sur-direction', definition: 'Peigner ou tenir les cheveux au-delà de leur position de chute naturelle avant la coupe — déplace intentionnellement le poids et crée des effets de graduation dans la coupe.' },
                              { type: 'keyTerm', term: 'Crête pariétale', definition: 'Point le plus large de la tête, où le crâne commence à s\'incurver vers l\'intérieur au-dessus des oreilles — le principal point de référence pour la répartition du poids en coupe de cheveux.' },
                              { type: 'keyTerm', term: 'Test épicutané', definition: 'Test de sécurité effectué 24–48 heures avant un service de couleur — une petite quantité de produit est appliquée derrière l\'oreille ou dans le pli du coude ; une réaction positive contre-indique le service.' },
                              { type: 'keyTerm', term: 'Pétrissage', definition: 'Mouvements de massage fermes de pétrissage, de levage circulaire et de roulement — stimulent la circulation sanguine et l\'activité des glandes sébacées ; constituent le corps principal d\'un massage du cuir chevelu.' },
                              { type: 'keyTerm', term: 'pH', definition: 'Potentiel hydrogène — échelle de 0 à 14 mesurant la concentration d\'ions hydrogène dans une solution ; en dessous de 7 = acide ; 7 = neutre ; au-dessus = alcalin.' },
                              { type: 'keyTerm', term: 'Phéomélanine', definition: 'Type de mélanine produisant les tons rouges, cuivrés et jaune-doré — granules plus petits qui réfléchissent les longueurs d\'onde de lumière chaude ; responsable du pigment sous-jacent chaud dans les cheveux lorsqu\'ils sont éclaircis.' },
                              { type: 'keyTerm', term: 'Porosité', definition: 'Capacité du cheveu à absorber et retenir l\'humidité — déterminée par l\'état de la cuticule ; testée en faisant glisser les doigts de la pointe à la racine.' },
                              { type: 'keyTerm', term: 'Style protecteur', definition: 'Coiffure qui éloigne les pointes des cheveux de l\'exposition et des manipulations pour minimiser la casse et favoriser la rétention de longueur.' },
                              { type: 'keyTerm', term: 'Fiche de données de sécurité (FDS)', definition: 'Document normalisé de 16 sections requis par WHMIS pour tous les produits dangereux — fournit des informations complètes sur l\'identité chimique, les dangers, les premiers soins, la manipulation, le stockage, l\'élimination et les EPI requis.' },
                              { type: 'keyTerm', term: 'Hygiène', definition: 'Niveau de décontamination le plus bas — réduit le nombre de pathogènes à un niveau sûr et élimine la saleté visible ; comprend le lavage à l\'eau et au savon et la lessive des serviettes.' },
                              { type: 'keyTerm', term: 'Glande sébacée', definition: 'Glande attachée au follicule pileux dans le derme — produit du sébum, une huile cireuse naturelle qui lubrifie et protège la tige pilaire et la surface du cuir chevelu.' },
                              { type: 'keyTerm', term: 'Dermatite séborrhéique', definition: 'Affection inflammatoire chronique du cuir chevelu causant des plaques rouges, squameuses et qui démangent — associée à une prolifération de levures Malassezia sur le cuir chevelu ; forme plus sévère de pellicules grasses.' },
                              { type: 'keyTerm', term: 'Objectif SMART', definition: 'Cadre de fixation d\'objectifs : Spécifique, Mesurable, Atteignable, Pertinent, Temporellement défini — transforme les aspirations en objectifs concrets et traçables.' },
                              { type: 'keyTerm', term: 'Spirilles', definition: 'Bactéries en forme de spirale ou de tire-bouchon — exemple : Treponema pallidum.' },
                              { type: 'keyTerm', term: 'Guide fixe', definition: 'Guide de coupe fixe vers lequel toutes les sections suivantes sont amenées — utilisé dans les coupes d\'une seule longueur, franches et graduées.' },
                              { type: 'keyTerm', term: 'Stérilisation', definition: 'Niveau de décontamination le plus élevé — détruit TOUS les microorganismes, y compris les endospores bactériennes ; obtenue par autoclave ; rarement requise en salon.' },
                              { type: 'keyTerm', term: 'Test en S', definition: 'Vérification du traitement en chimie de permanente — un bigoudi test est doucement déroulé pour voir si les cheveux forment une forme en S égale au diamètre du bigoudi, confirmant un ramollissement suffisant avant la neutralisation.' },
                              { type: 'keyTerm', term: 'Test sur mèche', definition: 'Test pré-service où une petite section de cheveux est soumise au service chimique complet proposé pour prédire le moment, le résultat et la réaction du produit avant l\'application sur toute la tête.' },
                              { type: 'keyTerm', term: 'Tapotement', definition: 'Mouvements de tapotement légers et vifs ou percussion en massage du cuir chevelu — stimulants et favorisant la circulation ; utilisés brièvement.' },
                              { type: 'keyTerm', term: 'Télogène', definition: 'Phase de repos du cycle capillaire — le vieux cheveu repose près de la surface, un nouveau cheveu commence en dessous, et le vieux cheveu est finalement éliminé.' },
                              { type: 'keyTerm', term: 'Effluvium télogène', definition: 'Perte de cheveux diffuse temporaire causée par un grand pourcentage de cheveux entrant simultanément en phase télogène — déclenché par le stress, la maladie, des changements hormonaux ou une carence nutritionnelle.' },
                              { type: 'keyTerm', term: 'Texture', definition: 'Diamètre de la mèche de cheveux individuelle — classée comme fine, moyenne ou épaisse ; affecte la sélection des produits, le temps de traitement et les résultats des services chimiques.' },
                              { type: 'keyTerm', term: 'Teigne du cuir chevelu', definition: 'Infection fongique hautement contagieuse causant des plaques circulaires et squameuses avec cassure des cheveux ; une contre-indication nécessitant le refus du service et une orientation vers un médecin.' },
                              { type: 'keyTerm', term: 'Tonalité', definition: 'Chaleur ou froideur visible de la couleur des cheveux — décrite comme chaude ou froide. La tonalité est distincte du niveau.' },
                              { type: 'keyTerm', term: 'Alopécie de traction', definition: 'Perte de cheveux le long de la ligne de croissance et des tempes causée par des tensions répétées de coiffures serrées — peut devenir permanente si la tension n\'est pas relâchée tôt.' },
                              { type: 'keyTerm', term: 'Guide mobile', definition: 'Guide mobile qui progresse section par section dans une coupe, transportant la mesure de longueur vers l\'avant — utilisé dans les coupes à couches uniformes et longues.' },
                              { type: 'keyTerm', term: 'WHMIS 2015', definition: 'Système d\'information sur les matières dangereuses utilisées au travail du Canada, harmonisé avec le SGH — exige des étiquettes de danger, des FDS et une formation des travailleurs pour tous les produits contrôlés.' },
                          ],
                      },
                  ],
                  practiceQuestions: [
                      { id: 'q14-1', question: 'Que signifie le "R" dans le cadre des objectifs SMART ?', options: ['Raisonnable', 'Réaliste', 'Pertinent', 'Rigoureux'], correctIndex: 2, explanation: 'Le "R" dans SMART signifie Pertinent — l\'objectif doit correspondre à vos objectifs de carrière plus larges, vos valeurs et vos priorités actuelles.' },
                      { id: 'q14-2', question: 'La phéomélanine produit quelles tonalités capillaires naturelles ?', options: ['Noir et brun foncé', 'Rouge, cuivré, doré et jaune', 'Blanc/gris', 'Cendré et brun froid'], correctIndex: 1, explanation: 'La phéomélanine produit des tons chauds, du rouge au jaune-doré. C\'est le type de pigment responsable des cheveux roux et du pigment sous-jacent chaud visible dans les cheveux bruns et noirs lorsqu\'ils sont éclaircis.' },
                      { id: 'q14-3', question: 'Un guide fixe est le MIEUX utilisé pour quel type de coupe ?', options: ['Couches uniformes partout', 'Longues couches avec guide mobile', 'Coupes franches/d\'une seule longueur ou graduées', 'Styles texturés coupés au rasoir'], correctIndex: 2, explanation: 'Un guide fixe reste au même endroit — toutes les sections suivantes y sont amenées pour la coupe. C\'est la technique correcte pour les coupes d\'une seule longueur et graduées où le périmètre doit être cohérent.' },
                  ],
              },

              // ─── CHAPITRE 15 ───────────────────────────────────────────────────────
              {
                  id: 'ch-15',
                  number: 15,
                  title: 'Stratégie d\'examen et conseils d\'étude',
                  subtitle: 'Techniques fondées sur des données probantes pour maximiser votre performance à l\'examen',
                  isFree: false,
                  estimatedMinutes: 20,
                  sections: [
                      {
                          id: 's15-1',
                          title: '15.1 Comprendre l\'examen STO 332A',
                          content: [
                              { type: 'paragraph', text: 'L\'examen de certification pour coiffeurs de Métiers spécialisés Ontario est un test à choix multiples sur ordinateur administré dans les centres Prometric Canada Testing Service. Comprendre la structure de l\'examen est la première étape pour se préparer stratégiquement.' },
                              {
                                  type: 'table', headers: ['Élément de l\'examen', 'Détail'], rows: [
                                      ['Format', 'Choix multiples, sur ordinateur'],
                                      ['Nombre de questions', 'Environ 120 questions'],
                                      ['Limite de temps', 'Environ 3 heures'],
                                      ['Note de passage', '70 %'],
                                      ['Prestataire de test', 'Prometric Canada Testing Services'],
                                      ['Domaines', '17 domaines officiels'],
                                      ['Planification', 'Réserver en ligne via Métiers spécialisés Ontario ; pièce d\'identité avec photo requise'],
                                      ['Politique de reprise', 'Les candidats qui échouent peuvent se réinscrire après une période d\'attente ; des frais s\'appliquent'],
                                  ]
                              },
                              { type: 'paragraph', text: 'L\'examen couvre les 17 domaines officiels de la norme de formation 332A, pondérés selon leur importance dans le métier. Les domaines à forte pondération comprennent les services chimiques et les techniques de coupe.' },
                          ],
                      },
                      {
                          id: 's15-2',
                          title: '15.2 Stratégies d\'étude fondées sur des données probantes',
                          content: [
                              { type: 'paragraph', text: 'Toutes les méthodes d\'étude ne se valent pas. La recherche en sciences de l\'apprentissage identifie systématiquement les techniques les plus efficaces. Utilisez ces méthodes, pas la relecture passive :' },
                              {
                                  type: 'table', headers: ['Stratégie', 'Comment l\'appliquer', 'Pourquoi ça marche'], rows: [
                                      ['Rappel actif', 'Après avoir lu une section, fermez le matériel et essayez de vous rappeler les concepts clés de mémoire.', 'Le rappel actif force le cerveau à reconstruire activement l\'information — cela renforce la mémoire bien plus que la relecture passive.'],
                                      ['Répétition espacée', 'Révisez le matériel à intervalles croissants.', 'Le fait d\'oublier légèrement puis de se souvenir renforce la mémoire à long terme.'],
                                      ['Entrelacement', 'Mélangez différents sujets au sein d\'une même session d\'étude.', 'L\'entrelacement force le cerveau à identifier et différencier les concepts — améliore la capacité à récupérer la bonne information sous pression.'],
                                      ['Interrogation élaborative', 'En apprenant un fait, demandez "Pourquoi ?" et "Comment cela se connecte-t-il à ce que je sais déjà ?"', 'Relier les nouvelles informations aux connaissances antérieures crée plus de voies de mémoire et aide au rappel sous pression.'],
                                      ['Tests pratiques', 'Passez régulièrement des examens blancs chronométrés dans des conditions semblables à l\'examen.', 'Les tests pratiques dans des conditions réalistes préparent à la fois vos connaissances et votre réponse psychologique au stress de l\'examen.'],
                                  ]
                              },
                          ],
                      },
                      {
                          id: 's15-3',
                          title: '15.3 Tactiques pour les examens à choix multiples',
                          content: [
                              { type: 'paragraph', text: 'Les examens à choix multiples ont une structure spécifique qui récompense une approche stratégique en plus de la connaissance du contenu :' },
                              {
                                  type: 'numbered', items: [
                                      'LISEZ LA QUESTION EN ENTIER avant de regarder les options — formez d\'abord une réponse mentale, puis cherchez une correspondance parmi les choix',
                                      'ÉLIMINEZ D\'ABORD LES RÉPONSES MANIFESTEMENT FAUSSES',
                                      'ATTENTION AU LANGAGE ABSOLU — les réponses avec des mots comme "toujours", "jamais", "seulement" sont souvent incorrectes',
                                      'RECHERCHEZ LA RÉPONSE LA PLUS COMPLÈTE ET SPÉCIFIQUE',
                                      'FAITES CONFIANCE À VOTRE PREMIER INSTINCT pour les questions que vous avez étudiées',
                                      'MARQUEZ ET PASSEZ — si vous n\'êtes pas sûr après 30 secondes, marquez la question et passez à la suivante',
                                      'RÉPONDEZ À TOUTES LES QUESTIONS — il n\'y a pas de pénalité pour les réponses au hasard',
                                      'UTILISEZ LE PROCESSUS D\'ÉLIMINATION pour les questions "SAUF"',
                                  ]
                              },
                              {
                                  type: 'infoBox', title: 'Pièges courants des examens', items: [
                                      'OPTIONS DISTRACTANTES qui utilisent un langage technique mais décrivent le mauvais processus',
                                      'OPTIONS "PRESQUE CORRECTES" qui sont correctes dans un contexte différent',
                                      'RÉPONSES INVERSÉES',
                                      'RÉPONSES INCOMPLÈTES — une option partiellement correcte mais manquant une étape critique',
                                      'DEUX OPTIONS SIMILAIRES — généralement une seule est entièrement correcte',
                                  ]
                              },
                          ],
                      },
                      {
                          id: 's15-4',
                          title: '15.4 Plan d\'étude et plan du jour de l\'examen',
                          content: [
                              {
                                  type: 'table', headers: ['Semaines avant l\'examen', 'Concentration de l\'étude'], rows: [
                                      ['8–6 semaines', 'Lire tous les 12 chapitres ; répondre à toutes les questions de chapitre ; identifier les points faibles'],
                                      ['6–4 semaines', 'Réviser les points faibles en profondeur ; créer des fiches pour les termes clés'],
                                      ['4–2 semaines', 'Passer l\'examen blanc au moins deux fois ; réviser chaque réponse incorrecte'],
                                      ['2–1 semaines', 'Dernière révision des fiches ; répétition espacée ; passer l\'examen blanc une troisième fois en visant 80 %+'],
                                      ['Veille de l\'examen', 'Révision légère uniquement — le glossaire et les tableaux clés. Bien dormir.'],
                                      ['Matin de l\'examen', 'Petit-déjeuner riche en protéines. Arriver 30 minutes à l\'avance. Ne pas bachoter.'],
                                  ]
                              },
                              { type: 'paragraph', text: 'Gérer l\'anxiété de l\'examen :' },
                              {
                                  type: 'bullets', items: [
                                      'Respiration profonde',
                                      'Discours intérieur positif',
                                      'Exercice physique la veille',
                                      'Si vous bloquez sur une question : respirez, rappelez-vous le sujet connexe, travaillez de ce que vous SAVEZ vers ce que vous ne savez pas',
                                      'Progrès, pas perfection : vous n\'avez besoin que de 70 %',
                                  ]
                              },
                              {
                                  type: 'infoBox', title: '🎯 Votre liste de contrôle de préparation', items: [
                                      '✅ Terminé tous les 15 chapitres et questions de chapitre',
                                      '✅ Obtenu 75 %+ à l\'examen blanc du chapitre 13 au moins une fois',
                                      '✅ Peut expliquer la différence entre hygiène, désinfection et stérilisation',
                                      '✅ Peut expliquer le fonctionnement de la permanente',
                                      '✅ Peut expliquer le fonctionnement de la couleur permanente et de la décoloration',
                                      '✅ Peut identifier les contre-indications pour tous les services chimiques',
                                      '✅ Connaît les 16 sections de la FDS et les classes de danger WHMIS',
                                      '✅ Comprend les quatre formes de coupe',
                                      '✅ Rendez-vous d\'examen pris chez Prometric Canada — vous êtes prêt !',
                                  ]
                              },
                          ],
                      },
                  ],
                  practiceQuestions: [
                      { id: 'q15-1', question: 'La technique d\'étude la plus efficace selon la recherche en sciences de l\'apprentissage est :', options: ['Relire les notes plusieurs fois', 'Surligner les passages clés du manuel', 'Le rappel actif', 'Recopier les notes à la main une fois'], correctIndex: 2, explanation: 'Le rappel actif est la technique la plus soutenue par les preuves. Chaque fois que vous récupérez un souvenir, vous renforcez la voie neurale — bien plus efficace que la révision passive ou la relecture.' },
                      { id: 'q15-2', question: 'Lors d\'un examen à choix multiples, si vous n\'êtes pas sûr d\'une question après mûre réflexion, vous devriez :', options: ['La sauter et la laisser vide pour éviter une pénalité', 'Toujours choisir l\'option C par défaut', 'La marquer, passer à la suite, et y revenir à la fin — ne jamais laisser vide', 'Retourner au début et recommencer'], correctIndex: 2, explanation: 'Il n\'y a pas de pénalité pour les réponses au hasard. Laisser une question vide garantit 0 point. Une réponse au hasard stratégique vous donne une chance d\'avoir une réponse correcte.' },
                      { id: 'q15-3', question: 'La note de passage de l\'examen de certification STO 332A pour coiffeurs est :', options: ['60 %', '65 %', '70 %', '80 %'], correctIndex: 2, explanation: 'La note de passage est de 70 %. Vous n\'avez pas besoin d\'un score parfait — concentrez-vous sur la maîtrise des domaines à forte pondération et l\'élimination des lacunes dans les connaissances fondamentales.' },
                      { id: 'q15-4', question: 'La répétition espacée comme stratégie d\'étude implique :', options: ['Étudier le même matériel pendant de nombreuses heures en une seule session', 'Réviser le matériel à intervalles de temps croissants', 'Lire chaque chapitre une seule fois avant l\'examen', 'Étudier uniquement les sujets apparus le plus récemment dans le manuel'], correctIndex: 1, explanation: 'La répétition espacée espace les sessions de révision sur des intervalles croissants. Le léger oubli qui se produit entre les sessions, suivi d\'un rappel réussi, renforce puissamment la mémoire à long terme.' },
                  ],
              },
          ],
      },
  ],
};

// =============================================================================
// Utilitaires d'aide
// =============================================================================

/** Aplatit tous les chapitres de toutes les parties */
export const getAllChapters = (course = hairstylistCourse) =>
  course.parts.flatMap(p => p.chapters);

/** Obtient uniquement les chapitres d'aperçu gratuits */
export const getFreeChapters = (course = hairstylistCourse) =>
  getAllChapters(course).filter(ch => ch.isFree);

/** Trouve un chapitre par son identifiant */
export const getChapterById = (id, course = hairstylistCourse) =>
  getAllChapters(course).find(ch => ch.id === id);

/** Trouve à quelle partie appartient un chapitre */
export const getPartForChapter = (chapterId, course = hairstylistCourse) =>
  course.parts.find(p => p.chapters.some(ch => ch.id === chapterId));

/** Obtient les chapitres précédent et suivant (pour la navigation) */
export const getAdjacentChapters = (chapterId, course = hairstylistCourse) => {
  const all = getAllChapters(course);
  const idx = all.findIndex(ch => ch.id === chapterId);
  return {
    prev: idx > 0 ? all[idx - 1] : null,
    next: idx < all.length - 1 ? all[idx + 1] : null,
  };
};

/** Compte le nombre total de questions pratiques dans tous les chapitres */
export const getTotalQuestions = (course = hairstylistCourse) =>
  getAllChapters(course).reduce((sum, ch) => sum + (ch.practiceQuestions?.length || 0), 0);

export { hairstylistCourse as hairstylistCourseFr };
export default hairstylistCourse;