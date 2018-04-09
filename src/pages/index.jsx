/* eslint max-len: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'react-emotion';
import Footer from '../components/Footer';
import Container from '../components/Container';
import FeaturedProject from '../components/FeaturedProject';
import FeaturedPost from '../components/FeaturedPost';
import Header from '../components/Header';
import Button from '../components/Button';

const ProjectsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: -10rem;
`;

const PostsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 15rem;
`;

const Text = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.5rem;
  max-width: 850px;
  margin: 5rem auto;
  text-shadow: 0 15px 20px rgba(0, 0, 0, 0.13);
`;

const Index = ({ data: { projects: { edges: projectEdges }, posts: { edges: postEdges } } }) => (
  <div className="container">
    <Header>
      Kommunikationsdesigner & <br /> Front-End Entwickler
    </Header>
    <Container big>
      <ProjectsWrapper>
        {projectEdges.map(project => (
          <FeaturedProject
            key={project.node.frontmatter.title}
            cover={project.node.frontmatter.cover.childImageSharp.sizes}
            customer={project.node.frontmatter.customer}
            path={project.node.fields.slug}
            title={project.node.frontmatter.title}
          />
        ))}
      </ProjectsWrapper>
    </Container>
    <Container>
      <Text>
        Ich entwerfe, gestalte und entwickle plattformübergreifende Design-Konzepte, um das volle Potential aus deiner
        Marke herauszuholen. <br />
        <Link to="/projekte">
          <Button type="primary">Projekte</Button>
        </Link>
      </Text>
    </Container>
    <Container>
      <PostsWrapper>
        {postEdges.map(post => (
          <FeaturedPost
            key={post.node.frontmatter.title}
            cover={post.node.frontmatter.cover.childImageSharp.sizes}
            date={post.node.frontmatter.date}
            path={post.node.fields.slug}
            title={post.node.frontmatter.title}
            category={post.node.frontmatter.category}
          />
        ))}
      </PostsWrapper>
      <Text>
        Mit ebenso viel Leidenschaft schreibe ich über Design- und Coding-Themen und gebe mein Wissen in Form von
        Tutorials weiter. <br />
        <Link to="/blog">
          <Button type="secondary">Blog</Button>
        </Link>
      </Text>
    </Container>
    <Footer />
  </div>
);

export default Index;

Index.propTypes = {
  data: PropTypes.shape({
    projects: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
    posts: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }),
};

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    projects: allMarkdownRemark(
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { sourceInstanceName: { eq: "projects" } } }
    ) {
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
                sizes(maxWidth: 1000, quality: 90, traceSVG: { color: "#2B2B2F" }) {
                  ...GatsbyImageSharpSizes_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
    posts: allMarkdownRemark(
      limit: 2
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { sourceInstanceName: { eq: "posts" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            cover {
              childImageSharp {
                sizes(maxWidth: 800, quality: 90, traceSVG: { color: "#2B2B2F" }) {
                  ...GatsbyImageSharpSizes_withWebp_tracedSVG
                }
              }
            }
            date(formatString: "DD.MM.YYYY")
            category
          }
        }
      }
    }
  }
`;
