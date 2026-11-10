---
layout: project
lab: [berlin] #needed for Aggregation on Lab-Page
imgname: berlin/fis-broker.jpg
title: Daten aus dem Geoportal Berlin

links:
- url: https://maps.berlin.codefor.de
  name: maps.berlin.codefor.de
- url: https://luftbilder.berlin.codefor.de
  name: luftbilder.berlin.codefor.de

collaborators:
- name: Jochen Klar
  links:
  - url: https://github.com/jochenklar
    name: github

tags:
- Umwelt

---

Berlin veröffentlicht zahlreiche Geodaten unter offenen Lizenzen über das [Geoportal Berlin](https://gdi.berlin.de). Wir haben Teile der Daten aufbereitet und stellen sie als Kacheln bereit, die sich direkt in Webkarten oder in Editoren wie JOSM und iD einbinden lassen. Dazu gibt es zwei Webseiten, über die sich die Daten ohne Vorwissen erkunden lassen.

Auf [maps.berlin.codefor.de](https://maps.berlin.codefor.de) findet man eine Übersicht aller Karten: historische Stadtpläne von 1650 bis 1986, den Hobrechtplan von 1862, den Straubeplan von 1910, die Karte der Gebäudeschäden 1945, das Gebäudealter und vieles mehr. [luftbilder.berlin.codefor.de](https://luftbilder.berlin.codefor.de) konzentriert sich auf Luftbilder Berlins aus fast hundert Jahren, von 1928 bis heute. So lässt sich nachvollziehen, wie Straßen, Plätze und ganze Stadtteile entstanden, zerstört und wieder aufgebaut wurden.

Die beiden Webseiten basieren auf [maps](https://github.com/jochenklar/maps), einer wiederverwendbaren Web-App zum Vergleich von Kachelkarten. Der Bildschirm lässt sich in mehrere Bereiche teilen, die sich gemeinsam bewegen und zoomen, sodass sich etwa ein Luftbild von 1928 direkt neben einem aktuellen betrachten lässt. Eine Ortssuche und teilbare Links gehören dazu.

Gehosted werden die Karten auf [tiles.codefor.de](https://tiles.codefor.de). Die Kacheln erzeugt die [gdal-tiles-api](https://github.com/codeforberlin/gdal-tiles-api), ein kleiner Server auf Basis von [GDAL](https://gdal.org).
