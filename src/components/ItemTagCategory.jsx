import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import kebabCase from 'lodash/kebabCase';
import Tags from './Tags';

const ItemTagCategory = ({ edges: { category, path, title, date, timeToRead, tags, excerpt } }) => (
  <article className="wrapper">
    <div className="information">
      <div className="catwrapper">
        <Link to={`/categories/${kebabCase(category)}`}>
          {category}
        </Link>
      </div>
      <div className="titlewrapper">
        <Link to={path} className="linktitle">
          <h1>{title}</h1>
        </Link>
      </div>
      <div className="data">
        <div className="datetime">
          <div className="date">{date}</div>
          <div className="time">| Lesezeit: {timeToRead} Min.</div>
        </div>
        <div className="tags">
          <Tags tags={tags} />
        </div>
      </div>
      <div className="excerpt">{excerpt}</div>
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
