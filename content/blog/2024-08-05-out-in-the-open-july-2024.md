---
title: "Datengewäsch – Out in the Open Juli 2024"
author: "Jörg Reichert (Code for Leipzig)"
date: '2024-08-05T08:00:00+02:00'
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

Auch das sich in Gründung befindende Dateninstitut entwickelt sich immer mehr zu einem Anti-Pattern. So findet beispielsweise eine Gemeinwohlorientierung im aktuellen Konzept keine Erwähnung mehr. Aline Blankertz und Henriette Litta [nennen in ihrer gemeinsamen Stellungnahme noch weitere Gründe](https://okfn.de/blog/2024/07/dateninstitut-wmde-okf/), warum sich sowohl die Wikimedia Deutschland als auch die Open Knowledge Foundation Deutschland gegen eine Beteiligung an dem Bewerbungsverfahren entschieden haben.

Es gibt natürlich aber auch positive Patterns. [Die Checkliste](https://caltechlibrary.github.io/RDMworkbook/data-sharing.html#accessible-spreadsheets), die Kristin Briney [vorschlägt abzuarbeiten](http://dataabinitio.com/?p=1158), wenn man tabellarische Daten maschinenlesbar veröffentlicht, kann man als solche Patterns ansehen. 

* Förderrichtlinie Open Data
  Schleswig-Holstein fördert kommunale Open Data Projekte zur Anbindung an das landesweite Portal.
  https://infomedia.sh/2024/07/03/foerderrichtlinie-open-data/
  via https://social.bund.de/@opendatabund/112750420933989776
* seit zwei wochen sind brandneue #luftbilder von #berlin aus diesem jahr verfügbar - inkl. vergleich alter bilder seit 1928.
  https://luftbilder.berlin.codefor.de/
  https://github.com/codeforberlin/luftbilder.berlin.codefor.de/
* Von offenen Daten und smarten Städten. Das große ODIS-Interview
  https://citylab-berlin.org/de/blog/von-offenen-daten-und-smarten-staedten-das-grosse-odis-interview/
* Mit dem internationalen Wettbewerb Coordinate Me gab es jetzt einen extra Boost: 3228 Teilnehmende & 129.102 bearbeitete Wikidata-Einträge! Darunter 15.261 komplett neu angelegte Items.
  https://wikimedia.at/coordinate-me-freie-daten-im-wettbewerb/
  via https://social.wikimedia.de/@wikimediaDE/112756424082779324
* Unsere Zensusdatenbank mit ersten Daten zu Demografie, Gebäude + Wohnungen ist online! Hier könnt ihr Ergebnisse in Tabellen für Bund, Länder, Kreise, Gemeinden und Bezirke abrufen und mit anderen Merkmalen kombinieren:
  https://ergebnisse.zensus2022.de/datenbank/online/
  via https://social.bund.de/@destatis/112767071708913025
* L'open data du sport et des Jeux Olympiques et Paralympiques
  https://www.data.gouv.fr/fr/posts/lopen-data-du-sport-et-des-jeux-olympiques-et-paralympiques/
  * WADA Anti-Doping Statistics
    https://www.wada-ama.org/en/data-research/anti-doping-statistics

## Open Data Tools
* Wir haben soeben DCAT-AP.de 3.0 im Entwurf veröffentlicht.
  https://www.dcat-ap.de/def/dcatde/3.0/spec/
  https://gitlab.opencode.de/fitko/govdata/dcat-ap.de/-/issues
  via https://social.bund.de/@opendata/112773725117071830
* SPARQL Anything is an open source tool that lets you use SPARQL to query data in a long list of popular formats: XML, JSON, CSV, HTML, Excel, Text, Binary, EXIF, File System, Zip/Tar, Markdown, YAML, Bibtex, DOCx, and PPTx.
  https://www.bobdc.com/blog/sparqlanything/
* Use Datasette-Lite to share a CSV file as a searchable, online database
  https://glam-workbench.net/glam-tools/datasette/
  https://glam-workbench.net/
  via https://hcommons.social/@wragge/112807814238076888

## Geodaten / Karten
* Gibt es eine Möglichkeit Änderungen in der #OpenStreetMap vorher/nachher zu vergleichen?
  * https://overpass-api.de/achavi/
  * https://osmcha.org/
  * https://osmlab.github.io/osm-deep-history/
  via https://chaos.social/@schenklklopfer/112732976854803585
* Hab gerade dieses coole Spiel gefunden, das auf OSM-Daten basiert. Man gibt einen Ort an, an dem man sich gut auskennt und muss dann in einem Umkreis von 2km auf einer unbeschrifteten Karte Straßennamen bestimmen: https://backofyourhand.com
via https://chaos.social/@bodems/112740666259947428
* VCÖ CHECK: Problemstellen beim Gehen
Mehr schattenspendende Bäume entlang von Gehsteigen, Schutz vor Sonne auch bei Fußgängerampeln, die Wartezeiten verkürzen. Bevölkerung ist aufgerufen, #Hitze-Hotspots für Fußgänger:innen in Online-Karte einzutragen
  https://map.vcoe.at/gehen/
  via https://wien.rocks/@vcoe_mobilitaet_mit_zukunft/112762057144103761
* Flächengerechtigkeit: How much space do car parks actually take up compared to playgrounds and green spaces? I made a tool that allows you to explore and compare these public spaces in Berlin.
  https://www.hanshack.com/parking/
  via https://troet.cafe/@hanshack/112766511080545141
  * passend dazu: 
    * Senatsverwaltung veröffentlicht erstmalige Kartierung sämtlicher öffentlicher Parkplätze an Straßen im Innenstadtbereich
    https://viz.berlin.de/aktuelle-meldungen/kartierung-samtlicher-offentlicher-parkplatze-im-innenstadtbereich/
    * Parkraumkartierung
      https://viz.berlin.de/verkehr-in-berlin/parken/parkraumkartierung/
* Die #Verwaltungsgebiete 1:250.000 mit #Einwohnerzahlen (VG250-EW) wurden aktualisiert und stehen kostenfrei in unserem #OpenData-Bereich bereit. #Geodaten #Grenzen
  https://www.bkg.bund.de/SharedDocs/Produktinformationen/BKG/DE/P-2024/240617_VG250EW.html
* Let’s make contour maps
  https://www.letsmakeamap.com/blog/lets-make-contour-maps
* 3D-Stadtmodelle Zürich
  https://www.stadt-zuerich.ch/3d-stadtmodelle
* Denkmal 4D Köln: Metadaten über die Denkmäler der Stadt Köln pflegen
  Ziel ist eine möglichst vollständige Erfassung aller Denkmäler als 3D Modelle
  https://codefor.de/projekte/cologne-denkmal4d/
* Crowdsourcing-Plattform Wheelmap
  Treppen, Rampen, Aufzüge: Seit 14 Jahren kartieren Ak­ti­vis­t:in­nen, welche Orte in der Stadt rollstuhlgerecht sind. Nun wird das Projekt erweitert.
  https://taz.de/Crowdsourcing-Plattform-Wheelmap/!6024119/

## Mobilität
* Cities moving
  With the model share data for 877 cities across over 61 countries, the visualizations below allow to compare the proportion of journeys to work in different countries, regions, income groups, and population sizes. In the end, it also allows to explore all the cities on the map.
  https://vis.csh.ac.at/citiesmoving/
  via https://social.coop/users/ZaneSelvans/statuses/112709320991373239
* strecken.info und DB LiveMaps basieren auf einer interaktiven, webbasierten Karte des Schienennetz der DB InfraGO AG. strecken.info ist öffentlich zugänglich und bildet Baueinschränkungen, Störungen und Streckenruhen ab.
  Die neue Version läuft jetzt flüssiger.
  https://strecken-info.de
* Flüge über Plattformen zu buchen ist leicht. Für Bahnreisen gibt es keine vergleichbaren Möglichkeiten – würde aber deren Attraktivität steigern und die nachhaltige Fortbewegung voranbringen
  https://reset.org/warum-haben-wir-keinen-skyscanner-fuer-zuege/
* Note to the new EU Transport Commissioner: fixing cross border rail ticketing will help millions of Europeans, and can secure your legacy
  https://jonworth.eu/note-to-the-new-eu-transport-commissioner-fixing-cross-border-rail-ticketing-will-help-millions-of-europeans-and-can-secure-your-legacy/
* Initiative zu Leichteren Zugang zu Busabfahrtsplänen in Europa
  https://www.busliveinfo.eu
  * zugehörige Petition: Echtzeit-Informationen an Bushaltestellen in der EU
    https://eci.ec.europa.eu/039/public/#/screen/home
* Calculating Connectivity Rank for Bike Network Planning
  https://mark.stosberg.com/bike-network-connectivity-rank/?ref=mastodon
* Enhancing school safety with openrouteservice: the digital school route planner
  https://heigit.org/enhancing-school-safety-with-openrouteservice-the-digital-school-route-planner/
* Die StZN hat gemeinsam mit der Rechercheplattform CORRECTIV eine Crowdaktion für sichere Schulwege gestartet. Bis in den Herbst können Eltern (und andere Interessierte 😉) per simplem Online-Tool Gefahrenstellen rund um Schulen melden.
  https://achtungschulweg.crowdnewsroom.org/callouts/schulweg-stuttgart/map
  via https://verkehrswende.social/@KidicalMass_S/112835827269387568
* Unfalldaten
  * Verkehrunfall-Daten für 2023 veröffentlicht
    https://www.destatis.de/DE/Presse/Pressemitteilungen/2024/07/PD24_261_46241.html
  * Unfallatlas
    https://unfallatlas.statistikportal.de
  * Mitfahrzentrale Heatview (Rad-)Unfälle aktualisiert
    https://chaos.social/@mfdz/112806484663218499
* Mobility Data Space der Bundesregierung – so kommen wir nicht weiter
  https://d-64.org/mobility-data-space-der-bundesregierung-so-kommen-wir-nicht-weiter/
* The Mobility Database: Currently serving data from over 2000 GTFS feeds in 70 countries.
  https://mobilitydatabase.org

## Wirtschaft
* "Cheapflation" trifft die Schwachen
  https://www.n-tv.de/wirtschaft/Cheapflation-trifft-die-Schwachen-article25084108.html
* The Billion Prices Project - It is no longer active, but its initiatives continue through PriceStats (inflation measurement) and the HBS Pricing Lab (academic research)
  https://thebillionpricesproject.com
* Vermögensregister geplant - EU will umfassende Datenbank zum Vermögen aller Bürger aufbauen - was dahinter steckt
  https://www.msn.com/de-de/finanzen/top-stories/verm%C3%B6gensregister-geplant-eu-will-umfassende-datenbank-zum-verm%C3%B6gen-aller-b%C3%BCrger-aufbauen-was-dahinter-steckt/ar-BB1qqq1a
* Empirica Immobilienpreis-Index
  https://www.empirica-regio.de
* Open Supply Hub
  https://opensupplyhub.org/

## Klima
* am 1. Juli trat das Klimaanpassungsgesetz in Kraft
  Das heißt: Die Klimaanpassungsstrategien und die integrierte Klimaanpassung sollen auf einer soliden Datengrundlage basieren. Da sind vor allem die Klimarisikoanalysen zu nennen, die vom Bund und von den Ländern erstellt werden müssen.
  Mit der "Klimawirkungs- und Risikoanalyse" des UBA ist ein solches Instrument auf Bundesebene bereits eingerichtet. Daneben soll ein Monitoringbericht die Folgen des Klimawandels und den Stand der Klimaanpassungsstrategie im Vier-Jahres-Rhythmus abbilden. Die Veröffentlichung der Informationen ermöglicht zudem eine Kontrolle durch die Öffentlichkeit."
  https://www.zdf.de/nachrichten/politik/deutschland/klimaanpassungsgesetz-juli-massnahmen-100.html
* Teil des neuen Online-Magazin "Neue Zukunft", mit Inhalten über die Klima(gerechtigkeits)bewegung in Österreich, der Schweiz und Deutschland, ist auch ein interaktives Datentool, das die Klimaberichterstattung in überregionalen Medien beobachtet
  https://newsmonitor.neuezukunft.info
  https://github.com/neue-zukunft/newsmonitor
  via https://mastodon.social/@lorz/112716624405169219
* The new Climate Data Store Beta (CDS-Beta) is now live
  https://forum.ecmwf.int/t/the-new-climate-data-store-beta-cds-beta-is-now-live/3315
  https://cds-beta.climate.copernicus.eu
* MVP Umweltinfo - Die Suchmaschine für Umwelt- & Naturschutz-Wissen
  https://mvp.umwelt.info/de/artikel/ueber-die-anbindung-von-daten
  https://mvp.umwelt.info/de
  * Grundwassermessstellen in Deutschland: 
    https://mvp.umwelt.info/de/artikel/karte_grundwasser
  * Terminumfrage: https://terminplaner6.dfn.de/de/p/a53d65c84718886e2c1525a335f18571-825262
* Backup
  * Corporate Digital Responsibility (CDR) – Strategien für digitale Nachhaltigkeit im Unternehmen
    https://reset.org/corporate-digital-responsibility-cdr-digitale-nachhaltigkeit-unternehmen/
    https://cdr-initiative.de/kodex
    https://cdr-initiative.de/cdr-berichte
    https://cdr-initiative.de/news/digitaler-datenputz-2024
	--> auch Datenputz bei Offenen Daten? (statt Sammelwut?)

## Energie
* Rekord: 58 Prozent des Stroms aus erneuerbaren Energien
  https://www.heise.de/news/Rekord-58-Prozent-des-Stroms-aus-erneuerbaren-Energien-9784161.html
* 10 Jahre Energy-Charts – 10 Grafiken zur Energiewende
  https://blog.innovation4e.de/2024/07/26/10-jahre-energy-charts-10-grafiken-zur-energiewende/
* Wie läuft der Ausbau erneuerbarer Energien in Deutschland?
  https://www.ndr.de/nachrichten/ndrdata/Wie-laeuft-der-Ausbau-von-Solar-Windkraft-Batteriespeicher-Erneuerbare-Energien-in-Deutschland,erneuerbare104.html

## Transparenz
* Warum die Finanzbehörden nicht offenlegen, wer uns mit CumCum-Geschäften um Milliarden € Steuergeld betrogen hat? Weil den Geschäftsbeteiligten "Imageschäden" drohen. https://www.rnd.de/wirtschaft/cumcum-betrueger-welche-behoerde-schuetzte-die-kriminellen-RHWFS4KOQZGZXN2KHS27VERN4E.html
  via https://chaos.social/@fragdenstaat/112808325961576238
* From de jure to de facto transparency: Analyzing the compliance gap in light of freedom of information laws
  Julia Trautendorfer, Lisa Hohensinn, Dennis Hilgers haben 100.000 IFG-Anfragen über FragDenStaat analysiert - wo antworten Behörden am zuverlässigsten? 
  https://onlinelibrary.wiley.com/doi/10.1111/rego.12615

## Open Access
* Alte Prüfungsaufgaben sollten Schüler*innen kostenfrei für ihre Abschlussvorbereitung zugänglich sein. Fast alle Bundesländer weigern sich und geben sie lieber an Verlage, die mit den Aufgaben Profit machen. Unterstützt die Petition, um Druck auf Kultusminister*innen und Bundesländer zu machen!  https://weact.campact.de/petitions/bildungsgerechtigkeit-statt-privater-profit-alte-prufungsaufgaben-digital-frei-zuganglich-machen
* Balkonsolar Buch
  https://www.akkudoktor.net/balkonsolar-buch/
  via https://chaos.social/@danimo/112735788799557330
* Handbuch zur Planung flexibler Bedienungsformen im ÖPNV
  https://www.bbsr.bund.de/BBSR/DE/veroeffentlichungen/sonderveroeffentlichungen/2023/handbuch-planung-fexibler-bedienungsformen-oepnv.html
  via https://www.zukunftsnetzwerk-oepnv.de/aktuelles/news/handbuch-zur-planung-flexibler-bedienungsformen-im-oepnv
* Webinar Recording: Finding, tracking, and analyzing research datasets in OpenAlex
  https://www.youtube.com/watch?v=cKUKXwxAlOM
  via https://mastodon.social/@leibnizopenscience/112767742851553448
* Project launch: OA Datenpraxis- Data Practices for Shaping the Open Access Transformation
  https://infomgnt.org/posts/2024-07-01-Vorstellung-OA-Datenpraxis/
  https://oa-datenpraxis.de
* Einführung in Open Code
  Ab sofort gibt es einen neuen Themenbereich beim ZBW Open Economics Guide! Hier lernen Wissenschaftler:innen, wie sie mit Open Code mehr Transparenz und Reproduzierbarkeit in die eigene Forschungen bringen können!
  https://openeconomics.zbw.eu/open-code/
  via https://openbiblio.social/@ZBW_MediaTalk/112801717193345993

## Open Science
* Demystifying Open Science in health psychology and behavioral medicine: a practical guide to Registered Reports and Data Notes
  https://www.tandfonline.com/doi/full/10.1080/21642850.2024.2351939#d1e281
* 11 Jahre Zenodo
  https://www.openaire.eu/zenodo-11-years-of-setting-the-standards-of-open-science-excellence


## Open Source
* Podcast Reihe Open Source und Geld
  * Open Source und Geld Episode 1
    In der ersten Folge unserer neuen Staffel Public Interest Podcast zu Open Source und Geld spricht Team Prototype Fund über Geld. Warum braucht es Geld für die Open Source Softwareentwicklung? Welche Rolle spielt es? Ist Geld verdienen die einzige Perspektive für langfristige Softwareentwicklung? Und warum braucht es eigentlich Förderungen?
    https://prototypefund.de/pips6e1/
  * In der zweiten Episode unseres Public Interest Podcast zum Thema Geldsprechen wir mit Heiko Rintelen von   FixMyCity über Möglichkeiten, mit Open-Source-Software Geld zu verdienen, was Verwaltungen so von Open Source halten und Tipps, die er für Menschen hat, die noch ganz am Anfang einer Projektidee stehen
  "Dieser marktwirtschaftliche Druck hat auch Vorteile: Wir werden gezwungen, näher am Kunden zu arbeiten" sagt Heiko Rintelen, Geschäftsführer bei FixMyCity.
    https://prototypefund.de/pips6e2/
  * Mehan Jayasuriya ist Senior Program Officer bei der Mozilla Foundation. Dort verantwortet er den Mozilla Technology Fund (MTF) und setzt sich für das Ziel eines offenen und zugänglichen Internet für Alle ein. Im Gespräch verrät er, welches Verständnis er von Geld hat und wie und wofür er es nutzt. Außerdem sprechen wir darüber, wie Geld als Werkzeug genutzt werden kann, um Entwicklung von Code abzusichern und wie sich Mehans Verhältnis zum Begriff „Impact“ im Laufe der Jahre verändert hat.
  https://prototypefund.de/pips6e3/
  * Leah Oswald über das Verhältnis Job, Freizeit und Ehrenamt
    https://prototypefund.de/pips6e4/
  * Mit Erik Albers von foss.events reden wir über Projektentwicklung in der Freizeit, Motivationen und Hürden in einem kleinen Team und wieso es manchmal sogar gut für ein Projekt sein kann, wenn kein Geld im Spiel ist.
    https://prototypefund.de/pips6e5/
* On Open Source and the Sustainability of the Commons
  https://ploum.net/2024-07-01-opensource_sustainability.html
* Someone complained that the xkcd Dependency comic is unrealistic because it only shows one critical dependency you've never heard of. However, it all makes sense once you realize it's actually a fractal:
  https://cloudisland.nz/users/dillon/statuses/112767541388187298
* Christian Nähle, Geschäftsführer von Do-FOSS, der Initiative für den Einsatz Freier und Open-Source-Software bei der Stadt Dortmund https://opendata.okfn.de/books/open-data-in-der-praxis/page/christian-nahle-geschaftsfuhrer-von-do-foss-der-initiative-fur-den-einsatz-freier-und-open-source-software-bei-der-stadt-dortmund
via https://digitalcourage.social/@clarisse/112778006240248969
* EU will Open-Source-Förderprogramm wohl beenden
  https://netzpolitik.org/2024/next-generation-internet-eu-will-open-source-foerderprogramm-wohl-beenden/
* FOSS funding vanishes from EU's 2025 Horizon program plans
  https://www.theregister.com/2024/07/17/foss_funding_vanishes_from_eus/
  via https://hachyderm.io/@cczona/112803278067623346
* Infrastruktur ist unsichtbar, bis sie ausfällt. Der weltweite IT-Ausfall offenbarte, wie verletzlich uns Monopole wie Microsoft machen. Diesen Schrecken muss man nutzen.
  https://www.zeit.de/kultur/2024-07/it-stoerung-microsoft-update-infrastruktur-monopol
* Nachhaltige Softwareentwicklung? Was soll das eigentlich sein?
  https://prototypefund.de/nachhaltigkeit-ist-mehr-als-nur-gartnerei/
* Switzerland now requires all government software to be open source
  https://www.zdnet.com/article/switzerland-now-requires-all-government-software-to-be-open-source/
* Wie der Prototype Fund wirkt
  https://prototypefund.de/wie-der-prototype-fund-wirkt/
* Gaia-X is a distraction which should be abandoned
  "Not only is it [Gaia-X] using up lots of money and resources that could better be spent elsewhere, its very existence fools people into thinking something useful is happening."
  https://berthub.eu/articles/posts/gaia-x-is-an-expensive-distraction/
  via https://mastodon.social/@jpmens/112851991626848669
* ZENDIS Positionspapier - Digitale Souveränität im Vergaberecht
  https://zendis.de/media/site/88445cc92f-1717603153/2024_06_05-zendis_positionspapier-dis-und-vergaberecht_a4_web.pdf
* Podcast "Digital leben" | Folge 83 – Open Source und das freundliche Internet: Warum das Netz immer noch großartig ist
  https://www.mdr.de/mdr-sachsen-anhalt/podcast/digital/digital-leben-open-source-stefan-mey-gemeinschaftsschule-gernrode-landkreis-harz-100.html

## KI
* KI-Verordnung tritt in Kraft: Durchlässig wie ein Perlenvorhang
  https://netzpolitik.org/2024/ki-verordnung-tritt-in-kraft-durchlaessig-wie-ein-perlenvorhang/

* Microsofts KI Aurora ermöglicht genaue Vorhersage von Luftverschmutzung
  https://www.heise.de/news/Microsofts-KI-Aurora-ermoeglicht-genaue-Vorhersage-von-Luftverschmutzung-9790082.html
  https://arxiv.org/pdf/2405.13063
* Die versteckten Arbeitskräfte hinter der KI erzählen ihre Geschichten
  https://netzpolitik.org/2024/data-workers-inquiry-die-versteckten-arbeitskraefte-hinter-der-ki-erzaehlen-ihre-geschichten/
* Der Kolonialismus ist kein Kind der Vergangenheit. Und nicht nur das, es gibt sogar eine neue Form des Kolonialismus - die Ausbeutung von Daten. In ihrem neusten Buch zeigen die renommierten Forscher Nick Couldry und Ulises A. Mejias diese Machenschaften auf
  https://slow-magazine.org/newsletter
  https://slow-magazine.org/
  via https://mastodon.social/@rdoe/112750926404719972
* KI-Kompass vergleicht rund 40 KI-Sprachmodelle
  https://www.heise.de/news/KI-Kompass-vergleicht-rund-40-KI-Sprachmodelle-9794173.html
* "die Schere zwischen dem rasant wachsenden Einsatz von KI-Systemen und den dafür notwendigen Kompetenzen, Standards und Strukturen geht immer weiter auseinander."
  https://mdb.anke.domscheit-berg.de/2024/07/pm-kleineanfrage-kuenstliche-intelligenz-bund/
* Ontologien in der Medizin: Struktur und Erstellung
  Über den Aufbau und die Herausforderungen von Ontologien und Terminologien am Beispiel der Medizin.
  https://www.heise.de/hintergrund/Ontologien-in-der-Medizin-Struktur-und-Erstellung-9797489.html
  * Terminologien und Ontologien: Konkrete Anwendungsbeispiele https://www.heise.de/hintergrund/Terminologien-und-Ontologien-Konkrete-Anwendungsbeispiele-9803450.html?seite=all
* Datenwäsche analog zu Geldwäsche
  Das Speichern von LLMs sind keine personenbezogenen Daten.
  "Also versuche ich am besten nur noch LLMs im Durchlaufverfahren zu erzeugen und alle Ausgangsdaten so schnell wie möglich loszuwerden. Bloß keine Spuren hinterlassen, weil die sind ja personenbezogen."
  https://mastodon.social/@bkastl/112792086348174405
  https://datenschutz-hamburg.de/news/hamburger-thesen-zum-personenbezug-in-large-language-models
* GeoExplorer
  https://geoobserver.de/2024/07/17/open-data-und-ki-in-berlin-der-geoexplorer/
  https://geoexplorer.odis-berlin.de
* Notwendigkeit klarer Regeln und die Arbeit an einem "Code of Conduct Demokratische KI" zur Sicherstellung eines verantwortungsvollen Einsatzes.
  https://d-64.org/herausforderungen-ki-zivilgesellschaft/
* DeepL stellt leistungsfähiges Sprachmodell für Übersetzungen vor https://www.heise.de/news/DeepL-erweitert-sein-Angebot-und-nutzt-grosses-Sprachmodell-fuer-Uebersetzungen-9804667.html
* Erster Rechtsstreit zu Datennutzung in KI-Training
  Ein Fotograf verklagt LAION e. V. wegen unrechtmäßiger Nutzung seines Bildes in einem KI-Trainingsdatensatz.
  https://blog.wikimedia.de/2024/07/18/erster-rechtsstreit-zu-datennutzung-in-ki-training-das-sind-die-ersten-ergebnisse/
* "The drinking water used in data centers is often treated with chemicals to prevent corrosion and bacterial growth, rendering it unsuitable for human consumption or agricultural use. This means that not only are data centers consuming large quantities of drinking water, but they are also effectively removing it from the lofcal water cycle."
  https://mastodon.green/@gerrymcgovern/112819562862310166
* "Passwort" Folge 7: Prompt Injections
  https://www.heise.de/news/Passwort-Folge-7-Prompt-Injections-9785133.html
* Modellkollaps – wie synthetische Daten KI killen können
  Generative KI ist nur so gut wie ihre Trainingsdaten. Das Internet ist laut einer Studie dank KI aber bald zu schlecht für KI.
  https://www.heise.de/news/Modellkollaps-wie-synthetische-Daten-KI-killen-koennen-9814434.html
* Bericht: KI-Start-up Anthropic soll unerlaubt Daten abgreifen
  Mehrere Web-Publisher beschuldigen Anthropic, unerlaubt Inhalte für das Training seiner KI-Modelle zu sammeln. Anweisungen, damit aufzuhören, würden ignoriert.
  https://www.heise.de/news/Bericht-KI-Start-up-Anthropic-soll-unerlaubt-Daten-abgreifen-9817584.html
* KI: Ohne Rücksicht auf Verluste
  Wenn Goldgräberstimmung aufkommt, profitieren nicht die Goldgräber, sondern die, die Schaufeln verkaufen – besser lässt sich die Situation in der jetzigen KI-Welt nicht zusammenfassen.
  https://www.heise.de/select/ct/2024/17/2330613153812397752

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
* Jugend hack Events im August
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
* Dienstag, 27.08.2024, 12:00-12:30, online: **CDL - Espresso Talk: Geoinformationen für Humanitäre Hilfe**
  * https://www.correlaid.org/veranstaltungen/cdl-espressotalk-geodaten/
* Dienstag, 03.09.2024, 11:00-17:30, bUm, Paul-Lincke-Ufer 21, 10999 Berlin: **Prototype Fund: Demo Day der Förderrunde 15**
  * https://prototypefund.de/demo-day/#Programm
* Donnerstag, 05.09.2024, Potsdam: **Barcamp Open Science**
  * https://www.barcamp-open-science.eu
* Freitag, 06.09.2024, bis Sonntag, 08.09.2024, An der Schanz 6, Köln: **Jugend hack Köln***
  * https://jugendhackt.org/events/koeln/
* Freitag, 06.09.2024, bis Samstag, 07.09.2024, Pilatusstrasse 21 / Sempacherstrasse 10, Luzern: **Swiss Open Cultural Data Hackathon "GLAMhack24"**
  * https://www.infoclio.ch/fr/glamhack24-anniversary-edition-last-call-participate
  * https://opendata.hitobito.com/de/groups/5/public_events/10
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
