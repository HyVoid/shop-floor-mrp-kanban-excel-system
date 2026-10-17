[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Systeem voor Materiaalstroomregeling op de Werkvloer: Excel MRP-sjabloon, Kanban-supermarkt en lasproductieplanning
<img width="1920" height="790" alt="image" src="https://github.com/user-attachments/assets/a63af286-1115-4c2c-aa06-6d7e04aba1e4" />

**Een lichtgewicht raamwerk voor materiaalstroomregeling op de werkvloer, een rekkenlijst-ontkoppelingscalculator en een tracker voor interne lean-logistiek voor lassen-gedreven productie en metaalbewerking.**

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)
![Platform: Browser + Excel](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-217346)
![Tool Type: Production Control & MRP](https://img.shields.io/badge/Tool-Production%20Control%20%26%20MRP-2251FF)

**Het Systeem voor Materiaalstroomregeling op de Werkvloer is een gratis MRP-productieplanningssjabloon voor browser en Excel, ontworpen voor lassen- en metaalbewerkingswerkplaatsen met hoge mix en laag volume (HMLV). Het zet ploegendienst-planningen voor lasmontages om in uitvoerbare rekkenlijstvereisten (BOM), aanvulsignalen voor de Kanban-supermarkt, taken voor het samenstellen van karren naast de lijn en tracking van het verbruik van onderhanden werk (WIP)—waardoor lijnstilstand veroorzakende tekorten en spreadsheetchaos worden geëlimineerd zonder dure ERP/MES-vervangingen.**

> **Toegang, Live Demo en Beschikbaarheid van het Werkboek**
>
> - **Interactieve webapplicatie:** Gratis, zonder registratie of installatie. [Start de interactieve webdemo van het Systeem voor Materiaalstroomregeling op de Werkvloer](https://hyvoid.github.io/shop-floor-mrp-kanban-excel-system/) 
>   
> - **Downloadbaar Excel MRP-sjabloon:** Klaar voor dagelijkse offline productieopvolging. [Download het Excel-werkboek voor Productieregeling en Materiaalaanvulling (.xlsx)](https://theseusworkshop.com/l/qnojv?utm_source=github&utm_medium=GitHub%20README)

---

## Kernmogelijkheden voor Productieopvolging: Pijnpunten Koppelen aan Oplossingen

Voor productiemanagers die op zoek zijn naar een betrouwbare **voorraadtracker voor productie** of een **controlemat voor onderhanden werk (WIP)**, overbrugt dit raamwerk de kloof tussen statische voorraadsaldi en real-time gereedheid van werkplekken:

| Operationeel pijnpunt op de werkvloer | Vaak voorkomende zoekintentie / Module | Hoe dit regelraamwerk het oplost |
| :--- | :--- | :--- |
| **Onverwachte componententekorten bij laswerkplekken** | **Ploeg-niveau BOM-ontkoppeling & MRP-calculator** | Ontkoppelt dagelijkse lasmontageplanningen automatisch via meerdelige rekkenlijsten (BOM) om de nettobehoefte aan componenten per ploeg en werkplek te berekenen voordat operators beginnen met lassen. |
| **Voorraadblinde vlekken tussen magazijn en lijn** | **WIP-locatietracker & Kanban-supermarkt** | Scheidt ruwe boekhoudsaldi van fysieke voorraadlocaties—volgt exacte hoeveelheden in stroomopwaartse buffers, Kanban-supermarkten, transportkarren onderweg en robotische/handmatige lascellen. |
| **Laat-materialaanvragen naar stroomopwaartse fabricage** | **Geautomatiseerde aanvulling & prioriteitenlijst tekorten** | Berekent netto materiaaltekorten in realtime ten opzichte van veiligheidsbuffers en markeert dringende aanvulorders voor stroomopwaartse lasersnij-, CNC-kant- en verspaningscellen. |
| **Verzonden karren zonder kritieke onderdelen** | **Kar-commissionering & gereedheid van lijnaanlevering** | Groepeert picklijsten per werkplek, verpakkingbeperkingen en karcapaciteit—met expliciete visuele kit-statussen (`Ready`, `Partly Kitted`, `Blocked`) vóór verzending. |
| **Voorraadafwijking door niet-geregistreerd uitval en herstelwerk** | **Geplande versus werkelijke materiaalverbruik-terugkoppeling** | Vergelijkt theoretisch BOM-verbruik met de werkelijke ploegproductie en geregistreerde uitval op de werkvloer, en herberekent resterende supermarkt- en werkpleksaldi dynamisch. |
| **Versnipperde communicatie tussen ploegen** | **Visueel Andon- en logistiekrisicodashboard op de werkvloer** | Consolideert ploegplan-naleving, blootstelling aan kritieke tekorten, supermarktleegloop en interne milk-run leverstatussen in één operationele controlekamer. |

---

## Stapsgewijze Handleiding: Dagelijkse Productieplanning en Materiaalcommissionering Uitvoeren

Het operationele model volgt een herhaalbare lean productieregellus in 4 stappen: parameters configureren, stamgegevens beheren, ploeg-MRP-berekeningen uitvoeren en werkelijke productie terugkoppelen. 

### Stap 1: Globale werkvloer- en aanvulparameters configureren
**Actie:** Stel de basisbedrijfsregels van uw werkplaats in via het configuratiemodule.
Definieer ploegduren, ploegen per dag, veiligheidsbuffers, nood-Kanban-aanvultriggers, gereedheidsdrempels voor kits, karverpakkingslimieten en toegestane uitvaltoleranties. Deze parameters sturen alle daaropvolgende berekeningen van **material requirements planning (MRP)** en tekortmeldingen aan.

### Stap 2: Rekkenlijst (BOM) en stamgegevens van werkcentra importeren
**Actie:** Vul uw basisartikelcatalogus, het werkplekregister en de montagestructuren in.
Registreer vervaardigde en ingekochte componenten, stroomopwaartse fabricagebronnen (bijv. laser, kantpers, draaibank), supermarktbinlocaties, standaardverpakkingshoeveelheden (SPQ) en gemiddeld dagelijks verbruik (ADU). Definieer bovenliggende/onderliggende **las-BOM's**, classificeer robotische versus handmatige lascellen en wijs de fysieke karvloot-bronnen toe. *(Geoptimaliseerd voor ca. 500 afzonderlijke SKU's en ca. 50 las-ondermontages).*

### Stap 3: Ploeg-productieplanningen invoeren om picklijsten te genereren
**Actie:** Voer uw dagelijkse ploegplanning in om automatische BOM-behoefte-ontkoppeling te activeren.
Registreer de productiedatum, het ploegvenster, de doellascel, het montageartikelnummer, de geplande productiehoeveelheid en de vrijgavestatus. De berekeningsmotor ontkoppelt montagematen onmiddellijk naar behoefte op componentniveau, controleert de **beschikbaarheid van supermarktvoorraad**, benadrukt kritieke onderdeelsTekorten en genereert geprioriteerde **taken voor kar-samenstelling en milk-run-levering**.

### Stap 4: Werkelijke productie terugkoppelen, uitval registreren en overstappen op het herbruikbare Excel-sjabloon
**Actie:** Registreer de uitvoeringsgegevens van de werkvloer om de voorraadregellus te sluiten.
Registreer stroomopwaartse fabricage-ontvangsten, cyclustellingcorrecties, bevestigingen van karverzending en afgeronde lasploegrapporten (goede onderdelen + uitval). Het model boekt verbruikte componenten automatisch terug en actualiseert uw realtime voorraadpositie voor de volgende ploeg.

> **Klaar om van eenmalige browsertests over te gaan naar dagelijkse fabrieksactiviteiten?**  
> Zodra u de werkstroom in de browsersandbox heeft gevalideerd, **[downloadt u het herbruikbare Excel-sjabloon voor materiaalstroomregeling op de werkvloer (.xlsx)](https://theseusworkshop.com/l/qnojv?utm_source=github&utm_medium=GitHub%20README)** om uw eigen BOM-stamgegevens op te slaan, historische variatie over meerdere ploegen te volgen en een herhaalbare dagelijkse productieregeling offline in Microsoft Excel uit te voeren.

---

## Waarom een specifiek raamwerk voor materiaalstroomregeling voor lasfabricage?

In een **lassen-gedreven metaalbewerkingswerkplaats** lijkt een hoofdproductieschema (MPS) vaak 100% uitvoerbaar in een ERP-systeem, terwijl de werkelijk benodigde fysieke componenten op de gebruikslocatie ontbreken.

Deze operationele storing komt zelden door een afwezigheid van voorraad in de hele fabriek. Het wordt eerder veroorzaakt door een ontkoppeling tussen de **montagemix van de ploeg**, **meerlagen-BOM-vereisten**, de fysieke voorraad in de **Kanban-supermarkt** en de laadstatus van de **aanleverkar naast de lijn** die aan een specifieke laspost is toegewezen. Een statisch voorraadregister kan dit viervoudige synchronisatieprobleem niet oplossen.

Denk aan een typische ploeg die meerdere gelaste constructies verdeelt over robotische lascellen en handmatige TIG/MIG-stations. Elke lasconstructie trekt een unieke kit van **lasergesneden platen, CNC-gebogen beugels en nauwkeurig verspaande bussen**. Eén ontbrekende gebogen beugel legt de hele lasopstelling stil—zelfs wanneer 95% van de kit al klaarstaat. Ondertussen toont het ERP-systeem de beugel als "op voorraad", zonder te verduidelijken of die bij de kantpers ligt, in de supermarkt is opgeslagen, op een kar staat of al is toegewezen aan de werkorder van een andere ploeg.

Dit **Systeem voor Materiaalstroomregeling op de Werkvloer** verbindt die geïsoleerde operationele datapunten in één gesynchroniseerde werkstroom:
1. Het vertaalt ploeg-lasdoelen via automatische BOM-ontkoppeling naar exacte behoefte op componentniveau.
2. Het verrekent de behoefte met de fysieke supermarktsaldi en open kar-toewijzingen.
3. Het genereert uitvoerbare stroomopwaartse fabricsignalen en volledige kitmanifesten voordat de ploeg begint.
4. Het stemt theoretisch verbruik af op gerapporteerde lasconstructies en uitval om de boekhoudvoorraad in lijn te houden met de fysieke realiteit.

Het resultaat is een **geproduceerd lean productieregelingsysteem in Excel**—het levert consistente, controleerbare materiaalstroombeslissingen zonder dat kleine en middelgrote fabrikanten complexe MES-modules, software voor automatisch geleide voertuigvloten (AGV) of zware ERP-maatwerkoplossingen hoeven aan te schaffen.

---

## Traditionele statische voorraadspreadsheets versus gestructureerde materiaalstroomregeling

| Operationele dimensie | Zonder dit systeem (ad-hoc voorraadspreadsheets) | Met dit systeem (gestructureerd werkvloer-MRP- en kitraamwerk) |
| :--- | :--- | :--- |
| **Detectie van componententekorten** | **Ongeplande stilstand van de laslijn:** Werkorders lijken op montagenaiveau uitvoerbaar, maar ontbrekende onderliggende componenten worden pas ontdekt door lassers bij het opbouwen van de opstelling. | **BOM-ontkoppeling en netting vóór de ploeg:** Ploegplanningen worden automatisch ontkoppeld naar individuele onderdeelbehoeften, die exacte onderdeelsdeficieten blootleggen voordat werkorders de hal bereiken. |
| **Locatiezichtbaarheid van onderhanden werk (WIP)** | **Blindheid van het voorraadregister:** Onderdelen lijken beschikbaar in de totale fabrieksvoorraad, maar materialenbewerkers verspillen zoektijd tussen supermarkten, samenstelgangen en lasposten. | **Meerstaps locatieopvolging:** Stamgegevens en logistieklogboeken scheiden duidelijk voorraad in Kanban-supermarkten, geladen op leverkarren of samengesteld aan werkplekken. |
| **Planning van stroomopwaartse fabricage** | **Versnelling en brandbestrijding:** Lasersnij-, plaatkant- en CNC-verspaningscellen ontvangen dringende aanvulverzoeken via mondelinge aandringen of papiertjes. | **Pull-gebaseerde aanvulsignalen:** Netto-tekortalgoritmen categoriseren nabestelprioriteiten (`Normal`, `Warning`, `Critical`) en sturen de behoefte rechtstreeks naar specifieke stroomopwaartse werkcentra. |
| **Kit-commissionering naast de lijn en karverzending** | **Gedeeltelijke kits en rommelige werkplekken:** Karren bereiken lascellen met onvolledige onderdelensets, wat WIP-opstoppingen en werkplekwisselingen midden in de ploeg veroorzaken. | **Vergrendelde kitgereedheidsstatussen:** Picktaken dwingen standaardverpakkingsbeperkingen af en markeren kar-kits als `Ready`, `Partly` of `Blocked` vóór verzending naar de hal. |
| **Voorraadnauwkeurigheid en uitvalafstemming** | **Boekhoud-fysieke voorraadafwijking:** Spreadsheetsaldi lopen achter op het werkelijke verbruik op de vloer door niet-gemelde lasuitval, herstelwerk en handmatige materiaalvervanging. | **Geautomatiseerde productieterugkoppeling:** Ploegafsluitingen en uitvallogboeken voeden rechtstreeks de verbruiksmotor en actualiseren realtime supermarktsaldi dynamisch. |
| **Prioritering van knelpunten fabrieksbreed** | **Silo-per-werkplek management:** Supervisoren lossen tekorten cel voor cel op, waardoor systemische stroomopwaartse knelpunten en conflicterende materiaaltoewijzingen tussen ploegen verborgen blijven. | **Gecentraliseerde werkvloercontrolekamer:** Eén uniform dashboard correleert ploegnaleving, blootstelling aan onderdeeltekorten, supermarktgezondheid en interne logistiekstroom. |

---

## Ideaal gebruikers, productierollen en industriële toepassingen

### Voor wie is dit bedoeld (rol-naar-werkstroom toewijzing)

- **Productieplanners en hoofdplanners** die een **ploeg-niveau Excel-sjabloon voor productieplanning** zoeken om dagelijkse lasmontagedoelen te balanceren over robotische en handmatige werkcentra zonder materiaaluitputting te veroorzaken.
- **Materiaalplanners, voorraadanalisten en inkopers** die een **lichtgewicht MRP- en BOM-ontkoppelingcalculator** nodig hebben om bovenliggende montageschema's om te zetten in getimede componentbehoefte en stroomopwaartse aanvulprioriteiten.
- **Lean-ingenieurs, magazijnleiders en interne logistiekteams (Milk-Run)** die een **tracker voor Kanban-supermarktbeheer en kar-samenstelling** zoeken om picken naast de lijn, containerbelading en levering op de gebruikslocatie te standaardiseren.
- **Laswerkplaats-supervisoren, productiemeesters en fabrieksmanagers** die een **realtime dashboard voor werkvloertekorten en WIP-zichtbaarheid** nodig hebben om de kitgereedheid van werkplekken te verifiëren vóór ploegoverdrachten en werkelijke versus geplande productie te volgen.
- **Industrial engineers en Excel-praktijkexperts in productie** die een **aanpasbaar low-code productieregelingsysteem** bouwen om de uitvoeringskloof tussen ERP-planning op hoog niveau en fysieke werkvloeractiviteiten te dichten.

### Doelproductieomgevingen en toepassingen

Dit raamwerk is specifiek ontworpen voor **discrete productie met hoge mix en laag volume (HMLV)** en **werkplaatsomgevingen**, met name:
- **Ondermontages voor zware machines, landbouwmachines en bouwmachines**
- **Plaatwerk-, lasersnij- en kantperswerkplaatsen**
- **Tier-2/Tier-3 automotive toeleveranciers van stansen en robotlassen**
- **Fabrikanten van maatwerk constructiestaal, frames en behuizingen**

### Systeemomvang en operationele grenzen

Om snelheid, transparantie en inzet zonder IT-overhead te behouden, is deze tool **bewust beperkt van omvang**:
- **Wat het is:** Een tactische uitvoeringsbrug tussen wekelijkse/maandelijkse ERP-planning en ploeg-niveau materiaalbeweging op de werkvloer.
- **Wat het niet is:** Het is **geen** vervanging van financiële ERP-systemen op ondernemingsniveau (SAP, Oracle, NetSuite), geen volledige eindige-capaciteit APS-plannings- en planningsmotor, geen PLC-gestuurde AGV/AMR-vlootcontroller en geen geautomatiseerd IIoT/SCADA-machinebewakingsplatform. Fysiek fabriekslayoutontwerp, barcodehardware-integratie en geautomatiseerde machinetelemetrie vallen buiten de native omvang van het werkboek.

---

## Over de architectuur: de spreadsheet als beslissingsondersteunend systeem

De meeste fabrieksspreadsheets falen omdat ze zijn gebouwd als statische databegraafplaatsen in plaats van onderling verbonden operationele modellen. Dit project benadert industriële spreadsheets als **herbruikbare, lichtgewicht beslissingsondersteunende systemen**, gestuurd door één centrale ontwerpvraag: 

> *"Welke exacte werkvloerdatumpunten moeten nu met elkaar verbonden worden, zodat de volgende plannings-, samenstellings- of aanvulbeslissing zonder enige dubbelzinnigheid kan worden genomen?"*

Het **Systeem voor Materiaalstroomregeling op de Werkvloer** past dit principe toe door vijf traditioneel gescheiden productielagen te koppelen: **Ploegproductieplannen → Meerlagen-BOM-behoefte → Kanban-supermarktvoorraad → Kar-kit-logistiek → Terugkoppeling van werkelijke productie en uitval**. 

Door gecentraliseerde bedrijfsparameters, traceerbare formulelogica en expliciete uitzonderingsmarkeringen af te dwingen, geeft dit raamwerk productieteams directe controle over de materiaalbeschikbaarheid naast de lijn—en garandeert het dat de juiste gefabriceerde onderdelen op de juiste laspost aankomen op de juiste kar, in elke ploeg.

## Technische details

<details>
<summary>Voor technische reviewers, Excel-praktijkexperts en productiesamenwerkingspartners</summary>

<details>
<summary><strong>Werkboekarchitectuur</strong></summary>

Het voorgestelde werkboek bevat vier functionele modules en tien werkbladen. Elk werkblad heeft een gedefinieerde verantwoordelijkheid, met scheiding van configuratie, stamgegevens, planning, berekeningen, logistieke uitvoering, terugkoppeling en bewaking.

| Module | Werkblad | Verantwoordelijkheid |
|---|---|---|
| Systeem en stamgegevens | `01_SYS` | Centrale bedrijfsparameters, drempels, validatiewoordenboeken en gedeelde instellingen |
| Systeem en stamgegevens | `02_MST_Part` | Stamgegevens van afzonderlijke onderdelen, fabricagebron, supermarktlocatie, verpakking en voorraadparameters |
| Systeem en stamgegevens | `03_MST_BOM` | Relaties lasmontage-onderdeel en standaardcomponentverbruik |
| Systeem en stamgegevens | `04_MST_Station` | Definities van robotische/handmatige stations en kar-toewijzingen |
| Planning en motor | `05_PLN_Shift` | Ploeg-niveau productieplanning |
| Planning en motor | `06_ENG_Demand` | BOM-ontkoppeling en materiaalbehoefte op componentniveau |
| Uitvoering en logistiek | `07_INV_Super` | Supermarktvoorraad, verbruik, tekorten en aanvulling |
| Uitvoering en logistiek | `08_LOG_Trolley` | Karbelading, verzending, levering en kitgereedheid |
| Terugkoppeling en regeling | `09_ACT_Report` | Werkelijke productie, uitval en productierapportage |
| Terugkoppeling en regeling | `10_DSH_Board` | Productienaleving, werkplekgereedheid, tekortblootstelling en logistiekbewaking |

<details>
<summary><strong>End-to-end gegevensstroom</strong></summary>

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

Het diagram toont de beoogde regeltroom. De werkelijke voorraadafstemming hangt af van de geïmplementeerde formules, de transactieregistraties die door operators worden bijgehouden en de validatie van brongegevens.

</details>

</details>

<details>
<summary><strong>Fundamentele ontwerpprincipes</strong></summary>

<details>
<summary><strong>1. Invoer, berekeningen en uitvoer scheiden</strong></summary>

Stamgegevens en bedrijfsinvoer worden beheerd in aangewezen werkbladen. Berekeningsbladen leiden materiaalbehoeften en regelstatussen af. Bewakingsbladen presenteren het resulterende operationele beeld.

Deze scheiding maakt het gemakkelijker vast te stellen of een probleem ontstaat in de brongegevens, een berekening of een fysiek uitvoeringsproces.

</details>

<details>
<summary><strong>2. Excel-tabellen gebruiken voor uitbreidbare records</strong></summary>

Operationele transactielijsten moeten Excel-tabellen (`ListObject`) gebruiken met stabiele tabelnamen zoals `tbl_Part`, `tbl_BOM`, `tbl_ShiftPlan`, `tbl_Inventory` en `tbl_ProductionReport`.

Gestructureerde verwijzingen hebben de voorkeur voor aggregatie op rijniveau omdat ze met de tabel meegroeien. De bovenstaande namen zijn aanbevolen implementatieconventies; de specificatie stelt niet dat een voltooid werkboek al exact deze tabelnamen bevat.

</details>

<details>
<summary><strong>3. Dynamische matrices gebruiken voor gegenereerde lijsten</strong></summary>

Microsoft 365-functies zoals `FILTER`, `UNIQUE`, `SORT` en `XLOOKUP` kunnen lijsten genereren en transformeren zonder formules handmatig naar elke rij te kopiëren.

Formules met dynamische matrices moeten op plaatsen worden gezet waar hun overloopbereiken vrij blijven. Scalaire aggregatiefuncties zoals `SUMIFS` en `COUNTIFS` moeten waar passend gestructureerde verwijzingen gebruiken.

</details>

<details>
<summary><strong>4. Bedrijfsparameters centraliseren</strong></summary>

Drempels, buffers en andere bedrijfsregels moeten in de configuratielaag worden beheerd in plaats van als onverklaarde constanten te worden gedupliceerd door het hele werkboek.

De meegeleverde constructie wijst kernparameters toe aan `01_SYS!D4:D13`. Formules moeten consistent naar die geconfigureerde waarden verwijzen, en parameterwijzigingen moeten worden getest tegen de betrokken berekeningen.

</details>

<details>
<summary><strong>5. Expliciete uitzonderingen verkiezen boven stilzwijgende aannames</strong></summary>

Ontbrekende onderdeelregistraties, ongeldige BOM-relaties, onvolledige locatiegegevens en niet-beschikbaar materiaal moeten herkenbare uitzonderingsstatussen opleveren.

Een ontbrekend of ongeldig record mag niet stilzwijgend worden geïnterpreteerd als bevestigde beschikbaarheid. Een operationele status moet een echte nulwaarde onderscheiden van een waarde die niet betrouwbaar kan worden berekend.

</details>

</details>

<details>
<summary><strong>Module 1 — Systeem en stamgegevens</strong></summary>

<details>
<summary><strong>Blad `01_SYS` — Parameters en drempels</strong></summary>

Dit werkblad definieert de gedeelde configuratie die wordt gebruikt door de daaropvolgende berekeningen.

| Cel | Parameter | Standaard in de specificatie | Operationeel doel |
|---|---|---:|---|
| `D4` | `CFG_CURR_SYM` | `¥` | Valutaweergavesymbool |
| `D5` | `CFG_QTY_UNIT` | `PCS` | Basiseenheid materiaalhoeveelheid |
| `D6` | `CFG_SHIFTS_PER_DAY` | `2` | Aantal geplande ploegen per dag |
| `D7` | `CFG_SHIFT_HOURS` | `8.0` | Standaarduren per ploeg |
| `D8` | `CFG_SAFE_BUFFER_PCT` | `0.15` | Algemene veiligheidsvoorraadbuffer |
| `D9` | `CFG_REPL_EMERG_DAYS` | `0.50` | Drempel noodaanvulling |
| `D10` | `CFG_KIT_FULL_PCT` | `1.00` | Drempel volledig gereed kit |
| `D11` | `CFG_KIT_WARN_PCT` | `0.80` | Waarschuwingsdrempel gedeeltelijke gereedheid |
| `D12` | `CFG_TROLLEY_MAX_SNP` | `12` | Maximum standaardverpakkingsdozen per kar |
| `D13` | `CFG_SCRAP_TOLERANCE` | `0.02` | Uitvalpercentagetolerantie |

Dit zijn referentiestandaardwaarden uit de implementatiespecificatie, geen universele productienormen. Ze moeten vóór operationeel gebruik worden gevalideerd tegen werkelijke verpakking, verbruik, aanvul doorlooptijden en werkplaatspraktijken.

De voor dit blad gespecificeerde validatiewoordenboeken omvatten:

- Fabricagebronnen: Laser, Kanten en Verspanen.
- Stationstypen: Robot en Handmatig.
- Aanvulstatussen: Normal, Replenish en Urgent.
- Karstatussen: Loading, In-Transit en Delivered.

De specificatie definieert ook parameterweergave- en validatie-uitvoer in de kolommen F en G.

**Illustratieve dynamische matrixformule — parameterweergavelabels**

```excel
=C4:C13 & " : " & D4:D13 & " (" & E4:E13 & ")"
```

Voer de formule in `F4` in op een Microsoft 365-compatibel werkblad, waarbij het beoogde overloopgebied vrij blijft.

**Implementatienotitie:** De voorbeeldvalidatieformule van de bronspecificatie gebruikt matrixuitdrukkingen met `AND` en `ROW`. Die uitdrukkingen moeten vóór uitrol worden beoordeeld op matrixcompatibel gedrag. Een formule die een onjuiste validatiestatus teruggeeft is niet alleen daarom een adequate regeling omdat ze dynamisch is.

</details>

<details>
<summary><strong>Blad `02_MST_Part` — Stamgegevens afzonderlijke onderdelen</strong></summary>

De onderdelenstam beheert de attributen die nodig zijn om elke afzonderlijke component te identificeren, te lokaliseren en aan te vullen.

| Veld | Doel |
|---|---|
| Onderdeel-ID | Unieke onderdeelidentificatie |
| Onderdeelnaam | Leesbare bedrijfsomschrijving |
| Fabricagebron | Laser, Kanten of Verspanen |
| Specificatie / Materiaal | Fysieke specificatie voor identificatie |
| Eenheid | Standaard hoeveelheidseenheid |
| Standaard supermarktlocatie | Fysiek opslagadres |
| Standaardverpakkingsaantal (SNP) | Standaardverpakkingshoeveelheid |
| Gemiddeld dagelijks verbruik | Verbruiksbasislijn |
| Veiligheidsvoorraad | Berekende voorraadbuffer, afgerond op een verpakkingsveelvoud |
| Maximale voorraad | Referentievoorraadplafond |
| Activeringsstatus | Indicator van stamgegevensvolledigheid |

De referentie-implementatie staat ongeveer 500 afzonderlijke onderdelen toe. De voorgestelde identificaties `P-1001` tot `P-1500` zijn illustratieve voorbeelden, geen vereiste om dat nummeringsschema te gebruiken.

**Berekening veiligheidsvoorraad**

```excel
=IF(A4:A503="","",
   CEILING.MATH(
      H4:H503*(1+'01_SYS'!$D$8),
      G4:G503
   )
)
```

Deze formule berekent een gebufferde verbruiksbasislijn en rondt het resultaat omhoog af op een veelvoud van de standaardverpakkingshoeveelheid.

De specificatie definieert de maximale voorraad als het dubbele van de berekende veiligheidsvoorraad:

```excel
=IF(A4:A503="","",I4:I503*2)
```

**Belangrijke implementatieoverwegingen**

- De veiligheidsvoorraadbasislijn moet een duidelijk gedefinieerde tijdsbasis hebben. De meegeleverde formule gebruikt het gemiddelde dagelijkse verbruik maar vermenigvuldigt dit niet expliciet met de aanvul doorlooptijd. De buffer mag daarom niet worden geïnterpreteerd als een volledig doorlooptijd-gebaseerd voorraadbeleid.
- `SNP` moet positief zijn voordat het als afrondingsstapgrootte wordt gebruikt.
- Ontbrekende verbruiksgegevens moeten worden onderscheiden van echt nulverbruik.
- Een activeringscontrole moet de onderdeelidentificatie, broncategorie, locatie en verpakkingsattributen valideren voordat het onderdeel in planningsberekeningen wordt gebruikt.

De voorbeeldactiveringsformule van de specificatie is:

```excel
=IF(A4:A503="","",
   IF(
      OR(ISBLANK(F4:F503),ISBLANK(G4:G503),G4:G503<=0),
      "⚠️ Incomplete Master Data",
      "✅ ACTIVE"
   )
)
```

Dit illustert de beoogde validatielogica. Omdat `OR` niet elke rij van een matrix onafhankelijk evalueert, moet de formule worden aangepast naar een rijgewijze of `MAP`-gebaseerde implementatie voordat ze als productieve validatieregeling wordt gebruikt.

</details>

<details>
<summary><strong>Blad `03_MST_BOM` — Rekkenlijst van lasmontages</strong></summary>

De BOM legt vast welke afzonderlijke onderdelen elke lasmontage verbruikt.

| Veld | Doel |
|---|---|
| Montage-ID | Identificatie van de lasmontage |
| Montagenaam | Beschrijving van de montage |
| Onderdeel-ID | Identificatie van de component |
| Onderdeelnaam | Opgehaald uit de onderdelenstam |
| Fabricagebron | Opgehaald uit de onderdelenstam |
| Standaard opslaglocatie | Opgehaald uit de onderdelenstam |
| Hoeveelheid per montage | Standaardhoeveelheid van het per montage verbruikte onderdeel |
| Relatievalidatie | Bevestigt registratie van het onderdeel en een positieve verbruikshoeveelheid |

Het referentiebereik is ongeveer 50 lasmontages, met potentieel veel BOM-rijen per montage. De BOM is een relatietabel, geen samenvatting met één rij per montage.

**Onderdeelnaam ophalen**

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

**Fabricagebron ophalen**

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

**BOM-relatie valideren**

```excel
=IF(A4:A1500="","",
   IF(
      ISNUMBER(MATCH(C4:C1500,'02_MST_Part'!A4:A503,0)),
      IF(G4:G1500>0,"✅ Valid BOM","❌ Quantity Must Be Positive"),
      "❌ Part Not Registered"
   )
)
```

De beoogde controles zijn eenvoudig: elk gerefereerd onderdeel moet bestaan, en elke actieve BOM-relatie moet een positieve verbruikshoeveelheid specificeren.

Voor een uitgerold werkboek moeten deze formules worden getest op matrixgedrag, dubbele sleutels en onvolledige records. Een aparte unieke montagesstam of een eigen montagezoekbereik verdient de voorkeur boven het zoeken van een montagenaam tegen herhaalde BOM-rijen wanneer gegevensconsistentie niet anders kan worden gewaarborgd.

</details>

<details>
<summary><strong>Blad `04_MST_Station` — Stations en karconfiguratie</strong></summary>

Dit blad koppelt productiestations aan de interne logistiekbronnen die ze bedienen.

| Veld | Doel |
|---|---|
| Station-ID | Unieke stationidentificatie |
| Stationsnaam | Leesbare stationomschrijving |
| Stationstype | Robot of Handmatig |
| Standaard kar-ID | Toegewezen materiaaltransportkar |
| Karcapaciteit | Maximum standaardverpakkingsdozen per kar |
| Stationsstatus | Planning- en gereedheidsindicator |
| Karbeschikbaarheid | Huidig geregistreerd karstatus |

De voorgestelde stationsstam omvat ongeveer 15–20 stations, afhankelijk van de werkelijke werkplaats.

**Laatst geregistreerde karstatus ophalen**

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

Het achterwaartse zoekargument vraagt de laatste overeenkomende record in het opgegeven bereik. Het is alleen zinvol als de zoeksleutel- en gebeurtenisregistratieconventies betrouwbaar zijn.

Voor productiegebruik moet de huidige status van een kar worden afgeleid uit een gedefinieerde transactiehistorie of één gezaghebbend statusrecord. Een eenvoudige laatste-match-zoekopdracht is geen vervanging voor het valideren van overlappende toewijzingen, onbevestigde terugzendingen of dubbele karidentificaties.

</details>

</details>

<details>
<summary><strong>Module 2 — Plan- en behoefte-engine</strong></summary>

<details>
<summary><strong>Blad `05_PLN_Shift` — Ploegproductieplan</strong></summary>

Dit werkblad is de operationele toegangspoort tot de productieplanning.

| Veld | Doel |
|---|---|
| Productiedatum | Geplande uitvoeringsdatum |
| Ploeg-ID | Ploegbenaming |
| Station-ID | Doellaser-lasstation |
| Montage-ID | Geplande lasmontage |
| Geplande hoeveelheid | Doelmontageproductie |
| Planstatus | Gepland, Vrijgegeven of Voltooid |
| Montagenaam | Opgehaalde montagebeschrijving |
| Stationstype | Opgehaalde stationclassificatie |
| Benodigde onderdeeltypes | Aantal unieke BOM-componenten |
| Totale onderdelenhoeveelheid | Totale benodigde componenthoeveelheid |
| Unieke plansleutel | Samengestelde sleutel voor controles op dubbele plannen |

Een plansleutel kan productiedatum, ploeg, station en montage combineren. De bedrijfsdefinitie moet echter bepalen of meerdere regels voor dezelfde montage en station verboden zijn of moeten worden geaggregeerd. Een samengestelde sleutel alleen legt dat beleid niet op.

**Montagenaam ophalen**

De bronspecificatie levert een zoekpatroon gebaseerd op de montageidentificatie. Gebruik in een productie-implementatie een unieke montagesstam als zoekbron in plaats van te vertrouwen op een herhaalde montageidentificatie in een BOM-relatietabel.

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

`AssemblyMaster` is een aanbevolen tabelnaam voor dit implementatiepatroon. Deze moet worden aangemaakt en gevuld voordat de formule kan worden gebruikt.

Planningsvalidaties moeten het volgende afwijzen of markeren:

- Onbekende stationidentificaties.
- Onbekende montageidentificaties.
- Niet-positieve geplande hoeveelheden.
- Ongeldige ploegidentificaties.
- Dubbele of conflicterende plannen volgens het gekozen planningsbeleid.
- Plannen waarvan de benodigde BOM onvolledig of ongeldig is.

</details>

<details>
<summary><strong>Blad `06_ENG_Demand` — Materiaalbehoefte-engine</strong></summary>

De behoefte-engine vertaalt montage-niveau productieplannen naar vereisten voor afzonderlijke onderdelen.

Zijn berekeningsvolgorde is:

1. Geldige productieplanrecords lezen.
2. De toepasselijke BOM-rijen voor elke geplande montage selecteren.
3. Geplande montagematen vermenigvuldigen met de standaardhoeveelheid van elk onderdeel per montage.
4. Datum-, ploeg-, station-, montage- en onderdeelcontext vasthouden voor elk behoefterecord.
5. Behoeften aggregeren waar de voorraadcontrolemening een totaal op onderdeelniveau nodig heeft.
6. Behoefte vergelijken met de gedefinieerde beschikbare voorraadmaatstaf.
7. Tekorten markeren en resultaten blootstellen aan de aanvul- en logistiekwerkstromen.

Voor een geplande montagemate \(Q_a\), en een standaardcomponentverbruik \(B_{a,p}\), is de brutobehoefte aan onderdeel \(p\):

\[
D_p=\sum_a Q_a B_{a,p}
\]

De sommatie geldt voor het geselecteerde productieplanbereik. Als het bereik één ploeg en één station is, mogen alleen plannen van die ploeg en dat station bijdragen aan het resultaat.

**Illustratief berekeningspatroon**

```excel
=PlannedAssemblyQty*QtyPerAssembly
```

Voor een echt werkboek moet de behoefte-engine een expliciete relatie gebruiken tussen planrecords en BOM-rijen. Een directe zoekopdracht is onvoldoende wanneer een montage meerdere componentonderdelen bevat.

De engine moet genoeg detail behouden om vier afzonderlijke vragen te beantwoorden:

- Welk onderdeel is nodig?
- Hoeveel eenheden zijn nodig?
- Welke ploeg en station creëren de vereiste?
- Welke montage en BOM-relatie genereerden de behoefte?

Dit detail is essentieel wanneer hetzelfde afzonderlijke onderdeel wordt gedeeld door meerdere montages of productiestations.

**Brutobehoefte is niet hetzelfde als netto aanvulbehoefte.** Brutobehoefte vertegenwoordigt de impliciete componenthoeveelheden in het productieplan. Nettoaanvulling moet ook rekening houden met de gedefinieerde voorraadpositie, materiaal dat al aan andere behoeften is toegewezen, bevestigde inkomende hoeveelheden en eventuele goedgekeurde verbruik- of voorraadcorrecties.

De exacte beschikbaarheidsvergelijking en haar waarborgen worden behandeld in de uitvoeringslaagspecificatie in Deel 3.

</details>

</details>

<details>
<summary><strong>Module 3 — Supermarktvoorraad en logistieke uitvoering</strong></summary>

<details>
<summary><strong>Blad `07_INV_Super` — Bewaking van supermarktvoorraad</strong></summary>

Dit blad consolideert de materiaalpositie en vertaalt tekorten naar aanvulsignalen.

| Kolom | Veld | Doel |
|---|---|---|
| A | Onderdeel-ID | Identificatie van het afzonderlijke onderdeel |
| B | Onderdeelnaam | Leesbare onderdeelomschrijving |
| C | Fabricagebron | Laser, Kanten of Verspanen |
| D | Beginvoorraad | Overgedragen voorraad |
| E | Ontvangen hoeveelheid | Stroomopwaartse materiaalontvangsten |
| F | Cumulatief verbruik | Materiaalverbruik afgeleid uit productierapporten |
| G | Fysiek beschikbare voorraad | Huidig geregistreerde fysieke voorraad |
| H | Gereserveerde / inkomende voorraad | Voorraad gekoppeld aan reserveringen of inkomende bewegingen, zoals gedefinieerd door de implementatie |
| I | Netto beschikbare voorraad | Voorraad beschikbaar voor de relevante planningsberekening |
| J | Benodigde hoeveelheid | Behoefteverwijzing voor het geselecteerde planningsbereik |
| K | Tekorthoeveelheid | Berekend materiaaldeficit |
| L | Aanvulstatus | Normal, Replenish of Urgent |
| M | Voorgestelde aanvulhoeveelheid | Aanbevolen verpakkingsconforme hoeveelheid |
| N | Fysieke inventiscorrectie | Goedgekeurde voorraadcorrectie |

De specificatie onderscheidt fysieke voorraad van netto beschikbare voorraad. Dat onderscheid is essentieel: materiaal dat al is vastgelegd voor een productiebehoefte mag niet vrij beschikbaar worden geacht voor het vervullen van een andere behoefte.

**Fysiek beschikbare voorraad**

De beoogde voorraadvergelijking is:

\[
\text{On-hand}=\text{Opening Stock}+\text{Receipts}+\text{Adjustments}-\text{Consumption}
\]

**Netto beschikbare voorraad**

De exacte behandeling van inkomende en gereserveerde hoeveelheden moet consistent worden gedefinieerd. Een aanbevolen regelmodel is:

\[
\text{Net Available}
=
\text{On-hand}
-\text{Reservations}
+\text{Eligible Confirmed Inbound}
\]

Inkomende hoeveelheden moeten alleen worden meegerekend wanneer het operationele beleid dit uitdrukkelijk toestaat. Onbevestigde ontvangsten mogen niet als fysiek ontvangen voorraad worden behandeld.

**Tekortberekening**

Voor een benodigde hoeveelheid \(R\) en een beschikbare hoeveelheid \(A\):

\[
\text{Shortage}=\max(0,R-A)
\]

Dit is een planningsrelatie, geen volledig aanvulbeleid. Veiligheidsvoorraadvereisten, toekomstige behoefte en materiaaltoewijzingen moeten apart worden beschouwd bij het bepalen van de uiteindelijke aanvulhoeveelheid.

**Aanvulstatus**

De referentieconfiguratie gebruikt drie statussen:

| Status | Operationele betekenis |
|---|---|
| `Normal` | De geconfigureerde regel vereist momenteel geen aanvulinterventie |
| `Replenish` | De voorraad is de gedefinieerde aanvuldrempel gepasseerd |
| `Urgent` | Een kritieke tekortsituatie vereist onmiddellijke aandacht |

De nooddrempel is geconfigureerd in `01_SYS!D9`. De exacte trigger moet worden gekoppeld aan een duidelijk gedefinieerde tijdsbasis en verbruikssnelheid. De referentiewaarde `0.50` mag niet worden behandeld als een universele noodregel zonder validatie van de eenheid en operationele betekenis.

**Voorgestelde aanvulhoeveelheid**

De specificatie stelt voor om aanvulling af te ronden op een standaardverpakkingsveelvoud en zowel de benodigde hoeveelheid als de veiligheidsvoorraad te meewegen.

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

Dit is een referentieformulepatroon, geen verifieerde kant-en-klare formule voor elke voorraaduitwerking. Bevestig vóór uitrol of kolom E ontvangsten vertegenwoordigt die al in kolom I zijn meegerekend. Als dezelfde inkomende hoeveelheid dubbel wordt geteld, valt de aanvulaanbeveling te laag uit.

Een productie-implementatie moet ook fysieke ontvangsten, in aanmerking komende inkomende hoeveelheden, reserveringen en voorraadcorrecties onderscheiden in plaats van te vertrouwen op dubbelzinnige voorraadvelden.

</details>

<details>
<summary><strong>Blad `08_LOG_Trolley` — Karbelading en levertaken</strong></summary>

Dit werkblad zet materiaalbehoeften om in uitvoerbare interne logistiektaken.

| Veld | Doel |
|---|---|
| Taak-ID | Unieke identificatie van de levertaak |
| Ploeg-ID | Doelproductieploeg |
| Station-ID | Leverbestemming |
| Kar-ID | Toegewezen transportkar |
| Onderdeel-ID | Te leveren materiaal |
| Laadhoeveelheid | Geplande hoeveelheid voor de taak |
| Kit-status | Ready, Partly of Blocked |
| Taakstatus | Loading, In-Transit of Delivered |
| Verzendbevestiging | Bevestiging van fysieke belading en vertrek |
| Leverbegstigingstijd | Geregistreerde aankomsttijd |
| Leverend persoon | Verantwoordelijke operator |
| Capaciteitswaarschuwing | Controle van karverpakkingscapaciteit |

**Taakidentificatie**

```excel
=IF(B4:B1000="","",
   "TSK-"&TEXT(ROW(A4:A1000)-3,"0000")
)
```

Het referentiepatroon genereert een opgemaakte identificatie op basis van de werkbladrij. Gebruik voor duurzame traceerbaarheid een unieke taaksleutel die niet opnieuw wordt gebruikt na sorteren, verwijderen of herbouwen van de takenlijst.

**Standaardkar toewijzen**

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

Een reservekaridentificatie mag niet worden geïnterpreteerd als een bevestigde fysieke toewijzing. Onbekende station-naar-kar-toewijzingen moeten een zichtbare uitzondering opleveren en vereisen oplossing vóór verzending.

**Kitgereedheid**

De meegeleverde specificatie definieert volledige gereedheid op 100% en een waarschuwingsdrempel op 80%.

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

Deze formule illustert de drempellogica voor een enkele materiaalbehoefte. Een productie-niveau kitgereedheidsberekening **moet alle benodigde onderdelen voor de doelstation en ploeg evalueren**. De beschikbare hoeveelheid van één onderdeel gedeeld door zijn laadhoeveelheid is op zichzelf geen bewijs dat de hele kit compleet is.

De verzendpoort moet daarom de volledige vereistenset gebruiken, valideren dat elk benodigd onderdeel in voldoende hoeveelheid beschikbaar is, en voorkomen dat materiaal aan meerdere taken wordt toegewezen.

**Karcapaciteitscontrole**

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

Dit is een referentiecontrole gebaseerd op verpakkingsveelvouden. De implementatie moet vaststellen of capaciteit per onderdeelregel, per kar of over de volledige lading wordt gemeten. Een echte kar kan meerdere onderdeeltypes bevatten; elke regel onafhankelijk valideren garandeert niet dat de gecombineerde lading binnen de fysieke capaciteit blijft.

Een kartaak moet voortschrijden door expliciete operationele statussen. Verzend-, lever- en retour- of beschikbaarheidsbevestigingen moeten waar de werkplaats ze vereist als afzonderlijke gebeurtenissen worden geregistreerd.

</details>

</details>

<details>
<summary><strong>Module 4 — Productieterugkoppeling en bewaking</strong></summary>

<details>
<summary><strong>Blad `09_ACT_Report` — Rapportage werkelijke productie</strong></summary>

Dit werkblad registreert de werkelijke productie van de robotische en handmatige lasstations.

| Veld | Doel |
|---|---|
| Rapport-ID | Uniek rapportrecord |
| Rapportdatum | Werkelijke meldingsdatum |
| Ploeg-ID | Productieploeg |
| Station-ID | Rapporterend station |
| Montage-ID | Voltooide lasmontage |
| Werkelijke goedgekeurde hoeveelheid | Geaccepteerde productie |
| Uitvalhoeveelheid | Geregistreerde afgekeurde montages |
| Stilstandnotities | Notities over tekorten, apparatuur of andere onderbrekingen |
| Geplande hoeveelheid | Overeenkomend productiedoel |
| Afwijkingshoeveelheid | Werkelijke goede productie minus plan |
| Uitvalalarm | Geconfigureerde uitvalpercentagecontrole |
| Validatiestatus | Geldigheidsindicator van het record |

**Overeenkomend productieplan ophalen**

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

De plansleutel moet aan beide zijden dezelfde datum- en tekstnormalisatie gebruiken. Datumopmaak, navolgende spaties en inconsistente station- of montagecodes kunnen ertoe leiden dat geldige records niet overeenkomen.

Als meerdere rapporten tegen één productieplan zijn toegestaan, mag het doel niet herhaaldelijk worden geteld alsof elk rapport een apart plan is. Een productie-implementatie moet de werkelijke productie aggregeren op de volledige planningsleutel.

**Productieafwijking**

```excel
=IF(A4:A2000="","",F4:F2000-I4:I2000)
```

Een positief resultaat betekent productie boven het overeenkomende doel; een negatief resultaat een tekort.

**Uitvalpercentagemonitoring**

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

De referentieuitvalpercentage wordt berekend als uitval gedeeld door goede productie plus uitval. De standaardtolerantie is 2%, maar de werkelijke drempel moet worden goedgekeurd voor het betreffende fabricageproces.

**Productievalidatie**

Een rapport mag alleen worden geaccepteerd wanneer het station en de montage bestaan in hun stamgegevens en alle hoeveelheden voldoen aan de gedefinieerde beperkingen.

Minimaal:

- Goede productie mag niet negatief zijn.
- De uitvalhoeveelheid moet expliciet worden ingevoerd, met nul als er geen uitval was.
- Het station en de montage moeten geregistreerd zijn.
- Het rapport moet een unieke identificatie hebben.
- Datum, ploeg en station moeten overeenkomen met een geldige meldingscontext.
- Dubbele of conflicterende records moeten worden gemarkeerd voordat hun verbruik op de voorraad wordt toegepast.

</details>

<details>
<summary><strong>Productieverbruik en voorraadterugkoppeling</strong></summary>

Werkelijke productierapporten zijn de terugkoppelbron voor het materiaalmodel.

Voor een montage met goede productie \(Q_g\), geregistreerde uitval \(Q_s\), en een BOM-hoeveelheid per montage \(B_p\), is een mogelijke brutoverbruiksregel:

\[
C_p=(Q_g+Q_s)\times B_p
\]

Deze vergelijking veronderstelt dat zowel geaccepteerde als afgekeurde montages de volledige standaardhoeveelheid van elke component verbruiken. Waar werkelijke uitvalpatronen afwijken, moet de werkplaats het passende verbruiksbeleid definiëren.

Het voorraadmodel moet een consistent beleid gebruiken voor:

- BOM-gebaseerd theoretisch verbruik.
- Goede productie en uitval.
- Fysieke materiaalafgifte, indien apart geregistreerd.
- Aannulleringen en correcties.
- Preventie van dubbele rapporten.

Een rapport mag de voorraad niet vaker dan één keer verlagen. De bronspecificatie beschrijft BOM-gebaseerde verbruikterugkoppeling, maar stelt geen volledig transactieregister met onveranderlijke boekingsidentificaties vast. Die regeling moet worden geïmplementeerd en getest voordat het werkboek als gezaghebbend voorraadregister wordt gebruikt.

</details>

<details>
<summary><strong>Blad `10_DSH_Board` — Werkvloer-operationsdashboard</strong></summary>

Het dashboard consolideert operationele informatie voor productiesupervisoren en vlootregelaars.

Het referentiefiltergebied bevat:

| Cel | Filter |
|---|---|
| `B2` | Productiedatum |
| `D2` | Ploeg |
| `F2` | Doelstation of alle stations |

De voorgestelde KPI- en bewakingsgebieden omvatten:

- Productienaleving van de ploeg.
- Leveringspercentage volledige kits.
- Aantal stations met geblokkeerde materiaalgereedheid.
- Aantal onderdeeltypes getroffen door tekorten.
- Aanvulhoeveelheden per stroomopwaartse fabricagebron.
- Een gerangschikte lijst van de meest kritieke tekorten.

**Productienaleving**

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

Dit is een referentieberekening. Ze moet worden uitgebreid met het stationfilter en het geselecteerde planstatusbeleid. Werkelijke productie moet worden geaggregeerd tegen het passende planbereik om misleidende percentages te vermijden.

**Percentage volledige kits**

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

Deze metric hangt af van de taakgranulariteit. Als een enkele karlevertaak één onderdeel vertegenwoordigt in plaats van een volledige werkplekkit, is het resultaat een taakgereedheidspercentage, geen volledig werkplekkit-percentage. De dashboardlabel moet de geïmplementeerde meting weerspiegelen.

**Aantal geblokkeerde stations**

Tel de unieke stations met geblokkeerde status in de geselecteerde ploeg. Geblokkeerde materiaalregels tellen in plaats van unieke stations overschat het aantal getroffen stations.

**Aantal onderdelen met tekort**

Tel de unieke geregistreerde onderdelen waarvan het berekende tekort positief is. Sluit lege rijen en ongeldige stamdatarecords uit.

**Samenvatting stroomopwaartse aanvulling**

Aggregeer de voorgestelde aanvulhoeveelheid per fabricagebron:

- Lasersnijden.
- Kanten.
- Verspanen.

Dit geeft stroomopwaartse productieteams een geconsolideerd beeld van de per bron benodigde hoeveelheid. Het resultaat blijft een planningssignaal totdat het stroomopwaartse werk is geaccepteerd, geproduceerd en fysiek ontvangen.

**Tekortrangschikking**

De referentieconstructie gebruikt functies voor dynamische matrices zoals `FILTER`, `SORT`, `HSTACK` en `CHOOSEROWS` om een gerangschikte tekortlijst te genereren.

Een geldige rangschikking moet onderdeel-ID, omschrijving, fabricagebron of opslaglocatie, beschikbare hoeveelheid, tekorthoeveelheid en voorgestelde aanvulhoeveelheid bevatten. De sorteersleutel moet expliciet worden gedefinieerd en mag het grootste absolute tekort niet verwarren met het dringendste risico van tijd tot voorraadop.

</details>

</details>

<details>
<summary><strong>Formuliereferentie</strong></summary>

De volgende groepen vatten de belangrijkste berekeningspatronen samen die in de hele voorgestelde architectuur worden gebruikt.

<details>
<summary><strong>Configuratie- en stammgegevensformules</strong></summary>

| Doel | Formule of functie | Regeldoel |
|---|---|---|
| Parameterweergave | `TEXT`, samenvoeging | Gedeelde instellingen leesbaar maken |
| Parametervalidatie | `IF`, `ISNUMBER`, bereikcontroles | Ontbrekende of ongeldige instellingen markeren |
| Stamgegevensophaling | `XLOOKUP` | Namen, broncategorieën en locaties ophalen |
| BOM-relatievalidatie | `MATCH`, `ISNUMBER` | Niet-geregistreerde onderdeelrelaties voorkomen |
| Veiligheidsvoorraadafronding | `CEILING.MATH` | Voorraadbuffers afstemmen op verpakkingshoeveelheden |
| Tabelgebaseerde aggregatie | `SUMIFS`, `COUNTIFS` | Operationele records aggregeren met expliciete criteria |

</details>

<details>
<summary><strong>Plannings- en voorraadformules</strong></summary>

| Doel | Formule of functie | Regeldoel |
|---|---|---|
| Plan-naar-BOM-ontkoppeling | Planhoeveelheid × BOM-gebruik | Brutto componentbehoefte berekenen |
| Behoefteaggregatie op onderdeelniveau | `SUMIFS` | Behoefte combineren over het gedefinieerde planningsbereik |
| Tekortberekening | `MAX(0, required - available)` | Negatieve tekortwaarden voorkomen |
| Aanvulhoeveelheid | `LET`, `XLOOKUP`, `CEILING.MATH` | Veiligheidsvoorraad en verpakkingafronding toepassen |
| Aanvulclassificatie | `IF` met geconfigureerde drempels | Normal-, Replenish- en Urgent-statussen blootleggen |
| Tekortrangschikking | `FILTER`, `SORT`, `CHOOSEROWS` | Zichtbare materiaaluitzonderingen prioriteren |

</details>

<details>
<summary><strong>Logistiek-, rapportage- en dashboardformules</strong></summary>

| Doel | Formule of functie | Regeldoel |
|---|---|---|
| Taakidentificatie | `TEXT`, `ROW` | Leesbare taakreferenties genereren |
| Station-naar-kar-koppeling | `XLOOKUP` | Geconfigureerde transportbron ophalen |
| Gereedheidsclassificatie | `LET`, drempelvergelijkingen | Levergereedheid classificeren |
| Productieplanmatch | `XLOOKUP` met samengestelde sleutel | Overeenkomende planhoeveelheid ophalen |
| Productieafwijking | Werkelijke productie − plan | Productiekloof kwantificeren |
| Uitvalbewaking | `LET`, ratio-berekening | Uitval vergelijken met geconfigureerde tolerantie |
| KPI-aggregatie | `SUMIFS`, `COUNTIFS` | Productie- en leveringsresultaten samenvatten |

</details>

**Formulecompatibiliteit:** De constructie gebruikt de dynamische matrixfunctionaliteit van Microsoft 365, waaronder `FILTER`, `LET`, `HSTACK` en `CHOOSEROWS`. De beschikbaarheid varieert per Excel-versie. Valideer elke formule in de doelomgeving vóór vrijgave.

De formules in dit README zijn referentie-implementaties en ontwerppatronen, geen bewering dat een volledig getest werkboek al is opgeleverd. Waar een uitdrukking een aanbevolen tabelnaam, placeholder-veld of illustratief bereik gebruikt, moet die verwijzing worden gemapt op de werkelijke werkboekstructuur.

</details>

<details>
<summary><strong>Validatieregels</strong></summary>

| Veld of regeling | Regel | Vereist foutgedrag |
|---|---|---|
| Onderdeel-ID | Moet uniek en niet leeg zijn voor actieve records | Dubbele of ontbrekende identificaties markeren |
| Fabricagebron | Moet Laser, Kanten of Verspanen zijn | Niet-ondersteunde categorieën afwijzen of markeren |
| Supermarktlocatie | Moet aanwezig zijn voor een actief onderdeel | Stamgegevens als onvolledig markeren |
| SNP | Moet numeriek en groter dan nul zijn | Verpakkingsafronding en taakvrijgave blokkeren |
| Gemiddeld dagelijks verbruik | Moet numeriek zijn en een gedefinieerde tijdsbasis hebben | Ontbrekende of inconsistente invoer markeren |
| BOM-onderdeel-ID | Moet bestaan in de onderdelenstam | Ongeldige BOM-relatie markeren |
| BOM-hoeveelheid | Moet groter dan nul zijn voor actieve relaties | Ongeldige behoefteberekeningen voorkomen |
| Station-ID | Moet bestaan in de stationsstam | Ongeldige stationverwijzingen markeren |
| Kar-toewijzing | Moet verwijzen naar een geregistreerde bron | Onbevestigde toewijzingen blokkeren |
| Geplande hoeveelheid | Moet een positief geheel getal zijn voor een vrijgegeven productieplan | Ongeldige productiehoeveelheden markeren |
| Ploeg-ID | Moet overeenkomen met het geconfigureerde ploegwoordenboek | Niet-ondersteunde ploegwaarden afwijzen |
| Plan-uniekheid | Moet het goedgekeurde beleid voor dubbele plannen volgen | Dubbele of conflicterende records markeren |
| Voorraadontvangst | Moet de fysiek ontvangen hoeveelheden weerspiegelen volgens het gedefinieerde boekingsbeleid | Voorkomen dat onbevestigde ontvangsten als voorraad worden behandeld |
| Voorraadcorrectie | Moet met reden en geautoriseerd correctieproces worden geregistreerd | Niet-ondersteunde correcties markeren |
| Productierapport-ID | Moet uniek zijn | Dubbele verbruiksboekingen voorkomen |
| Werkelijke goedgekeurde hoeveelheid | Mag niet negatief zijn | Ongeldige productierapporten markeren |
| Uitvalhoeveelheid | Moet expliciet worden ingevoerd en niet-negatief zijn | Onvolledige of ongeldige uitvalrecords afwijzen |
| Productierapportcontext | Datum, ploeg, station en montage moeten geldig zijn | Niet-matchende of dubbelzinnige rapporten markeren |
| Kitgereedheid | Moet de volledige vereistenset voor het beoogde bereik evalueren | Verzending blokkeren wanneer benodigd materiaal niet beschikbaar is |
| Karcapaciteit | Moet de gecombineerde lading evalueren tegen de werkelijke capaciteit | Overbelaste ladingen markeren |
| Uitvoer dynamische matrix | Het overloopbereik moet vrij blijven | `#SPILL!` oplossen vóór gebruik van de uitvoer |
| Formule-invoer | Moet gedefinieerde geldige numerieke of teksttypes gebruiken | Als tekst opgemaakte getallen en misvormde identificaties markeren |
| Dashboard-noemers | Moeten geldig zijn voor het geselecteerde rapportbereik | Een expliciete status zonder plan of zonder taken tonen in plaats van normale prestatie te suggereren |

<details>
<summary><strong>Integriteitscontroles over de modules heen</strong></summary>

Controleer vóór de operationele uitrol dat:

1. Elke actieve montage van een productieplan een geldige BOM heeft.
2. Elk BOM-onderdeel verwijst naar een geregistreerd onderdeel met geldige bron en locatie.
3. Elke productiebehoefte traceerbaar is naar zijn plan en BOM-relatie.
4. Voorraadbeschikbaarheid een consistente behandeling van fysieke voorraad, reserveringen, inkomende hoeveelheden en correcties gebruikt.
5. Elk productierapport hooguit één keer bijdraagt aan het voorraadverbruik.
6. Een kar niet als beschikbaar kan worden behandeld terwijl er een onopgeloste actieve toewijzing bestaat.
7. Een levering niet als voltooid wordt gemarkeerd alleen omdat een taak is verzonden.
8. Dashboardmetrics consistente data, ploegen, stationfilters en aggregatieregels gebruiken.
9. Parameterwijzigingen doorsijpelen naar elke beoogde afhankelijke berekening.
10. Ontbrekende of ongeldige invoer onderscheidbaar blijft van echte nulwaarden.

De oorspronkelijke architectuurspecificatie levert een veldniveau kruiscontrole en een parameterreferentiekaart. Die documenten vestigen de beoogde ontwerpdekking; ze mogen niet worden geïnterpreteerd als onafhankelijk runtime-testbewijs voor een voltooid werkboek.

</details>

</details>

<details>
<summary><strong>Drie Valkuilen die Zelfs Ervaren Productieplanners Vangen</strong></summary>

<details>
<summary><strong>Valkuil 1 — Een positief voorraadsaldo bewijst geen productiegereedheid</strong></summary>

**Beslissing:** Een lasplan vrijgeven omdat de supermarkt voldoende totale voorraad toont.

**Verborgen fout:** Het voorraadsaldo houdt geen rekening met alle concurrerende behoeften, reserveringen of fysieke leveringsbeperkingen.

**Waarom de redenering faalt:** Voorraad kan in totaliteit bestaan terwijl de specifieke onderdelen die voor een werkplek nodig zijn, niet beschikbaar zijn in de benodigde hoeveelheid of elders zijn vastgelegd.

**Gecorrigeerde aanpak:** Bereken behoefte per onderdeel en planningsbereik, leid netto beschikbaarheid af en controleer de volledige kit vóór verzending.

**Beslissingsimplicatie:** Geef het plan pas vrij nadat materiaalgereedheid is beoordeeld tegen de werkelijke componentvereisten.

<details>
<summary><strong>Berekeningsreferentie</strong></summary>

```text
Gross demand = Planned assembly quantity × BOM usage

Shortage = MAX(0, Required quantity − Net available quantity)

Ready = Every required part satisfies the defined availability condition
```

</details>

</details>

<details>
<summary><strong>Valkuil 2 — Een levertaak is niet hetzelfde als een volledige kit</strong></summary>

**Beslissing:** Een kar verzenden omdat één van zijn materiaalregels gereed lijkt.

**Verborgen fout:** De gereedheidsberekening evalueert een enkel onderdeel of regel in plaats van alle componenten die de werkplek nodig heeft.

**Waarom de redenering faalt:** Eén ontbrekend kritiek onderdeel kan productie verhinderen, zelfs wanneer de rest van de lading beschikbaar is.

**Gecorrigeerde aanpak:** Aggregeer gereedheid over de volledige set benodigde componenten, controleer verpakking en karcapaciteit en valideer de verzendstatus.

**Beslissingsimplicatie:** Een kar is pas verzendgereed wanneer de werkelijke kit-niveauregels zijn vervuld en de toewijzing geldig is.

<details>
<summary><strong>Berekeningsreferentie</strong></summary>

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
<summary><strong>Valkuil 3 — Gemelde productie kan vals vertrouwen in voorraad creëren</strong></summary>

**Beslissing:** Vertrouwen op het bijgewerkte voorraadsaldo direct na invoer van een productierapport.

**Verborgen fout:** Het rapport kan dubbel, onvolledig, niet-matchend met een plan of inconsistent met het verbruiksbeleid zijn.

**Waarom de redenering faalt:** Het herhaaldelijk toepassen van hetzelfde rapport kan hetzelfde theoretische verbruik meerdere keren aftrekken. Onjuiste uitvalbehandeling kan ook de voorraadpositie vervormen.

**Gecorrigeerde aanpak:** Valideer de rapportidentificatie en productiecontext, definieer de verbruiksregels voor goede productie en uitval en gebruik een gecontroleerd boekingsproces.

**Beslissingsimplicatie:** Voorraadwijzigingen moeten gevalideerde productiegebeurtenissen volgen, met correcties die traceerbaar zijn naar hun bronrecords.

<details>
<summary><strong>Berekeningsreferentie</strong></summary>

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
<summary><strong>Voorbeeldscenario</strong></summary>

Denk aan een hypothetische ploeg gepland om 20 lasmontages te produceren. Elke montage vereist vier eenheden van Onderdeel P-1001 en twee eenheden van Onderdeel P-1002.

| Invoer | Onderdeel P-1001 | Onderdeel P-1002 |
|---|---:|---:|
| Geplande montagemate | 20 | 20 |
| BOM-gebruik per montage | 4 | 2 |
| Brutobehoefte | 80 | 40 |
| Kwalificerende netto beschikbare voorraad | 70 | 50 |
| Aanvangstekort | 10 | 0 |

Het plan creëert een behoefte aan 80 eenheden P-1001 en 40 eenheden P-1002. Voor P-1001 ontbreken 10 eenheden, terwijl P-1002 voldoende voorraad heeft voor de geplande behoefte.

Stel dat de geconfigureerde standaardverpakkingshoeveelheid voor P-1001 10 eenheden is. Als geen extra behoefte of voorraadverbintenis de berekening verandert, kan het onmiddellijke brutotekort worden afgerond op één standaardpakket van 10 eenheden.

Dat bewijst niet automatisch dat de ploeg gereed is. De planner moet ook het veiligheidsvoorraadbeleid, de behoefte van andere stations, bevestigde ontvangsten, reserveringen en of het fysieke materiaal vóór productiestart kan worden geleverd meewegen.

De operationele aanbeveling is daarom P-1001 voor aanvulling te markeren, de bron en levertijd te verifiëren en de volledige werkplekkit te beoordelen vóór verzending. Zodra het stroomopwaartse materiaal is ontvangen en de kar is geleverd, kan de productie doorgaan onder de normale vrijgavecontroles van de werkplaats.

Als later 18 goede montages en één afgekeurde montage worden gemeld, moet het BOM-gebaseerde verbruiksbeleid bepalen of het materiaalverbruik wordt berekend op basis van 19 montages totaal of op een ander geverifieerd afgifterecord. Onder de aanname dat zowel goede als afgekeurde montages de volledige standaardhoeveelheid verbruiken, zou het P-1001-verbruik \(19 \times 4 = 76\) eenheden zijn en het P-1002-verbruik \(19 \times 2 = 38\) eenheden.

Dit zijn illustratieve cijfers om de regellogica uit te leggen, geen waargenomen resultaten of een geteste werkboekuitkomst.

</details>

<details>
<summary><strong>Bedrijfsprocedure — Vijfstaps dagelijkse regellus</strong></summary>

1. **Vóór de ploeg:** Voer het productieplan in, controleer de stamgegevensverwijzingen en geef geldige taken vrij.
2. **Vóór productiestart:** Bekijk de behoefte, identificeer tekorten en communiceer aanvulvereisten naar Laser, Kanten en Verspanen.
3. **Vóór verzending:** Pick materialen uit de supermarkt, controleer kitvolledigheid en karcapaciteit en registreer verzend- en leverbevestigingen.
4. **Tijdens de ploeg:** Registreer goede productie, uitval en operationele uitzonderingen. Valideer rapporten voordat verbruik wordt toegepast.
5. **Aan het einde van de ploeg:** Bekijk productienaleving, tekortblootstelling en leverprestatie. Stem fysieke voorraadverschillen af via gedocumenteerde correcties.

</details>

<details>
<summary><strong>Dataproductie en probleemoplossing</strong></summary>

**Records toevoegen:** Voeg nieuwe items toe binnen de aangewezen Excel-tabellen zodat gestructureerde verwijzingen meegroeien. Houd overloopbereiken van dynamische matrices vrij.

**Parameters wijzigen:** Pas goedgekeurde configuratiewaarden aan in `01_SYS` in plaats van bedrijfsconstanten in daaropvolgende formules te bewerken.

**Formules beveiligen:** Scheid operatortinvoercellen van berekende cellen. Beveilig formulegebieden waar passend en documenteer wie stamgegevens mag wijzigen.

**`#SPILL!` oplossen:** Identificeer het geblokkeerde overloopbereik en verwijder onbedoelde celinhoud. Verwijder geen benodigde formule om de fout te verbergen.

**Onveranderde resultaten onderzoeken:** Controleer de berekeningsmodus, planstatus, zoektoetsen en invoervalidatie. Bevestig dat het relevante plan is vrijgegeven als de implementatie filtert op vrijgegeven plannen.

**Onveranderde veiligheidsvoorraad onderzoeken:** Bevestig dat de parameter als getal en niet als tekst is opgeslagen, dat de formule naar de beoogde cel verwijst en dat het werkboek opnieuw heeft berekend.

**Ongeldige rapportcodes onderzoeken:** Controleer station- en montageidentificaties tegen hun stamgegevens. Gebruik gecontroleerde lijsten waar beschikbaar en verwijder onbedoelde spaties of formaatverschillen.

</details>

<details>
<summary><strong>Compatibiliteit, schaal en samenwerking</strong></summary>

De bronconstructie richt zich op Microsoft 365 of Excel 2021 en nieuwer, afhankelijk van functiebeschikbaarheid in de geïnstalleerde versie. Oudere Excel-versies ondersteunen de benodigde dynamische matrix- en zoekfuncties mogelijk niet.

De implementatiespecificatie geeft deze planningschaalreferenties:

- Onderdelenstam: ongeveer 500 onderdelen, met een voorgesteld ontwerpbereik van 1–2.000.
- Lasmontages: ongeveer 50, met een voorgesteld ontwerpbereik van 1–500.
- Productieplan- en rapporthistorie: een aanbevolen werkboekrichtlijn van maximaal 50.000 gecumuleerde rijen voordat archivering wordt overwogen.

Dit zijn ontwerpdoelen, geen onafhankelijk gemeten prestatiegaranties. De werkelijke herberekeningssnelheid hangt af van formules, werkboekstructuur, hardware en datavolume.

OneDrive of SharePoint kunnen lichte gedeelde weergave en bewerking ondersteunen. Voor operationele registraties wordt centrale verantwoordelijkheid voor invoer van productieplannen en voorraadontvangsten aanbevolen om conflicterende actualiseringen te verminderen.

</details>

<details>
<summary><strong>Omvang en implementatiegrenzen</strong></summary>

Het werkboek is bedoeld als een lichtgewicht laag voor materiaalstroomregeling op de werkvloer. Het implementeert geen:

- Fysiek fabriekslayout en industrieel-technische stroomrouteplanning.
- PLC-niveau besturing van AGV's of geautomatiseerde karren.
- Geautomatiseerde machinetelemetrie via IoT of SCADA.
- Volledige algoritmes voor Advanced Planning and Scheduling.
- Een transactionele database of ondernemingsbreed multi-user voorraadregister, tenzij apart geïmplementeerd.
- Automatische bevestiging van fysieke bewegingen zonder gedefinieerd terugkoppelmechanisme van operator of machine.

Deze grenzen moeten worden overwogen bij de beslissing of het raamwerk geschikt is voor een specifieke productieomgeving.

</details>

</details>

## De bedrijfslogica en de methodiek

Het systeem is gebouwd rond een eenvoudig operationeel principe: productieplannen moeten materiaalbehoeften genereren, materiaalbeschikbaarheid moet de uitvoering beperken, en werkelijke productie moet de volgende planningsbeslissing voeden.

- **BOM-gebaseerde behoeftevertaling** zet geplande lasmontages om in vereisten voor afzonderlijke onderdelen. Dit legt componententekorten bloot die onzichtbaar blijven in een alleen-montages-schema en geeft planners een duidelijkere basis om productie vrij te geven.
- **Afstemming van de voorraadpositie** onderscheidt fysieke voorraad van materiaal dat al is vastgelegd of verwacht. Dit vermindert het risico dat dezelfde voorraad als beschikbaar wordt behandeld voor meerdere productiebehoeften.
- **Drempel-gebaseerde aanvulling** vergelijkt materiaalbehoeften met de gedefinieerde voorraadpositie en benadrukt tekorten volgens de geconfigureerde bedrijfsregels. Het resultaat is een geprioriteerd stroomopwaarts aanvulsignaal in plaats van een generieke voorraadwaarschuwing.
- **Containergebaseerde interne logistiek** koppelt materiaalpickvereisten aan kar-toewijzingen, leverbestemmingen, verpakkingsbeperkingen en kitgereedheid. Dit helpt het logistiekteam zich te richten op het materiaal dat nodig is op elke productiewerkplek.
- **Terugkoppeling van werkelijke productie** gebruikt productierapporten en het goedgekeurde verbruiksbeleid om de materiaalpositie te actualiseren. De werkplaats kan haar aanvulprioriteiten dan herzien met actuele bedrijfsinformatie in plaats van alleen op het oorspronkelijke plan te vertrouwen.

Samen verbinden deze methodes planning, voorraad, logistiek en productierapportage tot een herhaalbaar dagelijks regelproces. Het raamwerk verbetert zichtbaarheid en beslissingsconsistentie; de betrouwbaarheid blijft afhankelijk van nauwkeurige stamgegevens, gedisciplineerde fysieke bevestigingen en gevalideerde berekeningsregels.

## Andere gereedschappen uit deze serie

Ontdek meer lichtgewicht beslissingsondersteunende tools voor productie en operations op het GitHub-profiel van de projecteigenaar:

- [HyVoid op GitHub](https://github.com/HyVoid) — spreadsheetgereedschappen voor productie, planning en operations.

## Licentie

Dit project is gespecificeerd onder de **Apache 2.0-licentie**. Raadpleeg het bestand `LICENSE` in de repository voor de bindende voorwaarden.

