import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { Container, Layout, SkipNavContent, FadeIn } from 'elements'
import { ItemBlog, Footer, Header } from 'components'
import config from '../../config/website'

const Base = styled(Container)`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
`

const Blog = ({
  data: {
    allPrismicBlogpost: { edges: blogposts },
    content: { data: b },
  },
  pageContext: { locale },
  location,
}) => (
  <Layout locale={locale} pathname={location.pathname}>
    <Helmet title={`${b.title.text} | ${config.siteTitleAlt}`} />
    <Header title={b.title.text}>{b.description.text}</Header>
    <SkipNavContent>
      <FadeIn>
        <Base type="big">
          {blogposts.map(({ node }) => (
            <ItemBlog
              key={node.uid}
              path={node.fields.slug}
              cover={node.data.cover.localFile.childImageSharp.fluid}
              title={node.data.title.text}
              date={node.data.date}
              category={node.data.category.document[0].data.kategorie}
              timeToRead={node.fields.timeToRead}
              excerpt={node.fields.excerpt}
            />
          ))}
        </Base>
      </FadeIn>
    </SkipNavContent>
    <Footer />
  </Layout>
)

export default Blog

Blog.propTypes = {
  data: PropTypes.shape({
    allPrismicBlogpost: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
    content: PropTypes.shape({
      data: PropTypes.shape({
        title: PropTypes.shape({
          text: PropTypes.string.isRequired,
        }),
        description: PropTypes.shape({
          text: PropTypes.string.isRequired,
        }),
        content: PropTypes.shape({
          html: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query BlogQuery($name: String!, $locale: String!) {
    content: prismicSeite(uid: { eq: $name }, lang: { eq: $locale }) {
      data {
        title {
          text
        }
        description {
          text
        }
        content {
          html
        }
      }
    }
    allPrismicBlogpost(sort: { fields: [data___date], order: DESC }, filter: { lang: { eq: $locale } }) {
      edges {
        node {
          ...ItemBlog
        }
      }
    }
  }
`
