import React from 'react';
import Helmet from 'react-helmet';
import config from '../../data/SiteConfig';
import BlogListing from '../components/BlogListing/BlogListing';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ContainerBig from '../components/Container/ContainerBig';

const Blog = props => {
  const postEdges = props.data.allMarkdownRemark.edges;
  return (
    <div className="container blog-container">
      <Helmet title={`Blog | ${config.siteTitle}`} />
      <Header slim subTitle="Ein bunter Mix aus Überlegungen, Tutorials und Neuigkeiten">
        Blog
      </Header>
      <ContainerBig>
        <BlogListing postEdges={postEdges} />
      </ContainerBig>
      <Footer />
    </div>
  );
};

export default Blog;

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
            date
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
