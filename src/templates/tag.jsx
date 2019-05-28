import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { Container, Layout, LocalizedLink, SkipNavContent, FadeIn } from 'elements'
import { Footer, Header, ItemTagCategory } from 'components'
import config from '../../config/website'
import { LocaleConsumer } from '../elements/Layout'

const StyledLink = styled(LocalizedLink)`
  color: ${props => props.theme.colors.white.light};
`

const Tag = ({
  pageContext: { tag, locale },
  data: {
    allPrismicBlogpost: { edges, totalCount },
  },
  location,
}) => (
  <Layout locale={locale} pathname={location.pathname}>
    <LocaleConsumer>
      {({ i18n }) => {
        const breadcrumb = {
          '@context': 'http://schema.org',
          '@type': 'BreadcrumbList',
          description: 'Breadcrumbs list',
          name: 'Breadcrumbs',
          itemListElement: [
            {
              '@type': 'ListItem',
              item: {
                '@id': locale === 'de-de' ? 'https://www.lekoarts.de/tags' : 'https://www.lekoarts.de/en/tags',
                name: 'Tags',
              },
              position: 1,
            },
            {
              '@type': 'ListItem',
              item: {
                '@id': location.pathname,
                name: tag,
              },
              position: 2,
            },
          ],
        }

        return (
          <>
            <Helmet title={`Tag: ${tag} | ${config.siteTitleAlt}`}>
              <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
            </Helmet>
            <Header title={tag}>
              {totalCount} {totalCount === 1 ? i18n.post : i18n.posts} {totalCount === 1 ? i18n.was : i18n.were}{' '}
              {i18n.page_tag_one} "{tag}" {i18n.page_tag_two === '-' ? null : i18n.page_tag_two} <br />
              <StyledLink to="/tags">{i18n.all} Tags</StyledLink>
            </Header>
            <SkipNavContent>
              <FadeIn>
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
              </FadeIn>
            </SkipNavContent>
            <Footer />
          </>
        )
      }}
    </LocaleConsumer>
  </Layout>
)

export default Tag

Tag.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
    locale: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    allPrismicBlogpost: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
  location: PropTypes.object.isRequired,
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
