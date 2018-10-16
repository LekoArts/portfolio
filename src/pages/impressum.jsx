/* eslint max-len: 0 */

import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { Container, Layout } from 'elements'
import Footer from '../components/Footer'
import Header from '../components/Header'
import config from '../../config/website'

const Impressum = ({
  data: {
    allPrismicSeite: { edges },
  },
}) => {
  const i = edges[0].node.data
  return (
    <Layout>
      <Helmet title={`${i.title.text} | ${config.siteTitle}`} />
      <Header title={i.title.text} />
      <div style={{ marginTop: '3rem' }}>
        <Container type="article">
          <div dangerouslySetInnerHTML={{ __html: i.content.html }} />
        </Container>
      </div>
      <Footer />
    </Layout>
  )
}

export default Impressum

Impressum.propTypes = {
  data: PropTypes.shape({
    allPrismicSeite: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
}

export const pageQuery = graphql`
  query ImpressumQuery {
    allPrismicSeite(filter: { uid: { eq: "impressum" } }) {
      edges {
        node {
          uid
          data {
            title {
              text
            }
            content {
              html
            }
          }
        }
      }
    }
  }
`
