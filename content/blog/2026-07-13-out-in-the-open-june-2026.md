---
title: "Transaktional vertrackt – Out in the Open Juni 2026"
author: "Jörg Reichert (Code for Leipzig)"
date: '2026-07-13T08:00:00+02:00'
excerpt: Monatlich erscheinender Überblick über Entwicklungen in der Open Data und Civic Tech Szene
topic: community
images:
- imgname: out-in-the-open-2026-06-header.jpg
  attribution: <a href="https://pixabay.com/photos/open-sign-paradis-ahoi-window-10333721">Foto</a> von <a href="https://pixabay.com/users/sannsie-40193152/">sannsie</a> auf <a href="https://pixabay.com/">Pixabay</a>
og_image: out-in-the-open-2026-06-header.jpg
type: blog
---

## Open Data
Der [Musterdatenkatalog für Kommunen](https://musterdatenkatalog.de/index.html) hat bei [GovData](https://www.govdata.de/) ein [neues Zuhause gefunden](https://social.bund.de/@opendata/116683043279616434).

Alle Verwaltungsmitarbeitenden sind aufgerufen, in [diesem Fragebogen](https://fitko.lamapoll.de/Datenqualit-t-im-ffentlichen-Sektor) zu bewerten, wie wichtig das Thema Datenqualität in ihrer jeweiligen Behörde ist. Die Ergebnisse der Umfrage sollen in ein Impulspapier [einfließen](https://discourse.opencode.de/t/online-umfrage-datenqualitaet-im-oeffentlichen-sektor/5456). Der so ermittelte Stellenwert, die organisatorische Verankerung, Maßnahmen zur Verbesserung, Dimensionen sowie den Reifegrad des Themas Datenqualität auf Bundes-, Länder- und kommunaler Ebene bilden dann die Arbeitsgrundlage für das Kompetenzteam "Data Governance". Dieses Team wurde aus Beteiligten verschiedener Bundesländer sowie des Bundes und der Kommunen im Rahmen des Schwerpunktthemas Datennutzung des IT-Planungsrats gerade aufgebaut.

Unter dem diesjährigen Motto "Climate Action" zeigt der Weltumwelttag die Bedeutung verlässlicher Informationen für Umwelt- und Klimaschutz. Umfangreiche offene und qualitätsgesicherte Daten [ermöglichen](https://www.bva.bund.de/DE/Services/Behoerden/Beratung/OpenData/Meldungen/Aktuelles/2026/BB_TdU.html), den Zustand der Umwelt zu erfassen, Entwicklungen durch fundierte Analysen zu beobachten, deren unterschiedliche Bewertungen und Prognosen besser nachvollziehen zu machen und durch politische sowie gesellschaftliche Entscheidungen wirksame Maßnahmen abzuleiten. 

Tobias Fellinger [zeigt Schritt für Schritt](https://tobias.fellinger.wien/2026/06/24/open-data-european-bathing-water-quality/), wie man für einen beliebigen (Urlaubs-)Ort in der EU die jährlichen Wasserqualitätsdaten von Badegewässern abrufen, klassifizieren und schließlich als farbige Marker auf einer Karte anzeigen lassen kann.

[FreeNauticalChart.net](https://freenauticalchart.net/) ist nach Selbstbeschreibung "ein Open-Source- und Open-Data-Projekt, das kostenlose Seekarten für Segler, Wasser- und Kartografie-Enthusiasten sowie Entwickler bereitstellt. Es hat zum Ziel, amtliche Kartendaten leicht zugänglich zu machen. Es basiert auf Daten, die als Open Data verfügbar sind." Es gibt auch den deutlichen Hinweis, dass die Karten "nur zu Informations- und Referenzzwecken" dienen.
"Sie sind nicht für die Navigation geeignet. Verwendung auf eigene Gefahr!" Doch wie [im Beitrag](https://github.com/quantenschaum/mapping/blob/20ba44b1a7e34532c7e2001e610fd870c2956a8e/docs/opendata.md) dokumentiert, dass nachdem das Projekt Beachtung und Anerkennug in einschlägigen Magazinen wie "Yacht" und "Segeln" als auch in der Community fand, das Bundesamt für Seeschifffahrt und Hydrographie (BSH) begann, Punktlotungen aus dem öffentlich zugänglichen Datenbestand zu entfernen, über restriktivere Servereinstellungen den Zugriff auf die Daten zu erschweren, sowie weitere Teile der Daten entfernt. Zudem wurde die Klausel "Die Verwendung der Daten zu Navigatonszwecken ist nicht gestattet." in die Nutzungsbedingungen neu aufgenommen. Nach Argumentation des BSH kann es keine Garantie für Daten geben, die Open-Data-Dienste aktuell zu halten, wäre zu großer Aufwand. Die Sachlage ist aber die, dass gesetzlich für die Freizeitschifffahrt die Papierkarte mit aktueller Berichtigung eh das einzig anerkannte Navigationsmittel bleibt, selbst lizensierte digitales Kartenprodukte sind somit ausgeschlossen, mal abgesehen davon, dass das BSH selbst für ihre über kommerziellen Lizenzen verkauften Daten ein Haftung für Qualität ausschließt. Länder wie die Niederlande und die USA zeigen allerdings, dass auch für die Navigation zugelassene offene Daten parallel zu kommerzielle (Verlag-)Angeboten existieren können. Es scheint nun nur noch eine Datennutzungsgesetz-(DNG)-/Geodatenzugangsgesetz-(GeoZG)-Klage gegen die zweckwidrige Nutzungsbeschränkung und faktische Unbenutzbarmachung der bereits offenen Daten helfen zu können. Denn die EU-Richtlinie 2019/1024 (Open-Data/PSI-Richtlinie) definiert Geodaten ausdrücklich als "hochwertige Datensätze", die in maschinenlesbarer Form, gebührenfrei und unter offenen Standardlizenzen bereitgestellt werden sollen. Daten, die mit Steuernmitteln erhoben wurde, sollten genauso wie es die Daten von BKG und DWD schon lange sind, lizenzfrei zur Verfügung stehen.

Das Kartenquartettspiel für Speichermedien ist bei einer internen Schulung der Stabsstelle Digitales Archiv im DLA-Marbach [entstanden](https://chaos.social/@harvey/116686286136591013) und steht nun als Office-Serienbrief [OpenSource](https://github.com/dla-marbach/dla-datentraeger-quartett).

Das Humanitarian Data Exchange (HDX) ist eine offene Plattform zum Teilen humanitäter Daten (durch die man [in den Data Grids](https://data.humdata.org/dashboards/overview-of-data-grids) browsen kann). Über eine [neue API](https://docs.humdata.org/build/hdx-apis/tabular-data-endpoints) lassen sich die tabellarischen Daten nun auch [programmatisch abrufen](https://centre.humdata.org/new-api-access-on-hdx-tabular-data-endpoints/). 

[Statistical Data and Metadata eXchange (SDMX)](https://en.wikipedia.org/wiki/SDMX) ist eine Sammlung von Standards, wie man statistische Daten und ihre Metadaten normiert beschreiben sollte, um ihr Teilen/Austausch zwischen Organisatione zu erleichtern. Da LLMs nicht gut beim Auswerten quantitativer Daten ist, nimmt [OpenSDMX](https://github.com/ondata/opensdmx/tree/main) einen Umweg, und [erzeugt](https://www.cottica.net/2026/06/02/the-open-data-centaurs-interacting-with-data-via-llm-assisted-structured-queries/) aus einer natürlichsprachigen Anfrage nur die passende Abfrage auf die strukturierten SDMX-Daten [zu erzeugen und auszuführen](https://mastodon.green/@alberto_cottica/116686754581037356), statt zu versuchen die Daten direkt auszuwerten.

Das ODIS Berlin [hat einige MCP-Server entwickelt](https://github.com/technologiestiftung/open-data-mcps#open-data-mcps-berlin), um Berlins offene Daten noch besser zu finden, analysieren und visualisieren zu können. [An Hand vieler Beispiele wird gezeigt](https://odis-berlin.de/aktuelles/2026-06-29-mcp-server/), wie die verschiedene Tools / Skills des MCP-Servers auch in Kombination genutzt werden können, um komplexe Anfragen, die neben dem reinen Abrufen der Daten auch deren Visualisierung und aggregierte Bereitstellung beinhaltet, bedienen zu können. Aber die Erfahrungen zeigen auch, dass alles mit der Struktur und Qualität der bereitgestellten Datensätze steht und fällt. Und die Notwendigkeit, die erzeugten Ergebnisse mit fachlichen Verständnis sowie Hintergrund- und Kontextwissen kritisch zu prüfen, bleibt bestehen. Ein geeignetes Testframework für die MCP-Server aufzubauen stellte sich als die größte Herausforderung heraus.

Auf Open Parlament TV sind nun weitere 20.000 Bundestags-Redebeiträge aus den Jahren 2009-2013 [durchsuchbar](https://openparliament.tv/aktuelles/deutscher-bundestag-redebeitraege-der-17-wahlperiode-2009-2013-durchsuchbar/). Insgesamt existieren damit 100.000 Redebeiträge von 2009 bis heute.

[Der Blog geoObserver feiert](https://geoobserver.de/2026/06/25/ein-gastbeitrag-3000-x-geoobserver-news-und-14-geburtstag/) sowohl seinen 14. Geburtstag als auch seinen 3000 Beitrag. Dabei ist er immer seinen Grundüberzeugungen treu geblieben: Open Data sind "Daten, die nicht im Schrank verstauben" und "Daten gehören in die Hände derer, die sie brauchen".

## Open Source
Ein [MDR-Beitrag](https://www.ardmediathek.de/video/mdr-sachsen-anhalt-heute/physiker-aus-wernigerode-entwickelt-ehrenamtlich-software/mdr/Y3JpZDovL21kci5kZS9iZWl0cmFnL2Ntcy9kYmI2OGFmNy1hYTkwLTQ3NTItOWIzZS03NzA0MjM2OWJhZTA) spricht mit dem Physiker Andreas Tille aus Wernigerode über seine Motivation, seit 1998 ehrenamtlich am freien Linux-Betriebssystem [Debian](https://de.wikipedia.org/wiki/Debian) mitzuentwickeln und dafür aktuell täglich 3 bis 4 Stunden seiner Freizeit zu investieren.

Es gibt etwa 30.000 allgemeinbildenden Schulen (also Grund-, Haupt-, Real-, Gesamtschulen sowie Gymnasien u.a.) in Deutschland. Wie erfolgreiche Beispiele aus Lübeck und dem Landkreis Harz zeigen, geht die Einführung von Open Source für Schulsoftware meist auf die Initiative einzelner Lehrkräfte zurück. Dass dann auch langfristig bei solchen Lösungen geblieben wird, hängt aber am Ende auch von der Unterstützung von Stadtverwaltung, IT-Dienstleistern und generell der politischen Rückendeckung ab, denn Rechnerausgabe und Betrieb erfolgen immer mehr zentral, und wenn die lokalen Vorreiter und Kümmerer gehen, droht der Rückfall auf proprietäre Systeme, wenn Linux-Systeme nicht zentral angeboten werden. Dabei spricht der Vergleich der Lizenzkosten eine klare Sprache. Und mit Lösungen wie [Puavo](https://puavo.org) und [Linux-Muster](https://www.linuxmuster.net/de/home/) gibt es schon Linux speziell für Schulen mit zentraler Nutzerkontenverwaltung. Es gibt leider immer noch zu wenig Informationen darüber, an welchen Schulen wie Open Source schon eingesetzt wird, deswegen würde es helfen, wenn noch mehr Menschen diese [laufende Umfrage](https://survey.lamapoll.de/Open-Source-an-Schulen-) ausfüllen.

Mit dem vom OKLab Flensburg entwickelten und betriebenen Portal [kulturbytes](https://kulturbytes.de/) (basierend auf der [Open-Source](https://github.com/sndcds/uranus)-Event-Management-Plattform [Uranus](https://sndcds.github.io/uranus-docs/uranus/)) lassen sich Veranstaltungen und Kulturorte pflegen. Die Stadt Glücksburg (Ostsee) (bzw. deren Kulturverwaltung) hat sich nun als erste Kommune [dafür entschieden](https://norden.social/@kulturbytes/116724431082962973), diese Lösung [offiziell zu nutzen](https://gluecksburg.kulturbytes.de).

Das Team vom Prototype Fund [gewährt einen Blick](https://www.prototypefund.de/blog/hinter-den-kulissen) hinter die Kulissen und stellt ihre Arbeit, speziell die der FOSS-Projektbetreuung vor.

In einem ersten [Strategiepapier](https://blog.documentfoundation.org/blog/2026/05/30/web-and-mobile-development-strategy-proposal/) stellt die Document Foundation vor, wie sie LibreOffice [zukunftsfähig machen möchte](https://www.heise.de/news/Erste-Details-LibreOffice-fuer-den-Browser-und-als-App-11313851.html). Auf Basis von Qt 6 und WebAssembly wird einer Browser-Version entwickelt, im dem Zuge soll auch eine neue responsive Benutzeroberfläche entstehen. Für die ebenfalls geplanten mobile Versionen für Android und iOS hofft man möglichst viel aus der Codebasis der Desktopanwendung wiederverwenden zu können. Ein gemeinsames Bearbeitung von Dokumenten soll zunächst eine klassische Client-Server-Architektur ermöglichen, als langfristige Vision steht aber auch ein Peer-to-Peer-Ansatz im Raum. Außerdem arbeitet man an einem eigenen Dokumentenserver, der sich mit der Desktop-Anwendung integrieren und die Arbeit mit remote gehosteten Dokumenten vereinfachen soll. Perspektivisch ließe sich dann über ihn auch die Zusammenarbeit und Vermittlung zwischen Clients koordinieren. 
  
Mit dem neuen Release ["Hub 26 Spring"](https://nextcloud.com/hub26-summer/) von Nextcloud ist unter anderem Euro-Office als zweite Office-Suite [mit an Board](https://www.heise.de/news/Nextcloud-Hub-26-Spring-Euro-Office-fordert-Collabora-heraus-11321897.html). Mit der neuen Komponente "Nextcloud Governance" lassen sich regulatorischen Vorgaben, wie die Kennzeichnung sensibler Inhalte oder die Archivierung besser abbilden.

Mit [GickUp](https://gickup.dev) kann man die Inhalte seiner Code-Repositories bei Github, Gitlab, Gitea u.a. backuppen. Denn neben dem eigentlich Code enthalten sie meist ja auch Ticketsystem, Wiki und [weitere sicherungswürdige](https://social.heise.de/@ct_Magazin/116730699493641025) Konfigurationen. Ein so gezogenes Backup kann auch dazu verwendet werden, auf eine Plattform umzuziehen, z.B. von Github auf Gitlab.

Deklarativ allein mit HTML-Code [Musik programmieren](https://front-end.social/@heydon/116792973320353577) geht mit [HyperBlam](https://hyperblam.how), die [Beispiele](https://hyperblam.how/examples/) zeigen, was möglich ist.

## Open Hardware
Elektrogeräte müssen zukünftig (wieder) so beschaffen sein, dass sie reparierbar sind. Nicht tauschbare Akkus verstoßen damit gegen das gerade vom Bundestag [beschlossene neue Gesetz](https://www.heise.de/news/Bundestag-beschliesst-Recht-auf-Reparatur-von-Elektrogeraeten-11346119.html), dass die EU-Richtlinie mit dem Recht auf Reparatur national umsetzt. Hersteller werden außerdem verpflichtet Reparaturen für ihre Produkte während ihrer üblichen Lebensdauer zu einem angemessenen Preis anzubieten.

Folgende Projekte [hat die Jury](https://hardware.prototypefund.de/three-grassroots-projects-for-the-energy-transition/) für die Förderung in der dritten Runde des Prototype Fund Hardware im Rahmen des Projekts [OpenEnergy](https://energie-selbermachen.de) (und dem Motto "Energiewende von unten") ausgewählt: [D0ry](https://codeberg.org/magro/D0ry) (eine offene Mess- und Steuerungskomponente für Bürgerenergieanlagen auf LoRa-Basis), [Wind-MPPT](https://libre.solar/hardware/mppt-2420-hc.html) (Windgeneratoren mit der [richtig konfigurierten Schaltung](https://libre.solar/hardware/mppt-2420-hc.html) basierend auf [Libre Solar](https://libre.solar) im optimalen Betriebspunkt betreiben) und [dc-charging-station](https://github.com/securityinmobility/dc-charging-station) (Bausatz aus Open-Hardware-Komponenten für eine bidirektionale Ladesäule).  

## Open and Citizen Science
Der Mitschnitt von [Heidi Seibolds](https://de.wikipedia.org/wiki/Heidi_Seibold) TEDx Talk aus vergangenem November ist nun [nachsehbar](https://www.youtube.com/watch?v=1iDCrBVOf8Q). Sie spricht darüber, wie die in OpenScience gelebten Werte wie Transparenz, Reproduzierbarkeit und Zusammenarbeit Wissenschaft und Forschung entscheidend voranbringen können (im Gegensatz zu den im geschlossenen Wissenschaftsbetrieb gesetzten Fehlanreizen wie [Publish or perish](https://de.wikipedia.org/wiki/Publish_or_perish), die leider Masse statt Klasse belohnen)

Bei [GrippeWeb](https://www.rki.de/grippeweb) kann man einmal pro Woche melden, ob man selbst oder seine Kinder Atemwegserkrankung hatte. Dem RKI [helfen diese Beobachtungen](https://social.bund.de/@RKI/116680057687372248), das Infektionsgeschehen und sich daraus ergebenden Trends früh abschätzen zu können.

Im Citizen-Science-Projekt [Microbelix](http://www.microbelix.de/) kann man Forscher:innen des [Helmholtz-Institut für Pharmazeutische Forschung Saarland (HIPS)](https://www.helmholtz-hzi.de/das-hzi/standorte/standort/hips/) helfen, die Biodiversität der Bodenbakterien für die Wirkstoffforschung [besser zu erschließen](https://www.helmholtz-hzi.de/media-center/newsroom/news-detailseite/microbelix-der-erdboden-als-mikrobielle-schatzkiste/).

Es ist ein deutschsprachiges [Handbuch](https://doi.org/10.1007/978-3-662-69703-0) zu Citizen Science [erschienen](https://www.schiebener.net/wordpress/gemeinsam-forschen-buergerinnen-und-buerger-richtig-in-die-forschung-einbinden/), dass an Hand zahlreicher Fallbeispiele die "Gelingungsfaktoren" erklärt, wie man Bürgerinnen und Bürger richtig in die Forschung einbindet.

## Verwaltungsdigitalisierung
Was nützen all die Vorgaben und Empfehlungen, [wenn es keine Verbindlichkeit gibt](https://www.heise.de/hintergrund/Missing-Link-Warum-Deutschlands-Behoerden-bei-der-Digitalisierung-stagnieren-11331433.html). Die meisten Kommunen sind unterfinanziert und Behördenleistungen zu digitalisieren wird leider immer noch als am ehesten verzichtbar angesehen. Und so lange die Beschlüsse vom IT-Planungsrat nur von "anstreben" sprechen, aber keine Berichtspflichten, keine Audits und schließlich keine Sanktionen bei Nicht- oder Schlechtumsetzung vorsehen, fehlt der nötige Druck für z.B. die Umsetzung einheitlicher Daten- und Schnittstellenstandards im Sinne der Zielarchitektur auch durchsetzen zu können. Dazu bräuchte es auch Organisationsstrukturen, die klare Verantwortlichkeiten definieren.

Beim Deutschland-Stack soll es diese Verbindlichkeit nun geben, [zu mindestens ein bisschen](https://www.heise.de/news/Deutschland-Stack-Bund-und-Laender-feiern-Durchbruch-bei-der-Verbindlichkeit-11336204.html). Für eine überschaubare Anzahl von Basiskomponenten haben die 16 Bundesländer eine "verbindliche Anbindung und Flächendeckung" zugesagt, unter dem Vorbehalt, dass der Bund den Großteil der Kosten für Entwicklung und Betrieb dieser Komponenten übernimmt.

Der eGovernment-Podcast hat die Beschlüsse der 50. Sitzung des IT-Planungsrat auch in seiner [neusten Podcast-Folge](https://egovernment-podcast.com/egov266_50-it-plr/) thematisiert.

Alles nur auf die Technik schieben zu wollen, [greift oftmals zu kurz](https://www.cyberkrisenmanagement.blog/organisationsversagen-vs-technikpanne/): wenn die Prozesse fehlen, die steuern, was z.B. mit den Nachrichten passiert, die an ein E-Mail-Postfach geschickt worden sind, wenn die Person dahinter nicht mehr für die Verwaltung arbeitet. Oder wenn die gesamte IT ausfällt, weil jemand es für eine gute Idee hielt, für alles den gleichen externen Anbieter zu nutzen. Von außen sieht beides wie Technikversagen aus und wird auch so medial dargestellt, doch die Gründe liegen tiefer.

Wollen ist leider nicht gleich Können: die digitale Brieftasche [Eudi-Wallet](https://www.sprind.org/taten/strategische-projekte/eudi-wallet) soll als Vorzeigeprojekt der Bundesregierung herhalten, doch hinter dem breitbeinigen öffentlichen Auftreten [offenbaren sich](https://mastodon.social/@bkastl/116713104841713839) chaotisches Projektmanagement, fragwürdige technische Entscheidungen, Zeitverzug und sich abzeichnender mangelhafter Umsetzung, vor allem was Sicherheit angeht. Ungünstigerweise hat das eIDAS Committee auf EU-Ebene [jüngst die Entscheidung getroffen](https://netzpolitik.org/2026/biometrische-passfotos-statt-pseudonyme-eu-kommission-hoehlt-schutzrechte-bei-digitaler-brieftasche-aus/), dass auch biometrische Passbilder mit in die Wallet sollen, auch wenn man als Bürger auch die Möglichkeit zum Opt-Out bekommt. Dafür hat man das Feature "frei wählbare Pseudonyme" erstmal auf Eis gelegt. 

We tried to run (bzw. jump), before we could walk (auf deutsch: "den zweiten Schritt vor dem ersten machen"): bei der ebenfalls von SPRIN-D, der Agentur für Sprunginnovation, verantworteten SPARK-Plattform, sollen mit [Beschäftigungstherapie und Beteiligungs-/Innovationstheater](https://tldr.nettime.org/users/tante/statuses/116668991736103329) mit KI-Komponenten-Entwickeln in einem 2010er-Gedächtnis-Hackathon (das "preisgekrönt" aus der Ankündigung bezieht sich übrigens auf einen in Dubai gewonnenen Preis für von PwC und Capgemini gezimmerter agentischer KI), ganz tolle Dinge durch die Community entstehen. Vor der Auskunft, wie viel die SPARK-Plattform denn nun wirklich gekostet hat, versucht man sich alledings [mit Manövern wie](https://chaos.social/@stk/116811605835902358), es gebe gar keine "Plattform" namens "SPARK", die Anfrage wäre zu ungenau, weiterhin zu drücken.

## Digitale Souveränität
Hat man für die Bezifferung der Kosten für Produkte und Dienstleistungen von Microsoft bisher immer noch die Ausgaben der Bundes-Ministerien und ihren direkt nachgeordneten Behörden betrachtet, wird für [eine umfassendere Datengrundlage](https://www.heise.de/news/Bund-in-der-Abhaengigkeitsfalle-Kostenexplosion-bei-Microsoft-Lizenzen-11343398.html) nun auch der Handelspartner-Rahmenvertrag der Zentralstelle IT-Beschaffung (ZIB) des Beschaffungsamtes einbezogen. Damit ergibt sich für 2025 ein Betrag von 481 Millionen Euro (für 2022 bei gleicher Berechnung: 211 Millionen Euro). Dass man sich entscheidend von dieser Abhängigkeit (und den massiven Kosten) löst, ist leider nicht in Sicht: gerade mal 8475 Lizenzen der Alternative OpenDesk werden produktiv in der Bundesverwaltung eingesetzt, der Großteil (7904) entfällt dabei allein auf das Agora-Projekt vom Robert-Koch-Institut (RKI), das Digitalministerium nutzt lächerliche 571 Lizenzen.

[Auf dem Kuketz-Blog](https://www.kuketz-blog.de/musik-streaming-plattformen-spotify-alternativen-teil-1/) hat Matthias Eberl alternative Musik-Streaming/Kauf-Plattformen nicht nur auf Funktionsumfang und Preis sondern eben auch auf Nicht-Tracking und Tantiemen-Fairness gegenüber den Rechteinhabern untersucht.

["Stop Killing The Internet"](https://www.stopkillingtheinternet.com) ist eine neue weltweite Bewegung, die sich für das Weiterbestehen eines offenen Internets einsetzt, welches aber durch Maßnahmen wie Altersverifikation, Identifikationspflicht und Endgeräteüberwachung von Staaten und Firmen schon jetzt bedroht ist. Die Schweizer Digitale Gesellschaft hat sich bereits angeschlossen und in [diesem Thread](https://mastodon.social/@digiges/116834094669218280) ergänzend ihre Forderungen aufgeschrieben.

## Energie
Die gemeinnützige niederländische Organisation [Open Energy Transition (OET)](https://www.openenergytransition.org) sieht Open Source als strategischen Faktor für die europäische Infrastruktur, [gerade im Energiebereich](https://mastodon.social/@OpenEnergyTransition/116686557043038825). Deswegen sollten Energiemodell offen zugänglich sein, so dass an ihnen kollaborativ an ihnen gearbeitet werden kann. Sie selbst gehen [mit guten Beispiel](https://github.com/open-energy-transition) voran.

[2025 startet](https://mastodon.social/@ioew/116724749415885495) die Gemeinde Bakum (Gemeinde im Landkreis Vechta in Niedersachsen) mit [Forum EnShare](https://future-energy-lab.de/projects/forum-enshare/) ein Pilotprojekt mit Netzbetreibern und lokaler Bürgerenergiegenossenschaft, um Energy Sharing, also gemeinschaftliche Nutzung von lokal erzeugtem Strom, in der Praxis [zu erproben](https://www.youtube.com/watch?v=KTugx-gBfOA). Seit 1. Juni 2026 ist Energy Sharing in Deutschland auch gesetzlich legalisiert. Die in § 42c EnWG geregelte Umsetzung könnte dennoch weiter vereinfacht werden.

[Christof Korth erklärt](https://www.l-iz.de/wirtschaft/verbraucher/2026/06/energiewende-dritter-teil-dynamische-stromtarife-661732), wie dynamischen Stromtarife funktionieren. Im Gegensatz zu klassischen Stromtarife gibt es keinen festen Arbeitspreis, sondern ändert sich dynamisch im Tagesverlauf in Abhängigkeit von der Strombörse. So werden Anreize geschaffen, Verbräuche in Zeiten zu verlegen, in denen viel erneuerbarer, günstiger Strom vorhanden ist.

[Wie die Energie-Charts belegen](https://wisskomm.social/@energy_charts_d/116729868254321199), gab es bei Solarstrom im metmeteorologischen Frühling 2026 in allen europäischen Länder [neue Rekorde](https://energy-charts.info/charts/energy/chart.htm?l=de&c=EU&interval=season&season=1&year=-1&legendItems=pyn).

## Mobilität
[DigiRad](https://vision-velo.de/digirad-digitales-radverkehrskonzept/) ist ein neues OpenSource-QGIS-Plugin, das verspricht, mit ihm Radnetze [einfacher planen zu können](https://social.bund.de/@bmv/116736117872259496).

Auf den Grazer Linuxtagen 2026 haben Peter Pötzi und Michael Ehrenreich [in ihrem Vortrag](https://media.ccc.de/v/glt26-688-c-its-mit-einem-esp32-ampeln-straenbahnen-und-autos-tracken) gezeigt, wie man mit einem ESP32 Ampeln, Straßenbahnen und Autos tracken (sofern, wie in Graz, das [Cooperative Intelligent Transport System (C-ITS)](https://de.wikipedia.org/wiki/Cooperative_Intelligent_Transport_System) unterstützt wird) und sowohl auf einer Live-Karten visualisieren kann, als auch die Daten (z.B. Ampelschaltungen, Wartezeiten an Fußgängerübergängen) historisch in einem Grafana-Dashboard auswerten kann. Das Projekt sucht weitere Freiwillige, die solche C-ITS-Daten beisteuern.

In Frankfurt am Main registrierten bereits 10 Linienbusse dank entsprechender Kamera-Ausstattung hunderte Falschparker [en passant](https://www.spiegel.de/mobilitaet/bus-bahn/frankfurt-linienbusse-knipsen-hunderte-falschparker-a-4736758b-26d4-4653-80b5-b8ca22189ea3). Weitere Busse sollen nun mit der Technik ausgestattet werden.

Wem die offiziellen Verspätungsgründe der Bahn [nicht kreativ genug sind](https://bsky.app/profile/gregor.bsky.social/post/3mohwjw6ynk2b), dem wird durch [Bahnhoroskop](https://bahnhoroskop.ggor.de/) geholfen.

## Klima
* Hitze-Check 2026 der Deutschen Umwelthilfe: Fast eine Million Bäume aus deutschen Städten verschwunden
  https://www.duh.de/presse/pressemitteilungen/pressemitteilung/hitze-check-2026-der-deutschen-umwelthilfe-fast-eine-million-baeume-aus-deutschen-staedten-verschwund/
  * Hunderttausende Bäume haben die Städte verlassen
    https://klimareporter.de/gesellschaft/hunderttausende-baeume-haben-die-staedte-verlassen
  * Hunderttausende Bäume haben die Städte verlassen
    https://www.nd-aktuell.de/artikel/1200251.klimawandel-hunderttausende-baeume-haben-die-staedte-verlassen.html
* Eichenprozessionsspinner plagt Berlin-Brandenburg – Gericht ordnet Bekämpfung an
  https://www.berliner-zeitung.de/article/eichenprozessionsspinner-cottbus-urteil-berlin-rekordbefall-10134563
  https://dju.social/@DerKlimablog/116726231070057350
  * In Berlin sorgt die Ausbreitung der giftigen Eichenprozessionsspinner für Panik. Und die Politik? Reagiert spät und chaotisch.
    https://taz.de/Eichenprozessionsspinner-in-Berlin/!6188536/
* Codecarbon is a nice tool to get carbon emission metrics of your code. It can run offline, locally on machine.
  https://github.com/mlco2/codecarbon
  https://mastodon.social/@omkar_foss/116755034658094181
* Nasa warnt vor El Niño: Pazifik-Temperaturen 6 Grad über dem Schnitt
  https://www.telepolis.de/article/Nasa-warnt-vor-El-Nino-Pazifik-Temperaturen-6-Grad-ueber-dem-Schnitt-11337900.html
* Satellitenaufnahmen: El Niño hat begonnen und wird immer stärker
  https://www.heise.de/news/Satellitenaufnahmen-El-Nino-hat-begonnen-und-koennte-besonders-stark-werden-11337255.html
* Stadtklimadashboard
  https://stadtklimadashboard.de
  https://wisskomm.social/@ioer/116776831237397788
* 3,4 Millionen Beschäftigte arbeiten in der deutschen #GreenTech-Branche - 3x so viel wie in der Autoindustrie. Die Exportleistung ist 132 Mrd. Euro.
  https://www.umweltbundesamt.de/themen/wirtschaft-konsum/wirtschaft-umwelt/wirtschaft-fuer-umwelt-klimaschutz/greentech-atlas-2025
  https://openbiblio.social/@RenkeSiems/116814665715852247
* Hitzeinseln, Hitze-Plätze in Eurer Stadt auf Karte einzutragen
  https://maps.greenpeace.org/maps/gpde/stadtnatur/
  via https://mstdn.social/@XR_Nuernberg/116816906219083635
* So sehr leidet Ihre Region unter Dürre
  https://correctiv.org/aktuelles/klimawandel/2026/06/11/duerre-trockenheit-wassermangel-landwirtschaft-europa/
* Ein einzelner Hitzetag kostet rund 431 Millionen Euro
  https://www.handelsblatt.com/meinung/gastbeitraege/gastkommentar-ein-einzelner-hitzetag-kostet-rund-431-millionen-euro/100231354.html
* Above-average sea surface temperatures across European seas at the end of June 2026
  https://eu-space.europa.eu/components/earth-observation-copernicus/image-of-the-day/above-average-sea-surface-temperatures-across-european-seas-end-june-2026
### Kühle Orte
* Wo kühl?
  https://www.wo-kuehl.de
* Kühle-Orte.de
  https://kühle-orte.de/
  * z.B. Dresden
    https://kühle-orte.de/kuehle-orte-karte-landeshauptstadt-dresden/
* Wien
  wien.gv.at/umwelt/coole-zonen 
  via https://fedi.at/@tom/116673835685782442
* Übersicht
  https://social.chaotikum.org/@tvluke/116800110091614611
* Stuttgart
  https://maps.stuttgart.de/kuehle_orte/
* Leipzig
  https://www.leipzig.de/leben-in-leipzig/gesundheit/vorsorge/gesundheitstipps-bei-hitze
### Anpassung
* München - Wie die autogerechte und steinerne Stadt zurückgedrängt werden soll.
  https://www.sueddeutsche.de/muenchen/muenchen-ludwigstrasse-umgestaltung-plaene-baeume-autofrei-li.3476568
* Bremen fördert, dass Menschen Flächen entsiegeln
  https://taz.de/Entsiegelung-in-Bremen/!6185922/
### USA
* weltweit fortschrittlichste Netzwerk zur Ozeanüberwachung wird verschrottet
  https://norden.social/@Attac_Norden/116691649275866749
* KI-Rechenzentrum: Trump-Regierung will Umweltklage gegen xAI beenden
  https://www.golem.de/news/ki-rechenzentrum-trump-regierung-will-umweltklage-gegen-xai-beenden-2606-209932.html
* DOGE fired NOAA's climate scientists. Those scientists just launched climate.us - a new hub for climate research, formerly Climate.gov"
  https://www.climate.us
  https://jasette.facil.services/@MichelPatrice/116813729992909946

## Kultur
* Sixty thousand love letters and counting: volunteers help sift through vast German trove of devotion
  https://www.theguardian.com/world/2026/jun/03/sixty-thousand-love-letters-germany-archive-volunteers
  https://liebesbriefarchiv.de
  https://openbiblio.social/@awinkler/116688567135716976
* Kritik im Datenraum. Graph-Theorie für eine digitale kritische Museologie
  https://lisa.gerda-henkel-stiftung.de/engagierte_kunstgeschichte_fuchsgruber
  https://social.wikimedia.de/@wikimediaDE/116720503065228510
* Künstliche Intelligenz soll Bairisch lernen
  https://www.heise.de/news/Kuenstliche-Intelligenz-soll-Bairisch-lernen-11332176.html
* Stadtansichten auf #wikimediacommons strukturiert erschließen, Städte in #LOD verwandeln, die Ansichten – und den historischen Stadtraum! – les- und analysierbar machen
  https://commons.wikimedia.org/wiki/User:Awinkler3/Annotating_the_City
  https://openbiblio.social/@awinkler/116776936722791585
* Stadtarchiv Potsdam startet Internet-Rechercheportal
  https://www.tagesspiegel.de/potsdam/landeshauptstadt/online-in-die-vergangengheit-stadtarchiv-potsdam-startet-internet-rechercheportal-15742997.html
* Forscher entdecken 5000 Jahre alten Prototyp von Stonehenge
  https://www.tagesanzeiger.ch/stonehenge-5000-jahre-alte-holzanlage-in-bulford-entdeckt-678917771893
* Rename this - Wie Berliner Straßennamen Geschichte schreiben
  https://odis-berlin.de/aktuelles/2026-06-27-stra%C3%9Fenumbenennung_scrolly/

## Finanzen
* Städtetag schockiert: Pflegereform belastet Kommunen massiv
  https://www.diesachsen.de/gesundheit/staedtetag-schockiert-pflegereform-belastet-kommunen-massiv-3144129
* Gratis E-Book "Faire Steuern"
  https://perspective-daily.de/article/faire-steuern-pdf
  https://social.perspective-daily.de/@PerspectiveDaily/116726379924790979
* Kommunen am Limit
  https://kommunenamlimit.de
* EU-Abgeordnete stimmen für Digitalen Euro
  https://netzpolitik.org/2026/alternative-zu-visa-paypal-und-co-eu-abgeordnete-stimmen-fuer-digitalen-euro/
* Sie kaufen die Welt, wir zahlen den Preis – Unser Leben, ihr Profit
  https://www.finanzwende.de/themen/finanzialisierung/unser-leben-ihr-profit
* Die Berichterstattung zur (Aktienrente-) grenzt für mich an Medienversagen, und das ist gefährlich für uns alle:
  https://bsky.app/profile/krokoquarius.bsky.social/post/3mp6jo2tg6k2a
* Bargeld-Verordnung: Wie die EU die Rolle des Bargelds stärken will
  https://netzpolitik.org/2026/bargeld-verordnung-wie-die-eu-die-rolle-des-bargelds-staerken-will/

## Gesundheit
* Digital Health: Erfahrungen mit E-Rezept, E-Patientenakte und Heilberufsausweis
  https://www.heise.de/hintergrund/Erfahrungsbericht-TI-und-Praxis-Gut-gemeint-ist-nicht-gut-gemacht-11319514.html
* Patientenvertreterin: "Wir haben bei der Digitalisierung den Überblick verloren"
  https://www.heise.de/hintergrund/Die-Digitalisierung-hat-grosses-Potenzial-fuer-Patientinnen-und-Patienten-11340915.html
* Wenn Private Equity die Arztpraxis kauft
  https://www.sueddeutsche.de/projekte/artikel/bayern/bayern-arztpraxen-kauf-private-equity-firmen-rendite-folgen-gesundheitswesen-e133717/?reduced=true

## Transparenz
* Lange war der Vermittlungsausschuss die Dunkelkammer der Gesetzgebung. 2023 veröffentlichten wir erstmals die Sitzungsprotokolle, um Transparenz zu schaffen. Jetzt zieht der Vermittlungsausschuss endlich selbst nach.
  https://fragdenstaat.de/artikel/eigener-sache/2026/05/vermittlungsausschuss-folgt-dem-beispiel-von-fragdenstaat/
  https://chaos.social/@fragdenstaat/116680838611322809
* Was fehlt: Betrachtungen und Recherchen zur Rolle privater Stiftungen für die digitalpolitische Zivilgesellschaft.
  https://systemli.social/@anneroth/116684941827934040
* Bundesbeauftragte: Informationsfreiheit soll ins Grundgesetz
  https://www.heise.de/news/Bundesbeauftragte-Informationsfreiheit-soll-ins-Grundgesetz-11317290.html
* Neuer Bundesbeauftragter für Datenschutz und Informationsfreiheit gewählt: "Hennemann gilt als Vertreter eines wirtschaftsorientierten Datenschutzes, der Daten als ökonomisches Gut sieht und die Nutzung von Daten für Innovation und Geschäftsmodelle betont."
  https://netzpolitik.org/2026/moritz-hennemann-neuer-bundesbeauftragter-fuer-datenschutz-und-informationsfreiheit-gewaehlt/
* BfDI veröffentlicht erste bundesweite Repräsentativbefragung zur Informationsfreiheit. 
  https://www.bfdi.bund.de/DE/BfDI/Datenbarometer/Informationsfreiheit/Informationsfreiheit_node.html
  via https://chaos.social/@jk/116688505385548388
* Wie das Arbeitsministerium eine Forderung des Agrarministeriums innerhalb von 30 Minuten akzeptierte
  https://www.abgeordnetenwatch.de/recherchen/lobbyismus/baerbel-bas-weicht-schutzregeln-fuer-saisonarbeiterinnen-auf
* EU-Ombudsfrau rügt Brüssel: Von der Leyen darf Chats nicht automatisch löschen
  https://www.heise.de/news/EU-Ombudsfrau-ruegt-Bruessel-Von-der-Leyen-darf-Chats-nicht-automatisch-loeschen-11320672.html
* Bundesregierung erteilt mehr Transparenz eine Absage
  https://www.heise.de/news/Bundesregierung-erteilt-mehr-Transparenz-eine-Absage-11319610.html
* Guter Grund Vorträge
  https://guter-grund.info/vortraege/
* Jetzt online: unsere neue #Klimaklagen-Datenbank – 221 Verfahren seit 2006, erstmals zentral erfasst, stetig aktualisiert und frei durchsuchbar. 
  https://www.wiso.uni-hamburg.de/fachbereich-sowi/professuren/aykut/klimawende-ausblick/klimaklagen-datenbank/datenbank.html
  https://mastodon.social/@esrah_unihh/116726007963922262
* Mit "Nachgeliefert" lassen sich alle Regierungspressekonferenzen seit 2014 systematisch durchsuchen, Wortnennungen vergleichen, Anfragen nach IFG oder Presserecht stellen oder Ihr trackt eure Themen.
  https://fragdenstaat.de/artikel/exklusiv/2026/06/uber-klima-wird-gesprochen-wenn-es-brennt/?pk_campaign=mastodon
  https://chaos.social/@fragdenstaat/116726675361606515
* Die Aktivistin Martha Root hat Wolfram Weimers Frühwerk frei verfügbar gemacht – in der Bibliothek, deren Ausbau der Kulturstaatsminister stoppen will
  https://taz.de/Veroeffentlichung-von-Weimers-Gedichten/!6186770/
  https://pinkpower.lol/weimer/
* Ein Zuarbeiter der konservativen Denkfabrik Republik 21 ist zum neuen Chefredenschreiber von Wirtschaftsministerin Katherina Reiche (CDU) avanciert
  https://correctiv.org/aktuelles/parteien/2026/06/10/von-der-rechten-denkfabrik-zu-katherina-reiche/
* Berlin: Informationsfreiheits-Fiasko mit Ansage
  https://fragdenstaat.de/artikel/policy/2026/06/informationsfreiheits-fiasko-mit-ansage/
* Verschlossene Auster 2026 geht an Berlins Regierenden Bürgermeister Kai Wegner
  https://netzwerkrecherche.org/blog/verschlossene-auster-2026/
* 20 Jahre Informationsfreiheitsgesetz: Transparenz nicht schwächen, sondern ausbauen
  https://netzpolitik.org/2026/20-jahre-informationsfreiheitsgesetz-transparenz-nicht-schwaechen-sondern-ausbauen/
* Nach Datenleck: Jens Spahn bestätigt Teilnahme an Veranstaltungen von Peter Thiel
  https://www.deutschlandfunk.de/jens-spahn-bestaetigt-teilnahme-an-veranstaltungen-von-peter-thiel-110.html
  * Spahn besucht seit Jahren vertrauliche Thiel-Treffen
    https://www.t-online.de/nachrichten/deutschland/innenpolitik/id_101300782/jens-spahn-besucht-seit-jahren-diskrete-thiel-treffen.html
  * Jens Spahn verteidigt Teilnahme an »Dialog«-Treffen von Peter Thiel
    https://www.zeit.de/politik/deutschland/2026-06/jens-spahn-dialog-netzwerk-peter-thiel-gxe
* Gentechnik auf dem Teller – und keiner sagt's Dir
  https://www.telepolis.de/article/EU-Gentechnik-Forsa-Umfrage-zeigt-breiten-Protest-gegen-CRISPR-Plaene-11343019.html
  via https://social.heise.de/@telepolis/116808756796935202
* Freiheitsrechte: "Das Ergebnis ist eindeutig: Die AfD ist verfassungswidrig." - 2.500 Belege in Gutachten
  https://afd-gutachten.de
  https://mastodon.social/@pruef_bw/116810255146816310
* FragDenStaat AfD-Datenbank ist da - Jeder Beleg ist mit dem AfD-Gutachten von Freiheitsrechte verknüpft. 
  https://fragdenstaat.de/aktionen/afd-datenbank/
  * Belege zum Rechtsgutachten: Darum ist die AfD verfassungswidrig
    https://fragdenstaat.de/artikel/exklusiv/2026/06/darum-ist-die-afd-verfassungswidrig/
* Prozess um Spahns Maskendeal startet in Bonn
  https://www1.wdr.de/mediathek/audio/wdr5/wdr5-morgenecho-interview/audio-prozess-um-maskendeal-startet-in-bonn-100.html
* Was hat sich durch das Österreichische Informationsfreiheitsgesetz eigentlich verändert?
  https://tube.bawü.social/w/mSZNr1wmYw3iphJREHpkZ2
  * Erwin Ernst Steinhammer – Informationsfreiheit in Österreich: Wie transparent ist der Staat wirklich?
    https://podcast.mitmilchundzucker.at/informationsfreiheit-oesterreich-mit-erwin-ernst-steinhammer/
    https://mitmilchundzucker.podigee.io/320-erwin-ernst-steinhammer
    https://fedi.at/@informationsfreiheit/116833673307541602
* Guttenberg: Der Mann aller Märkte
  https://correctiv.org/aktuelles/lobbyismus/2026/06/26/guttenberg-der-mann-aller-maerkte/
* EU-Regeln: Warum neues Gen-Food bald unbemerkt im Supermarkt landet
  https://www.telepolis.de/article/EU-Regeln-Warum-neues-Gen-Food-bald-unbemerkt-im-Supermarkt-landet-11343964.html

## Demokratie
* DemokRADtour
  https://ostdeutschland.de/startseite.html
* sachsen-anhalt Weltoffen
  https://sachsenanhalt-weltoffen.de
* Forscher: Kneipensterben ist schlecht für die Demokratie
  https://www.diesachsen.de/soziales/forscher-kneipensterben-ist-schlecht-fuer-die-demokratie-3143053
* Das Schweizer Parlament schafft die Grundlage für Versuche mit E-Collecting:
  https://www.digitale-gesellschaft.ch/2026/06/19/e-collecting-parlament-macht-weg-frei-fuer-digitale-unterschriftensammlung-gemeinsame-medienmitteilung-der-stiftung-fuer-direkte-demokratie-und-der-digitalen-gesellschaft/

## Journalismus
* The RePlaybook: A Field Guide to the Climate and Information Crisis
  https://tacticaltech.org/replaybook/
  https://mastodon.cc/@info_activism/116725751160558903
* One Year of Publix: Our First Impact Report Is Here
  https://www.publix.de/en/news/impact-report-01
* "Kulturwandel" oder Verflachung? Deutschlandfunk plant große Programmreform
  https://uebermedien.de/117386/kulturwandel-oder-verflachung-deutschlandfunk-plant-grosse-programmreform/

## Überwachung
* Deutsche Polizeibehörden setzen bei Ermittlungen mitunter auf die Dienste von Datenhändlern, wie BR-Recherchen zeigen
  https://www.tagesschau.de/investigativ/br-recherche/standortdaten-handy-app-polizei-datenhandel-100.html
* Thüringen plant ein neues Polizeigesetz
  https://thuerpagstoppen.noblogs.org
  https://digitalcourage.social/@digitalcourage/116675543480333136
* Wenn Überwachungskapitalismus und Überwachungsstaat zusammenwachsen
  https://netzpolitik.org/2026/online-werbung-wenn-ueberwachungskapitalismus-und-ueberwachungsstaat-zusammenwachsen/
  * Deutsche Polizei nutzt offenbar rechtswidrig Databroker
    https://netzpolitik.org/2026/daten-schwarzmarkt-deutsche-polizei-nutzt-offenbar-rechtswidrig-databroker/
* CDU, SPD und BSW wollen Überwachung in Sachsen ausweiten
  https://netzpolitik.org/2026/smartphones-hacken-gesichter-scannen-cdu-spd-und-bsw-wollen-ueberwachung-in-sachsen-ausweiten/
  * Zivilgesellschaftliche Organisationen appellieren an die Fraktionen des Sächsischen Landtags, der geplanten Massenüberwachung nicht zuzustimmen
    https://www.privatsphaere-leipzig.org/posts/2026-06-16-pm-novelle-polizeigesetz/
  * Wer heute biometrische Massenüberwachung und #Verhaltensscanner legalisiert, baut Infrastruktur für den Techno-Faschismus von morgen. Abgeordnete von Sachsen: Stimmt dagegen!
    https://www.ccc.de/de/updates/2026/stop-ueberwachungsmaschinerie-sachsen
  * Polizeirechtsnovelle verabschiedet: Landtag ermöglicht massive Überwachung in Sachsen
    https://netzpolitik.org/2026/polizeirechtsnovelle-verabschiedet-landtag-ermoeglicht-massive-ueberwachung-in-sachsen/
* Palantir has lost a legal bid to force a Swiss magazine to publish its responses to articles detailing how the country’s government repeatedly rejected its services
  https://infosec.exchange/@adfichter/116738333166484144
* Neue Höchststände bei Polizeischüssen und Taser-Einsätzen
  https://netzpolitik.org/2026/statistik-zu-polizeilichem-schusswaffengebrauch-neue-hoechststaende-bei-polizeischuessen-und-tasereinsaetzen/
* re:publica 26: Wir wissen wo du warst – weil Databroker deine Daten verkaufen
  https://youtu.be/QyFCa6RkqXM
  https://mamot.fr/@roofjoke/116800369731539239
* Wie Bayern die Kontrolle über Palantir verliert
  https://www.golem.de/news/bayerische-polizei-und-palantir-ist-der-einsatz-von-vera-teils-verfassungswidrig-2606-210271.html

## Entfremdete Intelligenz
* 400-Milliarden-Parameter-Modell: Konsortium „Europa“ gewinnt KI-Wettbewerb
  https://www.heise.de/news/400-Milliarden-Parameter-Modell-Konsortium-Europa-gewinnt-KI-Wettbewerb-11339003.html
* Lokales AI-Agent-Setup mit Ollama, Open WebUI und n8n (2026)
  https://skill-sprinters.de/blog/tools/lokales-ai-agent-setup-ollama-open-webui-n8n-2026/
* Bayern erlaubt generell KI-Einsatz bei Hochschul-Prüfungen
  https://www.br.de/nachrichten/bayern/bayern-erlaubt-generell-ki-einsatz-bei-hochschul-pruefungen,VNLznOS
### Fremde Federn
* AI turns this single bullet point into a long email I can pretend I wrote
  AI makes a single bullet point out of this long email I can pretend I read
  https://mastodon.social/@Sheril/116720919490343442
* Bei Reden & Texten von Thüringens Ministerpräsident Voigt schlug ein Analysetool zehn mal mehr an als bei Beiträgen anderer Politiker*innen. Außerdem finden sich in einem Text mehrere Zitate, die nicht verifizert werden konnten
  https://www.deutschlandfunkkultur.de/wie-viel-ki-ist-in-den-texten-von-thueringens-mp-recherche-von-frag-den-staat-100.html
  https://chaos.social/@fragdenstaat/116742490224042491
  * Als Reaktion auf die fragdenstaat.de Recherche zu den Texten von Mario Voigt hat die FAZ einen Gastbeitrag des Ministerpräsidenten depubliziert. 
    https://www.faz.net/aktuell/feuilleton/medien-und-film/medienpolitik/zum-ki-verdacht-bei-gastbeitrag-von-mario-voigt-200917046.html
    https://bsky.app/profile/jonpeaceman.bsky.social/post/3mnwuvvjwkc22
* Jetzt soll auch #Reiche KI für ihren Gastbeitrag in der FAZ genutzt haben. Nicht nur ein bisschen, sondern zu wahrscheinlich mehr als zwei Dritteln.
  https://dju.social/@DerKlimablog/116775852695840444
* Die zerstörerischste Form von Plagiat: Was die KI- Paranoia bewirken kann
  https://kulturundkontroverse859.substack.com/p/die-zerstorerischste-form-von-plagiat
* Ein KI-Skandal erschüttert den Journalismus. Aber ist es überhaupt einer? Die Medienbranche ist geteilter Meinung
  https://taz.de/KI-im-Journalismus/!6185296/
  https://bsky.app/profile/jonpeaceman.bsky.social/post/3mos645sghs2u
### Grenzen
* Stroop-Effekt: KI-Modelle scheitern an klassischem Aufmerksamkeitstest
  https://www.heise.de/news/Stroop-Effekt-KI-Modelle-versagen-bei-klassischem-Aufmerksamkeitstest-11317071.html
* Digital-Me: Warum ich mehr bin als meine Daten
  https://t2informatik.de/blog/digital-me-mehr-als-meine-daten/
* Ford hired AI and sacked humans. It backfired badly
  https://www.independent.co.uk/tech/ford-ai-automation-humans-hiring-artificial-intelligence-b3004733.html
### Sicherheit
* Hackers are hijacking high-profile Instagram accounts by simply asking Meta's AI chatbot to change the email on the account. Meta's AI does it, hacker gets password reset code, they're in
  https://infosec.exchange/@josephcox/116675938948881868
* Malware: KI erzeugt kaum aufhaltbaren Wurm
  https://www.heise.de/news/IT-Forscher-zeigen-anpassungsfaehigen-KI-Wurm-11318083.html
* Cloned sites: the shopping scams that lead ChatGPT to fake stores
  https://www.theguardian.com/money/2026/jun/07/ai-chatgpt-shopping-scams-fake-websites
### Umweltbelastung
* Claude Carbon
  https://reset.org/energie-vibe-coding-reduzieren-wie-claude-carbon-dir-helfen-kann/
  https://mastodon.social/@reset_org/116681324507923061
  https://github.com/gwittebolle/claude-carbon
* Die Beweise für positive Klimaauswirkungen durch sogenannte „KI“ sind schwach, während die Klimaschäden klar belegt sind. Ein Bericht von AlgorithmWatch zeigt, wie Tech-Unternehmen Greenwashing betreiben
  https://netzpolitik.org/2026/ki-klimaschwindel-und-greenwashing-big-tech-erklaert-das-problem-zur-loesung/
* KI-Rechenzentren dürften 2030 einen Wasserverbrauch wie 1,3 Milliarden Menschen haben
  https://www.derstandard.at/story/3000000323330/ki-rechenzentren-duerften-2030-einen-wasserverbrauch-wie-13-milliarden-menschen-haben
### Protest
* Neue Rechenzentren: Das muss nicht sein
  https://www.nd-aktuell.de/artikel/1200073.kuenstliche-intelligenz-neue-rechenzentren-das-muss-nicht-sein.html
### Alternativen
* DuckDuckGo: KI-freie Suche boomt – jetzt als Standard
  https://www.heise.de/news/DuckDuckGo-KI-freie-Suche-boomt-jetzt-als-Standard-11317527.html
* Zurück zu Buch und Stift: Norwegen verbannt KI aus Grundschulen
  https://www.heise.de/news/Zurueck-zu-Buch-und-Stift-Norwegen-verbannt-KI-aus-Grundschulen-11339393.html
* PACT: Cloudflare will mit Browserherstellern böswilligen Traffic aussortieren
  https://www.heise.de/news/PACT-Cloudflare-will-mit-Browserherstellern-boeswilligen-Traffic-aussortieren-11340973.html
### Kapitalismus
* Unternehmen vergisst Limits für KI-Nutzung, verbrennt halbe Milliarde Dollar in einem Monat
  https://www.derstandard.at/story/3000000322988/unternehmen-vergisst-limits-fuer-ki-nutzung-verbrennt-halbe-milliarde-dollar-in-einem-monat
* KI lieber "entfremdete Intelligenz" nennen
  https://sciences.social/@MSchnetker/116674158399393154
* US-Senator plant Gesetz für 50-Prozent-Aktiensteuer auf OpenAI, Anthropic und xAI. Ein Staatsfonds soll Bürgern Dividenden zahlen.
  https://www.telepolis.de/article/Bernie-Sanders-will-50-Prozent-der-KI-Aktien-in-oeffentliche-Hand-bringen-11318656.html
* Von der Kohle zur KI-Kriegswirtschaft
  https://jacobin.de/artikel/kohle-ki-kriegswirtschaft-rheinisches-revier
* KI-Firmen kaufen Antiquariate leer – und vernichten die Bücher
  https://www.srf.ch/kultur/gesellschaft-religion/jagd-auf-alte-buecher-ki-firmen-kaufen-antiquariate-leer-und-vernichten-die-buecher
  * Kaufen KI-Unternehmen deutsche Antiquariate leer?
    https://www.literaturcafe.de/kaufen-ki-unternehmen-deutsche-antiquariate-leer/
* Europe must choose between AI and climate goals, data center lobby says
  https://www.politico.eu/article/europe-choose-ai-climate-goals-data-center-chief-warns/
* Prognose: 2028 wird KI-Coding teurer als Entwicklergehälter
  https://www.heise.de/news/Prognose-2028-wird-KI-Coding-teurer-als-Entwicklergehaelter-11343464.html
* KI-Blase durchgerechnet: Erst zahlen, dann erschrecken!
  https://www.metacheles.de/ki-blase-durchgerechnet-erst-zahlen-dann-erschrecken/
## Ressourcenbelastung
* Open Context (https://opencontext.org) is now getting slammed with 3x more traffic than normal.
  https://scholar.social/@ekansa/116722821761382323
* Der hohe Bedarf an Speicherkapazitäten für KI-Rechenzentren sorgt aktuell auch bei Verbraucherinnen und Verbrauchern für gestiegene Preise für Speichermedien.
  https://social.bund.de/@destatis/116736045140963571
## Gerichtsurteile
* A court in Munich declared that Google is liable for their "AI summaries" and all its hallucinations
  https://the-decoder.com/landmark-german-ruling-declares-googles-ai-overviews-are-googles-own-words-and-makes-it-liable-for-false-answers/
  https://tldr.nettime.org/@tante/116724678506655962
  * Nobody needs AI to search the Internet, court says in ruling against Google
    https://arstechnica.com/tech-policy/2026/06/nobody-needs-ai-to-search-the-internet-court-says-in-ruling-against-google/
    https://mastodon.social/@arstechnica/116726961728397799
* Präzedenzfall Garfield AI: Wie ein Algorithmus das Gericht erobert
  https://www.telepolis.de/article/Praezedenzfall-Garfield-AI-Wie-ein-Algorithmus-das-Gericht-erobert-11341806.html
## Verantwortung
* Die perfekte Ausrede: Warum wir die Schuld so gern auf KI schieben
  https://www.telepolis.de/article/Die-perfekte-Ausrede-Warum-wir-die-Schuld-so-gern-auf-KI-schieben-11328396.html
* Meredith Whittaker: "KI-Chatbots sind nicht eure Freunde"
  https://www.telepolis.de/article/Meredith-Whittaker-KI-Chatbots-sind-nicht-eure-Freunde-11339577.html
* Studie sieht systematische Verstöße gegen humanitäres Völkerrecht durch KI-Zielsysteme in Gaza
  https://www.weizenbaum-institut.de/news/detail/studie-sieht-systematische-verstoesse-gegen-humanitaeres-voelkerrecht-durch-ki-zielsysteme-in-gaza/
## Niedergang Demokratie
* "KI"-Effizienzversprechen und der Niedergang der Demokratie
  https://tante.cc/2026/06/16/ki-effizienzversprechen-und-der-niedergang-der-demokratie/

## Recap
* [Dataweek](https://www.youtube.com/@dataweekleipzig/streams)
* [Gulaschprogrammiernacht (GPN)](https://media.ccc.de/b/conferences/gpn/gpn24)
* [Netzwerk Recherche – Jahreskonferenz 2026](https://www.youtube.com/playlist?list=PL3k-vp8y4t2vs290Estf4mZAC1fxnK-cz)
* [Digital GreenTech – Umwelttechnik trifft Digitalisierung](https://www.youtube.com/watch?v=kjrjNIZA4j4&t=12s)

## Fristen
* [FIfF-Konferenz 2026 - Call for Participation](https://www.fiff.de/termine/2026/fiff-konferenz-2026-call-for-papers/), bis 15.07. 23:59
* [Civic Coding-Accelerator](https://www.civic-coding.de/angebote/accelerator), Bewerbungen bis 31.7.
* [FediDay](https://ctalx.c-base.org/fediday-2026/)

## Veranstaltungen ([Kalender/Karte](https://events.codeforleipzig.de))
* Donnerstag, 02.07.2026, 10:00, bis Sonntag, 05.07.2026, 18:30, Forum der Zukunft, Museumsinsel 1, 80538 München: **Festival der Zukunft** <a title='Kalendereintrag Festival der Zukunft' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vRmVzdGl2YWwgZGVyIFp1a3VuZnQvL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNjA3MDNUMTAxNDIxWg0KRFRTVEFSVDoyMDI2MDcwMlQxMDAwMDANCkRURU5EOjIwMjYwNzA1VDE4MzAwMA0KU1VNTUFSWTpGZXN0aXZhbCBkZXIgWnVrdW5mdA0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly93d3cuZGV1dHNjaGVzLW11c2V1bS5kZS9mZXN0aXZhbC1kZXItenVrdW5mdA0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpGb3J1bSBkZXIgWnVrdW5mdFwsIE11c2V1bXNpbnNlbCAxXCwgODA1MzggTcO8bmNoZW4NCkdFTzo0OC4xMzE0MDExOTc2NDk4NjU7MTEuNTg1NTgzNTMxNzgxNTM4DQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://www.deutsches-museum.de/festival-der-zukunft
* Donnerstag, 02.07.2026, 19:31-19:31, online: **Bits und Bäume Community Treffen** <a title='Kalendereintrag Bits und Bäume Community Treffen' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vQml0cyB1bmQgQsOkdW1lIENvbW11bml0eSBUcmVmZmVuLy9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjYwNzAzVDEwMTQyMVoNCkRUU1RBUlQ6MjAyNjA3MDJUMTkzMTAwDQpEVEVORDoyMDI2MDcwMlQxOTMxMDANClNVTU1BUlk6Qml0cyB1bmQgQsOkdW1lIENvbW11bml0eSBUcmVmZmVuDQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL2Rpc2NvdXJzZS5iaXRzLXVuZC1iYWV1bWUub3JnL3QvMjAyNi0wNy0wMi1vbmxpbmUtY29tbXVuaXR5LXRyZWZmZW4tMTktMzEtdWhyLzE2NjUNCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046b25saW5lDQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://discourse.bits-und-baeume.org/t/2026-07-02-online-community-treffen-19-31-uhr/1665
* Freitag, 03.07.2026, 13:00-13:45, online: **artresearch.net. Wie vernetzen wir kunsthistorische Bildarchive? (Stefanie Schneider)** <a title='Kalendereintrag artresearch.net. Wie vernetzen wir kunsthistorische Bildarchive? (Stefanie Schneider)' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vYXJ0cmVzZWFyY2gubmV0LiBXaWUgdmVybmV0emVuIHdpciBrdW5zdGhpc3RvcmlzY2hlIEJpbGRhcmNoaXZlPyAoU3RlZmFuaWUgU2NobmVpZGVyKS8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI2MDcwM1QxMDE0MjFaDQpEVFNUQVJUOjIwMjYwNzAzVDEzMDAwMA0KRFRFTkQ6MjAyNjA3MDNUMTM0NTAwDQpTVU1NQVJZOmFydHJlc2VhcmNoLm5ldC4gV2llIHZlcm5ldHplbiB3aXIga3Vuc3RoaXN0b3Jpc2NoZSBCaWxkYXJjaGl2ZT8gKFN0ZWZhbmllIFNjaG5laWRlcikNCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vZGlnaXRhbGUta3Vuc3RnZXNjaGljaHRlLmRlL2FrdHVlbGxlcy9sdW5jaC1hbmQtbGVhcm4tenVyLWRpZ2l0YWxlbi1rdW5zdGdlc2NoaWNodGUvDQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOm9ubGluZQ0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://digitale-kunstgeschichte.de/aktuelles/lunch-and-learn-zur-digitalen-kunstgeschichte/
* Freitag, 03.07.2026, 18:00-22:00, temporärhaus, Augsburger Straße 23–25, 89231 Neu-Ulm: **10 Jahre temporärhaus – kleine Feier!** <a title='Kalendereintrag 10 Jahre temporärhaus – kleine Feier!' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vMTAgSmFocmUgdGVtcG9yw6RyaGF1cyDigJMga2xlaW5lIEZlaWVyIS8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI2MDcwM1QxMDE0MjFaDQpEVFNUQVJUOjIwMjYwNzAzVDE4MDAwMA0KRFRFTkQ6MjAyNjA3MDNUMjIwMDAwDQpTVU1NQVJZOjEwIEphaHJlIHRlbXBvcsOkcmhhdXMg4oCTIGtsZWluZSBGZWllciENCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vdGVtcG9yYWVyaGF1cy5kZS96ZWhuLWphaHJlLXRlbXBvcmFlcmhhdXMtZnVlbmZ6ZWhuLWphaHJlLWRhdGFsb3ZlLXdpci1mZWllcm4vDQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOnRlbXBvcsOkcmhhdXNcLCBBdWdzYnVyZ2VyIFN0cmHDn2UgMjPigJMyNVwsIDg5MjMxIE5ldS1VbG0NCkdFTzo1Mi40OTY4MjMxNTsxMy40NTE1NTU1NjQ5Mzg4MTUNCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://temporaerhaus.de/zehn-jahre-temporaerhaus-fuenfzehn-jahre-datalove-wir-feiern/
* Freitag, 03.07.2026, 18:00, bis Sonntag, 05.07.2026, 20:00, Aaccelerator, Blezingerstraße 15, 73430 Aalen: **FAT26 - Learning the Alphabet with the Hackwerk** <a title='Kalendereintrag FAT26 - Learning the Alphabet with the Hackwerk' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vRkFUMjYgLSBMZWFybmluZyB0aGUgQWxwaGFiZXQgd2l0aCB0aGUgSGFja3dlcmsvL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNjA3MDNUMTAxNDIxWg0KRFRTVEFSVDoyMDI2MDcwM1QxODAwMDANCkRURU5EOjIwMjYwNzA1VDIwMDAwMA0KU1VNTUFSWTpGQVQyNiAtIExlYXJuaW5nIHRoZSBBbHBoYWJldCB3aXRoIHRoZSBIYWNrd2Vyaw0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly9oYWNrd2Vyay5mdW4vc3RhcnQNCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046QWFjY2VsZXJhdG9yXCwgQmxlemluZ2Vyc3RyYcOfZSAxNVwsIDczNDMwIEFhbGVuDQpHRU86NDguODU0NDMyOTsxMC4wOTA2MzQ3DQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://hackwerk.fun/start
* Samstag, 04.07.2026, 10:30-20:00, Universität Tübingen - Gebäude auf dem Sand, Sand 14, 72076 Tübingen: **Tübix - Tübinger Linuxtag** <a title='Kalendereintrag Tübix - Tübinger Linuxtag' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vVMO8Yml4IC0gVMO8YmluZ2VyIExpbnV4dGFnLy9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjYwNzAzVDEwMTQyMVoNCkRUU1RBUlQ6MjAyNjA3MDRUMTAzMDAwDQpEVEVORDoyMDI2MDcwNFQyMDAwMDANClNVTU1BUlk6VMO8Yml4IC0gVMO8YmluZ2VyIExpbnV4dGFnDQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL3d3dy50dWViaXgub3JnLzIwMjYvcHJvZ3JhbW0vDQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOlVuaXZlcnNpdMOkdCBUw7xiaW5nZW4gLSBHZWLDpHVkZSBhdWYgZGVtIFNhbmRcLCBTYW5kIDE0XCwgNzIwNzYgVMO8YmluZ2VuDQpHRU86NDguNTM0NDI7OS4wNzExMg0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://www.tuebix.org/2026/programm/
* Sonntag, 05.07.2026, online: **Digital Independence Day** <a title='Kalendereintrag Digital Independence Day' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vRGlnaXRhbCBJbmRlcGVuZGVuY2UgRGF5Ly9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjYwNzAzVDEwMTQyMVoNCkRUU1RBUlQ6MjAyNjA3MDVUMDAwMDAwDQpEVEVORDoyMDI2MDcwNVQyMzU5NTkNClNVTU1BUlk6RGlnaXRhbCBJbmRlcGVuZGVuY2UgRGF5DQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL2RpLmRheQ0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpvbmxpbmUNCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://di.day
* Montag, 06.07.2026, 13:00-14:00, online: **Von und mit Daten überzeugen: Datenstrategie in eurer Organisation umsetzen** <a title='Kalendereintrag Von und mit Daten überzeugen: Datenstrategie in eurer Organisation umsetzen' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vVm9uIHVuZCBtaXQgRGF0ZW4gw7xiZXJ6ZXVnZW46IERhdGVuc3RyYXRlZ2llIGluIGV1cmVyIE9yZ2FuaXNhdGlvbiB1bXNldHplbi8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI2MDcwM1QxMDE0MjFaDQpEVFNUQVJUOjIwMjYwNzA2VDEzMDAwMA0KRFRFTkQ6MjAyNjA3MDZUMTQwMDAwDQpTVU1NQVJZOlZvbiB1bmQgbWl0IERhdGVuIMO8YmVyemV1Z2VuOiBEYXRlbnN0cmF0ZWdpZSBpbiBldXJlciBPcmdhbmlzYXRpb24gdW1zZXR6ZW4NCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vY29ycmVsYWlkLm9yZy92ZXJhbnN0YWx0dW5nZW4vY2MyNi1kYXRlbnN0cmF0ZWdpZQ0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpvbmxpbmUNCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://correlaid.org/veranstaltungen/cc26-datenstrategie
* Montag, 06.07.2026, 14:00-17:00, Raum Oxford (04G01), Staatsbibliothek zu Berlin, Unter den Linden 8, 10117  Berlin und auch online: **Datencafé: MultiSlavDict - Historische slawische Wörterbücher durchsuchen und auswerten** <a title='Kalendereintrag Datencafé: MultiSlavDict - Historische slawische Wörterbücher durchsuchen und auswerten' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vRGF0ZW5jYWbDqTogTXVsdGlTbGF2RGljdCAtIEhpc3RvcmlzY2hlIHNsYXdpc2NoZSBXw7ZydGVyYsO8Y2hlciBkdXJjaHN1Y2hlbiB1bmQgYXVzd2VydGVuLy9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjYwNzAzVDEwMTQyMVoNCkRUU1RBUlQ6MjAyNjA3MDZUMTQwMDAwDQpEVEVORDoyMDI2MDcwNlQxNzAwMDANClNVTU1BUlk6RGF0ZW5jYWbDqTogTXVsdGlTbGF2RGljdCAtIEhpc3RvcmlzY2hlIHNsYXdpc2NoZSBXw7ZydGVyYsO8Y2hlciBkdXJjaHN1Y2hlbiB1bmQgYXVzd2VydGVuDQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL2xhYi5zYmIuYmVybGluL2RhdGVuY2FmZS8NCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046UmF1bSBPeGZvcmQgKDA0RzAxKVwsIFN0YWF0c2JpYmxpb3RoZWsgenUgQmVybGluXCwgVW50ZXIgZGVuIExpbmRlbiA4XCwgMTAxMTcgIEJlcmxpbiB1bmQgYXVjaCBvbmxpbmUNCkdFTzo1Mi41MTc1Mzg4OTIwMDA3NzsxMy4zOTE2MjA0NzYzOTU2NzMNCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://lab.sbb.berlin/datencafe/
* Dienstag, 07.07.2026, 14:00-15:00, online: **Diskurs am Dienstag: Radverkehrsdaten und -planung in Barcelona - Von Zählstellen bis Citizen Science** <a title='Kalendereintrag Diskurs am Dienstag: Radverkehrsdaten und -planung in Barcelona - Von Zählstellen bis Citizen Science' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vRGlza3VycyBhbSBEaWVuc3RhZzogUmFkdmVya2VocnNkYXRlbiB1bmQgLXBsYW51bmcgaW4gQmFyY2Vsb25hIC0gVm9uIFrDpGhsc3RlbGxlbiBiaXMgQ2l0aXplbiBTY2llbmNlLy9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjYwNzAzVDEwMTQyMVoNCkRUU1RBUlQ6MjAyNjA3MDdUMTQwMDAwDQpEVEVORDoyMDI2MDcwN1QxNTAwMDANClNVTU1BUlk6RGlza3VycyBhbSBEaWVuc3RhZzogUmFkdmVya2VocnNkYXRlbiB1bmQgLXBsYW51bmcgaW4gQmFyY2Vsb25hIC0gVm9uIFrDpGhsc3RlbGxlbiBiaXMgQ2l0aXplbiBTY2llbmNlDQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL2RpZnUuZGUvdmVyYW5zdGFsdHVuZ2VuLzIwMjYtMDctMDcvZGlza3Vycy1hbS1kaWVuc3RhZy1yYWR2ZXJrZWhyc2RhdGVuLXVuZC1wbGFudW5nLWluLWJhcmNlbG9uYQ0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpvbmxpbmUNCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://difu.de/veranstaltungen/2026-07-07/diskurs-am-dienstag-radverkehrsdaten-und-planung-in-barcelona
* Dienstag, 07.07.2026, 20:00-22:00, c-base, Rungestraße 20, 10179 Berlin und auch online: **158. Netzpolitischer Abend** <a title='Kalendereintrag 158. Netzpolitischer Abend' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vMTU4LiBOZXR6cG9saXRpc2NoZXIgQWJlbmQvL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNjA3MDNUMTAxNDIxWg0KRFRTVEFSVDoyMDI2MDcwN1QyMDAwMDANCkRURU5EOjIwMjYwNzA3VDIyMDAwMA0KU1VNTUFSWToxNTguIE5ldHpwb2xpdGlzY2hlciBBYmVuZA0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly9kaWdpdGFsZWdlc2VsbHNjaGFmdC5kZS8yMDI2LzA2LzE1OC1uZXR6cG9saXRpc2NoZXItYWJlbmQvDQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOmMtYmFzZVwsIFJ1bmdlc3RyYcOfZSAyMFwsIDEwMTc5IEJlcmxpbiB1bmQgYXVjaCBvbmxpbmUNCkdFTzo1Mi41MTI5NzM1OzEzLjQyMDEzMTMNCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://digitalegesellschaft.de/2026/06/158-netzpolitischer-abend/
* Mittwoch, 08.07.2026, 10:00-11:30, online: **22. Open Data Netzwerktreffen** <a title='Kalendereintrag 22. Open Data Netzwerktreffen' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vMjIuIE9wZW4gRGF0YSBOZXR6d2Vya3RyZWZmZW4vL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNjA3MDNUMTAxNDIxWg0KRFRTVEFSVDoyMDI2MDcwOFQxMDAwMDANCkRURU5EOjIwMjYwNzA4VDExMzAwMA0KU1VNTUFSWToyMi4gT3BlbiBEYXRhIE5ldHp3ZXJrdHJlZmZlbg0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly93d3cuYmVydGVsc21hbm4tc3RpZnR1bmcuZGUvZGUvdW5zZXJlLXByb2pla3RlL2RhdGVuLWZ1ZXItZGllLWdlc2VsbHNjaGFmdC9wcm9qZWt0bmFjaHJpY2h0ZW4vZGFzLWtvbW11bmFsZS1vcGVuLWRhdGEtbmV0endlcmt0cmVmZmVuDQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOm9ubGluZQ0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://www.bertelsmann-stiftung.de/de/unsere-projekte/daten-fuer-die-gesellschaft/projektnachrichten/das-kommunale-open-data-netzwerktreffen
* Donnerstag, 09.07.2026, 10:00-11:00, online: **CC-Lizenzen nutzen und verstehen** <a title='Kalendereintrag CC-Lizenzen nutzen und verstehen' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vQ0MtTGl6ZW56ZW4gbnV0emVuIHVuZCB2ZXJzdGVoZW4vL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNjA3MDNUMTAxNDIxWg0KRFRTVEFSVDoyMDI2MDcwOVQxMDAwMDANCkRURU5EOjIwMjYwNzA5VDExMDAwMA0KU1VNTUFSWTpDQy1MaXplbnplbiBudXR6ZW4gdW5kIHZlcnN0ZWhlbg0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly9vcGVuLWFjY2Vzcy5uZXR3b3JrL2ZvcnRiaWxkZW4vb3Blbi1hY2Nlc3MtdGFsay9vYXRhbGstYW0tMDktanVsaS0yMDI2DQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOm9ubGluZQ0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://open-access.network/fortbilden/open-access-talk/oatalk-am-09-juli-2026
* Donnerstag, 09.07.2026, 18:00, bis Sonntag, 12.07.2026, 16:30, Campelse e.V., Alte Försterei Borgsdorf 1, 14828 Görzke: **Tech Utopia (FLINTA* only)** <a title='Kalendereintrag Tech Utopia (FLINTA* only)' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vVGVjaCBVdG9waWEgKEZMSU5UQSogb25seSkvL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNjA3MDNUMTAxNDIxWg0KRFRTVEFSVDoyMDI2MDcwOVQxODAwMDANCkRURU5EOjIwMjYwNzEyVDE2MzAwMA0KU1VNTUFSWTpUZWNoIFV0b3BpYSAoRkxJTlRBKiBvbmx5KQ0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly9sb2NhbC1pdC5vcmcvYmFyY2FtcDIwMjYvI3RlY2h1dG9waWENCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046Q2FtcGVsc2UgZS5WLlwsIEFsdGUgRsO2cnN0ZXJlaSBCb3Jnc2RvcmYgMVwsIDE0ODI4IEfDtnJ6a2UNCkdFTzo1Mi4xNDA5NDYzOzEyLjM0NTg4MDUNCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://local-it.org/barcamp2026/#techutopia
* Donnerstag, 09.07.2026, 18:00, bis Sonntag, 12.07.2026, 13:30, Zeltplatz Messerschmidmühle, Messerschmidmühle St 2127, 94157 Maresberg: **VVoid Camp 2026** <a title='Kalendereintrag VVoid Camp 2026' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vVlZvaWQgQ2FtcCAyMDI2Ly9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjYwNzAzVDEwMTQyMVoNCkRUU1RBUlQ6MjAyNjA3MDlUMTgwMDAwDQpEVEVORDoyMDI2MDcxMlQxMzMwMDANClNVTU1BUlk6VlZvaWQgQ2FtcCAyMDI2DQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL3d3dy52dm9pZC5jYW1wDQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOlplbHRwbGF0eiBNZXNzZXJzY2htaWRtw7xobGVcLCBNZXNzZXJzY2htaWRtw7xobGUgU3QgMjEyN1wsIDk0MTU3IE1hcmVzYmVyZw0KR0VPOjQ4Ljc3MTYyODg1NjUyMjcxOzEzLjQ1NzQ2ODU2MTUxNzI4OA0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://www.vvoid.camp
* Mittwoch, 15.07.2026, 14:00, bis Mittwoch, 22.07.2026, 01:00, Hylkedam, Hylkedamvej 54, 5591 Gelsted (Dänemark): **Bornhack** <a title='Kalendereintrag Bornhack' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vQm9ybmhhY2svL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNjA3MDNUMTAxNDIxWg0KRFRTVEFSVDoyMDI2MDcxNVQxNDAwMDANCkRURU5EOjIwMjYwNzIyVDAxMDAwMA0KU1VNTUFSWTpCb3JuaGFjaw0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly9ib3JuaGFjay5kay9ib3JuaGFjay0yMDI2Lw0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpIeWxrZWRhbVwsIEh5bGtlZGFtdmVqIDU0XCwgNTU5MSBHZWxzdGVkIChEw6RuZW1hcmspDQpHRU86NTUuMzg1NjAxOzkuOTM5MDc0DQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://bornhack.dk/bornhack-2026/
* Donnerstag, 16.07.2026, 11:00-12:00, online: **openCode Connect Juli 2026: IKT-Architekturrichtlinie Berlin** <a title='Kalendereintrag openCode Connect Juli 2026: IKT-Architekturrichtlinie Berlin' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vb3BlbkNvZGUgQ29ubmVjdCBKdWxpIDIwMjY6IElLVC1BcmNoaXRla3R1cnJpY2h0bGluaWUgQmVybGluLy9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjYwNzAzVDEwMTQyMVoNCkRUU1RBUlQ6MjAyNjA3MTZUMTEwMDAwDQpEVEVORDoyMDI2MDcxNlQxMjAwMDANClNVTU1BUlk6b3BlbkNvZGUgQ29ubmVjdCBKdWxpIDIwMjY6IElLVC1BcmNoaXRla3R1cnJpY2h0bGluaWUgQmVybGluDQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL29wZW5jb2RlLmRlL2RlL2FrdHVlbGxlcy9ldmVudHMvb3BlbmNvZGUtY29ubmVjdC1qdWxpLTIwMjYtNTk1Nw0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpvbmxpbmUNCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://opencode.de/de/aktuelles/events/opencode-connect-juli-2026-5957
* Donnerstag, 16.07.2026, 19:00-21:00, online: **Jugend editiert (online)** <a title='Kalendereintrag Jugend editiert (online)' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vSnVnZW5kIGVkaXRpZXJ0IChvbmxpbmUpLy9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjYwNzAzVDEwMTQyMVoNCkRUU1RBUlQ6MjAyNjA3MTZUMTkwMDAwDQpEVEVORDoyMDI2MDcxNlQyMTAwMDANClNVTU1BUlk6SnVnZW5kIGVkaXRpZXJ0IChvbmxpbmUpDQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL3d3dy53aWtpbWVkaWEuZGUvdmVyYW5zdGFsdHVuZ2VuL2p1Z2VuZC1lZGl0aWVydC1vbmxpbmUvDQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOm9ubGluZQ0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://www.wikimedia.de/veranstaltungen/jugend-editiert-online/
* Freitag, 17.07.2026, 11:00, bis Samstag, 18.07.2026, 23:00, Stadtteilzentrum Nordstadt -Bürgerschule-, Klaus-Müller-Kilian-Weg 2, 30167 Hannover und auch online: **Hackover 2026 - Die große Jubiläumsgala** <a title='Kalendereintrag Hackover 2026 - Die große Jubiläumsgala' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vSGFja292ZXIgMjAyNiAtIERpZSBncm/Dn2UgSnViaWzDpHVtc2dhbGEvL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNjA3MDNUMTAxNDIxWg0KRFRTVEFSVDoyMDI2MDcxN1QxMTAwMDANCkRURU5EOjIwMjYwNzE4VDIzMDAwMA0KU1VNTUFSWTpIYWNrb3ZlciAyMDI2IC0gRGllIGdyb8OfZSBKdWJpbMOkdW1zZ2FsYQ0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly9oYWNrb3Zlci5kZS9wb3N0cy8yMDI2LzAxLzA4LzEwMC1qYWhyZS1oYWNrb3Zlci8NCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046U3RhZHR0ZWlsemVudHJ1bSBOb3Jkc3RhZHQgLULDvHJnZXJzY2h1bGUtXCwgS2xhdXMtTcO8bGxlci1LaWxpYW4tV2VnIDJcLCAzMDE2NyBIYW5ub3ZlciB1bmQgYXVjaCBvbmxpbmUNCkdFTzo1Mi4zODgxMTY5OzkuNzE3OTM0Nw0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://hackover.de/posts/2026/01/08/100-jahre-hackover/
* Dienstag, 21.07.2026, 09:00, bis Samstag, 25.07.2026, 18:00, Pfadfinderheim Welfenhof, III. Koppelweg 6, 38518 Gifhorn: **Hacken Open Air 2026** <a title='Kalendereintrag Hacken Open Air 2026' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vSGFja2VuIE9wZW4gQWlyIDIwMjYvL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNjA3MDNUMTAxNDIxWg0KRFRTVEFSVDoyMDI2MDcyMVQwOTAwMDANCkRURU5EOjIwMjYwNzI1VDE4MDAwMA0KU1VNTUFSWTpIYWNrZW4gT3BlbiBBaXIgMjAyNg0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly9oYWNrZW5vcGVuYWlyLmRlDQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOlBmYWRmaW5kZXJoZWltIFdlbGZlbmhvZlwsIElJSS4gS29wcGVsd2VnIDZcLCAzODUxOCBHaWZob3JuDQpHRU86NTIuNDYyODk5MTU7MTAuNjA0NTg0NDE2Mjg2NTg4DQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://hackenopenair.de
* Samstag, 25.07.2026, 12:45, bis Sonntag, 26.07.2026, 17:15, IPAI Foundation gGmbH, Im Zukunftspark 11/13, 74076 Heilbronn: **KI Festival 2026** <a title='Kalendereintrag KI Festival 2026' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vS0kgRmVzdGl2YWwgMjAyNi8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI2MDcwM1QxMDE0MjFaDQpEVFNUQVJUOjIwMjYwNzI1VDEyNDUwMA0KRFRFTkQ6MjAyNjA3MjZUMTcxNTAwDQpTVU1NQVJZOktJIEZlc3RpdmFsIDIwMjYNCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vaXBhaS1mb3VuZGF0aW9uLmFpL2tpLWZlc3RpdmFsLw0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpJUEFJIEZvdW5kYXRpb24gZ0dtYkhcLCBJbSBadWt1bmZ0c3BhcmsgMTEvMTNcLCA3NDA3NiBIZWlsYnJvbm4NCkdFTzo0OS4xNTU3NzgyOzkuMjA3NjY4DQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://ipai-foundation.ai/ki-festival/
* Dienstag, 28.07.2026, 19:30-21:00, online: **OSM-Verkehrswende #77** <a title='Kalendereintrag OSM-Verkehrswende #77' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vT1NNLVZlcmtlaHJzd2VuZGUgIzc3Ly9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjYwNzAzVDEwMTQyMVoNCkRUU1RBUlQ6MjAyNjA3MjhUMTkzMDAwDQpEVEVORDoyMDI2MDcyOFQyMTAwMDANClNVTU1BUlk6T1NNLVZlcmtlaHJzd2VuZGUgIzc3DQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL3dpa2kub3BlbnN0cmVldG1hcC5vcmcvd2lraS9WZXJrZWhyc3dlbmRlLU1lZXR1cCNNZWV0dXBzDQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOm9ubGluZQ0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://wiki.openstreetmap.org/wiki/Verkehrswende-Meetup#Meetups
* Mittwoch, 29.07.2026, 14:00-15:00, online: **Die Top 5 Open Source Alternativen für den Büroalltag** <a title='Kalendereintrag Die Top 5 Open Source Alternativen für den Büroalltag' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vRGllIFRvcCA1IE9wZW4gU291cmNlIEFsdGVybmF0aXZlbiBmw7xyIGRlbiBCw7xyb2FsbHRhZy8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI2MDcwM1QxMDE0MjFaDQpEVFNUQVJUOjIwMjYwNzI5VDE0MDAwMA0KRFRFTkQ6MjAyNjA3MjlUMTUwMDAwDQpTVU1NQVJZOkRpZSBUb3AgNSBPcGVuIFNvdXJjZSBBbHRlcm5hdGl2ZW4gZsO8ciBkZW4gQsO8cm9hbGx0YWcNCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vZm9yc2NodW5nc2RhdGVuLXRodWVyaW5nZW4uZGUvdmVyYW5zdGFsdHVuZy9jbC1vcGVuLXNvdXJjZS1kZS5odG1sDQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOm9ubGluZQ0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://forschungsdaten-thueringen.de/veranstaltung/cl-open-source-de.html
* Donnerstag, 06.08.2026, 18:00-21:00, WikiBär Wikipedia, Köpenicker Straße 45, 10179 Berlin: **Jugend editiert** <a title='Kalendereintrag Jugend editiert' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vSnVnZW5kIGVkaXRpZXJ0Ly9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjYwNzAzVDEwMTQyMVoNCkRUU1RBUlQ6MjAyNjA4MDZUMTgwMDAwDQpEVEVORDoyMDI2MDgwNlQyMTAwMDANClNVTU1BUlk6SnVnZW5kIGVkaXRpZXJ0DQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL3d3dy53aWtpbWVkaWEuZGUvdmVyYW5zdGFsdHVuZ2VuL2p1Z2VuZC1lZGl0aWVydC8NCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046V2lraULDpHIgV2lraXBlZGlhXCwgS8O2cGVuaWNrZXIgU3RyYcOfZSA0NVwsIDEwMTc5IEJlcmxpbg0KR0VPOjUyLjUwMjY3NzA2MjkzNjA3OzEzLjQzOTI1MDM0ODcyMTU0NA0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://www.wikimedia.de/veranstaltungen/jugend-editiert/
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
