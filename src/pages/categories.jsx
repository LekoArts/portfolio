import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import kebabCase from 'lodash/kebabCase'
import { darken } from 'polished'
import Helmet from 'react-helmet'
import { Container, Layout, LocalizedLink, SkipNavContent } from 'elements'
import config from '../../config/website'
import Footer from '../components/Footer'
import Header from '../components/Header'

const CategoriesContainer = styled.div`
  margin: 2rem 0 4rem 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  a {
    background: ${props => props.theme.tint.black};
    color: ${props => props.theme.colors.black.light};
    padding: 0.25rem 0.85rem;
    border-radius: ${props => props.theme.borderRadius.default};
    margin: 0.3rem 0.6rem 0.3rem 0;
    white-space: nowrap;
    &:hover {
      background: ${props => darken(0.35, props.theme.tint.black)};
      color: ${props => darken(0.35, props.theme.colors.black.light)};
    }
  }
`

const Categories = ({ data: { categories, posts }, pageContext: { locale, i18n } }) => (
  <Layout locale={locale}>
    <Helmet title={`${i18n.categories} | ${config.siteTitleAlt}`} />
    <Header title={i18n.categories}>
      {posts.totalCount} {i18n.pageCategoriesOne} {categories.totalCount} {i18n.pageCategoriesTwo}
    </Header>
    <SkipNavContent>
      <Container>
        <CategoriesContainer>
          {categories.edges.map(category => (
            <LocalizedLink
              key={category.node.data.kategorie}
              to={`/categories/${kebabCase(category.node.data.kategorie)}`}
            >
              <span>{category.node.data.kategorie}</span>
            </LocalizedLink>
          ))}
        </CategoriesContainer>
      </Container>
    </SkipNavContent>
    <Footer />
  </Layout>
)

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
