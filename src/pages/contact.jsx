import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Spring, animated, config as springConfig } from 'react-spring'
import { Container, Layout, SkipNavContent, Button } from 'elements'
import { Footer, Header } from 'components'
import { LinkCard } from 'components/Card'
import { Paperplane, GitHub, Instagram, Behance, YouTube } from 'icons'
import { LocaleConsumer } from '../elements/Layout'
import config from '../../config/website'

const CenteredContainer = styled(Container)`
  text-align: center;
  svg {
    fill: white;
  }
`

const MyLinkCard = styled(LinkCard)`
  flex-basis: calc(99% * 1 / 4 - 1rem);
  max-width: calc(99% * 1 / 4 - 1rem);
  width: calc(99% * 1 / 4 - 1rem);
  margin-bottom: 2rem;
  @media (max-width: 1135px) {
    flex-basis: calc(99% * 1 / 2 - 1rem);
    max-width: calc(99% * 1 / 2 - 1rem);
    width: calc(99% * 1 / 2 - 1rem);
  }
  @media (max-width: 690px) {
    flex-basis: calc(99% * 1 / 1);
    max-width: calc(99% * 1 / 1);
    width: calc(99% * 1 / 1);
  }
`

const CardContainer = styled(Container)`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 4rem;
`

const Outbound = Button.withComponent('a')

const Content = styled(SkipNavContent)`
  margin-top: 3rem;
  margin-bottom: 2rem;
`

const Contact = ({
  data: {
    content: { data: c },
  },
  pageContext: { locale },
  location,
}) => (
  <Layout locale={locale} pathname={location.pathname}>
    <Helmet title={`${c.title.text} | ${config.siteTitleAlt}`} />
    <Header title={c.title.text}>{c.description.text}</Header>
    <Content>
      <Spring native config={springConfig.slow} from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {props => (
          <animated.div style={props}>
            <Container type="article">
              <div dangerouslySetInnerHTML={{ __html: c.content.html }} />
            </Container>
            <CenteredContainer>
              <Outbound
                href="mailto:&#104;&#101;&#108;&#108;&#111;&#064;&#108;&#101;&#107;&#111;&#097;&#114;&#116;&#115;&#046;&#100;&#101;"
                type="primary"
                role="button"
              >
                <Paperplane /> E-Mail
              </Outbound>
            </CenteredContainer>
            <LocaleConsumer>
              {({ i18n }) => (
                <CardContainer>
                  <MyLinkCard link="https://github.com/LekoArts" type="github">
                    <GitHub />
                    {i18n.github}
                  </MyLinkCard>
                  <MyLinkCard link="https://www.instagram.com/lekoarts.de" type="instagram">
                    <Instagram />
                    {i18n.instagram}
                  </MyLinkCard>
                  <MyLinkCard link="https://www.behance.net/lekoarts" type="behance">
                    <Behance />
                    {i18n.behance}
                  </MyLinkCard>
                  <MyLinkCard link="https://youtube.de/LekoArtsDE" type="youtube">
                    <YouTube />
                    {i18n.youtube}
                  </MyLinkCard>
                </CardContainer>
              )}
            </LocaleConsumer>
          </animated.div>
        )}
      </Spring>
    </Content>
    <Footer />
  </Layout>
)

export default Contact

Contact.propTypes = {
  data: PropTypes.shape({
    allPrismicSeite: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query ContactQuery($name: String!, $locale: String!) {
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
  }
`
