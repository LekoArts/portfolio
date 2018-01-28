import React from 'react';
import Link from 'gatsby-link';
import format from 'date-fns/format';
import Wave from '../Wave/Waves';
import Container from '../Container/Container';
import styles from './Footer.module.scss';

const Footer = (props) => {
  const { children } = props;
  const date = format(new Date(), 'YYYY');
  return (
    <footer className={styles.footer}>
      <Wave top />
      <Container>
        <div className={styles.optional}>
          {children}
        </div>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <div className={styles.important}>
              <a href="https://www.patreon.com/lekoarts" target="_blank" rel="noopener noreferrer">Patreon</a>
              <Link to="/categories/tutorial">
                  Tutorials
              </Link>
              <Link to="/categories/freebie">
                  Freebies
              </Link>
            </div>
            <div className={styles.legal}>
              <Link to="/impressum">
                  Impressum
              </Link>
              <Link to="/datenschutz">
                  Datenschutzerklärung
              </Link>
            </div>
            <div className={styles.socialMedia}>
              <a href="https://www.behance.net/lekoarts" target="_blank" rel="noopener noreferrer">Behance</a>
              <a href="https://dribbble.com/LekoArts" target="_blank" rel="noopener noreferrer">Dribbble</a>
              <a href="https://www.facebook.com/lekoarts.de" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://www.instagram.com/lekoarts.de" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
          <div className={styles.copyright}>
            {`Copyright © ${date}. LekoArts. Alle Rechte vorbehalten.`}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
