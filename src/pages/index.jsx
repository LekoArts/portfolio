/* eslint max-len: 0 */

import React from 'react';
import Link from 'gatsby-link';
import { Fade } from 'react-reveal';
import Footer from '../components/Footer/Footer';
import Container from '../components/Container/Container';
import ContainerBig from '../components/Container/ContainerBig';
import Header from '../components/Header/Header';
import ProjectFeatureListing from '../components/ProjectFeatureListing/ProjectFeatureListing';
import BlogFeatureListing from '../components/BlogFeatureListing/BlogFeatureListing';
import Button from '../components/Button/Button';
import styles from './index.module.scss';

const Index = (props) => {
  const projectEdges = props.data.projects.edges;
  const postEdges = props.data.posts.edges;
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
};

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
                sizes(maxWidth: 1200, quality: 95, traceSVG: { color: "#2B2B2F" }) {
                  ...GatsbyImageSharpSizes_withWebp_tracedSVG
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
