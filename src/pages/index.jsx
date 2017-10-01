import React from "react";
import Helmet from "react-helmet";
import SEO from "../components/SEO/SEO";
import Container from "../components/Container/Container";
import ContainerBig from "../components/Container/ContainerBig";
import HomeHeader from "../components/Header/HomeHeader";
import ProjectFeatureListing from "../components/ProjectFeatureListing/ProjectFeatureListing";
import Button from "../components/Button/Button";
import config from "../../data/SiteConfig";
import styles from "./index.module.scss";
import "../utils/_helper.scss";

class Index extends React.Component {
  render() {
    const projectEdges = this.props.data.projects.edges;
    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <SEO />
        <HomeHeader />
        <ContainerBig>
          <ProjectFeatureListing projectEdges={projectEdges} />
        </ContainerBig>
        <Container styleName="align-center">
          <p className={styles.text}>
            Ich entwerfe, gestalte und entwickle plattformübergreifende Design-Konzepte, um das volle Potential aus Ihrer Marke herauszuholen.
          </p>
          <Button blue text="Projekte" />
        </Container>
        <Container styleName="align-center">
          <p>Blog Posts</p>
          <p className={styles.text}>
            Mit ebenso viel Leidenschaft schreibe ich über Themen, die mich aktuell beschäftigen, und gebe mein Wissen in Form von Tutorials weiter.
          </p>
          <Button orange text="Blog" />
        </Container>
      </div>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    projects: allMarkdownRemark(limit: 3, sort: {fields: [frontmatter___date], order: DESC}, filter: {fields: {sourceInstanceName: {eq: "projects"}}}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            customer
            title
            cover {
              childImageSharp {
                resize(height: 700) {
                  src
                }
              }
            }
            color
          }
        }
      }
    }
    posts: allMarkdownRemark(limit: 3, sort: {fields: [frontmatter___date], order: DESC}, filter: {fields: {sourceInstanceName: {eq: "posts"}}}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            cover {
              absolutePath
            }
            date
            category
          }
        }
      }
    }
  }
`;
