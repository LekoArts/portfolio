import React from 'react';
import Helmet from 'react-helmet';
import config from '../../data/SiteConfig';
import ProjectListing from '../components/ProjectListing/ProjectListing';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ContainerBig from '../components/Container/ContainerBig';

const Projekte = (props) => {
  const postEdges = props.data.allMarkdownRemark.edges;
  return (
    <div className="container projekte-container">
      <Helmet title={`Projekte | ${config.siteTitle}`} />
      <Header slim subTitle="Spezialisiert auf Grafik- und Webdesign, kombiniere ich minimalistisches Design mit modernen Webtechniken">
          Projekte
      </Header>
      <ContainerBig>
        <ProjectListing postEdges={postEdges} />
      </ContainerBig>
      <Footer />
    </div>
  );
};

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
          frontmatter {
            title
            customer
            cover {
              childImageSharp {
                sizes(maxWidth: 900, quality: 90, traceSVG: { color: "#2B2B2F" }) {
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
