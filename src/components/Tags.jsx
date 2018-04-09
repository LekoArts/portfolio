import React from 'react';
import kebabCase from 'lodash/kebabCase';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const Tags = ({ tags }) => (
  <div className="post-tag-container">
    {tags &&
      tags.map((tag, index) => (
        <Link key={tag} style={{ textDecoration: 'none' }} to={`/tags/${kebabCase(tag)}`}>
          <button className={color} data-id={index}>
            {tag}
          </button>
        </Link>
      ))}
  </div>
);

export default Tags;

Tags.propTypes = {
  tags: PropTypes.array.isRequired,
};
