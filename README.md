# Code for Germany – Unsere Website

## Blogpost schreiben
1. Hugo
2. Blogpost als [Markdown-Datei](https://www.markdownguide.org/getting-started/) anlegen. ([Syntax-CheatSheet](https://www.markdownguide.org/cheat-sheet/))
3. Bild
4. Idealerweise lokal testen, ob es funktioniert: Im Terminal ins  Projektverzeichnis gehen und einfach ```hugo -D``` ausführen.
5. Pushen
6. Fertig!

## Gebaut mit Hugo
* Diese Website ist mit gebaut mit [Hugo](https://gohugo.io), einem *Static Site Generator*.
* Die [Doku findet ihr hier](https://gohugo.io/documentation/).

## Hinweise
* Der Server ist so eingerichtet, dass er die neue **Seite automatisch baut**, sobald hier etwas gepusht wird. Außer es gibt einen Fehler! Deshalb:
* Am besten bearbeitet ihr die Seite **lokal und testet** dann einmal mit ```hugo -D```, ob sie wirklich funktioniert. Sonst verändert sich nämlich nichts online und jemand anderes muss dann euren Fehler ausbügeln.


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
