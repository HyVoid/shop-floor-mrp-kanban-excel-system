[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Système de Contrôle des Flux Matières en Atelier : Modèle Excel de MRP, Supermarché Kanban et Planification de la Production de Soudage
<img width="1920" height="790" alt="image" src="https://github.com/user-attachments/assets/a63af286-1115-4c2c-aa06-6d7e04aba1e4" />

**Un cadre léger de contrôle des flux matières en atelier, une calculatrice d'éclatement de nomenclatures (BOM) et un suivi de logistique interne lean pour les opérations de fabrication axées sur le soudage et la tôlerie.**

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)
![Platform: Browser + Excel](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-217346)
![Tool Type: Production Control & MRP](https://img.shields.io/badge/Tool-Production%20Control%20%26%20MRP-2251FF)

**Le Système de Contrôle des Flux Matières en Atelier est un modèle gratuit de planification de production MRP accessible via navigateur et Excel, conçu pour les ateliers de tôlerie et de soudage à haute mixité et faible volume (HMLV). Il transforme les plannings de soudage par équipe en exigences exploitables de nomenclatures (BOM), signaux de réapprovisionnement de supermarché Kanban, tâches de préparation de chariots en bord de ligne et suivi de la consommation des en-cours de production (WIP)—éliminant les ruptures qui arrêtent la ligne et le chaos des tableurs sans refontes coûteuses d'ERP/MES.**

> **Accès, Démo en Direct et Disponibilité du Classeur**
>
> - **Application Web Interactive :** Gratuite, sans inscription ni installation. [Lancer la démo web interactive du Système de Contrôle des Flux Matières en Atelier](https://hyvoid.github.io/shop-floor-mrp-kanban-excel-system/) 
>   
> - **Modèle Excel de MRP Téléchargeable :** Prêt pour le suivi de production quotidien hors ligne. [Télécharger le classeur Excel de Contrôle de Production et de Réapprovisionnement Matières (.xlsx)](https://theseusworkshop.com/l/qnojv?utm_source=github&utm_medium=GitHub%20README)

---

## Capacités Principales de Suivi de Production : Cartographie des Points de Douleur vers les Solutions

Pour les responsables de production à la recherche d'un **suivi de stocks de fabrication** fiable ou d'une **feuille de contrôle des en-cours de production (WIP)**, ce cadre fait le pont entre les soldes de stocks statiques et la disponibilité des postes en temps réel :

| Point de Douleur Opérationnel en Atelier | Intention de Recherche Fréquente / Module | Comment Ce Cadre de Contrôle la Résout |
| :--- | :--- | :--- |
| **Ruptures de Composants Imprévues aux Postes de Soudage** | **Éclatement de BOM par Équipe et Calculatrice MRP** | Développe automatiquement les plannings quotidiens d'assemblage soudé via des nomenclatures (BOM) multi-composants pour calculer la demande nette de composants par équipe et par poste avant que les opérateurs ne commencent à souder. |
| **Angles Morts de Stock entre le Magasin et la Ligne** | **Suivi des Emplacements WIP et Supermarché Kanban** | Sépare les soldes comptables bruts des emplacements physiques des stocks—suivant les quantités exactes dans les zones tampons amont, les supermarchés Kanban, les chariots de matières en transit et les cellules de soudage robotisées/manuelles. |
| **Demandes de Matières en Retard vers la Fabrication Amont** | **Réapprovisionnement Automatisé et Liste Prioritaire des Manques** | Calcule les écarts nets de matières en temps réel par rapport aux stocks de sécurité et signale les commandes de réapprovisionnement urgentes pour les cellules de découpe laser, pliage CNC et usinage en amont. |
| **Chariots Expédiés sans les Pièces Critiques** | **Préparation de Kits Chariot et Préparation des Livraisons en Bord de Ligne** | Regroupe les listes de prélèvement par poste, contraintes d'emballage et capacité du chariot—attribution d'états de kit visuels explicites (`Ready`, `Partly Kitted`, `Blocked`) avant expédition. |
| **Dérive de Stock Due aux Rebuts et Retouches Non Enregistrés** | **Consommation Rétroactive des Matières Prévue vs Réelle** | Rapproche la consommation théorique de BOM de la production réelle de l'équipe et des rebuts enregistrés en atelier, recalculant dynamiquement les soldes restants du supermarché et des postes. |
| **Communication Fragmentée entre les Équipes** | **Tableau Andon et Risque Logistique Visuel en Atelier** | Consolide l'atteinte du plan d'équipe, l'exposition aux ruptures critiques, les ruptures du supermarché et les statuts des livraisons milk-run internes dans une seule tour de contrôle opérationnelle. |

---

## Tutoriel Pas à Pas : Comment Exécuter la Planification de Production Quotidienne et la Préparation des Matières

Le modèle opérationnel suit une boucle de contrôle lean de fabrication répétable en 4 étapes : configurer les paramètres, maintenir les données de référence, exécuter les calculs MRP de l'équipe et déstocker la production réelle. 

### Étape 1 : Configurer les Paramètres Globaux d'Atelier et de Réapprovisionnement
**Action :** Définissez les règles opérationnelles de base de votre atelier dans le module de Configuration.
Définissez les durées d'équipe, les équipes par jour, les stocks de sécurité, les déclencheurs de réapprovisionnement Kanban d'urgence, les seuils de préparation de kit, les limites d'emballage des chariots et les tolérances de rebut autorisées. Ces paramètres gouvernent tous les calculs en aval de **planification des besoins en matières (MRP)** et d'alertes de rupture.

### Étape 2 : Importer la Nomenclature (BOM) et les Données de Référence des Centres de Travail
**Action :** Renseignez votre catalogue de pièces de référence, le registre des postes de travail et les structures d'assemblage.
Enregistrez les composants fabriqués et achetés, les sources de fabrication amont (p. ex. laser, presse plieuse, tour), les emplacements bacs du supermarché, les quantités d'emballage standard (SPQ) et l'utilisation quotidienne moyenne (ADU). Définissez les **BOM d'assemblages soudés** parent-enfant, classifiez les cellules de soudage robotisées vs manuelles et affectez les ressources physiques de la flotte de chariots. *(Optimisé pour environ 500 références SKU individuelles et environ 50 sous-ensembles soudés).*

### Étape 3 : Saisir les Plannings de Production par Équipe pour Générer les Listes de Prélèvement
**Action :** Saisissez votre planning d'équipe quotidien pour déclencher l'éclatement automatique de la demande BOM.
Enregistrez la date de production, la plage d'équipe, la cellule de soudage cible, la référence de l'assemblage, la quantité planifiée et le statut de lancement. Le moteur de calcul développe immédiatement les quantités d'assemblage en demande au niveau composant, vérifie la **disponibilité des stocks du supermarché**, met en évidence les ruptures de pièces critiques et génère des **tâches priorisées de préparation de chariots et de livraisons milk-run**.

### Étape 4 : Déstocker la Production Réelle, Enregistrer les Rebuts et Passer au Modèle Excel Réutilisable
**Action :** Enregistrez les données d'exécution de l'atelier pour fermer la boucle de contrôle des stocks.
Enregistrez les réceptions de fabrication amont, les ajustements d'inventaire tournant, les confirmations d'expédition de chariots et les rapports d'équipes de soudage terminés (pièces bonnes + rebuts). Le modèle déstocke automatiquement les composants consommés et actualise votre position de stock en temps réel pour l'équipe suivante.

> **Prêt à passer des tests ponctuels dans le navigateur aux opérations d'usine quotidiennes ?**  
> Une fois le flux de travail validé dans le bac à sable du navigateur, **[Téléchargez le Modèle Excel Réutilisable de Contrôle des Flux Matières en Atelier (.xlsx)](https://theseusworkshop.com/l/qnojv?utm_source=github&utm_medium=GitHub%20README)** pour enregistrer vos données de référence BOM personnalisées, suivre l'écart historique multi-équipes et exécuter un contrôle de production quotidien répétable hors ligne dans Microsoft Excel.

---

## Pourquoi Utiliser un Cadre Dédié de Contrôle des Flux Matières pour la Fabrication Soudée ?

Dans un **atelier de tôlerie axé sur le soudage**, un plan directeur de production (PDP) semble souvent 100 % réalisable dans un système ERP alors que les composants physiques réellement requis au point d'utilisation manquent.

Cette rupture opérationnelle provient rarement d'un stock nul dans toute l'usine. Elle est plutôt causée par une déconnexion entre la **mixité d'assemblage de l'équipe**, les **besoins de BOM multiniveaux**, le stock physique présent dans le **supermarché Kanban** et l'état de chargement du **chariot de livraison en bord de ligne** affecté à un poste de soudage spécifique. Un registre de stock statique ne peut pas résoudre ce problème de synchronisation à quatre dimensions.

Prenons une équipe type planifiant plusieurs soudures structurales sur des cellules de soudage robotisées et des postes TIG/MIG manuels. Chaque soudure consomme un kit unique de **tôles découpées au laser, équerres pliées CNC et bagues usinées de précision**. Une seule équerre pliée manquante arrête tout l'outillage de soudage—même quand 95 % du kit est déjà préparé. Pendant ce temps, le système ERP affiche l'équerre « en stock », sans préciser si elle se trouve à la presse plieuse, en bac dans le supermarché, chargée sur un chariot ou déjà affectée à l'ordre de travail d'une autre équipe.

Ce **Système de Contrôle des Flux Matières en Atelier** relie ces points de données opérationnels isolés en un flux de travail unique et synchronisé :
1. Il traduit les objectifs de soudage de l'équipe en demande exacte au niveau composant via l'éclatement automatique de BOM.
2. Il calcule la demande nette par rapport aux soldes physiques du supermarché et aux affectations ouvertes de chariots.
3. Il génère des signaux de fabrication amont exploitables et des manifestes complets de préparation de kits avant le début de l'équipe.
4. Il rapproche la consommation théorique des soudures réellement déclarées et des rebuts pour maintenir le stock comptable aligné sur la réalité physique.

Le résultat est un **système de contrôle de production lean industrialisé dans Excel**—délivrant des décisions de flux matières cohérentes et auditables sans forcer les fabricants de petite et moyenne taille à acheter des modules MES complexes, des logiciels de flottes de véhicules à guidage automatique (AGV) ou des personnalisations ERP lourdes.

---

## Tableurs de Stock Statiques Traditionnels vs Contrôle Structuré des Flux Matières

| Dimension Opérationnelle | Sans Ce Système (Tableurs de Stock Ad-Hoc) | Avec Ce Système (Cadre Structuré de MRP et Préparation de Kits en Atelier) |
| :--- | :--- | :--- |
| **Détection des Ruptures de Composants** | **Arrêts Non Planifiés de la Ligne de Soudage :** Les ordres de travail semblent exécutables au niveau assemblage, mais les composants enfants manquants ne sont découverts par les soudeurs qu'au réglage de l'outillage. | **Éclatement et Netting de BOM Avant l'Équipe :** Les plannings d'équipe se développent automatiquement en besoins individuels de pièces, révélant les déficits exacts avant que les ordres de travail n'atteignent l'atelier. |
| **Visibilité de l'Emplacement des En-cours de Production (WIP)** | **Aveuglement du Registre de Stock :** Les pièces apparaissent disponibles dans le stock total de l'usine, mais les caristes perdent du temps à chercher entre supermarchés, allées de préparation et postes de soudage. | **Suivi d'Emplacement Multi-Étapes :** Les données de référence et les journaux logistiques ségrègent clairement le stock détenu dans les supermarchés Kanban, chargé sur les chariots de livraison ou préparé aux postes de travail. |
| **Planification de la Fabrication Amont** | **Expédition et Pompier :** Les cellules de découpe laser, pliage de tôle et usinage CNC reçoivent des demandes de réapprovisionnement urgentes via des relances verbales ou des notes papier. | **Signaux de Réapprovisionnement par Traction :** Les algorithmes de manque net catégorisent les priorités de réapprovisionnement (`Normal`, `Warning`, `Critical`) et acheminent la demande directement vers les centres de travail amont spécifiques. |
| **Préparation de Kits en Bord de Ligne et Expédition des Chariots** | **Kits Partiels et Postes Encombrés :** Les chariots arrivent aux cellules de soudage avec des jeux de pièces incomplets, causant une accumulation de WIP et des changements de poste en cours d'équipe. | **États de Préparation de Kit Verrouillés :** Les tâches de prélèvement appliquent les contraintes d'emballage standard et signalent les kits de chariot comme `Ready`, `Partly` ou `Blocked` avant l'expédition en atelier. |
| **Fiabilité du Stock et Rapprochement des Rebuts** | **Dérive Comptable-Physique du Stock :** Les soldes de stock du tableur prennent du retard sur la consommation réelle de l'atelier en raison de rebuts de soudage non déclarés, de retouches et de substitutions manuelles de matières. | **Déstockage Automatique de la Production :** Les clôtures d'équipe et les journaux de rebuts alimentent directement le moteur de consommation, actualisant dynamiquement les soldes du supermarché en temps réel. |
| **Priorisation des Goulots d'Étranglement à l'Échelle de l'Usine** | **Gestion des Postes en Silo :** Les superviseurs résolvent les ruptures cellule par cellule, masquant les goulots d'étranglement systémiques en amont et les affectations de matières conflictuelles entre équipes. | **Tour de Contrôle Centralisée en Atelier :** Un tableau de bord unifié corrèle l'atteinte des équipes, l'exposition aux ruptures de composants, la santé du supermarché et le flux logistique interne. |

---

## Utilisateurs Idéaux, Rôles de Fabrication et Cas d'Usage Industriels

### À Qui S'Adresse Cet Outil (Correspondance Rôle-Flux de Travail)

- **Planificateurs de Production et Ordonnanceurs** cherchant un **modèle Excel de planification de production par équipe** pour équilibrer les objectifs quotidiens d'assemblage soudé entre centres de travail robotisés et manuels sans créer de pénurie de matières.
- **Planificateurs Matières, Analystes de Stocks et Acheteurs** ayant besoin d'une **calculatrice légère de MRP et d'éclatement de BOM** pour traduire les plannings d'assemblages parents en demande de composants échelonnée dans le temps et priorités de réapprovisionnement amont.
- **Ingénieurs Lean, Responsables de Magasin et Équipes de Logistique Interne (Milk-Run)** cherchant un **outil de gestion de supermarché Kanban et de préparation de chariots** pour standardiser le prélèvement en bord de ligne, le chargement des contenants et la livraison au point d'utilisation.
- **Chefs d'Atelier de Soudage, Chefs d'Équipe Fabrication et Directeurs d'Usine** ayant besoin d'un **tableau de bord en temps réel des ruptures en atelier et de la visibilité WIP** pour vérifier la préparation des kits de poste avant les transmissions d'équipe et suivre la production réelle vs planifiée.
- **Ingénieurs Industriels et Praticiens Excel de la Fabrication** construisant un **système de contrôle de production personnalisable et low-code** pour combler le fossé d'exécution entre la planification ERP de haut niveau et les opérations physiques de l'atelier.

### Environnements de Fabrication Cibles et Cas d'Usage

Ce cadre est conçu spécifiquement pour la **fabrication discrète à Haute Mixité, Faible Volume (HMLV)** et les **environnements d'atelier à la commande**, notamment :
- **Sous-ensembles de Machines Lourdes, Agricoles et de Travaux Publics**
- **Ateliers de Tôlerie, Découpe Laser et Pliage sur Presse Plieuse**
- **Fournisseurs Automobiles Tier-2/Tier-3 d'Emboutissage et de Soudage Robotisé**
- **Fabricants d'Acier Structurel, de Châssis et de Caissons Sur Mesure**

### Périmètre du Système et Limites Opérationnelles

Pour préserver la vitesse, la transparence et un déploiement sans surcharge informatique, cet outil a un **périmètre volontairement limité** :
- **Ce qu'il est :** Un pont tactique d'exécution entre la planification ERP hebdomadaire/mensuelle et les mouvements de matières au niveau de l'équipe en atelier.
- **Ce qu'il n'est pas :** Il n'est **pas** un remplacement des systèmes ERP financiers d'entreprise (SAP, Oracle, NetSuite), ni un moteur complet de Planification et d'Ordonnancement Avancés (APS) à capacité finie, ni un contrôleur de flotte AGV/AMR piloté par PLC, ni une plateforme de surveillance de machines IIoT/SCADA automatisée. La conception physique de l'implantation de l'usine, l'intégration de matériels de codes-barres et la télémétrie automatique des machines restent hors du périmètre natif du classeur.

---

## À Propos de l'Architecture : le Tableur comme Système d'Aide à la Décision

La plupart des tableurs d'usine échouent parce qu'ils sont construits comme des cimetières de données statiques plutôt que comme des modèles opérationnels interconnectés. Ce projet aborde les tableurs industriels comme des **systèmes d'aide à la décision réutilisables et à faible surcharge**, gouvernés par une question d'ingénierie centrale : 

> *« Quels points de données exacts de l'atelier doivent être connectés dès maintenant pour que la prochaine décision d'ordonnancement, de préparation de kit ou de réapprovisionnement puisse être prise sans aucune ambiguïté ? »*

Le **Système de Contrôle des Flux Matières en Atelier** applique ce principe en reliant cinq couches de fabrication traditionnellement cloisonnées : **Plans de Production par Équipe → Besoins de BOM Multiniveaux → Stock du Supermarché Kanban → Logistique de Préparation des Chariots → Déstockage de la Production Réelle et des Rebuts**. 

En imposant des paramètres opérationnels centralisés, une logique de formules traçable et des indicateurs d'exception explicites, ce cadre donne aux équipes de fabrication un contrôle immédiat de la disponibilité des matières en bord de ligne—garantissant que les bonnes pièces fabriquées arrivent au bon poste de soudage sur le bon chariot, à chaque équipe.

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

## La Logique Métier et la Méthodologie

Le système repose sur un principe opérationnel simple : les plans de production doivent générer des besoins en matières, la disponibilité des matières doit contraindre l'exécution, et la production réelle doit alimenter la prochaine décision de planification.

- **La traduction des besoins basée sur la BOM** convertit les assemblages soudés planifiés en exigences de pièces individuelles. Cela révèle les ruptures de composants invisibles dans un planning limité aux assemblages et donne aux planificateurs une base plus claire pour lancer la production.
- **Le rapprochement de la position de stock** distingue le stock physique des matières déjà engagées ou attendues. Cela réduit le risque de traiter le même stock comme disponible pour plusieurs besoins de production.
- **Le réapprovisionnement basé sur des seuils** compare les besoins en matières à la position de stock définie et met en évidence les ruptures selon les règles opérationnelles configurées. Le résultat est un signal de réapprovisionnement amont priorisé plutôt qu'une alerte générique de stock.
- **La logistique interne contenairisée** relie les besoins de prélèvement de matières aux affectations de chariots, destinations de livraison, contraintes d'emballage et préparation de kits. Cela aide l'équipe logistique à se concentrer sur la matière nécessaire à chaque poste de production.
- **Le retour d'information de la production réelle** utilise les rapports de production et la politique de consommation approuvée pour actualiser la position des matières. L'atelier peut ensuite réviser ses priorités de réapprovisionnement avec des informations opérationnelles actuelles plutôt que de s'appuyer uniquement sur le plan initial.

Ensemble, ces méthodes relient la planification, le stock, la logistique et le reporting de production en un processus de contrôle quotidien répétable. Le cadre améliore la visibilité et la cohérence des décisions ; sa fiabilité dépend toujours de données de référence précises, de confirmations physiques disciplinées et de règles de calcul validées.

## Autres Outils de Cette Série

Découvrez d'autres outils légers d'aide à la décision pour la fabrication et les opérations sur le profil GitHub du propriétaire du projet :

- [HyVoid sur GitHub](https://github.com/HyVoid) — outils de tableurs pour la fabrication, la planification et les opérations.

## Licence

Ce projet est spécifié sous **Licence Apache 2.0**. Reportez-vous au fichier `LICENSE` du dépôt pour les conditions applicables.

