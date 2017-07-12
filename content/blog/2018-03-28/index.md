---
title: "Kategorien & Tags zu Gatsby hinzufügen"
cover: "./kategorien_tags_gatsby.jpg"
date: "2018-03-28"
category: "Tutorial"
tags:
    - Gatsby
    - GRB-Reihe
---

Um auch langfristig den Überblick über alle Blogposts zu behalten, werden diese gerne in Kategorien eingeordnet und mit Stichwörtern (Tags) verschlagwortet. Genau das will ich in diesem Tutorial erklären: Die Einträge um Kategorien erweitern, diese Informationen im Beitrag anzeigen und Übersichsseiten zu einzelnen und allen Kategorien automatisch erstellen. Die Handhabe mit Tags ist analog dazu.

Wie bei allen Teilen meiner [GRB-Reihe](/tags/grb-reihe) kannst du bereits das Endresultat im Branch [tutorial-part-four](https://github.com/LeKoArts/gatsby-starter-minimal-blog/tree/tutorial-part-four) sehen und vielleicht anhand der Commits dem Tutorial noch besser folgen. Ohne groß weiter rumzuquatschen: Los gehts!

## Blogposts erweitern

Damit Gatsby überhaupt später Kategorien finden und verarbeiten kann, musst du zuerst deine Einträge komplett (also auch rückwirkend) um noch eine weitere Zeile in der sog. *Frontmatter* erweitern:

```md
---
date: "2018-01-01"
title: "Scittle Luo"
category: "General"
---
```

Wenn du nach dem Tutorial selbständig Stichwörter hinzufügen willst, solltest du diese dann so eintragen:

```md
tags:
- Cooler Tag
- Schöner Abend
```

## Detailseite gestalten

Der User wird am Ende auf die jeweilige Kategorie klicken und sich alle Beiträge zu dieser anzeigen lassen können. Diese Unterseite soll dem Blogpost sehr ähnlich sein, weshalb du im Prinzip die Struktur von `templates/post.js` übernehmen kannst. Dem Komponenten-Gedanken folgend lagern wir den Header (aus *post.js*) noch in eine eigene Komponente aus, da dieser nun in mehreren Dateien Verwendung finden wird.
Schau dir dazu [diesen Commit](https://github.com/LeKoArts/gatsby-starter-minimal-blog/commit/be0adf3a79317ebb98cc4063ed6b8b894e5a6c9f) an.

Erstelle die Datei `templates/category.js`:

```jsx
import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Wrapper from '../components/Wrapper';
import Header from '../components/Header';
import Subline from '../components/Subline';
import Article from '../components/Article';
import SectionTitle from '../components/SectionTitle';
import { media } from '../utils/media';

const Content = styled.div`
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

const Category = props => {
  const { category } = props.pathContext;
  const { edges, totalCount } = props.data.allMarkdownRemark;
  const subline = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${category}"`;

  return (
    <Wrapper>
      <Helmet title={`${category} | Gatsby Starter - Minimal Blog`} />
      <Header>
        <Link to="/">Gatsby Starter - Minimal Blog</Link>
      </Header>
      <Content>
        <SectionTitle>Category &ndash; {category}</SectionTitle>
        <Subline sectionTitle>
          {subline} (See <Link to="/categories">all categories</Link>)
        </Subline>
        {edges.map(post => (
          <Article
            title={post.node.frontmatter.title}
            date={post.node.frontmatter.date}
            excerpt={post.node.excerpt}
            timeToRead={post.node.timeToRead}
            slug={post.node.fields.slug}
            category={post.node.frontmatter.category}
            key={post.node.fields.slug}
          />
        ))}
      </Content>
    </Wrapper>
  );
};

export default Category;

/* eslint no-undef: off */
export const postQuery = graphql`
  query CategoryPage($category: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD.MM.YYYY")
            category
          }
          fields {
            slug
          }
          excerpt(pruneLength: 200)
          timeToRead
        }
      }
    }
  }
`;
```

Noch einmal ein paar Zeilen im Detail ...

```graphql
query CategoryPage($category: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD.MM.YYYY")
            category
          }
        }
      }
    }
  }
 ```
 
Die Variable `$category` wird aus dem *Context* (gatby-node.js) definiert und in der Query dazu genutzt, nur diejenigen Blogartikel zu finden, die dieser Kategorie zuzuordnen sind. Wie üblich kann man dann alle benötigten Informationen beziehen - dieses mal aber auch `totalCount`, das uns die Anzahl der Blogartikel liefert.

Das Ergebnis wird dann in Variablen festgehalten. Wenn nur ein Beitrag zu dieser Kategorie zu finden ist, wird die Singularform im Satz verwendet (subline).
 
 ```jsx
const { edges, totalCount } = props.data.allMarkdownRemark;
const subline = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${category}"`;
```

## Übersichtsseite erstellen

Natürlich ist auch eine Auflistung aller Kategorien sehr nützlich, weshalb du die Datei `pages/categories.js` erstellen und mit diesem Inhalt füllen solltest:

```jsx
import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import styled from 'styled-components';
import kebabCase from 'lodash/kebabCase';
import Wrapper from '../components/Wrapper';
import Header from '../components/Header';
import SectionTitle from '../components/SectionTitle';
import { media } from '../utils/media';

const Content = styled.div`
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

const Title = styled.h3`
  position: relative;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  margin-bottom: 0.75rem;
`;

const Category = props => {
  const { group } = props.data.allMarkdownRemark;

  return (
    <Wrapper>
      <Helmet title="Categories | Gatsby Starter - Minimal Blog" />
      <Header>
        <Link to="/">Gatsby Starter - Minimal Blog</Link>
      </Header>
      <Content>
        <SectionTitle>Categories</SectionTitle>
        {group.map(category => (
          <Title>
            <Link to={`/categories/${kebabCase(category.fieldValue)}`}>{category.fieldValue}</Link> ({
              category.totalCount
            })
          </Title>
        ))}
      </Content>
    </Wrapper>
  );
};

export default Category;

/* eslint no-undef: off */
export const postQuery = graphql`
  query CategoriesPage {
    allMarkdownRemark {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`;
```

Besonders das `group` ist hier interessant, da es Gatsby-spezifisch ist und alle Werte (Hier Kategorien, da `frontmatter__category`) alphabetisch sortiert ausgegeben werden (inklusive Anzahl). Es wird zwar nicht direk der Pfad dazu ausgegeben, allerdings kannst du mit lodashs [kebabCase](https://lodash.com/docs#kebabCase) Funktion den internen Pfad selber bauen (da im gesamten Projekt die Links dieses Format haben).

## gatsby-node.js anpassen

Wie du bereits aus dem [ersten](/blog/ultra-schnellen-blog-mit-react-und-gatsby-erstellen) Teil weißt, werden mithilfe der `createPages` Funktion in `gatsby-node.js` die Templates genutzt, um Seiten zu erstellen. Neben den Blogposts sollen nun auch hier die Kategorie-Seiten generiert werden.

Definiere hierzu zuerst das neue Template unter dem des Blogposts:

```jsx
const postPage = path.resolve('src/templates/post.js');
const categoryPage = path.resolve('src/templates/category.js');
```

In der GraphQL Query brauchst du nun zusätzlich zum Pfad auch die Kategorie aus der Frontmatter:

```graphql
{
  posts: allMarkdownRemark {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
            category
        }
      }
    }
  }
}
```

Die Seiten selber, inklusive *Context* und Pfad (Hier auch wieder mit *kebabCase*) erstellst du so:

```jsx
// Unterhalb von posts.forEach ...

let categories = [];

_.each(posts, edge => {
  if (_.get(edge, 'node.frontmatter.category')) {
    categories = categories.concat(edge.node.frontmatter.category);
  }
});

categories = _.uniq(categories);

categories.forEach(category => {
  createPage({
    path: `/categories/${_.kebabCase(category)}`,
    component: categoryPage,
    context: {
      category,
    },
  });
});
```

Damit ist die Hauptarbeit geschafft und der wichtigste Teil dieses Tutorials abgeschlossen!

## Weitere Anpassungen und Abschluss

Im Kontext des Blogs/Themes sind abschließend noch ein paar Änderungen nötig, sodass die Kategorien angezeigt und verlinkt werden. So kannst du bspw. in der Article Komponente die Kategorie wie folgt nutzen (Alle Änderungen kannst du in [diesem Commit](https://github.com/LeKoArts/gatsby-starter-minimal-blog/commit/211fc370fe9ae05fafa98dfdf71b15aa117d8700) einsehen):

```jsx
<Link to={`/categories/${kebabCase(category)}`}>{category}</Link>
```

Vielen Dank fürs Lesen! Wie bereits zu Beginn gesagt ist die Implementierung der Stichworte (Tags) analog zu dieser Anleitung und kann für dich eine gute Übung sein, ob du die Vorgehensweise dahinter verstanden hast.  
In den nächsten Tutorials soll es um ein Kontaktformular, einfachere Konfiguration + SEO und ein "vorheriges/nächstes" Feature gehen. Den aktuellen Stand kannst du immer auf der Live-Seite [minimal-blog.netlify.com](https://minimal-blog.netlify.com/) sehen.