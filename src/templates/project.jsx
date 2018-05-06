/* eslint max-len: 0 */
/* eslint react/no-unescaped-entities: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled, { keyframes } from 'react-emotion';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import SEO from '../components/SEO';
import Container from '../components/Container';
import Content from '../components/Content';
import Suggestions from '../components/Suggestions';
import Wave from '../components/Wave';
import { Card } from '../components/Card';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Line from '../components/Line';
import InfoText from '../utils/InfoText';
import Hero from '../utils/Hero';
import config from '../../config/website';

import '../utils/prism-okaida.css';

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

const Project = ({ pathContext: { slug, left, right }, data: { markdownRemark: postNode } }) => {
  const post = postNode.frontmatter;
  const { sizes } = post.cover.childImageSharp;
  if (!post.id) {
    post.id = slug;
  }
  return (
    <React.Fragment>
      <Helmet title={`${post.title} | ${config.siteTitle}`} />
      <SEO postPath={slug} postNode={postNode} postSEO />
      <Wrapper>
        <Hero>
          <h1>{post.title}</h1>
        </Hero>
        <Wave />
        <Img sizes={sizes} />
      </Wrapper>
      <Container>
        <CardWrapper>
          <Card>
            <h2>Kunde</h2>
            {post.customer}
          </Card>
          <Card>
            <h2>Aufgabe</h2>
            {post.task}
          </Card>
          <Card>
            <h2>Zeitraum</h2>
            {post.time}
          </Card>
        </CardWrapper>
      </Container>
      <Container type="article">
        <Content input={postNode.html} />
      </Container>
      <Container>
        <Line />
        <InfoText>Weitere Projekte</InfoText>
        <Suggestions left={left} right={right} />
      </Container>
      <Footer>
        <h1>Packen wir's an!</h1>
        <Link to="/kontakt">
          <Button type="primary">Projekt starten</Button>
        </Link>
      </Footer>
    </React.Fragment>
  );
};

export default Project;

Project.propTypes = {
  pathContext: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    markdownRemark: PropTypes.object.isRequired,
  }).isRequired,
};

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query ProjectPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD.MM.YYYY")
        customer
        task
        time
        cover {
          childImageSharp {
            sizes(maxWidth: 1920, quality: 85, duotone: { highlight: "#5ABDFF", shadow: "#3466DB" }) {
              ...GatsbyImageSharpSizes_withWebp
            }
            resize(width: 1200) {
              src
            }
          }
        }
      }
      fields {
        slug
      }
      excerpt
    }
  }
`;
