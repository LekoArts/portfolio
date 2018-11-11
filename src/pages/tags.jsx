import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import Helmet from 'react-helmet'
import { animated, config as springConfig, Spring } from 'react-spring'
import { Container, Layout, SkipNavContent } from 'elements'
import { Footer, Header, Tags } from 'components'
import config from '../../config/website'

const TagsContainer = styled(Container)`
  margin: 4rem auto;
  a {
    font-size: 1rem !important;
    padding: 0.25rem 0.85rem !important;
  }
`

const TagsPage = ({ data: { tags, posts }, pageContext: { locale, i18n } }) => {
  const allTags = tags.edges.map(tag => tag.node.data.tag)

  return (
    <Layout locale={locale}>
      <Helmet title={`Tags | ${config.siteTitleAlt}`} />
      <Header title="Tags">
        {posts.totalCount} {i18n.pageTagsOne} {tags.totalCount} {i18n.pageTagsTwo}
      </Header>
      <SkipNavContent>
        <Spring native config={springConfig.slow} from={{ opacity: 0 }} to={{ opacity: 1 }}>
          {props => (
            <animated.div style={props}>
              <TagsContainer>
                <Tags tags={allTags} linkPrefix="tags" />
              </TagsContainer>
            </animated.div>
          )}
        </Spring>
      </SkipNavContent>
      <Footer />
    </Layout>
  )
}

export default TagsPage

TagsPage.propTypes = {
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
