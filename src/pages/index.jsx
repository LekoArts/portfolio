/* eslint max-len: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import styled from 'react-emotion';
import { Container, Layout } from 'elements';
import Footer from '../components/Footer';
import FeaturedProject from '../components/FeaturedProject';
import FeaturedPost from '../components/FeaturedPost';
import Header from '../components/Header';
import Button from '../components/Button';

const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row;
  margin-top: -10rem;
`;

const PostsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 10rem;
`;

const Text = styled.p`
  text-align: center;
  font-family: ${props => props.theme.fontFamily.heading};
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.5rem;
  max-width: 850px;
  margin: 5rem auto;
  text-shadow: ${props => props.theme.shadow.text.big};
`;

const Index = ({
  data: {
    projects: { edges: projectEdges },
    posts: { edges: postEdges },
  },
}) => (
  <Layout>
    <Header
      big
      title={
        <React.Fragment>
          Kommunikationsdesigner & <br /> Front-End Entwickler
        </React.Fragment>
      }
    />
    <Container type="big">
      <ProjectsWrapper>
        {projectEdges.map(project => (
          <FeaturedProject
            key={project.node.frontmatter.title}
            cover={project.node.frontmatter.cover.childImageSharp.fluid}
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
            cover={post.node.frontmatter.cover.childImageSharp.fluid}
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
  </Layout>
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
  }).isRequired,
};

export const pageQuery = graphql`
  query IndexQuery {
    projects: allMarkdownRemark(
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { sourceInstanceName: { eq: "projekte" } } }
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
                fluid(maxWidth: 1000, quality: 90, traceSVG: { color: "#2B2B2F" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
      filter: { fields: { sourceInstanceName: { eq: "blog" } } }
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
                fluid(maxWidth: 800, quality: 90, traceSVG: { color: "#2B2B2F" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
