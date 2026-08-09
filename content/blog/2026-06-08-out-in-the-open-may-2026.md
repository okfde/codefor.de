---
title: "Pastiche – Out in the Open Mai 2026"
author: "Jörg Reichert (Code for Leipzig)"
date: '2026-06-08T08:00:00+02:00'
excerpt: Monatlich erscheinender Überblick über Entwicklungen in der Open Data und Civic Tech Szene
topic: community
images:
- imgname: out-in-the-open-2026-05-header.jpg
  attribution: <a href="https://pixabay.com/photos/sign-store-tobacco-shop-parcel-shop-10293918/">Foto</a> von <a href="https://pixabay.com/users/sannsie-40193152/">sannsie</a> auf <a href="https://pixabay.com/">Pixabay</a>
og_image: out-in-the-open-2026-05-header.jpg
type: blog
---

## Open Data
### Linked Open Data
Der W3C-Standard [CSV on the Web (CSVW)](https://csvw.org) definiert, wie sich tabellenförmige Daten mit Semantik anreichern lassen. Eine [Online-Vorlesung](https://www.youtube.com/watch?v=uMEFHSsww6k) des britischen [Open Data Instituts (ODI)](https://theodi.org) zeigt beispielhaft, wie man diesen Reifegrad Schritt für Schritt erreicht. Dazu gehört eben auch der Schritt, das CSV so weit aufzuräumen, dass es sich danach sicher machinell automatisiert weiterverarbeiten lässt, wird gerne von offiziellen Stellen vergessen, [wie Stefan vermutet](https://stefan.bloggt.es/2026/05/linked-open-data-mit-csvw-und-fuer-ratsprotokolle/), auch weil sie immer noch zu selten in die Verlegenheit kommen, selbst mit solchen Daten zu arbeiten.

[Seit dem 1. Juni](https://mastodon.social/@PrototypeFund/116673862194089788) läuft [die nächste Förderperiode](https://www.prototypefund.de/projects/jahrgaenge/jahrgang-02) vom [Prototype Fund](https://www.prototypefund.de). Unterstützt wird in dieser unter anderem [ein Projekt](https://www.prototypefund.de/projects/object-oriented-linked-data-oo-ld), das ein Framework für Software-Entwickler schaffen möchte, das Objekt-Orientierung und Linked Data basierend auf JSON-Schema und JSON-LD miteinander verknüpft.

Die [Zeitschriftendatenbank (ZDB)](https://zdb-katalog.de/index.xhtml) der Deutschen Nationalbibliothek [bietet nun](https://openbiblio.social/@nabatz/116595622896548036) auch eine [SPAQRL-Schnittstelle](https://sparql.dnb.de/zdb) an.

### Open Data in der Praxis
[Eine vierteilige Blogserie](https://elektroelch.de/blog/wettervorhersagen-mit-daten-des-dwd-teil-1-4-uebersicht/) hat uns Lutz Schröer [vor den Latz geknallt](https://mastodon.social/@Latz/116528147563435486), in der er beschreibt, wie man die Open-Data-Schnittstele des Deutschen Wetterdienstes (DWD) über NodeJS nutzen kann, um über sie einfache Standortsuchen aber den Abruf von 
[Model Output Statistics-MIX (MOSMIX)](https://www.dwd.de/DE/leistungen/met_verfahren_mosmix/met_verfahren_mosmix.html)-Vorhersagen zu bewerkstelligen.

Gültige Telefonnummern, an die aber garantiert [niemand rangeht](https://mastodon.de/@winniehell/116577286214434702), sind die so genannten ["Drama Numbers"](https://www.bundesnetzagentur.de/DE/Fachthemen/Telekommunikation/Nummerierung/_DL/mittlg148_2021.pdf?__blob=publicationFile&v=1).

### Open Data in der Forschung
Im Rahmen seiner Bachelorarbeit ruft Alexander Schratzberger (Uni Salzburg) [dazu auf](https://mastodon.social/@datagvat/116639920997978787), an [seiner anonymen Umfrage](https://forms.office.com/e/qngMnXDWB3) zu Open Data in der europäischen Digital- & Geodatenpolitik, speziell zu Themen wie INSPIRE, Copernicus und digitaler Souveränität teilzunehmen.

Welche ([kaskadierenden](https://fediscience.org/@petersuber/116630375801918587)) Auswirkungen sich ergeben, wenn Forschungsdaten in der Wissenschaft nicht mehr zur Verfügung stehen, hat [dieses Arbeitspapier](https://www.sciencedirect.com/science/article/pii/S1751157726000465) untersucht. Denn man als [Zwerge auf den Schultern von Riesen](https://de.wikipedia.org/wiki/Zwerge_auf_den_Schultern_von_Riesen). profitiert man von den Vorarbeiten anderer. Sind deren Ergebnisse nicht mehr nachvollziehbar, geht Zeit dafür verloren, sie mühevoll selbst neu zu reproduzieren, statt diese in die Gewinnung neuer Erkenntnisse auf Basis dieser stecken zu können.

### Schutzbedürftigkeit von offenen Daten
Die (ökonomischen) Begehrlichkeiten, die z.B. der zu schaffende Europäische Gesundheitsdatenraum weckt, sollten nicht einfach über die Rechte derer hinweggehen, aus deren Datensätze sich dieser speist. Dafür reicht eine individuelle Opt-Out-Möglichkeit nicht mehr aus. Vertretungsgruppen der Betroffenen sollten stattdessen [in die Lage versetzt werden](https://katinamagazine.org/content/article/open-knowledge/2026/the-commodification-of-sensitive-open-data), nicht nur auszuhandeln, welche Datenattribute nicht erfasst bzw. nachträglich entfernt werden, sondern auch sicherzustellen, dass die erzielten wirtschaftlichen Vorteile auch zurück an die Gemeinschaft fließen und nicht nur in die Taschen Weniger. Unter solchen Umständen ist dann auch die Bereitschaft größer, (auch persönliche) Daten zu teilen, wenn durch sie die notwendige Transparenz entsteht, zu einem gesamtgesellschaftlichen Nutzen beizutragen.

Als Reaktion (oder willkommenen Vorwand) auf den Angriff auf die kritische Infrastruktur Berlins Anfang des Jahres wurden vom Berliner Abgeordnetenhaus Ende März nicht nur die stark kritisierten Einschränkungen des Berliner Informationsfreiheitsgesetzes durchgedrückt, sondern auch die dort definierten generellen Bereichsausnahmen in der Open Data Verordnung für proaktive Veröffentlichungen übernommen. Erfahrungen aus der Vergangenheit haben bereits gezeigt, dass Behörden unklare Gesetzes-Formulierungen gerne nutzen, um sich vor Veröffentlichungspflichten zu drücken. So breit, wie die KRITIS-Sektoren gefasst sind und der Umstand, das geheim gehalten wird, was überhaupt zu KRITIS gehört, eröffnet eben genau diese Unklarheit. Die Open Knowledge Foundation Deutschland [fordert daher](https://okfn.de/blog/2026/05/open-data-verordnung-in-berlin-wir-fordern-mehr-statt-weniger-klarheit/), die in der IFG-Änderung eingeführten Bereichsausnahmen nicht als pauschale Ausschlusskategorien in der Open-Data-Praxis fortzuschreiben. Entsprechend sollten in der Open Data Verordnung bestimmte Formulierungen wie z.B. "Informationen dürfen nicht bereitgestellt werden, ..." durch "" ersetzt werden durch z.B. "Informationen sind von einer Veröffentlichungspflicht ausgenommen, wen ...", die also klar machen, dass offene Daten kein Nice-to-have und die Ausnahmen eng gesteckt sind. Auch der Ausnahmebestand "Bodenpreise" lässt viel zu viel Interpretationsspielraum und sollte daher wieder gestrichen werden.

### Datenjournalismus
Das US-Nationalarchiv hatte im März die NSDAP-Mitgliedskartei [digital bereitgestellt](https://catalog.archives.gov/id/12044361). Trotz geringer Nutzerfreundlichkeit der Bedienoberfläche und eingeschränkter Suchfunktionalität zeigte sich schnell großes Interesse daran, Opa/Oma bzw. Uroma/Uropa in den Akten zu finden. Die Redaktionen von [Zeit Online](https://www.zeit.de/wissen/2026-04/nsdap-mitgliederkartei-karteikarten-familienmitglieder-suche) als auch [Spiegel Online](https://www.spiegel.de/geschichte/nsdap-archiv-finden-sie-heraus-was-ihre-familie-unter-hitler-getan-hat-a-4b37a614-a790-4798-92e2-be6a921da384) bauten mit Hilfe von KI-Tools jeweils eigene Datenbanken auf, um so die Daten besser durchsuchbar zu machen. Beide Angebote sind hinter Paywalls, was auch fair erscheint, da in die Aufbereitung der Daten wochenlange Arbeit von Datenjournalisten geflossen ist. Bei Correctiv und Katapult fand trotzdem, dass die Daten so relevant sind, dass sie nicht hinter einer Bezahlschranke liegen sollten, und versuchten daher gemeinsam möglichst rasch ein kostenfreies Alternativangebot aufzubauen. Doch dieser Schnellschuss erwies sich schnell als ein Schuss in den Ofen, denn mangels Quellenprüfung übersah man, dass die Daten aus dem von einem externen Entwickler bereitgestellten "brownarchive" [wohl von der Zeit geklaut waren](https://taz.de/NSDAP-Mitgliederkartei/!6180276/). Correctiv hat sich inzwischen [dafür entschuldigt](https://correctiv.org/in-eigener-sache/2026/05/14/aufarbeitung-fehlern-veroeffentlichung-digitaler-nsdap-mitgliederkartei/) und verspricht Aufarbeitung der begangenen Fehler. Auch wenn manche KI wie Handauflegen begreifen, braucht es dann doch journalistische Sorgfalt und Qualitätskontrolle, damit am Ende nicht nur irgendwas plausibel Erscheinendes [sondern eben etwas möglichst Korrektes entsteht](https://mastodon.social/@cutterkom/116606613781127664), und das braucht eben Fachwissen und ausreichend Zeit für die Kontrollen (und damit auch Bezahlung). Zumal 20% der ursprünglichen Akten [nicht mehr existieren](https://taz.de/NSDAP-Datenbanken-von-Spiegel-und-Zeit/!6177408/), und von 1933 bis 1937 keine und bis 1939 nur eingeschränkt Mitglieder aufgenommen wurden, Angehörige der Wehrmacht, die die schlimmsten Verbrechen begangen haben, nicht zwingend Parteimitglied waren, so dass die Aussagekraft eh nur eingeschränkt ist. Dennoch wäre es nicht falsch, wenn ein Deutsches Archiv nicht auch eine solche Suchmöglichkeit [anbieten würde](https://norden.social/@datenschatz/116353101141245363) und die Daten als Open Data bereitstellen würde. Freiwillige aus dem Verein für Computergenealogie haben zumindest [eine Tabelle](https://welt-der-vorfahren.de/richtige-nsdap-filmrolle-finden/) zusammengetragen, die die Namensbereiche pro Filmrolle aufschlüsselt. 

Moritz Kuhn hat sich [in seiner Datengeschichte](https://www.datawrapper.de/blog/blood-donations-germany) für DataWrapper mit dem Blutspendesystem in Deutschland beschäftigt. So spenden gerade mal 2 bis 3 Prozent der Bevölkerung regelmäßig Blut. Gerade in Zeiten starker Nachfrage können daher lokale Bestände schnell knapp werden, gerade bei der Blutgruppe 0. 

Die Open Data Informationsstelle Berlin (ODIS) hat die von der Berliner Polizei veröffentlichten genauen Lagekarten sogenannter kriminalitätsbelasteter Orte [einer Datenanalyse unterzogen](https://odis-berlin.de/aktuelles/2026-05-15-kbo-datenrecherche-blogpost/). Dabei stellte sich schon die Frage, nach welchen Kriterien Orte überhaupt als kriminalitätsbelastet klassifiziert wurden, wirklich evidenzbasiert oder doch nur den klischeehaften teils rassistischen Darstellungen in Medien und Öffentlichkeit folgend? Um eine Vergleichbarkeiten zwischen Stadtteilen wird oft mit Fallzahlen gearbeitet, doch diese differenzieren nicht nach Schwere der begangenen Delikte. Auch statistische Effekte wie z.B. der Rückgang von Fallzahlen nach der Legalisierung von Cannabis im April 2024 oder die Bevölkerungsdichte werden aus Sicht der Autoren zu wenig kontextualisiert.

## Digitale Souveränität
### Deutschland
Nach dem der Freistaat Bayern unter Führung des Finanzminsteriums eigentlich Verträge mit Microsoft aushandeln wollte, um Kommunen und Behörden mit MS Office 365 auszustatten, wurden diese Pläne nach interner und öffentlicher Kritik [nun doch fallen gelassen](https://www.golem.de/news/microsoft-lizenzen-bayern-macht-offenbar-einen-rueckzieher-2605-209087.html). Der Beschluss von der Ministerpräsidentenkonferenz, dass bis April 2027 Arbeitsplatzrechner mit digital souveräne Software-Alternativen auszustatten sind, hat sicherlich auch dazu beigetragen. Das bayrische Digitalministerium ist nun [damit beauftragt](https://www.stmd.bayern.de/digitalministerium-startet-projekt-fuer-digitale-souveraenitaet-minister-dr-mehring-will-souveraenen-arbeitsplatz/?seite=35680), solche Alternativen zu erproben und einzuführen.

[Digital souverän wird man nicht](https://chaos.social/@netzpolitik_feed/116645451087572213), indem man nur den Sklavenhalter austauscht. Leider folgt man im deutschen Digitalministerium dem Big-is-Beautiful-Narrativ und pampert nun statt amerikanischen Bigtech deutsches Bigtech. [Für 250 Millionen Euro](https://netzpolitik.org/2026/fuer-250-millionen-euro-bund-schafft-neue-abhaengigkeiten-von-it-konzernen/) sollen nun zu 70% ein Konsortium aus SAP und Telekom sowie zu 30% ein Konsortium bestehen [unter anderem aus Schwarz Digits (IT-Sparte der Schwarz-Gruppe) und SVA](https://www.sva.de/de/news/souveraenitaet-ist-eine-vergabeentscheidung-das-von-sva-angefuehrte-konsortium-mit-codesphere) eine "KI-Cloud" für die öffentliche Verwaltung bauen. Aber Souveränität ist ja am Ende auch nur eine Definitionssache, deswegen wird die nun vom Digitalministerium auch [neudefiniert](https://social.osb-alliance.de/@OSBA/116651679522497597).

Während der Deutschland-Stack der Bundesregierung nicht hinterher kommt, das im Rahmen zweier Konsultationsverfahren eingereichte kritische Feedback (inklusive gefundener Probleme in den öffentlichen Entwicklungs-Repositorien) abzuarbeiten, hat die Open Source Wirtschaft auf dem  Sovereign Cloud Stack (SCS) Summit in Berlin Interoperabilitäts-Zertifizierungen für Container-Umgebungen [angekündigt](https://www.heise.de/news/Cloud-KI-Co-Wie-der-Deutschland-Stack-digitale-Souveraenitaet-schaffen-soll-11303221.html).

### BigTech und Gegenwehr
So lange die EU den Skalierungs-Narrativen der KI-Politik der USA [blind hinterherhechelt](https://netzpolitik.org/2026/wettlauf-nach-unten-karen-hao-kritisiert-europaeischen-ki-kurs/), statt bewusst einen eigenen Weg zu beschreiten, z.B. auf kleine spezialisierte KI-Modelle setzen und in den eigenen Wissensaufbau zu investieren, so lange viel von einer [Digitalsteuer für Big Tech](https://www.heise.de/news/Digitalsteuer-im-Blick-EU-Parlament-fordert-Milliarden-Abgabe-fuer-Big-Tech-11279452.html) zwar gesprochen wird, man im Handelsstreit wohl doch Zolldrohungen kleinbeigeben würde, so lange man es sich gefallen lässt, dass Vertreterinnen europäischer Organisationen [mit Kontosperrungen und US-Einreiseverbot belegt werden](https://netzpolitik.org/2026/hateaid-nach-us-einreiseverbot-wir-sollten-nicht-fuerchten-muessen-vor-den-bus-geschubst-zu-werden/) und US-Tech-Firmen die Namen von EU-Reguliersbeamten an den US-Senat [weitergegeben werden](https://www.dutchnews.nl/2026/05/us-tech-firms-share-dutch-regulator-officials-names-with-senate/), so lange Personal fehlt, um den Digital Service Act durchzusetzen (und unterstützende Zivilgesellschaft [kaum geschützt wird](https://netzpolitik.org/2026/ai-forensics-gegen-bigtech-es-kann-zu-vergeltungsmassnahmen-gegen-uns-kommen/)), so lange bleibt die Macht von BigTech ungebrochen und unsere Abhängigkeit bestehen, schädliches Verhalten, sei es [im Umweltbereich](https://www.greenpeace.de/klimaschutz/klimakrise/die-gefaehrliche-macht-der-cloud-anbieter) oder [bei Arbeitsrechten](https://jacobin.de/artikel/big-tech-KI-datacenter-meta-kenia), ungesühnt. Mit dem [Zentrum für Digitalrechte und Demokratie](https://digitalrechte.de/) gibt es eine neue Initiative [von Markus Beckedahl](https://chaos.social/@markus_netzpolitik/116617031709471309), um einen Gegenöffentlichkeit zu schaffen, ob sie die breiten Massen erreicht, wird sich zeigen. Dass die re:publica aus Finanzierungs- und Sichtbarkeitszwängen über YouTube streamt, über Instagram teilt und sich von Firmen sponsern lässt, die auch die [Partnerliste eines CDU-Parteitags](https://chaos.social/@moreentropy/116596629501776668) hätte sein können. spricht Bände, auch wenn dadurch sicherlich auch kritische Formate umgesetzt werden konnten, das Dilemma bleibt.

### Mobile
Digital souverän auf dem Android-Handy zu sein, wird verunmöglicht, wenn Apps von Behörden nur Original-Google-Android als Betriebssystem [unterstützen wollen](https://nrw.social/@mo3hr3/116534341534880956). Auf [Plexus](https://plexus.techlore.tech) wird von der Community gepflegt, welche Apps auch entgooglisierten Androids laufen. Generell ist es immer noch [eine Herausforderung](https://chaos.social/@ex/116566416040486623), das eigene (ältere) Handy-Modell mit einem lauffähigen alternativen Betriebssystem zu matchen. Für LineageOS gibt es zu mindestens ein [Build Archiv](https://lineage-archive.timschumi.net). Dabei sind solche Betriebssysteme der einige Weg, um auch Apps nutzen zu können, deren Entwickler sich nicht [dem Registrierungszwang von Google](https://social.sachsen.de/@sdtb/116640210154115229), der ab September 2026 greift, unterwerfen wollen.

## Open Source
[FCast](https://fcast.org) ist eine [Open-Source-Protokoll-Alternative](https://github.com/futo-org/fcast) zu Chromecast und AirPlay, die von Apps wie [CastLab](https://codeberg.org/tom79/CastLab) bereits unterstützt wird, um Videos [unabhängig vom TV-Gerät](https://toot.fedilab.app/@apps/116546188818869831) zu streamen.

Mit [Little Webby Press](https://little.webby.press/) ist ein Open-Source-eBook-Generator, der aus Markdown-, Asciidoctor-, oder ReStructuredText-Dateien entweder eine epub-Datei oder eine zip-Datei aus HTML-Dateien [erzeugt](https://social.soapdog.org/@soapdog/statuses/01KS4WN54P7FV34NZTHJ1K2P1M), ohne dass man sich dafür einen Account anlegen muss.

Um PDF-Dokumente zusammenzufügen, brauchte man bisher immer extra Lösungen (z.B. PDF-Printer oder werbeverseuchte Online-Dienste), ab Firefox Version 151 kann man nun PDF-Dateien [im Browser mergen](https://itsfoss.com/firefox-pdf-merge/)

Andrew Nesbitt hat alle erdenkliche Weisen, wie ein Open-Source-Projekt sterben kann, [aufgeschrieben](https://nesbitt.io/2026/05/19/dumb-ways-for-an-open-source-project-to-die.html).

### LibreOffice
LibreOffice, Collabora, OnlyOffice und nun auch [Euro-Office](https://snoo.at/posts/euro-office.html) machen irgendwie das gleiche, so dass es von außen wie unnötige doppelte Arbeit, Kleinstaaterei und Ressourcenverschwendung wirkt. [Moritz Förster sieht darin aber die Stärke](https://www.heise.de/meinung/Kommentar-Mehr-Office-Chaos-bitte-11311055.html), dass so verschiedene Ideen parallel ausprobiert werden können, denn welche technische Ausrichtung sich am Ende als die Richtige herausstellt (z.B. WebAssembly vs. Server), weiß man vorab nicht. Und wie bei [Biodiversität](https://de.wikipedia.org/wiki/Biodiversit%C3%A4t) machen verschiedene Alternativen resilienter gegenüber sich verändernden Umständen.

Nachdem LibreOffice zuletzt auf Grund des Konflikts über Stimmrechte und Arbeitslast zwischen Hauptentwicklerteam von Collabora und der Document Foundation (TDF) im Fokus stand, versucht die Stiftung [nun wieder vor die Welle zu kommen](https://www.heise.de/news/Kurswechsel-LibreOffice-fuer-Browser-und-Smartphone-kommt-11309343.html) und hat deswegen ein eigenes Team für Mobile-, Cloud- und Peer-to-Peer-Entwicklung gegründet, dass LibreOffice zusätzlich zum reinen Desktop-Einsatz auch für den Betrieb im Webbrowser, auf dem Smartphone und zum kollaboratives Arbeiten fit machen soll. So will man auch eine ernstzunehmende Alternative zu Google Docs und Microsoft 365 werden.  

## Verwaltungs-Digitalisierung
Im Digitalministerium warten [mehr als 100 Stellen](https://www.tagesspiegel.de/politik/ein-jahr-nach-grundung-im-digitalministerium-sind-immer-noch-mehr-als-100-stellen-unbesetzt-15581413.html) noch immer auf ihre Besetzung.

Der Bundesrechnungshof [kritisiert](https://www.bundesrechnungshof.de/SharedDocs/Downloads/DE/Berichte/2026/datenlabore-1-volltext.pdf?__blob=publicationFile&v=2) die mangelnde Umsetzung der im Januar 2021 von der Bundesregierung beschlossenen Datenstrategie vorgesehenen Datenlabore. Denn ohne Data Governance in den meisten Bundesbehörden fehlt weiterhin ein wesentlicher Baustein für datenbasiertes Verwaltungshandeln. Des Weiteren wird die Gremienstruktur der Datenlabore kritisiert. Außerdem wurde oftmals keine Analyse der bestehenden Prozesse vorgenommen und die Rolle eines Open-Data-Koordinators (ODK) nicht ausgeprägt.

Die 2012 schon mit vielen Konzeptionsfehlern als rechtsverbindliche Behördenmailsystem gestartete De-Mail wird zum 31. Dezember 2026 mangels Erfolg nun [endgültig eingestellt](https://www.heise.de/hintergrund/Missing-Link-Aus-fuer-De-Mail-warum-das-das-eingekringelte-e-besiegte-11305218.html).

So lange oberflächliches großes Show-Abziehen und Hochglanz-Marketing-Kampagnen wichtiger sind, als das tatsächliche Bohren dicker Bretter, dann braucht man sich nicht wundern, dass die Verwaltungsdigitalisierung hierzulande kaum vom Fleck kommt. Auch der nun von Digitalministerium und der, bisher ihren eigenen Ansprüchen weit hinterher hinkenden Bundesagentur für Sprung-Innovation (SPRIN-D), [initiierte Bürger-Hackathon](https://www.zeit.de/news/2026-05/18/buerger-hackathon-soll-verwaltung-vereinfachen) gerahmt von Seiten wie [Deutschland, was geht](https://www.deutschland-was-geht.org) und dem [EinfachMachen-Portal](https://einfach-machen.gov.de), aus dem die besten Lösungen 2027 in die Bundesverwaltung [eingeführt werden sollen](https://www.sprind.org/deutschland-was-geht-mission), steht jetzt schon im Verdacht, wieder viel Geld für viel heiße Luft zu verbrennen.

### KI wird uns alle retten
Wissen strukturiert zu erfassen, wäre schon eine tolle Sache, denn viele Informationen stecken noch in physischen und digitalisierten Akten, PDF- und Word-Dokumenten, schlecht durchsuchbar, da nicht aufbereitet und nicht mit semantischen Daten angereichert. Aber wer Ordnung hält, ist ja eh nur zu faul zum Suchen, und warum den Daten-Messis ein bisschen Ordnung beibringen, [wenn das doch die KI einem abnehmen kann](https://netzpolitik.org/2026/statt-datenstrategie-digitalministerium-will-ki-agenten-fuer-die-verwaltung/). Gut, die ganzen LLM-Chatbots arbeiten nicht regelbasiert sondern auf statistischen Wahrscheinlichkeit und machen entsprechend Fehler (laut einer Studie der Europäischen Rundfunkunion im Oktober 2025 liegt die Fehlerquote bei etwa 45 Prozent), aber wer es bequem haben möchte, muss da eben Kompromisse machen, nicht wahr? Geistig arm, aber KI-sexy. Und lästige Hindernisse wie Datenschutz kann man dabei [gleich auch noch aus dem Weg räumen](https://netzpolitik.org/2026/digitalministerkonferenz-wildberger-will-datenschutz-fuer-ki-einsatz-in-der-verwaltung-schleifen/).

### Spark
Ob der Funke (englisch: Spark) noch überspringt? Zu mindestens ist Spark ein beliebter Name für technische Systeme (z.B. bei [Apache Spark](https://de.wikipedia.org/wiki/Apache_Spark)). [SPARK](https://bmds.bund.de/themen/kuenstliche-intelligenz/ki-in-der-verwaltung/spark) heißt jedenfalls nun auch die zu entwickelnde KI-Plattform des Bundes, die [Open-Source KI-Module](https://gitlab.opencode.de/bmds/planungs-und-genehmigungsbeschleunigung) für die öffentliche Verwaltung bieten soll (der Großteil des System ist allerdings [noch gar nicht](https://chaos.social/@stk/116611844685580740) Open Source gestellt). Stefan hat sich das mal [etwas näher angesehen](https://stefan.bloggt.es/2026/05/was-ist-eigentlich-die-spark-plattform/). Im Grunde konvertiert das System in der jetzigen Ausbaustufe eingeworfene Antragsdokumente (unterstützt werden DOCX, PDF und PPTX) in Markdown-Dateien, um diese mit vorgefertigten Prompts im LLM auf Konsistenz und Plausibilität prüfen zu wollen. Womit sich seine Aussage, dass sich Antragsverfahren durch Agentic-AI-Systeme wie SPARK "um bis zu 80% beschleunigen lassen", belegen ließe, konnte der in einer Fragerunde mit dem Digitalministeriumsvertretern jedenfalls nicht überzeugend beantwortet werden. Überhaupt scheint es keine Prüfmarken zu geben, an Hand deren sich der Erfolg oder eben auch Nicht-Erfolg des Systems überhaupt messen ließe. Antworten, die möglichwerweise die Bevölkerung zu sehr verunsichern würden, genauso wie die Antwort auf [die IFG-Frage](https://fragdenstaat.de/anfrage/haushaltsmittel-fuer-die-spark-plattform/), wie viel SPARK denn überhaupt gekostet hat.

[Es bleibt festzustellen](https://www.linkedin.com/posts/tante_was-ist-eigentlich-die-spark-plattform-activity-7462087739015049216-TrZj/): "In den meisten aktuellen Einsatzszenarien in der Öffentlichen Verwaltung aber auch in Unternehmen ist KI das Gegenteil von Innovation". Lieber weiter so mit den kaputten Prozessen und Denkweisen, die man mit KI-Kleister übermalt hat, damit das nicht so auffällt. Und warum sich unnötig mit dem Aufwand belasten, Probleme tatsächlich lösen zu wollen, wenn man beim nächsten Schnittchen-Event mit wichtigtuerischen Palaver auch so reüssieren kann.

## Karten
Das neubeschlossene Ökodesign-Gesetz [gewährt endlich](https://okfn.de/blog/2026/05/bundestag-st%C3%A4rkt-zivilgesellschaftliche-reparateure/) Mitglieder ehrenamtlicher Reparaturinitiativen umfangreichen Anspruch auf Ersatzteile und Reparaturinformationen. Repair Cafés können sich nun als fachkompetente Reparateure registrieren. Wo das nächste Reparaturcafé zu finden ist, plotten Karten für [Deutschland](https://www.reparatur-initiativen.de/termine), für 
[Österreich](https://www.repaircafes.at) und für die [Schweiz](https://www.repair-cafe.ch/reparieren/). 

Hausnummern können Leben retten - denn im ländlichen Raum fehlen schonmal die Hausnummern bei den Kartenanbietern, und dann verliert der gerufene Rettungsdienst wertvolle Zeit damit, erstmal die Straßen nach gemeldeten Adresse absuchen zu müssen. Einige Leitstellen- und Navigationsoftware in den Rettungswagen nutzen dazu auch OpenStreetMap (OSM). [Der Hinweis](https://mastodon.social/@andrmr/116549055088749730), dass in Sachsen-Anhalt noch viele Hausnummern in der OSM fehlen, hat tatsächlich etwas in der Community [bewirkt](https://mastodon.social/@andrmr/116600835861060559).

In der [63. Folge](https://informatik-hausfrau.de/2026/05/12/folge-63/) des Podcasts "Informatik für die moderne Hausfrau" spricht Lea Schönberger mit Christine Lohr, Vermessungsingenieurin im Fachbereich Geoinformation der Stadt Mönchengladbach, über Geoinformationssysteme und wie sie entstehen. [So erfährt man](https://mastodon.social/@leaschoenberger/116565907208491456) unter anderem, dass ca. 80% aller Daten Geodaten sind.

Wie man mit den Tools DuckDB und [QuackOSM](https://kraina-ai.github.io/quackosm/) für eine Liste von Adressen zu gehörigen Gebäude-Polygone aus OpenStreetMap extrahiert bekommt, [zeigt Katharina Brunner](https://katharinabrunner.de/2026/05/how-to-get-the-openstreetmap-buildings-polygones-from-a-list-of-addresses/).

Wie sich aparte Geländemodell-Karten auf Basis von LiDAR-Daten mit R erstellen lassen, zeigt das beim Geoobserver [verlinkte Youtube-Video](https://geoobserver.de/2026/05/29/lidar-fast-schon-kunst-3-ein-youtube/).

Die [neuen TrueOrthophotos](https://mastodontech.de/@opendataberlin/116671524639193129) für 2026 haben auch schon ihren Eingang bei [Luftbild Berlin](https://luftbilder.berlin.codefor.de) gefunden.

Ein Übersicht zu kühlen Orten (wie klimatisierte Museen, Schwimmbäder, schattige Grünanlagen, Waldgebiete) gibt es [nun auch](https://nrw.social/@Duesseldorf/116657447440656037) für [Düsseldorf](http://duesseldorf.de/kuehle-orte) und [Wien](https://www.wien.gv.at/umwelt/coole-zonen).

## Mobilität
### Bahn
Bis 2031 fehlen den Bundesländern 14 Milliarden Euro um den Schienennahverkehr in seinem jetzigen Umfang aufrecht erhalten zu können. Ohne das Geld müssten Zugverbindungen (Regionalzug, S-Bahn) [gestrichen werden](https://www.zdfheute.de/wirtschaft/bahn-nahverkehr-regionalzuege-verkehrsminister-100.html).

[Ein Gutachten](https://www.iwkoeln.de/studien/matthias-diermeier-konrad-doliesen-melinda-fremerey-hendrik-boehmer-jan-felix-engler-jan-wendt-geographien-der-unzufriedenheit-daseinsvorsorge.html) hat die politischen Folgen ungleicher Daseinsvorsorge in den Bereichen Digitales, Gesundheit, Mobilität, Freizeit und Bildung in Deutschland analysiert. Es wurde dabei auch abgefragt, wie weit Mängel auch als Staatsversagen wahrgenommen werden und zur politischen Entfremdung beigetragen haben. Thema war auch der systematische Rückbau der Bahn-Infrastruktur seit der Privatisierung der Deutschen Bahn 1994.

Die EU-Kommission hat einen [neuen Vorschlag](https://ec.europa.eu/commission/presscorner/detail/en/ip_26_1056) unterbreitet, wie man in Europa grenzübergreifend mit dem Zug unterwegs sein kann, [ohne dafür mehrere Tickets buchen zu müssen](https://www.tagesschau.de/ausland/europa/eu-kommission-zugreisen-100.html). 

Tickets für den Regionalzug oder die S-Bahn können durch die jüngst geschlossene Kooperation zwischen Deutsche Bahn und Google jetzt auch über einen Kauf-Button in Google Maps [direkt bezogen werden](https://www.mz.de/leben/technik/google-maps-mit-kauf-button-fur-s-bahnen-und-regionalzuge-4249316). Google kann sich dabei über einen Datenschatz freuen, denn die DB liefert ihnen nun die Echtzeitdaten der Züge. Die Bahn erhofft sich mehr Fahrgäste durch den niederschwelligeren Zugang.

### Deutschlandticket
Nach drei Jahren Deutschlandticket wird sein volles Potenzial immer noch nicht vollausgeschöpft. Mehr Linien, längere Züge, dichtere Taktung, mehr Mobilitätsangebote auf dem Land, Zahlung eines Mobilitätsgelds statt der bisherigen Pendlerpauschale, Stabilisierung eines Preises, der attraktiv für den Nutzenden ist, aber immer noch genügend Geld für Betrieb, Qualität und Angebotserweiterung lässt, sind nur einige der [formulierten Forderungen](https://www.heise.de/news/Drei-Jahre-Deutschlandticket-Forderungen-nach-OePNV-Ausbau-11279244.html). Jede durch ein ÖPNV-Abo ersetzte Autofahrt ist ein Gewinn für das Klima und macht unabhängig von Ölimporten, deren Preisexplosion gerade durch erneute Einführung eines Tankrabatts für den motorisierten Individualverkehr (MIV) versucht wurde, abzufedern, was aber wieder sehr viel Steuergeld gekostet hat.

Entschädigungen für Verspätungen mit dem Deutschland-Ticket zu beantragen ist auch so eine Ronny-Aufgabe. Denn nach EU-Fahrgastrechte-Verordnung (EU) 2021/782 können auch für dieses Ticket Fahrgastrechte für Verspätungen und Verspätungen durch Zugausfälle geltend gemacht werden. Das digitale Formular [RonnyRefund](https://ronnyrefund.de) hilft dabei, viele kleine Verspätungen dokumentiert über den Monat [zu sammeln](https://dresden.network/@jankosyk/116606596762473767) und dann gebündelt einzureichen, wenn man über die Bagatellgrenze von 4 Euro überschritten hat (als einzelne Entschädigung bekommt man jeweils 1,50 €).

### Daten
Die nächste MOTIS-Version wird [Umsteige-Optionen](https://mastodon.social/@felixguendling/116572680137968442) anzeigen können.

Ein Radverkehrskonzept 2035 bestehend aus mehr als 250 Einzelmaßnahmen verteilt auf 274 Seiten kommentieren zu müssen, ist nicht gerade ein Beitrag zu einer niederschwelligen Bürgerbeteiligung. [Wie es besser geht](https://www.tagesspiegel.de/potsdam/landeshauptstadt/neues-radwegekonzept-in-potsdam-linke-kritisiert-burgerbeteiligung--und-bietet-hilfe-an-15559694.html), zeigt die interaktive Karte [Radverkehrskonzept Potsdam](https://potsdam.transparenz.cool), auf der man sich die Maßnahmen dann auch wirklich vorstellen kann.

[Programmierschnittstellen (APIs)](https://de.wikipedia.org/wiki/Programmierschnittstelle) stabil und rückwärtskompatibel zu halten oder zu mindestens eine Abschaltung bzw. einen Versionssprung mit genügend Vorlauf prominent anzukündigen, damit den Nutzenden genügend Zeit bleibt, sich anzupassen, sollte eigentlich Usus sein. [Bei VW scheinbar nicht](https://www.heise.de/news/VW-kappt-mit-API-Aenderung-Besitzern-Zugriff-auf-eigene-Fahrzeugdaten-11312757.html), so dass die rittanbieter-Anwendungen nicht mehr an die notwendigen Echtzeit-Daten des aktuellen Ladezustand des Akkus kamen, die aber für die Optimierung des Ladeprozesses des Elektroauto in Kombination mit einem Home Assistant benötigten wurden. Inzwischen gibt es partielle Work-arounds, aber generell besteht das Problem, dass einige Hersteller keine freien Schnittstelle zu den Fahrzeugdaten anbieten, weswegen [eine Petition](https://www.change.org/p/eu-data-act-durchsetzen-autohersteller-m%C3%BCssen-uns-zugang-zu-unseren-fahrzeugdaten-geben) nun auch von diesen die Einhaltung des EU Data Acts fordert.

## Energie
### Gebäudemodernisierungsgesetz
Offenheit bei Technologie [ist inzwischen](https://mastodon.social/@chrisstoecker/116670097870349926) ungefähr genauso positiv besetzt wie bei Beine, Rücken und Allerwertester.

Ungeachtet aller Kritik hat das Bundeskabinett [das neue Heizungsgesetz](https://www.spiegel.de/wirtschaft/service/heizungsgesetz-bundesregierung-bringt-erneute-reform-auf-den-weg-a-94f6213a-4232-4389-a1a1-6c4f8f2de83c) beschlossen, nachdem nun "technologieoffen" neuer Gas- und Ölheizungen möglich ist. Dass das Gesetz verabschiedet wurde, ohne die Prüfung durch das Justizministerium [abzuwarten](https://www.msn.com/de-de/nachrichten/politik/heizungsgesetz-kabinett-beschlie%C3%9Ft-umstrittenen-entwurf-ohne-rechtspr%C3%BCfung/ar-AA23G6Uk), spricht Bände. Man will offensichtlich Fakten schaffen, weil schon zu erwarten ist, dass das Bundesverfassungsgericht nach Klagen dieses sogenannte "Gebäudemodernisierungsgesetz" wohl [in der Luft zerreißen wird](https://climatejustice.global/@parents4future/116596813689329954), aber bis dahin wird Zeit vergehen, Zeit in der es Verbraucherschutz, Unternehmen und Klima [massiv schaden](https://bsky.app/profile/lobbycontrol.bsky.social/post/3mlqnc6oe5227) wird.
  
Wie man dem [Prüfbericht zur Berechnung der deutschen Treibhausgasemissionen für das Jahr 2025 und zu den Projektionsdaten 2026](https://expertenrat-klima.de/publikationen/pruefbericht-zur-berechnung-der-deutschen-treibhausgasemissionen-fuer-das-jahr-2025-und-zu-den-projektionsdaten-2026) stehen wir beim Einhalten der Emissionsziele jetzt schon nicht gut da. Durch die Gesetzesänderung wird es noch schlimmer.  

### Kraftwerksgesetz
Auch der Entwurf des Kraftwerksgesetzes wird heftig vom Kartellamt kritisiert, denn es [benachteilige Batteriespeichersysteme](https://www.handelsblatt.com/politik/deutschland/energiewende-bundeskartellamt-ruegt-reiches-kraftwerksgesetz/100223240.html) und [bevorzuge Gaskraftwerke](https://www.telepolis.de/article/Kartellamt-zerlegt-Reiches-Kraftwerksgesetz-11290659.html). Die Wettbewerbshüter [bemängeln](https://digitalcourage.social/@midide/116534314434927943) die fehlende Technologieoffenheit. 

Die FragDenStaat-Aktion ["Gemeinsam gegen Gas"](https://fragdenstaat.de/aktionen/climate-helpdesk/gemeinsam-gegen-gas/) möchte transparent machen, wo genau in Deutschland neue fossile Infrastruktur entstehen soll. Die Bundesregierung selbst will dies geheimhalten.

[Das Abschließen](https://bsky.app/profile/mkreutzfeldt.bsky.social/post/3mmtnt5gki22j) eines 20 Jahre laufenden Liefervertrags mit Kanadas für die jährliche Abnahme von 1 Mio Tonne LNG-Flüssiggas zeigen zusätzlich, dass das Ziel Klimaneutralität bis 2045 erreichen zu wollen de facto aufgegeben wurde.

### Energiewende
Bezeichnend ist ebenso, dass sich bei der Energieministerkonferenz alle Bundesländer (also auch die CDU-geführten) gegen das geplante so genannte Netzpaket [ausgesprochen haben](https://www.sueddeutsche.de/wirtschaft/energieministerkonferenz-laender-stellen-sich-gegen-reiches-energie-reformplaene-dpa.urn-newsml-dpa-com-20090101-260522-930-113816). Dieses würde faktisch den Ausbau erneuerbare Energien abwürgen statt den eigentlich notwendigen Netzausbau [zu forcieren](https://www.telepolis.de/article/Energiewende-stockt-Das-Netz-ist-das-eigentliche-Problem-11300808.html) (die Energienetze könnte man sich dann mit [Grid2Poster](https://open-energy-transition.github.io/grid2poster/) auch im Posterformat ausdrucken).

Selbst [eine Studie](https://taz.de/Studie-zur-regionalen-Energiewende/!6177792/) (einst vom Wirtschaftsministeriums selbst beauftragt) belegt, wie die Energiewende die regionale Wirtschaft bereichert. Die Modellrechnungen zeigen, dass 50.000 neue Arbeitsplätze entstehen und Landkreise wie Städte Millionen Euro einnehmen könnten.

Durch den erzielten technischen Fortschritt der letzten Jahre und Jahrzehnte (z.B. durch Maria Telkes, [Pionierin der Solarenergie](https://www.arte.tv/de/videos/129881-000-A/maria-telkes-pionierin-der-solarenergie/)) haben hybride Erneuerbare-Systeme mit Speicher [laut IRENA-Bericht](https://www.irena.org/News/pressreleases/2026/May/24-7-Renewables-Outcompete-Fossil-Fuels-on-Costs-DE) aus Mai 2026 die Preisschwelle für eine zuverlässige Rund-um-die-Uhr-Versorgung [unterschritten](https://denkstrom.org/artikel/irena-erneuerbare-247-kostenguenstiger-fossile-2026/).
  
Vor allem durch Großspeicher getrieben: im ersten Quartal 2026 wurden mehr als 2 GWh neue Batterie-Speicherkapazität [in Betrieb genommen](https://www.elektro.net/129111/rekordzubau-bei-batteriespeichern/), und damit [67 Prozenz mehr](https://digitalcourage.social/@BlumeEvolution/116559611772184179) als im Vorjahreszeitraum.

Durch § 42c EnWG wird es ab 01.06.2026 [deutlich einfacher](https://mastodon.social/@ioew/116521165923510035), überschüssigen Strom aus der eigenen Anlage regional zu verkaufen.

Einen umfassenden Überblick zu aktuellen Entwicklungen bei negativen Strompreise, Batterien, Gaskraftwerke, Verkehrs- und Wärmewende, Wasserstoff, SMRs, Kernfusion u.v.m. gibt Prof. Bruno Burger vom Fraunhofer Institut ISE in Freiburg [im Interview](https://www.mdr.de/mdr-thueringen/audio-bruno-burger-100.html) mit dem Mitteldeutschen Rundfunk.

Dennoch sollte man nicht die Augen verschließen vor dem Umstand, dass Deutschland [immer abhängiger](https://www.telepolis.de/article/China-bleibt-zentraler-Lieferant-Abhaengigkeit-in-Schluesselbranchen-steigt-11306366.html) von China-Importen wird, neben Medikamenten eben auch Akkus, Solarpanele sowie deren Vorprodukte wie seltenen Erden.

### Wärmewende
* Berlin startet eines der größten "Power-to-Heat"-Projekte Europas.
  https://klimareporter.de/gebaeude/ein-mega-tauchsieder-fuer-die-hauptstadt
* In #Berlin gibt es viele Altbauquartiere. Das Projekt #WärmSchöN sucht am Bsp. Schöneberger Norden nach Lösungen für eine sozialverträgliche #Wärmewende.
  https://www.ioew.de/news/article/waermewende-in-altbauquartieren-forschungsprojekt-entwickelt-blaupausen-im-schoeneberger-norden
  https://mastodon.social/@ioew/116640266684944671
* Wärmepumpe im Altbau - funktioniert in Großbritannien sogar im Schloss
  https://www.deutschlandfunk.de/waermepumpe-im-altbau-funktioniert-in-grossbritannien-sogar-im-schloss-100.html

## Ernährung
* Hungerkrise durch Irankrieg: Ausgedüngt
  https://taz.de/Hungerkrise-durch-Irankrieg/!6170846/
* Carbon pollution is making food less nutritious
  https://www.washingtonpost.com/climate-environment/interactive/2026/carbon-pollution-diluting-key-nutrients-food/
  via https://social.vivaldi.net/@StefanMuenz/116507058295316164

## Gesundheit
* OpenReception 1.0: Open-Source-Terminverwaltung für Arztpraxen ist fertig
  https://www.heise.de/news/OpenReception-1-0-Open-Source-Terminverwaltung-fuer-Arztpraxen-ist-fertig-11277708.html
  * Terminverwaltung: Warum die OpenReception-Entwickler auf Open Source setzen
    https://www.heise.de/hintergrund/Terminbuchungssoftware-OpenReception-Entwickler-sehen-Ende-der-Passwort-Aera-11293916.html
* Ärztetag: Klare Absage an kassengesteuerte Digitalisierung im Gesundheitswesen
  https://www.heise.de/news/Aerztetag-Klare-Absage-an-kassengesteuerte-Digitalisierung-im-Gesundheitswesen-11294349.html
* Ärzte wollen Schutz vor Reidentifizierung von Patienten und strengere KI-Regeln
  https://www.heise.de/news/Aerztetag-fordert-strengere-Regeln-fuer-KI-und-Cloud-Nutzung-im-Gesundheitswesen-11295829.html
* Hackerangriff: Daten von Zehntausenden Versicherten betroffen?
  https://www.ndr.de/nachrichten/niedersachsen/hackerangriff-daten-von-zehntausenden-versicherten-betroffen,hackerangriff-132.html
* Niedersachsen: Datenabfluss bei Wirtschaftsprüferverein im Gesundheitswesen
  https://www.heise.de/news/Niedersachsen-Datenabfluss-bei-Wirtschaftsprueferverein-im-Gesundheitswesen-11297772.html
* Pharma-Produktion in Europa: Warum der Plan an der Finanzierung scheitern könnte
  https://www.telepolis.de/article/Pharma-Produktion-in-Europa-Warum-der-Plan-an-der-Finanzierung-scheitern-koennte-11303081.html
* Angehörigenpflege: 86 Prozent der Pflegebedürftigen werden zu Hause gepflegt
  https://www.rechtsdepesche.de/angehoerigenpflege-86-prozent-zu-hause/
* Kritik an Warkens Begründung für Milliarden-Lücke in der Pflegeversicherung
  https://www.fr.de/politik/in-der-pflegeversicherung-kritik-an-warkens-begruendung-fuer-milliarden-luecke-94299684.html
* Geplante Zugriffsrechte der Krankenkassen auf die ePA bringen Ärzte in Wallung
  https://www.aerztezeitung.de/Wirtschaft/Geplante-Zugriffsrechte-der-Kassen-auf-die-ePA-bringen-Aerzte-in-Wallung--463029.html

## Klima
* neue Atlas der Klima-Extreme 
  https://www.reklim.de/wissenstransfer/informationsprodukte/atlas-der-klimaextreme/inhalt-atlas-der-klimaextreme/
  https://helmholtz.social/@awi/116533796297270693
* Ungeplantes Geoengineering: Aufbau von Starlink & Co. mit Folgen für Atmosphäre
  https://www.heise.de/news/Ungeplantes-Geoengineering-Aufbau-von-Starlink-Co-mit-Folgen-fuer-Atmosphaere-11294723.html
* Kipppunkt im Atlantik: Wie fragil ist Europas Wärmepumpe?
  https://www.deutschlandfunk.de/atlantikstroemung-amoc-kipppunkt-wie-fragil-ist-europas-waermepumpe-100.html
* Expertenrat zerlegt Klimaschutzprogramm der Bundesregierung
  https://www.telepolis.de/article/Expertenrat-zerlegt-Klimaschutzprogramm-der-Bundesregierung-11297437.html
* Knapp und kommerzialisiert: Der Kampf ums Wasser
  https://www.blaetter.de/ausgabe/2026/mai/knapp-und-kommerzialisiert-der-kampf-ums-wasser
* Trinkwasser in Jülich knapp: Wasserwerk Aldenhoven springt ein
  https://www1.wdr.de/nrw/aachen-eifel/kreis-dueren/trinkwasser-knapp-juelich-100.html
* Neue Folge von „Angepasst?!"  – dem Podcast des Zentrum KlimaAnpassung – Boden und Klimaanpassung – Was unter unseren Füßen zählt
  https://zentrum-klimaanpassung.de/mediathek/angepasst-der-podcast-des-zentrum-klimaanpassung
* Untersuchung von Allianz Trade: Studie: Hitze zunehmendes Problem für Wirtschaft
  https://www.zdfheute.de/wirtschaft/hitze-wirtschaft-produktivitaet-energie-studie-100.html
* Die Klima-Desinformations-Maschine rollt
  https://steady.page/de/der-uuberblick/posts/e79ba560-2b44-42ba-843f-a52d5722139b
* Irische Achtzehnjährige kämpft mit preisgekrönter Erfindung gegen Mikroplastik-Krise
  https://de.euronews.com/2026/05/11/irische-achtzehnjahrige-kampft-mit-preisgekronter-erfindung-gegen-mikroplastik-krise
  https://www.irishtimes.com/environment/climate-crisis/2026/05/11/ty-changed-my-life-leaving-cert-student-wins-global-prize-for-microplastics-filter/
* Hottest May day on record in UK as temperatures pass 34C
  https://www.bbc.com/news/articles/c8xwwpkrgj1o
* Wasser aus Nationalpark: Sprudelfirmen dürfen laut Behörde nicht mehr abpumpen
  https://www.swr.de/swraktuell/rheinland-pfalz/trier/streit-um-nationalpark-wasser-sprudelfirmen-duerfen-laut-behoerde-nicht-mehr-abpumpen-100.html

## Finanzen
* Bargeld? Wie wichtig ist das denn?
  https://stiftungdatenschutz.org/veroeffentlichungen/datenschutz-im-fokus/datenschutz-im-fokus-detailansicht/bargeld-wie-wichtig-ist-das-denn-699
  via https://social.bund.de/@DS_Stiftung/116522482828569462
* Wirtschaft: Online bezahlen ohne Visa, Paypal und Co.
  https://correctiv.org/aktuelles/wirtschaft/2026/05/07/online-bezahlen-ohne-visa-paypal-und-co/
* Schuldner der Welt, vereinigt euch!
  54 Länder geben mehr für Schulden als für Bildung aus. Jetzt schließen sich Schuldnerstaaten erstmals zusammen – als Gegenmacht zu den Gläubigern.
  https://www.telepolis.de/article/Schuldner-der-Welt-vereinigt-euch-11288381.html
  via https://social.heise.de/@telepolis/116555844232148003
* Die EZB startet 2027 ein zwölfmonatiges Pilotprojekt zum digitalen Euro. Getestet werden Technik, Sicherheit und Zahlungsabläufe
  https://www.ecb.europa.eu/euro/digital_euro/pilot/html/index.de.html
  https://social.bund.de/@DS_Stiftung/116657063615066196

## Juristerei
* "Nerds of Law" Podcast mit Sean Fobbe
  https://www.nerdsoflaw.com/2026/05/nerds-of-law-165-21-jahre-mit-sean-fobbe/
  https://fediscience.org/@seanfobbe/116538838854411142
* Im November 2024 eine EU-Richtlinie gegen Slapp-Klagen in Kraft getreten. Bis zum 7. Mai hätte sie in deutsches Recht umgesetzt werden sollen – doch das ist noch nicht passiert.
  https://taz.de/SLAPP-Klagen/!6180281/

## Kultur
* From “On the Importance of Remembering Forgotten Books,” by Brad Bigelow.
  https://archive.org/details/vanishing-culture-2026/page/43/
  https://mastodon.archive.org/@internetarchive/116568586822233850
* RaDiHum20 spricht mit Katrin Henzel und Simone Franz über Barrierearmut in digitalen Editionen und Forschungsdatenmanagement
  https://radihum20.de/radihum20-spricht-mit-katrin-henzel-und-simone-franz/
* WikiKult Handreichung
  https://social.wikimedia.de/@wikimediaDE/116657109638488879
* OpenSubtitles.org — the largest multi‑language subtitle DB: no registration to download,
  https://www.opensubtitles.org/en/search/subs
  via https://mas.to/@nemo/116664220952702346
* KI entziffert Keilschrift: Mit künstlicher Intelligenz in die Töpfe Babylons schauen
  https://www.deutschlandfunk.de/ki-kuenstliche-intelligenz-uebersetzung-keilschrift-babylon-100.html

## Transparenz
* Ein geleaktes 108-seitiges Dokument zeigt: Bund, Länder und Kommunen planen massive Einschnitte in der Kinder- und Jugendhilfe – ohne öffentliche Debatte.
  https://www.surplusmagazin.de/sozialkurzungen-paritatischerwohlfahrtsverband-behinderungen-familien-kinder/
  via https://mastodon.social/@surplusmagazin/116509412578899821
* Die Lobbyist:innen, die aus den Ministerien kamen
  https://www.abgeordnetenwatch.de/recherchen/lobbyismus/die-lobbyistinnen-die-aus-den-ministerien-kamen
* Ein Jahr Schwarz-Rot: "Neuer Tiefpunkt" in Sachen Transparenz
  https://netzpolitik.org/2026/ein-jahr-schwarz-rot-neuer-tiefpunkt-in-sachen-transparenz/
  via https://chaos.social/@fragdenstaat/116526778896908840
* Malta Gaming Authority
  https://chaos.social/@Lilith/116588965772551120
* Nachschub für unsere Bibliothek: Wir sprengen weitere staatliche Paywalls
  https://fragdenstaat.de/artikel/aktion/2026/05/wir-sprengen-staatliche-paywalls/
* Firmeninsolvenzen holen Berlins Digital-Staatssekretär ein
  https://www.tagesschau.de/inland/regional/sachsen/ermittlungen-hundt-insolvenzen-100.html
  * Nach Verdacht auf Insolvenzstraftaten: Berlins Chef-Digitalisierer Matthias Hundt bittet um seine Entlassung
    https://www.tagesspiegel.de/berlin/nach-verdacht-auf-insolvenzstraftaten-berlins-chef-digitalisierer-matthias-hundt-bittet-um-seine-entlassung-15641688.html
  * Zurückgetreten, zurückgerudert, doch entlassen – und jetzt gibt’s wohl 72.000 Euro
    https://www.spiegel.de/politik/matthias-hundt-digitalstaatssekretaer-tritt-zurueck-rudert-zurueck-und-wird-entlassen-a-9169cb07-357e-4fcd-99c3-dcae33937219
  * "An seiner alten Wirkungsstätte in Dresden galt er als Hochstapler."
    https://bsky.app/profile/holgi.bsky.social/post/3mn2pjxg2xs2d
* Gesetzgebung transparent: Vermittlungsausschuss folgt dem Beispiel von FragDenStaat
  https://fragdenstaat.de/artikel/eigener-sache/2026/05/vermittlungsausschuss-folgt-dem-beispiel-von-fragdenstaat/
* KARA KUTU: Mit Civic-Tech Zensur enthüllen
  https://correctiv.org/in-eigener-sache/2026/05/04/kara-kutu-mit-civic-tech-zensur-enthuellen/
* AfD und die Neonazis: Abgeordnete finanzieren rechtsextremes Treffen
  https://correctiv.org/aktuelles/neue-rechte/2026/05/08/afd-neonazis-thueringen-jungeuropa-treffen-2026/
* CDU-Wirtschaftsministerin Reiche heuert Berater an – 2,2 Millionen für die eigene PR jährlich
  https://www.fr.de/politik/cdu-wirtschaftsministerin-reiche-heuert-berater-an-millionen-fuer-eigene-pr-jaehrlich-94299402.html
  https://www.fr.de/politik/reiche-ministerium-vergibt-gigantischen-millionen-auftrag-an-werbeagentur-zr-94319666.html
  * Katherina Reiche veranschlagt 2,2 Millionen Euro jährlich für PR-Berater
    https://www.wiwo.de/politik/deutschland/katherina-reiche-veranschlagt-22-millionen-euro-jaehrlich-fuer-pr-berater/100223470.html

## Lobbyismus
* Reiche-Ministerium sorgt mit Lobby-Video für Empörung – "ganz neue Dimension"
  https://www.braunschweiger-zeitung.de/politik/article412107466/reiche-ministerium-sorgt-mit-lobby-video-fuer-empoerung-ganz-neue-dimension.html
  * Das Teilen eines Videos der Lobbygruppe Initiative Neue Soziale Marktwirtschaft (INSM) durch das Bundeswirtschaftsministerium unter Ministerin Katherina Reiche (CDU) sorgt für Streit.
    https://www.volksstimme.de/deutschland-und-welt/wirtschaft/streit-um-lobby-botschaft-zur-wirtschaft-4256778
* Big Tech Lobbylandkarte
  https://lobbylandkarte.digitalrechte.de
  via https://bsky.app/profile/beckedahl.eurosky.social/post/3mlaqjca64k2y

## Politik
* Sammlung von Links zu politischen Entitäten, die im Fediverse präsent sind.
  https://codeberg.org/open/fedipolitik
  via https://norden.social/@coastgnu/116522854951936174
* Erbschaftssteuer-Rechner (Österreich)
  https://www.erbschaftssteuer-rechner.at

## Journalismus
* Der öffentlich-rechtliche Rundfunk sollte aufklären statt nach unten zu treten, Lügen zu verbreiten und Stimmung gegen arme Menschen zu machen.
  https://social.tchncs.de/@Sanktionsfrei/116611787989244728
* Finanztipps nur für Reiche
  https://jacobin.de/artikel/finanzsystem-finanzjournalismus-medien-wirtschaft
* Bei Radio CORAX erzählt @erik  wie ein zukunftsfähiger öffentlich-rechtlicher Rundfunk aussehen kann und was die sogenannte Presseähnlichkeit und die Verweildauer von Inhalten damit zu tun haben
  https://radiocorax.de/d64-zu-presseaehnlichkeitsverbot-und-pflicht-zur-begrenzten-verweildauer-bei-oerr/
  https://d-64.social/@D64eV/116640231577843083

## Neofaschismus
* Willkommen in der Welt der «Dunklen Aufklärer»
  https://www.republik.ch/2026/05/09/willkommen-in-der-welt-der-dunklen-aufklaerer
* Was ist Slopaganda?
  https://www.woz.ch/kolumnen/2026/05/08/slopaganda-was-ist-slopaganda
* AfD und CDU streichen Fördergelder: "Demokratie Leben" stirbt im Ilm-Kreis
  https://taz.de/AfD-und-CDU-streichen-Foerdergelder/!6183111/
* Fördergelder für Anti-Extremismusprojekt gestoppt
  https://www.tagesschau.de/investigativ/report-mainz/foerderstopp-bmi-radikale-toechter-100.html

## Zivilcourage
* Remonstrationspflicht
  https://www.dbb.de/lexikon/themenartikel/r/remonstrationspflicht.html
  https://chaos.social/@fragdenstaat/116538460973475649
* #Grundgesetzlich: #14 #Gemeinnützigkeit, #Ehrenamt und die Bedrohung von Rechts: Attac-Anwalt Andreas Fisahn zur #Zivilgesellschaft unter Druck
  https://grundgesetzlich.org/podcast/14-zivilgesellschaft-und-gemeinnuetzigkeit/
  via https://digitalcourage.social/@c_th1/116551003721000880
* Die Woche, in der die Zivilgesellschaft aufsteht
  https://netzpolitik.org/2026/die-woche-in-der-die-zivilgesellschaft-aufsteht/
* Bürger stoppen "fossiles Rechenzentrum" in Maintal
  https://www.spiegel.de/wirtschaft/maintal-buergerprotest-stoppt-fossiles-rechenzentrum-bei-frankfurt-a-4c318c68-1cb6-4907-a0b6-5d2866e03781?giftToken=08fc10e3-b52d-4a9b-9df6-324369947544
  https://23.social/@thomasfricke/116628484140263822
* BREAKING: Der Adenauer fährt an Schulen vor und indoktriniert die Jugendlichen mit Humanismus & Demokratie.
  https://bsky.app/profile/politicalbeauty.bsky.social/post/3mlprx7r7ek2d
* Bau von Rechenzentren: Die Proteste von Anwohnern werden zunehmen
  https://www.deutschlandfunk.de/proteste-gegen-rechenzentren-cordula-kropp-soziologin-uni-stuttgart-100.html

## Überwachung
* Welche Apps und Smart-Home-Geräte sammeln deine Daten — und was kannst du dagegen tun?
  https://datadoom.de
  via https://social.tchncs.de/@kuketzblog/116526986450168109
* Neues Polizeigesetz in Sachsen: „Nervt eure Abgeordneten!“ 
  https://radiocorax.de/neues-polizeigesetz-in-sachsen-nervt-eure-abgeordneten/
* Baden-Württemberg will 40 Prozent der Stellen beim Datenschutzbeauftragten streichen – gleichzeitig sollen Polizei und Behörden mehr digitale Überwachungsbefugnisse bekommen: KI-Videoüberwachung, biometrische Fernidentifikation, automatisierter Bildabgleich.
  https://www.heise.de/news/Kahlschlag-beim-Datenschutz-Baden-Wuerttemberg-plant-massive-Stellenkuerzungen-11288492.html
  via https://social.tchncs.de/@kuketzblog/116550999545821894
* Was steckt eigentlich drin im "Sicherheitspaket 2.0"?
  https://fedifreu.de/@Sicherheit_ohne_Ueberwachung/116622962632573624
* Was NGOs gegen automatischen Gesichtsabgleich haben, Interview Markus Beckedahl
  https://www.deutschlandfunk.de/was-ngos-gegen-automatischen-gesichtsabgleich-haben-interview-markus-beckedahl-100.html
* Verfassungsschutz setzt auf Palantir-Alternative
  https://www.tagesschau.de/investigativ/ndr-wdr/verfassungsschutz-palantir-100.html
* ICE Agents Have List of 20 Million People on Their iPhones Thanks to Palantir
  https://www.404media.co/ice-agents-have-list-of-20-million-people-on-their-iphones-thanks-to-palantir/
* Nach CORRECTIV-Recherche: Linke fordert, Deutschlands Zusammenarbeit mit Europol zu überprüfen
  https://correctiv.org/aktuelles/europa-aktuelles/2026/05/26/nach-correctiv-recherche-linke-fordert-deutschlands-zusammenarbeit-mit-europol-zu-ueberpruefen/

## Sicherheit
* Massiver Datendiebstahl in Litauen
  https://www.heise.de/news/Massiver-Datendiebstahl-in-Litauen-11309035.html
* Portugal hat einen neuen Rechtsrahmen für Cybersicherheit verabschiedet, er orientiert sich an der europäischen NIS2-Richtlinie. Diese Reform stärkt die Rolle der portugiesischen Behörde für Cybersecurity: ethisches Hacking ist somit nicht mehr strafbar.
  https://www.arte.tv/de/videos/133466-000-A/portugal-ethische-hacker-gegen-cyberkriminalitaet/
* Datenleck in der Schweiz: Offene Datenbanken bei Parkplatz-Überwachungsfirmen
  https://www.heise.de/news/Datenleck-in-der-Schweiz-Offene-Datenbanken-bei-Parkplatz-Ueberwachungsfirmen-11310487.html
* Wie SSD-Zugriffszeiten zum digitalen Fingerabdruck werden
  https://www.heise.de/news/Webbrowser-koennen-Informationen-durch-SSD-Zugriffszeiten-ausspaehen-11311895.html

## No-BrAIner
* Meine Wald KI
  https://survey123.arcgis.com/share/ab033e05717f4dccae9f203b8d4f7772
  via https://wisskomm.social/@MeineWaldKI/116600103279194888
* Klimaschutz statt KI-Wahn
  https://weact.campact.de/petitions/klimaschutz-statt-ki-wahn
  https://chaos.social/@algorithmwatch/116647024521259102
* KI und das Orakel von Delphi: Warum beide mit Deutung statt Wissen arbeiten
  https://www.telepolis.de/article/KI-und-das-Orakel-von-Delphi-Warum-beide-mit-Deutung-statt-Wissen-arbeiten-11311093.html
* Jetzt wird Google von der Suchmaschine zur Antwortmaschine
  https://www.tagesanzeiger.ch/google-search-ai-ersetzt-blaue-links-ab-sofort-776954306306
* Ronny Chieng Tells Harvard to "Destroy AI" as Graduates Cheer
  https://www.harvardmagazine.com/commencement/class-day-ronny-chieng-harvard
### Wikiverse
* AI + Wikidata - serving open knowledge - PoliLoom attempts to automatically extract unstructured information from sources like Wikipedia, to add to Wikidata as - you guessed it - structured information.
  https://everypolitician.org/about/contribute/poliloom/
  https://wikis.world/@wikidata/116562648006760998
* From Signals to Infrastructure: Strengthening the Commons for the AI Era
  https://creativecommons.org/2026/05/13/from-signals-to-infrastructure-strengthening-the-commons-for-the-ai-era/
  via https://chaos.social/@stk/116585714886841904
### Softwareentwicklung
* Kolumne 24 Vibe Coding: "Alle wissen, dass es Heimwerkerei gibt und dass sie nicht dasselbe ist wie Brückenkonstruktion"
  https://norden.social/@wahlatlas/116551607434275923
  * „Man bekommt [bei ChatGPT] auch eine viel freundlichere Antwort [als bei StackOverflow] 
    https://norden.social/@wahlatlas/116551575362294364
* "Mit KI-generiertem Code schaffen sich Unternehmen mitunter große Probleme. 70 Prozent der befragten Führungskräfte sagen in einer Studie, dass die Betreuung von Testumgebungen für sie mittlerweile eine größere Belastung darstellt als das Schreiben des Codes selbst"
  https://www.cloudbees.com/lp/2026-state-of-code-abundance-report
  via https://mastodon.social/@dennishorn/116613155178269967
### Arbeit
* Viel KI, nichts dahinter? Langzeitstudie „Arbeitswelten im Wandel“ zeigt: Darum werden deutsche Büros nicht effizienter
  https://nachrichten.idw-online.de/2026/05/13/viel-ki-nichts-dahinter-langzeitstudie-arbeitswelten-im-wandel-zeigt-darum-werden-deutsche-bueros-nicht-effizienter
### Rechtliches
* Pflichten des EU AI Act
  https://www.heise.de/news/EU-AI-Act-Was-bis-August-2026-in-Unternehmen-erledigt-sein-muss-11289663.html
### Negative Folgen
* Aus Angst von KI gehackt zu werden, schaltet die Gesundheitsbehörde in Großbritannien ihre Open-Source-Repos auf privat
  https://www.newscientist.com/article/2524962-nhs-england-rushes-to-hide-software-over-ai-hacking-fears/
  via https://mastodon.social/users/Edent/statuses/116499146658427751
* Neben den Kosten für #OSM wirkt das Scrapen ähnlich wie ein #DDoS-Angriff und verschlechtert die Servicequalität für reguläre Nutzer.
  https://www.heise.de/news/OpenStreetMaps-sorgt-sich-Tausende-KI-Bots-erfassen-Daten-11156876.html
  https://mapstodon.space/@OSM_tourism/116526913831400129
* just a 10-minute session with an AI assistant can lead to users significantly abandoning their own capacity for reasoning.
  https://gizmodo.com/spending-just-10-minutes-with-ai-can-fry-your-brain-researchers-find-2000755701
* Wie KI beginnt, den Menschen zu verändern
  https://www.telepolis.de/article/Wie-KI-beginnt-den-Menschen-zu-veraendern-11305338.html
* Kampf dem KI-Training: Immer mehr Nachrichtenseiten sperren Wayback Machine aus
  https://social.heise.de/@heiseonline/116639536287665884
* Unlawful by design: Exposing the human rights costs of generative AI - Amnesty International
  https://www.amnesty.org/en/documents/pol40/0996/2026/en/
  via https://toot.cafe/@baldur/116669162614205303
* Im Kreislauf des Misstrauens
  https://zeitung.faz.net/data/833/reader/reader.html#!preferred/0/package/833/pub/1141/page/11/content/154281
  via https://bsky.app/profile/hedwigrichter.bsky.social/post/3mmzcymj5k227
### Kosten
* Company accidentally spent $500 million on Claude AI in one month after forgetting usage limits
  https://techstartups.com/2026/05/28/company-accidentally-spent-500-million-on-claude-ai-in-one-month-after-forgetting-usage-limits/
  via https://dair-community.social/users/timnitGebru/statuses/116664117796381623
* Sechs Monate nach Einführung: Microsoft nimmt Entwicklern Claude Code wieder weg
  https://t3n.de/news/microsoft-nimmt-entwicklern-claude-code-nach-monaten-wieder-weg-1742686/
### Ressourcenverbrauch
* Rechenzentrum in Georgia entnimmt unbemerkt 110 Millionen Liter Wasser
  https://www.heise.de/news/Rechenzentrum-in-Georgia-entnimmt-unbemerkt-110-Millionen-Liter-Wasser-11290889.html
* US-Stromerzeuger dreht wegen Rechenzentren 50.000 Menschen den Saft ab
  https://www.n-tv.de/wirtschaft/US-Stromerzeuger-dreht-wegen-Rechenzentren-50-000-Menschen-den-Saft-ab-id30819866.html
### Finanzen
* Now you can keep track of how many billions the AI companies are losing on AI. 
  https://isaiprofitable.com
  via https://mastodon.social/@MikeElgan/116628156172886406
* $9 Trillion Collapse Machine
  https://znetwork.org/znetarticle/9-trillion-collapse-machine/
### Maßnahmen
* KI-Papers bei arXiv: Sperre bei erstem Verstoß
  https://www.heise.de/news/KI-Papers-bei-arXiv-Sperre-bei-erstem-Verstoss-11296035.html

## Recap
* [2MR](https://2mr.social/vod/) + [Medienberichterstattung](https://berlin.social/@kingconsult/116533567503121462)
* [Netzpolitischer Abend](https://fair.tube/c/npa/videos)
* [re:publica](https://www.youtube.com/@republica/videos) (inklusive [OKF-Beiträgen](https://okfn.de/blog/2026/05/triff-die-okf-auf-der-republica-2026/))    
* Berliner Open Data Day (Boddy), [Stefans Beobachtungen](https://www.linkedin.com/posts/stefan-kaufmann-7a8b54224_boddy26-ugcPost-7465868512134254593-cXFA/) inklusive [unguter Flashbacks](https://chaos.social/@stk/116651464396611844)    
* [Open Hardware Summit](https://www.youtube.com/playlist?list=PLN2I5IwhHQ4pM4CL1MtvIW4Nc7xitNRfi)
* [Berlin MapTime](https://www.linkedin.com/posts/hans-hack-001683303_maptime-maps-beyond-the-screen-what-ugcPost-7457333448345825280-ZTr0/)
* [5. Open Data Barcamp der Bertelsmann Stiftung](https://www.linkedin.com/posts/buerge-uprak_opendata-odb26-ugcPost-7465368366308814848-Ty23/)

## Fristen
* [container.gov interim Technical Advisory Board (TAB)](https://container.gov.de/call-for-applications-form/), Call for Applications, bis 08.06.2026
* [Fediday](https://ctalx.c-base.org/fediday-2026/cfp), bis 14.06.2026
* [Ko-Pionier-Preis](https://reform-staat.org/?reform_experiments=ko-pionier-preis): Besser nach­nutzen, bis 15.07.2026
* [Chaotischer Catalysator Stipendium](https://chaos-stipendien.de/blog/2026/sommer-semester-2026/)
* [MRMCD](https://events.ccc.de/2026/05/14/mrmcd2026/)
* [kulturBdigital-Konferenz](https://www.kultur-b-digital.de/call-for-participation-kulturbdigital-konferenz-2026/), bis 30.06.2026

## Und sonst so
* The Virtual OS Museum
  https://virtualosmuseum.org
  via https://bitbang.social/@loadhigh/116602901295099756

## Termine
* Barcamp Open Science 2026, 10.6.
  https://www.barcamp-open-science.eu
* Lange Nacht der Wissenschaften Berlin
  https://www.langenachtderwissenschaften.de
  z.B. https://future-energy-lab.de/events/lange-n8-der-wissenschaften-26/
* Lange Nacht der Wissenschaften Dresden, 26.6.
  https://tu-dresden.de/forschung-transfer/wissenschaftskommunikation/veranstaltungsformate/die-lange-nacht-der-wissenschaften
* 11.-12.06. #WikiKult Netzwerktreffen, Thema "Wikidata in Kulturerbeinstitutionen” 
  https://meta.wikimedia.org/wiki/WikiKult_Netzwerktreffen_2026
* 10 Jahre Hacklabor Sommerfest, 27.6.
  https://www.hacklabor.de/2026/06/10-jahre-hacklabor/
* 30.6./1.7. BMDS richtet SPARK-Hackathon aus
  https://bmds.bund.de/aktuelles/pressemitteilungen/detail/ki-fuer-schnellere-genehmigungen-bmds-richtet-spark-hackathon-aus
* WikiProjects Days (19.–21. Juni)
  https://www.wikidata.org/wiki/Event:WikiProjects_Days_2026
* 10 Jahre Hacklabor Schwerin!, 27.6.
  https://www.hacklabor.de/2026/06/10-jahre-hacklabor/

## Veranstaltungen ([Kalender/Karte](https://events.codeforleipzig.de))
* Montag, 01.06.2026, 09:00-18:00, Lokschuppen Marburg, Rudolf-Bultmann-Straße 4h, 35039 Marburg: **Kongress: Digitale Städte – Digitale Regionen** <a title='Kalendereintrag Kongress: Digitale Städte – Digitale Regionen' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vS29uZ3Jlc3M6IERpZ2l0YWxlIFN0w6RkdGUg4oCTIERpZ2l0YWxlIFJlZ2lvbmVuLy9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjYwNjA4VDIwMTkzN1oNCkRUU1RBUlQ6MjAyNjA2MDFUMDkwMDAwDQpEVEVORDoyMDI2MDYwMVQxODAwMDANClNVTU1BUlk6S29uZ3Jlc3M6IERpZ2l0YWxlIFN0w6RkdGUg4oCTIERpZ2l0YWxlIFJlZ2lvbmVuDQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL2RpZ2l0YWxlcy5oZXNzZW4uZGUvdWViZXItdW5zL3ZlcmFuc3RhbHR1bmdlbi9kaWdpdGFsZS1zdGFlZHRlLWRpZ2l0YWxlLXJlZ2lvbmVuLTMNCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046TG9rc2NodXBwZW4gTWFyYnVyZ1wsIFJ1ZG9sZi1CdWx0bWFubi1TdHJhw59lIDRoXCwgMzUwMzkgTWFyYnVyZw0KR0VPOjUwLjgxNjY2NjU7OC43Nzg0NDk2MTgwMDQyNg0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://digitales.hessen.de/ueber-uns/veranstaltungen/digitale-staedte-digitale-regionen-3
* Montag, 01.06.2026, 10:00, bis Freitag, 05.06.2026, 12:00, Neues Rathaus, Martin-Luther-Ring 4-6, 04109 Leipzig: **Dataweek** <a title='Kalendereintrag Dataweek' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vRGF0YXdlZWsvL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNjA2MDhUMjAxOTM3Wg0KRFRTVEFSVDoyMDI2MDYwMVQxMDAwMDANCkRURU5EOjIwMjYwNjA1VDEyMDAwMA0KU1VNTUFSWTpEYXRhd2Vlaw0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly8yMDI2LmRhdGF3ZWVrLmRlDQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOk5ldWVzIFJhdGhhdXNcLCBNYXJ0aW4tTHV0aGVyLVJpbmcgNC02XCwgMDQxMDkgTGVpcHppZw0KR0VPOjUxLjMzNjI3NDc1ODk5NTc7MTIuMzcyNTE5Mzg1MDI3NzQ0DQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://2026.dataweek.de
* Montag, 01.06.2026, 16:00-18:00, online: **Digitale Souveränität fängt in der Bildung an – Schluss mit der digitalen Kolonie** <a title='Kalendereintrag Digitale Souveränität fängt in der Bildung an – Schluss mit der digitalen Kolonie' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vRGlnaXRhbGUgU291dmVyw6RuaXTDpHQgZsOkbmd0IGluIGRlciBCaWxkdW5nIGFuIOKAkyBTY2hsdXNzIG1pdCBkZXIgZGlnaXRhbGVuIEtvbG9uaWUvL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNjA2MDhUMjAxOTM3Wg0KRFRTVEFSVDoyMDI2MDYwMVQxNjAwMDANCkRURU5EOjIwMjYwNjAxVDE4MDAwMA0KU1VNTUFSWTpEaWdpdGFsZSBTb3V2ZXLDpG5pdMOkdCBmw6RuZ3QgaW4gZGVyIEJpbGR1bmcgYW4g4oCTIFNjaGx1c3MgbWl0IGRlciBkaWdpdGFsZW4gS29sb25pZQ0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly9hay1vc3MuZ2kuZGUvdmVyYW5zdGFsdHVuZy9pbmZvcm1hdGlvbi9kaWdpdGFsZS1zb3V2ZXJhZW5pdGFldC1mYWVuZ3QtaW4tZGVyLWJpbGR1bmctYW4tc2NobHVzcy1taXQtZGVyLWRpZ2l0YWxlbi1rb2xvbmllDQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOm9ubGluZQ0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://ak-oss.gi.de/veranstaltung/information/digitale-souveraenitaet-faengt-in-der-bildung-an-schluss-mit-der-digitalen-kolonie
* Dienstag, 02.06.2026, 09:00, bis Mittwoch, 03.06.2026, 18:00, Hochschule für Technik und Wirtschaft Berlin (HTW Berlin) - Campus Wilhelminenhof, Gebäude H, Raum: H001, Wilhelminenhofstraße 75A, 12459 Berlin: **15. BUIS-Tage 2026 - Nachhaltigkeit und Digitalisierung** <a title='Kalendereintrag 15. BUIS-Tage 2026 - Nachhaltigkeit und Digitalisierung' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vMTUuIEJVSVMtVGFnZSAyMDI2IC0gTmFjaGhhbHRpZ2tlaXQgdW5kIERpZ2l0YWxpc2llcnVuZy8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI2MDYwOFQyMDE5MzdaDQpEVFNUQVJUOjIwMjYwNjAyVDA5MDAwMA0KRFRFTkQ6MjAyNjA2MDNUMTgwMDAwDQpTVU1NQVJZOjE1LiBCVUlTLVRhZ2UgMjAyNiAtIE5hY2hoYWx0aWdrZWl0IHVuZCBEaWdpdGFsaXNpZXJ1bmcNCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vZmEtdWkuZ2kuZGUvdmVyYW5zdGFsdHVuZy8xNS1idWlzLXRhZ2UtMjAyNg0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpIb2Noc2NodWxlIGbDvHIgVGVjaG5payB1bmQgV2lydHNjaGFmdCBCZXJsaW4gKEhUVyBCZXJsaW4pIC0gQ2FtcHVzIFdpbGhlbG1pbmVuaG9mXCwgR2Viw6R1ZGUgSFwsIFJhdW06IEgwMDFcLCBXaWxoZWxtaW5lbmhvZnN0cmHDn2UgNzVBXCwgMTI0NTkgQmVybGluDQpHRU86NTIuNDU3MjQxNjsxMy41MjY5Mzk3DQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://fa-ui.gi.de/veranstaltung/15-buis-tage-2026
* Dienstag, 02.06.2026, 20:00-22:00, c-base, Rungestraße 20, 10179 Berlin und auch online: **157. Netzpolitischer Abend** <a title='Kalendereintrag 157. Netzpolitischer Abend' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vMTU3LiBOZXR6cG9saXRpc2NoZXIgQWJlbmQvL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNjA2MDhUMjAxOTM3Wg0KRFRTVEFSVDoyMDI2MDYwMlQyMDAwMDANCkRURU5EOjIwMjYwNjAyVDIyMDAwMA0KU1VNTUFSWToxNTcuIE5ldHpwb2xpdGlzY2hlciBBYmVuZA0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly9kaWdpdGFsZWdlc2VsbHNjaGFmdC5kZS8yMDI2LzA1LzE1Ny1uZXR6cG9saXRpc2NoZXItYWJlbmQvDQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOmMtYmFzZVwsIFJ1bmdlc3RyYcOfZSAyMFwsIDEwMTc5IEJlcmxpbiB1bmQgYXVjaCBvbmxpbmUNCkdFTzo1Mi41MTI5NzM1OzEzLjQyMDEzMTMNCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://digitalegesellschaft.de/2026/05/157-netzpolitischer-abend/
* Mittwoch, 03.06.2026, 09:00-20:00, Umweltforum, Pufendorfstraße 11, 10249 Berlin: **CityLAB Sommerkonferenz 2026** <a title='Kalendereintrag CityLAB Sommerkonferenz 2026' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vQ2l0eUxBQiBTb21tZXJrb25mZXJlbnogMjAyNi8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI2MDYwOFQyMDE5MzdaDQpEVFNUQVJUOjIwMjYwNjAzVDA5MDAwMA0KRFRFTkQ6MjAyNjA2MDNUMjAwMDAwDQpTVU1NQVJZOkNpdHlMQUIgU29tbWVya29uZmVyZW56IDIwMjYNCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vY2l0eWxhYi1iZXJsaW4ub3JnL2RlL2V2ZW50cy9jaXR5bGFiLXNvbW1lcmtvbmZlcmVuei0yMDI2Lw0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpVbXdlbHRmb3J1bVwsIFB1ZmVuZG9yZnN0cmHDn2UgMTFcLCAxMDI0OSBCZXJsaW4NCkdFTzo1Mi41MjA5NjE7MTMuNDM4MjE0NA0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://citylab-berlin.org/de/events/citylab-sommerkonferenz-2026/
* Donnerstag, 04.06.2026, 16:00, bis Sonntag, 07.06.2026, 15:30, Zentrum für Kunst und Medien (ZKM), Lorenzstr. 15, 76133 Karlsruhe: **24. Gulaschprogrammiernacht (GPN)** <a title='Kalendereintrag 24. Gulaschprogrammiernacht (GPN)' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vMjQuIEd1bGFzY2hwcm9ncmFtbWllcm5hY2h0IChHUE4pLy9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjYwNjA4VDIwMTkzN1oNCkRUU1RBUlQ6MjAyNjA2MDRUMTYwMDAwDQpEVEVORDoyMDI2MDYwN1QxNTMwMDANClNVTU1BUlk6MjQuIEd1bGFzY2hwcm9ncmFtbWllcm5hY2h0IChHUE4pDQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL2VudHJvcGlhLmRlL0dQTjI0DQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOlplbnRydW0gZsO8ciBLdW5zdCB1bmQgTWVkaWVuIChaS00pXCwgTG9yZW56c3RyLiAxNVwsIDc2MTMzIEthcmxzcnVoZQ0KR0VPOjQ5LjAwMjA2OTU7OC4zODM2NjgyOTYzNDM4MzMNCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://entropia.de/GPN24
* Donnerstag, 04.06.2026, 19:31-19:31, online: **Bits und Bäume Community Treffen** <a title='Kalendereintrag Bits und Bäume Community Treffen' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vQml0cyB1bmQgQsOkdW1lIENvbW11bml0eSBUcmVmZmVuLy9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjYwNjA4VDIwMTkzN1oNCkRUU1RBUlQ6MjAyNjA2MDRUMTkzMTAwDQpEVEVORDoyMDI2MDYwNFQxOTMxMDANClNVTU1BUlk6Qml0cyB1bmQgQsOkdW1lIENvbW11bml0eSBUcmVmZmVuDQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL2Rpc2NvdXJzZS5iaXRzLXVuZC1iYWV1bWUub3JnL3QvMjAyNi0wNi0wNC1vbmxpbmUtY29tbXVuaXR5LXRyZWZmZW4tMTktMzEtdWhyLzE2NjENCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046b25saW5lDQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://discourse.bits-und-baeume.org/t/2026-06-04-online-community-treffen-19-31-uhr/1661
* Freitag, 05.06.2026, 13:00-13:45, online: **Massenerschließung im Bildarchiv – Zwischen Analyse und Interpretation: KI-Einsatz in der Photothek des Zentralinstituts für Kunstgeschichte (Johannes Griebel, Georg Schelbert)** <a title='Kalendereintrag Massenerschließung im Bildarchiv – Zwischen Analyse und Interpretation: KI-Einsatz in der Photothek des Zentralinstituts für Kunstgeschichte (Johannes Griebel, Georg Schelbert)' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vTWFzc2VuZXJzY2hsaWXDn3VuZyBpbSBCaWxkYXJjaGl2IOKAkyBad2lzY2hlbiBBbmFseXNlIHVuZCBJbnRlcnByZXRhdGlvbjogS0ktRWluc2F0eiBpbiBkZXIgUGhvdG90aGVrIGRlcyBaZW50cmFsaW5zdGl0dXRzIGbDvHIgS3Vuc3RnZXNjaGljaHRlIChKb2hhbm5lcyBHcmllYmVsXCwgR2VvcmcgU2NoZWxiZXJ0KS8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI2MDYwOFQyMDE5MzdaDQpEVFNUQVJUOjIwMjYwNjA1VDEzMDAwMA0KRFRFTkQ6MjAyNjA2MDVUMTM0NTAwDQpTVU1NQVJZOk1hc3NlbmVyc2NobGllw591bmcgaW0gQmlsZGFyY2hpdiDigJMgWndpc2NoZW4gQW5hbHlzZSB1bmQgSW50ZXJwcmV0YXRpb246IEtJLUVpbnNhdHogaW4gZGVyIFBob3RvdGhlayBkZXMgWmVudHJhbGluc3RpdHV0cyBmw7xyIEt1bnN0Z2VzY2hpY2h0ZSAoSm9oYW5uZXMgR3JpZWJlbFwsIEdlb3JnIFNjaGVsYmVydCkNCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vZGlnaXRhbGUta3Vuc3RnZXNjaGljaHRlLmRlL2FrdHVlbGxlcy9sdW5jaC1hbmQtbGVhcm4tenVyLWRpZ2l0YWxlbi1rdW5zdGdlc2NoaWNodGUvDQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOm9ubGluZQ0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://digitale-kunstgeschichte.de/aktuelles/lunch-and-learn-zur-digitalen-kunstgeschichte/
* Samstag, 06.06.2026, 10:00-20:30, Wikimedia Deutschland e. V., Tempelhofer Ufer 23-24, 10963 Berlin: **Bits & Bäume Community Summit 2026** <a title='Kalendereintrag Bits & Bäume Community Summit 2026' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vQml0cyAmIELDpHVtZSBDb21tdW5pdHkgU3VtbWl0IDIwMjYvL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNjA2MDhUMjAxOTM3Wg0KRFRTVEFSVDoyMDI2MDYwNlQxMDAwMDANCkRURU5EOjIwMjYwNjA2VDIwMzAwMA0KU1VNTUFSWTpCaXRzICYgQsOkdW1lIENvbW11bml0eSBTdW1taXQgMjAyNg0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly93d3cuZmlmZi5kZS90ZXJtaW5lLzIwMjYvYml0cy11bmQtYmFldW1lLWNvbW11bml0eS1rb25mZXJlbnovDQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOldpa2ltZWRpYSBEZXV0c2NobGFuZCBlLiBWLlwsIFRlbXBlbGhvZmVyIFVmZXIgMjMtMjRcLCAxMDk2MyBCZXJsaW4NCkdFTzo1Mi40OTg0MTQyOzEzLjM4MTA0ODYNCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://www.fiff.de/termine/2026/bits-und-baeume-community-konferenz/
* Samstag, 06.06.2026, 14:30, bis Dienstag, 09.06.2026, 17:30, Kulturbrauerei, Schönhauser Allee 36-39, 10435 Berlin und auch online: **Berlin Buzzwords** <a title='Kalendereintrag Berlin Buzzwords' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vQmVybGluIEJ1enp3b3Jkcy8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI2MDYwOFQyMDE5MzdaDQpEVFNUQVJUOjIwMjYwNjA2VDE0MzAwMA0KRFRFTkQ6MjAyNjA2MDlUMTczMDAwDQpTVU1NQVJZOkJlcmxpbiBCdXp6d29yZHMNCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vMjAyNi5iZXJsaW5idXp6d29yZHMuZGUNCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046S3VsdHVyYnJhdWVyZWlcLCBTY2jDtm5oYXVzZXIgQWxsZWUgMzYtMzlcLCAxMDQzNSBCZXJsaW4gdW5kIGF1Y2ggb25saW5lDQpHRU86NTIuNTM5MjI1MTsxMy40MTM2Njg4DQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://2026.berlinbuzzwords.de
* Sonntag, 07.06.2026, online: **Digital Independence Day** <a title='Kalendereintrag Digital Independence Day' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vRGlnaXRhbCBJbmRlcGVuZGVuY2UgRGF5Ly9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjYwNjA4VDIwMTkzN1oNCkRUU1RBUlQ6MjAyNjA2MDdUMDAwMDAwDQpEVEVORDoyMDI2MDYwN1QyMzU5NTkNClNVTU1BUlk6RGlnaXRhbCBJbmRlcGVuZGVuY2UgRGF5DQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL2RpLmRheQ0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpvbmxpbmUNCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://di.day
* Montag, 08.06.2026, 19:00-22:00, Mitten in Berlin (die genaue Location erhaltet Ihr nach Anmeldung), Berlin: **Public Sector and Friends in Berlin** <a title='Kalendereintrag Public Sector and Friends in Berlin' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vUHVibGljIFNlY3RvciBhbmQgRnJpZW5kcyBpbiBCZXJsaW4vL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNjA2MDhUMjAxOTM3Wg0KRFRTVEFSVDoyMDI2MDYwOFQxOTAwMDANCkRURU5EOjIwMjYwNjA4VDIyMDAwMA0KU1VNTUFSWTpQdWJsaWMgU2VjdG9yIGFuZCBGcmllbmRzIGluIEJlcmxpbg0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly9lZ292ZXJubWVudC1wb2RjYXN0LmNvbS9ldmVudC9wdWJsaWMtc2VjdG9yLWFuZC1mcmllbmRzLWluLWJlcmxpbi8NCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046TWl0dGVuIGluIEJlcmxpbiAoZGllIGdlbmF1ZSBMb2NhdGlvbiBlcmhhbHRldCBJaHIgbmFjaCBBbm1lbGR1bmcpXCwgQmVybGluDQpHRU86NTIuNTE3Mzg4NTsxMy4zOTUxMzA5DQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://egovernment-podcast.com/event/public-sector-and-friends-in-berlin/
* Mittwoch, 10.06.2026, 10:00-17:30, Wikimedia Deutschland e. V., Tempelhofer Ufer 23-24, 10963 Berlin: **Barcamp Open Science 2026** <a title='Kalendereintrag Barcamp Open Science 2026' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vQmFyY2FtcCBPcGVuIFNjaWVuY2UgMjAyNi8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI2MDYwOFQyMDE5MzdaDQpEVFNUQVJUOjIwMjYwNjEwVDEwMDAwMA0KRFRFTkQ6MjAyNjA2MTBUMTczMDAwDQpTVU1NQVJZOkJhcmNhbXAgT3BlbiBTY2llbmNlIDIwMjYNCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vd3d3LmJhcmNhbXAtb3Blbi1zY2llbmNlLmV1DQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOldpa2ltZWRpYSBEZXV0c2NobGFuZCBlLiBWLlwsIFRlbXBlbGhvZmVyIFVmZXIgMjMtMjRcLCAxMDk2MyBCZXJsaW4NCkdFTzo1Mi40OTg0MTQyOzEzLjM4MTA0ODYNCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://www.barcamp-open-science.eu
* Mittwoch, 10.06.2026, 10:00, bis Donnerstag, 11.06.2026, 16:00, bUm – Raum für solidarisches Miteinander, Paul-Lincke-Ufer 21, 10999 Berlin: **Weizenbaum Conference 2026: Generative AI and Society - what is at stake?** <a title='Kalendereintrag Weizenbaum Conference 2026: Generative AI and Society - what is at stake?' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vV2VpemVuYmF1bSBDb25mZXJlbmNlIDIwMjY6IEdlbmVyYXRpdmUgQUkgYW5kIFNvY2lldHkgLSB3aGF0IGlzIGF0IHN0YWtlPy8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI2MDYwOFQyMDE5MzdaDQpEVFNUQVJUOjIwMjYwNjEwVDEwMDAwMA0KRFRFTkQ6MjAyNjA2MTFUMTYwMDAwDQpTVU1NQVJZOldlaXplbmJhdW0gQ29uZmVyZW5jZSAyMDI2OiBHZW5lcmF0aXZlIEFJIGFuZCBTb2NpZXR5IC0gd2hhdCBpcyBhdCBzdGFrZT8NCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vd3d3LndlaXplbmJhdW0tY29uZmVyZW5jZS5kZQ0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpiVW0g4oCTIFJhdW0gZsO8ciBzb2xpZGFyaXNjaGVzIE1pdGVpbmFuZGVyXCwgUGF1bC1MaW5ja2UtVWZlciAyMVwsIDEwOTk5IEJlcmxpbg0KR0VPOjUyLjQ5Mzc5MzI7MTMuNDI5NjYxMQ0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://www.weizenbaum-conference.de
* Donnerstag, 11.06.2026, 09:00-19:00, Festsaal Kreuzberg, Am Flutgraben 2, 12435 Berlin und auch online: **Creative Bureaucracy Festival** <a title='Kalendereintrag Creative Bureaucracy Festival' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vQ3JlYXRpdmUgQnVyZWF1Y3JhY3kgRmVzdGl2YWwvL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNjA2MDhUMjAxOTM3Wg0KRFRTVEFSVDoyMDI2MDYxMVQwOTAwMDANCkRURU5EOjIwMjYwNjExVDE5MDAwMA0KU1VNTUFSWTpDcmVhdGl2ZSBCdXJlYXVjcmFjeSBGZXN0aXZhbA0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly9jcmVhdGl2ZWJ1cmVhdWNyYWN5Lm9yZy9kZQ0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpGZXN0c2FhbCBLcmV1emJlcmdcLCBBbSBGbHV0Z3JhYmVuIDJcLCAxMjQzNSBCZXJsaW4gdW5kIGF1Y2ggb25saW5lDQpHRU86NTIuNDk2ODIzMTU7MTMuNDUxNTU1NTY0OTM4ODE1DQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://creativebureaucracy.org/de
* Donnerstag, 11.06.2026, 09:00-18:30, Auditorium Friedrichstraße, Quartier 110, Friedrichstraße 180, 10117 Berlin: **Deutschland-Stack decoded: Verstehen, Fragen, Gestalten** <a title='Kalendereintrag Deutschland-Stack decoded: Verstehen, Fragen, Gestalten' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vRGV1dHNjaGxhbmQtU3RhY2sgZGVjb2RlZDogVmVyc3RlaGVuXCwgRnJhZ2VuXCwgR2VzdGFsdGVuLy9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjYwNjA4VDIwMTkzN1oNCkRUU1RBUlQ6MjAyNjA2MTFUMDkwMDAwDQpEVEVORDoyMDI2MDYxMVQxODMwMDANClNVTU1BUlk6RGV1dHNjaGxhbmQtU3RhY2sgZGVjb2RlZDogVmVyc3RlaGVuXCwgRnJhZ2VuXCwgR2VzdGFsdGVuDQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL25lZ3oub3JnL2V2ZW50L2ZhY2h0YWd1bmctZGV1dHNjaGxhbmQtc3RhY2stZGVjb2RlZC12ZXJzdGVoZW4tZnJhZ2VuLWdlc3RhbHRlbi8NCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046QXVkaXRvcml1bSBGcmllZHJpY2hzdHJhw59lXCwgUXVhcnRpZXIgMTEwXCwgRnJpZWRyaWNoc3RyYcOfZSAxODBcLCAxMDExNyBCZXJsaW4NCkdFTzo1Mi41MTI3NjczOzEzLjM4OTI4MTcNCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://negz.org/event/fachtagung-deutschland-stack-decoded-verstehen-fragen-gestalten/
* Donnerstag, 11.06.2026, 09:30-16:30, Jederkann Galerie, Leipziger Platz 9, 99085 Erfurt: **Civic Data Camp - Das Barcamp für Civic Data Explorer** <a title='Kalendereintrag Civic Data Camp - Das Barcamp für Civic Data Explorer' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vQ2l2aWMgRGF0YSBDYW1wIC0gRGFzIEJhcmNhbXAgZsO8ciBDaXZpYyBEYXRhIEV4cGxvcmVyLy9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjYwNjA4VDIwMTkzN1oNCkRUU1RBUlQ6MjAyNjA2MTFUMDkzMDAwDQpEVEVORDoyMDI2MDYxMVQxNjMwMDANClNVTU1BUlk6Q2l2aWMgRGF0YSBDYW1wIC0gRGFzIEJhcmNhbXAgZsO8ciBDaXZpYyBEYXRhIEV4cGxvcmVyDQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL2NpdmljLWRhdGEuZGUvYmFyY2FtcC8NCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046SmVkZXJrYW5uIEdhbGVyaWVcLCBMZWlwemlnZXIgUGxhdHogOVwsIDk5MDg1IEVyZnVydA0KR0VPOjUwLjk4MTY2MjY7MTEuMDQyNjAxMw0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://civic-data.de/barcamp/
* Donnerstag, 11.06.2026, 11:00-12:00, online: **Der EU AI Act: Einführung und Einordnung** <a title='Kalendereintrag Der EU AI Act: Einführung und Einordnung' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vRGVyIEVVIEFJIEFjdDogRWluZsO8aHJ1bmcgdW5kIEVpbm9yZG51bmcvL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNjA2MDhUMjAxOTM3Wg0KRFRTVEFSVDoyMDI2MDYxMVQxMTAwMDANCkRURU5EOjIwMjYwNjExVDEyMDAwMA0KU1VNTUFSWTpEZXIgRVUgQUkgQWN0OiBFaW5mw7xocnVuZyB1bmQgRWlub3JkbnVuZw0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly9jb3JyZWxhaWQub3JnL3ZlcmFuc3RhbHR1bmdlbi9jYzI2LWV1LWFpLWFjdA0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpvbmxpbmUNCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://correlaid.org/veranstaltungen/cc26-eu-ai-act
* Donnerstag, 11.06.2026, 17:00-18:00, online: **Wikimedia und Linked Open Data im GLAM-Bereich verankern** <a title='Kalendereintrag Wikimedia und Linked Open Data im GLAM-Bereich verankern' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vV2lraW1lZGlhIHVuZCBMaW5rZWQgT3BlbiBEYXRhIGltIEdMQU0tQmVyZWljaCB2ZXJhbmtlcm4vL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNjA2MDhUMjAxOTM3Wg0KRFRTVEFSVDoyMDI2MDYxMVQxNzAwMDANCkRURU5EOjIwMjYwNjExVDE4MDAwMA0KU1VNTUFSWTpXaWtpbWVkaWEgdW5kIExpbmtlZCBPcGVuIERhdGEgaW0gR0xBTS1CZXJlaWNoIHZlcmFua2Vybg0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly93d3cud2lraW1lZGlhLmRlL3ZlcmFuc3RhbHR1bmdlbi93aWtpbWVkaWEtdW5kLWxpbmtlZC1vcGVuLWRhdGEtaW0tZ2xhbS1iZXJlaWNoLXZlcmFua2Vybi8NCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046b25saW5lDQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://www.wikimedia.de/veranstaltungen/wikimedia-und-linked-open-data-im-glam-bereich-verankern/
* Freitag, 12.06.2026, 12:30-13:30, online: **Solid – Datensouveränität für Bürger:innen und Verwaltung** <a title='Kalendereintrag Solid – Datensouveränität für Bürger:innen und Verwaltung' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vU29saWQg4oCTIERhdGVuc291dmVyw6RuaXTDpHQgZsO8ciBCw7xyZ2VyOmlubmVuIHVuZCBWZXJ3YWx0dW5nLy9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjYwNjA4VDIwMTkzN1oNCkRUU1RBUlQ6MjAyNjA2MTJUMTIzMDAwDQpEVEVORDoyMDI2MDYxMlQxMzMwMDANClNVTU1BUlk6U29saWQg4oCTIERhdGVuc291dmVyw6RuaXTDpHQgZsO8ciBCw7xyZ2VyOmlubmVuIHVuZCBWZXJ3YWx0dW5nDQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL25lZ3oub3JnL2V2ZW50L3NvbGlkLWRhdGVuc291dmVyYWVuaXRhZXQtZnVlci1idWVyZ2VyaW5uZW4tdW5kLXZlcndhbHR1bmcvDQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOm9ubGluZQ0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://negz.org/event/solid-datensouveraenitaet-fuer-buergerinnen-und-verwaltung/
* Samstag, 13.06.2026, 18:00-22:00, Wikimedia Deutschland e. V., Tempelhofer Ufer 23-24, 10963 Berlin: **tech from below** <a title='Kalendereintrag tech from below' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vdGVjaCBmcm9tIGJlbG93Ly9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjYwNjA4VDIwMTkzN1oNCkRUU1RBUlQ6MjAyNjA2MTNUMTgwMDAwDQpEVEVORDoyMDI2MDYxM1QyMjAwMDANClNVTU1BUlk6dGVjaCBmcm9tIGJlbG93DQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL3d3dy53aWtpbWVkaWEuZGUvdmVyYW5zdGFsdHVuZ2VuL3RlY2gtZnJvbS1iZWxvdy8NCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046V2lraW1lZGlhIERldXRzY2hsYW5kIGUuIFYuXCwgVGVtcGVsaG9mZXIgVWZlciAyMy0yNFwsIDEwOTYzIEJlcmxpbg0KR0VPOjUyLjQ5ODQxNDI7MTMuMzgxMDQ4Ng0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://www.wikimedia.de/veranstaltungen/tech-from-below/
* Dienstag, 16.06.2026, 16:00-22:00, Mitten in Leipzig (die genaue Location erhaltet Ihr nach Anmeldung), Leipzig: **Public Sector and Friends in Leipzig** <a title='Kalendereintrag Public Sector and Friends in Leipzig' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vUHVibGljIFNlY3RvciBhbmQgRnJpZW5kcyBpbiBMZWlwemlnLy9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjYwNjA4VDIwMTkzN1oNCkRUU1RBUlQ6MjAyNjA2MTZUMTYwMDAwDQpEVEVORDoyMDI2MDYxNlQyMjAwMDANClNVTU1BUlk6UHVibGljIFNlY3RvciBhbmQgRnJpZW5kcyBpbiBMZWlwemlnDQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL2Vnb3Zlcm5tZW50LXBvZGNhc3QuY29tL2V2ZW50L3B1YmxpYy1zZWN0b3ItYW5kLWZyaWVuZHMtaW4tbGVpcHppZy8NCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046TWl0dGVuIGluIExlaXB6aWcgKGRpZSBnZW5hdWUgTG9jYXRpb24gZXJoYWx0ZXQgSWhyIG5hY2ggQW5tZWxkdW5nKVwsIExlaXB6aWcNCkdFTzo1MS4zNDA2MzIxOzEyLjM3NDczMjkNCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://egovernment-podcast.com/event/public-sector-and-friends-in-leipzig/
* Mittwoch, 17.06.2026, 12:00-13:00, online: **Infoveranstaltung zum DatenDialog am 11. und 12. September in Leipzig** <a title='Kalendereintrag Infoveranstaltung zum DatenDialog am 11. und 12. September in Leipzig' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vSW5mb3ZlcmFuc3RhbHR1bmcgenVtIERhdGVuRGlhbG9nIGFtIDExLiB1bmQgMTIuIFNlcHRlbWJlciBpbiBMZWlwemlnLy9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjYwNjA4VDIwMTkzN1oNCkRUU1RBUlQ6MjAyNjA2MTdUMTIwMDAwDQpEVEVORDoyMDI2MDYxN1QxMzAwMDANClNVTU1BUlk6SW5mb3ZlcmFuc3RhbHR1bmcgenVtIERhdGVuRGlhbG9nIGFtIDExLiB1bmQgMTIuIFNlcHRlbWJlciBpbiBMZWlwemlnDQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL2NvcnJlbGFpZC5vcmcvdmVyYW5zdGFsdHVuZ2VuL2RkLWluZm8tZXZlbnQNCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046b25saW5lDQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://correlaid.org/veranstaltungen/dd-info-event
* Mittwoch, 17.06.2026, 18:30-22:00, Mitten in Pfaffenhofen an der Ilm (die genaue Location erhaltet Ihr nach Anmeldung), Pfaffenhofen an der Ilm: **Public Sector and Friends in Pfaffenhofen an der Ilm** <a title='Kalendereintrag Public Sector and Friends in Pfaffenhofen an der Ilm' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vUHVibGljIFNlY3RvciBhbmQgRnJpZW5kcyBpbiBQZmFmZmVuaG9mZW4gYW4gZGVyIElsbS8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI2MDYwOFQyMDE5MzdaDQpEVFNUQVJUOjIwMjYwNjE3VDE4MzAwMA0KRFRFTkQ6MjAyNjA2MTdUMjIwMDAwDQpTVU1NQVJZOlB1YmxpYyBTZWN0b3IgYW5kIEZyaWVuZHMgaW4gUGZhZmZlbmhvZmVuIGFuIGRlciBJbG0NCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vZWdvdmVybm1lbnQtcG9kY2FzdC5jb20vZXZlbnQvcHVibGljLXNlY3Rvci1hbmQtZnJpZW5kcy1pbi1wZmFmZmVuaG9mZW4tYW4tZGVyLWlsbS8NCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046TWl0dGVuIGluIFBmYWZmZW5ob2ZlbiBhbiBkZXIgSWxtIChkaWUgZ2VuYXVlIExvY2F0aW9uIGVyaGFsdGV0IElociBuYWNoIEFubWVsZHVuZylcLCBQZmFmZmVuaG9mZW4gYW4gZGVyIElsbQ0KR0VPOjQ4LjUyOTY3NDM7MTEuNTA4NDk1NA0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://egovernment-podcast.com/event/public-sector-and-friends-in-pfaffenhofen-an-der-ilm/
* Mittwoch, 17.06.2026, 19:00-21:00, online: **Small is beautiful — using and adapting small language models** <a title='Kalendereintrag Small is beautiful — using and adapting small language models' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vU21hbGwgaXMgYmVhdXRpZnVsIOKAlCB1c2luZyBhbmQgYWRhcHRpbmcgc21hbGwgbGFuZ3VhZ2UgbW9kZWxzLy9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjYwNjA4VDIwMTkzN1oNCkRUU1RBUlQ6MjAyNjA2MTdUMTkwMDAwDQpEVEVORDoyMDI2MDYxN1QyMTAwMDANClNVTU1BUlk6U21hbGwgaXMgYmVhdXRpZnVsIOKAlCB1c2luZyBhbmQgYWRhcHRpbmcgc21hbGwgbGFuZ3VhZ2UgbW9kZWxzDQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL2NvcnJlbGFpZC5vcmcvdmVyYW5zdGFsdHVuZ2VuL2NvbW11bml0eV93c19TTE1fanVuZQ0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpvbmxpbmUNCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://correlaid.org/veranstaltungen/community_ws_SLM_june
* Donnerstag, 18.06.2026, 11:00-12:00, online: **openCode Connect Juni 2026: Offene Innovation durch Kooperation - Wie Schleswig-Holstein Wirtschaft und Öffentliche Verwaltung zusammenbringt** <a title='Kalendereintrag openCode Connect Juni 2026: Offene Innovation durch Kooperation - Wie Schleswig-Holstein Wirtschaft und Öffentliche Verwaltung zusammenbringt' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vb3BlbkNvZGUgQ29ubmVjdCBKdW5pIDIwMjY6IE9mZmVuZSBJbm5vdmF0aW9uIGR1cmNoIEtvb3BlcmF0aW9uIC0gV2llIFNjaGxlc3dpZy1Ib2xzdGVpbiBXaXJ0c2NoYWZ0IHVuZCDDlmZmZW50bGljaGUgVmVyd2FsdHVuZyB6dXNhbW1lbmJyaW5ndC8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI2MDYwOFQyMDE5MzdaDQpEVFNUQVJUOjIwMjYwNjE4VDExMDAwMA0KRFRFTkQ6MjAyNjA2MThUMTIwMDAwDQpTVU1NQVJZOm9wZW5Db2RlIENvbm5lY3QgSnVuaSAyMDI2OiBPZmZlbmUgSW5ub3ZhdGlvbiBkdXJjaCBLb29wZXJhdGlvbiAtIFdpZSBTY2hsZXN3aWctSG9sc3RlaW4gV2lydHNjaGFmdCB1bmQgw5ZmZmVudGxpY2hlIFZlcndhbHR1bmcgenVzYW1tZW5icmluZ3QNCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vb3BlbmNvZGUuZGUvZGUvYWt0dWVsbGVzL2V2ZW50cy9vcGVuY29kZS1jb25uZWN0LWp1bmktMjAyNi01ODA1DQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOm9ubGluZQ0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://opencode.de/de/aktuelles/events/opencode-connect-juni-2026-5805
* Donnerstag, 18.06.2026, 11:00, bis Freitag, 19.06.2026, 17:15, Alte Münze, Am Krögel 2, 10179 Berlin: **transform_D Summit 2026** <a title='Kalendereintrag transform_D Summit 2026' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vdHJhbnNmb3JtX0QgU3VtbWl0IDIwMjYvL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNjA2MDhUMjAxOTM3Wg0KRFRTVEFSVDoyMDI2MDYxOFQxMTAwMDANCkRURU5EOjIwMjYwNjE5VDE3MTUwMA0KU1VNTUFSWTp0cmFuc2Zvcm1fRCBTdW1taXQgMjAyNg0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly93d3cuZGV1dHNjaGUtc3RpZnR1bmctZW5nYWdlbWVudC11bmQtZWhyZW5hbXQuZGUvc3VtbWl0LTIwMjYvDQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOkFsdGUgTcO8bnplXCwgQW0gS3LDtmdlbCAyXCwgMTAxNzkgQmVybGluDQpHRU86NTIuNTE1NjUzNDsxMy40MDg5OTYyDQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://www.deutsche-stiftung-engagement-und-ehrenamt.de/summit-2026/
* Donnerstag, 18.06.2026, 12:00-12:30, online: **Overview of Civic Tech Trends and How LLMs Influence Sensemaking in Civic Tech** <a title='Kalendereintrag Overview of Civic Tech Trends and How LLMs Influence Sensemaking in Civic Tech' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vT3ZlcnZpZXcgb2YgQ2l2aWMgVGVjaCBUcmVuZHMgYW5kIEhvdyBMTE1zIEluZmx1ZW5jZSBTZW5zZW1ha2luZyBpbiBDaXZpYyBUZWNoLy9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjYwNjA4VDIwMTkzN1oNCkRUU1RBUlQ6MjAyNjA2MThUMTIwMDAwDQpEVEVORDoyMDI2MDYxOFQxMjMwMDANClNVTU1BUlk6T3ZlcnZpZXcgb2YgQ2l2aWMgVGVjaCBUcmVuZHMgYW5kIEhvdyBMTE1zIEluZmx1ZW5jZSBTZW5zZW1ha2luZyBpbiBDaXZpYyBUZWNoDQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL2NvcnJlbGFpZC5vcmcvdmVyYW5zdGFsdHVuZ2VuL2NkbF9lc3ByZXNzb19qdW5lDQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOm9ubGluZQ0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://correlaid.org/veranstaltungen/cdl_espresso_june
* Donnerstag, 18.06.2026, 18:00-21:00, WikiBär Wikipedia, Köpenicker Straße 45, 10179 Berlin: **Jugend editiert** <a title='Kalendereintrag Jugend editiert' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vSnVnZW5kIGVkaXRpZXJ0Ly9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjYwNjA4VDIwMTkzN1oNCkRUU1RBUlQ6MjAyNjA2MThUMTgwMDAwDQpEVEVORDoyMDI2MDYxOFQyMTAwMDANClNVTU1BUlk6SnVnZW5kIGVkaXRpZXJ0DQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL3d3dy53aWtpbWVkaWEuZGUvdmVyYW5zdGFsdHVuZ2VuL2p1Z2VuZC1lZGl0aWVydC8NCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046V2lraULDpHIgV2lraXBlZGlhXCwgS8O2cGVuaWNrZXIgU3RyYcOfZSA0NVwsIDEwMTc5IEJlcmxpbg0KR0VPOjUyLjUwMjY3NzA2MjkzNjA3OzEzLjQzOTI1MDM0ODcyMTU0NA0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://www.wikimedia.de/veranstaltungen/jugend-editiert/
* Freitag, 19.06.2026, 12:00, bis Sonntag, 21.06.2026, 12:00, Chaostreff Dortmund e.V., Braunschweiger Straße 22, 44145 Dortmund: **DO_BYTE** <a title='Kalendereintrag DO_BYTE' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vRE9fQllURS8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI2MDYwOFQyMDE5MzdaDQpEVFNUQVJUOjIwMjYwNjE5VDEyMDAwMA0KRFRFTkQ6MjAyNjA2MjFUMTIwMDAwDQpTVU1NQVJZOkRPX0JZVEUNCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vaGFkci51bi1oYWNrLWJhci5kZQ0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpDaGFvc3RyZWZmIERvcnRtdW5kIGUuVi5cLCBCcmF1bnNjaHdlaWdlciBTdHJhw59lIDIyXCwgNDQxNDUgRG9ydG11bmQNCkdFTzo1MS41Mjc2ODgxOzcuNDY1MDAyOA0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://hadr.un-hack-bar.de
* Freitag, 19.06.2026, 14:00, bis Sonntag, 21.06.2026, 16:00, Theater an der Parkaue, Parkaue 29, 10367 Berlin: **Jugend Hackt Berlin** <a title='Kalendereintrag Jugend Hackt Berlin' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vSnVnZW5kIEhhY2t0IEJlcmxpbi8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI2MDYwOFQyMDE5MzdaDQpEVFNUQVJUOjIwMjYwNjE5VDE0MDAwMA0KRFRFTkQ6MjAyNjA2MjFUMTYwMDAwDQpTVU1NQVJZOkp1Z2VuZCBIYWNrdCBCZXJsaW4NCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vYW5tZWxkdW5nLmFscGFrYS5zcGFjZS9iZXJsaW4vaGFja2F0aG9uLTIwMjYvDQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOlRoZWF0ZXIgYW4gZGVyIFBhcmthdWVcLCBQYXJrYXVlIDI5XCwgMTAzNjcgQmVybGluDQpHRU86NTIuNTE2OTkzOzEzLjQ3NzIwMzENCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://anmeldung.alpaka.space/berlin/hackathon-2026/
* Dienstag, 23.06.2026, 09:00-10:00, online: **Data Storytelling mit KI: Kleine Helfer, damit deine Daten überzeugen** <a title='Kalendereintrag Data Storytelling mit KI: Kleine Helfer, damit deine Daten überzeugen' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vRGF0YSBTdG9yeXRlbGxpbmcgbWl0IEtJOiBLbGVpbmUgSGVsZmVyXCwgZGFtaXQgZGVpbmUgRGF0ZW4gw7xiZXJ6ZXVnZW4vL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNjA2MDhUMjAxOTM3Wg0KRFRTVEFSVDoyMDI2MDYyM1QwOTAwMDANCkRURU5EOjIwMjYwNjIzVDEwMDAwMA0KU1VNTUFSWTpEYXRhIFN0b3J5dGVsbGluZyBtaXQgS0k6IEtsZWluZSBIZWxmZXJcLCBkYW1pdCBkZWluZSBEYXRlbiDDvGJlcnpldWdlbg0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly9jb3JyZWxhaWQub3JnL3ZlcmFuc3RhbHR1bmdlbi93cy1za2FsYS1jYW1wdXMta2kNCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046b25saW5lDQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://correlaid.org/veranstaltungen/ws-skala-campus-ki
* Dienstag, 23.06.2026, 19:30-21:00, online: **Verkehrswende-Meetup** <a title='Kalendereintrag Verkehrswende-Meetup' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vVmVya2VocnN3ZW5kZS1NZWV0dXAvL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNjA2MDhUMjAxOTM3Wg0KRFRTVEFSVDoyMDI2MDYyM1QxOTMwMDANCkRURU5EOjIwMjYwNjIzVDIxMDAwMA0KU1VNTUFSWTpWZXJrZWhyc3dlbmRlLU1lZXR1cA0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly93aWtpLm9wZW5zdHJlZXRtYXAub3JnL3dpa2kvVmVya2VocnN3ZW5kZS1NZWV0dXAvTWVldHVwXzIwMjYtMDYtMjMNCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046b25saW5lDQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://wiki.openstreetmap.org/wiki/Verkehrswende-Meetup/Meetup_2026-06-23
* Freitag, 26.06.2026, 07:00-19:00, online: **Digitaltag 2026** <a title='Kalendereintrag Digitaltag 2026' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vRGlnaXRhbHRhZyAyMDI2Ly9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjYwNjA4VDIwMTkzN1oNCkRUU1RBUlQ6MjAyNjA2MjZUMDcwMDAwDQpEVEVORDoyMDI2MDYyNlQxOTAwMDANClNVTU1BUlk6RGlnaXRhbHRhZyAyMDI2DQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL2RpZ2l0YWx0YWcuZXUNCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046b25saW5lDQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://digitaltag.eu
* Freitag, 26.06.2026, 12:00-12:00, Burg Husen, Syburger Dorfstr. 135, 44265 Dortmund: **Hack an der Ruhr 2026** <a title='Kalendereintrag Hack an der Ruhr 2026' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vSGFjayBhbiBkZXIgUnVociAyMDI2Ly9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjYwNjA4VDIwMTkzN1oNCkRUU1RBUlQ6MjAyNjA2MjZUMTIwMDAwDQpEVEVORDoyMDI2MDYyNlQxMjAwMDANClNVTU1BUlk6SGFjayBhbiBkZXIgUnVociAyMDI2DQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL2hhZHIudW4taGFjay1iYXIuZGUNCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046QnVyZyBIdXNlblwsIFN5YnVyZ2VyIERvcmZzdHIuIDEzNVwsIDQ0MjY1IERvcnRtdW5kDQpHRU86NTEuNDE4OTY3NzQ1NDE3MDY7Ny41MDUyNDYzMDAwNTYwMDENCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://hadr.un-hack-bar.de
* Freitag, 26.06.2026, 12:00-13:00, online: **Mach’s partizipativ! Strukturen für Partizipation in der Wissenschaft stärken** <a title='Kalendereintrag Mach’s partizipativ! Strukturen für Partizipation in der Wissenschaft stärken' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vTWFjaOKAmXMgcGFydGl6aXBhdGl2ISBTdHJ1a3R1cmVuIGbDvHIgUGFydGl6aXBhdGlvbiBpbiBkZXIgV2lzc2Vuc2NoYWZ0IHN0w6Rya2VuLy9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjYwNjA4VDIwMTkzN1oNCkRUU1RBUlQ6MjAyNjA2MjZUMTIwMDAwDQpEVEVORDoyMDI2MDYyNlQxMzAwMDANClNVTU1BUlk6TWFjaOKAmXMgcGFydGl6aXBhdGl2ISBTdHJ1a3R1cmVuIGbDvHIgUGFydGl6aXBhdGlvbiBpbiBkZXIgV2lzc2Vuc2NoYWZ0IHN0w6Rya2VuDQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL3d3dy5taXRmb3JzY2hlbi5vcmcvdmVyYW5zdGFsdHVuZ2VuL2RpZ2l0YWxlLW1pdHRhZ3NwYXVzZQ0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpvbmxpbmUNCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://www.mitforschen.org/veranstaltungen/digitale-mittagspause
* Freitag, 26.06.2026, 17:00-23:59, Living Lab Dresden, Andreas Pfitzmann Bau, Raum: 1020, Nöthnitzer Str. 46, 01187 Dresden: **Dresden Science Night 2026** <a title='Kalendereintrag Dresden Science Night 2026' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vRHJlc2RlbiBTY2llbmNlIE5pZ2h0IDIwMjYvL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNjA2MDhUMjAxOTM3Wg0KRFRTVEFSVDoyMDI2MDYyNlQxNzAwMDANCkRURU5EOjIwMjYwNjI2VDIzNTk1OQ0KU1VNTUFSWTpEcmVzZGVuIFNjaWVuY2UgTmlnaHQgMjAyNg0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly9zY2Fkcy5haS9ldmVudC9sYW5nZS1uYWNodC1kZXItd2lzc2Vuc2NoYWZ0ZW4vZHJlc2Rlbi1zY2llbmNlLW5pZ2h0LTIwMjYvDQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOkxpdmluZyBMYWIgRHJlc2RlblwsIEFuZHJlYXMgUGZpdHptYW5uIEJhdVwsIFJhdW06IDEwMjBcLCBOw7Z0aG5pdHplciBTdHIuIDQ2XCwgMDExODcgRHJlc2Rlbg0KR0VPOjUxLjAyNTQ2MDc7MTMuNzIzMTA5DQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://scads.ai/event/lange-nacht-der-wissenschaften/dresden-science-night-2026/
* Dienstag, 30.06.2026, 13:15-14:45, online: **Der Forschungszugang nach Digital Services Act (DSA)** <a title='Kalendereintrag Der Forschungszugang nach Digital Services Act (DSA)' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vRGVyIEZvcnNjaHVuZ3N6dWdhbmcgbmFjaCBEaWdpdGFsIFNlcnZpY2VzIEFjdCAoRFNBKS8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI2MDYwOFQyMDE5MzdaDQpEVFNUQVJUOjIwMjYwNjMwVDEzMTUwMA0KRFRFTkQ6MjAyNjA2MzBUMTQ0NTAwDQpTVU1NQVJZOkRlciBGb3JzY2h1bmdzenVnYW5nIG5hY2ggRGlnaXRhbCBTZXJ2aWNlcyBBY3QgKERTQSkNCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vYmxvZ3MuZnUtYmVybGluLmRlL29wZW4tcmVzZWFyY2gtYmVybGluL2NhdGVnb3J5L3ZlcmFuc3RhbHR1bmdzaGlud2Vpc2UvDQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOm9ubGluZQ0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://blogs.fu-berlin.de/open-research-berlin/category/veranstaltungshinweise/
* Freitag, 03.07.2026, 11:00, bis Sonntag, 05.07.2026, 17:15, Aaccelerator, Blezingerstraße 15, 73430 Aalen: **FAT26** <a title='Kalendereintrag FAT26' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vRkFUMjYvL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNjA2MDhUMjAxOTM3Wg0KRFRTVEFSVDoyMDI2MDcwM1QxMTAwMDANCkRURU5EOjIwMjYwNzA1VDE3MTUwMA0KU1VNTUFSWTpGQVQyNg0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly9oYWNrd2Vyay5mdW4NCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046QWFjY2VsZXJhdG9yXCwgQmxlemluZ2Vyc3RyYcOfZSAxNVwsIDczNDMwIEFhbGVuDQpHRU86NDguODU0NDMyOTsxMC4wOTA2MzQ3DQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://hackwerk.fun
* Freitag, 03.07.2026, 13:00-13:45, online: **artresearch.net. Wie vernetzen wir kunsthistorische Bildarchive? (Stefanie Schneider)** <a title='Kalendereintrag artresearch.net. Wie vernetzen wir kunsthistorische Bildarchive? (Stefanie Schneider)' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vYXJ0cmVzZWFyY2gubmV0LiBXaWUgdmVybmV0emVuIHdpciBrdW5zdGhpc3RvcmlzY2hlIEJpbGRhcmNoaXZlPyAoU3RlZmFuaWUgU2NobmVpZGVyKS8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI2MDYwOFQyMDE5MzdaDQpEVFNUQVJUOjIwMjYwNzAzVDEzMDAwMA0KRFRFTkQ6MjAyNjA3MDNUMTM0NTAwDQpTVU1NQVJZOmFydHJlc2VhcmNoLm5ldC4gV2llIHZlcm5ldHplbiB3aXIga3Vuc3RoaXN0b3Jpc2NoZSBCaWxkYXJjaGl2ZT8gKFN0ZWZhbmllIFNjaG5laWRlcikNCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vZGlnaXRhbGUta3Vuc3RnZXNjaGljaHRlLmRlL2FrdHVlbGxlcy9sdW5jaC1hbmQtbGVhcm4tenVyLWRpZ2l0YWxlbi1rdW5zdGdlc2NoaWNodGUvDQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOm9ubGluZQ0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://digitale-kunstgeschichte.de/aktuelles/lunch-and-learn-zur-digitalen-kunstgeschichte/
* Montag, 06.07.2026, 13:00-14:00, online: **Von und mit Daten überzeugen: Datenstrategie in eurer Organisation umsetzen** <a title='Kalendereintrag Von und mit Daten überzeugen: Datenstrategie in eurer Organisation umsetzen' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vVm9uIHVuZCBtaXQgRGF0ZW4gw7xiZXJ6ZXVnZW46IERhdGVuc3RyYXRlZ2llIGluIGV1cmVyIE9yZ2FuaXNhdGlvbiB1bXNldHplbi8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI2MDYwOFQyMDE5MzdaDQpEVFNUQVJUOjIwMjYwNzA2VDEzMDAwMA0KRFRFTkQ6MjAyNjA3MDZUMTQwMDAwDQpTVU1NQVJZOlZvbiB1bmQgbWl0IERhdGVuIMO8YmVyemV1Z2VuOiBEYXRlbnN0cmF0ZWdpZSBpbiBldXJlciBPcmdhbmlzYXRpb24gdW1zZXR6ZW4NCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vY29ycmVsYWlkLm9yZy92ZXJhbnN0YWx0dW5nZW4vY2MyNi1kYXRlbnN0cmF0ZWdpZQ0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpvbmxpbmUNCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://correlaid.org/veranstaltungen/cc26-datenstrategie
* Mittwoch, 08.07.2026, 10:00-11:30, online: **22. Open Data Netzwerktreffen** <a title='Kalendereintrag 22. Open Data Netzwerktreffen' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vMjIuIE9wZW4gRGF0YSBOZXR6d2Vya3RyZWZmZW4vL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNjA2MDhUMjAxOTM3Wg0KRFRTVEFSVDoyMDI2MDcwOFQxMDAwMDANCkRURU5EOjIwMjYwNzA4VDExMzAwMA0KU1VNTUFSWToyMi4gT3BlbiBEYXRhIE5ldHp3ZXJrdHJlZmZlbg0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly93d3cuYmVydGVsc21hbm4tc3RpZnR1bmcuZGUvZGUvdW5zZXJlLXByb2pla3RlL2RhdGVuLWZ1ZXItZGllLWdlc2VsbHNjaGFmdC9wcm9qZWt0bmFjaHJpY2h0ZW4vZGFzLWtvbW11bmFsZS1vcGVuLWRhdGEtbmV0endlcmt0cmVmZmVuDQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOm9ubGluZQ0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://www.bertelsmann-stiftung.de/de/unsere-projekte/daten-fuer-die-gesellschaft/projektnachrichten/das-kommunale-open-data-netzwerktreffen
* Regelmäßige OKLab-Treffen
  * Berlin: jeden zweiten oder dritten Montag im Monat, 19:00-22:00, WikiBär, Köpenicker Straße 45, 10179 Berlin: **Code for Berlin** <a title='Kalendereintrag Code for Berlin' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vQ29kZSBmb3IgQmVybGluLy9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjUwNjI5VDExMjkyM1oNCkRUU1RBUlQ6MjAyNTA3MjFUMTkwMDAwDQpEVEVORDoyMDI1MDcyMVQyMjAwMDANClNVTU1BUlk6Q29kZSBmb3IgQmVybGluDQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL3d3dy5tZWV0dXAuY29tL29rLWxhYi1iZXJsaW4NCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046V2lraULDpHJcLCBLw7ZwZW5pY2tlciBTdHJhw59lIDQ1XCwgMTAxNzkgQmVybGluDQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
    * https://www.meetup.com/ok-lab-berlin
  * Bielefeld: jeden Donnerstag, 18:30-21:00, Innovation Office, Alter Markt 13, 33602 Bielefeld: **Code for Bielefeld** <a title='Kalendereintrag Code for Bielefeld' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vQ29kZSBmb3IgQmllbGVmZWxkLy9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjUwNjI5VDExMjkyM1oNCkRUU1RBUlQ6MjAyNTA3MDNUMTgzMDAwDQpEVEVORDoyMDI1MDcwM1QyMTAwMDANClNVTU1BUlk6Q29kZSBmb3IgQmllbGVmZWxkDQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL2NvZGVmb3IuZGUvYmllbGVmZWxkLw0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpJbm5vdmF0aW9uIE9mZmljZVwsIEFsdGVyIE1hcmt0IDEzXCwgMzM2MDIgQmllbGVmZWxkDQpHRU86NTIuMDIwODM0MzE1MDU2ODQ1OzguNTMyNDMyMTIxNTMxNjI3DQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
    * https://codefor.de/bielefeld/
  * Flensburg: jeden Mittwoch, 18:00-21:00, Aktivitetshuset, Norderstraße 49, 24939 Flensburg: **OKLab Flensburg** <a title='Kalendereintrag OKLab Flensburg' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vT0tMYWIgRmxlbnNidXJnLy9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjUwNjI5VDExMjkyM1oNCkRUU1RBUlQ6MjAyNTA3MDJUMTgwMDAwDQpEVEVORDoyMDI1MDcwMlQyMTAwMDANClNVTU1BUlk6T0tMYWIgRmxlbnNidXJnDQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL2NvZGVmb3IuZGUvZmxlbnNidXJnLw0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpBa3Rpdml0ZXRzaHVzZXRcLCBOb3JkZXJzdHJhw59lIDQ5XCwgMjQ5MzkgRmxlbnNidXJnDQpHRU86NTQuNzkxNTkxNzg1OTg1ODQ0OzkuNDMxMjQ5NjAxNjA5NjY1DQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
    * https://codefor.de/flensburg/
  * Karlsruhe, jeden dritten Montag im Monat, 19:00-21:00, Impact Hub, Kaiserstr 97, 76131 Karlsruhe: **Code for Karlsruhe** <a title='Kalendereintrag Code for Karlsruhe' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vQ29kZSBmb3IgS2FybHNydWhlLy9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjUwNjI5VDExMjkyM1oNCkRUU1RBUlQ6MjAyNTA3MjFUMTkwMDAwDQpEVEVORDoyMDI1MDcyMVQyMTAwMDANClNVTU1BUlk6Q29kZSBmb3IgS2FybHNydWhlDQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL29rLWxhYi1rYXJsc3J1aGUuZGUvbWl0bWFjaGVuLyNzY2hlZHVsZQ0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpJbXBhY3QgSHViXCwgS2Fpc2Vyc3RyIDk3XCwgNzYxMzEgS2FybHNydWhlDQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
    * https://ok-lab-karlsruhe.de/mitmachen/#schedule
  * Köln: jeden ersten Montag im Monat, 19:00-22:00, Wikipedia Lokal K, Hackländerstr 2, 50825 Köln: **Code for Cologne** <a title='Kalendereintrag Code for Cologne' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vQ29kZSBmb3IgQ29sb2duZS8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI1MDYyOVQxMTI5MjNaDQpEVFNUQVJUOjIwMjUwNzA3VDE5MDAwMA0KRFRFTkQ6MjAyNTA3MDdUMjIwMDAwDQpTVU1NQVJZOkNvZGUgZm9yIENvbG9nbmUNCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vd3d3Lm1lZXR1cC5jb20vZGUtREUvY29kZWZvcmNvbG9nbmUvDQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOldpa2lwZWRpYSBMb2thbCBLXCwgSGFja2zDpG5kZXJzdHIgMlwsIDUwODI1IEvDtmxuDQpHRU86NTAuOTU1NjAxMTs2LjkxMDM5MQ0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
    * https://www.meetup.com/de-DE/codeforcologne/
  * Leipzig: jeden. Mittwoch, 19:00-22:00, Basislager Coworking Leipzig, Peterssteinweg 14, 04107 Leipzig: **OKLab Leipzig** <a title='Kalendereintrag OKLab Leipzig' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vT0tMYWIgTGVpcHppZy8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI1MDYyOVQxMTI5MjNaDQpEVFNUQVJUOjIwMjUwNzAyVDE5MDAwMA0KRFRFTkQ6MjAyNTA3MDJUMjIwMDAwDQpTVU1NQVJZOk9LTGFiIExlaXB6aWcNCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vd3d3Lm1lZXR1cC5jb20vZGUtREUvb2tsYWItbGVpcHppZy8NCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046QmFzaXNsYWdlciBDb3dvcmtpbmcgTGVpcHppZ1wsIFBldGVyc3N0ZWlud2VnIDE0XCwgMDQxMDcgTGVpcHppZw0KR0VPOjUxLjMzMjA3NDQ7MTIuMzczNTM5OQ0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
    * https://www.meetup.com/de-DE/oklab-leipzig/
  * Münster: jeden Dienstag, 19:30-22:00, Cafe SpecOps network, Aegidiimarkt 5, 48155 Münster: **Code for Münster** <a title='Kalendereintrag Code for Münster' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vQ29kZSBmb3IgTcO8bnN0ZXIvL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNTA2MjlUMTEyOTIzWg0KRFRTVEFSVDoyMDI1MDcwMVQxOTMwMDANCkRURU5EOjIwMjUwNzAxVDIyMDAwMA0KU1VNTUFSWTpDb2RlIGZvciBNw7xuc3Rlcg0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly93d3cubWVldHVwLmNvbS9kZS1ERS9jb2RlLWZvci1tdW5zdGVyLw0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpDYWZlIFNwZWNPcHMgbmV0d29ya1wsIEFlZ2lkaWltYXJrdCA1XCwgNDgxNTUgTcO8bnN0ZXINCkdFTzo1MS45NjA3MTYyOzcuNjIyNDczMg0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
    * https://www.meetup.com/de-DE/code-for-munster/
  * Niederrhein: jeden Dienstag, 20:00-22:00, online: **Code for Niederrhein** <a title='Kalendereintrag Code for Niederrhein' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vQ29kZSBmb3IgTmllZGVycmhlaW4vL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNTA2MjlUMTEyOTIzWg0KRFRTVEFSVDoyMDI1MDcwMVQyMDAwMDANCkRURU5EOjIwMjUwNzAxVDIyMDAwMA0KU1VNTUFSWTpDb2RlIGZvciBOaWVkZXJyaGVpbg0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly93d3cuY29kZWZvcm5pZWRlcnJoZWluLmRlL3Rlcm1pbmUvDQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOm9ubGluZQ0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
    * https://www.codeforniederrhein.de/termine/
  * temporärhaus (Neu-Ulm): jeden zweiten un vierten Mittwoch im Monat, 19:30-22:00, temporärhaus, Augsburgerstr 23-25, 89231 Neu-Ulm: **temporärhaus: Open Data Monday** <a title='Kalendereintrag temporärhaus: Open Data Monday' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vdGVtcG9yw6RyaGF1czogT3BlbiBEYXRhIE1vbmRheS8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI1MDYyOVQxMTI5MjNaDQpEVFNUQVJUOjIwMjUwNzE2VDE5MzAwMA0KRFRFTkQ6MjAyNTA3MTZUMjIwMDAwDQpTVU1NQVJZOnRlbXBvcsOkcmhhdXM6IE9wZW4gRGF0YSBNb25kYXkNCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vdGVtcG9yYWVyaGF1cy5kZS90ZXJtaW5lLXVuZC1vZWZmbnVuZ3N6ZWl0ZW4vDQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOnRlbXBvcsOkcmhhdXNcLCBBdWdzYnVyZ2Vyc3RyIDIzLTI1XCwgODkyMzEgTmV1LVVsbQ0KR0VPOjUyLjUwMjY3NzA2MjkzNjA3OzEzLjQzOTI1MDM0ODcyMTU0NA0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
    * https://temporaerhaus.de/termine-und-oeffnungszeiten/
