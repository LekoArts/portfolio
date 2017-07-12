/* eslint no-unused-expressions: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import { injectGlobal } from 'emotion';
import { ThemeProvider } from 'emotion-theming';
import 'typeface-montserrat';
import 'typeface-istok-web';
import { reset, headroom } from 'styles';
import { SEO } from 'elements';
import Navigation from '../components/Navigation';
import theme from '../../config/theme';

injectGlobal`
  ${reset}
  .gatsby-resp-image-wrapper {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    border-radius: ${theme.borderRadius.default};
    .gatsby-resp-image-background-image, .gatsby-resp-image-image {
      border-radius: ${theme.borderRadius.default};
    }
  }
  .gatsby-resp-iframe-wrapper {
    margin-bottom: 2rem;
  }
  ${headroom}
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <SEO />
      <Navigation />
      {children}
    </React.Fragment>
  </ThemeProvider>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};
