---
title: "Taubenschach – Out in the Open Juli 2025"
author: "Jörg Reichert (Code for Leipzig)"
date: '2025-08-04T08:00:00+02:00'
excerpt: Monatlich erscheinender Überblick über Entwicklungen in der Open Data und Civic Tech Szene
topic: community
images:
- imgname: out-in-the-open-2025-07-header.jpg
  attribution: <a href="https://pixabay.com/photos/open-open-sign-berlin-9526358/">Foto</a> von <a href="https://pixabay.com/users/sannsie-40193152/">sannsie</a> auf <a href="https://pixabay.com/">Pixabay</a>
og_image: out-in-the-open-2025-07-header.jpg
type: blog
---

## Open Data
### Open-Data-Portal-Verbesserungspotenzial 
Eric Börner [untersuchte](https://link.springer.com/article/10.1365/s40702-025-01202-7), vor welche Barrieren Open-Data-Portale die Entwickler von Open-Data-basierten Anwendungen immer noch stellen. Die Hürden lassen sich dabei auf die einzelnen Phasen der Open-Data-Wertschöpfungskette herunterbrechen. 

Im ersten Schritt, dem Finden geeigneter Datensätze, gaben die Interviewten an, immer noch große Probleme haben, an die von ihnen gesuchten Daten zu gelangen. Sei es weil sie über die bestehende Suchfunktion der Portal nicht ausgegeben werden, weil z.B. eine Verschlagwortung auch mit Synonymen fehlt, die Daten über mehrere Portale verstreut erst zusammengetragen werden müssen, oder schlicht, weil die Datensätze tatsächlich fehlen. Als Gegenmaßnahmen wird hier vorgeschlagen, die Such- und Filterfunktionen deutlich auszubauen und die Möglichkeit zu schaffen, Datensätze bei der Stadt konkret anfragen zu können. Proaktiv sollten die Städte im Vorfeld schon ein Bedarfserhebung vornehmen, um die sicherlich knappen personellen Ressourcen auf die Erhebung und Pflege der relevanten Datensätze zu lenken. Allgemein profitiert hier die Datenerfassung in der Phase 0 von einer [gut geleitete Dateneingabe](https://www.fokus.fraunhofer.de/de/dps/news/piveau_07-2025.html). Zudem sollten die durch die [Durchführungsordnung](https://www.govdata.de/informationen/hochwertige-datensaetze) bereits identifizierten hochwertigen Datensätze in jedem Open Data Portal auch als solche markiert werden. 

In der nächsten Phase, der Aufbereitung der Daten, erschweren die mangelnde Verständlichkeit, Qualität und Verknüpfbarkeit der Daten die Arbeit der Nutzenden. Hier würde es schon helfen, wenn die üblichen Standards für Datenformat und -beschreibung genutzt und eingehalten würden, eindeutige Identifikatoren auch bei Aktualisierungen stabil bleiben und semantisch gleiche Entitäten in unterschiedlichen Datensätze dieselben IDs bekommen, um so ihre Verlinkung zu ermöglichen. Datensätze in Open-Data-Portalen sollten generell versioniert sein und auch die alten Versionen dort vorgehalten werden, um Änderungen über die Zeit nachvollziehbar zu machen. Um Qualität und Vergleichbar von Datensätze beurteilen zu können, sind zudem die jeweils verwendeten Messmethoden bzw. -umstände zu dokumentieren (z.B. die Lage der Sensoren für die Luftqualitätsmessung).

Als Unterstützung für die eigentliche Anwendungsentwicklungsphase wird vorgeschlagen, auf den Open-Data-Portalen schon bestehende Anwendungen bzw. Anwendungsideen an den Datensätze zu verlinken, vielleicht sogar ein Forum einzurichten, in denen sich Entwickler austauschen können, sowie häufig gestellte Fragen auf einer entsprechenden FAQ-Seite zu sammeln. Die Daten nicht nur zum Download sondern auch über APIs bereitzustellen ist ebenfalls ein häufig geäußerter Wunsch, dem noch nicht viele Portale nachkommen. Diese könnten die Anwendungen direkt als Datenquellen zu nutzen, statt sich selbst um Datenhaltung und die (manuelle) Aktualisierung kümmern zu müssen. Und wenn Schnittstellen vorhanden sind, sollte deren Existenz und deren Benutzung auch dokumentiert werden, damit niemand [Endpunkte-Raten](https://openbiblio.social/@awinkler/114810567090692048) machen muss. 

Um überhaupt die Mühen der Entwicklung einer Open-Data-Anwendung auf sich nehmen zu wollen, muss absehbar sein, dass der längfristige Betrieb auch gewährleistet werden kann. Datensätze, die nach Veröffentlichung nicht mehr aktualisiert werden, widersprüchliche Lizenzierung, häufige (und meist auch unangekündigte) Datenformats- oder auch Schnittstellenänderungen, die jeweils eine Anpassung der Anwendung nach sich ziehen, sind Risiken, die schon im Vorfeld ausgeräumt gehören. Die Stadt kann den Betrieb auch unterstützen, indem sie selbst Möglichkeit zum Hosting der Anwendung anbieten und auch die Nutzung der App bewerben, indem diese auf einem App-Portal der Stadt prominent platziert wird.  

### Formen der Open Data Beteiligung
Neben den gezielten Interviews, wie sie für die eben vorgestellte Studie geführt wurden, können natürlich auch [anonyme Umfragen](https://fitko.lamapoll.de/Nutzendenbefragung-GOVDATA) eingesetzt werden, um die Zufriedenheit seiner Nutzenden abzufragen, in dem Fall [von GovData](https://social.bund.de/@opendata/114823369987675095). 

Ein Jahr gibt es nun schon das [Open Data Forum](https://discourse.opencode.de/c/opendata/755). Damit nicht immer dieselben schreiben (müssen) und die Threadlängen auch häufiger mal > 1 werden, möchte man das Forum vor allem in der Zivilgesellschaft [bekannter machen](https://www.linkedin.com/posts/bundesverwaltungsamtde_kompetenzzentrumopendata-bundesverwaltungsamt-activity-7357027369733263360-5u4Y).

Von 23. Mai bis 20. Juli hatten Interessierte Zeit für die zu entwickelnde EU-Datenstrategie der EU-Kommission über einen Fragebogen ihre Anliegen und Gedanken zur Gestaltung der EU-Datenwirtschaft [einzubringen](https://ec.europa.eu/info/law/better-regulation/have-your-say/initiatives/14541-European-Data-Union-Strategy_de). Von den gerade mal 171 eingegangen Rückmeldungen kamen mit 34 knapp 20% aus Deutschland. Länderübergreifend haben sich jeweils 10% Nichtregierungsorganisationen und Privatbürger [beteiligt](https://ec.europa.eu/info/law/better-regulation/have-your-say/initiatives/14541-European-Data-Union-Strategy/public-consultation_de), Unternehmen und Wirtschaftsverbände kommen dagegen zusammen auf 58%.  

In [dieser einstündigen Folge](https://www.eco.de/news/eco-podcast-zu-datenspende-und-open-source/) des eco-Podcasts "Das Ohr am Netz" geht es um eine ganz andere der Art der Beteiligung, nämlich die freiweilige Datenspende, um so beispielsweise medizinische Forschung und die Stadtplanung von morgen voranzubringen. Mit geeigneter Aggregation und Anonymisierung gäbe es auch keinen Personenbezug mehr und mann könnte sie somit auch als Open Data veröffentlichen.

### Open Data Fortschritt
[Ein Bericht der Linux Foundation](https://www.linuxfoundation.org/research/pathways-to-open-data?hsLang=en) hat die Diskussionen zum Aufbau von Open Data Infrastrukturen
in der Session auf World Open Innovation Conference ausgewertet und drei wesentliche Aspekte identifiziert. Zum einen braucht es klare Verantwortlichkeiten und damit einhergehend das Recht, auch Auflagen für Zugang und Umgang setzen zu dürfen, aber eben auch die Pflicht, sich um die Pflege der Daten zu kümmern. Gleichzeitig bedarf es Anreize zur Zusammenarbeit, Daten zu teilen, Daten kollaborativ zu verbessern, und zwar so, dass es ein faires Geben und Nehmen ist und nicht nur eine Seite Daten beisteuert. Um die Einhaltung dieser Fairness und das Austarieren der Interessen zu gewährleisten braucht es entsprechend starke Organisationsstrukturen. 

Das Bundesverwaltungsamt (BVA) hat nochmal die wesentliche Punkte des zweiten [Open-Data-Fortschrittsberichts](https://www.bmi.bund.de/SharedDocs/kurzmeldungen/DE/2025/02/open-data-fortschrittsbericht.html) (vom Februar 2025) auf LinkedIn [zusammengefasst](https://www.linkedin.com/posts/bundesverwaltungsamtde_bundesverwaltungsamt-opendata-transparenz-activity-7354446635227119617-xquL) und auch in Bezug zum [Open Data Ranking](https://opendataranking.de) gesetzt. Die Ergebnisse des Rankings wurden auch im Magazin der Mercator-Stiftung [herangezogen](https://www.aufruhr-magazin.de/digitalisierte-gesellschaft/open-data-von-bund-und-laendern-mehr-transparenz-fuer-die-demokratie/), um zu verstehen, "wie Deutschland bei Open Data aufholen kann".

### Open Data Wissen
* how to use Open Data from the city
  https://opendata.cityofnewyork.us/learn-open-data/
  via https://mastodon.world/@obrien_kat/114835710754299343
* Die Welt des Freien Wissens
  https://upload.wikimedia.org/wikipedia/commons/8/83/2025-07-02_BMUKN_Die_Welt_des_Freien_Wissens.pdf

### Open Data in der Praxis
* Trinkbrunnen Berlin
  https://daten.berlin.de/datensaetze/trinkbrunnen_bwb
  via https://chaos.social/@jk/114852620370590881
  * Kommentar: https://norden.social/@datenschatz/114856140656415177
* Berlin: Frisch veröffentlicht: Trinkwasserbrunnen als WFS
  https://daten.berlin.de/datensaetze/trinkwasserbrunnen-wfs-47dba2c3
  https://mastodontech.de/users/opendataberlin/statuses/114949174522023748

* Zuwendungsempfängerregister (ZER)
  https://zer.bzst.de
  via https://norden.social/@MisterOpenData/114816954557295137
  https://tifa365.github.io/zer_openapi_specs/
* Anschriftenverzeichnis des Bundes
  https://www.govdata.de/suche/daten/anschriftenverzeichnis-des-bundes
  via https://social.bund.de/@opendatabund/114851216243602891

## Linked Open Data
* 2. Barcamp zu Haushaltsdaten als Linked Open Data in Berlin
  https://okfn.de/blog/2025/07/2.-barcamp-zu-haushaltsdaten-als-linked-open-data-in-berlin/
* The power and potential of Wikidata for botany
  https://blog.tepapa.govt.nz/2025/07/14/the-power-and-potential-of-wikidata-for-botany/?cn-reloaded=1
* SPINACH Wikidata Agent
  https://spinach.genie.stanford.edu
  https://mastodon.social/@kai_naumann/114937508659590647

## Open Hardware
* Open hardware desktop 3D printing is dead - you just don't know it yet
  https://www.josefprusa.com/articles/open-hardware-in-3d-printing-is-dead/
* Der Lautsprecherhersteller Teufel hat die Baupläne für einen Lautsprecher unter eine Open-Source-Lizenz gestellt
  https://www.heise.de/hintergrund/Die-Entwickler-des-Open-Source-Lautsprechers-Teufel-Mynd-im-Interview-10490607.html?seite=all
* selbstgebautes ESP32‑E‑Ink Wetter‑Dashboard
  https://www.linkedin.com/posts/soeren-etler_mein-selbstgebautes-esp32eink-wetterdashboard-activity-7356336354076549123-90XY
  https://github.com/lmarzen/esp32-weather-epd

## Community
* Ein Rechercheteam der FAS hat rund 1.000 zufällig ausgewählte Wikipedia-Artikel KI-unterstützt auf Fehler untersucht. Das Ergebnis dokumentiert, wie schwierig es ist, Millionen von Artikeln aktuell zu halten
  https://netzpolitik.org/2025/recherche-der-frankfurter-allgemeinen-sonntagszeitung-wie-hunderte-entdeckte-fehler-in-der-wikipedia-ihre-glaubwuerdigkeit-staerken/
  https://www.faz.net/aktuell/wirtschaft/wikipedia-ist-nicht-mehr-aktuell-und-hat-viele-fehler-110575350.html
  via https://chaos.social/@netzpolitik_feed/114810486448269207
* Umfrage für Engagierte in #Initiativen für nachhaltige Lebensweisen
  https://www.ioew.de/projekt/rolle_von_emotionen_in_sozialen_innovationen_fuer_nachhaltigen_konsum
  via https://mastodon.social/@ioew/114827902194516617
* The 90-9-1 rule
  https://www.hereandthere.club/post/ioverlanders-pivot-shows-the-cost-of-community-driven-tech
  via https://norden.social/@datenschatz/114847098427880644
* Hardware-Spenden: "Weil es der Staat nicht gebacken bekommt"
  https://netzpolitik.org/2025/hardware-spenden-weil-es-der-staat-nicht-gebacken-bekommt/
* Open Source Maintainer Burn Out ist real
  https://bsky.app/profile/derhoermeyer.bsky.social/post/3ltlvgjdr3c26
  https://open.spotify.com/episode/1LLald1NSJoUiYgw9dthiV?si=Lr1xdtpAQHaJ5Sol0kV9zg&nd=1&dlsi=62bcdb74c3c4433f
* When We Get Komooted
  https://bikepacking.com/plog/when-we-get-komooted/
  https://mastodon.social/@mariafarrell/114941651924521605
* What would a something-something-digital-NGO look like that would be able to pick up the fight from
  https://chaos.social/@stk/114825627154853200
  https://chaos.social/@stk/114825621182061366

## Citizen Science
* Gaming Cancer: How Citizen Science Games Could Help Cure Disease
  https://thereader.mitpress.mit.edu/how-citizen-science-games-could-help-cure-disease/
* Eine neue Onlinekarte zeigt, welche seltenen Pflanzenarten auf dem Stadtgebiet von Winterthur noch gedeihen
  https://www.tagesanzeiger.ch/biodiversitaet-in-winterthur-die-vielfalt-an-pflanzen-hat-uns-ueberrascht-769763105700
  via https://wisskomm.social/@FloraIncognita_DE/114873034988152893
* Free course: Citizen science and global biodiversity
  https://www.open.edu/openlearn/science-maths-technology/citizen-science-and-global-biodiversity/content-section-overview?active-tab=content-tab

## Digitale Souveränität
### Verwaltung 
* Digitale Souveränität für Kommunen: Was bringt es, unabhängig zu sein?
  https://www.treffpunkt-kommune.de/digitale-souveraenitaet-was-bringt-es-digital-unabhaengig-zu-sein/
* Schleswig-Holstein auf dem Weg zur digitalen Souveränität - Die ganze Doku | ARTE
  Mit Cloud-Zwang, Software-Abos und willkürlichem Support-Ende machen Software-Monopolisten ihre Kunden wirtschaftlich und technisch von sich abhängig. Eine Gegenstrategie bietet sogenannte quelloffene oder Open-Source-Software.
  https://www.arte.tv/de/videos/128167-000-A/schleswig-holstein-auf-dem-weg-zur-digitalen-souveraenitaet/
* Wie verändert #openDesk die Zusammenarbeit? 
  https://social.bund.de/@zendis/114952523511877158

### Alternativen
* Alternativen zu X, Instagram und Co.
  https://blog.wikimedia.de/2025/07/03/fediverse/
  * passend dazu: Ist dieses Fediverse mit Mastodon eine Alternative zu Meta, X & Co.? Wir fragten Stephanie Henkel
    https://www.l-iz.de/leben/gesellschaft/2025/07/ist-dieses-fediverse-mit-mastodon-eine-alternative-zu-meta-x-co-wir-fragten-stephanie-henkel-629146
  * Was machen Universitäten im Fediverse, wie zufrieden sind sie und wer fehlt? Das habe ich recherchiert und die 42 (sic!) größten deutschen Universitäten befragt.  
    https://www.riffreporter.de/de/technik/hochschulen-fediverse-mastodon-wissenschaftskommunikation-social-media
    https://www.deutschlandfunk.de/x-frei-wie-hochschulen-ihre-social-media-praesenz-neu-organisieren-100.html
    https://reporter.social/@pikarl/114895547755049953
* OpenProject + XWiki als Privacy-First Alternative zu Atlassians Jira & Confluence
  https://www.openproject.org/blog/open-source-jira-confluence-alternative/
  via https://fosstodon.org/@openproject/114782562871553258

### Big Tech
* Ein Microsoft-Manager hat nun aber unter Eid bestätigt: Eine Garantie, dass keine Daten an US-Behörden weitergegeben werden, ist nicht möglich." 
  https://www.itmagazine.ch/artikel/85137/Unter_Eid_Microsoft_kann_Schutz_vor_Cloud_Act_nicht_garantieren.html
  via https://mastodon.social/@ReginaMuehlich/114875018810725147
* Der CISPE-Verband europäischer Cloudanbieter zieht vors EU-Gericht, weil die Kommission den milliardenschweren Kauf von VMware durch Broadcom genehmigt hat.
  https://www.heise.de/news/Broadcoms-VMware-Uebernahme-EU-Cloudanbieter-verklagen-die-Kommission-10499025.html
* Microsoft lässt die Cloud des US-Verteidigungsministeriums durch chinesische Software-Ingenieure warten
  https://www.borncity.com/blog/2025/07/16/krass-microsoft-laesst-die-cloud-des-us-verteidigungsministeriums-durch-chinesische-software-ingenieure-warten/

### Wirtschaft
* A sovereign tech fund at the European level
  https://eu-stf.openforumeurope.org
  https://mastodon.social/@PrototypeFund/114931590747583964
* Digitale Souveränität: Argumentationshilfe für resiliente IT-Entscheidungen
  https://www.golem.de/news/digitale-souveraenitaet-argumentationshilfe-fuer-resiliente-it-entscheidungen-2507-198470.html

## Verwaltungsdigitalisierung
### Struktur
* Open Source hat im Bund keine Lobby
  https://www.golem.de/news/digitalisierung-open-source-hat-im-bund-keine-lobby-2507-197269.html
  via https://social.osb-alliance.de/@OSBA/114829201166983479
* Government as a Platform – Deutschlandstack?
  https://egovernment-podcast.com/egov225-gov-as-a-platform/
* Wie man ein neues Ministerium zusammenbaut
  https://chaosradio.de/cr301-dicke-bretter-diesmal-ueber-die-schwarz-schwarz-roten-und-ihr-neues-digitalministerium
* Bündelung von Online-Services: Sachsen-Anhalt will Vorreiter sein
  https://www.sz-dossier.de/dossiers/digitalwende/2025-07-15-dienstag
  https://www.linkedin.com/posts/matthias-punz-805b17175_w%C3%A4hrend-der-bund-noch-an-konzepten-arbeitet-activity-7350763024237883394-lker

### Praxis
* KERN UX, ein UX-Standard für die deutsche Verwaltung
  https://egovernment-podcast.com/egov224-kern-ux/
* Das erste Jahr des ersten Beirats des deutschen Digital Services Coordinators neigt sich dem Ende zu. Zeit für ein Zwischenfazit sowie einen Ausblick auf die Zukunft des Digital Services Act und die Rolle der Zivilgesellschaft.
  https://netzpolitik.org/2025/geschichten-aus-dem-dsc-beirat-wie-trumps-drohungen-europaeische-grundrechte-gefaehrden/
* eGovernment Podcast Monatsschau 07/25
  https://egovernment-podcast.com/egov226-monatsschau-07-25/

### Fehlende Strategie
* Wildwuchs an parallelen Lösungen
  https://www.spiegel.de/politik/deutschland/bundesrechnungshof-kritisiert-geldverschwendung-bei-digitalisierung-a-706ea431-18f0-4183-b4b0-5fbc64996cac?s=09
* Smart City: Hunderte Anwendungen, aber wer bezahlt?
  https://www.sz-dossier.de/tiefgaenge/smart-city-hunderte-anwendungen-aber-wer-bezahlt-2e10530b
  https://www.linkedin.com/posts/helen-bielawa-051902145_322-von-667-smart-city-projekten-haben-irgendwas-activity-7355850828949168132-jH0J
  * Marchitecture or Marketecture
    https://en.wikipedia.org/wiki/Marketecture
    https://social.tchncs.de/@fkr/114941541726409649

## Dashboards
* "Ein öffentlich zugängliches Verwaltungs-Dashboard stellt keinen Selbstzweck dar, sondern fungiert als Werkzeug, mit dem auf Basis der bereitgestellten Daten gezielte Maßnahmen vorangetrieben und deren Fortschritt kontrolliert werden können."
  https://norden.social/@datenschatz/114810578991655170
  * Forführend zu APIs und Monitoring / Warn-Apps
    https://chaos.social/users/stk/statuses/114842147394518694
* Interaktive Visualisierungen mit Open Data sollen zu einem smarteren, grüneren und widerstandsfähigeren Tourismus in Europa beitragen.
  https://www.heise.de/news/EU-Dashboard-soll-Wandel-im-europaeischen-Tourismus-Oekosystem-visualisieren-10493782.html
  https://tourism-dashboard.ec.europa.eu/?lng=de&ctx=tourism

## Visualisierungen
* Der Historical Tech Tree zeigt drei Millionen Jahre Innovation visuell als interaktive Karte und zeigt, wie 2000 Erfindungen miteinander verbunden sind.
  https://www.heise.de/news/Web-Tipps-Technik-Stammbaum-10479184.html
  https://www.historicaltechtree.com
* Data Vis Dispatch, July 8: 200th edition — behind the scenes, Q&A, and new features
  https://www.datawrapper.de/blog/data-vis-dispatch-july-8-2025

## Karten
### Darstellungen
* Today the German Federal Employment Agency published its annual data set on salaries for 21,859,958 employees.
  https://mastodon.social/@chwoma/114891592291040868
  https://codeberg.org/chwoma/entgelt_maps_2024
* Einwohnerzähler
  https://atlas.zensus2022.de
  via https://norden.social/@destatis@social.bund.de/114850757064166345
* Ein neuer IÖW Datensatz dokumentiert die Entwicklungen in der hausärztlichen Versorgung über 11 Jahre
  https://data.fdz.ioer.de/dataset.xhtml?persistentId=doi:10.71830/7N8G1E
  https://wisskomm.social/@ioer/114873026580818573
* Urban Mining Kataster
  https://concular.de/digitaler-blick-fuer-die-stadtentwicklung-concular-startet-urban-mining-kataster-deutschland-fuer-staedte-und-kommunen/
  https://urbanminingkataster.de
  via https://wisskomm.social/@ioer/114829264343656098

### Pflanzen
* Boden ist Leben – und wird zur Mangelware. Jährlich gehen 100 Mio. Hektar fruchtbares Land verloren. In der Messkampagne CROPEX25 untersuchte das DLR mit Partnern vier Monate lang Böden, Pflanzen und Atmosphäre bei München – aus der Luft, am Boden und via Satellit
  https://bsky.app/profile/dlr-de.bsky.social/post/3luphg3frus2t
  https://www.dlr.de/de/aktuelles/nachrichten/2025/testfluege-ueber-bayern-liefern-daten-fuer-neue-erdbeobachtungsmissionen
* Berlin gärtnert
  https://www.linkedin.com/posts/senmvku_die-neue-plattform-berlin-g%C3%A4rtnert-activity-7355924239905886208-RLNy
  http://berlin.de/gaertnern
  https://berlingaertnert.odis-berlin.de
  https://www.berlin.de/sen/uvk/presse/pressemitteilungen/2025/pressemitteilung.1585200.php

### Tools
* The WFS Explorer
  https://wfsexplorer.odis-berlin.de
  via https://troet.cafe/@hanshack/114788385967284925
  * Berliner WFS-Explorer für Hamburg adaptiert
    https://www.linkedin.com/posts/timfangmeyer_ich-habe-den-letzte-woche-ver%C3%B6ffentlichten-activity-7348604412803584002-qbY5
    https://tifa365.github.io/wfs-explorer.hamburg
  * GeoExplorer Update, nun u.a. mit WFS-Explorer
    https://www.linkedin.com/posts/hans-hack-001683303_the-geoexplorer-just-got-an-update-the-ugcPost-7347909233717264384-NuvQ
    https://geoexplorer.odis-berlin.de
* mapping realtime events onto a view of the Earth
  https://github.com/Quad9DNS/GlobeOfWonder
  via https://mastodon.social/@quad9dns/114902199658368313
* anymap
  https://github.com/opengeos/anymap
  https://anymap.dev
  LiDAR support: https://www.linkedin.com/posts/giswqs_geospatial-mapping-potree-activity-7349306242512613376-jsPf

### OpenStreetMap
* Vector Tiles are deployed on OpenStreetMap.org
  https://blog.openstreetmap.org/2025/07/22/vector-tiles-are-deployed-on-openstreetmap-org/
* Neues OSM WikiData Feature
  https://en.osm.town/@seav/114876057104275231

## Mobilität
### ÖPNV
* Streckennetz Deutsche Bahn aktuelle Daten?
  https://social.bund.de/@opendata/114823485843318220
* Zugfahrplan - Mit Daten von opendata.ch einen Fahrplan erstellen. 
  https://gnulinux.ch/zugfahrplan
  via https://social.anoxinon.de/@gnulinux/114895595879050613
* Transitous Hack Weekend July 2025
  https://volkerkrause.eu/2025/07/19/transitous-hack-weekend-july-2025.html
* BuildMyTransit is a web app to design, visualize, and simulate New York City subway systems
  https://buildmytransit.nyc
  https://mastodon.social/@kottke/114858598236589522  

### Wetter und Klima
* Scrollytelling: Wie gelingt klimafreundliche Mobilität vor Ort?
  https://krauses.pageflow.io/emw-zeigen-was-moeglich-ist
  https://www.umweltbundesamt.de/themen/uba-scrollytelling-europas-staedte-machen-mobil
* "Kühle Spur" - Deutschlands erster an den Klimawandel angepasster Radweg 
  https://www.zalf.de/de/aktuelles/Seiten/Pressemitteilungen/BTU-Fahrradweg-ZALF.aspx
  * Cool Way: Beschattete Wanderwege für heiße Tage
    https://www.linkedin.com/posts/soeren-etler_cool-way-beschattete-wanderwege-f%C3%BCr-hei%C3%9Fe-activity-7345355805837189122-I2s4
  via https://wisskomm.social/@ZALF_leibniz/114862291046113181
* Regenampel
  https://regenampel.de
  via https://mastodon.pub.solar/@marc/114810263783366892

### Radverkehr
* RULES: Ursachen für Regelverstöße im Radverkehr 
  https://www.regelverstoesse.de
  https://www.adfc.de/neuigkeit/wie-sicher-fuehlen-sich-radfahrende-in-der-stadt
  https://www.mobilitaetsforum.bund.de/DE/Themen/Wissenspool/Projekte/NRVP/NRVP_23-25/NRVP_Uni-Freiburg_RULES_2024-2026.html
  via https://leipzig.adfc.de/neuigkeit/wie-sicher-ist-radfahren-in-leipzig-fuer-dich
* Warum sollten Radwege ausgebaut werden? Eine neue Studie liefert Antworten
  https://www.pnas.org/doi/10.1073/pnas.2422334122
  via https://verkehrswende.social/@CCitiesOrg/114895486746137939
* Warum nach Jahren noch kein Kilometer Radschnellweg gebaut ist
  https://www.mdr.de/nachrichten/deutschland/politik/geplante-radschnellwege-sachsen-anhalt-thueringen-foerderung-102.html

### Unfälle
* Fahrrad-Unfallorte
  https://fahrrad-unfallorte.de
  via https://gruene.social/@tosch/114909815927568640
* Unser Unfallkalender zeigt jetzt auch, an welchen Tagen in den vergangenen vier Jahren besonders viele E-Scooter-Fahrende verunglückt sind.
  https://service.destatis.de/DE/verkehrsunfallkalender/
  https://social.bund.de/@destatis/114946438433984398
* Unfallkarte Verstehen und Nutzen
  https://changing-cities.org/how-to-unfalldaten/

### Verkehrssicherheit
* Helsinki goes a full year without a traffic death
  https://yle.fi/a/74-20174831
* Evaluationsergebnisse GOW30
  https://www.zukunft-mobilitaet.net/174605/analyse/evaluation-tempo30-hauptstrassennetz-amsterdam-gow30/
  via https://verkehrswende.social/@zukunftmobil/114857583188556519
* VCD-Schulwege-Check
  https://www.vcd.org/artikel/vcd-schulwege-check

## Klima
### Klimagerechtigkeit
* Attributionsforschung & Klima(un)gerechtigkeit
  https://s4f-podcast.de/2025/07/folge-37-attributionsforschung-klimaungerechtigkeit/
* Erdüberlastungstag immer früher: Menschen haben natürliche Ressourcen für 2025 aufgebraucht
  https://taz.de/Erdueberlastungstag-immer-frueher/!6103493/
* Ist Klimaschutz wirklich "out"?
  https://www.derstandard.at/story/3000000279384/ist-klimaschutz-wirklich-out

### Rechtssprechung
* IGH sieht "nachhaltige Umwelt" als Menschenrecht
  https://www.tagesschau.de/ausland/europa/igh-gutachten-klima-102.html
* Alle Staaten sind verpflichtet, das Klima zu schützen.
  https://perspective-daily.de/article/3840-na-toll-jetzt-muss-man-wieder-hoffnung-haben/GNZi9b98
  https://fediscience.org/@rahmstorf/114946893446442989

### Pollenflug
* Das europäische Copernicus-Programm zur Überwachung der Erdatmosphäre stellte dieses Jahr im Mai ein Rekordhoch an Birkenpollen fest, hauptsächlich im Nordosten Europas
  https://taz.de/Effekte-der-Klimakrise/!6098724/
  https://atmosphere.copernicus.eu/cams-air-boreal-spring-2025
* Verbesserte Pollenflugvorhersagen: DWD baut vollautomatisches Messnetz auf
  https://www.stern.de/news/verbesserte-pollenflugvorhersagen--dwd-baut-vollautomatisches-messnetz-auf-35938652.html

### Wirtschaft
* Diese Landkreise haben die höchsten Schäden durch Extremwetter
  https://correctiv.org/aktuelles/klimawandel/2025/07/10/diese-landkreise-haben-die-hoechsten-schaeden-durch-extremwetter/
* Die unterschätzte Bedrohung für die deutsche Industrie
  Nicht #Energiekosten oder #Bürokratie sind das größte Risiko für die deutsche #Industrie, sondern die Folgen des #Klimawandels.
  https://www.zeit.de/wirtschaft/2025-07/klimakrise-deutschland-industrie-klimaschaeden-energie-buerokratie
  via https://mastodon.online/@tinoeberl/114841644930402668
* Unversichert in der Klimakrise: Kommunale Gebäude ohne Schutz
  https://correctiv.org/aktuelles/klimawandel/2025/07/29/unversichert-in-der-klimakrise-kommunale-gebaeude-ohne-schutz/

### Hitze
* Ein neues Klimamodell des Alfred-Wegener-Instituts zeigt, wie stark #Hitze, #Starkregen und andere #Extremwetterereignisse bis 2100 regional zunehmen könnten.
  https://www.focus.de/earth/deutsche-forscher-zeigen-unsere-klimazukunft_2c847ca6-2d35-4de9-bb12-03698aa6c71e.html
* Temperaturanomalie Juni
  https://norden.social/@grimm/114827939254712564
* Hitztage über die Jahre
  https://norden.social/@datenschatz/114782572564792178
* Sommer 2025 in Europa: Schon jetzt dreimal mehr Hitzetote durch Klimawandel
  https://www.tagesschau.de/wissen/klima/bilanz-hitzetote-europa-100.html
* Hamburg: Wissen der Menschen vor Ort in den Klimaanpassungsplan einbeziehen
  https://klimaanpassung-nord.beteiligung.hamburg/#/contributions/map
  via https://norden.social/@lobidu/114794791583262819
* HRC – Hitzetool
  https://hrc-hitzetool.ioer.info
  https://www.gebaeudeforum.de/themenschwerpunkt/
  https://wisskomm.social/@ioer/114942114923013502

### Wasser
* Sub-regional Mediterranean sea indicators
  https://apps.socib.es/subregmed-indicators/ocean_temperature.htm
  via https://dju.social/@DerKlimablog/114808495936878862
* Der Elbe geht das Wasser aus
  https://taz.de/Niedrigwasser-durch-Klimakrise/!6098381/
* Gletscherschmelze: reusing older #data for a new purpose
  https://www.nature.com/articles/s41467-025-59293-1
  https://scitechdaily.com/scientists-just-turned-dusty-navy-photos-into-a-climate-time-bomb/
  via https://fediscience.org/@petersuber/114829371931327463

### Maßnahmen
* Paris kühlt sich während der Hitzewelle dank der Begrünung ab
  https://www.derstandard.at/story/3000000277731/paris-kuehlt-sich-waehrend-der-hitzewelle-dank-der-begruenung-ab
  passend dazu: https://muenchen.social/@joerg_spengler/114821519844802872
* Wie sich Spaniens Städte gegen Extremhitze wappnen
  https://www.deutschlandfunk.de/wie-sich-spaniens-staedte-gegen-extremhitze-wappnen-100.html
* "Tegelwippen" – Wie Städte sich besser an den Klimawandel anpassen können
  https://www.telepolis.de/features/Tegelwippen-Wie-Staedte-sich-besser-an-den-Klimawandel-anpassen-koennen-10494670.html
* The 3-30-300 🌳 rule
  https://bsky.app/profile/ec.europa.eu/post/3lvatsl5tgs2p
  https://environment.ec.europa.eu/strategy/biodiversity-strategy-2030_en
* Weniger Staus, weniger Luftverschmutzung, weniger Unfälle - New Yorks 6 Monate alten Staugebühren haben vielleicht die schnellste Umweltverbesserung in der Geschichte der USA bewirkt
  https://www.theguardian.com/us-news/2025/jul/09/new-york-city-congestion-pricing-trump
  via https://social.tchncs.de/@kaffeeringe/114827845644367664

### Emissionshandel
* Umweltbundesamt stellt Bericht über Emissionshandel vor
  https://www.tagesschau.de/multimedia/sendung/tagesthemen/video-1487086.html
* Der Emissionshandel funktioniert – oder auch nicht
  https://www.klimareporter.de/europaeische-union/der-emissionshandel-funktioniert-oder-auch-nicht

### Tools
* KliX³-Toolbox!
  https://klix3.de/toolbox/willkommen/
* BaumBie
  * GiessDenKiez für Bielefeld
    https://www.linkedin.com/posts/codeforbi_bald-ist-es-so-weit-baumbie-startet-offiziell-ugcPost-7348765289301389314-rWE4
 * Smartphone und Gießkanne: Bielefelder Initiative startet Kampagne für Baum-Paten
   https://www.nw.de/lokal/bielefeld/mitte/24144608_Smartphone-und-Giesskanne-Bielefelder-Initiative-startet-Kampagne-fuer-Baum-Paten.html
 * https://www.baumbie.org
   https://www.baumbie.org/baumbie
* Ein TU-Forschungsprojekt entwickelt Lösungen, um Leckagen in Trinkwassernetzen automatisiert, schnell und präzise zu erkennen
  https://www.tu.berlin/news/pressemitteilung/mit-high-tech-gegen-die-wassserkrise

### Zoll-Deal
* Fracking-LNG aus den USA schadet dem Klima noch mehr als Kohle, ermitteln Forschende. 
  https://social.cologne/@GeorgEhring/114936425956134322
  https://www.deutschlandfunk.de/energiedeal-mit-den-usa-was-bedeutet-das-fuer-europa-dr-claudia-kempert-diw-100.html
  https://social.cologne/@GeorgEhring/114936656324016535
* Fossiler Zoll-Deal: "Krone der Absurdität"
  https://www.klimareporter.de/europaeische-union/fossiler-zoll-deal-krone-der-absurditaet
* TTIP per Handschlag?
  https://bewegung.social/@lobbycontrol/114947421563945893

## Energie
### Energiewende
* Bundes-Milliarden für den Umweltschutz – 2024: großer Teil geht für Atommüll drauf
  https://www.bundesumweltministerium.de/ministerium/struktur/finanzen
  https://bsky.app/profile/annikajoeres.bsky.social/post/3lvctzlbfwk22
* Subventionsabbau bei Kohle und Öl führt zu mehr Wohlstand
  https://www.handelsblatt.com/unternehmen/energie/fossile-brennstoffe-subventionsabbau-beikohle-und-oel-fuehrt-zu-mehr-wohlstand/100139110.html
* Energiebedingte CO2-Emissionen seit 2010 um 29,6 % gesunken
  https://www.destatis.de/DE/Presse/Pressemitteilungen/2025/07/PD25_274_32421.html?nn=2110
* Indien erreicht Ziele des Pariser Klimaabkommens fünf Jahre vor Ablauf der Frist
  https://www.fr.de/wirtschaft/energie-revolution-kommt-indien-vollzieht-turnaround-und-uebertrifft-europa-zr-93840306.html

### Preisanreize
* Studie: Ökostrom fällt rasant unter Preis von Öl und Gas
  https://www.stuttgarter-nachrichten.de/inhalt.studie-oekostrom-faellt-rasant-unter-preis-von-oel-und-gas.05ec40b7-1e9a-4347-a0c9-a1d526e9000e.html
* So viele Verbraucher wechseln Energieanbieter wie noch nie
  https://www.zeit.de/news/2025-07/13/so-viele-verbraucher-wechseln-energieanbieter-wie-noch-nie
* Helfen lokale Strompreise gegen Engpässe im Stromnetz?
  https://www.klimareporter.de/strom/helfen-lokale-strompreise-gegen-engpaesse-im-stromnetz
  https://www.agora-energiewende.de/daten-tools/agorameter/locational/map/power_price/

### Datenzugang
* Neue Zahlen zum Smart-Meter-Einbau sind da. Sie sind nicht gut.
  https://www.cleantech.ing/p/too-low-to-meter-95ee7e56047d7e44
* MaStR4all - Zugang zu Daten der Energiewirtschaft verbessern
  https://reiner-lemoine-institut.de/projekt/mastr4all-zugang-zu-daten-der-energiewirtschaft-verbessern/
  https://reiner-lemoine-institut.de/tool/open_mastr/
  https://github.com/OpenEnergyPlatform/open-MaStR

## Kultur
* Der Arbeitskreis Digitale Kunstgeschichte lädt ab August zu einer monatlichen Mittagspause ein
  https://digitale-kunstgeschichte.de
  https://fedihum.org/@digitale_kunstgeschichte
  https://mastodon.social/@kunstgeschichte/114935480540942124
* Die KZ-Gedenkstätte Dachau hat einen virtuellen 360-Grad-Rundgang durch das Gelände entwickelt. 
  https://www.sueddeutsche.de/muenchen/dachau/kz-gedenkstaette-dachau-360-grad-rundgang-panoramen-erinnerungsarbeit-internet-li.3287211

## Wirtschaft
* Kommunale Finanzen – Größtes Defizit in der Geschichte der Bundesrepublik
  https://www.bertelsmann-stiftung.de/de/themen/aktuelle-meldungen/2025/juli/kommunale-finanzen-groesstes-defizit-in-der-geschichte-der-bundesrepublik
* Studie: Deshalb ist Chinas Industriepolitik so erfolgreich
  https://www.surplusmagazin.de/studie-china-industriepolitik-technologie-vorsprung-subventionen/

## KI, Vibe und Gesang
### Rechtsprechung
* Neue EU-Regeln fordern Transparenz von KI-Modell-Anbietern
  https://www.tagesspiegel.de/gesellschaft/medien/kunstliche-intelligenz-neue-eu-regeln-fordern-transparenz-von-ki-modell-anbietern-14123351.html
* US-Urheberrecht: KI darf weiter Bücher lesen
  https://netzpolitik.org/2025/us-urheberrecht-ki-darf-weiter-buecher-lesen/
* Messen mit zweierlei Maß
  https://infosec.exchange/@koehntopp/114913099276601064

### Privatssphäre
* Google's training data includes all your personal data already
  https://mastodon.social/@ekis/114787048664654222
* Neue Folge der Reihe "KI verstehen" vom Deutschlandfunk zu KI und Privatsphäre - inkl. dem Projekt "Private Prompts" aus der Prototype Fund Runde 16
  https://www.ardaudiothek.de/episode/urn:ard:episode:9b24641ebe39df6f/
  via https://mastodon.social/@PrototypeFund/114828253194888127
* Anleitung wie man Gemini nach dem neusten Android Update den Zugriff auf die weiteren Apps zu verweigern
  https://tuta.com/de/blog/how-to-disable-gemini-on-android
* Model Context Protocol (MCP) in der Praxis
  https://github.com/codeforcologne/Lab/blob/master/mcp.pdf

### Missbrauch
* Anstieg Bot-Zugriffe auf Open Data Portal
  https://norden.social/@MisterOpenData/114828298944951481 
* Ein KI-Agent von ChatGPT hat offenbar eine Captcha-Checkbox im Internet ausgehebelt – und sogar sein Vorgehen kommentiert
  https://www.basicthinking.de/blog/2025/07/30/ki-chatgpt-agent-captcha/

### Maschine statt Mensch?
* Lieber KI als Beamte?
  https://www.republik.ch/2025/07/10/lieber-ki-als-beamte
  via https://systemli.social/@anneroth/114834617603660288
* "The Velvet Sundown": Wie eine KI-Band echten Musikern Konkurrenz macht
  https://www.rnd.de/wirtschaft/the-velvet-sundown-wie-ki-die-musikindustrie-herausfordert-QVV2GMJSANG4LKIL3IX5BEMNMY.html?utm_source=firefox-newtab-de-de
  via https://chaos.social/@mavo/114893160334453080
* Bericht: AWS baut Hunderte von Stellen ab
  https://www.heise.de/news/Bericht-AWS-baut-Hunderte-von-Stellen-ab-10491887.html
* Programmierer wenden ChatGPT den Rücken zu
  https://www.telepolis.de/features/Programmierer-wenden-ChatGPT-den-Ruecken-zu-10491352.html
* bribecoding
  https://hexa.club/@phooky/114875438934842074

## Dystopia
* Über 90 Prozent der Studierenden nutzen im Studium KI. Ex­per­t*in­nen und Beteiligte streiten, ob das der Lehre und dem Lernen hilft oder schadet.
  https://taz.de/Kuenstliche-Intelligenz-an-Universitaeten/!6098917/
* frictionlessness and "AI"
  https://tante.cc/2025/07/30/friction-and-not-being-touched/
* The Hater's Guide To The AI Bubble
  https://www.wheresyoured.at/the-haters-gui/
  https://chaos.social/@stk/114938228748938132
* For the first time, this report reveals emerging tensions in the narrative around AI
  https://report2025.seismic.org

### KI in der Verwaltung
* Neuer KI-Assistenz F13
  https://social.bund.de/@zendis/114907530245674869
  https://gitlab.opencode.de/f13
  https://f13-os.de
* LLMoin kann jetzt bundesweit von Ländern und Kommunen genutzt werden
  https://www.dataport-kommunal.de/aktuell/news/nachricht/llmoin-kann-jetzt-bundesweit-von-laendern-und-kommunen-genutzt-werden/

### AI Act
* EU AI Act: Das Ende der geheimen KI-Trainingsdaten
  https://www.schieb.de/eu-ai-act-das-ende-der-geheimen-ki-trainingsdaten
* 

### Neue Modelle und Tools
* China verstärkt KI-Offensive mit neuen Open-Source-Modellen
  https://www.telepolis.de/features/China-verstaerkt-KI-Offensive-mit-neuen-Open-Source-Modellen-10504672.html
* NuExtract 2.0 is a VLM specialized in extracting structured information (JSON output) from texts, PDFs, scans, etc.
  https://nuextract.ai
  https://www.linkedin.com/posts/patrick-fleith_time-to-extract-what-you-need-from-your-pdfs-activity-7353668961906925568-HD9Q
* Supervision
  https://www.linkedin.com/posts/skalskip92_computervision-objectdetection-opensource-activity-7355515936860209152-zCp4
  https://github.com/roboflow/supervision

### Anwendungsfälle
* KI entwirft Bauplan für einen Beton, der das Klima schützen soll
  https://t3n.de/news/ki-allegro-fm-entwirft-co2-bindenden-beton-1698873/
* Civic Data Lab Datenlabor: Wie gut funktioniert KI-gestützte Session-Dokumentation?
  https://civic-data.de/ki-session-dokumentation-im-test-smartphone-vs-profi-mikrofon-datenschutzkonformer-workflow/

### Ressourcenverbrauch
* Schockierende Zahlen: Bericht enthüllt Umweltauswirkungen von KI
  https://www.basicthinking.de/blog/2025/07/30/ki-umweltbericht/
* Per API oder Web-App: EcoLogits schätzt Ressourcenverbrauch von Sprachmodellen
  https://reset.org/api-web-app-ecologits-schatzt-ressourcenverbrauch-sprachmodellen/

## Transparenz
### Günstlingswirtschaft
* was alles bei der Aufarbeitung von Jens Spahns Milliardenverschwendung schief läuft
  https://www.deutschlandfunkkultur.de/bericht-zu-maskenaffaere-was-und-wann-darf-geschwaerzt-werden-100.html
  via https://chaos.social/@fragdenstaat/114817518539300303
  * Eine Kanzlei geht nun diesen Weg: "Strafanzeige gegen Herrn Bundesminister Spahn wegen Untreue"
    https://ax-vergaberecht.de/strafanzeige-gegen-herrn-bundesminister-spahn-wegen-untreue/
    via https://mastodon.social/@KathrinBB/114817794848757273
* Netzwerk mit Nebenwirkungen: Jens Spahn und der Milliardär
  https://correctiv.org/aktuelles/gesundheit/2025/07/22/netzwerk-mit-nebenwirkungen-jens-spahn-und-der-milliardaer/
* Medien und Medizinsoftware: Der Profiteur von Spahns Politik
  https://correctiv.org/lobbyismus-2/2025/07/25/medien-und-medizinsoftware-der-profiteur-von-spahns-politik-nius-gotthardt/
* Diese Milliarden könnten wir uns Spahn
  https://fragdenstaat.de/artikel/exklusiv/2025/07/die-milliarden-konnten-wir-uns-spahn/  
  * Machtarroganz
    https://bsky.app/profile/mkueper.de/post/3ltbyla5ad22k  
* Amt durch Stimmenkauf?: Noch mehr Anschuldigungen gegen Caroline Bosbach
  https://www.t-online.de/nachrichten/deutschland/innenpolitik/id_100844060/caroline-bosbach-jetzt-wird-ihr-stimmenkauf-vorgeworfen.html
* #Clankriminalität
  https://www.clankriminalitaet.de
  https://bewegung.social/users/a_watch/statuses/114952259663550747
* erstmals wird damit strategische Korruption in Deutschland strafrechtlich geahndet
  https://mastodon.social/@transparency_de/114942170946126735
  https://bewegung.social/@lobbycontrol/114942909402505424
  https://www.zdfheute.de/politik/deutschland/aserbaidschan-affaere-lintner-bestechung-urteil-100.html
* Cum-Cum-Betrug: Der Steuerraub geht weiter
  https://www.dw.com/de/cum-cum-betrug-und-cum-cum-geschaefte-der-steuerraub-geht-weiter-steuertricks-banken-v2/a-73370908

### Lobbyismus
* Exklusiv-Zugang zu SPD-Verhandlern für Lobbys
  https://www.zdfheute.de/politik/deutschland/spd-koalitionsverhandlungen-lobbyverbaende-klima-energie-100.html
* Das sind die Abgeordneten, die vom Bundestag in den Lobbyismus wechselten
  https://www.abgeordnetenwatch.de/recherchen/lobbyismus/das-sind-die-abgeordneten-die-vom-bundestag-in-den-lobbyismus-wechselten
* Bald greifen die neuen EU-Regeln für politische Online-Werbung
  https://netzpolitik.org/2025/targeting-und-transparenz-bald-greifen-die-neuen-eu-regeln-fuer-politische-online-werbung/
  https://cdn.netzpolitik.org/wp-upload/2025/07/2025-07-25_BMDS_RefE_Politische-Werbung.pdf
* Spürnasen-Erfolg: Mit einer Beschwerde beim EU-Transparenzregister haben wir zahlreiche falsche Angaben von Unternehmen und Verbänden aufgedeckt
  https://www.corporateeurope.org/en/complaint-47-million-changes-lobby-register
  via https://bsky.app/profile/lobbycontrol.bsky.social/post/3lu6dgdiyec2d
* Lobbyschlacht um Frequenzbereiche
  https://netzpolitik.org/2025/lobbyschlacht-um-frequenzbereiche-mehr-wlan-oder-mehr-mobilfunk/

### Keine Einblicke
* Mehr "Mut zu Transparenz" im Digitalausschuss - Forderung nach Öffentliche Sitzungen im Digitalausschuss
  https://d-64.org/mut-zu-transparenz/
  https://www.ccc.de/system/uploads/369/original/OffenerBrief_TrasparenzADi.pdf
  https://netzpolitik.org/2025/offener-brief-fehlende-transparenz-im-digitalausschuss/
  via https://mastodon.social/@topio/114827368995018282
* Die IT des Bundes ist "nicht bedarfsgerecht geschützt" und "nicht auf die aktuellen Bedrohungen vorbereitet"
  https://chaos.social/@andre_meister/114942518955593417
  https://netzpolitik.org/wp-upload/2025/07/2025-07-02_BRH_Resilienz-der-staatlichen-Kernfunktionen.pdf
* Versorgungsanstalt des Bundes und der Länder (VBL) ist die betriebliche Altersvorsorge für Angestellte des öffentlichen Diensts - Wo genau das Geld angelegt ist, ist unklar.
  https://fragdenstaat.de/artikel/klagen/2023/01/vbl-klage/

## Politik
* Positionspapier der Geoinformationswirtschaft zur 21. Legislaturperiode
  https://ddgi.de/2025/07/23/positionspapier-der-geoinformationswirtschaft-zur-21-legislaturperiode/

### Bürokratieabbau
* Bürokratieabbau kontra Naturschutz in Brandenburg
  https://www.deutschlandfunk.de/buerokratieabbau-kontra-naturschutz-in-brandenburg-100.html
* "Es wäre die Aufgabe von Journalist:innen, die trübe Hülle des Begriffs Bürokratieabbau abzuschälen und freizulegen, was darunter liegt."
  https://uebermedien.de/105496/buerokratieabbau/
  via https://mastodon.social/@annskaja/114579046638993308

### Gefahr von Rechts
* Naives Verständnis eines neutralen Journalismus
  https://netzpolitik.org/2025/sommerinterview-protest-wer-hilft-hier-der-afd/
  via https://social.vivaldi.net/@StefanMuenz/114896039600051881
* rechter Gewalt unterschätzt
  https://www.zeit.de/gesellschaft/2025-07/todesopfer-rechter-gewalt-faelle-statistik-personen

## Kommunalwahlen NRW
* bonn-o-mat.de
  https://bonn-o-mat.de

## USA
* datarescueproject.org 
  https://mastodon.social/@storytracer/114817353305316229
* For MAGA, Ignorance is Strength
  https://paulkrugman.substack.com/p/for-maga-ignorance-is-strength
* US-Regierung gibt offenbar Gesundheitsdaten an ICE-Behörde weiter
  https://www.zeit.de/politik/ausland/2025-07/us-regierung-weitergabe-gesundheitsdaten-ice-einwanderungsbehoerde
* Radio geeks reveal how to access crucial hurricane data after US Department of Defense cut it off
  https://www.theregister.com/2025/07/21/ssmis_satellite_decoder
  via https://fediscience.org/@petersuber/114898414211520775
* Vorauseilendes Schweigen
  https://www.mdr.de/altpapier/das-altpapier-4268.html
* Public Health Map uses freely available, openly accessible, federal data to illustrate the local health capacity consequences of rapidly changing policies under this Administration.
  https://theimpactproject.org/public-health-map/
  https://sciences.social/@csmarcum/114949468374970178
* Online Safety Act: Wikipedia could ‘introduce cap’ on British visitors
  https://www.msn.com/en-gb/money/technology/online-safety-act-wikipedia-could-introduce-cap-on-british-visitors-amid-osa-high-court-challenge/ar-AA1Jrz5d

## Überwachung
* Bargeld-Tracking
  https://netzpolitik.org/2025/bargeld-tracking-du-hast-ueberwachungsinstrumente-im-portemonnaie/
* Gesichtserkennung und KI: Innenminister Dobrindt plant neues Sicherheitspaket
  https://netzpolitik.org/2025/gesichtserkennung-und-ki-innenminister-dobrindt-plant-neues-sicherheitspaket/
  https://background.tagesspiegel.de/digitalisierung-und-ki/briefing/sicherheitspaket-2-0-palantir-statt-grundrechtsschutz
  https://d-64.social/@erik/114907221422900823
* Das Überwachungsimperium
  https://www.blaetter.de/ausgabe/2025/august/das-ueberwachungsimperium
* Die Gesellschaft für Freiheitsrechte hat heute mit Unterstützung des Chaos Computer Clubs Verfassungsbeschwerde gegen die automatisierte polizeiliche Datenanalyse in Bayern erhoben
  https://www.ccc.de/de/updates/2025/palantir-bayern
* Was die Software von Palantir eigentlich macht und warum die GFF das Mittel einer Verfassungsbeschwerde gewählt hat, hat uns Franziska Görlitz von der GFF im Gespräch erzählt.
  https://radiocorax.de/verfassungsbeschwerde-gegen-einsatz-von-palantir-bei-der-bayrischen-polizei/
* Die gefährliche und umstrittene Welt von Palantir
  https://taz.de/ARD-Doku/!6099626/

## Recap
* FSiC2025
  https://wiki.f-si.org/index.php?title=FSiC2025
  via https://chaos.social/users/mavo/statuses/114782895710810071
* Jahrestreffen der kommunalen Mitglieder von Transparency Deutschland in Birkenwerder
  https://www.transparency.de/aktuelles/detail/article/jahrestreffen-kommunale-mitglieder-2025
* Relive The Tech People Want Summit: 2025 Documentation
  https://blog.okfn.org/2025/07/17/relive-the-tech-people-want-summit-2025-documentation/
* CODING.WATERKANT
  https://coding.waterkant.sh
  https://www.linkedin.com/posts/jonas-dagefoerde_ki-digitalisierung-publicai-ugcPost-7354522232443809793-sNXv

## Und sonst so
* Permacomputing – The Screenless Office
  https://blog.campact.de/2025/07/permacomputing-ein-gespraech-mit-brendan-howell/
  via https://mastodon.online/users/frebelt/statuses/114868866982831060
* Pointer Pointer
  https://pointerpointer.com
  via https://mastodon.social/users/timpritlove/statuses/114915072784541683  

## Fristen
* EnviroInfo 2025: Open Data, Open Science, and Open Society for a sustainable future
  * https://enviroinfo2025.gi.de/call-for-papers
* PartWiss 2025, Abstract-Einreichungen bis 07.08.2025
  * https://www.partizipation-wissenschaft.de/konferenz_2025_leipzig/
* Datenspuren, bis 15.08.2025
  * https://events.ccc.de/2025/04/05/ds25-ankuendigung/
* MRMCD, bis 17.08.2025
  * https://talks.mrmcd.net/2025/cfp
* EnvioInfo Potsdam 2025, Deadline Paper Submission (camera ready): 04.08.2025, Deadline Poster and Talk only Submission: 18.08.2025
  * https://enviroinfo2025.gi.de/important-dates
* eGovernment Wettbewerb - Publikumsvoting 2025, bis 17.08.2025
  https://egovernmentwettbewerb.de/publikumsvoting/
* culture.explore(data) - An Open Cultural Data Hackathon, Staatsbibliothek zu Berlin, 07.10.2025 - 08-10.2025, Anmeldung bis 15.09.2025
  * https://lab.sbb.berlin/culture-explore-data/
* PIAZZA 2025, Anmeldung von Workshops bis 15.09.2025
  * https://piazza-konferenz.de/jetzt-anmelden-25/

## Veranstaltungen ([Kalender/Karte](https://events.codeforleipzig.de))
* Dienstag, 05.08.2025, 20:00-22:00, c-base, Rungestraße 20, 10179 Berlin und auch online: **Netzpolitisches Grillen** <a title='Kalendereintrag Netzpolitisches Grillen' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vTmV0enBvbGl0aXNjaGVzIEdyaWxsZW4vL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNTA4MDJUMTkyMTE5Wg0KRFRTVEFSVDoyMDI1MDgwNVQyMDAwMDANCkRURU5EOjIwMjUwODA1VDIyMDAwMA0KU1VNTUFSWTpOZXR6cG9saXRpc2NoZXMgR3JpbGxlbg0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly9kaWdpdGFsZWdlc2VsbHNjaGFmdC5kZS8yMDI1LzA3L25ldHpwb2xpdGlzY2hlcy1ncmlsbGVuLTIvDQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOmMtYmFzZVwsIFJ1bmdlc3RyYcOfZSAyMFwsIDEwMTc5IEJlcmxpbiB1bmQgYXVjaCBvbmxpbmUNCkdFTzo1Mi41MTI5NzM1OzEzLjQyMDEzMTMNCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://digitalegesellschaft.de/2025/07/netzpolitisches-grillen-2/
* Donnerstag, 07.08.2025, 18:00-21:00, WikiBär Wikipedia, Köpenicker Straße 45, 10179 Berlin: **Jugend editiert** <a title='Kalendereintrag Jugend editiert' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vSnVnZW5kIGVkaXRpZXJ0Ly9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjUwODAyVDE5MjExOVoNCkRUU1RBUlQ6MjAyNTA4MDdUMTgwMDAwDQpEVEVORDoyMDI1MDgwN1QyMTAwMDANClNVTU1BUlk6SnVnZW5kIGVkaXRpZXJ0DQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL3d3dy53aWtpbWVkaWEuZGUvdmVyYW5zdGFsdHVuZ2VuL2p1Z2VuZC1lZGl0aWVydC8NCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046V2lraULDpHIgV2lraXBlZGlhXCwgS8O2cGVuaWNrZXIgU3RyYcOfZSA0NVwsIDEwMTc5IEJlcmxpbg0KR0VPOjUyLjUwMjY3NzA2MjkzNjA3OzEzLjQzOTI1MDM0ODcyMTU0NA0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://www.wikimedia.de/veranstaltungen/jugend-editiert/
* Donnerstag, 07.08.2025, 19:31-19:31, online: **Bits und Bäume Community Treffen** <a title='Kalendereintrag Bits und Bäume Community Treffen' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vQml0cyB1bmQgQsOkdW1lIENvbW11bml0eSBUcmVmZmVuLy9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjUwODAyVDE5MjExOVoNCkRUU1RBUlQ6MjAyNTA4MDdUMTkzMTAwDQpEVEVORDoyMDI1MDgwN1QxOTMxMDANClNVTU1BUlk6Qml0cyB1bmQgQsOkdW1lIENvbW11bml0eSBUcmVmZmVuDQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL2JpdHMtdW5kLWJhZXVtZS5vcmcvdGVybWluZS8NCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046b25saW5lDQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://bits-und-baeume.org/termine/
* Samstag, 09.08.2025, 14:00-18:00, c-base, Rungestraße 20, 10179 Berlin: **Linux install Party - endof10** <a title='Kalendereintrag Linux install Party - endof10' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vTGludXggaW5zdGFsbCBQYXJ0eSAtIGVuZG9mMTAvL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNTA4MDJUMTkyMTE5Wg0KRFRTVEFSVDoyMDI1MDgwOVQxNDAwMDANCkRURU5EOjIwMjUwODA5VDE4MDAwMA0KU1VNTUFSWTpMaW51eCBpbnN0YWxsIFBhcnR5IC0gZW5kb2YxMA0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly9jLWJhc2Uub3JnL2NhbGVuZGFyLyN2aWV3PW1vbnRoJmRhdGU9MjAyNS0wOC0wMSZldmVudD01Y2ZmMDU4Yy1kMjM2LTQwYjMtODExNi1iZGMzNzRmY2IzNGENCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046Yy1iYXNlXCwgUnVuZ2VzdHJhw59lIDIwXCwgMTAxNzkgQmVybGluDQpHRU86NTIuNTEyOTczNTsxMy40MjAxMzEzDQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://c-base.org/calendar/#view=month&date=2025-08-01&event=5cff058c-d236-40b3-8116-bdc374fcb34a
* Freitag, 15.08.2025, 16:00, bis Sonntag, 17.08.2025, 16:00, Bitwäscherei, Neue Hard 12, 8005 Zürich (Schweiz): **Jugend hackt Zürich 2025** <a title='Kalendereintrag Jugend hackt Zürich 2025' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vSnVnZW5kIGhhY2t0IFrDvHJpY2ggMjAyNS8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI1MDgwMlQxOTIxMTlaDQpEVFNUQVJUOjIwMjUwODE1VDE2MDAwMA0KRFRFTkQ6MjAyNTA4MTdUMTYwMDAwDQpTVU1NQVJZOkp1Z2VuZCBoYWNrdCBaw7xyaWNoIDIwMjUNCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vYW5tZWxkdW5nLmp1Z2VuZGhhY2t0Lm9yZy9zY2h3ZWl6L2poemgyMDI1Lw0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpCaXR3w6RzY2hlcmVpXCwgTmV1ZSBIYXJkIDEyXCwgODAwNSBaw7xyaWNoIChTY2h3ZWl6KQ0KR0VPOjQ3LjM4NzAzMTY7OC41MjA0MDI0DQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://anmeldung.jugendhackt.org/schweiz/jhzh2025/
* Samstag, 16.08.2025, 09:30, bis Sonntag, 17.08.2025, 17:00, Hochschule Bonn-Rhein-Sieg, Grantham-Allee 20, 53757 Sankt Augustin: **FrOSCon** <a title='Kalendereintrag FrOSCon' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vRnJPU0Nvbi8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI1MDgwMlQxOTIxMTlaDQpEVFNUQVJUOjIwMjUwODE2VDA5MzAwMA0KRFRFTkQ6MjAyNTA4MTdUMTcwMDAwDQpTVU1NQVJZOkZyT1NDb24NCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vZnJvc2Nvbi5vcmcNCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046SG9jaHNjaHVsZSBCb25uLVJoZWluLVNpZWdcLCBHcmFudGhhbS1BbGxlZSAyMFwsIDUzNzU3IFNhbmt0IEF1Z3VzdGluDQpHRU86NTAuNzc5NTYwMjAwMDAwMDA2OzcuMTgyMTcwMTI4NzMwOTI1DQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://froscon.org
* Donnerstag, 21.08.2025, 12:00-12:30, online: **CDL Espresso Talk | Quereinstieg in Data Science: Von der Soziologie zu Daten für die Zivilgesellschaft** <a title='Kalendereintrag CDL Espresso Talk | Quereinstieg in Data Science: Von der Soziologie zu Daten für die Zivilgesellschaft' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vQ0RMIEVzcHJlc3NvIFRhbGsgfCBRdWVyZWluc3RpZWcgaW4gRGF0YSBTY2llbmNlOiBWb24gZGVyIFNvemlvbG9naWUgenUgRGF0ZW4gZsO8ciBkaWUgWml2aWxnZXNlbGxzY2hhZnQvL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNTA4MDJUMTkyMTE5Wg0KRFRTVEFSVDoyMDI1MDgyMVQxMjAwMDANCkRURU5EOjIwMjUwODIxVDEyMzAwMA0KU1VNTUFSWTpDREwgRXNwcmVzc28gVGFsayB8IFF1ZXJlaW5zdGllZyBpbiBEYXRhIFNjaWVuY2U6IFZvbiBkZXIgU296aW9sb2dpZSB6dSBEYXRlbiBmw7xyIGRpZSBaaXZpbGdlc2VsbHNjaGFmdA0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly9jb3JyZWxhaWQub3JnL3ZlcmFuc3RhbHR1bmdlbi9lc3ByZXNzb19xdWVyZWluc3RpZWdfZGF0YXNjaWVuY2U/dmlld1R5cGU9bGlzdA0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpvbmxpbmUNCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://correlaid.org/veranstaltungen/espresso_quereinstieg_datascience?viewType=list
* Donnerstag, 21.08.2025, 15:00, bis Montag, 25.08.2025, 12:00, Jugendzeltplatz Bonn, Venner Str. 54, 53177 Bonn: **Hack'n'Sun** <a title='Kalendereintrag Hack'n'Sun' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vSGFjayduJ1N1bi8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI1MDgwMlQxOTIxMTlaDQpEVFNUQVJUOjIwMjUwODIxVDE1MDAwMA0KRFRFTkQ6MjAyNTA4MjVUMTIwMDAwDQpTVU1NQVJZOkhhY2snbidTdW4NCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vdGVja2lkcy5vcmcvYmxvZy8yMDI1LzAzL2hhY2tuc3VuLw0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpKdWdlbmR6ZWx0cGxhdHogQm9ublwsIFZlbm5lciBTdHIuIDU0XCwgNTMxNzcgQm9ubg0KR0VPOjUwLjY4MTA4NDs3LjEzMzM5OQ0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://teckids.org/blog/2025/03/hacknsun/
* Samstag, 23.08.2025, 10:00, bis Sonntag, 24.08.2025, 17:00, Hannover Congress Centrum (HCC), Theodor-Heuss-Platz 1-3, 30175 Hannover: **Maker Faire Hannover** <a title='Kalendereintrag Maker Faire Hannover' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vTWFrZXIgRmFpcmUgSGFubm92ZXIvL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNTA4MDJUMTkyMTE5Wg0KRFRTVEFSVDoyMDI1MDgyM1QxMDAwMDANCkRURU5EOjIwMjUwODI0VDE3MDAwMA0KU1VNTUFSWTpNYWtlciBGYWlyZSBIYW5ub3Zlcg0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly9tYWtlci1mYWlyZS5kZS9oYW5ub3Zlci8NCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046SGFubm92ZXIgQ29uZ3Jlc3MgQ2VudHJ1bSAoSENDKVwsIFRoZW9kb3ItSGV1c3MtUGxhdHogMS0zXCwgMzAxNzUgSGFubm92ZXINCkdFTzo1Mi4zNzczOTYyNjI5MjE5Njs5Ljc2OTIxNjI3NTY2NzA3OQ0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://maker-faire.de/hannover/
* Montag, 25.08.2025, 18:00, bis Sonntag, 31.08.2025, 22:00, LABOR e.V. Hackspace Bochum, Alleestraße 50, 44793 Bochum: **20 Jahre Labor** <a title='Kalendereintrag 20 Jahre Labor' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vMjAgSmFocmUgTGFib3IvL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNTA4MDJUMTkyMTE5Wg0KRFRTVEFSVDoyMDI1MDgyNVQxODAwMDANCkRURU5EOjIwMjUwODMxVDIyMDAwMA0KU1VNTUFSWToyMCBKYWhyZSBMYWJvcg0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly93aWtpLmRhcy1sYWJvci5vcmcvdy8yMF9qYWhyZV9sYWJvcg0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpMQUJPUiBlLlYuIEhhY2tzcGFjZSBCb2NodW1cLCBBbGxlZXN0cmHDn2UgNTBcLCA0NDc5MyBCb2NodW0NCkdFTzo1MS40ODA5NDI2OzcuMjA4NjAyOA0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://wiki.das-labor.org/w/20_jahre_labor
* Dienstag, 26.08.2025, 10:00-11:00, online: **SCS-Standards in der Praxis: Von der Umsetzung zur Zertifizierung** <a title='Kalendereintrag SCS-Standards in der Praxis: Von der Umsetzung zur Zertifizierung' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vU0NTLVN0YW5kYXJkcyBpbiBkZXIgUHJheGlzOiBWb24gZGVyIFVtc2V0enVuZyB6dXIgWmVydGlmaXppZXJ1bmcvL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNTA4MDJUMTkyMTE5Wg0KRFRTVEFSVDoyMDI1MDgyNlQxMDAwMDANCkRURU5EOjIwMjUwODI2VDExMDAwMA0KU1VNTUFSWTpTQ1MtU3RhbmRhcmRzIGluIGRlciBQcmF4aXM6IFZvbiBkZXIgVW1zZXR6dW5nIHp1ciBaZXJ0aWZpemllcnVuZw0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly9ldmVudHMuc292ZXJlaWduY2xvdWRzdGFjay5vcmcvd2ViaW5hci8NCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046b25saW5lDQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://events.sovereigncloudstack.org/webinar/
* Dienstag, 26.08.2025, 11:30-12:30, online: **CorrelCompact | Open Data für Non-Profits: Schätze finden und nutzen** <a title='Kalendereintrag CorrelCompact | Open Data für Non-Profits: Schätze finden und nutzen' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vQ29ycmVsQ29tcGFjdCB8IE9wZW4gRGF0YSBmw7xyIE5vbi1Qcm9maXRzOiBTY2jDpHR6ZSBmaW5kZW4gdW5kIG51dHplbi8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI1MDgwMlQxOTIxMTlaDQpEVFNUQVJUOjIwMjUwODI2VDExMzAwMA0KRFRFTkQ6MjAyNTA4MjZUMTIzMDAwDQpTVU1NQVJZOkNvcnJlbENvbXBhY3QgfCBPcGVuIERhdGEgZsO8ciBOb24tUHJvZml0czogU2Now6R0emUgZmluZGVuIHVuZCBudXR6ZW4NCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vY29ycmVsYWlkLm9yZy92ZXJhbnN0YWx0dW5nZW4vY2MyNS1vcGVuZGF0YT92aWV3VHlwZT1saXN0DQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOm9ubGluZQ0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://correlaid.org/veranstaltungen/cc25-opendata?viewType=list
* Dienstag, 26.08.2025, 19:30-21:00, online: **OSM Radinfra-Mapathon #3** <a title='Kalendereintrag OSM Radinfra-Mapathon #3' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vT1NNIFJhZGluZnJhLU1hcGF0aG9uICMzLy9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjUwODAyVDE5MjExOVoNCkRUU1RBUlQ6MjAyNTA4MjZUMTkzMDAwDQpEVEVORDoyMDI1MDgyNlQyMTAwMDANClNVTU1BUlk6T1NNIFJhZGluZnJhLU1hcGF0aG9uICMzDQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL29zbWNhbC5vcmcvZXZlbnQvMzg0Mi8NCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046b25saW5lDQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://osmcal.org/event/3842/
* Mittwoch, 27.08.2025, 09:00, bis Sonntag, 31.08.2025, 18:00, Zeltplatz Gunzenberg an der Talsperre Pöhl, Hauptstraße 38, 08543 Pöhl: **thereisno.camp** <a title='Kalendereintrag thereisno.camp' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vdGhlcmVpc25vLmNhbXAvL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNTA4MDJUMTkyMTE5Wg0KRFRTVEFSVDoyMDI1MDgyN1QwOTAwMDANCkRURU5EOjIwMjUwODMxVDE4MDAwMA0KU1VNTUFSWTp0aGVyZWlzbm8uY2FtcA0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly90aGVyZWlzbm8uY2FtcA0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpaZWx0cGxhdHogR3VuemVuYmVyZyBhbiBkZXIgVGFsc3BlcnJlIFDDtmhsXCwgSGF1cHRzdHJhw59lIDM4XCwgMDg1NDMgUMO2aGwNCkdFTzo1MC41Mzg3OTI5NTsxMi4xODUyMzU4OTU4NDcwMjUNCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://thereisno.camp
* Donnerstag, 28.08.2025, 11:00-12:00, online: **openCode Connect August 2025: Sovereign Cloud Stack – Die Basis für Digitale Souveränität in der Cloud** <a title='Kalendereintrag openCode Connect August 2025: Sovereign Cloud Stack – Die Basis für Digitale Souveränität in der Cloud' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vb3BlbkNvZGUgQ29ubmVjdCBBdWd1c3QgMjAyNTogU292ZXJlaWduIENsb3VkIFN0YWNrIOKAkyBEaWUgQmFzaXMgZsO8ciBEaWdpdGFsZSBTb3V2ZXLDpG5pdMOkdCBpbiBkZXIgQ2xvdWQvL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNTA4MDJUMTkyMTE5Wg0KRFRTVEFSVDoyMDI1MDgyOFQxMTAwMDANCkRURU5EOjIwMjUwODI4VDEyMDAwMA0KU1VNTUFSWTpvcGVuQ29kZSBDb25uZWN0IEF1Z3VzdCAyMDI1OiBTb3ZlcmVpZ24gQ2xvdWQgU3RhY2sg4oCTIERpZSBCYXNpcyBmw7xyIERpZ2l0YWxlIFNvdXZlcsOkbml0w6R0IGluIGRlciBDbG91ZA0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly9vcGVuY29kZS5kZS9kZS9ha3R1ZWxsZXMvZXZlbnRzL29wZW5jb2RlLWNvbm5lY3QtYXVndXN0LTIwMjUtNDc4NQ0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpvbmxpbmUNCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://opencode.de/de/aktuelles/events/opencode-connect-august-2025-4785
* Donnerstag, 28.08.2025, 12:00, bis Sonntag, 31.08.2025, 12:00, Jugendraum, K 61, 56459 Todtenberg, Rotenhain, Westerburg: **WAMP - Das Camp im Westerwald** <a title='Kalendereintrag WAMP - Das Camp im Westerwald' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vV0FNUCAtIERhcyBDYW1wIGltIFdlc3RlcndhbGQvL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNTA4MDJUMTkyMTE5Wg0KRFRTVEFSVDoyMDI1MDgyOFQxMjAwMDANCkRURU5EOjIwMjUwODMxVDEyMDAwMA0KU1VNTUFSWTpXQU1QIC0gRGFzIENhbXAgaW0gV2VzdGVyd2FsZA0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly90aGVyZWlzbm8uY2FtcA0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpKdWdlbmRyYXVtXCwgSyA2MVwsIDU2NDU5IFRvZHRlbmJlcmdcLCBSb3RlbmhhaW5cLCBXZXN0ZXJidXJnDQpHRU86NTAuNjAzNzg7Ny44ODEyNg0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://thereisno.camp
* Freitag, 05.09.2025, 10:00, bis Samstag, 06.09.2025, 15:00, Erich-Brost-Institut für Internationalen Journalismus auf dem Campus Nord der TU Dortmund, Otto-Hahn-Straße 2, 44227 Dortmund: **SciCAR 2025** <a title='Kalendereintrag SciCAR 2025' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vU2NpQ0FSIDIwMjUvL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNTA4MDJUMTkyMTE5Wg0KRFRTVEFSVDoyMDI1MDkwNVQxMDAwMDANCkRURU5EOjIwMjUwOTA2VDE1MDAwMA0KU1VNTUFSWTpTY2lDQVIgMjAyNQ0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly9uZXR6d2Vya3JlY2hlcmNoZS5vcmcvd2lyLXZlcm5ldHplbi9zY2ljYXIvDQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOkVyaWNoLUJyb3N0LUluc3RpdHV0IGbDvHIgSW50ZXJuYXRpb25hbGVuIEpvdXJuYWxpc211cyBhdWYgZGVtIENhbXB1cyBOb3JkIGRlciBUVSBEb3J0bXVuZFwsIE90dG8tSGFobi1TdHJhw59lIDJcLCA0NDIyNyBEb3J0bXVuZA0KR0VPOjUxLjQ5MTE0OTE5OTk5OTk5NTs3LjQxNTU4MTE5ODUzNDMwMQ0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://netzwerkrecherche.org/wir-vernetzen/scicar/
* Freitag, 05.09.2025, 12:00, bis Sonntag, 07.09.2025, 12:00, La Grange e.V., Gingster Chaussee 6, 18528 Bergen auf Rügen: **InselChaos 2025** <a title='Kalendereintrag InselChaos 2025' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vSW5zZWxDaGFvcyAyMDI1Ly9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjUwODAyVDE5MjExOVoNCkRUU1RBUlQ6MjAyNTA5MDVUMTIwMDAwDQpEVEVORDoyMDI1MDkwN1QxMjAwMDANClNVTU1BUlk6SW5zZWxDaGFvcyAyMDI1DQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL2luc2VsY2hhb3MuZGUNCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046TGEgR3JhbmdlIGUuVi5cLCBHaW5nc3RlciBDaGF1c3NlZSA2XCwgMTg1MjggQmVyZ2VuIGF1ZiBSw7xnZW4NCkdFTzo1NC40MjQ3MDQ7MTMuNDE1NTY1DQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://inselchaos.de
* Freitag, 12.09.2025, 13:30, bis Sonntag, 14.09.2025, 15:30, Piloty-Gebäude (S2|02), TU Darmstadt, Hochschulstraße 10, 64289 Darmstadt: **Meta-Rhein-Main-Chaos-Days (MRMCD) 2025** <a title='Kalendereintrag Meta-Rhein-Main-Chaos-Days (MRMCD) 2025' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vTWV0YS1SaGVpbi1NYWluLUNoYW9zLURheXMgKE1STUNEKSAyMDI1Ly9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjUwODAyVDE5MjExOVoNCkRUU1RBUlQ6MjAyNTA5MTJUMTMzMDAwDQpEVEVORDoyMDI1MDkxNFQxNTMwMDANClNVTU1BUlk6TWV0YS1SaGVpbi1NYWluLUNoYW9zLURheXMgKE1STUNEKSAyMDI1DQpMSU5LO1ZBTFVFPVVJRDpodHRwczovLzIwMjUubXJtY2QubmV0L2RlLw0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpQaWxvdHktR2Viw6R1ZGUgKFMyfDAyKVwsIFRVIERhcm1zdGFkdFwsIEhvY2hzY2h1bHN0cmHDn2UgMTBcLCA2NDI4OSBEYXJtc3RhZHQNCkdFTzo0OS44Nzc1MDkxNDk5OTk5OTU7OC42NTQ1NDYyOTk1ODg1MjMNCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://2025.mrmcd.net/de/
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
