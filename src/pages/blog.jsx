import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import styled from 'react-emotion'
import { Container, Layout, SkipNavContent } from 'elements'
import { ItemBlog, Footer, Header } from 'components'
import config from '../../config/website'

const Base = styled(Container)`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
`

const Blog = ({
  data: {
    allPrismicBlogpost: { edges: blogposts },
    content: { data: b },
  },
  pageContext: { locale },
}) => (
  <Layout locale={locale}>
    <Helmet title={`${b.title.text} | ${config.siteTitleAlt}`} />
    <Header title={b.title.text}>{b.description.text}</Header>
    <SkipNavContent>
      <Base type="big">
        {blogposts.map(({ node }) => (
          <ItemBlog
            key={node.uid}
            path={node.fields.slug}
            cover={node.data.cover.localFile.childImageSharp.fluid}
            title={node.data.title.text}
            date={node.data.date}
            category={node.data.category.document[0].data.kategorie}
            timeToRead={node.fields.timeToRead}
            excerpt={node.fields.excerpt}
          />
        ))}
      </Base>
    </SkipNavContent>
    <Footer />
  </Layout>
)

export default Blog

Blog.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired,
  }).isRequired,
}

export const pageQuery = graphql`
  query BlogQuery($name: String!, $locale: String!) {
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
    allPrismicBlogpost(sort: { fields: [data___date], order: DESC }, filter: { lang: { eq: $locale } }) {
      edges {
        node {
          uid
          fields {
            slug
            timeToRead
            excerpt
          }
          data {
            title {
              text
            }
            date
            category {
              document {
                data {
                  kategorie
                }
              }
            }
            cover {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 900, quality: 85, traceSVG: { color: "#2B2B2F" }) {
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
