import React from "react";
import Helmet from "react-helmet";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class Projekte extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className="projekte-container">
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <PostListing postEdges={postEdges} />
      </div>
    );
  }
}

export default Projekte;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query ProjectsQuery {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { sourceInstanceName: { eq: "projects" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            date
          }
        }
      }
    }
  }
`;
