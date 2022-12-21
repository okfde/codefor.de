---
type: blog # So lassen
title: "Open Source in der Berliner Verwaltung: Eine ernüchternde Zwischenbilanz"
author: Knut Hühne	
twitter_handle: notknut
excerpt: Die Berliner Verwaltung benutzt Open Source Software. Aber keiner darf den Quelltext lesen.
topic: story 
lab: [berlin] 
images:
   - imgname: oss-verwaltung-berlin.jpg
     attribution: Foto von [wesleyphotography](https://unsplash.com/@wesleyphotography) auf [unsplash.com](https://unsplash.com/photos/snNHKZ-mGfE)
og_image: oss-verwaltung-berlin.jpg

# Tags werden benutzt um die twitter card für den artikel mit #Tags zu versorgen und um in Suchmaschinen gefunden zu werden
tags:
- Open Source
- Berlin

draft: false # So lassen sonst wird der Artikel nicht veröffentlicht
---

Im Oktober 2021 gab es Grund zur Freude in der Civic Tech Community:
Der Berliner Senat hatte im
[Koalitionsvertrag](https://pardok.parlament-berlin.de/starweb/adis/citat/VT/19/DruckSachen/d19-0114.pdf)
mit deutlichen Worten klargemacht, dass er Open Source fördern
möchte:

> Für eine digital souveräne Stadt sind Open Source und offene
Standards unverzichtbar. Der Senat wird bei jeder Softwarebeschaffung
nach Open Source Alternativen suchen und speziell für die Verwaltung
erarbeitete Software unter freien Lizenzen der Allgemeinheit zur
Verfügung stellen.[...] Der Senat richtet einen Open Source Fonds zur Finanzierung von
Entwicklungs-Communities ein, die das Land Berlin braucht, um
Anwendungen zu pflegen und weiterzuentwickeln.


Wir als Netzwerk codefor.de fordern schon seit langem: [Public
Money, Public Code](https://publiccode.eu/) und haben diesen Anstoß
genutzt, um eine schon länger laufende Aktion zu intensivieren: Im
Jahr 2020 hatte der Abgeordnete Stefan Ziller eine [Schriftliche
Anfrage im
Abgeordnetenhaus](https://pardok.parlament-berlin.de/starweb/adis/citat/VT/18/SchrAnfr/S18-25055.pdf)
gestellt, laut der es 67 IT-Fachverfahren gibt, bei denen der
Quellcode zur Verfügung steht. Das klingt angesichts der Gesamtzahl
von 316 schon nicht besonders viel, aber man soll ja klein anfangen.
Und so fragten wir uns: Womit fängt denn die Berliner Verwaltung
bei der Nutzung und Veröffentlichung von Open Source an? Und wo
finden wir den Quellcode eigentlich? Nirgends war vermerkt, wo der
Quellcode zu finden sei - mit Ausnahme der Software
“Steuerungsdienst-Datenbank”. Diese ist laut Anfrage “Auf DVD im
Tresor hinterlegt”.

In der Schriftlichen Anfrage wird die Idee erwähnt,
ein “Open Source Code Repository nach dem Vorbild von GitHub für
die öffentliche Hand” zu schaffen. Unserer Meinung nach sollte
jedoch nicht darauf gewartet werden, ein so großes Projekt umzusetzen,
bevor die bereits vorhandene Software veröffentlicht wird.
Also haben wir stichprobenartig versucht, mithilfe des
Informationsfreiheitsgesetzes und FragDenStaat.de den Quelltext von
zehn Verfahren zu befreien. Den Quellcode hätten wir dann als Service
für die Verwaltung übergangsweise auf GitHub bereitgestellt. Der
grammatikalische Spoiler verrät an dieser Stelle: So weit ist es
(bisher) nicht gekommen. Aber zunächst zum Plan: Der Quellcode
sollte zusätzlich mit einer
[publiccode.yaml](https://github.com/publiccodeyml/publiccode.yml) Datei
versehen werden, die das Auffinden öffentlicher Software vereinfacht.

Dann scheiterten allerdings alle zehn Anfragen. Keine einzige Behörde
wollte den Quellcode, der doch laut Aussage des Senats unter einer
offenen Lizenz stand, herausgeben. Die Ablehnungsgründe waren dabei
so vielfältig wie absurd:


So [antwortet das Bezirksamt
Lichtenberg](https://fragdenstaat.de/anfrage/quellcode-der-it-anwendung-multibasecs3-wildtierdatenbank/):
> Sie baten um Übersendung des Quellcodes der IT-Anwendung
»MultibaseCS3« (Wildtierdatenbank). Bei diesem Programm handelt es
sich nicht um ein quelloffenes Programm. Die Software ist
urheberrechtlich geschützt und der Quellcode ist hierzu nicht
öffentlich. Der Hersteller ist die 34u GmbH.

Das [Bezirksamt Friedrichshain-Kreuzberg
schreibt](https://fragdenstaat.de/anfrage/quellcode-der-it-anwendung-wahlhelfer-db/650003/anhang/ifg_geschwaerzt.pdf):
> Die Anwendung „Wahlhelfer-DB” war in unserem Wahlamt bis zum
Oktober 2014 im Einsatz. Am 29.10.2014 wurde die zentrale Anwendung
„Votemanager” (Wahlhelfende und Wahllokale) mit allen Funktionalitäten
in der Produktivumgebung eingeführt.  Damit erübrigte sich die
Anwendung der IT-Anwendung „Wahlhelfer-DB”. Aus datenschutzrechtlichen
Gründen wurde die Anwendung vom Server gelöscht und damit stehen
keine Informationen mehr zur Verfügung. Ich bedauere, Ihnen keine
andere Auskunft geben zu können.

Die [Senatsverwaltung für Bildung, Jugend und
Familie](https://fragdenstaat.de/anfrage/quellcode-der-software-beointern/)
beruft sich darauf, dass es sich bei Quellcode nicht um anfragbare
Informationen handele: 
> Ein solcher Quellcode ist keine Akte im
Sinne von § 3 Abs. 2 IFG. Akten sind danach alle schriftlich,
elektronisch, optisch, akustisch oder auf andere Weise festgehaltenen
Gedankenverkörperungen und sonstige Aufzeichnungen, insbesondere
Schriftstücke, Magnetbänder, Disketten, Filme, Fotos, Tonbänder,
Pläne, Diagramme, Bilder und Karten, soweit sie amtlichen Zwecken
dienen.  Ein Quellcode zählt nach diesen Maßstäben nicht zu den
von der Vorschrift erfassten Akten öffentlicher Stelle, denn er
weist keinen Bezug zu einer konkreten Verwaltungsangelegenheit auf.
Er ist vielmehr (nur) ein allgemeines Mittel um die
informationstechnologische Arbeitsfähigkeit der Verwaltung
herzustellen. Eine Übersendung des Quellcodes kann daher nicht
erfolgen. Ich lehne Ihren Antrag ab.

Aber auch die anderen Antworten sind lesenswert, wir haben [hier
alle Anfragen und die dazugehörigen Ablehnungsgründe
zusammengefasst](https://airtable.com/shrRmYk3uvaYM30Bk/tblJDjZdaXriIL5pp).

Wo stehen wir also? Von außen könnte man fast meinen, dass die
Diskussion darüber, wie der Staat Open Source Software veröffentlichen
soll, die falsche ist, wenn er sich schon jetzt so schwer damit
tut, überhaupt mit offenem Quellcode umzugehen. Ob Behörden nun
Quellcode löschen, gar nicht erst die Nutzungsrechte an ihm erlangen
oder ihn nicht als Akte qualifizieren - all dies zeigt, dass nach
wie vor eine große Lücke zwischen Anspruch und Realität bei der
Nutzung von Open Source Software in der Verwaltung besteht. Die
Zwischenbilanz ist, zumindest für Berlin, somit eine traurige. Es
bleibt uns nur, unsere Forderung zu wiederholen: Public Money,
Public Code. Wenn der Staat Geld für Software ausgibt, dann sollte
diese auch der Bevölkerung zur Verfügung gestellt werden. Und zwar
nicht in Form eines Eintrags in einer Tabelle, sondern als Quellcode,
der für alle im Internet zugänglich ist. Es bleibt abzuwarten, wie
gut die aktuelle Koalition ihre Vorhaben aus dem Koalitionsvertrag
in der ihr noch zur Verfügung stehenden Zeit umsetzen kann. Der
[Entwurf eines
Transparenz-Gesetzes](https://netzpolitik.org/2022/sachverstaendiger-heimgeschickt-spd-blockiert-erneut-berliner-transparenzgesetz/)
macht Hoffnung, dass der “Quelltext von Computerprogrammen” demnächst
zu einer “Veröffentlichungspflichtigen Information” werden kann.
Dann dürfte es keine kreativen Ausreden mehr geben.



