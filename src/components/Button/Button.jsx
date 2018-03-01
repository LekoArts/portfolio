import React from 'react';
import cx from 'classnames';
import styles from './Button.module.scss';

const Button = props => {
  const { children } = props;
  const color = cx(styles.button, {
    [styles.small]: props.small,
    [styles.blue]: props.blue,
    [styles.orange]: props.orange,
  });
  return <button className={color}>{children}</button>;
};

export default Button;
