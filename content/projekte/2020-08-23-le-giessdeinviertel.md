---
layout: project
lab: [leipzig] #needed for Aggregation on Lab-Page
imgname: leipzig/giessdeinviertel.png
title: Gieß dein Viertel
status: laufend

links:
- url: https://giessdeinviertel.codeforleipzig.de
  name: Website
- url: https://github.com/CodeforLeipzig/tsb-trees-frontend
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