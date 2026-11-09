[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Système de Contrôle des Flux Matières en Atelier : Modèle Excel de MRP, Calculatrice d'Éclatement de BOM, Suivi de Stock Kanban et Tableur de Planification de Production de Soudage
<img width="1920" height="790" alt="image" src="https://github.com/user-attachments/assets/a63af286-1115-4c2c-aa06-6d7e04aba1e4" />


**Un suivi de stocks de fabrication prêt à l'emploi, une calculatrice multi-niveaux d'éclatement de nomenclatures (BOM), un tableur de réapprovisionnement de supermarché Kanban et un modèle Excel de planification quotidienne de production pour les ateliers de fabrication métallique et de soudage.**

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)
![Platform: Free Web Tool + Microsoft Excel (.xlsx)](https://img.shields.io/badge/Platform-Free%20Web%20Tool%20%2B%20Excel%20(.xlsx)-217346)
![Compatibility: Excel 2021+ & Microsoft 365](https://img.shields.io/badge/Compatibility-Excel%202021%2B%20%26%20M365%20Dynamic%20Arrays-2251FF)
![Category: Manufacturing MRP & Production Control](https://img.shields.io/badge/Category-Manufacturing%20MRP%20%26%20WIP%20Tracker-0A66C2)

**Shop-Floor Material Flow Control System** est un **modèle Excel de MRP** plug-and-play, un **tableur de contrôle de stocks de fabrication** et une **calculatrice gratuite de planification de production accessible via navigateur** conçus pour les ateliers à la commande, les fabricants de métal et les opérations de soudage. Il convertit les plannings de production par équipe en **besoins exacts de pièces de nomenclature (BOM)**, **alertes de réapprovisionnement de bacs Kanban**, **checklists de préparation de chariots en bord de ligne** et **déstockage des rebuts des en-cours de production (WIP)**. Les fabricants de petite et moyenne taille et les planificateurs débutants peuvent éliminer les ruptures de pièces imprévues, mettre fin aux retards de soudage en cours d'équipe et remplacer des tableurs manuels défectueux en moins d'une minute sans payer d'abonnements à des logiciels ERP ou MES complexes.

> ### Accès Rapide : Bac à Sable en Ligne Gratuit et Système Excel Téléchargeable
>
> - **Application Web Interactive Gratuite (Test Instantané dans le Navigateur) :** Testez le flux de travail en ligne gratuitement avec des données d'exemple de fabrication préchargées. Aucune installation ni inscription requise.  
>   👉 **[Lancez l'Outil Web Gratuit de MRP en Atelier, d'Éclatement de BOM et de Calcul Kanban](https://hyvoid.github.io/shop-floor-mrp-kanban-excel-system/)**
>
> - **Classeur Microsoft Excel Réutilisable Hors Ligne (.xlsx pour les Opérations Quotidiennes d'Usine) :** Téléchargez le modèle de tableur automatisé complet pour coller vos propres références pièces, enregistrer vos données de référence BOM localement et exécuter une planification par équipe répétable hors ligne. Garanti par une **garantie de remboursement inconditionnelle de 30 jours**.  
>   👉 **[Téléchargez le Modèle Excel Prêt à l'Emploi de MRP en Atelier, d'Éclatement de BOM et de Planification de Production (.xlsx)](https://theseusworkshop.com/l/qnojv?utm_source=github&utm_medium=GitHub%20README)**

---

## Ce Que Cela Vous Aide à Suivre : Des Points de Douleur en Atelier aux Solutions Excel Automatisées

Si vous recherchez un **modèle Excel de suivi de stocks de fabrication**, une **calculatrice de manques de BOM** ou un **tableur de suivi des en-cours de production (WIP)**, ce système remplace les estimations par des calculs automatisés avant chaque équipe :

| Point de Douleur Quotidien en Usine (Réalité Débutant et Atelier) | Intention de Recherche Fréquente / Module Excel Intégré | Comment Ce Tableur Plug-and-Play la Résout Automatiquement |
| :--- | :--- | :--- |
| **Les Soudeurs S'arrêtent Parce Qu'une Petite Équerre Manque** | **Tableur de Calculatrice MRP et d'Éclatement de BOM Multi-Niveaux** | Multiplie vos assemblages soudés planifiés par équipe par chaque composant enfant de votre **nomenclature (BOM)** pour calculer la demande exacte de pièces avant le début de l'équipe. |
| **Les Pièces Apparaissent « En Stock » sur le Papier, Mais Personne Ne les Trouve en Atelier** | **Suivi d'Emplacement des En-Cours de Production (WIP) et des Bacs Kanban** | Sépare les totaux bruts du registre du magasin en emplacements physiques spécifiques : zones tampons amont, **bacs de supermarché Kanban**, chariots de livraison chargés et postes de soudage actifs. |
| **Les Machines de Découpe Laser et de Pliage Sont Interrompues par des Commandes Urgentes** | **Feuille d'Alertes Automatisées de Manques Matières et de Priorités de Réapprovisionnement** | Compare la demande de matières de l'équipe aux soldes actuels du supermarché et aux seuils de stock de sécurité, générant des listes de réapprovisionnement priorisées (`Critical`, `Warning`, `Normal`) pour les machines amont de découpe laser, presse plieuse et CNC. |
| **Les Manutentionnaires Poussent des Kits de Pièces Incomplets vers les Postes de Travail** | **Checklist de Préparation de Kits en Bord de Ligne et Suivi d'Expédition des Chariots** | Regroupe les composants requis par poste de travail, taille de contenant et capacité de chariot, en attribuant des états de préparation clairs (`Ready`, `Partly Kitted`, `Blocked`) avant que tout chariot ne quitte la zone de préparation. |
| **Les Rebuts de Soudage Non Enregistrés Corrompent les Comptages de Stock avec le Temps** | **Calculatrice de Production Prévue vs Réelle et de Déstockage des Rebuts** | Déduit à la fois les assemblages bons terminés et les rebuts déclarés en atelier de vos soldes de stock en direct à la fin de chaque équipe, maintenant les chiffres du tableur alignés avec les comptages physiques des bacs. |
| **Les Superviseurs Passent des Heures à Mettre à Jour des Formules Défectueuses entre les Onglets** | **Tableau de Bord Visuel de Contrôle de Production et de Manques en Atelier** | Consolide les taux d'achèvement du plan d'équipe, les principaux goulots d'étranglement de composants, les risques de rupture du supermarché Kanban et les tâches de livraison internes sur un seul écran de synthèse automatique. |

---

## Tutoriel de Démarrage Rapide : Comment Exécuter la Planification de Production et la Préparation de Matières en 1 Minute

Vous n'avez pas besoin d'un diplôme d'ingénierie industrielle ni de compétences Excel avancées pour exécuter la planification des besoins en matières. Suivez ce flux de travail en 4 étapes pour tester la logique dans l'outil web gratuit, puis transférez vos opérations quotidiennes dans le classeur Excel automatisé.

### Étape 1 : Définir Vos Règles de Base d'Atelier et de Stock de Sécurité
**Intention de Recherche :** *Comment configurer des règles de stock de sécurité et de réapprovisionnement Kanban dans Excel*  
Ouvrez le panneau de configuration et saisissez vos chiffres de base d'atelier : durée d'équipe, équipes par jour, zones tampons minimales de stock de sécurité, seuils de déclenchement Kanban et pourcentages de rebut autorisés. Chaque **calcul de manque MRP** et **alerte de réapprovisionnement** en aval se met à jour automatiquement selon ces règles.

### Étape 2 : Coller Votre Liste de Pièces, Postes de Travail et Nomenclature (BOM)
**Intention de Recherche :** *Comment construire une nomenclature (BOM) de fabrication et une liste de référence de pièces*  
Saisissez ou collez votre catalogue de composants (références pièces, source de fabrication amont telle que découpe laser ou usinage CNC, quantité d'emballage standard et emplacement de bac Kanban) ainsi que vos **recettes d'assemblages soudés** parent-enfant. Le modèle prend en charge environ 500 références SKU de pièces individuelles et 50 assemblages parents dès l'installation.

### Étape 3 : Saisir le Planning d'Équipe du Jour pour Générer des Listes de Manques et de Prélèvement Automatiques
**Intention de Recherche :** *Comment calculer les besoins en matières et générer des listes de prélèvement d'entrepôt à partir d'un planning de production*  
Sélectionnez votre date de production, l'équipe, le poste de soudage cible, la référence de l'assemblage et la quantité planifiée. Le moteur de calcul intégré éclate immédiatement le planning en besoins de pièces enfants, vérifie le **stock du supermarché Kanban** disponible, met en évidence les déficits exacts de pièces et construit une **checklist priorisée de préparation de chariots**.

### Étape 4 : Enregistrer la Production Réelle de l'Équipe et Télécharger le Modèle Excel Réutilisable pour les Opérations Quotidiennes
**Intention de Recherche :** *Comment suivre la production prévue vs réelle et déstocker le stock dans Excel*  
À la fin de l'équipe, saisissez le nombre d'assemblages bons terminés et les pièces rebutées. Le modèle déduit automatiquement les matières consommées et met à jour votre stock de départ pour l'équipe de demain.

---

### Transformer un Flux de Fabrication Complexe en Habitude de Copier-Coller d'1 Minute

Exécuter à partir de zéro des **éclatements de demande BOM multi-niveaux**, des **calculs de zones tampons Kanban**, de l'**appariement de capacité de chariots** et du **déstockage des rebuts** exige des calculs complexes de chaîne d'approvisionnement. Cependant, **vous n'avez pas besoin de comprendre les formules sous-jacentes ni de construire vous-même une seule règle de tableur.**

Dans le **Classeur Excel de Contrôle des Flux Matières en Atelier (.xlsx)** téléchargeable, chaque règle d'appariement à tableau dynamique, recherche inter-onglets et formule d'actualisation automatique est déjà pré-construite et verrouillée :

1. **Aucun Glissement de Formule Requis :** Vous n'avez même pas besoin de double-cliquer sur le coin d'une cellule pour faire glisser des formules vers le bas. Collez vos propres références pièces, liste BOM et planning quotidien directement dans les tables d'entrée, et l'ensemble du tableau de bord se met à jour tout seul.
2. **Clarté de Décision en 1 Minute pour les Débutants :** Même sans aucune expérience en analyse de données ou en contrôle de production, vous pouvez coller vos chiffres et repérer vos principaux goulots d'étranglement matières en **60 secondes**. Au lieu de passer la haute saison à réparer des cellules `VLOOKUP` défectueuses, vous obtenez un retour de décision immédiat de niveau direction afin de vous concentrer sur la gestion de votre atelier et la livraison des commandes à temps.
3. **Achat Unique vs Abonnements Logiciels Mensuels Coûteux :** Les modules ERP et MES d'entreprise facturent des milliers de dollars d'abonnements annuels récurrents et de frais d'installation. Ce modèle Excel payant transforme un flux de travail d'usine chaotique en un fichier local standardisé que vous achetez une fois et réutilisez pour toujours sur votre propre ordinateur.
4. **Confidentialité des Données 100 % Locale et Garantie de Remboursement de 30 Jours :** Conservez vos structures BOM propriétaires, vos références de pièces fournisseurs et vos capacités de production entièrement hors ligne sur votre disque dur local avec zéro exposition de sécurité cloud. Chaque téléchargement est protégé par une **garantie de remboursement inconditionnelle de 30 jours** — si elle ne simplifie pas votre planification quotidienne en atelier, demandez un remboursement complet sans tracas.

👉 **[Téléchargez le Classeur Excel Automatisé Complet de MRP en Atelier et de Planification de Production (.xlsx) — Garantie Sans Risque de 30 Jours](https://theseusworkshop.com/l/qnojv?utm_source=github&utm_medium=GitHub%20README)**  
*(Vous voulez d'abord prévisualiser le flux de travail ? **[Essayez Ici le Bac à Sable Web Gratuit de MRP et Kanban dans le Navigateur](https://hyvoid.github.io/shop-floor-mrp-kanban-excel-system/)**)*

---

## La Logique Métier et la Méthodologie : Guide en Langage Simple du Contrôle en Atelier et des Fuites de Profit Cachées

La plupart des ateliers petits et moyens perdent de l'argent en atelier non pas faute de commandes, mais à cause d'**angles morts opérationnels cachés** dans la façon dont les matières circulent de la fabrication brute à l'assemblage final. 

Voici une explication en langage simple des cinq angles morts métier fondamentaux qui causent des livraisons manquées et du travail gaspillé, ainsi que les faits financiers objectifs et la façon dont la logique intégrée de ce tableur les corrige automatiquement :

### 1. L'Angle Mort du « Kit Complété à 95 % » (Pourquoi une Équerre à 2 $ Manquante Arrête une Commande de 5 000 $)
- **La Réalité Objective :** L'assemblage manufacturier est tout ou rien. Si un cadre soudé nécessite 15 pièces métalliques différentes et que 14 d'entre elles se trouvent au poste de travail, votre capacité réelle à terminer ce produit est de **0 %, et non de 93 %**. Dans la plupart des ateliers, les responsables planifient les équipes en regardant uniquement les commandes de produits finis, découvrant trop tard qu'une seule petite bague ou équerre est en rupture de stock.
- **Comment la Logique Excel le Corrige (Traduction de la Demande Pilotée par la BOM) :** Lorsque vous saisissez une quantité d'assemblage planifiée dans le planning, le classeur décompose automatiquement ce produit parent en chaque pièce enfant requise. Il signale l'équerre à 2 $ manquante avant que vous n'assigniez un soudeur au poste, évitant que des opérateurs payés restent inactifs devant un travail impossible à réaliser.

### 2. L'Illusion du « En Stock sur le Papier » (Double Comptage des Mêmes Pièces sur Plusieurs Équipes)
- **La Réalité Objective :** Un tableur d'inventaire standard ne vous indique que le nombre total de pièces présentes dans le bâtiment. Supposons que votre feuille indique `100 plaques de base découpées au laser` en stock. Le Travail A de l'équipe du matin nécessite `60 plaques`, et le Travail B de l'équipe de l'après-midi nécessite `60 plaques`. Un tableur basique indique que les deux travaux ont suffisamment de pièces (`60 <= 100`), donc vous lancez les deux en atelier — causant l'épuisement du stock de matières à mi-parcours pour l'équipe de l'après-midi.
- **Comment la Logique Excel le Corrige (Déduction du Stock Engagé) :** Le modèle soustrait automatiquement les pièces déjà promises à des équipes antérieures ou chargées sur des chariots actifs de votre solde physique en rayon. Vous voyez votre **vrai stock disponible restant**, éliminant les doubles réservations entre équipes et postes de travail.

### 3. Traiter les Machines Amont comme un Distributeur Instantané (Changements de Série d'Urgence et Heures Machine Perdues)
- **La Réalité Objective :** Les machines amont comme les découpeuses laser, les presses poinçonneuses CNC et les presses plieuses nécessitent un temps de réglage, des changements d'outillage et le calepinage des tôles. Lorsqu'un superviseur de soudage découvre un bac de pièces vide en cours d'équipe et exige une production d'urgence de 10 équerres, l'opérateur de la presse plieuse doit démonter un réglage de production en cours. Dans l'ensemble du secteur, les réglages d'urgence non planifiés réduisent la capacité machine totale de **15 % à 30 %**.
- **Comment la Logique Excel le Corrige (Réapprovisionnement Kanban par Seuils) :** Le tableur compare la demande des équipes à venir à vos niveaux de stock de sécurité minimums et classe automatiquement l'urgence de réapprovisionnement (`Critical`, `Warning`, `Normal`) par type de machine amont. Les opérateurs amont reçoivent une liste de lots propre et priorisée des heures avant que les bacs n'atteignent réellement zéro.

### 4. Transformer les Cabines de Soudage en Aires de Stockage Encombrées (Coûts de Main-d'Œuvre Cachés de Recherche de Pièces)
- **La Réalité Objective :** Lorsque les manutentionnaires poussent des kits partiels ou des palettes désorganisées sur l'atelier juste pour « faire avancer les matières », les cellules de soudage de haute valeur deviennent des allées de stockage encombrées. Les soudeurs qualifiés finissent par passer **30 à 45 minutes par équipe** à parcourir l'atelier à la recherche de pièces manquantes ou à déplacer des assemblages à moitié terminés hors du chemin.
- **Comment la Logique Excel le Corrige (Préparation de Chariots Contrôlée) :** Le modèle lie les listes de prélèvement directement aux chariots de livraison physiques et aux limites des contenants. Un chariot est automatiquement marqué comme `Blocked` ou `Partly Kitted` jusqu'à ce que chaque pièce requise soit disponible en quantités complètes d'emballage, garantissant que seuls des kits prêts à la production à 100 % atteignent la ligne de production.

### 5. Les Rebuts Invisibles Corrompant Silencieusement le Planning de Demain (Dérive Comptable-Physique du Stock)
- **La Réalité Objective :** Chaque usine produit occasionnellement des rebuts, des pièces déformées ou des rejets de réglage. Lorsqu'un soudeur met au rebut 4 équerres et prend discrètement 4 pièces supplémentaires du bac Kanban sans les enregistrer, votre tableur devient inexact de 4 unités. Sur un seul mois, les rebuts non enregistrés créent un « stock fantôme » massif — votre ordinateur indique que vous avez des pièces en rayon alors que le bac est complètement vide.
- **Comment la Logique Excel le Corrige (Déstockage Automatisé de la Production et des Rebuts) :** À la fin de chaque équipe, vous saisissez à la fois les unités bonnes terminées et les pièces rebutées dans le journal. Le classeur déduit automatiquement l'utilisation BOM théorique *plus* la quantité exacte de rebuts de votre stock en direct, gardant vos chiffres numériques verrouillés sur la réalité physique sans recomptage manuel quotidien.

---

## Comparaison : Tableurs Manuels Ad-Hoc vs Système Excel MRP Automatisé en Atelier

| Dimension Opérationnelle | Tableurs de Stock Manuels (Formules Défectueuses et Estimations) | Ce Système Excel MRP et de Préparation de Kits Automatisé (Logique Dynamique Pré-Construite) |
| :--- | :--- | :--- |
| **Configuration et Maintenance des Formules** | **Heures de Débogage Manuel de `VLOOKUP` :** L'insertion de nouvelles lignes ou références de pièces casse les références de cellules, nécessitant un glissement constant de formules et des corrections manuelles. | **Coller et Démarrer sans Maintenance :** Construit avec des formules natives à tableau dynamique Excel qui s'étendent et recalculent automatiquement dès que vous collez vos données. |
| **Détection des Manques de Composants** | **Arrêts de Ligne en Cours d'Équipe :** Les ordres de travail semblent prêts au niveau assemblage parent, et les pièces enfants manquantes ne sont découvertes par les opérateurs qu'au réglage des gabarits. | **Éclatement de BOM et Déduction Avant l'Équipe :** Les plannings d'équipe se décomposent automatiquement en besoins individuels de pièces, révélant les déficits exacts avant que le travail n'atteigne l'atelier. |
| **Suivi de l'Emplacement des En-Cours de Production (WIP)** | **Aveuglement du Stock à Colonne Unique :** Les pièces paraissent disponibles dans le stock total de l'usine, pendant que les manutentionnaires perdent du temps à chercher entre rayonnages, allées et cabines. | **Visibilité Multi-Étapes des Emplacements Physiques :** Sépare clairement le stock détenu dans les **supermarchés Kanban**, chargé sur les **chariots de livraison** ou préparé aux **postes de soudage**. |
| **Planification de la Fabrication Amont** | **Expédition Verbale et Gestion de Crise :** Les cellules de découpe laser, de pliage de tôle et d'usinage CNC sont interrompues par des notes papier urgentes et des demandes en direct. | **Signaux Automatisés de Réapprovisionnement par Traction :** Les algorithmes de manque catégorisent les priorités de réapprovisionnement (`Normal`, `Warning`, `Critical`) et regroupent les tâches par centre de travail amont. |
| **Préparation de Kits en Bord de Ligne et Expédition des Chariots** | **Kits Partiels et Encombrement de l'Atelier :** Les chariots sont poussés vers les postes avec des composants manquants, causant des accumulations de WIP et du temps de changement de série gaspillé. | **Contrôle Strict de Préparation des Kits :** Les manifestes de prélèvement appliquent les quantités d'emballage standard (SPQ) et marquent les kits de chariot comme `Ready`, `Partly Kitted` ou `Blocked` avant expédition. |
| **Rebuts et Exactitude du Stock** | **Dérive du Stock Fantôme :** Les soldes de stock se désynchronisent des bacs physiques en quelques jours en raison de rebuts de soudage non enregistrés, de retouches et de substitutions en atelier. | **Déstockage Automatisé par Équipe :** Les clôtures d'équipe et les journaux de rebuts alimentent directement le moteur de consommation, actualisant les soldes nets du supermarché en temps réel. |
| **Coût et Sécurité des Données** | **Coût de Main-d'Œuvre Caché Élevé ou SaaS Coûteux :** Soit gaspiller plus de 10 heures par semaine à réparer des feuilles manuelles, soit payer des milliers par an pour des sièges ERP/MES cloud. | **Achat Unique et Confidentialité 100 % Locale :** Payez une fois, réutilisez pour toujours sur votre ordinateur de bureau local avec une **garantie de remboursement de 30 jours** et zéro exposition de données cloud. |

---

## À Qui S'Adresse Cet Outil : Rôles de Fabrication, Scénarios de Recherche et Cas d'Usage d'Ateliers à la Commande

### Correspondance Rôle-Flux de Travail (Trouvez Votre Cas d'Usage Exact)

- **Propriétaires de Petites Usines, Responsables d'Ateliers à la Commande et Planificateurs Débutants** recherchant un **modèle Excel facile à utiliser de suivi de stocks et de production de fabrication** : Arrêtez de dépendre des plannings sur tableau blanc et de la mémoire. Collez vos commandes et laissez le tableur pré-construit vous dire exactement quoi fabriquer et préparer aujourd'hui.
- **Planificateurs de Production, Ordonnanceurs Maîtres et Répartiteurs d'Atelier** cherchant un **modèle Excel de planification quotidienne de production et suivi de capacité par équipe** : Équilibrez les objectifs quotidiens d'assemblage entre cellules de soudage robotisées et cabines TIG/MIG manuelles tout en vérifiant la disponibilité à 100 % des composants avant de lancer les ordres de travail.
- **Planificateurs Matières, Contrôleurs de Stocks et Acheteurs** ayant besoin d'un **modèle Excel de MRP léger et calculatrice d'éclatement de BOM multi-niveaux** : Traduisez les plannings d'assemblages parents en demande exacte de pièces enfants, suivez la couverture de stock de sécurité et générez des priorités claires de réapprovisionnement amont en quelques secondes.
- **Responsables de Magasin, Ingénieurs Lean et Équipes de Logistique Interne (Milk-Run)** cherchant un **tableur de stock Kanban et checklist de préparation de chariots en bord de ligne** : Standardisez les emplacements des bacs de supermarché, les tailles d'emballage des contenants et les états de chargement des chariots afin que les manutentionnaires livrent des kits complets au point d'utilisation.
- **Chefs d'Équipe de Soudage, Responsables de Fabrication et Superviseurs d'Équipe** nécessitant une **feuille de suivi des en-cours de production (WIP) et tableau de bord de manques en atelier** : Vérifiez la préparation des kits de poste en 1 minute lors des transmissions d'équipe et enregistrez la production réelle et les rebuts sans toucher aux formules complexes.
- **Ingénieurs Industriels et Analystes des Opérations de Fabrication** cherchant un **classeur de contrôle de production personnalisable à tableaux dynamiques Microsoft 365** : Déployez un système de décision local transparent et sans macro (`no VBA`) qui comble le fossé entre les exports ERP hebdomadaires et l'exécution quotidienne en atelier.

### Scénarios d'Usine Courants Où Ce Modèle Fait Gagner des Heures Chaque Semaine

1. **Vous En Avez Assez du Surdimensionnement des Logiciels ERP/MRP :** Votre entreprise ne peut pas justifier un déploiement ERP/MES de plus de 20 000 $, ou votre ERP existant est trop rigide pour gérer les changements de planning de soudage équipe par équipe et la préparation de chariots en atelier.
2. **Vos Commandes de Haute Saison Croissent Plus Vite Que Votre Tableur :** Le volume de commandes augmente, et la vérification manuelle croisée de 50 assemblages contre 500 pièces individuelles découpées au laser, pliées et usinées cause des erreurs humaines coûteuses.
3. **Vous Avez Besoin d'un Outil Hors Ligne et Sans Macro Que la DSI Ne Bloquera Pas :** Parce que le classeur utilise des **fonctions natives à tableau dynamique Excel 2021+ / Microsoft 365** avec zéro macro VBA, il s'ouvre proprement sur les ordinateurs d'entreprise standard sans fenêtres contextuelles de sécurité ni exigences de connexion cloud.

---

## Industries de Fabrication Cibles et Périmètre du Système

### Environnements de Fabrication Idéaux
Ce modèle est spécialement conçu pour la **fabrication discrète à Haute Mixité, Faible Volume (HMLV)**, la fabrication métallique sur mesure et les ateliers d'assemblage par lots, notamment :
- **Ateliers à la Commande de Soudage et de Fabrication Métallique** (Cellules de Soudage MIG, TIG, par Points et Robotisées)
- **Ateliers de Tôlerie** (Découpe Laser, Poinçonnage à Tourelle, Pliage sur Presse Plieuse CNC)
- **Usines de Sous-Assemblage de Machines Lourdes, Agricoles et de Travaux Publics**
- **Fournisseurs Automobiles Tier-2 / Tier-3 d'Emboutissage, de Châssis et d'Équerres Structurelles**
- **Fabricants d'Enceintes Industrielles Sur Mesure, de Rayonnages, de Remorques et d'Acier Structurel**

### Périmètre du Système et Limites Opérationnelles
Pour garder le classeur rapide, transparent et immédiatement utilisable par quiconque dès le premier jour, il est **volontairement ciblé** :
- **Ce Qu'il Est :** Un classeur d'exécution tactique plug-and-play qui relie les plannings quotidiens d'équipe, les calculs de pièces BOM multi-niveaux, les soldes des bacs Kanban, les listes de préparation de chariots et le déstockage par équipe dans Microsoft Excel.
- **Ce Qu'il N'Est Pas :** Ce n'est ni un grand livre comptable, ni un remplacement complet d'ERP d'entreprise (comme SAP ou NetSuite), ni un contrôleur automatique de robots PLC/AGV, ni une plateforme SCADA de capteurs machines en temps réel.

---

## À Propos de l'Architecture et de Theseus Workshop

La plupart des tableurs d'usine échouent parce qu'ils sont construits comme des cimetières de données statiques où les utilisateurs passent plus de temps à réparer des cellules défaillantes qu'à prendre des décisions opérationnelles. 

Ce projet est développé par **[Theseus Workshop](https://theseusworkshop.com?utm_source=github&utm_medium=GitHub%20README)** selon une philosophie d'ingénierie stricte : **« Utilité pure. Zéro superflu. »** Chaque modèle est conçu comme un système d'aide à la décision autonome et à faible surcharge, gouverné par une question pratique unique :

> *« Quels chiffres opérationnels exacts faut-il connecter dès maintenant pour qu'un dirigeant ou un planificateur puisse coller ses données et prendre la bonne décision d'ordonnancement, d'achat ou de tarification en moins de 60 secondes ? »*

En reliant **Plans de Production par Équipe → Besoins de BOM Multiniveaux → Stock du Supermarché Kanban → Logistique de Préparation des Chariots → Déstockage de la Production Réelle et des Rebuts** en une seule boucle de calcul automatisée, cette boîte à outils offre à votre atelier une visibilité de niveau entreprise dans un fichier Excel familier qui vous appartient pour toujours.

### Explorer d'Autres Boîtes à Outils de Décision Métier Prêtes à l'Emploi et Modèles Excel

Vous recherchez d'autres modèles Microsoft Excel automatisés, sans VBA, pour la fabrication, l'estimation des coûts, le contrôle de trésorerie et la gestion des opérations ?

- 🛒 **[Obtenez ce Modèle Excel de Contrôle des Flux Matières en Atelier et de MRP (.xlsx) sur Gumroad (Garantie de Remboursement de 30 Jours)](https://theseusworkshop.com/l/qnojv?utm_source=github&utm_medium=GitHub%20README)**
- 🌐 **[Visitez la Boutique Officielle Theseus Workshop (theseusworkshop.com) pour Parcourir Toutes les Boîtes à Outils Excel de Décision Métier, les Estimateurs de Coûts et les Tableaux de Bord Financiers](https://theseusworkshop.com?utm_source=github&utm_medium=GitHub%20README)**
- 🖥️ **[Testez la Démo Interactive Gratuite dans le Navigateur du Système de Contrôle des Flux Matières en Atelier](https://hyvoid.github.io/shop-floor-mrp-kanban-excel-system/)**


## Détails Techniques

<details>
<summary>Pour les relecteurs techniques, praticiens Excel et collaborateurs fabrication</summary>

<details>
<summary><strong>Architecture du Classeur</strong></summary>

Le classeur proposé contient quatre modules fonctionnels et dix feuilles de calcul. Chaque feuille a une responsabilité définie, séparant la configuration, les données de référence, la planification, les calculs, l'exécution logistique, le retour d'information et la surveillance.

| Module | Feuille | Responsabilité |
|---|---|---|
| Système et Données de Référence | `01_SYS` | Paramètres opérationnels centraux, seuils, dictionnaires de validation et réglages partagés |
| Système et Données de Référence | `02_MST_Part` | Données de référence des pièces individuelles, source de fabrication, emplacement supermarché, emballage et paramètres de stock |
| Système et Données de Référence | `03_MST_BOM` | Relations assemblage soudé-piece et consommation standard des composants |
| Système et Données de Référence | `04_MST_Station` | Définitions des postes robotisés/manuels et affectations des chariots |
| Planification et Moteur | `05_PLN_Shift` | Planning de production au niveau équipe |
| Planification et Moteur | `06_ENG_Demand` | Éclatement de BOM et demande de matières au niveau composant |
| Exécution et Logistique | `07_INV_Super` | Stock du supermarché, consommation, ruptures et réapprovisionnement |
| Exécution et Logistique | `08_LOG_Trolley` | Chargement des chariots, expédition, livraison et préparation des kits |
| Retour d'Information et Contrôle | `09_ACT_Report` | Production réelle, rebuts et reporting de production |
| Retour d'Information et Contrôle | `10_DSH_Board` | Atteinte de la production, préparation des postes, exposition aux ruptures et surveillance logistique |

<details>
<summary><strong>Flux de Données de Bout en Bout</strong></summary>

```text
01_SYS: Parameters and Thresholds
                  |
                  v
02_MST_Part ---- 03_MST_BOM ---- 04_MST_Station
                  |
                  v
           05_PLN_Shift
                  |
                  v
           06_ENG_Demand
             /          \
            v            v
     07_INV_Super   08_LOG_Trolley
            |            |
            v            v
     Upstream Supply   Welding Stations
                         |
                         v
                  09_ACT_Report
                         |
                         v
                  Inventory Recalculation
                         |
                         v
                  10_DSH_Board
```

Le schéma représente le flux de contrôle prévu. Le rapprochement réel des stocks dépend des formules implémentées, des enregistrements de transactions tenus par les opérateurs et de la validation des données sources.

</details>

</details>

<details>
<summary><strong>Principes de Conception Fondamentaux</strong></summary>

<details>
<summary><strong>1. Séparer les entrées, les calculs et les sorties</strong></summary>

Les données de référence et les entrées opérationnelles sont maintenues dans des feuilles désignées. Les feuilles de calcul dérivent les besoins en matières et les états de contrôle. Les feuilles de surveillance présentent la situation opérationnelle résultante.

Cette séparation facilite l'identification de l'origine d'un problème : données sources, calcul ou processus d'exécution physique.

</details>

<details>
<summary><strong>2. Utiliser des Tableaux Excel pour les enregistrements extensibles</strong></summary>

Les listes de transactions opérationnelles doivent utiliser des Tableaux Excel (`ListObject`) avec des noms de table stables tels que `tbl_Part`, `tbl_BOM`, `tbl_ShiftPlan`, `tbl_Inventory` et `tbl_ProductionReport`.

Les références structurées sont préférées pour l'agrégation au niveau des lignes car elles s'étendent avec la table. Les noms ci-dessus sont des conventions d'implémentation recommandées ; la spécification n'établit pas qu'un classeur fini contienne déjà ces noms de table exacts.

</details>

<details>
<summary><strong>3. Utiliser les tableaux dynamiques pour les listes générées</strong></summary>

Les fonctions Microsoft 365 telles que `FILTER`, `UNIQUE`, `SORT` et `XLOOKUP` peuvent générer et transformer des listes sans copier manuellement les formules sur chaque ligne.

Les formules à tableau dynamique doivent être placées là où leurs plages de débordement restent dégagées. Les fonctions d'agrégation scalaires telles que `SUMIFS` et `COUNTIFS` doivent utiliser des références structurées lorsque c'est approprié.

</details>

<details>
<summary><strong>4. Centraliser les paramètres opérationnels</strong></summary>

Les seuils, zones tampons et autres règles métier doivent être maintenus dans la couche de configuration plutôt que dupliqués comme constantes inexpliquées dans tout le classeur.

La conception fournie mappe les paramètres clés sur `01_SYS!D4:D13`. Les formules doivent référencer ces valeurs configurées de manière cohérente, et les changements de paramètres doivent être testés contre les calculs affectés.

</details>

<details>
<summary><strong>5. Préférer les exceptions explicites aux hypothèses silencieuses</strong></summary>

Les références de pièces manquantes, les relations BOM invalides, les données d'emplacement incomplètes et les matières indisponibles doivent produire des états d'exception reconnaissables.

Un enregistrement manquant ou invalide ne doit pas être interprété silencieusement comme une disponibilité confirmée. Un état opérationnel doit distinguer un vrai zéro d'une valeur qui ne peut pas être calculée de manière fiable.

</details>

</details>

<details>
<summary><strong>Module 1 — Système et Données de Référence</strong></summary>

<details>
<summary><strong>Feuille `01_SYS` — Paramètres et Seuils</strong></summary>

Cette feuille définit la configuration partagée utilisée par les calculs en aval.

| Cellule | Paramètre | Valeur par défaut de la spécification | Objectif opérationnel |
|---|---|---:|---|
| `D4` | `CFG_CURR_SYM` | `¥` | Symbole d'affichage de la devise |
| `D5` | `CFG_QTY_UNIT` | `PCS` | Unité de quantité de matière de base |
| `D6` | `CFG_SHIFTS_PER_DAY` | `2` | Nombre d'équipes planifiées par jour |
| `D7` | `CFG_SHIFT_HOURS` | `8.0` | Heures standard par équipe |
| `D8` | `CFG_SAFE_BUFFER_PCT` | `0.15` | Zone tampon générale de stock de sécurité |
| `D9` | `CFG_REPL_EMERG_DAYS` | `0.50` | Seuil de réapprovisionnement d'urgence |
| `D10` | `CFG_KIT_FULL_PCT` | `1.00` | Seuil de kit entièrement prêt |
| `D11` | `CFG_KIT_WARN_PCT` | `0.80` | Seuil d'alerte de préparation partielle |
| `D12` | `CFG_TROLLEY_MAX_SNP` | `12` | Nombre maximal de caisses d'emballage standard par chariot |
| `D13` | `CFG_SCRAP_TOLERANCE` | `0.02` | Tolérance de taux de rebut |

Ce sont des valeurs par défaut de référence issues de la spécification d'implémentation, et non des normes universelles de fabrication. Elles doivent être validées par rapport à l'emballage réel, la consommation, les délais de réapprovisionnement et les pratiques de l'atelier avant tout usage opérationnel.

Les dictionnaires de validation spécifiés pour cette feuille comprennent :

- Sources de fabrication : Laser, Pliage et Usinage.
- Types de poste : Robot et Manuel.
- États de réapprovisionnement : Normal, Replenish et Urgent.
- États de chariot : Loading, In-Transit et Delivered.

La spécification définit également des sorties d'affichage et de validation des paramètres dans les colonnes F et G.

**Formule illustrative de tableau dynamique — étiquettes d'affichage des paramètres**

```excel
=C4:C13 & " : " & D4:D13 & " (" & E4:E13 & ")"
```

Saisissez la formule en `F4` dans une feuille compatible Microsoft 365, la zone de débordement prévue étant dégagée.

**Note d'implémentation :** La formule de validation d'exemple de la spécification source utilise des expressions de tableau avec `AND` et `ROW`. Ces expressions doivent être revues pour un comportement compatible tableau avant déploiement. Une formule qui renvoie un état de validation incorrect n'est pas un contrôle adéquat simplement parce qu'elle est dynamique.

</details>

<details>
<summary><strong>Feuille `02_MST_Part` — Données de Référence des Pièces Individuelles</strong></summary>

La fiche article maintient les attributs nécessaires pour identifier, localiser et réapprovisionner chaque composant individuel.

| Champ | Objectif |
|---|---|
| ID de Pièce | Identifiant unique de pièce |
| Nom de Pièce | Description lisible pour le métier |
| Source de Fabrication | Laser, Pliage ou Usinage |
| Spécification / Matière | Spécification physique pour identification |
| Unité | Unité de quantité standard |
| Emplacement Supermarché par Défaut | Adresse de stockage physique |
| Nombre d'Emballages Standard (SNP) | Quantité d'emballage standard |
| Consommation Quotidienne Moyenne | Base de consommation |
| Stock de Sécurité | Zone tampon calculée arrondie à un multiple d'emballage |
| Stock Maximum | Plafond de stock de référence |
| Statut d'Activation | Indicateur de complétude des données de référence |

L'implémentation de référence permet environ 500 pièces individuelles. Les identifiants proposés `P-1001` à `P-1500` sont des exemples illustratifs plutôt qu'une exigence d'utiliser ce schéma de numérotation.

**Calcul du stock de sécurité**

```excel
=IF(A4:A503="","",
   CEILING.MATH(
      H4:H503*(1+'01_SYS'!$D$8),
      G4:G503
   )
)
```

Cette formule calcule une base de consommation tamponnée et arrondit le résultat au multiple supérieur de la quantité d'emballage standard.

La spécification définit le stock maximum comme le double du stock de sécurité calculé :

```excel
=IF(A4:A503="","",I4:I503*2)
```

**Considérations d'implémentation importantes**

- La base du stock de sécurité doit avoir une base temporelle clairement définie. La formule fournie utilise la consommation quotidienne moyenne mais ne la multiplie pas explicitement par le délai de réapprovisionnement. La zone tampon ne doit donc pas être interprétée comme une politique de stock complète basée sur les délais.
- `SNP` doit être positif avant d'être utilisé comme incrément d'arrondi.
- Les données de consommation manquantes doivent être distinguées d'une consommation réellement nulle.
- Un contrôle d'activation doit valider l'identifiant de pièce, la catégorie de source, l'emplacement et les attributs d'emballage avant que la pièce ne soit utilisée par les calculs de planification.

La formule d'activation d'exemple de la spécification est :

```excel
=IF(A4:A503="","",
   IF(
      OR(ISBLANK(F4:F503),ISBLANK(G4:G503),G4:G503<=0),
      "⚠️ Incomplete Master Data",
      "✅ ACTIVE"
   )
)
```

Ceci illustre la logique de validation prévue. Comme `OR` n'évalue pas indépendamment chaque ligne d'un tableau, la formule doit être adaptée en une implémentation ligne par ligne ou basée sur `MAP` avant d'être utilisée comme contrôle de validation en production.

</details>

<details>
<summary><strong>Feuille `03_MST_BOM` — Nomenclature des Assemblages Soudés</strong></summary>

La BOM établit quelles pièces individuelles sont consommées par chaque assemblage soudé.

| Champ | Objectif |
|---|---|
| ID d'Assemblage | Identifiant de l'assemblage soudé |
| Nom d'Assemblage | Description de l'assemblage |
| ID de Pièce | Identifiant du composant |
| Nom de Pièce | Récupéré de la fiche article |
| Source de Fabrication | Récupérée de la fiche article |
| Emplacement de Stockage par Défaut | Récupéré de la fiche article |
| Quantité par Assemblage | Quantité standard de la pièce consommée par assemblage |
| Validation de Relation | Confirme l'enregistrement de la pièce et une quantité de consommation positive |

Le périmètre de référence est d'environ 50 assemblages soudés, avec potentiellement de nombreuses lignes de BOM par assemblage. La BOM est une table de relations, pas un résumé d'une ligne par assemblage.

**Récupérer le nom de la pièce**

```excel
=IF(C4:C1500="","",
   XLOOKUP(
      C4:C1500,
      '02_MST_Part'!A4:A503,
      '02_MST_Part'!B4:B503,
      "❌ Unknown Part ID"
   )
)
```

**Récupérer la source de fabrication**

```excel
=IF(C4:C1500="","",
   XLOOKUP(
      C4:C1500,
      '02_MST_Part'!A4:A503,
      '02_MST_Part'!C4:C503,
      "❌ Missing Manufacturing Source"
   )
)
```

**Valider la relation BOM**

```excel
=IF(A4:A1500="","",
   IF(
      ISNUMBER(MATCH(C4:C1500,'02_MST_Part'!A4:A503,0)),
      IF(G4:G1500>0,"✅ Valid BOM","❌ Quantity Must Be Positive"),
      "❌ Part Not Registered"
   )
)
```

Les contrôles visés sont simples : chaque pièce référencée doit exister et chaque relation BOM active doit spécifier une quantité de consommation positive.

Pour un classeur déployé, ces formules doivent être testées pour le comportement tableau, les clés dupliquées et les enregistrements incomplets. Une fiche assemblage séparée ou une plage de recherche d'assemblage distincte est préférable à la recherche d'un nom d'assemblage contre des lignes de BOM répétées lorsque la cohérence des données ne peut pas être garantie autrement.

</details>

<details>
<summary><strong>Feuille `04_MST_Station` — Postes et Configuration des Chariots</strong></summary>

Cette feuille mappe les postes de production aux ressources logistiques internes qui les desservent.

| Champ | Objectif |
|---|---|
| ID de Poste | Identifiant unique de poste |
| Nom de Poste | Description lisible du poste |
| Type de Poste | Robot ou Manuel |
| ID de Chariot par Défaut | Chariot de transport de matières affecté |
| Capacité du Chariot | Nombre maximal de caisses d'emballage standard par chariot |
| Statut du Poste | Indicateur de planification et de préparation |
| Disponibilité du Chariot | État actuel enregistré du chariot |

La fiche postes proposée couvre environ 15–20 postes, selon l'atelier réel.

**Récupérer le dernier état enregistré du chariot**

```excel
=IF(D4:D20="","",
   XLOOKUP(
      D4:D20,
      '08_LOG_Trolley'!$D$4:$D$100,
      '08_LOG_Trolley'!$H$4:$H$100,
      "🟢 Available",
      0,
      -1
   )
)
```

L'argument de recherche inversée demande le dernier enregistrement correspondant dans la plage spécifiée. Il n'a de sens que si la clé de recherche et les conventions d'enregistrement des événements sont fiables.

Pour un usage en production, l'état actuel d'un chariot doit être dérivé d'un historique de transactions défini ou d'un enregistrement de statut unique faisant autorité. Une simple recherche de dernière correspondance ne remplace pas la validation des affectations chevauchantes, des retours non confirmés ou des identifiants de chariot dupliqués.

</details>

</details>

<details>
<summary><strong>Module 2 — Moteur de Planification et de Besoins</strong></summary>

<details>
<summary><strong>Feuille `05_PLN_Shift` — Plan de Production par Équipe</strong></summary>

Cette feuille est le point d'entrée opérationnel du planning de production.

| Champ | Objectif |
|---|---|
| Date de Production | Date d'exécution planifiée |
| ID d'Équipe | Désignation de l'équipe |
| ID de Poste | Poste de soudage cible |
| ID d'Assemblage | Assemblage soudé planifié |
| Quantité Planifiée | Production d'assemblage visée |
| Statut du Plan | Planifié, Lancé ou Terminé |
| Nom d'Assemblage | Description d'assemblage récupérée |
| Type de Poste | Classification de poste récupérée |
| Types de Pièces Requises | Nombre de composants BOM distincts |
| Quantité Totale de Pièces | Quantité totale de composants requise |
| Clé de Plan Unique | Clé composite pour les contrôles de plans dupliqués |

Une clé de plan peut combiner la date de production, l'équipe, le poste et l'assemblage. Cependant, la définition métier doit déterminer si plusieurs lignes pour le même assemblage et poste sont interdites ou si elles doivent être agrégées. Une clé composite seule ne garantit pas cette politique.

**Récupérer le nom de l'assemblage**

La spécification source fournit un modèle de recherche basé sur l'identifiant d'assemblage. Dans une implémentation en production, utilisez une fiche assemblage unique comme source de recherche plutôt qu'un identifiant d'assemblage répété dans une table de relations BOM.

```excel
=IF(D4:D100="","",
   XLOOKUP(
      D4:D100,
      AssemblyMaster[Assembly ID],
      AssemblyMaster[Assembly Name],
      "❌ Unknown Assembly"
   )
)
```

`AssemblyMaster` est un nom de table recommandé pour ce modèle d'implémentation. Il doit être créé et renseigné avant que la formule puisse être utilisée.

Les validations de planification doivent rejeter ou signaler :

- Les identifiants de poste inconnus.
- Les identifiants d'assemblage inconnus.
- Les quantités planifiées non positives.
- Les identifiants d'équipe invalides.
- Les plans dupliqués ou conflictuels selon la politique d'ordonnancement choisie.
- Les plans dont la BOM requise est incomplète ou invalide.

</details>

<details>
<summary><strong>Feuille `06_ENG_Demand` — Moteur de Besoins en Matières</strong></summary>

Le moteur de besoins traduit les plans de production au niveau assemblage en exigences de pièces individuelles.

Sa séquence de calcul est :

1. Lire les enregistrements valides du plan de production.
2. Sélectionner les lignes de BOM applicables à chaque assemblage planifié.
3. Multiplier les quantités d'assemblage planifiées par la quantité standard de chaque pièce par assemblage.
4. Conserver le contexte de date, équipe, poste, assemblage et pièce pour chaque enregistrement de demande.
5. Agréger les besoins lorsque la vue de contrôle des stocks nécessite un total au niveau pièce.
6. Comparer la demande à la mesure de stock disponible définie.
7. Signaler les ruptures et exposer les résultats aux flux de réapprovisionnement et de logistique.

Pour une quantité d'assemblage planifiée \(Q_a\), et une consommation standard de composant \(B_{a,p}\), la demande brute de la pièce \(p\) est :

\[
D_p=\sum_a Q_a B_{a,p}
\]

La sommation s'applique au périmètre du plan de production sélectionné. Si le périmètre est une équipe et un poste, seuls les plans appartenant à cette équipe et ce poste doivent contribuer au résultat.

**Modèle de calcul illustratif**

```excel
=PlannedAssemblyQty*QtyPerAssembly
```

Pour un classeur réel, le moteur de besoins doit utiliser une relation explicite entre les enregistrements de plan et les lignes de BOM. Une recherche directe est insuffisante lorsqu'un assemblage contient plusieurs pièces composantes.

Le moteur doit conserver suffisamment de détails pour répondre à quatre questions distinctes :

- Quelle pièce est requise ?
- Combien d'unités sont requises ?
- Quelle équipe et quel poste créent le besoin ?
- Quel assemblage et quelle relation BOM ont généré la demande ?

Ce détail est essentiel lorsque la même pièce individuelle est partagée par plusieurs assemblages ou postes de production.

**La demande brute n'est pas la demande nette de réapprovisionnement.** La demande brute représente les quantités de composants impliquées par le plan de production. Le réapprovisionnement net doit également prendre en compte la position de stock définie, les matières déjà affectées à d'autres besoins, les quantités entrantes confirmées et toute consommation approuvée ou ajustement de stock.

L'équation exacte de disponibilité et ses garanties sont traitées dans la spécification de la couche d'exécution en Partie 3.

</details>

</details>

<details>
<summary><strong>Module 3 — Stock du Supermarché et Exécution Logistique</strong></summary>

<details>
<summary><strong>Feuille `07_INV_Super` — Surveillance du Stock du Supermarché</strong></summary>

Cette feuille consolide la position des matières et traduit les ruptures en signaux de réapprovisionnement.

| Colonne | Champ | Objectif |
|---|---|---|
| A | ID de Pièce | Identifiant de la pièce individuelle |
| B | Nom de Pièce | Description lisible de la pièce |
| C | Source de Fabrication | Laser, Pliage ou Usinage |
| D | Stock Initial | Inventaire reporté |
| E | Quantité Reçue | Réceptions de matières amont |
| F | Consommation Cumulée | Consommation de matières issue des rapports de production |
| G | Stock Physique Disponible | Inventaire physique enregistré actuel |
| H | Stock Réservé / Entrant | Inventaire associé à des réservations ou mouvements entrants, tel que défini par l'implémentation |
| I | Stock Net Disponible | Inventaire disponible pour le calcul de planification concerné |
| J | Quantité Requise | Référence de demande pour le périmètre de planification sélectionné |
| K | Quantité de Manque | Déficit de matière calculé |
| L | Statut de Réapprovisionnement | Normal, Replenish ou Urgent |
| M | Quantité de Réapprovisionnement Suggérée | Quantité recommandée alignée sur l'emballage |
| N | Ajustement d'Inventaire Physique | Correction de stock approuvée |

La spécification distingue l'inventaire physique de l'inventaire net disponible. Cette distinction est essentielle : une matière déjà engagée pour un besoin de production ne doit pas être traitée comme librement disponible pour satisfaire un autre besoin.

**Inventaire physique disponible**

L'équation de stock prévue est :

\[
\text{On-hand}=\text{Opening Stock}+\text{Receipts}+\text{Adjustments}-\text{Consumption}
\]

**Inventaire net disponible**

Le traitement exact des quantités entrantes et réservées doit être défini de manière cohérente. Un modèle de contrôle recommandé est :

\[
\text{Net Available}
=
\text{On-hand}
-\text{Reservations}
+\text{Eligible Confirmed Inbound}
\]

Les quantités entrantes ne doivent être incluses que lorsque la politique opérationnelle autorise explicitement leur comptabilisation dans la disponibilité. Les réceptions non confirmées ne doivent pas être traitées comme du stock physiquement reçu.

**Calcul du manque**

Pour une quantité requise \(R\) et une quantité disponible \(A\) :

\[
\text{Shortage}=\max(0,R-A)
\]

Il s'agit d'une relation de planification, pas d'une politique complète de réapprovisionnement. Les besoins en stock de sécurité, la demande future et les affectations de matières doivent être considérés séparément pour déterminer la quantité finale de réapprovisionnement.

**Statut de Réapprovisionnement**

La configuration de référence utilise trois états :

| État | Signification opérationnelle |
|---|---|
| `Normal` | Aucune intervention de réapprovisionnement n'est actuellement indiquée par la règle configurée |
| `Replenish` | Le stock a franchi le seuil de réapprovisionnement défini |
| `Urgent` | Une condition de rupture critique nécessite une attention immédiate |

Le seuil d'urgence est configuré dans `01_SYS!D9`. Le déclencheur exact doit être relié à une base temporelle clairement définie et à un taux de consommation. La valeur de référence `0.50` ne doit pas être traitée comme une règle d'urgence universelle sans valider son unité et sa signification opérationnelle.

**Quantité de Réapprovisionnement Suggérée**

La spécification propose d'arrondir le réapprovisionnement à un multiple d'emballage standard et de prendre en compte à la fois la quantité requise et le stock de sécurité.

```excel
=LET(
   safeStock,
      XLOOKUP(
         A4,
         '02_MST_Part'!$A$4:$A$503,
         '02_MST_Part'!$I$4:$I$503,
         0
      ),
   snp,
      XLOOKUP(
         A4,
         '02_MST_Part'!$A$4:$A$503,
         '02_MST_Part'!$G$4:$G$503,
         1
      ),
   rawNeed,
      MAX(0,(J4+safeStock)-(I4+E4)),
   IF(rawNeed>0,CEILING.MATH(rawNeed,snp),0)
)
```

Il s'agit d'un modèle de formule de référence, et non d'une formule prête à l'emploi vérifiée pour chaque configuration de stock. Avant déploiement, confirmez si la colonne E représente des réceptions déjà incluses dans la colonne I. Si la même quantité entrante est comptée deux fois, la recommandation de réapprovisionnement sera sous-évaluée.

Une implémentation en production doit également distinguer les réceptions physiques, les quantités entrantes éligibles, les réservations et les ajustements de stock plutôt que de s'appuyer sur des champs de stock ambigus.

</details>

<details>
<summary><strong>Feuille `08_LOG_Trolley` — Chargement des Chariots et Tâches de Livraison</strong></summary>

Cette feuille convertit les besoins en matières en tâches logistiques internes exploitables.

| Champ | Objectif |
|---|---|
| ID de Tâche | Identifiant unique de tâche de livraison |
| ID d'Équipe | Équipe de production cible |
| ID de Poste | Destination de livraison |
| ID de Chariot | Chariot de transport affecté |
| ID de Pièce | Matière livrée |
| Quantité Chargée | Quantité planifiée pour la tâche |
| Statut du Kit | Ready, Partly ou Blocked |
| Statut de la Tâche | Loading, In-Transit ou Delivered |
| Confirmation d'Expédition | Confirmation du chargement physique et du départ |
| Heure de Confirmation de Livraison | Heure d'arrivée enregistrée |
| Personne Livrant | Opérateur responsable |
| Alerte de Capacité | Contrôle de capacité d'emballage du chariot |

**Identifiant de tâche**

```excel
=IF(B4:B1000="","",
   "TSK-"&TEXT(ROW(A4:A1000)-3,"0000")
)
```

Le modèle de référence génère un identifiant formaté basé sur la ligne de la feuille. Pour une traçabilité durable, utilisez une clé de tâche unique qui n'est pas réutilisée après tri, suppression ou reconstruction de la liste des tâches.

**Affecter le chariot par défaut**

```excel
=IF(C4:C1000="","",
   XLOOKUP(
      C4:C1000,
      '04_MST_Station'!$A$4:$A$20,
      '04_MST_Station'!$D$4:$D$20,
      "TR-DEFAULT"
   )
)
```

Un identifiant de chariot de repli ne doit pas être interprété comme une affectation physique confirmée. Les correspondances poste-chariot inconnues doivent produire une exception visible et nécessiter une résolution avant expédition.

**Préparation du kit**

La spécification fournie définit la préparation complète à 100 % et un seuil d'alerte à 80 %.

```excel
=LET(
   availStock,
      XLOOKUP(
         E4,
         '07_INV_Super'!$A$4:$A$503,
         '07_INV_Super'!$I$4:$I$503,
         0
      ),
   kitRatio,IF(F4>0,availStock/F4,1),
   fullPct,'01_SYS'!$D$10,
   warnPct,'01_SYS'!$D$11,
   IF(
      kitRatio>=fullPct,
      "Ready",
      IF(kitRatio>=warnPct,"Partly","Blocked")
   )
)
```

Cette formule illustre la logique de seuil pour un besoin en matière individuel. Un calcul de préparation de kit au niveau production **doit évaluer toutes les pièces requises pour le poste et l'équipe cibles**. La quantité disponible d'une seule pièce divisée par sa quantité chargée n'est pas, à elle seule, la preuve que le kit entier est complet.

La barrière d'expédition doit donc utiliser l'ensemble complet des besoins, valider que chaque pièce requise est disponible en quantité suffisante et empêcher l'affectation d'une matière à plusieurs tâches.

**Contrôle de capacité du chariot**

```excel
=LET(
   snp,
      XLOOKUP(
         E4,
         '02_MST_Part'!$A$4:$A$503,
         '02_MST_Part'!$G$4:$G$503,
         1
      ),
   boxes,CEILING.MATH(F4/snp),
   maxBoxes,'01_SYS'!$D$12,
   IF(
      boxes>maxBoxes,
      "Overload Warning",
      "Within Capacity"
   )
)
```

Il s'agit d'un contrôle de référence basé sur des multiples d'emballage. L'implémentation doit établir si la capacité est mesurée par ligne de pièce, par chariot ou sur l'ensemble du chargement. Un chariot réel peut contenir plusieurs types de pièces ; valider chaque ligne indépendamment ne garantit pas que la charge combinée reste dans sa capacité physique.

Une tâche de chariot doit progresser à travers des états opérationnels explicites. Les confirmations d'expédition, de livraison et de retour ou de disponibilité doivent être enregistrées comme des événements séparés lorsque l'atelier les exige.

</details>

</details>

<details>
<summary><strong>Module 4 — Retour d'Information et Suivi de la Production</strong></summary>

<details>
<summary><strong>Feuille `09_ACT_Report` — Reporting de Production Réelle</strong></summary>

Cette feuille enregistre la production réelle des postes de soudage robotisés et manuels.

| Champ | Objectif |
|---|---|
| ID de Rapport | Enregistrement de rapport unique |
| Date de Rapport | Date réelle de déclaration |
| ID d'Équipe | Équipe de production |
| ID de Poste | Poste déclarant |
| ID d'Assemblage | Assemblage soudé terminé |
| Quantité Bonne Réelle | Production acceptée |
| Quantité de Rebut | Assemblages rejetés enregistrés |
| Notes d'Arrêt | Notes de rupture, d'équipement ou d'autres interruptions |
| Quantité Planifiée | Objectif de production correspondant |
| Quantité d'Écart | Production bonne réelle moins plan |
| Alarme de Rebut | Contrôle de taux de rebut configuré |
| Statut de Validation | Indicateur de validité de l'enregistrement |

**Récupérer le plan de production correspondant**

```excel
=IF(A4:A2000="","",
   XLOOKUP(
      TEXT(B4:B2000,"yyyymmdd")&"_"&
      C4:C2000&"_"&
      D4:D2000&"_"&
      E4:E2000,
      '05_PLN_Shift'!$K$4:$K$100,
      '05_PLN_Shift'!$E$4:$E$100,
      0
   )
)
```

La clé de plan doit utiliser la même normalisation de date et de texte des deux côtés. Le format de date, les espaces de fin et les codes incohérents de poste ou d'assemblage peuvent empêcher l'appariement d'enregistrements valides.

Si plusieurs rapports sont autorisés pour un plan de production, l'objectif ne doit pas être compté plusieurs fois comme si chaque rapport était un plan séparé. Une implémentation en production doit agréger la production réelle par la clé de planification complète.

**Écart de production**

```excel
=IF(A4:A2000="","",F4:F2000-I4:I2000)
```

Un résultat positif indique une production supérieure à l'objectif correspondant ; un résultat négatif indique un déficit.

**Surveillance du taux de rebut**

```excel
=IF(A4:A2000="","",
   LET(
      totalUnits,F4:F2000+G4:G2000,
      scrapRate,IF(totalUnits>0,G4:G2000/totalUnits,0),
      tolRate,'01_SYS'!$D$13,
      IF(
         totalUnits=0,
         "No Output",
         IF(scrapRate>tolRate,"Scrap Above Tolerance","Within Tolerance")
      )
   )
)
```

Le taux de rebut de référence est calculé comme le rebut divisé par la production bonne plus le rebut. La tolérance par défaut est de 2 %, mais le seuil réel doit être approuvé pour le procédé de fabrication concerné.

**Validation de production**

Un rapport ne doit être accepté que lorsque le poste et l'assemblage existent dans leurs données de référence et que toutes les quantités respectent les contraintes définies.

Au minimum :

- La production bonne doit être non négative.
- La quantité de rebut doit être explicitement saisie, avec zéro en l'absence de rebut.
- Le poste et l'assemblage doivent être enregistrés.
- Le rapport doit avoir un identifiant unique.
- La date, l'équipe et le poste doivent correspondre à un contexte de déclaration valide.
- Les enregistrements dupliqués ou conflictuels doivent être signalés avant que leur consommation ne soit appliquée au stock.

</details>

<details>
<summary><strong>Consommation de Production et Retour d'Information sur les Stocks</strong></summary>

Les rapports de production réelle sont la source de retour d'information du modèle de matières.

Pour un assemblage avec une production bonne \(Q_g\), un rebut enregistré \(Q_s\), et une quantité de BOM par assemblage \(B_p\), une règle possible de consommation brute est :

\[
C_p=(Q_g+Q_s)\times B_p
\]

Cette équation suppose que les assemblages acceptés comme rejetés consomment la quantité standard complète de chaque composant. Lorsque les modes de rebut réels diffèrent, l'atelier doit définir la politique de consommation appropriée.

Le modèle de stock doit utiliser une politique cohérente pour :

- La consommation théorique basée sur la BOM.
- La production bonne et les rebuts.
- Les sorties réelles de matières, si enregistrées séparément.
- Les annulations et corrections.
- La prévention des rapports dupliqués.

Un rapport ne doit pas réduire le stock plus d'une fois. La spécification source décrit le retour d'information de consommation basé sur la BOM, mais n'établit pas un registre de transactions complet avec des identifiants d'écriture immuables. Ce contrôle doit être implémenté et testé avant que le classeur ne soit utilisé comme registre de stock faisant autorité.

</details>

<details>
<summary><strong>Feuille `10_DSH_Board` — Tableau de Bord des Opérations en Atelier</strong></summary>

Le tableau de bord consolide les informations opérationnelles pour les superviseurs de production et répartiteurs.

La zone de filtres de référence contient :

| Cellule | Filtre |
|---|---|
| `B2` | Date de production |
| `D2` | Équipe |
| `F2` | Poste cible ou tous les postes |

Les zones proposées de KPI et de surveillance comprennent :

- L'atteinte de la production d'équipe.
- Le taux de livraison de kit complet.
- Le nombre de postes avec préparation de matières bloquée.
- Le nombre de types de pièces touchés par des ruptures.
- Les quantités de réapprovisionnement par source de fabrication amont.
- Une liste classée des ruptures les plus critiques.

**Atteinte de la production**

```excel
=LET(
   targetDate,$B$2,
   targetShift,$D$2,
   totPlan,
      SUMIFS(
         '05_PLN_Shift'!$E$4:$E$100,
         '05_PLN_Shift'!$A$4:$A$100,targetDate,
         '05_PLN_Shift'!$B$4:$B$100,targetShift
      ),
   totAct,
      SUMIFS(
         '09_ACT_Report'!$F$4:$F$2000,
         '09_ACT_Report'!$B$4:$B$2000,targetDate,
         '09_ACT_Report'!$C$4:$C$2000,targetShift
      ),
   IF(totPlan=0,"No Production Plan",TEXT(totAct/totPlan,"0.0%"))
)
```

Il s'agit d'un calcul de référence. Il doit être étendu au filtre de poste et à la politique de statut de plan sélectionnée. La production réelle doit être agrégée par rapport au périmètre de plan approprié pour éviter des pourcentages trompeurs.

**Taux de kit complet**

```excel
=LET(
   targetShift,$D$2,
   totTasks,COUNTIF('08_LOG_Trolley'!$B$4:$B$1000,targetShift),
   readyTasks,
      COUNTIFS(
         '08_LOG_Trolley'!$B$4:$B$1000,targetShift,
         '08_LOG_Trolley'!$G$4:$G$1000,"Ready"
      ),
   IF(totTasks=0,"No Delivery Tasks",readyTasks/totTasks)
)
```

Cette métrique dépend de la granularité des tâches. Si une tâche de livraison de chariot unique représente une pièce plutôt qu'un kit de poste complet, le résultat est un taux de préparation des tâches, pas un taux de kit de poste complet. L'étiquette du tableau de bord doit refléter la mesure implémentée.

**Nombre de postes bloqués**

Comptez les postes uniques avec un statut bloqué dans l'équipe sélectionnée. Compter les lignes de matières bloquées au lieu des postes uniques surestimera le nombre de postes touchés.

**Nombre de pièces en rupture**

Comptez les pièces enregistrées uniques dont le manque calculé est positif. Excluez les lignes vides et les enregistrements de référence invalides.

**Résumé du réapprovisionnement amont**

Agrégez la quantité de réapprovisionnement suggérée par source de fabrication :

- Découpe laser.
- Pliage.
- Usinage.

Cela donne aux équipes de production amont une vue consolidée de la quantité requise par source. Le résultat reste un signal de planification tant que le travail amont n'a pas été accepté, produit et physiquement reçu.

**Classement des ruptures**

La conception de référence utilise des fonctions de tableau dynamique telles que `FILTER`, `SORT`, `HSTACK` et `CHOOSEROWS` pour générer une liste classée des ruptures.

Un classement valide doit inclure l'ID de pièce, la description, la source de fabrication ou l'emplacement de stockage, la quantité disponible, la quantité de manque et la quantité de réapprovisionnement suggérée. La clé de tri doit être explicitement définie et ne pas confondre le manque absolu le plus grand avec le risque le plus urgent de délai avant rupture de stock.

</details>

</details>

<details>
<summary><strong>Référence des Formules</strong></summary>

Les groupes suivants résument les principaux modèles de calcul utilisés dans l'ensemble de l'architecture proposée.

<details>
<summary><strong>Formules de configuration et de données de référence</strong></summary>

| Objectif | Formule ou fonction | Objectif de contrôle |
|---|---|---|
| Affichage des paramètres | `TEXT`, concaténation | Rendre les réglages partagés lisibles |
| Validation des paramètres | `IF`, `ISNUMBER`, contrôles de plage | Signaler les réglages manquants ou invalides |
| Récupération des données de référence | `XLOOKUP` | Récupérer les noms, catégories de source et emplacements |
| Validation de relation BOM | `MATCH`, `ISNUMBER` | Empêcher les relations de pièces non enregistrées |
| Arrondi du stock de sécurité | `CEILING.MATH` | Aligner les zones tampons de stock sur les quantités d'emballage |
| Agrégation basée sur les tables | `SUMIFS`, `COUNTIFS` | Agréger les enregistrements opérationnels avec des critères explicites |

</details>

<details>
<summary><strong>Formules de planification et de stock</strong></summary>

| Objectif | Formule ou fonction | Objectif de contrôle |
|---|---|---|
| Expansion du plan vers la BOM | Quantité du plan × utilisation BOM | Calculer la demande brute de composants |
| Agrégation de demande au niveau pièce | `SUMIFS` | Combiner la demande sur le périmètre de planification défini |
| Calcul du manque | `MAX(0, required - available)` | Empêcher les valeurs de manque négatives |
| Quantité de réapprovisionnement | `LET`, `XLOOKUP`, `CEILING.MATH` | Appliquer le stock de sécurité et l'arrondi d'emballage |
| Classification du réapprovisionnement | `IF` avec seuils configurés | Exposer les états Normal, Replenish et Urgent |
| Classement des ruptures | `FILTER`, `SORT`, `CHOOSEROWS` | Prioriser les exceptions de matières visibles |

</details>

<details>
<summary><strong>Formules de logistique, de reporting et de tableau de bord</strong></summary>

| Objectif | Formule ou fonction | Objectif de contrôle |
|---|---|---|
| Identification des tâches | `TEXT`, `ROW` | Générer des références de tâches lisibles |
| Correspondance poste-chariot | `XLOOKUP` | Récupérer la ressource de transport configurée |
| Classification de préparation | `LET`, comparaisons de seuils | Classer la préparation de livraison |
| Appariement du plan de production | `XLOOKUP` avec clé composite | Récupérer la quantité du plan correspondant |
| Écart de production | Production réelle − plan | Quantifier l'écart de production |
| Surveillance des rebuts | `LET`, calcul de ratio | Comparer le rebut à la tolérance configurée |
| Agrégation des KPI | `SUMIFS`, `COUNTIFS` | Résumer les résultats de production et de livraison |

</details>

**Compatibilité des formules :** La conception utilise la fonctionnalité de tableau dynamique de Microsoft 365, y compris `FILTER`, `LET`, `HSTACK` et `CHOOSEROWS`. La disponibilité varie selon la version d'Excel. Validez chaque formule dans l'environnement cible avant publication.

Les formules de ce README sont des implémentations de référence et des modèles de conception, et non une affirmation qu'un classeur entièrement testé a déjà été livré. Lorsqu'une expression utilise un nom de table recommandé, un champ fictif ou une plage illustrative, cette référence doit être mappée sur la structure réelle du classeur.

</details>

<details>
<summary><strong>Règles de Validation</strong></summary>

| Champ ou contrôle | Règle | Comportement d'erreur requis |
|---|---|---|
| ID de Pièce | Doit être unique et non vide pour les enregistrements actifs | Signaler les doublons ou identifiants manquants |
| Source de fabrication | Doit être Laser, Pliage ou Usinage | Rejeter ou signaler les catégories non prises en charge |
| Emplacement supermarché | Doit être présent pour une pièce active | Marquer les données de référence comme incomplètes |
| SNP | Doit être numérique et supérieur à zéro | Bloquer l'arrondi d'emballage et le lancement des tâches |
| Consommation quotidienne moyenne | Doit être numérique et avoir une base temporelle définie | Signaler les entrées manquantes ou incohérentes |
| ID de Pièce de la BOM | Doit exister dans la fiche article | Signaler une relation BOM invalide |
| Quantité de la BOM | Doit être supérieure à zéro pour les relations actives | Empêcher les calculs de demande invalides |
| ID de Poste | Doit exister dans la fiche postes | Signaler les références de poste invalides |
| Affectation de chariot | Doit correspondre à une ressource enregistrée | Bloquer les affectations non confirmées |
| Quantité planifiée | Doit être un entier positif pour un plan de production lancé | Signaler les quantités de production invalides |
| ID d'Équipe | Doit correspondre au dictionnaire d'équipes configuré | Rejeter les valeurs d'équipe non prises en charge |
| Unicité du plan | Doit suivre la politique de plans dupliqués approuvée | Signaler les enregistrements dupliqués ou conflictuels |
| Réception de stock | Doit refléter les quantités physiquement reçues selon la politique d'écriture définie | Empêcher que des réceptions non confirmées soient traitées comme du stock |
| Ajustement de stock | Doit être enregistré avec un motif et un processus de correction autorisé | Signaler les corrections non prises en charge |
| ID de rapport de production | Doit être unique | Empêcher les écritures de consommation dupliquées |
| Quantité bonne réelle | Doit être non négative | Signaler les rapports de production invalides |
| Quantité de rebut | Doit être saisie explicitement et non négative | Rejeter les enregistrements de rebut incomplets ou invalides |
| Contexte du rapport de production | Date, équipe, poste et assemblage doivent être valides | Signaler les rapports non appariés ou ambigus |
| Préparation de kit | Doit évaluer l'ensemble complet des besoins pour le périmètre visé | Bloquer l'expédition lorsque la matière requise n'est pas disponible |
| Capacité du chariot | Doit évaluer la charge combinée par rapport à la capacité réelle | Signaler les charges surchargées |
| Sortie de tableau dynamique | La plage de débordement doit rester dégagée | Résoudre `#SPILL!` avant d'utiliser la sortie |
| Entrées de formules | Doivent utiliser des types numériques ou texte valides comme défini | Signaler les nombres au format texte et les identifiants mal formés |
| Dénominateurs du tableau de bord | Doivent être valides pour le périmètre de reporting sélectionné | Afficher un état explicite sans plan ni tâche plutôt que de laisser croire à une performance normale |

<details>
<summary><strong>Contrôles d'Intégrité Inter-Modules</strong></summary>

Avant tout déploiement opérationnel, vérifiez que :

1. Chaque assemblage actif de plan de production possède une BOM valide.
2. Chaque pièce de la BOM correspond à une pièce enregistrée avec une source et un emplacement valides.
3. Chaque besoin de production peut être retracé jusqu'à son plan et sa relation BOM.
4. La disponibilité du stock utilise un traitement cohérent du stock physique, des réservations, des quantités entrantes et des ajustements.
5. Chaque rapport de production contribue à la consommation de stock au plus une fois.
6. Un chariot ne peut être traité comme disponible tant qu'il a une affectation active non résolue.
7. Une livraison n'est pas marquée comme terminée simplement parce qu'une tâche a été expédiée.
8. Les métriques du tableau de bord utilisent des dates, équipes, filtres de poste et règles d'agrégation cohérents.
9. Les changements de paramètres se propagent à chaque calcul dépendant visé.
10. Les entrées manquantes ou invalides restent distinguables des valeurs réellement nulles.

La spécification d'architecture d'origine fournit une vérification croisée au niveau des champs et une carte de référence des paramètres. Ces documents établissent la couverture de conception prévue ; ils ne doivent pas être interprétés comme une preuve indépendante de tests d'exécution pour un classeur fini.

</details>

</details>

<details>
<summary><strong>Trois Pièges qui Font Chuter Même les Planificateurs de Production Expérimentés</strong></summary>

<details>
<summary><strong>Piège 1 — Un solde de stock positif ne prouve pas la préparation à la production</strong></summary>

**Décision :** Lancer un plan de soudage parce que le supermarché affiche un stock total suffisant.

**Défaut caché :** Le solde de stock ne tient pas compte de tous les besoins concurrents, des réservations ni des contraintes de livraison physique.

**Pourquoi le raisonnement échoue :** Le stock peut exister en agrégé alors que les pièces spécifiques requises pour un poste ne sont pas disponibles en quantité requise ou sont engagées ailleurs.

**Approche corrigée :** Calculez la demande par pièce et par périmètre de planification, dérivez la disponibilité nette et vérifiez le kit complet avant expédition.

**Implication de la décision :** Lancez le plan seulement après avoir évalué la préparation des matières par rapport aux besoins réels en composants.

<details>
<summary><strong>Référence de calcul</strong></summary>

```text
Gross demand = Planned assembly quantity × BOM usage

Shortage = MAX(0, Required quantity − Net available quantity)

Ready = Every required part satisfies the defined availability condition
```

</details>

</details>

<details>
<summary><strong>Piège 2 — Une tâche de livraison n'est pas un kit complet</strong></summary>

**Décision :** Expédier un chariot parce que l'une de ses lignes de matière semble prête.

**Défaut caché :** Le calcul de préparation évalue une pièce ou une ligne individuelle plutôt que tous les composants nécessaires au poste.

**Pourquoi le raisonnement échoue :** Une seule pièce critique manquante peut empêcher la production même lorsque le reste du chargement est disponible.

**Approche corrigée :** Agrégez la préparation sur l'ensemble complet des composants requis, vérifiez l'emballage et la capacité du chariot, et validez l'état d'expédition.

**Implication de la décision :** Un chariot n'est prêt à l'expédition que lorsque les règles réelles au niveau kit sont satisfaites et l'affectation est valide.

<details>
<summary><strong>Référence de calcul</strong></summary>

```text
For each required part:
    Check required quantity against eligible available quantity.

For the complete kit:
    Check every required part.
    Check combined trolley capacity.
    Check trolley assignment and current status.

Dispatch:
    Permit only when the configured release conditions are satisfied.
```

</details>

</details>

<details>
<summary><strong>Piège 3 — La production déclarée peut créer une fausse confiance dans le stock</strong></summary>

**Décision :** Se fier au solde de stock actualisé immédiatement après la saisie d'un rapport de production.

**Défaut caché :** Le rapport peut être dupliqué, incomplet, sans plan correspondant ou incohérent avec la politique de consommation.

**Pourquoi le raisonnement échoue :** Appliquer le même rapport à plusieurs reprises peut déduire plusieurs fois la même consommation théorique. Un traitement incorrect des rebuts peut également fausser la position de stock.

**Approche corrigée :** Validez l'identifiant du rapport et le contexte de production, définissez les règles de consommation de production bonne et de rebuts, et utilisez un processus d'écriture contrôlé.

**Implication de la décision :** Les mouvements de stock doivent suivre des événements de production validés, avec des corrections traçables jusqu'à leurs enregistrements d'origine.

<details>
<summary><strong>Référence de calcul</strong></summary>

```text
Theoretical component consumption
    = Reported consumed assembly quantity × BOM usage

Apply the consumption once per validated report.
Reconcile inventory corrections through an explicit adjustment process.
```

</details>

</details>

</details>

<details>
<summary><strong>Scénario d'Exemple</strong></summary>

Prenons une équipe hypothétique planifiée pour produire 20 assemblages soudés. Chaque assemblage nécessite quatre unités de la Pièce P-1001 et deux unités de la Pièce P-1002.

| Entrée | Pièce P-1001 | Pièce P-1002 |
|---|---:|---:|
| Quantité d'assemblage planifiée | 20 | 20 |
| Utilisation BOM par assemblage | 4 | 2 |
| Besoin brut | 80 | 40 |
| Stock net disponible éligible | 70 | 50 |
| Manque initial | 10 | 0 |

Le plan crée un besoin de 80 unités de P-1001 et de 40 unités de P-1002. P-1001 manque de 10 unités, tandis que P-1002 dispose d'un stock suffisant pour le besoin planifié.

Supposons que la quantité d'emballage standard configurée pour P-1001 est de 10 unités. Si aucune demande supplémentaire ni engagement de stock ne modifie le calcul, le manque brut immédiat peut être arrondi à un emballage standard de 10 unités.

Cela ne prouve pas automatiquement que l'équipe est prête. Le planificateur doit également considérer la politique de stock de sécurité, la demande de tout autre poste, les réceptions confirmées, les réservations et si la matière physique peut être livrée avant le début de la production.

La recommandation opérationnelle est donc de signaler P-1001 pour réapprovisionnement, de vérifier la source et le moment de livraison, et d'évaluer le kit complet du poste avant expédition. Une fois la matière amont reçue et le chariot livré, la production peut se dérouler sous les contrôles de lancement normaux de l'atelier.

Si 18 assemblages bons et un assemblage rebuté sont ensuite déclarés, la politique de consommation basée sur la BOM doit déterminer si la consommation de matières est calculée à partir de 19 assemblages au total ou d'un autre enregistrement de sortie vérifié. En supposant que les assemblages bons comme rebutés consomment la quantité standard complète, la consommation de P-1001 serait de \(19 \times 4 = 76\) unités et celle de P-1002 de \(19 \times 2 = 38\) unités.

Ce sont des chiffres illustratifs pour expliquer la logique de contrôle, et non des résultats observés ou une sortie de classeur testée.

</details>

<details>
<summary><strong>Procédure Opérationnelle — Cycle de Contrôle Quotidien en Cinq Étapes</strong></summary>

1. **Avant l'équipe :** Saisissez le plan de production, vérifiez ses références de données de référence et lancez les tâches valides.
2. **Avant le début de la production :** Examinez les besoins, identifiez les ruptures et communiquez les besoins de réapprovisionnement au Laser, au Pliage et à l'Usinage.
3. **Avant l'expédition :** Prélevez les matières du supermarché, vérifiez la complétude du kit et la capacité du chariot, et enregistrez les confirmations d'expédition et de livraison.
4. **Pendant l'équipe :** Enregistrez la production bonne, les rebuts et les exceptions opérationnelles. Validez les rapports avant d'appliquer la consommation.
5. **À la fin de l'équipe :** Examinez l'atteinte de la production, l'exposition aux ruptures et la performance de livraison. Rapprochez les écarts de stock physique par des ajustements documentés.

</details>

<details>
<summary><strong>Maintenance des Données et Dépannage</strong></summary>

**Ajout d'enregistrements :** Ajoutez de nouvelles entrées dans les Tableaux Excel désignés pour que les références structurées s'étendent. Maintenez les plages de débordement des tableaux dynamiques dégagées.

**Modification des paramètres :** Modifiez les valeurs de configuration approuvées dans `01_SYS` plutôt que d'éditer des constantes métier dans les formules en aval.

**Protection des formules :** Séparez les cellules de saisie opérateur des cellules calculées. Protégez les zones de formules lorsque c'est approprié et documentez qui peut modifier les données de référence.

**Résolution de `#SPILL!` :** Identifiez la plage de débordement obstruée et supprimez le contenu de cellules non intentionnel. Ne supprimez pas une formule nécessaire pour masquer l'erreur.

**Investigation de résultats inchangés :** Vérifiez le mode de calcul, le statut du plan, les clés de recherche et la validation des entrées. Confirmez que le plan concerné a été lancé si l'implémentation filtre sur les plans lancés.

**Investigation d'un stock de sécurité inchangé :** Confirmez que le paramètre est stocké sous forme de nombre et non de texte, que la formule référence la cellule prévue et que le classeur a recalculé.

**Investigation de codes de rapport invalides :** Vérifiez les identifiants de poste et d'assemblage par rapport à leurs données de référence. Utilisez des listes contrôlées lorsque disponibles et supprimez les espaces non intentionnels ou les différences de format.

</details>

<details>
<summary><strong>Compatibilité, Échelle et Collaboration</strong></summary>

La conception source cible Microsoft 365 ou Excel 2021 et versions ultérieures, sous réserve de la disponibilité des fonctions dans la version installée. Les versions antérieures d'Excel peuvent ne pas prendre en charge les fonctions de tableau dynamique et de recherche requises.

La spécification d'implémentation fournit ces repères d'échelle de planification :

- Fiche article individuelle : environ 500 pièces, avec une plage de conception proposée de 1 à 2 000.
- Assemblages soudés : environ 50, avec une plage de conception proposée de 1 à 500.
- Historique des plans de production et rapports : une ligne directrice recommandée au niveau classeur de 50 000 lignes cumulées maximum avant d'envisager l'archivage.

Ce sont des objectifs de conception, et non des garanties de performance évaluées de manière indépendante. La vitesse réelle de recalcul dépend des formules, de la structure du classeur, du matériel et du volume de données.

OneDrive ou SharePoint peuvent prendre en charge une visualisation et une édition partagées légères. Pour les enregistrements opérationnels, une responsabilité centralisée de la saisie des plans de production et de la saisie des réceptions de stock est recommandée pour réduire les mises à jour conflictuelles.

</details>

<details>
<summary><strong>Périmètre et Limites d'Implémentation</strong></summary>

Le classeur est destiné à fournir une couche légère de contrôle des flux matières en atelier. Il n'implémente pas :

- L'implantation physique de l'usine et la conception des flux d'ingénierie industrielle.
- Le contrôle au niveau PLC des AGV ou chariots automatisés.
- La télémétrie automatique des équipements via IoT ou SCADA.
- Des algorithmes complets de planification et d'ordonnancement avancés.
- Une base de données transactionnelle ou un registre de stock multi-utilisateurs de niveau entreprise, sauf implémentation séparée.
- La confirmation automatique des mouvements physiques sans mécanisme défini de retour opérateur ou équipement.

Ces limites doivent être prises en compte pour décider si le cadre convient à un environnement de production particulier.

</details>

</details>

--

## Autres Outils de Cette Série

Découvrez d'autres outils légers d'aide à la décision pour la fabrication et les opérations sur le profil GitHub du propriétaire du projet :

- **[project-time-tracking-excel-template](https://github.com/HyVoid/project-time-tracking-excel-template)** — Quels projets dérivent en coûts de temps ou en marge ? — Analysez l'allocation des coûts de main-d'œuvre et la rentabilité à travers un portefeuille de projets actifs.
- **[Caf-audit-tool-for-efficient-reviews](https://github.com/HyVoid/Caf-audit-tool-for-efficient-reviews)** — Quelle dimension opérationnelle coûte le plus de revenus et la fuite financière exige-t-elle une intervention immédiate ? — Convertissez des observations structurées de café en score de diagnostic pondéré, estimation de fuite financière et liste d'actions correctives priorisées.
- **[Restaurant-Menu-Configuration-Modifier-Pricing-Toolkit](https://github.com/HyVoid/Restaurant-Menu-Configuration-Modifier-Pricing-Toolkit)** — Le menu est-il tarifié de façon cohérente pour toutes les combinaisons de modificateurs et de tailles, ou des erreurs de prix cachées attendent-elles d'apparaître ? — Centralisez la configuration du menu du restaurant, les règles de tarification des modificateurs et les données de menu prêtes pour le POS dans une seule source de vérité gouvernée.
- **[wedding-planner](https://github.com/HyVoid/wedding-planner)** — Quelles tâches, quels coûts et quels délais de préparation de mariage nécessitent une coordination ? — Coordonnez la gestion des prestataires, le suivi des tâches et le contrôle du budget à travers les workflows de préparation de mariage.
- **[manufacturing-capacity-planning-template](https://github.com/HyVoid/manufacturing-capacity-planning-template)** — La capacité de main-d'œuvre est-elle utilisée efficacement ou l'opération a-t-elle besoin d'un autre effectif ou d'une autre planification ? — Transformez les plans de production et les données de main-d'œuvre en taux d'utilisation de capacité, allocation des coûts de main-d'œuvre et décisions de dotation.
- **[cin7-excel-reporting-template](https://github.com/HyVoid/cin7-excel-reporting-template)** — Que disent les données opérationnelles de Cin7 sur la performance de l'entreprise ? — Traduisez les données d'inventaire et d'opérations Cin7 en insights exploitables sur la performance métier.
- **[employee-performance-dashboard-excel](https://github.com/HyVoid/employee-performance-dashboard-excel)** — Quels employés et quels projets sont à risque d'échec de livraison et où la direction doit-elle intervenir avant que les échéances ne soient dépassées ? — Connectez la planification annuelle du travail, le suivi d'exécution, l'évaluation pondérée des performances et le reporting de direction en un seul flux opérationnel continu.
- **[rental-property-management-excel-template](https://github.com/HyVoid/rental-property-management-excel-template)** — Quels logements perdent des revenus à cause d'une vacance non détectée et quels changements de locataires nécessitent une action immédiate ? — Transformez les enregistrements de réservation en état d'occupation en temps réel, intelligence de vacance et alertes opérationnelles sur l'ensemble d'un portefeuille locatif.
- **[workforce-planning-payroll-excel-dashboard](https://github.com/HyVoid/workforce-planning-payroll-excel-dashboard)** — L'organisation épuise-t-elle sa capacité annuelle de main-d'œuvre plus vite que prévu et quels départements nécessitent une intervention avant que les coûts d'heures supplémentaires ne s'envolent ? — Consolidez les dépenses de paie, les heures contractuelles annuelles, les ratios d'heures supplémentaires et l'utilisation de la main-d'œuvre en un seul cadre de planification de capacité inter-départements.
- **[warehouse-billing-excel-template](https://github.com/HyVoid/warehouse-billing-excel-template)** — Les facturations d'entrepôt sont-elles exactes et traçables jusqu'aux enregistrements opérationnels sous-jacents ? — Calculez les frais de stockage, de manutention et de transport en relevés de facturation clients auditables.
- **[commercial-hvac-plumbing-bid-estimator](https://github.com/HyVoid/commercial-hvac-plumbing-bid-estimator)** — Quel est un prix d'offre défendable et auditable pour ce projet MEP commercial ? — Estimez et suivez les coûts des projets MEP commerciaux, du métré à la soumission finale de l'offre.
- **[landed-cost-calculator-excel](https://github.com/HyVoid/landed-cost-calculator-excel)** — Pourquoi le coût de revient rendu (landed cost) au niveau SKU de mon ERP diffère-t-il de celui de l'API du transitaire, et quelle méthode d'allocation est à l'origine de l'érosion de la marge ? — Rapprochez et comparez les calculs de coût rendu avec un modèle de praticien pour retracer les différences d'allocation des coûts au niveau SKU jusqu'à leur logique comptable sous-jacente.
- **[hoa-budget-accounting-spreadsheet](https://github.com/HyVoid/hoa-budget-accounting-spreadsheet)** — Nos fonds HOA sont-ils alloués correctement et sommes-nous en bonne voie par rapport à notre budget ? — Catégorisez les transactions et générez des rapports d'écarts budgétaires pour la gestion financière HOA.
- **[homeowner-management-excel-template](https://github.com/HyVoid/homeowner-management-excel-template)** — Quel est mon véritable coût total de propriété, toutes dépenses cachées incluses ? — Calculez le coût total de propriété en intégrant le prêt immobilier, les services publics, l'entretien et les améliorations capitalistiques.
- **[crew-scheduling-excel-template](https://github.com/HyVoid/crew-scheduling-excel-template)** — Mon équipe actuelle pourra-t-elle absorber la charge de travail lorsque les dates de projets se décalent et se chevauchent ? — Prévoyez la demande d'équipes et les déficits de dotation sur un horizon de 12 mois pour éclairer les décisions de planification de capacité.
- **[Schedule-Driven-Construction-Cash-Curve-Workbook](https://github.com/HyVoid/Schedule-Driven-Construction-Cash-Curve-Workbook)** — Comment la trésorerie et l'avancement planifié de mon projet de construction évolueront-ils dans le temps selon le planning ? — Convertissez les plannings de construction et les registres de postes d'offre en courbes en S automatisées, prévisions de coûts par période et suivi d'avancement planifié.

## Licence

Ce projet est spécifié sous **Licence Apache 2.0**. Reportez-vous au fichier `LICENSE` du dépôt pour les conditions applicables.



