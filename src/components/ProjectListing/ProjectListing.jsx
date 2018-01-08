import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import styles from './ProjectListing.module.scss';

export default class ProjectListing extends React.Component {
  getList() {
    const List = [];
    this.props.postEdges.forEach((postEdge) => {
      List.push({
        path: postEdge.node.fields.slug,
        cover: postEdge.node.frontmatter.cover.childImageSharp.sizes,
        title: postEdge.node.frontmatter.title,
        customer: postEdge.node.frontmatter.customer,
      });
    });
    return List;
  }

  render() {
    const List = this.getList();
    return (
      <div className={styles.base}>
        {List.map(post =>
          (
            <div key={post.path} className={styles.wrapper}>
              <div className={styles.image}>
                <Img sizes={post.cover} />
              </div>
              <Link to={post.path} key={post.path} className={styles.link}>
                <div className={styles.content} />
                <div className={styles.customer} key={post.customer}>
                  {post.customer}
                </div>
                <h2 className={styles.title} key={post.title}>
                  {post.title}
                </h2>
              </Link>
            </div>
          ))}
      </div>
    );
  }
}
