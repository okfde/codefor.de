---
title: "Digitales Ehrenamt in der Fläche"
author: "hfs - OK Lab Potsdam"
date: '2021-12-30T19:45:00+01:00'
excerpt: Einblick in ein digitales Ehrenamtsprojekt aus dem OpenStreetMap Universum
topic: community
images:
- imgname: didf/landuse_buildings.png
og_image: didf/landuse_buildings.png
type: blog
---
*Anmerkung: Bei diesem Text handelt es sich um eine Übersetzung mit leichten Veränderungen durch den
Autor von seinem Originaltext in Englisch [Mapping 360,000 buildings in
Germany](https://www.openstreetmap.org/user/hfs/diary/398014). Der Artikel erscheint in deutscher
Version in unserem Blog um das Projekt auch in der deutschsprachigen Open Data Community zu teilen
und digitales Ehrenamt sichtbarer zu machen.*

[OpenStreetMap](https://openstreetmap.de/) ist eines der größten weltweiten Open-Data-Projekte. Im
„Wikipedia für Karten“ werden von über 1,6 Millionen Freiwilligen, von denen monatlich über 43.000
aktiv sind, geografische Daten erfasst und unter einen freien Lizenz der Allgemeinheit zur Verfügung
gestellt. Die Kartendaten kann man für beliebige Zwecke nutzen, z. B. um Landkarten oder
Navigationssysteme zu erstellen, aber auch für die Wissenschaft, Kunst oder [humanitäre
Hilfe](https://hotosm.org).

Ein tolles Team-Projekt zur Kartierung noch nicht erfasster Wohngebäude in Deutschland wurde
kürzlich abgeschlossen. Viele motivierte Hobby-Kartograph:innen halfen tatkräftig mit, **360.000**
Gebäude in ganz Deutschland zu ergänzen.

Wer Interesse hat, darf sehr gern beim jetzt laufenden Nachfolge-Projekt [„Fehlende Gebäude in
Deutschland“](https://maproulette.org/browse/projects/41947) mitmachen.

## Vorgeschichte

Die Qualität der OpenStreetMap-Daten in Deutschland gilt im Allgemeinen als sehr gut, weil es hier
im Verhältnis zur Bevölkerung besonders viele aktive Mitglieder gibt. Das Vorgänger-Mapping-Projekt
wurde gestartet, als anhand von Zensus-Daten bewohnte Gebiete in Deutschland identifiziert wurden,
in denen weder Gebäude noch Wohngebiete kartiert waren.

[MapRoulette](https://www.maproulette.org/) wurde verwendet, um diese Gebiete zu überprüfen und die
Wohngebiete zu erfassen. MapRoulette ist eine Micro-Tasking-Plattform, auf der Projekte für
OpenStreetMap in viele kleine Häppchen zerlegt werden können, die dann von Freiwilligen bearbeitet
werden. In diesem Fall war die Herausforderung, Wohngebiete auf Satelliten- oder Luftbildern zu
erkennen und die Umrisse nachzuzeichnen. Ein Projekt wurde erstellt und fand viel Anklang: 14.330
neue Landnutzungsgebiete und 17.440 Gebäude wurden in nur 43 Tagen kartiert.

In diesem Blogbeitrag geht es um die zweite Runde, die sich ab Januar 2021 daran anschloss.

## Vorgehen

Die Idee war, Wohngebiete oder Bauernhof-Flächen ohne jegliche kartierte Gebäude zu finden. Diese
Gebiete sollten auf jeden Fall Gebäude enthalten – oder die Landnutzungsinformationen wären ungenau
und sollten korrigiert werden. (Später stellte sich heraus, dass als „Bauernhof“ markierte Flächen
ohne feste Gebäude legitim sind.)

Zu diesem Zweck importierte ich die OpenStreetMap-Daten in Deutschland in eine PostGIS-Datenbank
(eine spezielle Datenbank für Geodaten) und filterte dabei die Daten bereits nach den gewünschten
Landnutzungs- und Gebäudetypen. In PostGIS habe ich dann die Gebäude mit den Landnutzungsumrissen
verschnitten und alle Landnutzungsflächen entfernt, die ein Gebäude berührten.

![Karte der Landnutzungs- und
Gebäudepolygone](/blog/didf/landuse_buildings.png)

Die grünen und violetten Flächen sind Landnutzungsflächen. Hellrot sind Gebäude. Die violetten
Flächen sind Landnutzungsflächen, die keine Gebäude enthalten. Diese werden exportiert und jede von
ihnen wird zu einer Aufgabe in MapRoulette.

Diese Karte zeigt die Verteilung der Aufgaben über Deutschland:

![Deutschlandkarte mit Landnutzungsflächen ohne
Gebäude](/blog/didf/725px-Germany_landuse_without_buildings.jpg)

Die Flächen wurden im GeoJSON-Dateiformat exportiert und zur Erstellung von Aufgaben in MapRoulette
genutzt. Die **25.936 Aufgaben** waren zu viele, um sie alle in ein Projekt zu packen. Deshalb
mussten sie in separate Projekte pro Bundesland aufgeteilt werden. In Niedersachsen gab es so viele
Aufgaben, dass für einige Landkreise separate Pakete geschnürt werden mussten.

## Ergebnisse

Alle Aufgaben wurden im Laufe von 255 Tagen, von Januar bis Oktober 2021, abgearbeitet, was einer
Rate von etwa 100 Aufgaben pro Tag entspricht. 175 Mapper:innen nahmen an dem Projekt teil.

![MapRoulette Bearbeitungsstatistik](/blog/didf/QPeCkJd.png)

Insgesamt wurden 363.489 Gebäude hinzugefügt, aber auch 3.481 Landnutzungsgebiete und 7.068 Straßen,
da die Kartierer:innen auch Details rund um die eigentliche Aufgabe hinzugefügt haben.

MapRoulette zeichnet auf, wie viel Zeit ein:e Mapper:in mit jeder Aufgabe verbringt. Wenn die
Messung korrekt ist, wurden im Durchschnitt **131 Gebäude pro Stunde** erstellt.

## Auswirkungen

Da Wohngebiete ohne Gebäude hauptsächlich in ländlichen oder wenig beachteten Gebieten zu finden
sind, hoffe ich, dass dieses Projekt diesen Regionen einen kleinen Schub gegeben hat.

Hier sind zwei schöne Beispiele, bei denen in zwei Gemeinden im Laufe des Projekts sämtliche Gebäude
vollständig erfasst wurden:

![Ostrhauderfehn](/blog/didf/Ostrhauderfehn_building_mapping_before_after.gif)

![Selsingen](/blog/didf/Selsingen_building_mapping_before_after.gif)

## Statistiken über die Mitwirkenden

Der fleißigste Beitragende allein arbeitete 7.443 Aufgaben ab und erfasste unglaubliche 126.656
Gebäude neu. Dieser selbstlose Held hat also ein Drittel der gesamten Arbeit geschultert. Ansonsten
folgt die Beteiligung der typischen
[Pareto-Verteilung](https://de.wikipedia.org/wiki/Paretoprinzip), die man bei vielen
Freiwilligen-Projekten beobachten kann. Die nächsten drei Mitwirkenden haben etwa 33% der Aufgaben
übernommen. Alle Top-10-Mapper:innen haben 80% der Aufgaben gelöst. Vierundvierzig Teilnehmende
lösten nur eine Aufgabe. Vierundsechzig lösten zwei bis zehn Aufgaben.

Interessant fand ich auch, wie viele Kartierer:innen zunächst in ihrer Stammregion begannen und sich
dann in weiter entfernte Gebiete vorarbeiteten. Hier ist eine Karte, die zeigt, wer in einem Gebiet
„dominant“ war, d.h. die meisten Aufgaben pro Sechseck gelöst hat.

![Karte der Mitwirkenden](/blog/didf/qka0ShI.jpg)

## Erkenntnisse

Einige Schlussfolgerungen über das Projekt:

Die Beitragenden neigen natürlicherweise dazu, zuerst an ihrer Heimatregion zu arbeiten. Die
Aufspaltung in regionale Projekte führt aber dazu, dass jeder mehr in seiner Region bleibt.
Hierdurch verstärkt sich der Effekt, dass Bundesländer mit weniger aktiven Mitgliedern weniger
Bearbeitungen abbekommen, obwohl dort mehr zu tun wäre. Ich denke, dass es besser wäre, alle
Aufgaben in einem großen deutschlandweiten Projekt zusammenzufassen. Dann würde MapRoulette die
Interessierten eher in die „unterversorgten“ Regionen führen, wo es am meisten zu tun gibt. Im
Moment wird aber die MapRoulette-Anwendung zu langsam, wenn es zu viele Aufgaben in einem Projekt
gibt.

Zu große Gebiete, bei denen hunderte Häuser eingezeichnet werden müssten, sind einschüchternd und
demotivierend. Die Aufgaben sollten klein und leicht verdaulich sein, d.h. sie sollten höchstens ein
paar Minuten brauchen. Das gibt einem ein Gefühl von Fortschritt und eine einfache Möglichkeit, nur
eine kleine Portion Freizeit zu investieren. Im Nachfolgeprojekt wurden Landnutzungsflächen
aufgespalten, um kleinere Aufgaben zu generieren.

Und, haben wir spürbar zur Zahl der erfassten Gebäude in Deutschland beigetragen? **Nein!** Diese
Grafik zeigt die Anzahl der Gebäude in Deutschland pro Monat (solche Statistiken kann man mit dem
[ohsome Dashboard](https://ohsome.org/apps/dashboard/) abfragen).

![Anzahl der in OpenStreetMap erfassten Gebäude in Deutschland pro Monat](/blog/didf/7oMrYRs.jpeg)

Man kann sehen, dass jeden Monat 150.000 Gebäude hinzukommen, und zwar mit einer ziemlich konstanten
Rate. Dieses Projekt, das von Januar bis Oktober 2021 lief, hatte keinen merklichen Einfluss auf
diese Zahl. Doch kann vermutet werden, dass vorher schlecht abgedeckte ländliche Gebiete nun besser
in OpenStreetMap und allen darauf aufbauenden Anwendungen repräsentiert sind. Die Gebäude ziehen
hoffentlich weitere Details nach sich, wie Hausnummern, Öffnungszeiten von Geschäften usw.

## Quellcode

Wer neugierig ist, wie das Ganze technisch funktioniert oder sogar eine ähnliche Analyse für eine
andere Region durchführen möchte, kann unter
[github.com/hfs/landuse_without_buildings](https://github.com/hfs/landuse_without_buildings/tree/1.0.0) gern den Quellcode bekommen.

