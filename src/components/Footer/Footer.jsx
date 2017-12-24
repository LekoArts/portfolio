import React, { Component } from "react";
import Link from "gatsby-link";
import Wave from "../Wave/Waves";
import Container from "../Container/Container";
import config from "../../../data/SiteConfig";
import styles from "./Footer.module.scss";

class Footer extends Component {
  render() {
    const copyright = config.copyright;
    const { children } = this.props;
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
                <a href="https://dribbble.com/LekoArts" target="_blank" rel="noopener noreferrer">Dribbble</a>
                <a href="https://www.facebook.com/lekoarts.de" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://www.instagram.com/lekoarts.de" target="_blank" rel="noopener noreferrer">Instagram</a>
              </div>
            </div>
            <div className={styles.copyright}>
              {copyright}
            </div>
          </div>
        </Container>
      </footer>
    );
  }
}

export default Footer;
