---
title: "Solastalgie – Out in the Open August 2024"
author: "Jörg Reichert (Code for Leipzig)"
date: '2024-09-09T08:00:00+02:00'
excerpt: Monatlich erscheinender Überblick über Entwicklungen in der Open Data und Civic Tech Szene
topic: community
images:
- imgname: out-in-the-open-2024-08-header.jpg
  attribution: Eigene Aufnahme (31.07.2024 in Darmstadt)
og_image: out-in-the-open-2024-08-header.jpg
type: blog
---

## Linked Open Data im Praxistest
Anderthalb Jahre haben mehrere Einheiten der Züricher Verwaltung Erfahrungen mit Linked Open Data (LOD) gesammelt. Die Ergebnisse diskutieren Rebekka Plüss (Staatsarchiv) und Laure Stadler (Fach- und Koordinationsstelle OGD des Statistischen Amts) in einer Podcastfolge, die neben dem [Abschlussbericht](https://www.zh.ch/content/dam/zhweb/bilder-dokumente/themen/politik-staat/offene-behoerdendaten-nutzen/Abschlussbericht%20LOD%20Erprobung_public.pdf) auch [hier mit verlinkt ist](https://www.zh.ch/de/news-uebersicht/mitteilungen/2024/politik-staat/statistik/linked-open-data-auf-dem-pruefstand.html). So wurde festgestellt, dass die Publikation von Linked Open Data grundsätzlich machbar ist, und diese so veröffentlichten Daten auch genutzt werden, allerdings ist der Aufbereitungsaufwand in vielen Fällen höher als der Bedarf, so dass die OGD vorerst auch keine dezidierte Linked-Data-Infrastruktur zur Verfügung stellen wird. Ein Problem der kritischen Masse, denn Linked Data ist immer noch ein Nischenthema. Dadurch gibt es zu wenige vordefinierte Ontologien, die als Anknüpfungspunkte für die eigene Ontologie dienen können. Sowohl für diejenigen, die die Daten als Linked Open Data veröffentlichen wollen als auch für jene, die diese Daten später nutzen wollen, ist die Lernkurve sehr steil. Das liegt auch an der ungenügenden Werkzeugunterstützung. Die vorhandenen Tools abstrahieren zu wenig von den Grundlagen, unterstützen die Nutzer zu wenig durch geeignete Usability, (Teil-)Automatisierung und intelligenten Vorschlägen bei der Dateneingabe (bzw. auch sinnvolle Verknüpfung auf Konzepte bestehender Ontologien). So fällt es schwer, den Kreis an Linked-Data-Interessierten zu erweitern, wenn alles noch so mühsam und nicht selbsterklärend ist. Der Wert von Linked Open Data wurde aber prinzipiell erkannt. So hofft nun man nun auf den Prototypen der Bundeskanzlei, mit dem die Haltung von Stammdaten als Linked Open Data getestet werden soll. In dessen Rahmen ist auch sowohl der weitere Aufbau  von LOD-Wissen und eine Speicher-Infrastruktur geplant. Je mehr Verwaltungen Linked Open Data veröffentlichen, desto größer die Motivation auch für andere Verwaltungen diese Datentechnologie ebenfalls bei sich zu adaptieren. Als Inspiration kann der bei der Evaluation entstandene Datensatz über die Zürcher Ehedaten der frühen Neuzeit dienen, der über [Github abrufbar](https://github.com/stazh/sw-ehedaten) ist. 

In einer [Hands-On-Session](https://wikimania.eventyay.com/2024/talk/DVA9J8/) wurde auf der Wikimania in Katowice mit dem Open Data Editor, ein Werkzeug vorgestellt, das das Leben zu mindestens von Open Data Publishern erleichtern soll. Mit diesem können Techniker aber eben auch Nicht-Techniker Datensätze erstellen ohne dabei eine einzige Zeile Code schreiben zu müssen. Die so erzeugten Datensätze folgen dennoch den FAIR-Prinzipien, sind also qualitativ hochwertig.

Für die potenziellen Nutzer von offenen Daten, speziell aus dem Forschungsbereich, schwebt Andrea Bertino ein verbessertes Vorschlagssystem bei der Suche vor. In seinem [Artikel](https://www.degruyter.com/document/doi/10.1515/bfp-2023-0059/html) aus der Zeitschrift "Bibliothek Forschung und Praxis" stellt er sich die Frage, wie das Konzept "[Serendipität](https://de.wikipedia.org/wiki/Serendipity)", also die "Gabe, unerwartete, zufällige oder glückliche Entdeckungen zu machen", auch bei der Suche in offenen Daten helfen kann. Viele Vorschlagsalgorithmen neigen zu Verzerrungen, wie z.B. dem [Confirmation Bias](https://de.wikipedia.org/wiki/Best%C3%A4tigungsfehler) oder dem [Popularity Bias](https://computersciencewiki.org/index.php/Popularity_bias). Speziell im Open Data Umfeld kommt noch der Metadata Quality Bias hinzu, also wenn Einträge nicht gefunden werden, weil bei ihnen Metadaten fehlen oder fehlerhaft sind, und dadurch keine relevanten Verbindungen zu anderen Daten hergestellt werden können. Einige der identifizierten Maßnahmen für mehr Serendipität sollen nun für den [Open Data Navigator](https://opendatanavigator.switch.ch/) Prototypen, eine Entdeckungsplattform für Open Data, die im Rahmen des Schweizer [Connectome](https://www.switch.ch/en/about/innovation)-Projekts entstanden ist, umgesetzt werden.

Metadatenqualitätsmanagement bleibt aber oftmals Handarbeit, wie auch in [diesem Fall](https://gruene.social/@mathias/112971972016366770), in dem Lizenzangaben der Datensätze bei der Aggregation verloren gegangen oder auch schon unbewusst ungünstig vom Ersteller gesetzt worden sind. Durch Nachfrage kam es zu einer zügigen Korrektur. Für vorbildlich bereitgestellte Daten gibt es dann auch [Kudos](https://gruene.social/@mathias/113033220932399361).

## Neue und kommende Open Data (Portale)
Das Bundesministerium für Ernährung und Landwirtschaft (BMEL) hat eine neue [Leitlinie](https://www.bmel.de/DE/ministerium/organisation/leitlinien-open-data.html) zur Veröffentlichungen von Open Data in seinem Geschäftsbereich [veröffentlicht](https://social.bund.de/@opendatabund/112994109899175186). Eine Open Data Plattform soll später unter open.ble.de erreichbar sein, bisher existiert mit [OpenAgrar](https://www.openagrar.de/content/index.xml) nur ein Publikationsserver.

Dagegen sind nun offene Daten von und aus Bamberg auf [bamberg.bydata.de](https://bamberg.bydata.de/?locale=de) [neuerdings](https://social.bund.de/@opendatabund/112999600220393312) einzusehen.

Für Verwaltungen, die sich noch mit dem Konzept [Open-By-Default](https://en.wikipedia.org/wiki/Open_by_default) schwer tun, gibt der [Musterdatenkatalog](https://www.bertelsmann-stiftung.de/de/unsere-projekte/smart-country/musterdatenkatalog) Orientierung, welche Daten überhaupt als Open Data veröffentlichen können bzw. welche gegenüber anderen Kommunen bei ihnen noch in der Veröffentlichung fehlen (oder noch nicht entsprechend mit einem Musterdatensatz annotiert sind). Mit der letzten [Aktualisierung](https://www.bertelsmann-stiftung.de/de/unsere-projekte/daten-fuer-die-gesellschaft/projektnachrichten/der-musterdatenkatalog-waechst-auf-rund-30000-datensaetze-an) des Katalogs Ende August sind 70 Kommunen und 5.000 weitere offene Datensätze hinzugekommen, so dass nun 30.000 Datensätze enthalten sind (ohne dass hierbei Quantität unbedingt für Qualität spricht).

Wenn man sich für die Standorte von Schwimmbädern interessiert, findet man für die Kategorie "Bad und Freibad" aktuell 69 Treffer im Musterdatenkatalog (teilweise Standorte, teilweise Besucherzahlen, teilweise als Teil aller Sportstätten, aber auch offensichtliche Fehltreffer mit "Tennisanlagen"). Für z.B. Kiel gab es hier allerdings keine Suchtreffer. Dafür wird man aber in der [Liste aller Schwimmbäder in Schleswig-Holstein](https://opendata.schleswig-holstein.de/dataset/schwimmbader-in-schleswig-holstein) (Stand 2023) fündig. Diese ist seit Ende August auf dem Open Data Portal des Bundeslandes zu finden.

[Seit 15.8.2024](https://www.zensus2022.de/DE/Aktuelles/Ankuendigung_Zensusdatenbank_Ergebnisse_Haushalte_Familien.html) sind in der [Zensusdatenbank](https://ergebnisse.zensus2022.de/datenbank/online/) die Ergebnisse zu Haushalten und Familien verfügbar, also Daten zu deren Größe und Struktur sowie zu deren Wohnsituation, z.B. die Nettokaltmiete oder die Wohnfläche.

Mit den Herausforderungen und modernen Lösungsansätzen, statistische Daten so zu anonymisieren, dass sie auch in Zeiten von Big Data keine Rückschlüsse auf Einzelpersonen zulassen, beschäftigt sich der Forschungsartikel ["Anonymization: The imperfect science of using data while preserving privacy"](https://www.science.org/doi/10.1126/sciadv.adn7053).

## KI Guidelines
[Handlungsempfehlungen](https://www.wikimedia.de/wp-content/uploads/2024/04/Handlungsempfehlungen_Offene_KI_fuer_alle.pdf) (pdf) für offen und gemeinwohlorientierte KI-Technologien im Bildungsbereich wurden innerhalb der Veranstaltungsreihe "Forum Offene KI in der Bildung" [erarbeitet](https://open-access.network/blog/warum-offenheit-bei-kuenstlicher-intelligenz-ki-fuer-bildung-und-wissenschaft-wichtig-ist). In ihnen werden Infrastruktur und Zugang zu bestehenden KI-Systemen beansprucht, mit der langfristigen Perspektive, solche System auch selbst hosten zu können. Des Weiteren wird im Sinne einer offenen Bildungspraxis gefordert, Lernressourcen zu KI unter offenen Lizenzen zu stellen und mittelfristig auch eine Veränderung der Lern- und Prüfungskultur anzustreben (also mehr kritisches Denken statt Auswendiglernen). 

Für die Züricher Verwaltung gehört zu einem verantwortungsvollen Einsatz von KI auch, transparent zu machen, wo KI überall zum Einsatz kommt und welche Techniken dazu verwendet werden. In einem sogenannten Automatische-Entscheidsysteme-(AES)-Verzeichnis sollen diese Informationen gepflegt werden. Eine Auswahl von KI-Projekten, die im Kanton Zürich in den Verwaltungen schon im Betrieb oder in Entwicklung sind, kann man [dieser Liste](https://www.zh.ch/de/politik-staat/kanton/kantonale-verwaltung/digitale-verwaltung/kuenstliche-intelligenz.html#965771141) entnehmen. Einige der Machine Learning Projekt [stehen auch Open Source auf Github](https://github.com/machinelearningZH).

## Retrieval-Augmented Generation (RAG)
Bei einem [Retrieval-Augmented Generation (RAG)](https://de.wikipedia.org/wiki/Retrieval_Augmented_Generation) System kann nicht nur auf die Trainingsdaten des Modells zurückgreifen sondern auf (externe) Datenquellen, wie Datenbanken oder indexierten Internetseiten. Tutorials für den geschickten Einsatz von RAGs [werden hier offen gesammelt](https://github.com/NirDiamant/RAG_Techniques). [kotaemon](https://github.com/Cinnamon/kotaemon) ist beispielsweise ein solches RAG-basiertes Open-Source-Werkzeug, um lokal mit seinen PDF-Dokumenten chatten zu können (und dabei auch noch eine bedienbare Nutzeroberfläche hat).

## Gefahren der KI
[Forschung hat inzwischen gezeigt](https://www.nytimes.com/interactive/2024/08/26/upshot/ai-synthetic-data.html), dass Generative KI, wenn man sie zu viel auf ihren eigenen Daten (versehentlich) trainieren lässt, deutlich schlechter wird bzw. die Diversität aus der realen Welt verloren geht. 

[AlgorithmWatch](https://algorithmwatch.org/) und [CASM Technology](https://www.casmtechnology.com/) haben [getestet](https://algorithmwatch.org/de/chatbots-bringen-noch-immer-viele-falschinformationen-in-umlauf/), ob KI-Chatbots Fragen zu den Landtagswahlen korrekt und unvoreingenommen beantworten. Fazit: für diesen Anwendungsfall sollte man solche Werkzeuge besser nicht nutzen. So waren in den Antworten Informationen teilweise veraltet, falsch zugeordnet oder gar frei erfunden und falsch. Zu selten wird angezeigt, dass für eine Frage keine oder zu wenige Informationen vorliegen und der Bot sie daher nicht beantworten kann. Problematisch auch, wenn in der Antwort die Quelle fehlen, Informationen zwar richtig aber unvollständig sind oder die Priorisierung innerhalb der Antwort nicht nachvollziehbar bzw. auch mit der realen Gewichtung nicht übereinstimmt. Wenn die Frage selbst schon falsche Informationen und Annahmen bzw. auch schon ein gewisses Framing enthält, wird das meist nicht durch den Bot korrigiert sondern eher bestätigt und verstärkt. Zu mindestens haben einige Chatbots generell schon die Beantwortung von Fragen zu Wahlen und anderen politischen Themen abgelehnt oder verlinken statt einer Antwort auf externe Quellen. 

Wie [heise berichtet](https://www.heise.de/news/ChatGPTs-Stromverbrauch-Zehnmal-mehr-als-bei-Google-9852126.html), hat eine [Untersuchung von BestBrokers](https://www.bestbrokers.com/forex-brokers/ais-power-demand-calculating-chatgpts-electricity-consumption-for-handling-over-78-billion-user-queries-every-year/) ergeben, dass eine einzige Anfrage an ChatGPT 2,9 Wattstunden verbraucht, das ist zehnmal mehr als die 0,3 Wattstunden einer einfachen Google-Suchanfrage. Der Strombedarf für das Training des LLMs ist dabei noch nicht mal einbezogen, man geht davon aus, dass dieses bei GPT-4 100 Tage gedauert hat und über 62 Tausend kWh verbraucht hat. Da davon auszugehen ist, dass aktuell der Strom hauptsächlich aus nicht regenerativen Quellen stammt, wird also neben der monetären Kohle auch viel fossile Kohle verbrannt. Die Umwelt freut sich.

## Citizens Science
Es gibt einen [Aufruf](https://citiobs.eu/demonstrations-open-call-for-alliances/) des von der EU-geförderten Projekts [CitiObs](https://citiobs.eu/) an bürgerwissenschaftliche Initiativen (Citizen Science), sich ihrer Allianz anzuschließen. In ihr bekommt man exklusiven Zugang zu nützlichen Werkzeugen, kostengünstigen Sensoren, Trainingsmaterial und Workshops. Vor allem aber soll es um die Vernetzung der einzelnen Initiativen gehen, auch mit lokalen FabLabs und Makerspaces. Im Fokus stehen Messungen von Umweltdaten wie Luftverschmutzung, Lärm, Hitze und Wasserqualität.

[Bürgerwissenschaftler waren es auch](https://science.nasa.gov/get-involved/citizen-science/nasa-citizen-scientists-spot-object-moving-1-million-miles-per-hour/), die ein Objekt im Weltall identifiziert haben, das sich mit einer Geschwindigkeit von 1.600.000 Kilometer pro Stunde durch die Milchstraße bewegt, [unter ihnen auch der Nürnberger Hobby-Astronom Martin Kabatnik](https://www.infranken.de/lk/nuernberg/nuernberger-nasa-astronom-cwise-j1249-milchstrasse-brauner-zwerg-art-5913271).

Um einen Crowd-Sourcing-Aufruf handelt es sich auch bei [#unsereFlüsse](https://www.swr.de/home/unsere-fluesse-formular-100.html), bei dem Bürger Daten zum Umfeld von Bächen zuliefern sollen.  

## Open Source
Von den 542 erteilten Software-Entwicklungsaufträge im Verkehrs- und Digitalministerium von Volker Wissing (FDP) [sind ganze drei Open Source](https://www.zdf.de/nachrichten/politik/digitalisierung-verwaltung-open-source-software-fdp-ampel-100.html). Dabei stand doch im Koalitionsvertrag "Entwicklungsaufträge werden in der Regel als Open Source beauftragt, die entsprechende Software wird grundsätzlich öffentlich gemacht". Insgesamt ist von der vom Bund beauftragten Software gerade mal drei Prozent quelloffen. Also weiterhin [Kein Public Money, public code beim Bund](https://mdb.anke.domscheit-berg.de/2024/08/ampel-ohne-public-money-public-code/). Auch in den Rechenzentren geht man immer noch Weg des geringsten Widerstands und [setzt weiterhin auf VMWare als Virtualisierungslösung](https://netzpolitik.org/2024/digital-unsouveraen-bundesregierung-legt-sich-an-broadcoms-kette/), auch wenn es seit der Übernahme der Firma durch Broadcom Ende 2023 zu drastischen Preissteigerungen kam, teilweise um das Zwölffache. Digitale Souveränität sieht anders aus, dabei gäbe es Alternativen, mit [OpenStack](https://www.openstack.org) auch im Open-Source-Bereich. 

Gleiches Spiel im Gesundheitswesen: von den 800 Millionen Euro zur Digitalisierung des öffentlichen Gesundheitsdiensts flossen die Gelder hauptsächlich in kurzfristige Lösungen, bei den man sich weiterhin "zu sehr von Microsoft abhängig" macht, entsprechend ausgeliefert ist man beim Aushandeln von Preisen und Lizenzgebühren. So wurde beispielsweise für ein und dieselbe eine Software für den Einsatz in allen landeseigenen Gesundheitsämtern wurden von den Bundesländern elfmal Fördermittel beantragt. So entstehen weiter Doppelstrukturen statt langfristiger, krisensicherer, interoperabler Systeme. 

Besser läuft für die Weiterentwicklung und der Betrieb der Enterprise Edition von [openDesk](https://gitlab.opencode.de/bmi/opendesk), eine [Open-Source-basierte Office & Collaboration Suite für die Verwaltung](https://www.golem.de/news/opendesk-vom-zendis-ausprobiert-ein-web-desktop-fuer-die-verwaltung-2404-184511.html): diese ist nun für [die nächsten zwei Jahre abgesichert](https://zendis.de/ressourcen/zendis-erteilt-zuschlag-fuer-rahmenvertrag-fuer-opendesk-enterprise-edition-und-saas-angebot). openDesk kann dann entweder im SaaS-Angebot [StackIT](https://www.stackit.de/de/), dem Cloud Provider der Schwarz Gruppe, betrieben oder auch selbst im eigenen Rechenzentrum laufen gelassen werden und dort aber auch professionellen Service und Support zu bekommen.

Für Kommunen gibt es mit der [Smart Village App](https://smart-village.app/) einen Open Source App Baukasten. Was diese App alles kann, hat Philipp Wilimzig in dieser [Folge vom eGovernment Podcast](https://egovernment-podcast.com/egov190-smart-village-app/) ausführlich besprochen.

Das Hohenzollern-Gymnasium in Sigmaringen, das Georg-Büchner-Gymnasium in Seelze und der Landkreis Harz [sind bisher gallische Dörfer](https://netzpolitik.org/2024/oeffentliches-geld-oeffentliches-gut-warum-schulen-und-freie-software-gut-zusammenpassen/), wenn es darum geht, alle Schulen mit Freien Betriebssystemen und Anwendungen auszustatten. Getreu dem Prinzip ["Technik folgt Pädagogik"](https://www.kreis-hz.de/de/aktuellesdetails/it-loesung-fuer-schulen-von-finnland-lernen-im-landkreis-harz-gestalten.html). Auch die ehrenamtliche Initiative [cyber4edu](https://cyber4edu.org/c4e/wiki/start) zeigt immer wieder, das für alle benötigten Arbeitswerkzeuge entsprechende freie Open-Source-Software verfügbar ist. Besser also in Personal und in den Aufbau digitaler Kompetenzen investieren, statt das Geld in Lizenzen zu versenken.

Mittels der Kräfte von Open Source und Open Hardware ist es [Thomas Megel](https://github.com/OpenScanEu) aus Halle (Saale) gelungen, [ein vollautomatisiertes Kopiergerät für 3D-Objekte zu bauen](https://openscan.eu/blogs/news/worlds-first-fully-automated-3d-copy-machine). Dazu wurden der Open-Hardware-3D Scanner [OpenScan Mini](https://openscan.eu/pages/openscan-mini) aus dem [OpenScan](https://openscan-org.github.io/OpenScan-Doc/#bugs-feature-requests)-Projekt und ein Prusa MK3S+ 3D-Drucker kombiniert und der Verarbeitungs-Pipeline [OpenScanCloud](https://openscan.eu/pages/openscancloud), die dank Spenden, weiterhin kostenlos angeboten werden kann, verbunden.

## Open Science
Im Open Economics Guide bietet die [ZBW](https://www.zbw.eu/de/) einen übersichtlichen Katalog von [über 100 aktuellen Open-Science-Tools an](https://openeconomics.zbw.eu/knowledgebase/open-science-tools/) an.
  
Im Rahmen des BMBF-geförderten Projekts [open-access.network 2](https://www.kim.uni-konstanz.de/das-kim/ueber-das-kim/projekte/aktuelle-projekte/open-access-network-2/) entstand die Handreichung ["Neue Formen der Open-Access-Finanzierung. Best Practices auf dem Weg zum Informationsbudget und zu alternativen Finanzierungsmodellen für Diamond Open Access"](https://zenodo.org/records/13271363). [Auf dem Blog](https://open-access.network/blog/openness-an-hochschulen-verankern-mit-dem-oer-policy-kit) des Projekts wird sich außerdem damit beschäftigt, wie man mit dem [OER-Policy Kit](https://github.com/twillo-lehre-teilen/OER-Policy-Kit) Hürden für das Konzept der Open Educational Resources (OER) an Hochschulen überwinden kann, in dem sie die entsprechenden Schritte aus dem Leitfaden umsetzen. 

Auf dem [Barcamp Kiel](https://barcamp-kiel.de/) wurde das Partyspiel ["Research Data Scarytales"](https://forschungsdaten-thueringen.de/fdm-scarytales/articles/ueberblick.html) vom Thüringer Kompetenznetzwerk Forschungsdatenmanagement [vorgestellt](https://chaos.social/@derbruesseler/113051218594731297). Es soll auf spielerische Art illustrieren, welche Folgen Fehler im Datenmanagement haben können. Dazu wird für die jeweils wahre Geschichte ein verklausulierter Satz präsentiert, wie z.B. "Nachdem er seine Dateien geteilt hatte, war sein Team nicht mehr gut auf ihn zu sprechen." und die Teilnehmenden müssen durch Fragen an den Spielleiter, der die Auflösung kennt, enträtseln, was konkret schief gelaufen ist.  

## Karten
Der [GeoObserver gratuliert](https://geoobserver.de/2024/08/09/20-jahre-openstreetmap-gratulation/) OpenStreetMap zum 20. Geburtstag. [10 Millionen Kontributoren beteiligen](https://techcrunch.com/2024/08/10/one-man-decided-to-take-on-google-maps-20-years-later-openstreetmap-is-still-going-strong/) inzwischen an der Google-Maps-Alternative. Auch der ursprüngliche Schöpfer Steve Coast hat sich zum Jubiläum der Wiki-Map [zu Wort gemeldet](https://stevecoast.substack.com/p/the-days-are-long-but-the-years-are).  

Doch noch immer gibt es auch bei OpenStreetMap weiße Flecken. So werden nun die Daten des Statistischen Bundesamtes genutzt, [um zu erkennen](https://chaos.social/@schenklklopfer/112903479643138919), wo in Deutschland noch Gebäude in der OpenStreetMap fehlen. Tools und Apps wie [MapRoulette](https://maproulette.org) und [StreetComplete](https://wiki.openstreetmap.org/wiki/StreetComplete) motivieren zusätzlich, solche Leerstellen zu füllen.

Die Daten von OpenStreetMap ermöglichen auch die Existenz freier Android & iOS Offline-Karten-Apps wie z.B. [Organic Maps](https://github.com/organicmaps/organicmaps) und [NavigatorFree](https://navigatorfree.mapfactor.com/de/).

Was braucht es, um eine Karte zu zeichnen, in der die Kreise in Schleswig-Holstein in verschiedenen Farben dargestellt werden? Natürlich erstmal die Polygone der Kreise. Aber die Shape-Datei ist mehrere Megabyte groß, in GeoJSON konvertiert wird es nicht weniger. Unpraktisch für eine Web-Anwendung. [OpenNorth zeigt](https://open-north.de/blog/2024-08-28_nur_eine_karte/), wie man die Datenmenge sinnvoll reduzieren kann. 

Eine anschauliche Präsentation des Landschaftsraumes und der Siedlungsstrukturen in Österreich bietet der neue Datensatz ["Landcover Austria"](https://www.opendataportal.at/der-landcover-austria-atlas-landschafts-und-lebensraume-im-regionalen-kontext/) an Hand komplexer Kartenbilder auf dem Open Data Portal Österreich.

Wie heißen die Berge in meinem Sichtfeld und wie hoch sind sie. Das kann die iOS-App ["Mont"](https://opendata.swiss/de/showcase/mont) von [Thomas Weibel](https://swiss.social/users/thomasweibel/statuses/112955740139487021) live in der Kamerasicht auf dem Handy anzeigen. Der [Open-Source-Quellcode](https://www.thomasweibel.ch/mont2/js/script.js) umfasst gerade mal 11kb.

## Energie
Um den Energieverbrauch von (OpenSource-)Software zu senken, gibt es von Vlad [einen Aufruf](https://chaos.social/@isotopp/112902081363470261), sich doch dem informellen Forschungskollektiv [lowcarbon.software](https://lowcarbon.software) anzuschließen (im Mastodon-Thread des Aufrufs selbst gibt es noch diverse Hinweise auf schon bestehende Initiativen und Ansätze).
  
In der Web-Anwendung [Electricity Maps](https://app.electricitymaps.com/zone/DE) bekommt man live die CO2-Emissionen auf einer Karte visualisiert, die allein durch Stromverbräuche entstehen. Die Anwendung des gleichnamigen dänisch-französischen Startups [steht auch Open Source auf Github](https://github.com/electricitymaps/electricitymaps-contrib). Die Daten selbst stammen aus öffentlich zugänglichen Datenquellen von Stromnetzbetreibern, Behörden und anderen Institutionen. Die Datenbank als auch der Zugang zur REST-API sind allerdings kostenpflichtig.

## Mobilität
Der [DELFI e.V.](https://www.delfi.de/) veröffentlicht schrittweise seit dem 01.08.2024 deutschlandweite Prognosedaten des ÖPNV (Pünktlichkeitsdaten) auf der [Mobilithek](https://mobilithek.info/blog/deutschlandweite-prognosedaten). Erst am Ende des Jahres wird der Zugang unbeschränkt gewährt, da aktuell noch regionale deutliche Unterschiede hinsichtlich Vollständigkeit und Qualität bestehen. 

Auch die Deutsche Bahn wurde durch das Bundeskartellamt verpflichtet, Verspätungsdaten, Daten über Zugausfälle, aktuelle Gleisangaben und Informationen zu Großstörungen in Echtzeit an Mobilitätsplattformen weiterzugeben, und hat [entsprechende Verträge mit diesen abgeschlossen](https://www.heise.de/news/Deutsche-Bahn-gibt-Verkehrsdaten-an-Mobilitaetsplattformen-weiter-9836073.html).

Im [Zentralen Haltestellenverzeichnis (ZHV)](https://www.delfi.de/de/leistungen-produkte/daten-dienste/#:~:text=zhv), ebenfalls von DELFI, gibt es nun für [ca. 1.500 Haltestellen mastscharfe Angaben](https://chaos.social/@mfdz/113028419868898870). Entsprechend konnte auch der [Vergleich](https://gtfs.mfdz.de/delfi/) der ZHV-Daten mit den Daten in OpenStreetMap aktualisiert werden. Welche Seite recht hat, muss in jedem Fall einzeln geprüft werden.

Als wie Fahrradfreundlich wird Deutschland wahrgenommen? Dazu hat Pascal aus dem Datawrapper-Team die Daten aus der 2022-Umfrage [visuell ausgewertet](https://blog.datawrapper.de/bicycle-friendly-germany/) und auch mit den Daten von 2012 verglichen. 

## Klima
David McCandless veröffentlicht seit 15 Jahren auf [Information is beautiful](https://informationisbeautiful.net) (und inzwischen auch auf [Mastodon](https://vis.social/@infobeautiful)) regelmäßig anschauliche interaktive Visualisierungen zu unterschiedlichen Themen, wie z.B. diese zum exponentiellen Anstieg von [Emissionen aus dem fossilen Brennstoffen über die letzten 100 Jahre](https://vis.social/@infobeautiful/112911230643311512).

Offener Zugang zu (Forschungs-)Daten ist notwendige Bedingung, um die Klimakrise lösen zu können. Initiativen wie [Open goes COP](https://opengoescop.org) und [Open Climate Data](https://creativecommons.org/about/open-climate-data/) wollen bei Verhandlungen in kommenden Klimakonferenzen versuchen, mit auf den Tisch zu bringen.

So hat eine [Studie](https://www.science.org/doi/10.1126/science.adl6547) des [Potsdam-Instituts für Klimafolgenforschung](https://www.pik-potsdam.de/de) offengelegt, dass von 1.500 Politikmaßnahmen [gerade mal 189 die Emissionen tatsächlich gesenkt haben](https://taz.de/Studie-zu-Umweltmassnahmen/!6028192/).

Eine vom Bundeswirtschaftsministerium in Auftrag gegebene Studie, um Art, Höhe und Auswirkung von klimaschädlichen Subventionen zu ermitteln, wurde, obwohl schon November 2023 abgeschlossen, nun erst, neun Monate später (nach Abschluss der Haushaltsverhandlungen), [für die Öffentlichkeit freigegeben](https://climatejustice.global/@GermanZeroHH/112988810504123988). Aus ihr geht unter anderem hervor, dass die 35,8 Milliarden Euro Subventionen und Begünstigungen (wie z.B. das Dienstwagenprivileg und die Entfernungspauschale) im Jahr 2020 hochgerechnet bis 2030 zu 156 Mio. Tonnen klimaschädlichen Emissionen in den Sektoren Energie, Verkehr, Industrie und Landwirtschaft insgesamt führen. 

Stattdessen versuchen Staaten weltweit zivilgesellschaftliches Engagement, auch im Umweltbereich, immer mehr [einzuschränken](https://www.ufu.de/ufu-informationen/eingeschraenkter-oeffentlicher-raum/), auch in Deutschland.

Mit 28,9 Grad medianer Oberflächentemperatur war das Mittelmeer [so warm wie noch nie](https://taz.de/Neuer-Hoechstwert-von-289-Grad/!6030579/). Der Weltklimarat bezeichnet das Meer als einen Hotspot des Klimawandels.
  
Mit dem Online-Tool [CityTree](https://master.d3jwj4wl3ttyob.amplifyapp.com/simulation) der Technischen Universität München (TUM) kann man simulieren, welche Stadtbaumarten an welchen Standorten [besonders gut wachsen](https://www.heise.de/news/Online-Tool-Hier-wachsen-diese-Stadtbaumarten-besonders-gut-9825777.html). In der Simulation kann man zwischen 34 Städten und 12 Baumarten wählen. Je nach gewählter Bodenart, Lichteinfall und Bodenversiegelung werden mit biologischen, physikalischen und chemischen Gleichungen berechnet, wie der Standort und das Klima das Wachstum und die Ökosystemleistungen der Baumart beeinflussen. Als Datengrundlage wurden dafür 5600 Stadtbäume deutschlandweit analysiert.  

## Geschichte
Historische Fotos mit dem heutigen Zustand digital überblenden kann man in [Zeitsprung Weimar](https://zeitsprung.weimar.jetzt). Stetig kommen [weitere Fotopaare hinzu](https://zeitsprung.weimar.jetzt/315/).  

Auch in Regensburg soll mit dem [Projekt Inklusives](https://www.regensburg.de/r-next/projekte/inklusives-welterbe) historische Sehenswürdigkeiten über eine digitale Anwendung barrierefrei und niederschwellig erlebbar werden.  

## Transparenz / Investigativrecherchen
Im August ist das [Lobbyranking 2024](https://www.transparency.de/aktuelles/detail/article/lobbyranking-2024) von Transparency International Deutschland veröffentlicht worden. Aus ihm geht hervor, dass 13 der 16 Bundesländer nicht einmal die Hälfte der Kriterien des Lobbyrankings erfüllen. Ein schlechtes Signal beim ohnehin schon bröckelnden Vertrauen in demokratische Institutionen. Das Handelsblatt hat zudem [analysiert](https://www.handelsblatt.com/politik/deutschland/lobbyismus-diese-verbaende-haben-den-groessten-einfluss/100059589.html), welche Verbände den größten Einfluss haben, weil z.B. besonders häufig in Leitmedien zitiert werden. Auch eine 46.000 Euro teure Anzeigenkampagne des Finanzministerium steht im starken Verdacht, mit Steuergeldern Wahlwerbung für die FDP [betrieben zu haben](https://www.abgeordnetenwatch.de/recherchen/parteispenden/verdeckte-fdp-werbung-interne-mail-wird-zum-problem-fuer-christian-lindner). 

Sportwetten im Amateurfußball sind in Deutschland verboten - und doch werden sie auf internationalen Wettportalen angeboten, auch in deutscher Sprache. Doch woher kommen die Daten über Freistöße, gelbe Karten und Tore in Echtzeit? Offensichtlich müssen sogenannte Daten-Scouts vor Ort sein und entsprechende Informationen erheben und an die Seiten der Buchmacher weiterleiten. [Statt vom Deutschen Fußballbund mussten diese Missstände erst durch ein Team aus Investigativ-Journalisten und Datenexperten aufgedeckt werden](https://www.ardmediathek.de/video/story/angriff-auf-den-amateurfussball-die-gier-der-wettindustrie/br/Y3JpZDovL2JyLmRlL2Jyb2FkY2FzdFNjaGVkdWxlU2xvdC8yY2MyNjEzYy00MWYzLTQ4MGYtOWUyMi1hYzQ2ZWVmOTY2MTk).

## Und sonst so?
Die [eGovernment Podcast Monatsschau](https://egovernment-podcast.com/egov193-monatsschau-08-24/) bespricht weitere Digitalthemen, die im August relevant waren.

Auf der Webseite [Free Public APIs](https://www.freepublicapis.com) findet man über 300 zusammengetragene frei zugängliche REST Endpunkte aus verschiedenen Kategorien (und mit variierender Nützlichkeit und Ernsthaftigkeit), die auch regelmäßig hinsichtlich Verfügbarkeit, Antwortzeiten und Fehlerrate automatisiert überprüft werden.

## Veranstaltungen
* Dienstag, 03.09.2024, 11:00-17:30, bUm, Paul-Lincke-Ufer 21, 10999 Berlin: **Prototype Fund: Demo Day der Förderrunde 15**
  * https://prototypefund.de/demo-day/#Programm
* Mittwoch, 04.09.2024, online: **Open Transport Meetup mit Julius Tens zu NeTEx - a general introduction / modelling railway stations**
  * https://hackmd.okfn.de/opentransportmeetup
* Donnerstag, 05.09.2024, Potsdam: **Barcamp Open Science**
  * https://www.barcamp-open-science.eu
* Freitag, 06.09.2024, 13:30-14:30, online (Zoom): **Basiskurs Data Literacy**
  * https://www.correlaid.org/bildung/grundkurs-daten/
* Freitag, 06.09.2024, bis Sonntag, 08.09.2024, An der Schanz 6, Köln: **Jugend hack Köln***
  * https://jugendhackt.org/events/koeln/
* Freitag, 06.09.2024, bis Samstag, 07.09.2024, Pilatusstrasse 21 / Sempacherstrasse 10, Luzern: **Swiss Open Cultural Data Hackathon "GLAMhack24"**
  * https://www.infoclio.ch/fr/glamhack24-anniversary-edition-last-call-participate
  * https://opendata.hitobito.com/de/groups/5/public_events/10
* Freitag, 06.09, 09:00–10:00, online: **Informationsveranstaltung Förderrichtlinie Open Data Schleswig-Holstein**
  * https://veranstaltungen.dataport.de/infoveranstaltung/sh/foerderrichtlinie-open-data
* Montag, 09.09.2024, 14:00–15:00, online: **Informationsveranstaltung Förderrichtlinie Open Data Schleswig-Holstein**
  * https://veranstaltungen.dataport.de/infoveranstaltung/sh/foerderrichtlinie-open-data
* Montag, 09.09.2024, 19:00, Wikibär, Köpernicker Str. 45, Berlin: **OKLab Berlin**
  * https://www.meetup.com/de-DE/ok-lab-berlin/events/302794117/
* Dienstag, 10.09.2024, 17:00-20:, Einstein Center Digital Future, Wilhelmstraße 67, Berlin: **KI-Regulierung für eine nachhaltige Digitalisierung?**
  * https://www.ioew.de/veranstaltung/ki-regulierung-fuer-eine-nachhaltige-digitalisierung
* Mittwoch, 11.09.2024, 09:00-12:00, online: **Workshop "Offene Daten aus der Zivilgesellschaft: wie eure Daten fürs Gemeinwohl nutzbar werden" im Civic Data Lab**
  * https://app.guestoo.de/public/event/92bf5b4b-61ce-4ed0-b29c-ef8a92598a24?lang=de
* Donnerstag, 12.09.2024, 16:00-19:00, online: **Open-Source-Tools in Engagement und Ehrenamt**
  * https://www.deutsche-stiftung-engagement-und-ehrenamt.de/aktuelles/transform_d-digitalkonferenz-marktplatz-digitalisierung/
* Donnerstag, 12.09.2024, bis Freitag, 13.09.2024, Bahnhofstrasse 6, Windisch (Schweiz): **Energy Data Hackdays 2024**
  * https://energydatahackdays.ch
* Freitag, 13.09.2024, 10:00-19:00, Alte Münze, Molkenmarkt 2, Berlin: **Netzpolitik-Konferenz "Bildet Netze!"**
  * https://netzpolitik.org/2024/bildet-netze-jetzt-fuer-konferenz-am-13-september-anmelden/
* Samstag, 14.09.2024, bis Sonntag, 15.09.202, MotionLab.Berlin, Halle 20, Bouchéstr. 12, Berlin: **Nextcloud Community Conference 2024**
  * https://nextcloud.com/conference-2024/
* Dienstag, 17.09.2024, 15:00-18:00, online: **Workshop "Ein Bild sagt mehr als 1000 Zahlen - die Kunst der Datenvisualisierung"**
  * https://app.guestoo.de/public/event/91132a47-0b3c-4423-ab0e-1fcabf702671?lang=de
* Dienstag, 17.09.2024, bis Mittwoch, 18.09.2024, Jakob-Welder-Weg 28, Mainz: **3. Open Science Festival**
  * https://converia.uni-mainz.de/frontend/index.php?sub=153
* Mittwoch, 18.09.2024, 19:00-22:00: **Monsters of Law meets Taylor Wessing - Transparent & Lizenziert – Rechtliche Rahmenbedingungen für den Einsatz von CC-Lizenzen in der öffentlichen Verwaltung**
  * https://www.wikimedia.de/veranstaltungen/monsters-of-law-meets-taylor-wessing/
* Donnerstag, 19.09.2024.: **Konferenz »Public Data – besser mit Behördendaten umgehen**
  * https://www.fokus.fraunhofer.de/de/DPS/events/public-data-konferenz
* Donnerstag, 19.09.2024, bis Samstag, 22.09.2024, Steintorcampus, Emil-Abderhalden-Str. 26/27, Halle (Saale): **Digital History & Citizen Science**
  * https://archive20.hypotheses.org/13460
* Donnerstag, 19.09.2024, bis Sonntag, 22.09.2024: Mitosis LAB, Sonnenallee 67, Berlin und live im Stream: **1. Matrix Konferenz**
  * https://2024.matrix.org/schedule/
* Freitag, 20.09.2024, bis Samstag, 21.09.2024, silent green, Gerichtstraße 35, Berlin (Tickets kosten zwischen 99€ und 399€): **recampaign 24**
  * https://recampaign.de
* Samstag, 21.09.2024, 10:00, bis Sonntag, 22.09.2024, 15:00, Bildungswerkstatt Kirchberg, Saarbrücken: **Bits & Bäume Saar - Die Konferenz für Digitalisierung und Nachhaltigkeit**
  * https://saar.bits-und-baeume.org
* Sonntag, 22.09.2024, 14:00, Regenbogenfabrik, Lausitzer Straße 21a, Berlin: **Zweiter Netzpolitisches Martinee: Social Media jenseits von BigTech - Open Source und Fediverse für ein freieres Internet**
  * https://digitalegesellschaft.de/2024/08/zweite-netzpolitische-matinee-22-september/
* Dienstag, 24.09.2024, 10:00-13:00, Berlin: **Sitzung der AG Datendemokratie (Q3/2024)**
  * https://initiatived21.de/veranstaltungen/ag-datendemokratie-q3-2024
* Freitag, 27.09.2024, bis Samstag, 28.09.2024, Sparkassenakademie Nordrhein-Westfalen, Hörder Burgplatz 1, Dortmund.: **SciCAR**
  * https://netzwerkrecherche.org/termine/konferenzen/fachkonferenzen/scicar/
  * https://24.scicar.de/scicar24/schedule/
  * z.B. mit "Lieber spät als gar nicht? Verkehrsdaten, Journalismus und Verkehrswende"
    https://24.scicar.de/scicar24/talk/SBECML/
* Freitag, 27.09.2024, bis Sonntag, 29.09.2024, Strandpavillion Solitüde, Flensburg: **Hacks on the Beach 2024**
  * https://events.ccc.de/2024/08/09/hotb24/
* Freitag, 27.09.2024, bis Sonntag, 29.09.2024, Basel: **HackThePromise**
  * https://www.digitale-gesellschaft.ch/2024/08/16/hackthepromise-und-datenschutz-festival-in-basel-einladung-und-programm/
  * https://hackthepromise.org
* Samstag, 28.09.2024, bis Sonntag, 29.09.2024, Pioneers Club, Ritterstraße 8, Bielefeld: **Umweltdatenwerkstatt in Bielefeld**
  * https://www.meetup.com/de-DE/code-for-bielefeld/events/303072730/
  * Anmeldung über: https://datenschule.de/workshops/umweltdatenwerkstatt/
* Donnerstag, 03.10.2024, 14:00-22:00, Jugendkulturzentrum Königstadt, Saarbrücker Straße 23, Berlin: **Jugend hackt: Hackday**
  * https://okfn.de/blog/2024/09/hackday-am-3.-oktober/
  * Anmeldeschluss: Mittwoch, 25.09.2024
* Donnerstag, 03.10.2024, bis Sonntag, 06.10.2024, TU Darmstadt: **MRMCD 2024 - Land in Sicht?**
  * https://2024.mrmcd.net/de/
* Freitag, 04.10.2024, 14:00, bis Sonntag, 06.10.2024, 15:00, Gerichtsstraße 2, Wiesbaden und online: **WikiCon 2024**
  * https://www.wikimedia.de/veranstaltungen/wikicon-2024-in-wiesbaden/
* Samstag, 05.10.2024, bis Sonntag, 06.10.2024, Potsdam: **Umweltdatenwerkstatt in Potsdam**
  * Anmeldung über: https://datenschule.de/workshops/umweltdatenwerkstatt/
* Dienstag, 08.10.2024, 17:00, bis, Donnerstag, 10.10.2024, 15:30, Besenbinderhof 57A, Hamburg: **Forum Citizen Science 2024**
  * https://www.mitforschen.org/veranstaltungen/forum-citizen-science-2024/programm
* Regelmäßige OKLab-Treffen
  * Köln: jeden zweiten Montag, 19:00 (12.8. online, 26.8. Hackländerstr. 2 (Wikipedia Lokal K))
  * Leipzig: jeden Mittwoch, 19:00, Peterssteinweg 14 (Basislager)
  * Münster: jeden Dienstag, 19:30, Wolbeckerstr. 36 (Café Drei:klang)

## Call for participation
* Zum Workshop zum OpenData Forum auf der SCCON24 können wieder Sessionvorschläge eingereicht werden! 3 der Sessions werden ausgewählt und präsentiert. Die Ergebnisse werden im OpenDataForum dokumentiert. Schickt Eure Vorschläge bis zum 13.09. an: opendata@bva.bund.de
  * https://social.bund.de/@opendatabund/113067998011509945
* **Road2Openness – Open-Science-Strategiewerkstatt**, bis 15. September 2024 bewerben
  * https://www.stifterverband.org/pressemitteilungen/2024_07_08_road2openness-strategiewerkstatt
* 08.11.2024 - 09.11.2024: **Nights of Open Knowledge (NooK)** an der Uni Lübeck: Die Einreichung von Vorträgen, Lightning Talks, Workshops und Ständen ist bis einschließlich 30. September möglich.
  * https://events.ccc.de/2024/07/17/nook/
* **Meet and Code 2024**: Veranstaltungsideen jetzt einreichen!
  Sichert euch jetzt 500 € zur Finanzierung eurer Programmierveranstaltung!, Bewerbungsfrist, 30.09.2024
  * https://www.meet-and-code.org/de/de/news-show/700
* Im Rahmen des Forschungsvorhabens **LabelledGreenData4All** https://www.umweltbundesamt.de/themen/digitalisierung/digitale-nachhaltigkeit/datenannotation-als-grundlage-fuer-ki-im#die-potenziale-annotierter-umweltdatensatze ermitteln wir sektorübergreifend die aktuellen Bedarfe an annotierten Daten für KI-Anwendungsfälle mit Bezug zu Umweltdaten sowie umweltrelevanten Daten. Falls Sie an einem Projekt beteiligt waren, nehmen Sie bis zum 30.09.24 an unserer Befragung teil:
  * https://social.bund.de/@Umweltbundesamt/113028688599241497
* **MIZ-Innovationsförderung** – jetzt bis 6. Oktober 2024 bewerben!
  * https://miz-babelsberg.de/aktuelles/details/innovationsfoerderung-08-2024.html
* **NASA International Space Apps Challenge**, Hackathon, Registrierung offen, findet 5. und 6. Oktober statt
  * https://www.spaceappschallenge.org
* Im Rahmen des **Chaotischen Catalysator Stipendienprogramms** können sich Studierende, die eine Master- oder Diplomarbeit schreiben, um ein Stipendium in Höhe von insgesamt 1.500 € bewerben. Gesucht werden Themen, die sich mit den Informationstechnologien dieser Welt und ihren Auswirkungen auf die Gesellschaft beschäftigen. Hinsichtlich der Fachrichtung gibt es keine Einschränkungen. Bewerbungen bis 31.10.2024‚
  * https://chaos-stipendien.de/blog/2023/sommer-semester-2024/
  * https://chaos-stipendien.de
