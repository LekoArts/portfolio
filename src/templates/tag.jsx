import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import config from '../../config/website';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Container from '../components/Container';
import ItemTagCategory from '../components/ItemTagCategory';

const Tag = ({
  pathContext: { tag },
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <React.Fragment>
    <Helmet title={`${tag} | ${config.siteTitle}`} />
    <Header slim subtitle={`Auflistung aller Beiträge, die mit "${tag}" markiert wurden`}>
      {tag}
    </Header>
    <Container>
      {edges.map(edge => (
        <ItemTagCategory
          key={edge.node.frontmatter.title}
          title={edge.node.frontmatter.title}
          category={edge.node.frontmatter.category}
          path={edge.node.fields.slug}
          date={edge.node.frontmatter.date}
          timeToRead={edge.node.timeToRead}
          tags={edge.node.frontmatter.tags}
          excerpt={edge.node.excerpt}
        />
      ))}
    </Container>
    <Footer />
  </React.Fragment>
);

export default Tag;

Tag.propTypes = {
  pathContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }),
};

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
          excerpt(pruneLength: 300)
          timeToRead
          frontmatter {
            title
            tags
            date(formatString: "DD. MMMM YYYY", locale: "de")
            category
          }
        }
      }
    }
  }
`;
