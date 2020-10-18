---
layout: project
lab: [leipzig] #needed for Aggregation on Lab-Page
imgname: leipzig/schulinternet.jpg
title: Internetgeschwindigkeit in Sachsens Schulen
status: abgeschlossen

links:
- url: https://gitlab.com/gerbsen/internet-an-sachsens-schulen
  name: Page on Gitlab

collaborators:
- name: Daniel Gerbsen
  links:
  - url: https://github.com/gerbsen
    url-name: github

tags:
- Politik

---

Stellt Internetverbindungen von Schulen in Sachsen auf einer Karte dar und soll damit den weiteren Breitbandausbau vor allem im Bildungssektor anregen.


Nutzt [cheerio.js](https://cheerio.js.org) zum Scrapen der Web-Seiten, [fast-csv](https://www.npmjs.com/package/fast-csv) zum Parsen der CSV-Dateien und [fast-levenshtein](https://github.com/hiddentao/fast-levenshtein) für das Abgleichen der Schulnamen aus den unterschiedlichen Quellen nach Ähnlichkeit und schließlich [leaflet.js](https://leafletjs.com) zum Visualisieren der zuvor generierten GeoJSON-Datei auf einer Karte

Als zukünftige Erweiterung wäre denkbar, das Projekt mit [jedeschule.de](https://jedeschule.de) zu kombinieren (stellt Informationen über rund 30.000 allgemeinbildende Schulen in Deutschland maschinenlesbar bereit).