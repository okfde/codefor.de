---
type: blog # So lassen
title: "Bodenfeuchtigkeit sichtbar machen: Innovationen für den Teutoburger Wald"
author: Meike Wocken
twitter_handle: "@CountessOfCount"
excerpt: "In Bielefeld wird die Feuchtigkeit des heimischen Waldbodens mit Sensoren gemessen. Ziel ist es, dafür eine Citizen Science-Community aufzubauen und die Daten für alle als Open Data und aufbereitet in einer Online-Karte zur Verfügung zu stellen."
topic: community, project
lab: [bielefeld]
images:
 - imgname: feuchtigkeit-teutoburger-wald/teuto_wald2.jpg
 - imgname: feuchtigkeit-teutoburger-wald/teuto_team.jpg # Dieses Bild sollte im Verzeichnis static/blog existieren
 - imgname: feuchtigkeit-teutoburger-wald/teuto_ranger_sensor.jpg

og_image: feuchtigkeit-teutoburger-wald/teuto_wald2.jpg 
og_description:  Ansicht Teutoburger Wald mit abgestorbenen Fichten. # Der alt Text zum Titelbild

# Tags werden benutzt um die twitter card für den artikel mit #Tags zu versorgen und um in Suchmaschinen gefunden zu werden
tags:
- Opendata
- Citizen Science
- Umweltschutz
- Gesellschaft

draft: false # So lassen sonst wird der Artikel nicht veröffentlicht
---

# Bodenfeuchtigkeit sichtbar machen: Innovationen für den Teutoburger Wald

## Klimawandel im Teutoburger Wald 

Auch in der Region Ostwestfalen-Lippe ist der Klimawandel zu beobachten. Insbesondere der Teutoburger Wald hat sich in den letzten Jahren stark verändert. Windbruch und trockene Sommer haben u.a. die Vermehrung des Borkenkäfers begünstigt, was Krankheiten und Absterben des Waldes zur Folge hatte.
 
Die Feuchtigkeit im Boden ist einer von mehreren Indikatoren zur Beschreibung des Zustands des Waldes. Die Bodenfeuchtigkeit variiert im Jahresverlauf, dennoch gibt es aufgrund zunehmender Temperaturen und nach zwei Hitzesommern 2018 und 2019 die Tendenz dazu, dass der Waldboden zu trocken ist. Um diese Entwicklung den Bürgerinnen und Bürgern der Region objektiv näher zu bringen und um u.U. auch geeignete Tools zur Unterstützung einer optimalen Waldbewirtschaftung entwickeln zu können, bietet es sich an, Daten zum Waldzustand zu sammeln und als Open Data frei zur Verfügung zu stellen.

## Bodenfeuchtigkeit messen und darstellen

Code for Bielefeld, eine Gruppe von IT-affinen Bielefelder:innen, die sich ehrenamtlich für digitale Tools in Bielefeld engagieren, arbeitet seit September an einer Umsetzung, um die Feuchtigkeit des Waldbodens in einer online zugänglichen Karte grafisch darzustellen. Dadurch soll die Klimaentwicklung transparenter gemacht und objektive Daten zur Klimaänderung erhoben werden. 

Zurzeit sind 8 Aktive dabei, die richtigen Sensoren auszuwählen, um Bodenfeuchtigkeit zu messen. Ein erster Prototyp sendet bereits Daten aus einem Garten heraus. Die Weitergabe der Daten erfolgt mittels LoRaWAN, einer Funktechnologie, die es schafft, sehr energiesparsam kleine Datenmengen über weite Strecken zu verschicken. Das ermöglicht, dass die Sensoren Batteriebetrieben sind und auf einer weiten Fläche verteilt stehen können. Batterielaufzeiten von mehreren Jahren sind mit dieser Technologie keine Seltenheit. Zur Weitergabe der Daten mittels LoRaWAN wird die Infrastruktur der The Things Network-Community verwendet. 

![Team](teuto_team.JPG)
_Treffen der Aktiven, v.l.n.r. Matthias Fischer, Simon Bekemeier, Meike Wocken, Burkhard Noltensmeier, Clemens Knost, Julian Nowainski. Nicht im Bild: Christoph Jürgensmeier, Till Voß.  Foto: Code for Bielefeld._

## Citizen Science

Ein Ziel ist es, dass am Ende ein kostengünstiger Sensor, evtl. auch als Do-it-yourself-Bausatz zum Selberbauen eines Messgerätes/Sensors, gefunden oder entwickelt wird. Die Erhebung der Daten findet dann mittels dieser Sensoren statt, die von Bürger:innen ehrenamtlich, als Teil einer Citizen Science-Community, betrieben werden. Unter Citizen Science ist zu verstehen, dass ehrenamtliche Forscher:innen sich u.a. mit dem Sammeln der Daten, der Einarbeitung in die Thematik der Messung und Darstellung von Bodenfeuchtigkeit beschäftigen, ohne dass sie einer wissenschaftlichen Einrichtung angehören oder eine akademische Ausbildung haben müssen. 

## Innovationen für die Region

Die Idee ist auch in der Open Innovation Citizen-Community geteilt worden. Innovativ ist, neben den technologischen Aspekten des Einsatzes von Sensorik und LoRaWAN-Funktechnologie, auch der Citizen Science- und Open Data-Ansatz. Open Data bedeutet, dass die gesammelten Daten allen interessierten Personen und Institutionen zur Verfügung stehen und genutzt werden können. Mit der Nutzung der Daten können weitere Innovationen entstehen, z.B. eine datengesteuerte Waldbewirtschaftung oder anhand quantitativer Kriterien optimal gewählte Standorte für bestimmte Baumarten. Hier stehen wir mit dem Ranger des Stadtgebiets Bielefeld, Aaron Gellern, vom Regionalforstamt Ostwestfalen-Lippe in Kontakt, um die richtigen Daten auch für weiterführende Fragestellungen zu sammeln.  

![Ranger](teuto_ranger_sensor.jpg)
_Vor-Ort-Termin mit Aaron Gellern am Eisernen Anton in Bielefeld. Aaron Gellern hält einen Bodenfeuchtigkeitssensor in der Hand (Dragino LSE01). Foto: Code for Bielefeld._

## Erfahrungen aus anderen Regionen

Ähnliche Projekte und Umsetzungen gibt es bereits. Wie z.B. in [Coburg](https://www.lorawan-coburg.de/) und [Ulm](https://lorapark.de/). Insbesondere die Erfahrungen mit den auf dem Markt zur Verfügung stehenden Sensoren wurden mit uns geteilt. Das hat dazu geführt, dass wir schon früh Daten eines realen Sensors im Rahmen eines Prototypen auslesen und sichtbar machen konnten.

## Gemeinsames Engagement für den Teutoburger Wald 

Bielefelder Bürger:innen zeigen bereits viel Engagement zum Schutz “ihres” Waldes. Wer sich durch unsere Idee angesprochen fühlt und sich für den heimischen Teuto engagieren möchte, ist herzlich eingeladen, sich einzubringen. Wir benötigen nicht nur Tech-Experten, sondern freuen uns auch über Unterstützung in der Kommunikation und auch über mehr forstwissenschaftliches Knowhow in unserem Kreis. Wir treffen uns immer am ersten Donnerstag im Monat um 20 Uhr digital und geben ein Update zum Stand des Projektes. Link: https://lecture.senfcall.de/chr-hhh-9my
