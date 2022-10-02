---
title: "Alles Fassade? – Out in the Open Juni 2022"
author: "Klara Juhl - OK Lab Osnabrück, Jörg Reichert - OK Lab Leipzig, et al."
date: '2022-07-07T12:00:00+02:00'
excerpt: Monatlich erscheinender Überblick über Entwicklungen in der Open Data und Civic Tech Szene
topic: community
images:
- imgname: out-in-the-open-2022-06-header.jpg
  attribution: Foto von [Linnaea Mallette](https://publicdomainpictures.net/en/browse-author.php?a=18382) auf [publicdomainpictures.net](https://publicdomainpictures.net/en/view-image.php?image=265257&picture=neon-open-sign)
og_image: out-in-the-open-2022-06-header.jpg
type: blog
---

## Verschwörhaus

Der im [letzten Out-In-The-Open-Blogbeitrag]({{< ref "/content/blog/2022-06-09-out-in-the-open-may-2022.md" >}}) bereits erwähnte Konflikt um das Verschwörhaus Ulm ist weiter eskaliert: Nachdem die Ehrenamtlichen sich nicht darauf einlassen wollten, die jahrelang aufgebaute Marke "Verschwörhaus" (und den mit ihr verbundenen Werte-Versprechen) der Stadt zu überlassen, wurden sie nun aus den bisherigen Räumlichkeiten [geworfen](https://verschwoerhaus.de/das-verschwoerhaus-zieht-um/).

An dieses Thema auch knüpft die Pilotfolge eines neuen Podcasts in der deutschsprachigen CodeFor-Community an. [Andreas Hubel](https://twitter.com/saerdnaer) und [Stefan Kaufmann](https://twitter.com/_stk) sprechen in ["Leuchttürme und Fassaden"](https://video.codefor.de/w/7eu8fTq1FGMnrEycgt3JKM) über die Hintergründe der aktuellen Geschehnisse. Viel Spaß beim Anhören! 

## Transparenzgesetz(e)

Ein Zusammenschluss mehrerer Initiativen und Vereine stellt einen Entwurf für das Bundestransparenzgesetz vor - darunter z. B. [FragDenStaat](https://fragdenstaat.de/) und die [Deutsche Gesellschaft für Informationsfreiheit](https://dgif.de/). Der Entwurf kann nicht nur [öffentlich eingesehen, sondern auch kommentiert werden](https://consul.mehr-demokratie.info/transparenzgesetz). Jede:r kann die eigene Sichtweise einbringen - egal ob "Volljurist:in oder politisch mehr oder weniger interessiert".

Die Londoner Verkehrsgesellschaft LNER wird auf dem Weg zu mehr Transparenz kreativ: [Das Unternehmen stellte zunächst eine IFG-Anfrage an sich selbst](https://twitter.com/fragdenstaat/status/1536759444922675201), um diese prompt zu beantworten und Dokumente an zentraler Stelle zu veröffentlichen.

Auch Sachsen soll nun endlich ein Transparenzgesetz bekommen, aber wie FragDenStaat [bemängelt](https://twitter.com/fragdenstaat/status/1542431477467648000), liegt die Kostendeckelung mit 2500€ fünfmal so hoch wie im Bund. Die Kostenuntergrenze von 600 Euro (d.h. erst ab dieser Höhe dürfen die Kosten dem Antragsteller in Rechnung gestellt werden) ist allerdings eine bessere Regelung als im für den Bund geltenden Transparenzgesetz.  

## OpenWashing

Die neue OpenData-Plattform in Sachsen-Anhalt (mit dem Namen SAiNT (mit dem Namen *SAiNT* für Sachsen-Anhalt intelligent Network Technology) ist nicht so open, wie sie vorgibt: denn Open Data bedeutet "openly accessible", nicht "freely accesssible". Die verpflichtende Registrierung zieht dagegen eine Mauer um die Daten, die das Label "open data" konterkariert, wie datenschatz im entsprechenden [Twitter-Thread](https://twitter.com/datenschatz/status/1537358161975336963) ausführt.

Ein ähnliches Problem hat der [Mobilitäts-Daten-Marktplatz](https://service.mdm-portal.de/mdm-portal-application/), auf dem selbst kostenlose, frei lizensierte Datensätze erst nach Registrierung (die die Angabe der Privatadresse umfasst) möglich ist.

## Dokukratie

Mit dem [Tool Dokukratie hat FragDenStaat eine Recherchemöglichkeit für "Dokumente unserer Demokratie"](https://www.dokukratie.de/) geschaffen. Viele Informationen sind bereits öffentlich verfügbar, jedoch nur schwer auffindbar. Die zentrale Suche erleichtert nun die Recherche nach Kleinen Anfragen, Gutachten der Wissenschaftlichen Dienste und Dokumenten aus Untersuchungsausschüssen. Alle Scraper, die für das Sammeln der Dokumente zuständig sind, sind [öffentlich verfügbar](https://github.com/okfde/dokukratie) und somit weiterverwendbar. Das Projekt wird vom Medieninnovationszentrum Babelsberg gefördert. [Stefan Kaufmann](https://twitter.com/_stk/status/1538804928344469510) stellt es sich weiterhin als ein Problem dar, dass ein solches Werkzeug von Zivilgesellschaft gebaut und betrieben werden muss, statt dass der Staat selbst eine solche Funktionalität anbietet. So droht womöglich das gleiche Schicksal von [kleineanfragen.de](https://kleineanfragen.de/info/stilllegung), das eine ähnliche Funktion anbot, aber unter anderem am großen Nachpflegeaufwand der vielen heterogenen und sich ständig ändernden APIs und Dokumentenstrukturen scheiterte. 

## Weitere Apps

Demografische und ökonomische Wanderungsprozesse innerhalb von Städten und Regionen nehmen zu. Das [Analyse- und Visualisierungstool hin&weg](https://hin-und-weg.online/) unterstützt beim frühzeitigen Erkennen von Wanderungstrends und kann z. B. für planerische Entscheidungen zurate gezogen werden. Die Open Source-Software gibt's [kostenfrei zum Download](https://hin-und-weg.online/download/).

Die Entwickler [Hans Hack](https://twitter.com/hnshck) und [Alsino Skowronnek](https://twitter.com/Alsinosko) haben für das [BBSR](https://www.bbsr.bund.de/BBSR/DE/startseite/_node.html) und das [ILS](https://www.ils-forschung.de/) das "Incora Fläche"-Dashboard umgesetzt: [Eine Karte visualisiert](https://incora-flaeche.de/) den Flächenverbrauch und die Landbedeckung in Deutschland. Die verwendeten Satellitendaten stammen vom Deutschen Zentrum für Luft- und Raumfahrt.

Wer mit Geodaten arbeitet, kennt das Problem: Für viele Transformationsschritte (Format-Konvertierung, Reprojektion, u.a.) braucht man ein lokal installiertes Gdal. Mit [gdal3.js](https://gdal3.js.org/) gibt es nun endlich eine Portierung dieser Anwendungen ins Web. Die Portierung es zudem [OpenSource](https://github.com/bugra9/gdal3.js).

## APIs
Bei Dashboards, wie z.B. dem der [Berliner Morgenpost](https://www.morgenpost.de/infografik/#/grafik/62b5d08a0b908d73fcea4692), das den Strombedarf der Berliner aufgeteilt nach Gebäudeblöcken zeigt, [fragt sich datenschatz, woher die Daten stammen](https://twitter.com/datenschatz/status/1537411609982816257) und [listet](https://twitter.com/datenschatz/status/1537412468351328256) einige, der meist nicht offiziell dokumentierten APIs auf.  

Besser mancht es die API des Bundestages, deren Dokumentation ist nun auch in englischer Sprache verfügbar [[PDF](https://data4parliaments.org/wp-content/uploads/2022/06/API-Documentation-for-DIP_EN.pdf)]. 

Dennoch wird der Nutzen öffentlicher APIs in vielen anderen Ländern deutlich besser gehoben als hierzulande, geht aus diesem [Report](https://de.public.io/report-post/offentliche-apis-und-govtech-mit-interoperabilitat-innovation-fordern) hervor. Marco Wiedemann [fordert](https://twitter.com/mariosorg/status/1541766902174949381) daher, dass [govdata](https://www.govdata.de/) personell aufgestockt werden sollte, um auch APIs zu listen und besser auffindbar zu machen.

Einen Anfang macht schon mal [Thomas Tursics](https://twitter.com/tursics), der gerade eben zu govdata [gewechselt](https://twitter.com/Hamburg67/status/1542784443097702400) ist.

Auch [Stefan Kaufmann](https://twitter.com/_stk) übernimmt eine neue [Aufgabe](https://twitter.com/lilliiliev/status/1542809597865598976) und wechselt als Referent ins Politik-Team von Wikimedia Deutschland.

## Termine aus der Welt der offenen Daten

* 28.07., 19:00 - 21:00 Uhr: **Offener Code For Germany Community Call**
https://bbb.ulm.dev/b/cfgcommunitycall
