# Code for Germany – Unsere Website

Dieses Repository beinhaltet die neue codefor.de Webseite. Für die Entwicklung wird [Hugo](https://gohugo.io/getting-started/installing/), ein *Static Site Generator*, verwendet. Den aktuellen Stand des `main`-branches kann man sich unter der Adresse [https://codefor.de](https://codefor.de) ansehen.

Um Inhalte hinzuzufügen oder zu ändern ist im Grunde nur ein wenig Ahnung von [Markdown](https://www.markdownguide.org/getting-started/) benötigt.

Solltest du Hilfe brauchen oder eine Frage haben, mach gerne ein [Issue](https://github.com/okfde/codefor.de/issues) auf oder frag im OKFDE-Slack Channel [#codeforde-website](https://openknowledgegermany.slack.com/messages/codeforde-website/) nach.

## Änderungen vorschlagen oder neue Inhalte hinzufügen

1. Nur wenn noch nicht geschehen: [Hugo Extended installieren](https://gohugo.io/getting-started/installing/)
5. Einen neuen Branch erstellen
2. Eine neue Datei im Verzeichnis content/blog anlegen.
    - Der Dateiname sollte dem Schema `JJJJ-MM-TT-irgeneinname.md` folgen. (J = Jahr, M = Monat, T=Tag).
    - In der Datei eine so genannte `Frontmatter` anlegen. Diese startet und endet mit einer Zeile in der nur `---` steht. Der Inhalt der `Frontmatter` aus der Datei [`content/blog/0001-01-01-mein-neuer-blogpost.md`](content/blog/content/blog/0001-01-01-mein-neuer-blogpost.md) kopieren.
    - Nach der `Frontmatter`, den Blogpost schreiben. Es sollte [Markdown](https://www.markdownguide.org/getting-started/) benutzt werden. ([Syntax-CheatSheet](https://www.markdownguide.org/cheat-sheet/))
3. Mindestens ein Bild auswählen.
4. Idealerweise lokal testen, ob es funktioniert: Im Terminal ins Projektverzeichnis gehen und einfach `hugo -D` ausführen.
5. Änderungen committen und in den eigenen Fork pushen
7. Pull request eröffnen
6. Fertig!

## Gebaut mit Hugo
* Diese Website ist mit gebaut mit [Hugo](https://gohugo.io), einem *Static Site Generator*.
* Die [Doku findet ihr hier](https://gohugo.io/documentation/).

## Hinweise
* Den `main`-Branch, aus dem sich die **Seite automatisch baut**, kann nicht direkt verändert werden. Stattdessen bringe deine Anderungen in einen eigenen Branch und stelle einen Pull-Request. Pull-Requests erhalten dank netlify automatisch eine Vorschau-URL, du findest diese dann als Preview in den Checks deines PRs.


## Die Struktur im Überblick
(mehr dazu auch [hier](https://gohugo.io/getting-started/directory-structure/#readout))

```
.
├── archetypes ------------> content template files
│   ├── default.md
│   └── projekt.md
├── config.yaml
├── content --- ----------> Der komplette Inhalt der Website
│   ├── advent19 ---------> Die Adventskalenderposts 2019
│   │   └── _index.md ----> legt eine Übersichtsseite an
│   ├── blog -------------> die Blogbeiträge
│   │   └── _index.md ----> legt eine Übersichtsseite an
│   └── ueber.md ---------> codefor.de/ueber
├── layouts --------------> templates in html, definieren content-rendering
│   ├── advent19
│   │   └── list.html ----> definiert Adventsübersichtsseite
│   ├── blog
│   │   ├── list.html ----> definiert Blogübersichtsseite
│   │   └── single.html --> definiert einzelnen Blogbeitrag
│   ├── _default
│   │   └── list.html ----> definiert default-Übersichtsseite
│   ├── labs
│   │   ├── list.html ----> definiert Labs-Übersichtsseite
│   │   └── single.html --> definiert einzelne Lab-Seite
│   └── projekte
│       ├── list.html ----> definiert Projekte-Übersichtsseite
│       └── single.html --> definiert einzelne Projekt-Seite
├── public -> Fertige Seite, im .gitignore, also nicht bearbeiten!
├── README.md
├── resources
│   └── _gen
│       ├── assets
│       └── images
├── static
│   ├── advent19 ---------> Bilder für den Adventskalender 2019
│   ├── blog -------------> Bilder für Blogposts
│   ├── img --------------> Bilder für allgemeines Layout
│   └── projects --------->
└── themes
    └── hugo-cfg
        ├── assets
        │   ├── bulma
        │   │   ├── bulma.sass
        │   │   └── sass
        │   │       ├── base
        │   │       ├── components
        │   │       ├── elements
        │   │       ├── grid
        │   │       ├── layout
        │   │       └── utilities
        │   ├── fresh
        │   │   ├── core.scss
        │   │   └── partials
        │   └── style.sass
        ├── layouts
        │   ├── 404.html
        │   ├── _default
        │   │   ├── baseof.html
        │   │   └── single.html
        │   ├── index.html
        │   ├── partials
        │   └── shortcodes
        ├── static
        │   ├── css
        │   ├── fonts
        │   │   ├── fontawesome-webfont.woff2
        │   │   ├── fontello.woff
        │   │   ├── OpenSans-Regular.woff2
        │   │   ├── OpenSans-SemiBold.woff2
        │   │   └── simple-line-icons.ttf
        │   ├── images
        │   │   ├── favicon.png
        │   │   ├── illustrations
        │   │   └── logos
        │   └── js
        └── theme.toml


```
