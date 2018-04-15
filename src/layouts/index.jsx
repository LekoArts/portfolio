/* eslint no-unused-expressions: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import { injectGlobal } from 'emotion';
import { ThemeProvider } from 'emotion-theming';
import SEO from '../components/SEO';
import Navigation from '../components/Navigation';
import theme from '../../config/theme';

injectGlobal`
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html {
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    @media (max-width: ${theme.breakpoints.m}) {
      font-size: 16px;
      h1 {
        font-size: 2.074rem;
      }
      h2 {
        font-size: 1.728rem;
      }
      h3 {
        font-size: 1.44rem;
      }
      h4 {
        font-size: 1.2rem;
      }
    }
    @media (max-width: ${theme.breakpoints.s}) {
      h1 {
        font-size: 1.602rem;
      }
      h2 {
        font-size: 1.424rem;
      }
      h3 {
        font-size: 1.266rem;
      }
      h4 {
        font-size: 1.125rem;
      }
    }
  }
  body {
    color: ${theme.colors.black.base};
    background-color: ${theme.colors.white.light};
  }
  ::selection {
    color: ${theme.colors.white.base};
    background-color: ${theme.colors.primary.base};
  }
  a {
    color: ${theme.colors.primary.base};
    transition: ${theme.transitions.default.transition};
    text-decoration: none;
    &:hover, &:focus {
      color: ${theme.colors.primary.light};
    }
  }
  a:not([href]):not([tabindex]) {
    color: inherit;
    text-decoration: none;
    &:hover, &:focus {
      color: inherit;
      text-decoration: none;
    }
    &:focus {
      outline: 0;
    }
  }
  h1 {
    text-shadow: ${theme.shadow.text.big};
  }
  h2 {
    text-shadow: ${theme.shadow.text.small};
  }
  blockquote {
    border-left: 5px solid ${theme.colors.primary.base};
    padding-left: 1rem;
    margin-left: 0;
    margin-right: 0;
    font-style: italic;
    p {
      line-height: 1.3 !important;
    }
  }
  .gatsby-resp-image-wrapper {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }
  .gatsby-resp-iframe-wrapper {
    margin-bottom: 2rem;
  }
  .gatsby-highlight {
    margin-bottom: 2rem;
  }
  [tabindex="-1"]:focus {
    outline: none !important;
  }
  pre {
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
  }
  figure {
    margin: 0 0 1rem 0;
  }
  img {
    vertical-align: middle;
  }
  [role="button"] {
    cursor: pointer;
  }
  a, area, button, [role="button"], input, label, select, summary, textarea {
    touch-action: manipulation;
  }
  table {
    border-collapse: collapse;
    background-color: ${theme.colors.white.base};
  }
  caption {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    color: ${theme.colors.white.light};
    text-align: center;
    caption-side: bottom;
  }
  th {
    text-align: left;
  }
  label {
    display: inline-block;
    margin-bottom: 0.5rem;
  }
  button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
  }
  input, button, select, textarea {
    line-height: inherit;
  }
  input[type="date"],
  input[type="time"],
  input[type="datetime-local"],
  input[type="month"] {
    -webkit-appearance: listbox;
  }
  textarea {
    resize: vertical;
  }
  fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
  }
  legend {
    display: block;
    width: 100%;
    padding: 0;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    line-height: inherit;
  }
  input[type="search"] {
    -webkit-appearance: none;
  }
  output {
    display: inline-block;
  }
  [hidden] {
    display: none !important;
  }
`;

const MainLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div>
      <SEO />
      <Navigation />
      {children()}
    </div>
  </ThemeProvider>
);

export default MainLayout;

MainLayout.propTypes = {
  children: PropTypes.func.isRequired,
};
