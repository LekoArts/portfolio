---
title: "Erstelle dein Design System mit Gatsby"
cover: "./design_system_mit_gatsby.jpg"
date: "2018-04-02"
category: "Coding"
tags:
    - Gatsby
    - Design System
---

Mittlerweile gibt es unzählige Tools und Möglichkeiten um ein Design System zu erstellen. Sei es per CSS, direkt aus React Komponenten oder mithilfe eines Online-Dienstes. Für [Gatsby](https://www.gatsbyjs.org/) gab es bislang kein Plugin, um solche Design Systeme leicht & schnell zu entwickeln - weshalb ich ein eigenes erstellt habe: **gatsby-remark-design-system**. Mithilfe des Plugins kannst du nun dein komplettes Design System in Markdown schreiben!

Dabei habe ich mich von dem wunderbaren Projekt [Catalog](https://www.catalog.style/) inspirieren lassen und ihre Nutzung und Benennung der einzelnen Elemente übernommen. Die sog. **Specimens** stellen die Bausteine dar, mit denen du neben Text und Code-Blöcken dein Design System ausfüllen kannst. Momentan gibt es folgende Bausteine: Audio, Farbe, Farbpalette, Download, Hinweise, Typografie und Video.  
Schau dir am besten die [Beispielseite](https://gatsby-remark-design-system.netlify.com/) an, um diese live zu sehen! Das GitHub Repository zum Projekt findest du hier: [gatsby-remark-design-system](https://github.com/LeKoArts/gatsby-remark-design-system).

## Umfang des Plugins

Wie bereits angemerkt habe ich mit diesem Projekt ein Plugin für Gatsby und **keine** fertige Vorlage für ein komplettes Design System programmiert. Es ist lediglich eine Erweiterung der Fähigkeiten des `remark` Plugins und lässt ansonsten alle Freiheiten was Design und Umsetzung der Website angeht. Auch habe ich durch eine SCSS-Datei die Möglichkeit gegeben die *Specimens* noch weiter zu individualisieren.

## Installation

Es müssen bereits `gatsby-source-filesystem`, `gatsby-transformer-remark` und ein SCSS-Plugin wie bspw. `gatsby-plugin-sass` oder `gatsby-plugin-postcss-sass` installiert sein.

Installiere das Plugin:

```bash
npm install gatsby-remark-design-system
```

Deine `gatsby-config.js` änderst du wie folgt ab:

```js
plugins: [
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [
        {
          resolve: 'gatsby-remark-design-system',
          options: {
            // Klassenpräfix für alle Elemente der Design System Specimens
            // Das Präfix muss wie weiter unten erklärt auch auf die Wrapper Komponente angewendet werden
            // Der Standardwert ist 'grds' - wenn du es dabei belassen willst, kannst du die Option weglassen
            classPrefix: 'grds',
          }
        }
      ],
    },
  },
],
```

Das Aussehen der *Specimens* ist über eine externe SCSS-Datei definiert, weshalb du das mitgelieferte Theme importieren musst:

```js
// layouts/index.js
require('gatsby-remark-design-system/theme/gatsby-remark-design-system-theme.scss');
```

Wenn du die Variablen überschreiben willst, um z.B. eine andere Farbe für die Icons zu wählen, solltest du zuerst diese Variablen definieren und danach das Theme importieren.

```scss
// Importiere z.B. die base.scss in deine layout/index.js

// Setze deine Variablen, die überschrieben werden sollen

$prefix: cool;
$primary: #c93a3c;

// Importiere ggfs. andere SCSS Dateien
// .......

// Importiere das Theme
@import '~gatsby-remark-design-system/theme/gatsby-remark-design-system-theme.scss';
```

Zu guter Letzt musst du dem Container, der den Inhalt der Markdown-Datei halten wird, einen Klassennamen geben:

```jsx
// Zum Beispiel in templates/index.js
<div className="grds-page" dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />
```

## Nutzung

Prinzipiell haben die Specimens folgende Syntax:

````
```name|option
content
```
````

Beim Audio Specimen sähe das dann so aus:

````
```audio
autoplay: false
loop: false
name: Sound File #1
src: "/sound.mp3"
span: 3
```
````

Im Github Verzeichnis findest du [alle Specimens](https://github.com/LeKoArts/gatsby-remark-design-system#specimens).

