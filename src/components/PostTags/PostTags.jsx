import React from 'react';
import _ from 'lodash';
import Link from 'gatsby-link';
import cx from 'classnames';
import styles from './PostTags.module.scss';

const PostTags = props => {
  const { tags } = props;
  const color = cx(styles.tag, {
    [styles.white]: props.white,
  });
  return (
    <div className="post-tag-container">
      {tags &&
        tags.map((tag, index) => (
          <Link key={tag} style={{ textDecoration: 'none' }} to={`/tags/${_.kebabCase(tag)}`}>
            <button className={color} data-id={index}>
              {tag}
            </button>
          </Link>
        ))}
    </div>
  );
};

export default PostTags;
