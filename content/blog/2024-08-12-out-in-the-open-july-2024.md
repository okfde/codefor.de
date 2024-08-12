---
title: "Datengewäsch – Out in the Open Juli 2024"
author: "Jörg Reichert (Code for Leipzig)"
date: '2024-08-12T08:00:00+02:00'
excerpt: Monatlich erscheinender Überblick über Entwicklungen in der Open Data und Civic Tech Szene
topic: community
images:
- imgname: out-in-the-open-2024-07-header.jpg
  attribution: <a href="https://commons.wikimedia.org/wiki/File:Open-Leuchtschrift_in_Ladent%C3%BCr_mit_Turm-Spiegelung_in_Dresden.jpg">Foto</a> von <a href="https://commons.wikimedia.org/wiki/User:ViggieJoe">Jörg Reichert</a> auf <a href="https://commons.wikimedia.org/wiki/Hauptseite">Wikimedia Commons</a>
og_image: out-in-the-open-2024-07-header.jpg
type: blog
---

## Open Data
Philip Heltweg listet in seinem [Blogbeitrag](https://www.heltweg.org/posts/how-to-make-sure-no-one-cares-about-your-open-data/) all die Dinge, mit denen man die Nutzer von offenen Daten vergraulen kann. Eine noch umfangreichere [Sammlung solcher Anti-Patterns](https://github.com/transportkollektiv/opendata-antipatterns), also was man beim Veröffentlichen von Open Data alles falsch machen kann, gibt es bereits vom Transportkollektiv. Gleich das erste Anti-Pattern dort, ["Noch ein Datenportal erstellen"](https://github.com/transportkollektiv/opendata-antipatterns/blob/main/patterns/datenportal.md), wird nun "vorbildlich" von [Wiesbaden](https://www.wiesbaden.de/medien/rathausnachrichten/PM_Zielseite.php?showpm=true&amp;pmurl=https://www.wiesbaden.de/guiapplications/newsdesk/publications/Landeshauptstadt_Wiesbaden/141010100000468786.php) umgesetzt, das bis Anfang 2025 eine eigene Open-Data-Plattform einführen möchte. Wobei die damit ebenfalls verbundenen Entscheidung für "Open by Default" positiv zu sehen ist.

Auch das zu gründende Dateninstitut entwickelt sich immer mehr zu einem Anti-Pattern. So findet beispielsweise eine Gemeinwohlorientierung im aktuellen Konzept keine Erwähnung mehr. Aline Blankertz und Henriette Litta [nennen in ihrer gemeinsamen Stellungnahme noch weitere Gründe](https://okfn.de/blog/2024/07/dateninstitut-wmde-okf/), warum sich sowohl die Wikimedia Deutschland als auch die Open Knowledge Foundation Deutschland gegen eine Beteiligung an dem Bewerbungsverfahren entschieden haben.

Es gibt natürlich aber auch positive Patterns. Die Einträge auf [der Checkliste](https://caltechlibrary.github.io/RDMworkbook/data-sharing.html#accessible-spreadsheets), die Kristin Briney [vorschlägt abzuarbeiten](http://dataabinitio.com/?p=1158), wenn man tabellarische Daten maschinenlesbar veröffentlicht, gehören dazu.

Als weiteres Positivbeispiel ist die Schleswig-Holsteiner ["Förderrichtlinie Open Data"](https://infomedia.sh/2024/07/03/foerderrichtlinie-open-data/) zu nennen, über die kommunale Einrichtungen die Entwicklungsaufwände für die Anbindung ihrer IT-Anwendungen bzw. auch neuer Fachverfahren an das Open Data Portal des Landes sich finanzieren lassen können, mit dem Ziel, dass die Daten über Schnittstellen dieser Systeme an das OpenData-Portal automatisiert geliefert werden.

In einer [Homestory](https://citylab-berlin.org/de/blog/von-offenen-daten-und-smarten-staedten-das-grosse-odis-interview/) gibt das Team der Open Data Informationstelle Berlin (ODIS) einen Einblick in seine Arbeit, also z.B. Beratungen, Workshops und Schulungen für Verwaltungsmitarbeitende zur Vorbereitung von Datenveröffentlichung. Auch das Erstellen eigener Visualisierungen, Fallstudien und Anwendungen gehört zu ihren Aufgaben. Mit ihnen lassen sich die Potenziale offener Daten demonstrieren, aber auch Hürden auf Grund fehlender Daten bzw. nicht ausreichend qualitativer Daten identifizieren.

Die [Zensusdatenbank](https://ergebnisse.zensus2022.de/datenbank/online/) mit ersten Daten zu Demografie, Gebäuden und Wohnungen wurde vom Statistischen Bundesamt [online genommen](https://social.bund.de/@destatis/112767071708913025). Mit ihr kann man Ergebnisse in Tabellen für Bund, Länder, Kreise, Gemeinden und Bezirke abrufen und mit anderen Merkmalen kombinieren.

## Open Data Tools
Nachdem letzten Monat der Open-Data-Katalog-Standard [DCAT-AP](https://semiceu.github.io/DCAT-AP/releases/3.0.0/) auf europäischer Ebene in der Version 3.0 freigegeben wurde, hat der deutsche Ableger [DCAT-AP.de](https://www.dcat-ap.de/def/dcatde/3.0/spec/) [nachgezogen](https://social.bund.de/@opendata/112773725117071830). Der Entwurf kann [hier](https://gitlab.opencode.de/fitko/govdata/dcat-ap.de/-/issues) noch kommentiert werden.

Bob DuCharme stellt [SPARQL Anything](https://www.bobdc.com/blog/sparqlanything/) vor, ein Open-Source-Werkzeug, mit dem man mit der Abfragesprache SPARQL Inhalte nicht nur aus RDF-Formaten sondern auch aus XML, JSON, CSV, HTML, Excel, Text, Binär, EXIF, Datensystem, Zip/Tar, Markdown, YAML, Bibtex, DOCx und PPTx extrahieren kann (in dem es diese Formate unter der Haube nach RDF konvertiert).

## Geodaten / Karten
Dass man die Pflege und die Neuanlage von offenen Daten gezielt fördern kann, hat der internationale Wettbewerb ["Coordinate Me"](https://www.wikidata.org/wiki/Wikidata:Events/Coordinate_Me_2024/de) gezeigt. Anliegen des Wettbewerbs, der von Anfang bis Ende Mai 2024 lief, war es, die Wikidata-Einträgen innerhalb von 16 Fokusländern, die Geodaten aufweisen, zu verbessern. Wie [Wikimedia Österreich berichtet](https://wikimedia.at/coordinate-me-freie-daten-im-wettbewerb/), dass von den 3228 Teilnehmenden 129.102 Wikidata-Einträge bearbeitet worden sind, davon 15.261 komplett neu angelegt.

Die Mobilitätsorganisation VCÖ [ruft die Bevölkerung in Österreich dazu auf](https://vorarlberg.orf.at/stories/3264418/), Hitze-Hotspots in ihre [Online-Karte VCÖ CHECK](https://map.vcoe.at/gehen/) einzutragen. Mit dieser Aktion sollen Gemeinden motiviert werden, mehr Bäume auf Großparkplätzen und entlang Straßen zu pflanzen, um Menschen in Autos aber auch auf Gehwege vor der prallen Sonne zu schützen.

Dass das auch eine Frage der Flächengerechtigkeit ist, zeigt die [Anwendung von Hans Hack](https://www.hanshack.com/parking/). In ihr lassen sich für einen gewählten Kartenausschnitt in Berlin die Anteile von Parkplätzen, Spielplätzen und Grünanlagen [berechnen](https://troet.cafe/@hanshack/112766511080545141). Grundlage bilden die gleichen Daten, die die Senatsverwaltung für Mobilität nun auch selbst als [Kartierung](https://viz.berlin.de/verkehr-in-berlin/parken/parkraumkartierung/) sämtlicher öffentlicher Straßenparkplätze im Innenstadtbereich [bereitstellt](https://viz.berlin.de/aktuelle-meldungen/kartierung-samtlicher-offentlicher-parkplatze-im-innenstadtbereich/).

Um eine anderen Aspekt von Gerechtigkeit geht es dem Projekt [Wheelmap](https://wheelmap.org/) zurück. Seit nunmehr 14 Jahren kartieren Ak­ti­vis­t:in­nen, welche Orte (durch z.B. Treppen, Rampen, Aufzüge) in der Stadt rollstuhlgerecht sind (oder gerade eben nicht). Nun soll im Rahmen des bürgerwissenschaftlichen Projekts [IncluScience](https://incluscience.org) die App [für weitere Nutzergruppen erschlossen werden](https://taz.de/Crowdsourcing-Plattform-Wheelmap/!6024119/).

Für alle angehenden Taxifahrer und alle, die ihre Straßenverortungsfähigkeiten auf die Probe stellen möchten, ist das auf OSM-Daten basierende Spiel ["Back of your Hand"](https://backofyourhand.com/) [der richtige Zeitvertreib](https://chaos.social/@bodems/112740666259947428). Ein ähnliches Prinzip also wie bei [Click that 'hood'](https://click-that-hood.com/), nur mit Straßen statt Stadtbezirken.

Auf Mastodon hat ein Nutzer nach [Möglichkeiten gesucht](https://chaos.social/@schenklklopfer/112732976854803585), alte Stände in OpenStreetMap miteinander visuell vergleichen zu können. Empfohlen wurden ihm [achavi](https://overpass-api.de/achavi/), [OSMCha](https://osmcha.org/) und [OSM Deep History](https://osmlab.github.io/osm-deep-history/).

In der Anwendung [Luftbilder Berlin](https://luftbilder.berlin.codefor.de/) des OKLabs Berlin sind nun die brandneuen Luftaufnahmen aus dem Geoportal Berlin vom laufenden Jahr integriert. Diese lassen sich nun interaktiv mit alten Bildern seit 1928 vergleichen.

Schon 2022 hat die Stadt Zürich [3D-Stadt-Modelle](https://www.stadt-zuerich.ch/3d-stadtmodelle) der Pfahlbauten des Neolithikums (um 3000 v. Chr.) sowie die neuzeitliche Stadt um das Jahr 1800 veröffentlicht. Seit 11. Juli gibt es einen weiteren Datensatz der das spätmittelalterliche Zürich um 1500 zeigt.

Eine möglichst vollständige Erfassung aller Kölner Denkmäler als 3D Modelle möchte das Projekt [Denkmal 4D Köln](https://codefor.de/projekte/cologne-denkmal4d/) des OKLab Kölns erreichen. Auf der [Online-Karte](https://codeforcologne.github.io/Denkmal-4D-Koeln/) werden daher nicht nur alle bereits erfassten 3D-Modelle verortet, sondern auch gezielt dazu aufgerufen, fehlende (Meta-)Daten beizusteuern.

## Mobilität
Wie unterscheidet sich weltweit der [Modal Split](https://de.wikipedia.org/wiki/Modal_Split), also die Verteilung auf die verschiedene Verkehrsmittel? Mit ["Cities Moving"](https://vis.csh.ac.at/citiesmoving/) lassen sich 877 Städte über 61 Ländern vergleichen. Man kann abschätzen, welchen Einfluss Land, Region, Einkommensverteilung und Einwohnerzahl der jeweilige Stadt [haben könnte](https://social.coop/users/ZaneSelvans/statuses/112709320991373239).

Die Europäische Union (EU) will für verschiedene Sektoren gemeinsame europäische Datenräume schaffen. Mit der Initiative für einen gemeinsamen europäischen Mobilitätsdatenraum, soll es laut EU-Kommision möglich werden, "Daten zu erheben, miteinander zu verknüpfen und verfügbar zu machen, um so die EU-Ziele von der Nachhaltigkeit bis hin zur Multimobilität zu verwirklichen." Zusätzlich gibt es mit dem Mobility Data Space (MDS) einen virtuellen Marktplatz zum Austausch von Mobilitätsdaten. Der MDS somit kein Open-Data-Portal und die Daten kein Open Data. Der Verein [D64 kommt in seiner Analyse](https://d-64.org/mobility-data-space-der-bundesregierung-so-kommen-wir-nicht-weiter/) daher zum Schluss, dass es immer noch eine Vielzahl sich auch inhaltlich teilweise überschneidender Plattformen und Datenportale gibt und dass diese Fragmentierung der Datenquellen weiterhin ein große Unübersichtlichkeit hinterlässt. Innovationen werden nach seiner Einschätzung nicht durch neue Geschäftsmodelle auf Datenmarktplätzen entstehen, sondern durch nur gesamtgesellschaftliche freie und offene Nutzbarkeit der Daten.

[Reset legt den Finger in die gleiche Wunde](https://reset.org/warum-haben-wir-keinen-skyscanner-fuer-zuege/), denn grenzübergreifende Zugreisen in Europa zu buchen ist nach wie vor durch die Fragmentierung eine Wissenschaft für sich. Eigentlich bestehende Verbindungen werden nicht gefunden oder lassen sich nicht als Ganzes buchen, von intermodalen Kombinationen ganz zu schweigen. So wird der Umstieg vom Flugzeug oder Auto auf die Bahn weiter behindert. [Jon Worth bringt es auf den Punkt](https://jonworth.eu/note-to-the-new-eu-transport-commissioner-fixing-cross-border-rail-ticketing-will-help-millions-of-europeans-and-can-secure-your-legacy/): es fehlt eine gesetzliche Verordnung für EU-Zugticket-System.

Um EU-weit auch an jeder Bus-Haltestelle leichten Zugang zu den Echtzeit-Abfahrten zu bekommen (z.B. durch Scannen eines QR-Codes), dafür setzt sich die Petition ["EU Live Bus Stop Info"](https://www.busliveinfo.eu) ein.

Die öffentlich zugängliche [strecken.info](https://strecken-info.de) ist eine Online-Karte des Schienennetzes, die aktuelle Streckensperrungen, Bauarbeiten oder Zugausfällen zeigt. Die neue Version läuft jetzt flüssiger.

## Verkehrssicherheit
Das statistische Bundesamt hat Verkehrunfall-Daten für 2023 [veröffentlicht](https://www.destatis.de/DE/Presse/Pressemitteilungen/2024/07/PD24_261_46241.html), die sich auch im offiziellen [Unfallatlas Deutschland](https://unfallatlas.statistikportal.de/) für die Anzeige auswählen lassen. Die Mitfahrzentrale hat ebenfalls die neuen Daten in seine Web-Anwendung [Heatview eingepflegt](https://chaos.social/@mfdz/112806484663218499).

Die Stuttgarter Zeitung und Stuttgarter Nachrichten haben in Zusammenarbeit mit dem investigativen Recherchenetzwerk CORRECTIV [eine Webseite an den Start gebracht](https://achtungschulweg.crowdnewsroom.org/callouts/schulweg-stuttgart/map), auf der man Gefahrenstellen rund um Schulen in Stuttgart melden kann.

Ein ähnliche Anwendung, die aber bundesweit funktioniert, ist [gefahrenstellen.de](https://www.gefahrenstellen.de/?start=schulwege). Sie nutzt den OpenRouteService und die Informationen zu Gefahrenstellen, um einen sicheren Schulweg [berechnen zu können](https://heigit.org/de/mehr-sicherheit-fuer-schulen-mit-openrouteservice-der-digitale-schulwegplaner/).

Wie man Daten-basiert effektiv die Fahrradwege-Infrastruktur verbessern kann, zeigt Mark Stosberg in [seinem Blogbeitrag](https://mark.stosberg.com/bike-network-connectivity-rank/).

## Wirtschaft
Wie [ntv informiert](https://www.n-tv.de/wirtschaft/Cheapflation-trifft-die-Schwachen-article25084108.html), haben Wissenschaftle mehr als zwei Millionen Preisdaten des ["Billion Prices Project"](https://thebillionpricesproject.com) von mehr als 90 Einzelhandelsketten in 19 Ländern ausgewertetet. Danach sind im Zeitraum zwischen Januar 2020 und Mai 2024 vor allem die Preise der günstigsten Lebensmittelmarken (also meist die Eigenmarken der Supermärkte und Discounter selbst) deutlich schneller gestiegen, in Deutschland um 29 Prozent. Diese "Cheapflation" trifft somit vor allem die Schwachen, die so schon teure Markenprodukte gemieden haben. Als Gründe für die stärkere Teuerung werden die gestiegene Nachfrage, der geringer Puffer bei der Marge und der größere Anteil der gestiegenen Energie- und Rohstoffepreise am Gesamtpreis genannt.

Mit [OpenSupplyHub.org](https://opensupplyhub.org/) lassen sich weltweite Lieferketten-Daten nachvollziehen.

Die EU [plant mit dem Vermögensregister](https://www.msn.com/de-de/finanzen/top-stories/verm%C3%B6gensregister-geplant-eu-will-umfassende-datenbank-zum-verm%C3%B6gen-aller-b%C3%BCrger-aufbauen-was-dahinter-steckt/ar-BB1qqq1a) eine umfassende Datenbank zum Vermögen aller Bürger aufzubauen, um so Geldwäsche und Terrorismusfinanzierung besser bekämpfen zu können.

## Klima
Am 1. Juli ist das Klimaanpassungsgesetz [in Kraft getreten](https://www.zdf.de/nachrichten/politik/deutschland/klimaanpassungsgesetz-juli-massnahmen-100.html). Es verpflichtet unter anderem Bund und Länder dazu, Klimarisikoanalysen zu erstellen. Mit der ["Klimawirkungs- und Risikoanalyse"](https://www.umweltbundesamt.de/publikationen/KWRA-Zusammenfassung) des Umweltbundesamts (UBA) gibt es ein solches Instrument bereits auf Bundesebene. Zudem soll alle vier Jahre ein Monitoringbericht auf einer soliden Datengrundlage die Folgen des Klimawandels und den Stand der Klimaanpassungsstrategie bilanzieren und so auch eine Kontrolle durch die Öffentlichkeit ermöglichen.

Ebenfalls vom UBA bzw. konkret vom Nationalen Zentrum für Umwelt- und Naturschutzinformationen in Merseburg stammt die [Suchmaschine für Umwelt- & Naturschutz-Wissen](https://mvp.umwelt.info/de). Wie in der [zugehörigen Mitteilung](https://mvp.umwelt.info/de/artikel/ueber-die-anbindung-von-daten) zu entnehmen ist, umfasst die erste Ausbaustufe des umwelt.info Portals zunächst 100 Datenquellen. Bis Herbst 2025 sollen dann bis 300 Quellen angebunden sein. Der Quellcode des Portals liegt bei [OpenCoDE](https://gitlab.opencode.de/umwelt-info). Es gibt eine [aktuelle Terminabfrage](https://terminplaner6.dfn.de/de/p/a53d65c84718886e2c1525a335f18571-825262), um sich das Portal näher vorstellen zu lassen und auch schon erstes Feedback, Verbesserungs- und Erweiterungswünsche zu formulieren. Mit der [Karte zu allen Grundwassermessstellen in Deutschland](https://mvp.umwelt.info/de/artikel/karte_grundwasser) gibt es einen ersten redaktionell aufbereiteten Anwendungsfall.

Auch noch Beta ist der [Relaunch](https://forum.ecmwf.int/t/the-new-climate-data-store-beta-cds-beta-is-now-live/3315) vom [Climate Data Store](https://cds-beta.climate.copernicus.eu) vom europäischen Copernicus Programm. Die Daten sind weiterhin alle Open Data.

Zum neuen Online-Magazin "Neue Zukunft", das über aktuelle Entwicklungen in den Klimabewegungen in der D-A-CH-Region berichtet, gehört auch ein [interaktives Datentool](https://newsmonitor.neuezukunft.info) (welches auch [Open Source ist](https://github.com/neue-zukunft/newsmonitor)), das die Klimaberichterstattung in überregionalen Medien beobachtet.

Auch wenn schon der Corporate Social Responsiblity (CSR) ein marketinglastiger White-Washing-Verdacht anhing, gibt es nun mit [Corporate Digital Responsibility (CDR)](https://cdr-initiative.de/) auch Pendant für die freiwillige Selbstverpflichtung zur digitalen Nachhaltigkeit im Unternehmens-Kontext, wie [Reset in einem Artikel vorstellt](https://reset.org/corporate-digital-responsibility-cdr-digitale-nachhaltigkeit-unternehmen/). [Kodex](https://cdr-initiative.de/kodex) und [Berichte](https://cdr-initiative.de/cdr-berichte) mögen nett klingen, und generelles , aber schon Initiativen wie die [zum Digitalen Datenputz](https://cdr-initiative.de/news/digitaler-datenputz-2024) wirken lächerlich und verlogen, in Anbetracht dessen, wo an anderer Stelle systematisch weiterhin Energie, Wasser und andere Ressourcen verschwendet werden (mehr Rechenzentren werden gebaut, Massendatenspeicherung und -verarbeitung für KI-Training). Ähnlich wie beim CO2-Fußabdruck werden Maßnahmen individualisiert und für Seht-wir-machen-doch-was-fürs-Klima-Marketing-Berichte ausgeschlachtet. Reines Green-Washing, nur um verbindlicheren rechtlichen Vorgaben vorzubeugen.

## Energie
An Hand von [10 ausgewählten Grafiken aus 10 Jahren Energy-Charts](https://blog.innovation4e.de/2024/07/26/10-jahre-energy-charts-10-grafiken-zur-energiewende/) kann man die Entwicklung der Energiewende in diesem Zeitraum nachvollziehen.
[Am 1. Juli wurde vermeldet](https://www.heise.de/news/Rekord-58-Prozent-des-Stroms-aus-erneuerbaren-Energien-9784161.html), dass im ersten Halbjahr 2024 erneuerbare Energien rund 58 Prozent des Stromverbrauchs in Deutschland deckten.
Auch beim NDR wird der aktuelle Stand des Ausbaus erneuerbarer Energien [kontinuierlich dokumentiert](https://www.ndr.de/nachrichten/ndrdata/Wie-laeuft-der-Ausbau-von-Solar-Windkraft-Batteriespeicher-Erneuerbare-Energien-in-Deutschland,erneuerbare104.html), auch der Aufbau von Batteriespeichern bleibt nicht unerwähnt.

## Transparenz
Julia Trautendorfer, Lisa Hohensinn, Dennis Hilgers [haben 100.000 Informationsfreiheits-(IFG)-Anfragen über FragDenStaat analysiert](https://onlinelibrary.wiley.com/doi/10.1111/rego.12615), und konnten so bestimmen, wo Behörden am zuverlässigsten antworten (nämlich dort, wo es überhaupt Informationsfreiheitsgesetze und faire Gebührenverordnungen gibt).

Während bei Bürgergeld-Missbrauch sehr genau hingeschaut wird, bleibt der Staat bei der Aufklärung von CumCum- und CumEx-Geschäften [weitestgehend untätig bzw. behindern sie aktiv sogar](https://www.rnd.de/wirtschaft/cumcum-betrueger-welche-behoerde-schuetzte-die-kriminellen-RHWFS4KOQZGZXN2KHS27VERN4E.html%20%20%20via%20https:/chaos.social/@fragdenstaat/112808325961576238). So haben die Finanzbehörden Nordrhein-Westfalens Auskünfte verweigert, mit der unglaublichen Begründung, dass den Involvierten "bei Bekanntwerden ihrer Beteiligung ein nicht unerheblicher Imageschaden, der zudem wirtschaftliche Auswirkungen haben kann" drohe.

## Open Access und Open Science
Um Schülern, unabhängig von der finanziellen Ausstattung ihres Elternhaushaltes, eine gleichberechtigte Vorbereitung auf ihre Abschlussprüfungen zu ermöglichen, [fordert eine Petition von Wikimedia Deutschland und FragDenStaat](https://weact.campact.de/petitions/bildungsgerechtigkeit-statt-privater-profit-alte-prufungsaufgaben-digital-frei-zuganglich-machen), alte Prüfungsaufgaben kostenfrei zugänglich zu machen. Einzelne Bundesländer beweise bereits, dass dies möglich ist.

Im Open Economics Guide vom ZBW – Leibniz-Informationszentrum Wirtschaft in Kiel gibt es ein freies  [Lernmodul zum Thema Open Code](https://openeconomics.zbw.eu/open-code/), speziell an Wirtschaftswissenschafter gerichtet.

Sowohl das [Balkonsolar Buch](https://www.akkudoktor.net/balkonsolar-buch/) als auch das [Handbuch zur Planung flexibler Bedienungsformen im ÖPNV](https://www.bbsr.bund.de/BBSR/DE/veroeffentlichungen/sonderveroeffentlichungen/2023/handbuch-planung-fexibler-bedienungsformen-oepnv.html) vom BBSR stehen als Open Access frei zur Verfügung. Das 
ÖPNV-Handbuch [zeigt dabei](https://www.zukunftsnetzwerk-oepnv.de/aktuelles/news/handbuch-zur-planung-flexibler-bedienungsformen-im-oepnv), wie Rufbusse, Anrufsammeltaxis und andere On-Demand-Verkehre in Räumen mit geringer ÖPNV-Nachfrage geplant werden können.

Zur Stärkung der Open-Access-Bewegung wurde das Projekt [Open Access Datenpraxis](https://oa-datenpraxis.de) von der Deutsche Forschungsgemeinschaft (DFG) [gestartet](https://infomgnt.org/posts/2024-07-01-Vorstellung-OA-Datenpraxis/).

Wie man Forschungsdatensätze im Wissensgraph von OpenAlex auswerten kann, [wird in diesem Webinar erklärt](https://www.youtube.com/watch?v=cKUKXwxAlOM).

Der Online-Speicherdienst für wissenschaftliche Datensätze, [Zenodo](https://de.wikipedia.org/wiki/Zenodo), [wird 11 Jahre alt](https://www.openaire.eu/zenodo-11-years-of-setting-the-standards-of-open-science-excellence).

## Open Source
Der Prototypfund widmet sich in den Folgen der neuen Staffel des Public Interest Podcasts speziell dem Thema "Open Source und Geld". In der [ersten Folge](https://prototypefund.de/pips6e1/) ist das Prototypfund-Team selbst zu Gast, in den anschließenden Folgen sind [Heiko Rintelen von FixMyCity](https://prototypefund.de/pips6e2/), [Mehan Jayasuriya vom Mozilla Technology Fund (MTF)](https://prototypefund.de/pips6e3/), [Leah Oswald von chaos.social](https://prototypefund.de/pips6e4/) und [Erik Albers von foss.events](https://prototypefund.de/pips6e5/) die Interviewten.

Wie kann Open Source Software als Gemeingut nachhaltig erhalten bleiben? Ploum schlägt [in seinem Blog vor](https://ploum.net/2024-07-01-opensource_sustainability.html), Software generell nur noch unter einer Copyleft-Lizenz, wie z.B. [AGPL](https://de.wikipedia.org/wiki/GNU_Affero_General_Public_License), zu veröffentlichen, damit Software, die von dieser Software ableitet, auch wieder frei veröffentlicht werden muss. Damit könne man dem Entstehen von Monopolen entgegen wirken, die zwar auf freier Software basieren, selbst aber ihren Code propriertär unter Verschluss halten, um ihn kommerziell exklusiv zu verwerten und das Abhängigkeitsverhältnis (und ihre Machtposition) aufrechtzuerhalten. Die einzelnen Maintainer zu bezahlen, hält er auch für keine gute Idee, weil es damit die alleinige Verantwortung auf den ursprünglichen Entwickler verlagert, statt die Verantwortung bei allen zu sehen, die Interesse an diesem Gemeingut haben (nicht nur den Feuerwehrmann bezahlen, wenn das eigene Haus brennt). Generell machen wir uns es viel zu bequem, wenn wir uns auf die Monopolisten verlassen.

Der weltweite IT-Ausfall offenbarte, wie verletzlich uns Monopole wie Microsoft machen, [befindet auch Titus Blome auf Zeit Online](https://www.zeit.de/kultur/2024-07/it-stoerung-microsoft-update-infrastruktur-monopol). Denn Infrastruktur ist nur solange unsichtbar, bis sie ausfällt.

In der Hinsicht war auch das xkcd-Cartoon irreführend, da es nur eine einzige Abhängigkeit zeigte. Tatsächlich gibt es vieler solcher kleinen Bausteine, weswegen [die Darstellung des Comics als Fraktal der Realität viel näher kommt](https://cloudisland.nz/users/dillon/statuses/112767541388187298).

Das Team vom Prototypfund erklärt, was der Begriff Nachhaltige Softwareentwicklung [für sie bedeutet](https://prototypefund.de/nachhaltigkeit-ist-mehr-als-nur-gartnerei/). Sie beziehen ihn bewusst auf das komplette Ökosystem der Open Source Software, also auch die Community und Infrastruktur um die eigentliche Software herum.

Im Podcast "Digital leben" findet der Autor Stefan Mey, dass die Philosophie offener Software das Internet [freundlicher macht](https://www.mdr.de/mdr-sachsen-anhalt/podcast/digital/digital-leben-open-source-stefan-mey-gemeinschaftsschule-gernrode-landkreis-harz-100.html
). Außerdem wird eine Schule im Harz vorgestellt, die voll auf Open Source setzt.

Nur wie kann eine dauerhafte Finanzierung von FOSS gewährleistet werden, [fragt sich auch Christian Nähle](https://opendata.okfn.de/books/open-data-in-der-praxis/page/christian-nahle-geschaftsfuhrer-von-do-foss-der-initiative-fur-den-einsatz-freier-und-open-source-software-bei-der-stadt-dortmund), Geschäftsführer von Do-FOSS, der Initiative für den Einsatz Freier und Open-Source-Software bei der Stadt Dortmund. Denn Förderprogramme für FOSS können auslaufen und es droht die Verlagerung der Weiterentwicklung ins Ehrenamt.

So sieht es auch aktuell auch beim EU-Open-Source-Förderprogramm [Next Generation Internet](https://www.ngi.eu) aus, [dessen Finanzierung die EU wohl einstellen wird](https://netzpolitik.org/2024/next-generation-internet-eu-will-open-source-foerderprogramm-wohl-beenden/).

Derweil wird an anderer Stelle das Geld aus dem Fenster geworfen, [findet zu mindestes Bert Hubert auf seinem Blog](https://berthub.eu/articles/posts/gaia-x-is-an-expensive-distraction/) und meint, man solle die Europäische Cloud Initiative Gaia-X einstampfen, weil sie nur vorgeben, etwas Sinnvolles zu tun, tatsächlich sind für die geflossenen Millionen bisher nur ein ein paar Standards und Zertifizierungen entstanden, die niemanden weiterhelfen.

Im [ZENDIS Positionspapier - Digitale Souveränität im Vergaberecht](https://zendis.de/media/site/88445cc92f-1717603153/2024_06_05-zendis_positionspapier-dis-und-vergaberecht_a4_web.pdf) wird der  Vorrang für Open-Source-Software als erforderlich und rechtskonform angesehen. Dennoch spielen Open-Source-Lösungen in der Beschaffungspraxis kaum eine Rolle. Die anstehende Reform des Vergaberechts muss aus Sicht der Autoren sich diesem Problem annehmen.

In der Schweiz ist man da schon viel weiter: deren Regierung [hat nun verfügt](https://www.zdnet.com/article/switzerland-now-requires-all-government-software-to-be-open-source/), dass alle Software die durch und für öffentliche Stellen entwickelt wird, Open Source sein muss, sofern Rechte Dritter oder Sicherheitsbedenken nicht dagegen sprechen.

Da der Prototype Fund auf eine Laufzeit von acht Jahren ausgelegt war, die sich nun dem Ende neigen, wird nun reflektiert, [wie die Förderlogik des Funds gewirkt hat](https://prototypefund.de/wie-der-prototype-fund-wirkt/).

## KI
Mit dem neuen Prototypen [GeoExplorer](https://geoexplorer.odis-berlin.de) der Open Data Informationsstelle Berlin (ODIS) können Nutzer über eine Freitexteingabe ohne (Fach-)Vorkenntnisse das Geodatenangebot des Landes [durchsuchen](https://odis-berlin.de/projekte/2024-07-geoexplorer/). Die zurückgelieferte Ergebnisse werden durch das zu Grunde liegende KI-Sprachmodell nach Relevanz der Datensätze zur Suchanfrage in einem Graphen angeordnet. Relevantere Datensätzen liegen dabei näher am Mittelpunkt, einander ähnliche Ergebnisse liegen auch im Graphen nahe bei einander. Der Blog geoObserver [hat das Tool getestet](https://geoobserver.de/2024/07/17/open-data-und-ki-in-berlin-der-geoexplorer/) und ist mit den Suchergebnissen zufrieden.

Eine Artikelserie bei heise beschäftigt sich damit, wie Ontologien in der Medizin die aktuellen KI-Modelle zuverlässiger und sicherer machen können. Der erste Teil zeigt zunächst, wie sich Sprache in der Medizin [formalisieren lässt](https://www.heise.de/hintergrund/Ontologien-Terminologien-Wie-sich-Sprache-in-der-Medizin-formalisieren-laesst-9794852.html). Im [zweiten Teil](https://www.heise.de/hintergrund/Ontologien-in-der-Medizin-Struktur-und-Erstellung-9797489.html) erfährt man, wie Terminologien aufgebaut sind und algorithmisch angewendet werden können. Im abschließenden Teil werden [konkrete Anwendungsbeispiele](https://www.heise.de/hintergrund/Terminologien-und-Ontologien-Konkrete-Anwendungsbeispiele-9803450.html?seite=all) vorgestellt.

Auf [KI-Kompass](https://www.buzzwoo.de/kuenstliche-intelligenz), dem kostenlosen Vergleichsportal für Large Language Models (LLM), lassen sich rund 40 KI-Sprachmodelle [gegenüberstellen](https://www.heise.de/news/KI-Kompass-vergleicht-rund-40-KI-Sprachmodelle-9794173.html). In der [LMSYS Chatbot Arena](https://chat.lmsys.org) gibt es sogar 71 Sprachmodelle, die gegeneinander antreten können.

Das Kölner Unternehmen [DeepL](https://www.deepl.com/de/translator) hat ein neues Large Language Model (LLM) für seinen Übersetzungsdienst [vorgestellt](https://www.heise.de/news/DeepL-erweitert-sein-Angebot-und-nutzt-grosses-Sprachmodell-fuer-Uebersetzungen-9804667.html).

Microsofts KI [Aurora](https://www.microsoft.com/en-us/research/blog/introducing-aurora-the-first-large-scale-foundation-model-of-the-atmosphere/) kann neben dem Wetter nun auch die Luftverschmutzung [vorhersagen](https://www.heise.de/news/Microsofts-KI-Aurora-ermoeglicht-genaue-Vorhersage-von-Luftverschmutzung-9790082.html) und kann so auch als Frühwarnsystem genutzt werden.

## (Fehlende) Regeln für KI
Dennoch: "Die Schere zwischen dem rasant wachsenden Einsatz von KI-Systemen und den dafür notwendigen Kompetenzen, Standards und Strukturen geht immer weiter auseinander.", [befindet Anke Domscheit-Berg](https://mdb.anke.domscheit-berg.de/2024/07/pm-kleineanfrage-kuenstliche-intelligenz-bund/), nachdem aus einer kleinen Anfrage herausgekommen ist, dass der Bund zwar 2,5 Milliarden Euro für KI-Vorhaben ausgibt, dafür bei Dreiviertel der 212 KI-Anwendungen im Bund Nachhaltigkeitskriterien keinerlei Rolle spielen.

Auch der [D64](https://d-64.org) sieht die Notwendigkeit klarer Regeln für den verantwortungsvollen Einsatz von KI, gerade weil Regelungen wie die gerade am 1. August in Kraft getretene KI-Verordnung (AI Act) [noch viel zu viele Leerstellen lassen](https://netzpolitik.org/2024/ki-verordnung-tritt-in-kraft-durchlaessig-wie-ein-perlenvorhang/). Für den Gebrauch von KI-Anwendungen speziell durch die Zivilgesellschaft selbst möchte der Verein deswegen diese diskursiv in seinem Projekt ["Code of Conduct Demokratische KI" erarbeiten](https://d-64.org/herausforderungen-ki-zivilgesellschaft/).

## KI - ohne Rücksicht auf Verluste
Im seinem [ct-Standpunkt](https://www.heise.de/select/ct/2024/17/2330613153812397752) vergleicht Wilhelm Drehling den aktuellen KI-Hype mit der Goldgräberstimmung vor 128 Jahren. Es "profitieren nicht die Goldgräber, sondern die, die Schaufeln verkaufen". Wurden damals aus purer Gier Wälder abgeholzt und Flüsse verunreinigt, schaden heute unnötige KI-Projekte im großen Maße der Umwelt, indem sie weiter Energie und Wasser verschlingen.

Dabei wird das Wasser auch ganz aus dem Kreislauf gezogen, da es, bevor es zur Kühlung von Datenzentren zum Einsatz kommt, [erst noch chemisch behandelt wird](https://mastodon.green/@gerrymcgovern/112819562862310166), um Korrosion und Bakterienwachstum vorzubeugen.

Ohne Millionen Datenarbeiter:innen würden weder sogenannte Künstliche Intelligenz noch Content-Moderation funktionieren. In einem neuen Projekt [erzählen sie ihre Geschichten](https://netzpolitik.org/2024/data-workers-inquiry-die-versteckten-arbeitskraefte-hinter-der-ki-erzaehlen-ihre-geschichten/).

In ihrem neuen Buch [zeigen die Forscher Nick Couldry und Ulises A. Mejias](https://mastodon.social/@rdoe/112750926404719972), dass es eine neue Form des Kolonialismus gibt - die Ausbeutung von Daten.


* Datenwäsche analog zu Geldwäsche
  Das Speichern von LLMs sind keine personenbezogenen Daten.
  "Also versuche ich am besten nur noch LLMs im Durchlaufverfahren zu erzeugen und alle Ausgangsdaten so schnell wie möglich loszuwerden. Bloß keine Spuren hinterlassen, weil die sind ja personenbezogen."
  https://mastodon.social/@bkastl/112792086348174405
  https://datenschutz-hamburg.de/news/hamburger-thesen-zum-personenbezug-in-large-language-models


* Erster Rechtsstreit zu Datennutzung in KI-Training
  Ein Fotograf verklagt LAION e. V. wegen unrechtmäßiger Nutzung seines Bildes in einem KI-Trainingsdatensatz.
  https://blog.wikimedia.de/2024/07/18/erster-rechtsstreit-zu-datennutzung-in-ki-training-das-sind-die-ersten-ergebnisse/

* "Passwort" Folge 7: Prompt Injections
  https://www.heise.de/news/Passwort-Folge-7-Prompt-Injections-9785133.html
* Modellkollaps – wie synthetische Daten KI killen können
  Generative KI ist nur so gut wie ihre Trainingsdaten. Das Internet ist laut einer Studie dank KI aber bald zu schlecht für KI.
  https://www.heise.de/news/Modellkollaps-wie-synthetische-Daten-KI-killen-koennen-9814434.html
* Bericht: KI-Start-up Anthropic soll unerlaubt Daten abgreifen
  Mehrere Web-Publisher beschuldigen Anthropic, unerlaubt Inhalte für das Training seiner KI-Modelle zu sammeln. Anweisungen, damit aufzuhören, würden ignoriert.
  https://www.heise.de/news/Bericht-KI-Start-up-Anthropic-soll-unerlaubt-Daten-abgreifen-9817584.html

## Datensparsamkeit
* Anonymization: The imperfect science of using data while preserving privacy
  https://www.science.org/doi/10.1126/sciadv.adn7053
* Die NZZ ist nun offiziell eine Microsoft-Datenhändlerin — dem Bund ist das egal
  https://dnip.ch/2024/07/31/die-nzz-ist-nun-offiziell-ein-microsoft-datenhaendler-dem-bund-ist-das-egal/
* PayPal und Kreditkarten: Wer alles weiß, wenn du online bezahlst
  https://netzpolitik.org/2024/paypal-und-kreditkarten-wer-alles-weiss-wenn-du-online-bezahlst/
* Xandr verweigert jede Datenauskunft
  https://netzpolitik.org/2024/beschwerde-von-noyb-xandr-verweigert-jede-datenauskunft/
* Databroker Files
  Neue Recherchen von netzpolitik.org und @br_data zeigen: Datenhändler verkaufen genaue Standortdaten von Millionen Menschen in Deutschland und verschleudern sie teils sogar kostenlos. Ein Datensatz mit 3,6 Milliarden Standorten offenbart genaue Bewegungsprofile und eine neue Dimension der kommerziellen Massenüberwachung. https://netzpolitik.org/2024/databroker-files-firma-verschleudert-36-milliarden-standorte-von-menschen-in-deutschland/
https://interaktiv.br.de/ausspioniert-mit-standortdaten/index.html
  via https://chaos.social/@netzpolitik_feed/112794192732932098
  * Wie Datenhändler Deutschlands Sicherheit gefährden
    https://netzpolitik.org/2024/databroker-files-wie-datenhaendler-deutschlands-sicherheit-gefaehrden/
	auf englisch: https://netzpolitik.org/2024/data-broker-files-how-data-brokers-sell-our-location-data-and-jeopardise-national-security/
  * Wer noch mehr wissen will:
    https://ard.social/@br_data/112794652682282833
  * Dieses Staatsversagen schadet uns allen
    https://netzpolitik.org/2024/databroker-files-dieses-staatsversagen-schadet-uns-allen/s
  * Jetzt testen: Wurde mein Handy-Standort verkauft?
    https://netzpolitik.org/2024/databroker-files-jetzt-testen-wurde-mein-handy-standort-verkauft/
  * Belgischer Datenmarktplatz veröffentlicht Passdaten von Tausenden im Netz
    https://netzpolitik.org/2024/databroker-belgischer-datenmarktplatz-veroeffentlicht-passdaten-von-tausenden-im-netz/
  * ADINT – gefährliche Spionage per Online-Werbung
    https://netzpolitik.org/2024/databroker-files-adint-gefaehrliche-spionage-per-online-werbung/
  * "Die unkontrollierte Branche der Datenhändler stellt eine klare Bedrohung für die nationale Sicherheit dar", schreibt uns Wyden weiter.
    https://netzpolitik.org/2024/databroker-files-us-senator-schaltet-pentagon-ein-bundesministerium-fordert-eu-gesetze/
  * Datarade – geschickte Geschäfte im Graubereich
    https://netzpolitik.org/2024/databroker-files-datarade-geschickte-geschaefte-im-graubereich/
  * Abgeordnete kritisieren Staatsgeld für Datenmarktplatz
    https://netzpolitik.org/2024/databroker-files-abgeordnete-kritisieren-staatsgeld-fuer-datenmarktplatz/
* Bayerns Polizei darf ab August umstrittene Software einsetzen
  Wichtiges digitales Werkzeug für Ermittler oder tiefer Eingriff in Grundrechte? Bayerns Polizei darf ab August die umstrittene Palantir-Software VeRA einsetzen. Das beschloss der Landtag mit den Stimmen von CSU, FW und AfD. Die SPD erwägt eine Klage.
  https://www.br.de/nachrichten/bayern/bayerns-polizei-darf-ab-august-umstrittene-software-einsetzen,UImGMdG
* Preisdiskriminierung: Mastercard & Co unter der Lupe
  Browserverlauf, Aufenthaltsort, Bonität, bisherige Einkäufe und vielleicht der Akkustand fließen in Algorithmen, die Verbrauchern den maximalen Preis abringen.
  https://www.heise.de/news/Ueberwachungskapitalismus-US-Behoerde-untersucht-Preis-Algorithmen-9813941.html

## Wahlen
* Landtagswahlen Sachsen
  * AbgeordnetenWatch Kandidierenden-Check
    https://www.kandidierendencheck.de/sachsen
  * Wahl-o-Mat
    https://www.wahl-o-mat.de/sachsen2024/app/main_app.html
  * WahlSwiper
    https://www.voteswiper.org/de/deutschland/landtagswahl-sachsen-2024
  * VOTO - Kinderrechte Wahlkompass
    https://app.voto.vote/app/13976233
  * Sozial-o-Mat
    https://sachsen.sozial-o-mat.de/sachsen2024
* Landtagswahlen Thüringen
  * AbgeordnetenWatch Kandidierenden-Check
    https://www.kandidierendencheck.de/thueringen
  * Wahl-o-Mat
    https://www.wahl-o-mat.de/thueringen2024/app/main_app.html
  * WahlSwiper
    https://www.voteswiper.org/de/deutschland/landtagswahl-thuringen-2024
  * VOTO - Kinderrechte Wahlkompass
    https://app.voto.vote/app/16370900
  * Sozial-o-Mat
    https://thueringen.sozial-o-mat.de
* Landtagswahlen Brandenburg
  * OSB Alliance Wahlprüfsteine für die Landtagswahl in Brandenburg 2024
    https://osb-alliance.de/featured/wahlpruefsteine-brandenburg-landtagswahl-2024
* KI-basierte Lösung Wahlweise
  Geführte Auswahl mit flexiblen Antworten oder alternativ Interaktiver Chat mit Wahlprogrammen
  https://wahlweise.info
* Kommunal-o-Mat
  https://www.ufu.de/ufu-informationen/kommunalomat/
  https://www.kinder-jugendrat-halle.de/kommunal-o-mat/
  * basiert auf OpenSource-Framework https://open-election-compass.com/de/

## Recap
* FOSS4G Europe 2024 Streams
  https://2024.europe.foss4g.org/schedule/talks/
  * Talk by @edward at #FOSS4GE2024 about bridging #OpenStreetMap and #WikiData:
    https://mastodon.social/@phanecak/112733082860247220
* #GenoDigital Barcamp 2024
  https://genossenschaften.digital/events/barcamp-2024
* Netzwerk Recherche - Jahreskonferenz 2024
  https://www.youtube.com/playlist?list=PL3k-vp8y4t2vMkH1Kb2d-vG1Q6iVBKRMC
  * Datasette: So schwer ist es nicht: Datenbanken für Journalist*innen
    https://github.com/br-data/nr24-datasette
* HACK AND HARVEST Hackathon
  https://cyberlago.net/news/projekt-barriere-sticker-gewinnt-goldene-aehre-beim-sechsten-hack-and-harvest-hackathon/
  https://www.youtube.com/watch?v=rDJFF5Lr9os
* KI und Desinformation: Ein Blick auf die Auswirkungen auf unsere Demokratie (Anmeldung erforderlich)
  https://www.civic-coding.de/angebote/meldungen/ki-und-desinformation

## Veranstaltungen
* Jugend hackt Events im August
  * https://okfn.de/blog/2024/08/sommer-bei-jugend-hackt-ein-buntes-programm-f%C3%BCr-junge-hackerinnen/
* Mittwoch, 07.08.2024, 20:00, online: **Tom Erik Støwer: NPlan, a simple, open source schedule editor to create NeTEx**
  * https://github.com/transportkollektiv/meetup/wiki#welcome-to-the-german-open-transport-meetup-wiki
* Mittwoch, 07.08.2024, bis Samstag, 10.08.2024, Katowice und online: **Wikimania 2024**
  * https://wikimania.wikimedia.org/wiki/2024:Wikimania/en
  * https://www.youtube.com/@TheWikimediaFoundation/playlists
* Samstag, 10.08.2024, 10:00-18:00, Geofabrik, Amalienstraße 44, Karlsruhe: **OpenStreetMap 20th Anniversary Birthday party**
  * https://wiki.openstreetmap.org/wiki/OpenStreetMap_20th_Anniversary_Birthday_party/Karlsruhe
* Montag, 12.08.2024, 19:00-21:00, Wikibär, Köpenickerstr. 45, Berlin: **Code for Berlin**
  * https://www.meetup.com/ok-lab-berlin/events/302123687/
* Dienstag, 13.08.2024, 19:00, Impact Hub, Kaiserstr. 97, Karlsruhe: **Code for Karlsruhe**
  * https://ok-lab-karlsruhe.de/mitmachen/#schedule
* Samstag, 17.08.2024, bis Sonntag, 18.08.2024, Hochschule Bonn-Rhein-Sieg, Grantham-Allee 20, Sankt Augustin: **FrOSCon 2024**
  * https://froscon.org
  * https://programm.froscon.org/2024/index.html
* Dienstag, 20.08.2024, 10:00-11:30, online: **15. Open-Data-Netzwerktreffen**
  * https://www.bertelsmann-stiftung.de/de/unsere-projekte/daten-fuer-die-gesellschaft/projektnachrichten/das-kommunale-open-data-netzwerktreffen#c234826
* Donnerstag, 22.08.2024, 10:00-11:00, online: **Mit Prototyping zu mehr Digitaler Souveränität: Aktuelle Open-Data- und Open-Source-Projekte aus Berlin**
  * https://zendis.usercontent.opencode.de/opencode-events/zendisopen/
* Donnerstag, 22.08, 10:00–11:00, online: **Informationsveranstaltung Förderrichtlinie Open Data Schleswig-Holstein**
  * https://veranstaltungen.dataport.de/infoveranstaltung/sh/foerderrichtlinie-open-data
* Dienstag, 27.08.2024, 12:00-12:30, online: **CDL - Espresso Talk: Geoinformationen für Humanitäre Hilfe**
  * https://www.correlaid.org/veranstaltungen/cdl-espressotalk-geodaten/
* Mittwoch, 28.08, 10:00–11:00, online: **Informationsveranstaltung Förderrichtlinie Open Data Schleswig-Holstein**
  * https://veranstaltungen.dataport.de/infoveranstaltung/sh/foerderrichtlinie-open-data
* Dienstag, 03.09.2024, 11:00-17:30, bUm, Paul-Lincke-Ufer 21, 10999 Berlin: **Prototype Fund: Demo Day der Förderrunde 15**
  * https://prototypefund.de/demo-day/#Programm
* Donnerstag, 05.09.2024, Potsdam: **Barcamp Open Science**
  * https://www.barcamp-open-science.eu
* Freitag, 06.09.2024, bis Sonntag, 08.09.2024, An der Schanz 6, Köln: **Jugend hack Köln***
  * https://jugendhackt.org/events/koeln/
* Freitag, 06.09.2024, bis Samstag, 07.09.2024, Pilatusstrasse 21 / Sempacherstrasse 10, Luzern: **Swiss Open Cultural Data Hackathon "GLAMhack24"**
  * https://www.infoclio.ch/fr/glamhack24-anniversary-edition-last-call-participate
  * https://opendata.hitobito.com/de/groups/5/public_events/10
* Freitag, 06.09, 09:00–10:00, online: **Informationsveranstaltung Förderrichtlinie Open Data Schleswig-Holstein**
  * https://veranstaltungen.dataport.de/infoveranstaltung/sh/foerderrichtlinie-open-data
* Montag, 09.09, 14:00–15:00, online: **Informationsveranstaltung Förderrichtlinie Open Data Schleswig-Holstein**
  * https://veranstaltungen.dataport.de/infoveranstaltung/sh/foerderrichtlinie-open-data
* Freitag, 13.09.2024, 10:00-19:00, Alte Münze, Molkenmarkt 2, Berlin: **Netzpolitik-Konferenz "Bildet Netze!"**
  * https://netzpolitik.org/2024/bildet-netze-jetzt-fuer-konferenz-am-13-september-anmelden/
* Dienstag, 17.09.2024, bis Mittwoch, 18.09.2024, Jakob-Welder-Weg 28, Mainz: **3. Open Science Festival**
  * https://converia.uni-mainz.de/frontend/index.php?sub=153
* Donnerstag, 19.09.2024, bis Samstag, 22.09.2024, Steintorcampus, Emil-Abderhalden-Str. 26/27, Halle (Saale): **Digital History & Citizen Science**
  * https://archive20.hypotheses.org/13460
* Regelmäßige OKLab-Treffen
  * Köln: jeden zweiten Montag, 19:00 (12.8. online, 26.8. Hackländerstr. 2 (Wikipedia Lokal K))
  * Leipzig: jeden Mittwoch, 19:00, Peterssteinweg 14 (Basislager)
  * Münster: jeden Dienstag, 19:30, Wolbeckerstr. 36 (Café Drei:klang)

## Call for participation
* Land.OpenData – Ideenwettbewerb, Einreichungen bis Donnerstag, 15.08.2024
  * https://www.ble.de/DE/Projektfoerderung/Foerderungen-Auftraege/BULE/Foerdermassnahmen/Modellprojekte/Land.OpenData.html
* Deutscher Mobilitätspreis 2024, Abstimmen bis 18.08.2024
  * https://mobilitaetspreis.de/bewerben-vorschlagen/
* Montag, 07.10.2024, bis Donnerstag, 11.10.2024, online: **2024 LD4 Conference: Building Community for Linked Open Data**, Einreichungsfrist Sonntag, 25.08.2024
  * https://docs.google.com/forms/d/e/1FAIpQLSeNg1ZHS7ZjwPyU2pWOXplNJ_Xh-dtMYeetXlNrpgUOmICL8g/viewform
  * https://sites.google.com/view/2024-ld4-conference/home
* Bis zum 26.08.2024 (16 Uhr) können sektorübergreifende und/oder interdisziplinäre Projektverbünde einen Antrag einreichen und sich so die Chance auf bis zu 500.000 Euro zur Umsetzung ihres gemeinwohlorientierten KI-Projektes für die Arbeitswelt sichern.
  * https://www.civic-coding.de/angebote/meldungen/2-foerderrichtlinie-der-civic-innovation-platform
* Die KI-Ideenwerkstatt für Umweltschutz sucht Pilotprojekte, Bewerbungen bis 31.08.2024 möglich
  * https://www.civic-coding.de/angebote/meldungen/die-ki-ideenwerksatt-sucht-pilotprojekte
* Road2Openness – Open-Science-Strategiewerkstatt, bis 15. September 2024 bewerben
  * https://www.stifterverband.org/pressemitteilungen/2024_07_08_road2openness-strategiewerkstatt
* Meet and Code 2024: Veranstaltungsideen jetzt einreichen!
  Sichert euch jetzt 500 € zur Finanzierung eurer Programmierveranstaltung!, Bewerbungsfrist, 30.09.2024
  * https://www.meet-and-code.org/de/de/news-show/700
* NASA International Space Apps Challenge, Hackathon, Registrierung offen, findet 5. und 6. Oktober statt
  * https://www.spaceappschallenge.org
* Im Rahmen des Chaotischen Catalysator Stipendienprogramms können sich Studierende, die eine Master- oder Diplomarbeit schreiben, um ein Stipendium in Höhe von insgesamt 1.500 € bewerben. Gesucht werden Themen, die sich mit den Informationstechnologien dieser Welt und ihren Auswirkungen auf die Gesellschaft beschäftigen. Hinsichtlich der Fachrichtung gibt es keine Einschränkungen. Bewerbungen bis 31.10.2024‚
  https://chaos-stipendien.de/blog/2023/sommer-semester-2024/
  https://chaos-stipendien.de
