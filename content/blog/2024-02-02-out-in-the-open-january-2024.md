---
title: "If you can't fix it, you don't own it! – Out in the Open Januar 2024"
author: "Jörg Reichert (Code for Leipzig), Tim Fangmeyer (Code for Berlin), et al."
date: '2024-02-02T08:00:00+02:00'
excerpt: Monatlich erscheinender Überblick über Entwicklungen in der Open Data und Civic Tech Szene
topic: community
images:
- imgname: out-in-the-open-2024-01-header.jpg
  attribution: <a href="https://unsplash.com/de/fotos/selektive-fokusfotografie-des-ladenschilds-das-an-der-tur-hangt-Np7V88Hd8Es">Foto</a> von <a href="https://unsplash.com/de/@belart84">Artem Beliaikin</a> auf <a href="https://unsplash.com/">Unsplash</a>
og_image: out-in-the-open-2024-01-header.jpg
type: blog
---

Wie auch in dieser Blogreihe schon mehrfach berichtet, müssen öffentliche Verwaltung hochwertige Daten ab dem 9. Juni 2024 
gemäß den Vorgaben der Durchführungsverordnung zu Hochwertigen Datensätzen (EU) 2023/138 der Europäischen Kommission verpflichtend bereitstellen. Für alle, die sich fragen, was das für die Verwaltungen konkret bedeutet und wie die zu gehenden Schritte sind, ist die [Handreichung (pdf)](https://open.bydata.de/static/openbydata_HVD_Handreichung.pdf) des [Open-Data-Teams Bayern](https://open.bydata.de/) das geeignete Nachschlagewerk.

Einen Schritt weiter geht das nationale [Schweizer Datenportal opendata.swiss](https://opendata.swiss/), das nun flächendeckend für alle seine CSV-Dateien [Programmierschablonen anbietet](https://opendata.swiss/de/showcase/starter-code-fur-alle-csv-datensatze-auf-opendata-swiss), um so den Einstieg in die Programmierung mit den Datensätzen zu erleichtern.

Um überhaupt systematisch offene Daten veröffentlichen zu können, braucht es eine gute Grundlage. Das hat auch  das Land Schleswig-Holstein erkannt und arbeitet momentan an einer modular aufgebauten Infrastruktur für offene Daten. [Aus welchen Komponenten diese konkret besteht, erläutert Mister Open Data in seinem neuen Blogbeitrag](https://open-north.de/blog/2024-01-08_infrastruktur/) und gibt bei einen lehrreichen Einblick die Open-Data-Infrastruktur des nördlichsten Bundeslandes.

Am 9. Juni stehen parallel zur Europawahl in 8 Bundesländern auch Kommunalwahlen an. [Code for Magedburg](https://codefor.de/magdeburg/) hat dafür mit [magdeburg-waehlt.de](https://magdeburg-waehlt.de) die technische Infrastruktur für einen eigenen WAHL-O-MAT geschaffen.Allerdings fehlen der Wahlhilfe noch aktuelle Inhalte - die gerne beigesteuert werden dürfen. Weiterhin [steht das Angebot von Code for Magedburg, den Wahl-Assistenten auch für die Stadt Halle umzusetzen](https://twitter.com/CodeForMD/status/1749131725144277281). 

Séan Fobbe [hat Anfang Januar](https://fediscience.org/@seanfobbe/111715419479131593) den Datensatz [Corpus des Deutschen Bundesrechts](https://zenodo.org/records/10460056), eine möglichst vollständige Sammlung der konsolidierten Fassungen aller Gesetze und Verordnungen auf Bundesebene, wieder auf den aktuellen Stand gebracht. Der Datensatz ist mit CC0 lizensiert, also gemeinfrei.

## Alles, was unter dem Sammelbegriff Künstliche Intelligenz fällt
Benjamin Paaßen, Juniorprofessor für Wissensrepräsentation und Maschinelles Lernen an der Universität Bielefeld, setzt sich dafür ein, dass deutsche Universitäten [eigene Sprachmodelle, sogenante Large Language Models, auf ihren Servern bereit stellen sollten](https://www.jmwiarda.de/2024/01/26/warum-hochschulen-jetzt-selbst-sprachmodelle-hosten-sollten/), um zukünftige Abhängigkeiten von kommerziellen  KI-Anbietern wie OpenAI zu vermeiden. Laut Paaßen stärkten sie damit als zukünftige Anbieter freier Sprachmodelle Lehre, Forschung und digitale Autonomie. 

[Daniel Erenrichs Jupyter Notebook Beispiel](https://techhub.social/@derenrich/111761256885987346), Anfragen an die Wikidata-Datenbank in natürlicher Sprache zu stellen, nutzt leider ebenfalls OpenAPI. Wie Gleiches mit einem Open-Source-LLM, [Mistral 7B](https://mistral.ai/news/announcing-mistral-7b/), erreicht werden kann, zeigt Robert Timm mit seinem [Prototypen](https://github.com/rti/askwikidata) [in einer Präsentation](https://docs.google.com/presentation/d/1YgDmcvoXaqnYdRyX5RxewVkeioEJ92nb8Sfb_halBsM/edit#slide=id.g15105b408d_0_287) auf der Semantic MediaWiki Conference vom letzten Herbst, deren [Mitschnitt jetzt veröffentlicht wurde](https://www.youtube.com/watch?v=STG7VhdiyZw).

Auch der neue Prototyp des [CityLab Berlin](https://citylab-berlin.org/) nutzt ein KI-Sprachmodell. Mit [Parla](https://www.parla.berlin) kann man die Informationen in den Dokumenten der Hauptausschusssitzungen sowie der Schriftlichen Anfragen an das Berliner Abgeordnetenhaus nach Suchanfragen filtern, um am Ende die inhaltlich passenden Dokumente angezeigt und kurze Antworten generiert zu bekommen. Mehr zu den technischen Umsetzungsdetails [erzählt Jonas Jaszkowic](https://citylab-berlin.org/de/blog/parla-technische-entwicklung-des-neuen-ki-tools/) und verschweigt dabei auch nicht die Herausforderungen, die sie bei der Qualitätssicherung und den Halluzinationen des Sprachmodels hatten und immer noch haben. Der Quellcode der Anwendung steht offen auf [Github](https://github.com/technologiestiftung/parla-frontend). Auch er erwähnt das zukunftige Ziel, statt der OpenAI-Lösung lieber Open-Source-Sprachmodelle nutzen zu wollen, merkt aber auch an, dass es derzeit kaum welche gäbe, die eine akzeptable Qualität bei der Formulierung von Antworten in deutscher Sprache liefern.

Wie wichtig es ist, unabhängig von einzelnen Anbietern zu sein, sieht man an den Anstrengungen, die bei der Bekämpfung von Geldwäsche in Deutschland unternommen werden. So erhofft man sich mit den Informationen aus dem Transparenzregister und auch mit dem Einsatz von Machine Learning leichter verdächtigen Finanztransaktionen [auf die Spur zu kommen](https://www.heise.de/hintergrund/Missing-Link-Mit-Transparenzregister-und-KI-gegen-Geldwaesche-9589510.html?seite=all). 

Dagegen ist es [Global Fishing Watch](https://globalfishingwatch.org) bereits gelungen, mit Hilfe von KI-Technik illegale Aktivitäten aufzudecken. So hat man mit der Auswertung von zwei Millionen Gigabyte an Satellitenbildern aus den Jahren 2017 bis 2021 so genannte "Dunkle Flotten", also Fischfänger, die ihre Positionen nicht melden, [identifizieren können](https://www.heise.de/news/Dank-Satellitenbildern-und-KI-Bislang-unbekannte-Fischereiflotten-entdeckt-9587935.html). Aus den Daten, die [auch offen heruntergeladen werden können](https://globalfishingwatch.org/datasets-and-code), konnte man beispielsweise ablesen, das in Asien 7-mal mehr Fischereischiffe im Einsatz sind als in Europa. Es wurden zahlreiche Schiffe gefunden, die in geschützten Gewässern aktiv waren.  

KI-Bildgeneratoren sind oftmals mit Bildmaterial gefüttert worden, das zwar frei zugänglich im Internet stand, dabei aber dessen Lizenzierung geflissentlich ignoriert wurde. Mit [Nightshade](https://nightshade.cs.uchicago.edu/whatis.html) steht nun, wie [heise berichtet](https://www.heise.de/news/Nightshade-KI-Modelle-vergiften-eigene-Werke-schuetzen-9604398.html), ein Werkzeug zur Verfügung, das Bilddateien, visuell vom menschlichen Auge nicht zu erkennen, so verändert, dass es die Trainingsdaten von KI-Modellen in unvorsehbarerweise vergiftet. Es ist geplant, den Quellcode von Nightshade bald auch offen zu legen. Dann könnte neben den massenweisen Plagiaten, Fakenews, und anderen Spam, die jetzt schon durch generative KI [mutwillig erzeugt werden](https://www.computerwoche.de/a/wie-ki-das-internet-kaputt-macht,3698324), die Qualität von Chatbots weiter absenken.

## Kultur
Eine neue [Online-Plattform](https://www.plattdeutsch-sammeln.de/) will Plattdeutsch mit einer interaktiven Landkarte im öffentlichen Raum sichtbarer machen. Interessierte können sich beteiligen und gerne ihre Fundstücke eintragen.

Wie die Bayerische Staatsbibliothek [froh verkündet](https://openbiblio.social/@bsbmuenchen/111767014793896844), stellt sie [über 4 Millionen Digitalisate online](https://www.digitale-sammlungen.de/de/)!  

Dennoch bestehen beim Abfotografieren gemeinfreier Werke z.B. beim Museumsbesuch immer noch rechtliche Unsicherheiten, wie Dominik Scholl in seiner Kolumne anlässlich des Public Domain Days [erinnert](https://netzpolitik.org/2024/oeffentliches-geld-oeffentliches-gut-museum-oeffne-dich/).

Ihre Eindrücke von der "Provenance loves Wiki“-Konferenz schildert Franziska Kelch in [folgendem Wikimedia-Blogbeitrag](https://blog.wikimedia.de/2024/01/18/so-helfen-wiki-projekte-bei-der-offnung-von-kunst-und-kulturgut/). Über 70 Provenienzforschende und Wiki-Aktive diskutiert an den beiden Tagen, wie man offene und freie Wiki-Projekte wie Wikidata, Wikibase oder Wikipedia nutzen kann, um Kulturdaten zu organisieren, zu vernetzen und für die Allgemeinheit zu öffnen. Die vielen Beispiele aus der Praxis und generell ein große Hilfsbereitschaft halfen dabei auch Neulinge gut zu integrieren.

Gemeinfreie Filme von [Wikimedia Commons](https://commons.wikimedia.org/wiki/Main_Page), [Internet Archive](https://archive.org/) und anderen Quellen können Dank [Magnus Manske](https://de.wikipedia.org/wiki/Magnus_Manske) nun auf einem Portal, [WikiFlix](https://wikiflix.toolforge.org), gesucht (und hoffentlich auch gefunden) werden. Mit einer ersten Adaption namens [WikiVibes](https://wikivibes.toolforge.org/), ist dies ebenfalls für Audio-Dateien möglich. Eine prima Ergänzung zu schon bestehenden Community-Projekten wie [Musicbrainz](https://musicbrainz.org/) (sammelt Musikmetadaten) oder auch [Listenbrainz](https://listenbrainz.org/) (analysiert die eigenen Hörgewohnheiten)

## Linked Open Data
Julia Schabos von der Berliner Finanzverwaltung [kündigt im Interview](https://www.technologiestiftung-berlin.de/profil/blog/wie-linked-open-data-fuer-mehr-transparenz-bei-haushaltsdaten-sorgt-interview-mit-julia-schabos) mit der [Technologiestiftung Berlin](https://www.technologiestiftung-berlin.de/) an, dass die von der [Open Data Stelle Berlin (ODIS)](https://odis-berlin.de/) entwickelte [Auswertung der Berliner Haushaltsdaten](https://haushaltsdaten.odis-berlin.de/visualisierung) auch 2024 weiter verbessert und erweitert werden soll. Helfen soll dabei, dass 2023 begonnen wurde, die Berliner Haushaltsdaten als Linked Open Data umzusetzen. Im Rahmen des 4. Nationalen Aktionsplans des Bundes wird dazu in Zusammenarbeit mit der Staatskanzlei Schleswig-Holstein ein gemeinsames Vokabular für Haushaltsdaten erarbeitet, Voraussetzung für die Vergleichbarkeit und Verknüpfbarkeit der Datensätze. Wir warten gespannt auf die erste Veröffentlichung der Daten im entsprechenden Format.

Auf Bundesebene kann man nun mit [bundeshaushalt.de](https://bundeshaushalt.de/DE/Home/home.html) die Soll- und Ist-Haushalte der letzten Jahre sowie den aktuellen Soll-Haushalt über Dashboards erkunden. Die Daten werden unter anderem auch als CSV-Dateien auf dem [Download-Portal](https://bundeshaushalt.de/DE/Download-Portal/download-portal.html) angeboten, allerdings auch noch nicht als Linked Open Data.

Das Umweltbundesamt hat ebenfalls den Wert einer normierten Begrifflichkeit erkannt und bietet mit dem [Semantische Netzwerkservice (SNS)](https://sns.uba.de/de) Unterstützung für das Informationsmanagement im Umweltbereich. Durch die Verwendung einheitlicher Schlagwörter (bzw. das automatische Auflösen von Synonymen / semantisch ähnlicher Begriffe über die Mittel von Linked Data und Semantic Web) soll sich das Auffinden und der Zugang zu Umweltinformationen insgesamt verbessern und verteilt vorliegende Informationen miteinander vernetzt werden.

## Mobilität und Kartendaten
Wer sich für [öffentliche Bücherschränke](https://de.wikipedia.org/wiki/%C3%96ffentlicher_B%C3%BCcherschrank) in seiner Nähe interessiert, kann sich diese nun auf [OpenBookCase](https://openbookcase.de/map) auf einer Karten anzeigen lassen und wie [geoObserver auf seinem Blog hinweist](https://geoobserver.wordpress.com/2024/01/29/openbookcase-die-offentlichen-bucherschranke/) auch selbst um noch nicht erfasste Schränke ergänzen.

Wie man mit offenen Daten des Zensus die Heizungsarten im 100m-Gitter kartieren kann, um damit die kommunale Wärmeplanung zu unterstützen, hat Wahlatlas auf der [NIAM 2024](https://news-infographics-analytics-maps.media/) (von der es hoffentlich bald auch die Video-Mitschnitte geben wird) gezeigt, seine Präsentation sowie die Links zu den Karten und Daten hat er [hier](https://wahlatlas.net/NIAM2024/) veröffentlicht. 

Edward Betts [macht uns darauf aufmerksam](https://octodon.social/@edward/111823135513047825), dass man mit dem noch im Beta-Status befindlichen Werkzeug [OWL Map](https://map.osm.wikidata.link/) Einträge in WikiData mit den passenden Elemente auf OpenStreetMap verknüpfen kann.

Eine weitere interessante Integrationsmöglichkeit mit OpenStreetMap [zeigt Terence Eden auf seinem Blog](https://shkspr.mobi/blog/2024/01/rebuilding-foursquare-for-activitypub-using-openstreetmap/): indem man den Kartendienst mit dem Protokoll [ActivityPub](https://de.wikipedia.org/wiki/ActivityPub) kombiniert und so auch soziale Checkins und Standort-Empfehlungen im Fediverse publizieren kann, wie es der kommerzielle Dienst [Foursquare](https://de.wikipedia.org/wiki/Foursquare) vorgemacht hat.

Auch wenn es also verlockend ist, die Dienste von OpenStreetMap intensiv zu nutzen, sollte man sich an den Fair-Use halten. Denn der Betrieb der Server kostet Zeit und Geld. Einige Seite nutzen dennoch die OpenStreetMap Kartendaten ohne ihre Herkunft richtig zu attributieren und manchen nutzen erschwerend noch direkt die OSMF Tile-Server, statt selbst einen zu hosten. Man daher nun einen [Issue-Tracker](https://github.com/openstreetmap/tile-attribution/issues) [eingerichtet](https://en.osm.town/@openstreetmap/111749237204284048), um solche Seite melden zu können, damit diese entsprechend geblockt werden können. 

Auf Deviantart wurde [eine detaillierte (inoffizielle) Karte des Regional-Schienennetzes der Deutschen Bahn veröffentlicht](https://www.deviantart.com/costamiri/art/Transit-diagram-of-regional-rail-in-Germany-2024-1006737243), die in mühevoller Detailarbeit von [@cstmrii](https://twitter.com/cstmrii) erstellt wurde. Auf der Karte sind selbst kleine und nicht häufig frequentierte Bahnhöfe abgebildet.

In Wien kan man sich mit der neuen [data.gv.at](https://www.data.gv.at/) Open-Data Anwendung [wl-tranit](https://www.data.gv.at/application/wl-transit/) alle Abfahrtzeiten der öffentlichen Verkehrsmittel in einem bestimmten Radius anzeigen lassen

Eine [Umfrage der Bitkom](https://www.heise.de/news/Mobilitaet-43-Prozent-nutzen-Sharing-von-Auto-Fahrrad-oder-E-Stehroller-9594155.html) hat ergeben, dass 43 Prozent der über 16-jährigen das Sharing von Auto, Fahrrad oder E-Stehroller nutzen.

Um zu betrüblicher die [Nachricht vom Unfalltod](https://www.spiegel.de/panorama/baden-wuerttemberg-radfahr-aktivist-stirbt-offenbar-bei-verkehrsunfall-a-ffba9445-5d0b-4ffb-b544-3df59427e7ea) des Pforzheimer Radfahraktivisten Andreas Mandalka, besser bekannt als [natenom](https://natenom.de/), am Abend des 30. Januars. Er hatte sich unter anderem in den Bereichen OpenSource, OpenStreetMap, Verkehrswende und [OpenBikeSensor](https://wiki.natenom.de/docs/mobilitaet/projekte/abstandsmesser/openbikesensor/) verdient gemacht - er dokumentierte selbst mit Videos die gefährlichen Überholmanöver, die er als Radfahrer ausgesetzt war.

## OpenSource
* DK101: Die sächsische Open-Source-Strategie | Datenkanal
  https://datenkanal.org/archives/142-DK101-Die-saechsische-Open-Source-Strategie.html
  via https://podcasts.social/@datenkanal/111805027248995095
* eGovernment Podcast Monatsschau 01/24
  https://egovernment-podcast.com/egov163-monatsschau-01-24/
* Missing Link: Open Source ist tot, es lebe Post-Open-Source - Bruce Perens, Mitgründer der Open-Source-Bewegung, wittert Verrat am Ideal der maximalen Nutzungsfreiheit freier Software. Er will Rückbesinnung und Neustart.
  https://www.heise.de/hintergrund/Missing-Link-Open-Source-ist-tot-es-lebe-Post-Open-Source-9595891.html
* Algorithmus des Empfehlungssystems der ZDF-Mediathek Open Source
  https://github.com/zdf-opensource/recommendations-pa-base
* BBSR Open Source Software in Kommunen:
  https://www.bbsr.bund.de/BBSR/DE/veroeffentlichungen/sonderveroeffentlichungen/2024/open-source-software-kommunen.html
* A phrase I heard and loved when I was in a committee room in the UK Parliament this evening, for an Open Source event - “Open Source is the Right to Repair, for software.” 👏🏻 such a perfect way of describing it, I wish I'd been the one to say it!
  https://macaw.social/@andypiper/111774169944729337

## Und sonst so
* Weltraumteleskop James Webb: Aufnahmen zeigen Sterne und Staub in 19 Galaxien 
  https://www.heise.de/news/Weltraumteleskop-James-Webb-Aufnahmen-zeigen-Sterne-und-Staub-in-19-Galaxien-9612699.html
  https://webbtelescope.org/contents/media/images/2024/105/01HM9KGGP1EWFFSRRSKR8NZGWZ?news=true 
  "Unless otherwise specifically stated, no claim to copyright is being asserted by STScI and material on this site may be freely used as in the public domain in accordance with NASA's contract. However, it is requested that in any subsequent use of this work NASA and STScI be given appropriate acknowledgement." (https://webbtelescope.org/copyright)

## Termine
* Prototype Fund Förderrunde-Bewerbung von 01.02.2024 bis 31.03.2024
  https://prototypefund.de/bewerbung/timeline/
* Open Data Day 2024 - Mini-Grants Open Call
  https://blog.okfn.org/2024/01/24/open-data-day-2024-mini-grants-open-call/
* Call for action: Help shape the future interoperability assessment guidelines
  https://joinup.ec.europa.eu/interoperable-europe/news/call-action-shape-future-interoperability-assessments
* Wir suchen eine:n Kommunikationsmanager:in für die OKF (Teilzeit, 20-28h/Woche)
  https://okfn.de/jobs/gf-kommunikationsmanagerin-2024/

## Veranstaltungen
* Freitag, 02.02.2024, bis Samstag, 03.02.2024, 08:00 - 20:00,
Mauerstraße 53, 10117 Berlin: **Civic Coding-InnovationCamp: Eure KI-Ideen für unser Gemeinwohl**
  * https://www.civic-coding.de/angebote/veranstaltungen/civic-coding-innovationcamp-eure-ki-ideen-fuer-unser-gemeinwohl
* Samstag, 03.02.2024, bis Sonntag, 04.02.2024, Brüssel: **FOSDEM 2024** 
  * https://fosdem.org/2024/
* Dienstag, 06.02.2024, 19:30, Remote-Videokonferenz: **OpenStreetMap Verkehrswende Berlin Monatliches Meetup**
  * https://wiki.openstreetmap.org/wiki/Berlin/Verkehrswende#Meetups 
* Dienstag, 06.02.2024, 20:00 Uhr, c-base, Berlin und im Stream: **Netzpolitischer Abend zum Thema Daten und Flucht**
  * https://digitalegesellschaft.de/2024/01/133-netzpolitischer-abend/
* Mittwoch, 07.02.2024, 20:00 - 21:30, online: **Open Transport Meetup mit Carl Fredlund zu Mobility Data**
  * https://hackmd.okfn.de/opentransportmeetup
* Mittwoch, 07.02.2024, bis Donnerstag, 08.02.2024, Nürnberg: **Umweltdatenwerkstatt**
  * https://datenschule.de/workshops/umweltdatenwerkstatt/
* Freitag, 16.02.2024, bis Sonntag, 18.02.2024, Wikimedia Deutschland, Raum "Mosaik", Tempelhofer Ufer 23, 10961 Berlin-Kreuzberg: **Berlinale Edit-a-thon 2024**
  * https://www.wikimedia.de/veranstaltungen/berlinale2024/ 
* Freitag, 23.02.2024, bis Sonntag, 25.02.2024, WIR-Haus, Wilhelmstr. 189, 42489 Wülfrath: **Hack im Pott**
  * https://hackimpott.de/
* Donnerstag, 29.02.2024, CityLAB Berlin, Platz der Luftbrücke 4, 12101 Berlin, ab 18 Uhr: **Maptime Meetup** 
  * https://citylab-berlin.org/de/events/maptime-meetup-2/ 
* Freitag, 01.03.2024, bis Samstag 02.03.2024, Casinotheater Winterthur, Stadthausstrasse 119, 8400 Winterthur und im Stream: **Winterkongress der Digitalen Gesellschaft Schweiz**,
  * https://winterkongress.ch/2024/
* Samstag, 02.03.2024: **Open Data Day**
  * https://opendataday.org/de/
* Samstag, 02.03.2024, bis Sonntag, 03.03.2024, Rathaus, Moers: **Hackday Niederrhein 2024**
  * https://www.codeforniederrhein.de/hackday-2024/ 
* Samstag, 02.03.2024, bis Sonntag, 03.03.2024, Leipzig: **Umweltdatenwerkstatt**
  * https://datenschule.de/workshops/umweltdatenwerkstatt/
