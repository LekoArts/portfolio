import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import kebabCase from 'lodash/kebabCase'
import { darken } from 'polished'
import Helmet from 'react-helmet'
import { Container, Layout, LocalizedLink } from 'elements'
import config from '../../config/website'
import Footer from '../components/Footer'
import Header from '../components/Header'

const TagsContainer = styled.div`
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

const Tags = ({ data: { tags, posts }, pageContext: { locale, i18n } }) => (
  <Layout locale={locale}>
    <Helmet title={`Tags | ${config.siteTitleAlt}`} />
    <Header title="Tags">
      {posts.totalCount} {i18n.pageTagsOne} {tags.totalCount} {i18n.pageTagsTwo}
    </Header>
    <Container>
      <TagsContainer>
        {tags.edges.map(tag => (
          <LocalizedLink key={tag.node.data.tag} to={`/tags/${kebabCase(tag.node.data.tag)}`}>
            <span>{tag.node.data.tag}</span>
          </LocalizedLink>
        ))}
      </TagsContainer>
    </Container>
    <Footer />
  </Layout>
)

export default Tags

Tags.propTypes = {
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
  query TagsPage($locale: String!) {
    tags: allPrismicTag(sort: { fields: data___tag, order: ASC }, filter: { lang: { eq: $locale } }) {
      totalCount
      edges {
        node {
          data {
            tag
          }
        }
      }
    }
    posts: allPrismicBlogpost(filter: { lang: { eq: $locale } }) {
      totalCount
    }
  }
`
