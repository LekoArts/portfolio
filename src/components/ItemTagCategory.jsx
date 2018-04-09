import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import kebabCase from 'lodash/kebabCase';
import Tags from './Tags';

const ItemTagCategory = ({ edges: { category, path, title, date, timeToRead, tags, excerpt } }) => (
  <article className={styles.wrapper}>
    <div className={styles.information}>
      <div className={styles.catWrapper}>
        <Link to={`/categories/${kebabCase(category)}`} className={styles.category}>
          {category}
        </Link>
      </div>
      <div className={styles.titleWrapper}>
        <Link to={path} className={styles.linkTitle}>
          <h1>{title}</h1>
        </Link>
      </div>
      <div className={styles.data}>
        <div className={styles.dateTime}>
          <div className={styles.date}>{date}</div>
          <div className={styles.time}>| Lesezeit: {timeToRead} Min.</div>
        </div>
        <div className={styles.tags}>
          <Tags tags={tags} />
        </div>
      </div>
      <div className={styles.excerpt}>{excerpt}</div>
    </div>
  </article>
);

export default ItemTagCategory;

ItemTagCategory.propTypes = {
  edges: PropTypes.shape({
    category: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    timeToRead: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    excerpt: PropTypes.string.isRequired,
  }),
};
