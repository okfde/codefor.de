---
title: "Out in the Open - Mai 2021"
date: 2021-06-01T10:19:33+02:00
author: "Julia - OK Lab Osnabrück & Tim Fangmeyer & Knut Hühne - OK Lab Berlin"
excerpt: Monatlich erscheinender Überblick über Entwicklungen in der Open Data and Civic Tech Szene
topic: community
images:
- imgname: out-in-the-open-titel-mai.jpg
type: blog
---

In unserem heutigen Blogbeitrag von Out in the Open zeigen wir ganz
konkrete Beispiele, warum sich Open Data lohnt: Aus frei verfügbaren
Daten können beeindruckende Karten erstellt, bestehende Projekte neu
zusammengesetzt und aktuelle Informationen aus bereits vorhandenen Daten
gewonnen werden. Also hinein in unsere Linksammlung für den Monat Mai.

![jedeschule Titelbild](/blog/jedeschule-2.jpg)

## `jedeschule.de` 2.0

Vor vier Jahren
[veröffentlichte](https://okfn.de/blog/2017/03/jedeschule-launch/) die
Open Knowledge Foundation Deutschland zusammen mit der NGO BildungsCent
die Website [jedeschule.de](https://jedeschule.de/). Das Projekt machte erstmals Schuldaten aller
Bundesländer zentral verfügbar. Im Nachgang bestanden allerdings wenig
Ressourcen, um das Projekt vonseiten der Open Knowledge Foundation
weiterführen zu können. Nun gibt es gute Nachrichten: In den letzten
Monaten sind Freiwillige aus der codefor-Community zusammengekommen, um
die Scraper des ursprünglichen Projektes zu aktualisieren und dafür zu
sorgen, [dass diese wieder für den Abruf der Schuldaten aller
Bundesländer funktionieren](https://codefor.de/blog/jedeschule-2/).

## Dokumente aus der Politik jetzt automatisiert abrufbar

Im Bundestag passiert eine Menge, in zwei Sitzungswochen pro Monat kommt
das Parlament zusammen, dazu geschieht eine Unmenge an Ausschussarbeit.
All das ist umfassend dokumentiert, leider zumeist in PDFs. Bisher waren
die Dokumente nicht gut durchsuchbar, jetzt gibt es aber das neue
sogenannte Dokumentations- und Informationssystem für
Parlamentsmaterialien (DIP), das zudem eine Schnittstelle (API) enthält.

Dort sind nun viele Dokumente [aus Bundestag und
Bundesrat](https://dip.bundestag.de/%C3%BCber-dip/hilfe/api#content)
abrufbar. Klar, auch dabei ist noch Luft nach oben, aber ein Anfang ist
gemacht und das ist ein Grund zum Feiern!

Auf kommunaler Ebene gibt es schon länger eine freie, maschinenlesbare
Schnittstelle zu Ratsdokumenten, nur genutzt wird sie bisher kaum. Die
[API mit dem Namen \#OParl](https://oparl.org/) wurde im Rahmen des Code
for Germany Netzwerks entwickelt und kann ganz neue Einblicke in die
Politik vor Ort bieten, wie beispielsweise das Projekt
www.politik-bei-uns.de zeigt.

Auch die Stadt **Köln** hat für ihr Ratsinformationssystem jetzt \#OParl
[an den Start
gebracht](https://offenedaten-koeln.de/dataset/oparl-api-koeln).

![Strassennetzwerk von Köln mit city-roads](/blog/out-in-the-open-mai-2021/Köln.jpg)

## Einfach bedienbares Visualisierungs-Tool für Straßennetzwerke

Schon vor einigen Monaten entstanden ist das [Karten-Tool City
Roads](https://anvaka.github.io/city-roads/). Mithilfe einer einfachen
Oberfläche kann man einen beliebigen Ort auswählen und das entsprechende
Netzwerk an Straßen aus der Vogelperspektive visualisieren lassen. Die
auf Open Street Maps-Daten basierende Karte lässt sich danach gleich
herunterladen. Da der Code [auf
Github](https://github.com/anvaka/city-roads) einsehbar ist, bieten sich
die Darstellung anderer Kartenelemente an. So wurde schon das
Schienennetz-Äquivalent [railways](https://abaumg.github.io/railways/)
veröffentlicht.

## Musterlastenheft entwickelt

Die Städte **Münster und Bonn** haben gemeinsam Formulierungen für ein
["Musterlastenheft kommunale Datensouveränität"](https://github.com/od-ms/datennutzungsklauseln-muster) entwickelt.

Diese Formulierungen sollen vor allem als Bestandteil des
Leistungsverzeichnisses bei Beschaffungen bzw. Vergabeverfahren
verwendet werden -- damit es für die Kommunen einfacher wird, die
Kontrolle über ihre Daten zu behalten.

Die Formulierungen sind unter einer "CC BY 4.0"-Lizenz in diesem
Git-Repository veröffentlicht, um eine niederschwellige Kollaboration
mit anderen Kommunen zu ermöglichen. Außerdem können in diesem
Repository Verbesserungsvorschläge erstellt, diskutiert und bearbeitet
werden.

Wer sich beteiligen möchte, findet alle Kontaktinformationen auf der
[GitHub-Seite des
Projekts](https://github.com/od-ms/datennutzungsklauseln-muster). Sven
und Thomas freuen sich über Verbesserungsvorschläge, Ideen oder
Rückmeldungen, wer die Klauseln nutzt oder Fehler gefunden hat.
Spannender Vorstoß, wir freuen uns auf mehr.

Auch in **Brandenburg** bewegt sich was: Dort setzen sich SPD, CDU und
Grüne [gemeinsam für Open Data
ein](https://www.parlamentsdokumentation.brandenburg.de/parladoku/w7/drs/ab_3500/3544.pdf).

![Japan Vaccination Tracker](/blog/out-in-the-open-mai-2021/japan-vaccination-tracker.jpg)

## Japan bietet Impfdaten per API-Abruf an

Während das vom Robert Koch Institut und Bundesministerium für
Gesundheit betriebene Impfdashboard seine Daten als
[Datei-Download](https://impfdashboard.de/daten) anbietet, ist Japan
schon einen Schritt weiter und stellt für den Abruf von Impfdaten [eine
eigene API zur Verfügung](https://cio.go.jp/c19vaccine_opendata). Die
offenen Daten werden nach Altersgruppe, Geschlecht und dem optionalen
Status 'medizinische Fachkraft' aufgeschlüsselt.

Welche Möglichkeiten der automatisierte Abruf bietet, zeigt bereits der
[Japan Vaccination
Tracker](https://nagix.github.io/japan-vaccination-tracker/) von naginx:
Auf einer Darstellung der Präfekturen Japans wird durch eine Animation
auf der Choroplethenkarte jede einzelne Impfung plastisch visualisiert.
Die sichtbar gemachte Impfung ist allerdings (noch) nicht sekundengenau,
sondern basiert auf dem durchschnittlichen Zeitraum zwischen zwei
Impfungen, der anhand der Daten des Vortages berechnet wurde.

## Immer mehr Open Data auch in kleineren Städten und Kommunen

Hatten wir in der [letzten Ausgabe von Out in the
Open](https://codefor.de/blog/out-in-the-open/) noch über eine Übersicht
deutscher Datenportale geschrieben, wurde auf dieser Sammlung aufbauend
von dem Think Tank neuland21 eine [Zusammenstellung der Open Data
Portale der ländlichen Regionen
Deutschlands](https://opendataland.de/landkarte/) angefertigt. Die mit
eigenen Recherchen erweiterte Liste bietet viele Beispiele von Geodaten-
und Open Data-Portalen von kleineren Kommunen und Landkreisen.

Frisch [an den Start
gegangen](https://www.fnweb.de/rhein-main-neckar_artikel,-heilbronn-heilbronner-open-data-portal-fuer-mehr-transparenz-und-information-_arid,1794892.html)
ist das Datenportal **Heilbronn**. Unter der "CC BY 4.0"-Lizenz finden sich
bereits [einige offene Datensätze](https://opendata.heilbronn.de/).
Verwendet wird die Open Data Plattform DKAN, die zum Beispiel bereits in
Köln zum Einsatz kommt.

## Urbane Daten freigelegt

Welchen Firmen gehört Zürich? [Umfassende
Recherchen](https://reflekt.ch/teil-2-welchen-firmen-gehoert-zuerich/)
von Tsüri.ch und REFLEKT haben aufgedeckt, welche Immobilienunternehmen
Wohnungen in Zürich besitzen und wie sich deren Einfluss auf die
Mietpreise in der Stadt auswirkt.

Die Deutsche Umwelthilfe und FragDenStaat zeigen mithilfe von
Bürger\*innen den mangelhaften energetischen Zustand von Gebäuden in
öffentlicher Hand auf. Der **Klima-Gebäude-Check** enthüllt, wie Länder
und Kommunen bei der [Klimaschutz freundlichen Gestaltung der eigenen
Gebäude](https://fragdenstaat.de/blog/2021/05/25/auswertung-des-klima-gebaude-checks-staatsgeheimnis-energieverschwendung/) noch Nachholbedarf haben.

## Und sonst so?

030 23125 000. In Filmproduktionen sind regelmäßig vollständige
Telefonnummern zu sehen. Um zu verhindern, dass Privatleute von mehreren
hundert Zuschauer\*innen angerufen werden, stellt die Bundesnetzagentur
sogenannte "Drama-Nummern" oder Filmnetznummern zur Verfügung. Diese
keiner Person zugeteilten Rufnummern wurden [jetzt im Amtsblatt
veröffentlicht](https://www.bundesnetzagentur.de/SharedDocs/Downloads/DE/Sachgebiete/Telekommunikation/Unternehmen_Institutionen/Nummerierung/Rufnummern/Mittlg148_2021.pdf;jsessionid=761910E99943300A355B7085EE182FB1?__blob=publicationFile&v=1).
