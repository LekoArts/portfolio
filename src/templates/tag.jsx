import React from 'react';
import Helmet from 'react-helmet';
import config from '../../data/SiteConfig';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Container from '../components/Container/Container';
import CatPostListing from '../components/CatPostListing/CatPostListing';

const TagTemplate = (props) => {
  const { tag } = props.pathContext;
  const postEdges = props.data.allMarkdownRemark.edges;
  return (
    <div className="tag-container">
      <Helmet title={`${tag} | ${config.siteTitle}`} />
      <Header slim subTitle={`Auflistung aller Beiträge, die mit "${tag}" markiert wurden`}>
        {tag}
      </Header>
      <Container>
        <CatPostListing postEdges={postEdges} />
      </Container>
      <Footer />
    </div>
  );
};

export default TagTemplate;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
            date(formatString: "DD.MM.YYYY")
            category
          }
        }
      }
    }
  }
`;
