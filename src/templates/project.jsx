import React from "react";
import Helmet from "react-helmet";
import Img from "gatsby-image";
import Link from "gatsby-link";
import SEO from "../components/SEO/SEO";
import Container from "../components/Container/Container";
import Wave from "../components/Wave/Waves";
import Button from "../components/Button/Button";
import Footer from "../components/Footer/Footer";
import config from "../../data/SiteConfig";
import styles from "./project.module.scss";

require('prismjs/themes/prism-okaidia.css');

export default class ProjectTemplate extends React.Component {
  render() {
    const { slug } = this.props.pathContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    const responsiveSizes = post.cover.childImageSharp.responsiveSizes;
    if (!post.id) {
      post.id = slug;
    }
    return (
      <div className="container projekt-container">
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <div className={styles.wrapper}>
          <div className={styles.hero}>
            <span className={styles.customer}>{post.customer}</span>
            <h1>{post.title}</h1>
          </div>
          <Wave bottom />
          <Img responsiveSizes={responsiveSizes} />
        </div>
        <Container text>
          <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
        </Container>
        <Footer>
          <h1>Packen wir's an!</h1>
          <Link to="/kontakt">
            <Button text="Projekt starten" blue />
          </Link>
        </Footer>
      </div>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query ProjetPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        customer
        cover {
          childImageSharp {
            responsiveSizes(maxWidth: 1920, quality: 95, duotone: { highlight: "#5ABDFF", shadow: "#3466DB" }) {
              base64
              aspectRatio
              src
              srcSet
              sizes
              originalImg
              originalName
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
