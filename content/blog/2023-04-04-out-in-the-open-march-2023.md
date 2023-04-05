---
title: "A Fool With A Tool Is Still A Fool – Out in the Open März 2023"
author: "Klara Juhl (Code for Osnabrück), Jörg Reichert (Code for Leipzig), Stefan Kaufmann (Code for Ulm), Anastasia Gilz (Code for Niederrhein) et al."
date: '2023-04-04T12:00:00+01:00'
excerpt: Monatlich erscheinender Überblick über Entwicklungen in der Open Data und Civic Tech Szene
topic: community
images:
- imgname: out-in-the-open-2023-03-header.jpg
  attribution: Foto von <a href="https://pixabay.com/de/users/peggy_marco-1553824/">Peggy_Marco</a> auf <a href="https://pixabay.com/de/photos/t%C3%BCrschild-open-closed-ge%C3%B6ffnet-1607503/">Pixabay</a>
og_image: out-in-the-open-2023-03-header.jpg
type: blog
---
Spätestens seit ChatGPT sind Chatbots in aller Munde: Die Technologie soll es Nutzer erlauben, über natürliche Sprache mit einem technischen System zu kommunizieren. Das bedeutet: Es sind keine Kenntnisse über spezielle Abfragesprachen nötig. Im Optimalfall kommuniziert der Nutzer mit dem System wie mit einem menschlichen Gegenüber.

Das hinter ChatGPT / OpenAPI steckende Modell ist keine Open Source-Ressource. Dabei ist gerade in diesem Bereich Transparenz enorm wichtig. Denn die Kommunikation mit einer künstlichen Intelligenz sollte auch für die menschliche Seite möglichst nachvollziehbar bleiben. Die Entwicklung von Open Source-Chatbots ist allerdings ungleich schwerer als im kommerziellen Bereich, wie [Joram Schwartzmann bei Protoype Fund schreibt](https://prototypefund.de/der-lange-weg-zu-open-source-chatbots/). Das liegt nicht zuletzt am hohen Kostenaufwand. Trotzdem wächst die Anzahl an Open Source- bzw. Open Data-Chatbots kontinuierlich. So gibt es beispielsweise [CensusGPT](https://censusgpt.com/), einen Chatbot für die vereinfachte Abfrage von Zensusdaten aus den USA.

Das vorhandene Potenzial von ChatGPT können wir uns darüber hinaus zunutze machen. Sindre Wimberger beschreibt in den Folien seines Workshops "[ChatGPT und Open Data](https://t.co/Oag7vmo6bJ)" zahlreiche nützliche Anwendungsfälle. ChatGPT kann außerdem [Abfragen in Overpass schreiben](https://twitter.com/lemonodor/status/1636849040548675584), der Abfragesprache für OpenStreetMap. Der GeoObserver [zeigt ein Beispiel für eine solche Abfrage](https://geoobserver.wordpress.com/2023/03/23/chatgpt-osm-overpass-turbo-chatgeopt/) und verweist weiter auf [ChatGeoPT](https://github.com/earth-genome/ChatGeoPT): Ein Projekt im Proof of Concept-Status, welches Geo-Anfragen in natürlicher Sprache verarbeiten kann.

Wie immer gibt es aber auch eine Kehrseite hinter dieser vermeintlich bahnbrechenden Technologie. Modelle, die hinter ChatGPT und Co stecken, müssen trainiert werden. Und das geschieht u. a. mit Datenannotation: Menschen sichten dabei Datensätze und etikettieren diese, um Maschinen anzulernen. Diese Arbeit wird häufig durch unterbezahlte Kräfte unter teils unmenschlichen Arbeitsbedingungen durchgeführt. Chris Köver von netzpolitik.org sprach im [Interview mit der Forscherin Milagros Miceli](https://netzpolitik.org/2023/datenarbeit-wie-millionen-menschen-fuer-die-ki-schuften/) über die problematischen Zustände.

Wikimedia Deutschland veröffentlichte passend zum Thema KI eine [Einordnung von Wikidata und Linked Open Data](https://blog.wikimedia.de/2023/03/16/wenn-maschinen-schoepfen/). Das strukturierte Wissen, beispielsweise bei Wikidata, kann Grundlage für Symbolic AI sein: Die maschinenlesbaren Fakteninformationen können als logische Schlussfolgerungen verkettet und daraus Text generiert werden. Das ist ein Gegenmodell zu sogenannten Large Language Models (LLMs) wie ChatGPT. LLMs werden mit großen Datenmengen trainiert und können mittlerweile verblüffend eloquente Texte schreiben – die aber nicht immer inhaltlich korrekt sind. Das Konzept von Symbolic AI basiert dagegen auf expliziten, beweisbaren logischen Schlüssen und den zugehörigen Fakten. Und wenn diese Fakten als Linked Open Data vorliegen, gehört dieses Wissen auch der gesamten Menschheit anstelle einzelner Silicon-Valley-Milliardäre.

### Politisches aus der Open-Welt
Noch immer monetarisieren zahlreiche öffentliche Stellen ihren Datenschatz. Dahinter steckt die Befürchtung, die Datenbereitstellung selbst sei bei kostenloser Herausgabe nicht mehr finanzierbar. Stefan Kaufmann erläutert [in einem Blogbeitrag auf netzpolitik.org](https://netzpolitik.org/2023/oeffentliches-geld-oeffentliches-gut-warum-die-oeffentliche-hand-nicht-mit-daten-handeln-darf/), warum die Diskussion um die kostenfreie Veräußerung von Daten häufig nicht richtig geführt wird. 

Die Friedrich-Ebert-Stiftung veröffentlichte einen [Ratgeber für digitales Ehrenamt mit einem besonderen Fokus auf kommunale Verwaltung](https://library.fes.de/pdf-files/bueros/stuttgart/20087-20230313.pdf). Neben grundsätzlichen Begriffserklärungen und einer Potenzialanalyse werden ausgewählte Gruppen vorgestellt (auch Verschwörhaus e. V. ist darunter zu finden). Zum Schluss gibt die Veröffentlichung Empfehlungen darüber, wie eine Kommune selbstorganisierte Gruppen fördern kann.

Während der Corona-Pandemie mangelte es häufig an strukturiert zur Verfügung gestellten Daten. Die Süddeutsche Zeitung stellte nun Wissenschaftler:innen und Expert:innen die interessante Frage, welche Daten sie sich für die nächste Pandemie wünschen würden. Herausgekommen ist eine [lange und detaillierte Wunschliste, die auf GitHub einzusehen](https://github.com/SZ-Datenjournalismus/2023-wunschliste-pandemie) ist.

### Was Berlin liest, was es verbraucht
Die Stadtbibliothek Pankow veröffentlichte im Jahr 2022 offene Daten der Berliner Bibliotheken inklusive vielerlei anonymisierter Angaben zum Ausleihverhalten der Berliner:innen. [In Zusammenarbeit mit der ODIS Berlin](https://odis-berlin.de/aktuelles/2023-03-14-bibliotheksdaten_pankow/) entstand so ein übersichtliches [Dashboard mit Ausleihstatistiken](https://grafana.odis-berlin.de/public-dashboards/6b18fd27a9f84f959a4f63cfe0b985be?orgId=1).

Daneben gibt es neuerdings den [Berliner EnergieCheckpoint](https://energiecheckpoint.odis-berlin.de/), eine interaktive Karte, welche den Stromverbrauch öffentlicher Gebäude visualisiert. [Ein Blog-Artikel der ODIS](https://odis-berlin.de/projekte/energiecheckpoint/) beschreibt die Methode sowie die Datengrundlage des Projekts. Die Rohdaten stehen in strukturierter Form [auf GitHub](https://github.com/technologiestiftung/energiekarte/blob/main/scripts/dataIn/verbrauch.csv) zur Verfügung.

### Fast wie Ostereier suchen: Versteckte APIs finden
Die Suche nach offenen Daten und Transparenz kann zuweilen eine ganz schöne Detektivarbeit sein. Auch APIs sind häufig nicht korrekt oder gar nicht dokumentiert. Ob gewollt oder nicht, diese "versteckten" APIs bergen das Potenzial, an scheinbar unerreichbare Daten zu gelangen. [Leon Yin gibt daher Tipps](https://www.niemanlab.org/2023/03/journalists-should-be-looking-for-undocumented-apis-heres-how-to-start/), wie versteckte APIs gefunden und sinnvoll genutzt werden können.

### Rückblick auf den Hackday Niederrhein
Der Hackday Niederrhein fand am 18. und 19. März statt. Ca. 120 Personen kamen ins Moerser Rathaus, einige nahmen per Big Blue Button teil. Nach drei Jahren Pandemie und kleiner Ausgaben des Hackdays hat es diesmal wieder richtig gerockt. Die Stimmung war gut und wie gewohnt familiär. Neben den "üblichen Verdächtigen" aus der Open-Data-Community gab es ein paar neue Gesichter, unter anderem auch Verwaltungmenschen und verhältnismäßig viele Jugendliche. Bei den Vorträgen ging es um Mastodon, Tourismusdaten, ChatGPT und Bürgerbeteiligung. Bei den Workshops wurden Umweltdaten verarbeitet, kleine Roboter gebaut, ChatGPT-Anwendungsdemos gezeigt. Beim Linked Open Data - Workshop von Mila Frerichs wurden HandsOn Daten verlinkt und intensiv diskutiert.
Neben der Begeisterung von Menschen die zum ersten Mal dabei waren hat die Veranstaltung auch eine gute Resonanz in den Medien bekommen. Berichte gibt's bei der [WDR Lokalzeit](https://www1.wdr.de/fernsehen/lokalzeit/duisburg/videos/video-hackday-in-moers-100.html), auf den [Seiten der Bertelsmann-Stiftung](https://www.bertelsmann-stiftung.de/de/unsere-projekte/daten-fuer-die-gesellschaft/projektnachrichten/hackday-2022-1), im [Tagesspiegel (Paywall)](https://background.tagesspiegel.de/smart-city/moerser-cdo-hackday-bringt-benefit-fuer-verwaltung) und [in der NRZ (Paywall)](https://www.nrz.de/staedte/moers-und-umland/offene-daten-das-passiert-beim-moerser-hackday-2023-id237689873.html).
Bilder vom Hackday gibt es [hier](https://wakelet.com/wake/4fVSKQ5YTfxB9BHOR8t2v).
Es lohnt sich auch im Nachhinein noch ein Blick ins Programm, die meisten [Vortragsfolien sind online](https://www.codeforniederrhein.de/hackday-2023/), eventuell kommt noch etwas nach.

### Rückblick auf die Open Data Days 2023
Anfang März fanden bundesweit die Open Data Days statt - die "wichtigsten Feiertage der Bubble". In zahlreichen Städten wurden Vorträge gehalten, Workshops veranstaltet und Interessierte tauschten sich aus. Ein kurzer Rückblick zeichnet ein positives Bild:
* In [Köln](https://offenedaten-koeln.de/blog/open-data-day-2023-sch%C3%B6n-war%C2%B4s) freuen sich die Veranstalter:innen über positives Feedback und eine ausgelassene Atmosphäre.
* Der eGovernment Podcast war in München vor Ort und [hat sich bei den Teilnehmenden umgehört](https://egovernment-podcast.com/egov130-oddmuc2023/). Mitschnitte der Vorträge sollen in naher Zukunft [auf YouTube](https://www.youtube.com/@muenchendigital/videos) zugänglich sein.
* Das OK Lab in Karsruhe [stellt die Folien der Vorträge zur Verfügung](https://ok-lab-karlsruhe.de/projekte/odd23/) (ganz unten auf der verlinkten Seite).
* In Leipzig wurde unter anderem das Klimadashbaord Sachsen vorgestellt. Auch Code for Leipzig war dabei und berichtete von vergangenen und neuen Projekten. Einen Rückblick zum Event inklusive Verlinkungen auf Vorträge gibt es [hier](https://danielgerber.eu/2023/03/13/klimadashboard-sachsen-beim-open-data-day-2023/).
* Im schönen Moers wurde nicht nur [fleißig fotografiert](https://wakelet.com/wake/4fVSKQ5YTfxB9BHOR8t2v), das gesamte Programm inklusive Votragsfolien gibt's [auf den Code for Niederrhein-Seiten](https://www.codeforniederrhein.de/hackday-2023/). Die Bertelsmann-Stiftung veröffentlichte ebenfalls [ein Resumee](https://www.bertelsmann-stiftung.de/de/unsere-projekte/daten-fuer-die-gesellschaft/projektnachrichten/hackday-2022-1).

## Veranstaltungen
 * Netzpolitischer Abend
     * Dienstag, 04.04.2023, 20:00, Berlin und online: https://digitalegesellschaft.de/2023/03/125-netzpolitischer-abend/
     * Donnerstag, 20.04.2023, 19:30, Zürich und online: https://www.digitale-gesellschaft.ch/event/netzpolitischer-abend-zu-digitale-selbstverteidigung-ein-irrweg/
 * Freitag, 07.04.2023 - Sonntag, 10.04.2023, Kampnagel (Jarrestraße 20, 22303 Hamburg): [EasterHegg20](https://eh20.easterhegg.eu/)
 * [OpenTransportMeetup](https://hackmd.okfn.de/opentransportmeetup)
     * Mittwoch, 05.04.2023, 20:00 Uhr - 21:30 Uhr: Tim Holthaus et al: Reisezeitmodellierung/ Routenwahl und Netzgestaltung
     * Mittwoch, 19.04.2023, 20:00 Uhr - 21:30 Uhr: Chris: Die 15-Minuten-Stadt
 * Failed yet successful: Learning from discontinued civic tech initiatives, Workshop at CHI’23 on April 23 or 28 2023, in Hamburg, Germany
     * https://discontinued-civictech.github.io/
     * https://discontinued-civictech.github.io/schedule
