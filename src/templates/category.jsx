import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { Container, Layout, LocalizedLink, SkipNavContent, FadeIn } from 'elements'
import { Footer, Header, ItemTagCategory } from 'components'
import config from '../../config/website'
import { LocaleConsumer } from '../elements/Layout'

const StyledLink = styled(LocalizedLink)`
  color: ${props => props.theme.colors.white.light};
`

const Category = ({
  pageContext: { category, locale },
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
                '@id':
                  locale === 'de-de' ? 'https://www.lekoarts.de/categories' : 'https://www.lekoarts.de/en/categories',
                name: locale === 'de-de' ? 'Kategorien' : 'Categories',
              },
              position: 1,
            },
            {
              '@type': 'ListItem',
              item: {
                '@id': location.pathname,
                name: category,
              },
              position: 2,
            },
          ],
        }

        return (
          <>
            <Helmet title={`${i18n.category}: ${category} | ${config.siteTitleAlt}`}>
              <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
            </Helmet>
            <Header title={category}>
              {totalCount} {totalCount === 1 ? i18n.post : i18n.posts} {totalCount === 1 ? i18n.belongs : i18n.belong}{' '}
              {i18n.page_category_one} "{category}" {i18n.page_category_two === '-' ? null : i18n.page_category_two}{' '}
              <br />
              <StyledLink to="/categories">
                {i18n.all} {i18n.categories}
              </StyledLink>
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

export default Category

Category.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
    locale: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    allPrismicBlogpost: PropTypes.shape({
      edges: PropTypes.array.isRequired,
      totalCount: PropTypes.number.isRequired,
    }),
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query CategoryPage($category: String, $locale: String!) {
    allPrismicBlogpost(
      sort: { fields: [data___date], order: DESC }
      filter: {
        data: { category: { document: { elemMatch: { data: { kategorie: { eq: $category } } } } } }
        lang: { eq: $locale }
      }
    ) {
      totalCount
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
