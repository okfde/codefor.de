---
layout: project
lab: [koeln] #needed for Aggregation on Lab-Page
imgname: koeln/wasser.png
title: Trinkwasser in Köln
status: wird jährlich aktualisiert

links:
- url: https://codeforcologne.github.io/trinkwasser/
  name: Webseite
- url: https://github.com/codeforcologne/trinkwasser
  name: Code

collaborators:
- name: Jakob Grosse
- name: Ingrid Bluoss
- name: Marcel Belledin

tags:
- Umwelt

---

Trinkwasser, wir alle nutzen es täglich. Es liegt daher nahe, sich über das Trinkwasser Gedanken zu machen und sich zu fragen: "Woraus setzt sich mein Trinkwasser zusammen und wie schneidet es im Vergleich mit gängigem Mineralwasser ab?"

Diese Frage haben sich auch Civic Tech Aktivisten von Code For Germany gestellt und so ist 2014 die Trinkwasser-App im OK Lab Code for Heilbronn entstanden. Diese Idee ist von den Kölner Civic Tech Aktivisten aufgegriffen worden und das Ursprungprojekt von Code for Heilbronn ist während mehrerer OK Lab Köln Arbeitstreffen für den Gebrauch in Köln adaptiert worden. 

Die Kölner Trinkwasser-App war ein Projekt, dass aufgrund von zeitlichen und infrastrukturellen Ressourcenmangel lange nicht verfügbar war. 2023 hat dann Jabkob der Anwendung wieder Leben eingehaucht. Leider waren die ursprünglichen Kölner Ressourcen nicht mehr verfügbar und es mußte auf dem Ursprungsprojekt aufgesetzt werden. Seitdem achten wir mehr darauf, die Sourcen in unserem [codeforcologne GIT](https://github.com/codeforcologne) vorzuhalten. 

Trinkwassermessdaten wurden und werden bisher nicht in einem maschinenlesbaren Open Data Standard-Format über eine API veröffentlicht, sondern müssen händisch extrahiert und übertragen werden.

Aktuelle Trinkwasser-Messwerte können über eine Webanwendung des Landes NRW ( https://www.elwasweb.nrw.de ) entnommen werden. Über das Menü "Karte" >> Themenbaum "Trinkwasser & Wasserversorgung" >> "Versorgungsgebiete" werden die  Versorgungsgebiete des Landes NRW aufgezeigt. Über einen Sachdatenaufruf können Trinkwasser-Messwerte von Messstellen abgerufen werden. 

Messwerte für ein Versorgungsgebiet werden jedoch sowohl bei den verschiedenen Wasserwerken, als auch an mehreren Messprobeentnahmestellen entnommen. Eine Konsolidierung dieser Werte ist daher schwierig und schlägt sich in starken Standardabweichungen nieder. So variieren zum Beispiel die Natrium Messwerte für den Bereich Köln Ost im Jahre 2020 stark:

- Minimum: 12,9000
- Maximum: 33,8000
- Durchschnitt: 24,4550

Bei Interesse an diesem und anderen Themen heißt das OK-Lab Köln alle Interessierten herzlich willkommen.
