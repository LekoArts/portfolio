import React from "react";
import ProjectListing from "../components/ProjectListing/ProjectListing";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Container from "../components/Container/Container";

export default class Projekte extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className="container">
        <Header slim>
          Projekte
        </Header>
        <Container>
          <ProjectListing postEdges={postEdges} />
        </Container>
        <Footer />
      </div>
    );
  }
}

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
            date
            customer
            cover {
              childImageSharp {
                resize(width: 1200) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;
