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

const Datenschutzerklaerung = ({
  data: {
    allPrismicSeite: { edges },
  },
}) => {
  const d = edges[0].node.data
  return (
    <Layout>
      <Helmet title={`${d.title.text} | ${config.siteTitle}`} />
      <Header title={d.title.text} />
      <div style={{ marginTop: '3rem' }}>
        <Container type="article">
          <div dangerouslySetInnerHTML={{ __html: d.content.html }} />
        </Container>
      </div>
      <Footer />
    </Layout>
  )
}

export default Datenschutzerklaerung

Datenschutzerklaerung.propTypes = {
  data: PropTypes.shape({
    allPrismicSeite: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
}

export const pageQuery = graphql`
  query DatenschutzQuery {
    allPrismicSeite(filter: { uid: { eq: "datenschutz" } }) {
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
