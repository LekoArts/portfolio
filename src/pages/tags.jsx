import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import { Container, Layout, SkipNavContent, FadeIn } from 'elements'
import { Footer, Header, Tags } from 'components'
import config from '../../config/website'
import { LocaleConsumer } from '../elements/Layout'

const TagsContainer = styled(Container)`
  margin: 4rem auto;
  a {
    font-size: 1rem !important;
    padding: 0.25rem 0.85rem !important;
  }
`

const TagsPage = ({ data: { tags, posts }, pageContext: { locale }, location }) => {
  const allTags = tags.edges.map((tag) => tag.node.data.tag)

  return (
    <Layout locale={locale} pathname={location.pathname}>
      <Helmet title={`Tags | ${config.siteTitleAlt}`} />
      <LocaleConsumer>
        {({ i18n }) => (
          <Header title="Tags">
            {posts.totalCount} {i18n.page_tags_one} {tags.totalCount} {i18n.page_tags_two}
          </Header>
        )}
      </LocaleConsumer>
      <SkipNavContent>
        <FadeIn>
          <TagsContainer>
            <Tags tags={allTags} linkPrefix="tags" />
          </TagsContainer>
        </FadeIn>
      </SkipNavContent>
      <Footer />
    </Layout>
  )
}

export default TagsPage

TagsPage.propTypes = {
  data: PropTypes.shape({
    tags: PropTypes.shape({
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
