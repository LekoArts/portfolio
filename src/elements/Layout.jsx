import React from 'react'
import PropTypes from 'prop-types'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'
import { reset, headroom } from 'styles'
import { SEO, Navigation } from 'components'
import { SkipNavLink } from 'elements'
import 'typeface-montserrat'
import 'typeface-istok-web'
import theme from '../../config/theme'
import locales from '../../config/i18n'

const GlobalStyle = createGlobalStyle`
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

const Layout = ({ children, locale, pathname, customSEO }) => (
  <StaticQuery
    query={translationQuery}
    render={data => {
      // Grab the information from the static file
      const staticLocale = locales[locale]
      // Convert the incoming "de-de" to "de_de"
      const underscored = locale.replace(/-/g, '_')

      const prismicLocale = data[underscored].data
      const i18n = { ...staticLocale, ...prismicLocale }

      return (
        <LocaleProvider value={{ locale, i18n }}>
          <ThemeProvider theme={theme}>
            <>
              <GlobalStyle />
              {!customSEO && <SEO i18n={i18n} pathname={pathname} />}
              <SkipNavLink />
              <Navigation />
              {children}
            </>
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
  pathname: PropTypes.string.isRequired,
  customSEO: PropTypes.bool,
}

Layout.defaultProps = {
  customSEO: false,
}

const translationQuery = graphql`
  query Translations {
    de_de: prismicTranslations(lang: { eq: "de-de" }) {
      data {
        german
        english
        imprint
        privacy
        footer_note
        languages
        reading_time
        minutes
        customer
        task
        period
        more
        all
        patreon_hook
        interest
        read_posts
        get_started
        start_project
        category
        categories
        post
        posts
        belongs
        belongs
        was
        were
        projects
        contact
        page_categories_one
        page_categories_two
        page_category_one
        page_category_two
        page_tag_one
        page_tag_two
        page_tags_one
        page_tags_two
        github
        instagram
        behance
        youtube
        document_name
      }
    }
    en_gb: prismicTranslations(lang: { eq: "en-gb" }) {
      data {
        german
        english
        imprint
        privacy
        footer_note
        languages
        reading_time
        minutes
        customer
        task
        period
        more
        all
        patreon_hook
        interest
        read_posts
        get_started
        start_project
        category
        categories
        post
        posts
        belongs
        belongs
        was
        were
        projects
        contact
        page_categories_one
        page_categories_two
        page_category_one
        page_category_two
        page_tag_one
        page_tag_two
        page_tags_one
        page_tags_two
        github
        instagram
        behance
        youtube
        document_name
      }
    }
  }
`
