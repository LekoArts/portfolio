import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import BlogListing from "../components/BlogListing/BlogListing";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ContainerBig from "../components/Container/ContainerBig";

export default class Blog extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
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
  }
}

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
          excerpt (pruneLength: 300)
          timeToRead
          frontmatter {
            title
            date
            category
            tags
            cover {
              childImageSharp {
                sizes(maxWidth: 1200, quality: 95) {
                  base64
                  aspectRatio
                  src
                  srcSet
                  sizes
                  originalImg
                  originalName
                }
              }
            }
          }
        }
      }
    }
  }
`;
