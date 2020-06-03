---
layout: project
lab: [berlin] #needed for Aggregation on Lab-Page
imgname: berlin/feinstaub-sos.png
title: SOS für Feinstaub-Daten
status: In Arbeit

links:

- url: https://github.com/52North/SOS
  name: Sensor Observation Service (SOS)

- url: https://github.com/52North/sos-importer
  name: SOS-Importer

- url: https://github.com/52North/js-sensorweb-client
  name: Sensor Web JS Client (SWC)

- url: /projekte/2014-07-01-be-blume.html
  name: BLUME Netzwerk API/MAP

- url: https://github.com/johnjohndoe/SOS-Importer-Blume
  name: SOS Importer documentation

- url: https://github.com/johnjohndoe/blume_sos_adapter
  name: BLUME SOS adapter

collaborators:
- name: Tobias Preuss
  links:
  - url: https://twitter.com/tbsprs
    name: Twitter

- name: Knut Hühne
  links:
  - url: https://github.com/k-nut
    name: GitHub

tags:
- Umwelt

---

<b>Feinstaub-Daten</b> über den <b>SOS-Standard</b> als
<abbr title="Application Programming Interface">API</abbr> zur Verfügung stellen -
als Karte und Diagramme darstellen.<br />
<br />
Der <i>Sensor Observation Service (SOS)</i> ist ein vom
<abbr title="Open Geospatial Consortium">OGC</abbr> spezifizierter Standard zur
Speicherung und Bereitstellung von Sensordaten. Das Software-Unternehmen <i>52North</i>
aus Münster hat eine Referenzimplementierung von SOS als Open Source veröffentlicht.
Ebenfalls Open Source ist der <i>Sensor Web JS Client (SWC)</i> - eine für mobile Endgeräte
optimierte Anwendung zum Abruf und Visualisierung der Sensordaten.<br />
<br />
Die Berliner Feinstaub-Daten des <i>BLUME</i>-Netzwerks werden in die SOS-Datenbank
importiert und können dann über den SWC abgerufen werden. In diesem Projekt geht es
um die <b>grundsätzliche Bereitstellung des SOS-Servers</b> und die Dokumentation <b>wie
Sensordaten importiert</b> werden können. Zielstellung ist es, dass <b>andere Städte</b> ebenfalls
ihre zeitreihenbasierten Sensordaten (nicht nur Feinstaub-Daten) importieren können.<br />
<br />
Die Grundlage für dieses Projekt, nämlich das Parsen der <i>BLUME</i>-Daten, wurde bereits
von Dirk Schumacher realisiert. Die Werkzeuge des <i>"BLUME Netzwerk API/MAP"</i>-Projekts
sind natürlich Open Source.
