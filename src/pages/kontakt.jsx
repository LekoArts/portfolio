/* eslint max-len: 0 */

import React from 'react';
import Helmet from 'react-helmet';
import { css } from 'emotion';
import styled from 'react-emotion';
import Footer from '../components/Footer';
import Container from '../components/Container';
import { LinkCard } from '../components/Card';
import Header from '../components/Header';
import Button from '../components/Button';
import config from '../../config/website';
import Paperplane from '../icons/Paperplane';
import Discord from '../icons/Discord';
import Instagram from '../icons/Instagram';
import Behance from '../icons/Behance';
import YouTube from '../icons/YouTube';

const alignCenter = css`
  text-align: center;
`;

const Wrapper = styled.div`
  margin-top: 3rem;
  margin-bottom: 2rem;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  margin-bottom: 6rem;
  ${LinkCard} {
    flex-basis: 25%;
  }
`;

const Kontakt = () => (
  <div className="container kontakt-container">
    <Helmet title={`Kontakt | ${config.siteTitle}`} />
    <Header
      slim
      subtitle="Ich freue mich von dir zu hören – egal, ob du eine Projektanfrage hast, Rat brauchst oder einfach quatschen willst"
    >
      Kontakt
    </Header>
    <Wrapper>
      <Container type="article">
        <h3>Hi! Ich heiße Lennart und bin autodidaktischer Kommunikationsdesigner & Front-End Entwickler.</h3>
        <p>
          Seit über 5 Jahren arbeite ich in den Bereichen Webdesign, Printdesign und Bildbearbeitung. Zusätzlich arbeite
          ich seit über 3 Jahren als Front-End Entwickler. Seitdem konnte ich viele andere talentierte Menschen
          kennenlernen und meine Zeit dafür nutzen, mich kontinuierlich weiterzubilden, Dinge auszuprobieren und
          schlussendlich das Handwerk in meinem Bereich vollends zu erlernen.
        </p>
        <p>
          Für meine Kunden gestalte ich maßgeschneiderte, intuitive und visuell ansprechende Designs und Websiten – von
          der Konzeption über die Kreation bis zur technischen Umsetzung begleite ich alle Schritte.
        </p>
      </Container>
      <Container className={alignCenter}>
        <a href="mailto:&#104;&#101;&#108;&#108;&#111;&#064;&#108;&#101;&#107;&#111;&#097;&#114;&#116;&#115;&#046;&#100;&#101;">
          <Button type="primary">
            <Paperplane /> E-Mail
          </Button>
        </a>
      </Container>
      <Container>
        <CardWrapper>
          <LinkCard link="https://www.discordapp.com" company="discord">
            <Discord />
            LekoArts#2495
          </LinkCard>
          <LinkCard link="https://www.instagram.com/lekoarts.de" company="instagram">
            <Instagram />
            3D & Experimente
          </LinkCard>
          <LinkCard link="https://www.behance.net/lekoarts" company="behance">
            <Behance />
            Persönliche Projekte
          </LinkCard>
          <LinkCard link="https://youtube.de/LekoArtsDE" company="youtube">
            <YouTube />
            Speedarts
          </LinkCard>
        </CardWrapper>
      </Container>
    </Wrapper>
    <Footer />
  </div>
);

export default Kontakt;
