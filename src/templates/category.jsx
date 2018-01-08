import React from 'react';
import Helmet from 'react-helmet';
import config from '../../data/SiteConfig';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Container from '../components/Container/Container';
import CatPostListing from '../components/CatPostListing/CatPostListing';

const CategoryTemplate = (props) => {
  const { category } = props.pathContext;
  const postEdges = props.data.allMarkdownRemark.edges;
  return (
    <div className="container category-container">
      <Helmet title={`${category} | ${config.siteTitle}`} />
      <Header slim subTitle={`Auflistung aller Beiträge, die der Kategorie "${category}" angehören`}>
        {category}
      </Header>
      <Container>
        <CatPostListing postEdges={postEdges} />
      </Container>
      <Footer />
    </div>
  );
};

export default CategoryTemplate;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          excerpt (pruneLength: 300)
          timeToRead
          frontmatter {
            title
            tags
            date
            category
          }
        }
      }
    }
  }
`;
