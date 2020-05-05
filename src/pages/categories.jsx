import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { Container, Layout, SkipNavContent, FadeIn } from 'elements'
import { Footer, Header, Tags } from 'components'
import { LocaleConsumer } from '../elements/Layout'
import config from '../../config/website'

const CategoriesContainer = styled(Container)`
  margin: 4rem auto;
  a {
    font-size: 1rem !important;
    padding: 0.25rem 0.85rem !important;
  }
`

const Categories = ({ data: { categories, posts }, pageContext: { locale }, location }) => {
  const allCategories = categories.edges.map((category) => category.node.data.kategorie)

  return (
    <Layout locale={locale} pathname={location.pathname}>
      <LocaleConsumer>
        {({ i18n }) => (
          <>
            <Helmet title={`${i18n.categories} | ${config.siteTitleAlt}`} />
            <Header title={i18n.categories}>
              {posts.totalCount} {i18n.page_categories_one} {categories.totalCount} {i18n.page_categories_two}
            </Header>
            <SkipNavContent>
              <FadeIn>
                <CategoriesContainer>
                  <Tags tags={allCategories} linkPrefix="categories" />
                </CategoriesContainer>
              </FadeIn>
            </SkipNavContent>
            <Footer />
          </>
        )}
      </LocaleConsumer>
    </Layout>
  )
}

export default Categories

Categories.propTypes = {
  data: PropTypes.shape({
    categories: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.array.isRequired,
    }),
    posts: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
    }),
  }).isRequired,
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
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
