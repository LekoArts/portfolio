import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import kebabCase from 'lodash/kebabCase';
import Tags from './Tags';

const ItemBlog = ({ path, cover, category, title, date, timeToRead, tags, excerpt }) => (
  <article className={styles.wrapper}>
    <div className={styles.image}>
      <Link to={path} className={styles.link}>
        <Img sizes={cover} />
      </Link>
    </div>
    <div className={styles.information}>
      <div className={styles.hero}>
        <div className={styles.catWrapper}>
          <Link to={`/categories/${kebabCase(category)}`} className={styles.category}>
            {category}
          </Link>
        </div>
        <Link to={path} className={styles.linkTitle}>
          <h1>{title}</h1>
        </Link>
        <div className={styles.data}>
          <div className={styles.dateTime}>
            <div className={styles.date}>{date}</div>
            <div className={styles.time}>| Lesezeit: {timeToRead} Min.</div>
          </div>
          <div className={styles.tags}>
            <Tags tags={tags} />
          </div>
        </div>
      </div>
      <div className={styles.excerpt}>{excerpt}</div>
    </div>
  </article>
);

export default ItemBlog;

ItemBlog.propTypes = {
  path: PropTypes.string.isRequired,
  cover: PropTypes.any.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  excerpt: PropTypes.string.isRequired,
};
