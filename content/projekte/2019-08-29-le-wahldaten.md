---
layout: project
lab: [leipzig] #needed for Aggregation on Lab-Page
imgname: leipzig/wahldaten.png
title: Wahlkreise in Sachsen
status: abgeschlossen

links:
- url: https://codeforleipzig.github.io/wahldaten/
  name: Website
- url: https://github.com/CodeforLeipzig/wahldaten
  name: Page on Github

collaborators:
- name: Jörg Reichert
  links:
  - url: https://github.com/joergreichert
    url-name: github

tags:
- Politik

---


Das Projekt hat sich zum Ziel gesetzt, die Wahlkreise in Sachsen zur Landtagswahl maschinenlesbar bereitstellen.


Da keine Shapefile mit den sächsischen Wahlkreisen gefunden werden konnte, sondern nur eine Aufstellung, welche PLZs zu welchen Wahlkreisen gehören, mussten die Shapes der PLZ-Gebiete programmatisch zu den Wahlkreis-Shapes zusammengemergt werden

Neben den PLZ- und Wahlkreise, werden auch die Gemeindegrenzen angezeigt

## Erweiterungsideen
 * für die Großstädte noch die Stadtteile mit als Shapes hinzufügen
 * die Wahlergebnisse beim Klick auf die einzelnen Gebiete als D3.js Grafik (Säulendiagramm, Tortendiagramm, Veränderungen) anzeigen lassen
 * Abgleich mit dem [OKF Wahldaten Projekt](https://github.com/okfde/wahldaten)
 * Wahldaten gemäß [Standard](https://offenewahldaten.de) bereitstellen und anzeigen
 * Inspirieren lassen von [Morgenpost Interaktiv](https://interaktiv.morgenpost.de/landtagswahl-2019-brandenburg-wahlkarte/)
