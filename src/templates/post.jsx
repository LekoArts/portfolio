import React from 'react';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import _ from 'lodash';
import format from 'date-fns/format';
import PostTags from '../components/PostTags/PostTags';
import SEO from '../components/SEO/SEO';
import Container from '../components/Container/Container';
import Wave from '../components/Wave/Waves';
import Button from '../components/Button/Button';
import Footer from '../components/Footer/Footer';
import Line from '../components/Line/Line';
import config from '../../data/SiteConfig';
import styles from './post.module.scss';

require('prismjs/themes/prism-okaidia.css'); // eslint-disable-line import/no-extraneous-dependencies

const PostTemplate = (props) => {
  const { slug } = props.pathContext;
  const postNode = props.data.markdownRemark;
  const post = postNode.frontmatter;
  const date = format(post.date, 'DD.MM.YYYY');
  const { sizes } = post.cover.childImageSharp;
  if (!post.id) {
    post.id = slug;
  }
  if (!post.id) {
    post.category_id = config.postDefaultCategoryID;
  }
  return (
    <div className="container post-container">
      <Helmet>
        <title>{`${post.title} | ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postPath={slug} postNode={postNode} postSEO />
      <div className={styles.wrapper}>
        <div className={styles.hero}>
          <div className={styles.catWrapper}>
            <Link to={`/categories/${_.kebabCase(post.category)}`} className={styles.category}><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16" className={styles.linkIcon}><path fillRule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" /></svg> {post.category}</Link>
          </div>
          <h1>{post.title}</h1>
          <Line white />
          <div className={styles.information}>
            <div className={styles.dateTime}>
              <div className={styles.date}>
                {date}
              </div>
              <div className={styles.time}>
                  | Lesezeit: {postNode.timeToRead} Min.
              </div>
            </div>
            <div className={styles.tags}>
              <PostTags tags={post.tags} />
            </div>
          </div>
        </div>
        <Wave bottom />
        <Img sizes={sizes} />
      </div>
      <Container text>
        <div className="project-blog-content" dangerouslySetInnerHTML={{ __html: postNode.html }} />
        <Line />
        <div className={styles.categoryRef}>
          <p>
            <span>Interesse geweckt?</span> Lies alle Beiträge in der Kategorie <Link to={`/categories/${_.kebabCase(post.category)}`}><Button small orange>{post.category}</Button></Link>
          </p>
        </div>
      </Container>
      <Footer>
        <h2>Lust auf mehr Tutorials & Goodies? Werde ein Patron.</h2>
        <a href="https://www.patreon.com/lekoarts" target="_blank" rel="noopener noreferrer">
          <Button orange>
              Patreon
          </Button>
        </a>
      </Footer>
    </div>
  );
};

export default PostTemplate;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        date
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
