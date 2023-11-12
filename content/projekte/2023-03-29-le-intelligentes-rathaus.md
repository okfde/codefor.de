---
layout: project
lab: [leipzig]
imgname: leipzig/intelligentes_rathaus.jpg
title: Intelligentes Rathaus Leipzig
status: laufend

links:
- url: https://stadtratmonitor.codeforleipzig.de
  name: Webseite
- url: https://github.com/CodeforLeipzig/stadtratmonitor-scraper
  name: GitHub Repository (Scraper, Backend)
- url: https://github.com/CodeforLeipzig/stadtratmonitor-frontend
  name: GitHub Repository (Frontend)
- url: https://github.com/orgs/CodeforLeipzig/projects/2
  name: Kanban Board
- url: https://ratsinfo.leipzig.de
  name: Ratsinformationssystem Leipzig (Datenquelle)

collaborators:
- name: Erik Ortmann
  links:
  - url: https://github.com/ErikOrtmann
    name: github
- name: Lisa-Marie Steckel
  links:
  - url: https://github.com/vrifox
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

Das ursprüngliche [Projekt](https://codefor.de/projekte/le-ratskarte_leipzig/) wurde mit Ruby on Rails entwickelt und der Python-Scraper graste ursprünglich nur die HTML-Seiten des Ratsinformationssystems ab. Inzwischen wurde der Scraper auf die inzwischen vorhandene OPARL-Schnittstelle umgestellt, wobei einige Felder (z.B. Einreicher) weiterhin nur über die HTML-Seite der jeweiligen Vorlage abgreifbar ist.

Seit März 2023 wird an einer neuen Lösung entwickelt, die auf Neo4J und vorraussichtlich Vue.js basiert sowie einige Features integrieren möchte, die einerseits durch die im Machine Learning gemachten Fortschritte inzwischen möglich sind. Andererseits wollen wir auch den Ansatz weiterverfolgen, gut strukturierte Daten durch den Aufbau eines Wissensgraphen (Knowledge Graph / Linked Open Data) aus den OPAsw

Die Idee wurde zum [Leipzig Open Data Hackathon 2023](https://opendata.leipzig.de/de/pages/hackathon) im Rahmen der [Data Week Leipzig 2023](https://2023.dataweek.de/) eingereicht (siehe [Präsentation (pdf)](https://static.leipzig.de/fileadmin/mediendatenbank/leipzig-de/Stadt/02.1_Dez1_Allgemeine_Verwaltung/12_Statistik_und_Wahlen/Statistik/Open-Data/Hackathon-Poster_Team08.pdf)) und hat den 3. Platz in der Kategorie "Offenes Thema" erreicht (siehe [Video der Preisverleihung](https://youtu.be/_XohikUZRE4?t=11707)).

## Umsetzung
 * Daten werden mittels eines [Scrapers](https://github.com/CodeforLeipzig/stadtratmonitor-scraper) jeden Tag über einen CronJob über den [OParl](https://oparl.org)-[Endpunkt](https://ratsinfo.leipzig.de/bi/oparl/1.0/bodies.asp?id=2387) des vom [Leipzig Ratsinformationssystems](https://ratsinfo.leipzig.de/) als JSON-Daten gezogen
 * diese neuen Daten werden in eine Neo4J Datenbank importiert, von der sie über die Abfragesprache von Neo4J abgerufen werden können
