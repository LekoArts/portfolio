import React from "react";
import Helmet from "react-helmet";
import Disqus from "../components/Disqus/Disqus";
import PostTags from "../components/PostTags/PostTags";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import "./post.scss";

require(`prismjs/themes/prism-okaidia.css`);

export default class PostTemplate extends React.Component {
  render() {
    const { slug } = this.props.pathContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
      <div>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <div>
          <h1>
            {post.title}
          </h1>
          <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
          <div className="post-meta">
            <PostTags tags={post.tags} />
          </div>
          <Disqus postNode={postNode} />
        </div>
      </div>
    );
  }
}

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
      }
      fields {
        slug
      }
    }
  }
`;
