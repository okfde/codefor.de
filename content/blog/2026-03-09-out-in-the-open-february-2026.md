---
title: "Entthronisierungstrauma – Out in the Open Februar 2026"
author: "Jörg Reichert (Code for Leipzig)"
date: '2026-03-09T08:00:00+02:00'
excerpt: Monatlich erscheinender Überblick über Entwicklungen in der Open Data und Civic Tech Szene
topic: community
images:
- imgname: out-in-the-open-2026-02-header.jpg
  attribution: <a href="https://pixabay.com/photos/open-open-sign-restaurant-leipzig-10084366/">Foto</a> von <a href="https://pixabay.com/users/sannsie-40193152/">sannsie</a> auf <a href="https://pixabay.com/">Pixabay</a>
og_image: out-in-the-open-2026-02-header.jpg
type: blog
---

## Open Data
Wer Informatik studiert hat, kennt in der Regel die [Wissenspyramide](https://de.wikipedia.org/wiki/Wissen#Organisationstheoretischer_Ansatz), je nach Darstellung gibt es manchmal unterhalb der Datenschicht noch die "Symbole" und überhalb der Wissenschicht noch die "Weisheit". Zudem gibt es noch die [Semiotik](https://de.wikipedia.org/wiki/Semiotik) (Zeichen- und Bedeutungslehren). Im Kontext von Open Data und den zugehörigen Gesetzen, die Behörden zur Bereitstellung solcher verpflichten wird mit einer gewissen Unschärfe von "Dokumenten", "Daten" und "maschinenlesbaren Daten" gesprochen. Stefan [kritisiert das](https://stefan.bloggt.es/2026/02/was-heisst-eigentlich-maschinenlesbar-und-weiss-das-auch-der-gesetzgeber/) in seinem Blogbeitrag. Nur ab wann sind Daten maschinenlesbar - ist ein eingescanntes Excel maschinenlesbar, bloß weil man OCR und eine KI drüber jagen könnte, die die Inhalte irgendwie wieder strukturiert als Zahlen und Zeichenketten ausgeben kann? Oder sollte man sich doch die Mühe machen, das Original Excel als CSV-Datei bereitzustellen, in der garantiert keine OCR-Erkennungsfehler und keine nicht deterministischen KI-Hallunizationen enthalten sind. Oder noch besser als strukturiertes JSON mit verlinkten Ontologien für die Spaltenköpfe sowie weiterführenden Metdaten, damit wirklich klar wird, mit welcher Systematik und unter welchem Kontext die Daten erfasst / gemessen worden sind. Macht natürlich mehr Arbeit beim Bereitstellen. Man muss nicht so weit wie Stefan gehen, und Daten mit Fakten gleichsetzen, was eine Form von Wahrheit und Objektivität impliziert, die in manchen Fällen gar nicht gewährleistet werden kann, sondern einfach nur [intersubjektive](https://de.wikipedia.org/wiki/Intersubjektivit%C3%A4t) [Vereinbarung und Interpretationen](https://de.linkedin.com/pulse/understanding-truth-objectivity-data-marco-wobben-qf0uc) sind, wie bei denen im letzten Zensus veröffentlichten Bevölkerungszahlen, die garantiert falsch sind, einfach bedingt durch Fluchtbewegungen und Meldedefizite (fehlende Abmeldung bei Umzug ins Ausland), aber immer noch besser als gar keine Daten und genau genug, um grundlegende Trends abzuleiten, auch wenn der Verteilungsschlüssel für die Gelder vom Bund an die Städte an der Einwohnerzahl hängt. Doch zurück zum Daten-Thema selbst, klar kann man über Bilder und Videos Bild- und Objekterkennung jagen, über Audio-Dateien ein Transkriptions-Werkzeug und über Texte Named Entity Recognition (NER) und andere linguistische Werkzeuge, die aus ihnen strukturierte Daten ableiten, aber das entbindet die Daten-bereitstellenden Stellen nicht davon, von vornherein schon auf ihrer Seite, die Daten so strukturiert wie möglich bereitzustellen, vielleicht auch KI assistiert aber am Ende doch nochmal manuell verifiziert und zusätzlich noch die Ausgangsrohquelle, statt sich darauf zu verlassen, dass die Konsumenten der Daten schon irgendwie mit irgendwelchen KI-Tools in ihre gedumpte Datenmüllhalde bringen.

Dr. Jesper Zedlitz [ist beeindruckt](https://norden.social/@MisterOpenData/116052930375604398) vom Detailreichtum [der Karte](https://umweltportal.niedersachsen.de/karte?) des neuen [Umweltportal aus Niedersachsen](https://umweltportal.niedersachsen.de), Tim hat [die Endpunkte](https://norden.social/@datenschatz/116053526145951016) der dafür genutzten API [dokumentiert](https://github.com/tifa365/umweltnavi-api-documentation), damit man leichter an die besagten Daten kommt. 

Tim hat einen [MCP Server](https://github.com/tifa365/berlin-opendata-mcp) geschrieben, mit dem man die über 2500 Datensätze im Berliner Open-Data-Portal über die
6 MCP-Tools Datensatz-Suche, Details, Kategorien, Tags, Analyse und Katalog-Statistiken und entsprechend übergebenen Parametern [auswerten kann](https://norden.social/@datenschatz/116149896596751990) (bzw. für eine Abfrage wie "Welche Kita-Daten gibt es in Berlin?" erkennt das Modell schon selbstständig, dass es das an CKAN-API angebundene Such-Tool mit dem Suchparameter "Kita" aufrufen muss).

Michael Bücker hat aufbauend auf der jahrelangen ehrenamtlichen Arbeit von [bund.dev](https://bund.dev) ein [R-Paket](https://cran.r-project.org/web/packages/bunddev/index.html) veröffentlicht das 33 deutsche Behörden-APIs über eine einheitliche Schnittstelle [zugänglich macht](https://www.linkedin.com/posts/lilith-wittmann_%C3%B6ffentliche-daten-sind-%C3%BCberall-aber-ugcPost-7427668539823738880-0CwX). Eigentlich wäre es ja Aufgabe der Bundesverwaltung solche gut dokumentierten API offiziell bereitzustellen, aber naja.

Nachdem im letzten Monat die Bundesregierung den Anschlag auf die Stromversorgung zum Anlass genommen hat, die Transparenz bei kritischer Infrastruktur einzuschränken, sollen aus dem gleichen Grund auch auf Stadtstaat-Ebene in einer dringlichen Sitzung das Berliner Informationsfreiheitsgesetzes (IFG), die Open Data Verordnung sowie der Datenschutz ["angepasst"](https://pardok.parlament-berlin.de/portala/vorgang/V-445139) werden - also ausgehöhlt und eingeschränkt, um so angeblich die kritische Infrastruktur in Berlin besser zu schützen.

Der neue [EU-Open-Data-Maturity-Report](https://data.europa.eu/de/open-data-maturity/2025#country-profiles/country_DE/maturity-level-segmentation) ist veröffentlich worden, dank [weniger selbstkritischer Bewertung](https://www.linkedin.com/posts/govdata-de_opendata-ogd-itplr-activity-7426352736226578432-3O6B) beim Ausfüllen des Fragebogens als letztes Jahr, erziel Deutschland diesmal deutlich mehr Punkte.

Das [OpenFactBook](https://openfactbook.org/about/) trägt ehrenamtlich die wichtigsten aktuellen Daten über 254 Staaten und Gebiete zusammen, so auch über [Deutschland](https://openfactbook.org/countries/germany/).

Anderthalb Jahren gibt es nun das [Civic Data Lab](https://civic-data.de). Im [Interview](https://www.technologiestiftung-berlin.de/profil/blog/3-x-nachgehakt-angela-berger-vom-civic-data-lab) geht Angela Berger auf die wichtigsten Erkenntnisse ein. So hat sich ergeben, dass die meisten Organisation schon damit ausgelastet sind, die Daten für ihr eigenes Projekt und ihre individuellen Gegebenheiten aufzubereiten, so dass bisher eine weitere Aufbereitung zur Nachnutzung für andere Organisationen hinten runtergefallen ist. Um in Datenprojekten aus einer bundesweiten Perspektive lokale Dinge auswerten und visualieren zu können, braucht es zudem kommunale Partner. Und eben Vernetzung und offene Daten, da man ja nicht mit jeder einzelnen Kommune sprechen kann.

Tim hat [eine API](https://github.com/tifa365/bundestagpetitionen-api) für das [Portal des Petitionsausschusses](https://epetitionen.bundestag.de) definiert, mit der man [abrufen kann](https://norden.social/@datenschatz/116107552025353763), welche Petitionen gerade laufen oder wie viele Mitzeichnungen sie haben. Sie ist nun auch in seiner kuratierte Liste von offenen Datenquellen, APIs, Tools, Anwendungen und Ressourcen zum Deutschen Bundestag, [awesome-bundestag](https://github.com/tifa365/awesome-bundestag), verlinkt.

Für die Bundestag Tagesordnung gibt bzw. gab es mit [bt-to](https://api.hutt.io/bt-to/) eine inoffizielle iCal-, JSON-, XML- und CSV-API. Gab, denn leider hat der Bundestag seinen Endpunkt geändert, und der Projekt-Maintainer aber die Änderungen nicht nachgezogen, auch den [Pull-Request](https://github.com/hutt/bt-to/pull/7), den Tim [gestellt hat](https://norden.social/@datenschatz/116099168340568921), wurde noch nicht eingemergt.

## Statistik und Visualisierung
Der Bierabsatz der deutschen Brauereien und Bierlager ist im Jahr 2025 gegenüber dem Vorjahr [um 6,0 % auf rund 7,8](https://www.destatis.de/DE/Presse/Pressemitteilungen/2026/02/PD26_037_73.html) Milliarden Liter gesunken, der stärkste Absatzrückgang seit Beginn der Aufzeichnung im Jahr 1993.

Ab dem 1. Juli dürfen sich die 630 Bundestagsabgeordneten [über 4,2 Prozent mehr Geld](https://www.t-online.de/nachrichten/deutschland/id_101147976/bundestag-abgeordnete-bekommen-fast-500-euro-mehr-im-monat.html) freuen, also monatlich 497 Euro mehr. Abstimmt musste darüber nicht, da die Bezüge automatisch an den gesamtdeutschen Nominallohnindex gekoppelt sind. So bekommen die Abgeordneten nun monatlich 12.330 Euro brutto. Da die Pensionsansprüche auch an die Diäten gekoppelt sind, erhöhen sich diese auch. Pro Mandatsjahr 2,5 Prozent der jeweiligen Diät, nach einer vollen Legislator also 10%, also etwa 1.233 Euro - zum Vergleich: Normalverdiener müssten rund 30 Jahre lang arbeiten, um eine ebenso hohe gesetzliche Rente zu bekommen. Bei der Schwerstarbeit, regelmäßig gegen zu hohe Sozialstaatsausgaben und gegen Bürgergeldempfänger zu hetzen, absolut verdient.

[Eine Auswertung](https://correctiv.org/aktuelles/2026/02/17/mieten-kaufen-immobilien-preise-wohnen-europa-lokal/) von Mieten und Kaufpreise aus allen knapp 100.000 EU-Städten und Gemeinden von CORRECTIV.Europe zeigt an welchen Orten selbst ein mittleres Gehalt wie das von Pflegekräften nicht reicht, um sich die Miete für bzw. den Kauf von einer kleine Wohnung (45 m²) zu leisten. Vor allem Großstädte sind betroffen. In Deutschland müsste man z.B. in Berlin 50%, in München 47%, in Köln und Stuttgart um die 40% vom Einkommen für die Miete aufwänden. Mit Folgen für Gesellschaft und Wirtschaft, wenn Nachwuchskräfte keine für sie bezahlbaren Wohnungen finden bzw. in ihren Jobs deswegen höhere Löhne fordern müssen.

## Wahlen
Zur Landtagswahl in Baden-Württemberg gibt es wieder den [offiziellen Wahl-o-maten](https://www.wahl-o-mat.de/bw2026/app/main_app.html), Tim hat dessen Inhalt [maschinenlesbar](https://github.com/tifa365/wahlomat-bw-2026) als [CSV extrahiert](https://norden.social/@datenschatz/116042119084950433) und zudem noch eine [Übereinstimmungsmatrix](https://htmlpreview.github.io/?https://github.com/tifa365/wahlomat-bw-2026/blob/main/visualisierungen/uebereinstimmungsmatrix.html) und einen [Parteienvergleich](https://htmlpreview.github.io/?https://github.com/tifa365/wahlomat-bw-2026/blob/main/visualisierungen/parteienvergleich.html) visualisiert. Vom SWR gibt es [eine Übersicht](https://www.swr.de/swraktuell/baden-wuerttemberg/koalition-gruene-cdu-welche-vorhaben-hat-die-landesregierung-umgesetzt-100.html), welche Vorhaben aus dem Koalitionsvertrag von 2021 die letzte grün-schwarze umgesetzt hat, Open Data wird als [nur teilweise umgesetzt](https://www.swr.de/swraktuell/baden-wuerttemberg/koalition-gruene-cdu-welche-vorhaben-hat-die-landesregierung-umgesetzt-100.html?ziel=schnittstellen-fur-offentlich-relevante-daten-seite-20) bewertet. Wie sich Direktkandidierende konkret sich zu zu 15 zentralen politischen Thesen positionieren, macht der [Kandidierendencheck](https://www.abgeordnetenwatch.de/blog/wahlen/die-spitzenkandidierenden-im-check-wer-folgt-der-parteilinie-wer-setzt-eigene-akzente) von AbgeordnetenWatch sichtbar 

[Aus Kapazitätsgründen](https://www.augsburger-allgemeine.de/bayern/kommunalwahl-2026-bayern-warum-es-keinen-wahl-o-mat-gibt-17-02-113391004) gibt es von Bundes für politische Bildung keinen Wahl-o-maten zur Kommunalwahl in Bayern Anfang März, es wird aber auf den [München-O-Mat](https://muenchen-o-mat.de/) des Bund der Deutschen Katholischen Jugend verwiesen.

Von FragDenStaat gibt es ein [Unterstützungsangebot](https://wahlbrief.de), um die Briefwahlunterlagen vom Bürgeramt am Hauptwohnsitz digital anzufordern.

## Digitale Souveränität
### USA
Forschende schätzen, dass seit der erneuten Amtsübernahme Trumps über 3.000 Datensätze aus den amtlichen Statistiken [nicht mehr abrufbar sind](https://www.notus.org/trump-white-house/federal-data-is-disappearing), sei es, weil der öffentliche Zugang zu ihnen gesperrt wurde oder gar Daten zu bestimmten Sachverhalten inzwischen überhaupt [nicht mehr gesammelt werden](https://fediscience.org/@petersuber/116024142638804971).  

Auch die Finanzierung von Projekten, die sich gegen Internetzensur und Internetsperren engagieren (indem sie z.B. Software für anonymes Surfen und Chatten bereitstellen), [wurde von der US-Regierungen gestoppt](https://www.heise.de/news/Bericht-USA-haben-Finanzierung-von-Technik-gegen-Internetblockaden-eingestellt-11182963.html). Die Projekte sind dadurch gezwungen, sich personell und in Aufgabenumfang einzuschränken, sofern sie, wenn sie keine neuen Geldquellen finden, überhaupt weitermachen können.

Wofür stattdessen Geld da ist: [ein staatlich betriebenes VPN-Internetportal](https://www.heise.de/news/Freedom-gov-US-Aussenministerium-plant-VPN-Portal-fuer-Europa-11182385.html), mit denen Europäer weiterhin auf Inhalte zugreifen können, obwohl sie auf Grundlage von europäischen und nationalen Gesetzen in Europa gesperrt sind, weil z.B. Hassrede oder Terrorpropaganda enthalten. Solche EU-Schutzmaßnahmen betrachtet die US-Regierung dagegen als Versuch konservative Meinungen zu zensieren.

### BigTech
[Mit der Inbetriebnahme](https://www.heise.de/news/EU-hat-Govsatcom-gestartet-Sichere-Satellitenkommunikation-fuer-Regierungen-11162883.html) des europäischen Satellitenkommunikationssystems Govsatcom sollen nun zu mindestens Regierungen und Militär in Europa über zunächst 8 eigene Satelliten verschlüsselt kommunizieren können, ohne dafür auf SpaceX angewiesen zu sein.

Denn, [wie Francesca Bria betont](https://www.rosalux.de/news/id/54438), ist Infrastruktur nie neutral, vor allem, wenn sich ihre Ausgestaltung nicht mehr demokratisch legitimerten Aushandlungsprozessen unterwerfen muss, sondern sich Staaten und Gesellschaft deren Regeln durch die US-Firmen diktieren lassen und damit von den Ideologen hinter ihnen, die so den weltweiten Umbau im Sinne der ["Dunklen Aufklärung"](https://de.wikipedia.org/wiki/Neoreaktion%C3%A4re_Bewegung) ungestört weitertreiben können.

Dem mit dem gestiegenen Bewusstsein für die Gefahren digitaler Abhängigkeit entstandenen Vertrauensverlust versuchen die großen Cloud-Anbieter mit einigen (Pseudo-)Maßnahmen entgegenzuwirken, wie z.B. dem Versprechen von "Datengrenzen", Bau von Rechenzentren in Europa, Gründung von Tochterfirmen vor Ort mit lokalem Personal usw. Bei näherem Hinsehen entpuppt sich allerdings vieles davon als "Souveränitäts-Washing", wie Lutz Niemeyer vom Zentrum für Digitale Souveränität der Öffentlichen Verwaltung (ZendiS) [in seinem Gastbeitrag warnt](https://www.itmagazine.ch/artikel/86412/Souveraenitaets-Washing_bei_Cloud-Diensten.html). Denn die Firmen gehören weiterhin zur US-Mutter und damit dem US-Gesetz, die Software ist so geschrieben, dass eine Migration zu einem Anbieter immer noch erschwert wird, so dass man immer noch bei Betrieb und Weiterentwicklung auf den ursprünglichen Anbieter angewiesen ist, auch weil der Quellcode immer noch unter Verschluss gehalten wird.

Auf der Webseite der Initiative [Keep Android Open](https://keepandroidopen.org/de/) ist [ein offener Brief](https://keepandroidopen.org/open-letter/) veröffentlicht worden, der von Google fordert, die Registrierungspflicht für Android-App-Entwickler nicht einzuführen, in den Dialog mit der Zivilgesellschaft zu treten und sich zur Plattformneutralität zu bekennen. Wenn es nach Google geht, sollen ab September 2026 alle Apps blockiert werden, deren Entwickler sich nicht bei ihnen offiziell registriert haben, vorgeblich aus Sicherheitsgründen. Aus Sicht der Petenten reichen aber die bestehenden Sicherheitsvorkehrungen völlig aus. Für die Registrierung müssen Entwickler neben einer einmaligen Gebühr von 25 Dollar auch mit ihrem Personalausweis ihre Identität nachweisen. Bei den derzeitigen weltweiten autoritären Entwicklungen eine Gefahr für die Betroffenen, die bisher Apps über den F-Droid-Store oder direkt als apk-Download anbieten konnten, ohne sich offenbaren zu müssen. Alle Käufer, die sich bewusst für ein Android-Handy entschieden haben, weil sie dort beliebige Apps installieren können, sind vor den Kopf gestoßen, wenn nun nachträglich die Bedingung geändert werden und Google als alleiniger Gatekeeper entscheiden möchte, welche Apps installiert werden dürfen und welche nicht.  

### Verwaltung
[Eine neu gegründete Kommission](https://www.heise.de/news/Operation-Souveraenitaet-Bundestag-plant-Befreiungsschlag-von-Microsoft-Co-11162849.html) soll das bestehende digitale Ökosystem des Bundestags hinsichtlich Sicherheit, digitaler Abhängigkeit und Nutzerfreundlich prüfen. Die gesammelten Erkenntnisse sollen ab Mai in eine umfassende Digitalstrategie münden. Für die Opposition fehlt aber immer noch ein wirkliches Bekenntnis zu Open-Source-Software, noch immer werden nur Windows-Rechner an MdBs ausgegeben, eine Strategie zur konsequenten Umstellung, die vielleicht auch den einen oder anderen zwänge, sich umgewöhnen zu müssen, würde nicht verfolgt.

Macht der Gewohnheit und Rahmenvertrag sei dank, sind derweil die Ausgaben der Bundesverwaltung für Microsoft-Lizenzen von 274,1 Millionen Euro (2023), 347,7 Millionen Euro (2024) auf nun 481,4 Millionen Euro im Jahr 2025 [weiter gestiegen](https://www.stern.de/news/bund-hat-2025-ueber-481-millionen-euro-fuer-microsoft-lizenzen-ausgegeben-37118816.html). Und da sind nicht mal die Ausgaben der Länder und Kommunen enthalten. 

[Wie nun auch rauskam](https://www.golem.de/news/digitale-souveraenitaet-in-bayern-noch-mehr-geld-fuer-microsoft-2602-205215.html), schließt der Freistaat Bayern seit einigen Jahren mit Microsoft Unified-Support-Verträge ab, mit ihnen wurde auch der Abrechnungsmodus geändert, wodurch sich beispielweise die Ausgaben in der bayerischen Staatskanzlei um 900% erhöht haben (von 27 Tausend auf fast 250 Tausend Euro). Zudem werden diese Verträge meist ohne eine öffentliche Ausschreibung vergeben, da durch den geschlossenen Quellcode eh kein anderer Dienstleister die Anpassungsaufgaben übernehmen könnte. Die Gesamtausgaben für die Microsoft-Unified-Support-Verträge werden von der bayrischen Regierung mit Verweis auf angebliche Geschäftsgeheimnisse unter Verschluss gehalten.

Besser läuft es in Schleswig-Holstein, die tatsächlich auch bei der Umstellung auf Open-Source [ins Machen kommen](https://norden.social/@dirkschroedter/116098388351737173), auch die Thüringer Landesverwaltung [möchte mit seiner Initiative diesem Beispiel folgen](https://www.ardmediathek.de/video/mdr-thueringen-journal/open-source-alternativen-zu-microsoft-und-co/mdr/Y3JpZDovL21kci5kZS9iZWl0cmFnL2Ntcy82MjlmY2E3YS04MTJiLTQ4NTItOThiOS0wN2MzODc3NzA5YmQ).

### Social Media
[In einem Schreiben](https://digitalcourage.de/pressemitteilungen/2026/souveraenitaet-bei-sozialen-medien) an die Hochschulen haben sich 20 Organisationen und Firmen dafür ausgesprochen, dass Mastodon von allen öffentlichen Einrichtungen eingesetzt wird, die soziale Medien nutzen. Rund 60 deutschen Hochschulen nutzen schon Mastodon und PeerTube für eine von Werbung und undurchsichtige Algorithmen freie Wissenschaftskommunikation.

Mit dem Inkrafttreten der Verordnung über die Transparenz und das Targeting politischer Werbung (TTPA) im Oktober 2025 sollen in der EU demokratische Wahlen vor verdeckten Einflussnahmen geschützt werden, auch in Reaktion auf den Cambridge-Analytica-Skandal. Die Verordnung verbietet dabei nicht politische Werbung, fordert nur Transparenz über die Finanzierung und das Targeting. Facebook hat daraufhin als Trotzreaktion rigoros jegliche politische Werbung verboten. [Die letzten Monate](https://netzpolitik.org/2026/werbung-auf-instagram-das-wort-demokratie-kann-problematisch-sein/) haben gezeigt, dass das Verbot auch NGOs stark trifft, da Facebook allein willkürlich entscheiden kann, was politische Werbung ist und was nicht. 

Der EU Digital Fairness Act soll die [Dark Patterns](https://de.wikipedia.org/wiki/Dark_Pattern) der großen Plattformen regulieren, [dagegen lobbyieren diese allerdings](https://netzpolitik.org/2026/big-tech-lobbying-erst-machen-dann-lieber-nicht-reguliert-werden/), auch [mit Deck-Organisationen](https://www.lobbycontrol.de/macht-der-digitalkonzerne/gefesselt-vom-feed-wie-google-meta-co-regeln-fuer-social-media-apps-verhindern-wollen-124022/) wie EU-Tech-Lopp. Dabei hat der Medienwissenschaftler Martin Andree von der Universität Köln [in seiner Studie](https://www.frankfurter-hefte.de/artikel/die-monopolisierung-der-aufmerksamkeit-4764/) belegen können, dass die Social-Media-Apps von BigTech fast die gesamte Aufmerksamkeit von den Nutzenden digitaler Endgeräte bekommen. 

[Für Linus Neumann](https://23.social/@linuzifer/116053242161241132) vom CCC lenkt die Debatte über ein Social-Media-Verbot für Kinder und Jugendliche vom eigentlichen Problem ab - dass man Firmen Geschäftsmodelle erlaubt, die auf Manipulation und Suchtverhalten ihrer Nutzenden basieren, ähnlich wie beim Glückspiel, ganz unabhängig vom Alter. [Die Umsetzung](https://www.heise.de/news/Falsch-abgebogen-Australiens-Social-Media-Verbot-kein-Vorbild-11174227.html) der Altersverifizierung in Australien zeigt, dass diese Prüfungen meist eh umgangen werden, dafür die Plattformen nun auch noch an die Daten aus Gesichtsscans und Ausweisinformationen der Geprüften kommen, die potenziell auch noch unkontrolliert abfließen könnten. 

Auch die Instant-Messaging/Voice-Over-IP-Plattform Discord führt ab März 2026 eine Altersverifikation ein, mit [Fluxer](https://fluxer.app) gibt es aber [eine Alternative](https://www.tech2geek.net/fluxer-the-open-source-alternative-to-discord/) aus Schweden, die [Open Source ist](https://github.com/fluxerapp/fluxer), aktuell noch mit einem zentralen Server, soll aber in Zukunft auch [förderiert funktionieren](https://feddit.org/post/25853089).

Am Ende hilft am besten doch nur Hilfe zur Selbsthilfe: Die Genossenschaft [101coop](https://101.coop) soll NGOs mit digitaler Infrastruktur & IT-Dienstleistungen versorgen.

## Open Source Hard- und Software
Andrew Nesbitt [zeichnet auf seinem Blog](https://nesbitt.io/2026/02/21/whale-fall.html) an einigen Beispielen nach, was passiert, wenn große Open-Source-Projekt sterben, sei es weil die Hauptentwickler wegen z.B. Burnout aufgeben, die Firma hinter dem Projekt die Lizenz ändert, oder interne Streitereien: von Leichenfledderei bis fortlaufende Neubesiedlung in Form von Forks und Forks von Forks, die aber durchaus das Open-Source-Ökosystem bereichern können, wenn irgendwann der dadurch entstehende Wildwuchs auch wieder konsoldiert wird. Am Ende braucht es Menschen, die kontuierlich an solchen Projekten arbeiten können. Boris Hinzer, Vizepräsident der TYPO3 Association, hat deswegen [eine Petition](https://www.openpetition.de/petition/online/anerkennung-von-open-source-arbeit-als-ehrenamt-in-deutschland) gestartet, [die fordert](https://wechange.coop/2026/02/18/petition-open-source/), dass Open-Source-Arbeit als Ehrenamt in Deutschland anerkannt wird. Diese Einstuftung würde Aufwandsentschädigung, Spenden und Zuwendungen erleichtern, die Haftung klarer geregelt und das persönliche Haftungsrisiko bei durch Fehlern in der Software entstandene Schäden deutlich begrenzt.

Im überarbeiteten Entwurf des Ökodesign-Gesetzes (ÖkodesignG) [wurden viele Kritikpunkte aufgegriffen](https://okfn.de/blog/2026/02/kabinettsbeschluss-zum-%C3%B6kodesigng-wichtige-fortschritte-f%C3%BCr-reparaturinitiativen/). Maßnahmen wie die Einführung der Eigenerklärung für Reparaturinitiativen, niedrigschwelligen Nachweis eines geeigneten Versicherungsschutzes und eine Übersicht der zu erbringende Nachweise machen den Zugang zu Ersatzteilen und Reparaturinformationen für nicht-gewerbliche Reparateure verbindlicher und praxistauglicher.

## Digitalisierung
In seiner [zweiten Stellungnahme](https://okfn.de/files/publikationen/2026-02-13_F5_OmnibusKommentierung.pdf) zum Digitalen Omnibuspaket der EU-Kommission
fordert das Bündnis F5 den objektiven Personenbezug zu erhalten, rechtliche
Schlupflöcher zu verhindern, die Schutzstandards für pseudonymisierte Daten nicht
administrativ abzusenken, das Forschungsprivileg klar zu begrenzen, Auskunftsrechte vor missbräuchlicher Einschränkung zu schützen, klare Regeln für KI-Datenverarbeitung auszuformulieren, statt nur pauschale Öffnungsklauseln vorzusehen, sensibler Daten auch im KI-Kontext konsequent zu schützen sowie die Nutzung von offenen Standardlizenzen zu stärken, statt mit eigenen Lizenzen die Herausgabe von offenen Daten an besondere Bedingungen und Kosten zu binden und damit das Prinzip Open-by-Default zu unterlaufen.

Im Forschungsprojekt "Erfolgsfaktoren lokaler E-Partizipation" wurden in einer Studie über 10.000 Kommunen befragt, von denen 2390 auch geantwortet haben. [Die Auswertung hat ergeben](https://www.heise.de/news/Digitale-Demokratie-Ostdeutsche-Kleinstaedte-haengen-den-Westen-ab-11173651.html), dass gerade die ostdeutschen Klein- und Mittelstädte deutlich häufiger digitale Beteiligung anbieten. Hauptmotivation dieser Städte war es, "überhaupt die absolute Zahl der Beteiligten zu erhöhen". Während in den Großstädten eher bei großen Transformationsthemen wie Verkehrswende und Klima beteiligt wird und dort auch eigene Personalstellen zur Verfügung stehen, müssen die städtischen Angestellten in den kleineren Kommunen die Beteiligungsprozesse nebenbei stemmen und dort geht es auch eher um Themen wie Beseitigung von Schlaglöchern und die Gestaltung des Dorfplatzes.
  
2009 stoppte das Bundesverfassungsgericht die Verwendung der seit 1999 eingesetzten Wahlcomputer mit der Begründung, dass gemäß Grundgesetz alle wesentlichen Schritte einer Wahl ohne besondere Kenntnisse öffentlich überprüfbar sein müssten. Der Düsseldorfer Stadtrat will nun jedoch wieder anonyme digitale Abstimmungen zulassen. Trotz technologischen Fortschritt besteht aber weiterhin das Problem, dass man der eingesetzen Software vertrauen muss, Wahlstimmen wären nur mit Pseudonymen gekennzeichnet überprüfbar und neuauszählbar, damit riskiere man aber die Deanonymisierung. Die eingesetzte Software OpenSlides diskutiert in ihrem [Konzept für geheime Wahlen](https://github.com/OpenSlides/OpenSlides/wiki/DE%3AKonzept-geheime-Wahlen-mit-OpenSlides) auch die verschiedene Angriffsszenarien.

Mit dem "bereichsspezifische Personenkennzeichen" als Einweg-Kennzeichen versucht man in Österreich den gläsernen Bürger nicht nur rechtlich, sondern auch technisch [zu verhindern](https://netzpolitik.org/2026/interview-zu-personenkennzeichen-den-glaesernen-buerger-nicht-nur-rechtlich-sondern-auch-technisch-verhindern/). Trotzdem könnten Behörden digital untereinander Daten mit Bürger-Bezug austauschen. Damit bräuchte es keine lebenslange Steuer-ID, die Deutschland gerade plant für jeden Bürger ab Geburt einzuführen.

## Karten
Geoinformationssysteme (GIS) sind in den letzten Jahren immer modularer geworden, dank Docker kann man sich die passende lauffähige Infastruktur leicht zusammenkonfigurieren, und mit KI-Chatbots fallen nun auch die Syntaxbarrieren, wie man die richtige Anfrage stellt. Für [Bill Dollins bleibt](https://blog.geomusings.com/2026/01/28/post-gis-revisited/) nun die einzige zu überwindende Barriere, die Fähigkeit, die fachliche Problemstellung gründlich verstanden zu haben, wie man iterativ gute (natürlichsprachige) Abfragen stellt und man auch in der Lage ist zu erkennen (und verifizieren zu können), ob das so erhaltene Ergebnis überhaupt korrekt ist. Fehler in der Prozesskette zu finden, wird die große Herausforderung werden.

Wie man NASA-ISRO [NISAR](https://science.nasa.gov/mission/nisar/) Satellitendaten in QGIS (mit einem [Plugin](https://github.com/opengeos/qgis-nasa-earthdata-plugin)) herunterlädt und die in ihnen enthaltenen Bodenfeuchtedaten darstellt, [erklärt](https://techhub.social/@GregCocks/116009692607077562) eine [Schritt-für-Schritt-Anleitung](https://www.youtube.com/watch?v=oRTplHPf_T0).

## Mobilität
Mit dem Dashboard [verspaetung.net](https://verspaetung.net) dokumentiert der Journalist Lorenz Matzat [systematisch](https://lorenzmatzat.substack.com/p/verspaetung-punkt-net) Verspätungen (ab 5 Minuten) und Ausfällen bei der Deutschen Bahn in den nächsten 60 Minuten an 18 Bahnhöfen. Dazu werden alle Züge gezählt, die einseits in diesem Zeitraum planmässig hätten eintreffen und/oder abfahren sollen als auch die tatsächlich eintreffenden Züge, deren Ankunft/Abfahrt laut Fahrplan aber in der Vergangenheit liegt. Die Datengrundlage stammt vom [Open-Data-Angebot](https://developers.deutschebahn.com/db-api-marketplace/apis/product/timetables) der Bahn selbst.

Der zweigleisige Ausbau und die Elektrifizierung der der Bahnstrecke Chemnitz-Leipzig lässt weiterhin auf sich warten, letztere was dabei sogar schon 1933 vom Sächsischen Landtag kurz vor seiner Auflösung beschlossen worden. [Ein Internetspiel](https://www.mdr.de/nachrichten/sachsen/chemnitz/chemnitz-stollberg/satire-spiel-ausbau-elektrifizierung-bahnstrecke-leipzig-100.html) nimmt nun die Farce aus endlosen Bahngipfeln, fehlenden Budget und Bauverzögerungen satierisch aufs Korn.

Das [Radnetz-Monitoring](https://changing-cities.org/radnetz-monitoring-2025/) für Berlin von Changing Cities dokumentiert den Stillstand bei nur 6,8 Prozent teilweiser Fertigstellung des Radnetzes in 8 Jahren, obwohl nach Mobilitätsgesetz das ein Radnetz 2030 ein Länge von 2.700 km haben sollte.

## Energie
Wolf-Peter Schill [analysiert die Trends](https://social.tchncs.de/@wpschill/116050931540273487), die sich aus den aktuellen Zahlen des [DIW Energiewende-Monitors](https://www.diw.de/de/diw_01.c.997303.de/diw_energiewende-monitor.html) ablesen lassen. So schreitet der Ausbau der erneuerbaren Energien zwar voran, ist aber aktuell immer noch weit von den 2030-Zielen entfernt, vor allem bei Windkraft, speziell auf dem Meer, fehlen noch Anlagen. Auch Wärmepumpen und Elektrofahrzeugen gibt es noch zu wenige. Bei den Batteriespeichern sind die Hälfte noch allein im Heimbereich, hier fehlt der Zubau industrieller Großspeicher. Aber die Richtung stimmt und es gibt keinen Grund auf die Bremse zu treten. Leider gibt es immer noch Ewiggestrige, die die Lösung aller Energieprobleme im Bau von Kernfusionskraftwerken sehen. Diese werden zwat seit Jahrzehnten für "in einigen Jahren" angekündigt, vor 2050 [wird es nach seriöser wissenschaftlicher Einschätzung](https://www.l-iz.de/bildung/forschung/2026/02/energieversprechen-seit-70-jahren-verfehlt-vor-2050-kernfusion-deutschland-nicht-zu-erwarten-647845) keines geben. Auch Pläne zu neuartigen Atomreaktoren werden als ["fern jeder Realität"](https://www.vdi-nachrichten.com/technik/energie/die-langfristige-entwicklung-der-kernenergie-zwischen-erwartung-und-realitaet/). Entsprechend sollten öffentliche Mittel besser in Technologien mit kurzfristigem Nutzungspotenzial investiert werden. Die Solarenergie [übertrifft sogar alle Erwartungen](https://mastodon.social/@343max/116110396839769845). So wuchs in Afrika im Jahr 2025 [die Solarkapazität um 17 Prozent](https://www.dmz-news.online/2026/02/18/afrika-wird-zum-wichtigsten-wachstumsmotor-im-globalen-solarmarkt/), dabei sind noch nicht mal alle bereits installierten Module ans Netz angeschlossen.

### Reiches Netzpaket
Wie aus einem geleakten [Gesetzesentwurf](https://table.media/assets/climate/referentenentwurf-netzanschlusspaket.pdf) ("Netzpaket") hervor geht, plant das Wirtschaftsministerium, den sogenannten Anschlussvorrang für erneuerbare Energien abzuschaffen. Denn mit dem geplanten "Redispatch-Vorbehalt" müssen Netzbetreiber nur noch solche erneuerbaren Anlagenbetreiber anschließen, die von sich aus auf finanzielle Entschädigung für die abgeregelten Energiemengen verzichten, wenn sie also mehr Strom produzieren, als ins Netz eingespeist werden kann. Dies würde aber den Ausbau erneuerbarer Energie in netzschwachen Regionen ausbremsen, da Investoren mit höheren Risiko kalkulieren müssten. Fossile Kraftwerke werden dahingegen weiter durch Entschädigungszahlungen abgesichert. Ein klare Marktverzerrung. Die Redispatch-Kosten [müssten stattdessen](https://www.l-iz.de/wirtschaft/metropolregion/2026/02/attacke-auf-den-ausbau-der-erneuerbaren-energien-teil-2-schildburgerstreich-namens-agnes-648033) auf die Netzbetreiber umgelegt werden, ohne dass diese die Kosten an die Kunden weitergeben dürfen. Nur so würde erst der nötige Druck auf sie entstehen, die Netze endlich schnell auszubauen und zu digitalisieren. Und auch die [Allgemeinen Netzentgeltsystematik Strom (AgNes)Vorschläge](https://www.bundesnetzagentur.de/DE/Beschlusskammern/GBK/Ebene1_Rahmen/AgNes/start.html) der Bundesnetzagentur setzen die völlig falschen Anreize beim Speicherausbau. Denn um die hohen Netzgebühren gleichmäßiger zu verteilen, sollen Speicher nun auch diese Kosten mittragen. Die Gebühren sind aber gerade durch die Abregelungskosten so hoch und (zusätzliche) Speicher würden eigentlich helfen diesen Redispatchbedarf zu verringern und damit die Kosten senken. Nur mit der nun geplanten zusätzlichen Kostenbelastung der Speicher wird man gerade den gegenteiligen Effekt bekommen.   

Gutachter sehen im Netzpaket [ein Verstoß gegen EU-Recht](https://www.t-online.de/heim-garten/aktuelles/id_101134784/netzpaket-von-reiche-europarechtlich-unzulaessig.html) (VO (EU) 2019/943 Art. 13 (Redispatch)). Das regelt, dass Netzanschlüsse auch bei Engpässen möglich bleiben sollen, Einschränkungen dürfen nur zeitweise gelten und es muss faire Ausgleichsregelungen geben. Da aber Netzbetreiber nach Vorstellung des Netzpakets einfach selbst Gebiete zeitliche unbegrenzt und ohne konkrete Begründung als kapazitätslimitiert kennzeichnen können. Auch die Möglichkeit für die Netzbetreiber, einer Anlage den Anschluss zu verweigern, wenn diese sich nicht bereit erklärt, auf Ausgleichzahlungen verzichten, widerspricht geltenden EU-Gesetzen, die nur einen freiwilligen Verzicht vorsieht.

### Heizungsgsetz
* Heizen soll wieder Spaß machen
  https://taz.de/Neues-Heizungsgesetz/!6157772/
* Wie die Gaslobby das Heizungsgesetz entkernt hat
  https://www.lobbycontrol.de/lobbyismus-und-klima/wie-die-gaslobby-das-heizungsgesetz-entkernt-hat-109931/
  * https://bewegung.social/@lobbycontrol/116126316997275001
  * Gaslobby-Netzwerke
    https://bewegung.social/@lobbycontrol/116131915640009754
  * fossiles Energiekombinat 
    https://23.social/@thomasfricke/116131103583326244
* So will die Koalition die Regeln für Heizungen ändern
  https://www.tagesschau.de/inland/innenpolitik/gebaeudemodernisierung-eckpunkte-heizungsgesetz-100.html
* Dieses Heizungsgesetz bringt niemandem etwas
  https://www.capital.de/wirtschaft-politik/eckpunkte-des-heizungsgesetz--diese-reform-bringt-niemandem-etwas-37167088.html
* Neues Heizungsgesetz: Zwei-Personen-Haushalte müssten jährlich 350 Euro mehr zahlen
  https://www.iwkoeln.de/presse/iw-nachrichten/ralph-henger-malte-kueper-zwei-personen-haushalte-muessten-jaehrlich-350-euro-mehr-zahlen.html
* Journalismusversagen
  https://mastodon.green/@buergerwerke/116131625516591537
* Gekipptes Gebäudeenergiegesetz: In den Dreißigerjahren kommt die Quittung
  https://www.spiegel.de/wissenschaft/mensch/gebaeudeenergiegesetz-in-den-dreissigerjahren-kommt-die-quittung-a-edb302e0-88b6-42d4-b12f-d811948c3706#ref=rss
* Der Grüngas-Irrsinn
  https://mastodon.social/@somlu1968/116137339020043478
* Forschende sehen "katastrophale Verwässerung"
  https://www.tagesschau.de/wissen/klima/reaktionen-gebaeudemodernisierungsgesetz-wissenschaft-100.html
* Geschenk an Gaslobby stoppen! Heizen muss klimafreundlich und bezahlbar sein.
  https://aktion.bund.net/gaslobby-geschenk-stoppen
* Faktencheck zur Wahl: Heizen mit „grünem Öl“ statt Wärmepumpe
  https://table.media/climate/analyse/faktencheck-zur-wahl-heizen-mit-gruenem-oel-statt-waermepumpe
* Für die 65% Grüngasquote bräuchte man in Bayern das 1,5x der gesamten landwirtschaftliche Fläche Bayerns.
  https://mastodon.social/@peterjelinek/116143118866855263
* Biotreppe ins Desaster
  https://www.captain-futura.de/2026/02/27/19811/
  https://mastodon.social/@captainfutura/116141947621789736
* Solarer Vollstopp, vorgetäuschte Heiz-Freiheit und eine Koalition, die von RWE abschreibt
  https://klimareporter.de/gebaeude/solarer-vollstopp-vorgetaeuschte-heiz-freiheit-und-eine-koalition-die-von-rwe-abschreibt
* ein paar Prostimmen
  * Grüner Landesminister hält Reiches Netzpaket für vernünftig
    https://www.handelsblatt.com/politik/deutschland/energiewende-gruener-landesminister-haelt-reiches-netzpaket-fuer-vernuenftig/100203967.html
  * Reiche und die große Lebenslüge der Erneuerbare-Energien-Branche
    https://www.handelsblatt.com/meinung/kommentare/kommentar-reiche-und-die-grosse-lebensluege-der-erneuerbare-energien-branche/100201914.html
* Katherina Reiches Bekenntnis zu den Klimazielen ist lächerlich
  https://www.handelsblatt.com/meinung/kommentare/kommentar-katherina-reiches-bekenntnis-zu-den-klimazielen-ist-laecherlich/100203407.html
* Soziale Folgen des GMG-Entwurfs, IV mit Brigitte Knopf, Zukunft KlimaSozial
  https://www.deutschlandfunk.de/soziale-folgen-des-gmg-entwurfs-iv-mit-brigitte-knopf-zukunft-klimasozial-100.html
* Heizungsreform 2026: Regierungsaussagen im Check
  https://correctiv.org/aktuelles/klimawandel/2026/02/27/heizungsreform-heizungsgesetz-2026-regierungsaussagen-im-check/
* Die Wärmewende wird kaltgestellt
  https://www.energiezukunft.eu/erneuerbare-energien/waermewende/die-waermewende-wird-kaltgestellt
* Änderungen beim Heizungsgesetz: Wird es für Mieter jetzt teuer?
  https://www1.wdr.de/nachrichten/heizungsgesetz-was-bedeutet-das-fuer-mieter-100.html
* Heizungsgesetz: Schwarz-Rot sägt die Wärmewende ab
  https://www.surplusmagazin.de/geg-reform-heizungsgesetz-kritik-warmepumpen/

## Klima
* EU plant Lockerungen bei Emissionshandel: Der Markt regelt's nicht
  https://taz.de/Geplante-Lockerungen-der-EU-Emissionshandel-hat-als-Klimaschutzinstrument-versagt/!6151799/
* Schutzschirm für Protest – Spende für die Unterstützung der Angeklagten im § 129-Prozess und anderen Betroffenen von politischer Repression
  https://raz-ev.org/schutzschirm-fuer-protest-spende-fuer-die-unterstuetzung-der-angeklagten-im-%C2%A7129-prozess-und-anderen-betroffenen-von-politischer-repression/
* Klima - Im Würgegriff der Ölkonzerne
  https://det.social/@kloeffi/116095769954054019
* Letter to the informal European Council meeting: Under pressure, Europe’s industry needs direction, not deregulation
  https://caneurope.org/letter-europes-industry-needs-direction-not-deregulation/
* Tausende Satelliten umkreisen die Erde und verglühen nach kurzer Lebensdauer. Was dabei in der Atmosphäre passiert, könnte unser Klima für immer verändern.
  https://www.fr.de/wissen/experte-warnt-wir-veraendern-die-stratosphaere-in-einen-nie-dagewesenen-zustand-zr-94164864.html
* China has planted so many trees around the Taklamakan Desert that it's turned this 'biological void' into a carbon sink
  https://www.livescience.com/planet-earth/plants/china-has-planted-so-many-trees-around-the-taklamakan-desert-that-its-turned-this-biological-void-into-a-carbon-sink
* Handbuch Umweltkosten: Klimaschutz rechnet sich Das „Handbuch Umweltkosten – Methodenkonvention 4.0“ drückt in Geldwerten aus, welche Schäden durch deutsche Treibhausgase und andere Umwelteffekte entstehen – und durch ambitionierte Klima- und Umweltpolitik vermieden werden können.
  https://www.umweltbundesamt.de/publikationen/handbuch-umweltkosten
  https://social.bund.de/@Umweltbundesamt/116126328983891699
* Global Greening: Wie der globale Wandel die Vegetation Richtung Nordosten verschiebt
  https://www.l-iz.de/bildung/forschung/2026/02/global-greening-648487
  https://greenwave.earth
* Heftige Niederschläge haben im Jänner, Februar in Spanien und Portugal große Zerstörungen angerichtet
  https://science.orf.at/stories/3234377/
* Loading the DICE Against Pensions
  https://carbontracker.org/reports/loading-the-dice-against-pensions/
* Climate change is accelerating but nature is slowing down
  https://www.sciencedaily.com/releases/2026/02/260217005714.htm

## Kultur
* 1300 Jahre alte Weltchronik in Katharinenkloster auf dem Sinai entdeckt
  https://www.derstandard.de/story/3000000307343/1300-jahre-alte-weltchronik-in-katharinenkloster-auf-dem-sinai-entdeckt
* Bibliotheksgeschichte zum Mitmachen
  https://www.saxorum.de/mitmachen/bibliotheksgeschichte-zum-mitmachen
  https://openbiblio.social/@slubdresden/116096237734395497
* artresearch.net
  https://artresearch.net/resource/:start
  https://det.social/@HxxxKxxx/116127620848958856
* archaeo3d.de
  https://archaeo3d.de
  https://dresden.network/@Zahlenzauberin/116132870399842975
* Gute Nachrichten für offenes Kulturerbe: Das Bundesarchiv unterstützt das Open Heritage Statement!
  https://openheritagestatement.org/statement
  https://social.wikimedia.de/@wikimediaDE/116141191533923213
* SODa Semantic Co-Working Space
  https://fedihum.org/@SODa/116138107202652735
* Archäologische Schätze der Ukraine als 3D-Projekt gerettet
  https://www.nordisch.info/panorama/klasse-aktion-archaeologische-schaetze-der-ukraine-als-3d-projekt-gerettet/

## Journalismus und Demokratie
* "Keine Sendezeit für Antidemokraten", fordern Medienschaffende und Forscher
  https://www.derstandard.de/story/3000000308864/afd-chef-chrupalla-in-ard-talk-appell-gegen-normalisierung-der-extrem-rechten
  https://bsky.app/profile/politicalbeauty.bsky.social/post/3medixewaus25
* Die Arroganz der Macht
  https://www.t-online.de/nachrichten/tagesanbruch/id_101146816/politiker-fuerchten-das-volk-.html
* Was die Übernahme von Warner für CNN bedeuten könnte
  https://www.zdfheute.de/politik/ausland/warner-bros-paramount-netflix-uebernahme-cnn-trump-usa-100.html

## Transparenz
* Korruptionswahrnehmungsindex (Corruption Perceptions Index, CPI) 2025
  https://www.transparency.de/cpi/cpi-2025
* Rechnungshof-Jahresbericht: Managementfehler und dubiose Beschlüsse bei Dataport Phoenix
  https://www.golem.de/news/rechnungshof-jahresbericht-managementfehler-und-dubiose-beschluesse-bei-dataport-phoenix-2602-205486.html
* Reiches Dienstwagen fuhr 1300 Kilometer ohne Reiche
  https://www.spiegel.de/politik/deutschland/katherina-reiche-liess-bei-vip-gipfel-in-tirol-dienstwagen-1300-kilometer-leer-fahren-a-38c6834d-a9e3-4f2d-9939-3ccee14fbce8
  https://bewegung.social/@lobbycontrol/116103937810708392
* Open Access: Der Preis für freie Wissenschaft
  https://fragdenstaat.de/artikel/exklusiv/2026/02/der-preis-fur-freie-wissenschaft/
* Umweltverschmutzung: Das unsichtbare Gift im Rhein
  https://correctiv.org/aktuelles/kampf-um-wasser/2026/02/03/wie-die-industrie-den-rhein-mit-unbekannten-stoffen-verschmutzt/
* Benjamin Brake arbeitete im Ministerium an der Regulierung von Künstlicher Intelligenz. Jetzt setzt er sich für ihre Deregulierung ein.
  https://www.abgeordnetenwatch.de/recherchen/lobbyismus/ex-abteilungsleiter-wechselt-zur-tech-lobby
* Rücktrittsforderung an AfD-Personalchef: Vetternwirtschaft ist der gordische Knoten
  https://taz.de/Ruecktrittsforderung-an-AfD-Personalchef/!6157504/
  https://chaos.social/@lalonsander/116130949643068571
  * „Family and Friends“: Tracker zur Vetternwirtschaft bei der AfD
    https://correctiv.org/aktuelles/kandidierenden-check/2026/02/27/afd-vetternwirtschaft-tracker-uebersicht-grafik-aktuell/
* Jmail reimagines Jeffrey Epstein's publicly released emails as an interactive Gmail-style inbox
  https://jmail.world
  https://mas.to/@nemo/116143369433801220
* Angriffe auf Zivilgesellschaft: Die Extremismusklausel ist zurück
  https://fragdenstaat.de/artikel/exklusiv/2026/02/angriffe-auf-zivilgesellschaft/

## Überwachung
* Chatkontrolle stoppen
  https://chat-kontrolle.eu/index.php/2026/02/01/aufruf-eprivacy-luecke-schliessen/
  * Achtung: Protest-Emails an Europaabgeordnete gegen die #Chatkontrolle 1.0  werden wohl bald automatisiert rausgefiltert.
    https://eupolicy.social/@pneutig/116047234421815328
  * Update zur Chatkontrolle 1.0
    https://digitalegesellschaft.de/2026/02/update-zur-chatkontrolle-1-0/  
    https://digitalegesellschaft.de/2026/02/nein-zur-massenhaften-ueberwachung-unserer-nachrichten-durch-big-tech/
    https://chat-kontrolle.eu/index.php/2026/02/23/offener-brief-nein-zur-chatkontrolle-1-0/
* Palantir is suing us. Us, the Republik Magazin. 
  https://infosec.exchange/@adfichter/116057480580052663
* Innenausschuss in Sachsen-Anhalt winkt massiv kritisiertes Palantir-Gesetz unverändert durch
  https://netzpolitik.org/2026/automatisierte-datenanalyse-innenausschuss-in-sachsen-anhalt-winkt-massiv-kritisiertes-palantir-gesetz-unveraendert-durch/
* Der Referentenentwurf zur IP-Adressspeicherung des Justizministeriums setzt auf Generalverdacht: Drei Monate anlasslose Überwachung für alle!
  https://d-64.org/stellungnahme-vds/
  https://d-64.social/@D64eV/116086422108044278
* Österreichisches Innenministerium nutzt Überwachungssoftware von zwielichtiger Firma, will nicht darüber reden
  https://www.derstandard.at/story/3000000309258/innenministerium-nutzt-ueberwachungssoftware-von-zwielichtiger-firma-will-nicht-darueber-reden
  https://mastodon.social/@wchr/116102884658851646
* Anfrage zu https://einfach-machen.gov.de  ist gescheitert 
  https://fragdenstaat.de/anfrage/einreichungen-aus-dem-einfachmachen-portal-1/1079630/anhang/ifgbescheidname28012026_geschwaerzt.pdf
* CCC zum Entwurf des sächsischen Polizeigesetzes: Das ist eine „Blaupause für den Überwachungsstaat“
  https://www.l-iz.de/politik/sachsen/2026/02/ccc-zum-entwurf-des-sachsischen-polizeigesetzes-blaupause-fur-uberwachungsstaat-648862
* Der Aufstieg der Datenkraken
  https://www.ardmediathek.de/video/Y3JpZDovL3pkZi5kZS9QUk9EMS9TQ01TXzAwODRhZDc4LWJhNTQtNDM0NS1iM2Y3LTcxNzM0OTA3ZGRjNA

## The daily KInk
### Neue Tools
* Spielwelten per Mausklick: Googles neues KI-Tool lässt Gaming-Aktien purzeln
  https://www.heise.de/news/Spielwelten-per-Mausklick-Googles-neues-KI-Tool-laesst-Gaming-Aktien-purzeln-11161887.html
* Anthropic stellt Claude Opus 4.6 mit Agent Teams vor
  https://www.heise.de/news/Anthropic-stellt-Claude-Opus-4-6-mit-Agent-Teams-vor-11167133.html
* GPT-5.3-Codex: OpenAI stellt neues Coding-Modell vor
  https://www.heise.de/news/GPT-5-3-Codex-OpenAI-stellt-neues-Coding-Modell-vor-11167502.html
* Nano Banana 2 bringt Pro-Funktionen für Gratis-Nutzer
  https://www.heise.de/news/Nano-Banana-2-bringt-Pro-Funktionen-fuer-Gratis-Nutzer-11192662.html
### Bildung
* Kopflos unterwegs: KI-Kompetenzen in Schulen und für die Schulentwicklung
  https://www.heise.de/news/Orientierungspapier-kritisiert-aktuelle-Lage-von-KI-im-Bildungssystem-11160508.html
  https://www.forumbd.de/blog/orientierungspapier-zu-ki-bezogenen-schulleitungsfortbildungen-in-deutschland/
* Large Language Models: Die Mathematik hinter Transformers
  https://www.heise.de/blog/Large-Language-Models-Die-Mathematik-hinter-Transformers-11070751.html
* Mozilla Data Collective
  https://datacollective.mozillafoundation.org
  https://mastodon.social/@jmcastagnetto/116041905197727986
* Supercharge by AI exhibition
  https://tacticaltech.org/supercharged-by-ai-experience/
  https://mastodon.cc/@info_activism/116006661136835201
### Anwendung
* Klimaforschung: Wissenschaftler tracken Eisberg-Lebenszyklus mit KI
  https://www.heise.de/news/Klimaforschung-Wissenschaftler-tracken-Eisberg-Lebenszyklus-mit-KI-11167700.html
* Nach über 1500 Jahren: KI-Agenten ermitteln Regeln von römischem Brettspiel
  https://www.heise.de/news/KI-Agenten-spielen-roemisches-Brettspiel-und-ermitteln-so-dessen-Regeln-11171367.html
* KI-gestützte Orchestrierung von Wissensgraphen
  https://github.com/weberius/staedtepartnerschaften
* machine-learning-lernt-aus-daten-wer-seine-activity
  https://www.linkedin.com/posts/peter-hense-%F0%9F%87%BA%F0%9F%87%A6%F0%9F%87%AE%F0%9F%87%B1%F0%9F%87%AA%F0%9F%87%BA-19861318_machine-learning-lernt-aus-daten-wer-seine-activity-7430351157333663744-F4G9
### Auswirkung in der Medizin
* KI in der Medizin: Effizienz vs. Ethik
  https://www.zdfheute.de/video/heute-journal/rieken-ki-medizin-100.html
* ChatGPT als Arzt-Ersatz? Studie zeigt ernüchternde Ergebnisse
  https://www.heise.de/news/ChatGPT-als-Arzt-Ersatz-Studie-zeigt-ernuechternde-Ergebnisse-11170499.html
* Wie „Künstliche Intelligenz“ unser Gesundheitswesen verändern soll – und welche Fragen das aufwirft
  https://netzpolitik.org/2026/digitalisierungsstrategie-wie-kuenstliche-intelligenz-unser-gesundheitswesen-veraendern-soll-und-welche-fragen-das-aufwirft/
### Sicherheit
* Warum Moltbot beeindruckt, aber Sicherheitsexperten warnen
  https://t3n.de/news/moltbot-ki-assistent-sicherheitsrisiken-warnung-1727149/
  * OpenClaw im Selbstversuch: Was das gehypte Tool so magisch macht
    https://www.derstandard.at/story/3000000309082/openclaw-im-selbstversuch-was-das-gehypte-tool-so-magisch-macht?ref=article
* Manipulierte-Straßenschilder: Wenn das autonome Auto Fußgänger umfährt
  https://www.heise.de/news/Manipulierte-Strassenschilder-Wenn-das-autonome-Auto-Fussgaenger-umfaehrt-11162744.html
* KI-Agenten: Popularität steigt rasant – trotz mangelnder Sicherheit
  https://www.heise.de/news/KI-Agenten-Popularitaet-steigt-rasant-trotz-mangelnder-Sicherheit-11184780.html
* Höhere Kosten und längere Ausfallzeiten durch KI-Integration
  https://www.golem.de/news/ai-first-unternehmen-hoehere-kosten-und-laengere-ausfallzeiten-durch-ki-integration-2602-205793.html
* Claude: KI-Chatbot für Cyberangriff auf mexikanische Regierung genutzt
  https://www.heise.de/news/Claude-KI-Chatbot-fuer-Cyberangriff-auf-mexikanische-Regierung-genutzt-11190396.html
* Facial recognition error prompts police to arrest Asian man for burglary 100 miles away
  https://www.theguardian.com/technology/2026/feb/25/facial-recognition-error-prompts-police-to-arrest-asian-man-for-burglary-100-miles-away
  https://mamot.fr/@roofjoke/116136228318085740
### Auswirkung auf Arbeit
* 80 Prozent der Firmen nutzen KI: Microsoft warnt vor gefährlicher Schatten-KI
  https://www.heise.de/news/80-Prozent-der-Firmen-nutzen-KI-Microsoft-warnt-vor-gefaehrlicher-Schatten-KI-11172238.html
* Firm Data on AI - forecasting AI will boost productivity by 1.4%
  https://www.nber.org/papers/w34836
  https://tldr.nettime.org/@tante/116079709866264832
* Studie: Wenn KI nicht weniger, sondern mehr Arbeit macht
  https://www.tagesschau.de/wissen/forschung/ki-arbeitsintensitaet-folgen-100.html
  https://www.golem.de/news/arbeitsverdichtung-ki-macht-nicht-weniger-arbeit-sondern-mehr-2602-205204.html
* KI am Arbeitsplatz kann in mehr Arbeit und Burnout enden
  https://www.br.de/nachrichten/wissen/ki-am-arbeitsplatz-kann-in-mehr-arbeit-und-burnout-enden,VBfwSwR
* Burger King führt den KI-Assistenten "Patty" ein. Er hört über Headsets mit und bewertet, wie freundlich das Personal ist.
  https://www.telepolis.de/article/Burger-King-laesst-KI-mithoeren-und-benotet-wie-nett-das-Personal-ist-11192133.html
### Auswirkungen auf Programmieren
* Rely On AI And Get Left Behind
  https://codemanship.wordpress.com/2026/02/21/is-comprehension-debt-in-your-risk-register/
* I Started Programming When I Was 7. I'm 50 Now, and the Thing I Loved Has Changed
  https://www.jamesdrandall.com/posts/the_thing_i_loved_has_changed/
* AI agent "contributes" PR to matplotlib - PR gets rejected - AI agent 'writes and publishes blog to shame the maintainer'
  https://swecyb.com/@anderseknert/116056950299738296
### Auswirkungen auf Wissenschaft
* Denken wird ineffizient: Warum selbst Forscher die Kontrolle an KI abgeben
  https://www.telepolis.de/article/KI-in-der-Bildung-Warum-das-Denken-ueberfluessig-wird-11166565.html
* Science Is Drowning in AI Slop
  https://www.theatlantic.com/science/2026/01/ai-slop-science-publishing/685704/
### Auswirkungen auf das Internet
* Web design in the early 2000s: Every 100ms of latency on page load costs visitors. Web design in the late 2020s: Let's add a 10-second delay while Cloudflare checks that you are capable of ticking a checkbox in front of every page load.
  https://infosec.exchange/@david_chisnall/116052768520528267
* Künstliche Intelligenz läutet das Ende des Internets ein, wie wir es kennen. Außerdem treibt KI die Entkernung der Demokratie voran.
  https://taz.de/Kuenstliche-Intelligenz-Das-Ende-des-Internets-und-die-Entkernung-der-Demokratie/!6155291/
* News Publishers Are Now Blocking The Internet Archive, And We May All Regret It
  https://www.techdirt.com/2026/02/13/news-publishers-are-now-blocking-the-internet-archive-and-we-may-all-regret-it/
### Auswirkungen auf die Umwelt
* Deutschlands neue KI-Rechenzentren: So erkennen Sie die Fabriken in Ihrer Nachbarschaft
  https://correctiv.org/aktuelles/kuenstliche-intelligenz/2026/02/05/deutschlands-neue-ki-rechenzentren-bald-auch-in-ihrer-nachbarschaft-so-erkennen-sie-die-fabriken/
* Die übersehenen Umweltfolgen durch KI
  https://www.deutschlandfunk.de/systemische-umweltrisiken-von-ki-interview-mit-lena-hoffmann-gi-100.html
### Auswirkung auf die Wirtschaft
* AI Added ‘Basically Zero’ to US Economic Growth Last Year, Goldman Sachs Says
  https://gizmodo.com/ai-added-basically-zero-to-us-economic-growth-last-year-goldman-sachs-says-2000725380
* Anthropic wirft chinesischen Unternehmen unlautere Praktiken vor
  https://www.heise.de/news/Anthropic-wirft-chinesischen-Unternehmen-unlautere-Praktiken-vor-11186816.html
* Nervöse Börsen: Gedankenexperiment über KI lässt Techaktien sacken
  https://www.heise.de/news/Nervoese-Boersen-Gedankenexperiment-ueber-KI-laesst-Techaktien-sacken-11187688.html
* Everyone in AI is building the wrong thing for the same reason
  https://www.joanwestenberg.com/everyone-in-ai-is-building-the-wrong-thing-for-the-same-reason/
* SAPs KI-Wette wackelt
  https://www.golem.de/news/joule-saps-ki-wette-wackelt-2602-205842.html
### Moralischer Meltdown
* Wer gern cheated und Shortcuts nimmt, liebt Chatbots.
  https://mastodon.wurzelmann.at/@mimrma/116062078768592309
* Diffusion of Responsibility
  https://tante.cc/2026/02/14/diffusion-of-responsibility/
* ChatGPT-Boykott: Diese Kampagne fordert, Abos bei OpenAI zu kündigen
  https://t3n.de/news/chatgpt-boykott-kampagne-openai-1729228/
  * Anthropic widersetzt sich Forderung von US-Verteidigungsministerium
    https://www.zeit.de/politik/ausland/2026-02/anthropic-ki-technik-us-verteidigungsministerium-hegseth
* KI ist keine Revolution sondern eine seltsame Rettungsaktion des Kapitalismus
  https://www.mariusmichusch.de/ki-ist-keine-revolution-sondern-eine-verzweifelte-rettungsaktion-des-kapitalismus/
  https://hessen.social/@mariusmichusch/116148127916197997
* OpenClaw: KI-Agent ohne Leitplanken?
  https://www.surplusmagazin.de/openclaw-ki-aya-jaff-startup-openai/

## Und sonst so
* version of wikipedia you can doomscroll
  https://xikipedia.org
  via https://infosec.exchange/users/rebane2001/statuses/115998023365214091

## Recap
* OKNRW Barcamp 2025 – Science Track-Sammelband
  https://oknrw.de/oknrw-barcamp-2025-science-track-sammelband/
  und Rückblick: https://oknrw.de/rueckblende-oknrw-barcamp-2025/
* FOSDEM '26
  https://fosdem.org/2026/schedule/events/
* eGovernment Podcast Monatsschau
  https://egovernment-podcast.com/egov252-monatsschau-02-26/

## Fristen
* Dritte Runde des Landesprogramms Offene Innovation in Schleswig-Holstein gestartet, bis 28.04.2026
  https://osb-alliance.de/featured/dritte-runde-des-landesprogramms-offene-innovation-in-schleswig-holstein-gestartet
* CfP für die spring(); break, 15.03.2026
  https://pretalx.das-labor.org/spring-break-2026/cfp

## Veranstaltungen ([Kalender/Karte](https://events.codeforleipzig.de))
* Sonntag, 01.03.2026, online: **Digital Independence Day** <a title='Kalendereintrag Digital Independence Day' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vRGlnaXRhbCBJbmRlcGVuZGVuY2UgRGF5Ly9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjYwMzAxVDIwMzQyNFoNCkRUU1RBUlQ6MjAyNjAzMDFUMDAwMDAwDQpEVEVORDoyMDI2MDMwMVQyMzU5NTkNClNVTU1BUlk6RGlnaXRhbCBJbmRlcGVuZGVuY2UgRGF5DQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL2RpLmRheQ0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpvbmxpbmUNCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://di.day
* Sonntag, 01.03.2026, bis Sonntag, 08.03.2026, 23:59, online: **Open Data Day 2026** <a title='Kalendereintrag Open Data Day 2026' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vT3BlbiBEYXRhIERheSAyMDI2Ly9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjYwMzAxVDIwMzQyNFoNCkRUU1RBUlQ6MjAyNjAzMDFUMDAwMDAwDQpEVEVORDoyMDI2MDMwOFQyMzU5NTkNClNVTU1BUlk6T3BlbiBEYXRhIERheSAyMDI2DQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL29wZW5kYXRhZGF5Lm9yZy9kZS9ldmVudHMvMjAyNi8NCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046b25saW5lDQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://opendataday.org/de/events/2026/
* Montag, 02.03.2026, 14:00-17:00, Raum Oxford (04G01), Staatsbibliothek zu Berlin, Unter den Linden 8, 10117  Berlin und auch online: **Datencafé: Automatische Texterkennung mit eScriptorium** <a title='Kalendereintrag Datencafé: Automatische Texterkennung mit eScriptorium' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vRGF0ZW5jYWbDqTogQXV0b21hdGlzY2hlIFRleHRlcmtlbm51bmcgbWl0IGVTY3JpcHRvcml1bS8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI2MDMwMVQyMDM0MjRaDQpEVFNUQVJUOjIwMjYwMzAyVDE0MDAwMA0KRFRFTkQ6MjAyNjAzMDJUMTcwMDAwDQpTVU1NQVJZOkRhdGVuY2Fmw6k6IEF1dG9tYXRpc2NoZSBUZXh0ZXJrZW5udW5nIG1pdCBlU2NyaXB0b3JpdW0NCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vbGFiLnNiYi5iZXJsaW4vZGF0ZW5jYWZlLw0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpSYXVtIE94Zm9yZCAoMDRHMDEpXCwgU3RhYXRzYmlibGlvdGhlayB6dSBCZXJsaW5cLCBVbnRlciBkZW4gTGluZGVuIDhcLCAxMDExNyAgQmVybGluIHVuZCBhdWNoIG9ubGluZQ0KR0VPOjUyLjUxNzUzODg5MjAwMDc3OzEzLjM5MTYyMDQ3NjM5NTY3Mw0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://lab.sbb.berlin/datencafe/
* Dienstag, 03.03.2026, 13:00-13:45, online: **Das Open Heritage Statement** <a title='Kalendereintrag Das Open Heritage Statement' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vRGFzIE9wZW4gSGVyaXRhZ2UgU3RhdGVtZW50Ly9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjYwMzAxVDIwMzQyNFoNCkRUU1RBUlQ6MjAyNjAzMDNUMTMwMDAwDQpEVEVORDoyMDI2MDMwM1QxMzQ1MDANClNVTU1BUlk6RGFzIE9wZW4gSGVyaXRhZ2UgU3RhdGVtZW50DQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL3d3dy53aWtpbWVkaWEuZGUvdmVyYW5zdGFsdHVuZ2VuL2Rhcy1vcGVuLWhlcml0YWdlLXN0YXRlbWVudC8NCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046b25saW5lDQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://www.wikimedia.de/veranstaltungen/das-open-heritage-statement/
* Dienstag, 03.03.2026, 14:00, bis Donnerstag, 05.03.2026, 17:00, Messe Karlsruhe, Messeallee 1, 76287  Rheinstetten: **IT-TRANS – Die Internationale Fachmesse mit Kongressplattform für digitale Mobilität** <a title='Kalendereintrag IT-TRANS – Die Internationale Fachmesse mit Kongressplattform für digitale Mobilität' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vSVQtVFJBTlMg4oCTIERpZSBJbnRlcm5hdGlvbmFsZSBGYWNobWVzc2UgbWl0IEtvbmdyZXNzcGxhdHRmb3JtIGbDvHIgZGlnaXRhbGUgTW9iaWxpdMOkdC8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI2MDMwMVQyMDM0MjRaDQpEVFNUQVJUOjIwMjYwMzAzVDE0MDAwMA0KRFRFTkQ6MjAyNjAzMDVUMTcwMDAwDQpTVU1NQVJZOklULVRSQU5TIOKAkyBEaWUgSW50ZXJuYXRpb25hbGUgRmFjaG1lc3NlIG1pdCBLb25ncmVzc3BsYXR0Zm9ybSBmw7xyIGRpZ2l0YWxlIE1vYmlsaXTDpHQNCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vd3d3Lml0LXRyYW5zLm9yZy9kZS8NCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046TWVzc2UgS2FybHNydWhlXCwgTWVzc2VhbGxlZSAxXCwgNzYyODcgIFJoZWluc3RldHRlbg0KR0VPOjQ4Ljk4MDg2NDY7OC4zMzA0MTY2OTk5OTk5OTkNCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://www.it-trans.org/de/
* Dienstag, 03.03.2026, 20:00-22:00, c-base, Rungestraße 20, 10179 Berlin und auch online: **154. Netzpolitischer Abend** <a title='Kalendereintrag 154. Netzpolitischer Abend' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vMTU0LiBOZXR6cG9saXRpc2NoZXIgQWJlbmQvL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNjAzMDFUMjAzNDI0Wg0KRFRTVEFSVDoyMDI2MDMwM1QyMDAwMDANCkRURU5EOjIwMjYwMzAzVDIyMDAwMA0KU1VNTUFSWToxNTQuIE5ldHpwb2xpdGlzY2hlciBBYmVuZA0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly9kaWdpdGFsZWdlc2VsbHNjaGFmdC5kZS8yMDI2LzAyLzE1NC1uZXR6cG9saXRpc2NoZXItYWJlbmQvDQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOmMtYmFzZVwsIFJ1bmdlc3RyYcOfZSAyMFwsIDEwMTc5IEJlcmxpbiB1bmQgYXVjaCBvbmxpbmUNCkdFTzo1Mi41MTI5NzM1OzEzLjQyMDEzMTMNCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://digitalegesellschaft.de/2026/02/154-netzpolitischer-abend/
* Mittwoch, 04.03.2026, 20:00-21:30, online: **Open Transport Meetup: Organic Maps - Public Transport for everyone** <a title='Kalendereintrag Open Transport Meetup: Organic Maps - Public Transport for everyone' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vT3BlbiBUcmFuc3BvcnQgTWVldHVwOiBPcmdhbmljIE1hcHMgLSBQdWJsaWMgVHJhbnNwb3J0IGZvciBldmVyeW9uZS8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI2MDMwMVQyMDM0MjRaDQpEVFNUQVJUOjIwMjYwMzA0VDIwMDAwMA0KRFRFTkQ6MjAyNjAzMDRUMjEzMDAwDQpTVU1NQVJZOk9wZW4gVHJhbnNwb3J0IE1lZXR1cDogT3JnYW5pYyBNYXBzIC0gUHVibGljIFRyYW5zcG9ydCBmb3IgZXZlcnlvbmUNCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vaGFja21kLm9rZm4uZGUvb3BlbnRyYW5zcG9ydG1lZXR1cA0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpvbmxpbmUNCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://hackmd.okfn.de/opentransportmeetup
* Donnerstag, 05.03.2026, 10:00-14:00, Offenen Kanal Flensburg, Sankt-Jürgen-Straße 95, 24937 Flensburg: **Mit Offene Daten, Vorträge und Vernetzung** <a title='Kalendereintrag Mit Offene Daten, Vorträge und Vernetzung' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vTWl0IE9mZmVuZSBEYXRlblwsIFZvcnRyw6RnZSB1bmQgVmVybmV0enVuZy8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI2MDMwMVQyMDM0MjRaDQpEVFNUQVJUOjIwMjYwMzA1VDEwMDAwMA0KRFRFTkQ6MjAyNjAzMDVUMTQwMDAwDQpTVU1NQVJZOk1pdCBPZmZlbmUgRGF0ZW5cLCBWb3J0csOkZ2UgdW5kIFZlcm5ldHp1bmcNCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vb3BlbmRhdGFkYXktZmxlbnNidXJnLmRlDQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOk9mZmVuZW4gS2FuYWwgRmxlbnNidXJnXCwgU2Fua3QtSsO8cmdlbi1TdHJhw59lIDk1XCwgMjQ5MzcgRmxlbnNidXJnDQpHRU86NTQuNzkxNjIwNzs5LjQ0MjI2NTINCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://opendataday-flensburg.de
* Donnerstag, 05.03.2026, 11:00-12:00, online: **CorrelCompact: Wirkungsbericht für die Tonne? Wirkungsdaten besser aufbereiten** <a title='Kalendereintrag CorrelCompact: Wirkungsbericht für die Tonne? Wirkungsdaten besser aufbereiten' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vQ29ycmVsQ29tcGFjdDogV2lya3VuZ3NiZXJpY2h0IGbDvHIgZGllIFRvbm5lPyBXaXJrdW5nc2RhdGVuIGJlc3NlciBhdWZiZXJlaXRlbi8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI2MDMwMVQyMDM0MjRaDQpEVFNUQVJUOjIwMjYwMzA1VDExMDAwMA0KRFRFTkQ6MjAyNjAzMDVUMTIwMDAwDQpTVU1NQVJZOkNvcnJlbENvbXBhY3Q6IFdpcmt1bmdzYmVyaWNodCBmw7xyIGRpZSBUb25uZT8gV2lya3VuZ3NkYXRlbiBiZXNzZXIgYXVmYmVyZWl0ZW4NCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vY29ycmVsYWlkLm9yZy92ZXJhbnN0YWx0dW5nZW4vY2MyNi13aXJrdW5nc2JlcmljaHQNCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046b25saW5lDQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://correlaid.org/veranstaltungen/cc26-wirkungsbericht
* Donnerstag, 05.03.2026, 18:00-21:00, WikiBär Wikipedia, Köpenicker Straße 45, 10179 Berlin: **Jugend editiert** <a title='Kalendereintrag Jugend editiert' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vSnVnZW5kIGVkaXRpZXJ0Ly9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjYwMzAxVDIwMzQyNFoNCkRUU1RBUlQ6MjAyNjAzMDVUMTgwMDAwDQpEVEVORDoyMDI2MDMwNVQyMTAwMDANClNVTU1BUlk6SnVnZW5kIGVkaXRpZXJ0DQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL3d3dy53aWtpbWVkaWEuZGUvdmVyYW5zdGFsdHVuZ2VuL2p1Z2VuZC1lZGl0aWVydC8NCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046V2lraULDpHIgV2lraXBlZGlhXCwgS8O2cGVuaWNrZXIgU3RyYcOfZSA0NVwsIDEwMTc5IEJlcmxpbg0KR0VPOjUyLjUwMjY3NzA2MjkzNjA3OzEzLjQzOTI1MDM0ODcyMTU0NA0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://www.wikimedia.de/veranstaltungen/jugend-editiert/
* Donnerstag, 05.03.2026, 19:31-20:30, online: **Bits & Bäume Community Vernetzungstreffen** <a title='Kalendereintrag Bits & Bäume Community Vernetzungstreffen' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vQml0cyAmIELDpHVtZSBDb21tdW5pdHkgVmVybmV0enVuZ3N0cmVmZmVuLy9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjYwMzAxVDIwMzQyNFoNCkRUU1RBUlQ6MjAyNjAzMDVUMTkzMTAwDQpEVEVORDoyMDI2MDMwNVQyMDMwMDANClNVTU1BUlk6Qml0cyAmIELDpHVtZSBDb21tdW5pdHkgVmVybmV0enVuZ3N0cmVmZmVuDQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL2Rpc2NvdXJzZS5iaXRzLXVuZC1iYWV1bWUub3JnL3QvMjAyNS0wMy0wNi1vbmxpbmUtY29tbXVuaXR5LXRyZWZmZW4tMTktMzEtdWhyLzE2MDINCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046b25saW5lDQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://discourse.bits-und-baeume.org/t/2025-03-06-online-community-treffen-19-31-uhr/1602
* Freitag, 06.03.2026, 13:00-13:45, online: **NFDI4Objects, Forschungsdateninfrastruktur für materielle Hinterlassenschaften aus Menschheits- und Umweltgeschichte (Anja Gerber)** <a title='Kalendereintrag NFDI4Objects, Forschungsdateninfrastruktur für materielle Hinterlassenschaften aus Menschheits- und Umweltgeschichte (Anja Gerber)' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vTkZESTRPYmplY3RzXCwgRm9yc2NodW5nc2RhdGVuaW5mcmFzdHJ1a3R1ciBmw7xyIG1hdGVyaWVsbGUgSGludGVybGFzc2Vuc2NoYWZ0ZW4gYXVzIE1lbnNjaGhlaXRzLSB1bmQgVW13ZWx0Z2VzY2hpY2h0ZSAoQW5qYSBHZXJiZXIpLy9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjYwMzAxVDIwMzQyNFoNCkRUU1RBUlQ6MjAyNjAzMDZUMTMwMDAwDQpEVEVORDoyMDI2MDMwNlQxMzQ1MDANClNVTU1BUlk6TkZESTRPYmplY3RzXCwgRm9yc2NodW5nc2RhdGVuaW5mcmFzdHJ1a3R1ciBmw7xyIG1hdGVyaWVsbGUgSGludGVybGFzc2Vuc2NoYWZ0ZW4gYXVzIE1lbnNjaGhlaXRzLSB1bmQgVW13ZWx0Z2VzY2hpY2h0ZSAoQW5qYSBHZXJiZXIpDQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL2RpZ2l0YWxlLWt1bnN0Z2VzY2hpY2h0ZS5kZS9ha3R1ZWxsZXMvbHVuY2gtYW5kLWxlYXJuLXp1ci1kaWdpdGFsZW4ta3Vuc3RnZXNjaGljaHRlLw0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpvbmxpbmUNCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://digitale-kunstgeschichte.de/aktuelles/lunch-and-learn-zur-digitalen-kunstgeschichte/
* Freitag, 06.03.2026, 14:00, bis Sonntag, 08.03.2026, 14:00, Institut für Ur- und Frühgeschichte, Christian-Albrechts-Universität, Raum 148 (PC-Labor), Johanna-Mestorf-Straße 6, 24118  Kiel: **Archaeogaming Hackathon Kiel** <a title='Kalendereintrag Archaeogaming Hackathon Kiel' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vQXJjaGFlb2dhbWluZyBIYWNrYXRob24gS2llbC8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI2MDMwMVQyMDM0MjRaDQpEVFNUQVJUOjIwMjYwMzA2VDE0MDAwMA0KRFRFTkQ6MjAyNjAzMDhUMTQwMDAwDQpTVU1NQVJZOkFyY2hhZW9nYW1pbmcgSGFja2F0aG9uIEtpZWwNCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vZGlrb3BhLm5ldC8yMDI2LzAxL2Fua3VlbmRpZ3VuZy1hcmNoYWVvZ2FtaW5nLWhhY2thdGhvbi1raWVsLTYtOC0zLTIwMjYvDQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOkluc3RpdHV0IGbDvHIgVXItIHVuZCBGcsO8aGdlc2NoaWNodGVcLCBDaHJpc3RpYW4tQWxicmVjaHRzLVVuaXZlcnNpdMOkdFwsIFJhdW0gMTQ4IChQQy1MYWJvcilcLCBKb2hhbm5hLU1lc3RvcmYtU3RyYcOfZSA2XCwgMjQxMTggIEtpZWwNCkdFTzo1NC4zMzkyMjAzOzEwLjEyNDM3ODkNCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://dikopa.net/2026/01/ankuendigung-archaeogaming-hackathon-kiel-6-8-3-2026/
* Freitag, 06.03.2026, 19:00, bis Sonntag, 08.03.2026, 21:00, WIR-Haus, Wilhelmstraße 189, 42489 Wülfrath: **Hack im Pott** <a title='Kalendereintrag Hack im Pott' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vSGFjayBpbSBQb3R0Ly9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjYwMzAxVDIwMzQyNFoNCkRUU1RBUlQ6MjAyNjAzMDZUMTkwMDAwDQpEVEVORDoyMDI2MDMwOFQyMTAwMDANClNVTU1BUlk6SGFjayBpbSBQb3R0DQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL2hhY2tpbXBvdHQuZGUNCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046V0lSLUhhdXNcLCBXaWxoZWxtc3RyYcOfZSAxODlcLCA0MjQ4OSBXw7xsZnJhdGgNCkdFTzo1MC40Njg1MjkxNzQ1NjQ5MzU7NC40MzY5NTEyNTk1NzcwMjkNCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://hackimpott.de
* Samstag, 07.03.2026, bis Freitag, 13.03.2026, 23:59, online: **Open Data Day 2025** <a title='Kalendereintrag Open Data Day 2025' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vT3BlbiBEYXRhIERheSAyMDI1Ly9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjYwMzAxVDIwMzQyNFoNCkRUU1RBUlQ6MjAyNjAzMDdUMDAwMDAwDQpEVEVORDoyMDI2MDMxM1QyMzU5NTkNClNVTU1BUlk6T3BlbiBEYXRhIERheSAyMDI1DQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL29wZW5kYXRhZGF5Lm9yZw0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpvbmxpbmUNCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://opendataday.org
* Samstag, 07.03.2026, 10:00-18:00, Offenen Kanal Flensburg, Sankt-Jürgen-Straße 95, 24937 Flensburg: **Mit offenen Karten: Ein Hackathon mit Kartenanwendungen im Fokus** <a title='Kalendereintrag Mit offenen Karten: Ein Hackathon mit Kartenanwendungen im Fokus' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vTWl0IG9mZmVuZW4gS2FydGVuOiBFaW4gSGFja2F0aG9uIG1pdCBLYXJ0ZW5hbndlbmR1bmdlbiBpbSBGb2t1cy8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI2MDMwMVQyMDM0MjRaDQpEVFNUQVJUOjIwMjYwMzA3VDEwMDAwMA0KRFRFTkQ6MjAyNjAzMDdUMTgwMDAwDQpTVU1NQVJZOk1pdCBvZmZlbmVuIEthcnRlbjogRWluIEhhY2thdGhvbiBtaXQgS2FydGVuYW53ZW5kdW5nZW4gaW0gRm9rdXMNCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vb3BlbmRhdGFkYXktZmxlbnNidXJnLmRlDQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOk9mZmVuZW4gS2FuYWwgRmxlbnNidXJnXCwgU2Fua3QtSsO8cmdlbi1TdHJhw59lIDk1XCwgMjQ5MzcgRmxlbnNidXJnDQpHRU86NTQuNzkxNjIwNzs5LjQ0MjI2NTINCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://opendataday-flensburg.de
* Mittwoch, 11.03.2026, 11:00-16:00, online: **The Future of Open Data** <a title='Kalendereintrag The Future of Open Data' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vVGhlIEZ1dHVyZSBvZiBPcGVuIERhdGEvL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNjAzMDFUMjAzNDI0Wg0KRFRTVEFSVDoyMDI2MDMxMVQxMTAwMDANCkRURU5EOjIwMjYwMzExVDE2MDAwMA0KU1VNTUFSWTpUaGUgRnV0dXJlIG9mIE9wZW4gRGF0YQ0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly9va2ZuLm9yZy9lbi9ldmVudHMvdGhlLWZ1dHVyZS1vZi1vcGVuLWRhdGEvDQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOm9ubGluZQ0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://okfn.org/en/events/the-future-of-open-data/
* Mittwoch, 11.03.2026, 13:00, bis Donnerstag, 12.03.2026, 13:15, Umweltbundesamt, Wörlitzer Platz 1, 06844 Dessau-Roßlau: **From niche to centre: mainstreaming circular lifestyles in European cities** <a title='Kalendereintrag From niche to centre: mainstreaming circular lifestyles in European cities' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vRnJvbSBuaWNoZSB0byBjZW50cmU6IG1haW5zdHJlYW1pbmcgY2lyY3VsYXIgbGlmZXN0eWxlcyBpbiBFdXJvcGVhbiBjaXRpZXMvL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNjAzMDFUMjAzNDI0Wg0KRFRTVEFSVDoyMDI2MDMxMVQxMzAwMDANCkRURU5EOjIwMjYwMzEyVDEzMTUwMA0KU1VNTUFSWTpGcm9tIG5pY2hlIHRvIGNlbnRyZTogbWFpbnN0cmVhbWluZyBjaXJjdWxhciBsaWZlc3R5bGVzIGluIEV1cm9wZWFuIGNpdGllcw0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly93d3cudW13ZWx0YnVuZGVzYW10LmRlL2ZhY2hrb25mZXJlbnotdm9uLWRlci1uaXNjaGUtaW5zLXplbnRydW0temlya3VsYWVyZQ0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpVbXdlbHRidW5kZXNhbXRcLCBXw7ZybGl0emVyIFBsYXR6IDFcLCAwNjg0NCBEZXNzYXUtUm/Dn2xhdQ0KR0VPOjUxLjg0MjUwMDg1OzEyLjIzOTM1MDU5Mjk4ODUyMg0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://www.umweltbundesamt.de/fachkonferenz-von-der-nische-ins-zentrum-zirkulaere
* Donnerstag, 12.03.2026, 14:00-15:30, online: **Podiumsdiskussion: Wie sollte eine faire Finanzierung von Open Access aussehen?** <a title='Kalendereintrag Podiumsdiskussion: Wie sollte eine faire Finanzierung von Open Access aussehen?' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vUG9kaXVtc2Rpc2t1c3Npb246IFdpZSBzb2xsdGUgZWluZSBmYWlyZSBGaW5hbnppZXJ1bmcgdm9uIE9wZW4gQWNjZXNzIGF1c3NlaGVuPy8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI2MDMwMVQyMDM0MjRaDQpEVFNUQVJUOjIwMjYwMzEyVDE0MDAwMA0KRFRFTkQ6MjAyNjAzMTJUMTUzMDAwDQpTVU1NQVJZOlBvZGl1bXNkaXNrdXNzaW9uOiBXaWUgc29sbHRlIGVpbmUgZmFpcmUgRmluYW56aWVydW5nIHZvbiBPcGVuIEFjY2VzcyBhdXNzZWhlbj8NCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vYmxvZ3MuZnUtYmVybGluLmRlL29wZW4tcmVzZWFyY2gtYmVybGluLzIwMjYvMDIvMjcvcXVvLXZhZGlzLWZhaXJlLWZpbmFuemllcnVuZy1vcGVuLWFjY2Vzcy8NCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046b25saW5lDQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://blogs.fu-berlin.de/open-research-berlin/2026/02/27/quo-vadis-faire-finanzierung-open-access/
* Donnerstag, 12.03.2026, 19:00-21:00, Marstall | Lesesaal Patente & Normen, TIB – Technische Informationsbibliothek, Welfengarten 1a, 30167 Hannover: **Datenatlas - Im Dickicht der digitalen Verwaltung** <a title='Kalendereintrag Datenatlas - Im Dickicht der digitalen Verwaltung' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vRGF0ZW5hdGxhcyAtIEltIERpY2tpY2h0IGRlciBkaWdpdGFsZW4gVmVyd2FsdHVuZy8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI2MDMwMVQyMDM0MjRaDQpEVFNUQVJUOjIwMjYwMzEyVDE5MDAwMA0KRFRFTkQ6MjAyNjAzMTJUMjEwMDAwDQpTVU1NQVJZOkRhdGVuYXRsYXMgLSBJbSBEaWNraWNodCBkZXIgZGlnaXRhbGVuIFZlcndhbHR1bmcNCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vdGVjaG5pay1zYWxvbi5kZS8yMDI2LzAzLzEyL2RhdGVuYXRsYXMuaHRtbA0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpNYXJzdGFsbCB8IExlc2VzYWFsIFBhdGVudGUgJiBOb3JtZW5cLCBUSUIg4oCTIFRlY2huaXNjaGUgSW5mb3JtYXRpb25zYmlibGlvdGhla1wsIFdlbGZlbmdhcnRlbiAxYVwsIDMwMTY3IEhhbm5vdmVyDQpHRU86NTIuMzgyMDQ0MTU5ODU4Mjg7OS43MjAyNTM0NDI1ODUwMzMNCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://technik-salon.de/2026/03/12/datenatlas.html
* Montag, 16.03.2026, 10:00, bis Dienstag, 17.03.2026, 17:30, bUm – Raum für solidarisches Miteinander, Paul-Lincke-Ufer 21, 10999 Berlin: **FOSS Backstage** <a title='Kalendereintrag FOSS Backstage' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vRk9TUyBCYWNrc3RhZ2UvL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNjAzMDFUMjAzNDI0Wg0KRFRTVEFSVDoyMDI2MDMxNlQxMDAwMDANCkRURU5EOjIwMjYwMzE3VDE3MzAwMA0KU1VNTUFSWTpGT1NTIEJhY2tzdGFnZQ0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly8yNi5mb3NzLWJhY2tzdGFnZS5kZQ0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpiVW0g4oCTIFJhdW0gZsO8ciBzb2xpZGFyaXNjaGVzIE1pdGVpbmFuZGVyXCwgUGF1bC1MaW5ja2UtVWZlciAyMVwsIDEwOTk5IEJlcmxpbg0KR0VPOjUyLjQ5Mzc5MzI7MTMuNDI5NjYxMQ0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://26.foss-backstage.de
* Mittwoch, 18.03.2026, 20:00-21:30, online: **Open Transport Meetup: OpenTNF - a geopackage based INSPIRE DS TN data format for roadnetworks** <a title='Kalendereintrag Open Transport Meetup: OpenTNF - a geopackage based INSPIRE DS TN data format for roadnetworks' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vT3BlbiBUcmFuc3BvcnQgTWVldHVwOiBPcGVuVE5GIC0gYSBnZW9wYWNrYWdlIGJhc2VkIElOU1BJUkUgRFMgVE4gZGF0YSBmb3JtYXQgZm9yIHJvYWRuZXR3b3Jrcy8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI2MDMwMVQyMDM0MjRaDQpEVFNUQVJUOjIwMjYwMzE4VDIwMDAwMA0KRFRFTkQ6MjAyNjAzMThUMjEzMDAwDQpTVU1NQVJZOk9wZW4gVHJhbnNwb3J0IE1lZXR1cDogT3BlblRORiAtIGEgZ2VvcGFja2FnZSBiYXNlZCBJTlNQSVJFIERTIFROIGRhdGEgZm9ybWF0IGZvciByb2FkbmV0d29ya3MNCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vaGFja21kLm9rZm4uZGUvb3BlbnRyYW5zcG9ydG1lZXR1cA0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpvbmxpbmUNCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://hackmd.okfn.de/opentransportmeetup
* Freitag, 20.03.2026, 17:00, bis Samstag, 21.03.2026, 18:00, tba,  , 60311 Frankfurt/Main: **Datendialog** <a title='Kalendereintrag Datendialog' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vRGF0ZW5kaWFsb2cvL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNjAzMDFUMjAzNDI0Wg0KRFRTVEFSVDoyMDI2MDMyMFQxNzAwMDANCkRURU5EOjIwMjYwMzIxVDE4MDAwMA0KU1VNTUFSWTpEYXRlbmRpYWxvZw0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly9jb3JyZWxhaWQub3JnL3ZlcmFuc3RhbHR1bmdlbi9kYXRlbmRpYWxvZy1tYXIyMDI2DQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOnRiYVwsICBcLCA2MDMxMSBGcmFua2Z1cnQvTWFpbg0KR0VPOjUwLjExMDY0NDQ7OC42ODIwOTE3DQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://correlaid.org/veranstaltungen/datendialog-mar2026
* Samstag, 21.03.2026, 09:00-16:00, IT-Referat der Stadt München, Qubes Gebäude, Agnes-Pockels-Bogen 33, 80992 München: **Open Data Day 2026 in München** <a title='Kalendereintrag Open Data Day 2026 in München' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vT3BlbiBEYXRhIERheSAyMDI2IGluIE3DvG5jaGVuLy9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjYwMzAxVDIwMzQyNFoNCkRUU1RBUlQ6MjAyNjAzMjFUMDkwMDAwDQpEVEVORDoyMDI2MDMyMVQxNjAwMDANClNVTU1BUlk6T3BlbiBEYXRhIERheSAyMDI2IGluIE3DvG5jaGVuDQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL211ZW5jaGVuLmRpZ2l0YWwvdmVyYW5zdGFsdHVuZ2VuL29wZW4tZGF0YS1kYXktMjAyNi5odG1sDQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOklULVJlZmVyYXQgZGVyIFN0YWR0IE3DvG5jaGVuXCwgUXViZXMgR2Viw6R1ZGVcLCBBZ25lcy1Qb2NrZWxzLUJvZ2VuIDMzXCwgODA5OTIgTcO8bmNoZW4NCkdFTzo0OC4xNzQwMjkzNTsxMS41MzM2NzgyOTc0ODU4NDYNCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://muenchen.digital/veranstaltungen/open-data-day-2026.html
* Dienstag, 24.03.2026, 19:30-21:00, online: **Verkehrswende-Meetup** <a title='Kalendereintrag Verkehrswende-Meetup' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vVmVya2VocnN3ZW5kZS1NZWV0dXAvL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNjAzMDFUMjAzNDI0Wg0KRFRTVEFSVDoyMDI2MDMyNFQxOTMwMDANCkRURU5EOjIwMjYwMzI0VDIxMDAwMA0KU1VNTUFSWTpWZXJrZWhyc3dlbmRlLU1lZXR1cA0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly93aWtpLm9wZW5zdHJlZXRtYXAub3JnL3dpa2kvVmVya2VocnN3ZW5kZS1NZWV0dXAjTWVldHVwcw0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpvbmxpbmUNCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://wiki.openstreetmap.org/wiki/Verkehrswende-Meetup#Meetups
* Mittwoch, 25.03.2026, 09:00-14:30, SBB CFF FFS – Hauptsitz, HS1, Hilfikerstrasse 1, 3014 Bern: **opentransportdata.swiss Community Day** <a title='Kalendereintrag opentransportdata.swiss Community Day' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vb3BlbnRyYW5zcG9ydGRhdGEuc3dpc3MgQ29tbXVuaXR5IERheS8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI2MDMwMVQyMDM0MjRaDQpEVFNUQVJUOjIwMjYwMzI1VDA5MDAwMA0KRFRFTkQ6MjAyNjAzMjVUMTQzMDAwDQpTVU1NQVJZOm9wZW50cmFuc3BvcnRkYXRhLnN3aXNzIENvbW11bml0eSBEYXkNCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vb3BlbnRyYW5zcG9ydGRhdGEuc3dpc3MvZGUvMjUtbWFlcnotMjAyNi1vcGVudHJhbnNwb3J0ZGF0YS1zd2lzcy1jb21tdW5pdHktZGF5Lw0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpTQkIgQ0ZGIEZGUyDigJMgSGF1cHRzaXR6XCwgSFMxXCwgSGlsZmlrZXJzdHJhc3NlIDFcLCAzMDE0IEJlcm4NCkdFTzo0Ni45Njc4MjAxOzcuNDYzMTY4OA0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://opentransportdata.swiss/de/25-maerz-2026-opentransportdata-swiss-community-day/
* Mittwoch, 25.03.2026, 10:00, bis Samstag, 28.03.2026, 16:45, Zentrales Hörsaalgebäude (ZHG), Georg-August-Universität Göttingen, Platz der Göttinger Sieben 5, 37073 Göttingen: **FOSSGIS** <a title='Kalendereintrag FOSSGIS' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vRk9TU0dJUy8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI2MDMwMVQyMDM0MjRaDQpEVFNUQVJUOjIwMjYwMzI1VDEwMDAwMA0KRFRFTkQ6MjAyNjAzMjhUMTY0NTAwDQpTVU1NQVJZOkZPU1NHSVMNCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vZm9zc2dpcy1rb25mZXJlbnouZGUvMjAyNi8NCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046WmVudHJhbGVzIEjDtnJzYWFsZ2Viw6R1ZGUgKFpIRylcLCBHZW9yZy1BdWd1c3QtVW5pdmVyc2l0w6R0IEfDtnR0aW5nZW5cLCBQbGF0eiBkZXIgR8O2dHRpbmdlciBTaWViZW4gNVwsIDM3MDczIEfDtnR0aW5nZW4NCkdFTzo1MS41NDA5Mjs5LjkzNTgxDQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://fossgis-konferenz.de/2026/
* Freitag, 27.03.2026, 15:30, bis Sonntag, 29.03.2026, 14:00, Museum Schnütgen, Cäcilienstraße 29–33, 50667 Köln: **Art History Loves Wiki 2026** <a title='Kalendereintrag Art History Loves Wiki 2026' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vQXJ0IEhpc3RvcnkgTG92ZXMgV2lraSAyMDI2Ly9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjYwMzAxVDIwMzQyNFoNCkRUU1RBUlQ6MjAyNjAzMjdUMTUzMDAwDQpEVEVORDoyMDI2MDMyOVQxNDAwMDANClNVTU1BUlk6QXJ0IEhpc3RvcnkgTG92ZXMgV2lraSAyMDI2DQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL2RlLndpa2lwZWRpYS5vcmcvd2lraS9XaWtpcGVkaWE6QXJ0X0hpc3RvcnlfTG92ZXNfV2lraQ0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpNdXNldW0gU2NobsO8dGdlblwsIEPDpGNpbGllbnN0cmHDn2UgMjnigJMzM1wsIDUwNjY3IEvDtmxuDQpHRU86NTAuOTM0NzkxMjs2Ljk1MTY2MzINCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://de.wikipedia.org/wiki/Wikipedia:Art_History_Loves_Wiki
* Freitag, 27.03.2026, 16:00-19:00, Freie Universität Berlin, Hörsaal 1a, Habelschwerdter Allee 45, 14195 Berlin: **Abschlussveranstaltung Gesunde und gerechte Mobilität für alle in Berlin** <a title='Kalendereintrag Abschlussveranstaltung Gesunde und gerechte Mobilität für alle in Berlin' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vQWJzY2hsdXNzdmVyYW5zdGFsdHVuZyBHZXN1bmRlIHVuZCBnZXJlY2h0ZSBNb2JpbGl0w6R0IGbDvHIgYWxsZSBpbiBCZXJsaW4vL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNjAzMDFUMjAzNDI0Wg0KRFRTVEFSVDoyMDI2MDMyN1QxNjAwMDANCkRURU5EOjIwMjYwMzI3VDE5MDAwMA0KU1VNTUFSWTpBYnNjaGx1c3N2ZXJhbnN0YWx0dW5nIEdlc3VuZGUgdW5kIGdlcmVjaHRlIE1vYmlsaXTDpHQgZsO8ciBhbGxlIGluIEJlcmxpbg0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly93d3cuaW9ldy5kZS92ZXJhbnN0YWx0dW5nL2dlc3VuZGUtdW5kLWdlcmVjaHRlLW1vYmlsaXRhZXQtZnVlci1hbGxlLWluLWJlcmxpbg0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpGcmVpZSBVbml2ZXJzaXTDpHQgQmVybGluXCwgSMO2cnNhYWwgMWFcLCBIYWJlbHNjaHdlcmR0ZXIgQWxsZWUgNDVcLCAxNDE5NSBCZXJsaW4NCkdFTzo1Mi40NTE5MTQ1OTk5OTk5OTU7MTMuMjg4MjQ5Mg0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://www.ioew.de/veranstaltung/gesunde-und-gerechte-mobilitaet-fuer-alle-in-berlin
* Freitag, 27.03.2026, 16:00-19:00, Das Labor, Alleestraße 50, 44793 Bochum: **spring(); break;** <a title='Kalendereintrag spring(); break;' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vc3ByaW5nKClcOyBicmVha1w7Ly9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjYwMzAxVDIwMzQyNFoNCkRUU1RBUlQ6MjAyNjAzMjdUMTYwMDAwDQpEVEVORDoyMDI2MDMyN1QxOTAwMDANClNVTU1BUlk6c3ByaW5nKClcOyBicmVha1w7DQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL3dpa2kuZGFzLWxhYm9yLm9yZy93L1ZlcmFuc3RhbHR1bmcvc3ByaW5nYnJlYWtfMjAyNg0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpEYXMgTGFib3JcLCBBbGxlZXN0cmHDn2UgNTBcLCA0NDc5MyBCb2NodW0NCkdFTzo1Mi40NTE5MTQ1OTk5OTk5OTU7MTMuMjg4MjQ5Mg0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://wiki.das-labor.org/w/Veranstaltung/springbreak_2026
* Samstag, 28.03.2026, 09:00, bis Sonntag, 29.03.2026, 18:00, Technische Universität Chemnitz, Zentrales Hörsaal- und Seminargebäude, Reichenhainer Straße 90, 09126 Chemnitz: **Chemnitzer Linux-Tage** <a title='Kalendereintrag Chemnitzer Linux-Tage' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vQ2hlbW5pdHplciBMaW51eC1UYWdlLy9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjYwMzAxVDIwMzQyNFoNCkRUU1RBUlQ6MjAyNjAzMjhUMDkwMDAwDQpEVEVORDoyMDI2MDMyOVQxODAwMDANClNVTU1BUlk6Q2hlbW5pdHplciBMaW51eC1UYWdlDQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL2NoZW1uaXR6ZXIubGludXgtdGFnZS5kZS8yMDI2L2RlDQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOlRlY2huaXNjaGUgVW5pdmVyc2l0w6R0IENoZW1uaXR6XCwgWmVudHJhbGVzIEjDtnJzYWFsLSB1bmQgU2VtaW5hcmdlYsOkdWRlXCwgUmVpY2hlbmhhaW5lciBTdHJhw59lIDkwXCwgMDkxMjYgQ2hlbW5pdHoNCkdFTzo1MC44MTM1MjgyOzEyLjkyOTIwNjYxOTQwMTMxDQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://chemnitzer.linux-tage.de/2026/de
* Samstag, 28.03.2026, 10:00-23:59, : **Tag des offenen Hackspace** <a title='Kalendereintrag Tag des offenen Hackspace' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vVGFnIGRlcyBvZmZlbmVuIEhhY2tzcGFjZS8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI2MDMwMVQyMDM0MjRaDQpEVFNUQVJUOjIwMjYwMzI4VDEwMDAwMA0KRFRFTkQ6MjAyNjAzMjhUMjM1OTU5DQpTVU1NQVJZOlRhZyBkZXMgb2ZmZW5lbiBIYWNrc3BhY2UNCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vbWQuY2NjLW1hbm5oZWltLmRlL3Rkb2gtc3BhY2VzMjYNCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046DQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://md.ccc-mannheim.de/tdoh-spaces26
* Mittwoch, 01.04.2026, online: **Digital Independence Day** <a title='Kalendereintrag Digital Independence Day' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vRGlnaXRhbCBJbmRlcGVuZGVuY2UgRGF5Ly9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjYwMzAxVDIwMzQyNFoNCkRUU1RBUlQ6MjAyNjA0MDFUMDAwMDAwDQpEVEVORDoyMDI2MDQwMVQyMzU5NTkNClNVTU1BUlk6RGlnaXRhbCBJbmRlcGVuZGVuY2UgRGF5DQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL2RpLmRheQ0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpvbmxpbmUNCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://di.day
* Freitag, 03.04.2026, 15:00, bis Montag, 06.04.2026, 15:30, Universität Koblenz, Universitätsstraße 1, 56070 Koblenz-Metternich: **Easterhegg 2026** <a title='Kalendereintrag Easterhegg 2026' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vRWFzdGVyaGVnZyAyMDI2Ly9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjYwMzAxVDIwMzQyNFoNCkRUU1RBUlQ6MjAyNjA0MDNUMTUwMDAwDQpEVEVORDoyMDI2MDQwNlQxNTMwMDANClNVTU1BUlk6RWFzdGVyaGVnZyAyMDI2DQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL2VoMjMuZWFzdGVyaGVnZy5ldQ0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpVbml2ZXJzaXTDpHQgS29ibGVuelwsIFVuaXZlcnNpdMOkdHNzdHJhw59lIDFcLCA1NjA3MCBLb2JsZW56LU1ldHRlcm5pY2gNCkdFTzo1MC4zNjM1ODU0OzcuNTU4MzA3Njk5OTk5OTk5DQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://eh23.easterhegg.eu
* Freitag, 10.04.2026, bis Samstag, 11.04.2026, HPI Campus II, August-Bebel-Str. 88, 14482 Potsdam: **Hack HPI 2026 - Agriculture, Climate & Tech** <a title='Kalendereintrag Hack HPI 2026 - Agriculture, Climate & Tech' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vSGFjayBIUEkgMjAyNiAtIEFncmljdWx0dXJlXCwgQ2xpbWF0ZSAmIFRlY2gvL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNjAzMDFUMjAzNDI0Wg0KRFRTVEFSVDoyMDI2MDQxMFQxNDAwMDANCkRURU5EOjIwMjYwNDExVDE0MDAwMA0KU1VNTUFSWTpIYWNrIEhQSSAyMDI2IC0gQWdyaWN1bHR1cmVcLCBDbGltYXRlICYgVGVjaA0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly9oYWNraHBpLm9yZw0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpIUEkgQ2FtcHVzIElJXCwgQXVndXN0LUJlYmVsLVN0ci4gODhcLCAxNDQ4MiBQb3RzZGFtDQpHRU86NTIuMzkyMTU2MTk5OTk5OTk1OzEzLjEyNDU2OTY5OTk5OTk5OQ0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://hackhpi.org
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
