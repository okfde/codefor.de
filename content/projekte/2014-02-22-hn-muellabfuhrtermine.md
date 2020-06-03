---
layout: project
lab: [heilbronn] #needed for Aggregation on Lab-Page
imgname: heilbronn/recycling-map.png
title: Recyclinghof-Finder
status: Sucht Mitmacher

links:
- url: http://recycling.gonam.de/
  name: Website
- url: https://github.com/opendatalab-de/recycling-map
  name: Page on Github

collaborators:
- name: Simon
  links:
  - url: https://gist.github.com/GityUpNow
    name: github
- name: Adrian Stabiszewski
  links:
  - url: https://twitter.com/nitegate
    name: twitter
  - url: https://github.com/grundid
    name: github
- name: Robin Schuster
- name: Marco Weiß
- name: Felix Ebert
  links:
  - url: https://twitter.com/femeb
    name: twitter
  - url: https://github.com/felixebert
    name: github

tags:
- Umwelt
- Gesellschaft

---

Mobiloptimierte Karte aller Recyclinghöfe im Stadt- und Landkreis Heilbronn + Kalender-Dateien (ICS) nach Wohnort mit den Müllabfuhrterminen zum Download in den eigenen Kalender.

Alle Recyclinghöfe werden regelmäßig von der Webseite von Heilbronn und dem Landkreis Heilbronn gescraped, um stets aktuelle Daten zu haben. Der Scraper für die Recyclinghöfe von Heilbronn [läuft auf morph.io](https://morph.io/GityUpNow/heilbronn_amenityOpeningHours_scraper).

Langfristige Idee ist ein kompletter Abfall-Ratgeber mit Kontakt zu Hilfsorganisationen zu gebrauchten Gütern etc.

Um die Müllabfuhrtermine auch aus anderen Stadt- und Landkreisen maschinenlesbar zu erhalten wird aktuell auch [ein Scraper entwickelt](https://github.com/opendata-heilbronn/garbage-collection), der Müllabfuhrpläne im PDF-Format scrapen kann.
