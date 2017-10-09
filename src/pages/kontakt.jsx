import React from "react";
import Helmet from "react-helmet";
import { Fade } from "react-reveal";
import Footer from "../components/Footer/Footer";
import Container from "../components/Container/Container";
import Header from "../components/Header/Header";
import Button from "../components/Button/Button";
import Line from "../components/Line/Line";
import styles from "./kontakt.module.scss";
import config from "../../data/SiteConfig";

export default class Kontakt extends React.Component {
  render() {
    return (
      <div className="container kontakt-container">
        <Helmet title={`Kontakt | ${config.siteTitle}`} />
        <Header slim subTitle="Ich freue mich von dir zu hören – egal, ob du ein Projekt starten willst, eine Frage hast oder mehr Designs sehen willst">
          Kontakt
        </Header>
        <Container text>
            <h3>Hi! Ich heiße Lennart und bin autodidaktischer Grafikdesigner & Front-End Entwickler.</h3>
            <p>Seit über 5 Jahren arbeite ich in den Bereichen Webdesign, Printdesign und Bildbearbeitung. Zusätzlich arbeite ich seit über 3 Jahren als Front-End Entwickler. Seitdem konnte ich viele andere talentierte Menschen kennenlernen und meine Zeit dafür nutzen, mich kontinuierlich weiterzubilden, Dinge auszuprobieren und schlussendlich das Handwerk in meinem Bereich vollends zu erlernen.</p>
            <p>Für meine Kunden gestalte ich maßgeschneiderte, intuitive und visuell ansprechende Designs und Websiten – von der Konzeption über die Kreation bis zur technischen Umsetzung begleite ich alle Schritte.</p>
        </Container>
        <Container text>
            <Line />
        </Container>
        <Footer />
      </div>
    );
  }
}