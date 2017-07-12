import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'react-emotion';
import Img from 'gatsby-image';
import { Link, graphql } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import { SEO, Container, Content, Wave, Line, Layout } from 'elements';
import { hideS, Hero, InfoText } from 'utilities';
import Tags from '../components/Tags';
import Suggestions from '../components/Suggestions';
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

const Information = styled.div`
  margin-top: 2rem;
  font-family: ${props => props.theme.fontFamily.heading};
  a {
    color: ${props => props.theme.colors.white.base};
    transition: all 0.4s;
    border-bottom: 1px solid transparent;
    &:hover {
      border-bottom: 1px solid ${props => props.theme.colors.white.base};
      color: ${props => props.theme.colors.white.base};
    }
    &:focus {
      color: ${props => props.theme.colors.white.base};
    }
  }
`;

const Note = styled.p`
  margin-bottom: 4rem;
`;

const fontBold = css`
  font-weight: 700;
`;

const Post = ({ pageContext: { slug, left, right }, data: { markdownRemark: postNode } }) => {
  const post = postNode.frontmatter;
  const { fluid } = post.cover.childImageSharp;
  if (!post.id) {
    post.id = slug;
  }

  return (
    <Layout>
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
        <Img fluid={fluid} />
      </Wrapper>
      <Container type="article">
        <Content input={postNode.html} />
        <Line aria-hidden="true" />
        <Tags tags={post.tags} />
        <Note>
          <span className={fontBold}>Interesse geweckt?</span> Lies alle Beiträge in der Kategorie{' '}
          <Link to={`/categories/${kebabCase(post.category)}`}>{post.category}</Link>
        </Note>
      </Container>
      <Container>
        <InfoText>Weitere Blogeinträge</InfoText>
        <Suggestions left={left} right={right} secondary />
      </Container>
      <Footer>
        <h2>Lust auf mehr Tutorials & Goodies? Werde ein Patron.</h2>
        <a href="https://www.patreon.com/lekoarts" target="_blank" rel="noopener noreferrer">
          <Button type="secondary">Patreon</Button>
        </a>
      </Footer>
    </Layout>
  );
};

export default Post;

Post.propTypes = {
  pageContext: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    markdownRemark: PropTypes.object.isRequired,
  }).isRequired,
};

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
            fluid(maxWidth: 1920, quality: 90, duotone: { highlight: "#EE9338", shadow: "#BE7123" }) {
              ...GatsbyImageSharpFluid_withWebp
            }
            resize(width: 1200, quality: 90) {
              src
            }
          }
        }
      }
      fields {
        slug
        sourceInstanceName
      }
    }
  }
`;
