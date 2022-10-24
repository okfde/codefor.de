---
title: "Zeit für einen Kulturwandel – Out in the Open September 2022"
author: "Jörg Reichert - Code for Leipzig, et al."
date: '2022-10-17T12:00:00+02:00'
excerpt: Monatlich erscheinender Überblick über Entwicklungen in der Open Data und Civic Tech Szene
topic: community
images:
- imgname: out-in-the-open-2022-09-header.jpg
  attribution: Foto von [Thomas Sondermann](https://pixabay.com/users/analogicus-8164369/) auf [pixabay.com](https://pixabay.com/photos/open-sign-a-notice-wood-painted-4033043/)
og_image: out-in-the-open-2022-09-header.jpg
type: blog
---

## Politik

Der Koalitionsvertrag der aktuellen Bundesregierung sieht einen Rechtsanspruch auf OpenData vor. Doch immer noch fehlt dieser, wie Stefan Kaufmann in [seiner Kolumne bei netzpolitik.de](https://netzpolitik.org/2022/oeffentliches-geld-oeffentliches-gut-es-fehlt-ein-rechtsanspruch-auf-offene-daten) kritisiert. Wie dieser umgesetzt werden könnte, kann man im [neuesten böll.brief](https://www.boell.de/de/2022/09/15/daten-als-oeffentliche-infrastruktur) nachlesen.

Ebenfalls auf sich warten lässt das vor einem Jahr versprochene Transparenzgesetz, [wie netzpolitik.de](https://netzpolitik.org/2022/informationsfreiheit-haelt-die-ampel-ihr-transparenzversprechen/) erinnert. Ein breites Bündnis aus der Zivilgesellschaft hat deshalb bereits im Sommer einen [Entwurf](https://consul.mehr-demokratie.info/transparenzgesetz) für ein solches Gesetz vorgelegt. Die finale Version soll im Herbst veröffentlicht werden.

## Haushaltsdaten

Am 14. September gab die [Technologiestiftung Berlin](https://www.technologiestiftung-berlin.de) in einer [Pressemitteilung](https://www.technologiestiftung-berlin.de/fileadmin/Redaktion/PDFs/Presse/220914_PM_Haushaltsdaten_SenFin.pdf) bekannt, dass nun die [interaktive Visualisierung der Haushaltsdaten Berlin 2022/23](https://haushaltsdaten.odis-berlin.de) verfügbar ist. Entwickelt wurde die Webseite von [ODIS](https://odis-berlin.de/) und dem [CityLab Berlin](https://www.citylab-berlin.org/), mit fachlicher Unterstützung der [Berliner Senatsverwaltung für Finanzen](https://berlin.de/sen/finanzen/). Der Source Code ist unter freier Lizenz auf [Github](https://github.com/berlin/haushaltsdaten) veröffentlicht. Wie dort auch nachzulesen ist, basiert das Projekt auf dem Ansatz von [OffenerHaushalt.de](https://offenerhaushalt.de/), der 2012 von der [OKF](http://www.okf.de/) entwickelt wurde, und nutzt auch dessen [Datenstandard](https://offenerhaushalt.de/page/datenstandard.html). OffenerHaushalt.de selbst wird leider nicht weitergepflegt, wie in diesem [Ticket](https://github.com/okfde/offenerhaushalt.de/issues/236) beschrieben, da die zu Grunde liegende OpenSpending API zu Datopian umgezogen wird, wie dieser [Blog-Eintrag](https://www.datopian.com/2020/07/09/open-spending/) ausführt. Am 23. November, 19:00 Uhr, wird es im CityLab Berlin im Rahmen des [3. Developer Meetups](https://citylab-berlin.org/de/events/developer-meetup-3/) eine Coding-Session zum Haushaltsdaten-Projekt geben, an der sich auch Außenstehende aktiv beteiligen können. 

Dem Thema Haushaltsdaten-Visualisierung/-Auswertung hat man sich auch schon im OKLab Karlsruhe [angenommen](https://ok-lab-karlsruhe.de/projekte/haushalt/). 

Als vergleichbare Projekte sind außerdem [OffenerHaushalt.at](https://offenerhaushalt.at/) für Österreich und [Cityvizor.cz](https://cityvizor.cz/landing) für Tschechien ([Beispiel Prag](https://cityvizor.praha.eu/praha1/prehled)), letzteres steht ebenfalls [OpenSource](https://github.com/cityvizor/cityvizor) (Tschechisch-Kenntnisse allerdings erforderlich), zu nennen.

Problematisch bleibt bei alledem, wenn schon die Eingangsdaten nur als XLSX ohne weitere Dokumentation bereitgestellt werden. Hier wäre es wünschenswert, dass die Daten in Formaten wie beispielsweise dem [Fiscal Data Package](https://specs.frictionlessdata.io/fiscal-data-package/#introduction), einem [Standard](https://specs.frictionlessdata.io/#overview) von [frictionless data](https://frictionlessdata.io), folgen würden. 

Um die Haushaltsdaten-Anwendung partizipativer zu gestalten, wäre zudem die Unterstützung für die interaktive Planung/Simulation von [Bürgerhaushalten](https://www.buergerhaushalt.org) und Stadtteilbudgets (beispielhaft [Berlin Marzahn-Hellersdorf](https://www.berlin.de/ba-marzahn-hellersdorf/politik-und-verwaltung/service-und-organisationseinheiten/sozialraumorientierte-planungskoordination/artikel.1188691.php)) denkbar.

## Abschluss der Hackathon-Reihe Coding da Vinci

Am 23. September fand die Coding-da-Vinci-Abschlusskonferenz im Jüdischen Museum Berlin statt. Denn nach 8 Jahren und 15 Hackathons endete die Förderung durch die Kulturstiftung des Bundes. In einem [Artikel](https://www.deutsche-digitale-bibliothek.de/content/journal/aktuell/kultur-hackathon-coding-da-vinci-ein-ende-ein-anfang) der [Deutschen Digitalen Bibliothek](https://www.deutsche-digitale-bibliothek.de) blickt Wiebke Hauschildt zurück. Andrea Lehr von der Coding-da-Vinci-Geschäftsstelle lässt in ihrem [Beitrag](https://codingdavinci.de/de/news/es-koennt-ein-anfang-sein-nostalgie-und-aufbruchsstimmung-berlin) die Abschlusskonferenz Revue passieren. Auf dem [Wikimedia-Blog](https://blog.wikimedia.de/2022/10/04/coding-da-vinci-portrat-digitalkombinat/) zeigt Patrick Wildermann beispielhaft, was aus den Coding-da-Vinci-Stipendien erwachsen konnte. 

Die [kritische Haltung](https://codefor.de/blog/hackathon-leitfaden/) zu Hackathons von Code for Germany hat weiterhin Bestand. Doch waren die Coding-da-Vinci-Hackathons doch etwas besonderes. Zunächst waren sie nie auf einzelnes Wochenende beschränkt, sondern liefen mindestens sechs Wochen, sodass statt Mockups und Hochglanz-Präsentationen beim Abschluss Prototypen mit einer gewissen Reife präsentiert werden konnten. Zudem konnte die zusätzliche Zeit für den fachlichen Austausch mit den Datengebern genutzt werden. Generell besteht die größte Leistung von Coding da Vinci darin, die Bedenken bei Museen, Bibliotheken und Forschungsinstituten abzubauen, ihre Daten dauerhaft nach den Regeln von OpenData bereitzustellen. Viele aus dem Code for Germany Netzwerk haben mitgeholfen, die Daten der Datengeber im Vorfeld zu sichten und in ein maschinenlesbare Format zu bringen, sodass sie später für die Teilnehmenden nutzbar waren. Vertreter des Code-for-Netzwerks waren zum Teil auch in die Organisation der Veranstaltungen eingebunden oder gar selbst Teil der Projektteams. 

Abschließend bleibt jedoch festzustellen, dass die Mehrzahl der Projekte nach dem Abschluss des jeweiligen Hackathons nicht weitergeführt wurde. Den beteiligten Institutionen fehlen weiterhin Geld und Kompetenzen, den Weiterbetrieb und die Weiterentwicklung der entstandenen Anwendungen zu beauftragen oder gar selbst zu stemmen. Gleiches gilt für die kontinuierliche Bereitstellung und Pflege der Daten und Metadaten in maschinenlesbarer Form. Das ist ein prinzipielles Problem der finanziellen Ausstattung von Kultureinrichtungen einerseits, aber auch ein Problem bei den Kriterien bei der Vergabe öffentlicher Fördermittel, die zu sehr an zeitlich begrenzten Projekten als am Aufbau von bleibenden Infrastrukturen ausgerichtet sind. Hackathons sollten diese Lücke nicht füllen müssen.

Auf Kultur-Hackathons müssen wir dennoch nicht verzichten. So begann ein Tag nach der Abschlusskonferenz der [Creating New Dimensions – 3D-Hackathon](https://creating-new-dimensions.org/). Ausgerichtet unter anderem von der [Nationalen Forschungsdaten-Infrastruktur (NFDI) für Kultur](https://nfdi4culture.de/) legt er den Schwerpunkt auf [Datensets mit 3D-Modellen](https://creating-new-dimensions.org/Datensets/), die von Institutionen aus ganz Deutschland und sogar der Schweiz bereitgestellt werden. Man darf auf die Ergebnisse der [Projektteams](https://hackdash.org/dashboards/cnewd#!) bei der Abschluss-Präsentation am 24. Oktober gespannt sein. Und auch in der Schweiz gibt es im November die Möglichkeit am [GLAMhack 2022](http://make.opendata.ch/wiki/event:2022-11) teilzunehmen, das Format gibt es dort auch bereits seit 2015, eine Vorstellung der Projekte aus dem letztes Jahr findet sich [hier](https://www.infoclio.ch/en/open-cultural-data-hackathon-2021).

## Bits und Bäume 2022

Vom 30.9 bis 2.10. fand nach 2018 das zweite Mal die [Bits-und-Bäume-Konferenz](https://bits-und-baeume.org/konferenz-2022/) in Berlin statt. Die meisten der 130 Vorträge lassen sich auch nachträglich [ansehen](https://media.ccc.de/b/conferences/bitsundbaeume).
Eine kleine Auswahl von Vorträgen mit Schwerpunkt OpenData:  
 * [Parkplatzzählung und Parkraumanalysen mit OpenStreetMap](https://fahrplan22.bits-und-baeume.org/bitsundbaeume/talk/9S8MDK)
 * [Mit OpenStreetMap die Verkehrswende begleiten – Tagging, Tools und Analysen](https://fahrplan22.bits-und-baeume.org/bitsundbaeume/talk/8WFNPK/)
 * [Smart City / Country Projekte selber betreiben und per IoT offene Daten erzeugen!](https://fahrplan22.bits-und-baeume.org/bitsundbaeume/talk/HYWZY3/)

## Neue OpenData

Mehr als 40 Freiwillige haben im vergangenen Jahr auf einem Luftbild von Berlin Autos markiert. Die Karte [How many cars](https://hanshack.com/howmanycars/) von Hans Hack zeigt, wie viele Fahrzeuge nur herumstehen und wie viele tatsächlich fahren.

Das digitale Oberflächenmodell Sachsen-Anhalts steht als photogrammetrische Punktwolke mit 20cm Auflösung kostenfrei zur Verfügung. [Ben Jamin' zeigt beispielhaft einen Ausschnitt](https://twitter.com/Terranigmus/status/1570395805252554756).

Eine [Datenbank](https://carbontracker.org/finally-we-have-a-global-registry-of-fossil-fuels/) zu bereits gespeicherten, neu produzierten und aktuell genutzten fossilen Energieträgern, weltweit gemessen in der Menge an Emissionen, die sie (bei schließlich Nutzung) verursachen, steht nun öffentlich zur freien Verfügung. 

[heatview.de](http://heatview.de), eine Karte zur Visualisierung von Unfallschwerpunkten, wurde um die Unfalldaten 2021 vom statistischen Bundesamt ergänzt. Die Seite ist für jeden Kreis Deutschlands nutzbar, dazu einfach den amtlichen Gemeindeschlüssel [nachschlagen](https://www.orte-in-deutschland.de/amtlicher-gemeindeschluessel-ags.html) und die ersten 5 Stellen als Wert für den Parameter "kreis" in der Adressleiste setzen (z.B. [11000](https://heatview.de/?kreis=11000) für Berlin).  

Nachdem sich Datenschatz [gewundert](https://twitter.com/datenschatz/status/1569324349894664194) hat, dass die deutschlandweiten Gehaltsinformationen nur als [Suchformular](https://web.arbeitsagentur.de/entgeltatlas/) und nicht als OpenData von der Bundesagentur für Arbeit bereitgestellt werden, gab es den Hinweis auf die inoffizielle [API](https://github.com/bundesAPI/entgeltatlas-api) des zivilgesellschaftlich betriebenen [bund.dev](https://bund.dev).

## Und sonst so
 * Robert Haase [weist darauf hin](https://twitter.com/haesleinhuepf/status/1565558679449075712), dass ab sofort auf GitHub, Zendora und ähnlichen Plattformen veröffentlichte OpenSource-Software und OpenData als zitierfähige Publikationen für Fördermittelanträge bei der Deutschen Forschungsgemeinschaft genutzt werden können.
 * Kennt ihr schon den [Blautest](https://twitter.com/footils/status/1568613432194224128)? Das ist ein einfacher Test, wie fahrradfreundlich eine Stadt im Vergleich zu einer anderen ist. 
 * [Wiki Speedruns](https://wikispeedruns.com/): ein Browsergame, in dem man möglichst schnell den Weg zwischen zwei Wikipedia-Einträgen finden muss — nur mithilfe der enthaltenen Links. 
 * es läuft aktuell noch das [Hacktoberfest](https://hacktoberfest.com), was das ist, erklärt [diese Anleitung](https://itsfoss.com/hacktoberfest-guide/)

## Veranstaltungen
 * Freitag, 07.10. bis Sonntag, 09.10.2022: **WikiCon 2022**
   * https://de.wikipedia.org/wiki/Wikipedia:WikiCon_2022
 * Montag, 10.10.2022: **OKLab Berlin**: Einblicke in die Arbeit der Veröffentlichung von Gesundheitsdaten als Open Data beim Robert-Koch-Institut (RKI)
   * https://www.meetup.com/de-DE/ok-lab-berlin/events/zfccfsydcnbnb/ 
 * Mittwoch, 19.10.2022, 20:00 - 22:00: **Open Transport Meetup**
   * https://github.com/transportkollektiv/meetup/wiki
 * Dienstag, 25.10.2022 19:00 - 21:00 Uhr: **CFG-Community-Call**
   * https://bbb.ulm.dev/b/cfgcommunitycall
 * Donnerstag, 27.10.2022 10:00 – 11:00 Uhr: **Kommunales Open-Data-Netzwerktreffen**: Mehr als 10 Jahre Open Data in Kommunen: Wo stehen wir jetzt?
   * https://blog-smartcountry.de/veranstaltung-austauschformat-fuer-open-data-in-kommunen/
