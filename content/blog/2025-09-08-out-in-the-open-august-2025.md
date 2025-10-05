---
title: "TL;DR – Out in the Open August 2025"
author: "Jörg Reichert (Code for Leipzig)"
date: '2025-09-08T08:00:00+02:00'
excerpt: Monatlich erscheinender Überblick über Entwicklungen in der Open Data und Civic Tech Szene
topic: community
images:
- imgname: out-in-the-open-2025-08-header.jpg
  attribution: <a href="https://pixabay.com/photos/open-open-sign-9799994/">Foto</a> von <a href="https://pixabay.com/users/sannsie-40193152/">sannsie</a> auf <a href="https://pixabay.com/">Pixabay</a>
og_image: out-in-the-open-2025-08-header.jpg
type: blog
---

## Open Data
Mit der interaktiven Web-Story [notfallrettung.swr.de](https://notfallrettung.swr.de/) des [SWR Data Lab](https://www.swr.de/home/swr-data-lab-team-100.html) lässt sich herausfinden, wie gut (und vor allem schnell) die Reanimationskette (also Notfallerkennung, die Reanimation durch Laien bis zur schließlich professionellen Versorgung) vor Ort organisiert ist, wenn man selbst entweder als Betroffene:r oder Helfende:r auf die Notfallrettung bei z.B. einem Herzstillstand angewiesen ist. Welchen Rechercheaufwand die beteiligten (Daten-)Journalisten betreiben mussten, beleuchtet dieser [Hintergrundbericht](https://civic-data.de/herzstillstand-wenn-jede-sekunde-zaehlt-wie-daten-und-journalismus-leben-retten-koennen/). Da die vom [Deutsche Reanimationsregister](https://www.reanimationsregister.de) gesammelten Informationen nicht öffentlich zugänglich sind, mussten Daten selbst erhoben, validiert und kontextualisiert werden. Die offenbarten Datenlücken wurden den verantwortlichen Stellen zurückgespielt. 

### Haushaltdaten
In Leipzig sind [Finanz- und Ergebnishaushalt](https://opendata.leipzig.de/dataset/?tags=Doppelhaushalt) endlich [Open Data](https://gruene.social/@depressiveRobot/115101124581775201), eine deutliche Verbesserung gegenüber 3600-seitigen [PDFs](https://www.leipzig.de/buergerservice-und-verwaltung/stadtverwaltung/haushalt-und-finanzen#c340660), aber immer noch weit weg vom Linked-Open-Data-Ideal. 

### Schuldaten
Die im Rahmen der Kurzstudie [Black Box Bildung](https://okfn.de/publikationen/black-box-bildung/) von der [Open Knowledge Foundation](https://okfn.de/) befragten zehn Expert:innen kamen [einhellig zum Schluss](https://okfn.de/blog/2025/08/ergebnisse-der-studie-black-box-bildung/), dass es als Grundvoraussetzung ein Umdenken in der Organisation von Schulen und Schulbehörden braucht, um so über eine solche Entlastung der Schulleitung und der Lehrenden (auch durch mehr Personal und Finanzen) überhaupt die Handlungsspielräume zu schaffen, Datenkompetenzen aufbauen zu können und einen Kulturwandel hinsichtlich Lern-, Fehler- und Problemlösungskultur vollziehen zu können. Mit einheitlichen Softwarelösungen aber auch den Schulen mehr gewährter Prozessanpassungsautonomie fiele es dann auch leichter, Stammdaten über Schulen und sogar Leistungsdaten (z.B. Veränderung der Grundkompetenzen wie Lese- und Schreibfähigkeit) regelmäßig, systematisch detailliert und mit den Daten anderer Schulen vergleichbar zu erfassen. 

Aktuell werden die Stammdaten von Schulen (Name, Standort, Schulform, Träger) in Deutschland immer noch von Ehrenamtlichen zusammengetragen und aktualisiert, [soweit überhaupt möglich](https://norden.social/@datenschatz/115116429891221118).

### Metadaten
[Ab jetzt](https://www.linkedin.com/posts/govdata-de_govdata-opendata-ogd-activity-7358093573382201347-kUuO) können die DCAT-AP.de-Metadaten auf [GovData](https://www.govdata.de/) nicht nur als RDF, sondern auch als TTL, RDF und JsonLD angeschaut (mit Syntaxhighlighting) und heruntergeladen werden.

Seinen persönlichen Entscheidungsbaum, wie er überprüft, ob DCAT-Datensätze noch aktuell sind, hat [Jesper Zedlitz im Open Data Forum auf Open Code geteilt](https://discourse.opencode.de/t/datensaetze-auf-aktualitaet-pruefen/4329).

In der täglichen Arbeit merkt man schnell, [wie sehr immer noch](https://discourse.opencode.de/t/teile-einer-stadt-als-lod/4286) ein abgestimmtes einheitliches Vokabular fehlt, um eine städteübergreifende Vergleichbarkeit für die Kommunalstatistik zu ermöglichen. So ist beispielsweise die Zergliederung von Räumen nicht standardisiert, die eine Stadt aggregiert ihre Bezirke in Stadtteile, in anderen Städte bestehen dagegen Bezirke aus Stadtteilen. Nicht klare Festlegungen in der Spezifikation verstärken zusätzlich Unsicherheiten, welche Felder mit welchen Vokabularieren zu befüllen, entsprechend [bildet sich Wildwuchs](https://discourse.opencode.de/t/raumbezug-in-dcat-ap-de/4299) bzw. [Interpretationsspielräume](https://discourse.opencode.de/t/verweis-auf-dashboard/4294). Wichtig daher in Standardisierungsgremien regelmäßige Konsolidierungen durchzuführen (also nicht oder kaum genutzte Felder wieder entfernen bzw. mit anderen zusammenlegen, um Komplexität zu reduzieren; das am häufigste genutzten Vokabular als Standard festlegen, um Varianz einzudämmen; aber auch neue Felder / Konzepte einführen, wenn in der Praxis neue Bedarfe aufgetaucht sind, die sich durch die bisherigen Strukturen nur behelfsmäßig modellieren ließen).

## Wikidata
[Wikidata](https://www.wikidata.org/), einst 2012 gestartet, um Fakten sprachunabhängig für die 300 Wikipedia-Instanzen zentral referenzierbar zu haben, wird inzwischen auch in zahlreichen anderen Digitalprojekten direkt oder als eigene Dateninstanz genutzt. Sei es, um den geeigneten Ansprechpartner zu finden, wie in [Govdirectory](https://www.govdirectory.org) und in [Every Politican](https://www.wikidata.org/wiki/Wikidata:WikiProject_every_politician), oder auch als Bibliothekskatalog in [Inventaire](https://inventaire.io/), mit dem unter anderem auf einer Karte tracken, wem man gerade ein Buch verliehen hat. Im [Gespräch](https://www.stephenharrison.com/p/how-wikidata-is-coding-for-humanity) mit Stephen Harrison weist Lydia Pintscher allerdings auf das Ungleichgewicht hin, dass die knapp 116 Millionen Wikidata-Einträge aktuell von nur 25.000 monatlich Aktiven gepflegt werden. Dabei ist das Bearbeiten der Einträge auf für Nicht-Programmierende auch durch Tools wie [Mix'n'Match](https://mix-n-match.toolforge.org/#/) sehr niederschwellig.

Schöne Referenzketten zwischen Wikidata-Einträgen lassen sich mit dem [Wikidara Graph Builder](https://angryloki.github.io/wikidata-graph-builder/) visualisieren.

## Visualisierung
Etwa 23.000 private Bassins ließen sich mittels KI auf Luftbildern Berlins aufspüren. Ihre Ausbaustufe und räumliche Verteilung verraten, dass nicht unbedingt nur Geld sondern vor allem Platz eine Rolle spielt und ensprechend vermehrt am Stadtrand zu finden sind. Ausgehend von [einem Studierenden-Projekt](https://uclab.fh-potsdam.de/mapping/water/), das untersuchen wollte, wie fair der Zugang zu kühlendem Nass in Berlin verteilt ist, hat man [in der Datenanalyse vom Tagesspiegel](https://interaktiv.tagesspiegel.de/lab/wo-berlins-private-pools-stehen-und-was-das-uber-die-stadt-verraet-luftbilder-hitze-wasser-ungleichheit-datenanalyse/) auch viel Wert auf Ursachenanalyse gelegt, wie fehlende bzw. zu teure öffentliche Bäder, fehlende kühle Orte in Berlin, aber auch Ausdruck von [Geltungskonsum](https://de.wikipedia.org/wiki/Geltungskonsum) oder auch Ausgleich zu fehlenden finanziellen Möglichkeiten um zu verreisen.

Daten haptisch erfahrbar machen, war Ziel [eines Workshops](https://citylab-berlin.org/de/blog/datenkompetenz-am-schluesselbund/), an dessen Ende die Teilnehmenden die Klassifikation der von ihnen erhobenen Daten (z.B. tägliche Smartphone-Bildschirmzeit) auf Form, Größe und Farbe auf Acrylglas-Schlüsselanhängern kodiert haben.

## Open Access
Damit wissenschaftliche Veröffentlichungen aus Forschungsprojekten, in die öffentliche Gelder geflossen sind. nicht hinter Bezahlschranken landen, hate Mecklenburg-Vorpommern eine Open-Access-Strategie für Wissenschaft und Forschung [beschlossen](https://www.heise.de/news/Freier-Zugang-zu-Forschung-Mecklenburg-Vorpommern-investiert-in-Open-Access-10512085.html).

[BiomarkerKB](https://biomarkerkb.org) ist eine de [FAIR-Prinzipien](https://de.wikipedia.org/wiki/FAIR-Prinzipien) folgende Datenbank für [Biomarker](https://de.wikipedia.org/wiki/Biomarker), in der die Wissenschafts-Community auch die zu Grunde liegenden Ontologien [weiterentwickeln können](https://cthoyt.com/2025/08/22/bioregistry-and-biomarkerkb.html).

Der Sammelband ["Einführung in Qualitative Sozialforschung"](https://klinkhardt.de/sites/default/files/sonst-pdf/9783781561885grasschieferdeckerqualitative.pdf) ist Open Access und enthält unter anderem [einen Beitrag darüber](https://eduresearch.social/@verbundfdb/115095685136530714), warum Forschungsdatenmanagement der Schlüssel für gute wissenschaftlicher Praxis ist - da durch sie Daten nachvollziehbar dokumentiert, sicher gespeichert und so auch nach Projektende für andere Forschende sowie Studierende nachnutzbar gemacht werden.

## Wissenschaftsbetrieb
Weltweit nehmen Herz-Kreislauf-Erkrankungen, Suchterkrankungen oder Diabetes stark zu, nur die Gesundheitsforschung hat, [wie eine Langzeitstudie nun belegt](https://idw-online.de/de/news857180), bislang ihren Fokus nicht entsprechend angepasst. Gründe dafür sind, dass die Forschung hauptsächlich in westlichen Ländern statt, Diabetes aber vor allem in Südamerika und in einigen asiatischen Ländern die Ausmaße einer Volkskrankheit annimmt. Zudem zeichnet sich die hohe Abhängigkeit von öffentlicher US-Förderung durch die sich gerade vollziehenden politischen Veränderungen in den USA als zukünftiges großes Problem ab. Ein Grund mehr, viel stärker auf Open Science und verpflichtendes Daten-Sharing zu setzen.

Eben diese wirtschaftlichen Zwänge zeigen, welch hohes Gut die [Wissenschaftsfreiheit](https://de.wikipedia.org/wiki/Akademische_Freiheit) ist, und doch geht diese Freiheit mit der Verantwortung jeden Forschenden einher, nicht nur persönlichen nischigen Leidenschaften zu folgen sondern auch immer [die gesamtgesellschaftliche Relevanz im Blick zu behalten](https://gdch.app/article/vom-interessanten-zum-relevanten-4152834).

Leider sind die Anzahl an Publikationen und Referenzen immer noch die (leicht messbaren) Hauptkriterien für die Vergabe von Fördergeldern. Aus diesem Publikationsdruck und anderen karrieristischen Beweggründen werfen immer mehr Forschende ihren Ethos über Bord. Bei Analyse des Umstands, dass immer häufiger Fachartikel zurückgezogen werden, weil sie als Fälschungen oder als gekauft entlavt wurden, [offenbarte sich](https://www.tagesschau.de/wissen/forschung/organisierter-wissenschaftsbetrug-100.html), dass in ihnen die gleichen gefälschten Statistiken und Diagramme auftauchten. Auf eine neue korrekte Veröffentlichung kommen inzwischen 10 gefälschte, hier kann man zurecht von "industriellen Ausmaßen" sprechen. Bei den Möglichkeiten, die KI inzwischen bietet, auch kein großer zeitliche Aufwand mehr, ganz im Gegensatz zum Aufdecken. Derweil fließen die gefakten Artikel ins Trainingset der KIs selbst und replizieren sich ungehindert weiter.

## Open Source
Mehr Schein als Sein liegt auch bei mancher Software vor, die sich selbst als offen oder frei bewirbt. Die Webseite [Is it really FOSS?](https://isitreallyfoss.com) hat da bei über 80 Projekten etwas genau hingeschaut, und den ein oder anderen Fall von "Open Washing" [entdeckt](https://www.heise.de/news/Web-Tipps-Wie-Open-Source-ist-ein-Projekt-10498298.html).

Das [ActivityPub](https://en.wikipedia.org/wiki/ActivityPub)-Protokoll kommt bei [dieser Implementierung](https://codeberg.org/flohmarkt/flohmarkt) einer [Flohmarkt-Anwendung](https://flohmarkt.adminforge.de) zum Einsatz, also einer föderierten Open-Souce-Alternative zu [Kleinanzeigen, eBay & Co. im Fediverse](https://mastodon.de/@knix/115122509955420411).

Beim Prototyp Fund hat man die Projekte der letzten beiden Förderrunden hinsichtlich Usability und Zielgruppenerreichung [analysiert](https://www.prototypefund.de/blog/usability-und-zielgruppenfokus-in-open-source-projekten-erkenntnisse-aus-den-prototype-fund-runden-15-16) und ein breite Streuung feststellen müssen.

## Citizen Science
Katzen-Videos for Good - Forschende [rufen dazu](https://mas.to/@nemo/114983208859893723) auf, entsprechende Videos mit ihnen zu teilen, sie möchten aus ihnen Körpersprache, Pfotenpräferenz und Schwanzhaltung von Katzen [analysieren](https://www.n-tv.de/wissen/Forscher-suchen-Katzen-Videos-article25943680.html).

Eine [Umfrage](https://www.soscisurvey.de/KI-Citizen-Science/) möchte [wissen](https://wisskomm.social/@wissenschaftimdialog/115094104748732287), ob man schon KI in einem seiner Citizen-Science-Projekten eingesetzt hat.

## Digitale Souveränität
### Anspruch und Wirklichkeit
Eine der Präsidentin des Bundesamts für Sicherheit in der Informationstechnik (BSI) [in einem Interview](https://www.heise.de/news/BSI-Praesidentin-Digitale-Souveraenitaet-fuer-Deutschland-vorerst-unerreichbar-10517756.html) fälschlich unterstellten Aussage, dass "Digitale Souveränität für Deutschland vorerst unerreichbar" sei, provizierte [einen offenen Brief](https://osb-alliance.de/pressemitteilungen/offener-brief-claudia-plattner-bsi-digitale-souveraenitaet-ist-moeglich) von der Open Source Business Alliance (OSBA) an sie. In [ihrer Antwort](https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Presse/Antwort_offenerBrief_OSBA.pdf.pdf?__blob=publicationFile&v=7) auf diesen stellte sie sie dies richtig, betonte aber auch, dass man sich mit dem Umstand, dass "Big Tech Companies einen großen Vorsprung haben, insbesondere was Investitionen in die (Weiter-)Entwicklung von Schlüsseltechnologien betrifft", als Realität akzeptieren müsse.

Ob dieser Technologievorsprung rechtfertigt, in Kauf zu nehmen, dass die über solche Software in der Cloud gespeicherten Daten bei US-Sicherheitsbehörden landen könnten, sollte dann doch diskutiert werden. 

Auch in einem [Gesetzesentwurf zur Beschleunigung der Vergabe öffentlicher Aufträge](https://www.heise.de/news/Bundesregierung-Deutschland-ist-in-Technologiebereichen-von-US-Firmen-abhaengig-10590651.html) findet sich nichts, wie die Bundesregierung die von ihr einst im Koalitionsvertrag festgeschriebene Digitale Souveränität erreichnen will, was die OSBA [in einer Stellungnahme](https://osb-alliance.de/publikationen/statements/stellungnahme-zum-entwurf-des-gesetzes-zur-beschleunigung-der-vergabe-oeffentlicher-auftraege) zurecht kritisiert. Sie fordert, dass die Marktmacht als größter IT-Einkäufer in Deutschland genutzt und ["Open Source by Default"](https://social.osb-alliance.de/@OSBA/114987520649223270), also die vorrangige Beschaffung von Open Source Software, im Vergaberecht endlich umgesetzt werden sollte. 

### Open und Souveränitäts Washing
Johanna Gramlich und Marco Holz von der [Föderalen IT-Kooperation (FITKO)](https://www.fitko.de) haben in [ihrem Vortrag](https://programm.froscon.org/2025/system/event_attachments/attachments/000/000/892/original/2025-08-16-FrOSCon-2025-Viel-Public-Money-wenig-Public-Code.pdf) auf der FrOSCon fünf Thesen ausformuliert, warum aus ihrer Sicht die aktive Partizipation der Verwaltung am FOSS-Ökosystem immer wieder scheitert. So werden unter anderem politische Vorgaben aktiv ignoriert und es fehlt generell Erfahrung mit Open-Source-Beschaffung. Daher werden [hier](https://gitlab.opencode.de/vergabe-von-open-source-software-oss/informationssammlung) nun Informationen und Hilfestellungen rund um die Vergabe von Freier Software in der Öffentlichen Verwaltung zusammengetragen. Auch "Open Washing" wird als Problem benannt, wenn z.B. Software nur auf Open-Source basiert, selbst aber nicht wieder Open Source ist. 

[Ein Whitepaper](https://www.zendis.de/media/pages/newsroom/publikationen/souveraenitaets-washing/751a2c5eb1-1755243871/zendis-whitepaper-souveraenitaets-washing.pdf) identiziert das gleiche Muster bei Cloud Diensten, wenn z.B. die Delos Cloud von SAP betrieben wird, aber die zu Grunde liegende Technologie weiterhin Microsoft Azure und Microsoft 365 bleibt - aus Sicht des OSBA klassisches ["Souveränitäts-Washing"](https://social.osb-alliance.de/@OSBA/115060705759287714).

Man macht es sich zu einfach. Alexander Pockrandt, Geschäftsführer ZenDiS, [meint dazu](https://social.bund.de/@zendis/115027674842907728): "Wir dürfen Digitale Souveränität nicht an an die Wirtschaft delegieren. Digitale Souveränität ist eine Staatsaufgabe, die sich aus der Pflicht zur Daseinsvorsorge ableitet. Und die ist nicht verhandelbar."

### X-Stack
Björn Beck nimmt [das Papier "Impulse für einen offenen, interoperablen und europäisch anschlussfähigen Deutschland-Stack"](https://www.egovernment.de/deutschland-stack-schleswig-holstein-legt-impulspapier-vor-a-c0dd28cbc12086a305f57a354a19cf5d/) aus Schleswig-Holstein zum Anlass, [zu hinterfragen](https://amt.social/@BjoernBeck/115063225214382877), was dieser überhaupt stacken (aufsetzen) wird. Denn Neues zu entwickeln fällt leicht, nur eine Strategie wie die laufenden Bestandsyssteme integriert werden sollen (denn alles zu ersetzen würde ewig dauern) fehlt. Aus seiner Sicht müssen Daten- und Anwendungsschicht stärker separiert werden. Ohne Fundament kann man Beschlüsse und Buzzwords auch einfach stecken lassen.

Der Standard [X-Road](https://x-road.global) (wohl Crossroad gesprochen) aus Estland wird nun im Rahmen des "Schleswig-Holstein-Stacks" im nördlichsten Bundesland mit Hilfe erster Pilotprojekte und konkreter Anwendungsszenarien [ausgerollt](https://www.schleswig-holstein.de/DE/landesregierung/ministerien-behoerden/I/_startseite/Artikel2025/III/250820_cds_xroad), so dass "Land und Kommunen künftig Daten sicher, effizient und rechtlich einwandfrei austauschen können".

### (IT-)Versorgungs-Sicherheit
Auf Initiative des Kasslers Informationssicherheitsbeauftragten Jens Lange werden auf der Seite ["Kommunaler Notbetrieb"](https://kommunaler-notbetrieb.de) (und auch auf [einer Karte](https://kommunaler-notbetrieb.de/uebersichtskarte/)) werden IT-Ausfälle in deutschen Kommunen erfasst (soweit sie öffentlich zu gänglich dokumentiert wurden). Die Hintergründe zur Entstehung des Projekts erläutert er [im Interview mit Netzpolitik](https://netzpolitik.org/2025/ransomware-und-it-stoerungen-wir-brauchen-ein-kommunales-lagebild-zur-informationssicherheit/).

In Bad Wildbad im Nordschwarzwald gibt es seit zwei Monaten [kein Mobilfunknetz mehr](https://www.tagesschau.de/wirtschaft/stadt-ohne-empfang-100.html), da die dafür benötigten Funkmasten abgebaut wurden, ohne dass sich die Netzanbieter rechtzeitig um einen geeigneten neuen Standort für neue Masten gekümmert haben. Die Mobilfunk-Netzabdeckung in Deutschland ist rein privatwirtschaftlich organisiert und keine kommunale Aufgabe, die Stadt selbst ist wie die Anwohnenden betroffen und kann wie diese auch nicht mal mittels Sonderkündigungsrecht die laufenden Mobilfunkverträge kündigen.

### Big Techs Marktmacht
Nach einem Windows-Update werden Office-Dateien per Voreinstellung automatisch in der Cloud (also bei One-Drive) [gespeichert](https://www.heise.de/news/Windows-MS-Word-speichert-jetzt-automatisch-in-die-Cloud-10623681.html) und dort direkt von der KI (Copilot) verarbeitet. Nutzer, die das nicht möchten, müssen selbst aktiv entweder die automatische Speicherung  bzw. den Speicherort in den Einstellungen ändern.

[Ab 2027](https://www.heise.de/news/Android-Google-verbietet-anonyme-Apps-10617479.html) können auf Geräten mit Android-Betriebssytem nur noch Anwendungen installiert werden, die bei Google signiert wurden. Google stellt dies als Sicherheitsmaßnahme dar, obwohl es ausdrücklich keine inhaltliche Prüfung der signierten Apps vornimmt. App-Entwickler müssen sich aber zwingend bei Google mit Vorlage ihres Lichtbildausweises [registrieren lassen](https://www.androidauthority.com/android-developer-verification-requirements-3590911/). Apps lassen sich damit auch nicht mehr anonym, also ohne Nutzung des Play Stores, auf einem Android-Gerät installieren. Kritiker sehen in der Entscheidung Googles den Versuch, sich, trotz der von manchen Staaten geplanten Vorschrift, auch alternative App-Stores zuzulassen, weiterhin Einfluss und Daten auf den Geräten zu sichern. De facto würde das auch das Aus für alternative App-Stores wie F-Droid bedeuten und einen Verstoß gegen den europäischen Digital Markets Act (DMA) sowieso.

Amnesty International hat aus Menschenrechts-Sicht [Gründe ausformuliert](https://www.amnesty.org/en/documents/pol30/0226/2025/en/), die Marktdominanz von Google, Meta, Microsoft, Amazon und Apple [endlich zu brechen](https://digitalcourage.social/@digitalcourage/115135031461683892), da sie eben auch massenhaft Daten sammeln, Hass und Desinformation verstärken oder zu mindestens billigend in Kauf nehmen, die Politik beeinflussen und Alternativen zu sich aktiv blockieren.

## Verwaltungsdigitalisierung
Die Open Knowledge Foundation hat [Anregungen](https://okfn.de/files/publikationen/2025-08-19_staatsmodernisierung.pdf) für eine Staatsmodernisierungsagenda [veröffentlicht](https://okfn.de/blog/2025/08/handlungsf%C3%A4higkeit-und-vertrauen-zusammendenken-anregungen-f%C3%BCr-die-staatsmodernisierung/). Das Vertrauen der Bürger in den Staat zu erhalten bzw. zurückzugewinnen sollte dabei Grundlage für die Handlungsfähigkeit des Staates sein. Transparenz, Partizipation und der Schutz von Grund- und Menschenrechten sollten dabei nicht als bürokratischen Hindernisse sondern im Gegenteil als Chance für alle betrachtet werden. 

Die meisten Behördensachen online erledigen kann man [vor allem in bayerischen Kommunen](https://www.heise.de/news/Digitalministerium-Bayerische-Kommunen-fuehren-bei-digitaler-Verwaltung-10626707.html), das [Dashboard Digitale Verwaltung](https://dashboard.digitale-verwaltung.de/verfuegbarkeit/verwaltungsleistungen) zeigt auf einer deutschlandweiten Karte an Hand einer Farbskala die Ausbaustufen in den anderen Kommunen - nach NRW und Hamburg eröffnet sich da bei allen anderen  schnell ein Graben.

Der eGovernment Podcast schaut [in seiner Folge 227](https://egovernment-podcast.com/egov227-25-jahre-digvw/) mit Experten auf 25 Jahre Verwaltungsdigitalisierung in Deutschland zurück, mit zu ziehenden Lehren aus der Vergangenheit, aber auch positiven Beispielen.

## Karten
### Anwendungen
Die multimediale StoryMap ["Stadt in Bewegung"](https://leibniz-ifl.de/presse/details/leipzig-im-wandel) des Instituts für Länderkunde erzählt Geschichten von Migration und Transformation an Hand von drei Biografien [auf der Karte von Leipzig](https://experience.arcgis.com/experience/7fcccca57b1c4aa5ae358a72b64fbfe5/page/Stadtplan_Silke).

Auf [Demokratie-Wegweiser](https://www.demokratie-wegweiser.de/) kann man herausfinden, wer sein seine politischen Ansprechpersonen vor Ort sind. [In der neuen Version](https://www.linkedin.com/posts/demokratie-wegweiser_neuer-demokratie-wegweiser-jetzt-testen-activity-7374711918197891072-RQEd) kann man nun auch direkt nach den Namen der Personen suchen und springt auf den Wahlkreis auf der Karte. Die Bedienung der Karte ist auch nochmal [hier erklärt](https://www.demokratie-wegweiser.de/karte-hilfe/).

### Mitmach-Angebote
[Wie man](https://ev-akademie-wittenberg.de/diskurs/mitmachmap-die-anleitung/) mit quelloffenen, freien Werkzeigen wie OpenStreetMap und Umap in unter zwei Stunden [einen digitalen Stadtplan](https://ev-akademie-wittenberg.de/diskurs/mitmachmap/) mit wichtigen Orten, die man sich mit Klick auf einen Marker in 360 Grad Rundumsicht anschauen kann, gestalten kann, wurde in einem von der Evangelischen Akademie Sachsen-Anhalt organisierten Workshops beim Konficamp 2025 in Nürtingen gezeigt. Die Akademie bietet [weitere Workshops](https://ev-akademie-wittenberg.de/aktivitaeten/offene-software-offene-gesellschaft/) zu offener Software an.

An Hand einer Fallstudie aus Mosambik wird [in dieser Schritt-für-Schritt-Anleitung](https://heigit.org/identifying-infrastructure-gaps-with-road-surface-dataset/) gezeigt, wie man aus einem Straßenobflächen-Datensatz Lücken in der Zugänglichkeit von Regionen aber auch Lücken in der Erfassung von OpenStreetMap selbst finden kann.

Wer sich an [folgender Umfrage](https://umfragen.evasys.frankfurt-university.de/evasys/public/online/index/index?online_php=&p=geodaten-umfrage&ONLINEID=471651572774326331399320645899210680587343) beteiligt, kann mithelfen, dass Nutzungsarten und Bedarfe sowie Qualitäts- und Versorgungslücken von Geodaten in Deutschland besser verstanden werden, und entsprechend Erfassung und Qualitätssicherung zu priorisieren und zu verbessern.

### OpenStreetMap
Kartellbehörden haben bereits vor 10 Jahren die Bestpreisklausel von Booking.com als kartellrechtswidrig eingestuft.
Diese hat Hotels daran gebunden, dass sie ihre Zimmer nicht günstiger als auf der Plattform anbieten durften. Sowohl der Bundesgerichtshof (BGH) (2021) und der Europäische Gerichtshof (2024) bestätigten dies. 2024 hat Booking schließlich diese Klausel abgeschafft. Dennoch haben nun über 15 Tausend Hoteliers über ihren europäischen Dachverband Hotrec eine Sammelklage eingereicht, in der sie rückwirkend für die letzten 20 Jahre Schadenersatz von Booking.com fordern. Die Sichtbarkeit, die eine Buchungsplattform einerseits den Hotels verschafft und andererseits eine zentrale Anlaufstelle für Übernachtungssuchende darstellt, hätte man auch bei OpenStreetMap, wie [der taz-Artikel](https://taz.de/Sammelklage-gegen-Bookingcom/!6107471/) im letzten Abschnitt auch erwähnt.

Einen Deep-Dive in Hydrantenmapping in OpenStreetMap in Kombination mit WikiCommons [gibt Stefan auf seinem Blog](https://stefan.bloggt.es/2025/08/hydrantenmapping-in-openstreetmap-schoener-leben-mit-fast-linked-open-data/).

Um die [Standard-Instanz](https://nominatim.openstreetmap.org/) von kostenlosen Geocoding-Diensten wie Nominatim zu entlasten und ein paar Freiheiten beim Rate-Limiting zu bekommen, lohnt es sich, diese Dienste einfach selbst zu hosten. Mit der neuesten Version von Nominatim Photon [wird das nun noch einfacher](https://nominatim.org/2025/08/13/photon-exports-renewed.html).  

Wie schnell kostenlose Map-Dienste überlastet sein können, hat der Entwickler hinter [OpenFreeMap](https://openfreemap.org) für den Fall [wplace.live](https://wplace.live), einer neuen kollaborativen Zeichen-Plattform, in seinem Blog [dokumentiert](https://blog.hyperknot.com/p/openfreemap-survived-100000-requests). Durch einen unerwartet rasanten Nutzerzuwachs hatte diese über 100.000 Requests in der Sekunde verursacht. Inzwischen nutzt sie aber eine eigene OpenFreeMap-Instanz, so dass die öffentliche Instanz wieder entlastet ist. 

## Mobilität
* Temporary Road Closures Database and API
  https://github.com/Archit1706/temporary-road-closures
  https://closures.osm.ch
  https://www.openstreetmap.org/user/Archit%20Rathod/diary/407192
  https://fedifreu.de/@thomas/115025623251347296
* Den Kindern bleibt immer weniger Raum zum gefahrlosen Spielen.
  https://www.deutschlandfunkkultur.de/vom-sandhaufen-zur-kletterlandschaft-wie-viel-oeffentl-raum-gehoert-den-kindern-100.html
  via https://climatejustice.global/@GermanZeroHH/114977583381421756
* Darum kommen Züge so oft zu spät
  https://www.deutschlandfunk.de/deutsche-bahn-verspaetung-zug-gruende-puenktlichkeit-100.html
* Verkehrswende in Paris: Blick in die Zukunft
  https://taz.de/Verkehrswende-in-Paris/!6105200/
* Die Deutschen haben immer mehr Autos
  https://www.n-tv.de/wirtschaft/Die-Deutschen-haben-immer-mehr-Autos-article25978745.html
* verschleppte e-Mobilität
  https://mastodon.social/@schrotthaufen/115108103748965584
  * Verquickung von Autoindustrie und Politik als Gefahr
    https://www.deutschlandfunkkultur.de/wolfgang-muenchau-kaputt-das-ende-des-deutschen-wirtschaftswunders-100.html
  * öffentliche Konsultation noch bis 10.10.2025 möglich: Revision of the CO2 emission standards for cars and vans
    https://ec.europa.eu/info/law/better-regulation/have-your-say/initiatives/14765-Revision-of-the-CO2-emission-standards-for-cars-and-vans_de
* Documentation for DB InfraGO's OpenStation API
  https://github.com/dbinfrago/openstation-docs

## Energie
* MapYourGrid
  https://mapyourgrid.org
  https://www.youtube.com/watch?v=6rcMVXc2lwc
  via https://urbanists.social/@TrufiAssoc/114981989358866841
* Solarmodul mit recyceltem Glas funktioniert genauso gut wie ein neues
  https://www.basicthinking.de/blog/2025/08/13/solarmodule-recyceltes-glas/
* Die Vorgaben für das von Wirtschaftsministerin Reiche bestellte Energie-Monitoring sind mangelhaft, ergibt eine Analyse. Untersucht würden auch Szenarien, die das verfassungsrechtlich untermauerte Klimaziel gar nicht einhalten.
  https://www.klimareporter.de/strom/energiepolitik-mit-und-ohne-klimaziel
* Germany’s Salt‑and‑Air Battery: A Clean‑Power Revolution Without Lithium
  https://medium.com/@wind.amiraz/germanys-salt-and-air-battery-a-clean-power-revolution-without-lithium-1711c324267f
* Boom bei Batteriespeichern: Deutschland auf dem Weg zum Speicherzentrum
  https://www.telepolis.de/features/Boom-bei-Batteriespeichern-Deutschland-auf-dem-Weg-zum-Speicherzentrum-10626267.html

## Klima
### Finanzen
* Klima-Finanzpolitik: Initiative fordert grüne Regel statt Schuldenbremse
  https://www.fr.de/politik/schuldenbremse-klima-finanzpolitik-initiative-fordert-gruene-regel-statt-93865718.html
### Plastikmüll
* Mikroplastik ist noch bedrohlicher als angenommen, warnen For­sche­r:in­nen – und hoffen auf die am Dienstag beginnende UN-Plastikkonferenz in Genf.
  https://taz.de/Konferenz-soll-Loesungen-finden/!6101836/
* Fische voller Plastik: Dieses Schiffsunglück zeigt, wie dringend das UN-Abkommen ist
  https://www.freitag.de/autoren/the-guardian/plastik-im-meer-ein-schiffunsglueck-zeigt-dass-wir-dieses-un-abkommen-brauchen
* UN-Abkommen gegen Plastikmüll vorerst gescheitert
  https://www.tagesschau.de/ausland/plastik-abkommen-scheitern-100.html
* UBA-Präsident Dirk Messner zum (vorerst) gescheiterten UN-Abkommen gegen Plastikmüll
  https://social.bund.de/@Umweltbundesamt/115032010397158787
### Trockenheit
* Wasserspiegel des Groß Glienicker See wird ohne gezielte Gegenmaßnahmen weiter sinken
  https://www.rbb24.de/panorama/beitrag/2025/07/gross-glienicker-see-klimawandel-seenschwund-loesung.html
* Dürremonitor mit höherer Auflösung und interaktiven Daten zu Bodenfeuchte, Klima & Umwelt
  https://social.bund.de/@BKG/115105334210720017
  https://www.ufz.de/index.php?de=37937
  https://gdz.bkg.bund.de/index.php/default/interaktive-atlanten/duerreatlas.html
* Die Wasserkarte ist ein Projekt der Wassermeisterei Hoher Fläming in Zusammenarbeit mit der Zukunftsschusterei/Stadt Bad Belzig
  https://www.linkedin.com/posts/zukunftsschusterei-bad-belzig-mpsc_die-wasserkarte-bodenfeuchte-monitoring-ugcPost-7363490210447351808-rXWK
### Versiegelung
* Flächenverbrauch in Deutschland: Täglich mehr als 50 Hektar für neue Gebäude und Straßen
  https://www.tagesschau.de/inland/gesellschaft/bebauung-deutschland-siedlungsflaeche-100.html
* Warum Parkplätze zum Klima-Problem werden
  https://www.tagesschau.de/inland/gesellschaft/parkplaetze-klimaschutz-100.html
### Lebensraumzerstörung
* Die Pflanzenwelt schwindet
  https://www.klimareporter.de/erdsystem/die-pflanzenwelt-schwindet
### Wasser
* 12,75 Milliarden Kubikmeter Wassereinsatz in Betrieben
  https://www.heise.de/hintergrund/Zahlen-bitte-12-75-Milliarden-Kubikmeter-Wassereinsatz-in-Betrieben-10509653.html
### Bäume
* Der kleine Klimabaum-Check
  https://taz.de/Klimaanpassung-im-urbanen-Raum/!6102634/
* Stadtbäume: Wie sie unsere Städte kühlen und schützen
  https://www.oekologisch-unterwegs.de/klimawandel/1000-stadtbaeume-schutzfunktion-fuer-staedte-strassenbaeume.html
### Kreislaufwirtschaft
* Sieben Leben dank Kreislaufwirtschaft
  https://www.technologiestiftung-berlin.de/downloads/daten-fuer-die-kreislaufwirtschaft
### Wirtschaft
* Boom trotz Krise: Deutsche GreenTech-Branche weiter auf Wachstumskurs
  https://www.umweltbundesamt.de/presse/pressemitteilungen/boom-trotz-krise-deutsche-greentech-branche-weiter
* Wie die Regierung den Klima- und Transformationsfonds zweckentfremdet
  https://www.sueddeutsche.de/politik/klimaschutz-ktf-zertifikate-kritik-gruene-li.3301024?reduced=true
* Klimawandel wird für die EZB zum Inflationsrisiko
  https://www.msn.com/de-de/finanzen/top-stories/klimawandel-wird-f%C3%BCr-die-ezb-zum-inflationsrisiko/ar-AA1KOdXf
### Hitze
* Deutlich mehr heiße Tage als früher
  https://www.tagesschau.de/faktenfinder/hitze-mythen-klima-100.html
* Hitze kostet uns Milliarden
  https://www.manager-magazin.de/hbm/hitzewellen-wie-unternehmen-sich-anpassen-an-den-klimawandel-a-49aad06a-3649-4349-aeaf-5af42600af97
* Parkplatz mit Aussicht auf Hitzschlag
  https://fragdenstaat.de/artikel/exklusiv/2025/08/parkplatz-mit-aussicht-auf-hitzschlag/
* Zugepflastert! Wie schützen wir unsere Städte vor dem Hitzekollaps
  https://www.ardmediathek.de/video/story/wie-schuetzen-wir-staedte-vor-hitze/swr/Y3JpZDovL3N3ci5kZS9hZXgvbzIyNTk0NzA  
* Kühle Orte Baden-Württemberg
  https://apps.apple.com/de/app/k%C3%BChle-orte-baden-w%C3%BCrttemberg/id6748610721
  https://norden.social/@datenschatz/115044942677682202
* Kühle Orte Dortmund
  https://open-data.dortmund.de/map/kuhle_orte/?location=12,51.50789,7.47036&basemap=a8bade
  https://ruhr.social/@DortmundData/115071750811857320
* Satellitendaten: DLR weist hohe Hitzebelastung in deutschen Großstädten nach
  https://www.heise.de/news/Satellitendaten-DLR-weist-hohe-Hitzebelastung-in-deutschen-Grossstaedten-nach-10538728.html
  https://www.dlr.de/de/aktuelles/nachrichten/2025/dlr-zeigt-hohe-hitzebelastung-in-deutschen-grossstaedten
* Kühlender Beton als Lösung gegen Hitze
  https://www.tagesschau.de/wissen/forschung/kuehlender-beton-100.html
### Gletscherschmelze
* Spitzbergens Gletscher sind dramatisch geschmolzen
  https://www.tagesschau.de/wissen/klima/norwegen-spitzbergen-gletscher-schmelze-100.html
* Antarktis vor einem Kipppunkt?
  https://www.tagesschau.de/wissen/antarktis-forscher-warnen-100.html
### Meeresspiegelanstieg
* 30 Jahre alte Prognosen zum Meeresspiegelanstieg überraschend präzise
  https://www.heise.de/news/Kliamwandel-Prognosen-zum-Meeresspiegelanstieg-ueberraschend-praezise-eingetreten-10599249.html
* Deutschland im Klimawandel
  https://social.bund.de/@DeutscherWetterdienst/115088995522167233
### Ranking
* ND-GAIN Country Index summarizes a country's vulnerability to climate change
  https://gain-new.crc.nd.edu/ranking
  https://www.klimareporter.de/international/klimawandel-als-auswanderungsgrund
  https://libranet.de/display/0b6b25a8-4c16f65c-89f76fefc7afecc3
### Arbeitsbedingungen
* Immer mehr Beschäftigte in Deutschland sind den Folgen der Klimakrise ausgeliefert
  https://jacobin.de/artikel/hitzeschutz-arbeitsschutz-hitzewelle-hitzefrei
### AMOC
* Kollabiert die Atlantische meridionale Umwälzzirkulation (AMOC)?
  https://www.tagesschau.de/klimawandel-kollabiert-der-golfstrom-100.html
  * Shutdown of northern Atlantic overturning after 2100 following deep mixing collapse in CMIP6 projections
    https://iopscience.iop.org/article/10.1088/1748-9326/adfa3b
  * Physics-Based Indicators for the Onset of an AMOC Collapse Under Climate Change
    https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2025JC022651

## Kultur
* Ein virtueller Spaziergang durch das digitalisierte Berliner Kulturerbe
  https://openbiblio.social/@awinkler/114971182211720823
  https://zenodo.org/records/15691614
* Mit Dialekt-App die Sprache erforschen
  https://www.heise.de/news/Pfiatdi-Tschuess-Ade-Mit-Dialekt-App-die-Sprache-erforschen-10538844.html
  https://dialektapp.bayern/

## Wirtschaft
* So wenig aus dem Infrastruktur-Topf soll in den Kommunen ankommen
  https://correctiv.org/aktuelles/wirtschaft/2025/08/27/so-wenig-aus-dem-infrastruktur-topf-soll-in-den-kommunen-ankommen/

## KI essen Seele auf
### AI Act
* EU-Kommission stellt KI-Verordnung scharf: Bürokratie vs. Grundrechteschutz
  https://www.heise.de/hintergrund/EU-Kommission-stellt-KI-Verordnung-scharf-Buerokratie-vs-Grundrechteschutz-10489282.html?seite=all
* AI-Act: Was heißt das jetzt?
  https://mailing.101lab.it/archive/cc934328-0167-4dcb-ae16-418012b29259
  https://mastodon.social/@101lab/114975025934633428
* Es fehlt an Personal und die Anzahl der Verfahren ist noch sehr überschaubar.
  https://netzpolitik.org/2025/bilanz-nach-einem-jahr-neue-aufsicht-ueber-digitale-dienste-hat-vier-verfahren-eingeleitet/
### Wikipedia
* Wikipedia reagiert auf KI-Flut mit angepasster Richtlinie zur Schnelllöschung
  https://www.heise.de/news/Wikipedia-reagiert-auf-KI-Flut-mit-neuer-Richtlinie-zur-Schnellloeschung-10510841.html
### Security
* KI trifft Open Data: Neue Ansätze für den Schutz kritischer Infrastrukturen
  https://www.cyberagentur.de/presse/atara-startet-ki-gestuetzte-analyse-oeffentlicher-daten-fuer-mehr-cybersicherheit/
* KI-gestützte Cyberangriffe: Russische Angreifer setzen LLMs für Malware ein
  https://www.heise.de/news/KI-gestuetzte-Cyberangriffe-Experten-beobachten-zunehmenden-LLM-Einsatz-10539423.html
### GPT-5
* GPT-5: OpenAI veröffentlicht neues Sprachmodell für ChatGPT
  https://www.heise.de/news/GPT-5-OpenAI-veroeffentlicht-neues-Sprachmodell-fuer-ChatGPT-10513244.html
* GPT-5 mixt Cocktails: Sicherheitsforscher knacken OpenAIs Selbstbeschränkungen
  https://www.heise.de/news/GPT-5-mixt-Cocktails-Sicherheitsforscher-knacken-OpenAIs-Selbstbeschraenkungen-10517146.html
* Warum GPT-5 so polarisiert
  https://www.heise.de/news/Warum-GPT-5-so-polarisiert-10530890.html
* GPT-5 ersetzt das Modell 4o – und Tausende Menschen reagieren, als sei die beste Freundin gestorben
  https://www.socialmediawatchblog.de/wahn-psychosen-suizid-die-dunkelste-seite-von-ki/
## Energie
* Der Energieverbrauch von Künstlicher Intelligenz - Eine detaillierte Analyse der Forschung von Maximilian Dauner
  https://werkbank-digital.de/blog/der-energieverbrauch-von-knstlicher-intelligenz
## Arbeitsbedingungen
* Die KI-Revolution frisst ihre Gig-Worker
  https://taz.de/Ausbeutung-im-Tech-Sektor/!6102646/
* Die Maschine übernimmt unsere Stimme
  https://taz.de/KI-und-Hoerbuecher/!6106289/
  * Persönlichkeitsrecht: Synchronstimme ist vor KI-Nachahmung geschützt
    https://www.heise.de/news/Persoenlichkeitsrecht-Synchronstimme-ist-vor-KI-Nachahmung-geschuetzt-10623565.html
### Deskilling
* KI in der Medizin: Ärzte verlieren wohl schnell Fähigkeiten bei Krebsvorsorge
  https://www.heise.de/news/KI-in-der-Medizin-Aerzte-verlieren-wohl-schnell-Faehigkeiten-bei-Krebsvorsorge-10519686.html
  * Geht eine KI zum Arzt, Diagnose: Algorithmusstörungen
    https://www.basicthinking.de/blog/2025/08/18/ki-arzt-diagnose/
* Darum ist KI wirklich gefährlich
  https://www.heise.de/news/c-t-3003-Darum-ist-KI-wirklich-gefaehrlich-10585252.html
* Gell-Mann amnesia effect
  https://en.wikipedia.org/wiki/Gell-Mann_amnesia_effect
  https://mastodon.social/@datenwolf@chaos.social/115123918051291393
### MCP
* KI-Agenten: Sprachmodelle bedienen eigenständig Software
  https://www.heise.de/news/KI-Agenten-Sprachmodelle-bedienen-eigenstaendig-Software-c-t-uplink-10530901.html
* An MCP (Model Context Protocol) Server to provide LLM access to PUDL Data?
  https://github.com/orgs/catalyst-cooperative/discussions/4560
  https://mastodon.energy/@catalystcoop/115072813232726246
### Kurse
* deeplearning.ai
  https://learn.deeplearning.ai
  * Claude Code: A Highly Agentic Coding Assistant
    https://www.deeplearning.ai/short-courses/claude-code-a-highly-agentic-coding-assistant/

## Überwachung
* "Watching You": Dokumentarfilm zeigt die Welt von Palantir und Alex Karp
  https://www.heise.de/hintergrund/Interview-Der-Regisseur-zu-Watching-You-Die-Welt-von-Palantir-und-Alex-Karp-9740576.html
  * Hyperbandrauschen: PALANTIR!
    https://hybr.de/2025/08/06/palantir/
  * Palantirs Software für die Polizei ist den Recherchen nach zu folgern also nicht so alternativlos wie von einigen Sicherheitsbehörden dargestellt
    https://www.tagesschau.de/investigativ/ndr/palantir-polizei-daten-software-100.html
* Gesetzentwurf für die Neuregelung biometrischer Fernüberwachung
  https://algorithmwatch.org/de/biometrische-uberwachung-rechtsbruchen/
  https://chaos.social/@algorithmwatch/114986425707768566
* 20 years ago, it was a scandal that Google started to track which links you clicked on the search-results page
  https://web.archive.org/web/20051119012842/http://mboffin.com/post.aspx?id=1830
  https://mamot.fr/@pluralistic/115052838970219468
* eID: The Bigger Picture
  https://dnip.ch/2025/08/25/eid-the-bigger-picture/
  https://infosec.exchange/@adfichter/115087957096289909
* Hessen setzt als erstes Bundesland Live-Gesichtserkennung ein
  https://netzpolitik.org/2025/als-erstes-bundesland-hessen-setzt-live-gesichtserkennung-ein/

## Transparenz
* Wirtschaftsministerium will Verkauf von Ölspeichern geheimhalten
  https://fragdenstaat.de/artikel/klagen/2025/08/wirtschaftsministerium-will-verkauf-von-olspeichern-geheimhalten/
* Wirtschaftsministerin Reiche setzt für ihre Energiepolitik auf ein Institut, das für seine Nähe zur fossilen Energiewirtschaft berüchtigt ist.
  https://taz.de/Energiepolitik-der-Union/!6101985/
* Verstößt Brandenburg gegen sein Anti-Korruptionsgesetz?
  https://fragdenstaat.de/artikel/exklusiv/2025/08/neuer-job-fur-mr-tesla-verstosst-brandenburg-gegen-sein-anti-korruptionsgesetz/
* Sudhof-Bericht weist auf Firma in Sachsen hin
  https://www.tagesschau.de/inland/innenpolitik/maskenaffaere-sachsen-100.html
  https://www.mdr.de/nachrichten/sachsen/leipzig/leipzig-leipzig-land/maskendeal-corona-spahn-sudhof-bericht-sachsen-100.html
* Posten für Freunde
  https://correctiv.org/aktuelles/lobbyismus/2025/08/11/posten-fuer-freunde/
* Österreich: Wir laden zum Reinfeiern in die Informationsfreiheit ein!
  https://www.informationsfreiheit.at/2025/08/25/einladung-reinfeiern-in-die-informationsfreiheit/
  https://bsky.app/profile/infofreiheit.bsky.social/post/3lxeyzpja7k2b
* Alle wichtigen Dokumente zum möglichen AfD-Verbot
  https://correctiv.org/aktuelles/debatte-um-afd-verbot/2025/08/08/alle-wichtigen-dokumente-zum-moeglichen-afd-verbot/
* Armutsdaten verschwinden aus der Statistik: Offener Brief an das Statistische Bundesamt
  https://gks-consult.de/armutsdaten-mikrozensus-brief-stabu/
* Österreich: Der Ex-Kanzler, seine Freunde und ihr rechtes Mediennetzwerk
  https://www.falter.at/zeitung/20250826/der-ex-kanzler-seine-freunde-und-ihr-rechtes-mediennetzwerk

## USA
* ICE detention dashboard
  https://watchice.org
  https://github.com/lockdown-systems/icewatch
* Data that taxpayers have paid for and rely on is disappearing
  https://theconversation.com/data-that-taxpayers-have-paid-for-and-rely-on-is-disappearing-heres-how-its-happening-and-what-you-can-do-about-it-251787
* Whistleblower: DOGE hat Daten zu allen Menschen in den USA in die Cloud kopiert
  https://www.heise.de/news/Whistleblower-DOGE-hat-Daten-zu-allen-Menschen-in-den-USA-in-die-Cloud-kopiert-10622689.html

## Recap
* Wikimania Nairobi: https://wikimedia.eventyay.com/talk/wikimania2025/schedule/
  * Wikidata: We want our data to be reused. But do we really?
    https://wikimedia.eventyay.com/talk/wikimania2025/talk/NAPHP9/
* Barcamp Open Science 2025: From Threats to Collective Resilience
  * https://www.zbw-mediatalk.eu/2025/08/barcamp-open-science-2025-from-threats-to-collective-resilience/
* What Hackers Yearn 2025
  * https://media.ccc.de/c/WHY2025
* FrOSCon 2025
  * https://media.ccc.de/c/froscon2025
  * https://metalhead.club/@ChrisMcZork/115055270560194917
* AI Literacy Workshop
  * https://www.youtube.com/watch?v=y_EZjTm5Bn4
  * https://fosstodon.org/@okfn/115057455865382255
* HOPE16
  * https://www.youtube.com/watch?v=2xuoa3PLMvU&list=PLlg8We3ePxcPG0FRTcEEdsViRevFjikIU

## Und sonst so
* Das Buchstabenmuseum in Berlin muss leider schließen
  https://chaos.social/@ubahnverleih/114964415494415828
  https://www.buchstabenmuseum.de
* Passierschein A38
  https://github.com/Kamik423/passierschein-a38
  https://mastodon.social/@SherlockHans/115054249599178753
* livestream von der ISS
  https://www.youtube.com/watch?v=fO9e9jnhYK8
  https://tldr.nettime.org/@bini_adamczak/115096835953707731

## Fristen
* culture.explore(data) - An Open Cultural Data Hackathon, Staatsbibliothek zu Berlin, 07.10.2025 - 08-10.2025, Anmeldung bis 15.09.2025
  * https://lab.sbb.berlin/culture-explore-data/
* PIAZZA 2025, Anmeldung von Workshops bis 15.09.2025
  * https://piazza-konferenz.de/jetzt-anmelden-25/
* Community-Voting zum Open Source Wettbewerb 2025, bis 30.09.2025
  https://open-source-wettbewerb.de/voting/
* Wiki Loves Monuments, Einreichungen bis 30.09.2025
  * https://de.wikipedia.org/wiki/Wikipedia:Wiki_Loves_Monuments_2025/Deutschland
* Grimme Online Award 2025, die Abstimmung ist bis zum 01. Oktober 2025, 23:59 Uhr möglich
  * https://w1.grimme-online-award.de/goa/voting/ext_voting.pl
  * https://www.grimme-online-award.de/2025/nominierte
* FragDenStaat Winter School, Anmeldefrist bis 01.10.2025
  * https://fragdenstaat.de/aktionen/winterschool/
* Prompted Pasts? Visuelle Geschichtsdarstellungen zwischen Illustration und KI, Einreichungen bis 01.10.2025
  * https://www.hsozkult.de/event/id/event-156927
* DigAMus Award 2025 - Stimmt bis 22.09.2025 22:00 für die besten digitalen Museumsprojekte aus der Longlist 2025 ab
  * https://digamus-award.de/voting/

## Veranstaltungen ([Kalender/Karte](https://events.codeforleipzig.de))
* Dienstag, 02.09.2025, 20:00-22:00, c-base, Rungestraße 20, 10179 Berlin und auch online: **149. Netzpolitischer Abend** <a title='Kalendereintrag 149. Netzpolitischer Abend' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vMTQ5LiBOZXR6cG9saXRpc2NoZXIgQWJlbmQvL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNTEwMDRUMTIxNTAyWg0KRFRTVEFSVDoyMDI1MDkwMlQyMDAwMDANCkRURU5EOjIwMjUwOTAyVDIyMDAwMA0KU1VNTUFSWToxNDkuIE5ldHpwb2xpdGlzY2hlciBBYmVuZA0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly9kaWdpdGFsZWdlc2VsbHNjaGFmdC5kZS8yMDI1LzA4LzE0OS1uZXR6cG9saXRpc2NoZXItYWJlbmQvDQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOmMtYmFzZVwsIFJ1bmdlc3RyYcOfZSAyMFwsIDEwMTc5IEJlcmxpbiB1bmQgYXVjaCBvbmxpbmUNCkdFTzo1Mi41MTI5NzM1OzEzLjQyMDEzMTMNCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://digitalegesellschaft.de/2025/08/149-netzpolitischer-abend/
* Donnerstag, 04.09.2025, 18:00-21:00, WikiBär Wikipedia, Köpenicker Straße 45, 10179 Berlin: **Jugend editiert** <a title='Kalendereintrag Jugend editiert' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vSnVnZW5kIGVkaXRpZXJ0Ly9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjUxMDA0VDEyMTUwMloNCkRUU1RBUlQ6MjAyNTA5MDRUMTgwMDAwDQpEVEVORDoyMDI1MDkwNFQyMTAwMDANClNVTU1BUlk6SnVnZW5kIGVkaXRpZXJ0DQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL3d3dy53aWtpbWVkaWEuZGUvdmVyYW5zdGFsdHVuZ2VuL2p1Z2VuZC1lZGl0aWVydC8NCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046V2lraULDpHIgV2lraXBlZGlhXCwgS8O2cGVuaWNrZXIgU3RyYcOfZSA0NVwsIDEwMTc5IEJlcmxpbg0KR0VPOjUyLjUwMjY3NzA2MjkzNjA3OzEzLjQzOTI1MDM0ODcyMTU0NA0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://www.wikimedia.de/veranstaltungen/jugend-editiert/
* Donnerstag, 04.09.2025, 19:00-22:00, Wikimedia Deutschland e. V., Tempelhofer Ufer 23-24, 10963 Berlin: **tech from below #12** <a title='Kalendereintrag tech from below #12' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vdGVjaCBmcm9tIGJlbG93ICMxMi8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI1MTAwNFQxMjE1MDJaDQpEVFNUQVJUOjIwMjUwOTA0VDE5MDAwMA0KRFRFTkQ6MjAyNTA5MDRUMjIwMDAwDQpTVU1NQVJZOnRlY2ggZnJvbSBiZWxvdyAjMTINCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vdGVjaGZyb21iZWxvdy5kZS8yMDI1LTA5LTA0Lw0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpXaWtpbWVkaWEgRGV1dHNjaGxhbmQgZS4gVi5cLCBUZW1wZWxob2ZlciBVZmVyIDIzLTI0XCwgMTA5NjMgQmVybGluDQpHRU86NTIuNDk4NDE0MjsxMy4zODEwNDg2DQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://techfrombelow.de/2025-09-04/
* Donnerstag, 04.09.2025, 19:31-19:31, online: **Bits und Bäume Community Treffen** <a title='Kalendereintrag Bits und Bäume Community Treffen' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vQml0cyB1bmQgQsOkdW1lIENvbW11bml0eSBUcmVmZmVuLy9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjUxMDA0VDEyMTUwMloNCkRUU1RBUlQ6MjAyNTA5MDRUMTkzMTAwDQpEVEVORDoyMDI1MDkwNFQxOTMxMDANClNVTU1BUlk6Qml0cyB1bmQgQsOkdW1lIENvbW11bml0eSBUcmVmZmVuDQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL2JpdHMtdW5kLWJhZXVtZS5vcmcvdGVybWluZS8NCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046b25saW5lDQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://bits-und-baeume.org/termine/
* Freitag, 05.09.2025, 10:00, bis Samstag, 06.09.2025, 15:00, Erich-Brost-Institut für Internationalen Journalismus auf dem Campus Nord der TU Dortmund, Otto-Hahn-Straße 2, 44227 Dortmund: **SciCAR 2025** <a title='Kalendereintrag SciCAR 2025' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vU2NpQ0FSIDIwMjUvL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNTEwMDRUMTIxNTAyWg0KRFRTVEFSVDoyMDI1MDkwNVQxMDAwMDANCkRURU5EOjIwMjUwOTA2VDE1MDAwMA0KU1VNTUFSWTpTY2lDQVIgMjAyNQ0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly9uZXR6d2Vya3JlY2hlcmNoZS5vcmcvd2lyLXZlcm5ldHplbi9zY2ljYXIvDQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOkVyaWNoLUJyb3N0LUluc3RpdHV0IGbDvHIgSW50ZXJuYXRpb25hbGVuIEpvdXJuYWxpc211cyBhdWYgZGVtIENhbXB1cyBOb3JkIGRlciBUVSBEb3J0bXVuZFwsIE90dG8tSGFobi1TdHJhw59lIDJcLCA0NDIyNyBEb3J0bXVuZA0KR0VPOjUxLjQ5MTE0OTE5OTk5OTk5NTs3LjQxNTU4MTE5ODUzNDMwMQ0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://netzwerkrecherche.org/wir-vernetzen/scicar/
* Freitag, 05.09.2025, 12:00, bis Sonntag, 07.09.2025, 12:00, La Grange e.V., Gingster Chaussee 6, 18528 Bergen auf Rügen: **InselChaos 2025** <a title='Kalendereintrag InselChaos 2025' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vSW5zZWxDaGFvcyAyMDI1Ly9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjUxMDA0VDEyMTUwMloNCkRUU1RBUlQ6MjAyNTA5MDVUMTIwMDAwDQpEVEVORDoyMDI1MDkwN1QxMjAwMDANClNVTU1BUlk6SW5zZWxDaGFvcyAyMDI1DQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL2luc2VsY2hhb3MuZGUNCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046TGEgR3JhbmdlIGUuVi5cLCBHaW5nc3RlciBDaGF1c3NlZSA2XCwgMTg1MjggQmVyZ2VuIGF1ZiBSw7xnZW4NCkdFTzo1NC40MjQ3MDQ7MTMuNDE1NTY1DQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://inselchaos.de
* Dienstag, 09.09.2025, 19:00-20:15, online: **Community Workshop: Ethische KI in der Praxis** <a title='Kalendereintrag Community Workshop: Ethische KI in der Praxis' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vQ29tbXVuaXR5IFdvcmtzaG9wOiBFdGhpc2NoZSBLSSBpbiBkZXIgUHJheGlzLy9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjUxMDA0VDEyMTUwMloNCkRUU1RBUlQ6MjAyNTA5MDlUMTkwMDAwDQpEVEVORDoyMDI1MDkwOVQyMDE1MDANClNVTU1BUlk6Q29tbXVuaXR5IFdvcmtzaG9wOiBFdGhpc2NoZSBLSSBpbiBkZXIgUHJheGlzDQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL2NvcnJlbGFpZC5vcmcvdmVyYW5zdGFsdHVuZ2VuL2N3LWV0aGlzY2hlLWtpP3ZpZXdUeXBlPWxpc3QNCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046b25saW5lDQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://correlaid.org/veranstaltungen/cw-ethische-ki?viewType=list
* Donnerstag, 11.09.2025, 11:00-12:00, online: **openCode Connect September 2025: F13 erklärt - Der einfache Weg zur eigenen KI in der Verwaltung** <a title='Kalendereintrag openCode Connect September 2025: F13 erklärt - Der einfache Weg zur eigenen KI in der Verwaltung' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vb3BlbkNvZGUgQ29ubmVjdCBTZXB0ZW1iZXIgMjAyNTogRjEzIGVya2zDpHJ0IC0gRGVyIGVpbmZhY2hlIFdlZyB6dXIgZWlnZW5lbiBLSSBpbiBkZXIgVmVyd2FsdHVuZy8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI1MTAwNFQxMjE1MDJaDQpEVFNUQVJUOjIwMjUwOTExVDExMDAwMA0KRFRFTkQ6MjAyNTA5MTFUMTIwMDAwDQpTVU1NQVJZOm9wZW5Db2RlIENvbm5lY3QgU2VwdGVtYmVyIDIwMjU6IEYxMyBlcmtsw6RydCAtIERlciBlaW5mYWNoZSBXZWcgenVyIGVpZ2VuZW4gS0kgaW4gZGVyIFZlcndhbHR1bmcNCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vb3BlbmNvZGUuZGUvZGUvYWt0dWVsbGVzL2V2ZW50cy9vcGVuY29kZS1jb25uZWN0LXNlcHRlbWJlci0yMDI1LTQ4NjcNCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046b25saW5lDQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://opencode.de/de/aktuelles/events/opencode-connect-september-2025-4867
* Freitag, 12.09.2025, 13:30, bis Sonntag, 14.09.2025, 15:30, Piloty-Gebäude (S2|02), TU Darmstadt, Hochschulstraße 10, 64289 Darmstadt: **Meta-Rhein-Main-Chaos-Days (MRMCD) 2025** <a title='Kalendereintrag Meta-Rhein-Main-Chaos-Days (MRMCD) 2025' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vTWV0YS1SaGVpbi1NYWluLUNoYW9zLURheXMgKE1STUNEKSAyMDI1Ly9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjUxMDA0VDEyMTUwMloNCkRUU1RBUlQ6MjAyNTA5MTJUMTMzMDAwDQpEVEVORDoyMDI1MDkxNFQxNTMwMDANClNVTU1BUlk6TWV0YS1SaGVpbi1NYWluLUNoYW9zLURheXMgKE1STUNEKSAyMDI1DQpMSU5LO1ZBTFVFPVVJRDpodHRwczovLzIwMjUubXJtY2QubmV0L2RlLw0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpQaWxvdHktR2Viw6R1ZGUgKFMyfDAyKVwsIFRVIERhcm1zdGFkdFwsIEhvY2hzY2h1bHN0cmHDn2UgMTBcLCA2NDI4OSBEYXJtc3RhZHQNCkdFTzo0OS44Nzc1MDkxNDk5OTk5OTU7OC42NTQ1NDYyOTk1ODg1MjMNCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://2025.mrmcd.net/de/
* Freitag, 12.09.2025, 19:00-21:00, Wikimedia Deutschland e. V., Tempelhofer Ufer 23-24, 10963 Berlin: **Strategische Korruption und Desinformation: Gefahren und Gegenmaßnahmen** <a title='Kalendereintrag Strategische Korruption und Desinformation: Gefahren und Gegenmaßnahmen' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vU3RyYXRlZ2lzY2hlIEtvcnJ1cHRpb24gdW5kIERlc2luZm9ybWF0aW9uOiBHZWZhaHJlbiB1bmQgR2VnZW5tYcOfbmFobWVuLy9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjUxMDA0VDEyMTUwMloNCkRUU1RBUlQ6MjAyNTA5MTJUMTkwMDAwDQpEVEVORDoyMDI1MDkxMlQyMTAwMDANClNVTU1BUlk6U3RyYXRlZ2lzY2hlIEtvcnJ1cHRpb24gdW5kIERlc2luZm9ybWF0aW9uOiBHZWZhaHJlbiB1bmQgR2VnZW5tYcOfbmFobWVuDQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL3d3dy50cmFuc3BhcmVuY3kuZGUvYWt0dWVsbGVzL2RldGFpbC9hcnRpY2xlL3N0cmF0ZWdpc2NoZS1rb3JydXB0aW9uLXVuZC1kZXNpbmZvcm1hdGlvbi1nZWZhaHJlbi11bmQtZ2VnZW5tYXNzbmFobWVuDQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOldpa2ltZWRpYSBEZXV0c2NobGFuZCBlLiBWLlwsIFRlbXBlbGhvZmVyIFVmZXIgMjMtMjRcLCAxMDk2MyBCZXJsaW4NCkdFTzo1Mi40OTg0MTQyOzEzLjM4MTA0ODYNCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://www.transparency.de/aktuelles/detail/article/strategische-korruption-und-desinformation-gefahren-und-gegenmassnahmen
* Freitag, 12.09.2025, 19:00, bis Samstag, 04.10.2025, 19:00, Atelier Augarten, Scherzergasse 1A, 1020 Wien und auch online: **The Future of Demonstration: HOTHOUSE** <a title='Kalendereintrag The Future of Demonstration: HOTHOUSE' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vVGhlIEZ1dHVyZSBvZiBEZW1vbnN0cmF0aW9uOiBIT1RIT1VTRS8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI1MTAwNFQxMjE1MDJaDQpEVFNUQVJUOjIwMjUwOTEyVDE5MDAwMA0KRFRFTkQ6MjAyNTEwMDRUMTkwMDAwDQpTVU1NQVJZOlRoZSBGdXR1cmUgb2YgRGVtb25zdHJhdGlvbjogSE9USE9VU0UNCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vdGhlZnV0dXJlb2ZkZW1vbnN0cmF0aW9uLm5ldC9ob3Rob3VzZS9pbmRleC5odG1sDQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOkF0ZWxpZXIgQXVnYXJ0ZW5cLCBTY2hlcnplcmdhc3NlIDFBXCwgMTAyMCBXaWVuIHVuZCBhdWNoIG9ubGluZQ0KR0VPOjQ4LjIyNDYwMDM1MTc4ODI2OzE2LjM4MjIwMDg3OTU5NTkyNA0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://thefutureofdemonstration.net/hothouse/index.html
* Montag, 15.09.2025, 10:00-15:00, Bundesinnenministerium, Alt-Moabit 140, 10557 Berlin: **GovTalk 2025 – Das Netzwerkevent zum Digitalen Staat** <a title='Kalendereintrag GovTalk 2025 – Das Netzwerkevent zum Digitalen Staat' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vR292VGFsayAyMDI1IOKAkyBEYXMgTmV0endlcmtldmVudCB6dW0gRGlnaXRhbGVuIFN0YWF0Ly9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjUxMDA0VDEyMTUwMloNCkRUU1RBUlQ6MjAyNTA5MTVUMTAwMDAwDQpEVEVORDoyMDI1MDkxNVQxNTAwMDANClNVTU1BUlk6R292VGFsayAyMDI1IOKAkyBEYXMgTmV0endlcmtldmVudCB6dW0gRGlnaXRhbGVuIFN0YWF0DQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL2luaXRpYXRpdmVkMjEuZGUvdmVyYW5zdGFsdHVuZ2VuL2dvdnRhbGstMjAyNS1kYXMtbmV0endlcmtldmVudC16dW0tZGlnaXRhbGVuLXN0YWF0DQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOkJ1bmRlc2lubmVubWluaXN0ZXJpdW1cLCBBbHQtTW9hYml0IDE0MFwsIDEwNTU3IEJlcmxpbg0KR0VPOjUyLjUyMTg0MjI5OTk5OTk5NjsxMy4zNjMxNTMxDQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://initiatived21.de/veranstaltungen/govtalk-2025-das-netzwerkevent-zum-digitalen-staat
* Montag, 15.09.2025, 18:00-21:00, Einstein Center Digital Future (ECDF), Wilhelmstraße 67, 10117 Berlin: **Grundrechte im Digitalen: Was sie bedeuten und wie sie wirken** <a title='Kalendereintrag Grundrechte im Digitalen: Was sie bedeuten und wie sie wirken' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vR3J1bmRyZWNodGUgaW0gRGlnaXRhbGVuOiBXYXMgc2llIGJlZGV1dGVuIHVuZCB3aWUgc2llIHdpcmtlbi8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI1MTAwNFQxMjE1MDJaDQpEVFNUQVJUOjIwMjUwOTE1VDE4MDAwMA0KRFRFTkQ6MjAyNTA5MTVUMjEwMDAwDQpTVU1NQVJZOkdydW5kcmVjaHRlIGltIERpZ2l0YWxlbjogV2FzIHNpZSBiZWRldXRlbiB1bmQgd2llIHNpZSB3aXJrZW4NCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vd3d3Lndpa2ltZWRpYS5kZS92ZXJhbnN0YWx0dW5nZW4vZ3J1bmRyZWNodGUtaW0tZGlnaXRhbGVuLw0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpFaW5zdGVpbiBDZW50ZXIgRGlnaXRhbCBGdXR1cmUgKEVDREYpXCwgV2lsaGVsbXN0cmHDn2UgNjdcLCAxMDExNyBCZXJsaW4NCkdFTzo1Mi41MTgzOTU2OzEzLjM4MDYwMjENCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://www.wikimedia.de/veranstaltungen/grundrechte-im-digitalen/
* Dienstag, 16.09.2025, 09:00, bis Freitag, 19.09.2025, 16:00, Campus III - Griebnitzsee, August-Bebel-Straße 89, 14482 Potsdam und auch online: **Informatik Festival 2025** <a title='Kalendereintrag Informatik Festival 2025' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vSW5mb3JtYXRpayBGZXN0aXZhbCAyMDI1Ly9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjUxMDA0VDEyMTUwMloNCkRUU1RBUlQ6MjAyNTA5MTZUMDkwMDAwDQpEVEVORDoyMDI1MDkxOVQxNjAwMDANClNVTU1BUlk6SW5mb3JtYXRpayBGZXN0aXZhbCAyMDI1DQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL2luZm9ybWF0aWsyMDI1LmdpLmRlL2luZGV4LnBocA0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpDYW1wdXMgSUlJIC0gR3JpZWJuaXR6c2VlXCwgQXVndXN0LUJlYmVsLVN0cmHDn2UgODlcLCAxNDQ4MiBQb3RzZGFtIHVuZCBhdWNoIG9ubGluZQ0KR0VPOjUyLjM5Mjc0NTUwMDAwMDAwNDsxMy4xMjcyNzI3NDc5MjE0NjMNCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://informatik2025.gi.de/index.php
* Dienstag, 16.09.2025, 09:00-16:00, Campus III - Griebnitzsee, August-Bebel-Straße 89, 14482 Potsdam und auch online: **KIU-2025: 6. Workshop “Künstliche Intelligenz in der Umweltinformatik”** <a title='Kalendereintrag KIU-2025: 6. Workshop “Künstliche Intelligenz in der Umweltinformatik”' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vS0lVLTIwMjU6IDYuIFdvcmtzaG9wIOKAnEvDvG5zdGxpY2hlIEludGVsbGlnZW56IGluIGRlciBVbXdlbHRpbmZvcm1hdGlr4oCdLy9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjUxMDA0VDEyMTUwMloNCkRUU1RBUlQ6MjAyNTA5MTZUMDkwMDAwDQpEVEVORDoyMDI1MDkxNlQxNjAwMDANClNVTU1BUlk6S0lVLTIwMjU6IDYuIFdvcmtzaG9wIOKAnEvDvG5zdGxpY2hlIEludGVsbGlnZW56IGluIGRlciBVbXdlbHRpbmZvcm1hdGlr4oCdDQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL3d3dy51bXdlbHQta2kuZGUNCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046Q2FtcHVzIElJSSAtIEdyaWVibml0enNlZVwsIEF1Z3VzdC1CZWJlbC1TdHJhw59lIDg5XCwgMTQ0ODIgUG90c2RhbSB1bmQgYXVjaCBvbmxpbmUNCkdFTzo1Mi4zOTI3NDU1MDAwMDAwMDQ7MTMuMTI3MjcyNzQ3OTIxNDYzDQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://www.umwelt-ki.de
* Mittwoch, 17.09.2025, 09:00-14:30, Festsaal im Roten Rathaus, Rathausstraße 15, 10178 Berlin: **Gemeinsam Digital: Berlin Jahreskonferenz 2025** <a title='Kalendereintrag Gemeinsam Digital: Berlin Jahreskonferenz 2025' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vR2VtZWluc2FtIERpZ2l0YWw6IEJlcmxpbiBKYWhyZXNrb25mZXJlbnogMjAyNS8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI1MTAwNFQxMjE1MDJaDQpEVFNUQVJUOjIwMjUwOTE3VDA5MDAwMA0KRFRFTkQ6MjAyNTA5MTdUMTQzMDAwDQpTVU1NQVJZOkdlbWVpbnNhbSBEaWdpdGFsOiBCZXJsaW4gSmFocmVza29uZmVyZW56IDIwMjUNCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vZG9vLm5ldC92ZXJhbnN0YWx0dW5nLzE5MzA3OC9idWNodW5nDQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOkZlc3RzYWFsIGltIFJvdGVuIFJhdGhhdXNcLCBSYXRoYXVzc3RyYcOfZSAxNVwsIDEwMTc4IEJlcmxpbg0KR0VPOjUyLjUxODI3MTg7MTMuNDA3ODMwODk5OTk5OTk5DQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://doo.net/veranstaltung/193078/buchung
* Mittwoch, 17.09.2025, 10:00, bis Freitag, 19.09.2025, 13:00, Universität Konstanz, Universitätsstraße 10, 78464 Konstanz: **Open-Access-Tage 2025** <a title='Kalendereintrag Open-Access-Tage 2025' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vT3Blbi1BY2Nlc3MtVGFnZSAyMDI1Ly9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjUxMDA0VDEyMTUwMloNCkRUU1RBUlQ6MjAyNTA5MTdUMTAwMDAwDQpEVEVORDoyMDI1MDkxOVQxMzAwMDANClNVTU1BUlk6T3Blbi1BY2Nlc3MtVGFnZSAyMDI1DQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL29wZW4tYWNjZXNzLXRhZ2UuZGUvb3Blbi1hY2Nlc3MtdGFnZS0yMDI1LWtvbnN0YW56DQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOlVuaXZlcnNpdMOkdCBLb25zdGFuelwsIFVuaXZlcnNpdMOkdHNzdHJhw59lIDEwXCwgNzg0NjQgS29uc3RhbnoNCkdFTzo0Ny42ODk5NTY5OzkuMTg4MjYyNA0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://open-access-tage.de/open-access-tage-2025-konstanz
* Mittwoch, 17.09.2025, 14:00, bis Freitag, 19.09.2025, 15:30, Campus III - Griebnitzsee, August-Bebel-Straße 89, 14482 Potsdam und auch online: **EnviroInfo 2025** <a title='Kalendereintrag EnviroInfo 2025' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vRW52aXJvSW5mbyAyMDI1Ly9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjUxMDA0VDEyMTUwMloNCkRUU1RBUlQ6MjAyNTA5MTdUMTQwMDAwDQpEVEVORDoyMDI1MDkxOVQxNTMwMDANClNVTU1BUlk6RW52aXJvSW5mbyAyMDI1DQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL2Vudmlyb2luZm8yMDI1LmdpLmRlLw0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpDYW1wdXMgSUlJIC0gR3JpZWJuaXR6c2VlXCwgQXVndXN0LUJlYmVsLVN0cmHDn2UgODlcLCAxNDQ4MiBQb3RzZGFtIHVuZCBhdWNoIG9ubGluZQ0KR0VPOjUyLjM5Mjc0NTUwMDAwMDAwNDsxMy4xMjcyNzI3NDc5MjE0NjMNCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://enviroinfo2025.gi.de/
* Mittwoch, 17.09.2025, 16:00, bis Samstag, 20.09.2025, 12:00, c-base, Linnéstraße 5, 04103 Leipzig: **Junger Kongress Geografie 2025** <a title='Kalendereintrag Junger Kongress Geografie 2025' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vSnVuZ2VyIEtvbmdyZXNzIEdlb2dyYWZpZSAyMDI1Ly9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjUxMDA0VDEyMTUwMloNCkRUU1RBUlQ6MjAyNTA5MTdUMTYwMDAwDQpEVEVORDoyMDI1MDkyMFQxMjAwMDANClNVTU1BUlk6SnVuZ2VyIEtvbmdyZXNzIEdlb2dyYWZpZSAyMDI1DQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL3d3dy5qa2cyMDI1LmRlL2hvbWUNCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046Yy1iYXNlXCwgTGlubsOpc3RyYcOfZSA1XCwgMDQxMDMgTGVpcHppZw0KR0VPOjUxLjMyNjk0NjI7MTIuMzkxNzI0NzExMTMzNjQzDQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://www.jkg2025.de/home
* Donnerstag, 18.09.2025, 15:00, bis Samstag, 20.09.2025, 19:00, Kitz - Kieler Innovations- und Technologiezentrum, Schauenburgerstr. 116, 24118 Kiel und auch online: **Kieler Open Source und Linux Tage** <a title='Kalendereintrag Kieler Open Source und Linux Tage' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vS2llbGVyIE9wZW4gU291cmNlIHVuZCBMaW51eCBUYWdlLy9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjUxMDA0VDEyMTUwMloNCkRUU1RBUlQ6MjAyNTA5MThUMTUwMDAwDQpEVEVORDoyMDI1MDkyMFQxOTAwMDANClNVTU1BUlk6S2llbGVyIE9wZW4gU291cmNlIHVuZCBMaW51eCBUYWdlDQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL3d3dy5raWVsZXItbGludXh0YWdlLmRlDQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOktpdHogLSBLaWVsZXIgSW5ub3ZhdGlvbnMtIHVuZCBUZWNobm9sb2dpZXplbnRydW1cLCBTY2hhdWVuYnVyZ2Vyc3RyLiAxMTZcLCAyNDExOCBLaWVsIHVuZCBhdWNoIG9ubGluZQ0KR0VPOjU0LjMzNDk2OzEwLjExOTEzMDENCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://www.kieler-linuxtage.de
* Donnerstag, 18.09.2025, 16:00-17:00, online: **Blühende digitale Landschaften? Wie kluge Förderpolitik gute Lösungen in die Fläche bringt** <a title='Kalendereintrag Blühende digitale Landschaften? Wie kluge Förderpolitik gute Lösungen in die Fläche bringt' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vQmzDvGhlbmRlIGRpZ2l0YWxlIExhbmRzY2hhZnRlbj8gV2llIGtsdWdlIEbDtnJkZXJwb2xpdGlrIGd1dGUgTMO2c3VuZ2VuIGluIGRpZSBGbMOkY2hlIGJyaW5ndC8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI1MTAwNFQxMjE1MDJaDQpEVFNUQVJUOjIwMjUwOTE4VDE2MDAwMA0KRFRFTkQ6MjAyNTA5MThUMTcwMDAwDQpTVU1NQVJZOkJsw7xoZW5kZSBkaWdpdGFsZSBMYW5kc2NoYWZ0ZW4/IFdpZSBrbHVnZSBGw7ZyZGVycG9saXRpayBndXRlIEzDtnN1bmdlbiBpbiBkaWUgRmzDpGNoZSBicmluZ3QNCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vZXZlbnRzLnRlYW1zLm1pY3Jvc29mdC5jb20vZXZlbnQvZjg0OGViMjItYmY1MC00NGQxLThkMDItODg3ZWY2MGM1ZmQ4QGE5MjYyY2E1LWViZWEtNDhmZi1hNTE1LTdkNmIyZmQ0NmViOA0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpvbmxpbmUNCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://events.teams.microsoft.com/event/f848eb22-bf50-44d1-8d02-887ef60c5fd8@a9262ca5-ebea-48ff-a515-7d6b2fd46eb8
* Donnerstag, 18.09.2025, 16:00-17:00, online: **Zwischen KI-Boom und Klimaziel** <a title='Kalendereintrag Zwischen KI-Boom und Klimaziel' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vWndpc2NoZW4gS0ktQm9vbSB1bmQgS2xpbWF6aWVsLy9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjUxMDA0VDEyMTUwMloNCkRUU1RBUlQ6MjAyNTA5MThUMTYwMDAwDQpEVEVORDoyMDI1MDkxOFQxNzAwMDANClNVTU1BUlk6Wndpc2NoZW4gS0ktQm9vbSB1bmQgS2xpbWF6aWVsDQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL3d3dy5jaXZpYy1jb2RpbmcuZGUvYW5nZWJvdGUvdmVyYW5zdGFsdHVuZ2VuL3p3aXNjaGVuLWtpLWJvb20tdW5kLWtsaW1hemllbC1jaXZpYy1jb2Rpbmctc2NobGFnbGljaHQNCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046b25saW5lDQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://www.civic-coding.de/angebote/veranstaltungen/zwischen-ki-boom-und-klimaziel-civic-coding-schlaglicht
* Freitag, 19.09.2025, 09:00-13:00, online: **KIforGood-Barcamp** <a title='Kalendereintrag KIforGood-Barcamp' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vS0lmb3JHb29kLUJhcmNhbXAvL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNTEwMDRUMTIxNTAyWg0KRFRTVEFSVDoyMDI1MDkxOVQwOTAwMDANCkRURU5EOjIwMjUwOTE5VDEzMDAwMA0KU1VNTUFSWTpLSWZvckdvb2QtQmFyY2FtcA0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly9raWZvcmdvb2QuZGUvYmFyY2FtcC8NCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046b25saW5lDQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://kiforgood.de/barcamp/
* Freitag, 19.09.2025, 16:00, bis Sonntag, 21.09.2025, 17:30, Zentralwerk, Riesaer Str. 32, 10179 Dresden: **Datenspuren 2025** <a title='Kalendereintrag Datenspuren 2025' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vRGF0ZW5zcHVyZW4gMjAyNS8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI1MTAwNFQxMjE1MDJaDQpEVFNUQVJUOjIwMjUwOTE5VDE2MDAwMA0KRFRFTkQ6MjAyNTA5MjFUMTczMDAwDQpTVU1NQVJZOkRhdGVuc3B1cmVuIDIwMjUNCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vZGF0ZW5zcHVyZW4uZGUvMjAyNS8NCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046WmVudHJhbHdlcmtcLCBSaWVzYWVyIFN0ci4gMzJcLCAxMDE3OSBEcmVzZGVuDQpHRU86NTEuMDgxMDc5MjsxMy43Mjg1MzM4OTk5OTk5OTkNCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://datenspuren.de/2025/
* Freitag, 19.09.2025, 16:00, bis Sonntag, 21.09.2025, 16:00, Strandpavillon Solitüde, Ewoldtweg , 24944 Flensburg und auch online: **Hacks on the Beach 2025** <a title='Kalendereintrag Hacks on the Beach 2025' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vSGFja3Mgb24gdGhlIEJlYWNoIDIwMjUvL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNTEwMDRUMTIxNTAyWg0KRFRTVEFSVDoyMDI1MDkxOVQxNjAwMDANCkRURU5EOjIwMjUwOTIxVDE2MDAwMA0KU1VNTUFSWTpIYWNrcyBvbiB0aGUgQmVhY2ggMjAyNQ0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly9ob3RiLmMzZmwuZGUvZGUvDQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOlN0cmFuZHBhdmlsbG9uIFNvbGl0w7xkZVwsIEV3b2xkdHdlZyBcLCAyNDk0NCBGbGVuc2J1cmcgdW5kIGF1Y2ggb25saW5lDQpHRU86NTQuODIyMzU2MTk5OTk5OTk0OzkuNDg5NTY2DQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://hotb.c3fl.de/de/
* Samstag, 20.09.2025, 10:00-17:00, DGB-Haus, Bahnhofsplatz 22-28, 28195 Bremen: **6. Barcamp Nahverkehr – Gemeinsam mehr bewegen** <a title='Kalendereintrag 6. Barcamp Nahverkehr – Gemeinsam mehr bewegen' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vNi4gQmFyY2FtcCBOYWh2ZXJrZWhyIOKAkyBHZW1laW5zYW0gbWVociBiZXdlZ2VuLy9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjUxMDA0VDEyMTUwMloNCkRUU1RBUlQ6MjAyNTA5MjBUMTAwMDAwDQpEVEVORDoyMDI1MDkyMFQxNzAwMDANClNVTU1BUlk6Ni4gQmFyY2FtcCBOYWh2ZXJrZWhyIOKAkyBHZW1laW5zYW0gbWVociBiZXdlZ2VuDQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL2VpbnN0ZWlnZW4uamV0enQvYmFyY2FtcC0yMDI1Lw0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpER0ItSGF1c1wsIEJhaG5ob2ZzcGxhdHogMjItMjhcLCAyODE5NSBCcmVtZW4NCkdFTzo1My4wODEwMDI4OzguODE0NjQ2NA0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://einsteigen.jetzt/barcamp-2025/
* Samstag, 20.09.2025, 12:00, bis Sonntag, 21.09.2025, 22:00, Zentralgebäude | Gebäude 10, Hochschule für Technik und Wirtschaft des Saarlandes, Goebenstraße 40, 66117 Saarbrücken: **Mega Knowledgecamp 2025** <a title='Kalendereintrag Mega Knowledgecamp 2025' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vTWVnYSBLbm93bGVkZ2VjYW1wIDIwMjUvL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNTEwMDRUMTIxNTAyWg0KRFRTVEFSVDoyMDI1MDkyMFQxMjAwMDANCkRURU5EOjIwMjUwOTIxVDIyMDAwMA0KU1VNTUFSWTpNZWdhIEtub3dsZWRnZWNhbXAgMjAyNQ0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly9tZWdha2MuaGFja3NhYXIuZGUNCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046WmVudHJhbGdlYsOkdWRlIHwgR2Viw6R1ZGUgMTBcLCBIb2Noc2NodWxlIGbDvHIgVGVjaG5payB1bmQgV2lydHNjaGFmdCBkZXMgU2FhcmxhbmRlc1wsIEdvZWJlbnN0cmHDn2UgNDBcLCA2NjExNyBTYWFyYnLDvGNrZW4NCkdFTzo0OS4yMzUzNjY2OzYuOTcyNTU5NzgwMDU2MDY2DQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://megakc.hacksaar.de
* Samstag, 20.09.2025, 16:00-18:00, online: **KI in grün? Perspektiven für eine nachhaltige KI in Baden-Württemberg, Deutschland und Europa** <a title='Kalendereintrag KI in grün? Perspektiven für eine nachhaltige KI in Baden-Württemberg, Deutschland und Europa' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vS0kgaW4gZ3LDvG4/IFBlcnNwZWt0aXZlbiBmw7xyIGVpbmUgbmFjaGhhbHRpZ2UgS0kgaW4gQmFkZW4tV8O8cnR0ZW1iZXJnXCwgRGV1dHNjaGxhbmQgdW5kIEV1cm9wYS8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI1MTAwNFQxMjE1MDJaDQpEVFNUQVJUOjIwMjUwOTIwVDE2MDAwMA0KRFRFTkQ6MjAyNTA5MjBUMTgwMDAwDQpTVU1NQVJZOktJIGluIGdyw7xuPyBQZXJzcGVrdGl2ZW4gZsO8ciBlaW5lIG5hY2hoYWx0aWdlIEtJIGluIEJhZGVuLVfDvHJ0dGVtYmVyZ1wsIERldXRzY2hsYW5kIHVuZCBFdXJvcGENCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vY2FsZW5kYXIuYm9lbGwuZGUvZGUvZXZlbnQvZ3J1ZW5lLWtpDQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOm9ubGluZQ0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://calendar.boell.de/de/event/gruene-ki
* Dienstag, 23.09.2025, 19:30-21:00, online: **OSM-Verkehrswende #70** <a title='Kalendereintrag OSM-Verkehrswende #70' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vT1NNLVZlcmtlaHJzd2VuZGUgIzcwLy9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjUxMDA0VDEyMTUwMloNCkRUU1RBUlQ6MjAyNTA5MjNUMTkzMDAwDQpEVEVORDoyMDI1MDkyM1QyMTAwMDANClNVTU1BUlk6T1NNLVZlcmtlaHJzd2VuZGUgIzcwDQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL29zbWNhbC5vcmcvZXZlbnQvMzk4MC8NCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046b25saW5lDQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://osmcal.org/event/3980/
* Mittwoch, 24.09.2025, 10:00, bis Freitag, 26.09.2025, 12:30, Universität Rostock, Hauptgebäude, Universitätsplatz 1, 18055 Rostock: **FORGE 2025 - Forschungsdaten in den Geisteswissenschaften** <a title='Kalendereintrag FORGE 2025 - Forschungsdaten in den Geisteswissenschaften' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vRk9SR0UgMjAyNSAtIEZvcnNjaHVuZ3NkYXRlbiBpbiBkZW4gR2Vpc3Rlc3dpc3NlbnNjaGFmdGVuLy9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjUxMDA0VDEyMTUwMloNCkRUU1RBUlQ6MjAyNTA5MjRUMTAwMDAwDQpEVEVORDoyMDI1MDkyNlQxMjMwMDANClNVTU1BUlk6Rk9SR0UgMjAyNSAtIEZvcnNjaHVuZ3NkYXRlbiBpbiBkZW4gR2Vpc3Rlc3dpc3NlbnNjaGFmdGVuDQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL3d3dy5mb3JnZTI1LnVuaS1yb3N0b2NrLmRlLw0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpVbml2ZXJzaXTDpHQgUm9zdG9ja1wsIEhhdXB0Z2Viw6R1ZGVcLCBVbml2ZXJzaXTDpHRzcGxhdHogMVwsIDE4MDU1IFJvc3RvY2sNCkdFTzo1NC4wODgwNTczOzEyLjEzMzI4NTM1NTQ3NzAzMg0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://www.forge25.uni-rostock.de/
* Mittwoch, 24.09.2025, 10:00-22:00, Palisa, Palisadenstraße 48, 10243 Berlin: **SCS Summit 2025** <a title='Kalendereintrag SCS Summit 2025' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vU0NTIFN1bW1pdCAyMDI1Ly9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjUxMDA0VDEyMTUwMloNCkRUU1RBUlQ6MjAyNTA5MjRUMTAwMDAwDQpEVEVORDoyMDI1MDkyNFQyMjAwMDANClNVTU1BUlk6U0NTIFN1bW1pdCAyMDI1DQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL3NvdmVyZWlnbmNsb3Vkc3RhY2sub3JnL2RlL3N1bW1pdDIwMjUvDQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOlBhbGlzYVwsIFBhbGlzYWRlbnN0cmHDn2UgNDhcLCAxMDI0MyBCZXJsaW4NCkdFTzo1Mi41MTgyMDM3OzEzLjQzOTk0NTUNCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://sovereigncloudstack.org/de/summit2025/
* Mittwoch, 24.09.2025, 14:00, bis Freitag, 26.09.2025, 14:30, Akademie der Wissenschaften und der Literatur, Geschwister-Scholl-Str. 2, 55131 Mainz: **Culture Community Plenary 5** <a title='Kalendereintrag Culture Community Plenary 5' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vQ3VsdHVyZSBDb21tdW5pdHkgUGxlbmFyeSA1Ly9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjUxMDA0VDEyMTUwMloNCkRUU1RBUlQ6MjAyNTA5MjRUMTQwMDAwDQpEVEVORDoyMDI1MDkyNlQxNDMwMDANClNVTU1BUlk6Q3VsdHVyZSBDb21tdW5pdHkgUGxlbmFyeSA1DQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL25mZGk0Y3VsdHVyZS5kZS9ldmVudHMvZGV0YWlscy9jdWx0dXJlLWNvbW11bml0eS1wbGVuYXJ5LTUtaW4tbWFpbnouaHRtbA0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpBa2FkZW1pZSBkZXIgV2lzc2Vuc2NoYWZ0ZW4gdW5kIGRlciBMaXRlcmF0dXJcLCBHZXNjaHdpc3Rlci1TY2hvbGwtU3RyLiAyXCwgNTUxMzEgTWFpbnoNCkdFTzo0OS45NzY2MDY7OC4yNzEyMTI5DQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://nfdi4culture.de/events/details/culture-community-plenary-5-in-mainz.html
* Donnerstag, 25.09.2025, 09:00-18:30, Fraunhofer FOKUS, Kaiserin-Augusta-Allee 31, 10589 Berlin: **Public Data – besser mit Behördendaten umgehen** <a title='Kalendereintrag Public Data – besser mit Behördendaten umgehen' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vUHVibGljIERhdGEg4oCTIGJlc3NlciBtaXQgQmVow7ZyZGVuZGF0ZW4gdW1nZWhlbi8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI1MTAwNFQxMjE1MDJaDQpEVFNUQVJUOjIwMjUwOTI1VDA5MDAwMA0KRFRFTkQ6MjAyNTA5MjVUMTgzMDAwDQpTVU1NQVJZOlB1YmxpYyBEYXRhIOKAkyBiZXNzZXIgbWl0IEJlaMO2cmRlbmRhdGVuIHVtZ2VoZW4NCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vd3d3LmZva3VzLmZyYXVuaG9mZXIuZGUvZGUvZHBzL3ZlcmFuc3RhbHR1bmdlbi9wdWJsaWMtZGF0YS1rb25mZXJlbnotSUkuaHRtbA0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpGcmF1bmhvZmVyIEZPS1VTXCwgS2Fpc2VyaW4tQXVndXN0YS1BbGxlZSAzMVwsIDEwNTg5IEJlcmxpbg0KR0VPOjUyLjUyNTk4NjsxMy4zMTQzNjU0DQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://www.fokus.fraunhofer.de/de/dps/veranstaltungen/public-data-konferenz-II.html
* Donnerstag, 25.09.2025, 10:00-13:00, online: **Bits & Bäume NRW – in die Bildung** <a title='Kalendereintrag Bits & Bäume NRW – in die Bildung' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vQml0cyAmIELDpHVtZSBOUlcg4oCTIGluIGRpZSBCaWxkdW5nLy9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjUxMDA0VDEyMTUwMloNCkRUU1RBUlQ6MjAyNTA5MjVUMTAwMDAwDQpEVEVORDoyMDI1MDkyNVQxMzAwMDANClNVTU1BUlk6Qml0cyAmIELDpHVtZSBOUlcg4oCTIGluIGRpZSBCaWxkdW5nDQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL3d3dy5laW5lLXdlbHQtbmV0ei1ucncuZGUvYml0cy11bmQtYmFldW1lLW5ydy8NCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046b25saW5lDQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://www.eine-welt-netz-nrw.de/bits-und-baeume-nrw/
* Freitag, 26.09.2025, 14:00-16:00, ZK/U Berlin – Zentrum für Kunst und Urbanistik, Siemensstraße 27, 10551 Berlin: **Abschlussveranstaltung Summer School 2025: Stadt.Wald.Labor – Digitale Perspektiven auf ökologische Räume** <a title='Kalendereintrag Abschlussveranstaltung Summer School 2025: Stadt.Wald.Labor – Digitale Perspektiven auf ökologische Räume' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vQWJzY2hsdXNzdmVyYW5zdGFsdHVuZyBTdW1tZXIgU2Nob29sIDIwMjU6IFN0YWR0LldhbGQuTGFib3Ig4oCTIERpZ2l0YWxlIFBlcnNwZWt0aXZlbiBhdWYgw7Zrb2xvZ2lzY2hlIFLDpHVtZS8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI1MTAwNFQxMjE1MDJaDQpEVFNUQVJUOjIwMjUwOTI2VDE0MDAwMA0KRFRFTkQ6MjAyNTA5MjZUMTYwMDAwDQpTVU1NQVJZOkFic2NobHVzc3ZlcmFuc3RhbHR1bmcgU3VtbWVyIFNjaG9vbCAyMDI1OiBTdGFkdC5XYWxkLkxhYm9yIOKAkyBEaWdpdGFsZSBQZXJzcGVrdGl2ZW4gYXVmIMO2a29sb2dpc2NoZSBSw6R1bWUNCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vY2l0eWxhYi1iZXJsaW4ub3JnL2RlL2V2ZW50cy9zdW1tZXItc2Nob29sLTIwMjUtc3RhZHQtd2FsZC1sYWJvci1kaWdpdGFsZS1wZXJzcGVrdGl2ZW4tYXVmLW9la29sb2dpc2NoZS1yYWV1bWUvDQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOlpLL1UgQmVybGluIOKAkyBaZW50cnVtIGbDvHIgS3Vuc3QgdW5kIFVyYmFuaXN0aWtcLCBTaWVtZW5zc3RyYcOfZSAyN1wsIDEwNTUxIEJlcmxpbg0KR0VPOjUyLjUzMzg5MzE5OTk5OTk5NDsxMy4zMzY1MjkyOTk5OTk5OTkNCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://citylab-berlin.org/de/events/summer-school-2025-stadt-wald-labor-digitale-perspektiven-auf-oekologische-raeume/
* Samstag, 27.09.2025, 10:00-18:00, HTL Dornbirn, Höchsterstr. 73, A-6851 Dornbirn: **GNU/LinuxDay in Vorarlberg** <a title='Kalendereintrag GNU/LinuxDay in Vorarlberg' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vR05VL0xpbnV4RGF5IGluIFZvcmFybGJlcmcvL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNTEwMDRUMTIxNTAyWg0KRFRTVEFSVDoyMDI1MDkyN1QxMDAwMDANCkRURU5EOjIwMjUwOTI3VDE4MDAwMA0KU1VNTUFSWTpHTlUvTGludXhEYXkgaW4gVm9yYXJsYmVyZw0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly93d3cubGludXhkYXkuYXQNCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046SFRMIERvcm5iaXJuXCwgSMO2Y2hzdGVyc3RyLiA3M1wsIEEtNjg1MSBEb3JuYmlybg0KR0VPOjQ3LjQxMzg4OTk7OS43MjMwODg4DQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://www.linuxday.at
* Samstag, 27.09.2025, 10:00, bis Sonntag, 28.09.2025, 18:00, bUm – Raum für solidarisches Miteinander, Paul-Lincke-Ufer 21, 10999 Berlin: **Nextcloud Community Conference 2025** <a title='Kalendereintrag Nextcloud Community Conference 2025' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vTmV4dGNsb3VkIENvbW11bml0eSBDb25mZXJlbmNlIDIwMjUvL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNTEwMDRUMTIxNTAyWg0KRFRTVEFSVDoyMDI1MDkyN1QxMDAwMDANCkRURU5EOjIwMjUwOTI4VDE4MDAwMA0KU1VNTUFSWTpOZXh0Y2xvdWQgQ29tbXVuaXR5IENvbmZlcmVuY2UgMjAyNQ0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly9uZXh0Y2xvdWQuY29tL2NvbmZlcmVuY2UtMjAyNS8NCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046YlVtIOKAkyBSYXVtIGbDvHIgc29saWRhcmlzY2hlcyBNaXRlaW5hbmRlclwsIFBhdWwtTGluY2tlLVVmZXIgMjFcLCAxMDk5OSBCZXJsaW4NCkdFTzo1Mi40OTM3OTMyOzEzLjQyOTY2MTENCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://nextcloud.com/conference-2025/
* Montag, 29.09.2025, 10:00-17:00, Look 21, Türlenstraße 2, 70191 Stuttgart: **digitalMobil25** <a title='Kalendereintrag digitalMobil25' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vZGlnaXRhbE1vYmlsMjUvL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNTEwMDRUMTIxNTAyWg0KRFRTVEFSVDoyMDI1MDkyOVQxMDAwMDANCkRURU5EOjIwMjUwOTI5VDE3MDAwMA0KU1VNTUFSWTpkaWdpdGFsTW9iaWwyNQ0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly92bS5iYWRlbi13dWVydHRlbWJlcmcuZGUvZGUvc2VydmljZS92ZXJhbnN0YWx0dW5nZW4vYW5tZWxkdW5nZW4vYW5tZWxkdW5nLWRpZ2l0YWxtb2JpbC0yMDI1DQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOkxvb2sgMjFcLCBUw7xybGVuc3RyYcOfZSAyXCwgNzAxOTEgU3R1dHRnYXJ0DQpHRU86NDguNzkwOTE4Mjs5LjE4MDQ2ODQNCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://vm.baden-wuerttemberg.de/de/service/veranstaltungen/anmeldungen/anmeldung-digitalmobil-2025
* Dienstag, 30.09.2025, 09:00, bis Mittwoch, 01.10.2025, 14:15, Museums der Arbeit, Wiesendamm 3, 22305 Hamburg und auch online: **TINCON 2025 Hamburg** <a title='Kalendereintrag TINCON 2025 Hamburg' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vVElOQ09OIDIwMjUgSGFtYnVyZy8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI1MTAwNFQxMjE1MDJaDQpEVFNUQVJUOjIwMjUwOTMwVDA5MDAwMA0KRFRFTkQ6MjAyNTEwMDFUMTQxNTAwDQpTVU1NQVJZOlRJTkNPTiAyMDI1IEhhbWJ1cmcNCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vdGluY29uLm9yZy9ldmVudC9oYW1idXJnMjUNCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046TXVzZXVtcyBkZXIgQXJiZWl0XCwgV2llc2VuZGFtbSAzXCwgMjIzMDUgSGFtYnVyZyB1bmQgYXVjaCBvbmxpbmUNCkdFTzo1My41ODU5MDIzOTk5OTk5OTU7MTAuMDQ1NjI2MQ0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://tincon.org/event/hamburg25
* Dienstag, 30.09.2025, 10:00-11:30, online: **Mini-Barcamp zu Open Data** <a title='Kalendereintrag Mini-Barcamp zu Open Data' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vTWluaS1CYXJjYW1wIHp1IE9wZW4gRGF0YS8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI1MTAwNFQxMjE1MDJaDQpEVFNUQVJUOjIwMjUwOTMwVDEwMDAwMA0KRFRFTkQ6MjAyNTA5MzBUMTEzMDAwDQpTVU1NQVJZOk1pbmktQmFyY2FtcCB6dSBPcGVuIERhdGENCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vd3d3LmJlcnRlbHNtYW5uLXN0aWZ0dW5nLmRlL2RlL3Vuc2VyZS1wcm9qZWt0ZS9kYXRlbi1mdWVyLWRpZS1nZXNlbGxzY2hhZnQvcHJvamVrdG5hY2hyaWNodGVuL2Rhcy1rb21tdW5hbGUtb3Blbi1kYXRhLW5ldHp3ZXJrdHJlZmZlbiNjMjY3OTk0DQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOm9ubGluZQ0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://www.bertelsmann-stiftung.de/de/unsere-projekte/daten-fuer-die-gesellschaft/projektnachrichten/das-kommunale-open-data-netzwerktreffen#c267994
* Dienstag, 30.09.2025, 10:00, bis Donnerstag, 02.10.2025, 16:15, hub27 | Messegelände Berlin, Jafféstraße 2 (Tor 25), 14055 Berlin und auch online: **Smart Country Convention (SCCON25)** <a title='Kalendereintrag Smart Country Convention (SCCON25)' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vU21hcnQgQ291bnRyeSBDb252ZW50aW9uIChTQ0NPTjI1KS8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI1MTAwNFQxMjE1MDJaDQpEVFNUQVJUOjIwMjUwOTMwVDEwMDAwMA0KRFRFTkQ6MjAyNTEwMDJUMTYxNTAwDQpTVU1NQVJZOlNtYXJ0IENvdW50cnkgQ29udmVudGlvbiAoU0NDT04yNSkNCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vd3d3LnNtYXJ0Y291bnRyeS5iZXJsaW4vZGUNCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046aHViMjcgfCBNZXNzZWdlbMOkbmRlIEJlcmxpblwsIEphZmbDqXN0cmHDn2UgMiAoVG9yIDI1KVwsIDE0MDU1IEJlcmxpbiB1bmQgYXVjaCBvbmxpbmUNCkdFTzo1Mi41MDI5MzAwMjMwNzM5ODY7MTMuMjY3NTcwMzU2NzMzNjcxDQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://www.smartcountry.berlin/de
* Dienstag, 30.09.2025, 14:00-15:30, online: **Wissenschaftliche Datenbanken im Wandel – Qualität, Offenheit & KI im Fokus** <a title='Kalendereintrag Wissenschaftliche Datenbanken im Wandel – Qualität, Offenheit & KI im Fokus' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vV2lzc2Vuc2NoYWZ0bGljaGUgRGF0ZW5iYW5rZW4gaW0gV2FuZGVsIOKAkyBRdWFsaXTDpHRcLCBPZmZlbmhlaXQgJiBLSSBpbSBGb2t1cy8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI1MTAwNFQxMjE1MDJaDQpEVFNUQVJUOjIwMjUwOTMwVDE0MDAwMA0KRFRFTkQ6MjAyNTA5MzBUMTUzMDAwDQpTVU1NQVJZOldpc3NlbnNjaGFmdGxpY2hlIERhdGVuYmFua2VuIGltIFdhbmRlbCDigJMgUXVhbGl0w6R0XCwgT2ZmZW5oZWl0ICYgS0kgaW0gRm9rdXMNCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vd3d3LnRpYi5ldS9kZS90ZXJtaW5lL2RldGFpbC93aXNzZW5zY2hhZnRsaWNoZS1kYXRlbmJhbmtlbi1pbS13YW5kZWwtcXVhbGl0YWV0LW9mZmVuaGVpdC1raS1pbS1mb2t1cw0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpvbmxpbmUNCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://www.tib.eu/de/termine/detail/wissenschaftliche-datenbanken-im-wandel-qualitaet-offenheit-ki-im-fokus
* Regelmäßige OKLab-Treffen
  * Berlin: jeden zweiten oder dritten Montag im Monat, 19:00-22:00, WikiBär, Köpenicker Straße 45, 10179 Berlin: **Code for Berlin** <a title='Kalendereintrag Code for Berlin' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vQ29kZSBmb3IgQmVybGluLy9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjUwNjI5VDExMjkyM1oNCkRUU1RBUlQ6MjAyNTA3MjFUMTkwMDAwDQpEVEVORDoyMDI1MDcyMVQyMjAwMDANClNVTU1BUlk6Q29kZSBmb3IgQmVybGluDQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL3d3dy5tZWV0dXAuY29tL29rLWxhYi1iZXJsaW4NCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046V2lraULDpHJcLCBLw7ZwZW5pY2tlciBTdHJhw59lIDQ1XCwgMTAxNzkgQmVybGluDQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
    * https://www.meetup.com/ok-lab-berlin
  * Bielefeld: jeden Donnerstag, 18:30-21:00, Innovation Office, Alter Markt 13, 33602 Bielefeld: **Code for Bielefeld** <a title='Kalendereintrag Code for Bielefeld' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vQ29kZSBmb3IgQmllbGVmZWxkLy9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjUwNjI5VDExMjkyM1oNCkRUU1RBUlQ6MjAyNTA3MDNUMTgzMDAwDQpEVEVORDoyMDI1MDcwM1QyMTAwMDANClNVTU1BUlk6Q29kZSBmb3IgQmllbGVmZWxkDQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL2NvZGVmb3IuZGUvYmllbGVmZWxkLw0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpJbm5vdmF0aW9uIE9mZmljZVwsIEFsdGVyIE1hcmt0IDEzXCwgMzM2MDIgQmllbGVmZWxkDQpHRU86NTIuMDIwODM0MzE1MDU2ODQ1OzguNTMyNDMyMTIxNTMxNjI3DQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
    * https://codefor.de/bielefeld/
  * Flensburg: jeden Mittwoch, 18:00-21:00, Aktivitetshuset, Norderstraße 49, 24939 Flensburg: **OKLab Flensburg** <a title='Kalendereintrag OKLab Flensburg' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vT0tMYWIgRmxlbnNidXJnLy9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjUwNjI5VDExMjkyM1oNCkRUU1RBUlQ6MjAyNTA3MDJUMTgwMDAwDQpEVEVORDoyMDI1MDcwMlQyMTAwMDANClNVTU1BUlk6T0tMYWIgRmxlbnNidXJnDQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL2NvZGVmb3IuZGUvZmxlbnNidXJnLw0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpBa3Rpdml0ZXRzaHVzZXRcLCBOb3JkZXJzdHJhw59lIDQ5XCwgMjQ5MzkgRmxlbnNidXJnDQpHRU86NTQuNzkxNTkxNzg1OTg1ODQ0OzkuNDMxMjQ5NjAxNjA5NjY1DQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
    * https://codefor.de/flensburg/
  * Karlsruhe, jeden dritten Montag im Monat, 19:00-21:00, Impact Hub, Kaiserstr 97, 76131 Karlsruhe: **Code for Karlsruhe** <a title='Kalendereintrag Code for Karlsruhe' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vQ29kZSBmb3IgS2FybHNydWhlLy9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjUwNjI5VDExMjkyM1oNCkRUU1RBUlQ6MjAyNTA3MjFUMTkwMDAwDQpEVEVORDoyMDI1MDcyMVQyMTAwMDANClNVTU1BUlk6Q29kZSBmb3IgS2FybHNydWhlDQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL29rLWxhYi1rYXJsc3J1aGUuZGUvbWl0bWFjaGVuLyNzY2hlZHVsZQ0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpJbXBhY3QgSHViXCwgS2Fpc2Vyc3RyIDk3XCwgNzYxMzEgS2FybHNydWhlDQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
    * https://ok-lab-karlsruhe.de/mitmachen/#schedule
  * Köln: jeden ersten Montag im Monat, 19:00-22:00, Wikipedia Lokal K, Hackländerstr 2, 50825 Köln: **Code for Cologne** <a title='Kalendereintrag Code for Cologne' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vQ29kZSBmb3IgQ29sb2duZS8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI1MDYyOVQxMTI5MjNaDQpEVFNUQVJUOjIwMjUwNzA3VDE5MDAwMA0KRFRFTkQ6MjAyNTA3MDdUMjIwMDAwDQpTVU1NQVJZOkNvZGUgZm9yIENvbG9nbmUNCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vd3d3Lm1lZXR1cC5jb20vZGUtREUvY29kZWZvcmNvbG9nbmUvDQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOldpa2lwZWRpYSBMb2thbCBLXCwgSGFja2zDpG5kZXJzdHIgMlwsIDUwODI1IEvDtmxuDQpHRU86NTAuOTU1NjAxMTs2LjkxMDM5MQ0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
    * https://www.meetup.com/de-DE/codeforcologne/
  * Leipzig: jeden. Mittwoch, 19:00-22:00, Basislager Coworking Leipzig, Peterssteinweg 14, 04107 Leipzig: **OKLab Leipzig** <a title='Kalendereintrag OKLab Leipzig' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vT0tMYWIgTGVpcHppZy8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI1MDYyOVQxMTI5MjNaDQpEVFNUQVJUOjIwMjUwNzAyVDE5MDAwMA0KRFRFTkQ6MjAyNTA3MDJUMjIwMDAwDQpTVU1NQVJZOk9LTGFiIExlaXB6aWcNCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vd3d3Lm1lZXR1cC5jb20vZGUtREUvb2tsYWItbGVpcHppZy8NCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046QmFzaXNsYWdlciBDb3dvcmtpbmcgTGVpcHppZ1wsIFBldGVyc3N0ZWlud2VnIDE0XCwgMDQxMDcgTGVpcHppZw0KR0VPOjUxLjMzMjA3NDQ7MTIuMzczNTM5OQ0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
    * https://www.meetup.com/de-DE/oklab-leipzig/
  * Münster: jeden Dienstag, 19:30-22:00, Cafe SpecOps network, Aegidiimarkt 5, 48155 Münster: **Code for Münster** <a title='Kalendereintrag Code for Münster' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vQ29kZSBmb3IgTcO8bnN0ZXIvL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNTA2MjlUMTEyOTIzWg0KRFRTVEFSVDoyMDI1MDcwMVQxOTMwMDANCkRURU5EOjIwMjUwNzAxVDIyMDAwMA0KU1VNTUFSWTpDb2RlIGZvciBNw7xuc3Rlcg0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly93d3cubWVldHVwLmNvbS9kZS1ERS9jb2RlLWZvci1tdW5zdGVyLw0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpDYWZlIFNwZWNPcHMgbmV0d29ya1wsIEFlZ2lkaWltYXJrdCA1XCwgNDgxNTUgTcO8bnN0ZXINCkdFTzo1MS45NjA3MTYyOzcuNjIyNDczMg0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
    * https://www.meetup.com/de-DE/code-for-munster/
  * Niederrhein: jeden Dienstag, 20:00-22:00, online: **Code for Niederrhein** <a title='Kalendereintrag Code for Niederrhein' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vQ29kZSBmb3IgTmllZGVycmhlaW4vL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNTA2MjlUMTEyOTIzWg0KRFRTVEFSVDoyMDI1MDcwMVQyMDAwMDANCkRURU5EOjIwMjUwNzAxVDIyMDAwMA0KU1VNTUFSWTpDb2RlIGZvciBOaWVkZXJyaGVpbg0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly93d3cuY29kZWZvcm5pZWRlcnJoZWluLmRlL3Rlcm1pbmUvDQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOm9ubGluZQ0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
    * https://www.codeforniederrhein.de/termine/
  * temporärhaus (Neu-Ulm): jeden zweiten un vierten Mittwoch im Monat, 19:30-22:00, temporärhaus, Augsburgerstr 23-25, 89231 Neu-Ulm: **temporärhaus: Open Data Monday** <a title='Kalendereintrag temporärhaus: Open Data Monday' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vdGVtcG9yw6RyaGF1czogT3BlbiBEYXRhIE1vbmRheS8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI1MDYyOVQxMTI5MjNaDQpEVFNUQVJUOjIwMjUwNzE2VDE5MzAwMA0KRFRFTkQ6MjAyNTA3MTZUMjIwMDAwDQpTVU1NQVJZOnRlbXBvcsOkcmhhdXM6IE9wZW4gRGF0YSBNb25kYXkNCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vdGVtcG9yYWVyaGF1cy5kZS90ZXJtaW5lLXVuZC1vZWZmbnVuZ3N6ZWl0ZW4vDQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOnRlbXBvcsOkcmhhdXNcLCBBdWdzYnVyZ2Vyc3RyIDIzLTI1XCwgODkyMzEgTmV1LVVsbQ0KR0VPOjUyLjUwMjY3NzA2MjkzNjA3OzEzLjQzOTI1MDM0ODcyMTU0NA0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
    * https://temporaerhaus.de/termine-und-oeffnungszeiten/
