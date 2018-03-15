---
title: "styled-components in Gatsby nutzen"
cover: "./styled_components_gatsby.jpg"
date: "2018-03-13"
category: "Tutorial"
tags:
    - Gatsby
    - styled-components
    - React
    - GRB-Reihe
---

Nach dem [ersten](/blog/ultra-schnellen-blog-mit-react-und-gatsby-erstellen) und [zweiten](/blog/react-code-styling-mit-es-lint-und-prettier) Teil meiner Gatsby-Reihe soll es nun um [styled-components](https://www.styled-components.com/) gehen. Die CSS-in-JS Library erfreut sich großer Beliebtheit unter React Entwicklern und ist momentan auch mein Favorit.

Aber wieso eine CSS-in-JS Library nutzen und im speziellen styled-components? CSS-in-JS verhindert unter anderem die Überschneidung von Klassennamen, sprich das CSS Styling ist sehr eng mit den React Komponenten verknüpft, da sich das CSS nur auf diese bezieht - und spinnt somit die Komponenten-Denkweise konsequent weiter. styled-components mag ich persönlich am meisten, da ich normale CSS Syntax nutzen kann und mich nicht umgewöhnen muss.

Ziel dieses Tutorials ist es unseren bestehenden Gatsby-Blog mit styled-components zu erweitern, für unsere Komponenten den `ThemeProvider` für einen einheitlichen Look zu nutzen und die kleine Hilfsbibliothekt `polished` für unsere Farben zu nutzen. Das Endresultat des Tutorials findest du im Branch [tutorial-part-three](https://github.com/LeKoArts/gatsby-starter-minimal-blog/tree/tutorial-part-three).
Ich möchte mich in diesem Tutorial auf die meiner Meinung nach wichtigsten Dinge, die man zum Einstieg wissen sollte, beschränken und für die unzählig weiteren Features auf die Dokumentation verweisen.

## Installation

Wenn man sich einmal an SCSS-Helferlein wie `darken` oder `lighten` gewöhnt hat, möchte man diese nicht mehr missen. Deshalb installieren wir zusätzlich noch die kleine Bibliothek [polished](https://polished.js.org/docs/).

```bash
npm install styled-components gatsby-plugin-styled-components polished
```

Deine `gatsby-config.js` Datei erweiterst du anschließend um diesen Eintrag:

```JS
// In deiner gatsby-config.js
module.exports = {
    plugins: [
        ...,
        'gatsby-plugin-styled-components',
        ...
    ]
}
```

## Theming

styled-components stellt die Wrapper-Komponente `<ThemeProvider>` bereit, die über die Context API von React das Theme an alle inneren Komponenten weitergibt. Somit können wir in allen Komponenten auf unsere Theme-Variablen zugreifen und in unseren CSS Eigenschaften nutzen.
Erstelle hierfür zuerst im Root-Verzeichnis des Projekts den Ordner `config` und lege die Datei `Theme.js` dort ab:

```JS
const theme = {
    primary: '#d02e77',
    bg: 'white',
    dark: 'rgba(0, 0, 0, 0.9)',
    default: 'rgba(0, 0, 0, 0.7)',
    light: 'rgba(0, 0, 0, 0.6)',
    ultraLight: 'rgba(0, 0, 0, 0.25)',
    transitionTime: '0.5s',
    fontSmall: '0.9rem',
};

export default theme;
```

`layouts/index.js` umschließt alle Seiten und Templates unseres Gatsby Projekts, weshalb wir hier unser Theme einbinden. Ändere die Datei wie folgt ab:

```jsx
/* eslint no-unused-expressions:0 */

import React from 'react';
import Helmet from 'react-helmet';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import theme from '../../config/Theme';
import { media } from '../utils/media';

injectGlobal`
  ::selection {
    color: ${theme.bg};
    background: ${theme.primary};
  }
  body {
    background: ${theme.bg};
    color: ${theme.default};
    @media ${media.phone} {
      font-size: 14px;
    }
  }
  a {
    color: ${theme.dark};
    text-decoration: none;
    transition: all ${theme.transitionTime};
  }
  a:hover {
    color: ${theme.primary};
  }
  h1, h2, h3, h4 {
    color: ${theme.dark};
  }
  blockquote {
    font-style: italic;
    position: relative;
  }
  blockquote:before {
    content: "";
    position: absolute;
    background: ${theme.primary};
    height: 100%;
    width: 6px;
    margin-left: -1.6rem;
  }
  label {
    margin-bottom: .5rem;
    color: ${theme.dark};
  }
  input, textarea {
    border-radius: .5rem;
    border: none;
    background: rgba(0, 0, 0, 0.05);
    padding: .25rem 1rem;
    &:focus {
      outline: none;
    }
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 3rem 0;
`;

const TemplateWrapper = props => {
  const { children } = props;
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Helmet
        title="Gatsby Starter Minimal Blog"
        meta={[
            { name: 'description', content: 'Gatsby Starter Minimal Blog' },
            { name: 'keywords', content: 'Gatsby, Starter, Minimal, Blog' },
        ]}
        />
        {children()}
        <Footer>
          &copy; 2018 by John Doe. All rights reserved. <br />
          <a href="https://github.com/LeKoArts/gatsby-starter-minimal-blog">GitHub Repository</a>
        </Footer>
      </div>
    </ThemeProvider>
  );
};

export default TemplateWrapper;
```

styled-components nutzt die sog. [tagged template literals](https://wesbos.com/tagged-template-literals/), die einen Funktionsaufruf darstellen und dabei innerhalb des *template literals* die Argumente annimmt. In der Praxis bedeutet das: Nach den Backticks kannst du ganz normales CSS schreiben. Im Hintergrund erstellt styled-components normale React Komponenten und hängt das Styling dran.
Die [Dokumentation](https://www.styled-components.com/docs/basics#getting-started) bietet hierfür auch einen super Einstieg.

In der Layout Datei nutzen wir zuerst `injectGlobal` um unabhängig von einer Komponente das allgemeine Styling zu definieren. Da `injectGlobal` nicht auf das Theme des `<ThemeProvider>` zugreifen kann, nutzen wir die Variablen im "klassichen" Sinne. In den nächsten Dateien wirst du sehen, wie man normalerweise auf das Theme zugreifen kann. Die bereits mehrfach angesprochene `<ThemeProvider>` Komponente solltest du als äußerste Komponente setzen.

## Media Queries

Natürlich lassen sich auch Media Queries nutzen - die offizielle Dokumentation bietet dazu auch Hilfestellung. Genauso wie beim Theme können wir mit `${media.phone}` beispielsweise auf die Größe des mobilen Breakpoints zugreifen. Erstelle hierzu im `utils` Ordner eine Datei namens `media.js` mit folgendem Inhalt:

```JS
const sizes = {
  tablet: '1200px',
  phone: '600px',
};

export const media = {
  tablet: `(max-width: ${sizes.tablet})`,
  phone: `(max-width: ${sizes.phone})`,
};
```

## polished & props

Anhand der `/templates/post.js` Datei möchte ich nun noch zeigen, wie *props* in styled-components genutzt und Funktionalitäten mit *polished* nachgerüstet werden können.

Zuerst importieren wir wieder unsere gewünschten Packages:

```JS
import styled from 'styled-components';
import { darken, lighten } from 'polished';
import { media } from '../utils/media';
```

Die ehemals `.blogPost` Klasse aus der `post.module.css` ersetzen wir nun hiermit direkt in der `post.js` Datei (die CSS Datei kann selbstverständlich gelöscht werden):

```jsx
const Content = styled.article`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 2rem 4rem;
  background-color: ${props => props.theme.bg};
  z-index: 9000;
  margin-top: -3rem;
  @media ${media.tablet} {
    padding: 3rem 3rem;
  }
  @media ${media.phone} {
    padding: 2rem 1.5rem;
  }
`;
```

Wie du nun bereits weißt erstellt styled-components im Hintergrund aus dem `Content` eine React Komponente - und diese kann auch *props* engegennehmen. Innerhalb der zwei Backticks kannst du eine Funktion nutzen, die die *props* an das *template literal* weitergeben. Wir greifen mit `${props => props.theme.bg}` auf die *bg* Farbe aus unserem Theme zurück. Wenn du an deiner Komponente noch etwas hinzufügt, z.B. `<Content color="black">...</Content>` kannst du mit `${props => props.color}` darauf zugreifen.

Auch sind *bedingte (ternäre) Operatoren* möglich innerhalb des Ausdrucks. Wenn du bspw. die Komponente abhängig von einer property stylen willst, kannst du das wie folgt tun (Wenn `<Content slim />` erfüllt ist, beträgt die Höhe nur 100px):

```jsx
const Content = styled.article`
  height: ${props => props.slim ? '100px' : '200px'};
`;
```

Auch sind logische Operatoren wie das *logische UND* und *logische ODER* möglich. In diesem Beispiel verschwindet die Eigenschaft, wenn das *prop* nicht vorhanden ist (`<Content rounded />`):

```jsx
const Content = styled.article`
  ${props => props.rounded && 'border-radius: 1rem'};
`;
```

Den Header des Blogposts wollen wir auch neu gestalten und legen deshalb die Komponente wie folgt an:

```jsx
const Header = styled.header`
  background: linear-gradient(
    45deg,
    ${props => darken(0.1, props.theme.primary)},
    ${props => lighten(0.1, props.theme.primary)}
  );
  grid-column: 1 / -1;
  margin-left: -1rem;
  margin-right: -1rem;
  padding: 2rem 2rem 5rem 2rem;
  box-shadow: inset 0px -10px 30px 0px rgba(0, 0, 0, 0.1);
`;
```

Genauso kannst du auch die anderen Funktionen von *polished* nutzen.

## Wrap-Up

Ich denke, dass du nach diesem Tutorial die Basics von styled-components verstanden hast und tiefer in dein Projekt und die schöne [Dokumentation](https://www.styled-components.com/docs) einsteigen kannst.

Es wäre ein bisschen langweilig nun alle weiteren Änderungen der anderen Dateien zu zeigen, nur um wieder und wieder das Gleiche zu wiederholen. Stattdessen fordere ich dich dazu auf, den [part-three](https://github.com/LeKoArts/gatsby-starter-minimal-blog/tree/tutorial-part-three) Branch aufzurufen und anhand der Commits meine Änderungen nachzuvollziehen. Im Grunde habe ich immer erst das Styling aus der CSS-Datei übertragen und dann je nach Bedarf das Theme eingebunden. Auch wirst du sehen, wie ich *props* in externen Komponenten nutze.

**Hinweis:** Ich habe neben der reinen Umstellung von CSS-Modules auf styled-components auch ein paar Dinge am Layout geändert und neue Komponenten hinzugefügt.

In den nächsten Tutorials soll es um ein Kontaktformular, Kategorien, einfachere Konfiguration + SEO und ein "vorheriges/nächstes" Feature gehen. Den aktuellen Stand kannst du immer auf der Live-Seite [minimal-blog.netlify.com](https://minimal-blog.netlify.com/) sehen.