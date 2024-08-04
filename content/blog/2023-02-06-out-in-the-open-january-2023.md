---
title: "23 skidoo – Out in the Open January 2023"
author: "Klara Juhl (Code for Osnabrück), Jörg Reichert (Code for Leipzig), et al."
date: '2023-02-06T12:00:00+01:00'
excerpt: Monatlich erscheinender Überblick über Entwicklungen in der Open Data und Civic Tech Szene
topic: community
images:
- imgname: out-in-the-open-2023-01-header.jpg
  attribution: Foto von <a href="https://pixabay.com/de/users/pexels-2286921/">Pexels</a> auf <a href="https://pixabay.com/de/photos/offenes-zeichen-neon-lights-1836961/">Pixabay</a>
og_image: out-in-the-open-2023-01-header.jpg
type: blog
---

Warum eigentlich immer auf Anfang? Das Dateninstitut sieht abermals die Durchführung von Pilotprojekten vor - statt auf bereits bestehende Expertise aufzubauen. Die Erfahrung digitaler Ehrenamtler:innen bleibt in der Planung weitestgehend unberücksichtigt, [schreibt Wikimedia in einem neuen Blogbeitrag](https://blog.wikimedia.de/2023/01/19/dateninstitut-ehrenamtliche-expertise-nutzen/). Dadurch wird wertvolles Wissen nicht nur einfach übersehen, es ändert sich auch nichts an den grundsätzlichen, strukturellen Problemen im Umgang mit offenen Daten.

Eine Verordnung der EU-Kommission lässt immerhin auf die weitere Umsetzung der Open-Data-Richtlinie von 2019 hoffen: Innerhalb von 16 Monaten sind öffentliche Stellen verpflichtet, ["hochwertige Datensätze" kostenlos zur Verfügung zu stellen](https://www.heise.de/news/Open-Data-EU-Behoerden-muessen-hochwertige-Verkehrs-und-Wetterdaten-freigeben-7467174.html). Die Liste der zu publizierenden Daten umfasst sechs Kategorien, darunter z. B. die Erdbeobachtung oder auch Statistiken. Das erklärte Ziel der Verordnung: Die Daten sollen "einen großen Nutzen für die Gesellschaft, die Umwelt und die Wirtschaft" haben. Abzuwarten bleibt natürlich, wie die öffentlichen Stellen die Verordnung umsetzen. Die Durchführungsverordnung steht auch [in deutscher Sprache](https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32023R0138&from=EN#d1e213-43-1) zur Verfügung.

## Frisch eingetroffen: Neue offene Daten
Die Tagesschau [weitet ihr offenes Angebot aus](https://www.tagesschau.de/inland/tagesschau-creative-commons-101.html): Sämtliche kurze Erklärvideos, welche die Tagesschau zu einem breiten Themenspektrum erstellt, dürfen von nun an unter der Lizenz CC BY-SA 4.0 verwendet und bearbeitet werden. Die entsprechenden Inhalte werden [auf einer separaten Seite](https://www.tagesschau.de/multimedia/video/creativecommonsdossier-101.html) veröffentlicht.

Auch in unserem Nachbarland bewegt sich etwas. Das [Open Data-Angebot des Österreichischen Parlaments](https://www.parlament.gv.at/recherchieren/open-data/) hat einen neuen Anstrich bekommen. Zudem gibt es einige Neuerungen auf dem Portal, u. a. die Einführung einer JSON-API.
Noch ein Stückchen weiter im Süden [untersuchte der Bayerische Rundfunk den Pestizideinsatz im Apfelanbau](https://interaktiv.br.de/pestizide-im-apfel-anbau/index.html). Die Redaktion konzentrierte sich auf ein ausgewähltes Feld in Südtirol, welches den durchschnittlichen Einsatz von Pestiziden repräsentiert. Rund 38 Mal wurde hier während einer Saison gespritzt. Das Besondere an den ausgewerteten Daten: Sie stammen aus sog. Betriebsheften, die im Rahmen des [Südtiroler Pestizidprozesses](https://www.br.de/nachrichten/bayern/suedtiroler-apfelstreit-teilerfolg-fuer-pestizid-kritiker,Svq05i3) im Jahre 2017 eingezogen wurden. Die Redaktion bemühte sich um aktuellere Daten sowie Erhebungen aus Deutschland, wo die Daten allerdings nicht herausgegeben wurden.

### Gebäudekartierung als Chance für nachhaltige Stadtentwicklung
In Dresden geht demnächst eine neue Plattform online, auf der sich Bürger:innen an einem Gebäude-Kartierungsprojekt beteiligen können: Eigentlich hatte das Projekt mit dem langen Namen [Baukultur und klimagerechte Architektur in Dresden](https://www.citizenscience-wettbewerb.de/autorin/baukultur-und-klimagerechte-architektur-dresden) ein KI-basiertes Verfahren entwickelt -- doch einige Informationen über den Zustand der Gebäude waren aus den verfügbaren Datensätzen schwer oder gar nicht ermittelbar. Die Idee der Plattform ist deshalb [Interessierte mit Vor-Ort-Wissen in den Kartierungsprozess einzubeziehen](https://www.citizenscience-wettbewerb.de/blog/colouring-dresden-wie-kam-es-dazu). Die Motivation ist dabei nicht nur eine kulturwissenschaftliche: Mit Hilfe der gesammelten Daten sollen nachhaltiges Bauen und Sanieren gefördert werden.

## Der Zusammenhang von Offenheit, Standards, stabilen APIs und nachhaltiger Anwendungen 
Das Bundesinstitut für Bau-, Stadt- und Raumforschung (BBSR) veröffentlichte am 18. Januar seine [Auswertung](https://www.bbsr.bund.de/BBSR/DE/startseite/kurzmeldungen/erreichbarkeit-grundschulen.html), dass Grundschulen in Deutschland für ¾ der Bevölkerung in Laufweite erreichbar wären. Wirklich nachprüfen lässt sich das nicht, da die Daten zu den konkreten Standorten der Grundschulen aus lizenzrechtlichen Gründen nicht veröffentlicht wurden, wie eine [Anfrage](https://twitter.com/datenschatz/status/1616381958170320896) ergab. So braucht es weiterhin das zivilgesellschaftlich entwickelte und betriebene Projekt [JedeSchule.de](https://jedeschule.de/). Da Bildung Ländersache ist, veröffentlicht jedes Bundesland entsprechende Daten jeweils in einem anderen Format. So muss pro Bundesland ein [Scraper](https://github.com/Datenschule/jedeschule-scraper) von JedeSchule gepflegt werden, um die Schuldaten für Gesamtdeutschland über diese Scraper in einem einheitlichen Format zusammen zu führen. Näheres dazu auch in diesem [Blogbeitrag](https://codefor.de/blog/jedeschule-2/). 

Da die Deutsche Bahn (DB) selbst keinen Bestpreis-Kalender anbietet, wurde aus der Zivilgesellschaft heraus selbst eine Sparpreissuche [bahn.guru](https://bahn.guru/) entwickelt. Diese stützt sich auf eine API der DB, die nun nicht rückwärtskompatibel geändert wurde, so dass die Suche auf bahn.guru [nicht mehr funktionierte](https://twitter.com/Lenny_du_Nord/status/1617294456633413632). bahn.guru wurde zwar [zügig angepasst](https://twitter.com/juliustens/status/1617536396725735425), aber auch hier zeigt sich, dass Software nie wirklich fertig wird und ständiger Betreuung mit dem entprechenden personellen und zeitlichen Aufwand bedarf (Aufwand, den auch ChatGPT nicht wesentlich verringern würde, wie die Beobachtungen bei der Entwicklung des [BahnCard-Rechner](https://twitter.com/paul_ramisch/status/1620793713428688897) zeigen).

Eine Erfahrung, die nun auch das CityLab Berlin mit ihrem Stadtpuls Projekt machen musste. Am 31. Januar wurde der Dienst nach einjähriger Testphase eingestellt. In einem [Blogeintrag](https://stories.stadtpuls.com/stadtpuls-ende) wird selbstkritisch über die Gründe reflektiert und einige Lehren gezogen − Exemplarisch: Zielgruppen und Anwendungsfälle besser verstehen, nachhaltig tragbares Betreibermodell/Finanzierung finden, realistisch die eigenen Ressourcen einschätzen (z.B. bei Community-Management-Aufwand). Was vielleicht bei den Einschätzungen fehlt, ist die Frage, was der Sinn eines städtischen Innovationslabors ist, wenn die Stadt am Ende doch nicht die Kompetenz aufbauen kann/will, die dort entwickelten Lösungen selbst betreiben oder gar weiterentwickeln zu können. So bleiben solche Stadtlabore und deren Projekte nur ein Schmuckstück für die hiesige Stadtverwaltung, ohne selbst bei sich die notwendigen Veränderungen vollziehen zu müssen (die sich nicht nur auf einzelnen präsentablen Projekte, sondern auch auf das Etablieren von Infrastruktur, Standards, Abläufen beziehen).

Zudem merkt man bei den meisten umgesetzten Projekten, dass sie eigentlich universell auch auf anderen Städte / Regionen übertragbar wären und so fragwürdig ist, warum jede Stadt ihre eigenen digitalen Lösungen (neu) erfinden, bauen und betreiben muss. Eine Frage, die sich auch Christian Wölbert in seinem Artikel auf [heise](https://www.heise.de/meinung/Digitalisierung-der-Verwaltung-Gegen-jede-Logik-7466964.html) stellt und fordert, Webdienste die einheitliche Aufgaben abbilden stärker zu zentralisieren.  

"Städte sollten offene Datenmodelle verfolgen.", fordert Aurel von Richthofen in seinem [Tagesspiegel Background Standpunkt](https://background.tagesspiegel.de/smart-city/linked-open-data-und-semantische-webtechnologien-als-chancen-fuer-stadtdaten). Aus seiner Sicht sind Städte (und ihre Zivilgesellschaft) viel zu vielfältig, als dass diese sich in ein gemeinsames Datenmodell als kleinster Nenner pressen ließen. Mit Linked Open Data hätte man dagegen die Mittel zur Hand, auch unterschiedliche Modelle verknüpfen und auswerten zu können. Somit widerspricht dies auch nicht unbedingt der Forderung nach mehr Zentralisierung aus dem Absatz zuvor.  

Dabei ist noch nicht jeder Verwaltung klar was Open Data ausmacht: So bezeichnet die Senatsverwaltung für Umwelt, Mobilität, Verbraucher- und Klimaschutz Berlin (UMVK) es als Open Data, dass sie ihre Gedaten für Google Maps bereitstellt, damit diese Detailinformationen im Radrouting anzeigen können. Tatsächlich aber findet man besagte Daten nicht im Berliner Open Data-Portal, denn sie werden nur auf Anfrage herausgegegen, so dass man in diesem Fall nicht wirklich von Open Data sprechen kann, wie [@Datenschatz](https://twitter.com/datenschatz/status/1616778170505777152) richtigerweise anmerkt.

## Weitere Neuigkeiten aus der Open-Community
"Die Open-Source-Community sollte nicht mit einem Schlaraffenland verwechselt werden" - so steht es in der Bildunterschrift eines neuen [netzpolitik.org](https://netzpolitik.org/)-Artikels. Konkret geht es um die Matrix-Foundation, welche die Entwicklung des gleichnamigen Kommunikationsprotokolls vorantreibt. Das offene Protokoll kann sich über eine steigende Verbreitung freuen. Die Kehrseite der Erfolgsgeschichte sind [steigende Kosten, welche das Projekt kaum noch tragen kann](https://netzpolitik.org/2023/matrix-open-source-wachstum-in-geldnot/). Obwohl zahlreiche Unternehmen und Behörden Matrix nutzen, fließen wenig Gelder in die Kassen der Stiftung. Einmal mehr zeigt sich: Open-Source-Lösungen werden gerne und wie selbstverständlich genutzt, monetäre Unterstützung bleibt trotz vorhandener finanzieller Mittel oft aus.

Das Projekt [FragDenStaat](https://fragdenstaat.de/) kann sich hingegen über gleich zwei Erfolge freuen: Vor über einem Jahr klagte das Projekt in Bezug auf die Maskenaffäre - [und hat nun gewonnen](https://twitter.com/fragdenstaat/status/1616449968688226304). Das Bundesgesundheitsministerum muss nun den Schriftverkehr zwischen Ex-Gesundheitsminister Spahn und der Lobbyistin Andrea Tandler herausgeben.
Und: Unterlagen zu Gesprächen zwischen Armin Laschet und dem Energiekonzern Uniper darf das Land Nordrhein-Westfalen [nicht länger unter Verschluss halten](https://twitter.com/fragdenstaat/status/1615005626337222659). Inhaltlich geht es dabei um den Kohleausstieg, das Kraftwerk Datteln 4 und die Nordstream 2-Pipeline.

## Termine
 * CfP Deadline 23.02.2023: Failed yet successful: Learning from discontinued civic tech initiatives
   * https://discontinued-civictech.github.io/call
 * Abgabefrist 17.03.2023 für Interessenbekundung zur Teilnahme am Ergebnistransfer aus der Förderinitiative "Heimat 2.0": existierende OpenSource-Lösungen aus 5 Patenregionen in die eigene Region übernehmen. Zur Bewerbung zugelassen sind Gemeinden und Gemeindeverbände sowie zivilgesellschaftliche Institutionen
   * https://www.bbsr.bund.de/BBSR/DE/forschung/aufrufe/aktuelle-meldungen/heimat-2-0-foerderaufruf.html
 * Prototype Fund Förderrunde 14: bis zum 31.3.23 könnt ihr eure Projektidee zu OpenSource Software mit sozialem Mehrwert einreichen
   * https://prototypefund.de/bewerbt-euch-jetzt-fuer-runde-14/

## Veranstaltungen
 * Mittwoch, 08.02.2023 bis Freitag, 10.02.2023: 3rd Open Science Conference
   * https://www.un.org/en/library/OS23
 * Montag, 20.02.2023 bis Dienstag, 21.02.2023: ICODEA 2023 - 17. International Conference on Open Data and Energy Analytics
   * https://waset.org/open-data-and-energy-analytics-conference-in-february-2023-in-sydney
 * Freitag, 24.02.2023 bis Samstag, 25.02.2023, Zürich: Winterkongress der Digitalen Gesellschaft
   * https://winterkongress.ch/2023/program/
 * Samstag, 04.03.2023 bis Freitag, 10.03.2023: Internationale Open Data Day(s)
   * https://opendataday.org/ (auch einige Code for Labs von uns beteiligen sich mit lokalen Events, z.B. Karlsruhe: https://ok-lab-karlsruhe.de/projekte/odd/)
 * Samstag, 18.03.2023 bis Sonntag, 19.03.2023, Moers: Hackday Niederrhein 2023
   * https://www.codeforniederrhein.de/hackday-2023/
