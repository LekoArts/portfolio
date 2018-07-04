import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import { Container, Layout } from 'elements';
import config from '../../config/website';
import ItemProject from '../components/ItemProject';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Base = styled.div`
  padding-top: 5rem;
  padding-bottom: 5rem;
  column-gap: 2rem;
  column-width: 500px;
`;

const Projekte = ({
  data: {
    allPrismicProjekt: { edges },
  },
}) => (
  <Layout>
    <Helmet title={`Projekte | ${config.siteTitle}`} />
    <Header title="Projekte">
      Spezialisiert auf Grafik- und Webdesign, kombiniere ich minimalistisches Design mit modernen Webtechniken
    </Header>
    <Container type="big">
      <Base>
        {edges.map(project => (
          <ItemProject
            key={project.node.uid}
            path={project.node.fields.slug}
            cover={project.node.data.cover.localFile.childImageSharp.fluid}
            customer={project.node.data.customer}
            title={project.node.data.title.text}
          />
        ))}
      </Base>
    </Container>
    <Footer />
  </Layout>
);

export default Projekte;

Projekte.propTypes = {
  data: PropTypes.shape({
    allPrismicProjekt: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query ProjectsQuery {
    allPrismicProjekt(sort: { fields: [data___date], order: DESC }) {
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
            customer
            cover {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 900, quality: 90, traceSVG: { color: "#2B2B2F" }) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
