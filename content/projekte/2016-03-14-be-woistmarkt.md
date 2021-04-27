---
layout: project
lab: [berlin] #needed for Aggregation on Lab-Page
imgname: berlin/wo-ist-markt.png
title: Wo ist Markt?
showcase: true
status: Finished

links:

- url: http://wo-ist-markt.de
  name: Wo ist Markt?

- url: https://github.com/wo-ist-markt/wo-ist-markt.github.io
  name: Code auf Github

collaborators:
- name: Tobias Preuss
  links:
  - url: https://github.com/johnjohndoe
    name: GitHub

- name: Knut Hühne
  links:
  - url: https://github.com/k-nut
    name: GitHub

- name: Gerald Pape
  links:
  - url: https://github.com/ubergesundheit
    name: GitHub

- name: Alexander Wunschik
  links:
  - url: https://github.com/mojoaxel
    name: GitHub

tags:
- Umwelt

---

Dieses Projekt visualisiert auf einer Karte wo gerade Wochenmarkt, Flohmarkt oder Gemüsemarkt ist.
Über die Detailinformationen erfährst du, wann Markt ist. Über das Menü kannst du auswählen,
ob alle Märkte angezeigt werden sollen oder nur die, die aktuell bzw. heute stattfinden.

# Mitmachen

Nachdem das Projekt in [Karlsruhe](https://codefor.de/projekte/ka-woistmarkt/) gestartet wurde,
ist es nun auch mit Daten aus vielen anderen Städten verfügbar. Es ist sehr einfach,
eine neue Stadt hinzuzufügen oder die "Datenpatenschaft" für eine existierende Stadt zu übernehmen.
Schau einfach in dieser [Kurzanleitung](https://github.com/wo-ist-markt/wo-ist-markt.github.io/blob/master/CONTRIBUTING.md)
nach, wie das geht. Wenn du Lust hast, kannst du auch das Design oder den Code der Webseite
verbessern oder neue Funktionen hinzufügen. Wir nutzen HTML, CSS, JavaScript und ein paar
[Bibliotheken](https://github.com/wo-ist-markt/wo-ist-markt.github.io/blob/master/package.json),
um die Marktdaten in ein passendes Format umzuwandeln und dann anzuzeigen. Wenn du einen Fehler auf der Seite
findest, freuen wir uns über einen [Issue](https://github.com/wo-ist-markt/wo-ist-markt.github.io/issues)
oder [Pull Request](https://github.com/wo-ist-markt/wo-ist-markt.github.io/pulls) von dir.

# Berliner Märkte

Die Markt-Daten für Berlin laden wir aus dem [Berliner Open-Data-Portal](https://daten.berlin.de).
Wir nutzen [dieses Skript](https://github.com/wo-ist-markt/wo-ist-markt.github.io/blob/master/preprocessing/berlin/compile-berlin-geojson.js),
um die Daten in das passende Format umzuwandeln. Außerdem kontrolliert [dieses Skript](https://github.com/wo-ist-markt/wo-ist-markt-berlin-update-reminder)
einmal täglich, ob es neue Daten im Open-Data-Portal gibt. Alle weiteren Informationen zum
Projekt kannst du im [README](https://github.com/wo-ist-markt/wo-ist-markt.github.io/blob/master/README.md)
nachlesen oder du fragst [uns](https://github.com/wo-ist-markt/wo-ist-markt.github.io/graphs/contributors)
einfach persönlich.

# Andere OK-Labs

In folgenden Labs gibt es weitere Projektseiten:

* [Code for Karlsruhe / Wo ist Markt?](https://codefor.de/projekte/ka-woistmarkt/)
* [Code for Leipzig / Wo ist Markt?](https://codefor.de/projekte/le-woistmarkt/)
