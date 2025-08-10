---
title: "Taubenschach – Out in the Open Juli 2025"
author: "Jörg Reichert (Code for Leipzig)"
date: '2025-08-04T08:00:00+02:00'
excerpt: Monatlich erscheinender Überblick über Entwicklungen in der Open Data und Civic Tech Szene
topic: community
images:
- imgname: out-in-the-open-2025-07-header.jpg
  attribution: <a href="https://pixabay.com/photos/open-open-sign-berlin-9526358/">Foto</a> von <a href="https://pixabay.com/users/sannsie-40193152/">sannsie</a> auf <a href="https://pixabay.com/">Pixabay</a>
og_image: out-in-the-open-2025-07-header.jpg
type: blog
---

## Open Data
### Open-Data-Portal-Verbesserungspotenzial 
Eric Börner [untersuchte](https://link.springer.com/article/10.1365/s40702-025-01202-7), vor welche Barrieren Open-Data-Portale die Entwickler von Open-Data-basierten Anwendungen immer noch stellen. Die Hürden lassen sich dabei auf die einzelnen Phasen der Open-Data-Wertschöpfungskette herunterbrechen. 

Im ersten Schritt, dem Finden geeigneter Datensätze, gaben die Interviewten an, immer noch große Probleme haben, an die von ihnen gesuchten Daten zu gelangen. Sei es weil sie über die bestehende Suchfunktion der Portal nicht ausgegeben werden, weil z.B. eine Verschlagwortung auch mit Synonymen fehlt, die Daten über mehrere Portale verstreut erst zusammengetragen werden müssen, oder schlicht, weil die Datensätze tatsächlich fehlen. Als Gegenmaßnahmen wird hier vorgeschlagen, die Such- und Filterfunktionen deutlich auszubauen und die Möglichkeit zu schaffen, Datensätze bei der Stadt konkret anfragen zu können. Proaktiv sollten die Städte im Vorfeld schon ein Bedarfserhebung vornehmen, um die sicherlich knappen personellen Ressourcen auf die Erhebung und Pflege der relevanten Datensätze zu lenken. Allgemein profitiert hier die Datenerfassung in der Phase 0 von einer [gut geleitete Dateneingabe](https://www.fokus.fraunhofer.de/de/dps/news/piveau_07-2025.html). Zudem sollten die durch die [Durchführungsordnung](https://www.govdata.de/informationen/hochwertige-datensaetze) bereits identifizierten hochwertigen Datensätze in jedem Open Data Portal auch als solche markiert werden. 

In der nächsten Phase, der Aufbereitung der Daten, erschweren die mangelnde Verständlichkeit, Qualität und Verknüpfbarkeit der Daten die Arbeit der Nutzenden. Hier würde es schon helfen, wenn die üblichen Standards für Datenformat und -beschreibung genutzt und eingehalten würden, eindeutige Identifikatoren auch bei Aktualisierungen stabil bleiben und semantisch gleiche Entitäten in unterschiedlichen Datensätze dieselben IDs bekommen, um so ihre Verlinkung zu ermöglichen. Datensätze in Open-Data-Portalen sollten generell versioniert sein und auch die alten Versionen dort vorgehalten werden, um Änderungen über die Zeit nachvollziehbar zu machen. Um Qualität und Vergleichbar von Datensätze beurteilen zu können, sind zudem die jeweils verwendeten Messmethoden bzw. -umstände zu dokumentieren (z.B. die Lage der Sensoren für die Luftqualitätsmessung).

Als Unterstützung für die eigentliche Anwendungsentwicklungsphase wird vorgeschlagen, auf den Open-Data-Portalen schon bestehende Anwendungen bzw. Anwendungsideen an den Datensätze zu verlinken, vielleicht sogar ein Forum einzurichten, in denen sich Entwickler austauschen können, sowie häufig gestellte Fragen auf einer entsprechenden FAQ-Seite zu sammeln. Die Daten nicht nur zum Download sondern auch über APIs bereitzustellen ist ebenfalls ein häufig geäußerter Wunsch, dem noch nicht viele Portale nachkommen. Diese könnten die Anwendungen direkt als Datenquellen zu nutzen, statt sich selbst um Datenhaltung und die (manuelle) Aktualisierung kümmern zu müssen. Und wenn Schnittstellen vorhanden sind, sollte deren Existenz und deren Benutzung auch dokumentiert werden, damit niemand [Endpunkte-Raten](https://openbiblio.social/@awinkler/114810567090692048) machen muss. 

Um überhaupt die Mühen der Entwicklung einer Open-Data-Anwendung auf sich nehmen zu wollen, muss absehbar sein, dass der längfristige Betrieb auch gewährleistet werden kann. Datensätze, die nach Veröffentlichung nicht mehr aktualisiert werden, widersprüchliche Lizenzierung, häufige (und meist auch unangekündigte) Datenformats- oder auch Schnittstellenänderungen, die jeweils eine Anpassung der Anwendung nach sich ziehen, sind Risiken, die schon im Vorfeld ausgeräumt gehören. Die Stadt kann den Betrieb auch unterstützen, indem sie selbst Möglichkeit zum Hosting der Anwendung anbieten und auch die Nutzung der App bewerben, indem diese auf einem App-Portal der Stadt prominent platziert wird.  

### Formen der Open Data Beteiligung
Neben den gezielten Interviews, wie sie für die eben vorgestellte Studie geführt wurden, können natürlich auch [anonyme Umfragen](https://fitko.lamapoll.de/Nutzendenbefragung-GOVDATA) eingesetzt werden, um die Zufriedenheit seiner Nutzenden abzufragen, in dem Fall [von GovData](https://social.bund.de/@opendata/114823369987675095). 

Ein Jahr gibt es nun schon das [Open Data Forum](https://discourse.opencode.de/c/opendata/755). Damit nicht immer dieselben schreiben (müssen) und die Threadlängen auch häufiger mal > 1 werden, möchte man das Forum vor allem in der Zivilgesellschaft [bekannter machen](https://www.linkedin.com/posts/bundesverwaltungsamtde_kompetenzzentrumopendata-bundesverwaltungsamt-activity-7357027369733263360-5u4Y).

Von 23. Mai bis 20. Juli hatten Interessierte Zeit für die zu entwickelnde EU-Datenstrategie der EU-Kommission über einen Fragebogen ihre Anliegen und Gedanken zur Gestaltung der EU-Datenwirtschaft [einzubringen](https://ec.europa.eu/info/law/better-regulation/have-your-say/initiatives/14541-European-Data-Union-Strategy_de). Von den gerade mal 171 eingegangen Rückmeldungen kamen mit 34 knapp 20% aus Deutschland. Länderübergreifend haben sich jeweils 10% Nichtregierungsorganisationen und Privatbürger [beteiligt](https://ec.europa.eu/info/law/better-regulation/have-your-say/initiatives/14541-European-Data-Union-Strategy/public-consultation_de), Unternehmen und Wirtschaftsverbände kommen dagegen zusammen auf 58%.  

In [dieser einstündigen Folge](https://www.eco.de/news/eco-podcast-zu-datenspende-und-open-source/) des eco-Podcasts "Das Ohr am Netz" geht es um eine ganz andere der Art der Beteiligung, nämlich die freiweilige Datenspende, um so beispielsweise medizinische Forschung und die Stadtplanung von morgen voranzubringen. Mit geeigneter Aggregation und Anonymisierung gäbe es auch keinen Personenbezug mehr und mann könnte sie somit auch als Open Data veröffentlichen.

In welchen Projekten und mit welchen Tools aus dem Wikimedia-Kosmos man Inhalte als Open Data richtig teilen kann, hat Stefan Kaufmann [in seinem Vortrag](https://commons.wikimedia.org/wiki/File:2025-07-02_BMUKN_Die_Welt_des_Freien_Wissens.pdf) zusammengestellt.

### Open Data Fortschritt
[Ein Bericht der Linux Foundation](https://www.linuxfoundation.org/research/pathways-to-open-data?hsLang=en) hat die Diskussionen zum Aufbau von Open Data Infrastrukturen
in der Session auf World Open Innovation Conference ausgewertet und drei wesentliche Aspekte identifiziert. Zum einen braucht es klare Verantwortlichkeiten und damit einhergehend das Recht, auch Auflagen für Zugang und Umgang setzen zu dürfen, aber eben auch die Pflicht, sich um die Pflege der Daten zu kümmern. Gleichzeitig bedarf es Anreize zur Zusammenarbeit, Daten zu teilen, Daten kollaborativ zu verbessern, und zwar so, dass es ein faires Geben und Nehmen ist und nicht nur eine Seite Daten beisteuert. Um die Einhaltung dieser Fairness und das Austarieren der Interessen zu gewährleisten braucht es entsprechend starke Organisationsstrukturen. 

Das Bundesverwaltungsamt (BVA) hat nochmal die wesentliche Punkte des zweiten [Open-Data-Fortschrittsberichts](https://www.bmi.bund.de/SharedDocs/kurzmeldungen/DE/2025/02/open-data-fortschrittsbericht.html) (vom Februar 2025) auf LinkedIn [zusammengefasst](https://www.linkedin.com/posts/bundesverwaltungsamtde_bundesverwaltungsamt-opendata-transparenz-activity-7354446635227119617-xquL) und auch in Bezug zum [Open Data Ranking](https://opendataranking.de) gesetzt. Die Ergebnisse des Rankings wurden auch im Magazin der Mercator-Stiftung [herangezogen](https://www.aufruhr-magazin.de/digitalisierte-gesellschaft/open-data-von-bund-und-laendern-mehr-transparenz-fuer-die-demokratie/), um zu verstehen, "wie Deutschland bei Open Data aufholen kann".

### Open Data in der Praxis
Was man sich vor zwei Jahren [noch scrapen musste](https://norden.social/@datenschatz/114856140656415177), ist nun endlich offiziell als offener Datensatz verfügbar: die [Trinkbrunnen Berlins](https://daten.berlin.de/datensaetze/trinkbrunnen_bwb) - kann man sich [hier](https://wfsexplorer.odis-berlin.de/?wfs=https%3A%2F%2Fgdi.berlin.de%2Fservices%2Fwfs%2Ftrinkwasserbrunnen%3FREQUEST%3DGetCapabilities%26SERVICE%3Dwfs) auch direkt im [WFS-Explorer](https://wfsexplorer.odis-berlin.de) anschauen.

Mister OpenData macht darauf [aufmerksam](https://norden.social/@MisterOpenData/114816954557295137), dass mit dem [Zuwendungsempfängerregister (ZER)](https://zer.bzst.de) in in Deutschland ein Verzeichnis gibt, in dem man nachschauen kann, ob eine Organisation gemeinnützig ist. Über die von Datenschutz ergänzt bereitgestellte [OpenAPI-Definition](https://tifa365.github.io/zer_openapi_specs/) kann man sich den Schnittstellen-Aufruf zusammenkonfigurieren.

Aktuelle Anschriften (also Adresse, Telefon, E-Mail und Webseiten-URL) von Behörden und Institutionen des Bundes findet man [hier](https://www.govdata.de/suche/daten/anschriftenverzeichnis-des-bundes).

## Linked Open Data
Auf dem zweiten [Barcamp zu Haushaltsdaten als Linked Open Data in Berlin](https://okfn.de/blog/2025/07/2.-barcamp-zu-haushaltsdaten-als-linked-open-data-in-berlin/) wurde in [sechs Sessions](https://pad.okfn.de/p/2._Barcamp_Haushaltsdaten_als_LOD_in_Berlin) gemeinsam an Ontologien und Konzepten gearbeitet, die in ein [Landeshaushaltsdaten-Vokabular](https://okfde.github.io/lod-budget-vocab/) fließen. 

Wie Botaniker WikiData für sich entdeckt haben, beschreibt [dieser Blogpost](https://blog.tepapa.govt.nz/2025/07/14/the-power-and-potential-of-wikidata-for-botany/) und noch tiefer [dieser Fachzeitschriftenartikel](https://academic.oup.com/aob/advance-article/doi/10.1093/aob/mcaf062/8158086?login=false).

Wem die WikiData-Abfragesprache SPARQL und die Recherche der dafür gegebenenfalls benötigten Entiäts-IDs zu mühsam ist, kann über den [SPINACH Wikidata Agent](https://spinach.genie.stanford.edu) an die Daten auch über natürlich sprachliche Anfrage kommen.

## Open Hardware
[Josef Prusa sieht](https://www.josefprusa.com/articles/open-hardware-in-3d-printing-is-dead/) den starken Anstieg der eingereichten Patente im 3D-Druck-Bereich vor allem in China als ernsthafte Gefahr für 3D-Druck-Open-Hardware. Denn offene Hardware muss eben auch produziert, transportiert und finanziert werden (wenn es auch nur die Strom-, Material- und Transportkosten sind) und teuere Urheberrechtsprozesse möchte niemand führen.

"Es tut nicht weh, den Schaltplan zu veröffentlichen" sagte man sich beim Berliner Lautsprecherhersteller Teufel und hat die Baupläne für ihren mobilen Bluetooth-fähigen Lautsprecher [unter eine Open-Source-Lizenz gestellt](https://www.heise.de/hintergrund/Die-Entwickler-des-Open-Source-Lautsprechers-Teufel-Mynd-im-Interview-10490607.html?seite=all). Da das meiste CO₂ bei der Produktion ausgestoßen wird, ist es nur logisch alles dafür zu run, dass ein Produkt länger genutzt wird. Also beispielsweise defekte Teile selber nachzudrucken können. Denn die bisherige Logik Wegschmeißen und Neukaufen statt Reparieren lassen, weil entweder billiger wegen Reparaturkosten bzw. lukarativer für Firmen wegen Neukaufzwang durch Nichtreparierbarkeit versucht die 
[EU-Ökodesignverordnung](https://www.ihk.de/nordschwarzwald/innovationn/umweltschutz-umwelt-akademie/umweltschutz/news-umweltschutz/dpp-oekodesign-6679344) nun zu durchbrechen.
  
Ein stromsparendes Wetterdashboard auf Basis eines ESP32-Mikrocontrollers und eines 7,5 Zoll E‑Ink-Displays (wie in einem E-Book Reader verwendet) [hat Sören Etler](https://www.linkedin.com/posts/soeren-etler_mein-selbstgebautes-esp32eink-wetterdashboard-activity-7356336354076549123-90XY) auf Grundlage [eines bestehenden Open Source Projekts](https://github.com/lmarzen/esp32-weather-epd) für sich selbst gebaut.

## Community
Rund 1.000 zufällig ausgewählte Wikipedia-Artikel hat die Frankfurter Allgemeiner Sonntagszeitung (FAS) mit KI-Unterstützung auf Fehler [untersucht](https://www.faz.net/aktuell/wirtschaft/wikipedia-ist-nicht-mehr-aktuell-und-hat-viele-fehler-110575350.html). Die Auswertung ergab, dass mindestens 20 Prozent der Seiten Informationen enthalten, die nicht mehr aktuell sind, sowie dass es fast nochmal so viele Seiten mit Angaben gibt, die noch nie gestimmt haben. Zurückführend sei dies auf die stagnierende Anzahl an Autoren bei steigender Menge an zu pflegender Artikel. Was vielleicht im ersten Moment gegen die Wikipedia sprechen würde, [sieht Netzpolitik](https://netzpolitik.org/2025/recherche-der-frankfurter-allgemeinen-sonntagszeitung-wie-hunderte-entdeckte-fehler-in-der-wikipedia-ihre-glaubwuerdigkeit-staerken/) im Gegenteil als beste Werbung für deren Community: denn diese reagierte souverän, und legte als erstes [eine Tabelle](https://de.wikipedia.org/wiki/Benutzer:Redrobsche/FAS-Wikipedia) für die von vom FAS-Artikel bemängelten Artikel an, die dann sukzessive abgearbeitet wurde. Parallel wurden mögliche Lösungsansätze [diskutiert](https://de.wikipedia.org/wiki/Wikipedia_Diskussion:Kurier#FAS-Artikel_zur_Zuverl%C3%A4ssigkeit_der_Wikipedia_-_und_eine_Challenge). Am Ende bleibt die unabänderliche Erkenntnis: "Wissen ist und bleibt eine endlose und kollektive Aufgabe."

Die [90-9-1-Regel](https://www.nngroup.com/articles/participation-inequality/?_kx=g8JrMovcpcb7Ktea3b4jHWDlHyOSgCULKtQdpBgGk4E.WQgA9C) besagt, dass in den meisten Online-Communities 90% der Nutzer nur Konsumenten sind, 9% zu mindestens ein wenig Inhalte beisteuern und 1% sich für die meisten Aktivitäten verantwortlich zeichnet. Neben dem allgemeinen Repräsentanzproblem stellt das eine Community auch vor ein Nachhaltigkeitsproblem, wenn Nutzerzahlen steigen, der Berg an Aufgaben (Maintenance, Komplexität, Erwartungen an neue Features, Support und Performanz erfüllt werden wollen) ebenfalls wächst, das aufgebaute Vertrauen nicht verspielt werden soll, dies aber von einer nur wenig wachsenden Gruppen Aktiver erfüllt werden soll. Wie nun die Betreiber von  iOverlander [schmerzlich lernen müssen](https://www.hereandthere.club/post/ioverlanders-pivot-shows-the-cost-of-community-driven-tech). Und auch eben auch die Nutzer, die lernen müssen, dass man ab einen bestimmten Punkt nicht mehr alles kostenlos bekommen kann, da ab einer bestimmten Komplexität Anwendungen nicht mehr nur ehrenamtlich betrieben werden können, sondern ein Full-Time-Job sind, von denen Leute dann auch leben können müssen. Die Podcast-Folge "Das wichtigste Hobby der Welt" widmet sich eben jenen Open Source Maintainern, die langsam ausbrennen, obwohl Leute wie sie das [Kartenhaus der kritischen Infrastruktur](https://bsky.app/profile/derhoermeyer.bsky.social/post/3ltlvgjdr3c26) zusammenhalten.

Im schlimmsten Fall [läuft es wie bei Komoot](https://bikepacking.com/plog/when-we-get-komooted/), wo die jahrelang auch durch die Community mit Herzblut aufgebaute Werte schließlich gewinnbringend an die nächste [Heuschrecke](https://de.wikipedia.org/wiki/Heuschreckendebatte) verscherbelt werden und diese vom Vertrauen / Image der bisherige Anwendung (und damit von der Arbeit aus der aus ihrer Sicht wahrscheinlich ["nützlichen Idioten"](https://de.wikipedia.org/wiki/N%C3%BCtzlicher_Idiot)) zehrend, Qualität (und damit Kosten) senkt ([Enshittification](https://mastodon.social/@mariafarrell/114941651924521605)) und ggf. sogar Preise erhöht, um den maximalen Gewinn für sich herauszuziehen, zu mindestens so lange, wie eine so im Niedergang befindliche Plattform überhaupt noch Nutzer halten kann und sich Alternativen wie [wanderer.to](https://wanderer.to) noch nicht etabliert haben (bevor sie vielleicht das gleiche Schicksal ereilt).

Eine [Umfrage des IÖW](https://ioew.eu.qualtrics.com/jfe/form/SV_9p2bGbTwrASUtdc) möchte für das Forschungsprojekt [REsI (Rolle von Emotionen in sozialen Innovationen für nachhaltigen Konsum)](https://www.ioew.de/projekt/rolle_von_emotionen_in_sozialen_innovationen_fuer_nachhaltigen_konsum) systematische Erkenntnisse darüber sammeln, welche Emotionen Menschen zur Teilnahme an Initiativen wie Energiegenossenschaften, solidarischer Landwirtschaft aber eben auch Open Source motivieren und auch langfristig beeinflussen. Die gewonnenen Erkenntnisse sollen helfen, [bessere Unterstützungsangebote & Rahmenbedingungen](https://mastodon.social/@ioew/114827902194516617) zu schaffen, "sodass mehr Menschen aktiv werden und bleiben".

["Weil es der Staat nicht gebacken bekommt"](https://netzpolitik.org/2025/hardware-spenden-weil-es-der-staat-nicht-gebacken-bekommt/) war die Motivation des Vereins "Computertruhe", ehrenamtlich Hardware-Spenden aufzubereiten um sie dann an Bedürftige zu verschenken.

[Stefan wundert sich](https://chaos.social/@stk/114825621182061366), warum so viele Forschende, Nichtregierungsorganisationen und Communities eigentlich besseren Wissens die [neoliberale Ideologie](https://de.wikipedia.org/wiki/Neoliberalismus) so sehr verinnerlicht haben, dass sie selbst im Bereich von Forschung, gesellschaftlichem Auftrag und Ehrenamt Maßstäbe wirtschaftlicher Nützlichkeit anlegen, in Quantitäten wie Followerzahlen, Reichweite und Leads denken, statt solche Logiken kritisch in Frage zu stellen. Aber Einbildung ist ja bekanntlich auch eine Form von Bildung. Wie müsste stattdessen [eine idealtypische NGO aussehen](https://chaos.social/@stk/114825627154853200), die angriffslustig sich gegen Zeitgeist und Trends stellt? Die für ihre Werte einsteht, und nicht nur pflichtschuldig "Gemeinwohl" irgendwo dranklebt, aber sonst im allgemeinen Alles-mit-KI-Strom mitschwimmt, aus Verblendung oder Angst, sonst vom Fördermitteltrog vertrieben zu werden.

## Citizen Science
Als [Homo ludens](https://de.wikipedia.org/wiki/Homo_ludens) sind wir geborene Problemlöser. Wir man dies nutzen kann, damit Bürgerwissenschaftler:innen neue Erkenntnisse quasi erspielen, die dann helfen, Krankheiten wie Krebs besser zu heilen, beleuchtet Professor Jeff Yoshimi [in seinem Artikel "Gaming Cancer"](https://thereader.mitpress.mit.edu/how-citizen-science-games-could-help-cure-disease/). Vorgestellt werden [EteRNA](https://www.sciencegamecenter.org/games/eterna), ein Sudoku-ähnliches Spiel, um RNA-Strukturen zu erzeugen, [Foldit](https://fold.it), an das Legespiel Bonsai angelehnt, um [Proteinfaltung](https://de.wikipedia.org/wiki/Proteinfaltung) zu simulieren, sowie [Nanocrafter](https://nanocrafter.org), ein Puzzlespiel mit synthesierbaren DNA-Fragmenten. 

Dank über 10.000 über die App Flora Incognita [geteilten Handyfotos](https://wisskomm.social/@FloraIncognita_DE/114873034988152893) von 270 Teilnehmenden aus der Citizen-Science-Community konnten 760 verschiedene Pflanzenarten auf dem Stadtgebiet des schweizer Winterthur [registriert werden](https://www.tagesanzeiger.ch/biodiversitaet-in-winterthur-die-vielfalt-an-pflanzen-hat-uns-ueberrascht-769763105700). Die Beobachtungen lassen sich auch auf einer [Online-Karte](https://www.winti-scout.ch/karte/html/wintiscouts_map.html) erkunden.

Wer mehr über Citizen Science erfahren möchte, kann nun [diesen freien Online-Kurs](https://www.open.edu/openlearn/science-maths-technology/citizen-science-and-global-biodiversity/content-section-overview?active-tab=content-tab) belegen.

## Digitale Souveränität
### Verwaltung 
In einem [kurzen arte-Beitrag](https://www.arte.tv/de/videos/128167-000-A/schleswig-holstein-auf-dem-weg-zur-digitalen-souveraenitaet/) wird an ein paar Beispielen gezeigt, wie man sich in Schleswig-Holstein mit Open Source digital souverän machen möchte. Vorgestellt wird die Software-Suite [Firemon 112](https://www.firemon112.de) zur Einsatzvorbereitung und -verwaltung für Feuerwehren, die [hier von den Kamaraden selbst offen entwickelt wird](https://bitbucket.org/gladder/workspace/projects/F1). Aber auch der Einsatz von LibreOffice und Linux in der schleswig-holsteiner Verwaltung wird angesprochen.

Die Open Source Business Alliance hat [hier nochmal zusammengefasst](https://www.treffpunkt-kommune.de/digitale-souveraenitaet-was-bringt-es-digital-unabhaengig-zu-sein/), warum es gerade für Kommunen wichtig ist, digital unabhängig zu sein.

Ein [Promo-Video](https://social.bund.de/@zendis/114952523511877158) des [ZenDiS](https://www.zendis.de) veranschaulicht schön, wie [OpenDesk](https://www.opendesk.eu/de) die Zusammenarbeit in der Öffentlichen Verwaltung zum Besseren verändern kann. 

### Alternativen
Franziska Kelch stellt auf dem [Wikipedia-Blog](https://blog.wikimedia.de/2025/07/03/fediverse/) Alternativen zu den großen Social-Media-Plattformen von BigTech vor: [Mastodon](https://joinmastodon.org/de) statt Elon Musks X, [Pixelfed](https://pixelfed.org) statt Metas Instagram, [PeerTube](https://joinpeertube.org/de/) statt Googles Youtube, [Loops](https://loops.video) statt dem chinesischen TikTok, [BookWyrm](https://joinbookwyrm.com/de/) statt Amazons Goodreads, [Friendica](https://friendi.ca) statt Zuckerbergs Facebook. Mehr Einblicke ins Fediverse gibt Ückück [in diesem Online-Artikel](https://www.l-iz.de/leben/gesellschaft/2025/07/ist-dieses-fediverse-mit-mastodon-eine-alternative-zu-meta-x-co-wir-fragten-stephanie-henkel-629146).

Andererseits [fremdeln](https://www.riffreporter.de/de/technik/hochschulen-fediverse-mastodon-wissenschaftskommunikation-social-media) viele Hochschulen immer noch mit dem Fediverse, weil es ihre Erwartungen an die gewünschte (und von X gewohnte) Reichweite nicht erfüllt. Wie im [Deutschlandfunk-Beitrag](https://www.deutschlandfunk.de/x-frei-wie-hochschulen-ihre-social-media-praesenz-neu-organisieren-100.html) nachzuhören, geben viele Unis dem [Matthäus-Effekt](https://de.wikipedia.org/wiki/Matth%C3%A4us-Effekt) nach und gehen zwar von X weg, aber dann doch wieder zu den großen kommerziellen Plattform wie LinkedIn von Microsoft oder Instagram von Meta, statt eigene Fediverse-Instanzen zu hosten und so vielleicht etwas zum Erreichen einer [kritischen Masse](https://de.wikipedia.org/wiki/Kritische_Masse_(Spieltheorie)) beizutragen. 

Auch Atlassian hat sich mit seinen Lösungen JIRA und Confluence zu einem Platzhirsch entwickelt, dass die Nutzenden inzwischen kräftig im Geldbeutel spüren. Auch die Möglichkeiten des On-Premise-Hostings wurden bereits 2022 eingestellt, Cloudzwang mit Lizenzgebühren pro Nutzer und Monat ist lukrativer für den Anbieter. Mit [OpenProject](https://www.openproject.org/) und [XWiki](https://www.xwiki.org/) haben nun zwei Projekte [eine Partnerschaft geschlossen](https://www.openproject.org/de/blog/open-source-jira-confluence-alternative/), um eine datenschutzfreundlichere, kostengünstigere, integrierte Open Source Alternative für Projekt- und Wissensmanagement anbieten zu können.

### Big Tech
Nicht, dass man es sich nicht eh schon längst hätte denken können, aber ein Microsoft-Manager [musste nun unter Eid zugegeben](https://www.itmagazine.ch/artikel/85137/Unter_Eid_Microsoft_kann_Schutz_vor_Cloud_Act_nicht_garantieren.html), dass eine Garantie, keine Daten an US-Behörden weiterzugegeben, nicht gegeben werden könne. Doppelt pikant in diesem Zusammenhang auch, sparfüchsig wie man ist, hatte Microsoft die Wartung von im US-Verteidigungsministerium eingesetzten Computersystemen an Software-Ingenieure in China [ausgelagert](https://www.propublica.org/article/microsoft-digital-escorts-pentagon-defense-department-china-hackers). 

Aufgabe von [Wettbewerbsbehörden](https://de.wikipedia.org/wiki/Wettbewerbsbeh%C3%B6rde) sollte es eigentlich sein, zu verhindern, dass Unternehmen in marktbeherrschende Stellung kommen und so den fairen Wettbewerb gefährden. Beim Kauf von VMware durch Broadcom hat man aus unerfindlichen Gründen (auch wieder Matthäus-Effekt?) diese Gefahr nicht gesehen, in Folge kam es zu drastischen Kostensteigerungen. Der CISPE-Verband europäischer Cloudanbieter hat daher nun Klage beim EU-Gericht gegen die Genehmigung der EU-Kommission [eingereicht](https://www.heise.de/news/Broadcoms-VMware-Uebernahme-EU-Cloudanbieter-verklagen-die-Kommission-10499025.html).

### Wirtschaft
Auch in Unternehmen halten Entscheider aus Bequemlichkeit an der Nutzung von BigTech-Lösung fest. Auf Golem gibt es [ein paar Argumentationshilfen](https://www.golem.de/news/digitale-souveraenitaet-argumentationshilfe-fuer-resiliente-it-entscheidungen-2507-198470.html) für Mitarbeiter solcher Firmen, wie sie Wagenburg-Mentalität, Feature-FOMO und Angst vor angeblichen zusätzlichen Aufwand und Kosten mit stragisch kluger Kommunikation durchbrechen können und stattdessen Risiko- und Chancenbewusstsein fördern. 

Das OpenForumEurope [führt aus](https://eu-stf.openforumeurope.org), warum es neben nationalen Initiativen wie dem Prototypfund in Deutschland und der Schweiz auch einen Fördertopf für souveräne Technologie auch auf europäischer Ebene braucht und was für die Umsetzung benötigt wird.

## Verwaltungsdigitalisierung
### Struktur
In Anbetracht der Entwicklungen und verpassten Chancen der letzten Jahre [kommt man bei Golem zum Schluss](https://www.golem.de/news/digitalisierung-open-source-hat-im-bund-keine-lobby-2507-197269.html), dass Open Source keine Lobby im Bund hat. Dieser Einschätzung schließt sich auch [die Mehrheit](https://social.osb-alliance.de/@OSBA/114829201166983479) der Teilnehmenden der darauf aufbauenden Umfrage an. Große Skepsis herrscht auch über die Intensionen des neuen Digitalministeriums. In der [Podcastfolge](https://chaosradio.de/cr301-dicke-bretter-diesmal-ueber-die-schwarz-schwarz-roten-und-ihr-neues-digitalministerium) von Dicke Bretter wird darüber gesprochen, was ein Digitalministerium leisten soll und wie überhaupt neue Ministerien entstehen und wie ihr Aufbau ist.

Über das Konzept "Deutschlandstack" - Government as a Platform wird [beim eGovernment Podcast philosophiert](https://egovernment-podcast.com/egov225-gov-as-a-platform/).

Während andere noch am Konzepteschreiben sind, möchte Sachsen-Anhalt beim Bündeln von Online-Services [Vorreiter sein](https://www.linkedin.com/posts/matthias-punz-805b17175_w%C3%A4hrend-der-bund-noch-an-konzepten-arbeitet-activity-7350763024237883394-lker).

### Praxis
[KERN UX](https://www.kern-ux.de) ist ein [UX](https://de.wikipedia.org/wiki/User_Experience)-Standard und Baukastensystem für die deutsche Verwaltung mit dem Prinzipien wie z.B. Barrierefreiheit und vereinheitlichtes [Look and Feel](https://de.wikipedia.org/wiki/Look_and_Feel) in die vom und für den Bund entwickelte Software imprägniert werden sollen. Mehr über dieses Designsystem und die Bedeutung von User Experience erfährt man [in dieser eGovernment-Podcast-Folge](https://egovernment-podcast.com/egov224-kern-ux/).

In einer anderen Folge des Podcasts, der [Rückschau auf den Monat Juli](https://egovernment-podcast.com/egov226-monatsschau-07-25/), geht es unter andem um den [Deutschland-Index der Digitalisierung](https://www.oeffentliche-it.de/deutschland-index/) und die begonnene Umsetzung der Registermodernisierung.

Ein Jahr ist der [Beirat des deutschen Digital Services Coordinators](https://www.dsc.bund.de/DSC/DE/1DSC/Beirat/start.html) im Amt. Das Gremium aus Zivilgesellschaft, Forschung und Wirtschaft begleitet die Durchsetzung des Digital Services Act (DSA). Auf Grund politischer Mehrheitsverhältnisse ist die Zivilgesellschaft im Beirat nicht so stark vertreten, wie sie sein könnte, dabei wurden und werden viele der wegweisenden gerichtlichen Verfahren gegen die großen Plattformen, die unter das DSA fallen, vor allem von NGOs ausgefochten, [wie im Zwischenfazit betont wird](https://netzpolitik.org/2025/geschichten-aus-dem-dsc-beirat-wie-trumps-drohungen-europaeische-grundrechte-gefaehrden/). Leider droht die Durchsetzung europäischen Rechts zunehmend als Verhandlungsmasse im Handelsstreit mit den USA unter die Räder zu kommen.
  
### Fehlende Strategie
Für die im Förderprogramm "Modellprojekte Smart Cities" entstanden Apps, Plattformen und Projekte ist noch völlig offen, wer und wie sie nach dem Ende der Förderzeitraum weiter finanziert werden sollen, geschweige denn sie auf andere Kommune auszurollen, [hat Helen Bielawa für das SZ-Dossier analysiert](https://www.linkedin.com/posts/helen-bielawa-051902145_322-von-667-smart-city-projekten-haben-irgendwas-activity-7355850828949168132-jH0J).

[Für den Bundesrechnungshof](https://www.spiegel.de/politik/deutschland/bundesrechnungshof-kritisiert-geldverschwendung-bei-digitalisierung-a-706ea431-18f0-4183-b4b0-5fbc64996cac?s=09) liegt es vor allem an den "mangelnden tiefergehenden Analysen der Ausgangssituation", dass die Bundesverwaltung bei der Digitalisierung nicht vom Fleck kommt, trotz drei Digitalstrategien. Stattdessen zahlreiche Parallelentwicklungen, und weiteres hinterher geworfenes Geld für Projekte, deren Scheitern schon vor Jahren als sehr wahrscheinlich eingestuft wurde und dann tatsächlich auch gescheitert sind.

Es drängt sich der Verdacht auf, dass manche Software oftmals nur aus Marketinggründen entwickelt worden ist, man spricht hier auch von [Marchitecture bzw. Marketecture](https://social.tchncs.de/@fkr/114941541726409649). 

## Dashboards
Verwaltungs-Dashboards verbreiten inzwischen auch wie ein Krebsgeschwür. Dabei wird [der Teil mit](https://norden.social/@datenschatz/114810578991655170) "aus den mit den Daten gewonnenen Erkenntnissen gezielte Maßnahmen voranzutreiben und deren Fortschritt / Erfolg dauerhaft auch über die Dashboards zu kontrollieren und gegebenenfalls nachzusteuern" meist "vergessen". So zombien sie so vor sich hin. An anderer Stelle lässt man sich [lieber überraschen](https://chaos.social/users/stk/statuses/114842147394518694), statt lokal Sensoren auszubringen, deren Messungen über APIs in Warn-Apps zu integrieren und über geeignet gewählte Schwellwerte dann proaktiv zu alamieren, wenn diese überschritten werden.

Die interaktive Visualisierungen von Daten und Indikatoren des [EU-Tourismus-Dashboards](https://tourism-dashboard.ec.europa.eu/?lng=de&ctx=tourism) sollen den Tourismus in Europa [nachhaltiger machen](https://www.heise.de/news/EU-Dashboard-soll-Wandel-im-europaeischen-Tourismus-Oekosystem-visualisieren-10493782.html), zu mindestens wenn die politischen Entscheider auch drauf schauen und dann die richtigen Maßnahmen ergreifen (oder von Umweltverbänden auf Grund der Daten entsprechend Druck bekommen). Auch Touristen könnten mit Blick auf die Zahlen vielleicht ihr Reiseverhalten überdenken.

## Visualisierungen
Der [Historical Tech Tree](https://www.historicaltechtree.com) zeigt in einer interaktiven Karte etwa 2000 Innovationen der letzten drei Millionen Jahre Innovation und wie sie [miteinander verbunden sind](https://www.heise.de/news/Web-Tipps-Technik-Stammbaum-10479184.html).

Zur 200-ten Jubiläumsausgabe des [Data Vis Dispatch](https://www.datawrapper.de/blog/data-vis-dispatch-july-8-2025) wird hinter die Kulissen geschaut, die häufigsten Fragen beantwortet und auf die in Zukunft geplanten Features geschaut.

## Karten
### Darstellungen
Die Agentur für Arbeit hat die jährlichen Daten zu den Gehältern von fast 22 Millionen Angestellten. [Als Karte dargestellt](https://mastodon.social/@chwoma/114891592291040868), erkennt man leicht die Automobilhersteller-Standorte.

Mit dem [Einwohnerzähler](https://atlas.zensus2022.de) kann man sich für jeden beliebigen Ort in Deutschland anzeigen lassen, wie viele Menschen in dessen 5km-Umkreis [wohnen](https://norden.social/@destatis@social.bund.de/114850757064166345).

Wie sich die hausärztliche Versorgung von 2011 bis 2022 verändert hat, dokumentiert [ein neuer IÖW Datensatz](https://data.fdz.ioer.de/dataset.xhtml?persistentId=doi:10.71830/7N8G1E), die Einordnung und Visualisierungen als Karte [können](https://wisskomm.social/@ioer/114873026580818573) dem bereits letzten Jahr veröffenlichten [Artikel](https://rur.oekom.de/index.php/rur/article/view/2278/5094) entnommen werden. 

Das [Urban Mining Kataster](https://urbanminingkataster.de) visualisiert den Materialbestand von rund 52 Millionen Gebäuden in ganz Deutschland. Welche Baumaterialien verbaut wurden und wie hoch das Treibhauspotenzial (Global Warming Potential, GWP) ist, lässt sich ebenfalls in der interaktiven 3D-Karte für jedes Gebäude [abfragen](https://concular.de/digitaler-blick-fuer-die-stadtentwicklung-concular-startet-urban-mining-kataster-deutschland-fuer-staedte-und-kommunen/). An Hand der Forschung und der [Daten des IÖR](https://wisskomm.social/@ioer/114829264343656098) kann das Potenzial für eine ressourcenschonende Kreislaufbauwirtschaft abgeschätzt werden.

### Pflanzen
Jährlich gehen weltweit 100 Millionen Hektar fruchtbares Land [verloren](https://bsky.app/profile/dlr-de.bsky.social/post/3luphg3frus2t). Das Deutsches Zentrum für Luft- und Raumfahrt (DLR) hat in der Messkampagne CROPEX25 vier Monate lang Böden, Pflanzen und Atmosphäre bei München [untersucht](https://www.dlr.de/de/aktuelles/nachrichten/2025/testfluege-ueber-bayern-liefern-daten-fuer-neue-erdbeobachtungsmissionen). Mit den gewonnenen Erkenntnissen sollen nachhaltige Landwirtschaft, Klimaschutz und Ernährungssicherheit vorangebracht werden.

Wer sich in Berlin für Kleingärtnerei [interessiert](http://berlin.de/gaertnern), wird auf der neuen Plattform ["Berlin gärtnert"](https://berlingaertnert.odis-berlin.de) der [Open Data Informationsstelle (ODIS)](https://odis-berlin.de/projekte/2025-06-berlingaertnert/) fündig. Auf der Gartenkarte sind nicht nur die vielfältige Projekten [verzeichnet](https://www.berlin.de/sen/uvk/presse/pressemitteilungen/2025/pressemitteilung.1585200.php), auch ein Veranstaltungskalender und Gartentyp-Selbsttest sowie weitere umfangreiche Informationen werden [mitgeliefert](https://www.linkedin.com/posts/senmvku_die-neue-plattform-berlin-g%C3%A4rtnert-activity-7355924239905886208-RLNy).

### Tools
Wer die Geodaten hinter einer [WFS](https://de.wikipedia.org/wiki/Web_Feature_Service)-Schnittstelle sich mal schnell auf einer Karte anzeigen lassen möchte, wird ebenfalls vom ODIS geholfen. Mit dem [WFS Explorer](https://wfsexplorer.odis-berlin.de) muss man nun nicht zwangsweise gigabyteweise QGIS herunterladen, sondern braucht nur noch ein Browser. Weitere Features der Lösung sind [hier aufgelistet](https://troet.cafe/@hanshack/114788385967284925). Damit nicht nur Berlin was von dem Angebot hat, hat Tim Fangmeyer [kurzerhand](https://www.linkedin.com/posts/timfangmeyer_ich-habe-den-letzte-woche-ver%C3%B6ffentlichten-activity-7348604412803584002-qbY5) den Open Source Code beispielhaft für [Hamburg adaptiert](https://tifa365.github.io/wfs-explorer.hamburg). Allein für die starke [Verschränkung](https://www.linkedin.com/posts/hans-hack-001683303_the-geoexplorer-just-got-an-update-the-ugcPost-7347909233717264384-NuvQ) der Berliner Vorlage mit deren [GeoExplorer](https://geoexplorer.odis-berlin.de) bei der Freitextsuche musste eine andere Lösung gefunden werden. Nachnutzung lohnt sich!

Mit der [Open Source](https://github.com/opengeos/anymap) Python-Bibliothek [AnyMap](https://anymap.dev) lassen sich interaktive Karten erstellen und bald auch über den WebGL-Renderer [Potree](https://potree.github.io) LiDAR-Daten [visualisieren](https://www.linkedin.com/posts/giswqs_geospatial-mapping-potree-activity-7349306242512613376-jsPf).

Ebenfalls mit WebGL schafft es der [Globe Of Wonder](https://github.com/Quad9DNS/GlobeOfWonder) in Echtzeit Ereignisse auf einen Globus [zu projezieren](https://mastodon.social/@quad9dns/114902199658368313). 

### OpenStreetMap
[Vector tiles](https://en.wikipedia.org/wiki/Vector_tiles) sind die speicherärme und flexible Alternative zu vorgerenderten Bitmap-Tiles. Nun hat man auch bei OpenStreetMap (OSM) auf diesen Ansatz [umgestellt](https://blog.openstreetmap.org/2025/07/22/vector-tiles-are-deployed-on-openstreetmap-org/). 

Dass ein an einem OSM-Elemente verlinkte WikiData-Eintrag auf Klick direkt in ein menschenlesbare Vorschau [umgewandelt wird](https://en.osm.town/@seav/114876057104275231), ist ein weiteres neu eingeführtes Feature. 

## Mobilität
### ÖPNV
Vom [Transitous Hack Weekend](https://github.com/public-transport/transitous/wiki/Transitous-Hack-Weekend-Berlin,-July-2025) Mitte Juli in Berlin berichtet Volker Krause [auf seinem Blog](https://volkerkrause.eu/2025/07/19/transitous-hack-weekend-july-2025.html).

[Wahlatlas wünscht sich](https://social.bund.de/@opendata/114823485843318220) ein aktualisiertes maschinenlesbares Streckennetz der Deutsche Bahn. Aber scheinbar gibt es diese Daten nur noch [regionenweise](https://mobilithek.info/offers?searchString=%22schienennetz%22&page=2) bei der Mobilithek.

Wie man mit den Daten vom Schweizer [opendata.ch](https://opendata.ch/de/) eine Zugfahrplan auf der Kommandozeile erzeugen kann, [demonstriert Philipp Seitzinger](https://gnulinux.ch/zugfahrplan).

Das U-Bahn-System New Yorks [simulativ verändern](https://mastodon.social/@kottke/114858598236589522) lässt sich mit [BuildMyTransit.nyc](https://buildmytransit.nyc)

### Wetter und Klima
Neues Wort gelernt: Scrollytelling. Eben mit dieser Erzähltechnik [wird anschaulich dargelegt](https://krauses.pageflow.io/emw-zeigen-was-moeglich-ist), wie die [Europäische Mobilitätswoche](https://www.umweltbundesamt.de/themen/uba-scrollytelling-europas-staedte-machen-mobil) zum Gelingen klimafreundlicher Mobilität vor Ort beiträgt.

In der Lausitz gibt es mit der ["Kühlen Spur"](https://www.lausitzerseenland.de/de/erleben/radfahren/thematische-tagestouren/artikel-kuehle-spur-auf-schattigen-wegen-durch-die-lausitzer-seenlandschaft.html) Deutschlands ersten an den Klimawandel [angepassten Radweg](https://www.zalf.de/de/aktuelles/Seiten/Pressemitteilungen/BTU-Fahrradweg-ZALF.aspx). 

Wer lieber wandert, kann zu mindestens schon mal den Prototypen ["Cool Way"](https://github.com/soerenetler/schatten_in_konstanz) nutzen, dieser [weist](https://soerenetler.de/de/blog/cool_ways/) beschattete Wanderwege für heiße Tage [aus](https://www.linkedin.com/posts/soeren-etler_cool-way-beschattete-wanderwege-f%C3%BCr-hei%C3%9Fe-activity-7345355805837189122-I2s4).

Wann muss ich mit dem Fahrrad losfahren, um nicht noch in den Regen kommen? - diese Frage [beantwortet](https://mastodon.pub.solar/@marc/114810263783366892) die [Regenampel](https://regenampel.de), einfach Start-Ziel sowie die Fahrgeschwindigkeit angeben.

### Radverkehr
Das Forschungsprojekt [RULES](https://www.mobilitaetsforum.bund.de/DE/Themen/Wissenspool/Projekte/NRVP/NRVP_23-25/NRVP_Uni-Freiburg_RULES_2024-2026.html) untersucht die Ursachen für Regelverstöße von und gegenüber Radfahrenden. Entsprechende anonyme Meldungen über auch selbst begangener Verstöße kann man auf [dieser Karte](https://www.regelverstoesse.de) eintragen und auch die Gründe für sein Verhalten [angeben](https://leipzig.adfc.de/neuigkeit/wie-sicher-ist-radfahren-in-leipzig-fuer-dich). So wird beispielsweise lieber auch Gehwegen gefahren, wenn die Straße als [nicht sicher wahrgenommen wird](https://www.adfc.de/neuigkeit/wie-sicher-fuehlen-sich-radfahrende-in-der-stadt).  

Obwohl [Studien](https://www.pnas.org/doi/10.1073/pnas.2422334122) klar [belegen](https://verkehrswende.social/@CCitiesOrg/114895486746137939), warum Radwege weiter ausgebaut werden sollten, eben weil Radfahren und zu Fuß gehen das Klima schont und die persönliche Gesundheit stärkt, werden auch mangels politischen Willens [kaum Radschnellwege gebaut](https://www.mdr.de/nachrichten/deutschland/politik/geplante-radschnellwege-sachsen-anhalt-thueringen-foerderung-102.html). 

### Unfälle
Changing Cities hat [eine Anleitung geschrieben](https://changing-cities.org/how-to-unfalldaten/), wie man Verkehrs-Unfalldaten findet, sinnvoll aufbereitet, um gefährliche Stellen sichtbar zu machen und so politische Veränderungen anzustoßen.

Eine solche Aufbereitung speziell für Radunfälle bietet z.B. [Fahrrad-Unfallorte](https://fahrrad-unfallorte.de).

Der [Kalender der Verkehrsunfälle](https://service.destatis.de/DE/verkehrsunfallkalender/) vom Statistischen Bundesamt weist nun auch aus, an welchen Tagen in den vergangenen vier Jahren besonders viele E-Scooter-Fahrende [verunglückt sind]( https://social.bund.de/@destatis/114946438433984398). 

### Verkehrssicherheit
Was ein Stadt-weites 30 km/h Geschwindigkeitslimit bringt, [zeigen die Daten aus Helsinki](https://yle.fi/a/74-20174831), denn hier gab seit Juli 2024 keinen einzigen Verkehrstoten mehr.

Auch die [Evaluationsergebnisse GOW30](https://www.zukunft-mobilitaet.net/174605/analyse/evaluation-tempo30-hauptstrassennetz-amsterdam-gow30/) aus der Einführung von Tempo 30 in einem großen Teil des Amsterdamer Hauptstraßennetzes ab Dezember 2023 weisen in diese Richtung. 

Bis Ende Juli 2025 lief der Aufruf vom [VCD-Schulwege-Check](https://www.vcd.org/artikel/vcd-schulwege-check) an Eltern, Familienangehörige und Aktive, risikoreiche Orte auf der virtuellen Deutschlandkarte [schulwege.de](https://www.schulwege.de/) einzutragen. Eine Veröffentlichung der Ergebnisse ist für September geplant und sollen Argumente liefern für sichere Schulwege für mehr selbstständige Mobilität, Tempo 30 als Regelgeschwindigkeit innerorts und das Ziel der Vision Zero, also keine Verkehrstoten mehr im Straßenverkehr. 

## Klima
### Klimagerechtigkeit
[Der Erdüberlastungstag ist jedes Jahr früher](https://taz.de/Erdueberlastungstag-immer-frueher/!6103493/), dieses Jahr wurden rein rechnerisch bereits am 24. Juli alle natürlichen Ressourcen, die die Natur in einem Jahr produzieren kann, verbraucht.

[Dabei wird Klimaschutz weltweit von großen Mehrheiten unterstützt](https://www.derstandard.at/story/3000000279384/ist-klimaschutz-wirklich-out). Laut Gallup-Umfragen glauben aber nur 43 Prozent der Unterstützenden, dass ihre Mitmenschen auch bereit wären, etwas für das Klima zu tun. Es geht also nicht um die Frage "Klimaschutz ja oder nein", sondern um das wie und wann von Maßnahmen und den strategischen Umgang mit Verzögerern und Verhinderern.  

"Wie ungerecht ist die Klimakrise und was kann uns die Attributionsforschung zu diesem Thema lehren?" Diese Frage erörtert der Scientists for Future Podcast [im Gespräch](https://s4f-podcast.de/2025/07/folge-37-attributionsforschung-klimaungerechtigkeit/) mit der Forscherin Friederike Otto.

### Rechtssprechung
Der Internationale Gerichtshof (IGH) hat in seinem Gutachten eine "saubere, gesunde und nachhaltige Umwelt" [als Menschenrecht bezeichnet](https://www.tagesschau.de/ausland/europa/igh-gutachten-klima-102.html). Er verlangt entsprechend [von allen Staaten](https://perspective-daily.de/article/3840-na-toll-jetzt-muss-man-wieder-hoffnung-haben/GNZi9b98) mehr Einsatz gegen den Klimawandel. Die Erfolgschancen laufender und zukünftiger Klagen könnten jetzt deutlich steigen, da sich Gerichte eben auf die ausformulierten Rechtsstandards des IGH-Gutachtens nun berufen können. Der IGH selbst hatte schon angedeutet, dass betroffene Länder Reparationszahlungen von den Verursachern einfordern könnten.

### Pollenflug
Das europäische [Copernicus-Programm](https://atmosphere.copernicus.eu/cams-air-boreal-spring-2025) zur Überwachung der Erdatmosphäre hat für Mai diesen Jahres ein Rekordhoch an Birkenpollen [festgestellt](https://taz.de/Effekte-der-Klimakrise/!6098724/). Durch den Klimawandel beginnt die Phase des Pollenflugs immer früher, damit steigt auch das Pollenaufkommen, auch Mastjahre der Bäume häufen sich, in diesen produzierten Bäume besonders viel Pollen. Die Pollen werden zudem immer aggressiver, da Ozon und Kohlenstoffdioxid in der Luft bei ihnen eine Schutzreaktion auslösen, wodurch mehr Eiweiß freigesetzt wird, der wiederum allergisch wirkt.

Der Deutsche Wetterdienst (DWD) baut gerade [ein vollautomatisches Messnetz auf](https://www.stern.de/news/verbesserte-pollenflugvorhersagen--dwd-baut-vollautomatisches-messnetz-auf-35938652.html), um seine Pollenflugvorhersagen zu verbessern.

### Wirtschaft
Nicht die viel bejammerten Energiekosten und Bürokratie sind die größte Bedrohung für die deutsche Industrie, sondern die gern verdrängten [Folgen des Klimawandels](https://www.zeit.de/wirtschaft/2025-07/klimakrise-deutschland-industrie-klimaschaeden-energie-buerokratie). So sanken die Erträge von Getreide und Mais in den Dürrejahren 2018, 2019 und 2022 um bis zu 25 Prozent. Auch Lieferketten sind von den schwereren Auswirkungen an anderen Stellen in der Welt [betroffen](https://mastodon.online/@tinoeberl/114841644930402668). Und von den 33 Milliarden Euro Schäden bei der Flutkatastrophe im Ahrtal waren gerade mal ein Drittel versichert. [Wie correctiv recherchiert hat](https://correctiv.org/aktuelles/klimawandel/2025/07/29/unversichert-in-der-klimakrise-kommunale-gebaeude-ohne-schutz/), versichern manche Kommunen wegen zu hoher Kosten ihre Gebäude schon gar nicht mehr gegen Extremwetter. Im Katastrophenfall dürfen dann Bund und Steuerzahler zahlen. Ebenfalls von correctiv stammt [die Datenauswertung](https://correctiv.org/aktuelles/klimawandel/2025/07/10/diese-landkreise-haben-die-hoechsten-schaeden-durch-extremwetter/) der zerstörerischsten Extremwetter-Ereignisse in Deutschland zwischen 2002-2022. So waren vor allem Rheinland-Pfalz, Bayern und Sachsen und konkret die Mittel- und Hochgebirge am stärksten betroffen.

### Hitze
Das neue Klimamodell des Alfred-Wegener-Instituts kann [in 9km Auflösung zeigen](https://www.focus.de/earth/deutsche-forscher-zeigen-unsere-klimazukunft_2c847ca6-2d35-4de9-bb12-03698aa6c71e.html), wie stark Hitze, Starkregen und andere Extremwetterereignisse bis 2100 regional zunehmen könnten.

Der Juni in Deutschland war [drei Grad wärmer](https://norden.social/@grimm/114827939254712564) als das langjährige Mittel zwischen 1961 und 1990. Etwas, was sich auch in der Entwicklung der Anzahl der Hitzetage pro Jahr von 1965 bis 2024 [zeigt](https://norden.social/@datenschatz/114782572564792178).

[Eine Schnellstudie hat ergeben](https://www.tagesschau.de/wissen/klima/bilanz-hitzetote-europa-100.html), dass die Juni-Hitzewelle in Europa schon jetzt zu dreimal mehr Hitzetote geführt hat, da durch den Klimawandel die Temperaturen noch höher waren.

Mit den [neuen Hitzetools](https://hrc-hitzetool.ioer.info) vom IÖR lassen sich Hitzeanpassungsmaßnahmen im [Freiraum](https://hrc-hitzetool.ioer.info/tool_freiflaechen.php) und in [Wohngebäuden](https://hrc-hitzetool.ioer.info/tool_gebaeude.php) bewerten. Mehr Hintergründe gibt es im Dossier [Klimaresilienz](https://www.gebaeudeforum.de/themenschwerpunkt/) vom [Gebäudeforum klimaneutral](https://www.gebaeudeforum.de/). 

Hamburg möchte das Wissen der Menschen vor Ort in ihren Klimaanpassungsplan einbeziehen und fragt in [seinem Beteiligungstool](https://klimaanpassung-nord.beteiligung.hamburg/#/contributions/map) sowohl persönliche Betroffenheit als auch Umsetzungsideen ab.

### Wasser
Neben der steigenden Oberflächentemperatur ist die noch viel stärker [steigende Temperaturen der Ozeane](https://apps.socib.es/subregmed-indicators/ocean_temperature.htm), z.B. des Mittelmeeres, [noch viel besorgniseregender](https://dju.social/@DerKlimablog/114808495936878862). 

Gleichzeitig werden für die Elbe neue Rekord-Tiefstände [verzeichnet](https://taz.de/Niedrigwasser-durch-Klimakrise/!6098381/). Durch das Niedrigwasser konnten Schiffe nur mit halber oder ein Viertel ihrer normalen Fracht fahren.

Wissenschaftler haben alte Navy-Fotografien unter anderen Gesichtspunkten [ausgewertet](https://scitechdaily.com/scientists-just-turned-dusty-navy-photos-into-a-climate-time-bomb/). Die wiederentdeckten Luftaufnahmen der Antarktis von 1966 helfen nun die Dynamiken des Zusammenbrechens der Eisschichten [besser zu verstehen](https://www.nature.com/articles/s41467-025-59293-1), und was das für die steigenden Meeresspiegel bedeutet.

### Maßnahmen
Die getroffenen Maßnahmen zur stärkeren Begrünung Paris' zeigen Wirkung: gerade bei sommerlicher Hitze [senkt sie Temperaturen deutlich](https://www.derstandard.at/story/3000000277731/paris-kuehlt-sich-waehrend-der-hitzewelle-dank-der-begruenung-ab). Auch in Spanien werden [ähnliche Maßnahmen ergriffen](https://www.deutschlandfunk.de/wie-sich-spaniens-staedte-gegen-extremhitze-wappnen-100.html).

Dass Bodenversiegelung mehrfach problematisch ist, [rückt immer stärker ins Bewusstsein](https://www.telepolis.de/features/Tegelwippen-Wie-Staedte-sich-besser-an-den-Klimawandel-anpassen-koennen-10494670.html). Neben Hitze verhindern sie auch das Versickern von Regenwasser. Also mehr entsiegeln! Was in den Niederlanden Tegelwippen genannt wird, haben Studierende der Hochschule für Gesellschaftsgestaltung in Koblenz als ["Abpflastern"](https://www.abpflastern.de) nach Deutschland geholt.

Nachdem wir schon die 90-9-1 Regel hatten, geht es jetzt um die [3-30-300 Regel](https://bsky.app/profile/ec.europa.eu/post/3lvatsl5tgs2p): jeder sollte von seinem Zuhause mindestens 3 Bäume sehen können, die unmittelbare Nachbarschaft sollte mindestens 30 Prozent Baumkronenbedeckung aufweisen und die nächste Grünfläche / Park sollte nur maximal 300 Meter entfernt sein. Wo die EU in der Umsetzung ihrer [Biodiversitätsstrategie 2030](https://environment.ec.europa.eu/strategy/biodiversity-strategy-2030_en) kann man über einen entsprechenden [Tracker](https://dopa.jrc.ec.europa.eu/kcbd/actions-tracker/) verfolgen.

Gerade mal 6 Monate ist es her, dass die USA [Staugebühren](https://www.forschungsinformationssystem.de/servlet/is/387487/) eingeführt haben, und schon jetzt haben sie zu weniger Staus, weniger Luftverschmutzung und weniger Unfällen [geführt](https://www.theguardian.com/us-news/2025/jul/09/new-york-city-congestion-pricing-trump).

### Emissionshandel
Inwieweit das komplexe marktwirtschaftliche Instrument des Emissionshandel (inzwischen auch schon 20 Jahre) wirklich die CO2-Emissionen senkt, lässt sich immer noch [nicht genau beziffern](https://www.klimareporter.de/europaeische-union/der-emissionshandel-funktioniert-oder-auch-nicht), da auch andere Effekte zur Reduktion beigetragen haben. Beim Umweltbundesamt (UBA) sieht man die Entwicklung [trotzdem positiv](https://www.umweltbundesamt.de/presse/pressemitteilungen/20-jahre-europaeischer-emissionshandel-deutsche). Klar ist aber auch die Lasten für die, die keine Ausweichmöglichkeiten, [fair verteilen und sozial abfedern muss](https://www.tagesschau.de/multimedia/sendung/tagesthemen/video-1487086.html), z.B. über ein Klimageld, damit sowohl die Akzeptanz als die gewünschte Steuerungswirkung erhalten bleiben.

### Tools
Über die [KliX³-Toolbox](https://klix3.de/toolbox/willkommen/) kann man sich seinen individuellen Klimaplan zusammenstellen und auch die Daten seiner jährlichen CO2-Bilanz anonymisiert für eine Langzeitstudie spenden.

Mit [BaumBie](https://www.baumbie.org/baumbie) hat nun [Code for Bielefeld](https://www.linkedin.com/posts/codeforbi_bald-ist-es-so-weit-baumbie-startet-offiziell-ugcPost-7348765289301389314-rWE4) eine Baumgieß-App für ihre Stadt [offziell an den Start gebracht](https://www.nw.de/lokal/bielefeld/mitte/24144608_Smartphone-und-Giesskanne-Bielefelder-Initiative-startet-Kampagne-fuer-Baum-Paten.html).

In einem [TU-Forschungsprojekt](https://www.tu.berlin/news/pressemitteilung/mit-high-tech-gegen-die-wassserkrise) werden Lösungen entwickelt, um Leckagen in Trinkwassernetzen automatisiert zu erkennen.

### Zoll-Deal
In dem von der EU mit den USA geschlossenen Zoll-Deal hat sich die EU verpflichtet, bis zum Ende der aktuellen US-amerikanischen Legislatur (also 3 Jahre) Energieimporte im Wert von 750 Milliarden US-Dollar abzunehmen, vor allem Flüssigerdgas (LNG), Erdöl aber auch Uran - ein [klimapolitischer Totalschaden](https://www.klimareporter.de/europaeische-union/fossiler-zoll-deal-krone-der-absurditaet). [Denn Forschende haben errechnet](https://www.deutschlandfunk.de/energiedeal-mit-den-usa-was-bedeutet-das-fuer-europa-dr-claudia-kempert-diw-100.html), dass das Fracking-LNG dem Klima noch mehr schade, als Kohle. Ein Papier der US-Regierung deutet außerdem an, dass die USA den Zoll-Deal im Sinne des jahrelang von Aktivisten bekämpften TTIP-Abkommens [interpretieren wollen](https://bewegung.social/@lobbycontrol/114947421563945893).

## Energie
### Energiewende
* Bundes-Milliarden für den Umweltschutz – 2024: großer Teil geht für Atommüll drauf
  https://www.bundesumweltministerium.de/ministerium/struktur/finanzen
  https://bsky.app/profile/annikajoeres.bsky.social/post/3lvctzlbfwk22
* Subventionsabbau bei Kohle und Öl führt zu mehr Wohlstand
  https://www.handelsblatt.com/unternehmen/energie/fossile-brennstoffe-subventionsabbau-beikohle-und-oel-fuehrt-zu-mehr-wohlstand/100139110.html
* Energiebedingte CO2-Emissionen seit 2010 um 29,6 % gesunken
  https://www.destatis.de/DE/Presse/Pressemitteilungen/2025/07/PD25_274_32421.html?nn=2110
* Indien erreicht Ziele des Pariser Klimaabkommens fünf Jahre vor Ablauf der Frist
  https://www.fr.de/wirtschaft/energie-revolution-kommt-indien-vollzieht-turnaround-und-uebertrifft-europa-zr-93840306.html

### Preisanreize
* Studie: Ökostrom fällt rasant unter Preis von Öl und Gas
  https://www.stuttgarter-nachrichten.de/inhalt.studie-oekostrom-faellt-rasant-unter-preis-von-oel-und-gas.05ec40b7-1e9a-4347-a0c9-a1d526e9000e.html
* So viele Verbraucher wechseln Energieanbieter wie noch nie
  https://www.zeit.de/news/2025-07/13/so-viele-verbraucher-wechseln-energieanbieter-wie-noch-nie
* Helfen lokale Strompreise gegen Engpässe im Stromnetz?
  https://www.klimareporter.de/strom/helfen-lokale-strompreise-gegen-engpaesse-im-stromnetz
  https://www.agora-energiewende.de/daten-tools/agorameter/locational/map/power_price/

### Datenzugang
* Neue Zahlen zum Smart-Meter-Einbau sind da. Sie sind nicht gut.
  https://www.cleantech.ing/p/too-low-to-meter-95ee7e56047d7e44
* MaStR4all - Zugang zu Daten der Energiewirtschaft verbessern
  https://reiner-lemoine-institut.de/projekt/mastr4all-zugang-zu-daten-der-energiewirtschaft-verbessern/
  https://reiner-lemoine-institut.de/tool/open_mastr/
  https://github.com/OpenEnergyPlatform/open-MaStR

## Kultur
* Der Arbeitskreis Digitale Kunstgeschichte lädt ab August zu einer monatlichen Mittagspause ein
  https://digitale-kunstgeschichte.de
  https://fedihum.org/@digitale_kunstgeschichte
  https://mastodon.social/@kunstgeschichte/114935480540942124
* Die KZ-Gedenkstätte Dachau hat einen virtuellen 360-Grad-Rundgang durch das Gelände entwickelt. 
  https://www.sueddeutsche.de/muenchen/dachau/kz-gedenkstaette-dachau-360-grad-rundgang-panoramen-erinnerungsarbeit-internet-li.3287211

## Wirtschaft
* Kommunale Finanzen – Größtes Defizit in der Geschichte der Bundesrepublik
  https://www.bertelsmann-stiftung.de/de/themen/aktuelle-meldungen/2025/juli/kommunale-finanzen-groesstes-defizit-in-der-geschichte-der-bundesrepublik
* Studie: Deshalb ist Chinas Industriepolitik so erfolgreich
  https://www.surplusmagazin.de/studie-china-industriepolitik-technologie-vorsprung-subventionen/

## KI, Vibe und Gesang
### Rechtsprechung
* Neue EU-Regeln fordern Transparenz von KI-Modell-Anbietern
  https://www.tagesspiegel.de/gesellschaft/medien/kunstliche-intelligenz-neue-eu-regeln-fordern-transparenz-von-ki-modell-anbietern-14123351.html
* US-Urheberrecht: KI darf weiter Bücher lesen
  https://netzpolitik.org/2025/us-urheberrecht-ki-darf-weiter-buecher-lesen/
* Messen mit zweierlei Maß
  https://infosec.exchange/@koehntopp/114913099276601064

### Privatssphäre
* Google's training data includes all your personal data already
  https://mastodon.social/@ekis/114787048664654222
* Neue Folge der Reihe "KI verstehen" vom Deutschlandfunk zu KI und Privatsphäre - inkl. dem Projekt "Private Prompts" aus der Prototype Fund Runde 16
  https://www.ardaudiothek.de/episode/urn:ard:episode:9b24641ebe39df6f/
  via https://mastodon.social/@PrototypeFund/114828253194888127
* Anleitung wie man Gemini nach dem neusten Android Update den Zugriff auf die weiteren Apps zu verweigern
  https://tuta.com/de/blog/how-to-disable-gemini-on-android
* Model Context Protocol (MCP) in der Praxis
  https://github.com/codeforcologne/Lab/blob/master/mcp.pdf

### Missbrauch
* Anstieg Bot-Zugriffe auf Open Data Portal
  https://norden.social/@MisterOpenData/114828298944951481 
* Ein KI-Agent von ChatGPT hat offenbar eine Captcha-Checkbox im Internet ausgehebelt – und sogar sein Vorgehen kommentiert
  https://www.basicthinking.de/blog/2025/07/30/ki-chatgpt-agent-captcha/

### Maschine statt Mensch?
* Lieber KI als Beamte?
  https://www.republik.ch/2025/07/10/lieber-ki-als-beamte
  via https://systemli.social/@anneroth/114834617603660288
* "The Velvet Sundown": Wie eine KI-Band echten Musikern Konkurrenz macht
  https://www.rnd.de/wirtschaft/the-velvet-sundown-wie-ki-die-musikindustrie-herausfordert-QVV2GMJSANG4LKIL3IX5BEMNMY.html?utm_source=firefox-newtab-de-de
  via https://chaos.social/@mavo/114893160334453080
* Bericht: AWS baut Hunderte von Stellen ab
  https://www.heise.de/news/Bericht-AWS-baut-Hunderte-von-Stellen-ab-10491887.html
* Programmierer wenden ChatGPT den Rücken zu
  https://www.telepolis.de/features/Programmierer-wenden-ChatGPT-den-Ruecken-zu-10491352.html
* bribecoding
  https://hexa.club/@phooky/114875438934842074

## Dystopia
* Über 90 Prozent der Studierenden nutzen im Studium KI. Ex­per­t*in­nen und Beteiligte streiten, ob das der Lehre und dem Lernen hilft oder schadet.
  https://taz.de/Kuenstliche-Intelligenz-an-Universitaeten/!6098917/
* frictionlessness and "AI"
  https://tante.cc/2025/07/30/friction-and-not-being-touched/
* The Hater's Guide To The AI Bubble
  https://www.wheresyoured.at/the-haters-gui/
  https://chaos.social/@stk/114938228748938132
* For the first time, this report reveals emerging tensions in the narrative around AI
  https://report2025.seismic.org

### KI in der Verwaltung
* Neuer KI-Assistenz F13
  https://social.bund.de/@zendis/114907530245674869
  https://gitlab.opencode.de/f13
  https://f13-os.de
* LLMoin kann jetzt bundesweit von Ländern und Kommunen genutzt werden
  https://www.dataport-kommunal.de/aktuell/news/nachricht/llmoin-kann-jetzt-bundesweit-von-laendern-und-kommunen-genutzt-werden/

### AI Act
* EU AI Act: Das Ende der geheimen KI-Trainingsdaten
  https://www.schieb.de/eu-ai-act-das-ende-der-geheimen-ki-trainingsdaten
* 

### Neue Modelle und Tools
* China verstärkt KI-Offensive mit neuen Open-Source-Modellen
  https://www.telepolis.de/features/China-verstaerkt-KI-Offensive-mit-neuen-Open-Source-Modellen-10504672.html
* NuExtract 2.0 is a VLM specialized in extracting structured information (JSON output) from texts, PDFs, scans, etc.
  https://nuextract.ai
  https://www.linkedin.com/posts/patrick-fleith_time-to-extract-what-you-need-from-your-pdfs-activity-7353668961906925568-HD9Q
* Supervision
  https://www.linkedin.com/posts/skalskip92_computervision-objectdetection-opensource-activity-7355515936860209152-zCp4
  https://github.com/roboflow/supervision

### Anwendungsfälle
* KI entwirft Bauplan für einen Beton, der das Klima schützen soll
  https://t3n.de/news/ki-allegro-fm-entwirft-co2-bindenden-beton-1698873/
* Civic Data Lab Datenlabor: Wie gut funktioniert KI-gestützte Session-Dokumentation?
  https://civic-data.de/ki-session-dokumentation-im-test-smartphone-vs-profi-mikrofon-datenschutzkonformer-workflow/

### Ressourcenverbrauch
* Schockierende Zahlen: Bericht enthüllt Umweltauswirkungen von KI
  https://www.basicthinking.de/blog/2025/07/30/ki-umweltbericht/
* Per API oder Web-App: EcoLogits schätzt Ressourcenverbrauch von Sprachmodellen
  https://reset.org/api-web-app-ecologits-schatzt-ressourcenverbrauch-sprachmodellen/

## Transparenz
### Günstlingswirtschaft
* was alles bei der Aufarbeitung von Jens Spahns Milliardenverschwendung schief läuft
  https://www.deutschlandfunkkultur.de/bericht-zu-maskenaffaere-was-und-wann-darf-geschwaerzt-werden-100.html
  via https://chaos.social/@fragdenstaat/114817518539300303
  * Eine Kanzlei geht nun diesen Weg: "Strafanzeige gegen Herrn Bundesminister Spahn wegen Untreue"
    https://ax-vergaberecht.de/strafanzeige-gegen-herrn-bundesminister-spahn-wegen-untreue/
    via https://mastodon.social/@KathrinBB/114817794848757273
* Netzwerk mit Nebenwirkungen: Jens Spahn und der Milliardär
  https://correctiv.org/aktuelles/gesundheit/2025/07/22/netzwerk-mit-nebenwirkungen-jens-spahn-und-der-milliardaer/
* Medien und Medizinsoftware: Der Profiteur von Spahns Politik
  https://correctiv.org/lobbyismus-2/2025/07/25/medien-und-medizinsoftware-der-profiteur-von-spahns-politik-nius-gotthardt/
* Diese Milliarden könnten wir uns Spahn
  https://fragdenstaat.de/artikel/exklusiv/2025/07/die-milliarden-konnten-wir-uns-spahn/  
  * Machtarroganz
    https://bsky.app/profile/mkueper.de/post/3ltbyla5ad22k  
* Amt durch Stimmenkauf?: Noch mehr Anschuldigungen gegen Caroline Bosbach
  https://www.t-online.de/nachrichten/deutschland/innenpolitik/id_100844060/caroline-bosbach-jetzt-wird-ihr-stimmenkauf-vorgeworfen.html
* #Clankriminalität
  https://www.clankriminalitaet.de
  https://bewegung.social/users/a_watch/statuses/114952259663550747
* erstmals wird damit strategische Korruption in Deutschland strafrechtlich geahndet
  https://mastodon.social/@transparency_de/114942170946126735
  https://bewegung.social/@lobbycontrol/114942909402505424
  https://www.zdfheute.de/politik/deutschland/aserbaidschan-affaere-lintner-bestechung-urteil-100.html
* Cum-Cum-Betrug: Der Steuerraub geht weiter
  https://www.dw.com/de/cum-cum-betrug-und-cum-cum-geschaefte-der-steuerraub-geht-weiter-steuertricks-banken-v2/a-73370908

### Lobbyismus
* Exklusiv-Zugang zu SPD-Verhandlern für Lobbys
  https://www.zdfheute.de/politik/deutschland/spd-koalitionsverhandlungen-lobbyverbaende-klima-energie-100.html
* Das sind die Abgeordneten, die vom Bundestag in den Lobbyismus wechselten
  https://www.abgeordnetenwatch.de/recherchen/lobbyismus/das-sind-die-abgeordneten-die-vom-bundestag-in-den-lobbyismus-wechselten
* Bald greifen die neuen EU-Regeln für politische Online-Werbung
  https://netzpolitik.org/2025/targeting-und-transparenz-bald-greifen-die-neuen-eu-regeln-fuer-politische-online-werbung/
  https://cdn.netzpolitik.org/wp-upload/2025/07/2025-07-25_BMDS_RefE_Politische-Werbung.pdf
* Spürnasen-Erfolg: Mit einer Beschwerde beim EU-Transparenzregister haben wir zahlreiche falsche Angaben von Unternehmen und Verbänden aufgedeckt
  https://www.corporateeurope.org/en/complaint-47-million-changes-lobby-register
  via https://bsky.app/profile/lobbycontrol.bsky.social/post/3lu6dgdiyec2d
* Lobbyschlacht um Frequenzbereiche
  https://netzpolitik.org/2025/lobbyschlacht-um-frequenzbereiche-mehr-wlan-oder-mehr-mobilfunk/

### Keine Einblicke
* Mehr "Mut zu Transparenz" im Digitalausschuss - Forderung nach Öffentliche Sitzungen im Digitalausschuss
  https://d-64.org/mut-zu-transparenz/
  https://www.ccc.de/system/uploads/369/original/OffenerBrief_TrasparenzADi.pdf
  https://netzpolitik.org/2025/offener-brief-fehlende-transparenz-im-digitalausschuss/
  via https://mastodon.social/@topio/114827368995018282
* Die IT des Bundes ist "nicht bedarfsgerecht geschützt" und "nicht auf die aktuellen Bedrohungen vorbereitet"
  https://chaos.social/@andre_meister/114942518955593417
  https://netzpolitik.org/wp-upload/2025/07/2025-07-02_BRH_Resilienz-der-staatlichen-Kernfunktionen.pdf
* Versorgungsanstalt des Bundes und der Länder (VBL) ist die betriebliche Altersvorsorge für Angestellte des öffentlichen Diensts - Wo genau das Geld angelegt ist, ist unklar.
  https://fragdenstaat.de/artikel/klagen/2023/01/vbl-klage/

## Politik
* Positionspapier der Geoinformationswirtschaft zur 21. Legislaturperiode
  https://ddgi.de/2025/07/23/positionspapier-der-geoinformationswirtschaft-zur-21-legislaturperiode/

### Bürokratieabbau
* Bürokratieabbau kontra Naturschutz in Brandenburg
  https://www.deutschlandfunk.de/buerokratieabbau-kontra-naturschutz-in-brandenburg-100.html
* "Es wäre die Aufgabe von Journalist:innen, die trübe Hülle des Begriffs Bürokratieabbau abzuschälen und freizulegen, was darunter liegt."
  https://uebermedien.de/105496/buerokratieabbau/
  via https://mastodon.social/@annskaja/114579046638993308

### Gefahr von Rechts
* Naives Verständnis eines neutralen Journalismus
  https://netzpolitik.org/2025/sommerinterview-protest-wer-hilft-hier-der-afd/
  via https://social.vivaldi.net/@StefanMuenz/114896039600051881
* rechter Gewalt unterschätzt
  https://www.zeit.de/gesellschaft/2025-07/todesopfer-rechter-gewalt-faelle-statistik-personen

## Kommunalwahlen NRW
* bonn-o-mat.de
  https://bonn-o-mat.de

## USA
* datarescueproject.org 
  https://mastodon.social/@storytracer/114817353305316229
* For MAGA, Ignorance is Strength
  https://paulkrugman.substack.com/p/for-maga-ignorance-is-strength
* US-Regierung gibt offenbar Gesundheitsdaten an ICE-Behörde weiter
  https://www.zeit.de/politik/ausland/2025-07/us-regierung-weitergabe-gesundheitsdaten-ice-einwanderungsbehoerde
* Radio geeks reveal how to access crucial hurricane data after US Department of Defense cut it off
  https://www.theregister.com/2025/07/21/ssmis_satellite_decoder
  via https://fediscience.org/@petersuber/114898414211520775
* Vorauseilendes Schweigen
  https://www.mdr.de/altpapier/das-altpapier-4268.html
* Public Health Map uses freely available, openly accessible, federal data to illustrate the local health capacity consequences of rapidly changing policies under this Administration.
  https://theimpactproject.org/public-health-map/
  https://sciences.social/@csmarcum/114949468374970178
* Online Safety Act: Wikipedia could ‘introduce cap’ on British visitors
  https://www.msn.com/en-gb/money/technology/online-safety-act-wikipedia-could-introduce-cap-on-british-visitors-amid-osa-high-court-challenge/ar-AA1Jrz5d

## Überwachung
* Bargeld-Tracking
  https://netzpolitik.org/2025/bargeld-tracking-du-hast-ueberwachungsinstrumente-im-portemonnaie/
* Gesichtserkennung und KI: Innenminister Dobrindt plant neues Sicherheitspaket
  https://netzpolitik.org/2025/gesichtserkennung-und-ki-innenminister-dobrindt-plant-neues-sicherheitspaket/
  https://background.tagesspiegel.de/digitalisierung-und-ki/briefing/sicherheitspaket-2-0-palantir-statt-grundrechtsschutz
  https://d-64.social/@erik/114907221422900823
* Das Überwachungsimperium
  https://www.blaetter.de/ausgabe/2025/august/das-ueberwachungsimperium
* Die Gesellschaft für Freiheitsrechte hat heute mit Unterstützung des Chaos Computer Clubs Verfassungsbeschwerde gegen die automatisierte polizeiliche Datenanalyse in Bayern erhoben
  https://www.ccc.de/de/updates/2025/palantir-bayern
* Was die Software von Palantir eigentlich macht und warum die GFF das Mittel einer Verfassungsbeschwerde gewählt hat, hat uns Franziska Görlitz von der GFF im Gespräch erzählt.
  https://radiocorax.de/verfassungsbeschwerde-gegen-einsatz-von-palantir-bei-der-bayrischen-polizei/
* Die gefährliche und umstrittene Welt von Palantir
  https://taz.de/ARD-Doku/!6099626/

## Recap
* FSiC2025
  https://wiki.f-si.org/index.php?title=FSiC2025
  via https://chaos.social/users/mavo/statuses/114782895710810071
* Jahrestreffen der kommunalen Mitglieder von Transparency Deutschland in Birkenwerder
  https://www.transparency.de/aktuelles/detail/article/jahrestreffen-kommunale-mitglieder-2025
* Relive The Tech People Want Summit: 2025 Documentation
  https://blog.okfn.org/2025/07/17/relive-the-tech-people-want-summit-2025-documentation/
* CODING.WATERKANT
  https://coding.waterkant.sh
  https://www.linkedin.com/posts/jonas-dagefoerde_ki-digitalisierung-publicai-ugcPost-7354522232443809793-sNXv

## Und sonst so
* Permacomputing – The Screenless Office
  https://blog.campact.de/2025/07/permacomputing-ein-gespraech-mit-brendan-howell/
  via https://mastodon.online/users/frebelt/statuses/114868866982831060
* Pointer Pointer
  https://pointerpointer.com
  via https://mastodon.social/users/timpritlove/statuses/114915072784541683  

## Fristen
* EnviroInfo 2025: Open Data, Open Science, and Open Society for a sustainable future
  * https://enviroinfo2025.gi.de/call-for-papers
* PartWiss 2025, Abstract-Einreichungen bis 07.08.2025
  * https://www.partizipation-wissenschaft.de/konferenz_2025_leipzig/
* Datenspuren, bis 15.08.2025
  * https://events.ccc.de/2025/04/05/ds25-ankuendigung/
* MRMCD, bis 17.08.2025
  * https://talks.mrmcd.net/2025/cfp
* EnvioInfo Potsdam 2025, Deadline Paper Submission (camera ready): 04.08.2025, Deadline Poster and Talk only Submission: 18.08.2025
  * https://enviroinfo2025.gi.de/important-dates
* eGovernment Wettbewerb - Publikumsvoting 2025, bis 17.08.2025
  https://egovernmentwettbewerb.de/publikumsvoting/
* culture.explore(data) - An Open Cultural Data Hackathon, Staatsbibliothek zu Berlin, 07.10.2025 - 08-10.2025, Anmeldung bis 15.09.2025
  * https://lab.sbb.berlin/culture-explore-data/
* PIAZZA 2025, Anmeldung von Workshops bis 15.09.2025
  * https://piazza-konferenz.de/jetzt-anmelden-25/

## Veranstaltungen ([Kalender/Karte](https://events.codeforleipzig.de))
* Dienstag, 05.08.2025, 20:00-22:00, c-base, Rungestraße 20, 10179 Berlin und auch online: **Netzpolitisches Grillen** <a title='Kalendereintrag Netzpolitisches Grillen' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vTmV0enBvbGl0aXNjaGVzIEdyaWxsZW4vL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNTA4MDlUMTkzNTM0Wg0KRFRTVEFSVDoyMDI1MDgwNVQyMDAwMDANCkRURU5EOjIwMjUwODA1VDIyMDAwMA0KU1VNTUFSWTpOZXR6cG9saXRpc2NoZXMgR3JpbGxlbg0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly9kaWdpdGFsZWdlc2VsbHNjaGFmdC5kZS8yMDI1LzA3L25ldHpwb2xpdGlzY2hlcy1ncmlsbGVuLTIvDQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOmMtYmFzZVwsIFJ1bmdlc3RyYcOfZSAyMFwsIDEwMTc5IEJlcmxpbiB1bmQgYXVjaCBvbmxpbmUNCkdFTzo1Mi41MTI5NzM1OzEzLjQyMDEzMTMNCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://digitalegesellschaft.de/2025/07/netzpolitisches-grillen-2/
* Donnerstag, 07.08.2025, 18:00-21:00, WikiBär Wikipedia, Köpenicker Straße 45, 10179 Berlin: **Jugend editiert** <a title='Kalendereintrag Jugend editiert' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vSnVnZW5kIGVkaXRpZXJ0Ly9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjUwODA5VDE5MzUzNFoNCkRUU1RBUlQ6MjAyNTA4MDdUMTgwMDAwDQpEVEVORDoyMDI1MDgwN1QyMTAwMDANClNVTU1BUlk6SnVnZW5kIGVkaXRpZXJ0DQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL3d3dy53aWtpbWVkaWEuZGUvdmVyYW5zdGFsdHVuZ2VuL2p1Z2VuZC1lZGl0aWVydC8NCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046V2lraULDpHIgV2lraXBlZGlhXCwgS8O2cGVuaWNrZXIgU3RyYcOfZSA0NVwsIDEwMTc5IEJlcmxpbg0KR0VPOjUyLjUwMjY3NzA2MjkzNjA3OzEzLjQzOTI1MDM0ODcyMTU0NA0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://www.wikimedia.de/veranstaltungen/jugend-editiert/
* Donnerstag, 07.08.2025, 19:31-19:31, online: **Bits und Bäume Community Treffen** <a title='Kalendereintrag Bits und Bäume Community Treffen' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vQml0cyB1bmQgQsOkdW1lIENvbW11bml0eSBUcmVmZmVuLy9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjUwODA5VDE5MzUzNFoNCkRUU1RBUlQ6MjAyNTA4MDdUMTkzMTAwDQpEVEVORDoyMDI1MDgwN1QxOTMxMDANClNVTU1BUlk6Qml0cyB1bmQgQsOkdW1lIENvbW11bml0eSBUcmVmZmVuDQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL2JpdHMtdW5kLWJhZXVtZS5vcmcvdGVybWluZS8NCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046b25saW5lDQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://bits-und-baeume.org/termine/
* Samstag, 09.08.2025, 14:00-18:00, c-base, Rungestraße 20, 10179 Berlin: **Linux install Party - endof10** <a title='Kalendereintrag Linux install Party - endof10' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vTGludXggaW5zdGFsbCBQYXJ0eSAtIGVuZG9mMTAvL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNTA4MDlUMTkzNTM0Wg0KRFRTVEFSVDoyMDI1MDgwOVQxNDAwMDANCkRURU5EOjIwMjUwODA5VDE4MDAwMA0KU1VNTUFSWTpMaW51eCBpbnN0YWxsIFBhcnR5IC0gZW5kb2YxMA0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly9jLWJhc2Uub3JnL2NhbGVuZGFyLyN2aWV3PW1vbnRoJmRhdGU9MjAyNS0wOC0wMSZldmVudD01Y2ZmMDU4Yy1kMjM2LTQwYjMtODExNi1iZGMzNzRmY2IzNGENCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046Yy1iYXNlXCwgUnVuZ2VzdHJhw59lIDIwXCwgMTAxNzkgQmVybGluDQpHRU86NTIuNTEyOTczNTsxMy40MjAxMzEzDQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://c-base.org/calendar/#view=month&date=2025-08-01&event=5cff058c-d236-40b3-8116-bdc374fcb34a
* Mittwoch, 13.08.2025, 18:00-19:00, online: **Datawrapper maps: Deep dive** <a title='Kalendereintrag Datawrapper maps: Deep dive' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vRGF0YXdyYXBwZXIgbWFwczogRGVlcCBkaXZlLy9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjUwODA5VDE5MzUzNFoNCkRUU1RBUlQ6MjAyNTA4MTNUMTgwMDAwDQpEVEVORDoyMDI1MDgxM1QxOTAwMDANClNVTU1BUlk6RGF0YXdyYXBwZXIgbWFwczogRGVlcCBkaXZlDQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL3N0cmVhbXlhcmQuY29tL3dhdGNoL3k1NXVnZGhCNnVxRQ0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpvbmxpbmUNCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://streamyard.com/watch/y55ugdhB6uqE
* Freitag, 15.08.2025, 16:00, bis Sonntag, 17.08.2025, 16:00, Bitwäscherei, Neue Hard 12, 8005 Zürich (Schweiz): **Jugend hackt Zürich 2025** <a title='Kalendereintrag Jugend hackt Zürich 2025' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vSnVnZW5kIGhhY2t0IFrDvHJpY2ggMjAyNS8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI1MDgwOVQxOTM1MzRaDQpEVFNUQVJUOjIwMjUwODE1VDE2MDAwMA0KRFRFTkQ6MjAyNTA4MTdUMTYwMDAwDQpTVU1NQVJZOkp1Z2VuZCBoYWNrdCBaw7xyaWNoIDIwMjUNCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vYW5tZWxkdW5nLmp1Z2VuZGhhY2t0Lm9yZy9zY2h3ZWl6L2poemgyMDI1Lw0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpCaXR3w6RzY2hlcmVpXCwgTmV1ZSBIYXJkIDEyXCwgODAwNSBaw7xyaWNoIChTY2h3ZWl6KQ0KR0VPOjQ3LjM4NzAzMTY7OC41MjA0MDI0DQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://anmeldung.jugendhackt.org/schweiz/jhzh2025/
* Samstag, 16.08.2025, 09:30, bis Sonntag, 17.08.2025, 17:00, Hochschule Bonn-Rhein-Sieg, Grantham-Allee 20, 53757 Sankt Augustin: **FrOSCon** <a title='Kalendereintrag FrOSCon' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vRnJPU0Nvbi8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI1MDgwOVQxOTM1MzRaDQpEVFNUQVJUOjIwMjUwODE2VDA5MzAwMA0KRFRFTkQ6MjAyNTA4MTdUMTcwMDAwDQpTVU1NQVJZOkZyT1NDb24NCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vZnJvc2Nvbi5vcmcNCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046SG9jaHNjaHVsZSBCb25uLVJoZWluLVNpZWdcLCBHcmFudGhhbS1BbGxlZSAyMFwsIDUzNzU3IFNhbmt0IEF1Z3VzdGluDQpHRU86NTAuNzc5NTYwMjAwMDAwMDA2OzcuMTgyMTcwMTI4NzMwOTI1DQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://froscon.org
* Donnerstag, 21.08.2025, 12:00-12:30, online: **CDL Espresso Talk | Quereinstieg in Data Science: Von der Soziologie zu Daten für die Zivilgesellschaft** <a title='Kalendereintrag CDL Espresso Talk | Quereinstieg in Data Science: Von der Soziologie zu Daten für die Zivilgesellschaft' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vQ0RMIEVzcHJlc3NvIFRhbGsgfCBRdWVyZWluc3RpZWcgaW4gRGF0YSBTY2llbmNlOiBWb24gZGVyIFNvemlvbG9naWUgenUgRGF0ZW4gZsO8ciBkaWUgWml2aWxnZXNlbGxzY2hhZnQvL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNTA4MDlUMTkzNTM0Wg0KRFRTVEFSVDoyMDI1MDgyMVQxMjAwMDANCkRURU5EOjIwMjUwODIxVDEyMzAwMA0KU1VNTUFSWTpDREwgRXNwcmVzc28gVGFsayB8IFF1ZXJlaW5zdGllZyBpbiBEYXRhIFNjaWVuY2U6IFZvbiBkZXIgU296aW9sb2dpZSB6dSBEYXRlbiBmw7xyIGRpZSBaaXZpbGdlc2VsbHNjaGFmdA0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly9jb3JyZWxhaWQub3JnL3ZlcmFuc3RhbHR1bmdlbi9lc3ByZXNzb19xdWVyZWluc3RpZWdfZGF0YXNjaWVuY2U/dmlld1R5cGU9bGlzdA0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpvbmxpbmUNCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://correlaid.org/veranstaltungen/espresso_quereinstieg_datascience?viewType=list
* Donnerstag, 21.08.2025, 14:30-16:30, online: **Teil 4 der Workshopreihe Sovereign. Sustainable. Digital.: Wie grün ist unsere Cloud? Nachhaltige Infrastruktur, Rechenzentren** <a title='Kalendereintrag Teil 4 der Workshopreihe Sovereign. Sustainable. Digital.: Wie grün ist unsere Cloud? Nachhaltige Infrastruktur, Rechenzentren' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vVGVpbCA0IGRlciBXb3Jrc2hvcHJlaWhlIFNvdmVyZWlnbi4gU3VzdGFpbmFibGUuIERpZ2l0YWwuOiBXaWUgZ3LDvG4gaXN0IHVuc2VyZSBDbG91ZD8gTmFjaGhhbHRpZ2UgSW5mcmFzdHJ1a3R1clwsIFJlY2hlbnplbnRyZW4vL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNTA4MDlUMTkzNTM0Wg0KRFRTVEFSVDoyMDI1MDgyMVQxNDMwMDANCkRURU5EOjIwMjUwODIxVDE2MzAwMA0KU1VNTUFSWTpUZWlsIDQgZGVyIFdvcmtzaG9wcmVpaGUgU292ZXJlaWduLiBTdXN0YWluYWJsZS4gRGlnaXRhbC46IFdpZSBncsO8biBpc3QgdW5zZXJlIENsb3VkPyBOYWNoaGFsdGlnZSBJbmZyYXN0cnVrdHVyXCwgUmVjaGVuemVudHJlbg0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly93d3cuYnVuZGVzdW13ZWx0bWluaXN0ZXJpdW0uZGUvdmVyYW5zdGFsdHVuZy9ibXVrbi1jb21tdW5pdHktbmFjaGhhbHRpZ2UtZGlnaXRhbGlzaWVydW5nLXRlaWwtNC1kZXItd29ya3Nob3ByZWloZS1zb3ZlcmVpZ24tc3VzdGFpbmFibGUtZGlnaXRhbA0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpvbmxpbmUNCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://www.bundesumweltministerium.de/veranstaltung/bmukn-community-nachhaltige-digitalisierung-teil-4-der-workshopreihe-sovereign-sustainable-digital
* Donnerstag, 21.08.2025, 15:00, bis Montag, 25.08.2025, 12:00, Jugendzeltplatz Bonn, Venner Str. 54, 53177 Bonn: **Hack'n'Sun** <a title='Kalendereintrag Hack'n'Sun' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vSGFjayduJ1N1bi8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI1MDgwOVQxOTM1MzRaDQpEVFNUQVJUOjIwMjUwODIxVDE1MDAwMA0KRFRFTkQ6MjAyNTA4MjVUMTIwMDAwDQpTVU1NQVJZOkhhY2snbidTdW4NCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vdGVja2lkcy5vcmcvYmxvZy8yMDI1LzAzL2hhY2tuc3VuLw0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpKdWdlbmR6ZWx0cGxhdHogQm9ublwsIFZlbm5lciBTdHIuIDU0XCwgNTMxNzcgQm9ubg0KR0VPOjUwLjY4MTA4NDs3LjEzMzM5OQ0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://teckids.org/blog/2025/03/hacknsun/
* Samstag, 23.08.2025, 10:00, bis Sonntag, 24.08.2025, 17:00, Hannover Congress Centrum (HCC), Theodor-Heuss-Platz 1-3, 30175 Hannover: **Maker Faire Hannover** <a title='Kalendereintrag Maker Faire Hannover' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vTWFrZXIgRmFpcmUgSGFubm92ZXIvL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNTA4MDlUMTkzNTM0Wg0KRFRTVEFSVDoyMDI1MDgyM1QxMDAwMDANCkRURU5EOjIwMjUwODI0VDE3MDAwMA0KU1VNTUFSWTpNYWtlciBGYWlyZSBIYW5ub3Zlcg0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly9tYWtlci1mYWlyZS5kZS9oYW5ub3Zlci8NCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046SGFubm92ZXIgQ29uZ3Jlc3MgQ2VudHJ1bSAoSENDKVwsIFRoZW9kb3ItSGV1c3MtUGxhdHogMS0zXCwgMzAxNzUgSGFubm92ZXINCkdFTzo1Mi4zNzczOTYyNjI5MjE5Njs5Ljc2OTIxNjI3NTY2NzA3OQ0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://maker-faire.de/hannover/
* Montag, 25.08.2025, 18:00, bis Sonntag, 31.08.2025, 22:00, LABOR e.V. Hackspace Bochum, Alleestraße 50, 44793 Bochum: **20 Jahre Labor** <a title='Kalendereintrag 20 Jahre Labor' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vMjAgSmFocmUgTGFib3IvL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNTA4MDlUMTkzNTM0Wg0KRFRTVEFSVDoyMDI1MDgyNVQxODAwMDANCkRURU5EOjIwMjUwODMxVDIyMDAwMA0KU1VNTUFSWToyMCBKYWhyZSBMYWJvcg0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly93aWtpLmRhcy1sYWJvci5vcmcvdy8yMF9qYWhyZV9sYWJvcg0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpMQUJPUiBlLlYuIEhhY2tzcGFjZSBCb2NodW1cLCBBbGxlZXN0cmHDn2UgNTBcLCA0NDc5MyBCb2NodW0NCkdFTzo1MS40ODA5NDI2OzcuMjA4NjAyOA0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://wiki.das-labor.org/w/20_jahre_labor
* Dienstag, 26.08.2025, 10:00-11:00, online: **SCS-Standards in der Praxis: Von der Umsetzung zur Zertifizierung** <a title='Kalendereintrag SCS-Standards in der Praxis: Von der Umsetzung zur Zertifizierung' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vU0NTLVN0YW5kYXJkcyBpbiBkZXIgUHJheGlzOiBWb24gZGVyIFVtc2V0enVuZyB6dXIgWmVydGlmaXppZXJ1bmcvL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNTA4MDlUMTkzNTM0Wg0KRFRTVEFSVDoyMDI1MDgyNlQxMDAwMDANCkRURU5EOjIwMjUwODI2VDExMDAwMA0KU1VNTUFSWTpTQ1MtU3RhbmRhcmRzIGluIGRlciBQcmF4aXM6IFZvbiBkZXIgVW1zZXR6dW5nIHp1ciBaZXJ0aWZpemllcnVuZw0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly9ldmVudHMuc292ZXJlaWduY2xvdWRzdGFjay5vcmcvd2ViaW5hci8NCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046b25saW5lDQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://events.sovereigncloudstack.org/webinar/
* Dienstag, 26.08.2025, 11:30-12:30, online: **CorrelCompact | Open Data für Non-Profits: Schätze finden und nutzen** <a title='Kalendereintrag CorrelCompact | Open Data für Non-Profits: Schätze finden und nutzen' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vQ29ycmVsQ29tcGFjdCB8IE9wZW4gRGF0YSBmw7xyIE5vbi1Qcm9maXRzOiBTY2jDpHR6ZSBmaW5kZW4gdW5kIG51dHplbi8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI1MDgwOVQxOTM1MzRaDQpEVFNUQVJUOjIwMjUwODI2VDExMzAwMA0KRFRFTkQ6MjAyNTA4MjZUMTIzMDAwDQpTVU1NQVJZOkNvcnJlbENvbXBhY3QgfCBPcGVuIERhdGEgZsO8ciBOb24tUHJvZml0czogU2Now6R0emUgZmluZGVuIHVuZCBudXR6ZW4NCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vY29ycmVsYWlkLm9yZy92ZXJhbnN0YWx0dW5nZW4vY2MyNS1vcGVuZGF0YT92aWV3VHlwZT1saXN0DQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOm9ubGluZQ0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://correlaid.org/veranstaltungen/cc25-opendata?viewType=list
* Dienstag, 26.08.2025, 18:00-19:00, online: **Getting started with Datawrapper** <a title='Kalendereintrag Getting started with Datawrapper' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vR2V0dGluZyBzdGFydGVkIHdpdGggRGF0YXdyYXBwZXIvL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNTA4MDlUMTkzNTM0Wg0KRFRTVEFSVDoyMDI1MDgyNlQxODAwMDANCkRURU5EOjIwMjUwODI2VDE5MDAwMA0KU1VNTUFSWTpHZXR0aW5nIHN0YXJ0ZWQgd2l0aCBEYXRhd3JhcHBlcg0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly9zdHJlYW15YXJkLmNvbS93YXRjaC9XNWR6cHJLaVVYR1QNCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046b25saW5lDQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://streamyard.com/watch/W5dzprKiUXGT
* Dienstag, 26.08.2025, 19:30-21:00, online: **OSM Radinfra-Mapathon #3** <a title='Kalendereintrag OSM Radinfra-Mapathon #3' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vT1NNIFJhZGluZnJhLU1hcGF0aG9uICMzLy9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjUwODA5VDE5MzUzNFoNCkRUU1RBUlQ6MjAyNTA4MjZUMTkzMDAwDQpEVEVORDoyMDI1MDgyNlQyMTAwMDANClNVTU1BUlk6T1NNIFJhZGluZnJhLU1hcGF0aG9uICMzDQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL29zbWNhbC5vcmcvZXZlbnQvMzg0Mi8NCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046b25saW5lDQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://osmcal.org/event/3842/
* Mittwoch, 27.08.2025, 09:00, bis Sonntag, 31.08.2025, 18:00, Zeltplatz Gunzenberg an der Talsperre Pöhl, Hauptstraße 38, 08543 Pöhl: **thereisno.camp** <a title='Kalendereintrag thereisno.camp' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vdGhlcmVpc25vLmNhbXAvL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNTA4MDlUMTkzNTM0Wg0KRFRTVEFSVDoyMDI1MDgyN1QwOTAwMDANCkRURU5EOjIwMjUwODMxVDE4MDAwMA0KU1VNTUFSWTp0aGVyZWlzbm8uY2FtcA0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly90aGVyZWlzbm8uY2FtcA0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpaZWx0cGxhdHogR3VuemVuYmVyZyBhbiBkZXIgVGFsc3BlcnJlIFDDtmhsXCwgSGF1cHRzdHJhw59lIDM4XCwgMDg1NDMgUMO2aGwNCkdFTzo1MC41Mzg3OTI5NTsxMi4xODUyMzU4OTU4NDcwMjUNCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://thereisno.camp
* Mittwoch, 27.08.2025, 10:00, bis Donnerstag, 28.08.2025, 15:30, Hochschule Merseburg (Hauptgebäude), Eberhard-Leibnitz-Straße 2, 06217 Merseburg: **Merseburger Digitaltage 2025** <a title='Kalendereintrag Merseburger Digitaltage 2025' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vTWVyc2VidXJnZXIgRGlnaXRhbHRhZ2UgMjAyNS8vaUNhbDRqIDEuMC8vRU4NCkJFR0lOOlZFVkVOVA0KRFRTVEFNUDoyMDI1MDgwOVQxOTM1MzRaDQpEVFNUQVJUOjIwMjUwODI3VDEwMDAwMA0KRFRFTkQ6MjAyNTA4MjhUMTUzMDAwDQpTVU1NQVJZOk1lcnNlYnVyZ2VyIERpZ2l0YWx0YWdlIDIwMjUNCkxJTks7VkFMVUU9VUlEOmh0dHBzOi8vd3d3Lm1lcnNlYnVyZ2VyLWRpZ2l0YWx0YWdlLmRlL2RlL3N0YXJ0c2VpdGUtbWR0Lmh0bWwNCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046SG9jaHNjaHVsZSBNZXJzZWJ1cmcgKEhhdXB0Z2Viw6R1ZGUpXCwgRWJlcmhhcmQtTGVpYm5pdHotU3RyYcOfZSAyXCwgMDYyMTcgTWVyc2VidXJnDQpHRU86NTEuMzQzNjU0NzsxMS45NzQ0ODM3MDg3MDQ5ODQNCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://www.merseburger-digitaltage.de/de/startseite-mdt.html
* Donnerstag, 28.08.2025, 11:00-12:00, online: **openCode Connect August 2025: Sovereign Cloud Stack – Die Basis für Digitale Souveränität in der Cloud** <a title='Kalendereintrag openCode Connect August 2025: Sovereign Cloud Stack – Die Basis für Digitale Souveränität in der Cloud' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vb3BlbkNvZGUgQ29ubmVjdCBBdWd1c3QgMjAyNTogU292ZXJlaWduIENsb3VkIFN0YWNrIOKAkyBEaWUgQmFzaXMgZsO8ciBEaWdpdGFsZSBTb3V2ZXLDpG5pdMOkdCBpbiBkZXIgQ2xvdWQvL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNTA4MDlUMTkzNTM0Wg0KRFRTVEFSVDoyMDI1MDgyOFQxMTAwMDANCkRURU5EOjIwMjUwODI4VDEyMDAwMA0KU1VNTUFSWTpvcGVuQ29kZSBDb25uZWN0IEF1Z3VzdCAyMDI1OiBTb3ZlcmVpZ24gQ2xvdWQgU3RhY2sg4oCTIERpZSBCYXNpcyBmw7xyIERpZ2l0YWxlIFNvdXZlcsOkbml0w6R0IGluIGRlciBDbG91ZA0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly9vcGVuY29kZS5kZS9kZS9ha3R1ZWxsZXMvZXZlbnRzL29wZW5jb2RlLWNvbm5lY3QtYXVndXN0LTIwMjUtNDc4NQ0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpvbmxpbmUNCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://opencode.de/de/aktuelles/events/opencode-connect-august-2025-4785
* Donnerstag, 28.08.2025, 12:00, bis Sonntag, 31.08.2025, 12:00, Jugendraum, K 61, 56459 Todtenberg, Rotenhain, Westerburg: **WAMP - Das Camp im Westerwald** <a title='Kalendereintrag WAMP - Das Camp im Westerwald' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vV0FNUCAtIERhcyBDYW1wIGltIFdlc3RlcndhbGQvL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNTA4MDlUMTkzNTM0Wg0KRFRTVEFSVDoyMDI1MDgyOFQxMjAwMDANCkRURU5EOjIwMjUwODMxVDEyMDAwMA0KU1VNTUFSWTpXQU1QIC0gRGFzIENhbXAgaW0gV2VzdGVyd2FsZA0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly90aGVyZWlzbm8uY2FtcA0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpKdWdlbmRyYXVtXCwgSyA2MVwsIDU2NDU5IFRvZHRlbmJlcmdcLCBSb3RlbmhhaW5cLCBXZXN0ZXJidXJnDQpHRU86NTAuNjAzNzg7Ny44ODEyNg0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://thereisno.camp
* Freitag, 05.09.2025, 10:00, bis Samstag, 06.09.2025, 15:00, Erich-Brost-Institut für Internationalen Journalismus auf dem Campus Nord der TU Dortmund, Otto-Hahn-Straße 2, 44227 Dortmund: **SciCAR 2025** <a title='Kalendereintrag SciCAR 2025' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vU2NpQ0FSIDIwMjUvL2lDYWw0aiAxLjAvL0VODQpCRUdJTjpWRVZFTlQNCkRUU1RBTVA6MjAyNTA4MDlUMTkzNTM0Wg0KRFRTVEFSVDoyMDI1MDkwNVQxMDAwMDANCkRURU5EOjIwMjUwOTA2VDE1MDAwMA0KU1VNTUFSWTpTY2lDQVIgMjAyNQ0KTElOSztWQUxVRT1VSUQ6aHR0cHM6Ly9uZXR6d2Vya3JlY2hlcmNoZS5vcmcvd2lyLXZlcm5ldHplbi9zY2ljYXIvDQpERVNDUklQVElPTjoNCkxPQ0FUSU9OOkVyaWNoLUJyb3N0LUluc3RpdHV0IGbDvHIgSW50ZXJuYXRpb25hbGVuIEpvdXJuYWxpc211cyBhdWYgZGVtIENhbXB1cyBOb3JkIGRlciBUVSBEb3J0bXVuZFwsIE90dG8tSGFobi1TdHJhw59lIDJcLCA0NDIyNyBEb3J0bXVuZA0KR0VPOjUxLjQ5MTE0OTE5OTk5OTk5NTs3LjQxNTU4MTE5ODUzNDMwMQ0KRU5EOlZFVkVOVA0KRU5EOlZDQUxFTkRBUg0K">&#x1F4C5;</a>
  * https://netzwerkrecherche.org/wir-vernetzen/scicar/
* Freitag, 05.09.2025, 12:00, bis Sonntag, 07.09.2025, 12:00, La Grange e.V., Gingster Chaussee 6, 18528 Bergen auf Rügen: **InselChaos 2025** <a title='Kalendereintrag InselChaos 2025' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vSW5zZWxDaGFvcyAyMDI1Ly9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjUwODA5VDE5MzUzNFoNCkRUU1RBUlQ6MjAyNTA5MDVUMTIwMDAwDQpEVEVORDoyMDI1MDkwN1QxMjAwMDANClNVTU1BUlk6SW5zZWxDaGFvcyAyMDI1DQpMSU5LO1ZBTFVFPVVJRDpodHRwczovL2luc2VsY2hhb3MuZGUNCkRFU0NSSVBUSU9OOg0KTE9DQVRJT046TGEgR3JhbmdlIGUuVi5cLCBHaW5nc3RlciBDaGF1c3NlZSA2XCwgMTg1MjggQmVyZ2VuIGF1ZiBSw7xnZW4NCkdFTzo1NC40MjQ3MDQ7MTMuNDE1NTY1DQpFTkQ6VkVWRU5UDQpFTkQ6VkNBTEVOREFSDQo=">&#x1F4C5;</a>
  * https://inselchaos.de
* Freitag, 12.09.2025, 13:30, bis Sonntag, 14.09.2025, 15:30, Piloty-Gebäude (S2|02), TU Darmstadt, Hochschulstraße 10, 64289 Darmstadt: **Meta-Rhein-Main-Chaos-Days (MRMCD) 2025** <a title='Kalendereintrag Meta-Rhein-Main-Chaos-Days (MRMCD) 2025' download='event.ics' href="data:text/calendar;base64,QkVHSU46VkNBTEVOREFSDQpDQUxTQ0FMRTpHUkVHT1JJQU4NClZFUlNJT046Mi4wDQpQUk9ESUQ6LS8vTWV0YS1SaGVpbi1NYWluLUNoYW9zLURheXMgKE1STUNEKSAyMDI1Ly9pQ2FsNGogMS4wLy9FTg0KQkVHSU46VkVWRU5UDQpEVFNUQU1QOjIwMjUwODA5VDE5MzUzNFoNCkRUU1RBUlQ6MjAyNTA5MTJUMTMzMDAwDQpEVEVORDoyMDI1MDkxNFQxNTMwMDANClNVTU1BUlk6TWV0YS1SaGVpbi1NYWluLUNoYW9zLURheXMgKE1STUNEKSAyMDI1DQpMSU5LO1ZBTFVFPVVJRDpodHRwczovLzIwMjUubXJtY2QubmV0L2RlLw0KREVTQ1JJUFRJT046DQpMT0NBVElPTjpQaWxvdHktR2Viw6R1ZGUgKFMyfDAyKVwsIFRVIERhcm1zdGFkdFwsIEhvY2hzY2h1bHN0cmHDn2UgMTBcLCA2NDI4OSBEYXJtc3RhZHQNCkdFTzo0OS44Nzc1MDkxNDk5OTk5OTU7OC42NTQ1NDYyOTk1ODg1MjMNCkVORDpWRVZFTlQNCkVORDpWQ0FMRU5EQVINCg==">&#x1F4C5;</a>
  * https://2025.mrmcd.net/de/
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
