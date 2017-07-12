/* eslint max-len: 0 */

import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import { Container, Layout } from 'elements';
import config from '../../config/website';
import Footer from '../components/Footer';
import Header from '../components/Header';

const ErrorPage = () => (
  <Layout>
    <Helmet title={`404 | ${config.siteTitle}`} />
    <Header title="404" />
    <Container>
      <p />
      <h1>
        Oh. Hier ist wohl was schiefgelaufen{' '}
        <span role="img" aria-label="thinking">
          🤔
        </span>
      </h1>
      <h3>Die Seite, die du aufrufen wolltest, existiert nicht mehr oder ist momentan nicht erreichbar.</h3>
      <p>
        Um die Leere schnell zu überbrücken, kannst du zur <Link to="/">Homepage</Link> zurückkehren oder meine Videos
        bingewatchen! Schreib mir gerne deine Videovorschläge auf{' '}
        <a href="https://twitter.com/lekoarts_de" target="_blank" rel="nofollow noopener noreferrer">
          Twitter
        </a>{' '}
        <span role="img" aria-label="wink">
          😉
        </span>
      </p>
      <p />
    </Container>
    <Container>
      <div
        style={{
          position: 'relative',
          paddingBottom: '56.25%',
          overflow: 'hidden',
          width: '100%',
          height: 'auto',
          marginBottom: '2rem',
        }}
      >
        <iframe
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
          }}
          title="LekoArts Playlist"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/videoseries?list=PLB-cmN3u7PHJTB_4eeuo6Hy1Ts2HgKD-5"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </Container>
    <Footer />
  </Layout>
);

export default ErrorPage;
