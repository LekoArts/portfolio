import React from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import kebabCase from 'lodash/kebabCase'
import { darken } from 'polished'
import Helmet from 'react-helmet'
import { Container, Layout } from 'elements'
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

const Categories = ({ data: { categories, posts }, pageContext: { locale } }) => (
  <Layout locale={locale}>
    <Helmet title={`Kategorien | ${config.siteTitle}`} />
    <Header title="Kategorien">
      {posts.totalCount} Beiträge wurden in {categories.totalCount} Kategorien eingeteilt
    </Header>
    <Container>
      <CategoriesContainer>
        {categories.edges.map(category => (
          <Link key={category.node.data.kategorie} to={`/categories/${kebabCase(category.node.data.kategorie)}`}>
            <span>{category.node.data.kategorie}</span>
          </Link>
        ))}
      </CategoriesContainer>
    </Container>
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
  }).isRequired,
}

export const pageQuery = graphql`
  query CategoriesPage {
    categories: allPrismicKategorie(sort: { fields: data___kategorie, order: ASC }) {
      totalCount
      edges {
        node {
          data {
            kategorie
          }
        }
      }
    }
    posts: allPrismicBlogpost {
      totalCount
    }
  }
`
