import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import styled from 'react-emotion';
import Helmet from 'react-helmet';
import { Container, Layout } from 'elements';
import { fullText, timeToRead } from 'utilities';
import config from '../../config/website';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ItemTagCategory from '../components/ItemTagCategory';

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.white.light};
`;

const Tag = ({
  pageContext: { tag },
  data: {
    allPrismicBlogpost: { edges, totalCount },
  },
}) => (
  <Layout>
    <Helmet title={`${tag} | ${config.siteTitle}`} />
    <Header title={tag}>
      {totalCount} {totalCount === 1 ? 'Beitrag' : 'Beiträge'} wurde{totalCount === 1 ? '' : 'n'} mit "{tag}" markiert{' '}
      <br />
      <StyledLink to="/tags">Alle Tags</StyledLink>
    </Header>
    <Container>
      {edges.map(edge => (
        <ItemTagCategory
          key={edge.node.uid}
          title={edge.node.data.title.text}
          category={edge.node.data.category.document[0].data.kategorie}
          path={edge.node.fields.slug}
          date={edge.node.data.date}
          timeToRead={timeToRead(fullText(edge))}
          inputTags={edge.node.data.tags}
          excerpt={edge.node.data.body[0].primary.text.text}
        />
      ))}
    </Container>
    <Footer />
  </Layout>
);

export default Tag;

Tag.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    allPrismicBlogpost: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query TagPage {
    allPrismicBlogpost(sort: { fields: [data___date], order: DESC }) {
      totalCount
      edges {
        node {
          uid
          fields {
            slug
          }
          data {
            title {
              text
            }
            date(formatString: "DD. MMMM YYYY", locale: "de")
            category {
              document {
                data {
                  kategorie
                }
              }
            }
            tags {
              tag {
                document {
                  data {
                    tag
                  }
                }
              }
            }
            body {
              ... on PrismicBlogpostBodyText {
                primary {
                  text {
                    text
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
