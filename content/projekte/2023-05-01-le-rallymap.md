---
layout: project
lab: [leipzig]
imgname: leipzig/rallymap.jpg
title: Leipzig Rally Map
status: abgeschlossen

collaborators:
- name: Marvin Frommhold
  links:
  - url: https://github.com/depressiverobot
    name: GitHub
- name: Jörg Reichert
  links:
  - url: https://github.com/joergreichert
    name: GitHub


links:
- url: https://codeforleipzig.github.io/rallymap
  name: Website
- url: https://github.com/CodeforLeipzig/rallymap
  name: Code auf Github

tags:
- Gesellschaft
---

Das Projekt Rally Map (vormaliger Name war Mobmap 🙂) stellt das Versammlungsgeschehen in Leipzig auf einer interaktiven Karte dar. Dabei werden die Orte und Straßen, auf den Versammlungen stattfinden, farblich markiert. Mit einem Klick auf eine Markierung werden Informationen wie etwa Thema/Motto, Art, Datum und Zeitraum der Versammlung angezeigt.

Die Idee wurde zum [Leipzig Open Data Hackathon 2023](https://opendata.leipzig.de/de/pages/hackathon) im Rahmen der [Data Week Leipzig 2023](https://2023.dataweek.de/) eingereicht (siehe [Präsentation (pdf)](https://static.leipzig.de/fileadmin/mediendatenbank/leipzig-de/Stadt/02.1_Dez1_Allgemeine_Verwaltung/12_Statistik_und_Wahlen/Statistik/Open-Data/Hackathon-Poster_Team10.pdf)) und hat den 2. Platz in der Kategorie "Offenes Thema" erreicht (siehe [Video der Preisverleihung](https://youtu.be/_XohikUZRE4?t=11294)).

Die Beispiel-Datensätze für März und Juni stammen von der [Leipziger Versammlungsbehörde](https://www.leipzig.de/versammlung). Die Hoffnung ist, dass diese Daten auch im OpenData-Portal der Stadt proaktiv veröffentlicht werden (und zwar mit Geo-Koordinaten statt uneindeutigen textuellen Stationsangaben).

Technisch wurden die Routen jeweils mit dem [OpenRouteService](https://openrouteservice.org/) (aus den manuell aus den textuellen Stationsangaben bestimmten Geo-Koordinaten) berechnet.
