---
layout: project
lab: [leipzig] #needed for Aggregation on Lab-Page
imgname: leipzig/fancylvbot.png
title: fancyLVBot
status: laufend

links:
- url: https://t.me/fancyLVBot
  name: Telegram-Bot
- url: https://github.com/CodeforLeipzig/fancy_LVB_Telegram_Bot
  name: Page on Github
- url: https://gtfs.leipzig.codefor.de
  name: OpenTripPlanner-Instanz

collaborators:
- name: Maria Arndt
  links:
  - url: https://github.com/eisc
    url-name: github
- name: Jörg Reichert
  links:
  - url: https://github.com/joergreichert
    url-name: github
- name: Robert Schmidt
  links:
  - url: https://github.com/nucsum
    url-name: github
- name: Max Brauer
  links:
  - url: https://github.com/debvortex
    url-name: github

tags:
- Mobilität

---

Telegram-Chat-Bot, den man unter dem Namen "fancyLVBot" als Kontakt hinzufügen und nach der aktuellen Abfahrtzeiten fragen kann.

Unsere Zielgruppe sind Einheimische, die Streckenverbindung kennen und nur schnell und unkompliziert die nächsten Abfahrten ihrer Straßenbahn sehen wollen. Ein klassischer Anwendungsfall wäre, nach durchzechtem Abend die Abfahrt der letzten Bahn angezeigt zu bekommen.

Die Projekt-Idee wurde von Maria an uns herangetragen, die einen ähnlichen ChatBot bereits in Dresden gesehen hatte.

## Funktionen
 * Haltestellen-Suche nach Name
 * Nächste 10 Abfahrten für eine gewählte Haltestelle (Name der Linie, Abfahrt in Minuten ab jetzt, inklusive eventuell bekannter Verspätung)
 * Aktuellen Standort über Telegram mit Bot teilen, um die 5 nächstliegenden Haltestellen angeboten zu bekommen
 * Haltestellen als Schnellwahl in Favoritenliste speichern
 * Tages- und Nachtlinienplan Leipzigs als PDF herunterladen
 * Haltestellensuche auf Leipzig einschränkt oder auf gesamtes MDV-Gebiet

## Technische Umsetzung
 * NodeJS Anwendung, die das Framework [node-telegram-bot-api](https://github.com/yagop/node-telegram-bot-api) nutzt, um einen ChatBot für den [Telegram](https://telegram.org)-Messenger zu registrieren, der dann als Kontakt von jedem hinzugefügt werden kann
 * Nutzer-Eingaben werden über Reguläre Ausdrücke gematcht und in entsprechende Kommandos umgesetzt
 * mit den aktuellen MDV-Daten im [GTFS](https://gtfs.org/)-Format [gtfs_mdv.zip](https://www.mdv.de/site/uploads/gtfs_mdv.zip) hosten wir [hier](https://gtfs.leipzig.codefor.de) in einer [OpenTripPlanner](http://www.opentripplanner.org) Anwendung und stehen somit auch als REST-API zur Verfügung
 * des Weiteren nutzen wir das npm Package [lvb](https://www.npmjs.com/package/lvb) für die Live-Abfahrten-Abfrage

## Erweiterungsideen
 * Haltestellen zusammenfassen, die geografisch sehr nah beieinander liegen und logisch als ein Haltestellenpunkt betrachtet werden können
 * Unscharfe Suche (Fuzzy Search), um auch Haltestelle zu finden, wenn man sich verschrieben hat, bzw. nicht genauen Wortlaut der Haltestelle trifft
 * ChatBot aus anderen Chats heraus nutzen können
 * EasyGo API nutzen, da GTFS API nur statische Daten liefert und das lvb npm Package noch auf eine veraltete API geht, die nicht alle neuen Haltestellen enthält (deren Abfahrten werden aktuell noch aus den statischen GTFS Daten aufgefüllt, dort bekommt man dann aber keine aktuellen Verspätungen)
 * Abstraktion der API / eigene Server-Anwendung, um die Programm-Logik neben Telegram auch in anderen Chat-Anwendungen nutzen zu können
 * Weitere Aufgaben und Ideen finden sich [hier](https://github.com/eisc/fancy_LVB_Telegram_Bot/issues)