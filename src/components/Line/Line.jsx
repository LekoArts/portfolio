import React from 'react';
import cx from 'classnames';
import styles from './Line.module.scss';

const Line = (props) => {
  const color = cx(styles.line, 'line', {
    [styles.white]: props.white,
  });
  return (
    <div className={color} />
  );
};

export default Line;
