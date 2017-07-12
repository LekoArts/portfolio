import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import { Container, Layout } from 'elements';
import config from '../../config/website';
import ItemBlog from '../components/ItemBlog';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Base = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
`;

const Blog = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout>
    <Helmet title={`Blog | ${config.siteTitle}`} />
    <Header title="Blog">Ein bunter Mix aus Überlegungen, Tutorials und Neuigkeiten</Header>
    <Container type="big">
      <Base>
        {edges.map(post => (
          <ItemBlog
            key={post.node.frontmatter.title}
            path={post.node.fields.slug}
            cover={post.node.frontmatter.cover.childImageSharp.fluid}
            title={post.node.frontmatter.title}
            date={post.node.frontmatter.date}
            category={post.node.frontmatter.category}
            timeToRead={post.node.timeToRead}
            excerpt={post.node.excerpt}
            tags={post.node.frontmatter.tags}
          />
        ))}
      </Base>
    </Container>
    <Footer />
  </Layout>
);

export default Blog;

Blog.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { sourceInstanceName: { eq: "blog" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 300)
          timeToRead
          frontmatter {
            title
            date(formatString: "DD. MMMM YYYY", locale: "de")
            category
            tags
            cover {
              childImageSharp {
                fluid(maxWidth: 900, quality: 85, traceSVG: { color: "#2B2B2F" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
