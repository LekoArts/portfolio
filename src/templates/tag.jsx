import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled from 'react-emotion'
import Helmet from 'react-helmet'
import { Container, Layout, LocalizedLink } from 'elements'
import { LocaleConsumer } from 'elements/Layout'
import config from '../../config/website'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ItemTagCategory from '../components/ItemTagCategory'

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.white.light};
`

const LocaleLink = StyledLink.withComponent(LocalizedLink)

const Tag = ({
  pageContext: { t: tag, locale },
  data: {
    allPrismicBlogpost: { edges, totalCount },
  },
}) => (
  <Layout locale={locale}>
    <LocaleConsumer>
      {({ i18n }) => (
        <>
          <Helmet title={`${i18n.tag}: ${tag} | ${config.siteTitleAlt}`} />
          <Header title={tag}>
            {totalCount} {totalCount === 1 ? i18n.post : i18n.posts}{' '}
            {totalCount === 1 ? i18n.tagSingular : i18n.tagPlural} {i18n.pageTagOne} "{tag}" {i18n.pageTagTwo} <br />
            <LocaleLink to="/tags">{i18n.allTags}</LocaleLink>
          </Header>
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
          <Footer />
        </>
      )}
    </LocaleConsumer>
  </Layout>
)

export default Tag

Tag.propTypes = {
  pageContext: PropTypes.shape({
    t: PropTypes.string.isRequired,
    locale: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    allPrismicBlogpost: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
}

export const pageQuery = graphql`
  query TagPage($t: String, $locale: String!) {
    allPrismicBlogpost(
      sort: { fields: [data___date], order: DESC }
      filter: {
        data: { tags: { elemMatch: { tag: { document: { elemMatch: { data: { tag: { eq: $t } } } } } } } }
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
