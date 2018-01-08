import React from 'react';
import cx from 'classnames';
import styles from './Card.module.scss';

const Card = (props) => {
  const { children } = props;
  const color = cx(styles.card, 'card', {
    [styles.discord]: props.discord,
    [styles.instagram]: props.instagram,
    [styles.behance]: props.behance,
    [styles.youtube]: props.youtube,
  });
  return (
    <a href={props.link} rel="noreferrer noopener" target="_blank" className={color}>
      {children}
    </a>
  );
};

export default Card;
