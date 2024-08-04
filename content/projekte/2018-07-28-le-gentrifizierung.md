---
layout: project
lab: [leipzig] #needed for Aggregation on Lab-Page
imgname: leipzig/gentrifizierung.jpg
title: Gebäude-Entwicklung in Leipzig
status: abgeschlossen

links:
- url: https://codeforleipzig.github.io/Gentrification/buildings.html
  name: Website
- url: https://github.com/CodeforLeipzig/Gentrification
  name: Page on Github

collaborators:
- name: Jörg Reichert
  links:
  - url: https://github.com/joergreichert
    url-name: github

tags:
- Gesellschaft

---

Leipzig ist eine stark wachsende Stadt, was sich entsprechend im Haus- und Wohnungsbau niederschlägt.


Dieses Projekt möchte das zunehmende Schließen von Baulücken und Wachstum an den Rändern in Leipzig über die letzten Jahre dokumentieren (generell, wie sich das Gesicht der Stadt verändert).

Alle Polygone, die mit "building" getaggt sind wurden aus alten OpenStreetMap-Ständen, verfügbar auf [Geofabrik](http://download.geofabrik.de/europe/germany/sachsen.html) unter raw directory index) als GeoJSON Dateien ausgelesen (geografisch eingeschränkt auf die BoundingBox von Leipzig)

Über das obere rechte Menü kann man nun die Gebäude-Polygone der verschiedenen Jahre ein- und ausblenden, sowie die Luftbildaufnahme von 2014 oder 2018 anzeigen, um so sehen zu können, wo Dinge neu gebaut (bzw. in OSM eingepflegt) wurden

## Erweiterungsideen
 * Mit [baustelle-leipzig.de](http://www.baustelle-leipzig.de) verschneiden
 * mit offiziellen Bebauungsplänen abgleichen
 * recherchieren, welche Immobilienfirma für den Bau verantwortlich war
 * Mietpreise / Immobilienpreise recherchieren
 * Weiterführen im Sinne von einundleipzig.de, um die zunehmende Gentrifizierung in Leipzig zu thematisieren
 * Daten (Satelliten-Aufnahmen, Daten aus OpenStreetMap) aktuell halten