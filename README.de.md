[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Materialflusssteuerungssystem für den Shopfloor: Excel-MRP-Vorlage, Kanban-Supermarkt und Schweiß-Produktionsplanung
<img width="1920" height="790" alt="image" src="https://github.com/user-attachments/assets/a63af286-1115-4c2c-aa06-6d7e04aba1e4" />

**Ein schlankes Framework zur Materialflusssteuerung im Shopfloor, ein Stücklisten-Auflösungsrechner und ein Lean-Tracker für die interne Logistik für schweißgetriebene Fertigung und Metallverarbeitung.**

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)
![Platform: Browser + Excel](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-217346)
![Tool Type: Production Control & MRP](https://img.shields.io/badge/Tool-Production%20Control%20%26%20MRP-2251FF)

**Das Materialflusssteuerungssystem für den Shopfloor ist eine kostenlose MRP-Produktionsplanungsvorlage für Browser und Excel, entwickelt für metallverarbeitende und schweißintensive Werkstätten mit hoher Teilevielfalt und geringen Stückzahlen (HMLV). Es wandelt Schichtpläne für Schweißaufträge in umsetzbare Stücklisten-Anforderungen (BOM), Kanban-Supermarkt-Nachschubsignale, Kommissionieraufgaben für fahrzeugseitige Wagen-Sets und ein Tracking des Work-in-Process-Verbrauchs (WIP)—und beseitigt damit Stillstand verursachende Materialengpässe und Tabellenchaos ohne teure ERP/MES-Neuanschaffungen.**

> **Zugang, Live-Demo und Verfügbarkeit der Arbeitsmappe**
>
> - **Interaktive Webanwendung:** Kostenlos, ohne Registrierung oder Installation. [Die interaktive Web-Demo des Materialflusssteuerungssystems für den Shopfloor starten](https://hyvoid.github.io/shop-floor-mrp-kanban-excel-system/) 
>   
> - **Herunterladbare Excel-MRP-Vorlage:** Bereit für die tägliche Produktionsverfolgung im Offline-Betrieb. [Die Excel-Arbeitsmappe für Produktionssteuerung und Materialnachschub herunterladen (.xlsx)](https://theseusworkshop.com/l/qnojv?utm_source=github&utm_medium=GitHub%20README)

---

## Kernfunktionen der Fertigungsverfolgung: Zuordnung von Problempunkten zu Lösungen

Für Produktionsleiter, die einen zuverlässigen **Bestands-Tracker für die Fertigung** oder ein **Work-in-Process-Kontrollblatt (WIP)** suchen, überbrückt dieses Framework die Lücke zwischen statischen Beständen und der Echtzeit-Bereitschaft der Arbeitsplätze:

| Operativer Problempunkt im Shopfloor | Häufige Suchabsicht / Modul | Wie dieses Steuerungsframework das Problem löst |
| :--- | :--- | :--- |
| **Unvorhergesehene Komponentenengpässe an Schweißarbeitsplätzen** | **Schichtbezogene BOM-Auflösung & MRP-Rechner** | Erweitert tägliche Schweißmontagepläne automatisch über mehrteilige Stücklisten (BOM), um den Nettobedarf an Komponenten pro Schicht und Arbeitsplatz zu berechnen, bevor die Schweißer mit der Arbeit beginnen. |
| **Bestandsblinde Flecken zwischen Lager und Linie** | **WIP-Ortung & Kanban-Supermarkt-Tracker** | Trennt rohe Bestandskonten von physischen Lagerorten—verfolgt exakte Mengen über vorgelagerte Puffer, Kanban-Supermärkte, Materialwagen im Transit und robotische/manuelle Schweißzellen. |
| **Verspätete Materialanforderungen an die vorgelagerte Fertigung** | **Automatisierter Nachschub & Engpass-Prioritätenliste** | Berechnet Netto-Materiallücken in Echtzeit gegen Sicherheitsbestände und markiert dringende Nachschubaufträge für vorgelagerte Laserschneid-, CNC-Biege- und Zerspanungszellen. |
| **Versandte Wagen ohne kritische Teile** | **Wagen-Kommissionierung & Bereitschaft der Linienanlieferung** | Gruppiert Kommissionierlisten nach Arbeitsplatz, Verpackungsbeschränkungen und Wagenkapazität—weist explizite visuelle Kit-Status (`Ready`, `Partly Kitted`, `Blocked`) vor dem Versand zu. |
| **Bestandsabweichung durch nicht erfassten Ausschuss und Nacharbeit** | **Soll-/Ist-Verbrauch der Materialien per Rückmeldung** | Gleicht den theoretischen BOM-Verbrauch mit der tatsächlichen Schichtproduktion und dem erfassten Shopfloor-Ausschuss ab und berechnet verbleibende Supermarkt- und Arbeitsplatzbestände dynamisch neu. |
| **Fragmentierte Kommunikation zwischen Schichten** | **Visuelles Shopfloor-Andon & Logistik-Risikodashboard** | Führt Schichtplanerfüllung, kritische Engpassbelastung, Supermarkt-Leerbestände und interne Milk-Run-Lieferstatus in einer einzigen operativen Leitstelle zusammen. |

---

## Schritt-für-Schritt-Anleitung: Tägliche Produktionsplanung und Materialkommissionierung ausführen

Das Betriebsmodell folgt einer wiederholbaren Lean-Fertigungssteuerungsschleife in 4 Schritten: Parameter konfigurieren, Stammdaten pflegen, Schicht-MRP-Berechnungen ausführen und Ist-Produktion rückmelden. 

### Schritt 1: Globale Shopfloor- und Nachschubparameter konfigurieren
**Aktion:** Legen Sie die Grundregeln Ihres Betriebs im Konfigurationsmodul fest.
Definieren Sie Schichtdauern, Schichten pro Tag, Sicherheitsbestandspuffer, Notfall-Kanban-Nachschubauslöser, Kit-Bereitschaftsschwellen, Wagen-Packlimiten und zulässige Ausschusstoleranzen. Diese Parameter steuern alle nachgelagerten Berechnungen der **Materialbedarfsplanung (MRP)** und Engpassalarme.

### Schritt 2: Stückliste (BOM) und Arbeitsplatz-Stammdaten importieren
**Aktion:** Befüllen Sie Ihren Teilestammkatalog, das Arbeitsplatzregister und die Montagestrukturen.
Registrieren Sie gefertigte und gekaufte Komponenten, vorgelagerte Fertigungsquellen (z. B. Laser, Abkantpresse, Drehmaschine), Supermarkt-Behälterplätze, Standard-Packmengen (SPQ) und durchschnittlichen Tagesverbrauch (ADU). Definieren Sie über- und untergeordnete **Schweißmontage-BOMs**, klassifizieren Sie robotische gegenüber manuellen Schweißzellen und weisen Sie die physischen Wagenflotten-Ressourcen zu. *(Optimiert für ca. 500 einzelne SKUs und ca. 50 Schweißbaugruppen).*

### Schritt 3: Schicht-Produktionspläne eingeben, um Kommissionierlisten zu erzeugen
**Aktion:** Geben Sie Ihren täglichen Schichtplan ein, um die automatische BOM-Bedarfsauflösung auszulösen.
Erfassen Sie das Produktionsdatum, das Schichtfenster, die Zielschweißzelle, die Baugruppen-Teilenummer, die geplante Produktionsmenge und den Freigabestatus. Die Berechnungsmaschine löst Baugruppenmengen sofort in Komponentenbedarf auf, prüft die **Verfügbarkeit der Supermarktbestände**, hebt kritische Teileengpässe hervor und erzeugt priorisierte **Wagen-Kommissionier- und Milk-Run-Lieferaufgaben**.

### Schritt 4: Ist-Produktion rückmelden, Ausschuss erfassen und zur wiederverwendbaren Excel-Vorlage übergehen
**Aktion:** Erfassen Sie die Ausführungsdaten im Shopfloor, um die Bestandskontrollschleife zu schließen.
Erfassen Sie vorgelagerte Fertigungseingänge, Inventurkorrekturen, Wagenversandbestätigungen und abgeschlossene Schweißschichtberichte (gute Teile + Ausschuss). Das Modell meldet verbrauchte Komponenten automatisch zurück und aktualisiert Ihre Echtzeit-Bestandsposition für die nächste Schicht.

> **Bereit, vom einmaligen Browsertest zu den täglichen Fabrikabläufen zu wechseln?**  
> Nachdem Sie den Arbeitsablauf in der Browser-Sandbox validiert haben, **[laden Sie die wiederverwendbare Excel-Vorlage zur Materialflusssteuerung im Shopfloor herunter (.xlsx)](https://theseusworkshop.com/l/qnojv?utm_source=github&utm_medium=GitHub%20README)**, um Ihre benutzerdefinierten BOM-Stammdaten zu speichern, historische Abweichungen über mehrere Schichten zu verfolgen und eine wiederholbare tägliche Produktionssteuerung offline in Microsoft Excel auszuführen.

---

## Warum ein dediziertes Materialflusssteuerungs-Framework für die Schweißfertigung?

In einer **schweißgetriebenen metallverarbeitenden Werkstatt** wirkt ein Produktionshauptplan (MPS) im ERP-System oft zu 100 % umsetzbar, während die tatsächlich benötigten physischen Komponenten am Verwendungsort fehlen.

Diese operative Fehlfunktion rührt selten daher, dass werkweit kein Bestand vorhanden ist. Vielmehr entsteht sie durch eine Trennung zwischen der **Montagemixtur der Schicht**, den **mehrebenigen BOM-Anforderungen**, dem physischen Bestand im **Kanban-Supermarkt** und dem Ladestatus des einem bestimmten Schweißplatz zugewiesenen **Linienanlieferungswagens**. Ein statisches Bestandsregister kann dieses vierfache Synchronisationsproblem nicht lösen.

Betrachten Sie eine typische Schicht, die mehrere Strukturschweißkonstruktionen über robotische Schweißzellen und manuelle TIG/MIG-Stationen verteilt plant. Jede Konstruktion zieht ein einzigartiges Kit aus **lasergeschnittenen Platten, CNC-gebogenen Halterungen und präzisionszerspanten Buchsen**. Eine einzelne fehlende Biegehalterung stilllegt die gesamte Schweißvorrichtung—selbst wenn 95 % des Kits bereitstehen. Währenddessen zeigt das ERP-System die Halterung als „auf Lager", ohne zu klären, ob sie an der Abkantpresse, im Supermarktregal, auf einem Wagen oder bereits dem Arbeitsauftrag einer anderen Schicht zugeordnet ist.

Dieses **Materialflusssteuerungssystem für den Shopfloor** verbindet diese isolierten Betriebsdatenpunkte in einem synchronisierten Arbeitsablauf:
1. Es übersetzt schichtbezogene Schweißziele über die automatische BOM-Auflösung in exakten Komponentenbedarf.
2. Es rechnet den Bedarf gegen die physischen Supermarktbestände und offenen Wagenzuordnungen auf.
3. Es erzeugt umsetzbare vorgelagerte Fertigungssignale und vollständige Kit-Stücklisten vor Schichtbeginn.
4. Es gleicht den Sollverbrauch mit den gemeldeten Schweißkonstruktionen und dem Ausschuss ab, damit der Buchbestand mit der physischen Realität übereinstimmt.

Das Ergebnis ist ein **produktifiziertes Lean-Produktionssteuerungssystem in Excel**—es liefert konsistente, prüfbare Materialflussentscheidungen, ohne dass kleine und mittlere Hersteller komplexe MES-Module, software für fahrerlose Transportsysteme (AGV) oder schwerfällige ERP-Anpassungen kaufen müssten.

---

## Traditionelle statische Bestandstabellen vs. strukturierte Materialflusssteuerung

| Operative Dimension | Ohne dieses System (Ad-hoc-Bestandstabellen) | Mit diesem System (strukturiertes Shopfloor-MRP- und Kit-Framework) |
| :--- | :--- | :--- |
| **Erkennung von Komponentenengpässen** | **Ungeplante Stillstände der Schweißlinie:** Arbeitsaufträge erscheinen auf Montageebene ausführbar, fehlende Unterkomponenten entdecken Schweißer aber erst beim Vorrichtungsaufbau. | **BOM-Auflösung und Netting vor der Schicht:** Schichtpläne werden automatisch in einzelne Teileanforderungen aufgelöst und decken exakte Teiledefizite auf, bevor Arbeitsaufträge die Halle erreichen. |
| **Ortungssichtbarkeit des Work in Process (WIP)** | **Blindheit des Bestandsregisters:** Teile erscheinen im Gesamtbestand verfügbar, doch Materialdisponenten verschwenden Suchzeit zwischen Supermärkten, Bereitstellungsgassen und Schweißplätzen. | **Mehrstufiges Ortsverfolgung:** Stammdaten und Logistikprotokolle trennen klar zwischen Bestand in Kanban-Supermärkten, auf Lieferwagen oder an Arbeitsplätzen bereitgestellt. |
| **Planung der vorgelagerten Fertigung** | **Beeilung und Brandbekämpfung:** Laserschneid-, Blechbiege- und CNC-Zerspanungszellen erhalten dringende Nachschubanforderungen über mündliche Ermahnungen oder Zettel. | **Pull-basierte Nachschubsignale:** Netto-Engpassalgorithmen kategorisieren Nachbestellprioritäten (`Normal`, `Warning`, `Critical`) und leiten den Bedarf direkt an bestimmte vorgelagerte Arbeitszentren. |
| **Kit-Kommissionierung an der Linie und Wagenversand** | **Unvollständige Kits und überladene Arbeitsplätze:** Wagen erreichen Schweißzellen mit unvollständigen Teilesätzen, was WIP-Stau und Platzwechsel mitten in der Schicht verursacht. | **Kontrollierte Kit-Bereitschaftszustände:** Kommissionieraufgaben erzwingen Standardpackbeschränkungen und kennzeichnen Wagen-Kits vor dem Hallenversand als `Ready`, `Partly` oder `Blocked`. |
| **Bestandsgenauigkeit und Ausschussabgleich** | **Buchbestandsabweichung:** Tabellenbestände hinken der tatsächlichen Hallennutzung hinterher—durch nicht gemeldeten Schweißausschuss, Nacharbeit und manuelle Materialersatzteile. | **Automatisierte Produktionsrückmeldung:** Schichtabschlüsse und Ausschussprotokolle fließen direkt in die Verbrauchsmaschine und aktualisieren die Echtzeit-Supermarktbestände dynamisch. |
| **Werkweite Engpasspriorisierung** | **Silo-Management einzelner Arbeitsplätze:** Supervisoren lösen Engpässe Zelle für Zelle und verdecken dabei systemische vorgelagerte Engpässe und konkurrierende Materialzuordnungen zwischen Schichten. | **Zentrale Shopfloor-Leitstelle:** Ein einheitliches Dashboard korreliert Schichterfüllung, Komponentenengpassbelastung, Supermarktgesundheit und internen Logistikfluss. |

---

## Ideale Anwender, Fertigungsrollen und Branchenanwendungsfälle

### Für wen ist das gedacht (Rolle-zu-Arbeitsablauf-Zuordnung)

- **Produktionsplaner und Hauptdisponenten**, die eine **schichtbezogene Excel-Vorlage für Produktionsplanung** suchen, um tägliche Schweißmontageziele über robotische und manuelle Arbeitszentren auszubalancieren, ohne Materialhunger zu verursachen.
- **Materialplaner, Bestandsanalysten und Einkäufer**, die einen **schlanken MRP- und BOM-Auflösungsrechner** benötigen, um Elternbaugruppenpläne in terminierten Komponentenbedarf und vorgelagerte Nachschubprioritäten zu übersetzen.
- **Lean-Ingenieure, Lagerleiter und interne Logistikteams (Milk-Run)**, die einen **Kanban-Supermarkt-Verwaltungs- und Wagen-Kommissionierungstracker** suchen, um Linienkommissionierung, Behälterbeladung und Bereitstellung am Verwendungsort zu standardisieren.
- **Schweißwerksleiter, Fertigungsmeister und Werkleiter**, die ein **Echtzeit-Dashboard für Shopfloor-Engpässe und WIP-Sichtbarkeit** benötigen, um die Kit-Bereitschaft von Arbeitsplätzen vor Schichtübergaben zu prüfen und Ist- gegen Planproduktion zu verfolgen.
- **Fertigungsingenieure und Excel-Praktiker**, die ein **anpassbares Low-Code-Produktionssteuerungssystem** aufbauen, um die Umsetzungslücke zwischen übergeordneter ERP-Planung und physischen Shopfloor-Abläufen zu schließen.

### Zielfertigungsumgebungen und Anwendungsfälle

Dieses Framework ist speziell für die **diskrete Fertigung mit hoher Teilevielfalt und geringem Volumen (HMLV)** und **Werkstattfertigungsumgebungen** konzipiert, insbesondere:
- **Baugruppen für Schwermaschinen, Agrar- und Baumaschinen**
- **Blechverarbeitung, Laserschneiden und Abkantpressen-Werkstätten**
- **Automotive-Zulieferer Tier-2/Tier-3 für Stanzen und robotisches Schweißen**
- **Hersteller von kundenspezifischem Baustahl, Rahmen und Gehäusen**

### Systemumfang und Betriebsgrenzen

Um Geschwindigkeit, Transparenz und Einführung ohne IT-Overhead zu erhalten, ist dieses Werkzeug **bewusst im Umfang begrenzt**:
- **Was es ist:** Eine taktische Ausführungsbrücke zwischen wöchentlicher/monatlicher ERP-Planung und schichtbezogener Materialbewegung im Shopfloor.
- **Was es nicht ist:** Es ist **kein** Ersatz für unternehmensweite Finanz-ERP-Systeme (SAP, Oracle, NetSuite), keine vollwertige Finite-Capacity-Advanced-Planning-and-Scheduling-Maschine (APS), kein PLC-gesteuerter AGV/AMR-Flottencontroller und keine automatisierte IIoT/SCADA-Maschinenüberwachungsplattform. Physisches Fabriklayout-Design, Barcode-Hardware-Integration und automatisierte Maschinentelemetrie bleiben außerhalb des nativen Umfangs der Arbeitsmappe.

---

## Über die Architektur: das Tabellenkalkulationsblatt als Entscheidungsunterstützungssystem

Die meisten Werks-Tabellen scheitern, weil sie als statische Datenfriedhöfe statt als miteinander verbundene Betriebsmodelle aufgebaut sind. Dieses Projekt betrachtet industrielle Tabellen als **wiederverwendbare, ressourcenschonende Entscheidungsunterstützungssysteme**, gesteuert durch eine zentrale ingenieurtechnische Frage: 

> *„Welche exakten Shopfloor-Datenpunkte müssen jetzt verbunden werden, damit die nächste Planungs-, Kommissionierungs- oder Nachschubentscheidung ohne jede Mehrdeutigkeit getroffen werden kann?"*

Das **Materialflusssteuerungssystem für den Shopfloor** wendet dieses Prinzip an, indem es fünf traditionell getrennte Fertigungsebenen verknüpft: **Schichtproduktionspläne → mehrstufiger BOM-Bedarf → Kanban-Supermarktbestand → Wagen-Kit-Logistik → Rückmeldung von Ist-Produktion und Ausschuss**. 

Durch zentralisierte Betriebsparameter, nachvollziehbare Formellogik und explizite Ausnahmekenner gibt dieses Framework Fertigungsteams sofortige Kontrolle über die Materialverfügbarkeit an der Linie—und stellt sicher, dass die richtigen gefertigten Teile mit dem richtigen Wagen am richtigen Schweißplatz ankommen, in jeder Schicht.

## Technische Details

<details>
<summary>Für technische Prüfer, Excel-Anwender und Fertigungspartner</summary>

<details>
<summary><strong>Architektur der Arbeitsmappe</strong></summary>

Die vorgeschlagene Arbeitsmappe enthält vier Funktionsmodule und zehn Arbeitsblätter. Jedes Arbeitsblatt hat eine definierte Verantwortung und trennt Konfiguration, Stammdaten, Planung, Berechnungen, Logistikausführung, Rückmeldung und Überwachung.

| Modul | Arbeitsblatt | Verantwortung |
|---|---|---|
| System und Stammdaten | `01_SYS` | Zentrale Betriebsparameter, Schwellenwerte, Validierungswörterbücher und gemeinsame Einstellungen |
| System und Stammdaten | `02_MST_Part` | Einzelteilstammdaten, Fertigungsquelle, Supermarktplatz, Verpackung und Bestandsparameter |
| System und Stammdaten | `03_MST_BOM` | Beziehungen Schweißbaugruppe-Teil und Standardkomponentenverbrauch |
| System und Stammdaten | `04_MST_Station` | Definitionen robotischer/manueller Stationen und Wagenzuordnungen |
| Planung und Maschine | `05_PLN_Shift` | Schichtbezogener Produktionsplan |
| Planung und Maschine | `06_ENG_Demand` | BOM-Auflösung und Komponenten-Materialbedarf |
| Ausführung und Logistik | `07_INV_Super` | Supermarktbestand, Verbrauch, Engpässe und Nachschub |
| Ausführung und Logistik | `08_LOG_Trolley` | Wagenbeladung, Versand, Lieferung und Kit-Bereitschaft |
| Rückmeldung und Steuerung | `09_ACT_Report` | Ist-Produktion, Ausschuss und Produktionsberichterstattung |
| Rückmeldung und Steuerung | `10_DSH_Board` | Produktionserfüllung, Stationsbereitschaft, Engpassbelastung und Logistiküberwachung |

<details>
<summary><strong>Datenfluss von Ende zu Ende</strong></summary>

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

Das Diagramm stellt den vorgesehenen Kontrollfluss dar. Der tatsächliche Bestandsabgleich hängt von den implementierten Formeln, den von den Bedienern geführten Transaktionsaufzeichnungen und der Validierung der Quelldaten ab.

</details>

</details>

<details>
<summary><strong>Zentrale Gestaltungsprinzipien</strong></summary>

<details>
<summary><strong>1. Eingaben, Berechnungen und Ausgaben trennen</strong></summary>

Stammdaten und Betriebseingaben werden in dafür vorgesehenen Arbeitsblättern gepflegt. Berechnungsblätter leiten Materialanforderungen und Steuerungszustände ab. Überwachungsblätter präsentieren das resultierende Betriebsbild.

Diese Trennung erleichtert die Feststellung, ob ein Problem in den Quelldaten, in einer Berechnung oder in einem physischen Ausführungsprozess entsteht.

</details>

<details>
<summary><strong>2. Excel-Tabellen für erweiterbare Datensätze verwenden</strong></summary>

Betriebliche Transaktionslisten sollten Excel-Tabellen (`ListObject`) mit stabilen Tabellennamen wie `tbl_Part`, `tbl_BOM`, `tbl_ShiftPlan`, `tbl_Inventory` und `tbl_ProductionReport` verwenden.

Strukturierte Verweise sind für die Aggregation auf Zeilenebene vorzuziehen, da sie mit der Tabelle mitwachsen. Die obigen Namen sind empfohlene Implementierungskonventionen; die Spezifikation legt nicht fest, dass eine fertige Arbeitsmappe bereits genau diese Tabellennamen enthält.

</details>

<details>
<summary><strong>3. Dynamische Arrays für generierte Listen verwenden</strong></summary>

Microsoft 365-Funktionen wie `FILTER`, `UNIQUE`, `SORT` und `XLOOKUP` können Listen erzeugen und transformieren, ohne Formeln manuell in jede Zeile zu kopieren.

Formeln mit dynamischen Arrays müssen an Stellen platziert werden, an denen ihre Überlaufbereiche frei bleiben. Skalare Aggregationsfunktionen wie `SUMIFS` und `COUNTIFS` sollten wo angemessen strukturierte Verweise verwenden.

</details>

<details>
<summary><strong>4. Betriebsparameter zentralisieren</strong></summary>

Schwellenwerte, Puffer und andere Geschäftsregeln sollten in der Konfigurationsebene gepflegt werden, statt als unerklärte Konstanten über die gesamte Arbeitsmappe hinweg dupliziert zu werden.

Die mitgelieferte Konstruktion mappt Schlüsselparameter auf `01_SYS!D4:D13`. Formeln sollten konsistent auf diese konfigurierten Werte verweisen, und Parameteränderungen sollten an den betroffenen Berechnungen getestet werden.

</details>

<details>
<summary><strong>5. Explizite Ausnahmen stillen Annahmen vorziehen</strong></summary>

Fehlende Teileregistrierungen, ungültige BOM-Beziehungen, unvollständige Ortsdaten und nicht verfügbares Material sollten erkennbare Ausnahmezustände erzeugen.

Ein fehlender oder ungültiger Datensatz darf nicht stillschweigend als bestätigte Verfügbarkeit interpretiert werden. Ein Betriebsstatus muss einen echten Nullwert von einem Wert unterscheiden, der nicht zuverlässig berechnet werden kann.

</details>

</details>

<details>
<summary><strong>Modul 1 — System und Stammdaten</strong></summary>

<details>
<summary><strong>Blatt `01_SYS` — Parameter und Schwellenwerte</strong></summary>

Dieses Arbeitsblatt definiert die gemeinsame Konfiguration, die von den nachgelagerten Berechnungen verwendet wird.

| Zelle | Parameter | Standard in der Spezifikation | Betrieblicher Zweck |
|---|---|---:|---|
| `D4` | `CFG_CURR_SYM` | `¥` | Anzeigesymbol der Währung |
| `D5` | `CFG_QTY_UNIT` | `PCS` | Basiseinheit der Materialmenge |
| `D6` | `CFG_SHIFTS_PER_DAY` | `2` | Anzahl der geplanten Schichten pro Tag |
| `D7` | `CFG_SHIFT_HOURS` | `8.0` | Standardstunden pro Schicht |
| `D8` | `CFG_SAFE_BUFFER_PCT` | `0.15` | Allgemeiner Sicherheitsbestandspuffer |
| `D9` | `CFG_REPL_EMERG_DAYS` | `0.50` | Schwellenwert für Notfallnachschub |
| `D10` | `CFG_KIT_FULL_PCT` | `1.00` | Schwellenwert für vollständige Kit-Bereitschaft |
| `D11` | `CFG_KIT_WARN_PCT` | `0.80` | Warnschwelle für Teilverfügbarkeit |
| `D12` | `CFG_TROLLEY_MAX_SNP` | `12` | Maximale Standardpackkartons pro Wagen |
| `D13` | `CFG_SCRAP_TOLERANCE` | `0.02` | Ausschussraten-Toleranz |

Dies sind Referenz-Standardwerte aus der Implementierungsspezifikation, keine universellen Fertigungsstandards. Sie müssen vor betrieblicher Nutzung anhand realer Verpackung, Verbrauch, Nachschubzeiten und Werkstattpraktiken validiert werden.

Die für dieses Blatt spezifizierten Validierungswörterbücher umfassen:

- Fertigungsquellen: Laser, Biegen und Zerspanung.
- Stationstypen: Roboter und Manuell.
- Nachschubzustände: Normal, Replenish und Urgent.
- Wagenzustände: Loading, In-Transit und Delivered.

Die Spezifikation definiert außerdem Parameteranzeigen- und Validierungsausgaben in den Spalten F und G.

**Illustrative Formel für dynamische Arrays — Parameteranzeige-Beschriftungen**

```excel
=C4:C13 & " : " & D4:D13 & " (" & E4:E13 & ")"
```

Geben Sie die Formel in `F4` in einem mit Microsoft 365 kompatiblen Arbeitsblatt ein, wobei der vorgesehene Überlaufbereich frei bleibt.

**Implementierungshinweis:** Die Beispiel-Validierungsformel der Quellspezifikation verwendet Array-Ausdrücke mit `AND` und `ROW`. Diese Ausdrücke sollten vor dem Deployment auf Array-kompatibles Verhalten geprüft werden. Eine Formel, die einen falschen Validierungszustand zurückgibt, ist allein deshalb keine ausreichende Steuerung, weil sie dynamisch ist.

</details>

<details>
<summary><strong>Blatt `02_MST_Part` — Einzelteilstammdaten</strong></summary>

Der Teilestamm pflegt die Attribute, die zur Identifikation, Lokalisierung und Nachschubplanung jeder einzelnen Komponente benötigt werden.

| Feld | Zweck |
|---|---|
| Teil-ID | Eindeutiger Teilebezeichner |
| Teilname | Geschäftlich lesbare Bezeichnung |
| Fertigungsquelle | Laser, Biegen oder Zerspanung |
| Spezifikation / Material | Physische Spezifikation zur Identifikation |
| Einheit | Standardmengeneinheit |
| Standard-Supermarktplatz | Physische Lageradresse |
| Standardpackanzahl (SNP) | Standard-Verpackungsmenge |
| Durchschnittlicher Tagesverbrauch | Verbrauchsbasis |
| Sicherheitsbestand | Berechneter Bestandspuffer, aufgerundet auf ein Verpackungsvielfaches |
| Maximalbestand | Referenzbestandsobergrenze |
| Aktivierungsstatus | Indikator der Stammdaten-Vollständigkeit |

Die Referenzimplementierung erlaubt etwa 500 Einzelteile. Die vorgeschlagenen Bezeichner `P-1001` bis `P-1500` sind illustrative Beispiele, keine Anforderung, dieses Nummerierungsschema zu verwenden.

**Berechnung des Sicherheitsbestands**

```excel
=IF(A4:A503="","",
   CEILING.MATH(
      H4:H503*(1+'01_SYS'!$D$8),
      G4:G503
   )
)
```

Diese Formel berechnet eine gepufferte Verbrauchsbasis und rundet das Ergebnis auf ein Vielfaches der Standardverpackungsmenge auf.

Die Spezifikation definiert den Maximalbestand als das Doppelte des berechneten Sicherheitsbestands:

```excel
=IF(A4:A503="","",I4:I503*2)
```

**Wichtige Implementierungsüberlegungen**

- Die Sicherheitsbestandsbasis muss eine klar definierte Zeitbasis haben. Die mitgelieferte Formel verwendet den durchschnittlichen Tagesverbrauch, multipliziert ihn aber nicht explizit mit der Wiederbeschaffungszeit. Der Puffer sollte daher nicht als vollständige, auf Wiederbeschaffungszeiten basierende Bestandspolitik interpretiert werden.
- `SNP` muss positiv sein, bevor es als Rundungsschrittweite verwendet wird.
- Fehlende Verbrauchsdaten müssen von echtem Nullverbrauch unterschieden werden.
- Eine Aktivierungsprüfung sollte den Teilbezeichner, die Quellkategorie, den Ort und die Verpackungsattribute validieren, bevor das Teil in Planungsberechnungen verwendet wird.

Die Beispiel-Aktivierungsformel der Spezifikation lautet:

```excel
=IF(A4:A503="","",
   IF(
      OR(ISBLANK(F4:F503),ISBLANK(G4:G503),G4:G503<=0),
      "⚠️ Incomplete Master Data",
      "✅ ACTIVE"
   )
)
```

Dies illustriert die vorgesehene Validierungslogik. Da `OR` nicht jede Zeile eines Arrays unabhängig auswertet, sollte die Formel auf eine zeilenweise oder `MAP`-basierte Implementierung umgestellt werden, bevor sie als produktive Validierungssteuerung eingesetzt wird.

</details>

<details>
<summary><strong>Blatt `03_MST_BOM` — Stückliste der Schweißbaugruppen</strong></summary>

Die BOM legt fest, welche Einzelteile von jeder Schweißbaugruppe verbraucht werden.

| Feld | Zweck |
|---|---|
| Baugruppen-ID | Bezeichner der Schweißbaugruppe |
| Baugruppenname | Beschreibung der Baugruppe |
| Teil-ID | Bezeichner der Komponente |
| Teilname | Aus dem Teilestamm abgerufen |
| Fertigungsquelle | Aus dem Teilestamm abgerufen |
| Standardlagerplatz | Aus dem Teilestamm abgerufen |
| Menge pro Baugruppe | Standardmenge des pro Baugruppe verbrauchten Teils |
| Beziehungsvalidierung | Bestätigt Teileregistrierung und positive Verbrauchsmenge |

Der Referenzumfang umfasst etwa 50 Schweißbaugruppen mit potenziell vielen BOM-Zeilen pro Baugruppe. Die BOM ist eine Beziehungstabelle, keine Zusammenfassung mit einer Zeile pro Baugruppe.

**Teilenamen abrufen**

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

**Fertigungsquelle abrufen**

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

**BOM-Beziehung validieren**

```excel
=IF(A4:A1500="","",
   IF(
      ISNUMBER(MATCH(C4:C1500,'02_MST_Part'!A4:A503,0)),
      IF(G4:G1500>0,"✅ Valid BOM","❌ Quantity Must Be Positive"),
      "❌ Part Not Registered"
   )
)
```

Die vorgesehenen Kontrollen sind unkompliziert: Jedes referenzierte Teil muss existieren, und jede aktive BOM-Beziehung muss eine positive Verbrauchsmenge angeben.

Für ein ausgerolltes Workbook sollten diese Formeln auf Array-Verhalten, doppelte Schlüssel und unvollständige Datensätze getestet werden. Ein separater eindeutiger Baugruppenstamm oder ein eigener Baugruppen-Suchbereich ist besser, als einen Baugruppennamen gegen wiederholte BOM-Zeilen zu suchen, wenn die Datenkonsistenz nicht anderweitig gewährleistet werden kann.

</details>

<details>
<summary><strong>Blatt `04_MST_Station` — Stationen und Wagenkonfiguration</strong></summary>

Dieses Blatt ordnet die Produktionsstationen den sie bedienenden internen Logistikressourcen zu.

| Feld | Zweck |
|---|---|
| Stations-ID | Eindeutiger Stationsbezeichner |
| Stationsname | Lesbare Stationsbeschreibung |
| Stationstyp | Roboter oder Manuell |
| Standard-Wagen-ID | Zugewiesener Materialtransportwagen |
| Wagenkapazität | Maximale Standardpackkartons pro Wagen |
| Stationsstatus | Planungs- und Bereitschaftsanzeige |
| Wagenverfügbarkeit | Aktuell erfasster Wagenzustand |

Der vorgeschlagene Stationsstamm umfasst etwa 15–20 Stationen, abhängig von der tatsächlichen Werkstatt.

**Zuletzt erfassten Wagenstatus abrufen**

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

Das Rückwärtssuchargument fordert den letzten passenden Datensatz im angegebenen Bereich an. Es ist nur sinnvoll, wenn der Suchschlüssel und die Ereignisaufzeichnungskonventionen zuverlässig sind.

Für den Produktionseinsatz sollte der aktuelle Zustand eines Wagens aus einer definierten Transaktionshistorie oder einem einzigen maßgeblichen Statusdatensatz abgeleitet werden. Eine einfache Letzter-Treffer-Suche ist kein Ersatz für die Validierung überlappender Zuweisungen, unbestätigter Rückgaben oder doppelter Wagenbezeichner.

</details>

</details>

<details>
<summary><strong>Modul 2 — Planungs- und Bedarfsmaschine</strong></summary>

<details>
<summary><strong>Blatt `05_PLN_Shift` — Schichtproduktionsplan</strong></summary>

Dieses Arbeitsblatt ist der betriebliche Einstiegspunkt des Produktionsplans.

| Feld | Zweck |
|---|---|
| Produktionsdatum | Geplantes Ausführungsdatum |
| Schicht-ID | Schichtbezeichnung |
| Stations-ID | Zielschweißstation |
| Baugruppen-ID | Geplante Schweißbaugruppe |
| Planmenge | Ziel-Baugruppenausstoß |
| Planstatus | Geplant, Freigegeben oder Abgeschlossen |
| Baugruppenname | Abgerufene Baugruppenbeschreibung |
| Stationstyp | Abgerufene Stationsklassifikation |
| Benötigte Teiletypen | Anzahl der unterschiedlichen BOM-Komponenten |
| Gesamtteilemenge | Erforderliche Gesamtmenge der Komponenten |
| Eindeutiger Planschlüssel | Zusammengesetzter Schlüssel für Prüfungen doppelter Pläne |

Ein Planschlüssel kann Produktionsdatum, Schicht, Station und Baugruppe kombinieren. Die Geschäftsauslegung muss jedoch festlegen, ob mehrere Zeilen für dieselbe Baugruppe und Station untersagt sind oder aggregiert werden sollen. Ein zusammengesetzter Schlüssel allein erzwingt diese Politik nicht.

**Baugruppennamen abrufen**

Die Quellspezifikation liefert ein Nachschlagemuster basierend auf dem Baugruppenbezeichner. In einer Produktionsimplementierung verwenden Sie einen eindeutigen Baugruppenstamm als Suchquelle, statt sich auf einen wiederholten Baugruppenbezeichner in einer BOM-Beziehungstabelle zu stützen.

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

`AssemblyMaster` ist ein empfohlener Tabellenname für dieses Implementierungsmuster. Er muss erstellt und befüllt werden, bevor die Formel genutzt werden kann.

Planungsvalidierungen sollten ablehnen oder kennzeichnen:

- Unbekannte Stationsbezeichner.
- Unbekannte Baugruppenbezeichner.
- Nicht positive Planmengen.
- Ungültige Schichtbezeichner.
- Doppelte oder konfliktierende Pläne gemäß der gewählten Planungspolitik.
- Pläne, deren benötigte BOM unvollständig oder ungültig ist.

</details>

<details>
<summary><strong>Blatt `06_ENG_Demand` — Materialbedarfsmaschine</strong></summary>

Die Bedarfsmaschine übersetzt Baugruppen-Produktionspläne in Einzelteilanforderungen.

Ihre Berechnungsfolge ist:

1. Gültige Produktionsplandatensätze lesen.
2. Die anwendbaren BOM-Zeilen für jede geplante Baugruppe auswählen.
3. Planbaugruppenmengen mit der Standardmenge jedes Teils pro Baugruppe multiplizieren.
4. Datum-, Schicht-, Stations-, Baugruppen- und Teilekontext für jeden Bedarfsdatensatz beibehalten.
5. Anforderungen aggregieren, wo die Bestandskontrollsicht einen Teileebenen-Gesamtwert benötigt.
6. Bedarf mit der definierten Messgröße des verfügbaren Bestands vergleichen.
7. Engpässe kennzeichnen und die Ergebnisse den Nachschub- und Logistikabläufen zugänglich machen.

Für eine geplante Baugruppenmenge \(Q_a\) und einen Standardkomponentenverbrauch \(B_{a,p}\) ist der Bruttobedarf des Teils \(p\):

\[
D_p=\sum_a Q_a B_{a,p}
\]

Die Summation bezieht sich auf den ausgewählten Produktionsplanbereich. Liegt der Bereich in einer Schicht und einer Station, sollten nur Pläne dieser Schicht und Station zum Ergebnis beitragen.

**Illustratives Berechnungsmuster**

```excel
=PlannedAssemblyQty*QtyPerAssembly
```

Für ein echtes Workbook muss die Bedarfsmaschine eine explizite Beziehung zwischen Plan.datensätzen und BOM-Zeilen verwenden. Eine direkte Suche reicht nicht aus, wenn eine Baugruppe mehrere Komponententeile enthält.

Die Maschine sollte genügend Detailtiefe bewahren, um vier getrennte Fragen zu beantworten:

- Welches Teil wird benötigt?
- Wie viele Einheiten werden benötigt?
- Welche Schicht und Station erzeugen die Anforderung?
- Welche Baugruppe und BOM-Beziehung erzeugten den Bedarf?

Dieses Detail ist wesentlich, wenn dasselbe Einzelteil von mehreren Baugruppen oder Produktionsstationen geteilt wird.

**Bruttobedarf ist nicht dasselbe wie der Nettobedarf für den Nachschub.** Der Bruttobedarf repräsentiert die aus dem Produktionsplan folgenden Komponentenmengen. Die Nettobedarfsermittlung muss ebenfalls die definierte Bestandsposition, bereits anderen Anforderungen zugeordnete Materialien, bestätigte Zugangsmengen sowie genehmigte Verbrauchs- oder Bestandskorrekturen berücksichtigen.

Die exakte Verfügbarkeitsgleichung und ihre Sicherungen sind in der Spezifikation der Ausführungsebene in Teil 3 behandelt.

</details>

</details>

<details>
<summary><strong>Modul 3 — Supermarktbestand und Logistikausführung</strong></summary>

<details>
<summary><strong>Blatt `07_INV_Super` — Überwachung des Supermarktbestands</strong></summary>

Dieses Blatt konsolidiert die Materialposition und übersetzt Engpässe in Nachschubsignale.

| Spalte | Feld | Zweck |
|---|---|---|
| A | Teil-ID | Bezeichner des Einzelteils |
| B | Teilname | Lesbare Teilebeschreibung |
| C | Fertigungsquelle | Laser, Biegen oder Zerspanung |
| D | Anfangsbestand | Vortragener Bestand |
| E | Zugangsmenge | Vorgelagerte Materialzugänge |
| F | Kumulierter Verbrauch | Aus Produktionsberichten abgeleiteter Materialverbrauch |
| G | Physischer Lagerbestand | Aktuell erfasster physischer Bestand |
| H | Reservierter / eingehender Bestand | Bestand, der gemäß der Implementierung mit Reservierungen oder Eingangsbewegungen verknüpft ist |
| I | Netto verfügbarer Bestand | Bestand, der für die relevante Planungsberechnung verfügbar ist |
| J | Benötigte Menge | Bedarfsreferenz für den ausgewählten Planungsbereich |
| K | Engpassmenge | Berechnetes Materialdefizit |
| L | Nachschubstatus | Normal, Replenish oder Urgent |
| M | Vorgeschlagene Nachschubmenge | Verpackungskonforme Empfehlungsmenge |
| N | Inventurkorrektur | Genehmigte Bestandskorrektur |

Die Spezifikation unterscheidet den physischen Bestand vom netto verfügbaren Bestand. Diese Unterscheidung ist wesentlich: Material, das bereits für eine Produktionsanforderung gebunden ist, darf nicht als frei verfügbar für eine andere Anforderung gelten.

**Physischer Lagerbestand**

Die vorgesehene Bestandsgleichung ist:

\[
\text{On-hand}=\text{Opening Stock}+\text{Receipts}+\text{Adjustments}-\text{Consumption}
\]

**Netto verfügbarer Bestand**

Die exakte Behandlung von Zugangsmengen und Reservierungen muss konsistent definiert werden. Ein empfohlenes Kontrollmodell ist:

\[
\text{Net Available}
=
\text{On-hand}
-\text{Reservations}
+\text{Eligible Confirmed Inbound}
\]

Zugangsmengen sollten nur dann berücksichtigt werden, wenn die betriebliche Politik ihre Anrechnung auf die Verfügbarkeit ausdrücklich erlaubt. Unbestätigte Eingänge sollten nicht als physisch empfangener Bestand behandelt werden.

**Engpassberechnung**

Für eine Anforderungsmenge \(R\) und eine verfügbare Menge \(A\):

\[
\text{Shortage}=\max(0,R-A)
\]

Dies ist eine Planungsbeziehung, keine vollständige Nachschubpolitik. Sicherheitsbestandsanforderungen, künftiger Bedarf und Materialzuordnungen müssen bei der Bestimmung der endgültigen Nachschubmenge separat berücksichtigt werden.

**Nachschubstatus**

Die Referenzkonfiguration verwendet drei Zustände:

| Zustand | Betriebliche Bedeutung |
|---|---|
| `Normal` | Die konfigurierte Regel erfordert derzeit keinen Nachschubeingriff |
| `Replenish` | Der Bestand hat die definierte Nachschubschwelle unterschritten |
| `Urgent` | Ein kritischer Engpasszustand erfordert sofortige Aufmerksamkeit |

Die Notfallschwelle ist in `01_SYS!D9` konfiguriert. Der exakte Auslöser muss an eine klar definierte Zeitbasis und Verbrauchsrate angebunden werden. Der Referenzwert `0.50` sollte ohne Validierung seiner Einheit und betrieblichen Bedeutung nicht als universelle Notfallregel behandelt werden.

**Vorgeschlagene Nachschubmenge**

Die Spezifikation schlägt vor, den Nachschub auf ein Standardverpackungsvielfaches zu runden und sowohl die benötigte Menge als auch den Sicherheitsbestand zu berücksichtigen.

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

Dies ist ein Referenz-Formelmuster, keine verifizierte Fertigformel für jede Bestandsauslegung. Bestätigen Sie vor dem Deployment, ob die Spalte E bereits in die Spalte I eingerechnete Zugänge enthält. Wird dieselbe Zugangsmenge doppelt gezählt, fällt die Nachschubempfehlung zu niedrig aus.

Eine Produktionsimplementierung sollte außerdem physische Zugänge, qualifizierte Zugangsmengen, Reservierungen und Bestandskorrekturen unterscheiden, statt sich auf mehrdeutige Bestandsfelder zu stützen.

</details>

<details>
<summary><strong>Blatt `08_LOG_Trolley` — Wagenbeladung und Lieferaufgaben</strong></summary>

Dieses Arbeitsblatt wandelt Materialanforderungen in umsetzbare interne Logistikaufgaben um.

| Feld | Zweck |
|---|---|
| Aufgaben-ID | Eindeutiger Bezeichner der Lieferaufgabe |
| Schicht-ID | Zielproduktionsschicht |
| Stations-ID | Lieferziel |
| Wagen-ID | Zugewiesener Transportwagen |
| Teil-ID | Geliefertes Material |
| Ladungsmenge | Geplante Menge für die Aufgabe |
| Kit-Status | Ready, Partly oder Blocked |
| Aufgabenstatus | Loading, In-Transit oder Delivered |
| Versandbestätigung | Bestätigung der physischen Beladung und Abfahrt |
| Lieferbestätigungszeit | Erfasste Ankunftszeit |
| Lieferpersonal | Verantwortlicher Bediener |
| Kapazitätswarnung | Prüfung der Wagenpackkapazität |

**Aufgabenbezeichner**

```excel
=IF(B4:B1000="","",
   "TSK-"&TEXT(ROW(A4:A1000)-3,"0000")
)
```

Das Referenzmuster erzeugt einen formatierten Bezeichner auf Grundlage der Blattzeile. Für dauerhafte Rückverfolgbarkeit verwenden Sie einen eindeutigen Aufgabenschlüssel, der nach Sortieren, Löschen oder Neuaufbau der Aufgabenliste nicht wiederverwendet wird.

**Standardwagen zuweisen**

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

Ein Ersatzwagenbezeichner sollte nicht als bestätigte physische Zuweisung interpretiert werden. Unbekannte Station-zu-Wagen-Zuordnungen sollten eine sichtbare Ausnahme erzeugen und vor dem Versand eine Klärung erfordern.

**Kit-Bereitschaft**

Die mitgelieferte Spezifikation definiert die volle Bereitschaft bei 100 % und eine Warnschwelle bei 80 %.

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

Diese Formel illustriert die Schwellenlogik für eine einzelne Materialanforderung. Eine produktionsseitige **Kit-Bereitschaftsberechnung muss alle benötigten Teile für Zielstation und Schicht bewerten**. Die verfügbare Menge eines einzelnen Teils geteilt durch seine Ladungsmenge ist für sich genommen kein Beweis, dass das gesamte Kit vollständig ist.

Das Versandtor sollte daher den vollständigen Anforderungssatz verwenden, prüfen, dass jedes benötigte Teil in ausreichender Menge verfügbar ist, und verhindern, dass Material mehreren Aufgaben zugeordnet wird.

**Wagenkapazitätsprüfung**

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

Dies ist eine Referenzprüfung auf Grundlage von Verpackungsvielfachen. Die Implementierung muss festlegen, ob die Kapazität pro Teilezeile, pro Wagen oder über die gesamte Ladung gemessen wird. Ein echter Wagen kann mehrere Teiletypen enthalten; eine unabhängige Validierung jeder Zeile garantiert nicht, dass die kombinierte Ladung innerhalb der physischen Kapazität bleibt.

Eine Wagenaufgabe sollte durch explizite Betriebszustände fortschreiten. Versand-, Liefer- sowie Rückgabe- oder Verfügbarkeitsbestätigungen sollten dort, wo die Werkstatt sie verlangt, als getrennte Ereignisse erfasst werden.

</details>

</details>

<details>
<summary><strong>Modul 4 — Produktionsrückmeldung und Überwachung</strong></summary>

<details>
<summary><strong>Blatt `09_ACT_Report` — Ist-Produktionsberichterstattung</strong></summary>

Dieses Arbeitsblatt erfasst den tatsächlichen Ausstoß der robotischen und manuellen Schweißstationen.

| Feld | Zweck |
|---|---|
| Berichts-ID | Eindeutiger Berichtsdatensatz |
| Berichtsdatum | Tatsächliches Meldedatum |
| Schicht-ID | Produktionsschicht |
| Stations-ID | Meldende Station |
| Baugruppen-ID | Fertiggestellte Schweißbaugruppe |
| Ist-Gutmenge | Akzeptierter Ausstoß |
| Ausschussmenge | Erfasste Ausschussbaugruppen |
| Stillstandsnotizen | Notizen zu Engpässen, Ausrüstung oder anderen Unterbrechungen |
| Planmenge | Passendes Produktionsziel |
| Abweichungsmenge | Ist-Gutausstoß minus Plan |
| Ausschussalarm | Konfigurierte Ausschussratenprüfung |
| Validierungsstatus | Gültigkeitsanzeige des Datensatzes |

**Passenden Produktionsplan abrufen**

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

Der Planschlüssel muss auf beiden Seiten dieselbe Datums- und Textnormalisierung verwenden. Datumsformatierung, nachgestellte Leerzeichen und inkonsistente Stations- oder Baugruppencodes können dazu führen, dass gültige Datensätze nicht übereinstimmen.

Wenn mehrere Berichte je Produktionsplan zulässig sind, darf das Ziel nicht wiederholt gezählt werden, als wäre jeder Bericht ein eigener Plan. Eine Produktionsimplementierung sollte den Ist-Ausstoß über den vollständigen Planungsschlüssel aggregieren.

**Produktionsabweichung**

```excel
=IF(A4:A2000="","",F4:F2000-I4:I2000)
```

Ein positives Ergebnis bedeutet einen Ausstoß über dem zugeordneten Ziel; ein negatives Ergebnis ein Fehlbestand.

**Ausschussratenüberwachung**

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

Die Referenzausschussrate wird als Ausschuss geteilt durch Gutausstoß plus Ausschuss berechnet. Die Standardtoleranz beträgt 2 %, aber der tatsächliche Schwellenwert sollte für den betreffenden Fertigungsprozess freigegeben werden.

**Produktionsvalidierung**

Ein Bericht sollte nur akzeptiert werden, wenn Station und Baugruppe in ihren Stammdaten existieren und alle Mengen die definierten Randbedingungen erfüllen.

Mindestens:

- Der Gutausstoß darf nicht negativ sein.
- Die Ausschussmenge muss ausdrücklich erfasst werden, mit Null, wenn kein Ausschuss auftrat.
- Station und Baugruppe müssen registriert sein.
- Der Bericht muss eine eindeutige Kennung haben.
- Datum, Schicht und Station müssen zu einem gültigen Meldungskontext passen.
- Doppelte oder konfliktierende Datensätze müssen gekennzeichnet werden, bevor ihr Verbrauch auf den Bestand angewendet wird.

</details>

<details>
<summary><strong>Produktionsverbrauch und Bestandsrückmeldung</strong></summary>

Ist-Produktionsberichte sind die Rückmeldequelle für das Materialmodell.

Für eine Baugruppe mit Gutausstoß \(Q_g\), erfasstem Ausschuss \(Q_s\), und einer BOM-Menge pro Baugruppe \(B_p\) lautet eine mögliche Bruttoverbrauchsregel:

\[
C_p=(Q_g+Q_s)\times B_p
\]

Diese Gleichung setzt voraus, dass akzeptierte wie ausgeschiedene Baugruppen die vollständige Standardmenge jeder Komponente verbrauchen. Weichen die tatsächlichen Ausschussmuster ab, muss die Werkstatt die geeignete Verbrauchspolitik definieren.

Das Bestandsmodell muss eine konsistente Politik verwenden für:

- BOM-basierten Sollverbrauch.
- Gutausstoß und Ausschuss.
- Tatsächliche Materialentnahmen, sofern separat erfasst.
- Stornierungen und Korrekturen.
- Vermeidung doppelter Berichte.

Ein Bericht darf den Bestand nicht mehr als einmal mindern. Die Quellspezifikation beschreibt die BOM-basierte Verbrauchsrückmeldung, etabliert aber kein vollständiges Transaktionsregister mit unveränderlichen Buchungsidentifikatoren. Diese Steuerung muss implementiert und getestet werden, bevor die Arbeitsmappe als maßgeblicher Bestandsnachweis verwendet wird.

</details>

<details>
<summary><strong>Blatt `10_DSH_Board` — Shopfloor-Operations-Dashboard</strong></summary>

Das Dashboard konsolidiert die Betriebsinformationen für Produktionsleiter und Disponenten.

Der Referenzfilterbereich enthält:

| Zelle | Filter |
|---|---|
| `B2` | Produktionsdatum |
| `D2` | Schicht |
| `F2` | Zielstation oder alle Stationen |

Die vorgeschlagenen KPI- und Überwachungsbereiche umfassen:

- Produktionserfüllung der Schicht.
- Komplett-Kit-Lieferquote.
- Anzahl der Stationen mit blockierter Materialbereitstellung.
- Anzahl der von Engpässen betroffenen Teiletypen.
- Nachschubmengen je vorgelagerter Fertigungsquelle.
- Eine Rangliste der kritischsten Engpässe.

**Produktionserfüllung**

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

Dies ist eine Referenzberechnung. Sie sollte auf den Stationsfilter und die ausgewählte Planstatus-Politik erweitert werden. Der Ist-Ausstoß muss über den passenden Planbereich aggregiert werden, um irreführende Prozentsätze zu vermeiden.

**Komplett-Kit-Quote**

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

Diese Kennzahl hängt von der Aufgabengranularität ab. Stellt eine einzelne Wagenlieferaufgabe ein Teil statt ein vollständiges Stations-Kit dar, ist das Ergebnis eine Aufgabenbereitschaftsquote, keine Komplett-Stations-Kit-Quote. Die Dashboard-Beschriftung muss die implementierte Messung widerspiegeln.

**Anzahl blockierter Stationen**

Zählen Sie die eindeutigen Stationen mit blockiertem Status in der ausgewählten Schicht. Blockierte Materialzeilen statt eindeutiger Stationen zu zählen, überschätzt die Anzahl der betroffenen Stationen.

**Anzahl Teile mit Engpass**

Zählen Sie die eindeutigen registrierten Teile, deren berechneter Engpass positiv ist. Schließen Sie Leerzeilen und ungültige Stammdatensätze aus.

**Nachschubübersicht für den vorgelagerten Bereich**

Aggregieren Sie die vorgeschlagene Nachschubmenge nach Fertigungsquelle:

- Laserschneiden.
- Biegen.
- Zerspanung.

Dies gibt vorgelagerten Produktionsteams eine konsolidierte Sicht der je Quelle benötigten Menge. Das Ergebnis bleibt ein Planungssignal, bis die vorgelagerte Arbeit angenommen, produziert und physisch empfangen wurde.

**Engpassrangliste**

Die Referenzkonstruktion verwendet Funktionen für dynamische Arrays wie `FILTER`, `SORT`, `HSTACK` und `CHOOSEROWS`, um eine Rangliste der Engpässe zu erzeugen.

Eine gültige Rangliste sollte Teil-ID, Beschreibung, Fertigungsquelle oder Lagerort, verfügbare Menge, Engpassmenge und vorgeschlagene Nachschubmenge enthalten. Der Sortierschlüssel sollte explizit definiert werden und den größten absoluten Engpass nicht mit dem dringendsten Risiko des Zeitpunkts bis zur Bestandslücke verwechseln.

</details>

</details>

<details>
<summary><strong>Formelreferenz</strong></summary>

Die folgenden Gruppen fassen die wichtigsten Berechnungsmuster der vorgeschlagenen Architektur zusammen.

<details>
<summary><strong>Konfigurations- und Stammdatenformeln</strong></summary>

| Zweck | Formel oder Funktion | Kontrollziel |
|---|---|---|
| Parameteranzeige | `TEXT`, Verkettung | Gemeinsame Einstellungen lesbar machen |
| Parametervalidierung | `IF`, `ISNUMBER`, Bereichsprüfungen | Fehlende oder ungültige Einstellungen kennzeichnen |
| Stammdatensuche | `XLOOKUP` | Namen, Quellkategorien und Orte abrufen |
| BOM-Beziehungsvalidierung | `MATCH`, `ISNUMBER` | Nicht registrierte Teilbeziehungen verhindern |
| Sicherheitsbestandsrundung | `CEILING.MATH` | Bestandspuffer an Verpackungsmengen ausrichten |
| Tabellenbasierte Aggregation | `SUMIFS`, `COUNTIFS` | Betriebsdatensätze mit expliziten Kriterien aggregieren |

</details>

<details>
<summary><strong>Planungs- und Bestandsformeln</strong></summary>

| Zweck | Formel oder Funktion | Kontrollziel |
|---|---|---|
| Plan-zu-BOM-Auflösung | Planmenge × BOM-Verbrauch | Komponenten-Bruttobedarf berechnen |
| Bedarfsaggregation auf Teileebene | `SUMIFS` | Bedarf über den definierten Planungsbereich kombinieren |
| Engpassberechnung | `MAX(0, required - available)` | Negative Engpasswerte verhindern |
| Nachschubmenge | `LET`, `XLOOKUP`, `CEILING.MATH` | Sicherheitsbestand und Packrundung anwenden |
| Nachschubklassifikation | `IF` mit konfigurierten Schwellen | Normal-, Replenish- und Urgent-Zustände sichtbar machen |
| Engpassrangliste | `FILTER`, `SORT`, `CHOOSEROWS` | Sichtbare Materialausnahmen priorisieren |

</details>

<details>
<summary><strong>Logistik-, Berichts- und Dashboard-Formeln</strong></summary>

| Zweck | Formel oder Funktion | Kontrollziel |
|---|---|---|
| Aufgabenidentifikation | `TEXT`, `ROW` | Lesbare Aufgabenreferenzen erzeugen |
| Station-zu-Wagen-Zuordnung | `XLOOKUP` | Konfigurierte Transportressource abrufen |
| Bereitschaftsklassifikation | `LET`, Schwellenvergleiche | Lieferbereitschaft klassifizieren |
| Produktionsplanabgleich | `XLOOKUP` mit zusammengesetztem Schlüssel | Passende Planmenge abrufen |
| Produktionsabweichung | Ist-Ausstoß − Plan | Ausstoßlücke quantifizieren |
| Ausschussüberwachung | `LET`, Quotenberechnung | Ausschuss gegen konfigurierte Toleranz vergleichen |
| KPI-Aggregation | `SUMIFS`, `COUNTIFS` | Produktions- und Lieferergebnisse zusammenfassen |

</details>

**Formelkompatibilität:** Die Konstruktion nutzt die dynamische Array-Funktionalität von Microsoft 365, einschließlich `FILTER`, `LET`, `HSTACK` und `CHOOSEROWS`. Die Verfügbarkeit variiert je nach Excel-Version. Validieren Sie jede Formel in der Zielumgebung vor der Freigabe.

Die Formeln in diesem README sind Referenzimplementierungen und Konstruktionsmuster, keine Behauptung, dass ein vollständig getestetes Workbook bereits ausgeliefert wurde. Wo ein Ausdruck einen empfohlenen Tabellennamen, ein Platzhalterfeld oder einen illustrativen Bereich verwendet, muss diese Referenz auf die tatsächliche Workbook-Struktur abgebildet werden.

</details>

<details>
<summary><strong>Validierungsregeln</strong></summary>

| Feld oder Steuerung | Regel | Erforderliches Fehlerverhalten |
|---|---|---|
| Teil-ID | Für aktive Datensätze eindeutig und nicht leer | Duplikate oder fehlende Bezeichner kennzeichnen |
| Fertigungsquelle | Muss Laser, Biegen oder Zerspanung sein | Nicht unterstützte Kategorien ablehnen oder kennzeichnen |
| Supermarktplatz | Muss für ein aktives Teil vorhanden sein | Stammdaten als unvollständig markieren |
| SNP | Muss numerisch und größer als null sein | Packrundung und Aufgabenfreigabe blockieren |
| Durchschnittlicher Tagesverbrauch | Muss numerisch sein und eine definierte Zeitbasis haben | Fehlende oder inkonsistente Eingaben kennzeichnen |
| BOM-Teil-ID | Muss im Teilestamm existieren | Ungültige BOM-Beziehung kennzeichnen |
| BOM-Menge | Muss für aktive Beziehungen größer als null sein | Ungültige Bedarfsberechnungen verhindern |
| Stations-ID | Muss im Stationsstamm existieren | Ungültige Stationsreferenzen kennzeichnen |
| Wagenzuweisung | Muss auf eine registrierte Ressource verweisen | Unbestätigte Zuweisungen blockieren |
| Planmenge | Muss für einen freigegebenen Produktionsplan eine positive Ganzzahl sein | Ungültige Produktionsmengen kennzeichnen |
| Schicht-ID | Muss dem konfigurierten Schichtwörterbuch entsprechen | Nicht unterstützte Schichtwerte ablehnen |
| Plan-Eindeutigkeit | Muss der genehmigten Politik doppelter Pläne folgen | Doppelte oder konfliktierende Datensätze kennzeichnen |
| Bestandseingang | Muss die gemäß der definierten Buchungspolitik physisch empfangenen Mengen widerspiegeln | Verhindern, dass unbestätigte Eingänge als Bestand gelten |
| Bestandskorrektur | Muss mit Grund und autorisiertem Korrekturprozess erfasst werden | Nicht unterstützte Korrekturen kennzeichnen |
| Produktionsberichts-ID | Muss eindeutig sein | Doppelte Verbrauchsbuchungen verhindern |
| Ist-Gutmenge | Darf nicht negativ sein | Ungültige Produktionsberichte kennzeichnen |
| Ausschussmenge | Muss ausdrücklich erfasst und nicht negativ sein | Unvollständige oder ungültige Ausschussdatensätze ablehnen |
| Produktionsberichts-Kontext | Datum, Schicht, Station und Baugruppe müssen gültig sein | Nicht zugeordnete oder mehrdeutige Berichte kennzeichnen |
| Kit-Bereitschaft | Muss den vollständigen Anforderungssatz für den vorgesehenen Bereich bewerten | Versand blockieren, wenn benötigtes Material nicht verfügbar ist |
| Wagenkapazität | Muss die kombinierte Ladung gegen die tatsächliche Kapazität bewerten | Überladene Ladungen kennzeichnen |
| Ausgabe dynamischer Arrays | Der Überlaufbereich muss frei bleiben | `#SPILL!` vor der Verwendung der Ausgabe beheben |
| Formeleingaben | Müssen definierte gültige numerische oder Texttypen verwenden | Als Text formatierte Zahlen und fehlerhafte Bezeichner kennzeichnen |
| Dashboard-Nenner | Müssen für den ausgewählten Berichtsbereich gültig sein | Einen expliziten Zustand „kein Plan" bzw. „keine Aufgabe" anzeigen statt normale Leistung suggerieren |

<details>
<summary><strong>Übergreifende Integritätsprüfungen der Module</strong></summary>

Prüfen Sie vor dem betrieblichen Rollout, dass:

1. Jede aktive Baugruppe eines Produktionsplans eine gültige BOM hat.
2. Jedes BOM-Teil auf ein registriertes Teil mit gültiger Quelle und Ort verweist.
3. Jede Produktionsanforderung bis zu ihrem Plan und ihrer BOM-Beziehung zurückverfolgbar ist.
4. Die Bestandsverfügbarkeit eine konsistente Behandlung von physischem Bestand, Reservierungen, Zugangsmengen und Korrekturen verwendet.
5. Jeder Produktionsbericht höchstens einmal zum Bestandsverbrauch beiträgt.
6. Ein Wagen nicht als verfügbar gilt, solange eine ungelöste aktive Zuweisung besteht.
7. Eine Lieferung nicht allein deshalb als abgeschlossen markiert wird, weil eine Aufgabe versandt wurde.
8. Dashboard-Kennzahlen konsistente Daten, Schichten, Stationsfilter und Aggregationsregeln verwenden.
9. Parameteränderungen sich auf jede vorgesehene abhängige Berechnung auswirken.
10. Fehlende oder ungültige Eingaben von echten Nullwerten unterscheidbar bleiben.

Die ursprüngliche Architekturspezifikation liefert eine feldbezogene Gegenprüfung und eine Parameterreferenzkarte. Diese Dokumente begründen die vorgesehene Konstruktionsabdeckung; sie sollten nicht als unabhängige Laufzeittest-Nachweise für ein fertiges Workbook interpretiert werden.

</details>

</details>

<details>
<summary><strong>Drei Fallen, die selbst erfahrene Produktionsplaner erwischen</strong></summary>

<details>
<summary><strong>Falle 1 — Ein positiver Bestand beweist keine Produktionsbereitschaft</strong></summary>

**Entscheidung:** Einen Schweißplan freigeben, weil der Supermarkt ausreichenden Gesamtbestand zeigt.

**Versteckter Fehler:** Der Bestand berücksichtigt nicht alle konkurrierenden Anforderungen, Reservierungen oder physischen Lieferbeschränkungen.

**Warum die Argumentation scheitert:** Bestand kann in der Summe existieren, während die für eine Station benötigten konkreten Teile in der benötigten Menge nicht verfügbar oder woanders gebunden sind.

**Korrigiertes Vorgehen:** Bedarf je Teil und Planungsbereich berechnen, Nettoverfügbarkeit ablehnen und das vollständige Kit vor dem Versand prüfen.

**Auswirkung der Entscheidung:** Den Plan erst freigeben, nachdem die Materialbereitschaft gegen die tatsächlichen Komponentenanforderungen bewertet wurde.

<details>
<summary><strong>Berechnungsreferenz</strong></summary>

```text
Gross demand = Planned assembly quantity × BOM usage

Shortage = MAX(0, Required quantity − Net available quantity)

Ready = Every required part satisfies the defined availability condition
```

</details>

</details>

<details>
<summary><strong>Falle 2 — Eine Lieferaufgabe ist nicht dasselbe wie ein komplettes Kit</strong></summary>

**Entscheidung:** Einen Wagen versenden, weil eine seiner Materialzeilen bereit erscheint.

**Versteckter Fehler:** Die Bereitschaftsberechnung bewertet ein einzelnes Teil oder eine Zeile statt aller Komponenten, die die Station benötigt.

**Warum die Argumentation scheitert:** Ein einziges fehlendes kritisches Teil kann die Produktion verhindern, selbst wenn der Rest der Ladung verfügbar ist.

**Korrigiertes Vorgehen:** Bereitschaft über den vollständigen Satz benötigter Komponenten aggregieren, Verpackung und Wagenkapazität prüfen und den Versandzustand validieren.

**Auswirkung der Entscheidung:** Ein Wagen ist nur dann versandbereit, wenn die tatsächlichen Kit-Ebenen-Regeln erfüllt sind und die Zuweisung gültig ist.

<details>
<summary><strong>Berechnungsreferenz</strong></summary>

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
<summary><strong>Falle 3 — Gemeldete Produktion kann falsches Vertrauen in den Bestand erzeugen</strong></summary>

**Entscheidung:** Dem aktualisierten Bestand unmittelbar nach der Eingabe eines Produktionsberichts vertrauen.

**Versteckter Fehler:** Der Bericht kann doppelt, unvollständig, einem Plan nicht zugeordnet oder mit der Verbrauchspolitik inkonsistent sein.

**Warum die Argumentation scheitert:** Die wiederholte Anwendung desselben Berichts kann denselben Sollverbrauch mehrfach abziehen. Eine falsche Ausschussbehandlung kann zudem die Bestandsposition verzerren.

**Korrigiertes Vorgehen:** Berichtsidentifikator und Produktionskontext validieren, die Verbrauchsregeln für Gutausstoß und Ausschuss definieren und einen kontrollierten Buchungsprozess verwenden.

**Auswirkung der Entscheidung:** Bestandsänderungen sollten validierten Produktionsereignissen folgen, mit Korrekturen, die bis zu ihren Ursprungsdatensätzen zurückverfolgbar sind.

<details>
<summary><strong>Berechnungsreferenz</strong></summary>

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
<summary><strong>Beispielszenario</strong></summary>

Betrachten Sie eine hypothetische Schicht, die 20 Schweißbaugruppen produzieren soll. Jede Baugruppe benötigt vier Einheiten des Teils P-1001 und zwei Einheiten des Teils P-1002.

| Eingabe | Teil P-1001 | Teil P-1002 |
|---|---:|---:|
| Geplante Baugruppenmenge | 20 | 20 |
| BOM-Verbrauch je Baugruppe | 4 | 2 |
| Bruttobedarf | 80 | 40 |
| Qualifizierter netto verfügbarer Bestand | 70 | 50 |
| Anfangsengpass | 10 | 0 |

Der Plan erzeugt einen Bedarf von 80 Einheiten P-1001 und 40 Einheiten P-1002. Bei P-1001 fehlen 10 Einheiten, während P-1002 für den geplanten Bedarf ausreichend Bestand hat.

Angenommen, die konfigurierte Standardpackmenge für P-1001 beträgt 10 Einheiten. Wenn kein zusätzlicher Bedarf oder keine Bestandsbindung die Berechnung ändert, kann der unmittelbare Bruttoengpass auf ein Standardpaket von 10 Einheiten gerundet werden.

Damit ist nicht automatisch bewiesen, dass die Schicht bereit ist. Der Planer muss auch die Sicherheitsbestandspolitik, den Bedarf anderer Stationen, bestätigte Eingänge, Reservierungen und berücksichtigen, ob das physische Material vor Produktionsbeginn geliefert werden kann.

Die betriebliche Empfehlung lautet daher, P-1001 für den Nachschub zu kennzeichnen, Quelle und Liefertermin zu prüfen und das vollständige Stations-Kit vor dem Versand zu bewerten. Sobald das vorgelagerte Material eingegangen und der Wagen geliefert ist, kann die Produktion unter den normalen Freigabekontrollen der Werkstatt fortgesetzt werden.

Werden anschließend 18 gute Baugruppen und eine ausgeschiedene Baugruppe gemeldet, muss die BOM-basierte Verbrauchspolitik festlegen, ob der Materialverbrauch aus insgesamt 19 Baugruppen oder aus einem anderen verifizierten Entnahmedatensatz berechnet wird. Unter der Annahme, dass gute wie ausgeschiedene Baugruppen die vollständige Standardmenge verbrauchen, läge der P-1001-Verbrauch bei \(19 \times 4 = 76\) Einheiten und der P-1002-Verbrauch bei \(19 \times 2 = 38\) Einheiten.

Dies sind illustrative Zahlen zur Erläuterung der Steuerungslogik, keine beobachteten Ergebnisse oder ein getestetes Workbook-Ergebnis.

</details>

<details>
<summary><strong>Verfahrensanweisung — tägliche Fünf-Schritte-Steuerungsschleife</strong></summary>

1. **Vor der Schicht:** Produktionsplan eingeben, seine Stammdatenverweise prüfen und gültige Aufgaben freigeben.
2. **Vor Produktionsbeginn:** Bedarf prüfen, Engpässe identifizieren und Nachschubanforderungen an Laser, Biegen und Zerspanung kommunizieren.
3. **Vor dem Versand:** Materialien aus dem Supermarkt kommissionieren, Kit-Vollständigkeit und Wagenkapazität prüfen sowie Versand- und Lieferbestätigungen erfassen.
4. **Während der Schicht:** Gutausstoß, Ausschuss und betriebliche Ausnahmen erfassen. Berichte validieren, bevor der Verbrauch angewendet wird.
5. **Am Schichtende:** Produktionserfüllung, Engpassbelastung und Liefereistung prüfen. Physische Bestandsdifferenzen durch dokumentierte Korrekturen abstimmen.

</details>

<details>
<summary><strong>Datenpflege und Fehlerbehebung</strong></summary>

**Datensätze hinzufügen:** Neue Einträge innerhalb der vorgesehenen Excel-Tabellen ergänzen, damit strukturierte Verweise mitwachsen. Überlaufbereiche dynamischer Arrays frei halten.

**Parameter ändern:** Genehmigte Konfigurationswerte in `01_SYS` anpassen, statt Geschäftskonstanten in nachgelagerten Formeln zu editieren.

**Formeln schützen:** Bedienereingabezellen von berechneten Zellen trennen. Formelbereiche wo angemessen schützen und dokumentieren, wer Stammdaten ändern darf.

**`#SPILL!` beheben:** Den blockierten Überlaufbereich identifizieren und unbeabsichtigte Zellinhalte entfernen. Eine benötigte Formel nicht löschen, um den Fehler zu verbergen.

**Unveränderten Ergebnissen nachgehen:** Berechnungsmodus, Planstatus, Suchschlüssel und Eingabevalidierung prüfen. Bestätigen, dass der relevante Plan freigegeben wurde, falls die Implementierung nach freigegebenen Plänen filtert.

**Unverändertem Sicherheitsbestand nachgehen:** Bestätigen, dass der Parameter als Zahl statt als Text gespeichert ist, die Formel auf die vorgesehene Zelle verweist und die Arbeitsmappe neu berechnet hat.

**Ungültigen Berichtscodes nachgehen:** Stations- und Baugruppenbezeichner gegen ihre Stammdaten prüfen. Kontrollierte Listen verwenden, wo verfügbar, und unbeabsichtigte Leerzeichen oder Formatunterschiede entfernen.

</details>

<details>
<summary><strong>Kompatibilität, Skalierung und Zusammenarbeit</strong></summary>

Die Quellkonstruktion zielt auf Microsoft 365 oder Excel 2021 und neuer, abhängig von der Funktionsverfügbarkeit der installierten Version. Ältere Excel-Versionen unterstützen die benötigten dynamischen Array- und Nachschlagefunktionen möglicherweise nicht.

Die Implementierungsspezifikation gibt diese Planungsskalen-Referenzen:

- Einzelteilstamm: etwa 500 Teile, mit einem vorgeschlagenen Konstruktionsbereich von 1–2.000.
- Schweißbaugruppen: etwa 50, mit einem vorgeschlagenen Konstruktionsbereich von 1–500.
- Produktionsplan- und Berichtshistorie: eine empfohlene Workbook-Richtlinie von maximal 50.000 kumulierten Zeilen, bevor eine Archivierung geprüft wird.

Dies sind Konstruktionsziele, keine unabhängig ermittelten Leistungsgarantien. Die tatsächliche Neuberechnungsgeschwindigkeit hängt von Formeln, Workbook-Struktur, Hardware und Datenmenge ab.

OneDrive oder SharePoint können gemeinsames Ansehen und leichtes Bearbeiten unterstützen. Für Betriebsaufzeichnungen wird eine zentrale Verantwortlichkeit für die Eingabe von Produktionsplänen und Bestandseingängen empfohlen, um konfliktierende Aktualisierungen zu reduzieren.

</details>

<details>
<summary><strong>Umfang und Implementierungsgrenzen</strong></summary>

Die Arbeitsmappe soll eine leichte Materialflusssteuerungsschicht für den Shopfloor bereitstellen. Sie implementiert nicht:

- Physisches Fabriklayout und industrieingenieurwesenbezogene Flussroutenplanung.
- PLC-Steuerung von AGVs oder automatisierten Wagen.
- Automatische Maschinentelemetrie über IoT oder SCADA.
- Vollständige Algorithmen für Advanced Planning and Scheduling.
- Eine transaktionale Datenbank oder ein unternehmensfähiges Mehrbenutzer-Bestandsregister, sofern nicht separat implementiert.
- Automatische Bestätigung physischer Bewegungen ohne definierten Rückmeldemechanismus von Bediener oder Maschine.

Diese Grenzen sollten bei der Entscheidung berücksichtigt werden, ob das Framework für eine bestimmte Produktionsumgebung geeignet ist.

</details>

</details>

## Die Geschäftslogik und die Methodik

Das System basiert auf einem einfachen betrieblichen Prinzip: Produktionspläne sollen Materialanforderungen erzeugen, die Materialverfügbarkeit soll die Ausführung begrenzen, und die tatsächliche Produktion soll in die nächste Planungsentscheidung zurückfließen.

- **BOM-gesteuerte Bedarfsübersetzung** wandelt geplante Schweißbaugruppen in Einzelteilanforderungen um. Dadurch werden Komponentenengpässe sichtbar, die in einem reinen Baugruppenplan verborgen bleiben, und Planer erhalten eine klarere Basis zur Freigabe der Produktion.
- **Abgleich der Bestandsposition** unterscheidet physischen Bestand von bereits gebundenem oder erwartetem Material. Das senkt das Risiko, denselben Bestand für mehrere Produktionsanforderungen zu Verfügung zu halten.
- **Schwellenbasierter Nachschub** vergleicht Materialanforderungen mit der definierten Bestandsposition und hebt Engpässe gemäß den konfigurierten Betriebsregeln hervor. Das Ergebnis ist ein priorisiertes vorgelagertes Nachschubsignal statt einer generischen Bestandswarnung.
- **Behälterbasierte interne Logistik** verknüpft Materialkommissionieranforderungen mit Wagenzuweisungen, Lieferzielen, Verpackungsbeschränkungen und Kit-Bereitschaft. So kann sich das Logistikteam auf das Material konzentrieren, das an jedem Produktionsarbeitsplatz benötigt wird.
- **Rückmeldung des Ist-Ausstoßes** nutzt Produktionsberichte und die genehmigte Verbrauchspolitik, um die Materialposition zu aktualisieren. Die Werkstatt kann ihre Nachschubprioritäten dann anhand aktueller Betriebsinformationen überarbeiten, statt sich allein auf den ursprünglichen Plan zu stützen.

Zusammen verbinden diese Methoden Planung, Bestand, Logistik und Produktionsberichterstattung zu einem wiederholbaren täglichen Steuerungsprozess. Das Framework verbessert Sichtbarkeit und Entscheidungskonsistenz; seine Zuverlässigkeit hängt weiterhin von präzisen Stammdaten, disziplinierten physischen Bestätigungen und validierten Berechnungsregeln ab.

## Weitere Werkzeuge dieser Reihe

Entdecken Sie weitere schlanke Fertigungs- und Betriebsentscheidungswerkzeuge im GitHub-Profil des Projekteigentümers:

- [HyVoid auf GitHub](https://github.com/HyVoid) — Tabellenwerkzeuge für Fertigung, Planung und Betrieb.

## Lizenz

Dieses Projekt ist unter der **Apache-Lizenz 2.0** lizenziert. Die maßgeblichen Bedingungen finden Sie in der Datei `LICENSE` des Repositorys.

