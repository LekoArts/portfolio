import React from 'react';
import cx from 'classnames';
import Wave from '../Wave/Waves';
import styles from './Header.module.scss';

const Header = (props) => {
  const { children } = props;
  const { subTitle } = props;
  const classes = cx(styles.wrapper, { [styles.slim]: props.slim });
  return (
    <header className={classes}>
      <div className={styles.heroText}>
        <h1>
          {children}
        </h1>
        <p className={styles.subTitle}>{subTitle}</p>
      </div>
      <Wave bottom />
    </header>
  );
};

export default Header;
