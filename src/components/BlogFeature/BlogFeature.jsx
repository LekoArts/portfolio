import React from 'react';
import Link from 'gatsby-link';
import { Fade } from 'react-reveal';
import styles from './BlogFeature.module.scss';

const BlogFeature = (props) => {
  const bgImage = {
    backgroundImage: `url("${props.cover}")`,
  };
  return (
    <article className={styles.wrapper} style={bgImage}>
      <Link to={props.path} className={styles.link}>
        <Fade up>
          <div className={styles.information}>
            <span className={styles.category}>{props.category}</span>
            <div className={styles.date}>
              {props.date}
            </div>
          </div>
        </Fade>
        <Fade down>
          <h2 className={styles.title}>
            {props.title}
          </h2>
        </Fade>
      </Link>
      <div className={styles.imageOverlay} />
    </article>
  );
};

export default BlogFeature;
