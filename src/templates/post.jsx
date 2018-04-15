import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'react-emotion';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import kebabCase from 'lodash/kebabCase';
import { darken } from 'polished';
import Tags from '../components/Tags';
import SEO from '../components/SEO';
import Container from '../components/Container';
import Content from '../components/Content';
import Wave from '../components/Wave';
import Button from '../components/Button';
import Footer from '../components/Footer';
import { hideS } from '../utils/hide';
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

const Hero = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  color: ${props => props.theme.colors.white.light};
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${props => props.theme.layout.base};
  padding: 0 2rem;
  text-align: center;
`;

const Information = styled.div`
  margin-top: 2rem;
  font-family: ${props => props.theme.fontFamily.heading};
  a {
    color: ${props => props.theme.colors.white.base};
    transition: all 0.4s;
    border-bottom: 1px solid transparent;
    &:hover {
      border-bottom: 1px solid white;
      color: white;
    }
    &:focus {
      color: white;
    }
  }
`;

const fontBold = css`
  font-weight: 700;
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  background: ${props => darken(0.25, props.theme.tint.black)};
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Post = ({ pathContext: { slug }, data: { markdownRemark: postNode } }) => {
  const post = postNode.frontmatter;
  const { sizes } = post.cover.childImageSharp;
  if (!post.id) {
    post.id = slug;
  }

  return (
    <div className="post-container">
      <Helmet title={`${post.title} | ${config.siteTitle}`} />
      <SEO postPath={slug} postNode={postNode} postSEO />
      <Wrapper>
        <Hero>
          <h1>{post.title}</h1>
          <Information>
            {post.date} &mdash; Lesezeit: {postNode.timeToRead} Min. &mdash; <span className={hideS}>Kategorie: </span>
            <Link to={`/categories/${kebabCase(post.category)}`}>{post.category}</Link>
          </Information>
        </Hero>
        <Wave />
        <Img sizes={sizes} />
      </Wrapper>
      <Container type="article">
        <Content input={postNode.html} />
        <Line />
        <Tags tags={post.tags} />
        <p>
          <span className={fontBold}>Interesse geweckt?</span> Lies alle Beiträge in der Kategorie{' '}
          <Link to={`/categories/${kebabCase(post.category)}`}>{post.category}</Link>
        </p>
      </Container>
      <Footer>
        <h2>Lust auf mehr Tutorials & Goodies? Werde ein Patron.</h2>
        <a href="https://www.patreon.com/lekoarts" target="_blank" rel="noopener noreferrer">
          <Button type="secondary">Patreon</Button>
        </a>
      </Footer>
    </div>
  );
};

export default Post;

Post.propTypes = {
  pathContext: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    markdownRemark: PropTypes.object.isRequired,
  }),
};

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        date(formatString: "DD. MMMM YYYY", locale: "de")
        category
        tags
        cover {
          childImageSharp {
            sizes(maxWidth: 1920, quality: 85, duotone: { highlight: "#EE9338", shadow: "#BE7123" }) {
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
    }
  }
`;
