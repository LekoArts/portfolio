/* eslint max-len: 0 */

import React from 'react';
import Helmet from 'react-helmet';
import cx from 'classnames';
import FaPaperPlane from 'react-icons/lib/fa/paper-plane';
import FaBehance from 'react-icons/lib/fa/behance';
import FaYouTube from 'react-icons/lib/fa/youtube-play';
import Footer from '../components/Footer/Footer';
import Container from '../components/Container/Container';
import Card from '../components/Card/Card';
import Header from '../components/Header/Header';
import Button from '../components/Button/Button';
import styles from './kontakt.module.scss';
import config from '../../data/SiteConfig';

const Kontakt = () => {
  const wrapper = cx(styles.cardWrapper, 'contactCards');
  return (
    <div className="container kontakt-container">
      <Helmet title={`Kontakt | ${config.siteTitle}`} />
      <Header slim subTitle="Ich freue mich von dir zu hören – egal, ob du eine Projektanfrage hast, Rat brauchst oder einfach quatschen willst">
          Kontakt
      </Header>
      <div className={styles.contacts}>
        <Container text>
          <h3>Hi! Ich heiße Lennart und bin autodidaktischer Kommunikationsdesigner & Front-End Entwickler.</h3>
          <p>Seit über 5 Jahren arbeite ich in den Bereichen Webdesign, Printdesign und Bildbearbeitung. Zusätzlich arbeite ich seit über 3 Jahren als Front-End Entwickler. Seitdem konnte ich viele andere talentierte Menschen kennenlernen und meine Zeit dafür nutzen, mich kontinuierlich weiterzubilden, Dinge auszuprobieren und schlussendlich das Handwerk in meinem Bereich vollends zu erlernen.</p>
          <p>Für meine Kunden gestalte ich maßgeschneiderte, intuitive und visuell ansprechende Designs und Websiten – von der Konzeption über die Kreation bis zur technischen Umsetzung begleite ich alle Schritte.</p>
        </Container>
        <Container styleName="align-center">
          <a href="mailto:&#104;&#101;&#108;&#108;&#111;&#064;&#108;&#101;&#107;&#111;&#097;&#114;&#116;&#115;&#046;&#100;&#101;">
            <Button blue>
              <FaPaperPlane /> <span className={styles.buttonText}>E-Mail</span>
            </Button>
          </a>
        </Container>
        <Container>
          <div className={wrapper}>
            <Card link="https://www.discordapp.com" discord>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 272.1" fill="#7289DA"><path d="M142.8 120.1c-5.7 0-10.2 4.9-10.2 11s4.6 11 10.2 11c5.7 0 10.2-4.9 10.2-11s-4.6-11-10.2-11zM106.3 120.1c-5.7 0-10.2 4.9-10.2 11s4.6 11 10.2 11c5.7 0 10.2-4.9 10.2-11 .1-6.1-4.5-11-10.2-11z" /><path d="M191.4 36.9h-134c-11.3 0-20.5 9.2-20.5 20.5v134c0 11.3 9.2 20.5 20.5 20.5h113.4l-5.3-18.3 12.8 11.8 12.1 11.1 21.6 18.7V57.4c-.1-11.3-9.3-20.5-20.6-20.5zm-38.6 129.5s-3.6-4.3-6.6-8c13.1-3.7 18.1-11.8 18.1-11.8-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.4-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.6-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.2-1.8-1-2.8-1.7-2.8-1.7s4.8 7.9 17.5 11.7c-3 3.8-6.7 8.2-6.7 8.2-22.1-.7-30.5-15.1-30.5-15.1 0-31.9 14.4-57.8 14.4-57.8 14.4-10.7 28-10.4 28-10.4l1 1.2c-18 5.1-26.2 13-26.2 13s2.2-1.2 5.9-2.8c10.7-4.7 19.2-5.9 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.5 0 0-7.9-7.5-24.9-12.6l1.4-1.6s13.7-.3 28 10.4c0 0 14.4 25.9 14.4 57.8 0-.1-8.4 14.3-30.5 15zM303.8 79.7h-33.2V117l22.1 19.9v-36.2h11.8c7.5 0 11.2 3.6 11.2 9.4v27.7c0 5.8-3.5 9.7-11.2 9.7h-34v21.1h33.2c17.8.1 34.5-8.8 34.5-29.2v-29.8c.1-20.8-16.6-29.9-34.4-29.9zm174 59.7v-30.6c0-11 19.8-13.5 25.8-2.5l18.3-7.4c-7.2-15.8-20.3-20.4-31.2-20.4-17.8 0-35.4 10.3-35.4 30.3v30.6c0 20.2 17.6 30.3 35 30.3 11.2 0 24.6-5.5 32-19.9l-19.6-9c-4.8 12.3-24.9 9.3-24.9-1.4zM417.3 113c-6.9-1.5-11.5-4-11.8-8.3.4-10.3 16.3-10.7 25.6-.8l14.7-11.3c-9.2-11.2-19.6-14.2-30.3-14.2-16.3 0-32.1 9.2-32.1 26.6 0 16.9 13 26 27.3 28.2 7.3 1 15.4 3.9 15.2 8.9-.6 9.5-20.2 9-29.1-1.8l-14.2 13.3c8.3 10.7 19.6 16.1 30.2 16.1 16.3 0 34.4-9.4 35.1-26.6 1-21.7-14.8-27.2-30.6-30.1zm-67 55.5h22.4V79.7h-22.4v88.8zM728 79.7h-33.2V117l22.1 19.9v-36.2h11.8c7.5 0 11.2 3.6 11.2 9.4v27.7c0 5.8-3.5 9.7-11.2 9.7h-34v21.1H728c17.8.1 34.5-8.8 34.5-29.2v-29.8c0-20.8-16.7-29.9-34.5-29.9zm-162.9-1.2c-18.4 0-36.7 10-36.7 30.5v30.3c0 20.3 18.4 30.5 36.9 30.5 18.4 0 36.7-10.2 36.7-30.5V109c0-20.4-18.5-30.5-36.9-30.5zm14.4 60.8c0 6.4-7.2 9.7-14.3 9.7-7.2 0-14.4-3.1-14.4-9.7V109c0-6.5 7-10 14-10 7.3 0 14.7 3.1 14.7 10v30.3zM682.4 109c-.5-20.8-14.7-29.2-33-29.2h-35.5v88.8h22.7v-28.2h4l20.6 28.2h28L665 138.1c10.7-3.4 17.4-12.7 17.4-29.1zm-32.6 12h-13.2v-20.3h13.2c14.1 0 14.1 20.3 0 20.3z" /></svg>
                LekoArts#2495
            </Card>
            <Card link="https://www.instagram.com/lekoarts.de" instagram>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 650"><path d="M251.92,45.39c67.27,0,75.23.26,101.8,1.47,24.56,1.12,37.9,5.22,46.78,8.67a78.05,78.05,0,0,1,29,18.84,78.05,78.05,0,0,1,18.84,29c3.45,8.88,7.55,22.22,8.67,46.78,1.21,26.56,1.47,34.53,1.47,101.8s-.26,75.23-1.47,101.8c-1.12,24.56-5.22,37.9-8.67,46.78a83.43,83.43,0,0,1-47.81,47.81c-8.88,3.45-22.22,7.55-46.78,8.67-26.56,1.21-34.53,1.47-101.8,1.47s-75.24-.26-101.8-1.47c-24.56-1.12-37.9-5.22-46.78-8.67a78.05,78.05,0,0,1-29-18.84,78.05,78.05,0,0,1-18.84-29c-3.45-8.88-7.55-22.22-8.67-46.78-1.21-26.56-1.47-34.53-1.47-101.8s.26-75.23,1.47-101.8c1.12-24.56,5.22-37.9,8.67-46.78a78.05,78.05,0,0,1,18.84-29,78.05,78.05,0,0,1,29-18.84c8.88-3.45,22.22-7.55,46.78-8.67,26.56-1.21,34.53-1.47,101.8-1.47m0-45.39c-68.42,0-77,.29-103.87,1.52S102.93,7,86.9,13.23A123.49,123.49,0,0,0,42.28,42.28,123.49,123.49,0,0,0,13.23,86.9C7,102.93,2.74,121.24,1.52,148.05S0,183.5,0,251.92s.29,77,1.52,103.87S7,400.91,13.23,416.94a123.49,123.49,0,0,0,29.06,44.62A123.49,123.49,0,0,0,86.9,490.62c16,6.23,34.34,10.49,61.15,11.71s35.45,1.52,103.87,1.52,77-.29,103.87-1.52,45.13-5.48,61.15-11.71a128.82,128.82,0,0,0,73.68-73.68c6.23-16,10.49-34.34,11.71-61.15s1.52-35.45,1.52-103.87-.29-77-1.52-103.87-5.48-45.13-11.71-61.15a123.49,123.49,0,0,0-29.06-44.62,123.49,123.49,0,0,0-44.62-29.06C400.91,7,382.6,2.74,355.79,1.52S320.34,0,251.92,0Z" /><path d="M251.92,122.56A129.36,129.36,0,1,0,381.29,251.92,129.36,129.36,0,0,0,251.92,122.56Zm0,213.34a84,84,0,1,1,84-84A84,84,0,0,1,251.92,335.89Z" /><circle cx="386.4" cy="117.44" r="30.23" /></svg>
                3D & Experimente
            </Card>
            <Card link="https://www.behance.net/lekoarts" behance>
              <div className={styles.iconWrapper}>
                <FaBehance />
              </div>
                Persönliche Projekte
            </Card>
            <Card link="https://youtube.de/LekoArtsDE" youtube>
              <div className={styles.iconWrapper}>
                <FaYouTube />
              </div>
                Speedarts
            </Card>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Kontakt;
