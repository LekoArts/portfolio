import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'react-emotion';
import Helmet from 'react-helmet';
import config from '../../config/website';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Container from '../components/Container';
import ItemTagCategory from '../components/ItemTagCategory';

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.white.light};
`;

const Tag = ({
  pathContext: { tag },
  data: {
    allMarkdownRemark: { edges, totalCount },
  },
}) => (
  <React.Fragment>
    <Helmet title={`${tag} | ${config.siteTitle}`} />
    <Header title={tag}>
      {totalCount} {totalCount === 1 ? 'Beitrag' : 'Beiträge'} wurde{totalCount === 1 ? '' : 'n'} mit "{tag}" markiert{' '}
      <br />
      <StyledLink to="/tags">Alle Tags</StyledLink>
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
