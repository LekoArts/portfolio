import React from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'
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

const LocalLink = StyledLink.withComponent(LocalizedLink)

const Category = ({
  pageContext: { c: category, locale },
  data: {
    allPrismicBlogpost: { edges, totalCount },
  },
}) => (
  <Layout locale={locale}>
    <LocaleConsumer>
      {({ i18n }) => (
        <>
          <Helmet title={`${i18n.category}: ${category} | ${config.siteTitleAlt}`} />
          <Header title={category}>
            {totalCount} {totalCount === 1 ? i18n.post : i18n.posts}{' '}
            {totalCount === 1 ? i18n.belongSingular : i18n.belongPlural} {i18n.pageCategoryOne} "{category}"{' '}
            {i18n.pageCategoryTwo} <br />
            <LocalLink to="/categories">{i18n.allCategories}</LocalLink>
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

export default Category

Category.propTypes = {
  pageContext: PropTypes.shape({
    c: PropTypes.string.isRequired,
    locale: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    allPrismicBlogpost: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
}

export const pageQuery = graphql`
  query CategoryPage($c: String, $locale: String!) {
    allPrismicBlogpost(
      sort: { fields: [data___date], order: DESC }
      filter: {
        data: { category: { document: { elemMatch: { data: { kategorie: { eq: $c } } } } } }
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
