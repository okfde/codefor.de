# Code for Germany – Unsere Website

Dieses Repository beinhaltet die neue codefor.de Webseite. Für die Entwicklung wird [Hugo](https://gohugo.io/getting-started/installing/), ein *Static Site Generator*, verwendet. Den aktuellen Stand des `main`-branches kann man sich unter der Adresse [https://codefor.de](https://codefor.de) ansehen.

Um Inhalte hinzuzufügen oder zu ändern ist im Grunde nur ein wenig Ahnung von [Markdown](https://www.markdownguide.org/getting-started/) benötigt.

Solltest du Hilfe brauchen oder eine Frage haben, mach gerne ein [Issue](https://github.com/okfde/codefor.de/issues) auf oder frag im OKFDE-Slack Channel [#codeforde-website](https://openknowledgegermany.slack.com/messages/codeforde-website/) nach.

## Änderungen vorschlagen oder neue Inhalte hinzufügen

1. Nur wenn noch nicht geschehen: [Hugo Extended installieren](https://gohugo.io/getting-started/installing/)
5. Einen neuen Branch erstellen
2. Eine neue Datei im Verzeichnis content/blog anlegen.
    - Der Dateiname sollte dem Schema `JJJJ-MM-TT-einzigartigername.md` folgen. (J = Jahr, M = Monat, T=Tag).
    - In der Datei eine so genannte `Frontmatter` anlegen. Diese startet und endet mit einer Zeile in der nur `---` steht. Der Inhalt der `Frontmatter` aus der Datei [`content/blog/0001-01-01-mein-neuer-blogpost.md`](content/blog/content/blog/0001-01-01-mein-neuer-blogpost.md) kopieren.
    - Nach der `Frontmatter`, den Blogpost schreiben. Es sollte [Markdown](https://www.markdownguide.org/getting-started/) benutzt werden. ([Syntax-CheatSheet](https://www.markdownguide.org/cheat-sheet/))
3. Mindestens ein Bild auswählen.
4. Idealerweise lokal testen, ob es funktioniert: Im Terminal ins Projektverzeichnis gehen und einfach [`hugo -D`*](#Gebaut-mit-Hugo) ausführen.
5. Änderungen committen und in den eigenen Fork pushen
7. Pull request eröffnen
6. Fertig!

## Gebaut mit Hugo
* Diese Website ist mit [Hugo](https://gohugo.io) (extended Version) gebaut, einem *Static Site Generator*.
* Die [Doku findet ihr hier](https://gohugo.io/documentation/).

## Hinweise
* Den `main`-Branch, aus dem sich die **Seite automatisch baut**, kann nicht direkt verändert werden. Stattdessen bringe deine Anderungen in einen eigenen Branch und stelle einen Pull-Request. Pull-Requests erhalten dank netlify automatisch eine Vorschau-URL, du findest diese dann als Preview in den Checks deines PRs.
* Am besten bearbeitest du die Seite **lokal und testest** dann einmal mit [`hugo -D`*](#Gebaut-mit-Hugo), ob sie wirklich funktioniert. Dadurch hilfst du Fehler und damit auch zusätzliche Arbeit zu vermeiden.

## Lizenz

Code: [MIT](./LICENSE). Inhalt: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.de).

## Die Struktur im Überblick
(mehr dazu auch [hier](https://gohugo.io/getting-started/directory-structure/#readout))

```
.
├── archetypes ------------> Basis Templates
│   ├── default.md
│   ├── labs.md
│   └── projekt.md
│
├── content --------------> Der komplette Inhalt der Website
│   ├── archiv -----------> Archivierte Projekte
│   ├── blog -------------> die Blogbeiträge
│   │   ├── _index.md ----> legt eine Übersichtsseite an
│   │   └── *.md ---------> Blogpost
│   ├── labs -------------> die Labs
│   │   ├── _index.md ----> legt eine Übersichtsseite an
│   │   └── *.md ---------> Beschreibungsseite eines Labs
│   ├── projekte ---------> die Projekte
│   │   ├── _index.md ----> legt eine Übersichtsseite an
│   │   └── *.md ---------> Projektbeschreibung
│   ├── ressourcen -------> Hauptressourcen
│   │   └── *.pdf --------> binäre Dateien
│   ├── *.md -------------> Hauptseiten
│   └── ueber.md ---------> codefor.de/ueber
│
├── data -----------------> JSON und YAML Dateien
│
├── public ---------------> Fertige Seite, im .gitignore, also nicht bearbeiten!
│
├── resources/_gen
│
├── static
│   ├── blog -------------> Bilder für Blogposts
│   ├── documents --------> Dokumente
│   ├── icons ------------> Icons für allgemeines Layout
│   ├── labs -------------> Hexagon Sticker der Labs
│   └── projects ---------> Bilder für Projekte
│
├── themes/codefor-theme
│   ├── assets
│   ├── layouts ----------> Wiederverwendbare HTML Bausteine
│   │   ├── ...
│   │   ├── partials
│   │   ├── projekte
│   │   ├── shortcodes
│   │   ├── 404.html -----> Individuelle 404 Seite
│   │   └── robots.txt
│   ├── static
│   │   ├── font ---------> Fonts
│   │   ├── img ----------> Bilder für Themes
│   │   └── js -----------> JavaScript Dateien
│   └── LICENSE ----------> Lizenz der Website
│
├── config.yaml
│
├── netlify.toml ---------> Netlify Konfiguration (Weiterleitungen)
│
└── README.md ------------> Diese Seite
```
