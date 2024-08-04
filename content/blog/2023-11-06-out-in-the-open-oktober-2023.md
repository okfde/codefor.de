---
title: "Anspruch(-sdenken) und Wirklichkeit – Out in the Open Oktober 2023"
author: "Jörg Reichert (Code for Leipzig), Tim Fangmeyer (Code for Berlin), et al."
date: '2023-11-06T08:00:00+02:00'
excerpt: Monatlich erscheinender Überblick über Entwicklungen in der Open Data und Civic Tech Szene
topic: community
images:
- imgname: out-in-the-open-2023-10-header.jpg
  attribution: <a href="https://commons.wikimedia.org/wiki/File:Eingangst%C3%BCr_Spielwarenladen_Hocuspocus_in_Leipzig_Lindenau.jpg">Foto</a> von <a href="https://commons.wikimedia.org/wiki/User:ViggieJoe">Jörg Reichert</a> auf <a href="https://commons.wikimedia.org/">commons.wikimedia.org</a>
og_image: out-in-the-open-2023-10-header.jpg
type: blog
---

## Open Data / Barrieren abbauen
Mit öffentlich bereit gestellten Datensätzen zu coden und zu experimentieren sollte so einfach gehalten sein wie möglich. Das erlaubt, dass nicht nur erfahrene Programmierer:innen mit den Daten arbeiten können, sondern z. B. auch Programmieren-Lernende den ersten Schritt in die Welt der Offenen Daten gehen können. Das kann unter anderem durch das Bereitstellen von Code-Vorlagen in den Programmiersprachen #Python und #R geschehen. Nachdem das Team von Open Data Zürich bereits für seine Datensätze sogenannten "Startercode" bereitgestellt hatte, hat nun auch [Bayern nachgezogen](https://it-at-m.github.io/startercode-opendata-munich/). Das Starterkit steht [als Open Source Code bereit](https://github.com/it-at-m/startercode-generator-munich) und kann von anderen Open Data Stellen oder auch NGOs und Unternehmen kostenfrei adaptiert werden.

Um Barrieren abzubauen, darum geht es auch der Open Knowledge Foundation. [Die No-Code-Lösung #OpenDataEditor](https://blog.okfn.org/2023/10/04/introducing-open-data-editor-beta-towards-a-no-code-data-app-for-everyone/) soll dazu dienen, auf einfache Art und Weise verschiedene Daten anschauen, visualisieren und veröffentlichen zu können, ohne dabei gleich Programmieren beherrschen zu müssen. Ein nützliches Werkzeug für die Verwaltung! Das Tool befindet sich momentan noch im Testbetrieb, Feedback ist also gern erwünscht!

## Handbuch Informationsfreiheit
Im Mai 2022 haben [FragDenStaat](https://fragdenstaat.de/) zusammen mit [OpenRewi](https://openrewi.org), einer Initiative für offene Rechtswissenschaft, dazu eingeladen, Beobachtungen und Erfahrungen im Umgang mit dem Informationsfreiheitsrecht in Deutschland frei zugänglich zu teilen.

13 Autor:innen aus Rechtswissenschaft und -praxis sind diesem Aufruf gefolgt. Entstanden ist das [Handbuch für die Informationsfreiheit](https://fragdenstaat.de/blog/2023/10/23/handbuch-informationsfreiheit/). Das Buch ist dabei auch für Nicht-Juristen verständlich geschrieben. Die Erfahrungen, mit welchen Argumenten Behörden versuchen, Informationsfreiheitsanträge abzulehnen und wann es sich lohnt zu klagen, können somit auch zukünftigen Antragsstellern helfen.

Das Besondere am Entstehungsprozess des Buches ist das öffentlich durchgeführte Peer-Review auf [PubPub](https://informationsfreiheit.pubpub.org).

Die aktuell letzte Version des Buches lässt sich nun sowohl [online](https://fragdenstaat.de/recht/handbuch-informationsfreiheit/) als auch [gedruckt](https://www.universitaetsverlag.uni-kiel.de/de/programm/einzelschriften/Informationsfreiheitsrecht) beziehen.


## Open Government Data
Der Schweizer Wetterdienst MeteoSwiss wird ab 2026 seine Daten als [Open Government Data](https://www.meteoswiss.admin.ch/services-and-publications/service/open-government-data.html) frei zur Verfügung stellen. Wie [Andreas Amsler](https://fosstodon.org/@andreasamsler/111176049591783865) berichtet, will man auch hier öffentlich Feedback einholen, ob die bisher angedachten Datenstrukturen und -formate, Detailgrad, Umfang und Veröffentlichungsfrequenz den Ansprüchen der zukünftigen Nutzern entspricht. Der aktuelle Arbeitsstand inklusive Beispielen steht auf [GitHub](https://github.com/MeteoSwiss/publication-opendata#readme) zur Kommentierung und Verbesserung bereit.

## Nutzen von GENESIS-Daten
Auf der Datenjournalismus-Konferenz [SciCAR](https://netzwerkrecherche.org/termine/konferenzen/fachkonferenzen/scicar/) geht [Simon Jockers](https://simonjockers.de) in seinem [Vortrag (pdf)](https://downloads.datengui.de/slides/scicar2023.pdf) auf die aktuellen Einschränkungen beim (automatisierten) Datenabruf der GENESIS-Portale, unter anderem beim [GENESIS-Online](https://www-genesis.destatis.de/genesis/online), der Datenbank des Statistischen Bundesamtes, ein. Teilweise werden diese in der [Beta-Version des neuen GENESIS-Online](https://www-genesis.destatis.de/datenbank/beta/) behoben. Simon zeigt [beispielhaft](https://github.com/sjockers/genesis-api-example/tree/main) auf, wie man die neue API nutzen kann.

Michael von [wahlatlas.net](https://wahlatlas.net) hat auf Grundlage dieses Tutorials eine [Auswertung](https://wahlatlas.net/experimente/strom/) der monatlichen Ein- und Ausfuhren von Strom zwischen Deutschland und seinen Nachbarn
[erstellt](https://norden.social/@wahlatlas/111195489942613386).

## Energie / Klima
Weitere Auswertungen zum Thema Energie gibt es, wie [Lalon Sander](https://chaos.social/@lalonsander/111283510837909289) schreibt, beim [Energiewende-Tracker](https://www.ndr.de/nachrichten/ndrdata/Wie-laeuft-der-Ausbau-erneuerbarer-Energien-in-Deutschland,erneuerbare104.html) des NDR, mit der Erkenntnis "Solar läuft gut, Wind nicht so".

Dazu passt dann auch die [Antwort](https://fragdenstaat.de/anfrage/pruefung-der-verfassungsmaessigkeit-der-eigenen-klimaschutzpolitik/840812/anhang/231009-uig-antragschnberger_geschwaerzt.pdf) des Bundesministeriums für Wirtschaft und Klimaschutz (BMWK) auf Anfrage "ob die aktuelle Klimaschutzpolitik der Bundesregierung den verfassungsrechtlichen Vorgaben entspricht" oder angehoben werden müssten: "Entsprechende Informationen im Hinblick auf die verfassungsrechtliche Notwendigkeit der Anhebung der Ziele des Klimaschutzgesetzes sowie im Hinblick auf die Frage, ob das Klimaschutzprogramm 2023 den verfassungsrechtlichen Vorgaben genügt, sind in unserem Hause jedoch nicht verfügbar." [FragDenStaat](https://chaos.social/@fragdenstaat/111256731154861374) nennt es auch "Erfrischende Ehrlichkeit".

Mehr erreicht haben da zivilgesellschaftliche Initiativen wie der [Wattbewerb](https://wattbewerb.de/). Der [Wattbewerb-Blog](https://wattbewerb.de/die-energiewende-nimmt-fahrt-auf-erste-phase-von-wattbewerb-endet/) verkündet jetzt stolz das Ende der ersten Phase, da das gesetzte Ziel des Wettbewerbs, also den Watt Peak pro Einwohner:in zu verdoppeln, nun von der ersten Großstadt erreicht wurde: in Bergisch-Gladbach steigerte sich der Wert der Watt Peak pro Einwohner:in von 111 auf 222.

Noch bis Ende Jahres können die für die ersten Runde angemeldeten Kommunen ihre Daten aus dem Marktstammdatenregister prüfen bzw. vom Netzbetreiber prüfen lassen, damit das Endergebnis auf einer möglichst hohen Datenqualität beruht. An Hand der [Dashboards](http://dashboard.wattbewerb.de/) bzw. [Rankings](https://plattform.wattbewerb.de/ranking) werden im Januar die Gewinnern in den einzelnen Kategorien ermittelt und voraussichtlich im Juni 2024 in einer Siegerehrung gewürdigt. Die Planungen für Wattberb 2.0, der im Laufe von 2024 starten sollen, rollen bereits an.

Dass Datenqualität und überhaupt die Verfügbarkeit aktueller Daten absolut notwendig für richtige  Entscheidungen über Energieeffizienz und Sanierungen von Gebäuden sind, thematisiert ein [RESET-Artikel](https://reset.org/energiecheckpoint-wie-energieeffizient-sind-berlins-oeffentliche-gebaeude/). So stammen die OpenData-Datensätze im OpenSource-Projekt [Berliner EnergieCheckpoint](https://odis-berlin.de/projekte/energiecheckpoint/) für die Energieverbrauchsübersicht aus 2020 und die Daten für den Sanierungsfahrplan vom Mai 2022. Im Münsteraner Projekt [Thermografiebefliegung](https://smartcity.ms/projekt-thermografiebefliegung-erfolgreich-abgeschlossen/) wurde die Energieeffizienz von Dächern und Gebäuden mit Überflug-Wärmebildern bewertet. Die darauf folgende Informationskampagne hat den Eigentümer:innen ihr Energieeinsparpotenzial ins Bewusstsein gerückt. Es kam zu einer Verdreifachung der Energieberatungen. (Offene) Daten wirken!

Ein Beitrag zur Aufklärung leistet auch der [CO2-Rechner](https://interaktiv.br.de/co2-rechner/) von [BR Data](https://www.br.de/extra/br-data/index.html). So erfahren wir anschaulich, was Heizungstausch, Flugverbot und Tempolimit tatsächlich bringen. Die [Guidelines](https://blog.datawrapper.de/remind-readers-of-colors-in-data-vis/) hinsichtlich Farbgebrauch in Visualisierungen wurden hier auf jeden Fall eingehalten.

## Mobilitätsdaten
Von [Fair Spaces](https://fair-spaces.de) [gibt](https://mstdn.social/@FairSpaces/111220481762600219) es mit dem [Mobilitätsdatencheck](https://fair-spaces.de/md/) ein interaktives Werkzeug, mit dem man für eine Kommune aufgezeigt bekommt, welche Daten noch fehlen, um Mobilität gerecht und nachhaltig zu planen - und wie diese Daten-Lücken zu schließen sein könnten.

Passend dazu veröffentlichte das Bundesinstitut für Stadt-, Bau- und Raumforschung (BBSR) die [Pendlerzahlen für 2022](https://www.bbsr.bund.de/BBSR/DE/presse/presseinformationen/2023/pendeln-2022.html). So hatten 2022 7,1 Millionen Pendlerinnen und Pendler einen mehr als 30km langen Arbeitsweg, 2021 waren es nur 6,6 Millionen.

Die Pendlerströme haben auch Auswirkungen auf Fragen der Flächengerechtigkeit. [Anna Loffing](https://social.ridetrans.it/@annaloffing/111295556942577951) macht auf das Tool [Fair Spaces Index](https://fair-spaces.de/fsi/) (ebenfalls von Fair Spaces) aufmerksam, mit dem Kommunen die jetzige Aufteilung des Straßenraums einer alternativen gerechteren Aufteilung gegenüberstellen können (gesteuert durch die Auswahl bestimmter Parameter).

## Gewerbe-Daten
Mit [Branchenpuls](https://www.branchenpuls.berlin) hat die [Open Data Informationsstelle Berlin (ODIS](https://odis-berlin.de) eine neue OpenSource-Anwendung [veröffentlicht](https://odis-berlin.de/projekte/branchenpuls/), mit der man die Gewerbelandschaft Berlins auf Basis der [Gewerbedaten der IHK Berlin](https://github.com/IHKBerlin/IHKBerlin_Gewerbedaten#dataset-description) erkunden kann. Wie allerdings [Tobias Jordans](https://en.osm.town/@tordans/111169751603422129) richtigerweise anmerkt, fehlen im Datensatz wichtige Informationen, um einen Abgleich mit z.B. OpenStreetMap durchführen zu können. Der fehlende Unternehmensname wird in den [FAQ der IHK](https://www.ihk.de/berlin/service-und-beratung/digitalisierung/faqs-gewerbedatensatz-5927056#titleInText0) mit Datenschutzbedenken begründet. Schade eigentlich, denn so wird auch die aktuelle und historische Auswertungen von Unternehmens- und Personen-Netzwerken, wie es unter anderem Webseite wie z.B. [North Data](https://www.northdata.de) auch kostenlos ermöglichen, erschwert. Auch einen möglichen Eintrag einer Firma im [Lobbyregister](https://www.lobbyregister.bundestag.de/startseite) findet man so nicht.

Ein weiterer Anwendungsfall [Leerstand / Neuvermietung in Innenstädten zu tracken](https://chaos.social/@iwmm/111255339801023821), für den ein Nutzer bei Mastodon Unterstützung erfragt, könnte mit besserer Datenlage umsetzbar sein - auch wenn im Thread auf Tools wie [YellowOSM](https://yellowosm.com) oder eine entsprechende Overpass-Query, die auf Einträge in OpenStreetMap mit den Attributbelegungen shop=vacant oder disused=yes prüft, hingewiesen wird.

## Knowledge Graphs / Linked Open Data
Wie man sieht, kann man durch Verknüpfung verschiedenster Datenquellen, viele Erkenntnisse gewinnen. Wie man Daten bereitstellen muss, damit solche auswertbaren Knowledge Graphs entstehen können, kann man unter anderem in diesem kostenlosen [Online-Kurs](https://open.hpi.de/courses/knowledgegraphs2023) vom Hasso-Plattner-Institut (HPI) lernen.

Solche Linked Open Data findet dann konkret Anwendung z.B. beim Digitalisieren von [Sammlungen in Museen](https://www.glam-goes-opendata-bw.de/edit-a-thon-kulturerbe-auf-reisen/) oder bei [Haushaltsdaten](https://open-north.de/blog/2023-10-05_haushaltsdaten/).

## Kartendaten
Ab Oktober stehen die [Dienste und Produkte von basemap.de](https://gdz.bkg.bund.de/index.php/default/solr/search/index/?q=basemap), also die amtlichen Karten von Deutschland, unter Open Data Lizenzierung [bereit](https://basemap.de/basemap-de-mit-open-data-lizensierung/). Wenn man allerdings auf die [Nutzungsbedingungen (pdf)](https://sgx.geodatenzentrum.de/web_public/gdz/lizenz/deu/Nutzungsbedingungen_basemapde.pdf) blickt, stellt man fest, dass die Daten als CC BY 4.0 lizenziert sind und damit [nicht kompatibel](https://blog.openstreetmap.org/2017/03/18/benutzung-von-cc-by-4-0-daten-in-openstreetmap/?lang=de) mit OpenStreetMap sind, wie [hier auch angemerkt](https://en.osm.town/@mcliquid/111240842268887293) wird.

Von Lars Lingner gibt es einen [Bericht vom OpenStreetMap HackWeekend Berlin](https://www.fossgis.de/news/2023_10_22_hackweekend_berlin/) vom 14. und 15. Oktober 2023.

Wer in seiner Anwendung noch die Hintergrundkarten-Tiles von "Stamen" verwendet, muss ab dem 1.11. auf [Stadia migrieren](https://docs.stadiamaps.com/guides/migrating-from-stamen-map-tiles/). Zu den Hintergründen informiert das [FAQ](http://stamen.com/faq) auf der Stamen-Webseite.

Wer Geodaten, speziell solche im OSM-PBF-Format bequem programmatisch auswerten möchte, bekommt bei [GeoDesk](https://www.geodesk.com) nun auch die [Unterstützung für Python](https://en.osm.town/@geodesk/111334702022069518).

Ebenfalls mit Python arbeitet das neue Tool [BikeDNA](https://github.com/anerv/BikeDNA), wie [Robin Lovelace](https://fosstodon.org/@robinlovelace/111341695325449168) informiert. Mit BikeDNA lässt sich die Qualität von OpenStreetMap und anderen Fahrrad-Infrastruktur-Datensätzen auswerten.

Eine weiterer interessanter Karten-Dienst ist [Protomaps](https://protomaps.com), wie [Daniel nochmals betont](https://chaos.social/@djh/111280447304607540).

## Verbraucherschutz
Über die Seite [Heisse Preise](https://heisse-preise.io/) hatten wir erstmals in unserer [Mai-Ausgabe](https://codefor.de/blog/out-in-the-open-mai-2023/) berichtet. Damals war die Seite noch ein Prototyp und es war noch nicht klar, ob sie verboten werden würde. Das Angebot ist nun deutlich gewachsen, wie [ein Artikel im Oktober bei wired.com](https://www.wired.com/story/heisse-preise-food-prices/) berichtet. Im Gegensatz zu schon existierenden Preisvergleichsportalen stehen die Preisentwicklungsdaten als Open Data zur Verfügung und erlauben somit erstmals wissenschaftlichen Einrichtungen makro- und mikroökonomischen Studien durchzuführen. Außerdem schaffen sie mehr Transparenz bei den Preisanpassungsstrategien der einzelnen Lebensmittelgeschäften.

Im [Oktober-Podcast von Anke Domscheidt-Berg](https://mdb.anke.domscheit-berg.de/2023/10/der-adb-podcast-22/) wird unter anderem auf die [Open Data Aktivitäten](https://www.ble.de/DE/BZL/Open-Data/open-data_node.html;jsessionid=B9E13F54C54EAAFE8B5725CAD55D541B.internet992) der [Bundesanstalt für Landwirtschaft und Ernährung (BLE)](https://www.ble.de/) hingewiesen, die ein [eigenes Open-Data-Portal](https://open-data.ble.de/dataset/?q=&sort=metadata_modified+desc) betreibt. Außerdem wird das [Bundesinformationszentrum Landwirtschaft](https://www.bzl-datenzentrum.de/) erwähnt, bei dem man beispielsweise die [Entwicklung viehhaltender Betriebe in Deutschland](https://www.bzl-datenzentrum.de/betrieb/tierhaltende-betriebe/tierhaltende-betriebe) findet.

## Einreichfristen
 * Mittwoch, 08.11.2023: **NIAM 2024** (Tagung zum Austausch zwischen unterschiedlichsten Nutzer:innen kartografischer Elemente, zum Beispiel aus dem Datenjournalismus, der Kartografie und der Infografik)
   * https://news-infographics-analytics-maps.media/2024_call.html
 * Samstag, 11.11.2023 (23:59 UTC): **Einreichungsende 37C3**
   * https://content.events.ccc.de/cfp/37c3/index.de.html
       * https://frab.cccv.de/de/37c3/cfp

## Veranstaltungen
 * Mittwoch, 01.11.2023, 20:00 - 21:30 Uhr, online: **OpenTransportMeetup** mit Tim Schulz: "SMueR - Mobilitätsstationen im ländlichen Raum"
   https://hackmd.okfn.de/opentransportmeetup
 * Freitag, 03.11.2023, bis Samstag, 04.11.2023, Uni-Audimax, Lübeck: **Night of open Knowledge (NooK)**
   * https://2023.nook-luebeck.de
 * Dienstag, 07.11.2023, bis Donnerstag, 09.11.2023, Messe, Berlin: **Smart Country Convention**
   * https://www.smartcountry.berlin/
 * Freitag, 10.11.2023, bis Sonntag, 12.11.2023, Leiterstr. 10 Magdeburg: **CorrelAid Correlcon**
   * https://www.correlaid.org/en/events/correlcon-2023/
 * Montag, 13.11.2023, oder alternativ Donnerstag, 23.11.2023: **GLAM goes Open Data: Wikidata-Editathon**
   * https://eveeno.com/glam-goes-open-data-editathon
 * Mittwoch, 15.11.2023, 20:00 - 21:30 Uhr, online: **OpenTransportMeetup** mit Timo Hoffmann: Nationale Stelle für Verkehrs- und Mobilitätsdaten
   https://hackmd.okfn.de/opentransportmeetup
 * Freitag, 24.11.2023, Motion Lab, Berlin: **Vorstellung Civic Data Lab Berlin**
   * https://www.linkedin.com/posts/civic-data-lab_daten-zivilgesellschaft-berlin-activity-7110963454470955010-ZDhV
 * Samstag, 25.11.2023, VHS, Wuppertal: **OKNRW-Barcamp**
   * https://oknrw.de/veranstaltungen/offene-kommunen-nrw-2023/
