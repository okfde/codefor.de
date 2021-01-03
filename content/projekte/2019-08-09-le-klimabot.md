---
layout: project
lab: [leipzig] #needed for Aggregation on Lab-Page
imgname: leipzig/klimabot.png
title: Klimabot
status: abgeschlossen

links:
- url: https://codeforleipzig.github.io/wahldaten/
  name: Website
- url: https://gitlab.com/gerbsen/climatebot
  name: Page on Gitlab (Backend)
- url: https://gitlab.com/gerbsen/climatebot-ui
  name: Page on Gitlab (Frontend)

collaborators:
- name: Daniel Gerbsen
  links:
  - url: https://gitlab.com/gerbsen/
    url-name: gitlab
- name: Max Brauer
  links:
  - url: https://github.com/debvortex/
    url-name: github

tags:
- Umwelt

---

Bot, der auf natürlich-sprachige Fragen rund um den Klimawandel mit Fakten antwortet, Z.B. "Wie viel Tonnen CO2 wurden 2012 in Sachsen emittiert?" - "47,5 Tonnen CO2"


## Umsetzung
 * Backend:
   * Python, Flask
   * [snips-nlu](https://github.com/snipsco/snips-nlu) als Machine Learning Library zum automatischen Matchen von eingegebenen Fragen zum Klimawandel auf vorgefertigte Frage-Antworte-Paarungen
   * Python-Wikipedia-Library für die Bedienung von Was-ist-Fragen
 * Frontend: React

## Wie unterstützen?
 * Fragen-Antworten-Katalog erweitern
 * Bot mit Beispiel-Eingaben trainieren
