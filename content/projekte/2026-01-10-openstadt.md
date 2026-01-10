---
layout: project
lab: [berlin, hamburg, frankfurt, koeln, muenchen, mannheim, darmstadt]
imgname: openstadt.png
title: OpenStadt - Infrastruktur-Equity für deutsche Städte
showcase: true
status: Laufend

links:
- url: https://openstadt.org
  name: Website
- url: https://github.com/level09/openstadt
  name: GitHub

collaborators:
- name: Nidal Alhariri
  links:
  - url: https://github.com/level09
    name: github

tags:
- Stadtentwicklung
- Open Data
- OpenStreetMap
- Infrastruktur

---

OpenStadt visualisiert öffentliche Infrastruktur (Spielplätze, Schulen, Kindergärten, Recycling) in deutschen Städten und berechnet Equity-Scores, um unterversorgte Stadtteile zu identifizieren.

Die Plattform nutzt OpenStreetMap-Daten und zeigt auf einer interaktiven Karte, wo Einrichtungen fehlen. Der Equity-Score vergleicht jeden Stadtteil mit dem Stadtdurchschnitt: Unter 50% bedeutet stark unterversorgt.

Aktuell verfügbar für Berlin, Hamburg, Frankfurt, München, Köln, Mannheim und Darmstadt. Weitere Städte können einfach über YAML-Konfigurationsdateien hinzugefügt werden.

**Features:**
- Interaktive Karte mit Bezirksgrenzen und POI-Markern
- Analytics-Dashboard mit Equity-Scores pro Stadtteil
- Vergleich verschiedener Infrastruktur-Ebenen
- Abdeckungs-Analyse zeigt Versorgungslücken
- Open Source (Flask, Vue.js, Leaflet)
