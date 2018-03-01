import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import styles from './BlogFeature.module.scss';

const BlogFeature = props => (
  <article className={styles.wrapper}>
    <div className={styles.image}>
      <Img sizes={props.cover} />
    </div>
    <Link to={props.path} className={styles.link}>
      <div className={styles.information}>
        <span className={styles.category}>{props.category}</span>
        <div className={styles.date}>{props.date}</div>
      </div>
      <h2 className={styles.title}>{props.title}</h2>
    </Link>
    <div className={styles.imageOverlay} />
  </article>
);

export default BlogFeature;
