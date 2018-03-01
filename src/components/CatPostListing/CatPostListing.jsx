import React from 'react';
import Link from 'gatsby-link';
import _ from 'lodash';
import styles from './CatPostListing.module.scss';
import PostTags from '../PostTags/PostTags';
import Line from '../Line/Line';

export default class CatPostListing extends React.Component {
  getList() {
    const List = [];
    this.props.postEdges.forEach(postEdge => {
      List.push({
        path: postEdge.node.fields.slug,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.frontmatter.date,
        category: postEdge.node.frontmatter.category,
        timeToRead: postEdge.node.timeToRead,
        excerpt: postEdge.node.excerpt,
        tags: postEdge.node.frontmatter.tags,
      });
    });
    return List;
  }

  render() {
    const List = this.getList();
    return (
      <div className={styles.wrapper}>
        {List.map(post => (
          <article key={post.path} className={styles.wrapper}>
            <div className={styles.information}>
              <div className={styles.catWrapper}>
                <Link to={`/categories/${_.kebabCase(post.category)}`} className={styles.category}>
                  <svg
                    aria-hidden="true"
                    height="16"
                    version="1.1"
                    viewBox="0 0 16 16"
                    width="16"
                    className={styles.linkIcon}
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                    />
                  </svg>{' '}
                  {post.category}
                </Link>
              </div>
              <div className={styles.titleWrapper}>
                <Link to={post.path} key={post.path} className={styles.linkTitle}>
                  <h1>{post.title}</h1>
                </Link>
              </div>
              <Line className={styles.line} />
              <div className={styles.data}>
                <div className={styles.dateTime}>
                  <div className={styles.date}>{post.date}</div>
                  <div className={styles.time}>| Lesezeit: {post.timeToRead} Min.</div>
                </div>
                <div className={styles.tags}>
                  <PostTags tags={post.tags} />
                </div>
              </div>
              <div className={styles.excerpt}>{post.excerpt}</div>
            </div>
          </article>
        ))}
      </div>
    );
  }
}
