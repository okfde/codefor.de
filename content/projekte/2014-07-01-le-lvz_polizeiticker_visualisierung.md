---
layout: project
lab: [leipzig] #needed for Aggregation on Lab-Page
imgname: leipzig/polizeiticker.jpg
title: Visualisierung der Polizeiticker Meldungen der Leipziger Volkszeitung
status: abgeschlossen

links:
- url: https://lvz-viz.leipzig.codefor.de/
  name: Website
- url: http://www.lvz-online.de/leipzig/polizeiticker/r-polizeiticker.html
  name: Datenquelle
- url: https://github.com/CodeforLeipzig/lvz-viz
  name: GitHub Repository

collaborators:
- name: Sebastian Peters
  links:
  - url: https://github.com/sepe81
    name: github
- name: Ricardo Usbeck
  links:
  - url: https://github.com/RicardoUsbeck
    name: github
- name: Lars Wesemann
  links:
  - url: https://github.com/spinner0815
    name: github
- name: Manuel Stößel
  links:
  - url: https://github.com/ManuPogo
    name: github

tags:
- Gesellschaft

---

Eine Weboberfläche zur Visualisierung von Tickermeldungen aus der Leipziger Volkszeitung samt Crawler, Named Entity Recognition, Elastic Search und LeafletJS.


## Umsetzung
 * die Server-seitige Anwendung ist in Java Spring Boot geschrieben
 * von dieser [LVZ-Seite](http://www.lvz.de/Leipzig/Polizeiticker/Polizeiticker-Leipzig) werden vom CronJob die Artikel gescrapt und in einen [ElasticSearch](https://www.elastic.co/de/elasticsearch/) Index geladen
 * aus dem Text des Artikels werden mittels [Named-Entity-Recognition-(NER)-Bibliothek](https://nlp.stanford.edu/software/CRF-NER.shtml) potenziell geolokalisierbare Namen extrahiert
 * gegen [Nominatim](https://nominatim.openstreetmap.org/) werden diese Namen in Geokoordinaten aufgelöst
 * das Frontend ist in [AngularJS]((https://angularjs.org)) 1! programmiert und nutzt [Leaflet](https://leafletjs.com) als Plugin für die Kartendarstellung (darüber wird auch die Heatmap unterstützt)
 * das Frontend kommuniziert über REST-Aufrufe mit dem Backend, um Suchanfragen, Blättern in den Suchergebnissen darstellen zu können

## Wie unterstützen?
 * AngularJS 1 auf die letzte Version (z.B. 7) aktualisieren oder gleich ein anderes Frontend-Framework (z.B. [Vue.js](https://vuejs.org)) benutzen
 * Geolokalisierung aus den Texten heraus ist nicht immer richtig, deswegen sollte es die Möglichkeit, über das UI die Geo-Marker nachträglich manuell permanent umzusetzen (vielleicht sogar als Crowd sourcing realisierbar)
 * Beidseitig Verlinkung von Text auf Marker und von Marker auf Text, momentan wird nur Popup angezeigt
 * Taggen / Kategorisieren von Artikeln (Verbrechen) durch die Nutzer ermöglichen
 * [Accordion-Widget](https://api.jqueryui.com/accordion/#entry-examples) nutzen, um Platz in Artikel-Leiste zu sparen
 * statt die LVZ-Seite direkt den offziellen [Ticker der Leipziger Polizei](https://www.polizei.sachsen.de/de/medieninformationen_pdl.htm) scrapen