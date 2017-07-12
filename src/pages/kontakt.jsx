/* eslint max-len: 0 */

import React from 'react';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import { Container, Layout } from 'elements';
import Footer from '../components/Footer';
import { LinkCard } from '../components/Card';
import Header from '../components/Header';
import Button from '../components/Button';
import config from '../../config/website';
import Paperplane from '../icons/Paperplane';
import Discord from '../icons/Discord';
import Instagram from '../icons/Instagram';
import Behance from '../icons/Behance';
import YouTube from '../icons/YouTube';

const CenteredContainer = styled(Container)`
  text-align: center;
  svg {
    fill: white;
  }
`;

const Wrapper = styled.div`
  margin-top: 3rem;
  margin-bottom: 2rem;
`;

const MyLinkCard = styled(LinkCard)`
  flex-basis: calc(99% * 1 / 4 - 1rem);
  max-width: calc(99% * 1 / 4 - 1rem);
  width: calc(99% * 1 / 4 - 1rem);
  margin-bottom: 2rem;
  @media (max-width: 1135px) {
    flex-basis: calc(99% * 1 / 2 - 1rem);
    max-width: calc(99% * 1 / 2 - 1rem);
    width: calc(99% * 1 / 2 - 1rem);
  }
  @media (max-width: 690px) {
    flex-basis: calc(99% * 1 / 1);
    max-width: calc(99% * 1 / 1);
    width: calc(99% * 1 / 1);
  }
`;

const CardContainer = styled(Container)`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 4rem;
`;

const Kontakt = () => (
  <Layout>
    <Helmet title={`Kontakt | ${config.siteTitle}`} />
    <Header title="Kontakt">
      Ich freue mich von dir zu hören – egal, ob du eine Projektanfrage hast, Rat brauchst oder einfach quatschen willst
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
      <CenteredContainer>
        <a href="mailto:&#104;&#101;&#108;&#108;&#111;&#064;&#108;&#101;&#107;&#111;&#097;&#114;&#116;&#115;&#046;&#100;&#101;">
          <Button type="primary">
            <Paperplane /> E-Mail
          </Button>
        </a>
      </CenteredContainer>
      <CardContainer>
        <MyLinkCard link="https://www.discordapp.com" discord>
          <Discord />
          LekoArts#2495
        </MyLinkCard>
        <MyLinkCard link="https://www.instagram.com/lekoarts.de" instagram>
          <Instagram />
          3D & Experimente
        </MyLinkCard>
        <MyLinkCard link="https://www.behance.net/lekoarts" behance>
          <Behance />
          Persönliche Projekte
        </MyLinkCard>
        <MyLinkCard link="https://youtube.de/LekoArtsDE" youtube>
          <YouTube />
          Speedarts
        </MyLinkCard>
      </CardContainer>
    </Wrapper>
    <Footer />
  </Layout>
);

export default Kontakt;
