import React from 'react';
import Link from 'gatsby-link';
import { Fade } from 'react-reveal';
import Img from 'gatsby-image';
import styles from './ProjectFeature.module.scss';

const ProjectFeature = props => (
  <article className={styles.wrapper}>
    <div className={styles.image}>
      <Img sizes={props.cover} />
    </div>
    <Link to={props.path} className={styles.link}>
      <Fade down>
        <div className={styles.customer}>
          {props.customer}
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

export default ProjectFeature;
