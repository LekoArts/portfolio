import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'react-emotion';
import Img from 'gatsby-image';
import { Link, graphql } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import { SEO, Container, Content, Wave, Line, Layout, hideS, Hero, InfoText } from 'elements';
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

const Post = ({ pageContext: { slug, left, right, timeToRead, excerpt }, data: { prismicBlogpost: postNode } }) => {
  const post = postNode.data;
  const { kategorie } = post.category.document[0].data;
  const { fluid } = post.cover.localFile.childImageSharp;
  let tags = false;
  if (post.tags[0].tag !== null) {
    tags = post.tags.map(tag => tag.tag.document[0].data.tag);
  }

  return (
    <Layout>
      <SEO postPath={slug} postNode={postNode} desc={excerpt} postSEO />
      <Wrapper>
        <Hero>
          <h1>{post.title.text}</h1>
          <Information>
            {post.date} &mdash; Lesezeit: {timeToRead} Min. &mdash; <span className={hideS}>Kategorie: </span>
            <Link to={`/categories/${kebabCase(kategorie)}`}>{kategorie}</Link>
          </Information>
        </Hero>
        <Wave />
        <Img fluid={fluid} />
      </Wrapper>
      <Container type="article">
        <p>Content kommt hier hin!</p>
        <Line aria-hidden="true" />
        {tags && <Tags tags={tags} />}
        <Note>
          <span className={fontBold}>Interesse geweckt?</span> Lies alle Beiträge in der Kategorie{' '}
          <Link to={`/categories/${kebabCase(kategorie)}`}>{kategorie}</Link>
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
    prismicBlogpost: PropTypes.object.isRequired,
  }).isRequired,
};

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    prismicBlogpost(fields: { slug: { eq: $slug } }) {
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
        cover {
          localFile {
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
      }
    }
  }
`;
