[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Shopfloor-Materialflusssteuerungssystem: Excel-MRP-Vorlage, BOM-Auflösungsrechner, Kanban-Bestands-Tracker & Schweiß-Produktionsplanungstabelle
<img width="1920" height="790" alt="image" src="https://github.com/user-attachments/assets/a63af286-1115-4c2c-aa06-6d7e04aba1e4" />


**Ein sofort einsatzbereiter Fertigungs-Bestands-Tracker, ein mehrstufiger BOM-Auflösungsrechner, eine Kanban-Supermarkt-Nachschubtabelle und eine Excel-Vorlage für die tägliche Produktionsplanung – für metallverarbeitende und schweißintensive Werkstätten.**

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)
![Platform: Free Web Tool + Microsoft Excel (.xlsx)](https://img.shields.io/badge/Platform-Free%20Web%20Tool%20%2B%20Excel%20(.xlsx)-217346)
![Compatibility: Excel 2021+ & Microsoft 365](https://img.shields.io/badge/Compatibility-Excel%202021%2B%20%26%20M365%20Dynamic%20Arrays-2251FF)
![Category: Manufacturing MRP & Production Control](https://img.shields.io/badge/Category-Manufacturing%20MRP%20%26%20WIP%20Tracker-0A66C2)

**Das Shopfloor-Materialflusssteuerungssystem** ist eine Plug-and-Play-**Excel-MRP-Vorlage**, eine **Kontrolltabelle für den Fertigungsbestand** und ein **kostenloser browserbasierter Produktionsplanungsrechner** – entwickelt für Werkstattfertiger, Metallverarbeiter und Schweißbetriebe. Es wandelt tägliche Schichtproduktionspläne in exakte **Stücklisten-Anforderungen (BOM)**, **Kanban-Behälter-Nachschubalarme**, **Kommissionier-Checklisten für Materialwagen am Arbeitsplatz** und **Work-in-Process-Ausschussrückmeldung (WIP)** um. Kleine und mittlere Hersteller und Erstplaner beseitigen damit unerwartete Teileengpässe, beenden Schichtunterbrechungen beim Schweißen und ersetzen defekte manuelle Tabellen in weniger als 1 Minute – ohne teure ERP- oder MES-Softwareabonnements.

> ### Schnellzugriff: Kostenlose Online-Sandbox & herunterladbares Excel-System
>
> - **Kostenlose interaktive Webanwendung (Sofort-Test im Browser):** Testen Sie den Arbeitsablauf kostenlos online mit vorgeladenen Fertigungsbeispieldaten. Keine Installation und keine Registrierung erforderlich.  
>   👉 **[Das kostenlose interaktive Web-Tool für Shopfloor-MRP, BOM-Auflösung & Kanban-Rechner starten](https://hyvoid.github.io/shop-floor-mrp-kanban-excel-system/)**
>
> - **Wiederverwendbare Microsoft-Excel-Arbeitsmappe (.xlsx für den täglichen Fabrikbetrieb):** Laden Sie die vollautomatische Tabellenvorlage herunter, um Ihre eigenen Teilenummern einzufügen, Ihre BOM-Stammdaten lokal zu speichern und wiederholbare Schichtplanung offline auszuführen. Inklusive **30-tägiger bedingungsloser Geld-zurück-Garantie**.  
>   👉 **[Die sofort einsatzbereite Excel-Vorlage für Shopfloor-MRP, BOM-Auflösung & Produktionsplanung herunterladen (.xlsx)](https://theseusworkshop.com/l/qnojv?utm_source=github&utm_medium=GitHub%20README)**

---

## Was es Ihnen hilft zu verfolgen: Von Shopfloor-Problempunkten zu automatisierten Excel-Lösungen

Wenn Sie eine **Excel-Vorlage als Fertigungs-Bestands-Tracker**, einen **BOM-Engpassrechner** oder eine **Work-in-Process-Tabelle (WIP)** suchen, ersetzt dieses System Rätselraten durch automatisierte Berechnungen vor Schichtbeginn:

| Täglicher Problempunkt in der Fabrik (Realität für Einsteiger & Shopfloor) | Häufige Suchabsicht / integriertes Excel-Modul | Wie diese Plug-and-Play-Tabelle das Problem automatisch löst |
| :--- | :--- | :--- |
| **Schweißer stehen still, weil eine kleine Halterung fehlt** | **Mehrstufiger BOM-Auflösungs- & MRP-Rechner** | Multipliziert Ihre geplanten Schweißbaugruppen der Schicht mit jeder untergeordneten Komponente Ihrer **Stückliste (BOM)**, um den exakten Teilebedarf vor Schichtbeginn zu berechnen. |
| **Teile sind auf dem Papier „auf Lager", aber niemand findet sie in der Halle** | **Work-in-Process-Ortung (WIP) & Kanban-Behälter-Bestands-Tracker** | Trennt rohe Lagerbestandssummen nach konkreten physischen Lagerorten: vorgelagerte Puffer, **Kanban-Supermarkt-Behälter**, beladene Lieferwagen und aktive Schweißarbeitsplätze. |
| **Laser- und Biegemaschinen werden durch Eilaufträge unterbrochen** | **Automatisierter Materialengpass- & Nachbestellprioritäten-Alarm** | Vergleicht den Schichtmaterialbedarf mit aktuellen Supermarktbeständen und Sicherheitsbestandsschwellen und erzeugt priorisierte Nachbestellisten (`Critical`, `Warning`, `Normal`) für vorgelagerte Laser-, Abkantpressen- und CNC-Maschinen. |
| **Materialfahrer schieben unvollständige Teilekits zu den Arbeitsplätzen** | **Kommissionier-Checkliste am Arbeitsplatz & Wagen-Versand-Tracker** | Gruppiert benötigte Komponenten nach Arbeitsplatz, Behältergröße und Wagenkapazität und weist klare Bereitschaftsstatus (`Ready`, `Partly Kitted`, `Blocked`) zu, bevor ein Wagen den Bereitstellungsbereich verlässt. |
| **Nicht erfasster Schweißausschuss verfälscht mit der Zeit die Bestandszahlen** | **Soll-Ist-Produktion & Ausschuss-Rückmeldungsrechner** | Zieht am Ende jeder Schicht sowohl fertige Gutbaugruppen als auch gemeldeten Shopfloor-Ausschuss von Ihren Live-Beständen ab und hält die Tabellenzahlen im Einklang mit den physischen Behälterbeständen. |
| **Supervisoren verbringen Stunden mit der Reparatur defekter Formeln über mehrere Registerblätter hinweg** | **Visuelle Shopfloor-Produktionssteuerung & Engpass-Dashboard** | Führt Schichtplan-Erfüllungsgrade, die größten Komponentenengpässe, Kanban-Leerbestandsrisiken und interne Lieferaufgaben auf einer automatischen Zusammenfassungsansicht zusammen. |

---

## Schnellstart-Anleitung: Produktionsplanung & Materialkommissionierung in 1 Minute ausführen

Sie brauchen keinen Industrieingenieur-Abschluss oder fortgeschrittene Excel-Kenntnisse für die Materialbedarfsplanung. Folgen Sie diesem 4-Schritte-Arbeitsablauf, um die Logik im kostenlosen Web-Tool zu testen, und verlagern Sie dann Ihren Tagesbetrieb in die automatisierte Excel-Arbeitsmappe.

### Schritt 1: Grundlegende Shopfloor- & Sicherheitsbestandsregeln festlegen
**Suchabsicht:** *Wie man Sicherheitsbestand und Kanban-Nachschubregeln in Excel einrichtet*  
Öffnen Sie den Konfigurationsbereich und geben Sie Ihre grundlegenden Betriebszahlen ein: Schichtdauer, Schichten pro Tag, minimale Sicherheitsbestandspuffer, Kanban-Auslöseschwellen und zulässige Ausschussprozentsätze. Jede nachgelagerte **MRP-Engpassberechnung** und jeder **Nachbestellalarm** aktualisiert sich automatisch auf Grundlage dieser Regeln.

### Schritt 2: Teileliste, Arbeitsplätze & Stückliste (BOM) einfügen
**Suchabsicht:** *Wie man eine Fertigungs-Stückliste (BOM) und eine Teilestammliste aufbaut*  
Geben Sie Ihren Komponentenkatalog ein oder fügen Sie ihn ein (Teilenummern, vorgelagerte Fertigungsquelle wie Laserschneiden oder CNC-Zerspanung, Standardpackmenge und Kanban-Behälterplatz) – zusammen mit Ihren über- und untergeordneten **Schweißmontage-Rezepten**. Die Vorlage unterstützt ab Werk rund 500 einzelne Teil-SKUs und 50 Elternbaugruppen.

### Schritt 3: Heutigen Schichtplan eingeben, um automatische Engpass- & Kommissionierlisten zu erzeugen
**Suchabsicht:** *Wie man den Materialbedarf berechnet und Lager-Kommissionierlisten aus einem Produktionsplan erzeugt*  
Wählen Sie Produktionsdatum, Schicht, Zielschweißarbeitsplatz, Baugruppen-Teilenummer und Planmenge. Die integrierte Berechnungsmaschine löst den Plan sofort in untergeordnete Teileanforderungen auf, prüft die verfügbaren **Kanban-Supermarktbestände**, hebt exakte Teiledefizite hervor und erstellt eine priorisierte **Wagen-Kommissioniercheckliste**.

### Schritt 4: Tatsächliche Schichtproduktion erfassen & die wiederverwendbare Excel-Vorlage für den Tagesbetrieb herunterladen
**Suchabsicht:** *Wie man Soll- gegen Ist-Produktion verfolgt und den Bestand in Excel rückmeldet*  
Geben Sie am Schichtende die Anzahl der fertigen Gutbaugruppen sowie etwaiger Ausschussteile ein. Das Modell zieht verbrauchte Materialien automatisch ab und aktualisiert Ihren Anfangsbestand für die Schicht des nächsten Tages.

---

### Einen komplexen Fertigungsablauf in eine 1-Minuten-Kopier-und-Einfügen-Gewohnheit verwandeln

Mehrstufige **BOM-Bedarfsauflösungen**, **Kanban-Pufferberechnungen**, **Wagenkapazitätsabgleiche** und **Ausschussrückmeldungen** von Grund auf erfordern komplexe Supply-Chain-Mathematik. **Die zugrunde liegenden Formeln müssen Sie jedoch nicht verstehen und keine einzige Tabellenregel selbst erstellen.**

In der herunterladbaren **Shopfloor-Materialflusssteuerungs-Excel-Arbeitsmappe (.xlsx)** ist jede dynamische Array-Abgleichsregel, jeder tabellenübergreifende Verweis und jede automatische Aktualisierungsformel bereits vorgebaut und fest verankert:

1. **Kein Formelziehen erforderlich:** Sie müssen nicht einmal auf eine Zellecke doppelklicken, um Formeln nach unten zu ziehen. Fügen Sie Ihre eigenen Teilenummern, BOM-Listen und Tagespläne direkt in die Eingabetabellen ein, und das gesamte Dashboard aktualisiert sich von selbst.
2. **Entscheidungsklarheit in 1 Minute für Einsteiger:** Auch ohne jede Vorkenntnis in Datenanalyse oder Produktionssteuerung fügen Sie Ihre Zahlen ein und erkennen Ihre größten Materialengpässe in **60 Sekunden**. Statt in der Hauptsaison defekte `VLOOKUP`-Zellen zu reparieren, erhalten Sie sofortiges Feedback auf Entscheidungsebene – so können Sie sich auf den Betrieb Ihrer Werkstatt und termingerechte Auslieferungen konzentrieren.
3. **Einmalkauf statt teurer monatlicher Softwareabonnements:** Enterprise-ERP- und MES-Module verlangen Tausende Dollar an wiederkehrenden Jahresabonnements und Einrichtungsgebühren. Diese kostenpflichtige Excel-Vorlage verwandelt einen chaotischen Fabrikablauf in eine standardisierte lokale Datei, die Sie einmal kaufen und für immer auf Ihrem eigenen Computer wiederverwenden.
4. **100 % lokale Datensicherheit & 30-Tage-Geld-zurück-Garantie:** Behalten Sie Ihre proprietären BOM-Strukturen, Lieferanten-Teilenummern und Produktionskapazitäten vollständig offline auf Ihrer lokalen Festplatte – ohne jedes Cloud-Sicherheitsrisiko. Jeder Download ist durch eine **30-tägige bedingungslose Geld-zurück-Garantie** geschützt – vereinfacht sie Ihre tägliche Shopfloor-Planung nicht, fordern Sie ohne jeden Aufwand eine vollständige Rückerstattung an.

👉 **[Die vollautomatische Excel-Arbeitsmappe für Shopfloor-MRP & Produktionsplanung herunterladen (.xlsx) – 30 Tage risikofrei](https://theseusworkshop.com/l/qnojv?utm_source=github&utm_medium=GitHub%20README)**  
*(Möchten Sie den Arbeitsablauf zuerst in der Vorschau sehen? **[Hier die kostenlose browserbasierte MRP- & Kanban-Web-Sandbox testen](https://hyvoid.github.io/shop-floor-mrp-kanban-excel-system/)**)*

---

## Die Geschäftslogik & Methodik: Anleitung in einfachem Deutsch zur Shopfloor-Steuerung & versteckten Gewinnverlusten

Die meisten kleinen und mittleren Werkstätten verlieren auf dem Shopfloor Geld – nicht, weil ihnen Aufträge fehlen, sondern wegen **versteckter betrieblicher blinder Flecken** darin, wie Materialien von der Rohfertigung bis zur Endmontage fließen.

Im Folgenden finden Sie eine leicht verständliche Aufschlüsselung der fünf zentralen betrieblichen blinden Flecke, die verspätete Lieferungen und verschwendete Arbeitszeit verursachen – zusammen mit den objektiven finanziellen Fakten und wie die eingebaute Logik dieser Tabelle sie automatisch behebt:

### 1. Der blinde Fleck des „95 % fertigen Kits" (Warum eine fehlende $2-Halterung einen $5,000-Auftrag stoppt)
- **Die objektive Realität:** Die Fertigungsmontage ist ein Alles-oder-Nichts-Geschäft. Wenn ein geschweißter Rahmen 15 verschiedene Metallteile erfordert und 14 davon am Arbeitsplatz liegen, ist Ihre tatsächliche Fähigkeit, dieses Produkt fertigzustellen, **0 %, nicht 93 %**. In den meisten Werkstätten planen Manager Schichten, indem sie nur auf Aufträge für Fertigprodukte schauen – und stellen viel zu spät fest, dass eine einzige kleine Buchse oder Halterung nicht auf Lager ist.
- **Wie die Excel-Logik das behebt (BOM-gesteuerte Bedarfsübersetzung):** Wenn Sie eine geplante Montagemenge in den Schichtplan eingeben, zerlegt die Arbeitsmappe dieses Elternprodukt automatisch in jedes einzelne benötigte untergeordnete Teil. Sie markiert die fehlende $2-Halterung, bevor Sie einen Schweißer an die Kabine zuweisen – und verhindert, dass bezahlte Bediener untätig neben einem nicht baubaren Auftrag stehen.

### 2. Die Illusion des „auf Lager"-Bestands (Doppelzählung derselben Teile über mehrere Schichten)
- **Die objektive Realität:** Eine gewöhnliche Bestandstabelle verrät Ihnen nur die Gesamtzahl der Teile im Gebäude. Angenommen, Ihre Tabelle besagt, dass Sie `100 laser-cut base plates` auf Lager haben. Job A in der Frühschicht benötigt `60 plates`, und Job B in der Spätschicht benötigt `60 plates`. Eine einfache Tabelle sagt Ihnen, dass beide Aufträge genug Teile haben (`60 <= 100`), also geben Sie beide in die Halle frei – wodurch der Spätschicht auf halbem Weg das Material ausgeht.
- **Wie die Excel-Logik das behebt (Netting bereits gebundener Bestände):** Die Vorlage zieht automatisch Teile, die bereits früheren Schichten zugesagt oder auf aktive Wagen geladen wurden, von Ihrem physischen Regalbestand ab. Sie sehen Ihren **wahren verbleibenden verfügbaren Bestand** und beseitigen Doppelbuchungen über Schichten und Arbeitsplätze hinweg.

### 3. Vorgelagerte Maschinen wie einen Sofort-Quellautomat behandeln (Notfallrüstungen & verlorene Maschinenstunden)
- **Die objektive Realität:** Vorgelagerte Maschinen wie Lasermaschinen, CNC-Stanzpressen und Abkantpressen erfordern Rüstzeit, Werkzeugwechsel und Blechnestung. Wenn ein Schweißsupervisor mitten in der Schicht einen leeren Teilebehälter entdeckt und eine Notfallfertigung von 10 Halterungen fordert, muss der Abkantpressen-Bediener ein laufendes Produktionsschema abbauen. Branchenweit reduzieren ungeplante Eilrüstungen die Gesamtkapazität der Maschinen um **15 % bis 30 %**.
- **Wie die Excel-Logik das behebt (schwellenbasierter Kanban-Nachschub):** Die Tabelle vergleicht den anstehenden Schichtbedarf mit Ihren minimalen Sicherheitsbeständen und stuft die Dringlichkeit des Nachfüllens (`Critical`, `Warning`, `Normal`) automatisch nach vorgelagertem Maschinentyp. Vorgelagerte Bediener erhalten Stunden vor dem tatsächlichen Leeren der Behälter eine saubere, priorisierte Chargenliste.

### 4. Schweißkabinen in überfüllte Lagerbuchten verwandeln (versteckte Suchkosten für Teile)
- **Die objektive Realität:** Wenn Lagermitarbeiter unvollständige Kits oder ungeordnete Paletten auf den Shopfloor schieben, nur um „das Material in Bewegung zu bringen", werden hochwertige Schweißzellen zu überfüllten Lagergassen. Fachschweißer verbringen am Ende **30 bis 45 Minuten pro Schicht** damit, durch die Halle zu laufen und fehlende Teile zu suchen oder halbfertige Baugruppen beiseitezuräumen.
- **Wie die Excel-Logik das behebt (kontrollierte Wagen-Kit-Bereitschaft):** Die Vorlage verknüpft Kommissionierlisten direkt mit physischen Lieferwagen und Behältergrenzen. Ein Wagen wird automatisch als `Blocked` oder `Partly Kitted` markiert, bis jedes benötigte Teil in voller Packmenge verfügbar ist – sodass nur 100 % baubereite Kits die Produktionslinie erreichen.

### 5. Unsichtbarer Ausschuss verfälscht still den Plan von morgen (Abweichung zwischen Buch- und physischem Bestand)
- **Die objektive Realität:** Jede Fabrik produziert gelegentlich Ausschuss, verzogene Teile oder Rüstungsausschuss. Wenn ein Schweißer 4 Halterungen ausschusst und sich still 4 zusätzliche Stücke aus dem Kanban-Behälter nimmt, ohne sie zu erfassen, wird Ihre Tabelle um 4 Einheiten ungenau. Über einen einzelnen Monat erzeugt nicht erfasster Ausschuss massiven „Phantombestand" – Ihr Computer sagt Ihnen, dass Teile im Regal liegen, obwohl der Behälter vollständig leer ist.
- **Wie die Excel-Logik das behebt (automatisierte Produktions- & Ausschussrückmeldung):** Am Ende jeder Schicht erfassen Sie sowohl fertige Guteinheiten als auch Ausschussteile im Protokoll. Die Arbeitsmappe zieht automatisch den theoretischen BOM-Verbrauch *plus* die exakte Ausschussmenge von Ihrem Live-Bestand ab – und hält Ihre digitalen Zahlen an der physischen Realität fest, ohne tägliche manuelle Nachzählung.

---

## Vergleich: Ad-hoc-manuelle Tabellen vs. automatisiertes Shopfloor-MRP-Excel-System

| Operative Dimension | Manuelle Bestandstabellen (defekte Formeln & Raterei) | Dieses automatisierte Excel-MRP- & Kit-System (vorgebaute dynamische Logik) |
| :--- | :--- | :--- |
| **Einrichtung & Formelpflege** | **Stundenlanges manuelles `VLOOKUP`-Debugging:** Neue Zeilen oder Teilenummern zerstören Zellbezüge und erfordern ständiges Formelziehen und manuelle Korrekturen. | **Wartungsfreies Einfügen & Loslegen:** Gebaut mit nativen Excel-Dynamic-Array-Formeln, die sich im Moment des Einfügens Ihrer Daten automatisch erweitern und neu berechnen. |
| **Erkennung von Komponentenengpässen** | **Linienstillstand mitten in der Schicht:** Arbeitsaufträge erscheinen auf der obersten Baugruppenebene fertig, fehlende untergeordnete Teile entdecken die Bediener erst beim Aufbau der Vorrichtung. | **BOM-Auflösung & Netting vor der Schicht:** Schichtpläne werden automatisch in einzelne Teileanforderungen aufgelöst und legen exakte Teiledefizite offen, bevor die Arbeit die Halle erreicht. |
| **Ortung des Work-in-Process (WIP)** | **Blindheit durch einspaltigen Bestand:** Teile erscheinen im Gesamtbestand des Werks verfügbar, während Materialfahrer Zeit mit der Suche über Regale, Gassen und Kabinen verschwenden. | **Sichtbarkeit mehrstufiger physischer Lagerorte:** Trennt klar zwischen Bestand in **Kanban-Supermärkten**, auf **Lieferwagen** geladenem oder an **Schweißarbeitsplätzen** bereitgestelltem Material. |
| **Planung der vorgelagerten Fertigung** | **Mündliche Dringlichkeit & Feuerwehrbetrieb:** Laserschneid-, Blechbiege- und CNC-Zerspanungszellen werden durch dringende Zettel und persönliche Anfragen unterbrochen. | **Automatisierte Pull-Nachschubsignale:** Engpassalgorithmen kategorisieren Nachbestellprioritäten (`Normal`, `Warning`, `Critical`) und gruppieren Aufgaben nach vorgelagertem Arbeitszentrum. |
| **Kit-Kommissionierung am Arbeitsplatz & Wagenversand** | **Unvollständige Kits & Überlastung der Halle:** Wagen werden mit fehlenden Komponenten zu Stationen geschoben, was WIP-Staus und verschwendete Rüstzeit verursacht. | **Striktes Kit-Bereitschaftstor:** Kommissionierlisten erzwingen Standardpackmengen (SPQ) und kennzeichnen Wagen-Kits vor dem Versand als `Ready`, `Partly Kitted` oder `Blocked`. |
| **Ausschuss & Bestandsgenauigkeit** | **Phantom-Bestandsabweichung:** Bestandssalden geraten binnen Tagen außer Takt mit den physischen Behältern – durch nicht erfassten Schweißausschuss, Nacharbeit und Materialersatz auf dem Shopfloor. | **Automatisierte Schichtrückmeldung:** Schichtabschlüsse und Ausschussprotokolle fließen direkt in die Verbrauchsmaschine und aktualisieren die Nettosupermarktbestände in Echtzeit. |
| **Kosten & Datensicherheit** | **Hohe versteckte Lohnkosten oder teures SaaS:** Entweder 10+ Stunden pro Woche mit der Reparatur manueller Tabellen verschwenden oder Tausende pro Jahr für Cloud-ERP/MES-Plätze zahlen. | **Einmalkauf & 100 % lokale Privatsphäre:** Einmal zahlen, für immer auf Ihrem lokalen Desktop wiederverwenden – mit **30-tägiger Geld-zurück-Garantie** und ohne Cloud-Datenexposition. |

---

## Für wen das ist: Fertigungsrollen, Suchszenarien & Werkstatt-Anwendungsfälle

### Rollen-zu-Arbeitsablauf-Zuordnung (Finden Sie Ihren exakten Anwendungsfall)

- **Kleine Fabrikbesitzer, Werkstattleiter & Erstplaner**, die eine **einfach zu bedienende Excel-Vorlage für Fertigungsbestand und Produktionsverfolgung** suchen: Verlassen Sie sich nicht mehr auf Whiteboard-Pläne und Erinnerungsvermögen. Fügen Sie Ihre Aufträge ein, und die vorgebaute Tabelle sagt Ihnen exakt, was heute gefertigt und kommissioniert werden soll.
- **Produktionsplaner, Hauptdisponenten & Werksdisponenten**, die eine **Excel-Vorlage für die tägliche Produktionsplanung und einen Schichtkapazitäts-Tracker** suchen: Verteilen Sie tägliche Montageziele über robotische Schweißzellen und manuelle TIG/MIG-Kabinen und prüfen Sie die 100 %ige Komponentenverfügbarkeit, bevor Sie Arbeitsaufträge freigeben.
- **Materialplaner, Bestandscontroller & Einkäufer**, die eine **schlanke Excel-MRP-Vorlage und einen mehrstufigen BOM-Auflösungsrechner** benötigen: Übersetzen Sie Elternbaugruppenpläne in exakten untergeordneten Teilebedarf, verfolgen Sie die Sicherheitsbestandsabdeckung und erzeugen Sie in Sekunden klare vorgelagerte Nachschubprioritäten.
- **Lagersupervisoren, Lean-Ingenieure & interne Logistikteams (Milk-Run)**, die eine **Kanban-Bestandstabelle und eine Kommissioniercheckliste für Materialwagen am Arbeitsplatz** suchen: Standardisieren Sie Supermarkt-Behälterplätze, Behälterpackgrößen und Wagenbeladungszustände, damit Materialfahrer komplette Kits zum Verwendungsort liefern.
- **Schweißwerksmeister, Fertigungsleiter & Schichtsupervisoren**, die ein **Work-in-Process-Verfolgungsblatt (WIP) und ein Shopfloor-Engpass-Dashboard** benötigen: Prüfen Sie die Kit-Bereitschaft der Stationen in 1 Minute bei Schichtübergaben und erfassen Sie Ist-Produktion und Ausschuss, ohne komplexe Formeln zu berühren.
- **Industrieingenieure & Analysten der Fertigungsbetriebe**, die eine **anpassbare Microsoft-365-Dynamic-Array-Arbeitsmappe für die Produktionssteuerung** suchen: Setzen Sie ein transparentes, makrofreies (`no VBA`) lokales Entscheidungssystem ein, das die Lücke zwischen wöchentlichen ERP-Exporten und der täglichen Ausführung in der Halle überbrückt.

### Häufige Fabrikszenarien, in denen diese Vorlage jede Woche Stunden spart

1. **Sie sind es leid, dass ERP/MRP-Software überdimensioniert ist:** Ihr Unternehmen kann sich entweder keinen $20,000+-ERP/MES-Rollout leisten, oder Ihr bestehendes ERP ist zu starr, um schichtweise Änderungen des Schweißplans und Wagen-Kits auf dem Shopfloor abzubilden.
2. **Ihre Aufträge in der Hauptsaison wachsen schneller als Ihre Tabelle:** Das Auftragsvolumen steigt, und das manuelle Gegenprüfen von 50 Baugruppen gegen 500 einzelne lasergeschnittene, gebogene und zerspante Teile verursacht teure menschliche Fehler.
3. **Sie brauchen ein Offline-Tool ohne Makros, das die IT nicht blockiert:** Da die Arbeitsmappe native **Excel-2021+-/Microsoft-365-Dynamic-Array-Funktionen** ohne VBA-Makros verwendet, öffnet sie sich auf Standard-Firmenrechnern sauber – ohne Sicherheits-Pop-ups oder Cloud-Anmeldeanforderungen.

---

## Ziel-Fertigungsbranchen & Systemumfang

### Ideale Fertigungsumgebungen
Diese Vorlage ist speziell für die **diskrete Einzelfertigung mit hoher Teilevielfalt und geringen Stückzahlen (HMLV)**, kundenspezifische Metallverarbeitung und Chargenmontage-Werkstätten konzipiert, darunter:
- **Schweiß- & Metallverarbeitungs-Werkstattfertiger** (MIG-, TIG-, Punktschweiß- und robotische Schweißzellen)
- **Blechverarbeitungswerkstätten** (Laserschneiden, Turret-Stanzen, CNC-Abkantpressen-Biegen)
- **Submontage-Werke für Schwermaschinen, Agrar- & Baumaschinen**
- **Automotive-Zulieferer Tier-2 / Tier-3 für Stanzen, Rahmen & Strukturhalterungen**
- **Hersteller von kundenspezifischen Industriegehäusen, Gestellen, Anhängern & Konstruktionsstahl**

### Systemumfang & Betriebsgrenzen
Damit die Arbeitsmappe schnell, transparent und ab Tag eins sofort von jedem bedienbar bleibt, ist sie **bewusst fokussiert**:
- **Was es ist:** Eine Plug-and-Play-Arbeitsmappe für die taktische Ausführung, die tägliche Schichtpläne, mehrstufige BOM-Teileberechnungen, Kanban-Behälterbestände, Wagen-Kit-Listen und Schichtrückmeldungen innerhalb von Microsoft Excel verbindet.
- **Was es nicht ist:** Keine Finanzbuchhaltung, kein vollwertiger Enterprise-ERP-Ersatz (etwa SAP oder NetSuite), kein automatischer PLC/AGV-Robotercontroller und keine Live-Maschinensensor-SCADA-Plattform.

---

## Über die Architektur und Theseus Workshop

Die meisten Werks-Tabellen scheitern, weil sie als statische Datenfriedhöfe aufgebaut sind, in denen Anwender mehr Zeit mit der Reparatur defekter Zellen verbringen als mit dem Treffen operativer Entscheidungen.

Dieses Projekt wurde von **[Theseus Workshop](https://theseusworkshop.com?utm_source=github&utm_medium=GitHub%20README)** unter einer strengen Engineering-Philosophie entwickelt: **„Reiner Nutzen. Null Schnickschnack.“** Jede Vorlage ist als eigenständiges, ressourcenschonendes Entscheidungsunterstützungssystem konzipiert, das von einer einzigen praxisnahen Frage geleitet wird:

> *"Welche exakten operativen Kennzahlen müssen jetzt verbunden werden, damit ein Geschäftsinhaber oder Planer seine Daten einfügen und in unter 60 Sekunden die richtige Planungs-, Beschaffungs- oder Preisentscheidung treffen kann?"*

Durch die Verknüpfung von **Schichtproduktionsplänen → mehrstufigem BOM-Bedarf → Kanban-Supermarktbestand → Wagen-Kit-Logistik → Rückmeldung von Ist-Produktion und Ausschuss** in einer automatisierten Berechnungsschleife bietet dieses Toolkit Ihrer Werkstatt Sichtbarkeit auf Enterprise-Niveau—innerhalb einer vertrauten Excel-Datei, die für immer Ihnen gehört.

### Weitere Plug-and-Play-Geschäftsentscheidungs-Toolkits und Excel-Vorlagen entdecken

Suchen Sie weitere automatisierte Microsoft Excel-Modelle ohne VBA für Fertigung, Kostenschätzung, Cashflow-Kontrolle und Betriebsmanagement?

- 🛒 **[Diese Shopfloor-Materialflusssteuerungs- und MRP-Excel-Vorlage (.xlsx) auf Gumroad herunterladen (30 Tage Geld-zurück-Garantie)](https://theseusworkshop.com/l/qnojv?utm_source=github&utm_medium=GitHub%20README)**
- 🌐 **[Den offiziellen Theseus Workshop-Shop (theseusworkshop.com) besuchen, um alle Geschäftsentscheidungs-Excel-Toolkits, Kostenschätzer und Finanz-Dashboards zu durchstöbern](https://theseusworkshop.com?utm_source=github&utm_medium=GitHub%20README)**
- 🖥️ **[Die kostenlose interaktive Browser-Demo des Materialflusssteuerungssystems für den Shopfloor testen](https://hyvoid.github.io/shop-floor-mrp-kanban-excel-system/)**


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
2. Jedes BOM-Teil verweist auf ein registriertes Teil mit gültiger Quelle und gültigem Ort.
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

Damit ist nicht automatisch bewiesen, dass die Schicht bereit ist. Der Planer muss auch die Sicherheitsbestandspolitik, den Bedarf anderer Stationen, bestätigte Eingänge und Reservierungen berücksichtigen sowie prüfen, ob das physische Material vor Produktionsbeginn geliefert werden kann.

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

--

## Weitere Werkzeuge dieser Reihe

Entdecken Sie weitere schlanke Fertigungs- und Betriebsentscheidungswerkzeuge im GitHub-Profil des Projekteigentümers:

- **[project-time-tracking-excel-template](https://github.com/HyVoid/project-time-tracking-excel-template)** — Welche Projekte driften bei Zeitkosten oder Marge? — Analysieren Sie die Verteilung der Projektpersonalkosten und die Rentabilität über aktive Projektportfolios hinweg.
- **[Caf-audit-tool-for-efficient-reviews](https://github.com/HyVoid/Caf-audit-tool-for-efficient-reviews)** — Welche operative Dimension kostet den meisten Umsatz, und erfordert das finanzielle Leck sofortiges Eingreifen? — Wandeln Sie strukturierte Café-Beobachtungen in einen gewichteten Diagnosewert, eine Schätzung finanzieller Verluste und eine priorisierte Korrekturmaßnahmenliste um.
- **[Restaurant-Menu-Configuration-Modifier-Pricing-Toolkit](https://github.com/HyVoid/Restaurant-Menu-Configuration-Modifier-Pricing-Toolkit)** — Ist die Speisekarte über alle Optionskombinationen und Größen hinweg konsistent kalkuliert, oder warten versteckte Preisfehler darauf, aufzutauchen? — Zentralisieren Sie Speisekartenkonfiguration, Options-Preisregeln und POS-fähige Menüdaten in einer einzigen gesteuerten Single Source of Truth.
- **[wedding-planner](https://github.com/HyVoid/wedding-planner)** — Welche Hochzeitsplanungs-Aufgaben, Kosten und Zeitpläne erfordern Koordination? — Koordinieren Sie Lieferantenmanagement, Aufgabenverfolgung und Budgetkontrolle über Hochzeitsplanungs-Workflows hinweg.
- **[manufacturing-capacity-planning-template](https://github.com/HyVoid/manufacturing-capacity-planning-template)** — Werden die Personalkapazitäten effizient genutzt, oder benötigt der Betrieb eine andere Besetzung oder Planung? — Wandeln Sie Produktionspläne und Personaldaten in Kapazitätsauslastung, Personalkostenverteilung und Besetzungsentscheidungen um.
- **[cin7-excel-reporting-template](https://github.com/HyVoid/cin7-excel-reporting-template)** — Was sagen die operativen Cin7-Daten über die Geschäftsleistung aus? — Übersetzen Sie Cin7-Bestands- und Betriebsdaten in umsetzbare Einblicke in die Geschäftsleistung.
- **[employee-performance-dashboard-excel](https://github.com/HyVoid/employee-performance-dashboard-excel)** — Welche Mitarbeiter und Projekte sind gefährdet, Lieferziele zu verpassen, und wo sollte das Management eingreifen, bevor Fristen verstreichen? — Verknüpfen Sie Jahresarbeitsplanung, Umsetzungsverfolgung, gewichtete Leistungsbewertung und Managementberichte in einem kontinuierlichen Betriebsworkflow.
- **[rental-property-management-excel-template](https://github.com/HyVoid/rental-property-management-excel-template)** — Welche Einheiten verlieren Umsatz durch unentdeckten Leerstand, und welche Mieterwechsel erfordern sofortiges Handeln? — Wandeln Sie Buchungsdaten in Echtzeit-Belegungsstatus, Leerstands-Intelligenz und operationale Warnungen für ein gesamtes Mietportfolio um.
- **[workforce-planning-payroll-excel-dashboard](https://github.com/HyVoid/workforce-planning-payroll-excel-dashboard)** — Verbraucht die Organisation die jährliche Personalkapazität schneller als geplant, und welche Abteilungen benötigen ein Eingreifen, bevor die Überstundenkosten ausufern? — Konsolidieren Sie Lohnausgaben, jährliche Vertragstage, Überstundenquoten und Personaleinsatz in einem abteilungsübergreifenden Kapazitätsplanungsframework.
- **[warehouse-billing-excel-template](https://github.com/HyVoid/warehouse-billing-excel-template)** — Sind Lagerrechnungspositionen korrekt und auf zugrunde liegende Betriebsaufzeichnungen rückführbar? — Berechnen Sie Lager-, Handlings- und Transportgebühren zu prüffähigen Kundenabrechnungen.
- **[commercial-hvac-plumbing-bid-estimator](https://github.com/HyVoid/commercial-hvac-plumbing-bid-estimator)** — Was ist ein vertretbarer, prüffähiger Angebotspreis für dieses gewerbliche MEP-Projekt? — Schätzen und verfolgen Sie die Kosten gewerblicher MEP-Projekte von der Mengenermittlung bis zur finalen Angebotseinreichung.
- **[landed-cost-calculator-excel](https://github.com/HyVoid/landed-cost-calculator-excel)** — Warum weichen die SKU-spezifischen Landed Costs aus meinem ERP von der API des Spediteurs ab, und welches Verteilungsverfahren verursacht die Margenerosion? — Stimmen Sie Landed-Cost-Berechnungen mit einer Praxisvorlage ab, um SKU-spezifische Kostenverteilungsunterschiede bis zu ihrer zugrunde liegenden Buchhaltungslogik zurückzuverfolgen.
- **[hoa-budget-accounting-spreadsheet](https://github.com/HyVoid/hoa-budget-accounting-spreadsheet)** — Werden die Mittel unserer Eigentümergemeinschaft (HOA) korrekt zugeteilt, und halten wir uns an unseren Etat? — Kategorisieren Sie Transaktionen und erstellen Sie Etatabweichungsberichte für das Finanzmanagement der Eigentümergemeinschaft.
- **[homeowner-management-excel-template](https://github.com/HyVoid/homeowner-management-excel-template)** — Wie hoch sind meine tatsächlichen Gesamtkosten des Eigenheimbesitzes, einschließlich aller versteckten Ausgaben? — Berechnen Sie die Gesamtkosten des Eigenheimbesitzes, indem Sie Hypothek, Nebenkosten, Wartung und Kapitalinvestitionen zusammenführen.
- **[crew-scheduling-excel-template](https://github.com/HyVoid/crew-scheduling-excel-template)** — Wird mein aktuelles Team die Arbeitslast bewältigen können, wenn sich Projektdaten verschieben und überlappen? — Prognostizieren Sie Teambedarf und Besetzungslücken über einen 12-Monats-Horizont, um Kapazitätsplanungsentscheidungen zu unterstützen.
- **[Schedule-Driven-Construction-Cash-Curve-Workbook](https://github.com/HyVoid/Schedule-Driven-Construction-Cash-Curve-Workbook)** — Wie werden Cashflow und geplanter Fortschritt meines Bauprojekts im Zeitverlauf auf Basis des Terminplans verlaufen? — Wandeln Sie Bau-Terminpläne und Positionsverzeichnisse in automatisierte S-Kurven, zeitphasige Kostenprognosen und Planfortschritts-Tracker um.

## Lizenz

Dieses Projekt ist unter der **Apache-Lizenz 2.0** lizenziert. Die maßgeblichen Bedingungen finden Sie in der Datei `LICENSE` des Repositorys.



