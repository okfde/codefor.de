---
layout: project
lab: [leipzig] #needed for Aggregation on Lab-Page
imgname: leipzig/kieznotiz.png
title: KiezNotiz Leipziger Osten
status: abgeschlossen

links:
- url: https://kieznotiz.codeforleipzig.de/
  name: Stadtteilplattform (Grafana-Dashboard)
- url: https://codeforleipzig.github.io/kieznotiz/
  name: Karte der Akteure in Neustadt-Neuschönefeld und Volkmarsdorf
- url: https://github.com/CodeforLeipzig/kieznotiz/
  name: Page on Github
- url: https://leipziger-ecken.de/jsonapi/
  name: leipziger-ecken.de JSON API

collaborators:
- name: Jörg Reichert
  links:
  - url: https://github.com/joergreichert
    url-name: github
- name: Matthias Petzold
  links:
  - url: https://github.com/videomatze
    url-name: github
- name: Johannes Heynold
  links:
  - url: https://studio-johey.de/
    name: website

tags:
- Gesellschaft

---

Dieses Projekt ist in Zusammenarbeit mit [Leipziger](https://leipziger-ecken.de/) / [FabLab Leipzig](http://www.fablab-leipzig.de) sowie [Studio Johey](https://studio-johey.de/) für den Aufbau eines [Wissenschaftsladens](http://hybridartlab.de/workshops-2/) entstanden.

In einem Schaufenster sollen die Akteure im Kiez (speziell die Stadtteile Neustadt-Neuschönefeld und Volkmarsdorf im Leipziger Osten) sowie aktuelle Veranstaltungen vorgestellt werden.

Zudem sind weitere Themen-spezifische Dashboards denkbar, wie z.B. schon zur Langen Nacht der Wissenschaft am 16.7. für die Live-Visualisierung von Luftqualitätsmessdaten während eines Spaziergangs, wie [hier](https://mobile.twitter.com/_hanwong/status/1415685957043449863/photo/1) dokumentiert.

Die Umsetzung erfolgt mit [Grafana](https://grafana.com) in dem die [JSON API](https://leipziger-ecken.de/jsonapi/) der Stadtteilplattform [Leipziger Ecken](https://leipziger-ecken.de/) als DataSource eingebunden wird. Die Datensätze zu aktuellen Veranstaltungen werden aus dieser DataSource über das [Dynamic Test Plugin](https://grafana.com/grafana/plugins/marcusolsson-dynamictext-panel/) mit Wiki-Syntax innerhalb eines Panel im Dashboard gerendet.

Ähnlich erfolgte die Anbindung der Wetter-Daten von [openweathermap.org](https://openweathermap.org/). Die Karte der Akteure wird auch aus der JSON API abgeleitet, hier wird aber eine GeoJSON über eine periodisch laufende GitHub-Action neu erzeugt, und sofern Änderung zum letzten Stand bestehen, committet. Die [Leaflet-Karte](https://codeforleipzig.github.io/kieznotiz/) wird als IFrame in einem weiteren Panel im Grafana-Dashboard eingebunden. Der Marker springt aller 10 Sekunden zum nächsten Akteur, der vorgestellt werden soll.

Für die Visualisierung von Luftqualitätsmessdaten wurde die Daten über eine InfluxDB-DataSource empfangen und über das [Trackmap Panel](https://grafana.com/grafana/plugins/pr0ps-trackmap-panel/) eine direkte Relation zwischen kontinuierlicher Standortauffassung auf der Karte und den jeweils gemessenen Werten der verschiedenen Sensoren im Mess-Rucksack in den jeweiligen Diagrammen hergestellt.

## Erweiterungsideen
 * Anzeige der Live-Abfahrtszeiten der Straßenbahnen in der Nähe (https://gtfs.codeforleipzig.de/ und/oder LVB formdata API als Quelle)
 * Anbinden der Daten privater Sensor-Messstationen von sensor.community und opensensemap.org (Quelle wäre https://github.com/earthobservations/luftdatenpumpe/)
 * Statt die Links zu den Akteuren / Events anzuzeigen, könnte man vielleicht auch QR-Codes generieren. Macht sich am Schaufenster wahrscheinlich besser.
 * weitere Themen-Dashboards, z.B. zu den geplanten [Superblocks](https://www.oekoloewe.de/nachhaltige-mobilitaet-stadtentwicklung-detail/leipziger-superblocks.html)