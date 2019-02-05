import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { Spring, config, animated } from 'react-spring'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import { Container, Content, Wave, Line, Layout, Hero, InfoText, LocalizedLink, Button } from 'elements'
import { hide } from 'styles'
import { SEO, Tags, Suggestions, Footer } from 'components'
import { localizedDate } from 'utilities'
import { LocaleConsumer } from '../elements/Layout'

const pulse = keyframes`
  0% {
    transform: scale(1);
    animation-timing-function: ease-in;
  }
  25% {
    animation-timing-function: ease-out;
    transform: scale(1.05);
  }
  50% {
    transform: scale(1.12);
    animation-timing-function: ease-in;
  }
  to {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
`

const Wrapper = styled.header`
  height: 600px;
  position: relative;
  overflow: hidden;
  background: ${props => props.theme.colors.secondary.dark};
  .gatsby-image-wrapper {
    height: 600px;
    img {
      animation: ${pulse} 30s infinite;
    }
  }
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    height: 500px;
    .gatsby-image-wrapper {
      height: 500px;
    }
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    height: 400px;
    .gatsby-image-wrapper {
      height: 400px;
    }
  }
`

const Information = styled(animated.div)`
  margin-top: 2rem;
  font-family: ${props => props.theme.fontFamily.heading};
  a {
    color: ${props => props.theme.colors.white.base};
    transition: all 0.4s;
    border-bottom: 1px solid transparent;
    &:hover {
      border-bottom: 1px solid ${props => props.theme.colors.white.base};
      color: ${props => props.theme.colors.white.base};
    }
    &:focus {
      color: ${props => props.theme.colors.white.base};
    }
  }
`

const Note = styled.p`
  margin-bottom: 4rem;
`

const Bold = styled.span`
  font-weight: 700;
`

const Cat = styled.span`
  ${hide}
`

const Outbound = Button.withComponent('a')

const Post = ({ pageContext: { left, right, locale }, data: { prismicBlogpost: postNode }, location }) => {
  const post = postNode.data
  const { kategorie } = post.category.document[0].data
  const { fluid } = post.cover.localFile.childImageSharp
  let tags = false
  if (post.tags[0].tag) {
    tags = post.tags.map(tag => tag.tag.document[0].data.tag)
  }
  return (
    <Layout locale={locale} pathname={location.pathname} customSEO>
      <LocaleConsumer>
        {({ i18n }) => (
          <>
            <SEO i18n={i18n} postNode={postNode} pathname={location.pathname} article />
            <Wrapper>
              <Hero>
                <Spring
                  native
                  from={{ opacity: 0, transform: 'translate3d(0, -30px, 0)' }}
                  to={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
                >
                  {props => <animated.h1 style={props}>{post.title.text}</animated.h1>}
                </Spring>
                <Spring native config={config.slow} delay={300} from={{ opacity: 0 }} to={{ opacity: 1 }}>
                  {props => (
                    <Information style={props}>
                      {localizedDate(post.date, locale)} &mdash; {postNode.fields.timeToRead} {i18n.minutes}{' '}
                      {i18n.reading_time} &mdash; <Cat>{i18n.category}: </Cat>
                      <LocalizedLink to={`/categories/${kebabCase(kategorie)}`}>{kategorie}</LocalizedLink>
                    </Information>
                  )}
                </Spring>
              </Hero>
              <Wave />
              <Img fluid={fluid} />
            </Wrapper>
            <Content sliceZone={postNode.data.body} />
            <Container type="article">
              <Line aria-hidden="true" />
              {tags && <Tags linkPrefix="tags" tags={tags} />}
              <Note>
                <Bold>{i18n.interest}</Bold> {i18n.read_posts}{' '}
                <LocalizedLink to={`/categories/${kebabCase(kategorie)}`}>{kategorie}</LocalizedLink>
              </Note>
            </Container>
            <Container>
              <InfoText>
                {i18n.more} {i18n.posts}
              </InfoText>
              <Suggestions left={left} right={right} cardstyle="secondary" />
            </Container>
            <Footer>
              <h2>{i18n.patreon_hook}</h2>
              <Outbound
                href="https://www.patreon.com/lekoarts"
                target="_blank"
                rel="noopener noreferrer"
                type="secondary"
                role="button"
              >
                Patreon
              </Outbound>
            </Footer>
          </>
        )}
      </LocaleConsumer>
    </Layout>
  )
}

export default Post

Post.propTypes = {
  pageContext: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    left: PropTypes.object.isRequired,
    right: PropTypes.object.isRequired,
    locale: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    prismicBlogpost: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    prismicBlogpost(fields: { slug: { eq: $slug } }) {
      fields {
        slug
        timeToRead
        excerpt
      }
      first_publication_date
      last_publication_date
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
        cover {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1920, quality: 90, duotone: { highlight: "#EE9338", shadow: "#d17c26" }) {
                ...GatsbyImageSharpFluid_withWebp
              }
              resize(width: 1200, quality: 90) {
                src
                height
                width
              }
            }
          }
        }
        body {
          ... on PrismicBlogpostBodyText {
            slice_type
            id
            primary {
              text {
                html
                text
              }
            }
          }
          ... on PrismicBlogpostBodyHinweis {
            slice_type
            id
            primary {
              note_title
              note_content {
                html
              }
            }
          }
          ... on PrismicBlogpostBodyCodeBlock {
            slice_type
            id
            primary {
              code_block_title
              code_block {
                html
                text
              }
            }
          }
          ... on PrismicBlogpostBodyQuote {
            slice_type
            id
            primary {
              quote {
                html
              }
            }
          }
          ... on PrismicBlogpostBodyBild {
            slice_type
            id
            primary {
              image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1200, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
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
