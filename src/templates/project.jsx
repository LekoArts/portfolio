/* eslint max-len: 0 */
/* eslint react/no-unescaped-entities: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'react-emotion';
import Img from 'gatsby-image';
import { Link, graphql } from 'gatsby';
import { SEO, Container, Content, Line, Wave, Layout, Hero, InfoText } from 'elements';
import Suggestions from '../components/Suggestions';
import { Card } from '../components/Card';
import Button from '../components/Button';
import Footer from '../components/Footer';

const pulse = keyframes`
  0% {
    transform: scale(1);
    animation-timing-function: ease-in;
  }
  25% {
    animation-timing-function: ease-out;
    transform: scale(1.05);
  }
  50% {
    transform: scale(1.12);
    animation-timing-function: ease-in;
  }
  to {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
`;

const Wrapper = styled.div`
  height: 600px;
  position: relative;
  overflow: hidden;
  .gatsby-image-wrapper {
    height: 600px;
    img {
      animation: ${pulse} 30s infinite;
    }
  }
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    height: 500px;
    .gatsby-image-wrapper {
      height: 500px;
    }
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    height: 400px;
    .gatsby-image-wrapper {
      height: 400px;
    }
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 4rem;
  ${Card} {
    color: ${props => props.theme.colors.black.base} !important;
    margin-bottom: 2rem;
    text-align: center;
    flex-basis: calc(99.9% * 1 / 3 - 1rem);
    max-width: calc(99.9% * 1 / 3 - 1rem);
    width: calc(99.9% * 1 / 3 - 1rem);
    @media (max-width: 750px) {
      flex-basis: 100%;
      max-width: 100%;
      width: 100%;
      margin-bottom: 1.5rem;
    }
  }
`;

const Project = ({ pageContext: { slug, left, right }, data: { prismicProjekt: projektNode } }) => {
  const projekt = projektNode.data;
  const { fluid } = projekt.cover.localFile.childImageSharp;
  return (
    <Layout>
      <SEO postPath={slug} postNode={projektNode} postSEO />
      <Wrapper>
        <Hero>
          <h1>{projekt.title.text}</h1>
        </Hero>
        <Wave />
        <Img fluid={fluid} />
      </Wrapper>
      <Container>
        <CardWrapper>
          <Card>
            <h2>Kunde</h2>
            {projekt.customer}
          </Card>
          <Card>
            <h2>Aufgabe</h2>
            {projekt.task}
          </Card>
          <Card>
            <h2>Zeitraum</h2>
            {projekt.time}
          </Card>
        </CardWrapper>
      </Container>
      <Content sliceZone={projektNode.data.body} />
      <Container>
        <Line aria-hidden="true" />
        <InfoText>Weitere Projekte</InfoText>
        <Suggestions left={left} right={right} />
      </Container>
      <Footer>
        <h1>Packen wir's an!</h1>
        <Link to="/kontakt">
          <Button type="primary">Projekt starten</Button>
        </Link>
      </Footer>
    </Layout>
  );
};

export default Project;

Project.propTypes = {
  pageContext: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    left: PropTypes.object.isRequired,
    right: PropTypes.object.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    prismicProjekt: PropTypes.object.isRequired,
  }).isRequired,
};

export const pageQuery = graphql`
  query ProjectPostBySlug($slug: String!) {
    prismicProjekt(fields: { slug: { eq: $slug } }) {
      fields {
        slug
        sourceType
        excerpt
      }
      first_publication_date
      last_publication_date
      data {
        title {
          text
        }
        customer
        task
        time
        date(formatString: "DD. MMMM YYYY", locale: "de")
        cover {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1920, quality: 90, duotone: { highlight: "#5ABDFF", shadow: "#3466DB" }) {
                ...GatsbyImageSharpFluid_withWebp
              }
              resize(width: 1200, quality: 90) {
                src
              }
            }
          }
        }
        body {
          ... on PrismicProjektBodyText {
            slice_type
            id
            primary {
              text {
                html
              }
            }
          }
          ... on PrismicProjektBodyQuote {
            slice_type
            id
            primary {
              quote {
                html
              }
            }
          }
          ... on PrismicProjektBodyBild {
            slice_type
            id
            primary {
              image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1200, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
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
