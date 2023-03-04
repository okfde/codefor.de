---
layout: project
lab: [leipzig] #needed for Aggregation on Lab-Page
imgname: leipzig/trinkwasser.jpg
title: Was steckt in meinem Leitungswasser?
status: abgeschlossen

links:
- url: https://trinkwasser.codeforleipzig.de/
  name: Website
- url: https://github.com/codeforleipzig/trinkwasser
  name: Page on Github

collaborators:
- name: Jörg Reichert
  links:
  - url: https://github.com/joergreichert
    name: github
- name: Robert Schmidt
  links:
  - url: https://github.com/nucsum
    name: github
- name: Frances Lindemann

tags:
- Umwelt

---

Qualitätswerte des Trinkwassers aus dem Versorgungsgebiet der MIDEWA schematisch und als Karte.


Trinkwasser gilt als das am besten kontrollierte Lebensmittel in Deutschland. Und trotzdem wissen wir sehr wenig über das Wasser, das bei uns aus dem Hahn kommt.

Selbst wenn die Zahlen auf den Webseiten der Kommunen veröffentlicht sind, sind sie oft schlecht auffindbar und bleiben für den Bürger eine abstrakte Größe. Was bedeutet ein Härtegrad von 9? Sind 200 Milligramm Calcium pro Liter viel oder wenig? Wie mineralreich unser Leitungswasser ist, zeigt sich erst, wenn wir es untereinander und mit Wasser aus dem Handel vergleichen können.

Im Rahmen des internationalen Open Data Hackathons am 4. März 2017 wurde die Anwendung "Was steckt in meinem Leitungswasser", die ursprünglich vom OK Lab Heilbronn entwickelt wurde, redeployt. Hierbei wurden Qualiätswerte des Trinkwassers aus dem Versorgungsgebiet der MIDEWA Wasserversorgungsgesellschaft in Mitteldeutschland GmbH verarbeitet. Im Ergebnis können sich Bürgerinnen und Bürger nun die Parameter des Trinkwassers in ihrem Wohnort anzeigen lassen und sogar mit bestimmten Mineralwassern vergleichen.

## Umsetzung
 * Daten wurden von MIDEWA bereitgestellt
 * Redeployment der Web-Anwendung (HTML, JS) vom [Heilbronner Trinkwasser Projekt](https://github.com/opendata-heilbronn/trinkwasser)
   * Branding und Texte ausgetauscht
   * Andere Mineralwasser-Quellen (Vergleichswerte)
   * Einpflegen der bereitgestellten CSV-Datensätze
 * Leaflet-Karte wurde zusätzlich von uns gebaut
 * Gemeinde-Kreise wurden über eine entsprechende Abfrage der Administrations-Grenzen in [Overpass Turbo](https://www.overpass-turbo.eu) als GeoJSON mit diesem [Generator](https://github.com/CodeforLeipzig/trinkwasser/tree/master/utils/DrinkingWaterGenerator) extrahiert und nachträglich über einen TopologyPreservingSimplifier aus dem JTS vereinfacht
 * Im GeoJSON sind die Trinkwasser-Daten nachgepflegt

## Wie unterstützen?
 * Aktuelle Daten bekommen und nachpflegen
 * Daten für Leipzig direkt bekommen und entsprechend dann auch Mineralwasser aus dem Leipziger Land als Vergleichwerte nehmen
 * Interessante Daten bekommen (z.B. Nitrat-Belastung, Grundwasserspiegel)
 * Trinkwasser-Qualität selber messen (Sensoren dazu sind aber teuer)
 * Inspriation vielleicht: [Lorawan Tonne](https://blog-smartcountry.de/eine-lorawan-tonne-fuer-muensters-aasee/)
 * Verlegte Wasser-Rohre in Augmented Reality (mit Anzeige der letzten Wartung / Austauschs)
