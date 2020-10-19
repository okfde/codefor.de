---
layout: project
lab: [leipzig] #needed for Aggregation on Lab-Page
imgname: leipzig/woistmarkt.jpg
title: Wo ist Markt?
status: abgeschlossen

links:
- url: http://wo-ist-markt.de/#leipzig
  name: Wo ist Markt in Leipzig?
- url: https://github.com/wo-ist-markt/wo-ist-markt.github.io
  name: Code auf Github

collaborators:
- name: Martin Stoffers
  links:
  - url: https://github.com/drake81
    name: github

tags:
- Umwelt

---

Wo ist gerade Wochenmarkt in Leipzig auf einer Karte dargestellt. Man kann für den aktuellen Tag filtern oder alle anzeigen. Die gerade stattfindenden Märkte werden grün gekennzeichnet.


## Umsetzung
 * Technologie: HTML, Javascript, Leaflet
 * Web-Anwendung nicht von uns in Leipzig entwickelt, wir haben nur die folgende JSON-Datei bereitgestellt
 * um Änderungen nach zutragenm ist [diese Datei](https://github.com/CodeforLeipzig/wo-ist-markt.github.io/blob/master/cities/leipzig.json) editieren (am besten auf einen eigenen Branch) und anschließend einen Pull-Request gegen das Haupt-Repo stellen
 * um Änderungen nicht manuell nachtragen zu müssen, gibt es jetzt auch einen Javascript-basierten [Scraper](https://github.com/CodeforLeipzig/wo-ist-markt-scraper) für die Leipziger Behörden-Seite, der eben diese JSON-Datei als Ergebnis erzeugt
 * der Scraper nutzt [cheerio.js](https://github.com/cheeriojs/cheerio) für das Navigieren im DOM und [nunjucks](https://mozilla.github.io/nunjucks/) als Templating-Engine

## Erweiterungsideen
 * Kombinieren mit [farmshops.eu](https://farmshops.eu)
 * Weitere Städte in der Region erfassen
