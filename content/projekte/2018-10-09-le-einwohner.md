---
layout: project
lab: [leipzig] #needed for Aggregation on Lab-Page
imgname: leipzig/einwohner.png
title: Einwohner-Daten Leipzig
status: abgeschlossen

links:
- url: https://codeforleipzig.github.io/opendata-leipzig-playground/
  name: Website
- url: https://github.com/CodeforLeipzig/opendata-leipzig-playground/
  name: Page on Github
- url: https://github.com/CodeforLeipzig/opendata-leipzig-playground/tree/master/docs
  name: Einzeldateien

collaborators:
- name: Jörg Reichert
  links:
  - url: https://github.com/joergreichert
    url-name: github

tags:
- Gesellschaft

---

Dieses Projekt ist entstanden für ein Schritt-für-Schritt-Tutorial für das Erstellen von Karten-Anwendungen mit Leaflet.


Jede der enthaltenen HTML-Dateien lässt sich einzeln im Browser öffnen, sie sind aber dazu gedacht im einfachen Text-Editor geöffnet und bearbeitet zu werden, sie enthalten Kommentare und austauschbare Teile, mit denen man den Umgang mit Leaflet lernen kann (nach Speichern der Änderungen sieht man deren Auswirkungen direkt im Browser)

Als Grundage dienen die Shape-Daten und die statistischen Daten des [OpenData Portals Leipzig](http://opendata.leipzig.de)

Die Stadt Leipzig bietet inzwischen selbst ein [Dashboard Bevölkerungsentwicklung](https://www.leipzig.de/buergerservice-und-verwaltung/unsere-stadt/statistik-und-zahlen/einwohner-und-bevoelkerungsentwicklung/) an.

## Erweiterungsideen
 * Weitere Redeployments für andere Städte wie bereits für Wuppertal ([GitHub](https://github.com/joergreichert/GeohackDesGutenLebens) / [Webseite](https://joergreichert.github.io/GeohackDesGutenLebens/)) und Moers ([GitHub](https://github.com/joergreichert/hackday-moers-2019) / [Webseite](https://joergreichert.github.io/hackday-moers-2019/)) geschehen
 * Legende generisch aus der Werte-Spanne der errechnen lassen
 * Javascript-Code in wiederverwendbare Dateien extrahieren
 * Auswahlbox für dynamische Attributauswahl, so dass nicht nur Einwohnerdaten sondern andere Daten anzeigbar sind
 * Andere Visualisierungen (z.B. Kuchendiagramm) je nach Attributauswahl
 * Radarchart aus Moers-Redeployment mit Auswahl von höchstens 3 Attributen auf einmal und mit Karte in Beziehung setzen
