/* eslint max-len: 0 */

import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { Container, Layout } from 'elements'
import Footer from '../components/Footer'
import Header from '../components/Header'
import config from '../../config/website'

const Imprint = ({
  data: {
    content: { data: i },
  },
  pageContext: { locale },
}) => (
  <Layout locale={locale}>
    <Helmet title={`${i.title.text} | ${config.siteTitleAlt}`} />
    <Header title={i.title.text}>{i.description.text}</Header>
    <div style={{ marginTop: '3rem' }}>
      <Container type="article">
        <div dangerouslySetInnerHTML={{ __html: i.content.html }} />
      </Container>
    </div>
    <Footer />
  </Layout>
)

export default Imprint

Imprint.propTypes = {
  data: PropTypes.shape({
    allPrismicSeite: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired,
  }).isRequired,
}

export const pageQuery = graphql`
  query ImprintQuery($name: String!) {
    content: prismicSeite(uid: { eq: $name }) {
      data {
        title {
          text
        }
        description {
          text
        }
        content {
          html
        }
      }
    }
  }
`
