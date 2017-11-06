import React from "react";
import Helmet from "react-helmet";
import Img from "gatsby-image";
import Link from "gatsby-link";
import { Fade } from "react-reveal";
import Zooming from "zooming";
import cx from "classnames";
import SEO from "../components/SEO/SEO";
import Container from "../components/Container/Container";
import Wave from "../components/Wave/Waves";
import Card from "../components/Card/Card";
import Button from "../components/Button/Button";
import Footer from "../components/Footer/Footer";
import config from "../../data/SiteConfig";
import styles from "./project.module.scss";

require('prismjs/themes/prism-okaidia.css');

export default class ProjectTemplate extends React.Component {
  componentDidMount() {
    const zooming = new Zooming(
    {
      bgColor: 'rgb(0, 0, 0)',
      bgOpacity: 0.7,
    }
    );
  }
  render() {
    const wrapper = cx(styles.cardWrapper, "projectCards");
    const { slug } = this.props.pathContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    const sizes = post.cover.childImageSharp.sizes;
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
            <Fade down tag="h1">{post.title}</Fade>
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
          <Fade up>
          <h1>Packen wir's an!</h1>
          <Link to="/kontakt">
            <Button blue>
              Projekt starten
            </Button>
          </Link>
          </Fade>
        </Footer>
      </div>
    );
  }
}

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
            sizes(maxWidth: 2560, quality: 90, duotone: { highlight: "#5ABDFF", shadow: "#3466DB" }) {
              ...GatsbyImageSharpSizes_withWebp
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
