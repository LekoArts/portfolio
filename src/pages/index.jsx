import React from "react";
import Helmet from "react-helmet";
import SEO from "../components/SEO/SEO";
import HomeHeader from "../components/Header/HomeHeader";
import config from "../../data/SiteConfig";

class Index extends React.Component {
  render() {
    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <SEO />
        <HomeHeader />
        <h1>Test</h1>
      </div>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
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
            cover
            date
          }
        }
      }
    }
  }
`;
