---
type: blog # So lassen
title: Besichtigung des Bielefelder Reallabors
author: Meike Wocken  # wenn nicht vorhanden steht da dann codeforde
twitter_handle: "@CountessOfCount" # wenn nicht vorhanden steht da dann @codeforde
excerpt: "Am 9. Juni 2022 hat Jens Edler vom Bielefelder Digitalisierungsbüro einer Gruppe interessierter Bürger:innen auf Einladung von Code for Bielefeld das Bielefelder Reallabor gezeigt. Im Blogbeitrag ist der Spaziergang durch das Reallabor in der Innenstadt zusammengefasst."
topic: story # zb event, community, default, interview, project, story, toolbox
images:
 - imgname: reallabor-bielefeld/reallabor_1.jpg
 - imgname: reallabor-bielefeld/reallabor_2.jpg
 - imgname: reallabor-bielefeld/reallabor_3.jpg
 - imgname: reallabor-bielefeld/reallabor_4.jpg
 - imgname: reallabor-bielefeld/reallabor_5.jpg
lab: [bielefeld] #needed for Aggregation on Lab-Page
 
og_image: reallabor-bielefeld/reallabor_1.jpg
og_description:  Jens Edler zeigt und erklärt die Sensoren im Bielefelder Reallabor. # Der alt Text zum Titelbildame: bild.jpg # Dieses Bild sollte im Verzeichnis static/blog existieren

# Tags werden benutzt um die twitter card für den artikel mit #Tags zu versorgen und um in Suchmaschinen gefunden zu werden
tags:
- Reallabor
- CitizienScience
- Sensoren
- SmartCity

draft: false # So lassen sonst wird der Artikel nicht veröffentlicht
---

# Besichtigung des Bielefelder Reallabors

Am 9. Juni 2022 hatte sich Jens Edler vom Digitalisierungsbüro der Stadt Bielefeld die Zeit genommen, um einer Gruppe interessierter Bürger:innen auf Einladung von Code for Bielefeld das Bielefelder Reallabor zu zeigen. 16 Personen sind unserer Einladung gefolgt und haben sich erklären lassen, was ein Reallabor ist.

Das Ziel vom Reallabor in der Bielefelder Innenstadt ist vor allem das Testen von Sensorik für unterschiedliche Anwendungsfälle einer Smart City. Die Daten sind frei zugänglich auf dem [Dashboard](https://dashboard.digitalsein.com/) einsehbar, stehen aber nicht als Open Data zur Weiterverwendung zur Verfügung. Das Reallabor ist für einige Beteiligte ein erster Erfahrungsraum rund um das Thema Daten und Datennutzung. Wenn diese Erfahrung positiv ausfällt, wird es hoffentlich im nächsten Ausbauschritt auch mehr Open Data geben. In Bielefeld gibt es dazu auch den [Innovationszirkel Urbane Daten](https://github.com/stadt-bielefeld/izud), der von dem Digitalisierungsbüro der Stadt Bielefeld initiiert wurde und unterschiedliche Gruppen der Stadtgesellschaft zu diesem Thema an einen Tisch holt.

Die Besichtigung startete auf dem Süsterplatz. Hier hängt unter anderem eine [senseBox](https://sensebox.de), deren Umweltdaten über LoRaWAN weitergeschickt werden, um sie dann auf dem oben genannten Grafana-Dashboard darzustellen. Die Visualisierung wurde vom Fraunhofer IOSB-INA aus Lemgo erstellt.

#![Start](reallabor_1.jpg)
#_Start auf dem Süsterplatz in Bielefeld. Jens Edler zeigt die Sensoren.  Foto: Code for Bielefeld._

Neben Umweltdaten gibt es auch einen Test zur Messung von Passantenfrequenzen: DSGVO konform werden Smartphone-Daten anonymisiert ausgewertet. Ob die Technik auch so funktioniert, wie es der Hersteller verspricht, validiert das Projektteam unter anderem auch mit gezielten Simulationen von Passanten-Gruppen durch Studierende und manuelle Zählungen. 

![Passantenzaehlen](reallabor_2.jpg)
_Sensor der anhand der Wärmesignatur Passanten zählen kann. Foto: Code for Bielefeld._

Zur Passantenfrequenz wird neben der Auswertung von Smartphone-Daten auch andere Sensorik verwendet. In der kleinen Gasse zum Eingang von Radio Bielefeld befindet sich ein batteriebetriebener Zähler, der durch die Auswertung der Wärmesignatur der vorbeigehenden Menschen diese zählen kann. Im weiteren Rundgang kommen wir an einem weiteren Sensor dieser Bauart vorbei, der leider durch ein abgestelltes Fahrrad verdeckt ist und daher nicht richtig zählen kann. Das sind die Probleme des Reallabors, die in einem Produktivbetrieb verhindert werden sollten, z.B. durch Hinweisschilder oder andere Maßnahmen.

![Passantenzaehlen_fail](reallabor_3.jpg)
_Hier ist der Sensor durch ein Fahrrad abgedeckt und kann nur an einer Seite Passanten mittels Auswertung der Wärmesignatur zählen. Foto: Code for Bielefeld._

Und auch der Fahrradverkehr wird gezählt. Da kann sogar die Fahrtrichtung bestimmt werden, durch das Messen direkt auf der Fahrbahn. Hier ist die Messstation deutlich sichtbar. Unsichtbarer sind Messpunkte, die sich unter anderem in einem „Bielefeld-Würfel“ in einem Schaufenster eines Ladens in der Innenstadt befindet. 

![Fahrrad](reallabor_4.jpg)
_Messstation für den Radverkehr. Foto: Code for Bielefeld._

Das Reallabor hat kein definiertes Enddatum. Einzelne Projekte sind aber zeitlich begrenzt, z.B. der Test der Passanten-Frequenzzählung, bei dem Anbieter von Technologien verglichen werden und es eine wissenschaftliche Begleitung gibt. Alle Ergebnisse werden am Ende veröffentlicht und stehen auch den Bürgerinnen und Bürgern offen. Die Daten dienen also nicht dazu, die Stadt zu steuern, sondern sollen vor allem zum Gespräch einladen zu den Themen Sensorik und Smart City. Auch hat Jens Edler herausgestellt, dass das Reallabor nicht nur in der Altstadt stattfinden muss. Unter anderem gibt es eine Zusammenarbeit mit dem Gymnasium am Waldhof für Schüller:innen-Projekte. Das Digitalisierungsbüro ist offen für weitere Ideen und Vorschläge zur Ausweitung des Reallabors in unserer Stadt. 

Vielen Dank Jens Edler für diesen informativen Rundgang!

![wuerfel](reallabor_5.jpg)
_Einige Sensoren messen auch versteckt hinter Schaufensterscheiben. Foto: Code for Bielefeld._

