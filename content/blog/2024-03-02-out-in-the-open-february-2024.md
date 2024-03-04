---
title: "Recoding Germany – Out in the Open Februar 2024"
author: "Jörg Reichert (Code for Leipzig), Tim Fangmeyer (Code for Berlin), et al."
date: '2024-03-02T08:00:00+02:00'
excerpt: Monatlich erscheinender Überblick über Entwicklungen in der Open Data und Civic Tech Szene
topic: community
images:
- imgname: out-in-the-open-2024-02-header.jpg
  attribution: <a href="https://unsplash.com/de/fotos/weisse-und-rote-liebes-neonlicht-beschilderung-liWlhUFWp2w">Foto</a> von <a href="https://unsplash.com/de/@agk42">Alex Knight</a> auf <a href="https://unsplash.com/">Unsplash</a>
og_image: out-in-the-open-2024-02-header.jpg
type: blog
---

## Kaufen Kaufen Kaufen
Das Anfang Januar in Kraft getretene europäische Datengesetz formuliert Bedingungen für den Zugang, Austausch und Nutzung von in der EU generierten Daten für alle Wirtschaftszweige. Dabei konstruiert es aber eine Art Eigentumsrecht an Fakten, stellt Friederike von Franqué in ihrem [Artikel auf Netzpolitik](https://netzpolitik.org/2024/oeffentliches-geld-oeffentliches-gut-wie-die-eu-von-geodaten-profitieren-kann/) fest, und fordert stattdessen freiere Lizenzen für nicht-personenbezogene Daten, und damit die Prinzipien der 2019 erlassenen Open-Data-Richtlinie konsequent fortführen.

[Bianca Kastl erinnert in diesem Zusammenhang daran](https://mastodon.social/@bkastl/111891039241153431), dass beispielsweise die Geodaten von Postleitzahlen, Straßen und Hausnummern, die die einzelne Kommunen eigentlich auch alle selbst erheben und als Open Data bereitstellen, bei der [Deutschen Post](https://datafactory.postdirekt.de/datafactory-shop/summary) als auch bei Firmen wie [geodaten-deutschland.de](https://www.geodaten-deutschland.de/index.php) gesammelt zu stattlichen Preisen käuflich erworben werden können, bei der Post sogar mit einer Mindestvertragslaufzeit von 2 Jahren, die sich automatisch verlängert, wenn man nicht rechtzeitig kündigt. Ermöglicht werden solche Geschäftsmodelle nur durch den grassierenden Daten-Föderalismus in Deutschland.

Daher hier die unbedingte Empfehlung,  [Recoding America: Why Government Is Failing in the Digital Age and How We Can Do Better](https://us.macmillan.com/books/9781250266774/recodingamerica), geschrieben von der Code for America-Gründerin Jennifer Pahlka, zu lesen. Das Buch ist ein Aufruf, die starre bürokratische Verwaltungskultur zu rekodieren. Dabei brauche es nicht einmal besonders viel Geld oder neue Technologien wie KI, sondern besonders ein Umdenken in der Verwaltung und eine Mitdenken des Digitalen in allen von Anfang an. Zwar bezieht sich das Buch besonders auf die amerikanische Verwaltung, kann allerdings auch Anreize für den deutschen Apparat bieten.

## Politik
Nur wenn man stetig die Gelder für die Verwaltungsdigitalisierung kürzt, wird das natürlich nichts. Wie [Netzpolitik](https://netzpolitik.org/2024/bundeshaushalt-2024-wenig-mittel-fuer-die-verwaltungsdigitalisierung/) aufführt, werden zum Beispiel dem Zentrum für digitale Souveränität (ZenDiS) statt dem ursprünglichen 48 Millionen Euro nur noch 25 Millionen Euro zur Verfügung gestellt. Damit werden die Bemühungen, sich aus der Abhängigkeit von großen Software-Herstellern zu lösen und Open-Source-Software einzusetzen, im Sinne einer angeblich angestrebten Digitalen Souveränität zur reinen Makulatur.

Dafür gibt sich Deutschland erstmals eine "Internationale Digitalstrategie", wie bei [heise](https://www.heise.de/news/Deutschland-gibt-sich-erstmals-eine-Internationale-Digitalstrategie-9621955.html) nachzulesen ist. Im entsprechenden Strategiepapier möchte man dabei auch Interessengruppen, wie Mittelstand und Zivilgesellschaft, an den internationalen technischen Standardisierungsverfahren beteiligen.

## Offene Daten
Greenpeace bringt ein [eigenes Open Data Portal an den Start](https://daten.greenpeace.de/dataset/). Auf dem Datenportal möchte die NGO in Zukunft eigene wissenschaftliche Messdaten sowie Rohdaten zu Studien veröffentlichen. Zum Start finden sich neun Datensätze auf der Plattform, beispielsweise über das Fischsterben in der Oder und Strahlenmessungen in Tschornobyl 2022.

Die meisten Vorschriften des [Gesetzes über digitale Dienste](https://de.wikipedia.org/wiki/Gesetz_%C3%BCber_digitale_Dienste) (Digital Services Act (DSA)) sind jetzt seit Mitte Februar anwendbar. Um die Entscheidungen der Content-Moderation von Online-Plattform in Echtzeit nachvollziehbar zu machen, bietet nun die [DSA Transparency Database](https://transparency.dsa.ec.europa.eu) diverse Mechanismen, um eben auf solche Informationen zuzugreifen, sie zu analysieren (in einem Dashboard) und auch herunterzuladen.

Das statistische Bundesamt bietet seit Neustem eine [experimentelle Konjunkturstatistik](https://destatis.de/scandat) auf Basis der Supermarkt-Scannerkassen-Daten. So lassen sich wochenweise die Lebensmittel-Konsumgewohnheit nachvollziehen. Die Daten werden jeden zweiten Freitag aktualisiert. Der Nutzer wahlatlas hat zu Demonstrationszwecken ein [Notebook](https://github.com/wahlatlas/playground/blob/main/scannerdaten.ipynb) auf Github geteilt, dass zeigt, wie man die Daten auswerten kann.

[Dirk Holtwick dankt auf Mastodon](https://mastodon.social/@holtwick/111846583016787604)
dem CCC Essen, dass man jetzt die [Artikel des Grundgesetzes als einzelne Markdown-Dateien](https://github.com/c3e/grundgesetz) ebenfalls auf Github findet. Das Besondere dabei: in der Commit-Historie entsprechen die Namen der "Committer" und die Zeitpunkte der "Commits" den damals handelnden Bundespräsidenten und den tatsächlichen historischen Gesetzesänderungsdaten.

Wer sich für die Abgeordneten deutscher Landesparlamente und -regierungen interesiert, findet in der neuen öffentlichen Datenbank [StatePol](https://statepol.github.io/Database/) detaillierte Informationen, die von 1990 bis 2020 reichen.

## Offene Bibliografiedaten
Teil wissenschaftlicher Publikationsarbeit ist das Finden und das systematische Auswerten bereits vorhandener Forschungsliteratur. Mit [alexandria3k](https://github.com/dspinellis/alexandria3k) ist eine Python-Bibliothek (die aber auch alternativ als fertiges Kommandozeilen-Werzeug nutzbar ist), mit der man performante Abfragen auf den Metadatensätzen von Publikationen ausführen kann. Der größte Datensatz stammt dabei von [Crossref](https://github.com/CrossRef), der die Metadaten von etwa 134 Millionen Veröffentlichungen (1 Terrabyte Daten unkomprimiert, 157 Gigabyte komprimiert), 60 Millionen davon mit vollständigen Quellenverzeichnisdaten. Weitere Datensätze stammen aus der Biomedizin-Literaturverzeichnis-Datenbank [PubMed](https://pubmed.ncbi.nlm.nih.gov), die 36 Millionen Einträge hat.

In Frankreich dagegen [startet das Forschungsministerium eine Kooperation](https://www.ouvrirlascience.fr/french-ministry-of-higher-education-and-research-partners-with-openalex-to-develop-a-fully-open-bibliographic-tool/) mit [OpenAlex](https://openalex.org), ebenfalls eine offene Bibliografie-Datenbank, die Ende 2023 250 Millionen Einträge von 90 Millionen Autoren enthielt. Die Datenbank nutzt dabei offene Daten aus Crossref, RoR, ORCID, DOAJ und Wikidata, um einen Wissensgraph aus Publikationen, Autoren, Zugehörigkeiten und Förderungen aufzubauen.

## Tools für Offene Daten
* Frictionless Data specs v2
  https://fosstodon.org/@FosdemResearch/111867873808915517
  * https://frictionlessdata.io/blog/2023/11/15/frictionless-specs-update/
  * https://specs.frictionlessdata.io
  * https://datapackage.org

## Offene Standards
* C2PA: OpenAI integriert Metadaten in generierte Bilder
  Bilder von ChatGPT und Dall-E 3 nutzen künftig C2PA. Der offene Standard erklärt in den Metadaten, woher ein Bild stammt.
  https://www.heise.de/news/OpenAI-integriert-eine-Art-Wasserzeichen-in-generierte-Bilder-9622526.html
  * https://c2pa.org

## Hochwertige Datensätze
* Die Fragen und Antworten zu den Hochwertigen Datensätzen sind endlich da
  https://www.govdata.de/web/guest/hochwertige-datensaetze  
  via https://norden.social/@MisterOpenData/111939741964050788
  und https://social.bund.de/@opendata/111942833060625486

## Visualisierungen
* „Der hier dargestellte Kaitz-Index gibt den prozentualen Anteil des Mindestlohns zum mittleren Bruttostundenverdienst (Median) bei Vollzeitbeschäftigten an. Würde der mittlere Bruttostundenverdienst 24 Euro betragen, hätte die Region (bei einem #Mindestlohn von 12 Euro) einen Kaitz-Index von 50 %.“
  https://www.destatis.de/DE/Themen/Arbeit/Verdienste/Mindestloehne/karte-mindestloehne.html
  via https://norden.social/@wahlatlas/111895502638135880
* "Ever wanted to do spatial clustering of orign-destination (OD) data? Well you may want to now! University of Leeds Institute for Transport Studies (ITS) and Alan Turing Institute PhD student Hussein Mahfouz has created this early-stage visualisation of spatial clustering of these zone-zone flows 🏗️  Case study of #Leeds. Looks beautiful AND useful 🎉"
  https://fosstodon.org/@robinlovelace/111901552291641451
* My monthly #Arctic temperature graphics have been updated for January 2024, which was fairly unremarkable for a change
  https://zacklabe.com/arctic-temperatures/
  via https://fediscience.org/@ZLabe/111907632010040037
  * 2023 compilation: https://zacklabe.com/blog-archive-2023/
* Den Aushangfahrplan besser und schöner gestalten – schöner Thread:
  https://urbanists.social/@dominicstucki/111912547580231264
  via https://social.tchncs.de/@wortfeld/111912878224866893
* NIAM Aufzeichnungen online:
  https://news-infographics-analytics-maps.media/2024.html

## Mobilität
* I have never considered the design of #DB 's official #ICE and #IC network map convincing. This was my motivation to create my own 🇩🇪 long-distance rail map a few years ago. It focuses more on systematic connections and their frequencies for better understanding rather than just showing every line.
  The 2024 map is finally online 🥳 
  https://larstransportmaps.com/2024/01/23/germany-2024/
  via https://mastodon.social/@larstransportworld/111880759755946231
* Ob auf Europa-, Bundes- oder Landesebene: Offene Mobilitätsdaten spielen beim Thema #Mobilität der Zukunft eine große Rolle – gerade bei der #Mobilitätswende hin zu mehr Nachhaltigkeit. #ÖPNV #Digitalisierung #OpenData
  Wie das alles zusammenhängt, erklärt euch die Nahverkehrsgesellschaft #BadenWürttemberg (NVBW)
  https://www.mobidata-bw.de/blog/plattformen
  via https://bawü.social/@bwegtBW/111925026183370288
* FOSDEM 2024 and Open Public Transport Routing
  https://www.volkerkrause.eu/2024/02/10/fosdem-2024-open-public-transport-routing.html
* Transitous
  A community-run provider-neutral international public transport routing service.
  https://github.com/public-transport/transitous
* Open Rail: Recordings of the FOSDEM Railways and Open Transport devroom available
  https://openrailassociation.org/news/2024/recordings-of-the-fosdem-railways-and-open-transport-devroom-available/
* Network Generation Hackathon
  reproducible transport network generation, processing and modelling with open source software 
  https://github.com/Robinlovelace/netgenhack/
  https://github.com/Urban-Analytics-Technology-Platform/od2net
  https://fosstodon.org/@robinlovelace/112010148879803498
* Eine Daten-Genossenschaft testet aktuell, was es dazu braucht, um »ethisch« Daten zu sammeln und Mobilität wirklich nach den Bedürftnissen der Menschen auszurichten. 🚲🚆 Spannendes Leuchtturm-Projekt aus der Schweiz, das demnächst auch nach Deutschland kommt 💡
  https://social.perspective-daily.de/users/desiree/statuses/112003068195386470
  via https://social.perspective-daily.de/@desiree/112003068195386470
* Echtzeitdaten: Die Deutsche Bahn weiß nicht, wo ihre Züge stecken
Echtzeitdaten zu Zugverspätungen werden teilweise immer noch nicht zwischen europäischen Nachbarländern ausgetauscht. Dabei gäbe es eine ganz einfache Lösung.
  https://www.heise.de/meinung/Echtzeitdaten-Die-Deutsche-Bahn-weiss-nicht-wo-ihre-Zuege-stecken-9636972.html

## Karten
* 2024: announcing the year of the OpenStreetMap vector maps
  https://blog.openstreetmap.org/2024/02/11/2024-announcing-the-year-of-the-openstreetmap-vector-maps/
* https://openchargemap.org/
  via https://chaos.social/@avanc/111919461516553481

## Open Source
* A good ladder in usage of #OpenSource software by the City of #Munich: Use / Improve / Publish.
  https://opensource.muenchen.de
  via https://maly.io/@MattiSG/111868220389714302
* Digitale #Tools zur Untersuchung von #SocialMedia Beiträgen und anderen frei zugänglichen #Daten können eine wichtige Rolle bei der Aufdeckung von #Menschenrechtsverletzungen oder #Umweltskandalen spielen 💻 
  Das Berkeley-Protokoll setzt internationale Standards für digitale #OpenSource Untersuchungen.
  https://reset.org/das-berkeley-protokoll-setzt-internationale-standards-fuer-digitale-open-source-untersuchungen/
  via https://mastodon.social/@reset_org/111879192476797812
* Digitalarchäologie mit Open Source:
  https://blog.jgc.org/2024/02/the-original-www-proposal-is-word-for.html
  via https://social.heise.de/@dborch/111934732639995171
* Harvard-Studien belegen die Vorteile von Open Source Software für die Gesamtwirtschaft
  https://osb-alliance.de/featured/harvard-studien-belegen-die-vorteile-von-open-source-software-fuer-die-gesamtwirtschaft
  * siehe auch https://www.heise.de/news/Studie-Open-Source-traegt-global-8-8-Milliarden-Dollar-zur-Wirtschaftskraft-bei-9627402.html
* Audacity gets AI transcription and noise suppression courtesy of Intel OpenVINO plug-ins
  https://www.tomshardware.com/tech-industry/artificial-intelligence/audacity-gets-ai-transcription-and-noise-suppression-courtesy-of-intel-openvino-plug-ins
  via https://det.social/@HxxxKxxx/111937719797707957
* Yeah! Das neue #Onlinezugangsgesetz legt fest, dass die Bundesbehörden zukünftig vorrangig #OpenSource Software beschaffen und auf offene Standards setzen sollen. Nur so kann eine schnelle, effiziente und nachhaltige Verwaltungsdigitalisierung klappen! 🖥️ #OZG
  https://osb-alliance.de/publikationen/statements/vorrang-fuer-open-source-im-onlinezugangs-aenderungsgesetz


## Informationsfreiheit
* Die Porsche-Mails, die das Verkehrsministerium geheim halten wollte
  https://www.abgeordnetenwatch.de/recherchen/informationsfreiheit/die-porsche-mails-die-das-verkehrsministerium-geheim-halten-wollte
  https://fragdenstaat.de/anfrage/kontakte-zur-porsche-ag/
* Neues Lobbyregister: Ein guter Tag für Transparenz und Demokratie
  https://www.lobbycontrol.de/pressemitteilung/neues-lobbyregister-ein-guter-tag-fuer-transparenz-und-demokratie-114134/

### Aus der Community
* Temporaerhaus: Der Sprudelfaktor – Monatsbericht Januar 2024
  https://temporaerhaus.de/der-sprudelfaktor-monatsbericht-januar-2024/

### Und sonst so
* What happens when you click "I Agree" without reading the terms and conditions? From social media apps to shopping websites, our data is being collected every second of the day to offer us personalized ads or even track our mood based on our shopping habits
  https://theglassroom.org/en/capsule-1-0/exhibits/data-day/
  via https://mastodon.cc/@info_activism/112008488575046604

## Veranstaltungen
* Mittwoch, 06.03.2024, 15:00-17:00, Town Hall Europe, Brüssel: **Unlocking Knowledge Conference**
  * https://communia-association.org/event/unlocking-knowledge-conference/
* Mittwoch, 06.03.2024, bis Donnerstag, 07.03.2024, Wien: **Open Data Days Vienna 2024**
  * https://www.data.gv.at/2024/01/25/odd24/
* Mittwoch, 13.03.2024, bis Freitag, 15.03.2024, Online: **Unwrapped: Konferenz für Datawrapper-Nutzer**
  * https://www.datawrapper.de/unwrapped
* Donnerstag, 14.03.2024, bis Freitag, 15.03.2024, Zollikofen, Schweiz: **GovTech Hackathon 2024**
  * https://opendata.ch/de/events/govtech-hackathon-2024/
* Samstag, 16.03.2024, bis Sonntag, 17.03.2024, Chemnitz: **Chemnitzer Linux Tage**
  * https://chemnitzer.linux-tage.de/2024/de/
  * https://chemnitzer.linux-tage.de/2024/de/presse/mitteilungen/pm01
* Mittwoch, 20.03.2024, bis Samstag, 23.03.2024, Hamburg: **FOSSGIS 2024**
  * https://www.fossgis.de/konferenz/
* Freitag, 29.03.2024, bis Montag, 01.04.2024, Regensburg: **Easterhegg 2024**
  * https://eh21.easterhegg.eu
