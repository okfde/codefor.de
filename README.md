# Code for Germany – Unsere Website

Dieses Repository beinhaltet die neue [codefor.de](https://codefor.de)-Webseite. Für die Entwicklung wird [Hugo](https://gohugo.io/), ein *Static Site Generator*, verwendet. Die [Doku findet ihr hier](https://gohugo.io/documentation/).

Um Inhalte hinzuzufügen oder zu ändern ist im Grunde nur ein wenig Ahnung von [Markdown](https://www.markdownguide.org/getting-started/) benötigt.

Solltest du Hilfe brauchen oder eine Frage haben, mach gerne ein [Issue](https://github.com/okfde/codefor.de/issues) auf oder frag im OKFDE-Slack Channel [#codeforde-website](https://openknowledgegermany.slack.com/messages/codeforde-website/) nach.

## Änderungen vorschlagen oder neue Inhalte hinzufügen

1. Nur wenn noch nicht geschehen: [Hugo Extended installieren](https://gohugo.io/getting-started/installing/)
2. Einen neuen Branch erstellen und hinein wechseln: ```git checkout -b NEUER_BRANCH```.
3. Eine neue Datei im Verzeichnis content/blog anlegen.
    - Der Dateiname sollte dem Schema `JJJJ-MM-TT-einzigartigername.md` folgen. (J = Jahr, M = Monat, T=Tag).
    - In die Datei diese Grundstruktur kopieren und anpassen:
    ```
    ---
    type: blog # So lassen
    title: Mein neuer Blogpost
    author: Oliver OpenData
    excerpt: Ein bis zwei Sätze die den Blogpost beschreiben. Wird für die Blogliste verwendet.
    topic: event # zb event, community, default, interview, project, story, toolbox
    images:
    - imgname: bild.jpg # Dieses Bild sollte im Verzeichnis static/blog existieren

    draft: true # auf false setzen, wenn der Blogpost veröffentlicht werden soll
    ---

    # Mein neuer Blogpost

    Bla bla bla
    ```
    - Der Blogpost wird formatiert mit [Markdown](https://www.markdownguide.org/getting-started/). Mehr zur Syntax hier: ([Syntax-CheatSheet](https://www.markdownguide.org/cheat-sheet/))
4. Mindestens ein Bild hinzufügen, also im Verzeichnis static/blog einfügen und den Namen im Blogpost unter imgname einfügen.
5. Idealerweise lokal testen, ob es funktioniert: Im Terminal ins Projektverzeichnis gehen und einfach [`hugo -D`*](#Gebaut-mit-Hugo) ausführen.
6. Änderungen committen und in den eigenen Fork pushen, d.h. sobald der Bild und Blogtext lokal angelegt wurden:
```
git add /pfad/zum/blogtext /pfad/zum/bild
git commit -m "Hier die Commit-Nachricht, z.B. add Blogeintrag zu xyz"
git push
```
7. Pull request eröffnen: Hier auf GitHub sollte dazu ganz oben ein Hinweis auftauchen. Einfach den Anweisungen folgen.
8. Fertig!


## Hinweise
* Den `main`-Branch, aus dem sich die **Seite automatisch baut**, kann nicht direkt verändert werden. Stattdessen bringe deine Änderungen in einen eigenen Branch und stelle einen Pull-Request. Pull-Requests erhalten dank netlify automatisch eine Vorschau-URL, du findest diese dann als Preview in den Checks deines PRs.
* Am besten bearbeitest du die Seite **lokal und testest** dann einmal mit `hugo -D`, ob sie wirklich funktioniert. Dadurch hilfst du, Fehler und damit auch zusätzliche Arbeit zu vermeiden.

## Die Struktur im Überblick – Was finde ich wo?
(mehr dazu auch [hier](https://gohugo.io/getting-started/directory-structure/#readout))

```
.
│
── archetypes ----------------> Basis Templates
│   ├── default.md
│   ├── labs.md
│   └── projekt.md
├── config.yaml
├── content ------------------> Der komplette Inhalt der Website
│   ├── archiv ---------------> Archivierte Projekte
│   ├── blog -----------------> die Blogbeiträge
│   │   ├── _index.md --------> legt eine Übersichtsseite an
│   │   └── *.md -------------> Blogpost
│   ├── datenschutz.md -------> Hauptseite zum Datenschutz
│   ├── grundsaetze.md -------> Hauptseite zu Grundsätzen
│   ├── impressum.md ---------> Hauptseite zum Impressum
│   ├── _index.md
│   ├── labs -----------------> die Labs
│   │   ├── _index.md --------> legt eine Übersichtsseite an
│   │   └── *.md -------------> Beschreibungsseite eines Labs
│   ├── mitmachen.md
│   ├── presse.md
│   ├── projekte -------------> die Projekte
│   │   ├── _index.md --------> legt eine Übersichtsseite an
│   │   └── *.md -------------> Projektbeschreibung
│   ├── ressourcen -----------> Hauptressourcen
│   │   └── *.pdf ------------> binäre Dateien
│   ├── summary_english.md
│   ├── ueber.md
│   └── ziele.md
├── data ---------------------> JSON und YAML Dateien
│   ├── about-us-blocks-de.json
│   ├── about-us-blocks-en.json
│   ├── home
│   ├── mitmachen
│   ├── netlify.toml ---------> ../netlify.toml
│   └── ziele
├── public -------------------> Fertige Seite, im .gitignore, also nicht bearbeiten!
├── LICENSE
├── netlify.toml -------------> Netlify Konfiguration (Weiterleitungen)
├── README.md ----------------> Diese Seite
├── resources
│   └── _gen
├── static
│   ├── blog -----------------> Bilder für Blogposts
│   ├── documents ------------> Dokumente
│   ├── icons ----------------> Icons für allgemeines Layout
│   ├── labs -----------------> Hexagon Sticker der Labs
│   └── projects -------------> Bilder für Projekte
└── themes/codefor-theme
│   ├── assets
│   ├── layouts --------------> Wiederverwendbare HTML Bausteine
│   │   ├── ...
│   │   ├── partials
│   │   ├── projekte
│   │   ├── shortcodes
│   │   ├── 404.html ---------> Individuelle 404 Seite
│   │   └── robots.txt
│   ├── static
│   │   ├── font -------------> Fonts
│   │   ├── img --------------> Bilder für Themes
│   │   └── js ---------------> JavaScript Dateien
│   └── LICENSE --------------> Lizenz der Website
```

## Lizenz

Code: [MIT](./LICENSE). Inhalt: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.de).
