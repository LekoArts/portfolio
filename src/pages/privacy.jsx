/* eslint max-len: 0 */
/* eslint react/no-unescaped-entities: 0 */
/* eslint no-script-url: 0 */
/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { Container, Layout } from 'elements'
import Footer from '../components/Footer'
import Header from '../components/Header'
import config from '../../config/website'

const Privacy = ({
  data: {
    content: { data: p },
  },
  pageContext: { locale },
}) => (
  <Layout locale={locale}>
    <Helmet title={`${p.title.text} | ${config.siteTitle}`} />
    <Header title={p.title.text} />
    <div style={{ marginTop: '3rem' }}>
      <Container type="article">
        <div dangerouslySetInnerHTML={{ __html: p.content.html }} />
      </Container>
    </div>
    <Footer />
  </Layout>
)

export default Privacy

Privacy.propTypes = {
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
  query PrivacyQuery($name: String!) {
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
