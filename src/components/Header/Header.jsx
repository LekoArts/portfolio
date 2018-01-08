import React from 'react';
import cx from 'classnames';
import { Fade } from 'react-reveal';
import Wave from '../Wave/Waves';
import styles from './Header.module.scss';

const Header = (props) => {
  const { children } = props;
  const { subTitle } = props;
  const classes = cx(styles.wrapper, { [styles.slim]: props.slim });
  return (
    <header className={classes}>
      <div className={styles.heroText}>
        <Fade down>
          <h1>
            {children}
          </h1>
        </Fade>
        <Fade down>
          <p className={styles.subTitle}>{subTitle}</p>
        </Fade>
      </div>
      <Wave bottom />
    </header>
  );
};

export default Header;
