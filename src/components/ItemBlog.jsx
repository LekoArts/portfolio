import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import kebabCase from 'lodash/kebabCase';
import Tags from './Tags';

const ItemBlog = ({ path, cover, category, title, date, timeToRead, tags, excerpt }) => (
  <article className="wrapper">
    <div className="image">
      <Link to={path} className="link">
        <Img sizes={cover} />
      </Link>
    </div>
    <div className="information">
      <div className="hero">
        <div className="catwrapper">
          <Link to={`/categories/${kebabCase(category)}`}>{category}</Link>
        </div>
        <Link to={path} className="linktitle">
          <h1>{title}</h1>
        </Link>
        <div className="data">
          <div className="datetime">
            <div className="date">{date}</div>
            <div className="time">| Lesezeit: {timeToRead} Min.</div>
          </div>
          <div className="tags">
            <Tags tags={tags} />
          </div>
        </div>
      </div>
      <div className="excerpt">{excerpt}</div>
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
