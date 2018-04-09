import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import kebabCase from 'lodash/kebabCase';

import PostTags from '../PostTags/PostTags';

const ItemBlog = props => (
  <div className={styles.wrapper}>
    {List.map(post => (
      <article key={post.path} className={styles.wrapper}>
        <div className={styles.image}>
          <Link to={post.path} key={post.path} className={styles.link}>
            <Img sizes={post.cover} />
          </Link>
        </div>
        <div className={styles.information}>
          <div className={styles.hero}>
            <div className={styles.catWrapper}>
              <Link to={`/categories/${kebabCase(post.category)}`} className={styles.category}>
                {post.category}
              </Link>
            </div>
            <Link to={post.path} key={post.path} className={styles.linkTitle}>
              <h1>{post.title}</h1>
            </Link>
            <Line />
            <div className={styles.data}>
              <div className={styles.dateTime}>
                <div className={styles.date}>{post.date}</div>
                <div className={styles.time}>| Lesezeit: {post.timeToRead} Min.</div>
              </div>
              <div className={styles.tags}>
                <PostTags tags={post.tags} />
              </div>
            </div>
          </div>
          <div className={styles.excerpt}>{post.excerpt}</div>
        </div>
      </article>
    ))}
  </div>
);

export default ItemBlog;
