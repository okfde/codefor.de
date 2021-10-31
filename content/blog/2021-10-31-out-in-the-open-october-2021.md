---
title: "Out in the Open - Oktober 2021"
author: "Tim Fangmeyer & Knut Hühne - OK Lab Berlin, Klara Juhl - OK Lab Osnabrück"
date: '2021-10-31T17:20:00+01:00'
excerpt: Monatlich erscheinender Überblick über Entwicklungen in der Open Data and
  Civic Tech Szene
topic: community
images:
- imgname: out-in-the-open-2021-10/header.jpg
  attribution: Foto von [Alex Knight](https://unsplash.com/@agk42) auf [Unsplash](https://unsplash.com/photos/liWlhUFWp2w)
og_image: out-in-the-open-2021-10/header.jpg
type: blog
---
Während wir dem Text den letzten Schliff verpassen, hat gerade der letzte Tag des unter
2G-Vorsichtsmaßnahmen stattfindenden [Hackday 2021 in Moers
(NRW)](https://www.codeforniederrhein.de/hackday-2021/) begonnen, auf dem Hacker:innen und Open Data
Begeisterte zusammen kommen um gemeinsam das eigene Wissen zu erweitern und sich zu vernetzen.
Veranstaltungen wie der Hackday sind ein zentraler Bestandteil der Open Data Community und der
ideale Moment, mit uns persönlich ins Gespräch zu kommen. Nutzt auch ihr die Gelegenheit, und besucht eine unserer wöchentlichen Treffen in den Code for Labs. Weitere Veranstaltungen werden üblicherweise [über
Twitter](https://twitter.com/codeforde) bekannt gemacht, falls ihr die
Menschen hinter dem Code kennenlernen möchtet. Aber jetzt zu den Neugigkeiten für den Monat Oktober.

In Deutschland wurde im letzten Monat viel über die ID-Wallet und digitale Ausweise gesprochen. Auch
die *Government Digital Services* aus dem Vereinigten Königreich sind damit beauftragt worden, eine
digitale Ausweislösung für ihre Services zu bauen und haben ihre Erfahrungen aus der Alpha [in ihrem
Blog
veröffentlicht](https://gds.blog.gov.uk/2021/10/19/single-sign-on-what-we-learned-during-our-identity-alpha/).

Der Open Data-Experte Thomas Tursics [twitterte
darüber](https://twitter.com/tursics/status/1449404926589906945), dass die Berliner Senatsverwaltung
für Umwelt, Verkehr und Klimaschutz Berlin einen neuen Datensatz im Berliner Datenportal
veröffentlicht hat: *Planbare Ereignisse im öffentlichen Straßenland*. In der [Beschreibung des
Datensatzes im
Datenportal](https://daten.berlin.de/datensaetze/planbare-ereignisse-im-öffentlichen-straßenland-wfs)
heißt es: "Zu Ereignissen zählen hierbei neben Baustellen, Halteverbote im Zusammenhang mit Umzügen,
Grünarbeiten, Veranstaltungen und Filmdreharbeiten, welche Einfluss auf den Straßenverkehr haben".
Die Daten werden über das Berliner Geodatenportal - den
[FISBroker](https://fbinter.stadt-berlin.de/fb/?loginkey=alphaDataStart&alphaDataId=s_ereignisse@senstadt)
\- als Web Feature Service (WFS) bereitgestellt. WFS-Feeds kann man zwar z. B. direkt mit der
Geoanwendung QGIS öffnen, die Berliner CfG-Community stellt dennoch alternativ die
[WFS-Downloader](https://github.com/codeforberlin/wfs-downloader)-Bibliothek bereit, mit der die
Daten heruntergeladen und in gebräuchlichere Formate wie GML oder GeoJSON umgewandelt werden können.

[Schon letzten Monat](/blog/2021-09-31-out-in-the-open-september-2021/) berichteten wir über [de.openparliament.tv](https://de.openparliament.tv/). Das Projekt ist jetzt offiziell an
den Start gegangen. Aus der Open-Data Perspektive ist es schön, im
[FAQ](https://de.openparliament.tv/faq) lesen zu können, dass die für die Anwendung verwendeten
Daten aus Wikidata und aus der [Open Data API des
Bundestages](https://www.bundestag.de/services/opendata) stammen. Noch vor vier Jahren gab es die
Sitzungprotokolle des Bundestags nur in unannotierter Textform und das Projekt
[offenesparlament.de](https://offenesparlament.de/daten/) verbrachte viel Zeit damit, diese in eine
strukturierte und maschinenverständliche Form zu überführen. Dass die Daten jetzt vom Bundestag
selbst zur Verfügung gestellt werden, erleichtert die Umsetzung von Projekten wie openparliament.tv ungemein und
schafft Möglichkeiten für neue kreative Nutzungsformen.

Das [Bundesamt für Kartographie und
Geodäsie](https://www.bkg.bund.de/DE/Home/home.html;jsessionid=70C72947966E2AA3DF6BC92BEA40DE72.live21)
berichtet in einer
[Pressemitteilung](https://www.bkg.bund.de/SharedDocs/Pressemitteilungen/BKG/DE/PM_2021/211013-Digitaler_Zwilling.html)
vom jüngst gestarteten Projekt "Digitaler Zwilling". Ganz Deutschland soll im Rahmen dieses
Vorhabens hoch aufgelöst und dreidimensional digital abgebildet werden. Der Startschuss fiel in der
Metropolregion Hamburg, in der ein Messflugzeug bis zum Ende des Jahres eine Fläche von ca. 8000 m²
erfassen wird. Nach erfolgreichem Abschluss dieses Demonstrationsprojekts wird die Umsetzung
bundesweit fortgeführt. Ziel ist es, im Jahre 2024 einen ersten bundesweiten 3D-Datensatz als
offenen Datensatz zur Verfügung zu stellen.

Es ist ein merkwürdiges Phänomen: Wir alle produzieren täglich mehr und mehr Daten, dennoch setzen
wir uns kaum mit dieser Entwicklung auseinander. Mit unserer Browser-Historie, den von uns online
gelesenen Texten und angesehenen Videos, über Geräte wie Smartwatches und Fitnessarmbänder liefern
wir Unternehmen eine Vielzahl an Daten über uns. Und doch führt die Fülle an Daten eben nicht dazu,
dass diese mit einem gesteigerten Wissen um ihre Bedeutung einher geht. Im Gegenteil, unsere
Kompetenz mit Daten umzugehen, sie analysieren und einordnen zu können, stagniert. In seinem
englischsprachigen Artikel [Data Drives the World. You Need to Understand
It](https://time.com/6108001/data-protection-richard-stengel/?mc_cid=16112edf1c&mc_eid=db10ddbb6f)
geht der Journalist Richard Stengel auf dieses Phänomen ein und versucht zu ergründen, welche
entscheidende Bedeutung der sog. "data literacy" heute zukommt.


Von Bund, Städten und Kommunen veröffentlichte Apps haben den positiven Nebeneffekt, dass bisher
unbekannte Daten-Schnittstellen wie nebenbei gleich mitveröffentlicht werden. Das war schon beim
Autobahn-App-Projekt des Bundes der Fall, welches [bund.dev](https://bund.dev) die Möglichkeit bot, die von der App
genutzte Autobahn-API [zu dokumentieren](https://autobahn.api.bund.dev). Die Stadt Pforzheim hat
kürzlich eine Anwendung namens „ParkenPF“ veröffentlicht, die über die Verfügbarkeit öffentlicher
Parkplätze, Parkhäuser und Tiefgaragen informiert. Die [dazugehörige
Schnittstelle][buergergis-pforzheim] wartet noch darauf, von Freiwilligen dokumentiert zu
werden.

[buergergis-pforzheim]: https://buergergis.pforzheim.de/server/rest/services/Sensoren/ParkNav/FeatureServer/0/query?f=json&where=bewirtschaftung%20%3D%20%27Parkplatz%20bewirtschaftet%27&returnGeometry=true&spatialRel=esriSpatialRelIntersects&geometry=%7B%22xmin%22%3A477482.6579185862%2C%22ymin%22%3A5412444.466489942%2C%22xmax%22%3A480869.33135859977%2C%22ymax%22%3A5415831.139929955%2C%22spatialReference%22%3A%7B%22wkid%22%3A25832%2C%22latestWkid%22%3A25832%7D%7D&geometryType=esriGeometryEnvelope&inSR=25832&outFields=*&outSR=25832&resultType=tile

Dank einer einer Anfrage auf
[FragDenStaat](https://fragdenstaat.de/) wurde diesen September das [Baumkataster Magdeburg 2021](https://www.magdeburg.de/Start/B%C3%BCrger-Stadt/Verwaltung-Service/Offene-Verwaltungsdaten/index.php?NavID=37.906&object=tx|37.12819.1&La=1&) als Datensatz unter einer Open Data Lizenz online gestellt. Einen Monat später hat Jens Winter daraus
im Rahmen des Code for Germany-Projekts
[Baumfreunde-MD](https://www.codefor.de/projekte/magdeburg-baumfreunde-md/) eine interaktive Karte
erstellt, die den Standort von über 84.000 Bäumen im Stadtgebiet visualisiert. Über die
Website-Navigation können die dargestellten Bäume u. a. nach Eigenschaften wie Gattung, Baumhöhe und
Alter gefiltert werden.
