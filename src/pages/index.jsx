import React from "react";
import Link from "gatsby-link";
import { Fade } from "react-reveal";
import Footer from "../components/Footer/Footer";
import Container from "../components/Container/Container";
import ContainerBig from "../components/Container/ContainerBig";
import Header from "../components/Header/Header";
import ProjectFeatureListing from "../components/ProjectFeatureListing/ProjectFeatureListing";
import BlogFeatureListing from "../components/BlogFeatureListing/BlogFeatureListing";
import Button from "../components/Button/Button";
import styles from "./index.module.scss";

export default class Index extends React.Component {
  render() {
    const projectEdges = this.props.data.projects.edges;
    const postEdges = this.props.data.posts.edges;
    return (
      <div className="container">
        <Header>
          Kommunikationsdesigner & <br /> Front-End Entwickler
        </Header>
        <ContainerBig>
          <ProjectFeatureListing projectEdges={projectEdges} />
        </ContainerBig>
        <Container>
          <Fade up>
          <p className={styles.text}>
            Ich entwerfe, gestalte und entwickle plattformübergreifende Design-Konzepte, um das volle Potential aus deiner Marke herauszuholen. <br />
            <Link to="/projekte">
              <Button blue>
                Projekte
              </Button>
            </Link>
          </p>
          </Fade>
        </Container>
        <Container>
          <BlogFeatureListing postEdges={postEdges} />
          <Fade up>
          <p className={styles.text}>
            Mit ebenso viel Leidenschaft schreibe ich über Design- und Coding-Themen und gebe mein Wissen in Form von Tutorials weiter. <br />
            <Link to="/blog">
              <Button orange>
                Blog
              </Button>
            </Link>
          </p>
          </Fade>
        </Container>
        <Footer />
      </div>
    );
  }
}

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
                resize(width: 1200) {
                  src
                }
              }
            }
          }
        }
      }
    }
    posts: allMarkdownRemark(limit: 2, sort: {fields: [frontmatter___date], order: DESC}, filter: {fields: {sourceInstanceName: {eq: "posts"}}}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            cover {
              childImageSharp {
                resize(width: 800) {
                  src
                }
              }
            }
            date
            category
          }
        }
      }
    }
  }
`;
