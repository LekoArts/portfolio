import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import kebabCase from 'lodash/kebabCase';
import ReactDisqusComments from 'react-disqus-comments';
import Tags from '../components/Tags';
import SEO from '../components/SEO';
import Container from '../components/Container';
import Wave from '../components/Wave';
import Button from '../components/Button';
import Footer from '../components/Footer';
import config from '../../config/website';

import '../utils/prism-okaida.css';

const Post = ({ pathContext: { slug }, data: { markdownRemark: postNode } }) => {
  const post = postNode.frontmatter;
  const { sizes } = post.cover.childImageSharp;
  if (!post.id) {
    post.id = slug;
  }

  const disqusConfig = {
    identifier: post.id,
    title: post.title,
  };

  return (
    <div className="container post-container">
      <Helmet title={`${post.title} | ${config.siteTitle}`} />
      <SEO postPath={slug} postNode={postNode} postSEO />
      <div className={styles.wrapper}>
        <div className={styles.hero}>
          <div className={styles.catWrapper}>
            <Link to={`/categories/${kebabCase(post.category)}`} className={styles.category}>
              {post.category}
            </Link>
          </div>
          <h1>{post.title}</h1>
          <div className={styles.information}>
            <div className={styles.dateTime}>
              <div className={styles.date}>{post.date}</div>
              <div className={styles.time}>| Lesezeit: {postNode.timeToRead} Min.</div>
            </div>
            <div className={styles.tags}>
              <Tags tags={post.tags} white />
            </div>
          </div>
        </div>
        <Wave bottom />
        <Img sizes={sizes} />
      </div>
      <Container text>
        <div className="project-blog-content" dangerouslySetInnerHTML={{ __html: postNode.html }} />
        <div className={styles.categoryRef}>
          <p>
            <span>Interesse geweckt?</span> Lies alle Beiträge in der Kategorie{' '}
            <Link to={`/categories/${kebabCase(post.category)}`}>{post.category}</Link>
          </p>
        </div>
        <div className={styles.Disqus}>
          <ReactDisqusComments
            shortname={config.disqusShortname}
            identifier={disqusConfig.identifier}
            title={disqusConfig.title}
          />
        </div>
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
    markdownRemark: PropTypes.node.isRequired,
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
        date(formatString: "DD.MM.YYYY")
        category
        tags
        cover {
          childImageSharp {
            sizes(maxWidth: 1920, quality: 90, duotone: { highlight: "#EE9338", shadow: "#BE7123" }) {
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
