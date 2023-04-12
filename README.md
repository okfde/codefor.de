# Code for Germany – Unsere Website

Dieses Repository beinhaltet die neue [codefor.de](https://codefor.de)-Webseite. Für die Entwicklung wird [Hugo](https://gohugo.io/), ein *Static Site Generator*, verwendet. Die [Doku findet ihr hier](https://gohugo.io/documentation/). Rein ehrenamtlich engagierte Menschen haben durch ihren Einsatz dafür gesorgt, dass es seit 2020 einen nachvollziehbaren Codereview-Prozess gibt.

Um Inhalte hinzuzufügen oder zu ändern ist im Grunde nur ein wenig Ahnung von [Markdown](https://www.markdownguide.org/getting-started/) benötigt.

Solltest du Hilfe brauchen oder eine Frage haben, mach gerne ein [Issue](https://github.com/okfde/codefor.de/issues) auf oder frag im OKFDE-Slack Channel [#codeforde-website](https://openknowledgegermany.slack.com/messages/codeforde-website/) nach.

## Änderungen vorschlagen oder neue Inhalte hinzufügen

Eine Anleitung zum erstellen von neuen Inhalten findest du [hier](docs/contentCreation.md)

## Hinweise

* Den `main`-Branch, aus dem sich die **Seite automatisch baut**, kann nicht direkt verändert werden. Stattdessen bringe deine Änderungen in einen eigenen Branch und stelle einen Pull-Request. Pull-Requests erhalten dank netlify automatisch eine Vorschau-URL, du findest diese dann als Preview in den Checks deines PRs.
* Am besten bearbeitest du die Seite **lokal und testest** dann einmal mit `hugo -D`, ob sie wirklich funktioniert. Dadurch hilfst du, Fehler und damit auch zusätzliche Arbeit zu vermeiden.

## Die Struktur im Überblick – Was finde ich wo?

(mehr dazu auch [hier](https://gohugo.io/getting-started/directory-structure/#readout))

``` text
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

## Maschinenlesbare Daten der Labs und aller Projekte (simple API)

Eine maschinenlesbare Repräsentation der Labs und Projekte in JSON-Format lassen sich unter `/projekte/index.json` bzw. unter `/labs/index.json` abrufen.

**Wichtig**:

Das Schema der Daten kann sich jederzeit ändern.
  
### Beispiel `/labs/index.json`

``` JSON
{
  "labs":[
    {
      "description":"Hier ist das komplette Markdown der Seite ohne 'front matter' (Header)",
      "metadata":{" Hier stehen alle Informationen die im 'front matter' (Header) stehen"}
    },
    {
      "description":"",
      "metadata":{""}
    }

  ]
}

```

### Beispiel `/projekte/index.json`

``` JSON
{
  "projects":[
    {
      "description":"Hier ist das komplette Markdown der Seite ohne 'front matter' (Header)",
      "metadata":{" Hier stehen alle Informationen die im 'front matter' (Header) stehen"}
    },
    {
      "description":"",
      "metadata":{""}
    }

  ]
}

```

## Lizenz

Code: [MIT](./LICENSE). Inhalt: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.de).
