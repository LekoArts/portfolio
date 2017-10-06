import React from "react";
import Link from "gatsby-link";
import styles from "./ProjectListing.module.scss";

export default class ProjectListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        cover: postEdge.node.frontmatter.cover.childImageSharp.resize.src,
        title: postEdge.node.frontmatter.title,
        customer: postEdge.node.frontmatter.customer
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <div className={styles.wrapper}>
        {postList.map((post, index) =>
          (
          <article key={post.path} className={styles.wrapper} style={{ backgroundImage: `url("${post.cover}")` }}>
            <Link to={post.path} key={post.path} className={styles.link}>
                <div className={styles.customer} key={post.customer}>
                    {post.customer}
                </div>
                <h2 className={styles.title} key={post.title}>
                    {post.title}
                </h2>
            </Link>
            <div className={styles.imageOverlay} key={index} />
          </article>
          )
        )}
      </div>
    );
  }
}