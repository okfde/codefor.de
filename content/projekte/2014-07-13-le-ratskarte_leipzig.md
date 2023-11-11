---
layout: project
lab: [leipzig]
imgname: leipzig/stadtratmonitor.jpg
title: Stadtratmonitor Leipzig
status: abgeschlossen

links:
- url: https://stadtratmonitor.leipzig.codefor.de/
  name: Webseite
- url: https://ratsinfo.leipzig.de
  name: Ratsinformationssystem Leipzig (Datenquelle)
- url: https://github.com/CodeforLeipzig/allris-scraper
  name: GitHub Repository (Scraper)
- url: https://github.com/CodeforLeipzig/allris-scraper/actions
  name: Scraper executed periodically as Github action
- url: https://github.com/CodeforLeipzig/stadtratmonitor
  name: GitHub Repository (Frontend)

collaborators:
- name: Lars Mai
  links:
  - url: https://github.com/lhm
    name: github
- name: Andreas Haller
  links:
  - url: https://github.com/ahx
    name: github
- name: Martin Stoffers
  links:
  - url: https://github.com/drake81
    name: github
- name: Jörg Reichert
  links:
  - url: https://github.com/joergreichert
    name: github

tags:
- Politik

---

Durchsuche das Ratsinformationssystem der Stadt Leipzig und abboniere deine Suchergebnisse!


Durchsuche das Ratsinformationssystem der Stadt
Leipzig per Volltextsuche oder über detailierte Filter. Abonniere deine Suche als Newsfeed um über neue Beschlüsse, Anträge, Anfragen usw., die zu deiner Suche passen, auf dem Laufenden zu bleiben.

## Umsetzung
 * Daten werden mittels eines [Scrapers](https://github.com/CodeforLeipzig/allris-scraper) jeden Tag über einen CronJob über den [OParl](https://oparl.org)-[Endpunkt](https://ratsinfo.leipzig.de/bi/oparl/1.0/bodies.asp?id=2387) des vom [Leipzig Ratsinformationssystems](https://ratsinfo.leipzig.de/) als JSON-Daten gezogen
 * diese neuen Daten werden in eine SQLite Datenbank importiert, von der sie wiederum über ActiveRecords in einen ElasticSearch-Server importiert und dort indiziert werden

## Erweiterungsideen
 * Karte mit geolokalisierten Papers bauen analog zu [München Transparent](https://www.muenchen-transparent.de)
 * Beschlussstatus der einzelnen Vorlagen expliziter machen (also ob beschlossen, geändert beschlossen, oder abgelehnt), analog zu [Citygraph](https://github.com/sascha11110/hackatum-citygraph) (alternativ vielleicht auch in Form eines Kanban-Boards)
 * PDF-Dokumente scrapen und durchsuchbar machen (z.B. mit [givemetext](http://givemetext.okfnlabs.org))
 * Mobiltelefon-fähig machen (aktuell wird auf die Artikel in der Original-Seite verlinkt, die sind aber nicht mobil-fähig)
 * Karte mit Stadtbezirksräten und Ortschaftsräten (Adresse + nächstes angesetztes Treffen + Protokoll vom letzten Treffen)
 * Personen bei Einreichern verlinken
 * Harmonisieren der Einreicher-Namen (z.B. SR, Stadtrat, Stadträtin, Name ausgeschrieben, abgekürzt, usw.), eventuell kann man dazu das Tool [OpenRefine](http://openrefine.org) nutzen
 * Wordle generieren aus häufigen Worten in den Vorlagen (Zeitraum-basiert)
 * Statistische Auswertungen (meiste Antragssteller, usw.) (grafisch)
 * [Amtsblatt](https://www.leipzig.de/buergerservice-und-verwaltung/stadtverwaltung/amtsblatt/) verlinken
 * [Livestream](https://www.l-iz.de/tag/livestream) aus Stadtrat verlinken und taggen
 * [Politik bei uns](https://politik-bei-uns.de) und [Meine Stadt transparent](https://meine-stadt-transparent.de) sind ähnliche Projekte, inzwischen ist auch [Leipzig transparent](https://leipzig-transparent.de) als Ableger entstanden