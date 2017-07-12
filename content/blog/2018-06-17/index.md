---
title: "Upgrade-Guide: Gatsby v2"
cover: "./gatsby-version-2.jpg"
date: "2018-06-17"
category: "Coding"
tags:
    - Gatsby
    - GRB-Reihe
---

Die Beta zu Gatsby v2 ist da! Im [offiziellen Blogpost](https://www.gatsbyjs.org/blog/2018-06-16-announcing-gatsby-v2-beta-launch/) kannst du die Änderungen im Detail nachlesen — kurz zusammengefasst gibt es folgendes dazu zu sagen: Das Konzept der Layouts wurde entfernt, dafür gibt es nun die *StaticQuery*. Die Dependencies wurden auf den aktuellen Stand gebracht (sprich: Babel v7, React v16 und Webpack v4), sodass das Entwickeln bzw. das *Hot-Reloading* und das Erstellen der Seite noch schneller sind. Es gab einige Änderungen, aber diese sind schnell umzusetzen! :)

Wie bei allen Teilen meiner [GRB-Reihe](/tags/grb-reihe) kannst du bereits das Endresultat im Branch [tutorial-part-five](https://github.com/LeKoArts/gatsby-starter-minimal-blog/tree/tutorial-part-five) sehen und vielleicht anhand der Commits dem Tutorial noch besser folgen. Los gehts!

## Gatsby und Plugins updaten

Als erstes musst du die in der `package.json` hinterlegten Versionen auf `next` ändern, um die neueste Version zu erhalten.

```json
"dependencies": {
  "gatsby": "next",
  "gatsby-image": "next",
  "gatsby-plugin-sharp": "next"
  (...weitere Plugins)
}
```

Dabei kannst du auch gleich `gatsby-link` entfernen, da dies nun in `gatsby` integriert ist. Sollte npm/yarn keine *next* Version zum npm package finden, wird es fragen, welche Version stattdessen ausgewählt werden soll — nimm hier einfach die neueste Version. Anschließend installierst du wie gewohnt mit `npm install` die Packages.

Solltest du `gatsby-plugin-react-next` nutzen, kannst du dieses auch aus deiner `package.json` und `gatsby-config.js` Datei entfernen.

## Neue Dependencies installieren

Im Gegensatz zu Version 1 ist in der neuen Version React nicht mehr inbegriffen und muss deshalb extra installiert werden.

`npm install react react-dom`

Auch einige Plugins haben Abhängigkeiten ausgelagert (als *peerDependency*), die manuell installiert werden müssen. Schau dazu in die README des jeweiligen Plugins, siehe z.B. [gatsby-remark-prismjs](https://gatsbyjs.org/packages/gatsby-remark-prismjs/?=prismjs). Bezogen auf unseren Starter müssen folgende Sachen noch installiert werden:

`npm install typography react-typography prismjs babel-plugin-styled-components`

## Layout Komponente

Mit dem Entfernen der *besonderen* Layout Komponente geht wohl die größte Änderung einher. Nun werden alle Seiten nicht mehr automatisch von einer Komponente umhüllt, sondern wie in der restlichen React Welt üblich umschließen wir die Seiten selber mit einer Komponente (die man praktischerweise weiterhin *Layout* nennen kann). In wenigen Schritten kann man diese Änderung aber vollziehen:

1. **children ist keine Funktion mehr**

`children` wurde in v1 als Funktion weitergegeben, was nun aber nicht mehr der Fall ist.

```diff
  <ThemeProvider theme={theme}>
    <div>
      <SEO />
-     {children()}
+     {children}
      <Footer>
        &copy; 2018 by John Doe. All rights reserved. <br />
        <a href="https://github.com/LeKoArts/gatsby-starter-minimal-blog">GitHub Repository</a>
      </Footer>;
    </div>
  </ThemeProvider>
```

2. **Verschiebe die Datei in deinen components Ordner**

Verschiebe die Datei `src/layouts/index.js` zu `src/components/` und benenne sie in `Layout.js` um. Wenn der Komponentenname noch ein anderer seien sollte (hier: *TemplateWrapper*), nenne diesen auch um.

3. **Importiere die neue Komponente**

Importiere die Komponente in alle Dateien, die in den Ordnern `src/pages` und `src/templates` liegen. Bei der Gelegenheit kannst du den Import zu `gatsby-link` auch abändern. Für die `src/pages/index.js` Datei sieht das dann wie folgt aus:

```diff
- import Link from 'gatsby-link';
+ import { Link } from 'gatsby';
+ import Layout from '../components/Layout';

/* Styling goes here */

const IndexPage = props => {
  const postEdges = props.data.allMarkdownRemark.edges;

  return (
+   <Layout>
      <Wrapper>
        <Hero>
          {/* Hero Content goes here */}
        </Hero>
        {/* Content goes here */}
      </Wrapper>
+   </Layout>
  );
};
```

Genau so kannst du auch mit den restlichen Dateien verfahren.

Falls du bislang in deiner Layout Komponente auf die props `history`, `location` oder `math` zugegriffen hast, musst du diese nun zu deiner Layout Komponente weiterreichen; da nur noch *pages* Zugriff darauf haben.

**Beispiel**

`Layout.js`

```jsx
import React from "react"

export default ({ children, location }) => (
  <React.Fragment>
    <p>Path is {location.pathname}</p>
    {children}
  </React.Fragment>
)
```

`src/pages/index.js`

```jsx
import React from "react"
import Layout from "../components/Layout.js"

export default props => (
  <Layout location={props.location}>
    <div>Hello World</div>
  </Layout>
)
```

## Neue Namen

- `boundActionCreators` wurde zu `actions` und `pathContext` zu `pageContext` umbenannt. Diese Namen sind u.a. in `gatsby-node.js` und den Template Dateien zu ändern.

- Die Queries `sizes` und `resolutions` der Bild-Plugins wurden auch umbenannt; die Fragments von `gatsby-image` auch. In Zukunft sind die Namen `fluid` beziehungsweise `fixed` zu nutzen. In der [offiziellen Dokumentation](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-image) findest du alle nötigen Informationen.

## StaticQuery

Wie bereits anfangs erwähnt, gibt es nun die Möglichkeit GraphQL Queries auch in Komponenten auszuführen! Die einzige Einschränkung im Gegensatz zu Queries in `pages` Komponenten ist, dass **keine** Query Variablen genutzt werden können.

Wir wollen nun in den Footer unseres Starters den Zeitpunkt eintragen, an dem die Seite zuletzt geupdated wurde (sprich: Auf Netlify der `gatsby build` Befehl ausgeführt wurde).

Dazu fügst du dem siteMetadata Eintrag eine neue Zeile hinzu:

```js
module.exports = {
  siteMetadata: {
    buildTime: new Date(Date.now()).toLocaleString(),
  },
}
```

Importiere in der Layout Komponente zuerst *StaticQuery* und setze die Komponente vor den ThemeProvider (bzw. die äußerste Komponente der Seite).

```diff
+ import { StaticQuery } from 'gatsby';

const Layout = props => {
  const { children } = props;
  return (
+   <StaticQuery />
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <SEO />
        {children}
        <Footer>
          &copy; 2018 by John Doe. All rights reserved. <br />
          <a href="https://github.com/LeKoArts/gatsby-starter-minimal-blog">GitHub Repository</a>
        </Footer>;
      </React.Fragment>
    </ThemeProvider>
  );
};
```

StaticQuery nimmt die beiden Properties `query` und `render` entgegen (die als *render prop* dienen).

Definiere nun zuerst deine GraphQL Query:

```jsx
<StaticQuery
  query={graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          buildTime
        }
      }
    }
  `}
/>
```

Anschließend fügst du den ursprünglichen Inhalt der Seite in die `render` property ein. Dabei kann man wie gewohnt auf *data* zugreifen:

```jsx
const Layout = props => {
  const { children } = props;
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              buildTime
            }
          }
        }
      `}
      render={data => (
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <SEO />
            {children}
            <Footer>
              &copy; 2018 by John Doe. All rights reserved. <br />
              <a href="https://github.com/LeKoArts/gatsby-starter-minimal-blog">GitHub Repository</a> <br />
              {data.site.siteMetadata.buildTime}
            </Footer>;
          </React.Fragment>
        </ThemeProvider>
      )}
    />
  );
};
```

Mit `data.site.siteMetadata.buildTime` kannst du auf die Daten der Query zugreifen.

## Mehr Informationen

Mit dem Upgrade auf Version 2 haben sich noch einige andere Dinge geändert — mit diesem Blogeintrag wollte ich die wichtigsten Sachen abdecken. Deshalb empfehle ich einen Blick in das [offizielle Migration Dokument](https://next.gatsbyjs.org/docs/migrating-from-v1-to-v2/) zu werfen, wenn du bspw. auch Änderungen an Babel vorgenommen hast oder deine Bilder per ID filterst.