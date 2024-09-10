---
title: "Solastalgie – Out in the Open August 2024"
author: "Jörg Reichert (Code for Leipzig)"
date: '2024-09-09T08:00:00+02:00'
excerpt: Monatlich erscheinender Überblick über Entwicklungen in der Open Data und Civic Tech Szene
topic: community
images:
- imgname: out-in-the-open-2024-08-header.jpg
  attribution: Eigene Aufnahme (Jörg Reichert, 31.07.2024 in Darmstadt)
og_image: out-in-the-open-2024-08-header.jpg
type: blog
---

## Linked Open Data im Praxistest
Anderthalb Jahre haben mehrere Einheiten der Züricher Verwaltung Erfahrungen mit Linked Open Data (LOD) gesammelt. Die Ergebnisse diskutieren Rebekka Plüss (Staatsarchiv) und Laure Stadler (Fach- und Koordinationsstelle OGD des Statistischen Amts) in einer Podcastfolge, die neben dem [Abschlussbericht](https://www.zh.ch/content/dam/zhweb/bilder-dokumente/themen/politik-staat/offene-behoerdendaten-nutzen/Abschlussbericht%20LOD%20Erprobung_public.pdf) auch [hier mit verlinkt ist](https://www.zh.ch/de/news-uebersicht/mitteilungen/2024/politik-staat/statistik/linked-open-data-auf-dem-pruefstand.html). So wurde festgestellt, dass die Publikation von Linked Open Data grundsätzlich machbar ist, und diese so veröffentlichten Daten auch genutzt werden, allerdings ist der Aufbereitungsaufwand in vielen Fällen höher als der Bedarf, so dass die OGD vorerst auch keine dezidierte Linked-Data-Infrastruktur zur Verfügung stellen wird. Ein Problem der kritischen Masse, denn Linked Data ist immer noch ein Nischenthema. Dadurch gibt es zu wenige vordefinierte Ontologien, die als Anknüpfungspunkte für die eigene Ontologie dienen können. Sowohl für diejenigen, die die Daten als Linked Open Data veröffentlichen wollen als auch für jene, die diese Daten später nutzen wollen, ist die Lernkurve sehr steil. Das liegt auch an der ungenügenden Werkzeugunterstützung. Die vorhandenen Tools abstrahieren zu wenig von den Grundlagen, unterstützen die Nutzer zu wenig durch geeignete Usability, (Teil-)Automatisierung und intelligenten Vorschlägen bei der Dateneingabe (bzw. auch sinnvolle Verknüpfung auf Konzepte bestehender Ontologien). So fällt es schwer, den Kreis an Linked-Data-Interessierten zu erweitern, wenn alles noch so mühsam und nicht selbsterklärend ist. Der Wert von Linked Open Data wurde aber prinzipiell erkannt. So hofft nun man nun auf den Prototypen der Bundeskanzlei, mit dem die Haltung von Stammdaten als Linked Open Data getestet werden soll. In dessen Rahmen ist auch sowohl der weitere Aufbau  von LOD-Wissen und eine Speicher-Infrastruktur geplant. Je mehr Verwaltungen Linked Open Data veröffentlichen, desto größer die Motivation auch für andere Verwaltungen diese Datentechnologie ebenfalls bei sich zu adaptieren. Als Inspiration kann der bei der Evalutation entstandene Datensatz über die Zürcher Ehedaten der frühen Neuzeit dienen, der ist über [Github abrufbar](https://github.com/stazh/sw-ehedaten) ist. 

In einer [Hands-On-Session](https://wikimania.eventyay.com/2024/talk/DVA9J8/) wurde auf der Wikimania in Katowice mit dem Open Data Editor, ein Werkzeug vorgestellt, das das Leben zu mindestens von Open Data Publishern erleichtern soll. Mit diesem können Techniker aber eben auch Nicht-Techniker Datensätze erstellen ohne dabei eine einzige Zeile Code schreiben zu müssen. Die so erzeugten Datensätze folgen dennoch den FAIR-Prinzipien, sind also qualitativ hochwertig.

Für die potenziellen Nutzer von offenen Daten, speziell aus dem Forschungsbereich, schwebt Andrea Bertino ein verbessertes Vorschlagssystem bei der Suche vor. In seinem [Artikel](https://www.degruyter.com/document/doi/10.1515/bfp-2023-0059/html) aus der Zeitschrift "Bibliothek Forschung und Praxis" stellt er sich die Frage, wie das Konzept "[Serendipität](https://de.wikipedia.org/wiki/Serendipity)", also die "Gabe, unerwartete, zufällige oder glückliche Entdeckungen zu machen", auch bei der Suche in offenen Daten helfen kann. Viele Vorschlagsalgorithmen neigen zu Verzerrungen, wie z.B. dem [Confirmation Bias](https://de.wikipedia.org/wiki/Best%C3%A4tigungsfehler) oder dem [Popularity Bias](https://computersciencewiki.org/index.php/Popularity_bias). Speziell im Open Data Umfeld kommt noch der Metadata Quality Bias hinzu, also wenn Einträge nicht gefunden werden, weil bei ihnen Metadaten fehlen oder fehlerhaft sind, und dadurch keine relevanten Verbindungen zu anderen Daten hergestellt werden können. Einige der identifizierten Maßnahmen für mehr Serendipität sollen nun für den [Open Data Navigator](https://opendatanavigator.switch.ch/) Prototypen, eine Entdeckungsplattform für Open Data, die im Rahmen des Schweizer [Connectome](https://www.switch.ch/en/about/innovation)-Projekts entstanden ist, umgesetzt werden.

Metadatenqualitätsmanagement bleibt aber oftmals Handarbeit, wie auch in [diesem Fall](https://gruene.social/@mathias/112971972016366770), wo Lizenzangaben der Datensätze bei der Aggregation verloren gegangen sind oder auch schon unbewusst ungünstig vom Ersteller gesetzt worden sind, durch Nachfrage aber noch korrigiert wurde. Dann gibt es auch [Kudos](https://gruene.social/@mathias/113033220932399361).

Das Bundesministerium für Ernährung und Landwirtschaft (BMEL) hat eine neue [Leitlinie](https://www.bmel.de/DE/ministerium/organisation/leitlinien-open-data.html) zur Veröffentlichungen von Open Data in seinem Geschäftsbereich [veröffentlicht](https://social.bund.de/@opendatabund/112994109899175186). Eine Open Data Plattform soll später unter open.ble.de erreichbar sein, bisher existiert mit [OpenAgrar](https://www.openagrar.de/content/index.xml) ein Publikationsserver.

Dagegen sind nun offene Daten von und aus Bamberg auf [bamberg.bydata.de](https://bamberg.bydata.de/?locale=de) [neuerdings](https://social.bund.de/@opendatabund/112999600220393312) einzusehen.

Für Verwaltungen, die sich noch mit dem Konzept Open-By-Default schwer tun, gibt der [Musterdatenkatalog](https://www.bertelsmann-stiftung.de/de/unsere-projekte/smart-country/musterdatenkatalog) Orientierung, welche Daten überhaupt als Open Data veröffentlichen können bzw. welche gegenüber anderen Kommunen bei ihnen noch in der Veröffentlichung fehlen (oder noch nicht entsprechend mit einem Musterdatensatz annotiert sind). Mit der letzten [Aktualisierung](https://www.bertelsmann-stiftung.de/de/unsere-projekte/daten-fuer-die-gesellschaft/projektnachrichten/der-musterdatenkatalog-waechst-auf-rund-30000-datensaetze-an) des Katalogs Ende August sind 70 Kommunen und 5.000 weitere offene Datensätze hinzugekommen, so dass nun 30.000 Datensätze enthalten sind (ohne dass hierbei Quantität unbedingt für Qualität spricht).

Wenn man sich für die Standorte von Schwimmbädern interessiert, findet man für die Kategorie "Bad und Freibad" aktuell 69 Treffer im Musterdatenkatalog (teilweise Standorte, teilweise Besucherzahlen, teilweise als Teil aller Sportstätten, aber auch offensichtliche Fehltreffer mit "Tennisanlagen"). Für z.B. Kiel gab es hier allerdings keine Suchtreffer. Dafür wird man aber in der [Liste aller Schwimmbäder in Schleswig-Holstein](https://opendata.schleswig-holstein.de/dataset/schwimmbader-in-schleswig-holstein) (Stand 2023) fündig. Diese ist seit Ende August auf dem Open Data Portal des Bundeslandes zu finden.

* CKAN 2.11 veröffentlicht
  https://blog.okfn.org/2024/08/21/ckan-2-11-hypermedia-approach-for-the-tech-we-want/
* Free Public APIs · A comprehensive API list with endpoints checked daily 
  https://www.freepublicapis.com
  via https://mastodon.social/@inautilo/113038460793650430

## KI
* Warum Offenheit bei Künstlicher Intelligenz (KI) für Bildung und Wissenschaft wichtig ist
  https://open-access.network/blog/warum-offenheit-bei-kuenstlicher-intelligenz-ki-fuer-bildung-und-wissenschaft-wichtig-ist
* Linux Foundation Backs Open Source LLM Initiative
  https://thenewstack.io/linux-foundation-backs-open-source-llm-initiative/
* Chatbots bringen noch immer viele Falschinformationen in Umlauf
  https://algorithmwatch.org/de/chatbots-bringen-noch-immer-viele-falschinformationen-in-umlauf/
* When A.I.’s Output Is a Threat to A.I. Itself
  https://www.nytimes.com/interactive/2024/08/26/upshot/ai-synthetic-data.html
* ChatGPTs Stromverbrauch: Zehnmal mehr als bei Google
  https://www.heise.de/news/ChatGPTs-Stromverbrauch-Zehnmal-mehr-als-bei-Google-9852126.html
* kotaemon: An open-source RAG-based tool for chatting with your documents.
  https://github.com/Cinnamon/kotaemon
* RAG techniques: showcases various advanced techniques for Retrieval-Augmented Generation (RAG) systems. RAG systems combine information retrieval with generative models to provide accurate and contextually rich responses.
  https://github.com/NirDiamant/RAG_Techniques
* KI Leitfaden und Projekte in Züricher Verwaltung
  https://www.zh.ch/de/politik-staat/kanton/kantonale-verwaltung/digitale-verwaltung/kuenstliche-intelligenz.html

## Citizens Science
* Open CALL for Citizen Observatories across Europe!
  https://citiobs.eu/demonstrations-open-call-for-alliances/
  via https://chaos.social/@schenklklopfer/112903479643138919
* NASA Citizen Scientists Spot Object Moving 1 Million Miles Per Hour
  https://science.nasa.gov/get-involved/citizen-science/nasa-citizen-scientists-spot-object-moving-1-million-miles-per-hour/
* Mitmachen bei #unsereFlüsse!
  https://www.swr.de/home/unsere-fluesse-formular-100.html

## Methodik
* Anonymization: The imperfect science of using data while preserving privacy
  https://www.science.org/doi/10.1126/sciadv.adn7053
  via https://mastodon.social/@leibnizopenscience/112892314086095800

## Open Source
* Vom Lockdown zum Lock-in: Warnung vor Software-Abhängigkeit im Gesundheitswesen
  https://www.heise.de/news/Vom-Lockdown-zum-Lock-in-Warnung-vor-Software-Abhaengigkeit-im-Gesundheitswesen-9822830.html
* Warum Schulen und Freie Software gut zusammenpassen
  https://netzpolitik.org/2024/oeffentliches-geld-oeffentliches-gut-warum-schulen-und-freie-software-gut-zusammenpassen/
* Kaum Open-Source-Projekte: FDP-Minister reißen eigenes Digital-Ziel
  https://www.zdf.de/nachrichten/politik/digitalisierung-verwaltung-open-source-software-fdp-ampel-100.html
  * Kein Public Money, public code beim Bund
    https://mdb.anke.domscheit-berg.de/2024/08/ampel-ohne-public-money-public-code/
  via https://linke.social/users/ankedb/statuses/112927959910631895
* Digital unsouverän: Bundesregierung legt sich an Broadcoms Kette
  https://netzpolitik.org/2024/digital-unsouveraen-bundesregierung-legt-sich-an-broadcoms-kette/

## Open Source Anwendungen
* Die Smart Village App ist ein Open Source App Baukasten für Kommunen. Was diese App alles kann, habe ich mit Philipp Wilimzig ausführlich besprochen.
  https://egovernment-podcast.com/egov190-smart-village-app/
* Simulate and visualize the solar potential on 3D building data
  https://www.openpv.de (nur für Bayern aktuell)
  https://github.com/open-pv/
* Weiterentwicklung und den Betrieb der Enterprise Edition von #openDesk
  https://zendis.de/ressourcen/zendis-erteilt-zuschlag-fuer-rahmenvertrag-fuer-opendesk-enterprise-edition-und-saas-angebot
  via https://mastodon.social/@b1systems/113034291383054045
* make-nxm - A bash script to facilitate flyer production from a picture
  https://github.com/Wikinaut/make-nxm
  via https://chaos.social/@tbsprs/113035436427209860
* Propcorn - A public good for micro-funding small features
  https://github.com/deeecent/propcorn
  via https://chaos.social/@tbsprs/113035718095424214
* Invisible Stitch: Generating Smooth 3D Scenes with Depth Inpainting
  https://research.paulengstler.com/invisible-stitch/
  via https://chaos.social/@tbsprs/113035589142173101
* Die neue Version des in Runde 12 des Prototype Fund geförderten Leerstandsmelder ist da - Neues Design, neue Inhalte:
  https://leerstandsmelder.in
  via https://mastodon.social/@PrototypeFund/113040398033117121

## Open Source Hardware
* OpenScan - A low-cost, high-quality 3D scanner that you can build yourself - completely open source and modular
  https://openscan.eu

## Open Science
* Im Open Economics Guide bietet die ZBW einen übersichtlichen Katalog von über 100 aktuellen Open-Science-Tools an, die alle kostenlos nutzbar sind!
  https://openeconomics.zbw.eu/knowledgebase/open-science-tools/
* Neue Formen der Open-Access-Finanzierung. Best Practices auf dem Weg zum Informationsbudget und zu alternativen Finanzierungsmodellen für Diamond Open Access
  https://zenodo.org/records/13271363
* Das Partyspiel "Research Data Scarytales" vom Thüringer Kompetenznetzwerk Forschungsdatenmanagement
  https://forschungsdaten-thueringen.de/fdm-scarytales/articles/ueberblick.html
  via https://chaos.social/@derbruesseler/113051218594731297
* Openness an Hochschulen verankern mit dem OER-Policy Kit
  https://open-access.network/blog/openness-an-hochschulen-verankern-mit-dem-oer-policy-kit

## Karten
* Fehlende Gebäude identifizieren
  https://maproulette.org/browse/challenges/48757
  via https://mastodon.social/users/eliasp/statuses/112903692496850650
* Organic Maps is a free Android & iOS offline maps app for travelers, tourists, hikers, and cyclists. 
  https://github.com/organicmaps/organicmaps
* 20 Jahre OpenStreetMap! Gratulation!
  https://geoobserver.de/2024/08/09/20-jahre-openstreetmap-gratulation/
  * One man decided to take on Google Maps; 20 years later OpenStreetMap is still going strong
    https://techcrunch.com/2024/08/10/one-man-decided-to-take-on-google-maps-20-years-later-openstreetmap-is-still-going-strong/
    * The Days Are Long but the Years Are Short
      https://stevecoast.substack.com/p/the-days-are-long-but-the-years-are
    via https://techhub.social/@GregCocks/112972756506091434
* Applied Geostatistics in Python - A Hands-on Guide with GeostatsPy
  https://geostatsguy.github.io/GeostatsPyDemos_Book/intro.html
  via https://techhub.social/@GregCocks/112961668676642715
* A Gentle Introduction to GDAL Part 8: Reading Scientific Data Formats
  https://medium.com/@robsimmon/a-gentle-introduction-to-gdal-part-8-reading-scientific-data-formats-1a1f70d5388c
* Der Landcover Austria-Atlas – Landschafts- und Lebensräume im regionalen Kontext
  https://www.opendataportal.at/der-landcover-austria-atlas-landschafts-und-lebensraume-im-regionalen-kontext/
* Nur eine Karte zeichnen
  https://open-north.de/blog/2024-08-28_nur_eine_karte/
* "Mont" ist eine Mobile-only-Webpage mit lediglich 11 Kilobyte reinem Programmcode, die eine Kameraansicht der umgebenden Landschaft bietet, die lokale Topografie berechnet und die Namen aller sichtbaren Hügelkuppen und Berggipfel (einschliesslich ihrer Gipfelhöhe und Entfernung) anzeigt. Zusätzlich gibt ein Kompass die aktuelle Blickrichtung an, ein Höhenmesser die Meereshöhe des aktuellen Standorts.
  https://opendata.swiss/de/showcase/mont
  Quellcode: https://www.thomasweibel.ch/mont2/js/script.js
  via https://swiss.social/users/thomasweibel/statuses/112955740139487021


## Energie
* Energieverbrauch von (OpenSource-) Software senken
  https://chaos.social/@isotopp/112902081363470261
  https://lowcarbon.software
* Electricity Maps
  https://app.electricitymaps.com/zone/DE
* Free the smart-meter data!
  https://www.volts.wtf/p/free-the-smart-meter-data
  via https://social.coop/@ZaneSelvans/112939095661147564

## Mobilität
* Deutsche Bahn gibt Verkehrsdaten an Mobilitätsplattformen weiter
  https://www.heise.de/news/Deutsche-Bahn-gibt-Verkehrsdaten-an-Mobilitaetsplattformen-weiter-9836073.html?wt_mc=sm.red.ho.mastodon.mastodon.md_beitraege.md_beitraege&utm_source=mastodon
* How bicycle friendly is Germany
  https://blog.datawrapper.de/bicycle-friendly-germany/
* PrognosedatenDeutschlandweite Prognosedaten des ÖPNV
  https://mobilithek.info/blog/deutschlandweite-prognosedaten
  * Großer Sprung im heutigen #DELFIeV #zHV Update: für ca. 1.500 Haltestellen gibt es nun neu mastscharfe Angaben
    https://gtfs.mfdz.de/delfi/
    via https://chaos.social/@mfdz/113028419868898870

## Klima
* Verstärkter Druck auf Zivilgesellschaft und Klimaaktivist*innen - Wie Staaten zivilgesellschaftliches Engagement immer mehr einschränken
  https://www.ufu.de/ufu-informationen/eingeschraenkter-oeffentlicher-raum/
  * CIVICUS-Monitor
    https://monitor.civicus.org
* In Südwesteuropa sinkt das Grundwasser nicht wie angenommen überall, sondern je nach Klima und Landnutzung regional sehr unterschiedlich. Das zeigen die Daten von mehr als 12.000 Grundwasserbrunnen in Portugal, Spanien, Frankreich und Italien. Deshalb sei eine differenzierte Betrachtung wichtig, sagen UFZ-Forschende.
  https://www.ufz.de/index.php?de=36336&webc_pm=29/2024
* Online-Tool: Hier wachsen diese Stadtbaumarten besonders gut
  https://www.heise.de/news/Online-Tool-Hier-wachsen-diese-Stadtbaumarten-besonders-gut-9825777.html
* Open as a Prerequisite for Solving the Climate Crisis
  https://wikimania.eventyay.com/2024/talk/3NMMXA/
* Mittelmeer so warm wie noch nie
  https://taz.de/Neuer-Hoechstwert-von-289-Grad/!6030579/
* Bundeswirtschaftsministerium hält heiklen Bericht zu klimaschädlichen Subventionen neun Monate geheim: Deutsche Umwelthilfe erzwingt Freigabe und kritisiert dreiste Falschaussage
  https://www.duh.de/presse/pressemitteilungen/pressemitteilung/bundeswirtschaftsministerium-haelt-heiklen-bericht-zu-klimaschaedlichen-subventionen-neun-monate-gehei/
  siehe auch https://climatejustice.global/@GermanZeroHH/112988810504123988
* Studie zu Umweltmaßnahmen: Klima-Gesetze meist ineffektiv
  https://taz.de/Studie-zu-Umweltmassnahmen/!6028192/
* Reparatur-Atlas in Sachsen-Anhalt gestartet
  https://www.zeit.de/news/2024-08/07/reparatur-atlas-in-sachsen-anhalt-gestartet
* Electricity Maps: A real-time visualisation of the CO2 emissions of electricity consumption
  https://app.electricitymaps.com/map
  https://github.com/electricitymaps/electricitymaps-contrib

## Erdbeobachtung
* Vulkanausbruch in Island
  Our #CopernicusAtmosphere Monitoring Service is tracking the SO2 plume from the volcanic activity on Iceland's #Reykjanes Peninsula. The highest concentrations are between 5-8 km with some increase at ground-level less than the 350 μg/m3 exposure threshold.
  https://atmosphere.copernicus.eu/so2-reykjanes-volcano-reaches-europe
  via https://masto.ai/users/CopernicusECMWF/statuses/113034169464874985
  * dazu passend: Ein Vulkan im 3D-Modell: Während der Vulcano Summer School 2024 kartierte ein DLR-Team den Vulkan "La Fossa" mit modernster Drohnentechnologie. Das MACS-Kamerasystem des DLR nahm in nur zwei Stunden Flugzeit rund 8.000 Luftbilder auf, die ein beeindruckendes 3D-Modell in Echtzeit ermöglichen. Das Ergebnis der photogrammetrischen Verarbeitung – also der Prozessierung der Luftbilddaten zu einem digitalen Oberflächenmodell – ist im neuen DLR-Blogbeitrag zu sehen
  https://www.dlr.de/de/blog/archiv/2024/der-vulkan-la-fossa-in-3d
* Waldbrände in Südamerika
  https://atmosphere.copernicus.eu/charts/packages/cams/products/aerosol-forecasts?base_time=202409010000&layer_name=composition_aod550&projection=classical_south_america&valid_time=202409010300
  via https://masto.ai/@CopernicusECMWF/113044153124766984


## Zenus
* Neu seit 15.8.2024 in der Zensusdatenbank: Ergebnisse zu Haushalten und Familien ab jetzt verfügbar 
  https://www.zensus2022.de/DE/Aktuelles/Ankuendigung_Zensusdatenbank_Ergebnisse_Haushalte_Familien.html

## Datenvisualisierungen
* Information is beautiful
  https://vis.social/@infobeautiful
  * If you're aged 30 or more, then 50% of all human fossil fuel emissions happened during your lifetime
    https://vis.social/users/infobeautiful/statuses/112911230643311512

## Geschichte
* Zeitsprung Weimar
  https://zeitsprung.weimar.jetzt/315/
  * https://zeitsprung.weimar.jetzt
* Regensburg: Inklusives Welterbe
  https://www.regensburg.de/r-next/projekte/inklusives-welterbe

## Transparenz / Investigativrecherchen
* Datenscouts im Amateurfußball - obwohl Sportwetten auf diese Spiele in Deutschland verboten sind.
  https://www.ardmediathek.de/video/story/angriff-auf-den-amateurfussball-die-gier-der-wettindustrie/br/Y3JpZDovL2JyLmRlL2Jyb2FkY2FzdFNjaGVkdWxlU2xvdC8yY2MyNjEzYy00MWYzLTQ4MGYtOWUyMi1hYzQ2ZWVmOTY2MTk
  via https://osna.social/@joliyea/113021511442426170
* Anzeigen in der FAZ:  Verdeckte FDP-Werbung? Interne Mail wird zum Problem für Christian Lindner
  https://www.abgeordnetenwatch.de/recherchen/parteispenden/verdeckte-fdp-werbung-interne-mail-wird-zum-problem-fuer-christian-lindner
  via https://bewegung.social/@a_watch/113032339191175722
* Lobbyismus: Diese Verbände haben den größten Einfluss
  https://www.handelsblatt.com/politik/deutschland/lobbyismus-diese-verbaende-haben-den-groessten-einfluss/100059589.html
* IFG in Österreich
  https://www.linkedin.com/posts/krabina_bundesgesetzblatt-f%C3%BCr-die-republik-%C3%B6sterreich-activity-7236000338548318208-P882/

## Recap
* eGovernment Podcast Monatsschau
  https://egovernment-podcast.com/egov193-monatsschau-08-24/

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
