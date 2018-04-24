import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import config from '../../config/website';
import ItemBlog from '../components/ItemBlog';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Container from '../components/Container';

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
  <React.Fragment>
    <Helmet title={`Blog | ${config.siteTitle}`} />
    <Header slim subtitle="Ein bunter Mix aus Überlegungen, Tutorials und Neuigkeiten">
      Blog
    </Header>
    <Container type="big">
      <Base>
        {edges.map(post => (
          <ItemBlog
            key={post.node.frontmatter.title}
            path={post.node.fields.slug}
            cover={post.node.frontmatter.cover.childImageSharp.sizes}
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
  </React.Fragment>
);

export default Blog;

Blog.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }),
};

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { sourceInstanceName: { eq: "posts" } } }
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
                sizes(maxWidth: 900, quality: 85, traceSVG: { color: "#2B2B2F" }) {
                  ...GatsbyImageSharpSizes_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
