import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled from 'react-emotion'
import Helmet from 'react-helmet'
import { Container, Layout, LocalizedLink, SkipNavContent } from 'elements'
import { Footer, Header, ItemTagCategory } from 'components'
import config from '../../config/website'

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.white.light};
`

const LocaleLink = StyledLink.withComponent(LocalizedLink)

const Tag = ({
  pageContext: { tag, locale, i18n },
  data: {
    allPrismicBlogpost: { edges, totalCount },
  },
}) => (
  <Layout locale={locale}>
    <Helmet title={`Tag: ${tag} | ${config.siteTitleAlt}`} />
    <Header title={tag}>
      {totalCount} {totalCount === 1 ? i18n.post : i18n.posts} {totalCount === 1 ? i18n.was : i18n.were}{' '}
      {i18n.pageTagOne} "{tag}" {i18n.pageTagTwo} <br />
      <LocaleLink to="/tags">{i18n.all} Tags</LocaleLink>
    </Header>
    <SkipNavContent>
      <Container>
        {edges.map(edge => (
          <ItemTagCategory
            key={edge.node.uid}
            title={edge.node.data.title.text}
            category={edge.node.data.category.document[0].data.kategorie}
            path={edge.node.fields.slug}
            date={edge.node.data.date}
            timeToRead={edge.node.fields.timeToRead}
            inputTags={edge.node.data.tags}
            excerpt={edge.node.fields.excerpt}
          />
        ))}
      </Container>
    </SkipNavContent>
    <Footer />
  </Layout>
)

export default Tag

Tag.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
    locale: PropTypes.string.isRequired,
    i18n: PropTypes.object.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    allPrismicBlogpost: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
}

export const pageQuery = graphql`
  query TagPage($tag: String, $locale: String!) {
    allPrismicBlogpost(
      sort: { fields: [data___date], order: DESC }
      filter: {
        data: { tags: { elemMatch: { tag: { document: { elemMatch: { data: { tag: { eq: $tag } } } } } } } }
        lang: { eq: $locale }
      }
    ) {
      totalCount
      edges {
        node {
          uid
          fields {
            slug
            excerpt
            timeToRead
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
            tags {
              tag {
                document {
                  data {
                    tag
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
