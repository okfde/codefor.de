---
layout: project
lab: [leipzig] #needed for Aggregation on Lab-Page
imgname: leipzig/leipziggiesst.png
title: Leipzig giesst
status: laufend

links:
- url: https://www.leipziggiesst.de/
  name: Webseite
- url: https://app.leipziggiesst.de/
  name: WebApp
- url: https://play.google.com/store/apps/details?id=webviewgold.leipziggiesst
  name: Google Playstore
- url: https://apps.apple.com/de/app/leipzig-gießt/id6443637713?platform=iphone
  name: Apple App Store
- url: https://github.com/CodeforLeipzig/leipziggiesst
  name: Page on Github

collaborators:
- name: Jörg Reichert
  links:
  - url: https://github.com/joergreichert
    url-name: github

tags:
- Umwelt

---

Auf dieser Plattform kannst Du Dich über Bäume in deiner Nachbarschaft und ihren Wasserbedarf informieren.


Du kannst einzelne Bäume adoptieren und markieren, wenn Du sie gegossen hast.

Dieses Projekt wurde von [Gieß den Kiez](https://www.giessdenkiez.de) für Leipzig adaptiert.
Das Ursprungsprojekt wurde vom [CityLab Berlin](https://www.citylab-berlin.org) entwickelt.

Die Anwendung wird in Kooperation mit der [Stiftung Ecken Wecken](https://stiftung-ecken-wecken.de) im Rahmen der Bürgerplattform [Wir im Quartier](https://stiftung-ecken-wecken.de/projekte/wir-im-quartier), speziell mit dem Lösungsteam [Baumfreundschaften - Wir gießen im Quartier](https://stiftung-ecken-wecken.de/projekte/wir-im-quartier/wiq-loesungsteams) weiterentwickelt.

Die Baumkataster-Daten werden uns wöchentlich aktualisiert vom [Amt für Geoinformation und Bodenordnung](https://www.leipzig.de/buergerservice-und-verwaltung/aemter-und-behoerdengaenge/behoerden-und-dienstleistungen/dienststelle/amt-fuer-geoinformation-und-bodenordnung-62/) in Absprache mit dem [Amt für Stadtgrün und Gewässer](https://www.leipzig.de/buergerservice-und-verwaltung/aemter-und-behoerdengaenge/behoerden-und-dienstleistungen/dienststelle/amt-fuer-stadtgruen-und-gewaesser-67/) bereitgestellt. Einen älteren Stand gibt es auch auf dem OpenData Portal Leipzig [hier](https://opendata.leipzig.de/dataset/strassenbaumkataster).

## Umsetzung
 * [React](https://reactjs.org) im Frontend
 * AWS als Cloud-Lösung
   * PostgreSQL RDS zum Speichern der Baum-Metadaten und Niederschlagswerte
   * S3 zum Ablegen und Beziehen der Baumpositionen mit Niederschlagsmengen als GeoJSON
   * Fargate für den täglichen Import-Cron-Job zum Abrufen der [Radolan-Daten](https://opendata.dwd.de/climate_environment/CDC/grids_germany/hourly/radolan/recent/asc/) vom Deutschen Wetterdienst, also den stündlichen Niederschlagsmengen pro einzelne Quadranten
 * [Auth0](https://auth0.com) als Lösung für Benutzerregistrierung und -verwaltung
 * [MapBox](https://www.mapbox.com) für die Hintergrundkarte und 3D-Gebäude
 * [Vercel](https://vercel.com) für den Betrieb der Lambda-Funktionen, die den Zugriff auf die PostgreSQL-Daten via REST-API ermöglicht bzw. die Verbindung zu Auth0 herstellen
 * [Netlify](https://www.netlify.com) zum Hosten der Web-Anwendung

## Präsentationen
 * [Vortrag auf rc3 (Dezember 2020)](https://media.ccc.de/v/rc3-2020-146-leipzig-giesst) ([Folien](https://www.slideshare.net/joergreichert/leipzig-giesst-dezember-2020))
 * [Vortrag auf Bits und Bäume (Oktober 2022)](https://media.ccc.de/v/bitsundbaeume-20060-gie-a-bit-more-the-bume) ([Folien](https://www.slideshare.net/joergreichert/gie-a-bit-more-the-bume))
 * [Preisverleihung Sächsischer Digitalpreis (Dezember 2022)](https://youtu.be/s4vCUnsS4dQ?t=25371) (1. Platz für Leipzig giesst)

## Weitere Nebenprojekte
 * [Baumfilter](https://codeforleipzig.github.io/giessdeibohm/): Leipziger Stadtbäume nach Eigenschaften filtern ([Github](https://github.com/CodeforLeipzig/giessdeibohm))
 * [Pumpenkarte](https://codeforleipzig.github.io/leipzig_auf_pump/): Alle (auch abgebaute und kaputte) Handschwengelpumpen visualisieren ([Github](https://github.com/CodeforLeipzig/leipzig_auf_pump))
 * [Baumstatistik](https://sannsie.carto.com/builder/ea1519a7-a58d-46a1-bd3a-286218c357d8/embed): Interaktive Baum(-fäll/-pflanz/-ersetz)statistiken ([Github](https://github.com/CodeforLeipzig/pumps-server#charts)) 
 * [Gießstatistik](https://joergreichert.github.io/gdk-opendata-plot/): jährlich Gießmengen pro Baum ([Github](https://github.com/joergreichert/gdk-opendata-plot)) (auch veröffentlicht auf dem [Open Data Portal Leipzig](https://opendata.leipzig.de/dataset/jahresstatistik-leipziggiesst-gegossene-liter))