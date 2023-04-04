---
title: "Wie bekommen wir bessere OpenData – Out in the Open March 2022"
author: "Jörg Reichert - OK Lab Leipzig"
date: '2022-04-15T09:45:00+01:00'
excerpt: Monatlich erscheinender Überblick über Entwicklungen in der Open Data und Civic Tech Szene
topic: community
images:
- imgname: out-in-the-open-2022-03-header.jpg
  attribution: Foto von [velkr0](https://www.flickr.com/people/25396215@N00) auf [WikiCommons](https://commons.wikimedia.org/wiki/File:Open_(4014689)_(cropped).jpg), [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/legalcode)
og_image: out-in-the-open-2022-03-header.jpg
type: blog
---
Die Europäischen Union hat im März den 3. Teil ihrer Video-Erklär-Reihe zu Linked Open Data veröffentlicht, hier die Verweise auf die einzelnen Teile: 
  - [Teil 1: The Ballad of Elodie - Linked open data](https://www.youtube.com/watch?v=9hZPWBNyLac)
  - [Teil 2: Elodie unlocks the magic of linked open data](https://www.youtube.com/watch?v=5fXXWIDnQ5I)
  - [Teil 3: Elodie explains how linked open data works](https://www.youtube.com/watch?v=-nHMe75hqzA)

Passend dazu wurde am 17. März die EU-Finanzierungs-Informations-Plattform [Kohesio](http://Kohesio.eu) veröffentlicht. Sie basiert auf der Open-Source Software [WikibaseHQ](https://wikiba.se) und ist auch selbst [Open Source](https://github.com/ec-doris). Sie enthält strukturierte Daten über mehr als 1,5 Millionen Projekte und etwa 500.000 Begünstigte, die entweder über den EU-Regional-Entwicklungs-Fond, den EU-Zusammenhalts-Fond oder den EU-Sozial-Fond zwischen 2014-2020 gefördert wurden. Am 28.3. hat Dennis Diefenbach im OKLab Berlin Meetup in seinem Vortrag über den [EU-Knowledge-Graph](https://linkedopendata.eu/wiki/The_EU_Knowledge_Graph) (und dem damit verbundenen Einsatz von [WikiData](https://www.wikidata.org/)) auch über dieses Projekt berichtet. 

In seinem Vortrag ["Reality Check: Open Data Deutschland"](https://pretalx.com/fossgis2022/talk/GLLY99/) auf der [FOSSGIS Konferenz 2022](https://fossgis-konferenz.de/) berichtet Prof. Dr. Sebastian Meier von der FH Potsdam über die Verfügbarkeit und Qualität von Offenen Daten in Deutschland. Er stellt dabei fest, dass weiterhin die eine Quelle der Wahrheit fehlt. So sind manche Datensätze nur in [Geoportal.de](https://geoportal.de) nicht aber in [GovData](https://www.govdata.de) aggregiert. Die Arbeit wird zudem durch unsachgemäß und uneinheitlich angegebenen Metadaten sowie Fehler in den Daten selbst erschwert. Dabei sind Standards (z.B. [DCAT-AP](https://www.dcat-ap.de)) und Werkzeuge (z.B. ein Metadaten-Validator) bereits vorhanden, sie müssten dann aber auch in der Fläche eingesetzt werden. Durch einfache Plausibiltätschecks erkennt man so schnell Tippfehler z.B. bei Geokoordinaten bevor man die Daten veröffentlicht. Zudem bemängelte er, dass historische Datensätze meist gelöscht (bzw. von dem jeweils aktuellen Datensatz überschrieben werden), so dass eine Auswertung über den Zeitverlauf nicht möglich ist. Hier wären Change-Reports, die auch semantische Änderungen in den Metadaten dokumentieren, wünschenswert.

Mit dem [Koalitionstracker](https://fragdenstaat.de/koalitionstracker/) von FragDenStaat lassen sich nun nachverfolgen, ob und wie weit die im Koaliationsvertrag der Bundesregierung versprochenen Vorhaben auch tatsächlich umgesetzt werden.

Der Online-Rechner [LocalZero](https://www.germanzero.de/loesungen/localzero) erstellt eine Klimavision (in Form eines PDF-Berichts), wie dein Ort klimaneutral wird. Die Erklärungen zur Einflussbilanz und den Sektorberechnungen sind [hier](https://localzero-generator.readthedocs.io/de/latest/) dokumentiert. Der Quellcode ist [Open Source](https://github.com/GermanZero-de/localzero-generator-core). Allerdings sind die Verkehrszählungsdaten des [Ifeu](https://www.ifeu.de/) gekauft und können daher nicht veröffentlicht werden. Sie werden aber zur Berechnung benötigt, so dass man die Anwendung nicht selbst betreiben, aber zumindest die Berechnungslogik im Quellcode nachvollziehen kann.

Im Rahmen des Citizens-Science-Projekts ["Berlin zählt Mobilität"](https://adfc-berlin.de/berlinzaehlt.html) sollen 100 Zählgeräte an interessierte Bürger ausgegeben werden, die, am Fenster angebracht, den Verkehr auf Berlins Straßen erfassen sollen. Die so erfassten Zähl-Daten werden auf dem Server nicht gelöscht und sind via API zeitlich unbeschränkt verfügbar.

Dass es leider auch weniger zugänglich geht, zeigt die [Antwort](https://mobile.twitter.com/CodeForMD/status/1508038677934526465), die Code for Magdeburg auf die Anfrage der Verkehrszähldaten der letzten Jahre für Magdeburg bekommen hat: die Daten werden auf einer DVD zugeschickt, die Weitergabe der Daten ist mit Verweis auf das Informationsweiterverwendungsgesetz (IWG) nur nach Rücksprache erlaubt (das Gesetz ist aber seit 2021 außer Kraft) und dann bei Weitergabe potenziell noch Gebühren verlangt werden.

Der Landtag Brandenburg hat mit dem [Design-Update seiner Parlamentsdokumentation](https://www.parlamentsdokumentation.brandenburg.de/parladoku/w7/inf/ab_0100/173.pdf) begonnen die Metadaten-Dumps als Open Data [bereitzustellen](https://www.parlamentsdokumentation.brandenburg.de/starweb/LBB/ELVIS/OpenData.html) und folgt damit dem Berliner Abgeordnetenhaus, was neben [seinen Metadaten-Dumps](https://www.parlament-berlin.de/dokumente/open-data) auch noch eine [Dokumentation der XML-Struktur als PDF](https://www.parlament-berlin.de/media/download/848) zur Verfügung stellt.
