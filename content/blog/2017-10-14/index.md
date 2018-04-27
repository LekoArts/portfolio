---
title: "Gatsby.js"
cover: "./gatsby.jpg"
date: "2017-10-14"
category: "Coding"
tags:
    - Gatsby
---

Gatsby ist ein sog. "Static Site Generator" für React.js, das dem Nutzer ermöglicht, schnelle und dynamische Websiten zu erstellen. Besonderen Fokus legt Gatsby auf die Optimierung für Mobilgeräte und erstellt hierfür automatisch eine PWA (Progressive Web App). Befüllt wird die Website mit Hilfe von verschiedensten Quellen: Markdown, CMSs, APIs, Datenbanken und noch viele mehr.

## Wieso Gatsby.js?

Lange habe ich den Relaunch meiner Seite vor mir her geschoben, auch weil ich keine - für mich - passende Lösung für einen Blog gefunden habe. Oft war die Einrichtung zu kompliziert, die Möglichkeiten zu gering; allerdings wollte ich auch nicht reines HTML für meine Blog-Posts schreiben. Mit steigender Beliebtheit von React.js konnte ich mich diesem Hype auch nicht entziehen und habe mich eingelesen. Da ich bereits im Design-Schritt in Komponenten denke, war React.js der nächste logische Schritt.

Anfang des Jahres 2017 habe ich dann [Gatsby.js](https://www.gatsbyjs.org/) entdeckt und war von der Möglichkeit sowohl meine Website mit React als auch meine Blogposts mit Markdown oder einem Headless CMS (z.B. Contentful) zu schreiben begeistert. Es nimmt einem ungemein viel Arbeit ab und bietet einen einfachen Einstieg (keiner sollte sich mit Webpack rumschlagen müssen!). Durch die aktive Community rund um den Gründer Kyle Mathews gibt es bereits zahlreiche Plugins, die weitere Funktionen nachliefern.

## Magie (GraphQL)

Um die Daten aus den Markdown Dateien, CMSs etc. in React und schlussendlich auf den Bildschirm zu bekommen, nutzt Gatsby die Query Sprache [GraphQL](http://graphql.org/). Die bereits erwähnte Community stellt einige [Plugins](https://www.gatsbyjs.org/docs/plugins/) bereit (Contentful, Drupal, Lever, Medium, Wordpress, MongoDB, Markdown), um an die Daten zu kommen. Die anschließende Nutzung von GraphQL ist ein Kinderspiel:

```graphql
export const pageQuery = graphql`
  query ProjectsQuery {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { sourceInstanceName: { eq: "projects" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            customer
            cover {
              childImageSharp {
                sizes(maxWidth: 1200, quality: 95) {
                  base64
                  aspectRatio
                  src
                  srcSet
                  sizes
                  originalImg
                  originalName
                }
              }
            }
          }
        }
      }
    }
  }
`;
```

Mit dieser Query erhalte ich alle Projekte (inklusive der Daten aus der "Frontmatter") für meine [Projekte](/projekte)-Unterseite, sortiert nach dem Datum. Um für jede Bildschirmgröße die passenden Bilder auszugeben, nimmt sich ein weiteres Plugin, das die [Sharp](https://github.com/lovell/sharp) Bibliothek nutzt, das in der Markdown Datei definierte Cover und erstellt weitere Bilder daraus. Sollte man Probleme mit der Query haben, kann man mit dem interaktiven *GraphiQL* Debugger sich Vorschläge anzeigen lassen und die Query selber testen - der Debugger erstellt seine eigene Dokumentation automatisch von alleine.

Genutzt werden können diese Daten in den React Komponenten dann so:

```jsx
<h1>{this.props.data.allMarkdownRemark.edges.node.frontmatter.title}</h1>
```

## Und sonst so...?

Das Erstellen meiner Website ging durch React super schnell, außerdem habe ich einiges über PWAs gelernt und werde auch weiter versuchen den Google eigenen [Lighthouse](https://developers.google.com/web/tools/lighthouse/) Score zu verbessern. Auch werde ich abwägen, ob ich von Markdown zu Contentful übergehe...

Für die Seite wurden folgende Tools genutzt:
- Visual Studio Code
- Webpack, Babel, ESLint, Prettier (Von Gatsby vorkonfiguriert)
- CSS Modules
- PostCSS (LostGrid, RucksackCSS, Autoprefixer)
- React, React Headroom, React Helmet, React Reveal
- Zooming