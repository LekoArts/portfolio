import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import Helmet from 'react-helmet'
import { Container, Layout, SkipNavContent } from 'elements'
import { Footer, Header, Tags } from 'components'
import config from '../../config/website'

const CategoriesContainer = styled(Container)`
  margin: 4rem auto;
  a {
    font-size: 1rem;
    padding: 0.25rem 0.85rem;
  }
`

const Categories = ({ data: { categories, posts }, pageContext: { locale, i18n } }) => {
  const allCategories = categories.edges.map(category => category.node.data.kategorie)

  return (
    <Layout locale={locale}>
      <Helmet title={`${i18n.categories} | ${config.siteTitleAlt}`} />
      <Header title={i18n.categories}>
        {posts.totalCount} {i18n.pageCategoriesOne} {categories.totalCount} {i18n.pageCategoriesTwo}
      </Header>
      <SkipNavContent>
        <CategoriesContainer>
          <Tags tags={allCategories} linkPrefix="categories" />
        </CategoriesContainer>
      </SkipNavContent>
      <Footer />
    </Layout>
  )
}

export default Categories

Categories.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.array.isRequired,
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired,
    i18n: PropTypes.object.isRequired,
  }).isRequired,
}

export const pageQuery = graphql`
  query CategoriesPage($locale: String!) {
    categories: allPrismicKategorie(sort: { fields: data___kategorie, order: ASC }, filter: { lang: { eq: $locale } }) {
      totalCount
      edges {
        node {
          data {
            kategorie
          }
        }
      }
    }
    posts: allPrismicBlogpost(filter: { lang: { eq: $locale } }) {
      totalCount
    }
  }
`
