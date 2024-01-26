---
type: blog
title: Workshop TTN Mapper
author: Meike Wocken
twitter_handle: "@CountessOfCount"
excerpt: Beschreibung unseres Workshops im Frühjahr 2023 zum TTN Mapper.
topic: event
lab: [bielefeld]
images:
- imgname: bielefeld/2024-ttn-mapper.jpg
- imgname: bielefeld/2024-ttn-mapper-screenshot.jpg

og_image: bielefeld/ttn-mapper.jpg
og_description: Zwei Hände halten TTN Mapper bestehend aus Microcontroller und GPS Modul vor einer Leinwand, auf der die Kartendarstellung der Webanwendung ttn-mapper.org zu sehen ist.

tags:
- The Things Network
- LoRaWAN
- Community

draft: false
---

# Workshop zum Thema TTN Mapper
Das Jahr 2023 liegt bereits laaaange zurück, aber wir haben gar nicht über alle unsere Aktivitäten berichtet. Wir hatten im Frühjahr 2023 einen Workshop im Pioneers Club Bielefeld durchgeführt, um der Frage nachgehen zu können:

Wie flächendeckend ist unser Community-LoRaWAN von The Things Network (TTN) in Bielefeld?

Um diese Frage zu beantworten, hilft der [TTN Mapper](https://ttnmapper.org/). Die dargestellten Datenpunkte werden durch die Community gesammelt, dafür werden sogenannte Tracker z.B. beim Wandern oder Radfahren mitgeführt. Christoph von Code for Bielefeld hatte uns die Funktionsweise dieser Tracker-Geräte erklärt und uns gezeigt, wie wir selber einen zusammenbauen können. 

## Du bist ganz neu beim Thema The Things Network und fragst dich, was steckt dahinter?
In wenigen Worten zusammengefasst, ist das TTN eine offene Netzwerkinfrastruktur. Das besondere ist, dass das dafür verwendete LoRaWAN eine hohe Reichweite hat und das Versenden der Datenpunkte wenig Energie benötigt. Damit können Sensoren, z.B. im Wald, ein bis zwei Jahre Daten senden, ohne dass ein Batteriewechsel nötig ist. Die Gateways zum Empfangen und Weitergeben der Daten an den Besitzer der Daten, werden durch die Community bereitgestellt und stehen für alle frei zur Verfügung. 

## Ein paar mehr Infos zum TTN Mapper
Auf der Seite [TTN Mapper](https://ttnmapper.org/) wird die Abdeckung des TTN-Netzes weltweit abgebildet. Die dargestellten Datenpunkte stammen von Trackern, die man mit sich führen kann, und die dabei regelmäßig ein TTN-Datenpaket mit ihren GPS Koordinaten abschicken. Erreicht das Datenpaket ein Gateway, ist also eine Netzabdeckung vorhanden, dann wird die GPS Koordinate auch auf der Karte dargestellt.  

## Das klingt interessant für dich, du hast den Workshop aber leider verpasst?!  
Das hier war unsere Einkaufs- und Mitbringliste für den Workshop (!! Stand Frühjahr 2023 !!):
 
### Hardware:
(1) [ESP32 LoRa SX1276 0.96 Inch OLED Display Development Board](https://www.amazon.de/dp/B07Z7SZ1YN?ref_=cm_sw_r_cp_ud_dp_09QYYW9688YVDEXTG8D8) (Anbieter für Einzelboards haben wir leider nur auf Amazon gefunden, es ist aber kein Muss bei Amazon einzukaufen, es ist auch kein Affiliate-Link).

(2) GPS Modul: das Standard-Modul ist das mit einem UBLOX-Neo-6M-Chip ausgestattete Modul, wie ihr es mit der Suche nach ""Ublox GY-NEO6MV2 GPS Modul"" in einer Suchmaschine eurer Wahl z.B. in verschiedenen Maker-Shops findet - oder auch bei [Amazon](https://www.amazon.de/dp/B088LR3488?ref_=cm_sw_r_cp_ud_dp_7ZV67MHEZ4NFN4776KRX).
Für die Software wurde die Arduino IDE auf den Rechnern benötigt und die Inhalte aus dem Repo [https://github.com/codeforbielefeld/TTN-mapper](https://github.com/codeforbielefeld/TTN-mapper).
 
### Umsetzung:
(1) Arduino IDE herunterladen und installieren

(2) In den IDE Einstellungen eine zusätzliche URL für die Board-Verwaltung einstellen: [https://github.com/Heltec-Aaron-Lee/WiFi_Kit_series/releases/download/0.0.7/package_heltec_esp32_index.json](https://github.com/Heltec-Aaron-Lee/WiFi_Kit_series/releases/download/0.0.7/package_heltec_esp32_index.json)

(3) In der IDE unter Werkzeuge > Bibliotheken  folgende Bibliotheken hinzufügen:

- Heltec ESP32 Dev Boards (1.1.1)
- MCCI LoRaWAN LMIC library by IBM (4.1.1)
- TinyGPSPlus (1.0.3)
- U8g2 (2.33.15)

(4) Falls du nicht bereits ein Konto für thethingsnetwork.org angelegt hast, registrierst du dich da. Anschließend legst du in deiner Console eine neue Application an für deinen TTN Mapper und registrierst darin das Board als dein Device.

(5) Zurück in die Arduino IDE. In der lmic_project_config.h im Verzeichnis project_config (im library-Verzeichnis der LMIC-Bibliothek im Arduino-Installationsverzeichnis) muss der Eintrag
` #define CFG_eu868 1 `  aktiviert und der Eintrag
` #define CFG_us915 1 `  auskommentiert werden.
Damit wird die LoRaWAN-Bibliothek für europäische Verhältnisse konfiguriert.

(6) LoRaWAN Keys und Device Address (nach dem Anlegen des Devices übernehmen aus der TTN-Console, den Inhalt der geschweiften Klammern unten damit ersetzen, bei den Keys vor jedes Byte „0x“ und dahinter ein Komma schreiben).

(7) Die letzten Meter... Source in der IDE übersetzen (dauert ein bisschen) und per USB-Kabel auf den Heltec übertragen (bei Fehlermeldung den Reset-Knopf des Heltec solange drücken, bis die Übertragung aus der IDE beginnt).
Wenn alles geklappt hat, ist der Tracker bereit für den Einsatz!
Als Stromversorgung dient eine USB-Powerbank. Nach dem Einschalten dauert es einige Minuten, bis das GPS-Modul Empfang hat (LED blinkt).

Wenn man jetzt mit dem Tracker unterwegs ist, werden bei TTN-Empfang die Daten
übertragen. In der Karte werden sie leider erst mit Verzögerung angezeigt. Das sieht dann zum Beispiel wie folgt aus (Stand 11.1.2024):

{{< figure
src="/blog/bielefeld/2024-ttn-mapper-screenshot.jpg"
attr="Screenshot aus der Webanwendung ttnmapper.org, Abruf: 11.01.2024."
alt="Kartendarstellung der Stadt Bielefeld und Umgebung. Mit farbigen Markierungen ist der Empfang von Datenpaketen über The Things Network eingezeichnet. Ein große Anzahl der Markierungen liegt im Süd-Osten der Region Bielefeld."
>}}
