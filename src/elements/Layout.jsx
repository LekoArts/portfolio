/* eslint no-unused-expressions: 0 */

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { injectGlobal } from 'emotion'
import { ThemeProvider } from 'emotion-theming'
import 'typeface-montserrat'
import 'typeface-istok-web'
import { reset, headroom } from 'styles'
import { SEO } from 'elements'
import Navigation from '../components/Navigation'
import theme from '../../config/theme'
import locales from '../../config/i18n'

injectGlobal`
  ${reset}
  .gatsby-resp-image-wrapper {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    border-radius: ${theme.borderRadius.default};
    .gatsby-resp-image-background-image, .gatsby-resp-image-image {
      border-radius: ${theme.borderRadius.default};
    }
  }
  body {
    -webkit-tap-highlight-color: transparent;
  }
  .gatsby-resp-iframe-wrapper {
    margin-bottom: 2rem;
  }
  ${headroom}
`

const { Provider: LocaleProvider, Consumer: LocaleConsumer } = React.createContext()

const Layout = ({ children, locale }) => (
  <StaticQuery
    query={query}
    render={({ de: { data: translationsDE }, en: { data: translationsEN } }) => {
      const prismic = {
        'de-de': {
          ...translationsDE,
        },
        'en-gb': {
          ...translationsEN,
        },
      }
      const translations = {
        [locale]: {
          ...locales[locale],
          ...prismic[locale],
        },
      }
      const i18n = translations[locale]
      return (
        <LocaleProvider value={{ locale, i18n }}>
          <ThemeProvider theme={theme}>
            <React.Fragment>
              <SEO i18n={i18n} />
              <Navigation />
              {children}
            </React.Fragment>
          </ThemeProvider>
        </LocaleProvider>
      )
    }}
  />
)

export default Layout

export { LocaleConsumer }

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  locale: PropTypes.string.isRequired,
}

const query = graphql`
  query Translations {
    de: prismicI18N(lang: { eq: "de-de" }) {
      data {
        german
        english
        imprint
        privacy
        footerNote: footer_note
        languages
        readingTime: reading_time
        customer
        task
        period
        patreonHook: patreon_hook
        interest
        readPosts: read_posts
        getStarted: get_started
        startProject: start_project
        github
        instagram
        behance
        youtube
      }
    }
    en: prismicI18N(lang: { eq: "en-gb" }) {
      data {
        german
        english
        imprint
        privacy
        footerNote: footer_note
        languages
        readingTime: reading_time
        customer
        task
        period
        patreonHook: patreon_hook
        interest
        readPosts: read_posts
        getStarted: get_started
        startProject: start_project
        github
        instagram
        behance
        youtube
      }
    }
  }
`
