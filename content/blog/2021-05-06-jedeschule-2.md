---
title: "jedeschule.de 2.0"
date: 2021-05-06T09:00:00+02:00
author: "Knut Hühne & Knut Perseke - OK Lab Berlin & Matthias Jacob - OK Lab Potsdam"
excerpt: jedeschule.de ist wieder da - mit mehr aktuellen Daten und neuer API
topic: community
images:
- imgname: jedeschule-2.jpg
type: blog
---

Vor vier Jahren [veröffentlichte](https://okfn.de/blog/2017/03/jedeschule-launch/) die Open
Knowledge Foundation Deutschland zusammen mit der NGO “BildungsCent” die Website jedeschule.de, um
über alle allgemeinbildenden Schulen in Deutschland zu informieren. Das Projekt machte erstmals
Schuldaten aller Bundesländer an einer zentralen Stelle verfügbar. Im Nachgang bestanden allerdings
wenig Ressourcen, um das Projekt vonseiten der OKF weiterführen zu können.

Die gesammelten Daten des Projektes basieren auf Webscraping – also auf der automatisierten
Extraktion von Daten aus Websites. Webscraping ist eine sehr fragile Art Daten zu extrahieren und so
haben sich in den letzten Jahren einige Änderungen an den Websites der Bundesländer ergeben, die
Änderungen am Code der Scraper notwendig gemacht haben.  Heute freuen wir uns, euch ein großes
Update ankündigen zu können. In den letzten Monaten sind Freiwillige aus der codefor.de Community
zusammen gekommen, um die Scraper des ursprünglichen Projektes zu aktualisieren und dafür zu sorgen,
dass sie wieder für alle Länder funktionieren. Erfreulicherweise hat es aber auch bei einigen der
Länder Fortschritte gegeben. So stellen mehrere Länder ihre Daten heute per API (einer
wohldefinierten Programmierschnittstelle) oder per CSV-Download bereit. Dies erleichtert die
Weiternutzung der Daten ungemein, da kosmetische Änderungen an den Websites nicht mehr dazu führen,
dass die Webscraper – und somit die gesamte Datenextraktion – scheitert. Wirklich wünschenswert
im Sinne einer nachhaltigen Dateninfrastruktur wäre es jedoch, wenn alle Bundesländer ihre Daten
in einem einheitlichen und standardisierten Format bereitstellen würden. Sie könnten die Daten
dafür etwa über die zentrale Datenplattform [govdata](https://www.govdata.de) verfügbar machen. Ein 
von der Community getragenes Projekt ist keine nachhaltige Lösung für diese Art von Stammdaten
von großem öffentlichen Interesse. An dieser Stelle sei auch noch einmal auf den [Blogpost zur
Abschaltung von kleinanfragen.de](https://okfn.de/blog/2021/01/zur-abschaltung-von-kleine-anfragen/)
verwiesen – die gleichen Probleme, mit denen kleineanfragen.de zu kämpfen hatte, ließen sich so auch
auf jedeschule.de übertragen.

Wir haben uns bei Version 2 von jedeschule.de für eine etwas andere Herangehensweise entschieden als
beim letzten Mal. Die Website jedeschule.de zeigt nach wie vor die Daten von 2017. Diese sind etwas
umfangreicher als die neuen Daten, so haben wir dort z.B. auch Arbeitsgemeinschaften für die
Bundesländer Sachsen und Berlin. In der neuen Version haben wir uns zunächst auf Stammdaten
konzentriert. Dafür haben wir ein einheitliches Datenmodell entwickelt und die Daten für alle
Bundesländer konsistent verfügbar gemacht. Die Daten stehen sowohl als [CSV
Download](https://jedeschule.codefor.de/csv-data/) als auch erstmalig [per
API](https://jedeschule.codefor.de/docs) zur Verfügung. Außerdem werden die Scraper nun wöchentlich
ausgeführt – die Schuldaten sollten dadurch auf einem aktuelleren Stand bleiben als bei der letzten
Version.

Eine große Hilfe bei der Entwicklung der neuen Scraper waren uns zwei Studierende der HTW Berlin,
die bei der systematischen Erneuerung geholfen haben. An dieser Stelle möchten wir uns dafür nochmal
ganz herzlich bedanken!

Die neue Version von jedeschule.de ist noch nicht fertig. Deshalb brauchen wir eure Hilfe. Auf
[Github](https://github.com/Datenschule/jedeschule-scraper/issues) findet ihr Features, die wir noch
nicht implementiert haben. Unter dem [good first issue
Label](https://github.com/Datenschule/jedeschule-scraper/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)
findet ihr Features, die ein guter Einstieg in die Mitarbeit an dem Projekt sein sollen. Wir freuen
uns sehr über eure Kommentare und Pull Requests. Solltet ihr Lust haben euch zu beteiligen, wisst
aber noch nicht genau, wie, dann schreibt auch gerne in die Kommentare der Issues.

Für alle, die mehr über das Projekt erfahren möchten, laden wir herzlich in das digitale Open Lab
vom OK Lab Berlin am 10. Mai um 19:00 Uhr ein. Dort werden wir noch mal einen etwas größeren
Überblick über die Geschichte von jedeschule.de geben und die neue Version vorstellen. Dort habt ihr
dann auch die Möglichkeit eure Fragen zu stellen oder mit uns darüber zu sprechen, wie ihr euch in
das Projekt einbringen könnt. Mehr Informationen zu der Veranstaltung findet ihr auf
[Meetup](https://www.meetup.com/OK-Lab-Berlin/events/zfccfsycchbnb/) und
[Gettogether](https://gettogether.community/events/10797/jedeschule-20-making-all-of-germanys-schools-accessible-once-again/).
Wir freuen uns auf euch!

Der gesamte Code ist natürlich nach wie vor Open Source und auf Github verfügbar. Sowohl für die
neue [API](https://github.com/codeforberlin/jedeschule-api) als auch für die
[Scraper](https://github.com/Datenschule/jedeschule-scraper).

Wir haben uns in den letzten Jahren immer sehr gefreut, wenn wir von euch gehört haben, wofür ihr
die Daten genutzt habt. Solltet ihr mit den Daten gearbeitet haben, freuen wir uns sehr, wenn ihr
uns das [per E-Mail](mailto:info@jedeschule.de) oder [per Twitter](https://twitter.com/codeforde)
mitteilt. Daten sind nur dann sinnvoll, wenn sie auch genutzt werden. Unsere Hoffnung mit
jedeschule.de – aber auch mit vielen weiteren Projekten bei codefor.de – ist es, die Nutzung von
Daten zu vereinfachen. Eure Geschichten sind daher für uns eine große Motivation. Wir sind gespannt,
was ihr mit den Daten alles erforschen, prototypen und entwickeln werdet!



