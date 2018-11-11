import React from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import Helmet from 'react-helmet'
import { Spring, animated, config as springConfig } from 'react-spring'
import { Container, Layout, LocalizedLink, SkipNavContent } from 'elements'
import { Footer, Header, ItemTagCategory } from 'components'
import config from '../../config/website'

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.white.light};
`

const LocalLink = StyledLink.withComponent(LocalizedLink)

const Category = ({
  pageContext: { category, locale, i18n },
  data: {
    allPrismicBlogpost: { edges, totalCount },
  },
}) => (
  <Layout locale={locale}>
    <Helmet title={`${i18n.category}: ${category} | ${config.siteTitleAlt}`} />
    <Header title={category}>
      {totalCount} {totalCount === 1 ? i18n.post : i18n.posts} {totalCount === 1 ? i18n.belongs : i18n.belong}{' '}
      {i18n.pageCategoryOne} "{category}" {i18n.pageCategoryTwo} <br />
      <LocalLink to="/categories">
        {i18n.all} {i18n.categories}
      </LocalLink>
    </Header>
    <SkipNavContent>
      <Spring native config={springConfig.slow} from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {props => (
          <animated.div style={props}>
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
          </animated.div>
        )}
      </Spring>
    </SkipNavContent>
    <Footer />
  </Layout>
)

export default Category

Category.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
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
