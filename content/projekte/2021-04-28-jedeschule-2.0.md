---
layout: project
lab: 
  - berlin
imgname: berlin/jedeschule.png
title: jedeschule.de API
status: Abgeschlossen, wöchentliche Datenaktualisierung

links:
- url: https://jedeschule.codefor.de/docs
  name: API
- url: https://jedeschule.codefor.de/csv-data/
  name: CSV Dumps

collaborators:
- name: Knut Perseke
- name: Matthias Jacob
- name: Knut Hühne

tags:
- Gesellschaft

---


[jedeschule.de](https://jedeschule.de/) startete 2015 als Projekt der Open Knowledge Foundation Deutschland in Zusammenarbeit mit dem Verein
BildsungsCent e.V.. Ziel war es, alle Schulen Deutschlands auf einer Platform zu sammeln. Da die Bundesländer ihre Schuldaten
alle unterschiedlich veröffentlichen, mussten dafür WebScraper und Adapter individuell für jedes Bundesland geschrieben werden.

Nachdem das Projekt einige Jahre nicht weiterentwickelt wurde, veralteten die Daten zunehmend und die Scraper begannen, nicht mehr zu
funktionieren. Daher haben wir uns ab 2020 in kleiner Runde zusammengesetzt, die Scraper aktualisiert und eine wöchentliche 
Scraping-Pipeline aufgesetzt. Jetzt stellen wir eine zentrale API und wöchentliche CSV-Dumps der Schuldaten bereit.
