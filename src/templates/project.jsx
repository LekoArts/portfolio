/* eslint max-len: 0 */
/* eslint react/no-unescaped-entities: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import SEO from '../components/SEO';
import Container from '../components/Container';
import Wave from '../components/Wave';
import { Card } from '../components/Card';
import Button from '../components/Button';
import Footer from '../components/Footer';
import config from '../../config/website';

import '../utils/prism-okaida.css';

const Project = ({ pathContext: { slug }, data: { markdownRemark: postNode } }) => {
  const post = postNode.frontmatter;
  const { sizes } = post.cover.childImageSharp;
  if (!post.id) {
    post.id = slug;
  }
  return (
    <div className="container projekt-container">
      <Helmet title={`${post.title} | ${config.siteTitle}`} />
      <SEO postPath={slug} postNode={postNode} postSEO />
      <div className={styles.wrapper}>
        <div className={styles.hero}>
          <h1>{post.title}</h1>
        </div>
        <Wave bottom />
        <Img sizes={sizes} />
      </div>
      <Container>
        <div className={wrapper}>
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
        </div>
      </Container>
      <Container text>
        <div className="project-blog-content" dangerouslySetInnerHTML={{ __html: postNode.html }} />
      </Container>
      <Footer>
        <h1>Packen wir's an!</h1>
        <Link to="/kontakt">
          <Button type="primary">Projekt starten</Button>
        </Link>
      </Footer>
    </div>
  );
};

export default Project;

Project.propTypes = {
  pathContext: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    markdownRemark: PropTypes.object.isRequired,
  }),
};

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query ProjectPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        customer
        task
        time
        cover {
          childImageSharp {
            sizes(maxWidth: 1920, quality: 90, duotone: { highlight: "#5ABDFF", shadow: "#3466DB" }) {
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
