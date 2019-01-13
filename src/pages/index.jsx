import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Container, Layout, LocalizedLink, SkipNavContent, Button } from 'elements'
import { Footer, FeaturedPost, FeaturedProject, Header } from 'components'

const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row;
  margin-top: -10rem;
`

const PostsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 10rem;
`

const Text = styled.p`
  text-align: center;
  font-family: ${props => props.theme.fontFamily.heading};
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.5rem;
  max-width: 860px;
  margin: 5rem auto;
  text-shadow: ${props => props.theme.shadow.text.big};
`

const LocalizedButton = Button.withComponent(LocalizedLink)

const Index = ({
  data: {
    content: { data: home },
    projects: { edges: projectEdges },
    posts: { edges: postEdges },
  },
  pageContext: { locale, i18n },
  location,
}) => (
  <Layout locale={locale} pathname={location.pathname}>
    <Header big html={`<h1>${home.hero_title}</h1>`} />
    <SkipNavContent>
      <Container type="big">
        <ProjectsWrapper>
          {projectEdges.map((project, index) => (
            <FeaturedProject
              delay={index}
              key={project.node.uid}
              cover={project.node.data.cover.localFile.childImageSharp.fluid}
              customer={project.node.data.customer}
              path={project.node.fields.slug}
              title={project.node.data.title.text}
              testid={`featured-project-${index}`}
            />
          ))}
        </ProjectsWrapper>
      </Container>
      <Container>
        <Text>
          {home.teaser_projects.text} <br />
          <LocalizedButton to="/projects" type="primary" role="button">
            {i18n.projects}
          </LocalizedButton>
        </Text>
      </Container>
      <Container>
        <PostsWrapper>
          {postEdges.map((post, index) => (
            <FeaturedPost
              key={post.node.uid}
              cover={post.node.data.cover.localFile.childImageSharp.fluid}
              date={post.node.data.date}
              path={post.node.fields.slug}
              title={post.node.data.title.text}
              category={post.node.data.category.document[0].data.kategorie}
              testid={`featured-post-${index}`}
            />
          ))}
        </PostsWrapper>
        <Text>
          {home.teaser_blog.text} <br />
          <LocalizedButton to="/blog" type="secondary" role="button">
            Blog
          </LocalizedButton>
        </Text>
      </Container>
    </SkipNavContent>
    <Footer />
  </Layout>
)

export default Index

Index.propTypes = {
  data: PropTypes.shape({
    content: PropTypes.object.isRequired,
    projects: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
    posts: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired,
    i18n: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query IndexQuery($locale: String!) {
    content: prismicHome(lang: { eq: $locale }) {
      data {
        hero_title
        teaser_projects {
          text
        }
        teaser_blog {
          text
        }
      }
    }
    projects: allPrismicProjekt(
      limit: 3
      sort: { fields: [data___date], order: DESC }
      filter: { lang: { eq: $locale } }
    ) {
      edges {
        node {
          ...FeaturedProject
        }
      }
    }
    posts: allPrismicBlogpost(
      limit: 2
      sort: { fields: [data___date], order: DESC }
      filter: { lang: { eq: $locale } }
    ) {
      edges {
        node {
          ...FeaturedPost
        }
      }
    }
  }
`
