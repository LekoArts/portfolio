import React from 'react'
import PropTypes from 'prop-types'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
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

const Layout = ({ children, locale, pathname, customSEO }) => {
  const i18n = locales[locale]
  return (
    <LocaleProvider value={{ locale, i18n }}>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyle />
          {!customSEO && <SEO i18n={i18n} pathname={pathname} />}
          <noscript>To browse this site, please enable JavaScript.</noscript>
          <SkipNavLink />
          <Navigation />
          {children}
        </React.Fragment>
      </ThemeProvider>
    </LocaleProvider>
  )
}

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
