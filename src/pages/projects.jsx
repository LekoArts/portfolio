import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import styled from 'react-emotion'
import { Container, Layout, SkipNavContent } from 'elements'
import config from '../../config/website'
import ItemProject from '../components/ItemProject'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Base = styled(Container)`
  padding-top: 5rem;
  padding-bottom: 5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    grid-template-columns: 1fr;
  }
`

const Projects = ({
  data: {
    allPrismicProjekt: { edges },
    content: { data: p },
  },
  pageContext: { locale },
}) => (
  <Layout locale={locale}>
    <Helmet title={`${p.title.text} | ${config.siteTitleAlt}`} />
    <Header title={p.title.text}>{p.description.text}</Header>
    <SkipNavContent>
      <Base type="big">
        {edges.map(project => (
          <ItemProject
            key={project.node.uid}
            path={project.node.fields.slug}
            cover={project.node.data.cover.localFile.childImageSharp.fluid}
            customer={project.node.data.customer}
            title={project.node.data.title.text}
          />
        ))}
      </Base>
    </SkipNavContent>
    <Footer />
  </Layout>
)

export default Projects

Projects.propTypes = {
  data: PropTypes.shape({
    allPrismicProjekt: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired,
  }).isRequired,
}

export const pageQuery = graphql`
  query ProjectsQuery($name: String!, $locale: String!) {
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
    allPrismicProjekt(sort: { fields: [data___date], order: DESC }, filter: { lang: { eq: $locale } }) {
      edges {
        node {
          uid
          fields {
            slug
          }
          data {
            title {
              text
            }
            customer
            cover {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 900, quality: 90, traceSVG: { color: "#2B2B2F" }) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
