import React from 'react';
import styles from './ContainerBig.module.scss';

const ContainerBig = (props) => {
  const { children } = props;
  return (
    <div className={styles.containerBig}>
      {children}
    </div>
  );
};

export default ContainerBig;
