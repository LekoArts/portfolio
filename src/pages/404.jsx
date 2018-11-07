/* eslint max-len: 0 */

import React from 'react'
import Helmet from 'react-helmet'
import { Container, Layout } from 'elements'
import { Footer, Header } from 'components'
import config from '../../config/website'

const ErrorPage = () => (
  <Layout locale="de-de">
    <Helmet title={`404 | ${config.siteTitleAlt}`} />
    <Header title="404" />
    <Container>
      <p />
      <h1>
        Oh. Something gone wrong here{' '}
        <span role="img" aria-label="thinking">
          🤔
        </span>
      </h1>
      <h3>The page you requested isn't available right now.</h3>
      <p>
        You can go back of course... But you also can watch my videos! Send me your video ideas over at{' '}
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
)

export default ErrorPage
